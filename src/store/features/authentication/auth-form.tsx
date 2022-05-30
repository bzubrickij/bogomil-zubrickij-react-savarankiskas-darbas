import React from 'react';
import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { authClearErrorAction } from './auth-actions';
import { useRootDispatch, useRootSelector } from '../../hooks/hooks';
import { selectAuthError, selectLoggedIn } from './auth-selectors';

type AuthFormProps = {
  submitText: string,
  btnActive?: boolean,
  formName: string,
  onSubmit?: React.FormEventHandler<HTMLFormElement>,
};

const theme = createTheme();

const AuthForm: React.FC<AuthFormProps> = ({
  onSubmit,
  submitText,
  btnActive = true,
  children,
  formName,
}) => {
  const dispatch = useRootDispatch();
  const loading = useRootSelector(selectLoggedIn);
  const error = useRootSelector(selectAuthError);

  const clearError = () => {
    dispatch(authClearErrorAction);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {formName}
          </Typography>
          {error && (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Alert
                sx={{
                  position: 'absolute',
                  top: 0,
                  minWidth: '20%',
                  mt: 9,
                }}
                color="error"
                onClose={clearError}
              >
                {error}
              </Alert>
            </Box>
          )}
          <Box sx={{ mt: 1 }}>

            {children}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!btnActive || loading}
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? <CircularProgress size={20} /> : submitText}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AuthForm;
