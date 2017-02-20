var React=require('react');
var Nav=require('./Nav.js');


var Detailcomponent=React.createClass({
	getDefaultProps:function(){
		return {
			url:"http://1.994545819.applinzi.com/health-detail.php"
		}
	},
	getInitialState:function(){
		return {
			detail:null,
			id:0,
			id1:0,
			page:1
		}		
	},
	getdata:function(){
		var _this=this;
		var id=this.props.params.id;
		var id1=this.props.params.id1;
		var page=this.props.params.page ||1;

		$.ajax({
			url:_this.props.url,
			data:{
				id1:id1,
			}
		}).done(function(res){
			var pos = res.indexOf('<script type="text/javascript">');
			var res=res.substring(0,pos);
			var res=JSON.parse(res);
			console.log(res);
			var resultlist=res.result;
			console.log(resultlist);
			_this.setState({
				detail:resultlist,
				id:id,
				id1:id1,
				page:page
			})			
		})
	},
	componentWillMount:function(){
		this.getdata();
	},
	componentWillReceiveProps:function(nextProps){
		this.getdata();
		
	},
	render:function(){
		var page=this.state.page;
		var id=this.state.id;
		var detailmsg=this.state.detail;
		var detail;
		if(detailmsg){
			var linkurl="/list/"+id+"/"+page;
			detail=(
				<div className="container">
					<div className="starter-template">
						<h1>{detailmsg.title}</h1>
						<img src={detailmsg.img}/>
						<p className="lead">{detailmsg.description}</p>
						<Nav to={linkurl} className="btn btn-primary btn-lg" role="button">返回列表</Nav>
					</div>
				</div>
				)
		}
		return (
				<div className="container marketing">
					{detail}
			    </div>
			)
	}
})
module.exports=Detailcomponent;