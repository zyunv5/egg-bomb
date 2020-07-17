'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  //引入 egg-sequelize
  sequelize:{
    enable: true,
    package: 'egg-sequelize',
  }
};
