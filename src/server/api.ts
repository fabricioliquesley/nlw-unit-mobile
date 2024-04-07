import axios from "axios";

export const api = axios.create({
  // ipv4 Ethernet 2
  baseURL: "http://192.168.2.13:3333"
})
