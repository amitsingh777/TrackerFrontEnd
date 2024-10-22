import axiosInstance from '..';

type loginArgs = {userName: string; password: string};
type signupArgs = loginArgs & {mail: string};
export const login = async ({userName, password}: loginArgs) => {
  await axiosInstance.post('/login', {
    userName,
    password,
  });
};
export const signup = async ({userName, password, mail}: signupArgs) => {
  return await axiosInstance.post('/signup', {
    userName,
    password,
    mail,
  });
};
