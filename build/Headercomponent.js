var React=require('react');
var Nav=require('./Nav.js');
var IndexLink=require('react-router').IndexLink;

var Headercomponent=React.createClass({
	getDefaultProps:function(){
		return {
			url:"http://1.994545819.applinzi.com/health-categories.php"
		}
	},
	getInitialState:function(){
		return {
			classify:[]
		}		
	},
	componentWillMount:function(){
		var _this=this;
		$.ajax({
			url:_this.props.url                               
		}).done(function(res){
			var pos = res.indexOf('<script type="text/javascript">');
			var res = res.substring(0,pos);
			var res = JSON.parse(res);
			console.log(res);
			_this.setState({
				classify:res.result
			})			
		})
	},
	render:function(){
		var category=[];
		var classify=this.state.classify;		
		if(classify){
			var classlen=classify.length;
			for(var i=0;i<classlen;i++){
				var urllink="/list/"+classify[i].id;
				category.push(
						<li key={i}>
							<Nav to={urllink}>{classify[i].name}</Nav>
						</li>
					)
			}
		}
		

		return (
				<div className="navbar-wrapper">
			      <div className="container">
			        <nav className="navbar navbar-inverse navbar-static-top">
			          <div className="container">
			            <div className="navbar-header">
			              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
			                <span className="sr-only">Toggle navigation</span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			                <span className="icon-bar"></span>
			              </button>
			              <a className="navbar-brand" href="#">Project name</a>
			            </div>
			            <div id="navbar" className="navbar-collapse collapse">
			              <ul className="nav navbar-nav">
			              	<li><Nav to="/">健康生活</Nav></li>
			                <li><Nav to="/about">健康饮食</Nav></li>
			                <li><Nav to="/contact">健康作息</Nav></li>
			                <li className="dropdown">
			                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">健康知识 <span className="caret"></span></a>
			                  <ul className="dropdown-menu">    
			                  {category} 
			                  </ul>
			                </li>
			              </ul>
			            </div>
			          </div>
			        </nav>
			      </div>
			    </div>
			)
	}
})
module.exports=Headercomponent;