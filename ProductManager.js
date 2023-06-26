const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    this.loadProducts();
  }
   
  loadProducts() {
    // Carga los productos del archivo especificado por This en el arreglo products
    try {
      const data = fs.readFileSync(this.path, 'utf8');
      this.products = JSON.parse(data);
    } catch (err) {
      console.error(`Error loading products: ${err}`);
    }
  }

  saveProducts() {
    // Guardamos los productos 
    try {
      const data = JSON.stringify(this.products, null, 2);
      fs.writeFileSync(this.path, data);
    } catch (err) {
      console.error(`Error saving products: ${err}`);
    }
  }

  addProduct(product) {
    // Asignamos  el auto-incrementable id
    const id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    product.id = id;
    this.products.push(product);
    this.saveProducts();
  }

  getProducts() {
    // Devovolvemos los productos en formato arreglo
    return this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  updateProduct(id, updatedProduct) {
    // Recibe un Id y un objeto con los atributos a actualizar
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      console.error(`Product with id ${id} not found`);
      return;
    }
    this.products[index] = { ...this.products[index], ...updatedProduct };
    this.saveProducts();
  }

  deleteProduct(id) {
    // Recibe un Id y eleimina el producto del arreglo 
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) {
      console.error(`Product with id ${id} not found`);
      return;
    }
    this.products.splice(index, 1);
    this.saveProducts();
  }
}

export default ProductManager;dir

