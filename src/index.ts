import path from 'path';
import MatchReader from './MatchReader';
import MatchResult from './MatchResult';

const filePath = path.join(__dirname, '..', 'football.csv');

const matchReader = new MatchReader(filePath);
const matches = matchReader.parseData();

let manUnitedWins: number = 0;

for (const match of matches) {
  if (
    (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) ||
    (match[2] === 'Man United' && match[5] === MatchResult.AwayWin)
  ) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} times.`);
