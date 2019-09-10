!function(exports,prdInfo,$,templateSimple){
		
		/*Date.prototype.Format = function (fmt) { //author: meizz 
		    var o = {
		        "M+": this.getMonth() + 1, //月份 
		        "d+": this.getDate(), //日 
		        "h+": this.getHours(), //小时 
		        "m+": this.getMinutes(), //分 
		        "s+": this.getSeconds(), //秒 
		        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		        "S": this.getMilliseconds() //毫秒 
		    };
		    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		    for (var k in o)
		    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		    return fmt;
		}*/

	$('[share_page]').click(function(){
		var  share_page=$(this).attr('share_page'),
			 share_id=$(this).attr('share_id'),
			 share_type=$(this).attr('share_typeid');
			 //cosole.log(share_page+"  "+share_id);
			 $('body').off().on('click','.s-icons span,.share_copy_link',function(){
			 	var $this=$(this),
			 		share_source="",
			 		new_share="";

			 


			 	/*大数据分享接口上报*/
			 	$this.hasClass('weixin_c')?share_source="wx":"";
			 	$this.hasClass('sohu_c')?share_source="qq":"";
			 	$this.hasClass('qzone_c')?share_source="qz":"";
			 	$this.hasClass('weibo_c')?share_source="wb":"";
			 	$this.hasClass('renren')?share_source="rrw":"";
			 	$this.hasClass('kaixin')?share_source="qqy":"";
			 	$this.hasClass('baidu')?share_source="bd":"";
			 	$this.hasClass('share_copy_link')?share_source="copy":"";
			 	var  data={
			 			'SP':'sc',
			 			'pf':'pc',
			 			'Sc':share_source,
			 			'St':'sp',
			 			'sid':prdInfo.sku,
			 			'uid':loginData.loginId,
			 			'pid':prdInfo.prdId,
			 			'ss':0,
			 			'url':location.href+'?cmpid=s-p-'+share_source,
			 			'env':location.href.indexOf('uat')!=-1?'pre':'pro'	
			 		};
			 		data=JSON.stringify(data);

			 		/*神策分享埋码*/
			 		
			 		window.GomeSa &&  GomeSa.track('Share', {
			 		   pf:"pc",
			 		   sc:share_source,
			 		   ss:"",
			 		   st:"sp",
			 		   sid:prdInfo.sku,
			 		   url:location.href
			 		});


			 	$.ajax({
			 		url:"//beacon.gomeplus.com/log_share",
			 		data:data,
			 		dataType:'json',
			 		type:'post',
			 		success:function(){
			 			
			 		}
			 	})
			 })

			 
	})
}(window,prdInfo,$,templateSimple);