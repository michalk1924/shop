
export async function getItems(catgory){
    return fetch(`https://fakestoreapi.com/products/category/${catgory}`)
    .then(res=>res.json());
}