"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import connectDB from './config/db';
const cors_1 = __importDefault(require("cors"));
const resumeRoute_1 = __importDefault(require("./routes/resumeRoute"));
dotenv_1.default.config();
// connectDB();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
// this code  serves public as a ststic folder and make them accessible via the browser
//app.use('/public',express.static(path.join(__dirname, "dist/controllers/public")));
app.use('/public', express_1.default.static('dist/controllers/public'));
app.use('/api/build', resumeRoute_1.default);
app.get('/', (req, res) => {
    res.send('what');
});
app.listen(process.env.PORT, () => {
    console.log(`server s running on ${process.env.PORT}succesfully`);
});
