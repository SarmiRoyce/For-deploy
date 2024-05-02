const mongoose = require ('mongoose');
const express = require ('express');
const jwt = require ('jsonwebtoken');
const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.post('/login', async (req,res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).send('User not found');
        }


        const match = await bcrypt.compare(password, user.passwordHash);
        if (match) {
            const token = jwt.sign({ username: user.username, role: user.role }, 'your-secret-key', { expiresIn: '24h'});
            res.json({ token });
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        res.status(500).send('An error occurred');
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));



