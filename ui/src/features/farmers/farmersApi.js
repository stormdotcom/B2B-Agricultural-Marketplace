import { axiosApi } from "../../app/axios";

export const getFarmers = async () => {
  const response = await axiosApi.get("/farmers");
  return response.data;
};
