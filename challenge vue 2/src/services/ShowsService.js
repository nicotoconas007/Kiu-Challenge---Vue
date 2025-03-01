import api from "@/services/api.js";
import { formatResponse } from "@/helpers/formatResponse.js"

export const getShowsByPage = async (page) => {
  try {
    const url = `/shows?page=${page}`;
    const request = await api.get(url);
    return formatResponse(request.data);
  } catch (err) {
    // TODO
  }
  return undefined;
};
