const { Router } = require('express');
const fs = require('fs');
const moment = require('moment');
const rawDetailed = fs.readFileSync('./data/summary.json');
const detailed = JSON.parse(rawDetailed);
const router = Router();

// Get All Detailed view
// Can filter view using status, start date, end date and language
router
    .route('/summary')
    .get((req, res, next) => {
        let filtered = detailed;
        if (req.query.startDate) {
            filtered = filtered.filter(data => moment(data.date).isSameOrAfter(req.query.startDate));
        }
        if (req.query.endDate) {
            filtered = filtered.filter(data => moment(data.date).isSameOrBefore(req.query.endDate));
        }
        if (req.query.languageId) {
            filtered = filtered.filter(data => data.languageId == req.query.languageId);
        }
        try {
            res.status(200).json(filtered);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

module.exports = router;