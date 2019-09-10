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
    }
};
var customerServiceCall = new customerServiceCall;
if ($("[customer-service-button-id]").length > 0 && $("[customer-service-button-id]").eq(0).attr("isCall") != "prohibit") {
    customerServiceCall.initialCall()
}
var template = function (e, n) {
    return template[typeof n === "object" ? "render" : "compile"].apply(template, arguments)
};
(function (e, n) {
    "use strict";
    e.version = "2.0.1";
    e.openTag = "<%";
    e.closeTag = "%>";
    e.isEscape = true;
    e.isCompress = false;
    e.parser = null;
    e.render = function (e, n) {
        var r = t(e);
        if (r === undefined) {
            return i({id: e, name: "Render Error", message: "No Template"})
        }
        return r(n)
    };
    e.compile = function (n, t) {
        var o = arguments;
        var u = o[2];
        var c = "anonymous";
        if (typeof t !== "string") {
            u = o[1];
            t = o[0];
            n = c
        }
        try {
            var s = a(t, u)
        } catch (l) {
            l.id = n || t;
            l.name = "Syntax Error";
            return i(l)
        }

        function f(r) {
            try {
                return new s(r) + ""
            } catch (a) {
                if (!u) {
                    return e.compile(n, t, true)(r)
                }
                a.id = n || t;
                a.name = "Render Error";
                a.source = t;
                return i(a)
            }
        }

        f.prototype = s.prototype;
        f.toString = function () {
            return s.toString()
        };
        if (n !== c) {
            r[n] = f
        }
        return f
    };
    e.helper = function (n, r) {
        e.prototype[n] = r
    };
    e.onerror = function (e) {
        var r = "[template]:\n" + e.id + "\n\n[name]:\n" + e.name;
        if (e.message) {
            r += "\n\n[message]:\n" + e.message
        }
        if (e.line) {
            r += "\n\n[line]:\n" + e.line;
            r += "\n\n[source]:\n" + e.source.split(/\n/)[e.line - 1].replace(/^[\s\t]+/, "")
        }
        if (e.temp) {
            r += "\n\n[temp]:\n" + e.temp
        }
        if (n.console) {
            console.error(r)
        }
    };
    var r = {};
    var t = function (t) {
        var i = r[t];
        if (i === undefined && "document" in n) {
            var a = document.getElementById(t);
            if (a) {
                var o = a.value || a.innerHTML;
                return e.compile(t, o.replace(/^\s*|\s*$/g, ""))
            }
        } else if (r.hasOwnProperty(t)) {
            return i
        }
    };
    var i = function (n) {
        e.onerror(n);

        function r() {
            return r + ""
        }

        r.toString = function () {
            return "{Template Error}"
        };
        return r
    };
    var a = function () {
        e.prototype = {
            $render: e.render, $escape: function (e) {
                return typeof e === "string" ? e.replace(/&(?![\w#]+;)|[<>"']/g, function (e) {
                    return {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}[e]
                }) : e
            }, $string: function (e) {
                if (typeof e === "string" || typeof e === "number") {
                    return e
                } else if (typeof e === "function") {
                    return e()
                } else {
                    return ""
                }
            }
        };
        var n = Array.prototype.forEach || function (e, n) {
            var r = this.length >>> 0;
            for (var t = 0; t < r; t++) {
                if (t in this) {
                    e.call(n, this[t], t, this)
                }
            }
        };
        var r = function (e, r) {
            n.call(e, r)
        };
        var t = "break,case,catch,continue,debugger,default,delete,do,else,false" + ",finally,for,function,if,in,instanceof,new,null,return,switch,this" + ",throw,true,try,typeof,var,void,while,with" + ",abstract,boolean,byte,char,class,const,double,enum,export,extends" + ",final,float,goto,implements,import,int,interface,long,native" + ",package,private,protected,public,short,static,super,synchronized" + ",throws,transient,volatile" + ",arguments,let,yield" + ",undefined";
        var i = /\/\*(?:.|\n)*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|'[^']*'|"[^"]*"|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g;
        var a = /[^\w$]+/g;
        var o = new RegExp(["\\b" + t.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g");
        var u = /\b\d[^,]*/g;
        var c = /^,+|,+$/g;
        var s = function (e) {
            e = e.replace(i, "").replace(a, ",").replace(o, "").replace(u, "").replace(c, "");
            e = e ? e.split(/,+/) : [];
            return e
        };
        return function (n, t) {
            var i = e.openTag;
            var a = e.closeTag;
            var o = e.parser;
            var u = n;
            var c = "";
            var l = 1;
            var f = {$data: true, $helpers: true, $out: true, $line: true};
            var p = e.prototype;
            var d = {};
            var v = "var $helpers=this," + (t ? "$line=0," : "");
            var g = "".trim;
            var $ = g ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"];
            var m = g ? "if(content!==undefined){$out+=content;return content}" : "$out.push(content);";
            var h = "function(content){" + m + "}";
            var y = "function(id,data){" + "if(data===undefined){data=$data}" + "var content=$helpers.$render(id,data);" + m + "}";
            r(u.split(i), function (e, n) {
                e = e.split(a);
                var r = e[0];
                var t = e[1];
                if (e.length === 1) {
                    c += E(r)
                } else {
                    c += x(r);
                    if (t) {
                        c += E(t)
                    }
                }
            });
            u = c;
            if (t) {
                u = "try{" + u + "}catch(e){" + "e.line=$line;" + "throw e" + "}"
            }
            u = "'use strict';" + v + $[0] + u + "return new String(" + $[3] + ")";
            try {
                var w = new Function("$data", u);
                w.prototype = d;
                return w
            } catch (b) {
                b.temp = "function anonymous($data) {" + u + "}";
                throw b
            }

            function E(n) {
                l += n.split(/\n/).length - 1;
                if (e.isCompress) {
                    n = n.replace(/[\n\r\t\s]+/g, " ")
                }
                n = n.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n");
                n = $[1] + "'" + n + "'" + $[2];
                return n + "\n"
            }

            function x(n) {
                var r = l;
                if (o) {
                    n = o(n)
                } else if (t) {
                    n = n.replace(/\n/g, function () {
                        l++;
                        return "$line=" + l + ";"
                    })
                }
                if (n.indexOf("=") === 0) {
                    var i = n.indexOf("==") !== 0;
                    n = n.replace(/^=*|[\s;]*$/g, "");
                    if (i && e.isEscape) {
                        var a = n.replace(/\s*\([^\)]+\)/, "");
                        if (!p.hasOwnProperty(a) && !/^(include|print)$/.test(a)) {
                            n = "$escape($string(" + n + "))"
                        }
                    } else {
                        n = "$string(" + n + ")"
                    }
                    n = $[1] + n + $[2]
                }
                if (t) {
                    n = "$line=" + r + ";" + n
                }
                O(n);
                return n + "\n"
            }

            function O(e) {
                e = s(e);
                r(e, function (e) {
                    if (!f.hasOwnProperty(e)) {
                        T(e);
                        f[e] = true
                    }
                })
            }

            function T(e) {
                var n;
                if (e === "print") {
                    n = h
                } else if (e === "include") {
                    d["$render"] = p["$render"];
                    n = y
                } else {
                    n = "$data." + e;
                    if (p.hasOwnProperty(e)) {
                        d[e] = p[e];
                        if (e.indexOf("$") === 0) {
                            n = "$helpers." + e
                        } else {
                            n = n + "===undefined?$helpers." + e + ":" + n
                        }
                    }
                }
                v += e + "=" + n + ","
            }
        }
    }()
})(template, this);
if (typeof define === "function") {
    define(function (e, n, r) {
        r.exports = template
    })
}
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
        qtyUpdate: y,
        tplHelp: p,
        twoScroll: I,
        twoCartH: s,
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
        l().then(u(t))
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

})(window);
searchInput();

function searchInput() {
    $(".topOvertips").click(function () {
        $(this).hide();
        $(this).siblings("input").focus()
    });
    $("#searchInput").focus(function () {
        $(".top_earch,.searchInput").addClass("focuscurs");
        $(".topOvertips").hide();
        $(this).siblings("label").hide()
    });
    $("#searchInput").blur(function () {
        $(".top_earch,.searchInput").removeClass("focuscurs");
        var e = $("#searchInput").val();
        if (e == "") {
            $(".topOvertips").show()
        } else {
            $(".topOvertips").hide()
        }
    })
}

function doSearch() {
    var e = $("#searchInput").val();
    if ($.trim(e) == "") {
        var a = $.trim($("#keyLabel").text());
        $("#keyLabel").hide();
        $("#searchInput").val(a)
    }
    if (e.length > 40) {
        e = e.substring(0, 40);
        $("#searchInput").val(e)
    }
    $("#searchForm").submit();
    return false
}

function keyCheck() {
    var e = $("#searchInput").val();
    if (e == "") {
        $("#searchInput").value = "手机";
        return false
    } else {
        $(".topOvertips").hide();
        var a = e.replace(/^\s+|\s+$/g, "");
        if (a == "") {
            $("#searchInput").value = "手机";
            return false
        } else {
            return true
        }
    }
}

function getDefaultKey(e) {
    var a;
    var t = 0;
    var r = "";
    var s;
    a = e.split(";");
    for (var l = 0; l < a.length; l++) {
        var n = parseInt(a[l].split(",")[1]);
        var u = parseInt($.cookie("key_default_value" + encodeURI(a[l].split(",")[0])) == null ? 0 : $.cookie("key_default_value" + encodeURI(a[l].split(",")[0])));
        var i = n - u;
        t += i;
        for (var o = 0; o < i; o++) {
            r += a[l].split(",")[0] + ","
        }
    }
    if (t != 0) {
        r = r.substring(0, r.length - 1);
        var c = parseInt(Math.random() * -t + t);
        s = $.trim(r.split(",")[c]);
        $.cookie("key_default_value" + encodeURI(s), parseInt($.cookie("key_default_value" + encodeURI(s)) == null ? 0 : $.cookie("key_default_value" + encodeURI(s))) + 1, {path: "/"})
    } else {
        for (var l = 0; l < a.length; l++) {
            $.cookie("key_default_value" + encodeURI($.trim(a[l].split(",")[0])), 0, {path: "/"})
        }
        s = getDefaultKey(e)
    }
    return s
}


$(function () {
    var e = $("#keyLabel").attr("default");
    if (e != null && e != "") {
        var a = getDefaultKey(e);
        $("#keyLabel").text(a)
    }
    var t = $("#searchInput").val();
    if (t == null || t == "") {
        $("#keyLabel").show()
    } else {
        $("#keyLabel").hide()
    }
});
var flag;
var $li = $(".gomeNavList");
$li.removeClass("curArrow");
switch (flag) {
    case 1:
        $li.eq(1).addClass("curArrow");
        break;
    case 2:
        $li.eq(2).addClass("curArrow");
        break;
    case 3:
        $li.eq(3).addClass("curArrow");
        break;
    default:
        $li.eq(0).addClass("curArrow")
}
$(".gomeNav li").on("mouseover", function () {
    $(this).addClass("navCur").siblings().removeClass("navCur")
}).on("mouseout", function () {
    $(this).removeClass("navCur")
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

    $(".customer-receiver").hover(function () {
        $(".consignee").css('display','block');
    },function () {
        $(".consignee").css('display','none');
    });

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
        }  else {
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
var gomeLib = gomeLib || {};
(function ($) {
    $.fn.ajaxSubmit = function (options) {
        if (typeof options == "function") options = {success: options};
        options = $.extend({
            url: this.attr("action") || window.location,
            type: this.attr("method") || "GET"
        }, options || {});
        var a = this.formToArray(options.semantic);
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) return this;
        var veto = {};
        $.event.trigger("form.submit.validate", [a, this, options, veto]);
        if (veto.veto) return this;
        var q = $.param(a);
        if (options.type.toUpperCase() == "GET") {
            options.url += (options.url.indexOf("?") >= 0 ? "&" : "?") + q;
            options.data = null
        } else options.data = q;
        var $form = this, callbacks = [];
        if (options.resetForm) callbacks.push(function () {
            $form.resetForm()
        });
        if (options.clearForm) callbacks.push(function () {
            $form.clearForm()
        });
        if (!options.dataType && options.target) {
            var oldSuccess = options.success;
            callbacks.push(function (e) {
                $(options.target).attr("innerHTML", e).evalScripts().each(oldSuccess, arguments)
            })
        } else if (options.success) callbacks.push(options.success);
        options.success = function (e, t) {
            for (var o = 0, n = callbacks.length; o < n; o++) callbacks[o](e, t, $form)
        };
        var files = $("input:file", this).fieldValue();
        var found = false;
        for (var j = 0; j < files.length; j++) if (files[j]) found = true;
        if (options.iframe || found) fileUpload();
        $.event.trigger("form.submit.notify", [this, options]);
        return this;

        function fileUpload() {
            var form = $form[0];
            var id = "jqFormIO" + $.fn.ajaxSubmit.counter++;
            var $io = $('<iframe id="' + id + '" name="' + id + '" />');
            var io = $io[0];
            var op8 = $.browser.opera && window.opera.version() < 9;
            if ($.browser.msie || op8) io.src = 'javascript:false;document.write("");';
            $io.css({position: "absolute", top: "-1000px", left: "-1000px"});
            var xhr = {
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: "n/a",
                getAllResponseHeaders: function () {
                },
                getResponseHeader: function () {
                },
                setRequestHeader: function () {
                }
            };
            var g = opts.global;
            if (g && !$.active++) $.event.trigger("ajaxStart");
            if (g) $.event.trigger("ajaxSend", [xhr, opts]);
            var cbInvoked = 0;
            var timedOut = 0;
            setTimeout(function () {
                $io.appendTo("body");
                io.attachEvent ? io.attachEvent("onload", cb) : io.addEventListener("load", cb, false);
                var e = form.encoding ? "encoding" : "enctype";
                var t = $form.attr("target");
                $form.attr({target: id, method: "POST", encAttr: "multipart/form-data", action: opts.url});
                if (opts.timeout) setTimeout(function () {
                    timedOut = true;
                    cb()
                }, opts.timeout);
                form.submit();
                $form.attr("target", t)
            }, 10);

            function cb() {
                if (cbInvoked++) return;
                io.detachEvent ? io.detachEvent("onload", cb) : io.removeEventListener("load", cb, false);
                var ok = true;
                try {
                    if (timedOut) throw"timeout";
                    var data, doc;
                    doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
                    xhr.responseText = doc.body ? doc.body.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (opts.dataType == "json" || opts.dataType == "script") {
                        var ta = doc.getElementsByTagName("textarea")[0];
                        data = ta ? ta.value : xhr.responseText;
                        if (opts.dataType == "json") eval("data = " + data); else $.globalEval(data)
                    } else if (opts.dataType == "xml") {
                        data = xhr.responseXML;
                        if (!data && xhr.responseText != null) data = toXml(xhr.responseText)
                    } else {
                        data = xhr.responseText
                    }
                } catch (e) {
                    ok = false;
                    $.handleError(opts, xhr, "error", e)
                }
                if (ok) {
                    opts.success(data, "success");
                    if (g) $.event.trigger("ajaxSuccess", [xhr, opts])
                }
                if (g) $.event.trigger("ajaxComplete", [xhr, opts]);
                if (g && !--$.active) $.event.trigger("ajaxStop");
                if (opts.complete) opts.complete(xhr, ok ? "success" : "error");
                setTimeout(function () {
                    $io.remove();
                    xhr.responseXML = null
                }, 100)
            }

            function toXml(e, t) {
                if (window.ActiveXObject) {
                    t = new ActiveXObject("Microsoft.XMLDOM");
                    t.async = "false";
                    t.loadXML(e)
                } else t = (new DOMParser).parseFromString(e, "text/xml");
                return t && t.documentElement && t.documentElement.tagName != "parsererror" ? t : null
            }
        }
    };
    $.fn.ajaxSubmit.counter = 0;
    $.fn.ajaxForm = function (e) {
        return this.ajaxFormUnbind().submit(submitHandler).each(function () {
            this.formPluginId = $.fn.ajaxForm.counter++;
            $.fn.ajaxForm.optionHash[this.formPluginId] = e;
            $(":submit,input:image", this).click(clickHandler)
        })
    };
    $.fn.ajaxForm.counter = 1;
    $.fn.ajaxForm.optionHash = {};

    function clickHandler(e) {
        var t = this.form;
        t.clk = this;
        if (this.type == "image") {
            if (e.offsetX != undefined) {
                t.clk_x = e.offsetX;
                t.clk_y = e.offsetY
            } else if (typeof $.fn.offset == "function") {
                var o = $(this).offset();
                t.clk_x = e.pageX - o.left;
                t.clk_y = e.pageY - o.top
            } else {
                t.clk_x = e.pageX - this.offsetLeft;
                t.clk_y = e.pageY - this.offsetTop
            }
        }
        setTimeout(function () {
            t.clk = t.clk_x = t.clk_y = null
        }, 10)
    }

    function submitHandler() {
        var e = this.formPluginId;
        var t = $.fn.ajaxForm.optionHash[e];
        $(this).ajaxSubmit(t);
        return false
    }

    $.fn.ajaxFormUnbind = function () {
        this.unbind("submit", submitHandler);
        return this.each(function () {
            $(":submit,input:image", this).unbind("click", clickHandler)
        })
    };
    $.fn.formToArray = function (e) {
        var t = [];
        if (this.length == 0) return t;
        var o = this[0];
        var n = e ? o.getElementsByTagName("*") : o.elements;
        if (!n) return t;
        for (var a = 0, r = n.length; a < r; a++) {
            var i = n[a];
            var s = i.name;
            if (!s) continue;
            if (e && o.clk && i.type == "image") {
                if (!i.disabled && o.clk == i) t.push({name: s + ".x", value: o.clk_x}, {
                    name: s + ".y",
                    value: o.clk_y
                });
                continue
            }
            var c = $.fieldValue(i, true);
            if (c && c.constructor == Array) {
                for (var f = 0, l = c.length; f < l; f++) t.push({name: s, value: c[f]})
            } else if (c !== null && typeof c != "undefined") t.push({name: s, value: c})
        }
        if (!e && o.clk) {
            var u = o.getElementsByTagName("input");
            for (var a = 0, r = u.length; a < r; a++) {
                var p = u[a];
                var s = p.name;
                if (s && !p.disabled && p.type == "image" && o.clk == p) t.push({
                    name: s + ".x",
                    value: o.clk_x
                }, {name: s + ".y", value: o.clk_y})
            }
        }
        return t
    };
    $.fn.formSerialize = function (e) {
        return $.param(this.formToArray(e))
    };
    $.fn.fieldSerialize = function (e) {
        var t = [];
        this.each(function () {
            var o = this.name;
            if (!o) return;
            var n = $.fieldValue(this, e);
            if (n && n.constructor == Array) {
                for (var a = 0, r = n.length; a < r; a++) t.push({name: o, value: n[a]})
            } else if (n !== null && typeof n != "undefined") t.push({name: this.name, value: n})
        });
        return $.param(t)
    };
    $.fn.fieldValue = function (e) {
        for (var t = [], o = 0, n = this.length; o < n; o++) {
            var a = this[o];
            var r = $.fieldValue(a, e);
            if (r === null || typeof r == "undefined" || r.constructor == Array && !r.length) continue;
            r.constructor == Array ? $.merge(t, r) : t.push(r)
        }
        return t
    };
    $.fieldValue = function (e, t) {
        var o = e.name, n = e.type, a = e.tagName.toLowerCase();
        if (typeof t == "undefined") t = true;
        if (t && (!o || e.disabled || n == "reset" || (n == "checkbox" || n == "radio") && !e.checked || a == "select" && e.selectedIndex == -1)) return null;
        if (a == "select") {
            var r = e.selectedIndex;
            if (r < 0) return null;
            var i = [], s = e.options;
            var c = n == "select-one";
            var f = c ? r + 1 : s.length;
            for (var l = c ? r : 0; l < f; l++) {
                var u = s[l];
                if (u.selected) {
                    var p = $.browser.msie && !u.attributes["value"].specified ? u.text : u.value;
                    if (c) return p;
                    i.push(p)
                }
            }
            return i
        }
        return e.value
    };
    $.fn.clearForm = function () {
        return this.each(function () {
            $("input,select,textarea", this).clearFields()
        })
    };
    $.fn.clearFields = $.fn.clearInputs = function () {
        return this.each(function () {
            var e = this.type, t = this.tagName.toLowerCase();
            if (e == "text" || e == "password" || t == "textarea") this.value = ""; else if (e == "checkbox" || e == "radio") this.checked = false; else if (t == "select") this.selectedIndex = -1
        })
    };
    $.fn.resetForm = function () {
        return this.each(function () {
            if (typeof this.reset == "function" || typeof this.reset == "object" && !this.reset.nodeType) this.reset()
        })
    }
})(jQuery);
(function () {
    function t(e, n) {
        function c(t) {
            if (c[t] !== j) return c[t];
            var e;
            if ("bug-string-char-index" == t) e = "a" != "a"[0]; else if ("json" == t) e = c("json-stringify") && c("json-parse"); else {
                var r;
                if ("json-stringify" == t) {
                    e = n.stringify;
                    var o = "function" == typeof e && d;
                    if (o) {
                        (r = function () {
                            return 1
                        }).toJSON = r;
                        try {
                            o = "0" === e(0) && "0" === e(new i) && '""' == e(new a) && e(b) === j && e(j) === j && e() === j && "1" === e(r) && "[1]" == e([r]) && "[null]" == e([j]) && "null" == e(null) && "[null,null,null]" == e([j, b, null]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == e({a: [r, !0, !1, null, "\x00\b\n\f\r	"]}) && "1" === e(null, r) && "[\n 1,\n 2\n]" == e([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == e(new f(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == e(new f(864e13)) && '"-000001-01-01T00:00:00.000Z"' == e(new f(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == e(new f(-1))
                        } catch (l) {
                            o = !1
                        }
                    }
                    e = o
                }
                if ("json-parse" == t) {
                    e = n.parse;
                    if ("function" == typeof e) try {
                        if (0 === e("0") && !e(!1)) {
                            r = e('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var u = 5 == r.a.length && 1 === r.a[0];
                            if (u) {
                                try {
                                    u = !e('"	"')
                                } catch (s) {
                                }
                                if (u) try {
                                    u = 1 !== e("01")
                                } catch (h) {
                                }
                                if (u) try {
                                    u = 1 !== e("1.")
                                } catch (p) {
                                }
                            }
                        }
                    } catch (g) {
                        u = !1
                    }
                    e = u
                }
            }
            return c[t] = !!e
        }

        e || (e = o.Object());
        n || (n = o.Object());
        var i = e.Number || o.Number, a = e.String || o.String, l = e.Object || o.Object, f = e.Date || o.Date,
            u = e.SyntaxError || o.SyntaxError, s = e.TypeError || o.TypeError, h = e.Math || o.Math,
            p = e.JSON || o.JSON;
        "object" == typeof p && p && (n.stringify = p.stringify, n.parse = p.parse);
        var l = l.prototype, b = l.toString, g, y, j, d = new f(-0xc782b5b800cec);
        try {
            d = -109252 == d.getUTCFullYear() && 0 === d.getUTCMonth() && 1 === d.getUTCDate() && 10 == d.getUTCHours() && 37 == d.getUTCMinutes() && 6 == d.getUTCSeconds() && 708 == d.getUTCMilliseconds()
        } catch (C) {
        }
        if (!c("json")) {
            var v = c("bug-string-char-index");
            if (!d) var S = h.floor, O = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], A = function (t, e) {
                return O[e] + 365 * (t - 1970) + S((t - 1969 + (e = +(1 < e))) / 4) - S((t - 1901 + e) / 100) + S((t - 1601 + e) / 400)
            };
            (g = l.hasOwnProperty) || (g = function (t) {
                var e = {}, r;
                (e.__proto__ = null, e.__proto__ = {toString: 1}, e).toString != b ? g = function (t) {
                    var e = this.__proto__;
                    t = t in (this.__proto__ = null, this);
                    this.__proto__ = e;
                    return t
                } : (r = e.constructor, g = function (t) {
                    var e = (this.constructor || r).prototype;
                    return t in this && !(t in e && this[t] === e[t])
                });
                e = null;
                return g.call(this, t)
            });
            y = function (t, e) {
                var n = 0, o, c, i;
                (o = function () {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                c = new o;
                for (i in c) g.call(c, i) && n++;
                o = c = null;
                n ? y = 2 == n ? function (t, e) {
                    var r = {}, n = "[object Function]" == b.call(t), o;
                    for (o in t) n && "prototype" == o || g.call(r, o) || !(r[o] = 1) || !g.call(t, o) || e(o)
                } : function (t, e) {
                    var r = "[object Function]" == b.call(t), n, o;
                    for (n in t) r && "prototype" == n || !g.call(t, n) || (o = "constructor" === n) || e(n);
                    (o || g.call(t, n = "constructor")) && e(n)
                } : (c = "valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "), y = function (t, e) {
                    var n = "[object Function]" == b.call(t), o,
                        i = !n && "function" != typeof t.constructor && r[typeof t.hasOwnProperty] && t.hasOwnProperty || g;
                    for (o in t) n && "prototype" == o || !i.call(t, o) || e(o);
                    for (n = c.length; o = c[--n]; i.call(t, o) && e(o)) ;
                });
                return y(t, e)
            };
            if (!c("json-stringify")) {
                var w = {92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t"},
                    T = function (t, e) {
                        return ("000000" + (e || 0)).slice(-t)
                    }, _ = function (t) {
                        for (var e = '"', r = 0, n = t.length, o = !v || 10 < n, c = o && (v ? t.split("") : t); r < n; r++) {
                            var i = t.charCodeAt(r);
                            switch (i) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    e += w[i];
                                    break;
                                default:
                                    if (32 > i) {
                                        e += "\\u00" + T(2, i.toString(16));
                                        break
                                    }
                                    e += o ? c[r] : t.charAt(r)
                            }
                        }
                        return e + '"'
                    }, N = function (t, e, r, n, o, c, i) {
                        var a, l, f, u, h, p, d, C, v;
                        try {
                            a = e[t]
                        } catch (O) {
                        }
                        if ("object" == typeof a && a) if (l = b.call(a), "[object Date]" != l || g.call(a, "toJSON")) "function" == typeof a.toJSON && ("[object Number]" != l && "[object String]" != l && "[object Array]" != l || g.call(a, "toJSON")) && (a = a.toJSON(t)); else if (a > -1 / 0 && a < 1 / 0) {
                            if (A) {
                                u = S(a / 864e5);
                                for (l = S(u / 365.2425) + 1970 - 1; A(l + 1, 0) <= u; l++) ;
                                for (f = S((u - A(l, 0)) / 30.42); A(l, f + 1) <= u; f++) ;
                                u = 1 + u - A(l, f);
                                h = (a % 864e5 + 864e5) % 864e5;
                                p = S(h / 36e5) % 24;
                                d = S(h / 6e4) % 60;
                                C = S(h / 1e3) % 60;
                                h %= 1e3
                            } else l = a.getUTCFullYear(), f = a.getUTCMonth(), u = a.getUTCDate(), p = a.getUTCHours(), d = a.getUTCMinutes(), C = a.getUTCSeconds(), h = a.getUTCMilliseconds();
                            a = (0 >= l || 1e4 <= l ? (0 > l ? "-" : "+") + T(6, 0 > l ? -l : l) : T(4, l)) + "-" + T(2, f + 1) + "-" + T(2, u) + "T" + T(2, p) + ":" + T(2, d) + ":" + T(2, C) + "." + T(3, h) + "Z"
                        } else a = null;
                        r && (a = r.call(e, t, a));
                        if (null === a) return "null";
                        l = b.call(a);
                        if ("[object Boolean]" == l) return "" + a;
                        if ("[object Number]" == l) return a > -1 / 0 && a < 1 / 0 ? "" + a : "null";
                        if ("[object String]" == l) return _("" + a);
                        if ("object" == typeof a) {
                            for (t = i.length; t--;) if (i[t] === a) throw s();
                            i.push(a);
                            v = [];
                            e = c;
                            c += o;
                            if ("[object Array]" == l) {
                                f = 0;
                                for (t = a.length; f < t; f++) l = N(f, a, r, n, o, c, i), v.push(l === j ? "null" : l);
                                t = v.length ? o ? "[\n" + c + v.join(",\n" + c) + "\n" + e + "]" : "[" + v.join(",") + "]" : "[]"
                            } else y(n || a, function (t) {
                                var e = N(t, a, r, n, o, c, i);
                                e !== j && v.push(_(t) + ":" + (o ? " " : "") + e)
                            }), t = v.length ? o ? "{\n" + c + v.join(",\n" + c) + "\n" + e + "}" : "{" + v.join(",") + "}" : "{}";
                            i.pop();
                            return t
                        }
                    };
                n.stringify = function (t, e, n) {
                    var o, c, i, a;
                    if (r[typeof e] && e) if ("[object Function]" == (a = b.call(e))) c = e; else if ("[object Array]" == a) {
                        i = {};
                        for (var l = 0, f = e.length, u; l < f; u = e[l++], (a = b.call(u), "[object String]" == a || "[object Number]" == a) && (i[u] = 1)) ;
                    }
                    if (n) if ("[object Number]" == (a = b.call(n))) {
                        if (0 < (n -= n % 1)) for (o = "", 10 < n && (n = 10); o.length < n; o += " ") ;
                    } else "[object String]" == a && (o = 10 >= n.length ? n : n.slice(0, 10));
                    return N("", (u = {}, u[""] = t, u), c, i, o, "", [])
                }
            }
            if (!c("json-parse")) {
                var U = a.fromCharCode,
                    J = {92: "\\", 34: '"', 47: "/", 98: "\b", 116: "	", 110: "\n", 102: "\f", 114: "\r"}, m, x,
                    k = function () {
                        m = x = null;
                        throw u()
                    }, M = function () {
                        for (var t = x, e = t.length, r, n, o, c, i; m < e;) switch (i = t.charCodeAt(m), i) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                m++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                return r = v ? t.charAt(m) : t[m], m++, r;
                            case 34:
                                r = "@";
                                for (m++; m < e;) if (i = t.charCodeAt(m), 32 > i) k(); else if (92 == i) switch (i = t.charCodeAt(++m), i) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        r += J[i];
                                        m++;
                                        break;
                                    case 117:
                                        n = ++m;
                                        for (o = m + 4; m < o; m++) i = t.charCodeAt(m), 48 <= i && 57 >= i || 97 <= i && 102 >= i || 65 <= i && 70 >= i || k();
                                        r += U("0x" + t.slice(n, m));
                                        break;
                                    default:
                                        k()
                                } else {
                                    if (34 == i) break;
                                    i = t.charCodeAt(m);
                                    for (n = m; 32 <= i && 92 != i && 34 != i;) i = t.charCodeAt(++m);
                                    r += t.slice(n, m)
                                }
                                if (34 == t.charCodeAt(m)) return m++, r;
                                k();
                            default:
                                n = m;
                                45 == i && (c = !0, i = t.charCodeAt(++m));
                                if (48 <= i && 57 >= i) {
                                    for (48 == i && (i = t.charCodeAt(m + 1), 48 <= i && 57 >= i) && k(); m < e && (i = t.charCodeAt(m), 48 <= i && 57 >= i); m++) ;
                                    if (46 == t.charCodeAt(m)) {
                                        for (o = ++m; o < e && (i = t.charCodeAt(o), 48 <= i && 57 >= i); o++) ;
                                        o == m && k();
                                        m = o
                                    }
                                    i = t.charCodeAt(m);
                                    if (101 == i || 69 == i) {
                                        i = t.charCodeAt(++m);
                                        43 != i && 45 != i || m++;
                                        for (o = m; o < e && (i = t.charCodeAt(o), 48 <= i && 57 >= i); o++) ;
                                        o == m && k();
                                        m = o
                                    }
                                    return +t.slice(n, m)
                                }
                                c && k();
                                if ("true" == t.slice(m, m + 4)) return m += 4, !0;
                                if ("false" == t.slice(m, m + 5)) return m += 5, !1;
                                if ("null" == t.slice(m, m + 4)) return m += 4, null;
                                k()
                        }
                        return "$"
                    }, F = function (t) {
                        var e, r;
                        "$" == t && k();
                        if ("string" == typeof t) {
                            if ("@" == (v ? t.charAt(0) : t[0])) return t.slice(1);
                            if ("[" == t) {
                                for (e = []; ; r || (r = !0)) {
                                    t = M();
                                    if ("]" == t) break;
                                    r && ("," == t ? (t = M(), "]" == t && k()) : k());
                                    "," == t && k();
                                    e.push(F(t))
                                }
                                return e
                            }
                            if ("{" == t) {
                                for (e = {}; ; r || (r = !0)) {
                                    t = M();
                                    if ("}" == t) break;
                                    r && ("," == t ? (t = M(), "}" == t && k()) : k());
                                    "," != t && "string" == typeof t && "@" == (v ? t.charAt(0) : t[0]) && ":" == M() || k();
                                    e[t.slice(1)] = F(M())
                                }
                                return e
                            }
                            k()
                        }
                        return t
                    }, D = function (t, e, r) {
                        r = E(t, e, r);
                        r === j ? delete t[e] : t[e] = r
                    }, E = function (t, e, r) {
                        var n = t[e], o;
                        if ("object" == typeof n && n) if ("[object Array]" == b.call(n)) for (o = n.length; o--;) D(n, o, r); else y(n, function (t) {
                            D(n, t, r)
                        });
                        return r.call(t, e, n)
                    };
                n.parse = function (t, e) {
                    var r, n;
                    m = 0;
                    x = "" + t;
                    r = F(M());
                    "$" != M() && k();
                    m = x = null;
                    return e && "[object Function]" == b.call(e) ? E((n = {}, n[""] = r, n), "", e) : r
                }
            }
        }
        n.runInContext = t;
        return n
    }

    var e = typeof define === "function" && define.amd, r = {"function": !0, object: !0},
        n = r[typeof exports] && exports && !exports.nodeType && exports, o = r[typeof window] && window || this,
        c = n && r[typeof module] && module && !module.nodeType && "object" == typeof global && global;
    !c || c.global !== c && c.window !== c && c.self !== c || (o = c);
    if (n && !e) t(o, n); else {
        var i = o.JSON, a = o.JSON3, l = !1, f = t(o, o.JSON3 = {
            noConflict: function () {
                l || (l = !0, o.JSON = i, o.JSON3 = a, i = a = null);
                return f
            }
        });
        o.JSON = {parse: f.parse, stringify: f.stringify}
    }
    e && define(function () {
        return f
    })
}).call(this);
(function (t) {
    t.fn.gLoad = function (e, i) {
        if (typeof e == "function") {
            e = {e: e}
        }
        if (parseInt(i) > 0) {
            e.df = i
        }
        var n = {df: 20, e: null, et: "scroll", ct: window};
        if (e) {
            t.extend(n, e)
        }
        var o = this;
        if ("scroll" == n.et) {
            t(n.ct).bind("scroll", function () {
                o.each(function () {
                    if (!t.gIsKs(this, n)) {
                        t(this).trigger("appear")
                    }
                });
                var e = t.grep(o, function (t) {
                    return !t.loaded
                });
                o = t(e)
            })
        }
        this.each(function () {
            var e = this;
            e.loaded = false;
            t(e).one("appear", function () {
                if (!this.loaded) {
                    if (n.e != null && n.e != "") n.e.apply(e);
                    e.loaded = true
                }
            });
            if ("scroll" != n.et) {
                t(e).bind(n.et, function (i) {
                    if (!e.loaded) {
                        t(e).trigger("appear")
                    }
                })
            }
        });
        t(window).scroll();
        return this
    };
    t.gIsKs = function (e, i) {
        if (i.ct === undefined || i.ct === window) {
            var n = t(window).height() + t(window).scrollTop()
        } else {
            var n = t(i.ct).offset().top + t(i.ct).height()
        }
        return n <= t(e).offset().top - i.df
    }
})(jQuery);
(function (e) {
    e.fn.gclickshow = function (i) {
        var s = {hbox: ".jhbox", Class: "hover"};
        var i = e.extend(s, i), n = i.hbox, h = i.Class, o = e(this);
        return this.each(function () {
            e(n).hide();
            e(this).click(function () {
                if (e(n).is(":hidden")) {
                    e(n).show();
                    e(o).addClass(h)
                } else {
                    e(n).hide();
                    e(o).removeClass(h)
                }
            });
            e(n).hover(function () {
            }, function () {
                e(n).hide();
                e(o).removeClass(h)
            })
        })
    }
})(jQuery);
(function (t) {
    t.fn.ghover = function (e) {
        var a = {targetId: "self", addcss: "cur", latertime: 150, prat: 0, e: null, pratclass: "pcur"};
        var e = t.extend(a, e), r = e.targetId, s = e.addcss, n = e.latertime, i = e.prat, c = e.pratclass, l;
        return this.each(function () {
            if (r == "self") {
                var a = t(this)
            } else {
                var a = e.targetId
            }
            t(this).hover(function () {
                function r() {
                    t(a).addClass(s);
                    if (e.e) {
                        e.e.apply(a)
                    }
                }

                l = setTimeout(r, n)
            }, function () {
                t(a).removeClass(s);
                clearTimeout(l)
            });
            if (i == 1) {
                t(a).parent().hover(function () {
                    t(this).addClass(c)
                }, function () {
                    t(this).removeClass(c)
                })
            }
        })
    }
})(jQuery);
(function (i) {
    i.fn.ginputfocus = function (s) {
        var n = {curClass: "cur"};
        var s = i.extend(n, s), t = s.curClass;
        return this.each(function () {
            var s = i(this).siblings("label");
            i(s).click(function () {
                i(this).hide();
                i(this).siblings("input").focus()
            });
            i(this).focus(function () {
                i(this).parent().addClass(t);
                i(this).siblings("label").hide()
            });
            i(this).blur(function () {
                i(this).parent().removeClass(t);
                if (this.value == "") {
                    i(this).siblings("label").show()
                }
            })
        })
    }
})(jQuery);
(function (t) {
    t.fn.glaterimg = function (i) {
        var n = {rattr: "gome-src"};
        var i = t.extend(n, i), r = i.rattr;
        return this.each(function () {
            t(this).hover(function () {
                t(this).find("img").each(function () {
                    var i = t(this).attr(r);
                    if (i != undefined) {
                        this.src = t(this).attr(r);
                        t(this).removeAttr(r)
                    }
                })
            }, function () {
            })
        })
    }
})(jQuery);
(function (r) {
    r.fn.greplaceimg = function (t) {
        var n = {narrow: 1024, rpimg: "grey.gif", cusattr: "gome-src"};
        var t = r.extend(n, t), i = screen.width, a = t.narrow, s = t.rpimg;
        nAttr = t.cusattr;
        return this.each(function () {
            var t = r(this).find("img");
            t.each(function () {
                var t = "src";
                var n = r(this).attr("src");
                if (n.indexOf(s) != -1) {
                    t = nAttr;
                    n = r(this).attr(nAttr)
                }
                if (i <= a) {
                    var e = n.lastIndexOf(".");
                    var c = n.substring(0, e) + "_s" + n.substring(e);
                    r(this).attr(t, c)
                }
            })
        })
    }
})(jQuery);
(function (e) {
    e.fn.gshowhide = function (i) {
        var n = {box: ".jhbox", Class: "current", latertime: 150, bind: "click"};
        var i = e.extend(n, i), o = i.box, s = i.Class, t = e(this), h = i.bind, c = i.latertime, r;
        return this.each(function () {
            e(o).hide();
            e(this).click(function () {
                if (e(o).is(":hidden")) {
                    e(o).show();
                    e(t).addClass(s)
                } else {
                    e(o).hide();
                    e(t).removeClass(s)
                }
            });
            e(o).hover(function () {
            }, function () {
                e(o).hide();
                e(t).removeClass(s)
            });
            if (h = "hover") {
                e(t).hover(function () {
                    function i() {
                        e(o).show();
                        e(t).addClass(s)
                    }

                    r = setTimeout(i, c)
                }, function () {
                    e(o).hide();
                    e(t).removeClass(s);
                    clearTimeout(r)
                })
            }
        })
    }
})(jQuery);
(function (i) {
    i.fn.gbackTop = function (n) {
        var o = {
            st: 100, box: "fixed", callback: function () {
            }
        }, c = null;
        n = i.extend({}, o, n);
        i(window).bind("scroll", function () {
            if (c) {
                clearTimeout(c)
            }
            var o = i(this);
            c = setTimeout(function () {
                t(o);
                n.callback()
            }, 100)
        });

        function t(o) {
            o = o || i(window);
            if (o.scrollTop() > n.st) {
                i(n.box).css("visibility", "visible");
                return
            }
            i(n.box).css("visibility", "hidden")
        }
    }
})(jQuery);
(function (n) {
    n.fn.curNav = function (a) {
        var r = {nav: ".mainnav", css: "cur"};
        var a = n.extend(r, a), e = a.nav, i = a.css;
        return this.each(function () {
            var a = n(e).find("a");
            for (var r = 0; r < a.length; r++) {
                var t = a.eq(r).attr("href");
                var f = document.location.href;
                if (f.indexOf(t) != -1) {
                    n(e).find("li").removeClass(i);
                    a.eq(r).parent("li").addClass(i)
                }
            }
        })
    }
})(jQuery);
(function (i) {
    var t = {};

    function e(i) {
        this._init(i || {})
    }

    e.prototype = {
        contructor: e, _init: function (i) {
            this._fixOptions(i);
            var t = this.$container = i.$container;
            if (!t.width() && !t.height()) {
                throw new Error("gSlider: can not get size of container.")
            }
            this.$images = this.$container.children();
            this.$images.remove();
            this.index = 0;
            this.length = this.$images.length;
            this.maxIndex = this.length - 1;
            this._gomeLazyLoad(0);
            this._initContainer();
            this._initSlider();
            if (i.control && i.control.index) {
                this._initControlIndex()
            }
            if (i.control && i.control.side) {
                this._initControlSide()
            }
            this._startTimer()
        }, _fixOptions: function (i) {
            this.options = i;
            if (this.options && this.options.type) {
                this.type = this.options.type
            } else {
                this.type = "slideLeft"
            }
            this.adapter = t[this.type];
            this.delayTime = parseInt(this.options.delayTime) || 1e3;
            this.animateTime = parseInt(this.options.animateTime) || 500
        }, _initContainer: function () {
            if (this.$container.css("position") == "static") {
                this.$container.css("position", "relative")
            }
            this.containerWidth = this.$container.width();
            this.containerHeight = this.$container.height()
        }, _initSlider: function () {
            var t = this.adapter;
            if (typeof t.initSlider == "function") {
                var e = this.$slider = t.initSlider.call(this)
            } else {
                var e = i("<div>");
                this.$images.appendTo(e).hide().eq(0).show()
            }
            this.$container.append(e);
            var n = this.containerWidth;
            var a = this.containerHeight;
            e.css({position: "relative", width: n, height: a});
            this.$images.css({width: n, height: a, position: "absolute", left: 0, top: 0})
        }, _initControlIndex: function () {
            var t = this;
            var e = t.options.control.index.html;
            var n = this.$controlIndex = i("<div>");
            this.$images.each(function (t) {
                var a = i("<div>");
                if (e) {
                    a.append(e.replace(/\\?\$/g, function (i) {
                        return i.indexOf("\\") > -1 ? "$" : t + 1
                    }))
                }
                n.append(a)
            });
            var a = this.options.control.index.className;
            if (a) {
                n.addClass(a)
            }
            var s = this.options.control.index.activeClassName;
            if (s) {
                this.$controlIndex.children().removeClass(s).eq(this.index).addClass(s)
            }
            var o = this.options.control.index.event;
            if (o) {
                n.children().each(function (e) {
                    i(this).on(o, function () {
                        t._animateTo(e);
                        t._stopTimer();
                        t._startTimer()
                    })
                })
            }
            this.$container.append(n);
            var r = this.options.control.index.autoHideTime;
            if (typeof r == "number") {
                this.$container.on("mouseenter", function () {
                    n.stop().animate({opacity: n.data("autoHideOpacity")}, r)
                });
                this.$container.on("mouseleave", function () {
                    n.stop().animate({opacity: 0}, r)
                });
                n.data("autoHideOpacity", n.css("opacity")).css({opacity: 0})
            }
        }, _initControlSide: function () {
            var t = this;
            var e = this.options.control.side;
            var n = e.prev;
            var a = e.next;
            var s = this.$controlSidePrev = i("<div>");
            var o = this.$controlSideNext = i("<div>");
            if (e.className) {
                s.addClass(e.className);
                o.addClass(e.className)
            }
            if (n && n.className) {
                s.addClass(n.className)
            }
            if (a && a.className) {
                o.addClass(a.className)
            }
            if (n && n.html) {
                s.append(n.html)
            }
            if (a && a.html) {
                o.append(a.html)
            }
            this.$container.append(s).append(o);
            s.on("click", function () {
                t._animatePrev();
                t._stopTimer();
                t._startTimer()
            });
            o.on("click", function () {
                t._animateNext();
                t._stopTimer();
                t._startTimer()
            });
            var r = this.options.control.side.autoHideTime;
            if (typeof r == "number") {
                this.$container.on("mouseenter", function () {
                    s.stop().animate({opacity: s.data("autoHideOpacity")}, r)
                });
                this.$container.on("mouseleave", function () {
                    s.stop().animate({opacity: 0}, r)
                });
                this.$container.on("mouseenter", function () {
                    o.stop().animate({opacity: o.data("autoHideOpacity")}, r)
                });
                this.$container.on("mouseleave", function () {
                    o.stop().animate({opacity: 0}, r)
                });
                s.data("autoHideOpacity", s.css("opacity")).css({opacity: 0});
                o.data("autoHideOpacity", o.css("opacity")).css({opacity: 0})
            }
        }, _startTimer: function () {
            var i = this;
            this.$container.trigger("gSlider.start");
            this._timer = setInterval(function () {
                i._animateNext()
            }, this.delayTime + this.animateTime)
        }, _stopTimer: function () {
            var i = this;
            this.$container.trigger("gSlider.stop");
            clearInterval(this._timer);
            this._timer = null
        }, _gomeLazyLoad: function (i) {
            var t = this.$images.eq(i);
            if (t.get(0).tagName.toLowerCase() !== "img") {
                t = t.find("img")
            }
            if (t.attr("gome-src") && t.attr("src") !== t.attr("gome-src")) {
                t.attr("src", t.attr("gome-src"))
            }
        }, _animateTo: function (i) {
            if (i == this.index) {
                return
            }
            this._gomeLazyLoad(i);
            this.adapter.animateTo.call(this, i);
            this.index = i;
            this.$container.trigger("gSlider.change");
            if (this.$controlIndex) {
                var t = this.options.control.index.activeClassName;
                if (t) {
                    this.$controlIndex.children().removeClass(t).eq(i).addClass(t)
                }
            }
        }, _animatePrev: function () {
            var i = this.index - 1;
            if (i < 0) {
                i = this.maxIndex
            }
            this._animateTo(i)
        }, _animateNext: function () {
            var i = this.index + 1;
            if (i > this.maxIndex) {
                i = 0
            }
            this._animateTo(i)
        }, destory: function () {
            this._stopTimer();
            this.$container.off().find("*").off();
            this.$container.html("").append(this.$images)
        }
    };
    i.gSlider = {};
    i.gSlider.register = function (i) {
        t[i.type] = i
    };
    i.gSlider.register({
        type: "slideLeft", initSlider: function () {
            var t = i("<div>");
            this.$images.appendTo(t).hide().eq(0).show();
            return t
        }, animateTo: function (t) {
            var e = this.$images;
            var n = this.containerWidth;
            e.hide();
            e.eq(this.index).css({left: 0}).stop().show().animate({left: -n}, this.animateTime, function () {
                i(this).hide()
            });
            e.eq(t).css({left: n}).stop().show().animate({left: 0}, this.animateTime)
        }
    });
    i.gSlider.register({
        type: "fadeIn", animateTo: function (t) {
            var e = this.$images;
            var n = this.containerWidth;
            e.hide();
            e.eq(this.index).css({opacity: 1}).stop().show().animate({opacity: 0}, this.animateTime, function () {
                i(this).hide()
            });
            e.eq(t).css({opacity: 0}).stop().show().animate({opacity: 1}, this.animateTime)
        }
    });
    i.fn.gSlider = function (t) {
        t = t || {};
        this.each(function () {
            var n = i(this);
            t.$container = n;
            if (n.data("_gSlider")) {
                try {
                    n.data("_gSlider").destory()
                } catch (a) {
                }
            }
            n.data("_gSlider", new e(t))
        });
        return this
    }
})(jQuery);
(function ($) {                                          // Compliant with jquery.noConflict()
    $.fn.jCarouselLite = function (o) {
        o = $.extend({
            btnPrev: null,
            btnNext: null,
            btnGo: null,
            mouseWheel: false,
            auto: null,

            speed: 200,
            easing: null,

            vertical: false,
            circular: true,
            visible: 3,
            start: 0,
            scroll: 1,

            beforeStart: null,
            afterEnd: null
        }, o || {});

        return this.each(function () {                           // Returns the element collection. Chainable.

            var running = false, animCss = o.vertical ? "top" : "left", sizeCss = o.vertical ? "height" : "width";
            var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size(), v = o.visible;

            if (o.circular) {
                ul.prepend(tLi.slice(tl - v - 1 + 1).clone())
                    .append(tLi.slice(0, v).clone());
                o.start += v;
            }

            var li = $("li", ul), itemLength = li.size(), curr = o.start;
            div.css("visibility", "visible");

            li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
            ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
            div.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});

            var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
            var ulSize = liSize * itemLength;                   // size of full ul(total length, not just for the visible items)
            var divSize = liSize * v;                           // size of entire div(total length for just the visible items)

            li.css({width: li.width(), height: li.height()});
            ul.css(sizeCss, ulSize + "px").css(animCss, -(curr * liSize));

            div.css(sizeCss, divSize + "px");                     // Width of the DIV. length of visible images

            if (o.btnPrev)
                $(o.btnPrev).click(function () {
                    return go(curr - o.scroll);
                });

            if (o.btnNext)
                $(o.btnNext).click(function () {
                    return go(curr + o.scroll);
                });

            if (o.btnGo)
                $.each(o.btnGo, function (i, val) {
                    $(val).click(function () {
                        return go(o.circular ? o.visible + i : i);
                    });
                });

            if (o.mouseWheel && div.mousewheel)
                div.mousewheel(function (e, d) {
                    return d > 0 ? go(curr - o.scroll) : go(curr + o.scroll);
                });

            if (o.auto)
                setInterval(function () {
                    go(curr + o.scroll);
                }, o.auto + o.speed);

            function vis() {
                return li.slice(curr).slice(0, v);
            };

            function go(to) {
                if (!running) {

                    if (o.beforeStart)
                        o.beforeStart.call(this, vis());

                    if (o.circular) {            // If circular we are in first or last, then goto the other end
                        if (to <= o.start - v - 1) {           // If first, then goto last
                            ul.css(animCss, -((itemLength - (v * 2)) * liSize) + "px");
                            // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                            curr = to == o.start - v - 1 ? itemLength - (v * 2) - 1 : itemLength - (v * 2) - o.scroll;
                        } else if (to >= itemLength - v + 1) { // If last, then goto first
                            ul.css(animCss, -((v) * liSize) + "px");
                            // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                            curr = to == itemLength - v + 1 ? v + 1 : v + o.scroll;
                        } else curr = to;
                    } else {                    // If non-circular and to points to first or last, we just return.
                        if (to < 0 || to > itemLength - v) return;
                        else curr = to;
                    }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                    running = true;

                    ul.animate(
                        animCss == "left" ? {left: -(curr * liSize)} : {top: -(curr * liSize)}, o.speed, o.easing,
                        function () {
                            if (o.afterEnd)
                                o.afterEnd.call(this, vis());
                            running = false;
                        }
                    );
                    // Disable buttons when the carousel reaches the last/first, and enable when not
                    if (!o.circular) {
                        $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                        $((curr - o.scroll < 0 && o.btnPrev)
                            ||
                            (curr + o.scroll > itemLength - v && o.btnNext)
                            ||
                            []
                        ).addClass("disabled");
                    }

                }
                return false;
            };
        });
    };

    function css(el, prop) {
        return parseInt($.css(el[0], prop)) || 0;
    };

    function width(el) {
        return el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
    };

    function height(el) {
        return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
    };

})(jQuery);
(function (t) {
    var e = t(window), o = t(document), i = t("body");
    var n = function () {
        var t = !-[1] && !window.XMLHttpRequest, e = document.getElementsByTagName("html")[0],
            o = document.documentElement, i = document.body, n = o || i, s = function (t) {
                return {left: Math.max(o.scrollLeft, i.scrollLeft), top: Math.max(o.scrollTop, i.scrollTop)}
            };
        if (t && document.body.currentStyle.backgroundAttachment !== "fixed") {
            e.style.backgroundImage = "url(about:blank)";
            e.style.backgroundAttachment = "fixed"
        }
        return {
            fixed: t ? function (t) {
                var e = t.style, o = s(), i = "(document.documentElement || document.body)",
                    n = parseInt(e.left) - o.left, c = parseInt(e.top) - o.top;
                this.absolute(t);
                e.setExpression("left", "eval(" + i + ".scrollLeft + " + n + ') + "px"');
                e.setExpression("top", "eval(" + i + ".scrollTop + " + c + ') + "px"')
            } : function (t) {
                t.style.position = "fixed"
            }, absolute: t ? function (t) {
                var e = t.style;
                e.position = "absolute";
                e.removeExpression("left");
                e.removeExpression("top")
            } : function (t) {
                t.style.position = "absolute"
            }
        }
    }(), s = function (t) {
        var e = i.width(), n = t.outerWidth(), s = t.offset().left, c = o.height(), l = t.outerHeight(),
            r = t.offset().top;
        var a = e > s + n ? s : s - (n + s - e);
        var u = c > r + l ? r : r - (l + r - c);
        return {left: a, top: u}
    };
    var c = function (t, e) {
        this.target = t;
        this.settings = e;
        this.IE6 = !-[1] && !window.XMLHttpRequest;
        this.timer = null;
        this.init()
    };
    c.prototype = {
        init: function () {
            var t = this;
            t.closePrevPop();
            t.settings.beforeCallback(t);
            if (t.settings.isColseBtn) {
                t.createClose()
            }
            if (t.settings.isLock) {
                t.createLock()
            }
            if (typeof t.settings.time === "number") {
                t.timer = setTimeout(function () {
                    t.closePop()
                }, t.settings.time)
            }
            t.bindEvent();
            t.showTarget()
        }, showTarget: function () {
            var t = this, o = t.target, i, s;
            o.addClass("prevPopBox").show();
            if (t.settings.middile) {
                i = Math.round((e.width() - o.outerWidth()) / 2);
                s = Math.round((e.height() - o.outerHeight()) / 2);
                if (t.IE6) {
                    var c = document.documentElement.scrollTop || document.body.scrollTop;
                    i = Math.round((e.width() - o.outerWidth()) / 2);
                    s = Math.round((document.documentElement.clientHeight - o.outerHeight()) / 2) + c
                }
                o.css({left: i, top: s, "z-index": t.settings.zIndex + 1});
                n.fixed(o[0]);
                return
            }
        }, createLock: function () {
            var e = this;
            if (t("#popLock").length > 0) {
                t("#popLock").show();
                return false
            }
            e.Lock = t('<div id="popLock" style="filter:alpha(opacity=' + e.settings.opacity * 100 + ");opacity:" + e.settings.opacity + ';"></div>');
            e.Lock.css({
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                "background-color": e.settings.lockBgColor,
                opacity: e.settings.opacity,
                "z-index": e.settings.zIndex
            });
            if (e.IE6) {
                e.Lock.css({display: "none"});
                e.createIframe(e.Lock)
            }
            i.append(e.Lock)
        }, createIframe: function (t) {
            t.innerHTML = '<iframe style="position:absolute;left:0;top:0;width:100%;height:100%;z-index:-1;border:0 none;filter:alpha(opacity=0)"></iframe>'
        }, createClose: function () {
            var e = this;
            e.closeBtn = t('<a class="popCloseBtn">关闭</a>');
            e.target.append(e.closeBtn)
        }, bindEvent: function () {
            var t = this;
            if (t.closeBtn) {
                t.closeBtn.bind("click", function () {
                    t.closePop()
                })
            }
            if (t.Lock && t.lockColse) {
                t.Lock.bind("click", function () {
                    t.closePop()
                })
            }
        }, closePop: function () {
            var t = this;
            clearTimeout(t.timer);
            if (t.Lock) {
                t.Lock.remove()
            }
            if (t.closeBtn) {
                t.closeBtn.remove()
            }
            t.target.removeClass("prevPopBox").hide();
            t.settings.colseCallback.call(t)
        }, closePrevPop: function () {
            i.find(".prevPopBox").hide().removeClass("prevPopBox")
        }
    };
    var l = {
        zIndex: 9999,
        middile: true,
        isLock: true,
        lockColse: false,
        lockBgColor: "#000",
        opacity: .5,
        time: null,
        isColseBtn: true,
        colseCallback: function () {
        },
        beforeCallback: function () {
        }
    };
    t.fn.gPop = function (e) {
        e = t.extend({}, l, e);
        this.each(function () {
            new c(t(this), e)
        })
    }
})(jQuery);
gomeLib.fxCollect = {
    totality: null, getTotal: false, ajaxType: false, getCollect: function (t, i, e) {
        var l = this, a = loginData.loginId;
        l.addUrl = dynSite + contextPath + "/global/login/verifyAddToWishlist.jsp";
        l.getUrl = dynSite + contextPath + "/n/indexJson/getUserCollectProduct.jsp";
        l.addWish = function () {
            gomeLib.ajax({url: l.addUrl, jsonpName: "wishlist", d: t}, function (t) {
                if (i) i(t)
            })
        };
        l.getWish = function () {
            if (!l.getTotal && !l.ajaxType) {
                l.ajaxType = true;
                gomeLib.ajax({url: l.getUrl, jsonpName: "fnwishlist"}, function (t) {
                    if (t) {
                        l.getTotal = true;
                        l.totality = t;
                        if (i) i(l.totality)
                    }
                })
            } else {
                if (i) i(l.totality)
            }
        };
        l.chkWish = function () {
            if (t) {
                if (e && e == "click") {
                    l.addWish()
                } else {
                    l.getWish()
                }
            } else {
                l.getWish()
            }
        };
        l.chkWish()
    }
};

function merchantLive800CallBack(t, e) {
    var i = t.getAttribute("merchant") == 1;
    if (i) {
        if (e != 0 && e != 1) {
            $("#store_live800").addClass("off_live800")
        }
        if (e >= 0) {
            $("#store_live800_wrap").removeClass("off_live800")
        }
    }
    if ($(".live800Provider").find("span a").length > 0) {
        $(".live800Provider").parent().show()
    }
}

if (!LIM) var LIM = {};
var live800Icon_fn = [];
LIM.live800_IconInit = function () {
    if (live800Icon_fn && live800Icon_fn.length > 0) {
        live800Icon_fn[0]()
    }
};
(function () {
    var CONST = {
        live800Server: ["//chat1.gome.com.cn/live800", "//chat2.gome.com.cn/live800", "//chat3.gome.com.cn/live800", "//chat4.gome.com.cn/live800", "//chat5.gome.com.cn/live800"],
        live800CssUrl: "live800_gome.css",
        live800IconUrl: ["live800_icon_s.png", "live800_icon_f.png"]
    };
    var SERVERCOUNT = CONST["live800Server"].length;
    window.Livebind = function (t, e, i, o) {
        if (window.attachEvent) {
            t.attachEvent("on" + e, i);
            if (o) i()
        } else {
            t.addEventListener(e, i, false)
        }
    };

    function $(t, e) {
        var i = (e || document.body).getElementsByTagName("*"), o = i.length, n = [];
        for (var r = 0; r < o; r++) {
            if (i[r].className.match(new RegExp("(^|\\s)" + t + "(\\s|$)"))) {
                n.push(i[r])
            }
        }
        return n
    }

    Sys = function () {
    };
    Sys.NS = document.layers ? true : false;
    Sys.IE = document.all ? true : false;
    Sys.DOM = document.getElementById ? true : false;
    if (Sys.IE) Sys.DOM = false;
    Sys.MAC = navigator.platform && navigator.platform.toUpperCase().indexOf("MAC") >= 0;
    if (Sys.NS) Sys.MAC = false;
    Sys.getObj = function (t) {
        if (document.getElementById) return document.getElementById(t); else if (document.all) return document.all(t)
    };
    if (!LIVEDOM) var LIVEDOM = {};
    LIVEDOM.domReady = function (f) {
        with (LIVEDOM) {
            if (domReady.done) {
                return f()
            }
            if (domReady.timer) {
                domReady.ready.push(f)
            } else {
                Livebind(window, "load", isDOMReady);
                domReady.ready = [f];
                var h = this;
                domReady.timer = setInterval(function () {
                    h.isDOMReady()
                }, 13)
            }
        }
    };
    LIVEDOM.isDOMReady = function () {
        with (LIVEDOM) {
            if (domReady.done) {
                return false
            }
            if (document && document.getElementsByTagName && document.getElementById && document.body) {
                clearInterval(domReady.timer);
                domReady.timer = null;
                for (var i = 0; i < domReady.ready.length; i++) {
                    domReady.ready[i]()
                }
                domReady.ready = null;
                domReady.done = true
            }
        }
    };

    function getRandomServer(t) {
        var e = t.length, i;
        if (e == 1) {
            i = 0
        } else {
            i = (new Date).getTime() % e
        }
        return t[i]
    }

    function getProtocol() {
        var t = document.location.protocol;
        t = t == "file:" ? "http:" : t;
        return t
    }

    function getchaturl(t, e) {
        var i = t.getAttribute("lim:company");
        if (e && e.length > 0) {
            i = e
        }
        var o = t.getAttribute("lim:page");
        var n = t.getAttribute("lim:shopId");
        var r = t.getAttribute("lim:shopname");
        var a = "", l = "", s = t;
        var c = CONST["live800Server"][getServer(i)] + "/chatClient/chatbox.jsp";
        var d = "info=" + window.loginData.infoValue || "_=_";
        a += "companyID=" + e;
        a += "&page=" + o;
        a += "&shopId=" + n;
        a += "&shopname=" + encodeURIComponent(r);
        if (a.indexOf("enterurl") == -1) {
            a += "&enterurl=" + encodeURIComponent(document.URL)
        }
        if (t.getAttribute("lim:productId") && t.getAttribute("lim:productId") != null) {
            a += "&productId=" + t.getAttribute("lim:productId")
        }
        if (t.getAttribute("lim:remark") && t.getAttribute("lim:remark") != null) {
            a += "&remark=" + urlEncode(t.getAttribute("lim:remark"))
        }
        a += "&" + d;
        if (getProtocol() == "https:") {
            c.replace("http:", "https:")
        }
        return c + "?" + a
    }

    function init(t, e, i) {
        var o = null;
        var n = "pointer";
        switch (e) {
            case-1:
                o = "disable";
                n = "default";
                break;
            case 0:
                o = "offline";
                n = "pointer";
                break;
            case 1:
                o = "online";
                n = "pointer";
                break;
            default:
                n = "default";
                o = null
        }
        if (typeof merchantLive800CallBack != "undefined") {
            merchantLive800CallBack(t, e)
        }
        var r = "%E5%95%86%E9%93%BA";
        var a = "%E5%AE%A2%E6%9C%8D%E6%9A%82%E6%97%B6%E4%B8%8D%E5%9C%A8%E7%BA%BF%EF%BC%8C%E5%9C%A8%E7%BA%BF%E6%9C%8D%E5%8A%A1%E6%97%B6%E9%97%B4%EF%BC%9A09%3A00--18%3A00";
        var l = t.getAttribute("lim:offLineTip");
        if (l != "") {
            a = l
        }
        var s = t.getAttribute("lim:shopName");
        if (s != "") {
            r = s
        }
        var c = new Array;
        c["statusClass"] = o;
        c["cursor"] = n;
        c["shopName"] = r;
        c["offLineTip"] = a;
        if (i) {
            c["companyId"] = i
        }
        var d = "steady";
        try {
            d = t.getAttribute("lim:type")
        } catch (f) {
            d = "steady"
        }
        if (d == "float") {
            new FloatIcon(t, c)
        } else {
            new SteadyIcon(t, c)
        }
    }

    function SteadyIcon(t, e) {
        this.elObj = t;
        this.preferences = e;
        this.image = CONST["live800IconUrl"][0];
        this.status = this.preferences["statusClass"];
        this.cursor = this.preferences["cursor"];
        this.shopName = this.preferences["shopName"];
        this.offLineTip = this.preferences["offLineTip"];
        this.companyId = this.preferences["companyId"];
        this.init()
    }

    SteadyIcon.prototype.init = function () {
        this.emptyIcon();
        if (this.status == "online") {
            this.Steady_generate();
            this.clickAction()
        } else if (this.status == "offline") {
            this.Steady_generate();
            this.offlineTipAction()
        } else {
        }
    };
    SteadyIcon.prototype.emptyIcon = function () {
        var t = this.elObj;
        t.innerHTML = ""
    };
    SteadyIcon.prototype.Steady_generate = function () {
        var t = this.elObj;
        var e = this.companyId;
        if (!e) {
            e = t.getAttribute("lim:company") || ""
        }
        var i = this.status;
        var o = true;
        if (i == "offline" && "3" != e) {
            o = false;
            this.cursor = "default"
        }
        var n = this.elObj.getAttribute("lim:innerHtm") || "";
        t.innerHTML = '<a href="javascript:;" class="' + this.status + 's" style="cursor:' + this.cursor + '">' + n + "</a>";
        Livebind(t, "click", function () {
            if (window.loginData.isTransient == true) {
                var i = window.location.href,
                    n = staSite.replace("www", "login") + "/login?tableName=login&orginURI=" + i;
                window.location.href = n;
                return false
            } else {
                if (!o) {
                    return false
                }
                var r = getchaturl(t, e), a = "live800_" + t.getAttribute("lim:company");
                openwindow(a, r);
                return false
            }
        })
    };
    SteadyIcon.prototype.clickAction = function () {
        this.elObj.title = ""
    };
    SteadyIcon.prototype.offlineTipAction = function () {
        this.elObj.title = urlDecode(this.offLineTip)
    };

    function FloatIcon(t, e) {
        this.preferences = e;
        this.locationObj = t;
        this.company = this.preferences["companyId"] ? this.preferences["companyId"] : t.getAttribute("lim:company");
        this.shopName = this.preferences["shopName"];
        this.offLineTip = this.preferences["offLineTip"];
        this.inviteInnerHtml = null;
        this.changeTimerId = null;
        this.layerHtml = null;
        this.statusClass = this.preferences["statusClass"];
        this.image = CONST["live800IconUrl"][1];
        this.cursor = this.preferences["cursor"];
        this.toRight = t.getAttribute("lim:Position") == null ? "1" : t.getAttribute("lim:position");
        this.floatTop = parseInt(t.getAttribute("lim:FloatTop") == null ? "150" : t.getAttribute("lim:floatTop"));
        this.floatSide = parseInt(t.getAttribute("lim:FloatSide") == null ? "100" : t.getAttribute("lim:floatSide"));
        this.toBottom = false;
        this.init()
    }

    FloatIcon.prototype.init = function () {
        this.FloatIcon_generate();
        if (this.statusClass == "online") {
            this.clickAction()
        } else {
            this.offlineTipAction()
        }
    };
    FloatIcon.prototype.FloatIcon_generate = function () {
        var t = " left:" + this.floatSide + "px;";
        if (this.toRight == "1") {
            t = " right:" + this.floatSide + "px;"
        }
        this.layerHtml = '<div id="FloatIcon" style="z-index:8888;position:absolute;visibility:visible;' + t + "top:200px;height:auto;width:auto;\"><div style='position:relative;'>";
        this.inviteInnerHtml = '<a id="live800iconlink" target="_self" href="javascript:void(0)"' + ' class="' + this.statusClass + "f" + '" style="display:block;background-image:url(' + this.image + ");background-repeat:no-repeat;overflow:hidden;cursor:default" + ';border:none;"><div class="shopTitle"><div style="width:55px;height:18px;text-align:right;overflow:hidden;" title=' + urlDecode(this.shopName) + ">" + urlDecode(this.shopName) + "你好</div>" + '<div style="width:55px;">在线客服</div></div><img name="live800icon" id="live800icon" src="' + CONST["live800Server"] + "/SurferServer?cmd=111&companyID=" + this.company + '"  border="0" style="width:125px;height:20px;visibility:hidden;"/>' + '<div class="shopDESC" title="欢迎来到' + urlDecode(this.shopName) + '，有什么可以帮您?">欢迎来到' + urlDecode(this.shopName) + "，有什么可以帮您?</div>" + '<div id="live800FloatChatDiv" class="clickPath" style="cursor:' + this.cursor + '"></div></a>';
        this.layerHtml += this.inviteInnerHtml;
        this.layerHtml += "<div class='icon:close'><div></div>";
        this.locationObj.innerHTML = this.layerHtml;
        var e = this;
        this.changeTimerId = setInterval(function () {
            changeIcon(e)
        }, 200)
    };
    FloatIcon.prototype.clickAction = function () {
        var t = Sys.getObj("live800FloatChatDiv");
        if (t) {
            t.title = "";
            var e = new Array;
            e["company"] = this.company;
            e["page"] = this.locationObj.getAttribute("lim:page");
            e["shopId"] = this.locationObj.getAttribute("lim:shopId");
            e["productId"] = this.locationObj.getAttribute("lim:productId");
            e["remark"] = this.locationObj.getAttribute("lim:remark");
            e["params"] = "info=" + window.loginData.infoValue;
            var i = getFloatOpenUrl(e);
            var o = "live800_" + this.company;
            t.innerHTML = "<a href='" + i + "' target='" + o + "' style='display:block;overflow:hidden;border:none;'  onclick=\"openwindow('" + o + "');\"></a>"
        }
    };
    FloatIcon.prototype.offlineTipAction = function () {
        var t = Sys.getObj("live800FloatChatDiv");
        t.title = urlDecode(this.offLineTip)
    };

    function getFloatOpenUrl(t) {
        var e = t["company"];
        var i = t["page"];
        var o = t["shopId"];
        var n = t["shopname"];
        var r = CONST["live800Server"][getServer(e)] + "/chatClient/chatbox.jsp", a = t["params"] || "_=_", l = "",
            s = "";
        l += "companyID=" + e;
        l += "&page=" + i;
        l += "&shopId=" + o;
        l += "&shopname=" + encodeURIComponent(n);
        if (t["productId"] && t["productId"] != "") {
            l += "&productId=" + t["productId"]
        }
        if (t["remark"] && t["remark"] != "") {
            l += "&remark=" + urlEncode(t["remark"])
        }
        if (l.indexOf("enterurl") == -1) {
            l += "&enterurl=" + encodeURIComponent(document.URL)
        }
        l += "&" + a;
        if (getProtocol() == "https:") {
            r.replace("http:", "https:")
        }
        return r + "?" + l
    }

    FloatIcon.prototype.changeFloatIcon = function () {
        var obj = Sys.getObj("FloatIcon");
        var live800iconlink = Sys.getObj("live800iconlink");
        var live800icon = obj.getElementsByTagName("img")[0];
        var iconHeight = live800icon.height;
        var iconWidth = live800icon.width;
        var y;
        var x;
        if (this.toBottom) {
            if (document.body) y = document.body.clientHeight - iconHeight - this.floatTop; else y = innerHeight - iconHeight - this.floatTop
        } else y = this.floatTop;
        if (this.toRight == "1" && !!iconWidth) {
            if (document.body.clientWidth) x = document.body.clientWidth - iconWidth - this.floatSide + 16; else if (document.documentElement.clientWidth) {
                x = document.documentElement.clientWidth - iconWidth - this.floatSide
            } else x = innerWidth - iconWidth - this.floatSide
        } else x = this.floatSide;
        var obj = null;
        if (Sys.IE) {
            obj = document.all.FloatIcon.style
        } else if (Sys.NS) {
            obj = document.layers.FloatIcon
        } else if (Sys.DOM) {
            obj = Sys.getObj("FloatIcon").style
        }
        if (Sys.IE) {
            scrollPosY = 0;
            scrollPosX = 0;
            eval("try {" + 'if (typeof(document.documentElement) !=	"undefined") {' + "scrollPosY =	document.documentElement.scrollTop;" + "scrollPosX = document.documentElement.scrollLeft;" + "}" + "} catch	(e)	{}");
            scrollPosY = Math.max(document.body.scrollTop, scrollPosY);
            scrollPosX = Math.max(document.body.scrollLeft, scrollPosX);
            obj.left = scrollPosX + x + "px";
            obj.top = scrollPosY + y + "px"
        } else if (Sys.NS) {
            obj.left = pageXOffset + x;
            obj.top = pageYOffset + y
        } else if (Sys.DOM) {
            obj.left = pageXOffset + x + "px";
            obj.top = pageYOffset + y + "px"
        }
    };
    FloatIcon.prototype.clearTimer = function () {
        clearInterval(this.changeTimerId)
    };

    function changeIcon(t) {
        t.changeFloatIcon()
    }

    function getServer(t) {
        if (!t) {
            alert("parameters is invalidate!")
        }
        if (t == 3) {
            return parseInt(t) + 1 % SERVERCOUNT
        }
        return t % (SERVERCOUNT - 2)
    }

    function getStringValue(t) {
        if (t == null || "" == t) {
            return ""
        }
        var e = t.split("&");
        var i = e.length;
        for (var o = 0; o < i; o++) {
            var n = e[o];
            var r = n.split("=");
            var a = r[0];
            if ("skillId" == a) {
                return r[1]
            }
        }
        return ""
    }

    function sort(t) {
        var e = [];
        var i = t.length;
        for (var o = 0; o < SERVERCOUNT + 1; o++) {
            e[o] = []
        }
        var n;
        for (var o = 0; o < i; o++) {
            try {
                n = t[o].getAttribute("lim:company");
                if (n == "") {
                    continue
                }
                var r = "info=" + window.loginData.infoValue;
                var a = getStringValue(r);
                if (!a || a == "") {
                    a = "0"
                }
                if (/^\d+$/.test(n)) {
                    if ("3" == n) {
                        e[SERVERCOUNT].push({id: n, dom: t[o], skillId: a})
                    } else {
                        e[getServer(n)].push({id: n, dom: t[o], skillId: a})
                    }
                } else {
                    e[SERVERCOUNT - 1].push({id: n, dom: t[o], skillId: a})
                }
            } catch (l) {
                continue
            }
        }
        return e
    }

    function urlToParams(t) {
        try {
            var e = t.split("&"), i = [], o;
            for (var n = 0; n < e.length; n++) {
                o = e[n].split("=");
                i[o[0]] = o[1]
            }
            return i
        } catch (r) {
            E.report("请勿非法修改参数", "1206");
            return []
        }
    }

    function urlEncode(t) {
        if (t == null || t == "") {
            return ""
        }
        var e = "";

        function i(t) {
            return t.toString(16).toUpperCase()
        }

        for (var o = 0, n, r = t.length; o < r; o++) {
            n = t.charCodeAt(o);
            if (n < 16) {
                e += "%0" + n.toString(16).toUpperCase()
            } else if (n < 128) {
                if (n == 32) {
                    e += "+"
                } else if (n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122) {
                    e += t.charAt(o)
                } else {
                    e += "%" + i(n)
                }
            } else if (n < 2048) {
                e += "%" + i(192 + (n >> 6));
                e += "%" + i(128 + n % 64)
            } else {
                e += "%" + i(224 + (n >> 12));
                e += "%" + i(128 + (n >> 6) % 64);
                e += "%" + i(128 + n % 64)
            }
        }
        return e
    }

    function urlDecode(t) {
        if (t == null || t == "") {
            return ""
        }
        var e = "";

        function i(t) {
            return t.toString(16).toUpperCase()
        }

        for (var o = 0, n, r = t.length; o < r;) {
            if (t.charAt(o) == "%") {
                n = t.charAt(o + 1);
                if (n.toLowerCase() == "e") {
                    e += String.fromCharCode((parseInt("0x" + t.substr(o + 1, 2)) - 224) * 4096 + (parseInt("0x" + t.substr(o + 4, 2)) - 128) * 64 + (parseInt("0x" + t.substr(o + 7, 2)) - 128));
                    o += 9
                } else if (n.toLowerCase() == "c" || n.toLowerCase() == "d") {
                    e += String.fromCharCode((parseInt("0x" + t.substr(o + 1, 2)) - 192) * 64 + parseInt("0x" + t.substr(o + 4, 2)) - 128);
                    o += 6
                } else {
                    e += String.fromCharCode(parseInt("0x" + t.substr(o + 1, 2)));
                    o += 3
                }
            } else {
                e += t.charAt(o).replace(/\+/, " ");
                o++
            }
        }
        return e
    }

    function getParams(t) {
        if (!t || t.length == 0) {
            return ""
        }
        var e = [], i = t.length;
        var o = [];
        for (var n = 0; n < i; n++) {
            e.push(t[n].id);
            o.push(t[n].skillId)
        }
        return "companys=" + urlEncode(e.join(";")) + "&skillIds=" + urlEncode(o.join(";")) + "&t=" + (new Date).getTime()
    }

    function gysIcoInit(t, e) {
        if (t < 0) {
            return
        }
        var i = CONST["live800Server"][t] + "/mstatus.js?sid=" + t + "&" + getParams(e) + "&type=1";
        new live800Request(i, function () {
            var t = this.data.userlist;
            var e = this.data.sid;
            var i = 0;
            if (typeof live800Companys != "undefined") {
                var o = live800Companys;
                if (o) {
                    i = o.length
                }
                try {
                    var n = [];
                    var r = 0;
                    for (var a = 0; a < i; a++) {
                        var l = o[a][1];
                        var s = o[a][0];
                        var c = t[a].dom;
                        if (s && s != "-1") {
                            init(c, l, s)
                        } else {
                            n[r] = t[a];
                            r++
                        }
                    }
                    if (n && n.length > 0) {
                        e = e - 1;
                        gysIcoInit(e, n)
                    }
                } catch (d) {
                }
            }
        }, null, {sid: t, userlist: e})
    }

    function appendCss() {
    }

    function live800Request(t, e, i, o) {
        this.url = t;
        this.onload = e;
        this.onerror = i ? i : this.defaultError;
        this.data = o;
        this.init(t)
    }

    live800Request.prototype = {
        init: function (t) {
            this.script = document.createElement("script");
            this.script.setAttribute("type", "text/javascript");
            this.script.setAttribute("src", t);
            document.getElementsByTagName("head")[0].appendChild(this.script);
            var e = this;
            if (this.script) {
                if (document.all) {
                    var i = this.script;
                    this.script.onreadystatechange = function () {
                        var t = i.readyState;
                        if (t == "loaded" || t == "interactive" || t == "complete") {
                            e.onload.call(e)
                        }
                    }
                } else {
                    this.script.onload = function () {
                        e.onload.call(e)
                    }
                }
            } else {
                e.onerror.call(this)
            }
        }, defaultError: function () {
            alert("create script node fail!")
        }
    };

    function onInit() {
        var t = $("live800");
        var e = sort(t), i = e.length;
        if (i > 0) {
            appendCss();
            for (var o = 0; o < i; o++) {
                if (e[o] && e[o].length > 0) {
                    if (o == SERVERCOUNT - 1) {
                        gysIcoInit(2, e[o])
                    } else if (o == SERVERCOUNT) {
                        var n = e[o].length;
                        for (var r = 0; r < n; r++) {
                            init(e[o][r].dom, 1)
                        }
                    } else {
                        var a = CONST["live800Server"][o] + "/mstatus.js?sid=" + o + "&" + getParams(e[o]);
                        new live800Request(a, function () {
                            var t = this.data.userlist;
                            var e = this.data.sid;
                            var i = 0;
                            if (typeof live800Status != "undefined") {
                                var o = live800Status ? live800Status[e] : [];
                                if (o) {
                                    i = o.length
                                }
                                try {
                                    for (var n = 0; n < i; n++) {
                                        init(t[n].dom, o[n])
                                    }
                                } catch (r) {
                                }
                            }
                        }, null, {sid: o, userlist: e[o]})
                    }
                }
            }
        }
    }

    LIVEDOM.domReady(function () {
        onInit();
        live800Icon_fn.push(onInit)
    })
})();

function openwindow(t, e) {
    var i = "toolbar=0,scrollbars=1,location=0,menubar=0,resizable=1,width=1240,height=700";
    try {
        var o = window.open(e || "", t, i);
        o.focus();
        o.opener = window
    } catch (n) {
        if (window.console) window.console.log("弹出在线客服窗口失败。")
    }
}

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
(function (a) {
    var t = function (t) {
        var e = {Jump: false, openJump: false, url: "", data: "", callback: ""};
        var t = a.extend({}, e, t);
        if (t.Jump && t.url) {
            if (t.openJump) {
                var u = window.open(t.url, "_blank");
                if (u == null) {
                    alert("您的浏览器拦截了弹出窗口，请您在浏览器上方点击拦截信息允许弹出此窗口！")
                }
            } else {
                window.location.href = t.url
            }
        } else {
        }
    };
    a.createProgress = function (a) {
        return new t(a)
    }
})(jQuery);

function maiMaRecTrack(a) {
    var b = a.time || 100;
    var c = a.maimaTimer || !1;
    var d = function () {
        window.recTrack && recTrack($(a.ele).attr("maima_param")), $(a.links).click(function () {
            window.recTrack && recTrack($(this).attr("maima_param"))
        })
    };
    c ? window.setTimeout(function () {
        d()
    }, b) : d()
}

/* gmpro-2.0.0/member/4.4.4 component.js Date:2019-07-30 17:42:14 */
jQuery.extend({
    STEP: 1, check: function () {
        return this.each(function () {
            this.checked = !0
        })
    }, uncheck: function () {
        return this.each(function () {
            this.checked = !1
        })
    }, delcheck: function () {
        return this.each(function () {
            this.checked && $(this).hide()
        })
    }, commonPop: function (a) {
        $(".outer-pop").remove();
        var b = a.message || "N/A", c = a.htm || b, e = (a.code || 0, a.x || 0), f = a.y || 0, g = a.top,
            h = a.customClass || "", i = a.isButton || !0, j = a.isPrompt || !1, k = a.confirmFunc,
            l = a.father || "body", m = a.popParent || "body",
            n = $('<div class="outer-pop t" style="left:0px;top:0px">							<div class="common-pop ' + h + '">							<div class="popup">							  <div class="custom"><!--\u81ea\u5b9a\u4e49\u5185\u5bb9\u533a\u57df-->								  <p>\u81ea\u5b9a\u4e49\u6587\u672c\u533a\u57df!</p>								  <span class="t">\u786e\u5b9a</span>								  <span class="f">\u53d6\u6d88</span>							  </div>							</div>						  </div>						</div>'),
            o = a.callback;
        $(m).append(n), i && $(".common-pop div span.t").show(), !i && $(".common-pop div span.f").hide(), j && $(".common-pop div span.t").show(), !j && $(".common-pop div span.f").hide(), $(".common-pop div.custom p").html(b), $(".common-pop").css({height: window.innerHeight}), $(".common-pop .popup").css({
            left: (window.innerWidth - ($(".common-pop .popup").width() + 50)) / 2,
            top: (window.innerHeight - ($(".common-pop .popup").height() + 40)) / 2
        }), a.htm && (setTimeout(function () {
            $(".outer-pop").css({
                position: "absolute",
                left: $(l).offset().left + e,
                top: g || $(l).offset().top + $(l).height() + 5 + f
            }), $(".outer-pop").children().css({position: "absolute", left: 0, top: 0})
        }), $(".outer-pop").html(c)), o && o(), $(".common-pop div span.t").live("click", function () {
            k && k(), $(".outer-pop").remove()
        }), $(".common-pop div span.f").live("click", function () {
            $(".outer-pop").remove()
        })
    }, exporters: function () {
        var b;
        return b = Object.create ? Object.create({}) : new Object
    }, Pager: function (a) {
        var b = a.pager || $("body"), c = a.currentpage || window.location.hash.replace("#", "") || 1,
            d = a.pagecount || 1, e = 1 == c, f = c == d, h = (a.totalRecords || 10, a.callback);
        return b.unbind("click"), b.bind("click", function (a) {
            var b = $(a.srcElement);
            if ("heavycolor" !== b.attr("class") && "heavycolor" !== b.parent().attr("class")) {
                var c = $(a.target), g = c.parent().attr("class"), i = window.location.hash.replace("#", "") || 1;
                if (e = 1 == i, isNaN(c.text())) {
                    if ("previous" == g && (i = e ? 1 : parseInt(i) - 1), "next" == g && (i = f ? d : parseInt(i) + 1), c.is("input")) return void c.val("")
                } else {
                    if (c.is("input")) return $(".brownBtn").die("click"), void $(".brownBtn").live("click", function () {
                        isNaN(c.val()) && c.val(1), i = c.val(), i > d ? i = d : (0 >= i || "" == i) && (i = 1), window.location.hash = i, h && h(i)
                    });
                    i = c.text()
                }
                window.location.hash = i, h && h(i + "")
            }
        }), b
    }, removeCookie: function (a, b) {
        return void 0 === $.cookie(a) ? !1 : ($.cookie(a, "", $.extend({}, b, {expires: -1})), !$.cookie(a))
    }, newComponent2: function () {
    }
}), $.fn.extend({
    listSwitcher: function (a) {
        var b = $(this), c = a.groupNum, d = a.staffNum;
        return $.STEP++, $.STEP %= c, $.STEP = 0 == $.STEP ? 1 : $.STEP, b.hide(), b.each(function (a) {
            a >= $.STEP * d - d && a <= $.STEP * d - 1 && b.eq(a).show()
        }), b.parent()
    }, addLoadingMask: function () {
        var a = {}, b = "background:rgba(0,0,0,.15)", c = "auto";
        Array.prototype.forEach ? Array.prototype.forEach.call(arguments, function (b) {
            a.width = b.width || null, a.height = b.height || null, a.x = b.left || null, a.y = b.top || null, a.msg = b.msg || null
        }) : $(arguments).each(function (b) {
            a.width = b.width || null, a.height = b.height || null, a.x = b.top || null, a.y = b.left || null, a.msg = b.msg || null
        }), $(this).find('input[type="checkbox"]').attr("disabled", "disabled"), $.browser.msie && (b = "", $.browser.version < 8 && (c = (a.height || this.height()) / 2 - 16 + "px"));
        var d = (a.width || this.width()) + "px;", e = (a.height || this.height()) + "px;",
            f = (a.x || this.offset().left) + "px;", g = (a.y || this.offset().top) + "px;",
            h = a.msg || "\u6b63\u5728\u52a0\u8f7d\u4e2d";
        return $("body").append($('<div class="loading-mask" style="position:absolute;' + b + ";text-align:center;z-index:999;left:" + f + "top:" + g + "width:" + d + "height:" + e + "line-height:" + e + ';"><span class="nBtn-load" style="margin-top:' + c + ';"><i class="ioc"></i><em>&nbsp;' + h + "...</em></span></div>")), $(".loading-mask")
    }, removeLoadingMask: function () {
        return $(this).find('input[type="checkbox"]').removeAttr("disabled"), $(".loading-mask").remove()
    }, commonPop: function (a) {
        $(".outer-pop").remove();
        var b = a.message || "N/A", c = a.htm || b, e = (a.code || 0, a.x || 0), f = a.y || 0, g = a.customClass || "",
            h = a.isButton || !0, i = a.isPrompt || !1, j = a.confirmFunc, k = a.father || this || "body",
            l = a.popParent || "body", m = "body" != l, n = m ? "inherit" : "absolute",
            o = $('<div class="outer-pop t" style="left:0px;top:0px">							<div class="common-pop ' + g + '">							<div class="popup">							  <div class="custom"><!--\u81ea\u5b9a\u4e49\u5185\u5bb9\u533a\u57df-->								  <p>\u81ea\u5b9a\u4e49\u6587\u672c\u533a\u57df!</p>								  <span class="t">\u786e\u5b9a</span>								  <span class="f">\u53d6\u6d88</span>							  </div>							</div>						  </div>						</div>'),
            p = a.callback;
        $(l).append(o), h && $(".common-pop div span.t").show(), !h && $(".common-pop div span.f").hide(), i && $(".common-pop div span.t").show(), !i && $(".common-pop div span.f").hide(), $(".common-pop div.custom p").html(b), $(".common-pop").css({height: window.innerHeight}), $(".common-pop .popup").css({
            left: m ? "" : (window.innerWidth - ($(".common-pop .popup").width() + 50)) / 2,
            top: m ? "" : (window.innerHeight - ($(".common-pop .popup").height() + 40)) / 2
        }), a.htm && (setTimeout(function () {
            $(".outer-pop").css({
                position: n,
                left: m ? "" : $(k).offset().left + e,
                top: m ? "" : $(k).offset().top + $(k).height() + 5 + f
            }), $(".outer-pop").children().css({position: n, left: 0, top: 0})
        }), $(".outer-pop").html(c)), p && p(), $(".common-pop div span.t").live("click", function () {
            j && j(), $(".outer-pop").remove()
        }), $(".common-pop div span.f").live("click", function () {
            $(".outer-pop").remove()
        })
    }, pager: function (a) {
        {
            var b = data.list, d = (a.last, a.dom);
            a.cur
        }
        $(d).html(""), $(d).html(b)
    }, lazyload: function (a) {
        var b = this;
        var c;
        var d = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: window,
            data_attribute: "original",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function e() {
            var a = 0;
            b.each(function () {
                var b = $(this);
                if (!d.skip_invisible || b.is(":visible")) if ($.abovethetop(this, d) || $.leftofbegin(this, d)) ; else if ($.belowthefold(this, d) || $.rightoffold(this, d)) {
                    if (++a > d.failure_limit) return !1
                } else b.trigger("appear"), a = 0
            })
        }

        return a && (void 0 !== a.failurelimit && (a.failure_limit = a.failurelimit, delete a.failurelimit), void 0 !== a.effectspeed && (a.effect_speed = a.effectspeed, delete a.effectspeed), $.extend(d, a)), c = void 0 === d.container || d.container === window ? $window : $(d.container), 0 === d.event.indexOf("scroll") && c.bind(d.event, function () {
            return e()
        }), this.each(function () {
            var a = this;
            var c = $(a);
            a.loaded = !1, (void 0 === c.attr("src") || c.attr("src") === !1) && c.is("img") && c.attr("src", d.placeholder), c.one("appear", function () {
                if (!this.loaded) {
                    if (d.appear) {
                        var e = b.length;
                        d.appear.call(a, e, d)
                    }
                    $("<img />").bind("load", function () {
                        var e = c.attr("data-" + d.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", e) : c.css("background-image", "url('" + e + "')"), c[d.effect](d.effect_speed), a.loaded = !0;
                        var f = $.grep(b, function (a) {
                            return !a.loaded
                        });
                        if (b = $(f), d.load) {
                            var g = b.length;
                            d.load.call(a, g, d)
                        }
                    }).attr("src", c.attr("data-" + d.data_attribute))
                }
            }), 0 !== d.event.indexOf("scroll") && c.bind(d.event, function () {
                a.loaded || c.trigger("appear")
            })
        }), $window.bind("resize", function () {
            e()
        }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && $window.bind("pageshow", function (a) {
            a.originalEvent && a.originalEvent.persisted && b.each(function () {
                $(this).trigger("appear")
            })
        }), $(document).ready(function () {
            e()
        }), this
    }, hoverShow: function (a) {
        var b = function (b) {
            var c = a;
            return 1 === $(b).find(a).length ? c = $(b).find(a) : 1 === $(b).parent().find(a) && (c = $(b).parent().find(a)), c
        };
        $(this).bind("mouseover", function () {
            b(this).show()
        }), $(this).bind("mouseout", function () {
            var c = this;
            b(c).hide()
        })
    }
});
/* gmpro-2.0.0/member/4.4.4 popBox.js Date:2019-07-30 17:42:14 */
"undefined" == typeof gomeUi && (window.gomeUi = {}), function (a) {
    gomeUi.PopBox = function (b) {
        this.opts = a.extend({}, gomeUi.PopBox.defaults, b), this.id = this.opts.id, this.html = this.opts.html, this.closeStr = this.opts.closeStr, this.init()
    }, gomeUi.PopBox.prototype = {
        init: function () {
            this.overlay = a('<div class="popBox-overlay"></div>').css({
                opacity: this.opts.opacity,
                zoom: 1,
                background: this.opts.overlayColor
            }).appendTo(this.opts.appendTo).height(a(document.body).outerHeight()).width(a(window).outerWidth()), this.self = a('<div class="popbox-content" id="' + this.id + 'Popbox"></div>'), this.self.html(this.html), a(this.self).appendTo(this.opts.appendTo), this.closeDom = this.self.find(this.closeStr), this.bindEvents()
        }, showBox: function () {
            this.overlay.show(), this.self.show()
        }, destroy: function () {
            this.overlay.remove(), this.self.remove()
        }, bindEvents: function () {
            var b = this;
            if (this.opts.animate) {
                var c = !0;
                this.overlay.unbind("click").click(function () {
                    c && (c = !1, b.self.animate({left: "-=5"}, 120, function () {
                        a(this).animate({left: "+=10"}, 100, function () {
                            a(this).animate({left: "-=5"}, 120, function () {
                                c = !0
                            })
                        })
                    }))
                })
            }
            this.ie6() ? this.ie6PopBoxPosition() : this.self.css(this.opts.animate ? {
                left: a(window).outerWidth() / 2,
                top: a(window).outerHeight() / 2,
                "margin-left": "-" + this.self.outerWidth() / 2 + "px",
                "margin-top": "-" + (this.self.outerHeight() / 2 + 60) + "px"
            } : {
                "margin-left": "-" + this.self.outerWidth() / 2 + "px",
                "margin-top": "-" + (this.self.outerHeight() / 2 + 60) + "px"
            }), a(window).on("resize", function () {
                b.setoverlay(), b.setLayer(), !b.ie6() && b.opts.animate && b.self.css({
                    left: a(window).outerWidth() / 2,
                    top: a(window).outerHeight() / 2
                })
            }), a(window).on("scroll", function () {
                b.setLayer()
            }), this.closeDom.on("click", function (a) {
                b.destroy(), a.preventDefault()
            })
        }, ie6: function () {
            return !window.XMLHttpRequest
        }, setoverlay: function () {
            if (this.ie6()) {
                var b = Math.max(a(document.body).outerHeight(), a(window).outerHeight());
                this.overlay.height(b).width(a(window).outerWidth())
            } else this.overlay.height(a(window).outerHeight()).width(a(window).outerWidth())
        }, setLayer: function () {
            this.ie6() && this.ie6PopBoxPosition()
        }, ie6PopBoxPosition: function () {
            var b = a(window).scrollTop(), c = (a(window).outerWidth() - this.self.outerWidth()) / 2,
                d = b + (a(window).outerHeight() - this.self.outerHeight()) / 2 - 60;
            this.self.css({left: c + "px", top: d + "px"})
        }
    }, gomeUi.PopBox.defaults = {
        id: "",
        appendTo: "body",
        mask: !1,
        opacity: .1,
        overlayColor: "#000",
        closeStr: "",
        animate: !0,
        html: ""
    }
}(jQuery);


/*
 1.地址：如果没有四级怎么处理
 2.是否有门店地址和门店电话
 3.多少个的时候展示轮播图
 4.发票
 5.地址组件是否修改，样式
 */
// var ModifyOrderTpl = new window.ModifyOrderTpl(),
//     modifyOrderConTpl = ModifyOrderTpl.modifyOrderConTpl,
//     orderDetail = new uc_public();


var ModifyOrderPage = function (data) {
    this.orderId = data.orderId || '';
    this.shippingGroupId = data.shippingGroupId || '';
    this.init();
}

/* gmpro-2.0.0/member/4.4.4 shippingGroupLive.js Date:2019-07-30 17:42:06 */
$(function () {
    var x = function () {
        this.render(), this.topEventInit()
    };
    $(window).resize(function () {
        $("#popup").css({left: (document.documentElement.clientWidth - 820) / 2})
    }), x.prototype = {
        render: function () {
            var a = this;
            a.renderHeader()
        }, topEventInit: function () {
            $(".triggerLive800").click(function () {
                var a = window.navigator.userAgent.indexOf("WebKit") > 0;
                if (a) {
                    var b = document.createEvent("HTMLEvents");
                    b.initEvent("click", !1, !0), $(".live800_gome").get(0).dispatchEvent(b)
                } else $(".live800_gome").trigger("click")
            })
        }, renderHeader: function () {
            var a = this;
        }, jihuo_DX: function (a, b) {
            var c = '<div class="dxjh_cont" style="position:absolute; top:95px;z-index:10;width:200px;height:197px;background:#fff;border:1px solid #ccc;padding:10px;">                                <span style="display:block;content:\'\';line-height:0;font-size:0;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:10px solid #ccc; position:absolute;left:40%;top:-10px;visibility:visible;">                                    <em style="display:block;content:\'\';line-height:0;font-size:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #fff; position:absolute;left:-8px;top:2px;visibility:visible;"></em>                                </span>                                <h5 style="font-size:12px;font-weight:bold;color:#333;text-align:left;">\u6fc0\u6d3b\u65b9\u5f0f</h5>                                <p style="color:#5e5e5e; padding:6px 0; font-family:\'Arial\';" class="jhUrl">PC\u7aef\u6fc0\u6d3b\uff1a<a style="color:#5e5e5e;font-size:11px;" href="" target="_blank"></a></p>                                <p style="color:#5e5e5e; text-align:left;">\u624b\u673a\u7aef\u6fc0\u6d3b\uff1a</p>                                <img class="erwm-code" style="display:block;text-indent:-9999px; margin:0 auto;" alt="\u7535\u4fe1\u8fd0\u8425\u4e8c\u7ef4\u7801" src="" >                            </div>';
            $(".dianxinBtn").hover(function () {
                var d = $(".dianxinBtn")[0].offsetLeft;
                $(this).css("background", "#ff5757"), $(".cont-l-top").after(c), $(".jhUrl a").text(a).attr("href", a), $(".erwm-code").attr("src", b), $(".dxjh_cont").css("left", d - 40), $(".dxjh_cont a").hover(function () {
                    $(this).css("color", "#e3101e")
                }, function () {
                    $(this).css("color", "#5e5e5e")
                })
            }, function () {
                $(this).css("background", "#c00"), $(".dxjh_cont").hover(function () {
                    clearTimeout(a)
                }, function () {
                    setTimeout(function () {
                        $(".dxjh_cont").remove()
                    }, 200)
                });
                var a = setTimeout(function () {
                    $(".dxjh_cont").remove()
                }, 200)
            })
        }, renderTakeInfo: function (a) {
            if (!a.deliveryType || "" === a.deliveryType) return !1;
            if ("N" === a.deliveryType) {
                var b = orderDetail.renderer(c, a);
                return $(b).find(".timer").remove().end().insertAfter("#process"), !1
            }
            $("#takeInfo").remove();
            var b = orderDetail.renderer(c, a);
            $(b).insertAfter("#process");
            var d = new Number(a.deliveryDate || "0");
            var e = (new Date).getTime();
            d = e + 1e3 * d, $.gTimer({
                ct: e, et: d, iEven: function () {
                }, aEven: function () {
                    var a = this.dt.format("$dd");
                    var b = this.dt.format("$hh");
                    var c = this.dt.format("$mm");
                    var d = this.dt.format("$s");
                    $("#takeTime").html("<i>" + a + "</i>\u5929<i>" + b + "</i>\u65f6<i>" + c + "\u5206</i><i>" + d + "</i>\u79d2")
                }, lEven: function () {
                    $("#takeTime").empty()
                }
            })
        }, renderRightInfo: function () {
            var a = this;
        }, packageEvent: function () {
            var a = 0, b = 0;
            $(".nav-btn-right").on("click", function () {
                var b = $(this).parent().find(".cont-nav-box"), c = b.find(".cont-nav-uls"), d = b.width(),
                    e = c.width(), f = Math.floor(e / d);
                f > a ? a++ : a = f, f >= a ? $(this).prevAll(".nav-btn-left").addClass("btnOn") : "", f > a ? $(this).addClass("btnOn") : $(this).removeClass("btnOn"), c.animate({left: -a * d + "px"}, 500)
            }), $(".nav-btn-left").on("click", function () {
                var b = $(this).parent().find(".cont-nav-box"), c = b.find(".cont-nav-uls"), d = b.width();
                a > 0 ? a-- : a = 0, a >= 0 ? $(this).nextAll(".nav-btn-right").addClass("btnOn") : "", a > 0 ? $(this).addClass("btnOn") : $(this).removeClass("btnOn"), c.animate({left: -a * d + "px"}, 500)
            }), $(".cont-warp").on("click", ".commodity-btn-right", function () {
                var a = $(this).parent().find(".commodity-box"), c = a.find(".commodity-uls"), d = a.width(),
                    e = c.width(), f = Math.floor(e / d);
                f > b ? b++ : b = f, f >= b ? $(this).prevAll(".commodity-btn-left").addClass("btn-on") : "", f > b ? $(this).addClass("btn-on") : $(this).removeClass("btn-on"), c.animate({left: -b * d + "px"}, 500)
            }), $(".cont-warp").on("click", ".commodity-btn-left", function () {
                var a = $(this).parent().find(".commodity-box"), c = a.find(".commodity-uls"), d = a.width();
                b > 0 ? b-- : b = 0, b >= 0 ? $(this).nextAll(".commodity-btn-right").addClass("btn-on") : "", b > 0 ? $(this).addClass("btn-on") : $(this).removeClass("btn-on"), c.animate({left: -b * d + "px"}, 500)
            })
        }, getShipPackage: function () {
            var a = this, b = {}, c = "";
            $(".cont-nav-uls").on("click", "li", function () {
                var d = $(".cont-nav-uls li").length - 1, e = $(this).index();
                {
                    var f = $(this).attr("packageid") || "", g = $(this).attr("orderid"), h = $(this),
                        i = $(this).attr("shippingGroupid");
                    $(this).parents(".logistics")
                }
                "" == f && e == d ? (c = "getUnExShipPackage", b = {
                    orderId: g,
                    shippingGroupId: i
                }) : (c = "getShipPackage", b = {orderId: g, shippingGroupId: i, packageId: f})
            })
        }, openEvent: function () {
            var a = $("#process-statck").find("ul");
            $("#deployAll").toggle(function () {
                a.removeClass("all"), $(this).find("span").text("\u6536\u8d77").end().find("i").addClass("up")
            }, function () {
                a.addClass("all"), $(this).find("span").text("\u5c55\u5f00").end().find("i").removeClass("up")
            })
        }, renderOrderHistory: function () {
            var b = this;
            var c = {};
        }, mapDisplay: function () {
            var a = this;
            var b = !0;
        }, createMap: function (a) {
            var b = a.gomeState, c = a.warehouseCoordinate.split(","), d = a.deliveryManCoordinate.split(","),
                e = a.shippingAddressCoordinate.split(",");
            var f = new BMap.Map("map");
            f.enableScrollWheelZoom();
            var g = new BMap.Point(c[1], c[0]);
            var h = new BMap.Icon("//gfs2.gomein.net.cn/T1XgDvBmxg1RCvBVdK.jpeg", new BMap.Size(83, 39), {
                anchor: new BMap.Size(13, 33),
                imageOffset: new BMap.Size(0, 0)
            });
            var i = new BMap.Point(e[1], e[0]);
            var j = new BMap.Icon("//gfs2.gomein.net.cn/T10nbvBbbQ1RCvBVdK.jpeg", new BMap.Size(83, 39), {
                anchor: new BMap.Size(13, 35),
                imageOffset: new BMap.Size(0, 0)
            });
            var k = new BMap.Marker(g, {icon: h});
            var l = new BMap.Marker(i, {icon: j});
            f.addOverlay(k), f.addOverlay(l);
            var m = n(c[1], e[1], c[0], e[0]);

            function n(a, b, c, d) {
                var e = ["50", "100", "200", "500", "1000", "2000", "5000", "10000", "20000", "25000", "50000", "100000", "200000", "500000", "1000000", "2000000"];
                var g = new BMap.Point(a, c);
                var h = new BMap.Point(b, d);
                var i = f.getDistance(g, h).toFixed(1);
                for (var j = 0, k = e.length; k > j; j++) if (e[j] - i > 0) return 18 - j + 3
            }

            var p, q, r;
            var s = new BMap.Point(d[1], d[0]);
            "DL" != b && v(s);
            var t = function (a) {
                if (u.getStatus() == BMAP_STATUS_SUCCESS) {
                    var b = a.getPlan(0);
                    q = b.getDistance(!0), r = new BMap.Label("\u8ddd\u60a8" + q, {offset: new BMap.Size(225, 20)}), r.setStyle({
                        fontSize: "12px",
                        border: 0,
                        fontFamily: "\u5fae\u8f6f\u96c5\u9ed1",
                        background: "none",
                        color: "#fff",
                        marginLeft: "-178px",
                        marginTop: "-8px"
                    }), p.setLabel(r)
                }
            };
            var u = new BMap.DrivingRoute(f, {onSearchComplete: t});
            u.search(s, i), f.centerAndZoom(s, m - 1);

            function v(a) {
                f.removeOverlay(p);
                var b = new BMap.Icon("//gfs2.gomein.net.cn/T19ndvBCVj1RCvBVdK.jpeg", new BMap.Size(136, 65), {
                    anchor: new BMap.Size(23, 60),
                    imageOffset: new BMap.Size(0, 0)
                });
                p = new BMap.Marker(a, {icon: b}), f.addOverlay(p)
            }

            $("#close").on("click", function () {
                f.reset(), $(".mapContent").hide(), $("#shade").hide()
            }), p.addEventListener("mouseover", function () {
                r.setContent(a.deliveryManName + "<br>" + a.deliveryManPhone), r.setOffset(new BMap.Size(225, 10)), r.setStyle({marginTop: "-5px"})
            }), p.addEventListener("mouseout", function () {
                r.setContent("\u8ddd\u60a8" + q), r.setOffset(new BMap.Size(225, 20)), r.setStyle({marginTop: "-8px"})
            })
        }, getVerifyCodeCtrl: function () {
            $("#getVerifyCodeCtrl").unbind("click").html('<span id="miaoshu2Id">60</span>\u79d2\u540e\u91cd\u65b0\u83b7\u53d6')

            function b(a) {
                a--, a > 0 ? ($("#miaoshu2Id").text(a), setTimeout(function () {
                    b(a)
                }, 1e3)) : ($("#getVerifyCodeCtrl").html("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801"), $("#getVerifyCodeCtrl").bind("click", function () {
                    x.prototype.getVerifyCodeCtrl()
                }))
            }
        }, bindCardCtrl: function (a) {
            $(".bindCardCtrl").unbind("click").bind("click", function () {
                var b = new gomeUi.PopBox({
                    id: "notice",
                    closeStr: ".uc_closed",
                    html: '<div class="uc-main commonPopBoxWrapper" style="width:400px;">                                <span class="uc_closed"></span>                                <div class="uc_box">                                    <div class="uc_box_cont" valign="middle">                                        <span class="warn_icon"></span>                                        <div class="custom">                                          <p>\u60a8\u662f\u5426\u7ed1\u5b9a\u672c\u8ba2\u5355\u6240\u8d2d\u4e70\u7684\u7f8e\u901a\u5361\u5230\u5f53\u524d\u8d26\u53f7</p>                                          <div class="customBtn">                                          <span class="t">\u786e\u5b9a</span>                                          <span class="f">\u53d6\u6d88</span>                                          </div>                                      </div>                                    </div>                                </div>                            </div>'
                });
                b.showBox(), $(".commonPopBoxWrapper .custom span.t").unbind("click").bind("click", function (c) {
                    b.destroy(), c.preventDefault()
                }), $(".commonPopBoxWrapper .custom span.f").unbind("click").bind("click", function (a) {
                    b.destroy(), a.preventDefault()
                })
            })
        }, getShowCardCtrl: function () {
            var b = $('input[name="validateCode"]').val();

        }, serviceCapacity: function (a) {
            var c, b = {}, d = "static/image/",
                e = a.match(new RegExp("\u767e\u4e16\u6c47\u901a|\u56fd\u901a|\u5feb\u6377|\u5168\u5cf0|\u7533\u901a|\u987a\u4e30|\u5929\u5929|\u4f18\u901f|\u5706\u901a|\u97f5\u8fbe|\u4e2d\u901a"));
            if (e) switch (e[0]) {
                case"\u767e\u4e16\u6c47\u901a":
                    c = d + "bsht.jpg";
                    break;
                case"\u56fd\u901a":
                    c = d + "guotong.jpg";
                    break;
                case"\u5feb\u6377":
                    c = d + "kuaijie.jpg";
                    break;
                case"\u5168\u5cf0":
                    c = d + "quanfeng.jpg";
                    break;
                case"\u7533\u901a":
                    c = d + "shentong.jpg";
                    break;
                case"\u987a\u4e30":
                    c = d + "shunfeng.jpg";
                    break;
                case"\u5929\u5929":
                    c = d + "tiantian.jpg";
                    break;
                case"\u4f18\u901f":
                    c = d + "yousu.jpg";
                    break;
                case"\u5706\u901a":
                    c = d + "yuantong.jpg";
                    break;
                case"\u97f5\u8fbe":
                    c = d + "yunda.jpg";
                    break;
                case"\u4e2d\u901a":
                    c = d + "zhongtong.jpg"
            }
            b.expressName = a, b.expressImgSrc = c, b.expressName && orderDetail.renderer(r, b, $("#deliveryBox"), function () {
                var a = $("#deliveryBox").find(".deliveryPop"), b = $("#deliveryBox").find("i");
                $("#deliveryBox").find("h3").click(function () {
                    a.show()
                }), b.click(function () {
                    a.hide()
                })
            })
        }, renderDeliveryInfo: function (a) {
            var b = this, c = {orderId: orderId, shippingGroupId: "null" == shippingGroupId ? "" : shippingGroupId};
            var d = {};
        }, renderProductInfo: function () {
            var a = this;
            $.browser.msie && $.browser.version < 9 && $(".cont-middle").css({display: "inline"})
        }, renderGuessYouLike: function (a, b) {
            var c = ($.cookie("atgregion") || "11010200|\u5317\u4eac\u5317\u4eac\u5e02\u671d\u9633\u533a(\u4e94\u73af\u91cc)|11010000|11000000|110102001").split("|");
        }, renderRecommened: function () {
            var a = $.cookie("atgregion").split("|")[0] || 11011400;
            var b = "";
        }, cutd: function () {
            if (0 != $("#payTime").length) {
                {
                    var b = $("#countDown");
                    b.find(".time"), b.find(".rpt")
                }
                var e = new Number($("#payTime").attr("time") || "0");
                var f = (new Date).getTime();
                e = f + 1e3 * e, $.gTimer({
                    ct: f, et: e, iEven: function () {
                    }, aEven: function () {
                        var a = Number(this.dt.format("$dd"));
                        var c = Number(this.dt.format("$hh"));
                        a > 0 && (c += 24 * a), 3 >= c && b.hasClass("green") && b.removeClass("green").addClass("red");
                        var d = this.dt.format("$mm");
                        var e = this.dt.format("$s");
                        $("#payTime").html("<i>" + c + "</i>\u65f6<i>" + d + "\u5206</i><i>" + e + "</i>\u79d2")
                    }, lEven: function () {
                        $("#payTime").html("<i>00</i>\u65f6<i>00</i>\u5206<i>00</i>\u79d2")
                    }
                })
            }
        }, cancelOrder: function (a) {
            var b = this;
            var c = '<div class="pop cancelorder myorder-cancelorder">                            <span class="myorder-closed"></span>                           <div class="myorderCont">                                <p class="grayfont myorder" style="margin:-16px 0 0 0;"><b>\u91cd\u8981\u63d0\u793a</b></p>                                <p class="orange" style="margin:6px 0;">* \u8ba2\u5355\u53d6\u6d88\u540e\u5c06\u65e0\u6cd5\u6062\u590d</p>                                <p class="orange" style="margin-bottom:10px;">* \u8ba2\u5355\u5df2\u4ed8\u91d1\u989d\u5c06\u539f\u8def\u8fd4\u8fd8\u6216\u8fd4\u8fd8\u81f3\u60a8\u7684\u56fd\u7f8e\u5e01\u8d26\u6237</p>                                <p class="grayfont myorder"><b>\u8bf7\u9009\u62e9\u53d6\u6d88\u539f\u56e0</b></p>                                <ul class="myorderRadio clearfix">                                    <li><input type="radio" value="csgrc9" name="radio1"/>\u6dfb\u52a0\u6216\u5220\u9664\u5546\u54c1</li>                                    <li class="myorderRadiowid100"><input type="radio" value="csgrc7"  name="radio1"/>\u8ba2\u5355\u4fe1\u606f\u6709\u8bef</li>                                    <li><input type="radio" value="csgrc3" name="radio1"/>\u9001\u8d27\u65f6\u95f4\u592a\u957f</li>                                    <li class="myorderRadiowid100"><input type="radio" value="csgrc10" name="radio1"/>\u4ef7\u683c\u6bd4\u5176\u4ed6\u5e73\u53f0\u8d35</li>                                    <li><input type="radio" value="csgrc8" name="radio1"/>\u5fd8\u8bb0\u4f7f\u7528\u4f18\u60e0\u5238\u3001\u7f8e\u8c46\u7b49</li>                                    <li class="myorderRadiowid100"><input type="radio" value="csgrc4" name="radio1"/>\u8be5\u5546\u54c1\u964d\u4ef7\u4e86</li>                                    <li><input type="radio" value="csgrc6" name="radio1"/>\u91cd\u590d\u4e0b\u5355/\u8bef\u4e0b\u5355</li>                                    <li class="myorderRadiowid100"><input type="radio" value="csgrc5" name="radio1"/>\u652f\u4ed8\u9047\u5230\u95ee\u9898</li>                                    <li><input type="radio" value="csgrc1" name="radio1"/>\u6211\u4e0d\u60f3\u4e70\u4e86</li>                                </ul>                                <p class="myorder-btnBox">                                    <span class="enablebrownBtn" id="js-confirm-btn">\u786e\u5b9a</span>                                    <a class="whiteBtn" href="javascript:;" id="js-cancel-btn">\u53d6\u6d88</a>                                </p>                           </div>                        </div>';
            $.commonPop({
                htm: c, father: a, x: -220, y: 0, callback: function () {
                    $("input[type='radio']").click(function () {
                        $(this).attr("checked") && $(".enablebrownBtn").addClass("brownBtn")
                    }), $("#js-confirm-btn").click(function () {
                        if (!$(this).hasClass("brownBtn")) return !1;
                        var a = $("input[type='radio'][name='radio1']:checked").val();
                        var c = $("#getShipId").attr("shipid");
                    }), $(".myorder-closed,#js-cancel-btn").click(function () {
                        $(".pop").hide()
                    })
                }
            }), $(".cont-l-top").find("a[title='\u53d6\u6d88\u8ba2\u5355']").mouseout(function () {
                var a;
                $(".cancelorder").live("mouseover mouseout", function (b) {
                    "mouseover" == b.type ? clearTimeout(a) : "mouseout" == b.type && (a = setTimeout(function () {
                        $(".pop").hide()
                    }, 1500))
                })
            })
        }, modifyOrder: function (a) {
            if (0 !== a.length) {
                var b = a.attr("shipid");
                window.OModifyOrderPage ? (OModifyOrderPage.getAllOrderData(), $("#modifyOrderPopup").show()) : (OModifyOrderPage = new ModifyOrderPage({
                    orderId: orderId,
                    shippingGroupId: b
                }), $("#modifyOrderPopup").show())
            }
        }, confirmDelivery: function (a) {
            var b = this, c = a.text() || "\u786e\u8ba4\u6536\u8d27";
            var d = a.attr("storeflag");
            $.commonPop({
                x: -240,
                htm: '<div class="pop cancelorder2">							<div class="warn"></div>							<div class="warninfo">								<p class="grayfont ml2">\u8bf7\u6536\u5230\u8d27\u540e\u518d' + c + '</p>								<p class="brownfont ml2">\u5426\u5219\u53ef\u80fd\u94b1\u8d22\u4e24\u7a7a\u54e6~</p>								<p class="grayfont mt2 ml2">									<a href="javascript:;" class="brownBtn fl" style="height:24px;line-height:24px;">\u786e\u5b9a</a>									<a href="javascript:;" class="whiteBtn fl ml2" style="height:24px;line-height:24px;">\u53d6\u6d88</a>								</p>							</div>						</div>',
                father: a,
                customClass: "grey-style",
                callback: function () {
                    $(".cancelorder2 .brownBtn").bind("click", function () {

                    }), $(".cancelorder2 .whiteBtn").bind("click", function () {
                        $(".outer-pop").remove()
                    })
                }
            })
        }, activeCard: function () {
            var b = this;
            orderDetail_interface({
                param: {
                    id: "105",
                    method: "getMeitongcard",
                    params: {
                        orderId: $("#orderId").text() || orderId,
                        shippingGroupId: $("#sgId").text() || shippingGroupId
                    }
                }, callback: function (a) {
                    if (a.error) return void $.commonPop({message: a.error.message});
                    var c = orderDetail.renderer(m, a);
                    var d = new gomeUi.PopBox({id: "notice", closeStr: ".j-close", html: c});
                    d.showBox();
                    var e = $(d.self), f = e.find(".finish");
                    f.click(function () {
                        var a = e.find(".contMain");
                        var c = a.attr("totalcount");
                        return a.empty().append('<span class="smile"></span>\u60a8\u7684' + c + "\u5f20\u7f8e\u901a\u5361\u6b63\u5728\u6fc0\u6d3b\u4e2d!"), $(".contMain").addClass("activationCont"), setTimeout(function () {
                            orderDetail_interface({
                                param: {
                                    id: "105",
                                    method: "activeMeitongcard",
                                    params: {
                                        orderId: $("#orderId").text() || orderId,
                                        shippingGroupId: $("#sgId").text() || shippingGroupId
                                    }
                                }, callback: function (c) {
                                    if (c.error) return void $.commonPop({message: c.error.message});
                                    if (c.activeState || "true" === c.activeState) {
                                        var e = a.attr("totalcount");
                                        a.empty().append('<span class="smile"></span>\u60a8\u7684' + e + "\u5f20\u7f8e\u901a\u5361\u6fc0\u6d3b\u6210\u529f!"), $(".contMain").addClass("activationCont"), b.renderHeader(), setTimeout(function () {
                                            $(".popBox-overlay,.popupMain").hide()
                                        }, 3e3)
                                    } else a.empty().append("\u60a8\u7684\u7f8e\u901a\u5361\u6fc0\u6d3b\u5931\u8d25,\u8bf7\u91cd\u65b0\u6fc0\u6d3b"), $(".contMain").addClass("activationCont")
                                }
                            })
                        }, 5e3), !1
                    })
                }
            })
        }, getAjax: function (a) {
            try {
            } catch (b) {
            }
        }
    }, new x
});
