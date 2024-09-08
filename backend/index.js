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
        // Add some kind of authentication token in production
        resp.send({ auth: true, user });
    } else {
        resp.send({ auth: false, message: "Invalid credentials" });
    }
});



app.listen(5000);







