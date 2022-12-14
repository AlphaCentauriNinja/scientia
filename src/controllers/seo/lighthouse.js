const { exec } = require("child_process");


async function lighthouseCheck(urlSite) {

    exec(`lighthouse ${urlSite} --output json`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });
    

}



module.exports = {
    lighthouseCheck
}
