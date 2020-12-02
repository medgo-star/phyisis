const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('index', {title: 'Physis Home'});
});

router.get('/services', (req, res)=>{
    res.render('services', {title: 'Physis servicios'});
});

router.get('/contacto', (req, res)=>{
    res.render('contacto', {title: 'Contacto'});
});

module.exports = router;