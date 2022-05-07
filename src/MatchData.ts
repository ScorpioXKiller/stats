import MatchResult from './MatchResult';

type MatchData = [
  date: Date,
  home: string,
  away: string,
  homeGoals: number,
  awayGoals: number,
  winner: MatchResult,
  reffery: string
];

export default MatchData;
