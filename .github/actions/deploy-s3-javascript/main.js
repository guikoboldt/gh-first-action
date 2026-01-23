/* This functions requires node to be installed and the following commands are required
open terminar
1 - go to the deploy 'deploy-s3-javascript folder'
2 - npm init -y -> it will create a pacakge.son file inside this directory
3 - npm install @actions/core @actions/github @actions/exec -> install ofical packages from github actions to help you build actions using javascript
This will create the package-lock.json file, and the node_modules folder
*/

// const core = require('@actions/core')
// const core = require('@actions/github')
// const core = require('@actions/exec')

function run() {
  // core.notice('Heelo from my custom javascript action!'); -> it will print this message in the github actions
}

run();