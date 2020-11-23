jQuery(document).ready(function(){
	
	function getRandomColor(){var letters='0123456789123456'.split('');var color='#';for(var i=0;i<6;i++){color+=letters[Math.floor(Math.random()*16)];}return color;}
	
	TweenMax.set(jQuery('.gsap-demo,.gsap-demo *'),{perspective:1200,transformStyle:"preserve-3d"});

	jQuery('.gsap-demo ul.diamond-grid > li > div.diamond,.gsap-demo ul.diamond-grid > li > div.diamond-back').each(function(index){
		jQuery(this).css({
			'background-color':getRandomColor()
		});
	});

	TweenMax.set(jQuery('.gsap-demo ul.diamond-grid > li > div.diamond'),{transformOrigin:'50% 50% 0%',rotationX:'0deg',rotationY:'0deg',rotationZ:'45deg'});
	TweenMax.set(jQuery('.gsap-demo ul.diamond-grid > li > div.diamond div.content'),{transformOrigin:'50% 50% 0%',rotationX:'0deg',rotationY:'0deg',rotationZ:'-45deg'});


	TweenMax.set(jQuery('.gsap-demo ul.diamond-grid > li > div.diamond-back'),{transformOrigin:'50% 50% 0%',rotationX:'0deg',rotationY:'180deg',rotationZ:'45deg'});
	TweenMax.set(jQuery('.gsap-demo ul.diamond-grid > li > div.diamond-back div.content'),{transformOrigin:'50% 50% 0%',rotationX:'0deg',rotationY:'0deg',rotationZ:'45deg'});


	jQuery('.gsap-demo ul.diamond-grid > li').on('mouseover',function(){
		TweenMax.to(jQuery(this),1,{transformOrigin:'50% 50% 0%',rotationX:'0deg',rotationY:'180deg',rotationZ:'0deg'});
	});
	jQuery('.gsap-demo ul.diamond-grid > li').on('mouseout',function(){
		TweenMax.to(jQuery(this),1,{transformOrigin:'50% 50% 0%',rotationX:'0deg',rotationY:'0deg',rotationZ:'0deg'});
	});
});