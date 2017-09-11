const fs = require('fs');
const readChunk = require('read-chunk');
const fileType = require('file-type');

module.exports = file => {
  if (!fs.existsSync(file)) return null;

  const buffer = readChunk.sync(file, 0, 4100);
  
  return fileType(buffer);
}
