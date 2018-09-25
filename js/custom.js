jQuery(document).ready(function(){

	//carouFredSel-Slider
	"use strict";
	$('.my_work_carousel').carouFredSel({
		responsive:true,
		width:'100%',
		circular:true,
		prev:'#prev',
		next:'#next',
		scroll:
			{
				items:1,
				duration:1,
				pouseOnHover:true,
			},
		auto:true,
		items:
			{
				visible:
					{
						min:1,
						max:1
					},
				height:"variable"
			},
	});
});