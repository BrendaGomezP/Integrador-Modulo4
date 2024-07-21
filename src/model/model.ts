import { getData } from "../db/db"

export async function getAll () {
    const data = await getData()
    const dataEntera = data.results
    return dataEntera

 }
 
 export async function getByProvince (province: string) {
     const data = await getAll()
     const dataFiltrada = data.filter((el) => el.direccion.toLowerCase().includes(province.toLowerCase()))
     return dataFiltrada
    }


 export async function getByName (nombre: string) {
    const allData = await getAll()
    const dataName = allData.filter((el) => el.nombre.toLowerCase().includes(nombre.toLowerCase()))
    return dataName
 }


export async function getById(id:number) {
   const allData = await getAll()
   const museumId = allData.find((el) => el.id == id)
   return museumId
   
   
}


export async function getDescription(nameDescription:string) {
   const getName = await getByName(nameDescription)
   const description = getName[0].descripcion
   return description
   

   }
   

