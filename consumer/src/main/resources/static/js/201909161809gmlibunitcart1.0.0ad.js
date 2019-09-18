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
!function (e) {
    "use strict";
    var n = function (e, r) {
        return n["string" == typeof r ? "compile" : "render"].apply(n, arguments)
    };
    n.version = "2.0.4", n.openTag = "<%", n.closeTag = "%>", n.isEscape = !0, n.isCompress = !1, n.parser = null, n.render = function (e, r) {
        var t = n.get(e) || a({id: e, name: "Render Error", message: "No Template"});
        return t(r)
    }, n.compile = function (e, t) {
        function o(r) {
            try {
                return new l(r, e) + ""
            } catch (i) {
                return s ? a(i)() : n.compile(e, t, !0)(r)
            }
        }

        var c = arguments, s = c[2], u = "anonymous";
        "string" != typeof t && (s = c[1], t = c[0], e = u);
        try {
            var l = i(e, t, s)
        } catch (p) {
            return p.id = e || t, p.name = "Syntax Error", a(p)
        }
        return o.prototype = l.prototype, o.toString = function () {
            return l.toString()
        }, e !== u && (r[e] = o), o
    };
    var r = n.cache = {}, t = n.helpers = function () {
        var e = function (n, r) {
            return "string" != typeof n && (r = typeof n, "number" === r ? n += "" : n = "function" === r ? e(n.call(n)) : ""), n
        }, r = {"<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "&": "&#38;"}, t = function (n) {
            return e(n).replace(/&(?![\w#]+;)|[<>"']/g, function (e) {
                return r[e]
            })
        }, a = Array.isArray || function (e) {
            return "[object Array]" === {}.toString.call(e)
        }, i = function (e, n) {
            if (a(e)) for (var r = 0, t = e.length; t > r; r++) n.call(e, e[r], r, e); else for (r in e) n.call(e, e[r], r)
        };
        return {$include: n.render, $string: e, $escape: t, $each: i}
    }();
    n.helper = function (e, n) {
        t[e] = n
    }, n.onerror = function (n) {
        var r = "Template Error\n\n";
        for (var t in n) r += "<" + t + ">\n" + n[t] + "\n\n";
        e.console && console.error(r)
    }, n.get = function (t) {
        var a;
        if (r.hasOwnProperty(t)) a = r[t]; else if ("document" in e) {
            var i = document.getElementById(t);
            if (i) {
                var o = i.value || i.innerHTML;
                a = n.compile(t, o.replace(/^\s*|\s*$/g, ""))
            }
        }
        return a
    };
    var a = function (e) {
        return n.onerror(e), function () {
            return "{Template Error}"
        }
    }, i = function () {
        var e = t.$each,
            r = "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",
            a = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g,
            i = /[^\w$]+/g, o = new RegExp(["\\b" + r.replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
            c = /^\d[^,]*|,\d[^,]*/g, s = /^,+|,+$/g, u = function (e) {
                return e.replace(a, "").replace(i, ",").replace(o, "").replace(c, "").replace(s, "").split(/^$|,+/)
            };
        return function (r, a, i) {
            function o(e) {
                return m += e.split(/\n/).length - 1, n.isCompress && (e = e.replace(/[\n\r\t\s]+/g, " ").replace(/<!--.*?-->/g, "")), e && (e = x[1] + p(e) + x[2] + "\n"), e
            }

            function c(e) {
                var r = m;
                if ($ ? e = $(e) : i && (e = e.replace(/\n/g, function () {
                    return m++, "$line=" + m + ";"
                })), 0 === e.indexOf("=")) {
                    var a = !/^=[=#]/.test(e);
                    if (e = e.replace(/^=[=#]?|[\s;]*$/g, ""), a && n.isEscape) {
                        var o = e.replace(/\s*\([^\)]+\)/, "");
                        t.hasOwnProperty(o) || /^(include|print)$/.test(o) || (e = "$escape(" + e + ")")
                    } else e = "$string(" + e + ")";
                    e = x[1] + e + x[2]
                }
                return i && (e = "$line=" + r + ";" + e), s(e), e + "\n"
            }

            function s(n) {
                n = u(n), e(n, function (e) {
                    e && !v.hasOwnProperty(e) && (l(e), v[e] = !0)
                })
            }

            function l(e) {
                var n;
                "print" === e ? n = k : "include" === e ? (y.$include = t.$include, n = E) : (n = "$data." + e, t.hasOwnProperty(e) && (y[e] = t[e], n = 0 === e.indexOf("$") ? "$helpers." + e : n + "===undefined?$helpers." + e + ":" + n)), w += e + "=" + n + ","
            }

            function p(e) {
                return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
            }

            var f = n.openTag, d = n.closeTag, $ = n.parser, g = a, h = "", m = 1,
                v = {$data: 1, $id: 1, $helpers: 1, $out: 1, $line: 1}, y = {},
                w = "var $helpers=this," + (i ? "$line=0," : ""), b = "".trim,
                x = b ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
                T = b ? "$out+=$text;return $text;" : "$out.push($text);", k = "function($text){" + T + "}",
                E = "function(id,data){data=data||$data;var $text=$helpers.$include(id,data,$id);" + T + "}";
            e(g.split(f), function (e) {
                e = e.split(d);
                var n = e[0], r = e[1];
                1 === e.length ? h += o(n) : (h += c(n), r && (h += o(r)))
            }), g = h, i && (g = "try{" + g + "}catch(e){" + "throw {" + "id:$id," + "name:'Render Error'," + "message:e.message," + "line:$line," + "source:" + p(a) + ".split(/\\n/)[$line-1].replace(/^[\\s\\t]+/,'')" + "};" + "}"), g = w + x[0] + g + "return new String(" + x[3] + ");";
            try {
                var j = new Function("$data", "$id", g);
                return j.prototype = y, j
            } catch (O) {
                throw O.temp = "function anonymous($data,$id) {" + g + "}", O
            }
        }
    }();
    "function" == typeof define ? define(function () {
        return n
    }) : "undefined" != typeof exports && (module.exports = n), e.templateSimple = n
}(this), function (e) {
    e.openTag = "{{", e.closeTag = "}}", e.parser = function (n) {
        n = n.replace(/^\s/, "");
        var r = n.split(" "), t = r.shift(), a = r.join(" ");
        switch (t) {
            case"if":
                n = "if(" + a + "){";
                break;
            case"else":
                r = "if" === r.shift() ? " if(" + r.join(" ") + ")" : "", n = "}else" + r + "{";
                break;
            case"/if":
                n = "}";
                break;
            case"each":
                var i = r[0] || "$data", o = r[1] || "as", c = r[2] || "$value", s = r[3] || "$index", u = c + "," + s;
                "as" !== o && (i = "[]"), n = "$each(" + i + ",function(" + u + "){";
                break;
            case"/each":
                n = "});";
                break;
            case"echo":
                n = "print(" + a + ");";
                break;
            case"include":
                n = "include(" + r.join(",") + ");";
                break;
            default:
                e.helpers.hasOwnProperty(t) ? n = "=#" + t + "(" + r.join(",") + ");" : (n = n.replace(/[\s;]*$/, ""), n = "=" + n)
        }
        return n
    }
}(this.templateSimple);
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
$(function () {
    $(".mainnav").curNav({css: "cur"});
    $("#navBox").dropdown({
        topspeed: !0, current: "bgw", bodyClass: "fullcategory", onchange: function (e) {
            $("#subnav").show();
            var a = e.attr("data-index");
            if ($("#subnav").attr("flag") == 0) {

                $("#subnav").attr("flag", "1")
            } else {
                $("#loading1-sync>div").eq(a).show().siblings().hide()
            }
            var n = $("#subnav");
            var t = n.find(".loading1-sync");
            var o = n.offset().top;
            var s = $(window).scrollTop();
            var i = s - o;
            if (s > o) {
                t.css({top: i})
            } else {
                t.css({top: 0})
            }
        }, onmouseleave: function (e) {
            $("#subnav").hide();

            function a() {
                $("#subnav").hide();
                $("#lisnav li").removeClass("bgw")
            }

            var n;

            function t() {
                n = setTimeout(a, 100)
            }

            $(".sidecategory").hover(function () {
                clearTimeout(n)
            }, function () {
                t()
            })
        }
    });

    function e() {
        $("#subnav").hide();
        $("#lisnav li").removeClass("bgw");
        $(".lisbg,.lisnav").hide();
        $(".sidecategory h2").removeClass("hover")
    }

    var a;

    function n() {
        a = setTimeout(e, 100)
    }

    if (!$("body").hasClass("home") && !$("body").hasClass("category-opened")) {
        $(".sidecategory").hover(function () {
            clearTimeout(a)
        }, function () {
            n()
        })
    } else {
        $(".sidecategory h2").find("span").remove()
    }
    $(".category h2").hover(function () {
        $(".lisbg,.lisnav").show();
        $(".sidecategory h2").addClass("hover")
    });
    $('[data-roll="hdrSideUp"]').gScroll({
        isAuto: true,
        isImgLoad: true,
        showNum: 1,
        stepLen: 1,
        speed: 6e3,
        type: "vertical",
        dataOriginal: "gome-src",
        btnGo: {left: '[data-btn="goDown"]', right: '[data-btn="goUp"]'}
    });

    function t(e, a) {
        var n = document;
        var t = n.createElement("script");
        t.type = "text/javascript";
        if (t.readyState) {
            t.onreadystatechange = function () {
                if (t.readyState == "loaded" || t.readyState == "complete") {
                    t.onreadystatechange = null;
                    a()
                }
            }
        } else {
            t.onload = function () {
                a()
            }
        }
        t.src = e;
        n.getElementsByTagName("head")[0].appendChild(t)
    }
});
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
                t(this).children("div").load("/n/common/" + i + "/head_" + e + ".html", function () {
                    t(this).parent().attr("data-open", "true")
                })
            }
            if (e == "service") {
                t(this).children("div").load("/n/common/global/head_" + e + ".html", function () {
                    t(this).parent().attr("data-open", "true");
                    customerServiceCall.initialCall()
                })
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
            doSearch()
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
    var r = {

    };
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

$(function () {
    if ($("#searchInput").length > 0) {
        $("#searchInput").autopoint({url: ""})
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
        hotkeywordurl = "";
    } else {
        hotkeywordurl = ""
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
(function (t) {
    t.fn.gCity = function (c) {
        var i = function (t, c) {
            this.cache = {snam: "", sid: "", cnam: "", cid: "", xnam: "", xid: "", znam: "", zid: "", chtm: ""};
            this.adress = "11011400|北京北京市东城区东城区|11010000|11000000|110114001";
            this.province = {
                11000000: "北京",
                12000000: "天津",
                13000000: "河北省",
                14000000: "山西省",
                15000000: "内蒙古",
                21000000: "上海",
                22000000: "浙江省",
                23000000: "江苏省",
                24000000: "安徽省",
                25000000: "福建省",
                26000000: "山东省",
                31000000: "广东省",
                32000000: "广西",
                33000000: "海南省",
                41000000: "湖北省",
                42000000: "湖南省",
                43000000: "河南省",
                44000000: "江西省",
                51000000: "黑龙江省",
                52000000: "吉林省",
                53000000: "辽宁省",
                61000000: "宁夏",
                62000000: "新疆",
                63000000: "青海省",
                64000000: "陕西省",
                65000000: "甘肃省",
                71000000: "四川省",
                72000000: "云南省",
                73000000: "贵州省",
                74000000: "重庆",
                75000000: "西藏",
                81000000: "台湾省",
                82000000: "香港",
                83000000: "澳门",
                84000000: "钓鱼岛"
            };
            this.city = {
                11000000: {11010000: "北京市"},
                12000000: {12010000: "天津市"},
                13000000: {
                    13010000: "保定市",
                    13020000: "沧州市",
                    13030000: "承德市",
                    13040000: "邯郸市",
                    13050000: "衡水市",
                    13060000: "廊坊市",
                    13070000: "秦皇岛市",
                    13080000: "石家庄市",
                    13090000: "唐山市",
                    13100000: "邢台市",
                    13110000: "张家口市"
                },
                14000000: {
                    14010000: "长治市",
                    14020000: "大同市",
                    14030000: "晋城市",
                    14040000: "晋中市",
                    14050000: "临汾市",
                    14060000: "吕梁市",
                    14070000: "朔州市",
                    14080000: "太原市",
                    14090000: "忻州市",
                    14100000: "阳泉市",
                    14110000: "运城市"
                },
                15000000: {
                    15010000: "阿拉善盟",
                    15020000: "巴彦淖尔市",
                    15030000: "包头市",
                    15040000: "赤峰市",
                    15050000: "鄂尔多斯市",
                    15060000: "呼和浩特市",
                    15070000: "呼伦贝尔市",
                    15080000: "通辽市",
                    15090000: "乌海市",
                    15100000: "乌兰察布市",
                    15110000: "锡林郭勒盟",
                    15120000: "兴安盟"
                },
                21000000: {21010000: "上海市"},
                22000000: {
                    22010000: "杭州市",
                    22020000: "湖州市",
                    22030000: "嘉兴市",
                    22040000: "金华市",
                    22050000: "丽水市",
                    22060000: "宁波市",
                    22070000: "衢州市",
                    22080000: "绍兴市",
                    22090000: "台州市",
                    22100000: "温州市",
                    22110000: "舟山市"
                },
                23000000: {
                    23010000: "南京市",
                    23020000: "淮安市",
                    23030000: "连云港市",
                    23040000: "常州市",
                    23050000: "南通市",
                    23060000: "苏州市",
                    23070000: "宿迁市",
                    23080000: "泰州市",
                    23090000: "无锡市",
                    23100000: "徐州市",
                    23110000: "盐城市",
                    23120000: "扬州市",
                    23130000: "镇江市"
                },
                24000000: {
                    24010000: "合肥市",
                    24020000: "安庆市",
                    24030000: "蚌埠市",
                    24040000: "亳州市",
                    24060000: "池州市",
                    24070000: "滁州市",
                    24080000: "阜阳市",
                    24090000: "淮北市",
                    24100000: "淮南市",
                    24110000: "黄山市",
                    24120000: "六安市",
                    24130000: "马鞍山市",
                    24140000: "宿州市",
                    24150000: "铜陵市",
                    24160000: "芜湖市",
                    24170000: "宣城市"
                },
                25000000: {
                    25010000: "福州市",
                    25020000: "龙岩市",
                    25030000: "南平市",
                    25040000: "宁德市",
                    25050000: "莆田市",
                    25060000: "泉州市",
                    25070000: "三明市",
                    25080000: "厦门市",
                    25090000: "漳州市"
                },
                26000000: {
                    26010000: "滨州市",
                    26020000: "德州市",
                    26030000: "东营市",
                    26040000: "菏泽市",
                    26050000: "济南市",
                    26060000: "济宁市",
                    26070000: "莱芜市",
                    26080000: "聊城市",
                    26090000: "临沂市",
                    26100000: "青岛市",
                    26110000: "日照市",
                    26120000: "泰安市",
                    26130000: "威海市",
                    26140000: "潍坊市",
                    26150000: "烟台市",
                    26160000: "枣庄市",
                    26170000: "淄博市"
                },
                31000000: {
                    31010000: "广州市",
                    31020000: "深圳市",
                    31030000: "潮州市",
                    31040000: "河源市",
                    31050000: "惠州市",
                    31060000: "江门市",
                    31070000: "揭阳市",
                    31080000: "茂名市",
                    31090000: "梅州市",
                    31100000: "清远市",
                    31110000: "汕头市",
                    31120000: "汕尾市",
                    31130000: "韶关市",
                    31140000: "阳江市",
                    31150000: "云浮市",
                    31160000: "湛江市",
                    31170000: "肇庆市",
                    31180000: "珠海市",
                    31190000: "东莞市",
                    31200000: "中山市",
                    31210000: "佛山市"
                },
                32000000: {
                    32010000: "桂林市",
                    32020000: "百色市",
                    32030000: "北海市",
                    32040000: "崇左市",
                    32050000: "防城港市",
                    32060000: "贵港市",
                    32070000: "河池市",
                    32080000: "贺州市",
                    32090000: "来宾市",
                    32100000: "柳州市",
                    32110000: "南宁市",
                    32120000: "钦州市",
                    32130000: "梧州市",
                    32140000: "玉林市"
                },
                33000000: {
                    33010000: "海口市",
                    33020000: "白沙县",
                    33030000: "保亭县",
                    33040000: "昌江县",
                    33050000: "澄迈县",
                    33060000: "儋州市",
                    33070000: "定安县",
                    33080000: "东方市",
                    33090000: "乐东县",
                    33100000: "临高县",
                    33110000: "陵水县",
                    33130000: "琼海市",
                    33140000: "琼中县",
                    33150000: "屯昌县",
                    33160000: "万宁市",
                    33170000: "文昌市",
                    33180000: "五指山市",
                    33210000: "三亚市",
                    33220000: "三沙市"
                },
                41000000: {
                    41010000: "武汉市",
                    41020000: "鄂州市",
                    41030000: "恩施州",
                    41040000: "黄冈市",
                    41050000: "黄石市",
                    41060000: "荆门市",
                    41070000: "荆州市",
                    41080000: "十堰市",
                    41090000: "随州市",
                    41100000: "咸宁市",
                    41110000: "襄阳市",
                    41120000: "孝感市",
                    41130000: "宜昌市",
                    41140000: "仙桃市",
                    41150000: "潜江市",
                    41160000: "天门市",
                    41170000: "神农架林区"
                },
                42000000: {
                    42010000: "长沙市",
                    42020000: "常德市",
                    42030000: "郴州市",
                    42040000: "衡阳市",
                    42050000: "怀化市",
                    42060000: "娄底市",
                    42070000: "邵阳市",
                    42080000: "湘潭市",
                    42090000: "湘西州",
                    42100000: "益阳市",
                    42110000: "永州市",
                    42120000: "岳阳市",
                    42130000: "张家界市",
                    42140000: "株洲市"
                },
                43000000: {
                    43010000: "郑州市",
                    43020000: "安阳市",
                    43030000: "鹤壁市",
                    43040000: "焦作市",
                    43050000: "开封市",
                    43060000: "洛阳市",
                    43070000: "漯河市",
                    43080000: "南阳市",
                    43090000: "平顶山市",
                    43100000: "濮阳市",
                    43110000: "三门峡市",
                    43120000: "商丘市",
                    43130000: "新乡市",
                    43140000: "信阳市",
                    43150000: "许昌市",
                    43160000: "周口市",
                    43170000: "驻马店市",
                    43180000: "济源市"
                },
                44000000: {
                    44010000: "南昌市",
                    44020000: "抚州市",
                    44030000: "赣州市",
                    44040000: "吉安市",
                    44050000: "景德镇市",
                    44060000: "九江市",
                    44070000: "萍乡市",
                    44080000: "上饶市",
                    44090000: "新余市",
                    44100000: "宜春市",
                    44110000: "鹰潭市"
                },
                51000000: {
                    51010000: "哈尔滨市",
                    51020000: "大庆市",
                    51030000: "大兴安岭",
                    51040000: "鹤岗市",
                    51050000: "黑河市",
                    51060000: "鸡西市",
                    51070000: "佳木斯市",
                    51080000: "牡丹江市",
                    51090000: "七台河市",
                    51100000: "齐齐哈尔市",
                    51110000: "双鸭山市",
                    51120000: "绥化市",
                    51130000: "伊春市"
                },
                52000000: {
                    52010000: "长春市",
                    52020000: "白城市",
                    52030000: "白山市",
                    52040000: "吉林市",
                    52050000: "辽源市",
                    52060000: "四平市",
                    52070000: "松原市",
                    52080000: "通化市",
                    52090000: "延边州"
                },
                53000000: {
                    53010000: "沈阳市",
                    53020000: "鞍山市",
                    53030000: "本溪市",
                    53040000: "朝阳市",
                    53050000: "大连市",
                    53060000: "丹东市",
                    53070000: "抚顺市",
                    53080000: "阜新市",
                    53090000: "葫芦岛市",
                    53100000: "锦州市",
                    53110000: "辽阳市",
                    53120000: "盘锦市",
                    53130000: "铁岭市",
                    53140000: "营口市"
                },
                61000000: {61010000: "固原市", 61020000: "石嘴山市", 61030000: "吴忠市", 61040000: "中卫市", 61050000: "银川市"},
                62000000: {
                    62010000: "乌鲁木齐市",
                    62190000: "北屯市",
                    62020000: "阿克苏地区",
                    62030000: "阿勒泰地区",
                    62040000: "巴音郭楞州",
                    62050000: "博尔塔拉州",
                    62060000: "昌吉州",
                    62070000: "哈密地区",
                    62080000: "和田地区",
                    62090000: "喀什地区",
                    62100000: "克拉玛依市",
                    62110000: "克孜州",
                    62120000: "塔城地区",
                    62130000: "吐鲁番地区",
                    62140000: "伊犁州",
                    62150000: "石河子市",
                    62160000: "阿拉尔市",
                    62170000: "图木舒克市",
                    62180000: "五家渠市"
                },
                63000000: {
                    63010000: "西宁市",
                    63020000: "果洛州",
                    63030000: "海北州",
                    63040000: "海东市",
                    63050000: "海南州",
                    63060000: "海西州",
                    63070000: "黄南州",
                    63080000: "玉树州"
                },
                64000000: {
                    64010000: "西安市",
                    64020000: "安康市",
                    64030000: "宝鸡市",
                    64040000: "汉中市",
                    64050000: "商洛市",
                    64060000: "铜川市",
                    64070000: "渭南市",
                    64080000: "咸阳市",
                    64090000: "延安市",
                    64100000: "榆林市"
                },
                65000000: {
                    65010000: "兰州市",
                    65020000: "白银市",
                    65030000: "定西市",
                    65040000: "甘南州",
                    65050000: "嘉峪关市",
                    65060000: "金昌市",
                    65070000: "酒泉市",
                    65080000: "临夏州",
                    65090000: "陇南市",
                    65100000: "平凉市",
                    65110000: "庆阳市",
                    65120000: "天水市",
                    65130000: "张掖市",
                    65140000: "武威市"
                },
                71000000: {
                    71010000: "成都市",
                    71020000: "阿坝州",
                    71030000: "巴中市",
                    71040000: "达州市",
                    71050000: "德阳市",
                    71060000: "甘孜州",
                    71070000: "广元市",
                    71080000: "乐山市",
                    71090000: "凉山州",
                    71100000: "泸州市",
                    71110000: "眉山市",
                    71120000: "绵阳市",
                    71130000: "内江市",
                    71140000: "南充市",
                    71150000: "攀枝花市",
                    71160000: "遂宁市",
                    71170000: "雅安市",
                    71180000: "宜宾市",
                    71190000: "资阳市",
                    71200000: "自贡市",
                    71210000: "广安市"
                },
                72000000: {
                    72010000: "昆明市",
                    72020000: "保山市",
                    72030000: "楚雄州",
                    72040000: "大理州",
                    72050000: "德宏州",
                    72060000: "迪庆州",
                    72070000: "红河州",
                    72080000: "丽江市",
                    72090000: "临沧市",
                    72100000: "怒江州",
                    72110000: "曲靖市",
                    72120000: "普洱市",
                    72130000: "文山州",
                    72140000: "西双版纳",
                    72150000: "玉溪市",
                    72160000: "昭通市"
                },
                73000000: {
                    73010000: "贵阳市",
                    73020000: "安顺市",
                    73030000: "毕节市",
                    73040000: "六盘水市",
                    73050000: "黔东南州",
                    73060000: "黔南州",
                    73070000: "黔西南州",
                    73080000: "铜仁市",
                    73090000: "遵义市"
                },
                74000000: {74010000: "重庆市"},
                75000000: {
                    75010000: "拉萨市",
                    75020000: "阿里地区",
                    75030000: "昌都市",
                    75040000: "林芝市",
                    75050000: "那曲地区",
                    75060000: "日喀则市",
                    75070000: "山南市"
                },
                81000000: {81010000: "台湾省"},
                82000000: {82010000: "香港"},
                83000000: {83010000: "澳门"},
                84000000: {84010000: "钓鱼岛"}
            };
            this.opt = c;
            this.singleCity = {11000000: "11010000", 12000000: "12010000", 21000000: "21010000", 74000000: "74010000"};
            this.obj = t;
            this.init()
        };
        i.prototype = {
            init: function () {
                var t = this;
                t.winClose();
                t.obj.click(function () {
                    t.bindEvent();
                    t.obj.addClass("gctCur").parent().addClass("cityShow");
                    if (t.opt.gc_new) t.opcity(1);
                    t.winType(true)
                });
                t.autoProvince()
            }, autoProvince: function () {
                var t = this, c = {};
                t.cityModel(t.province)
            }, bindEvent: function () {
                var c = this;
                t(c.opt.gc_shw).unbind("click").click(function (t) {
                    t.preventDefault();
                    c.cityClick(c.getEvent(t))
                })
            }, cityModel: function (c) {
                var i = this.opt.gc_dat || t.cookie("atgregion");
                i = i || this.adress;
                i = i.split("|");
                if (i.length != 5 || i[4] == "undefined") i[4] = i[0] + "1";
                this.cache.sid = i[3];
                this.cache.cid = i[2];
                this.cache.xid = i[0];
                this.cache.zid = i[4];
                this.cityDom(c, 2, 1)
            }, cityDom: function (c, i, a) {
                var e = c.citys || c;
                if (a == 1) {
                    this.createProvince(e, i)
                } else {
                    this.createOthers(e, a, i)
                }
                if (!this.opt.gc_inp && e.length <= 1 && i == 4) this.inpcity();
                if (this.opt.gc_inp && i == 4) {
                    this.opt.gc_inp = false;
                    this.citySlect();
                    this.cache.chtm = this.fmtAddress();
                    if (this.opt.gc_ads) t(this.opt.gc_aid).html(this.cache[this.opt.gc_ads]).attr("title", this.cache[this.opt.gc_ads]);
                    if (this.opt.gc_autofn) this.opt.gc_autofn.apply(this.cache)
                }
                this.bindEvent()
            }, checkData: function (t) {
                try {
                    var c = t.result.division, i = c[0].code + c[0].label;
                    return true
                } catch (a) {
                    if (window.console) {
                        console.log("响应数据异常\r\n" + a)
                    }
                    return false
                }
            }, createProvince: function (c, i) {
                var a = this, e = "";
                t.each(c, function (t, c) {
                    var s = t, n = c, h = "";
                    e += a.createSpan(h, n, s, s + "," + i + ",1")
                });
                a.cityHtm(e)
            }, createOthers: function (c, i, a) {
                var e = this, s = "", n = "", h = "", r = c;
                var o = ["710103001", "710101001", "710102001", "710104001", "710105001", "110102001", "110103001", "110105001", "110104001", "110115001", "110114001"];
                t.each(o, function (t, c) {
                    if (e.cache.zid == c) {
                        e.cache.zid = (+c + 1).toString()
                    }
                });
                if (a != 2) {
                    if (!this.checkData(c)) return false;
                    c = c.result.division
                }
                t.each(c, function (t, c) {
                    var i = c.code ? c.code : t, r = c.label ? c.label : c, o = c.relationCode || null, d = "";
                    n = i;
                    h = r;
                    if (i == e.cache.cid) {
                        e.cache.cnam = r
                    }
                    if (i == e.cache.xid && !o || i != e.cache.xid && o && o == e.cache.xid) {
                        e.cache.xid = i;
                        e.cache.xnam = e.fmt(r)
                    }
                    if (e.cache.zid && e.cache.zid != "" && i == e.cache.zid) {
                        e.cache.znam = e.fmt(r)
                    }
                    s += e.createSpan(d, r, i, i + "," + (parseInt(a) + 1) + "," + a, o)
                });
                t("#ctbox_" + a).html(s);
                var d = 0;
                if (a == 2) {
                    d = e.cache.sid;
                    if (e.opt.gc_inp) e.autoAjax(e.cache.cid, parseInt(a) + 1, a);
                    if (!e.opt.gc_inp && c.length <= 1) {
                        e.cache.cid = n;
                        e.autoAjax(e.cache.cid, parseInt(a) + 1, a)
                    }
                }
                if (a == 3) {
                    d = e.cache.cid;
                    if (e.opt.gc_inp) e.autoAjax(e.cache.xid, parseInt(a) + 1, a)
                }
                if (a == 4) {
                    d = e.cache.xid;
                    if (c.length <= 1) {
                        e.cache.zid = n;
                        e.cache.znam = h
                    }
                }
                e.obj.data("data" + d, r)
            }, autoAjax: function (t, c, i) {
                var a = this;
                window.setTimeout(function () {
                    a.cityajax(t, c, i)
                }, 1)
            }, createSpan: function (t, c, i, a, e) {
                if (e) e = 'data-rid="' + e + '"';
                return '<span><a href="javascript:;" ' + t + ' title="' + c + '" id="ct' + i + '" data-val="' + a + '" ' + (e ? e : "") + ">" + c + "</a></span>"
            }, citySlect: function () {
                t("#pct_1").find("b").html(this.cache.snam);
                t("#pct_2").find("b").html(this.cache.cnam);
                t("#pct_3").find("b").html(this.cache.xnam);
                t("#pct_4").find("b").html(this.cache.znam);
                if (this.cache.xnam == "" || this.cache.xnam == undefined) {
                    var c = this;
                    c.opt.gc_dat = c.adress;
                    c.opt.gc_inp = true;
                    window.setTimeout(function () {
                        c.init()
                    }, 1);
                    return false
                }
            }, cityHtm: function (c) {
                var i = this.opt.gc_css, a = "";
                if (this.opt.gc_slt) {
                    a = '<div id="citySelect" class="gctSelect clearfix">				<a href="javascript:;" id="pct_1" data-val="1" data-lnk><b></b><i></i></a>				<a href="javascript:;" id="pct_2" data-val="2" data-lnk><b></b><i></i></a>				<a href="javascript:;" id="pct_3" data-val="3" data-lnk><b></b><i></i></a>				<a href="javascript:;" id="pct_4" data-val="4" data-lnk class="cur"><b></b><i></i></a>				<a href="javascript:;" id="cityClose" class="close"></a></div>'
                }
                var e = '<div id="cityMBox">				<div class="' + i + '" id="ctbox_1">' + c + '</div>				<div class="' + i + '" id="ctbox_2"></div>				<div class="' + i + '" id="ctbox_3"></div>				<div class="' + i + '" id="ctbox_4"></div></div>';
                t(this.opt.gc_shw).html(a + e);
                this.autoAjax(this.cache.sid, 2, 1)
            }, cityClick: function (c) {
                var i = t(c), a = i.parent(), e = this, s = true;
                if (a.attr("data-lnk") || a.attr("data-lnk") == "") {
                    s = false
                } else {
                    if (i.attr("data-lnk") || i.attr("data-lnk") == "") {
                        s = false
                    }
                }
                if (a.parent().hasClass("gctBox")) a.parent().find("a").removeClass("select");
                if (s) {
                    if (i.attr("id") && i.attr("id") == "cityClose") {
                        e.closeCity();
                        return false
                    }
                    var n = i.attr("data-val"), h = 1;
                    if (n != undefined) {
                        t(e.opt.gc_shw).unbind("click");
                        n = n.split(",");
                        h = n[2];
                        var r = n[0], o = e.fmt(t("#ct" + r).html());
                        if (h == 1) {
                            e.cache.snam = o;
                            e.cache.sid = r;
                            e.setLoading("#ctbox_2,#ctbox_3,#ctbox_4", n);
                            if (this.getPropertyCount(this.city[r]) == 1) {
                                this.cityClick(t("#ct" + this.singleCity[r]))
                            }
                        }
                        if (h == 2) {
                            e.cache.cnam = o;
                            e.cache.cid = r;
                            e.setLoading("#ctbox_3,#ctbox_4", n)
                        }
                        if (h == 3) {
                            e.cache.xnam = o;
                            e.cache.xid = r;
                            e.setLoading("#ctbox_4", n)
                        }
                        if (h == 4) {
                            e.cache.znam = o;
                            e.cache.zid = r;
                            e.inpcity()
                        }
                    }
                } else {
                    var d = i.attr("data-val");
                    if (d == undefined) {
                        e.opcity(i.parent().attr("data-val"))
                    } else {
                        e.opcity(d)
                    }
                }
                e.winType(true)
            }, setLoading: function (c, i) {
                t(c).html("加载中...");
                this.cityajax(i[0], i[1], i[2])
            }, getPropertyCount: function (t) {
                var c, i = 0;
                for (c in t) {
                    if (t.hasOwnProperty(c)) {
                        i++
                    }
                }
                return i
            }, winClose: function () {
                var c = this;
                t("body:first").click(function (i) {
                    var a = t(c.opt.gc_shw).attr("cityType");
                    if (a == "true") {
                        var e = t(c.getEvent(i)), s = e.attr("id");
                        if (!e.attr("cityType") && !e.parent().attr("cityType") && !e.parent().parent().attr("cityType") && !e.parent().parent().parent().attr("cityType") && !e.parent().parent().parent().parent().attr("cityType") && s != "stockaddress" && s != "address" && e.parent().attr("id") != "address") {
                            c.winType(false);
                            c.closeCity()
                        }
                    } else {
                        c.closeCity()
                    }
                })
            }, winType: function (c) {
                t(this.opt.gc_shw).attr("cityType", "" + c)
            }, cityajax: function (c, i, a) {
                var e = "", s = 0;
                this.opcity(i);
                if (a == 1) {
                    this.setDataClk("#pct_2", true);
                    this.setDataClk("#pct_3,#pct_4", false);
                    e = t("#ct" + this.cache.sid).html();
                    s = this.cache.sid;
                    this.cache.snam = e
                }
                if (a == 2) {
                    this.setDataClk("#pct_3", true);
                    this.setDataClk("#pct_4", false);
                    e = t("#ct" + this.cache.cid).html();
                    s = this.cache.cid;
                    this.cache.cnam = e
                }
                if (a == 3) {
                    this.setDataClk("#pct_4", true);
                    e = this.fmt(t("#ct" + this.cache.xid).html());
                    s = this.cache.xid;
                    this.cache.xnam = e
                }
                if (a == 4) {
                    e = this.fmt(t("#ct" + this.cache.zid).html());
                    this.cache.znam = e
                }
                t("#pct_" + a).find("b").html(e);
                if (s != 0) this.getDataCache(s, i, c)
            }, fmt: function (t) {
                if (t) return t.replace("*", "")
            }, fmtAddress: function () {
                try {
                    return this.cache.snam + this.cache.cnam.replace(this.cache.snam, "") + this.cache.xnam.replace(this.cache.cnam, "").replace(this.cache.snam, "") + this.cache.znam.replace(this.cache.cnam, "").replace(this.cache.snam, "")
                } catch (t) {
                    return ""
                }
            }, setDataClk: function (c, i) {
                if (!this.opt.gc_inp) {
                    if (i) {
                        t(c).attr("data-clk", i).find("b").html("请选择")
                    } else {
                        t(c).hide().attr("data-clk", i).find("b").html("请选择")
                    }
                }
            }, getDataCache: function (t, c, i) {
                if (this.obj.data("data" + t)) {
                    this.cityDom(this.obj.data("data" + t), c, t);
                    return false
                } else {
                    var e = "", s = {citycode: i, levelid: c};
                    if (c == 2) {
                        this.cityDom(this.city[i], c, i)
                    } else if (c == 3) {
                        e = a + s.citycode + "/3/flag/item_web/gcity_callbackarea";
                        this.getDataAjax(i, c, e)
                    } else {
                        e = a + s.citycode + "/4/flag/item_web/gcity_callbackarea";
                        this.getDataAjax(i, c, e)
                    }
                }
            }, getDataAjax: function (c, i, a) {
                var e = this;

            }, inpcity: function () {
                var c = this, i = "";
                c.cache.chtm = c.fmtAddress();
                i = c.cache.chtm;
                if (c.opt.gc_ads) {
                    i = c.cache[c.opt.gc_ads]
                }
                t("#pct_4").find("b").html(c.cache.znam);
                t(c.opt.gc_aid).html(i).attr("title", i);
                c.closeCity();
                if (c.opt.gc_evt) {
                    var a = c.cache.xid;
                    if (t("#ct" + c.cache.zid).attr("data-rid")) a = t("#ct" + c.cache.zid).attr("data-rid");
                    c.opt.gc_evt.apply(t.extend({}, c.cache, {xid: a}))
                }
            }, opcity: function (c) {
                for (var i = 1; i < 5; i++) {
                    if (i == c) {
                        t("#ctbox_" + i).show();
                        t("#pct_" + i).addClass("cur").show()
                    } else {
                        t("#ctbox_" + i).hide();
                        t("#pct_" + i).removeAttr("class")
                    }
                }
            }, getEvent: function (t) {
                t = t || window.event;
                return t.target || t.srcElement
            }, closeCity: function () {
                this.obj.removeClass("gctCur").parent().removeClass("cityShow")
            }
        };
        var a = "";
        var e = {
            gc_dat: null,
            gc_css: "gctBox",
            gc_shw: ".gCity",
            gc_aid: "#stockaddress",
            gc_ads: null,
            gc_inp: true,
            gc_upd: true,
            gc_slt: true,
            gc_new: false,
            gc_autofn: null,
            gc_group: false,
            gc_groupID: false,
            gc_evt: null
        }, c = t.extend(e, c);
        this.each(function () {
            new i(t(this), c)
        })
    }
})(jQuery);
(function (e) {
    e.fn.accordion = function (o) {
        Array.prototype.removeValve = function (e) {
            for (var o = 0; o < this.length; o++) {
                if (this[o] == e) {
                    this.splice(o, 1);
                    break
                }
            }
        };
        var r = {boxStyle: {left: "50%", marginLeft: "-390px"}, obj: ".compare", objStyle: "", domain: ""};
        var i = e.extend({}, r, o);
        var a = this;
        var t = 4;
        var c = [];
        var l = "";
        var p = function () {
            var o = {};
            return function (r) {
                if (!r) {
                    return false
                }
                return e.Deferred(function (a) {
                    var t = r.replace("/", "");
                    if (o[t]) {
                        a.resolve(o[t])
                    } else {
                done(function (e) {
                            o[t] = e;
                            a.resolve(o[t])
                        }).fail(function (e) {
                            a.reject()
                        })
                    }
                }).promise()
            }
        }();

        function s(o) {
            return e.Deferred(function (r) {
                e.when(p(o[0]), p(o[1]), p(o[2]), p(o[3])).done(function (e, o, i, a) {
                    var t = [];
                    t.push(e, o, i, a);
                    r.resolve(t)
                })
            }).promise()
        }

        var d = function () {
            var o = '<div class="gm-compareBox" id="gm-compareBox"><div id="errorTips" class="errorTips">对比栏已满,您可以删除不需要的栏内商品再继续添加哦！</div><ul class="gm-compareBox-hd"><li class="tabs-hide" id="gm-compareBox-hide">隐藏</li><li class="tabs cur">对比栏(<em id="compareNum"></em>)</li></ul><div class="gm-compareBox-bd"><div class="gm-compareBox-opt"><p><a href="javascript:void(0)" class="go-commpare disable" id="go-commpare" target="_blank">对比</a></p><p><a href="javascript:void(0)" class="clear-commpare" id="gm-compareBox-clear">清空对比栏</a></p></div><ul class="gm-compareBox-list" id="gm-compareBox-list"><li class="item-compare"><div class="default"><span>1</span>您还可以继续添加</div><div class="product"></div></li><li class="item-compare"><div class="default"><span>2</span>您还可以继续添加</div><div class="product"></div></li><li class="item-compare"><div class="default"><span>3</span>您还可以继续添加</div><div class="product"></div></li><li class="item-compare"><div class="default"><span>4</span>您还可以继续添加</div><div class="product"></div></li></ul></div></div>';
            var r = '<style type="text/css">.gm-compareBox{display:none;position:fixed;bottom:0;z-index:30;width:990px;height:142px;background:#fff;box-shadow:0 0 20px rgba(0,0,0,.19)}.gm-compareBox-hd{height:32px;border-bottom:1px solid #e6e6e6;background:#f3f3f3;line-height:32px}.gm-compareBox-hd .tabs-hide{float:right;margin-right:10px;color:#06c;cursor:pointer}.gm-compareBox-hd .tabs{float:left;width:140px;height:32px;text-align:center}.gm-compareBox-hd .cur{position:relative;border-right:1px solid #e6e6e6;border-bottom:1px solid #fff;background-color:#fff;color:#c00;font-weight:700}.gm-compareBox-bd{overflow:hidden;padding-top:25px;padding-right:110px;height:85px}.gm-compareBox-list .item-compare{position:relative;float:left;margin-right:3px;width:215px;height:84px}.gm-compareBox-list .default{padding:0 12px;width:191px;height:80px;border-bottom:4px solid #e6e6e6;color:#ccc}.gm-compareBox-list .default span{float:left;overflow:hidden;margin-right:12px;width:50px;height:50px;border:1px solid #e7e7e7;background:#f6f6f6;text-align:center;font:46px/50px "Microsoft YaHei"}.gm-compareBox-list .product{padding:0 12px 0 70px;width:133px;height:80px;border-bottom:4px solid #c00}.gm-compareBox-list .product .pic{float:left;overflow:hidden;margin-left:-58px;width:50px;height:50px;border:1px solid #e7e7e7;background:#f6f6f6;text-align:center}.gm-compareBox-list .product .pic img{width:50px;height:50px}.gm-compareBox-list .product .name{overflow:hidden;height:36px;word-wrap:break-word;word-brak:break-all}.gm-compareBox-list .product .price{color:#e3101e;display:inline-block;vertical-align:middle;margin-right:2px}.gm-compareBox-list .product .tags{display:inline-block;vertical-align:middle;height:16px;line-height:16px;color:#e3101e;border: 1px solid #e3101e;padding:0 2px}.gm-compareBox-list .product .delete{float:right;visibility:hidden;color:#06c;margin-top:2px}.gm-compareBox-list .product:hover .delete{visibility:visible}.gm-compareBox-opt{float:right;margin-right:-110px;width:110px;text-align:center}.gm-compareBox-opt .go-commpare{display:inline-block;margin-bottom:3px;width:66px;height:28px;line-height:28px;border:1px solid #e3101e;background:#e3101e;color:#fff;text-decoration:none}.gm-compareBox-opt .disable{border:1px solid #e6e6e6;background:#f8f8f8;color:#ccc;cursor:default}.gm-compareBox-opt .clear-commpare{color:#06c}.errorTips{display:none;margin-top:-36px;background:#ffdfe0;border:2px solid #fed2d3;height:32px;text-align:center;color:#cd0001;font:700 12px/32px Arial}</style>';
            e("body").append(r + o);
            c = e.cookie("compare") ? e.cookie("compare").replace(/:/g, "/").split("|").splice(0, t) : [];
            if (e.cookie("g_co") && e.cookie("g_co") == "show" && c.length > 0) {
                e("#gm-compareBox").css(i.boxStyle).show()
            }
            return function () {
                e.cookie("compare", c.join("|").replace(/\//g, ":"), {expires: 30, path: "/", domain: i.domain});
                l = e.cookie("atgregion") ? e.cookie("atgregion").split("|")[2] : "11010000";
                e(i.obj).filter(function () {
                    e(this).data("isCompared", false).removeAttr("style");
                    if (e.inArray(e(this).attr("cid"), c) >= 0) {
                        return true
                    }
                    return false
                }).data("isCompared", true).css(i.objStyle);
                e("#compareNum").text(c.length);
                s(c).done(m);
                return arguments.callee
            }()
        }();

        function n(e) {
            var o = {
                GOMEPRICE: "normal",
                SALEPRICE: "normal",
                AREAPRICE: "normal",
                AREASALEPRICE: "normal",
                TUANPRICE: "tuanqiang",
                RUSHBUYPRICE: "tuanqiang"
            };
            var r = "", a = "";
            switch (o[e.priceType]) {
                case"normal":
                    r = "//item" + i.domain + "/" + e.productId + "-" + e.skuId + ".html";
                    break;
                case"tuanqiang":
                    r = "//item" + i.domain + "/" + e.productId + "-" + e.skuId + ".html";
                    a = '<span class="tags">真划算</span>';
                    break;
                default:
                    break
            }
            return {url: r, tags: a}
        }

        function m(o) {
            var r = "";
            var i = [0, 0, 0, 0];
            var a = {};
            for (var c = 0; c < t; c++) {
                if (!o[c]) {
                    r += '<li class="item-compare"><div class="default"><span>' + (c + 1) + "</span>您还可以继续添加</div></li>"
                } else {
                    a = n(o[c].result.searchPrice);
                    r += '<li class="item-compare"><div class="product"><a href="' + a.url + '" target="_blank" class="pic"><img src="' + o[c].result.img + '" /></a><p class="name"><a href="' + a.url + '" target="_blank">' + o[c].result.displayName + '</a></p><p><a href="javascript:void(0)" class="delete" cid="' + o[c].result.searchPrice.productId + "/" + o[c].result.searchPrice.skuId + '">删除</a><em class="price">' + (o[c].result.searchPrice.price ? "¥" + o[c].result.searchPrice.price.toFixed(2) : "暂无售价") + "</em>" + a.tags + "</p></div></li>";
                    i[c] = o[c].result.searchPrice.skuId
                }
            }
            e("#gm-compareBox-list").empty().html(r);
            if (i[1] != 0) {
                e("#go-commpare").attr("href", "").attr("target", "_blank").removeClass("disable")
            } else {
                e("#go-commpare").attr("href", "javascript:void(0)").attr("target", "").addClass("disable")
            }
        }

        e("#gm-compareBox-hide").on("click", function () {
            e("#gm-compareBox").fadeOut();
            e.cookie("g_co", "hide", {expires: 30, path: "/", domain: i.domain})
        });
        e("#gm-compareBox-clear").on("click", function () {
            c = [];
            d()
        });
        e("#gm-compareBox").delegate(".delete", "click", function () {
            c.removeValve(e(this).attr("cid"));
            d()
        });
        a.delegate(i.obj, "click", function () {
            var o = e(this);
            e.cookie("g_co", "show", {expires: 30, path: "/", domain: i.domain});
            e("#gm-compareBox").css(i.boxStyle).show();
            c = e.cookie("compare") ? e.cookie("compare").replace(/:/g, "/").split("|").splice(0, t) : [];
            if (!o.data("isCompared")) {
                if (c.length >= t) {
                    e("#errorTips").stop(false, true).show().delay(1500).fadeOut();
                    d();
                    return false
                }
                c.push(o.attr("cid"))
            } else {
                c.removeValve(o.attr("cid"))
            }
            d()
        });
        return d
    }
})(jQuery);