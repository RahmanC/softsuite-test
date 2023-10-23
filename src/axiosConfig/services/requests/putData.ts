import { axiosBaseInstance } from "axiosConfig";

export default async function putData(url: string, data?: any, config?: any) {
  try {
    return await axiosBaseInstance.put(url, data, config);
  } catch (error) {
    return error;
  }
}
