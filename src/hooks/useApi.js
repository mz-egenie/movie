import axios from "axios";

export default function useApi() {
  const api = axios.create({ baseURL: "https://movie.dfysaas.com/api" });
  return { api };
}
