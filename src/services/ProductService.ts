import axiosApiInstance from "@/intercepetor";

export const ProductService = {
  async create(data: any) {
    const backendUrl = "http://localhost:3333";
    console.log({data})
    const response = await axiosApiInstance.post(`${backendUrl}/product`, data);
    console.log({response})
    console.log('process.env.NEXTAUTH_URL', process.env.BACK_URL)
    return response;
  },

  async findAllProducts(data: any) {
    const backendUrl = "http://localhost:3333";
    const response = await axiosApiInstance.get(`${backendUrl}/product`, data);
    console.log('process.env.NEXTAUTH_URL', process.env.BACK_URL)
    return response;
  },
};
