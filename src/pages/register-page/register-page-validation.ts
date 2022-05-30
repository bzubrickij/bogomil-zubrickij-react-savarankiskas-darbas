import * as Yup from 'yup';
import { RegisterValues } from './register-page-types';

export const initialValues: RegisterValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .required('Give us your EMAIL!')
    .min(8, 'Minimum 8 symbols')
    .email('Not an email'),
  password: Yup.string()
    .required('Give us an password!')
    .matches(/[A-ZĄČĘĖĮŠŲŪŽ]/, 'Give us at least one upper case letter')
    .matches(/[a-ząčęėįšųūž]/, 'Give us at least one lower case letter')
    .matches(/\d/, 'Give us at least one number'),
  repeatPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords no matche - matche'),
});
