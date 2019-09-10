
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
(function (e) {
    e.fn.autopoint = function (t) {
        defaults = {
            url: t.url,
            environment: t.environment,
            targetType: t.targetType,
            contentLabels: t.contentLabels,
            language: t.language,
            keyLeft: 37,
            keyUp: 38,
            keyRight: 39,
            keyDown: 40,
            keyEnter: 13,
            listHoverCSS: "hover",
            topoffset: t.topoffset || 10
        };
        var t = e.extend(defaults, t);
        var i = e("#searchTips");
        var s = e("#searchTipsList");
        var n = false;
        i.hover(function () {
            n = true
        }, function () {
            n = false
        });
        var a = e.cookie("__clickidc"), o = ["search", "delete", "clear"], r = "", l = "";
        var h = function () {
            this.capacity = 3;
            this.list = new Array;
            this.push = function (e, t) {
                var i = {key: e, value: t};
                if (i == null) return;
                if (this.list.length >= this.capacity) {
                    this.list.removeCache(0)
                }
                this.list.push(i)
            };
            this.remove = function (e) {
                if (this.list == null) return;
                this.list.removeCache(0)
            };
            this.clear = function () {
                this.list = new Array
            };
            this.get = function (e) {
                if (e == null) return;
                for (var t = 0; t < this.list.length; t++) {
                    var i = this.list[t];
                    if (e == i.key) {
                        return i
                    }
                }
            }
        };
        Array.prototype.removeCache = function (e) {
            if (isNaN(e) || e > this.length) {
                return false
            }
            for (var t = 0, i = 0; t < this.length; t++) {
                if (this[t] != this[e]) {
                    this[i++] = this[t]
                }
            }
            this.length -= 1
        };
        var c = new h;
        return this.each(function () {
            var r = e(this);
            var h = -1;
            var f = false;
            e(this).bind("keydown", function (n) {
                if (i.css("display") != "none") {
                    var a = s.find("." + t.listHoverCSS);
                    if (n.keyCode == t.keyDown) {
                        var o = null;
                        h++;
                        if (h == s.find("li").length) {
                            h = 0
                        }
                        o = s.find("li").eq(h);
                        if (o != null) {
                            unHoverAll();
                            o.mouseover();
                            f = false;
                            e(this).val(getPointWord(o))
                        }
                        return false
                    } else if (n.keyCode == t.keyUp) {
                        var r = null;
                        if (h != -1) {
                            h--
                        }
                        if (h == -1) {
                            h = s.find("li").length - 1
                        }
                        r = s.find("li").eq(h);
                        if (r != null) {
                            unHoverAll();
                            r.mouseover();
                            f = false;
                            e(this).val(getPointWord(r))
                        }
                        return false
                    } else if (n.keyCode == t.keyEnter) {
                        var l = s.find("li").eq(h);
                        var c = getPointWord(l);
                        if (l.hasClass("search-item")) {
                            var u = l.attr("category");
                            if (h == -1) {

                            } else {

                            }
                            return false
                        } else {
                            if (e(".search-input-bot").attr("autoPoint") == "point") {
                                doSearchbot()
                            } else {
                                doSearch()
                            }
                        }
                        return false
                    }
                }
                e(this).attr("alt", e(this).val());
                f = true
            }).hover(function () {
                n = true
            }, function () {
                n = false
            });
            var u = function (t) {
                if (!f) {
                    return
                }
                var n = e(this).val();
                if (e(this).val() == e(this).attr("alt")) {
                    return
                } else {
                    if (e("#his_title").css("display") == "block") {
                        e("#his_title").hide(0);
                        s.empty();
                        i.hide(0)
                    } else {
                    }
                    setTimeout(function () {
                        e("#his_title").hide(0);
                        if (d) {
                            clearTimeout(d)
                        }
                        d = setTimeout(function () {
                            getData(r, n)
                        }, 200)
                    }, 1e3);
                    e("#his_title").hide(0)
                }
                if (e(this).val() == "") {
                    setTimeout(function () {
                        signData.login({}, function (t) {
                            if (window.loginData.loginId) {
                                l = window.loginData.loginId
                            }
                            if (!t.isTransient && t.isTransient != "true") {
                                s.empty();
                                getDataHis(r, 0)
                            } else {
                                s.empty();
                                e("#his_title").hide(0);
                                i.hide(0);
                                return
                            }
                        })
                    }, 1e3)
                }
            };
            this.oninput = u;
            this.onpropertychange = u;
            var d = null;
            e("body").mouseover(function () {
                if (d) {
                    clearTimeout(d)
                }
                d = setTimeout(function () {
                    if (n && i.find("." + t.listHoverCSS) != 0) {
                        return
                    }
                    s.empty();
                    i.hide()
                }, 150)
            });
            handleResponse = function (t, s) {
                if (s == null || s.length == 0) {
                    i.hide();
                    e("#his_title").hide(0);
                    return
                }
                render(t, s);
                e("#his_title").hide(0);
                i.show()
            };
            handleResponseHis = function (e, t) {
                if (t == null || t.length == 0) {
                    i.hide();
                    return
                }
                renderHis(e, t);
                i.show()
            };
            render = function (e, t) {
                s.empty();
                var i = "";
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    if (a.length >= 4) {
                        i += '<li class="search-item" category="' + a[3].cat[1] + '" keyword="' + a[0] + '">' + '<span class="fs" style="float:left;">在' + "<b>" + a[3].cat[3] + "</b><i>&gt;</i>" + '<a class="akeyword" href="javascript:txtCode();">' + a[3].cat[0] + '</a>分类中搜索</span><span class="fr color-b">约' + a[3].cat[2] + "条</span></li>"
                    } else {
                        i += '<li><a class="akeyword" href="javascript:txtCode();">' + '<span class="fl">' + a[0] + '</span><span class="fr color-b">约' + a[1] + "条</span></a></li>"
                    }
                }
                jebind(e, i)
            };
            renderHis = function (t, i) {
                s.empty();
                var n = "";
                var a = "";
                for (var o = 0, r = i.length; o < r; o++) {
                    if (r >= 1) {
                        a += '<li><a class="akeyword" href="#">' + '<span class="fl">' + i[o].search + '</span><span id="his_del" class="fr color-b" style="display:none">删除</span></a></li>'
                    }
                }
                e("#searchTips").find("ul").append(a);
                jebindHis(t, a)
            };
            jebind = function (n, a) {
                s.append(a);
                s.find("li.search-item:last").css("border-bottom", "1px solid #EEEEEE");
                s.find("li").each(function (a) {
                    e(this).attr("index", a);
                    e(this).unbind("mouseover").mouseover(function () {
                        unHoverAll();
                        e(this).addClass(t.listHoverCSS);
                        e(this).find("a:first").addClass(t.listHoverCSS);
                        h = e(this).attr("index")
                    }).unbind("click").click(function () {
                        var t = getPointWord(e(this));
                        n.val(t);
                        s.empty();
                        i.hide();
                        n.focus();
                        h = -1;
                        if (e(this).hasClass("search-item")) {
                            var a = e(this).attr("category");
                            return false
                        } else {
                            if (e(".search-input-bot").attr("autoPoint") == "point") {
                                doSearchbot()
                            } else {
                                doSearch()
                            }
                        }
                    })
                })
            };
            jebindHis = function (n, a) {
                e("#hisClear").click(function () {
                    getDataHis(r, 2)
                });
                s.find("li").each(function (a) {
                    e(this).find("#his_del").click(function (t) {
                        t.stopPropagation();
                        var i = e(this).siblings().text();
                        getDataHis(r, 1, i)
                    });
                    e(this).unbind("mouseover").mouseover(function () {
                        unHoverAll();
                        e(this).find("#his_del").show();
                        e(this).siblings().find("#his_del").hide();
                        e(this).addClass(t.listHoverCSS);
                        e(this).find("a:first").addClass(t.listHoverCSS);
                        h = e(this).index()
                    }).unbind("click").click(function () {
                        var t = getPointWord(e(this));
                        n.val(t);
                        s.empty();
                        i.hide();
                        n.focus();
                        h = -1;
                        if (e(this).hasClass("search-item")) {
                            var a = e(this).attr("category");
                            return false
                        } else {
                            if (e(".search-input-bot").attr("autoPoint") == "point") {
                                doSearchbot()
                            } else {
                                doSearch()
                            }
                        }
                    })
                })
            };
            unHoverAll = function () {
                s.find("li").each(function (i) {
                    e(this).removeClass(t.listHoverCSS);
                    e(this).find("a:first").removeClass(t.listHoverCSS)
                })
            };
            getPointWord = function (e) {
                return e.attr("keyword") ? e.attr("keyword") : e.find("span:first").text()
            };
            getData = function (i, n) {
                n = n.replace(/[()'";,{}~!@#$%^&*(){}?\|<>.]/g, "");
                var a = document.location, o = /\/category\/(.*)?\.html.*$/gi, r = [], l, h = "";
                while (r = o.exec(a)) {
                    l = r[1]
                }
                if (l) h = "&category=" + l;
                var f = t.url + "&module=searchSuggest" + "&query=" + encodeURI(n) + "&jp=true" + h;
                if (c.get(n)) {
                    var u = c.get(n).value;
                    handleResponse(i, u)
                } else {
                    e.ajax({
                        type: "get", url: f, dataType: "jsonp", jsonpName: "suggest", success: function (t) {
                            e("#his_title").hide(0);
                            s.empty();
                            handleResponse(i, t);
                            c.push(n, t)
                        }
                    })
                }
            };
            getDataHis = function (t, n, r) {
                var h = r && r != undefined ? "&product=" + r : "";
                e.ajax({
                    type: "get",
                    url: "//bigd.gome.com.cn/gome/search?cid=" + a + "&uid=" + l + "&type=" + o[n] + h,
                    cache: false,
                    dataType: "jsonp",
                    jsonpName: "search",
                    success: function (a) {
                        if (n == 1) {
                            if (a.status == "0") {
                                getDataHis(t, 0)
                            }
                        } else if (n == 2) {
                            if (a.status == "0") {
                                s.empty();
                                i.hide()
                            }
                        } else {
                            a = a.lst;
                            if (a && a.length) {
                                e("#his_title").show();
                                handleResponseHis(t, a)
                            } else {
                                e("#his_title").hide();
                                i.hide()
                            }
                        }
                    }
                })
            };
            e("#searchInput").focus(function () {
                if (e("#searchInput").val() == "") {
                    setTimeout(function () {
                        signData.login({}, function (e) {
                            if (window.loginData.loginId) {
                                l = window.loginData.loginId
                            }
                            if (!e.isTransient && e.isTransient != "true") {
                                i.hide();
                                getDataHis(r, 0)
                            } else {
                            }
                        })
                    }, 1e3)
                } else {
                    e("#his_title").hide();
                    s.empty();
                    i.hide();
                    var t = e(this).val();
                    getData(r, t)
                }
            })
        })
    }
})(jQuery);
(function (t) {
    function e() {
        if (typeof minCartType !== "undefined" && minCartType === "QYG") {
            return true
        }
        return false
    }

    var c = 10 * 1e3;
    var m = {
        renderCart: d,
        reqMiniCart: l,
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

    function l() {

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
(function (t) {
    var e = {0: "home", 1: "qyg"};
    var r = {};

    function n() {
        if (typeof minCartType !== "undefined" && minCartType === "QYG") {
            return true
        }
        return false
    }

    function c() {
        var t = $.cookie("cartnum");
        o(t);
        if (n()) {
            return r["qyg"] || 0
        }
        return r["home"] || 0
    }

    function m() {
        return "0_" + (r.home || 0) + "-1_" + (r.qyg || 0)
    }

    function o(t) {
        if (!t) return 0;
        var a = t.split("-");
        if (!a && a.length < 1) {
            return 0
        }
        for (var n = 0; n < a.length; n++) {
            var c = a[n];
            var m = c.split("_");
            if (!m[0]) continue;
            var o = e[m[0]] || "home";
            r[o] = m[1] || 0
        }
    }

    function i(t) {
        if (n()) {
            r.qyg = t || 0
        } else {
            r.home = t || 0
        }
        var a = new Date;
        a.setTime(a.getTime() + 60 * 60 * 1e3 * 24 * 7);

    }

    t.mCart = {
        getMcartNum: function (t) {
            if (t) {
                t = t
            } else {
                t = 0
            }
            $("#gome-aside-cart").find(".car_num s").html(t);
            $(".gome-bar-btn-cart").find(".car_num s").html(t);
            $("#commerceItemQuantityId").html(t);
            if (t != 0) {
                if (n()) {
                    $("#hdrcarttext").text("企业购物车")
                } else {
                    $("#hdrcarttext").text("我的购物车")
                }
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").css("background", "#dd00a7");
                $("#gome-bar-btn-cart .caricon,#gome-aside-cart .caricon").addClass("caricon_num");
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").removeClass("car_num_0").addClass("car_num_more");
                $(".mygome-side").addClass("havecount")
            } else {
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").css("background", "#A5A5A5");
                $("#gome-bar-btn-cart .caricon,#gome-aside-cart .caricon").removeClass("caricon_num");
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").addClass("car_num_0").removeClass("car_num_more");
                $(".mygome-side").removeClass("havecount");
                if (n()) {
                    $("#hdrcarttext").text("企业购物车")
                } else {
                    $("#hdrcarttext").text("我的购物车")
                }
                return
            }
            $("#commerceItemQuantityId").html(t);
            if (t > 0) {
                $("[data-cart='mincart'],.cart").addClass("havecount");
                if (n()) {
                    $("#hdrcarttext").text("企业购物车")
                } else {
                    $("#hdrcarttext").text("我的购物车")
                }
            }
        }, lazyCart: function (a) {
            var e = c() || 0;
            if (a == false) {
                mCart.getMcartNum(e)
            } else if (c() && c() >= 0) {
                t.mCart.getMcartNum(c())
            } else {
                mCart.getCartNumber()
            }
        }, getCartNumber: function () {

        }, lazyCartDom: function (t) {
            if (t.success === true) {
                i(t.data);
                var a = c();
                mCart.getMcartNum(a)
            } else {
                mCart.getMcartNum(0);
                return
            }
        }, isQyg: n
    };
    $(function u() {
        if (window.$page) {
            t.mCart.lazyCart(false)
        } else {
            t.mCart.lazyCart(true)
        }
    })
})(window);
this.searchInput();

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
});
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
            $.ajax({
                url: stageJsServer + "/gmlib/ui/slimscroll/1.3.7.1/slimscroll.min.js",
                dataType: "script",
                cache: true,
                success: function () {
                    I()
                }
            })
        }
        m.attr("data-open", "true")
    }

    function M(e) {
        var i = e;

        function s(e) {

        }

        s(function (e) {
            if (e == "true") {
                $.ajax({
                    url: stageJsServer + "/gmlib/unit/g/1.0.0/g.min.js",
                    dataType: "script",
                    cache: true,
                    success: function () {
                        g.login(function () {
                            $(i).trigger("click")
                        })
                    }
                });
                a.hide();
                a.attr("data-open", "").css("right", "-240px");
                t.find("li").removeClass("hover")
            } else {
                a.show();
                t.find("li").removeClass("hover").end().find("." + $(i).attr("class")).addClass("hover");
                _("member")
            }
        });
        $.ajax({
            url: stageJsServer + "/gmpro/1.0.0/public/1.0.0/js/aside-member.min.js?versionData=" + versionData,
            dataType: "script",
            cache: true,
            success: function () {
            }
        })
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
(function (e) {
    var t = jQuery;
    var i = t('<div class="Dialog_bg"></div>');
    var n = false;

    function a(e, a) {
        if (!n) {
            n = true;
            t("body").append(i)
        }
        a = a || {};
        this.config = a;
        this.config.zIndex = a.zIndex || 1e4;
        this._bg_Dialog = i;
        this._dom = e;
        this._wrap = t('<div class="Dialog"></div>');
        this._wrap.append(e);
        t("body").append(this._wrap);
        if (a.closeBtn != false) {
            this._closeBtn = t('<a class="closeBtn" href="javascript:;">╳</a>');
            this._wrap.append(this._closeBtn);
            var o = this;
            this._closeBtn.click(function () {
                o.close()
            })
        }
        e.show()
    }

    a.prototype = {
        open: function (e) {
            if (e) {
                var i = e();
                if (i == false) {
                    return
                }
            }
            var n = this;
            var a = window.navigator.userAgent.indexOf("IE6") > 0;
            this._bg_Dialog.show().css({"z-index": this.config.zIndex - 1});
            this._wrap.show().css({
                top: t(window).height() / 2 - this._dom.height() / 2 + (a ? t(window).scrollTop() : 0),
                left: t(window).width() / 2 - this._dom.width() / 2 + (a ? t(window).scrollLeft() : 0),
                "z-index": n.config.zIndex
            })
        }, close: function (e) {
            if (e) {
                var t = e();
                if (t == false) {
                    return
                }
            }
            this._bg_Dialog.hide();
            if (this.config.isDestroy) {
                this._wrap.remove()
            } else {
                this._wrap.hide()
            }
        }
    };
    e.Dialog = a
})(g);
(function (e) {
    var t = jQuery;
    var i;
    var n;
    var a;
    var o;

    function r(e, s) {
        (function () {
            i = t('<div class="addCart-box">' + '<div class="addCart-loading">正在添加商品到购物车...</div>' + '<div class="addCart-state-success dn">' + '<span class="addCart-state-icon"></span>' + '<h5 class="addCart-state">添加成功</h5>' + '<p class="addCart-info">购物车共有<b class="totalQuantity highlight">5</b>件商品，商品总价：<b class="highlight totalAmount">¥3122.00</b></p>' + '<div class="addCart-btn">' + '<a class="addCart-gotoCart" href="' + g.url.g + '/ec/homeus/cart/cart.jsp">去购物车结算&nbsp;&gt;</a>' + '<a class="addCart-shopping">继续购物</a>' + "</div>" + "</div>" + '<dl class="addCart-bulkData">' + '<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>' + "</dl>" + "</div>");
            t("body").append(i);
            n = new g.Dialog(i);
            i.find(".addCart-shopping").click(function () {
                n.close()
            });
            a = t('<div class="addCart-state-failed">' + '<span class="addCart-state-icon"></span>' + '<p>您购物车中的相同商品购买数量<span class="highlight">不能大于<b>20</b>件</span></p>' + '<p>请您&nbsp;<a href="' + g.url.g + "/ec/homeus/myaccount/customer/customer.jsp" + '" class="link"><b>点击此链接</b></a>&nbsp;联系客服购买！</p>' + "</div>");
            t("body").append(a);
            o = new g.Dialog(a)
        })();
        s = s || {showDialog: true};
        t(".addCart-loading").show();
        t(".addCart-state-success").hide();
        t.ajax({
            type: "get",
            url: r.config.url_addCart,
            data: {
                method: e.method || "homeus.addNormalItemToOrder",
                params: JSON.stringify(t.extend(e, r.config.data))
            },
            dataType: "jsonp"
        }).done(function (e) {
            s.callback && s.callback(e)
        }).done(function (e) {
            if (e.result && e.result.cart) {
                i.find(".addCart-loading").hide();
                i.find(".addCart-state-success").show();
                i.find(".totalQuantity").html(e.result.cart.cartSummary.totalQuantity);
                i.find(".totalAmount").html("¥" + e.result.cart.cartSummary.totalAmount)
            }
        }).done(function (e) {
            if (e.result && e.result.cart) {
                return
            }
            var t = e;
            if (t.error && t.error.data) {
                var i = t.error.data, r = i.code, s = "", l = "件";
                var c = false;
                switch (r) {
                    case"gomeSKU":
                        s = "您购物车中的商品种类";
                        l = "种";
                        break;
                    case"bookSKU":
                        s = "您购物车中的图书种类";
                        l = "种";
                        break;
                    case"bbcSKU":
                        s = "您购物车中的店铺商品种类";
                        l = "种";
                        break;
                    case"gomeQuantity":
                        s = "您购物车中的相同商品购买数量";
                        break;
                    case"bookQuantity":
                        s = "您购物车中的相同图书购买数量";
                        break;
                    case"bbcQuantity":
                        s = "您购物车中的相同店铺商品购买数量";
                        break;
                    case"bbcQuantityForLimitBuy":
                        s = t.error.data.message;
                        break;
                    default:
                        s = "您购物车中的相同商品购买数量";
                        c = true
                }
                if (window.useriderror == true) {
                    a.html("该商品暂无法购买，请您联系客服解决：4008-708-708")
                } else if (i.code == "bbcQuantityForLimitBuy") {
                    _htm = '<div class="errorTxt">' + s + "</div>";
                    _this.dialog({inner: "#dialogEr", cssname: "dialogBox Er", errIco: "warn", errMsg: _htm})
                } else if (l == "件") {
                    a = '<div class="addCart-state-failed">' + '<span class="addCart-state-icon"></span>' + "<p>" + s + '<span class="highlight">不能大于<b>' + i.quantityMax + "</b>件</span></p>" + '<p>请您&nbsp;<a href="' + g.url.g + "/ec/homeus/myaccount/customer/customer.jsp" + '" class="link"><b>点击此链接</b></a>&nbsp;联系客服购买！</p>' + "</div>"
                } else if (l == "种") {
                    a = '<div class="addCart-state-failed">' + '<span class="addCart-state-icon"></span>' + "<p>" + s + "已达上限(" + i.quantityMax + l + ")！</p>" + "</div>"
                }
            } else {
                a.html("添加异常！请重试！")
            }
            n.close();
            o.open()
        });
        n.open();
        setTimeout(function () {
            g.ajax("//bigd.gome.com.cn/gome/dataOrderAssociate", {
                pid: e.productId,
                area: g.cityCode(),
                size: 4,
                imagesize: 80,
                callbackparam: "dataOrderAssociateService",
                callback: "dataOrderAssociateService",
                site: "f"
            }).done(function (e) {
                i.find(".addCart-bulkData").html("").html('<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>' + "");
                var t = "";
                for (var n = 0; n < e.productList.length; n++) {
                    t += '<dd class="bulkData-item">' + '<a href="' + e.productList[n].detailHref + ' title="' + e.productList[n].dispName + '" class="bulkData-pic" target="_blank"><img width="80" height="80" src="' + e.productList[n].imgUrl + '" alt="' + e.productList[n].dispName + '"></a>' + '<a href="' + e.productList[n].detailHref + ' title="' + e.productList[n].dispName + '" class="bulkData-name" target="_blank">' + e.productList[n].dispName + "</a>";
                    "</dd>"
                }
                i.find(".addCart-bulkData").css({visibility: "visible"}).html("").html('<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>' + t)
            })
        })
    }

    e.addCart = r
})(g);
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
var gomeLib = gomeLib || {};
gomeLib.ajax = function (a, e) {
    var s = a.type || "get", i = a.url, o = a.cache || false, t = a.dataType || "jsonp", n = a.jsonpName || "",
        p = a.stringify || false, r = a.d || "";
    if (p) {
        var c = {};
        c.method = r.method;
        c.id = "12";
        c.params = JSON.parse(r.params);
        c = {json: JSON.stringify(c)};
        r = c
    }
    $.ajax({
        type: s, url: i, cache: o, dataType: t, jsonpName: n, jsonpCallback: n, data: r, success: function (a) {
            if (a) {
                e(a)
            }
        }
    })
};
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
/* gmpro-2.0.0/member/4.4.4 gSlider.js Date:2019-07-30 17:42:14 */
!function (a) {
    function b(a, b) {
        this.elements = {
            wrap: a,
            ul: a.children("ul"),
            li: a.children("ul").children("li")
        }, this.len = this.elements.li.length, this.settings = b, this.cache = {allowgSlider: !0}, this.pos = this.index = 0, this.timer = !1, this.init()
    }

    b.prototype = {
        init: function () {
            var a = this;
            a.elements.ul.append(a.elements.ul.html()), a.settings.beforeCallback.call(a), a.setStyle(), a.move(), a.bind(), a.settings.afterCallback.call(a), a.imgLoad()
        }, setStyle: function () {
            var a = this;
            switch (a.settings.type) {
                case"horizontal":
                    a.leftOrTop = "left", a.oneWidth = a.settings.oneWidth ? a.settings.oneWidth : a.elements.li.eq(0).outerWidth(), a.elements.ul.width(a.oneWidth * a.len * 2);
                    break;
                case"vertical":
                    a.leftOrTop = "top", a.oneWidth = a.settings.oneWidth ? a.settings.oneWidth : a.elements.li.eq(0).outerHeight(), a.elements.li.css({
                        "float": "none",
                        display: "block"
                    }), a.elements.ul.height(a.oneWidth * a.len * 2)
            }
            a.wraperSize = a.oneWidth * a.len, a.stepWidth = a.oneWidth * a.settings.stepLen, a.elements.ul.css({position: "relative"})
        }, bind: function () {
            var b = this;
            a(b.settings.btnGo.left).bind("click", function () {
                clearInterval(b.timer), b.index++, b.moving(b.elements.ul[0], -b.stepWidth * b.index, function () {
                    b.move()
                })
            }), a(b.settings.btnGo.right).bind("click", function () {
                clearInterval(b.timer), b.index--, b.index < 0 && (-1 === b.index && (b.pos = -b.stepWidth * b.len), b.index = b.len + b.index), b.moving(b.elements.ul[0], -b.stepWidth * b.index, function () {
                    b.move()
                })
            })
        }, move: function () {
            var a = this;
            a.settings.isAuto && (a.timer = setInterval(function () {
                a.index++, a.moving(a.elements.ul[0], -a.stepWidth * a.index)
            }, a.settings.speed))
        }, moving: function (a, b, c) {
            var d = this;
            d.imgLoad(), c = c || function () {
            }, clearInterval(a.tLimer), a.tLimer = setInterval(function () {
                var e = (b - d.pos) / 6;
                e = e > 0 ? Math.ceil(e) : Math.floor(e), d.pos == b && (clearInterval(a.tLimer), c()), d.pos += e, a.style[d.leftOrTop] = d.pos % d.wraperSize + "px"
            }, 30)
        }, imgLoad: function () {
            var b = this;
            if (!b.settings.isImgLoad) return !1;
            Math.abs(b.index % b.len) * b.settings.showNum;
            liNode = b.elements.ul.children().slice(b.index, b.len), liNode.each(function () {
                var c = a(this).find("img");
                c.attr(b.settings.dataOriginal) && c.attr("src", c.attr(b.settings.dataOriginal)).removeAttr(b.settings.dataOriginal)
            })
        }
    }, a.fn.gSlider = function (c) {
        c = a.extend({}, a.fn.gSlider.defaults, c), this.each(function () {
            new b(a(this), c)
        })
    }, a.fn.gSlider.defaults = {
        oneWidth: null,
        isAuto: !0,
        isImgLoad: !1,
        dataOriginal: "data-original",
        speed: 3e3,
        direction: "forward",
        duration: 500,
        showNum: 1,
        stepLen: 1,
        type: "horizontal",
        btnGo: {left: null, right: null},
        beforeCallback: function () {
        },
        afterCallback: function () {
        }
    }
}(jQuery);
var uc_public = function () {
    var dynSite = window.dynSite || window.location.host, contextPath = contextPath || "/ec/homeus",
        _contextPath = dynSite + contextPath, URL = _contextPath + "/myaccount/dispatcher/myUser.jsp";
        var _JSON = {
        stringify: function (a) {
            var b;
            try {
                b = JSON.stringify(a)
            } catch (c) {
                b = this.toJSONString(a)
            }
            return b
        }, evalJSON: function (strJson) {
            return eval("(" + strJson + ")")
        }, toJSONString: function (a) {
            var b = typeof a;
            switch ("object" == b && (b = Array == a.constructor ? "array" : RegExp == a.constructor ? "regexp" : "object"), b) {
                case"undefined":
                case"unknown":
                    return;
                case"function":
                case"boolean":
                case"regexp":
                    return a.toString();
                case"number":
                    return isFinite(a) ? a.toString() : "null";
                case"string":
                    return '"' + a.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function () {
                        var a = arguments[0];
                        return "\n" == a ? "\\n" : "\r" == a ? "\\r" : "	" == a ? "\\t" : ""
                    }) + '"';
                case"object":
                    if (null === a) return "null";
                    var c = [];
                    for (var d in a) {
                        var e = this.toJSONString(a[d]);
                        void 0 !== e && c.push(this.toJSONString(d) + ":" + e)
                    }
                    return "{" + c.join(",") + "}";
                case"array":
                    var c = [];
                    for (var f = 0; f < a.length; f++) {
                        var e = this.toJSONString(a[f]);
                        void 0 !== e && c.push(e)
                    }
                    return "[" + c.join(",") + "]"
            }
        }
    };
    this.is1000 = window.screen.width <= 1024, this.addClass990 = function () {
        var b = window.screen.width <= 1024;
        return b ? $("body").addClass("w1000") : $("body").removeClass("w1000")
    }, this["interface"] = function (a) {
        var b = a.ajaxURL || URL, c = a.ajaxTYPE || "post", d = _JSON || window.JSON, e = a.callback || "myUse",
            f = a.myCallback || "myUser", g = a.async || !0, h = a.dataTYPE || "jsonp", i = a.jsonNAME || "myUser",
            j = /personal|profileHome/.test(window.location.href) ? "" : "?timer=" + (new Date).getTime(), k = a.param;
        "json" === h && (k = d.stringify(a.param)), $.ajax({
            type: c,
            url: b + j,
            data: k,
            timeOut: 5e3,
            dataType: h,
            contentType: "application/json",
            jsonpName: i,
            async: g,
            success: function (b) {
                if (!b) return void(f && e && e(b));
                if (b.error) {
                    var c = b.error.errorCode || b.error.code, d = b.error.errorMsg || b.error.message;
                    return void(f || a.ajaxURL ? e && e(b) : $.commonPop({
                        message: d, callback: function () {
                            "confirmOrderButton" == a.param.method && ($(".common-pop .custom p").css({padding: "0 0 5px 0"}), $(".common-pop .popup").css({
                                width: "auto",
                                height: "auto",
                                padding: "20px"
                            }))
                        }, confirmFunc: function () {
                            if (-4e4 == c || "\u8ba2\u5355\u4e0d\u5c5e\u4e8e\u5f53\u524d\u7528\u6237" == d) {
                                var a = encodeURIComponent(window.location.href);
                            }
                        }
                    }))
                }
                f || a.ajaxURL ? e && e(b) : e && e(b.result)
            },
            error: function (b, c) {
                return void((!/http:/gim.test(window.location.href) || b.status >= 500) && e && e(UCTestData.result))
            }
        })
    }, this.renderer = function (a, b, c) {
        var d = template.compile(a), b = b || {};
        return dataRenderedHtml = d(b), c && c.html(dataRenderedHtml), $.each(arguments, function (a, b) {
            b instanceof Function && b()
        }), dataRenderedHtml
    }, this.exporter = {}, this.destory = function (a) {
        var b = ["click", "mouseover", "mouseout", "mousedown", "hover"], c = ["unbind", "die"];
        return $.each(b, function (b, d) {
            $.each(c, function (b, c) {
                a[c](d)
            })
        }), a
    }
};
var public_Object = new uc_public;
public_Object.addClass990();

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
/* gmpro-2.0.0/member/4.4.4 pager.js Date:2019-07-30 17:42:14 */
!function (a) {
    var b = {
        pre: "\u4e0a\u4e00\u9875", next: "\u4e0b\u4e00\u9875", nav: function (a, b) {
            var c = "";
            if (1 >= b || a > b) c = this.pager(1, 1); else {
                if (c += 1 == a ? this.showPre(0) : this.showPre(1, a), b > 6) {
                    var d = 1;
                    if (a >= 5 && b >= a) c += 1 == a ? this.numStatusHTML(0, 1) : this.numStatusHTML(1, 1); else for (var e = 1; 4 > e; e++) c += a == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                    if (c += a >= 5 ? "<span class='placeholder'></span>" : "", d = a - 2, d >= 3 && b - 2 > d && (c += a == d ? this.numStatusHTML(0, d) : this.numStatusHTML(1, d)), d = a - 1, d > 3 && b - 2 > d && (c += a == d ? this.numStatusHTML(0, d) : this.numStatusHTML(1, d)), d = a, d > 3 && b - 2 > d && (c += a == d ? this.numStatusHTML(0, d) : this.numStatusHTML(1, d)), d = a + 1, d > 3 && b - 2 > d && (c += a == d ? this.numStatusHTML(0, d) : this.numStatusHTML(1, d)), d = a + 2, d > 3 && b - 2 > d && (c += a == d ? this.numStatusHTML(0, d) : this.numStatusHTML(1, d)), c += b - 4 >= a ? "<span class='placeholder'></span>" : "", b - 4 >= a) c += a == b ? this.numStatusHTML(0, b) : this.numStatusHTML(1, b); else for (var e = b - 2; b >= e; e++) c += a == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e)
                } else for (var e = 1; b >= e; e++) c += a == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                c += a == b ? this.showNext(0) : this.showNext(1, a)
            }
            return c
        }, pager: function (a, b) {
            var c = "";
            return 1 >= b && (this.p = a, this.pn = b, c = this.showPre(0) + this.numStatusHTML(0, a) + this.showNext(0)), c
        }, go: function (a, b) {
            var c = this.nav(a, b) + this.btnHTML(a, b);
            return c
        }, numStatusHTML: function (a, b) {
            return 0 == a ? "<span class='cur'>" + b + "</span>" : "<a href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + b + ");return false;'>" + b + "</a>"
        }, showPre: function (a, b) {
            var c = "<a class='prev disable' href='javascript:void(0);'>&nbsp;" + this.pre + "<s class='icon-prev'></s><i></i></a>";
            var d = "<a class='prev' href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + (b - 1) + ");return false;'>&nbsp;" + this.pre + "<s class='icon-prev'></s><i></i></a>";
            return 0 == a ? c : d
        }, showNext: function (a, b) {
            var c = "<a class='next disable' href='javascript:void(0);'>" + this.next + "<s class='icon-next'></s><i></i></a>";
            var d = "<a class='next' href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + (b + 1) + ");return false;'>" + this.next + "<s class='icon-next'></s><i></i></a>";
            return 0 == a ? c : d
        }, btnHTML: function (a, b) {
            var c = "<label for='pagenum' class='txt-wrap'>\u5230<input type='text' id='pNum' class='txt' bNum='" + b + "' value='" + a + "'>\u9875</label><a href='javascript:void(0)' zdx='nBtn' class='btn'>\u786e\u5b9a</a>";
            return c
        }
    };
    a.fn.extend({
        gPager: function (a) {
            this.ucPager(a)
        }, ucPager: function (c) {
            var d = a.extend({
                pageClass: "pager",
                currentPage: 1,
                totalPage: 0,
                pageSize: 15,
                clickCallback: function () {
                }
            }, c);
            return this.each(function () {
                var c = a(this);
                c.hasClass(d.pageClass) || c.addClass(d.pageClass);
                var e = function () {
                    d.clickCallback(d.currentPage)
                };
                c.html(b.go(d.currentPage, d.totalPage)), window.doPageNumSearch = function (a) {
                    d.currentPage = a.toString(), e()
                }, window.doNextPageNum = function () {
                    d.currentPage == d.totalPage ? d.currentPage-- : d.currentPage++, doPageNumSearch(d.currentPage)
                };
                var f = a("#pNum", c);
                f.on("keyup", function () {
                    var b = a(this).val(), c = /^\d+$/gi, d = /\d+/gi;
                    c.test(b) || a(this).val(b.match(d) ? b.match(d)[0] : "")
                }), a(".btn", c).bind("click", function () {
                    var b = a.trim(f.val());
                    1 > b ? (f.val(1), d.currentPage = "1") : b > d.totalPage ? (f.val(d.totalPage), d.currentPage = d.totalPage.toString()) : (f.val(b), d.currentPage = b), e()
                })
            })
        }
    })
}(jQuery);
/* gmpro-2.0.0/member/4.4.4 combox.js Date:2019-07-30 17:42:14 */
!function (a) {
    a.fn.extend({
        ucCombox: function (b) {
            var c = a.extend({
                activeClass: "active",
                listActiveClass: "active",
                listView: this.find("ul"),
                textView: this.find("span"),
                eventType: "hover",
                callback: function () {
                },
                changeValFn: function () {
                    var b = c.listView.find("a");
                    b.unbind(), b.bind("click", function () {
                        var b = a(this), d = b.text(), e = b.attr("val") || "";
                        c.textView.attr("val", e).empty().append(d), c.callback && c.callback(), c.listView.hide()
                    })
                }
            }, b);
            return this.each(function () {
                var b = a(this);
                b.width(c.listView.width() - 10), "hover" === c.eventType ? b.hover(function () {
                    b.addClass(c.activeClass), c.listView.show(), c.changeValFn && c.changeValFn()
                }, function () {
                    b.removeClass(c.activeClass), c.listView.hide()
                }) : (b.unbind(), b.bind(c.eventType, function () {
                    var d = a(this);
                    return d.hasClass(c.activeClass) ? void a("body").click() : (d.addClass(c.activeClass), c.listView.show(), c.changeValFn && c.changeValFn(), !1)
                }), c.listView.find("li").hover(function () {
                    a(this).addClass(c.listActiveClass)
                }, function () {
                    a(this).removeClass(c.listActiveClass)
                }), a("body").click(function () {
                    c.listView.hide(), b.removeClass(c.activeClass)
                }))
            })
        }
    })
}(jQuery);
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
/* gmpro-2.0.0/member/4.4.4 ucLeftNavTpl.js Date:2019-07-30 17:42:13 */
/* gmpro-2.0.0/member/4.4.4 ucLeftNavLive.js Date:2019-07-30 17:42:13 */
// $(function () {
//     var
//         h = (f["interface"], f.LTIE9), i = f.ISIE6, k = (f.sideBarList, window.location.href),
//         l = k.substring(k.indexOf("/member/"), k.length), m = l.indexOf("?") > 0 ? l.substring(0, l.indexOf("?")) : l,
//         n = $(".sidenav-ul li"), o = window.location.href;
//     if (ucLeftSideBar_active = {
//             active: function () {
//                 n.each(function () {
//                     var a = $(this).find("a").attr("href"), a = a.substring(a.indexOf("/member/"), a.length),
//                         b = a.indexOf("?") > 0 ? a.substring(0, a.indexOf("?")) : a;
//                     m == b && $(this).addClass("active")
//                 })
//             }, doFn: function () {
//                 $(n).removeClass("active"), ucLeftSideBar_active.active(), $(n).hover(function () {
//                     $(n).removeClass("active"), $(this).addClass("active")
//                 }, function () {
//                     $(this).removeClass("active"), ucLeftSideBar_active.active()
//                 })
//             }
//         }, interaction = function () {
//             var d, a = /profileHome/.test(window.location.href), b = $(".sidenav-ul>li");
//             !a && b.eq(d).addClass("active"), !a && $(".side-mygome a").css({color: "#5e5e5e"}), !a && i && $(".cont-r").css({width: "980px"}), !a && $(".gomeNav li").eq(0).find("a").removeClass("current"), $(".cont-top-headphoto").css("z-index", 10), $(".cont-top-headphoto").hover(function () {
//                 var b = $(this).find("a");
//                 h ? b.css({filter: "alpha(opacity=60)", background: "#000"}) : b.animate({opacity: 1})
//             }, function () {
//                 var b = $(this).find("a");
//                 b.animate({opacity: 0}), h && b.css({background: "none"})
//             }), ucLeftSideBar_active.doFn()
//         }, removeCookieFunc = function () {
//             $.removeCookie("combinAccount"), document.cookie.replace(/combinAccount=true;/gim, "")
//         }, !/profileHome/.test(o)) {
//
//         {
//             $.exporters.headerImgUrl || window.sessionStorage && window.sessionStorage.headerImgUrl || window.localStorage && window.localStorage.headerImgUrl || $.cookie && $.cookie("headerImgUrl") || "//img.gomein.net.cn/images/grey.gif"
//         }
//     }
//     setTimeout(function () {
//         interaction()
//     }, 500), $(".gome-link-logout").live("click", removeCookieFunc), $(window).on("webapp:page:closing", removeCookieFunc)
// });
/* gmpro-2.0.0/member/4.4.4 hwgDialog.js Date:2019-07-30 17:42:14 */
!function (a) {
    a.fn.extend({
        style: ".information{width: 522px; height: 212px;background: #fff; box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.15);position:absolute;}            .information .informationSign{padding: 20px 20px 30px 20px;color:#a8a8a8;font-size:12px;}            .information .form_list{margin-left:140px;}            .information li{margin-bottom: 16px;position:relative;}            .information label{float:left;width:60px;margin-top:6px;}            .information input{width:145px;height:22px;line-height:22px;border:1px solid #cccccc;padding: 2px;color:#a5a5a5;}            .information input.error{border-color: #c00;}            .information .form_error{display: none;color: #c00;}            .information .conmmit{margin-left:199px;margin-top:20px;}            .information .conmmit button{height:26px;border:1px solid #dddddd;cursor:pointer;background:#cc0000;color:#fff;}            .information .conmmit .cancelBtn{background:#f8f8f8;color:#333;}",
        tpl: '<div class="information" id="licensePop">                <span class="closePop"><a href="javascript:void(0)" class="closeBtn"></a></span>                <p class="informationSign" style="padding:12px 20px;">\u8bf7\u586b\u5199\u6b63\u786e\u7684\u6536\u8d27\u4eba\u8eab\u4efd\u4fe1\u606f\uff0c\u5e76\u5c3d\u91cf\u4fdd\u8bc1\u652f\u4ed8\u4eba\u4e0e\u6536\u8d27\u4eba\u8eab\u4efd\u4fe1\u606f\u4e00\u81f4\uff0c<br><br>\u6211\u4eec\u5c06\u5411\u6d77\u5173\u8fdb\u884c\u7533\u62a5\uff0c\u5982\u4e0d\u4e00\u81f4\u53ef\u80fd\u5bfc\u81f4\u901a\u5173\u5931\u8d25\u3002\u60a8\u7684\u4fe1\u606f\u5c06\u88ab\u59a5\u5584\u4fdd\u7ba1\u548c\u4f7f\u7528\u3002</p>                <ul class="form_list">                      <li>                        <label>\u59d3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\u540d:</label>                        <input type="text" id="name" value="<%=idCardRealName||"\u8bf7\u586b\u5199\u771f\u5b9e\u59d3\u540d"%>" />                        <span class="form_error"></span>                      </li>                      <li>                          <label>\u8eab\u4efd\u8bc1\u53f7:</label>                          <input type="text" id="card" value="<%=idCardNumber||"\u8bf7\u586b\u5199\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7"%>" />                          <span class="form_error">\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7</span>                      </li>                </ul>                <div class="conmmit">                        <button class="saveBtn">\u786e\u8ba4</button>                        <button class="cancelBtn">\u53d6\u6d88</button>                </div>            </div>',
        tplToString: function (a, b) {
            var c = template.compile(this.tpl), b = b || {};
            return c(b)
        },
        loadUserInfo: function (b, c, d) {
            var e = this;

        },
        saveUserInfo: function (b) {
            var c = {orderId: b[0], idCardRealName: b[1], idCardNumber: b[2]};

        },
        hwgDialog: function (b) {
            var c = this;
            var d = a.extend({isLoadUserInfo: !1, orderid: "", payLink: ""}, b);

            function e(a, b) {
                if (!document.getElementById(b)) {
                    var c = document.createElement("style");
                    return c.id = b, (document.getElementsByTagName("head")[0] || document.body).appendChild(c), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a)), c.sheet
                }
            }

            return e(c.style, "hwgStyle"), this.each(function () {
                var b = new gomeUi.PopBox({id: "licensePop", closeStr: ".closeBtn", html: c.tplToString(this.tpl, {})});
                b.showBox();
                var e = a(b.self);
                d.isLoadUserInfo === !0 ? c.loadUserInfo(d, e, b) : (e.find(".saveBtn").click(function () {
                    var a = e.find("input");
                    a.blur(), 0 == a.filter(".error").length && c.saveUserInfo([d.orderid, a.eq(0).val(), a.eq(1).val(), d.payLink])
                }), e.find(".cancelBtn").click(function () {
                    return b.destroy(), !1
                }), c.validateform(e))
            })
        },
        validateform: function (b) {
            b.find("#name").blur(function () {
                var b = this.value.replace(/\s/g, ""), c = b.length;
                return 1 > c || c > 30 ? (a(this).css("color", "#a5a5a5").addClass("error").siblings(".form_error").html("\u957f\u5ea6\u5e94\u57281-30\u4e4b\u95f4").show(), !1) : /^[\u4e00-\u9fa5]+$/.test(b) === !1 ? (a(this).addClass("error").siblings(".form_error").html("\u8bf7\u4e0e\u8eab\u4efd\u8bc1\u4fe1\u606f\u4fdd\u6301\u4e00\u81f4").show(), !1) : void a(this).removeClass("error").siblings(".form_error").hide()
            }).focus(function () {
                var b = this.value.replace(/\s/g, "");
                "\u8bf7\u586b\u5199\u771f\u5b9e\u59d3\u540d" === b && (this.value = ""), a(this).css("color", "#333").removeClass("error").siblings(".form_error").hide()
            }), b.find("#card").blur(function () {
                var b = this.value.replace(/\s/g, ""), c = b.length;
                return 1 > c ? (a(this).css("color", "#a5a5a5").addClass("error").siblings(".form_error").show(), !1) : /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(b) === !1 ? (a(this).addClass("error").siblings(".form_error").show(), !1) : void a(this).removeClass("error").siblings(".form_error").hide()
            }).focus(function () {
                var b = this.value.replace(/\s/g, "");
                "\u8bf7\u586b\u5199\u6b63\u786e\u7684\u8eab\u4efd\u8bc1\u53f7" === b && (this.value = ""), a(this).css("color", "#333").removeClass("error").siblings(".form_error").hide()
            })
        }
    })
}(jQuery);
/* gmpro-2.0.0/member/4.4.4 myOrdersTpl.js Date:2019-07-30 17:42:12 */
/* gmpro-2.0.0/member/4.4.4 storeOrderTpl.js Date:2019-07-30 17:42:12 */
!function () {
    if (!this.gomeTemplate) {
        function a(a, b) {
            return (/string|function/.test(typeof b) ? m : l)(a, b)
        }

        var b = a.cache = {};

        function c(a, b) {
            return "string" != typeof a && (b = typeof a, "number" === b ? a += "" : a = "function" === b ? c(a.call(a)) : ""), a
        }

        var d = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"};

        function e(a) {
            return d[a]
        }

        function f(a) {
            return c(a).replace(/&(?![\w#]+;)|[<>"']/g, e)
        }

        var g = Array.isArray || function (a) {
            return "[object Array]" === {}.toString.call(a)
        };

        function h(a, b) {
            if (g(a)) for (var c = 0, d = a.length; d > c; c++) b.call(a, a[c], c, a); else for (c in a) b.call(a, a[c], c)
        }

        function i(a, b) {
            var c = /(\/)[^\/]+\1\.\.\1/;
            var d = ("./" + a).replace(/[^\/]+$/, "");
            var e = d + b;
            for (e = e.replace(/\/\.\//g, "/"); e.match(c);) e = e.replace(c, "/");
            return e
        }

        var j = a.utils = {
            $helpers: {}, $include: function (a, b, c) {
                return a = i(c, a), l(a, b)
            }, $string: c, $escape: f, $each: h
        };
        var k = a.helpers = j.$helpers;

        function l(b, c) {
            var d = a.get(b) || n({filename: b, name: "Render Error", message: "Template not found"});
            return c ? d(c) : d
        }

        function m(a, c) {
            if ("string" == typeof c) {
                var d = c;
                c = function () {
                    return new String(d)
                }
            }
            var e = b[a] = function (b) {
                try {
                    return new c(b, a) + ""
                } catch (d) {
                    return n(d)()
                }
            };
            return e.prototype = c.prototype = j, e.toString = function () {
                return c + ""
            }, e
        }

        function n(a) {
            var b = "{Template Error}";
            var c = a.stack || "";
            if (c) c = c.split("\n").slice(0, 2).join("\n"); else for (var d in a) c += "<" + d + ">\n" + a[d] + "\n\n";
            return function () {
                return "object" == typeof console && console.error(b + "\n\n" + c), b
            }
        }

        a.get = function (a) {
            return b[a.replace(/^\.\//, "")]
        }, a.helper = function (a, b) {
            k[a] = b
        }, this.gomeTemplate = a
    }
    var o = a = this.gomeTemplate;
    "function" == typeof define ? define(function () {
        return a
    }) : "undefined" != typeof exports && (module.exports = a), o("storeOrder", function (a) {
        "use strict";
        var c = this, e = (c.$helpers, a.orderList), f = c.$each, i = (a.list, a.$index, c.$escape),
            k = (a.itemList, "");
        return k += " ", e && e.length > 0 ? (k += " ", f(e, function (a) {
            k += ' <table class="order-list-cont"> <tbody> <tr class="item-info"> <td style="width:40%;padding-left:10px;"class="orderTd1_', k += i(a.orderId), k += '"> <input type="checkbox" class="orderNumcheck" ', "N" == a.isCanCombined && (k += " disabled "), k += ' id="combine_btn_', k += i(a.orderId), k += '"> <span class="ico-qiang" ', "" == a.orderTypeShort && (k += ' style="border:none; background:none;"'), k += ' orderType="', k += i(a.ordertype), k += '" title="', k += i(a.orderTypeTitle), k += '"> ', k += i(a.orderTypeShort), k += ' </span> <span class="order-time"> ', k += i(a.submitTime), k += ' </span> <span class="order-number">\u8ba2\u5355\u7f16\u53f7\uff1a <a target="_blank" href="storeOrderDetails/', k += i(a.orderId), k += "/", k += i(a.sgId), k += '"> ', k += i(a.orderId), k += '</a> </span> </td> <td style=" width:20%; text-align:right;padding-right:35px;"> <span class="gome-online">', k += i(a.storeName), k += '</span> </td> <td style="width:10%;"></td> <td style="width:10%;"></td> <td style="width:10%;"></td> <td style="width:10%;padding-left:15px;" class="orderIcon_', k += i(a.orderId), k += '"> <div class="order-del-gift"> <span class="order-tbody-giftBox dn" orderId="', k += i(a.orderId), k += '">\u793c\u7269\u76d2\u5b50</span> <span class="order-delete-btn dn" orderId="', k += i(a.orderId), k += '">\u5220\u9664</span> </div> </td> </tr> </tbody> <tbody class="list-row"> <tr> <td colspan="2" style="width:60%;border-right:1px solid #e6e6e6;"> <div class="no-isSeparate" style="width:100%;" id="orderId_', k += i(a.orderId), k += '"> <table style="width:100%;"> ', f(a.itemList, function (a) {
                k += ' <tr class="tr-listProInfo"> <td class="pd-lft-10 pd-bottom-10"style="width:40%; border-right:none;"> <div class="marg-top-10 order-list-proImg" pid="', k += i(a.productId), k += '" sid="', k += i(a.skuId), k += '"> <a ', a.itemUrl && (k += 'href="', k += i(a.itemUrl), k += '" target="_blank" '), k += '> <img src="', a.imageUrl ? (k += " ", k += i(a.imageUrl), k += " ") : k += " static/picture/grey.gif ", k += '" onerror="this.src=\'static/picture/grey.gif\';" style="width:50px;height:50px;"> </a> </div> <div class="pd-lft-10 order-list-proName"> <a class="order-list-proName-font" style="margin-top:10px;" ', a.itemUrl && (k += 'href="', k += i(a.itemUrl), k += '" target="_blank" '), k += 'style="display:block;">', k += i(a.itemName), k += "</a> ", "Y" == a.isGift && (k += ' <div style="text-align:left;color:#999;font-weight:bold;">\u8d60\u54c1</div> '), k += ' </div> </td> <td class="pd-lft-10" style="border-right:none;width:20%;"> <div class="order-list-num"style="height:50px;margin-top:0;line-height:30px;">x<span>', k += i(a.quantity), k += "</span></div> </td> </tr> "
            }), k += ' </table> </div> </td> <td style="width:10%;text-align:center;padding:0 10px;"> <p class="payAmount" style="margin-top:10px;"> <em class="dollar-sign">\uffe5</em> <span style="font-family:Arial;">', k += i(a.payAmount), k += '</span> </p> <p class="pay-method" style="margin:10px 0;">', k += i(a.payType), k += '</p> </td> <td style="width:10%;text-align:center;" class="" > <p class="status">', k += i(a.orderStatus), k += '</p> <p class="car-logistics"> <a class="order-list-btn02 trace_store" onclick="return false;" href="javascript:;" orderId="', k += i(a.orderId), k += '" shipId="', k += i(a.sgId), k += '">\u8ddf\u8e2a<i></i></a> </p> <p class="pd-top-10"> <a class="order-list-btn02 v-o" target="_blank" href="storeOrderDetails/', k += i(a.orderId), k += "/", k += i(a.sgId), k += '" title="\u67e5\u770b\u8ba2\u5355" style="color:#006699;">\u67e5\u770b\u8ba2\u5355</a> </p> </td> <td style="width:10%;color:#888;padding-left:15px;" class="name_', k += i(a.orderId), k += '"> <div class="customer-receiver clearfix" orderid="', k += i(a.orderId), k += '" shipid="', k += i(a.sgId), k += '"> <i class="order-list-consignee"></i> <span class="receive-name">', k += i(a.consignee), k += '</span> </div> </td> <td style="width:10%;"> ', "Y" == a.isShowPayButton && (k += ' <div class="cut-down" style="width:100px;"> <span class="time green-time" style="margin-right:0; margin-left:11px; font-size:12px;vertical-align:middle;" time="', k += i(a.payRemainTime), k += '"></span> <a href="javascript:;" class="time-ico g-time-ico" expireTime="', k += i(a.payExpiryTime), k += '"></a> </div> <div class=""> <a class="pay-btn" href="', k += i(a.payUrl), k += '" title="', k += i(a.payButtonName), k += '"> ', k += i(a.payButtonName), k += " </a> </div> "), k += ' <div class="button_', k += i(a.orderId), k += '" style="padding-bottom:10px;" orderId="', k += i(a.orderId), k += '"></div> </td> </tr> </tbody> </table> '
        }), k += "  ") : k += ' <table style="width:100%;"> <tr> <td class="no-order" colspan="6"> <div class="no-order-til clearfix"><i></i> <span style="float:left;"> <p class="no-order-words">\u60a8\u8fd8\u6ca1\u6709\u95e8\u5e97\u8ba2\u5355\u54e6~<br>\u7ed9\u81ea\u5df1\u5b9a\u4e2a\u5c0f\u76ee\u6807\uff0c\u5148\u4e0b\u4e00\u5355\uff01</p> </span> </div> <p class="no-order-btn"> <a class="order-show-all">\u67e5\u770b\u5b9e\u7269\u8ba2\u5355</a> <a href="//www.gome.com.cn" target="_blank">\u53bb\u9996\u9875\u901b\u901b</a> </p> </td> </tr> </table> ', new String(k)
    })
}();
/* gmpro-2.0.0/member/4.4.4 myOrdersLive.js Date:2019-07-30 17:42:13 */
/* gmpro-2.0.0/member/4.4.4 storeOrderLive.js Date:2019-07-30 17:42:12 */
$(function () {
    var a = {
        ajaxError: function (a, b) {
            var c = '<div class="errorBoxlh dn" style="position:fixed; padding:15px; z-index:16; left:40%; top:30%; text-align:center; width:200px; background:#fff;"><div class="errorCont" style="text-align:center;"><h5 class="errorMessage" style="font:500 12px/12px simsun; color:#5e5e5e; padding-bottom:15px;line-height:20px;"></h5><a class="errorBtn" style="display:inline-block; background:#D00;color:#fff;padding:0 10px; height:28px; font:700 12px/28px simsun;">\u786e\u5b9a</a></div></div><div class="mask_lh dn" style="position:absolute; top:0; z-index:15; width:100%; background:#000; opacity:0.15;filter: alpha(opacity=15);"></div>';
            var d = $("body").height();
            $("body").append(c), $(".errorMessage").text(a), $(".errorBoxlh").show(), $(".mask_lh").css("height", d).show(), $(".errorBtn").click(function () {
                $(".errorBoxlh").remove(), $(".mask_lh").remove(), b && b()
            })
        }, getStoreOrder_list: function (b) {

        }, getStore_logistics: function () {

        }
    };
    $("#storeOrder_btn").on("click", function () {
        $(".storeOrder_state").show(), $("#all-status").hide(), $(".order-list-header").hide(), $("#all_orders").show(), $(".pager").hide(), a.getStoreOrder_list(1)
    })
});
