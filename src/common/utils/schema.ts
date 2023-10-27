import * as yup from 'yup';

export const schemaLoginCms = yup.object().shape({
  email: yup.string().required('Required').email('Email invalid'),
  password: yup.string().required('Required'),
});
