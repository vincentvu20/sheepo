import * as yup from 'yup';

const errorMessage = {
  required: 'This field is required',
};

export const schemaLoginCms = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  password: yup.string().required('Required'),
});

<<<<<<< HEAD
export const schemaCreateAttribute = yup.object().shape({
  name: yup.string().required('This field is required'),
});

export const SignupSchema = yup
=======
export const SignupSchema = yup;
export const LoginSchema = yup
>>>>>>> 98d818a (resolve conflict)
  .object({
    name: yup.string().required(errorMessage.required),
    email: yup.string().required(errorMessage.required),
    phone: yup.string().required(errorMessage.required),
    password: yup.string().required(errorMessage.required).min(8).max(16),
  })
  .required();
