require('../connections')

const Product = require('../models/product')

async function main() {
   const ProductsFind = await Product.find();
   return ProductsFind
}

main()
.then(ProductsFind => console.log(ProductsFind))
.catch(err => console.log(err))