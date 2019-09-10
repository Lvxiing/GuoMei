var GomeShare_PageUrl = location.href;
function GomeShare_CBG(id,ic,zi){
	var iW = document.documentElement.clientWidth;
	var iH = document.documentElement.clientHeight;
	var bg = document.getElementById(id);
	if (!bg){
		var bgObj = document.createElement("div");
		bgObj.id = id;
		bgObj.className = ic;
		bgObj.style.width = iW + "px";
		bgObj.style.height = Math.max(document.body.clientHeight, iH) + "px";
//        bg.style.width = "100%";
//		bg.style.height = "100%";
		bgObj.style.zIndex = zi;
		bgObj.style.display = "none";
		document.body.appendChild(bgObj);
	}else{
		bg.style.width = iW+ "px";
		bg.style.height = Math.max(document.body.clientHeight, iH) + "px";
//        bg.style.width = "100%";
//		bg.style.height = "100%";
		bg.style.zIndex = zi;
		bg.style.display = "none";
	}
	$("#"+id).fadeIn('fast');
}
function GomeShare_CDiv(id,ic,izx,iw,ih,iml){
	if (!document.getElementById(id)){
		var div = document.createElement("div");
		if (iml!=0){div.innerHTML = iml;}
		if (id!=0){div.id = id;}
		if (ic!=0){div.className = ic;}
		if (izx!=0){div.zIndex = izx;}
		if (iw!=0){div.style.width = iw+"px";}
		if (ih!=0){div.style.height = ih+"px";}
		document.body.appendChild(div); 
	}
	$("#"+id).fadeIn('slowly');
}
function GomeShare_Fix(id,w,h,t,l){
	$("#"+id).css("position","fixed");
	if(w==1){$('#'+id).css('left',( $(window).width() - $('#'+id).width() ) / 2 + 'px')}
	if(h==1){$('#'+id).css('top',( $(window).height() - $('#'+id).height() ) / 2  - 0 + 'px')}
	if(l!=''){$('#'+id).css('left',l + 'px')}
	if(t!=''){$('#'+id).css('top',t + 'px')}
}
function GomeShare_QrCode(obj,w,h,u){
	$(obj).html('');
	var rv = 'canvas';
	//$.browser.msie
	if (navigator.userAgent.indexOf("MSIE") >= 0){
		rv = 'table';
	}
	$(obj).qrcode({
		render       : rv,
		width        : w,
		height       : h,
		text         : u,
		correctLevel : QRErrorCorrectLevel.L,
		background   : "#F7F7F7",
		foreground   : "#333333"
	});
}
function GomeShare_Frame(u,w,h,t,l){
	GomeShare_CBG('gomeshare_plbg','gomeshare_bg',999999993);
	GomeShare_CDiv('gomeshare_pl','',0,w,h,'<div class=gomeshare_close onclick=GomeShare_CloseL()></div><iframe src='+u+' style="width:'+w+'px;height:'+h+'px;marginwidth:'+l+'px;marginheight:'+t+'px;" frameborder=0 scrolling=no></iframe>');
	GomeShare_Fix('gomeshare_pl',1,1,'','')
}
function GomeShare_LoginFavicon(id,l,m,n){
	GomeShare_CloseL();
	if(l=='1'){
		$('#gomeshare_'+id).replaceWith('<div id=gomeshare_'+id+' class=gomeshare_back onclick=GomeShare_On(this)><i></i></div>');
		$('#gomeshare_bx_'+id).replaceWith('<div id=gomeshare_bx_'+id+' class=gomeshare_icon_on onclick=GomeShare_IconSelect($(this),"gomeshare_icon_on","gomeshare_icon_ot")></div>');
	}else{
		GomeShare_Shake('#gomeshare_'+id,50,5,100);
	}
}
function GomeOneShare_DealIcon(o,x,y,z){
    //$('.tshare').removeClass('n-onebtn-share');
	$('.o-icons .'+o).removeAttr("onclick");
    $('.o-icons .'+o).attr('class',o+' '+o+"_o");   
    $('.o-icons .'+o+'_o span').replaceWith('<span id="ts_'+o+'">已绑定</span>');
    $('.o-icons .'+o+'_o span').attr('class','o-icons-checked');
    $('.tshare .share_box .n-onebtn-share').css('display','none');
}
function GomeShare_OAuthIcon(o,v,x,y,z){
	GomeShare_CloseL();
	if(v=='1'){GomeOneShare_DealIcon(o,'','','')}
}
function GomeShare_On(id){
	if($(id).attr('class')=='gomeshare_back'){
		$(id).attr('class','gomeshare_back_gray');
	}else{
		$(id).attr('class','gomeshare_back');
	}
}
function GomeShare_CloseL(){
	$('#gomeshare_plbg').fadeOut('fast',function(){$('#gomeshare_plbg').remove()});
	$('#gomeshare_pl').fadeOut('fast',function(){$('#gomeshare_pl').remove()});
}
function GomeShare_SetDomain(){
	document.domain = "gome.com.cn";
}
var u_qq = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100271288&redirect_uri=http://s.gome.com.cn/OAuth_qq/Redirect&scope=get_user_info,add_t,add_pic_t&state=QC';
	var a_qq = 'GomeShare_Frame("'+u_qq+'",460,600,0,0);GomeShare_SetDomain()';
var u_weibo = 'https://api.weibo.com/oauth2/authorize?client_id=2537522211&redirect_uri=http://s.gome.com.cn/OAuth_weibo/Redirect';
	var a_weibo = 'GomeShare_Frame("'+u_weibo+'",700,360,0,0);GomeShare_SetDomain()';
var u_renren = 'https://graph.renren.com/oauth/authorize?client_id=97210651d69b43dbb030e209b177164e&response_type=code&scope=publish_blog+publish_feed+publish_share&display=page&redirect_uri=http://s.gome.com.cn/OAuth_renren/Redirect';
	var a_renren = 'GomeShare_Frame("'+u_renren+'",666,400,0,0);GomeShare_SetDomain()';
var u_douban = 'https://www.douban.com/service/auth2/auth?client_id=0fc273a29cdab7fb2f475ae7d69027f1&response_type=code&scope=commodity_basic_w,community_basic_note,shuo_basic_w&redirect_uri=http://s.gome.com.cn/OAuth_douban/Redirect';
	var a_douban = 'GomeShare_Frame("'+u_douban+'",360,430,0,0);GomeShare_SetDomain()';
var FxbD = '';
FxbD += '<div class="tshare">';
	FxbD += '<div class="hd"><h1>分享给小伙伴,有人购买即得佣金</h1><a class="tclose" href="javascript:GomeShare_Close()"></a></div>';
	FxbD += '<div class="cd clearfix">';
		FxbD += '<div class="cd_l">';
			FxbD += '<div class="banner"><a id="tshare_ps1" href="http://fxb.gome.com.cn/Zhanghu/PersonalCenter?typeId=1" target=_blank><img src="http://s.gome.com.cn/images/face.gif" class="cd_img"></a></div>';
			FxbD += '<div class="FQA"></div>';
		FxbD += '</div>';
		FxbD += '<div class="cd_r">';
		var Fxb_RB = '';
		Fxb_RB += '</div>';
	Fxb_RB += '</div>';
	Fxb_RB += '<div id="QRCode" class="QRCode">';
		Fxb_RB += '<div class="QRCode_tit">';
			Fxb_RB += '<p>分享到微信朋友圈</p>';
			Fxb_RB += '<a href="javascript:" class="QRCode_close" onclick=$("#QRCode").fadeOut()></a>';
		Fxb_RB += '</div>';
		Fxb_RB += '<div id="tshare_qrcode"></div>';
		Fxb_RB += '<p class="tips">打开微信，点击底部的“发现”，使用“扫一扫”即可将网页分享至朋友圈。</p>';
	Fxb_RB += '</div>';
	Fxb_RB += '<div id="SNS_tips" class="SNS_tips">';
		Fxb_RB += '<a href="javascript:" class="QRCode_close" onclick=$("#SNS_tips").fadeOut();></a>';
		Fxb_RB += '<p><i class="tips_icon tips_icon1"></i>您还没有绑定SNS平台账号哦~</p>';
	Fxb_RB += '</div>';
Fxb_RB += '</div>';
var FxbE = '';
FxbE += '<div class="success"><p class="tips_text"><i class="tips_icon"></i>您已成功一键分享，坐等收益吧！</p></div>'
FxbE += '<div class="success_c"><a class="red_btn" href="javascript:GomeShare_Close()">关闭</a></div>'

var _GmFxb = _GmFxb || [];
_GmFxb.FxbDiv = function(hei,surl,txt,pics,pico,itop,f1,f2,EX1,EX2,EX3,EX4,EX5,EX6){
	$("body").append("<link href='//css.gomein.net.cn/channels/cssshare/scommon.css' rel='stylesheet' type='text/css'>");
	$("body").append("<script src='//js.gomein.net.cn/channels/jsshare/jq.qrcode.js'></script>");
	if(surl==''){surl='http://www.gome.com.cn'}
	surl = unescape(surl);
	var eu = surl.replace(/=/g,'////');
	eu = eu.replace(/&/g,'||||');
	eu = escape(eu);
	surl = escape(surl);
	if(hei==1){GomeShare_CBG('gomeshare_bg','gomeshare_bg',999999991)}
	GomeShare_CDiv('tshare_div','',0,830,433,'');
	if(txt==''){
		txt = $('title').text();
	}
	var PicHtml = '', PicUrls = '';
	if(pics!=''){
		for(var i=0;i<pics.split(',').length;i++){
			if(i<4 && pics.split(',')[i]!=''){
				PicHtml += '<div class="show_item"><img src="'+pics.split(',')[i]+'"><i></i></div>';
			}
		}
		PicUrls = pics;
	}else if(pico!=''){
		$(pico).find('img').each(function(i){
			if(i<4){
				PicHtml += '<div class="show_item"><img src="'+$(this).attr("src")+'"><i></i></div>';
			}
			if(i==0){PicUrls=$(this).attr("src")}
		});
	}else{
		$('img').each(function(i){
			if(i<4){
				PicHtml += '<div class="show_item"><img src="'+$(this).attr("src")+'"><i></i></div>';
			}
			if(i==0){PicUrls=$(this).attr("src")}
		});
	}
	PicUrls = PicUrls.split(',')[0];
	var FxbF = '';
    FxbF += '<div class="login_btn"><p>立即登录去分享赚钱~</p><a class="btn" href="https://login.gome.com.cn/login" target=_blank>登  录</a></div>';
	//FxbF += '<div class="login_btn"><div class="s_get_money"><span>分享赚<em>58.00</em>元</span></div><div class="s_get_other"><span>分享赚</span><i></i></div><p><span>当小伙伴从你分享的链接进入国美在线，你最高可获得TA订单总额10%的收益奖励，进入“我的国美-分享收益”</span><a href="http://myhome.gome.com.cn/member/shareIncome" target="_blank">查看&gt;</a></p><a class="btn" href="https://login.gome.com.cn/login" target=_blank>登  录</a></div>';
	FxbF += '<div class="share_box clearfix">';
		FxbF += '<div class="not_login_tips">您还可以点击图标，直接分享给你的小伙伴！</div>';
		FxbF += '<div class="s-icons-box clearfix">';
			FxbF += '<div class="s-icons">';
				FxbF += '<span class="weixin weixin_c" onclick=$("#QRCode").fadeIn()></span>';
	$.ajax({
		async:false,
		url:"//s.gome.com.cn/Fxb_OAuth_Ajax?u="+eu+"&d="+document.domain+"&rnd="+Math.round(Math.random()*10000),
		type:"GET",
		dataType:"jsonp",
		jsonp:"callback",
		success:function(d){
            var Fxb_RC = '';
			Fxb_RC += '<p>说说这个商品怎么样？</p>';
			Fxb_RC += '<div class="text_box">';
				Fxb_RC += '<textarea id="share-contents" class="share-contents"></textarea>';
				Fxb_RC += '<div id="test_tips" class="word_num"></div>';
			Fxb_RC += '</div>';
			Fxb_RC += '<div class="show_box">';
				Fxb_RC += '<div class="show_item"></div>';
				Fxb_RC += '<input id="ts_pic" type="hidden">';
			Fxb_RC += '</div>';
			Fxb_RC += '<div class="share_box clearfix">';
				Fxb_RC += '<div class="s-icons-box clearfix">';
					Fxb_RC += '<div class="s-icons">';
						Fxb_RC += '<span class="weixin_c" onclick=$("#QRCode").fadeIn()></span>';
//						Fxb_RC += '<a href="http://share.v.t.qq.com/index.php?c=share&a=index&url='+d.l+'&title='+encodeURI(txt)+'&appkey=" target="_blank"><span class="qq qq_c"></span></a>';
						Fxb_RC += '<a href="http://service.weibo.com/share/share.php?url='+d.l+'&title='+encodeURI(txt)+'&appkey=&searchPic=true" target="_blank"><span class="weibo weibo_c"></span></a>';
						Fxb_RC += '<a href="http://widget.renren.com/dialog/share?resourceUrl='+d.l+'&srcUrl='+d.l+'&title='+encodeURI(txt)+'&description='+encodeURI(txt)+'" target="_blank"><span class="renren renren_c"></span></a>';
                        var Fxb_RQ = '';
					    Fxb_RQ += '<a href="javascript:" class="share_copy_link">复制链接</a>';
					Fxb_RQ += '</div>';
					Fxb_RQ += '<div class="onebtn_share">';
					   Fxb_RQ += '<div class="o_share_btn">';
					       Fxb_RQ += '<a class="o_share_f event_alert" href="javascript:"></a>';
					       Fxb_RQ += '<a class="o_share_a event_alert" href="javascript:"></a>';
					   Fxb_RQ += '</div>';
					   Fxb_RQ += '<div id="o-icons-box">';
					       Fxb_RQ += '<div class="o-icons">';
					           Fxb_RQ += '<a class="weibo_o" href="javascript:" onclick='+a_weibo+'><label class="xl_weibo_b"></label><span>绑定</span></a>';
					           Fxb_RQ += '<a class="qq_o" href="javascript:" onclick='+a_qq+'><label class="tx_weibo_b"></label><span>绑定</span></a>';
					           Fxb_RQ += '<a class="renren_o" href="javascript:" onclick='+a_renren+'><label class="renren_b"></label><span>绑定</span></a>';
					       Fxb_RQ += '</div>';
					   Fxb_RQ += '</div>';
					Fxb_RQ += '</div>';
				Fxb_RQ += '</div>';
				Fxb_RQ += '<div class="btn_cont">';
					Fxb_RQ += '<p id="tshare_ps2"></p>';
				Fxb_RQ += '</div>';
			Fxb_RQ += '</div>';
			var FxbF_S = '';
			FxbF_S += '<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+escape(d.l)+'&title=&desc='+encodeURI(txt)+'&summary=&site=" target=_blank><span class="qzone qzone_c"></span></a>';
			FxbF_S += '<a href="http://connect.qq.com/widget/shareqq/index.html?url='+d.l+'&desc=&title='+encodeURI("干货，净是干货")+'&summary='+encodeURI(txt)+'&pics='+PicUrls+'&site='+encodeURI("国美分享宝")+'" target=_blank><span class="sohu sohu_c"></span></a>';
			FxbF_S += '<a href="http://mail.qq.com/cgi-bin/qm_share?url='+d.l+'&to=qqmail&desc='+encodeURI(txt)+'&summary=&title='+encodeURI("干货，净是干货，分享一个不错的东西")+'&site='+encodeURI("查看详情")+'&pics='+PicUrls+'" target=_blank><span class="kaixin kaixin_c"></span></a>';
			FxbF_S += '<a href="http://tieba.baidu.com/f/commit/share/openShareApi?url='+d.l+'&title='+encodeURI(txt)+'&desc='+encodeURI(txt)+'&comment=" target=_blank><span class="baidu baidu_c"></span></a>';
			var FxbF_T = '';
//			FxbF_T += '<a href="http://share.v.t.qq.com/index.php?c=share&a=index&url='+d.l+'&title='+encodeURI(txt)+'&appkey=" target=_blank><span class="qq qq_c"></span></a>';
			FxbF_T += '<a href="http://service.weibo.com/share/share.php?url='+d.l+'&title='+encodeURI(txt)+'&appkey=&searchPic=true" target=_blank><span class="weibo weibo_c"></span></a>';
			FxbF_T += '<a href="http://widget.renren.com/dialog/share?resourceUrl='+d.l+'&srcUrl='+d.l+'&title='+encodeURI(txt)+'&description='+encodeURI(txt)+'" target=_blank><span class="renren renren_c"></span></a>';
            FxbF_T += '<a href="javascript:" class="share_copy_link">复制链接</a>';
			FxbF_T += '</div>';
			FxbF_T += '</div></div>';
		
			GomeShare_Fix('tshare_div',1,1,itop,'');
			$('#tshare_div').css('display','block');
            
			if(d.u==0){
				$('#tshare_div').html(FxbD+FxbF+FxbF_S+FxbF_T+Fxb_RB);
				$('.share_copy_link').attr('href','javascript:GomeShare_CopyNoIE("'+d.l+'",0,0)');
			}else{
				$('#tshare_div').html(FxbD+Fxb_RC+FxbF_S+Fxb_RQ+Fxb_RB);
				$('#share-contents').val(txt);
				$('.show_box').html(PicHtml);
				$('.show_item img').each(function(){
					ImgInAll($(this),$(this).css('width').replace('px',''),$(this).css('height').replace('px',''),78,78,'')
				});
				$('.show_box div').each(function(i){
					if(i==0){
						$(this).attr('class','show_item redbd');
					}
				});
				$('.show_box div').click(function(){
					$(this).attr('class','show_item redbd');
					$(this).siblings().attr('class','show_item');
				});
				$('.o_share_f').click(function(){GomeShare_Pre(eu,null,null,null,f1,f2,EX1,EX2,EX3,EX4,EX5,EX6)});
				$('.share_copy_link').attr('href','javascript:GomeShare_CopyNoIE("'+d.l+'",0,0)');
				for(var i=0;i<d.o.length;i++){
                    GomeOneShare_DealIcon(d.o[i],'','','');
				}
//				$('.s-icons').append(FxbF_S);
                //问题：IE第一次打开页面点击+不执行以下方法
                $('body,html').click(function(e) {
                    var orgin=$(e.target);
                    if(orgin.is(".event_alert")){
                        $('#o-icons-box').show();
                    }else{
                        $('#o-icons-box').hide();
                    }
                });
			}
            //问题：IE第一次打开页面头像大图不能加载出来
			if(d.ps1){
				$('#tshare_ps1').attr('href',d.ps1.l);
				$('#tshare_ps1 img').attr('src',d.ps1.p);
			}
			if(d.ps2){
				$('#tshare_ps2').html('<a href="'+d.ps2.l+'" target=_blank>'+d.ps2.t+'</a>');
			}
			$('.weixin_c').click(function(){GomeShare_QrCode('#tshare_qrcode',150,150,d.l)});
		}
	});
}
function GomeShare_FxbDiv(hei,surl,txt,pics,pico,itop,f1,f2,EX1,EX2,EX3,EX4,EX5,EX6){
	_GmFxb.FxbDiv(hei,surl,txt,pics,pico,itop,f1,f2,EX1,EX2,EX3,EX4,EX5,EX6)
}
//准备提交分享事件
function GomeShare_Pre(surl,x,y,z,m,n,EX1,EX2,EX3,EX4,EX5,EX6){
	var c = $('#share-contents').val();
	if(c!=''){
		c=c.substring(0,80);
		c=escape(c);
	}else{
		alert('请填写分享内容');
		return
	}
	var surl = escape(surl.split('#')[0]);
	var oid = new Array("qq","weibo","renren","kaixin","douban","yixin"), olist = '';
	for(var i=0;i<oid.length;i++){
		if($('#ts_'+oid[i]).attr('class')=='o-icons-checked'){
			olist+='_'+oid[i];
		}
	}
	var p = $('.redbd img').attr('src');
	if(p == undefined){
		p = '';
	}else if(p.indexOf('http') < 0){
		p = '';
	}
	if(olist!=''){
        $('.o_share_f').removeClass('event_alert');
		GomeShare_Sub(c,olist,surl,p,'','','',m,n,EX1,EX2,EX3,EX4,EX5,EX6);
	}else{
        $('.n-onebtn-share').remove();
        $('.tshare .btn_cont').after("<div class='n-onebtn-share'>你还没有绑定SNS平台账号哦，请绑定后再分享</div>");
        for(var i = -1;i > -3;i--){
            $('.tshare .n-onebtn-share').fadeOut(1500);
            $('.tshare .n-onebtn-share').fadeIn(1500);
        }
		return;
	}
}
//EX1表示站点ID、项目编号，分享宝社区这个网站固定为100
function GomeShare_Sub(c,o,u,p,X,Y,Z,m,n,EX1,EX2,EX3,EX4,EX5,EX6){
	$.ajax({
		url:"//s.gome.com.cn/Fxb_Share_Ajax?c="+c+"&o="+o+"&u="+u+"&p="+p+"&si="+EX1+"&a=a&f=1&rnd="+Math.round(Math.random()*10000),
		dataType:"jsonp",
		jsonp:"callback",
		success:function(d){
			if(d.msg=='success'){
				$('.cd_r').html(FxbE);
			}
		}
	});
}
function GomeShare_Select(cm,cn,ct){
	$('#gomeshare_text div').click(function(){
			$(this).removeClass();
			$(this).siblings().removeClass();
			$(this).siblings().addClass(cm+' '+ct);
			$(this).addClass(cm+' '+cn);
		}
	);
}
function GomeShare_Close(){
	$('#gomeshare_bg').fadeOut('fast',function(){$('#gomeshare_bg').remove()});
	$('#gomeshare_div').fadeOut('fast',function(){$('#gomeshare_div').remove()});
	$('#tshare_div').fadeOut('fast',function(){$('#tshare_div').remove()});
}
function GomeShare_MoveCoin(){
	$('#gomeshare_coin').css('display','block');
	$('#gomeshare_coin').animate({top:'360px'},1500).fadeOut();
}
function GomeShare_MoveFavicon(id){
	$('#gomeshare_'+id).appendTo('#gomeshare_action').fadeOut().fadeIn();
}
function GomeShare_Opener(u,t,w,h,t,l){
	u = unescape(u);
	var it = (window.screen.availHeight-30-h)/2;
	var il = (window.screen.availWidth-10-w)/2;
	window.open(u,t,"width="+w+",height="+h+",top="+it+",left="+il+",toolbar=no,menubar=no,scrollbars=no,status=no,location=no,resizable=no");
}
function GomeShare_CopyNoIE(str,M,N){
    window.prompt("请手动复制以下链接地址，按Ctrl+C即可复制",str);
}
function GomeShare_IconInit(obj,M,N){
	var c = '', o = new Array("qq","weibo","renren");
	c += '<div class="gomeshare_icon_ot" id="gomeshare_bx_qq" onclick='+a_qq+'></div>';
	c += '<div class="gomeshare_icon_ot" id="gomeshare_bx_weibo" onclick='+a_weibo+'></div>';
	c += '<div class="gomeshare_icon_ot" id="gomeshare_bx_renren" onclick='+a_renren+'></div>';
	$(obj).html(c);
	$.ajax({
		async:false,
		url:"//s.gome.com.cn/Fxb_OAuth_Ajax?rnd="+Math.round(Math.random()*10000),
		type:"GET",
		dataType:"jsonp",
		jsonp:"callback",
		success:function(d){
			if(d.u==0){
				$(obj+' > div').removeAttr("onclick");
				var bu = 'http://s.gome.com.cn/html/GomeLoginBack.html?obj='+obj, bu = escape(bu);
				$(obj+' > div').click(function(){GomeShare_Frame('https://login.gome.com.cn/login?orginURI='+bu,930,490,0,0)});
			}else{
				for(var i=0;i<d.o.length;i++){
					$('#gomeshare_bx_'+d.o[i]).removeAttr("onclick");
					$('#gomeshare_bx_'+d.o[i]).attr('class','gomeshare_icon_on');
					$('#gomeshare_bx_'+d.o[i]).click(function(){GomeShare_IconSelect($(this),'gomeshare_icon_on','gomeshare_icon_ot')});
				}
			}
		}
	});
}
function GomeShare_IconSelect(obj,cn,ct){
	if($(obj).attr('class')==cn){
		$(obj).attr('class',ct);
	}else{
		$(obj).attr('class',cn);
	}
}
//function GomeShare_ListInit(obj,el,n){
//	$(obj).click(function(){
//		var desc = $(this).attr('data-desc').split(el);
//	})
//}
function GomeShare_Shake(id,h,n,t){
	for(var i=0;i<n;i++){$(id).animate({top:'-'+h*(1-i/n)+'px'},t*(1-i/n)).animate({top:'0px'},t*(1-i/n));}
}
function ImgInAll(obj,iw,ih,w,h,n){
	if(iw/ih>=w/h){
		var nih = w*ih/iw;
		$(obj).css('width',w+'px');
		$(obj).css('margin-top',-(nih-h)/2+'px');
	}else{
		var niw = h*iw/ih;
		$(obj).css('height',h+'px');
		$(obj).css('margin-left',-(niw-w)/2+'px');
	}
}