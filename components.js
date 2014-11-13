var React = require('react')

var World = React.createClass({
    render: function() {
      return (<strong>{this.props.name}</strong>)
    }
})

var Hello = React.createClass({
  clickHandler: function() {
    this.setProps({ name: 'update!' });
  },
  render: function() {
      return (
          <div>
            Hello <World name={this.props.name} />
            <button onClick={this.clickHandler}>Click me</button>
          </div>
      )
  }
})

module.exports = { hello: Hello, world: World }
