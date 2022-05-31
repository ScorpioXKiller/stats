import MatchData from "../helpers/MatchData";

interface IAnalyzer {
    run(matches: MatchData[]): string; 
}

export default IAnalyzer;