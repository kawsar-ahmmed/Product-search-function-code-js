
// Search Function Create 

// All Product Names
const products = [
    {name: 'iphone', price: 112999},
    {name: 'symphony', price: 12999},
    {name: 'mouse', price: 4500},
    {name: 'keyboard', price: 1200},
    {name: 'macbook pro 2021', price: 145000},
    {name: 'iPod', price: 23000},
    {name: 'samsung phone', price: 112999},
    {name: 'asus laptop', price: 12999},
    {name: 'apple laptop', price: 4500},
    {name: 'apple mouse', price: 1200},
    {name: 'macbook pro 2020', price: 145000},
    {name: 'watch', price: 23000},
]

// Search Function Create 
function searchProduct (products, searchText){
    const matchProdut = [];
    for (product of products){
        const productName = product.name;
        const productPrice = product.price;
        if (productName.indexOf(searchText) != -1){
            matchProdut.push(product);

        }
    }
    return matchProdut;
}

// Function Call
const match = searchProduct(products, 'laptop');
console.log(match)
