import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

export function insertData(data){

    db.serialize(() => {
        db.run(`CREATE TABLE users (
            id INTEGER PRIMARY KEY,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            address TEXT,
            ip_address TEXT
        )`)

        const dataInsert = db.prepare('INSERT INTO users VALUES (?,?,?,?,?,?)');
        for (let i = 0; i < data.length; i++) {
            dataInsert.run(data[i]?.id, data[i]?.first_name, data[i]?.last_name, data[i]?.email, data[i]?.address, data[i]?.ip_address);
        }
        db.on("error", (error) => console.log("this is an error in the DB: ", error));
        dataInsert.finalize();

        db.each('SELECT * FROM users limit 5', (err, row) => {
            if (err) {
                console.log("Error:::",err);
                return;
            }
            console.log("Row in the DB ",row);
        });
    });

    db.close();

}