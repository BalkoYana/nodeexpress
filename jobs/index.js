const config = require('../config');
const pasaghyrJob = require('./pasaghyr.job');

function start() {
    if (!config.enableScheduleJobs) {
        console.warn('Jobs scheduling is not enabled.');
        return;
    }

    pasaghyrJob();
}

module.exports = start;