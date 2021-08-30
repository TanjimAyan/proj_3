// var test = once(function(){
// 	alert('hepdfjdljdg');
// });

// test();

var url_string = window.location.href;
var url = new URL(url_string).href;

url_check1 = url.includes("tabset_0=1");

url_check2 = url.includes("tabset_0=2");

url_check3 = url.includes("tabset_0=3");

url_check4 = url.includes("tabset_0=4");

if(url_check1){
	url_checked = url.replace('tabset_0=1','tabset_0=1');
	location.replace(url_checked);
}

if(url_check2){
	url_checked = url.replace('tabset_0=2','tabset_0=1');
	location.replace(url_checked);
}

if(url_check3){
	url_checked = url.replace('tabset_0=3','tabset_0=1');
	location.replace(url_checked);
}

if(url_check4){
	url_checked = url.replace('tabset_0=4','tabset_0=1');
	location.replace(url_checked);
}

$(document).ready(function(){

	var a = $('.width_calc').width();

	console.log(a);

});