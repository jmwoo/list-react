var list = [];

var ListItem = React.createClass({
  render: function () {
    return (
      <li className="list-item">
        <p>{this.props.listItem.id}</p>
      </li>
    );
  }
});

var List = React.createClass({
  render: function () {
    return (
      <ol className="list">
        {this.props.list.map(function (listItem) {
          return <ListItem listItem={listItem} />;
        })}
      </ol>
    );
  }
});

var get = function () {
    $.get('/list', function (list) {
      React.render(<List list={list} />, document.getElementById('root'));
    });
  };

$(function () {
  get();
  setInterval(get, 1000 * 5);
});