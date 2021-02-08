const { Router } = require('express');
const fs = require('fs');
const router = Router();
const rawStatus = fs.readFileSync('./data/status.json');
const status = JSON.parse(rawStatus);
const rawLanguages = fs.readFileSync('./data/languages.json');
const languages = JSON.parse(rawLanguages);

// Get All Status
router
    .route('/status')
    .get((req, res) => {
        try {
            res.status(200).json(status);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

// Get All Language
router
    .route('/languages')
    .get((req, res) => {
        try {
            res.status(200).json(languages);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

module.exports = router;