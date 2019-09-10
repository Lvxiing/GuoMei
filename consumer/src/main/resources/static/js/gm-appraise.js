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
    }

    function v(t) {

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
})(g);
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

};
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
            var opts = "";
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
/* gmpro-2.0.0/member/4.4.4 search.js Date:2019-07-30 17:42:14 */
!function (a) {
    a.fn.autopoint = function (b) {
        defaults = {
            url: b.url,
            environment: b.environment,
            targetType: b.targetType,
            contentLabels: b.contentLabels,
            language: b.language,
            keyLeft: 37,
            keyUp: 38,
            keyRight: 39,
            keyDown: 40,
            keyEnter: 13,
            listHoverCSS: "hover",
            topoffset: b.topoffset || 10
        };
        var b = a.extend(defaults, b);
        var c = a("#searchTips");
        var d = a("#searchTipsList");
        var e = !1;
        c.hover(function () {
            e = !0
        }, function () {
            e = !1
        });
        var f = function () {
            this.capacity = 3, this.list = new Array, this.push = function (a, b) {
                var c = {key: a, value: b};
                null != c && (this.list.length >= this.capacity && this.list.removeCache(0), this.list.push(c))
            }, this.remove = function () {
                null != this.list && this.list.removeCache(0)
            }, this.clear = function () {
                this.list = new Array
            }, this.get = function (a) {
                if (null != a) for (var b = 0; b < this.list.length; b++) {
                    var c = this.list[b];
                    if (a == c.key) return c
                }
            }
        };
        Array.prototype.removeCache = function (a) {
            if (isNaN(a) || a > this.length) return !1;
            for (var b = 0, c = 0; b < this.length; b++) this[b] != this[a] && (this[c++] = this[b]);
            this.length -= 1
        };
        var g = new f;
        return this.each(function () {
            var f = a(this);
            var h = -1;
            var i = !1;
            a(this).bind("keydown", function (e) {
                if ("none" != c.css("display")) {
                    {
                        d.find("." + b.listHoverCSS)
                    }
                    if (e.keyCode == b.keyDown) {
                        var g = null;
                        return h++, h == d.find("li").length && (h = 0), g = d.find("li").eq(h), null != g && (unHoverAll(), g.mouseover(), i = !1, a(this).val(getPointWord(g))), !1
                    }
                    if (e.keyCode == b.keyUp) {
                        var j = null;
                        return -1 != h && h--, -1 == h && (h = d.find("li").length - 1), j = d.find("li").eq(h), null != j && (unHoverAll(), j.mouseover(), i = !1, a(this).val(getPointWord(j))), !1
                    }
                    if (e.keyCode == b.keyEnter) {
                        var k = d.find("li").eq(h);
                        var l = getPointWord(k);
                        if (k.hasClass("search-item")) {
                            var m = k.attr("category");
                            var n = staSite + "/search?question=" + encodeURI(l) + "&catId=" + m;
                            return window.location.href = n, !1
                        }
                        return doSearch(), !1
                    }
                }
                a(this).attr("alt", a(this).val()), i = !0
            }).hover(function () {
                e = !0
            }, function () {
                e = !1
            });
            var j = function () {
                if (i) {
                    if ("" == a(this).val()) return d.empty(), void c.hide();
                    if (a(this).val() != a(this).attr("alt")) {
                        k && clearTimeout(k);
                        var e = a(this).val();
                        k = setTimeout(function () {
                            getData(f, e)
                        }, 200)
                    }
                }
            };
            this.oninput = j, this.onpropertychange = j;
            var k = null;
            a("body").mouseover(function () {
                k && clearTimeout(k), k = setTimeout(function () {
                    e && 0 != c.find("." + b.listHoverCSS) || (d.empty(), c.hide())
                }, 150)
            }), handleResponse = function (a, b) {
                return null == b || 0 == b.length ? void c.hide() : (render(a, b), void c.show())
            }, render = function (a, b) {
                d.empty();
                var c = "";
                for (var e = 0; e < b.length; e++) {
                    var f = b[e];
                    c += f.length >= 4 ? '<li class="search-item" category="' + f[3].cat[1] + '" keyword="' + f[0] + '"><span class="fs" style="float:left;">\u5728<b>' + f[3].cat[3] + '</b><i>&gt;</i><a class="akeyword" href="javascript:void(0);">' + f[3].cat[0] + '</a>\u5206\u7c7b\u4e2d\u641c\u7d22</span><span class="fr color-b">\u7ea6' + f[3].cat[2] + "\u6761</span></li>" : '<li><a class="akeyword" href="javascript:void(0);"><span class="fl">' + f[0] + '</span><span class="fr color-b">\u7ea6' + f[1] + "\u6761</span></a></li>"
                }
                jebind(a, c)
            }, jebind = function (e, f) {
                d.append(f), d.find("li.search-item:last").css("border-bottom", "1px solid #EEEEEE"), d.find("li").each(function (f) {
                    a(this).attr("index", f), a(this).unbind("mouseover").mouseover(function () {
                        unHoverAll(), a(this).addClass(b.listHoverCSS), a(this).find("a:first").addClass(b.listHoverCSS), h = a(this).attr("index")
                    }).unbind("click").click(function () {
                        var b = getPointWord(a(this));
                        if (e.val(b), d.empty(), c.hide(), e.focus(), h = -1, a(this).hasClass("search-item")) {
                            var f = a(this).attr("category");
                            var g = staSite + "/search?question=" + encodeURI(b) + "&catId=" + f;
                            return window.location.href = g, !1
                        }
                        doSearch()
                    })
                })
            }, unHoverAll = function () {
                d.find("li").each(function () {
                    a(this).removeClass(b.listHoverCSS), a(this).find("a:first").removeClass(b.listHoverCSS)
                })
            }, getPointWord = function (a) {
                return a.attr("keyword") ? a.attr("keyword") : a.find("span:first").text()
            }, getData = function (c, d) {
                d = d.replace(/[()'";,{}~!@#$%^&*(){}?\|<>.]/g, "");
                var i, e = document.location, f = /\/category\/(.*)?\.html.*$/gi, h = [], j = "";
                for (; h = f.exec(e);) i = h[1];
                i && (j = "&category=" + i);
                var k = b.url + "&module=searchSuggest&query=" + encodeURI(d) + "&jp=true" + j;
                if (g.get(d)) {
                    var l = g.get(d).value;
                    handleResponse(c, l)
                } else a.ajax({
                    type: "get", url: k, dataType: "jsonp", jsonpName: "suggest", success: function (a) {
                        handleResponse(c, a), g.push(d, a)
                    }
                })
            }
        })
    }
}(jQuery);
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
/* gmpro-2.0.0/member/4.4.4 navTab.js Date:2019-07-30 17:42:14 */
!function (a) {
    a.fn.extend({
        tabs: function (a) {
            return this.navTab(a)
        }, navTab: function (b) {
            var c = a.extend({
                reverse: !1, eventType: "click", callback: function () {
                }, currentIndex: 0, currentClass: "cur", tabHeader: "> .tabsHeader", stTabPanel: "> .tabsContent"
            }, b);
            return this.each(function () {
                var b = a(this);
                var e = b.find(c.tabHeader);
                var f = e.find("li");
                var g = c.currentIndex;
                var h = c.currentClass;
                f.hover(function () {
                    f.removeClass(h), a(this).addClass(h)
                }, function () {
                    f.removeClass(h).eq(g).addClass(h)
                }).each(function (e) {
                    a(this).bind(c.eventType, function () {
                        g = e, d(b, g)
                    })
                }), d(b, g)
            });

            function d(b, d) {
                var e = b.add(a("> *", b));
                var f = b.find("ul>li");
                var g = a(c.stTabPanel + " > *", e);
                var h = f.eq(d);
                g.eq(d);
                c.reverse && h.hasClass(c.currentClass) ? (f.removeClass(c.currentClass), g.hide()) : (c.currentIndex = d, f.removeClass(c.currentClass), h.addClass(c.currentClass), c.callback(c.currentIndex, g.hide().eq(c.currentIndex).show(), b))
            }
        }
    })
}(jQuery);
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
/* gmpro-2.0.0/member/4.4.4 ucLeftNavTpl.js Date:2019-07-30 17:42:13 */
/* gmpro-2.0.0/member/4.4.4 ucLeftNavLive.js Date:2019-07-30 17:42:13 */
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
/* gmpro-2.0.0/member/4.4.4 ajaxupload.js Date:2019-07-30 17:42:14 */
!function () {
    function addEvent(a, b, c) {
        if (a.addEventListener) a.addEventListener(b, c, !1); else {
            if (!a.attachEvent) throw new Error("not supported or DOM not loaded");
            a.attachEvent("on" + b, function () {
                c.call(a)
            })
        }
    }

    function addResizeEvent(a) {
        var b;
        addEvent(window, "resize", function () {
            b && clearTimeout(b), b = setTimeout(a, 100)
        })
    }

    if (document.documentElement.getBoundingClientRect) var getOffset = function (a) {
        var b = a.getBoundingClientRect();
        var c = a.ownerDocument;
        var d = c.body;
        var e = c.documentElement;
        var f = e.clientTop || d.clientTop || 0;
        var g = e.clientLeft || d.clientLeft || 0;
        var h = 1;
        if (d.getBoundingClientRect) {
            var i = d.getBoundingClientRect();
            h = (i.right - i.left) / d.clientWidth
        }
        h > 1 && (f = 0, g = 0);
        var j = b.top / h + (window.pageYOffset || e && e.scrollTop / h || d.scrollTop / h) - f,
            k = b.left / h + (window.pageXOffset || e && e.scrollLeft / h || d.scrollLeft / h) - g;
        return {top: j, left: k}
    }; else var getOffset = function (a) {
        var b = 0, c = 0;
        do b += a.offsetTop || 0, c += a.offsetLeft || 0, a = a.offsetParent; while (a);
        return {left: c, top: b}
    };

    function getBox(a) {
        var b, c, d, e;
        var f = getOffset(a);
        return b = f.left, d = f.top, c = b + a.offsetWidth, e = d + a.offsetHeight, {
            left: b,
            right: c,
            top: d,
            bottom: e
        }
    }

    function addStyles(a, b) {
        for (var c in b) b.hasOwnProperty(c) && (a.style[c] = b[c])
    }

    function copyLayout(a, b) {
        var c = getBox(a);
        addStyles(b, {
            position: "absolute",
            left: c.left + "px",
            top: c.top + "px",
            width: a.offsetWidth + "px",
            height: a.offsetHeight + "px"
        })
    }

    var toElement = function () {
        var a = document.createElement("div");
        return function (b) {
            a.innerHTML = b;
            var c = a.firstChild;
            return a.removeChild(c)
        }
    }();
    var getUID = function () {
        var a = 0;
        return function () {
            return "ValumsAjaxUpload" + a++
        }
    }();

    function fileFromPath(a) {
        return a.replace(/.*(\/|\\)/, "")
    }

    function getExt(a) {
        return -1 !== a.indexOf(".") ? a.replace(/.*[.]/, "") : ""
    }

    function hasClass(a, b) {
        var c = new RegExp("\\b" + b + "\\b");
        return c.test(a.className)
    }

    function addClass(a, b) {
        hasClass(a, b) || (a.className += " " + b)
    }

    function removeClass(a, b) {
        var c = new RegExp("\\b" + b + "\\b");
        a.className = a.className.replace(c, "")
    }

    function removeNode(a) {
        a.parentNode.removeChild(a)
    }

    window.AjaxUpload = function (a, b) {
        this._settings = {
            action: "upload.php",
            name: "userfile",
            multiple: !1,
            data: {},
            autoSubmit: !0,
            responseType: !1,
            hoverClass: "hover",
            focusClass: "focus",
            disabledClass: "disabled",
            onChange: function () {
            },
            onSubmit: function () {
            },
            onComplete: function () {
            }
        };
        for (var c in b) b.hasOwnProperty(c) && (this._settings[c] = b[c]);
        if (a.jquery ? a = a[0] : "string" == typeof a && (/^#.*/.test(a) && (a = a.slice(1)), a = document.getElementById(a)), !a || 1 !== a.nodeType) throw new Error("Please make sure that you're passing a valid element");
        "A" == a.nodeName.toUpperCase() && addEvent(a, "click", function (a) {
            a && a.preventDefault ? a.preventDefault() : window.event && (window.event.returnValue = !1)
        }), this._button = a, this._input = null, this._disabled = !1, this.enable(), this._rerouteClicks()
    }, AjaxUpload.prototype = {
        setData: function (a) {
            this._settings.data = a
        }, disable: function () {
            addClass(this._button, this._settings.disabledClass), this._disabled = !0;
            var a = this._button.nodeName.toUpperCase();
            ("INPUT" == a || "BUTTON" == a) && this._button.setAttribute("disabled", "disabled"), this._input && this._input.parentNode && (this._input.parentNode.style.visibility = "hidden")
        }, enable: function () {
            removeClass(this._button, this._settings.disabledClass), this._button.removeAttribute("disabled"), this._disabled = !1
        }, _createInput: function () {
            var a = this;
            var b = document.createElement("input");
            b.setAttribute("type", "file"), b.setAttribute("name", this._settings.name), this._settings.multiple && b.setAttribute("multiple", "multiple"), addStyles(b, {
                position: "absolute",
                right: 0,
                margin: 0,
                padding: 0,
                fontSize: "480px",
                fontFamily: "sans-serif",
                cursor: "pointer"
            });
            var c = document.createElement("div");
            if (addStyles(c, {
                    display: "block",
                    position: "absolute",
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    opacity: 0,
                    direction: "ltr",
                    zIndex: 9999999
                }), "0" !== c.style.opacity) {
                if ("undefined" == typeof c.filters) throw new Error("Opacity not supported by the browser");
                c.style.filter = "alpha(opacity=0)"
            }
            addEvent(b, "change", function () {
                if (b && "" !== b.value) {
                    var c = fileFromPath(b.value);
                    if (!1 === a._settings.onChange.call(a, c, getExt(c))) return void a._clearInput();
                    if (a._settings.autoSubmit) {
                        if (g && "function" == typeof g.login) return void g.login(function () {
                            a.submit()
                        });
                        a.submit()
                    }
                }
            }), addEvent(b, "mouseover", function () {
                addClass(a._button, a._settings.hoverClass)
            }), addEvent(b, "mouseout", function () {
                removeClass(a._button, a._settings.hoverClass), removeClass(a._button, a._settings.focusClass), b.parentNode && (b.parentNode.style.visibility = "hidden")
            }), addEvent(b, "focus", function () {
                addClass(a._button, a._settings.focusClass)
            }), addEvent(b, "blur", function () {
                removeClass(a._button, a._settings.focusClass)
            }), c.appendChild(b), document.body.appendChild(c), this._input = b
        }, _clearInput: function () {
            this._input && (removeNode(this._input.parentNode), this._input = null, this._createInput(), removeClass(this._button, this._settings.hoverClass), removeClass(this._button, this._settings.focusClass))
        }, _rerouteClicks: function () {
            var a = this;
            addEvent(a._button, "mouseover", function () {
                if (!a._disabled) {
                    a._input || a._createInput();
                    var b = a._input.parentNode;
                    copyLayout(a._button, b), b.style.visibility = "visible"
                }
            })
        }, _createIframe: function () {
            var a = getUID();
            var b = toElement('<iframe src="javascript:false;" name="' + a + '" />');
            return b.setAttribute("id", a), b.style.display = "none", document.body.appendChild(b), b
        }, _createForm: function (a) {
            var b = this._settings;
            var c = toElement('<form method="post" enctype="multipart/form-data"></form>');
            c.setAttribute("action", b.action), c.setAttribute("target", a.name), c.style.display = "none", document.body.appendChild(c);
            for (var d in b.data) if (b.data.hasOwnProperty(d)) {
                var e = document.createElement("input");
                e.setAttribute("type", "hidden"), e.setAttribute("name", d), e.setAttribute("value", b.data[d]), c.appendChild(e)
            }
            return c
        }, _getResponse: function (iframe, file) {
            var toDeleteFlag = !1, self = this, settings = this._settings;
            addEvent(iframe, "load", function () {
                if ("javascript:'%3Chtml%3E%3C/html%3E';" == iframe.src || "javascript:'<html></html>';" == iframe.src) return void(toDeleteFlag && setTimeout(function () {
                    removeNode(iframe)
                }, 0));
                var doc = iframe.contentDocument ? iframe.contentDocument : window.frames[iframe.id].document;
                if (!(doc.readyState && "complete" != doc.readyState || doc.body && "false" == doc.body.innerHTML)) {
                    var response;
                    doc.XMLDocument ? response = doc.XMLDocument : doc.body ? (response = doc.body.innerHTML, settings.responseType && "json" == settings.responseType.toLowerCase() && (doc.body.firstChild && "PRE" == doc.body.firstChild.nodeName.toUpperCase() && (doc.normalize(), response = doc.body.firstChild.firstChild.nodeValue), response = response ? eval("(" + response + ")") : {})) : response = doc, settings.onComplete.call(self, file, response), toDeleteFlag = !0, iframe.src = "javascript:'<html></html>';"
                }
            })
        }, submit: function () {
            var a = this, b = this._settings;
            if (this._input && "" !== this._input.value) {
                var c = fileFromPath(this._input.value);
                if (!1 === b.onSubmit.call(this, c, getExt(c))) return void this._clearInput();
                var d = this._createIframe();
                var e = this._createForm(d);
                removeNode(this._input.parentNode), removeClass(a._button, a._settings.hoverClass), removeClass(a._button, a._settings.focusClass), e.appendChild(this._input), e.submit(), removeNode(e), e = null, removeNode(this._input), this._input = null, this._getResponse(d, c), this._createInput()
            }
        }
    }
}();

/* gmpro-2.0.0/member/4.4.4 utf.js Date:2019-07-30 17:42:12 */
function utf16to8(a) {
    var b, c, d, e;
    for (b = "", d = a.length, c = 0; d > c; c++) e = a.charCodeAt(c), e >= 1 && 127 >= e ? b += a.charAt(c) : e > 2047 ? (b += String.fromCharCode(224 | e >> 12 & 15), b += String.fromCharCode(128 | e >> 6 & 63), b += String.fromCharCode(128 | e >> 0 & 63)) : (b += String.fromCharCode(192 | e >> 6 & 31), b += String.fromCharCode(128 | e >> 0 & 63));
    return b
}

function utf8to16(a) {
    var b, c, d, e;
    var f, g;
    for (b = "", d = a.length, c = 0; d > c;) switch (e = a.charCodeAt(c++), e >> 4) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            b += a.charAt(c - 1);
            break;
        case 12:
        case 13:
            f = a.charCodeAt(c++), b += String.fromCharCode((31 & e) << 6 | 63 & f);
            break;
        case 14:
            f = a.charCodeAt(c++), g = a.charCodeAt(c++), b += String.fromCharCode((15 & e) << 12 | (63 & f) << 6 | (63 & g) << 0)
    }
    return b
}

/* gmpro-2.0.0/member/4.4.4 jquery.qrcode.js Date:2019-07-30 17:42:13 */
function QR8bitByte(a) {
    this.mode = QRMode.MODE_8BIT_BYTE, this.data = a
}

function QRCode(a, b) {
    this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
}

function QRPolynomial(a, b) {
    var c, d;
    if (void 0 == a.length) throw new Error(a.length + "/" + b);
    for (c = 0; c < a.length && 0 == a[c];) c++;
    for (this.num = new Array(a.length - c + b), d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
}

function QRRSBlock(a, b) {
    this.totalCount = a, this.dataCount = b
}

function QRBitBuffer() {
    this.buffer = new Array, this.length = 0
}

var QRMode, QRErrorCorrectLevel, QRMaskPattern, QRUtil, QRMath, i;
for (function (a) {
    a.fn.qrcode = function (b) {
        var c, d;
        return "string" == typeof b && (b = {text: b}), b = a.extend({}, {
            render: "canvas",
            width: 256,
            height: 256,
            imgWidth: b.width / 4.7,
            imgHeight: b.height / 4,
            typeNumber: -1,
            correctLevel: QRErrorCorrectLevel.H,
            background: "#ffffff",
            foreground: "#000000"
        }, b), c = function () {
            var a, c, d, e, f, g, h, i, j, k = new QRCode(b.typeNumber, b.correctLevel);
            for (k.addData(utf16to8(b.text)), k.make(), a = document.createElement("canvas"), a.width = b.width, a.height = b.height, c = a.getContext("2d"), b.src && (d = new Image, d.src = b.src, d.onload = function () {
                c.drawImage(d, (b.width - b.imgWidth) / 2, (b.height - b.imgHeight) / 2, b.imgWidth, b.imgHeight)
            }), e = b.width / k.getModuleCount(), f = b.height / k.getModuleCount(), g = 0; g < k.getModuleCount(); g++) for (h = 0; h < k.getModuleCount(); h++) c.fillStyle = k.isDark(g, h) ? b.foreground : b.background, i = Math.ceil((h + 1) * e) - Math.floor(h * e), j = Math.ceil((g + 1) * e) - Math.floor(g * e), c.fillRect(Math.round(h * e), Math.round(g * f), i, j);
            return a
        }, d = function () {
            var c, d, e, f, g, h, i = new QRCode(b.typeNumber, b.correctLevel);
            for (i.addData(utf16to8(b.text)), i.make(), c = a("<table></table>").css("width", b.width + "px").css("height", b.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", b.background), d = b.width / i.getModuleCount(), e = b.height / i.getModuleCount(), f = 0; f < i.getModuleCount(); f++) for (g = a("<tr></tr>").css("height", e + "px").appendTo(c), h = 0; h < i.getModuleCount(); h++) a("<td></td>").css("width", d + "px").css("background-color", i.isDark(f, h) ? b.foreground : b.background).appendTo(g);
            return c
        }, this.each(function () {
            var e = "canvas" == b.render ? c() : d();
            a(e).appendTo(this)
        })
    }
}(jQuery), QR8bitByte.prototype = {
    getLength: function () {
        return this.data.length
    }, write: function (a) {
        for (var b = 0; b < this.data.length; b++) a.put(this.data.charCodeAt(b), 8)
    }
}, QRCode.prototype = {
    addData: function (a) {
        var b = new QR8bitByte(a);
        this.dataList.push(b), this.dataCache = null
    }, isDark: function (a, b) {
        if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
        return this.modules[a][b]
    }, getModuleCount: function () {
        return this.moduleCount
    }, make: function () {
        var a, b, c, d, e, f;
        if (this.typeNumber < 1) {
            for (a = 1, a = 1; 40 > a; a++) {
                for (b = QRRSBlock.getRSBlocks(a, this.errorCorrectLevel), c = new QRBitBuffer, d = 0, e = 0; e < b.length; e++) d += b[e].dataCount;
                for (e = 0; e < this.dataList.length; e++) f = this.dataList[e], c.put(f.mode, 4), c.put(f.getLength(), QRUtil.getLengthInBits(f.mode, a)), f.write(c);
                if (c.getLengthInBits() <= 8 * d) break
            }
            this.typeNumber = a
        }
        this.makeImpl(!1, this.getBestMaskPattern())
    }, makeImpl: function (a, b) {
        var c, d;
        for (this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount), c = 0; c < this.moduleCount; c++) for (this.modules[c] = new Array(this.moduleCount), d = 0; d < this.moduleCount; d++) this.modules[c][d] = null;
        this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, b), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, b)
    }, setupPositionProbePattern: function (a, b) {
        var c, d;
        for (c = -1; 7 >= c; c++) if (!(-1 >= a + c || this.moduleCount <= a + c)) for (d = -1; 7 >= d; d++) -1 >= b + d || this.moduleCount <= b + d || (this.modules[a + c][b + d] = c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? !0 : !1)
    }, getBestMaskPattern: function () {
        var a, b, c = 0, d = 0;
        for (a = 0; 8 > a; a++) this.makeImpl(!0, a), b = QRUtil.getLostPoint(this), (0 == a || c > b) && (c = b, d = a);
        return d
    }, createMovieClip: function (a, b, c) {
        var d, e, f, g, h, i = a.createEmptyMovieClip(b, c), j = 1;
        for (this.make(), d = 0; d < this.modules.length; d++) for (e = d * j, f = 0; f < this.modules[d].length; f++) g = f * j, h = this.modules[d][f], h && (i.beginFill(0, 100), i.moveTo(g, e), i.lineTo(g + j, e), i.lineTo(g + j, e + j), i.lineTo(g, e + j), i.endFill());
        return i
    }, setupTimingPattern: function () {
        var a, b;
        for (a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = 0 == a % 2);
        for (b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = 0 == b % 2)
    }, setupPositionAdjustPattern: function () {
        var a, b, c, d, e, f, g = QRUtil.getPatternPosition(this.typeNumber);
        for (a = 0; a < g.length; a++) for (b = 0; b < g.length; b++) if (c = g[a], d = g[b], null == this.modules[c][d]) for (e = -2; 2 >= e; e++) for (f = -2; 2 >= f; f++) this.modules[c + e][d + f] = -2 == e || 2 == e || -2 == f || 2 == f || 0 == e && 0 == f ? !0 : !1
    }, setupTypeNumber: function (a) {
        var b, c, d = QRUtil.getBCHTypeNumber(this.typeNumber);
        for (b = 0; 18 > b; b++) c = !a && 1 == (1 & d >> b), this.modules[Math.floor(b / 3)][b % 3 + this.moduleCount - 8 - 3] = c;
        for (b = 0; 18 > b; b++) c = !a && 1 == (1 & d >> b), this.modules[b % 3 + this.moduleCount - 8 - 3][Math.floor(b / 3)] = c
    }, setupTypeInfo: function (a, b) {
        var c, d, e = this.errorCorrectLevel << 3 | b, f = QRUtil.getBCHTypeInfo(e);
        for (c = 0; 15 > c; c++) d = !a && 1 == (1 & f >> c), 6 > c ? this.modules[c][8] = d : 8 > c ? this.modules[c + 1][8] = d : this.modules[this.moduleCount - 15 + c][8] = d;
        for (c = 0; 15 > c; c++) d = !a && 1 == (1 & f >> c), 8 > c ? this.modules[8][this.moduleCount - c - 1] = d : 9 > c ? this.modules[8][15 - c - 1 + 1] = d : this.modules[8][15 - c - 1] = d;
        this.modules[this.moduleCount - 8][8] = !a
    }, mapData: function (a, b) {
        var c, d, e, f, g = -1, h = this.moduleCount - 1, i = 7, j = 0;
        for (c = this.moduleCount - 1; c > 0; c -= 2) for (6 == c && c--; ;) {
            for (d = 0; 2 > d; d++) null == this.modules[h][c - d] && (e = !1, j < a.length && (e = 1 == (1 & a[j] >>> i)), f = QRUtil.getMask(b, h, c - d), f && (e = !e), this.modules[h][c - d] = e, i--, -1 == i && (j++, i = 7));
            if (h += g, 0 > h || this.moduleCount <= h) {
                h -= g, g = -g;
                break
            }
        }
    }
}, QRCode.PAD0 = 236, QRCode.PAD1 = 17, QRCode.createData = function (a, b, c) {
    var d, e, f, g = QRRSBlock.getRSBlocks(a, b), h = new QRBitBuffer;
    for (d = 0; d < c.length; d++) e = c[d], h.put(e.mode, 4), h.put(e.getLength(), QRUtil.getLengthInBits(e.mode, a)), e.write(h);
    for (f = 0, d = 0; d < g.length; d++) f += g[d].dataCount;
    if (h.getLengthInBits() > 8 * f) throw new Error("code length overflow. (" + h.getLengthInBits() + ">" + 8 * f + ")");
    for (h.getLengthInBits() + 4 <= 8 * f && h.put(0, 4); 0 != h.getLengthInBits() % 8;) h.putBit(!1);
    for (; !(h.getLengthInBits() >= 8 * f) && (h.put(QRCode.PAD0, 8), !(h.getLengthInBits() >= 8 * f));) h.put(QRCode.PAD1, 8);
    return QRCode.createBytes(h, g)
}, QRCode.createBytes = function (a, b) {
    var c, d, e, f, g, h, i, j, k, l, m, n = 0, o = 0, p = 0, q = new Array(b.length), r = new Array(b.length);
    for (c = 0; c < b.length; c++) {
        for (d = b[c].dataCount, e = b[c].totalCount - d, o = Math.max(o, d), p = Math.max(p, e), q[c] = new Array(d), f = 0; f < q[c].length; f++) q[c][f] = 255 & a.buffer[f + n];
        for (n += d, g = QRUtil.getErrorCorrectPolynomial(e), h = new QRPolynomial(q[c], g.getLength() - 1), i = h.mod(g), r[c] = new Array(g.getLength() - 1), f = 0; f < r[c].length; f++) j = f + i.getLength() - r[c].length, r[c][f] = j >= 0 ? i.get(j) : 0
    }
    for (k = 0, f = 0; f < b.length; f++) k += b[f].totalCount;
    for (l = new Array(k), m = 0, f = 0; o > f; f++) for (c = 0; c < b.length; c++) f < q[c].length && (l[m++] = q[c][f]);
    for (f = 0; p > f; f++) for (c = 0; c < b.length; c++) f < r[c].length && (l[m++] = r[c][f]);
    return l
}, QRMode = {MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8}, QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
}, QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
}, QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function (a) {
        for (var b = a << 10; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;) b ^= QRUtil.G15 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15);
        return (a << 10 | b) ^ QRUtil.G15_MASK
    },
    getBCHTypeNumber: function (a) {
        for (var b = a << 12; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;) b ^= QRUtil.G18 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18);
        return a << 12 | b
    },
    getBCHDigit: function (a) {
        for (var b = 0; 0 != a;) b++, a >>>= 1;
        return b
    },
    getPatternPosition: function (a) {
        return QRUtil.PATTERN_POSITION_TABLE[a - 1]
    },
    getMask: function (a, b, c) {
        switch (a) {
            case QRMaskPattern.PATTERN000:
                return 0 == (b + c) % 2;
            case QRMaskPattern.PATTERN001:
                return 0 == b % 2;
            case QRMaskPattern.PATTERN010:
                return 0 == c % 3;
            case QRMaskPattern.PATTERN011:
                return 0 == (b + c) % 3;
            case QRMaskPattern.PATTERN100:
                return 0 == (Math.floor(b / 2) + Math.floor(c / 3)) % 2;
            case QRMaskPattern.PATTERN101:
                return 0 == b * c % 2 + b * c % 3;
            case QRMaskPattern.PATTERN110:
                return 0 == (b * c % 2 + b * c % 3) % 2;
            case QRMaskPattern.PATTERN111:
                return 0 == (b * c % 3 + (b + c) % 2) % 2;
            default:
                throw new Error("bad maskPattern:" + a)
        }
    },
    getErrorCorrectPolynomial: function (a) {
        var b, c = new QRPolynomial([1], 0);
        for (b = 0; a > b; b++) c = c.multiply(new QRPolynomial([1, QRMath.gexp(b)], 0));
        return c
    },
    getLengthInBits: function (a, b) {
        if (b >= 1 && 10 > b) switch (a) {
            case QRMode.MODE_NUMBER:
                return 10;
            case QRMode.MODE_ALPHA_NUM:
                return 9;
            case QRMode.MODE_8BIT_BYTE:
                return 8;
            case QRMode.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + a)
        } else if (27 > b) switch (a) {
            case QRMode.MODE_NUMBER:
                return 12;
            case QRMode.MODE_ALPHA_NUM:
                return 11;
            case QRMode.MODE_8BIT_BYTE:
                return 16;
            case QRMode.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + a)
        } else {
            if (!(41 > b)) throw new Error("type:" + b);
            switch (a) {
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw new Error("mode:" + a)
            }
        }
    },
    getLostPoint: function (a) {
        var b, c, d, e, f, g, h, i, j, k = a.getModuleCount(), l = 0;
        for (b = 0; k > b; b++) for (c = 0; k > c; c++) {
            for (d = 0, e = a.isDark(b, c), f = -1; 1 >= f; f++) if (!(0 > b + f || b + f >= k)) for (g = -1; 1 >= g; g++) 0 > c + g || c + g >= k || (0 != f || 0 != g) && e == a.isDark(b + f, c + g) && d++;
            d > 5 && (l += 3 + d - 5)
        }
        for (b = 0; k - 1 > b; b++) for (c = 0; k - 1 > c; c++) h = 0, a.isDark(b, c) && h++, a.isDark(b + 1, c) && h++, a.isDark(b, c + 1) && h++, a.isDark(b + 1, c + 1) && h++, (0 == h || 4 == h) && (l += 3);
        for (b = 0; k > b; b++) for (c = 0; k - 6 > c; c++) a.isDark(b, c) && !a.isDark(b, c + 1) && a.isDark(b, c + 2) && a.isDark(b, c + 3) && a.isDark(b, c + 4) && !a.isDark(b, c + 5) && a.isDark(b, c + 6) && (l += 40);
        for (c = 0; k > c; c++) for (b = 0; k - 6 > b; b++) a.isDark(b, c) && !a.isDark(b + 1, c) && a.isDark(b + 2, c) && a.isDark(b + 3, c) && a.isDark(b + 4, c) && !a.isDark(b + 5, c) && a.isDark(b + 6, c) && (l += 40);
        for (i = 0, c = 0; k > c; c++) for (b = 0; k > b; b++) a.isDark(b, c) && i++;
        return j = Math.abs(100 * i / k / k - 50) / 5, l += 10 * j
    }
}, QRMath = {
    glog: function (a) {
        if (1 > a) throw new Error("glog(" + a + ")");
        return QRMath.LOG_TABLE[a]
    }, gexp: function (a) {
        for (; 0 > a;) a += 255;
        for (; a >= 256;) a -= 255;
        return QRMath.EXP_TABLE[a]
    }, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256)
}, i = 0; 8 > i; i++) QRMath.EXP_TABLE[i] = 1 << i;
for (i = 8; 256 > i; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (i = 0; 255 > i; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
    get: function (a) {
        return this.num[a]
    }, getLength: function () {
        return this.num.length
    }, multiply: function (a) {
        var b, c, d = new Array(this.getLength() + a.getLength() - 1);
        for (b = 0; b < this.getLength(); b++) for (c = 0; c < a.getLength(); c++) d[b + c] ^= QRMath.gexp(QRMath.glog(this.get(b)) + QRMath.glog(a.get(c)));
        return new QRPolynomial(d, 0)
    }, mod: function (a) {
        var b, c, d;
        if (this.getLength() - a.getLength() < 0) return this;
        for (b = QRMath.glog(this.get(0)) - QRMath.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d);
        for (d = 0; d < a.getLength(); d++) c[d] ^= QRMath.gexp(QRMath.glog(a.get(d)) + b);
        return new QRPolynomial(c, 0).mod(a)
    }
}, QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], QRRSBlock.getRSBlocks = function (a, b) {
    var c, d, e, f, g, h, i, j = QRRSBlock.getRsBlockTable(a, b);
    if (void 0 == j) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
    for (c = j.length / 3, d = new Array, e = 0; c > e; e++) for (f = j[3 * e + 0], g = j[3 * e + 1], h = j[3 * e + 2], i = 0; f > i; i++) d.push(new QRRSBlock(g, h));
    return d
}, QRRSBlock.getRsBlockTable = function (a, b) {
    switch (b) {
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 3];
        default:
            return void 0
    }
}, QRBitBuffer.prototype = {
    get: function (a) {
        var b = Math.floor(a / 8);
        return 1 == (1 & this.buffer[b] >>> 7 - a % 8)
    }, put: function (a, b) {
        for (var c = 0; b > c; c++) this.putBit(1 == (1 & a >>> b - c - 1))
    }, getLengthInBits: function () {
        return this.length
    }, putBit: function (a) {
        var b = Math.floor(this.length / 8);
        this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
    }
};
/* gmpro-2.0.0/member/4.4.4 myGoodsAppraiseTpl.js Date:2019-07-30 17:42:12 */
/* gmpro-2.0.0/member/4.4.4 myGoodsAppraiseLive.js Date:2019-07-30 17:42:13 */
$(function () {


    var i = [];
    var k = null == r("shippingGroupId") ? "" : r("shippingGroupId");
    var l = !1;
    var n = !1;
    var p = r("orderSource");
    var q = function () {
        $(".cont-top-word").html('<span style="font-size:16px;color:#5E5E5E; padding-left:19px;">\u8bc4\u4ef7\u6652\u5355</span>'), this.appraiseTab();
        var a = null == r("isAppraise") ? "" : r("isAppraise");
        a && $(".appraise_tab_ul li").eq(1).click(), this.registClieckEvent()
    };

    function r(a) {
        var b = location.search, c = new RegExp("(?:\\?|&)" + a + "=([\\w]*)(?:&|$)");
        return b = c.exec(b), b && b.length > 1 ? b[1] : null
    }

    q.prototype = {
        initUnAppraise: function (a) {
            var c = this;

            var e = "";
            var f = {userId: $.cookie("SSO_USER_ID") || "100044460132"};


        }, unAppraiseListFn: function (a) {
            var b = a.data ? a.data : a.pUnAppraiseDetail;
            if (b) {
                var c = this;
                c.appraiseShow(), "" != k ? (c.appraiseService(a), c.getSingleAppraise(b)) : $(".pager").eq(0).ucPager({
                    currentPage: parseInt(b.currPageNum),
                    totalPage: parseInt(b.totalPageNum),
                    clickCallback: function (a) {
                        c.initUnAppraise({currPageNum: a || 1, shippingGroupId: ""});
                        var b = $(".tabsHeader").offset().top;
                        var d = $(window).scrollTop();
                        d > b && $(window).scrollTop(b)
                    }
                }), $(".appraiseContent_table  tr:eq(0) .pos_re a").click()
            }
        }, initAlreadyAppraise: function (a, b) {
            var d = this;

            k = "", a.result && uc_render(c, a.result.pAppraiseDetail, $(".dataBox"), function () {
                d.changeAppraise(), d.addAppraise(), d.seeMore(), $(".pager").eq(1).ucPager({
                    currentPage: a.result.pAppraiseDetail.currPageNum,
                    totalPage: a.result.pAppraiseDetail.totalPageNum,
                    clickCallback: function (a) {
                        d.initAlreadyAppraise({
                            userId: $.cookie("SSO_USER_ID") || "100044460132",
                            currPageNum: a || 1,
                            shippingGroupId: k || "",
                            scoreLevel: scoreLevel
                        });
                        var e = $(".tabsHeader").offset().top;
                        var f = $(window).scrollTop();
                        f > e && $(window).scrollTop(e)
                    }
                })
            })

        }, seeMore: function () {
            var a = $(".already_name"), b = 0;
            a.each(function (b) {
                a.eq(b).height() > 70 && ($(this).nextAll(".morezl").show(), $(this).css({
                    height: "70px",
                    overflow: "hidden"
                }))
            }), $(".morezl").on("click", function () {
                0 == b ? ($(this).prevAll(".already_name").css({height: "auto"}), $(this).text("\u6536\u8d77"), b = 1) : ($(this).prevAll(".already_name").css({
                    height: "70px",
                    overflow: "hidden"
                }), $(this).text("\u67e5\u770b\u66f4\u591a"), b = 0)
            })
        }, appraiseTab: function () {
            var a = this;
            $(".appraise_tab ul li");
            var c = window.location.hash;
            $(".tabs").navTab({
                currentIndex: "" == c ? 0 : "#p2" == c ? 1 : "#p3" == c ? 2 : "#p4" == c ? 3 : 0,
                callback: function (b, c) {
                    switch (scoreLevel = "", b) {
                        case 0:
                            a.initUnAppraise({currPageNum: 1, shippingGroupId: ""});
                            break;
                        case 1:
                            a.initAlreadyAppraise({
                                userId: $.cookie("SSO_USER_ID") || "100044460132",
                                currPageNum: 1,
                                scoreLevel: ""
                            }, 1), $(".levelpoint").html("\u8bc4\u4ef7\u5206\u6570"), $(".levelpoint").attr("changeId", "");
                            break;
                        case 2:
                            window.publicEvalute.render({tab: c, evaluateStatus: "", sot: "1"});
                            break;
                        case 3:
                            window.publicEvalute.render({tab: c, evaluateStatus: "", sot: "2"})
                    }
                }
            })
        }, registClieckEvent: function () {
            var b = this;
            $(".select_choos").click(function () {
                $(".level_menu").show();
                var a = $(".level_menu_ul a");
                return a.unbind(), a.bind("click", function () {
                    $(".levelpoint").html($(this).html()), "\u597d\u8bc4" == $(".levelpoint").html() ? (scoreLevel = "Hao", $(".levelpoint").attr("changeId", "Hao")) : "\u4e2d\u8bc4" == $(".levelpoint").html() ? (scoreLevel = "Zhong", $(".levelpoint").attr("changeId", "Zhong")) : "\u5dee\u8bc4" == $(".levelpoint").html() ? (scoreLevel = "Cha", $(".levelpoint").attr("changeId", "Cha")) : (scoreLevel = "", $(".levelpoint").attr("changeId", ""));
                    var a = {
                        userId: $.cookie("SSO_USER_ID") || "100044460132",
                        currPageNum: "1",
                        shippingGroupId: k,
                        scoreLevel: scoreLevel
                    };
                    return $(".dataBox").html('<div class="loding-layer"><span class="g-loading"></span><span class="loading-text">\u6b63\u5728\u52a0\u8f7d\u4e2d\u2026</span></div>'),
                       $(".level_menu").hide(), !1
                }), !1
            })
        }, scrollTops: function () {
            $(window).scroll(function () {
                var a = $(window).height();
                var b = $(document.body).height();
                var c = $(document).scrollTop();
                var d = a + c;
                $(".commit-content").css(b - 260 > d ? {position: "fixed"} : {position: "absolute"})
            })
        }, getSingleAppraise: function (a) {
            var b = this, c = a.list.length, e = "", f = "", g = a.list[0].shippingGroupId;
            for (var h = 0; c > h; h++) {
                var i = a.list[h].productId;
                e += i + ",", f += c - 1 > h ? a.list[h].skuId + "," : a.list[h].skuId
            }
            e = e.substr(0, e.length - 1);
            var j = {
                userId: $.cookie("SSO_USER_ID") || "100044460132",
                skuIds: f,
                orderId: a.list[0].orderId,
                shippingGroupId: a.list[0].shippingGroupId
            };
        }, appraiseShow: function () {
            var b = $(".unAppraiseList .appraise_btn");
            b.live("click", function () {
                i = [], $(".appArea") && $(".appArea").remove();
                $(this).attr("productId");
                $(this).attr("userId");
                var c = $(this).attr("shippingGroupId");
                var d = $(this).attr("orderId");
                $(this).attr("productId");
                $(this).attr("skuId");
                $(this).attr("shopNo");
                $(this).attr("id");
                var j = $(this).attr("orderSource");
            })
        }, addAppraise: function () {
            var a = this;
            var b = $(".unAppraiseList .already_again");
            b.die("click"), b.live("click", function () {
                i = [];
                $(this);
                $(".change_appraise") && $(".change_appraise").hide(), $(".addArea") && $(".addArea").remove();
                var c = $(this).attr("productId");
                var d = $(this).attr("userId");
                var e = $(this).attr("shippingGroupId");
                var f = $(this).attr("orderId");
                var g = $(this).attr("productId");
                var h = $(this).attr("skuId");
                var j = $(this).attr("appraiseId");
                $(this).attr("isShowPictures");
                var l = $(this).attr("id");
                var m = $(this).attr("orderType");
                var n = {appraiseId: j, orderId: f, shippingGroupId: e, productId: g, skuId: h, id: l, orderType: m};
                if ($(this).hasClass("disabled_add")) $(".addArea").hide(), $(this).removeClass("disabled_add"); else {
                    $(".appraiseList").find(".addArea").hide(), $(this).removeClass("disabled_add"), $(this).parents(".appraise").after('<tr  class="yellow addArea"><td colspan="4" style="border-bottom:1px solid #f3dbb6;border-top:1px solid #f3dbb6;"></tr>'), $(this).addClass("disabled_add");
                    var o = {appraiseId: j, userId: $.cookie("SSO_USER_ID") || "100044460132"};

                }
            })
        }, changeAppraise: function () {
            var a = this;
            var b = $(".unAppraiseList .already_change");
            b.die("click"), b.live("click", function () {
                i = [], $(".addArea") && $(".addArea").remove();
                var b = $(this).attr("appraiseId");
                var c = $(this).attr("productId");
                var d = $(this).attr("userId");
                var e = $(this).attr("shippingGroupId");
                var f = $(this).attr("orderId");
                var g = $(this).attr("productId");
                var h = $(this).attr("skuId");
                $(this).attr("shopNo");
                var k = {appraiseId: b, orderId: f, shippingGroupId: e, productId: g, skuId: h};
                var l = {appraiseId: b, userId: $.cookie("SSO_USER_ID") || "100044460132"};

            })
        }, initStarRank: function () {
            var a = $(".score_choose div");
            a.live("click", function () {
                var a = $(this).index() + 1, b = $(this).nextAll(".score_title");
                switch ($(this).parent().children("div").removeClass("score_star").addClass("gray_star"), $(this).removeClass("gray_star").addClass("score_star"), $(this).prevAll().removeClass("gray_star").addClass("score_star"), a) {
                    case 1:
                        b.html("\u5931\u671b");
                        break;
                    case 2:
                        b.html("\u4e0d\u6ee1");
                        break;
                    case 3:
                        b.html("\u4e00\u822c");
                        break;
                    case 4:
                        b.html("\u6ee1\u610f");
                        break;
                    case 5:
                        b.html("\u975e\u5e38\u559c\u6b22")
                }
            })
        }, strLen: function (a) {
            var b = 0;
            for (var c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                d >= 1 && 126 >= d || d >= 65376 && 65439 >= d ? b += .5 : b++
            }
            return b
        }, initRecommendList: function () {
            var a = this;
            var b = $(".unAppraiseList .label_card label");
            b.length > 10 && alert("\u5927\u4e8e10"), b.die("click.points").live("click.points", function () {
                $(this).hasClass("reco-checkded") ? ($(this).removeClass("reco-checkded"), $(this).find("i").removeClass("checkd-icon")) : $(this).parent().children().length - 1 > 4 ? ($(".unAppraiseList .rec-error").text("\u60a8\u6700\u591a\u53ef\u9009\u62e95\u4e2a\u63a8\u8350\u70b9\uff0c\u8bf7\u4e09\u601d").show(), setTimeout(function () {
                    $(".unAppraiseList .rec-error").hide()
                }, 3e3)) : ($(this).addClass("reco-checkded"), $(this).find("i").addClass("checkd-icon"))
            }), $recocontent_input = $(".unAppraiseList .recocontent_input"), $(".unAppraiseList .custom_btn").bind("click", function () {
                var b = $(this).parents(".label_content"), c = $(this);
                if (b.prev().children().length > 4) return b.next().children().text("\u60a8\u6700\u591a\u53ef\u9009\u62e95\u4e2a\u63a8\u8350\u70b9\uff0c\u8bf7\u4e09\u601d").show(), setTimeout(function () {
                    b.next().children().hide()
                }, 3e3), !1;
                var d = c.prevAll(".recocontent_input").val();
                if (0 == d.replace(/\s/g, "").length) return c.parent().next().html('<span style="color:#f00;">\u8f93\u5165\u4e0d\u80fd\u4e3a\u7a7a</span>'), c.parent().removeClass("recocontent-focus").addClass("recocontent-error"), d.focus(), !1;
                if (/[^\u4e00-\u9fa5]{1,7}$/g.test(d)) return c.parent().next().html("<span>\u4e0d\u80fd\u8f93\u5165\u7279\u6b8a\u5b57\u7b26</span>"), c.parent().removeClass("recocontent-focus").addClass("recocontent-error"), d.focus(), !1;
                var e = b.prev().children().length + 1;
                if (e > 10) return b.next().children(".rec-error").text("\u63a8\u8350\u70b9\u4e2a\u6570\u5df2\u8fbe\u4e0a\u9650\uff0c\u8bf7\u76f4\u63a5\u52fe\u9009").show(), setTimeout(function () {
                    b.next().children(".rec-error").hide()
                }, 3e3), !1;
                var f = $(['<label for="cusre', e, '">', '<a id="cusre', e, '" href="javascript:void(0)">', '<i class="checkd-icon"></i>', "</a>", "<span>", d, "</span>", "</label>"].join(""));
                f.addClass("reco-checkded").appendTo(b.prev());
                var g = c.prevAll(".h-recocontent-input").val();
                var h = " ";
                return g || (h = ""), c.prevAll(".h-recocontent-input").val(g + h + d), c.prevAll(".recocontent_input").val(""), c.prevAll(".lable_input").click(), !0
            });
            var c = !1;
            $(".label_custom").hover(function () {
                c = !0
            }, function () {
                c = !1
            }), $recocontent_input.on("focus", function () {
                var a = $(this), b = a.nextAll("i"), c = $(this).parent();
                return c.hasClass("recocontent-error") ? void b.removeClass("focus") : (c.addClass("recocontent-focus"), b.css("color", "#5E5E5E"), !1)
            }).blur(function () {
                var a = $(this).parent();
                c || ($(this).val("").nextAll("i").css("color", "#CCCCCC"), a.removeClass("recocontent-error").removeClass("recocontent-focus"), a.next().html("\u81ea\u5b9a\u4e49\u63a8\u8350\u6bcf\u6761<span>\u4e0d\u8d85\u8fc77\u4e2a</span>\u4e2d\u6587\u5b57\u7b26"))
            }).bind("input propertychange", function () {
                var b = this.value;
                var c = $(this).parent();
                a.strLen(b) > 7 && (this.value = this.value.slice(0, 7)), c.hasClass("recocontent-error") && (c.removeClass("recocontent-error"), $(this).focus(), c.next().html("\u81ea\u5b9a\u4e49\u63a8\u8350\u6bcf\u6761<span>\u4e0d\u8d85\u8fc77\u4e2a</span>\u4e2d\u6587\u5b57\u7b26"))
            })
        }, changeRecommendList: function () {
            var c = $(".change_appraise .label_card label");
            c.length > 10 && alert("\u5927\u4e8e10"), c.die("click.points").live("click.points", function () {
                $(this).hasClass("reco-checkded") ? ($(this).removeClass("reco-checkded"), $(this).find("i").removeClass("checkd-icon")) : $(".change_appraise .label_card .reco-checkded").length > 4 ? ($(".change_appraise .rec-error").text("\u60a8\u6700\u591a\u53ef\u9009\u62e95\u4e2a\u63a8\u8350\u70b9\uff0c\u8bf7\u4e09\u601d").show(), setTimeout(function () {
                    $(".unAppraiseList .rec-error").hide()
                }, 3e3)) : ($(this).addClass("reco-checkded"), $(this).find("i").addClass("checkd-icon"))
            });
            var d = $(".change_appraise .lable_input");
            $(".change_appraise .custom_btn").live("click", function () {
                if ($(".change_appraise .label_card .reco-checkded").length > 4) return $(".change_appraise .rec-error").text("\u60a8\u6700\u591a\u53ef\u9009\u62e95\u4e2a\u63a8\u8350\u70b9\uff0c\u8bf7\u4e09\u601d").show(), setTimeout(function () {
                    $(".change_appraise .rec-error").hide()
                }, 3e3), !1;
                var b = $(".change_appraise #change-recocontent-input").val();
                if (0 == b.replace(/\s/g, "").length) return $("#change-info").html('<span style="color:#f00;">\u8f93\u5165\u4e0d\u80fd\u4e3a\u7a7a</span>'), $(".label_custom").removeClass("recocontent-focus").addClass("recocontent-error"), $("#change-recocontent-input").focus(), !1;
                if (/[^\u4e00-\u9fa5]{1,7}$/g.test(b)) return $("#change-info").html("<span>\u4e0d\u80fd\u8f93\u5165\u7279\u6b8a\u5b57\u7b26</span>"), $(".label_custom").removeClass("recocontent-focus").addClass("recocontent-error"), $("#change-recocontent-input").focus(), !1;
                var c = $("#change-recoPoints").find("label").length + 1;
                if (c > 10) return $(".change_appraise .rec-error").text("\u63a8\u8350\u70b9\u4e2a\u6570\u5df2\u8fbe\u4e0a\u9650\uff0c\u8bf7\u76f4\u63a5\u52fe\u9009").show(), setTimeout(function () {
                    $(".change_appraise .rec-error").hide()
                }, 3e3), !1;
                var d = $(['<label for="cusre', c, '">', '<a id="cusre', c, '" href="#">', '<i class="checkd-icon"></i>', "</a>", "<span>", b, "</span>", "</label>"].join(""));
                d.addClass("reco-checkded").appendTo("#change-recoPoints");
                return $("#change-recocontent-input").val(""), $(".lable_input").click(), !0
            }), d.live("click", function () {
                $(this).hide(), $("#change-recocontent-input").focus()
            });
            var e = !1;
            $(".label_custom").hover(function () {
                e = !0
            }, function () {
                e = !1
            }), $("#change-recocontent-input").focus(function () {
                var a = $(this), b = a.nextAll("i"), c = $(".label_custom");
                return c.hasClass("recocontent-error") ? void b.removeClass("focus") : (c.addClass("recocontent-focus"), b.css("color", "#5E5E5E"), !1)
            }).blur(function () {
                e || ($(this).val("").nextAll("i").css("color", "#CCCCCC"), $(".label_custom").removeClass("recocontent-error").removeClass("recocontent-focus"), $("#change-info").html("\u81ea\u5b9a\u4e49\u63a8\u8350\u6bcf\u6761<span>\u4e0d\u8d85\u8fc77\u4e2a</span>\u4e2d\u6587\u5b57\u7b26"), $(".lable_input").show())
            }).bind("input propertychange", function () {
                this.value.length > 7 && (this.value = this.value.slice(0, 7)), $(".label_custom").hasClass("recocontent-error") && ($(".label_custom").removeClass("recocontent-error"), $(this).focus(), $("#change-info").html("\u81ea\u5b9a\u4e49\u63a8\u8350\u6bcf\u6761<span>\u4e0d\u8d85\u8fc77\u4e2a</span>\u4e2d\u6587\u5b57\u7b26"))
            })
        }, initUseOfExperience: function (a, b) {
            a.focus(function () {
                $(this).hasClass("ctextarea-info") && $(this).removeClass("ctextarea-info").val("")
            }).blur(function () {
                var a = $.trim($(this).val());
                "" == a ? (l = !1, $(this).addClass("ctextarea-info").val(b ? "\u6211\u4eec\u7684\u5546\u54c1\u7ed9\u529b\u5417\uff1f\u60a8\u5bf9\u54ea\u4e9b\u5730\u65b9\u6ee1\u610f\u6216\u4e0d\u6ee1\u610f\uff1f\u60a8\u4f1a\u5411\u54ea\u4e9b\u4eba\u63a8\u8350\u6211\u4eec\u7684\u5546\u54c1\u5462\uff1f" : "\u8865\u5145\u4e00\u4e0b\u60a8\u7684\u4f7f\u7528\u611f\u53d7\u5427\uff01"), $(this).parent().next().html("0 / 400")) : l = !0
            }).bind("input propertychange keyup keydown", function () {
                var a = $(this), c = a.val(), d = c.length, e = c.substr(0, 1), f = c.substr(0, 5), g = 0 > d ? 0 : d;
                $(this).parent("dd").hasClass("errorform") && $(this).parent("dd").removeClass("errorform"), d > 400 && a.val(a.val().slice(0, 400)), /(^\s+)|(\s+$)/g.test(e) && a.val(a.val().slice(0, 0)), b ? (d > 0 && !/\s/.test(e) && "\u6211\u4eec\u7684\u5546\u54c1" != f ? $(".btn-light").attr("id", "commitEvaluateBtn") : $(".btn-light").attr("id", ""), $(this).parent().next().html(g + "/ 400")) : $(this).nextAll(".again_share").find(".textarea_explain").html("\u8865\u5145\u4e00\u4e0b\u60a8" != f ? g + "/ 400" : "0/ 400")
            }).blur()
        }, changeUseOfExperience: function (a) {
            var b = a.pSingleAppraise.remark;
            a.pSingleAppraise.isSharedPicture;
            $("#change-eva-textarea").val();
            var d = b.length;
            var e = 400 - d;
            $("#change-eva-textarea").focus(function () {
                n && $(".textarea_explain").html(e + "\u5b57")
            }).blur(function () {
                var a = $.trim($(this).val());
                "" == a ? (n = !1, $(this).addClass("ctextarea-info").val("")) : n = !0
            }).bind("input propertychange keyup keydown", function () {
                var a = $(this), b = a.val().length;
                $(this).parent("dd").hasClass("errorform") && $(this).parent("dd").removeClass("errorform"), b > 400 && a.val(a.val().slice(0, 400));
                var c = 0 > 400 - b ? 0 : 400 - b;
                $(".textarea_explain").html(c + "\u5b57")
            }).blur()
        }, initBlogShare: function () {
            $(".shareBox").find("label").click(function (a) {
                a.preventDefault();
                var b = $(this).attr("class");
                if (b.match(/login/)) {
                    var g = $(this).attr("value");
                    $(this).toggleClass(g + "-check");
                    var h = $(this).attr("title");
                    $(this).hasClass(g + "-check") ? $(this).attr("title", h.replace("\u70b9\u51fb", "\u53d6\u6d88")) : $(this).attr("title", h.replace("\u53d6\u6d88", "\u70b9\u51fb"))
                } else {
                    var c = $(this).attr("value");
                    var d = {
                        weibo: {width: 640, height: 460},
                        sina: {width: 640, height: 460},
                        qq: {width: 460, height: 600},
                        renren: {width: 666, height: 400},
                        kaixin: {width: 460, height: 486},
                        douban: {width: 600, height: 570},
                        yixin: {width: 480, height: 410}
                    };
                    var e = window.open;
                    {
                        e($(this).attr("href"), "newwindow", "height=" + d[c].height + ",width=" + d[c].width + ",top=" + (screen.height - d[c].height) / 2 + ",left=" + (screen.width - d[c].width) / 2 + ",toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no")
                    }
                }
            })
        }, submitShare: function (a, b) {
            var c = this,
                d = {c: encodeURIComponent(a), o: "_" + b.join("_"), u: encodeURIComponent(location.href), a: "a"};
            c.ajaxfn("//s" + gomeplusDomain + "/onekeyshare_ajax", d, "callback", function (a) {
                var a = a || {};
                "" != a.success
            })
        }, uploadImg: function (a, b) {
            var c = "";
            $.fn.ajaxUpload = function (b) {
                return this.each(function (c) {
                    var d = $(this);
                    var e = "";
                    op = $.extend(e, b);
                    var f = new AjaxUpload(d, op)
                })
            }, $.each(b, function (a) {
                $(".explain_upload_btn").eq(a).attr("id", "explain_upload_btn" + a), c += "#explain_upload_btn" + a + ","
            }), c = c.substr(0, c.length), $("" + c).ajaxUpload({})
        }, uploadImgPhone: function (a, b, c) {
            $(".explain_upload_phone_btn").on("click", function () {
                var d = '<div class="shade"></div><div class="scanWrap"><h3><i class="closedBtn">\xd7</i></h3><div class="scan-wrap"><p class="phoneTitle">\u624b\u673a\u4f20\u56fe</p><div class="phoneImg" id="qrcodeCanvas"></div><p class="phoneText">\u6253\u5f00<text>\u56fd\u7f8eAPP</text>\u626b\u7801\u7ee7\u7eed\u6652\u56fe</p></div></div>';
                $("body").append(d);
                var e = "";
                var f;
                f = c ? e + "/evaluate_1.html?from=one&shippingGroupId=" + a + "&orderId=" + b : e + "/evaluate_add.html?shippingId=" + a, $("#qrcodeCanvas").qrcode({
                    render: "canvas",
                    text: f,
                    width: "162",
                    height: "162",
                    background: "#ffffff",
                    foreground: "#000000",
                    src: "/css/myGoodsAppraise/i/logo.png",
                    imgWidth: "40",
                    imgHeight: "40"
                }), $(".scanWrap .closedBtn").on("click", function () {
                    $(".scanWrap").remove(), $(".shade").remove()
                })
            })
        }, dialogPhone: function () {
        }, dialog: function (a, b) {
            var c = b ? b : "javascript:void(0);";
            var a = '<div class="shade"></div><div class="dialogBox"><p>' + a + "</p><a href=" + c + ' id="dialogBtn">\u786e\u5b9a</a></div>';
            $("body").append(a), $("#dialogBtn").on("click", function () {
                $(".shade").remove(), $(".dialogBox").remove()
            })
        }, Commit: function (a) {
            var b = this;
            var c = "";
            var d = {};
            var e = [];
            var f = {};
            var g = a.list[0].orderId;
            var h = a.list[0].shippingGroupId;
            $(".appArea").length / 2;
            var j = !0;
            d.shippingGroupId = h, d.orderId = g, d.orderType = p, d.userId = $.cookie("SSO_USER_ID") || "100044460132";

            function k(a) {
                var b = $(".un_appraise").eq(a).find(".appraise_over").attr("productid"),
                    d = $(".un_appraise").eq(a).find(".appraise_over").attr("skuid"),
                    f = $(".un_appraise").eq(a).find(".appraise_over").attr("digitFlag"),
                    g = $(".appArea").eq(a).find(".score_choose .score_star").length,
                    h = $(".appArea").eq(a).find(".label_card label span").text(),
                    i = $(".appArea").eq(a).find(".textarea-info").val();
                sharePicturePath = $("#explain_upload_btn" + a).attr("imgPath");
                var j = {
                    productId: b,
                    skuId: d,
                    score: g,
                    recommend: h,
                    remark: i,
                    digitFlag: f,
                    sharePicturePath: sharePicturePath
                };
                c = j.remark.substr(0, 8), "\u6211\u4eec\u7684\u5546\u54c1\u7ed9\u529b\u5417" != c && e.push(j)
            }

            $(".commit-btnlayers").on("click", "#commitEvaluateBtn", function () {
                var g = $(".level_service .score_star").length;
                var i = $(".level_people .score_star").length;
                var l = $(".level_total .score_star").length;
                $(".unAppraiseList .label_card label");
                0 != p && (d.shopScore = g, d.deliverScore = i, d.installScore = l), a.list[0].canAppraisedService && (0 == p && (f.goodsDesc = g, f.serviceAttitude = i, f.sendSpeed = l), f.shippingGroupId = h, f.shopNo = a.list[0].shopNo ? a.list[0].shopNo : "", d.orderAppraise = f), d.skuCommentInfos = e;
                for (var n = 0; n < a.list.length; n++) k(n);
                $.each(e, function (a, b) {
                    c = b.remark.substr(0, 8), "\u6211\u4eec\u7684\u5546\u54c1\u7ed9\u529b\u5417" == c && (b.remark = "")
                }), j && (j = !1)
            })
        }, addCommit: function (a) {
            var b = a.orderId;
            var d = a.shippingGroupId;
            var e = a.productId;
            var f = a.skuId;
            var g = a.appraiseId;
            var h = a.score;
            var j = a.orderType;
            var k = this;
            $("#add-commitEvaluate").click(function () {
                var a = $(".again_info").val(), l = a.substr(0, 8);
                var m = $(".shareBox").find("label");
                var n = [];
                $.each(m, function (a, b) {
                    var c = $(b).attr("class");
                    c.match(/check/) && n.push($(b).attr("value"))
                });
                var o = "";
                if (o = i.join(","), "\u8865\u5145\u4e00\u4e0b\u60a8\u7684\u4f7f\u7528" == l) return $(".addcommit_tip").show(), void $(".addcommit_tip").html("\u63cf\u8ff0\u4e00\u4e0b\u60a8\u7684\u5fc3\u5f97\u5457~");
                if (a.length > 1e3 || a.length < 5) return $(".addcommit_tip").show(), $(".addcommit_tip").html("\u8bc4\u8bba\u957f\u5ea6\u57285-400\u4e2a\u5b57\u4e4b\u95f4"), !1;
                if ($(".addcommit_tip").hide(), !validUrl(a)) {
                    var p = {
                        appraiseId: g,
                        orderId: b,
                        shippingGroupId: d,
                        productId: e,
                        skuId: f,
                        remark: a,
                        synShare: n.join(","),
                        sharePicturePath: o,
                        score: h,
                        userId: $.cookie("SSO_USER_ID") || "100044460132",
                        orderType: j
                    };
                    var q = "";
                    var r = {
                        userId: $.cookie("SSO_USER_ID") || "100044460132",
                        currPageNum: 1,
                        shippingGroupId: q,
                        scoreLevel: s
                    };
                    var s = $(".levelpoint").attr("changeId");

                }
            })
        }, changeCommit: function (a) {
            var b = a.orderId;
            var d = this;
            var e = a.appraiseId;
            var f = a.shippingGroupId;
            var g = a.productId;
            var h = a.skuId;
            $("#change-commitEvaluate").die("click.change").live("click.change", function () {
                var a = 5;
                var j = [];
                $(".change_appraise .label_card label").each(function () {
                    $(this).hasClass("reco-checkded") && j.push($(this).find("span").text())
                }), j = j.join("|");
                var k = $(".textarea-info").val();
                var l = $(".shareBox").find("label");
                var m = [];
                $.each(l, function (a, b) {
                    var c = $(b).attr("class");
                    c.match(/check/) && m.push($(b).attr("value"))
                });
                var o = "";
                if (o = i.join("|"), k.length > 1e3) return $(".commit_tip").show(), $(".commit_tip").html("\u8bc4\u8bba\u957f\u5ea6\u57281-1000\u4e2a\u5b57\u4e4b\u95f4"), !1;
                if (!n) return $(".commit_tip").show(), void $(".commit_tip").html("\u63cf\u8ff0\u4e00\u4e0b\u60a8\u7684\u5fc3\u5f97\u5457~");
                if ($(".commit_tip").hide(), !validUrl(k)) {
                    var p = {
                        appraiseId: e,
                        orderId: b,
                        shippingGroupId: f,
                        productId: g,
                        skuId: h,
                        score: a,
                        recommend: j,
                        remark: k,
                        synShare: m.join(","),
                        sharePicturePath: o
                    };
                    var q = "";
                    var r = {
                        userId: $.cookie("SSO_USER_ID") || "100044460132",
                        currPageNum: 1,
                        shippingGroupId: f,
                        scoreLevel: scoreLevel
                    };

                }
            })
        }, ServiceEvaluation: function (a, b, c, d) {
            switch (a.parent().children("div").removeClass("score_star").addClass("gray_star"), a.removeClass("gray_star").addClass("score_star"), a.prevAll().removeClass("gray_star").addClass("score_star"), b) {
                case 1:
                    c.html(d[b - 1]);
                    break;
                case 2:
                    c.html(d[b - 1]);
                    break;
                case 3:
                    c.html(d[b - 1]);
                    break;
                case 4:
                    c.html(d[b - 1]);
                    break;
                case 5:
                    c.html(d[b - 1])
            }
        }, appraiseService: function (a) {
            var b = this;
            if (null != r("shippingGroupId")) {
                $(".levelArea").show();
                var d = (r("shippingGroupId"), a.pUnAppraiseDetail.list[0].canAppraisedService), f = {};
                var g = [], h = [], i = [];
                f.install_IsCanAppraise = a.install_IsCanAppraise, f.deliver_IsCanAppraise = a.deliver_IsCanAppraise, f.shopIsCanAppraise = a.shopIsCanAppraise, f.orderSource = p, (d && "0" == p || a.install_IsCanAppraise || a.deliver_IsCanAppraise || a.shopIsCanAppraise) && uc_render(e, f, $(".levelArea"), function () {
                    0 == p ? ($(".service_tip").html("<div class='level_tip_120 service_tip'>\u6574\u4f53\u5305\u88c5\u6ee1\u610f\u5ea6:</div>"), $(".people_tip").html("<div class='level_tip_120 people_tip'>\u914d\u9001\u4eba\u5458\u7684\u9001\u8d27\u901f\u5ea6:</div>"), $(".total_tip").html("<div class='level_tip_120 total_tip'>\u914d\u9001\u4eba\u5458\u7684\u670d\u52a1\u6001\u5ea6:</div>"), $(".service_score").html("\u6574\u4f53\u5305\u88c5\u592a\u68d2\u4e86\uff0c\u8d85\u51fa\u9884\u671f\u7684\u6ee1\u610f"), $(".people_score").html("\u9001\u8d27\u901f\u5ea6\u8d85\u7ea7\u5feb\uff0c\u5305\u88c5\u4e25\u5b9e\uff0c\u7ec6\u81f4"), $(".total_score").html("\u914d\u9001\u4eba\u5458\u6001\u5ea6\u592a\u68d2\u4e86\uff0c\u8003\u8651\u975e\u5e38\u5468\u5230\uff0c\u975e\u5e38\u6ee1\u610f")) : ($(".service_tip").html("<div class='level_tip_120 service_tip'>\u95e8\u5e97\u670d\u52a1:</div>"), $(".people_tip").html("<div class='level_tip_120 people_tip'>\u7269\u6d41\u670d\u52a1:</div>"), $(".total_tip").html("<div class='level_tip_120 total_tip'>\u5b89\u88c5\u670d\u52a1:</div>"), $(".service_score").html("\u592a\u68d2\u4e86\uff0c\u8d85\u51fa\u9884\u671f\u7684\u6ee1\u610f"), $(".people_score").html("\u9001\u8d27\u901f\u5ea6\u8d85\u7ea7\u5feb\uff0c\u5305\u88c5\u4e25\u5b9e\uff0c\u7ec6\u81f4"), $(".total_score").html("\u5b89\u88c5\u592a\u5feb\u4e86\uff0c\u670d\u52a1\u975e\u5e38\u5468\u5230\uff0c\u975e\u5e38\u6ee1\u610f")), 0 == p ? (g = ["\u6574\u4f53\u5305\u88c5\u4e25\u91cd\u4e0d\u6ee1\uff0c\u90fd\u62c6\u5f00\u4e86", "\u6574\u4f53\u5305\u88c5\u4e0d\u6ee1\u610f\uff0c\u5f88\u810f\uff0c\u8c08\u4e0d\u4e0a\u597d", "\u6574\u4f53\u5305\u88c5\u4e00\u822c\uff0c\u6ca1\u6709\u60f3\u50cf\u7684\u597d", "\u6574\u4f53\u5305\u88c5\u6ee1\u610f\uff0c\u548c\u60f3\u7684\u4e00\u6837", "\u6574\u4f53\u5305\u88c5\u592a\u68d2\u4e86\uff0c\u8d85\u51fa\u9884\u671f\u7684\u6ee1\u610f"], h = ["\u53d1\u8d27\u901f\u5ea6\u8d85\u6162\uff0c\u4e00\u76f4\u50ac\u624d\u9001\u8d27", "\u53d1\u8d27\u901f\u5ea6\u6162\uff0c\u9694\u4e86\u51e0\u5929\u5f88\u4e45\u7ec8\u4e8e\u9001\u8d27\u4e86", "\u9001\u8d27\u901f\u5ea6\u6709\u4e00\u70b9\u6162\uff0c\u63d0\u9192\u4e0b\u53d1\u8d27\u7684", "\u9001\u8d27\u901f\u5ea6\u633a\u53ca\u65f6\u7684\uff0c\u5305\u88c5\u4e5f\u4e0d\u9519", "\u9001\u8d27\u901f\u5ea6\u8d85\u7ea7\u5feb\uff0c\u5305\u88c5\u4e25\u5b9e\uff0c\u7ec6\u81f4"], i = ["\u914d\u9001\u4eba\u5458\u6001\u5ea6\u975e\u5e38\u5dee\uff0c\u8fd8\u9a82\u4eba\uff0c\u628a\u987e\u5ba2\u4e0d\u5f53\u56de\u4e8b", "\u6001\u5ea6\u4e0d\u8010\u70e6\uff0c\u627f\u8bfa\u7684\u670d\u52a1\u4e5f\u65e0\u6cd5\u5151\u73b0", "\u914d\u9001\u4eba\u5458\u6001\u5ea6\u4e00\u822c\uff0c\u8c08\u4e0d\u4e0a\u6c9f\u901a\u987a\u7545", "\u914d\u9001\u4eba\u5458\u6001\u5ea6\u633a\u597d\u7684\uff0c\u6c9f\u901a\u987a\u7545\uff0c\u603b\u4f53\u6ee1\u610f", "\u914d\u9001\u4eba\u5458\u6001\u5ea6\u592a\u68d2\u4e86\uff0c\u8003\u8651\u975e\u5e38\u5468\u5230\uff0c\u975e\u5e38\u6ee1\u610f"]) : (g = ["\u4e25\u91cd\u4e0d\u6ee1", "\u4e0d\u6ee1\u610f\uff0c\u8c08\u4e0d\u4e0a\u597d", "\u4e00\u822c\uff0c\u6ca1\u6709\u60f3\u50cf\u7684\u597d", "\u6ee1\u610f\uff0c\u548c\u60f3\u7684\u4e00\u6837", "\u592a\u68d2\u4e86\uff0c\u8d85\u51fa\u9884\u671f\u7684\u6ee1\u610f"], h = ["\u53d1\u8d27\u901f\u5ea6\u8d85\u6162\uff0c\u4e00\u76f4\u50ac\u624d\u9001\u8d27", "\u53d1\u8d27\u901f\u5ea6\u6162\uff0c\u9694\u4e86\u51e0\u5929\u5f88\u4e45\u7ec8\u4e8e\u9001\u8d27\u4e86", "\u9001\u8d27\u901f\u5ea6\u6709\u4e00\u70b9\u6162\uff0c\u63d0\u9192\u4e0b\u53d1\u8d27\u7684", "\u9001\u8d27\u901f\u5ea6\u633a\u53ca\u65f6\u7684\uff0c\u5305\u88c5\u4e5f\u4e0d\u9519", "\u9001\u8d27\u901f\u5ea6\u8d85\u7ea7\u5feb\uff0c\u5305\u88c5\u4e25\u5b9e\uff0c\u7ec6\u81f4"], i = ["\u5b89\u88c5\u975e\u5e38\u5dee\uff0c\u628a\u987e\u5ba2\u4e0d\u5f53\u56de\u4e8b", "\u5b89\u88c5\u4e0d\u8010\u70e6\uff0c\u627f\u8bfa\u7684\u670d\u52a1\u4e5f\u65e0\u6cd5\u5151\u73b0", "\u5b89\u88c5\u4e00\u822c\uff0c\u8c08\u4e0d\u4e0a\u6ee1\u610f", "\u5b89\u88c5\u633a\u5feb\u7684\uff0c\u6001\u5ea6\u633a\u597d\u7684\uff0c\u603b\u4f53\u6ee1\u610f", "\u5b89\u88c5\u592a\u5feb\u4e86\uff0c\u670d\u52a1\u975e\u5e38\u5468\u5230\uff0c\u975e\u5e38\u6ee1\u610f"]);
                    var a = $(".level_service div");
                    var c = $(".level_people div");
                    var d = $(".level_total div");
                    a.live("click", function () {
                        var a = $(this).index() + 1, c = $(this).parent().next(), d = g;
                        b.ServiceEvaluation($(this), a, c, d)
                    }), c.live("click", function () {
                        var a = $(this).index() + 1, c = $(this).parent().next(), d = h;
                        b.ServiceEvaluation($(this), a, c, d)
                    }), d.live("click", function () {
                        var a = $(this).index() + 1, c = $(this).parent().next(), d = i;
                        b.ServiceEvaluation($(this), a, c, d)
                    })
                })
            }
        }, ajaxfn: function (a, b, c, d) {

        }
    }, new q
});

function validUrl(a) {
    var b = "((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}[0-9]{1,3}|(([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]+\\.)?([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\\.[a-zA-Z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)";
    var c = new RegExp(b);
    if (c.test(a)) {
        var d = new gomeUi.PopBox({
            id: "applayPop",
            closeStr: ".closeBtn",
            html: '<div id="applayPop" style="padding:30px 20px">                    <span class="closePop"><a href="javascript:void(0)" class="closeBtn"></a></span>                    <div class="mainBox">\u4e0d\u5141\u8bb8\u8f93\u5165\u4efb\u4f55\u5f62\u5f0f\u7684\u7f51\u5740\uff0c\u8bf7\u66f4\u6b63\uff01</div>                </div>'
        });
        return d.showBox(), !0
    }
    return !1
}

function addLink(a) {
    var b = document.createElement("link");
    b.type = "text/css", b.rel = "stylesheet", b.onerror = function () {
        throw new Error(a)
    }, b.href = a, document.getElementsByTagName("head")[0].appendChild(b)
}

/* gmpro-2.0.0/member/4.4.4 nTips_v2.js Date:2019-07-30 17:42:14 */
!function (a) {
    a.fn.nTips = function (b) {
        var c = {
            noTitle: !1,
            title: "\u5f39\u51fa\u5c42\u540d\u79f0",
            fixed: !1,
            close: ".gClose",
            requestType: null,
            target: null,
            iframeWH: {width: 300, height: 200},
            html: "",
            callBack: null,
            fresh: !1,
            fadein: !1,
            timeout: 0
        }, d = this;
        this.TIP = a.extend({}, c, b);
        var e = !1;
        a.browser.msie && "6.0" == a.browser.version && (e = !0);
        var f = '<div class="gmTips_warp" id="tips_warp"><div class="gmTips_hd" id="tips_hd"><b class="gmTips_close j-doubleShopClose gClose"></b><span class="gmTips_title">' + d.TIP.title + '</span></div><div class="gmTips_bd" id="tips_con"></div></div>',
            g = null, h = null, i = null, j = null;
        this.showBox = function () {
            a("#tips_warp").remove(), a("#tips_overlay").remove(), g = a('<div id="tips_overlay" class="tips_overlay"></div>').appendTo("body").show().dblclick(function () {
                d.close()
            }), h = d.TIP.fadein ? a(f).appendTo("body").fadeIn(300) : a(f).appendTo("body").show(), i = a("#tips_con"), k()
        };

        function k() {
            switch (d.TIP.noTitle && h.find("#tips_hd").remove(), d.TIP.requestType) {
                case"ajax":
                    a.get(d.TIP.target, function (a) {
                        i.html(a), l()
                    });
                    break;
                case"iframe":
                    var b = a("<iframe id='tipsIframe' style='width:" + d.TIP.iframeWH.width + "px;height:" + d.TIP.iframeWH.height + "px;' scrolling='auto' frameborder='0' src='" + d.TIP.target + "'></iframe>").appendTo(i.empty());
                    b.load(function () {
                        l()
                    });
                    break;
                default:
                    i.html(d.TIP.html), l()
            }
        }

        function l() {
            m(), "function" == typeof d.TIP.callBack ? d.TIP.callBack() : null, d.TIP.timeout && (j = setTimeout(d.close, d.TIP.timeout)), a(d.TIP.close).bind("click", d.close), a(document).unbind("keydown.nTips").bind("keydown.nTips", function (a) {
                return 27 === a.keyCode && d.close(), !0
            })
        }

        function m() {
            var b = i.width(), c = h.height();
            var f = "", j = 0;
            var k = a("body").height(), l = a(window).height();
            k = Math.max(k, l), g.height(k + 20), d.TIP.fixed && (e ? (f = "absolute", j = l / 2 + a(window).scrollTop(), a(window).bind("scroll", function () {
                j = l / 2 + a(window).scrollTop(), h.css("top", j)
            })) : (f = "fixed", j = l / 2)), h.css({
                position: f,
                width: b,
                left: "50%",
                top: j,
                "margin-left": -(b / 2),
                "margin-top": -(c / 2)
            })
        }

        function n() {
            d.TIP.fresh && window.location.reload()
        }

        return this.close = function () {
            clearTimeout(j), h.stop().fadeOut(300, function () {
                h.remove(), g.remove(), n()
            })
        }, a(this).click(function () {
            return d.showBox(), !1
        }), this
    }
}(jQuery);
