const fs = require('fs').promises;

const mkdirp = (path) => {
  return fs.mkdir(path, { recursive : true });
};

const writeJSON = (path, data) => {
  if(!data) {throw new Error ('No data specified');}
  return fs.writeFile(path, data);
};

module.exports = {
  mkdirp,
  writeJSON
};
