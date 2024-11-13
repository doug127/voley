import axios from "axios";

const API_URL = "/api";

export const getAtletas = async () => {
  try {
    const response = await axios.get(`${API_URL}/atletas`);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los atletas:", error);
  }
};
