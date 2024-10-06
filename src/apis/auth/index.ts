import axiosInstance from '..';

type loginArgs = {userName: string; password: string};
export const login = async ({userName, password}: loginArgs) => {
  await axiosInstance.post('/login', {
    userName,
    password,
  });
};
