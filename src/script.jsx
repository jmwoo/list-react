var lists = [];

var List = React.createClass({
  render: function () {
    return (
      <li className="list">
        <p>{this.props.list.id}</p>
      </li>
    );
  }
});

var Lists = React.createClass({
  render: function () {
    return (
      <ol className="lists">
        {this.props.lists.map(function (list) {
          return <List list={list} />;
        })}
      </ol>
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
      React.render(<Lists lists={lists} />, document.getElementById('root'));
    });
  };

$(function () {
  get();
  setInterval(get, 1000 * 5);
});