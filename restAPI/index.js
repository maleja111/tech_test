import express from 'express';
import bodyParser from 'body-parser';
import { getData } from './readFile.js'

const app = express();
const port =  3000;
const jsonData = await getData();
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    const listLimit =  req.query.limit || 10;
    const getDataUsers = jsonData.slice(0, listLimit);
    res.send(getDataUsers);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const getUserById = jsonData.find((user) => user.id == userId);
    if (!getUserById) {
        res.status(404).send({ error: 'User not found'});
        return;
    }
    res.send(getUserById);
});

app.post('/users', (req, res) => {
    const newUserData = req.body;
    jsonData.push(newUserData);
    res.send(jsonData);

});
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id
    res.send(jsonData.filter(row => row.id != '999'));

});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const newJSON = req.body;
    const newData = {newJSON,...jsonData}
    res.send(newData);

});

app.listen(port, () => {
    console.log('example app', port);
});