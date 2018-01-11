var products = [
    {
        name: "Puma Golf T-shirt",
        price:  "$72",
        qtd: "3",
        total: "$216",
        color: "#7966bd",
        size: "XXL",
        img: "img/img-01.jpg"
    },
    {
        name: "Nike Men's Running Shoes",
        price:  "$129",
        qtd: "1",
        total: "$129",
        color: "#e48544",
        size: "43",
        img: "img/img-02.jpg"
        
    },
    {
        name: "DC Men's Axis Snowboard Jacket",
        price:  "$89",
        qtd: "2",
        total: "$178",
        color: "#3398c0",
        size: "s",
        img: "img/img-03.jpg"        
    }
];

var productsPlace = document.getElementById('products');
var listProducts = "";

for(var i = 0; i < products.length; i++){
    listProducts += '<tr><td> <div class="product-description"> <img class="img-responsive" src="' + products[i].img + '"</img>';
    listProducts += '<div class="box-description">' +products[i].name;

    listProducts += '<div class="box-size"><span>size:</span><div class="color-box" style="background: ' + products[i].color + '";</div></div></div></div></td>';
    
    listProducts += '<td><div class="box">' + products[i].price + '</div></td>';
    listProducts += '<td><div class="box">' + products[i].qtd + '</div></td>';
    listProducts += '<td><div class="box">' + products[i].total + '</div></td>';
    listProducts += '</tr>';
}


productsPlace.innerHTML = listProducts;