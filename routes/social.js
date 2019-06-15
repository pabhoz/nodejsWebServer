const express = require('express');
const app = express();

app.get('/social', function (req, res) {
    res.render('social/index', {
        title: "EL Profeta | Social"
    });
});

module.exports = app;