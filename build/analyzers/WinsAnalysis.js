"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResults_1 = __importDefault(require("../helpers/MatchResults"));
class WinsAnalysis {
    constructor(_team) {
        this._team = _team;
    }
    run(matches) {
        let wins = 0;
        for (const match of matches) {
            if ((match[1] === this._team && match[5] === MatchResults_1.default.HomeWin) ||
                (match[2] === this._team && match[5] === MatchResults_1.default.AwayWin)) {
                wins++;
            }
        }
        return `Team ${this._team} won ${wins} times`;
    }
}
exports.default = WinsAnalysis;
