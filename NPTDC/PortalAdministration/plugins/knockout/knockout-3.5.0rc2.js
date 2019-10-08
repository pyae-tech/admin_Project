﻿/*!
 * Knockout JavaScript library v3.5.0-rc2
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function () {
    (function (n) {
        var B = this || (0, eval)("this"), x = B.document, R = B.navigator, v = B.jQuery, I = B.JSON; v || "undefined" === typeof jQuery || (v = jQuery); (function (n) { "function" === typeof define && define.amd ? define(["exports", "require"], n) : "object" === typeof exports && "object" === typeof module ? n(module.exports || exports) : n(B.ko = {}) })(function (S, T) {
            function L(a, c) { return null === a || typeof a in X ? a === c : !1 } function Y(b, c) { var d; return function () { d || (d = a.a.setTimeout(function () { d = n; b() }, c)) } } function Z(b, c) {
                var d; return function () {
                    clearTimeout(d);
                    d = a.a.setTimeout(b, c)
                }
            } function aa(a, c) { c && "change" !== c ? "beforeChange" === c ? this.jc(a) : this.$a(a, c) : this.kc(a) } function ba(a, c) { null !== c && c.o && c.o() } function ca(a, c) { var d = this.od, e = d[t]; e.pa || (this.Kb && this.ib[c] ? (d.pc(c, a, this.ib[c]), this.ib[c] = null, --this.Kb) : e.F[c] || d.pc(c, a, e.G ? { ha: a } : d.Wc(a)), a.Ja && a.ed()) } var a = "undefined" !== typeof S ? S : {}; a.b = function (b, c) { for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++)e = e[d[f]]; e[d[d.length - 1]] = c }; a.J = function (a, c, d) { a[c] = d }; a.version = "3.5.0-rc2"; a.b("version",
                a.version); a.options = { deferUpdates: !1, useOnlyNativeEvents: !1, foreachHidesDestroyed: !1 }; a.a = function () {
                    function b(a, b) { for (var c in a) f.call(a, c) && b(c, a[c]) } function c(a, b) { if (b) for (var c in b) f.call(b, c) && (a[c] = b[c]); return a } function d(a, b) { a.__proto__ = b; return a } function e(b, c, d, e) { var k = b[c].match(p) || []; a.a.B(d.match(p), function (b) { a.a.Na(k, b, e) }); b[c] = k.join(" ") } var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m = {}, l = {}; m[R && /Firefox\/2/i.test(R.userAgent) ?
                        "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"]; m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" "); b(m, function (a, b) { if (b.length) for (var c = 0, d = b.length; c < d; c++)l[b[c]] = a }); var k = { propertychange: !0 }, q = x && function () { for (var a = 3, b = x.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];); return 4 < a ? a : n }(), p = /\S+/g, r; return {
                            Fc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            B: function (a, b, c) { for (var d = 0, e = a.length; d < e; d++)b.call(c, a[d], d, a) }, C: "function" == typeof Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b) } : function (a, b) { for (var c = 0, d = a.length; c < d; c++)if (a[c] === b) return c; return -1 }, rc: function (a, b, c) { for (var d = 0, e = a.length; d < e; d++)if (b.call(c, a[d], d, a)) return a[d]; return n }, fb: function (b, c) { var d = a.a.C(b, c); 0 < d ? b.splice(d, 1) : 0 === d && b.shift() }, sc: function (b) { var c = []; b && a.a.B(b, function (b) { 0 > a.a.C(c, b) && c.push(b) }); return c }, Hb: function (a,
                                b, c) { var d = []; if (a) for (var e = 0, k = a.length; e < k; e++)d.push(b.call(c, a[e], e)); return d }, cb: function (a, b, c) { var d = []; if (a) for (var e = 0, k = a.length; e < k; e++)b.call(c, a[e], e) && d.push(a[e]); return d }, eb: function (a, b) { if (b instanceof Array) a.push.apply(a, b); else for (var c = 0, d = b.length; c < d; c++)a.push(b[c]); return a }, Na: function (b, c, d) { var e = a.a.C(a.a.Vb(b), c); 0 > e ? d && b.push(c) : d || b.splice(e, 1) }, Aa: g, extend: c, setPrototypeOf: d, xb: g ? d : c, O: b, Ga: function (a, b, c) {
                                    if (!a) return a; var d = {}, e; for (e in a) f.call(a, e) && (d[e] =
                                        b.call(c, a[e], e, a)); return d
                                }, Nb: function (b) { for (; b.firstChild;)a.removeNode(b.firstChild) }, Sb: function (b) { b = a.a.la(b); for (var c = (b[0] && b[0].ownerDocument || x).createElement("div"), d = 0, e = b.length; d < e; d++)c.appendChild(a.na(b[d])); return c }, Ba: function (b, c) { for (var d = 0, e = b.length, k = []; d < e; d++) { var f = b[d].cloneNode(!0); k.push(c ? a.na(f) : f) } return k }, ta: function (b, c) { a.a.Nb(b); if (c) for (var d = 0, e = c.length; d < e; d++)b.appendChild(c[d]) }, Tc: function (b, c) {
                                    var d = b.nodeType ? [b] : b; if (0 < d.length) {
                                        for (var e = d[0],
                                            k = e.parentNode, f = 0, l = c.length; f < l; f++)k.insertBefore(c[f], e); f = 0; for (l = d.length; f < l; f++)a.removeNode(d[f])
                                    }
                                }, Ua: function (a, b) { if (a.length) { for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;)a.splice(0, 1); for (; 1 < a.length && a[a.length - 1].parentNode !== b;)a.length--; if (1 < a.length) { var c = a[0], d = a[a.length - 1]; for (a.length = 0; c !== d;)a.push(c), c = c.nextSibling; a.push(d) } } return a }, Vc: function (a, b) { 7 > q ? a.setAttribute("selected", b) : a.selected = b }, zb: function (a) {
                                    return null === a || a === n ? "" : a.trim ?
                                        a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                                }, Sd: function (a, b) { a = a || ""; return b.length > a.length ? !1 : a.substring(0, b.length) === b }, sd: function (a, b) { if (a === b) return !0; if (11 === a.nodeType) return !1; if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a); if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16); for (; a && a != b;)a = a.parentNode; return !!a }, Mb: function (b) { return a.a.sd(b, b.ownerDocument.documentElement) }, hd: function (b) { return !!a.a.rc(b, a.a.Mb) }, P: function (a) {
                                    return a &&
                                        a.tagName && a.tagName.toLowerCase()
                                }, wc: function (b) { return a.onError ? function () { try { return b.apply(this, arguments) } catch (c) { throw a.onError && a.onError(c), c; } } : b }, setTimeout: function (b, c) { return setTimeout(a.a.wc(b), c) }, Cc: function (b) { setTimeout(function () { a.onError && a.onError(b); throw b; }, 0) }, H: function (b, c, d) {
                                    var e = a.a.wc(d); d = k[c]; if (a.options.useOnlyNativeEvents || d || !v) if (d || "function" != typeof b.addEventListener) if ("undefined" != typeof b.attachEvent) {
                                        var f = function (a) { e.call(b, a) }, l = "on" + c; b.attachEvent(l,
                                            f); a.a.I.ya(b, function () { b.detachEvent(l, f) })
                                    } else throw Error("Browser doesn't support addEventListener or attachEvent"); else b.addEventListener(c, e, !1); else r || (r = "function" == typeof v(b).on ? "on" : "bind"), v(b)[r](c, e)
                                }, Cb: function (b, c) {
                                    if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent"); var d; "input" === a.a.P(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1; if (a.options.useOnlyNativeEvents || !v || d) if ("function" == typeof x.createEvent) if ("function" ==
                                        typeof b.dispatchEvent) d = x.createEvent(l[c] || "HTMLEvents"), d.initEvent(c, !0, !0, B, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d); else throw Error("The supplied element doesn't support dispatchEvent"); else if (d && b.click) b.click(); else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c); else throw Error("Browser doesn't support triggering events"); else v(b).trigger(c)
                                }, c: function (b) { return a.N(b) ? b() : b }, Vb: function (b) { return a.N(b) ? b.w() : b }, Bb: function (b, c, d) {
                                    var k; c && ("object" === typeof b.classList ?
                                        (k = b.classList[d ? "add" : "remove"], a.a.B(c.match(p), function (a) { k.call(b.classList, a) })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d))
                                }, yb: function (b, c) { var d = a.a.c(c); if (null === d || d === n) d = ""; var e = a.h.firstChild(b); !e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.ta(b, [b.ownerDocument.createTextNode(d)]) : e.data = d; a.a.yd(b) }, Uc: function (a, b) {
                                a.name = b; if (7 >= q) try {
                                    var c = a.name.replace(/[&<>'"]/g, function (a) { return "&#" + a.charCodeAt(0) + ";" }); a.mergeAttributes(x.createElement("<input name='" +
                                        c + "'/>"), !1)
                                } catch (d) { }
                                }, yd: function (a) { 9 <= q && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom)) }, ud: function (a) { if (q) { var b = a.style.width; a.style.width = 0; a.style.width = b } }, Nd: function (b, c) { b = a.a.c(b); c = a.a.c(c); for (var d = [], e = b; e <= c; e++)d.push(e); return d }, la: function (a) { for (var b = [], c = 0, d = a.length; c < d; c++)b.push(a[c]); return b }, Ra: function (a) { return h ? Symbol(a) : a }, Wd: 6 === q, Xd: 7 === q, U: q, Hc: function (b, c) {
                                    for (var d = a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
                                        e = "string" == typeof c ? function (a) { return a.name === c } : function (a) { return c.test(a.name) }, k = [], f = d.length - 1; 0 <= f; f--)e(d[f]) && k.push(d[f]); return k
                                }, Ld: function (b) { return "string" == typeof b && (b = a.a.zb(b)) ? I && I.parse ? I.parse(b) : (new Function("return " + b))() : null }, bc: function (b, c, d) {
                                    if (!I || !I.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                    return I.stringify(a.a.c(b), c, d)
                                }, Md: function (c, d, e) {
                                    e = e || {}; var k = e.params || {}, f = e.includeFields || this.Fc, l = c; if ("object" == typeof c && "form" === a.a.P(c)) for (var l = c.action, h = f.length - 1; 0 <= h; h--)for (var g = a.a.Hc(c, f[h]), m = g.length - 1; 0 <= m; m--)k[g[m].name] = g[m].value; d = a.a.c(d); var q = x.createElement("form"); q.style.display = "none"; q.action = l; q.method = "post"; for (var p in d) c = x.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.bc(a.a.c(d[p])), q.appendChild(c); b(k, function (a, b) {
                                        var c = x.createElement("input");
                                        c.type = "hidden"; c.name = a; c.value = b; q.appendChild(c)
                                    }); x.body.appendChild(q); e.submitter ? e.submitter(q) : q.submit(); setTimeout(function () { q.parentNode.removeChild(q) }, 0)
                                }
                        }
                }(); a.b("utils", a.a); a.b("utils.arrayForEach", a.a.B); a.b("utils.arrayFirst", a.a.rc); a.b("utils.arrayFilter", a.a.cb); a.b("utils.arrayGetDistinctValues", a.a.sc); a.b("utils.arrayIndexOf", a.a.C); a.b("utils.arrayMap", a.a.Hb); a.b("utils.arrayPushAll", a.a.eb); a.b("utils.arrayRemoveItem", a.a.fb); a.b("utils.cloneNodes", a.a.Ba); a.b("utils.createSymbolOrString",
                    a.a.Ra); a.b("utils.extend", a.a.extend); a.b("utils.fieldsIncludedWithJsonPost", a.a.Fc); a.b("utils.getFormFields", a.a.Hc); a.b("utils.objectMap", a.a.Ga); a.b("utils.peekObservable", a.a.Vb); a.b("utils.postJson", a.a.Md); a.b("utils.parseJson", a.a.Ld); a.b("utils.registerEventHandler", a.a.H); a.b("utils.stringifyJson", a.a.bc); a.b("utils.range", a.a.Nd); a.b("utils.toggleDomNodeCssClass", a.a.Bb); a.b("utils.triggerEvent", a.a.Cb); a.b("utils.unwrapObservable", a.a.c); a.b("utils.objectForEach", a.a.O); a.b("utils.addOrRemoveItem",
                        a.a.Na); a.b("utils.setTextContent", a.a.yb); a.b("unwrap", a.a.c); Function.prototype.bind || (Function.prototype.bind = function (a) { var c = this; if (1 === arguments.length) return function () { return c.apply(a, arguments) }; var d = Array.prototype.slice.call(arguments, 1); return function () { var e = d.slice(0); e.push.apply(e, arguments); return c.apply(a, e) } }); a.a.g = new function () {
                            var b = 0, c = "__ko__" + (new Date).getTime(), d = {}, e, f; a.a.U ? (e = function (a, e) {
                                var f = a[c]; if (!f || "null" === f || !d[f]) {
                                    if (!e) return n; f = a[c] = "ko" + b++; d[f] =
                                        {}
                                } return d[f]
                            }, f = function (a) { var b = a[c]; return b ? (delete d[b], a[c] = null, !0) : !1 }) : (e = function (a, b) { var d = a[c]; !d && b && (d = a[c] = {}); return d }, f = function (a) { return a[c] ? (delete a[c], !0) : !1 }); return { get: function (a, b) { var c = e(a, !1); return c && c[b] }, set: function (a, b, c) { (a = e(a, c !== n)) && (a[b] = c) }, Ob: function (a, b, c) { a = e(a, !0); return a[b] || (a[b] = c) }, clear: f, W: function () { return b++ + c } }
                        }; a.b("utils.domData", a.a.g); a.b("utils.domData.clear", a.a.g.clear); a.a.I = new function () {
                            function b(b, c) {
                                var d = a.a.g.get(b, e);
                                d === n && c && (d = [], a.a.g.set(b, e, d)); return d
                            } function c(c) { var e = b(c, !1); if (e) for (var e = e.slice(0), f = 0; f < e.length; f++)e[f](c); a.a.g.clear(c); a.a.I.cleanExternalData(c); g[c.nodeType] && d(c.childNodes, !0) } function d(b, d) { for (var e = [], k, f = 0; f < b.length; f++)if (!d || 8 === b[f].nodeType) if (c(e[e.length] = k = b[f]), b[f] !== k) for (; f-- && -1 == a.a.C(e, b[f]);); } var e = a.a.g.W(), f = { 1: !0, 8: !0, 9: !0 }, g = { 1: !0, 9: !0 }; return {
                                ya: function (a, c) { if ("function" != typeof c) throw Error("Callback must be a function"); b(a, !0).push(c) }, vb: function (c,
                                    d) { var f = b(c, !1); f && (a.a.fb(f, d), 0 == f.length && a.a.g.set(c, e, n)) }, na: function (a) { f[a.nodeType] && (c(a), g[a.nodeType] && d(a.getElementsByTagName("*"))); return a }, removeNode: function (b) { a.na(b); b.parentNode && b.parentNode.removeChild(b) }, cleanExternalData: function (a) { v && "function" == typeof v.cleanData && v.cleanData([a]) }
                            }
                        }; a.na = a.a.I.na; a.removeNode = a.a.I.removeNode; a.b("cleanNode", a.na); a.b("removeNode", a.removeNode); a.b("utils.domNodeDisposal", a.a.I); a.b("utils.domNodeDisposal.addDisposeCallback", a.a.I.ya);
            a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.I.vb); (function () {
                var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.U; a.a.sa = function (c, d) {
                    var e; if (v) if (v.parseHTML) e = v.parseHTML(c, d) || []; else {
                        if ((e = v.clean([c], d)) && e[0]) {
                            for (var k = e[0]; k.parentNode && 11 !== k.parentNode.nodeType;)k = k.parentNode;
                            k.parentNode && k.parentNode.removeChild(k)
                        }
                    } else { (e = d) || (e = x); var k = e.parentWindow || e.defaultView || B, q = a.a.zb(c).toLowerCase(), p = e.createElement("div"), r; r = (q = q.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[q[1]] || b; q = r[0]; r = "ignored<div>" + r[1] + c + r[2] + "</div>"; "function" == typeof k.innerShiv ? p.appendChild(k.innerShiv(r)) : (g && e.body.appendChild(p), p.innerHTML = r, g && p.parentNode.removeChild(p)); for (; q--;)p = p.lastChild; e = a.a.la(p.lastChild.childNodes) } return e
                }; a.a.Kd = function (b, c) {
                    var d = a.a.sa(b,
                        c); return d.length && d[0].parentElement || a.a.Sb(d)
                }; a.a.Zb = function (b, c) { a.a.Nb(b); c = a.a.c(c); if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), v) v(b).html(c); else for (var d = a.a.sa(c, b.ownerDocument), e = 0; e < d.length; e++)b.appendChild(d[e]) }
            })(); a.b("utils.parseHtmlFragment", a.a.sa); a.b("utils.setHtml", a.a.Zb); a.Z = function () {
                function b(c, e) {
                    if (c) if (8 == c.nodeType) { var f = a.Z.Qc(c.nodeValue); null != f && e.push({ rd: c, Id: f }) } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++)b(g[f],
                        e)
                } var c = {}; return {
                    Rb: function (a) { if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()"); var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1); c[b] = a; return "\x3c!--[ko_memo:" + b + "]--\x3e" }, Yc: function (a, b) { var f = c[a]; if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized."); try { return f.apply(null, b || []), !0 } finally { delete c[a] } }, Zc: function (c, e) {
                        var f =
                            []; b(c, f); for (var g = 0, h = f.length; g < h; g++) { var m = f[g].rd, l = [m]; e && a.a.eb(l, e); a.Z.Yc(f[g].Id, l); m.nodeValue = ""; m.parentNode && m.parentNode.removeChild(m) }
                    }, Qc: function (a) { return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null }
                }
            }(); a.b("memoization", a.Z); a.b("memoization.memoize", a.Z.Rb); a.b("memoization.unmemoize", a.Z.Yc); a.b("memoization.parseMemoText", a.Z.Qc); a.b("memoization.unmemoizeDomNodeAndDescendants", a.Z.Zc); a.ma = function () {
                function b() {
                    if (f) for (var b = f, c = 0, d; h < f;)if (d = e[h++]) {
                        if (h > b) {
                            if (5E3 <=
                                ++c) { h = f; a.a.Cc(Error("'Too much recursion' after processing " + c + " task groups.")); break } b = f
                        } try { d() } catch (q) { a.a.Cc(q) }
                    }
                } function c() { b(); h = f = e.length = 0 } var d, e = [], f = 0, g = 1, h = 0; B.MutationObserver ? d = function (a) { var b = x.createElement("div"); (new MutationObserver(a)).observe(b, { attributes: !0 }); return function () { b.classList.toggle("foo") } }(c) : d = x && "onreadystatechange" in x.createElement("script") ? function (a) {
                    var b = x.createElement("script"); b.onreadystatechange = function () {
                    b.onreadystatechange = null; x.documentElement.removeChild(b);
                        b = null; a()
                    }; x.documentElement.appendChild(b)
                } : function (a) { setTimeout(a, 0) }; return { scheduler: d, wb: function (b) { f || a.ma.scheduler(c); e[f++] = b; return g++ }, cancel: function (a) { a = a - (g - f); a >= h && a < f && (e[a] = null) }, resetForTesting: function () { var a = f - h; h = f = e.length = 0; return a }, Qd: b }
            }(); a.b("tasks", a.ma); a.b("tasks.schedule", a.ma.wb); a.b("tasks.runEarly", a.ma.Qd); a.Ta = {
                throttle: function (b, c) {
                b.throttleEvaluation = c; var d = null; return a.Y({
                    read: b, write: function (e) {
                        clearTimeout(d); d = a.a.setTimeout(function () { b(e) },
                            c)
                    }
                })
                }, rateLimit: function (a, c) { var d, e, f; "number" == typeof c ? d = c : (d = c.timeout, e = c.method); a.Eb = !1; f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Z : Y; a.rb(function (a) { return f(a, d, c) }) }, deferred: function (b, c) {
                    if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled."); b.Eb || (b.Eb = !0, b.rb(function (c) {
                        var e, f = !1; return function () {
                            if (!f) {
                                a.ma.cancel(e); e = a.ma.wb(c); try { f = !0, b.notifySubscribers(n, "dirty") } finally {
                                    f =
                                    !1
                                }
                            }
                        }
                    }))
                }, notify: function (a, c) { a.equalityComparer = "always" == c ? null : L }
            }; var X = { undefined: 1, "boolean": 1, number: 1, string: 1 }; a.b("extenders", a.Ta); a.cc = function (b, c, d) { this.ha = b; this.ad = c; this.cd = d; this.ic = !1; this.Fb = this.lc = null; a.J(this, "dispose", this.o); a.J(this, "disposeWhenNodeIsRemoved", this.l) }; a.cc.prototype.o = function () { this.Fb && a.a.I.vb(this.lc, this.Fb); this.ic = !0; this.cd() }; a.cc.prototype.l = function (b) { this.lc = b; a.a.I.ya(b, this.Fb = this.o.bind(this)) }; a.R = function () { a.a.xb(this, E); E.mb(this) };
            var E = {
                mb: function (a) { a.S = { change: [] }; a.nc = 1 }, subscribe: function (b, c, d) { var e = this; d = d || "change"; var f = new a.cc(e, c ? b.bind(c) : b, function () { a.a.fb(e.S[d], f); e.ab && e.ab(d) }); e.Pa && e.Pa(d); e.S[d] || (e.S[d] = []); e.S[d].push(f); return f }, notifySubscribers: function (b, c) { c = c || "change"; "change" === c && this.Db(); if (this.Va(c)) { var d = "change" === c && this.bd || this.S[c].slice(0); try { a.u.tc(); for (var e = 0, f; f = d[e]; ++e)f.ic || f.ad(b) } finally { a.u.end() } } }, lb: function () { return this.nc }, Bd: function (a) {
                    return this.lb() !==
                        a
                }, Db: function () { ++this.nc }, rb: function (b) { var c = this, d = a.N(c), e, f, g, h, m; c.$a || (c.$a = c.notifySubscribers, c.notifySubscribers = aa); var l = b(function () { c.Ja = !1; d && h === c && (h = c.gc ? c.gc() : c()); var a = f || m && c.ob(g, h); m = f = e = !1; a && c.$a(g = h) }); c.kc = function (a, b) { b && c.Ja || (m = !b); c.bd = c.S.change.slice(0); c.Ja = e = !0; h = a; l() }; c.jc = function (a) { e || (g = a, c.$a(a, "beforeChange")) }; c.mc = function () { m = !0 }; c.ed = function () { c.ob(g, c.w(!0)) && (f = !0) } }, Va: function (a) { return this.S[a] && this.S[a].length }, zd: function (b) {
                    if (b) return this.S[b] &&
                        this.S[b].length || 0; var c = 0; a.a.O(this.S, function (a, b) { "dirty" !== a && (c += b.length) }); return c
                }, ob: function (a, c) { return !this.equalityComparer || !this.equalityComparer(a, c) }, toString: function () { return "[object Object]" }, extend: function (b) { var c = this; b && a.a.O(b, function (b, e) { var f = a.Ta[b]; "function" == typeof f && (c = f(c, e) || c) }); return c }
            }; a.J(E, "init", E.mb); a.J(E, "subscribe", E.subscribe); a.J(E, "extend", E.extend); a.J(E, "getSubscriptionsCount", E.zd); a.a.Aa && a.a.setPrototypeOf(E, Function.prototype); a.R.fn = E;
            a.Mc = function (a) { return null != a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers }; a.b("subscribable", a.R); a.b("isSubscribable", a.Mc); a.ja = a.u = function () {
                function b(a) { d.push(e); e = a } function c() { e = d.pop() } var d = [], e, f = 0; return {
                    tc: b, end: c, Wb: function (b) { if (e) { if (!a.Mc(b)) throw Error("Only subscribable things can act as dependencies"); e.md.call(e.nd, b, b.dd || (b.dd = ++f)) } }, K: function (a, d, e) { try { return b(), a.apply(d, e || []) } finally { c() } }, Ea: function () { if (e) return e.v.Ea() }, kb: function () { if (e) return e.v.kb() },
                    pb: function () { if (e) return e.pb }
                }
            }(); a.b("computedContext", a.ja); a.b("computedContext.getDependenciesCount", a.ja.Ea); a.b("computedContext.getDependencies", a.ja.kb); a.b("computedContext.isInitial", a.ja.pb); a.b("computedContext.registerDependency", a.ja.Wb); a.b("ignoreDependencies", a.Vd = a.u.K); var G = a.a.Ra("_latestValue"); a.ra = function (b) {
                function c() { if (0 < arguments.length) return c.ob(c[G], arguments[0]) && (c.wa(), c[G] = arguments[0], c.va()), this; a.u.Wb(c); return c[G] } c[G] = b; a.a.Aa || a.a.extend(c, a.R.fn);
                a.R.fn.mb(c); a.a.xb(c, F); a.options.deferUpdates && a.Ta.deferred(c, !0); return c
            }; var F = { equalityComparer: L, w: function () { return this[G] }, va: function () { this.notifySubscribers(this[G], "spectate"); this.notifySubscribers(this[G]) }, wa: function () { this.notifySubscribers(this[G], "beforeChange") } }; a.a.Aa && a.a.setPrototypeOf(F, a.R.fn); var H = a.ra.Ma = "__ko_proto__"; F[H] = a.ra; a.N = function (b) {
                if ((b = "function" == typeof b && b[H]) && b !== F[H] && b !== a.v.fn[H]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
                return !!b
            }; a.Xa = function (b) { return "function" == typeof b && (b[H] === F[H] || b[H] === a.v.fn[H] && b.Jc) }; a.b("observable", a.ra); a.b("isObservable", a.N); a.b("isWriteableObservable", a.Xa); a.b("isWritableObservable", a.Xa); a.b("observable.fn", F); a.J(F, "peek", F.w); a.J(F, "valueHasMutated", F.va); a.J(F, "valueWillMutate", F.wa); a.Ha = function (b) {
                b = b || []; if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined."); b = a.ra(b); a.a.xb(b,
                    a.Ha.fn); return b.extend({ trackArrayChanges: !0 })
            }; a.Ha.fn = {
                remove: function (b) { for (var c = this.w(), d = [], e = "function" != typeof b || a.N(b) ? function (a) { return a === b } : b, f = 0; f < c.length; f++) { var g = c[f]; if (e(g)) { 0 === d.length && this.wa(); if (c[f] !== g) throw Error("Array modified during remove; cannot remove item"); d.push(g); c.splice(f, 1); f-- } } d.length && this.va(); return d }, removeAll: function (b) {
                    if (b === n) { var c = this.w(), d = c.slice(0); this.wa(); c.splice(0, c.length); this.va(); return d } return b ? this.remove(function (c) {
                        return 0 <=
                            a.a.C(b, c)
                    }) : []
                }, destroy: function (b) { var c = this.w(), d = "function" != typeof b || a.N(b) ? function (a) { return a === b } : b; this.wa(); for (var e = c.length - 1; 0 <= e; e--) { var f = c[e]; d(f) && (f._destroy = !0) } this.va() }, destroyAll: function (b) { return b === n ? this.destroy(function () { return !0 }) : b ? this.destroy(function (c) { return 0 <= a.a.C(b, c) }) : [] }, indexOf: function (b) { var c = this(); return a.a.C(c, b) }, replace: function (a, c) { var d = this.indexOf(a); 0 <= d && (this.wa(), this.w()[d] = c, this.va()) }, sorted: function (a) {
                    var c = this().slice(0);
                    return a ? c.sort(a) : c.sort()
                }, reversed: function () { return this().slice(0).reverse() }
            }; a.a.Aa && a.a.setPrototypeOf(a.Ha.fn, a.ra.fn); a.a.B("pop push reverse shift sort splice unshift".split(" "), function (b) { a.Ha.fn[b] = function () { var a = this.w(); this.wa(); this.vc(a, b, arguments); var d = a[b].apply(a, arguments); this.va(); return d === a ? this : d } }); a.a.B(["slice"], function (b) { a.Ha.fn[b] = function () { var a = this(); return a[b].apply(a, arguments) } }); a.Lc = function (b) {
                return a.N(b) && "function" == typeof b.remove && "function" ==
                    typeof b.push
            }; a.b("observableArray", a.Ha); a.b("isObservableArray", a.Lc); a.Ta.trackArrayChanges = function (b, c) {
                function d() { if (!e) { e = !0; m = b.notifySubscribers; b.notifySubscribers = function (a, b) { b && "change" !== b || ++h; return m.apply(this, arguments) }; var c = [].concat(b.w() || []); f = null; g = b.subscribe(function (d) { d = [].concat(d || []); if (b.Va("arrayChange")) { var e; if (!f || 1 < h) f = a.a.Jb(c, d, b.Ib); e = f } c = d; f = null; h = 0; e && e.length && b.notifySubscribers(e, "arrayChange") }) } } b.Ib = {}; c && "object" == typeof c && a.a.extend(b.Ib,
                    c); b.Ib.sparse = !0; if (!b.vc) {
                        var e = !1, f = null, g, h = 0, m, l = b.Pa, k = b.ab; b.Pa = function (a) { l && l.call(b, a); "arrayChange" === a && d() }; b.ab = function (a) { k && k.call(b, a); "arrayChange" !== a || b.Va("arrayChange") || (m && (b.notifySubscribers = m, m = n), g && g.o(), g = null, e = !1) }; b.vc = function (b, c, d) {
                            function k(a, b, c) { return l[l.length] = { status: a, value: b, index: c } } if (e && !h) {
                                var l = [], g = b.length, m = d.length, A = 0; switch (c) {
                                    case "push": A = g; case "unshift": for (c = 0; c < m; c++)k("added", d[c], A + c); break; case "pop": A = g - 1; case "shift": g && k("deleted",
                                        b[A], A); break; case "splice": c = Math.min(Math.max(0, 0 > d[0] ? g + d[0] : d[0]), g); for (var g = 1 === m ? g : Math.min(c + (d[1] || 0), g), m = c + m - 2, A = Math.max(g, m), U = [], V = [], n = 2; c < A; ++c, ++n)c < g && V.push(k("deleted", b[c], c)), c < m && U.push(k("added", d[n], c)); a.a.Gc(V, U); break; default: return
                                }f = l
                            }
                        }
                    }
            }; var t = a.a.Ra("_state"); a.v = a.Y = function (b, c, d) {
                function e() {
                    if (0 < arguments.length) {
                        if ("function" === typeof f) f.apply(g.jb, arguments); else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                        return this
                    } g.pa || a.u.Wb(e); (g.ka || g.G && e.Wa()) && e.ea(); return g.V
                } "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b)); if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed"); var f = d.write, g = { V: n, qa: !0, ka: !0, nb: !1, dc: !1, pa: !1, tb: !1, G: !1, Sc: d.read, jb: c || d.owner, l: d.disposeWhenNodeIsRemoved || d.l || null, Sa: d.disposeWhen || d.Sa, Lb: null, F: {}, X: 0, Ec: null }; e[t] = g; e.Jc = "function" === typeof f; a.a.Aa || a.a.extend(e, a.R.fn); a.R.fn.mb(e); a.a.xb(e, C); d.pure ? (g.tb = !0, g.G = !0,
                    a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea); a.options.deferUpdates && a.Ta.deferred(e, !0); g.l && (g.dc = !0, g.l.nodeType || (g.l = null)); g.G || d.deferEvaluation || e.ea(); g.l && e.fa() && a.a.I.ya(g.l, g.Lb = function () { e.o() }); return e
            }; var C = {
                equalityComparer: L, Ea: function () { return this[t].X }, kb: function () { var b = []; a.a.O(this[t].F, function (a, d) { b[d.Ka] = d.ha }); return b }, pc: function (a, c, d) {
                    if (this[t].tb && c === this) throw Error("A 'pure' computed must not be called recursively"); this[t].F[a] = d; d.Ka = this[t].X++;
                    d.La = c.lb()
                }, Wa: function () { var a, c, d = this[t].F; for (a in d) if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ia && c.ha.Ja || c.ha.Bd(c.La))) return !0 }, Hd: function () { this.Ia && !this[t].nb && this.Ia(!1) }, fa: function () { var a = this[t]; return a.ka || 0 < a.X }, Pd: function () { this.Ja ? this[t].ka && (this[t].qa = !0) : this.Dc() }, Wc: function (a) { if (a.Eb) { var c = a.subscribe(this.Hd, this, "dirty"), d = a.subscribe(this.Pd, this); return { ha: a, o: function () { c.o(); d.o() } } } return a.subscribe(this.Dc, this) }, Dc: function () {
                    var b = this,
                    c = b.throttleEvaluation; c && 0 <= c ? (clearTimeout(this[t].Ec), this[t].Ec = a.a.setTimeout(function () { b.ea(!0) }, c)) : b.Ia ? b.Ia(!0) : b.ea(!0)
                }, ea: function (b) { var c = this[t], d = c.Sa, e = !1; if (!c.nb && !c.pa) { if (c.l && !a.a.Mb(c.l) || d && d()) { if (!c.dc) { this.o(); return } } else c.dc = !1; c.nb = !0; try { e = this.xd(b) } finally { c.nb = !1 } return e } }, xd: function (b) {
                    var c = this[t], d = !1, e = c.tb ? n : !c.X, d = { od: this, ib: c.F, Kb: c.X }; a.u.tc({ nd: d, md: ca, v: this, pb: e }); c.F = {}; c.X = 0; var f = this.wd(c, d); c.X ? d = this.ob(c.V, f) : (this.o(), d = !0); d && (c.G ? this.Db() :
                        this.notifySubscribers(c.V, "beforeChange"), c.V = f, this.notifySubscribers(c.V, "spectate"), !c.G && b && this.notifySubscribers(c.V), this.mc && this.mc()); e && this.notifySubscribers(c.V, "awake"); return d
                }, wd: function (b, c) { try { var d = b.Sc; return b.jb ? d.call(b.jb) : d() } finally { a.u.end(), c.Kb && !b.G && a.a.O(c.ib, ba), b.qa = b.ka = !1 } }, w: function (a) { var c = this[t]; (c.ka && (a || !c.X) || c.G && this.Wa()) && this.ea(); return c.V }, rb: function (b) {
                    a.R.fn.rb.call(this, b); this.gc = function () {
                        this[t].G || (this[t].qa ? this.ea() : this[t].ka =
                            !1); return this[t].V
                    }; this.Ia = function (a) { this.jc(this[t].V); this[t].ka = !0; a && (this[t].qa = !0); this.kc(this, !a) }
                }, o: function () { var b = this[t]; !b.G && b.F && a.a.O(b.F, function (a, b) { b.o && b.o() }); b.l && b.Lb && a.a.I.vb(b.l, b.Lb); b.F = n; b.X = 0; b.pa = !0; b.qa = !1; b.ka = !1; b.G = !1; b.l = n; b.Sa = n; b.Sc = n; this.Jc || (b.jb = n) }
            }, da = {
                Pa: function (b) {
                    var c = this, d = c[t]; if (!d.pa && d.G && "change" == b) {
                    d.G = !1; if (d.qa || c.Wa()) d.F = null, d.X = 0, c.ea() && c.Db(); else {
                        var e = []; a.a.O(d.F, function (a, b) { e[b.Ka] = a }); a.a.B(e, function (a, b) {
                            var e = d.F[a],
                            m = c.Wc(e.ha); m.Ka = b; m.La = e.La; d.F[a] = m
                        }); c.Wa() && c.ea() && c.Db()
                    } d.pa || c.notifySubscribers(d.V, "awake")
                    }
                }, ab: function (b) { var c = this[t]; c.pa || "change" != b || this.Va("change") || (a.a.O(c.F, function (a, b) { b.o && (c.F[a] = { ha: b.ha, Ka: b.Ka, La: b.La }, b.o()) }), c.G = !0, this.notifySubscribers(n, "asleep")) }, lb: function () { var b = this[t]; b.G && (b.qa || this.Wa()) && this.ea(); return a.R.fn.lb.call(this) }
            }, ea = { Pa: function (a) { "change" != a && "beforeChange" != a || this.w() } }; a.a.Aa && a.a.setPrototypeOf(C, a.R.fn); var P = a.ra.Ma; C[P] = a.v;
            a.Kc = function (a) { return "function" == typeof a && a[P] === C[P] }; a.Dd = function (b) { return a.Kc(b) && b[t] && b[t].tb }; a.b("computed", a.v); a.b("dependentObservable", a.v); a.b("isComputed", a.Kc); a.b("isPureComputed", a.Dd); a.b("computed.fn", C); a.J(C, "peek", C.w); a.J(C, "dispose", C.o); a.J(C, "isActive", C.fa); a.J(C, "getDependenciesCount", C.Ea); a.J(C, "getDependencies", C.kb); a.ub = function (b, c) { if ("function" === typeof b) return a.v(b, c, { pure: !0 }); b = a.a.extend({}, b); b.pure = !0; return a.v(b, c) }; a.b("pureComputed", a.ub); (function () {
                function b(a,
                    f, g) { g = g || new d; a = f(a); if ("object" != typeof a || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a; var h = a instanceof Array ? [] : {}; g.save(a, h); c(a, function (c) { var d = f(a[c]); switch (typeof d) { case "boolean": case "number": case "string": case "function": h[c] = d; break; case "object": case "undefined": var k = g.get(d); h[c] = k !== n ? k : b(d, f, g) } }); return h } function c(a, b) {
                        if (a instanceof Array) {
                            for (var c = 0; c < a.length; c++)b(c); "function" == typeof a.toJSON &&
                                b("toJSON")
                        } else for (c in a) b(c)
                    } function d() { this.keys = []; this.values = [] } a.Xc = function (c) { if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert."); return b(c, function (b) { for (var c = 0; a.N(b) && 10 > c; c++)b = b(); return b }) }; a.toJSON = function (b, c, d) { b = a.Xc(b); return a.a.bc(b, c, d) }; d.prototype = {
                        constructor: d, save: function (b, c) { var d = a.a.C(this.keys, b); 0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c)) }, get: function (b) {
                            b = a.a.C(this.keys, b); return 0 <= b ? this.values[b] :
                                n
                        }
                    }
            })(); a.b("toJS", a.Xc); a.b("toJSON", a.toJSON); a.Ud = function (b, c, d) { function e(c) { var e = a.ub(b, d).extend({ Fa: "always" }), h = e.subscribe(function (a) { a && (h.o(), c(a)) }); e.notifySubscribers(e.w()); return h } return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e) }; a.b("when", a.Ud); (function () {
            a.s = {
                L: function (b) {
                    switch (a.a.P(b)) {
                        case "option": return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.f.options.Tb) : 7 >= a.a.U ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value :
                            b.text : b.value; case "select": return 0 <= b.selectedIndex ? a.s.L(b.options[b.selectedIndex]) : n; default: return b.value
                    }
                }, xa: function (b, c, d) {
                    switch (a.a.P(b)) {
                        case "option": "string" === typeof c ? (a.a.g.set(b, a.f.options.Tb, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.f.options.Tb, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : ""); break; case "select": if ("" === c || null === c) c = n; for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f)if (h = a.s.L(b.options[f]),
                            h == c || "" === h && c === n) { e = f; break } if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.U && a.a.setTimeout(function () { b.selectedIndex = e }, 0); break; default: if (null === c || c === n) c = ""; b.value = c
                    }
                }
            }
            })(); a.b("selectExtensions", a.s); a.b("selectExtensions.readValue", a.s.L); a.b("selectExtensions.writeValue", a.s.xa); a.m = function () {
                function b(b) {
                    b = a.a.zb(b); 123 === b.charCodeAt(0) && (b = b.slice(1, -1)); b += "\n,"; var c = [], d = b.match(e), q, p = [], h = 0; if (1 < d.length) {
                        for (var z = 0, w; w = d[z]; ++z) {
                            var u = w.charCodeAt(0); if (44 === u) {
                                if (0 >=
                                    h) { c.push(q && p.length ? { key: q, value: p.join("") } : { unknown: q || p.join("") }); q = h = 0; p = []; continue }
                            } else if (58 === u) { if (!h && !q && 1 === p.length) { q = p.pop(); continue } } else if (47 === u && 1 < w.length && (47 === w.charCodeAt(1) || 42 === w.charCodeAt(1))) continue; else 47 === u && z && 1 < w.length ? (u = d[z - 1].match(f)) && !g[u[0]] && (b = b.substr(b.indexOf(w) + 1), d = b.match(e), z = -1, w = "/") : 40 === u || 123 === u || 91 === u ? ++h : 41 === u || 125 === u || 93 === u ? --h : q || p.length || 34 !== u && 39 !== u || (w = w.slice(1, -1)); p.push(w)
                        } if (0 < h) throw Error("Unbalanced parentheses, braces, or brackets");
                    } return c
                } var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {}; return {
                    Qa: [], ua: h, Ub: b, sb: function (e, f) {
                        function k(b, e) {
                            var f; if (!z) {
                                var l = a.getBindingHandler(b); if (l && l.preprocess && !(e = l.preprocess(e, b, k))) return;
                                if (l = h[b]) f = e, 0 <= a.a.C(c, f) ? f = !1 : (l = f.match(d), f = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : f), l = f; l && p.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}")
                            } g && (e = "function(){return " + e + " }"); q.push("'" + b + "':" + e)
                        } f = f || {}; var q = [], p = [], g = f.valueAccessors, z = f.bindingParams, w = "string" === typeof e ? b(e) : e; a.a.B(w, function (a) { k(a.key || a.unknown, a.value) }); p.length && k("_ko_property_writers", "{" + p.join(",") + " }"); return q.join(",")
                    }, Gd: function (a, b) {
                        for (var c = 0; c < a.length; c++)if (a[c].key == b) return !0;
                        return !1
                    }, Za: function (b, c, d, e, f) { if (b && a.N(b)) !a.Xa(b) || f && b.w() === e || b(e); else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e) }
                }
            }(); a.b("expressionRewriting", a.m); a.b("expressionRewriting.bindingRewriteValidators", a.m.Qa); a.b("expressionRewriting.parseObjectLiteral", a.m.Ub); a.b("expressionRewriting.preProcessBindings", a.m.sb); a.b("expressionRewriting._twoWayBindings", a.m.ua); a.b("jsonExpressionRewriting", a.m); a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.sb); (function () {
                function b(a) {
                    return 8 ==
                        a.nodeType && g.test(f ? a.text : a.nodeValue)
                } function c(a) { return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue) } function d(d, e) { for (var f = d, g = 1, h = []; f = f.nextSibling;) { if (c(f) && (a.a.g.set(f, l, !0), g-- , 0 === g)) return h; h.push(f); b(f) && g++ } if (!e) throw Error("Cannot find closing comment tag to match: " + d.nodeValue); return null } function e(a, b) { var c = d(a, b); return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null } var f = x && "\x3c!--test--\x3e" === x.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ :
                    /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: !0, ol: !0 }, l = "__ko_matchedEndComment__"; a.h = {
                        ba: {}, childNodes: function (a) { return b(a) ? d(a) : a.childNodes }, Ca: function (c) { if (b(c)) { c = a.h.childNodes(c); for (var d = 0, e = c.length; d < e; d++)a.removeNode(c[d]) } else a.a.Nb(c) }, ta: function (c, d) { if (b(c)) { a.h.Ca(c); for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++)e.parentNode.insertBefore(d[f], e) } else a.a.ta(c, d) }, Rc: function (a, c) {
                            b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ?
                                a.insertBefore(c, a.firstChild) : a.appendChild(c)
                        }, Qb: function (c, d, e) { e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.h.Rc(c, d) }, firstChild: function (a) { if (b(a)) return !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling; if (a.firstChild && c(a.firstChild)) throw Error("Found invalid end comment, as the first child of " + a); return a.firstChild }, nextSibling: function (d) {
                        b(d) && (d = e(d)); if (d.nextSibling && c(d.nextSibling)) {
                            var f = d.nextSibling; if (c(f) &&
                                !a.a.g.get(f, l)) throw Error("Found end comment without a matching opening comment, as child of " + d); return null
                        } return d.nextSibling
                        }, Ad: b, Td: function (a) { return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null }, Oc: function (d) {
                            if (m[a.a.P(d)]) {
                                var f = d.firstChild; if (f) {
                                    do if (1 === f.nodeType) { var l; l = f.firstChild; var g = null; if (l) { do if (g) g.push(l); else if (b(l)) { var h = e(l, !0); h ? l = h : g = [l] } else c(l) && (g = [l]); while (l = l.nextSibling) } if (l = g) for (g = f.nextSibling, h = 0; h < l.length; h++)g ? d.insertBefore(l[h], g) : d.appendChild(l[h]) } while (f =
                                        f.nextSibling)
                                }
                            }
                        }
                    }
            })(); a.b("virtualElements", a.h); a.b("virtualElements.allowedBindings", a.h.ba); a.b("virtualElements.emptyNode", a.h.Ca); a.b("virtualElements.insertAfter", a.h.Qb); a.b("virtualElements.prepend", a.h.Rc); a.b("virtualElements.setDomNodeChildren", a.h.ta); (function () {
            a.da = function () { this.ld = {} }; a.a.extend(a.da.prototype, {
                nodeHasBindings: function (b) { switch (b.nodeType) { case 1: return null != b.getAttribute("data-bind") || a.i.getComponentNameForNode(b); case 8: return a.h.Ad(b); default: return !1 } },
                getBindings: function (b, c) { var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null; return a.i.oc(d, b, c, !1) }, getBindingAccessors: function (b, c) { var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, { valueAccessors: !0 }) : null; return a.i.oc(d, b, c, !0) }, getBindingsString: function (b) { switch (b.nodeType) { case 1: return b.getAttribute("data-bind"); case 8: return a.h.Td(b); default: return null } }, parseBindingsString: function (b, c, d, e) {
                    try {
                        var f = this.ld, g = b + (e && e.valueAccessors || ""),
                        h; if (!(h = f[g])) { var m, l = "with($context){with($data||{}){return{" + a.m.sb(b, e) + "}}}"; m = new Function("$context", "$element", l); h = f[g] = m } return h(c, d)
                    } catch (k) { throw k.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + k.message, k; }
                }
            }); a.da.instance = new a.da
            })(); a.b("bindingProvider", a.da); (function () {
                function b(b) { var c = (b = a.a.g.get(b, J)) && b.M; c && (b.M = null, c.Pc()) } function c(c, d, e) { this.node = c; this.uc = d; this.gb = []; this.T = !1; d.M || a.a.I.ya(c, b); e && e.M && (e.M.gb.push(c), this.Gb = e) } function d(a) { return function () { return a } }
                function e(a) { return a() } function f(b) { return a.a.Ga(a.u.K(b), function (a, c) { return function () { return b()[c] } }) } function g(b, c, e) { return "function" === typeof b ? f(b.bind(null, c, e)) : a.a.Ga(b, d) } function h(a, b) { return f(this.getBindings.bind(this, a, b)) } function m(b, c) { var d = a.h.firstChild(c); if (d) { var e, f = a.da.instance, k = f.preprocessNode; if (k) { for (; e = d;)d = a.h.nextSibling(e), k.call(f, e); d = a.h.firstChild(c) } for (; e = d;)d = a.h.nextSibling(e), l(b, e) } a.j.Fa(c, a.j.T) } function l(b, c) {
                    var d = b, e = 1 === c.nodeType; e &&
                        a.h.Oc(c); if (e || a.da.instance.nodeHasBindings(c)) d = q(c, null, b).bindingContextForDescendants; d && !w[a.a.P(c)] && m(d, c)
                } function k(b) { var c = [], d = {}, e = []; a.a.O(b, function y(f) { if (!d[f]) { var l = a.getBindingHandler(f); l && (l.after && (e.push(f), a.a.B(l.after, function (c) { if (b[c]) { if (-1 !== a.a.C(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", ")); y(c) } }), e.length--), c.push({ key: f, Ic: l })); d[f] = !0 } }); return c } function q(b, c, d) {
                    var f = a.a.g.Ob(b, J, {}), l = f.fd;
                    if (!c) { if (l) throw Error("You cannot apply bindings multiple times to the same element."); f.fd = !0 } l || (f.context = d); var g; if (c && "function" !== typeof c) g = c; else { var q = a.da.instance, p = q.getBindingAccessors || h, m = a.Y(function () { if ((g = c ? c(d, b) : p.call(q, b, d)) && d[r]) d[r](); return g }, null, { l: b }); g && m.fa() || (m = null) } var w = d, u; if (g) {
                        var z = function () { return a.a.Ga(m ? m() : g, e) }, t = m ? function (a) { return function () { return e(m()[a]) } } : function (a) { return g[a] }; z.get = function (a) { return g[a] && e(t(a)) }; z.has = function (a) {
                            return a in
                                g
                        }; a.j.T in g && a.j.subscribe(b, a.j.T, function () { var c = (0, g[a.j.T])(); if (c) { var d = a.h.childNodes(b); d.length && c(d, a.Ac(d[0])) } }); a.j.oa in g && (w = a.j.ac(b, d), a.j.subscribe(b, a.j.oa, function () { var c = (0, g[a.j.oa])(); c && a.h.firstChild(b) && c(b) })); f = k(g); a.a.B(f, function (c) {
                            var d = c.Ic.init, e = c.Ic.update, f = c.key; if (8 === b.nodeType && !a.h.ba[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements"); try {
                            "function" == typeof d && a.u.K(function () {
                                var a = d(b, t(f), z, w.$data, w); if (a && a.controlsDescendantBindings) {
                                    if (u !==
                                        n) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element."); u = f
                                }
                            }), "function" == typeof e && a.Y(function () { e(b, t(f), z, w.$data, w) }, null, { l: b })
                            } catch (l) { throw l.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + l.message, l; }
                        })
                    } f = u === n; return { shouldBindDescendants: f, bindingContextForDescendants: f && w }
                } function p(b, c) { return b && b instanceof a.ca ? b : new a.ca(b, n, n, c) } var r = a.a.Ra("_subscribable"),
                    z = a.a.Ra("_ancestorBindingInfo"); a.f = {}; var w = { script: !0, textarea: !0, template: !0 }; a.getBindingHandler = function (b) { return a.f[b] }; var u = {}; a.ca = function (b, c, d, e, f) {
                        function l() { var b = q ? h() : h, f = a.a.c(b); if (c) { if (c[r]) c[r](); a.a.extend(k, c); z in c && (k[z] = c[z]) } else k.$parents = [], k.$root = f, k.ko = a; k[r] = p; g ? f = k.$data : (k.$rawData = b, k.$data = f); d && (k[d] = f); e && e(k, c, f); return k.$data } var k = this, g = b === u, h = g ? n : b, q = "function" == typeof h && !a.N(h), p; f && f.exportDependencies ? l() : (p = a.ub(l), p.w(), p.fa() ? p.equalityComparer =
                            null : k[r] = n)
                    }; a.ca.prototype.createChildContext = function (b, c, d, e) { !e && c && "object" == typeof c && (e = c, c = e.as, d = e.extend); if (c && e && e.noChildContext) { var f = "function" == typeof b && !a.N(b); return new a.ca(u, this, null, function (a) { d && d(a); a[c] = f ? b() : b }, e) } return new a.ca(b, this, c, function (a, b) { a.$parentContext = b; a.$parent = b.$data; a.$parents = (b.$parents || []).slice(0); a.$parents.unshift(a.$parent); d && d(a) }, e) }; a.ca.prototype.extend = function (b) {
                        return new a.ca(u, this, null, function (c) {
                            a.a.extend(c, "function" == typeof b ?
                                b(c) : b)
                        })
                    }; var J = a.a.g.W(); c.prototype.Pc = function () { this.Gb && this.Gb.M && this.Gb.M.qd(this.node) }; c.prototype.qd = function (b) { a.a.fb(this.gb, b); !this.gb.length && this.T && this.yc() }; c.prototype.yc = function () { this.T = !0; this.uc.M && !this.gb.length && (this.uc.M = null, a.a.I.vb(this.node, b), a.j.Fa(this.node, a.j.oa), this.Pc()) }; a.j = {
                        T: "childrenComplete", oa: "descendantsComplete", subscribe: function (b, c, d, e) { b = a.a.g.Ob(b, J, {}); b.Da || (b.Da = new a.R); return b.Da.subscribe(d, e, c) }, Fa: function (b, c) {
                            var d = a.a.g.get(b,
                                J); if (d && (d.Da && d.Da.notifySubscribers(b, c), c == a.j.T)) if (d.M) d.M.yc(); else if (d.M === n && d.Da && d.Da.Va(a.j.oa)) throw Error("descendantsComplete event not supported for bindings on this node");
                        }, ac: function (b, d) { var e = a.a.g.Ob(b, J, {}); e.M || (e.M = new c(b, e, d[z])); return d[z] == e ? d : d.extend(function (a) { a[z] = e }) }
                    }; a.Rd = function (b) { return (b = a.a.g.get(b, J)) && b.context }; a.bb = function (b, c, d) { 1 === b.nodeType && a.h.Oc(b); return q(b, c, p(d)) }; a.jd = function (b, c, d) { d = p(d); return a.bb(b, g(c, d, b), d) }; a.Oa = function (a, b) {
                    1 !==
                        b.nodeType && 8 !== b.nodeType || m(p(a), b)
                    }; a.qc = function (a, b, c) { !v && B.jQuery && (v = B.jQuery); if (2 > arguments.length) { if (b = B.document.body, !b) throw Error("ko.applyBindings: could not find window.document.body; has the document been loaded?"); } else if (!b || 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node"); l(p(a, c), b) }; a.zc = function (b) { return !b || 1 !== b.nodeType && 8 !== b.nodeType ? n : a.Rd(b) }; a.Ac = function (b) {
                        return (b = a.zc(b)) ?
                            b.$data : n
                    }; a.b("bindingHandlers", a.f); a.b("bindingEvent", a.j); a.b("bindingEvent.subscribe", a.j.subscribe); a.b("applyBindings", a.qc); a.b("applyBindingsToDescendants", a.Oa); a.b("applyBindingAccessorsToNode", a.bb); a.b("applyBindingsToNode", a.jd); a.b("contextFor", a.zc); a.b("dataFor", a.Ac)
            })(); (function (b) {
                function c(c, e) {
                    var l = Object.prototype.hasOwnProperty.call(f, c) ? f[c] : b, k; l ? l.subscribe(e) : (l = f[c] = new a.R, l.subscribe(e), d(c, function (b, d) {
                        var e = !(!d || !d.synchronous); g[c] = { definition: b, Ed: e }; delete f[c];
                        k || e ? l.notifySubscribers(b) : a.ma.wb(function () { l.notifySubscribers(b) })
                    }), k = !0)
                } function d(a, b) { e("getConfig", [a], function (c) { c ? e("loadComponent", [a, c], function (a) { b(a, c) }) : b(null, null) }) } function e(c, d, f, k) {
                    k || (k = a.i.loaders.slice(0)); var g = k.shift(); if (g) {
                        var p = g[c]; if (p) {
                            var r = !1; if (p.apply(g, d.concat(function (a) { r ? f(null) : null !== a ? f(a) : e(c, d, f, k) })) !== b && (r = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
                        } else e(c, d, f, k)
                    } else f(null)
                } var f = {}, g = {}; a.i = { get: function (d, e) { var f = Object.prototype.hasOwnProperty.call(g, d) ? g[d] : b; f ? f.Ed ? a.u.K(function () { e(f.definition) }) : a.ma.wb(function () { e(f.definition) }) : c(d, e) }, xc: function (a) { delete g[a] }, hc: e }; a.i.loaders = []; a.b("components", a.i); a.b("components.get", a.i.get); a.b("components.clearCachedDefinition", a.i.xc)
            })(); (function () {
                function b(b, c, d, e) {
                    function g() { 0 === --w && e(h) } var h = {}, w = 2, u = d.template; d = d.viewModel; u ? f(c, u, function (c) {
                        a.i.hc("loadTemplate",
                            [b, c], function (a) { h.template = a; g() })
                    }) : g(); d ? f(c, d, function (c) { a.i.hc("loadViewModel", [b, c], function (a) { h[m] = a; g() }) }) : g()
                } function c(a, b, d) { if ("function" === typeof b) d(function (a) { return new b(a) }); else if ("function" === typeof b[m]) d(b[m]); else if ("instance" in b) { var e = b.instance; d(function () { return e }) } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b) } function d(b) { switch (a.a.P(b)) { case "script": return a.a.sa(b.text); case "textarea": return a.a.sa(b.value); case "template": if (e(b.content)) return a.a.Ba(b.content.childNodes) }return a.a.Ba(b.childNodes) }
                function e(a) { return B.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType } function f(a, b, c) { "string" === typeof b.require ? T || B.require ? (T || B.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b) } function g(a) { return function (b) { throw Error("Component '" + a + "': " + b); } } var h = {}; a.i.register = function (b, c) { if (!c) throw Error("Invalid configuration for " + b); if (a.i.qb(b)) throw Error("Component " + b + " is already registered"); h[b] = c }; a.i.qb = function (a) {
                    return Object.prototype.hasOwnProperty.call(h,
                        a)
                }; a.i.unregister = function (b) { delete h[b]; a.i.xc(b) }; a.i.Bc = {
                    getConfig: function (b, c) { c(a.i.qb(b) ? h[b] : null) }, loadComponent: function (a, c, d) { var e = g(a); f(e, c, function (c) { b(a, e, c, d) }) }, loadTemplate: function (b, c, f) {
                        b = g(b); if ("string" === typeof c) f(a.a.sa(c)); else if (c instanceof Array) f(c); else if (e(c)) f(a.a.la(c.childNodes)); else if (c.element) if (c = c.element, B.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c)); else if ("string" === typeof c) {
                            var h = x.getElementById(c); h ? f(d(h)) : b("Cannot find element with ID " +
                                c)
                        } else b("Unknown element type: " + c); else b("Unknown template value: " + c)
                    }, loadViewModel: function (a, b, d) { c(g(a), b, d) }
                }; var m = "createViewModel"; a.b("components.register", a.i.register); a.b("components.isRegistered", a.i.qb); a.b("components.unregister", a.i.unregister); a.b("components.defaultLoader", a.i.Bc); a.i.loaders.push(a.i.Bc); a.i.$c = h
            })(); (function () {
                function b(b, e) {
                    var f = b.getAttribute("params"); if (f) {
                        var f = c.parseBindingsString(f, e, b, { valueAccessors: !0, bindingParams: !0 }), f = a.a.Ga(f, function (c) {
                            return a.v(c,
                                null, { l: b })
                        }), g = a.a.Ga(f, function (c) { var e = c.w(); return c.fa() ? a.v({ read: function () { return a.a.c(c()) }, write: a.Xa(e) && function (a) { c()(a) }, l: b }) : e }); Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f); return g
                    } return { $raw: {} }
                } a.i.getComponentNameForNode = function (b) { var c = a.a.P(b); if (a.i.qb(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.U && b.tagName === c)) return c }; a.i.oc = function (c, e, f, g) {
                    if (1 === e.nodeType) {
                        var h = a.i.getComponentNameForNode(e); if (h) {
                            c = c || {}; if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                            var m = { name: h, params: b(e, f) }; c.component = g ? function () { return m } : m
                        }
                    } return c
                }; var c = new a.da; 9 > a.a.U && (a.i.register = function (a) { return function (b) { return a.apply(this, arguments) } }(a.i.register), x.createDocumentFragment = function (b) { return function () { var c = b(), f = a.i.$c, g; for (g in f); return c } }(x.createDocumentFragment))
            })(); (function () {
                function b(b, c, d) { c = c.template; if (!c) throw Error("Component '" + b + "' has no template"); b = a.a.Ba(c); a.h.ta(d, b) } function c(a, b, c) {
                    var d = a.createViewModel; return d ? d.call(a,
                        b, c) : b
                } var d = 0; a.f.component = {
                    init: function (e, f, g, h, m) {
                        function l() { var a = k && k.dispose; "function" === typeof a && a.call(k); p && p.o(); q = k = p = null } var k, q, p, r = a.a.la(a.h.childNodes(e)); a.h.Ca(e); a.a.I.ya(e, l); a.v(function () {
                            var g = a.a.c(f()), h, u; "string" === typeof g ? h = g : (h = a.a.c(g.name), u = a.a.c(g.params)); if (!h) throw Error("No component name specified"); var n = a.j.ac(e, m), A = q = ++d; a.i.get(h, function (d) {
                                if (q === A) {
                                    l(); if (!d) throw Error("Unknown component '" + h + "'"); b(h, d, e); var f = c(d, u, { element: e, templateNodes: r });
                                    d = n.createChildContext(f, { extend: function (a) { a.$component = f; a.$componentTemplateNodes = r } }); f && f.koDescendantsComplete && (p = a.j.subscribe(e, a.j.oa, f.koDescendantsComplete, f)); k = f; a.Oa(d, e)
                                }
                            })
                        }, null, { l: e }); return { controlsDescendantBindings: !0 }
                    }
                }; a.h.ba.component = !0
            })(); var W = { "class": "className", "for": "htmlFor" }; a.f.attr = {
                update: function (b, c) {
                    var d = a.a.c(c()) || {}; a.a.O(d, function (c, d) {
                        d = a.a.c(d); var g = c.indexOf(":"), g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c.substr(0, g)), h = !1 === d || null ===
                            d || d === n; h ? g ? b.removeAttributeNS(g, c) : b.removeAttribute(c) : d = d.toString(); 8 >= a.a.U && c in W ? (c = W[c], h ? b.removeAttribute(c) : b[c] = d) : h || (g ? b.setAttributeNS(g, c, d) : b.setAttribute(c, d)); "name" === c && a.a.Uc(b, h ? "" : d)
                    })
                }
            }; (function () {
                a.f.checked = {
                    after: ["value", "attr"], init: function (b, c, d) {
                        function e() {
                            var e = b.checked, f = g(); if (!a.ja.pb() && (e || !m && !a.ja.Ea())) {
                                var l = a.u.K(c); if (k) { var p = q ? l.w() : l, A = r; r = f; A !== f ? e && (a.a.Na(p, f, !0), a.a.Na(p, A, !1)) : a.a.Na(p, f, e); q && a.Xa(l) && l(p) } else h && (f === n ? f = e : e || (f = n)), a.m.Za(l,
                                    d, "checked", f, !0)
                            }
                        } function f() { var d = a.a.c(c()), e = g(); k ? (b.checked = 0 <= a.a.C(d, e), r = e) : b.checked = h && e === n ? !!d : g() === d } var g = a.ub(function () { if (d.has("checkedValue")) return a.a.c(d.get("checkedValue")); if (p) return d.has("value") ? a.a.c(d.get("value")) : b.value }), h = "checkbox" == b.type, m = "radio" == b.type; if (h || m) {
                            var l = c(), k = h && a.a.c(l) instanceof Array, q = !(k && l.push && l.splice), p = m || k, r = k ? g() : n; m && !b.name && a.f.uniqueName.init(b, function () { return !0 }); a.v(e, null, { l: b }); a.a.H(b, "click", e); a.v(f, null, { l: b });
                            l = n
                        }
                    }
                }; a.m.ua.checked = !0; a.f.checkedValue = { update: function (b, c) { b.value = a.a.c(c()) } }
            })(); a.f["class"] = { update: function (b, c) { var d = a.a.zb(a.a.c(c())); a.a.Bb(b, b.__ko__cssValue, !1); b.__ko__cssValue = d; a.a.Bb(b, d, !0) } }; a.f.css = { update: function (b, c) { var d = a.a.c(c()); null !== d && "object" == typeof d ? a.a.O(d, function (c, d) { d = a.a.c(d); a.a.Bb(b, c, d) }) : a.f["class"].update(b, c) } }; a.f.enable = { update: function (b, c) { var d = a.a.c(c()); d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0) } }; a.f.disable =
                { update: function (b, c) { a.f.enable.update(b, function () { return !a.a.c(c()) }) } }; a.f.event = { init: function (b, c, d, e, f) { var g = c() || {}; a.a.O(g, function (g) { "string" == typeof g && a.a.H(b, g, function (b) { var l, k = c()[g]; if (k) { try { var q = a.a.la(arguments); e = f.$data; q.unshift(e); l = k.apply(e, q) } finally { !0 !== l && (b.preventDefault ? b.preventDefault() : b.returnValue = !1) } !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation()) } }) }) } }; a.f.foreach = {
                    Nc: function (b) {
                        return function () {
                            var c = b(), d = a.a.Vb(c);
                            if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.$.Ma }; a.a.c(c); return { foreach: d.data, as: d.as, noChildContext: d.noChildContext, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.$.Ma }
                        }
                    }, init: function (b, c) { return a.f.template.init(b, a.f.foreach.Nc(c)) }, update: function (b, c, d, e, f) { return a.f.template.update(b, a.f.foreach.Nc(c), d, e, f) }
                }; a.m.Qa.foreach = !1; a.h.ba.foreach =
                    !0; a.f.hasfocus = {
                        init: function (b, c, d) { function e(e) { b.__ko_hasfocusUpdating = !0; var f = b.ownerDocument; if ("activeElement" in f) { var g; try { g = f.activeElement } catch (k) { g = f.body } e = g === b } f = c(); a.m.Za(f, d, "hasfocus", e, !0); b.__ko_hasfocusLastValue = e; b.__ko_hasfocusUpdating = !1 } var f = e.bind(null, !0), g = e.bind(null, !1); a.a.H(b, "focus", f); a.a.H(b, "focusin", f); a.a.H(b, "blur", g); a.a.H(b, "focusout", g); b.__ko_hasfocusLastValue = !1 }, update: function (b, c) {
                            var d = !!a.a.c(c()); b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue ===
                                d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.K(a.a.Cb, null, [b, d ? "focusin" : "focusout"]))
                        }
                    }; a.m.ua.hasfocus = !0; a.f.hasFocus = a.f.hasfocus; a.m.ua.hasFocus = "hasfocus"; a.f.html = { init: function () { return { controlsDescendantBindings: !0 } }, update: function (b, c) { a.a.Zb(b, c()) } }; (function () {
                        function b(b, d, e) {
                        a.f[b] = {
                            init: function (b, c, h, m, l) {
                                var k, q = !0, p, r, n, w; if (d) { m = h.get("as"); var u = h.get("noChildContext"), q = m && u; p = { as: m, noChildContext: u } } q && (r = a.v(function () {
                                    return !e !==
                                        !a.a.c(c())
                                }, null, { l: b })); w = (n = "render" == h.get("completeOn")) || h.has(a.j.oa); a.v(function () { var e = q ? r() : a.a.c(c()), h = !!e, m = !k; m && a.ja.Ea() && (k = a.a.Ba(a.h.childNodes(b), !0)); w && (l = a.j.ac(b, l)); h ? (m || a.h.ta(b, a.a.Ba(k)), e = d ? l.createChildContext("function" == typeof e ? e : c, p) : r.fa() ? l.extend(function () { r(); return null }) : l, a.Oa(e, b)) : (a.h.Ca(b), n || a.j.Fa(b, a.j.T)) }, null, { l: b }); return { controlsDescendantBindings: !0 }
                            }
                        }; a.m.Qa[b] = !1; a.h.ba[b] = !0
                        } b("if"); b("ifnot", !1, !0); b("with", !0)
                    })(); a.f.let = {
                        init: function (b,
                            c, d, e, f) { c = f.extend(c); a.Oa(c, b); return { controlsDescendantBindings: !0 } }
                    }; a.h.ba.let = !0; var Q = {}; a.f.options = {
                        init: function (b) { if ("select" !== a.a.P(b)) throw Error("options binding applies only to SELECT elements"); for (; 0 < b.length;)b.remove(0); return { controlsDescendantBindings: !0 } }, update: function (b, c, d) {
                            function e() { return a.a.cb(b.options, function (a) { return a.selected }) } function f(a, b, c) { var d = typeof b; return "function" == d ? b(a) : "string" == d ? a[b] : c } function g(c, e) {
                                if (z && k) a.s.xa(b, a.a.c(d.get("value")),
                                    !0); else if (r.length) { var f = 0 <= a.a.C(r, a.s.L(e[0])); a.a.Vc(e[0], f); z && !f && a.u.K(a.a.Cb, null, [b, "change"]) }
                            } var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, l = a.a.c(c()), k = d.get("valueAllowUnset") && d.has("value"), q = d.get("optionsIncludeDestroyed"); c = {}; var p, r = []; k || (h ? r = a.a.Hb(e(), a.s.L) : 0 <= b.selectedIndex && r.push(a.s.L(b.options[b.selectedIndex]))); l && ("undefined" == typeof l.length && (l = [l]), p = a.a.cb(l, function (b) { return q || b === n || null === b || !a.a.c(b._destroy) }), d.has("optionsCaption") && (l = a.a.c(d.get("optionsCaption")),
                                null !== l && l !== n && p.unshift(Q))); var z = !1; c.beforeRemove = function (a) { b.removeChild(a) }; l = g; d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (l = function (b, c) { g(0, c); a.u.K(d.get("optionsAfterRender"), null, [c[0], b !== Q ? b : n]) }); a.a.Yb(b, p, function (c, e, g) {
                                g.length && (r = !k && g[0].selected ? [a.s.L(g[0])] : [], z = !0); e = b.ownerDocument.createElement("option"); c === Q ? (a.a.yb(e, d.get("optionsCaption")), a.s.xa(e, n)) : (g = f(c, d.get("optionsValue"), c), a.s.xa(e, a.a.c(g)), c = f(c, d.get("optionsText"),
                                    g), a.a.yb(e, c)); return [e]
                                }, c, l); a.u.K(function () { if (k) a.s.xa(b, a.a.c(d.get("value")), !0); else { var c; h ? c = r.length && e().length < r.length : c = r.length && 0 <= b.selectedIndex ? a.s.L(b.options[b.selectedIndex]) !== r[0] : r.length || 0 <= b.selectedIndex; c && a.a.Cb(b, "change") } }); a.a.ud(b); m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m)
                        }
                    }; a.f.options.Tb = a.a.g.W(); a.f.selectedOptions = {
                        after: ["options", "foreach"], init: function (b, c, d) {
                            a.a.H(b, "change", function () {
                                var e = c(), f = []; a.a.B(b.getElementsByTagName("option"), function (b) {
                                b.selected &&
                                    f.push(a.s.L(b))
                                }); a.m.Za(e, d, "selectedOptions", f)
                            })
                        }, update: function (b, c) { if ("select" != a.a.P(b)) throw Error("values binding applies only to SELECT elements"); var d = a.a.c(c()), e = b.scrollTop; d && "number" == typeof d.length && a.a.B(b.getElementsByTagName("option"), function (b) { var c = 0 <= a.a.C(d, a.s.L(b)); b.selected != c && a.a.Vc(b, c) }); b.scrollTop = e }
                    }; a.m.ua.selectedOptions = !0; a.f.style = {
                        update: function (b, c) {
                            var d = a.a.c(c() || {}); a.a.O(d, function (c, d) {
                                d = a.a.c(d); if (null === d || d === n || !1 === d) d = ""; if (v) v(b).css(c,
                                    d); else if (/^--/.test(c)) b.style.setProperty(c, d); else { c = c.replace(/-(\w)/g, function (a, b) { return b.toUpperCase() }); var g = b.style[c]; b.style[c] = d; d === g || b.style[c] != g || isNaN(d) || (b.style[c] = d + "px") }
                            })
                        }
                    }; a.f.submit = { init: function (b, c, d, e, f) { if ("function" != typeof c()) throw Error("The value for a submit binding must be a function"); a.a.H(b, "submit", function (a) { var d, e = c(); try { d = e.call(f.$data, b) } finally { !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) } }) } }; a.f.text = {
                        init: function () { return { controlsDescendantBindings: !0 } },
                        update: function (b, c) { a.a.yb(b, c()) }
                    }; a.h.ba.text = !0; (function () {
                        if (B && B.navigator) { var b = function (a) { if (a) return parseFloat(a[1]) }, c = B.navigator.userAgent, d, e, f, g, h; (d = B.opera && B.opera.version && parseInt(B.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.U || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/))) } if (8 <= g && 10 > g) var m = a.a.g.W(), l = a.a.g.W(), k = function (b) {
                            var c = this.activeElement;
                            (c = c && a.a.g.get(c, l)) && c(b)
                        }, q = function (b, c) { var d = b.ownerDocument; a.a.g.get(d, m) || (a.a.g.set(d, m, !0), a.a.H(d, "selectionchange", k)); a.a.g.set(b, l, c) }; a.f.textInput = {
                            init: function (b, c, l) {
                                function k(c, d) { a.a.H(b, c, d) } function m() { var d = a.a.c(c()); if (null === d || d === n) d = ""; M !== n && d === M ? a.a.setTimeout(m, 4) : b.value !== d && (y = !0, b.value = d, y = !1, v = b.value) } function t() { x || (M = b.value, x = a.a.setTimeout(A, 4)) } function A() { clearTimeout(x); M = x = n; var d = b.value; v !== d && (v = d, a.m.Za(c(), l, "textInput", d)) } var v = b.value,
                                    x, M, B = 9 == a.a.U ? t : A, y = !1; g && k("keypress", A); 11 > g && k("propertychange", function (a) { y || "value" !== a.propertyName || B(a) }); 8 == g && (k("keyup", A), k("keydown", A)); q && (q(b, B), k("dragend", t)); (!g || 9 <= g) && k("input", B); 5 > e && "textarea" === a.a.P(b) ? (k("keydown", t), k("paste", t), k("cut", t)) : 11 > d ? k("keydown", t) : 4 > f ? (k("DOMAutoComplete", A), k("dragdrop", A), k("drop", A)) : h && "number" === b.type && k("keydown", t); k("change", A); k("blur", A); a.v(m, null, { l: b })
                            }
                        }; a.m.ua.textInput = !0; a.f.textinput = {
                            preprocess: function (a, b, c) {
                                c("textInput",
                                    a)
                            }
                        }
                    })(); a.f.uniqueName = { init: function (b, c) { if (c()) { var d = "ko_unique_" + ++a.f.uniqueName.pd; a.a.Uc(b, d) } } }; a.f.uniqueName.pd = 0; a.f.using = { init: function (b, c, d, e, f) { c = f.createChildContext(c); a.Oa(c, b); return { controlsDescendantBindings: !0 } } }; a.h.ba.using = !0; a.f.value = {
                        after: ["options", "foreach"], init: function (b, c, d) {
                            var e = a.a.P(b), f = "input" == e; if (!f || "checkbox" != b.type && "radio" != b.type) {
                                var g = ["change"], h = d.get("valueUpdate"), m = !1, l = null; h && ("string" == typeof h && (h = [h]), a.a.eb(g, h), g = a.a.sc(g)); var k =
                                    function () { l = null; m = !1; var e = c(), f = a.s.L(b); a.m.Za(e, d, "value", f) }; !a.a.U || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.C(g, "propertychange") || (a.a.H(b, "propertychange", function () { m = !0 }), a.a.H(b, "focus", function () { m = !1 }), a.a.H(b, "blur", function () { m && k() })); a.a.B(g, function (c) { var d = k; a.a.Sd(c, "after") && (d = function () { l = a.s.L(b); a.a.setTimeout(k, 0) }, c = c.substring(5)); a.a.H(b, c, d) }); var q; q = f && "file" == b.type ? function () {
                                        var d = a.a.c(c()); null === d || d === n || "" ===
                                            d ? b.value = "" : a.u.K(k)
                                    } : function () { var f = a.a.c(c()), g = a.s.L(b); if (null !== l && f === l) a.a.setTimeout(q, 0); else if (f !== g || g === n) "select" === e ? (g = d.get("valueAllowUnset"), a.s.xa(b, f, g), g || f === a.s.L(b) || a.u.K(k)) : a.s.xa(b, f) }; a.v(q, null, { l: b })
                            } else a.bb(b, { checkedValue: c })
                        }, update: function () { }
                    }; a.m.ua.value = !0; a.f.visible = { update: function (b, c) { var d = a.a.c(c()), e = "none" != b.style.display; d && !e ? b.style.display = "" : !d && e && (b.style.display = "none") } }; a.f.hidden = { update: function (b, c) { a.f.visible.update(b, function () { return !a.a.c(c()) }) } };
            (function (b) { a.f[b] = { init: function (c, d, e, f, g) { return a.f.event.init.call(this, c, function () { var a = {}; a[b] = d(); return a }, e, f, g) } } })("click"); a.aa = function () { }; a.aa.prototype.renderTemplateSource = function () { throw Error("Override renderTemplateSource"); }; a.aa.prototype.createJavaScriptEvaluatorBlock = function () { throw Error("Override createJavaScriptEvaluatorBlock"); }; a.aa.prototype.makeTemplateSource = function (b, c) {
                if ("string" == typeof b) {
                    c = c || x; var d = c.getElementById(b); if (!d) throw Error("Cannot find template with ID " +
                        b); return new a.A.D(d)
                } if (1 == b.nodeType || 8 == b.nodeType) return new a.A.ia(b); throw Error("Unknown template type: " + b);
            }; a.aa.prototype.renderTemplate = function (a, c, d, e) { a = this.makeTemplateSource(a, e); return this.renderTemplateSource(a, c, d, e) }; a.aa.prototype.isTemplateRewritten = function (a, c) { return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten") }; a.aa.prototype.rewriteTemplate = function (a, c, d) {
                a = this.makeTemplateSource(a, d); c = c(a.text()); a.text(c); a.data("isRewritten",
                    !0)
            }; a.b("templateEngine", a.aa); a.ec = function () {
                function b(b, c, d, h) {
                    b = a.m.Ub(b); for (var m = a.m.Qa, l = 0; l < b.length; l++) { var k = b[l].key; if (Object.prototype.hasOwnProperty.call(m, k)) { var q = m[k]; if ("function" === typeof q) { if (k = q(b[l].value)) throw Error(k); } else if (!q) throw Error("This template engine does not support the '" + k + "' binding within its templates"); } } d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.sb(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')"; return h.createJavaScriptEvaluatorBlock(d) +
                        c
                } var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g; return {
                    vd: function (b, c, d) { c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) { return a.ec.Jd(b, c) }, d) }, Jd: function (a, f) { return a.replace(c, function (a, c, d, e, k) { return b(k, c, d, f) }).replace(d, function (a, c) { return b(c, "\x3c!-- ko --\x3e", "#comment", f) }) }, kd: function (b, c) {
                        return a.Z.Rb(function (d, h) {
                            var m = d.nextSibling;
                            m && m.nodeName.toLowerCase() === c && a.bb(m, b, h)
                        })
                    }
                }
            }(); a.b("__tr_ambtns", a.ec.kd); (function () {
            a.A = {}; a.A.D = function (b) { if (this.D = b) { var c = a.a.P(b); this.Ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4 } }; a.A.D.prototype.text = function () { var b = 1 === this.Ab ? "text" : 2 === this.Ab ? "value" : "innerHTML"; if (0 == arguments.length) return this.D[b]; var c = arguments[0]; "innerHTML" === b ? a.a.Zb(this.D, c) : this.D[b] = c }; var b = a.a.g.W() + "_"; a.A.D.prototype.data = function (c) {
                if (1 === arguments.length) return a.a.g.get(this.D,
                    b + c); a.a.g.set(this.D, b + c, arguments[1])
            }; var c = a.a.g.W(); a.A.D.prototype.nodes = function () { var b = this.D; if (0 == arguments.length) { var e = a.a.g.get(b, c) || {}, f = e.hb || (3 === this.Ab ? b.content : 4 === this.Ab ? b : n); if (!f || e.gd) if (e = this.text()) f = a.a.Kd(e, b.ownerDocument), this.text(""), a.a.g.set(b, c, { hb: f, gd: !0 }); return f } a.a.g.set(b, c, { hb: arguments[0] }) }; a.A.ia = function (a) { this.D = a }; a.A.ia.prototype = new a.A.D; a.A.ia.prototype.constructor = a.A.ia; a.A.ia.prototype.text = function () {
                if (0 == arguments.length) {
                    var b = a.a.g.get(this.D,
                        c) || {}; b.fc === n && b.hb && (b.fc = b.hb.innerHTML); return b.fc
                } a.a.g.set(this.D, c, { fc: arguments[0] })
            }; a.b("templateSources", a.A); a.b("templateSources.domElement", a.A.D); a.b("templateSources.anonymousTemplate", a.A.ia)
            })(); (function () {
                function b(b, c, d) { var e; for (c = a.h.nextSibling(c); b && (e = b) !== c;)b = a.h.nextSibling(e), d(e, b) } function c(c, d) {
                    if (c.length) {
                        var e = c[0], f = c[c.length - 1], g = e.parentNode, h = a.da.instance, m = h.preprocessNode; if (m) {
                            b(e, f, function (a, b) {
                                var c = a.previousSibling, d = m.call(h, a); d && (a === e && (e =
                                    d[0] || b), a === f && (f = d[d.length - 1] || c))
                            }); c.length = 0; if (!e) return; e === f ? c.push(e) : (c.push(e, f), a.a.Ua(c, g))
                        } b(e, f, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.qc(d, b) }); b(e, f, function (b) { 1 !== b.nodeType && 8 !== b.nodeType || a.Z.Zc(b, [d]) }); a.a.Ua(c, g)
                    }
                } function d(a) { return a.nodeType ? a : 0 < a.length ? a[0] : null } function e(b, e, f, h, m) {
                    m = m || {}; var n = (b && d(b) || f || {}).ownerDocument, w = m.templateEngine || g; a.ec.vd(f, w, n); f = w.renderTemplate(f, h, m, n); if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
                    n = !1; switch (e) { case "replaceChildren": a.h.ta(b, f); n = !0; break; case "replaceNode": a.a.Tc(b, f); n = !0; break; case "ignoreTargetNode": break; default: throw Error("Unknown renderMode: " + e); }n && (c(f, h), m.afterRender && a.u.K(m.afterRender, null, [f, h[m.as || "$data"]]), "replaceChildren" == e && a.j.Fa(b, a.j.T)); return f
                } function f(b, c, d) { return a.N(b) ? b() : "function" === typeof b ? b(c, d) : b } var g; a.$b = function (b) { if (b != n && !(b instanceof a.aa)) throw Error("templateEngine must inherit from ko.templateEngine"); g = b }; a.Xb = function (b,
                    c, h, m, r) { h = h || {}; if ((h.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate"); r = r || "replaceChildren"; if (m) { var z = d(m); return a.Y(function () { var g = c && c instanceof a.ca ? c : new a.ca(c, null, null, null, { exportDependencies: !0 }), n = f(b, g.$data, g), g = e(m, r, n, g, h); "replaceNode" == r && (m = g, z = d(m)) }, null, { Sa: function () { return !z || !a.a.Mb(z) }, l: z && "replaceNode" == r ? z.parentNode : z }) } return a.Z.Rb(function (d) { a.Xb(b, c, h, d, "replaceNode") }) }; a.Od = function (b, d, g, h, m) {
                        function z(b, c) {
                            a.u.K(a.a.Yb,
                                null, [h, b, u, g, w, c]); a.j.Fa(h, a.j.T)
                        } function w(a, b) { c(b, t); g.afterRender && g.afterRender(b, a); t = null } function u(a, c) { t = m.createChildContext(a, { as: A, noChildContext: g.noChildContext, extend: function (a) { a.$index = c; A && (a[A + "Index"] = c) } }); var d = f(b, a, t); return e(h, "ignoreTargetNode", d, t, g) } var t, A = g.as, v = !1 === g.includeDestroyed || a.options.foreachHidesDestroyed && !g.includeDestroyed; if (v || g.beforeRemove || !a.Lc(d)) return a.Y(function () {
                            var b = a.a.c(d) || []; "undefined" == typeof b.length && (b = [b]); v && (b = a.a.cb(b,
                                function (b) { return b === n || null === b || !a.a.c(b._destroy) })); z(b)
                        }, null, { l: h }); z(d.w()); var x = d.subscribe(function (a) { z(d(), a) }, null, "arrayChange"); x.l(h); return x
                    }; var h = a.a.g.W(), m = a.a.g.W(); a.f.template = {
                        init: function (b, c) {
                            var d = a.a.c(c()); if ("string" == typeof d || d.name) a.h.Ca(b); else if ("nodes" in d) { d = d.nodes || []; if (a.N(d)) throw Error('The "nodes" option must be a plain, non-observable array.'); var e = d[0] && d[0].parentNode; e && a.a.g.get(e, m) || (e = a.a.Sb(d), a.a.g.set(e, m, !0)); (new a.A.ia(b)).nodes(e) } else if (d =
                                a.h.childNodes(b), 0 < d.length) e = a.a.Sb(d), (new a.A.ia(b)).nodes(e); else throw Error("Anonymous template defined, but no template content was provided"); return { controlsDescendantBindings: !0 }
                        }, update: function (b, c, d, e, f) {
                            var g = c(); c = a.a.c(g); d = !0; e = null; "string" == typeof c ? c = {} : (g = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot))); "foreach" in c ? e = a.Od(g || b, d && c.foreach || [], c, b, f) : d ? (d = f, "data" in c && (d = f.createChildContext(c.data, { as: c.as, noChildContext: c.noChildContext, exportDependencies: !0 })),
                                e = a.Xb(g || b, d, c, b)) : a.h.Ca(b); f = e; (c = a.a.g.get(b, h)) && "function" == typeof c.o && c.o(); a.a.g.set(b, h, !f || f.fa && !f.fa() ? n : f)
                        }
                    }; a.m.Qa.template = function (b) { b = a.m.Ub(b); return 1 == b.length && b[0].unknown || a.m.Gd(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates" }; a.h.ba.template = !0
            })(); a.b("setTemplateEngine", a.$b); a.b("renderTemplate", a.Xb); a.a.Gc = function (a, c, d) {
                if (a.length && c.length) {
                    var e, f, g, h, m; for (e = f = 0; (!d || e < d) && (h = a[f]); ++f) {
                        for (g = 0; m = c[g]; ++g)if (h.value ===
                            m.value) { h.moved = m.index; m.moved = h.index; c.splice(g, 1); e = g = 0; break } e += g
                    }
                }
            }; a.a.Jb = function () {
                function b(b, d, e, f, g) {
                    var h = Math.min, m = Math.max, l = [], k, n = b.length, p, r = d.length, t = r - n || 1, w = n + r + 1, u, v, A; for (k = 0; k <= n; k++)for (v = u, l.push(u = []), A = h(r, k + t), p = m(0, k - 1); p <= A; p++)u[p] = p ? k ? b[k - 1] === d[p - 1] ? v[p - 1] : h(v[p] || w, u[p - 1] || w) + 1 : p + 1 : k + 1; h = []; m = []; t = []; k = n; for (p = r; k || p;)r = l[k][p] - 1, p && r === l[k][p - 1] ? m.push(h[h.length] = { status: e, value: d[--p], index: p }) : k && r === l[k - 1][p] ? t.push(h[h.length] = { status: f, value: b[--k], index: k }) :
                        (--p, --k, g.sparse || h.push({ status: "retained", value: d[p] })); a.a.Gc(t, m, !g.dontLimitMoves && 10 * n); return h.reverse()
                } return function (a, d, e) { e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {}; a = a || []; d = d || []; return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e) }
            }(); a.b("utils.compareArrays", a.a.Jb); (function () {
                function b(b, c, d, h, m) {
                    var l = [], k = a.Y(function () { var k = c(d, m, a.a.Ua(l, b)) || []; 0 < l.length && (a.a.Tc(l, k), h && a.u.K(h, null, [d, k, m])); l.length = 0; a.a.eb(l, k) }, null, { l: b, Sa: function () { return !a.a.hd(l) } });
                    return { ga: l, Y: k.fa() ? k : n }
                } var c = a.a.g.W(), d = a.a.g.W(); a.a.Yb = function (e, f, g, h, m, l) {
                    function k(b) { y = { za: b, Pb: a.ra(v++) }; w.push(y); t || E.push(y) } function q(b) { y = r[b]; v !== b && C.push(y); y.Pb(v++); a.a.Ua(y.ga, e); w.push(y) } function p(b, c) { if (b) for (var d = 0, e = c.length; d < e; d++)a.a.B(c[d].ga, function (a) { b(a, d, c[d].za) }) } f = f || []; "undefined" == typeof f.length && (f = [f]); h = h || {}; var r = a.a.g.get(e, c), t = !r, w = [], u = 0, v = 0, A = [], x = [], B = [], C = [], E = [], y, F = 0; if (t) a.a.B(f, k); else {
                        if (!l || r && r._countWaitingForRemove) {
                            var D = t ? [] :
                                a.a.Hb(r, function (a) { return a.za }); l = a.a.Jb(D, f, { dontLimitMoves: h.dontLimitMoves, sparse: !0 })
                        } for (var D = 0, G, H, I; G = l[D]; D++)switch (H = G.moved, I = G.index, G.status) { case "deleted": for (; u < I;)q(u++); H === n && (y = r[u], y.Y && (y.Y.o(), y.Y = n), a.a.Ua(y.ga, e).length && (h.beforeRemove && (w.push(y), F++ , y.za === d ? y = null : B.push(y)), y && A.push.apply(A, y.ga))); u++; break; case "added": for (; v < I;)q(u++); H !== n ? (x.push(v), q(H)) : k(G.value) }for (; v < f.length;)q(u++); w._countWaitingForRemove = F
                    } a.a.g.set(e, c, w); p(h.beforeMove, C); a.a.B(A,
                        h.beforeRemove ? a.na : a.removeNode); var K, O, N; try { N = e.ownerDocument.activeElement } catch (L) { } if (x.length) for (; (D = x.shift()) != n;) { y = w[D]; for (K = n; D;)if ((O = w[--D].ga) && O.length) { K = O[O.length - 1]; break } for (f = 0; u = y.ga[f]; K = u, f++)a.h.Qb(e, u, K) } D = 0; for (x = a.h.firstChild(e); y = w[D]; D++) { y.ga || a.a.extend(y, b(e, g, y.za, m, y.Pb)); for (f = 0; u = y.ga[f]; x = u.nextSibling, K = u, f++)u !== x && a.h.Qb(e, u, K); !y.Cd && m && (m(y.za, y.ga, y.Pb), y.Cd = !0) } N && e.ownerDocument.activeElement != N && N.focus(); p(h.beforeRemove, B); for (D = 0; D < B.length; ++D)B[D].za =
                            d; p(h.afterMove, C); p(h.afterAdd, E)
                }
            })(); a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.Yb); a.$ = function () { this.allowTemplateRewriting = !1 }; a.$.prototype = new a.aa; a.$.prototype.constructor = a.$; a.$.prototype.renderTemplateSource = function (b, c, d, e) { if (c = (9 > a.a.U ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(!0).childNodes); b = b.text(); return a.a.sa(b, e) }; a.$.Ma = new a.$; a.$b(a.$.Ma); a.b("nativeTemplateEngine", a.$); (function () {
            a.Ya = function () {
                var a = this.Fd = function () {
                    if (!v || !v.tmpl) return 0; try {
                        if (0 <=
                            v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2
                    } catch (a) { } return 1
                }(); this.renderTemplateSource = function (b, e, f, g) {
                    g = g || x; f = f || {}; if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later."); var h = b.data("precompiled"); h || (h = b.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h)); b = [e.$data]; e = v.extend({ koBindingContext: e }, f.templateOptions); e = v.tmpl(h, b, e); e.appendTo(g.createElement("div"));
                    v.fragments = {}; return e
                }; this.createJavaScriptEvaluatorBlock = function (a) { return "{{ko_code ((function() { return " + a + " })()) }}" }; this.addTemplate = function (a, b) { x.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>") }; 0 < a && (v.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, v.tmpl.tag.ko_with = { open: "with($1) {", close: "} " })
            }; a.Ya.prototype = new a.aa; a.Ya.prototype.constructor = a.Ya; var b = new a.Ya; 0 < b.Fd && a.$b(b); a.b("jqueryTmplTemplateEngine", a.Ya)
            })()
        })
    })();
})();