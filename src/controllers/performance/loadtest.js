const loadtest = require('loadtest');



async function getLoadResults(urlSite, simulatedUsers) {

    console.log('ENTERING LOAD TEST')

    const options = {
        url: urlSite,
        maxRequests: simulatedUsers,
    };
    
    loadtest.loadTest(options, function(error, result)
    {
        if (error)
        {
            return console.error('Got an error: %s', error);
        }
        console.log('Tests run successfully' + JSON.stringify(result));
    });
    

}

module.exports = {
    getLoadResults
}