const Product = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Create a product
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getProducts, createProduct };