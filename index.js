const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('https://caesarturn.github.io/web-development-project/Subscribed.html', (req, res) => {
    const username = req.body.username;
    res.send('Username is $cturn193');
});

app.listen(port, () => {
    console.log('Server running on https://caesarturn.github.io/web-development-project');
});
