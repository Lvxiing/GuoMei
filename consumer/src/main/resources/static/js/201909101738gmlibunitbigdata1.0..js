!function (e, t) {
    var n = e.document, i = e.navigator, r = e.location;
    var a = function () {
        var r = function (e, t) {
                return new r.fn.init(e, t, s)
            }, a = e.jQuery, o = e.$, s, l = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, f = /\S/, u = /^\s+/, c = /\s+$/,
            d = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, p = /^[\],:{}\s]*$/, h = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            m = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, g = /(?:^|:|,)(?:\s*\[)+/g,
            y = /(webkit)[ \/]([\w.]+)/, v = /(opera)(?:.*version)?[ \/]([\w.]+)/, b = /(msie) ([\w.]+)/,
            x = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/gi, T = /^-ms-/, N = function (e, t) {
                return (t + "").toUpperCase()
            }, C = i.userAgent, E, k, S, A = Object.prototype.toString, L = Object.prototype.hasOwnProperty,
            j = Array.prototype.push, F = Array.prototype.slice, D = String.prototype.trim, M = Array.prototype.indexOf,
            O = {};
        r.fn = r.prototype = {
            constructor: r, init: function (e, i, a) {
                var o, s, f, u;
                if (!e) {
                    return this
                }
                if (e.nodeType) {
                    this.context = this[0] = e;
                    this.length = 1;
                    return this
                }
                if (e === "body" && !i && n.body) {
                    this.context = n;
                    this[0] = n.body;
                    this.selector = e;
                    this.length = 1;
                    return this
                }
                if (typeof e === "string") {
                    if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                        o = [null, e, null]
                    } else {
                        o = l.exec(e)
                    }
                    if (o && (o[1] || !i)) {
                        if (o[1]) {
                            i = i instanceof r ? i[0] : i;
                            u = i ? i.ownerDocument || i : n;
                            f = d.exec(e);
                            if (f) {
                                if (r.isPlainObject(i)) {
                                    e = [n.createElement(f[1])];
                                    r.fn.attr.call(e, i, true)
                                } else {
                                    e = [u.createElement(f[1])]
                                }
                            } else {
                                f = r.buildFragment([o[1]], [u]);
                                e = (f.cacheable ? r.clone(f.fragment) : f.fragment).childNodes
                            }
                            return r.merge(this, e)
                        } else {
                            s = n.getElementById(o[2]);
                            if (s && s.parentNode) {
                                if (s.id !== o[2]) {
                                    return a.find(e)
                                }
                                this.length = 1;
                                this[0] = s
                            }
                            this.context = n;
                            this.selector = e;
                            return this
                        }
                    } else {
                        if (!i || i.jquery) {
                            return (i || a).find(e)
                        } else {
                            return this.constructor(i).find(e)
                        }
                    }
                } else {
                    if (r.isFunction(e)) {
                        return a.ready(e)
                    }
                }
                if (e.selector !== t) {
                    this.selector = e.selector;
                    this.context = e.context
                }
                return r.makeArray(e, this)
            }, selector: "", jquery: "1.7.1", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return F.call(this, 0)
            }, get: function (e) {
                return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
            }, pushStack: function (e, t, n) {
                var i = this.constructor();
                if (r.isArray(e)) {
                    j.apply(i, e)
                } else {
                    r.merge(i, e)
                }
                i.prevObject = this;
                i.context = this.context;
                if (t === "find") {
                    i.selector = this.selector + (this.selector ? " " : "") + n
                } else {
                    if (t) {
                        i.selector = this.selector + "." + t + "(" + n + ")"
                    }
                }
                return i
            }, each: function (e, t) {
                return r.each(this, e, t)
            }, ready: function (e) {
                r.bindReady();
                k.add(e);
                return this
            }, eq: function (e) {
                e = +e;
                return e === -1 ? this.slice(e) : this.slice(e, e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            }, map: function (e) {
                return this.pushStack(r.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: j, sort: [].sort, splice: [].splice
        };
        r.fn.init.prototype = r.fn;
        r.extend = r.fn.extend = function () {
            var e, n, i, a, o, s, l = arguments[0] || {}, f = 1, u = arguments.length, c = false;
            if (typeof l === "boolean") {
                c = l;
                l = arguments[1] || {};
                f = 2
            }
            if (typeof l !== "object" && !r.isFunction(l)) {
                l = {}
            }
            if (u === f) {
                l = this;
                --f
            }
            for (; f < u; f++) {
                if ((e = arguments[f]) != null) {
                    for (n in e) {
                        i = l[n];
                        a = e[n];
                        if (l === a) {
                            continue
                        }
                        if (c && a && (r.isPlainObject(a) || (o = r.isArray(a)))) {
                            if (o) {
                                o = false;
                                s = i && r.isArray(i) ? i : []
                            } else {
                                s = i && r.isPlainObject(i) ? i : {}
                            }
                            l[n] = r.extend(c, s, a)
                        } else {
                            if (a !== t) {
                                l[n] = a
                            }
                        }
                    }
                }
            }
            return l
        };
        r.extend({
            noConflict: function (t) {
                if (e.$ === r) {
                    e.$ = o
                }
                if (t && e.jQuery === r) {
                    e.jQuery = a
                }
                return r
            }, isReady: false, readyWait: 1, holdReady: function (e) {
                if (e) {
                    r.readyWait++
                } else {
                    r.ready(true)
                }
            }, ready: function (e) {
                if (e === true && !--r.readyWait || e !== true && !r.isReady) {
                    if (!n.body) {
                        return setTimeout(r.ready, 1)
                    }
                    r.isReady = true;
                    if (e !== true && --r.readyWait > 0) {
                        return
                    }
                    k.fireWith(n, [r]);
                    if (r.fn.trigger) {
                        r(n).trigger("ready").off("ready")
                    }
                }
            }, bindReady: function () {
                if (k) {
                    return
                }
                k = r.Callbacks("once memory");
                if (n.readyState === "complete") {
                    return setTimeout(r.ready, 1)
                }
                if (n.addEventListener) {
                    n.addEventListener("DOMContentLoaded", S, false);
                    e.addEventListener("load", r.ready, false)
                } else {
                    if (n.attachEvent) {
                        n.attachEvent("onreadystatechange", S);
                        e.attachEvent("onload", r.ready);
                        var t = false;
                        try {
                            t = e.frameElement == null
                        } catch (i) {
                        }
                        if (n.documentElement.doScroll && t) {
                            _()
                        }
                    }
                }
            }, isFunction: function (e) {
                return r.type(e) === "function"
            }, isArray: Array.isArray || function (e) {
                return r.type(e) === "array"
            }, isWindow: function (e) {
                return e && typeof e === "object" && "setInterval" in e
            }, isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }, type: function (e) {
                return e == null ? String(e) : O[A.call(e)] || "object"
            }, isPlainObject: function (e) {
                if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) {
                    return false
                }
                try {
                    if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) {
                        return false
                    }
                } catch (n) {
                    return false
                }
                var i;
                for (i in e) {
                }
                return i === t || L.call(e, i)
            }, isEmptyObject: function (e) {
                for (var t in e) {
                    return false
                }
                return true
            }, error: function (e) {
                throw new Error(e)
            }, parseJSON: function (t) {
                if (typeof t !== "string" || !t) {
                    return null
                }
                t = r.trim(t);
                if (e.JSON && e.JSON.parse) {
                    return e.JSON.parse(t)
                }
                if (p.test(t.replace(h, "@").replace(m, "]").replace(g, ""))) {
                    return new Function("return " + t)()
                }
                r.error("Invalid JSON: " + t)
            }, parseXML: function (n) {
                var i, a;
                try {
                    if (e.DOMParser) {
                        a = new DOMParser;
                        i = a.parseFromString(n, "text/xml")
                    } else {
                        i = new ActiveXObject("Microsoft.XMLDOM");
                        i.async = "false";
                        i.loadXML(n)
                    }
                } catch (o) {
                    i = t
                }
                if (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) {
                    r.error("Invalid XML: " + n)
                }
                return i
            }, noop: function () {
            }, globalEval: function (t) {
                if (t && f.test(t)) {
                    (e.execScript || function (t) {
                        e["eval"].call(e, t)
                    })(t)
                }
            }, camelCase: function (e) {
                return e.replace(T, "ms-").replace(w, N)
            }, nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
            }, each: function (e, n, i) {
                var a, o = 0, s = e.length, l = s === t || r.isFunction(e);
                if (i) {
                    if (l) {
                        for (a in e) {
                            if (n.apply(e[a], i) === false) {
                                break
                            }
                        }
                    } else {
                        for (; o < s;) {
                            if (n.apply(e[o++], i) === false) {
                                break
                            }
                        }
                    }
                } else {
                    if (l) {
                        for (a in e) {
                            if (n.call(e[a], a, e[a]) === false) {
                                break
                            }
                        }
                    } else {
                        for (; o < s;) {
                            if (n.call(e[o], o, e[o++]) === false) {
                                break
                            }
                        }
                    }
                }
                return e
            }, trim: D ? function (e) {
                return e == null ? "" : D.call(e)
            } : function (e) {
                return e == null ? "" : e.toString().replace(u, "").replace(c, "")
            }, makeArray: function (e, t) {
                var n = t || [];
                if (e != null) {
                    var i = r.type(e);
                    if (e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e)) {
                        j.call(n, e)
                    } else {
                        r.merge(n, e)
                    }
                }
                return n
            }, inArray: function (e, t, n) {
                var i;
                if (t) {
                    if (M) {
                        return M.call(t, e, n)
                    }
                    i = t.length;
                    n = n ? n < 0 ? Math.max(0, i + n) : n : 0;
                    for (; n < i; n++) {
                        if (n in t && t[n] === e) {
                            return n
                        }
                    }
                }
                return -1
            }, merge: function (e, n) {
                var i = e.length, r = 0;
                if (typeof n.length === "number") {
                    for (var a = n.length; r < a; r++) {
                        e[i++] = n[r]
                    }
                } else {
                    while (n[r] !== t) {
                        e[i++] = n[r++]
                    }
                }
                e.length = i;
                return e
            }, grep: function (e, t, n) {
                var i = [], r;
                n = !!n;
                for (var a = 0, o = e.length; a < o; a++) {
                    r = !!t(e[a], a);
                    if (n !== r) {
                        i.push(e[a])
                    }
                }
                return i
            }, map: function (e, n, i) {
                var a, o, s = [], l = 0, f = e.length,
                    u = e instanceof r || f !== t && typeof f === "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
                if (u) {
                    for (; l < f; l++) {
                        a = n(e[l], l, i);
                        if (a != null) {
                            s[s.length] = a
                        }
                    }
                } else {
                    for (o in e) {
                        a = n(e[o], o, i);
                        if (a != null) {
                            s[s.length] = a
                        }
                    }
                }
                return s.concat.apply([], s)
            }, guid: 1, proxy: function (e, n) {
                if (typeof n === "string") {
                    var i = e[n];
                    n = e;
                    e = i
                }
                if (!r.isFunction(e)) {
                    return t
                }
                var a = F.call(arguments, 2), o = function () {
                    return e.apply(n, a.concat(F.call(arguments)))
                };
                o.guid = e.guid = e.guid || o.guid || r.guid++;
                return o
            }, access: function (e, n, i, a, o, s) {
                var l = e.length;
                if (typeof n === "object") {
                    for (var f in n) {
                        r.access(e, f, n[f], a, o, i)
                    }
                    return e
                }
                if (i !== t) {
                    a = !s && a && r.isFunction(i);
                    for (var u = 0; u < l; u++) {
                        o(e[u], n, a ? i.call(e[u], u, o(e[u], n)) : i, s)
                    }
                    return e
                }
                return l ? o(e[0], n) : t
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (e) {
                e = e.toLowerCase();
                var t = y.exec(e) || v.exec(e) || b.exec(e) || e.indexOf("compatible") < 0 && x.exec(e) || [];
                return {browser: t[1] || "", version: t[2] || "0"}
            }, sub: function () {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }

                r.extend(true, e, this);
                e.superclass = this;
                e.fn = e.prototype = this();
                e.fn.constructor = e;
                e.sub = this.sub;
                e.fn.init = function i(n, i) {
                    if (i && i instanceof r && !(i instanceof e)) {
                        i = e(i)
                    }
                    return r.fn.init.call(this, n, i, t)
                };
                e.fn.init.prototype = e.fn;
                var t = e(n);
                return e
            }, browser: {}
        });
        r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
            O["[object " + t + "]"] = t.toLowerCase()
        });
        E = r.uaMatch(C);
        if (E.browser) {
            r.browser[E.browser] = true;
            r.browser.version = E.version
        }
        if (r.browser.webkit) {
            r.browser.safari = true
        }
        if (f.test(" ")) {
            u = /^[\s\xA0]+/;
            c = /[\s\xA0]+$/
        }
        s = r(n);
        if (n.addEventListener) {
            S = function () {
                n.removeEventListener("DOMContentLoaded", S, false);
                r.ready()
            }
        } else {
            if (n.attachEvent) {
                S = function () {
                    if (n.readyState === "complete") {
                        n.detachEvent("onreadystatechange", S);
                        r.ready()
                    }
                }
            }
        }

        function _() {
            if (r.isReady) {
                return
            }
            try {
                n.documentElement.doScroll("left")
            } catch (e) {
                setTimeout(_, 1);
                return
            }
            r.ready()
        }

        return r
    }();
    var o = {};

    function s(e) {
        var t = o[e] = {}, n, i;
        e = e.split(/\s+/);
        for (n = 0, i = e.length; n < i; n++) {
            t[e[n]] = true
        }
        return t
    }

    a.Callbacks = function (e) {
        e = e ? o[e] || s(e) : {};
        var n = [], i = [], r, l, f, u, c, d = function (t) {
            var i, r, o, s, l;
            for (i = 0, r = t.length; i < r; i++) {
                o = t[i];
                s = a.type(o);
                if (s === "array") {
                    d(o)
                } else {
                    if (s === "function") {
                        if (!e.unique || !h.has(o)) {
                            n.push(o)
                        }
                    }
                }
            }
        }, p = function (t, a) {
            a = a || [];
            r = !e.memory || [t, a];
            l = true;
            c = f || 0;
            f = 0;
            u = n.length;
            for (; n && c < u; c++) {
                if (n[c].apply(t, a) === false && e.stopOnFalse) {
                    r = true;
                    break
                }
            }
            l = false;
            if (n) {
                if (!e.once) {
                    if (i && i.length) {
                        r = i.shift();
                        h.fireWith(r[0], r[1])
                    }
                } else {
                    if (r === true) {
                        h.disable()
                    } else {
                        n = []
                    }
                }
            }
        }, h = {
            add: function () {
                if (n) {
                    var e = n.length;
                    d(arguments);
                    if (l) {
                        u = n.length
                    } else {
                        if (r && r !== true) {
                            f = e;
                            p(r[0], r[1])
                        }
                    }
                }
                return this
            }, remove: function () {
                if (n) {
                    var t = arguments, i = 0, r = t.length;
                    for (; i < r; i++) {
                        for (var a = 0; a < n.length; a++) {
                            if (t[i] === n[a]) {
                                if (l) {
                                    if (a <= u) {
                                        u--;
                                        if (a <= c) {
                                            c--
                                        }
                                    }
                                }
                                n.splice(a--, 1);
                                if (e.unique) {
                                    break
                                }
                            }
                        }
                    }
                }
                return this
            }, has: function (e) {
                if (n) {
                    var t = 0, i = n.length;
                    for (; t < i; t++) {
                        if (e === n[t]) {
                            return true
                        }
                    }
                }
                return false
            }, empty: function () {
                n = [];
                return this
            }, disable: function () {
                n = i = r = t;
                return this
            }, disabled: function () {
                return !n
            }, lock: function () {
                i = t;
                if (!r || r === true) {
                    h.disable()
                }
                return this
            }, locked: function () {
                return !i
            }, fireWith: function (t, n) {
                if (i) {
                    if (l) {
                        if (!e.once) {
                            i.push([t, n])
                        }
                    } else {
                        if (!(e.once && r)) {
                            p(t, n)
                        }
                    }
                }
                return this
            }, fire: function () {
                h.fireWith(this, arguments);
                return this
            }, fired: function () {
                return !!r
            }
        };
        return h
    };
    var l = [].slice;
    a.extend({
        Deferred: function (e) {
            var t = a.Callbacks("once memory"), n = a.Callbacks("once memory"), i = a.Callbacks("memory"),
                r = "pending", o = {resolve: t, reject: n, notify: i}, s = {
                    done: t.add, fail: n.add, progress: i.add, state: function () {
                        return r
                    }, isResolved: t.fired, isRejected: n.fired, then: function (e, t, n) {
                        l.done(e).fail(t).progress(n);
                        return this
                    }, always: function () {
                        l.done.apply(l, arguments).fail.apply(l, arguments);
                        return this
                    }, pipe: function (e, t, n) {
                        return a.Deferred(function (i) {
                            a.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function (e, t) {
                                var n = t[0], r = t[1], o;
                                if (a.isFunction(n)) {
                                    l[e](function () {
                                        o = n.apply(this, arguments);
                                        if (o && a.isFunction(o.promise)) {
                                            o.promise().then(i.resolve, i.reject, i.notify)
                                        } else {
                                            i[r + "With"](this === l ? i : this, [o])
                                        }
                                    })
                                } else {
                                    l[e](i[r])
                                }
                            })
                        }).promise()
                    }, promise: function (e) {
                        if (e == null) {
                            e = s
                        } else {
                            for (var t in s) {
                                e[t] = s[t]
                            }
                        }
                        return e
                    }
                }, l = s.promise({}), f;
            for (f in o) {
                l[f] = o[f].fire;
                l[f + "With"] = o[f].fireWith
            }
            l.done(function () {
                r = "resolved"
            }, n.disable, i.lock).fail(function () {
                r = "rejected"
            }, t.disable, i.lock);
            if (e) {
                e.call(l, l)
            }
            return l
        }, when: function (e) {
            var t = l.call(arguments, 0), n = 0, i = t.length, r = new Array(i), o = i, s = i,
                f = i <= 1 && e && a.isFunction(e.promise) ? e : a.Deferred(), u = f.promise();

            function c(e) {
                return function (n) {
                    t[e] = arguments.length > 1 ? l.call(arguments, 0) : n;
                    if (!--o) {
                        f.resolveWith(f, t)
                    }
                }
            }

            function d(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? l.call(arguments, 0) : t;
                    f.notifyWith(u, r)
                }
            }

            if (i > 1) {
                for (; n < i; n++) {
                    if (t[n] && t[n].promise && a.isFunction(t[n].promise)) {
                        t[n].promise().then(c(n), f.reject, d(n))
                    } else {
                        --o
                    }
                }
                if (!o) {
                    f.resolveWith(f, t)
                }
            } else {
                if (f !== e) {
                    f.resolveWith(f, i ? [e] : [])
                }
            }
            return u
        }
    });
    a.support = function () {
        var t, i, r, o, s, l, f, u, c, d, p, h, m, g = n.createElement("div"), y = n.documentElement;
        g.setAttribute("className", "t");
        g.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
        i = g.getElementsByTagName("*");
        r = g.getElementsByTagName("a")[0];
        if (!i || !i.length || !r) {
            return {}
        }
        o = n.createElement("select");
        s = o.appendChild(n.createElement("option"));
        l = g.getElementsByTagName("input")[0];
        t = {
            leadingWhitespace: g.firstChild.nodeType === 3,
            tbody: !g.getElementsByTagName("tbody").length,
            htmlSerialize: !!g.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: l.value === "on",
            optSelected: s.selected,
            getSetAttribute: g.className !== "t",
            enctype: !!n.createElement("form").enctype,
            html5Clone: n.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
            submitBubbles: true,
            changeBubbles: true,
            focusinBubbles: false,
            deleteExpando: true,
            noCloneEvent: true,
            inlineBlockNeedsLayout: false,
            shrinkWrapBlocks: false,
            reliableMarginRight: true
        };
        l.checked = true;
        t.noCloneChecked = l.cloneNode(true).checked;
        o.disabled = true;
        t.optDisabled = !s.disabled;
        try {
            delete g.test
        } catch (v) {
            t.deleteExpando = false
        }
        if (!g.addEventListener && g.attachEvent && g.fireEvent) {
            g.attachEvent("onclick", function () {
                t.noCloneEvent = false
            });
            g.cloneNode(true).fireEvent("onclick")
        }
        l = n.createElement("input");
        l.value = "t";
        l.setAttribute("type", "radio");
        t.radioValue = l.value === "t";
        l.setAttribute("checked", "checked");
        g.appendChild(l);
        u = n.createDocumentFragment();
        u.appendChild(g.lastChild);
        t.checkClone = u.cloneNode(true).cloneNode(true).lastChild.checked;
        t.appendChecked = l.checked;
        u.removeChild(l);
        u.appendChild(g);
        g.innerHTML = "";
        if (e.getComputedStyle) {
            f = n.createElement("div");
            f.style.width = "0";
            f.style.marginRight = "0";
            g.style.width = "2px";
            g.appendChild(f);
            t.reliableMarginRight = (parseInt((e.getComputedStyle(f, null) || {marginRight: 0}).marginRight, 10) || 0) === 0
        }
        if (g.attachEvent) {
            for (h in{submit: 1, change: 1, focusin: 1}) {
                p = "on" + h;
                m = p in g;
                if (!m) {
                    g.setAttribute(p, "return;");
                    m = typeof g[p] === "function"
                }
                t[h + "Bubbles"] = m
            }
        }
        u.removeChild(g);

        return t
    }();
    var f = /^(?:\{.*\}|\[.*\])$/, u = /([A-Z])/g;
    a.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (a.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: true, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: true},
        hasData: function (e) {
            e = e.nodeType ? a.cache[e[a.expando]] : e[a.expando];
            return !!e && !d(e)
        },
        data: function (e, n, i, r) {
            if (!a.acceptData(e)) {
                return
            }
            var o, s, l, f = a.expando, u = typeof n === "string", c = e.nodeType, d = c ? a.cache : e,
                p = c ? e[f] : e[f] && f, h = n === "events";
            if ((!p || !d[p] || !h && !r && !d[p].data) && u && i === t) {
                return
            }
            if (!p) {
                if (c) {
                    e[f] = p = ++a.uuid
                } else {
                    p = f
                }
            }
            if (!d[p]) {
                d[p] = {};
                if (!c) {
                    d[p].toJSON = a.noop
                }
            }
            if (typeof n === "object" || typeof n === "function") {
                if (r) {
                    d[p] = a.extend(d[p], n)
                } else {
                    d[p].data = a.extend(d[p].data, n)
                }
            }
            o = s = d[p];
            if (!r) {
                if (!s.data) {
                    s.data = {}
                }
                s = s.data
            }
            if (i !== t) {
                s[a.camelCase(n)] = i
            }
            if (h && !s[n]) {
                return o.events
            }
            if (u) {
                l = s[n];
                if (l == null) {
                    l = s[a.camelCase(n)]
                }
            } else {
                l = s
            }
            return l
        },
        removeData: function (e, t, n) {
            if (!a.acceptData(e)) {
                return
            }
            var i, r, o, s = a.expando, l = e.nodeType, f = l ? a.cache : e, u = l ? e[s] : s;
            if (!f[u]) {
                return
            }
            if (t) {
                i = n ? f[u] : f[u].data;
                if (i) {
                    if (!a.isArray(t)) {
                        if (t in i) {
                            t = [t]
                        } else {
                            t = a.camelCase(t);
                            if (t in i) {
                                t = [t]
                            } else {
                                t = t.split(" ")
                            }
                        }
                    }
                    for (r = 0, o = t.length; r < o; r++) {
                        delete i[t[r]]
                    }
                    if (!(n ? d : a.isEmptyObject)(i)) {
                        return
                    }
                }
            }
            if (!n) {
                delete f[u].data;
                if (!d(f[u])) {
                    return
                }
            }
            if (a.support.deleteExpando || !f.setInterval) {
                delete f[u]
            } else {
                f[u] = null
            }
            if (l) {
                if (a.support.deleteExpando) {
                    delete e[s]
                } else {
                    if (e.removeAttribute) {
                        e.removeAttribute(s)
                    } else {
                        e[s] = null
                    }
                }
            }
        },
        _data: function (e, t, n) {
            return a.data(e, t, n, true)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = a.noData[e.nodeName.toLowerCase()];
                if (t) {
                    return !(t === true || e.getAttribute("classid") !== t)
                }
            }
            return true
        }
    });
    a.fn.extend({
        data: function (e, n) {
            var i, r, o, s = null;
            if (typeof e === "undefined") {
                if (this.length) {
                    s = a.data(this[0]);
                    if (this[0].nodeType === 1 && !a._data(this[0], "parsedAttrs")) {
                        r = this[0].attributes;
                        for (var l = 0, f = r.length; l < f; l++) {
                            o = r[l].name;
                            if (o.indexOf("data-") === 0) {
                                o = a.camelCase(o.substring(5));
                                c(this[0], o, s[o])
                            }
                        }
                        a._data(this[0], "parsedAttrs", true)
                    }
                }
                return s
            } else {
                if (typeof e === "object") {
                    return this.each(function () {
                        a.data(this, e)
                    })
                }
            }
            i = e.split(".");
            i[1] = i[1] ? "." + i[1] : "";
            if (n === t) {
                s = this.triggerHandler("getData" + i[1] + "!", [i[0]]);
                if (s === t && this.length) {
                    s = a.data(this[0], e);
                    s = c(this[0], e, s)
                }
                return s === t && i[1] ? this.data(i[0]) : s
            } else {
                return this.each(function () {
                    var t = a(this), r = [i[0], n];
                    t.triggerHandler("setData" + i[1] + "!", r);
                    a.data(this, e, n);
                    t.triggerHandler("changeData" + i[1] + "!", r)
                })
            }
        }, removeData: function (e) {
            return this.each(function () {
                a.removeData(this, e)
            })
        }
    });

    function c(e, n, i) {
        if (i === t && e.nodeType === 1) {
            var r = "data-" + n.replace(u, "-$1").toLowerCase();
            i = e.getAttribute(r);
            if (typeof i === "string") {
                try {
                    i = i === "true" ? true : i === "false" ? false : i === "null" ? null : a.isNumeric(i) ? parseFloat(i) : f.test(i) ? a.parseJSON(i) : i
                } catch (o) {
                }
                a.data(e, n, i)
            } else {
                i = t
            }
        }
        return i
    }

    function d(e) {
        for (var t in e) {
            if (t === "data" && a.isEmptyObject(e[t])) {
                continue
            }
            if (t !== "toJSON") {
                return false
            }
        }
        return true
    }

    function p(e, t, n) {
        var i = t + "defer", r = t + "queue", o = t + "mark", s = a._data(e, i);
        if (s && (n === "queue" || !a._data(e, r)) && (n === "mark" || !a._data(e, o))) {
            setTimeout(function () {
                if (!a._data(e, r) && !a._data(e, o)) {
                    a.removeData(e, i, true);
                    s.fire()
                }
            }, 0)
        }
    }

    a.extend({
        _mark: function (e, t) {
            if (e) {
                t = (t || "fx") + "mark";
                a._data(e, t, (a._data(e, t) || 0) + 1)
            }
        }, _unmark: function (e, t, n) {
            if (e !== true) {
                n = t;
                t = e;
                e = false
            }
            if (t) {
                n = n || "fx";
                var i = n + "mark", r = e ? 0 : (a._data(t, i) || 1) - 1;
                if (r) {
                    a._data(t, i, r)
                } else {
                    a.removeData(t, i, true);
                    p(t, n, "mark")
                }
            }
        }, queue: function (e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = a._data(e, t);
                if (n) {
                    if (!i || a.isArray(n)) {
                        i = a._data(e, t, a.makeArray(n))
                    } else {
                        i.push(n)
                    }
                }
                return i || []
            }
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = a.queue(e, t), i = n.shift(), r = {};
            if (i === "inprogress") {
                i = n.shift()
            }
            if (i) {
                if (t === "fx") {
                    n.unshift("inprogress")
                }
                a._data(e, t + ".run", r);
                i.call(e, function () {
                    a.dequeue(e, t)
                }, r)
            }
            if (!n.length) {
                a.removeData(e, t + "queue " + t + ".run", true);
                p(e, t, "queue")
            }
        }
    });
    a.fn.extend({
        queue: function (e, n) {
            if (typeof e !== "string") {
                n = e;
                e = "fx"
            }
            if (n === t) {
                return a.queue(this[0], e)
            }
            return this.each(function () {
                var t = a.queue(this, e, n);
                if (e === "fx" && t[0] !== "inprogress") {
                    a.dequeue(this, e)
                }
            })
        }, dequeue: function (e) {
            return this.each(function () {
                a.dequeue(this, e)
            })
        }, delay: function (e, t) {
            e = a.fx ? a.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function (t, n) {
                var i = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            if (typeof e !== "string") {
                n = e;
                e = t
            }
            e = e || "fx";
            var i = a.Deferred(), r = this, o = r.length, s = 1, l = e + "defer", f = e + "queue", u = e + "mark", c;

            function d() {
                if (!--s) {
                    i.resolveWith(r, [r])
                }
            }

            while (o--) {
                if (c = a.data(r[o], l, t, true) || (a.data(r[o], f, t, true) || a.data(r[o], u, t, true)) && a.data(r[o], l, a.Callbacks("once memory"), true)) {
                    s++;
                    c.add(d)
                }
            }
            d();
            return i.promise()
        }
    });
    var h = /[\n\t\r]/g, m = /\s+/, g = /\r/g, y = /^(?:button|input)$/i,
        v = /^(?:button|input|object|select|textarea)$/i, b = /^a(?:rea)?$/i,
        x = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        w = a.support.getSetAttribute, T, N, C;
    a.fn.extend({
        attr: function (e, t) {
            return a.access(this, e, t, true, a.attr)
        }, removeAttr: function (e) {
            return this.each(function () {
                a.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return a.access(this, e, t, true, a.prop)
        }, removeProp: function (e) {
            e = a.propFix[e] || e;
            return this.each(function () {
                try {
                    this[e] = t;
                    delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, i, r, o, s, l;
            if (a.isFunction(e)) {
                return this.each(function (t) {
                    a(this).addClass(e.call(this, t, this.className))
                })
            }
            if (e && typeof e === "string") {
                t = e.split(m);
                for (n = 0, i = this.length; n < i; n++) {
                    r = this[n];
                    if (r.nodeType === 1) {
                        if (!r.className && t.length === 1) {
                            r.className = e
                        } else {
                            o = " " + r.className + " ";
                            for (s = 0, l = t.length; s < l; s++) {
                                if (!~o.indexOf(" " + t[s] + " ")) {
                                    o += t[s] + " "
                                }
                            }
                            r.className = a.trim(o)
                        }
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var n, i, r, o, s, l, f;
            if (a.isFunction(e)) {
                return this.each(function (t) {
                    a(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (e && typeof e === "string" || e === t) {
                n = (e || "").split(m);
                for (i = 0, r = this.length; i < r; i++) {
                    o = this[i];
                    if (o.nodeType === 1 && o.className) {
                        if (e) {
                            s = (" " + o.className + " ").replace(h, " ");
                            for (l = 0, f = n.length; l < f; l++) {
                                s = s.replace(" " + n[l] + " ", " ")
                            }
                            o.className = a.trim(s)
                        } else {
                            o.className = ""
                        }
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, i = typeof t === "boolean";
            if (a.isFunction(e)) {
                return this.each(function (n) {
                    a(this).toggleClass(e.call(this, n, this.className, t), t)
                })
            }
            return this.each(function () {
                if (n === "string") {
                    var r, o = 0, s = a(this), l = t, f = e.split(m);
                    while (r = f[o++]) {
                        l = i ? l : !s.hasClass(r);
                        s[l ? "addClass" : "removeClass"](r)
                    }
                } else {
                    if (n === "undefined" || n === "boolean") {
                        if (this.className) {
                            a._data(this, "__className__", this.className)
                        }
                        this.className = this.className || e === false ? "" : a._data(this, "__className__") || ""
                    }
                }
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, i = this.length;
            for (; n < i; n++) {
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(h, " ").indexOf(t) > -1) {
                    return true
                }
            }
            return false
        }, val: function (e) {
            var n, i, r, o = this[0];
            if (!arguments.length) {
                if (o) {
                    n = a.valHooks[o.nodeName.toLowerCase()] || a.valHooks[o.type];
                    if (n && "get" in n && (i = n.get(o, "value")) !== t) {
                        return i
                    }
                    i = o.value;
                    return typeof i === "string" ? i.replace(g, "") : i == null ? "" : i
                }
                return
            }
            r = a.isFunction(e);
            return this.each(function (i) {
                var o = a(this), s;
                if (this.nodeType !== 1) {
                    return
                }
                if (r) {
                    s = e.call(this, i, o.val())
                } else {
                    s = e
                }
                if (s == null) {
                    s = ""
                } else {
                    if (typeof s === "number") {
                        s += ""
                    } else {
                        if (a.isArray(s)) {
                            s = a.map(s, function (e) {
                                return e == null ? "" : e + ""
                            })
                        }
                    }
                }
                n = a.valHooks[this.nodeName.toLowerCase()] || a.valHooks[this.type];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) {
                    this.value = s
                }
            })
        }
    });
    a.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, i, r, o = e.selectedIndex, s = [], l = e.options, f = e.type === "select-one";
                    if (o < 0) {
                        return null
                    }
                    n = f ? o : 0;
                    i = f ? o + 1 : l.length;
                    for (; n < i; n++) {
                        r = l[n];
                        if (r.selected && (a.support.optDisabled ? !r.disabled : r.getAttribute("disabled") === null) && (!r.parentNode.disabled || !a.nodeName(r.parentNode, "optgroup"))) {
                            t = a(r).val();
                            if (f) {
                                return t
                            }
                            s.push(t)
                        }
                    }
                    if (f && !s.length && l.length) {
                        return a(l[o]).val()
                    }
                    return s
                }, set: function (e, t) {
                    var n = a.makeArray(t);
                    a(e).find("option").each(function () {
                        this.selected = a.inArray(a(this).val(), n) >= 0
                    });
                    if (!n.length) {
                        e.selectedIndex = -1
                    }
                    return n
                }
            }
        },
        attrFn: {val: true, css: true, html: true, text: true, data: true, width: true, height: true, offset: true},
        attr: function (e, n, i, r) {
            var o, s, l, f = e.nodeType;
            if (!e || f === 3 || f === 8 || f === 2) {
                return
            }
            if (r && n in a.attrFn) {
                return a(e)[n](i)
            }
            if (typeof e.getAttribute === "undefined") {
                return a.prop(e, n, i)
            }
            l = f !== 1 || !a.isXMLDoc(e);
            if (l) {
                n = n.toLowerCase();
                s = a.attrHooks[n] || (x.test(n) ? N : T)
            }
            if (i !== t) {
                if (i === null) {
                    a.removeAttr(e, n);
                    return
                } else {
                    if (s && "set" in s && l && (o = s.set(e, i, n)) !== t) {
                        return o
                    } else {
                        e.setAttribute(n, "" + i);
                        return i
                    }
                }
            } else {
                if (s && "get" in s && l && (o = s.get(e, n)) !== null) {
                    return o
                } else {
                    o = e.getAttribute(n);
                    return o === null ? t : o
                }
            }
        },
        removeAttr: function (e, t) {
            var n, i, r, o, s = 0;
            if (t && e.nodeType === 1) {
                i = t.toLowerCase().split(m);
                o = i.length;
                for (; s < o; s++) {
                    r = i[s];
                    if (r) {
                        n = a.propFix[r] || r;
                        a.attr(e, r, "");
                        e.removeAttribute(w ? r : n);
                        if (x.test(r) && n in e) {
                            e[n] = false
                        }
                    }
                }
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (y.test(e.nodeName) && e.parentNode) {
                        a.error("type property can't be changed")
                    } else {
                        if (!a.support.radioValue && t === "radio" && a.nodeName(e, "input")) {
                            var n = e.value;
                            e.setAttribute("type", t);
                            if (n) {
                                e.value = n
                            }
                            return t
                        }
                    }
                }
            }, value: {
                get: function (e, t) {
                    if (T && a.nodeName(e, "button")) {
                        return T.get(e, t)
                    }
                    return t in e ? e.value : null
                }, set: function (e, t, n) {
                    if (T && a.nodeName(e, "button")) {
                        return T.set(e, t, n)
                    }
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, i) {
            var r, o, s, l = e.nodeType;
            if (!e || l === 3 || l === 8 || l === 2) {
                return
            }
            s = l !== 1 || !a.isXMLDoc(e);
            if (s) {
                n = a.propFix[n] || n;
                o = a.propHooks[n]
            }
            if (i !== t) {
                if (o && "set" in o && (r = o.set(e, i, n)) !== t) {
                    return r
                } else {
                    return e[n] = i
                }
            } else {
                if (o && "get" in o && (r = o.get(e, n)) !== null) {
                    return r
                } else {
                    return e[n]
                }
            }
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : v.test(e.nodeName) || b.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    });
    a.attrHooks.tabindex = a.propHooks.tabIndex;
    N = {
        get: function (e, n) {
            var i, r = a.prop(e, n);
            return r === true || typeof r !== "boolean" && (i = e.getAttributeNode(n)) && i.nodeValue !== false ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            var i;
            if (t === false) {
                a.removeAttr(e, n)
            } else {
                i = a.propFix[n] || n;
                if (i in e) {
                    e[i] = true
                }
                e.setAttribute(n, n.toLowerCase())
            }
            return n
        }
    };
    if (!w) {
        C = {name: true, id: true};
        T = a.valHooks.button = {
            get: function (e, n) {
                var i;
                i = e.getAttributeNode(n);
                return i && (C[n] ? i.nodeValue !== "" : i.specified) ? i.nodeValue : t
            }, set: function (e, t, i) {
                var r = e.getAttributeNode(i);
                if (!r) {
                    r = n.createAttribute(i);
                    e.setAttributeNode(r)
                }
                return r.nodeValue = t + ""
            }
        };
        a.attrHooks.tabindex.set = T.set;
        a.each(["width", "height"], function (e, t) {
            a.attrHooks[t] = a.extend(a.attrHooks[t], {
                set: function (e, n) {
                    if (n === "") {
                        e.setAttribute(t, "auto");
                        return n
                    }
                }
            })
        });
        a.attrHooks.contenteditable = {
            get: T.get, set: function (e, t, n) {
                if (t === "") {
                    t = "false"
                }
                T.set(e, t, n)
            }
        }
    }
    if (!a.support.hrefNormalized) {
        a.each(["href", "src", "width", "height"], function (e, n) {
            a.attrHooks[n] = a.extend(a.attrHooks[n], {
                get: function (e) {
                    var i = e.getAttribute(n, 2);
                    return i === null ? t : i
                }
            })
        })
    }
    if (!a.support.style) {
        a.attrHooks.style = {
            get: function (e) {
                return e.style.cssText.toLowerCase() || t
            }, set: function (e, t) {
                return e.style.cssText = "" + t
            }
        }
    }
    if (!a.support.optSelected) {
        a.propHooks.selected = a.extend(a.propHooks.selected, {
            get: function (e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                }
                return null
            }
        })
    }
    if (!a.support.enctype) {
        a.propFix.enctype = "encoding"
    }
    if (!a.support.checkOn) {
        a.each(["radio", "checkbox"], function () {
            a.valHooks[this] = {
                get: function (e) {
                    return e.getAttribute("value") === null ? "on" : e.value
                }
            }
        })
    }
    a.each(["radio", "checkbox"], function () {
        a.valHooks[this] = a.extend(a.valHooks[this], {
            set: function (e, t) {
                if (a.isArray(t)) {
                    return e.checked = a.inArray(a(e).val(), t) >= 0
                }
            }
        })
    });
    var E = /^(?:textarea|input|select)$/i, k = /^([^\.]*)?(?:\.(.+))?$/, S = /\bhover(\.\S+)?\b/, A = /^key/,
        L = /^(?:mouse|contextmenu)|click/, j = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/, D = function (e) {
            var t = F.exec(e);
            if (t) {
                t[1] = (t[1] || "").toLowerCase();
                t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")
            }
            return t
        }, M = function (e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
        }, O = function (e) {
            return a.event.special.hover ? e : e.replace(S, "mouseenter$1 mouseleave$1")
        };
    a.event = {
        add: function (e, n, i, r, o) {
            var s, l, f, u, c, d, p, h, m, g, y, v;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !i || !(s = a._data(e))) {
                return
            }
            if (i.handler) {
                m = i;
                i = m.handler
            }
            if (!i.guid) {
                i.guid = a.guid++
            }
            f = s.events;
            if (!f) {
                s.events = f = {}
            }
            l = s.handle;
            if (!l) {
                s.handle = l = function (e) {
                    return typeof a !== "undefined" && (!e || a.event.triggered !== e.type) ? a.event.dispatch.apply(l.elem, arguments) : t
                };
                l.elem = e
            }
            n = a.trim(O(n)).split(" ");
            for (u = 0; u < n.length; u++) {
                c = k.exec(n[u]) || [];
                d = c[1];
                p = (c[2] || "").split(".").sort();
                v = a.event.special[d] || {};
                d = (o ? v.delegateType : v.bindType) || d;
                v = a.event.special[d] || {};
                h = a.extend({
                    type: d,
                    origType: c[1],
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    quick: D(o),
                    namespace: p.join(".")
                }, m);
                y = f[d];
                if (!y) {
                    y = f[d] = [];
                    y.delegateCount = 0;
                    if (!v.setup || v.setup.call(e, r, p, l) === false) {
                        if (e.addEventListener) {
                            e.addEventListener(d, l, false)
                        } else {
                            if (e.attachEvent) {
                                e.attachEvent("on" + d, l)
                            }
                        }
                    }
                }
                if (v.add) {
                    v.add.call(e, h);
                    if (!h.handler.guid) {
                        h.handler.guid = i.guid
                    }
                }
                if (o) {
                    y.splice(y.delegateCount++, 0, h)
                } else {
                    y.push(h)
                }
                a.event.global[d] = true
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, i, r) {
            var o = a.hasData(e) && a._data(e), s, l, f, u, c, d, p, h, m, g, y, v;
            if (!o || !(h = o.events)) {
                return
            }
            t = a.trim(O(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                l = k.exec(t[s]) || [];
                f = u = l[1];
                c = l[2];
                if (!f) {
                    for (f in h) {
                        a.event.remove(e, f + t[s], n, i, true)
                    }
                    continue
                }
                m = a.event.special[f] || {};
                f = (i ? m.delegateType : m.bindType) || f;
                y = h[f] || [];
                d = y.length;
                c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                for (p = 0; p < y.length; p++) {
                    v = y[p];
                    if ((r || u === v.origType) && (!n || n.guid === v.guid) && (!c || c.test(v.namespace)) && (!i || i === v.selector || i === "**" && v.selector)) {
                        y.splice(p--, 1);
                        if (v.selector) {
                            y.delegateCount--
                        }
                        if (m.remove) {
                            m.remove.call(e, v)
                        }
                    }
                }
                if (y.length === 0 && d !== y.length) {
                    if (!m.teardown || m.teardown.call(e, c) === false) {
                        a.removeEvent(e, f, o.handle)
                    }
                    delete h[f]
                }
            }
            if (a.isEmptyObject(h)) {
                g = o.handle;
                if (g) {
                    g.elem = null
                }
                a.removeData(e, ["events", "handle"], true)
            }
        },
        customEvent: {getData: true, setData: true, changeData: true},
        trigger: function (n, i, r, o) {
            if (r && (r.nodeType === 3 || r.nodeType === 8)) {
                return
            }
            var s = n.type || n, l = [], f, u, c, d, p, h, m, g, y, v;
            if (j.test(s + a.event.triggered)) {
                return
            }
            if (s.indexOf("!") >= 0) {
                s = s.slice(0, -1);
                u = true
            }
            if (s.indexOf(".") >= 0) {
                l = s.split(".");
                s = l.shift();
                l.sort()
            }
            if ((!r || a.event.customEvent[s]) && !a.event.global[s]) {
                return
            }
            n = typeof n === "object" ? n[a.expando] ? n : new a.Event(s, n) : new a.Event(s);
            n.type = s;
            n.isTrigger = true;
            n.exclusive = u;
            n.namespace = l.join(".");
            n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
            h = s.indexOf(":") < 0 ? "on" + s : "";
            if (!r) {
                f = a.cache;
                for (c in f) {
                    if (f[c].events && f[c].events[s]) {
                        a.event.trigger(n, i, f[c].handle.elem, true)
                    }
                }
                return
            }
            n.result = t;
            if (!n.target) {
                n.target = r
            }
            i = i != null ? a.makeArray(i) : [];
            i.unshift(n);
            m = a.event.special[s] || {};
            if (m.trigger && m.trigger.apply(r, i) === false) {
                return
            }
            y = [[r, m.bindType || s]];
            if (!o && !m.noBubble && !a.isWindow(r)) {
                v = m.delegateType || s;
                d = j.test(v + s) ? r : r.parentNode;
                p = null;
                for (; d; d = d.parentNode) {
                    y.push([d, v]);
                    p = d
                }
                if (p && p === r.ownerDocument) {
                    y.push([p.defaultView || p.parentWindow || e, v])
                }
            }
            for (c = 0; c < y.length && !n.isPropagationStopped(); c++) {
                d = y[c][0];
                n.type = y[c][1];
                g = (a._data(d, "events") || {})[n.type] && a._data(d, "handle");
                if (g) {
                    g.apply(d, i)
                }
                g = h && d[h];
                if (g && a.acceptData(d) && g.apply(d, i) === false) {
                    n.preventDefault()
                }
            }
            n.type = s;
            if (!o && !n.isDefaultPrevented()) {
                if ((!m._default || m._default.apply(r.ownerDocument, i) === false) && !(s === "click" && a.nodeName(r, "a")) && a.acceptData(r)) {
                    if (h && r[s] && (s !== "focus" && s !== "blur" || n.target.offsetWidth !== 0) && !a.isWindow(r)) {
                        p = r[h];
                        if (p) {
                            r[h] = null
                        }
                        a.event.triggered = s;
                        r[s]();
                        a.event.triggered = t;
                        if (p) {
                            r[h] = p
                        }
                    }
                }
            }
            return n.result
        },
        dispatch: function (n) {
            n = a.event.fix(n || e.event);
            var i = (a._data(this, "events") || {})[n.type] || [], r = i.delegateCount, o = [].slice.call(arguments, 0),
                s = !n.exclusive && !n.namespace, l = [], f, u, c, d, p, h, m, g, y, v, b;
            o[0] = n;
            n.delegateTarget = this;
            if (r && !n.target.disabled && !(n.button && n.type === "click")) {
                d = a(this);
                d.context = this.ownerDocument || this;
                for (c = n.target; c != this; c = c.parentNode || this) {
                    h = {};
                    g = [];
                    d[0] = c;
                    for (f = 0; f < r; f++) {
                        y = i[f];
                        v = y.selector;
                        if (h[v] === t) {
                            h[v] = y.quick ? M(c, y.quick) : d.is(v)
                        }
                        if (h[v]) {
                            g.push(y)
                        }
                    }
                    if (g.length) {
                        l.push({elem: c, matches: g})
                    }
                }
            }
            if (i.length > r) {
                l.push({elem: this, matches: i.slice(r)})
            }
            for (f = 0; f < l.length && !n.isPropagationStopped(); f++) {
                m = l[f];
                n.currentTarget = m.elem;
                for (u = 0; u < m.matches.length && !n.isImmediatePropagationStopped(); u++) {
                    y = m.matches[u];
                    if (s || !n.namespace && !y.namespace || n.namespace_re && n.namespace_re.test(y.namespace)) {
                        n.data = y.data;
                        n.handleObj = y;
                        p = ((a.event.special[y.origType] || {}).handle || y.handler).apply(m.elem, o);
                        if (p !== t) {
                            n.result = p;
                            if (p === false) {
                                n.preventDefault();
                                n.stopPropagation()
                            }
                        }
                    }
                }
            }
            return n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                if (e.which == null) {
                    e.which = t.charCode != null ? t.charCode : t.keyCode
                }
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var r, a, o, s = i.button, l = i.fromElement;
                if (e.pageX == null && i.clientX != null) {
                    r = e.target.ownerDocument || n;
                    a = r.documentElement;
                    o = r.body;
                    e.pageX = i.clientX + (a && a.scrollLeft || o && o.scrollLeft || 0) - (a && a.clientLeft || o && o.clientLeft || 0);
                    e.pageY = i.clientY + (a && a.scrollTop || o && o.scrollTop || 0) - (a && a.clientTop || o && o.clientTop || 0)
                }
                if (!e.relatedTarget && l) {
                    e.relatedTarget = l === e.target ? i.toElement : l
                }
                if (!e.which && s !== t) {
                    e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0
                }
                return e
            }
        },
        fix: function (e) {
            if (e[a.expando]) {
                return e
            }
            var i, r, o = e, s = a.event.fixHooks[e.type] || {}, l = s.props ? this.props.concat(s.props) : this.props;
            e = a.Event(o);
            for (i = l.length; i;) {
                r = l[--i];
                e[r] = o[r]
            }
            if (!e.target) {
                e.target = o.srcElement || n
            }
            if (e.target.nodeType === 3) {
                e.target = e.target.parentNode
            }
            if (e.metaKey === t) {
                e.metaKey = e.ctrlKey
            }
            return s.filter ? s.filter(e, o) : e
        },
        special: {
            ready: {setup: a.bindReady},
            load: {noBubble: true},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (e, t, n) {
                    if (a.isWindow(this)) {
                        this.onbeforeunload = n
                    }
                }, teardown: function (e, t) {
                    if (this.onbeforeunload === t) {
                        this.onbeforeunload = null
                    }
                }
            }
        },
        simulate: function (e, t, n, i) {
            var r = a.extend(new a.Event, n, {type: e, isSimulated: true, originalEvent: {}});
            if (i) {
                a.event.trigger(r, null, t)
            } else {
                a.event.dispatch.call(t, r)
            }
            if (r.isDefaultPrevented()) {
                n.preventDefault()
            }
        }
    };
    a.event.handle = a.event.dispatch;
    a.removeEvent = n.removeEventListener ? function (e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n, false)
        }
    } : function (e, t, n) {
        if (e.detachEvent) {
            e.detachEvent("on" + t, n)
        }
    };
    a.Event = function (e, t) {
        if (!(this instanceof a.Event)) {
            return new a.Event(e, t)
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault() ? H : _
        } else {
            this.type = e
        }
        if (t) {
            a.extend(this, t)
        }
        this.timeStamp = e && e.timeStamp || a.now();
        this[a.expando] = true
    };

    function _() {
        return false
    }

    function H() {
        return true
    }

    a.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = H;
            var e = this.originalEvent;
            if (!e) {
                return
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
        }, stopPropagation: function () {
            this.isPropagationStopped = H;
            var e = this.originalEvent;
            if (!e) {
                return
            }
            if (e.stopPropagation) {
                e.stopPropagation()
            }
            e.cancelBubble = true
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = H;
            this.stopPropagation()
        }, isDefaultPrevented: _, isPropagationStopped: _, isImmediatePropagationStopped: _
    };
    a.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        a.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n = this, i = e.relatedTarget, r = e.handleObj, o = r.selector, s;
                if (!i || i !== n && !a.contains(n, i)) {
                    e.type = r.origType;
                    s = r.handler.apply(this, arguments);
                    e.type = t
                }
                return s
            }
        }
    });
    if (!a.support.submitBubbles) {
        a.event.special.submit = {
            setup: function () {
                if (a.nodeName(this, "form")) {
                    return false
                }
                a.event.add(this, "click._submit keypress._submit", function (e) {
                    var n = e.target, i = a.nodeName(n, "input") || a.nodeName(n, "button") ? n.form : t;
                    if (i && !i._submit_attached) {
                        a.event.add(i, "submit._submit", function (e) {
                            if (this.parentNode && !e.isTrigger) {
                                a.event.simulate("submit", this.parentNode, e, true)
                            }
                        });
                        i._submit_attached = true
                    }
                })
            }, teardown: function () {
                if (a.nodeName(this, "form")) {
                    return false
                }
                a.event.remove(this, "._submit")
            }
        }
    }
    if (!a.support.changeBubbles) {
        a.event.special.change = {
            setup: function () {
                if (E.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        a.event.add(this, "propertychange._change", function (e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        a.event.add(this, "click._change", function (e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false;
                                a.event.simulate("change", this, e, true)
                            }
                        })
                    }
                    return false
                }
                a.event.add(this, "beforeactivate._change", function (e) {
                    var t = e.target;
                    if (E.test(t.nodeName) && !t._change_attached) {
                        a.event.add(t, "change._change", function (e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                a.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        t._change_attached = true
                    }
                })
            }, handle: function (e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") {
                    return e.handleObj.handler.apply(this, arguments)
                }
            }, teardown: function () {
                a.event.remove(this, "._change");
                return E.test(this.nodeName)
            }
        }
    }
    if (!a.support.focusinBubbles) {
        a.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var i = 0, r = function (e) {
                a.event.simulate(t, e.target, a.event.fix(e), true)
            };
            a.event.special[t] = {
                setup: function () {
                    if (i++ === 0) {
                        n.addEventListener(e, r, true)
                    }
                }, teardown: function () {
                    if (--i === 0) {
                        n.removeEventListener(e, r, true)
                    }
                }
            }
        })
    }
    a.fn.extend({
        on: function (e, n, i, r, o) {
            var s, l;
            if (typeof e === "object") {
                if (typeof n !== "string") {
                    i = n;
                    n = t
                }
                for (l in e) {
                    this.on(l, n, i, e[l], o)
                }
                return this
            }
            if (i == null && r == null) {
                r = n;
                i = n = t
            } else {
                if (r == null) {
                    if (typeof n === "string") {
                        r = i;
                        i = t
                    } else {
                        r = i;
                        i = n;
                        n = t
                    }
                }
            }
            if (r === false) {
                r = _
            } else {
                if (!r) {
                    return this
                }
            }
            if (o === 1) {
                s = r;
                r = function (e) {
                    a().off(e);
                    return s.apply(this, arguments)
                };
                r.guid = s.guid || (s.guid = a.guid++)
            }
            return this.each(function () {
                a.event.add(this, e, r, i, n)
            })
        }, one: function (e, t, n, i) {
            return this.on.call(this, e, t, n, i, 1)
        }, off: function (e, n, i) {
            if (e && e.preventDefault && e.handleObj) {
                var r = e.handleObj;
                a(e.delegateTarget).off(r.namespace ? r.type + "." + r.namespace : r.type, r.selector, r.handler);
                return this
            }
            if (typeof e === "object") {
                for (var o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            if (n === false || typeof n === "function") {
                i = n;
                n = t
            }
            if (i === false) {
                i = _
            }
            return this.each(function () {
                a.event.remove(this, e, i, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, live: function (e, t, n) {
            a(this.context).on(e, this.selector, t, n);
            return this
        }, die: function (e, t) {
            a(this.context).off(e, this.selector || "**", t);
            return this
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        }, trigger: function (e, t) {
            return this.each(function () {
                a.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            if (this[0]) {
                return a.event.trigger(e, t, this[0], true)
            }
        }, toggle: function (e) {
            var t = arguments, n = e.guid || a.guid++, i = 0, r = function (n) {
                var r = (a._data(this, "lastToggle" + e.guid) || 0) % i;
                a._data(this, "lastToggle" + e.guid, r + 1);
                n.preventDefault();
                return t[r].apply(this, arguments) || false
            };
            r.guid = n;
            while (i < t.length) {
                t[i++].guid = n
            }
            return this.click(r)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    a.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        a.fn[t] = function (e, n) {
            if (n == null) {
                n = e;
                e = null
            }
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        };
        if (a.attrFn) {
            a.attrFn[t] = true
        }
        if (A.test(t)) {
            a.event.fixHooks[t] = a.event.keyHooks
        }
        if (L.test(t)) {
            a.event.fixHooks[t] = a.event.mouseHooks
        }
    });
    !function () {
        var e = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = "sizcache" + (Math.random() + "").replace(".", ""), r = 0, o = Object.prototype.toString, s = false,
            l = true, f = /\\/g, u = /\r\n/g, c = /\W/;
        [0, 0].sort(function () {
            l = false;
            return 0
        });
        var d = function (t, i, r, a) {
            r = r || [];
            i = i || n;
            var s = i;
            if (i.nodeType !== 1 && i.nodeType !== 9) {
                return []
            }
            if (!t || typeof t !== "string") {
                return r
            }
            var l, f, u, c, p, g, y, b, x = true, w = d.isXML(i), T = [], N = t;
            do {
                e.exec("");
                l = e.exec(N);
                if (l) {
                    N = l[3];
                    T.push(l[1]);
                    if (l[2]) {
                        c = l[3];
                        break
                    }
                }
            } while (l);
            if (T.length > 1 && m.exec(t)) {
                if (T.length === 2 && h.relative[T[0]]) {
                    f = C(T[0] + T[1], i, a)
                } else {
                    f = h.relative[T[0]] ? [i] : d(T.shift(), i);
                    while (T.length) {
                        t = T.shift();
                        if (h.relative[t]) {
                            t += T.shift()
                        }
                        f = C(t, f, a)
                    }
                }
            } else {
                if (!a && T.length > 1 && i.nodeType === 9 && !w && h.match.ID.test(T[0]) && !h.match.ID.test(T[T.length - 1])) {
                    p = d.find(T.shift(), i, w);
                    i = p.expr ? d.filter(p.expr, p.set)[0] : p.set[0]
                }
                if (i) {
                    p = a ? {
                        expr: T.pop(),
                        set: v(a)
                    } : d.find(T.pop(), T.length === 1 && (T[0] === "~" || T[0] === "+") && i.parentNode ? i.parentNode : i, w);
                    f = p.expr ? d.filter(p.expr, p.set) : p.set;
                    if (T.length > 0) {
                        u = v(f)
                    } else {
                        x = false
                    }
                    while (T.length) {
                        g = T.pop();
                        y = g;
                        if (!h.relative[g]) {
                            g = ""
                        } else {
                            y = T.pop()
                        }
                        if (y == null) {
                            y = i
                        }
                        h.relative[g](u, y, w)
                    }
                } else {
                    u = T = []
                }
            }
            if (!u) {
                u = f
            }
            if (!u) {
                d.error(g || t)
            }
            if (o.call(u) === "[object Array]") {
                if (!x) {
                    r.push.apply(r, u)
                } else {
                    if (i && i.nodeType === 1) {
                        for (b = 0; u[b] != null; b++) {
                            if (u[b] && (u[b] === true || u[b].nodeType === 1 && d.contains(i, u[b]))) {
                                r.push(f[b])
                            }
                        }
                    } else {
                        for (b = 0; u[b] != null; b++) {
                            if (u[b] && u[b].nodeType === 1) {
                                r.push(f[b])
                            }
                        }
                    }
                }
            } else {
                v(u, r)
            }
            if (c) {
                d(c, s, r, a);
                d.uniqueSort(r)
            }
            return r
        };
        d.uniqueSort = function (e) {
            if (x) {
                s = l;
                e.sort(x);
                if (s) {
                    for (var t = 1; t < e.length; t++) {
                        if (e[t] === e[t - 1]) {
                            e.splice(t--, 1)
                        }
                    }
                }
            }
            return e
        };
        d.matches = function (e, t) {
            return d(e, null, null, t)
        };
        d.matchesSelector = function (e, t) {
            return d(t, null, null, [e]).length > 0
        };
        d.find = function (e, t, n) {
            var i, r, a, o, s, l;
            if (!e) {
                return []
            }
            for (r = 0, a = h.order.length; r < a; r++) {
                s = h.order[r];
                if (o = h.leftMatch[s].exec(e)) {
                    l = o[1];
                    o.splice(1, 1);
                    if (l.substr(l.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, "");
                        i = h.find[s](o, t, n);
                        if (i != null) {
                            e = e.replace(h.match[s], "");
                            break
                        }
                    }
                }
            }
            if (!i) {
                i = typeof t.getElementsByTagName !== "undefined" ? t.getElementsByTagName("*") : []
            }
            return {set: i, expr: e}
        };
        d.filter = function (e, n, i, r) {
            var a, o, s, l, f, u, c, p, m, g = e, y = [], v = n, b = n && n[0] && d.isXML(n[0]);
            while (e && n.length) {
                for (s in h.filter) {
                    if ((a = h.leftMatch[s].exec(e)) != null && a[2]) {
                        u = h.filter[s];
                        c = a[1];
                        o = false;
                        a.splice(1, 1);
                        if (c.substr(c.length - 1) === "\\") {
                            continue
                        }
                        if (v === y) {
                            y = []
                        }
                        if (h.preFilter[s]) {
                            a = h.preFilter[s](a, v, i, y, r, b);
                            if (!a) {
                                o = l = true
                            } else {
                                if (a === true) {
                                    continue
                                }
                            }
                        }
                        if (a) {
                            for (p = 0; (f = v[p]) != null; p++) {
                                if (f) {
                                    l = u(f, a, p, v);
                                    m = r ^ l;
                                    if (i && l != null) {
                                        if (m) {
                                            o = true
                                        } else {
                                            v[p] = false
                                        }
                                    } else {
                                        if (m) {
                                            y.push(f);
                                            o = true
                                        }
                                    }
                                }
                            }
                        }
                        if (l !== t) {
                            if (!i) {
                                v = y
                            }
                            e = e.replace(h.match[s], "");
                            if (!o) {
                                return []
                            }
                            break
                        }
                    }
                }
                if (e === g) {
                    if (o == null) {
                        d.error(e)
                    } else {
                        break
                    }
                }
                g = e
            }
            return v
        };
        d.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = d.getText = function (e) {
            var t, n, i = e.nodeType, r = "";
            if (i) {
                if (i === 1 || i === 9) {
                    if (typeof e.textContent === "string") {
                        return e.textContent
                    } else {
                        if (typeof e.innerText === "string") {
                            return e.innerText.replace(u, "")
                        } else {
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                r += p(e)
                            }
                        }
                    }
                } else {
                    if (i === 3 || i === 4) {
                        return e.nodeValue
                    }
                }
            } else {
                for (t = 0; n = e[t]; t++) {
                    if (n.nodeType !== 8) {
                        r += p(n)
                    }
                }
            }
            return r
        };
        var h = d.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (e) {
                    return e.getAttribute("href")
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            relative: {
                "+": function (e, t) {
                    var n = typeof t === "string", i = n && !c.test(t), r = n && !i;
                    if (i) {
                        t = t.toLowerCase()
                    }
                    for (var a = 0, o = e.length, s; a < o; a++) {
                        if (s = e[a]) {
                            while ((s = s.previousSibling) && s.nodeType !== 1) {
                            }
                            e[a] = r || s && s.nodeName.toLowerCase() === t ? s || false : s === t
                        }
                    }
                    if (r) {
                        d.filter(t, e, true)
                    }
                }, ">": function (e, t) {
                    var n, i = typeof t === "string", r = 0, a = e.length;
                    if (i && !c.test(t)) {
                        t = t.toLowerCase();
                        for (; r < a; r++) {
                            n = e[r];
                            if (n) {
                                var o = n.parentNode;
                                e[r] = o.nodeName.toLowerCase() === t ? o : false
                            }
                        }
                    } else {
                        for (; r < a; r++) {
                            n = e[r];
                            if (n) {
                                e[r] = i ? n.parentNode : n.parentNode === t
                            }
                        }
                        if (i) {
                            d.filter(t, e, true)
                        }
                    }
                }, "": function (e, t, n) {
                    var i, a = r++, o = N;
                    if (typeof t === "string" && !c.test(t)) {
                        t = t.toLowerCase();
                        i = t;
                        o = T
                    }
                    o("parentNode", t, a, e, i, n)
                }, "~": function (e, t, n) {
                    var i, a = r++, o = N;
                    if (typeof t === "string" && !c.test(t)) {
                        t = t.toLowerCase();
                        i = t;
                        o = T
                    }
                    o("previousSibling", t, a, e, i, n)
                }
            },
            find: {
                ID: function (e, t, n) {
                    if (typeof t.getElementById !== "undefined" && !n) {
                        var i = t.getElementById(e[1]);
                        return i && i.parentNode ? [i] : []
                    }
                }, NAME: function (e, t) {
                    if (typeof t.getElementsByName !== "undefined") {
                        var n = [], i = t.getElementsByName(e[1]);
                        for (var r = 0, a = i.length; r < a; r++) {
                            if (i[r].getAttribute("name") === e[1]) {
                                n.push(i[r])
                            }
                        }
                        return n.length === 0 ? null : n
                    }
                }, TAG: function (e, t) {
                    if (typeof t.getElementsByTagName !== "undefined") {
                        return t.getElementsByTagName(e[1])
                    }
                }
            },
            preFilter: {
                CLASS: function (e, t, n, i, r, a) {
                    e = " " + e[1].replace(f, "") + " ";
                    if (a) {
                        return e
                    }
                    for (var o = 0, s; (s = t[o]) != null; o++) {
                        if (s) {
                            if (r ^ (s.className && (" " + s.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0)) {
                                if (!n) {
                                    i.push(s)
                                }
                            } else {
                                if (n) {
                                    t[o] = false
                                }
                            }
                        }
                    }
                    return false
                }, ID: function (e) {
                    return e[1].replace(f, "")
                }, TAG: function (e, t) {
                    return e[1].replace(f, "").toLowerCase()
                }, CHILD: function (e) {
                    if (e[1] === "nth") {
                        if (!e[2]) {
                            d.error(e[0])
                        }
                        e[2] = e[2].replace(/^\+|\s*/g, "");
                        var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                        e[2] = t[1] + (t[2] || 1) - 0;
                        e[3] = t[3] - 0
                    } else {
                        if (e[2]) {
                            d.error(e[0])
                        }
                    }
                    e[0] = r++;
                    return e
                }, ATTR: function (e, t, n, i, r, a) {
                    var o = e[1] = e[1].replace(f, "");
                    if (!a && h.attrMap[o]) {
                        e[1] = h.attrMap[o]
                    }
                    e[4] = (e[4] || e[5] || "").replace(f, "");
                    if (e[2] === "~=") {
                        e[4] = " " + e[4] + " "
                    }
                    return e
                }, PSEUDO: function (t, n, i, r, a) {
                    if (t[1] === "not") {
                        if ((e.exec(t[3]) || "").length > 1 || /^\w/.test(t[3])) {
                            t[3] = d(t[3], null, null, n)
                        } else {
                            var o = d.filter(t[3], n, i, true ^ a);
                            if (!i) {
                                r.push.apply(r, o)
                            }
                            return false
                        }
                    } else {
                        if (h.match.POS.test(t[0]) || h.match.CHILD.test(t[0])) {
                            return true
                        }
                    }
                    return t
                }, POS: function (e) {
                    e.unshift(true);
                    return e
                }
            },
            filters: {
                enabled: function (e) {
                    return e.disabled === false && e.type !== "hidden"
                }, disabled: function (e) {
                    return e.disabled === true
                }, checked: function (e) {
                    return e.checked === true
                }, selected: function (e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                }, parent: function (e) {
                    return !!e.firstChild
                }, empty: function (e) {
                    return !e.firstChild
                }, has: function (e, t, n) {
                    return !!d(n[3], e).length
                }, header: function (e) {
                    return /h\d/i.test(e.nodeName)
                }, text: function (e) {
                    var t = e.getAttribute("type"), n = e.type;
                    return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                }, radio: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                }, checkbox: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                }, file: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "file" === e.type
                }, password: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "password" === e.type
                }, submit: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "submit" === e.type
                }, image: function (e) {
                    return e.nodeName.toLowerCase() === "input" && "image" === e.type
                }, reset: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return (t === "input" || t === "button") && "reset" === e.type
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && "button" === e.type || t === "button"
                }, input: function (e) {
                    return /input|select|textarea|button/i.test(e.nodeName)
                }, focus: function (e) {
                    return e === e.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (e, t) {
                    return t === 0
                }, last: function (e, t, n, i) {
                    return t === i.length - 1
                }, even: function (e, t) {
                    return t % 2 === 0
                }, odd: function (e, t) {
                    return t % 2 === 1
                }, lt: function (e, t, n) {
                    return t < n[3] - 0
                }, gt: function (e, t, n) {
                    return t > n[3] - 0
                }, nth: function (e, t, n) {
                    return n[3] - 0 === t
                }, eq: function (e, t, n) {
                    return n[3] - 0 === t
                }
            },
            filter: {
                PSEUDO: function (e, t, n, i) {
                    var r = t[1], a = h.filters[r];
                    if (a) {
                        return a(e, n, t, i)
                    } else {
                        if (r === "contains") {
                            return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0
                        } else {
                            if (r === "not") {
                                var o = t[3];
                                for (var s = 0, l = o.length; s < l; s++) {
                                    if (o[s] === e) {
                                        return false
                                    }
                                }
                                return true
                            } else {
                                d.error(r)
                            }
                        }
                    }
                }, CHILD: function (e, t) {
                    var n, r, a, o, s, l, f, u = t[1], c = e;
                    switch (u) {
                        case"only":
                        case"first":
                            while (c = c.previousSibling) {
                                if (c.nodeType === 1) {
                                    return false
                                }
                            }
                            if (u === "first") {
                                return true
                            }
                            c = e;
                        case"last":
                            while (c = c.nextSibling) {
                                if (c.nodeType === 1) {
                                    return false
                                }
                            }
                            return true;
                        case"nth":
                            n = t[2];
                            r = t[3];
                            if (n === 1 && r === 0) {
                                return true
                            }
                            a = t[0];
                            o = e.parentNode;
                            if (o && (o[i] !== a || !e.nodeIndex)) {
                                l = 0;
                                for (c = o.firstChild; c; c = c.nextSibling) {
                                    if (c.nodeType === 1) {
                                        c.nodeIndex = ++l
                                    }
                                }
                                o[i] = a
                            }
                            f = e.nodeIndex - r;
                            if (n === 0) {
                                return f === 0
                            } else {
                                return f % n === 0 && f / n >= 0
                            }
                    }
                }, ID: function (e, t) {
                    return e.nodeType === 1 && e.getAttribute("id") === t
                }, TAG: function (e, t) {
                    return t === "*" && e.nodeType === 1 || !!e.nodeName && e.nodeName.toLowerCase() === t
                }, CLASS: function (e, t) {
                    return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                }, ATTR: function (e, t) {
                    var n = t[1],
                        i = d.attr ? d.attr(e, n) : h.attrHandle[n] ? h.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                        r = i + "", a = t[2], o = t[4];
                    return i == null ? a === "!=" : !a && d.attr ? i != null : a === "=" ? r === o : a === "*=" ? r.indexOf(o) >= 0 : a === "~=" ? (" " + r + " ").indexOf(o) >= 0 : !o ? r && i !== false : a === "!=" ? r !== o : a === "^=" ? r.indexOf(o) === 0 : a === "$=" ? r.substr(r.length - o.length) === o : a === "|=" ? r === o || r.substr(0, o.length + 1) === o + "-" : false
                }, POS: function (e, t, n, i) {
                    var r = t[2], a = h.setFilters[r];
                    if (a) {
                        return a(e, n, t, i)
                    }
                }
            }
        };
        var m = h.match.POS, g = function (e, t) {
            return "\\" + (t - 0 + 1)
        };
        for (var y in h.match) {
            h.match[y] = new RegExp(h.match[y].source + /(?![^\[]*\])(?![^\(]*\))/.source);
            h.leftMatch[y] = new RegExp(/(^(?:.|\r|\n)*?)/.source + h.match[y].source.replace(/\\(\d+)/g, g))
        }
        var v = function (e, t) {
            e = Array.prototype.slice.call(e, 0);
            if (t) {
                t.push.apply(t, e);
                return t
            }
            return e
        };
        try {
            Array.prototype.slice.call(n.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            v = function (e, t) {
                var n = 0, i = t || [];
                if (o.call(e) === "[object Array]") {
                    Array.prototype.push.apply(i, e)
                } else {
                    if (typeof e.length === "number") {
                        for (var r = e.length; n < r; n++) {
                            i.push(e[n])
                        }
                    } else {
                        for (; e[n]; n++) {
                            i.push(e[n])
                        }
                    }
                }
                return i
            }
        }
        var x, w;
        if (n.documentElement.compareDocumentPosition) {
            x = function (e, t) {
                if (e === t) {
                    s = true;
                    return 0
                }
                if (!e.compareDocumentPosition || !t.compareDocumentPosition) {
                    return e.compareDocumentPosition ? -1 : 1
                }
                return e.compareDocumentPosition(t) & 4 ? -1 : 1
            }
        } else {
            x = function (e, t) {
                if (e === t) {
                    s = true;
                    return 0
                } else {
                    if (e.sourceIndex && t.sourceIndex) {
                        return e.sourceIndex - t.sourceIndex
                    }
                }
                var n, i, r = [], a = [], o = e.parentNode, l = t.parentNode, f = o;
                if (o === l) {
                    return w(e, t)
                } else {
                    if (!o) {
                        return -1
                    } else {
                        if (!l) {
                            return 1
                        }
                    }
                }
                while (f) {
                    r.unshift(f);
                    f = f.parentNode
                }
                f = l;
                while (f) {
                    a.unshift(f);
                    f = f.parentNode
                }
                n = r.length;
                i = a.length;
                for (var u = 0; u < n && u < i; u++) {
                    if (r[u] !== a[u]) {
                        return w(r[u], a[u])
                    }
                }
                return u === n ? w(e, a[u], -1) : w(r[u], t, 1)
            };
            w = function (e, t, n) {
                if (e === t) {
                    return n
                }
                var i = e.nextSibling;
                while (i) {
                    if (i === t) {
                        return -1
                    }
                    i = i.nextSibling
                }
                return 1
            }
        }
        !function () {
            var e = n.createElement("div"), i = "script" + (new Date).getTime(), r = n.documentElement;
            e.innerHTML = "<a name='" + i + "'/>";
            r.insertBefore(e, r.firstChild);
            if (n.getElementById(i)) {
                h.find.ID = function (e, n, i) {
                    if (typeof n.getElementById !== "undefined" && !i) {
                        var r = n.getElementById(e[1]);
                        return r ? r.id === e[1] || typeof r.getAttributeNode !== "undefined" && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                    }
                };
                h.filter.ID = function (e, t) {
                    var n = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                    return e.nodeType === 1 && n && n.nodeValue === t
                }
            }
            r.removeChild(e);
            r = e = null
        }();
        !function () {
            var e = n.createElement("div");
            e.appendChild(n.createComment(""));
            if (e.getElementsByTagName("*").length > 0) {
                h.find.TAG = function (e, t) {
                    var n = t.getElementsByTagName(e[1]);
                    if (e[1] === "*") {
                        var i = [];
                        for (var r = 0; n[r]; r++) {
                            if (n[r].nodeType === 1) {
                                i.push(n[r])
                            }
                        }
                        n = i
                    }
                    return n
                }
            }
            e.innerHTML = "<a href='#'></a>";
            if (e.firstChild && typeof e.firstChild.getAttribute !== "undefined" && e.firstChild.getAttribute("href") !== "#") {
                h.attrHandle.href = function (e) {
                    return e.getAttribute("href", 2)
                }
            }
            e = null
        }();
        if (n.querySelectorAll) {
            !function () {
                var e = d, t = n.createElement("div"), i = "__sizzle__";
                t.innerHTML = "<p class='TEST'></p>";
                if (t.querySelectorAll && t.querySelectorAll(".TEST").length === 0) {
                    return
                }
                d = function (t, r, a, o) {
                    r = r || n;
                    if (!o && !d.isXML(r)) {
                        var s = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (s && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (s[1]) {
                                return v(r.getElementsByTagName(t), a)
                            } else {
                                if (s[2] && h.find.CLASS && r.getElementsByClassName) {
                                    return v(r.getElementsByClassName(s[2]), a)
                                }
                            }
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body) {
                                return v([r.body], a)
                            } else {
                                if (s && s[3]) {
                                    var l = r.getElementById(s[3]);
                                    if (l && l.parentNode) {
                                        if (l.id === s[3]) {
                                            return v([l], a)
                                        }
                                    } else {
                                        return v([], a)
                                    }
                                }
                            }
                            try {
                                return v(r.querySelectorAll(t), a)
                            } catch (f) {
                            }
                        } else {
                            if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                                var u = r, c = r.getAttribute("id"), p = c || i, m = r.parentNode,
                                    g = /^\s*[+~]/.test(t);
                                if (!c) {
                                    r.setAttribute("id", p)
                                } else {
                                    p = p.replace(/'/g, "\\$&")
                                }
                                if (g && m) {
                                    r = r.parentNode
                                }
                                try {
                                    if (!g || m) {
                                        return v(r.querySelectorAll("[id='" + p + "'] " + t), a)
                                    }
                                } catch (y) {
                                } finally {
                                    if (!c) {
                                        u.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return e(t, r, a, o)
                };
                for (var r in e) {
                    d[r] = e[r]
                }
                t = null
            }()
        }
        !function () {
            var e = n.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var i = !t.call(n.createElement("div"), "div"), r = false;
                try {
                    t.call(n.documentElement, "[test!='']:sizzle")
                } catch (a) {
                    r = true
                }
                d.matchesSelector = function (e, n) {
                    n = n.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!d.isXML(e)) {
                        try {
                            if (r || !h.match.PSEUDO.test(n) && !/!=/.test(n)) {
                                var a = t.call(e, n);
                                if (a || !i || e.document && e.document.nodeType !== 11) {
                                    return a
                                }
                            }
                        } catch (o) {
                        }
                    }
                    return d(n, null, null, [e]).length > 0
                }
            }
        }();
        !function () {
            var e = n.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!e.getElementsByClassName || e.getElementsByClassName("e").length === 0) {
                return
            }
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) {
                return
            }
            h.order.splice(1, 0, "CLASS");
            h.find.CLASS = function (e, t, n) {
                if (typeof t.getElementsByClassName !== "undefined" && !n) {
                    return t.getElementsByClassName(e[1])
                }
            };
            e = null
        }();

        function T(e, t, n, r, a, o) {
            for (var s = 0, l = r.length; s < l; s++) {
                var f = r[s];
                if (f) {
                    var u = false;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            u = r[f.sizset];
                            break
                        }
                        if (f.nodeType === 1 && !o) {
                            f[i] = n;
                            f.sizset = s
                        }
                        if (f.nodeName.toLowerCase() === t) {
                            u = f;
                            break
                        }
                        f = f[e]
                    }
                    r[s] = u
                }
            }
        }

        function N(e, t, n, r, a, o) {
            for (var s = 0, l = r.length; s < l; s++) {
                var f = r[s];
                if (f) {
                    var u = false;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            u = r[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            if (!o) {
                                f[i] = n;
                                f.sizset = s
                            }
                            if (typeof t !== "string") {
                                if (f === t) {
                                    u = true;
                                    break
                                }
                            } else {
                                if (d.filter(t, [f]).length > 0) {
                                    u = f;
                                    break
                                }
                            }
                        }
                        f = f[e]
                    }
                    r[s] = u
                }
            }
        }

        if (n.documentElement.contains) {
            d.contains = function (e, t) {
                return e !== t && (e.contains ? e.contains(t) : true)
            }
        } else {
            if (n.documentElement.compareDocumentPosition) {
                d.contains = function (e, t) {
                    return !!(e.compareDocumentPosition(t) & 16)
                }
            } else {
                d.contains = function () {
                    return false
                }
            }
        }
        d.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : false
        };
        var C = function (e, t, n) {
            var i, r = [], a = "", o = t.nodeType ? [t] : t;
            while (i = h.match.PSEUDO.exec(e)) {
                a += i[0];
                e = e.replace(h.match.PSEUDO, "")
            }
            e = h.relative[e] ? e + "*" : e;
            for (var s = 0, l = o.length; s < l; s++) {
                d(e, o[s], r, n)
            }
            return d.filter(a, r)
        };
        d.attr = a.attr;
        d.selectors.attrMap = {};
        a.find = d;
        a.expr = d.selectors;
        a.expr[":"] = a.expr.filters;
        a.unique = d.uniqueSort;
        a.text = d.getText;
        a.isXMLDoc = d.isXML;
        a.contains = d.contains
    }();
    var B = /Until$/, P = /^(?:parents|prevUntil|prevAll)/, q = /,/, W = /^.[^:#\[\.,]*$/, I = Array.prototype.slice,
        $ = a.expr.match.POS, R = {children: true, contents: true, next: true, prev: true};
    a.fn.extend({
        find: function (e) {
            var t = this, n, i;
            if (typeof e !== "string") {
                return a(e).filter(function () {
                    for (n = 0, i = t.length; n < i; n++) {
                        if (a.contains(t[n], this)) {
                            return true
                        }
                    }
                })
            }
            var r = this.pushStack("", "find", e), o, s, l;
            for (n = 0, i = this.length; n < i; n++) {
                o = r.length;
                a.find(e, this[n], r);
                if (n > 0) {
                    for (s = o; s < r.length; s++) {
                        for (l = 0; l < o; l++) {
                            if (r[l] === r[s]) {
                                r.splice(s--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return r
        }, has: function (e) {
            var t = a(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++) {
                    if (a.contains(this, t[e])) {
                        return true
                    }
                }
            })
        }, not: function (e) {
            return this.pushStack(z(this, e, false), "not", e)
        }, filter: function (e) {
            return this.pushStack(z(this, e, true), "filter", e)
        }, is: function (e) {
            return !!e && (typeof e === "string" ? $.test(e) ? a(e, this.context).index(this[0]) >= 0 : a.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var n = [], i, r, o = this[0];
            if (a.isArray(e)) {
                var s = 1;
                while (o && o.ownerDocument && o !== t) {
                    for (i = 0; i < e.length; i++) {
                        if (a(o).is(e[i])) {
                            n.push({selector: e[i], elem: o, level: s})
                        }
                    }
                    o = o.parentNode;
                    s++
                }
                return n
            }
            var l = $.test(e) || typeof e !== "string" ? a(e, t || this.context) : 0;
            for (i = 0, r = this.length; i < r; i++) {
                o = this[i];
                while (o) {
                    if (l ? l.index(o) > -1 : a.find.matchesSelector(o, e)) {
                        n.push(o);
                        break
                    } else {
                        o = o.parentNode;
                        if (!o || !o.ownerDocument || o === t || o.nodeType === 11) {
                            break
                        }
                    }
                }
            }
            n = n.length > 1 ? a.unique(n) : n;
            return this.pushStack(n, "closest", e)
        }, index: function (e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.prevAll().length : -1
            }
            if (typeof e === "string") {
                return a.inArray(this[0], a(e))
            }
            return a.inArray(e.jquery ? e[0] : e, this)
        }, add: function (e, t) {
            var n = typeof e === "string" ? a(e, t) : a.makeArray(e && e.nodeType ? [e] : e),
                i = a.merge(this.get(), n);
            return this.pushStack(X(n[0]) || X(i[0]) ? i : a.unique(i))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    });

    function X(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    a.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return a.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return a.dir(e, "parentNode", n)
        }, next: function (e) {
            return a.nth(e, 2, "nextSibling")
        }, prev: function (e) {
            return a.nth(e, 2, "previousSibling")
        }, nextAll: function (e) {
            return a.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return a.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return a.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return a.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return a.sibling(e.parentNode.firstChild, e)
        }, children: function (e) {
            return a.sibling(e.firstChild)
        }, contents: function (e) {
            return a.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : a.makeArray(e.childNodes)
        }
    }, function (e, t) {
        a.fn[e] = function (n, i) {
            var r = a.map(this, t, n);
            if (!B.test(e)) {
                i = n
            }
            if (i && typeof i === "string") {
                r = a.filter(i, r)
            }
            r = this.length > 1 && !R[e] ? a.unique(r) : r;
            if ((this.length > 1 || q.test(i)) && P.test(e)) {
                r = r.reverse()
            }
            return this.pushStack(r, e, I.call(arguments).join(","))
        }
    });
    a.extend({
        filter: function (e, t, n) {
            if (n) {
                e = ":not(" + e + ")"
            }
            return t.length === 1 ? a.find.matchesSelector(t[0], e) ? [t[0]] : [] : a.find.matches(e, t)
        }, dir: function (e, n, i) {
            var r = [], o = e[n];
            while (o && o.nodeType !== 9 && (i === t || o.nodeType !== 1 || !a(o).is(i))) {
                if (o.nodeType === 1) {
                    r.push(o)
                }
                o = o[n]
            }
            return r
        }, nth: function (e, t, n, i) {
            t = t || 1;
            var r = 0;
            for (; e; e = e[n]) {
                if (e.nodeType === 1 && ++r === t) {
                    break
                }
            }
            return e
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    n.push(e)
                }
            }
            return n
        }
    });

    function z(e, t, n) {
        t = t || 0;
        if (a.isFunction(t)) {
            return a.grep(e, function (e, i) {
                var r = !!t.call(e, i, e);
                return r === n
            })
        } else {
            if (t.nodeType) {
                return a.grep(e, function (e, i) {
                    return e === t === n
                })
            } else {
                if (typeof t === "string") {
                    var i = a.grep(e, function (e) {
                        return e.nodeType === 1
                    });
                    if (W.test(t)) {
                        return a.filter(t, i, !n)
                    } else {
                        t = a.filter(t, i)
                    }
                }
            }
        }
        return a.grep(e, function (e, i) {
            return a.inArray(e, t) >= 0 === n
        })
    }

    function V(e) {
        var t = U.split("|"), n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }

    var U = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        G = / jQuery\d+="(?:\d+|null)"/g, J = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Q = /<([\w:]+)/, K = /<tbody/i,
        Z = /<|&#?\w+;/, et = /<(?:script|style)/i, tt = /<(?:script|object|embed|option|style)/i,
        nt = new RegExp("<(?:" + U + ")", "i"), it = /checked\s*(?:[^=]|=\s*.checked.)/i, rt = /\/(java|ecma)script/i,
        at = /^\s*<!(?:\[CDATA\[|\-\-)/, ot = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, st = V(n);
    ot.optgroup = ot.option;
    ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead;
    ot.th = ot.td;
    if (!a.support.htmlSerialize) {
        ot._default = [1, "div<div>", "</div>"]
    }
    a.fn.extend({
        text: function (e) {
            if (a.isFunction(e)) {
                return this.each(function (t) {
                    var n = a(this);
                    n.text(e.call(this, t, n.text()))
                })
            }
            if (typeof e !== "object" && e !== t) {
                return this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(e))
            }
            return a.text(this)
        }, wrapAll: function (e) {
            if (a.isFunction(e)) {
                return this.each(function (t) {
                    a(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = a(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    t.insertBefore(this[0])
                }
                t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            if (a.isFunction(e)) {
                return this.each(function (t) {
                    a(this).wrapInner(e.call(this, t))
                })
            }
            return this.each(function () {
                var t = a(this), n = t.contents();
                if (n.length) {
                    n.wrapAll(e)
                } else {
                    t.append(e)
                }
            })
        }, wrap: function (e) {
            var t = a.isFunction(e);
            return this.each(function (n) {
                a(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                if (!a.nodeName(this, "body")) {
                    a(this).replaceWith(this.childNodes)
                }
            }).end()
        }, append: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1) {
                    this.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, true, function (e) {
                if (this.nodeType === 1) {
                    this.insertBefore(e, this.firstChild)
                }
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (e) {
                    this.parentNode.insertBefore(e, this)
                })
            } else {
                if (arguments.length) {
                    var e = a.clean(arguments);
                    e.push.apply(e, this.toArray());
                    return this.pushStack(e, "before", arguments)
                }
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) {
                return this.domManip(arguments, false, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                })
            } else {
                if (arguments.length) {
                    var e = this.pushStack(this, "after", arguments);
                    e.push.apply(e, a.clean(arguments));
                    return e
                }
            }
        }, remove: function (e, t) {
            for (var n = 0, i; (i = this[n]) != null; n++) {
                if (!e || a.filter(e, [i]).length) {
                    if (!t && i.nodeType === 1) {
                        a.cleanData(i.getElementsByTagName("*"));
                        a.cleanData([i])
                    }
                    if (i.parentNode) {
                        i.parentNode.removeChild(i)
                    }
                }
            }
            return this
        }, empty: function () {
            for (var e = 0, t; (t = this[e]) != null; e++) {
                if (t.nodeType === 1) {
                    a.cleanData(t.getElementsByTagName("*"))
                }
                while (t.firstChild) {
                    t.removeChild(t.firstChild)
                }
            }
            return this
        }, clone: function (e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function () {
                return a.clone(this, e, t)
            })
        }, html: function (e) {
            if (e === t) {
                return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(G, "") : null
            } else {
                if (typeof e === "string" && !et.test(e) && (a.support.leadingWhitespace || !J.test(e)) && !ot[(Q.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Y, "<$1></$2>");
                    try {
                        for (var n = 0, i = this.length; n < i; n++) {
                            if (this[n].nodeType === 1) {
                                a.cleanData(this[n].getElementsByTagName("*"));
                                this[n].innerHTML = e
                            }
                        }
                    } catch (r) {
                        this.empty().append(e)
                    }
                } else {
                    if (a.isFunction(e)) {
                        this.each(function (t) {
                            var n = a(this);
                            n.html(e.call(this, t, n.html()))
                        })
                    } else {
                        this.empty().append(e)
                    }
                }
            }
            return this
        }, replaceWith: function (e) {
            if (this[0] && this[0].parentNode) {
                if (a.isFunction(e)) {
                    return this.each(function (t) {
                        var n = a(this), i = n.html();
                        n.replaceWith(e.call(this, t, i))
                    })
                }
                if (typeof e !== "string") {
                    e = a(e).detach()
                }
                return this.each(function () {
                    var t = this.nextSibling, n = this.parentNode;
                    a(this).remove();
                    if (t) {
                        a(t).before(e)
                    } else {
                        a(n).append(e)
                    }
                })
            } else {
                return this.length ? this.pushStack(a(a.isFunction(e) ? e() : e), "replaceWith", e) : this
            }
        }, detach: function (e) {
            return this.remove(e, true)
        }, domManip: function (e, n, i) {
            var r, o, s, l, f = e[0], u = [];
            if (!a.support.checkClone && arguments.length === 3 && typeof f === "string" && it.test(f)) {
                return this.each(function () {
                    a(this).domManip(e, n, i, true)
                })
            }
            if (a.isFunction(f)) {
                return this.each(function (r) {
                    var o = a(this);
                    e[0] = f.call(this, r, n ? o.html() : t);
                    o.domManip(e, n, i)
                })
            }
            if (this[0]) {
                l = f && f.parentNode;
                if (a.support.parentNode && l && l.nodeType === 11 && l.childNodes.length === this.length) {
                    r = {fragment: l}
                } else {
                    r = a.buildFragment(e, this, u)
                }
                s = r.fragment;
                if (s.childNodes.length === 1) {
                    o = s = s.firstChild
                } else {
                    o = s.firstChild
                }
                if (o) {
                    n = n && a.nodeName(o, "tr");
                    for (var c = 0, d = this.length, p = d - 1; c < d; c++) {
                        i.call(n ? lt(this[c], o) : this[c], r.cacheable || d > 1 && c < p ? a.clone(s, true, true) : s)
                    }
                }
                if (u.length) {
                    a.each(u, mt)
                }
            }
            return this
        }
    });

    function lt(e, t) {
        return a.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ft(e, t) {
        if (t.nodeType !== 1 || !a.hasData(e)) {
            return
        }
        var n, i, r, o = a._data(e), s = a._data(t, o), l = o.events;
        if (l) {
            delete s.handle;
            s.events = {};
            for (n in l) {
                for (i = 0, r = l[n].length; i < r; i++) {
                    a.event.add(t, n + (l[n][i].namespace ? "." : "") + l[n][i].namespace, l[n][i], l[n][i].data)
                }
            }
        }
        if (s.data) {
            s.data = a.extend({}, s.data)
        }
    }

    function ut(e, t) {
        var n;
        if (t.nodeType !== 1) {
            return
        }
        if (t.clearAttributes) {
            t.clearAttributes()
        }
        if (t.mergeAttributes) {
            t.mergeAttributes(e)
        }
        n = t.nodeName.toLowerCase();
        if (n === "object") {
            t.outerHTML = e.outerHTML
        } else {
            if (n === "input" && (e.type === "checkbox" || e.type === "radio")) {
                if (e.checked) {
                    t.defaultChecked = t.checked = e.checked
                }
                if (t.value !== e.value) {
                    t.value = e.value
                }
            } else {
                if (n === "option") {
                    t.selected = e.defaultSelected
                } else {
                    if (n === "input" || n === "textarea") {
                        t.defaultValue = e.defaultValue
                    }
                }
            }
        }
        t.removeAttribute(a.expando)
    }

    a.buildFragment = function (e, t, i) {
        var r, o, s, l, f = e[0];
        if (t && t[0]) {
            l = t[0].ownerDocument || t[0]
        }
        if (!l.createDocumentFragment) {
            l = n
        }
        if (e.length === 1 && typeof f === "string" && f.length < 512 && l === n && f.charAt(0) === "<" && !tt.test(f) && (a.support.checkClone || !it.test(f)) && (a.support.html5Clone || !nt.test(f))) {
            o = true;
            s = a.fragments[f];
            if (s && s !== 1) {
                r = s
            }
        }
        if (!r) {
            r = l.createDocumentFragment();
            a.clean(e, l, r, i)
        }
        if (o) {
            a.fragments[f] = s ? r : 1
        }
        return {fragment: r, cacheable: o}
    };
    a.fragments = {};
    a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        a.fn[e] = function (n) {
            var i = [], r = a(n), o = this.length === 1 && this[0].parentNode;
            if (o && o.nodeType === 11 && o.childNodes.length === 1 && r.length === 1) {
                r[t](this[0]);
                return this
            } else {
                for (var s = 0, l = r.length; s < l; s++) {
                    var f = (s > 0 ? this.clone(true) : this).get();
                    a(r[s])[t](f);
                    i = i.concat(f)
                }
                return this.pushStack(i, e, r.selector)
            }
        }
    });

    function ct(e) {
        if (typeof e.getElementsByTagName !== "undefined") {
            return e.getElementsByTagName("*")
        } else {
            if (typeof e.querySelectorAll !== "undefined") {
                return e.querySelectorAll("*")
            } else {
                return []
            }
        }
    }

    function dt(e) {
        if (e.type === "checkbox" || e.type === "radio") {
            e.defaultChecked = e.checked
        }
    }

    function pt(e) {
        var t = (e.nodeName || "").toLowerCase();
        if (t === "input") {
            dt(e)
        } else {
            if (t !== "script" && typeof e.getElementsByTagName !== "undefined") {
                a.grep(e.getElementsByTagName("input"), dt)
            }
        }
    }

    function ht(e) {
        var t = n.createElement("div");
        st.appendChild(t);
        t.innerHTML = e.outerHTML;
        return t.firstChild
    }

    a.extend({
        clone: function (e, t, n) {
            var i, r, o, s = a.support.html5Clone || !nt.test("<" + e.nodeName) ? e.cloneNode(true) : ht(e);
            if ((!a.support.noCloneEvent || !a.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !a.isXMLDoc(e)) {
                ut(e, s);
                i = ct(e);
                r = ct(s);
                for (o = 0; i[o]; ++o) {
                    if (r[o]) {
                        ut(i[o], r[o])
                    }
                }
            }
            if (t) {
                ft(e, s);
                if (n) {
                    i = ct(e);
                    r = ct(s);
                    for (o = 0; i[o]; ++o) {
                        ft(i[o], r[o])
                    }
                }
            }
            i = r = null;
            return s
        }, clean: function (e, t, i, r) {
            var o;
            t = t || n;
            if (typeof t.createElement === "undefined") {
                t = t.ownerDocument || t[0] && t[0].ownerDocument || n
            }
            var s = [], l;
            for (var f = 0, u; (u = e[f]) != null; f++) {
                if (typeof u === "number") {
                    u += ""
                }
                if (!u) {
                    continue
                }
                if (typeof u === "string") {
                    if (!Z.test(u)) {
                        u = t.createTextNode(u)
                    } else {
                        u = u.replace(Y, "<$1></$2>");
                        var c = (Q.exec(u) || ["", ""])[1].toLowerCase(), d = ot[c] || ot._default, p = d[0],
                            h = t.createElement("div");
                        if (t === n) {
                            st.appendChild(h)
                        } else {
                            V(t).appendChild(h)
                        }
                        h.innerHTML = d[1] + u + d[2];
                        while (p--) {
                            h = h.lastChild
                        }
                        if (!a.support.tbody) {
                            var m = K.test(u),
                                g = c === "table" && !m ? h.firstChild && h.firstChild.childNodes : d[1] === "<table>" && !m ? h.childNodes : [];
                            for (l = g.length - 1; l >= 0; --l) {
                                if (a.nodeName(g[l], "tbody") && !g[l].childNodes.length) {
                                    g[l].parentNode.removeChild(g[l])
                                }
                            }
                        }
                        if (!a.support.leadingWhitespace && J.test(u)) {
                            h.insertBefore(t.createTextNode(J.exec(u)[0]), h.firstChild)
                        }
                        u = h.childNodes
                    }
                }
                var y;
                if (!a.support.appendChecked) {
                    if (u[0] && typeof (y = u.length) === "number") {
                        for (l = 0; l < y; l++) {
                            pt(u[l])
                        }
                    } else {
                        pt(u)
                    }
                }
                if (u.nodeType) {
                    s.push(u)
                } else {
                    s = a.merge(s, u)
                }
            }
            if (i) {
                o = function (e) {
                    return !e.type || rt.test(e.type)
                };
                for (f = 0; s[f]; f++) {
                    if (r && a.nodeName(s[f], "script") && (!s[f].type || s[f].type.toLowerCase() === "text/javascript")) {
                        r.push(s[f].parentNode ? s[f].parentNode.removeChild(s[f]) : s[f])
                    } else {
                        if (s[f].nodeType === 1) {
                            var v = a.grep(s[f].getElementsByTagName("script"), o);
                            s.splice.apply(s, [f + 1, 0].concat(v))
                        }
                        i.appendChild(s[f])
                    }
                }
            }
            return s
        }, cleanData: function (e) {
            var t, n, i = a.cache, r = a.event.special, o = a.support.deleteExpando;
            for (var s = 0, l; (l = e[s]) != null; s++) {
                if (l.nodeName && a.noData[l.nodeName.toLowerCase()]) {
                    continue
                }
                n = l[a.expando];
                if (n) {
                    t = i[n];
                    if (t && t.events) {
                        for (var f in t.events) {
                            if (r[f]) {
                                a.event.remove(l, f)
                            } else {
                                a.removeEvent(l, f, t.handle)
                            }
                        }
                        if (t.handle) {
                            t.handle.elem = null
                        }
                    }
                    if (o) {
                        delete l[a.expando]
                    } else {
                        if (l.removeAttribute) {
                            l.removeAttribute(a.expando)
                        }
                    }
                    delete i[n]
                }
            }
        }
    });

    function mt(e, t) {
        if (t.src) {
            a.ajax({url: t.src, async: false, dataType: "script"})
        } else {
            a.globalEval((t.text || t.textContent || t.innerHTML || "").replace(at, "/*$0*/"))
        }
        if (t.parentNode) {
            t.parentNode.removeChild(t)
        }
    }

    var gt = /alpha\([^)]*\)/i, yt = /opacity=([^)]*)/, vt = /([A-Z]|^ms)/g, bt = /^-?\d+(?:px)?$/i, xt = /^-?\d/,
        wt = /^([\-+])=([\-+.\de]+)/, Tt = {position: "absolute", visibility: "hidden", display: "block"},
        Nt = ["Left", "Right"], Ct = ["Top", "Bottom"], Et, kt, St;
    a.fn.css = function (e, n) {
        if (arguments.length === 2 && n === t) {
            return this
        }
        return a.access(this, e, n, true, function (e, n, i) {
            return i !== t ? a.style(e, n, i) : a.css(e, n)
        })
    };
    a.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Et(e, "opacity", "opacity");
                        return n === "" ? "1" : n
                    } else {
                        return e.style.opacity
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {"float": a.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, i, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return
            }
            var o, s, l = a.camelCase(n), f = e.style, u = a.cssHooks[l];
            n = a.cssProps[l] || l;
            if (i !== t) {
                s = typeof i;
                if (s === "string" && (o = wt.exec(i))) {
                    i = +(o[1] + 1) * +o[2] + parseFloat(a.css(e, n));
                    s = "number"
                }
                if (i == null || s === "number" && isNaN(i)) {
                    return
                }
                if (s === "number" && !a.cssNumber[l]) {
                    i += "px"
                }
                if (!u || !("set" in u) || (i = u.set(e, i)) !== t) {
                    try {
                        f[n] = i
                    } catch (c) {
                    }
                }
            } else {
                if (u && "get" in u && (o = u.get(e, false, r)) !== t) {
                    return o
                }
                return f[n]
            }
        },
        css: function (e, n, i) {
            var r, o;
            n = a.camelCase(n);
            o = a.cssHooks[n];
            n = a.cssProps[n] || n;
            if (n === "cssFloat") {
                n = "float"
            }
            if (o && "get" in o && (r = o.get(e, true, i)) !== t) {
                return r
            } else {
                if (Et) {
                    return Et(e, n)
                }
            }
        },
        swap: function (e, t, n) {
            var i = {};
            for (var r in t) {
                i[r] = e.style[r];
                e.style[r] = t[r]
            }
            n.call(e);
            for (r in t) {
                e.style[r] = i[r]
            }
        }
    });
    a.curCSS = a.css;
    a.each(["height", "width"], function (e, t) {
        a.cssHooks[t] = {
            get: function (e, n, i) {
                var r;
                if (n) {
                    if (e.offsetWidth !== 0) {
                        return At(e, t, i)
                    } else {
                        a.swap(e, Tt, function () {
                            r = At(e, t, i)
                        })
                    }
                    return r
                }
            }, set: function (e, t) {
                if (bt.test(t)) {
                    t = parseFloat(t);
                    if (t >= 0) {
                        return t + "px"
                    }
                } else {
                    return t
                }
            }
        }
    });
    if (!a.support.opacity) {
        a.cssHooks.opacity = {
            get: function (e, t) {
                return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
            }, set: function (e, t) {
                var n = e.style, i = e.currentStyle, r = a.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1;
                if (t >= 1 && a.trim(o.replace(gt, "")) === "") {
                    n.removeAttribute("filter");
                    if (i && !i.filter) {
                        return
                    }
                }
                n.filter = gt.test(o) ? o.replace(gt, r) : o + " " + r
            }
        }
    }
    a(function () {
        if (!a.support.reliableMarginRight) {
            a.cssHooks.marginRight = {
                get: function (e, t) {
                    var n;
                    a.swap(e, {display: "inline-block"}, function () {
                        if (t) {
                            n = Et(e, "margin-right", "marginRight")
                        } else {
                            n = e.style.marginRight
                        }
                    });
                    return n
                }
            }
        }
    });
    if (n.defaultView && n.defaultView.getComputedStyle) {
        kt = function (e, t) {
            var n, i, r;
            t = t.replace(vt, "-$1").toLowerCase();
            if ((i = e.ownerDocument.defaultView) && (r = i.getComputedStyle(e, null))) {
                n = r.getPropertyValue(t);
                if (n === "" && !a.contains(e.ownerDocument.documentElement, e)) {
                    n = a.style(e, t)
                }
            }
            return n
        }
    }
    if (n.documentElement.currentStyle) {
        St = function (e, t) {
            var n, i, r, a = e.currentStyle && e.currentStyle[t], o = e.style;
            if (a === null && o && (r = o[t])) {
                a = r
            }
            if (!bt.test(a) && xt.test(a)) {
                n = o.left;
                i = e.runtimeStyle && e.runtimeStyle.left;
                if (i) {
                    e.runtimeStyle.left = e.currentStyle.left
                }
                o.left = t === "fontSize" ? "1em" : a || 0;
                a = o.pixelLeft + "px";
                o.left = n;
                if (i) {
                    e.runtimeStyle.left = i
                }
            }
            return a === "" ? "auto" : a
        }
    }
    Et = kt || St;

    function At(e, t, n) {
        var i = t === "width" ? e.offsetWidth : e.offsetHeight, r = t === "width" ? Nt : Ct, o = 0, s = r.length;
        if (i > 0) {
            if (n !== "border") {
                for (; o < s; o++) {
                    if (!n) {
                        i -= parseFloat(a.css(e, "padding" + r[o])) || 0
                    }
                    if (n === "margin") {
                        i += parseFloat(a.css(e, n + r[o])) || 0
                    } else {
                        i -= parseFloat(a.css(e, "border" + r[o] + "Width")) || 0
                    }
                }
            }
            return i + "px"
        }
        i = Et(e, t, t);
        if (i < 0 || i == null) {
            i = e.style[t] || 0
        }
        i = parseFloat(i) || 0;
        if (n) {
            for (; o < s; o++) {
                i += parseFloat(a.css(e, "padding" + r[o])) || 0;
                if (n !== "padding") {
                    i += parseFloat(a.css(e, "border" + r[o] + "Width")) || 0
                }
                if (n === "margin") {
                    i += parseFloat(a.css(e, n + r[o])) || 0
                }
            }
        }
        return i + "px"
    }

    if (a.expr && a.expr.filters) {
        a.expr.filters.hidden = function (e) {
            var t = e.offsetWidth, n = e.offsetHeight;
            return t === 0 && n === 0 || !a.support.reliableHiddenOffsets && (e.style && e.style.display || a.css(e, "display")) === "none"
        };
        a.expr.filters.visible = function (e) {
            return !a.expr.filters.hidden(e)
        }
    }
    var Lt = /%20/g, jt = /\[\]$/, Ft = /\r?\n/g, Dt = /#.*$/, Mt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ot = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        _t = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, Ht = /^(?:GET|HEAD)$/, Bt = /^\/\//,
        Pt = /\?/, qt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Wt = /^(?:select|textarea)/i, It = /\s+/,
        $t = /([?&])_=[^&]*/, Rt = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, Xt = a.fn.load, zt = {}, Vt = {},
        Ut, Gt, Jt = ["*/"] + ["*"];
    try {
        Ut = r.href
    } catch (Yt) {
        Ut = n.createElement("a");
        Ut.href = "";
        Ut = Ut.href
    }
    Gt = Rt.exec(Ut.toLowerCase()) || [];

    function Qt(e) {
        return function (t, n) {
            if (typeof t !== "string") {
                n = t;
                t = "*"
            }
            if (a.isFunction(n)) {
                var i = t.toLowerCase().split(It), r = 0, o = i.length, s, l, f;
                for (; r < o; r++) {
                    s = i[r];
                    f = /^\+/.test(s);
                    if (f) {
                        s = s.substr(1) || "*"
                    }
                    l = e[s] = e[s] || [];
                    l[f ? "unshift" : "push"](n)
                }
            }
        }
    }

    function Kt(e, n, i, r, a, o) {
        a = a || n.dataTypes[0];
        o = o || {};
        o[a] = true;
        var s = e[a], l = 0, f = s ? s.length : 0, u = e === zt, c;
        for (; l < f && (u || !c); l++) {
            c = s[l](n, i, r);
            if (typeof c === "string") {
                if (!u || o[c]) {
                    c = t
                } else {
                    n.dataTypes.unshift(c);
                    c = Kt(e, n, i, r, c, o)
                }
            }
        }
        if ((u || !c) && !o["*"]) {
            c = Kt(e, n, i, r, "*", o)
        }
        return c
    }

    function Zt(e, n) {
        var i, r, o = a.ajaxSettings.flatOptions || {};
        for (i in n) {
            if (n[i] !== t) {
                (o[i] ? e : r || (r = {}))[i] = n[i]
            }
        }
        if (r) {
            a.extend(true, e, r)
        }
    }

    a.fn.extend({
        load: function (e, n, i) {
            if (typeof e !== "string" && Xt) {
                return Xt.apply(this, arguments)
            } else {
                if (!this.length) {
                    return this
                }
            }
            var r = e.indexOf(" ");
            if (r >= 0) {
                var o = e.slice(r, e.length);
                e = e.slice(0, r)
            }
            var s = "GET";
            if (n) {
                if (a.isFunction(n)) {
                    i = n;
                    n = t
                } else {
                    if (typeof n === "object") {
                        n = a.param(n, a.ajaxSettings.traditional);
                        s = "POST"
                    }
                }
            }
            var l = this;
            a.ajax({
                url: e, type: s, dataType: "html", data: n, complete: function (e, t, n) {
                    n = e.responseText;
                    if (e.isResolved()) {
                        e.done(function (e) {
                            n = e
                        });
                        l.html(o ? a("<div>").append(n.replace(qt, "")).find(o) : n)
                    }
                    if (i) {
                        l.each(i, [n, t, e])
                    }
                }
            });
            return this
        }, serialize: function () {
            return a.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? a.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Wt.test(this.nodeName) || Ot.test(this.type))
            }).map(function (e, t) {
                var n = a(this).val();
                return n == null ? null : a.isArray(n) ? a.map(n, function (e, n) {
                    return {name: t.name, value: e.replace(Ft, "\r\n")}
                }) : {name: t.name, value: n.replace(Ft, "\r\n")}
            }).get()
        }
    });
    a.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        a.fn[t] = function (e) {
            return this.on(t, e)
        }
    });
    a.each(["get", "post"], function (e, n) {
        a[n] = function (e, i, r, o) {
            if (a.isFunction(i)) {
                o = o || r;
                r = i;
                i = t
            }
            return a.ajax({type: n, url: e, data: i, success: r, dataType: o})
        }
    });
    a.extend({
        getScript: function (e, n) {
            return a.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return a.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            if (t) {
                Zt(e, a.ajaxSettings)
            } else {
                t = e;
                e = a.ajaxSettings
            }
            Zt(e, t);
            return e
        },
        ajaxSettings: {
            url: Ut,
            isLocal: _t.test(Gt[1]),
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Jt
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": true, "text json": a.parseJSON, "text xml": a.parseXML},
            flatOptions: {context: true, url: true}
        },
        ajaxPrefilter: Qt(zt),
        ajaxTransport: Qt(Vt),
        ajax: function (e, n) {
            if (typeof e === "object") {
                n = e;
                e = t
            }
            n = n || {};
            if (!n.jsonpCallback) {
                n.jsonpCallback = n.jsonpName
            }
            var i = a.ajaxSetup({}, n), r = i.context || i,
                o = r !== i && (r.nodeType || r instanceof a) ? a(r) : a.event, s = a.Deferred(),
                l = a.Callbacks("once memory"), f = i.statusCode || {}, u, c = {}, d = {}, p, h, m, g, y, v = 0, b, x,
                w = {
                    readyState: 0, setRequestHeader: function (e, t) {
                        if (!v) {
                            var n = e.toLowerCase();
                            e = d[n] = d[n] || e;
                            c[e] = t
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return v === 2 ? p : null
                    }, getResponseHeader: function (e) {
                        var n;
                        if (v === 2) {
                            if (!h) {
                                h = {};
                                while (n = Mt.exec(p)) {
                                    h[n[1].toLowerCase()] = n[2]
                                }
                            }
                            n = h[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    }, overrideMimeType: function (e) {
                        if (!v) {
                            i.mimeType = e
                        }
                        return this
                    }, abort: function (e) {
                        e = e || "abort";
                        if (m) {
                            m.abort(e)
                        }
                        T(0, e);
                        return this
                    }
                };

            function T(e, n, c, d) {
                if (v === 2) {
                    return
                }
                v = 2;
                if (g) {
                    clearTimeout(g)
                }
                m = t;
                p = d || "";
                w.readyState = e > 0 ? 4 : 0;
                var h, y, x, T = n, N = c ? tn(i, w, c) : t, C, E;
                if (e >= 200 && e < 300 || e === 304) {
                    if (i.ifModified) {
                        if (C = w.getResponseHeader("Last-Modified")) {
                            a.lastModified[u] = C
                        }
                        if (E = w.getResponseHeader("Etag")) {
                            a.etag[u] = E
                        }
                    }
                    if (e === 304) {
                        T = "notmodified";
                        h = true
                    } else {
                        try {
                            y = nn(i, N);
                            T = "success";
                            h = true
                        } catch (k) {
                            T = "parsererror";
                            x = k
                        }
                    }
                } else {
                    x = T;
                    if (!T || e) {
                        T = "error";
                        if (e < 0) {
                            e = 0
                        }
                    }
                }
                w.status = e;
                w.statusText = "" + (n || T);
                if (h) {
                    s.resolveWith(r, [y, T, w])
                } else {
                    s.rejectWith(r, [w, T, x])
                }
                w.statusCode(f);
                f = t;
                if (b) {
                    o.trigger("ajax" + (h ? "Success" : "Error"), [w, i, h ? y : x])
                }
                l.fireWith(r, [w, T]);
                if (b) {
                    o.trigger("ajaxComplete", [w, i]);
                    if (!--a.active) {
                        a.event.trigger("ajaxStop")
                    }
                }
            }

            s.promise(w);
            w.success = w.done;
            w.error = w.fail;
            w.complete = l.add;
            w.statusCode = function (e) {
                if (e) {
                    var t;
                    if (v < 2) {
                        for (t in e) {
                            f[t] = [f[t], e[t]]
                        }
                    } else {
                        t = e[w.status];
                        w.then(t, t)
                    }
                }
                return this
            };
            i.url = ((e || i.url) + "").replace(Dt, "").replace(Bt, Gt[1] + "//");
            i.dataTypes = a.trim(i.dataType || "*").toLowerCase().split(It);
            if (i.crossDomain == null) {
                y = Rt.exec(i.url.toLowerCase());
                i.crossDomain = !!(y && (y[1] != Gt[1] || y[2] != Gt[2] || (y[3] || (y[1] === "http:" ? 80 : 443)) != (Gt[3] || (Gt[1] === "http:" ? 80 : 443))))
            }
            if (i.data && i.processData && typeof i.data !== "string") {
                i.data = a.param(i.data, i.traditional)
            }
            Kt(zt, i, n, w);
            if (v === 2) {
                return false
            }
            b = i.global;
            i.type = i.type.toUpperCase();
            i.hasContent = !Ht.test(i.type);
            if (b && a.active++ === 0) {
                a.event.trigger("ajaxStart")
            }
            if (!i.hasContent) {
                if (i.data) {
                    i.url += (Pt.test(i.url) ? "&" : "?") + i.data;
                    delete i.data
                }
                u = i.url;
                if (i.cache === false) {
                    var N = a.now(), C = i.url.replace($t, "$1_=" + N);
                    i.url = C + (C === i.url ? (Pt.test(i.url) ? "&" : "?") + "_=" + N : "")
                }
            }
            if (i.data && i.hasContent && i.contentType !== false || n.contentType) {
                w.setRequestHeader("Content-Type", i.contentType)
            }
            if (i.ifModified) {
                u = u || i.url;
                if (a.lastModified[u]) {
                    w.setRequestHeader("If-Modified-Since", a.lastModified[u])
                }
                if (a.etag[u]) {
                    w.setRequestHeader("If-None-Match", a.etag[u])
                }
            }
            w.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + Jt + "; q=0.01" : "") : i.accepts["*"]);
            for (x in i.headers) {
                w.setRequestHeader(x, i.headers[x])
            }
            if (i.beforeSend && (i.beforeSend.call(r, w, i) === false || v === 2)) {
                w.abort();
                return false
            }
            for (x in{success: 1, error: 1, complete: 1}) {
                w[x](i[x])
            }
            m = Kt(Vt, i, n, w);
            if (!m) {
                T(-1, "No Transport")
            } else {
                w.readyState = 1;
                if (b) {
                    o.trigger("ajaxSend", [w, i])
                }
                if (i.async && i.timeout > 0) {
                    g = setTimeout(function () {
                        w.abort("timeout")
                    }, i.timeout)
                }
                try {
                    v = 1;
                    m.send(c, T)
                } catch (E) {
                    if (v < 2) {
                        T(-1, E)
                    } else {
                        throw E
                    }
                }
            }
            return w
        },
        param: function (e, n) {
            var i = [], r = function (e, t) {
                t = a.isFunction(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (n === t) {
                n = a.ajaxSettings.traditional
            }
            if (a.isArray(e) || e.jquery && !a.isPlainObject(e)) {
                a.each(e, function () {
                    r(this.name, this.value)
                })
            } else {
                for (var o in e) {
                    en(o, e[o], n, r)
                }
            }
            return i.join("&").replace(Lt, "+")
        }
    });

    function en(e, t, n, i) {
        if (a.isArray(t)) {
            a.each(t, function (t, r) {
                if (n || jt.test(e)) {
                    i(e, r)
                } else {
                    en(e + "[" + (typeof r === "object" || a.isArray(r) ? t : "") + "]", r, n, i)
                }
            })
        } else {
            if (!n && t != null && typeof t === "object") {
                for (var r in t) {
                    en(e + "[" + r + "]", t[r], n, i)
                }
            } else {
                i(e, t)
            }
        }
    }

    a.extend({active: 0, lastModified: {}, etag: {}});

    function tn(e, n, i) {
        var r = e.contents, a = e.dataTypes, o = e.responseFields, s, l, f, u;
        for (l in o) {
            if (l in i) {
                n[o[l]] = i[l]
            }
        }
        while (a[0] === "*") {
            a.shift();
            if (s === t) {
                s = e.mimeType || n.getResponseHeader("content-type")
            }
        }
        if (s) {
            for (l in r) {
                if (r[l] && r[l].test(s)) {
                    a.unshift(l);
                    break
                }
            }
        }
        if (a[0] in i) {
            f = a[0]
        } else {
            for (l in i) {
                if (!a[0] || e.converters[l + " " + a[0]]) {
                    f = l;
                    break
                }
                if (!u) {
                    u = l
                }
            }
            f = f || u
        }
        if (f) {
            if (f !== a[0]) {
                a.unshift(f)
            }
            return i[f]
        }
    }

    function nn(e, n) {
        if (e.dataFilter) {
            n = e.dataFilter(n, e.dataType)
        }
        var i = e.dataTypes, r = {}, o, s, l = i.length, f, u = i[0], c, d, p, h, m;
        for (o = 1; o < l; o++) {
            if (o === 1) {
                for (s in e.converters) {
                    if (typeof s === "string") {
                        r[s.toLowerCase()] = e.converters[s]
                    }
                }
            }
            c = u;
            u = i[o];
            if (u === "*") {
                u = c
            } else {
                if (c !== "*" && c !== u) {
                    d = c + " " + u;
                    p = r[d] || r["* " + u];
                    if (!p) {
                        m = t;
                        for (h in r) {
                            f = h.split(" ");
                            if (f[0] === c || f[0] === "*") {
                                m = r[f[1] + " " + u];
                                if (m) {
                                    h = r[h];
                                    if (h === true) {
                                        p = m
                                    } else {
                                        if (m === true) {
                                            p = h
                                        }
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (!(p || m)) {
                        a.error("No conversion from " + d.replace(" ", " to "))
                    }
                    if (p !== true) {
                        n = p ? p(n) : m(h(n))
                    }
                }
            }
        }
        return n
    }

    var rn = a.now(), an = /(\=)\?(&|$)|\?\?/i;
    a.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return a.expando + "_" + rn++
        }
    });
    a.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r = t.contentType === "application/x-www-form-urlencoded" && typeof t.data === "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== false && (an.test(t.url) || r && an.test(t.data))) {
            var o, s = t.jsonpCallback = a.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l = e[s],
                f = t.url, u = t.data, c = "$1" + s + "$2";
            if (t.jsonp !== false) {
                f = f.replace(an, c);
                if (t.url === f) {
                    if (r) {
                        u = u.replace(an, c)
                    }
                    if (t.data === u) {
                        f += (/\?/.test(f) ? "&" : "?") + t.jsonp + "=" + s
                    }
                }
            }
            t.url = f;
            t.data = u;
            e[s] = function (e) {
                o = [e]
            };
            i.always(function () {
                e[s] = l;
                if (o && a.isFunction(l)) {
                    e[s](o[0])
                }
            });
            t.converters["script json"] = function () {
                if (!o) {
                    a.error(s + " was not called")
                }
                return o[0]
            };
            t.dataTypes[0] = "json";
            return "script"
        }
    });
    a.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                a.globalEval(e);
                return e
            }
        }
    });
    a.ajaxPrefilter("script", function (e) {
        if (e.cache === t) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    var on = e.ActiveXObject ? function () {
        for (var e in ln) {
            ln[e](0, 1)
        }
    } : false, sn = 0, ln;

    function fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function un() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    a.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && fn() || un()
    } : fn;
    !function (e) {
        a.extend(a.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
    }(a.ajaxSettings.xhr());
    if (a.support.ajax) {
        a.ajaxTransport(function (n) {
            if (!n.crossDomain || a.support.cors) {
                var i;
                return {
                    send: function (r, o) {
                        var s = n.xhr(), l, f;
                        if (n.username) {
                            s.open(n.type, n.url, n.async, n.username, n.password)
                        } else {
                            s.open(n.type, n.url, n.async)
                        }
                        if (n.xhrFields) {
                            for (f in n.xhrFields) {
                                s[f] = n.xhrFields[f]
                            }
                        }
                        if (n.mimeType && s.overrideMimeType) {
                            s.overrideMimeType(n.mimeType)
                        }
                        if (!n.crossDomain && !r["X-Requested-With"]) {
                            r["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (f in r) {
                                s.setRequestHeader(f, r[f])
                            }
                        } catch (u) {
                        }

                        i = function (e, r) {
                            var f, u, c, d, p;
                            try {
                                if (i && (r || s.readyState === 4)) {
                                    i = t;
                                    if (l) {
                                        s.onreadystatechange = a.noop;
                                        if (on) {
                                            delete ln[l]
                                        }
                                    }
                                    if (r) {
                                        if (s.readyState !== 4) {
                                            s.abort()
                                        }
                                    } else {
                                        f = s.status;
                                        c = s.getAllResponseHeaders();
                                        d = {};
                                        p = s.responseXML;
                                        if (p && p.documentElement) {
                                            d.xml = p
                                        }
                                        d.text = s.responseText;
                                        try {
                                            u = s.statusText
                                        } catch (h) {
                                            u = ""
                                        }
                                        if (!f && n.isLocal && !n.crossDomain) {
                                            f = d.text ? 200 : 404
                                        } else {
                                            if (f === 1223) {
                                                f = 204
                                            }
                                        }
                                    }
                                }
                            } catch (m) {
                                if (!r) {
                                    o(-1, m)
                                }
                            }
                            if (d) {
                                o(f, u, d, c)
                            }
                        };
                        if (!n.async || s.readyState === 4) {
                            i()
                        } else {
                            l = ++sn;
                            if (on) {
                                if (!ln) {
                                    ln = {};
                                    a(e).unload(on)
                                }
                                ln[l] = i
                            }
                            s.onreadystatechange = i
                        }
                    }, abort: function () {
                        if (i) {
                            i(0, 1)
                        }
                    }
                }
            }
        })
    }
    var cn = {}, dn, pn, hn = /^(?:toggle|show|hide)$/, mn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, gn,
        yn = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        vn;
    a.fn.extend({
        show: function (e, t, n) {
            var i, r;
            if (e || e === 0) {
                return this.animate(wn("show", 3), e, t, n)
            } else {
                for (var o = 0, s = this.length; o < s; o++) {
                    i = this[o];
                    if (i.style) {
                        r = i.style.display;
                        if (!a._data(i, "olddisplay") && r === "none") {
                            r = i.style.display = ""
                        }
                        if (r === "" && a.css(i, "display") === "none") {
                            a._data(i, "olddisplay", Tn(i.nodeName))
                        }
                    }
                }
                for (o = 0; o < s; o++) {
                    i = this[o];
                    if (i.style) {
                        r = i.style.display;
                        if (r === "" || r === "none") {
                            i.style.display = a._data(i, "olddisplay") || ""
                        }
                    }
                }
                return this
            }
        }, hide: function (e, t, n) {
            if (e || e === 0) {
                return this.animate(wn("hide", 3), e, t, n)
            } else {
                var i, r, o = 0, s = this.length;
                for (; o < s; o++) {
                    i = this[o];
                    if (i.style) {
                        r = a.css(i, "display");
                        if (r !== "none" && !a._data(i, "olddisplay")) {
                            a._data(i, "olddisplay", r)
                        }
                    }
                }
                for (o = 0; o < s; o++) {
                    if (this[o].style) {
                        this[o].style.display = "none"
                    }
                }
                return this
            }
        }, _toggle: a.fn.toggle, toggle: function (e, t, n) {
            var i = typeof e === "boolean";
            if (a.isFunction(e) && a.isFunction(t)) {
                this._toggle.apply(this, arguments)
            } else {
                if (e == null || i) {
                    this.each(function () {
                        var t = i ? e : a(this).is(":hidden");
                        a(this)[t ? "show" : "hide"]()
                    })
                } else {
                    this.animate(wn("toggle", 3), e, t, n)
                }
            }
            return this
        }, fadeTo: function (e, t, n, i) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
        }, animate: function (e, t, n, i) {
            var r = a.speed(t, n, i);
            if (a.isEmptyObject(e)) {
                return this.each(r.complete, [false])
            }
            e = a.extend({}, e);

            function o() {
                if (r.queue === false) {
                    a._mark(this)
                }
                var t = a.extend({}, r), n = this.nodeType === 1, i = n && a(this).is(":hidden"), o, s, l, f, u, c, d,
                    p, h;
                t.animatedProperties = {};
                for (l in e) {
                    o = a.camelCase(l);
                    if (l !== o) {
                        e[o] = e[l];
                        delete e[l]
                    }
                    s = e[o];
                    if (a.isArray(s)) {
                        t.animatedProperties[o] = s[1];
                        s = e[o] = s[0]
                    } else {
                        t.animatedProperties[o] = t.specialEasing && t.specialEasing[o] || t.easing || "swing"
                    }
                    if (s === "hide" && i || s === "show" && !i) {
                        return t.complete.call(this)
                    }
                    if (n && (o === "height" || o === "width")) {
                        t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY];
                        if (a.css(this, "display") === "inline" && a.css(this, "float") === "none") {
                            if (!a.support.inlineBlockNeedsLayout || Tn(this.nodeName) === "inline") {
                                this.style.display = "inline-block"
                            } else {
                                this.style.zoom = 1
                            }
                        }
                    }
                }
                if (t.overflow != null) {
                    this.style.overflow = "hidden"
                }
                for (l in e) {
                    f = new a.fx(this, t, l);
                    s = e[l];
                    if (hn.test(s)) {
                        h = a._data(this, "toggle" + l) || (s === "toggle" ? i ? "show" : "hide" : 0);
                        if (h) {
                            a._data(this, "toggle" + l, h === "show" ? "hide" : "show");
                            f[h]()
                        } else {
                            f[s]()
                        }
                    } else {
                        u = mn.exec(s);
                        c = f.cur();
                        if (u) {
                            d = parseFloat(u[2]);
                            p = u[3] || (a.cssNumber[l] ? "" : "px");
                            if (p !== "px") {
                                a.style(this, l, (d || 1) + p);
                                c = (d || 1) / f.cur() * c;
                                a.style(this, l, c + p)
                            }
                            if (u[1]) {
                                d = (u[1] === "-=" ? -1 : 1) * d + c
                            }
                            f.custom(c, d, p)
                        } else {
                            f.custom(c, s, "")
                        }
                    }
                }
                return true
            }

            return r.queue === false ? this.each(o) : this.queue(r.queue, o)
        }, stop: function (e, n, i) {
            if (typeof e !== "string") {
                i = n;
                n = e;
                e = t
            }
            if (n && e !== false) {
                this.queue(e || "fx", [])
            }
            return this.each(function () {
                var t, n = false, r = a.timers, o = a._data(this);
                if (!i) {
                    a._unmark(true, this)
                }

                function s(e, t, n) {
                    var r = t[n];
                    a.removeData(e, n, true);
                    r.stop(i)
                }

                if (e == null) {
                    for (t in o) {
                        if (o[t] && o[t].stop && t.indexOf(".run") === t.length - 4) {
                            s(this, o, t)
                        }
                    }
                } else {
                    if (o[t = e + ".run"] && o[t].stop) {
                        s(this, o, t)
                    }
                }
                for (t = r.length; t--;) {
                    if (r[t].elem === this && (e == null || r[t].queue === e)) {
                        if (i) {
                            r[t](true)
                        } else {
                            r[t].saveState()
                        }
                        n = true;
                        r.splice(t, 1)
                    }
                }
                if (!(i && n)) {
                    a.dequeue(this, e)
                }
            })
        }
    });

    function bn() {
        setTimeout(xn, 0);
        return vn = a.now()
    }

    function xn() {
        vn = t
    }

    function wn(e, t) {
        var n = {};
        a.each(yn.concat.apply([], yn.slice(0, t)), function () {
            n[this] = e
        });
        return n
    }

    a.each({
        slideDown: wn("show", 1),
        slideUp: wn("hide", 1),
        slideToggle: wn("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        a.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    });
    a.extend({
        speed: function (e, t, n) {
            var i = e && typeof e === "object" ? a.extend({}, e) : {
                complete: n || !n && t || a.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !a.isFunction(t) && t
            };
            i.duration = a.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in a.fx.speeds ? a.fx.speeds[i.duration] : a.fx.speeds._default;
            if (i.queue == null || i.queue === true) {
                i.queue = "fx"
            }
            i.old = i.complete;
            i.complete = function (e) {
                if (a.isFunction(i.old)) {
                    i.old.call(this)
                }
                if (i.queue) {
                    a.dequeue(this, i.queue)
                } else {
                    if (e !== false) {
                        a._unmark(this)
                    }
                }
            };
            return i
        }, easing: {
            linear: function (e, t, n, i) {
                return n + i * e
            }, swing: function (e, t, n, i) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * i + n
            }
        }, timers: [], fx: function (e, t, n) {
            this.options = t;
            this.elem = e;
            this.prop = n;
            t.orig = t.orig || {}
        }
    });
    a.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            (a.fx.step[this.prop] || a.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var e, t = a.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
        }, custom: function (e, n, i) {
            var r = this, o = a.fx;
            this.startTime = vn || bn();
            this.end = n;
            this.now = this.start = e;
            this.pos = this.state = 0;
            this.unit = i || this.unit || (a.cssNumber[this.prop] ? "" : "px");

            function s(e) {
                return r.step(e)
            }

            s.queue = this.options.queue;
            s.elem = this.elem;
            s.saveState = function () {
                if (r.options.hide && a._data(r.elem, "fxshow" + r.prop) === t) {
                    a._data(r.elem, "fxshow" + r.prop, r.start)
                }
            };
            if (s() && a.timers.push(s) && !gn) {
                gn = setInterval(o.tick, o.interval)
            }
        }, show: function () {
            var e = a._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || a.style(this.elem, this.prop);
            this.options.show = true;
            if (e !== t) {
                this.custom(this.cur(), e)
            } else {
                this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur())
            }
            a(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = a._data(this.elem, "fxshow" + this.prop) || a.style(this.elem, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0)
        }, step: function (e) {
            var t, n, i, r = vn || bn(), o = true, s = this.elem, l = this.options;
            if (e || r >= l.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                l.animatedProperties[this.prop] = true;
                for (t in l.animatedProperties) {
                    if (l.animatedProperties[t] !== true) {
                        o = false
                    }
                }
                if (o) {
                    if (l.overflow != null && !a.support.shrinkWrapBlocks) {
                        a.each(["", "X", "Y"], function (e, t) {
                            s.style["overflow" + t] = l.overflow[e]
                        })
                    }
                    if (l.hide) {
                        a(s).hide()
                    }
                    if (l.hide || l.show) {
                        for (t in l.animatedProperties) {
                            a.style(s, t, l.orig[t]);
                            a.removeData(s, "fxshow" + t, true);
                            a.removeData(s, "toggle" + t, true)
                        }
                    }
                    i = l.complete;
                    if (i) {
                        l.complete = false;
                        i.call(s)
                    }
                }
                return false
            } else {
                if (l.duration == Infinity) {
                    this.now = r
                } else {
                    n = r - this.startTime;
                    this.state = n / l.duration;
                    this.pos = a.easing[l.animatedProperties[this.prop]](this.state, n, 0, 1, l.duration);
                    this.now = this.start + (this.end - this.start) * this.pos
                }
                this.update()
            }
            return true
        }
    };
    a.extend(a.fx, {
        tick: function () {
            var e, t = a.timers, n = 0;
            for (; n < t.length; n++) {
                e = t[n];
                if (!e() && t[n] === e) {
                    t.splice(n--, 1)
                }
            }
            if (!t.length) {
                a.fx.stop()
            }
        }, interval: 13, stop: function () {
            clearInterval(gn);
            gn = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (e) {
                a.style(e.elem, "opacity", e.now)
            }, _default: function (e) {
                if (e.elem.style && e.elem.style[e.prop] != null) {
                    e.elem.style[e.prop] = e.now + e.unit
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    });
    a.each(["width", "height"], function (e, t) {
        a.fx.step[t] = function (e) {
            a.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    });
    if (a.expr && a.expr.filters) {
        a.expr.filters.animated = function (e) {
            return a.grep(a.timers, function (t) {
                return e === t.elem
            }).length
        }
    }

    function Tn(e) {
        if (!cn[e]) {
            var t = n.body, i = a("<" + e + ">").appendTo(t), r = i.css("display");
            i.remove();
            if (r === "none" || r === "") {
                if (!dn) {
                    dn = n.createElement("iframe");
                    dn.frameBorder = dn.width = dn.height = 0
                }
                t.appendChild(dn);
                if (!pn || !dn.createElement) {
                    pn = (dn.contentWindow || dn.contentDocument).document;
                    pn.write((n.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>");
                    pn.close()
                }
                i = pn.createElement(e);
                pn.body.appendChild(i);
                r = a.css(i, "display");
                t.removeChild(dn)
            }
            cn[e] = r
        }
        return cn[e]
    }

    var Nn = /^t(?:able|d|h)$/i, Cn = /^(?:body|html)$/i;
    if ("getBoundingClientRect" in n.documentElement) {
        a.fn.offset = function (e) {
            var t = this[0], n;
            if (e) {
                return this.each(function (t) {
                    a.offset.setOffset(this, e, t)
                })
            }
            if (!t || !t.ownerDocument) {
                return null
            }
            if (t === t.ownerDocument.body) {
                return a.offset.bodyOffset(t)
            }
            try {
                n = t.getBoundingClientRect()
            } catch (i) {
            }
            var r = t.ownerDocument, o = r.documentElement;
            if (!n || !a.contains(o, t)) {
                return n ? {top: n.top, left: n.left} : {top: 0, left: 0}
            }
            var s = r.body, l = En(r), f = o.clientTop || s.clientTop || 0, u = o.clientLeft || s.clientLeft || 0,
                c = l.pageYOffset || a.support.boxModel && o.scrollTop || s.scrollTop,
                d = l.pageXOffset || a.support.boxModel && o.scrollLeft || s.scrollLeft, p = n.top + c - f,
                h = n.left + d - u;
            return {top: p, left: h}
        }
    } else {
        a.fn.offset = function (e) {
            var t = this[0];
            if (e) {
                return this.each(function (t) {
                    a.offset.setOffset(this, e, t)
                })
            }
            if (!t || !t.ownerDocument) {
                return null
            }
            if (t === t.ownerDocument.body) {
                return a.offset.bodyOffset(t)
            }
            var n, i = t.offsetParent, r = t, o = t.ownerDocument, s = o.documentElement, l = o.body, f = o.defaultView,
                u = f ? f.getComputedStyle(t, null) : t.currentStyle, c = t.offsetTop, d = t.offsetLeft;
            while ((t = t.parentNode) && t !== l && t !== s) {
                if (a.support.fixedPosition && u.position === "fixed") {
                    break
                }
                n = f ? f.getComputedStyle(t, null) : t.currentStyle;
                c -= t.scrollTop;
                d -= t.scrollLeft;
                if (t === i) {
                    c += t.offsetTop;
                    d += t.offsetLeft;
                    if (a.support.doesNotAddBorder && !(a.support.doesAddBorderForTableAndCells && Nn.test(t.nodeName))) {
                        c += parseFloat(n.borderTopWidth) || 0;
                        d += parseFloat(n.borderLeftWidth) || 0
                    }
                    r = i;
                    i = t.offsetParent
                }
                if (a.support.subtractsBorderForOverflowNotVisible && n.overflow !== "visible") {
                    c += parseFloat(n.borderTopWidth) || 0;
                    d += parseFloat(n.borderLeftWidth) || 0
                }
                u = n
            }
            if (u.position === "relative" || u.position === "static") {
                c += l.offsetTop;
                d += l.offsetLeft
            }
            if (a.support.fixedPosition && u.position === "fixed") {
                c += Math.max(s.scrollTop, l.scrollTop);
                d += Math.max(s.scrollLeft, l.scrollLeft)
            }
            return {top: c, left: d}
        }
    }
    a.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop, n = e.offsetLeft;
            if (a.support.doesNotIncludeMarginInBodyOffset) {
                t += parseFloat(a.css(e, "marginTop")) || 0;
                n += parseFloat(a.css(e, "marginLeft")) || 0
            }
            return {top: t, left: n}
        }, setOffset: function (e, t, n) {
            var i = a.css(e, "position");
            if (i === "static") {
                e.style.position = "relative"
            }
            var r = a(e), o = r.offset(), s = a.css(e, "top"), l = a.css(e, "left"),
                f = (i === "absolute" || i === "fixed") && a.inArray("auto", [s, l]) > -1, u = {}, c = {}, d, p;
            if (f) {
                c = r.position();
                d = c.top;
                p = c.left
            } else {
                d = parseFloat(s) || 0;
                p = parseFloat(l) || 0
            }
            if (a.isFunction(t)) {
                t = t.call(e, n, o)
            }
            if (t.top != null) {
                u.top = t.top - o.top + d
            }
            if (t.left != null) {
                u.left = t.left - o.left + p
            }
            if ("using" in t) {
                t.using.call(e, u)
            } else {
                r.css(u)
            }
        }
    };
    a.fn.extend({
        position: function () {
            if (!this[0]) {
                return null
            }
            var e = this[0], t = this.offsetParent(), n = this.offset(),
                i = Cn.test(t[0].nodeName) ? {top: 0, left: 0} : t.offset();
            n.top -= parseFloat(a.css(e, "marginTop")) || 0;
            n.left -= parseFloat(a.css(e, "marginLeft")) || 0;
            i.top += parseFloat(a.css(t[0], "borderTopWidth")) || 0;
            i.left += parseFloat(a.css(t[0], "borderLeftWidth")) || 0;
            return {top: n.top - i.top, left: n.left - i.left}
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || n.body;
                while (e && !Cn.test(e.nodeName) && a.css(e, "position") === "static") {
                    e = e.offsetParent
                }
                return e
            })
        }
    });
    a.each(["Left", "Top"], function (e, n) {
        var i = "scroll" + n;
        a.fn[i] = function (n) {
            var r, o;
            if (n === t) {
                r = this[0];
                if (!r) {
                    return null
                }
                o = En(r);
                return o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : a.support.boxModel && o.document.documentElement[i] || o.document.body[i] : r[i]
            }
            return this.each(function () {
                o = En(this);
                if (o) {
                    o.scrollTo(!e ? n : a(o).scrollLeft(), e ? n : a(o).scrollTop())
                } else {
                    this[i] = n
                }
            })
        }
    });

    function En(e) {
        return a.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }

    a.each(["Height", "Width"], function (e, n) {
        var i = n.toLowerCase();
        a.fn["inner" + n] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(a.css(e, i, "padding")) : this[i]() : null
        };
        a.fn["outer" + n] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(a.css(t, i, e ? "margin" : "border")) : this[i]() : null
        };
        a.fn[i] = function (e) {
            var r = this[0];
            if (!r) {
                return e == null ? null : this
            }
            if (a.isFunction(e)) {
                return this.each(function (t) {
                    var n = a(this);
                    n[i](e.call(this, t, n[i]()))
                })
            }
            if (a.isWindow(r)) {
                var o = r.document.documentElement["client" + n], s = r.document.body;
                return r.document.compatMode === "CSS1Compat" && o || s && s["client" + n] || o
            } else {
                if (r.nodeType === 9) {
                    return Math.max(r.documentElement["client" + n], r.body["scroll" + n], r.documentElement["scroll" + n], r.body["offset" + n], r.documentElement["offset" + n])
                } else {
                    if (e === t) {
                        var l = a.css(r, i), f = parseFloat(l);
                        return a.isNumeric(f) ? f : l
                    } else {
                        return this.css(i, typeof e === "string" ? e : e + "px")
                    }
                }
            }
        }
    });
    e.jQuery = e.$ = a;
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define("jquery", [], function () {
            return a
        })
    }
}(window);/*! JSON v3.3.2 | http://bestiejs.github.io/json3 | Copyright 2012-2014, Kit Cambridge | http://kit.mit-license.org */
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
                $.ajax({
                    url: stageJsServer + "/gmpro/1.0.0/public/1.0.0/js/category-tpl.min.js?versionData=" + versionData,
                    dataType: "script",
                    cache: true,
                    success: function () {
                        var e = window.location.href;
                        var n = "//ss" + cookieDomain + "/exactNavNew.html";
                        if (e.indexOf("jsp") > -1 && e.indexOf("preview") > -1) {
                            n = "http://preview.ds" + cookieDomain + "/stage-web/2015/exactNavNew.jsp"
                        }
                        $.ajax({
                            type: "get",
                            url: n,
                            cache: false,
                            jsonpName: "navData",
                            dataType: "JSONP",
                            success: function (e) {
                                if (e) {
                                    var n = gomeTemplate("category", e);
                                    $("#loading1-sync").html(n);
                                    $("#loading1-sync>div").eq(a).show().siblings().hide()
                                }
                            }
                        })
                    }
                });
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
}([function (e, o, t) {
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

var $domain = cookieDomain;
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
        cookieDomain == ".atguat.com.cn" ? r.serviceUrl = "//larkapi" + cookieDomain : r.serviceUrl = "//ocsapi" + cookieDomain;
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
            if (t == "order") {
                window.open("//cs" + cookieDomain + "?entry=" + t + "&orgi=" + r.orgi + "&orderId=" + r.orderId + "&shippingGroupId=" + r.shippingGroupId, "_blank")
            } else if (t == "product") {
                window.open("//cs" + cookieDomain + "?entry=" + t + "&orgi=" + r.orgi + "&productId=" + r.productId + "&skuId=" + r.skuId, "_blank")
            } else {
                window.open("//cs" + cookieDomain + "?entry=" + t + "&orgi=" + r.orgi, "_blank")
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
        e.off("click").on("click", function () {
            window.open("//cs" + cookieDomain + "?entry=" + s + "&orgi=" + e.attr("orgi") + "&productId=" + n + "&skuId=" + o, "_blank")
        })
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
                e.cookie("headerSearchHistory", null, {domain: cookieDomain});
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
                    e.cookie("headerSearchHistory", JSON.stringify(o), {expires: 365e3, domain: cookieDomain});
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
            e.ajax({
                type: "get", url: a, dataType: "jsonp", jsonpName: "suggest", success: function (e) {
                    t.renderDataForSearch(e, i)
                }
            })
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
                    t = "//search" + cookieDomain + "/search?question=" + encodeURIComponent(i.getPointWord(s)) + "&catId=" + n + "&pos=" + o + "&sq=" + a + "&search_mode=" + r;
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
            e.ajax({
                type: "get", url: a, cache: false, dataType: "jsonp", jsonpName: "suggest", success: function (e) {
                }
            })
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
    $.cookie("headerSearchHistory", JSON.stringify(o), {expires: 365e3, domain: cookieDomain})
}


$(function () {
    if ($("#searchInput").length > 0) {
        $("#searchInput").autopoint({url: "//apis" + cookieDomain + "/p/suggest?from=headSearch"})
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
        hotkeywordurl = "//ss" + cookieDomain + "/item/v1/hotKeyword/flag/publicv1/gethotkeyword?keyword=" + window.location.href
    } else {
        hotkeywordurl = "//ss" + cookieDomain + "/item/v1/hotKeyword/" + a + "/flag/publicv1/gethotkeyword"
    }
    $.ajax({
        type: "get", url: hotkeywordurl, dataType: "jsonp", jsonpName: "gethotkeyword", success: function (o) {
            if (o.length <= 0) {
                return
            }
            if (o.length > 6) {
                o.length = 6
            }
            var r = "";
            for (var t = 0; t < o.length; t++) {
                if (o[t].href == "") {
                    o[t].href = encodeURI("//search" + cookieDomain + "/search?question=" + o[t].text + (a ? "&catId=" + a : ""))
                }
                r += '<a target="_blank" href="' + o[t].href + '"' + ' title="' + o[t].text + '"><span ' + (o[t].red == "Y" ? 'class="highlight"' : "") + ">" + o[t].text + "</span></a>"
            }
            e.html(r)
        }
    })
});
(function (t) {
    var a = function () {
        var t = n() ? "/qiyegou" : "/home";
        return "//cart" + cookieDomain + t + "/api/cart/getCartItemCount"
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
        $.cookie("cartnum", m(), {domain: cookieDomain, path: "/", expires: a})
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
            $.ajax({
                type: "get", url: a, dataType: "jsonp", success: function (t) {
                    mCart.lazyCartDom(t)
                }
            })
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
    var n = '<div class="mini-products">                        <h2 class="hdrcartitle">最近加入的商品：</h2>                        <ul class="mini-nProductLists">                            <% for(var i=0;i<miniCommerceItemsGroupVOs.length;i++ ) { %>                            <li class="mini-list clearfix">                                <% var miniVOs = miniCommerceItemsGroupVOs[i] || {}; %>                                <dl class="nProduct-huod realMini">                                    <% if(miniVOs.promotionHeads && miniVOs.promotionHeads.length > 0 ) { %>                                    <% if(!(miniVOs.promotionHeads[0] && miniVOs.promotionHeads[0].type=="TZ")) {%>                                    <dd data-sub="tit-sub" class="huod-hd clearfix">                                        <% for(var k=0; k< miniVOs.promotionHeads.length; k++) {%>                                        <% var promotionHeadItem = miniVOs.promotionHeads[k] || {},label = promotionHeadItem.label ;%>                                        <div class="pCol-name-huod">                                            <% if (promotionHeadItem.type === "MJ") {%>                                                <% var promotionTxt = ""; %>                                                <% if(promotionHeadItem.satisfied) {%>                                                    <span class="ico-l">满减</span>                                                    <% promotionTxt = "活动商品已购满" + ($toFixed(promotionHeadItem.preC)) + "元（已减" + ($toFixed(promotionHeadItem.postC)) + "元）";%>                                                <% } else if (promotionHeadItem.validKindNum) {%>                                                     <span class="ico-l-gray"><i></i>满减</span>                                                     <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preC)) + "元不同种类商品，即可享受满减促销活动";%>                                                <% } else {%>                                                    <span class="ico-l-gray"><i></i>满减</span>                                                    <% promotionTxt = "活动商品购满" + ($toFixed(promotionHeadItem.preC)) + "元，即可享受满减";%>                                                <% } %>                                                <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>                                            <% } else if (promotionHeadItem.type === "ZDZ"|| promotionHeadItem.type === "ZD") {%>                                                <% var promotionTxt = ""; %>                                                <% if(promotionHeadItem.satisfied) {%>                                                    <span class="ico-l">满折</span>                                                    <% promotionTxt = "活动商品已购满" + (promotionHeadItem.preC || "0") + "件（已减" + ($toFixed(promotionHeadItem.postC)) + "元）";%>                                                 <% } else if (promotionHeadItem.validKindNum) {%>                                                    <span class="ico-l">满折</span>                                                    <% promotionTxt = "购买" + (promotionHeadItem.preC || "0") + "件不同种类商品，即可享受满折活动";%>                                                 <% } else {%>                                                    <span class="ico-l-gray"><i></i>满折</span>                                                    <% promotionTxt = "活动商品购满" + (promotionHeadItem.preC || "0") + "件，即可享受满折";%>                                                <% } %>                                                <span class="nLowLeight " title="<%= promotionTxt %>"><%=$cutstr(promotionTxt,26)  %></span>                                            <% } else {%>                                                <span><%=$showTypeTitle(promotionHeadItem) %></span>                                            <% } %>                                        </div>                                        <%} %>                                        <% if(miniVOs.miniGroupSummaryVO && miniVOs.miniGroupSummaryVO.promtion && miniVOs.miniGroupSummaryVO.subAmount > 0) {%>                                        <p style="padding-left:8px;">                                            小计：<span class="yuan" style="margin-right:10px;"> <b>¥</b><%= $toFixed(miniVOs.miniGroupSummaryVO.subAmount) %></span>                                            <% if(miniVOs.miniGroupSummaryVO.promoDiscAmount > 0) {%>                                            <span class="nRed">已减：<%= $toFixed(miniVOs.miniGroupSummaryVO.promoDiscAmount)%>元</span>                                            <% } %>                                        </p>                                        <%} %>                                    </dd>                                    <%} %>                                    <%} %>                                    <% var commerceItemsGroup = miniVOs.commerceItemsGroup || [];%>                                    <% if(miniVOs.promotionHeads && miniVOs.promotionHeads.length > 0 && miniVOs.promotionHeads[0].type=="TZ"){ %>                                        <%if(commerceItemsGroup.length>0 && commerceItemsGroup[0]){%>                                        <dd class="mini-huod-list min-sideline-list clearfix">                                            <div class="mini-product-info clearfix">                                                <div class="mini-pCol-img">                                                    <a target="_blank" title="<%= commerceItemsGroup[0].vProductName %>" href="<%= commerceItemsGroup[0].vUrl %>">                                                        <img alt="" src="<%= commerceItemsGroup[0].vImageURL %>" width="50" height="50"></a>                                                </div>                                                <div class="mini-pCol-name">                                                    <p>                                                        <a target="_blank" class="nMinCartBlue" title="<%= commerceItemsGroup[0].vProductName %>" href="<%= commerceItemsGroup[0].vUrl %>">                                                            【套装】<%=commerceItemsGroup[0].vProductName  %></a>                                                    </p>                                                </div>                                                <div class="mini-pCol-row">                                                    <% if(miniVOs.miniGroupSummaryVO && miniVOs.miniGroupSummaryVO.subAmount){ %>                                                        <span class="yuan"><b>¥<%= $toFixed(miniVOs.miniGroupSummaryVO.subAmount) %></b></span>                                                    <% }%>                                                    <span  class="quantity"><%= commerceItemsGroup[0].quantity %></span>                                                    <span isClick="" mcart-count mcart-count-min="1"                                                        mcart-count-change-interval="100"                                                        mcart-change-count                                                        data-cid="<%= commerceItemsGroup[0].itemId %>"                                                        data-limit="<%= commerceItemsGroup[0].limitNum %>"class="mcart-count">                                                            <a href="javascript:;" type="down" mcart-count-sub class="mcart-count-btn mcart-count-sub  <% if(commerceItemsGroup[0].quantity ==1) {%>mcart-count-disabled<% } %> ">-</a>                                                            <a href="javascript:;" type="up" mcart-count-add class=" <% if(commerceItemsGroup[0].quantity >= commerceItemsGroup[0].limitNum  ) {%>mcart-count-disabled<% } %>  mcart-count-btn mcart-count-add  ">+</a>                                                            <div class="mcart-count-input"><input  maxlength="3" name="num" type="text" value="<%= commerceItemsGroup[0].quantity %>">                                                            </div>                                                    </span>                                                    <a class="nLowLeight miniDel" href="javascript:void(0)" title="删除" data-itemid="<%= commerceItemsGroup[0].itemId %>">删除</a>                                                </div>                                            </div>                                                                                </dd>                                        <%}%>                                    <%}else{%>                                        <% for(var j=0; j< commerceItemsGroup.length; j++) {%>                                        <% var commerceItem = commerceItemsGroup[j] || {}; %>                                        <dd class="mini-huod-list min-sideline-list clearfix">                                            <div class="mini-product-info clearfix">                                                <div class="mini-pCol-img">                                                    <a  style="position: relative;" target="_blank" title="<%= commerceItem.itemName %>" href="<%= commerceItem.itemURL %>">                                                       <%=$showTuanProductTip(commerceItem) %>                                                       <img alt="" src="<%= commerceItem.itemImageURL %>" width="50" height="50"></a>                                                </div>                                                <div class="mini-pCol-name">                                                    <p>                                                        <a target="_blank" class="nMinCartBlue" title="<%= commerceItem.itemName %>" href="<%= commerceItem.itemURL %>"><%=$cutstr(commerceItem.itemName,56)  %></a>                                                    </p>                                                </div>                                                <div class="mini-pCol-row">                                                    <span class="yuan"><b>¥<%= $toFixed(commerceItem.salePrice) %></b></span>                                                    <span  class="quantity"><%= commerceItem.quantity %></span>                                                    <span isClick="" mcart-count mcart-count-min="1"                                                        mcart-count-change-interval="100"                                                        mcart-change-count                                                        data-cid="<%= commerceItem.itemId %>"                                                        data-limit="<%= commerceItem.limitNum %>"class="mcart-count">                                                            <a href="javascript:;" type="down" mcart-count-sub class="mcart-count-btn mcart-count-sub  <% if(commerceItem.quantity ==1) {%>mcart-count-disabled<% } %> ">-</a>                                                            <a href="javascript:;" type="up" mcart-count-add class=" <% if(commerceItem.quantity >= commerceItem.limitNum  ) {%>mcart-count-disabled<% } %>  mcart-count-btn mcart-count-add  ">+</a>                                                            <div class="mcart-count-input"><input  maxlength="3" name="num" type="text" value="<%= commerceItem.quantity %>">                                                            </div>                                                    </span>                                                    <% if(commerceItemsGroup[j].commerceitemVOFlag != "SUB"){ %>                                                        <a class="nLowLeight miniDel" href="javascript:void(0)" title="删除" data-itemid="<%= commerceItem.itemId %>">删除</a>                                                    <% }%>                                                </div>                                            </div>                                            <% var incrementServiceItems = commerceItem.miniIncrementServiceInfoVOs || [], commerceItemVOs = commerceItem.showBaseGroupVOList || [];%>                                            <% if(incrementServiceItems.length > 0 || commerceItemVOs.length > 0) {%>                                            <div class="mini-pCol-promotion fl">                                                <%for(var k=0;k<incrementServiceItems.length;k++) {%>                                                    <% var dName = (incrementServiceItems[k].promotionType == "1"  ? "特惠" : "") + $toDisplayName(incrementServiceItems[k]) + "  " + incrementServiceItems[k].numOfYear + "年  ¥" + $toFixed(incrementServiceItems[k].price) %>                                                    <p class="nLowLeight cou-gift" title="<%=dName %>">[<em><%=$toServiceType(incrementServiceItems[k]) %></em>]<%=dName %></p>                                                <% } %>                                                <% for(var h=0;h<commerceItemVOs.length;h++) {%>                                                <% var itemName = commerceItemVOs[h].itemName || ""; %>                                                    <p class="nLowLeight cou-gift" title="<%=itemName %>">[<em>赠品</em>]&nbsp;&nbsp;<%=$cutstr(itemName,24)  %> </p>                                                <% } %>                                            </div>                                            <% } %>                                        </dd>                                        <%}%>                                     <%}%>                                </dl>                            </li>                            <% } %>                        </ul>                        <div id="atg_store_csFooter1" class="cartfooter">                            <h4>                                已选 <i><span id="csQuantity"><%= miniCartProfileVO.itemCount || 0 %></span></i>                                 件 ，共计： <strong><span id="csSubtotal">¥</span><%= $toFixed(miniCartProfileVO.totalAmount) %></strong>                            </h4>                            <% if(isUpCart) {%>                                <a  data-code="cart01002" id="csCheckout" style="text-decoration:none;" class="gocart" href="//cart' + cookieDomain + i + '/cart" title="去购物车">                                    <span>去购物车</span>                                </a>                            <% } else {%>                                <a  data-code="cart01001" id="csCheckout" style="text-decoration:none;" class="gocart" href="//cart' + cookieDomain + i + '/cart" title="去购物车">                                    <span>去购物车 </span>                                </a>                            <% } %>                        </div>                    </div>';
    var r = '<div carttype="asidecart"  id="csEmptyMessage" class="noshop">                        <% if(isUpCart) {%>                            <a data-code="cart01002" href="//cart' + cookieDomain + i + '/cart" title="去购物车" style="text-decoration:underline;">购物车</a>                        <% } else {%>                            <a data-code="cart01001" href="//cart' + cookieDomain + i + '/cart" title="去购物车" style="text-decoration:underline;">购物车</a>                        <% } %>                        中还没有商品，赶紧选购吧！</div>';
    var o = function () {
        return {
            loadCart: "//cart" + cookieDomain + i + "/api/cart/loadMiniCart",
            delCartItem: "//cart" + cookieDomain + i + "/api/cart/removeItem",
            changeNum: "//cart" + cookieDomain + i + "/api/cart/changeNum"
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
        return $.ajax({dataType: "jsonp", type: "get", url: o.loadCart})
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
        }).attr("href", "//cart" + cookieDomain + i)
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
                    $.ajax({
                        url: stageJsServer + "/gmlib/unit/g/1.0.0/g.min.js",
                        dataType: "script",
                        cache: true,
                        success: function () {
                            g.login(function () {
                                $(".gome-bar-btn-coupon").trigger("click")
                            })
                        }
                    });
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
                $.ajax({
                    type: "get",
                    url: "//ss" + cookieDomain + "/item/v1/rightActivityFloat/timeline/" + u + "/flag/channel/timeline",
                    dataType: "jsonp",
                    jsonpName: "timeline",
                    success: function (e) {
                        var t = "", a = "", i = "", s = "";

                        function r(e) {
                            e = new Date(e.replace(/-/g, "/")).getMonth() + 1;
                            return e
                        }

                        function o(e) {
                            e = new Date(e.replace(/-/g, "/")).getDate();
                            return e
                        }

                        if (e.hasOwnProperty("end")) {
                            if (e.end[0].type == "redPacke") {
                                a = '<div class="gome-bar-time-end">                                                <div class="gome-bar-time-coupon"><p>￥<strong>' + e.end[0].elemenlTitle + "</strong>" + e.end[0].content + "</p><span>" + e.end[0].elemenlDescribe + "</span><span>有效期" + r(e.end[0].startTime) + "." + o(e.end[0].startTime) + "-" + r(e.end[0].endTime) + "." + o(e.end[0].endTime) + '</span></div>                                                <div class="gome-bar-time-line"><i></i><em>' + r(e.end[0].endTime) + "月" + o(e.end[0].endTime) + "日</em></div>                                            </div>"
                            } else {
                                a = '<div class="gome-bar-time-end">                                                <div class="gome-bar-time-event"><span>' + r(e.end[0].startTime) + "." + o(e.end[0].startTime) + "-" + r(e.end[0].endTime) + "." + o(e.end[0].endTime) + "</span><strong>" + e.end[0].elemenlTitle + "</strong><b>" + e.end[0].elemenlDescribe + '</b></div>                                                <div class="gome-bar-time-line"><i></i><em>' + r(e.end[0].endTime) + "月" + o(e.end[0].endTime) + "日</em></div>                                            </div>"
                            }
                        }
                        if (e.hasOwnProperty("themeData")) {
                            t += '<div class="gome-bar-time-going">                                                    <a data-code="' + e.themeData[0].modelId + '" href="' + e.themeData[0].tolink + '" target="_blank">                                                        <div class="gome-bar-time-event"><span>' + r(e.themeData[0].startTime) + "." + o(e.themeData[0].startTime) + "-" + r(e.themeData[0].endTime) + "." + o(e.themeData[0].endTime) + "</span><strong>" + e.themeData[0].elemenlTitle + "</strong><b>" + e.themeData[0].elemenlDescribe + '</b></div>                                                    </a>                                                    <div class="gome-bar-time-line"><i></i><em>' + ((new Date).getMonth() + 1) + "月" + (new Date).getDate() + "日</em></div>                                                </div>"
                        }
                        if (e.hasOwnProperty("staring")) {
                            for (var n = 0; n < e.staring.length; n++) {
                                if (e.staring[n].type == "redPacke" && !e.staring[n].tolink == "") {
                                    i += '<div class="gome-bar-time-going">                                                        <a data-code="' + e.staring[n].modelId + "-" + n + '" href="' + e.staring[n].tolink + '" target="_blank">                                                            <div class="gome-bar-time-coupon"><p>￥<strong>' + e.staring[n].elemenlTitle + "</strong>" + e.staring[n].content + "</p><span>" + e.staring[n].elemenlDescribe + "</span><span>有效期" + r(e.staring[n].startTime) + "." + o(e.staring[n].startTime) + "-" + r(e.staring[n].endTime) + "." + o(e.staring[n].endTime) + '</span></div>                                                        </a>                                                        <div class="gome-bar-time-line"><i></i><em>' + ((new Date).getMonth() + 1) + "月" + (new Date).getDate() + "日</em></div>                                                    </div>"
                                } else if (!e.staring[n].tolink == "") {
                                    i += '<div class="gome-bar-time-going">                                                        <a data-code="' + e.staring[n].modelId + "-" + n + '" href="' + e.staring[n].tolink + '" target="_blank">                                                            <div class="gome-bar-time-event"><span>' + r(e.staring[n].startTime) + "." + o(e.staring[n].startTime) + "-" + r(e.staring[n].endTime) + "." + o(e.staring[n].endTime) + "</span><strong>" + e.staring[n].elemenlTitle + "</strong><b>" + e.staring[n].elemenlDescribe + '</b></div>                                                        </a>                                                        <div class="gome-bar-time-line"><i></i><em>' + ((new Date).getMonth() + 1) + "月" + (new Date).getDate() + "日</em></div>                                                    </div>"
                                }
                            }
                        }
                        if (e.hasOwnProperty("notStart")) {
                            for (var n = 0; n < e.notStart.length; n++) {
                                if (e.notStart[n].type == "redPacke" && !e.notStart[n].tolink == "") {
                                    s += '<div class="gome-bar-time-soon">                                                        <div class="gome-bar-time-coupon"><p>￥<strong>' + e.notStart[n].elemenlTitle + "</strong>" + e.notStart[n].content + "</p><span>" + e.notStart[n].elemenlDescribe + "</span><span>有效期" + r(e.notStart[n].startTime) + "." + o(e.notStart[n].startTime) + "-" + r(e.notStart[n].endTime) + "." + o(e.notStart[n].endTime) + '</span></div>                                                        <div class="gome-bar-time-line"><i></i><em>' + r(e.notStart[n].startTime) + "月" + o(e.notStart[n].startTime) + '日</em></div>                                                        <div class="gome-bar-time-wait">敬请期待</div>                                                    </div>'
                                } else if (!e.notStart[n].tolink == "") {
                                    s += '<div class="gome-bar-time-soon">                                                        <div class="gome-bar-time-event"><span>' + r(e.notStart[n].startTime) + "." + o(e.notStart[n].startTime) + "-" + r(e.notStart[n].endTime) + "." + o(e.notStart[n].endTime) + "</span><strong>" + e.notStart[n].elemenlTitle + "</strong><b>" + e.notStart[n].elemenlDescribe + '</b></div>                                                        <div class="gome-bar-time-line"><i></i><em>' + r(e.notStart[n].startTime) + "月" + o(e.notStart[n].startTime) + '日</em></div>                                                        <div class="gome-bar-time-wait">敬请期待</div>                                                    </div>'
                                }
                            }
                        }
                        l.html(a + t + i + s);
                        var d = $(window).height();
                        var m = ($(".gome-bar-time-going").length + $(".gome-bar-time-soon").length) * 100;
                        if (m * 2 < d) {
                            l.append('<div class="gome-bar-time-bg"></div>');
                            $(".gome-bar-time-bg").css("margin-top", parseInt((d - m - 156) / 2 - 50))
                        }
                    }
                });
                if ($.fn.slimScroll) {
                    A()
                } else {
                    $.ajax({
                        url: stageJsServer + "/gmlib/ui/slimscroll/1.3.7.1/slimscroll.min.js",
                        dataType: "script",
                        cache: true,
                        success: function () {
                            A()
                        }
                    })
                }
                l.attr("data-open", "true")
            }
            if (e == "coupon") {
                a.show()
            }
            if (e == "coupon" && !c.attr("data-open")) {
                if (loginData.loginName == "") {
                    $.ajax({
                        url: stageJsServer + "/gmlib/unit/g/1.0.0/g.min.js",
                        dataType: "script",
                        cache: true,
                        success: function () {
                            g.login(function () {
                                n.trigger("click")
                            })
                        }
                    });
                    return
                }
                $.ajax({
                    url: stageJsServer + "/gmpro/1.0.0/public/1.0.0/js/aside-coupon.min.js?versionData=" + versionData,
                    dataType: "script",
                    cache: true,
                    success: function () {
                        c.attr("data-open", "true")
                    }
                })
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
                    $.ajax({
                        url: stageJsServer + "/gmlib/ui/slimscroll/1.3.7.1/slimscroll.min.js",
                        dataType: "script",
                        cache: true,
                        success: function () {
                            z()
                        }
                    })
                }
                b.attr("data-open", "true")
            }
            if (e == "favorites") {
                $(this).find(".gome-bar-btn-tip").removeClass("hover");
                if (!a.attr("data-open") || !$("#gome-bar-cart").attr("data-animate")) {
                    if (loginData.loginStatus && loginData.loginStatus < 3) {
                        $.ajax({
                            url: stageJsServer + "/gmlib/unit/g/1.0.0/g.min.js",
                            dataType: "script",
                            cache: true,
                            success: function () {
                                g.login(function () {
                                    d.trigger("click")
                                })
                            }
                        });
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
                            $.ajax({
                                url: stageJsServer + "/gmpro/1.0.0/public/1.0.0/js/aside-favorites.min.js?versionData=" + versionData,
                                dataType: "script",
                                cache: true,
                                success: function () {
                                    h.asideFavorites()
                                }
                            })
                        }
                    }
                }
            }
            if (e == "favorites" && !h.attr("data-open")) {
                if ($.fn.slimScroll) {
                    P()
                } else {
                    $.ajax({
                        url: stageJsServer + "/gmlib/ui/slimscroll/1.3.7.1/slimscroll.min.js",
                        dataType: "script",
                        cache: true,
                        success: function () {
                            P()
                        }
                    })
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
        $.ajax({
            url: stageJsServer + "/gmpro/1.0.0/public/1.0.0/js/aside-tpl.min.js?versionData=" + versionData,
            dataType: "script",
            cache: true,
            success: function () {
                $.ajax({
                    type: "get",
                    url: "//ss" + cookieDomain + "/item/v1/rightActivityFloat/activity/" + e + "/flag/channel/activity",
                    dataType: "jsonp",
                    jsonpName: "activity",
                    success: function (e) {
                        e.isThemeData = e.hasOwnProperty("themeData");
                        e.isDeputyHall = e.hasOwnProperty("deputyHall");
                        e.isRedPacket = e.hasOwnProperty("redPacket");
                        e.isSpecialIds = e.hasOwnProperty("specialIds");
                        e.stageImageServer = stageImageServer;
                        var t = gomeTemplate("aside-sales", e);
                        m.html(t)
                    },
                    complete: function () {
                        m.find("a").each(function () {
                            if ($(this).attr("href") == "undefined" || $(this).attr("href").indexOf("undefined") > -1) {
                                $(this).removeAttr("href target data-code").addClass("unlink")
                            }
                        })
                    }
                })
            }
        });
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
            $.ajax({
                url: "//member" + cookieDomain + "/gome/index/loginStyle",
                data: 0,
                type: "get",
                dataType: "jsonp",
                jsonpName: "newlogintop",
                success: function (t) {
                    if (t.loginStatus && t.loginStatus < 3) {
                        e("true")
                    } else {
                        e("123")
                    }
                }
            })
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
        var n = "";
        var i = e("atgregion") || "11011400|北京北京市东城区东城区|11010000|11000000|110114001";
        var a = i.split("|");
        switch (t) {
            case 0:
                n = a[1];
                break;
            case 1:
                n = a[3];
                break;
            case 2:
                n = a[2];
                break;
            case 3:
                n = a[0];
                break;
            case 4:
                n = a[4] == undefined ? "" : a[4];
                break
        }
        return n
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

    var n = {
        w: t(staSite),
        item: t(staSite.replace("www", "item")),
        js: t(stageJsServer),
        css: t(stageCssServer),
        img: t(stageImageServer),
        login: t(staSite.replace("www", "login")),
        reg: t(staSite.replace("www", "reg")),
        desc: t(staSite.replace("www", "desc")),
        contextPath: contextPath,
        getParam: function (e) {
            var t = {};
            if (location.search.indexOf("?") != -1) {
                var n = location.search.substr(1);
                strs = n.split("&");
                for (var i = 0; i < strs.length; i++) {
                    if (strs[i].split("=").length !== 2) {
                        continue
                    }
                    t[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1])
                }
            }
            if (t[e] == undefined) {
                t[e] = ""
            }
            return t[e]
        },
        g: t(dynSite)
    };
    g.url = n
})();
(function () {
    var e = jQuery;
    ajax = function () {
        if (typeof arguments[0] != "string") {
            return
        }
        var t = undefined;
        var n = {};
        var i = undefined;
        var a = {};
        if (arguments.length == 1) {
            t = arguments[0];
            n = {}
        } else if (arguments.length == 2) {
            if (typeof arguments[1] == "function") {
                t = arguments[0];
                i = arguments[1]
            } else {
                t = arguments[0];
                n = arguments[1]
            }
        } else if (arguments.length == 3 && typeof arguments[2] == "function") {
            t = arguments[0];
            n = arguments[1];
            i = arguments[2]
        } else if (arguments.length == 3 && typeof arguments[2] == "object") {
            t = arguments[0];
            n = arguments[1];
            a = arguments[2]
        } else if (arguments.length == 4) {
            t = arguments[0];
            n = arguments[1];
            a = arguments[2];
            i = arguments[3]
        }
        if (typeof a.site == "string" && a.site.indexOf("g") >= 0) {
            t = g.url.g + t
        } else if (typeof a.site == "string" && a.site.indexOf("w") >= 0) {
            t = g.url.w + t
        } else if (typeof a.site == "string" && a.site.indexOf("f") >= 0) {
            t = t
        } else if (n.site && n.site.indexOf("g") >= 0) {
            t = g.url.g + t
        } else if (n.site && n.site.indexOf("w") >= 0) {
            t = g.url.w + t
        } else if (n.site && n.site.indexOf("f") >= 0) {
            t = t
        } else if (n.site && n.site.indexOf("s") >= 0) {
            t = "//ss" + cookieDomain + t
        } else {
            t = g.url.g + t
        }
        if (n.site) {
            delete n.site
        }
        var r = {
            type: "get",
            url: t,
            data: n,
            dataType: "jsonp",
            jsonpName: n.callback == undefined ? "cb_" + parseInt(Math.random() * 1e15) : n.callback,
            success: function (e) {
                i && i(e)
            }
        };
        if (n.callback) {
            delete n.callback
        }
        if (typeof a == "object") {
            e.extend(r, a)
        }
        return e.ajax(r)
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
                    for (var n = 0; n < e._subs.length; n++) {
                        e._subs[n](t)
                    }
                    e._endStatus = true;
                    for (var n = 0; n < e._endfn.length; n++) {
                        e._endfn[n](t)
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
    var n = g.url.g.indexOf(location.host) >= 0 ? "//" + location.host + "/ec/homeus/glogin_callback.html" : "//" + location.host + "/glogin_callback.html";
    var i = {
        loaded: false,
        login_url: function () {
            if (g.url.login.indexOf("atgsit") > 0 || g.url.login.indexOf("atguat") > 0 || g.url.login.indexOf("gomeprelive") > 0) {
                return g.url.login
            } else {
                return g.url.login.replace("http", "https")
            }
        }() + "/popLogin.no?callbackHost=" + n + "&orginURI=" + location.href,
        reg_url: function () {
            if (g.url.reg.indexOf("atgsit") > 0 || g.url.reg.indexOf("atguat") > 0 || g.url.reg.indexOf("gomeprelive") > 0) {
                return g.url.reg
            } else {
                return g.url.reg.replace("http", "https")
            }
        }() + "/register/index/pop.no?callbackHost=" + n + "&orginURI=" + location.href,
        verifyUserUrl: g.url.login + "/redirectResetPwd.no?loginType=1",
        loginbg: t('<div style="position:fixed;top:0;left:0; width:100%;height:100%;  background:#000;opacity:0.15;  filter:alpha(opacity=15); display:none;"></div>'),
        loginfrm: t('<iframe id="loginFrame" scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>'),
        zIndex: 1e4,
        show: function (e) {
            i.loginbg.show().css("zIndex", i.zIndex);
            i.loginfrm.remove();
            i.loginfrm = t('<iframe scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>');
            t("body").append(i.loginfrm);
            i.loginfrm.attr("src", i.src + "&orginURI=" + location.href + (e == undefined || e == "" ? "" : "&userName=" + e) + "&_t=" + parseInt(Math.random() * 1e12));
            i.loginfrm.show().css({
                left: (t(window).innerWidth() - i.loginfrm.width()) / 2,
                top: (t(window).height() - i.loginfrm.height()) / 2,
                zIndex: i.zIndex + 1
            })
        },
        verifyUser_Show: function () {
            i.loginbg.show().css("zIndex", i.zIndex);
            i.loginfrm.show().css({
                left: (t(window).innerWidth() - i.loginfrm.width()) / 2,
                top: (t(window).height() - i.loginfrm.height()) / 2,
                zIndex: i.zIndex + 1
            }).attr("src", i.verifyUserUrl + "&callbackHost=" + n + "&orginURI=" + location.href + "&_t=" + parseInt(Math.random() * 1e12))
        },
        login_open: function (e) {
            i.loginbg.show().css("zIndex", i.zIndex);
            i.loginfrm.remove();
            i.loginfrm = t('<iframe id="loginFrame" scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>');
            t("body").append(i.loginfrm);
            i.loginfrm.attr("src", i.login_url + (e == undefined || e == "" ? "" : "&userName=" + e) + "&_t=" + parseInt(Math.random() * 1e12));
            i.loginfrm.show().css({
                left: (t(window).innerWidth() - i.loginfrm.width()) / 2,
                top: (t(window).height() - i.loginfrm.height()) / 2,
                zIndex: i.zIndex + 1
            });
            var n = window.setInterval(function () {
                var e = document.getElementById("loginFrame");
                try {
                    if (e.src == "//www.gome.com.cn/glogin_callback.html") {
                        var t = 1;
                        t = parseInt(t);
                        switch (t) {
                            case 0:
                                g.login.callback();
                                break;
                            case 1:
                                g.login.callback(true);
                                break;
                            case 2:
                                g.login.verifyUser();
                                break;
                            case 3:
                                g.login.login_open(getParam("userName"));
                                break;
                            case 4:
                                g.login.reg_open();
                                break;
                            case 10:
                                g.embedLogin.callback(true);
                                break;
                            case 11:
                                g.embedLogin.start_login();
                                break;
                            case 12:
                                g.embedLogin.start_reg();
                                break;
                            default:
                                g.login.callback();
                                break
                        }
                        clearInterval(n)
                    }
                } catch (i) {
                    clearInterval(n)
                }
            }, 1e3)
        },
        reg_open: function () {
            i.loginbg.show().css("zIndex", i.zIndex);
            i.loginfrm.remove();
            i.loginfrm = t('<iframe scrolling="no"  frameborder="0" style="z-index:2; width:462px;height:605px; position:fixed;   background-color:transparent; " allowTransparency="true"></iframe>');
            t("body").append(i.loginfrm);
            i.loginfrm.attr("src", i.reg_url + "&_t=" + parseInt(Math.random() * 1e12));
            i.loginfrm.show().css({
                left: (t(window).innerWidth() - i.loginfrm.width()) / 2,
                top: (t(window).height() - i.loginfrm.height()) / 2,
                zIndex: i.zIndex + 1
            })
        },
        close: function () {
            i.loginbg.hide();
            i.loginfrm.hide().removeAttr("src")
        },
        callback: function () {
        }
    };
    login = function (e, n) {
        if (i.loaded == false) {
            i.loaded = true;
            t("body").append(i.loginbg)
        }
        if (login.running == true) {
            return
        }
        login.running = true;
        i.fn = null;
        g.ajax("/ec/homeus/global/login/loginstatus.jsp").done(function (t) {
            login.running = false;
            if (t.securityStatus > 3) {
                e && e()
            } else {
                i.fn = e;
                "reg" == n ? i.reg_open() : i.login_open()
            }
        })
    };
    login.callback = function (e) {
        i.close();
        if (e) {
            if (window.signData) {
                signData.lazyCartEnd = false;
                signData.loginEnd = false;
                signData.gloginfn = i.fn;
                signData.init()
            } else {
                i.fn && i.fn()
            }
        }
    };
    login.close = function () {
    };
    login.verifyUser = function () {
        i.close();
        i.verifyUser_Show()
    };
    login.login_open = function (e) {
        i.close();
        i.login_open(e)
    };
    login.reg_open = function () {
        i.close();
        i.reg_open()
    };
    login.config = function (e) {
        i = t.extend(i, e)
    };
    e.login = login
})(g);
(function (e) {
    var t = jQuery;
    var n = g.url.g.indexOf(location.host) >= 0 ? "//" + location.host + "/ec/homeus/glogin_callback.html" : "//" + location.host + "/glogin_callback.html";
    var i = {
        start: function (e) {
            t.extend(i.config, e);
            if (!i.config.wrap) {
                return
            }
            i.config.frm.remove();
            i.config.frm = t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>');
            i.callback = e.callback;
            t(i.config.wrap).append(i.config.frm);
            i.config.frm.attr("src", i.config.src_login + "?callbackHost=" + n + (i.config.toSite ? "&toSite=" + i.config.toSite : ""))
        },
        start_login: function () {
            i.config.frm.remove();
            i.config.frm = t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>');
            t(i.config.wrap).append(i.config.frm);
            i.config.frm.attr("src", i.config.src_login + "?callbackHost=" + n + (i.config.toSite ? "&toSite=" + i.config.toSite : ""))
        },
        start_reg: function () {
            i.config.frm.remove();
            i.config.frm = t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>');
            t(i.config.wrap).append(i.config.frm);
            i.config.frm.attr("src", i.config.src_reg + "?callbackHost=" + n + (i.config.toSite ? "&toSite=" + i.config.toSite : ""))
        },
        config: {
            callback: undefined,
            frm: t('<iframe scrolling ="no" style="height: 315px; width: 294px;" frameborder="0"></iframe>'),
            src_login: g.url.login + "/embedLogin.no",
            src_reg: g.url.reg + "/register/index/embed.no",
            toSite: undefined
        },
        callback: function (e) {
            if (e) {
                i.config.frm.remove();
                i.config.callback && i.config.callback()
            }
        }
    };
    e.embedLogin = i
})(g);
(function (e) {
    var t = jQuery;
    var n = t('<div class="Dialog_bg"></div>');
    var i = false;

    function a(e, a) {
        if (!i) {
            i = true;
            t("body").append(n)
        }
        a = a || {};
        this.config = a;
        this.config.zIndex = a.zIndex || 1e4;
        this._bg_Dialog = n;
        this._dom = e;
        this._wrap = t('<div class="Dialog"></div>');
        this._wrap.append(e);
        t("body").append(this._wrap);
        if (a.closeBtn != false) {
            this._closeBtn = t('<a class="closeBtn" href="javascript:;">╳</a>');
            this._wrap.append(this._closeBtn);
            var r = this;
            this._closeBtn.click(function () {
                r.close()
            })
        }
        e.show()
    }

    a.prototype = {
        open: function (e) {
            if (e) {
                var n = e();
                if (n == false) {
                    return
                }
            }
            var i = this;
            var a = window.navigator.userAgent.indexOf("IE6") > 0;
            this._bg_Dialog.show().css({"z-index": this.config.zIndex - 1});
            this._wrap.show().css({
                top: t(window).height() / 2 - this._dom.height() / 2 + (a ? t(window).scrollTop() : 0),
                left: t(window).width() / 2 - this._dom.width() / 2 + (a ? t(window).scrollLeft() : 0),
                "z-index": i.config.zIndex
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
    var n;
    var i;
    var a;
    var r;

    function o(e, s) {
        (function () {
            n = t('<div class="addCart-box">' + '<div class="addCart-loading">正在添加商品到购物车...</div>' + '<div class="addCart-state-success dn">' + '<span class="addCart-state-icon"></span>' + '<h5 class="addCart-state">添加成功</h5>' + '<p class="addCart-info">购物车共有<b class="totalQuantity highlight">5</b>件商品，商品总价：<b class="highlight totalAmount">¥3122.00</b></p>' + '<div class="addCart-btn">' + '<a class="addCart-gotoCart" href="' + g.url.g + '/ec/homeus/cart/cart.jsp">去购物车结算&nbsp;&gt;</a>' + '<a class="addCart-shopping">继续购物</a>' + "</div>" + "</div>" + '<dl class="addCart-bulkData">' + '<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>' + "</dl>" + "</div>");
            t("body").append(n);
            i = new g.Dialog(n);
            n.find(".addCart-shopping").click(function () {
                i.close()
            });
            a = t('<div class="addCart-state-failed">' + '<span class="addCart-state-icon"></span>' + '<p>您购物车中的相同商品购买数量<span class="highlight">不能大于<b>20</b>件</span></p>' + '<p>请您&nbsp;<a href="' + g.url.g + "/ec/homeus/myaccount/customer/customer.jsp" + '" class="link"><b>点击此链接</b></a>&nbsp;联系客服购买！</p>' + "</div>");
            t("body").append(a);
            r = new g.Dialog(a)
        })();
        s = s || {showDialog: true};
        t(".addCart-loading").show();
        t(".addCart-state-success").hide();
        t.ajax({
            type: "get",
            url: o.config.url_addCart,
            data: {
                method: e.method || "homeus.addNormalItemToOrder",
                params: JSON.stringify(t.extend(e, o.config.data))
            },
            dataType: "jsonp"
        }).done(function (e) {
            s.callback && s.callback(e)
        }).done(function (e) {
            if (e.result && e.result.cart) {
                n.find(".addCart-loading").hide();
                n.find(".addCart-state-success").show();
                n.find(".totalQuantity").html(e.result.cart.cartSummary.totalQuantity);
                n.find(".totalAmount").html("¥" + e.result.cart.cartSummary.totalAmount)
            }
        }).done(function (e) {
            if (e.result && e.result.cart) {
                return
            }
            var t = e;
            if (t.error && t.error.data) {
                var n = t.error.data, o = n.code, s = "", l = "件";
                var c = false;
                switch (o) {
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
                } else if (n.code == "bbcQuantityForLimitBuy") {
                    _htm = '<div class="errorTxt">' + s + "</div>";
                    _this.dialog({inner: "#dialogEr", cssname: "dialogBox Er", errIco: "warn", errMsg: _htm})
                } else if (l == "件") {
                    a = '<div class="addCart-state-failed">' + '<span class="addCart-state-icon"></span>' + "<p>" + s + '<span class="highlight">不能大于<b>' + n.quantityMax + "</b>件</span></p>" + '<p>请您&nbsp;<a href="' + g.url.g + "/ec/homeus/myaccount/customer/customer.jsp" + '" class="link"><b>点击此链接</b></a>&nbsp;联系客服购买！</p>' + "</div>"
                } else if (l == "种") {
                    a = '<div class="addCart-state-failed">' + '<span class="addCart-state-icon"></span>' + "<p>" + s + "已达上限(" + n.quantityMax + l + ")！</p>" + "</div>"
                }
            } else {
                a.html("添加异常！请重试！")
            }
            i.close();
            r.open()
        });
        i.open();
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
                n.find(".addCart-bulkData").html("").html('<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>' + "");
                var t = "";
                for (var i = 0; i < e.productList.length; i++) {
                    t += '<dd class="bulkData-item">' + '<a href="' + e.productList[i].detailHref + ' title="' + e.productList[i].dispName + '" class="bulkData-pic" target="_blank"><img width="80" height="80" src="' + e.productList[i].imgUrl + '" alt="' + e.productList[i].dispName + '"></a>' + '<a href="' + e.productList[i].detailHref + ' title="' + e.productList[i].dispName + '" class="bulkData-name" target="_blank">' + e.productList[i].dispName + "</a>";
                    "</dd>"
                }
                n.find(".addCart-bulkData").css({visibility: "visible"}).html("").html('<dt class="bulkData-title">购买了此商品的用户还购买了：</dt>' + t)
            })
        })
    }

    o.config = {
        url_addCart: g.url.g + "/ec/homeus/support/add.jsp",
        url_cart: "",
        data: {addItemCount: 1, quantity: 1, method: "homeus.addNormalItemToOrder"}
    };
    e.addCart = o
})(g);
var s_account = s_account || "gome-prd";
var wurl = window.location.href;
if (wurl.search(/\.gomehome\.com(\.cn|)/) > 0) {
    s_account = "gome-gomehome-prd"
} else if (wurl.search(/\.gome(|higo)\.(com\.cn|hk)/) < 0) {
    s_account = "gome-dev"
}
var s = s_gi(s_account);
s.charSet = "UTF-8";
s.cookieDomainPeriods = 3;
s.currencyCode = "CNY";
s.trackDownloadLinks = true;
s.trackExternalLinks = true;
s.trackInlineStats = true;
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls";
s.linkInternalFilters = "javascript:,gome.com.cn";
s.linkLeaveQueryString = false;
s.linkTrackVars = "None";
s.linkTrackEvents = "None";
s.dstStart = "1/1/2008";
s.dstEnd = "1/1/2008";
var tDate = new Date;
s.currentYear = tDate.getFullYear();
s.formList = "";
s.trackFormList = false;
s.trackPageName = true;
s.useCommerce = false;
s.varUsed = "prop7";
s.eventList = "";
s.usePlugins = true;

function s_doPlugins(e) {
    if (!e.campaign) {
        if (e.getQueryParam("cmpid") && e.getQueryParam("cmpid") != "") e.campaign = e.getQueryParam("cmpid"); else {
            var s = e.getQueryParam("utm_campaign");
            var i = e.getQueryParam("utm_source");
            var t = e.getQueryParam("utm_medium");
            var n = e.getQueryParam("utm_term");
            var r = e.getQueryParam("utm_content");
            var a = "none";
            var f;
            if (s == "" || s == null) {
                s = a
            }
            if (i == "" || i == null) {
                i = a
            }
            if (t == "" || t == null) {
                t = a
            }
            if (n == "" || n == null) {
                n = a
            }
            if (r == "" || r == null) {
                r = a
            }
            f = i + "/" + t + "/" + n + "/" + r + "/" + s;
            if (f != null && f != "" && f != "none/none/none/none/none") e.campaign = f
        }
    }
    if (!e.eVar30) {
        e.eVar30 = e.getQueryParam("resc")
    }
    if (!e.eVar2) {
        e.eVar2 = e.getQueryParam("intcmp")
    }
    if (!e.eVar34) {
        e.eVar34 = e.getQueryParam("recmd")
    }
    var o = e.getValOnce(e.eVar1, "ev1", 0);
    if (o) {
        e.events = e.apl(e.events, "event1", ",", 2)
    } else {
        if (e.events == "event2") {
            e.events = ""
        }
    }
    if (e.eVar1) {
        e.prop5 = e.eVar1
    }
    if (e.pageName) {
        e.pageName = e.pageName.replace(/\t/g, " ")
    }
    e.prop6 = e.getPreviousValue(e.prop4, "gpv_p6", "scAdd");
    e.prop25 = e.getPreviousValue(e.pageName, "gpv_pn", "");
    if (e.prop25) e.prop13 = e.getPercentPageViewed();
    if (e.linkTracking == true) e.prop22 = s_objectID; else e.prop22 = e.getPreviousValue(s_objectID, "gpv_p22", "");
    e.prop9 = e.getTimeParting("h", "8");
    e.prop10 = e.getTimeParting("d", "8");
    e.eVar9 = e.prop9;
    e.eVar10 = e.prop10;
    e.prop8 = e.getNewRepeat(365, "s_getNewRepeat");
    e.eVar8 = e.prop8;
    e.eVar31 = e.pageName;
    e.eVar11 = e.transactionID;
    e.eVar13 = e.crossVisitParticipation(e.campaign, "s_ev13", "30", "6", ">", "purchase");
    if (window.loginData && window.loginData.loginName) {
        if (window.loginData.loginName != "") {
            e.eVar14 = window.loginData.loginId
        } else {
            e.eVar14 = ""
        }
    } else {
        e.eVar14 = ""
    }
    e.setupFormAnalysis()
}

s.doPlugins = s_doPlugins;
s.handlePPVevents = new Function("", "" + "if(!s.getPPVid)return;var dh=Math.max(Math.max(s.d.body.scrollHeigh" + "t,s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight," + "s.d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s." + "d.documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documen" + "tElement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||" + "(s.wd.document.documentElement.scrollTop||s.wd.document.body.scroll" + "Top),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('s_pp" + "v'),a=(c.indexOf(',')>-1)?c.split(',',4):[],id=(a.length>0)?(a[0]):" + "escape(s.getPPVid),cv=(a.length>1)?parseInt(a[1]):(0),p0=(a.length>" + "2)?parseInt(a[2]):(pv),cy=(a.length>3)?parseInt(a[3]):(0),cn=(pv>0)" + "?(id+','+((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?vh:cy)):'';s.c_w('s_pp" + "v',cn);");
s.getPercentPageViewed = new Function("pid", "" + "pid=pid?pid:'-';var s=this,ist=!s.getPPVid?true:false;if(typeof(s.l" + "inkType)!='undefined'&&s.linkType!='e')return'';var v=s.c_r('s_ppv'" + "),a=(v.indexOf(',')>-1)?v.split(',',4):[];if(a.length<4){for(var i=" + "3;i>0;i--){a[i]=(i<a.length)?(a[i-1]):('');}a[0]='';}a[0]=unescape(" + "a[0]);s.getPPVpid=pid;s.c_w('s_ppv',escape(pid));if(ist){s.getPPVid" + "=(pid)?(pid):(s.pageName?s.pageName:document.location.href);s.c_w('" + "s_ppv',escape(s.getPPVid));if(s.wd.addEventListener){s.wd.addEventL" + "istener('load',s.handlePPVevents,false);s.wd.addEventListener('scro" + "ll',s.handlePPVevents,false);s.wd.addEventListener('resize',s.handl" + "ePPVevents,false);}else if(s.wd.attachEvent){s.wd.attachEvent('onlo" + "ad',s.handlePPVevents);s.wd.attachEvent('onscroll',s.handlePPVevent" + "s);s.wd.attachEvent('onresize',s.handlePPVevents);}}return(pid!='-'" + ")?(a):(a[1]);");
s.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
s.getQueryParam = new Function("p", "d", "u", "" + "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati" + "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p" + ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-" + "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i=" + "=p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "" + "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v" + "=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", "" + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." + "epa(v)}return ''");
s.getValOnce = new Function("v", "c", "e", "" + "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime(" + ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
s.getTimeParting = new Function("t", "z", "" + "var s=this,cy;dc=new Date('1/1/2000');" + "if(dc.getDay()!=6||dc.getMonth()!=0){return'Data Not Available'}" + "else{;z=parseFloat(z);var dsts=new Date(s.dstStart);" + "var dste=new Date(s.dstEnd);fl=dste;cd=new Date();if(cd>dsts&&cd<fl)" + "{z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneOffset()*60000);" + "tz=new Date(utc + (3600000*z));thisy=tz.getFullYear();" + "var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'," + "'Saturday'];if(thisy!=s.currentYear){return'Data Not Available'}else{;" + "thish=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();" + "var dow=days[thisd];var ap='AM';var dt='Weekday';var mint='00';" + "if(thismin>30){mint='30'}if(thish>=12){ap='PM';thish=thish-12};" + "if (thish==0){thish=12};if(thisd==6||thisd==0){dt='Weekend'};" + "var timestring=thish+':'+mint+ap;if(t=='h'){return timestring}" + "if(t=='d'){return dow};if(t=='w'){return dt}}};");
s.setupFormAnalysis = new Function("" + "var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s." + "wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even" + "tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''" + ",'','')}");
s.sendFormEvent = new Function("t", "pn", "fn", "en", "" + "var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='" + "s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s.faol = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd." + "event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng" + "th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name" + ";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);" + "if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='" + "No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element" + "s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on" + "mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin" + "g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd" + "=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s" + ".wd.onunload;s.wd.onunload=s.fasl;}return r;");
s.faos = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v" + "u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru" + "e;");
s.fasl = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag" + "eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path" + "name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]=" + "'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]" + "='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]" + "!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV" + "ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars=" + "ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt" + "e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'" + ",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s" + ".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f." + "vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;s.tl(true,'o','Form A" + "nalysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f." + "ul(e):true;");
s.fam = new Function("e", "" + "var s=s_c_il[" + s._in + "],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas" + "tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this." + "form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e." + "which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW" + "N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM" + "AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e" + "n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1" + "){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va[" + "1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s" + "_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak" + "d(e);");
s.ee = new Function("e", "n", "" + "return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s.fage = new Function("e", "a", "" + "var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");
s.getAndPersistValue = new Function("v", "c", "e", "" + "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if(" + "v)s.c_w(c,v,e?a:0);return s.c_r(c);");
s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");
s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "" + "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var" + " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l" + "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i" + "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(" + "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()" + ";if(c&&c!='')arry=eval(c);var e=new Date();e.setFullYear(e.getFullY" + "ear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[ar" + "ry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new" + " Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;var " + "td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.roun" + "d((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(arr" + "y[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{deli" + "m:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join" + "(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");
s.apl = new Function("l", "v", "d", "u", "" + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a." + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" + "e()));}}if(!m)l=l?l+d+v:v;return l");
s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.join = new Function("v", "p", "" + "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" + ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" + ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" + "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
s.visitorNamespace = "gome";
s.trackingServer = "gome.122.2o7.net";
var s_code = "", s_objectID;

function s_gi(e, s, i) {
    var t = 's.version=\'H.23.3\';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function(\'var e;try{console.log("\'+s.rep(s.rep(m,"\\n","\\\\n"),"' + '\\"","\\\\\\"")+\'");}catch(e){}\');tcf()};s.cls=function(x,c){var i,y=\'\';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur' + "n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p" + "<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU" + "pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h" + ".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('" + "%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)" + "{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri" + "ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a" + "=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var" + " s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde" + "fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';" + "s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa" + "rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a" + "pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd" + "(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie" + "=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s." + "_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(" + "x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return " + "r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs" + "oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi" + "s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet" + "('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun" + "ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje" + "ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p" + "=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s." + "d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window." + "s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload" + "=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if(s.debugTrackin" + "g){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.na" + "me))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){va" + "r s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s" + ".pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.su" + "bstring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,s" + "earch_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+'," + "')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs" + "='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v) {if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)){nfm=0;if(nf" + "l)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(n" + "ke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='ret" + "rieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss" + ")){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}}if(qs!='')qs+='&.'+k" + "}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrac" + "kVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+f" + "e+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(" + "v&&(!fv||fv.indexOf(k)>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';v=s.fl(v,255)}" + "else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else i" + "f(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else i" + "f(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel" + "')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q" + "='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';" + "else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='ligh" + "tStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q" + "='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else " + "if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('" + "?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;" + "return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&l" + "ft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Func" + "tion('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if(s.d&&s.d.all&&" + 's.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function("s","var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}");tcf(s);s.eo=0\');' + "s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o." + "protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=" + "function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.ty" + "pe&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=" + "='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o" + ".value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t" + ",un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return" + " q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t" + ".indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='" + "s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s." + "squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wd" + 'l=new Function(\'e\',\'var s=s_c_il[\'+s._in+\'],r=true,b=s.eh(s.wd,"onload"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?""+o.onclick:"";if((oc.indexOf("' + 's_gs(")<0||oc.indexOf(".s_oc(")>=0)&&oc.indexOf(".tl(")<0)s.eh(o,"onclick",0,s.lc);}return r\');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)' + "s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.vis" + "itorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};" + "s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dy" + "asmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if" + "(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s.un=un;if(!s.oun" + ")s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m" + "_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s'," + "'n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._i" + "n]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=" + 'new Function("s",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\\'s_\\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!="m_"+n)){m._i=f=1;if((""+x).indexOf("function")>=0)x(s);else s.m_m("x",n,x,e)}' + "m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x" + ");u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else i" + "f(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadMod" + "ule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))" + "&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o" + ".l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f" + "2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.o" + "nreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;" + "o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){" + 'k=l[i];v=vo[k];if(v||vo[\'!\'+k]){if(!r&&(k=="contextData"||k=="retrieveLightData")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.leng' + "th;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime" + "()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(" + "!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&" + "&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.ge" + "tHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tf" + "s.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s" + ".isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if" + "(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerH" + "eight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&" + "&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b." + "addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;p" + "n++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb)" + ";s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer" + "=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.paren" + "tElement?o.parentElement:o.parentNode;if(!o)return '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';if((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf(\".tl(\")>=0)r" + "eturn ''}if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l))q+='&pe=lnk_'+(t=='d'||" + "t=='e'?s.ape(t):'o')+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1" + ";i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';s.sampled=s.vs(sed);if(trk){if(s" + ".sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs" + ");}else{s.dl(vo);}if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};" + "s.trackLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncre" + "mentBy=i;s.t(vo)};s.jsLoaded=function(){var s=this,x;if(s.lmq)for(i=0;i<s.lmq.length;i++){x=s.lmq[i];s.loadModule(x.n,x.u,x.d)}if(s.onLoad)s.onLoad(s);if(s.tq)for(i=0;i<s.tq.length;i++)s.t(s.tq[i])" + "};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navi" + "gator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='" + "Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substrin" + "g(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(St" + "ring.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visitorMigrationKey,visitorMigrationServer,vis" + "itorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='charSet,visitorNamespace,co" + "okieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,z" + "ip,events,events2,products,linkName,linkType,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';var n;for(n=1;n<=75;n++){s" + ".vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,color" + "Depth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerS" + "ecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks," + "trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';" + "s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\",1,1).co(o)};s.wd.s_gs=function(un){s_gi(u" + "n,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
        n = window, r = n.s_c_il, a = navigator, f = a.userAgent, o = a.appVersion, l = o.indexOf("MSIE "),
        c = f.indexOf("Netscape6/"), u, v, d, p;
    if (e) {
        e = e.toLowerCase();
        if (r) {
            for (v = 0; v < r.length; v++) {
                p = r[v];
                d = p._c;
                if ((!d || d == "s_c" || d == "s_l") && (p.oun == e || p.fs && p.sa && p.fs(p.oun, e))) {
                    if (p.sa) {
                        p.sa(e)
                    }
                    if (d == "s_c") {
                        return p
                    }
                } else {
                    p = 0
                }
            }
        }
    }
    n.s_an = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    n.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    n.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    n.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    n.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d" + "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(" + "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    n.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    n.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
    n.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    t = s_d(t);
    if (l > 0) {
        u = parseInt(v = o.substring(l + 5));
        if (u > 3) {
            u = parseFloat(v)
        }
    } else {
        if (c > 0) {
            u = parseFloat(f.substring(c + 10))
        } else {
            u = parseFloat(o)
        }
    }
    if (u < 5 || o.indexOf("Opera") >= 0 || f.indexOf("Opera") >= 0) {
        t = s_ft(t)
    }
    if (!p) {
        p = new Object;
        if (!n.s_c_in) {
            n.s_c_il = new Array;
            n.s_c_in = 0
        }
        p._il = n.s_c_il;
        p._in = n.s_c_in;
        p._il[p._in] = p;
        n.s_c_in++
    }
    p._c = "s_c";
    new Function("s", "un", "pg", "ss", t)(p, e, s, i);
    return p
}

(function (t) {
    var a = {
        pre: "上一页", next: "下一页", nav: function (t, a) {
            var s = "";
            if (a <= 1 || t > a) {
                s = this.pager(1, 1)
            } else {
                s += t == 1 ? this.showPre(0) : this.showPre(1, t);
                if (a > 6) {
                    var e = 1;
                    if (t >= 5 && t <= a) {
                        s += t == 1 ? this.numStatusHTML(0, 1) : this.numStatusHTML(1, 1)
                    } else {
                        for (var n = 1; n < 4; n++) {
                            s += t == n ? this.numStatusHTML(0, n) : this.numStatusHTML(1, n)
                        }
                    }
                    s += t >= 5 ? "<span class='placeholder'></span>" : "";
                    e = t - 2;
                    if (e >= 3 && e < a - 2) s += t == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                    e = t - 1;
                    if (e > 3 && e < a - 2) s += t == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                    e = t;
                    if (e > 3 && e < a - 2) s += t == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                    e = t + 1;
                    if (e > 3 && e < a - 2) s += t == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                    e = t + 2;
                    if (e > 3 && e < a - 2) s += t == e ? this.numStatusHTML(0, e) : this.numStatusHTML(1, e);
                    s += t <= a - 4 ? "<span class='placeholder'></span>" : "";
                    if (t <= a - 4) {
                        s += t == a ? this.numStatusHTML(0, a) : this.numStatusHTML(1, a)
                    } else {
                        for (var n = a - 2; n <= a; n++) {
                            s += t == n ? this.numStatusHTML(0, n) : this.numStatusHTML(1, n)
                        }
                    }
                } else {
                    for (var n = 1; n <= a; n++) {
                        s += t == n ? this.numStatusHTML(0, n) : this.numStatusHTML(1, n)
                    }
                }
                s += t == a ? this.showNext(0) : this.showNext(1, t)
            }
            return s
        }, pager: function (t, a) {
            var s = "";
            if (a <= 1) {
                this.p = t;
                this.pn = a;
                s = this.showPre(0) + this.numStatusHTML(0, t) + this.showNext(0)
            }
            return s
        }, go: function (t, a) {
            var s = this.nav(t, a) + this.btnHTML(t, a);
            return s
        }, numStatusHTML: function (t, a) {
            return t == 0 ? "<span class='cur'>" + a + "</span>" : "<a href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + a + ");return false;'>" + a + "</a>"
        }, showPre: function (t, a) {
            var s = "<a class='prev disable' href='javascript:void(0);'>&nbsp;" + this.pre + "<s class='icon-prev'></s><i></i></a>";
            var e = "<a class='prev' href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + (a - 1) + ");return false;'>&nbsp;" + this.pre + "<s class='icon-prev'></s><i></i></a>";
            return t == 0 ? s : e
        }, showNext: function (t, a) {
            var s = "<a class='next disable' href='javascript:void(0);'>" + this.next + "<s class='icon-next'></s><i></i></a>";
            var e = "<a class='next' href='javascript:void(0);' onclick='javascript:doPageNumSearch(" + (a + 1) + ");return false;'>" + this.next + "<s class='icon-next'></s><i></i></a>";
            return t == 0 ? s : e
        }, btnHTML: function (t, a) {
            var s = "<label for='pagenum' class='txt-wrap'>到<input type='text' id='pNum' class='txt' bNum='" + a + "' value='" + t + "'>页</label>" + "<a href='javascript:void(0)' zdx='nBtn' class='btn'>确定</a>";
            return s
        }
    };
    t.fn.extend({
        gPager: function (t) {
            this.ucPager(t)
        }, ucPager: function (s) {
            var e = t.extend({
                pageClass: "pager",
                currentPage: 1,
                totalPage: 0,
                pageSize: 15,
                clickCallback: function () {
                }
            }, s);
            return this.each(function () {
                var s = t(this);
                if (!s.hasClass(e.pageClass)) {
                    s.addClass(e.pageClass)
                }
                var n = function () {
                    e.clickCallback(e.currentPage)
                };
                s.html(a.go(e.currentPage, e.totalPage));
                window.doPageNumSearch = function (t) {
                    e.currentPage = t.toString();
                    n()
                };
                window.doNextPageNum = function (t) {
                    if (e.currentPage == e.totalPage) {
                        e.currentPage--
                    } else {
                        e.currentPage++
                    }
                    doPageNumSearch(e.currentPage)
                };
                var i = t("#pNum", s);
                i.on("keyup", function () {
                    var a = t(this).val(), s = /^\d+$/gi, e = /\d+/gi;
                    if (!s.test(a)) {
                        t(this).val(a.match(e) ? a.match(e)[0] : "")
                    }
                });
                t(".btn", s).bind("click", function () {
                    var a = t.trim(i.val());
                    if (a < 1) {
                        i.val(1);
                        e.currentPage = 1 + ""
                    } else if (a > e.totalPage) {
                        i.val(e.totalPage);
                        e.currentPage = e.totalPage.toString()
                    } else {
                        i.val(a);
                        e.currentPage = a
                    }
                    n()
                })
            })
        }
    })
})(jQuery);
$(document).ready(function () {
    var f = $("#fix_fl").height();
    var e = $(".ymin_nr > .ynr_fr").height();
    if (f > e) {
        $("#fix_fl").removeClass("fix_fl");
        $("#fix_fl").removeClass("ab").removeAttr("style");
        $(".ymin_nr > .ynr_fl").css({height: f})
    }
    $(window).scroll(function () {
        var e = $(window).scrollTop();
        var i = $(".ynr_fl")[0].offsetTop;
        var r = $("body").height();
        var s = parseInt($(".ymain").css("padding-top"));
        var a = parseInt($(".ymain").css("padding-bottom"));
        var l = $("#gome-foot").height() + $("#gome-help").height();
        var o = r - f - l - s - a;
        var t = o - i;
        if (e > i && e < o) {
            $("#fix_fl").addClass("fix_fl");
            $("#fix_fl").removeClass("ab").removeAttr("style")
        } else if (e > o) {
            $("#fix_fl").removeClass("fix_fl");
            $("#fix_fl").addClass("ab").css({top: t})
        }
        if (e < i) {
            $("#fix_fl").removeClass("fix_fl")
        }
    })
});
var GomeShare_PageUrl = location.href;

function GomeShare_CBG(e, a, s) {
    var i = document.documentElement.clientWidth;
    var o = document.documentElement.clientHeight;
    var t = document.getElementById(e);
    if (!t) {
        var r = document.createElement("div");
        r.id = e;
        r.className = a;
        r.style.width = i + "px";
        r.style.height = Math.max(document.body.clientHeight, o) + "px";
        r.style.zIndex = s;
        r.style.display = "none";
        document.body.appendChild(r)
    } else {
        t.style.width = i + "px";
        t.style.height = Math.max(document.body.clientHeight, o) + "px";
        t.style.zIndex = s;
        t.style.display = "none"
    }
    $("#" + e).fadeIn("fast")
}

function GomeShare_CDiv(e, a, s, i, o, t) {
    if (!document.getElementById(e)) {
        var r = document.createElement("div");
        if (t != 0) {
            r.innerHTML = t
        }
        if (e != 0) {
            r.id = e
        }
        if (a != 0) {
            r.className = a
        }
        if (s != 0) {
            r.zIndex = s
        }
        if (i != 0) {
            r.style.width = i + "px"
        }
        if (o != 0) {
            r.style.height = o + "px"
        }
        document.body.appendChild(r)
    }
    $("#" + e).fadeIn("slowly")
}

function GomeShare_Fix(e, a, s, i, o) {
    $("#" + e).css("position", "fixed");
    if (a == 1) {
        $("#" + e).css("left", ($(window).width() - $("#" + e).width()) / 2 + "px")
    }
    if (s == 1) {
        $("#" + e).css("top", ($(window).height() - $("#" + e).height()) / 2 - 0 + "px")
    }
    if (o != "") {
        $("#" + e).css("left", o + "px")
    }
    if (i != "") {
        $("#" + e).css("top", i + "px")
    }
}

function GomeShare_QrCode(e, a, s, i) {
    $(e).html("");
    var o = "canvas";
    if (navigator.userAgent.indexOf("MSIE") >= 0) {
        o = "table"
    }
    $(e).qrcode({
        render: o,
        width: a,
        height: s,
        text: i,
        correctLevel: QRErrorCorrectLevel.L,
        background: "#F7F7F7",
        foreground: "#333333"
    })
}

function GomeShare_Frame(e, a, s, i, o) {
    GomeShare_CBG("gomeshare_plbg", "gomeshare_bg", 999999993);
    GomeShare_CDiv("gomeshare_pl", "", 0, a, s, "<div class=gomeshare_close onclick=GomeShare_CloseL()></div><iframe src=" + e + ' style="width:' + a + "px;height:" + s + "px;marginwidth:" + o + "px;marginheight:" + i + 'px;" frameborder=0 scrolling=no></iframe>');
    GomeShare_Fix("gomeshare_pl", 1, 1, "", "")
}

function GomeShare_LoginFavicon(e, a, s, i) {
    GomeShare_CloseL();
    if (a == "1") {
        $("#gomeshare_" + e).replaceWith("<div id=gomeshare_" + e + " class=gomeshare_back onclick=GomeShare_On(this)><i></i></div>");
        $("#gomeshare_bx_" + e).replaceWith("<div id=gomeshare_bx_" + e + ' class=gomeshare_icon_on onclick=GomeShare_IconSelect($(this),"gomeshare_icon_on","gomeshare_icon_ot")></div>')
    } else {
        GomeShare_Shake("#gomeshare_" + e, 50, 5, 100)
    }
}

function GomeOneShare_DealIcon(e, a, s, i) {
    $(".o-icons ." + e).removeAttr("onclick");
    $(".o-icons ." + e).attr("class", e + " " + e + "_o");
    $(".o-icons ." + e + "_o span").replaceWith('<span id="ts_' + e + '">已绑定</span>');
    $(".o-icons ." + e + "_o span").attr("class", "o-icons-checked");
    $(".tshare .share_box .n-onebtn-share").css("display", "none")
}

function GomeShare_OAuthIcon(e, a, s, i, o) {
    GomeShare_CloseL();
    if (a == "1") {
        GomeOneShare_DealIcon(e, "", "", "")
    }
}

function GomeShare_On(e) {
    if ($(e).attr("class") == "gomeshare_back") {
        $(e).attr("class", "gomeshare_back_gray")
    } else {
        $(e).attr("class", "gomeshare_back")
    }
}

function GomeShare_CloseL() {
    $("#gomeshare_plbg").fadeOut("fast", function () {
        $("#gomeshare_plbg").remove()
    });
    $("#gomeshare_pl").fadeOut("fast", function () {
        $("#gomeshare_pl").remove()
    })
}

function GomeShare_SetDomain() {
    document.domain = "gome.com.cn"
}

var u_qq = "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=100271288&redirect_uri=http://s.gome.com.cn/OAuth_qq/Redirect&scope=get_user_info,add_t,add_pic_t&state=QC";
var a_qq = 'GomeShare_Frame("' + u_qq + '",460,600,0,0);GomeShare_SetDomain()';
var u_weibo = "https://api.weibo.com/oauth2/authorize?client_id=2537522211&redirect_uri=http://s.gome.com.cn/OAuth_weibo/Redirect";
var a_weibo = 'GomeShare_Frame("' + u_weibo + '",700,360,0,0);GomeShare_SetDomain()';
var u_renren = "https://graph.renren.com/oauth/authorize?client_id=97210651d69b43dbb030e209b177164e&response_type=code&scope=publish_blog+publish_feed+publish_share&display=page&redirect_uri=http://s.gome.com.cn/OAuth_renren/Redirect";
var a_renren = 'GomeShare_Frame("' + u_renren + '",666,400,0,0);GomeShare_SetDomain()';
var u_douban = "https://www.douban.com/service/auth2/auth?client_id=0fc273a29cdab7fb2f475ae7d69027f1&response_type=code&scope=commodity_basic_w,community_basic_note,shuo_basic_w&redirect_uri=http://s.gome.com.cn/OAuth_douban/Redirect";
var a_douban = 'GomeShare_Frame("' + u_douban + '",360,430,0,0);GomeShare_SetDomain()';
var FxbD = "";
FxbD += '<div class="tshare">';
FxbD += '<div class="hd"><h1>分享给小伙伴,有人购买即得佣金</h1><a class="tclose" href="javascript:GomeShare_Close()"></a></div>';
FxbD += '<div class="cd clearfix">';
FxbD += '<div class="cd_l">';
FxbD += '<div class="banner"><a id="tshare_ps1" ><img src="http://s.gome.com.cn/images/face.gif" class="cd_img"></a></div>';
FxbD += '<div class="FQA"></div>';
FxbD += "</div>";
FxbD += '<div class="cd_r">';
var Fxb_RB = "";
Fxb_RB += "</div>";
Fxb_RB += "</div>";
Fxb_RB += '<div id="QRCode" class="QRCode">';
Fxb_RB += '<div class="QRCode_tit">';
Fxb_RB += "<p>分享到微信朋友圈</p>";
Fxb_RB += '<a href="javascript:" class="QRCode_close" onclick=$("#QRCode").fadeOut()></a>';
Fxb_RB += "</div>";
Fxb_RB += '<div id="tshare_qrcode"></div>';
Fxb_RB += '<p class="tips">打开微信，点击底部的“发现”，使用“扫一扫”即可将网页分享至朋友圈。</p>';
Fxb_RB += "</div>";
Fxb_RB += '<div id="SNS_tips" class="SNS_tips">';
Fxb_RB += '<a href="javascript:" class="QRCode_close" onclick=$("#SNS_tips").fadeOut();></a>';
Fxb_RB += '<p><i class="tips_icon tips_icon1"></i>您还没有绑定SNS平台账号哦~</p>';
Fxb_RB += "</div>";
Fxb_RB += "</div>";
var FxbE = "";
FxbE += '<div class="success"><p class="tips_text"><i class="tips_icon"></i>您已成功一键分享，坐等收益吧！</p></div>';
FxbE += '<div class="success_c"><a class="red_btn" href="javascript:GomeShare_Close()">关闭</a></div>';
var _GmFxb = _GmFxb || [];
_GmFxb.FxbDiv = function (e, a, s, i, o, t, r, c, n, l, h, d, _, m) {
    $("body").append("<link href='//css.gomein.net.cn/channels/cssshare/scommon.css' rel='stylesheet' type='text/css'>");
    $("body").append("<script src='//js.gomein.net.cn/channels/jsshare/jq.qrcode.js'></script>");
    if (a == "") {
        a = "http://www.gome.com.cn"
    }
    a = unescape(a);
    var p = a.replace(/=/g, "////");
    p = p.replace(/&/g, "||||");
    p = escape(p);
    a = escape(a);
    if (e == 1) {
        GomeShare_CBG("gomeshare_bg", "gomeshare_bg", 999999991)
    }
    GomeShare_CDiv("tshare_div", "", 0, 830, 433, "");
    if (s == "") {
        s = $("title").text()
    }
    var v = "", b = "";
    if (i != "") {
        for (var f = 0; f < i.split(",").length; f++) {
            if (f < 4 && i.split(",")[f] != "") {
                v += '<div class="show_item"><img src="' + i.split(",")[f] + '"><i></i></div>'
            }
        }
        b = i
    } else if (o != "") {
        $(o).find("img").each(function (e) {
            if (e < 4) {
                v += '<div class="show_item"><img src="' + $(this).attr("src") + '"><i></i></div>'
            }
            if (e == 0) {
                b = $(this).attr("src")
            }
        })
    } else {
        $("img").each(function (e) {
            if (e < 4) {
                v += '<div class="show_item" ><img src="' + $(this).attr("src") + '"><i></i></div>'
            }
            if (e == 0) {
                b = $(this).attr("src")
            }
        })
    }
    b = b.split(",")[0];
    var u = "";
    u += '<div class="login_btn"><p>立即登录去分享赚钱~</p><a class="btn" href="https://login.gome.com.cn/login" target=_blank>登  录</a></div>';
    u += '<div class="share_box clearfix">';
    u += '<div class="not_login_tips">您还可以点击图标，直接分享给你的小伙伴！</div>';
    u += '<div class="s-icons-box clearfix">';
    u += '<div class="s-icons">';
    u += '<span class="weixin weixin_c" onclick=$("#QRCode").fadeIn()></span>';
    $.ajax({
        async: false,
        url: "//s.gome.com.cn/Fxb_OAuth_Ajax?u=" + p + "&d=" + document.domain + "&rnd=" + Math.round(Math.random() * 1e4),
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        success: function (e) {
            var a = "";
            a += "<p>说说这个消息怎么样？</p>";
            a += '<div class="text_box">';
            a += '<textarea id="share-contents" class="share-contents"></textarea>';
            a += '<div id="test_tips" class="word_num"></div>';
            a += "</div>";
            a += '<div class="share_box clearfix">';
            a += '<div class="s-icons-box clearfix">';
            a += '<div class="s-icons">';
            a += '<span class="weixin_c" onclick=$("#QRCode").fadeIn()></span>';
            a += '<a href="http://service.weibo.com/share/share.php?url=' + e.l + "&title=" + encodeURI(s) + '&appkey=&searchPic=true" target="_blank"><span class="weibo weibo_c"></span></a>';
            a += '<a href="http://widget.renren.com/dialog/share?resourceUrl=' + e.l + "&srcUrl=" + e.l + "&title=" + encodeURI(s) + "&description=" + encodeURI(s) + '" target="_blank"><span class="renren renren_c"></span></a>';
            var i = "";
            i += '<a href="javascript:" class="share_copy_link">复制链接</a>';
            i += "</div>";
            i += '<div class="onebtn_share" >';
            i += '<div class="o_share_btn">';
            i += '<a class="o_share_f event_alert" href="javascript:"></a>';
            i += '<a class="o_share_a event_alert" href="javascript:"></a>';
            i += "</div>";
            i += '<div id="o-icons-box">';
            i += '<div class="o-icons">';
            i += '<a class="weibo_o" href="javascript:" onclick=' + a_weibo + '><label class="xl_weibo_b"></label><span>绑定</span></a>';
            i += '<a class="qq_o" href="javascript:" onclick=' + a_qq + '><label class="tx_weibo_b"></label><span>绑定</span></a>';
            i += '<a class="renren_o" href="javascript:" onclick=' + a_renren + '><label class="renren_b"></label><span>绑定</span></a>';
            i += "</div>";
            i += "</div>";
            i += "</div>";
            i += "</div>";
            i += '<div class="btn_cont">';
            i += '<p id="tshare_ps2"></p>';
            i += "</div>";
            i += "</div>";
            var o = "";
            o += '<a href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + escape(e.l) + "&title=&desc=" + encodeURI(s) + '&summary=&site=" target=_blank><span class="qzone qzone_c"></span></a>';
            o += '<a href="http://connect.qq.com/widget/shareqq/index.html?url=' + e.l + "&desc=&title=" + encodeURI("干货，净是干货") + "&summary=" + encodeURI(s) + "&pics=" + b + "&site=" + encodeURI("国美分享宝") + '" target=_blank><span class="sohu sohu_c"></span></a>';
            o += '<a href="http://mail.qq.com/cgi-bin/qm_share?url=' + e.l + "&to=qqmail&desc=" + encodeURI(s) + "&summary=&title=" + encodeURI("干货，净是干货，分享一个不错的东西") + "&site=" + encodeURI("查看详情") + "&pics=" + b + '" target=_blank><span class="kaixin kaixin_c"></span></a>';
            o += '<a href="http://tieba.baidu.com/f/commit/share/openShareApi?url=' + e.l + "&title=" + encodeURI(s) + "&desc=" + encodeURI(s) + '&comment=" target=_blank><span class="baidu baidu_c"></span></a>';
            var f = "";
            f += '<a href="http://service.weibo.com/share/share.php?url=' + e.l + "&title=" + encodeURI(s) + '&appkey=&searchPic=true" target=_blank><span class="weibo weibo_c"></span></a>';
            f += '<a href="http://widget.renren.com/dialog/share?resourceUrl=' + e.l + "&srcUrl=" + e.l + "&title=" + encodeURI(s) + "&description=" + encodeURI(s) + '" target=_blank><span class="renren renren_c"></span></a>';
            f += '<a href="javascript:" class="share_copy_link">复制链接</a>';
            f += "</div>";
            f += "</div></div>";
            GomeShare_Fix("tshare_div", 1, 1, t, "");
            $("#tshare_div").css("display", "block");
            if (e.u == 0) {
                $("#tshare_div").html(FxbD + u + o + f + Fxb_RB);
                $(".share_copy_link").attr("href", 'javascript:GomeShare_CopyNoIE("' + e.l + '",0,0)')
            } else {
                $("#tshare_div").html(FxbD + a + o + i + Fxb_RB);
                $("#share-contents").val(s);
                $(".show_box").html(v);
                $(".show_item img").each(function () {
                    ImgInAll($(this), $(this).css("width").replace("px", ""), $(this).css("height").replace("px", ""), 78, 78, "")
                });
                $(".show_box div").each(function (e) {
                    if (e == 0) {
                        $(this).attr("class", "show_item redbd")
                    }
                });
                $(".show_box div").click(function () {
                    $(this).attr("class", "show_item redbd");
                    $(this).siblings().attr("class", "show_item")
                });
                $(".o_share_f").click(function () {
                    GomeShare_Pre(p, null, null, null, r, c, n, l, h, d, _, m)
                });
                $(".share_copy_link").attr("href", 'javascript:GomeShare_CopyNoIE("' + e.l + '",0,0)');
                for (var g = 0; g < e.o.length; g++) {
                    GomeOneShare_DealIcon(e.o[g], "", "", "")
                }
                $("body,html").click(function (e) {
                    var a = $(e.target);
                    if (a.is(".event_alert")) {
                        $("#o-icons-box").show()
                    } else {
                        $("#o-icons-box").hide()
                    }
                })
            }
            if (e.ps1) {
                $("#tshare_ps1 img").attr("src", e.ps1.p)
            }
            if (e.ps2) {
                $("#tshare_ps2").html('<a href="' + e.ps2.l + '" target=_blank>' + e.ps2.t + "</a>")
            }
            $(".weixin_c").click(function () {
                GomeShare_QrCode("#tshare_qrcode", 150, 150, e.l)
            })
        }
    })
};

function GomeShare_FxbDiv(e, a, s, i, o, t, r, c, n, l, h, d, _, m) {
    _GmFxb.FxbDiv(e, a, s, i, o, t, r, c, n, l, h, d, _, m)
}

function GomeShare_Pre(e, a, s, i, o, t, r, c, n, l, h, d) {
    var _ = $("#share-contents").val();
    if (_ != "") {
        _ = _.substring(0, 80);
        _ = escape(_)
    } else {
        alert("请填写分享内容");
        return
    }
    var e = escape(e.split("#")[0]);
    var m = new Array("qq", "weibo", "renren", "kaixin", "douban", "yixin"), p = "";
    for (var v = 0; v < m.length; v++) {
        if ($("#ts_" + m[v]).attr("class") == "o-icons-checked") {
            p += "_" + m[v]
        }
    }
    var b = $(".redbd img").attr("src");
    if (b == undefined) {
        b = ""
    } else if (b.indexOf("http") < 0) {
        b = ""
    }
    if (p != "") {
        $(".o_share_f").removeClass("event_alert");
        GomeShare_Sub(_, p, e, b, "", "", "", o, t, r, c, n, l, h, d)
    } else {
        $(".n-onebtn-share").remove();
        $(".tshare .btn_cont").after("<div class='n-onebtn-share'>你还没有绑定SNS平台账号哦，请绑定后再分享</div>");
        for (var v = -1; v > -3; v--) {
            $(".tshare .n-onebtn-share").fadeOut(1500);
            $(".tshare .n-onebtn-share").fadeIn(1500)
        }
        return
    }
}

function GomeShare_Sub(e, a, s, i, o, t, r, c, n, l, h, d, _, m, p) {
    $.ajax({
        url: "//s.gome.com.cn/Fxb_Share_Ajax?c=" + e + "&o=" + a + "&u=" + s + "&p=" + i + "&si=" + l + "&a=a&f=1&rnd=" + Math.round(Math.random() * 1e4),
        dataType: "jsonp",
        jsonp: "callback",
        success: function (e) {
            if (e.msg == "success") {
                $(".cd_r").html(FxbE)
            }
        }
    })
}

function GomeShare_Select(e, a, s) {
    $("#gomeshare_text div").click(function () {
        $(this).removeClass();
        $(this).siblings().removeClass();
        $(this).siblings().addClass(e + " " + s);
        $(this).addClass(e + " " + a)
    })
}

function GomeShare_Close() {
    $("#gomeshare_bg").fadeOut("fast", function () {
        $("#gomeshare_bg").remove()
    });
    $("#gomeshare_div").fadeOut("fast", function () {
        $("#gomeshare_div").remove()
    });
    $("#tshare_div").fadeOut("fast", function () {
        $("#tshare_div").remove()
    })
}

function GomeShare_MoveCoin() {
    $("#gomeshare_coin").css("display", "block");
    $("#gomeshare_coin").animate({top: "360px"}, 1500).fadeOut()
}

function GomeShare_MoveFavicon(e) {
    $("#gomeshare_" + e).appendTo("#gomeshare_action").fadeOut().fadeIn()
}

function GomeShare_Opener(e, a, s, i, a, o) {
    e = unescape(e);
    var t = (window.screen.availHeight - 30 - i) / 2;
    var r = (window.screen.availWidth - 10 - s) / 2;
    window.open(e, a, "width=" + s + ",height=" + i + ",top=" + t + ",left=" + r + ",toolbar=no,menubar=no,scrollbars=no,status=no,location=no,resizable=no")
}

function GomeShare_CopyNoIE(e, a, s) {
    window.prompt("请手动复制以下链接地址，按Ctrl+C即可复制", e)
}

function GomeShare_IconInit(e, a, s) {
    var i = "", o = new Array("qq", "weibo", "renren");
    i += '<div class="gomeshare_icon_ot" id="gomeshare_bx_qq" onclick=' + a_qq + "></div>";
    i += '<div class="gomeshare_icon_ot" id="gomeshare_bx_weibo" onclick=' + a_weibo + "></div>";
    i += '<div class="gomeshare_icon_ot" id="gomeshare_bx_renren" onclick=' + a_renren + "></div>";
    $(e).html(i);
    $.ajax({
        async: false,
        url: "//s.gome.com.cn/Fxb_OAuth_Ajax?rnd=" + Math.round(Math.random() * 1e4),
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        success: function (a) {
            if (a.u == 0) {
                $(e + " > div").removeAttr("onclick");
                var s = "http://s.gome.com.cn/html/GomeLoginBack.html?obj=" + e, s = escape(s);
                $(e + " > div").click(function () {
                    GomeShare_Frame("https://login.gome.com.cn/login?orginURI=" + s, 930, 490, 0, 0)
                })
            } else {
                for (var i = 0; i < a.o.length; i++) {
                    $("#gomeshare_bx_" + a.o[i]).removeAttr("onclick");
                    $("#gomeshare_bx_" + a.o[i]).attr("class", "gomeshare_icon_on");
                    $("#gomeshare_bx_" + a.o[i]).click(function () {
                        GomeShare_IconSelect($(this), "gomeshare_icon_on", "gomeshare_icon_ot")
                    })
                }
            }
        }
    })
}

function GomeShare_IconSelect(e, a, s) {
    if ($(e).attr("class") == a) {
        $(e).attr("class", s)
    } else {
        $(e).attr("class", a)
    }
}

function GomeShare_Shake(e, a, s, i) {
    for (var o = 0; o < s; o++) {
        $(e).animate({top: "-" + a * (1 - o / s) + "px"}, i * (1 - o / s)).animate({top: "0px"}, i * (1 - o / s))
    }
}

function ImgInAll(e, a, s, i, o, t) {
    if (a / s >= i / o) {
        var r = i * s / a;
        $(e).css("width", i + "px");
        $(e).css("margin-top", -(r - o) / 2 + "px")
    } else {
        var c = o * a / s;
        $(e).css("height", o + "px");
        $(e).css("margin-left", -(c - i) / 2 + "px")
    }
}

$(document).ready(function () {
    var e = $(".yin_tm");
    for (var r = 0; r < e.length; r++) {
        var a = $(e[r]).attr("arrid");
        var n = "GomeNews" + a;
        var o = i * 1 + 1;
        var i = t(n);
        if (i != null && i != "") {
            $(".cookie em").eq(r).html(i);
            if (i == 0) {
                $(".cookie").eq(r).css({display: "none"})
            }
        }
    }

    function t(e) {
        var r = document.cookie.split("; ");
        for (var a = 0; a < r.length; a++) {
            var n = r[a].split("=");
            if (n[0] == e) return unescape(n[1])
        }
    }
});
$(document).ready(function () {
    $(".yin_na").find(".left_list").each(function () {
        var e = $(this).find(".Left_cx").height();
        if ($(this).find(".left_more").hasClass("left_ma")) {
            $(this).css("height", e + 30 + "px");
            $(this).attr("height", "110")
        } else {
            $(this).css("height", "30px")
        }
    });
    $(".left_more").on("click", function () {
        if ($(this).hasClass("left_ma")) {
            $(this).removeClass("left_ma");
            $(this).parents(".left_list").stop(true, false).animate({height: 30 + "px"})
        } else {
            $(this).addClass("left_ma");
            var e = $(this).parents(".left_list").find(".Left_cx").height();
            $(this).parents(".left_list").stop(true, false).animate({height: e + 30 + "px"})
        }
    });

    function e() {
        var e = window.location.href;
        if (e.indexOf("=") !== -1) {
            return [e.split("=")[1]]
        }
        var t = e.substring(e.lastIndexOf("/") + 1, e.lastIndexOf(".")) || "";
        return t.split("-")
    }

    var t = window.location.pathname;
    var a;
    var l, i;
    if (t.indexOf("search") > 0) {
        var r = e()[0];
        r = decodeURI(r);
        s(1, r)
    } else {
        if (t.length > 1) {
            l = t.replace(/.html/, "");
            l = l.replace("/", "");
            l = l.split("-");
            if (l.length == 4) {
                t = l[0] + "-" + l[1] + "-";
                a = l.pop()
            } else {
                l.pop();
                t = l.join("-")
            }
        } else {
            l = t
        }
        $("#y_page_in").ucPager({
            currentPage: parseInt(newCurrentPage),
            totalPage: parseInt(newTotalPage),
            pageSize: 20,
            clickCallback: function (e) {
                if (l.length == 1) {
                    window.location.href = newUrl + "3-" + e + ".html"
                } else if (l.length == 4 || l.length == 3) {
                    window.location.href = newUrl + t + e + "-" + a + ".html"
                } else {
                    window.location.href = newUrl + t + "-" + e + ".html"
                }
            }
        })
    }

    function s(e, t) {
        $.ajax({
            type: "POST",
            url: "//qds" + cookieDomain + "/QDS-web/IndexqdsController/query",
            dataType: "jsonp",
            jsonp: "callback",
            jsonpName: "keywordList",
            data: {keyword: t, size: 20, current: e, "json.wrf": "keywordList"},
            success: function (e) {
                var a = $(".ySch_url").val();
                if (e.data.datas.length == "" && e.data.count == 0) {
                    var l = '<span><a href="' + a + '" target="_blank" title="国美快讯">国美快讯</a></span> > 搜索结果';
                    var i = '<div class="ynr_fr fl"><div class="ylo_nr"><p class="yln_tsy"><i class="gm-icon">&#x004A;</i>非常抱歉，没有找到与“<span>' + (e.data.conditions.q || "") + '</span>”相关的快讯</p><p class="yln_cn">建议您：<br/>1.返回<a href="' + a + '" target="_blank" title="国美快讯">国美快讯</a>首页<br/>2.去<a href="http://www.gome.com.cn/" target="_blank" title="国美">国美</a>首页搜索相关产品<br/></p></div></div>';
                    $(".ynr_fr").html(i);
                    $("#sh_dh").html(l)
                } else {
                    var r = e.data.count;
                    var n = "javascript:this.src='" + stageImageServer + "/f2eimage/stage/news/mo_tu.jpg'";
                    e.sh_key = e.data.conditions.q;
                    e.sh_decode_key = e.sh_decode_key;
                    e.mr_imgUrl = n;
                    e.ySch_url = a;
                    sh_list = '<%if(data && data.datas.length > 0){%>                       <% var search_lt = data.datas; %>                       <%for (var i=0; i<search_lt.length; i++){%>                       <li>                         <h2 class="yin_h2">                        <%if(search_lt[i].news_lableid !="" && search_lt[i].news_lableid == 7){%>                        <a href="<%=ySch_url%>1-7-1.html" target="_blank" title="促销" class="yin_agn">促销</a>                        <%}else if (search_lt[i].news_lableid !="" && search_lt[i].news_lableid == 6){%>                        <a href="<%=ySch_url%>1-6-1.html" target="_blank" title="新闻资讯" class="yin_agn">新闻资讯</a>                        <%}else if(search_lt[i].news_lableid !="" && search_lt[i].news_lableid == 8){%>                        <a href="<%=ySch_url%>1-6-1.html" target="_blank" title="公告" class="yin_agn">公告</a>                        <%}else if(search_lt[i].news_lableid !="" && search_lt[i].news_lableid != 7 && search_lt[i].news_lableid != 6 && search_lt[i].news_lableid != 8){%>                        <%}%>                         <a href="<%=ySch_url%><%=search_lt[i].id%>.html" target="_blank" title="<%=search_lt[i].title">                            <%=search_lt[i].title%></a>                         </h2>                         <%if (search_lt[i].abstractimg && search_lt[i].abstractimg!="") {%>                            <p class="yin_img">                            <%if (search_lt[i].title_link && search_lt[i].title_link!=""){%>                                <a href="<%=search_lt[i].title_link %>" target="_blank"><img src="<%=search_lt[i].abstractimg%>" onerror="<%=mr_imgUrl%>"   width="700" height="150" alt="<%=search_lt[i].title>" /></a>                            <%}else{%>                              <img src="<%=search_lt[i].abstractimg%>" onerror="<%=mr_imgUrl%>"   width="700" height="150" alt="<%=search_lt[i].title>" />                            <%}%>                            </p>                            <p class="yin_cont">                            <%if(search_lt[i].abstract_text!=null) {%>                                <%=search_lt[i].abstract_text.substr(0,80)%>...... <a href="<%=ySch_url%><%=search_lt[i].id%>.html" target="_blank" rel="nofollow" title="查看详情">查看详情 ></a>                                <%}%>                            </p>                         <%}else{%>                            <p class="yin_cont"><%if(search_lt[i].abstract_text!=null) {%><%=search_lt[i].abstract_text.substr(0,120)%>......<%}%><a href="<%=ySch_url%><%=search_lt[i].id%>.html" rel="nofollow" target="_blank" title="查看详情">查看详情 ></a>                            </p>                         <%}%>                        <div class="yin_tm"><span  class="bor_no"><%=search_lt[i].publish_time%></span>                        <%if(search_lt[i].news_source && search_lt[i].news_source!=""){%>                            <span>来源：<%=search_lt[i].news_source%></span>                        <%}%>                        <%if(search_lt[i].brwose_quantity!=0) {%>                         <span><%=search_lt[i].brwose_quantity%>浏览 </span></div>                        <%}%>                      </li>                       <%}%>                      <%}%>';
                    var c = e.data.conditions.q;
                    var h = '<span><a href="' + a + '" target="_blank" title="国美快讯">国美快讯</a></span> >搜索结果：一共为您找到<b class="ysh_sl">' + r + '</b>条“<em class="ysc_key">' + t + "</em>”相关资讯";
                    var _ = template.compile(sh_list);
                    var o = _(e);
                    $("#sh_dh").html(h);
                    $(".yin_ul").html(o);
                    $(".yin_ul").textSearch(c);
                    if (r <= 20) {
                        $("#y_page_in").hide()
                    } else {
                        var f = e.data.current;
                        var d = e.data.totalPages;
                        newCurrentPage = f;
                        newTotalPage = d;
                        $("#y_page_in").ucPager({
                            currentPage: parseInt(f),
                            totalPage: parseInt(d) || {},
                            pageSize: 20,
                            clickCallback: function (e) {
                                s(e, c);
                                $("html,body").animate({scrollTop: $("#sh_dh").offset().top}, 0);
                                $(".yfr_div").css({top: 0 + "px"})
                            }
                        })
                    }
                }
            }
        })
    }

    $(".yin_pt").keyup(function (e) {
        var t = $(".yin_pt").attr("value");
        var a = e.which;
        if (a == 13) {
            window.location.href = newUrl + "search?question=" + t
        }
    })
});
(function (e) {
    e.fn.textSearch = function (t, a) {
        var l = {
            divFlag: true,
            divStr: " ",
            markClass: "",
            markColor: "#cc0000",
            nullReport: true,
            callback: function () {
                return false
            }
        };
        var i = e.extend({}, l, a || {}), r;
        if (i.markClass) {
            r = "class='" + i.markClass + "'"
        } else {
            r = "style='color:" + i.markColor + ";'"
        }
        e("span[rel='mark']").each(function () {
            var t = document.createTextNode(e(this).text());
            e(this).replaceWith(e(t))
        });
        e.regTrim = function (e) {
            var t = /[\^\.\\\|\(\)\*\+\-\$\[\]\?]/g;
            var a = {};
            a["^"] = "\\^";
            a["."] = "\\.";
            a["\\"] = "\\\\";
            a["|"] = "\\|";
            a["("] = "\\(";
            a[")"] = "\\)";
            a["*"] = "\\*";
            a["+"] = "\\+";
            a["-"] = "\\-";
            a["$"] = "$";
            a["["] = "\\[";
            a["]"] = "\\]";
            a["?"] = "\\?";
            e = e.replace(t, function (e) {
                return a[e]
            });
            return e
        };
        e(this).each(function () {
            var a = e(this);
            t = e.trim(t);
            if (t === "") {
                return false
            } else {
                var l = [];
                if (i.divFlag) {
                    l = t.split(i.divStr)
                } else {
                    l.push(t)
                }
            }
            var s = a.html();
            s = s.replace(/<!--(?:.*)\-->/g, "");
            var n = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
            var c = s.match(n), h = 0;
            e.each(c, function (t, a) {
                if (!/<(?:.|\s)*?>/.test(a)) {
                    e.each(l, function (t, l) {
                        if (l === "") {
                            return
                        }
                        var i = new RegExp(e.regTrim(l), "g");
                        if (i.test(a)) {
                            a = a.replace(i, "♂" + l + "♀");
                            h = 1
                        }
                    });
                    a = a.replace(/♂/g, "<span rel='mark' " + r + ">").replace(/♀/g, "</span>");
                    c[t] = a
                }
            });
            var _ = c.join("");
            e(this).html(_);
            if (h === 0 && i.nullReport) {
                return false
            }
            i.callback()
        })
    }
})(jQuery);
$(function () {
    var c = $(".shareGold");
    c.click(function () {
        _GmFxb.FxbDiv(1, location.href, "", "search_p", "", "", "", "", "", "", "", "", "", "")
    })
});