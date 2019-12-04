const { 
  mkdirp
} = require('../lib/utilityFileFunctions');

const fs = require('fs').promises;

const mockPath = 'Directory Created';

jest.mock('fs', () => ({
  promises : {
    mkdir: jest.fn(() => Promise.resolve()),
  }
}));

describe('make a directory and parents', () => {
  it('properly creates a directory', () => {
    return mkdirp(mockPath).then(() =>
      expect(fs.mkdir).toHaveBeenLastCalledWith(mockPath, { recursive : true }));
  });
});
