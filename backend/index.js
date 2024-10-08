const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');
const Product = require('./db/Product');
const Message = require('./db/Message');
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

app.put('/messages/:id', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const updatedMessage = await Message.findByIdAndUpdate(id, { status }, { new: true });
        if (updatedMessage) {
            res.status(200).send(updatedMessage);
        } else {
            res.status(404).send({ message: 'Message not found' });
        }
    } catch (error) {
        res.status(500).send({ message: 'Error updating message status', error });
    }
});


app.delete('/messages/:id', async (req, res) => {
    const { id } = req.params;

    console.log('Attempting to delete message with ID:', id); 

    try {
        const deletedMessage = await Message.deleteOne({ _id: id });
        console.log('Deleted message result:', deletedMessage); 

        if (deletedMessage.deletedCount > 0) {
            res.status(200).send({ message: 'Message deleted successfully' });
        } else {
            res.status(404).send({ message: 'Message not found' });
        }
    } catch (error) {
        console.error('Error during deletion:', error); 
        res.status(500).send({ message: 'Error deleting message', error });
    }
});


app.get("/products", async (req, resp) => {
    try {
        let products = await Product.find(); 
        resp.send(products);
    } catch (error) {
        resp.status(500).send({ message: "Error fetching products" });
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

app.post("/register", async (req, resp, ) => {
    const { email, password, name } = req.body;

    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return resp.status(400).send({ auth: false, message: "User already exists" });
        }
        let admin = false
        let user = await User.create({ email, password, name, admin });
        resp.send({ auth: true, user });
    } catch (error) {
        resp.status(500).send({ auth: false, message: "Error during registration" });
    }
});

app.post('/messages', async (req, res) => {
    const { email, message, status } = req.body;

    try {
        const newMessage = new Message({ email, message, status });
        await newMessage.save();
        res.status(201).send(newMessage);
    } catch (error) {
        res.status(500).send({ message: 'Error saving message', error });
    }
});

app.get('/messages', async (req, res) => {
    const { email, admin } = req.query;

    try {
        let messages;
        
        if (admin === 'true') {
            messages = await Message.find();
        } else if (email) {
            messages = await Message.find({ email });
        } else {
            return res.status(403).send({ message: 'Unauthorized access' });
        }

        res.status(200).send(messages);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching messages', error });
    }
});

app.put("/users/:email", async (req, resp) => {
    const email = req.params.email;
    const { name, password } = req.body;

    try {
        let user = await User.findOneAndUpdate(
            { email: email },
            { name: name, password: password },
            { new: true }
        );

        if (user) {
            resp.send({ user });
        } else {
            resp.status(404).send({ message: "user not found" });
        }
    } catch (error) {
        resp.status(500).send({ message: "error updating user" });
    }
});

app.listen(5000);