import MatchData from '../helpers/MatchData';
import MatchResults from '../helpers/MatchResults';
import { dateStringToDate } from '../utils/utils';

class MatchReader {
  constructor(private _reader: IReadable) {}

  public loadMatches(): MatchData[] {
    return this._reader
      .read()
      .map(
        (row: string[]): MatchData => [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResults,
          row[6],
        ]
      );
  }
}

export default MatchReader;
