export async function getJewelery(){
    return fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res=>res.json());
}


export async function getElectronics(){
    return fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res=>res.json());
}