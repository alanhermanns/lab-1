const { 
  mkdirp,
  writeJSON,
  readJSON
} = require('../lib/utilityFileFunctions');

const fs = require('fs').promises;

const mockPath = 'Directory Created';
const mockFilePath = 'File Created';
const data = { 'equals' : 'equals' };

jest.mock('fs', () => ({
  promises : {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve()),
    readFile: jest.fn(() => Promise.resolve())

  }
}));

describe('make a directory and parents', () => {
  it('properly creates a directory', () => {
    return mkdirp(mockPath).then(() =>
      expect(fs.mkdir).toHaveBeenLastCalledWith(mockPath, { recursive : true }));
  });
});

describe('write JSON to a file', () => {
  it('properly creates a path to write JSON to a file', () => {
    return writeJSON(mockFilePath, data).then(() =>
      expect(fs.writeFile).toHaveBeenLastCalledWith(mockFilePath, data));
  });
  it('validates JSON', () => {
    return writeJSON(mockFilePath, data).then(() => 
      expect((writeJSON)).toThrowErrorMatchingSnapshot());
  });
});

describe('read JSON in a file', () => {
  it('properly creates a path to a file', () => {
    return readJSON(mockFilePath).then(() =>
      expect(fs.readFile).toHaveBeenLastCalledWith(mockFilePath));
  });
  it('checks to see if path is valid', () => {
    return readJSON(mockFilePath).then(() => 
      expect((readJSON)).toThrowErrorMatchingSnapshot());
  });
});
