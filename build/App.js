var React=require('react');
var ReactDOM=require('react-dom');

var Router=require('react-router').Router;
var Route=require('react-router').Route;
var hashHistory=require('react-router').hashHistory;
var IndexRoute=require('react-router').IndexRoute;

var Appcomponent=require('./Appcomponent.js');
var Homecomponent=require('./Homecomponent.js');
var Aboutcomponent=require('./Aboutcomponent.js');
var Contactcomponent=require('./Contactcomponent.js');
var Listcomponent=require('./Listcomponent.js');
var Detailcomponent=require('./Detailcomponent.js');

var App=React.createClass({
	render:function(){
		return (
				<Router history={hashHistory}>
					<Route path="/" component={Appcomponent}>

						<IndexRoute component={Homecomponent}/>
						<Route path="/about" component={Aboutcomponent}/>
						<Route path="/contact" component={Contactcomponent}/>
						<Route path="/list/:id" component={Listcomponent}/>
						<Route path="/list/:id(/:page)" component={Listcomponent}/>
						<Route path="/detail/:id/:id1" component={Detailcomponent}/>
						<Route path="/detail/:id/:id1(/:page)" component={Detailcomponent}/>
					</Route>
				</Router>
			)
		
	}
})
ReactDOM.render(<App/>,document.getElementById('app'));