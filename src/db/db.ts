import { API_URL } from "../constants"

export async function getData() {
    const dataApi = await fetch(API_URL)
    const bodyDataApi = await dataApi.json() // extrae el cuerpo
    return bodyDataApi
     
 }
