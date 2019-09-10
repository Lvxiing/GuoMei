
jQuery.cookie = function (e, i, r) {
    if (typeof i != "undefined") {
        r = r || {};
        if (i === null) {
            i = "";
            r.expires = -1
        }
        var o = "";
        if (r.expires && (typeof r.expires == "number" || r.expires.toUTCString)) {
            var n;
            if (typeof r.expires == "number") {
                n = new Date;
                n.setTime(n.getTime() + r.expires * 24 * 60 * 60 * 1e3)
            } else {
                n = r.expires
            }
            o = "; expires=" + n.toUTCString()
        }
        var t = r.path ? "; path=" + r.path : "";
        var s = r.domain ? "; domain=" + r.domain : "";
        var a = r.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(i), o, t, s, a].join("")
    } else {
        var p = null;
        if (document.cookie && document.cookie != "") {
            var u = document.cookie.split(";");
            for (var c = 0; c < u.length; c++) {
                var m = jQuery.trim(u[c]);
                if (m.substring(0, e.length + 1) == e + "=") {
                    p = decodeURIComponent(m.substring(e.length + 1));
                    break
                }
            }
        }
        return p
    }
};
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
            var i = t(this).data("type");
            if (e == "sitemap") {

            }
            if (e == "service") {

            }
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
        }
        e.off("click").on("click", function () {
            window.open("//cs" + cookieDomain + "?entry=" + s + "&orgi=" + e.attr("orgi") + "&productId=" + n + "&skuId=" + o, "_blank")
        })
    }
};
var customerServiceCall = new customerServiceCall;
if ($("[customer-service-button-id]").length > 0 && $("[customer-service-button-id]").eq(0).attr("isCall") != "prohibit") {
    customerServiceCall.initialCall()
}
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

        if ($.fn.slimScroll) {
            I()
        } else {
        }
        m.attr("data-open", "true")
    }

    function M(e) {
        var i = e;

        function s(e) {
        }

        s(function (e) {
            if (e == "true") {
                a.hide();
                a.attr("data-open", "").css("right", "-240px");
                t.find("li").removeClass("hover")
            } else {
                a.show();
                t.find("li").removeClass("hover").end().find("." + $(i).attr("class")).addClass("hover");
                _("member")
            }
        });
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
window.g = window.g || {};
(function () {
    window.g = window.g || {};

    function e(e) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(e + "=");
            if (c_start != -1) {
                c_start = c_start + e.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return decodeURIComponent(document.cookie.substring(c_start, c_end))
            }
        }
        return ""
    }

    g.cityCode = function (t) {
        t = parseInt(t);
        if (t >= 0 && t <= 4) {
        } else {
            t = 3
        }
        var i = "";
        var n = e("atgregion") || "11010200|北京北京市朝阳区|11010000|11000000|110102002";
        var a = n.split("|");
        switch (t) {
            case 0:
                i = a[1];
                break;
            case 1:
                i = a[3];
                break;
            case 2:
                i = a[2];
                break;
            case 3:
                i = a[0];
                break;
            case 4:
                i = a[4] == undefined ? a[0] + "1" : a[4];
                break
        }
        return i
    }
})();
(function () {
    var e = jQuery;
    window.g = window.g || {};

    function t(e) {
        if (e.substr(e.length - 1, 1) == "/") {
            return e.substr(0, e.length - 1)
        } else {
            return e
        }
    }

})();
(function () {
    var e = jQuery;
    ajax = function () {
        if (typeof arguments[0] != "string") {
            return
        }
        var t = undefined;
        var i = {};
        var n = undefined;
        var a = {};
        if (arguments.length == 1) {
            t = arguments[0];
            i = {}
        } else if (arguments.length == 2) {
            if (typeof arguments[1] == "function") {
                t = arguments[0];
                n = arguments[1]
            } else {
                t = arguments[0];
                i = arguments[1]
            }
        } else if (arguments.length == 3 && typeof arguments[2] == "function") {
            t = arguments[0];
            i = arguments[1];
            n = arguments[2]
        } else if (arguments.length == 3 && typeof arguments[2] == "object") {
            t = arguments[0];
            i = arguments[1];
            a = arguments[2]
        } else if (arguments.length == 4) {
            t = arguments[0];
            i = arguments[1];
            a = arguments[2];
            n = arguments[3]
        }
        if (typeof a.site == "string" && a.site.indexOf("g") >= 0) {
            t = g.url.g + t
        } else if (typeof a.site == "string" && a.site.indexOf("w") >= 0) {
            t = g.url.w + t
        } else if (typeof a.site == "string" && a.site.indexOf("f") >= 0) {
            t = t
        } else if (i.site && i.site.indexOf("g") >= 0) {
            t = g.url.g + t
        } else if (i.site && i.site.indexOf("w") >= 0) {
            t = g.url.w + t
        } else if (i.site && i.site.indexOf("f") >= 0) {
            t = t
        } else if (i.site && i.site.indexOf("s") >= 0) {
            t = "//ss" + cookieDomain + t
        } else {
            t = g.url.g + t
        }
        if (i.site) {
            delete i.site
        }
        var o = {
            type: "get",
            url: t,
            data: i,
            dataType: "jsonp",
            jsonpName: i.callback == undefined ? "cb_" + parseInt(Math.random() * 1e15) : i.callback,
            success: function (e) {
                n && n(e)
            }
        };
        if (i.callback) {
            delete i.callback
        }
        if (typeof a == "object") {
            e.extend(o, a)
        }
        return e.ajax(o)
    };
    window.g = window.g || {};
    g.ajax = ajax
})();
(function () {
    function e(e) {
        this._endfn = [];
        this._subs = [];
        this._init = [];
        this._endStatus = false;
        this.setAJAX = e
    }

    e.prototype = {
        publish: function () {
            var e = this;
            for (var t = 0; t < e._init.length; t++) {
                if (e._init[t]() == false) {
                    return
                }
            }
            this._endStatus = false;
            if (typeof this.setAJAX == "function") {
                this.setAJAX().done(function (t) {
                    for (var i = 0; i < e._subs.length; i++) {
                        e._subs[i](t)
                    }
                    e._endStatus = true;
                    for (var i = 0; i < e._endfn.length; i++) {
                        e._endfn[i](t)
                    }
                })
            } else {
                for (var t = 0; t < e._subs.length; t++) {
                    e._subs[t](data)
                }
                e._endStatus = true;
                for (var t = 0; t < e._endfn.length; t++) {
                    e._endfn[t](data)
                }
            }
        }, init: function (e) {
            e && this._init.push(e)
        }, addSub: function (e) {
            e && this._subs.push(e)
        }, end: function (e) {
            e && this._endfn.push(e)
        }, endStatus: function () {
            return this._endStatus
        }
    };
    window.g = window.g || {};
    g.Pubsub = e
})();
!function () {
    function e(e) {
        return e.replace(y, "").replace(b, ",").replace(w, "").replace(x, "").replace(j, "").split(T)
    }

    function n(e) {
        return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }

    function r(r, t) {
        function a(e) {
            return p += e.split(/\n/).length - 1, u && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), e && (e = m[1] + n(e) + m[2] + "\n"), e
        }

        function i(n) {
            var r = p;
            if (s ? n = s(n, t) : o && (n = n.replace(/\n/g, function () {
                    return p++, "$line=" + p + ";"
                })), 0 === n.indexOf("=")) {
                var a = f && !/^=[=#]/.test(n);
                if (n = n.replace(/^=[=#]?|[\s;]*$/g, ""), a) {
                    var i = n.replace(/\s*\([^\)]+\)/, "");
                    $[i] || /^(include|print)$/.test(i) || (n = "$escape(" + n + ")")
                } else n = "$string(" + n + ")";
                n = m[1] + n + m[2]
            }
            return o && (n = "$line=" + r + ";" + n), v(e(n), function (e) {
                if (e && !g[e]) {
                    var n;
                    n = "print" === e ? b : "include" === e ? w : $[e] ? "$utils." + e : d[e] ? "$helpers." + e : "$data." + e, x += e + "=" + n + ",", g[e] = !0
                }
            }), n + "\n"
        }

        var o = t.debug, c = t.openTag, l = t.closeTag, s = t.parser, u = t.compress, f = t.escape, p = 1,
            g = {$data: 1, $filename: 1, $utils: 1, $helpers: 1, $out: 1, $line: 1}, h = "".trim,
            m = h ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            y = h ? "$out+=text;return $out;" : "$out.push(text);",
            b = "function(){var text=''.concat.apply('',arguments);" + y + "}",
            w = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + y + "}",
            x = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (o ? "$line=0," : ""), j = m[0],
            T = "return new String(" + m[3] + ");";
        v(r.split(c), function (e) {
            e = e.split(l);
            var n = e[0], r = e[1];
            1 === e.length ? j += a(n) : (j += i(n), r && (j += a(r)))
        });
        var k = x + j + T;
        o && (k = "try{" + k + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + n(r) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var E = new Function("$data", "$filename", k);
            return E.prototype = $, E
        } catch (S) {
            throw S.temp = "function anonymous($data,$filename) {" + k + "}", S
        }
    }

    var t = function (e, n) {
        return "string" == typeof n ? h(n, {filename: e}) : o(e, n)
    };
    t.version = "3.0.0", t.config = function (e, n) {
        a[e] = n
    };
    var a = t.defaults = {openTag: "<%", closeTag: "%>", escape: !0, cache: !0, compress: !1, parser: null},
        i = t.cache = {};
    t.render = function (e, n) {
        return h(e, n)
    };
    var o = t.renderFile = function (e, n) {
        var r = t.get(e) || g({filename: e, name: "Render Error", message: "Template not found"});
        return n ? r(n) : r
    };
    t.get = function (e) {
        var n;
        if (i[e]) n = i[e]; else if ("object" == typeof document) {
            var r = document.getElementById(e);
            if (r) {
                var t = (r.value || r.innerHTML).replace(/^\s*|\s*$/g, "");
                n = h(t, {filename: e})
            }
        }
        return n
    };
    var c = function (e, n) {
        return "string" != typeof e && (n = typeof e, "number" === n ? e += "" : e = "function" === n ? c(e.call(e)) : ""), e
    }, l = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, s = function (e) {
        return l[e]
    }, u = function (e) {
        return c(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
    }, f = Array.isArray || function (e) {
        return "[object Array]" === {}.toString.call(e)
    }, p = function (e, n) {
        var r, t;
        if (f(e)) for (r = 0, t = e.length; t > r; r++) n.call(e, e[r], r, e); else for (r in e) n.call(e, e[r], r)
    }, $ = t.utils = {$helpers: {}, $include: o, $string: c, $escape: u, $each: p};
    t.helper = function (e, n) {
        d[e] = n
    };
    var d = t.helpers = $.$helpers;
    t.onerror = function (e) {
        var n = "Template Error\n\n";
        for (var r in e) n += "<" + r + ">\n" + e[r] + "\n\n";
        "object" == typeof console && console.error(n)
    };
    var g = function (e) {
            return t.onerror(e), function () {
                return "{Template Error}"
            }
        }, h = t.compile = function (e, n) {
            function t(r) {
                try {
                    return new l(r, c) + ""
                } catch (t) {
                    return n.debug ? g(t)() : (n.debug = !0, h(e, n)(r))
                }
            }

            n = n || {};
            for (var o in a) void 0 === n[o] && (n[o] = a[o]);
            var c = n.filename;
            try {
                var l = r(e, n)
            } catch (s) {
                return s.filename = c || "anonymous", s.name = "Syntax Error", g(s)
            }
            return t.prototype = l.prototype, t.toString = function () {
                return l.toString()
            }, c && n.cache && (i[c] = t), t
        }, v = $.$each,
        m = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
        y = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        b = /[^\w$]+/g, w = new RegExp(["\\b" + m.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        x = /^\d[^,]*|,\d[^,]*/g, j = /^,+|,+$/g, T = /^$|,+/;
    a.openTag = "{{", a.closeTag = "}}";
    var k = function (e, n) {
        var r = n.split(":"), t = r.shift(), a = r.join(":") || "";
        return a && (a = ", " + a), "$helpers." + t + "(" + e + a + ")"
    };
    a.parser = function (e) {
        e = e.replace(/^\s/, "");
        var n = e.split(" "), r = n.shift(), a = n.join(" ");
        switch (r) {
            case"if":
                e = "if(" + a + "){";
                break;
            case"else":
                n = "if" === n.shift() ? " if(" + n.join(" ") + ")" : "", e = "}else" + n + "{";
                break;
            case"/if":
                e = "}";
                break;
            case"each":
                var i = n[0] || "$data", o = n[1] || "as", c = n[2] || "$value", l = n[3] || "$index", s = c + "," + l;
                "as" !== o && (i = "[]"), e = "$each(" + i + ",function(" + s + "){";
                break;
            case"/each":
                e = "});";
                break;
            case"echo":
                e = "print(" + a + ");";
                break;
            case"print":
            case"include":
                e = r + "(" + n.join(",") + ");";
                break;
            default:
                if (/^\s*\|\s*[\w\$]/.test(a)) {
                    var u = !0;
                    0 === e.indexOf("#") && (e = e.substr(1), u = !1);
                    for (var f = 0, p = e.split("|"), $ = p.length, d = p[f++]; $ > f; f++) d = k(d, p[f]);
                    e = (u ? "=" : "=#") + d
                } else e = t.helpers[r] ? "=#" + r + "(" + n.join(",") + ");" : "=" + e
        }
        return e
    }, "function" == typeof define ? define(function () {
        return t
    }) : "undefined" != typeof exports ? module.exports = t : this.template = t
}();
(function (e) {
    function n(e) {
        var n = [], t = [1e3 * 60 * 60 * 24, 1e3 * 60 * 60, 1e3 * 60, 1e3, 1];
        for (i = 0; i < t.length; i++) {
            n[i] = Math.floor(e / t[i]);
            e = e % t[i]
        }
        this.format = function (e) {
            var t = {"\\$d+": n[0], "\\$h+": n[1], "\\$m+": n[2], "\\$s+": n[3], "\\$S+": n[4]};
            for (var l in t) {
                if (new RegExp("(" + l + ")").test(e)) {
                    e = e.replace(RegExp.$1, RegExp.$1.length == 1 ? t[l] : ("00" + t[l]).substr(("" + t[l]).length > 2 ? 2 : ("" + t[l]).length))
                }
            }
            return e
        };
        this.getD = function () {
            return n
        }
    }

    e.gTimer = function (t) {
        var l = {ct: null, et: null, gap: 1e3, aEven: null, iEven: null, lEven: null, Tindex: null};
        e.extend(l, t);
        if (l.ct == null || l.et == null || l.aEven == null) return;
        if (l.iEven) l.iEven.apply(l);
        var i = setInterval(function () {
            e.extend(l, {dt: new n(l.et - l.ct)});
            if (l.ct >= l.et) {
                l.ct = l.et;
                clearInterval(i);
                l.dt = new n(l.et - l.ct);
                if (l.lEven) l.lEven.apply(l)
            }
            l.aEven.apply(l);
            l.ct = l.ct + l.gap
        }, l.gap);
        return i
    }
})(jQuery);
/* gmpro-2.0.0/cheap/groupon/1.0.53 common.js Date:2019-06-25 18:08:30 */
var groupBase = {
    getAjax: function (a) {
        var b = {};
        b.data = void 0;
        try {
        } catch (d) {
        }
    }, bombBox: function (a) {
        var b = '<div id="shade"></div><div id="layer"><div class="pop-header"><span class="tip"> \u63d0\u793a</span><a class="close" >\u5173\u95ed</a></div><div class="popup-contain"><p> ' + a + "</p></div></div>";
        $(document.body).append(b);
        var c = $(document).height();
        $("#shade").css({height: c}), $(document.body).on("click", "#layer .close", function () {
            $("#shade").remove(), $("#layer").remove()
        })
    }
};
$(function () {

    $(".group-category-list").css({
        background: "#000",
        opacity: "0.8",
        filter: "alpha(opacity=80)"
    }), $(".group-category-box .all-category").bind({
        mouseenter: function () {
            $(this).find(".group-category-list").show()
        }, mouseleave: function () {
            $(this).find(".group-category-list").hide()
        }
    }), c(), $(window).on("resize", function () {
        c()
    });

    function c() {
        var a = $(window).width();
        var b = $("body").hasClass("w1000");
        b ? 1e3 >= a ? ($(".group-category-box").css({width: "1000px"}), $(".group-all-box").css({width: "1000px"}), $("#gome-foot").css({width: "1000px"}), $(".group-solid-box").css({width: "1000px"}), $(".group-solider").css({"min-width": "1000px"})) : ($(".group-category-box").css({width: a}), $(".group-all-box").css({width: a}), $("#gome-foot").css({width: a}), $(".group-solid-box").css({width: a}), $(".group-solider").css({"min-width": a})) : 1200 >= a ? ($(".group-category-box").css({width: "1200px"}), $(".group-all-box").css({width: "1200px"}), $("#gome-foot").css({width: "1200px"})) : ($(".group-category-box").css({width: "100%"}), $(".group-all-box").css({width: "100%"}), $("#gome-foot").css({width: "100%"}))
    }

    function d() {
        var b = $.trim($("#question").val());
        "" != b && "\u8bf7\u8f93\u5165\u771f\u5212\u7b97\u5546\u54c1\u540d\u79f0" != b ? location.href = a + "/groupon/searchkey?key=" + encodeURIComponent(b) : ($("#question").val("\u8bf7\u8f93\u5165\u771f\u5212\u7b97\u5546\u54c1\u540d\u79f0").css("color", "#C00"), setTimeout(function () {
            $("#question").css("color", "#5E5E5E").val("").focus().blur()
        }, 300))
    }

    $(".group-search-btn").on("click", function () {
        d()
    }), $("#question").keydown(function (a) {
        13 == a.keyCode && d()
    }), setInterval(function () {
        var a = $(window).scrollTop() + $(window).height() + 300;
        var b = $(window).scrollTop() - 300;
        $("body img[gome-src]:not(.code-sm img[gome-src],#productDesc img[gome-src],.tc .qrcode_img[gome-src], #J_vipGoodsList .goods-list-ul img[gome-src], #gome-aside-app-code img[gome-src])").each(function () {
            var c = $(this);
            if (_offsetTop = c.offset().top, 0 != _offsetTop && a >= _offsetTop && _offsetTop > b && "" != c.attr("gome-src")) {
                var d = c.attr("gome-src");
                c.attr("src", d), c.attr("gome-src", "")
            }
        })
    }, 500), "placeholder" in document.createElement("input") || $(".ele-input").each(function () {
        var a = $(this).attr("placeholder"), b = $(this).attr("type");
        "password" == b ? ($(this).parent().append("<span class='ie-ph'>" + a + "</span>"), $(this).focus(function () {
            $(this).siblings(".ie-ph").hide()
        }), $(this).blur(function () {
            "" == this.value && $(this).siblings(".ie-ph").show()
        }), $(".inpl-wrap").on("click", ".ie-ph", function () {
            $(this).siblings(".inp-text").focus()
        })) : ($(this).val(a), this.onfocus = function () {
            this.value === a && (this.value = "", this.style.color = "")
        }, this.onblur = function () {
            "" === this.value && (this.value = a, this.style.color = "#999")
        }, this.style.color = "#999")
    })
});
/* gmpro-2.0.0/cheap/groupon/1.0.53 collection.js Date:2019-06-25 18:08:30 */
var collectionOff = !1;
var tuanCollection = {
    totalPage: 1,
    pageSize: 4,
    pageCurrent: 1,
    dataCount: 0,
    flag: 0,
    clickCollectButton: function () {
        $("#noLogin").hide(), $("#okLogin").show()
    },
    getCollection: function () {
    },
    calculatePageInfo: function (a) {
        tuanCollection.totalPage = parseInt(a / tuanCollection.pageSize), tuanCollection.dataCount = a, a > tuanCollection.pageSize && tuanCollection.totalPage * tuanCollection.pageSize < a && (tuanCollection.totalPage = tuanCollection.totalPage + 1)
    },
    getCollecGoods: function (a) {
        if ("" == a.groupIds) return void tuanCollection.noCollectionGoods();
        $("#assistant-box-c-list").html("");
        var b = a.groupIds.length;
        tuanCollection.calculatePageInfo(b);
        for (var c = 0; l = b, l > c; c++) {
            var d = a.groupIds[c];
            var e = "display:none";
            var f = "";
            f += '<li class="clearfix all" dataIndex=' + c + " style=" + e + ' data-groupid="' + d.grouponId + '" data-groupstatus="' + d.status + '">                            <div class="assistant-img-box">                                <a title="' + d.displayName + '" href="' + d.url + '" target="_blank">                                    <img src="' + d.picture + '_60.jpg" alt="' + d.displayName + '">                                </a>                            </div>                            <div class="assistant-info-box">                                <p class="info-name">                                    <a target="_blank" title="' + d.displayName + '" href="' + d.url + '">' + d.displayName + '</a>                                </p>                                <p class="info-price">                                    <span>\xa5' + parseFloat(d.priceDecimals).toFixed(2) + '</span>                                </p>                                <p class="info-count"><em>' + d.buyquantity + '</em>\u4eba\u5df2\u8d2d\u4e70</p>                                <i id="' + d.grouponId + '" class="ico-rit-del" y="0"></i>                            </div>                        </li>', $(f).appendTo(".assistant-box-c .assistant-box-list")
        }
        tuanCollection.showCollection(), tuanCollection.collectionItenHover()
    },
    showCollectPage: function () {
        if ($(".pop-pagination").html(""), tuanCollection.totalPage > 1) {
            var a = '<div class="assistant-page">';
            if (1 == tuanCollection.pageCurrent) a += '<a class="pop-pagi-prev" onselectstart="return false">&lt;&nbsp;\u4e0a\u4e00\u9875</a><span class="pop-pagi-num"><b id="gpnum" class="light">' + tuanCollection.pageCurrent + "</b>/" + tuanCollection.totalPage + '</span><a class="pop-pagi-next" name="2" onselectstart="return false" onclick="tuanCollection.getNextPage()" y="0">\u4e0b\u4e00\u9875&nbsp;&gt;</a>'; else if (tuanCollection.pageCurrent == tuanCollection.totalPage) {
                var b = tuanCollection.pageCurrent - 1;
                a += '<a class="pop-pagi-prev" onselectstart="return false" onclick="tuanCollection.getPrePage()" name="' + b + '" y="0">&lt;&nbsp;\u4e0a\u4e00\u9875</a><span class="pop-pagi-num"><b id="gpnum" class="light">' + tuanCollection.pageCurrent + "</b>/" + tuanCollection.totalPage + '</span><a class="pop-pagi-next" onselectstart="return false">\u4e0b\u4e00\u9875&nbsp;&gt;</a>'
            } else {
                var c = tuanCollection.pageCurrent + 1;
                var b = tuanCollection.pageCurrent - 1;
                a += '<a class="pop-pagi-prev" onselectstart="return false" onclick="tuanCollection.getPrePage()" name="' + b + '" y="0">&lt;&nbsp;\u4e0a\u4e00\u9875</a><span class="pop-pagi-num"><b id="gpnum" class="light">' + tuanCollection.pageCurrent + "</b>/" + tuanCollection.totalPage + '</span><a class="pop-pagi-next" onselectstart="return false" onclick="tuanCollection.getNextPage()" name="' + c + '" y="0">\u4e0b\u4e00\u9875&nbsp;&gt;</a>'
            }
            a += '</div><a class="remove" id="qinggroup" onclick="tuanCollection.clearCollect()" y="0">\u6e05\u7a7a</a>', $(".pop-pagi-box").show(), $(".gbfav-cont").css("padding-bottom", "30px")
        } else $(".pop-pagi-box").hide(), $(".assistant-box-c .assistant-remove").hide(), $(".gbfav-cont").css("padding-bottom", "0");
        $(".pop-pagination").html(a)
    },
    showCollection: function () {
        var a = $(".collection-status a.cur").html();
        if ("\u5168\u90e8" == a ? dataArray = $("#assistant-box-c-list").find(".all") : "\u5df2\u5f00\u59cb" == a ? dataArray = $("#assistant-box-c-list").find("li[data-groupstatus=buying]") : "\u672a\u5f00\u59cb" == a && (dataArray = $("#assistant-box-c-list").find("li[data-groupstatus=notStarted]")), $("#assistant-box-c-list").find(".all").each(function () {
                $(this).css("display", "none")
            }), 0 == dataArray.length) tuanCollection.noCollectionGoods(); else {
            tuanCollection.clearNoCollentionGoods(), tuanCollection.calculatePageInfo(dataArray.length), tuanCollection.showCollectPage();
            var b = tuanCollection.pageCurrent;
            for (var c = 0; c < dataArray.length; c++) c >= (b - 1) * tuanCollection.pageSize && c < b * tuanCollection.pageSize ? $(dataArray[c]).css("display", "block") : $(dataArray[c]).css("display", "none")
        }
    },
    getPrePage: function () {
        collectionOff = !0, tuanCollection.pageCurrent = tuanCollection.pageCurrent - 1, tuanCollection.showCollection()
    },
    getNextPage: function () {
        collectionOff = !0, tuanCollection.pageCurrent = tuanCollection.pageCurrent + 1, tuanCollection.showCollection()
    },
    collectionItenHover: function () {
        $("#assistant-box-c-list .all").find(".ico-rit-del").each(function () {
            var a = $(this).attr("id");
            $(this).on("click", function () {
                tuanCollection.clearCollect(a)
            })
        }), $("#assistant-box-c-list .all").hover(function () {
            $(this).css({"background-color": "#F0F0F0"}), $(this).find(".ico-rit-del").css({display: "block"})
        }, function () {
            $(this).css({"background-color": "#FFF"}), $(this).find(".ico-rit-del").css({display: "none"})
        })
    },
    clearCollect: function (a) {
        collectionOff = !0;
        var b = "";
        "undefined" == typeof a ? $("#assistant-box-c-list").find(".all").each(function () {
            "" == b ? b = $(this).attr("data-groupid") : b += "_" + $(this).attr("data-groupid")
        }) : b = a, "" != b
    },
    noCollectionGoods: function () {
        $(".gbfav-in-wu").show(), $(".pop-pagi-box").hide(), $(".gbfav-cont").css("padding-bottom", "0")
    },
    noLogin: function () {
        $(".group-assistant-collection .assistant-box-c").show(), $("#noLogin").show(), $("#okLogin").hide()
    },
    clearNoCollentionGoods: function () {
        $(".gbfav-in-wu").hide()
    },
    tabCollection: function () {
        $(".collection-status a").bind("click", function () {
            $(this).addClass("cur").siblings().removeClass("cur"), tuanCollection.pageCurrent = 1, tuanCollection.showCollection()
        })
    }
};
$("#noLogin a").click(function () {
    g.login()
}), $(".group-assistant-collection .icon").on("mouseenter", function () {
    3 == loginData.loginStatus ? (tuanCollection.getCollection(), tuanCollection.clickCollectButton(), tuanCollection.tabCollection(), $(".group-assistant-collection .assistant-box-c").show()) : tuanCollection.noLogin()
}), $(".group-assistant-collection").on("mouseenter", function () {
    collectionOff = !1
}), $(".group-assistant-collection").on("mouseleave", function () {
    collectionOff || $(".group-assistant-collection .assistant-box-c").hide()
});
/* gmpro-2.0.0/cheap/groupon/1.0.53 recentlyBrowse.js Date:2019-06-25 18:08:30 */
var clearoff = !1;
$(".group-assistant-browse").bind({
    mouseenter: function () {
        clearoff = !1, 0 == recentlyBrowse.flag && recentlyBrowse.getRecentlyBrowseData(recentlyBrowse.getRecentlyCookie()), $(".assistant-box-b").show()
    }, mouseleave: function () {
        clearoff || $(this).find(".assistant-box-b").hide()
    }
}), $(".group-assistant-browse").delegate(".pop-pagi-prev", "click", function () {
    clearoff = !0, recentlyBrowse.preRecentlyBrowse()
}), $(".group-assistant-browse").delegate(".pop-pagi-next", "click", function () {
    clearoff = !0, recentlyBrowse.nextRecentlyBrowse()
}), $(".assistant-bottom .remove").click(function () {
    clearoff = !0, recentlyBrowse.clearRecentlyBrowse()
});
/* gmpro-2.0.0/cheap/groupon/1.0.53 rushbuyTpl.js Date:2019-06-25 18:08:30 */
var rushbuyTpl = function () {
    this.rushbuyCurrentTpl = '{{if list && list.length>0}}{{each list as item index}}{{if item.label}}<li class="adverAll"><div class="adver clearfix">{{each item.children as adverList index}}<a href="{{adverList.url}}" target="_blank" title="{{adverList.name}}" data-code="{{item.modelId}}-{{index+1}}-1"><img class="descriptImg" src="static/picture/grey.gif" gome-src="{{adverList.src}}" width="550" height="290" alt="{{adverList.name}}"></a>{{/each}}</div></li>{{else}}<li itemid="{{item.itemId}}" class="nor {{if index==0 && item.extend=="1"}}super{{else}}normal{{/if}}"><a href="{{item.url}}" target="_blank" title="{{item.name}}" class="mi_img" data-code="{{item.modelid}}-{{index+1}}-1"><span class="status_img"></span><img class="descriptImg" src="static/picture/grey.gif" gome-src="{{item.imgUrl}}_260.jpg" width="260" height="260" alt="{{item.name}}"></a>{{if item.promoName!=""}}<div class="topName"><p>{{item.promoName}}</p></div>{{/if}}{{if !item.code}}<h2 class="mi_title"><span class="gome">\u56fd\u7f8e\u81ea\u8425</span><a class="mi_name" href="{{item.url}}" data-code="{{item.modelid}}-{{index+1}}-2" target="_blank" title="{{item.name}}">{{item.name}}</a></h2><div class="mi_content"><div class="mi_left"><div class="mi_price">\xa5<span></span><del></del></div><div class="mi_num"><span class="word"></span><span class="percent"><span class="sale"></span></span></div></div><div class="mi_right"><a class="jjks_btn" href="{{item.url}}" target="_blank" style="display:none" data-code="{{item.modelid}}-{{index+1}}-3">\u5373\u5c06\u5f00\u59cb</a><a class="yjs_btn" style="display:none;cursor:default;" data-code="{{item.modelid}}-{{index+1}}-3">\u5df2\u7ed3\u675f</a><a class="yqg_btn" style="display:none;cursor:default;" data-code="{{item.modelid}}-{{index+1}}-3">\u5df2\u62a2\u5149</a><a class="lijg_btn" href="{{item.url}}" target="_blank" style="display:none" data-code="{{item.modelid}}-{{index+1}}-3">\u7acb\u5373\u62a2\u8d2d</a></div></div>{{/if}}</li>{{/if}}{{/each}}{{/if}}', this.across = '{{if lis && lis.length>0}}{{each lis as acrossItem index}}<li><a href="{{acrossItem.href}}" target="_blank" data-code="8000020003-{{index+1}}"><img src="static/picture/grey.gif" gome-src="{{acrossItem.src}}"></a></li>{{/each}}{{/if}}'
};
/* gmpro-2.0.0/cheap/groupon/1.0.53 rushbuyLive.js Date:2019-06-25 18:08:30 */
$(function () {
    window.tuanAjax;
    var a = new window.rushbuyTpl;
    var b = a.rushbuyCurrentTpl;
    var c = $.cookie("atgregion");
    c || (c = "11011400|\u5317\u4eac\u5317\u4eac\u5e02\u4e1c\u57ce\u533a\u4e1c\u57ce\u533a|11010000|11000000|110114001");
    var d = c.split("|"), e = d[2];
    var f = function () {
        this.init()
    };
    f.prototype = {
        init: function () {
            var a = this.getUrlParam("itemId");
            this.linkData($(".nav_hover").attr("rank"), a), this.getTime(), this.across()
        }, navInit: function (a, b, c, d) {

        }, linkData: function (a, c) {
            var d = this;
            var e = $(".main_con ul").eq(a);
            var f = $(".nav_ul li").eq(a).attr("modelid");
        }, getUrlParam: function (a) {
            var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
            var c = window.location.search.substr(1).match(b);
            return null != c ? unescape(c[2]) : null
        }, eachScreenDom: function () {
            var a = this;
            var b = a.getScreenDom($(".clickAgo .nor"));
            b.each(function () {
                var b = $(this);
                if ("true" != b.attr("already")) {
                    var c = b.attr("itemid");
                    "nul" != c && "" != c && a.priceData(c, b)
                }
            })
        }, sliceData: function (a, b) {
            var c = [], d = [], e = [];
            return b === !0 ? (c = a.slice(0, 7), this.createUl(c, 7), d = a.slice(7, 15), this.createUl(d, 8), e = a.slice(15)) : (c = a.slice(0, 8), this.createUl(c, 8), d = a.slice(8, 16), this.createUl(d, 8), e = a.slice(16)), {
                arrayOne: c,
                arrayTwo: d,
                arrayThree: e
            }
        }, createUl: function (a, b) {
            if (a.length > 0 && a.length < b) {
                var c = b - a.length;
                if (c >= 4) for (var d = 0; c - 4 > d; d++) a.push({itemId: "nul"}); else for (var d = 0; c > d; d++) a.push({itemId: "nul"})
            }
            return a
        }, advertising: function () {
            var a = window.qianggou;
            var b = [];
            if (2 !== a.top.length && (window.qianggou.top = ""), a.bottom.length % 2 !== 0) {
                for (var c = 0; c < 2 * Math.floor(a.bottom.length / 2); c++) b.push(a.bottom[c]);
                a.bottom = b
            }
            return a
        }, tplRenderer: function (a, b, c) {
            var d = template.compile(a), b = b || {};
            return dataRenderedHtml = d(b), c && c.html(dataRenderedHtml), $.each(arguments, function (a, b) {
                b instanceof Function && b()
            }), dataRenderedHtml
        }, priceData: function (a, b) {
            var c = this;

        }, getTime: function () {
            var a = new Number($("#timeCurrent").val() || "0");
            var b = new Number($("#timeEnding").val() || "0");
            var c = $(".current .timeInfo");
            "" != b && b > a && $.gTimer({
                ct: a, et: b, iEven: function () {
                }, aEven: function () {
                    var a = this.dt.format("$hh");
                    var b = this.dt.format("$mm");
                    var d = this.dt.format("$s");
                    "00" === a && "00" === b && "00" === d ? (c.html("").siblings().html("\u5df2\u7ed3\u675f"), window.location.reload()) : (c.html(a + ":" + b + ":" + d), $(".current .end").html("\u8ddd\u79bb\u7ed3\u675f"))
                }, lEven: function () {
                }
            })
        }, across: function () {
            var a = new window.rushbuyTpl;
            var b = window.qianggou;
        }, getScreenDom: function (a) {
            var b = $(document).scrollTop();
            var c = $(document).scrollTop() + $(window).height();
            return $(a).filter(function () {
                var a = $(this).offset().top;
                return a >= b - 340 && c >= a ? !0 : !1
            })
        }, grayscale: function (a) {
            var b = this;
            var c = function () {
                var a = navigator.userAgent;
                var b = a.indexOf("Opera") > -1;
                var c = a.indexOf("compatible") > -1 && a.indexOf("MSIE") > -1 && !b;
                var d = a.indexOf("Edge") > -1;
                if (c) {
                    var e = new RegExp("MSIE (\\d+\\.\\d+);");
                    e.test(a);
                    var f = parseFloat(RegExp.$1);
                    return console.log(d), 10 == f || 11 == f || d ? !0 : !1
                }
                return !1
            }();
            if (a && 1 == c) {
                if (a.length > 0) a.each && a.each(function () {
                    b.grayscale(this)
                }); else if (/img/i.test(a.tagName)) {
                    document.grayscale || (document.body.insertAdjacentHTML("afterBegin", '<svg version="1.1" xmlns="//www.w3.org/2000/svg" class="dn">                    <filter id="grayscale">                        <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"/>                    </filter>                </svg>'), document.grayscale = !0);
                    var d = a.className, e = a.src;
                    var f = a.clientWidth, g = a.clientHeight;
                    a.grayscale || (a.insertAdjacentHTML("beforeBegin", '<svg id="beforeSvg" class="' + d + '"><image xmlns:xlink="//ww.w3.org/1999/xlink" xlink:href="' + e + '" x="0" y="0" width="' + f + '" height="' + g + '" filter="url(\'#grayscale\')"></image></svg>'), a.grayscale = !0)
                }
                return $(".mi_gray_img img.descriptImg").css("display", "none"), this
            }
        }
    };
    var g = new f;
    $(".mb_presell .mpr_num a").each(function () {
        var a = $(this);
        var b = "gome_groupon_cmpt_" + a.data("itemid");
        "Y" == $.trim($.cookie(b)) && a.addClass("active")
    }), $(".mb_presell li").each(function () {
        var a = $(this);
        $(".mpr_num a", a).click(function () {
            var a = $(this);
            var b = $(this).data("itemid");
            var c = "gome_groupon_cmpt_" + b;
            var d = "Y" == $.trim($.cookie(c)) ? "N" : "Y";
            g.navInit(b, d, c, a)
        })
    }), $(".nav_ul li").on("click", function () {
        var a = $(this).attr("rank");
        var b = $(this).index();
        var c = $(".main_con ul");
        var d = $(".main_con ul").eq(b);
        $(this).addClass("nav_hover").siblings().removeClass("nav_hover"), d.addClass("clickAgo").siblings().removeClass("clickAgo"), d.html() ? c.hide().eq(b).show() : (g.linkData(a), c.hide().eq(b).show())
    });
    var h = null;
    $(window).scroll(function () {
        clearTimeout(h), h = setTimeout(function () {
            g.eachScreenDom()
        }, 100)
    })
});
