const meRoute = require ('./me');
const newsRoute = require ('./news');
const siteRoute = require ('./site');
const coursesRoute = require ('./courses');


function route(app) {
    

      app.use('/news', newsRoute);
      app.use('/me', meRoute);
      app.use('/courses', coursesRoute);
      app.use('/', siteRoute);

        
     
        

      }

module.exports = route;
