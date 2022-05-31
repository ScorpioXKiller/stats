import WinsAnalysis from './analyzers/WinsAnalysis';
import IAnalyzer from './analyzers/IAnalyzer';
import IOutputTarget from './reports/IOutputTarget';
import MatchData from './helpers/MatchData';
import ConsoleReport from './reports/ConsoleReport';
import HtmlReport from './reports/HtmlReport';

class Summary {
  constructor(
    private _analyzer: IAnalyzer,
    private _outputTarget: IOutputTarget
  ) {}

  static winsAnalysisWithHtmlReport(team: string, filePath: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(filePath));
  }

  static winsAnalysisWithConsoleReport = (team: string): Summary => {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  };

  public buildAndPrintReport = (matches: MatchData[]): void => {
    const output = this._analyzer.run(matches);
    this._outputTarget.print(output);
  };
}

export default Summary;
