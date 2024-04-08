import axios from "axios";

// your computer's ipv4 address || o endereço ipv4 de seu computador
const ID = "";

export const api = axios.create({
  baseURL: `http://${ID}:3333`,
});
