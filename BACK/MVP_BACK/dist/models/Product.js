"use strict";
/*****************************************
 *        🤓 ISAAC ESTEVE AQUI 🤓       *
 *****************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
;
;
;
;
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    SKU: { type: String, required: true },
    dimensions: {
        height: { type: Number, required: true },
        width: { type: Number, required: true },
        length: { type: Number, required: true },
        dimension: { type: String, required: true, default: "cm" },
    },
    category: [{
            code: { type: String, required: true },
            name: { type: String, required: true },
            fatherCategory: { type: String, required: true, default: "root" },
        },],
}, {
    timestamps: true,
});
const Product = (0, mongoose_1.model)('Product', productSchema);
exports.default = Product;