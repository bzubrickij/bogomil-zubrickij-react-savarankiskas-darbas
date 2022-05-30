import React from 'react';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { useSearchParams } from 'react-router-dom';
import AuthForm from '../../store/features/authentication/auth-form';
import { useRootDispatch, useRootSelector } from '../../store/hooks/hooks';
import { selectAuthLoading } from '../../store/features/authentication/auth-selectors';
import { FormikConfigType, RegisterValues } from './register-page-types';
import { createRegisterAction } from '../../store/features/authentication/auth-actions';
import { initialValues, validationSchema } from './register-page-validation';

const Register: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  const handleRegisterSubmit: FormikConfigType['onSubmit'] = ({
    email,
    password,
    repeatPassword,
  }) => {
    const redirect = searchParams.get('redirect') ?? '/';
    const registerAction = createRegisterAction({ email, password, repeatPassword }, redirect);
    dispatch(registerAction);
  };

  const {
    values, touched, errors, dirty, isValid, handleChange, handleBlur, handleSubmit,
  } = useFormik<RegisterValues>({
    initialValues,
    onSubmit: handleRegisterSubmit,
    validationSchema,
  });

  return (
    <AuthForm
      formName="Register"
      btnActive={dirty && isValid}
      onSubmit={handleSubmit}
      submitText="Login"
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email && Boolean(errors.email)}
        helperText={touched.email && errors.email}
        disabled={loading}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={loading}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="repeatPassword"
        label="Repeat Password"
        type="password"
        id="repeatPassword"
        value={values.repeatPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.repeatPassword && Boolean(errors.repeatPassword)}
        helperText={touched.repeatPassword && errors.repeatPassword}
        disabled={loading}
      />
    </AuthForm>
  );
};

export default Register;
