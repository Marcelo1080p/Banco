import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080",
});

export const adicCliente =  async ( cliente ) => {
   await api.post("/cliente", cliente)
}