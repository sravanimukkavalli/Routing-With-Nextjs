import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Axios = axios.create({
  baseURL: baseUrl,
  timeout: 5000000,
  headers: {
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "f1aad3cf1fmsh5451689e3d21f57p1c480cjsncae8d2feb97a",
    "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
  },
});


//GET Request
export async function getPlanetInfo() {
  const response = await Axios.get(`${apiUrl}planets/`);
  return response.data;
}
