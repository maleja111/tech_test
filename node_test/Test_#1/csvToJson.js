import convertCsvToJson from 'convert-csv-to-json';

export function csvToJson(path){
    return convertCsvToJson.fieldDelimiter(',').getJsonFromCsv(path);
}

export function algorithmCsvToJson(dataFlat) {
    const row = dataFlat.split('\n');
    let jsonData = [];
    const headerRow = row[0].split(',');
    for (let i =1; i< row.length - 1; i++) {
        const newRow = row[i].split(',');
        jsonData.push({ [headerRow[0]]: newRow[0], [headerRow[1]]: newRow[1],
                        [headerRow[2]]: newRow[2], [headerRow[3]]:newRow[3],
                        [headerRow[4]]: newRow[4], [headerRow[5]]: newRow[5]});         
    }
    return jsonData;
}