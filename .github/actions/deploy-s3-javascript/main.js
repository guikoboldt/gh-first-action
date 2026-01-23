/* This functions requires node to be installed and the following commands are required
open terminar
1 - go to the deploy 'deploy-s3-javascript folder'
2 - npm init -y -> it will create a pacakge.son file inside this directory
3 - npm install @actions/core @actions/github @actions/exec -> install ofical packages from github actions to help you build actions using javascript
This will create the package-lock.json file, and the node_modules folder
*/

// const core = require('@actions/core')
// const github = require('@actions/github')
// const exec = require('@actions/exec')

function run() {
    // 1) Get input values - like configurations from AWS. The core.getInput() get information from action inputs defined
    // const bucket = core.getInput('bucket', { required: true });
    // const bucketRegion = core.getInput('bucket-region', { required: true });
    // const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files
    // exec.exec('aws s3 sync <local-folder> <s3-bucket>'); -> this will sync a local folder with an aws folder. This is a built in function of this exec package (that includes AWS cli)
    
    // the AWS Cli looks automatically to these two env vars
    //AWS_ACCESS_KEY_ID
    //AWS_SECRET_ACCESS_KEY
    //those are used for authenticating the cli with the aws env. Thats the reason why we injected them into the pipeline
    // const s3Uri = `s3://${bucket}`
    // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    // core.notice('Heelo from my custom javascript action!'); -> it will print this message in the github actions
}

run();