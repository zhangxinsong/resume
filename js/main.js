$(function () {
	$('#MyWeiYa').fullpage({
		anchors : ["page1","page2","page3","page4"],
		resize : true,
		navigation : true,
		navigationPosition : 'right',
		css3:false,
		easing : 'easeInOutElastic'
	});
	$('#details').click(function(){
		var i = 0;
		var t;
		function write(){
			var msg = "本人性格开朗、稳重、有活力，待人热情、真诚。有较强的组织能力、团体协作精神，较好的社交能力，善于处理各种人际关系。能迅速的适应各种环境，并融合其中。有强烈的求知欲，对事情一丝不苟要求做到最好，对待工作态度认真。";  
    		var len = msg.length;
    		var msg1 = msg.substring(0,i);
    		$('#details-content').html(msg1);  
    		if(i == len){
    			clearInterval(t);
    		}  
    		else{ 
    			i++;  
			}  
		}
		function time1(){  
    		t = setInterval(function(){write();},75);  
		}
		time1();
	});
})