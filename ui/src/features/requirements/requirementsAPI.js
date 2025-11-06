import { axiosApi } from "../../app/axios";


export const postRequirement = async (requirementData) => {
  const response = await axiosApi.post('/requirements', requirementData);
  return response.data;
};
