import Product from '../models/product.js';

// Retrieve products => /api/v1/products
export const getProducts = (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'Products fetched successfully'
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