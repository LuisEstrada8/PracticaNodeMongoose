require('./connections')

const Product = require('./models/product')

async function createProducts() {
    const product = new Product({
        name: 'Alienware',
        description: 'lenovo thinkpad x1 carbon 6th generation',
        price: '13000.99'
    });
    const ProductSave = await product.save();
    return ProductSave;
}

createProducts()
.then(ProductSave => console.log(ProductSave))
.catch(err => console.log(err))