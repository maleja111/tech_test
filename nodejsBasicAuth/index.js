import express from 'express';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();
const port = "3000";
app.use(express.json());
app.use(cookieParser());
const JWT_SECRETKEY = "maleja"

function authenticate(req, res, next) {
    const user = req?.user;
    const pass = req?.password;

    if (user === pass) {
        jwt.sign({ user, pass }, JWT_SECRETKEY, (err, token) => {
            if (err) {
                next(err);
            } else {
                res.cookie('token', token);
                next();
            }
        });
    } else {
        res.status(401).json({"message":"Error Authentication!!!"})
    }
};

function isAuthenticated(req, res, next) {
    const cookieToken = req.headers.authorization;
    jwt.verify(cookieToken, JWT_SECRETKEY, (err, decoded) => {
        if (!err) {
            next();
        } else {
            res.status(401).json({"message": "Token expired!"});
        }
    });
};

app.get('/singin', authenticate, (req, res) => {
        return res.send("Successfully access");

});

app.get('/getUser', isAuthenticated, (req, res) => {
    // res.clearCookie("token");
    res.send("Access!!!! to the API");
});

app.listen(port, () => {
    console.log("this is the port: ", port);
});