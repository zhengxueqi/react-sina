var React=require('react');
var commentstyle=require('./commentstyle.js');

var Contactcomponent=React.createClass({
	render:function(){
		
		return (
				<div className="container marketing" style={commentstyle.div}>
				     <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7">
				          <h2 className="featurette-heading" style={commentstyle.title}>清晨的一缕阳光</h2>
				          <p className="lead" style={commentstyle.font}>每天早起，迎接清晨的第一缕阳光，向新的一天问好。所谓一年之计在于春，一日之计在于晨。每天早上的时候享受清晨运动，锻炼身体，准时吃早餐也是生活中最重要的一件事，清晨的大脑特别清醒，充分利用早上的时间和精神。提高工作效率</p>
				        </div>
				        <div className="col-md-5">
				          <img className="featurette-image img-responsive center-block" style={commentstyle.img} src="./img/contact1.jpg" alt="Generic placeholder image"/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7 col-md-push-5">
				          <h2 className="featurette-heading" style={commentstyle.title}>丰富美味的中餐</h2>
				          <p className="lead" style={commentstyle.font}>含铁高，含蛋白质高的食物。主食不能不吃，因为那样容易贫血，然后吃些蔬菜，豆腐，鱼之类的，要少喝茶，因为喝多了会贫血。如果经常以面食为主，最容易缺乏的就是纤维质，所以回家吃晚餐时，应该多补充青菜和水果</p>
				        </div>
				        <div className="col-md-5 col-md-pull-7">
				          <img className="featurette-image img-responsive center-block" style={commentstyle.img} src="./img/contact2.jpg" alt="Generic placeholder image"/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7">
				          <h2 className="featurette-heading" style={commentstyle.title}>精致但很精细的晚餐</h2>
				          <p className="lead" style={commentstyle.font}>清淡晚餐：晚餐宜清淡，注意选择脂肪少、易消化的食物，且注意不应吃得过饱。晚餐食用大量蛋白质 
蛋白质是制造血液或肌肉的重要营养成分。这种组织在睡觉时产生，所以在晚餐上摄取蛋白质。在体内处理蛋白质消耗很大热量，所以为了使身体变得苗条，也应积极摄取肉类。</p>
				        </div>
				        <div className="col-md-5">
				          <img className="featurette-image img-responsive center-block" style={commentstyle.img} src="./img/contact3.jpg" alt="Generic placeholder image"/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				    </div>			
			)
	}
})
module.exports=Contactcomponent;