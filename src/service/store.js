
import { DBPORT } from "../components/lib/consts";

export async function getItemsFromFakestore(catgory){
    return fetch(`https://fakestoreapi.com/products/category/${catgory}`)
    .then(res=>res.json());
}

export async function getItems(catgory){
    const herf = `http://localhost:${DBPORT}/${catgory}`;
    console.log(herf);
    return fetch(herf)
    .then(res=>res.json());
}