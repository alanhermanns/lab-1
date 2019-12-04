const { 
  mkdirp,
  writeJSON
} = require('../lib/utilityFileFunctions');

const fs = require('fs').promises;

const mockPath = 'Directory Created';
const mockFilePath = 'File Created';
const data = { 'this' : 'this' };

jest.mock('fs', () => ({
  promises : {
    mkdir: jest.fn(() => Promise.resolve()),
    writeFile: jest.fn(() => Promise.resolve())

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
  it('verifies that data passed to writeJSON is valid json', () => {
    return writeJSON(mockFilePath, data).then(() =>
      expect(fs.writeFile).toThrowErrorMatchingSnapshot());
  });
});
