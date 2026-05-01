require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace this with your actual Schema logic later
const WaitlistSchema = new mongoose.Schema({
    // Waitlist.createIndexes();
    name: {type: String, required:true },
    email: {type: String, required:true, unique:true },
    phone: String,
    role: String
}, {timestamps: true});

const Waitlist = mongoose.model('Waitlist', WaitlistSchema);
app.post("/api/waitlist", async (req, res) => {
    try {
        const { name, email, phone, role } = req.body;
        const newUser = new Waitlist({ name, email, phone, role });
        await newUser.save();
        res.status(201).json({ message: "User saved successfully!" });
    } catch (error) {
        // Log the error so you can see it in your VS Code terminal
        console.log("Error Code:", error.code);

        if (error.code === 11000) {
            return res.status(400).json({ 
                error: "This email is already on our waitlist!" 
            });
        }
        res.status(500).json({ error: "Server error" });
    }
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.log("MongoDB Connection Error:", err));
