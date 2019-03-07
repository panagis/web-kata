import { ApiBasePath } from "../Settings";

export function fetchAllProducts() {
    return fetch(ApiBasePath + "/products")
        .then(response => response.json());
}