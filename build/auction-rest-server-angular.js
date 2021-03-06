"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var Product = /** @class */ (function () {
    function Product(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
    return Product;
}());
var products = [
    new Product(0, 'First Product', 24.99),
    new Product(1, 'Second Product', 64.99),
    new Product(1, 'Second Product', 64.99),
    new Product(2, 'Third Product', 74.99)
];
function getProducts() {
    return products;
}
var app = express();
app.use('/', express.static(path.resolve(__dirname, '..', '')));
app.use('/node_modules', express.static(path.resolve(__dirname, '..', 'node_modules')));
app.post('/products', function (req, res) {
    res.json(getProducts());
});
function getProductById(productId) {
    return products.find(function (p) { return p.id === productId; });
}
app.get('/products/:id', function (req, res) {
    res.json(getProductById(parseInt(req.params.id)));
});
var server = app.listen(8081, 'localhost', function () {
    var _a = server.address(), address = _a.address, port = _a.port;
    console.log('Listening on %s %s', address, port);
});
