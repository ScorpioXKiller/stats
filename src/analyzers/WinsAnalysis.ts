import IAnalyzer from './IAnalyzer';
import MatchData from '../helpers/MatchData';
import MatchResults from '../helpers/MatchResults';

class WinsAnalysis implements IAnalyzer {
  constructor(private _team: string) {}

  run(matches: MatchData[]): string {
    let wins: number = 0;

    for (const match of matches) {
      if (
        (match[1] === this._team && match[5] === MatchResults.HomeWin) ||
        (match[2] === this._team && match[5] === MatchResults.AwayWin)
      ) {
        wins++;
      }
    }

    return `Team ${this._team} won ${wins} times`;
  }
}

export default WinsAnalysis;
