var list = [];

var ListItem = React.createClass({displayName: "ListItem",
  render: function () {
    var li = this.props.li;
    return (
      React.createElement("li", {className: "list-item"}, 
        React.createElement("p", null, li.id), 
        React.createElement("p", null, li.uid)
      )
    );
  }
});

var List = React.createClass({displayName: "List",
  render: function () {
    return (
      React.createElement("ol", {className: "list"}, 
        this.props.list.map(function (li) {
          return React.createElement(ListItem, {li: li, key: li.id});
        })
      )
    );
  }
});

var get = function () {
    $.get('/list', function (list) {
      React.render(React.createElement(List, {list: list}), document.getElementById('root'));
    });
  };

$(function () {
  get();
  // setInterval(get, 1000 * 5);
});