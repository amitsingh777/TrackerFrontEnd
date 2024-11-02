import {AxiosResponse} from 'axios';
import axiosInstance from '..';

type loginArgs = {userName: string; password: string};
type signupArgs = loginArgs & {mail: string};
export const login = async ({userName, password}: loginArgs) => {
  await axiosInstance.post('/login', {
    name: userName,
    password,
  });
};
type SignupResponse = {token: string} | false;
export const signup = async ({
  userName,
  password,
  mail,
}: signupArgs): Promise<SignupResponse> => {
  const response: AxiosResponse<SignupResponse> =
    await axiosInstance.post<SignupResponse>('/signup', {
      name: userName,
      password,
      mail,
    });
  if (typeof response.data === 'string') {
    return false;
  }
  return response.data;
};
