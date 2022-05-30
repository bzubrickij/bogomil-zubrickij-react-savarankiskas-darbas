import { FormikConfig } from 'formik';

export type LoginType = {
  email: string,
  password: string,
};

export type FormikConfigType = FormikConfig<LoginType>;
