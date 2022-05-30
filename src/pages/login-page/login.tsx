/* eslint-disable no-console */
import React from 'react';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router-dom';
import { useFormik } from 'formik';
import AuthForm from '../../store/features/authentication/auth-form';
import { useRootDispatch, useRootSelector } from '../../store/hooks/hooks';
import { selectAuthLoading } from '../../store/features/authentication/auth-selectors';
import { createLoginAction } from '../../store/features/authentication/auth-actions';
import { FormikConfigType, LoginType } from './login-page-types';
import { initialValues, validationSchema } from './login-validation';

const LogIn: React.FC = () => {
  const [searchParams] = useSearchParams();
  const loading = useRootSelector(selectAuthLoading);
  const dispatch = useRootDispatch();

  const handleLoginSubmit: FormikConfigType['onSubmit'] = ({ email, password }) => {
    const nextPage = searchParams.get('next') ?? '/';
    const loginAction = createLoginAction({ email, password }, nextPage);
    dispatch(loginAction);
  };

  const {
    values,
    touched,
    errors,
    dirty,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik<LoginType>({
    initialValues,
    onSubmit: handleLoginSubmit,
    validationSchema,
  });

  return (
    <AuthForm
      formName="Log In"
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
        autoComplete="current-password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.password && Boolean(errors.password)}
        helperText={touched.password && errors.password}
        disabled={loading}
      />
    </AuthForm>
  );
};

export default LogIn;
