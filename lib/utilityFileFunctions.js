const fs = require('fs').promises;

const mkdirp = (path) => {
  return fs.mkdir(path, { recursive : true });
};

const writeJSON = (path, data) => {
  if(!data) {throw new Error ('No data specified');}
  return fs.writeFile(path, data);
};

const readJSON = (path) => {
  if(!path){ throw new Error('No path specified');}
  return fs.readFile(path);
};

const readDirectoryJSON = (path) => {
    
}

module.exports = {
  mkdirp,
  writeJSON,
  readJSON
};
