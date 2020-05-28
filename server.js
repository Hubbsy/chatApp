const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`We are listening on Port: ${PORT} My DOOD!` )
});