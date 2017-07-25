/*

 */
const path = require('path');

var log4js = require('log4js');
var logger = log4js.getLogger('fabric-client');
logger.setLevel('DEBUG');

const CONFIG_DEFAULT = path.join(__dirname, '../../artifacts/network-config.json');

var config = process.env.CONFIG_FILE || CONFIG_DEFAULT;
logger.info('Use network config: %s', config);


///////
var hfc = require('fabric-client');
hfc.setLogger(logger);
hfc.addConfigFile(config);

// you can always get config:
// var ORGS = hfc.getConfigSetting('network-config');

module.exports = hfc;