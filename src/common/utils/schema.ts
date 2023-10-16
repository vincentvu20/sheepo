import * as yup from 'yup';

const errorMessage = {
  required: 'This field is required',
};

export const SignupSchema = yup
  .object({
    name: yup.string().required(errorMessage.required),
    email: yup.string().required(errorMessage.required),
    phone: yup.string().required(errorMessage.required),
    password: yup.string().required(errorMessage.required).min(8).max(16),
  })
  .required();
