const CronJob = require('cron').CronJob;
const firstModel = require('../models/pasaghyr.model.js');
function pasaghyrJob() {
    const job = new CronJob(
        '1 * * * * *',
        async () => {
            const pasaghyrs = await firstModel.find({});

            let totalWeight = 0;
            pasaghyrs.forEach(pasaghyr => {
                totalWeight += pasaghyr.weight;
            });
            console.log(`[pasaghyrWeightSum.job] Total weight: ${totalWeight}`);



        },
    );

    job.start();
}


module.exports = pasaghyrJob;