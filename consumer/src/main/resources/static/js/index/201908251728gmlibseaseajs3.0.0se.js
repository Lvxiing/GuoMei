
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


!function (e) {
    "use strict";
    var n = function (e, r) {
        return n["string" == typeof r ? "compile" : "render"].apply(n, arguments)
    };
    n.version = "2.0.4", n.openTag = "<%", n.closeTag = "%>", n.isEscape = !0, n.isCompress = !1, n.parser = null, n.render = function (e, r) {
        var t = n.get(e) || i({id: e, name: "Render Error", message: "No Template"});
        return t(r)
    }, n.compile = function (e, t) {
        function a(r) {
            try {
                return new s(r, e) + ""
            } catch (o) {
                return u ? i(o)() : n.compile(e, t, !0)(r)
            }
        }

        var c = arguments, u = c[2], l = "anonymous";
        "string" != typeof t && (u = c[1], t = c[0], e = l);
        try {
            var s = o(e, t, u)
        } catch (p) {
            return p.id = e || t, p.name = "Syntax Error", i(p)
        }
        return a.prototype = s.prototype, a.toString = function () {
            return s.toString()
        }, e !== l && (r[e] = a), a
    };
    var r = n.cache = {}, t = n.helpers = function () {
        var e = function (n, r) {
            return "string" != typeof n && (r = typeof n, "number" === r ? n += "" : n = "function" === r ? e(n.call(n)) : ""), n
        }, r = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, t = function (n) {
            return e(n).replace(/&(?![\w#]+;)|[<>"']/g, function (e) {
                return r[e]
            })
        }, i = Array.isArray || function (e) {
            return "[object Array]" === {}.toString.call(e)
        }, o = function (e, n) {
            if (i(e)) for (var r = 0, t = e.length; t > r; r++) n.call(e, e[r], r, e); else for (r in e) n.call(e, e[r], r)
        };
        return {$include: n.render, $string: e, $escape: t, $each: o}
    }();
    n.helper = function (e, n) {
        t[e] = n
    }, n.onerror = function (n) {
        var r = "Template Error\n\n";
        for (var t in n) r += "<" + t + ">\n" + n[t] + "\n\n";
        e.console && console.error(r)
    }, n.get = function (t) {
        var i;
        if (r.hasOwnProperty(t)) i = r[t]; else if ("document" in e) {
            var o = document.getElementById(t);
            if (o) {
                var a = o.value || o.innerHTML;
                i = n.compile(t, a.replace(/^\s*|\s*$/g, ""))
            }
        }
        return i
    };
    var i = function (e) {
        return n.onerror(e), function () {
            return "{Template Error}"
        }
    }, o = function () {
        var e = t.$each,
            r = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
            i = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,
            o = /[^\w$]+/g, a = new RegExp(["\\b" + r.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
            c = /^\d[^,]*|,\d[^,]*/g, u = /^,+|,+$/g, l = function (e) {
                return e.replace(i, "").replace(o, ",").replace(a, "").replace(c, "").replace(u, "").split(/^$|,+/)
            };
        return function (r, i, o) {
            function a(e) {
                return m += e.split(/\n/).length - 1, n.isCompress && (e = e.replace(/[\n\r\t\s]+/g, " ").replace(/<!--.*?-->/g, "")), e && (e = x[1] + p(e) + x[2] + "\n"), e
            }

            function c(e) {
                var r = m;
                if ($ ? e = $(e) : o && (e = e.replace(/\n/g, function () {
                    return m++, "$line=" + m + ";"
                })), 0 === e.indexOf("=")) {
                    var i = !/^=[=#]/.test(e);
                    if (e = e.replace(/^=[=#]?|[\s;]*$/g, ""), i && n.isEscape) {
                        var a = e.replace(/\s*\([^\)]+\)/, "");
                        t.hasOwnProperty(a) || /^(include|print)$/.test(a) || (e = "$escape(" + e + ")")
                    } else e = "$string(" + e + ")";
                    e = x[1] + e + x[2]
                }
                return o && (e = "$line=" + r + ";" + e), u(e), e + "\n"
            }

            function u(n) {
                n = l(n), e(n, function (e) {
                    e && !y.hasOwnProperty(e) && (s(e), y[e] = !0)
                })
            }

            function s(e) {
                var n;
                "print" === e ? n = T : "include" === e ? (v.$include = t.$include, n = O) : (n = "$data." + e, t.hasOwnProperty(e) && (v[e] = t[e], n = 0 === e.indexOf("$") ? "$helpers." + e : n + "===undefined?$helpers." + e + ":" + n)), w += e + "=" + n + ","
            }

            function p(e) {
                return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
            }

            var f = n.openTag, d = n.closeTag, $ = n.parser, g = i, h = "", m = 1,
                y = {$data: 1, $id: 1, $helpers: 1, $out: 1, $line: 1}, v = {},
                w = "var $helpers=this," + (o ? "$line=0," : ""), b = "".trim,
                x = b ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                E = b ? "$out+=$text;return $text;" : "$out.push($text);", T = "function($text){" + E + "}",
                O = "function(id,data){data=data||$data;var $text=$helpers.$include(id,data,$id);" + E + "}";
            e(g.split(f), function (e) {
                e = e.split(d);
                var n = e[0], r = e[1];
                1 === e.length ? h += a(n) : (h += c(n), r && (h += a(r)))
            }), g = h, o && (g = "try{" + g + "}catch(e){" + "throw {" + "id:$id," + "name:'Render Error'," + "message:e.message," + "line:$line," + "source:" + p(i) + ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')" + "};" + "}"), g = w + x[0] + g + "return new String(" + x[3] + ");";
            try {
                var S = new Function("$data", "$id", g);
                return S.prototype = v, S
            } catch (P) {
                throw P.temp = "function anonymous($data,$id) {" + g + "}", P
            }
        }
    }();
    "function" == typeof define ? define(function () {
        return n
    }) : "undefined" != typeof exports && (module.exports = n), e.template = n
}(this);
(function (e) {
    e.fn.curNav = function (a) {
        var n = {nav: ".mainnav", css: "cur"};
        var a = e.extend(n, a), t = a.nav, o = a.css;
        return this.each(function () {
            var a = e(t).find("a");
            for (var n = 0; n < a.length; n++) {
                var s = a.eq(n).attr("href");
                var i = document.location.href;
                if (i.indexOf(s) != -1) {
                    e(t).find("li").removeClass(o);
                    a.eq(n).parent("li").addClass(o)
                }
            }
        })
    }
})(jQuery);

(function () {
    var e = $(".tag_newpic");
    e.css("background", "url(" + e.data("bg") + ")")
})();
(function (e) {
    function t(e, t) {
        this.elements = {wrap: e, ul: e.children("ul"), li: e.children("ul").children("li")};
        this.len = this.elements.li.length;
        this.settings = t;
        this.cache = {allowgScroll: true};
        this.pos = this.index = 0;
        this.timer = false;
        this.init()
    }

    t.prototype = {
        init: function () {
            var e = this;
            e.elements.ul.append(e.elements.ul.html());
            e.settings.beforeCallback.call(e);
            e.setStyle();
            e.move();
            e.bind();
            e.settings.afterCallback.call(e);
            e.imgLoad()
        }, setStyle: function () {
            var e = this;
            switch (e.settings.type) {
                case"horizontal":
                    e.leftOrTop = "left";
                    e.oneWidth = e.settings.oneWidth ? e.settings.oneWidth : e.elements.li.eq(0).outerWidth();
                    e.elements.ul.width(e.oneWidth * e.len * 2);
                    break;
                case"vertical":
                    e.leftOrTop = "top";
                    e.oneWidth = e.settings.oneWidth ? e.settings.oneWidth : e.elements.li.eq(0).outerHeight();
                    e.elements.li.css({"float": "none", display: "block"});
                    e.elements.ul.height(e.oneWidth * e.len * 2);
                    break
            }
            e.wraperSize = e.oneWidth * e.len;
            e.stepWidth = e.oneWidth * e.settings.stepLen;
            e.elements.ul.css({position: "relative"})
        }, bind: function () {
            var t = this;
            e(t.settings.btnGo.left).bind("click", function () {
                clearInterval(t.timer);
                t.index++;
                t.moving(t.elements.ul[0], -t.stepWidth * t.index, function () {
                    t.move()
                })
            });
            e(t.settings.btnGo.right).bind("click", function () {
                clearInterval(t.timer);
                t.index--;
                if (t.index < 0) {
                    if (t.index === -1) {
                        t.pos = -t.stepWidth * t.len
                    }
                    t.index = t.len + t.index
                }
                t.moving(t.elements.ul[0], -t.stepWidth * t.index, function () {
                    t.move()
                })
            })
        }, move: function () {
            var e = this;
            if (e.settings.isAuto) {
                e.timer = setInterval(function () {
                    e.index++;
                    e.moving(e.elements.ul[0], -e.stepWidth * e.index)
                }, e.settings.speed)
            }
        }, moving: function (e, t, i) {
            var n = this;
            n.imgLoad();
            i = i || function () {
            };
            clearInterval(e.tLimer);
            e.tLimer = setInterval(function () {
                var l = (t - n.pos) / 6;
                l = l > 0 ? Math.ceil(l) : Math.floor(l);
                if (n.pos == t) {
                    clearInterval(e.tLimer);
                    i()
                }
                n.pos += l;
                e.style[n.leftOrTop] = n.pos % n.wraperSize + "px"
            }, 30)
        }, imgLoad: function () {
            var t = this;
            if (!t.settings.isImgLoad) {
                return false
            }
            var i = Math.abs(t.index % t.len) * t.settings.showNum;
            liNode = t.elements.ul.children().slice(t.index, t.len);
            liNode.each(function () {
                var i = e(this).find("img");
                if (i.attr(t.settings.dataOriginal)) {
                    i.attr("src", i.attr(t.settings.dataOriginal)).removeAttr(t.settings.dataOriginal)
                }
            })
        }
    };
    e.fn.gScroll = function (i) {
        i = e.extend({}, e.fn.gScroll.defaults, i);
        this.each(function () {
            new t(e(this), i)
        })
    };
    e.fn.gScroll.defaults = {
        oneWidth: null,
        isAuto: true,
        isImgLoad: false,
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
})(jQuery);
(function (t, e, o, i) {
    var s = t;
    var n = "dropdown", l = {
        hasCssLink: !1,
        item: "nav-item",
        trigger: !1,
        current: "active",
        bodyClass: "dropdown-bd",
        subBodyClass: "dropdown-sub",
        topspeed: !1,
        boundary: 10,
        enterDelay: 0,
        leaveDelay: 0,
        zIndex: 1e3,
        align: "bottom",
        left: null,
        top: null,
        submenuLeft: 0,
        submenuTop: 0,
        onchange: null,
        onmouseleave: null
    };

    function r(e, o) {
        this.el = t(e);
        this.options = t.extend({}, l, o);
        this._defaults = l;
        this._name = n;
        this.init()
    }

    t.extend(r.prototype, {
        init: function () {
            this.mouseLocs = [], this.lastDelayLoc = null, this.create(), this.bind()
        }, create: function () {
            var t = this.options;
            this.item = t.trigger ? this.el : this.el.find("." + t.item), this.body = this.el.find("." + t.bodyClass);
            var e = t.top;
            var o = t.left;
            "bottom" == t.align && null == t.top && (t.top = this.item.outerHeight()), "right" == t.align && (t.top = 0, null == t.left && (t.left = this.item.outerWidth())), (null != e || null != o) && this.body.css({
                position: "absolute",
                top: t.top,
                left: t.left,
                zIndex: t.zIndex
            }), this.el.find("." + t.subBodyClass).css({zIndex: t.zIndex + 1}), this.bodyOuterWidth = this.body.outerWidth(), this.bodyBorderWidth = 2 * this.getStyle(this.body[0], "borderWidth")
        }, bind: function () {
            var t = this;
            var e = this.options;
            var i = !1;
            var n, l;
            var r = 3;
            var u = null;
            var a = null;
            var d = !1;
            this.el.bind("mouseenter", function () {
                clearTimeout(n)
            }), this.el.bind("mouseleave", function () {
                i && (n = setTimeout(function () {
                    t.removeClass()
                }, e.leaveDelay)), e.onmouseleave && e.onmouseleave(s(this)), u = null
            }), this.item.bind("mouseenter", function () {
                if (d) return !1;
                var o = s(this);
                var n = function () {
                    d = !0, u = o.index(), t.removeClass(), o.addClass(e.current), i = !0, e.onchange && e.onchange(o)
                };
                l = setTimeout(function () {
                    0 == t.topspeed(o) && (n(), clearTimeout(a))
                }, e.enterDelay), e.topspeed && (a = setTimeout(function () {
                    u != o.index() && n()
                }, 700))
            }), this.item.bind("mouseleave", function () {
                clearTimeout(l), clearTimeout(a), d = !1
            }), this.el.find("." + e.subBodyClass).bind("mouseenter", function () {
                var o = t.bodyOuterWidth - t.bodyBorderWidth + e.submenuLeft;
                var i = t.getStyle(s(this)[0], "paddingLeft");
                o = s.browser.isIE6() ? o - i : o;
                var n = 0 + e.submenuTop;
                s(this).find("." + e.bodyClass).show().css({left: o, top: n})
            }).bind("mouseleave", function () {
                s(this).find("." + e.bodyClass).hide()
            }), e.topspeed && s(o).mousemove(function (e) {
                t.mouseLocs.push({x: e.pageX, y: e.pageY}), t.mouseLocs.length > r && t.mouseLocs.shift()
            })
        }, removeClass: function () {
            this.item.removeClass(this.options.current)
        }, getStyle: function (t, o) {
            if (t) {
                var i = e.getComputedStyle ? e.getComputedStyle(t, null)[o] : t.currentStyle[o];
                return i = parseInt(i), i || (i = 0), i
            }
        }, topspeed: function () {
            var t = this.options;
            if (!t.topspeed) return 0;
            var e = this.el;
            var o = e.offset(), i = {x: o.left, y: o.top}, s = {x: o.left + e.outerWidth(), y: i.y},
                n = {x: o.left, y: o.top + e.outerHeight()}, l = {x: o.left + e.outerWidth(), y: n.y};
            if (loc = this.mouseLocs[this.mouseLocs.length - 1], prevLoc = this.mouseLocs[0], !loc) return 0;
            if (prevLoc || (prevLoc = loc), prevLoc.x < o.left || prevLoc.x > l.x || prevLoc.y < o.top || prevLoc.y > l.y) return 0;
            if (this.lastDelayLoc && loc.x == this.lastDelayLoc.x && loc.y == this.lastDelayLoc.y) return 0;

            function r(t, e) {
                return (e.y - t.y) / (e.x - t.x)
            }

            var u = s, a = l;
            var d = r(loc, u), h = r(prevLoc, u), c = r(loc, a), f = r(prevLoc, a);
            return h > d && c > f ? prevLoc.x - i.x < t.boundary ? 0 : (this.lastDelayLoc = loc, 300) : (this.lastDelayLoc = null, 0)
        }
    });
    t.fn[n] = function (e) {
        this.each(function () {
            if (!t.data(this, "plugin_" + n)) {
                t.data(this, "plugin_" + n, new r(this, e))
            }
        });
        return this
    }
})(jQuery, window, document);
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
;/*! Mon Jul 01 2019 08:59:18 GMT+0800 (CST) */
!function (e) {
    var o = {};

    function t(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {i: n, l: !1, exports: {}};
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    t.m = e, t.c = o, t.d = function (e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {enumerable: !0, get: n})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & o && "string" != typeof e) for (var r in e) t.d(n, r, function (o) {
            return e[o]
        }.bind(null, r));
        return n
    }, t.n = function (e) {
        var o = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function (e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, t.p = "", t(t.s = 0)
}(
    [function (e, o, t) {
        var n = t(1);
        try {
            var r = "", c = /([?&])cmpid=(.+?)(&(.+))?(#.*)?$/;
            r = (q = window.location.href.match(c)) && q[2] || "";
            var a = "https://report.gome.com.cn/sa?project=production", d = !1,
                i = navigator.userAgent.match(/(gome(plus|backup)|GomeSeller)?\/[iphone\/]{0,7}(\d*)\//);
            d = 126 != +(i ? i[3] : -1)
        } catch (H) {
            console.log(H)
        }
        !function (e) {
            var o = e.sdk_url, t = e.name, n = window, r = document, c = "script", a = null, d = null;
            n.sensorsDataAnalytic201505 = t, n[t] = n[t] || function (e) {
                return function () {
                    (n[t]._q = n[t]._q || []).push([e, arguments])
                }
            };
            for (var i = ["track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "getAppStatus"], m = 0; m < i.length; m++) n[t][i[m]] = n[t].call(null, i[m]);
            n[t]._t || (a = r.createElement(c), d = r.getElementsByTagName(c)[0], a.async = 1, a.src = o, a.setAttribute("charset", "UTF-8"), d.parentNode.insertBefore(a, d), n[t].para = e)
        }({
            sdk_url: "https://js.gomein.net.cn/sitemonitor/tjs/sensorsdata/sensorsdata.min.js",
            heatmap_url: "https://js.gomein.net.cn/sitemonitor/tjs/sensorsdata/heatmap.min.js",
            name: "GomeSa",
            server_url: a,
            use_app_track: d,
            show_log: !1,
            heatmap: {
                custom_property: function (e) {
                    if (e.getAttribute("data-code")) return {data_code: e.getAttribute("data-code")}
                }, setContent: function (e) {
                    return e.getAttribute("data-code") ? e.getAttribute("data-code") : "没有data-code"
                }
            },
            source_channel: ["cmpid"]
        });
        try {
            var m, u, l = function (e) {
                    var o, t = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (o = document.cookie.match(t)) ? decodeURIComponent(o[2]) : null
                }, s = null, w = (r = null, null), h = null, p = null, k = null, g = null, f = null, b = null, _ = null,
                y = window.location.host, v = [{key: "dc-bi", rule: /^(.+\.)*cb\.ds\.gome\.com\.cn/}, {
                    key: "dc-big",
                    rule: /^(.+\.)*bigdata\.ds\.gome\.com\.cn/
                }, {key: "dc-2", rule: /^(.+\.)*m\.gome\.com\.cn/}, {key: "dc-6", rule: /^(.+\.)*gomehigo\.hk/}, {
                    key: "dc-10",
                    rule: /^(.+\.)*diy\.gome\.com\.cn/
                }, {key: "dc-12", rule: /^(.+\.)*m\.gomehigo\.hk/}, {key: "dc-13", rule: /^(.+\.)*gomegj\.com/}, {
                    key: "dc-14",
                    rule: /^(.+\.)*wap\.gomegj\.com/
                }, {key: "dc-25", rule: /^(.+\.)*gomehome\.com/}, {key: "dc-26", rule: /^(.+\.)*gomeart\.com/}, {
                    key: "dc-1",
                    rule: /^(.+\.)*gome\.com\.cn/
                }, {key: "dc-7", rule: /^(.+\.)*atguat\.com\.cn/}];
            !function () {
                var e = document.getElementById("application-site");
                if (!(s = e && e.getAttribute("tid"))) for (var o = 0, t = v.length; o < t; o++) if (v[o].rule.exec(y)) return s = v[o].key;
                s = s || "未知站点"
            }();
            var q, S = l("sensorsdata2015jssdkcross"), j = (S ? JSON.parse(S) : {}).props, P = j && j._latest_cmpid;
            if (r = (q = decodeURIComponent(window.location.href).match(c)) && q[2] || null) ; else if (window.document.referrer) {
                for (var O = -1, U = 0, x = n.seoUrls.length; U < x; U++) {
                    var R = n.seoUrls[U], A = new RegExp(R.h), I = decodeURIComponent(window.document.referrer).match(A);
                    if (I) {
                        h = I[0], O = U;
                        break
                    }
                }
                ~O ? (p = "weizhi", r = "".concat(w = "seo", "_").concat(h, "_").concat(p), GomeSa.register({_latest_cmpid: r})) : r = P ? decodeURIComponent(P) : P
            } else r = P ? decodeURIComponent(P) : P;
            if (r) {
                var G = r.split("_");
                w = G[0], h = G[1], p = G[2]
            }
            var C = window.location.href.match(/([?&])intcmp=(.+?)(&(.+))?(#.*)?$/);
            if ((k = C && C[2]) && "undefined" !== k) {
                var E = k.split("-");
                f = E[0], g = E[1] + "-" + E[2], b = E[1], _ = E[2]
            }
            var $ = window.location.href.match(/([?&])search_id=(.+?)(&(.+))?(#.*)?$/);
            m = $ && $[2];
            var N = window.location.href.match(/([?&])mid=(.+?)(&(.+))?(#.*)?$/) || window.location.href.match(/([?/])mshop-(.+?)(&(.+))?(#.*)?(\..*)?$/),
                M = N && N[2], z = l("__gmwsid"), T = l("DNY_USER_ID"), D = l("share_userId"), B = l("punionid");
            GomeSa.registerPage({
                tid: s,
                $url: decodeURIComponent(window.location.href),
                $referrer: decodeURIComponent(document.referrer),
                cmpid: r,
                intcmp: k,
                url_data_code: g,
                now_page: f,
                module_id: b,
                position: _,
                first_channel: w,
                second_channel: h,
                third_channel: p,
                mshop_id: M,
                unionid: z,
                sharer_userid: D,
                sharer_unionid: B,
                userid: T
            }), (u = l("SSO_USER_ID")) && GomeSa.login(u), GomeSa.quick("autoTrack", {search_id: m}), GomeSa.setProfile({_latest_cmpid: r}), document.onclick = function (e) {
                var o = (e = e || window.e).target || e.srcElement, t = o.parentNode;
                ~o.className.indexOf("submit_element") ? GomeSa.quick("trackHeatMap", o) : ~t.className.indexOf("submit_element") && GomeSa.quick("trackHeatMap", t)
            }
        } catch (H) {
            console.log(H)
        }
    }, function (e, o) {
        e.exports = {
            seoUrls: [{h: "www.baidu.com", k: ["word", "wd"]}, {h: "www.so.com", k: ["m"]}, {
                h: "m.baidu.com",
                k: ["word", "wd"]
            }, {h: "www.sogou.com", k: ["query"]}, {h: "m.so.com", k: ["m"]}, {
                h: "cn.bing.com",
                k: ["q"]
            }, {h: "m.sogou.com", k: ["keyword"]}, {h: "so.m.sm.cn", k: ["q"]}, {
                h: "wap.sogou.com",
                k: ["keyword"]
            }, {h: "yz.m.sm.cn", k: ["q"]}, {h: "www.bing.com", k: ["q"]}, {h: "m.sm.cn", k: ["q"]}, {
                h: "m.yz.sm.cn",
                k: ["q"]
            }, {h: "m.sp.sm.cn", k: ["q"]}, {h: "search.yahoo.com", k: ""}, {
                h: "www.haosou.com",
                k: ["q"]
            }, {h: "3g.baidu.com", k: ["word", "wd"]}, {h: "www.google-cn.net", k: ["q"]}, {
                h: "baidu.mobi",
                k: ["word"]
            }, {h: "wap.baidu.com.cn", k: ["word"]}, {h: "wap.baidu.com", k: ["word", "wd"]}, {
                h: "m.haosou.com",
                k: ["q"]
            }, {h: "so.com", k: ["m"]}, {h: "m.sj.sm.cn", k: ["q"]}, {h: "m.sa.sm.cn", k: ["q"]}, {
                h: "m.xm.sm.cn",
                k: ["q"]
            }, {h: "www.youdao.com", k: ["q"]}, {h: "m.youdao.com", k: ["q"]}, {
                h: "www1.baidu.com",
                k: ["word", "wd"]
            }, {h: "www5.baidu.com", k: ["word", "wd"]}, {h: "baidu.cn", k: ["word", "wd"]}, {
                h: "m.baidu.cn",
                k: ["word", "wd"]
            }, {h: "m1.baidu.com", k: ["word", "wd"]}, {h: "m3.baidu.com", k: ["word", "wd"]}, {
                h: "m5.baidu.com",
                k: ["word", "wd"]
            }, {h: "m9.baidu.com", k: ["word", "wd"]}, {h: "3g.baidu.cn", k: ["word", "wd"]}, {
                h: "wap.baidu.cn",
                k: ["word", "wd"]
            }, {h: "bzclk.baidu.com", k: ["word", "wd"]}, {
                h: "baidu.com",
                k: ["word", "wd"]
            }, {h: "(www.)?google(.com?)?(.[a-z]{2})?", k: ["q"]}]
        }
    }]);
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
            if (t == "order") {

            } else if (t == "product") {

            } else {

            }
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
(function (e, s, i, t) {
    "use strict";
    var a = "autopoint", r = {url: "", listHoverCSS: "hover", topoffset: 10}, o, n, h = e.cookie("__clickidc"), c = "";

    function l(s, i) {
        this.$searchTips = e("#searchTips");
        this.$searchTipsList = e("#searchTipsList");
        this.$searchTypeDropdown = e("#search-type-dropdown");
        this.$searchType = this.$searchTypeDropdown.find(".search-type");
        this.$searchTypeSelected = this.$searchTypeDropdown.find(".search-type-selected");
        this.$searchTypeList = this.$searchTypeDropdown.find(".search-type-list");
        this.$elem = e(s);
        this.options = e.extend({}, r, i);
        this.highlightIndex = null;
        this.lastKeyword = !1;
        this.continueInputTimer = !1;
        this.leaveFocusDivTimer = !1;
        this.isOnFocusDiv = !1;
        this.init()
    }

    e.extend(l.prototype, {
        init: function () {
            this.$elem.attr("alt", e.trim(this.$elem.val()));
            this.create();
            e("#his_title").remove();
            this.bind();
            this.showSearchType()
        }, showSearchType: function () {
            var e = this;
            var s = e.getQueryString("searchType");
            var i = "";
            switch (s) {
                case"group":
                    i = e.getQueryString("word");
                    if (i) {
                        this.$searchTypeSelected.text("圈子").attr("data-selected", "group");
                        e.$elem.val(i)
                    }
                    break;
                case"topic":
                    i = e.getQueryString("word");
                    if (i) {
                        this.$searchTypeSelected.text("话题").attr("data-selected", "topic");
                        e.$elem.val(i)
                    }
                    break;
                case"shop":
                    i = e.getQueryString("shop");
                    if (i) {
                        this.$searchTypeSelected.text("店铺").attr("data-selected", "shop");
                        e.$elem.val(i)
                    }
                    break;
                default:
                    this.$searchTypeSelected.text("商品").attr("data-selected", "goods");
                    i = e.getQueryString("question");
                    if (i) {
                        e.$elem.val(i)
                    }
            }
        }, create: function () {
            this.$searchTipsList.html('<li class="related-search related-shop-search">' + '    <a href="javascript:void(0);">' + '        <i></i><span>找“</span><em class="related-keyword"></em><span>”相关店铺</span></a>' + "    </a>" + "</li>");
            this.$searchTips.append('<div class="closeSearch" id="closeSearch"><span>关闭</span></div>');
            this.$searchTips.append('<div class="closeSearch delHeaderHistorySearch" style="display: none;" id="delHeaderHistorySearch"><span>全部删除</span></div>')
        }, bind: function () {
            var s = this;
            e(i).on("click", function () {
                if (!s.isOnFocusDiv) {
                    s.hideSearchTips()
                }
            });
            s.$elem.on("mouseenter", function () {
                s.mouseenterFocusDiv()
            }).on("mouseleave", function () {
                s.mouseleaveFocusDiv()
            }).on("keyup", function (i) {
                if (s.$searchTypeSelected.attr("data-selected") === "goods") {
                    var t = e.trim(s.$elem.val());
                    s.handleKeyup(i);
                    e("#delHeaderHistorySearch").hide();
                    e("#closeSearch").show();
                    if (!t) {
                        s.renderDataForHistorySearch()
                    }
                }
            }).on("focus click", function () {
                if (s.$searchTypeSelected.attr("data-selected") === "goods") {
                    var i = e.trim(s.$elem.val());
                    if (i) {
                        e("#delHeaderHistorySearch").hide();
                        e("#closeSearch").show();
                        s.toggleRelatedSearchItem(i);
                        s.$searchTipsList.find(".related-keyword").text(i);
                        s.fetchDataEntryForSearch(i)
                    } else {
                        s.renderDataForHistorySearch()
                    }
                }
            });
            this.$searchTips.on("mouseenter", function () {
                s.mouseenterFocusDiv()
            }).on("mouseleave", function () {
                s.mouseleaveFocusDiv()
            }).on("click", "#closeSearch", function () {
                s.hideSearchTips()
            }).on("click", "#delHeaderHistorySearch span", function () {

                s.hideSearchTips()
            });
            this.$searchTipsList.on("click", ".his_del", function (i) {
                i.stopPropagation();
                var t = e(this).parents("a"), a = t.attr("type");
                if (a == 1) {
                    var r = t.attr("word"), o = JSON.parse(e.cookie("headerSearchHistory"));
                    for (var n = 0; n < o.length; n++) {
                        if (o[n] === r) {
                            o.splice(n, 1)
                        }
                    }

                    e(this).closest("li").remove();
                    if (o.length == 0) {
                        s.hideSearchTips()
                    }
                } else {
                    s.deleteTipItem(e(this))
                }
            }).on("click", "li", function () {
                s.submitSearchDataForGoods(e(this))
            }).on("mouseenter", "li", function () {
                s.mouseenterTipItem(e(this))
            }).on("mouseleave", "li", function () {
                s.mouseleaveTipItem(e(this))
            });
            this.$searchTypeList.on("click", "li", function () {
                s.$searchTypeSelected.text(e(this).text()).attr("data-selected", e(this).attr("data-selector"));
                s.$searchTypeList.hide();
                if (s.$searchTypeSelected.attr("data-selected") === "goods" && s.$elem.val() === "") {
                    e("#keyLabel").show()
                } else {
                    e("#keyLabel").hide()
                }
            });
            this.$searchTypeList.hover(function () {
                o && clearTimeout(o)
            }, function () {
                s.$searchTypeList.hide()
            });
            this.$searchType.hover(function () {
                n = setTimeout(function () {
                    s.$searchTypeList.show()
                }, 200)
            }, function () {
                n && clearTimeout(n);
                o = setTimeout(function () {
                    s.$searchTypeList.hide()
                }, 50)
            })
        }, handleKeyup: function (e) {
            var s = this, i = e.keyCode, t = this.$searchTips.css("display") !== "none" ? true : false;
            switch (i) {
                case 38:
                    if (t) s.selectTipItem("KEY_UP");
                    break;
                case 40:
                    if (t) s.selectTipItem("KEY_DOWN");
                    break;
                case 13:
                    var a = null;
                    if (s.highlightIndex !== null) {
                        this.$searchTipsList.find("li").eq(s.highlightIndex)
                    }
                    if (t) s.submitSearchDataForGoods(a);
                    break;
                case 27:
                    if (t) s.hideSearchTips();
                    break;
                case 37:
                    break;
                case 39:
                    break;
                default:
                    s.handleKeywordInput()
            }
        }, handleKeywordInput: function () {
            var s = this, i = e.trim(s.$elem.val());
            if (i === s.$elem.attr("alt")) {
                return false
            }
            this.$searchTipsList.find(".related-keyword").text(i);
            s.toggleRelatedSearchItem(i);
            s.$elem.attr("alt", i);
            if (s.continueInputTimer) clearTimeout(s.continueInputTimer);
            s.continueInputTimer = setTimeout(function () {
                if (i === s.lastKeyword) {
                    return false
                }
                s.lastKeyword = i;
                s.fetchDataEntryForSearch(i)
            }, 80)
        }, fetchDataEntryForSearch: function (e) {
            var i = this;
            if (s.loginData.loginStatus > 1) {
                i.fetchDataForSearch(e)
            } else {
                s.signData.login({}, function (t) {
                    s.signData.setLoginStyle(t);
                    i.fetchDataForSearch(e)
                });
                i.$searchTipsList.find("li:not(.related-search)").remove()
            }
        }, fetchDataForSearch: function (i) {
            i = i.replace(/[()'";,{}~!@#$%^*(){}?\|<>.]/g, "");
            c = s.loginData.loginId;
            var t = this,
                a = t.options.url + "&module=searchSuggest" + "&query=" + encodeURIComponent(i) + "&jp=true&user=" + c;
        }, renderDataForSearch: function (e, s) {
            var i = e.length, t, a, r = [], o = 0, n = s === "" ? 10 : 2;
            this.highlightIndex = null;
            if (e && e.length > 0) {
                for (var h = 0; h < i; h++) {
                    t = e[h];
                    if (t[2] === 1) {
                        a = '<li class="search-item" category="' + t[3].cat[1] + '" keyword="' + t[0] + '">' + '   <span class="fs" style="float:left;">在<b>' + t[3].cat[3] + '</b><i>&gt;</i><a class="akeyword" href="javascript:void(0);">' + t[3].cat[0] + "</a>分类中搜索</span>" + '   <span class="fr color-b">约' + t[3].cat[2] + "条</span>" + "</li>"
                    } else if (t[2] === -1) {
                        var c = o >= n ? 'style="display:none;"' : "";
                        a = '<li class="J-history-item" ' + c + ">" + '   <a class="hisakeyword" href="javascript:void(0);">' + '       <span class="fl">' + decodeURIComponent(t[0]) + "</span>" + '       <span class="fr color-b his_txt" style="display:block">搜索历史</span>' + '       <span class="fr color-b his_del" style="display:none">删除</span>' + "   </a>" + "</li>";
                        o++
                    } else {
                        a = "<li>" + '   <a class="akeyword" href="javascript:void(0);">' + '   <span class="fl">' + t[0] + '</span><span class="fr color-b">约' + t[1] + "条</span>" + "   </a>" + "</li>"
                    }
                    r.push(a)
                }
                this.$searchTipsList.find("li:not(.related-search)").remove();
                this.$searchTipsList.prepend(r.join(""));
                this.$searchTipsList.find("li.search-item:last").css("border-bottom", "1px solid #EEEEEE");
                this.$searchTips.show()
            } else {
                if (s === "") {
                    this.hideSearchTips()
                } else {
                    this.$searchTipsList.find("li:not(.related-search)").remove();
                    this.$searchTips.show()
                }
            }
        }, renderDataForHistorySearch: function () {
            var s = e.cookie("headerSearchHistory"), i = "", t = [];
            if (s) {
                s = JSON.parse(s) || [];
                var a = s.length;
                if (a > 0) {
                    for (var r = 0; r < a; r++) {
                        i = '<li class="J-history-item">' + '   <a class="hisakeycookieword" href="javascript:void(0);" type="1" word="' + s[r] + '">' + '       <span class="fl">' + s[r] + "</span>" + '       <span class="fr color-b his_txt" style="display:block">搜索历史</span>' + '       <span class="fr color-b his_del" style="display:none">删除</span>' + "   </a>" + "</li>";
                        t.push(i)
                    }
                    this.isOnFocusDiv = true;
                    this.toggleRelatedSearchItem("");
                    this.$searchTipsList.find("li:not(.related-search)").remove();
                    this.$searchTipsList.prepend(t.join(""));
                    e("#delHeaderHistorySearch").show();
                    e("#closeSearch").hide();
                    this.$searchTips.show()
                }
            }
        }, hideSearchTips: function () {
            this.$searchTipsList.find("li:not(.related-search)").remove();
            this.$searchTips.hide()
        }, mouseenterTipItem: function (e) {
            var s = this;
            s.removeAllTipsHoverCss();
            e.addClass(s.options.listHoverCSS).find("a:first").addClass(s.options.listHoverCSS);
            if (e.hasClass("J-history-item")) {
                e.find(".his_txt").hide().end().find(".his_del").show()
            }
            s.highlightIndex = e.index()
        }, mouseleaveTipItem: function (e) {
            var s = this;
            e.removeClass(s.options.listHoverCSS).find("a:first").removeClass(s.options.listHoverCSS);
            if (e.hasClass("J-history-item")) {
                e.find(".his_txt").show().end().find(".his_del").hide()
            }
        }, mouseenterFocusDiv: function () {
            var e = this;
            e.isOnFocusDiv = true;
            if (e.leaveFocusDivTimer) clearTimeout(e.leaveFocusDivTimer)
        }, mouseleaveFocusDiv: function () {
            var e = this;
            e.isOnFocusDiv = false;
            e.leaveFocusDivTimer = setTimeout(function () {
                e.hideSearchTips()
            }, 300)
        }, removeAllTipsHoverCss: function () {
            this.$searchTipsList.find("li").removeClass(this.options.listHoverCSS).find("a:first").removeClass(this.options.listHoverCSS)
        }, submitSearchDataForGoods: function (s) {
            var i = this;
            var t = "";
            var a = encodeURIComponent(e.trim(i.$elem.val()));
            var r = "suggest";
            if (s !== null) {
                var o = s.index() + 1;
                if (s.hasClass("search-item")) {
                    var n = s.attr("category");
                    t = "";
                    location.href = t;
                    return false
                }
                if (s.hasClass("related-shop-search")) {
                    var h = s.find(".related-keyword").text();
                    t = "//search" + gomeplusDomain + "/search?shop=" + encodeURIComponent(h);
                    location.href = t;
                    return false
                }
                if (s.hasClass("J-history-item")) {
                    r = "history"
                }
                e("#keyLabel").hide();
                i.$elem.attr({pos: o, sq: a, mode: r});
                i.$elem.val(i.getPointWord(s))
            }
        }, selectTipItem: function (e) {
            var s = this, i = this.$searchTipsList.find("li:visible"), t = i.length, a, r;
            if (e === "KEY_UP") {
                if (s.highlightIndex === null) {
                    s.highlightIndex = -1
                }
                if (s.highlightIndex !== -1) {
                    s.highlightIndex--
                } else {
                    s.highlightIndex = t - 1
                }
            }
            if (e === "KEY_DOWN") {
                if (s.highlightIndex === null) {
                    s.highlightIndex = -1
                }
                s.highlightIndex++;
                if (s.highlightIndex === t) {
                    s.highlightIndex = 0
                }
            }
            a = i.eq(s.highlightIndex);
            if (!a.hasClass("related-search")) {
                r = s.getPointWord(a);
                this.$searchTipsList.find(".related-keyword").text(r);
                s.toggleRelatedSearchItem(r);
                s.$elem.val(r);
                s.$elem.attr("alt", r)
            }
            s.mouseenterTipItem(a)
        }, deleteTipItem: function (s) {
            var i = this, t = s.siblings(".fl").text(),
                a = i.options.url + "&module=searchSuggest" + "&query=" + encodeURIComponent(t) + "&jp=true" + "&user=" + c + "&hisDel=1";
            var r = s.closest("li").siblings(".J-history-item:hidden:first");
            s.closest("li").remove();
            r.show();
            if (this.$searchTipsList.find("li:visible").length === 0) {
                i.hideSearchTips()
            }
            if (e("#keyLabel").css("display") === "block") {
                var o = this.$searchTipsList.find(".related-search");
                o.find(".related-keyword").text(e("#keyLabel").text());
                o.show()
            }

        }, getPointWord: function (e) {
            return e.attr("keyword") ? e.attr("keyword") : e.find("span:first").text()
        }, toggleRelatedSearchItem: function (e) {
            if (e === "") {
                this.$searchTipsList.find(".related-search").hide()
            } else {
                this.$searchTipsList.find(".related-search").show()
            }
        }, getQueryString: function (e) {
            var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
            var t = s.location.search.substr(1).match(i);
            if (t != null) {
                return decodeURIComponent(t[2])
            }
            return null
        }
    });
    e.fn[a] = function (s) {
        this.each(function () {
            if (!e.data(this, "plugin_" + a)) {
                e.data(this, "plugin_" + a, new l(this, s))
            }
        });
        return this
    }
})(jQuery, window, document);
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
    if (a == "" || a == null) {

    } else {

    }
});
(function (t) {
    var a = function () {
        var t = n() ? "/qiyegou" : "/home";
        return ""
    }();
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

    // t.mCart = {
    //     getMcartNum: function (t) {
    //         if (t) {
    //             t = t
    //         } else {
    //             t = 0
    //         }
    //         $("#gome-aside-cart").find(".car_num s").html(t);
    //         $(".gome-bar-btn-cart").find(".car_num s").html(t);
    //         $("#commerceItemQuantityId").html(t);
    //         if (t != 0) {
    //             if (n()) {
    //                 $("#hdrcarttext").text("企业购物车")
    //             } else {
    //                 $("#hdrcarttext").text("我的购物车")
    //             }
    //             $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").css("background", "#dd00a7");
    //             $("#gome-bar-btn-cart .caricon,#gome-aside-cart .caricon").addClass("caricon_num");
    //             $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").removeClass("car_num_0").addClass("car_num_more");
    //             $(".mygome-side").addClass("havecount")
    //         } else {
    //             $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").css("background", "#A5A5A5");
    //             $("#gome-bar-btn-cart .caricon,#gome-aside-cart .caricon").removeClass("caricon_num");
    //             $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").addClass("car_num_0").removeClass("car_num_more");
    //             $(".mygome-side").removeClass("havecount");
    //             if (n()) {
    //                 $("#hdrcarttext").text("企业购物车")
    //             } else {
    //                 $("#hdrcarttext").text("我的购物车")
    //             }
    //             return
    //         }
    //         $("#commerceItemQuantityId").html(t);
    //         if (t > 0) {
    //             $("[data-cart='mincart'],.cart").addClass("havecount");
    //             if (n()) {
    //                 $("#hdrcarttext").text("企业购物车")
    //             } else {
    //                 $("#hdrcarttext").text("我的购物车")
    //             }
    //         }
    //     }, lazyCart: function (a) {
    //         var e = c() || 0;
    //         if (a == false) {
    //             mCart.getMcartNum(e)
    //         } else if (c() && c() >= 0) {
    //             t.mCart.getMcartNum(c())
    //         } else {
    //             mCart.getCartNumber()
    //         }
    //     }, lazyCartDom: function (t) {
    //         if (t.success === true) {
    //             i(t.data);
    //             var a = c();
    //             mCart.getMcartNum(a)
    //         } else {
    //             mCart.getMcartNum(0);
    //             return
    //         }
    //     }, isQyg: n
    // };
    // $(function u() {
    //     if (window.$page) {
    //         t.mCart.lazyCart(false)
    //     } else {
    //         t.mCart.lazyCart(true)
    //     }
    // })
})(window);
(function (t) {
    function e() {
        if (typeof minCartType !== "undefined" && minCartType === "QYG") {
            return true
        }
        return false
    }

    var i = e() ? "/qiyegou" : "/home";
    var n = '<div class="mini-products">                        <h2 class="hdrcartitle">最近加入的商品：</h2>                        <ul class="mini-nProductLists">                            <% for(var i=0;i<miniCommerceItemsGroupVOs.length;i++ ) { %>                            <li class="mini-list clearfix">                                <% var miniVOs = miniCommerceItemsGroupVOs[i] || {}; %>                                <dl class="nProduct-huod realMini">                                    <% if(miniVOs.promotionHeads && miniVOs.promotionHeads.length > 0 ) { %>                                    <% if(!(miniVOs.promotionHeads[0] && miniVOs.promotionHeads[0].type=="TZ")) {%>                                    <dd data-sub="tit-sub" class="huod-hd clearfix">                                        <% for(var k=0; k< miniVOs.promotionHeads.length; k++) {%>                                        <% var promotionHeadItem = miniVOs.promotionHeads[k] || {},label = promotionHeadItem.label ;%>                                        <div class="pCol-name-huod">                                            <% if (promotionHeadItem.type === "MJ") {%>                                                <% var promotionTxt = ""; %>                                                <% if(promotionHeadItem.satisfied) {%>                                                    <span class="ico-l">满减</span>                                                    <% promotionTxt = "活动商品已购满" + ($toFixed(promotionHeadItem.preC)) + "元（已减" + ($toFixed(promotionHeadItem.postC)) + "元）";%>                                                <% } else if (promotionHeadItem.validKindNum) {%>                                                     <span class="ico-l-gray"><i></i>满减</span>                                                     <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preC)) + "元不同种类商品，即可享受满减促销活动";%>                                                <% } else {%>                                                    <span class="ico-l-gray"><i></i>满减</span>                                                    <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preC)) + "元，即可享受满减";%>                                                <% } %>                                                <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>                                            <% } else if (promotionHeadItem.type === "ZDZ"|| promotionHeadItem.type === "ZD") {%>                                                <% var promotionTxt = ""; %>                                                <% if(promotionHeadItem.satisfied) {%>                                                    <span class="ico-l">满折</span>                                                    <% promotionTxt = "活动商品已购满" + (promotionHeadItem.preC || "0") + "件（已减" + ($toFixed(promotionHeadItem.postC)) + "元）";%>                                                 <% } else if (promotionHeadItem.validKindNum) {%>                                                    <span class="ico-l">满折</span>                                                    <% promotionTxt = "购买" + (promotionHeadItem.preC || "0") + "件不同种类商品，即可享受满折活动";%>                                                 <% } else {%>                                                    <span class="ico-l-gray"><i></i>满折</span>                                                    <% promotionTxt = "活动商品购满" + (promotionHeadItem.preC || "0") + "件，即可享受满折";%>                                                <% } %>                                                <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>                                            <% } else {%>                                                <span><%=$showTypeTitle(promotionHeadItem) %></span>                                            <% } %>                                        </div>                                        <%} %>                                        <% if(miniVOs.miniGroupSummaryVO && miniVOs.miniGroupSummaryVO.promtion && miniVOs.miniGroupSummaryVO.subAmount > 0) {%>                                        <p style="padding-left:8px;">                                            小计：<span class="yuan" style="margin-right:10px;"> <b>¥</b><%= $toFixed(miniVOs.miniGroupSummaryVO.subAmount) %></span>                                            <% if(miniVOs.miniGroupSummaryVO.promoDiscAmount > 0) {%>                                            <span class="nRed">已减：<%= $toFixed(miniVOs.miniGroupSummaryVO.promoDiscAmount)%>元</span>                                            <% } %>                                        </p>                                        <%} %>                                    </dd>                                    <%} %>                                    <%} %>                                    <% var commerceItemsGroup = miniVOs.commerceItemsGroup || [];%>                                    <% if(miniVOs.promotionHeads && miniVOs.promotionHeads.length > 0 && miniVOs.promotionHeads[0].type=="TZ"){ %>                                        <%if(commerceItemsGroup.length>0 && commerceItemsGroup[0]){%>                                        <dd class="mini-huod-list min-sideline-list clearfix">                                            <div class="mini-product-info clearfix">                                                <div class="mini-pCol-img">                                                    <a target="_blank" title="<%= commerceItemsGroup[0].vProductName %>" href="<%= commerceItemsGroup[0].vUrl %>">                                                        <img alt="" src="<%= commerceItemsGroup[0].vImageURL %>" width="50" height="50"></a>                                                </div>                                                <div class="mini-pCol-name">                                                    <p>                                                        <a target="_blank" class="nMinCartBlue" title="<%= commerceItemsGroup[0].vProductName %>" href="<%= commerceItemsGroup[0].vUrl %>">                                                            【套装】<%=commerceItemsGroup[0].vProductName  %></a>                                                    </p>                                                </div>                                                <div class="mini-pCol-row">                                                    <% if(miniVOs.miniGroupSummaryVO && miniVOs.miniGroupSummaryVO.subAmount){ %>                                                        <span class="yuan"><b>¥<%= $toFixed(miniVOs.miniGroupSummaryVO.subAmount) %></b></span>                                                    <% }%>                                                    <span  class="quantity"><%= commerceItemsGroup[0].quantity %></span>                                                    <span isClick="" mcart-count mcart-count-min="1"                                                        mcart-count-change-interval="100"                                                        mcart-change-count                                                        data-cid="<%= commerceItemsGroup[0].itemId %>"                                                        data-limit="<%= commerceItemsGroup[0].limitNum %>"class="mcart-count">                                                            <a href="javascript:;" type="down" mcart-count-sub class="mcart-count-btn mcart-count-sub  <% if(commerceItemsGroup[0].quantity ==1) {%>mcart-count-disabled<% } %> ">-</a>                                                            <a href="javascript:;" type="up" mcart-count-add class=" <% if(commerceItemsGroup[0].quantity >= commerceItemsGroup[0].limitNum  ) {%>mcart-count-disabled<% } %>  mcart-count-btn mcart-count-add  ">+</a>                                                            <div class="mcart-count-input"><input  maxlength="3" name="num" type="text" value="<%= commerceItemsGroup[0].quantity %>">                                                            </div>                                                    </span>                                                    <a class="nLowLeight miniDel" href="javascript:void(0)" title="删除" data-itemid="<%= commerceItemsGroup[0].itemId %>">删除</a>                                                </div>                                            </div>                                                                                </dd>                                        <%}%>                                    <%}else{%>                                        <% for(var j=0; j< commerceItemsGroup.length; j++) {%>                                        <% var commerceItem = commerceItemsGroup[j] || {}; %>                                        <dd class="mini-huod-list min-sideline-list clearfix">                                            <div class="mini-product-info clearfix">                                                <div class="mini-pCol-img">                                                    <a  style="position: relative;" target="_blank" title="<%= commerceItem.itemName %>" href="<%= commerceItem.itemURL %>">                                                       <%=$showTuanProductTip(commerceItem) %>                                                       <img alt="" src="<%= commerceItem.itemImageURL %>" width="50" height="50"></a>                                                </div>                                                <div class="mini-pCol-name">                                                    <p>                                                        <a target="_blank" class="nMinCartBlue" title="<%= commerceItem.itemName %>" href="<%= commerceItem.itemURL %>"><%=$cutstr(commerceItem.itemName,56)  %></a>                                                    </p>                                                </div>                                                <div class="mini-pCol-row">                                                    <span class="yuan"><b>¥<%= $toFixed(commerceItem.salePrice) %></b></span>                                                    <span  class="quantity"><%= commerceItem.quantity %></span>                                                    <span isClick="" mcart-count mcart-count-min="1"                                                        mcart-count-change-interval="100"                                                        mcart-change-count                                                        data-cid="<%= commerceItem.itemId %>"                                                        data-limit="<%= commerceItem.limitNum %>"class="mcart-count">                                                            <a href="javascript:;" type="down" mcart-count-sub class="mcart-count-btn mcart-count-sub  <% if(commerceItem.quantity ==1) {%>mcart-count-disabled<% } %> ">-</a>                                                            <a href="javascript:;" type="up" mcart-count-add class=" <% if(commerceItem.quantity >= commerceItem.limitNum  ) {%>mcart-count-disabled<% } %>  mcart-count-btn mcart-count-add  ">+</a>                                                            <div class="mcart-count-input"><input  maxlength="3" name="num" type="text" value="<%= commerceItem.quantity %>">                                                            </div>                                                    </span>                                                    <% if(commerceItemsGroup[j].commerceitemVOFlag != "SUB"){ %>                                                        <a class="nLowLeight miniDel" href="javascript:void(0)" title="删除" data-itemid="<%= commerceItem.itemId %>">删除</a>                                                    <% }%>                                                </div>                                            </div>                                            <% var incrementServiceItems = commerceItem.miniIncrementServiceInfoVOs || [], commerceItemVOs = commerceItem.showBaseGroupVOList || [];%>                                            <% if(incrementServiceItems.length > 0 || commerceItemVOs.length > 0) {%>                                            <div class="mini-pCol-promotion fl">                                                <%for(var k=0;k<incrementServiceItems.length;k++) {%>                                                    <% var dName = (incrementServiceItems[k].promotionType == "1"  ? "特惠" : "") + $toDisplayName(incrementServiceItems[k]) + "  " + incrementServiceItems[k].numOfYear + "年  ¥" + $toFixed(incrementServiceItems[k].price) %>                                                    <p class="nLowLeight cou-gift" title="<%=dName %>">[<em><%=$toServiceType(incrementServiceItems[k]) %></em>]<%=dName %></p>                                                <% } %>                                                <% for(var h=0;h<commerceItemVOs.length;h++) {%>                                                <% var itemName = commerceItemVOs[h].itemName || ""; %>                                                    <p class="nLowLeight cou-gift" title="<%=itemName %>">[<em>赠品</em>]&nbsp;&nbsp;<%=$cutstr(itemName,24)  %> </p>                                                <% } %>                                            </div>                                            <% } %>                                        </dd>                                        <%}%>                                     <%}%>                                </dl>                            </li>                            <% } %>                        </ul>                        <div id="atg_store_csFooter1" class="cartfooter">                            <h4>                                已选 <i><span id="csQuantity"><%= miniCartProfileVO.itemCount || 0 %></span></i>                                 件 ，共计： <strong><span id="csSubtotal">¥</span><%= $toFixed(miniCartProfileVO.totalAmount) %></strong>                            </h4>                            <% if(isUpCart) {%>                                <a  data-code="cart01002" id="csCheckout" style="text-decoration:none;" class="gocart" href="" title="去购物车">                                    <span>去购物车</span>                                </a>                            <% } else {%>                                <a  data-code="cart01001" id="csCheckout" style="text-decoration:none;" class="gocart" href="" title="去购物车">                                    <span>去购物车 </span>                                </a>                            <% } %>                        </div>                    </div>';
    var r = '<div carttype="asidecart"  id="csEmptyMessage" class="noshop">                        <% if(isUpCart) {%>                            <a data-code="cart01002" href="" title="去购物车" style="text-decoration:underline;">购物车</a>                        <% } else {%>                            <a data-code="cart01001" href="" title="去购物车" style="text-decoration:underline;">购物车</a>                        <% } %>                        中还没有商品，赶紧选购吧！</div>';
    var o = function () {
        return {

        }
    }();
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
    };

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
        // l().then(u(t))
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
                // m.reqMiniCart().then(u(t))
            }
        });
        t.cartUnit = {minloadCart: m.minloadCart}
    })();
    $(function G() {
        m.hoverMinCart()
    });
})(window);
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
        if ($.browser.msie && $.browser.version == "6.0" && !$.support.style) {
            a.remove();
            t.remove();
            o.remove();
            n.remove()
        }
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

    function N() {
        t.find("li").live("click dbclick", function () {
            var e = $(this).data("open");
            r.show();
            if (e == "coupon") {
                if (loginData.loginName == "") {

                    return
                }
            }
            if (e == "member" && loginData.loginStatus < 3) {
            } else {
                if (i.css("display") == "block" && o.css("display") == "none") {
                    i.hide();
                    s.show().css("background", "url(" + s.data("bg") + ") no-repeat").removeAttr("data-bg")
                }
            }
            t.find("li").removeClass("hover").end().find("." + $(this).attr("class")).addClass("hover");
            if (e == "member" && !c.attr("data-open")) {
                t.find("li").removeClass("hover")
            }
            if (!p) {
                r.css("top", parseInt(($(window).height() - $(".gome-aside").height() - r.height()) / 2))
            }

            function f(e) {
                if (e == "" || e == null) {
                    e = 0;
                    return e
                }
                return e
            }

            var u = f(i.data("themeimg")) + "/" + f(i.data("redpacket")) + "/" + f(i.data("deputyhall")) + "/" + f(i.data("specialactivity"));
            if (e == "sale") {
                a.show()
            }
            if (e == "sale" && !m.attr("data-open")) {
                F(u)
            }
            if (e == "time" && !l.attr("data-open")) {

                if ($.fn.slimScroll) {
                    A()
                } else {

                }
                l.attr("data-open", "true")
            }
            if (e == "coupon") {
                a.show()
            }
            if (e == "coupon" && !c.attr("data-open")) {
                if (loginData.loginName == "") {

                    return
                }

            }
            if (e == "cart") {
                a.show();
                if (!a.attr("data-open") || !$("#gome-bar-cart").attr("data-animate")) {
                    $("#cart-body").gminicart()
                }
            }
            if (e == "member") {
                $(this).find(".gome-bar-btn-tip").removeClass("hover");
                M(this)
            }
            if (e == "member" && !b.attr("data-open")) {
                if ($.fn.slimScroll) {
                    z()
                } else {

                }
                b.attr("data-open", "true")
            }
            if (e == "favorites") {
                $(this).find(".gome-bar-btn-tip").removeClass("hover");
                if (!a.attr("data-open") || !$("#gome-bar-cart").attr("data-animate")) {
                    if (loginData.loginStatus && loginData.loginStatus < 3) {

                        a.hide();
                        a.attr("data-open", "").css("right", "-240px");
                        t.find("li").removeClass("hover");
                        return false
                    } else {
                        a.show();
                        t.find("li").removeClass("hover");
                        d.addClass("hover");
                        if ($.fn.asideFavorites) {
                            h.asideFavorites()
                        } else {

                        }
                    }
                }
            }
            if (e == "favorites" && !h.attr("data-open")) {
                if ($.fn.slimScroll) {
                    P()
                } else {

                }
                h.attr("data-open", "true")
            }
            if (e != "member") {
                _(e)
            }
        })
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
        N();
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
});/*! Sea.js 3.0.1 | seajs.org/LICENSE.md */
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
                "instanceof": 1,
                "delete": 1,
                "void": 1,
                "typeof": 1,
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
}();/* gmpro-2.0.0/channel/newindex/8.5.3 index-gscroll.js Date:2019-07-01 09:55:43 */
!function (a) {
    function b(a, b) {
        this.elements = {
            wrap: a,
            ul: a.children("ul"),
            li: a.children("ul").children("li")
        }, this.len = this.elements.li.length, this.settings = b, this.cache = {allowgScroll: !0}, this.pos = this.index = 0, this.timer = !1, this.init()
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
                }), b.settings.nowindex(b.index)
            }), a(b.settings.btnGo.right).bind("click", function () {
                clearInterval(b.timer), b.index--, b.index < 0 && (-1 === b.index && (b.pos = -b.stepWidth * b.len), b.index = b.len + b.index), b.moving(b.elements.ul[0], -b.stepWidth * b.index, function () {
                    b.move()
                }), b.settings.nowindex(b.index)
            })
        }, move: function () {
            var a = this;
            a.settings.isAuto && (a.timer = setInterval(function () {
                a.index++, a.moving(a.elements.ul[0], -a.stepWidth * a.index), a.settings.nowindex(a.index)
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
    }, a.fn.gScroll = function (c) {
        c = a.extend({}, a.fn.gScroll.defaults, c), this.each(function () {
            new b(a(this), c)
        })
    }, a.fn.gScroll.defaults = {
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
        nowindex: function () {
        },
        beforeCallback: function () {
        },
        afterCallback: function () {
        }
    }
}(jQuery);
/* gmpro-2.0.0/channel/newindex/8.5.3 index.js Date:2019-07-01 09:55:43 */
