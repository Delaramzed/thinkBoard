import axios from "axios";

export const api = axios.create({
  baseURL: "https://thinkboard.codewithmmd.ir",
  headers: {
    "Content-Type": "application/json",
  },
});
