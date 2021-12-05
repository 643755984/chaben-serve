/* eslint valid-jsdoc: "off" */

'use strict';

const { security } = require("./plugin");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1638586937008_2521';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'chaben',
    username: 'root',
    password: '123456',
    define: {
      freezeTableName: false,
      underscored: true,
    },
  };

  config.cors = {
    origin: '*'
  }

  config.security = {
    csrf: {
      enable: false
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
