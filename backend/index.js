const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');
const app = express();
app.use(express.json());
app.use(cors());


app.get("/users", async (req, resp) => {
    try {
        let users = await User.find(); 
        resp.send(users);
    } catch (error) {
        resp.status(500).send({ message: "Error fetching users" });
    }
});

app.post("/login", async (req, resp) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email, password });
    
    if (user) {
        resp.send({ auth: true, user });
    } else {
        resp.send({ auth: false, message: "Invalid credentials" });
    }
});

app.post("/register", async (req, resp) => {
    const { email, password, name } = req.body;

    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).send({ auth: false, message: "User already exists" });
        }

        let user = await User.create({ email, password, name });
        resp.send({ auth: true, user });
    } catch (error) {
        resp.status(500).send({ auth: false, message: "Error during registration" });
    }
});

app.listen(5000);