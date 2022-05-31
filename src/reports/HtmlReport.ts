import IOutputTarget from './IOutputTarget';
import fs from 'fs';

class HtmlReport implements IOutputTarget {
  constructor(private _filePath: string) {}

  print(report: string): void {
    const html = `
        <div>
            <h1>Analysis Output</h1>
            <div>${report}</div>
        </div>
    `;

    fs.writeFileSync(this._filePath, html);
  }
}

export default HtmlReport;
