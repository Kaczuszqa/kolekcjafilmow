"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewsController_1 = require("../controllers/reviewsController");
const router = express_1.default.Router();
router.put('/:id', reviewsController_1.updateReview);
router.delete('/:id', reviewsController_1.deleteReview);
exports.default = router;
