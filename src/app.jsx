var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
    thumbnailData: [{
     title: 'Inbox',
     number: 32,
     header: 'Learn React',
     description: 'cool desc t do some shit cool desc t do some shit cool desc t do some shit cool desc t do some shit',
     imageUrl: 'http://www.proximitycr.com/wp-content/uploads/2017/05/React-logo.png'
     },{
     title: 'Show Courses',
     number: 50,
     header: 'Learn Gulp',
     description: 'gulp will speed up your shit',
     imageUrl: 'https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png'
     }]
 };

 // ask react to render this class
 var element = React.createElement(ThumbnailList, options);

 // when we ask react to render this class, we will tell it where to place the rendered element in the dom
 React.render(element, document.querySelector('.container'));