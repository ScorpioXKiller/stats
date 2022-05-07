"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const MatchReader_1 = __importDefault(require("./MatchReader"));
const MatchResult_1 = __importDefault(require("./MatchResult"));
const filePath = path_1.default.join(__dirname, '..', 'football.csv');
const matchReader = new MatchReader_1.default(filePath);
const matches = matchReader.parseData();
let manUnitedWins = 0;
for (const match of matches) {
    if ((match[1] === 'Man United' && match[5] === MatchResult_1.default.HomeWin) ||
        (match[2] === 'Man United' && match[5] === MatchResult_1.default.AwayWin)) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} times.`);
