import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_URL = process.env.AKILI_API_URL;
const API_KEY = process.env.AKILI_API_KEY;

export async function searchBlackOwned(location, radius_km) {
  const response = await axios.get(`${API_URL}/search`, {
    params: { location, radius_km },
    headers: { "x-api-key": API_KEY }
  });

  return response.data;
}

