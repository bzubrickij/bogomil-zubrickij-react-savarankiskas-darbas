import * as Yup from 'yup';
import { LoginType } from './login-page-types';

export const initialValues: LoginType = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .required('Give us your EMAIL!')
    .min(8, 'Minimum 8 symbols')
    .email('Not an email'),
  password: Yup.string()
    .required('Give us an password!')
    .min(8, 'Min 8 symbols')
    .max(32, 'Max 32 symbols')
    .matches(/[A-ZĄČĘĖĮŠŲŪŽ]/, 'Upper case letter required')
    .matches(/[a-ząčęėįšųūž]/, 'Lower case letter required')
    .matches(/\d/, 'Number is required'),
});
