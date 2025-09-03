const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoints
let queue = [];
let lastTicket = 0;

app.get('/api/queue', (req, res) => res.json(queue));

app.post('/api/queue', (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    lastTicket += 1;
    const ticket = { ticketNumber: lastTicket, name };
    queue.push(ticket);
    res.json(ticket);
});

app.post('/api/queue/call', (req, res) => {
    if (queue.length === 0) return res.status(400).json({ error: 'Queue is empty' });
    const next = queue.shift();
    res.json(next);
});

app.post('/api/queue/reset', (req, res) => {
    queue = [];
    lastTicket = 0;
    res.json({ message: 'Queue reset successfully' });
});

// Serve index.html for root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
