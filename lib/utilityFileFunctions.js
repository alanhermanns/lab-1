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
  return fs.readdir(path).then((fileArray) => {
    const readFiles = fileArray.map((file) => {
      return readJSON(file);
    });
    return readFiles;
  });
};

const updateJSON = async(path, keyValues) => {
  if(!path || !keyValues){ throw new Error ('Path or JSON to update not specified') ;}
  Object.keys(keyValues).forEach(async key => {
    let toChange = await readJSON(path)[key];
    console.log(toChange);
    toChange = keyValues[key].value;
    console.log(toChange);
    return toChange;
  });
  return await readJSON(path);
};
  

module.exports = {
  mkdirp,
  writeJSON,
  readJSON,
  readDirectoryJSON,
  updateJSON
};
