import { ILogin } from '@/redux/slices/types';
import axios from 'axios';

const loginApi = ({ email, password }: ILogin) => {
  return axios.post('/api/login', { email, password });
};

export { loginApi };
