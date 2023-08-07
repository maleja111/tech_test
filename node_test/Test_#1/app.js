import { fileData } from './fileRead.js';
import { algorithmCsvToJson, csvToJson } from './csvToJson.js';
import { insertData } from "./db.js";

const dataFlat = await fileData('./mockData.csv', 'utf8');

function dataManipulation() {
    const dataJson = csvToJson('./mockData.csv');
    const newData = algorithmCsvToJson(dataFlat);
    insertData(newData);
}

dataManipulation();
