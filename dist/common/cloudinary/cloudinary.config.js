"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const dotenv = require("dotenv");
dotenv.config();
cloudinary_1.v2.config();
exports.default = cloudinary_1.v2;
//# sourceMappingURL=cloudinary.config.js.map