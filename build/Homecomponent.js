var React=require('react');
var commentstyle=require('./commentstyle.js');

var Homecomponent=React.createClass({
	render:function(){		
		return (
				 <div className="container marketing" style={commentstyle.div}>
				     <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7">
				          <h2 className="featurette-heading" style={commentstyle.title}>皮肤的健康管理</h2>
				          <p className="lead" style={commentstyle.font}>1、 做好清洁工作是基础。要彻底洁面，选用温和的洗面奶或香皂，并用清水洗净。2、选择适合自己的护肤品，每个人的肤质都不通，不能盲目的选用，应该根据自己的肤质特点选用适合自己的护肤品。3、多喝水，补充人体一天所需要的水分。尤其气候干燥的时候，更加要多喝水，可以喝点蜂蜜水，美容养颜。4、多吃水果蔬菜，补充维生素。</p>
				        </div>
				        <div className="col-md-5">
				          <img className="featurette-image img-responsive center-block" src="./img/home1.jpg" alt="Generic placeholder image" style={commentstyle.img}/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7 col-md-push-5">
				          <h2 className="featurette-heading" style={commentstyle.title}>身体的健康管理</h2>
				          <p className="lead" style={commentstyle.font}>SPA包含了脸部护理、音乐按摩、芳香疗法、淋巴排毒、瑜珈等内容，以养生、美容、健身、舒心为主旨，满具人的视觉（色彩、自然景观）、嗅觉（花草香薰）、触觉（按摩）、听觉（音乐）、味觉（花草茶）等五官和心灵感受，带给人愉悦享受，让人神情舒展。</p>
<p className="lead" style={commentstyle.font}>SPA的功效之美容美体为保持身体健康兼维系良好身材，譬如说摄取低卡路里的饮食、运动、刺激血液循环与淋巴循环、松弛紧张肌肉，都是水疗的部份。</p>
										　　
				        </div>
				        <div className="col-md-5 col-md-pull-7">
				          <img className="featurette-image img-responsive center-block" src="./img/home2.jpg" alt="Generic placeholder image" style={commentstyle.img}/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				
				      <div className="row featurette">
				        <div className="col-md-7">
				          <h2 className="featurette-heading" style={commentstyle.title}>健身增强体质</h2>
				          <p className="lead" style={commentstyle.font}> 1、健身可以让你拥有一个健美的体型。肌肉饱满而不臃肿，线条匀称，充满着健与美的感觉。 2、健身可以让你全身充满力气。
虽然现在不是一个依靠体力而存活的时代，但是你在家难免要提桶水吧，难免旅行的时候要提个箱子吧。3、健身的你对这些体力活可以轻松应对。健身可以降低你得病的几率，健身可以提高你身体的恢复力。
</p>
				        </div>
				        <div className="col-md-5">
				          <img className="featurette-image img-responsive center-block" src="./img/home3.jpg" alt="Generic placeholder image" style={commentstyle.img}/>
				        </div>
				      </div>
				
				      <hr className="featurette-divider"/>
				    </div>
					
			)
	}
})
module.exports=Homecomponent;