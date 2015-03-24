var list = [];

var ListItem = React.createClass({displayName: "ListItem",
  render: function () {
    return (
      React.createElement("li", {className: "list-item"}, 
        React.createElement("p", null, this.props.listItem.id)
      )
    );
  }
});

var List = React.createClass({displayName: "List",
  render: function () {
    return (
      React.createElement("ol", {className: "list"}, 
        this.props.list.map(function (listItem) {
          return React.createElement(ListItem, {listItem: listItem});
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
  setInterval(get, 1000 * 5);
});