import { getData } from "../db/db"

export async function getAll () {
    const data = await getData()
    const dataEntera = data.results
    return dataEntera
 }
 
 export async function getByCity (ciudad: string) {
     const data = await getAll()
     const dataFiltrada = data.filter((el) => el.direccion.includes(ciudad))
     return dataFiltrada
    }
//  getByCity("Córdoba")

 export async function getByName (nombre: string) {
    const allData = await getAll()
    const dataName = allData.filter((el) => el.nombre.includes(nombre))
    return dataName
 }
//getByName("de la Independencia")

export async function getById(id:number) {
   const allData = await getAll()
   const museumId = allData.find((el) => el.id == id)
   return museumId
   
   
}
//getById(51)

export async function getDescription(nameDescription:string) {
   const getName = await getByName(nameDescription)
   const description = getName[0].descripcion
   return description
   

   }
   
//getDescription("Ricardo")
