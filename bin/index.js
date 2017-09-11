#!/usr/bin/env node

const fs = require('fs');
const readChunk = require('read-chunk');
const fileType = require('file-type');
const path = require('path');

if (!process.argv[2] || !fs.existsSync(path.join(process.cwd(), process.argv[2]))) {
  console.log('file not found');
  process.exit();
}

const buffer = readChunk.sync(path.join(process.cwd(), process.argv[2]), 0, 4100);

console.log(JSON.stringify(fileType(buffer)));
