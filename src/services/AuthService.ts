import axiosApiInstance from "@/intercepetor";

export const AuthService = {
  async login(email: string, pass: string) {
    const backendUrl = "http://localhost:3333"; // Obtendo o URL do backend
    const response = await axiosApiInstance.post(`${backendUrl}/auth/signin`, {
      email: email,
      password: pass
    }); // Usando o URL do backend na solicitação
    console.log({response})
    console.log('process.env.NEXTAUTH_URL', process.env.BACK_URL)
    return response;
  },

  async logout() {
    localStorage.clear();
  },
};
