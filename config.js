require('dotenv').config();

const config = {
    port: process.env.PORT || 3003,
    mongodb_url: process.env.MONGOURI || 'mongodb://127.0.0.1:27017/apartments',
    enableScheduleJobs: process.env.ENABLE_SCHEDULE_JOBS || true,
};

module.exports = config;
