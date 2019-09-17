
window.loginData = window.loginData || {};
window.loginstatus = true;
window.HeartBeat = 1;
window.HeartTime;
var $atgregion = "atgregion";
if (location.host.indexOf("hk") != -1 && location.host.indexOf("item") != -1) {
    $domain = location.host.replace("item", "");
    $atgregion = "hwgregion"
}
$(function (t) {
    var e = a("bd_vid");
    i();

    function i() {
        if (e) t.cookie("s_e_mo_c", encodeURIComponent(window.location.href), {domain: $domain, path: "/"})
    }

    function a(t) {
        var e = window.location.search;
        if (e == "") {
            e = window.location.hash
        }
        var i = new RegExp(t + "=([^&]+)", "gi").exec(e);
        if (i != null) return i[1];
        return null
    }

    t(".gome-top li.drop").hover(function () {
        if (!t(this).data("open")) {
            var e = t(this).data("load");
        }
        t(this).addClass("hover");
        t(this).children(".public-dropdown").css("_height", "auto")
    }, function () {
        t(this).removeClass("hover");
        t(this).children(".public-dropdown").css("_height", "0")
    })
});
window.pop = {
    layerShow: function (t, e) {
        var i = $.browser.msie, a = i && $.browser.version < 7;
        if (!$("#Overlay").length > 0) {
            if (!a) {
                $("body").append("<div id='Overlay' style='background:#000;cursor:default;display:block;filter:alpha(opacity=15);opacity:0.15;height:100%;width:100%;position:fixed;left:0;top: 0;z-index:9999998'></div>")
            } else {
                $("html,body").css({height: "100%"});
                $("body").append("<div class='overlay' id='Overlay'><iframe  frameborder=0 id='frame1' style='filter:alpha(opacity=85);opacity: 0.15;height:100%;width:100%;'></iframe></div>")
            }
        }
        $("#Overlay").show();
        var o = $("#" + e);
        var n = (document.documentElement.clientHeight - o.height()) / 2;
        var l = (document.documentElement.clientWidth - o.width()) / 2;
        if (!a) {
            o.css({top: n, left: l, position: "fixed", "z-index": "9999999"}).addClass("chagetop").show()
        } else {
            o.css({position: "absolute", top: n, left: l, "z-index": "9999999"}).show()
        }
    }, closeLayer: function (t) {
        $("#Overlay,#" + t).hide()
    }
};

function popEvent() {
    signData.init()
}

window.recTrack = function () {
};
window.gomeClicki = function () {
};
(function (t) {
    function e() {
        if (typeof minCartType !== "undefined" && minCartType === "QYG") {
            return true
        }
        return false
    }
    var i = e() ? "/qiyegou" : "/home";
    var c = 10 * 1e3;
    var m = {
        renderCart: d,
        isFail: f,
        cartEvents: g,
        isEmptyCart: C,
        renderEmptyCart: T,
        minloadCart: O,
        doActionCart: u,
        reqChangeNum: h,
        qtyUpdate: y,
        tplHelp: p,
        twoScroll: I,
        STATE: {scroll: 0, scroll2: 0},
        twoCartH: s,
        firstLoadTime: 0,
        loadMinCartByLazy: x,
        hoverMinCart: b
    };

    function s(t) {
        var e = {upCart: 0, asideCart: 0};
        if (t.attr("carttype") !== "up") {
            e.asideCart = $("#gome-bar-cart").height() - 154;
            $(".gminicart .mini-nProductLists").css({"overflow-y": "auto", height: e.asideCart, "overflow-x": "hidden"})
        } else {
            return
        }
    }

    function p() {
        var t = function (t, e) {
            var i = 0;
            var n = 0;
            str_cut = new String;
            n = t.length;
            for (var r = 0; r < n; r++) {
                a = t.charAt(r);
                i++;
                if (escape(a).length > 4) {
                    i++
                }
                str_cut = str_cut.concat(a);
                if (i >= e) {
                    str_cut = str_cut.concat("...");
                    return str_cut
                }
            }
            if (i < e) {
                return t
            }
        };
        template.helper("$cutstr", t);
        template.helper("$toFixed", function (t) {
            return parseFloat(t || 0).toFixed(2)
        });
        template.helper("$showTuanProductTip", function (t) {
            var e = '<span style="position: absolute;display:inline-block;height:17px;width:17px;background-color:#f95b5a;color:#fff;font-size:12px;line-height:17px;overflow:hidden;text-align:center;font-weight:800;">';
            if (!t || !t.belonging) {
                return ""
            }
            if (t.inventoryState == "NO_GOODS" || t.inventoryState == "OFF") {
                return ""
            }
            if (t.belonging === "QIANG") {
                e += "抢"
            } else if (t.belonging === "TUAN") {
                e += "团"
            }
            e += "</span>";
            return e
        });
        template.helper("$toServiceType", function (t) {
            var e = {0: "延保", 1: "屏碎保", 2: "意外保"};
            if (!t || typeof t.serviceType === "undefined") {
                return ""
            }
            return e[t.serviceType] || ""
        });
        template.helper("$toDisplayName", function (t) {
            if (!t) {
                return ""
            }
            return t.displayName || ""
        });
        var e = {
            MJ: "满减",
            DPG: "搭配购",
            ZDZ: "整单折",
            MZ: "满折",
            JJHG: "加价购",
            TZ: "套装",
            POP_MZE: "满赠",
            POP_MJ: "满减",
            POP_MF: "满返",
            POP_MZH: "多买优惠",
            POP_GWQ: "购物券",
            KDP_MJ: "跨店铺满减",
            KDP_MM: "跨店铺满免",
            POP_I_MZH: "单品满折",
            I_ZE_GIFTS: "满赠",
            MUL_ZE_GIFTS: "满赠",
            I_ZE_COUPONS: "满返",
            I_ZE_DO: "满返",
            MUL_ZE_COUPONS: "满返",
            MUL_ZE_DO: "满返",
            NO: "不使用优惠"
        };
        template.helper("$isTypeTitle", function (t) {
            return e[t] ? true : false
        });
        template.helper("$showTypeTitle", function (i) {
            var a = i.type, n = e[a] || "促销", r = i.satisfied, o = "";
            if (r) {
                o += '<span class="ico-l">' + n + "</span>"
            } else {
                o += '<span class="ico-l-gray"><i></i>' + n + "</span>"
            }
            if (a === "DPG") {
                i.label = "搭配购优惠组合"
            }
            o += ' <span class="nLowLeight " title="' + i.label + '">' + t(i.label, 26) + "</span>";
            return o
        })
    }

    function u(t) {
        return function (e) {
            if (f(e)) {
                T(t, e);
                window.mCart.getCartNumber(true);
                return
            }
            e.isUpCart = t.attr("carttype") == "up";
            if (e.data) e.data.isUpCart = e.isUpCart;
            p();
            if (C(e)) {
                window.mCart.getCartNumber(true);
                T(t, e);
                return
            }
            d(t, e);
            I();
            s(t);
            $("#miniShoppingcartLoadId .mini-nProductLists").scrollTop(m.STATE.scroll);
            $(".gminicart .mini-nProductLists").scrollTop(m.STATE.scroll2);
            g(t, e);
            window.mCart.getCartNumber(true)
        }
    }

    function d(t, e) {
        var i = template.compile(n);
        return t.html(i(e.data))
    }

    function f(t) {
        return t.errCode !== "0"
    }

    function h(t, e) {
        var i = t.next().find("input").val();
        var a = t.parent("span").data("cid");
        return $.ajax({type: "get", dataType: "jsonp", data: {cid: a, pcount: e}, url: o.changeNum})
    }

    function v(t) {
        return $.ajax({type: "get", dataType: "jsonp", data: {cid: t.cid, pcount: t.pcount}, url: o.changeNum})
    }

    function y(t, e, i, a) {
        var n = t.parent().find("input").val();
        var r = n;
        var o = t.parent().data("limit");
        if (t.hasClass("mcart-count-disabled")) {
            t.off("click")
        }
        if (e == "up") {
            if (t.parent().attr("isClick") == "") {
                t.parent().attr("isClick", "yet");
                r++;
                if (r > o) {
                    t.parent().attr("isClick", "");
                    return
                }
                h(t, r).then(function () {
                    l().then(u(i))
                })
            }
        } else if (e == "down") {
            if (t.parent().attr("isClick") == "") {
                t.parent().attr("isClick", "yet");
                if (r > 1) {
                    r--
                } else {
                    t.parent().attr("isClick", "");
                    return
                }
                h(t, r).then(function () {
                    l().then(u(i))
                })
            }
        }
        t.next(".mcart-count-input").children("input").val(r);
        t.parent().prev(".quantity").html(r)
    }

    function I() {
        $("#miniShoppingcartLoadId .mini-nProductLists").scroll(function () {
            m.STATE.scroll = $(this).scrollTop()
        });
        $(".gminicart .mini-nProductLists").scroll(function () {
            m.STATE.scroll2 = $(this).scrollTop()
        })
    }

    function g(t, e) {
        t.find(".miniDel").off("click").on("click", function () {
            var e = $(this).attr("data-itemid");
            $.ajax({dataType: "jsonp", type: "get", url: o.delCartItem, data: {cid: e}}).then(function () {
                l().then(u(t))
            })
        });
        t.find(".mcart-count-input input").each(function () {
            var e = $(this);
            var i = $(this).parent().parent().prev(".quantity").html();
            $(this).on("input keyup ", function (a) {
                this.value = this.value.replace(/\D/g, "");
                var n = e.parent().parent().data("limit");
                if (a.keyCode == "13" || a.keyCode == "108") {
                    var r = this.value;
                    if (r > n) {
                        r = i
                    }
                    if (r < 1) {
                        r == 1
                    }
                    $(this).parent().parent().prev(".quantity").html(r);
                    var o = {cid: $(this).parent().parent().data("cid"), pcount: this.value};
                    v(o).then(function () {
                        l().then(u(t))
                    })
                }
            }).on("focus", function () {
                this.value == i
            }).on("blur", function () {
                if (i == this.value) {
                    return
                }
                $(this).parent().parent().prev(".quantity").html(this.value);
                var e = {cid: $(this).parent().parent().data("cid"), pcount: this.value};
                v(e).then(function () {
                    l().then(u(t))
                })
            })
        });
        t.find("[mcart-count-add]").each(function () {
            var i = $(this);
            var a = $(this).attr("type");
            $(this).on("click", function () {
                y(i, a, t, e)
            })
        });
        t.find("[mcart-count-sub]").each(function () {
            var i = $(this);
            var a = $(this).attr("type");
            $(this).on("click", function () {
                y(i, a, t, e)
            })
        })
    }

    function C(t) {
        if (t.data.miniCartProfileVO == null || t.data.miniCommerceItemsGroupVOs.length === 0) {
            return true
        }
    }

    function T(t, e) {
        var i = template.compile(r);
        var a = i(e);
        $("#commerceItemQuantityId").html(0);
        return t.html(a)
    }

    function O(t) {
        t = t || $("#miniShoppingcartLoadId");
        t.attr("carttype", "up");
    }

    function x(t, e) {
        var i = (new Date).getTime(), a = function () {
            e();
            m.firstLoadTime = i
        };
        if (!t) {
            e()
        }
        if (m.firstLoadTime == 0) {
            a()
        } else if (m.firstLoadTime + t <= i) {
            a()
        }
    }

    function b() {
        var t;
        var i = function () {
            if (e()) {
                return "/qiyegou/cart"
            } else {
                return "/"
            }
        }();
        $(".shopcartbox").hover(function () {
            clearTimeout(t);
            t = setTimeout(function () {
                $(".shopcartbox").addClass("hover")
            }, 150)
        }, function () {
            clearTimeout(t);
            $(this).removeClass("hover")
        });
        $(".cartlink, .ucCart").unbind().hover(function () {
            m.loadMinCartByLazy(c, m.minloadCart)
        })
    }

    (function k() {
        $.fn.extend({
            gminicart: function () {
                var t = $(this).addClass("gminicart");
                t.attr("carttype", "right");
                m.reqMiniCart().then(u(t))
            }
        });
        t.cartUnit = {minloadCart: m.minloadCart}
    })();
    $(function G() {
        m.hoverMinCart()
    })
})(window);
$(function () {
    var e = $("#gome-bar");
    var t = $("#gome-bar-border");
    var a = $("#gome-bar-box");
    var i = $("#gome-bar-border-bg");
    var s = $("#gome-bar-border-sm");
    var r = $("#gome-bar-border-tab");
    var o = $("#gome-aside-sale");
    var n = $("#gome-aside-coupon");
    var d = $("#gome-bar-btn-favorites");
    var m = $("#sale-body");
    var l = $("#time-body");
    var c = $("#coupon-body");
    var b = $("#member-body");
    var h = $("#favorites-body");
    var f = $("#gome-aside-cart");
    var p = true;
    var u = $("#gome-aside-app");
    var v, w, T, y, k, S;

    function x() {
        v = 231, w = $(".gome-aside").height(), T = $(".gome-bar-btn-sale a").height(), y = i.height();
        k = parseInt(v + w + T);
        S = parseInt(v + w + y);
        f.find("div").remove();
        $(".gome-bar-btn-time").remove();

        $(".gome-bar-box-loading").css("top", $(window).height() / 2 - 100);
        if (typeof window.prdInfo != "undefined") {
            if (window.prdInfo.shopNo == "") {
                c.attr("data-page", "item")
            } else {
                c.attr("data-page", "mall")
            }
        } else {
            $("#gome-aside-coupon,.gome-bar-btn-coupon,#gome-bar-coupon").remove();
            v = 195
        }
    }

    function D() {
        t.find("li").removeClass("hover");
        a.animate({right: "-240px"}, 300);
        $("#gome-bar-sale,#gome-bar-time,#gome-bar-coupon").removeAttr("data-animate").removeClass("gome-bar-out");
        setTimeout(function () {
            a.removeAttr("data-open");
            $("#gome-bar-sale,#gome-bar-time,#gome-bar-coupon").css("z-index", "995");
            if (u.length == 0) {
                t.hide();
                r.hide();
                f.hide()
            }
            if (s.css("display") == "block") {
                if ($(window).height() > S || $(window).height() > k) {
                    s.hide();
                    i.show()
                }
            }
        }, 300)
    }

    function j() {
        $("#gome-aside-app-code").removeClass("ie").css({
            transform: "translate(150%,0)",
            "-webkit-transform": "translate(150%,0)",
            transition: "all 0.2s ease-out",
            "-webkit-transition": "all 0.2s ease-out"
        });
        $("#gome-aside-app").removeClass("hover").find("i").removeClass("hover")
    }

    function C() {
        $("#gome-aside-app-code").find("img[gome-src]").each(function () {
            $(this).attr("src", $(this).attr("gome-src")).removeAttr("gome-src")
        });
        $("#gome-aside-app-code").addClass("ie").css({
            transform: "translate(0,0)",
            "-webkit-transform": "translate(0,0)",
            transition: "all 0.2s ease-out",
            "-webkit-transition": "all 0.2s ease-out"
        })
    }

    function I() {
        m.slimScroll({width: "225", height: "98%", size: "5px", color: "#fff", distance: "4px"})
    }

    function A() {
        l.slimScroll({width: "239", height: "97%", size: "5px", color: "#ccc", distance: "4px"})
    }

    function z() {
        b.slimScroll({width: "239", height: "97%", size: "5px", color: "#ccc", distance: "4px"})
    }

    function P() {
        h.slimScroll({width: "239", height: "97%", size: "5px", color: "#ccc", distance: "4px", opacity: 1})
    }

    function J() {
        $(document).click(function (i) {
            var s = $("#gome-aside-app,#gome-aside-app-code");
            var n = $(".coupon-item");
            if (!n.is(i.target) && n.has(i.target).length == 0) {
                $("#coupon-receive-list").find(".uuid").remove()
            }
            if (!s.is(i.target) && s.has(i.target).length == 0) {
                j()
            }
            if (!e.is(i.target) && e.has(i.target).length == 0) {
                if (a.attr("data-open")) {
                    if ($(i.target).is(".js-ok") || $(i.target).is(".js-cancal")) {
                        return false
                    } else {
                        D();
                        return
                    }
                }
                if ($(window).width() < 1e3) {
                    t.hide();
                    o.show();
                    f.show();
                    if (u.length == 0) {
                        t.hide();
                        r.hide();
                        f.hide()
                    }
                }
            }
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $("#gome-aside-backtop").css("visibility", "visible");
                $(".gome-aside").css({background: "#5c5c5c"})
            } else {
                $("#gome-aside-backtop").css("visibility", "hidden");
                $(".gome-aside").css({background: "none"})
            }
        })
    }

    function O() {
        if (i.attr("data-bg")) {
            i.css("background", "url(" + i.data("bg") + ") no-repeat").removeAttr("data-bg")
        }
        if (i.length > 0 && o.data("bg")) {
            var e = "";
            e += '<ul id="gome-bar-border-fix" data-bg="' + o.attr("data-bg") + '">								<li class="gome-aside-sale gome-bar-btn-sale" data-open="sale"><a><i class="">促</i></a></li>							 </ul>';
            t.append(e);
            var a = $("#gome-bar-border-fix");
            if (a.attr("data-bg")) {
                a.find("a").css("background", "url(" + a.data("bg") + ") no-repeat").removeAttr("data-bg")
            }
            o.find("a").css("background", "url(" + o.data("bg") + ") no-repeat");
            if ($(window).height() > k) {
                r.show();
                t.show();
                if ($(window).width() > 1e3 && $(window).height() > S) {
                    $("#gome-bar-border-fix").hide();
                    i.show();
                    $("#gome-bar-border-tab").css("top", parseInt(($(window).height() - v - y - w) / 2 + y))
                } else {
                    i.hide();
                    s.hide();
                    $("#gome-bar-border-tab").css("top", parseInt(($(window).height() - v - T - w) / 2 + T))
                }
            } else {
                f.show();
                t.hide();
                o.show();
                $("#gome-bar-border-tab").css("top", parseInt(($(window).height() - v - T - w) / 2 + T))
            }
        } else {
            t.show();
            r.show();
            p = false;
            $("#gome-bar-border-tab").css("top", parseInt(($(window).height() - v - w) / 2))
        }
    }

    function F(e) {
        $("#gome-bar-sale").css("background", "url(" + $("#gome-bar-sale").data("bg") + ") repeat-x #" + $("#gome-bar-sale").data("color")).removeAttr("data-bg data-color");

        m.attr("data-open", "true")
    }

    function M(e) {
        var i = e;

    }

    function _(e) {
        if (!a.attr("data-open")) {
            $("#gome-bar-" + e).css({
                "z-index": "997",
                visibility: "visible"
            }).attr("data-animate", "true").removeClass("gome-bar-out").siblings().removeAttr("data-animate").addClass("gome-bar-out").css({
                "z-index": "996",
                visibility: "visible"
            });
            a.attr("data-open", "true");
            a.animate({right: "35px"}, 300)
        } else if ($("#gome-bar-" + e).attr("data-animate")) {
            D()
        } else if ($("#gome-bar-" + e).css("z-index") == "995") {
            $(".gome-bar-box-wrap").each(function () {
                if ($(this).css("z-index") == "996") {
                    $(this).css({"z-index": "995", visibility: "hidden"})
                }
            });
            $("[data-animate]").removeAttr("data-animate").addClass("gome-bar-out").css({
                "z-index": "996",
                visibility: "visible"
            });
            $("#gome-bar-" + e).attr("data-animate", "true").removeClass("gome-bar-out").css({
                top: "100%",
                "z-index": "997",
                visibility: "visible"
            }).animate({top: "0"}, 400)
        } else if ($("#gome-bar-" + e).css("z-index") == "996") {
            $("[data-animate]").removeAttr("data-animate").addClass("gome-bar-out").css({"z-index": "996"});
            $("#gome-bar-" + e).attr("data-animate", "true").removeClass("gome-bar-out").css({
                top: "100%",
                "z-index": "997"
            }).animate({top: "0"}, 400)
        }
    }

    function H() {
        $(".gome-bar-close").click(function () {
            D()
        })
    }

    function R() {
        var e = 0;
        $(".gome-aside li").hover(function () {
            var t = $(this);
            if ($(this).attr("id") !== "gome-aside-app") {
                j()
            }
            $(this).find("img[gome-src]").each(function () {
                $(this).attr("src", $(this).attr("gome-src")).removeAttr("gome-src")
            });
            if (window.AsideSurvey) {
                var a = $("#gome-aside-survey");
                a.find("a").attr("href", AsideSurvey.url);
                a.find("p a").text(AsideSurvey.text)
            }
            e = setTimeout(function () {
                if (t.attr("id") === "gome-aside-app") {
                    C()
                }
                t.addClass("hover");
                t.find("i").addClass("hover");
                t.find("div").css({
                    transform: "translate(0,0)",
                    "-webkit-transform": "translate(0,0)",
                    transition: "all 0.2s ease-out",
                    "-webkit-transition": "all 0.2s ease-out"
                })
            }, 200)
        }, function () {
            clearTimeout(e);
            if (a.length > 0 && a.attr("data-open")) {
                j()
            }
            if ($(this).attr("id") !== "gome-aside-app") {
                $(this).find("div").css({
                    transform: "translate(110%,0)",
                    "-webkit-transform": "translate(110%,0)",
                    transition: "all 0.2s ease-out",
                    "-webkit-transition": "all 0.2s ease-out"
                });
                $(this).removeClass("hover");
                $(this).find("i").removeClass("hover")
            }
        })
    }

    function q() {
        B();
        E();
        G();
        R()
    }

    function B() {
        o.on("click", function () {
            t.hide();
            o.show();
            s.hide();
            f.show();
            if ($(window).width() > 1e3) {
                $("#gome-bar-border-bg .gome-bar-btn-sale").trigger("click")
            } else {
                i.hide();
                s.hide();
                $("#gome-bar-border-fix .gome-bar-btn-sale").trigger("click")
            }
            s.hide();
            r.hide();
            $("#gome-bar-border-fix").hide()
        });
        s.click(function () {
            $(this).hide();
            i.show()
        })
    }

    function E() {
        f.on("click", function () {
            t.show();
            r.show();
            o.hide();
            f.hide();
            if (i.css("display") == "block") {
                i.hide();
                s.hide();
                $("#gome-bar-border-tab").css("top", parseInt(($(window).height() - v - T - w) / 2 + T))
            }
            $(".gome-bar-btn-cart").trigger("click")
        })
    }

    function G() {
        $("#gome-aside-backtop").click(function () {
            $("body,html").animate({scrollTop: 0}, 500);
            return false
        })
    }

    (function U() {
        x();
        J();
        O();
        q();
        H();
        if (u.length == 0) {
            t.hide();
            r.hide();
            f.hide()
        }
    })();
    var K;
    var L;
    var Q;
    $(".gome-bar-btn-member").hover(function () {
        var e = $(this);
        if (!a.attr("data-open") || !$("#gome-bar-member").attr("data-animate")) {
            K && clearTimeout(K);
            Q = setTimeout(function () {
                e.addClass("hover");
                e.find(".gome-bar-btn-tip").addClass("hover")
            }, 200)
        }
    }, function () {
        Q && clearTimeout(Q);
        $(this).find(".gome-bar-btn-tip").removeClass("hover");
        if (!a.attr("data-open") || !$("#gome-bar-member").attr("data-animate")) {
            K = setTimeout($.proxy(function () {
                $(this).removeClass("hover")
            }, this), 200)
        }
    });
    $(".gome-bar-btn-favorites").hover(function () {
        var e = $(this);
        if (!a.attr("data-open") || !$("#gome-bar-favorites").attr("data-animate")) {
            L && clearTimeout(L);
            Q = setTimeout(function () {
                e.addClass("hover");
                e.find(".gome-bar-btn-tip").addClass("hover")
            }, 200)
        }
    }, function () {
        Q && clearTimeout(Q);
        $(this).find(".gome-bar-btn-tip").removeClass("hover");
        if (!a.attr("data-open") || !$("#gome-bar-favorites").attr("data-animate")) {
            L = setTimeout($.proxy(function () {
                $(this).removeClass("hover")
            }, this), 200)
        }
    })
});

function customerServiceCall() {
    this.customerArr = [];
    this.entryArr = [];
    this.brandidArr = [];
    this.categoryidArr = [];
    this.skuIdArr = [];
    this.loginState = "";
    this.entry = "";
    this.userId = "";
    this.SCN = "";
    this.province = "";
    this.orderId = "";
    this.shopId = "";
    this.shippingGroupId = "";
    this.productId = "";
    this.serviceUrl = ""
}

customerServiceCall.prototype = {
    initialCall: function () {
        var r = this;

        r.customerCallInit()
    }, arr_atgregion: function () {
        var r = ($.cookie("atgregion") || "11010200|北京市朝阳区朝外街道|11010000|11000000|110102002").split("|");
        return [r[3], r[2], r[0], r[4] == undefined ? r[0] + "1" : r[4]]
    }, customerCallInit: function () {
        var r = this;
        r.entry = $("[customer-service-button-id]").eq(0).attr("customer-entry");
        r.province = r.arr_atgregion().join("_");
        $("[customer-service-button-id]").each(function (t, i) {
            r.customerArr.push($(this).attr("customer-service-button-id"));
            r.entryArr.push($(this).attr("customer-entry"));
            r.brandidArr.push($(this).attr("brandid") ? $(this).attr("brandid") : "");
            r.categoryidArr.push($(this).attr("categoryid") ? $(this).attr("categoryid") : "");
            r.skuIdArr.push($(this).attr("skuId") ? $(this).attr("skuId") : "")
        });
        r.checkagent();
        r.customerJump()
    }, checkagent: function () {
        var r = this, t = {}, i = [], e = "";
        $.each(r.entryArr, function (i, e) {
            if (e == "product") {
                t.categoryid = r.categoryidArr.join();
                t.brandid = r.brandidArr.join();
                t.skuid = r.skuIdArr.join();
                t.area = r.province
            }
            if (e == "flagShip") {
                t.categoryid = r.categoryidArr.join();
                t.brandid = r.brandidArr.join();
                t.skuid = r.skuIdArr.join();
                t.area = r.province
            }
        });
        if (r.customerArr.length > 1) {
            e = "checkagentByBatchGet";
            $.each(r.entryArr, function (r, t) {
                if (t == "flagShip") {
                    t = "composite"
                }
                i.push(t)
            });
            t.entry = i.join();
            t.shopid = r.customerArr.join()
        } else {
            e = "checkagentByGet";
            t.entry = r.entry == "flagShip" ? "composite" : r.entry;
            t.shopid = r.customerArr.join()
        }
        if (r.customerArr.length > 0) {
            var o = Math.random().toString(36).substr(2);
            $.ajax({
                type: "get",
                url: r.serviceUrl + "/open/" + e,
                data: t,
                dataType: "jsonp",
                jsonpName: "ckdataGent" + o,
                success: function (t) {
                    if (t.status == "200") {
                        var i = t.data;
                        if (r.customerArr.length > 1) {
                            for (var e = 0; e < i.length; e++) {
                                if (i[e].show == "1") {
                                    $("[customer-service-button-id]").eq(e).show();
                                    $("[customer-service-button-id]").eq(e).attr("orgi", i[e].orgi);
                                    $("[customer-service-button-id]").eq(e).attr("orgitype", i[e].orgitype);
                                    i[e].online === 0 && $("[customer-service-button-id]").eq(e).addClass("customerServiceAshes")
                                } else {
                                    $("[customer-service-button-id]").eq(e).hide()
                                }
                            }
                        } else {
                            if (i.show == "1") {
                                $("[customer-service-button-id]").eq(0).attr("orgi", i.orgi);
                                $("[customer-service-button-id]").eq(0).attr("orgitype", i.orgitype);
                                i[e].online === 0 && $("[customer-service-button-id]").eq(0).addClass("customerServiceAshes")
                            } else {
                                $("[customer-service-button-id]").eq(0).hide()
                            }
                        }
                        r.customerArr = [];
                        r.entryArr = [];
                        r.brandidArr = [];
                        r.categoryidArr = [];
                        r.skuIdArr = []
                    }
                }
            })
        }
    }, customerJump: function () {
        var r = this;
        $("[customer-service-button-id]").off("click").on("click", function () {
            var t = $(this).attr("customer-entry") == "flagShip" ? "composite" : $(this).attr("customer-entry");
            r.orderId = $(this).attr("orderId") ? $(this).attr("orderId") : "";
            r.shippingGroupId = $(this).attr("shippingGroupId") ? $(this).attr("shippingGroupId") : "";
            r.skuId = $(this).attr("skuId") ? $(this).attr("skuId") : "";
            r.orgi = $(this).attr("orgi") ? $(this).attr("orgi") : "";
            r.productId = $(this).attr("productid") ? $(this).attr("productid") : "";

        })
    }, productList: function (r) {
        var t = this, i = {}, e = r.find(".online-server"), o = e.attr("skuId"), s = e.attr("customer-entry"),
            n = e.attr("productid"), a = e.attr("categoryid"), c = e.attr("brandid"), d = e.attr("shopId");
        if (e.attr("orgi") == undefined) {
            i.skuid = o;
            i.entry = s;
            i.productid = n;
            i.categoryid = a;
            i.brandid = c;
            i.area = t.province;
            i.shopid = d;
            $.ajax({
                type: "get",
                url: t.serviceUrl + "/open/checkagentByGet",
                data: i,
                dataType: "jsonp",
                jsonpName: "ckdataGentByGet",
                success: function (r) {
                    if (r.status == "200") {
                        if (r.data.show == "1") {
                            e.show();
                            e.attr("orgi", r.data.orgi);
                            r.data.online === 0 && e.addClass("customerServiceAshes")
                        } else {
                            e.hide();
                            e.attr("orgi", "")
                        }
                    }
                }
            })
        }
    }
};
var customerServiceCall = new customerServiceCall;
if ($("[customer-service-button-id]").length > 0 && $("[customer-service-button-id]").eq(0).attr("isCall") != "prohibit") {
    customerServiceCall.initialCall()
}
$(function () {
    var a = {
        init: function () {
            this.adsData = null;
            this._dealPosterData()
        }, _dealPosterData: function () {
            if (typeof window.publicdefault != "undefined") {
                var a = "";
                if ($("#gome-sitemap").length > 0 && $("#gome-sitemap").attr("data-type")) {
                    a = "public" + $("#gome-sitemap").attr("data-type")
                }

                function t(a, t) {
                    if (!t) return a;
                    for (var e in t) {
                        if (t[e].length > 0) {
                            a[e] = t[e]
                        }
                    }
                    return a
                }

                this.adsData = t(publicdefault, window[a]);
                this._dealPoster()
            }
        }, _removeDomForHomePage: function () {
            $("#gome-topad-sm, #logo-gif, .hdrsideRoll").remove()
        }, _dealPoster: function () {
            var a = this.adsData.top;
            var t = this.adsData.gif;
            var e = this.adsData.category;
            if (a && a.length > 0 && $("#gome-topad-sm").length > 0) {
                this._dealTopAd()
            } else {
                $("#gome-topad-sm").remove()
            }
            if (t && t.length > 0 && $("#logo-gif").length > 0) {
                var o = '<a data-code="' + t[0].code + '" rel="nofollow" target="_blank" href="' + t[0].href + '">' + '    <img width="100" height="50" src="' + t[0].src + '">' + "</a>";
                $("#logo-gif").html(o)
            }
            if ($("#gome-head").length && $("#gome-head").data("need-slogan-judge") && t.length === 0) {
                if ($("#logo-gif").length > 0) {
                    $("#logo-gif").remove()
                }
                $("#logo").after('<div id="slogan"></div>')
            }
            if (e && e.length > 0 && $(".hdrsideRoll").length > 0) {
                this._dealHeadRightSiderAd()
            }
        }, _dealTopAd: function () {
            var a, t = this.adsData.top, e = this.adsData.poster, o = "", d = "", i = "", l = "";
            topAdHtml = "", curAdData = null;
            if (e && e.length > 0) {
                curAdData = e[0]
            } else {
                a = $.cookie("_index_ad");
                if (!a) {
                    a = 0
                } else {
                    if (a >= t.length - 1) {
                        a = 0
                    } else {
                        a++
                    }
                }
                curAdData = t[a];
                $.cookie("_index_ad", a, {expires: "1", path: "/"})
            }
            o = curAdData.href;
            d = curAdData.code;
            i = curAdData.src;
            l = curAdData.bgcolor || "#fff";
            topAdHtml = '<div class="gome-topad-box wbox"><a rel="nofollow" target="_blank" id="gome-topad-sm-pic" data-code="' + d + '"  href="' + o + '">' + '    <img src="' + i + '"/>' + "</a>" + '<a class="close-gome-topad" href="javascript:void(0)">' + "    <i>关闭</i>" + "</a></div>";
            $("#gome-topad-sm").css("background", l).html(topAdHtml);
            $("#gome-topad-sm .close-gome-topad").click(function () {
                $("#gome-topad-sm").css("display", "none")
            })
        }, _dealHeadRightSiderAd: function () {
            var a = '<div class="adnavside" data-roll="hdrSideUp">' + '<ul class="hd-clickscroll js-tads-clsul">';
            $.each(this.adsData.category, function (t, e) {
                a += "<li>" + '    <a data-code="' + e.code + '" rel="nofollow" target="_blank" href="' + e.href + '">' + '        <img width="170" height="40" src="' + e.src + '"/>' + "    </a>" + "</li>"
            });
            a += "</ul></div>" + '<div class="hdrsRollbtn">' + '    <a class="j-hdrbtn-up" href="javascript:;" data-btn="goUp"><i></i></a>' + '    <a class="j-hdrbtn-down" href="javascript:;" data-btn="goDown"><i></i></a>' + "</div>";
            $(".hdrsideRoll").html(a);
            $('[data-roll="hdrSideUp"]').gScroll({
                isAuto: true,
                isImgLoad: true,
                showNum: 1,
                stepLen: 1,
                speed: 6e3,
                type: "vertical",
                dataOriginal: "gome-src",
                btnGo: {left: '[data-btn="goDown"]', right: '[data-btn="goUp"]'}
            })
        }
    };
    a.init()
});
/*! Mon Jul 01 2019 08:59:18 GMT+0800 (CST) */
$(function () {
    if (!$("body").attr("data-page")) {
        var t = window.location.href.match(/https?:\/\/(.*?)(?=\.|:)/);
        $("body").attr("data-page", t[1])
    }
    $(document).on("mousedown keydown", "[data-code]", function () {
        var t = $("body").data("page");
        var i = $(this).data("code");
        var e = $(this).attr("href");
        var n = /(intcmp=[^&]+?)(&|$)/i;
        if (e == null || e == "" || e.substring(0, 4) !== "http" && e.substring(0, 2) !== "//") {
            return
        } else if (e.indexOf("#") > -1 && e.indexOf("?") > -1) {
            mao = e.substring(e.indexOf("#"));
            e = e.substring(0, e.indexOf("#")).replace(n, "");
            if (e.substring(e.indexOf("?") + 1) == "") {
                $(this).attr("href", e.substring(0, e.indexOf("?")) + "?intcmp=" + t + "-" + i + mao)
            } else {
                $(this).attr("href", e.substring(0, e.indexOf("?")) + "?intcmp=" + t + "-" + i + "&" + e.substring(e.indexOf("?") + 1) + mao)
            }
        } else if (e.indexOf("#") > -1) {
            $(this).attr("href", e.substring(0, e.indexOf("#")) + "?intcmp=" + t + "-" + i + e.substring(e.indexOf("#")))
        } else if (e.indexOf("?") > -1) {
            e = e.replace(n, "");
            if (e.substring(e.indexOf("?") + 1) == "") {
                $(this).attr("href", e.substring(0, e.indexOf("?")) + "?intcmp=" + t + "-" + i)
            } else {
                $(this).attr("href", e.substring(0, e.indexOf("?")) + "?intcmp=" + t + "-" + i + "&" + e.substring(e.indexOf("?") + 1))
            }
        } else {
            $(this).attr("href", e + "?intcmp=" + t + "-" + i)
        }
    })
});
/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
(function () {
    function N(p, r) {
        function q(a) {
            if (q[a] !== w) return q[a];
            var c;
            if ("bug-string-char-index" == a) c = "a" != "a"[0]; else if ("json" == a) c = q("json-stringify") && q("json-parse"); else {
                var e;
                if ("json-stringify" == a) {
                    c = r.stringify;
                    var b = "function" == typeof c && s;
                    if (b) {
                        (e = function () {
                            return 1
                        }).toJSON = e;
                        try {
                            b = "0" === c(0) && "0" === c(new t) && '""' == c(new A) && c(u) === w && c(w) === w && c() === w && "1" === c(e) && "[1]" == c([e]) && "[null]" == c([w]) && "null" == c(null) && "[null,null,null]" == c([w, u, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' ==
                                c({a: [e, !0, !1, null, "\x00\b\n\f\r\t"]}) && "1" === c(null, e) && "[\n 1,\n 2\n]" == c([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == c(new C(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == c(new C(864E13)) && '"-000001-01-01T00:00:00.000Z"' == c(new C(-621987552E5)) && '"1969-12-31T23:59:59.999Z"' == c(new C(-1))
                        } catch (f) {
                            b = !1
                        }
                    }
                    c = b
                }
                if ("json-parse" == a) {
                    c = r.parse;
                    if ("function" == typeof c) try {
                        if (0 === c("0") && !c(!1)) {
                            e = c('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var n = 5 == e.a.length && 1 === e.a[0];
                            if (n) {
                                try {
                                    n = !c('"\t"')
                                } catch (d) {
                                }
                                if (n) try {
                                    n =
                                        1 !== c("01")
                                } catch (g) {
                                }
                                if (n) try {
                                    n = 1 !== c("1.")
                                } catch (m) {
                                }
                            }
                        }
                    } catch (X) {
                        n = !1
                    }
                    c = n
                }
            }
            return q[a] = !!c
        }

        p || (p = k.Object());
        r || (r = k.Object());
        var t = p.Number || k.Number, A = p.String || k.String, H = p.Object || k.Object, C = p.Date || k.Date,
            G = p.SyntaxError || k.SyntaxError, K = p.TypeError || k.TypeError, L = p.Math || k.Math,
            I = p.JSON || k.JSON;
        "object" == typeof I && I && (r.stringify = I.stringify, r.parse = I.parse);
        var H = H.prototype, u = H.toString, v, B, w, s = new C(-0xc782b5b800cec);
        try {
            s = -109252 == s.getUTCFullYear() && 0 === s.getUTCMonth() && 1 === s.getUTCDate() &&
                10 == s.getUTCHours() && 37 == s.getUTCMinutes() && 6 == s.getUTCSeconds() && 708 == s.getUTCMilliseconds()
        } catch (Q) {
        }
        if (!q("json")) {
            var D = q("bug-string-char-index");
            if (!s) var x = L.floor, M = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], E = function (a, c) {
                return M[c] + 365 * (a - 1970) + x((a - 1969 + (c = +(1 < c))) / 4) - x((a - 1901 + c) / 100) + x((a - 1601 + c) / 400)
            };
            (v = H.hasOwnProperty) || (v = function (a) {
                var c = {}, e;
                (c.__proto__ = null, c.__proto__ = {toString: 1}, c).toString != u ? v = function (a) {
                    var c = this.__proto__;
                    a = a in (this.__proto__ = null, this);
                    this.__proto__ =
                        c;
                    return a
                } : (e = c.constructor, v = function (a) {
                    var c = (this.constructor || e).prototype;
                    return a in this && !(a in c && this[a] === c[a])
                });
                c = null;
                return v.call(this, a)
            });
            B = function (a, c) {
                var e = 0, b, f, n;
                (b = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                f = new b;
                for (n in f) v.call(f, n) && e++;
                b = f = null;
                e ? B = 2 == e ? function (a, c) {
                    var e = {}, b = "[object Function]" == u.call(a), f;
                    for (f in a) b && "prototype" == f || v.call(e, f) || !(e[f] = 1) || !v.call(a, f) || c(f)
                } : function (a, c) {
                    var e = "[object Function]" == u.call(a), b, f;
                    for (b in a) e && "prototype" ==
                    b || !v.call(a, b) || (f = "constructor" === b) || c(b);
                    (f || v.call(a, b = "constructor")) && c(b)
                } : (f = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), B = function (a, c) {
                    var e = "[object Function]" == u.call(a), b,
                        h = !e && "function" != typeof a.constructor && F[typeof a.hasOwnProperty] && a.hasOwnProperty || v;
                    for (b in a) e && "prototype" == b || !h.call(a, b) || c(b);
                    for (e = f.length; b = f[--e]; h.call(a, b) && c(b)) ;
                });
                return B(a, c)
            };
            if (!q("json-stringify")) {
                var U = {
                    92: "\\\\", 34: '\\"', 8: "\\b",
                    12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"
                }, y = function (a, c) {
                    return ("000000" + (c || 0)).slice(-a)
                }, R = function (a) {
                    for (var c = '"', b = 0, h = a.length, f = !D || 10 < h, n = f && (D ? a.split("") : a); b < h; b++) {
                        var d = a.charCodeAt(b);
                        switch (d) {
                            case 8:
                            case 9:
                            case 10:
                            case 12:
                            case 13:
                            case 34:
                            case 92:
                                c += U[d];
                                break;
                            default:
                                if (32 > d) {
                                    c += "\\u00" + y(2, d.toString(16));
                                    break
                                }
                                c += f ? n[b] : a.charAt(b)
                        }
                    }
                    return c + '"'
                }, O = function (a, c, b, h, f, n, d) {
                    var g, m, k, l, p, r, s, t, q;
                    try {
                        g = c[a]
                    } catch (z) {
                    }
                    if ("object" == typeof g && g) if (m = u.call(g), "[object Date]" != m || v.call(g,
                            "toJSON")) "function" == typeof g.toJSON && ("[object Number]" != m && "[object String]" != m && "[object Array]" != m || v.call(g, "toJSON")) && (g = g.toJSON(a)); else if (g > -1 / 0 && g < 1 / 0) {
                        if (E) {
                            l = x(g / 864E5);
                            for (m = x(l / 365.2425) + 1970 - 1; E(m + 1, 0) <= l; m++) ;
                            for (k = x((l - E(m, 0)) / 30.42); E(m, k + 1) <= l; k++) ;
                            l = 1 + l - E(m, k);
                            p = (g % 864E5 + 864E5) % 864E5;
                            r = x(p / 36E5) % 24;
                            s = x(p / 6E4) % 60;
                            t = x(p / 1E3) % 60;
                            p %= 1E3
                        } else m = g.getUTCFullYear(), k = g.getUTCMonth(), l = g.getUTCDate(), r = g.getUTCHours(), s = g.getUTCMinutes(), t = g.getUTCSeconds(), p = g.getUTCMilliseconds();
                        g = (0 >= m || 1E4 <= m ? (0 > m ? "-" : "+") + y(6, 0 > m ? -m : m) : y(4, m)) + "-" + y(2, k + 1) + "-" + y(2, l) + "T" + y(2, r) + ":" + y(2, s) + ":" + y(2, t) + "." + y(3, p) + "Z"
                    } else g = null;
                    b && (g = b.call(c, a, g));
                    if (null === g) return "null";
                    m = u.call(g);
                    if ("[object Boolean]" == m) return "" + g;
                    if ("[object Number]" == m) return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                    if ("[object String]" == m) return R("" + g);
                    if ("object" == typeof g) {
                        for (a = d.length; a--;) if (d[a] === g) throw K();
                        d.push(g);
                        q = [];
                        c = n;
                        n += f;
                        if ("[object Array]" == m) {
                            k = 0;
                            for (a = g.length; k < a; k++) m = O(k, g, b, h, f, n, d), q.push(m === w ? "null" :
                                m);
                            a = q.length ? f ? "[\n" + n + q.join(",\n" + n) + "\n" + c + "]" : "[" + q.join(",") + "]" : "[]"
                        } else B(h || g, function (a) {
                            var c = O(a, g, b, h, f, n, d);
                            c !== w && q.push(R(a) + ":" + (f ? " " : "") + c)
                        }), a = q.length ? f ? "{\n" + n + q.join(",\n" + n) + "\n" + c + "}" : "{" + q.join(",") + "}" : "{}";
                        d.pop();
                        return a
                    }
                };
                r.stringify = function (a, c, b) {
                    var h, f, n, d;
                    if (F[typeof c] && c) if ("[object Function]" == (d = u.call(c))) f = c; else if ("[object Array]" == d) {
                        n = {};
                        for (var g = 0, k = c.length, l; g < k; l = c[g++], (d = u.call(l), "[object String]" == d || "[object Number]" == d) && (n[l] = 1)) ;
                    }
                    if (b) if ("[object Number]" ==
                        (d = u.call(b))) {
                        if (0 < (b -= b % 1)) for (h = "", 10 < b && (b = 10); h.length < b; h += " ") ;
                    } else "[object String]" == d && (h = 10 >= b.length ? b : b.slice(0, 10));
                    return O("", (l = {}, l[""] = a, l), f, n, h, "", [])
                }
            }
            if (!q("json-parse")) {
                var V = A.fromCharCode,
                    W = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r"}, b, J,
                    l = function () {
                        b = J = null;
                        throw G();
                    }, z = function () {
                        for (var a = J, c = a.length, e, h, f, k, d; b < c;) switch (d = a.charCodeAt(b), d) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return e =
                                    D ? a.charAt(b) : a[b], b++, e;
                            case 34:
                                e = "@";
                                for (b++; b < c;) if (d = a.charCodeAt(b), 32 > d) l(); else if (92 == d) switch (d = a.charCodeAt(++b), d) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        e += W[d];
                                        b++;
                                        break;
                                    case 117:
                                        h = ++b;
                                        for (f = b + 4; b < f; b++) d = a.charCodeAt(b), 48 <= d && 57 >= d || 97 <= d && 102 >= d || 65 <= d && 70 >= d || l();
                                        e += V("0x" + a.slice(h, b));
                                        break;
                                    default:
                                        l()
                                } else {
                                    if (34 == d) break;
                                    d = a.charCodeAt(b);
                                    for (h = b; 32 <= d && 92 != d && 34 != d;) d = a.charCodeAt(++b);
                                    e += a.slice(h, b)
                                }
                                if (34 == a.charCodeAt(b)) return b++, e;
                                l();
                            default:
                                h =
                                    b;
                                45 == d && (k = !0, d = a.charCodeAt(++b));
                                if (48 <= d && 57 >= d) {
                                    for (48 == d && (d = a.charCodeAt(b + 1), 48 <= d && 57 >= d) && l(); b < c && (d = a.charCodeAt(b), 48 <= d && 57 >= d); b++) ;
                                    if (46 == a.charCodeAt(b)) {
                                        for (f = ++b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++) ;
                                        f == b && l();
                                        b = f
                                    }
                                    d = a.charCodeAt(b);
                                    if (101 == d || 69 == d) {
                                        d = a.charCodeAt(++b);
                                        43 != d && 45 != d || b++;
                                        for (f = b; f < c && (d = a.charCodeAt(f), 48 <= d && 57 >= d); f++) ;
                                        f == b && l();
                                        b = f
                                    }
                                    return +a.slice(h, b)
                                }
                                k && l();
                                if ("true" == a.slice(b, b + 4)) return b += 4, !0;
                                if ("false" == a.slice(b, b + 5)) return b += 5, !1;
                                if ("null" == a.slice(b,
                                        b + 4)) return b += 4, null;
                                l()
                        }
                        return "$"
                    }, P = function (a) {
                        var c, b;
                        "$" == a && l();
                        if ("string" == typeof a) {
                            if ("@" == (D ? a.charAt(0) : a[0])) return a.slice(1);
                            if ("[" == a) {
                                for (c = []; ; b || (b = !0)) {
                                    a = z();
                                    if ("]" == a) break;
                                    b && ("," == a ? (a = z(), "]" == a && l()) : l());
                                    "," == a && l();
                                    c.push(P(a))
                                }
                                return c
                            }
                            if ("{" == a) {
                                for (c = {}; ; b || (b = !0)) {
                                    a = z();
                                    if ("}" == a) break;
                                    b && ("," == a ? (a = z(), "}" == a && l()) : l());
                                    "," != a && "string" == typeof a && "@" == (D ? a.charAt(0) : a[0]) && ":" == z() || l();
                                    c[a.slice(1)] = P(z())
                                }
                                return c
                            }
                            l()
                        }
                        return a
                    }, T = function (a, b, e) {
                        e = S(a, b, e);
                        e ===
                        w ? delete a[b] : a[b] = e
                    }, S = function (a, b, e) {
                        var h = a[b], f;
                        if ("object" == typeof h && h) if ("[object Array]" == u.call(h)) for (f = h.length; f--;) T(h, f, e); else B(h, function (a) {
                            T(h, a, e)
                        });
                        return e.call(a, b, h)
                    };
                r.parse = function (a, c) {
                    var e, h;
                    b = 0;
                    J = "" + a;
                    e = P(z());
                    "$" != z() && l();
                    b = J = null;
                    return c && "[object Function]" == u.call(c) ? S((h = {}, h[""] = e, h), "", c) : e
                }
            }
        }
        r.runInContext = N;
        return r
    }

    var K = typeof define === "function" && define.amd, F = {"function": !0, object: !0},
        G = F[typeof exports] && exports && !exports.nodeType && exports, k = F[typeof window] &&
        window || this, t = G && F[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    !t || t.global !== t && t.window !== t && t.self !== t || (k = t);
    if (G && !K) N(k, G); else {
        var L = k.JSON, Q = k.JSON3, M = !1, A = N(k, k.JSON3 = {
            noConflict: function () {
                M || (M = !0, k.JSON = L, k.JSON3 = Q, L = Q = null);
                return A
            }
        });
        k.JSON = {parse: A.parse, stringify: A.stringify}
    }
    K && define(function () {
        return A
    })
}).call(this);
(function (e) {
    e.fn.ginputfocus = function (s) {
        var i = {curClass: "cur"};
        var s = e.extend(i, s), t = s.curClass;
        return this.each(function () {
            var s = e(this).siblings("label");
            var i = e("#search-type-dropdown").find(".search-type-selected");
            e(s).click(function () {
                e(this).hide();
                e(this).siblings("input").focus()
            });
            e(this).focus(function () {
                if (i.attr("data-selected") === "goods") {
                    e(this).parent().addClass(t);
                    e(this).siblings("label").hide()
                }
            });
            e(this).blur(function () {
                if (i.attr("data-selected") === "goods") {
                    e(this).parent().removeClass(t);
                    if (this.value == "") {
                        e(this).siblings("label").show()
                    }
                }
            })
        })
    }
})(jQuery);
var browserRule = /^.*((Safari))+.*$/;
if (browserRule.test(navigator.userAgent)) {
    window.onpageshow = function (e) {
        if (e.persisted) {
            window.location.reload()
        }
    }
}

function saveHeaderSearchHistory(e) {
    var o = [], r = $.cookie("headerSearchHistory");
    if (r) {
        o = JSON.parse(r) || []
    }
    for (var a = 0; a < o.length; a++) {
        if (e === o[a]) {
            o.splice(a, 1)
        }
    }
    o.unshift(e);
    if (o.length > 10) {
        o.splice(10, o.length - 10)
    }
}

function doSearch() {
    var e = $("#search-type-dropdown").find(".search-type-selected");
    var o = e.attr("data-selected");
    var a = $("#searchInput");
    var t = a.val();
    var i = "";
    if (a.attr("mode")) {
        var n = a.attr("pos");
        var s = a.attr("sq");
        var h = a.attr("mode");
        i = "&pos=" + n + "&sq=" + s + "&search_mode=" + h;
        a.attr("pos", "").attr("sq", "").attr("mode", "");
        a.attr({pos: "", sq: "", mode: ""})
    } else {
        i = "&search_mode=normal"
    }
    if (o === "goods" && $.trim(t) === "") {
        var c = $("#keyLabel").text();
        $("#keyLabel").hide();
        a.val(c);
        t = c
    }
    i += o === "goods" ? "&reWrite=true" : "";
    if (t.length > 100) {
        t = t.substring(0, 100);
        a.val(t)
    }
    if ($.trim(t) !== "" && o === "goods") {
        saveHeaderSearchHistory($.trim(t));
        i += "&instock=1"
    }
    if ($.trim(t) !== "") {
        location.href = r[o] + encodeURIComponent(t) + "&searchType=" + o + i
    }
    return false
}
//用于搜索
$(function () {
    if ($("#searchInput").length > 0) {
    }
    $("#searchInput").ginputfocus();
    if (navigator.userAgent.toLowerCase().indexOf("webkit") >= 0) {
        $("#topSearchHover").append('<a href="//js.gomein.net.cn/search/voice/search.html" target="_blank"><div class="voice-search"></div></a>')
    }
});

function getDefaultKey(e) {
    var o = e.split(";"), r = 0, a = [];
    $.each(o, function (e, o) {
        var t = o.split(","), i = t[1] | 0;
        for (var e = 0; e < i; e++) a.push(t[0]);
        r += i
    });
    return a[Math.random() * r | 0] || ""
}

$(function () {
    var e = $("#keyLabel").attr("default");
    var o = function () {
        var o = getDefaultKey(e);
        $("#keyLabel").text(o.replace(/(^\s*)|(\s*$)/g, ""))
    };
    if (e) {
        o();
        setInterval(function () {
            o()
        }, 5e3)
    }
    var r = $("#searchInput").val();
    if (r == null || r == "") {
        $("#keyLabel").show()
    } else {
        $("#keyLabel").hide()
    }
});
$(function () {
    var e = $(".hotkeyword");
    var o = {};
    var r = /cat\d+/;
    var a = "";
    e.show();
    if ($("body").hasClass("home")) {
        return
    }
    if (window.prdInfo && window.prdInfo.shopFlag == "2" || window.prdInfo && window.prdInfo.shopFlag == "3") {
        a = ""
    } else if (window.prdInfo && window.prdInfo.thirdCategoryId) {
        a = prdInfo.thirdCategoryId
    } else if (r.test(window.location.href)) {
        a = window.location.href.match(r)[0]
    }
});
$(function () {
    $(".code-sm").hover(function () {
        $(this).find("img[gome-src]").each(function () {
            $(this).attr("src", $(this).attr("gome-src")).removeAttr("gome-src")
        });
        $(this).children("div").css("display", "block")
    }, function () {
        $(this).children("div").css("display", "none")
    })
});
/*! Sea.js 3.0.1 | seajs.org/LICENSE.md */
!function (a, b) {
    function c(a) {
        return function (b) {
            return {}.toString.call(b) == "[object " + a + "]"
        }
    }

    function d() {
        return B++
    }

    function e(a) {
        return a.match(E)[0]
    }

    function f(a) {
        for (a = a.replace(F, "/"), a = a.replace(H, "$1/"); a.match(G);) a = a.replace(G, "/");
        return a
    }

    function g(a) {
        var b = a.length - 1, c = a.charCodeAt(b);
        return 35 === c ? a.substring(0, b) : ".js" === a.substring(b - 2) || a.indexOf("?") > 0 || 47 === c ? a : a + ".js"
    }

    function h(a) {
        var b = v.alias;
        return b && x(b[a]) ? b[a] : a
    }

    function i(a) {
        var b = v.paths, c;
        return b && (c = a.match(I)) && x(b[c[1]]) && (a = b[c[1]] + c[2]), a
    }

    function j(a) {
        var b = v.vars;
        return b && a.indexOf("{") > -1 && (a = a.replace(J, function (a, c) {
            return x(b[c]) ? b[c] : a
        })), a
    }

    function k(a) {
        var b = v.map, c = a;
        if (b) for (var d = 0, e = b.length; e > d; d++) {
            var f = b[d];
            if (c = z(f) ? f(a) || a : a.replace(f[0], f[1]), c !== a) break
        }
        return c
    }

    function l(a, b) {
        var c, d = a.charCodeAt(0);
        if (K.test(a)) c = a; else if (46 === d) c = (b ? e(b) : v.cwd) + a; else if (47 === d) {
            var g = v.cwd.match(L);
            c = g ? g[0] + a.substring(1) : a
        } else c = v.base + a;
        return 0 === c.indexOf("//") && (c = location.protocol + c), f(c)
    }

    function m(a, b) {
        if (!a) return "";
        a = h(a), a = i(a), a = h(a), a = j(a), a = h(a), a = g(a), a = h(a);
        var c = l(a, b);
        return c = h(c), c = k(c)
    }

    function n(a) {
        return a.hasAttribute ? a.src : a.getAttribute("src", 4)
    }

    function o(a, b, c, d) {
        var e;
        try {
            importScripts(a)
        } catch (f) {
            e = f
        }
        b(e)
    }

    function p(a, b, c, d) {
        var e = Z.createElement("script");
        c && (e.charset = c), A(d) || e.setAttribute("crossorigin", d), q(e, b, a), e.async = !0, e.src = a, ca = e, ba ? aa.insertBefore(e, ba) : aa.appendChild(e), ca = null
    }

    function q(a, b, c) {
        function d(c) {
            a.onload = a.onerror = a.onreadystatechange = null, v.debug || aa.removeChild(a), a = null, b(c)
        }

        var e = "onload" in a;
        e ? (a.onload = d, a.onerror = function () {
            D("error", {uri: c, node: a}), d(!0)
        }) : a.onreadystatechange = function () {
            /loaded|complete/.test(a.readyState) && d()
        }
    }

    function r() {
        if (ca) return ca;
        if (da && "interactive" === da.readyState) return da;
        for (var a = aa.getElementsByTagName("script"), b = a.length - 1; b >= 0; b--) {
            var c = a[b];
            if ("interactive" === c.readyState) return da = c
        }
    }

    function s(a) {
        function b() {
            l = a.charAt(k++)
        }

        function c() {
            return /\s/.test(l)
        }

        function d() {
            return '"' == l || "'" == l
        }

        function e() {
            var c = k, d = l, e = a.indexOf(d, c);
            if (-1 == e) k = m; else if ("\\" != a.charAt(e - 1)) k = e + 1; else for (; m > k;) if (b(), "\\" == l) k++; else if (l == d) break;
            o && (p.push(a.slice(c, k - 1)), o = 0)
        }

        function f() {
            for (k--; m > k;) if (b(), "\\" == l) k++; else {
                if ("/" == l) break;
                if ("[" == l) for (; m > k;) if (b(), "\\" == l) k++; else if ("]" == l) break
            }
        }

        function g() {
            return /[a-z_$]/i.test(l)
        }

        function h() {
            var b = a.slice(k - 1), c = /^[\w$]+/.exec(b)[0];
            q = {"if": 1, "for": 1, "while": 1, "with": 1}[c], n = {
                "break": 1,
                "case": 1,
                "continue": 1,
                "debugger": 1,
                "delete": 1,
                "do": 1,
                "else": 1,
                "false": 1,
                "if": 1,
                "in": 1,
                "instanceof": 1,
                "return": 1,
                "typeof": 1,
                "void": 1
            }[c], u = "return" == c, s = {
                "instanceof": 1, "delete": 1, "void": 1, "typeof": 1,
                "return": 1
            }.hasOwnProperty(c), o = /^require\s*\(\s*(['"]).+?\1\s*\)/.test(b), o ? (c = /^require\s*\(\s*['"]/.exec(b)[0], k += c.length - 2) : k += /^[\w$]+(?:\s*\.\s*[\w$]+)*/.exec(b)[0].length - 1
        }

        function i() {
            return /\d/.test(l) || "." == l && /\d/.test(a.charAt(k))
        }

        function j() {
            var b = a.slice(k - 1), c;
            c = "." == l ? /^\.\d+(?:E[+-]?\d*)?\s*/i.exec(b)[0] : /^0x[\da-f]*/i.test(b) ? /^0x[\da-f]*\s*/i.exec(b)[0] : /^\d+\.?\d*(?:E[+-]?\d*)?\s*/i.exec(b)[0], k += c.length - 1, n = 0
        }

        if (-1 == a.indexOf("require")) return [];
        for (var k = 0, l, m = a.length, n = 1, o = 0, p = [], q = 0, r = [], s, t = [], u; m > k;) if (b(), c()) !u || "\n" != l && "\r" != l || (s = 0, u = 0); else if (d()) e(), n = 1, u = 0, s = 0; else if ("/" == l) if (b(), "/" == l) k = a.indexOf("\n", k), -1 == k && (k = a.length); else if ("*" == l) {
            var v = a.indexOf("\n", k);
            k = a.indexOf("*/", k), -1 == k ? k = m : k += 2, u && -1 != v && k > v && (s = 0, u = 0)
        } else n ? (f(), n = 0, u = 0, s = 0) : (k--, n = 1, u = 0, s = 1); else if (g()) h(); else if (i()) j(), u = 0, s = 0; else if ("(" == l) r.push(q), n = 1, u = 0, s = 1; else if (")" == l) n = r.pop(), u = 0, s = 0; else if ("{" == l) u && (s = 1), t.push(s), u = 0, n = 1; else if ("}" == l) s = t.pop(), n = !s, u = 0; else {
            var w = a.charAt(k);
            ";" == l ? s = 0 : "-" == l && "-" == w || "+" == l && "+" == w || "=" == l && ">" == w ? (s = 0, k++) : s = 1, n = "]" != l, u = 0
        }
        return p
    }

    function t(a, b) {
        this.uri = a, this.dependencies = b || [], this.deps = {}, this.status = 0, this._entry = []
    }

    if (!a.seajs) {
        var u = a.seajs = {version: "3.0.1"}, v = u.data = {}, w = c("Object"), x = c("String"),
            y = Array.isArray || c("Array"), z = c("Function"), A = c("Undefined"), B = 0, C = v.events = {};
        u.on = function (a, b) {
            var c = C[a] || (C[a] = []);
            return c.push(b), u
        }, u.off = function (a, b) {
            if (!a && !b) return C = v.events = {}, u;
            var c = C[a];
            if (c) if (b) for (var d = c.length - 1; d >= 0; d--) c[d] === b && c.splice(d, 1); else delete C[a];
            return u
        };
        var D = u.emit = function (a, b) {
                var c = C[a];
                if (c) {
                    c = c.slice();
                    for (var d = 0, e = c.length; e > d; d++) c[d](b)
                }
                return u
            }, E = /[^?#]*\//, F = /\/\.\//g, G = /\/[^\/]+\/\.\.\//, H = /([^:\/])\/+\//g, I = /^([^\/:]+)(\/.+)$/,
            J = /{([^{]+)}/g, K = /^\/\/.|:\//, L = /^.*?\/\/.*?\//;
        u.resolve = m;
        var M = "undefined" == typeof window && "undefined" != typeof importScripts && z(importScripts),
            N = /^(about|blob):/, O, P, Q = !location.href || N.test(location.href) ? "" : e(location.href);
        if (M) {
            var R;
            try {
                var S = Error();
                throw S
            } catch (T) {
                R = T.stack.split("\n")
            }
            R.shift();
            for (var U, V = /.*?((?:http|https|file)(?::\/{2}[\w]+)(?:[\/|\.]?)(?:[^\s"]*)).*?/i, W = /(.*?):\d+:\d+\)?$/; R.length > 0;) {
                var X = R.shift();
                if (U = V.exec(X), null != U) break
            }
            var Y;
            if (null != U) var Y = W.exec(U[1])[1];
            P = Y, O = e(Y || Q), "" === Q && (Q = O)
        } else {
            var Z = document, $ = Z.scripts, _ = Z.getElementById("seajsnode") || $[$.length - 1];
            P = n(_), O = e(P || Q)
        }
        if (M) u.request = o; else {
            var Z = document, aa = Z.head || Z.getElementsByTagName("head")[0] || Z.documentElement,
                ba = aa.getElementsByTagName("base")[0], ca;
            u.request = p
        }
        var da, ea = u.cache = {}, fa, ga = {}, ha = {}, ia = {},
            ja = t.STATUS = {FETCHING: 1, SAVED: 2, LOADING: 3, LOADED: 4, EXECUTING: 5, EXECUTED: 6, ERROR: 7};
        t.prototype.resolve = function () {
            for (var a = this, b = a.dependencies, c = [], d = 0, e = b.length; e > d; d++) c[d] = t.resolve(b[d], a.uri);
            return c
        }, t.prototype.pass = function () {
            for (var a = this, b = a.dependencies.length, c = 0; c < a._entry.length; c++) {
                for (var d = a._entry[c], e = 0, f = 0; b > f; f++) {
                    var g = a.deps[a.dependencies[f]];
                    g.status < ja.LOADED && !d.history.hasOwnProperty(g.uri) && (d.history[g.uri] = !0, e++, g._entry.push(d), g.status === ja.LOADING && g.pass())
                }
                e > 0 && (d.remain += e - 1, a._entry.shift(), c--)
            }
        }, t.prototype.load = function () {
            var a = this;
            if (!(a.status >= ja.LOADING)) {
                a.status = ja.LOADING;
                var c = a.resolve();
                D("load", c);
                for (var d = 0, e = c.length; e > d; d++) a.deps[a.dependencies[d]] = t.get(c[d]);
                if (a.pass(), a._entry.length) return a.onload(), b;
                var f = {}, g;
                for (d = 0; e > d; d++) g = ea[c[d]], g.status < ja.FETCHING ? g.fetch(f) : g.status === ja.SAVED && g.load();
                for (var h in f) f.hasOwnProperty(h) && f[h]()
            }
        }, t.prototype.onload = function () {
            var a = this;
            a.status = ja.LOADED;
            for (var b = 0, c = (a._entry || []).length; c > b; b++) {
                var d = a._entry[b];
                0 === --d.remain && d.callback()
            }
            delete a._entry
        }, t.prototype.error = function () {
            var a = this;
            a.onload(), a.status = ja.ERROR
        }, t.prototype.exec = function () {
            function a(b) {
                var d = c.deps[b] || t.get(a.resolve(b));
                if (d.status == ja.ERROR) throw Error("module was broken: " + d.uri);
                return d.exec()
            }

            var c = this;
            if (c.status >= ja.EXECUTING) return c.exports;
            if (c.status = ja.EXECUTING, c._entry && !c._entry.length && delete c._entry, !c.hasOwnProperty("factory")) return c.non = !0, b;
            var e = c.uri;
            a.resolve = function (a) {
                return t.resolve(a, e)
            }, a.async = function (b, c) {
                return t.use(b, c, e + "_async_" + d()), a
            };
            var f = c.factory, g = z(f) ? f.call(c.exports = {}, a, c.exports, c) : f;
            return g === b && (g = c.exports), delete c.factory, c.exports = g, c.status = ja.EXECUTED, D("exec", c), c.exports
        }, t.prototype.fetch = function (a) {
            function c() {
                u.request(g.requestUri, g.onRequest, g.charset, g.crossorigin)
            }

            function d(a) {
                delete ga[h], ha[h] = !0, fa && (t.save(f, fa), fa = null);
                var b, c = ia[h];
                for (delete ia[h]; b = c.shift();) a === !0 ? b.error() : b.load()
            }

            var e = this, f = e.uri;
            e.status = ja.FETCHING;
            var g = {uri: f};
            D("fetch", g);
            var h = g.requestUri || f;
            return !h || ha.hasOwnProperty(h) ? (e.load(), b) : ga.hasOwnProperty(h) ? (ia[h].push(e), b) : (ga[h] = !0, ia[h] = [e], D("request", g = {
                uri: f,
                requestUri: h,
                onRequest: d,
                charset: z(v.charset) ? v.charset(h) : v.charset,
                crossorigin: z(v.crossorigin) ? v.crossorigin(h) : v.crossorigin
            }), g.requested || (a ? a[g.requestUri] = c : c()), b)
        }, t.resolve = function (a, b) {
            var c = {id: a, refUri: b};
            return D("resolve", c), c.uri || u.resolve(c.id, b)
        }, t.define = function (a, c, d) {
            var e = arguments.length;
            1 === e ? (d = a, a = b) : 2 === e && (d = c, y(a) ? (c = a, a = b) : c = b), !y(c) && z(d) && (c = b === s ? [] : s("" + d));
            var f = {id: a, uri: t.resolve(a), deps: c, factory: d};
            if (!M && !f.uri && Z.attachEvent && b !== r) {
                var g = r();
                g && (f.uri = g.src)
            }
            D("define", f), f.uri ? t.save(f.uri, f) : fa = f
        }, t.save = function (a, b) {
            var c = t.get(a);
            c.status < ja.SAVED && (c.id = b.id || a, c.dependencies = b.deps || [], c.factory = b.factory, c.status = ja.SAVED, D("save", c))
        }, t.get = function (a, b) {
            return ea[a] || (ea[a] = new t(a, b))
        }, t.use = function (b, c, d) {
            var e = t.get(d, y(b) ? b : [b]);
            e._entry.push(e), e.history = {}, e.remain = 1, e.callback = function () {
                for (var b = [], d = e.resolve(), f = 0, g = d.length; g > f; f++) b[f] = ea[d[f]].exec();
                c && c.apply(a, b), delete e.callback, delete e.history, delete e.remain, delete e._entry
            }, e.load()
        }, u.use = function (a, b) {
            return t.use(a, b, v.cwd + "_use_" + d()), u
        }, t.define.cmd = {}, a.define = t.define, u.Module = t, v.fetchedList = ha, v.cid = d, u.require = function (a) {
            var b = t.get(t.resolve(a));
            return b.status < ja.EXECUTING && (b.onload(), b.exec()), b.exports
        }, v.base = O, v.dir = O, v.loader = P, v.cwd = Q, v.charset = "utf-8", u.config = function (a) {
            for (var b in a) {
                var c = a[b], d = v[b];
                if (d && w(d)) for (var e in c) d[e] = c[e]; else y(d) ? c = d.concat(c) : "base" === b && ("/" !== c.slice(-1) && (c += "/"), c = l(c)), v[b] = c
            }
            return D("config", a), u
        }
    }
}(this);
!function () {
    function a(a) {
        var b = a.length;
        if (!(2 > b)) {
            r.comboSyntax && (t = r.comboSyntax), r.comboMaxLength && (u = r.comboMaxLength), r.comboSuffix && (o = r.comboSuffix), n = r.comboExcludes;
            for (var d = [], e = 0; b > e; e++) {
                var f = a[e];
                if (!s[f]) {
                    var h = p.get(f);
                    h.status < q && !l(f) && !m(f) && d.push(f)
                }
            }
            d.length > 1 && g(c(d))
        }
    }

    function b(a) {
        a.requestUri = s[a.uri] || a.uri
    }

    function c(a) {
        return e(d(a))
    }

    function d(a) {
        for (var b = {__KEYS: []}, c = 0, d = a.length; d > c; c++) for (var e = a[c].replace("://", "__").split("/"), f = b, g = 0, h = e.length; h > g; g++) {
            var i = e[g];
            f[i] || (f[i] = {__KEYS: []}, f.__KEYS.push(i)), f = f[i]
        }
        return b
    }

    function e(a) {
        for (var b = [], c = a.__KEYS, d = 0, e = c.length; e > d; d++) {
            for (var g = c[d], h = g, i = a[g], j = i.__KEYS; 1 === j.length;) h += "/" + j[0], i = i[j[0]], j = i.__KEYS;
            j.length && b.push([h.replace("__", "://"), f(i)])
        }
        return b
    }

    function f(a) {
        for (var b = [], c = a.__KEYS, d = 0, e = c.length; e > d; d++) {
            var g = c[d], h = f(a[g]), i = h.length;
            if (i) for (var j = 0; i > j; j++) b.push(g + "/" + h[j]); else b.push(g)
        }
        return b
    }

    function g(a) {
        for (var b = 0, c = a.length; c > b; b++) for (var d = a[b], e = d[0] + "/", f = j(d[1]), g = 0, i = f.length; i > g; g++) h(e, f[g]);
        return s
    }

    function h(a, b) {
        for (var c = [], d = 0, e = b.length; e > d; d++) c[d] = b[d].replace(/\?.*$/, "");
        var f = a + t[0] + c.join(t[1]);
        o && (f += o);
        var g = f.length > u;
        if (b.length > 1 && g) {
            var j = i(b, u - (a + t[0]).length);
            h(a, j[0]), h(a, j[1])
        } else {
            if (g) throw new Error("The combo url is too long: " + f);
            for (var d = 0, e = b.length; e > d; d++) s[a + b[d]] = f
        }
    }

    function i(a, b) {
        for (var c = t[1], d = a[0], e = 1, f = a.length; f > e; e++) if (d += c + a[e], d.length > b) return [a.splice(0, e), a]
    }

    function j(a) {
        for (var b = [], c = {}, d = 0, e = a.length; e > d; d++) {
            var f = a[d], g = k(f);
            g && (c[g] || (c[g] = [])).push(f)
        }
        for (var h in c) c.hasOwnProperty(h) && b.push(c[h]);
        return b
    }

    function k(a) {
        var b = a.lastIndexOf(".");
        return b >= 0 ? a.substring(b) : ""
    }

    function l(a) {
        return n ? n.test ? n.test(a) : n(a) : void 0
    }

    function m(a) {
        var b = r.comboSyntax || ["??", ","], c = b[0], d = b[1];
        return c && a.indexOf(c) > 0 || d && a.indexOf(d) > 0
    }

    var n, o, p = seajs.Module, q = p.STATUS.FETCHING, r = seajs.data, s = r.comboHash = {}, t = ["??", ","], u = 2e3;
    if (seajs.on("load", a), seajs.on("fetch", b), r.test) {
        var v = seajs.test || (seajs.test = {});
        v.uris2paths = c, v.paths2hash = g
    }
    define("seajs/seajs-combo/1.0.1/seajs-combo", [], {})
}();
$(function () {
        !function (a) {
            var b = function () {
                this.init()
            };
            b.prototype = {
                init: function () {
                    this.ranking(), this.like()
                }, ranking: function () {
                    a("#logo").after('<div id="logoright"><a>\u6392\u884c\u699c</a></div>'), a(window).scroll(function () {
                        var b = a(".ranking_nav_wrap").offset().top;
                        var c = a(window).scrollTop();
                        c - b > 0 ? (a(".ranking_nav_wrap").css("z-index", "981"), a(".nav_wrap").addClass("nav_wrap_fixed")) : (a(".ranking_nav_wrap").css("z-index", "100"), a(".nav_wrap").removeClass("nav_wrap_fixed"))
                    });
                    var b = new Date;
                    b.setHours(0), b.setMinutes(0), b.setSeconds(0), b.setMilliseconds(0);
                    var c = 864e5;
                    var d = b.getTime() + c;
                    var e = (new Date).getTime();

                    function f(a) {
                        return 10 > a ? "0" + a : "" + a
                    }

                }, like: function () {
                    var b = a(".nav_one li");
                    var c = a(".nav_two ul");
                    var d = a(".nav_two ul li");
                    e("box84", "cat10000004"), a.each(b, function () {
                        var b = a(this);
                        b.on("click", function () {
                            var b = a(this).index();
                            var d = a(".nav_two ul").eq(b).find("li:first").attr("data");
                            a(".nav_two ul").eq(b).find("li:first").addClass("cur").siblings().removeClass("cur"), a(this).addClass("cur").siblings().removeClass("cur"), c.eq(b).addClass("active").siblings().removeClass("active"), e("box84", d)
                        })
                    }), a.each(d, function () {
                        var b = a(this);
                        b.on("click", function () {
                            var b = a(this).attr("data");
                            var c = a(this).index();
                            if (a(this).addClass("cur").siblings().removeClass("cur"), 0 == c) {
                                var d = a(this).attr("data");
                                e("box84", d)
                            } else e("box85", "", b)
                        })
                    });

                    function e(b, c, d) {
                        var e = {
                            boxid: b,
                            pid: "",
                            area: a.cookie("atgregion") ? a.cookie("atgregion").split("|")[0] : "11011400",
                            cid: a.cookie("__clickidc"),
                            imagesize: "400",
                            brid: "",
                            shopid: "",
                            c1id: c,
                            c2id: d,
                            sid: ""
                        };
                    }
                }
            }, new b
        }(jQuery)
    });