import { ApiBasePath } from "../Settings";

const productsPath = "/products";

export function fetchAllProducts() {
    return new Promise((resolve, reject) => {
        fetch(ApiBasePath + "/" + productsPath)
            .then(response => {
                if (response.ok) {
                    return resolve(response.json());
                }

                return reject(response.status);
            });
    });
}

export function addNewProduct(name, description) {
    return new Promise((resolve, reject) => {
        fetch(ApiBasePath + "/" + productsPath,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({ Name: name, Description: description })
            }).then(response => {
                if (response.ok) {
                    return resolve(response.json());
                }

                return reject(response.status);
            });
    });
}

export function updateProduct(name, description) {
    return new Promise((resolve, reject) => {
        fetch(ApiBasePath + "/" + productsPath,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({ Name: name, Description: description })
            }).then(response => {
                if (response.ok) {
                    return resolve(response.json());
                }

                return reject(response.status);
            });
    });
}

export function deleteProduct(name) {
    return new Promise((resolve, reject) => {
        fetch(ApiBasePath + "/" + productsPath + "?name=" + name,
            {
                method: "DELETE"
            }).then(response => {
                if (response.ok) {
                    return resolve(response.json());
                }

                return reject(response.status);
            });
    });
}