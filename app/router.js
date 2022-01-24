'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/school')(app)
  require('./router/user')(app)
  require('./router/major')(app)
  require('./router/majorType')(app)
  require('./router/grade')(app)
  require('./router/schoolMajorRelation')(app)
  require('./router/notice')(app)
  require('./router/common')(app)
};
