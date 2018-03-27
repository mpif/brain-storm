/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!
function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    }: b(a)
} ("undefined" != typeof window ? window: this,
function(a, b) {
    "use strict";
    var c = [],
    d = a.document,
    e = Object.getPrototypeOf,
    f = c.slice,
    g = c.concat,
    h = c.push,
    i = c.indexOf,
    j = {},
    k = j.toString,
    l = j.hasOwnProperty,
    m = l.toString,
    n = m.call(Object),
    o = {};
    function p(a, b) {
        b = b || d;
        var c = b.createElement("script");
        c.text = a,
        b.head.appendChild(c).parentNode.removeChild(c)
    }
    var q = "3.1.1",
    r = function(a, b) {
        return new r.fn.init(a, b)
    },
    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    t = /^-ms-/,
    u = /-([a-z])/g,
    v = function(a, b) {
        return b.toUpperCase()
    };
    r.fn = r.prototype = {
        jquery: q,
        constructor: r,
        length: 0,
        toArray: function() {
            return f.call(this)
        },
        get: function(a) {
            return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a]
        },
        pushStack: function(a) {
            var b = r.merge(this.constructor(), a);
            return b.prevObject = this,
            b
        },
        each: function(a) {
            return r.each(this, a)
        },
        map: function(a) {
            return this.pushStack(r.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(f.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(a) {
            var b = this.length,
            c = +a + (a < 0 ? b: 0);
            return this.pushStack(c >= 0 && c < b ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: h,
        sort: c.sort,
        splice: c.splice
    },
    r.extend = r.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {},
        h++), "object" == typeof g || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) if (null != (a = arguments[h])) for (b in a) c = g[b],
        d = a[b],
        g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c: []) : f = c && r.isPlainObject(c) ? c: {},
        g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    },
    r.extend({
        expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === r.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            var b = r.type(a);
            return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
        },
        isPlainObject: function(a) {
            var b, c;
            return ! (!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n))
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return ! 1;
            return ! 0
        },
        type: function(a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? j[k.call(a)] || "object": typeof a
        },
        globalEval: function(a) {
            p(a)
        },
        camelCase: function(a) {
            return a.replace(t, "ms-").replace(u, v)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (w(a)) {
                for (c = a.length; d < c; d++) if (b.call(a[d], d, a[d]) === !1) break
            } else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "": (a + "").replace(s, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : i.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length,
            d = 0,
            e = a.length; d < c; d++) a[e++] = b[d];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) d = !b(a[f], f),
            d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, f = 0,
            h = [];
            if (w(a)) for (d = a.length; f < d; f++) e = b(a[f], f, c),
            null != e && h.push(e);
            else for (f in a) e = b(a[f], f, c),
            null != e && h.push(e);
            return g.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2),
            e = function() {
                return a.apply(b || this, d.concat(f.call(arguments)))
            },
            e.guid = a.guid = a.guid || r.guid++,
            e
        },
        now: Date.now,
        support: o
    }),
    "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]),
    r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(a, b) {
        j["[object " + b + "]"] = b.toLowerCase()
    });
    function w(a) {
        var b = !!a && "length" in a && a.length,
        c = r.type(a);
        return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a)
    }
    var x = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function(a, b) {
            return a === b && (l = !0),
            0
        },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function(a, b) {
            for (var c = 0,
            d = a.length; c < d; c++) if (a[c] === b) return c;
            return - 1
        },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = {
            ID: new RegExp("^#(" + L + ")"),
            CLASS: new RegExp("^\\.(" + L + ")"),
            TAG: new RegExp("^(" + L + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + N),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + J + ")$", "i"),
            needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
        },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b: d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function(a, b) {
            return b ? "\0" === a ? "\ufffd": a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " ": "\\" + a
        },
        da = function() {
            m()
        },
        ea = ta(function(a) {
            return a.disabled === !0 && ("form" in a || "label" in a)
        },
        {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(D = H.call(v.childNodes), v.childNodes),
            D[v.childNodes.length].nodeType
        } catch(fa) {
            G = {
                apply: D.length ?
                function(a, b) {
                    F.apply(a, H.call(b))
                }: function(a, b) {
                    var c = a.length,
                    d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s = b && b.ownerDocument,
            w = b ? b.nodeType: 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;
            if (!e && ((b ? b.ownerDocument || b: v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (! (j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j),
                        d
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j),
                    d
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)),
                    d;
                    if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)),
                    d
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b,
                    r = a;
                    else if ("object" !== b.nodeName.toLowerCase()) { (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u),
                        o = g(a),
                        h = o.length;
                        while (h--) o[h] = "#" + k + " " + sa(o[h]);
                        r = o.join(","),
                        s = $.test(a) && qa(b.parentNode) || b
                    }
                    if (r) try {
                        return G.apply(d, s.querySelectorAll(r)),
                        d
                    } catch(x) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(P, "$1"), b, d, e)
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function ia(a) {
            return a[u] = !0,
            a
        }
        function ja(a) {
            var b = n.createElement("fieldset");
            try {
                return !! a(b)
            } catch(c) {
                return ! 1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function ka(a, b) {
            var c = a.split("|"),
            e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }
        function la(a, b) {
            var c = b && a,
            d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return - 1;
            return a ? 1 : -1
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function oa(a) {
            return function(b) {
                return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a: b.disabled === a: b.isDisabled === a || b.isDisabled !== !a && ea(b) === a: b.disabled === a: "label" in b && b.disabled === a
            }
        }
        function pa(a) {
            return ia(function(b) {
                return b = +b,
                ia(function(c, d) {
                    var e, f = a([], c.length, b),
                    g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = ga.support = {},
        f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return !! b && "HTML" !== b.nodeName
        },
        m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a: v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(n.createComment("")),
                !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u,
                !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            },
            d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }) : (d.filter.ID = function(a) {
                var b = a.replace(_, aa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            },
            d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c, d, e, f = b.getElementById(a);
                    if (f) {
                        if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
                        e = b.getElementsByName(a),
                        d = 0;
                        while (f = e[d++]) if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
                    }
                    return []
                }
            }), d.find.TAG = c.getElementsByTagName ?
            function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            }: function(a, b) {
                var c, d = [],
                e = 0,
                f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            d.find.CLASS = c.getElementsByClassName &&
            function(a, b) {
                if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a)
            },
            r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"),
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                a.querySelectorAll(":checked").length || q.push(":checked"),
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ja(function(a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="),
                2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"),
                o.appendChild(a).disabled = !0,
                2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "*"),
                s.call(a, "[s!='']:x"),
                r.push("!=", N)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ?
            function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a,
                d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return ! 0;
                return ! 1
            },
            B = b ?
            function(a, b) {
                if (a === b) return l = !0,
                0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d: (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1)
            }: function(a, b) {
                if (a === b) return l = !0,
                0;
                var c, d = 0,
                e = a.parentNode,
                f = b.parentNode,
                g = [a],
                h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            },
            n) : n
        },
        ga.matches = function(a, b) {
            return ga(a, null, null, b)
        },
        ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch(e) {}
            return ga(b, n, null, [a]).length > 0
        },
        ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        },
        ga.attr = function(a, b) { (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
            f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f: c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value: null
        },
        ga.escape = function(a) {
            return (a + "").replace(ba, ca)
        },
        ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        },
        ga.uniqueSort = function(a) {
            var b, d = [],
            e = 0,
            f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null,
            a
        },
        e = ga.getText = function(a) {
            var b, c = "",
            d = 0,
            f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        },
        d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(_, aa),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return V.CHILD.test(a[0]) ? null: (a[3] ? a[2] = a[4] || a[5] || "": c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(_, aa).toLowerCase();
                    return "*" === a ?
                    function() {
                        return ! 0
                    }: function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a,
                    function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b: !b || (e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice( - c.length) === c: "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"))
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                    g = "last" !== a.slice( - 4),
                    h = "of-type" === b;
                    return 1 === d && 0 === e ?
                    function(a) {
                        return !! a.parentNode
                    }: function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h,
                        t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p]) if (h ? m.nodeName.toLowerCase() === r: 1 === m.nodeType) return ! 1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o = [g ? q.firstChild: q.lastChild], g && s) {
                                m = q,
                                l = m[u] || (m[u] = {}),
                                k = l[m.uniqueID] || (l[m.uniqueID] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                t = n && j[2],
                                m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [w, n, t];
                                    break
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) if ((h ? m.nodeName.toLowerCase() === r: 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e,
                            t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b),
                        g = f.length;
                        while (g--) d = I(a, f[g]),
                        a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [],
                    c = [],
                    d = h(a.replace(P, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                        h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null, f, c),
                        b[0] = null,
                        !c.pop()
                    }
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0
                    }
                }),
                contains: ia(function(a) {
                    return a = a.replace(_, aa),
                    function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: ia(function(a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a),
                    a = a.replace(_, aa).toLowerCase(),
                    function(b) {
                        var c;
                        do
                        if (c = p ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(),
                        c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: oa(!1),
                disabled: oa(!0),
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(a) {
                    return ! d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: pa(function() {
                    return [0]
                }),
                last: pa(function(a, b) {
                    return [b - 1]
                }),
                eq: pa(function(a, b, c) {
                    return [c < 0 ? c + b: c]
                }),
                even: pa(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: pa(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b: c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: pa(function(a, b, c) {
                    for (var d = c < 0 ? c + b: c; ++d < b;) a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function ra() {}
        ra.prototype = d.filters = d.pseudos,
        d.setFilters = new ra,
        g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])),
                c = !1,
                (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) ! (e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length: h ? ga.error(a) : z(a, i).slice(0)
        };
        function sa(a) {
            for (var b = 0,
            c = a.length,
            d = ""; b < c; b++) d += a[b].value;
            return d
        }
        function ta(a, b, c) {
            var d = b.dir,
            e = b.next,
            f = e || d,
            g = c && "parentNode" === f,
            h = x++;
            return b.first ?
            function(b, c, e) {
                while (b = b[d]) if (1 === b.nodeType || g) return a(b, c, e);
                return ! 1
            }: function(b, c, i) {
                var j, k, l, m = [w, h];
                if (i) {
                    while (b = b[d]) if ((1 === b.nodeType || g) && a(b, c, i)) return ! 0
                } else while (b = b[d]) if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                else {
                    if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
                    if (k[f] = m, m[2] = a(b, c, i)) return ! 0
                }
                return ! 1
            }
        }
        function ua(a) {
            return a.length > 1 ?
            function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return ! 1;
                return ! 0
            }: a[0]
        }
        function va(a, b, c) {
            for (var d = 0,
            e = b.length; d < e; d++) ga(a, b[d], c);
            return c
        }
        function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }
        function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)),
            e && !e[u] && (e = xa(e, f)),
            ia(function(f, g, h, i) {
                var j, k, l, m = [],
                n = [],
                o = g.length,
                p = f || va(b || "*", h.nodeType ? [h] : h, []),
                q = !a || !f && b ? p: wa(p, m, a, h, i),
                r = c ? e || (f ? a: o || d) ? [] : g: q;
                if (c && c(q, r, h, i), d) {
                    j = wa(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r),
                e ? e(null, g, r, i) : G.apply(g, r)
            })
        }
        function ya(a) {
            for (var b, c, e, f = a.length,
            g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function(a) {
                return a === b
            },
            h, !0), l = ta(function(a) {
                return I(b, a) > -1
            },
            h, !0), m = [function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null,
                e
            }]; i < f; i++) if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];
            else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; e < f; e++) if (d.relative[a[e].type]) break;
                    return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*": ""
                    })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a))
                }
                m.push(c)
            }
            return ua(m)
        }
        function za(a, b) {
            var c = b.length > 0,
            e = a.length > 0,
            f = function(f, g, h, i, k) {
                var l, o, q, r = 0,
                s = "0",
                t = f && [],
                u = [],
                v = j,
                x = f || e && d.find.TAG("*", k),
                y = w += null == v ? 1 : Math.random() || .1,
                z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0,
                        g || l.ownerDocument === n || (m(l), h = !p);
                        while (q = a[o++]) if (q(l, g || n, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = y)
                    }
                    c && ((l = !q && l) && r--, f && t.push(l))
                }
                if (r += s, c && s !== r) {
                    o = 0;
                    while (q = b[o++]) q(t, u, g, h);
                    if (f) {
                        if (r > 0) while (s--) t[s] || u[s] || (u[s] = E.call(i));
                        u = wa(u)
                    }
                    G.apply(i, u),
                    k && !f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = y, j = v),
                t
            };
            return c ? ia(f) : f
        }
        return h = ga.compile = function(a, b) {
            var c, d = [],
            e = [],
            f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--) f = ya(b[c]),
                f[u] ? d.push(f) : e.push(f);
                f = A(a, za(e, d)),
                f.selector = a
            }
            return f
        },
        i = ga.select = function(a, b, c, e) {
            var f, i, j, k, l, m = "function" == typeof a && a,
            n = !e && g(a = m.selector || a);
            if (c = c || [], 1 === n.length) {
                if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
                    m && (b = b.parentNode),
                    a = a.slice(i.shift().value.length)
                }
                f = V.needsContext.test(a) ? 0 : i.length;
                while (f--) {
                    if (j = i[f], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
                        if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e),
                        c;
                        break
                    }
                }
            }
            return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b),
            c
        },
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"))
        }),
        ja(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width",
        function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || ka("value",
        function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        }),
        ja(function(a) {
            return null == a.getAttribute("disabled")
        }) || ka(J,
        function(a, b, c) {
            var d;
            if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }),
        ga
    } (a);
    r.find = x,
    r.expr = x.selectors,
    r.expr[":"] = r.expr.pseudos,
    r.uniqueSort = r.unique = x.uniqueSort,
    r.text = x.getText,
    r.isXMLDoc = x.isXML,
    r.contains = x.contains,
    r.escapeSelector = x.escape;
    var y = function(a, b, c) {
        var d = [],
        e = void 0 !== c;
        while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
            if (e && r(a).is(c)) break;
            d.push(a)
        }
        return d
    },
    z = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
    },
    A = r.expr.match.needsContext,
    B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    C = /^.[^:#\[\.,]*$/;
    function D(a, b, c) {
        return r.isFunction(b) ? r.grep(a,
        function(a, d) {
            return !! b.call(a, d, a) !== c
        }) : b.nodeType ? r.grep(a,
        function(a) {
            return a === b !== c
        }) : "string" != typeof b ? r.grep(a,
        function(a) {
            return i.call(b, a) > -1 !== c
        }) : C.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a,
        function(a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType
        }))
    }
    r.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b,
        function(a) {
            return 1 === a.nodeType
        }))
    },
    r.fn.extend({
        find: function(a) {
            var b, c, d = this.length,
            e = this;
            if ("string" != typeof a) return this.pushStack(r(a).filter(function() {
                for (b = 0; b < d; b++) if (r.contains(e[b], this)) return ! 0
            }));
            for (c = this.pushStack([]), b = 0; b < d; b++) r.find(a, e[b], c);
            return d > 1 ? r.uniqueSort(c) : c
        },
        filter: function(a) {
            return this.pushStack(D(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(D(this, a || [], !0))
        },
        is: function(a) {
            return !! D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    G = r.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return ! b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b: d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this
            }
            return f = d.getElementById(e[2]),
            f && (this[0] = f, this.length = 1),
            this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this)
    };
    G.prototype = r.fn,
    E = r(d);
    var H = /^(?:parents|prev(?:Until|All))/,
    I = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    r.fn.extend({
        has: function(a) {
            var b = r(a, this),
            c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++) if (r.contains(this, b[a])) return ! 0
            })
        },
        closest: function(a, b) {
            var c, d = 0,
            e = this.length,
            f = [],
            g = "string" != typeof a && r(a);
            if (!A.test(a)) for (; d < e; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    r.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return y(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return y(a, "parentNode", c)
        },
        next: function(a) {
            return J(a, "nextSibling")
        },
        prev: function(a) {
            return J(a, "previousSibling")
        },
        nextAll: function(a) {
            return y(a, "nextSibling")
        },
        prevAll: function(a) {
            return y(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return y(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return y(a, "previousSibling", c)
        },
        siblings: function(a) {
            return z((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return z(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || r.merge([], a.childNodes)
        }
    },
    function(a, b) {
        r.fn[a] = function(c, d) {
            var e = r.map(this, b, c);
            return "Until" !== a.slice( - 5) && (d = c),
            d && "string" == typeof d && (e = r.filter(d, e)),
            this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()),
            this.pushStack(e)
        }
    });
    var K = /[^\x20\t\r\n\f]+/g;
    function L(a) {
        var b = {};
        return r.each(a.match(K) || [],
        function(a, c) {
            b[c] = !0
        }),
        b
    }
    r.Callbacks = function(a) {
        a = "string" == typeof a ? L(a) : r.extend({},
        a);
        var b, c, d, e, f = [],
        g = [],
        h = -1,
        i = function() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();
                while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
            }
            a.memory || (c = !1),
            b = !1,
            e && (f = c ? [] : "")
        },
        j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)),
                function d(b) {
                    r.each(b,
                    function(b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c)
                    })
                } (arguments), c && !b && i()),
                this
            },
            remove: function() {
                return r.each(arguments,
                function(a, b) {
                    var c;
                    while ((c = r.inArray(b, f, c)) > -1) f.splice(c, 1),
                    c <= h && h--
                }),
                this
            },
            has: function(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0
            },
            empty: function() {
                return f && (f = []),
                this
            },
            disable: function() {
                return e = g = [],
                f = c = "",
                this
            },
            disabled: function() {
                return ! f
            },
            lock: function() {
                return e = g = [],
                c || b || (f = c = ""),
                this
            },
            locked: function() {
                return !! e
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()),
                this
            },
            fire: function() {
                return j.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! d
            }
        };
        return j
    };
    function M(a) {
        return a
    }
    function N(a) {
        throw a
    }
    function O(a, b, c) {
        var d;
        try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
        } catch(a) {
            c.call(void 0, a)
        }
    }
    r.extend({
        Deferred: function(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
            d = "pending",
            e = {
                state: function() {
                    return d
                },
                always: function() {
                    return f.done(arguments).fail(arguments),
                    this
                },
                "catch": function(a) {
                    return e.then(null, a)
                },
                pipe: function() {
                    var a = arguments;
                    return r.Deferred(function(b) {
                        r.each(c,
                        function(c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];
                            f[d[1]](function() {
                                var a = e && e.apply(this, arguments);
                                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                then: function(b, d, e) {
                    var f = 0;
                    function g(b, c, d, e) {
                        return function() {
                            var h = this,
                            i = arguments,
                            j = function() {
                                var a, j;
                                if (! (b < f)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                                    j = a && ("object" == typeof a || "function" == typeof a) && a.then,
                                    r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i))
                                }
                            },
                            k = e ? j: function() {
                                try {
                                    j()
                                } catch(a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace),
                                    b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i))
                                }
                            };
                            b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k))
                        }
                    }
                    return r.Deferred(function(a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e: M, a.notifyWith)),
                        c[1][3].add(g(0, a, r.isFunction(b) ? b: M)),
                        c[2][3].add(g(0, a, r.isFunction(d) ? d: N))
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? r.extend(a, e) : e
                }
            },
            f = {};
            return r.each(c,
            function(a, b) {
                var g = b[2],
                h = b[5];
                e[b[1]] = g.add,
                h && g.add(function() {
                    d = h
                },
                c[3 - a][2].disable, c[0][2].lock),
                g.add(b[3].fire),
                f[b[0]] = function() {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments),
                    this
                },
                f[b[0] + "With"] = g.fireWith
            }),
            e.promise(f),
            b && b.call(f, f),
            f
        },
        when: function(a) {
            var b = arguments.length,
            c = b,
            d = Array(c),
            e = f.call(arguments),
            g = r.Deferred(),
            h = function(a) {
                return function(c) {
                    d[a] = this,
                    e[a] = arguments.length > 1 ? f.call(arguments) : c,
                    --b || g.resolveWith(d, e)
                }
            };
            if (b <= 1 && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();
            while (c--) O(e[c], h(c), g.reject);
            return g.promise()
        }
    });
    var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    },
    r.readyException = function(b) {
        a.setTimeout(function() {
            throw b
        })
    };
    var Q = r.Deferred();
    r.fn.ready = function(a) {
        return Q.then(a)["catch"](function(a) {
            r.readyException(a)
        }),
        this
    },
    r.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? r.readyWait++:r.ready(!0)
        },
        ready: function(a) { (a === !0 ? --r.readyWait: r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]))
        }
    }),
    r.ready.then = Q.then;
    function R() {
        d.removeEventListener("DOMContentLoaded", R),
        a.removeEventListener("load", R),
        r.ready()
    }
    "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));
    var S = function(a, b, c, d, e, f, g) {
        var h = 0,
        i = a.length,
        j = null == c;
        if ("object" === r.type(c)) {
            e = !0;
            for (h in c) S(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(r(a), c)
        })), b)) for (; h < i; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
        return e ? a: j ? b.call(a) : i ? b(a[0], c) : f
    },
    T = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function U() {
        this.expando = r.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(a) {
            var b = a[this.expando];
            return b || (b = {},
            T(a) && (a.nodeType ? a[this.expando] = b: Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))),
            b
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[r.camelCase(b)] = c;
            else for (d in b) e[r.camelCase(d)] = b[d];
            return e
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)]
        },
        access: function(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c: b)
        },
        remove: function(a, b) {
            var c, d = a[this.expando];
            if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []),
                    c = b.length;
                    while (c--) delete d[b[c]]
                } (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !r.isEmptyObject(b)
        }
    };
    var V = new U,
    W = new U,
    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Y = /[A-Z]/g;
    function Z(a) {
        return "true" === a || "false" !== a && ("null" === a ? null: a === +a + "" ? +a: X.test(a) ? JSON.parse(a) : a)
    }
    function $(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = Z(c)
            } catch(e) {}
            W.set(a, b, c)
        } else c = void 0;
        return c
    }
    r.extend({
        hasData: function(a) {
            return W.hasData(a) || V.hasData(a)
        },
        data: function(a, b, c) {
            return W.access(a, b, c)
        },
        removeData: function(a, b) {
            W.remove(a, b)
        },
        _data: function(a, b, c) {
            return V.access(a, b, c)
        },
        _removeData: function(a, b) {
            V.remove(a, b)
        }
    }),
    r.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
            g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), $(f, d, e[d])));
                    V.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                W.set(this, a)
            }) : S(this,
            function(b) {
                var c;
                if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;
                    if (c = $(f, a), void 0 !== c) return c
                } else this.each(function() {
                    W.set(this, a, b)
                })
            },
            null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                W.remove(this, a)
            })
        }
    }),
    r.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") + "queue",
            d = V.get(a, b),
            c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)),
            d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = r.queue(a, b),
            d = c.length,
            e = c.shift(),
            f = r._queueHooks(a, b),
            g = function() {
                r.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--),
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return V.get(a, c) || V.access(a, c, {
                empty: r.Callbacks("once memory").add(function() {
                    V.remove(a, [b + "queue", c])
                })
            })
        }
    }),
    r.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--),
            arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this: this.each(function() {
                var c = r.queue(this, a, b);
                r._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                r.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
            e = r.Deferred(),
            f = this,
            g = this.length,
            h = function() {--d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0),
            a = a || "fx";
            while (g--) c = V.get(f[g], a + "queueHooks"),
            c && c.empty && (d++, c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var _ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    aa = new RegExp("^(?:([+-])=|)(" + _ + ")([a-z%]*)$", "i"),
    ba = ["Top", "Right", "Bottom", "Left"],
    ca = function(a, b) {
        return a = b || a,
        "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display")
    },
    da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f],
        a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    function ea(a, b, c, d) {
        var e, f = 1,
        g = 20,
        h = d ?
        function() {
            return d.cur()
        }: function() {
            return r.css(a, b, "")
        },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "": "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && aa.exec(r.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3],
            c = c || [],
            k = +i || 1;
            do f = f || ".5",
            k /= f,
            r.style(a, b, k + j);
            while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)),
        e
    }
    var fa = {};
    function ga(a) {
        var b, c = a.ownerDocument,
        d = a.nodeName,
        e = fa[d];
        return e ? e: (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), fa[d] = e, e)
    }
    function ha(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; f < g; f++) d = a[f],
        d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ca(d) && (e[f] = ga(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        for (f = 0; f < g; f++) null != e[f] && (a[f].style.display = e[f]);
        return a
    }
    r.fn.extend({
        show: function() {
            return ha(this, !0)
        },
        hide: function() {
            return ha(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                ca(this) ? r(this).show() : r(this).hide()
            })
        }
    });
    var ia = /^(?:checkbox|radio)$/i,
    ja = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    ka = /^$|\/(?:java|ecma)script/i,
    la = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    la.optgroup = la.option,
    la.tbody = la.tfoot = la.colgroup = la.caption = la.thead,
    la.th = la.td;
    function ma(a, b) {
        var c;
        return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [],
        void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c
    }
    function na(a, b) {
        for (var c = 0,
        d = a.length; c < d; c++) V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"))
    }
    var oa = /<|&#?\w+;/;
    function pa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);
        else if (oa.test(f)) {
            g = g || l.appendChild(b.createElement("div")),
            h = (ja.exec(f) || ["", ""])[1].toLowerCase(),
            i = la[h] || la._default,
            g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2],
            k = i[0];
            while (k--) g = g.lastChild;
            r.merge(m, g.childNodes),
            g = l.firstChild,
            g.textContent = ""
        } else m.push(b.createTextNode(f));
        l.textContent = "",
        n = 0;
        while (f = m[n++]) if (d && r.inArray(f, d) > -1) e && e.push(f);
        else if (j = r.contains(f.ownerDocument, f), g = ma(l.appendChild(f), "script"), j && na(g), c) {
            k = 0;
            while (f = g[k++]) ka.test(f.type || "") && c.push(f)
        }
        return l
    } !
    function() {
        var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");
        c.setAttribute("type", "radio"),
        c.setAttribute("checked", "checked"),
        c.setAttribute("name", "t"),
        b.appendChild(c),
        o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        b.innerHTML = "<textarea>x</textarea>",
        o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    } ();
    var qa = d.documentElement,
    ra = /^key/,
    sa = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    ta = /^([^.]*)(?:\.(.+)|)/;
    function ua() {
        return ! 0
    }
    function va() {
        return ! 1
    }
    function wa() {
        try {
            return d.activeElement
        } catch(a) {}
    }
    function xa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) xa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = va;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return r().off(a),
            g.apply(this, arguments)
        },
        e.guid = g.guid || (g.guid = r.guid++)),
        a.each(function() {
            r.event.add(this, b, e, d, c)
        })
    }
    r.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.get(a);
            if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector),
                e && r.find.matchesSelector(qa, e),
                c.guid || (c.guid = r.guid++),
                (i = q.events) || (i = q.events = {}),
                (g = q.handle) || (g = q.handle = function(b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0
                }),
                b = (b || "").match(K) || [""],
                j = b.length;
                while (j--) h = ta.exec(b[j]) || [],
                n = p = h[1],
                o = (h[2] || "").split(".").sort(),
                n && (l = r.event.special[n] || {},
                n = (e ? l.delegateType: l.bindType) || n, l = r.event.special[n] || {},
                k = r.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && r.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                },
                f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = V.hasData(a) && V.get(a);
            if (q && (i = q.events)) {
                b = (b || "").match(K) || [""],
                j = b.length;
                while (j--) if (h = ta.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    l = r.event.special[n] || {},
                    n = (d ? l.delegateType: l.bindType) || n,
                    m = i[n] || [],
                    h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                    g = f = m.length;
                    while (f--) k = m[f],
                    !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n])
                } else for (n in i) r.event.remove(a, n + b[j], c, d, !0);
                r.isEmptyObject(i) && V.remove(a, "handle events")
            }
        },
        dispatch: function(a) {
            var b = r.event.fix(a),
            c,
            d,
            e,
            f,
            g,
            h,
            i = new Array(arguments.length),
            j = (V.get(this, "events") || {})[b.type] || [],
            k = r.event.special[b.type] || {};
            for (i[0] = b, c = 1; c < arguments.length; c++) i[c] = arguments[c];
            if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j),
                c = 0;
                while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem,
                    d = 0;
                    while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, b),
                b.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g, h = [],
            i = b.delegateCount,
            j = a.target;
            if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
                for (f = [], g = {},
                c = 0; c < i; c++) d = b[c],
                e = d.selector + " ",
                void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length),
                g[e] && f.push(d);
                f.length && h.push({
                    elem: j,
                    handlers: f
                })
            }
            return j = this,
            i < b.length && h.push({
                elem: j,
                handlers: b.slice(i)
            }),
            h
        },
        addProp: function(a, b) {
            Object.defineProperty(r.Event.prototype, a, {
                enumerable: !0,
                configurable: !0,
                get: r.isFunction(b) ?
                function() {
                    if (this.originalEvent) return b(this.originalEvent)
                }: function() {
                    if (this.originalEvent) return this.originalEvent[a]
                },
                set: function(b) {
                    Object.defineProperty(this, a, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
            })
        },
        fix: function(a) {
            return a[r.expando] ? a: new r.Event(a)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wa() && this.focus) return this.focus(),
                    !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wa() && this.blur) return this.blur(),
                    !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && r.nodeName(this, "input")) return this.click(),
                    !1
                },
                _default: function(a) {
                    return r.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        }
    },
    r.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    },
    r.Event = function(a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ua: va, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode: a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void(this[r.expando] = !0)) : new r.Event(a, b)
    },
    r.Event.prototype = {
        constructor: r.Event,
        isDefaultPrevented: va,
        isPropagationStopped: va,
        isImmediatePropagationStopped: va,
        isSimulated: !1,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ua,
            a && !this.isSimulated && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ua,
            a && !this.isSimulated && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ua,
            a && !this.isSimulated && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    r.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(a) {
            var b = a.button;
            return null == a.which && ra.test(a.type) ? null != a.charCode ? a.charCode: a.keyCode: !a.which && void 0 !== b && sa.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
        }
    },
    r.event.addProp),
    r.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(a, b) {
        r.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    r.fn.extend({
        on: function(a, b, c, d) {
            return xa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return xa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj,
            r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler),
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0),
            c === !1 && (c = va),
            this.each(function() {
                r.event.remove(this, a, c, b)
            })
        }
    });
    var ya = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    za = /<script|<style|<link/i,
    Aa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ba = /^true\/(.*)/,
    Ca = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Da(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a: a
    }
    function Ea(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
        a
    }
    function Fa(a) {
        var b = Ba.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function Ga(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle,
                g.events = {};
                for (e in j) for (c = 0, d = j[e].length; c < d; c++) r.event.add(b, e, j[e][c])
            }
            W.hasData(a) && (h = W.access(a), i = r.extend({},
            h), W.set(b, i))
        }
    }
    function Ha(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ia.test(a.type) ? b.checked = a.checked: "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
    }
    function Ia(a, b, c, d) {
        b = g.apply([], b);
        var e, f, h, i, j, k, l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);
        if (s || m > 1 && "string" == typeof q && !o.checkClone && Aa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            s && (b[0] = q.call(this, e, f.html())),
            Ia(f, b, c, d)
        });
        if (m && (e = pa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(ma(e, "script"), Ea), i = h.length; l < m; l++) j = e,
            l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, ma(j, "script"))),
            c.call(a[l], j, l);
            if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Fa), l = 0; l < i; l++) j = h[l],
            ka.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ca, ""), k))
        }
        return a
    }
    function Ja(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || r.cleanData(ma(d)),
        d.parentNode && (c && r.contains(d.ownerDocument, d) && na(ma(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    r.extend({
        htmlPrefilter: function(a) {
            return a.replace(ya, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
            i = r.contains(a.ownerDocument, a);
            if (! (o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = ma(h), f = ma(a), d = 0, e = f.length; d < e; d++) Ha(f[d], g[d]);
            if (b) if (c) for (f = f || ma(a), g = g || ma(h), d = 0, e = f.length; d < e; d++) Ga(f[d], g[d]);
            else Ga(a, h);
            return g = ma(h, "script"),
            g.length > 0 && na(g, !i && ma(a, "script")),
            h
        },
        cleanData: function(a) {
            for (var b, c, d, e = r.event.special,
            f = 0; void 0 !== (c = a[f]); f++) if (T(c)) {
                if (b = c[V.expando]) {
                    if (b.events) for (d in b.events) e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                    c[V.expando] = void 0
                }
                c[W.expando] && (c[W.expando] = void 0)
            }
        }
    }),
    r.fn.extend({
        detach: function(a) {
            return Ja(this, a, !0)
        },
        remove: function(a) {
            return Ja(this, a)
        },
        text: function(a) {
            return S(this,
            function(a) {
                return void 0 === a ? r.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a)
                })
            },
            null, a, arguments.length)
        },
        append: function() {
            return Ia(this, arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ia(this, arguments,
            function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Da(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ia(this, arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ia(this, arguments,
            function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (r.cleanData(ma(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null != a && a,
            b = null == b ? a: b,
            this.map(function() {
                return r.clone(this, a, b)
            })
        },
        html: function(a) {
            return S(this,
            function(a) {
                var b = this[0] || {},
                c = 0,
                d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !za.test(a) && !la[(ja.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);
                    try {
                        for (; c < d; c++) b = this[c] || {},
                        1 === b.nodeType && (r.cleanData(ma(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch(e) {}
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ia(this, arguments,
            function(b) {
                var c = this.parentNode;
                r.inArray(this, a) < 0 && (r.cleanData(ma(this)), c && c.replaceChild(b, this))
            },
            a)
        }
    }),
    r.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        r.fn[a] = function(a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) c = g === f ? this: this.clone(!0),
            r(e[g])[b](c),
            h.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Ka = /^margin/,
    La = new RegExp("^(" + _ + ")(?!px)[a-z%]+$", "i"),
    Ma = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a),
        c.getComputedStyle(b)
    }; !
    function() {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                i.innerHTML = "",
                qa.appendChild(h);
                var b = a.getComputedStyle(i);
                c = "1%" !== b.top,
                g = "2px" === b.marginLeft,
                e = "4px" === b.width,
                i.style.marginRight = "50%",
                f = "4px" === b.marginRight,
                qa.removeChild(h),
                i = null
            }
        }
        var c, e, f, g, h = d.createElement("div"),
        i = d.createElement("div");
        i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
            pixelPosition: function() {
                return b(),
                c
            },
            boxSizingReliable: function() {
                return b(),
                e
            },
            pixelMarginRight: function() {
                return b(),
                f
            },
            reliableMarginLeft: function() {
                return b(),
                g
            }
        }))
    } ();
    function Na(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ma(a),
        c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && La.test(g) && Ka.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
        void 0 !== g ? g + "": g
    }
    function Oa(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get: (this.get = b).apply(this, arguments)
            }
        }
    }
    var Pa = /^(none|table(?!-c[ea]).+)/,
    Qa = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ra = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    Sa = ["Webkit", "Moz", "ms"],
    Ta = d.createElement("div").style;
    function Ua(a) {
        if (a in Ta) return a;
        var b = a[0].toUpperCase() + a.slice(1),
        c = Sa.length;
        while (c--) if (a = Sa[c] + b, a in Ta) return a
    }
    function Va(a, b, c) {
        var d = aa.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }
    function Wa(a, b, c, d, e) {
        var f, g = 0;
        for (f = c === (d ? "border": "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2)"margin" === c && (g += r.css(a, c + ba[f], !0, e)),
        d ? ("content" === c && (g -= r.css(a, "padding" + ba[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ba[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ba[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ba[f] + "Width", !0, e)));
        return g
    }
    function Xa(a, b, c) {
        var d, e = !0,
        f = Ma(a),
        g = "border-box" === r.css(a, "boxSizing", !1, f);
        if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), d <= 0 || null == d) {
            if (d = Na(a, b, f), (d < 0 || null == d) && (d = a.style[b]), La.test(d)) return d;
            e = g && (o.boxSizingReliable() || d === a.style[b]),
            d = parseFloat(d) || 0
        }
        return d + Wa(a, b, c || (g ? "border": "content"), e, f) + "px"
    }
    r.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Na(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = r.camelCase(b),
                i = a.style;
                return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h),
                g = r.cssHooks[b] || r.cssHooks[h],
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e: i[b] : (f = typeof c, "string" === f && (e = aa.exec(c)) && e[1] && (c = ea(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "": "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = r.camelCase(b);
            return b = r.cssProps[h] || (r.cssProps[h] = Ua(h) || h),
            g = r.cssHooks[b] || r.cssHooks[h],
            g && "get" in g && (e = g.get(a, !0, c)),
            void 0 === e && (e = Na(a, b, d)),
            "normal" === e && b in Ra && (e = Ra[b]),
            "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
        }
    }),
    r.each(["height", "width"],
    function(a, b) {
        r.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return ! Pa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Xa(a, b, d) : da(a, Qa,
                function() {
                    return Xa(a, b, d)
                })
            },
            set: function(a, c, d) {
                var e, f = d && Ma(a),
                g = d && Wa(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
                return g && (e = aa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)),
                Va(a, c, g)
            }
        }
    }),
    r.cssHooks.marginLeft = Oa(o.reliableMarginLeft,
    function(a, b) {
        if (b) return (parseFloat(Na(a, "marginLeft")) || a.getBoundingClientRect().left - da(a, {
            marginLeft: 0
        },
        function() {
            return a.getBoundingClientRect().left
        })) + "px"
    }),
    r.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(a, b) {
        r.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0,
                e = {},
                f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) e[a + ba[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Ka.test(a) || (r.cssHooks[a + b].set = Va)
    }),
    r.fn.extend({
        css: function(a, b) {
            return S(this,
            function(a, b, c) {
                var d, e, f = {},
                g = 0;
                if (r.isArray(b)) {
                    for (d = Ma(a), e = b.length; g < e; g++) f[b[g]] = r.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? r.style(a, b, c) : r.css(a, b)
            },
            a, b, arguments.length > 1)
        }
    });
    function Ya(a, b, c, d, e) {
        return new Ya.prototype.init(a, b, c, d, e)
    }
    r.Tween = Ya,
    Ya.prototype = {
        constructor: Ya,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || r.easing._default,
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (r.cssNumber[c] ? "": "px")
        },
        cur: function() {
            var a = Ya.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ya.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Ya.propHooks[this.prop];
            return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Ya.propHooks._default.set(this),
            this
        }
    },
    Ya.prototype.init.prototype = Ya.prototype,
    Ya.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0)
            },
            set: function(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now: r.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    },
    Ya.propHooks.scrollTop = Ya.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    r.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return.5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    },
    r.fx = Ya.prototype.init,
    r.fx.step = {};
    var Za, $a, _a = /^(?:toggle|show|hide)$/,
    ab = /queueHooks$/;
    function bb() {
        $a && (a.requestAnimationFrame(bb), r.fx.tick())
    }
    function cb() {
        return a.setTimeout(function() {
            Za = void 0
        }),
        Za = r.now()
    }
    function db(a, b) {
        var c, d = 0,
        e = {
            height: a
        };
        for (b = b ? 1 : 0; d < 4; d += 2 - b) c = ba[d],
        e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a),
        e
    }
    function eb(a, b, c) {
        for (var d, e = (hb.tweeners[b] || []).concat(hb.tweeners["*"]), f = 0, g = e.length; f < g; f++) if (d = e[f].call(c, b, a)) return d
    }
    function fb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && ca(a),
        q = V.get(a, "fxshow");
        c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
            g.unqueued || h()
        }), g.unqueued++, m.always(function() {
            m.always(function() {
                g.unqueued--,
                r.queue(a, "fx").length || g.empty.fire()
            })
        }));
        for (d in b) if (e = b[d], _a.test(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide": "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0
            }
            n[d] = q && q[d] || r.style(a, d)
        }
        if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j: (ha([a], !0), j = a.style.display || j, k = r.css(a, "display"), ha([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function() {
                o.display = j
            }), null == j && (k = o.display, j = "none" === k ? "": k)), o.display = "inline-block")),
            c.overflow && (o.overflow = "hidden", m.always(function() {
                o.overflow = c.overflow[0],
                o.overflowX = c.overflow[1],
                o.overflowY = c.overflow[2]
            })),
            i = !1;
            for (d in n) i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", {
                display: j
            }), f && (q.hidden = !p), p && ha([a], !0), m.done(function() {
                p || ha([a]),
                V.remove(a, "fxshow");
                for (d in n) r.style(a, d, n[d])
            })),
            i = eb(p ? q[d] : 0, d, m),
            d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0))
        }
    }
    function gb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
            f = g.expand(f),
            delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function hb(a, b, c) {
        var d, e, f = 0,
        g = hb.prefilters.length,
        h = r.Deferred().always(function() {
            delete i.elem
        }),
        i = function() {
            if (e) return ! 1;
            for (var b = Za || cb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            f < 1 && i ? c: (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
            elem: a,
            props: r.extend({},
            b),
            opts: r.extend(!0, {
                specialEasing: {},
                easing: r.easing._default
            },
            c),
            originalProperties: b,
            originalOptions: c,
            startTime: Za || cb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0,
                d = b ? j.tweens.length: 0;
                if (e) return this;
                for (e = !0; c < d; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]),
                this
            }
        }),
        k = j.props;
        for (gb(k, j.opts.specialEasing); f < g; f++) if (d = hb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)),
        d;
        return r.map(k, eb, j),
        r.isFunction(j.opts.start) && j.opts.start.call(a, j),
        r.fx.timer(r.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    r.Animation = r.extend(hb, {
        tweeners: {
            "*": [function(a, b) {
                var c = this.createTween(a, b);
                return ea(c.elem, a, aa.exec(b), c),
                c
            }]
        },
        tweener: function(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);
            for (var c, d = 0,
            e = a.length; d < e; d++) c = a[d],
            hb.tweeners[c] = hb.tweeners[c] || [],
            hb.tweeners[c].unshift(b)
        },
        prefilters: [fb],
        prefilter: function(a, b) {
            b ? hb.prefilters.unshift(a) : hb.prefilters.push(a)
        }
    }),
    r.speed = function(a, b, c) {
        var e = a && "object" == typeof a ? r.extend({},
        a) : {
            complete: c || !c && b || r.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !r.isFunction(b) && b
        };
        return r.fx.off || d.hidden ? e.duration = 0 : "number" != typeof e.duration && (e.duration in r.fx.speeds ? e.duration = r.fx.speeds[e.duration] : e.duration = r.fx.speeds._default),
        null != e.queue && e.queue !== !0 || (e.queue = "fx"),
        e.old = e.complete,
        e.complete = function() {
            r.isFunction(e.old) && e.old.call(this),
            e.queue && r.dequeue(this, e.queue)
        },
        e
    },
    r.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(ca).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = r.isEmptyObject(a),
            f = r.speed(b, c, d),
            g = function() {
                var b = hb(this, r.extend({},
                a), f); (e || V.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0,
                e = null != a && a + "queueHooks",
                f = r.timers,
                g = V.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1)); ! b && c || r.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = V.get(this),
                d = c[a + "queue"],
                e = c[a + "queueHooks"],
                f = r.timers,
                g = d ? d.length: 0;
                for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    r.each(["toggle", "show", "hide"],
    function(a, b) {
        var c = r.fn[b];
        r.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(db(b, !0), a, d, e)
        }
    }),
    r.each({
        slideDown: db("show"),
        slideUp: db("hide"),
        slideToggle: db("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        r.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    r.timers = [],
    r.fx.tick = function() {
        var a, b = 0,
        c = r.timers;
        for (Za = r.now(); b < c.length; b++) a = c[b],
        a() || c[b] !== a || c.splice(b--, 1);
        c.length || r.fx.stop(),
        Za = void 0
    },
    r.fx.timer = function(a) {
        r.timers.push(a),
        a() ? r.fx.start() : r.timers.pop()
    },
    r.fx.interval = 13,
    r.fx.start = function() {
        $a || ($a = a.requestAnimationFrame ? a.requestAnimationFrame(bb) : a.setInterval(r.fx.tick, r.fx.interval))
    },
    r.fx.stop = function() {
        a.cancelAnimationFrame ? a.cancelAnimationFrame($a) : a.clearInterval($a),
        $a = null
    },
    r.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    r.fn.delay = function(b, c) {
        return b = r.fx ? r.fx.speeds[b] || b: b,
        c = c || "fx",
        this.queue(c,
        function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e)
            }
        })
    },
    function() {
        var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
        a.type = "checkbox",
        o.checkOn = "" !== a.value,
        o.optSelected = c.selected,
        a = d.createElement("input"),
        a.value = "t",
        a.type = "radio",
        o.radioValue = "t" === a.value
    } ();
    var ib, jb = r.expr.attrHandle;
    r.fn.extend({
        attr: function(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                r.removeAttr(this, a)
            })
        }
    }),
    r.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? ib: void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d: (d = r.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d = 0,
            e = b && b.match(K);
            if (e && 1 === a.nodeType) while (c = e[d++]) a.removeAttribute(c)
        }
    }),
    ib = {
        set: function(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c),
            c
        }
    },
    r.each(r.expr.match.bool.source.match(/\w+/g),
    function(a, b) {
        var c = jb[b] || r.find.attr;
        jb[b] = function(a, b, d) {
            var e, f, g = b.toLowerCase();
            return d || (f = jb[g], jb[g] = e, e = null != c(a, b, d) ? g: null, jb[g] = f),
            e
        }
    });
    var kb = /^(?:input|select|textarea|button)$/i,
    lb = /^(?:a|area)$/i;
    r.fn.extend({
        prop: function(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[r.propFix[a] || a]
            })
        }
    }),
    r.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]),
            void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d: a[b] = c: e && "get" in e && null !== (d = e.get(a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = r.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : kb.test(a.nodeName) || lb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    o.optSelected || (r.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex,
            null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }),
    r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        r.propFix[this.toLowerCase()] = this
    });
    function mb(a) {
        var b = a.match(K) || [];
        return b.join(" ")
    }
    function nb(a) {
        return a.getAttribute && a.getAttribute("class") || ""
    }
    r.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).addClass(a.call(this, b, nb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++]) if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                    h = mb(d),
                    e !== h && c.setAttribute("class", h)
                }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (r.isFunction(a)) return this.each(function(b) {
                r(this).removeClass(a.call(this, b, nb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(K) || [];
                while (c = this[i++]) if (e = nb(c), d = 1 === c.nodeType && " " + mb(e) + " ") {
                    g = 0;
                    while (f = b[g++]) while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                    h = mb(d),
                    e !== h && c.setAttribute("class", h)
                }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function(c) {
                r(this).toggleClass(a.call(this, c, nb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0,
                    e = r(this),
                    f = a.match(K) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = nb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "": V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++]) if (1 === c.nodeType && (" " + mb(nb(c)) + " ").indexOf(b) > -1) return ! 0;
            return ! 1
        }
    });
    var ob = /\r/g;
    r.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = r.isFunction(a),
                this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "": "number" == typeof e ? e += "": r.isArray(e) && (e = r.map(e,
                    function(a) {
                        return null == a ? "": a + ""
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()],
                b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c: (c = e.value, "string" == typeof c ? c.replace(ob, "") : null == c ? "": c)
            }
        }
    }),
    r.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = r.find.attr(a, "value");
                    return null != b ? b: mb(r.text(a))
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e = a.options,
                    f = a.selectedIndex,
                    g = "select-one" === a.type,
                    h = g ? null: [],
                    i = g ? f + 1 : e.length;
                    for (d = f < 0 ? i: g ? f: 0; d < i; d++) if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                        if (b = r(c).val(), g) return b;
                        h.push(b)
                    }
                    return h
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                    f = r.makeArray(b),
                    g = e.length;
                    while (g--) d = e[g],
                    (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1),
                    f
                }
            }
        }
    }),
    r.each(["radio", "checkbox"],
    function() {
        r.valHooks[this] = {
            set: function(a, b) {
                if (r.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1
            }
        },
        o.checkOn || (r.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var pb = /^(?:focusinfocus|focusoutblur)$/;
    r.extend(r.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, k, m, n, o = [e || d],
            p = l.call(b, "type") ? b.type: b,
            q = l.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b: new r.Event(p, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {},
            f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h),
                    i = h;
                    i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a)
                }
                g = 0;
                while ((h = o[g++]) && !b.isPropagationStopped()) b.type = g > 1 ? j: n.bindType || p,
                m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"),
                m && m.apply(h, c),
                m = k && h[k],
                m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = p,
                f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)),
                b.result
            }
        },
        simulate: function(a, b, c) {
            var d = r.extend(new r.Event, c, {
                type: a,
                isSimulated: !0
            });
            r.event.trigger(d, null, b)
        }
    }),
    r.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                r.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return r.event.trigger(a, b, c, !0)
        }
    }),
    r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
    function(a, b) {
        r.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }),
    r.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    o.focusin = "onfocusin" in a,
    o.focusin || r.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = function(a) {
            r.event.simulate(b, a.target, r.event.fix(a))
        };
        r.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                e = V.access(d, b);
                e || d.addEventListener(a, c, !0),
                V.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                e = V.access(d, b) - 1;
                e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b))
            }
        }
    });
    var qb = a.location,
    rb = r.now(),
    sb = /\?/;
    r.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = (new a.DOMParser).parseFromString(b, "text/xml")
        } catch(d) {
            c = void 0
        }
        return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b),
        c
    };
    var tb = /\[\]$/,
    ub = /\r?\n/g,
    vb = /^(?:submit|button|image|reset|file)$/i,
    wb = /^(?:input|select|textarea|keygen)/i;
    function xb(a, b, c, d) {
        var e;
        if (r.isArray(b)) r.each(b,
        function(b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == typeof e && null != e ? b: "") + "]", e, c, d)
        });
        else if (c || "object" !== r.type(b)) d(a, b);
        else for (e in b) xb(a + "[" + e + "]", b[e], c, d)
    }
    r.param = function(a, b) {
        var c, d = [],
        e = function(a, b) {
            var c = r.isFunction(b) ? b() : b;
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "": c)
        };
        if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a,
        function() {
            e(this.name, this.value)
        });
        else for (c in a) xb(c, a[c], b, e);
        return d.join("&")
    },
    r.fn.extend({
        serialize: function() {
            return r.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = r.prop(this, "elements");
                return a ? r.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ia.test(a))
            }).map(function(a, b) {
                var c = r(this).val();
                return null == c ? null: r.isArray(c) ? r.map(c,
                function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ub, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ub, "\r\n")
                }
            }).get()
        }
    });
    var yb = /%20/g,
    zb = /#.*$/,
    Ab = /([?&])_=[^&]*/,
    Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Db = /^(?:GET|HEAD)$/,
    Eb = /^\/\//,
    Fb = {},
    Gb = {},
    Hb = "*/".concat("*"),
    Ib = d.createElement("a");
    Ib.href = qb.href;
    function Jb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
            f = b.toLowerCase().match(K) || [];
            if (r.isFunction(c)) while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Kb(a, b, c, d) {
        var e = {},
        f = a === Gb;
        function g(h) {
            var i;
            return e[h] = !0,
            r.each(a[h] || [],
            function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Lb(a, b) {
        var c, d, e = r.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a: d || (d = {}))[c] = b[c]);
        return d && r.extend(!0, a, d),
        a
    }
    function Mb(a, b, c) {
        var d, e, f, g, h = a.contents,
        i = a.dataTypes;
        while ("*" === i[0]) i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        if (f) return f !== i[0] && i.unshift(f),
        c[f]
    }
    function Nb(a, b, c, d) {
        var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0) if (g && a["throws"]) b = g(b);
            else try {
                b = g(b)
            } catch(l) {
                return {
                    state: "parsererror",
                    error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success",
            data: b
        }
    }
    r.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: qb.href,
            type: "GET",
            isLocal: Cb.test(qb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Hb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": r.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a)
        },
        ajaxPrefilter: Jb(Fb),
        ajaxTransport: Jb(Gb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0),
            c = c || {};
            var e, f, g, h, i, j, k, l, m, n, o = r.ajaxSetup({},
            c),
            p = o.context || o,
            q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
            s = r.Deferred(),
            t = r.Callbacks("once memory"),
            u = o.statusCode || {},
            v = {},
            w = {},
            x = "canceled",
            y = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (k) {
                        if (!h) {
                            h = {};
                            while (b = Bb.exec(g)) h[b[1].toLowerCase()] = b[2]
                        }
                        b = h[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function() {
                    return k ? g: null
                },
                setRequestHeader: function(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return null == k && (o.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (k) y.always(a[y.status]);
                    else for (b in a) u[b] = [u[b], a[b]];
                    return this
                },
                abort: function(a) {
                    var b = a || x;
                    return e && e.abort(b),
                    A(0, b),
                    this
                }
            };
            if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = o.url,
                    j.href = j.href,
                    o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host
                } catch(z) {
                    o.crossDomain = !0
                }
            }
            if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;
            l = r.event && o.global,
            l && 0 === r.active++&&r.event.trigger("ajaxStart"),
            o.type = o.type.toUpperCase(),
            o.hasContent = !Db.test(o.type),
            f = o.url.replace(zb, ""),
            o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&": "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, "$1"), n = (sb.test(f) ? "&": "?") + "_=" + rb+++n), o.url = f + n),
            o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])),
            (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType),
            y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01": "") : o.accepts["*"]);
            for (m in o.headers) y.setRequestHeader(m, o.headers[m]);
            if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();
            if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
                o.async && o.timeout > 0 && (i = a.setTimeout(function() {
                    y.abort("timeout")
                },
                o.timeout));
                try {
                    k = !1,
                    e.send(v, A)
                } catch(z) {
                    if (k) throw z;
                    A( - 1, z)
                }
            } else A( - 1, "No Transport");
            function A(b, c, d, h) {
                var j, m, n, v, w, x = c;
                k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent": 304 === b ? x = "notmodified": (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess": "ajaxError", [y, o, j ? m: n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")))
            }
            return y
        },
        getJSON: function(a, b, c) {
            return r.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return r.get(a, void 0, b, "script")
        }
    }),
    r.each(["get", "post"],
    function(a, b) {
        r[b] = function(a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0),
            r.ajax(r.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            },
            r.isPlainObject(a) && a))
        }
    }),
    r._evalUrl = function(a) {
        return r.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    r.fn.extend({
        wrapAll: function(a) {
            var b;
            return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)),
            this
        },
        wrapInner: function(a) {
            return r.isFunction(a) ? this.each(function(b) {
                r(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = r(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = r.isFunction(a);
            return this.each(function(c) {
                r(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function(a) {
            return this.parent(a).not("body").each(function() {
                r(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    r.expr.pseudos.hidden = function(a) {
        return ! r.expr.pseudos.visible(a)
    },
    r.expr.pseudos.visible = function(a) {
        return !! (a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    },
    r.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    };
    var Ob = {
        0 : 200,
        1223 : 204
    },
    Pb = r.ajaxSettings.xhr();
    o.cors = !!Pb && "withCredentials" in Pb,
    o.ajax = Pb = !!Pb,
    r.ajaxTransport(function(b) {
        var c, d;
        if (o.cors || Pb && !b.crossDomain) return {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType),
                b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        }: {
                            text: h.responseText
                        },
                        h.getAllResponseHeaders()))
                    }
                },
                h.onload = c(),
                d = h.onerror = c("error"),
                void 0 !== h.onabort ? h.onabort = d: h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d()
                    })
                },
                c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null)
                } catch(i) {
                    if (c) throw i
                }
            },
            abort: function() {
                c && c()
            }
        }
    }),
    r.ajaxPrefilter(function(a) {
        a.crossDomain && (a.contents.script = !1)
    }),
    r.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return r.globalEval(a),
                a
            }
        }
    }),
    r.ajaxPrefilter("script",
    function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET")
    }),
    r.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = r("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(),
                        c = null,
                        a && f("error" === a.type ? 404 : 200, a.type)
                    }),
                    d.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Qb = [],
    Rb = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Qb.pop() || r.expando + "_" + rb++;
            return this[a] = !0,
            a
        }
    }),
    r.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Rb.test(b.url) ? "url": "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");
        if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&": "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || r.error(e + " was not called"),
            g[0]
        },
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        },
        d.always(function() {
            void 0 === f ? r(a).removeProp(e) : a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)),
            g && r.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script"
    }),
    o.createHTMLDocument = function() {
        var a = d.implementation.createHTMLDocument("").body;
        return a.innerHTML = "<form></form><form></form>",
        2 === a.childNodes.length
    } (),
    r.parseHTML = function(a, b, c) {
        if ("string" != typeof a) return [];
        "boolean" == typeof b && (c = b, b = !1);
        var e, f, g;
        return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d),
        f = B.exec(a),
        g = !c && [],
        f ? [b.createElement(f[1])] : (f = pa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes))
    },
    r.fn.load = function(a, b, c) {
        var d, e, f, g = this,
        h = a.indexOf(" ");
        return h > -1 && (d = mb(a.slice(h)), a = a.slice(0, h)),
        r.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"),
        g.length > 0 && r.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments,
            g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a)
        }).always(c &&
        function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }),
        this
    },
    r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(a, b) {
        r.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    r.expr.pseudos.animated = function(a) {
        return r.grep(r.timers,
        function(b) {
            return a === b.elem
        }).length
    };
    function Sb(a) {
        return r.isWindow(a) ? a: 9 === a.nodeType && a.defaultView
    }
    r.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = r.css(a, "position"),
            l = r(a),
            m = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = r.css(a, "top"),
            i = r.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
            r.isFunction(b) && (b = b.call(a, c, r.extend({},
            h))),
            null != b.top && (m.top = b.top - h.top + g),
            null != b.left && (m.left = b.left - h.left + e),
            "using" in b ? b.using.call(a, m) : l.css(m)
        }
    },
    r.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this: this.each(function(b) {
                r.offset.setOffset(this, a, b)
            });
            var b, c, d, e, f = this[0];
            if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, {
                top: d.top + c.pageYOffset - b.clientTop,
                left: d.left + c.pageXOffset - b.clientLeft
            }) : d) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = {
                    top: d.top + r.css(a[0], "borderTopWidth", !0),
                    left: d.left + r.css(a[0], "borderLeftWidth", !0)
                }),
                {
                    top: b.top - d.top - r.css(c, "marginTop", !0),
                    left: b.left - d.left - r.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && "static" === r.css(a, "position")) a = a.offsetParent;
                return a || qa
            })
        }
    }),
    r.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(a, b) {
        var c = "pageYOffset" === b;
        r.fn[a] = function(d) {
            return S(this,
            function(a, d, e) {
                var f = Sb(a);
                return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset: e, c ? e: f.pageYOffset) : a[d] = e)
            },
            a, d, arguments.length)
        }
    }),
    r.each(["top", "left"],
    function(a, b) {
        r.cssHooks[b] = Oa(o.pixelPosition,
        function(a, c) {
            if (c) return c = Na(a, b),
            La.test(c) ? r(a).position()[b] + "px": c
        })
    }),
    r.each({
        Height: "height",
        Width: "width"
    },
    function(a, b) {
        r.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        },
        function(c, d) {
            r.fn[d] = function(e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                h = c || (e === !0 || f === !0 ? "margin": "border");
                return S(this,
                function(b, c, e) {
                    var f;
                    return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h)
                },
                b, g ? e: void 0, g)
            }
        })
    }),
    r.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }),
    r.parseJSON = JSON.parse,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return r
    });
    var Tb = a.jQuery,
    Ub = a.$;
    return r.noConflict = function(b) {
        return a.$ === r && (a.$ = Ub),
        b && a.jQuery === r && (a.jQuery = Tb),
        r
    },
    b || (a.jQuery = a.$ = r),
    r
}); (function(e) {
    var m = function(p, o) {
        return (p << o) | (p >>> (32 - o))
    };
    var a = function(s, p) {
        var u, o, r, t, q;
        r = (s & 2147483648);
        t = (p & 2147483648);
        u = (s & 1073741824);
        o = (p & 1073741824);
        q = (s & 1073741823) + (p & 1073741823);
        if (u & o) {
            return (q ^ 2147483648 ^ r ^ t)
        }
        if (u | o) {
            if (q & 1073741824) {
                return (q ^ 3221225472 ^ r ^ t)
            } else {
                return (q ^ 1073741824 ^ r ^ t)
            }
        } else {
            return (q ^ r ^ t)
        }
    };
    var n = function(o, q, p) {
        return (o & q) | ((~o) & p)
    };
    var l = function(o, q, p) {
        return (o & p) | (q & (~p))
    };
    var j = function(o, q, p) {
        return (o ^ q ^ p)
    };
    var i = function(o, q, p) {
        return (q ^ (o | (~p)))
    };
    var g = function(q, p, v, u, o, r, t) {
        q = a(q, a(a(n(p, v, u), o), t));
        return a(m(q, r), p)
    };
    var c = function(q, p, v, u, o, r, t) {
        q = a(q, a(a(l(p, v, u), o), t));
        return a(m(q, r), p)
    };
    var h = function(q, p, v, u, o, r, t) {
        q = a(q, a(a(j(p, v, u), o), t));
        return a(m(q, r), p)
    };
    var d = function(q, p, v, u, o, r, t) {
        q = a(q, a(a(i(p, v, u), o), t));
        return a(m(q, r), p)
    };
    var f = function(r) {
        var v;
        var q = r.length;
        var p = q + 8;
        var u = (p - (p % 64)) / 64;
        var t = (u + 1) * 16;
        var w = Array(t - 1);
        var o = 0;
        var s = 0;
        while (s < q) {
            v = (s - (s % 4)) / 4;
            o = (s % 4) * 8;
            w[v] = (w[v] | (r.charCodeAt(s) << o));
            s++
        }
        v = (s - (s % 4)) / 4;
        o = (s % 4) * 8;
        w[v] = w[v] | (128 << o);
        w[t - 2] = q << 3;
        w[t - 1] = q >>> 29;
        return w
    };
    var b = function(r) {
        var q = "",
        o = "",
        s, p;
        for (p = 0; p <= 3; p++) {
            s = (r >>> (p * 8)) & 255;
            o = "0" + s.toString(16);
            q = q + o.substr(o.length - 2, 2)
        }
        return q
    };
    var k = function(p) {
        p = p.replace(/\x0d\x0a/g, "\x0a");
        var o = "";
        for (var r = 0; r < p.length; r++) {
            var q = p.charCodeAt(r);
            if (q < 128) {
                o += String.fromCharCode(q)
            } else {
                if ((q > 127) && (q < 2048)) {
                    o += String.fromCharCode((q >> 6) | 192);
                    o += String.fromCharCode((q & 63) | 128)
                } else {
                    o += String.fromCharCode((q >> 12) | 224);
                    o += String.fromCharCode(((q >> 6) & 63) | 128);
                    o += String.fromCharCode((q & 63) | 128)
                }
            }
        }
        return o
    };
    e.extend({
        md5: function(o) {
            var v = Array();
            var G, H, p, u, F, Q, P, N, K;
            var D = 7,
            B = 12,
            z = 17,
            w = 22;
            var O = 5,
            L = 9,
            J = 14,
            I = 20;
            var t = 4,
            s = 11,
            r = 16,
            q = 23;
            var E = 6,
            C = 10,
            A = 15,
            y = 21;
            o = k(o);
            v = f(o);
            Q = 1732584193;
            P = 4023233417;
            N = 2562383102;
            K = 271733878;
            for (G = 0; G < v.length; G += 16) {
                H = Q;
                p = P;
                u = N;
                F = K;
                Q = g(Q, P, N, K, v[G + 0], D, 3614090360);
                K = g(K, Q, P, N, v[G + 1], B, 3905402710);
                N = g(N, K, Q, P, v[G + 2], z, 606105819);
                P = g(P, N, K, Q, v[G + 3], w, 3250441966);
                Q = g(Q, P, N, K, v[G + 4], D, 4118548399);
                K = g(K, Q, P, N, v[G + 5], B, 1200080426);
                N = g(N, K, Q, P, v[G + 6], z, 2821735955);
                P = g(P, N, K, Q, v[G + 7], w, 4249261313);
                Q = g(Q, P, N, K, v[G + 8], D, 1770035416);
                K = g(K, Q, P, N, v[G + 9], B, 2336552879);
                N = g(N, K, Q, P, v[G + 10], z, 4294925233);
                P = g(P, N, K, Q, v[G + 11], w, 2304563134);
                Q = g(Q, P, N, K, v[G + 12], D, 1804603682);
                K = g(K, Q, P, N, v[G + 13], B, 4254626195);
                N = g(N, K, Q, P, v[G + 14], z, 2792965006);
                P = g(P, N, K, Q, v[G + 15], w, 1236535329);
                Q = c(Q, P, N, K, v[G + 1], O, 4129170786);
                K = c(K, Q, P, N, v[G + 6], L, 3225465664);
                N = c(N, K, Q, P, v[G + 11], J, 643717713);
                P = c(P, N, K, Q, v[G + 0], I, 3921069994);
                Q = c(Q, P, N, K, v[G + 5], O, 3593408605);
                K = c(K, Q, P, N, v[G + 10], L, 38016083);
                N = c(N, K, Q, P, v[G + 15], J, 3634488961);
                P = c(P, N, K, Q, v[G + 4], I, 3889429448);
                Q = c(Q, P, N, K, v[G + 9], O, 568446438);
                K = c(K, Q, P, N, v[G + 14], L, 3275163606);
                N = c(N, K, Q, P, v[G + 3], J, 4107603335);
                P = c(P, N, K, Q, v[G + 8], I, 1163531501);
                Q = c(Q, P, N, K, v[G + 13], O, 2850285829);
                K = c(K, Q, P, N, v[G + 2], L, 4243563512);
                N = c(N, K, Q, P, v[G + 7], J, 1735328473);
                P = c(P, N, K, Q, v[G + 12], I, 2368359562);
                Q = h(Q, P, N, K, v[G + 5], t, 4294588738);
                K = h(K, Q, P, N, v[G + 8], s, 2272392833);
                N = h(N, K, Q, P, v[G + 11], r, 1839030562);
                P = h(P, N, K, Q, v[G + 14], q, 4259657740);
                Q = h(Q, P, N, K, v[G + 1], t, 2763975236);
                K = h(K, Q, P, N, v[G + 4], s, 1272893353);
                N = h(N, K, Q, P, v[G + 7], r, 4139469664);
                P = h(P, N, K, Q, v[G + 10], q, 3200236656);
                Q = h(Q, P, N, K, v[G + 13], t, 681279174);
                K = h(K, Q, P, N, v[G + 0], s, 3936430074);
                N = h(N, K, Q, P, v[G + 3], r, 3572445317);
                P = h(P, N, K, Q, v[G + 6], q, 76029189);
                Q = h(Q, P, N, K, v[G + 9], t, 3654602809);
                K = h(K, Q, P, N, v[G + 12], s, 3873151461);
                N = h(N, K, Q, P, v[G + 15], r, 530742520);
                P = h(P, N, K, Q, v[G + 2], q, 3299628645);
                Q = d(Q, P, N, K, v[G + 0], E, 4096336452);
                K = d(K, Q, P, N, v[G + 7], C, 1126891415);
                N = d(N, K, Q, P, v[G + 14], A, 2878612391);
                P = d(P, N, K, Q, v[G + 5], y, 4237533241);
                Q = d(Q, P, N, K, v[G + 12], E, 1700485571);
                K = d(K, Q, P, N, v[G + 3], C, 2399980690);
                N = d(N, K, Q, P, v[G + 10], A, 4293915773);
                P = d(P, N, K, Q, v[G + 1], y, 2240044497);
                Q = d(Q, P, N, K, v[G + 8], E, 1873313359);
                K = d(K, Q, P, N, v[G + 15], C, 4264355552);
                N = d(N, K, Q, P, v[G + 6], A, 2734768916);
                P = d(P, N, K, Q, v[G + 13], y, 1309151649);
                Q = d(Q, P, N, K, v[G + 4], E, 4149444226);
                K = d(K, Q, P, N, v[G + 11], C, 3174756917);
                N = d(N, K, Q, P, v[G + 2], A, 718787259);
                P = d(P, N, K, Q, v[G + 9], y, 3951481745);
                Q = a(Q, H);
                P = a(P, p);
                N = a(N, u);
                K = a(K, F)
            }
            var M = b(Q) + b(P) + b(N) + b(K);
            return M.toLowerCase()
        }
    })
})(jQuery);
var global = this;
Array.prototype.remove = function(b) {
    var a = this.indexOf(b);
    if (a != -1) {
        this.splice(a, 1)
    }
};
function defineClass(a) {
    var d = a.init;
    if (!d) {
        d = function() {}
    }
    var c = a.superClass;
    if (c) {
        d.prototype = new c();
        d.prototype.constructor = d
    }
    var e = a.statics;
    if (e) {
        for (var b in e) {
            d[b] = e[b]
        }
    }
    for (var b in a) {
        d.prototype[b] = a[b]
    }
    return d
}
function UIApplicationMain(a, c) {
    if (a == null) {
        a = UIApplication
    }
    var d = new a();
    var b = new c();
    d.setDelegate(b);
    $(document).ready(function() {
        d._applicationDidFinishLaunching()
    })
}
NSObject = defineClass({
    superClass: Object
});
CGPoint = defineClass({
    init: function(a, b) {
        if (arguments.length == 1) {
            this.x = arguments[0].x;
            this.y = arguments[0].y
        } else {
            this.x = (a != null) ? a: 0;
            this.y = (a != null) ? b: 0
        }
    },
    isEqual: function(a) {
        return this.x == a.x && this.y == a.y
    },
    initWithCoder: function(a) {
        this.x = a.decodeObjectForKey("x");
        this.y = a.decodeObjectForKey("y")
    },
    encodeWithCoder: function(a) {
        a.encodeObjectForKey(this.x, "x");
        a.encodeObjectForKey(this.y, "y")
    }
});
CGSize = defineClass({
    init: function(b, a) {
        if (arguments.length == 1) {
            this.width = arguments[0].width;
            this.height = arguments[0].height
        } else {
            this.width = (b != null) ? b: 0;
            this.height = (a != null) ? a: 0
        }
    },
    isEqual: function(a) {
        return this.width == a.width && this.height == a.height
    },
    initWithCoder: function(a) {
        this.width = a.decodeObjectForKey("width");
        this.height = a.decodeObjectForKey("height")
    },
    encodeWithCoder: function(a) {
        a.encodeObjectForKey(this.width, "width");
        a.encodeObjectForKey(this.height, "height")
    }
});
CGRect = defineClass({
    init: function(b, d, c, a) {
        if (arguments.length == 1) {
            this.origin = new CGPoint(arguments[0].origin);
            this.size = new CGSize(arguments[0].size)
        } else {
            this.origin = new CGPoint(b, d);
            this.size = new CGSize(c, a)
        }
    },
    isEqual: function(a) {
        return this.origin.isEqual(a.origin) && this.size.isEqual(a.size)
    },
    initWithCoder: function(a) {
        this.origin = a.decodeObjectForKey("origin");
        this.size = a.decodeObjectForKey("size")
    },
    encodeWithCoder: function(a) {
        a.encodeObjectForKey(this.origin, "origin");
        a.encodeObjectForKey(this.size, "size")
    }
});
UIEdgeInsets = defineClass({
    init: function(d, c, a, b) {
        if (arguments.length == 1) {
            this.top = arguments[0].top;
            this.left = arguments[0].left;
            this.bottom = arguments[0].bottom;
            this.right = arguments[0].right
        } else {
            this.top = d != null ? d: 0;
            this.left = c != null ? c: 0;
            this.bottom = a != null ? a: 0;
            this.right = b != null ? b: 0
        }
    }
});
UIColor = defineClass({
    statics: {
        systemThemeColor: "rgb(0,122,255)",
        lightGrayColor: "rgb(170,170,170)"
    },
    init: function(f, e, c, d) {
        this.red = f != null ? f: 0;
        this.green = e != null ? e: 0;
        this.blue = c != null ? c: 0;
        this.alpha = d != null ? d: 1
    },
    rgba: function() {
        return "rgba(" + this.red * 255 + "," + this.green * 255 + "," + this.blue * 255 + "," + this.alpha + ")"
    }
});
UIImage = defineClass({
    init: function(c, b, a) {
        this.src = c;
        this.width = b ? b: 0;
        this.height = a ? a: 0
    },
    size: function() {
        return new CGSize(this.width, this.height)
    }
});
UIApplication = defineClass({
    statics: {
        sharedApplication: function() {
            return UIApplication.sInstance
        }
    },
    init: function() {
        UIApplication.sInstance = this;
        this.mWindows = []
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    _applicationDidFinishLaunching: function() {
        if (this.mDelegate.applicationDidFinishLaunching) {
            this.mDelegate.applicationDidFinishLaunching(this)
        }
    },
    _addWindow: function(a) {
        this.mWindows.push(a);
        $("body").width(UIScreen.mainScreen().bounds().size.width);
        $("body").append(a.layer())
    },
    _removeWindow: function(a) {
        this.mWindows.remove(a);
        a.layer().detach()
    },
    _setKeyWindow: function(a) {
        this.mKeyWindow = a
    },
    keyWindow: function() {
        return this.mKeyWindow
    }
});
UIScreen = defineClass({
    statics: {
        mainScreen: function() {
            if (!UIScreen.sInstance) {
                UIScreen.sInstance = new UIScreen()
            }
            return UIScreen.sInstance
        }
    },
    init: function() {
        this.mMinWidth = this.mMinHeight = 0
    },
    setMinWidth: function(a) {
        this.mMinWidth = a
    },
    setMinHeight: function(a) {
        this.mMinHeight = a
    },
    bounds: function() {
        var c = this.deviceZoom();
        var b = Math.max(this.mMinWidth, window.screen.availWidth);
        var a = Math.max(this.mMinHeight, window.screen.availHeight);
        return new CGRect(0, 0, b / c, a / c)
    },
    scale: function() {
        if (!this.mScale) {
            var a = (window.devicePixelRatio / this.deviceZoom()) || 1;
            var b = $("<canvas/>")[0].getContext("2d");
            var c = b.webkitBackingStorePixelRatio || b.mozBackingStorePixelRatio || b.msBackingStorePixelRatio || b.oBackingStorePixelRatio || b.backingStorePixelRatio || 1;
            this.mScale = a / c
        }
        return this.mScale
    },
    deviceZoom: function() {
        if (window.outerWidth > 0 && window.innerWidth > 0) {
            return window.outerWidth / window.innerWidth
        }
        return 1
    }
});
CGAffineTransform = defineClass({
    statics: {
        Translation: function(b, a) {
            return new CGAffineTransform([1, 0, b, 0, 1, a, 0, 0, 1])
        },
        Scale: function(b, a) {
            return new CGAffineTransform([b, 0, 0, 0, a, 0, 0, 0, 1])
        },
        Rotation: function(a) {
            return new CGAffineTransform([Math.cos(a), -Math.sin(a), 0, Math.sin(a), Math.cos(a), 0, 0, 0, 1])
        }
    },
    init: function(a) {
        if (a == null) {
            this.mValues = [1, 0, 0, 0, 1, 0, 0, 0, 1]
        } else {
            if (a.constructor == CGAffineTransform) {
                var b = a;
                this.mValues = b.values().slice()
            } else {
                this.mValues = a
            }
        }
    },
    values: function() {
        return this.mValues
    },
    translate: function(b, a) {
        this.concat(CGAffineTransform.Translation(b, a))
    },
    scale: function(b, a) {
        this.concat(CGAffineTransform.Scale(b, a))
    },
    rotate: function(a) {
        this.concat(CGAffineTransform.Rotation(a))
    },
    concat: function(c) {
        var a = this.values();
        var b = c.values();
        this.mValues = [a[0] * b[0] + a[1] * b[3] + a[2] * b[6], a[0] * b[1] + a[1] * b[4] + a[2] * b[7], a[0] * b[2] + a[1] * b[5] + a[2] * b[8], a[3] * b[0] + a[4] * b[3] + a[5] * b[6], a[3] * b[1] + a[4] * b[4] + a[5] * b[7], a[3] * b[2] + a[4] * b[5] + a[5] * b[8], a[6] * b[0] + a[7] * b[3] + a[8] * b[6], a[6] * b[1] + a[7] * b[4] + a[8] * b[7], a[6] * b[2] + a[7] * b[5] + a[8] * b[8]]
    },
    css3: function() {
        return "matrix(" + this.mValues[0] + "," + this.mValues[3] + "," + this.mValues[1] + "," + this.mValues[4] + "," + this.mValues[2] + "," + this.mValues[5] + ")"
    }
});
UIView = defineClass({
    init: function(a) {
        this.mLayer = this.layerClass();
        this.mLayer.css("position", "absolute");
        this.mSubviews = [];
        this.mFrame = new CGRect();
        this.mBounds = new CGRect();
        this.mAlpha = 1;
        this.mTransform = new CGAffineTransform();
        this.mUserInteractionEnabled = true;
        if (this.drawRect) {
            this.mCanvas = $("<canvas/>");
            this.mCanvas.css("position", "absolute");
            this.mLayer.append(this.mCanvas)
        }
        if (a) {
            this.setFrame(a)
        }
    },
    layerClass: function() {
        return $("<div/>")
    },
    layer: function() {
        return this.mLayer
    },
    canvas: function() {
        return this.mCanvas
    },
    frame: function() {
        return new CGRect(this.mFrame)
    },
    setFrame: function(c) {
        if (UIView.AnimationGroup) {
            var b = new UIAnimation(this, "frame", this.mFrame, c);
            UIView.AnimationGroup.addAnimation(b);
            return
        }
        var d = this.mFrame;
        this.mFrame = new CGRect(c);
        this.mBounds.size = new CGSize(c.size);
        this.mLayer.css({
            left: c.origin.x,
            top: c.origin.y,
            width: c.size.width > 0 ? c.size.width: "auto",
            height: c.size.height > 0 ? c.size.height: "auto"
        });
        if (this.mCanvas) {
            var a = UIScreen.mainScreen().scale();
            this.mCanvas.attr("width", c.size.width > 0 ? c.size.width * a + "px": "auto");
            this.mCanvas.attr("height", c.size.height > 0 ? c.size.height * a + "px": "auto");
            this.mCanvas.css("width", c.size.width > 0 ? c.size.width + "px": "auto");
            this.mCanvas.css("height", c.size.height > 0 ? c.size.height + "px": "auto")
        }
        if (d) {
            this._autoresizeSubviews(c, d)
        }
        this.setNeedsLayout();
        this.setNeedsDisplay()
    },
    bounds: function() {
        return new CGRect(this.mBounds)
    },
    setBounds: function(a) {
        if (UIView.AnimationGroup) {
            var b = new UIAnimation(this, "bounds", this.mBounds, a);
            UIView.AnimationGroup.addAnimation(b);
            return
        }
        this.mBounds = new CGRect(a);
        this.layer()[0].scrollLeft = a.origin.x;
        this.layer()[0].scrollTop = a.origin.y
    },
    center: function() {
        return new CGPoint(this.mFrame.origin.x + this.mFrame.size.width / 2, this.mFrame.origin.y + this.mFrame.size.height / 2)
    },
    setCenter: function(a) {
        this.setFrame(new CGRect(a.x - this.mFrame.size.width / 2, a.y - this.mFrame.size.height / 2, this.mFrame.size.width, this.mFrame.size.height))
    },
    size: function() {
        return new CGSize(this.mFrame.size)
    },
    width: function() {
        return this.mFrame.size.width
    },
    height: function() {
        return this.mFrame.size.height
    },
    left: function() {
        return this.mFrame.origin.x
    },
    top: function() {
        return this.mFrame.origin.y
    },
    right: function() {
        return this.mFrame.origin.x + this.mFrame.size.width
    },
    bottom: function() {
        return this.mFrame.origin.y + this.mFrame.size.height
    },
    setBackgroundColor: function(a) {
        this.mBackgroundColor = a;
        if (a) {
            if (typeof a == "string") {
                this.layer().css("background-color", a)
            } else {
                this.layer().css("background-color", a.rgba())
            }
        } else {
            this.layer().removeAttr("background-color")
        }
    },
    backgroundColor: function() {
        return this.mBackgroundColor
    },
    addSubview: function(a) {
        a.removeFromSuperview();
        this.mSubviews.push(a);
        a.mSuperview = this;
        this.mLayer.append(a.layer());
        a.setNeedsDisplay();
        var b = this.window();
        if (b) {
            a.notifyMoveToWindow()
        }
    },
    notifyMoveToWindow: function() {
        if (this.mViewController) {
            this.mViewController.viewDidAppear()
        }
        for (var a = 0; a < this.mSubviews.length; a++) {
            this.mSubviews[a].notifyMoveToWindow()
        }
    },
    removeFromSuperview: function() {
        if (this.mSuperview) {
            var b = this.mSuperview;
            b.mSubviews.remove(this);
            this.layer().detach();
            var a = this.window();
            this.mSuperview = null;
            if (a) {
                this.notifyDetachFromWindow()
            }
        }
    },
    notifyDetachFromWindow: function() {
        if (this.mViewController) {
            this.mViewController.viewDidDisappear()
        }
        for (var a = 0; a < this.mSubviews.length; a++) {
            this.mSubviews[a].notifyDetachFromWindow()
        }
    },
    superview: function() {
        return this.mSuperview
    },
    subviews: function() {
        return this.mSubviews.slice()
    },
    setNeedsDisplay: function() {
        if (this.mCanvas) {
            var a = this.mCanvas[0].getContext("2d");
            a.save();
            var b = UIScreen.mainScreen().scale();
            a.scale(b, b);
            a.clearRect(0, 0, this.mFrame.size.width, this.mFrame.size.height);
            this.drawRect(a);
            a.restore()
        }
    },
    setHidden: function(a) {
        this.mHidden = a;
        if (a) {
            this.mLayer.css("visibility", "hidden")
        } else {
            this.mLayer.css("visibility", "visible")
        }
    },
    isHidden: function() {
        return this.mHidden
    },
    _setViewController: function(a) {
        this.mViewController = a
    },
    sendSubviewToBack: function(a) {
        this.mLayer.prepend(a.layer())
    },
    bringSubviewToFront: function(a) {
        this.mLayer.append(a.layer())
    },
    sizeThatFits: function(a) {
        return this.frame().size
    },
    sizeToFit: function() {
        var a = this.frame();
        a.size = this.sizeThatFits(Number.MAX_VALUE, Number.MAX_VALUE);
        this.setFrame(a)
    },
    setNeedsLayout: function() {
        this.layoutSubviews()
    },
    layoutSubviews: function() {},
    setAutoresizingMask: function(a) {
        this.mAutoresizingMask = a
    },
    autoresizingMask: function() {
        return this.mAutoresizingMask
    },
    _autoresizeSubviews: function(h, d) {
        var k = d.size;
        var m = h.size;
        if (m.width != k.width || m.height != k.height) {
            for (var g = 0; g < this.mSubviews.length; g++) {
                var j = this.mSubviews[g];
                var f = j.autoresizingMask();
                var e = m.width - k.width;
                var c = 0;
                if ((f & UIView.Autoresizing.FlexibleLeftMargin) == UIView.Autoresizing.FlexibleLeftMargin) {
                    c += 1
                }
                if ((f & UIView.Autoresizing.FlexibleWidth) == UIView.Autoresizing.FlexibleWidth) {
                    c += 1
                }
                if ((f & UIView.Autoresizing.FlexibleRightMargin) == UIView.Autoresizing.FlexibleRightMargin) {
                    c += 1
                }
                if (c > 0) {
                    e /= c
                }
                var a = m.height - k.height;
                var l = 0;
                if ((f & UIView.Autoresizing.FlexibleTopMargin) == UIView.Autoresizing.FlexibleTopMargin) {
                    l += 1
                }
                if ((f & UIView.Autoresizing.FlexibleHeight) == UIView.Autoresizing.FlexibleHeight) {
                    l += 1
                }
                if ((f & UIView.Autoresizing.FlexibleBottomMargin) == UIView.Autoresizing.FlexibleBottomMargin) {
                    l += 1
                }
                if (l > 0) {
                    a /= l
                }
                var b = j.frame();
                if ((f & UIView.Autoresizing.FlexibleLeftMargin) == UIView.Autoresizing.FlexibleLeftMargin) {
                    b.origin.x += e
                }
                if ((f & UIView.Autoresizing.FlexibleWidth) == UIView.Autoresizing.FlexibleWidth) {
                    b.size.width += e
                }
                if ((f & UIView.Autoresizing.FlexibleTopMargin) == UIView.Autoresizing.FlexibleTopMargin) {
                    b.origin.y += a
                }
                if ((f & UIView.Autoresizing.FlexibleHeight) == UIView.Autoresizing.FlexibleHeight) {
                    b.size.height += a
                }
                j.setFrame(b)
            }
        }
    },
    alpha: function() {
        return this.mAlpha
    },
    setAlpha: function(b) {
        if (UIView.AnimationGroup) {
            var a = new UIAnimation(this, "alpha", this.mAlpha, b);
            UIView.AnimationGroup.addAnimation(a);
            return
        }
        this.mAlpha = b;
        this.layer().css("opacity", b)
    },
    window: function() {
        var a = this.mSuperview;
        while (a != null && a.constructor != UIWindow) {
            a = a.superview()
        }
        return a
    },
    tag: function() {
        return this.mTag
    },
    setTag: function(a) {
        this.mTag = a
    },
    convertRectFromView: function(d, c) {
        var a = this.convertPointFromView(d.origin, c);
        var b = new CGRect(d);
        b.origin = a;
        return b
    },
    convertRectToView: function(d, c) {
        var a = this.convertPointToView(d.origin, c);
        var b = new CGRect(d);
        b.origin = a;
        return b
    },
    convertPointToView: function(b, c) {
        var a = (c != null) ? c: this.window();
        return a.convertPointFromView(b, this)
    },
    convertPointFromView: function(j, i) {
        var g = new CGPoint(j);
        var b = new CGPoint();
        var f = (i != null) ? i: this.window();
        if (f == null) {
            return g
        }
        var d = f.superview();
        while (d != null) {
            var c = f.frame();
            b.x += c.origin.x;
            b.y += c.origin.y;
            var a = f.bounds();
            b.x -= a.origin.x;
            b.y -= a.origin.y;
            f = d;
            d = f.superview()
        }
        var k = new CGPoint();
        var h = this;
        var e = h.superview();
        while (e != null) {
            var c = h.frame();
            k.x += c.origin.x;
            k.y += c.origin.y;
            var a = h.bounds();
            k.x -= a.origin.x;
            k.y -= a.origin.y;
            h = e;
            e = h.superview()
        }
        if (f == h) {
            g.x += b.x;
            g.y += b.y;
            g.x -= k.x;
            g.y -= k.y
        }
        return g
    },
    transform: function() {
        return new CGAffineTransform(this.mTransform)
    },
    setTransform: function(a) {
        if (UIView.AnimationGroup) {
            var b = new UIAnimation(this, "transform", this.mTransform, a);
            UIView.AnimationGroup.addAnimation(b);
            return
        }
        this.mTransform = new CGAffineTransform(a);
        this.layer().css("transform", a.css3())
    },
    userData: function() {
        return this.mUserData
    },
    setUserData: function(a) {
        this.mUserData = a
    },
    isUserInteractionEnabled: function() {
        return this.mUserInteractionEnabled
    },
    setUserInteractionEnabled: function(a) {
        this.mUserInteractionEnabled = a
    },
    isFirstResponder: function() {
        return document.activeElement == this.mLayer[0]
    },
    becomeFirstResponder: function() {
        this.mLayer.focus()
    },
    resignFirstResponder: function() {
        this.mLayer.blur()
    },
    statics: {
        Autoresizing: {
            None: 0,
            FlexibleLeftMargin: 1 << 0,
            FlexibleWidth: 1 << 1,
            FlexibleRightMargin: 1 << 2,
            FlexibleTopMargin: 1 << 3,
            FlexibleHeight: 1 << 4,
            FlexibleBottomMargin: 1 << 5,
            FlexibleSize: (1 << 1) | (1 << 4),
            FlexibleMargin: (1 << 0) | (1 << 2) | (1 << 3) | (1 << 5)
        },
        animate: function(c, b, a) {
            UIView.AnimationGroup = new UIAnimationGroup(c, a);
            b();
            UIView.AnimationGroup.start();
            UIView.AnimationGroup = null
        }
    }
});
UIWindow = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a);
        UIApplication.sharedApplication()._addWindow(this);
        this.setHidden(true)
    },
    makeKeyAndVisible: function() {
        UIApplication.sharedApplication()._setKeyWindow(this);
        this.setHidden(false)
    },
    setRootViewController: function(b) {
        if (this.mRootViewController) {
            this.mRootViewController.view().removeFromSuperview()
        }
        if (b) {
            var a = b.view();
            a.setFrame(this.bounds());
            a.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
            this.addSubview(a)
        }
        this.mRootViewController = b
    },
    recycle: function() {
        UIApplication.sharedApplication()._removeWindow(this)
    },
    window: function() {
        return this
    }
});
UILabel = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a);
        this.mNumberOfLines = 1
    },
    layerClass: function() {
        return $("<div style='display: table'><span style='display: table-cell;vertical-align: middle'></span></div>")
    },
    setText: function(a) {
        $("span", this.layer()).text(a)
    },
    text: function() {
        return $("span", this.layer()).text()
    },
    setTextAlignment: function(a) {
        this.layer().css("text-align", a)
    },
    setFont: function(a) {
        this.layer().css("font", a)
    },
    setFontSize: function(a) {
        this.layer().css("font-size", a)
    },
    font: function() {
        var a = this.layer().css("font");
        if (!a) {
            a = this.layer().css("font-size");
            if (a) {
                a = a + " normal"
            }
        }
        return a
    },
    setTextColor: function(a) {
        this.layer().css("color", a)
    },
    sizeThatFits: function(c) {
        var b = this.font();
        var e = $("<span/>").text(this.text());
        if (b) {
            e.css("font", this.font())
        }
        $("body").append(e);
        var d = e.width();
        var a = e.height();
        if (this.mNumberOfLines != 1) {
            if (d > c.width) {
                var f = $("<div/>").text(this.text());
                if (b) {
                    f.css("font", this.font())
                }
                f.width(c.width);
                $("body").append(f);
                d = f.width();
                a = f.height();
                f.remove()
            }
        }
        e.remove();
        return new CGSize(d + 4, a + 4)
    },
    setNumberOfLines: function(a) {
        this.mNumberOfLines = a
    },
    lineHeight: function() {
        return this.layer().css("line-height")
    },
    setLineHeight: function(a) {
        return this.layer().css("line-height", a)
    }
});
UIImageView = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a)
    },
    layerClass: function() {
        return $('<img crossOrigin="Anonymous"/>')
    },
    setImage: function(a) {
        if (typeof img == "string") {
            this.mImage = new UIImage(a);
            this.layer().attr("src", a)
        } else {
            this.mImage = a;
            if (a) {
                this.layer().attr("src", a.src)
            } else {
                this.layer().removeAttr("src")
            }
        }
    },
    sizeThatFits: function(a) {
        return this.mImage ? this.mImage.size() : new CGSize()
    }
});
UIControl = defineClass({
    superClass: UIView,
    init: function(b) {
        UIView.call(this, b);
        this.mEnabled = true;
        this.mActionSet = [];
        var a = this;
        this.layer().mousedown(function() {
            if (a.isUserInteractionEnabled()) {
                a.setHighlighted(true)
            }
        });
        this.layer().mouseup(function() {
            if (a.isUserInteractionEnabled()) {
                a.setHighlighted(false);
                a.sendActionsForControlEvents(UIControl.Events.TouchUpInside)
            }
        });
        this.layer().mouseleave(function() {
            if (a.isUserInteractionEnabled()) {
                a.setHighlighted(false)
            }
        })
    },
    isEnabled: function() {
        return this.mEnabled
    },
    setEnabled: function(b) {
        var a = this.state();
        this.mEnabled = b;
        var c = this.state();
        if (c != a) {
            this.onStateChange(c);
            this.setNeedsDisplay()
        }
    },
    isHighlighted: function() {
        return this.mHighlighted
    },
    setHighlighted: function(b) {
        var a = this.state();
        this.mHighlighted = b;
        var c = this.state();
        if (c != a) {
            this.onStateChange(c);
            this.setNeedsDisplay()
        }
    },
    isSelected: function() {
        return this.mSelected
    },
    setSelected: function(b) {
        var a = this.state();
        this.mSelected = b;
        var c = this.state();
        if (c != a) {
            this.onStateChange(c);
            this.setNeedsDisplay()
        }
    },
    state: function() {
        if (this.mSelected) {
            return UIControl.State.Selected
        } else {
            if (this.mHighlighted) {
                return UIControl.State.Highlighted
            } else {
                if (this.mEnabled) {
                    return UIControl.State.Normal
                } else {
                    return UIControl.State.Disabled
                }
            }
        }
    },
    onStateChange: function(a) {},
    addTarget: function(b, a) {
        this.mActionSet.push({
            action: b,
            events: a
        })
    },
    removeTarget: function(b, a) {
        this.mActionSet.forEach(function(d, c) {
            if (d.action == b && d.events == a) {
                this.mActionSet.splice(c, 1)
            }
        })
    },
    sendActionsForControlEvents: function(b) {
        var a = this;
        this.mActionSet.forEach(function(c) {
            if (c.events == b) {
                if (c.action) {
                    c.action(a)
                }
            }
        })
    },
    statics: {
        State: {
            Normal: 0,
            Highlighted: 1,
            Selected: 2,
            Disabled: 3
        },
        Events: {
            TouchDown: 0,
            TouchDragInside: 1,
            TouchUpInside: 2,
            TouchUpOutside: 3,
            TouchCancel: 4,
            ValueChanged: 5
        }
    }
});
UIButton = defineClass({
    superClass: UIControl,
    init: function(b, a) {
        UIControl.call(this, b);
        this.mTitleMap = {};
        this.mTitleColorMap = {};
        this.mImageMap = {};
        this.mBackgroundImageMap = {};
        this.mTitleEdgeInsets = new UIEdgeInsets();
        this.mImageEdgeInsets = new UIEdgeInsets();
        this.mButtonType = a ? a: UIButton.Type.Custom
    },
    titleLabel: function() {
        if (!this.mTitleLabel) {
            this.mTitleLabel = new UILabel(this.bounds());
            this.mTitleLabel.setTextAlignment("center");
            this.addSubview(this.mTitleLabel);
            if (this.mButtonType == UIButton.Type.System) {
                this.setTitleColor(UIColor.systemThemeColor, UIControl.State.Normal);
                this.setTitleColor("rgba(0,122,255,0.5)", UIControl.State.Highlighted)
            }
        }
        return this.mTitleLabel
    },
    setTitle: function(b, a) {
        this.mTitleMap[a] = b;
        if (a == this.state()) {
            this.titleLabel().setText(b);
            this.setNeedsLayout()
        }
    },
    setTitleColor: function(a, b) {
        this.mTitleColorMap[b] = a;
        if (b == this.state()) {
            this.titleLabel().setTextColor(a)
        }
    },
    setTitleEdgeInsets: function(a) {
        this.mTitleEdgeInsets = new UIEdgeInsets(a)
    },
    imageView: function() {
        if (!this.mImageView) {
            this.mImageView = new UIImageView(this.bounds());
            this.addSubview(this.mImageView)
        }
        return this.mImageView
    },
    setImage: function(b, a) {
        this.mImageMap[a] = b;
        if (a == this.state()) {
            this.imageView().setImage(b);
            this.setNeedsLayout()
        }
    },
    setImageEdgeInsets: function(a) {
        this.mImageEdgeInsets = new UIEdgeInsets(a)
    },
    backgroundView: function() {
        if (!this.mBackgroundView) {
            this.mBackgroundView = new UIImageView(this.bounds());
            this.mBackgroundView.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
            this.addSubview(this.mBackgroundView);
            this.sendSubviewToBack(this.mBackgroundView)
        }
        return this.mBackgroundView
    },
    setBackgroundImage: function(b, a) {
        this.mBackgroundImageMap[a] = b;
        if (a == this.state()) {
            this.backgroundView().setImage(b)
        }
    },
    onStateChange: function(c) {
        var e = this.mTitleMap[c];
        if (e) {
            this.titleLabel().setText(e)
        }
        var b = this.mTitleColorMap[c];
        if (b) {
            this.titleLabel().setTextColor(b)
        }
        var d = this.mImageMap[c];
        if (d) {
            this.imageView().setImage(d)
        }
        var a = this.mBackgroundImageMap[c];
        if (a) {
            this.backgroundView().setImage(a)
        }
    },
    sizeThatFits: function(a) {
        var c = new CGSize(0, 0);
        if (this.mTitleLabel != null) {
            c = this.mTitleLabel.sizeThatFits(a)
        }
        var b = new CGSize(0, 0);
        if (this.mImageView != null) {
            b = this.mImageView.sizeThatFits(a)
        }
        return new CGSize(Math.max(c.width + this.mTitleEdgeInsets.left + this.mTitleEdgeInsets.right, b.width + this.mImageEdgeInsets.left + this.mImageEdgeInsets.right), Math.max(c.height + this.mTitleEdgeInsets.top + this.mTitleEdgeInsets.bottom, b.height + this.mImageEdgeInsets.top + this.mImageEdgeInsets.bottom))
    },
    layoutSubviews: function() {
        var f = this.bounds().size.width;
        var c = this.bounds().size.height;
        if (this.mTitleLabel != null) {
            var e = this.mTitleLabel.sizeThatFits(new CGSize(f, c));
            var b = Math.min((f - e.width) / 2 + this.mTitleEdgeInsets.left - this.mTitleEdgeInsets.right, f - e.width);
            var g = Math.min((c - e.height) / 2 + this.mTitleEdgeInsets.top - this.mTitleEdgeInsets.bottom, c - e.height);
            this.mTitleLabel.setFrame(new CGRect(b, g, e.width, e.height))
        }
        if (this.mImageView != null) {
            var e = this.mImageView.sizeThatFits(new CGSize(f, c));
            var b = Math.min((f - e.width) / 2 + this.mImageEdgeInsets.left - this.mImageEdgeInsets.right, f - e.width);
            var g = Math.min((c - e.height) / 2 + this.mImageEdgeInsets.top - this.mImageEdgeInsets.bottom, c - e.height);
            this.mImageView.setFrame(new CGRect(b, g, e.width, e.height))
        }
        if (this.mTitleLabel != null && this.mImageView != null) {
            var a = this.mImageView.center();
            a.x = (f - this.mImageView.width() - this.mTitleLabel.width()) / 2 + this.mImageView.width() / 2 + this.mImageEdgeInsets.left - this.mImageEdgeInsets.right;
            this.mImageView.setCenter(a);
            var d = this.mTitleLabel.center();
            d.x = (f - this.mImageView.width() - this.mTitleLabel.width()) / 2 + this.mImageView.width() + this.mTitleLabel.width() / 2 + this.mTitleEdgeInsets.left - this.mTitleEdgeInsets.right;
            this.mTitleLabel.setCenter(d)
        }
    },
    statics: {
        Type: {
            Custom: 0,
            System: 1
        }
    }
});
UITextField = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a)
    },
    layerClass: function() {
        return $("<input type='text'/>")
    },
    text: function() {
        return this.layer().val()
    },
    setText: function(a) {
        this.layer().val(a)
    },
    setTextAlignment: function(a) {
        this.layer().css("text-align", a)
    },
    setFont: function(a) {
        this.layer().css("font", a)
    },
    setFontSize: function(a) {
        this.layer().css("font-size", a)
    },
    font: function() {
        var a = this.layer().css("font");
        if (!a) {
            a = this.layer().css("font-size");
            if (a) {
                a = a + " normal"
            }
        }
        return a
    },
    setTextColor: function(a) {
        this.layer().css("color", a)
    },
    placeholder: function() {
        return this.layer().attr("placeholder")
    },
    setPlaceholder: function(a) {
        this.layer().attr("placeholder", a)
    }
});
UITextView = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a)
    },
    layerClass: function() {
        return $("<textarea/>")
    },
    text: function() {
        return this.layer().val()
    },
    setText: function(a) {
        this.layer().val(a)
    },
    setTextAlignment: function(a) {
        this.layer().css("text-align", a)
    },
    setFont: function(a) {
        this.layer().css("font", a)
    },
    setFontSize: function(a) {
        this.layer().css("font-size", a)
    },
    font: function() {
        var a = this.layer().css("font-size");
        if (a) {
            a = a + " normal"
        } else {
            a = this.layer().css("font")
        }
        return a
    },
    setTextColor: function(a) {
        this.layer().css("color", a)
    },
    sizeThatFits: function(c) {
        var b = this.font();
        var e = $("<span/>").text(this.text());
        if (b) {
            e.css("font", this.font())
        }
        $("body").append(e);
        var d = e.width();
        var a = e.height();
        if (d > c.width) {
            var f = $("<div/>").text(this.text());
            if (b) {
                f.css("font", this.font())
            }
            f.width(c.width);
            $("body").append(f);
            d = f.width();
            a = f.height();
            f.detach()
        }
        e.detach();
        return new CGSize(d + 4, a + 4)
    },
    sizeToFit: function() {
        var b = this.frame();
        var a = 0;
        if (!this.window()) {
            $("body").append(this.layer());
            a = this.layer()[0].scrollHeight;
            this.layer().detach()
        } else {
            a = this.layer()[0].scrollHeight
        }
        if (a > 0) {
            b.size.height = a
        }
        this.setFrame(b)
    }
});
UIScrollView = defineClass({
    superClass: UIView,
    init: function(b) {
        UIView.call(this, b);
        this.layer().css("overflow", "scroll");
        var a = this;
        this.layer().scroll(function() {
            var c = a.layer()[0].scrollLeft;
            var e = a.layer()[0].scrollTop;
            var d = new CGPoint(c, e);
            if (!d.isEqual(a.contentOffset())) {
                a.setContentOffset(d)
            }
            if (a.mDelegate) {
                a.mDelegate.scrollViewDidScroll(a)
            }
        })
    },
    contentOffset: function() {
        return this.bounds().origin
    },
    setContentOffset: function(c, b) {
        var a = this.bounds();
        a.origin = new CGPoint(c);
        this.setBounds(a)
    },
    delegate: function() {
        return this.mDelegate
    },
    setDelegate: function(a) {
        this.mDelegate = a
    }
});
UIViewController = defineClass({
    view: function() {
        if (!this.mView) {
            this.loadView()
        }
        return this.mView
    },
    setView: function(a) {
        this.mView = a;
        a._setViewController(this);
        this.viewDidLoad()
    },
    loadView: function() {
        if (!this.mView) {
            var a = new UIView(UIScreen.mainScreen().bounds());
            a.setBackgroundColor("#ffffff");
            this.setView(a)
        }
    },
    viewDidLoad: function() {},
    viewDidAppear: function() {},
    viewDidDisappear: function() {},
    navigationItem: function() {
        if (this.mNavigationItem == null) {
            this.mNavigationItem = new UINavigationItem()
        }
        return this.mNavigationItem
    },
    addChildViewController: function(a) {
        a.removeFromParentViewController();
        if (!this.mChildViewControllers) {
            this.mChildViewControllers = []
        }
        this.mChildViewControllers.push(a);
        a.mParentViewController = this
    },
    removeFromParentViewController: function() {
        if (this.mParentViewController != null) {
            this.mParentViewController.mChildViewControllers.remove(this);
            this.mParentViewController = null
        }
    },
    _setNavigationController: function(a) {
        this.mNaviCtrl = a
    },
    navigationController: function() {
        return this.mNaviCtrl
    },
    title: function() {
        return this.mTitle
    },
    setTitle: function(b) {
        var c = this.mTitle;
        this.mTitle = b;
        var a = this.navigationItem();
        if (a.title() == null || a.title() == c) {
            a.setTitle(b)
        }
    },
    parentViewController: function() {
        return this.mParentViewController
    },
    _parentViewControllerForRoot: function() {
        var a = this;
        var b = this.mParentViewController;
        while (b != null) {
            a = b;
            b = b.parentViewController()
        }
        return a
    },
    presentedViewController: function() {
        return this._parentViewControllerForRoot().mPresentedViewController
    },
    presentingViewController: function() {
        return this._parentViewControllerForRoot().mPresentingViewController
    },
    presentViewController: function(e, d) {
        var b = this._parentViewControllerForRoot();
        var f = b.view().window();
        if (f != null) {
            b.mPresentedViewController = e;
            e.mPresentingViewController = b;
            var g = new UIView(f.bounds());
            g.setBackgroundColor("rgba(0,0,0,0.3)");
            if (e.modalPresentationAutoDismiss) {
                g.layer().click(function() {
                    e.dismissViewController(false)
                })
            }
            var a = e.view();
            var c = e.modalPresentationSize ? e.modalPresentationSize: g.size();
            if (e.modalPresentationOrigin) {
                a.setFrame(new CGRect(e.modalPresentationOrigin.x, e.modalPresentationOrigin.y, c.width, c.height))
            } else {
                a.setFrame(new CGRect(g.width() / 2 - c.width / 2, g.height() / 2 - c.height / 2, c.width, c.height))
            }
            g.addSubview(a);
            f.addSubview(g);
            if (d) {
                g.setAlpha(0);
                UIView.animate(0.2,
                function() {
                    g.setAlpha(1)
                })
            }
        }
    },
    dismissViewController: function(c) {
        var b = null;
        var d = this.presentedViewController();
        if (d != null) {
            b = d.mPresentingViewController
        } else {
            b = this.presentingViewController();
            if (b != null) {
                d = b.mPresentedViewController
            }
        }
        if (d != null) {
            var a = d.view();
            var e = a.superview();
            if (c) {
                UIView.animate(0.2,
                function() {
                    e.setAlpha(0)
                },
                function() {
                    e.setAlpha(1);
                    e.removeFromSuperview()
                })
            } else {
                e.removeFromSuperview()
            }
            d.mPresentingViewController = null;
            b.mPresentedViewController = null
        }
    }
});
UIBarButtonItem = defineClass({
    init: function(d, b, a, c) {
        this.mTitle = d;
        this.mImage = b;
        this.mAction = a;
        this.mTintColor = c
    },
    title: function() {
        return this.mTitle
    },
    image: function() {
        return this.mImage
    },
    action: function() {
        return this.mAction
    },
    tintColor: function() {
        return this.mTintColor
    }
});
UINavigationItem = defineClass({
    init: function(a) {
        this.mTitle = a;
        this.mLeftBarButtonItems = [];
        this.mRightBarButtonItems = []
    },
    title: function() {
        return this.mTitle
    },
    setTitle: function(a) {
        this.mTitle = a;
        if (this.mDelegate) {
            this.mDelegate.titleViewDidChange(this)
        }
    },
    titleView: function() {
        return this.mTitleView
    },
    setTitleView: function(a) {
        this.mTitleView = a;
        if (this.mDelegate) {
            this.mDelegate.titleViewDidChange(this)
        }
    },
    setRightBarButtonItems: function(a) {
        this.mRightBarButtonItems = a ? a.slice() : [];
        if (this.mDelegate) {
            this.mDelegate.rightBarButtonItemsDidChange(this)
        }
    },
    rightBarButtonItems: function() {
        return this.mRightBarButtonItems.slice()
    },
    setLeftBarButtonItems: function(a) {
        this.mLeftBarButtonItems = a ? a.slice() : [];
        if (this.mDelegate) {
            this.mDelegate.leftBarButtonItemsDidChange(this)
        }
    },
    leftBarButtonItems: function() {
        return this.mLeftBarButtonItems.slice()
    },
    backBarButtonItem: function() {
        return this.mBackBarButtonItem
    },
    setBackBarButtonItem: function(a) {
        this.mBackBarButtonItem = a
    },
    delegate: function() {
        return this.mDelegate
    },
    setDelegate: function(a) {
        this.mDelegate = a
    }
});
UINavigationBar = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a);
        this.mItems = [];
        this.setBackgroundColor("white");
        this.mBottomLineView = new UIView(new CGRect(0, this.height() - 1, this.width(), 1));
        this.mBottomLineView.setAutoresizingMask(UIView.Autoresizing.FlexibleTopMargin | UIView.Autoresizing.FlexibleWidth);
        this.mBottomLineView.setBackgroundColor("#B2B2B2");
        this.addSubview(this.mBottomLineView)
    },
    topItem: function() {
        var a = this.mItems.length;
        return a > 0 ? this.mItems[a - 1] : null
    },
    backItem: function() {
        var a = this.mItems.length;
        return a > 1 ? this.mItems[a - 2] : null
    },
    pushNavigationItem: function(d, c) {
        var b = this.topItem();
        this.mItems.push(d);
        var a = new UINavigationSubBar(this.bounds());
        a.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        a.setNavigationItem(d, b);
        this.addSubview(a);
        var e = this.mSubBar;
        if (c) {
            a.setAlpha(0);
            UIView.animate(0.2,
            function() {
                a.setAlpha(1);
                if (e) {
                    e.setAlpha(0)
                }
            },
            function() {
                if (e) {
                    e.removeFromSuperview()
                }
            })
        } else {
            if (e) {
                e.removeFromSuperview()
            }
        }
        this.mSubBar = a;
        this.bringSubviewToFront(this.mBottomLineView)
    },
    popNavigationItem: function(e) {
        if (this.mItems.length > 1) {
            var d = this.mItems.pop();
            var c = this.topItem();
            var b = this.backItem();
            var a = new UINavigationSubBar(this.bounds());
            a.setNavigationItem(c, b);
            this.addSubview(a);
            var f = this.mSubBar;
            if (e) {
                a.setAlpha(0);
                UIView.animate(0.2,
                function() {
                    a.setAlpha(1);
                    if (f) {
                        f.setAlpha(0)
                    }
                },
                function() {
                    if (f) {
                        f.removeFromSuperview()
                    }
                })
            } else {
                if (f) {
                    f.removeFromSuperview()
                }
            }
            this.mSubBar = a;
            this.bringSubviewToFront(this.mBottomLineView);
            return d
        }
        return null
    },
    backButtonDidClick: function() {
        if (this.mDelegate) {
            this.mDelegate.navigationBarBackButtonDidClick(this)
        } else {
            this.popNavigationItem(true)
        }
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    leftBarButtonAtIndex: function(a) {
        return this.mSubBar.mLeftBarButtons[a]
    },
    rightBarButtonAtIndex: function(a) {
        return this.mSubBar.mRightBarButtons[a]
    }
});
UINavigationSubBar = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a);
        this.mLeftBarButtons = [];
        this.mRightBarButtons = []
    },
    setNavigationItem: function(d, a) {
        this.mItem = d;
        d.setDelegate(this);
        if (a) {
            var c = new UIButton(null, UIButton.Type.System);
            var e = null;
            if (a.backBarButtonItem()) {
                e = a.backBarButtonItem().title()
            } else {
                e = a.title() ? a.title() : "返回"
            }
            c.setTitle(e, UIControl.State.Normal);
            c.setImage(new UIImage("res/cocoa_navi_back.png", 9, 15), UIControl.State.Normal);
            var b = this;
            c.addTarget(function() {
                var f = b.superview();
                f.backButtonDidClick()
            },
            UIControl.Events.TouchUpInside);
            this.addSubview(c);
            this.mBackButton = c
        }
        this.updateTitleView(d);
        this.updateRightBarButtons(d);
        this.updateLeftBarButtons(d);
        this.setNeedsLayout()
    },
    updateTitleView: function(b) {
        if (this.mTitleView) {
            this.mTitleView.removeFromSuperview()
        }
        var a = b.titleView();
        if (a) {
            this.addSubview(a);
            this.mTitleView = a
        } else {
            var c = new UILabel();
            c.setFont("18px bold");
            c.setText(b.title());
            this.addSubview(c);
            this.mTitleView = c
        }
    },
    updateRightBarButtons: function(c) {
        this.mRightBarButtons.forEach(function(d) {
            d.removeFromSuperview()
        });
        this.mRightBarButtons = [];
        var b = c.rightBarButtonItems();
        var a = this;
        b.forEach(function(f) {
            var d = new UIButton(null, UIButton.Type.System);
            var e = f.image();
            if (e != null) {
                d.setImage(e, UIControl.State.Normal)
            } else {
                d.setTitle(f.title(), UIControl.State.Normal)
            }
            d.addTarget(f.action(), UIControl.Events.TouchUpInside);
            a.addSubview(d);
            a.mRightBarButtons.push(d)
        })
    },
    updateLeftBarButtons: function(c) {
        this.mLeftBarButtons.forEach(function(d) {
            d.removeFromSuperview()
        });
        this.mLeftBarButtons = [];
        var a = c.leftBarButtonItems();
        var b = this;
        a.forEach(function(f) {
            var d = new UIButton(null, UIButton.Type.System);
            var e = f.image();
            if (e != null) {
                d.setImage(e, UIControl.State.Normal)
            } else {
                d.setTitle(f.title(), UIControl.State.Normal)
            }
            d.addTarget(f.action(), UIControl.Events.TouchUpInside);
            b.addSubview(d);
            b.mLeftBarButtons.push(d)
        })
    },
    titleViewDidChange: function(a) {
        this.updateTitleView(a);
        this.setNeedsLayout()
    },
    rightBarButtonItemsDidChange: function(a) {
        this.updateRightBarButtons(a);
        this.setNeedsLayout()
    },
    leftBarButtonItemsDidChange: function(a) {
        this.updateLeftBarButtons(a);
        this.setNeedsLayout()
    },
    layoutSubviews: function() {
        var c = this.frame().size.width;
        var a = this.frame().size.height;
        if (this.mTitleView) {
            if (this.mItem.titleView() == this.mTitleView) {
                this.mTitleView.setCenter(new CGPoint(c / 2, a / 2))
            } else {
                var b = this.mTitleView.sizeThatFits(new CGSize(c, a));
                this.mTitleView.setFrame(new CGRect((c - b.width) / 2, (a - b.height) / 2, b.width, b.height))
            }
        }
        var d = 10;
        if (this.mBackButton) {
            var b = this.mBackButton.sizeThatFits(new CGSize(200, a));
            this.mBackButton.setFrame(new CGRect(d, (a - b.height) / 2, b.width, b.height));
            d += b.width + 10
        }
        if (this.mLeftBarButtons) {
            this.mLeftBarButtons.forEach(function(g) {
                var f = g.sizeThatFits(new CGSize(100, 44));
                g.setFrame(new CGRect(d, (a - f.height) / 2, f.width, f.height));
                d += f.width + 10
            })
        }
        var e = 10;
        if (this.mRightBarButtons) {
            this.mRightBarButtons.forEach(function(g) {
                var f = g.sizeThatFits(new CGSize(100, 44));
                g.setFrame(new CGRect(c - f.width - e, (a - f.height) / 2, f.width, f.height));
                e += f.width + 10
            })
        }
    }
});
UINavigationController = defineClass({
    superClass: UIViewController,
    init: function(a) {
        UIViewController.call(this);
        this.mViewControllers = [];
        if (a) {
            this.mViewControllers.push(a)
        }
    },
    viewDidLoad: function() {
        UIViewController.prototype.viewDidLoad.call(this);
        var a = this.view();
        this.mNaviBar = new UINavigationBar(new CGRect(0, 0, a.width(), 60));
        this.mNaviBar.setAutoresizingMask(UIView.Autoresizing.FlexibleWidth);
        this.mNaviBar.setDelegate(this);
        a.addSubview(this.mNaviBar);
        var b = this.topViewController();
        if (b) {
            this.mNaviBar.pushNavigationItem(b.navigationItem(), false);
            this.attachViewController(b)
        }
    },
    navigationBar: function() {
        return this.mNaviBar
    },
    topViewController: function() {
        var a = this.mViewControllers.length;
        return a > 0 ? this.mViewControllers[a - 1] : null
    },
    attachViewController: function(c) {
        this.addChildViewController(c);
        c._setNavigationController(this);
        var a = this.view();
        var b = c.view();
        b.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        b.setFrame(new CGRect(0, this.mNaviBar.bottom(), a.width(), a.height() - this.mNaviBar.bottom()));
        a.addSubview(b);
        a.bringSubviewToFront(this.mNaviBar)
    },
    pushViewController: function(d, c) {
        this.mNaviBar.pushNavigationItem(d.navigationItem(), c);
        var a = this.topViewController();
        var b = a ? a.view() : null;
        this.mViewControllers.push(d);
        this.attachViewController(d);
        if (c) {
            d.view().setAlpha(0);
            UIView.animate(0.2,
            function() {
                d.view().setAlpha(1);
                if (b) {
                    b.setAlpha(0)
                }
            },
            function() {
                if (b) {
                    b.setAlpha(1);
                    b.removeFromSuperview()
                }
            })
        } else {
            if (b) {
                b.removeFromSuperview()
            }
        }
    },
    popViewController: function(d) {
        if (this.mViewControllers.length > 1) {
            this.mNaviBar.popNavigationItem(d);
            var a = this.topViewController();
            var b = a.view();
            this.mViewControllers.remove(a);
            a.removeFromParentViewController();
            a._setNavigationController(null);
            var c = this.topViewController();
            this.attachViewController(c);
            if (d) {
                c.view().setAlpha(0);
                UIView.animate(0.2,
                function() {
                    c.view().setAlpha(1);
                    b.setAlpha(0)
                },
                function() {
                    b.setAlpha(1);
                    b.removeFromSuperview()
                })
            } else {
                b.removeFromSuperview()
            }
        }
    },
    navigationBarBackButtonDidClick: function(a) {
        this.popViewController(true)
    }
});
UIAnimation = defineClass({
    init: function(e, f, d, a, g, c) {
        this.mObject = e;
        if (f) {
            var b = "set" + f.substring(0, 1).toUpperCase() + f.substring(1);
            this.mSetter = e[b]
        }
        this.mStartValue = d;
        this.mEndValue = a;
        this.mDuration = g;
        this.mCompletion = c
    },
    start: function() {
        var c = 1 / 60;
        var b = 0;
        var a = this;
        var d = setInterval(function() {
            b += c;
            var e = Math.min(1, b / a.mDuration);
            a.evolve(e);
            if (e == 1) {
                clearInterval(d);
                if (a.mCompletion) {
                    a.mCompletion()
                }
            }
        },
        c * 1000)
    },
    evolve: function(a) {
        var b = this.value(a);
        this.mSetter.call(this.mObject, b)
    },
    value: function(f) {
        var e = this.mStartValue;
        if (typeof e == "number") {
            return this.mStartValue + (this.mEndValue - this.mStartValue) * f;
            this.mSetter.call(this.mObject, value)
        } else {
            if (typeof e == "object") {
                if (e.constructor == CGRect) {
                    var d = this.mStartValue;
                    var a = this.mEndValue;
                    return new CGRect(d.origin.x + (a.origin.x - d.origin.x) * f, d.origin.y + (a.origin.y - d.origin.y) * f, d.size.width + (a.size.width - d.size.width) * f, d.size.height + (a.size.height - d.size.height) * f)
                } else {
                    if (e.constructor == CGAffineTransform) {
                        var g = this.mStartValue.values();
                        var c = this.mEndValue.values();
                        var b = [];
                        b[0] = g[0] + (c[0] - g[0]) * f;
                        b[1] = g[1] + (c[1] - g[1]) * f;
                        b[2] = g[2] + (c[2] - g[2]) * f;
                        b[3] = g[3] + (c[3] - g[3]) * f;
                        b[4] = g[4] + (c[4] - g[4]) * f;
                        b[5] = g[5] + (c[5] - g[5]) * f;
                        b[6] = g[6] + (c[6] - g[6]) * f;
                        b[7] = g[7] + (c[7] - g[7]) * f;
                        b[8] = g[8] + (c[8] - g[8]) * f;
                        return new CGAffineTransform(b)
                    }
                }
            }
        }
        return this.mEndValue
    },
    setDuration: function(a) {
        this.mDuration = a
    }
});
UIAnimationGroup = defineClass({
    superClass: UIAnimation,
    init: function(b, a) {
        UIAnimation.call(this, null, null, null, null, b, a);
        this.mAnimations = []
    },
    addAnimation: function(b) {
        this.mAnimations.push(b)
    },
    evolve: function(a) {
        for (var b = 0; b < this.mAnimations.length; b++) {
            var c = this.mAnimations[b];
            c.evolve(a)
        }
    }
});
UIMenuController = defineClass({
    statics: {
        MENU_H: 30,
        MENU_PADDING: 10,
        TITLE_PADDING: 10,
        ARROW_H: 6,
        sharedMenuController: function() {
            if (!UIMenuController.object) {
                UIMenuController.object = new UIMenuController()
            }
            return UIMenuController.object
        }
    },
    init: function() {
        this.mTargetRect = new CGRect()
    },
    setMenuItems: function(a) {
        this.mMenuItems = a
    },
    setTargetRectInView: function(b, a) {
        this.mTargetRect = new CGRect(b);
        this.mTargetView = a
    },
    setMenuVisible: function(e, n) {
        if (e) {
            if (!this.mMenuView && this.mTargetView && this.mTargetView.window() && this.mMenuItems && this.mMenuItems.length > 0) {
                var f = this.mTargetView.window();
                var o = new UIView(new CGRect(0, 0, 0, UIMenuController.MENU_H));
                this.mTargetView.window().addSubview(o);
                var a = new UIScrollView(new CGRect(0, 0, 0, UIMenuController.MENU_H - UIMenuController.ARROW_H));
                a.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
                o.addSubview(a);
                a.layer().css("overflow", "hidden");
                var k = 0;
                var h = this;
                var d = [];
                for (var l = 0; l < this.mMenuItems.length; l++) {
                    var r = this.mMenuItems[l];
                    var c = new UIButton();
                    c.setTitle(r.title, UIControl.State.Normal);
                    c.setTitleColor("white", UIControl.State.Normal);
                    c.titleLabel().setFontSize("13px");
                    c.sizeToFit();
                    c.setFrame(new CGRect(k, 0, c.width() + UIMenuController.TITLE_PADDING * 2, a.height()));
                    c.setTag(l);
                    var h = this;
                    c.addTarget(function(i) {
                        var t = h.mMenuItems[i.tag()];
                        t.action();
                        h.setMenuVisible(false, true)
                    },
                    UIControl.Events.TouchUpInside);
                    a.addSubview(c);
                    k += c.width();
                    if (l != this.mMenuItems.length - 1) {
                        var p = new UIView(new CGRect(k, 0, 1, a.height()));
                        p.setBackgroundColor("white");
                        a.addSubview(p)
                    }
                    d.push(c)
                }
                var j = this.mTargetView.convertRectToView(this.mTargetRect, f);
                var b = Math.min(k, f.width() - UIMenuController.MENU_PADDING * 2);
                var g = j.origin.x + j.size.width / 2 - b / 2;
                if (g < UIMenuController.MENU_PADDING) {
                    g = UIMenuController.MENU_PADDING
                } else {
                    if (g + b + UIMenuController.MENU_PADDING > f.width()) {
                        g = f.width() - b - UIMenuController.MENU_PADDING
                    }
                }
                var q = new CGPoint(j.origin.x + j.size.width / 2 - g, UIMenuController.MENU_H);
                var s = j.origin.y - UIMenuController.MENU_H;
                if (s < 0) {
                    s = j.origin.y + j.size.height;
                    q.y = 0
                }
                o.setFrame(new CGRect(g, s, b, UIMenuController.MENU_H));
                var m = new _UIMenuBackgroundView(o.bounds());
                m.setArrowPoint(q);
                o.addSubview(m);
                o.sendSubviewToBack(m);
                if (n) {
                    o.setAlpha(0);
                    UIView.animate(0.2,
                    function() {
                        o.setAlpha(1)
                    })
                }
                this.mMenuView = o
            }
        } else {
            if (this.mMenuView != null) {
                var o = this.mMenuView;
                this.mMenuView = null;
                if (n) {
                    UIView.animate(0.2,
                    function() {
                        o.setAlpha(0)
                    },
                    function() {
                        o.removeFromSuperview()
                    })
                } else {
                    o.removeFromSuperview()
                }
            }
        }
    }
});
UIMenuItem = defineClass({
    init: function(b, a) {
        this.title = b;
        this.action = a
    }
});
_UIMenuBackgroundView = defineClass({
    superClass: UIView,
    init: function(a) {
        this.mArrowPoint = new CGPoint();
        UIView.call(this, a)
    },
    setArrowPoint: function(a) {
        this.mArrowPoint = new CGPoint(a)
    },
    drawRect: function(b) {
        b.fillStyle = "rgba(0,0,0,0.8)";
        var a = UIMenuController.ARROW_H;
        if (this.mArrowPoint.y == 0) {
            b.fillRect(0, a, this.width(), this.height());
            b.beginPath();
            b.moveTo(this.mArrowPoint.x - a, a);
            b.lineTo(this.mArrowPoint.x, 0);
            b.lineTo(this.mArrowPoint.x + a, a);
            b.fill()
        } else {
            b.fillRect(0, 0, this.width(), this.height() - a);
            b.beginPath();
            b.moveTo(this.mArrowPoint.x - a, this.height() - a);
            b.lineTo(this.mArrowPoint.x, this.height());
            b.lineTo(this.mArrowPoint.x + a, this.height() - a);
            b.fill()
        }
    }
});
UIAlertView = defineClass({
    superClass: UIView,
    statics: {
        Style: {
            Default: 0,
            SecureTextInput: 1,
            PlainTextInput: 2,
            LoginAndPasswordInput: 3
        }
    },
    init: function(c, b) {
        this.mTitle = c;
        this.mMessage = b;
        this.mButtonTitles = [];
        for (var a = 2; a < arguments.length; a++) {
            this.mButtonTitles.push(arguments[a])
        }
        this.mAlertViewStyle = UIAlertView.Style.Default;
        this.mTextFields = [];
        this.setBackgroundColor("rgba(0,0,0,0.7)")
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    setAlertViewStyle: function(a) {
        this.mAlertViewStyle = a
    },
    setLeftButtonTitles: function(a) {
        this.mLeftButtonTitles = a
    },
    show: function() {
        if (this.window() == null) {
            var f = UIApplication.sharedApplication().keyWindow();
            this.setFrame(f.bounds());
            f.addSubview(this);
            var m = 20;
            var e = 600;
            var g = m;
            var o = e - m * 2;
            var d = new UIView();
            d.setBackgroundColor("white");
            if (this.mTitle != null) {
                var k = new UILabel();
                k.setFont("17px bold");
                k.setText(this.mTitle);
                var p = k.sizeThatFits(new CGSize(o, Number.MAX_VALUE));
                k.setFrame(new CGRect(m, g, p.width, p.height));
                d.addSubview(k);
                g += p.height + m
            }
            if (this.mMessage != null) {
                var k = new UILabel();
                k.setFontSize("16px");
                k.setTextColor("rgb(85,85,85)");
                k.setText(this.mMessage);
                k.setNumberOfLines(20);
                k.setLineHeight(1.3);
                var p = k.sizeThatFits(new CGSize(o, Number.MAX_VALUE));
                k.setFrame(new CGRect(m, g, p.width, p.height));
                d.addSubview(k);
                g += p.height + m
            }
            var s = 0;
            switch (this.mAlertViewStyle) {
            case UIAlertView.Style.PlainTextInput:
            case UIAlertView.Style.SecureTextInput:
                s = 1;
                break;
            case UIAlertView.Style.LoginAndPasswordInput:
                s = 2;
                break
            }
            if (s > 0) {
                g -= m / 2
            }
            for (var r = 0; r < s; r++) {
                var h = new UITextField(new CGRect(m, g, o, 30));
                h.setFontSize("16px");
                var a = new UIView(new CGRect(0, h.height() - 1, h.width(), 1));
                a.setBackgroundColor(UIColor.systemThemeColor);
                h.addSubview(a);
                d.addSubview(h);
                this.mTextFields.push(h);
                g += h.height() + m / 2
            }
            if (s > 0) {
                g += m / 2
            }
            var l = this.mButtonTitles.length;
            if (l > 0 && l <= 4) {
                var q = o / l;
                var j = 0;
                var c = e - m;
                var n = this;
                for (var r = l - 1; r >= 0; r--) {
                    var b = new UIButton(null, UIButton.Type.System);
                    b.setTag(r);
                    b.addTarget(function(i) {
                        n.dismiss(function() {
                            if (n.mDelegate) {
                                n.mDelegate.alertViewClickedButtonAtIndex(n, i.tag())
                            }
                        })
                    },
                    UIControl.Events.TouchUpInside);
                    b.setTitle(this.mButtonTitles[r], UIControl.State.Normal);
                    b.sizeToFit();
                    b.setFrame(new CGRect(c - b.width(), g, b.width(), b.height()));
                    c -= b.width() + m;
                    j = b.height();
                    d.addSubview(b)
                }
                if (this.mLeftButtonTitles) {
                    c = m;
                    var t = l;
                    this.mLeftButtonTitles.forEach(function(u) {
                        var i = new UIButton(null, UIButton.Type.System);
                        i.setTag(t);
                        i.addTarget(function(v) {
                            n.dismiss(function() {
                                if (n.mDelegate) {
                                    n.mDelegate.alertViewClickedButtonAtIndex(n, v.tag())
                                }
                            })
                        },
                        UIControl.Events.TouchUpInside);
                        i.setTitle(u, UIControl.State.Normal);
                        i.sizeToFit();
                        i.setFrame(new CGRect(c, g, i.width(), i.height()));
                        c += i.width() + m;
                        d.addSubview(i);
                        t += 1
                    })
                }
                g += j + m
            } else {
                if (l > 2) {
                    var j = 40;
                    for (var r = 0; r < l; r++) {
                        var b = new UIButton(null, UIButton.Type.System);
                        b.setTag(r);
                        b.addTarget(function(i) {
                            n.dismiss(function() {
                                if (n.mDelegate) {
                                    n.mDelegate.alertViewClickedButtonAtIndex(n, i.tag())
                                }
                            })
                        },
                        UIControl.Events.TouchUpInside);
                        b.setTitle(this.mButtonTitles[r], UIControl.State.Normal);
                        b.sizeToFit();
                        b.setFrame(new CGRect(m, g, o, j));
                        d.addSubview(b);
                        g += j
                    }
                    g += m / 2
                }
            }
            d.setFrame(new CGRect((f.width() - e) / 2, (f.height() - g) / 2, e, g));
            this.addSubview(d);
            this.mContentView = d
        }
    },
    dismiss: function(a) {
        if (this.window()) {
            this.removeFromSuperview();
            if (a) {
                a()
            }
        }
    },
    textFieldAtIndex: function(a) {
        return this.mTextFields[a]
    }
});
NSUserDefaults = defineClass({
    statics: {
        standardUserDefaults: function() {
            if (!NSUserDefaults.object) {
                NSUserDefaults.object = new NSUserDefaults()
            }
            return NSUserDefaults.object
        }
    },
    execOnceOnKey: function(a, c) {
        var b = localStorage[a];
        if (!b) {
            c();
            localStorage[a] = "1"
        }
        return ! b
    }
});
NSKeyedMapper = defineClass({
    statics: {
        defaultMapper: function() {
            if (!NSKeyedMapper.object) {
                NSKeyedMapper.object = new NSKeyedMapper()
            }
            return NSKeyedMapper.object
        }
    },
    init: function() {
        this.table = {};
        this.table2 = {};
        this.registerClass(Object, "NSDictionary", true);
        this.registerClass(Array, "NSArray", true);
        this.registerClass(CGPoint, "CGPoint", true);
        this.registerClass(CGSize, "CGSize", true);
        this.registerClass(CGRect, "CGRect", true);
        this.registerClass(Object, "apple.cocoatouch.foundation.NSDictionary");
        this.registerClass(Object, "apple.cocoatouch.foundation.NSMutableDictionary");
        this.registerClass(Array, "apple.cocoatouch.foundation.NSArray");
        this.registerClass(Array, "apple.cocoatouch.foundation.NSMutableArray");
        this.registerClass(CGPoint, "apple.cocoatouch.coregraphics.CGPoint");
        this.registerClass(CGSize, "apple.cocoatouch.coregraphics.CGSize");
        this.registerClass(CGRect, "apple.cocoatouch.coregraphics.CGRect")
    },
    registerClass: function(c, b, a) {
        this.table[b] = c;
        if (a) {
            this.table2[c] = b
        }
    },
    classForName: function(a) {
        return this.table[a]
    },
    className: function(a) {
        return this.table2[a]
    }
});
NSKeyedArchiver = defineClass({
    statics: {
        archivedDataWithRootObject: function(b) {
            var a = new NSKeyedArchiver();
            a.encodeObjectForKey(b, "root");
            return JSON.stringify(a.jsonObj()["root"])
        }
    },
    init: function() {
        this.mJsonObj = {}
    },
    setObjectClass: function(a) {
        this.mJsonObj.objectClass = a
    },
    encodeBoolForKey: function(a, c) {
        var d = a ? a: false;
        this.encodeObjectForKey(d, c)
    },
    encodeIntForKey: function(b, a) {
        var c = b ? b: 0;
        this.encodeObjectForKey(c, a)
    },
    encodeFloatForKey: function(b, a) {
        var c = b ? b: 0;
        this.encodeObjectForKey(c, a)
    },
    encodeObjectForKey: function(e, c) {
        if (typeof e == "object") {
            if (e) {
                var a = new NSKeyedArchiver();
                var d = NSKeyedMapper.defaultMapper().className(e.constructor);
                if (d) {
                    a.setObjectClass(d)
                }
                if (e.encodeWithCoder) {
                    e.encodeWithCoder(a)
                } else {
                    if (e.constructor == Array) {
                        for (var b = 0; b < e.length; b++) {
                            a.encodeObjectForKey(e[b], b)
                        }
                    } else {
                        for (c in e) {
                            if (e.hasOwnProperty(c)) {
                                a.encodeObjectForKey(e[c], c)
                            }
                        }
                    }
                }
                this.mJsonObj[c] = a.mJsonObj
            }
        } else {
            this.mJsonObj[c] = e
        }
    },
    setObjectForKey: function(b, a) {
        this.mJsonObj[a] = b
    },
    jsonObj: function() {
        return this.mJsonObj
    },
    toString: function() {
        return JSON.stringify(this.mJsonObj)
    }
});
NSKeyedUnarchiver = defineClass({
    init: function(a) {
        if (typeof a == "string") {
            try {
                this.mJsonObj = JSON.parse(a)
            } catch(b) {
                throw b
            }
        } else {
            this.mJsonObj = a
        }
    },
    decodeBoolForKey: function(a) {
        var b = this.decodeObjectForKey(a);
        return b ? b: false
    },
    decodeIntForKey: function(a) {
        var c = this.decodeObjectForKey(a);
        var b = parseInt(c);
        return b ? b: 0
    },
    decodeFloatForKey: function(a) {
        var c = this.decodeObjectForKey(a);
        var b = parseFloat(c);
        return b ? b: 0
    },
    decodeObjectForKey: function(a) {
        var b = this.objectForKey(a);
        return this.decodeObject(b)
    },
    objectForKey: function(a) {
        return this.mJsonObj[a]
    },
    decodeObject: function(h) {
        if (h != null) {
            if (typeof h == "object") {
                var f = h.objectClass;
                if (f != null) {
                    var d = NSKeyedMapper.defaultMapper().classForName(f);
                    if (d) {
                        var b;
                        var a = new NSKeyedUnarchiver(h);
                        if (d == Object) {
                            b = {};
                            for (key in h) {
                                if (h.hasOwnProperty(key)) {
                                    if (key == "objectClass") {
                                        continue
                                    }
                                    b[key] = a.decodeObjectForKey(key)
                                }
                            }
                        } else {
                            if (d == Array) {
                                b = [];
                                var g = 0;
                                for (key in h) {
                                    if (h.hasOwnProperty(key)) {
                                        var c = parseInt(key);
                                        if (c >= 0) {
                                            if (c >= g) {
                                                g = c + 1
                                            }
                                        }
                                    }
                                }
                                for (var e = 0; e < g; e++) {
                                    b[e] = a.decodeObjectForKey(e)
                                }
                            } else {
                                b = new d();
                                b.initWithCoder(a)
                            }
                        }
                        return b
                    }
                }
            }
        }
        return h
    },
    jsonObj: function() {
        return this.mJsonObj
    }
});
UITableView = defineClass({
    superClass: UIScrollView,
    init: function(a) {
        UIScrollView.call(this, a);
        this.mCells = [];
        this.mRowHeight = 44
    },
    dataSource: function() {
        return this.mDataSource
    },
    setDataSource: function(a) {
        this.mDataSource = a
    },
    delegate: function() {
        return this.mDelegate
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    rowHeight: function() {
        return this.mRowHeight
    },
    setRowHeight: function(a) {
        this.mRowHeight = a
    },
    reloadData: function() {
        this.mCells.forEach(function(j) {
            j.removeFromSuperview()
        });
        this.mCells = [];
        if (this.mDataSource) {
            var a = 0;
            var c = this.mDataSource.numberOfSectionsInTableView;
            var g = c ? c.call(this.mDataSource, this) : 1;
            for (var i = 0; i < g; i++) {
                var h = this.mDataSource.tableViewNumberOfRowsInSection(this, i);
                for (var b = 0; b < h; b++) {
                    var d = new NSIndexPath(i, b);
                    var e = this.mDataSource.tableViewCellForRowAtIndexPath(this, d);
                    var f = this.mRowHeight;
                    if (this.mDelegate) {
                        var c = this.mDelegate.tableViewHeightForRowAtIndexPath;
                        if (c) {
                            f = c.call(this.mDelegate, this, d)
                        }
                    }
                    e.setFrame(new CGRect(0, a, this.width(), f));
                    e.setAutoresizingMask(UIView.Autoresizing.FlexibleWidth);
                    e.setIndexPath(d);
                    e.setDelegate(this);
                    this.addSubview(e);
                    a += f
                }
            }
        }
    },
    tableViewCellDidClick: function(a) {
        if (this.mDelegate) {
            var c = this.mDelegate.tableViewDidSelectRowAtIndexPath;
            if (c) {
                var b = a.indexPath();
                c.call(this.mDelegate, this, b)
            }
        }
    }
});
UITableViewCell = defineClass({
    superClass: UIControl,
    statics: {
        AccessoryType: {
            None: 0,
            DisclosureIndicator: 1
        },
        SelectionStyle: {
            None: 0,
            Default: 1
        }
    },
    init: function(b) {
        UIControl.call(this, b);
        this.mSelectionView = new UIView(this.bounds());
        this.mSelectionView.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        this.mSelectionView.setHidden(true);
        this.addSubview(this.mSelectionView);
        this.mTextLabel = new UILabel();
        this.addSubview(this.mTextLabel);
        this.mImageView = new UIImageView();
        this.addSubview(this.mImageView);
        this.mAccessoryView = new UIImageView();
        this.addSubview(this.mAccessoryView);
        this.mSeparatorView = new UIView(new CGRect(20, this.height() - 1, this.width() - 20, 1));
        this.mSeparatorView.setAutoresizingMask(UIView.Autoresizing.FlexibleTopMargin | UIView.Autoresizing.FlexibleWidth);
        this.mSeparatorView.setBackgroundColor("#E3E3E3");
        this.addSubview(this.mSeparatorView);
        this.setAccessoryType(UITableViewCell.AccessoryType.None);
        this.setSelectionStyle(UITableViewCell.SelectionStyle.Default);
        var a = this;
        this.addTarget(function() {
            if (a.mDelegate) {
                a.mDelegate.tableViewCellDidClick(a)
            }
        },
        UIControl.Events.TouchUpInside)
    },
    layoutSubviews: function() {
        var e = this.bounds().size;
        var b = this.mImageView.sizeThatFits(new CGSize(e.width - 20, e.height));
        this.mImageView.setFrame(new CGRect(20, (e.height - b.height) / 2, b.width, b.height));
        var d = this.mAccessoryView.sizeThatFits(new CGSize(e.width - 20, e.height));
        this.mAccessoryView.setFrame(new CGRect(e.width - d.width - 20, (e.height - d.height) / 2, d.width, d.height));
        var a = this.mImageView.width() == 0 ? 20 : this.mImageView.right() + 10;
        var c = this.mAccessoryView.width() == 0 ? e.width - 20 : this.mAccessoryView.left() - 10;
        this.mTextLabel.setFrame(new CGRect(a, 0, c - a, e.height))
    },
    textLabel: function() {
        return this.mTextLabel
    },
    imageView: function() {
        return this.mImageView
    },
    accessoryType: function() {
        return this.mAccessoryType
    },
    setAccessoryType: function(a) {
        this.mAccessoryType = a;
        if (a == UITableViewCell.AccessoryType.DisclosureIndicator) {
            this.mAccessoryView.setImage(new UIImage("res/cocoa_table_cell_indicator.png", 7, 13))
        } else {
            this.mAccessoryView.setImage(null)
        }
    },
    selectionStyle: function() {
        return this.mSelectionStyle
    },
    setSelectionStyle: function(a) {
        this.mSelectionStyle = a;
        if (a == UITableViewCell.SelectionStyle.Default) {
            this.mSelectionView.setBackgroundColor("#D9D9D9")
        } else {
            this.mSelectionView.setBackgroundColor(null)
        }
    },
    onStateChange: function(a) {
        if (a == UIControl.State.Highlighted || a == UIControl.State.Selected) {
            this.mSelectionView.setHidden(false)
        } else {
            this.mSelectionView.setHidden(true)
        }
    },
    delegate: function() {
        return this.mDelegate
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    indexPath: function() {
        return this.mIndexPath
    },
    setIndexPath: function(a) {
        this.mIndexPath = a
    }
});
NSIndexPath = defineClass({
    init: function(a, b) {
        this.section = a;
        this.row = b
    }
});
NSNotificationCenter = defineClass({
    statics: {
        defaultCenter: function() {
            if (!NSNotificationCenter.object) {
                NSNotificationCenter.object = new NSNotificationCenter()
            }
            return NSNotificationCenter.object
        }
    },
    init: function() {
        this.mObservers = []
    },
    addObserver: function(d, c, b) {
        var a = {
            o: d,
            action: c,
            name: b
        };
        this.mObservers.push(a)
    },
    removeObserver: function(c) {
        var b = this.mObservers.slice();
        var a = this;
        b.forEach(function(d) {
            if (d.o == c) {
                a.mObservers.remove(d)
            }
        })
    },
    postNotificationName: function(c, b, a) {
        var d = new NSNotification(c, b, a);
        this.postNotification(d)
    },
    postNotification: function(e) {
        var d = this.mObservers.slice();
        var c = [];
        for (var b = 0; b < d.length; b++) {
            var a = d[b];
            if (a.name == e.name) {
                if (c.indexOf(a) >= 0) {
                    continue
                }
                a.action.call(a.o, e);
                c.push(a)
            }
        }
    }
});
NSNotification = defineClass({
    init: function(c, b, a) {
        this.name = c;
        this.object = b;
        this.userInfo = a
    }
});
AppDelegate = defineClass({
    applicationDidFinishLaunching: function(d) {
        console.log("application did finish launching !");
        if (!this.checkDomainAvailable()) {
            return
        }
        UIScreen.mainScreen().setMinWidth(720);
        var c = new UIWindow(UIScreen.mainScreen().bounds());
        c.makeKeyAndVisible();
        var a = new RootViewController();
        var b = new UINavigationController(a);
        c.setRootViewController(b);
        window.onresize = function() {
            c.setFrame(UIScreen.mainScreen().bounds())
        };
        b.view().window()
    },
    checkDomainAvailable: function() {
        var a = document.domain;
        return a == "\u006d\u0069\u006e\u0064\u006c\u0069\u006e\u0065\u002e\u0064\u0075\u0061\u0070\u0070\u002e\u0063\u006f\u006d" || a == "\u0077\u0077\u0077\u002e\u006d\u0069\u006e\u0064\u006d\u006d\u002e\u0063\u006f\u006d" || a == "\u006d\u0069\u006e\u0064\u006d\u006d\u002e\u0063\u006f\u006d"
    }
});
RootViewController = defineClass({
    superClass: UIViewController,
    viewDidLoad: function() {
        UIViewController.prototype.viewDidLoad.call(this);
        this.setTitle("思维导图");
        var a = NSKeyedMapper.defaultMapper();
        a.registerClass(MindNode, "MindNode", true);
        a.registerClass(MindNode, "czh.mindnode.MindNode");
        this.mScrollView = new UIScrollView(this.view().bounds());
        this.mScrollView.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        this.mScrollView.setDelegate(this);
        this.view().addSubview(this.mScrollView);
        this.mGraphView = new NodeGraphView(this.view().bounds());
        this.mGraphView.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        this.mGraphView.setDelegate(this);
        this.mScrollView.addSubview(this.mGraphView);
        this.mGraphView.setScrollView(this.mScrollView);
        var j = this;
        var i = new UIBarButtonItem("新建", null,
        function() {
            j.onMindFileOpen(null)
        });
        var g = new UIBarButtonItem("打开", null,
        function() {
            j.selectFileToOpen()
        });
        var f = new UIBarButtonItem("保存", null,
        function() {
            j.onMindNodeFileSave()
        });
        var e = new UIBarButtonItem("导出", null,
        function() {
            j.showExportOptionsPanel()
        });
        var c = new UIBarButtonItem("更多", null,
        function() {
            j.showMoreOptionsPanel()
        });
        this.navigationItem().setRightBarButtonItems([c, e, f, g, i]);
        var d = UserSessionManager.defaultManager();
        var h = d.account();
        var b = new UIBarButtonItem(h != null ? h.name: "登录", null,
        function() {
            j.showUserAccount()
        });
        this.navigationItem().setLeftBarButtonItems([b]);
        NSNotificationCenter.defaultCenter().addObserver(this, this.handleUserLoginStatusChange, UserHasLoginNotification);
        NSNotificationCenter.defaultCenter().addObserver(this, this.handleUserLoginStatusChange, UserHasLogoutNotification);
        if (d.isLogin()) {
            d.syncUser()
        }
    },
    viewDidAppear: function() {
        UIViewController.prototype.viewDidAppear.call(this);
        if (!this.mFirstAppear) {
            this.mFirstAppear = true;
            this.createNewFile()
        }
    },
    showUserAccount: function() {
        var b = UserSessionManager.defaultManager().account();
        if (b) {
            if (!b.paid) {
                var c = "当前帐号最多保存3个导图文件，通过安装我们的客户端应用，至少9元购买升级到专业版，即可不受数量限制，并能实现不同设备文件共享。";
                var a = new UIAlertView(b.name, c, "取消", "iOS版", "Android版");
                a.setLeftButtonTitles(["退出登录"]);
                a.setTag(103);
                a.setDelegate(this);
                a.show()
            } else {
                var c = "当前帐号是VIP会员，可以保存任意多个导图文件，并能够和我们的移动终端应用同步数据，实现不同设备文件共享。";
                var a = new UIAlertView(b.name, c, "返回", "退出登录");
                a.setTag(104);
                a.setDelegate(this);
                a.show()
            }
        } else {
            this.showLoginViewController()
        }
    },
    handleUserLoginStatusChange: function(d) {
        var c = UserSessionManager.defaultManager().account();
        var a = this;
        var e = c ? c.name: "登录";
        var b = new UIBarButtonItem(e, null,
        function() {
            a.showUserAccount()
        });
        this.navigationItem().setLeftBarButtonItems([b])
    },
    selectFileToOpen: function() {
        var b = new GraphFileListController();
        b.handler = this;
        var a = new UINavigationController(b);
        a.modalPresentationSize = new CGSize(600, 400);
        this.presentViewController(a, false)
    },
    onMindFileOpen: function(a) {
        this.mPendingOpenFile = a;
        if (this.isNewFileEdit()) {
            if (this.isEmptyFile()) {
                this.createOrOpenNextFile();
                if (a) {
                    this.showFileSaveTipsOnce()
                }
            } else {
                this.showNewFileSavingDialog()
            }
        } else {
            this.createOrOpenNextFile();
            if (a) {
                this.showFileSaveTipsOnce()
            }
        }
    },
    showFileSaveTipsOnce: function() {
        var a = NSUserDefaults.standardUserDefaults();
        a.execOnceOnKey("show_save_tips",
        function() {
            var b = new UIAlertView("提示", "编辑后的导图需要点击保存才能同步到云空间。", "好的");
            b.show()
        })
    },
    onMindNodeFileSave: function() {
        if (this.cheackIfUserLogin()) {
            if (this.isNewFileEdit()) {
                this.showEnterTitleDialog()
            } else {
                this.save(function(a) {
                    if (a == 0) {
                        var b = new UIAlertView("提示", "保存文件成功，1分钟后会自动同步到云空间。", "好的");
                        b.show()
                    }
                })
            }
        }
    },
    isNewFileEdit: function() {
        return ! this.mFile
    },
    isEmptyFile: function() {
        return this.mGraphView.rootNode().isEmpty()
    },
    createOrOpenNextFile: function() {
        if (this.mPendingOpenFile) {
            this.openMindGraphFile(this.mPendingOpenFile)
        } else {
            this.createNewFile()
        }
    },
    showNewFileSavingDialog: function() {
        var a = new UIAlertView("提示", "是否保存当前新建文件？", "放弃", "保存");
        a.setTag(100);
        a.setDelegate(this);
        a.show()
    },
    createNewFile: function() {
        var a = new MindNode();
        this.mGraphView.setRootNode(a);
        this.mScrollView.setContentOffset(new CGPoint(0, 100));
        this.setMindFile(null)
    },
    save: function(b) {
        if (this.mFile) {
            var e = this.mGraphView.rootNode();
            var h = {
                root: e
            };
            var f = NSKeyedArchiver.archivedDataWithRootObject(h);
            var g = this.mFile.path();
            if (/.+\.xmind/.test(g)) {
                g = g.substring(0, g.lastIndexOf(".")) + ".mm"
            }
            var d = UserSessionManager.defaultManager();
            var a = this;
            d.saveFile(f, g,
            function(i) {
                if (i == 2) {
                    var j = new UIAlertView("提示", "在线文件列表还没加载回来，请稍后再试。", "好的");
                    j.show();
                    d.loadFiles()
                } else {
                    if (i == 3) {
                        a.showUserAccount()
                    } else {
                        if (i != 0) {
                            var j = new UIAlertView("提示", "保存文件失败，请重试。", "好的");
                            j.show()
                        }
                    }
                }
                if (b) {
                    b(i)
                }
            })
        } else {
            var c = new UIAlertView("提示", "保存文件失败，请重试。", "好的");
            c.show();
            if (b) {
                b( - 1)
            }
        }
    },
    showEnterTitleDialog: function() {
        var a = new UIAlertView("输入导图名称", null, "确定");
        a.setTag(101);
        a.setDelegate(this);
        a.setAlertViewStyle(UIAlertView.Style.PlainTextInput);
        a.show();
        var c = this.mGraphView.rootNode().textView().text();
        if (c && c.length > 0) {
            var b = a.textFieldAtIndex(0);
            b.setPlaceholder(c)
        }
    },
    cheackIfUserLogin: function() {
        var b = UserSessionManager.defaultManager();
        if (!b.isLogin()) {
            var a = new UIAlertView("提示", "保存当前文件需要先通过手机号或者邮箱登录哦。", "取消", "前往");
            a.setTag(102);
            a.setDelegate(this);
            a.show();
            return false
        }
        return true
    },
    alertViewClickedButtonAtIndex: function(h, f) {
        var j = h.tag();
        if (j == 100) {
            if (f == 0) {
                this.createOrOpenNextFile()
            } else {
                if (this.cheackIfUserLogin()) {
                    this.mCreatingOrOpenNextFile = true;
                    this.showEnterTitleDialog()
                }
            }
        } else {
            if (j == 101) {
                var a = this.mCreatingOrOpenNextFile;
                this.mCreatingOrOpenNextFile = false;
                var g = h.textFieldAtIndex(0);
                var c = g.text();
                if (!c || c.length == 0) {
                    c = g.placeholder()
                }
                if (!c || c.length == 0) {
                    var h = new UIAlertView("提示", "请输入文件名称。", "好的");
                    h.show()
                } else {
                    var e = new MindFile(c + ".mm");
                    this.setMindFile(e);
                    var i = this;
                    this.save(function(k) {
                        if (k == 0) {
                            if (a) {
                                i.createOrOpenNextFile()
                            } else {
                                var l = new UIAlertView("提示", "保存文件成功，1分钟后会自动同步到云空间。", "好的");
                                l.show()
                            }
                        }
                    })
                }
            } else {
                if (j == 102) {
                    if (f == 1) {
                        this.showLoginViewController()
                    }
                } else {
                    if (j == 103) {
                        if (f == 1) {
                            window.open("https://itunes.apple.com/cn/app/id1025462912")
                        } else {
                            if (f == 2) {
                                window.open("http://fir.im/968p")
                            } else {
                                if (f == 3) {
                                    UserSessionManager.defaultManager().logout()
                                }
                            }
                        }
                    } else {
                        if (j == 104) {
                            if (f == 1) {
                                UserSessionManager.defaultManager().logout()
                            }
                        } else {
                            if (j == 105) {
                                if (f == 1) {
                                    var d = h.userData();
                                    if (d != null) {
                                        var b = h.textFieldAtIndex(0).text();
                                        if (b.length == 0) {
                                            var h = new UIAlertView("提示", "URL不能为空。", "好的");
                                            h.show();
                                            return
                                        }
                                        if (b.indexOf("http://") != 0 && b.indexOf("https://") != 0) {
                                            b = "http://" + b
                                        }
                                        d.setURL(b)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    showLoginViewController: function() {
        var a = new LoginViewController();
        a.isModal = true;
        var b = new UINavigationController(a);
        b.modalPresentationSize = new CGSize(600, 400);
        this.presentViewController(b, false)
    },
    mindNodeSelectionViewWillShow: function(c) {
        var b = this;
        var a = new UIBarButtonItem("取消", null,
        function() {
            b.mGraphView.dismissSelectionView()
        });
        this.navigationItem().setLeftBarButtonItems([a])
    },
    mindNodeSelectionViewDidDismiss: function() {
        var a = this;
        var c = UserSessionManager.defaultManager().account();
        var b = new UIBarButtonItem(c != null ? c.name: "登录", null,
        function() {
            a.showUserAccount()
        });
        this.navigationItem().setLeftBarButtonItems([b])
    },
    openMindGraphFile: function(d) {
        var b = null;
        var g = d.data();
        if (/.+\.xmind/.test(d.name())) {
            var f = new XMindExporter();
            b = f.exportMindNode(g);
            if (b) {
                this.setMindFile(d);
                this.mGraphView.setRootNode(b)
            }
        } else {
            try {
                var a = new NSKeyedUnarchiver(g);
                b = a.decodeObjectForKey("root");
                if (b) {
                    this.setMindFile(d);
                    this.mGraphView.setRootNode(b);
                    return
                }
            } catch(h) {}
            var f = new FreeMindExporter();
            b = f.exportMindNode(g);
            if (b) {
                this.setMindFile(d);
                this.mGraphView.setRootNode(b)
            }
        }
        if (!b) {
            var c = new UIAlertView("提示", "文件格式不对，无法打开...", "好的");
            c.show()
        }
    },
    setMindFile: function(c) {
        this.mFile = c;
        if (c) {
            var b = c.name();
            if (b && b.length > 0) {
                var a = b.lastIndexOf(".");
                if (a >= 0) {
                    b = b.substring(0, a)
                }
                this.setTitle(b);
                return
            }
        }
        this.setTitle("思维导图")
    },
    showExportOptionsPanel: function() {
        var a = new ExportOptionsViewController();
        a.handler = this;
        var b = this.view().window();
        a.modalPresentationSize = new CGSize(120, 44 * 5);
        a.modalPresentationOrigin = new CGPoint(b.width() - 150, 65);
        a.modalPresentationAutoDismiss = true;
        this.presentViewController(a, false)
    },
    showMoreOptionsPanel: function() {
        var a = new MoreOptionsViewController();
        var b = this.view().window();
        a.modalPresentationSize = new CGSize(120, 132);
        a.modalPresentationOrigin = new CGPoint(b.width() - 130, 65);
        a.modalPresentationAutoDismiss = true;
        this.presentViewController(a, false)
    },
    exportFile0: function(c, b) {
        var a = UserSessionManager.defaultManager();
        a.exportFile(c, b,
        function(e, d) {
            if (e == 0) {
                window.location = d
            } else {
                var f = new UIAlertView("提示", "导出失败，请重试。", "好的");
                f.show()
            }
        })
    },
    exportFile: function(j) {
        if (j == "photo") {
            this.mGraphView.setRenderSnapshot(true);
            var d = this.mGraphView.canvas()[0].toDataURL();
            var b = {
                data: d,
                width: this.mGraphView.width(),
                height: this.mGraphView.height()
            };
            localStorage.snapshot = JSON.stringify(b);
            this.mGraphView.setRenderSnapshot(false);
            window.open("snapshot.html")
        } else {
            if (j == "mm" || j == "freemind" || j == "xmind") {
                var f = UserSessionManager.defaultManager();
                if (f.isLogin()) {
                    var e = this.mGraphView.rootNode();
                    var h = null;
                    if (j == "mm") {
                        var l = {
                            root: e
                        };
                        h = NSKeyedArchiver.archivedDataWithRootObject(l);
                        this.exportFile0(h, "mm")
                    } else {
                        if (j == "freemind") {
                            var c = new FreeMindExporter();
                            h = c.exportFreeMind(e);
                            this.exportFile0(h, "mm")
                        } else {
                            var c = new XMindExporter();
                            h = c.exportXMind(e);
                            this.exportFile0(h, "xmind")
                        }
                    }
                } else {
                    var i = new UIAlertView("提示", "导出文件前先点击登录。", "好的");
                    i.show()
                }
            } else {
                if (j == "outline") {
                    var g = new HtmlOutlineMaker();
                    var k = this.mGraphView.rootNode();
                    var a = g.buildHTMLString(k);
                    localStorage.outline = a;
                    window.open("outline.html")
                }
            }
        }
    },
    mindNodeRemarkWillShow: function(b) {
        var c = new RemarkViewController(b);
        var a = new UINavigationController(c);
        a.modalPresentationSize = new CGSize(600, 400);
        this.presentViewController(a, false)
    },
    mindNodeURLWillAdd: function(b) {
        var a = new UIAlertView("添加网址", null, "取消", "确定");
        a.setAlertViewStyle(UIAlertView.Style.PlainTextInput);
        a.setDelegate(this);
        a.setTag(105);
        a.setUserData(b);
        a.show()
    },
    mindNodeMarkPickerWillShow: function(b) {
        var c = new MarkViewController(b);
        var a = new UINavigationController(c);
        a.modalPresentationSize = new CGSize(600, 400);
        this.presentViewController(a, false)
    },
    scrollViewDidScroll: function(a) {
        UIMenuController.sharedMenuController().setMenuVisible(false)
    }
});
MindNode = defineClass({
    statics: {
        INVALID_GRAPH_POINT: new CGPoint( - 1000, -1000),
        MIN_TEXT_LEN: 100,
        MAX_TEXT_LEN: 200,
        MIN_TEXT_HEIGHT: 25,
        DEFAULT_NODE_MARGIN: 30,
        MarkType: {
            None: 0,
            Highlight: 1,
            StrikeThrough: 2,
            Underline: 3,
            Tick: 4,
            Close: 5,
            Remind: 6,
            Warn: 7,
            Bulb: 8,
            Start: 9
        }
    },
    init: function() {
        this.mID = stringRandom(5);
        this.mParent = null;
        this.mRootPoint = new CGPoint();
        this.mGraphPoint = new CGPoint();
        this.mGraphPrevPoint = MindNode.INVALID_GRAPH_POINT;
        this.mGraphAniPoint = MindNode.INVALID_GRAPH_POINT;
        this.mChildren = [];
        this.mChildren2 = [];
        this.mTextEdgeInsets = new UIEdgeInsets(12, 0, 6, 15);
        this.mImageEdgeInsets = new UIEdgeInsets(16, 0, 10, 15);
        this.mLineColorHex = "#BBBBBB";
        this.mAddBtn = new UIButton(new CGRect(0, 0, 30, 30));
        this.mAddBtn.setImage(new UIImage("res/btn_add.png", 24, 24), UIControl.State.Normal);
        var a = this;
        this.mAddBtn.addTarget(function(b) {
            a.onAddBtnClick(b)
        },
        UIControl.Events.TouchUpInside);
        this.mTextView = new UITextView();
        this.mTextView.setFontSize("15px");
        this.setTextViewFrame(new CGRect(0, 0, MindNode.MIN_TEXT_LEN, MindNode.MIN_TEXT_HEIGHT));
        this.mTextView.layer().keyup(function() {
            a.textViewDidChange()
        });
        this.mTextView.layer().focusin(function() {
            a.textViewDidBeginEditing()
        });
        this.mTextView.layer().focusout(function() {
            a.textViewDidEndEditing()
        });
        this.mTextView.layer().css("border", "0");
        this.mTextView.layer().css("background-image", "none");
        this.mTextView.setBackgroundColor("transparent");
        this.mShrink = false;
        this.mLeft = false;
        this.mChildrenTotalHeight = 0;
        this.mChildrenTotalHeight2 = 0;
        this.mExpandLeftEnable = false;
        this.mLinkedNodeIDs = [];
        this.mMarkType = MindNode.MarkType.None
    },
    initWithCoder: function(g) {
        var n = g.decodeObjectForKey("ID");
        if (n) {
            this.mID = n
        }
        this.mRootPoint = g.decodeObjectForKey("rootPoint");
        this.mLineColorHex = g.decodeObjectForKey("lineColorHex");
        this.mExpandLeftEnable = g.decodeBoolForKey("expandLeftEnable");
        var f = g.decodeBoolForKey("isLeft");
        this.setLeft(f);
        var t = g.decodeBoolForKey("shrink");
        var m = this;
        if (t) {
            this.mShrinkChildrenData = g.objectForKey("children");
            this.setShrink(t)
        } else {
            var e = g.decodeObjectForKey("children");
            if (e != null) {
                this.mChildren = e;
                e.forEach(function(u) {
                    u.mParent = m;
                    u.setLeft(m.mLeft)
                })
            }
        }
        var j = g.decodeObjectForKey("children2");
        if (j != null) {
            this.mChildren2 = j;
            j.forEach(function(u) {
                u.mParent = m;
                u.setLeft(true)
            })
        }
        var k = g.decodeObjectForKey("text");
        this.mTextView.setText(k);
        var l = this.textViewFitSize();
        this.setTextViewFrame(new CGRect(0, 0, l.width, l.height));
        var p = g.decodeObjectForKey("remark");
        if (p) {
            this.setRemark(p)
        }
        var i = g.decodeObjectForKey("imageSize");
        if (i) {
            var q = g.decodeObjectForKey("imageName");
            if (q) {
                this.setImage(q, i)
            }
        }
        var a = g.decodeObjectForKey("linkedNodeIDs");
        if (a) {
            this.mLinkedNodeIDs = a
        }
        var h = g.decodeObjectForKey("markType");
        if (h) {
            var c = parseInt(h);
            if (c != MindNode.MarkType.None) {
                this.setMarkType(c)
            }
        } else {
            var b = g.decodeBoolForKey("marked");
            if (b) {
                this.setMarkType(MindNode.MarkType.Highlight)
            }
            var o = g.decodeBoolForKey("strikeThrough");
            if (o) {
                this.setMarkType(MindNode.MarkType.StrikeThrough)
            }
        }
        var d = g.decodeObjectForKey("url");
        if (d) {
            this.setURL(d)
        }
        this.mFileName = g.decodeObjectForKey("fileName");
        var r = g.decodeObjectForKey("summarizedNodeID");
        if (r) {
            var s = g.decodeObjectForKey("summarizedText");
            this.summarizeTo(r, s)
        }
    },
    encodeWithCoder: function(a) {
        a.encodeObjectForKey(this.mID, "ID");
        a.encodeObjectForKey(this.mRootPoint, "rootPoint");
        a.encodeObjectForKey(this.mLineColorHex, "lineColorHex");
        if (this.mShrinkChildrenData) {
            a.setObjectForKey(this.mShrinkChildrenData, "children")
        } else {
            a.encodeObjectForKey(this.mChildren, "children")
        }
        a.encodeObjectForKey(this.mChildren2, "children2");
        a.encodeObjectForKey(this.mTextView.text(), "text");
        a.encodeObjectForKey(this.mShrink, "shrink");
        a.encodeObjectForKey(this.mLeft, "isLeft");
        a.encodeObjectForKey(this.mExpandLeftEnable, "expandLeftEnable");
        a.encodeObjectForKey(this.mRemark, "remark");
        if (this.mImageName) {
            a.encodeObjectForKey(this.mImageName, "imageName");
            a.encodeObjectForKey(this.mImageSize, "imageSize")
        }
        if (this.mLinkedNodeIDs.length > 0) {
            a.encodeObjectForKey(this.mLinkedNodeIDs, "linkedNodeIDs")
        }
        a.encodeObjectForKey(this.mMarkType, "markType");
        a.encodeObjectForKey(this.mURL, "url");
        a.encodeObjectForKey(this.mFileName, "fileName");
        a.encodeObjectForKey(this.mSummarizedNodeID, "summarizedNodeID");
        if (this.mSummarizedTextView) {
            a.encodeObjectForKey(this.mSummarizedTextView.text(), "summarizedText")
        }
    },
    lineColorHex: function() {
        return this.mLineColorHex
    },
    setLineColorHex: function(a) {
        this.mLineColorHex = a;
        this.mChildren.forEach(function(b) {
            b.setLineColorHex(a)
        })
    },
    rootPoint: function() {
        return new CGPoint(this.mRootPoint)
    },
    presentPoint: function() {
        return new CGPoint(this.mGraphPoint)
    },
    isRoot: function() {
        return this.mRoot
    },
    setRoot: function(b) {
        this.mRoot = b;
        if (b) {
            this.mTextEdgeInsets.left = 10;
            if (this.mTextView.width() < this.minTextWidth()) {
                var c = this.mTextView.frame();
                c.size.width = this.minTextWidth();
                this.mTextView.setFrame(c)
            }
            this.mTextView.setTextAlignment("center");
            if (this.mAddBtn2 == null) {
                this.mAddBtn2 = new UIButton(new CGRect(0, 0, 30, 30));
                this.mAddBtn2.setImage(new UIImage("res/btn_add.png", 24, 24), UIControl.State.Normal);
                var a = this;
                this.mAddBtn2.addTarget(function(d) {
                    a.onAddBtnClick(d)
                },
                UIControl.Events.TouchUpInside);
                this.mAddBtn2.setHidden(!this.mExpandLeftEnable)
            }
        } else {
            this.mTextEdgeInsets.left = 0;
            this.mTextView.setTextAlignment("left")
        }
    },
    setRootPoint: function(a) {
        this.mRootPoint = new CGPoint(a)
    },
    setGraphPoint: function(a) {
        this.mGraphPoint = new CGPoint(a);
        this.setUIViewPosWithGraphPoint(a)
    },
    graphPoint: function() {
        return new CGPoint(this.mGraphPoint)
    },
    minTextWidth: function() {
        return this.mRoot ? MindNode.MIN_TEXT_LEN + 10 : MindNode.MIN_TEXT_LEN
    },
    layout: function() {
        if (!this.mParent) {
            this.setGraphPoint(new CGPoint(this.contentSize().width, 0))
        }
        this.layoutSubnodes()
    },
    layoutSubnodes: function() {
        var b = this.calculateChildrenTotalHeight();
        var d = -b / 2;
        var c = this;
        this.mChildren.forEach(function(h) {
            var g = new CGPoint();
            var f = h.contentSize();
            g.x = f.width + MindNode.DEFAULT_NODE_MARGIN;
            g.y = d + Math.max(f.height, h.mChildrenTotalHeight / 2);
            if (c.mLeft) {
                g.x *= -1
            }
            h.setGraphPoint(g);
            h.layout();
            d = g.y + h.mChildrenTotalHeight / 2
        });
        if (this.mRoot) {
            var e = this.calculateChildrenTotalHeight2();
            var a = -e / 2;
            this.mChildren2.forEach(function(h) {
                var g = new CGPoint();
                var f = h.contentSize();
                g.x = -f.width - MindNode.DEFAULT_NODE_MARGIN;
                g.y = a + Math.max(f.height, h.mChildrenTotalHeight / 2);
                h.setGraphPoint(g);
                h.layout();
                a = g.y + h.mChildrenTotalHeight / 2
            })
        }
    },
    calculateChildrenTotalHeight: function() {
        if (this.mShrink) {
            this.mChildrenTotalHeight = 0
        } else {
            var a = 0;
            this.mChildren.forEach(function(d) {
                var b = d.calculateChildrenTotalHeight();
                var c = d.contentSize();
                a += Math.max(c.height, b / 2) + b / 2
            });
            this.mChildrenTotalHeight = a
        }
        return this.mChildrenTotalHeight
    },
    calculateChildrenTotalHeight2: function() {
        if (this.mShrink) {
            this.mChildrenTotalHeight2 = 0
        } else {
            var a = 0;
            this.mChildren2.forEach(function(d) {
                var b = d.calculateChildrenTotalHeight();
                var c = d.contentSize();
                a += Math.max(c.height, b / 2) + b / 2
            });
            this.mChildrenTotalHeight2 = a
        }
        return this.mChildrenTotalHeight2
    },
    contentSize: function() {
        var d;
        if (this.mImageView) {
            if (this.mTextView.text().length > 0 || this.mTextView.isFirstResponder()) {
                var c = Math.max(this.mTextView.size().width + this.mTextEdgeInsets.left + this.mTextEdgeInsets.right, this.mImageView.size().width + this.mImageEdgeInsets.left + this.mImageEdgeInsets.right);
                var a = this.mTextView.size().height + this.mImageView.size().height + this.mImageEdgeInsets.top + this.mTextEdgeInsets.bottom;
                d = new CGSize(c, a)
            } else {
                var b = this.mImageView.bounds().size;
                d = new CGSize(b.width + this.mImageEdgeInsets.left + this.mImageEdgeInsets.right, b.height + this.mImageEdgeInsets.top + this.mImageEdgeInsets.bottom)
            }
        } else {
            var b = this.mTextView.size();
            d = new CGSize(b.width + this.mTextEdgeInsets.left + this.mTextEdgeInsets.right, b.height + this.mTextEdgeInsets.top + this.mTextEdgeInsets.bottom)
        }
        if (this.mMarkView != null) {
            d.width += this.mMarkView.width()
        }
        return d
    },
    onAddBtnClick: function(a) {
        if (this.mDelegate) {
            this.mDelegate.mindNodeAddBtnDidClick(this, a)
        }
    },
    isShrink: function() {
        return this.mShrink
    },
    setShrink: function(c) {
        this.mShrink = c;
        this.setChildrenUIViewHidden(c);
        if (c) {
            this.mAddBtn.setImage(new UIImage("res/btn_expand.png", 24, 24), UIControl.State.Normal)
        } else {
            this.mAddBtn.setImage(new UIImage("res/btn_add.png", 24, 24), UIControl.State.Normal)
        }
        if (!c && this.mShrinkChildrenData) {
            var d = new NSKeyedUnarchiver();
            var b = d.decodeObject(this.mShrinkChildrenData);
            if (b != null) {
                this.mChildren = b;
                var a = this;
                b.forEach(function(e) {
                    e.mParent = a;
                    e.setLeft(a.mLeft)
                })
            }
            this.layoutSubnodes();
            if (this.mDelegate) {
                this.mDelegate.mindNodeChildrenDidExpand(this, b)
            }
            this.mShrinkChildrenData = null
        }
    },
    isMarked: function() {
        return this.mMarked
    },
    setMarked: function(a) {
        this.mMarked = a;
        this.mTextView.setTextColor(a ? "red": "black")
    },
    setChildrenUIViewHidden: function(a) {
        this.mChildren.forEach(function(d) {
            var c = d.imageView();
            if (c) {
                c.setHidden(a)
            }
            d.textView().setHidden(a);
            d.addBtn().setHidden(a);
            if (d.remarkBtn()) {
                if (a) {
                    d.remarkBtn().setHidden(true)
                } else {
                    d.remarkBtn().setHidden(d.remark() == null)
                }
            }
            if (d.urlBtn()) {
                if (a) {
                    d.urlBtn().setHidden(true)
                } else {
                    d.urlBtn().setHidden(d.url() == null)
                }
            }
            var b = d.markView();
            if (b != null) {
                b.setHidden(a)
            }
            if (!d.isShrink()) {
                d.setChildrenUIViewHidden(a)
            }
        })
    },
    children: function() {
        return this.mChildren
    },
    children2: function() {
        return this.mChildren2
    },
    isLeft: function() {
        return this.mLeft
    },
    setLeft: function(a) {
        this.mLeft = a;
        if (a) {
            this.mTextView.setTextAlignment("right")
        } else {
            this.mTextView.setTextAlignment("left")
        }
        this.mChildren.forEach(function(b) {
            b.setLeft(a)
        })
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    addNode: function(a) {
        a.mParent = this;
        a.setLeft(this.mLeft);
        this.mChildren.push(a);
        if (this.mDelegate) {
            this.mDelegate.mindNodeChildDidAdd(this, a)
        }
    },
    parent: function() {
        return this.mParent
    },
    addNode2: function(a) {
        a.mParent = this;
        a.setLeft(true);
        this.mChildren2.push(a);
        if (this.mDelegate) {
            this.mDelegate.mindNodeChildDidAdd(this, a)
        }
    },
    insertNodeAtIndex: function(b, a) {
        b.mParent = this;
        b.setLeft(this.mLeft);
        this.mChildren.splice(a, 0, b);
        if (this.mDelegate) {
            this.mDelegate.mindNodeChildDidAdd(this, b)
        }
    },
    insertNode2AtIndex: function(b, a) {
        b.mParent = this;
        b.setLeft(true);
        this.mChildren2.splice(a, 0, b);
        if (this.mDelegate) {
            this.mDelegate.mindNodeChildDidAdd(this, b)
        }
    },
    addBtn: function() {
        return this.mAddBtn
    },
    addBtn2: function() {
        return this.mAddBtn2
    },
    textEdgeInsets: function() {
        return new UIEdgeInsets(this.mTextEdgeInsets)
    },
    imageEdgeInsets: function() {
        return new UIEdgeInsets(this.mImageEdgeInsets)
    },
    setUIViewPosWithGraphPoint: function(g) {
        var c = this.getGlobalGraphPoint(g);
        this.mAddBtn.setCenter(c);
        if (this.mAddBtn2 != null) {
            this.mAddBtn2.setCenter(new CGPoint(c.x - this.mGraphPoint.x, c.y))
        }
        if (this.mLeft) {
            c.x -= g.x + MindNode.DEFAULT_NODE_MARGIN / 2 + 2
        }
        if (this.mImageView) {
            if (this.mTextView.text().length > 0 || this.mTextView.isFirstResponder()) {
                if (this.mLeft) {
                    var h = this.mTextView.frame();
                    h.origin = new CGPoint(c.x - h.size.width - this.mTextEdgeInsets.right, c.y - h.size.height - this.mTextEdgeInsets.bottom);
                    this.mTextView.setFrame(h);
                    var i = this.mImageView.frame();
                    i.origin = new CGPoint(c.x - i.size.width - this.mImageEdgeInsets.right, h.origin.y - i.size.height);
                    this.mImageView.setFrame(i)
                } else {
                    var a = Math.max(this.mTextView.width() + this.mTextEdgeInsets.right, this.mImageView.width() + this.mImageEdgeInsets.right);
                    var h = this.mTextView.frame();
                    if (this.mRoot) {
                        h.origin = new CGPoint(c.x - (this.contentSize().width + this.mTextView.width()) / 2, c.y - h.size.height - this.mTextEdgeInsets.bottom)
                    } else {
                        h.origin = new CGPoint(c.x - a, c.y - h.size.height - this.mTextEdgeInsets.bottom)
                    }
                    this.mTextView.setFrame(h);
                    var i = this.mImageView.frame();
                    if (this.mRoot) {
                        i.origin = new CGPoint(c.x - (this.contentSize().width + this.mImageView.width()) / 2, h.origin.y - i.size.height)
                    } else {
                        i.origin = new CGPoint(c.x - a, h.origin.y - i.size.height)
                    }
                    this.mImageView.setFrame(i)
                }
            } else {
                var h = this.mTextView.frame();
                h.origin = new CGPoint(c.x - h.size.width - this.mTextEdgeInsets.right - 5, c.y - h.size.height - this.mTextEdgeInsets.bottom);
                this.mTextView.setFrame(h);
                var i = this.mImageView.frame();
                i.origin = new CGPoint(c.x - i.size.width - this.mImageEdgeInsets.right, c.y - i.size.height - this.mImageEdgeInsets.bottom);
                this.mImageView.setFrame(i)
            }
        } else {
            var h = this.mTextView.frame();
            h.origin = new CGPoint(c.x - h.size.width - this.mTextEdgeInsets.right, c.y - h.size.height - this.mTextEdgeInsets.bottom);
            this.mTextView.setFrame(h)
        }
        var d = Math.max(this.mTextView.right(), this.mImageView != null ? this.mImageView.right() : 0) + 5;
        if (this.mRemarkBtn) {
            var e = this.mRemarkBtn.frame();
            e.origin = new CGPoint(d, this.mTextView.bottom() - e.size.height - 5);
            this.mRemarkBtn.setFrame(e);
            d += e.size.width
        }
        if (this.mURLBtn) {
            var j = this.mURLBtn.frame();
            j.origin = new CGPoint(d, this.mTextView.bottom() - j.size.height - 5);
            this.mURLBtn.setFrame(j);
            d += j.size.width
        }
        if (this.mMarkView != null) {
            var b = this.contentSize();
            var f = this.mMarkView.frame();
            f.origin = new CGPoint(c.x - b.width, c.y - b.height / 2 - f.size.height / 2 + 2);
            this.mMarkView.setFrame(f)
        }
    },
    getGlobalGraphPoint: function(b) {
        var d = new CGPoint(b);
        var c = this.mParent;
        if (c == null) {
            d.x += this.mRootPoint.x;
            d.y += this.mRootPoint.y
        }
        while (c != null) {
            d.x += c.presentPoint().x;
            d.y += c.presentPoint().y;
            var a = c.mParent;
            if (a == null) {
                d.x += c.mRootPoint.x;
                d.y += c.mRootPoint.y;
                if (this.mLeft) {
                    d.x -= c.presentPoint().x
                }
            }
            c = a
        }
        return d
    },
    nodeWidth: function() {
        var b = Math.abs(this.mGraphPoint.x);
        var c = 0;
        if (!this.mShrink) {
            this.mChildren.forEach(function(d) {
                c = Math.max(c, d.nodeWidth())
            })
        }
        b += c;
        var a = 0;
        if (!this.mShrink) {
            this.mChildren2.forEach(function(d) {
                a = Math.max(a, d.nodeWidth())
            })
        }
        b += a;
        return b
    },
    nodeLeftWidth: function() {
        var a = 0;
        this.mChildren2.forEach(function(b) {
            a = Math.max(a, b.nodeWidth())
        });
        return a
    },
    nodeHeight: function() {
        var a = Math.max(this.mChildrenTotalHeight, this.mChildrenTotalHeight2);
        return a / 2 + Math.max(this.mTextView.height(), a / 2)
    },
    updateUIViewPosition: function() {
        this.setUIViewPosWithGraphPoint(this.mGraphPoint);
        this.mChildren.forEach(function(a) {
            a.updateUIViewPosition()
        });
        this.mChildren2.forEach(function(a) {
            a.updateUIViewPosition()
        })
    },
    childrenTotalHeight: function() {
        return this.mChildrenTotalHeight
    },
    textView: function() {
        return this.mTextView
    },
    textViewDidChange: function() {
        var a = this.mTextView.text();
        if (a != this.mText) {
            if (this.mDelegate) {
                this.mDelegate.mindNodeTextViewDidChange(this, this.mTextView)
            }
        }
    },
    textViewDidBeginEditing: function() {
        if (this.mDelegate) {
            this.mDelegate.mindNodeTextViewDidBeginEditing(this, this.mTextView)
        }
    },
    textViewDidEndEditing: function() {
        if (this.mDelegate) {
            this.mDelegate.mindNodeTextViewDidEndEditing(this, this.mTextView)
        }
    },
    textViewFitSize: function(a) {
        if (!a) {
            a = this.mTextView
        }
        var b = a.sizeThatFits(new CGSize(MindNode.MAX_TEXT_LEN, Number.MAX_VALUE));
        b.width = Math.max(b.width, this.minTextWidth());
        b.height = Math.max(b.height, MindNode.MIN_TEXT_HEIGHT);
        return b
    },
    setTextViewFrame: function(a) {
        this.mTextView.setFrame(a);
        this.mTextView.sizeToFit();
        if (a.size.width <= MindNode.MIN_TEXT_HEIGHT) {
            this.mTextView.layer().css("white-space", "nowrap")
        } else {
            this.mTextView.layer().css("white-space", "")
        }
    },
    isExpandLeftEnable: function() {
        return this.mExpandLeftEnable
    },
    setExpandLeftEnable: function(a) {
        this.mExpandLeftEnable = a;
        if (a) {
            this.mAddBtn2.setHidden(false)
        } else {
            this.mAddBtn2.setHidden(true);
            var b = this.mChildren2.slice();
            b.forEach(function(c) {
                c.removeFromParent()
            })
        }
    },
    removeFromParent: function() {
        var a = this.mParent;
        if (a != null) {
            if (a.mChildren.indexOf(this) >= 0) {
                a.mChildren.remove(this)
            } else {
                a.mChildren2.remove(this)
            }
            if (this.mDelegate != null) {
                this.mDelegate.mindNodeChildDidRemove(a, this)
            }
            this.mParent = null
        }
    },
    globalSelectionRect: function() {
        var h = this.mImageView ? this.mImageView: this.mTextView;
        var a = h.frame().origin;
        var e = this.getGlobalGraphPoint(this.mGraphPoint);
        var d = Math.max(this.mChildrenTotalHeight, this.mChildrenTotalHeight2);
        var b = this.mImageView ? this.mImageEdgeInsets.bottom: this.mTextEdgeInsets.bottom;
        var c = Math.max(h.height() + b, d / 2);
        var f = (this.mShrink ? Math.abs(this.mGraphPoint.x) : this.nodeWidth()) - MindNode.DEFAULT_NODE_MARGIN + this.mAddBtn.width() / 2;
        var g = new CGRect(this.mLeft ? (a.x + h.width() - f + 6) : a.x, e.y - c, f, d / 2 + c + this.mAddBtn.height() / 2);
        return g
    },
    copy: function() {
        var a = new MindNode();
        a.setRootPoint(this.mRootPoint);
        a.setLineColorHex(this.mLineColorHex);
        a.textView().setText(this.mTextView.text());
        a.textView().setFrame(new CGRect(0, 0, this.mTextView.width(), this.mTextView.height()));
        a.addBtn().setHidden(this.mAddBtn.isHidden());
        a.setLeft(this.mLeft);
        a.setRoot(this.mRoot);
        a.setRemark(this.mRemark);
        a.setMarkType(this.mMarkType);
        if (this.mLinkedNodeIDs != null) {
            a.mLinkedNodeIDs = this.mLinkedNodeIDs.slice()
        }
        if (this.mImageName) {
            a.setImage(this.mImageName, this.mImageSize)
        }
        if (this.mShrinkChildrenData) {
            a.mShrinkChildrenData = this.mShrinkChildrenData
        } else {
            this.mChildren.forEach(function(c) {
                var b = c.copy();
                a.addNode(b)
            })
        }
        a.setShrink(this.mShrink);
        return a
    },
    isEmpty: function() {
        return this.mChildren.length == 0 && this.mChildren2.length == 0 && (!this.mTextView.text() || this.mTextView.text().length == 0)
    },
    remark: function() {
        return this.mRemark
    },
    setRemark: function(f) {
        this.mRemark = f;
        var d = (f == null);
        var c = (this.mRemarkBtn == null);
        if (d != c) {
            if (d) {
                if (this.mRemarkBtn) {
                    this.mRemarkBtn.removeFromSuperview();
                    this.mRemarkBtn = null
                }
            } else {
                if (!this.mRemarkBtn) {
                    this.mRemarkBtn = new UIButton(new CGRect(0, 0, 20, 20));
                    this.mRemarkBtn.setImage(new UIImage("res/remark.png", 20, 20), UIControl.State.Normal);
                    var b = this;
                    this.mRemarkBtn.addTarget(function() {
                        b.onRemarkBtnClick()
                    },
                    UIControl.Events.TouchUpInside)
                }
            }
            var a = this.mTextEdgeInsets.right;
            var g = this.calculateContentRightEdge();
            this.mTextEdgeInsets.right = g;
            this.mImageEdgeInsets.right = g;
            if (this.mParent != null || this.mRoot) {
                var e = this.graphPoint();
                if (this.mLeft) {
                    e.x -= g - a
                } else {
                    e.x += g - a
                }
                this.setGraphPoint(e);
                this.layoutSubnodes();
                if (this.mDelegate != null) {
                    this.mDelegate.mindNodeAttachBtnDidUpdate(this, this.mRemarkBtn)
                }
            }
        }
    },
    calculateContentRightEdge: function() {
        var a = 15;
        if (this.mRemarkBtn) {
            a += this.mRemarkBtn.width()
        }
        if (this.mURLBtn) {
            a += this.mURLBtn.width()
        }
        return a
    },
    onRemarkBtnClick: function() {
        if (this.mDelegate != null) {
            this.mDelegate.mindNodeRemarkBtnDidClick(this)
        }
    },
    remarkBtn: function() {
        return this.mRemarkBtn
    },
    setURL: function(c) {
        this.mURL = c;
        var e = (this.mURL == null);
        var d = (this.mURLBtn == null);
        if (e != d) {
            if (e) {
                if (this.mURLBtn) {
                    this.mURLBtn.removeFromSuperview();
                    this.mURLBtn = null
                }
            } else {
                if (!this.mURLBtn) {
                    this.mURLBtn = new UIButton(new CGRect(0, 0, 20, 20));
                    this.mURLBtn.setImage(new UIImage("res/url.png", 20, 20), UIControl.State.Normal);
                    var b = this;
                    this.mURLBtn.addTarget(function() {
                        b.onURLBtnClick()
                    },
                    UIControl.Events.TouchUpInside)
                }
            }
            var a = this.mTextEdgeInsets.right;
            var g = this.calculateContentRightEdge();
            this.mTextEdgeInsets.right = g;
            this.mImageEdgeInsets.right = g;
            if (this.mParent != null || this.mRoot) {
                var f = this.graphPoint();
                if (this.mLeft) {
                    f.x -= g - a
                } else {
                    f.x += g - a
                }
                this.setGraphPoint(f);
                this.layoutSubnodes();
                if (this.mDelegate != null) {
                    this.mDelegate.mindNodeAttachBtnDidUpdate(this, this.mURLBtn)
                }
            }
        }
    },
    url: function() {
        return this.mURL
    },
    urlBtn: function() {
        return this.mURLBtn
    },
    onURLBtnClick: function() {
        window.open(this.mURL)
    },
    imageView: function() {
        return this.mImageView
    },
    setImage: function(b, d) {
        this.mImageName = b;
        this.mImageSize = d;
        if (b) {
            if (!this.mImageView) {
                var c = new UIImageView();
                var a = this;
                c.layer().click(function() {
                    if (a.mDelegate) {
                        a.mDelegate.mindNodeTextViewDidBeginEditing(a, c)
                    }
                    c.becomeFirstResponder()
                });
                this.mImageView = c
            }
            var g = "http://ol009pzyg.bkt.clouddn.com/" + b;
            var e = this.preferredSizeForImageSize(d);
            var f = new UIImage(g, e);
            this.mImageView.setImage(f);
            this.mImageView.setFrame(new CGRect(0, 0, e.width, e.height))
        } else {
            if (this.mImageView) {
                this.mImageView.removeFromSuperview();
                this.mImageView = null
            }
        }
        if (this.mDelegate) {
            this.mDelegate.mindNodeImageDidUpdate(this)
        }
    },
    preferredSizeForImageSize: function(g) {
        var f = 160;
        var e = 160;
        var h = UIScreen.mainScreen().scale();
        var b = new CGSize(g.width / h, g.height / h);
        if (b.width > f || b.height > e) {
            var d, a;
            var c = b.width / b.height;
            if (c > f / e) {
                d = f;
                a = d / c
            } else {
                a = e;
                d = a * c
            }
            return new CGSize(d, a)
        } else {
            return b
        }
    },
    ID: function() {
        return this.mID
    },
    linkedNodeIDs: function() {
        return this.mLinkedNodeIDs
    },
    attachLinkTo: function(a) {
        var b = a.ID();
        if (this.mLinkedNodeIDs.indexOf(b) < 0) {
            this.mLinkedNodeIDs.push(b)
        }
    },
    detachLinkedNodes: function() {
        this.mLinkedNodeIDs = []
    },
    findNodeWithID: function(d) {
        if (this.mID == d) {
            return this
        }
        if (this.mShrink) {
            return null
        }
        for (var a = 0; a < this.mChildren.length; a++) {
            var c = this.mChildren[a];
            var b = c.findNodeWithID(d);
            if (b != null) {
                return b
            }
        }
        for (var a = 0; a < this.mChildren2.length; a++) {
            var c = this.mChildren2[a];
            var b = c.findNodeWithID(d);
            if (b != null) {
                return b
            }
        }
        return null
    },
    markType: function() {
        return this.mMarkType
    },
    setMarkType: function(a) {
        this.mMarkType = a;
        switch (a) {
        case MindNode.MarkType.None:
            this.mTextView.setTextColor("black");
            this.mTextView.layer().css("text-decoration", "none");
            break;
        case MindNode.MarkType.Highlight:
            this.mTextView.setTextColor("red");
            break;
        case MindNode.MarkType.StrikeThrough:
            this.mTextView.layer().css("text-decoration", "line-through");
            break;
        case MindNode.MarkType.Underline:
            this.mTextView.layer().css("text-decoration", "underline");
            break;
        default:
            var b = this.imageWithMarkType(a);
            if (b) {
                this.mMarkView = new UIImageView(new CGRect(0, 0, 30, 30));
                this.mMarkView.setImage(b)
            }
        }
        if (this.mDelegate) {
            this.mDelegate.mindNodeMarkTypeDidUpdate(this, a)
        }
    },
    imageWithMarkType: function(a) {
        switch (a) {
        case MindNode.MarkType.Tick:
            return new UIImage("res/tag_tick.png");
        case MindNode.MarkType.Close:
            return new UIImage("res/tag_close.png");
        case MindNode.MarkType.Remind:
            return new UIImage("res/tag_remind.png");
        case MindNode.MarkType.Warn:
            return new UIImage("res/tag_warn.png");
        case MindNode.MarkType.Bulb:
            return new UIImage("res/tag_bulb.png");
        case MindNode.MarkType.Start:
            return new UIImage("res/tag_start.png");
        default:
            return null
        }
    },
    markView: function() {
        return this.mMarkView
    },
    setMarkView: function(a) {
        this.mMarkView = a
    },
    summarizedNodeID: function() {
        return this.mSummarizedNodeID
    },
    summarizedTextView: function() {
        return this.mSummarizedTextView
    },
    summarizeTo: function(e, d) {
        this.mSummarizedNodeID = e;
        if (d != null && d.length > 0) {
            if (!this.mSummarizedTextView) {
                var c = new UILabel(new CGRect(0, 0, MindNode.MIN_TEXT_LEN, MindNode.MIN_TEXT_HEIGHT));
                c.setFont("15px");
                c.setTextAlignment(this.mLeft ? "right": "left");
                c.setTextColor("red");
                var a = this;
                c.layer().click(function() {
                    if (a.mDelegate != null) {
                        a.mDelegate.mindNodeSummarizedViewDidBeginEdit(a, c)
                    }
                });
                this.mSummarizedTextView = c
            }
            this.mSummarizedTextView.setText(d);
            var b = this.mSummarizedTextView.sizeThatFits(new CGSize(MindNode.MAX_TEXT_LEN, Number.MAX_VALUE));
            this.mSummarizedTextView.setFrame(new CGRect(0, 0, b.width, b.height));
            if (this.mDelegate) {
                this.mDelegate.mindNodeSummarizedViewDidUpdate(this, this.mSummarizedTextView)
            }
        } else {
            if (this.mSummarizedTextView != null) {
                this.mSummarizedTextView.removeFromSuperview();
                this.mSummarizedTextView = null
            }
            if (this.mDelegate) {
                this.mDelegate.mindNodeSummarizedViewDidUpdate(this, null)
            }
        }
    },
    summarizedBoundsWithNode: function(e) {
        var o = new CGRect(0, 0, 0, 0);
        var q = [];
        var b = this;
        while (b != null) {
            q.splice(0, 0, b);
            b = b.parent()
        }
        var a = [];
        var t = e;
        while (t != null) {
            a.splice(0, 0, t);
            t = t.parent()
        }
        var r = null,
        c = null,
        g = null;
        var l = Math.max(q.length, a.length);
        for (var f = 0; f < l; f++) {
            if (f > q.length - 1) {
                r = a[f - 1];
                c = a[f];
                if (r.children().indexOf(c) >= 0) {
                    g = r.children()[0]
                } else {
                    g = r.children2()[0]
                }
                break
            } else {
                if (f > a.length - 1) {
                    r = q[f - 1];
                    c = q[f];
                    if (r.children().indexOf(c) >= 0) {
                        g = r.children()[0]
                    } else {
                        g = r.children2()[0]
                    }
                    break
                } else {
                    if (q[f] != a[f]) {
                        r = q[f - 1];
                        c = q[f];
                        g = a[f];
                        break
                    }
                }
            }
        }
        var k = 0,
        m = 0,
        j = 0,
        h = 0;
        k = r.children().indexOf(c);
        if (k != -1) {
            m = r.children().indexOf(g);
            if (m == -1) {
                m = r.children().length - 1
            }
            j = Math.min(k, m);
            h = Math.max(k, m);
            var s = 0;
            for (var f = j; f <= h; f++) {
                var d = r.children()[f];
                s = Math.max(s, d.nodeWidth())
            }
            if (r.isLeft()) {
                o.origin.x = r.getGlobalGraphPoint(r.presentPoint()).x - s + 10
            } else {
                o.origin.x = r.getGlobalGraphPoint(r.presentPoint()).x + s - 10
            }
        } else {
            k = r.children2().indexOf(c);
            m = r.children2().indexOf(g);
            if (m == -1) {
                m = r.children2().length - 1
            }
            j = Math.min(k, m);
            h = Math.max(k, m);
            var s = 0;
            for (var f = j; f <= h; f++) {
                var d = r.children2()[f];
                s = Math.max(s, d.nodeWidth())
            }
            o.origin.x = r.getGlobalGraphPoint(new CGPoint()).x - s + 10
        }
        if (k < m) {
            o.origin.y = this.getGlobalGraphPoint(this.presentPoint()).y - (this.nodeHeight() - this.mChildrenTotalHeight / 2);
            o.size.height = e.getGlobalGraphPoint(e.presentPoint()).y + e.mChildrenTotalHeight / 2 - o.origin.y + 10
        } else {
            o.origin.y = e.getGlobalGraphPoint(e.presentPoint()).y - (e.nodeHeight() - e.mChildrenTotalHeight / 2);
            o.size.height = this.getGlobalGraphPoint(this.presentPoint()).y + this.mChildrenTotalHeight / 2 - o.origin.y + 10
        }
        return o
    }
});
CanvasRenderingContext2D.prototype.fillTextAutoLine = function(e, g, f, a, h) {
    var d = 0;
    var b = 0;
    var j = f;
    for (var c = 0; c < e.length; c++) {
        d += this.measureText(e[c]).width;
        if (d > a) {
            this.fillText(e.substring(b, c), g, j + h);
            j += h;
            d = 0;
            b = c
        }
        if (c == e.length - 1) {
            this.fillText(e.substring(b, c + 1), g, j + h)
        }
    }
};
NodeGraphView = defineClass({
    superClass: UIView,
    init: function(a) {
        UIView.call(this, a);
        this.mRootNode = null;
        this.mNodeLeftWidth = 0
    },
    setRenderSnapshot: function(a) {
        this.mRenderSnapshot = a;
        this.setNeedsDisplay()
    },
    drawRect: function(a) {
        if (this.mRootNode) {
            this.clearSummarizedTextViews();
            this.mLinkedNodes = [];
            this.mSummarizedNodes = [];
            a.save();
            if (this.mRenderSnapshot) {
                a.fillStyle = "white";
                a.fillRect(0, 0, this.width(), this.height())
            }
            a.lineWidth = 5;
            a.lineJoin = "round";
            a.lineCap = "round";
            a.strokeStyle = this.mRootNode.lineColorHex();
            var c = this.mRootNode.rootPoint();
            a.translate(c.x, c.y);
            a.beginPath();
            a.moveTo(0, 0);
            var b = this.mRootNode.presentPoint();
            a.lineTo(b.x, b.y);
            a.stroke();
            if (this.mRenderSnapshot) {
                this.drawNodeUIElements(a, this.mRootNode, b)
            }
            this.drawNode(a, this.mRootNode);
            a.restore();
            this.drawLinkedNodes(a, this.mLinkedNodes);
            this.drawSummarizedNodes(a, this.mSummarizedNodes)
        }
    },
    drawNode: function(a, e) {
        if (!e.isShrink()) {
            a.save();
            var c = e.presentPoint();
            a.translate(c.x, c.y);
            var d = e.children().slice();
            var b = this;
            d.forEach(function(h) {
                a.strokeStyle = h.lineColorHex();
                var g = h.presentPoint();
                a.beginPath();
                a.moveTo(0, 0);
                var f;
                if (e.isLeft()) {
                    f = Math.max( - MindNode.DEFAULT_NODE_MARGIN, g.x)
                } else {
                    f = Math.min(MindNode.DEFAULT_NODE_MARGIN, g.x)
                }
                a.quadraticCurveTo(f / 2, g.y, f, g.y);
                a.lineTo(g.x, g.y);
                a.stroke();
                if (b.mRenderSnapshot) {
                    b.drawNodeUIElements(a, h, g)
                }
                b.drawNode(a, h)
            });
            if (this.mRenderSnapshot) {
                if (e.isRoot()) {
                    a.beginPath();
                    a.arc(0, 0, 6, 0, Math.PI * 2);
                    a.fillStyle = "rgb(0,122,255)";
                    a.fill()
                }
            }
            a.restore();
            if (e.isRoot() && e.children2().length > 0) {
                c.x = 0;
                a.save();
                a.translate(c.x, c.y);
                var d = e.children2().slice();
                var b = this;
                d.forEach(function(h) {
                    a.strokeStyle = h.lineColorHex();
                    var g = h.presentPoint();
                    a.beginPath();
                    a.moveTo(0, 0);
                    var f = Math.max( - MindNode.DEFAULT_NODE_MARGIN, g.x);
                    a.quadraticCurveTo(f / 2, g.y, f, g.y);
                    a.lineTo(g.x, g.y);
                    a.stroke();
                    if (b.mRenderSnapshot) {
                        b.drawNodeUIElements(a, h, g)
                    }
                    b.drawNode(a, h)
                });
                if (this.mRenderSnapshot) {
                    a.beginPath();
                    a.arc(0, 0, 6, 0, Math.PI * 2);
                    a.fillStyle = "rgb(0,122,255)";
                    a.fill()
                }
                a.restore()
            }
        }
        if (e.linkedNodeIDs().length > 0) {
            this.mLinkedNodes.push(e)
        }
        if (e.summarizedNodeID()) {
            this.mSummarizedNodes.push(e)
        }
    },
    drawNodeUIElements: function(k, d, h) {
        var b = d.getGlobalGraphPoint(d.graphPoint());
        var i = d.textView();
        k.font = i.font();
        k.fillStyle = "black";
        var e = d.textEdgeInsets();
        if (d.isRoot()) {
            var a = Math.min(k.measureText(i.text()).width, i.width());
            k.fillTextAutoLine(i.text(), h.x + (i.left() - b.x) + (i.width() - a) / 2, h.y + (i.top() - b.y), i.width(), 18)
        } else {
            if (d.isLeft()) {
                var a = Math.min(k.measureText(i.text()).width, i.width());
                k.fillTextAutoLine(i.text(), h.x + (i.left() - b.x) + i.width() - a, h.y + (i.top() - b.y), i.width(), 18)
            } else {
                k.fillTextAutoLine(i.text(), h.x + (i.left() - b.x), h.y + (i.top() - b.y), i.width(), 18)
            }
        }
        var g = d.imageView();
        if (g) {
            var f = g.layer()[0];
            var e = d.imageEdgeInsets();
            k.drawImage(f, h.x + (g.left() - b.x), h.y + (g.top() - b.y), g.width(), g.height())
        }
        var j = d.markView();
        if (j) {
            var f = j.layer()[0];
            k.drawImage(f, h.x + (j.left() - b.x), h.y + (j.top() - b.y), j.width(), j.height())
        }
        var c = d.summarizedTextView();
        if (c) {
            k.fillStyle = "red";
            if (d.isLeft()) {
                var a = Math.min(k.measureText(c.text()).width, c.width());
                k.fillTextAutoLine(c.text(), h.x + (c.left() - b.x) + c.width() - a, h.y + (c.top() - b.y), i.width(), 18)
            } else {
                k.fillTextAutoLine(i.text(), h.x + (c.left() - b.x), h.y + (c.top() - b.y), i.width(), 18)
            }
        }
    },
    drawLinkedNodes: function(o, b) {
        if (b.length > 0) {
            o.lineWidth = 2;
            o.strokeStyle = "red";
            var m = 7;
            for (var g = 0; g < b.length; g++) {
                var d = b[g];
                var c = d.linkedNodeIDs().slice();
                var n;
                if (d.imageView()) {
                    if (d.isLeft()) {
                        n = new CGPoint(d.imageView().left() - m, d.imageView().center().y)
                    } else {
                        n = new CGPoint(d.imageView().right() + m, d.imageView().center().y)
                    }
                } else {
                    if (d.isLeft()) {
                        n = new CGPoint(d.textView().left() - m, d.textView().center().y)
                    } else {
                        n = new CGPoint(d.textView().right() + m, d.textView().center().y)
                    }
                }
                for (var f = 0; f < c.length; f++) {
                    var a = c[f];
                    var h = this.mRootNode.findNodeWithID(a);
                    if (h != null) {
                        var l;
                        if (h.imageView()) {
                            if (h.isLeft()) {
                                l = new CGPoint(h.textView().left() - m, h.imageView().center().y)
                            } else {
                                l = new CGPoint(h.textView().right() + m, h.imageView().center().y)
                            }
                        } else {
                            if (h.isLeft()) {
                                l = new CGPoint(h.textView().left() - m, h.textView().center().y)
                            } else {
                                l = new CGPoint(h.textView().right() + m, h.textView().center().y)
                            }
                        }
                        var k;
                        if (h.isLeft()) {
                            k = new CGPoint(Math.min(n.x, l.x) - 100, (n.y + l.y) / 2)
                        } else {
                            k = new CGPoint(Math.max(n.x, l.x) + 100, (n.y + l.y) / 2)
                        }
                        o.beginPath();
                        o.moveTo(n.x, n.y);
                        o.quadraticCurveTo(k.x, k.y, l.x, l.y);
                        o.stroke();
                        o.save();
                        o.beginPath();
                        o.translate(l.x, l.y);
                        var e = Math.atan((k.y - l.y) / (k.x - l.x));
                        o.rotate(e);
                        o.translate( - l.x, -l.y);
                        if (h.isLeft()) {
                            o.moveTo(l.x - 10, l.y + 5)
                        } else {
                            o.moveTo(l.x + 10, l.y + 5)
                        }
                        o.lineTo(l.x, l.y);
                        if (h.isLeft()) {
                            o.moveTo(l.x - 10, l.y - 5)
                        } else {
                            o.moveTo(l.x + 10, l.y - 5)
                        }
                        o.lineTo(l.x, l.y);
                        o.stroke();
                        o.restore()
                    }
                }
            }
            o.lineWidth = 5
        }
    },
    drawSummarizedNodes: function(m, b) {
        if (b.length > 0) {
            m.lineWidth = 2;
            m.strokeStyle = "red";
            for (var d = 0; d < b.length; d++) {
                var c = b[d];
                var e = this.mRootNode.findNodeWithID(c.summarizedNodeID());
                if (e != null) {
                    var a = c.summarizedBoundsWithNode(e);
                    var n = a.origin;
                    var l = new CGPoint(n.x, n.y + a.size.height);
                    var k = c.summarizedTextView();
                    k.setHidden(false);
                    m.beginPath();
                    if (c.isLeft()) {
                        var j = new CGPoint(Math.min(n.x, l.x) - 24, Math.min(n.y, l.y));
                        var g = new CGPoint(Math.min(n.x, l.x) - 24, Math.max(n.y, l.y));
                        var f = new CGPoint(j.x - 20, (j.y + g.y) / 2);
                        m.moveTo(j.x, j.y);
                        m.arcTo(j.x - 10, j.y, j.x - 10, j.y + 10, 10);
                        m.lineTo(f.x + 10, f.y - 10);
                        m.arcTo(f.x + 10, f.y, f.x, f.y, 10);
                        m.arcTo(f.x + 10, f.y, f.x + 10, f.y + 10, 10);
                        m.lineTo(g.x - 10, g.y - 10);
                        m.arcTo(g.x - 10, g.y, g.x, g.y, 10);
                        var h = k.frame();
                        h.origin = new CGPoint(f.x - h.size.width - 5, f.y - h.size.height / 2);
                        k.setFrame(h)
                    } else {
                        var j = new CGPoint(Math.max(n.x, l.x) + 24, Math.min(n.y, l.y));
                        var g = new CGPoint(Math.max(n.x, l.x) + 24, Math.max(n.y, l.y));
                        var f = new CGPoint(j.x + 20, (j.y + g.y) / 2);
                        m.moveTo(j.x, j.y);
                        m.arcTo(j.x + 10, j.y, j.x + 10, j.y + 10, 10);
                        m.lineTo(f.x - 10, f.y - 10);
                        m.arcTo(f.x - 10, f.y, f.x, f.y, 10);
                        m.arcTo(f.x - 10, f.y, f.x - 10, f.y + 10, 10);
                        m.lineTo(g.x + 10, g.y - 10);
                        m.arcTo(g.x + 10, g.y, g.x, g.y, 10);
                        var h = k.frame();
                        h.origin = new CGPoint(f.x + 5, f.y - h.size.height / 2);
                        k.setFrame(h)
                    }
                    m.stroke()
                }
            }
            m.lineWidth = 5
        }
    },
    setRootNode: function(a) {
        var b = this.mRootNode;
        if (b) {
            this.removeObserverWithNode(b)
        }
        this.mRootNode = a;
        a.setRoot(true);
        this.addObserverWithNode(a);
        this.layoutNodeTree(null, false, true);
        this.setNeedsDisplay()
    },
    rootNode: function() {
        return this.mRootNode
    },
    layoutNodeTree: function(d, h, c) {
        this.mRootNode.layout();
        var i = this.sizeThatFits();
        if (!i.isEqual(this.size()) || c) {
            var a = this.size();
            var b = this.frame();
            b.size = i;
            this.setFrame(b);
            var f = this.mRootNode.nodeLeftWidth();
            if (i.height != a.height || this.mNodeLeftWidth != f || c) {
                var g = f + NodeGraphView.horizontalPadding();
                var e = Math.max(i.height / 2 - MindNode.MIN_TEXT_HEIGHT / 2, Math.max(this.mRootNode.textView().height(), this.mRootNode.childrenTotalHeight() / 2));
                this.mRootNode.setRootPoint(new CGPoint(g, e));
                this.mRootNode.updateUIViewPosition();
                this.mNodeLeftWidth = f
            }
        }
        this.setNeedsDisplay()
    },
    sizeThatFits: function(c) {
        var b = UIScreen.mainScreen().bounds().size.width;
        var f = UIScreen.mainScreen().bounds().size.height;
        var e = b - (MindNode.MIN_TEXT_LEN + 10 + 20);
        var d = Math.max(b, this.mRootNode.nodeWidth() + e);
        var a = Math.max(f + 100, this.mRootNode.nodeHeight() + 164);
        return new CGSize(d, a)
    },
    addObserverWithNode: function(e) {
        e.setDelegate(this);
        this.addSubview(e.addBtn());
        this.addSubview(e.textView());
        var g = e.remarkBtn();
        if (g) {
            this.addSubview(g)
        }
        var c = e.urlBtn();
        if (c) {
            this.addSubview(c)
        }
        var f = e.addBtn2();
        if (f) {
            this.addSubview(f)
        }
        var d = e.imageView();
        if (d) {
            this.addSubview(d)
        }
        var b = e.markView();
        if (b) {
            this.addSubview(b)
        }
        var h = e.summarizedTextView();
        if (h) {
            this.addSubview(h)
        }
        var a = this;
        e.children().forEach(function(i) {
            a.addObserverWithNode(i)
        });
        e.children2().forEach(function(i) {
            a.addObserverWithNode(i)
        })
    },
    removeObserverWithNode: function(e) {
        e.setDelegate(null);
        e.addBtn().removeFromSuperview();
        e.textView().removeFromSuperview();
        var g = e.remarkBtn();
        if (g) {
            g.removeFromSuperview()
        }
        var c = e.urlBtn();
        if (c) {
            c.removeFromSuperview()
        }
        var f = e.addBtn2();
        if (f) {
            f.removeFromSuperview()
        }
        var d = e.imageView();
        if (d) {
            d.removeFromSuperview()
        }
        var b = e.markView();
        if (b) {
            b.removeFromSuperview()
        }
        var h = e.summarizedTextView();
        if (h) {
            h.removeFromSuperview()
        }
        var a = this;
        e.children().forEach(function(i) {
            a.removeObserverWithNode(i)
        });
        e.children2().forEach(function(i) {
            a.removeObserverWithNode(i)
        })
    },
    mindNodeChildrenDidExpand: function(c, b) {
        var a = this;
        b.forEach(function(d) {
            a.addObserverWithNode(d)
        })
    },
    mindNodeChildDidAdd: function(a, b) {
        this.addObserverWithNode(b)
    },
    mindNodeAddBtnDidClick: function(f, c) {
        if (this.mSelectionView) {
            var d = this.mSelectionView.type();
            if (d == NodeSelectionView.TYPE_CUT || d == NodeSelectionView.TYPE_COPY) {
                if (f.isShrink()) {
                    f.setShrink(false)
                }
                var g = this.mSelectionView.node();
                if (d == NodeSelectionView.TYPE_CUT) {
                    g.removeFromParent()
                } else {
                    g = g.copy()
                }
                if (!f.isRoot()) {
                    g.setLineColorHex(f.lineColorHex())
                }
                if (c == f.addBtn()) {
                    f.addNode(g)
                } else {
                    f.addNode2(g)
                }
                this.layoutNodeTree(null, true);
                this.dismissSelectionView()
            }
        } else {
            if (f.isShrink()) {
                f.setShrink(false);
                this.layoutNodeTree(null, true)
            } else {
                var g = new MindNode();
                var b;
                if (c == f.addBtn()) {
                    f.addNode(g);
                    b = f.children()
                } else {
                    f.addNode2(g);
                    b = f.children2()
                }
                if (f == this.mRootNode) {
                    var a = b.indexOf(g);
                    var e = NodeGraphView.LineColorHexArray;
                    g.setLineColorHex(e[a % e.length])
                } else {
                    g.setLineColorHex(f.lineColorHex())
                }
                this.layoutNodeTree(g, true)
            }
        }
    },
    setScrollView: function(a) {
        this.mScrollView = a
    },
    mindNodeTextViewDidChange: function(b, a) {
        UIMenuController.sharedMenuController().setMenuVisible(false);
        this.layoutTextViewWithNode(b, false)
    },
    mindNodeTextViewDidEndEditing: function(b, a) {
        this.mTimeoutId = setTimeout(function() {
            UIMenuController.sharedMenuController().setMenuVisible(false)
        },
        200);
        this.layoutTextViewWithNode(b, true)
    },
    mindNodeTextViewDidBeginEditing: function(f, c) {
        if (this.mSelectionView && !f.isRoot()) {
            var e = this.mSelectionView.type();
            if (e == NodeSelectionView.TYPE_LINK) {
                var b = this.mSelectionView.node();
                b.attachLinkTo(f);
                this.setNeedsDisplay()
            } else {
                if (e == NodeSelectionView.TYPE_SUMMARY) {
                    var b = this.mSelectionView.node();
                    this.showSummarizedTextInput(b, f)
                } else {
                    var d = f.parent();
                    var h = this.mSelectionView.node();
                    if (e == NodeSelectionView.TYPE_CUT) {
                        h.removeFromParent()
                    } else {
                        h = h.copy()
                    }
                    if (!d.isRoot()) {
                        h.setLineColorHex(d.lineColorHex())
                    }
                    var a = d.children().indexOf(f);
                    if (a >= 0) {
                        d.insertNodeAtIndex(h, a)
                    } else {
                        a = d.children2().indexOf(f);
                        if (a >= 0) {
                            d.insertNode2AtIndex(h, a)
                        }
                    }
                    this.layoutNodeTree(h, true)
                }
            }
            this.dismissSelectionView()
        } else {
            if (f.imageView() && f.textView().text().length == 0) {
                this.layoutNodeTree(f, true)
            }
            var g = UIMenuController.sharedMenuController();
            g.setMenuVisible(false);
            this.setupMenuItemsForNode(f);
            g.setTargetRectInView(new CGRect(c.width() / 2, -5, 1, 1), c);
            g.setMenuVisible(true);
            if (this.mTimeoutId) {
                clearTimeout(this.mTimeoutId);
                this.mTimeoutId = null
            }
        }
    },
    layoutTextViewWithNode: function(d, c) {
        var b = d.textView();
        var e = d.textViewFitSize();
        if (!c) {
            if (e.width > b.width()) {
                e.width += d.minTextWidth();
                if (e.width > MindNode.MAX_TEXT_LEN) {
                    e.width = MindNode.MAX_TEXT_LEN
                }
            } else {
                e.width = b.width()
            }
        }
        if (!e.isEqual(b.size())) {
            var a = b.frame();
            a.size = e;
            d.setTextViewFrame(a);
            this.layoutNodeTree(d, true)
        }
    },
    setupMenuItemsForNode: function(e) {
        var n = this;
        var b = UIMenuController.sharedMenuController();
        if (e == this.mRootNode) {
            var m = new UIMenuItem("备注",
            function() {
                n.onMenuItemRemark(e)
            });
            var l = e.isExpandLeftEnable() ? "取消左边分支": "向左添加分支";
            var k = new UIMenuItem(l,
            function() {
                n.onMenuItemLeftExpand(e)
            });
            b.setMenuItems([m, k])
        } else {
            var m = new UIMenuItem("移动",
            function() {
                n.onMenuItemCut(e)
            });
            var k = new UIMenuItem("复制",
            function() {
                n.onMenuItemCopy(e)
            });
            var j = new UIMenuItem("删除",
            function() {
                n.onMenuItemDelete(e)
            });
            var i = new UIMenuItem("文字",
            function() {
                n.onMenuItemText(e)
            });
            var h = new UIMenuItem("备注",
            function() {
                n.onMenuItemRemark(e)
            });
            var f = new UIMenuItem(e.isShrink() ? "展开": "收起",
            function() {
                n.onMenuItemExpand(e)
            });
            var d = new UIMenuItem(e.markType() > 0 ? "取消标记": "标记",
            function() {
                n.onMenuItemMark(e)
            });
            var c = new UIMenuItem(e.linkedNodeIDs().length > 0 ? "取消连接": "连接",
            function() {
                n.onMenuItemLink(e)
            });
            var a = new UIMenuItem(e.summarizedNodeID() ? "取消汇总": "汇总",
            function() {
                n.onMenuItemSummary(e)
            });
            var g = new UIMenuItem(e.url() ? "取消网址": "网址",
            function() {
                n.onMenuItemURL(e)
            });
            if (e.children().length > 0) {
                if (e.imageView()) {
                    b.setMenuItems([m, k, j, i, h, f, d, c, a, g])
                } else {
                    b.setMenuItems([m, k, j, h, f, d, c, a, g])
                }
            } else {
                if (e.imageView()) {
                    b.setMenuItems([m, k, j, i, h, d, c, a, g])
                } else {
                    b.setMenuItems([m, k, j, h, d, c, a, g])
                }
            }
        }
    },
    onMenuItemCut: function(a) {
        this.showSelectionViewWithNode(a, NodeSelectionView.TYPE_CUT);
        var b = NSUserDefaults.standardUserDefaults();
        b.execOnceOnKey("show_cut_tips",
        function() {
            var c = new UIAlertView("提示", "点击其它分支移动到它的上面，点击节点上的+移动到子分支下面。", "好的");
            c.show()
        })
    },
    onMenuItemCopy: function(a) {
        this.showSelectionViewWithNode(a, NodeSelectionView.TYPE_COPY);
        var b = NSUserDefaults.standardUserDefaults();
        b.execOnceOnKey("show_copy_tips",
        function() {
            var c = new UIAlertView("提示", "点击其它分支复制到它的上面，点击节点上的+复制到子分支下面。", "好的");
            c.show()
        })
    },
    onMenuItemDelete: function(b) {
        var a = new UIAlertView("提示", "删除分支和它的子分支？", "取消", "确定");
        a.setDelegate(this);
        a.setTag(100);
        a.setUserData(b);
        a.show()
    },
    onMenuItemExpand: function(b) {
        var a = b.isShrink();
        b.setShrink(!a);
        this.layoutNodeTree(null, true)
    },
    onMenuItemText: function(a) {
        a.textView().becomeFirstResponder()
    },
    onMenuItemLink: function(a) {
        if (a.linkedNodeIDs().length > 0) {
            a.detachLinkedNodes();
            this.setNeedsDisplay()
        } else {
            this.showSelectionViewWithNode(a, NodeSelectionView.TYPE_LINK);
            var b = NSUserDefaults.standardUserDefaults();
            b.execOnceOnKey("show_link_tips",
            function() {
                var c = new UIAlertView("提示", "点击要连接的其它分支。", "好的");
                c.show()
            })
        }
    },
    onMenuItemSummary: function(a) {
        if (a.summarizedNodeID()) {
            a.summarizeTo(null, null)
        } else {
            this.showSelectionViewWithNode(a, NodeSelectionView.TYPE_SUMMARY);
            var b = NSUserDefaults.standardUserDefaults();
            b.execOnceOnKey("show_summary_tips",
            function() {
                var c = new UIAlertView("提示", "点击其它分支对该范围的分支作汇总。", "好的");
                c.show()
            })
        }
    },
    onMenuItemURL: function(a) {
        if (a.url()) {
            a.setURL(null)
        } else {
            if (this.mDelegate) {
                this.mDelegate.mindNodeURLWillAdd(a)
            }
        }
    },
    onMenuItemMark: function(b) {
        var a = b.markType();
        if (a != MindNode.MarkType.None) {
            b.setMarkType(MindNode.MarkType.None)
        } else {
            this.mDelegate.mindNodeMarkPickerWillShow(b)
        }
    },
    onMenuItemLeftExpand: function(c) {
        var a = !this.mRootNode.isExpandLeftEnable();
        if (!a) {
            if (this.mRootNode.children2().length > 0) {
                var b = new UIAlertView("提示", "根节点左边的分支将会被移除", "取消", "继续");
                b.setDelegate(this);
                b.setTag(101);
                b.show()
            } else {
                this.mRootNode.setExpandLeftEnable(false)
            }
        } else {
            this.mRootNode.setExpandLeftEnable(true)
        }
    },
    onMenuItemRemark: function(a) {
        if (this.mDelegate) {
            this.mDelegate.mindNodeRemarkWillShow(a)
        }
    },
    mindNodeChildDidRemove: function(a, b) {
        this.removeObserverWithNode(b)
    },
    alertViewClickedButtonAtIndex: function(d, c) {
        var a = d.tag();
        if (a == 100) {
            if (c == 1) {
                var e = d.userData();
                e.removeFromParent();
                this.layoutNodeTree(null, true)
            }
        } else {
            if (a == 101) {
                if (c == 1) {
                    this.mRootNode.setExpandLeftEnable(false);
                    this.layoutNodeTree(null, true)
                }
            } else {
                if (a == 102) {
                    if (c == 1) {
                        var f = d.textFieldAtIndex(0).text();
                        if (f.length == 0) {
                            var d = new UIAlertView("提示", "汇总内容不能为空。", "好的");
                            d.show();
                            return
                        }
                        var g = d.userData();
                        var e = g.n;
                        var b = g.n2;
                        e.summarizeTo(b.ID(), f)
                    }
                }
            }
        }
    },
    showSelectionViewWithNode: function(d, b) {
        if (!this.mSelectionView) {
            var c = d.globalSelectionRect();
            var a = new NodeSelectionView(c, b);
            a.setNode(d);
            this.addSubview(a);
            this.mSelectionView = a;
            if (this.mDelegate) {
                this.mDelegate.mindNodeSelectionViewWillShow(d)
            }
        }
    },
    dismissSelectionView: function() {
        if (this.mSelectionView) {
            var a = this.mSelectionView.node();
            this.mSelectionView.removeFromSuperview();
            this.mSelectionView = null;
            if (this.mDelegate) {
                this.mDelegate.mindNodeSelectionViewDidDismiss(a)
            }
        }
    },
    setDelegate: function(a) {
        this.mDelegate = a
    },
    mindNodeAttachBtnDidUpdate: function(b, a) {
        if (a) {
            this.addSubview(a)
        }
        this.setNeedsDisplay()
    },
    mindNodeRemarkBtnDidClick: function(a) {
        if (this.mDelegate) {
            this.mDelegate.mindNodeRemarkWillShow(a)
        }
    },
    mindNodeImageDidUpdate: function(b) {
        var a = b.imageView();
        if (a) {
            this.addSubview(a)
        }
        this.layoutNodeTree(b)
    },
    mindNodeMarkTypeDidUpdate: function(b, c) {
        var a = b.markView();
        if (a) {
            if (c >= MindNode.MarkType.Tick) {
                this.addSubview(a)
            } else {
                a.removeFromSuperview();
                b.setMarkView(null)
            }
            this.layoutNodeTree(b, true)
        }
    },
    mindNodeSummarizedViewDidUpdate: function(b, a) {
        if (a != null) {
            this.addSubview(a)
        }
        this.setNeedsDisplay()
    },
    mindNodeSummarizedViewDidBeginEdit: function(e, c) {
        var f = UIMenuController.sharedMenuController();
        f.setMenuVisible(false);
        var b = this;
        var d = new UIMenuItem("编辑",
        function() {
            var g = b.mRootNode.findNodeWithID(e.summarizedNodeID());
            if (g) {
                b.showSummarizedTextInput(e, g)
            }
        });
        var a = new UIMenuItem("删除",
        function() {
            e.summarizeTo(null, null)
        });
        f.setMenuItems([d, a]);
        f.setTargetRectInView(new CGRect(c.width() / 2, 0, 1, 1), c);
        f.setMenuVisible(true);
        if (this.mTimeoutId) {
            clearTimeout(this.mTimeoutId);
            this.mTimeoutId = null
        }
    },
    showSummarizedTextInput: function(c, b) {
        var a = new UIAlertView("添加汇总", null, "取消", "确认");
        a.setAlertViewStyle(UIAlertView.Style.PlainTextInput);
        a.setTag(102);
        a.setDelegate(this);
        a.setUserData({
            n: c,
            n2: b
        });
        a.show();
        var d = c.summarizedTextView();
        if (d) {
            a.textFieldAtIndex(0).setText(d.text())
        }
    },
    clearSummarizedTextViews: function() {
        if (this.mSummarizedNodes && this.mSummarizedNodes.length > 0) {
            for (var b = 0; b < this.mSummarizedNodes.length; b++) {
                var c = this.mSummarizedNodes[b];
                var a = c.summarizedTextView();
                if (a) {
                    a.setHidden(true)
                }
            }
        }
    },
    statics: {
        horizontalPadding: function() {
            var a = UIScreen.mainScreen().bounds().size.width;
            return a / 4 - (MindNode.MIN_TEXT_LEN + 10 + 20) / 2
        },
        LineColorHexArray: ["#DC306C", "#BF58F5", "#26BBFF", "#37C45A", "#1BD6E7", "#FFC700"]
    }
});
NodeSelectionView = defineClass({
    superClass: UIView,
    init: function(b, a) {
        UIView.call(this, b);
        this.mType = a
    },
    node: function() {
        return this.mNode
    },
    setNode: function(a) {
        this.mNode = a
    },
    type: function() {
        return this.mType
    },
    drawRect: function(a) {
        a.fillStyle = "rgba(0,122,255,0.5)";
        a.fillRect(0, 0, this.width(), this.height())
    },
    statics: {
        TYPE_COPY: 0,
        TYPE_CUT: 1,
        TYPE_LINK: 2,
        TYPE_SUMMARY: 3
    }
});
FreeMindExporter = defineClass({
    exportMindNode: function(b) {
        try {
            var a = $($(b).find("node")[0]);
            return this.convertNodeElement(a, null)
        } catch(c) {
            console.log("parse freemind error: ", c)
        }
        return null
    },
    convertNodeElement: function(h, l) {
        var e = new MindNode();
        if (l == null) {
            e.setRoot(true)
        }
        e.textView().setText(h.attr("TEXT"));
        var b = e.textViewFitSize();
        e.setTextViewFrame(new CGRect(0, 0, b.width, b.height));
        var i = h.attr("POSITION");
        if (l != null) {
            var f = null;
            var g = h.find("edge");
            if (g.length > 0) {
                var d = $(g[0]);
                f = d.attr("COLOR")
            }
            if (f != null && f[0] == "#") {
                e.setLineColorHex(f)
            } else {
                if (l != null && l.isRoot()) {
                    var c = i == "left" ? l.children2() : l.children();
                    var j = c.length;
                    var a = NodeGraphView.LineColorHexArray;
                    e.setLineColorHex(a[j % a.length])
                } else {
                    e.setLineColorHex(l.lineColorHex())
                }
            }
            if (i == "left" && (l != null && l.isRoot())) {
                l.setExpandLeftEnable(true);
                l.addNode2(e)
            } else {
                l.addNode(e)
            }
        }
        var c = h.children();
        var m = this;
        c.each(function() {
            if (this.tagName == "NODE" || this.tagName == "node") {
                m.convertNodeElement($(this), e)
            }
        });
        var k = h.attr("FOLDED");
        if (k == "true") {
            if (e.children().length > 0) {
                e.setShrink(true)
            }
        }
        return e
    },
    exportFreeMind: function(b) {
        var a = '<?xml version="1.0"?>';
        a += '<map version="0.9.0">';
        a += this.convertMindNode(b);
        a += "</map>";
        return a
    },
    convertMindNode: function(e, a) {
        var c = "<node";
        c += ' TEXT="' + e.textView().text() + '"';
        if (e.isShrink()) {
            c += ' FOLDED="true"'
        } else {
            c += ' FOLDED="false"'
        }
        if (a) {
            c += ' POSITION="' + a + '"'
        }
        c += ">";
        var d = '<edge COLOR="' + e.lineColorHex() + '"/>';
        c += d;
        var b = this;
        e.children().forEach(function(g) {
            var f = b.convertMindNode(g, "right");
            c += f
        });
        e.children2().forEach(function(g) {
            var f = b.convertMindNode(g, "left");
            c += f
        });
        c += "</node>";
        return c
    }
});
XMindExporter = defineClass({
    exportMindNode: function(c) {
        try {
            var b = $($(c).find("sheet")[0]);
            var a = $($(c).find("topic")[0]);
            return this.convertNodeElement(a, null)
        } catch(d) {
            console.log("parse xmind error: ", d)
        }
        return null
    },
    convertNodeElement: function(g, k) {
        var f = new MindNode();
        if (k == null) {
            f.setRoot(true)
        }
        var j = $($(g).find("title")[0]);
        if (j) {
            f.textView().setText(j.text())
        }
        var a = f.textViewFitSize();
        f.setTextViewFrame(new CGRect(0, 0, a.width, a.height));
        if (k != null) {
            if (k.isRoot()) {
                var d = k.children();
                var h = d.length;
                var b = NodeGraphView.LineColorHexArray;
                f.setLineColorHex(b[h % b.length])
            } else {
                f.setLineColorHex(k.lineColorHex())
            }
            k.addNode(f)
        }
        var d = $($(g).find("children")[0]);
        if (d) {
            var c = $($(d).find("topics")[0]);
            if (c) {
                var e = c.children();
                var l = this;
                e.each(function() {
                    if (this.tagName == "topic" || this.tagName == "TOPIC") {
                        l.convertNodeElement($(this), f)
                    }
                })
            }
        }
        var i = g.attr("branch");
        if (i == "folded") {
            if (f.children().length > 0) {
                f.setShrink(true)
            }
        }
        return f
    },
    exportXMind: function(b) {
        var a = '<?xml version="1.0"?>';
        a += '<xmap-content xmlns="urn:xmind:xmap:xmlns:content:2.0" xmlns:fo="http://www.w3.org/1999/XSL/Format" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xlink="http://www.w3.org/1999/xlink" version="2.0">';
        a += "<sheet>";
        a += this.convertMindNode(b);
        a += "</sheet>";
        a += "</xmap-content>";
        return a
    },
    convertMindNode: function(c) {
        var b = "<topic";
        if (c.isShrink()) {
            b += ' branch="folded"'
        }
        b += ">";
        var d = "<title>" + c.textView().text() + "</title>";
        b += d;
        if (c.children().length > 0 || c.children2().length > 0) {
            b += "<children>";
            b += '<topics type="attached">';
            var a = this;
            c.children().forEach(function(g) {
                var f = a.convertMindNode(g);
                b += f
            });
            c.children2().forEach(function(g) {
                var f = a.convertMindNode(g);
                b += f
            });
            b += "</topics>";
            b += "</children>"
        }
        b += "</topic>";
        return b
    }
});
MindFile = defineClass({
    init: function(c, b, a) {
        this.mName = c;
        this.mIsDir = b;
        this.mIsLocal = a;
        this.mSubFiles = []
    },
    name: function() {
        return this.mName
    },
    path: function() {
        var a = this.mName;
        if (this.mParent) {
            a = this.mParent.path() + "/" + a
        }
        return a
    },
    isDir: function() {
        return this.mIsDir
    },
    subfiles: function() {},
    addFile: function(a) {
        a.mParent = this;
        this.mSubFiles.push(a)
    },
    parent: function() {
        return this.mParent
    },
    subfiles: function() {
        return this.mSubFiles.slice()
    },
    isLocal: function() {
        return this.mIsLocal
    },
    setData: function(a) {
        this.mData = a
    },
    data: function() {
        return this.mData
    }
});
LoginViewController = defineClass({
    superClass: UIViewController,
    viewDidLoad: function() {
        UIViewController.prototype.viewDidLoad.call(this);
        this.setTitle("云同步");
        var a = this.view();
        var f = new UITextField(new CGRect(a.width() / 2 - 150, 50, 300, 30));
        f.setAutoresizingMask(UIView.Autoresizing.FlexibleLeftMargin | UIView.Autoresizing.FlexibleRightMargin);
        f.setPlaceholder("手机号或邮箱");
        a.addSubview(f);
        this.mTeleTextfield = f;
        var e = new UITextField(new CGRect(a.width() / 2 - 150, 100, 300, 30));
        e.setAutoresizingMask(UIView.Autoresizing.FlexibleLeftMargin | UIView.Autoresizing.FlexibleRightMargin);
        e.setPlaceholder("验证码");
        a.addSubview(e);
        this.mVerifyTextfield = e;
        var h = new VerifyCodeButton(new CGRect(e.right() - 50, 103, 50, 30));
        h.setAutoresizingMask(UIView.Autoresizing.FlexibleLeftMargin | UIView.Autoresizing.FlexibleRightMargin);
        h.setTitle("获取验证码", UIControl.State.Normal);
        h.setTitleColor(UIColor.systemThemeColor, UIControl.State.Normal);
        h.titleLabel().setFontSize(13);
        a.addSubview(h);
        var c = this;
        h.addTarget(function() {
            c.onVerifyBtnClick()
        },
        UIControl.Events.TouchUpInside);
        this.mVerifyButton = h;
        var g = new UIButton(new CGRect(a.width() / 2 - 75, h.bottom() + 20, 150, 40));
        g.setAutoresizingMask(UIView.Autoresizing.FlexibleLeftMargin | UIView.Autoresizing.FlexibleRightMargin);
        g.setBackgroundColor(UIColor.systemThemeColor);
        g.setTitle("登录", UIControl.State.Normal);
        g.setTitleColor("white", UIControl.State.Normal);
        g.addTarget(function() {
            c.onLoginBtnClick()
        },
        UIControl.Events.TouchUpInside);
        a.addSubview(g);
        var b = new UILabel(new CGRect(a.width() / 2 - 200, g.bottom() + 20, 400, 100));
        b.setAutoresizingMask(UIView.Autoresizing.FlexibleLeftMargin | UIView.Autoresizing.FlexibleRightMargin);
        b.setTextAlignment("center");
        b.setTextColor(UIColor.lightGrayColor);
        b.setFontSize(13);
        b.setLineHeight(1.3);
        b.setText("通过手机号或者邮箱登录后，就可以从我们云空间上传和获取导图文件，并能同步到移动设备上。");
        a.addSubview(b);
        if (this.isModal) {
            var d = new UIBarButtonItem("返回", null,
            function() {
                c.dismissViewController(false)
            });
            this.navigationItem().setLeftBarButtonItems([d])
        }
    },
    onVerifyBtnClick: function() {
        var a = this.mTeleTextfield.text();
        if (this.checkMobileNumValidity(a)) {
            this.mVerifyButton.startTiming();
            var b = this;
            var c = UserSessionManager.defaultManager();
            c.getVerifyCode(a,
            function(e) {
                if (e != 0) {
                    var d;
                    if (e == 1) {
                        d = "获取验证码太频繁，请稍后再试。"
                    } else {
                        d = "网络错误，请重试。"
                    }
                    var f = new UIAlertView("提示", d, "好的");
                    f.show();
                    b.mVerifyButton.stopTiming()
                }
            })
        }
    },
    onLoginBtnClick: function() {
        var a = this.mTeleTextfield.text();
        var e = this.mVerifyTextfield.text();
        if (this.checkMobileNumValidity(a) && this.checkVerifyCodeValidity(e)) {
            var d = new UIAlertView("提示", "正在登录中，请稍后...");
            d.show();
            var b = this;
            var c = UserSessionManager.defaultManager();
            c.login(a, e,
            function(f) {
                d.dismiss(function() {
                    if (f == 0) {
                        if (b.isModal) {
                            b.dismissViewController(false)
                        } else {
                            b.navigationController().popViewController(false)
                        }
                    } else {
                        var g;
                        if (f == 1 || f == 2) {
                            g = "请填写正确的验证码。"
                        } else {
                            if (f == 3) {
                                g = "验证码已过期，请重新获取。"
                            } else {
                                g = "网络错误，请重试。"
                            }
                        }
                        var h = new UIAlertView("提示", g, "好的");
                        h.show()
                    }
                })
            })
        }
    },
    checkMobileNumValidity: function(a) {
        if (!a || a.length == 0) {
            var d = new UIAlertView("提示", "请填写你的手机号或者邮箱。", "好的");
            d.show();
            return false
        } else {
            var b = /^((13[0-9])|(14[0-9])|(15[0-9])|(17[0-9])|(18[0-9]))\d{8}$/;
            var c = /^[\w\.]+@[\w\.]+$/;
            if (!b.test(a) && !c.test(a)) {
                var d = new UIAlertView("提示", "手机号或者邮箱格式不对，请重新输入。", "好的");
                d.show();
                return false
            }
        }
        return true
    },
    checkVerifyCodeValidity: function(b) {
        if (!b || b.length == 0) {
            var a = new UIAlertView("提示", "请填写你的验证码。", "好的");
            a.show();
            return false
        }
        return true
    }
});
GraphFileListController = defineClass({
    superClass: UIViewController,
    init: function(a) {
        if (a) {
            this.mDir = a;
            this.mRoot = false
        } else {
            this.mDir = new MindFile("", true);
            this.mRoot = true
        }
        this.mFileList = []
    },
    viewDidLoad: function() {
        UIViewController.prototype.viewDidLoad.call(this);
        if (this.mRoot) {
            this.setTitle("选择文件");
            var b = this;
            var e = new UIBarButtonItem("返回", null,
            function() {
                NSNotificationCenter.defaultCenter().removeObserver(b);
                b.dismissViewController(false)
            });
            this.navigationItem().setLeftBarButtonItems([e])
        } else {
            this.setTitle(this.mDir.name())
        }
        var a = new UIBarButtonItem("浏览本地", null,
        function() {});
        this.navigationItem().setRightBarButtonItems([a]);
        this.navigationItem().setBackBarButtonItem(new UIBarButtonItem("返回", null, null));
        this.installFileInputElement();
        this.mTableView = new UITableView(this.view().bounds());
        this.mTableView.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        this.mTableView.setDataSource(this);
        this.mTableView.setDelegate(this);
        this.view().addSubview(this.mTableView);
        if (!UserSessionManager.defaultManager().isLogin()) {
            this.mLoginTipsView = new UIView(this.view().bounds());
            this.mLoginTipsView.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
            this.view().addSubview(this.mLoginTipsView);
            var c = new UILabel();
            c.setFontSize(15);
            c.setTextColor(UIColor.lightGrayColor);
            c.setText("请通过手机号或者邮箱登录，获取在线文件列表。");
            c.sizeToFit();
            c.setCenter(new CGPoint(this.view().width() / 2, this.view().height() / 2 - 30));
            c.setAutoresizingMask(UIView.Autoresizing.FlexibleMargin);
            this.mLoginTipsView.addSubview(c);
            var d = new UIButton(new CGRect(0, 0, 120, 40));
            d.setBackgroundColor(UIColor.systemThemeColor);
            d.setTitle("前往", UIControl.State.Normal);
            d.setTitleColor("white", UIControl.State.Normal);
            var b = this;
            d.addTarget(function() {
                b.forwardUserLogin()
            },
            UIControl.Events.TouchUpInside);
            d.setCenter(new CGPoint(this.view().width() / 2, this.view().height() / 2 + 20));
            d.setAutoresizingMask(UIView.Autoresizing.FlexibleMargin);
            this.mLoginTipsView.addSubview(d)
        } else {
            this.loadUserFileDir()
        }
        NSNotificationCenter.defaultCenter().addObserver(this, this.handleUserHasLogin, UserHasLoginNotification)
    },
    handleUserHasLogin: function(a) {
        this.loadUserFileDir()
    },
    loadUserFileDir: function() {
        if (this.mLoginTipsView) {
            this.mLoginTipsView.removeFromSuperview()
        }
        var b = UserSessionManager.defaultManager();
        var a = this;
        b.listFiles(this.mDir,
        function(d, e) {
            if (d == 0) {
                a.mFileList = e;
                a.mTableView.reloadData()
            } else {
                var c = new UILabel(a.view().bounds());
                c.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
                c.setFontSize(15);
                c.setTextAlignment("center");
                c.setTextColor(UIColor.lightGrayColor);
                c.setText("加载文件列表失败，请重新进入试试。");
                a.view().addSubview(c)
            }
        })
    },
    forwardUserLogin: function() {
        var a = new LoginViewController();
        this.navigationController().pushViewController(a, false)
    },
    numberOfSectionsInTableView: function(a) {
        return 1
    },
    tableViewNumberOfRowsInSection: function(a, b) {
        return this.mFileList.length
    },
    tableViewCellForRowAtIndexPath: function(b, e) {
        var a = new UITableViewCell();
        var f = this.mFileList[e.row];
        var d = f.name();
        if (f.isDir()) {
            a.textLabel().setText(d);
            a.imageView().setImage(new UIImage("res/folder.png", 30, 30))
        } else {
            var c = d.indexOf(".mm");
            if (c >= 0) {
                a.textLabel().setText(d.substring(0, c))
            } else {
                a.textLabel().setText(d)
            }
        }
        return a
    },
    tableViewDidSelectRowAtIndexPath: function(a, c) {
        var e = this.mFileList[c.row];
        if (e.isDir()) {
            var f = new GraphFileListController(e);
            f.handler = this.handler;
            this.navigationController().pushViewController(f, false)
        } else {
            var b = this;
            var d = UserSessionManager.defaultManager();
            d.getFile(e.path(),
            function(g, i) {
                if (g == 0) {
                    e.setData(i);
                    b.handler.onMindFileOpen(e);
                    b.dismissViewController(false)
                } else {
                    var h = new UIAlertView("提示", "打开文件失败...", "好的");
                    h.show()
                }
            })
        }
    },
    installFileInputElement: function() {
        var c = this.navigationController().navigationBar().rightBarButtonAtIndex(0);
        var b = $("<input id='browser' type='file' accept='.mm,.xmind'/>");
        b.css({
            position: "absolute",
            left: 0,
            top: 0,
            width: c.width(),
            height: c.height(),
            opacity: 0
        });
        c.layer().append(b);
        var a = this;
        b.change(function() {
            if (this.files.length > 0) {
                var h = b.val();
                if (!/.+\.mm/.test(h) && !/.+\.xmind/.test(h)) {
                    var g = new UIAlertView("提示", "请选择扩展名为mm或xmind的文件打开。", "好的");
                    g.show();
                    return
                }
                var f = this.files[0];
                if (/.+\.xmind/.test(h)) {
                    var e = new UnZipArchive(f);
                    e.getData("content.xml",
                    function(j) {
                        var i = new FileReader();
                        i.readAsText(j);
                        i.onload = function() {
                            var l = h.lastIndexOf("\\");
                            var k = h.substring(l + 1);
                            var m = new MindFile(k, false, true);
                            m.setData(this.result);
                            a.handler.onMindFileOpen(m);
                            a.dismissViewController(false)
                        }
                    })
                } else {
                    var d = new FileReader();
                    d.readAsText(f);
                    d.onload = function() {
                        var j = h.lastIndexOf("\\");
                        var i = h.substring(j + 1);
                        var k = new MindFile(i, false, true);
                        k.setData(this.result);
                        a.handler.onMindFileOpen(k);
                        a.dismissViewController(false)
                    }
                }
            }
        })
    }
});
VerifyCodeButton = defineClass({
    superClass: UIButton,
    init: function(a) {
        UIButton.call(this, a)
    },
    startTiming: function() {
        this.mTimeInterval = 60;
        this.setUserInteractionEnabled(false);
        var b = this.titleWithTimeInterval(this.mTimeInterval);
        this.setTitle(b, UIControl.State.Normal);
        this.setTitleColor(UIColor.lightGrayColor, UIControl.State.Normal);
        var a = this;
        this.mIntervalId = setInterval(function() {
            a.mTimeInterval -= 1;
            if (a.mTimeInterval <= 0) {
                a.stopTiming()
            } else {
                var c = a.titleWithTimeInterval(a.mTimeInterval);
                a.setTitle(c, UIControl.State.Normal)
            }
        },
        1000)
    },
    stopTiming: function() {
        clearInterval(this.mIntervalId);
        this.mTimeInterval = 0;
        this.setUserInteractionEnabled(true);
        this.setTitle("获取验证码", UIControl.State.Normal);
        this.setTitleColor(UIColor.systemThemeColor, UIControl.State.Normal)
    },
    titleWithTimeInterval: function(a) {
        return a + "秒后重试"
    }
});
ExportOptionsViewController = defineClass({
    superClass: UIViewController,
    viewDidLoad: function() {
        var a = new UITableView(this.view().bounds());
        a.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        a.setDataSource(this);
        a.setDelegate(this);
        a.layer().css("overflow", "hidden");
        this.view().addSubview(a);
        a.reloadData()
    },
    tableViewNumberOfRowsInSection: function(a, b) {
        return 5
    },
    tableViewCellForRowAtIndexPath: function(b, d) {
        var a = new UITableViewCell();
        var c = new UILabel(a.bounds());
        c.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        c.setTextAlignment("center");
        c.setTextColor(UIColor.systemThemeColor);
        switch (d.row) {
        case 0:
            c.setText("图片");
            break;
        case 1:
            c.setText("源文件");
            break;
        case 2:
            c.setText("文字大纲");
            break;
        case 3:
            c.setText("FreeMind");
            break;
        case 4:
        default:
            c.setText("XMind");
            break
        }
        a.addSubview(c);
        return a
    },
    tableViewDidSelectRowAtIndexPath: function(a, b) {
        switch (b.row) {
        case 0:
            this.handler.exportFile("photo");
            break;
        case 1:
            this.handler.exportFile("mm");
            break;
        case 2:
            this.handler.exportFile("outline");
            break;
        case 3:
            this.handler.exportFile("freemind");
            break;
        case 4:
        default:
            this.handler.exportFile("xmind");
            break
        }
    }
});
MoreOptionsViewController = defineClass({
    superClass: UIViewController,
    viewDidLoad: function() {
        var a = new UITableView(this.view().bounds());
        a.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        a.setDataSource(this);
        a.setDelegate(this);
        a.layer().css("overflow", "hidden");
        this.view().addSubview(a);
        a.reloadData()
    },
    tableViewNumberOfRowsInSection: function(a, b) {
        return 3
    },
    tableViewCellForRowAtIndexPath: function(b, d) {
        var a = new UITableViewCell();
        var c = new UILabel(a.bounds());
        c.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        c.setTextAlignment("center");
        c.setTextColor(UIColor.systemThemeColor);
        switch (d.row) {
        case 0:
            c.setText("iOS版");
            break;
        case 1:
            c.setText("Android版");
            break;
        default:
            c.setText("联系我们")
        }
        a.addSubview(c);
        return a
    },
    tableViewDidSelectRowAtIndexPath: function(a, b) {
        switch (b.row) {
        case 0:
            window.open("https://itunes.apple.com/cn/app/id1025462912");
            break;
        case 1:
            window.open("http://fir.im/968p");
            break;
        default:
            window.open("mailto:czh0766@163.com")
        }
    }
});
RemarkViewController = defineClass({
    superClass: UIViewController,
    init: function(a) {
        UIViewController.call(this);
        this.mNode = a
    },
    viewDidLoad: function() {
        UIViewController.prototype.viewDidLoad.call(this);
        this.setTitle("备注");
        var a = this;
        var d = new UIBarButtonItem("完成", null,
        function() {
            a.onRemarkFinish()
        });
        this.navigationItem().setLeftBarButtonItems([d]);
        var c = new UIBarButtonItem("删除", null,
        function() {
            a.onRemarkDelete()
        });
        this.navigationItem().setRightBarButtonItems([c]);
        var b = new UITextView(new CGRect(7, 7, this.view().width() - 20, this.view().height() - 20));
        b.setAutoresizingMask(UIView.Autoresizing.FlexibleSize);
        b.setFontSize("18px");
        b.setText(this.mNode.remark());
        b.layer().css("border", "0");
        this.view().addSubview(b);
        this.mTextView = b;
        if (b.text().length == 0) {
            setTimeout(function() {
                b.becomeFirstResponder()
            },
            50)
        }
    },
    onRemarkFinish: function() {
        var a = this.mTextView.text();
        if (a == null || a == "") {
            this.mNode.setRemark(null)
        } else {
            this.mNode.setRemark(a)
        }
        this.dismissViewController(false)
    },
    onRemarkDelete: function() {
        this.mNode.setRemark(null);
        this.dismissViewController(false)
    }
});
MarkViewController = defineClass({
    superClass: UIViewController,
    init: function(a) {
        UIViewController.call(this);
        this.mNode = a
    },
    viewDidLoad: function() {
        UIViewController.prototype.viewDidLoad.call(this);
        this.setTitle("标记");
        var m = this;
        var g = new UIBarButtonItem("返回", null,
        function() {
            m.dismissViewController(false)
        });
        this.navigationItem().setRightBarButtonItems([g]);
        var j = [];
        var d = new UIButton(new CGRect(0, 0, 200, 113));
        d.setTitle("ABC", UIControl.State.Normal);
        d.setTitleColor("red", UIControl.State.Normal);
        d.titleLabel().setFont("20px bold");
        this.view().addSubview(d);
        j.push(d);
        var f = new UIButton(new CGRect(200, 0, 200, 113));
        f.setTitle("ABC", UIControl.State.Normal);
        f.titleLabel().layer().css("text-decoration", "line-through");
        f.titleLabel().setFont("20px bold");
        this.view().addSubview(f);
        j.push(f);
        var e = new UIButton(new CGRect(400, 0, 200, 113));
        e.setTitle("ABC", UIControl.State.Normal);
        e.titleLabel().layer().css("text-decoration", "underline");
        e.titleLabel().setFont("20px bold");
        this.view().addSubview(e);
        j.push(e);
        var c = new UIButton(new CGRect(0, 113, 200, 113));
        c.setImage(new UIImage("res/tag_tick.png", 64, 64), UIControl.State.Normal);
        this.view().addSubview(c);
        j.push(c);
        var b = new UIButton(new CGRect(200, 113, 200, 113));
        b.setImage(new UIImage("res/tag_close.png", 64, 64), UIControl.State.Normal);
        this.view().addSubview(b);
        j.push(b);
        var a = new UIButton(new CGRect(400, 113, 200, 113));
        a.setImage(new UIImage("res/tag_remind.png", 64, 64), UIControl.State.Normal);
        this.view().addSubview(a);
        j.push(a);
        var n = new UIButton(new CGRect(0, 226, 200, 113));
        n.setImage(new UIImage("res/tag_warn.png", 64, 64), UIControl.State.Normal);
        this.view().addSubview(n);
        j.push(n);
        var l = new UIButton(new CGRect(200, 226, 200, 113));
        l.setImage(new UIImage("res/tag_bulb.png", 64, 64), UIControl.State.Normal);
        this.view().addSubview(l);
        j.push(l);
        var k = new UIButton(new CGRect(400, 226, 200, 113));
        k.setImage(new UIImage("res/tag_start.png", 64, 64), UIControl.State.Normal);
        this.view().addSubview(k);
        j.push(k);
        var m = this;
        for (var h = 0; h < j.length; h++) {
            var d = j[h];
            d.setTag(h);
            d.addTarget(function(i) {
                var o = MindNode.MarkType.Highlight + i.tag();
                m.mNode.setMarkType(o);
                m.dismissViewController()
            },
            UIControl.Events.TouchUpInside)
        }
    }
});
UserAccount = defineClass({
    init: function(b, c, a) {
        this.name = b;
        this.sessionId = c;
        this.paid = a
    }
});
UserHasLoginNotification = "UserHasLoginNotification";
UserHasLogoutNotification = "UserHasLogoutNotification";
UserSessionManager = defineClass({
    statics: {
        defaultManager: function() {
            if (!UserSessionManager.object) {
                UserSessionManager.object = new UserSessionManager()
            }
            return UserSessionManager.object
        }
    },
    init: function() {
        var b = localStorage.name;
        var d = localStorage.sessionId;
        if (b && d) {
            var c = localStorage.paid;
            var a = (c && parseInt(c)) ? true: false;
            this.mAccount = new UserAccount(b, d, a)
        }
    },
    syncUser: function(b) {
        var c = new HttpRequest("userSync");
        var a = this;
        HttpAjax.sendRequest(c,
        function(e, h) {
            var g = -1;
            if (e == "success") {
                var i = JSON.parse(h);
                g = i.rtn;
                if (g == 0) {
                    var f = i.data.name;
                    var d = i.data.paid;
                    var j = false;
                    if (f != a.mAccount.name) {
                        a.mAccount.name = f;
                        localStorage.name = f;
                        j = true
                    }
                    if (d != a.mAccount.paid) {
                        a.mAccount.paid = d;
                        localStorage.paid = d ? "1": "0";
                        j = true
                    }
                    if (j) {
                        NSNotificationCenter.defaultCenter().postNotificationName(UserHasLoginNotification)
                    }
                } else {
                    a.mAccount = null;
                    localStorage.removeItem("name");
                    localStorage.removeItem("sessionId");
                    localStorage.removeItem("paid");
                    NSNotificationCenter.defaultCenter().postNotificationName(UserHasLogoutNotification)
                }
            }
            if (b) {
                b(g)
            }
        })
    },
    loadFiles: function(a) {
        var b = new HttpRequest("loadFiles");
        HttpAjax.sendRequest(b,
        function(c, e) {
            var d = -1;
            if (c == "success") {
                var f = JSON.parse(e);
                d = f.rtn
            }
            if (a) {
                a(d)
            }
        })
    },
    listFiles: function(b, a) {
        var c = new HttpRequest("listFiles", {
            dir: b.path()
        });
        HttpAjax.sendRequest(c,
        function(d, g) {
            var e = -1;
            var f = [];
            if (d == "success") {
                var h = JSON.parse(g);
                e = h.rtn;
                if (e == 0) {
                    var i = h.data.files;
                    i.forEach(function(j) {
                        var l = j.indexOf(".mm") >= 0 ? false: true;
                        var k = new MindFile(j, l);
                        b.addFile(k);
                        f.push(k)
                    })
                }
            }
            if (a) {
                a(e, f)
            }
        })
    },
    getFile: function(c, a) {
        var b = new HttpRequest("getFile", {
            path: c
        });
        HttpAjax.sendRequest(b,
        function(d, f) {
            var e = -1;
            if (d == "success") {
                e = 0
            }
            if (a) {
                a(e, f)
            }
        })
    },
    saveFile: function(c, d, a) {
        var b = new HttpRequest("saveFile", c, {
            path: encodeURI(d)
        },
        "POST");
        HttpAjax.sendRequest(b,
        function(e, g) {
            var f = -1;
            if (e == "success") {
                var h = JSON.parse(g);
                f = h.rtn
            }
            if (a) {
                a(f, g)
            }
        })
    },
    exportFile: function(c, d, a) {
        var b = new HttpRequest("exportFile", c, {
            extension: d
        },
        "POST");
        HttpAjax.sendRequest(b,
        function(e, h) {
            var g = -1;
            var f = null;
            if (e == "success") {
                var i = JSON.parse(h);
                g = i.rtn;
                if (g == 0) {
                    f = i.data.url
                }
            }
            if (a) {
                a(g, f)
            }
        })
    },
    isLogin: function() {
        return this.mAccount != null
    },
    account: function() {
        return this.mAccount
    },
    getVerifyCode: function(a, b) {
        var c = new HttpRequest("verifyCode", {
            telephone: a
        });
        HttpAjax.sendRequest(c,
        function(d, f) {
            var e = -1;
            if (d == "success") {
                var g = JSON.parse(f);
                e = g.rtn
            }
            if (b) {
                b(e)
            }
        })
    },
    login: function(a, e, c) {
        var d = new HttpRequest("login", {
            telephone: a,
            vcode: e
        });
        var b = this;
        HttpAjax.sendRequest(d,
        function(f, i) {
            var g = -1;
            if (f == "success") {
                var j = JSON.parse(i);
                g = j.rtn;
                if (g == 0) {
                    var h = new UserAccount(a, j.data.session, j.data.paid);
                    localStorage.name = h.name;
                    localStorage.sessionId = h.sessionId;
                    localStorage.paid = h.paid ? "1": "0";
                    b.mAccount = h;
                    if (c) {
                        c(g)
                    }
                    NSNotificationCenter.defaultCenter().postNotificationName(UserHasLoginNotification);
                    return
                }
            }
            if (c) {
                c(g)
            }
        })
    },
    logout: function() {
        var a = new HttpRequest("logout");
        HttpAjax.sendRequest(a,
        function(b, c) {});
        this.mAccount = null;
        localStorage.removeItem("name");
        localStorage.removeItem("sessionId");
        localStorage.removeItem("paid");
        NSNotificationCenter.defaultCenter().postNotificationName(UserHasLogoutNotification)
    }
});
HttpRequest = defineClass({
    init: function(a, b, c, d) {
        this.mUrl = a;
        this.mData = b ? b: {};
        this.mHeaders = c ? c: {};
        this.mMethod = d ? d: "GET";
        this.setEssentialHeaders()
    },
    url: function() {
        return this.mUrl
    },
    data: function() {
        return this.mData
    },
    headers: function() {
        return this.mHeaders
    },
    method: function() {
        return this.mMethod
    },
    setEssentialHeaders: function() {
        var b = Date.parse(new Date()) / 1000;
        this.mHeaders.timestamp = b;
        this.mHeaders.vc = $.md5("webapp" + b + "!!!");
        this.mHeaders.os = 2;
        var a = UserSessionManager.defaultManager().account();
        if (a) {
            this.mHeaders.session = a.sessionId
        }
    }
});
HttpAjax = defineClass({
    statics: {
        sendRequest: function(b, a) {
            $.ajax({
                type: b.method(),
                url: b.url(),
                data: b.data(),
                dataType: "html",
                beforeSend: function(e) {
                    var d = b.headers();
                    if (d) {
                        for (var c in d) {
                            e.setRequestHeader(c, d[c])
                        }
                    }
                },
                success: function(d, c) {
                    if (a) {
                        a(c, d)
                    }
                },
                error: function(d, c, f) {
                    if (a) {
                        a(c, f)
                    }
                }
            })
        }
    }
});
HtmlOutlineMaker = defineClass({
    buildHTMLString: function(a) {
        var c = a.textView().text();
        var b = '<div style="font-weight:bold">' + c + "</div><ul>" + this.getUnorderListTags(a) + "</ul>";
        return b
    },
    getUnorderListTags: function(e) {
        var a = this;
        var d = this.getContentTags(e);
        if (e.children().length > 0 || e.children2().length > 0) {
            var c = e.children().length > 0 && e.children2().length > 0;
            var b = "";
            if (e.children().length > 0) {
                if (e.parent() != null || c) {
                    if (e.parent() != null) {
                        b += "<li>" + d + "<ul>"
                    } else {
                        b += "<li>" + d + "（右）<ul>"
                    }
                }
                e.children().forEach(function(f) {
                    b += a.getUnorderListTags(f)
                });
                if (e.parent() != null || c) {
                    b += "</ul></li>"
                }
            }
            if (e.children2().length > 0) {
                if (e.parent() != null || c) {
                    if (e.parent() != null) {
                        b += "<li>" + d + "<ul>"
                    } else {
                        b += "<li>" + d + "（左）<ul>"
                    }
                }
                e.children2().forEach(function(f) {
                    b += a.getUnorderListTags(f)
                });
                if (e.parent() != null || c) {
                    b += "</ul></li>"
                }
            }
            return b
        } else {
            return "<li>" + d + "</li>"
        }
    },
    getContentTags: function(b) {
        var a = b.textView().text();
        var c = b.remark();
        if (c != null && c.length > 0) {
            a += '<span style="color:blue;font-size:9px"> (注:' + c + ")</span>"
        }
        return a
    }
});
function stringRandom(d) {
    var e = "";
    for (var c = 0; c < d; c++) {
        var b;
        if (Math.random() > 0.5) {
            b = 65 + 25 * Math.random()
        } else {
            b = 48 + 9 * Math.random()
        }
        e += String.fromCharCode(Math.round(b))
    }
    return e
}
UIApplicationMain(UIApplication, AppDelegate);



/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function(obj) {
	"use strict";

	var ERR_BAD_FORMAT = "File format is not recognized.";
	var ERR_CRC = "CRC failed.";
	var ERR_ENCRYPTED = "File contains encrypted entry.";
	var ERR_ZIP64 = "File is using Zip64 (4gb+ file size).";
	var ERR_READ = "Error while reading zip file.";
	var ERR_WRITE = "Error while writing zip file.";
	var ERR_WRITE_DATA = "Error while writing file data.";
	var ERR_READ_DATA = "Error while reading file data.";
	var ERR_DUPLICATED_NAME = "File already exists.";
	var CHUNK_SIZE = 512 * 1024;
	
	var TEXT_PLAIN = "text/plain";

	var appendABViewSupported;
	try {
		appendABViewSupported = new Blob([ new DataView(new ArrayBuffer(0)) ]).size === 0;
	} catch (e) {
	}

	function Crc32() {
		this.crc = -1;
	}
	Crc32.prototype.append = function append(data) {
		var crc = this.crc | 0, table = this.table;
		for (var offset = 0, len = data.length | 0; offset < len; offset++)
			crc = (crc >>> 8) ^ table[(crc ^ data[offset]) & 0xFF];
		this.crc = crc;
	};
	Crc32.prototype.get = function get() {
		return ~this.crc;
	};
	Crc32.prototype.table = (function() {
		var i, j, t, table = []; // Uint32Array is actually slower than []
		for (i = 0; i < 256; i++) {
			t = i;
			for (j = 0; j < 8; j++)
				if (t & 1)
					t = (t >>> 1) ^ 0xEDB88320;
				else
					t = t >>> 1;
			table[i] = t;
		}
		return table;
	})();
	
	// "no-op" codec
	function NOOP() {}
	NOOP.prototype.append = function append(bytes, onprogress) {
		return bytes;
	};
	NOOP.prototype.flush = function flush() {};

	function blobSlice(blob, index, length) {
		if (index < 0 || length < 0 || index + length > blob.size)
			throw new RangeError('offset:' + index + ', length:' + length + ', size:' + blob.size);
		if (blob.slice)
			return blob.slice(index, index + length);
		else if (blob.webkitSlice)
			return blob.webkitSlice(index, index + length);
		else if (blob.mozSlice)
			return blob.mozSlice(index, index + length);
		else if (blob.msSlice)
			return blob.msSlice(index, index + length);
	}

	function getDataHelper(byteLength, bytes) {
		var dataBuffer, dataArray;
		dataBuffer = new ArrayBuffer(byteLength);
		dataArray = new Uint8Array(dataBuffer);
		if (bytes)
			dataArray.set(bytes, 0);
		return {
			buffer : dataBuffer,
			array : dataArray,
			view : new DataView(dataBuffer)
		};
	}

	// Readers
	function Reader() {
	}

	function TextReader(text) {
		var that = this, blobReader;

		function init(callback, onerror) {
			var blob = new Blob([ text ], {
				type : TEXT_PLAIN
			});
			blobReader = new BlobReader(blob);
			blobReader.init(function() {
				that.size = blobReader.size;
				callback();
			}, onerror);
		}

		function readUint8Array(index, length, callback, onerror) {
			blobReader.readUint8Array(index, length, callback, onerror);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	TextReader.prototype = new Reader();
	TextReader.prototype.constructor = TextReader;

	function Data64URIReader(dataURI) {
		var that = this, dataStart;

		function init(callback) {
			var dataEnd = dataURI.length;
			while (dataURI.charAt(dataEnd - 1) == "=")
				dataEnd--;
			dataStart = dataURI.indexOf(",") + 1;
			that.size = Math.floor((dataEnd - dataStart) * 0.75);
			callback();
		}

		function readUint8Array(index, length, callback) {
			var i, data = getDataHelper(length);
			var start = Math.floor(index / 3) * 4;
			var end = Math.ceil((index + length) / 3) * 4;
			var bytes = obj.atob(dataURI.substring(start + dataStart, end + dataStart));
			var delta = index - Math.floor(start / 4) * 3;
			for (i = delta; i < delta + length; i++)
				data.array[i - delta] = bytes.charCodeAt(i);
			callback(data.array);
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	Data64URIReader.prototype = new Reader();
	Data64URIReader.prototype.constructor = Data64URIReader;

	function BlobReader(blob) {
		var that = this;

		function init(callback) {
			that.size = blob.size;
			callback();
		}

		function readUint8Array(index, length, callback, onerror) {
			var reader = new FileReader();
			reader.onload = function(e) {
				callback(new Uint8Array(e.target.result));
			};
			reader.onerror = onerror;
			try {
				reader.readAsArrayBuffer(blobSlice(blob, index, length));
			} catch (e) {
				onerror(e);
			}
		}

		that.size = 0;
		that.init = init;
		that.readUint8Array = readUint8Array;
	}
	BlobReader.prototype = new Reader();
	BlobReader.prototype.constructor = BlobReader;

	// Writers

	function Writer() {
	}
	Writer.prototype.getData = function(callback) {
		callback(this.data);
	};

	function TextWriter(encoding) {
		var that = this, blob;

		function init(callback) {
			blob = new Blob([], {
				type : TEXT_PLAIN
			});
			callback();
		}

		function writeUint8Array(array, callback) {
			blob = new Blob([ blob, appendABViewSupported ? array : array.buffer ], {
				type : TEXT_PLAIN
			});
			callback();
		}

		function getData(callback, onerror) {
			var reader = new FileReader();
			reader.onload = function(e) {
				callback(e.target.result);
			};
			reader.onerror = onerror;
			reader.readAsText(blob, encoding);
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	TextWriter.prototype = new Writer();
	TextWriter.prototype.constructor = TextWriter;

	function Data64URIWriter(contentType) {
		var that = this, data = "", pending = "";

		function init(callback) {
			data += "data:" + (contentType || "") + ";base64,";
			callback();
		}

		function writeUint8Array(array, callback) {
			var i, delta = pending.length, dataString = pending;
			pending = "";
			for (i = 0; i < (Math.floor((delta + array.length) / 3) * 3) - delta; i++)
				dataString += String.fromCharCode(array[i]);
			for (; i < array.length; i++)
				pending += String.fromCharCode(array[i]);
			if (dataString.length > 2)
				data += obj.btoa(dataString);
			else
				pending = dataString;
			callback();
		}

		function getData(callback) {
			callback(data + obj.btoa(pending));
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	Data64URIWriter.prototype = new Writer();
	Data64URIWriter.prototype.constructor = Data64URIWriter;

	function BlobWriter(contentType) {
		var blob, that = this;

		function init(callback) {
			blob = new Blob([], {
				type : contentType
			});
			callback();
		}

		function writeUint8Array(array, callback) {
			blob = new Blob([ blob, appendABViewSupported ? array : array.buffer ], {
				type : contentType
			});
			callback();
		}

		function getData(callback) {
			callback(blob);
		}

		that.init = init;
		that.writeUint8Array = writeUint8Array;
		that.getData = getData;
	}
	BlobWriter.prototype = new Writer();
	BlobWriter.prototype.constructor = BlobWriter;

	/** 
	 * inflate/deflate core functions
	 * @param worker {Worker} web worker for the task.
	 * @param initialMessage {Object} initial message to be sent to the worker. should contain
	 *   sn(serial number for distinguishing multiple tasks sent to the worker), and codecClass.
	 *   This function may add more properties before sending.
	 */
	function launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror) {
		var chunkIndex = 0, index, outputSize, sn = initialMessage.sn, crc;

		function onflush() {
			worker.removeEventListener('message', onmessage, false);
			onend(outputSize, crc);
		}

		function onmessage(event) {
			var message = event.data, data = message.data, err = message.error;
			if (err) {
				err.toString = function () { return 'Error: ' + this.message; };
				onreaderror(err);
				return;
			}
			if (message.sn !== sn)
				return;
			if (typeof message.codecTime === 'number')
				worker.codecTime += message.codecTime; // should be before onflush()
			if (typeof message.crcTime === 'number')
				worker.crcTime += message.crcTime;

			switch (message.type) {
				case 'append':
					if (data) {
						outputSize += data.length;
						writer.writeUint8Array(data, function() {
							step();
						}, onwriteerror);
					} else
						step();
					break;
				case 'flush':
					crc = message.crc;
					if (data) {
						outputSize += data.length;
						writer.writeUint8Array(data, function() {
							onflush();
						}, onwriteerror);
					} else
						onflush();
					break;
				case 'progress':
					if (onprogress)
						onprogress(index + message.loaded, size);
					break;
				case 'importScripts': //no need to handle here
				case 'newTask':
				case 'echo':
					break;
				default:
					console.warn('zip.js:launchWorkerProcess: unknown message: ', message);
			}
		}

		function step() {
			index = chunkIndex * CHUNK_SIZE;
			if (index < size) {
				reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(array) {
					if (onprogress)
						onprogress(index, size);
					var msg = index === 0 ? initialMessage : {sn : sn};
					msg.type = 'append';
					msg.data = array;
					worker.postMessage(msg, [array.buffer]);
					chunkIndex++;
				}, onreaderror);
			} else {
				worker.postMessage({
					sn: sn,
					type: 'flush'
				});
			}
		}

		outputSize = 0;
		worker.addEventListener('message', onmessage, false);
		step();
	}

	function launchProcess(process, reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror) {
		var chunkIndex = 0, index, outputSize = 0,
			crcInput = crcType === 'input',
			crcOutput = crcType === 'output',
			crc = new Crc32();
		function step() {
			var outputData;
			index = chunkIndex * CHUNK_SIZE;
			if (index < size)
				reader.readUint8Array(offset + index, Math.min(CHUNK_SIZE, size - index), function(inputData) {
					var outputData;
					try {
						outputData = process.append(inputData, function(loaded) {
							if (onprogress)
								onprogress(index + loaded, size);
						});
					} catch (e) {
						onreaderror(e);
						return;
					}
					if (outputData) {
						outputSize += outputData.length;
						writer.writeUint8Array(outputData, function() {
							chunkIndex++;
							setTimeout(step, 1);
						}, onwriteerror);
						if (crcOutput)
							crc.append(outputData);
					} else {
						chunkIndex++;
						setTimeout(step, 1);
					}
					if (crcInput)
						crc.append(inputData);
					if (onprogress)
						onprogress(index, size);
				}, onreaderror);
			else {
				try {
					outputData = process.flush();
				} catch (e) {
					onreaderror(e);
					return;
				}
				if (outputData) {
					if (crcOutput)
						crc.append(outputData);
					outputSize += outputData.length;
					writer.writeUint8Array(outputData, function() {
						onend(outputSize, crc.get());
					}, onwriteerror);
				} else
					onend(outputSize, crc.get());
			}
		}

		step();
	}

	function inflate(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var crcType = computeCrc32 ? 'output' : 'none';
		if (obj.zip.useWebWorkers) {
			var initialMessage = {
				sn: sn,
				codecClass: 'Inflater',
				crcType: crcType,
			};
			launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
		} else
			launchProcess(new obj.zip.Inflater(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
	}

	function deflate(worker, sn, reader, writer, level, onend, onprogress, onreaderror, onwriteerror) {
		var crcType = 'input';
		if (obj.zip.useWebWorkers) {
			var initialMessage = {
				sn: sn,
				options: {level: level},
				codecClass: 'Deflater',
				crcType: crcType,
			};
			launchWorkerProcess(worker, initialMessage, reader, writer, 0, reader.size, onprogress, onend, onreaderror, onwriteerror);
		} else
			launchProcess(new obj.zip.Deflater(), reader, writer, 0, reader.size, crcType, onprogress, onend, onreaderror, onwriteerror);
	}

	function copy(worker, sn, reader, writer, offset, size, computeCrc32, onend, onprogress, onreaderror, onwriteerror) {
		var crcType = 'input';
		if (obj.zip.useWebWorkers && computeCrc32) {
			var initialMessage = {
				sn: sn,
				codecClass: 'NOOP',
				crcType: crcType,
			};
			launchWorkerProcess(worker, initialMessage, reader, writer, offset, size, onprogress, onend, onreaderror, onwriteerror);
		} else
			launchProcess(new NOOP(), reader, writer, offset, size, crcType, onprogress, onend, onreaderror, onwriteerror);
	}

	// ZipReader

	function decodeASCII(str) {
		var i, out = "", charCode, extendedASCII = [ '\u00C7', '\u00FC', '\u00E9', '\u00E2', '\u00E4', '\u00E0', '\u00E5', '\u00E7', '\u00EA', '\u00EB',
				'\u00E8', '\u00EF', '\u00EE', '\u00EC', '\u00C4', '\u00C5', '\u00C9', '\u00E6', '\u00C6', '\u00F4', '\u00F6', '\u00F2', '\u00FB', '\u00F9',
				'\u00FF', '\u00D6', '\u00DC', '\u00F8', '\u00A3', '\u00D8', '\u00D7', '\u0192', '\u00E1', '\u00ED', '\u00F3', '\u00FA', '\u00F1', '\u00D1',
				'\u00AA', '\u00BA', '\u00BF', '\u00AE', '\u00AC', '\u00BD', '\u00BC', '\u00A1', '\u00AB', '\u00BB', '_', '_', '_', '\u00A6', '\u00A6',
				'\u00C1', '\u00C2', '\u00C0', '\u00A9', '\u00A6', '\u00A6', '+', '+', '\u00A2', '\u00A5', '+', '+', '-', '-', '+', '-', '+', '\u00E3',
				'\u00C3', '+', '+', '-', '-', '\u00A6', '-', '+', '\u00A4', '\u00F0', '\u00D0', '\u00CA', '\u00CB', '\u00C8', 'i', '\u00CD', '\u00CE',
				'\u00CF', '+', '+', '_', '_', '\u00A6', '\u00CC', '_', '\u00D3', '\u00DF', '\u00D4', '\u00D2', '\u00F5', '\u00D5', '\u00B5', '\u00FE',
				'\u00DE', '\u00DA', '\u00DB', '\u00D9', '\u00FD', '\u00DD', '\u00AF', '\u00B4', '\u00AD', '\u00B1', '_', '\u00BE', '\u00B6', '\u00A7',
				'\u00F7', '\u00B8', '\u00B0', '\u00A8', '\u00B7', '\u00B9', '\u00B3', '\u00B2', '_', ' ' ];
		for (i = 0; i < str.length; i++) {
			charCode = str.charCodeAt(i) & 0xFF;
			if (charCode > 127)
				out += extendedASCII[charCode - 128];
			else
				out += String.fromCharCode(charCode);
		}
		return out;
	}

	function decodeUTF8(string) {
		return decodeURIComponent(escape(string));
	}

	function getString(bytes) {
		var i, str = "";
		for (i = 0; i < bytes.length; i++)
			str += String.fromCharCode(bytes[i]);
		return str;
	}

	function getDate(timeRaw) {
		var date = (timeRaw & 0xffff0000) >> 16, time = timeRaw & 0x0000ffff;
		try {
			return new Date(1980 + ((date & 0xFE00) >> 9), ((date & 0x01E0) >> 5) - 1, date & 0x001F, (time & 0xF800) >> 11, (time & 0x07E0) >> 5,
					(time & 0x001F) * 2, 0);
		} catch (e) {
		}
	}

	function readCommonHeader(entry, data, index, centralDirectory, onerror) {
		entry.version = data.view.getUint16(index, true);
		entry.bitFlag = data.view.getUint16(index + 2, true);
		entry.compressionMethod = data.view.getUint16(index + 4, true);
		entry.lastModDateRaw = data.view.getUint32(index + 6, true);
		entry.lastModDate = getDate(entry.lastModDateRaw);
		if ((entry.bitFlag & 0x01) === 0x01) {
			onerror(ERR_ENCRYPTED);
			return;
		}
		if (centralDirectory || (entry.bitFlag & 0x0008) != 0x0008) {
			entry.crc32 = data.view.getUint32(index + 10, true);
			entry.compressedSize = data.view.getUint32(index + 14, true);
			entry.uncompressedSize = data.view.getUint32(index + 18, true);
		}
		if (entry.compressedSize === 0xFFFFFFFF || entry.uncompressedSize === 0xFFFFFFFF) {
			onerror(ERR_ZIP64);
			return;
		}
		entry.filenameLength = data.view.getUint16(index + 22, true);
		entry.extraFieldLength = data.view.getUint16(index + 24, true);
	}

	function createZipReader(reader, callback, onerror) {
		var inflateSN = 0;

		function Entry() {
		}

		Entry.prototype.getData = function(writer, onend, onprogress, checkCrc32) {
			var that = this;

			function testCrc32(crc32) {
				var dataCrc32 = getDataHelper(4);
				dataCrc32.view.setUint32(0, crc32);
				return that.crc32 == dataCrc32.view.getUint32(0);
			}

			function getWriterData(uncompressedSize, crc32) {
				if (checkCrc32 && !testCrc32(crc32))
					onerror(ERR_CRC);
				else
					writer.getData(function(data) {
						onend(data);
					});
			}

			function onreaderror(err) {
				onerror(err || ERR_READ_DATA);
			}

			function onwriteerror(err) {
				onerror(err || ERR_WRITE_DATA);
			}

			reader.readUint8Array(that.offset, 30, function(bytes) {
				var data = getDataHelper(bytes.length, bytes), dataOffset;
				if (data.view.getUint32(0) != 0x504b0304) {
					onerror(ERR_BAD_FORMAT);
					return;
				}
				readCommonHeader(that, data, 4, false, onerror);
				dataOffset = that.offset + 30 + that.filenameLength + that.extraFieldLength;
				writer.init(function() {
					if (that.compressionMethod === 0)
						copy(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
					else
						inflate(that._worker, inflateSN++, reader, writer, dataOffset, that.compressedSize, checkCrc32, getWriterData, onprogress, onreaderror, onwriteerror);
				}, onwriteerror);
			}, onreaderror);
		};

		function seekEOCDR(eocdrCallback) {
			// "End of central directory record" is the last part of a zip archive, and is at least 22 bytes long.
			// Zip file comment is the last part of EOCDR and has max length of 64KB,
			// so we only have to search the last 64K + 22 bytes of a archive for EOCDR signature (0x06054b50).
			var EOCDR_MIN = 22;
			if (reader.size < EOCDR_MIN) {
				onerror(ERR_BAD_FORMAT);
				return;
			}
			var ZIP_COMMENT_MAX = 256 * 256, EOCDR_MAX = EOCDR_MIN + ZIP_COMMENT_MAX;

			// In most cases, the EOCDR is EOCDR_MIN bytes long
			doSeek(EOCDR_MIN, function() {
				// If not found, try within EOCDR_MAX bytes
				doSeek(Math.min(EOCDR_MAX, reader.size), function() {
					onerror(ERR_BAD_FORMAT);
				});
			});

			// seek last length bytes of file for EOCDR
			function doSeek(length, eocdrNotFoundCallback) {
				reader.readUint8Array(reader.size - length, length, function(bytes) {
					for (var i = bytes.length - EOCDR_MIN; i >= 0; i--) {
						if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
							eocdrCallback(new DataView(bytes.buffer, i, EOCDR_MIN));
							return;
						}
					}
					eocdrNotFoundCallback();
				}, function() {
					onerror(ERR_READ);
				});
			}
		}

		var zipReader = {
			getEntries : function(callback) {
				var worker = this._worker;
				// look for End of central directory record
				seekEOCDR(function(dataView) {
					var datalength, fileslength;
					datalength = dataView.getUint32(16, true);
					fileslength = dataView.getUint16(8, true);
					if (datalength < 0 || datalength >= reader.size) {
						onerror(ERR_BAD_FORMAT);
						return;
					}
					reader.readUint8Array(datalength, reader.size - datalength, function(bytes) {
						var i, index = 0, entries = [], entry, filename, comment, data = getDataHelper(bytes.length, bytes);
						for (i = 0; i < fileslength; i++) {
							entry = new Entry();
							entry._worker = worker;
							if (data.view.getUint32(index) != 0x504b0102) {
								onerror(ERR_BAD_FORMAT);
								return;
							}
							readCommonHeader(entry, data, index + 6, true, onerror);
							entry.commentLength = data.view.getUint16(index + 32, true);
							entry.directory = ((data.view.getUint8(index + 38) & 0x10) == 0x10);
							entry.offset = data.view.getUint32(index + 42, true);
							filename = getString(data.array.subarray(index + 46, index + 46 + entry.filenameLength));
							entry.filename = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(filename) : decodeASCII(filename);
							if (!entry.directory && entry.filename.charAt(entry.filename.length - 1) == "/")
								entry.directory = true;
							comment = getString(data.array.subarray(index + 46 + entry.filenameLength + entry.extraFieldLength, index + 46
									+ entry.filenameLength + entry.extraFieldLength + entry.commentLength));
							entry.comment = ((entry.bitFlag & 0x0800) === 0x0800) ? decodeUTF8(comment) : decodeASCII(comment);
							entries.push(entry);
							index += 46 + entry.filenameLength + entry.extraFieldLength + entry.commentLength;
						}
						callback(entries);
					}, function() {
						onerror(ERR_READ);
					});
				});
			},
			close : function(callback) {
				if (this._worker) {
					this._worker.terminate();
					this._worker = null;
				}
				if (callback)
					callback();
			},
			_worker: null
		};

		if (!obj.zip.useWebWorkers)
			callback(zipReader);
		else {
			createWorker('inflater',
				function(worker) {
					zipReader._worker = worker;
					callback(zipReader);
				},
				function(err) {
					onerror(err);
				}
			);
		}
	}

	// ZipWriter

	function encodeUTF8(string) {
		return unescape(encodeURIComponent(string));
	}

	function getBytes(str) {
		var i, array = [];
		for (i = 0; i < str.length; i++)
			array.push(str.charCodeAt(i));
		return array;
	}

	function createZipWriter(writer, callback, onerror, dontDeflate) {
		var files = {}, filenames = [], datalength = 0;
		var deflateSN = 0;

		function onwriteerror(err) {
			onerror(err || ERR_WRITE);
		}

		function onreaderror(err) {
			onerror(err || ERR_READ_DATA);
		}

		var zipWriter = {
			add : function(name, reader, onend, onprogress, options) {
				var header, filename, date;
				var worker = this._worker;

				function writeHeader(callback) {
					var data;
					date = options.lastModDate || new Date();
					header = getDataHelper(26);
					files[name] = {
						headerArray : header.array,
						directory : options.directory,
						filename : filename,
						offset : datalength,
						comment : getBytes(encodeUTF8(options.comment || ""))
					};
					header.view.setUint32(0, 0x14000808);
					if (options.version)
						header.view.setUint8(0, options.version);
					if (!dontDeflate && options.level !== 0 && !options.directory)
						header.view.setUint16(4, 0x0800);
					header.view.setUint16(6, (((date.getHours() << 6) | date.getMinutes()) << 5) | date.getSeconds() / 2, true);
					header.view.setUint16(8, ((((date.getFullYear() - 1980) << 4) | (date.getMonth() + 1)) << 5) | date.getDate(), true);
					header.view.setUint16(22, filename.length, true);
					data = getDataHelper(30 + filename.length);
					data.view.setUint32(0, 0x504b0304);
					data.array.set(header.array, 4);
					data.array.set(filename, 30);
					datalength += data.array.length;
					writer.writeUint8Array(data.array, callback, onwriteerror);
				}

				function writeFooter(compressedLength, crc32) {
					var footer = getDataHelper(16);
					datalength += compressedLength || 0;
					footer.view.setUint32(0, 0x504b0708);
					if (typeof crc32 != "undefined") {
						header.view.setUint32(10, crc32, true);
						footer.view.setUint32(4, crc32, true);
					}
					if (reader) {
						footer.view.setUint32(8, compressedLength, true);
						header.view.setUint32(14, compressedLength, true);
						footer.view.setUint32(12, reader.size, true);
						header.view.setUint32(18, reader.size, true);
					}
					writer.writeUint8Array(footer.array, function() {
						datalength += 16;
						onend();
					}, onwriteerror);
				}

				function writeFile() {
					options = options || {};
					name = name.trim();
					if (options.directory && name.charAt(name.length - 1) != "/")
						name += "/";
					if (files.hasOwnProperty(name)) {
						onerror(ERR_DUPLICATED_NAME);
						return;
					}
					filename = getBytes(encodeUTF8(name));
					filenames.push(name);
					writeHeader(function() {
						if (reader)
							if (dontDeflate || options.level === 0)
								copy(worker, deflateSN++, reader, writer, 0, reader.size, true, writeFooter, onprogress, onreaderror, onwriteerror);
							else
								deflate(worker, deflateSN++, reader, writer, options.level, writeFooter, onprogress, onreaderror, onwriteerror);
						else
							writeFooter();
					}, onwriteerror);
				}

				if (reader)
					reader.init(writeFile, onreaderror);
				else
					writeFile();
			},
			close : function(callback) {
				if (this._worker) {
					this._worker.terminate();
					this._worker = null;
				}

				var data, length = 0, index = 0, indexFilename, file;
				for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
					file = files[filenames[indexFilename]];
					length += 46 + file.filename.length + file.comment.length;
				}
				data = getDataHelper(length + 22);
				for (indexFilename = 0; indexFilename < filenames.length; indexFilename++) {
					file = files[filenames[indexFilename]];
					data.view.setUint32(index, 0x504b0102);
					data.view.setUint16(index + 4, 0x1400);
					data.array.set(file.headerArray, index + 6);
					data.view.setUint16(index + 32, file.comment.length, true);
					if (file.directory)
						data.view.setUint8(index + 38, 0x10);
					data.view.setUint32(index + 42, file.offset, true);
					data.array.set(file.filename, index + 46);
					data.array.set(file.comment, index + 46 + file.filename.length);
					index += 46 + file.filename.length + file.comment.length;
				}
				data.view.setUint32(index, 0x504b0506);
				data.view.setUint16(index + 8, filenames.length, true);
				data.view.setUint16(index + 10, filenames.length, true);
				data.view.setUint32(index + 12, length, true);
				data.view.setUint32(index + 16, datalength, true);
				writer.writeUint8Array(data.array, function() {
					writer.getData(callback);
				}, onwriteerror);
			},
			_worker: null
		};

		if (!obj.zip.useWebWorkers)
			callback(zipWriter);
		else {
			createWorker('deflater',
				function(worker) {
					zipWriter._worker = worker;
					callback(zipWriter);
				},
				function(err) {
					onerror(err);
				}
			);
		}
	}

	function resolveURLs(urls) {
		var a = document.createElement('a');
		return urls.map(function(url) {
			a.href = url;
			return a.href;
		});
	}

	var DEFAULT_WORKER_SCRIPTS = {
		deflater: ['z-worker.js', 'deflate.js'],
		inflater: ['z-worker.js', 'inflate.js']
	};
	function createWorker(type, callback, onerror) {
		if (obj.zip.workerScripts !== null && obj.zip.workerScriptsPath !== null) {
			onerror(new Error('Either zip.workerScripts or zip.workerScriptsPath may be set, not both.'));
			return;
		}
		var scripts;
		if (obj.zip.workerScripts) {
			scripts = obj.zip.workerScripts[type];
			if (!Array.isArray(scripts)) {
				onerror(new Error('zip.workerScripts.' + type + ' is not an array!'));
				return;
			}
			scripts = resolveURLs(scripts);
		} else {
			scripts = DEFAULT_WORKER_SCRIPTS[type].slice(0);
			scripts[0] = (obj.zip.workerScriptsPath || '') + scripts[0];
		}
		var worker = new Worker(scripts[0]);
		// record total consumed time by inflater/deflater/crc32 in this worker
		worker.codecTime = worker.crcTime = 0;
		worker.postMessage({ type: 'importScripts', scripts: scripts.slice(1) });
		worker.addEventListener('message', onmessage);
		function onmessage(ev) {
			var msg = ev.data;
			if (msg.error) {
				worker.terminate(); // should before onerror(), because onerror() may throw.
				onerror(msg.error);
				return;
			}
			if (msg.type === 'importScripts') {
				worker.removeEventListener('message', onmessage);
				worker.removeEventListener('error', errorHandler);
				callback(worker);
			}
		}
		// catch entry script loading error and other unhandled errors
		worker.addEventListener('error', errorHandler);
		function errorHandler(err) {
			worker.terminate();
			onerror(err);
		}
	}

	function onerror_default(error) {
		console.error(error);
	}
	obj.zip = {
		Reader : Reader,
		Writer : Writer,
		BlobReader : BlobReader,
		Data64URIReader : Data64URIReader,
		TextReader : TextReader,
		BlobWriter : BlobWriter,
		Data64URIWriter : Data64URIWriter,
		TextWriter : TextWriter,
		createReader : function(reader, callback, onerror) {
			onerror = onerror || onerror_default;

			reader.init(function() {
				createZipReader(reader, callback, onerror);
			}, onerror);
		},
		createWriter : function(writer, callback, onerror, dontDeflate) {
			onerror = onerror || onerror_default;
			dontDeflate = !!dontDeflate;

			writer.init(function() {
				createZipWriter(writer, callback, onerror, dontDeflate);
			}, onerror);
		},
		useWebWorkers : true,
		/**
		 * Directory containing the default worker scripts (z-worker.js, deflate.js, and inflate.js), relative to current base url.
		 * E.g.: zip.workerScripts = './';
		 */
		workerScriptsPath : null,
		/**
		 * Advanced option to control which scripts are loaded in the Web worker. If this option is specified, then workerScriptsPath must not be set.
		 * workerScripts.deflater/workerScripts.inflater should be arrays of urls to scripts for deflater/inflater, respectively.
		 * Scripts in the array are executed in order, and the first one should be z-worker.js, which is used to start the worker.
		 * All urls are relative to current base url.
		 * E.g.:
		 * zip.workerScripts = {
		 *   deflater: ['z-worker.js', 'deflate.js'],
		 *   inflater: ['z-worker.js', 'inflate.js']
		 * };
		 */
		workerScripts : null,
	};

})(this);
/*
 Copyright (c) 2013 Gildas Lormeau. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright 
 notice, this list of conditions and the following disclaimer in 
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

(function() {
	"use strict";
	var table = {
		"application" : {
			"andrew-inset" : "ez",
			"annodex" : "anx",
			"atom+xml" : "atom",
			"atomcat+xml" : "atomcat",
			"atomserv+xml" : "atomsrv",
			"bbolin" : "lin",
			"cap" : [ "cap", "pcap" ],
			"cu-seeme" : "cu",
			"davmount+xml" : "davmount",
			"dsptype" : "tsp",
			"ecmascript" : [ "es", "ecma" ],
			"futuresplash" : "spl",
			"hta" : "hta",
			"java-archive" : "jar",
			"java-serialized-object" : "ser",
			"java-vm" : "class",
			"javascript" : "js",
			"m3g" : "m3g",
			"mac-binhex40" : "hqx",
			"mathematica" : [ "nb", "ma", "mb" ],
			"msaccess" : "mdb",
			"msword" : [ "doc", "dot" ],
			"mxf" : "mxf",
			"oda" : "oda",
			"ogg" : "ogx",
			"pdf" : "pdf",
			"pgp-keys" : "key",
			"pgp-signature" : [ "asc", "sig" ],
			"pics-rules" : "prf",
			"postscript" : [ "ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3" ],
			"rar" : "rar",
			"rdf+xml" : "rdf",
			"rss+xml" : "rss",
			"rtf" : "rtf",
			"smil" : [ "smi", "smil" ],
			"xhtml+xml" : [ "xhtml", "xht" ],
			"xml" : [ "xml", "xsl", "xsd" ],
			"xspf+xml" : "xspf",
			"zip" : "zip",
			"vnd.android.package-archive" : "apk",
			"vnd.cinderella" : "cdy",
			"vnd.google-earth.kml+xml" : "kml",
			"vnd.google-earth.kmz" : "kmz",
			"vnd.mozilla.xul+xml" : "xul",
			"vnd.ms-excel" : [ "xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw" ],
			"vnd.ms-pki.seccat" : "cat",
			"vnd.ms-pki.stl" : "stl",
			"vnd.ms-powerpoint" : [ "ppt", "pps", "pot" ],
			"vnd.oasis.opendocument.chart" : "odc",
			"vnd.oasis.opendocument.database" : "odb",
			"vnd.oasis.opendocument.formula" : "odf",
			"vnd.oasis.opendocument.graphics" : "odg",
			"vnd.oasis.opendocument.graphics-template" : "otg",
			"vnd.oasis.opendocument.image" : "odi",
			"vnd.oasis.opendocument.presentation" : "odp",
			"vnd.oasis.opendocument.presentation-template" : "otp",
			"vnd.oasis.opendocument.spreadsheet" : "ods",
			"vnd.oasis.opendocument.spreadsheet-template" : "ots",
			"vnd.oasis.opendocument.text" : "odt",
			"vnd.oasis.opendocument.text-master" : "odm",
			"vnd.oasis.opendocument.text-template" : "ott",
			"vnd.oasis.opendocument.text-web" : "oth",
			"vnd.openxmlformats-officedocument.spreadsheetml.sheet" : "xlsx",
			"vnd.openxmlformats-officedocument.spreadsheetml.template" : "xltx",
			"vnd.openxmlformats-officedocument.presentationml.presentation" : "pptx",
			"vnd.openxmlformats-officedocument.presentationml.slideshow" : "ppsx",
			"vnd.openxmlformats-officedocument.presentationml.template" : "potx",
			"vnd.openxmlformats-officedocument.wordprocessingml.document" : "docx",
			"vnd.openxmlformats-officedocument.wordprocessingml.template" : "dotx",
			"vnd.smaf" : "mmf",
			"vnd.stardivision.calc" : "sdc",
			"vnd.stardivision.chart" : "sds",
			"vnd.stardivision.draw" : "sda",
			"vnd.stardivision.impress" : "sdd",
			"vnd.stardivision.math" : [ "sdf", "smf" ],
			"vnd.stardivision.writer" : [ "sdw", "vor" ],
			"vnd.stardivision.writer-global" : "sgl",
			"vnd.sun.xml.calc" : "sxc",
			"vnd.sun.xml.calc.template" : "stc",
			"vnd.sun.xml.draw" : "sxd",
			"vnd.sun.xml.draw.template" : "std",
			"vnd.sun.xml.impress" : "sxi",
			"vnd.sun.xml.impress.template" : "sti",
			"vnd.sun.xml.math" : "sxm",
			"vnd.sun.xml.writer" : "sxw",
			"vnd.sun.xml.writer.global" : "sxg",
			"vnd.sun.xml.writer.template" : "stw",
			"vnd.symbian.install" : [ "sis", "sisx" ],
			"vnd.visio" : [ "vsd", "vst", "vss", "vsw" ],
			"vnd.wap.wbxml" : "wbxml",
			"vnd.wap.wmlc" : "wmlc",
			"vnd.wap.wmlscriptc" : "wmlsc",
			"vnd.wordperfect" : "wpd",
			"vnd.wordperfect5.1" : "wp5",
			"x-123" : "wk",
			"x-7z-compressed" : "7z",
			"x-abiword" : "abw",
			"x-apple-diskimage" : "dmg",
			"x-bcpio" : "bcpio",
			"x-bittorrent" : "torrent",
			"x-cbr" : [ "cbr", "cba", "cbt", "cb7" ],
			"x-cbz" : "cbz",
			"x-cdf" : [ "cdf", "cda" ],
			"x-cdlink" : "vcd",
			"x-chess-pgn" : "pgn",
			"x-cpio" : "cpio",
			"x-csh" : "csh",
			"x-debian-package" : [ "deb", "udeb" ],
			"x-director" : [ "dcr", "dir", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa" ],
			"x-dms" : "dms",
			"x-doom" : "wad",
			"x-dvi" : "dvi",
			"x-httpd-eruby" : "rhtml",
			"x-font" : "pcf.Z",
			"x-freemind" : "mm",
			"x-gnumeric" : "gnumeric",
			"x-go-sgf" : "sgf",
			"x-graphing-calculator" : "gcf",
			"x-gtar" : [ "gtar", "taz" ],
			"x-hdf" : "hdf",
			"x-httpd-php" : [ "phtml", "pht", "php" ],
			"x-httpd-php-source" : "phps",
			"x-httpd-php3" : "php3",
			"x-httpd-php3-preprocessed" : "php3p",
			"x-httpd-php4" : "php4",
			"x-httpd-php5" : "php5",
			"x-ica" : "ica",
			"x-info" : "info",
			"x-internet-signup" : [ "ins", "isp" ],
			"x-iphone" : "iii",
			"x-iso9660-image" : "iso",
			"x-java-jnlp-file" : "jnlp",
			"x-jmol" : "jmz",
			"x-killustrator" : "kil",
			"x-koan" : [ "skp", "skd", "skt", "skm" ],
			"x-kpresenter" : [ "kpr", "kpt" ],
			"x-kword" : [ "kwd", "kwt" ],
			"x-latex" : "latex",
			"x-lha" : "lha",
			"x-lyx" : "lyx",
			"x-lzh" : "lzh",
			"x-lzx" : "lzx",
			"x-maker" : [ "frm", "maker", "frame", "fm", "fb", "book", "fbdoc" ],
			"x-ms-wmd" : "wmd",
			"x-ms-wmz" : "wmz",
			"x-msdos-program" : [ "com", "exe", "bat", "dll" ],
			"x-msi" : "msi",
			"x-netcdf" : [ "nc", "cdf" ],
			"x-ns-proxy-autoconfig" : [ "pac", "dat" ],
			"x-nwc" : "nwc",
			"x-object" : "o",
			"x-oz-application" : "oza",
			"x-pkcs7-certreqresp" : "p7r",
			"x-python-code" : [ "pyc", "pyo" ],
			"x-qgis" : [ "qgs", "shp", "shx" ],
			"x-quicktimeplayer" : "qtl",
			"x-redhat-package-manager" : "rpm",
			"x-ruby" : "rb",
			"x-sh" : "sh",
			"x-shar" : "shar",
			"x-shockwave-flash" : [ "swf", "swfl" ],
			"x-silverlight" : "scr",
			"x-stuffit" : "sit",
			"x-sv4cpio" : "sv4cpio",
			"x-sv4crc" : "sv4crc",
			"x-tar" : "tar",
			"x-tcl" : "tcl",
			"x-tex-gf" : "gf",
			"x-tex-pk" : "pk",
			"x-texinfo" : [ "texinfo", "texi" ],
			"x-trash" : [ "~", "%", "bak", "old", "sik" ],
			"x-troff" : [ "t", "tr", "roff" ],
			"x-troff-man" : "man",
			"x-troff-me" : "me",
			"x-troff-ms" : "ms",
			"x-ustar" : "ustar",
			"x-wais-source" : "src",
			"x-wingz" : "wz",
			"x-x509-ca-cert" : [ "crt", "der", "cer" ],
			"x-xcf" : "xcf",
			"x-xfig" : "fig",
			"x-xpinstall" : "xpi",
			"applixware" : "aw",
			"atomsvc+xml" : "atomsvc",
			"ccxml+xml" : "ccxml",
			"cdmi-capability" : "cdmia",
			"cdmi-container" : "cdmic",
			"cdmi-domain" : "cdmid",
			"cdmi-object" : "cdmio",
			"cdmi-queue" : "cdmiq",
			"docbook+xml" : "dbk",
			"dssc+der" : "dssc",
			"dssc+xml" : "xdssc",
			"emma+xml" : "emma",
			"epub+zip" : "epub",
			"exi" : "exi",
			"font-tdpfr" : "pfr",
			"gml+xml" : "gml",
			"gpx+xml" : "gpx",
			"gxf" : "gxf",
			"hyperstudio" : "stk",
			"inkml+xml" : [ "ink", "inkml" ],
			"ipfix" : "ipfix",
			"json" : "json",
			"jsonml+json" : "jsonml",
			"lost+xml" : "lostxml",
			"mads+xml" : "mads",
			"marc" : "mrc",
			"marcxml+xml" : "mrcx",
			"mathml+xml" : "mathml",
			"mbox" : "mbox",
			"mediaservercontrol+xml" : "mscml",
			"metalink+xml" : "metalink",
			"metalink4+xml" : "meta4",
			"mets+xml" : "mets",
			"mods+xml" : "mods",
			"mp21" : [ "m21", "mp21" ],
			"mp4" : "mp4s",
			"oebps-package+xml" : "opf",
			"omdoc+xml" : "omdoc",
			"onenote" : [ "onetoc", "onetoc2", "onetmp", "onepkg" ],
			"oxps" : "oxps",
			"patch-ops-error+xml" : "xer",
			"pgp-encrypted" : "pgp",
			"pkcs10" : "p10",
			"pkcs7-mime" : [ "p7m", "p7c" ],
			"pkcs7-signature" : "p7s",
			"pkcs8" : "p8",
			"pkix-attr-cert" : "ac",
			"pkix-crl" : "crl",
			"pkix-pkipath" : "pkipath",
			"pkixcmp" : "pki",
			"pls+xml" : "pls",
			"prs.cww" : "cww",
			"pskc+xml" : "pskcxml",
			"reginfo+xml" : "rif",
			"relax-ng-compact-syntax" : "rnc",
			"resource-lists+xml" : "rl",
			"resource-lists-diff+xml" : "rld",
			"rls-services+xml" : "rs",
			"rpki-ghostbusters" : "gbr",
			"rpki-manifest" : "mft",
			"rpki-roa" : "roa",
			"rsd+xml" : "rsd",
			"sbml+xml" : "sbml",
			"scvp-cv-request" : "scq",
			"scvp-cv-response" : "scs",
			"scvp-vp-request" : "spq",
			"scvp-vp-response" : "spp",
			"sdp" : "sdp",
			"set-payment-initiation" : "setpay",
			"set-registration-initiation" : "setreg",
			"shf+xml" : "shf",
			"sparql-query" : "rq",
			"sparql-results+xml" : "srx",
			"srgs" : "gram",
			"srgs+xml" : "grxml",
			"sru+xml" : "sru",
			"ssdl+xml" : "ssdl",
			"ssml+xml" : "ssml",
			"tei+xml" : [ "tei", "teicorpus" ],
			"thraud+xml" : "tfi",
			"timestamped-data" : "tsd",
			"vnd.3gpp.pic-bw-large" : "plb",
			"vnd.3gpp.pic-bw-small" : "psb",
			"vnd.3gpp.pic-bw-var" : "pvb",
			"vnd.3gpp2.tcap" : "tcap",
			"vnd.3m.post-it-notes" : "pwn",
			"vnd.accpac.simply.aso" : "aso",
			"vnd.accpac.simply.imp" : "imp",
			"vnd.acucobol" : "acu",
			"vnd.acucorp" : [ "atc", "acutc" ],
			"vnd.adobe.air-application-installer-package+zip" : "air",
			"vnd.adobe.formscentral.fcdt" : "fcdt",
			"vnd.adobe.fxp" : [ "fxp", "fxpl" ],
			"vnd.adobe.xdp+xml" : "xdp",
			"vnd.adobe.xfdf" : "xfdf",
			"vnd.ahead.space" : "ahead",
			"vnd.airzip.filesecure.azf" : "azf",
			"vnd.airzip.filesecure.azs" : "azs",
			"vnd.amazon.ebook" : "azw",
			"vnd.americandynamics.acc" : "acc",
			"vnd.amiga.ami" : "ami",
			"vnd.anser-web-certificate-issue-initiation" : "cii",
			"vnd.anser-web-funds-transfer-initiation" : "fti",
			"vnd.antix.game-component" : "atx",
			"vnd.apple.installer+xml" : "mpkg",
			"vnd.apple.mpegurl" : "m3u8",
			"vnd.aristanetworks.swi" : "swi",
			"vnd.astraea-software.iota" : "iota",
			"vnd.audiograph" : "aep",
			"vnd.blueice.multipass" : "mpm",
			"vnd.bmi" : "bmi",
			"vnd.businessobjects" : "rep",
			"vnd.chemdraw+xml" : "cdxml",
			"vnd.chipnuts.karaoke-mmd" : "mmd",
			"vnd.claymore" : "cla",
			"vnd.cloanto.rp9" : "rp9",
			"vnd.clonk.c4group" : [ "c4g", "c4d", "c4f", "c4p", "c4u" ],
			"vnd.cluetrust.cartomobile-config" : "c11amc",
			"vnd.cluetrust.cartomobile-config-pkg" : "c11amz",
			"vnd.commonspace" : "csp",
			"vnd.contact.cmsg" : "cdbcmsg",
			"vnd.cosmocaller" : "cmc",
			"vnd.crick.clicker" : "clkx",
			"vnd.crick.clicker.keyboard" : "clkk",
			"vnd.crick.clicker.palette" : "clkp",
			"vnd.crick.clicker.template" : "clkt",
			"vnd.crick.clicker.wordbank" : "clkw",
			"vnd.criticaltools.wbs+xml" : "wbs",
			"vnd.ctc-posml" : "pml",
			"vnd.cups-ppd" : "ppd",
			"vnd.curl.car" : "car",
			"vnd.curl.pcurl" : "pcurl",
			"vnd.dart" : "dart",
			"vnd.data-vision.rdz" : "rdz",
			"vnd.dece.data" : [ "uvf", "uvvf", "uvd", "uvvd" ],
			"vnd.dece.ttml+xml" : [ "uvt", "uvvt" ],
			"vnd.dece.unspecified" : [ "uvx", "uvvx" ],
			"vnd.dece.zip" : [ "uvz", "uvvz" ],
			"vnd.denovo.fcselayout-link" : "fe_launch",
			"vnd.dna" : "dna",
			"vnd.dolby.mlp" : "mlp",
			"vnd.dpgraph" : "dpg",
			"vnd.dreamfactory" : "dfac",
			"vnd.ds-keypoint" : "kpxx",
			"vnd.dvb.ait" : "ait",
			"vnd.dvb.service" : "svc",
			"vnd.dynageo" : "geo",
			"vnd.ecowin.chart" : "mag",
			"vnd.enliven" : "nml",
			"vnd.epson.esf" : "esf",
			"vnd.epson.msf" : "msf",
			"vnd.epson.quickanime" : "qam",
			"vnd.epson.salt" : "slt",
			"vnd.epson.ssf" : "ssf",
			"vnd.eszigno3+xml" : [ "es3", "et3" ],
			"vnd.ezpix-album" : "ez2",
			"vnd.ezpix-package" : "ez3",
			"vnd.fdf" : "fdf",
			"vnd.fdsn.mseed" : "mseed",
			"vnd.fdsn.seed" : [ "seed", "dataless" ],
			"vnd.flographit" : "gph",
			"vnd.fluxtime.clip" : "ftc",
			"vnd.framemaker" : [ "fm", "frame", "maker", "book" ],
			"vnd.frogans.fnc" : "fnc",
			"vnd.frogans.ltf" : "ltf",
			"vnd.fsc.weblaunch" : "fsc",
			"vnd.fujitsu.oasys" : "oas",
			"vnd.fujitsu.oasys2" : "oa2",
			"vnd.fujitsu.oasys3" : "oa3",
			"vnd.fujitsu.oasysgp" : "fg5",
			"vnd.fujitsu.oasysprs" : "bh2",
			"vnd.fujixerox.ddd" : "ddd",
			"vnd.fujixerox.docuworks" : "xdw",
			"vnd.fujixerox.docuworks.binder" : "xbd",
			"vnd.fuzzysheet" : "fzs",
			"vnd.genomatix.tuxedo" : "txd",
			"vnd.geogebra.file" : "ggb",
			"vnd.geogebra.tool" : "ggt",
			"vnd.geometry-explorer" : [ "gex", "gre" ],
			"vnd.geonext" : "gxt",
			"vnd.geoplan" : "g2w",
			"vnd.geospace" : "g3w",
			"vnd.gmx" : "gmx",
			"vnd.grafeq" : [ "gqf", "gqs" ],
			"vnd.groove-account" : "gac",
			"vnd.groove-help" : "ghf",
			"vnd.groove-identity-message" : "gim",
			"vnd.groove-injector" : "grv",
			"vnd.groove-tool-message" : "gtm",
			"vnd.groove-tool-template" : "tpl",
			"vnd.groove-vcard" : "vcg",
			"vnd.hal+xml" : "hal",
			"vnd.handheld-entertainment+xml" : "zmm",
			"vnd.hbci" : "hbci",
			"vnd.hhe.lesson-player" : "les",
			"vnd.hp-hpgl" : "hpgl",
			"vnd.hp-hpid" : "hpid",
			"vnd.hp-hps" : "hps",
			"vnd.hp-jlyt" : "jlt",
			"vnd.hp-pcl" : "pcl",
			"vnd.hp-pclxl" : "pclxl",
			"vnd.hydrostatix.sof-data" : "sfd-hdstx",
			"vnd.ibm.minipay" : "mpy",
			"vnd.ibm.modcap" : [ "afp", "listafp", "list3820" ],
			"vnd.ibm.rights-management" : "irm",
			"vnd.ibm.secure-container" : "sc",
			"vnd.iccprofile" : [ "icc", "icm" ],
			"vnd.igloader" : "igl",
			"vnd.immervision-ivp" : "ivp",
			"vnd.immervision-ivu" : "ivu",
			"vnd.insors.igm" : "igm",
			"vnd.intercon.formnet" : [ "xpw", "xpx" ],
			"vnd.intergeo" : "i2g",
			"vnd.intu.qbo" : "qbo",
			"vnd.intu.qfx" : "qfx",
			"vnd.ipunplugged.rcprofile" : "rcprofile",
			"vnd.irepository.package+xml" : "irp",
			"vnd.is-xpr" : "xpr",
			"vnd.isac.fcs" : "fcs",
			"vnd.jam" : "jam",
			"vnd.jcp.javame.midlet-rms" : "rms",
			"vnd.jisp" : "jisp",
			"vnd.joost.joda-archive" : "joda",
			"vnd.kahootz" : [ "ktz", "ktr" ],
			"vnd.kde.karbon" : "karbon",
			"vnd.kde.kchart" : "chrt",
			"vnd.kde.kformula" : "kfo",
			"vnd.kde.kivio" : "flw",
			"vnd.kde.kontour" : "kon",
			"vnd.kde.kpresenter" : [ "kpr", "kpt" ],
			"vnd.kde.kspread" : "ksp",
			"vnd.kde.kword" : [ "kwd", "kwt" ],
			"vnd.kenameaapp" : "htke",
			"vnd.kidspiration" : "kia",
			"vnd.kinar" : [ "kne", "knp" ],
			"vnd.koan" : [ "skp", "skd", "skt", "skm" ],
			"vnd.kodak-descriptor" : "sse",
			"vnd.las.las+xml" : "lasxml",
			"vnd.llamagraphics.life-balance.desktop" : "lbd",
			"vnd.llamagraphics.life-balance.exchange+xml" : "lbe",
			"vnd.lotus-1-2-3" : "123",
			"vnd.lotus-approach" : "apr",
			"vnd.lotus-freelance" : "pre",
			"vnd.lotus-notes" : "nsf",
			"vnd.lotus-organizer" : "org",
			"vnd.lotus-screencam" : "scm",
			"vnd.lotus-wordpro" : "lwp",
			"vnd.macports.portpkg" : "portpkg",
			"vnd.mcd" : "mcd",
			"vnd.medcalcdata" : "mc1",
			"vnd.mediastation.cdkey" : "cdkey",
			"vnd.mfer" : "mwf",
			"vnd.mfmp" : "mfm",
			"vnd.micrografx.flo" : "flo",
			"vnd.micrografx.igx" : "igx",
			"vnd.mif" : "mif",
			"vnd.mobius.daf" : "daf",
			"vnd.mobius.dis" : "dis",
			"vnd.mobius.mbk" : "mbk",
			"vnd.mobius.mqy" : "mqy",
			"vnd.mobius.msl" : "msl",
			"vnd.mobius.plc" : "plc",
			"vnd.mobius.txf" : "txf",
			"vnd.mophun.application" : "mpn",
			"vnd.mophun.certificate" : "mpc",
			"vnd.ms-artgalry" : "cil",
			"vnd.ms-cab-compressed" : "cab",
			"vnd.ms-excel.addin.macroenabled.12" : "xlam",
			"vnd.ms-excel.sheet.binary.macroenabled.12" : "xlsb",
			"vnd.ms-excel.sheet.macroenabled.12" : "xlsm",
			"vnd.ms-excel.template.macroenabled.12" : "xltm",
			"vnd.ms-fontobject" : "eot",
			"vnd.ms-htmlhelp" : "chm",
			"vnd.ms-ims" : "ims",
			"vnd.ms-lrm" : "lrm",
			"vnd.ms-officetheme" : "thmx",
			"vnd.ms-powerpoint.addin.macroenabled.12" : "ppam",
			"vnd.ms-powerpoint.presentation.macroenabled.12" : "pptm",
			"vnd.ms-powerpoint.slide.macroenabled.12" : "sldm",
			"vnd.ms-powerpoint.slideshow.macroenabled.12" : "ppsm",
			"vnd.ms-powerpoint.template.macroenabled.12" : "potm",
			"vnd.ms-project" : [ "mpp", "mpt" ],
			"vnd.ms-word.document.macroenabled.12" : "docm",
			"vnd.ms-word.template.macroenabled.12" : "dotm",
			"vnd.ms-works" : [ "wps", "wks", "wcm", "wdb" ],
			"vnd.ms-wpl" : "wpl",
			"vnd.ms-xpsdocument" : "xps",
			"vnd.mseq" : "mseq",
			"vnd.musician" : "mus",
			"vnd.muvee.style" : "msty",
			"vnd.mynfc" : "taglet",
			"vnd.neurolanguage.nlu" : "nlu",
			"vnd.nitf" : [ "ntf", "nitf" ],
			"vnd.noblenet-directory" : "nnd",
			"vnd.noblenet-sealer" : "nns",
			"vnd.noblenet-web" : "nnw",
			"vnd.nokia.n-gage.data" : "ngdat",
			"vnd.nokia.n-gage.symbian.install" : "n-gage",
			"vnd.nokia.radio-preset" : "rpst",
			"vnd.nokia.radio-presets" : "rpss",
			"vnd.novadigm.edm" : "edm",
			"vnd.novadigm.edx" : "edx",
			"vnd.novadigm.ext" : "ext",
			"vnd.oasis.opendocument.chart-template" : "otc",
			"vnd.oasis.opendocument.formula-template" : "odft",
			"vnd.oasis.opendocument.image-template" : "oti",
			"vnd.olpc-sugar" : "xo",
			"vnd.oma.dd2+xml" : "dd2",
			"vnd.openofficeorg.extension" : "oxt",
			"vnd.openxmlformats-officedocument.presentationml.slide" : "sldx",
			"vnd.osgeo.mapguide.package" : "mgp",
			"vnd.osgi.dp" : "dp",
			"vnd.osgi.subsystem" : "esa",
			"vnd.palm" : [ "pdb", "pqa", "oprc" ],
			"vnd.pawaafile" : "paw",
			"vnd.pg.format" : "str",
			"vnd.pg.osasli" : "ei6",
			"vnd.picsel" : "efif",
			"vnd.pmi.widget" : "wg",
			"vnd.pocketlearn" : "plf",
			"vnd.powerbuilder6" : "pbd",
			"vnd.previewsystems.box" : "box",
			"vnd.proteus.magazine" : "mgz",
			"vnd.publishare-delta-tree" : "qps",
			"vnd.pvi.ptid1" : "ptid",
			"vnd.quark.quarkxpress" : [ "qxd", "qxt", "qwd", "qwt", "qxl", "qxb" ],
			"vnd.realvnc.bed" : "bed",
			"vnd.recordare.musicxml" : "mxl",
			"vnd.recordare.musicxml+xml" : "musicxml",
			"vnd.rig.cryptonote" : "cryptonote",
			"vnd.rn-realmedia" : "rm",
			"vnd.rn-realmedia-vbr" : "rmvb",
			"vnd.route66.link66+xml" : "link66",
			"vnd.sailingtracker.track" : "st",
			"vnd.seemail" : "see",
			"vnd.sema" : "sema",
			"vnd.semd" : "semd",
			"vnd.semf" : "semf",
			"vnd.shana.informed.formdata" : "ifm",
			"vnd.shana.informed.formtemplate" : "itp",
			"vnd.shana.informed.interchange" : "iif",
			"vnd.shana.informed.package" : "ipk",
			"vnd.simtech-mindmapper" : [ "twd", "twds" ],
			"vnd.smart.teacher" : "teacher",
			"vnd.solent.sdkm+xml" : [ "sdkm", "sdkd" ],
			"vnd.spotfire.dxp" : "dxp",
			"vnd.spotfire.sfs" : "sfs",
			"vnd.stepmania.package" : "smzip",
			"vnd.stepmania.stepchart" : "sm",
			"vnd.sus-calendar" : [ "sus", "susp" ],
			"vnd.svd" : "svd",
			"vnd.syncml+xml" : "xsm",
			"vnd.syncml.dm+wbxml" : "bdm",
			"vnd.syncml.dm+xml" : "xdm",
			"vnd.tao.intent-module-archive" : "tao",
			"vnd.tcpdump.pcap" : [ "pcap", "cap", "dmp" ],
			"vnd.tmobile-livetv" : "tmo",
			"vnd.trid.tpt" : "tpt",
			"vnd.triscape.mxs" : "mxs",
			"vnd.trueapp" : "tra",
			"vnd.ufdl" : [ "ufd", "ufdl" ],
			"vnd.uiq.theme" : "utz",
			"vnd.umajin" : "umj",
			"vnd.unity" : "unityweb",
			"vnd.uoml+xml" : "uoml",
			"vnd.vcx" : "vcx",
			"vnd.visionary" : "vis",
			"vnd.vsf" : "vsf",
			"vnd.webturbo" : "wtb",
			"vnd.wolfram.player" : "nbp",
			"vnd.wqd" : "wqd",
			"vnd.wt.stf" : "stf",
			"vnd.xara" : "xar",
			"vnd.xfdl" : "xfdl",
			"vnd.yamaha.hv-dic" : "hvd",
			"vnd.yamaha.hv-script" : "hvs",
			"vnd.yamaha.hv-voice" : "hvp",
			"vnd.yamaha.openscoreformat" : "osf",
			"vnd.yamaha.openscoreformat.osfpvg+xml" : "osfpvg",
			"vnd.yamaha.smaf-audio" : "saf",
			"vnd.yamaha.smaf-phrase" : "spf",
			"vnd.yellowriver-custom-menu" : "cmp",
			"vnd.zul" : [ "zir", "zirz" ],
			"vnd.zzazz.deck+xml" : "zaz",
			"voicexml+xml" : "vxml",
			"widget" : "wgt",
			"winhlp" : "hlp",
			"wsdl+xml" : "wsdl",
			"wspolicy+xml" : "wspolicy",
			"x-ace-compressed" : "ace",
			"x-authorware-bin" : [ "aab", "x32", "u32", "vox" ],
			"x-authorware-map" : "aam",
			"x-authorware-seg" : "aas",
			"x-blorb" : [ "blb", "blorb" ],
			"x-bzip" : "bz",
			"x-bzip2" : [ "bz2", "boz" ],
			"x-cfs-compressed" : "cfs",
			"x-chat" : "chat",
			"x-conference" : "nsc",
			"x-dgc-compressed" : "dgc",
			"x-dtbncx+xml" : "ncx",
			"x-dtbook+xml" : "dtb",
			"x-dtbresource+xml" : "res",
			"x-eva" : "eva",
			"x-font-bdf" : "bdf",
			"x-font-ghostscript" : "gsf",
			"x-font-linux-psf" : "psf",
			"x-font-otf" : "otf",
			"x-font-pcf" : "pcf",
			"x-font-snf" : "snf",
			"x-font-ttf" : [ "ttf", "ttc" ],
			"x-font-type1" : [ "pfa", "pfb", "pfm", "afm" ],
			"x-font-woff" : "woff",
			"x-freearc" : "arc",
			"x-gca-compressed" : "gca",
			"x-glulx" : "ulx",
			"x-gramps-xml" : "gramps",
			"x-install-instructions" : "install",
			"x-lzh-compressed" : [ "lzh", "lha" ],
			"x-mie" : "mie",
			"x-mobipocket-ebook" : [ "prc", "mobi" ],
			"x-ms-application" : "application",
			"x-ms-shortcut" : "lnk",
			"x-ms-xbap" : "xbap",
			"x-msbinder" : "obd",
			"x-mscardfile" : "crd",
			"x-msclip" : "clp",
			"x-msdownload" : [ "exe", "dll", "com", "bat", "msi" ],
			"x-msmediaview" : [ "mvb", "m13", "m14" ],
			"x-msmetafile" : [ "wmf", "wmz", "emf", "emz" ],
			"x-msmoney" : "mny",
			"x-mspublisher" : "pub",
			"x-msschedule" : "scd",
			"x-msterminal" : "trm",
			"x-mswrite" : "wri",
			"x-nzb" : "nzb",
			"x-pkcs12" : [ "p12", "pfx" ],
			"x-pkcs7-certificates" : [ "p7b", "spc" ],
			"x-research-info-systems" : "ris",
			"x-silverlight-app" : "xap",
			"x-sql" : "sql",
			"x-stuffitx" : "sitx",
			"x-subrip" : "srt",
			"x-t3vm-image" : "t3",
			"x-tads" : "gam",
			"x-tex" : "tex",
			"x-tex-tfm" : "tfm",
			"x-tgif" : "obj",
			"x-xliff+xml" : "xlf",
			"x-xz" : "xz",
			"x-zmachine" : [ "z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8" ],
			"xaml+xml" : "xaml",
			"xcap-diff+xml" : "xdf",
			"xenc+xml" : "xenc",
			"xml-dtd" : "dtd",
			"xop+xml" : "xop",
			"xproc+xml" : "xpl",
			"xslt+xml" : "xslt",
			"xv+xml" : [ "mxml", "xhvml", "xvml", "xvm" ],
			"yang" : "yang",
			"yin+xml" : "yin",
			"envoy" : "evy",
			"fractals" : "fif",
			"internet-property-stream" : "acx",
			"olescript" : "axs",
			"vnd.ms-outlook" : "msg",
			"vnd.ms-pkicertstore" : "sst",
			"x-compress" : "z",
			"x-compressed" : "tgz",
			"x-gzip" : "gz",
			"x-perfmon" : [ "pma", "pmc", "pml", "pmr", "pmw" ],
			"x-pkcs7-mime" : [ "p7c", "p7m" ],
			"ynd.ms-pkipko" : "pko"
		},
		"audio" : {
			"amr" : "amr",
			"amr-wb" : "awb",
			"annodex" : "axa",
			"basic" : [ "au", "snd" ],
			"flac" : "flac",
			"midi" : [ "mid", "midi", "kar", "rmi" ],
			"mpeg" : [ "mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a" ],
			"mpegurl" : "m3u",
			"ogg" : [ "oga", "ogg", "spx" ],
			"prs.sid" : "sid",
			"x-aiff" : [ "aif", "aiff", "aifc" ],
			"x-gsm" : "gsm",
			"x-ms-wma" : "wma",
			"x-ms-wax" : "wax",
			"x-pn-realaudio" : "ram",
			"x-realaudio" : "ra",
			"x-sd2" : "sd2",
			"x-wav" : "wav",
			"adpcm" : "adp",
			"mp4" : "mp4a",
			"s3m" : "s3m",
			"silk" : "sil",
			"vnd.dece.audio" : [ "uva", "uvva" ],
			"vnd.digital-winds" : "eol",
			"vnd.dra" : "dra",
			"vnd.dts" : "dts",
			"vnd.dts.hd" : "dtshd",
			"vnd.lucent.voice" : "lvp",
			"vnd.ms-playready.media.pya" : "pya",
			"vnd.nuera.ecelp4800" : "ecelp4800",
			"vnd.nuera.ecelp7470" : "ecelp7470",
			"vnd.nuera.ecelp9600" : "ecelp9600",
			"vnd.rip" : "rip",
			"webm" : "weba",
			"x-aac" : "aac",
			"x-caf" : "caf",
			"x-matroska" : "mka",
			"x-pn-realaudio-plugin" : "rmp",
			"xm" : "xm",
			"mid" : [ "mid", "rmi" ]
		},
		"chemical" : {
			"x-alchemy" : "alc",
			"x-cache" : [ "cac", "cache" ],
			"x-cache-csf" : "csf",
			"x-cactvs-binary" : [ "cbin", "cascii", "ctab" ],
			"x-cdx" : "cdx",
			"x-chem3d" : "c3d",
			"x-cif" : "cif",
			"x-cmdf" : "cmdf",
			"x-cml" : "cml",
			"x-compass" : "cpa",
			"x-crossfire" : "bsd",
			"x-csml" : [ "csml", "csm" ],
			"x-ctx" : "ctx",
			"x-cxf" : [ "cxf", "cef" ],
			"x-embl-dl-nucleotide" : [ "emb", "embl" ],
			"x-gamess-input" : [ "inp", "gam", "gamin" ],
			"x-gaussian-checkpoint" : [ "fch", "fchk" ],
			"x-gaussian-cube" : "cub",
			"x-gaussian-input" : [ "gau", "gjc", "gjf" ],
			"x-gaussian-log" : "gal",
			"x-gcg8-sequence" : "gcg",
			"x-genbank" : "gen",
			"x-hin" : "hin",
			"x-isostar" : [ "istr", "ist" ],
			"x-jcamp-dx" : [ "jdx", "dx" ],
			"x-kinemage" : "kin",
			"x-macmolecule" : "mcm",
			"x-macromodel-input" : [ "mmd", "mmod" ],
			"x-mdl-molfile" : "mol",
			"x-mdl-rdfile" : "rd",
			"x-mdl-rxnfile" : "rxn",
			"x-mdl-sdfile" : [ "sd", "sdf" ],
			"x-mdl-tgf" : "tgf",
			"x-mmcif" : "mcif",
			"x-mol2" : "mol2",
			"x-molconn-Z" : "b",
			"x-mopac-graph" : "gpt",
			"x-mopac-input" : [ "mop", "mopcrt", "mpc", "zmt" ],
			"x-mopac-out" : "moo",
			"x-ncbi-asn1" : "asn",
			"x-ncbi-asn1-ascii" : [ "prt", "ent" ],
			"x-ncbi-asn1-binary" : [ "val", "aso" ],
			"x-pdb" : [ "pdb", "ent" ],
			"x-rosdal" : "ros",
			"x-swissprot" : "sw",
			"x-vamas-iso14976" : "vms",
			"x-vmd" : "vmd",
			"x-xtel" : "xtel",
			"x-xyz" : "xyz"
		},
		"image" : {
			"gif" : "gif",
			"ief" : "ief",
			"jpeg" : [ "jpeg", "jpg", "jpe" ],
			"pcx" : "pcx",
			"png" : "png",
			"svg+xml" : [ "svg", "svgz" ],
			"tiff" : [ "tiff", "tif" ],
			"vnd.djvu" : [ "djvu", "djv" ],
			"vnd.wap.wbmp" : "wbmp",
			"x-canon-cr2" : "cr2",
			"x-canon-crw" : "crw",
			"x-cmu-raster" : "ras",
			"x-coreldraw" : "cdr",
			"x-coreldrawpattern" : "pat",
			"x-coreldrawtemplate" : "cdt",
			"x-corelphotopaint" : "cpt",
			"x-epson-erf" : "erf",
			"x-icon" : "ico",
			"x-jg" : "art",
			"x-jng" : "jng",
			"x-nikon-nef" : "nef",
			"x-olympus-orf" : "orf",
			"x-photoshop" : "psd",
			"x-portable-anymap" : "pnm",
			"x-portable-bitmap" : "pbm",
			"x-portable-graymap" : "pgm",
			"x-portable-pixmap" : "ppm",
			"x-rgb" : "rgb",
			"x-xbitmap" : "xbm",
			"x-xpixmap" : "xpm",
			"x-xwindowdump" : "xwd",
			"bmp" : "bmp",
			"cgm" : "cgm",
			"g3fax" : "g3",
			"ktx" : "ktx",
			"prs.btif" : "btif",
			"sgi" : "sgi",
			"vnd.dece.graphic" : [ "uvi", "uvvi", "uvg", "uvvg" ],
			"vnd.dwg" : "dwg",
			"vnd.dxf" : "dxf",
			"vnd.fastbidsheet" : "fbs",
			"vnd.fpx" : "fpx",
			"vnd.fst" : "fst",
			"vnd.fujixerox.edmics-mmr" : "mmr",
			"vnd.fujixerox.edmics-rlc" : "rlc",
			"vnd.ms-modi" : "mdi",
			"vnd.ms-photo" : "wdp",
			"vnd.net-fpx" : "npx",
			"vnd.xiff" : "xif",
			"webp" : "webp",
			"x-3ds" : "3ds",
			"x-cmx" : "cmx",
			"x-freehand" : [ "fh", "fhc", "fh4", "fh5", "fh7" ],
			"x-pict" : [ "pic", "pct" ],
			"x-tga" : "tga",
			"cis-cod" : "cod",
			"pipeg" : "jfif"
		},
		"message" : {
			"rfc822" : [ "eml", "mime", "mht", "mhtml", "nws" ]
		},
		"model" : {
			"iges" : [ "igs", "iges" ],
			"mesh" : [ "msh", "mesh", "silo" ],
			"vrml" : [ "wrl", "vrml" ],
			"x3d+vrml" : [ "x3dv", "x3dvz" ],
			"x3d+xml" : [ "x3d", "x3dz" ],
			"x3d+binary" : [ "x3db", "x3dbz" ],
			"vnd.collada+xml" : "dae",
			"vnd.dwf" : "dwf",
			"vnd.gdl" : "gdl",
			"vnd.gtw" : "gtw",
			"vnd.mts" : "mts",
			"vnd.vtu" : "vtu"
		},
		"text" : {
			"cache-manifest" : [ "manifest", "appcache" ],
			"calendar" : [ "ics", "icz", "ifb" ],
			"css" : "css",
			"csv" : "csv",
			"h323" : "323",
			"html" : [ "html", "htm", "shtml", "stm" ],
			"iuls" : "uls",
			"mathml" : "mml",
			"plain" : [ "txt", "text", "brf", "conf", "def", "list", "log", "in", "bas" ],
			"richtext" : "rtx",
			"scriptlet" : [ "sct", "wsc" ],
			"texmacs" : [ "tm", "ts" ],
			"tab-separated-values" : "tsv",
			"vnd.sun.j2me.app-descriptor" : "jad",
			"vnd.wap.wml" : "wml",
			"vnd.wap.wmlscript" : "wmls",
			"x-bibtex" : "bib",
			"x-boo" : "boo",
			"x-c++hdr" : [ "h++", "hpp", "hxx", "hh" ],
			"x-c++src" : [ "c++", "cpp", "cxx", "cc" ],
			"x-component" : "htc",
			"x-dsrc" : "d",
			"x-diff" : [ "diff", "patch" ],
			"x-haskell" : "hs",
			"x-java" : "java",
			"x-literate-haskell" : "lhs",
			"x-moc" : "moc",
			"x-pascal" : [ "p", "pas" ],
			"x-pcs-gcd" : "gcd",
			"x-perl" : [ "pl", "pm" ],
			"x-python" : "py",
			"x-scala" : "scala",
			"x-setext" : "etx",
			"x-tcl" : [ "tcl", "tk" ],
			"x-tex" : [ "tex", "ltx", "sty", "cls" ],
			"x-vcalendar" : "vcs",
			"x-vcard" : "vcf",
			"n3" : "n3",
			"prs.lines.tag" : "dsc",
			"sgml" : [ "sgml", "sgm" ],
			"troff" : [ "t", "tr", "roff", "man", "me", "ms" ],
			"turtle" : "ttl",
			"uri-list" : [ "uri", "uris", "urls" ],
			"vcard" : "vcard",
			"vnd.curl" : "curl",
			"vnd.curl.dcurl" : "dcurl",
			"vnd.curl.scurl" : "scurl",
			"vnd.curl.mcurl" : "mcurl",
			"vnd.dvb.subtitle" : "sub",
			"vnd.fly" : "fly",
			"vnd.fmi.flexstor" : "flx",
			"vnd.graphviz" : "gv",
			"vnd.in3d.3dml" : "3dml",
			"vnd.in3d.spot" : "spot",
			"x-asm" : [ "s", "asm" ],
			"x-c" : [ "c", "cc", "cxx", "cpp", "h", "hh", "dic" ],
			"x-fortran" : [ "f", "for", "f77", "f90" ],
			"x-opml" : "opml",
			"x-nfo" : "nfo",
			"x-sfv" : "sfv",
			"x-uuencode" : "uu",
			"webviewhtml" : "htt"
		},
		"video" : {
			"3gpp" : "3gp",
			"annodex" : "axv",
			"dl" : "dl",
			"dv" : [ "dif", "dv" ],
			"fli" : "fli",
			"gl" : "gl",
			"mpeg" : [ "mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2" ],
			"mp4" : [ "mp4", "mp4v", "mpg4" ],
			"quicktime" : [ "qt", "mov" ],
			"ogg" : "ogv",
			"vnd.mpegurl" : [ "mxu", "m4u" ],
			"x-flv" : "flv",
			"x-la-asf" : [ "lsf", "lsx" ],
			"x-mng" : "mng",
			"x-ms-asf" : [ "asf", "asx", "asr" ],
			"x-ms-wm" : "wm",
			"x-ms-wmv" : "wmv",
			"x-ms-wmx" : "wmx",
			"x-ms-wvx" : "wvx",
			"x-msvideo" : "avi",
			"x-sgi-movie" : "movie",
			"x-matroska" : [ "mpv", "mkv", "mk3d", "mks" ],
			"3gpp2" : "3g2",
			"h261" : "h261",
			"h263" : "h263",
			"h264" : "h264",
			"jpeg" : "jpgv",
			"jpm" : [ "jpm", "jpgm" ],
			"mj2" : [ "mj2", "mjp2" ],
			"vnd.dece.hd" : [ "uvh", "uvvh" ],
			"vnd.dece.mobile" : [ "uvm", "uvvm" ],
			"vnd.dece.pd" : [ "uvp", "uvvp" ],
			"vnd.dece.sd" : [ "uvs", "uvvs" ],
			"vnd.dece.video" : [ "uvv", "uvvv" ],
			"vnd.dvb.file" : "dvb",
			"vnd.fvt" : "fvt",
			"vnd.ms-playready.media.pyv" : "pyv",
			"vnd.uvvu.mp4" : [ "uvu", "uvvu" ],
			"vnd.vivo" : "viv",
			"webm" : "webm",
			"x-f4v" : "f4v",
			"x-m4v" : "m4v",
			"x-ms-vob" : "vob",
			"x-smv" : "smv"
		},
		"x-conference" : {
			"x-cooltalk" : "ice"
		},
		"x-world" : {
			"x-vrml" : [ "vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof" ]
		}
	};

	var mimeTypes = (function() {
		var type, subtype, val, index, mimeTypes = {};
		for (type in table) {
			if (table.hasOwnProperty(type)) {
				for (subtype in table[type]) {
					if (table[type].hasOwnProperty(subtype)) {
						val = table[type][subtype];
						if (typeof val == "string") {
							mimeTypes[val] = type + "/" + subtype;
						} else {
							for (index = 0; index < val.length; index++) {
								mimeTypes[val[index]] = type + "/" + subtype;
							}
						}
					}
				}
			}
		}
		return mimeTypes;
	})();

	zip.getMimeType = function(filename) {
		var defaultValue = "application/octet-stream";
		return filename && mimeTypes[filename.split(".").pop().toLowerCase()] || defaultValue;
	};

})();

//zip.workerScriptsPath = "http://gildas-lormeau.github.io/zip.js/demos/";

/**
 * @desc 压缩文件;
 * @event onprogress, onend, onerror;
 * */
var ZipArchive = function() {
    function noop() {};
    this.name = "未命名文件";
    this.zippedBlob = {};
    var _this = this;
    this.length = 0;
    this.onend = noop;
    this.onerror = noop;
    this.onprogress = noop;
    //创建一个延迟对象;
    var def = this.defer = new $.Deferred();
    zip.createWriter( new zip.BlobWriter("application/zip"), function(zipWriter) {
        _this.zipWriter = zipWriter;
        //继续执行队列;
        def.resolve();
    }, this.error.bind(_this) );
};

ZipArchive.blob = function (filename, content) {
    return new Blob([ content ], {
        type : zip.getMimeType(filename)
    });
};

$.extend( ZipArchive.prototype, {
    /**
     * @desc 添加文件， 实际上是串行执行压缩， 因为使用了jQ的延迟对象，
     * @param String filename为文件的名字;
     * @param String content;
     * @param Object options 传参
     *      例如：{ level  : 0} 压缩的等级，0 到 9, 0 为不压缩， 9为最大压缩；
     *      例如：{ comment : "提示文字" }
     *      例如：{ lastModDate : "最后编辑时间" }
     * */
    "addFile" : function ( filename , content, options) {
        var _this = this;
        blob = ZipArchive.blob(filename, content);
        //为了产生链式的效果， 必须把deferrer赋值给新的defer
        this.defer = this.defer.then(function() {
            //创建延迟对象
            var def = $.Deferred();
            _this.zipWriter.add(filename, new zip.BlobReader(blob)
                ,function() { // reader
                    //console.log("addFile success!!");
                    def.resolve();
                    //zipWriter.close(callback);
                }, function (size, total) { //onend
                    _this.onend(filename, blob, total);
                    _this.length += total;
                }, function () { //onprogress
                    _this.onprogress(filename, blob, total);
                },options || {
                    //options
                });
            //把延迟对象返回是为了实现串行执行进度的问题， 因为zip.js使用了webworker， 是异步的， 只能基于回调去执行;
            return def;
        });
    },

    /**
     * @desc 添加文件夹, 我发现这个文件无法创建;
     * @desc 创建文件夹功能不好用, 需要创建文件夹你通过 zipWriter.addFile("directory/filename.txt", blob())创建文件夹和对应文件;;
     * */
    "_addFolder" : function (foldername , options) {
        //创建文件夹功能目前不能用;
        //创建文件夹功能不好用, 直接通过 zipWriter.addFile("directory/filename.txt", blob())创建文件夹和文件
        return this;
    },

    "size" : function () {
        return this.length;
    },

    /**
     * @desc 获取blob文件
     * */
    "get" : function () {
        return this.zippedBlob;
    },

    /**
     * @desc 导出为zip文件
     * */
    "export" : function ( name ) {
        name = name || this.name;
        var _this = this;
        this.defer.then(function() {
            _this.zipWriter.close(function( zippedBlob ) {
                if( typeof name === "string" || typeof name === "number") {
                    var downloadButton = document.createElement("a"),
                        URL = window.webkitURL || window.mozURL || window.URL;
                    downloadButton.href = URL.createObjectURL( zippedBlob );
                    downloadButton.download = name + ".zip";
                    downloadButton.click();
                }else{
                    name( zippedBlob );
                };
            });
        });
    },

    "error" : function() {
        this.onerror( this );
        throw new Error("压缩文件创建失败");
    }
});

//zip.workerScriptsPath = "http://gildas-lormeau.github.io/zip.js/demos/";

/**
 * @desc 解压缩文件;
 * */
var UnZipArchive = function( blob ) {
    if( !blob ) {
        alert("参数不正确, 需要一个Blob类型的参数");
        return
    };
    if( !(blob instanceof Blob) ) {
        alert("参数不是Blob类型");
        return ;
    };

    function noop() {};
    this.entries = {};
    this.zipReader = {};
    var _this = this;
    this.length = 0;
    this.onend = noop;
    this.onerror = noop;
    this.onprogress = noop;
    //创建一个延迟对象;
    var def = this.defer = new $.Deferred();
    zip.createReader( new zip.BlobReader( blob ), function(zipReader) {
        _this.zipReader = zipReader;
        zipReader.getEntries(function(entries) {
            _this.entries = entries;
            //继续执行队列;
            def.resolve();
        });
    }, this.error.bind( _this ) );
};

/**
 * @desc 把blob文件转化为dataUrl;
 * */
UnZipArchive.readBlobAsDataURL = function (blob, callback) {
    var f = new FileReader();
    f.onload = function(e) {callback( e.target.result );};
    f.readAsDataURL(blob);
};

$.extend( UnZipArchive.prototype, {
    /**
     * @desc 获取压缩文件的所有入口;
     * @return ArrayList;
     * */
    "getEntries" : function() {
        var result = [];
        for(var i= 0, len = this.entries.length ; i<len;  i++ ) {
            result.push( this.entries[i].filename );
        }
        return result;
    },

    /**
     * @desc 获取文件Entry;
     * @return Entry
     * */
    "getEntry" : function ( filename ) {
        var entrie;
        for(var i= 0, len = this.entries.length ; i<len;  i++ ) {
            if( this.entries[i].filename === filename) {
                return this.entries[i];
            };
        }
    },

    /**
     * @desc 下载文件
     * @param filename;
     * @return void;
     * */
    "download" : function ( filename , cb , runoninit) {
        var _this = this;
        this.defer = this.defer.then(function() {
            var def = $.Deferred();
            if(!filename) return ;
            if(runoninit) {
                return runoninit();
            };
            var entry = _this.getEntry( filename );
            if(!entry)return;
            entry.getData(new zip.BlobWriter(zip.getMimeType(entry.filename)), function(data) {
                if( !cb ) {
                    UnZipArchive.readBlobAsDataURL(data, function( dataUrl ) {
                        var downloadButton = document.createElement("a"),
                            URL = window.webkitURL || window.mozURL || window.URL;
                        downloadButton.href = dataUrl;
                        downloadButton.download = filename;
                        downloadButton.click();
                        def.resolve( dataUrl );
                        _this.onend();
                    });
                }else{
                    cb( data );
                    def.resolve( data );
                }
            });
            return def;
        });
    },

    /**
     * @desc 获取对应的blob数据;
     * @param filename 文件名;
     * @param callback回调, 参数为 blob;
     * @desc 或者可以直接传一个函数作为zip解压缩完毕的回调;
     * */
    "getData" : function ( filename, fn ) {
        if( typeof filename === "string") {
            this.download(filename, function( blob ) {
                fn&&fn( blob );
            });
        }else if( typeof filename === "function") {
            this.download("test", null, function( blob ) {
                filename();
            });
        };
    },

    "error" : function() {
        this.onerror( this );
        throw new Error("压缩文件解压失败");
    }
});
