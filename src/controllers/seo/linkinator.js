
const link = require('linkinator');

async function linkCheck(urlSite) {
  const results = await link.check({
    path: urlSite
  });

  // To see if all the links passed, you can check `passed`
  console.log(`Passed: ${results.passed}`);

  // Show the list of scanned links and their results
  console.log(results);

  // Example output:
  // {
  //   passed: true,
  //   links: [
  //     {
  //       url: 'http://example.com',
  //       status: 200,
  //       state: 'OK'
  //     },
  //     {
  //       url: 'http://www.iana.org/domains/example',
  //       status: 200,
  //       state: 'OK'
  //     }
  //   ]
  // }
}

module.exports = {
    linkCheck
}
