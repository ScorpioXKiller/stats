import CsvFileReader from './CsvFileReader';
import MatchData from './MatchData';
import MatchResult from './MatchResult';
import { dateStringToDate } from './utils/utils';

class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filePath: string) {
    super(filePath);
  }

  protected mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

export default MatchReader;