import path from 'path';
import WinsAnalysis from './analyzers/WinsAnalysis';
import CsvFileReader from './file_readers/CsvFileReader';
import MatchReader from './file_readers/MatchReader';
import ConsoleReport from './reports/ConsoleReport';
import Summary from './Summary';

const filePath = path.join(__dirname, '..', 'football.csv');
const filePathToWrite = path.join(__dirname, '..', 'public', 'index.html');

const matchReader = new MatchReader(new CsvFileReader(filePath));
const matches = matchReader.loadMatches();

const manUnitedWins = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);
manUnitedWins.buildAndPrintReport(matches);

const liverpoolWins = Summary.winsAnalysisWithHtmlReport(
  'Liverpool',
  filePathToWrite
);
liverpoolWins.buildAndPrintReport(matches);

const liverpoolWins1 = Summary.winsAnalysisWithConsoleReport('Liverpool');
liverpoolWins1.buildAndPrintReport(matches);

const arsenalWins = Summary.winsAnalysisWithConsoleReport("Arsenal");
arsenalWins.buildAndPrintReport(matches);