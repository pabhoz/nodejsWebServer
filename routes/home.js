const express = require('express');
const app = express();

let news = [
    { 
        title: "Alerta: se acaba el curso", 
        category: "Technlogy", 
        date: "June 15, 2019", 
        content: "Se acabó esto señores y señoritas, el próximo sábado se entregan certificados." 
    },
    { 
        title: "Almuerzo de despedida", 
        category: "Social", 
        date: "June 15, 2019", 
        content: "Tenemos que elegir el sitio para ir a almorzar la otra semana. Nota: Redactor disléxico." 
    }
]

app.get('/', function (req, res) {
    res.render('index/index', {
        title: "EL Profeta | Home",
        news
    });
});

module.exports = app;