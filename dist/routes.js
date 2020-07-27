"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helooword = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
function helooword(req, res) {
    var user = CreateUser_1.default({
        email: 'carlosteixeira@hotmail.com',
        password: '123456',
        techs: ['typescript', 'react', 'react-native', { title: 'JavaScript', experience: 1000 }],
    });
    console.log(user.email);
    return res.json({ message: 'hello word' });
}
exports.helooword = helooword;
