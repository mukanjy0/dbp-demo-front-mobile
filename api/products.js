const base_path = "https://dummyjson.com"

export async function getProducts(query) {
    try {
        const response = await fetch(`${base_path}/products/search?q=${query}`);

        const data = await response.json()

        return data
    } catch(err) {
        console.error(err);
    }
}
