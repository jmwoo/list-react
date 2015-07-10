var list = [];

var ListItem = React.createClass({
  render: function () {
    var li = this.props.li;
    return (
      <li className="list-item">
        <p>{li.id}</p>
        <p>{li.uid}</p>
      </li>
    );
  }
});

var List = React.createClass({
  render: function () {
    return (
      <ol className="list">
        {this.props.list.map(function (li) {
          return <ListItem li={li} key={li.id} />;
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
  // setInterval(get, 1000 * 5);
});