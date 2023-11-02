import * as yup from 'yup';

export const schemaLoginCms = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  password: yup.string().required('Required'),
});

export const schemaCreateAttribute = yup.object().shape({
  name: yup.string().required('This field is required'),
});
