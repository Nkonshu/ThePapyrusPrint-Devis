const express = require('express');

const app = express();

app.use(express.static('./dist/the-papyrus-print-devis'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/the-papyrus-print-devis/'}),
);

app.listen(process.env.PORT || 8080);