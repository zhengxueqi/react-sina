var React=require('react');
var Link=require('react-router').Link;

var Nav=React.createClass({
	render:function(){
		return (
			<Link {...this.props} activeClassName='active'/>
		)
	}
})
module.exports=Nav;