"use stric";
// Handle directories
const fs = require("fs"),
  path = require("path");
class Directory {
  constructor() {
    this._dir = "docs";
    this._path = __dirname;
    this.createDocsDir();
  }
  // Validate directory
  createDocsDir() {
    this._path = path.join(this._path, this._dir);
    if (!fs.existsSync(this._dir)) {
      fs.mkdirSync(this._dir);
    }
  }
  // Get the path
  getPath() {
    return this._path;
  }
  // Transform the path in a short path
  getShortPath() {
    const paths = path.parse(this._path);
    let delimiter = "/";
    if (paths.dir.indexOf(delimiter) < 0) {
      delimiter = "\\";
    }
    return `${paths.root}...${delimiter}${paths.name}`;
  }
  // Show results
  getFilesInDir() {
    const files = fs.readdirSync(this._path);
    let n = 0;
    console.log(`
=====================
Ubication: ${this.getShortPath()}
=====================
    `);
    files.forEach((file) => {
      console.log(`\t${file}`);
      n++;
    });
  }
}
module.exports = Directory;
