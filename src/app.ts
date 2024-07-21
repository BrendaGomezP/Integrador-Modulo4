import { allMuseum, provinceMuseum, idMuseum, nameMuseum, descriptionMuseum } from "./controller/controller";
import { Messages } from "./utils/messages";

export async function endPoints(mensaje) {
    const mensajeCliente = mensaje.toString();
    const objetoJs = JSON.parse(mensajeCliente);
  
    if (objetoJs.path == "museum") {
      const giveMuseum = await allMuseum();
      const museumJson = JSON.stringify(giveMuseum);
      return museumJson;
    } else if (objetoJs.path == "province") {
      const province = await provinceMuseum(objetoJs.province);
      const provinceJson = JSON.stringify(province);
      return provinceJson;
    } else if (objetoJs.path == "id") {
        const id = await idMuseum(objetoJs.id);
        const idJson = JSON.stringify(id);
        return idJson;
    } else if (objetoJs.path == "name") {
        const name = await nameMuseum(objetoJs.name);
        const nameJson = JSON.stringify(name);
        return nameJson;
    } else if (objetoJs.path == "name") {
        const province = await provinceMuseum(objetoJs.province);
        const provinceJson = JSON.stringify(province);
        return provinceJson;
    } else if (objetoJs.path == "description") {
        const description = await descriptionMuseum(objetoJs.nameForDesc);
        const descriptionJson = JSON.stringify(description);
        return descriptionJson;
    } else {
        const message = JSON.stringify(Messages.BAD_REQUEST);
        return message;
      }
}