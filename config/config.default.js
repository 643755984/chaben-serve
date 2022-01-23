/* eslint valid-jsdoc: "off" */
'use strict';

// const { security } = require("./plugin");
const path = require('path');

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
  config.middleware = [ 'error' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    imgDirPath: path.join(__dirname, '../app/public/'),
    baseUrl: '/api/v1',
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'chaben',
    username: 'root',
    password: 'root',
    define: {
      freezeTableName: false,
      underscored: true,
    },
  };

  // 配置跨域
  config.cors = {
    origin: 'http://localhost:3000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATH',
  };
  // 解除大小
  config.multipart = {
    fields: 50, // 表单上传字段限制的个数
    fileSize: '10mb', // 文件上传的大小限制
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.valparams = {
    locale: 'zh-cn',
    throwError: true,
  };

  return {
    ...config,
    ...userConfig,
  };
};
