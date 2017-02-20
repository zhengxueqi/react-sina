var React=require('react');
var Headercomponent=require('./Headercomponent.js');
var Footercomponent=require('./Footercomponent.js');

var Appcomponent=React.createClass({
	render:function(){
		return (
			<div>
				<Headercomponent/>
				{this.props.children}
				<Footercomponent/>
			</div>
			)
	}
})
module.exports=Appcomponent;