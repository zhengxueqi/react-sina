var React=require('react');
var Nav=require('./Nav.js');
var commentstyle = require('./commentstyle.js');

var Listcomponent=React.createClass({
	getDefaultProps:function(){
		return {
			url:"http://1.994545819.applinzi.com/health-list.php"
		}
	},
	getInitialState:function(){
		return {
			list:null,
			id:0,
			total:0,
			page:0
		}		
	},
	getdata:function(){
		var _this=this;
		var id=this.props.params.id;
		var page=this.props.params.page ||1;
		$.ajax({
			url:_this.props.url,
			data:{
				id:id,
				page:page
			}
		}).done(function(res){
			var pos = res.indexOf('<script type="text/javascript">');
			var res = res.substring(0,pos);
			var res = JSON.parse(res);
			console.log(res);
			var resultlist=res.result;
			var total=res.total;
			_this.setState({
				list:resultlist,
				id:id,
				total:total,
				page:page
			})			
		})
	},
	componentWillMount:function(){
		this.getdata();
	},
	componentWillReceiveProps:function(nextProps){
		if(this.props.params.page==nextProps.params.page){
			this.getdata();
		}

		
	},
	render:function(){
		var imgstyle={
			width:"140px",
			height:"140px"
		};
		var paginationstyle={
			textAlign:"center"
		};
		var lists=this.state.list;
		var pagelist=[];
		var pagelistcontent;
		var rowlist=[];
		var total=this.state.total;
		if(lists){
			var listlen=lists.length;//每次点击的listlen共有12个数据对象
			var pagemax=Math.ceil(total/90);//总共分几页
			for(var i=0;i<Math.ceil(listlen/3);i++){//行----0、1、2、3
				var collist=[];
				for(var j=0;j<3;j++){//列---0、1、2
					var index=i*3+j;//每个单独list的相应的索引值
					if(index<listlen){
						//此时的点击相应详情页的路径
						var Linkurl="/detail/"+this.state.id+"/"+lists[index].id+"/"+this.state.page;
						collist.push(
								<div className="col-lg-4" key={index} style={paginationstyle}>
								  <img className="img-circle" src={lists[index].img} alt={lists[index].title} style={imgstyle}/>
								  <h2 style={commentstyle.height}>{lists[index].keywords}</h2>
								  <p style={commentstyle.pClumn}>{lists[index].description}</p>
								  <p><Nav to={Linkurl} className="btn btn-default" href="#" role="button">查看详情 &raquo;</Nav></p>
								</div>
							)
					}

				}//end for(列)
					rowlist.push(
						<div className="row" key={i}>
							{collist}
						</div>  
					)

			}//end for(行)
			for(var i=1;i<pagemax;i++){
				var Linkurl="/list/"+this.state.id+"/"+i;
				pagelist.push(
					<li key={i}>
						<Nav to={Linkurl}>{i}</Nav>
					</li>
					)
			}
			pagelistcontent=(
					<nav style={paginationstyle}><ul className="pagination">{pagelist}</ul></nav>
				)
		}


		return (
				<div className="container marketing">
				  {rowlist}
				  {pagelistcontent}
				</div>
			)
	}
})
module.exports=Listcomponent;