const Product = require('../models/product');

exports.index = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

exports.show = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

exports.create = async (req, res, next) => {
  try {
    const { productName, productUrl, quantity, category, price } = req.body;

    const qt = await Product.create({
      productName: productName,
      productUrl: productUrl,
      quantity: quantity,
      category: category,
      price: price
    });

    res.status(200).json({ message: "Product was created successfully", product: qt });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { _id, productName, productUrl, quantity, category, price } = req.body;

    const qt = await Product.findOneAndUpdate({ _id: _id }, {
        productName, 
        productUrl, 
        quantity, 
        category,
        price
    });

    res.status(200).json({ message: "Product was updated successfully", product: qt });
  } catch (error) {
    next(error);
  }
};

exports.destroy = async (req, res, next) => {
  try {
    const { _id } = req.body;
    console.log(req.body);
    const qt = await Product.findOneAndRemove({ _id: _id });
    res.status(200).json({ message: "Product was deleted successfully", product: qt});

  } catch (error) {
    next(error);
  }
};