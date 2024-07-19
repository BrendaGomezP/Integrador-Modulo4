import { getAll, getByProvince, getById, getByName, getDescription } from "../model/model";
import { Messages } from "../utils/messages";

export async function allMuseum() {
    return await getAll()
}

export async function provinceMuseum(province: string) {
    if (!province){
        return Messages.MISSING_DATA
    } else if (typeof province != "string") {
        return Messages.BAD_REQUEST
    }
    return await getByProvince(province)

}

export async function idMuseum(id: number) {
    if (!id){
        return Messages.MISSING_DATA
    }
    return await getById(id)
}

export async function nameMuseum(name: string) {
    if (!name){
        return Messages.MISSING_DATA
    } else if (typeof name != "string") {
        return Messages.BAD_REQUEST
    }
    return await getByName(name)
}

export async function descriptionMuseum(name: string) {
    if (!name){
        return Messages.MISSING_DATA
    } else if (typeof name != "string") {
        return Messages.BAD_REQUEST
    }
    return await getDescription(name)
}

