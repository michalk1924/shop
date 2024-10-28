
import { DBPORT } from "../components/lib/consts";

export async function getItemsFromFakestore(catgory){
    return fetch(`https://fakestoreapi.com/products/category/${catgory}`)
    .then(res=>res.json());
}

export async function getItems(catgory){
    return fetch(`http://localhost:${DBPORT}/${catgory}`)
    .then(res=>res.json());
}