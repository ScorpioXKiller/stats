import MatchResults from './MatchResults';

type MatchData = [
  date: Date,
  home: string,
  away: string,
  homeGoals: number,
  awayGoals: number,
  winner: MatchResults,
  reffery: string
];

export default MatchData;
