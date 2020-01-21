import axios from "axios";
const getproducts = 'http://localhost:3000/products/';
/*const postproducts = 'http://localhost:3000/products/';
const getproductsByid = 'http://localhost:3000/products/:productId';
const updateproducts = 'http://localhost:3000/products/:productId';
const deleteproducts = 'http://localhost:3000/products/:productId';*/
class Products {
    static getProducts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(getproducts);
                const datas = res.data;
                resolve(datas);
            } catch (err) {
                reject(err);
            }
        })
    }
}
export default Products;