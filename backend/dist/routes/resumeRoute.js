"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resumeController_1 = require("../controllers/resumeController");
const app = (0, express_1.default)();
const router = express_1.default.Router();
router.post('/resume-build', resumeController_1.resumeController);
exports.default = router;
