import { FormikConfig } from 'formik';

export type RegisterValues = {
  email: string;
  password: string;
  repeatPassword: string;
};

export type FormikConfigType = FormikConfig<RegisterValues>;
