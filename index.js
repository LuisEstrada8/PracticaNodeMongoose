require('./connections');
// using the model 
const Product = require('./models/product');

// creating a new document base on the model
const product = new Product({
    name: 'laptop',
    description: 'lenovo thinkpad x1 carbon 6th generation',
    price: '1300.99'
});

product.save((err, document) => {
    if(err) {
        console.log(err);
    }

    console.log(document);
});

console.log('created product', product)

