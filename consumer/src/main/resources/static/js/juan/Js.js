window.g=window.g||{};(function(){window.g=window.g||{};function e(e){if(document.cookie.length>0){c_start=document.cookie.indexOf(e+"=");if(c_start!=-1){c_start=c_start+e.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1)c_end=document.cookie.length;return decodeURIComponent(document.cookie.substring(c_start,c_end))}}return""}g.cityCode=function(t){t=parseInt(t);if(t>=0&&t<=4){}else{t=3}var i="";var n=e("atgregion")||"11010200|北京北京市朝阳区|11010000|11000000|110102002";var a=n.split("|");switch(t){case 0:i=a[1];break;case 1:i=a[3];break;case 2:i=a[2];break;case 3:i=a[0];break;case 4:i=a[4]==undefined?a[0]+"1":a[4];break}return i}})();(function(){var e=jQuery;window.g=window.g||{};function t(e){if(e.substr(e.length-1,1)=="/"){return e.substr(0,e.length-1)}else{return e}}var i={w:t(staSite),item:t(staSite.replace("www","item")),js:t(stageJsServer),css:t(stageCssServer),img:t(stageImageServer),login:t(staSite.replace("www","login")),reg:t(staSite.replace("www","reg")),desc:t(staSite.replace("www","desc")),contextPath:contextPath,getParam:function(e){var t={};if(location.search.indexOf("?")!=-1){var i=location.search.substr(1);strs=i.split("&");for(var n=0;n<strs.length;n++){if(strs[n].split("=").length!==2){continue}t[strs[n].split("=")[0]]=unescape(strs[n].split("=")[1])}}if(t[e]==undefined){t[e]=""}return t[e]},g:t(dynSite)};g.url=i})();(function(){var e=jQuery;ajax=function(){if(typeof arguments[0]!="string"){return}var t=undefined;var i={};var n=undefined;var a={};if(arguments.length==1){t=arguments[0];i={}}else if(arguments.length==2){if(typeof arguments[1]=="function"){t=arguments[0];n=arguments[1]}else{t=arguments[0];i=arguments[1]}}else if(arguments.length==3&&typeof arguments[2]=="function"){t=arguments[0];i=arguments[1];n=arguments[2]}else if(arguments.length==3&&typeof arguments[2]=="object"){t=arguments[0];i=arguments[1];a=arguments[2]}else if(arguments.length==4){t=arguments[0];i=arguments[1];a=arguments[2];n=arguments[3]}if(typeof a.site=="string"&&a.site.indexOf("g")>=0){t=g.url.g+t}else if(typeof a.site=="string"&&a.site.indexOf("w")>=0){t=g.url.w+t}else if(typeof a.site=="string"&&a.site.indexOf("f")>=0){t=t}else if(i.site&&i.site.indexOf("g")>=0){t=g.url.g+t}else if(i.site&&i.site.indexOf("w")>=0){t=g.url.w+t}else if(i.site&&i.site.indexOf("f")>=0){t=t}else if(i.site&&i.site.indexOf("s")>=0){t="//ss"+cookieDomain+t}else{t=g.url.g+t}if(i.site){delete i.site}var o={type:"get",url:t,data:i,dataType:"jsonp",jsonpName:i.callback==undefined?"cb_"+parseInt(Math.random()*1e15):i.callback,success:function(e){n&&n(e)}};if(i.callback){delete i.callback}if(typeof a=="object"){e.extend(o,a)}return e.ajax(o)};window.g=window.g||{};g.ajax=ajax})();(function(){function e(e){this._endfn=[];this._subs=[];this._init=[];this._endStatus=false;this.setAJAX=e}e.prototype={publish:function(){var e=this;for(var t=0;t<e._init.length;t++){if(e._init[t]()==false){return}}this._endStatus=false;if(typeof this.setAJAX=="function"){this.setAJAX().done(function(t){for(var i=0;i<e._subs.length;i++){e._subs[i](t)}e._endStatus=true;for(var i=0;i<e._endfn.length;i++){e._endfn[i](t)}})}else{for(var t=0;t<e._subs.length;t++){e._subs[t](data)}e._endStatus=true;for(var t=0;t<e._endfn.length;t++){e._endfn[t](data)}}},init:function(e){e&&this._init.push(e)},addSub:function(e){e&&this._subs.push(e)},end:function(e){e&&this._endfn.push(e)},endStatus:function(){return this._endStatus}};window.g=window.g||{};g.Pubsub=e})();(function(e){var t=jQuery;var i=window.location.protocol.split(":")[0];var n=g.url.g.indexOf(location.host)>=0?"http://"+location.host+"/ec/homeus/glogin_callback.html":"http://"+location.host+"/glogin_callback.html";if(i==="https"){n=g.url.g.indexOf(location.host)>=0?"//"+location.host+"/ec/homeus/glogin_callback.html":"//"+location.host+"/glogin_callback.html"}var a={loaded:false,login_url:function(){if(g.url.login.indexOf("atgsit")>0||g.url.login.indexOf("atguat")>0||g.url.login.indexOf("gomeprelive")>0){return g.url.login}else{return g.url.login.replace("http","https")}}()+"/popLogin.no?callbackHost="+n+"&orginURI="+location.href,reg_url:function(){if(g.url.reg.indexOf("atgsit")>0||g.url.reg.indexOf("atguat")>0||g.url.reg.indexOf("gomeprelive")>0){return g.url.reg}else{return g.url.reg.replace("http","https")}}()+"/register/index/pop.no?callbackHost="+n+"&orginURI="+location.href,verifyUserUrl:g.url.login+"/redirectResetPwd.no?loginType=1",loginbg:t('<div style="position:fixed;top:0;left:0; width:100%;height:100%;  background:#000;opacity:0.15;  filter:alpha(opacity=15); display:none;"></div>'),loginfrm:t('<iframe id="loginFrame" scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>'),zIndex:1e4,show:function(e){a.loginbg.show().css("zIndex",a.zIndex);a.loginfrm.remove();a.loginfrm=t('<iframe scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>');t("body").append(a.loginfrm);a.loginfrm.attr("src",a.src+"&orginURI="+location.href+(e==undefined||e==""?"":"&userName="+e)+"&_t="+parseInt(Math.random()*1e12));a.loginfrm.show().css({left:(t(window).innerWidth()-a.loginfrm.width())/2,top:(t(window).height()-a.loginfrm.height())/2,zIndex:a.zIndex+1})},verifyUser_Show:function(){a.loginbg.show().css("zIndex",a.zIndex);a.loginfrm.show().css({left:(t(window).innerWidth()-a.loginfrm.width())/2,top:(t(window).height()-a.loginfrm.height())/2,zIndex:a.zIndex+1}).attr("src",a.verifyUserUrl+"&callbackHost="+n+"&orginURI="+location.href+"&_t="+parseInt(Math.random()*1e12))},login_open:function(e){a.loginbg.show().css("zIndex",a.zIndex);a.loginfrm.remove();a.loginfrm=t('<iframe id="loginFrame" scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>');t("body").append(a.loginfrm);a.loginfrm.attr("src",a.login_url+(e==undefined||e==""?"":"&userName="+e)+"&_t="+parseInt(Math.random()*1e12));a.loginfrm.show().css({left:(t(window).innerWidth()-a.loginfrm.width())/2,top:(t(window).height()-a.loginfrm.height())/2,zIndex:a.zIndex+1});var i=window.setInterval(function(){var e=document.getElementById("loginFrame");try{if(e.src=="http://www.gome.com.cn/glogin_callback.html"||e.src=="https://www.gome.com.cn/glogin_callback.html"){var t=1;t=parseInt(t);switch(t){case 0:g.login.callback();break;case 1:g.login.callback(true);break;case 2:g.login.verifyUser();break;case 3:g.login.login_open(getParam("userName"));break;case 4:g.login.reg_open();break;case 10:g.embedLogin.callback(true);break;case 11:g.embedLogin.start_login();break;case 12:g.embedLogin.start_reg();break;default:g.login.callback();break}clearInterval(i)}}catch(n){clearInterval(i)}},1e3)},reg_open:function(){a.loginbg.show().css("zIndex",a.zIndex);a.loginfrm.remove();a.loginfrm=t('<iframe scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>');t("body").append(a.loginfrm);a.loginfrm.attr("src",a.reg_url+"&_t="+parseInt(Math.random()*1e12));a.loginfrm.show().css({left:(t(window).innerWidth()-a.loginfrm.width())/2,top:(t(window).height()-a.loginfrm.height())/2,zIndex:a.zIndex+1})},close:function(){a.loginbg.hide();a.loginfrm.hide().removeAttr("src")},callback:function(){}};login=function(e,i){if(a.loaded==false){a.loaded=true;t("body").append(a.loginbg)}if(login.running==true){return}login.running=true;t.ajax({type:"get",url:"//member"+cookieDomain+"/gome/index/loginStyle",dataType:"jsonp",jsonpName:"loginStyle"}).done(function(t){login.running=false;if(t.loginStatus>=3){loginData=t;e&&e()}else{a.fn=e;"reg"==i?a.reg_open():a.login_open()}})};login.callback=function(e){a.close();if(e){if(window.signData){signData.getUser()}login(function(){a.fn&&a.fn()})}};login.close=function(){};login.verifyUser=function(){a.close();a.verifyUser_Show()};login.login_open=function(e){a.close();a.login_open(e)};login.reg_open=function(){a.close();a.reg_open()};login.config=function(e){a=t.extend(a,e)};e.login=login})(g);(function(e){var t=jQuery;var i=window.location.protocol.split(":")[0];var n=g.url.g.indexOf(location.host)>=0?"http://"+location.host+"/ec/homeus/glogin_callback.html":"http://"+location.host+"/glogin_callback.html";if(i==="https"){n=g.url.g.indexOf(location.host)>=0?"//"+location.host+"/ec/homeus/glogin_callback.html":"//"+location.host+"/glogin_callback.html"}var a={start:function(e){t.extend(a.config,e);if(!a.config.wrap){return}a.config.frm.remove();a.config.frm=t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>');a.callback=e.callback;t(a.config.wrap).append(a.config.frm);a.config.frm.attr("src",a.config.src_login+"?callbackHost="+n+(a.config.toSite?"&toSite="+a.config.toSite:""))},start_login:function(){a.config.frm.remove();a.config.frm=t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>');t(a.config.wrap).append(a.config.frm);a.config.frm.attr("src",a.config.src_login+"?callbackHost="+n+(a.config.toSite?"&toSite="+a.config.toSite:""))},start_reg:function(){a.config.frm.remove();a.config.frm=t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>');t(a.config.wrap).append(a.config.frm);a.config.frm.attr("src",a.config.src_reg+"?callbackHost="+n+(a.config.toSite?"&toSite="+a.config.toSite:""))},config:{callback:undefined,frm:t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>'),src_login:g.url.login+"/embedLogin.no",src_reg:g.url.reg+"/register/index/embed.no",toSite:undefined},callback:function(e){if(e){a.config.frm.remove();a.config.callback&&a.config.callback()}}};e.embedLogin=a})(g);(function(e){var t=jQuery;var i=t('<div class="Dialog_bg"></div>');var n=false;function a(e,a){if(!n){n=true;t("body").append(i)}a=a||{};this.config=a;this.config.zIndex=a.zIndex||1e4;this._bg_Dialog=i;this._dom=e;this._wrap=t('<div class="Dialog"></div>');this._wrap.append(e);t("body").append(this._wrap);if(a.closeBtn!=false){this._closeBtn=t('<a class="closeBtn" href="javascript:;">╳</a>');this._wrap.append(this._closeBtn);var o=this;this._closeBtn.click(function(){o.close()})}e.show()}a.prototype={open:function(e){if(e){var i=e();if(i==false){return}}var n=this;var a=window.navigator.userAgent.indexOf("IE6")>0;this._bg_Dialog.show().css({"z-index":this.config.zIndex-1});this._wrap.show().css({top:t(window).height()/2-this._dom.height()/2+(a?t(window).scrollTop():0),left:t(window).width()/2-this._dom.width()/2+(a?t(window).scrollLeft():0),"z-index":n.config.zIndex})},close:function(e){if(e){var t=e();if(t==false){return}}this._bg_Dialog.hide();if(this.config.isDestroy){this._wrap.remove()}else{this._wrap.hide()}}};e.Dialog=a})(g);(function(e){var t=jQuery;var i;var n;var a;var o;function r(e,s){(function(){i=t('<div class="addCart-box">'+'<div class="addCart-loading">正在添加商品到购物车...</div>'+'<div class="addCart-state-success dn">'+'<span class="addCart-state-icon"></span>'+'<h5 class="addCart-state">添加成功</h5>'+'<p class="addCart-info">购物车共有<b class="totalQuantity highlight">5</b>件商品，商品总价：<b class="highlight totalAmount">¥3122.00</b></p>'+'<div class="addCart-btn">'+'<a class="addCart-gotoCart" href="'+g.url.g+'/ec/homeus/cart/cart.jsp">去购物车结算&nbsp;&gt;</a>'+'<a class="addCart-shopping">继续购物</a>'+"</div>"+"</div>"+'<dl class="addCart-bulkData">'+'<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>'+"</dl>"+"</div>");t("body").append(i);n=new g.Dialog(i);i.find(".addCart-shopping").click(function(){n.close()});a=t('<div class="addCart-state-failed">'+'<span class="addCart-state-icon"></span>'+'<p>您购物车中的相同商品购买数量<span class="highlight">不能大于<b>20</b>件</span></p>'+'<p>请您&nbsp;<a href="'+g.url.g+"/ec/homeus/myaccount/customer/customer.jsp"+'" class="link"><b>点击此链接</b></a>&nbsp;联系客服购买！</p>'+"</div>");t("body").append(a);o=new g.Dialog(a)})();s=s||{showDialog:true};t(".addCart-loading").show();t(".addCart-state-success").hide();t.ajax({type:"get",url:r.config.url_addCart,data:{method:e.method||"homeus.addNormalItemToOrder",params:JSON.stringify(t.extend(e,r.config.data))},dataType:"jsonp"}).done(function(e){s.callback&&s.callback(e)}).done(function(e){if(e.result&&e.result.cart){i.find(".addCart-loading").hide();i.find(".addCart-state-success").show();i.find(".totalQuantity").html(e.result.cart.cartSummary.totalQuantity);i.find(".totalAmount").html("¥"+e.result.cart.cartSummary.totalAmount)}}).done(function(e){if(e.result&&e.result.cart){return}var t=e;if(t.error&&t.error.data){var i=t.error.data,r=i.code,s="",l="件";var c=false;switch(r){case"gomeSKU":s="您购物车中的商品种类";l="种";break;case"bookSKU":s="您购物车中的图书种类";l="种";break;case"bbcSKU":s="您购物车中的店铺商品种类";l="种";break;case"gomeQuantity":s="您购物车中的相同商品购买数量";break;case"bookQuantity":s="您购物车中的相同图书购买数量";break;case"bbcQuantity":s="您购物车中的相同店铺商品购买数量";break;case"bbcQuantityForLimitBuy":s=t.error.data.message;break;default:s="您购物车中的相同商品购买数量";c=true}if(window.useriderror==true){a.html("该商品暂无法购买，请您联系客服解决：4008-708-708")}else if(i.code=="bbcQuantityForLimitBuy"){_htm='<div class="errorTxt">'+s+"</div>";_this.dialog({inner:"#dialogEr",cssname:"dialogBox Er",errIco:"warn",errMsg:_htm})}else if(l=="件"){a='<div class="addCart-state-failed">'+'<span class="addCart-state-icon"></span>'+"<p>"+s+'<span class="highlight">不能大于<b>'+i.quantityMax+"</b>件</span></p>"+'<p>请您&nbsp;<a href="'+g.url.g+"/ec/homeus/myaccount/customer/customer.jsp"+'" class="link"><b>点击此链接</b></a>&nbsp;联系客服购买！</p>'+"</div>"}else if(l=="种"){a='<div class="addCart-state-failed">'+'<span class="addCart-state-icon"></span>'+"<p>"+s+"已达上限("+i.quantityMax+l+")！</p>"+"</div>"}}else{a.html("添加异常！请重试！")}n.close();o.open()});n.open();setTimeout(function(){g.ajax("//bigd.gome.com.cn/gome/dataOrderAssociate",{pid:e.productId,area:g.cityCode(),size:4,imagesize:80,callbackparam:"dataOrderAssociateService",callback:"dataOrderAssociateService",site:"f"}).done(function(e){i.find(".addCart-bulkData").html("").html('<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>'+"");var t="";for(var n=0;n<e.productList.length;n++){t+='<dd class="bulkData-item">'+'<a href="'+e.productList[n].detailHref+' title="'+e.productList[n].dispName+'" class="bulkData-pic" target="_blank"><img width="80" height="80" src="'+e.productList[n].imgUrl+'" alt="'+e.productList[n].dispName+'"></a>'+'<a href="'+e.productList[n].detailHref+' title="'+e.productList[n].dispName+'" class="bulkData-name" target="_blank">'+e.productList[n].dispName+"</a>";"</dd>"}i.find(".addCart-bulkData").css({visibility:"visible"}).html("").html('<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>'+t)})})}r.config={url_addCart:g.url.g+"/ec/homeus/support/add.jsp",url_cart:"",data:{addItemCount:1,quantity:1,method:"homeus.addNormalItemToOrder"}};e.addCart=r})(g);(function(t){t.fn.gLoad=function(e,i){if(typeof e=="function"){e={e:e}}if(parseInt(i)>0){e.df=i}var n={df:20,e:null,et:"scroll",ct:window};if(e){t.extend(n,e)}var o=this;if("scroll"==n.et){t(n.ct).bind("scroll",function(){o.each(function(){if(!t.gIsKs(this,n)){t(this).trigger("appear")}});var e=t.grep(o,function(t){return!t.loaded});o=t(e)})}this.each(function(){var e=this;e.loaded=false;t(e).one("appear",function(){if(!this.loaded){if(n.e!=null&&n.e!="")n.e.apply(e);e.loaded=true}});if("scroll"!=n.et){t(e).bind(n.et,function(i){if(!e.loaded){t(e).trigger("appear")}})}});t(window).scroll();return this};t.gIsKs=function(e,i){if(i.ct===undefined||i.ct===window){var n=t(window).height()+t(window).scrollTop()}else{var n=t(i.ct).offset().top+t(i.ct).height()}return n<=t(e).offset().top-i.df}})(jQuery);;(function ( $, window, document, undefined ) {
    var pluginName = "getAjaxPrice";
    //if($(".delprice").length>=1){   //屏蔽原价
    //    $(".delprice").remove();
    //}
    $.fn[ pluginName ] = function ( options ) {
        var i = 0;
        this.gLoad({
            df: 50,
            e: function() {
                var areaCode,source="channel",priceUrl,callback;
                var $Prices = $(this).find('[data-target="p-price"]');
//        通过data属性取得所有需要异步的价格dom 返回所有productid-skuid

                var skuIdsTotal = $Prices.map(function() {
                    return $(this).attr('data-skuId');//为了兼容ie用了attr
//                    return $(this).data().skuid;
                }).get().join(',');
//        获得区域cookie
                areaCode = cityID()[2];
//                console.log(areaCode);
//        刘阳明给的结构
//        /price/promogen/{skuIds}/{areaCode}/flag/{source}/{callback}
//        实际出来的url效果为
//        //ss.gome.com.cn/item/v1/price/promogen/1118360033,pop8007735531,pop8007735540/11010000/flag/loadgdGoodsInfoCode/callback=jQuery1102013362416519204645_1452743114493?_=1452743114704
//        实际出来的数据为
//        callback=jQuery1102013362416519204645_1452743114493({"result":[{"areaPrice":"2999.00","minPrice":"2850.00","originalAreaPrice":"2850.00","originalPrice":"3599.00","price":"3599.00","skuId":"1118360033"},{"minPrice":"139.00","originalPrice":"188.00","price":"139.00","skuId":"pop8007735531"},{"minPrice":"199.00","originalPrice":"308.00","price":"199.00","skuId":"pop8007735540"}],"success":true})
                callback = "callback"+(parseInt(Math.random(802547) *100000));
                priceUrl ="//ss" + cookieDomain + "/item/v1/price/promogen/" + skuIdsTotal +"/"+ areaCode+"/flag/channel/"+callback;

                $.ajax({
                    type: "get",
                    url: priceUrl,
                    cache: false,
                    dataType: "jsonp",
                    jsonpName: callback,
                    success: function (data) {
                        if(data && data.success == true) {
                            $Prices.each(function () {
                                var $price = $(this);
                                new SinglePro($price, data.result)
                            })
                        }
                    },
                    error:function(XMLHttpRequest, textStatus, jqXHR){
//                        console.log("textStatus:"+textStatus);
//                        console.log("XMLHttpRequest.status:"+XMLHttpRequest.status);
//                        console.log("XMLHttpRequest.readyState:"+XMLHttpRequest.readyState);
//                        console.log("XMLHttpRequest.responseText:"+XMLHttpRequest.responseText);
                    }
                });

                function SinglePro(element, data) {
                    this.selector = (element);
                    this.data        = data;
                    this.skuid = element.attr('data-skuId');
// //        国美价变灰中划线效果
//                     this.s = element.attr('data-s') || false;
//                     this.zhe = element.attr('data-zhe') || false;
//                     this.jian = element.attr('data-jian') || false;
                    this.minPrice = element.find(".minPrice") || false;
                    this.oPrice = element.find(".oPrice")|| false;
                    this.zhePrice = element.find(".zhePrice")|| false;
                    this.jianPrice = element.find(".jianPrice")|| false;
                    this.wanPrice = element.find(".wanPrice")|| false;
                    this.refresh()
                }
                SinglePro.prototype.refresh = function () {
                    var that = this;
                    $.each(this.data, function (i, item) {
                        var zhe,jian,wan;
                        if(item.originalPrice - item.minPrice > 0 ){
                            this.oPrice =this.originalPrice;
                        }
                        that.skuid ==item["skuId"] && (
                            that.minPrice.html(item["minPrice"]),
                                zhe = ((item.minPrice/item.originalPrice)*10).toFixed(1),
                                jian = (item.originalPrice - item.minPrice).toFixed(2),
                                wan = (item.minPrice/10000),
                                // 判断现价是否大于或者等于原价
                                that.oPrice.length && parseFloat(jian) > 0 ? that.oPrice.html(item["oPrice"]) : that.oPrice.parent().remove(),
                                // that.oPrice.length  &&  that.oPrice.html(item["oPrice"]),
                                //that.oPrice.length  && that.oPrice.parent().remove(),   //若要屏蔽原价，将上一句注掉，这句放开，并放开开始那段屏蔽原价的代码
                            that.zhePrice.length && that.zhePrice.html(zhe),
                            that.jianPrice.length && that.jianPrice.html(jian),
                            that.wanPrice.length && that.wanPrice.html(wan)
                        );
                    })

                }

                function cityID() {
                    var _cookie = $.cookie('atgregion') || "11011400|北京北京市东城区东城区|11010000|11000000|110114001",
                        _array = _cookie.split("|");
//                    if(_array.length === 4)_array.push(_array[0]+"1");
                    return _array;
                }

            }
        });
    };
})( jQuery, window, document );(function(a) {
	if ("undefined" == typeof a.browser) {
		var c = navigator.userAgent.toLowerCase();
		a.browser = {
			version: (c.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
			safari: /webkit/.test(c),
			opera: /opera/.test(c),
			msie: /msie/.test(c) && !/opera/.test(c),
			mozilla: /mozilla/.test(c) && !/(compatible|webkit)/.test(c)
		}
	} else if (!a.browser.webkit) {
		var c = navigator.userAgent.toLowerCase();
		a.browser.webkit = /webkit/.test(c)
	}
	a.extend(a.browser, function() {
		{
			var a = navigator.userAgent;
			navigator.appVersion
		}
		return {
			mobile: !! a.match(/AppleWebKit.*Mobile.*/),
			ios: !! a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			android: a.indexOf("Android") > -1 || a.indexOf("Linux") > -1,
			iPhone: a.indexOf("iPhone") > -1,
			iPad: a.indexOf("iPad") > -1,
			webApp: -1 == a.indexOf("Safari")
		}
	}()), a.browser.isMobile = function() {
		return a.browser.mobile || a.browser.ios || a.browser.android
	}, a.browser.isIE6 = function() {
		return a.browser.msie && 6 == a.browser.version
	}, a.browser.isIE7 = function() {
		return a.browser.msie && 7 == a.browser.version
	}, a.browser.isIE8 = function() {
		return a.browser.msie && 8 == a.browser.version
	}, a.browser.isIE9 = function() {
		return a.browser.msie && 9 == a.browser.version
	}, a.browser.isIE10 = function() {
		return a.browser.msie && 10 == a.browser.version
	}, a.browser.isIE11 = function() {
		return a.browser.msie && 11 == a.browser.version
	}, a.page = function() {}, a.page.doc = function() {
		return "BackCompat" == document.compatMode ? document.body : document.documentElement
	}, a.page.clientWidth = function() {
		return a.page.doc().clientWidth
	}, a.page.clientHeight = function() {
		return a.page.doc().clientHeight
	}, a.page.docWidth = function() {
		return Math.max(a.page.doc().clientWidth, a.page.doc().scrollWidth)
	}, a.page.docHeight = function() {
		return Math.max(a.page.doc().clientHeight, a.page.doc().scrollHeight)
	}, "undefined" == typeof a.contains && (a.contains = function(a, b) {
		return a.compareDocumentPosition ? !! (16 & a.compareDocumentPosition(b)) : a !== b && a.contains(b)
	}), a.throttle = function(a, b) {
		var c, d, e, f;
		var g = 0;
		var h = function() {
				g = new Date, e = null, f = a.apply(c, d)
			};
		return function() {
			var i = new Date;
			var j = b - (i - g);
			return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
		}
	}, a.tpl = function(a, b) {
		var c = "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + a.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');";
		return fn = new Function("obj", c), b ? fn(b) : fn
	}
})(jQuery),function(a) {
    if (a.browser.isMobile()) {
        var c,
            b = {};
        function d(a) {
            return "tagName" in a ? a: a.parentNode
        }
        function e(a, b, c, d) {
            var e = Math.abs(a - b),
                f = Math.abs(c - d);
            return e >= f ? a - b > 0 ? "Left": "Right": c - d > 0 ? "Up": "Down"
        }
        var g,
            f = 750;
        function h() {
            g = null,
                b.last && (b.el.trigger("longTap"), b = {})
        }
        function i() {
            g && clearTimeout(g),
                g = null
        }
        a(document).ready(function() {
            var j,
                k;
            a(document.body).bind("touchstart",
                function(e) {
                    j = Date.now(),
                        k = j - (b.last || j),
                        b.el = a(d(e.target)),
                        c && clearTimeout(c),
                        b.x1 = e.pageX,
                        b.y1 = e.pageY,
                        k > 0 && 250 >= k && (b.isDoubleTap = !0),
                        b.last = j,
                        g = setTimeout(h, f)
                }).bind("touchmove",
                function(a) {
                    i(),
                        b.x2 = a.pageX,
                        b.y2 = a.pageY
                }).bind("touchend",
                function() {
                    i(),
                        b.isDoubleTap ? (b.el.trigger("doubleTap"), b = {}) : b.x2 && Math.abs(b.x1 - b.x2) > 30 || b.y2 && Math.abs(b.y1 - b.y2) > 30 ? (b.el.trigger("swipe") && b.el.trigger("swipe" + e(b.x1, b.x2, b.y1, b.y2)), b = {}) : "last" in b && (b.el.trigger("tap"), c = setTimeout(function() {
                                c = null,
                                    b.el.trigger("singleTap"),
                                    b = {}
                            },
                            250))
                }).bind("touchcancel",
                function() {
                    c && clearTimeout(c),
                        g && clearTimeout(g),
                        g = c = null,
                        b = {}
                })
        }),
            ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
                a.fn[b] = function(a) {
                    return this.bind(b, a)
                }
            })
    }
} ($);//   //js.gomein.net.cn/eccms/js/topics_js/181/4917531728.js
;(function ( $, window, document, undefined ) {
        var a = $;
        function c(b, c, d) {
            !b.attr("src") && c && (b.attr("src", d.blankImgUrl), b.addClass(d.placeholderClass)), b.attr("src", c), b.attr(d.source, "done"), c || b.attr("src") || b.attr("src", d.blankImgUrl), c && (b[0].onerror = function() {
                b.attr("src", d.blankImgUrl).removeClass(d.placeholderClass).addClass(d.errorClass)
            }, b[0].onload = function() {
                b.removeClass(d.placeholderClass)
            }), a.isFunction(d.onchange) && d.onchange.call(b)
        }
        function d(b, c, d) {
            "function" == typeof define && define.cmd ? seajs.use(b, function(a) {
                a.init(c), d()
            }) : (a.ajax({
                url: b,
                dataType: "script",
                cache: !0
            }), d())
        }
        function e(a, b, c) {
            "0" == a.attr("data-lazyload-fn") && (a.attr("data-lazyload-fn", "done"), c(), b.onchange && b.onchange(a))
        }


		var pluginName = "lazyload",
				defaults = {
                    type: "img",
                    source: "data-lazy-path",
                    init: "data-lazy-init",
                    delay: 100,
                    space: 100,
                    onchange: null,
                    placeholderClass: "loading-style2",
                    errorClass: "err-poster",
                    blankImgUrl: imgServer+"/grey.gif"
		};


		function Plugin ( el, options ) {
				this.el = $(el);
				this.options = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		$.extend(Plugin.prototype, {
            init: function() {
                var b = this;
                var f = this.options;
                var g = null;
                var h = null;
                var i = null;
                "img" == f.type && ("data-lazy-path" == f.source && (f.source = "data-lazy-img"), i = f.source + "-install");
                var j = "div";
                if ("img" == f.type) {
                    if (j = "IMG", g = a("img[" + f.source + "][" + f.source + "!=done]", b.el), h = g.size(), !h) return !1
                } else "fn" == f.type && (j = f.source);
                var k = function() {
                    g = "img" == f.type ? a("img[" + f.source + "][" + f.source + "!=done]", b.el) : a(j, b.el), h = g.size();
                    var k = a(document).scrollTop();
                    var l = k + a.page.clientHeight() + f.space;
                    a.each(g, function() {
                        var g = a(this);
                        var i = null;
                        if (("js" == f.type || "img" == f.type) && (i = g.attr(f.source)), i || "fn" == f.type || "img" == f.type) {
                            var j = b.getTop(b.el[0]);//b.getTop(g[0]);
//                            var j = b.getTop(g);
                            if (j > 0 && h > 0 && j > k - g.outerHeight() && l > j) {
                                var m = g.attr(f.init);
                                var v;
                                "img" == f.type ? (v = g.attr(f.source),"done" != v ? (c(g, m, f), h -= 1) : "done" == m && (h -= 1)) : "js" == f.type ? d(i, m, function() {
                                    h -= 1, g.attr(f.init, "done")
                                }) : "fn" == f.type && e(g, f, function() {
                                    h -= 1
                                })
                            }
                        }
                    }), h || ("img" == f.type && i && b.el.removeAttr(i), a(window).unbind("scroll", m), a(window).unbind("resize", m))
                };
                var l = setTimeout(k, 0);
                var m = function() {
                    l && clearTimeout(l), l = setTimeout(k, f.delay)
                };
                "1" != b.el.attr(i) && (b.el.attr(i, 1), a(window).bind("scroll", m), a(window).bind("resize", m)), "fn" == f.type && f.source.attr("data-lazyload-fn", "0")
            },
            getTop: function(a) {
                var b = a.offsetTop;
                if (null != a.parentNode) {
                    var c = a.offsetParent;
                    for (; null != c;) b += c.offsetTop, c = c.offsetParent;
                }
                return b;
//                return $(a).offset().top;
            }

		});
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						// if ( !$.data( this, "plugin_" + pluginName ) ) {
						// 		$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						// }
						new Plugin( this, options );
				});
		};

})( jQuery, window, document );