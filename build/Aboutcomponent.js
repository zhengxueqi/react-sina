var React=require('react');
var commentstyle=require('./commentstyle.js');

var Aboutcomponent=React.createClass({
	render:function(){
		return (
				<div className="container marketing" style={commentstyle.div}>
				     <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7">
				          <h2 className="featurette-heading" style={commentstyle.title}>喝粥有助于保养胃</h2>
				          <p className="lead"  style={commentstyle.font}>粥属于流质食物，粥容易消化吸收，有益肠胃，滋补养身。不需要经过大量咀嚼与胃部蠕动即可快速进入小肠，分解为葡萄糖并被人体吸收利用，这样就大大降低了肠胃的负担。一般胃炎患者胃酸分泌不足，喝粥能促进胃酸分泌，有助于食物消化，还能提升血糖。</p>
				        </div>
				        <div className="col-md-5">
				          <img className="featurette-image img-responsive center-block" style={commentstyle.img} src="./img/about1.jpg" alt="Generic placeholder image"/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7 col-md-push-5">
				          <h2 className="featurette-heading" style={commentstyle.title}>具含丰富营养的水果沙拉</h2>
				          <p className="lead"  style={commentstyle.font}>1、降低胆固醇，促进血液循环，预防心脑血管疾病;
2、美容：橄榄油所含的维生素E等抗氧化物质能保护和调理皮肤表层，在防止皮肤损伤和抗衰老方面效果显著;
3、促进骨骼机能：橄榄油能刺激骨骼生长，增强骨骼对矿物质与钙的吸收，在骨骼生长发育和预防骨质疏松方面扮演重要角色;
4、抗衰老：橄榄油是天然抗氧化剂，已被证明能减慢大脑萎缩，并在试验中发现有延长寿命的效果。</p>
				        </div>
				        <div className="col-md-5 col-md-pull-7">
				          <img className="featurette-image img-responsive center-block" style={commentstyle.img} src="./img/about2.jpg" alt="Generic placeholder image"/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7">
				          <h2 className="featurette-heading" style={commentstyle.title}>一日之计在于晨——营养早餐</h2>
				          <p className="lead"  style={commentstyle.font}>“一日之计在于晨”，早餐是一天中最重要的一餐。早餐摄食的能量占人体一天所需能量的30%，而早餐营养的摄入不足很难在午餐和晚餐中补充回来。均衡的饮食，健康的生活习惯，每天晨起的营养早餐习惯是每个人每天“必须”的功课！</p>
				        </div>
				        <div className="col-md-5">
				          <img className="featurette-image img-responsive center-block" style={commentstyle.img} src="./img/about3.jpg" alt="Generic placeholder image"/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				    </div>			
			)
	}
})
module.exports=Aboutcomponent;