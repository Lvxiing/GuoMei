/*! by. */
!function (a) {
    function t(i) {
        if (e[i]) return e[i].exports;
        var s = e[i] = {exports: {}, id: i, loaded: !1};
        return a[i].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }

    var e = {};
    return t.m = a, t.c = e, t.p = "", t(0)
}([function (a, t, e) {
     setTimeout(function () {
        e(1).getGoods()
    })
}, function (a, t, e) {
    var i;
    i = function (a, t, i) {
        function s(a, t) {
            if (0 == t.length) return !1;
            for (var e = a.length - 1, i = t.length; e > 0 && i > 0; e--) a[e].thirdProduct || (i--, a[e] = t[i])
        }

        function r(a) {
            var t = new RegExp("(^|&)" + a + "=([^&]*)(&|$)"), e = window.location.search.substr(1).match(t);
            return null != e ? unescape(e[2]) : ""
        }

        function n(a, t, e) {
            for (var i = [11, 19, 31], s = 0; s < i.length; s++) {
                var r = i[s];
                t[s] && a[r - 1] && a.splice(r, 0, $.extend({}, t[s], {isActive: !0, height: e}))
            }
        }

        function o(a) {

        }

        function c() {
            var a = $("#product-left").offset().top;
            $(window).scrollTop(a)
        }

        var l = e(6).getTemplate("normal"),
            d = '\t    {{each prodInfo.products}}\t    {{if $value.isActive}}\t    <li class="product-item product-ad" style="height:{{$value.height}}px">\t        <a class="activeImg" data-code="{{modelid}}-{{pageNumber}}_activities_{{$index+1}}" href="{{$value.mUrl}}" title="{{$value.title}}" target="_blank">\t        <img src="//img.gomein.net.cn/images/grey.gif" gome-src="{{$value.img}}" alt="{{$value.pTxt}}">\t        </a>\t        <span class="product-ad-info">\t        <em class="product-ad-name">{{$value.title}}</em>\t        <em class="product-ad-title">{{$value.pTxt}}</em>\t        <a class="product-ad-btn" data-code="{{modelid}}-{{pageNumber}}_activities_{{$index+1}}" href="{{$value.mUrl}}" target="_blank">点击进入</a>\t        </span>\t    </li>\t    {{else}}\t    <li class="product-item{{if $value.taoGou}} product-item-tao{{/if}}{{if $value.images.length==0}} hideSmallBox{{/if}}" from="ajax" id="gm-{{$value.pId}}-{{$value.skuId}}">\t        <input appointment="{{if $value.stock==3 || $value.stock==6 || $value.stock==4}}true{{/if}}" class="productInfo" salestype="{{if $value.thirdProduct}}true{{else}}false{{/if}}" type="hidden" pid="{{$value.pId}}" skuid="{{$value.skuId}}" skuname="{{$value.alt}}" prd-index="{{$index+1}}" price="{{$value.price}}" salesVolume="{{$value.salesVolume}}" evaluateCount="{{$value.evaluateCount}}" cateId="{{$value.firstCat}}_{{$value.secondCat}}_{{$value.defCatId}}" brandIds="{{each $value.brandIds as value}}{{if $index==0}}{{value}}{{/if}}{{/each}}" thirdProduct="{{$value.thirdProduct | formatBoolean}}" shopId="{{if $value.shopId}}{{$value.shopId}}{{/if}}"  shopName="{{if $value.sName}}{{$value.sName}}{{/if}}"  promoScore="{{$value.promoScore}}" promoStock="{{$value.promoStock}}" score="{{$value.score}}" pStock="{{$value.stock}}" pWeight="{{$value.promoStock}}" taoType="{{$value.taoType}}" taoSkuId="{{$value.taoSkuId}}" thirdCat="{{$value.defCatId}}" skuType="{{if $value.interFlowType ==1}}G3PP{{else if $value.interFlowType ==5}}3PP{{else if $value.interFlowType ==0}}{{if $value.skuType ==gome_sku}}SMI{{else if $value.skuType == super_market_sku}}SMI_T{{/if}}{{/if}}" brandCode="{{$value.brandCode}}" skuNo="{{$value.skuNo}}"/>\t        <ul class="arbitrage clearfix">\t            <li class="arbitrage-num arbitrage-cur" pId="{{$value.pId}}" sId="{{$value.skuId}}">单件</li>\t            {{each $value.taoGou}}\t            {{if $index < 3}}\t            <li class="arbitrage-num">{{$value}}件套</li>\t            {{/if}}\t            {{/each}}\t        </ul>\t        <div class="item-tab-warp">' + l + "</div>\t    </li>\t    {{/if}}\t    {{/each}}\t    ";
        i.exports = {getGoods: o, goodsTop: c}
    }.call(t, e, t, a), !(void 0 !== i && (a.exports = i))
}, function (module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
        function changeURLArg(url, arg, arg_val) {
            var pattern = arg + "=([^&]*)", replaceText = arg + "=" + arg_val;
            if (url.match(pattern)) {
                var tmp = "/(" + arg + "=)([^&]*)/gi";
                return tmp = url.replace(eval(tmp), replaceText)
            }
            return url.match("[?]") ? url + "&" + replaceText : url + "?" + replaceText
        }

        function assembleHref(a, t) {
            var e = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"), i = "";
            switch (window.pageName) {
                case"搜索结果页":
                    var s = href.substr(1).match(e);
                    null != s ? ("facets" == a && (t += s[2]), href = href.replace("&" + a + "=" + s[2], "&" + a + "=" + t)) : ("" != pageData.brandFacet && (t += "facets" == a ? pageData.brandFacet : "&facets=" + pageData.brandFacet), "price" == a && (t += "&priceTag=1"), href = href.replace("&pzpq=0&pzin=v5", "") + "&" + a + "=" + t + "&pzpq=0&pzin=v5");
                    break;
                case"海外购搜索结果页":
                    var s = href.substr(1).match(e);
                    i = null != s && "facets" == a ? "&" + a + "=" + unescape(s[2]) + t + "&" : "&" + a + "=" + t + "&", href = href.indexOf(a) != -1 ? href.replace(e, i) : href + "&" + a + "=" + t + ("price" == a ? "&priceTag=1" : "") + "&pzpq=0&pzin=v5";
                    break;
                case"三级列表页":
                    href = window.location.pathname, href.split("-").length <= 1 && (href = href.split(".html")[0] + "-00-0-48-1-0-0-0-1-0-0-0-0-0-0-0-0-0.html"), pageCategoryQueryArray = href.split("-"), "facets" === a && "0" !== pageCategoryQueryArray[9] ? pageCategoryQueryArray[queryRelation[a]] += t : (pageCategoryQueryArray[queryRelation[a]] = t, "price" === a && (pageCategoryQueryArray[7] = "1")), href = pageCategoryQueryArray.join("-");
                    break;
                case"海外购三级列表页":
                    href = window.location.pathname, href.split("-").length <= 1 && (href = href.split(".html")[0] + "-00-0-48-1-0-0-0-1-0-0-0-11-0-0-0-0-0.html"), pageCategoryQueryArray = href.split("-"), "facets" === a && "0" !== pageCategoryQueryArray[9] ? pageCategoryQueryArray[queryRelation[a]] += t : (pageCategoryQueryArray[queryRelation[a]] = t, "price" === a && (pageCategoryQueryArray[7] = "1")), href = pageCategoryQueryArray.join("-");
                    break;
                case"品牌商品页":
                    href = window.location.protocol + "//search" + cookieDomain + "/search?question=" + pageData.searchkey + "&" + a + "=" + t + "&pzpq=0&pzin=v5"
            }
            window.location.href = href
        }

        var href = window.location.search, queryRelation = {facets: 9, promoFlag: 10, price: 6},
            pageCategoryQueryArray = [];
        pageData.overWord ? href = changeURLArg(href, "question", pageData.overWord) : pageData.searchLevel && "2" == pageData.searchLevel && (href = changeURLArg(href, "question", pageData.remain)), module.exports = {dofacet: assembleHref}
    }.call(exports, __webpack_require__, exports, module), !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
}, function (a, t) {
    a.exports = {tpl: '{{each lst as value}}\t            <li class="buy-items">\t                <div class="pic"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank"><img gome-src="{{value.iurl}}" src="//img.gomein.net.cn/images/grey.gif"></a></div>\t                <div class="price">¥<span>{{value.price}}</span></div>\t                <div class="name"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank">{{value.pn}}</a></div>\t            </li>\t        {{/each}}'}
}, function (a, t) {
    function e(a) {
        var t = [];
        return $("#product-box").find(".productInfo").each(function (e, i) {
            var s = $(i);
            return e < parseInt(a) && void t.push(s.attr("pid") + "-" + s.attr("skuid"))
        }), JSON.stringify(t)
    }

    a.exports = {
        googleMonitor_s: function () {
            setTimeout(function () {
                !function (a, t, e, i, s, r, n) {
                    a.GoogleAnalyticsObject = s, a[s] = a[s] || function () {
                        (a[s].q = a[s].q || []).push(arguments)
                    }, a[s].l = 1 * new Date, r = t.createElement(e), n = t.getElementsByTagName(e)[0], r.async = 1, r.src = i, n.parentNode.insertBefore(r, n)
                }(window, document, "script", "//www.google-analytics.com/analytics.js", "z_ga"), z_ga("create", "UA-44955382-1", "gome.com.cn"), z_ga("send", "pageview"), function () {
                    var a = document.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = ("https:" == document.location.protocol ? "https://ssl" : "//www") + ".google-analytics.com/ga.js";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(a, t)
                }();
                var a = a || [];
                a.push(["_setAccount", "UA-44955382-1"]), a.push(["_trackPageview", window.location.href]), a.push(["_trackEvent", "question", "load", "searchPage"]), z_ga("ec:addPromo", {
                    id: "gomeSearch",
                    name: "gome 11.11"
                })
            }, 3e3)
        }, googleMonitor_c: function () {
            setTimeout(function () {
                !function (a, t, e, i, s, r, n) {
                    a.GoogleAnalyticsObject = s, a[s] = a[s] || function () {
                        (a[s].q = a[s].q || []).push(arguments)
                    }, a[s].l = 1 * new Date, r = t.createElement(e), n = t.getElementsByTagName(e)[0], r.async = 1, r.src = i, n.parentNode.insertBefore(r, n)
                }(window, document, "script", "//www.google-analytics.com/analytics.js", "z_ga"), z_ga("create", "UA-44955382-1", "gome.com.cn"), z_ga("send", "pageview"), function () {
                    var a = document.createElement("script");
                    a.type = "text/javascript", a.async = !0, a.src = ("https:" == document.location.protocol ? "https://ssl" : "//www") + ".google-analytics.com/ga.js";
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(a, t)
                }();
                var a = a || [];
                a.push(["_setAccount", "UA-44955382-1"]), a.push(["_trackPageview", window.location.href]);
                var t = dspData.dsp_gome_c3id;
                a.push(["_trackEvent", t, "load", "catPage"]), z_ga("ec:addPromo", {id: "gomeCat", name: "gome 11.11"})
            }, 3e3)
        }, cloudClickMonitor: function (a, t) {
            return
        }
    }
}, function (a, t, e) {
    var i;
    i = function (a, t, e) {
        function i(a, t) {
            var e = $("body").height(), i = $(window).height(), r = Math.max(e, i),
                n = $('<div class="mask-box" id="mask-box"><a class="mask-close closeBtn" href="javascript:void(0);">╳</a><div class="mask-content-warp" id="mask-content-warp">' + a + "</div></div>");
            n.appendTo("body");
            var o = n.height(), c = n.width();
            $('<div id="mask-overlay" class="mask-overlay"></div>').css("height", r).appendTo("body"), n.css({
                "margin-left": -(c / 2),
                "margin-top": -(o / 2)
            }), t && "function" == typeof t && t.apply(), $(".closeBtn").on("click", function () {
                s()
            })
        }

        function s() {
            $("#mask-overlay").remove(), $("#mask-box").remove()
        }

        e.exports = {showMask: i, closeMask: s}
    }.call(t, e, t, a), !(void 0 !== i && (a.exports = i))
}, function (a, t) {
    function e(a) {
        return '<div class="item-tab asynPriceBox' + ("taogou" == a ? " taoStyle" : "") + '" isBigImg="{{if $value.isBigImg}}true{{/if}}" >\t        {{if $value.isBigImg}}\t            <p class="item-pic bigp"><a class="item-link" rel="nofollow"  href="{{$value.sUrl}}" target="_blank" data-code="{{modelid}}-{{pageNumber}}_{{$index+1}}_1" title="{{$value.alt}}"><img gome-src="{{$value.sImg}}_275.jpg" alt="{{$value.alt}}" src="//img.gomein.net.cn/images/grey.gif"></a></p>\t        {{else}}\t            <p searchId="{{searchId}}" class="item-pic"><a class="item-link" rel="nofollow" href="{{$value.sUrl}}" target="_blank" data-code="{{modelid}}-{{pageNumber}}_{{$index+1}}_1" title="{{$value.alt}}"><img gome-src="{{$value.sImg}}_210.jpg" src="//img.gomein.net.cn/images/grey.gif" alt="{{$value.alt}}"></a>{{if $value.energyTag == 1}}<span class="save-energy"></span>{{/if}}</p>\t        {{/if}}\t        {{if $value.isMulti && $value.images.length>0}}\t            <div class="item-pic-small-box" index="{{if $value.images.length > 9}}9{{else}}{{$value.images.length}}{{/if}}" curIndex="{{if $value.images.length > 9}}9{{else}}{{$value.images.length}}{{/if}}">\t                {{if $value.images.length> 5 }}\t                <a href="javascript:void(0);" class="icon-prev disable"></a>\t                <a href="javascript:void(0);" class="icon-next"></a>\t                {{/if}}\t                <div class="item-pic-small-wrap">\t                    <ul class="imgList">\t                    {{each $value.images}}\t                    {{if $index < 10}}\t                        <li class="icon-li" sid="{{$value.skuId}}" d_src="{{$value.sImg}}" sid="{{$value.skuId}}" surl="{{$value.sUrl}}" skuNo="{{$value.skuNo}}" name="{{$value.name}}">\t                        <img  gome-src="{{$value.sImg}}_30.jpg" alt="{{$value.color}}" src="//img.gomein.net.cn/images/grey.gif" />\t                        <div class="icon-li-price hide-dom"></div>\t                        <div class="icon-li-promotion hide-dom"></div>\t                        </li>\t                    {{/if}}\t                    {{/each}}\t                    </ul>\t                </div>\t            </div>\t        {{/if}}\t        <div class="item-price-info">\t            <p class="item-price">\t            {{if $value.stock==3}}\t            <span class="price" pid="{{$value.pId}}" skuid="{{$value.skuId}}">敬请期待</span>\t            {{else}}\t            <span class="price asynPrice" pid="{{$value.pId}}" skuid="{{$value.skuId}}" recordPrice="{{$value.recordPrice}}" energyTag="{{$value.energyTag}}"></span>\t            {{/if}}\t            {{if $value.isVip == 1}}\t            <span class="promotion-normal">会员价</span>\t            {{/if}}\t            {{if $value.rebate == 1}}\t            <span class="promotion-normal">返利</span>\t            {{/if}}\t            </p>\t        </div>\t        <p class="item-name"><a rel="nofollow" class="item-link" data-code="{{modelid}}-{{pageNumber}}_{{$index+1}}_1" href="{{$value.sUrl}}" target="_blank" title="{{$value.alt}}">{{#$value.name}}</a></p>\t        {{if $value.promoDesc !=""}}\t        <p class="item-promotional-language">\t            <!--{{if $value.promoTags && $value.promoTags != null && $value.promoTags.promoType && $value.promoTags.promoType == 2}}\t                【{{$value.promoTags.promoPrice}}手机专享价】\t            {{/if}}-->\t            {{$value.promoDesc}}\t        </p>\t        {{/if}}\t        <p {{if $value.isBigImg}}class="item-comment-dispatching bigger"{{else}}class="item-comment-dispatching"{{/if}}>\t            {{if $value.stock==0 || noSkusStock}}\t            <span class="dispatchingbox"></span>\t            <span class="dispatching item-productnone">{{$value.cityName}}无货</span>\t            {{else if $value.stock==1}}\t            <span class="dispatching"></span>\t            {{else if $value.stock==2}}\t            <span class="dispatchingbox"></span>\t            <span class="dispatching nOrange item-productnone">{{$value.cityName}}暂不支持配送</span>\t            {{else if $value.stock==3 || $value.stock==6}}\t            <span class="dispatchingbox"></span>\t            <span class="dispatching nOrange item-productnone">正在预约中</span>\t            {{else if $value.stock==4}}\t            <span class="dispatchingbox"></span>\t            <span class="dispatching nHeigh item-productnone">正在抢购中</span>\t            {{else}}\t            <span class="dispatchingbox"></span>\t            <span class="dispatching item-productnone">{{$value.cityName}}无货</span>\t            {{/if}}\t            <a href="{{$value.sUrl}}#j-comment-section" target="_blank" class="comment" data-code="{{modelid}}-{{pageNumber}}_{{$index+1}}_2"><span class="grey">已有</span>{{$value.evaluateCount}}<span class="grey">人评价</span></a>\t        </p>\t        <p class="item-shop">\t        {{if $value.thirdProduct}}\t            {{if $value.shopId =="80009736" || $value.shopId =="80010355" || $value.shopId =="80010423"}}\t                <span class="hyg-shopType">自营</span>\t            {{/if}}\t            {{if $value.mallTag =="1"}}<span class="brandtip">品牌直营</span>{{/if}}\t            {{if $value.goodsType == "ZC2M"}}\t                <span class="promotion-c2m"></span>\t            {{/if}}\t            {{if $value.marketTag == 1}}\t                {{if !$value.shopFlag || $value.shopFlag < 5}}<span class="promotion-hwg"></span>{{/if}}\t            {{/if}}\t            {{if $value.sName}}\t                <a class="nname" data-code="{{modelid}}-{{pageNumber}}_{{$index+1}}_4" target="_blank" href="{{$value.mUrl}}">{{$value.sName}}</a>\t            {{/if}}\t        {{else}}\t            <span class="nnamezy">自营</span>\t            {{if $value.goodsType == "ZC2M"}}\t            <span class="promotion-c2m"></span>\t            {{/if}}\t            {{if $value.marketTag == 1}}\t                {{if !$value.shopFlag || $value.shopFlag < 5}}<span class="promotion-hwg"></span>{{/if}}\t            {{/if}}\t            {{if $value.sName}}\t            <a class="nname" data-code="{{modelid}}-{{pageNumber}}_{{$index+1}}_4" target="_blank" href="{{$value.mUrl}}">{{$value.sName}}</a>\t            {{/if}}\t        {{/if}}\t        </p>\t        <p class="item-promotion"></p>\t        <p class="item-option clearfix">\t            <span class="add-contrast" cid="{{$value.pId}}/{{$value.skuId}}" title="对比"><i class="icon"></i></span>\t            <span class="add-collection" pid="{{$value.pId}}" skuid="{{$value.skuId}}" pname="{{$value.name}}" title="收藏"><i class="icon"></i></span>\t            {{if $value.stock == 0 || noSkusStock}}\t            <span class="add-cart next-buy" pid="{{$value.pId}}" skuid="{{$value.skuId}}" title="到货通知"><i class="notice"></i></span>\t            {{else if $value.stock == 2 || $value.stock == 3 || $value.stock == 4 || $value.stock == 6}}\t            <i></i>\t            {{else}}\t            <a class="add-cart addTo-cart" href="javascript:void(0);" isMCard="{{$value.gomeCardType}}" shopFlag="{{$value.shopFlag}}" isHyg="{{$value.marketTag}}" pid="{{$value.pId}}" skuid="{{$value.skuId}}" taoType="{{$value.taoType}}" taoSkuId="{{$value.taoSkuId}}" data-code="{{pageType}}-{{modelid}}-{{pageNumber}}_{{$index+1}}_3" title="加入购物车"><i class="icon"></i></a>\t            {{/if}}\t            {{if $value.thirdProduct}}\t                {{if $value.shopId =="80009736" || $value.shopId =="80010355" || $value.shopId =="80010423"}}\t                    <span title="在线客服" class="gomekf online-server" customer-entry="product" shopId skuId="{{$value.skuId}}" productId="{{$value.pId}}" categoryid="{{$value.firstCat}}_{{$value.secondCat}}_{{$value.defCatId}}" brandId="{{each $value.brandIds as brandvalue i}}{{brandvalue}}{{/each}}"><i class="icon"></i></span>\t                {{/if}}\t                <span title="在线客服" class="gomekf online-server" customer-entry="product" shopId="{{$value.shopId}}" skuId="{{$value.skuId}}" productId="{{$value.pId}}" categoryid="{{$value.firstCat}}_{{$value.secondCat}}_{{$value.defCatId}}" brandId="{{each $value.brandIds as brandvalue i}}{{brandvalue}}{{/each}}"><i class="icon"></i></span>\t            {{else}}\t                <span title="在线客服" class="gomekf online-server" skuId="{{$value.skuId}}" customer-entry="product" shopId productId="{{$value.pId}}" categoryid="{{$value.firstCat}}_{{$value.secondCat}}_{{$value.defCatId}}" brandId="{{each $value.brandIds as brandvalue i}}{{brandvalue}}{{/each}}"><i class="icon"></i></span>\t            {{/if}}\t        </p>\t    </div>\t    '
    }

    a.exports = {getTemplate: e}
}, function (a, t) {
    function e(a, t) {
        var e = window.location.href;
        if (e.indexOf(".gome.com.cn") != -1) var s = "//bigd.gome.com.cn/rec/grec1061100"; else var s = "//10.115.32.15:9081/rec/grec1061100";

    }

    var i = '{{each lst as value}}\t    <li class="product-item">\t        <div class="item-tab-warp">\t            <div class="item-tab" >\t                <p class="item-pic"><a class="item-link" rel="nofollow" href="{{value.purl}}" target="_blank" title="{{value.pn}}"><img gome-src="{{value.iurl}}" src="//img.gomein.net.cn/images/grey.gif" alt="{{value.pn}}"></a></p>\t                    <div class="item-price-info">\t                        <p class="item-price">\t                            <span class="price" pid="{{value.pId}}" skuid="{{value.skuId}}">{{value.price}}</span>\t                        </p>\t                    </div>\t                    <p class="item-name"><a rel="nofollow" class="item-link" data-code="{{modelid}}-{{pageNumber}}_{{index+1}}_1" href="{{value.purl}}" target="_blank" title="{{value.pn}}">{{#value.pn}}</a></p>\t                    {{if value.retType == 2}}\t                     <p class="item-shop"><span class="nnamezy">自营</span></p>\t                    {{/if}}\t                </div>\t        </div>\t    </li>\t{{/each}}';
    a.exports = {getSimilar: e}
}, function (a, t) {
    a.exports = {tpl: '{{each data as value}}\t        <li class="buy-items">\t        {{if !(value.ds) && !(value.skuid) && !(value.productid)}}\t            <a class="dsp-tgImg" href="{{value.ldp}}" target="_blank"><img gome-src="{{value.src}}" src="//img.gomein.net.cn/images/grey.gif"></a>\t        {{else}}\t            <div class="pic"><a href="{{value.ldp}}" target="_blank"><img gome-src="{{value.src}}" src="//img.gomein.net.cn/images/grey.gif"></a></div>\t            <div class="price">¥<span>{{value.pr}}</span></div>\t            <div class="name"><a href="{{value.ldp}}" target="_blank">{{value.ds}}</a></div>\t            {{if value.adver}}<div class="adver">{{#value.adver}}</div>{{/if}}\t        {{/if}}\t        </li>\t    {{/each}}'}
}, function (a, t) {
    function e(a, t) {
        var e = $.cookie("proid120517atg");
        return ""
    }

    var i = '{{each result as value}}\t            <li class="item">\t                <p class="pic"><a href="{{value.url}}" target="_blank"><img gome-src="{{value.pic}}" src="//img.gomein.net.cn/images/grey.gif"></a></p>\t                <p class="name"><a href="{{value.url}}" target="_blank">{{value.name}}</a></p>\t                <p class="price">¥<span>{{value.price}}</span></p>\t            </li>\t        {{/each}}';
    a.exports = {getData: e}
}, function (a, t, e) {
    var i;
    i = function (a, t, i) {
        function s() {
            $(".multiSelectStatus").find(".fc-btn-cancel").trigger("click")
        }

        $(".facets-category").data("selectFacet", ""), $(".facets-category-common").each(function () {
            var a = $(this).find(".category-normal ul").height(), t = $(this).find(".category-normal ul li").length;
            a > 35 ? $(this).find(".fc-option-more").css("visibility", "visible") : $(this).find(".fc-option-more").remove(), 1 == t && $(this).find(".fc-option-multiple").remove()
        });
        var r = function () {
            var a = 0, t = $(".nSearch-crumb-facetsCurrent").find("li");
        }();
        $(".facetsCurrent-next").bind("click", function () {
            $(".nSearch-crumb-facetsCurrent").animate({left: r + "px"}, 300, function () {
                $(".facetsCurrent-prev").show(), $(".facetsCurrent-next").hide()
            })
        }), $(".facetsCurrent-prev").bind("click", function () {
            $(".nSearch-crumb-facetsCurrent").animate({left: 0}, 100, function () {
                $(".facetsCurrent-next").show(), $(".facetsCurrent-prev").hide()
            })
        }), $("#module-facet .fc-option-multiple").bind("click", function () {
            s(), $(this).parents(".facets-category").data("isMultiSelect", !0).addClass("multiSelectStatus"), $(this).parents(".facets-category").find(".fc-option-more").data("isOpen", !1).trigger("click")
        }), $("#module-facet .fc-btn-cancel").bind("click", function () {
            var a = $(this).parents(".facets-category");
            a.find(".facet").filter(function () {
                return $(this).data("isSelect")
            }).trigger("click"), a.find(".fc-option-more").data("isOpen", !0).trigger("click"), a.data("isMultiSelect", !1).removeClass("multiSelectStatus")
        }), $("#module-facet .fc-btn-ok").bind("click", function () {
            var a = $(this).parents(".facets-category").data("selectFacet");
            a && e(2).dofacet("facets", a)
        }), $("#module-facet .fc-option-more").data("isOpen", !1).bind("click", function (a) {
            $(this).data("isOpen") ? $(this).data("isOpen", !1).html("<i></i>更多").parents(".facets-category").removeClass("moreStatus") : $(this).data("isOpen", !0).html("<i></i>收起").parents(".facets-category").addClass("moreStatus")
        }), $("#module-facet .facet").bind("click", function (a) {
            var t = $(this), e = t.parents(".facets-category"), i = e.data("selectFacet");
            e.data("isMultiSelect") && (a.preventDefault(), t.data("isSelect") ? (t.removeClass("chk"), t.data("isSelect", !1), i = i.replace(t.attr("facetsid"), "")) : (t.addClass("chk"), t.data("isSelect", !0), i += t.attr("facetsid")), e.data("selectFacet", i))
        }), $("#category-brand-hasCheck").delegate("li", "click", function () {
            $("#brandID" + $(this).data("facetId")).trigger("click")
        }), $(".category-brand-f-letter").find("li").bind({
            mouseenter: function () {
                var a = $(this);
                a.hasClass("all") ? (a.addClass("cur").siblings("li").removeClass("cur"), a.parents(".fc-content").find(".brand-op").removeClass("brand-op")) : (a.addClass("cur").siblings("li").removeClass("cur"), a.parents(".fc-content").find(".c-brand").addClass("brand-op").filter(function () {
                    return $(this).attr("brand-value") == a.attr("brand-key")
                }).removeClass("brand-op"))
            }
        }), $("#facets-category-brand .fc-option-more").bind("click", function () {
            $(this).parents("#facets-category-brand").find(".category-brand-f-letter .all").trigger("mouseenter")
        }), $("#facets-category-brand .facet").bind("click", function (a) {
            var t = $(this);
            t.data("isSelect") ? (t.parent(".c-brand").addClass("lichk"), $('<li class="ckes"><i></i>' + t.attr("name") + "</li>").appendTo("#category-brand-hasCheck").data("facetId", t.attr("facetsid"))) : (t.parent(".c-brand").removeClass("lichk"), $("#category-brand-hasCheck li").filter(function () {
                return t.attr("facetsid") == $(this).data("facetId")
            }).remove())
        }), $(".category-syn").bind({
            mouseenter: function (a) {
                s(), $(this).parents(".facets-category").data("isMultiSelect", !0), $(this).addClass("category-syn-open")
            }, mouseleave: function (a) {
                $(this).parents(".facets-category").data("isMultiSelect", !1), $(this).removeClass("category-syn-open")
            }
        }), $(".facets-category-syn .fc-btn-cancel").bind("click", function () {
            $(this).parents(".category-syn").removeClass("category-syn-open")
        }), $(".facets-rele").bind({
            mouseenter: function (a) {
                $(this).parents(".facets-category").data("isMultiSelect", !1)
            }
        }), $("#fc-common-show").bind("click", function (a) {
            s(), $(this).parents(".fccc-control-warp").addClass("show").siblings(".fc-hide").show()
        }), $("#fc-common-hide").bind("click", function (a) {
            s(), $(this).parents(".fccc-control-warp").removeClass("show").siblings(".fc-hide").hide()
        })
    }.call(t, e, t, a), !(void 0 !== i && (a.exports = i))
}, function (a, t, e) {
    function i(a, t, i, s) {
    }

    a.exports = {addCollect: i}
}, function (a, t, e) {
    function i(a, t) {
        return o.exp.telphone.test(a) && "" != a ? (t.html("").hide(),
            !0) : "" == a ? (t.html("<i></i>请填写手机号码").show(), !1) : (t.html("<i></i>请填写正确的手机号码").show(), !1)
    }

    function s(a, t) {
        return o.exp.email.test(a) && "" !== a ? (t.html("").hide(), !0) : "" == a ? (t.html("<i></i>请填写邮箱地址").show(), !1) : (t.html("<i></i>请填写正确的邮箱地址").show(), !1)
    }

    function r(a, t, e, i) {
        var s = '<div class="dh-warp"><h3 class="dh-title">到货通知</h3><p class="dh-info">一旦该商品到货，我们会通过手机短信或邮件通知您</p><table class="dh-form"><tbody><tr><td class="dh-hd"><em class="nHeigh">*</em>手机号码：</td><td><input class="dh-input-text" id="dh-telNum" type="text"><span id="dh-telNum-warn"></span></td></tr><tr><td class="dh-hd"><em class="nHeigh">*</em>邮箱地址：</td><td><input class="dh-input-text" id="dh-email" type="text"><span id="dh-email-warn"></span></td></tr><tr><td>&nbsp;</td><td class="dh-label-box"><label class="gmform-label" for="dhAddCollection"><input class="gmform-input-check" name="dhAddCollection" id="dhAddCollection" type="checkbox">同时加入收藏夹</label></td></tr><tr><td>&nbsp;</td><td class="dh-btn-box"><a href="javascript:void(0)" class="dh-btn-submite" id="dh-submite">确定</a><a href="javascript:void(0)" class="dh-btn-cancel closeBtn">取消</a></td></tr></tbody></table></div>';
        o.pId = a, o.sId = t, o.loginId = e, o.regionId = i, n.showMask(s, function () {
        })
    }

    var n = e(5), o = {
        exp: {email: /^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9]+)@[A-Za-z0-9]+\.[a-z]{2,4}$/, telphone: /^(1)\d{10}$/},
        pId: "",
        skuId: "",
        loginId: "",
        regionId: ""
    };

}, function (a, t) {
    a.exports = function (a, t, e) {
        return $(a + ":visible").filter(function () {
            var a = $(this).offset().top;
            return a > 0 && a >= t && a <= e && !$(this).data("success") && ($(this).data("success", !0), !0)
        })
    }
}, function (a, t, e) {
    function i() {
        var a = $(this), t = a.parents(".item-tab"), e = "", s = a.attr("surl"), r = a.attr("sid"), n = a.attr("skuNo"),
            o = a.attr("name"), c = t.parents(".product-item").find(".productInfo");
        if (e = t.attr("isBigImg") ? a.attr("d_src") + "_275.jpg" : a.attr("d_src") + "_210.jpg", t.find(".item-pic img").attr("src", e), t.find(".item-pic a").attr("href", s), t.find(".item-pic a").attr("title", o), t.find(".item-name a").attr("href", s), t.find(".item-name a").html(o), t.find(".item-name a").attr("title", o), t.find(".item-comment-dispatching a").attr("href", s + "#gm-other-info"), t.find(".add-cart").attr("skuid", r), t.find(".add-collection").attr("skuid", r), a.addClass("current").siblings("li").removeClass("current"), c.attr("skuno", n), c.attr("skuid", r), a.hasClass("already")) t.find(".asynPrice").text("¥" + a.find(".icon-li-price").html()), t.find(".item-promotion").html(a.find(".icon-li-promotion").html()), t.find(".asynPrice").attr("skuid", r), c.attr("skuid", r); else {
            $("#product-box").undelegate(".icon-li", "mouseenter"), t.find(".asynPrice").attr("skuid", r), $priceDom = t.find(".asynPrice"), $buyMode = t.hasClass("taoStyle") ? "suit" : "single";
            var l = (new Date).getTime() + a.index();

        }
    }

    $("#product-box").delegate(".addTo-cart", "click", function () {
        var a = $(this), t = 0, e = a.attr("pid"), i = a.attr("skuid"), s = a.attr("taoType"), r = a.attr("shopFlag");
        "1" == a.attr("isHyg") && 6 != r && 5 != r && (t = 16), 2 == s && (t = 24), 3 == s && (t = 24, i = a.attr("taoSkuId"));
        try {
            GomeSa.track("AddCart", {quantity: 1, sku_id: i})
        } catch (a) {
        }
        a.attr("isMCard") ? window.open("//card" + cookieDomain + "?intcmp=" + a.attr("data-code") + "&skuType=" + a.attr("isMCard") + "&productId=" + e + "&skuId=" + i + "&count=1", "_blank") : window.open("//cart" + cookieDomain + "/addsuccess?intcmp=" + a.attr("data-code") + "&homesite=home&type=" + t + "&sid=" + i + "&pid=" + e + "&pcount=1&cr=0&_r=" + (new Date).getTime(), "_blank")
    }),
        $("#product-box").delegate(".add-collection", "click", function () {
        var a = $(this), t = a.attr("pid"), i = a.attr("skuid"), s = a.attr("pname");
        g.login(function () {
            e(11).addCollect(t, i, loginData.loginId, s)
        })
    }), $("#product-box").delegate(".next-buy", "click", function () {
        var a = $(this), t = a.attr("pid"), i = a.attr("skuid");
        g.login(function () {
            e(12).arriveNotice(t, i, loginData.loginId, pageData.regionId)
        })
    }), $("#product-box").delegate(".arbitrage-num", "mouseenter", function () {
        var a = $(this).parents(".product-item-tao"), t = $(this).index();
        if ($(this).hasClass("arbitrage-cur")) return !1;
        if ($(this).addClass("arbitrage-cur").siblings().removeClass("arbitrage-cur"), a.data("taoCompate")) a.find(".item-tab-warp").find(".item-tab").eq(t).show().siblings().hide(); else {
            var i = {products: []}, s = e(6).getTemplate("taogou"), r = "{{each products}}" + s + "{{/each}}",
                n = a.attr("id").split("-");

        }
    }), $("#product-box").delegate(".icon-prev", "click", function () {
        var a = $(this).parents(".item-pic-small-box"), t = a.find(".imgList"), e = a.find(".icon-next"),
            i = a.attr("index"), s = a.attr("curindex");
        $(this).hasClass("disable") || (++s <= i ? (e.removeClass("disable"), a.attr("curindex", s), t.animate({left: 37 * (s - i) + "px"}, 100)) : $(this).addClass("disable"))
    }), $("#product-box").delegate(".icon-next", "click", function () {
        var a = $(this).parents(".item-pic-small-box"), t = a.find(".imgList"), e = a.find(".icon-prev "),
            i = a.attr("index"), s = a.attr("curindex");
        $(this).hasClass("disable") || (--s >= 5 ? (e.removeClass("disable"), a.attr("curindex", s), t.animate({left: 37 * (s - i) + "px"}, 100)) : $(this).addClass("disable"))
    }), $("#product-box").delegate(".icon-li", "mouseenter", i), $("#product-box").delegate(".item-link", "click", function () {
        var a = $(this).parents("li.product-item").find(".productInfo").attr("skuid"), t = $(this).attr("data-code");
        try {
            GomeSa.track("ClickSearchResult", {
                search_query: pageData.searchkey,
                pagenum: pageData.currentPage,
                content_id: a,
                data_code: t,
                search_id: loggerData.t33
            })
        } catch (a) {
        }
        var i = $(this).parents(".product-item").find(".productInfo");
        e(4).cloudClickMonitor(i)
    });
    var s = null, r = null;
    $("#product-box").delegate(".product-item", "mouseenter mouseleave", function (a) {
        var t = $(this), i = t.find(".productInfo");
        return !t.hasClass("product-ad") && !t.data("hasOnline") && void ("mouseenter" == a.type ? (customerServiceCall.productList(t), r = setTimeout(function () {
            e(4).cloudClickMonitor(i, !0)
        }, 3e3)) : "mouseleave" == a.type && (clearTimeout(s), clearTimeout(r)))
    })
}, function (a, t) {
    function e(a, t, e) {
        var i = [], s = "";
        return {

        }
    }

    a.exports = {getShopGoods: e}
}, function (a, t, e) {
    var i;
    i = function (a, t, i) {
        function s(a, t) {
            var e = "", i = "", s = "";
            switch (n[a.priceType]) {
                case"normal":
                    e = "//item" + cookieDomain + "/" + a.productId + "-" + a.skuId + ".html?search_id=" + loggerData.t33, i = "#gm-other-info";
                    break;
                case"tuangou":
                case"qianggou":
                    e = "//item" + cookieDomain + "/" + a.productId + "-" + a.skuId + ".html?search_id=" + loggerData.t33, i = "#j-comment-section", t.parents("li").find(".productInfo").attr("tuanqiang", !0);
                    var r = t.find(".addTo-cart"), o = r.attr("data-code");
                    r.undelegate().replaceWith('<a class="add-cart" href="' + e + '" title="加入购物车" target="_blank" data-code="' + o + '"><i class="icon"></i></a>')
            }
            "tuangou" == n[a.priceType] ? s += '<span class="promotion-normal">团购价</span>' : "qianggou" == n[a.priceType] && (s += '<span class="promotion-normal">抢购价</span>'), t.find(".asynPrice").text(a.price ? "¥" + a.price : "暂无售价").after(s), "" != e && (t.find(".item-link").attr("href", e), t.find(".comment").attr("href", e + i)), t.parents("li").find(".productInfo").attr("price", a.price ? a.price : "暂无售价");
            var c = t.find(".asynPrice").attr("energyTag");
            if (c) {
                var l = parseFloat(t.find(".asynPrice").attr("recordPrice"));
                "-1" != l && l < a.price && t.find(".save-energy").hide()
            }
        }

        var r = e(13), n = {
            GOMEPRICE: "normal",
            SALEPRICE: "normal",
            AREAPRICE: "normal",
            AREASALEPRICE: "normal",
            TUANPRICE: "tuangou",
            RUSHBUYPRICE: "qianggou"
        };
        setInterval(function () {
            var a = $(window), t = a.scrollTop() + a.height() + 300, e = a.scrollTop() - 300,
                i = r(".asynPriceBox", e, t), n = r(".nSearchWarp img", e, t);
            if (n.length > 0 && $.each(n, function (a) {
                $(this).attr("src", $(this).attr("gome-src"))
            }), i.length > 0) {
                var o = $.Deferred(), c = function () {
                    var a = 0;
                    return $.each(i, function (t) {
                        var e = $(this), r = $(this).find(".asynPrice"),
                            n = $(this).hasClass("taoStyle") ? "suit" : "single", c = (new Date).getTime() + t;

                    }), o
                };
                $.when(c(o)).done(function () {
                    var a = [], t = [];
                    $.each(i, function (e) {
                        var i = $(this).parents("li").find(".productInfo");
                        if ("true" == i.attr("salestype")) {
                            if (!i.attr("appointment") && !i.attr("tuanqiang")) {
                                var s = {};
                                "" != i.attr("skuNo") && void 0 != i.attr("skuNo") && "" != i.attr("price") && void 0 != i.attr("price") && "暂无售价" != i.attr("price") && (s.sku = i.attr("skuNo"), s.price = i.attr("price"), t.push(s))
                            }
                        } else if (!i.attr("appointment") && !i.attr("tuanqiang")) {
                            var r = {};
                            "" != i.attr("skuid") && void 0 != i.attr("skuid") && "" != i.attr("skuType") && void 0 != i.attr("skuType") && "" != i.attr("thirdCat") && void 0 != i.attr("thirdCat") && "" != i.attr("brandCode") && void 0 != i.attr("brandCode") && "" != i.attr("price") && void 0 != i.attr("price") && "暂无售价" != i.attr("price") && (r.skuId = i.attr("skuid"), r.unitPrice = i.attr("price"), r.site = "homeSite", r.areaCode = pageData.regionId_2, r.skuType = i.attr("skuType"), r.categoryId = i.attr("thirdCat"), r.brandCode = i.attr("brandCode"), a.push(r))
                        }
                    })
                })
            }
        }, 1e3)
    }.call(t, e, t, a), !(void 0 !== i && (a.exports = i))
}, function (a, t) {
    !function (a) {
        var t = {
            pre: "上一页", next: "下一页", nav: function (a, t) {
                var e = "";
                if (t <= 1 || a > t) e = this.pager(1, 1); else {
                    if (e += 1 == a ? this.showPre(0) : this.showPre(1, a), t > 6) {
                        var i = 1;
                        if (a >= 5 && a <= t) e += 1 == a ? this.numStatusHTML(0, 1) : this.numStatusHTML(1, 1); else for (var s = 1; s < 4; s++) e += a == s ? this.numStatusHTML(0, s) : this.numStatusHTML(1, s);
                        if (e += a >= 5 ? "<span class='placeholder'></span>" : "", i = a - 2, i >= 3 && i < t - 2 && (e += a == i ? this.numStatusHTML(0, i) : this.numStatusHTML(1, i)), i = a - 1, i > 3 && i < t - 2 && (e += a == i ? this.numStatusHTML(0, i) : this.numStatusHTML(1, i)), i = a, i > 3 && i < t - 2 && (e += a == i ? this.numStatusHTML(0, i) : this.numStatusHTML(1, i)), i = a + 1, i > 3 && i < t - 2 && (e += a == i ? this.numStatusHTML(0, i) : this.numStatusHTML(1, i)), i = a + 2, i > 3 && i < t - 2 && (e += a == i ? this.numStatusHTML(0, i) : this.numStatusHTML(1, i)), e += a <= t - 4 ? "<span class='placeholder'></span>" : "", a <= t - 4) e += a == t ? this.numStatusHTML(0, t) : this.numStatusHTML(1, t); else for (var s = t - 2; s <= t; s++) e += a == s ? this.numStatusHTML(0, s) : this.numStatusHTML(1, s)
                    } else for (var s = 1; s <= t; s++) e += a == s ? this.numStatusHTML(0, s) : this.numStatusHTML(1, s);
                    e += a == t ? this.showNext(0) : this.showNext(1, a)
                }
                return e
            }, pager: function (a, t) {
                var e = "";
                return t <= 1 && (this.p = a, this.pn = t, e = this.showPre(0) + this.numStatusHTML(0, a) + this.showNext(0)), e
            }, go: function (a, t) {
                var e = this.nav(a, t) + this.btnHTML(a, t);
                return e
            }, numStatusHTML: function (a, t) {
                return 0 == a ? "<span class='cur'>" + t + "</span>" : "<a href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + t + ");return false;'>" + t + "</a>"
            }, showPre: function (a, t) {
                var e = "<a class='prev disable' href='javascript:void(0);'>&nbsp;" + this.pre + "<s class='icon-prev'></s><i></i></a>",
                    i = "<a class='prev' href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + (t - 1) + ");return false;'>&nbsp;" + this.pre + "<s class='icon-prev'></s><i></i></a>";
                return 0 == a ? e : i
            }, showNext: function (a, t) {
                var e = "<a class='next disable' href='javascript:void(0);'>" + this.next + "<s class='icon-next'></s><i></i></a>",
                    i = "<a class='next' href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + (t + 1) + ");return false;'>" + this.next + "<s class='icon-next'></s><i></i></a>";
                return 0 == a ? e : i
            }, btnHTML: function (a, t) {
                var e = "<label for='pagenum' class='txt-wrap'>到<input type='text' id='pNum' class='txt' bNum='" + t + "' value='" + a + "'>页</label><a href='javascript:void(0)' zdx='nBtn' class='btn'>确定</a>";
                return e
            }
        };
        a.fn.extend({
            ucPager: function (e) {
                var i = a.extend({
                    currentPage: 1, totalPage: 0, pageSize: 15, clickCallback: function () {
                    }
                }, e);
                return this.each(function () {
                    var e = a(this), s = function () {
                        i.clickCallback(i.currentPage)
                    };
                    e.html(t.go(i.currentPage, i.totalPage)), window.doPageNumSearch = function (a) {
                        i.currentPage = a.toString(), s()
                    }, window.doNextPageNum = function (a) {
                        i.currentPage == i.totalPage ? i.currentPage-- : i.currentPage++, doPageNumSearch(i.currentPage)
                    };
                    var r = a("#pNum", e);
                    r.on("keyup", function (t) {
                        var i = a(this).val(), s = /^\d+$/gi, r = /\d+/gi;
                        13 == t.which ? a(".btn", e).click() : s.test(i) || a(this).val(i.match(r) ? i.match(r)[0] : "")
                    }), a(".btn", e).bind("click", function () {
                        var t = a.trim(r.val());
                        t < 1 ? (r.val(1), i.currentPage = "1") : t > i.totalPage ? (r.val(i.totalPage), i.currentPage = i.totalPage.toString()) : (r.val(t), i.currentPage = t), s()
                    })
                })
            }
        })
    }(jQuery)
}, function (a, t, e) {
    var i;
    i = function (a, t, i) {
        $("#sort-price").bind("click", function (a) {
            if (!pageData.ajaxStatus) {
                var t = $(this);
                "21" === t.attr("data-sort") ? (t.attr("data-sort", "20").removeClass("price-down").addClass("price-up"), t.find("a").attr("href", t.attr("prdurl1")), t.find("a").attr("data-href", t.attr("prdurl1"))) : (t.attr("data-sort", "21").removeClass("price-up").addClass("price-down"), t.find("a").attr("href", t.attr("prdurl2")), t.find("a").attr("data-href", t.attr("prdurl2")))
            }
        }), $("#filter-order-box li").bind("click", function (a) {
            var t = $(this), i = t.attr("data-sort");
            if (pageData.sort !== i && !pageData.ajaxStatus) {
                if (pageData.ajaxStatus = !0, t.addClass("cur").siblings(".cur").removeClass("cur"), pageData.sort = i, pageData.currentPage = 1, pageData.ajaxURL = $(this).find("a").attr("data-href"), "sort-price" != t.attr("id") && $("#sort-price").attr("data-sort", "21").removeClass("price-up").addClass("price-down"), "品牌商品页" == window.pageName) return window.location.href = window.location.protocol + "//search" + cookieDomain + $(this).find("a").attr("data-href"), !1;
                $("html, body").animate({scrollTop: $("#product-left").offset().top}, 1), pageData.isShowALL = !1, e(1).getGoods()
            }
        }).find("a").click(function (a) {
            a.preventDefault()
        }), $(".product-showmore").on("click", "a", function (a) {
            a.preventDefault(), pageData.ajaxURL = $(this).attr("href"), pageData.isShowALL = !0, e(1).getGoods()
        }), $("#mp-next").bind("click", function (a) {
            if (a.preventDefault(), pageData.currentPage >= pageData.totalPage || pageData.ajaxStatus) return !1;
            pageData.ajaxStatus = !0, pageData.currentPage++;
            var t = e(1).goodsTop;
            e(1).getGoods(t)
        }), $("#mp-prev").bind("click", function (a) {
            if (a.preventDefault(), 1 == pageData.currentPage || pageData.ajaxStatus) return !1;
            pageData.ajaxStatus = !0, pageData.currentPage--;
            var t = e(1).goodsTop;
            e(1).getGoods(t)
        }), function () {
            var a = window.location.href;
            (a.indexOf("promoFlag=1") > 0 || 1 == a.split("-")[10]) && $("#specialScreening").addClass("checke")
        }(), $("#specialScreening").bind("click", function () {
            $(this).hasClass("checke") ? promoFlagVal = 0 : promoFlagVal = 1, e(2).dofacet("promoFlag", promoFlagVal)
        }), $(window).bind("scroll", function () {
            var a = null != $("#product-left").offset() ? $("#product-left").offset().top : 0;
            $(document).scrollTop() >= a ? $("#filter-box").addClass("onfixed") : $("#filter-box").removeClass("onfixed")
        })
    }.call(t, e, t, a), !(void 0 !== i && (a.exports = i))
}, function (a, t, e) {
    $(".priceRange-input input").bind({
        keydown: function () {
            $(this).val($(this).val().replace(/[A-Za-z`~!@#$%^&*_+=¥￥（）()<>?:"{},\/;'[\]！。......，…——、‘；—【】|？》《“：\\\-” \u4e00-\u9fa5]/g, ""))
        }, keyup: function () {
            $(this).val($(this).val().replace(/[A-Za-z`~!@#$%^&*_+=¥￥（）()<>?:"{},\/;'[\]！。......，…——、‘；—【】|？》《“：\\\-” \u4e00-\u9fa5]/g, ""))
        }, focus: function () {
            $(".filter-priceRange-box").addClass("filter-priceRange-click")
        }, blur: function () {
            "" == $(this).val() && $(this).val("¥")
        }
    }), $(".filter-priceRange-box").bind("mouseleave", function () {
        $(this).removeClass("filter-priceRange-click"), $(".priceRange-input input").trigger("blur")
    }).show(), $("#fc-btn-cancel").bind("click", function () {
        $(".priceRange-input input").val("¥")
    }), $("#fc-btn-ok").bind("click", function (a) {
        a.preventDefault();
        var t = "", i = $("#fc-lowPrice").val(), s = $("#fc-highPrice").val();
        return ("¥" != s || "¥" != i) && (t = "¥" == i ? "0x" + s : "¥" == s ? i + "x*" : Math.min(i, s) + "x" + Math.max(i, s), void e(2).dofacet("price", t))
    })
}, function (a, t) {
    function e(a) {

    }

    var i = '{{each lst as value}}\t    <li class="buy-items">\t        <div class="item-pic"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank"><img gome-src="{{value.iurl}}" src="//img.gomein.net.cn/images/grey.gif"></a></div>\t        <div class="item-name"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank">{{value.pn}}</a></div>\t        <div class="item-price"><b>¥{{value.price}}</b></div>\t    </li>\t{{/each}}';
    a.exports = {getData: e}
}, , function (a, t, e) {
    function i(a) {

    }

    var s = e(3).tpl;
    a.exports = {getData: i}
}, function (a, t) {
    function e(a) {

    }

    var i = '\t{{each lst as value}}\t    <li class="item">\t        <p class="pic">\t            <a target="_blank" href="{{value.purl}}" title="{{value.pn}}"><img src="{{value.iurl}}" alt="{{value.pn}}"></a>\t        </p>\t        <p class="name">\t            <a target="_blank" href="{{value.purl}}" target="_blank" title="{{value.pn}}">{{value.pn}}</a>\t        </p>\t        <p class="price">¥<span>{{value.price}}</span></p>\t        <p class="btn"><a class="buy" target="_blank" href="{{value.purl}}">立即抢购</a></p>\t    </li>\t{{/each}}\t';
    a.exports = {getData: e}
}, function (a, t) {
    function e(a) {

    }

    var i = '{{each lst as value index}}\t    <li class="active">\t        <p class="num {{if index<3}}num1{{else}}num2{{/if}}">{{index+1}}</p>\t        <p class="pname"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank">{{value.pn}}</a></p>\t        <div class="pdetail">\t            <p class="pic"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank"><img gome-src="{{value.iurl}}" src="//img.gomein.net.cn/images/grey.gif"></a></p>\t            <p class="name"><a class="bigD_item" track="{{value.maima_param}}" href="{{value.purl}}" target="_blank">{{value.pn}}</a></p>\t            <p class="price"><em>¥<span>{{value.price}}</span></em></p>\t        </div>\t    </li>\t{{/each}}';
    a.exports = {getData: e}
}, function (a, t, e) {
    var i = e(8).tpl;

}, function (a, t) {
    function e(a) {

    }

    var i = '\t{{each lst as value}}\t    <li class="item">\t        <p class="pic">\t            <a target="_blank" href="{{value.purl}}" title="{{value.pn}}"><img src="{{value.iurl}}" alt="{{value.pn}}"></a>\t        </p>\t        <p class="name">\t            <a target="_blank" href="{{value.purl}}" target="_blank" title="{{value.pn}}">{{value.pn}}</a>\t        </p>\t        <p class="price">¥<span>{{value.price}}</span></p>\t        <p class="btn"><a class="buy" target="_blank" href="{{value.purl}}">立即抢购</a></p>\t    </li>\t{{/each}}\t';
    a.exports = {getData: e}
}, , function (a, t, e) {
    function i() {

    }

    var s = '\t<div class="hot-cuxiao-list-box">\t    <span class="icon_tj">促销<br>活动</span>\t    <ul class="hot-cuxiao-list" id="hot-cuxiao-list">\t    {{each activity as value}}\t        <li><i></i><a href="{{value.url}}" target="_blank" data-code="9000000001-{{index+1}}">{{value.title}}</a></li>\t    {{/each}}\t    </ul>\t</div>',
        r = '\t{{each products as value}}\t<li class="item asynPriceBox" from="云眼">\t<p class="pic"><a target="_blank" href="{{value.sUrl}}" title="{{value.alt}}" data-code="9000000000-{{index}}"><img src="{{value.sImg}}" alt=""></a></p>\t<p class="name"><a target="_blank" href="{{value.sUrl}}" title="{{value.alt}}" data-code="9000000000-{{index}}">{{value.name}}</a></p>\t<p class="price asynPrice" pid="{{value.id}}" skuid="{{value.skuId}}"><span></span></p>\t<p class="btn"><a target="_blank" class=" buy" href="{{value.sUrl}}" data-code="9000000000-{{index}}">立即抢购</a></p>\t</li>\t{{/each}}';
    a.exports = {getData: i}
}, , , , function (a, t, e) {
    function i(a) {

    }

    var s = e(3).tpl;
    a.exports = {getData: i}
}, function (a, t) {
    function e(a) {

    }

    a.exports = {getData: e}
}]);