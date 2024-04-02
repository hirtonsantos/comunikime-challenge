import axiosApiInstance from "@/intercepetor";

const url = process.env.NEXT_PUBLIC_API_URL

export const AuthService = {
  async login(email: string, pass: string) {
    const response = await axiosApiInstance.post(`${url}/auth/signin`, {
      email: email,
      password: pass
    });
    return response;
  },

  async register(data: any) {
    const response = await axiosApiInstance.post(`${url}/auth/register`, data);
    return response;
  },

  async logout() {
    localStorage.clear();
  },
};
