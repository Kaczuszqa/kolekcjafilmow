"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const cors_1 = __importDefault(require("cors"));
app_1.default.use((0, cors_1.default)());
app_1.default.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
const PORT = process.env.PORT || 3000;
