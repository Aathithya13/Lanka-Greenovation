const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true, default: 1 },
      price:{type:Number,required:true},
    },
  ],
  totalPrice: { type: Number, required: true },
});

const cart = mongoose.model("Cart",CartSchema);

module.exports = cart;