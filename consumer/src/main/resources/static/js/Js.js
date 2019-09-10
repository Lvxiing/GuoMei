;(function(window, $){
	// var hasTransition = null;
	// transition: opacity 1s ease-in; 

	// z-index level:
	// normal  dropbox  modal/dialog
	// 10      100      1000
	var isIE6 = navigator.userAgent.toLowerCase().indexOf('msie 6') > -1;
	var $win = $(window);
	var MODAL_Z_INDEX = 1000;

	var modalPool = [];
	modalPool.get = function(){
		if(modalPool.length){
			return modalPool.shift();
		} else {
			return $('<div class="gui-modal"></div>');
		}
	}
	modalPool.set = function($modal){ 
		modalPool.push($modal);
		return null;
	}

	var iframePool = [];
	iframePool.get = function(){
		if(iframePool.length){
			return iframePool.shift();
		} else {
			return $('<iframe src="about:blank"></iframe>');  
		}
	}
	iframePool.set = function($iframe){ 
		iframePool.push($iframe);
		return null;
	}

	var Modal = function(options){
		this.id = Modal.id++;
		this.options  = options || {}; 
		this._events = {};
	}; 
	Modal.id = 0;
	Modal.prototype = {
		constructor: Modal
		,_render: function(){
			var options = this.options; 
			var $modal = this.$modal;
			if(!$modal){
				$modal = this.$modal = modalPool.get(); 
			} 
			$modal.css({
				width: $win.width()
				,height: $win.height()
				,position: 'fixed'
				,left: 0
				,top: 0
				,backgroundColor: (options.backgroundColor || '#000')
				,opacity: (options.opacity || .2) 
				,display: 'block'
				,zIndex: (options.zIndex || MODAL_Z_INDEX)
			}); 
			if(options.className){
				this.$modal.removeClass().addClass(options.className);
			}  
		}
		,_fixIE6: function(){
			var $modal = this.$modal;
			var $iframe = this.$iframe;
			if(isIE6){
				$modal.css({
					position: 'absolute'
				});
				$win.on('scroll.modal_' + this.id, function(){
					$modal.css({
						top: (document.documentElement.scrollTop || document.body.scrollTop)
						,left: (document.documentElement.scrollLeft || document.body.scrollLeft)
					});
				}); 

				if(!$iframe){
					$iframe = this.$iframe = iframePool.get();
					$iframe.css({
						width: $win.width()
						,height: $win.height()
						,position: 'absolute'
						,left: 0
						,top: 0 
						,opacity: 0 
						,display: 'block'
						,zIndex: MODAL_Z_INDEX
					}); 

					$win.on('resize.modal_' + this.id, function(){
						$iframe.css({
							width: $win.width()
							,height: $win.height()
						})
					});
					$win.on('scroll.modal_' + this.id, function(){
						$iframe.css({
							top: (document.documentElement.scrollTop || document.body.scrollTop)
						});
					}); 
				} 
				$iframe.appendTo(document.body);
			}
		}
		,_bindEvents: function(){ 
			var $modal = this.$modal;
			var events = this._events;
			var that = this; 
			for(var event in events){ 
				$modal.on(event, function(){
					var callbacks = events[event];
					for(var i=0,callback; callback=callbacks[i++]; ){
						callback.apply(that, arguments);

					}
				});
			};
			$win.on('resize.modal_' + this.id, function(){
				$modal.css({
					width: $win.width()
					,height: $win.height()
				})
			});
			
		}
		,_unbindEvents:function(){
			$win.off('.modal_' + this.id);
			this.$modal && this.$modal.off();
			this.$iframe && this.$iframe.off();
		}
		,on: function(event, callback){  
			var eventArr = this._events[event];
			if(!eventArr){
				eventArr = this._events[event] = [];
			} 
			eventArr.push(callback); 
			return this;
		}
		,off: function(event){
			delete this._events[event];
			this.$modal.off.apply(this.$modal, arguments);
			return this;
		}
		,show: function(){ 
			this._render(); 
			this._fixIE6(); 
			this.$modal.appendTo(document.body);
			this._bindEvents();
			$(this).trigger('modal.show');
			return this;
		}
		,hide: function(){
			var $modal  = this.$modal;
			var $iframe = this.$iframe; 
			this._unbindEvents();
			if($modal){
				this.$modal = modalPool.set($modal.remove());
			} 
			if($iframe){
				this.$iframe = iframePool.set($iframe.remove());
			}
			$(this).trigger('modal.hide');
			return this;
		} 
	}

	$.gModal = function(options){
		return new Modal(options);
	}

	$.fn.gModal = function(options){
		var modal = this.data('__gModal');
		if(typeof(options) == 'object'){
			if(modal){
				modal.options = options; 
			}else{
				modal = new Modal(options);
				this.data('__gModal', modal);
			} 
			if(options.show === true){
				modal.show();
			} else if(options.show === false){
				modal.hide();
			}
		}else if(options === 'show' || options === true){ 
			if(!modal){
				modal = new Modal(options);
				this.data('__gModal', modal);
			}
			modal.show();
		}else if(options === 'hide' || options === false){ 
			if(modal){ 
				modal.hide();
				this.data('__gModal', null)
			};
		}else{ 
			if(!modal){
				modal = new Modal(options);
				this.data('__gModal', modal);
			}
			modal.show();
		}
		return this;
	}
})(window, jQuery);











;(function(window, $){
	// var hasTransition = null;
	// transition: opacity 1s ease-in; 

	// z-index level:
	// normal  dropbox  dialog/dialog
	// 10      100      1000
	var isIE6 = navigator.userAgent.toLowerCase().indexOf('msie 6') > -1;
	var $win = $(window);
	var DIALOG_Z_INDEX = 1000;

	var dialogPool = [];
	dialogPool.get = function(){
		if(dialogPool.length){
			return dialogPool.shift();
		} else {
			return $('<div></div>');
		}
	}

	dialogPool.set = function($dialog){
		dialogPool.push($dialog);
		return null;
	} 

	var Dialog = function(options){
		this.id = Dialog.id++;
		this.options  = options || {}; 
		this._events = {};
	}; 
	Dialog.id = 0;
	Dialog.prototype = {
		constructor: Dialog
		,_render: function(){
			var options = this.options; 
			var $dialog = this.$dialog;
			if(!$dialog){
				$dialog = this.$dialog = dialogPool.get(); 
			} 
			$dialog.css({
				position: 'fixed' 
				,display: 'block'
				,zIndex: DIALOG_Z_INDEX
			}); 
			if(options.className){
				this.$dialog.removeClass().addClass(options.className);
			}  
		}
		,_setPosition: function(){
			var $dialog = this.$dialog;
			if(!$dialog){
				return; 
			}
			if(isIE6){
				$dialog.css({ 
					left: (document.documentElement.scrollLeft || document.body.scrollLeft) + ($win.width() - $dialog.width()) / 2
					,top: (document.documentElement.scrollTop || document.body.scrollTop) + ($win.height() - $dialog.height()) / 2
				});
			}else{
				$dialog.css({ 
					left: ($win.width() - $dialog.width()) / 2
					,top: ($win.height() - $dialog.height()) / 2
				});
			}
			
		}
		,_fixIE6: function(){
			var that = this;
			var $dialog = this.$dialog; 
			if(isIE6){
				$dialog.css({
					position: 'absolute'
				});
				$win.on('scroll.modal_' + this.id, function(){
					that._setPosition();
				});  
			}
		}
		,_bindEvents: function(){ 
			var $dialog = this.$dialog;
			var events = this._events;
			var that = this; 
			for(var event in events){ 
				$dialog.on(event, function(){
					var callbacks = events[event];
					for(var i=0,callback; callback=callbacks[i++]; ){
						callback.apply(that, arguments);
					}
				});
			};
			$win.on('resize.dialog_' + this.id, function(){
				that._setPosition();
			});
		}
		,_unbindEvents:function(){
			$win.off('.dialog_' + this.id);
			this.$dialog && this.$dialog.off();  
		}
		,on: function(event, callback){  
			var eventArr = this._events[event];
			if(!eventArr){
				eventArr = this._events[event] = [];
			} 
			eventArr.push(callback); 
			return this;
		}
		,off: function(event){
			delete this._events[event];
			this.$dialog.off.apply(this.$dialog, arguments);
			return this;
		}
		,show: function(){ 
			if(this.options.modal){
				this.options.modal.show = true;
				$(this).gModal(this.options.modal);
			}
			this._render();  
			this._fixIE6(); 
			this.$dialog.appendTo(document.body).html(this.options.html);
			this._bindEvents();
			this._setPosition();
			$(this).trigger('dialog.show');
			return this;
		}
		,hide: function(){
			if(this.options.modal){
				$(this).gModal(false);
			}
			var $dialog  = this.$dialog; 
			this._unbindEvents();
			if($dialog){
				this.$dialog = dialogPool.set($dialog.remove());
			}  
			$(this).trigger('dialog.hide');
			return this;
		} 
	}

	$.gDialog = function(options){
		return new Dialog(options);
	}

	$.fn.gDialog = function(options){
		var dialog = this.data('_gdialog_');
		if(typeof(options) == 'object'){
			if(dialog){
				dialog.options = options; 
			}else{
				dialog = new Dialog(options);
				this.data('_gdialog_', dialog);
			} 
			if(options.show === true){
				dialog.show();
			} else if(options.show === false){
				dialog.hide();
			}
		}else if(options === 'show' || options === true){ 
			if(!dialog){
				dialog = new Dialog(options);
				this.data('_gdialog_', dialog);
			}
			dialog.show();
		}else if(options === 'hide' || options === false){ 
			if(dialog){ 
				dialog.hide();
				this.data('_gdialog_', null)
			};
		}else{ 
			if(!dialog){
				dialog = new Dialog(options);
				this.data('_gdialog_', dialog);
			}
			dialog.show();
		}
	}
})(window, jQuery);/* gmpro-2.0.0/cart/2.9.5 request.js Date:2019-08-20 13:49:01 */
!function(a,b){var c=700,d=!0;function e(a){var b=[].slice.call(arguments,1);return function(){var c=b.concat([].slice.call(arguments));return a.apply(this,c)}}function f(){}function g(){}function h(a,c,d,e){if(e)e._=new Date-0;else var e={_:new Date-0};return b.ajax({type:a,url:d,datatype:c,data:e})}function i(a,d,e,f){return null==e&&(e="dbk"+c++),null==f&&(f="callback"),b.ajax({url:a,dataType:"jsonp",type:"get",jsonp:f,jsonpName:e,data:d,timeout:5e3})}function j(a,b,c,d){return f("time",c),h(a,b,c,d).fail(g).always(function(){f("timeEnd",c)})}function k(a,b,c,d){return f("time",a),i(a,b,c,d).fail(g).always(function(){f("timeEnd",a)})}var l=e(j,"get","json");var m=e(j,"post","json");var n=function(a,b,c){return c=c||{},l("/"+a+"/api/"+b,c)};var o=function(a,b,c){return m("/"+a+"/api/"+b,c)};function p(a){return function(){var b=[];for(var c=0;c<arguments.length;c++)b.push(arguments[c][0]);a.apply(this,b)}}function q(a){var c=[null,null,null];var d=[];for(var e=1;e<arguments.length;e++)d.push(arguments[e]);return function(){if(null==c[0])return a.apply(null,d).then(function(a,b,d){c[0]=a,c[1]=b,c[2]=d});var e=b.Deferred();return e.resolve(c[0],c[1],c[2]),e.promise()}}function r(a,c){if(a&&b.isFunction(a)){var e;d&&(d=!1,clearTimeout(e),e=setTimeout(function(){d=!0},c||1500),a())}}a.request={parall:b.when,req:j,cachePromise:q,deferredReq:r,reqp:k,_req:h,_reqp:i,getJson:l,postJson:m,getApi:n,postApi:o,curry:e,res:p}}(this,$);
/* gmpro-2.0.0/cart/2.9.5 asyncLoadCSSJS.js Date:2019-08-20 13:49:01 */
!function(a){function b(){return document.getElementsByTagName("head")[0]}function c(a,c){var d=document.createElement("link");d.rel="stylesheet",d.href=a,b().insertBefore(d,b().firstChild),d.attachEvent?d.attachEvent("onload",function(){c(null,d)}):setTimeout(function(){e(d,c)},0);function e(a,b){var c=!1;if(/webkit/i.test(navigator.userAgent))a.sheet&&(c=!0);else if(a.sheet)try{a.sheet.cssRules&&(c=!0)}catch(d){1e3===d.code&&(c=!0)}c?setTimeout(function(){b(null,a)},1):setTimeout(function(){e(a,b)},10)}d.onLoad=function(){c(null,d)}}function d(a,c){var d=document.createElement("script");d.setAttribute("async","async");var e;var f="onload"in d;var g=f?"onload":"onreadystatechange";d[g]=function h(){return f||e||!/complete|loaded/.test(d.readyState)?void((f||e)&&(clearTimeout(e),c(null,d))):void(e=setTimeout(h))},b().insertBefore(d,b().firstChild),d.src=a,d.onerror=function(a){c(a)}}a.asyncLoadCSSJS={loadCSS:c,loadJS:d}}(this);
/* gmpro-2.0.0/cart/2.9.5 $config.js Date:2019-08-20 13:49:02 */
!function(exports){$page.cookieDomain=cookieDomain;function isOnlySite(){return"home"==$page.site?!1:!0}function supportPre(){return"home"==$page.site?"\u7ea2\u5238/\u84dd\u5238/\u5e97\u94fa\u5238":"haiwaigou"==$page.site?"\u5e97\u94fa\u5238":"\u7ea2\u5238"}function listOfitemTipVisible(){return"gomeVirtualCard"==$page.site?!1:"operator"==$page.site?!1:!0}function backCardLink(){return"jixin"==$page.site?!1:"operator"==$page.site?!1:"allowance"==$page.site?!1:"selfAllowance"==$page.site?!1:"gomeEntityCard"==$page.site?!1:"gomeVirtualCard"==$page.site?!1:"presell"==$page.site?!1:!0}function isDisabledDefaultAddress(a){return a?!0:"allowance"==$page.site?!0:"selfAllowance"==$page.site?!0:!1}function isDisabledMD(){return"home"==$page.site?!1:"allowance"==$page.site?!0:"selfAllowance"==$page.site?!0:!0}function isDisabledJH(){return"haiwaigou"==$page.site?!0:"allowance"==$page.site?!0:"selfAllowance"==$page.site?!0:"presell"==$page.site?!0:!1}function isReadOnlyConsignee(){return"allowance"==$page.site||"selfAllowance"==$page.site}function renderText(data,text){return text=(text||"").toString(),text.replace(/\{([^\}]+)\}/g,function(all,match){result=data,matchArr=match.split(".");for(var i=0,key;key=matchArr[i++];){var tmp=key.split("|");if(result=2==tmp.length?$config[tmp[1]](result[tmp[0]]):result[key]||eval("result."+key),null===result)return all}return result})}function fromatDate(a,b){"object"!=typeof a&&(a=new Date(+a));var c=a.getMonth()+1,d=a.getDate(),e=a.getHours(),f=a.getMinutes(),g=a.getSeconds();return b.replace(/yyyy/g,a.getFullYear()).replace(/yy/g,String(a.getFullYear()).substr(2,2)).replace(/MM/g,c>=10?c:"0"+c).replace(/M\*/g,c).replace(/dd/g,d>=10?d:"0"+d).replace(/d\*/g,d).replace(/hh/g,e>=10?e:"0"+e).replace(/h\*/g,e).replace(/m\*/g,f).replace(/mm/g,f>=10?f:"0"+f).replace(/ss/g,g>=10?g:"0"+g).replace(/s\*/g,g)}function formathhmm(a){return fromatDate(new Date(a),"hh:mm")}function formatLong(a){return fromatDate(new Date(a),"yyyy-MM-dd hh:mm:ss")}function renderError(a){return renderText(a,$config.errorText[a.errCode]||a.errMsg)}function renderNotice(a,b){return $config.renderText(b,$config.notice[a])}function renderlistNotice(a,b){var c=$config.renderText(b,$config.notice[a]);return"<span class='pair_tip' title="+divReplace(c)+">"+c+"</span>"}function divReplace(a){return a?a.replace(/<[\s\S]*?>|<\/[\s\S]*?>/g,""):""}function renderCartPromtionNotice(a){var b="",c="";if("JJHG"==a.type&&a.jjghs){var d=util.filter(util.prop("selected"),a.jjghs).length;a.jjhgNum=d,d&&(a.type=a.type+"_HG")}return b=a.satisfied?$config.renderText(a,$config.notice["C$"+a.type+"_SATISFIED"]):a.validKindNum?$config.renderText(a,$config.notice["C$"+a.type+"_VALID"]):$config.renderText(a,$config.notice["C$"+a.type]),a.url&&("MUL_ZE_DO"==a.type||"MUL_ZE_COUPONS"==a.type||"MJ"==a.type||"MZ"==a.type||"ZDZ"==a.type)&&(c="&nbsp;<a href="+a.url+"?"+a.proId+' target="_blank">\u53bb\u51d1\u5355&nbsp;<span class="jt">&gt;</span></a>'),b?"<span class='promtion_notice_tip' title="+divReplace(b)+">"+b+"</span>"+c:""}function renderCartNotice(a,b){var c=$config.renderText(b,$config.notice["C$"+a]);return c?c:""}function parseNums(a){return null===a?"":""===a?"":parseFloat((100*a).toPrecision(12))}function formatAmount(a){return null===a?"":""===a?"":Number(a).toFixed(2)}function formatAmountSuttle(a){return null===a?"":""===a?"":Number(a)}function formatAmountWithNoRound(a){return null===a?"":""===a?"":Number(a.toString().replace(/(\.\d{2})\d+$/,"$1")).toFixed(2)}function isBlank(a){return""==a||null==a?!0:!1}function isNullToblank(a){return""==a||null==a?"":a}function formatCoupon(a){var b=[];if(!a||!a.length||a.length<1)return"";for(var c=0;c<a.length;c++){var d=a[c];b.push(d.desc?formatAmount(d.couponUnitPrice)+"\u5143"+d.desc+"x"+d.quantity:formatAmount(d.couponUnitPrice)+"\u5143"+$config.labels[d.couponType]+"x"+d.quantity)}return"\u53ef\u8fd4"+b.join(",")}function jjhgtip(a){return a?"\u60a8\u5df2\u6362\u8d2d\u4e86\u5546\u54c1":"\u60a8\u672a\u6362\u8d2d\u5546\u54c1"}function shopTip(a){var b=[];return $config.isbrand(a.shopId)||(a.profile.zpCount&&0!=a.profile.zpCount&&b.push("\u8d60\u54c1x"+a.profile.zpCount),a.profile.couponNum&&0!=a.profile.couponNum&&b.push("\u8fd4\u4f18\u60e0\u5238x"+a.profile.couponNum)),a.profile.reduce&&0!=a.profile.reduce&&b.push("\u5df2\u8282\u7701<span class='font-cursive'>\xa5</span>"+formatAmount(a.profile.reduce)),b.join("\uff0c")}function shipTip(a){return a.profile.freight&&a.profile.freight.total?"\xa5"+formatAmount(a.profile.freight.total):"\xa50.00"}function isDisableDZQ(){return"home"==$page.site?!1:!0}function limitStr(a,b){return a&&a.length<b?a:a.substr(0,b)+"..."}function isDisableSYGMZXJF(a){return"FREEZED"==a.op.vase?!0:"EXCEPTION"==a.op.vase?!0:0==a.op.currentPoint?!0:!1}function isDisableSYGMZXMD(a){return a.gd?0==a.gd.canUseGomedos?!0:!1:!1}function isDisabledTJDD(){return"presell"==$page.site?$config.shoppingAtom.presell_tyzfdj?0==payment.isTailPhoneStatusDone($config.shoppingInstenceAtom.payment):!0:!1}function pwdPhone(a){if(null==a)return"";var b=util.take(4,util.reverse(a));return util.take(3,a)+"****"+util.reverse(b)}function pwdTelphone(a){if(null==a)return"";if(a.length<5)return"****";var b=util.take(3,util.reverse(a));var c=a.length-7;var d=a.substr(0,c);return d+"****"+util.reverse(b)}function transArray(a){if(!a)return[];for(var b=0,c=a.length;c>b;b++)a[b]&&""!=a[b]||(a.splice(b,1),c--,b--);return a}function renderCartLabel(a,b){var c=$config.labels["C$"+a];return c?c:b}function tqIsUsedScalp(){function a(a){var c="";try{c=a.documentElement.getAttribute&&a.documentElement.getAttribute("webdriver")}catch(a){}var d=[window.spawn,window.emit,window.Buffer,window.domAutomation,window.webdriver,window.phantom,window.callPhantom,window._phantom,window.ClientUtils,window.__fxdriver_unwrapped,window.fxdriver_id,a.__webdriver_script_fn,c];return util.find(function(a){return 1==a},b(d))}function b(a){for(var b=0,c=[];b<a.length;b++)c.push(a[b]?1:0);return c}return a(document)?!0:!1}function isHome(){return"home"==$page.site}function isQyg(){return"qiyegou"===$page.site}function isHwgSite(){return"haiwaigou"==$page.site}function isAllowance(){return"allowance"==$page.site}function isSelfAllowance(){return"selfAllowance"==$page.site}function isGomeVirtualCardSite(){return"gomeVirtualCard"==$page.site}function isGomeEntityCardSite(){return"gomeEntityCard"==$page.site}function isGroupOnSite(){return"groupOn"==$page.site}function isRushBuySite(){return"rushBuy"==$page.site}function isSecondHand(){return"secondHand"==$page.site}function isPresell(){return"presell"==$page.site}function isWarranty(){return"warranty"==$page.site}function isDxSite(){return"operator"==$page.site}function isJixinSite(){return"jixin"==$page.site}function istqSite(){return"groupOn"==$page.site||"rushBuy"==$page.site}function isApplePc(){return"applePc"==$page.site}function isExpendZHYE(){return isPresell()||isGomeVirtualCardSite()||isGomeEntityCardSite()||isJixinSite()}function gomeCouponType(a){return"1"==a.gomeCouponType?"\u5355\u54c1\u5238":"2"==a.gomeCouponType?"\u54c1\u724c\u5238":"3"==a.gomeCouponType?"\u54c1\u7c7b\u5238":"4"==a.gomeCouponType?"\u5168\u54c1\u7c7b\u5238":"5"==a.gomeCouponType?"guomeidianqi"==a.shopNo?"\u56fd\u7f8e\u7535\u5668":"dazhongdianqi"==a.shopNo?"\u5927\u4e2d\u7535\u5668":"":"6"==a.gomeCouponType?"\u5168\u56fd\u5238":""}function substrLength(a,b){function c(a,b){var c=a.match(/[^\x00-\xff]|\w{1,2}/g);return c.length<b?a:c.slice(0,b).join("")+"\u2026"}return c(a,b)}function doIeOftoLowerCase(a){return a&&null!=a?a.toLowerCase():""}function isSub(a){if(a.length<1)return!1;for(var b=0;b<a.length;b++)if("I_ZE_GIFTS"==a[b])return!0;return!1}function getYYAZDate(a){if(!a)return"\u6682\u7f13\u5b89\u88c5";if("\u6682\u7f13\u5b89\u88c5"==a)return a;var b=a.split(" ")[0];return b.substring(b.indexOf("-")+1)}function getCurDate(a){for(var b=0;b<a.length;b++)if(1==a[b].selected){if("\u6682\u7f13\u5b89\u88c5"==a[b].tiDate)return a[b].tiDate;var c=a[b].tiDate.split(" ")[0];return c.substring(c.indexOf("-")+1)+"("+a[b].week+")"}}function getFreightType(a){return"NBF"==a?"\u975e\u767e\u8d27\u7c7b":"BF"==a?"\u767e\u8d27\u7c7b":"NFF"==a?"\u8fd0\u8d39":"FF"==a?"\u514d\u8fd0\u8d39":""}function splitUrl(a,b){a&&b||console.log("\u7f8e\u5e97\u6570\u636e\u9519\u8bef\uff01");var c=a.indexOf("item")+4,d=a.indexOf(".com.cn/")+8;return"http://meidian"+a.substring(c,d)+"shop-"+b+".html"}var VBLE={youhuiquan:function(){return isQyg()?!1:isGomeVirtualCardSite()?!1:isGomeEntityCardSite()?!1:isJixinSite()?!1:isPresell()?!1:!0},shiyongMD:function(){return isQyg()?!1:isJixinSite()?!1:isDxSite()?!1:isHwgSite()?!1:isPresell()?!1:isAllowance()?!1:isSecondHand()?!1:isWarranty()?!1:isGomeEntityCardSite()?!1:isGomeVirtualCardSite()?!1:!0},shiyongzhanghuyue:function(){return isHwgSite()?!1:!0},shiyongtuijianhao:function(){return isQyg()?!1:isGomeEntityCardSite()?!1:isGomeVirtualCardSite()?!1:isJixinSite()?!1:isDxSite()?!1:isPresell()?!1:isWarranty()?!1:isHwgSite()?!1:isAllowance()?!1:isSelfAllowance()?!1:isSecondHand()?!1:isGroupOnSite()?!1:isRushBuySite()?!1:!0},songhuorenxinxi:function(){return isGomeVirtualCardSite()?!1:!0},shiyongguomeiE:function(){return isQyg()?!0:isHome()?!0:isApplePc()?!0:isDxSite()?!1:isJixinSite()?!1:!1},beizhu:function(){return isGomeEntityCardSite()?!1:!0},youhuiquan2:function(){return isGomeVirtualCardSite()?!1:isGomeEntityCardSite()?!1:isPresell()?!1:!0},mendianjifen:function(){return isHome()?!0:isGroupOnSite()?!0:isRushBuySite()?!0:!1},symeikouling:function(){return isHome()?!0:!1}};var yytCookieDomain=null;yytCookieDomain=".atguat.com.cn"==$page.cookieDomain?"https://gcoin.atguat.com.cn:10104":"https://gcoin"+$page.cookieDomain;var URL={cart:"/",shopping:"/shopping",orderSuccess:"/order-success",authorization:"/haiwaigou/read/authorization",moblieActive:"//myhome"+$page.cookieDomain+"/member/accountSecurity?atc=atc",discountUseRule:"//help.gome.com.cn/article/279-0-0.html",electroniccouponsRule:"//help.gome.com.cn/question/23.html",integralRule:"//help.gome.com.cn/article/281-0-0.html",accountbalanceRule:"//help.gome.com.cn/article/239-0-0.html",homeinstallation:"//help.gome.com.cn/question/25.html",invoiceRule:"//help.gome.com.cn/article/238-0-0.html",paymentpassword:yytCookieDomain+"/indenticalPassword/rebinding.dhtml",dispatchQuery:"//help.gome.com.cn/question/9.html",mineGome:"//myhome.gome.com.cn/member/addressPage",imgcode:"//imgcode"+$page.cookieDomain+"/getimage.no?type=gome_cart",groupOnImgcode:"//imgcode"+$page.cookieDomain+"/getimage.no?type=cart_tq_commit",imgCodeMTK:"//imgcode"+$page.cookieDomain+"/getimage.no?type=gome_profile_center",forgetPassword:yytCookieDomain+"/paypassword/forgetPasswordPage.dhtml",setPassword:yytCookieDomain+"/indenticalPassword/rebinding.dhtml"};var _giftTypes={I_ZE_GIFTS:"{label}",I_ZE_COUPONS:"{label}",I_ZE_DO:"{label}",MUL_ZE_GIFTS:"{label}",MUL_ZE_COUPONS:"{label}",MUL_ZE_DO:"{label}",I_ZE_GIFTS_SATISFIED:"{label}",I_ZE_COUPONS_SATISFIED:"{label}",I_ZE_DO_SATISFIED:"{label}",MUL_ZE_GIFTS_SATISFIED:"{label}",MUL_ZE_COUPONS_SATISFIED:"{label}",MUL_ZE_DO_SATISFIED:"{label}"};var notices={addressConfirm:"\u60a8\u7684\u6536\u8d27\u4eba\u4fe1\u606f\u5df2\u7ecf\u8d85\u8fc720\u6761\uff0c\u6211\u4eec\u5c06\u66ff\u6362\u60a8\u6700\u65e9\u7684\u4e00\u6761\u6536\u8d27\u4fe1\u606f\uff01",addressConfirmByStore:"\u60a8\u7684\u81ea\u63d0\u5730\u5740\u5df2\u7ecf\u8d85\u8fc75\u6761\uff0c\u6211\u4eec\u5c06\u66ff\u6362\u60a8\u6700\u65e9\u7684\u4e00\u6761\u6536\u8d27\u4fe1\u606f\uff01",DPG:"\u642d\u914d\u8d2d\u4f18\u60e0\u7ec4\u5408",MZ:'\u5df2\u8d2d\u6ee1{preC}\u4ef6\uff0c<em class="fontRed">\u5df2\u51cf{postC|formatAmount}\u5143</em>',MJ:'\u5df2\u8d2d\u6ee1{preC|formatAmount}\u5143\uff0c<em class="fontRed">\u5df2\u51cf{postC|formatAmount}\u5143</em>',MF:'\u5df2\u8d2d\u6ee1{preC|formatAmount}\u5143\uff0c<em class="fontRed">\u4e0b\u5355{coupons|formatCoupon}</em>',GOME_MAN_ZHENG:"\u5df2\u8d2d\u6ee1{preC|formatAmount}\u5143\uff0c\u60a8\u5df2\u7ecf\u9886\u53d6\u4e86\u8d60\u54c1",JJHG:'<em class="fontRed">{subs|jjhgtip}</em>',TZ:'<span class="fontRed mr10">&yen;{tzSubAmount|formatAmount}</span>(\u5171{items[0].quantity}\u5957)',ZDZ:'\u5df2\u8d2d\u6ee1{preC}\u4ef6\uff0c<em class="fontRed">\u5df2\u51cf{postC|formatAmount}\u5143</em>',MUL_ZE_DO:"{label}",MUL_ZE_COUPONS:"{label}",I_ZE_GIFTS:"{label}",MUL_ZE_GIFTS:"{label}",I_ZE_COUPONS:"{label}",I_ZE_DO:"{label}",YHQ:"\uff08"+supportPre()+'/\u56fd\u7f8e\u7535\u5668\u95e8\u5e97\u79ef\u5206\uff09<em class="squaer pr">{availableCouponNum}<i class="pabs c-i triangle_icon2">',C$MJ:"\u6d3b\u52a8\u5546\u54c1\u6ee1{preC|formatAmount}\u5143\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u51cf",C$MJ_VALID:"\u8d2d\u4e70{preC|formatAmount}\u5143\u4e0d\u540c\u79cd\u7c7b\u5546\u54c1\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u51cf\u4fc3\u9500\u6d3b\u52a8",C$MJ_SATISFIED:'\u6d3b\u52a8\u5546\u54c1\u5df2\u6ee1{preC|formatAmount}\u5143\uff08<span style="color:#e6060e;">\u5df2\u51cf{postC|formatAmount}</span>\uff09',C$MF:"\u6d3b\u52a8\u5546\u54c1\u6ee1{preC|formatAmount}\u5143\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u8fd4",C$MF_SATISFIED:'\u6d3b\u52a8\u5546\u54c1\u5df2\u6ee1{preC|formatAmount}\u5143\uff08<span style="color:#e6060e;">{coupons|formatCoupon}</span>\uff09',C$MZ:"\u6d3b\u52a8\u5546\u54c1\u6ee1{preC}\u4ef6\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u6298",C$MZ_VALID:"\u8d2d\u4e70{preC}\u4ef6\u4e0d\u540c\u79cd\u7c7b\u5546\u54c1\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u6298\u6d3b\u52a8",C$MZ_SATISFIED:'\u6d3b\u52a8\u5546\u54c1\u5df2\u6ee1{preC}\u4ef6\uff08<span style="color:#e6060e;">\u5df2\u51cf{postC|formatAmount}\u5143</span>\uff09',C$ZDZ:"\u6d3b\u52a8\u5546\u54c1\u6ee1{preC}\u4ef6\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u6298",C$ZDZ_VALID:"\u8d2d\u4e70{preC}\u4ef6\u4e0d\u540c\u79cd\u7c7b\u5546\u54c1\uff0c\u5373\u53ef\u4eab\u53d7\u6ee1\u6298\u6d3b\u52a8",C$ZDZ_SATISFIED:'\u6d3b\u52a8\u5546\u54c1\u5df2\u6ee1{preC}\u4ef6\uff08<span style="color:#e6060e;">\u5df2\u51cf{postC|formatAmount}\u5143</span>\uff09',C$DPG:"\u642d\u914d\u8d2d\u4f18\u60e0\u7ec4\u5408",C$DPG_SATISFIED:"\u642d\u914d\u8d2d\u4f18\u60e0\u7ec4\u5408",C$JJHG:"{label}",C$JJHG_SATISFIED:'{label}\uff08<span style="color:#e6060e;">\u53ef\u52a0\u4ef7\u6362\u8d2d\u5546\u54c1{maxNum}\u4ef6</span>\uff09',C$POP_MZE:"{label}",C$POP_MZE_SATISFIED:"{label}",C$POP_MZE:"{label}",C$POP_MJ:"{label}",C$POP_MF:"{label}",C$POP_MZH:"{label}",C$POP_GWQ:"{label}",C$KDP_MJ:"{label}",C$KDP_MM:"{label}",C$POP_I_MZH:"{label}",C$POP_MZE_SATISFIED:"{label}",C$POP_MJ_SATISFIED:"{label}",C$POP_MF_SATISFIED:"{label}",C$POP_MZH_SATISFIED:"{label}",C$POP_GWQ_SATISFIED:"{label}",C$KDP_MJ_SATISFIED:"{label}",C$KDP_MM_SATISFIED:"{label}",C$POP_I_MZH_SATISFIED:"{label}",GOME_SHDZ_UPGRADE_TIP:"\u60a8\u4fdd\u5b58\u7684\u6536\u8d27\u5730\u5740\u5df2\u5931\u6548\uff0c\u8bf7\u91cd\u65b0\u586b\u5199\uff0c\u6216\u81f3&nbsp;<a href='"+URL.mineGome+"' target='_blank'>\u6211\u7684\u56fd\u7f8e&gt;</a>&nbsp;\u5347\u7ea7\u3002"};!function(a,b){for(attr in _giftTypes)a["C$"+attr]=b[attr]}(notices,_giftTypes);function isShowGiftSelectPop(a){var b=["I_ZE_GIFTS","MUL_ZE_GIFTS"];if(!a)return!1;for(var c=0;c<b.length;c++)if(a===b[c])return!0;return!1}var _couponType={RED:"\u7ea2\u5238",BLUE:"\u84dd\u5238",GOME:"\u7f8e\u5238",SHOP:"\u79ef\u5206",POINT:"\u8d2d\u7269\u5238",SHI_WU:"\u5b9e\u7269",DO:"\u8fd4\u8c46"};var $config=exports.$config={isGift:function(a){return a&&a.promotionHeads&&a.promotionHeads[0]&&"DPG"!=a.promotionHeads[0][0].type&&"JJHG"!=a.promotionHeads[0][0].type?!0:!1},zIndex:{general:10,mask:100,dialog:1e3},URL:URL,notice:notices,labelsCouponType:_couponType,isQygSite:function(){return"qiyegou"===$page.site},isHomeSite:function(){return"home"===$page.site},labels:{cash:"\u73b0\u91d1",pos:"pos\u5237\u5361",counter:"\u67dc\u53f0",enterpriseBank:"\u4f01\u4e1a\u94f6\u884c",I_ZE_COUPONS:"\u6ee1\u8fd4",I_ZE_DO:"\u6ee1\u8fd4",MUL_ZE_COUPONS:"\u6ee1\u8fd4",MUL_ZE_DO:"\u6ee1\u8fd4",I_ZE_GIFTS:"\u6ee1\u8d60",MUL_ZE_GIFTS:"\u6ee1\u8d60",MF:"\u6ee1\u8fd4",MZ:"\u6ee1\u6298",ZDZ:"\u6ee1\u6298",MJ:"\u6ee1\u51cf",DPG:"\u642d\u914d\u8d2d",JJHG:"\u52a0\u4ef7\u8d2d",TZ:"\u5957\u88c5\u4ef7",SOME_UP:"\u4e0e\u4e0a\u8ff0\u5546\u54c1\u4ed8\u6b3e\u65b9\u5f0f\u4e00\u81f4",ZKP:"\u6298\u6263\u54c1",ZP:"\u8d60\u54c1",HGP:"\u6362\u8d2d\u54c1",WEEKDAY:"\u5de5\u4f5c\u65e5\u9001",ALL:"\u5de5\u4f5c\u65e5\u3001\u53cc\u4f11\u65e5\u4e0e\u5047\u65e5\u9001",WEEKEND:"\u53cc\u4f11\u65e5\u3001\u5047\u65e5\u9001",REDCOUPON:"\u7ea2\u5238",BLUECOUPON:"\u84dd\u5238",SHOPCOUPON:"\u5e97\u94fa\u5238",POINT:"\u79ef\u5206",PLATFORMCOUPON:"\u5e97\u94fa\u5e73\u53f0\u5238",SHI_WU:"\u5b9e\u7269",ON_THE_ROAD:"",NO_GOODS:'<span class="fontRed">\u65e0\u8d27</span>',INVENTORY_TENSION:'<span class="fontRed">\u5e93\u5b58\u7d27\u5f20</span>',OFF:'<span class="fontRed">\u5df2\u4e0b\u67b6</span>',IN_STOCK:"\u6709\u8d27",DELIVERY_NOT_SUPPORTED:'<span class="fontRed">\u8be5\u533a\u57df\u6682\u4e0d\u652f\u6301\u914d\u9001</span>',C$MJ:"\u6ee1\u51cf",C$ZDZ:"\u6ee1\u6298",C$MZ:"\u6ee1\u6298",C$MF:"\u6ee1\u8fd4",C$JJHG:"\u52a0\u4ef7\u6362\u8d2d",C$TZ:"\u5957\u88c5",C$POP_MZE:"\u6ee1\u8d60",C$POP_MJ:"\u6ee1\u51cf",C$POP_MF:"\u6ee1\u8fd4",C$POP_MZH:"\u591a\u4e70\u4f18\u60e0",C$POP_GWQ:"\u8d2d\u7269\u5238",C$KDP_MJ:"\u8de8\u5e97\u94fa\u6ee1\u51cf",C$KDP_MM:"\u8de8\u5e97\u94fa\u6ee1\u514d",C$POP_I_MZH:"\u5355\u54c1\u6ee1\u6298",C$DPG:"\u642d\u914d\u8d2d",C$NO:"\u4fc3\u9500",C$I_ZE_GIFTS:"\u6ee1\u8d60",C$I_ZE_COUPONS:"\u6ee1\u8fd4",C$I_ZE_DO:"\u6ee1\u8fd4",C$MUL_ZE_GIFTS:"\u6ee1\u8d60",C$MUL_ZE_COUPONS:"\u6ee1\u8fd4",C$MUL_ZE_DO:"\u6ee1\u8fd4",assert_FEE_class:"coupon-red",assert_FEE_label:"\u8fd0\u8d39",assert_FEE_border:"coupon-border-red",assert_RED_class:"coupon-red",assert_RED_label:"\u7ea2",assert_RED_border:"coupon-border-red",assert_BLUE_class:"coupon-red",assert_BLUE_label:"\u84dd",assert_BLUE_border:"coupon-border-red",assert_GOU_WU_class:"coupon-red",assert_GOU_WU_label:"\u8d2d\u7269",assert_GOU_WU_border:"coupon-border-red",assert_SHOP_class:"coupon-red",assert_SHOP_label:"\u5e97\u94fa",assert_SHOP_border:"coupon-border-red",assert_PRODUCT_class:"coupon-red",assert_PRODUCT_label:"\u5e97\u94fa",assert_PRODUCT_border:"coupon-border-red",assert_GOME_class:"coupon-red",assert_GOME_label:"\u7f8e",assert_GOME_border:"coupon-border-red",assert_MARKET_class:"coupon-red",assert_MARKET_label:"\u8425\u9500",assert_MARKET_border:"coupon-border-red",COUPON_TYPE_FEE:"FEE",COUPON_TYPE_RED:"RED",COUPON_TYPE_GOU:"GOU_WU",COUPON_TYPE_BLUE:"BLUE",COUPON_TYPE_SHOP:"SHOP",COUPON_TYPE_PRODUCT:"PRODUCT",COUPON_TYPE_OFFLINE:"GOME",COUPON_TYPE_MARKET:"MARKET",COUPON_NO_DESC:"\u6682\u65e0\u63cf\u8ff0"},isListValue:function(a,b){return util.find(function(a){return a==b},a)},isGiftType:isShowGiftSelectPop,enoCart:function(a){if(a&&a.budgetValue){if("GOME_S_S_D"==a.type)return'<div style="position:relative;width:300px"><div click-document-hide class="eno-cart-tip" >\u7f8e\u8c46\u4e0d\u8db3\uff0c\u4ec5\u5269'+a.postC+"\u7f8e\u8c46\u53ef\u8d60\u9001</div></div>";if("GOME_S_S_G"==a.type)return'<div style="position:relative;width:300px"><div click-document-hide class="eno-cart-tip">\u8d60\u54c1\u4e0d\u8db3\uff0c\u4ec5\u5269'+a.postC+"\u4ef6\u8d60\u54c1\u53ef\u8d60\u9001</div></div>"}return""},formatAmountSuttle:formatAmountSuttle,enoNum:function(a,b){return'<div style="position:relative;width:300px"><div click-document-hide class="eno-num-tip" >\u60a8\u6700\u591a\u80fd\u8d2d\u4e70'+a+(0==b?"\u4ef6":"\u5957")+"</div></div>"},tuanNum:function(a){if($config.cartAtom.limitTuanIsShow||($config.cartAtom.limitTuanIsShow={}),$config.cartAtom.limitTuanIsShow[a.itemId]||($config.cartAtom.limitTuanIsShow[a.itemId]={}),a&&a.itemId&&a.itemPromotionInfo&&a.itemPromotionInfo.limitNum&&($config.cartAtom.limitTuanIsShow[a.itemId].num=a.itemPromotionInfo.limitNum,$config.cartAtom.limitTuanIsShow[a.itemId].type=a.itemPromotionInfo.promotionType),!$config.cartAtom.limitTuanIsShow||a.itemId!=$config.cartAtom.limitTuanIsShow.currentCid)return"";var b=$config.cartAtom.limitTuanIsShow[a.itemId].num;var c="TuanPrice"===$config.cartAtom.limitTuanIsShow[a.itemId].type?"\u56e2":"\u62a2";if(!b)return"";if(a.quantity-1==b){var d="limitTuanIsShow-"+a.itemId;return"<div class="+d+' style="position:relative;width:320px"><div click-document-hide class="eno-num-tip" >'+c+"\u8d2d\u5546\u54c1\u9650\u8d2d"+b+"\u4ef6,\u8d85\u51fa\u540e\u5c06\u5168\u90e8\u6309\u56fd\u7f8e\u4ef7\u8ba1\u7b97</div></div>"}},isGomeShop:function(a){var b=["GOME","guomeidianqi","dazhongdianqi","beifangdianqi","yongledianqi","heitianedianqi","tengdadianqi","fengxingdianqi","sanxingdianqi"];return $.inArray(a,b)>-1?!0:!1},isbrand:function(a){var b=["guomeidianqi","dazhongdianqi","beifangdianqi","yongledianqi","heitianedianqi","tengdadianqi","fengxingdianqi","sanxingdianqi"];return $.inArray(a,b)>-1?!0:!1},isGomeShopExpressName:function(a){var c=a.code,d={"Gome Express":"\u56fd\u7f8e\u5feb\u9012","Gome Picking Up":"\u95e8\u5e97\u81ea\u63d0","Store Picking Up":"\u95e8\u5e97\u81ea\u63d0",EMS:"EMS\u5feb\u9012","Express Picking Up":"\u914d\u9001\u81ea\u63d0","Store Express":"\u666e\u901a\u5feb\u9012",Express:"\u666e\u901a\u5feb\u9012"};return d[c]||"\u5176\u4ed6"},isShowDataByShoppingList:function(a){var b=a.code;return"Store Picking Up"==b||"Express Picking Up"==b?!1:!0},showTilteByShoppingList:function(a){var c=a.code,d={mengDian:"\u4e0b\u5355\u53ef\u7acb\u5373\u81ea\u63d0\uff089:00-20:00\uff09",peiSong:"\u6536\u5230\u56fd\u7f8e\u5728\u7ebf\u53d1\u9001\u77ed\u4fe1\u540e7\u4e2a\u81ea\u7136\u65e5\u5185\u5230\u95e8\u5e97\u63d0\u53d6\u3002"},e={"Store Picking Up":d.mengDian,"Express Picking Up":d.peiSong};return 2==a.selfPickupType&&a.businessHours&&(e["Store Picking Up"]="\u4e0b\u5355\u53ef\u7acb\u5373\u81ea\u63d0("+a.businessHours+")"),"\u81ea\u63d0\u65f6\u95f4\uff1a"+e[c]||"\u5176\u4ed6"},istqSite:istqSite,tqIsUsedScalp:tqIsUsedScalp,renderNotice:renderNotice,renderlistNotice:renderlistNotice,renderCartNotice:renderCartNotice,renderCartPromtionNotice:renderCartPromtionNotice,isDxSite:isDxSite,isJixinSite:isJixinSite,isHwgSite:isHwgSite,renderText:renderText,renderError:renderError,formatLong:formatLong,fromatDate:fromatDate,formathhmm:formathhmm,parseNums:parseNums,formatAmount:formatAmount,isBlank:isBlank,isNullToblank:isNullToblank,formatAmountWithNoRound:formatAmountWithNoRound,formatCoupon:formatCoupon,defaultErrorText:"\u51fa\u9519\u4e86",isDisableDZQ:isDisableDZQ,isDisableSYGMZXJF:isDisableSYGMZXJF,isOnlySite:isOnlySite,backCardLink:backCardLink,isDisableSYGMZXMD:isDisableSYGMZXMD,listOfitemTipVisible:listOfitemTipVisible,jjhgtip:jjhgtip,isDisabledDefaultAddress:isDisabledDefaultAddress,isReadOnlyConsignee:isReadOnlyConsignee,shopTip:shopTip,shipTip:shipTip,isDisabledMD:isDisabledMD,isDisabledJH:isDisabledJH,limitStr:limitStr,pwdPhone:pwdPhone,pwdTelphone:pwdTelphone,isGomeVirtualCardSite:isGomeVirtualCardSite,isDisabledTJDD:isDisabledTJDD,renderCartLabel:renderCartLabel,transArray:transArray,gomeCouponType:gomeCouponType,substrLength:substrLength,doIeOftoLowerCase:doIeOftoLowerCase,isSub:isSub,getYYAZDate:getYYAZDate,getCurDate:getCurDate,splitUrl:splitUrl,VBLE:VBLE,getFreightType:getFreightType,errorText:{"003018000":'\u4e3a\u4fdd\u969c\u60a8\u7684\u8d26\u6237\u8d44\u91d1\u5b89\u5168\uff0c\u8bf7\u5148 [<a target="_blank" href="'+URL.moblieActive+'">\u9a8c\u8bc1\u624b\u673a\u53f7</a>]',f1:'<p style="color:#e3101e;">\u4e3a\u4fdd\u969c\u60a8\u7684\u8d26\u6237\u8d44\u91d1\u5b89\u5168\uff0c\u56fd\u7f8e\u5e01\u5bc6\u7801\u5c06\u4f5c\u4e3a\u652f\u4ed8\u5bc6\u7801\u4f7f\u7528\uff0c\u8bf7&nbsp;&nbsp;&nbsp;<a target="_blank" href="'+URL.paymentpassword+'">\u8f93\u5165\u56fd\u7f8e\u5e01\u5bc6\u7801<span class="jt" style="padding-left:4px;">&gt;</span></a></p>',f2:'<p style="color:#e3101e;">\u4e3a\u4fdd\u969c\u8d44\u91d1\u5b89\u5168\uff0c\u5347\u7ea7\u652f\u4ed8\u5bc6\u7801\u540e\u53ef\u4f7f\u7528\u6b64\u4f18\u60e0\uff0c\u8bf7\u5148&nbsp;&nbsp;&nbsp;<a target="_blank" href="'+URL.paymentpassword+'">\u5347\u7ea7\u652f\u4ed8\u5bc6\u7801<span class="jt" style="padding-left:4px;">&gt;</span></a></p>',f3:'<p style="color:#e3101e;">\u4e3a\u4fdd\u969c\u8d44\u91d1\u5b89\u5168\uff0c\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801\u540e\u53ef\u4f7f\u7528\u6b64\u4f18\u60e0\uff0c\u8bf7\u5148&nbsp;&nbsp;&nbsp;<a target="_blank" href="'+URL.setPassword+'">\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801<span class="jt" style="padding-left:4px;">&gt;</span></a></p>',f4:'<p style="color:#e3101e;">\u4e3a\u4fdd\u969c\u8d44\u91d1\u5b89\u5168\uff0c\u5347\u7ea7\u652f\u4ed8\u5bc6\u7801\u540e\u53ef\u4f7f\u7528\u7ea2\u52b5\uff0c\u8bf7\u5148&nbsp;&nbsp;&nbsp;<a target="_blank" href="'+URL.paymentpassword+'">\u5347\u7ea7\u652f\u4ed8\u5bc6\u7801<span class="jt" style="padding-left:4px;">&gt;</span></a></p>',f5:'<p style="color:#e3101e;">\u4e3a\u4fdd\u969c\u8d44\u91d1\u5b89\u5168\uff0c\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801\u540e\u53ef\u4f7f\u7528\u7ea2\u52b5\uff0c\u8bf7\u5148&nbsp;&nbsp;&nbsp;<a target="_blank" href="'+URL.setPassword+'">\u8bbe\u7f6e\u652f\u4ed8\u5bc6\u7801<span class="jt" style="padding-left:4px;">&gt;</span></a></p>',f6:'<p style="color:#e3101e;">\u5f00\u5c0f\u5dee\u4e86\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d\u89e3\u51b3</p>'},tqAtom:{tqst:new Date-0,tqet:new Date-0,tqneedYzm:"N",tqyzm:"",tqyzm_tip:"",tqyzm_imgCode:new Date-1},shoppingAtom:{mtksfyz:{mobile:null,code:null},userAsset:"N",yhj:"Y",yhj_jh:"N",ecard_jh:"N",hq_more:"Y",syjf:"N",mdjf:"N",sydzq:"N",sygmek:isQyg()?"Y":"N",syzhye:isExpendZHYE()?"Y":"N",sytjh:"N",symkl:"N",yhj_bm:"",yhj_jhm:"",yhj_tip:"",yhj_yzm:"",yhj_img:new Date-1,yhj_com:"N",mdhyjf:null,dzqma:"",dzqma_tip:"",rygh:"",rygh_tip:"",mkl_code:"",mkl_tip:"",yzm:"",yzm_pw:"",yzm_img:new Date-0,yzm_tip:"",mdhyjf_tip:"",referrerInfo:null,renderRefPFlag:!1,presell_tyzfdj:!1,deliveryPreSell:null,ecard_1:"",ecard_2:"",ecard_3:"",ecard_4:"",ecard_yzm:"",ecard_yzm_tip:"",yhq_jhm:""},shoppingAddressAtom:{more:"Y",ztmore:"Y",scrollY:0,novalidAddr:!1,offlineToOnline:!1,offlineStatus:0,errorStatus:-1,markedStatus:!1},isSupportSeven:!1,isSupportSevenData:[],shoppingInstenceAtom:{address:null,payment:null,invoice:null,listOfItem:null,commitOrder:null,preferential:null},warrantyAtom:[{displayName:"\u5ef6\u957f\u4fdd\u4fee",lable:"\u3010\u5ef6\u4fdd\u3011",icon:"warranty"},{displayName:"\u5c4f\u788e\u4fdd",lable:"\u3010\u5c4f\u788e\u4fdd\u3011",icon:"warrantysb"},{displayName:"\u610f\u5916\u4fdd",lable:"\u3010\u610f\u5916\u4fdd\u3011",icon:"warrantyac"},{displayName:"\u7ec4\u5408\u4fdd",lable:"\u3010\u7ec4\u5408\u4fdd\u3011",icon:"warrantyac"},{displayName:"\u4ee5\u6362\u4ee3\u4fee",lable:"\u3010\u4ee5\u6362\u4ee3\u4fee\u3011",icon:"warrantyac"}],cartAtom:{limitTip:null,deleteData:[]},returnTaoZhuangMax:function(a){if(!a||!a.commerceItemsGroup)return 1;var b=a.commerceItemsGroup;var c=1;for(var d=0,e=b.length;e>d;d++){var f=b[d];f&&f.baseQuantity&&(c<f.baseQuantity?c=f.baseQuantity:c)}return c},isNotI7n:function(a){var b="i7N";if(!a||!a.length||a.length<1)return!1;for(var c=0;c<a.length;c++)if(a[0]===b)return!0;return!1},isI7n:function(a){var b="i7Y";if(!a||!a.length||a.length<1)return!1;for(var c=0;c<a.length;c++)if(a[0]===b)return!0;return!1},isProductSelected:function(a,b){return"secondHand"!=b&&"OFF"==a.inventoryState||a.commerceItemStatus&&"presell"===a.commerceItemStatus[0]||"NO_PERMISSION_BUY"==a.inventoryState||"QGQWYY"==a.reserveStatus||"QGWYY"==a.reserveStatus||"QGCF"==a.reserveStatus},freightThreshold:99,countDownTitle:function(a){return a&&a.itemPromotionInfo&&a.itemPromotionInfo.promotionType?"RushbuyPrice"===a.itemPromotionInfo.promotionType?"\u62a2":"TuanPrice"===a.itemPromotionInfo.promotionType?"\u56e2":"\u62a2":"\u62a2"},isShowTuanTitle:function(a){return isHome()&&a.itemPromotionInfo&&a.itemPromotionInfo.limitNum&&a._isCount?!0:!1},jsSelectTime:"\u6682\u7f13\u5b89\u88c5",yyqgStatusType:function(a){return"OFF"==a?"\u5df2\u4e0b\u67b6":"YY"==a?"\u9884\u7ea6\u4e2d":"YS"==a?"\u9884\u552e\u4e2d":"QGQ"==a?"\u9884\u7ea6\u5f85\u5f00\u62a2":"QGWYY"==a?"\u9884\u7ea6\u62a2\u8d2d\u4e2d":"QGWDL"==a?"\u9884\u7ea6\u62a2\u8d2d\u4e2d":"QGCF"==a?"\u9884\u7ea6\u62a2\u8d2d\u4e2d":"QGXG"==a?"\u9884\u7ea6\u62a2\u8d2d\u4e2d":"QGOFFLINE"==a?"\u62a2\u8d2d\u4e2d":"NO_GOODS"==a?"\u65e0\u8d27":"OTHER"==a?"\u5546\u54c1\u6709\u8bef":"RISK"==a?"\u9650\u8d2d":""},yyqgjjhgType:function(a){return"YY"==a?"\u9884\u7ea6\u4e2d":"YYWYY"==a?"\u9884\u7ea6\u4e2d":"QGQ"==a?"\u9884\u7ea6\u5f85\u5f00\u62a2":"QGQWYY"==a?"\u9884\u7ea6\u5f85\u5f00\u62a2":"QG"==a?"\u62a2\u8d2d\u4e2d":"QGWYY"==a?"\u9884\u7ea6\u62a2\u8d2d\u4e2d":"QGCF"==a?"\u9884\u7ea6\u62a2\u8d2d\u4e2d":"OFF"==a?"\u5df2\u4e0b\u67b6":""},yyqgjjhgTypeOff:function(a){return"YY"==a||"YYWYY"==a||"QGQ"==a||"QGQWYY"==a||"QGWYY"==a||"QGCF"==a||"OFF"==a?!1:!0},isNotYyqg:function(a){return"YY"==a||"YYWYY"==a||"QG"==a||"QGWYY"==a||"QGQWYY"==a||"QGQ"==a||"QGCF"==a?!1:!0},getDays:function(a){return Math.ceil((a-(new Date).getTime())/864e5)}}}(this);
/* gmpro-2.0.0/cart/2.9.5 util.js Date:2019-08-20 13:49:01 */
function $track(a,b){function c(){var a=[];var b=document.location.search.substr(1).split("&");for(i=0;i<b.length;i++){var c=b[i].split("=");a[c[0]]=c[1]}return a.track?!0:!1}c()&&console.warn("==========>>>>>>>>>>>>>>>>>>",a,b);try{GomeSa.track(a,b)}catch(d){console.warn("\u57cb\u7801"+a,"e:"+d)}}!function(a){var b={util:"placeholder"};function c(a){var b=[];for(var c=0;c<a.length;c++)b.push(a[c]);return b}function d(a,b){switch(a){case 0:return function(){return b.apply(this,arguments)};case 1:return function(a){return b.apply(this,arguments)};case 2:return function(a,c){return b.apply(this,arguments)};case 3:return function(a,c,d){return b.apply(this,arguments)};case 4:return function(a,c,d,e){return b.apply(this,arguments)};case 5:return function(a,c,d,e,f){return b.apply(this,arguments)};case 6:return function(a,c,d,e,f,g){return b.apply(this,arguments)};case 7:return function(a,c,d,e,f,g,h){return b.apply(this,arguments)};case 8:return function(a,c,d,e,f,g,h,i){return b.apply(this,arguments)};case 9:return function(a,c,d,e,f,g,h,i,j){return b.apply(this,arguments)};case 10:return function(a,c,d,e,f,g,h,i,j,k){return b.apply(this,arguments)};default:throw new Error("First argument to arity must be a non-negative integer no greater than ten")}}function e(a,f){return d(a,function(){var d=arguments.length;var g=a-d;var h=d;for(;--h>=0;)arguments[h]===b&&(g+=1);if(0>=g)return f.apply(this,arguments);var i=c(arguments);return e(g,function(){var a=c(arguments);var e=[];var g=-1;for(;++g<d;){var h=i[g];e[g]=h===b?a.shift():h}return f.apply(this,e.concat(a))})})}function f(a){return e(a.length,a)}var g=f(function(a,b){var c=[];for(var d=0;d<b.length;d++)c.push(a(b[d]));return c});var h=f(function(a,b,c){var d=b;for(var e=0;e<c.length;e++)d=a(d,c[e]);return d});var i=f(function(a,b,c){var d=[];for(var e=0;e<b.length;e++)d.push(a(b[e],c[e]));return d});function j(a){return null==a?null:a[0]}function k(a){if(p(String,a))return k(a.split("")).join("");var b=[];for(var c=1;c<a.length;c++)b.push(a[c]);return b}function l(a){return null==a?null:a[a.length-1]}var m=f(function(a,b){if(p(String,b))return m(a,b.split("")).join("");var c=[];a=a<b.length?a:b.length;for(var d=0;a>d;d++)c.push(b[d]);return c});var n=f(function Xb(a,b){return p(String,b)?Xb(a,b.split("")).join(""):0>=a?b:Xb(a-1,k(b))});var o=function(a){return m(a.length-1,a)};var p=f(function(a,b){return null!=b&&b.constructor===a||b instanceof a});var q=f(function(a,b,c){return function(d){return a(d)?b(d):c(d)}});var r=function(a){return"[object Number]"===Object.prototype.toString.call(a)};var s=function(a,b){if(!r(a)||!r(b))throw new TypeError("Both arguments to range must be numbers");var c=[];var d=a;for(;b>d;)c.push(d),d+=1;return c};var t=function(a){return null===a||void 0===a};var u=f(function(a,b){return a===b});function v(a,b){return a!==b}function w(a){if(p(String,a))return w(a.split("")).join("");var b=[];for(var c=a.length-1;c>=0;c--)b.push(a[c]);return b}function x(){var a=arguments;return function(){var b=c(arguments);var d={diqye:"first"};return h(function(a,c){return c.apply(null,a===d?b:[a])},d,a)}}function y(a){return function(){return a}}var z=f(function(a,b,c){if(u(c[a],b))return c;var d=q(p(Array),y([]),y({}))(c);for(var e in c)d[e]=c[e];return d[a]=b,d});var A=f(function(a,b){if(null!=b){var c=b;for(var d=0,e=a.length;e>d&&null!=c;d+=1)c=c[a[d]];return c}});var B=f(function(a,b,c){switch(a.length){case 0:return c;case 1:return z(a[0],b,c);default:return z(a[0],B(k(a),b,Object(c[a[0]])),c)}});function C(a){return function(){var b=-1;for(;++b<a.length;)if(a[b][0].apply(this,arguments))return a[b][1].apply(this,arguments)}}var D=f(function(a,b){a=a||[],b=b||[];var c;var d=a.length;var e=b.length;var f=[];for(c=-1;++c<d;)f[f.length]=a[c];for(c=-1;++c<e;)f[f.length]=b[c];return f});function E(a,b){return function(){return a.apply(null,D(b,arguments))}}var F=f(function(a,b){var c=-1,d=b.length,e=[];for(;++c<d;)a(b[c])&&(e[e.length]=b[c]);return e});var G=f(function(a,b){return j(F(a,b))});var H=f(function(a,b){for(var c=0;c<b.length;c++)if(a(b[c]))return c;return-1});function I(a){return function(){return!a.apply(null,c(arguments))}}function J(a,b){return F(I(a),b)}function K(a,b){return b.split(a)}function L(a,b){return b.join(a)}var M=f(function(a,b){return a.apply(null,b)});function N(a,b){return h(function(a,c){return D(a,g(c,b))},[],a)}function O(a){return[a]}var P=f(function(a,b){return S(a)?!0:j(a)(b)?P(k(a),b):!1});var Q=f(function(a,b){return S(a)?!1:j(a)(b)?!0:Q(k(a),b)});var R=f(function(a,b){return S(b)?!0:a(j(b))?R(a,k(b)):!1});function S(a){return null==a?!1:0==a.length?!0:""==a?!0:!1}function T(a){if(void 0===a)return!1;var b;for(b in a)return!1;return!0}var U=f(function(a,b){return console.log(a+":"+b),b});function V(a){return"number"==typeof a&&isFinite(a)}function W(a){return h(function(a,b){return D(a,b)},[],a)}function X(a,b){if(S(b))return[];var c=j(b);var d=k(b);return W([X(a,F(E(a,[c]),d)),c,X(a,J(E(a,[c]),d))])}var Y=f(function(a,d){return function(){var e=c(arguments);return M(a,g(M(b,e),d))}});var Z=f(function(a,b){return a(b),b});function _(){var a=arguments;return function(b){return M(x,a)(b)}}function ab(a){var b=[];for(var c in a)b[b.length]=[c,a[c]];return b}function bb(a){return a}function cb(a){var b=-1,c=a.length,d={};for(;++b<c;)d[a[b][0]]=a[b][1];return d}var db=f(function(a,b){return A([a],b)});var eb=f(function(a,b){return b>=a});var fb=f(function(a,b){return a>=b});var gb=f(function(a,c){return g(M(b,[c]),a)});var hb=f(function(a){return h(D,[],g(q(p(Array),hb,O),a))});function ib(a){var b=!1;var d=null;return function(){if(b)return d;var e=c(arguments);return d=M(a,e),b=!0,d}}var jb=f(function(a,b){return Number(a)+Number(b)});var kb=jb(1);a.util={__:b,add:jb,inc:kb,once:ib,drop:n,lte:eb,juxt:gb,gte:fb,toArray:c,map:g,range:s,flatten:hb,reduce:h,pipe:x,ifn:q,when:q(b,b,y(null)),identity:bb,is:p,curry:f,head:j,tail:k,tap:Z,isNil:t,allPass:P,anyPass:Q,all:R,last:l,converge:Y,eq:u,prop:db,zipWith:i,reverse:w,path:A,assoc:z,concat:D,isEmpty:S,isEmptyObject:T,isNumber:V,trace:U,assocPath:B,partial:E,always:y,split:f(K),join:f(L),filter:F,noteq:f(v),apply:M,ap:f(N),concats:W,reject:f(J),complemtent:I,of:O,cbkpipe:_,fromPairs:cb,toPairs:ab,take:m,init:o,cond:C,findIdx:H,T:y(!0),F:y(!1),find:G,sort:f(X)},a.util_watch=function(){var b={};a.watchobj=b;var c=f(function(a,c,d){null==b[a]&&(b[a]={});var e=b[a];null==e[c]&&(e[c]=[]),e[c].push(d)});var d=f(function(a,b,d){return d.__once=!0,c(a,b,d)});var e=f(function(a,b){return x(g(D([a])),g(M(function(a,b,e){var f=b.split("$");return"once"==f[0]?d(a,f[1],e):c(a,b,e)})))(ab(b))});var h=f(function(a,c,d){null!=b[a]&&null!=b[a][c]&&(b[a][c]=F(function(a){return a(d),a.__once?!1:!0},b[a][c]))});return{watch:c,watchOnce:d,emit:h,watchDSL:e}}();function lb(a){var b=null;return function(c,d){a.hover(function(){clearTimeout(b),c.show(),d&&d()},function(){b=setTimeout(function(){c.hide()},500)})}}function mb(a,b){lb(a)(b(a))}function nb(a,b){mb(a,function(a){return a.find(b)})}function ob(a,b){a.attr("value",b)}function pb(a,b,c){return c.attr(a,b)}function qb(a,b){return b.addClass(a)}function rb(a,b){return b.removeClass(a)}function sb(a,b){return b.is(a)}function tb(a){return a.show()}function ub(a){return a.hide()}function vb(a,b){return function(){b(a)}}function wb(a){return function(){var b=$(this);a(b)}}function xb(a,b){return b.find(a)}function yb(a,b){return b.attr(a)}function zb(a,b){return g(function(a){return b.attr(a)},a)}function Ab(a,b,c){return c.on("click",function(){c.find(".checkbox_chose,.checkboxs").is(".checkboxs")?(c.find(".checkbox_chose,.checkboxs").removeClass("checkboxs").addClass("checkbox_chose"),a(c)):c.find(".checkbox_chose,.checkboxs").is(".checkbox_chose")&&(c.find(".checkbox_chose,.checkboxs").removeClass("checkbox_chose").addClass("checkboxs"),b(c))})}function Bb(a){var b=a.attr("g-tip");var c=a.find("[g-tip-for="+b+"]");return 0==c.size()&&(c=a.siblings("[g-tip-for="+b+"]")),a.hover(function(){c.show()},function(){c.hide()})}function Cb(a,b){var c=b.find("[g-radio]");c.each(function(){var b=$(this);b.on("click",function(){c.find(".radio_chose,.radio").removeClass("radio_chose").addClass("radio"),b.find(".radio_chose,.radio").removeClass("radio").addClass("radio_chose"),a(b)})})}function Db(a,b){var c=b.find("[g-btn]");c.on("click",function(){var b=$(this);c.removeClass("bd").addClass("bd1").find(".chose_icon").hide(),b.removeClass("bd1").addClass("bd").find(".chose_icon").show(),a(b)})}function Eb(){return wb(x.apply(null,c(arguments)))}function Fb(a){var b={};var c=a.find("[name]");return c.each(function(){var a=$(this);var c=a.attr("name");var d;d=a.is("input")?a.val():a.attr("value"),b[c]=d}),b}function Gb(a){return a.toggle()}function Hb(a,b){return b.toggleClass(a)}function Ib(a){return a.attr("g-value-path").split(",")}function Jb(a){return a.attr("g-path").split(",")}function Kb(a){return a.attr("g-value")}function Lb(b,c,d){var e=d[b]||a.util_ui[b];return M(e,c)}function Mb(){}function Nb(a,b){function c(c,d){var e=d.split(" ");var f=j(e);var h=g(function(b){return/^\[.*\]$/.test(b)?a.find(b):"this"==b?c:b},k(e));Lb(f,h,b)}function d(a,b){g(E(c,[b]),a.split(","))}return a.find("[g-click]").off("click").on("click",function(a){a.stopPropagation(),d($(this).attr("g-click"),$(this))}),a.find("[g-keyup]").on("keyup",function(){d($(this).attr("g-keyup"),$(this))}),a.find("[g-blur]").on("blur",function(){d($(this).attr("g-blur"),$(this))}),a}function Ob(a,b){return a.find("[g-pipe]").each(function(){Nb($(this),b)})}function Pb(a,b,c,d){return clearTimeout(d),setTimeout(function(){c=null==c?[]:c,b.apply(null,c)},a)}var Qb=F(function(a){return null!=a[1]&&""!=a[1]});var Rb=x(ab,Qb,cb);function Sb(a){window.location.href=a}a.util_ui={hoverUp:lb,hoverUpBy:mb,hoverUpBySelector:f(nb),addClass:f(qb),removeClass:f(rb),show:tb,hide:ub,toggle:Gb,attr:f(yb),attrs:f(zb),setVal:ob,jq:wb,is:f(sb),jqpipe:Eb,documentclickhide:Mb,cbk:vb,gpath:Jb,gvaluePath:Ib,gvalue:Kb,gtip:Bb,toggleClass:f(Hb),gpipes:Ob,gradioGp:f(Cb),gbtnGp:f(Db),checkbox:f(Ab),delay:f(Pb),setAttr:f(pb),find:f(xb),searForm:Fb,redir:Sb,filterNullOrEmptyObj:Rb}}(this);
/* gmpro-2.0.0/cart/2.9.5 cart-ui.js Date:2019-08-20 13:49:01 */
!function(a){a.browser.msie&&a.browser.version-0<9&&a("body").addClass("ie678");var b=a(document);b.on("mousedown",function(b){var c=a(b.target);c.is(".btn.btn-default")&&c.removeClass("mousedown").addClass("mousedown")}).on("mouseup",function(b){var c=a(b.target);c.is(".btn.btn-default")&&c.removeClass("mousedown")});function c(a,b){var d=a.getAttribute(b);return null!==d?!0:null==a.parentElement?!1:c(a.parentElement,b)}b.on("click",function(b){c(b.target,"click-document-pre")||c(b.target,"click-document-hide")||a("[click-document-hide]").hide()}),a(".c-i.closebtn-new").live("mousemove",function(){var b=a(this);b.removeClass("closebtn-new").addClass("closebtn-hover")}),a(".c-i.closebtn-hover").live("mouseout",function(){var b=a(this);b.removeClass("closebtn-hover").addClass("closebtn-new")}),a(".c-i.tips_icon").live("mousemove",function(){var b=a(this);b.removeClass("tips_icon").addClass("tips_icon-hover")}),a(".c-i.tips_icon-hover").live("mouseout",function(){var b=a(this);b.removeClass("tips_icon-hover").addClass("tips_icon")}),a(".sup-body .l-btn").live("mousemove",function(){var b=a(this).find(".c-i");b.removeClass("arrow-left").addClass("bottom-good-l-hover")}).live("mouseout",function(){var b=a(this).find(".c-i");b.removeClass("bottom-good-l-hover").addClass("arrow-left")}),a(".sup-body .r-btn").live("mousemove",function(){var b=a(this).find(".c-i");b.removeClass("arrow-right").addClass("bottom-good-r-hover")}).live("mouseout",function(){var b=a(this).find(".c-i");b.removeClass("bottom-good-r-hover").addClass("arrow-right")}),a(".scroll-container .scroll-left-btn").live("mousemove",function(){var b=a(this);b.removeClass("arrow-left").addClass("arrow-left-over")}).live("mouseout",function(){var b=a(this);b.removeClass("arrow-left-over").addClass("arrow-left")}),a(".scroll-container .scroll-right-btn").live("mousemove",function(){var b=a(this);b.removeClass("arrow-right").addClass("arrow-right-over")}).live("mouseout",function(){var b=a(this);b.removeClass("arrow-right-over").addClass("arrow-right")}),a(".bottom-goods-body .left-btn").live("mousemove",function(){var b=a(this).find(".c-i");b.removeClass("bottom-good-l").addClass("bottom-good-l-hover")}).live("mouseout",function(){var b=a(this).find(".c-i");b.removeClass("bottom-good-l-hover").addClass("bottom-good-l")}),a(".bottom-goods-body .right-btn").live("mousemove",function(){var b=a(this).find(".c-i");b.removeClass("bottom-good-r").addClass("bottom-good-r-hover")}).live("mouseout",function(){var b=a(this).find(".c-i");b.removeClass("bottom-good-r-hover").addClass("bottom-good-r")})}($);
