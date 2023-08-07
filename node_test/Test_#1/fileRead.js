import { readFile } from 'node:fs/promises';


export  function fileData(path, options) {
    return  readFile(path, options);
}

