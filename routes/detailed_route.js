const { Router } = require('express');
const fs = require('fs');
const moment = require('moment');
const rawDetailed = fs.readFileSync('./data/detailed.json');
const detailed = JSON.parse(rawDetailed);
const router = Router();

// Get All Detailed view
// Can filter view using status, start date, end date and language
router
    .route('/detailed')
    .get((req, res, next) => {
        try {
            let filtered = detailed['results'];
            let data = {};
            data['total'] = detailed['total'];
            if (req.query.statusId) {
                filtered = filtered.filter(data => data.statusId == req.query.statusId);
            }
            if (req.query.startDate) {
                filtered = filtered.filter(data => moment(data.date).isSameOrAfter(req.query.startDate));
            }
            if (req.query.endDate) {
                filtered = filtered.filter(data => moment(data.date).isSameOrBefore(req.query.endDate));
            }
            if (req.query.languageId) {
                filtered = filtered.filter(data => data.languageId == req.query.languageId);
            }
            filtered = filtered.slice((req.query.page - 1) * req.query.entries, req.query.page * req.query.entries);
            data['results'] = filtered;
            res.status(200).json(data);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

module.exports = router;