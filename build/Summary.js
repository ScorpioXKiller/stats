"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WinsAnalysis_1 = __importDefault(require("./analyzers/WinsAnalysis"));
const ConsoleReport_1 = __importDefault(require("./reports/ConsoleReport"));
const HtmlReport_1 = __importDefault(require("./reports/HtmlReport"));
class Summary {
    constructor(_analyzer, _outputTarget) {
        this._analyzer = _analyzer;
        this._outputTarget = _outputTarget;
        this.buildAndPrintReport = (matches) => {
            const output = this._analyzer.run(matches);
            this._outputTarget.print(output);
        };
    }
    static winsAnalysisWithHtmlReport(team, filePath) {
        return new Summary(new WinsAnalysis_1.default(team), new HtmlReport_1.default(filePath));
    }
}
Summary.winsAnalysisWithConsoleReport = (team) => {
    return new Summary(new WinsAnalysis_1.default(team), new ConsoleReport_1.default());
};
exports.default = Summary;
