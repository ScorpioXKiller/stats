import fs from 'fs';

class CsvFileReader {
  constructor(public filePath: string) {}

  public read(): string[][] {
    return fs
      .readFileSync(this.filePath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(',')); // parcing;
  }
}

export default CsvFileReader;
