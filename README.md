# entrega2 backend

En este ejemplo:

la clase ProductManager tiene una variable this.path que se inicializa desde el constructor y recibe la ruta del archivo en el que se guardarán los productos.
El método loadProducts carga los productos del archivo especificado por this.path en el arreglo this.products. 
El método saveProducts guarda los productos de this.products en el archivo especificado por this.path.
El método addProduct recibe un objeto con los atributos del producto a agregar, asigna un id autoincrementable y lo guarda en this.products mediante el método saveProducts.
El método getProducts devuelve todos los productos en formato de arreglo.
El método getProductById recibe un id y devuelve el producto correspondiente en formato de objeto.
El método updateProduct recibe un id y un objeto con los atributos a actualizar. Busca el producto con el id especificado, actualiza los atributos correspondientes y guarda los cambios en el archivo mediante el método saveProducts.
El método deleteProduct recibe un id y elimina el producto correspondiente del arreglo this.products mediante el método splice. Luego, guarda los cambios en el archivo mediante el método saveProducts.


En el Testing

Creamos una instancia de la clase ProductManager pasando como parámetro la ruta del archivo donde se guardarán los productos (products.json).
Luego, agregamos un producto mediante el método addProduct pasando un objeto con los atributos del producto.
Después, consultamos los productos mediante el método getProducts y los mostramos por consola.
También consultamos un producto por id mediante el método getProductById y lo mostramos por consola.
Luego, actualizamos un producto mediante el método updateProduct pasando el id del producto a actualizar y un objeto con los atributos a modificar.
Finalmente, eliminamos un producto mediante el método deleteProduct pasando el id del producto a eliminar.

con eso se terminaria la segunda entrega !!!
mnuchas gracias =)
