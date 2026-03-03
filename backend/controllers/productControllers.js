import Product from '../models/product.js';

// Retrieve products => /api/v1/products
export const getProducts = async (req, res) => {
    const products = await Product.find(req.body);
    res.status(200).json({
        status: 'success',
        message: 'Products fetched successfully',
        products: products,
    });
}

// Create a new product => /api/v1/admin/products
export const newProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        status: 'success',
        message: 'Product created successfully',
        product,
    });
}

// Get a single product details => /api/v1/product/:id
export const getProductDetails = async (req, res) => {
    const product = await Product.findById(req?.params?.id);
    if (!product) {
        return res.status(404).json({
            status: 'fail',
            message: 'Product not found',
        });
    }
    res.status(200).json({
        status: 'success',
        message: 'Product details fetched successfully',
        product,
    });
}