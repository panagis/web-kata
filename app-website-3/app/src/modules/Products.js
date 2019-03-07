import { ApiBasePath } from "../Settings";

const productsPath = "/products";

export function fetchAllProducts() {
    return fetch(ApiBasePath + "/" + productsPath)
        .then(response => response.json());
}

export function addNewProduct(name, description) {
    return fetch(ApiBasePath + "/" + productsPath,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({Name: name, Description: description})
        })
}

export function updateProduct(name, description) {
    return fetch(ApiBasePath + "/" + productsPath,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({Name: name, Description: description})
        })
}