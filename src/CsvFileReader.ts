import fs from 'fs';

abstract class CsvFileReader<T> {
  constructor(public filePath: string) {}

  protected abstract mapRow(row: string[]): T;

  public parseData(): T[] {
    return fs
      .readFileSync(this.filePath, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow); // parcing;
  }
}

export default CsvFileReader;
