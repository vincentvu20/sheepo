import * as yup from 'yup';

const errorMessage = {
  required: 'This field is required',
};

export const schemaLoginCms = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  password: yup.string().required('Required'),
});

export const schemaCreateAttribute = yup.object().shape({
  name: yup.string().required('This field is required'),
});

export const SignInSchema = yup.object().shape({
  email: yup.string().required(errorMessage.required).email('Email invalid'),
  password: yup.string().required(errorMessage.required),
});

export const SignUpSchema = yup.object().shape({
  email: yup.string().required(errorMessage.required).email('Email invalid'),
  password: yup.string().required(errorMessage.required),
});

export const schemaCreateCategoryCms = yup.object().shape({
  name: yup.string().required('Required'),
});
