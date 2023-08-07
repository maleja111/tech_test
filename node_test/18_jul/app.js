import { readFile } from 'node:fs';
import sqlite3 from 'sqlite3';
import csvToJson from 'convert-csv-to-json';


const dbConextion = (dataJson) => {
    const db = new sqlite3.Database('./data.db');

    db.serialize(() => {
        db.run('CREATE TABLE users ( id INTEGER PRIMARY KEY, first_name TEXT NOT NULL, last_name TEXT NOT NULL, email TEXT NOT NULL UNIQUE, address TEXT, ip_address TEXT )')
        const rowInsert = db.prepare ('INSERT into users VALUES (?,?,?,?,?,?)')
    for (let i = 0; i< dataJson.length; i++) {
        // console.log(dataJson[i]);

        rowInsert.run(dataJson[i].id,dataJson[i].first_name,dataJson[i].last_name,dataJson[i].email,dataJson[i].address,dataJson[i].ip_address)
        
    }
    rowInsert.finalize();

    db.each('SELECT * FROM users', (err, row)=> {
        if (err) {
            console.log(err);
            return;
        }
        console.log(row);
    });
    });

    

    db.close();

};

// readFile("./mockData.csv", 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

const dataInsert = () => {
    const dataJson = csvToJson.fieldDelimiter(',').getJsonFromCsv('./mockData.csv');
    dbConextion(dataJson);

};

dataInsert();

    // const dataTransform = data.forEach(element => {
    //     id = element.id,
    //     first_name = element.
        
    // });

    // console.log(data);
//     


// });