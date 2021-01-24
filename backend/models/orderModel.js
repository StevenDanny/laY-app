import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippnigAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      postalCode: { type: String, required: true },
      //country : {type: String, required: true},
      //city: {type: String, required: true},
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: String, required: true },
    iva: { type: Number, required: true },
    total: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelevired: { type: Boolean, default: false },
    deleviredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
