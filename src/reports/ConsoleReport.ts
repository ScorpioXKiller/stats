import IOutputTarget from './IOutputTarget';

class ConsoleReport implements IOutputTarget {
  public print(report: string): void {
    console.log(report);
  }
}

export default ConsoleReport;
