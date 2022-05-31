"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils/utils");
class MatchReader {
    constructor(_reader) {
        this._reader = _reader;
    }
    loadMatches() {
        return this._reader
            .read()
            .map((row) => [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ]);
    }
}
exports.default = MatchReader;
