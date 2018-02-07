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
 ReactDOM.render(element, document.querySelector('.target'));
var Badge = React.createClass({displayName: "Badge",
    render: function() {
        return React.createElement("button", {type: "button", className: "btn btn-primary"}, 
          this.props.title, " ", React.createElement("span", {className: "badge badge-light"}, this.props.number)
        )
    }
});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
    render: function() {
        var list = this.props.thumbnailData.map(function(thumbnailProps){
            return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
        });

        return React.createElement("div", null, 
            list
        )
    }
});
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
        return React.createElement("div", {className: "col-sm-6 col-md-6"}, 
                React.createElement("div", {className: "thumbnail"}, 
                    React.createElement("img", {src: this.props.imageUrl}), 
                    React.createElement("div", {className: "caption"}, 
                    React.createElement("h3", null, this.props.header), 
                    React.createElement("p", null, this.props.description), 
                    React.createElement("p", null, 
                        React.createElement(Badge, {title: this.props.header, number: this.props.number})
                    )
                    )
                )
                )
    }
});