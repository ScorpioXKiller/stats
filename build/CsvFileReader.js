"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filePath) {
        this.filePath = filePath;
    }
    read() {
        return fs_1.default
            .readFileSync(this.filePath, {
            encoding: 'utf-8',
        })
            .split('\n')
            .map((row) => row.split(',')); // parcing;
    }
}
exports.default = CsvFileReader;
