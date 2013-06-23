
$(document).ready(function() {

//http://wowmotty.blogspot.com/2009/06/convert-jquery-rgb-output-to-hex-color.html
	function rgb2hex(rgb){
		rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		return "#" +
			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
	}


	$("input[type=range]").change(function() {

		/* --------- variables --------- */
		var hue = [];
		var saturation = [];
		var lightness = [];

		$(".hue").each(function(i){
			hue.push($(".hue-"+(i+1)).val());
			$(".hueValue-"+(i+1)).val(hue[i]);
		});

		$(".saturation").each(function(i){
			saturation.push($(".saturation-"+(i+1)).val());
			$(".saturationValue-"+(i+1)).val(saturation[i]);
		});

		$(".lightness").each(function(i){
			lightness.push($(".lightness-"+(i+1)).val());
			$(".lightnessValue-"+(i+1)).val(lightness[i]);
		});


		/* --------- setting background color of blocks --------- */
		var color = [];
		var colorValue = [];

		for(var i = 0; i<hue.length; i++){
			color[i] = "hsl(" + hue[i] + "," + saturation[i] + "%," + lightness[i] + "%)";
			$(".hsl-"+(i+1)).css("background-color", color[i]);
			colorValue[i] = $(".hsl-"+(i+1)).css("background-color");
			$(".rgb-"+(i+1)).html(colorValue[i]);
			$(".hex-"+(i+1)).html(rgb2hex(colorValue[i]));
		}

	});


	$("input[type=text]").change(function() {

		var hue = [];
		var saturation = [];
		var lightness = [];

		$(".hueValue").each(function(i){
			hue.push($(".hueValue-"+(i+1)).val());
			$(".hue-"+(i+1)).val(hue[i]);
		});

		$(".saturationValue").each(function(i){
			saturation.push($(".saturationValue-"+(i+1)).val());
			$(".saturation-"+(i+1)).val(saturation[i]);
		});

		$(".lightnessValue").each(function(i){
			lightness.push($(".lightnessValue-"+(i+1)).val());
			$(".lightness-"+(i+1)).val(lightness[i]);
		});


		/* --------- setting background color of blocks --------- */
		var color = [];
		var colorValue = [];

		for(var i = 0; i<hue.length; i++){
			color[i] = "hsl(" + hue[i] + "," + saturation[i] + "%," + lightness[i] + "%)";
			$(".hsl-"+(i+1)).css("background-color", color[i]);
			colorValue[i] = $(".hsl-"+(i+1)).css("background-color");
			$(".rgb-"+(i+1)).html(colorValue[i]);
			$(".hex-"+(i+1)).html(rgb2hex(colorValue[i]));
		}

	});
});
