const fs = require('fs');
const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function lighthouseCheck(urlSite) {
    (async () => {
        const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
        const options = {logLevel: 'info', output: 'json', onlyCategories: ['performance', 'seo', 'accessibility', 'best-practices'], port: chrome.port};
        const runnerResult = await lighthouse(urlSite, options);
      
        // `.report` is the HTML report as a string
        const reportHtml = runnerResult.report;
        fs.writeFileSync('lhreport.html', reportHtml);
      
        // `.lhr` is the Lighthouse Result as a JS object
        console.log('Report is done for', runnerResult.lhr.finalUrl);
        // console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
        // console.log('Total score was', runnerResult.lhr.categories.seo);
        // console.log('Total score was', runnerResult.lhr.categories.accessibility);
        // console.log('Total score was', JSON.stringify(runnerResult.lhr.categories));

      
        await chrome.kill();
        return runnerResult.lhr.categories;
      })();
    

}



module.exports = {
    lighthouseCheck
}
