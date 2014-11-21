var React = require('react')
var test = 'test'
var World = React.createClass({
    render: function() {
      return (<strong>{this.props.name}</strong>)
    }
})

var Hello = React.createClass({
  clickHandler: function() {
    this.setProps({ name: 'update!' });
  },
  componentDidUpdate: function(oldProps, oldState) {
    console.log('component did update (changing name)', oldProps, oldState)
  },
  componentWillMount: function() {
    console.log('will mount')
  },
  componentDidMount: function() {
    console.log('did mount')
  },
  shouldComponentUpdate: function() {
    console.log('should update')
    return true
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
