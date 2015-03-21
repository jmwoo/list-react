var lists = [];

var List = React.createClass({displayName: "List",
  render: function () {
    return (
      React.createElement("li", {className: "list"}, 
        React.createElement("p", null, this.props.list.id)
      )
    );
  }
});

var Lists = React.createClass({displayName: "Lists",
  render: function () {
    return (
      React.createElement("ol", {className: "lists"}, 
        this.props.lists.map(function (list) {
          return React.createElement(List, {list: list});
        })
      )
    );
  }
});

var sortByDateDesc = function (a, b) {
  var aTim = new Date(a.now).getTime();
  var bTim = new Date(b.now).getTime();

  if (aTim === bTim) {
    return a.com.toString().toLowerCase() < b.com.toString().toLowerCase() ? -1 : 1;
  } else {
    return bTim - aTim;
  }
}

var get = function () {
    $.get('/lists', function (lists) {
      React.render(React.createElement(Lists, {lists: lists}), document.getElementById('root'));
    });
  };

$(function () {
  get();
  setInterval(get, 1000 * 5);
});