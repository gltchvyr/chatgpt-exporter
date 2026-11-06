// ==UserScript==
// @name               ChatGPT Exporter — Archive Build
// @name:zh-CN         ChatGPT Exporter — Archive Build
// @name:zh-TW         ChatGPT Exporter — Archive Build
// @namespace          pionxzh
// @version            2.38.3
// @author             pionxzh
// @description        Read-only ChatGPT conversation exporter for local archival.
// @description:zh-CN  Read-only ChatGPT conversation exporter for local archival.
// @description:zh-TW  Read-only ChatGPT conversation exporter for local archival.
// @license            MIT
// @icon               https://chatgpt.com/favicon.ico
// @match              https://chat.openai.com/
// @match              https://chat.openai.com/?*
// @match              https://chat.openai.com/c/*
// @match              https://chat.openai.com/g/*
// @match              https://chat.openai.com/gpts
// @match              https://chat.openai.com/gpts/*
// @match              https://chat.openai.com/share/*
// @match              https://chat.openai.com/share/*/continue
// @match              https://chatgpt.com/
// @match              https://chatgpt.com/?*
// @match              https://chatgpt.com/c/*
// @match              https://chatgpt.com/g/*
// @match              https://chatgpt.com/gpts
// @match              https://chatgpt.com/gpts/*
// @match              https://chatgpt.com/share/*
// @match              https://chatgpt.com/share/*/continue
// @grant              GM_deleteValue
// @grant              GM_getValue
// @grant              GM_setValue
// @grant              unsafeWindow
// @run-at             document-end
// ==/UserScript==

(function() {
	"use strict";
	var s$2 = new Set();
	var _css = async (t) => {
		if (s$2.has(t)) return;
		s$2.add(t);
		((css) => {
			const style = document.createElement("style");
			style.textContent = css;
			let head = document.head;
			head.append(style);
			const observer = new MutationObserver(() => {
				if (document.head && document.head !== head) {
					head = document.head;
					observer.observe(head, { childList: true });
				}
				if (!style.isConnected) document.head?.append(style);
			});
			observer.observe(document.documentElement, { childList: true });
			observer.observe(head, { childList: true });
		})(t);
	};
	var __create = Object.create;
	var __defProp = Object.defineProperty;
	var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
	var __getOwnPropNames = Object.getOwnPropertyNames;
	var __getProtoOf = Object.getPrototypeOf;
	var __hasOwnProp = Object.prototype.hasOwnProperty;
	var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
	var __exportAll = (all, no_symbols) => {
		let target = {};
		for (var name in all) __defProp(target, name, {
			get: all[name],
			enumerable: true
		});
		if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
		return target;
	};
	var __copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: ((k) => from[k]).bind(null, key),
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	var __require = ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, { get: (a, b) => (typeof require !== "undefined" ? require : a)[b] }) : x)(function(x) {
		if (typeof require !== "undefined") return require.apply(this, arguments);
		throw Error("Calling `require` for \"" + x + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
	});
	var n;
	var l$1;
	var u$1;
	var i$1;
	var o$2;
	var r$1;
	var f$1;
	var e$1;
	var c$1 = {};
	var s$1 = [];
	var a$1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
	var h$1 = Array.isArray;
	function v$1(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function p$1(n) {
		var l = n.parentNode;
		l && l.removeChild(n);
	}
	function y$1(l, u, t) {
		var i, o, r, f = {};
		for (r in u) "key" == r ? i = u[r] : "ref" == r ? o = u[r] : f[r] = u[r];
		if (arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : t), "function" == typeof l && null != l.defaultProps) for (r in l.defaultProps) void 0 === f[r] && (f[r] = l.defaultProps[r]);
		return d$1(l, f, i, o, null);
	}
	function d$1(n, t, i, o, r) {
		var f = {
			type: n,
			props: t,
			key: i,
			ref: o,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: null == r ? ++u$1 : r
		};
		return null == r && null != l$1.vnode && l$1.vnode(f), f;
	}
	function k$1(n) {
		return n.children;
	}
	function b$1(n, l) {
		this.props = n, this.context = l;
	}
	function g$2(n, l) {
		if (null == l) return n.__ ? g$2(n.__, n.__.__k.indexOf(n) + 1) : null;
		for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return "function" == typeof n.type ? g$2(n) : null;
	}
	function m$1(n) {
		var l, u;
		if (null != (n = n.__) && null != n.__c) {
			for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
				n.__e = n.__c.base = u.__e;
				break;
			}
			return m$1(n);
		}
	}
	function w$2(n) {
		(!n.__d && (n.__d = !0) && i$1.push(n) && !x.__r++ || o$2 !== l$1.debounceRendering) && ((o$2 = l$1.debounceRendering) || r$1)(x);
	}
	function x() {
		var n, l, u, t, o, r, e, c, s;
		for (i$1.sort(f$1); n = i$1.shift();) n.__d && (l = i$1.length, t = void 0, o = void 0, r = void 0, c = (e = (u = n).__v).__e, (s = u.__P) && (t = [], o = [], (r = v$1({}, e)).__v = e.__v + 1, L$1(s, e, r, u.__n, void 0 !== s.ownerSVGElement, null != e.__h ? [c] : null, t, null == c ? g$2(e) : c, e.__h, o), M(t, e, o), e.__e != c && m$1(e)), i$1.length > l && i$1.sort(f$1));
		x.__r = 0;
	}
	function P$1(n, l, u, t, i, o, r, f, e, a, v) {
		var p, y, _, b, m, w, x, P, C, H = 0, I = t && t.__k || s$1, T = I.length, j = T, z = l.length;
		for (u.__k = [], p = 0; p < z; p++) null != (b = u.__k[p] = null == (b = l[p]) || "boolean" == typeof b || "function" == typeof b ? null : "string" == typeof b || "number" == typeof b || "bigint" == typeof b ? d$1(null, b, null, null, b) : h$1(b) ? d$1(k$1, { children: b }, null, null, null) : b.__b > 0 ? d$1(b.type, b.props, b.key, b.ref ? b.ref : null, b.__v) : b) ? (b.__ = u, b.__b = u.__b + 1, -1 === (P = A(b, I, x = p + H, j)) ? _ = c$1 : (_ = I[P] || c$1, I[P] = void 0, j--), L$1(n, b, _, i, o, r, f, e, a, v), m = b.__e, (y = b.ref) && _.ref != y && (_.ref && O(_.ref, null, b), v.push(y, b.__c || m, b)), null != m && (w ??= m, (C = _ === c$1 || null === _.__v) ? -1 == P && H-- : P !== x && (P === x + 1 ? H++ : P > x ? j > z - x ? H += P - x : H-- : H = P < x && P == x - 1 ? P - x : 0), x = p + H, "function" != typeof b.type || P === x && _.__k !== b.__k ? "function" == typeof b.type || P === x && !C ? void 0 !== b.__d ? (e = b.__d, b.__d = void 0) : e = m.nextSibling : e = S(n, m, e) : e = $$2(b, e, n), "function" == typeof u.type && (u.__d = e))) : (_ = I[p]) && null == _.key && _.__e && (_.__e == e && (e = g$2(_)), q$2(_, _, !1), I[p] = null);
		for (u.__e = w, p = T; p--;) null != I[p] && ("function" == typeof u.type && null != I[p].__e && I[p].__e == u.__d && (u.__d = I[p].__e.nextSibling), q$2(I[p], I[p]));
	}
	function $$2(n, l, u) {
		for (var t, i = n.__k, o = 0; i && o < i.length; o++) (t = i[o]) && (t.__ = n, l = "function" == typeof t.type ? $$2(t, l, u) : S(u, t.__e, l));
		return l;
	}
	function C$2(n, l) {
		return l = l || [], null == n || "boolean" == typeof n || (h$1(n) ? n.some(function(n) {
			C$2(n, l);
		}) : l.push(n)), l;
	}
	function S(n, l, u) {
		return null == u || u.parentNode !== n ? n.insertBefore(l, null) : l == u && null != l.parentNode || n.insertBefore(l, u), l.nextSibling;
	}
	function A(n, l, u, t) {
		var i = n.key, o = n.type, r = u - 1, f = u + 1, e = l[u];
		if (null === e || e && i == e.key && o === e.type) return u;
		if (t > (null != e ? 1 : 0)) for (; r >= 0 || f < l.length;) {
			if (r >= 0) {
				if ((e = l[r]) && i == e.key && o === e.type) return r;
				r--;
			}
			if (f < l.length) {
				if ((e = l[f]) && i == e.key && o === e.type) return f;
				f++;
			}
		}
		return -1;
	}
	function H$2(n, l, u, t, i) {
		var o;
		for (o in u) "children" === o || "key" === o || o in l || T$2(n, o, null, u[o], t);
		for (o in l) i && "function" != typeof l[o] || "children" === o || "key" === o || "value" === o || "checked" === o || u[o] === l[o] || T$2(n, o, l[o], u[o], t);
	}
	function I$1(n, l, u) {
		"-" === l[0] ? n.setProperty(l, null == u ? "" : u) : n[l] = null == u ? "" : "number" != typeof u || a$1.test(l) ? u : u + "px";
	}
	function T$2(n, l, u, t, i) {
		var o;
		n: if ("style" === l) if ("string" == typeof u) n.style.cssText = u;
		else {
			if ("string" == typeof t && (n.style.cssText = t = ""), t) for (l in t) u && l in u || I$1(n.style, l, "");
			if (u) for (l in u) t && u[l] === t[l] || I$1(n.style, l, u[l]);
		}
		else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/, "$1")), l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = u, u ? t || n.addEventListener(l, o ? z$2 : j$2, o) : n.removeEventListener(l, o ? z$2 : j$2, o);
		else if ("dangerouslySetInnerHTML" !== l) {
			if (i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
			else if ("width" !== l && "height" !== l && "href" !== l && "list" !== l && "form" !== l && "tabIndex" !== l && "download" !== l && "rowSpan" !== l && "colSpan" !== l && l in n) try {
				n[l] = null == u ? "" : u;
				break n;
			} catch (n) {}
			"function" == typeof u || (null == u || !1 === u && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, u));
		}
	}
	function j$2(n) {
		return this.l[n.type + !1](l$1.event ? l$1.event(n) : n);
	}
	function z$2(n) {
		return this.l[n.type + !0](l$1.event ? l$1.event(n) : n);
	}
	function L$1(n, u, t, i, o, r, f, e, c, s) {
		var a, p, y, d, _, g, m, w, x, $, C, S, A, H, I, T = u.type;
		if (void 0 !== u.constructor) return null;
		null != t.__h && (c = t.__h, e = u.__e = t.__e, u.__h = null, r = [e]), (a = l$1.__b) && a(u);
		n: if ("function" == typeof T) try {
			if (w = u.props, x = (a = T.contextType) && i[a.__c], $ = a ? x ? x.props.value : a.__ : i, t.__c ? m = (p = u.__c = t.__c).__ = p.__E : ("prototype" in T && T.prototype.render ? u.__c = p = new T(w, $) : (u.__c = p = new b$1(w, $), p.constructor = T, p.render = B$2), x && x.sub(p), p.props = w, p.state || (p.state = {}), p.context = $, p.__n = i, y = p.__d = !0, p.__h = [], p._sb = []), p.__s ?? (p.__s = p.state), null != T.getDerivedStateFromProps && (p.__s == p.state && (p.__s = v$1({}, p.__s)), v$1(p.__s, T.getDerivedStateFromProps(w, p.__s))), d = p.props, _ = p.state, p.__v = u, y) null == T.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
			else {
				if (null == T.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, $), !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, $) || u.__v === t.__v)) {
					for (u.__v !== t.__v && (p.props = w, p.state = p.__s, p.__d = !1), u.__e = t.__e, u.__k = t.__k, u.__k.forEach(function(n) {
						n && (n.__ = u);
					}), C = 0; C < p._sb.length; C++) p.__h.push(p._sb[C]);
					p._sb = [], p.__h.length && f.push(p);
					break n;
				}
				null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, $), null != p.componentDidUpdate && p.__h.push(function() {
					p.componentDidUpdate(d, _, g);
				});
			}
			if (p.context = $, p.props = w, p.__P = n, p.__e = !1, S = l$1.__r, A = 0, "prototype" in T && T.prototype.render) {
				for (p.state = p.__s, p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), H = 0; H < p._sb.length; H++) p.__h.push(p._sb[H]);
				p._sb = [];
			} else do
				p.__d = !1, S && S(u), a = p.render(p.props, p.state, p.context), p.state = p.__s;
			while (p.__d && ++A < 25);
			p.state = p.__s, null != p.getChildContext && (i = v$1(v$1({}, i), p.getChildContext())), y || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(d, _)), P$1(n, h$1(I = null != a && a.type === k$1 && null == a.key ? a.props.children : a) ? I : [I], u, t, i, o, r, f, e, c, s), p.base = u.__e, u.__h = null, p.__h.length && f.push(p), m && (p.__E = p.__ = null);
		} catch (n) {
			u.__v = null, (c || null != r) && (u.__e = e, u.__h = !!c, r[r.indexOf(e)] = null), l$1.__e(n, u, t);
		}
		else null == r && u.__v === t.__v ? (u.__k = t.__k, u.__e = t.__e) : u.__e = N$2(t.__e, u, t, i, o, r, f, c, s);
		(a = l$1.diffed) && a(u);
	}
	function M(n, u, t) {
		for (var i = 0; i < t.length; i++) O(t[i], t[++i], t[++i]);
		l$1.__c && l$1.__c(u, n), n.some(function(u) {
			try {
				n = u.__h, u.__h = [], n.some(function(n) {
					n.call(u);
				});
			} catch (n) {
				l$1.__e(n, u.__v);
			}
		});
	}
	function N$2(l, u, t, i, o, r, f, e, s) {
		var a, v, y, d = t.props, _ = u.props, k = u.type, b = 0;
		if ("svg" === k && (o = !0), null != r) {
			for (; b < r.length; b++) if ((a = r[b]) && "setAttribute" in a == !!k && (k ? a.localName === k : 3 === a.nodeType)) {
				l = a, r[b] = null;
				break;
			}
		}
		if (null == l) {
			if (null === k) return document.createTextNode(_);
			l = o ? document.createElementNS("http://www.w3.org/2000/svg", k) : document.createElement(k, _.is && _), r = null, e = !1;
		}
		if (null === k) d === _ || e && l.data === _ || (l.data = _);
		else {
			if (r = r && n.call(l.childNodes), v = (d = t.props || c$1).dangerouslySetInnerHTML, y = _.dangerouslySetInnerHTML, !e) {
				if (null != r) for (d = {}, b = 0; b < l.attributes.length; b++) d[l.attributes[b].name] = l.attributes[b].value;
				(y || v) && (y && (v && y.__html == v.__html || y.__html === l.innerHTML) || (l.innerHTML = y && y.__html || ""));
			}
			if (H$2(l, _, d, o, e), y) u.__k = [];
			else if (P$1(l, h$1(b = u.props.children) ? b : [b], u, t, i, o && "foreignObject" !== k, r, f, r ? r[0] : t.__k && g$2(t, 0), e, s), null != r) for (b = r.length; b--;) null != r[b] && p$1(r[b]);
			e || ("value" in _ && void 0 !== (b = _.value) && (b !== l.value || "progress" === k && !b || "option" === k && b !== d.value) && T$2(l, "value", b, d.value, !1), "checked" in _ && void 0 !== (b = _.checked) && b !== l.checked && T$2(l, "checked", b, d.checked, !1));
		}
		return l;
	}
	function O(n, u, t) {
		try {
			"function" == typeof n ? n(u) : n.current = u;
		} catch (n) {
			l$1.__e(n, t);
		}
	}
	function q$2(n, u, t) {
		var i, o;
		if (l$1.unmount && l$1.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || O(i, null, u)), null != (i = n.__c)) {
			if (i.componentWillUnmount) try {
				i.componentWillUnmount();
			} catch (n) {
				l$1.__e(n, u);
			}
			i.base = i.__P = null, n.__c = void 0;
		}
		if (i = n.__k) for (o = 0; o < i.length; o++) i[o] && q$2(i[o], u, t || "function" != typeof n.type);
		t || null == n.__e || p$1(n.__e), n.__ = n.__e = n.__d = void 0;
	}
	function B$2(n, l, u) {
		return this.constructor(n, u);
	}
	function D$1(u, t, i) {
		var o, r, f, e;
		l$1.__ && l$1.__(u, t), r = (o = "function" == typeof i) ? null : i && i.__k || t.__k, f = [], e = [], L$1(t, u = (!o && i || t).__k = y$1(k$1, null, [u]), r || c$1, c$1, void 0 !== t.ownerSVGElement, !o && i ? [i] : r ? null : t.firstChild ? n.call(t.childNodes) : null, f, !o && i ? i : r ? r.__e : t.firstChild, o, e), M(f, u, e);
	}
	function G$1(n, l) {
		var u = {
			__c: l = "__cC" + e$1++,
			__: n,
			Consumer: function(n, l) {
				return n.children(l);
			},
			Provider: function(n) {
				var u, t;
				return this.getChildContext || (u = [], (t = {})[l] = this, this.getChildContext = function() {
					return t;
				}, this.shouldComponentUpdate = function(n) {
					this.props.value !== n.value && u.some(function(n) {
						n.__e = !0, w$2(n);
					});
				}, this.sub = function(n) {
					u.push(n);
					var l = n.componentWillUnmount;
					n.componentWillUnmount = function() {
						u.splice(u.indexOf(n), 1), l && l.call(n);
					};
				}), n.children;
			}
		};
		return u.Provider.__ = u.Consumer.contextType = u;
	}
	n = s$1.slice, l$1 = { __e: function(n, l, u, t) {
		for (var i, o, r; l = l.__;) if ((i = l.__c) && !i.__) try {
			if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, t || {}), r = i.__d), r) return i.__E = i;
		} catch (l) {
			n = l;
		}
		throw n;
	} }, u$1 = 0, b$1.prototype.setState = function(n, l) {
		var u = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v$1({}, this.state);
		"function" == typeof n && (n = n(v$1({}, u), this.props)), n && v$1(u, n), null != n && this.__v && (l && this._sb.push(l), w$2(this));
	}, b$1.prototype.forceUpdate = function(n) {
		this.__v && (this.__e = !0, n && this.__h.push(n), w$2(this));
	}, b$1.prototype.render = k$1, i$1 = [], r$1 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$1 = function(n, l) {
		return n.__v.__b - l.__v.__b;
	}, x.__r = 0, e$1 = 0;
	var require_sentinel_umd = __commonJSMin(((exports, module) => {
		(function(root, factory) {
			if (typeof define === "function" && define.amd) define([], factory);
			else if (typeof exports === "object") module.exports = factory();
			else root.sentinel = factory();
		})(exports, function() {
			var isArray = Array.isArray, selectorToAnimationMap = {}, animationCallbacks = {}, styleEl, styleSheet, cssRules;
			return {
				on: function(cssSelectors, callback) {
					if (!callback) return;
					if (!styleEl) {
						var doc = document, head = doc.head;
						doc.addEventListener("animationstart", function(ev, callbacks, l, i) {
							callbacks = animationCallbacks[ev.animationName];
							if (!callbacks) return;
							ev.stopImmediatePropagation();
							l = callbacks.length;
							for (i = 0; i < l; i++) callbacks[i](ev.target);
						}, true);
						styleEl = doc.getElementById("sentinel-css");
						if (!styleEl) {
							styleEl = doc.createElement("style");
							head.insertBefore(styleEl, head.firstChild);
						}
						styleSheet = styleEl.sheet;
						cssRules = styleSheet.cssRules;
					}
					(isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, isCustomName) {
						animId = selectorToAnimationMap[selector];
						if (!animId) {
							isCustomName = selector[0] == "!";
							selectorToAnimationMap[selector] = animId = isCustomName ? selector.slice(1) : "sentinel-" + Math.random().toString(16).slice(2);
							cssRules[styleSheet.insertRule("@keyframes " + animId + "{from{transform:none;}to{transform:none;}}", cssRules.length)]._id = selector;
							if (!isCustomName) cssRules[styleSheet.insertRule(selector + "{animation-duration:0.0001s;animation-name:" + animId + ";}", cssRules.length)]._id = selector;
							selectorToAnimationMap[selector] = animId;
						}
						(animationCallbacks[animId] = animationCallbacks[animId] || []).push(callback);
					});
				},
				off: function(cssSelectors, callback) {
					(isArray(cssSelectors) ? cssSelectors : [cssSelectors]).map(function(selector, animId, callbackList, i) {
						if (!(animId = selectorToAnimationMap[selector])) return;
						callbackList = animationCallbacks[animId];
						if (callback) {
							i = callbackList.length;
							while (i--) if (callbackList[i] === callback) callbackList.splice(i, 1);
						} else callbackList = [];
						if (callbackList.length) return;
						i = cssRules.length;
						while (i--) if (cssRules[i]._id == selector) styleSheet.deleteRule(i);
						delete selectorToAnimationMap[selector];
						delete animationCallbacks[animId];
					});
				},
				reset: function() {
					selectorToAnimationMap = {};
					animationCallbacks = {};
					if (styleEl) styleEl.parentNode.removeChild(styleEl);
					styleEl = 0;
				}
			};
		});
	}));
	var require_dist = __commonJSMin(((exports) => {
		var __assign = exports && exports.__assign || function() {
			__assign = Object.assign || function(t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
			return __assign.apply(this, arguments);
		};
		Object.defineProperty(exports, "__esModule", { value: true });
		exports.join = exports.subst = exports.query = void 0;
		function urlcat(baseUrlOrTemplate, pathTemplateOrParams, maybeParams) {
			if (maybeParams === void 0) maybeParams = {};
			if (typeof pathTemplateOrParams === "string") {
				var baseUrl = baseUrlOrTemplate;
				var pathTemplate = pathTemplateOrParams;
				var params = maybeParams;
				return urlcatImpl(pathTemplate, params, baseUrl);
			} else {
				var baseTemplate = baseUrlOrTemplate;
				var params = pathTemplateOrParams;
				return urlcatImpl(baseTemplate, params);
			}
		}
		exports.default = urlcat;
		function urlcatImpl(pathTemplate, params, baseUrl) {
			var _a = path(pathTemplate, params), renderedPath = _a.renderedPath, remainingParams = _a.remainingParams;
			var pathAndQuery = join(renderedPath, "?", query(removeNullOrUndef(remainingParams)));
			return baseUrl ? join(baseUrl, "/", pathAndQuery) : pathAndQuery;
		}
		function query(params) {
			return new URLSearchParams(params).toString();
		}
		exports.query = query;
		function subst(template, params) {
			return path(template, params).renderedPath;
		}
		exports.subst = subst;
		function path(template, params) {
			var remainingParams = __assign({}, params);
			var allowedTypes = [
				"boolean",
				"string",
				"number"
			];
			return {
				renderedPath: template.replace(/:\w+/g, function(p) {
					var key = p.slice(1);
					if (/^\d+$/.test(key)) return p;
					if (!params.hasOwnProperty(key)) throw new Error("Missing value for path parameter " + key + ".");
					if (!allowedTypes.includes(typeof params[key])) throw new TypeError("Path parameter " + key + " cannot be of type " + typeof params[key] + ". " + ("Allowed types are: " + allowedTypes.join(", ") + "."));
					if (typeof params[key] === "string" && params[key].trim() === "") throw new Error("Path parameter " + key + " cannot be an empty string.");
					delete remainingParams[key];
					return encodeURIComponent(params[key]);
				}),
				remainingParams
			};
		}
		function join(part1, separator, part2) {
			var p1 = part1.endsWith(separator) ? part1.slice(0, -separator.length) : part1;
			var p2 = part2.startsWith(separator) ? part2.slice(separator.length) : part2;
			return p1 === "" || p2 === "" ? p1 + p2 : p1 + separator + p2;
		}
		exports.join = join;
		function removeNullOrUndef(params) {
			return Object.keys(params).filter(function(k) {
				return notNullOrUndefined(params[k]);
			}).reduce(function(result, k) {
				result[k] = params[k];
				return result;
			}, {});
		}
		function notNullOrUndefined(v) {
			return v !== void 0 && v !== null;
		}
	}));
	var import_sentinel_umd = __toESM(require_sentinel_umd(), 1);
	var import_dist = __toESM(require_dist(), 1);
	var API_MAPPING = {
		"https://chat.openai.com": "https://chat.openai.com/backend-api",
		"https://chatgpt.com": "https://chatgpt.com/backend-api"
	};
	var baseUrl = new URL(location.href).origin;
	var apiUrl = API_MAPPING[baseUrl];
	var KEY_LANGUAGE = "exporter:language";
	var KEY_FILENAME_FORMAT = "exporter:filename_format";
	var KEY_TIMESTAMP_ENABLED = "exporter:enable_timestamp";
	var KEY_TIMESTAMP_24H = "exporter:timestamp_24h";
	var KEY_TIMESTAMP_MARKDOWN = "exporter:timestamp_markdown";
	var KEY_TIMESTAMP_HTML = "exporter:timestamp_html";
	var KEY_META_ENABLED = "exporter:enable_meta";
	var KEY_META_LIST = "exporter:meta_list";
	var KEY_THINKING_ENABLED = "exporter:enable_thinking";
	var KEY_SOURCES_ENABLED = "exporter:enable_sources";
	var KEY_IMAGE_MODE = "exporter:image_mode";
	var KEY_EXPORT_ALL_LIMIT = "exporter:export_all_limit";
	var KEY_EXPORTED_UPDATE_TIMES = "exporter:exported_update_times";
	var _GM_deleteValue = (() => typeof GM_deleteValue != "undefined" ? GM_deleteValue : void 0)();
	var _GM_getValue = (() => typeof GM_getValue != "undefined" ? GM_getValue : void 0)();
	var _GM_setValue = (() => typeof GM_setValue != "undefined" ? GM_setValue : void 0)();
	var _unsafeWindow = (() => typeof unsafeWindow != "undefined" ? unsafeWindow : void 0)();
	function getBase64FromImg(el) {
		const canvas = document.createElement("canvas");
		canvas.width = el.naturalWidth;
		canvas.height = el.naturalHeight;
		const ctx = canvas.getContext("2d");
		if (!ctx) return "";
		ctx.drawImage(el, 0, 0);
		return canvas.toDataURL("image/png");
	}
	function blobToDataURL(blob) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onerror = reject;
			reader.onload = () => resolve(reader.result);
			reader.readAsDataURL(blob);
		});
	}
	function getChatIdFromUrl() {
		const match = location.pathname.match(/^\/(?:share(?:\/[a-z]+)?|c|g\/[a-z0-9-]+\/c)\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/i);
		if (match) return match[1];
		return null;
	}
	function isTemporaryChat() {
		return new URLSearchParams(location.search).get("temporary-chat") === "true";
	}
	function isSharePage() {
		return location.pathname.startsWith("/share") && !location.pathname.endsWith("/continue");
	}
	function getConversationFromSharePage() {
		if (_unsafeWindow.__reactRouterContext?.state?.loaderData?.["routes/share.$shareId.($action)"]?.serverResponse?.data) return JSON.parse(JSON.stringify(_unsafeWindow.__reactRouterContext.state.loaderData["routes/share.$shareId.($action)"].serverResponse.data));
		return null;
	}
	var defaultAvatar = "data:image/svg+xml,%3Csvg%20stroke%3D%22currentColor%22%20fill%3D%22none%22%20stroke-width%3D%221.5%22%20viewBox%3D%22-6%20-6%2036%2036%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20style%3D%22color%3A%20white%3B%20background%3A%20%23ab68ff%3B%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M20%2021v-2a4%204%200%200%200-4-4H8a4%204%200%200%200-4%204v2%22%3E%3C%2Fpath%3E%3Ccircle%20cx%3D%2212%22%20cy%3D%227%22%20r%3D%224%22%3E%3C%2Fcircle%3E%3C%2Fsvg%3E";
	async function getUserAvatar() {
		try {
			const avatar = Array.from(document.querySelectorAll("img[alt]:not([aria-hidden])")).find((avatar) => avatar.src.startsWith("https://cdn.auth0.com/avatars/"));
			if (avatar) return getBase64FromImg(avatar);
		} catch (e) {
			console.error(e);
		}
		return defaultAvatar;
	}
	function checkIfConversationStarted() {
		return Array.from(document.querySelectorAll(["[data-testid^=\"conversation-turn-\"]", "[data-chatgpt-conversation-selection-target] [data-chatgpt-search-message-ids]"].join(", "))).some((el) => el.offsetHeight > 0);
	}
	function isCompleteConversation(conversation) {
		return !!conversation?.mapping && !!conversation.current_node;
	}
	async function loadShareConversation(embedded, fetchFallback) {
		const conversation = isCompleteConversation(embedded) ? embedded : await fetchFallback();
		if (!isCompleteConversation(conversation)) throw new Error("Failed to load shared conversation data.");
		return conversation;
	}
	var CONVERSATION_STREAM_PATH = "/backend-api/f/conversation";
	var DATA_PREFIX = "data:";
	var MAX_SCAN_LENGTH = 2e5;
	var temporaryChatId = null;
	function getTemporaryChatId() {
		return temporaryChatId;
	}
	function checkIfTemporaryChatIsExportable() {
		return !isTemporaryChat() || temporaryChatId !== null;
	}
	function watchTemporaryChatId() {
		const originalFetch = _unsafeWindow.fetch;
		const logObserverError = (error) => {
			console.error("[Exporter] Failed to observe the temporary chat response", error);
		};
		const observeResponse = (response) => {
			try {
				if (!response.body) return;
				readConversationId(response.clone()).catch(logObserverError);
			} catch (error) {
				logObserverError(error);
			}
		};
		const ignoreFetchFailure = () => {};
		const canExportToPage = typeof exportFunction === "function";
		const pageResponseObserver = canExportToPage ? exportFunction(observeResponse, _unsafeWindow) : observeResponse;
		const pageFetchFailureHandler = canExportToPage ? exportFunction(ignoreFetchFailure, _unsafeWindow) : ignoreFetchFailure;
		const patchedFetch = (input, init) => {
			const response = originalFetch.call(_unsafeWindow, input, init);
			if (isTemporaryChat()) try {
				if ((typeof input === "string" ? input : input instanceof URL ? input.href : input.url).includes(CONVERSATION_STREAM_PATH)) response.then(pageResponseObserver, pageFetchFailureHandler);
			} catch (error) {
				logObserverError(error);
			}
			return response;
		};
		_unsafeWindow.fetch = typeof exportFunction === "function" ? exportFunction(patchedFetch, _unsafeWindow) : patchedFetch;
	}
	async function readConversationId(response) {
		const reader = response.body?.getReader();
		if (!reader) return;
		const decoder = new TextDecoder();
		let buffer = "";
		let scanned = 0;
		try {
			while (scanned < MAX_SCAN_LENGTH) {
				const { done, value } = await reader.read();
				if (done) break;
				const chunk = decoder.decode(value, { stream: true });
				scanned += chunk.length;
				buffer += chunk;
				const lines = buffer.split("\n");
				buffer = lines.pop() ?? "";
				const conversationId = findConversationId(lines);
				if (conversationId) {
					temporaryChatId = conversationId;
					break;
				}
			}
		} catch (error) {
			console.error("[Exporter] Failed to read the temporary chat id", error);
		} finally {
			reader.cancel().catch(() => {});
		}
	}
	function findConversationId(lines) {
		for (const line of lines) {
			if (!line.startsWith(DATA_PREFIX)) continue;
			const payload = line.slice(5).trim();
			if (!payload || payload === "[DONE]") continue;
			try {
				const { conversation_id: conversationId } = JSON.parse(payload);
				if (typeof conversationId === "string") return conversationId;
			} catch {}
		}
		return null;
	}
	var DB_NAME = "chatgpt-exporter";
	var STORE_NAME = "images";
	var EXPIRY_MS = 2592e6;
	var dbPromise = null;
	function promisify(request) {
		return new Promise((resolve, reject) => {
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}
	function openDb() {
		dbPromise ??= new Promise((resolve) => {
			const request = indexedDB.open(DB_NAME, 1);
			request.onupgradeneeded = () => {
				request.result.createObjectStore(STORE_NAME).createIndex("savedAt", "savedAt");
			};
			request.onsuccess = () => {
				pruneExpired(request.result);
				resolve(request.result);
			};
			request.onerror = () => resolve(null);
		}).catch(() => null);
		return dbPromise;
	}
	function pruneExpired(db) {
		try {
			const cursorRequest = db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).index("savedAt").openCursor(IDBKeyRange.upperBound(Date.now() - EXPIRY_MS));
			cursorRequest.onsuccess = () => {
				const cursor = cursorRequest.result;
				if (!cursor) return;
				cursor.delete();
				cursor.continue();
			};
		} catch (error) {
			console.warn("[Exporter] Failed to prune image cache", error);
		}
	}
	async function getCachedImage(pointer) {
		try {
			const db = await openDb();
			if (!db) return null;
			const entry = await promisify(db.transaction(STORE_NAME, "readonly").objectStore(STORE_NAME).get(pointer));
			if (!entry || Date.now() - entry.savedAt > EXPIRY_MS) return null;
			return entry.dataUrl;
		} catch {
			return null;
		}
	}
	async function setCachedImage(pointer, dataUrl) {
		try {
			const db = await openDb();
			if (!db) return;
			const entry = {
				dataUrl,
				savedAt: Date.now()
			};
			await promisify(db.transaction(STORE_NAME, "readwrite").objectStore(STORE_NAME).put(entry, pointer));
		} catch (error) {
			console.warn("[Exporter] Failed to cache image", error);
		}
	}
	var generateKey = (args) => JSON.stringify(args);
	function memorize(fn) {
		const cache = new Map();
		const memorized = (...args) => {
			const key = generateKey(args);
			if (cache.has(key)) return cache.get(key);
			const result = fn(...args);
			cache.set(key, result);
			return result;
		};
		return memorized;
	}
	var aliases = [["text-davinci-002", "GPT-3.5"], ["gpt-4-browsing", "GPT-4 (Browser)"]];
	function getModelName(slug) {
		const alias = aliases.find(([prefix]) => slug.startsWith(prefix));
		if (alias) return alias[1];
		const gpt = /^gpt-(\d+)(o)?(?:-(\d)(?=-|$))?/.exec(slug);
		if (gpt) {
			const [, major, omni = "", minor] = gpt;
			return `GPT-${major}${minor ? `.${minor}` : ""}${omni}`;
		}
		const reasoning = /^o\d+/.exec(slug);
		if (reasoning) return reasoning[0];
		return "";
	}
	var urlcat = typeof import_dist.default === "function" ? import_dist.default : import_dist.default.default;
	var sessionApi = urlcat(baseUrl, "/api/auth/session");
	var conversationApi = (id) => urlcat(apiUrl, "/conversation/:id", { id });
	var shareConversationApi = (id) => urlcat(apiUrl, "/share/:id", { id });
	var conversationsApi = (offset, limit) => urlcat(apiUrl, "/conversations", {
		offset,
		limit
	});
	var fileDownloadApi = (id) => urlcat(apiUrl, "/files/download/:id", {
		id,
		post_id: "",
		inline: false
	});
	var projectsApi = (cursor) => urlcat(apiUrl, "/gizmos/snorlax/sidebar", {
		conversations_per_gizmo: 0,
		cursor
	});
	var projectConversationsApi = (gizmo, cursor, limit) => urlcat(apiUrl, "/gizmos/:gizmo/conversations", {
		gizmo,
		cursor,
		limit
	});
	var accountsCheckApi = urlcat(apiUrl, "/accounts/check/v4-2023-04-27");
	async function getCurrentChatId() {
		if (isSharePage()) {
			const shareId = getChatIdFromUrl();
			if (!shareId) throw new Error("No share id found.");
			return `__share__${shareId}`;
		}
		if (isTemporaryChat()) {
			const temporaryChatId = getTemporaryChatId();
			if (!temporaryChatId) throw new Error("No temporary chat id found.");
			return temporaryChatId;
		}
		const chatId = getChatIdFromUrl();
		if (chatId) return chatId;
		const conversations = await fetchConversations();
		if (conversations && conversations.items.length > 0) return conversations.items[0].id;
		throw new Error("No chat id found.");
	}
	async function fetchImageFromPointer(uri) {
		const cached = await getCachedImage(uri);
		if (cached) return cached;
		const imageDetails = await fetchApi(fileDownloadApi(uri.replace("sediment://", "")));
		if (imageDetails.status === "error") {
			console.error("Failed to fetch image asset", imageDetails.error_code, imageDetails.error_message);
			return null;
		}
		const image = await fetch(imageDetails.download_url);
		const dataUrl = (await blobToDataURL(await image.blob())).replace(/^data:.*?;/, `data:${image.headers.get("content-type")};`);
		await setCachedImage(uri, dataUrl);
		return dataUrl;
	}
	async function withImageAssets(conversation) {
		const copy = structuredClone(conversation);
		await replaceImageAssets(copy);
		return copy;
	}
	function collectImageSources(conversation) {
		const isImagePart = (part) => {
			return typeof part === "object" && part !== null && part.content_type === "image_asset_pointer" && typeof part.asset_pointer === "string";
		};
		return Object.values(conversation.mapping).flatMap((node) => {
			const message = node.message;
			if (!message) return [];
			if (message.content.content_type === "multimodal_text") return (Array.isArray(message.content.parts) ? message.content.parts : []).filter(isImagePart).map((part) => ({
				src: part.asset_pointer,
				replace: (src) => {
					part.asset_pointer = src;
				}
			}));
			if (message.content.content_type === "execution_output") return (message.metadata?.aggregate_result?.messages ?? []).filter((msg) => msg.message_type === "image").map((msg) => ({
				src: msg.image_url,
				replace: (src) => {
					msg.image_url = src;
				}
			}));
			return [];
		});
	}
	var IMAGE_SOURCE_CONCURRENCY = 4;
	async function replaceImageSources(conversation, resolve) {
		const imagesBySrc = new Map();
		for (const image of collectImageSources(conversation)) {
			const images = imagesBySrc.get(image.src);
			if (images) images.push(image);
			else imagesBySrc.set(image.src, [image]);
		}
		const queue = Array.from(imagesBySrc.entries());
		let nextIndex = 0;
		const worker = async () => {
			while (nextIndex < queue.length) {
				const [src, images] = queue[nextIndex++];
				try {
					const newSrc = await resolve(src);
					if (newSrc) images.forEach((image) => image.replace(newSrc));
				} catch (error) {
					console.error("Failed to fetch image asset", error);
				}
			}
		};
		await Promise.all(Array.from({ length: Math.min(IMAGE_SOURCE_CONCURRENCY, queue.length) }, worker));
	}
	function replaceImageAssets(conversation) {
		return replaceImageSources(conversation, async (src) => {
			if (!src.startsWith("sediment://")) return null;
			return fetchImageFromPointer(src);
		});
	}
	async function fetchConversation(chatId) {
		if (chatId.startsWith("__share__")) {
			const id = chatId.replace("__share__", "");
			return {
				id,
				...await loadShareConversation(getConversationFromSharePage(), () => fetchApi(shareConversationApi(id)))
			};
		}
		return {
			id: chatId,
			...await fetchApi(conversationApi(chatId))
		};
	}
	async function fetchProjects() {
		let cursor = null;
		const allItems = [];
		while (true) {
			const { items, cursor: nextCursor = null } = await fetchApi(projectsApi(cursor));
			cursor = nextCursor;
			allItems.push(...items);
			if (nextCursor === null) break;
		}
		return allItems.map((gizmo) => gizmo.gizmo.gizmo);
	}
	async function fetchConversations(offset = 0, limit = 20, project = null) {
		if (project) return fetchProjectConversations(project, offset, limit);
		return fetchApi(conversationsApi(offset, limit));
	}
	async function fetchProjectConversations(project, cursor = 0, limit = 20) {
		const { items, cursor: nextCursor } = await fetchApi(projectConversationsApi(project, cursor, limit));
		return {
			has_missing_conversations: false,
			items,
			limit,
			offset: typeof cursor === "number" ? cursor : 0,
			total: null,
			cursor: nextCursor ?? null
		};
	}
	async function fetchConversationsPage(project, offset, limit) {
		return fetchConversations(offset, limit, project);
	}
	async function fetchAllConversations(project = null, maxConversations = 1e3, onBatch, onHasMore, onError) {
		const conversations = [];
		const limit = project === null ? 100 : 50;
		let offset = 0;
		let cursor = 0;
		while (true) try {
			const result = project === null ? await fetchConversations(offset, limit) : await fetchProjectConversations(project, cursor, limit);
			if (!result.items) {
				console.warn("fetchAllConversations received no items at offset:", offset);
				break;
			}
			conversations.push(...result.items);
			if (result.items.length === 0) break;
			onBatch?.(result.items);
			if (result.total == null && result.cursor == null) break;
			if (result.total !== null && offset + limit >= result.total) break;
			if (conversations.length >= maxConversations) break;
			if (result.cursor != null) cursor = result.cursor;
			else offset += limit;
		} catch (error) {
			console.error("Error fetching conversations batch:", error);
			onError?.(error);
			break;
		}
		const result = conversations.slice(0, maxConversations);
		onHasMore?.(result.length >= maxConversations);
		return result;
	}
	var RateLimitError = class extends Error {
		retryAfterMs;
		retryAfterFromServer;
		constructor(retryAfterHeader) {
			super("Too Many Requests (429)");
			this.name = "RateLimitError";
			const secs = retryAfterHeader != null ? Number.parseInt(retryAfterHeader, 10) : NaN;
			this.retryAfterFromServer = Number.isFinite(secs) && secs > 0;
			this.retryAfterMs = this.retryAfterFromServer ? secs * 1e3 : 3e4;
		}
	};
	var RATE_LIMIT_HEADERS = [
		"retry-after",
		"x-ratelimit-limit-requests",
		"x-ratelimit-remaining-requests",
		"x-ratelimit-reset-requests",
		"x-ratelimit-limit-tokens",
		"x-ratelimit-remaining-tokens",
		"x-ratelimit-reset-tokens"
	];
	function logRateLimitHeaders(response) {
		const found = {};
		for (const h of RATE_LIMIT_HEADERS) {
			const val = response.headers.get(h);
			if (val != null) found[h] = val;
		}
		if (Object.keys(found).length > 0) console.info("[Exporter] Rate-limit headers:", found);
	}
	async function fetchApi(url, options) {
		const accessToken = await getAccessToken();
		const accountId = await getTeamAccountId();
		const response = await fetch(url, {
			...options,
			headers: {
				"Authorization": `Bearer ${accessToken}`,
				"X-Authorization": `Bearer ${accessToken}`,
				...accountId ? { "Chatgpt-Account-Id": accountId } : {},
				...options?.headers
			}
		});
		logRateLimitHeaders(response);
		if (!response.ok) {
			if (response.status === 429) throw new RateLimitError(response.headers.get("Retry-After"));
			throw new Error(response.statusText);
		}
		return response.json();
	}
	async function probeApi() {
		const accessToken = await getAccessToken();
		const accountId = await getTeamAccountId();
		const url = conversationsApi(0, 1);
		const response = await fetch(url, { headers: {
			"Authorization": `Bearer ${accessToken}`,
			"X-Authorization": `Bearer ${accessToken}`,
			...accountId ? { "Chatgpt-Account-Id": accountId } : {}
		} });
		const rateLimitHeaders = {};
		for (const h of RATE_LIMIT_HEADERS) {
			const val = response.headers.get(h);
			if (val != null) rateLimitHeaders[h] = val;
		}
		if (!response.ok) {
			if (response.status === 429) {
				const secs = response.headers.get("retry-after");
				return {
					ok: false,
					retryAfterMs: secs ? Number.parseInt(secs, 10) * 1e3 : 6e4,
					rateLimitHeaders
				};
			}
			return {
				ok: false,
				rateLimitHeaders
			};
		}
		return {
			ok: true,
			rateLimitHeaders
		};
	}
	async function _fetchSession() {
		const response = await fetch(sessionApi);
		if (!response.ok) throw new Error(response.statusText);
		return response.json();
	}
	var fetchSession = memorize(_fetchSession);
	async function getAccessToken() {
		return (await fetchSession()).accessToken;
	}
	async function _fetchAccountsCheck() {
		const accessToken = await getAccessToken();
		const response = await fetch(accountsCheckApi, { headers: {
			"Authorization": `Bearer ${accessToken}`,
			"X-Authorization": `Bearer ${accessToken}`
		} });
		if (!response.ok) throw new Error(response.statusText);
		return response.json();
	}
	var fetchAccountsCheck = memorize(_fetchAccountsCheck);
	var getCookie = (key) => document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)?.pop() || "";
	async function getTeamAccountId() {
		const accountsCheck = await fetchAccountsCheck();
		const workspaceId = getCookie("_account");
		if (workspaceId) {
			const account = accountsCheck.accounts[workspaceId];
			if (account) return account.account.account_id;
		}
		return null;
	}
	function getFileAttachmentNames(message) {
		return (message.metadata?.attachments ?? []).filter((attachment) => attachment.name && !attachment.mime_type?.startsWith("image/")).map((attachment) => attachment.name);
	}
	function shouldSkipMessageInExport(message) {
		if (!message || !message.content) return true;
		if (message.recipient != null && message.recipient !== "all") return true;
		if (message.content.content_type === "thoughts") return true;
		if (message.content.content_type === "reasoning_recap") return true;
		if (message.metadata?.is_visually_hidden_from_conversation) return true;
		if (message.metadata?.is_thinking_preamble_message) return true;
		if (message.author.role === "assistant" && message.content.content_type === "text" && !message.content.parts.join("").trim()) return true;
		if (message.author.role === "tool") {
			if (message.author.name === "file_search") return true;
			const hasExecutionImages = message.content.content_type === "execution_output" && !!message.metadata?.aggregate_result?.messages?.some((msg) => msg.message_type === "image");
			const hasMultimodalImage = message.content.content_type === "multimodal_text" && message.content.parts.some((part) => {
				return typeof part !== "string" && part.content_type === "image_asset_pointer";
			});
			if (!hasExecutionImages && !hasMultimodalImage) return true;
		}
		return false;
	}
	function processConversation(conversation, options) {
		const title = conversation.title || "ChatGPT Conversation";
		const createTime = conversation.create_time;
		const updateTime = conversation.update_time;
		const startNodeId = conversation.current_node || Object.values(conversation.mapping).find((node) => !node.children || node.children.length === 0)?.id;
		if (!startNodeId) throw new Error("Failed to find start node.");
		const conversationNodes = extractConversationResult(conversation.mapping, startNodeId);
		const { model, modelSlug } = extractModel(conversation.mapping, conversationNodes);
		const mergedConversationNodes = mergeContinuationNodes(conversationNodes);
		if (options?.enableThinking) attachThinkingToNodes(conversation.mapping, mergedConversationNodes, startNodeId);
		return {
			id: conversation.id,
			title,
			model,
			modelSlug,
			createTime,
			updateTime,
			conversationNodes: mergedConversationNodes
		};
	}
	function extractModel(conversationMapping, conversationNodes) {
		const modelSlug = (conversationNodes.findLast((node) => node.message?.metadata?.model_slug) ?? Object.values(conversationMapping).find((node) => node.message?.metadata?.model_slug))?.message?.metadata?.model_slug ?? "";
		return {
			model: getModelName(modelSlug),
			modelSlug
		};
	}
	function extractConversationResult(conversationMapping, startNodeId) {
		const result = [];
		let currentNodeId = startNodeId;
		while (currentNodeId) {
			const node = conversationMapping[currentNodeId];
			if (!node) break;
			if (node.parent === void 0) break;
			if (node.message?.author.role !== "system" && node.message?.content.content_type !== "model_editable_context" && node.message?.content.content_type !== "user_editable_context" && !shouldSkipMessageInExport(node.message)) result.unshift(copyNode(node));
			currentNodeId = node.parent;
		}
		return result;
	}
	function copyNode(node) {
		const { message } = node;
		if (!message) return { ...node };
		const content = message.content.content_type === "text" ? {
			...message.content,
			parts: getInteractiveFallbackParts(message) ?? [...message.content.parts]
		} : message.content;
		return {
			...node,
			message: {
				...message,
				content,
				metadata: message.metadata && { ...message.metadata }
			}
		};
	}
	function getInteractiveFallbackParts(message) {
		const markdown = message.metadata?.model_dil_v2?.fallbackMarkdown;
		if (typeof markdown !== "string" || !markdown.trim() || message.content.content_type !== "text") return null;
		const markup = message.content.parts.join("");
		const leading = markup.slice(0, markup.length - markup.trimStart().length);
		const trailing = markup.slice(markup.trimEnd().length);
		return [leading + markdown.replaceAll(/<escape>([\s\S]*?)<\/escape>/g, "$1") + trailing];
	}
	function mergeContinuationNodes(nodes) {
		const result = [];
		for (const node of nodes) {
			const prevNode = result[result.length - 1];
			if (prevNode?.message?.author.role === "assistant" && node.message?.author.role === "assistant" && prevNode.message.recipient === "all" && node.message.recipient === "all" && prevNode.message.content.content_type === "text" && node.message.content.content_type === "text") {
				const separator = prevNode.message.channel !== node.message.channel ? "\n\n" : "";
				prevNode.message.content.parts[prevNode.message.content.parts.length - 1] += separator + node.message.content.parts[0];
				prevNode.message.content.parts.push(...node.message.content.parts.slice(1));
				if (node.message.metadata) {
					const prevMeta = prevNode.message.metadata ??= {};
					if (node.message.metadata.citations?.length) prevMeta.citations = [...prevMeta.citations || [], ...node.message.metadata.citations];
					if (node.message.metadata.content_references?.length) prevMeta.content_references = [...prevMeta.content_references || [], ...node.message.metadata.content_references];
				}
			} else result.push(node);
		}
		return result;
	}
	function hasThinkingContent(thinking) {
		return thinking.thoughts.length > 0 || thinking.activities != null && thinking.activities.length > 0;
	}
	function attachThinkingToNodes(mapping, resultNodes, startNodeId) {
		const resultNodeIds = new Set(resultNodes.map((n) => n.id));
		let currentNodeId = startNodeId;
		let targetNodeId = null;
		let thinking = { thoughts: [] };
		while (currentNodeId) {
			const node = mapping[currentNodeId];
			if (!node || node.parent === void 0) break;
			const message = node.message;
			if (message?.content) {
				const ct = message.content.content_type;
				if (resultNodeIds.has(node.id) && message.author.role !== "user") {
					if (hasThinkingContent(thinking)) {
						const saveToId = targetNodeId ?? node.id;
						const target = resultNodes.find((n) => n.id === saveToId);
						if (target) target.thinking = thinking;
					}
					targetNodeId = node.id;
					thinking = { thoughts: [] };
				} else if (ct === "reasoning_recap") {
					const duration = message.metadata?.finished_duration_sec;
					if (typeof duration === "number") thinking.durationSeconds = duration;
					else {
						const match = message.content.content.match(/(\d+)/);
						if (match) thinking.durationSeconds = Number.parseInt(match[1]);
					}
				} else if (ct === "thoughts") thinking.thoughts.unshift(...message.content.thoughts.filter((thought) => thought.content || thought.summary).map((thought) => ({
					summary: thought.summary,
					content: thought.content
				})));
				else if (ct === "text" && message.metadata?.is_thinking_preamble_message) {
					const content = message.content.parts.join("\n");
					if (content) thinking.thoughts.unshift({
						summary: "",
						content
					});
				} else if (message.metadata?.reasoning_title) {
					if (!thinking.activities) thinking.activities = [];
					const title = message.metadata.reasoning_title;
					const index = thinking.activities.indexOf(title);
					if (index !== -1) thinking.activities.splice(index, 1);
					thinking.activities.unshift(title);
				} else if (message.author.role === "user" && !message.metadata?.is_visually_hidden_from_conversation) {
					if (targetNodeId && hasThinkingContent(thinking)) {
						const target = resultNodes.find((n) => n.id === targetNodeId);
						if (target) target.thinking = thinking;
					}
					targetNodeId = null;
					thinking = { thoughts: [] };
				}
			}
			currentNodeId = node.parent;
		}
		if (targetNodeId && hasThinkingContent(thinking)) {
			const target = resultNodes.find((n) => n.id === targetNodeId);
			if (target) target.thinking = thinking;
		}
	}
	var t$1;
	var r;
	var u;
	var i;
	var o$1 = 0;
	var f = [];
	var c = [];
	var e = l$1.__b;
	var a = l$1.__r;
	var v = l$1.diffed;
	var l = l$1.__c;
	var m = l$1.unmount;
	function d(t, u) {
		l$1.__h && l$1.__h(r, t, o$1 || u), o$1 = 0;
		var i = r.__H || (r.__H = {
			__: [],
			__h: []
		});
		return t >= i.__.length && i.__.push({ __V: c }), i.__[t];
	}
	function h(n) {
		return o$1 = 1, s(B$1, n);
	}
	function s(n, u, i) {
		var o = d(t$1++, 2);
		if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B$1(void 0, u), function(n) {
			var t = o.__N ? o.__N[0] : o.__[0], r = o.t(t, n);
			t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
		}], o.__c = r, !r.u)) {
			var f = function(n, t, r) {
				if (!o.__c.__H) return !0;
				var u = o.__c.__H.__.filter(function(n) {
					return n.__c;
				});
				if (u.every(function(n) {
					return !n.__N;
				})) return !c || c.call(this, n, t, r);
				var i = !1;
				return u.forEach(function(n) {
					if (n.__N) {
						var t = n.__[0];
						n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
					}
				}), !(!i && o.__c.props === n) && (!c || c.call(this, n, t, r));
			};
			r.u = !0;
			var c = r.shouldComponentUpdate, e = r.componentWillUpdate;
			r.componentWillUpdate = function(n, t, r) {
				if (this.__e) {
					var u = c;
					c = void 0, f(n, t, r), c = u;
				}
				e && e.call(this, n, t, r);
			}, r.shouldComponentUpdate = f;
		}
		return o.__N || o.__;
	}
	function p(u, i) {
		var o = d(t$1++, 3);
		!l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
	}
	function y(u, i) {
		var o = d(t$1++, 4);
		!l$1.__s && z$1(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
	}
	function _$2(n) {
		return o$1 = 5, F$1(function() {
			return { current: n };
		}, []);
	}
	function F$1(n, r) {
		var u = d(t$1++, 7);
		return z$1(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
	}
	function T$1(n, t) {
		return o$1 = 8, F$1(function() {
			return n;
		}, t);
	}
	function q$1(n) {
		var u = r.context[n.__c], i = d(t$1++, 9);
		return i.c = n, u ? (i.__ ?? (i.__ = !0, u.sub(r)), u.props.value) : n.__;
	}
	function V$1() {
		var n = d(t$1++, 11);
		if (!n.__) {
			for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
			var i = u.__m || (u.__m = [0, 0]);
			n.__ = "P" + i[0] + "-" + i[1]++;
		}
		return n.__;
	}
	function b() {
		for (var t; t = f.shift();) if (t.__P && t.__H) try {
			t.__H.__h.forEach(k), t.__H.__h.forEach(w$1), t.__H.__h = [];
		} catch (r) {
			t.__H.__h = [], l$1.__e(r, t.__v);
		}
	}
	l$1.__b = function(n) {
		r = null, e && e(n);
	}, l$1.__r = function(n) {
		a && a(n), t$1 = 0;
		var i = (r = n.__c).__H;
		i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function(n) {
			n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
		})) : (i.__h.forEach(k), i.__h.forEach(w$1), i.__h = [], t$1 = 0)), u = r;
	}, l$1.diffed = function(t) {
		v && v(t);
		var o = t.__c;
		o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === l$1.requestAnimationFrame || ((i = l$1.requestAnimationFrame) || j$1)(b)), o.__H.__.forEach(function(n) {
			n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
		})), u = r = null;
	}, l$1.__c = function(t, r) {
		r.some(function(t) {
			try {
				t.__h.forEach(k), t.__h = t.__h.filter(function(n) {
					return !n.__ || w$1(n);
				});
			} catch (u) {
				r.some(function(n) {
					n.__h && (n.__h = []);
				}), r = [], l$1.__e(u, t.__v);
			}
		}), l && l(t, r);
	}, l$1.unmount = function(t) {
		m && m(t);
		var r, u = t.__c;
		u && u.__H && (u.__H.__.forEach(function(n) {
			try {
				k(n);
			} catch (n) {
				r = n;
			}
		}), u.__H = void 0, r && l$1.__e(r, u.__v));
	};
	var g$1 = "function" == typeof requestAnimationFrame;
	function j$1(n) {
		var t, r = function() {
			clearTimeout(u), g$1 && cancelAnimationFrame(t), setTimeout(n);
		}, u = setTimeout(r, 100);
		g$1 && (t = requestAnimationFrame(r));
	}
	function k(n) {
		var t = r, u = n.__c;
		"function" == typeof u && (n.__c = void 0, u()), r = t;
	}
	function w$1(n) {
		var t = r;
		n.__c = n.__(), r = t;
	}
	function z$1(n, t) {
		return !n || n.length !== t.length || t.some(function(t, r) {
			return t !== n[r];
		});
	}
	function B$1(n, t) {
		return "function" == typeof t ? t(n) : t;
	}
	function g(n, t) {
		for (var e in t) n[e] = t[e];
		return n;
	}
	function C$1(n, t) {
		for (var e in n) if ("__source" !== e && !(e in t)) return !0;
		for (var r in t) if ("__source" !== r && n[r] !== t[r]) return !0;
		return !1;
	}
	function E(n, t) {
		return n === t && (0 !== n || 1 / n == 1 / t) || n != n && t != t;
	}
	function w(n) {
		this.props = n;
	}
	(w.prototype = new b$1()).isPureReactComponent = !0, w.prototype.shouldComponentUpdate = function(n, t) {
		return C$1(this.props, n) || C$1(this.state, t);
	};
	var R = l$1.__b;
	l$1.__b = function(n) {
		n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), R && R(n);
	};
	"undefined" != typeof Symbol && Symbol.for;
	var T = l$1.__e;
	l$1.__e = function(n, t, e, r) {
		if (n.then) {
			for (var u, o = t; o = o.__;) if ((u = o.__c) && u.__c) return t.__e ?? (t.__e = e.__e, t.__k = e.__k), u.__c(n, t);
		}
		T(n, t, e, r);
	};
	var F = l$1.unmount;
	function I(n, t, e) {
		return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n) {
			"function" == typeof n.__c && n.__c();
		}), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), n.__c = null), n.__k = n.__k && n.__k.map(function(n) {
			return I(n, t, e);
		})), n;
	}
	function L(n, t, e) {
		return n && (n.__v = null, n.__k = n.__k && n.__k.map(function(n) {
			return L(n, t, e);
		}), n.__c && n.__c.__P === t && (n.__e && e.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = e)), n;
	}
	function U() {
		this.__u = 0, this.t = null, this.__b = null;
	}
	function D(n) {
		var t = n.__.__c;
		return t && t.__a && t.__a(n);
	}
	function V() {
		this.u = null, this.o = null;
	}
	l$1.unmount = function(n) {
		var t = n.__c;
		t && t.__R && t.__R(), t && !0 === n.__h && (n.type = null), F && F(n);
	}, (U.prototype = new b$1()).__c = function(n, t) {
		var e = t.__c, r = this;
		r.t ??= [], r.t.push(e);
		var u = D(r.__v), o = !1, i = function() {
			o || (o = !0, e.__R = null, u ? u(l) : l());
		};
		e.__R = i;
		var l = function() {
			if (!--r.__u) {
				if (r.state.__a) {
					var n = r.state.__a;
					r.__v.__k[0] = L(n, n.__c.__P, n.__c.__O);
				}
				var t;
				for (r.setState({ __a: r.__b = null }); t = r.t.pop();) t.forceUpdate();
			}
		}, c = !0 === t.__h;
		r.__u++ || c || r.setState({ __a: r.__b = r.__v.__k[0] }), n.then(i, i);
	}, U.prototype.componentWillUnmount = function() {
		this.t = [];
	}, U.prototype.render = function(n, e) {
		if (this.__b) {
			if (this.__v.__k) {
				var r = document.createElement("div"), o = this.__v.__k[0].__c;
				this.__v.__k[0] = I(this.__b, r, o.__O = o.__P);
			}
			this.__b = null;
		}
		var i = e.__a && y$1(k$1, null, n.fallback);
		return i && (i.__h = null), [y$1(k$1, null, e.__a ? null : n.children), i];
	};
	var W = function(n, t, e) {
		if (++e[1] === e[0] && n.o.delete(t), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.o.size)) for (e = n.u; e;) {
			for (; e.length > 3;) e.pop()();
			if (e[1] < e[0]) break;
			n.u = e = e[2];
		}
	};
	function P(n) {
		return this.getChildContext = function() {
			return n.context;
		}, n.children;
	}
	function j(n) {
		var e = this, r = n.i;
		e.componentWillUnmount = function() {
			D$1(null, e.l), e.l = null, e.i = null;
		}, e.i && e.i !== r && e.componentWillUnmount(), e.l || (e.i = r, e.l = {
			nodeType: 1,
			parentNode: r,
			childNodes: [],
			appendChild: function(n) {
				this.childNodes.push(n), e.i.appendChild(n);
			},
			insertBefore: function(n, t) {
				this.childNodes.push(n), e.i.appendChild(n);
			},
			removeChild: function(n) {
				this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), e.i.removeChild(n);
			}
		}), D$1(y$1(P, { context: e.context }, n.__v), e.l);
	}
	function z(n, e) {
		var r = y$1(j, {
			__v: n,
			i: e
		});
		return r.containerInfo = e, r;
	}
	(V.prototype = new b$1()).__a = function(n) {
		var t = this, e = D(t.__v), r = t.o.get(n);
		return r[0]++, function(u) {
			var o = function() {
				t.props.revealOrder ? (r.push(u), W(t, n, r)) : u();
			};
			e ? e(o) : o();
		};
	}, V.prototype.render = function(n) {
		this.u = null, this.o = new Map();
		var t = C$2(n.children);
		n.revealOrder && "b" === n.revealOrder[0] && t.reverse();
		for (var e = t.length; e--;) this.o.set(t[e], this.u = [
			1,
			0,
			this.u
		]);
		return n.children;
	}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
		var n = this;
		this.o.forEach(function(t, e) {
			W(n, e, t);
		});
	};
	var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
	var H$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
	var Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
	var Y$1 = /[A-Z0-9]/g;
	var $$1 = "undefined" != typeof document;
	var q = function(n) {
		return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
	};
	b$1.prototype.isReactComponent = {}, [
		"componentWillMount",
		"componentWillReceiveProps",
		"componentWillUpdate"
	].forEach(function(t) {
		Object.defineProperty(b$1.prototype, t, {
			configurable: !0,
			get: function() {
				return this["UNSAFE_" + t];
			},
			set: function(n) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: n
				});
			}
		});
	});
	var K$1 = l$1.event;
	function Q() {}
	function X() {
		return this.cancelBubble;
	}
	function nn$1() {
		return this.defaultPrevented;
	}
	l$1.event = function(n) {
		return K$1 && (n = K$1(n)), n.persist = Q, n.isPropagationStopped = X, n.isDefaultPrevented = nn$1, n.nativeEvent = n;
	};
	var en$1 = {
		enumerable: !1,
		configurable: !0,
		get: function() {
			return this.class;
		}
	};
	var rn$1 = l$1.vnode;
	l$1.vnode = function(n) {
		"string" == typeof n.type && function(n) {
			var t = n.props, e = n.type, u = {};
			for (var o in t) {
				var i = t[o];
				if (!("value" === o && "defaultValue" in t && null == i || $$1 && "children" === o && "noscript" === e || "class" === o || "className" === o)) {
					var l = o.toLowerCase();
					"defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === l ? o = "ondblclick" : "onchange" !== l || "input" !== e && "textarea" !== e || q(t.type) ? "onfocus" === l ? o = "onfocusin" : "onblur" === l ? o = "onfocusout" : Z.test(o) ? o = l : -1 === e.indexOf("-") && H$1.test(o) ? o = o.replace(Y$1, "-$&").toLowerCase() : null === i && (i = void 0) : l = o = "oninput", "oninput" === l && u[o = l] && (o = "oninputCapture"), u[o] = i;
				}
			}
			"select" == e && u.multiple && Array.isArray(u.value) && (u.value = C$2(t.children).forEach(function(n) {
				n.props.selected = -1 != u.value.indexOf(n.props.value);
			})), "select" == e && null != u.defaultValue && (u.value = C$2(t.children).forEach(function(n) {
				n.props.selected = u.multiple ? -1 != u.defaultValue.indexOf(n.props.value) : u.defaultValue == n.props.value;
			})), t.class && !t.className ? (u.class = t.class, Object.defineProperty(u, "className", en$1)) : (t.className && !t.class || t.class && t.className) && (u.class = u.className = t.className), n.props = u;
		}(n), n.$$typeof = B, rn$1 && rn$1(n);
	};
	var un$1 = l$1.__r;
	l$1.__r = function(n) {
		un$1 && un$1(n), n.__c;
	};
	var on$1 = l$1.diffed;
	l$1.diffed = function(n) {
		on$1 && on$1(n);
		var t = n.props, e = n.__e;
		null != e && "textarea" === n.type && "value" in t && t.value !== e.value && (e.value = null == t.value ? "" : t.value);
	};
	function En(n, t) {
		var e = t(), r = h({ h: {
			__: e,
			v: t
		} }), u = r[0].h, o = r[1];
		return y(function() {
			u.__ = e, u.v = t, E(u.__, t()) || o({ h: u });
		}, [
			n,
			e,
			t
		]), p(function() {
			return E(u.__, u.v()) || o({ h: u }), n(function() {
				E(u.__, u.v()) || o({ h: u });
			});
		}, [n]), e;
	}
	var en_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "Export",
		Setting: "Setting",
		Language: "Language",
		"Copy Text": "Copy Text",
		"Copied!": "Copied!",
		Screenshot: "Screenshot",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Archive",
		Save: "Save",
		Delete: "Delete",
		Cancel: "Cancel",
		"Select All": "Select All",
		"Select...": "Select...",
		"Select Not Exported": "Select Not Exported",
		"Select Updated": "Select Updated",
		"Shift Select Hint": "Tip: Shift+click to select a range",
		Export: "Export",
		Error: "Error",
		Loading: "Loading",
		Preview: "Preview",
		"File Name": "File Name",
		"Export All": "Export All",
		"Exporter Settings": "Exporter Settings",
		"Export Dialog Title": "Export Conversations",
		"Invalid File Format": "Invalid File Format",
		"Export from official export file": "Export from official export file",
		"Export from API": "Export from API",
		"Available variables": "Available variables",
		"Conversation Timestamp": "Conversation Timestamp",
		"Conversation Timestamp Description": "Will show on the page.",
		"Enable on HTML": "Enable on HTML files",
		"Enable on Markdown": "Enable on Markdown files",
		"Use 24-hour format": "Use 24-hour format (eg. 23:59)",
		"Export Format": "Export Format",
		"Export Metadata": "Export Metadata",
		"Export Metadata Description": "Add metadata to exported Markdown and HTML files.",
		"Export Thinking Process": "Export Thinking Process",
		"Export Thinking Process Description": "Include the model's thinking/reasoning process in exported Markdown and HTML files.",
		"Export Sources": "Export Sources",
		"Export Sources Description": "Include the source list shown at the end of each answer in exported Markdown and HTML files.",
		Images: "Images",
		"Images Description": "How images are saved in Markdown and JSON (ZIP) exports. When left out, Markdown shows [image] instead. HTML always embeds images.",
		"Images Embed": "Embed in the file (base64)",
		"Images Omit": "Leave out images",
		"Images Files": "Save as separate files (.zip)",
		Sources: "Sources",
		"OpenAI Official Format": "OpenAI Official Format",
		"Conversation Archive Alert": "Are you sure you want to archive all selected conversations?",
		"Conversation Archived Message": "All selected conversations have been archived. Please refresh the page to see the changes.",
		"Conversation Delete Alert": "Are you sure you want to delete all selected conversations?",
		"Conversation Deleted Message": "All selected conversations have been deleted. Please refresh the page to see the changes.",
		"Please start a conversation first": "Please start a conversation first.",
		"Temporary chat could not be captured": "This temporary chat could not be read. It may have started before the exporter was loaded. You can still export it as a PNG screenshot.",
		"Select Project": "Select Project",
		"(no project)": "(no project)",
		"Export All Limit": "Export All Limit",
		"Export All Limit Description": "Set the maximum number of conversations to load. Exports run in waves of 100 conversations to stay within API rate limits.",
		"Select a source to load conversations": "Select a project above to load conversations.",
		Search: "Search",
		"No results": "No results",
		"Batch progress": "Batch {{current}}/{{total}}",
		"All conversations": "All conversations",
		"Load more conversations": "Load {{n}} more",
		"Load more conversations remaining": "Load {{n}} more · {{remaining}} left",
		"Export Skipped Message": "{{n}} conversations failed after repeated retries and are missing from the export:",
		"List Rate Limited Wait": "Rate limited by the API · wait {{n}}s and try again",
		"List Rate Limited": "Rate limited by the API · try again in a moment",
		"List Load Failed": "Failed to load conversations"
	};
	var es_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "Exportar",
		Setting: "Ajustes",
		Language: "Idioma",
		"Copy Text": "Copiar Texto",
		"Copied!": "¡Copiado!",
		Screenshot: "Captura",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Archivo",
		Save: "Guardar",
		Delete: "Borrar",
		Cancel: "Cancelar",
		"Select All": "Seleccionar Todos",
		"Select...": "Selección…",
		"Select Not Exported": "Seleccionar conversaciones no exportadas",
		"Select Updated": "Seleccionar conversaciones actualizadas",
		"Shift Select Hint": "Consejo: Shift+clic para seleccionar un rango",
		Export: "Exportar",
		Error: "Error",
		Loading: "Cargando",
		Preview: "Previsualizar",
		"File Name": "Nombre del Archivo",
		"Export All": "Exportar Todos",
		"Exporter Settings": "Ajustes De Exportación",
		"Export Dialog Title": "Exportar Conversaciones",
		"Invalid File Format": "Formato de archivo inválido",
		"Export from official export file": "Exportar desde archivo de exportación oficial",
		"Export from API": "Exportar desde API",
		"Available variables": "Variables Disponibles",
		"Conversation Timestamp": "Marca de Tiempo",
		"Conversation Timestamp Description": "Aparecerá en la página.",
		"Enable on HTML": "Habilitar en archivos HTML",
		"Enable on Markdown": "Habilitar en archivos Markdown",
		"Use 24-hour format": "Usar formato de 24 horas (ej. 23:59)",
		"Export Format": "Formato de Exportación",
		"Export Metadata": "Exportar Metadatos",
		"Export Metadata Description": "Añadir Metadatos a los archivos Markdown y HTML exportados.",
		"Export Thinking Process": "Exportar Proceso de Pensamiento",
		"Export Thinking Process Description": "Incluir el proceso de pensamiento/razonamiento del modelo en los archivos Markdown y HTML exportados.",
		"Export Sources": "Exportar fuentes",
		"Export Sources Description": "Incluir la lista de fuentes que se muestra al final de cada respuesta en los archivos Markdown y HTML exportados.",
		Images: "Imágenes",
		"Images Description": "Cómo se guardan las imágenes en las exportaciones Markdown y JSON (ZIP). Si se omiten, Markdown muestra [image] en su lugar. HTML siempre incrusta las imágenes.",
		"Images Embed": "Incrustar en el archivo (base64)",
		"Images Omit": "Omitir imágenes",
		"Images Files": "Guardar como archivos separados (.zip)",
		Sources: "Fuentes",
		"OpenAI Official Format": "Formato Oficial de OpenAI",
		"Conversation Archive Alert": "¿Estás seguro que quieres archivar todas las conversaciones seleccionadas?",
		"Conversation Archived Message": "Todos las conversaciones seleccionadas se han archivado. Por favor refresca la página para ver los cambios.",
		"Conversation Delete Alert": "¿Estás seguro que quieres borrar todas las conversaciones seleccionadas?",
		"Conversation Deleted Message": "Todos las conversaciones seleccionadas se han borrado. Por favor refresca la página para ver los cambios.",
		"Please start a conversation first": "Por favor empieza una conversación antes.",
		"Temporary chat could not be captured": "No se pudo leer este chat temporal. Es posible que haya comenzado antes de que se cargara el exportador. Aún puedes exportarlo como una captura de pantalla PNG.",
		"Select Project": "Seleccionar proyecto",
		"(no project)": "(sin proyecto)",
		"Export All Limit": "Límite de Exportar Todos",
		"Export All Limit Description": "Establece el número máximo de conversaciones a cargar en el diálogo 'Exportar Todos'.",
		"Select a source to load conversations": "Selecciona un proyecto arriba para cargar conversaciones.",
		Search: "Buscar",
		"No results": "Sin resultados",
		"Batch progress": "Lote {{current}}/{{total}}",
		"All conversations": "Todas las conversaciones",
		"Load more conversations": "Cargar {{n}} más",
		"Load more conversations remaining": "Cargar {{n}} más · quedan {{remaining}}",
		"Export Skipped Message": "{{n}} conversaciones fallaron tras varios reintentos y no están en la exportación:",
		"List Rate Limited Wait": "Límite de solicitudes de la API · espera {{n}} s y vuelve a intentarlo",
		"List Rate Limited": "Límite de solicitudes de la API · vuelve a intentarlo en un momento",
		"List Load Failed": "No se pudieron cargar las conversaciones"
	};
	var fr_default = {
		title: "Exportateur ChatGPT",
		ExportHelper: "Exporter",
		Setting: "Paramètre",
		Language: "Langue",
		"Copy Text": "Copier le texte",
		"Copied!": "Copié !",
		Screenshot: "Capture",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Archiver",
		Save: "Enregistrer",
		Delete: "Supprimer",
		Cancel: "Annuler",
		"Select All": "Tout sélectionner",
		"Select...": "Sélection…",
		"Select Not Exported": "Sélectionner les conversations non exportées",
		"Select Updated": "Sélectionner les conversations mises à jour",
		"Shift Select Hint": "Astuce : Maj+clic pour sélectionner une plage",
		Export: "Exporter",
		Error: "Erreur",
		Loading: "Chargement",
		Preview: "Aperçu",
		"File Name": "Nom du fichier",
		"Export All": "Tout exporter",
		"Exporter Settings": "Paramètres de l'exportateur",
		"Export Dialog Title": "Exporter les conversations",
		"Invalid File Format": "Format de fichier invalide",
		"Export from official export file": "Exporter depuis un fichier officiel",
		"Export from API": "Exporter depuis l'API",
		"Available variables": "Variables disponibles",
		"Conversation Timestamp": "Horodatage de la conversation",
		"Conversation Timestamp Description": "S'affichera sur la page.",
		"Enable on HTML": "Activer sur les fichiers HTML",
		"Enable on Markdown": "Activer sur les fichiers Markdown",
		"Use 24-hour format": "Utiliser le format 24 heures (ex. 23:59)",
		"Export Format": "Format d'exportation",
		"Export Metadata": "Exporter les métadonnées",
		"Export Metadata Description": "Ajouter des métadonnées aux fichiers Markdown et HTML exportés.",
		"Export Thinking Process": "Exporter le processus de réflexion",
		"Export Thinking Process Description": "Inclure le processus de réflexion/raisonnement du modèle dans les fichiers Markdown et HTML exportés.",
		"Export Sources": "Exporter les sources",
		"Export Sources Description": "Inclure la liste des sources affichée à la fin de chaque réponse dans les fichiers Markdown et HTML exportés.",
		Images: "Images",
		"Images Description": "Comment les images sont enregistrées dans les exports Markdown et JSON (ZIP). Si elles sont omises, Markdown affiche [image] à la place. HTML intègre toujours les images.",
		"Images Embed": "Intégrer dans le fichier (base64)",
		"Images Omit": "Omettre les images",
		"Images Files": "Enregistrer en fichiers séparés (.zip)",
		Sources: "Sources",
		"OpenAI Official Format": "Format officiel OpenAI",
		"Conversation Archive Alert": "Êtes-vous sûr de vouloir archiver toutes les conversations sélectionnées ?",
		"Conversation Archived Message": "Toutes les conversations sélectionnées ont été archivées. Veuillez actualiser la page pour voir les changements.",
		"Conversation Delete Alert": "Êtes-vous sûr de vouloir supprimer toutes les conversations sélectionnées ?",
		"Conversation Deleted Message": "Toutes les conversations sélectionnées ont été supprimées. Veuillez actualiser la page pour voir les changements.",
		"Please start a conversation first": "Veuillez commencer une conversation d'abord.",
		"Temporary chat could not be captured": "Ce chat éphémère n'a pas pu être lu. Il a peut-être commencé avant le chargement de l'exportateur. Vous pouvez toujours l'exporter en capture d'écran PNG.",
		"Select Project": "Sélectionner un projet",
		"(no project)": "(aucun projet)",
		"Export All Limit": "Limite d'Exportation Multiple",
		"Export All Limit Description": "Définit le nombre maximal de conversations à charger dans la boîte de dialogue 'Tout exporter'.",
		"Select a source to load conversations": "Sélectionnez un projet ci-dessus pour charger les conversations.",
		Search: "Rechercher",
		"No results": "Aucun résultat",
		"Batch progress": "Lot {{current}}/{{total}}",
		"All conversations": "Toutes les conversations",
		"Load more conversations": "Charger {{n}} de plus",
		"Load more conversations remaining": "Charger {{n}} de plus · {{remaining}} restantes",
		"Export Skipped Message": "{{n}} conversations ont échoué après plusieurs tentatives et ne figurent pas dans l'export :",
		"List Rate Limited Wait": "Limite de requêtes de l'API atteinte · attendez {{n}} s et réessayez",
		"List Rate Limited": "Limite de requêtes de l'API atteinte · réessayez dans un instant",
		"List Load Failed": "Impossible de charger les conversations"
	};
	var id_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "Ekspor",
		Setting: "Pengaturan",
		Language: "Bahasa",
		"Copy Text": "Salin Teks",
		"Copied!": "Disalin!",
		Screenshot: "Screenshot",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Arsip",
		Save: "Simpan",
		Delete: "Hapus",
		Cancel: "Batal",
		"Select All": "Pilih Semua",
		"Select...": "Pilih massal…",
		"Select Not Exported": "Pilih percakapan yang belum diekspor",
		"Select Updated": "Pilih percakapan yang diperbarui",
		"Shift Select Hint": "Tips: Shift+klik untuk memilih rentang",
		Export: "Ekspor",
		Error: "Kesalahan",
		Loading: "Memuat",
		Preview: "Pratinjau",
		"File Name": "Nama File",
		"Export All": "Ekspor Semua",
		"Exporter Settings": "Pengaturan Pengekspor",
		"Export Dialog Title": "Ekspor Percakapan",
		"Invalid File Format": "Format File Tidak Valid",
		"Export from official export file": "Ekspor dari file ekspor resmi",
		"Export from API": "Ekspor dari API",
		"Available variables": "Variabel yang Tersedia",
		"Conversation Timestamp": "Timestamp Percakapan",
		"Conversation Timestamp Description": "Akan ditampilkan pada halaman.",
		"Enable on HTML": "Aktifkan pada file HTML",
		"Enable on Markdown": "Aktifkan pada file Markdown",
		"Use 24-hour format": "Gunakan format 24 jam (contohnya: 23:59)",
		"Export Format": "Format Ekspor",
		"Export Metadata": "Ekspor Metada",
		"Export Metadata Description": "Tambahkan metadata ke file Markdown dan HTML yang diekspor.",
		"Export Thinking Process": "Ekspor Proses Berpikir",
		"Export Thinking Process Description": "Sertakan proses berpikir/penalaran model dalam file Markdown dan HTML yang diekspor.",
		"Export Sources": "Ekspor Sumber",
		"Export Sources Description": "Sertakan daftar sumber yang ditampilkan di akhir setiap jawaban dalam file Markdown dan HTML yang diekspor.",
		Images: "Gambar",
		"Images Description": "Cara gambar disimpan dalam ekspor Markdown dan JSON (ZIP). Jika dihilangkan, Markdown menampilkan [image] sebagai gantinya. HTML selalu menyematkan gambar.",
		"Images Embed": "Sematkan di file (base64)",
		"Images Omit": "Hilangkan gambar",
		"Images Files": "Simpan sebagai file terpisah (.zip)",
		Sources: "Sumber",
		"OpenAI Official Format": "Format Resmi OpenAI",
		"Conversation Archive Alert": "Apakah Anda yakin ingin mengarsipkan semua percakapan yang dipilih?",
		"Conversation Archived Message": "Semua percakapan yang dipilih telah diarsipkan. Harap segarkan halaman untuk melihat perubahan.",
		"Conversation Delete Alert": "Apakah Anda yakin ingin menghapus semua percakapan yang dipilih?",
		"Conversation Deleted Message": "Semua percakapan yang dipilih telah dihapus. Harap segarkan halaman untuk melihat perubahan.",
		"Please start a conversation first": "Harap mulai percakapan terlebih dahulu.",
		"Temporary chat could not be captured": "Obrolan sementara ini tidak dapat dibaca. Mungkin obrolan dimulai sebelum pengekspor dimuat. Anda masih dapat mengekspornya sebagai tangkapan layar PNG.",
		"Select Project": "Pilih Proyek",
		"(no project)": "(tidak ada proyek)",
		"Export All Limit": "Batas Ekspor Semua",
		"Export All Limit Description": "Atur jumlah maksimum percakapan yang akan dimuat dalam dialog 'Ekspor Semua'.",
		"Select a source to load conversations": "Pilih proyek di atas untuk memuat percakapan.",
		Search: "Cari",
		"No results": "Tidak ada hasil",
		"Batch progress": "Kelompok {{current}}/{{total}}",
		"All conversations": "Semua percakapan",
		"Load more conversations": "Muat {{n}} lagi",
		"Load more conversations remaining": "Muat {{n}} lagi · tersisa {{remaining}}",
		"Export Skipped Message": "{{n}} percakapan gagal setelah beberapa kali dicoba ulang dan tidak ada dalam ekspor:",
		"List Rate Limited Wait": "Dibatasi oleh API · tunggu {{n}} dtk lalu coba lagi",
		"List Rate Limited": "Dibatasi oleh API · coba lagi sebentar lagi",
		"List Load Failed": "Gagal memuat percakapan"
	};
	var jp_default = {
		title: "ChatGPTエクスポーター",
		ExportHelper: "エクスポート",
		Setting: "設定",
		Language: "言語",
		"Copy Text": "テキストをコピー",
		"Copied!": "コピーしました！",
		Screenshot: "キャプチャ",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "アーカイブ",
		Save: "保存",
		Delete: "削除",
		Cancel: "キャンセル",
		"Select All": "すべて選択",
		"Select...": "一括選択…",
		"Select Not Exported": "未エクスポートの会話を選択",
		"Select Updated": "更新された会話を選択",
		"Shift Select Hint": "ヒント: Shift+クリックで範囲選択",
		Export: "エクスポート",
		Error: "エラー",
		Loading: "読み込み中",
		Preview: "プレビュー",
		"File Name": "ファイル名",
		"Export All": "すべてエクスポート",
		"Exporter Settings": "エクスポーター設定",
		"Export Dialog Title": "会話をエクスポート",
		"Invalid File Format": "無効なファイル形式",
		"Export from official export file": "公式エクスポートファイルからエクスポートする",
		"Export from API": "APIからエクスポートする",
		"Available variables": "使用可能な変数",
		"Conversation Timestamp": "会話のタイムスタンプ",
		"Conversation Timestamp Description": "ページに表示されます。",
		"Enable on HTML": "HTML ファイルで有効にする",
		"Enable on Markdown": "Markdown ファイルで有効にする",
		"Use 24-hour format": "24時間形式を使用する (例: 23:59)",
		"Export Format": "エクスポートフォーマット",
		"Export Metadata": "メタデータをエクスポート",
		"Export Metadata Description": "エクスポートされたMarkdownおよびHTMLファイルにメタデータを追加します。",
		"Export Thinking Process": "思考プロセスをエクスポート",
		"Export Thinking Process Description": "エクスポートされたMarkdownおよびHTMLファイルにモデルの思考・推論プロセスを含めます。",
		"Export Sources": "ソースをエクスポート",
		"Export Sources Description": "各回答の末尾に表示されるソース一覧を、エクスポートされた Markdown および HTML ファイルに含めます。",
		Images: "画像",
		"Images Description": "Markdown と JSON (ZIP) のエクスポートでの画像の保存方法。省略した場合、Markdown では代わりに [image] と表示されます。HTML では常に画像が埋め込まれます。",
		"Images Embed": "ファイルに埋め込む (base64)",
		"Images Omit": "画像を省略",
		"Images Files": "別ファイルとして保存 (.zip)",
		Sources: "出典",
		"OpenAI Official Format": "OpenAI公式フォーマット",
		"Conversation Archive Alert": "選択したすべての会話をアーカイブしてもよろしいですか？",
		"Conversation Archived Message": "選択したすべての会話がアーカイブされました。変更を表示するには、ページを更新してください。",
		"Conversation Delete Alert": "選択したすべての会話を削除してもよろしいですか？",
		"Conversation Deleted Message": "選択したすべての会話が削除されました。変更を表示するには、ページを更新してください。",
		"Please start a conversation first": "まず会話を開始してください。",
		"Temporary chat could not be captured": "この一時チャットを読み取れませんでした。エクスポーターが読み込まれる前に開始された可能性があります。PNG スクリーンショットとしてエクスポートすることは可能です。",
		"Select Project": "プロジェクトを選択",
		"(no project)": "（プロジェクトなし）",
		"Export All Limit": "すべてエクスポートの上限",
		"Export All Limit Description": "「すべてエクスポート」ダイアログで読み込む会話の最大数を設定します。",
		"Select a source to load conversations": "上からプロジェクトを選択して会話を読み込んでください。",
		Search: "検索",
		"No results": "結果なし",
		"Batch progress": "バッチ {{current}}/{{total}}",
		"All conversations": "すべての会話",
		"Load more conversations": "さらに {{n}} 件読み込む",
		"Load more conversations remaining": "さらに {{n}} 件読み込む · 残り {{remaining}} 件",
		"Export Skipped Message": "{{n}} 件の会話は再試行しても失敗したため、エクスポートに含まれていません：",
		"List Rate Limited Wait": "リクエストが多すぎます · {{n}} 秒後に再試行してください",
		"List Rate Limited": "リクエストが多すぎます · しばらくしてから再試行してください",
		"List Load Failed": "会話を読み込めませんでした"
	};
	var ru_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "Export",
		Setting: "Параметры",
		Language: "Язык",
		"Copy Text": "Копировать текст",
		"Copied!": "Скопировано!",
		Screenshot: "Скриншот",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Архивировать",
		Save: "Сохранить",
		Delete: "Удалить",
		Cancel: "Отмена",
		"Select All": "Выбрать все",
		"Select...": "Выбрать…",
		"Select Not Exported": "Выбрать неэкспортированные разговоры",
		"Select Updated": "Выбрать обновлённые разговоры",
		"Shift Select Hint": "Совет: Shift+клик выбирает диапазон",
		Export: "Экспорт",
		Error: "Ошибка",
		Loading: "Загрузка",
		Preview: "Предпросмотр",
		"File Name": "Имя файла",
		"Export All": "Экспортировать все",
		"Exporter Settings": "Параметры экспорта",
		"Export Dialog Title": "Экспортировать беседы",
		"Invalid File Format": "Неверный формат файла",
		"Export from official export file": "Экспорт из официального файла",
		"Export from API": "Экспорт из API",
		"Available variables": "Доступные переменные",
		"Conversation Timestamp": "Временная метка разговора",
		"Conversation Timestamp Description": "Будет отображаться на странице.",
		"Enable on HTML": "Включить для HTML-файлов",
		"Enable on Markdown": "Включить для файлов Markdown",
		"Use 24-hour format": "Использовать 24-часовой формат (например, 23:59)",
		"Export Format": "Формат экспорта",
		"Export Metadata": "Экспорт метаданных",
		"Export Metadata Description": "Добавляйте метаданные в экспортированные файлы Markdown и HTML.",
		"Export Thinking Process": "Экспорт процесса мышления",
		"Export Thinking Process Description": "Включить процесс мышления/рассуждения модели в экспортированные файлы Markdown и HTML.",
		"Export Sources": "Экспорт источников",
		"Export Sources Description": "Включить список источников, показанный в конце каждого ответа, в экспортированные файлы Markdown и HTML.",
		Images: "Изображения",
		"Images Description": "Как сохранять изображения при экспорте в Markdown и JSON (ZIP). Если изображения пропущены, в Markdown вместо них будет [image]. HTML всегда встраивает изображения.",
		"Images Embed": "Встроить в файл (base64)",
		"Images Omit": "Не включать изображения",
		"Images Files": "Сохранить отдельными файлами (.zip)",
		Sources: "Источники",
		"OpenAI Official Format": "Официальный формат OpenAI",
		"Conversation Archive Alert": "Вы уверены, что хотите архивировать все выбранные разговоры?",
		"Conversation Archived Message": "Все выбранные разговоры были заархивированы. Пожалуйста, обновите страницу, чтобы увидеть изменения.",
		"Conversation Delete Alert": "Вы уверены, что хотите удалить все выбранные разговоры?",
		"Conversation Deleted Message": "Все выбранные разговоры были удалены. Пожалуйста, обновите страницу, чтобы увидеть изменения.",
		"Please start a conversation first": "Пожалуйста, начните разговор первым.",
		"Temporary chat could not be captured": "Не удалось прочитать этот временный чат. Возможно, он был начат до загрузки экспортёра. Вы всё ещё можете экспортировать его как PNG-скриншот.",
		"Select Project": "Выберите проект",
		"(no project)": "(нет проекта)",
		"Export All Limit": "Лимит экспорта всех",
		"Export All Limit Description": "Установите максимальное количество бесед для загрузки в диалоге 'Экспортировать все'.",
		"Select a source to load conversations": "Выберите проект выше, чтобы загрузить беседы.",
		Search: "Поиск",
		"No results": "Нет результатов",
		"Batch progress": "Партия {{current}}/{{total}}",
		"All conversations": "Все разговоры",
		"Load more conversations": "Загрузить ещё {{n}}",
		"Load more conversations remaining": "Загрузить ещё {{n}} · осталось {{remaining}}",
		"Export Skipped Message": "{{n}} разговоров не удалось загрузить после нескольких попыток, они отсутствуют в экспорте:",
		"List Rate Limited Wait": "Слишком много запросов к API · подождите {{n}} с и попробуйте снова",
		"List Rate Limited": "Слишком много запросов к API · попробуйте чуть позже",
		"List Load Failed": "Не удалось загрузить беседы"
	};
	var tr_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "Dışa Aktar",
		Setting: "Ayarlar",
		Language: "Dil",
		"Copy Text": "Metni Kopyala",
		"Copied!": "Kopyalandı!",
		Screenshot: "Ekran Alıntısı",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "Arşiv",
		Save: "Kaydet",
		Delete: "Sil",
		Cancel: "İptal",
		"Select All": "Tümünü Seç",
		"Select...": "Toplu seçim…",
		"Select Not Exported": "Dışa aktarılmamış konuşmaları seç",
		"Select Updated": "Güncellenen konuşmaları seç",
		"Shift Select Hint": "İpucu: Aralık seçmek için Shift+tık",
		Export: "Dışa Aktar",
		Error: "Hata",
		Loading: "Yükleniyor",
		Preview: "Önizleme",
		"File Name": "Dosya Adı",
		"Export All": "Tümünü Dışa Aktar",
		"Exporter Settings": "Dışa Aktarma Ayarları",
		"Export Dialog Title": "Konuşmaları Dışa Aktar",
		"Invalid File Format": "Dosya Biçimi Geçersiz",
		"Export from official export file": "Resmi dışa aktarma dosyasından dışa aktar",
		"Export from API": "API'den dışa aktar",
		"Available variables": "Kullanılabilir değişkenler",
		"Conversation Timestamp": "Konuşma zaman bilgisi",
		"Conversation Timestamp Description": "Sayfada gösterilir.",
		"Enable on HTML": "HTML dosyalarında etkinleştir",
		"Enable on Markdown": "Markdown dosyalarında etkinleştir",
		"Use 24-hour format": "24 saat biçimini kullan (örn. 23:59)",
		"Export Format": "Dışa Aktarma Formatı",
		"Export Metadata": "Üst veriyi dışa aktar",
		"Export Metadata Description": "Dışa aktarılan Markdown ve HTML dosyalarına üst veri ekle",
		"Export Thinking Process": "Düşünme Sürecini Dışa Aktar",
		"Export Thinking Process Description": "Dışa aktarılan Markdown ve HTML dosyalarına modelin düşünme/akıl yürütme sürecini dahil et.",
		"Export Sources": "Kaynakları Dışa Aktar",
		"Export Sources Description": "Her yanıtın sonunda gösterilen kaynak listesini dışa aktarılan Markdown ve HTML dosyalarına dahil et.",
		Images: "Görseller",
		"Images Description": "Markdown ve JSON (ZIP) dışa aktarımlarında görsellerin nasıl kaydedileceği. Görseller çıkarıldığında Markdown yerine [image] gösterir. HTML görselleri her zaman gömer.",
		"Images Embed": "Dosyaya göm (base64)",
		"Images Omit": "Görselleri çıkar",
		"Images Files": "Ayrı dosyalar olarak kaydet (.zip)",
		Sources: "Kaynaklar",
		"OpenAI Official Format": "OpenAI Resmi Format",
		"Conversation Archive Alert": "Seçilen tüm konuşmaları arşivlemek istediğinizden emin misiniz?",
		"Conversation Archived Message": "Seçilen tüm konuşmalar arşivlendi. Değişiklikleri görmek için sayfayı yenileyin.",
		"Conversation Delete Alert": "Seçilen tüm konuşmaları silmek istediğinizden emin misiniz?",
		"Conversation Deleted Message": "Seçilen tüm konuşmalar silindi. Değişiklikleri görmek için sayfayı yenileyin.",
		"Please start a conversation first": "Lütfen önce bir konuşma başlatın.",
		"Temporary chat could not be captured": "Bu geçici sohbet okunamadı. Dışa aktarıcı yüklenmeden önce başlamış olabilir. Yine de PNG ekran görüntüsü olarak dışa aktarabilirsiniz.",
		"Select Project": "Proje Seç",
		"(no project)": "(proje yok)",
		"Export All Limit": "Tümünü Dışa Aktarma Limiti",
		"Export All Limit Description": "'Tümünü Dışa Aktar' iletişim kutusunda yüklenecek maksimum konuşma sayısını ayarlayın.",
		"Select a source to load conversations": "Konuşmaları yüklemek için yukarıdan bir proje seçin.",
		Search: "Ara",
		"No results": "Sonuç yok",
		"Batch progress": "Grup {{current}}/{{total}}",
		"All conversations": "Tüm konuşmalar",
		"Load more conversations": "{{n}} tane daha yükle",
		"Load more conversations remaining": "{{n}} tane daha yükle · {{remaining}} kaldı",
		"Export Skipped Message": "{{n}} konuşma tekrar denemelere rağmen başarısız oldu ve dışa aktarımda yer almıyor:",
		"List Rate Limited Wait": "API istek sınırına ulaşıldı · {{n}} sn bekleyip tekrar deneyin",
		"List Rate Limited": "API istek sınırına ulaşıldı · biraz sonra tekrar deneyin",
		"List Load Failed": "Sohbetler yüklenemedi"
	};
	var zh_Hans_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "导出助手",
		Setting: "设置",
		Language: "语言",
		"Copy Text": "复制文字",
		"Copied!": "已复制!",
		Screenshot: "截屏",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "归档",
		Save: "保存",
		Delete: "删除",
		Cancel: "取消",
		"Select All": "全选",
		"Select...": "批量选择…",
		"Select Not Exported": "选择未导出的对话",
		"Select Updated": "选择有更新的对话",
		"Shift Select Hint": "提示：Shift+点击可选择范围",
		Export: "导出",
		Error: "错误",
		Loading: "加载中",
		Preview: "预览",
		"File Name": "文件名",
		"Export All": "批量导出",
		"Exporter Settings": "导出设置",
		"Export Dialog Title": "导出对话",
		"Invalid File Format": "无效的文件格式",
		"Export from official export file": "从官方导出文件导出",
		"Export from API": "从 API 导出",
		"Available variables": "可用变量",
		"Conversation Timestamp": "对话时间戳",
		"Conversation Timestamp Description": "会显示在页面上。",
		"Enable on HTML": "在 HTML 文件上启用",
		"Enable on Markdown": "在 Markdown 文件上启用",
		"Use 24-hour format": "使用24小时制 (例如 23:59)",
		"Export Format": "导出格式",
		"Export Metadata": "导出元数据",
		"Export Metadata Description": "会添加至 Markdown 以及 HTML 导出。",
		"Export Thinking Process": "导出思考过程",
		"Export Thinking Process Description": "在导出的 Markdown 和 HTML 文件中包含模型的思考/推理过程。",
		"Export Sources": "导出来源",
		"Export Sources Description": "在导出的 Markdown 和 HTML 文件中包含每个回答末尾显示的来源列表。",
		Images: "图片",
		"Images Description": "Markdown 和 JSON (ZIP) 导出时图片的保存方式。省略时，Markdown 会以 [image] 代替。HTML 始终嵌入图片。",
		"Images Embed": "嵌入文件 (base64)",
		"Images Omit": "省略图片",
		"Images Files": "另存为单独文件 (.zip)",
		Sources: "来源",
		"OpenAI Official Format": "OpenAI 官方格式",
		"Conversation Archive Alert": "确定要归档所有选取的对话？",
		"Conversation Archived Message": "所有所选的对话已归档。请刷新页面。",
		"Conversation Delete Alert": "确定要删除所有选取的对话？",
		"Conversation Deleted Message": "所有所选的对话已删除。请刷新页面。",
		"Please start a conversation first": "请先开始对话。",
		"Temporary chat could not be captured": "无法读取此临时聊天，它可能在导出工具加载前就已开始。你仍可以将其导出为 PNG 截图。",
		"Select Project": "选择项目",
		"(no project)": "（无项目）",
		"Export All Limit": "批量导出上限",
		"Export All Limit Description": "设置“批量导出”对话框中加载的最大对话数量。",
		"Select a source to load conversations": "请在上方选择一个项目以加载对话。",
		Search: "搜索",
		"No results": "无结果",
		"Batch progress": "第 {{current}}/{{total}} 批",
		"All conversations": "全部对话",
		"Load more conversations": "再加载 {{n}} 条",
		"Load more conversations remaining": "再加载 {{n}} 条 · 剩余 {{remaining}} 条",
		"Export Skipped Message": "有 {{n}} 个对话多次重试后仍失败，未包含在导出文件中：",
		"List Rate Limited Wait": "请求过于频繁 · 请等待 {{n}} 秒后重试",
		"List Rate Limited": "请求过于频繁 · 请稍后重试",
		"List Load Failed": "无法加载对话"
	};
	var zh_Hant_default = {
		title: "ChatGPT Exporter",
		ExportHelper: "Export",
		Setting: "設定",
		Language: "語言",
		"Copy Text": "複製文字",
		"Copied!": "已複製!",
		Screenshot: "截圖",
		Markdown: "Markdown",
		HTML: "HTML",
		JSON: "JSON",
		Archive: "封存",
		Save: "保存",
		Delete: "刪除",
		Cancel: "取消",
		"Select All": "全選",
		"Select...": "批次選取…",
		"Select Not Exported": "選取未匯出的對話",
		"Select Updated": "選取有更新的對話",
		"Shift Select Hint": "提示：Shift+點擊可選取範圍",
		Export: "匯出",
		Error: "錯誤",
		Loading: "載入中",
		Preview: "預覽",
		"File Name": "檔案名稱",
		"Export All": "批量匯出",
		"Exporter Settings": "設定",
		"Export Dialog Title": "匯出對話",
		"Invalid File Format": "無效的檔案格式",
		"Export from official export file": "從官方匯出檔案匯出",
		"Export from API": "從 API 匯出",
		"Available variables": "可用變數",
		"Conversation Timestamp": "對話時間戳",
		"Conversation Timestamp Description": "會顯示在頁面上。",
		"Enable on HTML": "在 HTML 檔案上啟用",
		"Enable on Markdown": "在 Markdown 檔案上啟用",
		"Use 24-hour format": "使用24小時制 (例如 23:59)",
		"Export Format": "匯出格式",
		"Export Metadata": "匯出元資料",
		"Export Metadata Description": "會添加至 Markdown 以及 HTML 匯出。",
		"Export Thinking Process": "匯出思考過程",
		"Export Thinking Process Description": "在匯出的 Markdown 和 HTML 檔案中包含模型的思考/推理過程。",
		"Export Sources": "匯出來源",
		"Export Sources Description": "在匯出的 Markdown 和 HTML 檔案中包含每個回答末尾顯示的來源列表。",
		Images: "圖片",
		"Images Description": "Markdown 和 JSON (ZIP) 匯出時圖片的儲存方式。省略時，Markdown 會以 [image] 代替。HTML 一律嵌入圖片。",
		"Images Embed": "嵌入檔案 (base64)",
		"Images Omit": "省略圖片",
		"Images Files": "另存為獨立檔案 (.zip)",
		Sources: "來源",
		"OpenAI Official Format": "OpenAI 官方格式",
		"Conversation Archive Alert": "確定要封存所有選取的對話？",
		"Conversation Archived Message": "所有選取的對話已封存。請重新整理頁面。",
		"Conversation Delete Alert": "確定要刪除所有選取的對話？",
		"Conversation Deleted Message": "所有選取的對話已刪除。請重新整理頁面。",
		"Please start a conversation first": "請先開始對話。",
		"Temporary chat could not be captured": "無法讀取此暫存對話，它可能在匯出工具載入前就已開始。你仍可以將其匯出為 PNG 截圖。",
		"Select Project": "選擇專案",
		"(no project)": "（無專案）",
		"Export All Limit": "批量匯出上限",
		"Export All Limit Description": "設定「批量匯出」對話方塊中載入的最大對話數量。",
		"Select a source to load conversations": "請在上方選擇一個專案以載入對話。",
		Search: "搜尋",
		"No results": "無結果",
		"Batch progress": "第 {{current}}/{{total}} 批",
		"All conversations": "全部對話",
		"Load more conversations": "再載入 {{n}} 筆",
		"Load more conversations remaining": "再載入 {{n}} 筆 · 剩餘 {{remaining}} 筆",
		"Export Skipped Message": "有 {{n}} 個對話重試多次仍失敗，沒有包含在匯出檔中：",
		"List Rate Limited Wait": "請求太頻繁 · 請等 {{n}} 秒後再試",
		"List Rate Limited": "請求太頻繁 · 請稍後再試",
		"List Load Failed": "無法載入對話"
	};
	var GMStorage = class {
		static supported = typeof _GM_getValue === "function" && typeof _GM_setValue === "function" && typeof _GM_deleteValue === "function";
		static get(key) {
			const item = _GM_getValue(key, "");
			if (item) try {
				return JSON.parse(item);
			} catch {
				return null;
			}
			return null;
		}
		static set(key, value) {
			_GM_setValue(key, JSON.stringify(value));
		}
		static delete(key) {
			_GM_deleteValue(key);
		}
	};
	var LocalStorage = class {
		static supported = typeof localStorage === "object";
		static get(key) {
			const item = localStorage.getItem(key);
			if (item) try {
				return JSON.parse(item);
			} catch {
				return null;
			}
			return null;
		}
		static set(key, value) {
			const item = JSON.stringify(value);
			localStorage.setItem(key, item);
		}
		static delete(key) {
			localStorage.removeItem(key);
		}
	};
	var MemoryStorage = class {
		static map = new Map();
		static supported = true;
		static get(key) {
			const item = this.map.get(key);
			if (!item) return null;
			return item;
		}
		static set(key, value) {
			this.map.set(key, value);
		}
		static delete(key) {
			this.map.delete(key);
		}
	};
	var ScriptStorage = class {
		static get(key) {
			if (GMStorage.supported) try {
				return GMStorage.get(key);
			} catch {}
			if (LocalStorage.supported) try {
				return LocalStorage.get(key);
			} catch {}
			return MemoryStorage.get(key);
		}
		static set(key, value) {
			if (GMStorage.supported) try {
				return GMStorage.set(key, value);
			} catch {}
			if (LocalStorage.supported) try {
				return LocalStorage.set(key, value);
			} catch {}
			return MemoryStorage.set(key, value);
		}
		static delete(key) {
			if (GMStorage.supported) try {
				return GMStorage.delete(key);
			} catch {}
			if (LocalStorage.supported) try {
				return LocalStorage.delete(key);
			} catch {}
			return MemoryStorage.delete(key);
		}
	};
	var EN_US = {
		name: "English",
		code: "en-US",
		resource: en_default
	};
	var ES = {
		name: "Español",
		code: "es",
		resource: es_default
	};
	var FR = {
		name: "Français",
		code: "fr",
		resource: fr_default
	};
	var ID_ID = {
		name: "Indonesia",
		code: "id-ID",
		resource: id_default
	};
	var JA_JP = {
		name: "日本語",
		code: "ja-JP",
		resource: jp_default
	};
	var RU = {
		name: "Русский",
		code: "ru",
		resource: ru_default
	};
	var TR_TR = {
		name: "Türkçe",
		code: "tr-TR",
		resource: tr_default
	};
	var ZH_Hans = {
		name: "简体中文",
		code: "zh-Hans",
		resource: zh_Hans_default
	};
	var ZH_Hant = {
		name: "繁體中文",
		code: "zh-Hant",
		resource: zh_Hant_default
	};
	var LOCALES = [
		EN_US,
		ES,
		FR,
		ID_ID,
		JA_JP,
		RU,
		TR_TR,
		ZH_Hans,
		ZH_Hant
	];
	var LanguageMapping = {
		"en": EN_US.code,
		"en-US": EN_US.code,
		"es": ES.code,
		"es-ES": ES.code,
		"es-AR": ES.code,
		"es-CL": ES.code,
		"es-CO": ES.code,
		"es-MX": ES.code,
		"es-US": ES.code,
		"fr": FR.code,
		"fr-FR": FR.code,
		"id": ID_ID.code,
		"id-ID": ID_ID.code,
		"ja": JA_JP.code,
		"ja-JP": JA_JP.code,
		"ru": RU.code,
		"ru-RU": RU.code,
		"tr": TR_TR.code,
		"tr-TR": TR_TR.code,
		"zh": ZH_Hans.code,
		"zh-CN": ZH_Hans.code,
		"zh-MO": ZH_Hans.code,
		"zh-SG": ZH_Hans.code,
		"zh-Hans": ZH_Hans.code,
		"zh-HK": ZH_Hant.code,
		"zh-TW": ZH_Hant.code,
		"zh-Hant": ZH_Hant.code
	};
	var resources = LOCALES.reduce((acc, cur) => {
		acc[cur.code] = cur.resource;
		return acc;
	}, {});
	function standardizeLanguage(language) {
		if (!language) return null;
		if (language in LanguageMapping) return LanguageMapping[language];
		const shortLang = language.split("-")[0];
		if (shortLang in LanguageMapping) return LanguageMapping[shortLang];
		return null;
	}
	function getNavigatorLanguage() {
		const { language, languages } = navigator;
		if (language) return language;
		if (languages && languages.length) return languages[0];
		return null;
	}
	function getOaiLanguage() {
		return (window?.localStorage?.getItem("oai/apps/locale"))?.replace(/^"(.*)"$/, "$1") ?? null;
	}
	function getDefaultLanguage() {
		const storedLanguage = ScriptStorage.get(KEY_LANGUAGE);
		const oaiLanguage = getOaiLanguage();
		const browserLanguage = getNavigatorLanguage();
		return standardizeLanguage(storedLanguage) ?? standardizeLanguage(oaiLanguage) ?? standardizeLanguage(browserLanguage) ?? EN_US.code;
	}
	var language = getDefaultLanguage();
	var listeners = new Set();
	function t(key, options) {
		const template = resources[language]?.[key] ?? resources[EN_US.code][key] ?? key;
		if (!options) return template;
		return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, name) => String(options[name] ?? ""));
	}
	function changeLanguage(lng) {
		if (lng === language) return;
		language = lng;
		ScriptStorage.set(KEY_LANGUAGE, lng);
		listeners.forEach((listener) => listener());
	}
	function subscribe$2(listener) {
		listeners.add(listener);
		return () => listeners.delete(listener);
	}
	var i18n = {
		t,
		changeLanguage,
		get language() {
			return language;
		}
	};
	var translators = new Map();
	function getTranslator(lng) {
		let translator = translators.get(lng);
		if (!translator) {
			translator = (key, options) => t(key, options);
			translators.set(lng, translator);
		}
		return translator;
	}
	function useTranslation() {
		return {
			t: getTranslator(En(subscribe$2, () => language)),
			i18n
		};
	}
	var import_jszip_min = __toESM(__commonJSMin(((exports, module) => {
		(function(t) {
			if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
			else if ("function" == typeof define && define.amd) define([], t);
			else ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = t();
		})(function() {
			return function s(a, o, h) {
				function u(r, t) {
					if (!o[r]) {
						if (!a[r]) {
							var e = "function" == typeof __require && __require;
							if (!t && e) return e(r, !0);
							if (l) return l(r, !0);
							var i = new Error("Cannot find module '" + r + "'");
							throw i.code = "MODULE_NOT_FOUND", i;
						}
						var n = o[r] = { exports: {} };
						a[r][0].call(n.exports, function(t) {
							var e = a[r][1][t];
							return u(e || t);
						}, n, n.exports, s, a, o, h);
					}
					return o[r].exports;
				}
				for (var l = "function" == typeof __require && __require, t = 0; t < h.length; t++) u(h[t]);
				return u;
			}({
				1: [function(t, e, r) {
					"use strict";
					var c = t("./utils"), d = t("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					r.encode = function(t) {
						for (var e, r, i, n, s, a, o, h = [], u = 0, l = t.length, f = l, d = "string" !== c.getTypeOf(t); u < t.length;) f = l - u, i = d ? (e = t[u++], r = u < l ? t[u++] : 0, u < l ? t[u++] : 0) : (e = t.charCodeAt(u++), r = u < l ? t.charCodeAt(u++) : 0, u < l ? t.charCodeAt(u++) : 0), n = e >> 2, s = (3 & e) << 4 | r >> 4, a = 1 < f ? (15 & r) << 2 | i >> 6 : 64, o = 2 < f ? 63 & i : 64, h.push(p.charAt(n) + p.charAt(s) + p.charAt(a) + p.charAt(o));
						return h.join("");
					}, r.decode = function(t) {
						var e, r, i, n, s, a, o = 0, h = 0, u = "data:";
						if (t.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
						var l, f = 3 * (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, "")).length / 4;
						if (t.charAt(t.length - 1) === p.charAt(64) && f--, t.charAt(t.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
						for (l = d.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < t.length;) e = p.indexOf(t.charAt(o++)) << 2 | (n = p.indexOf(t.charAt(o++))) >> 4, r = (15 & n) << 4 | (s = p.indexOf(t.charAt(o++))) >> 2, i = (3 & s) << 6 | (a = p.indexOf(t.charAt(o++))), l[h++] = e, 64 !== s && (l[h++] = r), 64 !== a && (l[h++] = i);
						return l;
					};
				}, {
					"./support": 30,
					"./utils": 32
				}],
				2: [function(t, e, r) {
					"use strict";
					var i = t("./external"), n = t("./stream/DataWorker"), s = t("./stream/Crc32Probe"), a = t("./stream/DataLengthProbe");
					function o(t, e, r, i, n) {
						this.compressedSize = t, this.uncompressedSize = e, this.crc32 = r, this.compression = i, this.compressedContent = n;
					}
					o.prototype = {
						getContentWorker: function() {
							var t = new n(i.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), e = this;
							return t.on("end", function() {
								if (this.streamInfo.data_length !== e.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
							}), t;
						},
						getCompressedWorker: function() {
							return new n(i.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
						}
					}, o.createWorkerFrom = function(t, e, r) {
						return t.pipe(new s()).pipe(new a("uncompressedSize")).pipe(e.compressWorker(r)).pipe(new a("compressedSize")).withStreamInfo("compression", e);
					}, e.exports = o;
				}, {
					"./external": 6,
					"./stream/Crc32Probe": 25,
					"./stream/DataLengthProbe": 26,
					"./stream/DataWorker": 27
				}],
				3: [function(t, e, r) {
					"use strict";
					var i = t("./stream/GenericWorker");
					r.STORE = {
						magic: "\0\0",
						compressWorker: function(t) {
							return new i("STORE compression");
						},
						uncompressWorker: function() {
							return new i("STORE decompression");
						}
					}, r.DEFLATE = t("./flate");
				}, {
					"./flate": 7,
					"./stream/GenericWorker": 28
				}],
				4: [function(t, e, r) {
					"use strict";
					var i = t("./utils");
					var o = function() {
						for (var t, e = [], r = 0; r < 256; r++) {
							t = r;
							for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
							e[r] = t;
						}
						return e;
					}();
					e.exports = function(t, e) {
						return void 0 !== t && t.length ? "string" !== i.getTypeOf(t) ? function(t, e, r, i) {
							var n = o, s = i + r;
							t ^= -1;
							for (var a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e[a])];
							return -1 ^ t;
						}(0 | e, t, t.length, 0) : function(t, e, r, i) {
							var n = o, s = i + r;
							t ^= -1;
							for (var a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e.charCodeAt(a))];
							return -1 ^ t;
						}(0 | e, t, t.length, 0) : 0;
					};
				}, { "./utils": 32 }],
				5: [function(t, e, r) {
					"use strict";
					r.base64 = !1, r.binary = !1, r.dir = !1, r.createFolders = !0, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
				}, {}],
				6: [function(t, e, r) {
					"use strict";
					var i = null;
					i = "undefined" != typeof Promise ? Promise : t("lie"), e.exports = { Promise: i };
				}, { lie: 37 }],
				7: [function(t, e, r) {
					"use strict";
					var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, n = t("pako"), s = t("./utils"), a = t("./stream/GenericWorker"), o = i ? "uint8array" : "array";
					function h(t, e) {
						a.call(this, "FlateWorker/" + t), this._pako = null, this._pakoAction = t, this._pakoOptions = e, this.meta = {};
					}
					r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(t) {
						this.meta = t.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, t.data), !1);
					}, h.prototype.flush = function() {
						a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], !0);
					}, h.prototype.cleanUp = function() {
						a.prototype.cleanUp.call(this), this._pako = null;
					}, h.prototype._createPako = function() {
						this._pako = new n[this._pakoAction]({
							raw: !0,
							level: this._pakoOptions.level || -1
						});
						var e = this;
						this._pako.onData = function(t) {
							e.push({
								data: t,
								meta: e.meta
							});
						};
					}, r.compressWorker = function(t) {
						return new h("Deflate", t);
					}, r.uncompressWorker = function() {
						return new h("Inflate", {});
					};
				}, {
					"./stream/GenericWorker": 28,
					"./utils": 32,
					pako: 38
				}],
				8: [function(t, e, r) {
					"use strict";
					function A(t, e) {
						var r, i = "";
						for (r = 0; r < e; r++) i += String.fromCharCode(255 & t), t >>>= 8;
						return i;
					}
					function i(t, e, r, i, n, s) {
						var a, o, h = t.file, u = t.compression, l = s !== O.utf8encode, f = I.transformTo("string", s(h.name)), d = I.transformTo("string", O.utf8encode(h.name)), c = h.comment, p = I.transformTo("string", s(c)), m = I.transformTo("string", O.utf8encode(c)), _ = d.length !== h.name.length, g = m.length !== c.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = {
							crc32: 0,
							compressedSize: 0,
							uncompressedSize: 0
						};
						e && !r || (x.crc32 = t.crc32, x.compressedSize = t.compressedSize, x.uncompressedSize = t.uncompressedSize);
						var S = 0;
						e && (S |= 8), l || !_ && !g || (S |= 2048);
						var z = 0, C = 0;
						w && (z |= 16), "UNIX" === n ? (C = 798, z |= function(t, e) {
							var r = t;
							return t || (r = e ? 16893 : 33204), (65535 & r) << 16;
						}(h.unixPermissions, w)) : (C = 20, z |= function(t) {
							return 63 & (t || 0);
						}(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + d, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
						var E = "";
						return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), {
							fileRecord: R.LOCAL_FILE_HEADER + E + f + b,
							dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(i, 4) + f + b + p
						};
					}
					var I = t("../utils"), n = t("../stream/GenericWorker"), O = t("../utf8"), B = t("../crc32"), R = t("../signature");
					function s(t, e, r, i) {
						n.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = e, this.zipPlatform = r, this.encodeFileName = i, this.streamFiles = t, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
					}
					I.inherits(s, n), s.prototype.push = function(t) {
						var e = t.meta.percent || 0, r = this.entriesCount, i = this._sources.length;
						this.accumulate ? this.contentBuffer.push(t) : (this.bytesWritten += t.data.length, n.prototype.push.call(this, {
							data: t.data,
							meta: {
								currentFile: this.currentFile,
								percent: r ? (e + 100 * (r - i - 1)) / r : 100
							}
						}));
					}, s.prototype.openedSource = function(t) {
						this.currentSourceOffset = this.bytesWritten, this.currentFile = t.file.name;
						var e = this.streamFiles && !t.file.dir;
						if (e) {
							var r = i(t, e, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
							this.push({
								data: r.fileRecord,
								meta: { percent: 0 }
							});
						} else this.accumulate = !0;
					}, s.prototype.closedSource = function(t) {
						this.accumulate = !1;
						var e = this.streamFiles && !t.file.dir, r = i(t, e, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						if (this.dirRecords.push(r.dirRecord), e) this.push({
							data: function(t) {
								return R.DATA_DESCRIPTOR + A(t.crc32, 4) + A(t.compressedSize, 4) + A(t.uncompressedSize, 4);
							}(t),
							meta: { percent: 100 }
						});
						else for (this.push({
							data: r.fileRecord,
							meta: { percent: 0 }
						}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
						this.currentFile = null;
					}, s.prototype.flush = function() {
						for (var t = this.bytesWritten, e = 0; e < this.dirRecords.length; e++) this.push({
							data: this.dirRecords[e],
							meta: { percent: 100 }
						});
						var r = this.bytesWritten - t, i = function(t, e, r, i, n) {
							var s = I.transformTo("string", n(i));
							return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(t, 2) + A(t, 2) + A(e, 4) + A(r, 4) + A(s.length, 2) + s;
						}(this.dirRecords.length, r, t, this.zipComment, this.encodeFileName);
						this.push({
							data: i,
							meta: { percent: 100 }
						});
					}, s.prototype.prepareNextSource = function() {
						this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
					}, s.prototype.registerPrevious = function(t) {
						this._sources.push(t);
						var e = this;
						return t.on("data", function(t) {
							e.processChunk(t);
						}), t.on("end", function() {
							e.closedSource(e.previous.streamInfo), e._sources.length ? e.prepareNextSource() : e.end();
						}), t.on("error", function(t) {
							e.error(t);
						}), this;
					}, s.prototype.resume = function() {
						return !!n.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
					}, s.prototype.error = function(t) {
						var e = this._sources;
						if (!n.prototype.error.call(this, t)) return !1;
						for (var r = 0; r < e.length; r++) try {
							e[r].error(t);
						} catch (t) {}
						return !0;
					}, s.prototype.lock = function() {
						n.prototype.lock.call(this);
						for (var t = this._sources, e = 0; e < t.length; e++) t[e].lock();
					}, e.exports = s;
				}, {
					"../crc32": 4,
					"../signature": 23,
					"../stream/GenericWorker": 28,
					"../utf8": 31,
					"../utils": 32
				}],
				9: [function(t, e, r) {
					"use strict";
					var u = t("../compressions"), i = t("./ZipFileWorker");
					r.generateWorker = function(t, a, e) {
						var o = new i(a.streamFiles, e, a.platform, a.encodeFileName), h = 0;
						try {
							t.forEach(function(t, e) {
								h++;
								var r = function(t, e) {
									var r = t || e, i = u[r];
									if (!i) throw new Error(r + " is not a valid compression method !");
									return i;
								}(e.options.compression, a.compression), i = e.options.compressionOptions || a.compressionOptions || {}, n = e.dir, s = e.date;
								e._compressWorker(r, i).withStreamInfo("file", {
									name: t,
									dir: n,
									date: s,
									comment: e.comment || "",
									unixPermissions: e.unixPermissions,
									dosPermissions: e.dosPermissions
								}).pipe(o);
							}), o.entriesCount = h;
						} catch (t) {
							o.error(t);
						}
						return o;
					};
				}, {
					"../compressions": 3,
					"./ZipFileWorker": 8
				}],
				10: [function(t, e, r) {
					"use strict";
					function i() {
						if (!(this instanceof i)) return new i();
						if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
						this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
							var t = new i();
							for (var e in this) "function" != typeof this[e] && (t[e] = this[e]);
							return t;
						};
					}
					(i.prototype = t("./object")).loadAsync = t("./load"), i.support = t("./support"), i.defaults = t("./defaults"), i.version = "3.9.1", i.loadAsync = function(t, e) {
						return new i().loadAsync(t, e);
					}, i.external = t("./external"), e.exports = i;
				}, {
					"./defaults": 5,
					"./external": 6,
					"./load": 11,
					"./object": 15,
					"./support": 30
				}],
				11: [function(t, e, r) {
					"use strict";
					var u = t("./utils"), n = t("./external"), i = t("./utf8"), s = t("./zipEntries"), a = t("./stream/Crc32Probe"), l = t("./nodejsUtils");
					function f(i) {
						return new n.Promise(function(t, e) {
							var r = i.decompressed.getContentWorker().pipe(new a());
							r.on("error", function(t) {
								e(t);
							}).on("end", function() {
								r.streamInfo.crc32 !== i.decompressed.crc32 ? e(new Error("Corrupted zip : CRC32 mismatch")) : t();
							}).resume();
						});
					}
					e.exports = function(t, o) {
						var h = this;
						return o = u.extend(o || {}, {
							base64: !1,
							checkCRC32: !1,
							optimizedBinaryString: !1,
							createFolders: !1,
							decodeFileName: i.utf8decode
						}), l.isNode && l.isStream(t) ? n.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", t, !0, o.optimizedBinaryString, o.base64).then(function(t) {
							var e = new s(o);
							return e.load(t), e;
						}).then(function(t) {
							var e = [n.Promise.resolve(t)], r = t.files;
							if (o.checkCRC32) for (var i = 0; i < r.length; i++) e.push(f(r[i]));
							return n.Promise.all(e);
						}).then(function(t) {
							for (var e = t.shift(), r = e.files, i = 0; i < r.length; i++) {
								var n = r[i], s = n.fileNameStr, a = u.resolve(n.fileNameStr);
								h.file(a, n.decompressed, {
									binary: !0,
									optimizedBinaryString: !0,
									date: n.date,
									dir: n.dir,
									comment: n.fileCommentStr.length ? n.fileCommentStr : null,
									unixPermissions: n.unixPermissions,
									dosPermissions: n.dosPermissions,
									createFolders: o.createFolders
								}), n.dir || (h.file(a).unsafeOriginalName = s);
							}
							return e.zipComment.length && (h.comment = e.zipComment), h;
						});
					};
				}, {
					"./external": 6,
					"./nodejsUtils": 14,
					"./stream/Crc32Probe": 25,
					"./utf8": 31,
					"./utils": 32,
					"./zipEntries": 33
				}],
				12: [function(t, e, r) {
					"use strict";
					var i = t("../utils"), n = t("../stream/GenericWorker");
					function s(t, e) {
						n.call(this, "Nodejs stream input adapter for " + t), this._upstreamEnded = !1, this._bindStream(e);
					}
					i.inherits(s, n), s.prototype._bindStream = function(t) {
						var e = this;
						(this._stream = t).pause(), t.on("data", function(t) {
							e.push({
								data: t,
								meta: { percent: 0 }
							});
						}).on("error", function(t) {
							e.isPaused ? this.generatedError = t : e.error(t);
						}).on("end", function() {
							e.isPaused ? e._upstreamEnded = !0 : e.end();
						});
					}, s.prototype.pause = function() {
						return !!n.prototype.pause.call(this) && (this._stream.pause(), !0);
					}, s.prototype.resume = function() {
						return !!n.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
					}, e.exports = s;
				}, {
					"../stream/GenericWorker": 28,
					"../utils": 32
				}],
				13: [function(t, e, r) {
					"use strict";
					var n = t("readable-stream").Readable;
					function i(t, e, r) {
						n.call(this, e), this._helper = t;
						var i = this;
						t.on("data", function(t, e) {
							i.push(t) || i._helper.pause(), r && r(e);
						}).on("error", function(t) {
							i.emit("error", t);
						}).on("end", function() {
							i.push(null);
						});
					}
					t("../utils").inherits(i, n), i.prototype._read = function() {
						this._helper.resume();
					}, e.exports = i;
				}, {
					"../utils": 32,
					"readable-stream": 16
				}],
				14: [function(t, e, r) {
					"use strict";
					e.exports = {
						isNode: "undefined" != typeof Buffer,
						newBufferFrom: function(t, e) {
							if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(t, e);
							if ("number" == typeof t) throw new Error("The \"data\" argument must not be a number");
							return new Buffer(t, e);
						},
						allocBuffer: function(t) {
							if (Buffer.alloc) return Buffer.alloc(t);
							var e = new Buffer(t);
							return e.fill(0), e;
						},
						isBuffer: function(t) {
							return Buffer.isBuffer(t);
						},
						isStream: function(t) {
							return t && "function" == typeof t.on && "function" == typeof t.pause && "function" == typeof t.resume;
						}
					};
				}, {}],
				15: [function(t, e, r) {
					"use strict";
					function s(t, e, r) {
						var i, n = u.getTypeOf(e), s = u.extend(r || {}, f);
						s.date = s.date || new Date(), null !== s.compression && (s.compression = s.compression.toUpperCase()), "string" == typeof s.unixPermissions && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (t = g(t)), s.createFolders && (i = _(t)) && b.call(this, i, !0);
						var a = "string" === n && !1 === s.binary && !1 === s.base64;
						r && void 0 !== r.binary || (s.binary = !a), (e instanceof d && 0 === e.uncompressedSize || s.dir || !e || 0 === e.length) && (s.base64 = !1, s.binary = !0, e = "", s.compression = "STORE", n = "string");
						var o = null;
						o = e instanceof d || e instanceof l ? e : p.isNode && p.isStream(e) ? new m(t, e) : u.prepareContent(t, e, s.binary, s.optimizedBinaryString, s.base64);
						var h = new c(t, o, s);
						this.files[t] = h;
					}
					var n = t("./utf8"), u = t("./utils"), l = t("./stream/GenericWorker"), a = t("./stream/StreamHelper"), f = t("./defaults"), d = t("./compressedObject"), c = t("./zipObject"), o = t("./generate"), p = t("./nodejsUtils"), m = t("./nodejs/NodejsStreamInputAdapter"), _ = function(t) {
						"/" === t.slice(-1) && (t = t.substring(0, t.length - 1));
						var e = t.lastIndexOf("/");
						return 0 < e ? t.substring(0, e) : "";
					}, g = function(t) {
						return "/" !== t.slice(-1) && (t += "/"), t;
					}, b = function(t, e) {
						return e = void 0 !== e ? e : f.createFolders, t = g(t), this.files[t] || s.call(this, t, null, {
							dir: !0,
							createFolders: e
						}), this.files[t];
					};
					function h(t) {
						return "[object RegExp]" === Object.prototype.toString.call(t);
					}
					e.exports = {
						load: function() {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
						},
						forEach: function(t) {
							var e, r, i;
							for (e in this.files) i = this.files[e], (r = e.slice(this.root.length, e.length)) && e.slice(0, this.root.length) === this.root && t(r, i);
						},
						filter: function(r) {
							var i = [];
							return this.forEach(function(t, e) {
								r(t, e) && i.push(e);
							}), i;
						},
						file: function(t, e, r) {
							if (1 !== arguments.length) return t = this.root + t, s.call(this, t, e, r), this;
							if (h(t)) {
								var i = t;
								return this.filter(function(t, e) {
									return !e.dir && i.test(t);
								});
							}
							var n = this.files[this.root + t];
							return n && !n.dir ? n : null;
						},
						folder: function(r) {
							if (!r) return this;
							if (h(r)) return this.filter(function(t, e) {
								return e.dir && r.test(t);
							});
							var t = this.root + r, e = b.call(this, t), i = this.clone();
							return i.root = e.name, i;
						},
						remove: function(r) {
							r = this.root + r;
							var t = this.files[r];
							if (t || ("/" !== r.slice(-1) && (r += "/"), t = this.files[r]), t && !t.dir) delete this.files[r];
							else for (var e = this.filter(function(t, e) {
								return e.name.slice(0, r.length) === r;
							}), i = 0; i < e.length; i++) delete this.files[e[i].name];
							return this;
						},
						generate: function(t) {
							throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
						},
						generateInternalStream: function(t) {
							var e, r = {};
							try {
								if ((r = u.extend(t || {}, {
									streamFiles: !1,
									compression: "STORE",
									compressionOptions: null,
									type: "",
									platform: "DOS",
									comment: null,
									mimeType: "application/zip",
									encodeFileName: n.utf8encode
								})).type = r.type.toLowerCase(), r.compression = r.compression.toUpperCase(), "binarystring" === r.type && (r.type = "string"), !r.type) throw new Error("No output type specified.");
								u.checkSupport(r.type), "darwin" !== r.platform && "freebsd" !== r.platform && "linux" !== r.platform && "sunos" !== r.platform || (r.platform = "UNIX"), "win32" === r.platform && (r.platform = "DOS");
								var i = r.comment || this.comment || "";
								e = o.generateWorker(this, r, i);
							} catch (t) {
								(e = new l("error")).error(t);
							}
							return new a(e, r.type || "string", r.mimeType);
						},
						generateAsync: function(t, e) {
							return this.generateInternalStream(t).accumulate(e);
						},
						generateNodeStream: function(t, e) {
							return (t = t || {}).type || (t.type = "nodebuffer"), this.generateInternalStream(t).toNodejsStream(e);
						}
					};
				}, {
					"./compressedObject": 2,
					"./defaults": 5,
					"./generate": 9,
					"./nodejs/NodejsStreamInputAdapter": 12,
					"./nodejsUtils": 14,
					"./stream/GenericWorker": 28,
					"./stream/StreamHelper": 29,
					"./utf8": 31,
					"./utils": 32,
					"./zipObject": 35
				}],
				16: [function(t, e, r) {
					e.exports = t("stream");
				}, { stream: void 0 }],
				17: [function(t, e, r) {
					"use strict";
					var i = t("./DataReader");
					function n(t) {
						i.call(this, t);
						for (var e = 0; e < this.data.length; e++) t[e] = 255 & t[e];
					}
					t("../utils").inherits(n, i), n.prototype.byteAt = function(t) {
						return this.data[this.zero + t];
					}, n.prototype.lastIndexOfSignature = function(t) {
						for (var e = t.charCodeAt(0), r = t.charCodeAt(1), i = t.charCodeAt(2), n = t.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === e && this.data[s + 1] === r && this.data[s + 2] === i && this.data[s + 3] === n) return s - this.zero;
						return -1;
					}, n.prototype.readAndCheckSignature = function(t) {
						var e = t.charCodeAt(0), r = t.charCodeAt(1), i = t.charCodeAt(2), n = t.charCodeAt(3), s = this.readData(4);
						return e === s[0] && r === s[1] && i === s[2] && n === s[3];
					}, n.prototype.readData = function(t) {
						if (this.checkOffset(t), 0 === t) return [];
						var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, e;
					}, e.exports = n;
				}, {
					"../utils": 32,
					"./DataReader": 18
				}],
				18: [function(t, e, r) {
					"use strict";
					var i = t("../utils");
					function n(t) {
						this.data = t, this.length = t.length, this.index = 0, this.zero = 0;
					}
					n.prototype = {
						checkOffset: function(t) {
							this.checkIndex(this.index + t);
						},
						checkIndex: function(t) {
							if (this.length < this.zero + t || t < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + t + "). Corrupted zip ?");
						},
						setIndex: function(t) {
							this.checkIndex(t), this.index = t;
						},
						skip: function(t) {
							this.setIndex(this.index + t);
						},
						byteAt: function(t) {},
						readInt: function(t) {
							var e, r = 0;
							for (this.checkOffset(t), e = this.index + t - 1; e >= this.index; e--) r = (r << 8) + this.byteAt(e);
							return this.index += t, r;
						},
						readString: function(t) {
							return i.transformTo("string", this.readData(t));
						},
						readData: function(t) {},
						lastIndexOfSignature: function(t) {},
						readAndCheckSignature: function(t) {},
						readDate: function() {
							var t = this.readInt(4);
							return new Date(Date.UTC(1980 + (t >> 25 & 127), (t >> 21 & 15) - 1, t >> 16 & 31, t >> 11 & 31, t >> 5 & 63, (31 & t) << 1));
						}
					}, e.exports = n;
				}, { "../utils": 32 }],
				19: [function(t, e, r) {
					"use strict";
					var i = t("./Uint8ArrayReader");
					function n(t) {
						i.call(this, t);
					}
					t("../utils").inherits(n, i), n.prototype.readData = function(t) {
						this.checkOffset(t);
						var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, e;
					}, e.exports = n;
				}, {
					"../utils": 32,
					"./Uint8ArrayReader": 21
				}],
				20: [function(t, e, r) {
					"use strict";
					var i = t("./DataReader");
					function n(t) {
						i.call(this, t);
					}
					t("../utils").inherits(n, i), n.prototype.byteAt = function(t) {
						return this.data.charCodeAt(this.zero + t);
					}, n.prototype.lastIndexOfSignature = function(t) {
						return this.data.lastIndexOf(t) - this.zero;
					}, n.prototype.readAndCheckSignature = function(t) {
						return t === this.readData(4);
					}, n.prototype.readData = function(t) {
						this.checkOffset(t);
						var e = this.data.slice(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, e;
					}, e.exports = n;
				}, {
					"../utils": 32,
					"./DataReader": 18
				}],
				21: [function(t, e, r) {
					"use strict";
					var i = t("./ArrayReader");
					function n(t) {
						i.call(this, t);
					}
					t("../utils").inherits(n, i), n.prototype.readData = function(t) {
						if (this.checkOffset(t), 0 === t) return new Uint8Array(0);
						var e = this.data.subarray(this.zero + this.index, this.zero + this.index + t);
						return this.index += t, e;
					}, e.exports = n;
				}, {
					"../utils": 32,
					"./ArrayReader": 17
				}],
				22: [function(t, e, r) {
					"use strict";
					var i = t("../utils"), n = t("../support"), s = t("./ArrayReader"), a = t("./StringReader"), o = t("./NodeBufferReader"), h = t("./Uint8ArrayReader");
					e.exports = function(t) {
						var e = i.getTypeOf(t);
						return i.checkSupport(e), "string" !== e || n.uint8array ? "nodebuffer" === e ? new o(t) : n.uint8array ? new h(i.transformTo("uint8array", t)) : new s(i.transformTo("array", t)) : new a(t);
					};
				}, {
					"../support": 30,
					"../utils": 32,
					"./ArrayReader": 17,
					"./NodeBufferReader": 19,
					"./StringReader": 20,
					"./Uint8ArrayReader": 21
				}],
				23: [function(t, e, r) {
					"use strict";
					r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
				}, {}],
				24: [function(t, e, r) {
					"use strict";
					var i = t("./GenericWorker"), n = t("../utils");
					function s(t) {
						i.call(this, "ConvertWorker to " + t), this.destType = t;
					}
					n.inherits(s, i), s.prototype.processChunk = function(t) {
						this.push({
							data: n.transformTo(this.destType, t.data),
							meta: t.meta
						});
					}, e.exports = s;
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				25: [function(t, e, r) {
					"use strict";
					var i = t("./GenericWorker"), n = t("../crc32");
					function s() {
						i.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
					}
					t("../utils").inherits(s, i), s.prototype.processChunk = function(t) {
						this.streamInfo.crc32 = n(t.data, this.streamInfo.crc32 || 0), this.push(t);
					}, e.exports = s;
				}, {
					"../crc32": 4,
					"../utils": 32,
					"./GenericWorker": 28
				}],
				26: [function(t, e, r) {
					"use strict";
					var i = t("../utils"), n = t("./GenericWorker");
					function s(t) {
						n.call(this, "DataLengthProbe for " + t), this.propName = t, this.withStreamInfo(t, 0);
					}
					i.inherits(s, n), s.prototype.processChunk = function(t) {
						if (t) {
							var e = this.streamInfo[this.propName] || 0;
							this.streamInfo[this.propName] = e + t.data.length;
						}
						n.prototype.processChunk.call(this, t);
					}, e.exports = s;
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				27: [function(t, e, r) {
					"use strict";
					var i = t("../utils"), n = t("./GenericWorker");
					function s(t) {
						n.call(this, "DataWorker");
						var e = this;
						this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, t.then(function(t) {
							e.dataIsReady = !0, e.data = t, e.max = t && t.length || 0, e.type = i.getTypeOf(t), e.isPaused || e._tickAndRepeat();
						}, function(t) {
							e.error(t);
						});
					}
					i.inherits(s, n), s.prototype.cleanUp = function() {
						n.prototype.cleanUp.call(this), this.data = null;
					}, s.prototype.resume = function() {
						return !!n.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, i.delay(this._tickAndRepeat, [], this)), !0);
					}, s.prototype._tickAndRepeat = function() {
						this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (i.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
					}, s.prototype._tick = function() {
						if (this.isPaused || this.isFinished) return !1;
						var t = null, e = Math.min(this.max, this.index + 16384);
						if (this.index >= this.max) return this.end();
						switch (this.type) {
							case "string":
								t = this.data.substring(this.index, e);
								break;
							case "uint8array":
								t = this.data.subarray(this.index, e);
								break;
							case "array":
							case "nodebuffer": t = this.data.slice(this.index, e);
						}
						return this.index = e, this.push({
							data: t,
							meta: { percent: this.max ? this.index / this.max * 100 : 0 }
						});
					}, e.exports = s;
				}, {
					"../utils": 32,
					"./GenericWorker": 28
				}],
				28: [function(t, e, r) {
					"use strict";
					function i(t) {
						this.name = t || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
							data: [],
							end: [],
							error: []
						}, this.previous = null;
					}
					i.prototype = {
						push: function(t) {
							this.emit("data", t);
						},
						end: function() {
							if (this.isFinished) return !1;
							this.flush();
							try {
								this.emit("end"), this.cleanUp(), this.isFinished = !0;
							} catch (t) {
								this.emit("error", t);
							}
							return !0;
						},
						error: function(t) {
							return !this.isFinished && (this.isPaused ? this.generatedError = t : (this.isFinished = !0, this.emit("error", t), this.previous && this.previous.error(t), this.cleanUp()), !0);
						},
						on: function(t, e) {
							return this._listeners[t].push(e), this;
						},
						cleanUp: function() {
							this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
						},
						emit: function(t, e) {
							if (this._listeners[t]) for (var r = 0; r < this._listeners[t].length; r++) this._listeners[t][r].call(this, e);
						},
						pipe: function(t) {
							return t.registerPrevious(this);
						},
						registerPrevious: function(t) {
							if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
							this.streamInfo = t.streamInfo, this.mergeStreamInfo(), this.previous = t;
							var e = this;
							return t.on("data", function(t) {
								e.processChunk(t);
							}), t.on("end", function() {
								e.end();
							}), t.on("error", function(t) {
								e.error(t);
							}), this;
						},
						pause: function() {
							return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
						},
						resume: function() {
							if (!this.isPaused || this.isFinished) return !1;
							var t = this.isPaused = !1;
							return this.generatedError && (this.error(this.generatedError), t = !0), this.previous && this.previous.resume(), !t;
						},
						flush: function() {},
						processChunk: function(t) {
							this.push(t);
						},
						withStreamInfo: function(t, e) {
							return this.extraStreamInfo[t] = e, this.mergeStreamInfo(), this;
						},
						mergeStreamInfo: function() {
							for (var t in this.extraStreamInfo) this.extraStreamInfo.hasOwnProperty(t) && (this.streamInfo[t] = this.extraStreamInfo[t]);
						},
						lock: function() {
							if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
							this.isLocked = !0, this.previous && this.previous.lock();
						},
						toString: function() {
							var t = "Worker " + this.name;
							return this.previous ? this.previous + " -> " + t : t;
						}
					}, e.exports = i;
				}, {}],
				29: [function(t, e, r) {
					"use strict";
					var h = t("../utils"), n = t("./ConvertWorker"), s = t("./GenericWorker"), u = t("../base64"), i = t("../support"), a = t("../external"), o = null;
					if (i.nodestream) try {
						o = t("../nodejs/NodejsStreamOutputAdapter");
					} catch (t) {}
					function l(t, o) {
						return new a.Promise(function(e, r) {
							var i = [], n = t._internalType, s = t._outputType, a = t._mimeType;
							t.on("data", function(t, e) {
								i.push(t), o && o(e);
							}).on("error", function(t) {
								i = [], r(t);
							}).on("end", function() {
								try {
									e(function(t, e, r) {
										switch (t) {
											case "blob": return h.newBlob(h.transformTo("arraybuffer", e), r);
											case "base64": return u.encode(e);
											default: return h.transformTo(t, e);
										}
									}(s, function(t, e) {
										var r, i = 0, n = null, s = 0;
										for (r = 0; r < e.length; r++) s += e[r].length;
										switch (t) {
											case "string": return e.join("");
											case "array": return Array.prototype.concat.apply([], e);
											case "uint8array":
												for (n = new Uint8Array(s), r = 0; r < e.length; r++) n.set(e[r], i), i += e[r].length;
												return n;
											case "nodebuffer": return Buffer.concat(e);
											default: throw new Error("concat : unsupported type '" + t + "'");
										}
									}(n, i), a));
								} catch (t) {
									r(t);
								}
								i = [];
							}).resume();
						});
					}
					function f(t, e, r) {
						var i = e;
						switch (e) {
							case "blob":
							case "arraybuffer":
								i = "uint8array";
								break;
							case "base64": i = "string";
						}
						try {
							this._internalType = i, this._outputType = e, this._mimeType = r, h.checkSupport(i), this._worker = t.pipe(new n(i)), t.lock();
						} catch (t) {
							this._worker = new s("error"), this._worker.error(t);
						}
					}
					f.prototype = {
						accumulate: function(t) {
							return l(this, t);
						},
						on: function(t, e) {
							var r = this;
							return "data" === t ? this._worker.on(t, function(t) {
								e.call(r, t.data, t.meta);
							}) : this._worker.on(t, function() {
								h.delay(e, arguments, r);
							}), this;
						},
						resume: function() {
							return h.delay(this._worker.resume, [], this._worker), this;
						},
						pause: function() {
							return this._worker.pause(), this;
						},
						toNodejsStream: function(t) {
							if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
							return new o(this, { objectMode: "nodebuffer" !== this._outputType }, t);
						}
					}, e.exports = f;
				}, {
					"../base64": 1,
					"../external": 6,
					"../nodejs/NodejsStreamOutputAdapter": 13,
					"../support": 30,
					"../utils": 32,
					"./ConvertWorker": 24,
					"./GenericWorker": 28
				}],
				30: [function(t, e, r) {
					"use strict";
					if (r.base64 = !0, r.array = !0, r.string = !0, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = !1;
					else {
						var i = new ArrayBuffer(0);
						try {
							r.blob = 0 === new Blob([i], { type: "application/zip" }).size;
						} catch (t) {
							try {
								var n = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
								n.append(i), r.blob = 0 === n.getBlob("application/zip").size;
							} catch (t) {
								r.blob = !1;
							}
						}
					}
					try {
						r.nodestream = !!t("readable-stream").Readable;
					} catch (t) {
						r.nodestream = !1;
					}
				}, { "readable-stream": 16 }],
				31: [function(t, e, s) {
					"use strict";
					for (var o = t("./utils"), h = t("./support"), r = t("./nodejsUtils"), i = t("./stream/GenericWorker"), u = new Array(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
					u[254] = u[254] = 1;
					function a() {
						i.call(this, "utf-8 decode"), this.leftOver = null;
					}
					function l() {
						i.call(this, "utf-8 encode");
					}
					s.utf8encode = function(t) {
						return h.nodebuffer ? r.newBufferFrom(t, "utf-8") : function(t) {
							var e, r, i, n, s, a = t.length, o = 0;
							for (n = 0; n < a; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
							for (e = h.uint8array ? new Uint8Array(o) : new Array(o), n = s = 0; s < o; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), r < 128 ? e[s++] = r : (r < 2048 ? e[s++] = 192 | r >>> 6 : (r < 65536 ? e[s++] = 224 | r >>> 12 : (e[s++] = 240 | r >>> 18, e[s++] = 128 | r >>> 12 & 63), e[s++] = 128 | r >>> 6 & 63), e[s++] = 128 | 63 & r);
							return e;
						}(t);
					}, s.utf8decode = function(t) {
						return h.nodebuffer ? o.transformTo("nodebuffer", t).toString("utf-8") : function(t) {
							var e, r, i, n, s = t.length, a = new Array(2 * s);
							for (e = r = 0; e < s;) if ((i = t[e++]) < 128) a[r++] = i;
							else if (4 < (n = u[i])) a[r++] = 65533, e += n - 1;
							else {
								for (i &= 2 === n ? 31 : 3 === n ? 15 : 7; 1 < n && e < s;) i = i << 6 | 63 & t[e++], n--;
								1 < n ? a[r++] = 65533 : i < 65536 ? a[r++] = i : (i -= 65536, a[r++] = 55296 | i >> 10 & 1023, a[r++] = 56320 | 1023 & i);
							}
							return a.length !== r && (a.subarray ? a = a.subarray(0, r) : a.length = r), o.applyFromCharCode(a);
						}(t = o.transformTo(h.uint8array ? "uint8array" : "array", t));
					}, o.inherits(a, i), a.prototype.processChunk = function(t) {
						var e = o.transformTo(h.uint8array ? "uint8array" : "array", t.data);
						if (this.leftOver && this.leftOver.length) {
							if (h.uint8array) {
								var r = e;
								(e = new Uint8Array(r.length + this.leftOver.length)).set(this.leftOver, 0), e.set(r, this.leftOver.length);
							} else e = this.leftOver.concat(e);
							this.leftOver = null;
						}
						var i = function(t, e) {
							var r;
							for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; 0 <= r && 128 == (192 & t[r]);) r--;
							return r < 0 ? e : 0 === r ? e : r + u[t[r]] > e ? r : e;
						}(e), n = e;
						i !== e.length && (h.uint8array ? (n = e.subarray(0, i), this.leftOver = e.subarray(i, e.length)) : (n = e.slice(0, i), this.leftOver = e.slice(i, e.length))), this.push({
							data: s.utf8decode(n),
							meta: t.meta
						});
					}, a.prototype.flush = function() {
						this.leftOver && this.leftOver.length && (this.push({
							data: s.utf8decode(this.leftOver),
							meta: {}
						}), this.leftOver = null);
					}, s.Utf8DecodeWorker = a, o.inherits(l, i), l.prototype.processChunk = function(t) {
						this.push({
							data: s.utf8encode(t.data),
							meta: t.meta
						});
					}, s.Utf8EncodeWorker = l;
				}, {
					"./nodejsUtils": 14,
					"./stream/GenericWorker": 28,
					"./support": 30,
					"./utils": 32
				}],
				32: [function(t, e, a) {
					"use strict";
					var o = t("./support"), h = t("./base64"), r = t("./nodejsUtils"), i = t("set-immediate-shim"), u = t("./external");
					function n(t) {
						return t;
					}
					function l(t, e) {
						for (var r = 0; r < t.length; ++r) e[r] = 255 & t.charCodeAt(r);
						return e;
					}
					a.newBlob = function(e, r) {
						a.checkSupport("blob");
						try {
							return new Blob([e], { type: r });
						} catch (t) {
							try {
								var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
								return i.append(e), i.getBlob(r);
							} catch (t) {
								throw new Error("Bug : can't construct the Blob.");
							}
						}
					};
					var s = {
						stringifyByChunk: function(t, e, r) {
							var i = [], n = 0, s = t.length;
							if (s <= r) return String.fromCharCode.apply(null, t);
							for (; n < s;) "array" === e || "nodebuffer" === e ? i.push(String.fromCharCode.apply(null, t.slice(n, Math.min(n + r, s)))) : i.push(String.fromCharCode.apply(null, t.subarray(n, Math.min(n + r, s)))), n += r;
							return i.join("");
						},
						stringifyByChar: function(t) {
							for (var e = "", r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
							return e;
						},
						applyCanBeUsed: {
							uint8array: function() {
								try {
									return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
								} catch (t) {
									return !1;
								}
							}(),
							nodebuffer: function() {
								try {
									return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
								} catch (t) {
									return !1;
								}
							}()
						}
					};
					function f(t) {
						var e = 65536, r = a.getTypeOf(t), i = !0;
						if ("uint8array" === r ? i = s.applyCanBeUsed.uint8array : "nodebuffer" === r && (i = s.applyCanBeUsed.nodebuffer), i) for (; 1 < e;) try {
							return s.stringifyByChunk(t, r, e);
						} catch (t) {
							e = Math.floor(e / 2);
						}
						return s.stringifyByChar(t);
					}
					function d(t, e) {
						for (var r = 0; r < t.length; r++) e[r] = t[r];
						return e;
					}
					a.applyFromCharCode = f;
					var c = {};
					c.string = {
						string: n,
						array: function(t) {
							return l(t, new Array(t.length));
						},
						arraybuffer: function(t) {
							return c.string.uint8array(t).buffer;
						},
						uint8array: function(t) {
							return l(t, new Uint8Array(t.length));
						},
						nodebuffer: function(t) {
							return l(t, r.allocBuffer(t.length));
						}
					}, c.array = {
						string: f,
						array: n,
						arraybuffer: function(t) {
							return new Uint8Array(t).buffer;
						},
						uint8array: function(t) {
							return new Uint8Array(t);
						},
						nodebuffer: function(t) {
							return r.newBufferFrom(t);
						}
					}, c.arraybuffer = {
						string: function(t) {
							return f(new Uint8Array(t));
						},
						array: function(t) {
							return d(new Uint8Array(t), new Array(t.byteLength));
						},
						arraybuffer: n,
						uint8array: function(t) {
							return new Uint8Array(t);
						},
						nodebuffer: function(t) {
							return r.newBufferFrom(new Uint8Array(t));
						}
					}, c.uint8array = {
						string: f,
						array: function(t) {
							return d(t, new Array(t.length));
						},
						arraybuffer: function(t) {
							return t.buffer;
						},
						uint8array: n,
						nodebuffer: function(t) {
							return r.newBufferFrom(t);
						}
					}, c.nodebuffer = {
						string: f,
						array: function(t) {
							return d(t, new Array(t.length));
						},
						arraybuffer: function(t) {
							return c.nodebuffer.uint8array(t).buffer;
						},
						uint8array: function(t) {
							return d(t, new Uint8Array(t.length));
						},
						nodebuffer: n
					}, a.transformTo = function(t, e) {
						if (e = e || "", !t) return e;
						a.checkSupport(t);
						return c[a.getTypeOf(e)][t](e);
					}, a.resolve = function(t) {
						for (var e = t.split("/"), r = [], i = 0; i < e.length; i++) {
							var n = e[i];
							"." === n || "" === n && 0 !== i && i !== e.length - 1 || (".." === n ? r.pop() : r.push(n));
						}
						return r.join("/");
					}, a.getTypeOf = function(t) {
						return "string" == typeof t ? "string" : "[object Array]" === Object.prototype.toString.call(t) ? "array" : o.nodebuffer && r.isBuffer(t) ? "nodebuffer" : o.uint8array && t instanceof Uint8Array ? "uint8array" : o.arraybuffer && t instanceof ArrayBuffer ? "arraybuffer" : void 0;
					}, a.checkSupport = function(t) {
						if (!o[t.toLowerCase()]) throw new Error(t + " is not supported by this platform");
					}, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(t) {
						var e, r, i = "";
						for (r = 0; r < (t || "").length; r++) i += "\\x" + ((e = t.charCodeAt(r)) < 16 ? "0" : "") + e.toString(16).toUpperCase();
						return i;
					}, a.delay = function(t, e, r) {
						i(function() {
							t.apply(r || null, e || []);
						});
					}, a.inherits = function(t, e) {
						function r() {}
						r.prototype = e.prototype, t.prototype = new r();
					}, a.extend = function() {
						var t, e, r = {};
						for (t = 0; t < arguments.length; t++) for (e in arguments[t]) arguments[t].hasOwnProperty(e) && void 0 === r[e] && (r[e] = arguments[t][e]);
						return r;
					}, a.prepareContent = function(r, t, i, n, s) {
						return u.Promise.resolve(t).then(function(i) {
							return o.blob && (i instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(i))) && "undefined" != typeof FileReader ? new u.Promise(function(e, r) {
								var t = new FileReader();
								t.onload = function(t) {
									e(t.target.result);
								}, t.onerror = function(t) {
									r(t.target.error);
								}, t.readAsArrayBuffer(i);
							}) : i;
						}).then(function(t) {
							var e = a.getTypeOf(t);
							return e ? ("arraybuffer" === e ? t = a.transformTo("uint8array", t) : "string" === e && (s ? t = h.decode(t) : i && !0 !== n && (t = function(t) {
								return l(t, o.uint8array ? new Uint8Array(t.length) : new Array(t.length));
							}(t))), t) : u.Promise.reject(new Error("Can't read the data of '" + r + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
						});
					};
				}, {
					"./base64": 1,
					"./external": 6,
					"./nodejsUtils": 14,
					"./support": 30,
					"set-immediate-shim": 54
				}],
				33: [function(t, e, r) {
					"use strict";
					var i = t("./reader/readerFor"), n = t("./utils"), s = t("./signature"), a = t("./zipEntry"), o = (t("./utf8"), t("./support"));
					function h(t) {
						this.files = [], this.loadOptions = t;
					}
					h.prototype = {
						checkSignature: function(t) {
							if (!this.reader.readAndCheckSignature(t)) {
								this.reader.index -= 4;
								var e = this.reader.readString(4);
								throw new Error("Corrupted zip or bug: unexpected signature (" + n.pretty(e) + ", expected " + n.pretty(t) + ")");
							}
						},
						isSignature: function(t, e) {
							var r = this.reader.index;
							this.reader.setIndex(t);
							var i = this.reader.readString(4) === e;
							return this.reader.setIndex(r), i;
						},
						readBlockEndOfCentral: function() {
							this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
							var t = this.reader.readData(this.zipCommentLength), e = o.uint8array ? "uint8array" : "array", r = n.transformTo(e, t);
							this.zipComment = this.loadOptions.decodeFileName(r);
						},
						readBlockZip64EndOfCentral: function() {
							this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
							for (var t, e, r, i = this.zip64EndOfCentralSize - 44; 0 < i;) t = this.reader.readInt(2), e = this.reader.readInt(4), r = this.reader.readData(e), this.zip64ExtensibleData[t] = {
								id: t,
								length: e,
								value: r
							};
						},
						readBlockZip64EndOfCentralLocator: function() {
							if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
						},
						readLocalFiles: function() {
							var t = 0, e;
							for (; t < this.files.length; t++) e = this.files[t], this.reader.setIndex(e.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), e.readLocalPart(this.reader), e.handleUTF8(), e.processAttributes();
						},
						readCentralDir: function() {
							var t;
							for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER);) (t = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(t);
							if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
						},
						readEndOfCentral: function() {
							var t = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
							if (t < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
							this.reader.setIndex(t);
							var e = t;
							if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === n.MAX_VALUE_16BITS || this.diskWithCentralDirStart === n.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === n.MAX_VALUE_16BITS || this.centralDirRecords === n.MAX_VALUE_16BITS || this.centralDirSize === n.MAX_VALUE_32BITS || this.centralDirOffset === n.MAX_VALUE_32BITS) {
								if (this.zip64 = !0, (t = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
								if (this.reader.setIndex(t), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
								this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
							}
							var r = this.centralDirOffset + this.centralDirSize;
							this.zip64 && (r += 20, r += 12 + this.zip64EndOfCentralSize);
							var i = e - r;
							if (0 < i) this.isSignature(e, s.CENTRAL_FILE_HEADER) || (this.reader.zero = i);
							else if (i < 0) throw new Error("Corrupted zip: missing " + Math.abs(i) + " bytes.");
						},
						prepareReader: function(t) {
							this.reader = i(t);
						},
						load: function(t) {
							this.prepareReader(t), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
						}
					}, e.exports = h;
				}, {
					"./reader/readerFor": 22,
					"./signature": 23,
					"./support": 30,
					"./utf8": 31,
					"./utils": 32,
					"./zipEntry": 34
				}],
				34: [function(t, e, r) {
					"use strict";
					var i = t("./reader/readerFor"), s = t("./utils"), n = t("./compressedObject"), a = t("./crc32"), o = t("./utf8"), h = t("./compressions"), u = t("./support");
					function l(t, e) {
						this.options = t, this.loadOptions = e;
					}
					l.prototype = {
						isEncrypted: function() {
							return 1 == (1 & this.bitFlag);
						},
						useUTF8: function() {
							return 2048 == (2048 & this.bitFlag);
						},
						readLocalPart: function(t) {
							var e, r;
							if (t.skip(22), this.fileNameLength = t.readInt(2), r = t.readInt(2), this.fileName = t.readData(this.fileNameLength), t.skip(r), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
							if (null === (e = function(t) {
								for (var e in h) if (h.hasOwnProperty(e) && h[e].magic === t) return h[e];
								return null;
							}(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
							this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, e, t.readData(this.compressedSize));
						},
						readCentralPart: function(t) {
							this.versionMadeBy = t.readInt(2), t.skip(2), this.bitFlag = t.readInt(2), this.compressionMethod = t.readString(2), this.date = t.readDate(), this.crc32 = t.readInt(4), this.compressedSize = t.readInt(4), this.uncompressedSize = t.readInt(4);
							var e = t.readInt(2);
							if (this.extraFieldsLength = t.readInt(2), this.fileCommentLength = t.readInt(2), this.diskNumberStart = t.readInt(2), this.internalFileAttributes = t.readInt(2), this.externalFileAttributes = t.readInt(4), this.localHeaderOffset = t.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
							t.skip(e), this.readExtraFields(t), this.parseZIP64ExtraField(t), this.fileComment = t.readData(this.fileCommentLength);
						},
						processAttributes: function() {
							this.unixPermissions = null, this.dosPermissions = null;
							var t = this.versionMadeBy >> 8;
							this.dir = !!(16 & this.externalFileAttributes), 0 == t && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == t && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = !0);
						},
						parseZIP64ExtraField: function(t) {
							if (this.extraFields[1]) {
								var e = i(this.extraFields[1].value);
								this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
							}
						},
						readExtraFields: function(t) {
							var e, r, i, n = t.index + this.extraFieldsLength;
							for (this.extraFields || (this.extraFields = {}); t.index + 4 < n;) e = t.readInt(2), r = t.readInt(2), i = t.readData(r), this.extraFields[e] = {
								id: e,
								length: r,
								value: i
							};
							t.setIndex(n);
						},
						handleUTF8: function() {
							var t = u.uint8array ? "uint8array" : "array";
							if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
							else {
								var e = this.findExtraFieldUnicodePath();
								if (null !== e) this.fileNameStr = e;
								else {
									var r = s.transformTo(t, this.fileName);
									this.fileNameStr = this.loadOptions.decodeFileName(r);
								}
								var i = this.findExtraFieldUnicodeComment();
								if (null !== i) this.fileCommentStr = i;
								else {
									var n = s.transformTo(t, this.fileComment);
									this.fileCommentStr = this.loadOptions.decodeFileName(n);
								}
							}
						},
						findExtraFieldUnicodePath: function() {
							var t = this.extraFields[28789];
							if (t) {
								var e = i(t.value);
								return 1 !== e.readInt(1) ? null : a(this.fileName) !== e.readInt(4) ? null : o.utf8decode(e.readData(t.length - 5));
							}
							return null;
						},
						findExtraFieldUnicodeComment: function() {
							var t = this.extraFields[25461];
							if (t) {
								var e = i(t.value);
								return 1 !== e.readInt(1) ? null : a(this.fileComment) !== e.readInt(4) ? null : o.utf8decode(e.readData(t.length - 5));
							}
							return null;
						}
					}, e.exports = l;
				}, {
					"./compressedObject": 2,
					"./compressions": 3,
					"./crc32": 4,
					"./reader/readerFor": 22,
					"./support": 30,
					"./utf8": 31,
					"./utils": 32
				}],
				35: [function(t, e, r) {
					"use strict";
					function i(t, e, r) {
						this.name = t, this.dir = r.dir, this.date = r.date, this.comment = r.comment, this.unixPermissions = r.unixPermissions, this.dosPermissions = r.dosPermissions, this._data = e, this._dataBinary = r.binary, this.options = {
							compression: r.compression,
							compressionOptions: r.compressionOptions
						};
					}
					var s = t("./stream/StreamHelper"), n = t("./stream/DataWorker"), a = t("./utf8"), o = t("./compressedObject"), h = t("./stream/GenericWorker");
					i.prototype = {
						internalStream: function(t) {
							var e = null, r = "string";
							try {
								if (!t) throw new Error("No output type specified.");
								var i = "string" === (r = t.toLowerCase()) || "text" === r;
								"binarystring" !== r && "text" !== r || (r = "string"), e = this._decompressWorker();
								var n = !this._dataBinary;
								n && !i && (e = e.pipe(new a.Utf8EncodeWorker())), !n && i && (e = e.pipe(new a.Utf8DecodeWorker()));
							} catch (t) {
								(e = new h("error")).error(t);
							}
							return new s(e, r, "");
						},
						async: function(t, e) {
							return this.internalStream(t).accumulate(e);
						},
						nodeStream: function(t, e) {
							return this.internalStream(t || "nodebuffer").toNodejsStream(e);
						},
						_compressWorker: function(t, e) {
							if (this._data instanceof o && this._data.compression.magic === t.magic) return this._data.getCompressedWorker();
							var r = this._decompressWorker();
							return this._dataBinary || (r = r.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r, t, e);
						},
						_decompressWorker: function() {
							return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new n(this._data);
						}
					};
					for (var u = [
						"asText",
						"asBinary",
						"asNodeBuffer",
						"asUint8Array",
						"asArrayBuffer"
					], l = function() {
						throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					}, f = 0; f < u.length; f++) i.prototype[u[f]] = l;
					e.exports = i;
				}, {
					"./compressedObject": 2,
					"./stream/DataWorker": 27,
					"./stream/GenericWorker": 28,
					"./stream/StreamHelper": 29,
					"./utf8": 31
				}],
				36: [function(t, l, e) {
					(function(e) {
						"use strict";
						var r, i, t = e.MutationObserver || e.WebKitMutationObserver;
						if (t) {
							var n = 0, s = new t(u), a = e.document.createTextNode("");
							s.observe(a, { characterData: !0 }), r = function() {
								a.data = n = ++n % 2;
							};
						} else if (e.setImmediate || void 0 === e.MessageChannel) r = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
							var t = e.document.createElement("script");
							t.onreadystatechange = function() {
								u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
							}, e.document.documentElement.appendChild(t);
						} : function() {
							setTimeout(u, 0);
						};
						else {
							var o = new e.MessageChannel();
							o.port1.onmessage = u, r = function() {
								o.port2.postMessage(0);
							};
						}
						var h = [];
						function u() {
							var t, e;
							i = !0;
							for (var r = h.length; r;) {
								for (e = h, h = [], t = -1; ++t < r;) e[t]();
								r = h.length;
							}
							i = !1;
						}
						l.exports = function(t) {
							1 !== h.push(t) || i || r();
						};
					}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
				}, {}],
				37: [function(t, e, r) {
					"use strict";
					var n = t("immediate");
					function u() {}
					var l = {}, s = ["REJECTED"], a = ["FULFILLED"], i = ["PENDING"];
					function o(t) {
						if ("function" != typeof t) throw new TypeError("resolver must be a function");
						this.state = i, this.queue = [], this.outcome = void 0, t !== u && c(this, t);
					}
					function h(t, e, r) {
						this.promise = t, "function" == typeof e && (this.onFulfilled = e, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r && (this.onRejected = r, this.callRejected = this.otherCallRejected);
					}
					function f(e, r, i) {
						n(function() {
							var t;
							try {
								t = r(i);
							} catch (t) {
								return l.reject(e, t);
							}
							t === e ? l.reject(e, new TypeError("Cannot resolve promise with itself")) : l.resolve(e, t);
						});
					}
					function d(t) {
						var e = t && t.then;
						if (t && ("object" == typeof t || "function" == typeof t) && "function" == typeof e) return function() {
							e.apply(t, arguments);
						};
					}
					function c(e, t) {
						var r = !1;
						function i(t) {
							r || (r = !0, l.reject(e, t));
						}
						function n(t) {
							r || (r = !0, l.resolve(e, t));
						}
						var s = p(function() {
							t(n, i);
						});
						"error" === s.status && i(s.value);
					}
					function p(t, e) {
						var r = {};
						try {
							r.value = t(e), r.status = "success";
						} catch (t) {
							r.status = "error", r.value = t;
						}
						return r;
					}
					(e.exports = o).prototype.finally = function(e) {
						if ("function" != typeof e) return this;
						var r = this.constructor;
						return this.then(function(t) {
							return r.resolve(e()).then(function() {
								return t;
							});
						}, function(t) {
							return r.resolve(e()).then(function() {
								throw t;
							});
						});
					}, o.prototype.catch = function(t) {
						return this.then(null, t);
					}, o.prototype.then = function(t, e) {
						if ("function" != typeof t && this.state === a || "function" != typeof e && this.state === s) return this;
						var r = new this.constructor(u);
						this.state !== i ? f(r, this.state === a ? t : e, this.outcome) : this.queue.push(new h(r, t, e));
						return r;
					}, h.prototype.callFulfilled = function(t) {
						l.resolve(this.promise, t);
					}, h.prototype.otherCallFulfilled = function(t) {
						f(this.promise, this.onFulfilled, t);
					}, h.prototype.callRejected = function(t) {
						l.reject(this.promise, t);
					}, h.prototype.otherCallRejected = function(t) {
						f(this.promise, this.onRejected, t);
					}, l.resolve = function(t, e) {
						var r = p(d, e);
						if ("error" === r.status) return l.reject(t, r.value);
						var i = r.value;
						if (i) c(t, i);
						else {
							t.state = a, t.outcome = e;
							for (var n = -1, s = t.queue.length; ++n < s;) t.queue[n].callFulfilled(e);
						}
						return t;
					}, l.reject = function(t, e) {
						t.state = s, t.outcome = e;
						for (var r = -1, i = t.queue.length; ++r < i;) t.queue[r].callRejected(e);
						return t;
					}, o.resolve = function(t) {
						if (t instanceof this) return t;
						return l.resolve(new this(u), t);
					}, o.reject = function(t) {
						var e = new this(u);
						return l.reject(e, t);
					}, o.all = function(t) {
						var r = this;
						if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
						var i = t.length, n = !1;
						if (!i) return this.resolve([]);
						var s = new Array(i), a = 0, e = -1, o = new this(u);
						for (; ++e < i;) h(t[e], e);
						return o;
						function h(t, e) {
							r.resolve(t).then(function(t) {
								s[e] = t, ++a !== i || n || (n = !0, l.resolve(o, s));
							}, function(t) {
								n || (n = !0, l.reject(o, t));
							});
						}
					}, o.race = function(t) {
						var e = this;
						if ("[object Array]" !== Object.prototype.toString.call(t)) return this.reject(new TypeError("must be an array"));
						var r = t.length, i = !1;
						if (!r) return this.resolve([]);
						var n = -1, s = new this(u);
						for (; ++n < r;) a = t[n], e.resolve(a).then(function(t) {
							i || (i = !0, l.resolve(s, t));
						}, function(t) {
							i || (i = !0, l.reject(s, t));
						});
						var a;
						return s;
					};
				}, { immediate: 36 }],
				38: [function(t, e, r) {
					"use strict";
					var i = {};
					(0, t("./lib/utils/common").assign)(i, t("./lib/deflate"), t("./lib/inflate"), t("./lib/zlib/constants")), e.exports = i;
				}, {
					"./lib/deflate": 39,
					"./lib/inflate": 40,
					"./lib/utils/common": 41,
					"./lib/zlib/constants": 44
				}],
				39: [function(t, e, r) {
					"use strict";
					var a = t("./zlib/deflate"), o = t("./utils/common"), h = t("./utils/strings"), n = t("./zlib/messages"), s = t("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, d = 0, c = 8;
					function p(t) {
						if (!(this instanceof p)) return new p(t);
						this.options = o.assign({
							level: f,
							method: c,
							chunkSize: 16384,
							windowBits: 15,
							memLevel: 8,
							strategy: d,
							to: ""
						}, t || {});
						var e = this.options;
						e.raw && 0 < e.windowBits ? e.windowBits = -e.windowBits : e.gzip && 0 < e.windowBits && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
						var r = a.deflateInit2(this.strm, e.level, e.method, e.windowBits, e.memLevel, e.strategy);
						if (r !== l) throw new Error(n[r]);
						if (e.header && a.deflateSetHeader(this.strm, e.header), e.dictionary) {
							var i = "string" == typeof e.dictionary ? h.string2buf(e.dictionary) : "[object ArrayBuffer]" === u.call(e.dictionary) ? new Uint8Array(e.dictionary) : e.dictionary;
							if ((r = a.deflateSetDictionary(this.strm, i)) !== l) throw new Error(n[r]);
							this._dict_set = !0;
						}
					}
					function i(t, e) {
						var r = new p(e);
						if (r.push(t, !0), r.err) throw r.msg || n[r.err];
						return r.result;
					}
					p.prototype.push = function(t, e) {
						var r, i, n = this.strm, s = this.options.chunkSize;
						if (this.ended) return !1;
						i = e === ~~e ? e : !0 === e ? 4 : 0, "string" == typeof t ? n.input = h.string2buf(t) : "[object ArrayBuffer]" === u.call(t) ? n.input = new Uint8Array(t) : n.input = t, n.next_in = 0, n.avail_in = n.input.length;
						do {
							if (0 === n.avail_out && (n.output = new o.Buf8(s), n.next_out = 0, n.avail_out = s), 1 !== (r = a.deflate(n, i)) && r !== l) return this.onEnd(r), !(this.ended = !0);
							0 !== n.avail_out && (0 !== n.avail_in || 4 !== i && 2 !== i) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(n.output, n.next_out))) : this.onData(o.shrinkBuf(n.output, n.next_out)));
						} while ((0 < n.avail_in || 0 === n.avail_out) && 1 !== r);
						return 4 === i ? (r = a.deflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === l) : 2 !== i || (this.onEnd(l), !(n.avail_out = 0));
					}, p.prototype.onData = function(t) {
						this.chunks.push(t);
					}, p.prototype.onEnd = function(t) {
						t === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
					}, r.Deflate = p, r.deflate = i, r.deflateRaw = function(t, e) {
						return (e = e || {}).raw = !0, i(t, e);
					}, r.gzip = function(t, e) {
						return (e = e || {}).gzip = !0, i(t, e);
					};
				}, {
					"./utils/common": 41,
					"./utils/strings": 42,
					"./zlib/deflate": 46,
					"./zlib/messages": 51,
					"./zlib/zstream": 53
				}],
				40: [function(t, e, r) {
					"use strict";
					var d = t("./zlib/inflate"), c = t("./utils/common"), p = t("./utils/strings"), m = t("./zlib/constants"), i = t("./zlib/messages"), n = t("./zlib/zstream"), s = t("./zlib/gzheader"), _ = Object.prototype.toString;
					function a(t) {
						if (!(this instanceof a)) return new a(t);
						this.options = c.assign({
							chunkSize: 16384,
							windowBits: 0,
							to: ""
						}, t || {});
						var e = this.options;
						e.raw && 0 <= e.windowBits && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(0 <= e.windowBits && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), 15 < e.windowBits && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new n(), this.strm.avail_out = 0;
						var r = d.inflateInit2(this.strm, e.windowBits);
						if (r !== m.Z_OK) throw new Error(i[r]);
						this.header = new s(), d.inflateGetHeader(this.strm, this.header);
					}
					function o(t, e) {
						var r = new a(e);
						if (r.push(t, !0), r.err) throw r.msg || i[r.err];
						return r.result;
					}
					a.prototype.push = function(t, e) {
						var r, i, n, s, a, o, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = !1;
						if (this.ended) return !1;
						i = e === ~~e ? e : !0 === e ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof t ? h.input = p.binstring2buf(t) : "[object ArrayBuffer]" === _.call(t) ? h.input = new Uint8Array(t) : h.input = t, h.next_in = 0, h.avail_in = h.input.length;
						do {
							if (0 === h.avail_out && (h.output = new c.Buf8(u), h.next_out = 0, h.avail_out = u), (r = d.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r = d.inflateSetDictionary(this.strm, o)), r === m.Z_BUF_ERROR && !0 === f && (r = m.Z_OK, f = !1), r !== m.Z_STREAM_END && r !== m.Z_OK) return this.onEnd(r), !(this.ended = !0);
							h.next_out && (0 !== h.avail_out && r !== m.Z_STREAM_END && (0 !== h.avail_in || i !== m.Z_FINISH && i !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (n = p.utf8border(h.output, h.next_out), s = h.next_out - n, a = p.buf2string(h.output, n), h.next_out = s, h.avail_out = u - s, s && c.arraySet(h.output, h.output, n, s, 0), this.onData(a)) : this.onData(c.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = !0);
						} while ((0 < h.avail_in || 0 === h.avail_out) && r !== m.Z_STREAM_END);
						return r === m.Z_STREAM_END && (i = m.Z_FINISH), i === m.Z_FINISH ? (r = d.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === m.Z_OK) : i !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
					}, a.prototype.onData = function(t) {
						this.chunks.push(t);
					}, a.prototype.onEnd = function(t) {
						t === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = c.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
					}, r.Inflate = a, r.inflate = o, r.inflateRaw = function(t, e) {
						return (e = e || {}).raw = !0, o(t, e);
					}, r.ungzip = o;
				}, {
					"./utils/common": 41,
					"./utils/strings": 42,
					"./zlib/constants": 44,
					"./zlib/gzheader": 47,
					"./zlib/inflate": 49,
					"./zlib/messages": 51,
					"./zlib/zstream": 53
				}],
				41: [function(t, e, r) {
					"use strict";
					var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
					r.assign = function(t) {
						for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
							var r = e.shift();
							if (r) {
								if ("object" != typeof r) throw new TypeError(r + "must be non-object");
								for (var i in r) r.hasOwnProperty(i) && (t[i] = r[i]);
							}
						}
						return t;
					}, r.shrinkBuf = function(t, e) {
						return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t);
					};
					var n = {
						arraySet: function(t, e, r, i, n) {
							if (e.subarray && t.subarray) t.set(e.subarray(r, r + i), n);
							else for (var s = 0; s < i; s++) t[n + s] = e[r + s];
						},
						flattenChunks: function(t) {
							var e = i = 0, r = t.length, i, n, s, a;
							for (; e < r; e++) i += t[e].length;
							for (a = new Uint8Array(i), e = n = 0, r = t.length; e < r; e++) s = t[e], a.set(s, n), n += s.length;
							return a;
						}
					}, s = {
						arraySet: function(t, e, r, i, n) {
							for (var s = 0; s < i; s++) t[n + s] = e[r + s];
						},
						flattenChunks: function(t) {
							return [].concat.apply([], t);
						}
					};
					r.setTyped = function(t) {
						t ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, n)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
					}, r.setTyped(i);
				}, {}],
				42: [function(t, e, r) {
					"use strict";
					var h = t("./common"), n = !0, s = !0;
					try {
						String.fromCharCode.apply(null, [0]);
					} catch (t) {
						n = !1;
					}
					try {
						String.fromCharCode.apply(null, new Uint8Array(1));
					} catch (t) {
						s = !1;
					}
					for (var u = new h.Buf8(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
					function l(t, e) {
						if (e < 65537 && (t.subarray && s || !t.subarray && n)) return String.fromCharCode.apply(null, h.shrinkBuf(t, e));
						for (var r = "", i = 0; i < e; i++) r += String.fromCharCode(t[i]);
						return r;
					}
					u[254] = u[254] = 1, r.string2buf = function(t) {
						var e, r, i, n, s, a = t.length, o = 0;
						for (n = 0; n < a; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
						for (e = new h.Buf8(o), n = s = 0; s < o; n++) 55296 == (64512 & (r = t.charCodeAt(n))) && n + 1 < a && 56320 == (64512 & (i = t.charCodeAt(n + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), n++), r < 128 ? e[s++] = r : (r < 2048 ? e[s++] = 192 | r >>> 6 : (r < 65536 ? e[s++] = 224 | r >>> 12 : (e[s++] = 240 | r >>> 18, e[s++] = 128 | r >>> 12 & 63), e[s++] = 128 | r >>> 6 & 63), e[s++] = 128 | 63 & r);
						return e;
					}, r.buf2binstring = function(t) {
						return l(t, t.length);
					}, r.binstring2buf = function(t) {
						for (var e = new h.Buf8(t.length), r = 0, i = e.length; r < i; r++) e[r] = t.charCodeAt(r);
						return e;
					}, r.buf2string = function(t, e) {
						var r, i, n, s, a = e || t.length, o = new Array(2 * a);
						for (r = i = 0; r < a;) if ((n = t[r++]) < 128) o[i++] = n;
						else if (4 < (s = u[n])) o[i++] = 65533, r += s - 1;
						else {
							for (n &= 2 === s ? 31 : 3 === s ? 15 : 7; 1 < s && r < a;) n = n << 6 | 63 & t[r++], s--;
							1 < s ? o[i++] = 65533 : n < 65536 ? o[i++] = n : (n -= 65536, o[i++] = 55296 | n >> 10 & 1023, o[i++] = 56320 | 1023 & n);
						}
						return l(o, i);
					}, r.utf8border = function(t, e) {
						var r;
						for ((e = e || t.length) > t.length && (e = t.length), r = e - 1; 0 <= r && 128 == (192 & t[r]);) r--;
						return r < 0 ? e : 0 === r ? e : r + u[t[r]] > e ? r : e;
					};
				}, { "./common": 41 }],
				43: [function(t, e, r) {
					"use strict";
					e.exports = function(t, e, r, i) {
						for (var n = 65535 & t | 0, s = t >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
							for (r -= a = 2e3 < r ? 2e3 : r; s = s + (n = n + e[i++] | 0) | 0, --a;);
							n %= 65521, s %= 65521;
						}
						return n | s << 16 | 0;
					};
				}, {}],
				44: [function(t, e, r) {
					"use strict";
					e.exports = {
						Z_NO_FLUSH: 0,
						Z_PARTIAL_FLUSH: 1,
						Z_SYNC_FLUSH: 2,
						Z_FULL_FLUSH: 3,
						Z_FINISH: 4,
						Z_BLOCK: 5,
						Z_TREES: 6,
						Z_OK: 0,
						Z_STREAM_END: 1,
						Z_NEED_DICT: 2,
						Z_ERRNO: -1,
						Z_STREAM_ERROR: -2,
						Z_DATA_ERROR: -3,
						Z_BUF_ERROR: -5,
						Z_NO_COMPRESSION: 0,
						Z_BEST_SPEED: 1,
						Z_BEST_COMPRESSION: 9,
						Z_DEFAULT_COMPRESSION: -1,
						Z_FILTERED: 1,
						Z_HUFFMAN_ONLY: 2,
						Z_RLE: 3,
						Z_FIXED: 4,
						Z_DEFAULT_STRATEGY: 0,
						Z_BINARY: 0,
						Z_TEXT: 1,
						Z_UNKNOWN: 2,
						Z_DEFLATED: 8
					};
				}, {}],
				45: [function(t, e, r) {
					"use strict";
					var o = function() {
						for (var t, e = [], r = 0; r < 256; r++) {
							t = r;
							for (var i = 0; i < 8; i++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
							e[r] = t;
						}
						return e;
					}();
					e.exports = function(t, e, r, i) {
						var n = o, s = i + r;
						t ^= -1;
						for (var a = i; a < s; a++) t = t >>> 8 ^ n[255 & (t ^ e[a])];
						return -1 ^ t;
					};
				}, {}],
				46: [function(t, e, r) {
					"use strict";
					var h, d = t("../utils/common"), u = t("./trees"), c = t("./adler32"), p = t("./crc32"), i = t("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, n = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
					function R(t, e) {
						return t.msg = i[e], e;
					}
					function T(t) {
						return (t << 1) - (4 < t ? 9 : 0);
					}
					function D(t) {
						for (var e = t.length; 0 <= --e;) t[e] = 0;
					}
					function F(t) {
						var e = t.state, r = e.pending;
						r > t.avail_out && (r = t.avail_out), 0 !== r && (d.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out), t.next_out += r, e.pending_out += r, t.total_out += r, t.avail_out -= r, e.pending -= r, 0 === e.pending && (e.pending_out = 0));
					}
					function N(t, e) {
						u._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, F(t.strm);
					}
					function U(t, e) {
						t.pending_buf[t.pending++] = e;
					}
					function P(t, e) {
						t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e;
					}
					function L(t, e) {
						var r, i, n = t.max_chain_length, s = t.strstart, a = t.prev_length, o = t.nice_match, h = t.strstart > t.w_size - z ? t.strstart - (t.w_size - z) : 0, u = t.window, l = t.w_mask, f = t.prev, d = t.strstart + S, c = u[s + a - 1], p = u[s + a];
						t.prev_length >= t.good_match && (n >>= 2), o > t.lookahead && (o = t.lookahead);
						do
							if (u[(r = e) + a] === p && u[r + a - 1] === c && u[r] === u[s] && u[++r] === u[s + 1]) {
								s += 2, r++;
								do								;
while (u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && u[++s] === u[++r] && s < d);
								if (i = S - (d - s), s = d - S, a < i) {
									if (t.match_start = e, o <= (a = i)) break;
									c = u[s + a - 1], p = u[s + a];
								}
							}
						while ((e = f[e & l]) > h && 0 != --n);
						return a <= t.lookahead ? a : t.lookahead;
					}
					function j(t) {
						var e, r, i, n, s, a, o, h, u, l, f = t.w_size;
						do {
							if (n = t.window_size - t.lookahead - t.strstart, t.strstart >= f + (f - z)) {
								for (d.arraySet(t.window, t.window, f, f, 0), t.match_start -= f, t.strstart -= f, t.block_start -= f, e = r = t.hash_size; i = t.head[--e], t.head[e] = f <= i ? i - f : 0, --r;);
								for (e = r = f; i = t.prev[--e], t.prev[e] = f <= i ? i - f : 0, --r;);
								n += f;
							}
							if (0 === t.strm.avail_in) break;
							if (a = t.strm, o = t.window, h = t.strstart + t.lookahead, u = n, l = void 0, l = a.avail_in, u < l && (l = u), r = 0 === l ? 0 : (a.avail_in -= l, d.arraySet(o, a.input, a.next_in, l, h), 1 === a.state.wrap ? a.adler = c(a.adler, o, l, h) : 2 === a.state.wrap && (a.adler = p(a.adler, o, l, h)), a.next_in += l, a.total_in += l, l), t.lookahead += r, t.lookahead + t.insert >= x) for (s = t.strstart - t.insert, t.ins_h = t.window[s], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + x - 1]) & t.hash_mask, t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < x)););
						} while (t.lookahead < z && 0 !== t.strm.avail_in);
					}
					function Z(t, e) {
						for (var r, i;;) {
							if (t.lookahead < z) {
								if (j(t), t.lookahead < z && e === l) return A;
								if (0 === t.lookahead) break;
							}
							if (r = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== r && t.strstart - r <= t.w_size - z && (t.match_length = L(t, r)), t.match_length >= x) if (i = u._tr_tally(t, t.strstart - t.match_start, t.match_length - x), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= x) {
								for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, 0 != --t.match_length;);
								t.strstart++;
							} else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
							else i = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
							if (i && (N(t, !1), 0 === t.strm.avail_out)) return A;
						}
						return t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
					}
					function W(t, e) {
						for (var r, i, n;;) {
							if (t.lookahead < z) {
								if (j(t), t.lookahead < z && e === l) return A;
								if (0 === t.lookahead) break;
							}
							if (r = 0, t.lookahead >= x && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = x - 1, 0 !== r && t.prev_length < t.max_lazy_match && t.strstart - r <= t.w_size - z && (t.match_length = L(t, r), t.match_length <= 5 && (1 === t.strategy || t.match_length === x && 4096 < t.strstart - t.match_start) && (t.match_length = x - 1)), t.prev_length >= x && t.match_length <= t.prev_length) {
								for (n = t.strstart + t.lookahead - x, i = u._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - x), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= n && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + x - 1]) & t.hash_mask, r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 != --t.prev_length;);
								if (t.match_available = 0, t.match_length = x - 1, t.strstart++, i && (N(t, !1), 0 === t.strm.avail_out)) return A;
							} else if (t.match_available) {
								if ((i = u._tr_tally(t, 0, t.window[t.strstart - 1])) && N(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return A;
							} else t.match_available = 1, t.strstart++, t.lookahead--;
						}
						return t.match_available && (i = u._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < x - 1 ? t.strstart : x - 1, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
					}
					function M(t, e, r, i, n) {
						this.good_length = t, this.max_lazy = e, this.nice_length = r, this.max_chain = i, this.func = n;
					}
					function H() {
						this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new d.Buf16(2 * w), this.dyn_dtree = new d.Buf16(2 * (2 * a + 1)), this.bl_tree = new d.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new d.Buf16(k + 1), this.heap = new d.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new d.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
					}
					function G(t) {
						var e;
						return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = n, (e = t.state).pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = e.wrap ? C : E, t.adler = 2 === e.wrap ? 0 : 1, e.last_flush = l, u._tr_init(e), m) : R(t, _);
					}
					function K(t) {
						var e = G(t);
						return e === m && function(t) {
							t.window_size = 2 * t.w_size, D(t.head), t.max_lazy_match = h[t.level].max_lazy, t.good_match = h[t.level].good_length, t.nice_match = h[t.level].nice_length, t.max_chain_length = h[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = x - 1, t.match_available = 0, t.ins_h = 0;
						}(t.state), e;
					}
					function Y(t, e, r, i, n, s) {
						if (!t) return _;
						var a = 1;
						if (e === g && (e = 6), i < 0 ? (a = 0, i = -i) : 15 < i && (a = 2, i -= 16), n < 1 || y < n || r !== v || i < 8 || 15 < i || e < 0 || 9 < e || s < 0 || b < s) return R(t, _);
						8 === i && (i = 9);
						var o = new H();
						return (t.state = o).strm = t, o.wrap = a, o.gzhead = null, o.w_bits = i, o.w_size = 1 << o.w_bits, o.w_mask = o.w_size - 1, o.hash_bits = n + 7, o.hash_size = 1 << o.hash_bits, o.hash_mask = o.hash_size - 1, o.hash_shift = ~~((o.hash_bits + x - 1) / x), o.window = new d.Buf8(2 * o.w_size), o.head = new d.Buf16(o.hash_size), o.prev = new d.Buf16(o.w_size), o.lit_bufsize = 1 << n + 6, o.pending_buf_size = 4 * o.lit_bufsize, o.pending_buf = new d.Buf8(o.pending_buf_size), o.d_buf = 1 * o.lit_bufsize, o.l_buf = 3 * o.lit_bufsize, o.level = e, o.strategy = s, o.method = r, K(t);
					}
					h = [
						new M(0, 0, 0, 0, function(t, e) {
							var r = 65535;
							for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5);;) {
								if (t.lookahead <= 1) {
									if (j(t), 0 === t.lookahead && e === l) return A;
									if (0 === t.lookahead) break;
								}
								t.strstart += t.lookahead, t.lookahead = 0;
								var i = t.block_start + r;
								if ((0 === t.strstart || t.strstart >= i) && (t.lookahead = t.strstart - i, t.strstart = i, N(t, !1), 0 === t.strm.avail_out)) return A;
								if (t.strstart - t.block_start >= t.w_size - z && (N(t, !1), 0 === t.strm.avail_out)) return A;
							}
							return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : (t.strstart > t.block_start && (N(t, !1), t.strm.avail_out), A);
						}),
						new M(4, 4, 8, 4, Z),
						new M(4, 5, 16, 8, Z),
						new M(4, 6, 32, 32, Z),
						new M(4, 4, 16, 16, W),
						new M(8, 16, 32, 32, W),
						new M(8, 16, 128, 128, W),
						new M(8, 32, 128, 256, W),
						new M(32, 128, 258, 1024, W),
						new M(32, 258, 258, 4096, W)
					], r.deflateInit = function(t, e) {
						return Y(t, e, v, 15, 8, 0);
					}, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(t, e) {
						return t && t.state ? 2 !== t.state.wrap ? _ : (t.state.gzhead = e, m) : _;
					}, r.deflate = function(t, e) {
						var r, i, n, s;
						if (!t || !t.state || 5 < e || e < 0) return t ? R(t, _) : _;
						if (i = t.state, !t.output || !t.input && 0 !== t.avail_in || 666 === i.status && e !== f) return R(t, 0 === t.avail_out ? -5 : _);
						if (i.strm = t, r = i.last_flush, i.last_flush = e, i.status === C) if (2 === i.wrap) t.adler = 0, U(i, 31), U(i, 139), U(i, 8), i.gzhead ? (U(i, (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), U(i, 255 & i.gzhead.time), U(i, i.gzhead.time >> 8 & 255), U(i, i.gzhead.time >> 16 & 255), U(i, i.gzhead.time >> 24 & 255), U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (U(i, 255 & i.gzhead.extra.length), U(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = p(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 0), U(i, 9 === i.level ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), U(i, 3), i.status = E);
						else {
							var a = v + (i.w_bits - 8 << 4) << 8;
							a |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : 6 === i.level ? 2 : 3) << 6, 0 !== i.strstart && (a |= 32), a += 31 - a % 31, i.status = E, P(i, a), 0 !== i.strstart && (P(i, t.adler >>> 16), P(i, 65535 & t.adler)), t.adler = 1;
						}
						if (69 === i.status) if (i.gzhead.extra) {
							for (n = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending !== i.pending_buf_size));) U(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
							i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
						} else i.status = 73;
						if (73 === i.status) if (i.gzhead.name) {
							n = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending === i.pending_buf_size)) {
									s = 1;
									break;
								}
								s = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, U(i, s);
							} while (0 !== s);
							i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.gzindex = 0, i.status = 91);
						} else i.status = 91;
						if (91 === i.status) if (i.gzhead.comment) {
							n = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), F(t), n = i.pending, i.pending === i.pending_buf_size)) {
									s = 1;
									break;
								}
								s = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, U(i, s);
							} while (0 !== s);
							i.gzhead.hcrc && i.pending > n && (t.adler = p(t.adler, i.pending_buf, i.pending - n, n)), 0 === s && (i.status = 103);
						} else i.status = 103;
						if (103 === i.status && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && F(t), i.pending + 2 <= i.pending_buf_size && (U(i, 255 & t.adler), U(i, t.adler >> 8 & 255), t.adler = 0, i.status = E)) : i.status = E), 0 !== i.pending) {
							if (F(t), 0 === t.avail_out) return i.last_flush = -1, m;
						} else if (0 === t.avail_in && T(e) <= T(r) && e !== f) return R(t, -5);
						if (666 === i.status && 0 !== t.avail_in) return R(t, -5);
						if (0 !== t.avail_in || 0 !== i.lookahead || e !== l && 666 !== i.status) {
							var o = 2 === i.strategy ? function(t, e) {
								for (var r;;) {
									if (0 === t.lookahead && (j(t), 0 === t.lookahead)) {
										if (e === l) return A;
										break;
									}
									if (t.match_length = 0, r = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, r && (N(t, !1), 0 === t.strm.avail_out)) return A;
								}
								return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
							}(i, e) : 3 === i.strategy ? function(t, e) {
								for (var r, i, n, s, a = t.window;;) {
									if (t.lookahead <= S) {
										if (j(t), t.lookahead <= S && e === l) return A;
										if (0 === t.lookahead) break;
									}
									if (t.match_length = 0, t.lookahead >= x && 0 < t.strstart && (i = a[n = t.strstart - 1]) === a[++n] && i === a[++n] && i === a[++n]) {
										s = t.strstart + S;
										do										;
while (i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && i === a[++n] && n < s);
										t.match_length = S - (s - n), t.match_length > t.lookahead && (t.match_length = t.lookahead);
									}
									if (t.match_length >= x ? (r = u._tr_tally(t, 1, t.match_length - x), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (r = u._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), r && (N(t, !1), 0 === t.strm.avail_out)) return A;
								}
								return t.insert = 0, e === f ? (N(t, !0), 0 === t.strm.avail_out ? O : B) : t.last_lit && (N(t, !1), 0 === t.strm.avail_out) ? A : I;
							}(i, e) : h[i.level].func(i, e);
							if (o !== O && o !== B || (i.status = 666), o === A || o === O) return 0 === t.avail_out && (i.last_flush = -1), m;
							if (o === I && (1 === e ? u._tr_align(i) : 5 !== e && (u._tr_stored_block(i, 0, 0, !1), 3 === e && (D(i.head), 0 === i.lookahead && (i.strstart = 0, i.block_start = 0, i.insert = 0))), F(t), 0 === t.avail_out)) return i.last_flush = -1, m;
						}
						return e !== f ? m : i.wrap <= 0 ? 1 : (2 === i.wrap ? (U(i, 255 & t.adler), U(i, t.adler >> 8 & 255), U(i, t.adler >> 16 & 255), U(i, t.adler >> 24 & 255), U(i, 255 & t.total_in), U(i, t.total_in >> 8 & 255), U(i, t.total_in >> 16 & 255), U(i, t.total_in >> 24 & 255)) : (P(i, t.adler >>> 16), P(i, 65535 & t.adler)), F(t), 0 < i.wrap && (i.wrap = -i.wrap), 0 !== i.pending ? m : 1);
					}, r.deflateEnd = function(t) {
						var e;
						return t && t.state ? (e = t.state.status) !== C && 69 !== e && 73 !== e && 91 !== e && 103 !== e && e !== E && 666 !== e ? R(t, _) : (t.state = null, e === E ? R(t, -3) : m) : _;
					}, r.deflateSetDictionary = function(t, e) {
						var r, i, n, s, a, o, h, u, l = e.length;
						if (!t || !t.state) return _;
						if (2 === (s = (r = t.state).wrap) || 1 === s && r.status !== C || r.lookahead) return _;
						for (1 === s && (t.adler = c(t.adler, e, l, 0)), r.wrap = 0, l >= r.w_size && (0 === s && (D(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0), u = new d.Buf8(r.w_size), d.arraySet(u, e, l - r.w_size, r.w_size, 0), e = u, l = r.w_size), a = t.avail_in, o = t.next_in, h = t.input, t.avail_in = l, t.next_in = 0, t.input = e, j(r); r.lookahead >= x;) {
							for (i = r.strstart, n = r.lookahead - (x - 1); r.ins_h = (r.ins_h << r.hash_shift ^ r.window[i + x - 1]) & r.hash_mask, r.prev[i & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = i, i++, --n;);
							r.strstart = i, r.lookahead = x - 1, j(r);
						}
						return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = x - 1, r.match_available = 0, t.next_in = o, t.input = h, t.avail_in = a, r.wrap = s, m;
					}, r.deflateInfo = "pako deflate (from Nodeca project)";
				}, {
					"../utils/common": 41,
					"./adler32": 43,
					"./crc32": 45,
					"./messages": 51,
					"./trees": 52
				}],
				47: [function(t, e, r) {
					"use strict";
					e.exports = function() {
						this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
					};
				}, {}],
				48: [function(t, e, r) {
					"use strict";
					e.exports = function(t, e) {
						var r = t.state, i = t.next_in, n, s, a, o, h, u, l, f, d, c, p, m, _, g, b, v, y, w, k, x, S, z = t.input, C;
						n = i + (t.avail_in - 5), s = t.next_out, C = t.output, a = s - (e - t.avail_out), o = s + (t.avail_out - 257), h = r.dmax, u = r.wsize, l = r.whave, f = r.wnext, d = r.window, c = r.hold, p = r.bits, m = r.lencode, _ = r.distcode, g = (1 << r.lenbits) - 1, b = (1 << r.distbits) - 1;
						t: do {
							p < 15 && (c += z[i++] << p, p += 8, c += z[i++] << p, p += 8), v = m[c & g];
							e: for (;;) {
								if (c >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
								else {
									if (!(16 & y)) {
										if (0 == (64 & y)) {
											v = m[(65535 & v) + (c & (1 << y) - 1)];
											continue e;
										}
										if (32 & y) {
											r.mode = 12;
											break t;
										}
										t.msg = "invalid literal/length code", r.mode = 30;
										break t;
									}
									w = 65535 & v, (y &= 15) && (p < y && (c += z[i++] << p, p += 8), w += c & (1 << y) - 1, c >>>= y, p -= y), p < 15 && (c += z[i++] << p, p += 8, c += z[i++] << p, p += 8), v = _[c & b];
									r: for (;;) {
										if (c >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
											if (0 == (64 & y)) {
												v = _[(65535 & v) + (c & (1 << y) - 1)];
												continue r;
											}
											t.msg = "invalid distance code", r.mode = 30;
											break t;
										}
										if (k = 65535 & v, p < (y &= 15) && (c += z[i++] << p, (p += 8) < y && (c += z[i++] << p, p += 8)), h < (k += c & (1 << y) - 1)) {
											t.msg = "invalid distance too far back", r.mode = 30;
											break t;
										}
										if (c >>>= y, p -= y, (y = s - a) < k) {
											if (l < (y = k - y) && r.sane) {
												t.msg = "invalid distance too far back", r.mode = 30;
												break t;
											}
											if (S = d, (x = 0) === f) {
												if (x += u - y, y < w) {
													for (w -= y; C[s++] = d[x++], --y;);
													x = s - k, S = C;
												}
											} else if (f < y) {
												if (x += u + f - y, (y -= f) < w) {
													for (w -= y; C[s++] = d[x++], --y;);
													if (x = 0, f < w) {
														for (w -= y = f; C[s++] = d[x++], --y;);
														x = s - k, S = C;
													}
												}
											} else if (x += f - y, y < w) {
												for (w -= y; C[s++] = d[x++], --y;);
												x = s - k, S = C;
											}
											for (; 2 < w;) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
											w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
										} else {
											for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3););
											w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
										}
										break;
									}
								}
								break;
							}
						} while (i < n && s < o);
						i -= w = p >> 3, c &= (1 << (p -= w << 3)) - 1, t.next_in = i, t.next_out = s, t.avail_in = i < n ? n - i + 5 : 5 - (i - n), t.avail_out = s < o ? o - s + 257 : 257 - (s - o), r.hold = c, r.bits = p;
					};
				}, {}],
				49: [function(t, e, r) {
					"use strict";
					var I = t("../utils/common"), O = t("./adler32"), B = t("./crc32"), R = t("./inffast"), T = t("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, i = 852, n = 592;
					function L(t) {
						return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24);
					}
					function s() {
						this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
					}
					function a(t) {
						var e;
						return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = P, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new I.Buf32(i), e.distcode = e.distdyn = new I.Buf32(n), e.sane = 1, e.back = -1, N) : U;
					}
					function o(t) {
						var e;
						return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, a(t)) : U;
					}
					function h(t, e) {
						var r, i;
						return t && t.state ? (i = t.state, e < 0 ? (r = 0, e = -e) : (r = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || 15 < e) ? U : (null !== i.window && i.wbits !== e && (i.window = null), i.wrap = r, i.wbits = e, o(t))) : U;
					}
					function u(t, e) {
						var r, i;
						return t ? (i = new s(), (t.state = i).window = null, (r = h(t, e)) !== N && (t.state = null), r) : U;
					}
					var l, f, d = !0;
					function j(t) {
						if (d) {
							var e;
							for (l = new I.Buf32(512), f = new I.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
							for (; e < 256;) t.lens[e++] = 9;
							for (; e < 280;) t.lens[e++] = 7;
							for (; e < 288;) t.lens[e++] = 8;
							for (T(D, t.lens, 0, 288, l, 0, t.work, { bits: 9 }), e = 0; e < 32;) t.lens[e++] = 5;
							T(F, t.lens, 0, 32, f, 0, t.work, { bits: 5 }), d = !1;
						}
						t.lencode = l, t.lenbits = 9, t.distcode = f, t.distbits = 5;
					}
					function Z(t, e, r, i) {
						var n, s = t.state;
						return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new I.Buf8(s.wsize)), i >= s.wsize ? (I.arraySet(s.window, e, r - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : (i < (n = s.wsize - s.wnext) && (n = i), I.arraySet(s.window, e, r - i, n, s.wnext), (i -= n) ? (I.arraySet(s.window, e, r - i, i, 0), s.wnext = i, s.whave = s.wsize) : (s.wnext += n, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += n))), 0;
					}
					r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(t) {
						return u(t, 15);
					}, r.inflateInit2 = u, r.inflate = function(t, e) {
						var r, i, n, s, a, o, h, u, l, f, d, c, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [
							16,
							17,
							18,
							0,
							8,
							7,
							9,
							6,
							10,
							5,
							11,
							4,
							12,
							3,
							13,
							2,
							14,
							1,
							15
						];
						if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return U;
						12 === (r = t.state).mode && (r.mode = 13), a = t.next_out, n = t.output, h = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, u = r.hold, l = r.bits, f = o, d = h, x = N;
						t: for (;;) switch (r.mode) {
							case P:
								if (0 === r.wrap) {
									r.mode = 13;
									break;
								}
								for (; l < 16;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								if (2 & r.wrap && 35615 === u) {
									E[r.check = 0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0), l = u = 0, r.mode = 2;
									break;
								}
								if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31) {
									t.msg = "incorrect header check", r.mode = 30;
									break;
								}
								if (8 != (15 & u)) {
									t.msg = "unknown compression method", r.mode = 30;
									break;
								}
								if (l -= 4, k = 8 + (15 & (u >>>= 4)), 0 === r.wbits) r.wbits = k;
								else if (k > r.wbits) {
									t.msg = "invalid window size", r.mode = 30;
									break;
								}
								r.dmax = 1 << k, t.adler = r.check = 1, r.mode = 512 & u ? 10 : 12, l = u = 0;
								break;
							case 2:
								for (; l < 16;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								if (r.flags = u, 8 != (255 & r.flags)) {
									t.msg = "unknown compression method", r.mode = 30;
									break;
								}
								if (57344 & r.flags) {
									t.msg = "unknown header flags set", r.mode = 30;
									break;
								}
								r.head && (r.head.text = u >> 8 & 1), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 3;
							case 3:
								for (; l < 32;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								r.head && (r.head.time = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, E[2] = u >>> 16 & 255, E[3] = u >>> 24 & 255, r.check = B(r.check, E, 4, 0)), l = u = 0, r.mode = 4;
							case 4:
								for (; l < 16;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								r.head && (r.head.xflags = 255 & u, r.head.os = u >> 8), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0, r.mode = 5;
							case 5:
								if (1024 & r.flags) {
									for (; l < 16;) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									r.length = u, r.head && (r.head.extra_len = u), 512 & r.flags && (E[0] = 255 & u, E[1] = u >>> 8 & 255, r.check = B(r.check, E, 2, 0)), l = u = 0;
								} else r.head && (r.head.extra = null);
								r.mode = 6;
							case 6:
								if (1024 & r.flags && (o < (c = r.length) && (c = o), c && (r.head && (k = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), I.arraySet(r.head.extra, i, s, c, k)), 512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, r.length -= c), r.length)) break t;
								r.length = 0, r.mode = 7;
							case 7:
								if (2048 & r.flags) {
									if (0 === o) break t;
									for (c = 0; k = i[s + c++], r.head && k && r.length < 65536 && (r.head.name += String.fromCharCode(k)), k && c < o;);
									if (512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, k) break t;
								} else r.head && (r.head.name = null);
								r.length = 0, r.mode = 8;
							case 8:
								if (4096 & r.flags) {
									if (0 === o) break t;
									for (c = 0; k = i[s + c++], r.head && k && r.length < 65536 && (r.head.comment += String.fromCharCode(k)), k && c < o;);
									if (512 & r.flags && (r.check = B(r.check, i, c, s)), o -= c, s += c, k) break t;
								} else r.head && (r.head.comment = null);
								r.mode = 9;
							case 9:
								if (512 & r.flags) {
									for (; l < 16;) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									if (u !== (65535 & r.check)) {
										t.msg = "header crc mismatch", r.mode = 30;
										break;
									}
									l = u = 0;
								}
								r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), t.adler = r.check = 0, r.mode = 12;
								break;
							case 10:
								for (; l < 32;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								t.adler = r.check = L(u), l = u = 0, r.mode = 11;
							case 11:
								if (0 === r.havedict) return t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, 2;
								t.adler = r.check = 1, r.mode = 12;
							case 12: if (5 === e || 6 === e) break t;
							case 13:
								if (r.last) {
									u >>>= 7 & l, l -= 7 & l, r.mode = 27;
									break;
								}
								for (; l < 3;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								switch (r.last = 1 & u, l -= 1, 3 & (u >>>= 1)) {
									case 0:
										r.mode = 14;
										break;
									case 1:
										if (j(r), r.mode = 20, 6 !== e) break;
										u >>>= 2, l -= 2;
										break t;
									case 2:
										r.mode = 17;
										break;
									case 3: t.msg = "invalid block type", r.mode = 30;
								}
								u >>>= 2, l -= 2;
								break;
							case 14:
								for (u >>>= 7 & l, l -= 7 & l; l < 32;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								if ((65535 & u) != (u >>> 16 ^ 65535)) {
									t.msg = "invalid stored block lengths", r.mode = 30;
									break;
								}
								if (r.length = 65535 & u, l = u = 0, r.mode = 15, 6 === e) break t;
							case 15: r.mode = 16;
							case 16:
								if (c = r.length) {
									if (o < c && (c = o), h < c && (c = h), 0 === c) break t;
									I.arraySet(n, i, s, c, a), o -= c, s += c, h -= c, a += c, r.length -= c;
									break;
								}
								r.mode = 12;
								break;
							case 17:
								for (; l < 14;) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								if (r.nlen = 257 + (31 & u), u >>>= 5, l -= 5, r.ndist = 1 + (31 & u), u >>>= 5, l -= 5, r.ncode = 4 + (15 & u), u >>>= 4, l -= 4, 286 < r.nlen || 30 < r.ndist) {
									t.msg = "too many length or distance symbols", r.mode = 30;
									break;
								}
								r.have = 0, r.mode = 18;
							case 18:
								for (; r.have < r.ncode;) {
									for (; l < 3;) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									r.lens[A[r.have++]] = 7 & u, u >>>= 3, l -= 3;
								}
								for (; r.have < 19;) r.lens[A[r.have++]] = 0;
								if (r.lencode = r.lendyn, r.lenbits = 7, S = { bits: r.lenbits }, x = T(0, r.lens, 0, 19, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
									t.msg = "invalid code lengths set", r.mode = 30;
									break;
								}
								r.have = 0, r.mode = 19;
							case 19:
								for (; r.have < r.nlen + r.ndist;) {
									for (; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									if (b < 16) u >>>= _, l -= _, r.lens[r.have++] = b;
									else {
										if (16 === b) {
											for (z = _ + 2; l < z;) {
												if (0 === o) break t;
												o--, u += i[s++] << l, l += 8;
											}
											if (u >>>= _, l -= _, 0 === r.have) {
												t.msg = "invalid bit length repeat", r.mode = 30;
												break;
											}
											k = r.lens[r.have - 1], c = 3 + (3 & u), u >>>= 2, l -= 2;
										} else if (17 === b) {
											for (z = _ + 3; l < z;) {
												if (0 === o) break t;
												o--, u += i[s++] << l, l += 8;
											}
											l -= _, k = 0, c = 3 + (7 & (u >>>= _)), u >>>= 3, l -= 3;
										} else {
											for (z = _ + 7; l < z;) {
												if (0 === o) break t;
												o--, u += i[s++] << l, l += 8;
											}
											l -= _, k = 0, c = 11 + (127 & (u >>>= _)), u >>>= 7, l -= 7;
										}
										if (r.have + c > r.nlen + r.ndist) {
											t.msg = "invalid bit length repeat", r.mode = 30;
											break;
										}
										for (; c--;) r.lens[r.have++] = k;
									}
								}
								if (30 === r.mode) break;
								if (0 === r.lens[256]) {
									t.msg = "invalid code -- missing end-of-block", r.mode = 30;
									break;
								}
								if (r.lenbits = 9, S = { bits: r.lenbits }, x = T(D, r.lens, 0, r.nlen, r.lencode, 0, r.work, S), r.lenbits = S.bits, x) {
									t.msg = "invalid literal/lengths set", r.mode = 30;
									break;
								}
								if (r.distbits = 6, r.distcode = r.distdyn, S = { bits: r.distbits }, x = T(F, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, S), r.distbits = S.bits, x) {
									t.msg = "invalid distances set", r.mode = 30;
									break;
								}
								if (r.mode = 20, 6 === e) break t;
							case 20: r.mode = 21;
							case 21:
								if (6 <= o && 258 <= h) {
									t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, R(t, d), a = t.next_out, n = t.output, h = t.avail_out, s = t.next_in, i = t.input, o = t.avail_in, u = r.hold, l = r.bits, 12 === r.mode && (r.back = -1);
									break;
								}
								for (r.back = 0; g = (C = r.lencode[u & (1 << r.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								if (g && 0 == (240 & g)) {
									for (v = _, y = g, w = b; g = (C = r.lencode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									u >>>= v, l -= v, r.back += v;
								}
								if (u >>>= _, l -= _, r.back += _, r.length = b, 0 === g) {
									r.mode = 26;
									break;
								}
								if (32 & g) {
									r.back = -1, r.mode = 12;
									break;
								}
								if (64 & g) {
									t.msg = "invalid literal/length code", r.mode = 30;
									break;
								}
								r.extra = 15 & g, r.mode = 22;
							case 22:
								if (r.extra) {
									for (z = r.extra; l < z;) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									r.length += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
								}
								r.was = r.length, r.mode = 23;
							case 23:
								for (; g = (C = r.distcode[u & (1 << r.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l);) {
									if (0 === o) break t;
									o--, u += i[s++] << l, l += 8;
								}
								if (0 == (240 & g)) {
									for (v = _, y = g, w = b; g = (C = r.distcode[w + ((u & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l);) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									u >>>= v, l -= v, r.back += v;
								}
								if (u >>>= _, l -= _, r.back += _, 64 & g) {
									t.msg = "invalid distance code", r.mode = 30;
									break;
								}
								r.offset = b, r.extra = 15 & g, r.mode = 24;
							case 24:
								if (r.extra) {
									for (z = r.extra; l < z;) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									r.offset += u & (1 << r.extra) - 1, u >>>= r.extra, l -= r.extra, r.back += r.extra;
								}
								if (r.offset > r.dmax) {
									t.msg = "invalid distance too far back", r.mode = 30;
									break;
								}
								r.mode = 25;
							case 25:
								if (0 === h) break t;
								if (c = d - h, r.offset > c) {
									if ((c = r.offset - c) > r.whave && r.sane) {
										t.msg = "invalid distance too far back", r.mode = 30;
										break;
									}
									p = c > r.wnext ? (c -= r.wnext, r.wsize - c) : r.wnext - c, c > r.length && (c = r.length), m = r.window;
								} else m = n, p = a - r.offset, c = r.length;
								for (h < c && (c = h), h -= c, r.length -= c; n[a++] = m[p++], --c;);
								0 === r.length && (r.mode = 21);
								break;
							case 26:
								if (0 === h) break t;
								n[a++] = r.length, h--, r.mode = 21;
								break;
							case 27:
								if (r.wrap) {
									for (; l < 32;) {
										if (0 === o) break t;
										o--, u |= i[s++] << l, l += 8;
									}
									if (d -= h, t.total_out += d, r.total += d, d && (t.adler = r.check = r.flags ? B(r.check, n, d, a - d) : O(r.check, n, d, a - d)), d = h, (r.flags ? u : L(u)) !== r.check) {
										t.msg = "incorrect data check", r.mode = 30;
										break;
									}
									l = u = 0;
								}
								r.mode = 28;
							case 28:
								if (r.wrap && r.flags) {
									for (; l < 32;) {
										if (0 === o) break t;
										o--, u += i[s++] << l, l += 8;
									}
									if (u !== (4294967295 & r.total)) {
										t.msg = "incorrect length check", r.mode = 30;
										break;
									}
									l = u = 0;
								}
								r.mode = 29;
							case 29:
								x = 1;
								break t;
							case 30:
								x = -3;
								break t;
							case 31: return -4;
							default: return U;
						}
						return t.next_out = a, t.avail_out = h, t.next_in = s, t.avail_in = o, r.hold = u, r.bits = l, (r.wsize || d !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e)) && Z(t, t.output, t.next_out, d - t.avail_out) ? (r.mode = 31, -4) : (f -= t.avail_in, d -= t.avail_out, t.total_in += f, t.total_out += d, r.total += d, r.wrap && d && (t.adler = r.check = r.flags ? B(r.check, n, d, t.next_out - d) : O(r.check, n, d, t.next_out - d)), t.data_type = r.bits + (r.last ? 64 : 0) + (12 === r.mode ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 == f && 0 === d || 4 === e) && x === N && (x = -5), x);
					}, r.inflateEnd = function(t) {
						if (!t || !t.state) return U;
						var e = t.state;
						return e.window && (e.window = null), t.state = null, N;
					}, r.inflateGetHeader = function(t, e) {
						var r;
						return t && t.state ? 0 == (2 & (r = t.state).wrap) ? U : ((r.head = e).done = !1, N) : U;
					}, r.inflateSetDictionary = function(t, e) {
						var r, i = e.length;
						return t && t.state ? 0 !== (r = t.state).wrap && 11 !== r.mode ? U : 11 === r.mode && O(1, e, i, 0) !== r.check ? -3 : Z(t, e, i, i) ? (r.mode = 31, -4) : (r.havedict = 1, N) : U;
					}, r.inflateInfo = "pako inflate (from Nodeca project)";
				}, {
					"../utils/common": 41,
					"./adler32": 43,
					"./crc32": 45,
					"./inffast": 48,
					"./inftrees": 50
				}],
				50: [function(t, e, r) {
					"use strict";
					var D = t("../utils/common"), F = [
						3,
						4,
						5,
						6,
						7,
						8,
						9,
						10,
						11,
						13,
						15,
						17,
						19,
						23,
						27,
						31,
						35,
						43,
						51,
						59,
						67,
						83,
						99,
						115,
						131,
						163,
						195,
						227,
						258,
						0,
						0
					], N = [
						16,
						16,
						16,
						16,
						16,
						16,
						16,
						16,
						17,
						17,
						17,
						17,
						18,
						18,
						18,
						18,
						19,
						19,
						19,
						19,
						20,
						20,
						20,
						20,
						21,
						21,
						21,
						21,
						16,
						72,
						78
					], U = [
						1,
						2,
						3,
						4,
						5,
						7,
						9,
						13,
						17,
						25,
						33,
						49,
						65,
						97,
						129,
						193,
						257,
						385,
						513,
						769,
						1025,
						1537,
						2049,
						3073,
						4097,
						6145,
						8193,
						12289,
						16385,
						24577,
						0,
						0
					], P = [
						16,
						16,
						16,
						16,
						17,
						17,
						18,
						18,
						19,
						19,
						20,
						20,
						21,
						21,
						22,
						22,
						23,
						23,
						24,
						24,
						25,
						25,
						26,
						26,
						27,
						27,
						28,
						28,
						29,
						29,
						64,
						64
					];
					e.exports = function(t, e, r, i, n, s, a, o) {
						var h, u, l, f, d, c, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
						for (b = 0; b <= 15; b++) O[b] = 0;
						for (v = 0; v < i; v++) O[e[r + v]]++;
						for (k = g, w = 15; 1 <= w && 0 === O[w]; w--);
						if (w < k && (k = w), 0 === w) return n[s++] = 20971520, n[s++] = 20971520, o.bits = 1, 0;
						for (y = 1; y < w && 0 === O[y]; y++);
						for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
						if (0 < z && (0 === t || 1 !== w)) return -1;
						for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
						for (v = 0; v < i; v++) 0 !== e[r + v] && (a[B[e[r + v]]++] = v);
						if (c = 0 === t ? (A = R = a, 19) : 1 === t ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, d = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === t && 852 < C || 2 === t && 592 < C) return 1;
						for (;;) {
							for (p = b - S, _ = a[v] < c ? (m = 0, a[v]) : a[v] > c ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; n[d + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u;);
							for (h = 1 << b - 1; E & h;) h >>= 1;
							if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
								if (b === w) break;
								b = e[r + a[v]];
							}
							if (k < b && (E & f) !== l) {
								for (0 === S && (S = k), d += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0);) x++, z <<= 1;
								if (C += 1 << x, 1 === t && 852 < C || 2 === t && 592 < C) return 1;
								n[l = E & f] = k << 24 | x << 16 | d - s | 0;
							}
						}
						return 0 !== E && (n[d + E] = b - S << 24 | 4194304), o.bits = k, 0;
					};
				}, { "../utils/common": 41 }],
				51: [function(t, e, r) {
					"use strict";
					e.exports = {
						2: "need dictionary",
						1: "stream end",
						0: "",
						"-1": "file error",
						"-2": "stream error",
						"-3": "data error",
						"-4": "insufficient memory",
						"-5": "buffer error",
						"-6": "incompatible version"
					};
				}, {}],
				52: [function(t, e, r) {
					"use strict";
					var n = t("../utils/common"), o = 0, h = 1;
					function i(t) {
						for (var e = t.length; 0 <= --e;) t[e] = 0;
					}
					var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, d = 19, _ = 2 * l + 1, g = 15, c = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						1,
						1,
						1,
						1,
						2,
						2,
						2,
						2,
						3,
						3,
						3,
						3,
						4,
						4,
						4,
						4,
						5,
						5,
						5,
						5,
						0
					], k = [
						0,
						0,
						0,
						0,
						1,
						1,
						2,
						2,
						3,
						3,
						4,
						4,
						5,
						5,
						6,
						6,
						7,
						7,
						8,
						8,
						9,
						9,
						10,
						10,
						11,
						11,
						12,
						12,
						13,
						13
					], x = [
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						2,
						3,
						7
					], S = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					], z = new Array(2 * (l + 2));
					i(z);
					var C = new Array(2 * f);
					i(C);
					var E = new Array(512);
					i(E);
					var A = new Array(256);
					i(A);
					var I = new Array(a);
					i(I);
					var O, B, R, T = new Array(f);
					function D(t, e, r, i, n) {
						this.static_tree = t, this.extra_bits = e, this.extra_base = r, this.elems = i, this.max_length = n, this.has_stree = t && t.length;
					}
					function F(t, e) {
						this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
					}
					function N(t) {
						return t < 256 ? E[t] : E[256 + (t >>> 7)];
					}
					function U(t, e) {
						t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255;
					}
					function P(t, e, r) {
						t.bi_valid > c - r ? (t.bi_buf |= e << t.bi_valid & 65535, U(t, t.bi_buf), t.bi_buf = e >> c - t.bi_valid, t.bi_valid += r - c) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += r);
					}
					function L(t, e, r) {
						P(t, r[2 * e], r[2 * e + 1]);
					}
					function j(t, e) {
						for (var r = 0; r |= 1 & t, t >>>= 1, r <<= 1, 0 < --e;);
						return r >>> 1;
					}
					function Z(t, e, r) {
						var i, n, s = new Array(g + 1), a = 0;
						for (i = 1; i <= g; i++) s[i] = a = a + r[i - 1] << 1;
						for (n = 0; n <= e; n++) {
							var o = t[2 * n + 1];
							0 !== o && (t[2 * n] = j(s[o]++, o));
						}
					}
					function W(t) {
						var e = 0;
						for (; e < l; e++) t.dyn_ltree[2 * e] = 0;
						for (e = 0; e < f; e++) t.dyn_dtree[2 * e] = 0;
						for (e = 0; e < d; e++) t.bl_tree[2 * e] = 0;
						t.dyn_ltree[2 * m] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0;
					}
					function M(t) {
						8 < t.bi_valid ? U(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
					}
					function H(t, e, r, i) {
						var n = 2 * e, s = 2 * r;
						return t[n] < t[s] || t[n] === t[s] && i[e] <= i[r];
					}
					function G(t, e, r) {
						for (var i = t.heap[r], n = r << 1; n <= t.heap_len && (n < t.heap_len && H(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !H(e, i, t.heap[n], t.depth));) t.heap[r] = t.heap[n], r = n, n <<= 1;
						t.heap[r] = i;
					}
					function K(t, e, r) {
						var i, n, s, a, o = 0;
						if (0 !== t.last_lit) for (; i = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], n = t.pending_buf[t.l_buf + o], o++, 0 === i ? L(t, n, e) : (L(t, (s = A[n]) + u + 1, e), 0 !== (a = w[s]) && P(t, n -= I[s], a), L(t, s = N(--i), r), 0 !== (a = k[s]) && P(t, i -= T[s], a)), o < t.last_lit;);
						L(t, m, e);
					}
					function Y(t, e) {
						var r, i, n, s = e.dyn_tree, a = e.stat_desc.static_tree, o = e.stat_desc.has_stree, h = e.stat_desc.elems, u = -1;
						for (t.heap_len = 0, t.heap_max = _, r = 0; r < h; r++) 0 !== s[2 * r] ? (t.heap[++t.heap_len] = u = r, t.depth[r] = 0) : s[2 * r + 1] = 0;
						for (; t.heap_len < 2;) s[2 * (n = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1, t.depth[n] = 0, t.opt_len--, o && (t.static_len -= a[2 * n + 1]);
						for (e.max_code = u, r = t.heap_len >> 1; 1 <= r; r--) G(t, s, r);
						for (n = h; r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], G(t, s, 1), i = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = i, s[2 * n] = s[2 * r] + s[2 * i], t.depth[n] = (t.depth[r] >= t.depth[i] ? t.depth[r] : t.depth[i]) + 1, s[2 * r + 1] = s[2 * i + 1] = n, t.heap[1] = n++, G(t, s, 1), 2 <= t.heap_len;);
						t.heap[--t.heap_max] = t.heap[1], function(t, e) {
							var r, i, n, s, a, o, h = e.dyn_tree, u = e.max_code, l = e.stat_desc.static_tree, f = e.stat_desc.has_stree, d = e.stat_desc.extra_bits, c = e.stat_desc.extra_base, p = e.stat_desc.max_length, m = 0;
							for (s = 0; s <= g; s++) t.bl_count[s] = 0;
							for (h[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < _; r++) p < (s = h[2 * h[2 * (i = t.heap[r]) + 1] + 1] + 1) && (s = p, m++), h[2 * i + 1] = s, u < i || (t.bl_count[s]++, a = 0, c <= i && (a = d[i - c]), o = h[2 * i], t.opt_len += o * (s + a), f && (t.static_len += o * (l[2 * i + 1] + a)));
							if (0 !== m) {
								do {
									for (s = p - 1; 0 === t.bl_count[s];) s--;
									t.bl_count[s]--, t.bl_count[s + 1] += 2, t.bl_count[p]--, m -= 2;
								} while (0 < m);
								for (s = p; 0 !== s; s--) for (i = t.bl_count[s]; 0 !== i;) u < (n = t.heap[--r]) || (h[2 * n + 1] !== s && (t.opt_len += (s - h[2 * n + 1]) * h[2 * n], h[2 * n + 1] = s), i--);
							}
						}(t, e), Z(s, u, t.bl_count);
					}
					function X(t, e, r) {
						var i, n, s = -1, a = e[1], o = 0, h = 7, u = 4;
						for (0 === a && (h = 138, u = 3), e[2 * (r + 1) + 1] = 65535, i = 0; i <= r; i++) n = a, a = e[2 * (i + 1) + 1], ++o < h && n === a || (o < u ? t.bl_tree[2 * n] += o : 0 !== n ? (n !== s && t.bl_tree[2 * n]++, t.bl_tree[2 * b]++) : o <= 10 ? t.bl_tree[2 * v]++ : t.bl_tree[2 * y]++, s = n, u = (o = 0) === a ? (h = 138, 3) : n === a ? (h = 6, 3) : (h = 7, 4));
					}
					function V(t, e, r) {
						var i, n, s = -1, a = e[1], o = 0, h = 7, u = 4;
						for (0 === a && (h = 138, u = 3), i = 0; i <= r; i++) if (n = a, a = e[2 * (i + 1) + 1], !(++o < h && n === a)) {
							if (o < u) for (; L(t, n, t.bl_tree), 0 != --o;);
							else 0 !== n ? (n !== s && (L(t, n, t.bl_tree), o--), L(t, b, t.bl_tree), P(t, o - 3, 2)) : o <= 10 ? (L(t, v, t.bl_tree), P(t, o - 3, 3)) : (L(t, y, t.bl_tree), P(t, o - 11, 7));
							s = n, u = (o = 0) === a ? (h = 138, 3) : n === a ? (h = 6, 3) : (h = 7, 4);
						}
					}
					i(T);
					var q = !1;
					function J(t, e, r, i) {
						P(t, (s << 1) + (i ? 1 : 0), 3), function(t, e, r, i) {
							M(t), i && (U(t, r), U(t, ~r)), n.arraySet(t.pending_buf, t.window, e, r, t.pending), t.pending += r;
						}(t, e, r, !0);
					}
					r._tr_init = function(t) {
						q || (function() {
							var t, e, r, i, n, s = new Array(g + 1);
							for (i = r = 0; i < a - 1; i++) for (I[i] = r, t = 0; t < 1 << w[i]; t++) A[r++] = i;
							for (A[r - 1] = i, i = n = 0; i < 16; i++) for (T[i] = n, t = 0; t < 1 << k[i]; t++) E[n++] = i;
							for (n >>= 7; i < f; i++) for (T[i] = n << 7, t = 0; t < 1 << k[i] - 7; t++) E[256 + n++] = i;
							for (e = 0; e <= g; e++) s[e] = 0;
							for (t = 0; t <= 143;) z[2 * t + 1] = 8, t++, s[8]++;
							for (; t <= 255;) z[2 * t + 1] = 9, t++, s[9]++;
							for (; t <= 279;) z[2 * t + 1] = 7, t++, s[7]++;
							for (; t <= 287;) z[2 * t + 1] = 8, t++, s[8]++;
							for (Z(z, l + 1, s), t = 0; t < f; t++) C[2 * t + 1] = 5, C[2 * t] = j(t, 5);
							O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, d, p);
						}(), q = !0), t.l_desc = new F(t.dyn_ltree, O), t.d_desc = new F(t.dyn_dtree, B), t.bl_desc = new F(t.bl_tree, R), t.bi_buf = 0, t.bi_valid = 0, W(t);
					}, r._tr_stored_block = J, r._tr_flush_block = function(t, e, r, i) {
						var n, s, a = 0;
						0 < t.level ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
							var e, r = 4093624447;
							for (e = 0; e <= 31; e++, r >>>= 1) if (1 & r && 0 !== t.dyn_ltree[2 * e]) return o;
							if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return h;
							for (e = 32; e < u; e++) if (0 !== t.dyn_ltree[2 * e]) return h;
							return o;
						}(t)), Y(t, t.l_desc), Y(t, t.d_desc), a = function(t) {
							var e;
							for (X(t, t.dyn_ltree, t.l_desc.max_code), X(t, t.dyn_dtree, t.d_desc.max_code), Y(t, t.bl_desc), e = d - 1; 3 <= e && 0 === t.bl_tree[2 * S[e] + 1]; e--);
							return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
						}(t), n = t.opt_len + 3 + 7 >>> 3, (s = t.static_len + 3 + 7 >>> 3) <= n && (n = s)) : n = s = r + 5, r + 4 <= n && -1 !== e ? J(t, e, r, i) : 4 === t.strategy || s === n ? (P(t, 2 + (i ? 1 : 0), 3), K(t, z, C)) : (P(t, 4 + (i ? 1 : 0), 3), function(t, e, r, i) {
							var n;
							for (P(t, e - 257, 5), P(t, r - 1, 5), P(t, i - 4, 4), n = 0; n < i; n++) P(t, t.bl_tree[2 * S[n] + 1], 3);
							V(t, t.dyn_ltree, e - 1), V(t, t.dyn_dtree, r - 1);
						}(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, a + 1), K(t, t.dyn_ltree, t.dyn_dtree)), W(t), i && M(t);
					}, r._tr_tally = function(t, e, r) {
						return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & r, t.last_lit++, 0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[2 * (A[r] + u + 1)]++, t.dyn_dtree[2 * N(e)]++), t.last_lit === t.lit_bufsize - 1;
					}, r._tr_align = function(t) {
						P(t, 2, 3), L(t, m, z), function(t) {
							16 === t.bi_valid ? (U(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : 8 <= t.bi_valid && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8);
						}(t);
					};
				}, { "../utils/common": 41 }],
				53: [function(t, e, r) {
					"use strict";
					e.exports = function() {
						this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
					};
				}, {}],
				54: [function(t, e, r) {
					"use strict";
					e.exports = "function" == typeof setImmediate ? setImmediate : function() {
						var t = [].slice.apply(arguments);
						t.splice(1, 0, 0), setTimeout.apply(null, t);
					};
				}, {}]
			}, {}, [10])(10);
		});
	}))(), 1);
	var template_default = "<!DOCTYPE html>\n<html lang=\"{{lang}}\" data-theme=\"{{theme}}\">\n<head>\n    <meta charset=\"UTF-8\" />\n    <meta\n        http-equiv=\"Content-Security-Policy\"\n        content=\"default-src 'none'; img-src 'self' data: blob:; media-src 'self' data: blob:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; font-src 'self' data:; connect-src 'none'\"\n    />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>{{title}}</title>\n\n    <style>\n        :root {\n            --page-text: #0d0d0d;\n            --page-bg: #fff;\n            --td-borders: #374151;\n            --th-borders: #4b5563;\n            --tw-prose-code: var(--page-text);\n            --tw-prose-counters: #9b9b9b;\n            --tw-prose-headings: var(--page-text);\n            --tw-prose-hr: rgba(0,0,0,.25);\n            --tw-prose-links: var(--page-text);\n            --tw-prose-quotes: var(--page-text);\n            --meta-title: #616c77;\n        }\n\n        [data-theme=\"dark\"] {\n            --page-text: #ececec;\n            --page-bg: #212121;\n            --tw-prose-code: var(--page-text);\n            --tw-prose-counters: #9b9b9b;\n            --tw-prose-headings: var(--page-text);\n            --tw-prose-hr: hsla(0,0%,100%,.25);\n            --tw-prose-links: var(--page-text);\n            --tw-prose-quotes: var(--page-text);\n            --meta-title: #959faa;\n        }\n\n        * {\n            box-sizing: border-box;\n            font-size: 16px;\n        }\n\n        ::-webkit-scrollbar {\n            height: 1rem;\n            width: .5rem\n        }\n\n        ::-webkit-scrollbar:horizontal {\n            height: .5rem;\n            width: 1rem\n        }\n\n        ::-webkit-scrollbar-track {\n            background-color: transparent;\n            border-radius: 9999px\n        }\n\n        ::-webkit-scrollbar-thumb {\n            --tw-border-opacity: 1;\n            background-color: rgba(217,217,227,.8);\n            border-color: rgba(255,255,255,var(--tw-border-opacity));\n            border-radius: 9999px;\n            border-width: 1px\n        }\n\n        ::-webkit-scrollbar-thumb:hover {\n            --tw-bg-opacity: 1;\n            background-color: rgba(236,236,241,var(--tw-bg-opacity))\n        }\n\n        [data-theme=\"dark\"] ::-webkit-scrollbar-thumb {\n            --tw-bg-opacity: 1;\n            background-color: rgba(86,88,105,var(--tw-bg-opacity))\n        }\n\n        [data-theme=\"dark\"] ::-webkit-scrollbar-thumb:hover {\n            --tw-bg-opacity: 1;\n            background-color: rgba(172,172,190,var(--tw-bg-opacity))\n        }\n\n        @media (min-width: 768px) {\n            .scrollbar-trigger ::-webkit-scrollbar-thumb {\n                visibility:hidden\n            }\n\n            .scrollbar-trigger:hover ::-webkit-scrollbar-thumb {\n                visibility: visible\n            }\n        }\n\n        body {\n            font-family: Söhne,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,Helvetica Neue,Arial,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;\n            font-size: 14px;\n            line-height: 1.5;\n            color: var(--page-text);\n            background-color: var(--page-bg);\n            margin: 0;\n            padding: 0;\n        }\n\n        [data-theme=\"light\"] .sun {\n            display: none;\n        }\n\n        [data-theme=\"dark\"] .moon {\n            display: none;\n        }\n\n        .toggle {\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            width: 32px;\n            height: 32px;\n            border-radius: 4px;\n            background-color: #fff;\n            border: 1px solid #e2e8f0;\n        }\n\n        [data-width=\"narrow\"] .width-toggle .expand {\n            display: block;\n        }\n\n        [data-width=\"wide\"] .width-toggle .narrow {\n            display: block;\n        }\n\n        .width-toggle {\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            width: 32px;\n            height: 32px;\n            border-radius: 4px;\n            background-color: #fff;\n            border: 1px solid #e2e8f0;\n            margin-left: 8px;\n            cursor: pointer;\n        }\n\n        .width-toggle svg {\n            display: none;\n        }\n\n        .metadata_container {\n            display: flex;\n            flex-direction: column;\n            margin-top: 8px;\n            padding-left: 1rem;\n        }\n\n        .metadata_item {\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            border-radius: 16px;\n            padding: 4px 0.5rem;\n        }\n\n        .metadata_item:hover {\n            background-color: rgba(0,0,0,.1);\n        }\n\n        .metadata_item > div:first-child {\n            flex: 0 1 100px;\n            color: var(--meta-title);\n        }\n\n        .metadata_item > div:last-child {\n            flex: 1;\n        }\n\n        a {\n            color: var(--tw-prose-links);\n            font-size: 0.8rem;\n            text-decoration-line: underline;\n            text-underline-offset: 2px;\n        }\n\n        .conversation-content > p:first-child,\n        ol:first-child {\n            margin-top: 0;\n        }\n\n        :not(pre)>code {\n            color: var(--tw-prose-code);\n            font-family: ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, Consolas, monospace;\n            font-size: .92em;\n            background-color: rgba(0, 0, 0, .09);\n            border-radius: 6px;\n            padding: 1px 6px;\n        }\n\n        [data-theme=\"dark\"] :not(pre)>code {\n            background-color: rgba(255, 255, 255, .1);\n        }\n\n        hr {\n            width: 100%;\n            height: 0;\n            border: 1px solid var(--tw-prose-hr);\n            margin-bottom: 1em;\n            margin-top: 1em;\n        }\n\n        pre {\n            color: #ffffff;\n            background-color: #000000;\n            overflow-x: auto;\n            margin: 0 0 1rem 0;\n            padding: 1rem;\n            border-radius: 0.375rem;\n        }\n\n        /* The highlight.js theme pads and colors `code.hljs`, but only for languages it knows */\n        pre>code.hljs {\n            padding: 0;\n            background: none;\n        }\n\n        pre>code {\n            font-family: Söhne Mono, Monaco, Andale Mono, Ubuntu Mono, monospace !important;\n            font-weight: 400;\n            font-size: .875em;\n            line-height: 1.7142857;\n        }\n\n        h1, h2, h3, h4, h5, h6 {\n            color: var(--tw-prose-headings);\n            margin: 0;\n        }\n\n        h1 {\n            font-size: 2.25em;\n            font-weight: 600;\n            line-height: 1.1111111;\n            margin-bottom: 0.8888889em;\n            margin-top: 0;\n        }\n\n        h2 {\n            font-size: 1.5em;\n            font-weight: 700;\n            line-height: 1.3333333;\n            margin-bottom: 1em;\n            margin-top: 2em;\n        }\n\n        h3 {\n            font-size: 1.25em;\n            font-weight: 600;\n            line-height: 1.6;\n            margin-bottom: .6em;\n            margin-top: 1.6em;\n        }\n\n        h4 {\n            font-weight: 400;\n            line-height: 1.5;\n            margin-bottom: .5em;\n            margin-top: 1.5em\n        }\n\n        h3,h4 {\n            margin-bottom: .5rem;\n            margin-top: 1rem;\n        }\n\n        h5 {\n            font-weight: 600;\n        }\n\n        blockquote {\n            border-left: 2px solid rgba(142,142,160,1);\n            color: var(--tw-prose-quotes);\n            font-style: italic;\n            font-style: normal;\n            font-weight: 500;\n            line-height: 1rem;\n            margin: 1.6em 0;\n            padding-left: 1em;\n            quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n        }\n\n        blockquote p:first-of-type:before {\n            content: open-quote;\n        }\n\n        blockquote p:last-of-type:after {\n            content: close-quote;\n        }\n\n        ol, ul {\n            padding-left: 1.1rem;\n        }\n\n        ::marker {\n            color: var(--tw-prose-counters);\n            font-weight: 400;\n        }\n\n        table {\n            width: 100%;\n            border-collapse: separate;\n            border-spacing: 0 0;\n            table-layout: auto;\n            text-align: left;\n            font-size: .875em;\n            line-height: 1.7142857;\n        }\n\n        table * {\n            box-sizing: border-box;\n            border-width: 0;\n            border-style: solid;\n            border-color: #d9d9e3;\n        }\n\n        table thead {\n            border-bottom-color: var(--th-borders);\n            border-bottom-width: 1px;\n        }\n\n        table th {\n            background-color: rgba(236,236,241,.2);\n            border-bottom-width: 1px;\n            border-left-width: 1px;\n            border-top-width: 1px;\n            padding: 0.25rem 0.75rem;\n        }\n\n        table th:first-child {\n            border-top-left-radius: 0.375rem;\n        }\n\n        table th:last-child {\n            border-right-width: 1px;\n            border-top-right-radius: 0.375rem;\n        }\n\n        table tbody tr {\n            border-bottom-color: var(--td-borders);\n            border-bottom-width: 1px;\n        }\n\n        table tbody tr:last-child {\n            border-bottom-width: 0;\n        }\n\n        table tbody tr:last-child td:first-child {\n            border-bottom-left-radius: 0.375rem;\n        }\n\n        table tbody tr:last-child td:last-child {\n            border-bottom-right-radius: 0.375rem;\n        }\n\n        table td {\n            border-bottom-width: 1px;\n            border-left-width: 1px;\n            padding: 0.25rem 0.75rem;\n        }\n\n        table td:last-child {\n            border-right-width: 1px;\n        }\n\n        [type=checkbox], [type=radio] {\n            accent-color: #2563eb;\n        }\n\n        .conversation {\n            margin: 0 auto;\n            padding: 1rem;\n            max-width: 64rem;\n        }\n\n        [data-width=\"narrow\"] .conversation {\n            max-width: 64rem;\n        }\n\n        [data-width=\"wide\"] .conversation {\n            max-width: 90%;\n        }\n\n        @media (min-width: 1280px) {\n            .conversation {\n                max-width: 48rem;\n            }\n        }\n\n        @media (min-width: 1024px) {\n            .conversation {\n                max-width: 40rem;\n            }\n        }\n\n        @media (min-width: 768px) {\n            .conversation {\n                max-width: 48rem;\n            }\n        }\n\n        .conversation-header {\n            margin-bottom: 1rem;\n        }\n\n        .conversation-header h1 {\n            margin: 0;\n        }\n\n        .conversation-header h1 a {\n            font-size: 1.5rem;\n        }\n\n        .conversation-header .conversation-export {\n            margin-top: 0.5rem;\n            font-size: 0.8rem;\n        }\n\n        .conversation-header p {\n            margin-top: 0.5rem;\n            font-size: 0.8rem;\n        }\n\n        .conversation-item {\n            display: flex;\n            position: relative;\n            padding: 1rem;\n            border-left: 1px solid rgba(0,0,0,.1);\n            border-right: 1px solid rgba(0,0,0,.1);\n            border-bottom: 1px solid rgba(0,0,0,.1);\n        }\n\n        .conversation-item:first-of-type {\n            border-top: 1px solid rgba(0,0,0,.1);\n        }\n\n        .author {\n            display: flex;\n            flex: 0 0 30px;\n            justify-content: center;\n            align-items: center;\n            width: 30px;\n            height: 30px;\n            border-radius: 0.125rem;\n            margin-right: 1rem;\n            overflow: hidden;\n        }\n\n        .author svg {\n            color: #fff;\n            width: 22px;\n            height: 22px;\n        }\n\n        .author img {\n            content: url(\"{{avatar}}\");\n            width: 100%;\n            height: 100%;\n        }\n\n        .author.assistant {\n            background-color: rgb(16, 163, 127);\n        }\n\n        .conversation-content-wrapper {\n            display: flex;\n            position: relative;\n            overflow: hidden;\n            flex: 1 1 auto;\n            flex-direction: column;\n        }\n\n        .thinking {\n            font-size: 0.875rem;\n            line-height: 1.5;\n            margin-bottom: 0.75rem;\n            border: 1px solid #d1d5db;\n            border-radius: 0.5rem;\n            padding: 0.5rem 0.75rem;\n        }\n\n        .thinking summary {\n            cursor: pointer;\n            font-weight: 500;\n            color: #6b7280;\n        }\n\n        .thinking p {\n            margin: 0.5rem 0;\n            color: #6b7280;\n        }\n\n        [data-theme=\"dark\"] .thinking {\n            border-color: #4b5563;\n        }\n\n        [data-theme=\"dark\"] .thinking summary,\n        [data-theme=\"dark\"] .thinking p {\n            color: #9ca3af;\n        }\n\n        .conversation-content {\n            font-size: 1rem;\n            line-height: 1.5;\n        }\n\n        .conversation-content p {\n            white-space: pre-wrap;\n            line-height: 28px;\n        }\n\n        .conversation-content img, .conversation-content video {\n            display: block;\n            max-width: 100%;\n            height: auto;\n            margin-bottom: 2em;\n            margin-top: 2em;\n        }\n\n        .attachments {\n            list-style: none;\n            margin: 0.5rem 0 0;\n            padding: 0;\n            font-size: 0.875rem;\n            color: #6b7280;\n        }\n\n        [data-theme=\"dark\"] .attachments {\n            color: #9ca3af;\n        }\n\n        .time {\n            position: absolute;\n            right: 8px;\n            bottom: 0;\n            font-size: 0.8rem;\n            color: #acacbe\n        }\n\n    </style>\n</head>\n\n<body>\n    <svg aria-hidden=\"true\" style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <symbol id=\"chatgpt\" viewBox=\"0 0 41 41\">\n            <path d=\"M37.5324 16.8707C37.9808 15.5241 38.1363 14.0974 37.9886 12.6859C37.8409 11.2744 37.3934 9.91076 36.676 8.68622C35.6126 6.83404 33.9882 5.3676 32.0373 4.4985C30.0864 3.62941 27.9098 3.40259 25.8215 3.85078C24.8796 2.7893 23.7219 1.94125 22.4257 1.36341C21.1295 0.785575 19.7249 0.491269 18.3058 0.500197C16.1708 0.495044 14.0893 1.16803 12.3614 2.42214C10.6335 3.67624 9.34853 5.44666 8.6917 7.47815C7.30085 7.76286 5.98686 8.3414 4.8377 9.17505C3.68854 10.0087 2.73073 11.0782 2.02839 12.312C0.956464 14.1591 0.498905 16.2988 0.721698 18.4228C0.944492 20.5467 1.83612 22.5449 3.268 24.1293C2.81966 25.4759 2.66413 26.9026 2.81182 28.3141C2.95951 29.7256 3.40701 31.0892 4.12437 32.3138C5.18791 34.1659 6.8123 35.6322 8.76321 36.5013C10.7141 37.3704 12.8907 37.5973 14.9789 37.1492C15.9208 38.2107 17.0786 39.0587 18.3747 39.6366C19.6709 40.2144 21.0755 40.5087 22.4946 40.4998C24.6307 40.5054 26.7133 39.8321 28.4418 38.5772C30.1704 37.3223 31.4556 35.5506 32.1119 33.5179C33.5027 33.2332 34.8167 32.6547 35.9659 31.821C37.115 30.9874 38.0728 29.9178 38.7752 28.684C39.8458 26.8371 40.3023 24.6979 40.0789 22.5748C39.8556 20.4517 38.9639 18.4544 37.5324 16.8707ZM22.4978 37.8849C20.7443 37.8874 19.0459 37.2733 17.6994 36.1501C17.7601 36.117 17.8666 36.0586 17.936 36.0161L25.9004 31.4156C26.1003 31.3019 26.2663 31.137 26.3813 30.9378C26.4964 30.7386 26.5563 30.5124 26.5549 30.2825V19.0542L29.9213 20.998C29.9389 21.0068 29.9541 21.0198 29.9656 21.0359C29.977 21.052 29.9842 21.0707 29.9867 21.0902V30.3889C29.9842 32.375 29.1946 34.2791 27.7909 35.6841C26.3872 37.0892 24.4838 37.8806 22.4978 37.8849ZM6.39227 31.0064C5.51397 29.4888 5.19742 27.7107 5.49804 25.9832C5.55718 26.0187 5.66048 26.0818 5.73461 26.1244L13.699 30.7248C13.8975 30.8408 14.1233 30.902 14.3532 30.902C14.583 30.902 14.8088 30.8408 15.0073 30.7248L24.731 25.1103V28.9979C24.7321 29.0177 24.7283 29.0376 24.7199 29.0556C24.7115 29.0736 24.6988 29.0893 24.6829 29.1012L16.6317 33.7497C14.9096 34.7416 12.8643 35.0097 10.9447 34.4954C9.02506 33.9811 7.38785 32.7263 6.39227 31.0064ZM4.29707 13.6194C5.17156 12.0998 6.55279 10.9364 8.19885 10.3327C8.19885 10.4013 8.19491 10.5228 8.19491 10.6071V19.808C8.19351 20.0378 8.25334 20.2638 8.36823 20.4629C8.48312 20.6619 8.64893 20.8267 8.84863 20.9404L18.5723 26.5542L15.206 28.4979C15.1894 28.5089 15.1703 28.5155 15.1505 28.5173C15.1307 28.5191 15.1107 28.516 15.0924 28.5082L7.04046 23.8557C5.32135 22.8601 4.06716 21.2235 3.55289 19.3046C3.03862 17.3858 3.30624 15.3413 4.29707 13.6194ZM31.955 20.0556L22.2312 14.4411L25.5976 12.4981C25.6142 12.4872 25.6333 12.4805 25.6531 12.4787C25.6729 12.4769 25.6928 12.4801 25.7111 12.4879L33.7631 17.1364C34.9967 17.849 36.0017 18.8982 36.6606 20.1613C37.3194 21.4244 37.6047 22.849 37.4832 24.2684C37.3617 25.6878 36.8382 27.0432 35.9743 28.1759C35.1103 29.3086 33.9415 30.1717 32.6047 30.6641C32.6047 30.5947 32.6047 30.4733 32.6047 30.3889V21.188C32.6066 20.9586 32.5474 20.7328 32.4332 20.5338C32.319 20.3348 32.154 20.1698 31.955 20.0556ZM35.3055 15.0128C35.2464 14.9765 35.1431 14.9142 35.069 14.8717L27.1045 10.2712C26.906 10.1554 26.6803 10.0943 26.4504 10.0943C26.2206 10.0943 25.9948 10.1554 25.7963 10.2712L16.0726 15.8858V11.9982C16.0715 11.9783 16.0753 11.9585 16.0837 11.9405C16.0921 11.9225 16.1048 11.9068 16.1207 11.8949L24.1719 7.25025C25.4053 6.53903 26.8158 6.19376 28.2383 6.25482C29.6608 6.31589 31.0364 6.78077 32.2044 7.59508C33.3723 8.40939 34.2842 9.53945 34.8334 10.8531C35.3826 12.1667 35.5464 13.6095 35.3055 15.0128ZM14.2424 21.9419L10.8752 19.9981C10.8576 19.9893 10.8423 19.9763 10.8309 19.9602C10.8195 19.9441 10.8122 19.9254 10.8098 19.9058V10.6071C10.8107 9.18295 11.2173 7.78848 11.9819 6.58696C12.7466 5.38544 13.8377 4.42659 15.1275 3.82264C16.4173 3.21869 17.8524 2.99464 19.2649 3.1767C20.6775 3.35876 22.0089 3.93941 23.1034 4.85067C23.0427 4.88379 22.937 4.94215 22.8668 4.98473L14.9024 9.58517C14.7025 9.69878 14.5366 9.86356 14.4215 10.0626C14.3065 10.2616 14.2466 10.4877 14.2479 10.7175L14.2424 21.9419ZM16.071 17.9991L20.4018 15.4978L24.7325 17.9975V22.9985L20.4018 25.4983L16.071 22.9985V17.9991Z\" fill=\"currentColor\"></path>\n        </symbol>\n    </svg>\n    <div class=\"conversation\">\n        <div class=\"conversation-header\">\n            <h1>\n                <a href=\"{{source}}\" target=\"_blank\" rel=\"noopener noreferrer\">{{title}}</a>\n                <button class=\"toggle\">\n                    <svg class=\"sun\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"w-4 h-4\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"></line><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"></line><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"></line><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"></line><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"></line><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"></line><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"></line><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"></line></svg>\n                    <svg class=\"moon\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"w-4 h-4\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z\"></path></svg>\n                </button>\n                <button class=\"toggle width-toggle\">\n                    <svg class=\"expand\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"w-4 h-4\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display: block;\">\n                        <path d=\"M3 12h18M6 8l-4 4 4 4M18 8l4 4-4 4\"></path>\n                    </svg>\n                    <svg class=\"narrow\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"w-4 h-4\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\" style=\"display: none;\">\n                        <path d=\"M3 12h7M14 12h7M6 16l4-4-4-4M18 16l-4-4 4-4\"></path>\n                    </svg>\n                </button>\n            </h1>\n            <div class=\"conversation-export\">\n                <p>Exported by\n                <a href=\"https://github.com/pionxzh/chatgpt-exporter.git\">ChatGPT Exporter</a>\n                at {{time}}</p>\n            </div>\n            {{details}}\n        </div>\n\n        {{content}}\n    </div>\n\n\n    <script>\n        function toggleDarkMode(mode) {\n            const html = document.querySelector('html');\n            const isDarkMode = html.getAttribute('data-theme') === 'dark';\n            const newMode = mode || (isDarkMode ? 'light' : 'dark');\n            if (newMode !== 'dark' && newMode !== 'light') return;\n            html.setAttribute('data-theme', newMode);\n\n            const url = new URL(window.location);\n            url.searchParams.set('theme', newMode);\n            window.history.replaceState({}, '', url);\n        }\n        function toggleWidthMode(mode) {\n            const body = document.querySelector('body');\n            const widthToggleButton = document.querySelector('.width-toggle');\n            const isWide = body.getAttribute('data-width') === 'wide';\n            const newWidthMode = mode || (isWide ? 'narrow' : 'wide');\n            if (newWidthMode !== 'narrow' && newWidthMode !== 'wide') return;\n            body.setAttribute('data-width', newWidthMode);\n\n            const url = new URL(window.location);\n            url.searchParams.set('width', newWidthMode);\n            window.history.replaceState({}, '', url);\n\n            // Update the icon based on the current mode\n            const narrowIcon = widthToggleButton.querySelector('.narrow');\n            const expandIcon = widthToggleButton.querySelector('.expand');\n\n            if (newWidthMode === 'wide') {\n                expandIcon.style.display = \"none\";\n                narrowIcon.style.display = \"block\";\n            } else {\n                expandIcon.style.display = \"block\";\n                narrowIcon.style.display = \"none\";\n            }\n        }\n\n        const urlParams = new URLSearchParams(window.location.search);\n        const theme = urlParams.get('theme');\n        const width = urlParams.get('width');\n\n        if (theme) toggleDarkMode(theme);\n        if (width) toggleWidthMode(width);\n\n        document.querySelector('.toggle').addEventListener('click', () => toggleDarkMode());\n        document.querySelector('.width-toggle').addEventListener('click', () => toggleWidthMode());\n    <\/script>\n</body>\n\n</html>\n";
	var CitationMarkerRegex = /\uE200cite(?:\uE202[^\uE200\uE201]*)+\uE201/gu;
	var UrlMarkerRegex = /\uE200url\uE202([^\uE200\uE201\uE202]*)\uE202([^\uE200\uE201\uE202]+)\uE201/gu;
	var EntityMarkerRegex = /\uE200entity\uE202([^\uE200\uE201]*)\uE201/gu;
	var ImageGroupMarkerRegex = /\uE200image_group\uE202[^\uE200\uE201]*\uE201/gu;
	function normalizeCitationText(input) {
		return input.replaceAll(/[\u00A0\u202F\u2007\u2060]/gu, " ").replaceAll(/[\u2010-\u2015\u2212]/gu, "-").replaceAll(/[\uE203\uE204]/gu, "");
	}
	function transformContentReferences(input, metadata, options = {}) {
		const outputType = options.output ?? "markdown";
		const inlineReferenceMode = options.inlineReferenceMode ?? "expanded";
		const contentRefs = metadata?.content_references ?? [];
		let output = normalizeCitationText(input);
		const sortedRefs = [...contentRefs].filter((ref) => ref.type !== "sources_footnote").sort((a, b) => (b.matched_text?.length || 0) - (a.matched_text?.length || 0));
		const fileReplacements = new Set();
		for (const ref of sortedRefs) {
			if (!ref.matched_text) continue;
			if (ref.type === "client_defined_widget" && ref.data?.widget_type === "code_block") continue;
			if (ref.type === "url") continue;
			const matchedText = normalizeCitationText(ref.matched_text);
			if (!matchedText) continue;
			const replacement = formatInlineReference(ref, outputType, inlineReferenceMode);
			output = output.replaceAll(matchedText, () => replacement);
			if (ref.type === "file" && replacement) fileReplacements.add(replacement);
		}
		for (const replacement of fileReplacements) {
			const escaped = escapeRegExp(replacement);
			output = output.replaceAll(new RegExp(`${escaped}(?:\\s*${escaped})+`, "g"), () => replacement);
		}
		const linkOutput = inlineReferenceMode === "alt" ? "markdown" : outputType;
		output = output.replaceAll(UrlMarkerRegex, (_, label, url) => {
			return formatCitationSource({
				title: label,
				url
			}, linkOutput);
		});
		output = output.replaceAll(EntityMarkerRegex, (marker, data) => {
			const name = parseEntityName(data);
			if (name === null) return marker;
			return linkOutput === "markdown" ? escapeMarkdownText(name) : name;
		});
		output = output.replace(ImageGroupMarkerRegex, "");
		output = output.replace(CitationMarkerRegex, "");
		if (options.includeSourceList !== false) {
			const sources = getSourcesFootnoteSources(contentRefs);
			if (sources.length > 0) output = appendSourcesSection(output, sources, outputType, options.sourceListLabel ?? "Sources");
		}
		return output.replace(/[\uE200-\uE20F]/g, "");
	}
	function parseEntityName(data) {
		try {
			const parsed = JSON.parse(data);
			if (Array.isArray(parsed) && typeof parsed[1] === "string") return parsed[1];
		} catch {}
		return null;
	}
	function formatCitationSource(source, output) {
		const label = getSourceLabel(source);
		const url = source.url?.trim();
		if (!url) return output === "markdown" ? escapeMarkdownText(label) : label;
		if (output === "text") return `${label}: ${url}`;
		return `[${escapeMarkdownText(label)}](<${escapeMarkdownUrl(url)}>)`;
	}
	function formatInlineReference(ref, output, mode) {
		if (ref.type === "client_defined_widget" && ref.data?.widget_type === "charts_widget_v2") return formatChart(ref.data.content);
		if (mode === "alt") return formatAlt(ref.alt);
		if (output === "markdown" && (ref.type === "image_group" || ref.type === "image_v2")) {
			const images = formatImageResults(ref);
			if (images) return images;
			return formatAlt(ref.alt);
		}
		const sources = getInlineSources(ref);
		if (sources.length > 0) {
			const separator = output === "markdown" ? ", " : "; ";
			return `(${sources.map((source) => formatCitationSource(source, output)).join(separator)})`;
		}
		return formatAlt(ref.alt);
	}
	function formatImageResults(ref) {
		return (ref.images ?? []).map((entry) => {
			const image = entry.image_result ?? entry;
			const src = image.content_url?.trim();
			if (!src) return "";
			const markdown = `![${escapeMarkdownText(image.title?.trim() || "Image")}](<${escapeMarkdownUrl(src)}>)`;
			const page = image.url?.trim();
			return page ? `[${markdown}](<${escapeMarkdownUrl(page)}>)` : markdown;
		}).filter(Boolean).join("\n\n");
	}
	function formatChart(chart) {
		const { meta, xKey, series = [], data = [], formattedData } = chart ?? {};
		if (!xKey || series.length === 0 || data.length === 0) return "";
		const cell = (value) => String(value ?? "").replaceAll("|", "\\|").replaceAll("\n", " ");
		const row = (cells) => `| ${cells.map(cell).join(" | ")} |`;
		const rows = data.map((point, index) => row([point[xKey], ...series.map(({ dataKey, valueSuffix = "" }) => formattedData?.[index]?.[dataKey] ?? (point[dataKey] == null ? "" : `${point[dataKey]}${valueSuffix}`))]));
		const table = [
			row([xKey, ...series.map(({ dataKey, label }) => label || dataKey)]),
			row([xKey, ...series].map(() => "---")),
			...rows
		].join("\n");
		const description = meta?.description?.trim();
		return description ? `${description}\n\n${table}` : table;
	}
	function formatAlt(alt) {
		return alt?.replaceAll(/\[([^\]]*)\]\(\)/g, "$1") ?? "";
	}
	function getInlineSources(ref) {
		const sources = [];
		for (const item of ref.items ?? []) {
			sources.push(item);
			sources.push(...item.supporting_websites ?? []);
		}
		sources.push(...ref.fallback_items ?? []);
		if (sources.length === 0 && ref.type === "file" && ref.name) sources.push({ title: ref.name });
		if (sources.length === 0 && (ref.url || ref.title || ref.attribution)) sources.push(ref);
		const safeUrls = ref.safe_urls?.filter(Boolean) ?? [];
		if (sources.length === 0 && safeUrls.length) sources.push(...safeUrls.map((url) => ({
			title: url,
			url
		})));
		return dedupeSources(sources);
	}
	function getSourcesFootnoteSources(contentRefs) {
		return dedupeSources(contentRefs.filter((ref) => ref.type === "sources_footnote").flatMap((ref) => {
			if (ref.sources?.length) return ref.sources;
			if (ref.items?.length) return ref.items;
			if (ref.fallback_items?.length) return ref.fallback_items;
			if (ref.safe_urls?.length) return ref.safe_urls.map((url) => ({
				title: url,
				url
			}));
			return [];
		}));
	}
	function appendSourcesSection(input, sources, output, label) {
		const trimmed = input.trimEnd();
		const sourceList = output === "markdown" ? [
			`**${escapeMarkdownText(label)}:**`,
			"",
			...sources.map((source) => `- ${formatCitationSource(source, output)}`)
		].join("\n") : [`${label}:`, ...sources.map((source, index) => `${index + 1}. ${formatCitationSource(source, output)}`)].join("\n");
		return trimmed ? `${trimmed}\n\n${sourceList}` : sourceList;
	}
	function dedupeSources(sources) {
		const seen = new Set();
		const result = [];
		for (const source of sources) {
			const key = source.url?.trim() || getSourceLabel(source);
			if (!key || seen.has(key)) continue;
			seen.add(key);
			result.push(source);
		}
		return result;
	}
	function getSourceLabel(source) {
		return source.attribution?.trim() || source.title?.trim() || source.url?.trim() || "Source";
	}
	function escapeMarkdownText(input) {
		return input.replaceAll("\\", "\\\\").replaceAll("[", "\\[").replaceAll("]", "\\]").replaceAll("\n", " ");
	}
	function escapeMarkdownUrl(input) {
		return input.replaceAll("<", "%3C").replaceAll(">", "%3E").replaceAll("\n", "");
	}
	function escapeRegExp(input) {
		return input.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	var require_truncate = __commonJSMin(((exports, module) => {
		function isHighSurrogate(codePoint) {
			return codePoint >= 55296 && codePoint <= 56319;
		}
		function isLowSurrogate(codePoint) {
			return codePoint >= 56320 && codePoint <= 57343;
		}
		module.exports = function truncate(getLength, string, byteLength) {
			if (typeof string !== "string") throw new Error("Input must be string");
			var charLength = string.length;
			var curByteLength = 0;
			var codePoint;
			var segment;
			for (var i = 0; i < charLength; i += 1) {
				codePoint = string.charCodeAt(i);
				segment = string[i];
				if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {
					i += 1;
					segment += string[i];
				}
				curByteLength += getLength(segment);
				if (curByteLength === byteLength) return string.slice(0, i + 1);
				else if (curByteLength > byteLength) return string.slice(0, i - segment.length + 1);
			}
			return string;
		};
	}));
	var require_browser$1 = __commonJSMin(((exports, module) => {
		function isHighSurrogate(codePoint) {
			return codePoint >= 55296 && codePoint <= 56319;
		}
		function isLowSurrogate(codePoint) {
			return codePoint >= 56320 && codePoint <= 57343;
		}
		module.exports = function getByteLength(string) {
			if (typeof string !== "string") throw new Error("Input must be string");
			var charLength = string.length;
			var byteLength = 0;
			var codePoint = null;
			var prevCodePoint = null;
			for (var i = 0; i < charLength; i++) {
				codePoint = string.charCodeAt(i);
				if (isLowSurrogate(codePoint)) {
					if (prevCodePoint != null && isHighSurrogate(prevCodePoint)) byteLength += 1;
					else byteLength += 3;
				} else if (codePoint <= 127) byteLength += 1;
				else if (codePoint >= 128 && codePoint <= 2047) byteLength += 2;
				else if (codePoint >= 2048 && codePoint <= 65535) byteLength += 3;
				prevCodePoint = codePoint;
			}
			return byteLength;
		};
	}));
	var require_browser = __commonJSMin(((exports, module) => {
		var truncate = require_truncate();
		var getLength = require_browser$1();
		module.exports = truncate.bind(null, getLength);
	}));
	var import_sanitize_filename = __toESM(__commonJSMin(((exports, module) => {
		var truncate = require_browser();
		var illegalRe = /[\/\?<>\\:\*\|"]/g;
		var controlRe = /[\x00-\x1f\x80-\x9f]/g;
		var reservedRe = /^\.+$/;
		var windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i;
		var windowsTrailingRe = /[\. ]+$/;
		function sanitize(input, replacement) {
			if (typeof input !== "string") throw new Error("Input must be string");
			return truncate(input.replace(illegalRe, replacement).replace(controlRe, replacement).replace(reservedRe, replacement).replace(windowsReservedRe, replacement).replace(windowsTrailingRe, replacement), 255);
		}
		module.exports = function(input, options) {
			var replacement = options && options.replacement || "";
			var output = sanitize(input, replacement);
			if (replacement === "") return output;
			return sanitize(output, "");
		};
	}))(), 1);
	function noop() {}
	function nonNullable(x) {
		return x != null;
	}
	function onloadSafe(fn) {
		if (document.readyState === "complete") fn();
		else window.addEventListener("load", fn);
	}
	var _WORKER_SRC = "onmessage=function(e){setTimeout(function(){postMessage(e.data)},e.data.ms)}";
	var _sleepWorker = null;
	var _sleepWorkerFailed = false;
	var _pendingResolves = new Map();
	var _sleepIdCounter = 0;
	function _getSleepWorker() {
		if (_sleepWorkerFailed) return null;
		if (_sleepWorker) return _sleepWorker;
		try {
			const blob = new Blob([_WORKER_SRC], { type: "application/javascript" });
			const url = URL.createObjectURL(blob);
			const w = new Worker(url);
			URL.revokeObjectURL(url);
			w.onmessage = (e) => {
				const resolve = _pendingResolves.get(e.data.id);
				if (resolve) {
					_pendingResolves.delete(e.data.id);
					resolve();
				}
			};
			w.onerror = () => {
				_sleepWorkerFailed = true;
				_sleepWorker = null;
				for (const resolve of _pendingResolves.values()) resolve();
				_pendingResolves.clear();
			};
			_sleepWorker = w;
			return w;
		} catch {
			_sleepWorkerFailed = true;
			return null;
		}
	}
	function sleep(ms) {
		if (ms <= 0) return Promise.resolve();
		const worker = _getSleepWorker();
		if (!worker) return new Promise((resolve) => setTimeout(resolve, ms));
		return new Promise((resolve) => {
			const id = _sleepIdCounter++;
			_pendingResolves.set(id, resolve);
			worker.postMessage({
				id,
				ms
			});
		});
	}
	function dateStr(date = new Date()) {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
	}
	function timestamp() {
		return new Date().toISOString().replace(/:/g, "-").replace(/\..+/, "");
	}
	function getColorScheme() {
		const root = document.documentElement;
		const theme = root.getAttribute("data-theme");
		if (theme === "light" || theme === "dark") return theme;
		if (root.classList.contains("dark")) return "dark";
		if (root.classList.contains("light")) return "light";
		const scheme = getComputedStyle(root).colorScheme;
		if (scheme === "light" || scheme === "dark") return scheme;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	function unixTimestampToISOString(timestamp) {
		if (!timestamp) return "";
		return new Date(timestamp * 1e3).toISOString();
	}
	function jsonlStringify(list) {
		return list.map((msg) => JSON.stringify(msg)).join("\n");
	}
	function downloadFile(filename, type, content) {
		const blob = content instanceof Blob ? content : new Blob([content], { type });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		setTimeout(() => URL.revokeObjectURL(url), 1e3);
	}
	function normalizeProjectName(projectName) {
		return projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
	}
	function partSuffix(partInfo) {
		if (!partInfo || partInfo.total <= 1) return "";
		const pad = (n) => String(n).padStart(2, "0");
		return `-part-${pad(partInfo.part)}-of-${pad(partInfo.total)}`;
	}
	function buildZipFileName(format, projectName, partInfo) {
		const suffix = partSuffix(partInfo);
		if (projectName) return `chatgpt-export-${format}-project-${normalizeProjectName(projectName)}${suffix}.zip`;
		return `chatgpt-export-${format}${suffix}.zip`;
	}
	function buildJsonBatchFileName(projectName, partInfo) {
		const suffix = partSuffix(partInfo);
		if (projectName) return `chatgpt-export-project-${normalizeProjectName(projectName)}${suffix}.json`;
		return `chatgpt-export${suffix}.json`;
	}
	function getFileNameWithFormat(format, ext, { title = document.title, chatId = "", createTime = Math.floor(Date.now() / 1e3), updateTime = Math.floor(Date.now() / 1e3) } = {}) {
		const _title = (0, import_sanitize_filename.default)(title).replace(/\s+/g, "_");
		const _createTime = unixTimestampToISOString(createTime);
		const _updateTime = unixTimestampToISOString(updateTime);
		return format.replace("{title}", _title).replace("{date}", dateStr()).replace("{timestamp}", timestamp()).replace("{chat_id}", chatId).replace("{create_time}", _createTime).replace("{update_time}", _updateTime).concat(`.${ext}`);
	}
	var CodeRegex = /(```[\s\S]*?(?:```|$)|`[^`\n]+`)/;
	var MathRegex = new RegExp([
		/(?<blockStart>^|\n)(?<indent>[ \t]*)\\\[(?<block>[\s\S]+?)\\\][ \t]*(?=\n|$)/.source,
		/\\\[(?<display>[\s\S]+?)\\\]/.source,
		/\\\((?<inline>[\s\S]+?)\\\)/.source,
		/(?<dollarBlock>\$\$[\s\S]+?\$\$)/.source,
		/(?<=^|\s)(?<dollarInline>\$[^\s$][^$\n]*\$)(?=\s|$)/.source
	].join("|"), "g");
	function protectMath(input) {
		const formulas = [];
		const placeholder = (formula) => `╬${formulas.push(formula) - 1}╬`;
		const text = input.split(CodeRegex).map((part, index) => {
			if (index % 2 === 1) return part;
			return part.replace(MathRegex, (...args) => {
				const groups = args.at(-1);
				if (groups.block != null) {
					const { blockStart = "", indent = "" } = groups;
					return `${blockStart}${indent}${placeholder(`$$\n${groups.block.trim()}\n${indent}$$`)}`;
				}
				if (groups.display != null) return placeholder(`$$${groups.display.trim()}$$`);
				if (groups.inline != null) return placeholder(`$${groups.inline.trim()}$`);
				return placeholder(groups.dollarBlock ?? groups.dollarInline ?? "");
			});
		}).join("");
		const restore = (output, escape = (formula) => formula) => output.replace(/╬(\d+)╬/g, (match, index) => {
			const formula = formulas[Number(index)];
			return formula == null ? match : escape(formula);
		});
		return {
			text,
			restore
		};
	}
	function toBracketDelimiters(formula) {
		const display = /^\$\$([\s\S]*)\$\$$/.exec(formula);
		if (display) return `\\[${display[1]}\\]`;
		return `\\(${formula.slice(1, -1)}\\)`;
	}
	var element = document.createElement("i");
	function decodeNamedCharacterReference(value) {
		const characterReference = "&" + value + ";";
		element.innerHTML = characterReference;
		const char = element.textContent;
		if (char.charCodeAt(char.length - 1) === 59 && value !== "semi") return false;
		return char === characterReference ? false : char;
	}
	function splice(list, start, remove, items) {
		const end = list.length;
		let chunkStart = 0;
		let parameters;
		if (start < 0) start = -start > end ? 0 : end + start;
		else start = start > end ? end : start;
		remove = remove > 0 ? remove : 0;
		if (items.length < 1e4) {
			parameters = Array.from(items);
			parameters.unshift(start, remove);
			[].splice.apply(list, parameters);
		} else {
			if (remove) [].splice.apply(list, [start, remove]);
			while (chunkStart < items.length) {
				parameters = items.slice(chunkStart, chunkStart + 1e4);
				parameters.unshift(start, 0);
				[].splice.apply(list, parameters);
				chunkStart += 1e4;
				start += 1e4;
			}
		}
	}
	function push(list, items) {
		if (list.length > 0) {
			splice(list, list.length, 0, items);
			return list;
		}
		return items;
	}
	var hasOwnProperty$1 = {}.hasOwnProperty;
	function combineExtensions(extensions) {
		const all = {};
		let index = -1;
		while (++index < extensions.length) syntaxExtension(all, extensions[index]);
		return all;
	}
	function syntaxExtension(all, extension) {
		let hook;
		for (hook in extension) {
			const left = (hasOwnProperty$1.call(all, hook) ? all[hook] : void 0) || (all[hook] = {});
			const right = extension[hook];
			let code;
			for (code in right) {
				if (!hasOwnProperty$1.call(left, code)) left[code] = [];
				const value = right[code];
				constructs(left[code], Array.isArray(value) ? value : value ? [value] : []);
			}
		}
	}
	function constructs(existing, list) {
		let index = -1;
		const before = [];
		while (++index < list.length) (list[index].add === "after" ? existing : before).push(list[index]);
		splice(existing, 0, 0, before);
	}
	function combineHtmlExtensions(htmlExtensions) {
		const handlers = {};
		let index = -1;
		while (++index < htmlExtensions.length) htmlExtension(handlers, htmlExtensions[index]);
		return handlers;
	}
	function htmlExtension(all, extension) {
		let hook;
		for (hook in extension) {
			const left = (hasOwnProperty$1.call(all, hook) ? all[hook] : void 0) || (all[hook] = {});
			const right = extension[hook];
			let type;
			if (right) for (type in right) left[type] = right[type];
		}
	}
	function decodeNumericCharacterReference(value, base) {
		const code = Number.parseInt(value, base);
		if (code < 9 || code === 11 || code > 13 && code < 32 || code > 126 && code < 160 || code > 55295 && code < 57344 || code > 64975 && code < 65008 || (code & 65535) === 65535 || (code & 65535) === 65534 || code > 1114111) return "�";
		return String.fromCharCode(code);
	}
	var characterReferences = {
		"\"": "quot",
		"&": "amp",
		"<": "lt",
		">": "gt"
	};
	function encode(value) {
		return value.replace(/["&<>]/g, replace);
		function replace(value) {
			return "&" + characterReferences[value] + ";";
		}
	}
	function normalizeIdentifier(value) {
		return value.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
	}
	var unicodePunctuationRegex = /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
	var asciiAlpha = regexCheck(/[A-Za-z]/);
	var asciiDigit = regexCheck(/\d/);
	var asciiHexDigit = regexCheck(/[\dA-Fa-f]/);
	var asciiAlphanumeric = regexCheck(/[\dA-Za-z]/);
	var asciiPunctuation = regexCheck(/[!-/:-@[-`{-~]/);
	var asciiAtext = regexCheck(/[#-'*+\--9=?A-Z^-~]/);
	function asciiControl(code) {
		return code !== null && (code < 32 || code === 127);
	}
	function markdownLineEndingOrSpace(code) {
		return code !== null && (code < 0 || code === 32);
	}
	function markdownLineEnding(code) {
		return code !== null && code < -2;
	}
	function markdownSpace(code) {
		return code === -2 || code === -1 || code === 32;
	}
	var unicodeWhitespace = regexCheck(/\s/);
	var unicodePunctuation = regexCheck(unicodePunctuationRegex);
	function regexCheck(regex) {
		return check;
		function check(code) {
			return code !== null && regex.test(String.fromCharCode(code));
		}
	}
	function sanitizeUri(url, protocol) {
		const value = encode(normalizeUri(url || ""));
		if (!protocol) return value;
		const colon = value.indexOf(":");
		const questionMark = value.indexOf("?");
		const numberSign = value.indexOf("#");
		const slash = value.indexOf("/");
		if (colon < 0 || slash > -1 && colon > slash || questionMark > -1 && colon > questionMark || numberSign > -1 && colon > numberSign || protocol.test(value.slice(0, colon))) return value;
		return "";
	}
	function normalizeUri(value) {
		const result = [];
		let index = -1;
		let start = 0;
		let skip = 0;
		while (++index < value.length) {
			const code = value.charCodeAt(index);
			let replace = "";
			if (code === 37 && asciiAlphanumeric(value.charCodeAt(index + 1)) && asciiAlphanumeric(value.charCodeAt(index + 2))) skip = 2;
			else if (code < 128) {
				if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) replace = String.fromCharCode(code);
			} else if (code > 55295 && code < 57344) {
				const next = value.charCodeAt(index + 1);
				if (code < 56320 && next > 56319 && next < 57344) {
					replace = String.fromCharCode(code, next);
					skip = 1;
				} else replace = "�";
			} else replace = String.fromCharCode(code);
			if (replace) {
				result.push(value.slice(start, index), encodeURIComponent(replace));
				start = index + skip + 1;
				replace = "";
			}
			if (skip) {
				index += skip;
				skip = 0;
			}
		}
		return result.join("") + value.slice(start);
	}
	var hasOwnProperty = {}.hasOwnProperty;
	var protocolHref = /^(https?|ircs?|mailto|xmpp)$/i;
	var protocolSrc = /^https?$/i;
	function compile(options = {}) {
		let tags = true;
		const definitions = {};
		const buffers = [[]];
		const mediaStack = [];
		const tightStack = [];
		const handlers = combineHtmlExtensions([{
			enter: {
				blockQuote: onenterblockquote,
				codeFenced: onentercodefenced,
				codeFencedFenceInfo: buffer,
				codeFencedFenceMeta: buffer,
				codeIndented: onentercodeindented,
				codeText: onentercodetext,
				content: onentercontent,
				definition: onenterdefinition,
				definitionDestinationString: onenterdefinitiondestinationstring,
				definitionLabelString: buffer,
				definitionTitleString: buffer,
				emphasis: onenteremphasis,
				htmlFlow: onenterhtmlflow,
				htmlText: onenterhtml,
				image: onenterimage,
				label: buffer,
				link: onenterlink,
				listItemMarker: onenterlistitemmarker,
				listItemValue: onenterlistitemvalue,
				listOrdered: onenterlistordered,
				listUnordered: onenterlistunordered,
				paragraph: onenterparagraph,
				reference: buffer,
				resource: onenterresource,
				resourceDestinationString: onenterresourcedestinationstring,
				resourceTitleString: buffer,
				setextHeading: onentersetextheading,
				strong: onenterstrong
			},
			exit: {
				atxHeading: onexitatxheading,
				atxHeadingSequence: onexitatxheadingsequence,
				autolinkEmail: onexitautolinkemail,
				autolinkProtocol: onexitautolinkprotocol,
				blockQuote: onexitblockquote,
				characterEscapeValue: onexitdata,
				characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
				characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
				characterReferenceValue: onexitcharacterreferencevalue,
				codeFenced: onexitflowcode,
				codeFencedFence: onexitcodefencedfence,
				codeFencedFenceInfo: onexitcodefencedfenceinfo,
				codeFencedFenceMeta: resume,
				codeFlowValue: onexitcodeflowvalue,
				codeIndented: onexitflowcode,
				codeText: onexitcodetext,
				codeTextData: onexitdata,
				data: onexitdata,
				definition: onexitdefinition,
				definitionDestinationString: onexitdefinitiondestinationstring,
				definitionLabelString: onexitdefinitionlabelstring,
				definitionTitleString: onexitdefinitiontitlestring,
				emphasis: onexitemphasis,
				hardBreakEscape: onexithardbreak,
				hardBreakTrailing: onexithardbreak,
				htmlFlow: onexithtml,
				htmlFlowData: onexitdata,
				htmlText: onexithtml,
				htmlTextData: onexitdata,
				image: onexitmedia,
				label: onexitlabel,
				labelText: onexitlabeltext,
				lineEnding: onexitlineending,
				link: onexitmedia,
				listOrdered: onexitlistordered,
				listUnordered: onexitlistunordered,
				paragraph: onexitparagraph,
				reference: resume,
				referenceString: onexitreferencestring,
				resource: resume,
				resourceDestinationString: onexitresourcedestinationstring,
				resourceTitleString: onexitresourcetitlestring,
				setextHeading: onexitsetextheading,
				setextHeadingLineSequence: onexitsetextheadinglinesequence,
				setextHeadingText: onexitsetextheadingtext,
				strong: onexitstrong,
				thematicBreak: onexitthematicbreak
			}
		}].concat(options.htmlExtensions || []));
		const data = {
			tightStack,
			definitions
		};
		const context = {
			lineEndingIfNeeded,
			options,
			encode: encode$1,
			raw,
			tag,
			buffer,
			resume,
			setData,
			getData
		};
		let lineEndingStyle = options.defaultLineEnding;
		return compile;
		function compile(events) {
			let index = -1;
			let start = 0;
			const listStack = [];
			let head = [];
			let body = [];
			while (++index < events.length) {
				if (!lineEndingStyle && (events[index][1].type === "lineEnding" || events[index][1].type === "lineEndingBlank")) lineEndingStyle = events[index][2].sliceSerialize(events[index][1]);
				if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
					if (events[index][0] === "enter") listStack.push(index);
					else prepareList(events.slice(listStack.pop(), index));
				}
				if (events[index][1].type === "definition") {
					if (events[index][0] === "enter") {
						body = push(body, events.slice(start, index));
						start = index;
					} else {
						head = push(head, events.slice(start, index + 1));
						start = index + 1;
					}
				}
			}
			head = push(head, body);
			head = push(head, events.slice(start));
			index = -1;
			const result = head;
			if (handlers.enter.null) handlers.enter.null.call(context);
			while (++index < events.length) {
				const handler = handlers[result[index][0]];
				if (hasOwnProperty.call(handler, result[index][1].type)) handler[result[index][1].type].call(Object.assign({ sliceSerialize: result[index][2].sliceSerialize }, context), result[index][1]);
			}
			if (handlers.exit.null) handlers.exit.null.call(context);
			return buffers[0].join("");
		}
		function prepareList(slice) {
			const length = slice.length;
			let index = 0;
			let containerBalance = 0;
			let loose = false;
			let atMarker;
			while (++index < length) {
				const event = slice[index];
				if (event[1]._container) {
					atMarker = void 0;
					if (event[0] === "enter") containerBalance++;
					else containerBalance--;
				} else switch (event[1].type) {
					case "listItemPrefix":
						if (event[0] === "exit") atMarker = true;
						break;
					case "linePrefix": break;
					case "lineEndingBlank":
						if (event[0] === "enter" && !containerBalance) {
							if (atMarker) atMarker = void 0;
							else loose = true;
						}
						break;
					default: atMarker = void 0;
				}
			}
			slice[0][1]._loose = loose;
		}
		function setData(key, value) {
			data[key] = value;
		}
		function getData(key) {
			return data[key];
		}
		function buffer() {
			buffers.push([]);
		}
		function resume() {
			return buffers.pop().join("");
		}
		function tag(value) {
			if (!tags) return;
			setData("lastWasTag", true);
			buffers[buffers.length - 1].push(value);
		}
		function raw(value) {
			setData("lastWasTag");
			buffers[buffers.length - 1].push(value);
		}
		function lineEnding() {
			raw(lineEndingStyle || "\n");
		}
		function lineEndingIfNeeded() {
			const buffer = buffers[buffers.length - 1];
			const slice = buffer[buffer.length - 1];
			const previous = slice ? slice.charCodeAt(slice.length - 1) : null;
			if (previous === 10 || previous === 13 || previous === null) return;
			lineEnding();
		}
		function encode$1(value) {
			return getData("ignoreEncode") ? value : encode(value);
		}
		function onenterlistordered(token) {
			tightStack.push(!token._loose);
			lineEndingIfNeeded();
			tag("<ol");
			setData("expectFirstItem", true);
		}
		function onenterlistunordered(token) {
			tightStack.push(!token._loose);
			lineEndingIfNeeded();
			tag("<ul");
			setData("expectFirstItem", true);
		}
		function onenterlistitemvalue(token) {
			if (getData("expectFirstItem")) {
				const value = Number.parseInt(this.sliceSerialize(token), 10);
				if (value !== 1) tag(" start=\"" + encode$1(String(value)) + "\"");
			}
		}
		function onenterlistitemmarker() {
			if (getData("expectFirstItem")) tag(">");
			else onexitlistitem();
			lineEndingIfNeeded();
			tag("<li>");
			setData("expectFirstItem");
			setData("lastWasTag");
		}
		function onexitlistordered() {
			onexitlistitem();
			tightStack.pop();
			lineEnding();
			tag("</ol>");
		}
		function onexitlistunordered() {
			onexitlistitem();
			tightStack.pop();
			lineEnding();
			tag("</ul>");
		}
		function onexitlistitem() {
			if (getData("lastWasTag") && !getData("slurpAllLineEndings")) lineEndingIfNeeded();
			tag("</li>");
			setData("slurpAllLineEndings");
		}
		function onenterblockquote() {
			tightStack.push(false);
			lineEndingIfNeeded();
			tag("<blockquote>");
		}
		function onexitblockquote() {
			tightStack.pop();
			lineEndingIfNeeded();
			tag("</blockquote>");
			setData("slurpAllLineEndings");
		}
		function onenterparagraph() {
			if (!tightStack[tightStack.length - 1]) {
				lineEndingIfNeeded();
				tag("<p>");
			}
			setData("slurpAllLineEndings");
		}
		function onexitparagraph() {
			if (tightStack[tightStack.length - 1]) setData("slurpAllLineEndings", true);
			else tag("</p>");
		}
		function onentercodefenced() {
			lineEndingIfNeeded();
			tag("<pre><code");
			setData("fencesCount", 0);
		}
		function onexitcodefencedfenceinfo() {
			tag(" class=\"language-" + resume() + "\"");
		}
		function onexitcodefencedfence() {
			const count = getData("fencesCount") || 0;
			if (!count) {
				tag(">");
				setData("slurpOneLineEnding", true);
			}
			setData("fencesCount", count + 1);
		}
		function onentercodeindented() {
			lineEndingIfNeeded();
			tag("<pre><code>");
		}
		function onexitflowcode() {
			const count = getData("fencesCount");
			if (count !== void 0 && count < 2 && data.tightStack.length > 0 && !getData("lastWasTag")) lineEnding();
			if (getData("flowCodeSeenData")) lineEndingIfNeeded();
			tag("</code></pre>");
			if (count !== void 0 && count < 2) lineEndingIfNeeded();
			setData("flowCodeSeenData");
			setData("fencesCount");
			setData("slurpOneLineEnding");
		}
		function onenterimage() {
			mediaStack.push({ image: true });
			tags = void 0;
		}
		function onenterlink() {
			mediaStack.push({});
		}
		function onexitlabeltext(token) {
			mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token);
		}
		function onexitlabel() {
			mediaStack[mediaStack.length - 1].label = resume();
		}
		function onexitreferencestring(token) {
			mediaStack[mediaStack.length - 1].referenceId = this.sliceSerialize(token);
		}
		function onenterresource() {
			buffer();
			mediaStack[mediaStack.length - 1].destination = "";
		}
		function onenterresourcedestinationstring() {
			buffer();
			setData("ignoreEncode", true);
		}
		function onexitresourcedestinationstring() {
			mediaStack[mediaStack.length - 1].destination = resume();
			setData("ignoreEncode");
		}
		function onexitresourcetitlestring() {
			mediaStack[mediaStack.length - 1].title = resume();
		}
		function onexitmedia() {
			let index = mediaStack.length - 1;
			const media = mediaStack[index];
			const id = media.referenceId || media.labelId;
			const context = media.destination === void 0 ? definitions[normalizeIdentifier(id)] : media;
			tags = true;
			while (index--) if (mediaStack[index].image) {
				tags = void 0;
				break;
			}
			if (media.image) {
				tag("<img src=\"" + sanitizeUri(context.destination, options.allowDangerousProtocol ? void 0 : protocolSrc) + "\" alt=\"");
				raw(media.label);
				tag("\"");
			} else tag("<a href=\"" + sanitizeUri(context.destination, options.allowDangerousProtocol ? void 0 : protocolHref) + "\"");
			tag(context.title ? " title=\"" + context.title + "\"" : "");
			if (media.image) tag(" />");
			else {
				tag(">");
				raw(media.label);
				tag("</a>");
			}
			mediaStack.pop();
		}
		function onenterdefinition() {
			buffer();
			mediaStack.push({});
		}
		function onexitdefinitionlabelstring(token) {
			resume();
			mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token);
		}
		function onenterdefinitiondestinationstring() {
			buffer();
			setData("ignoreEncode", true);
		}
		function onexitdefinitiondestinationstring() {
			mediaStack[mediaStack.length - 1].destination = resume();
			setData("ignoreEncode");
		}
		function onexitdefinitiontitlestring() {
			mediaStack[mediaStack.length - 1].title = resume();
		}
		function onexitdefinition() {
			const media = mediaStack[mediaStack.length - 1];
			const id = normalizeIdentifier(media.labelId);
			resume();
			if (!hasOwnProperty.call(definitions, id)) definitions[id] = mediaStack[mediaStack.length - 1];
			mediaStack.pop();
		}
		function onentercontent() {
			setData("slurpAllLineEndings", true);
		}
		function onexitatxheadingsequence(token) {
			if (getData("headingRank")) return;
			setData("headingRank", this.sliceSerialize(token).length);
			lineEndingIfNeeded();
			tag("<h" + getData("headingRank") + ">");
		}
		function onentersetextheading() {
			buffer();
			setData("slurpAllLineEndings");
		}
		function onexitsetextheadingtext() {
			setData("slurpAllLineEndings", true);
		}
		function onexitatxheading() {
			tag("</h" + getData("headingRank") + ">");
			setData("headingRank");
		}
		function onexitsetextheadinglinesequence(token) {
			setData("headingRank", this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2);
		}
		function onexitsetextheading() {
			const value = resume();
			lineEndingIfNeeded();
			tag("<h" + getData("headingRank") + ">");
			raw(value);
			tag("</h" + getData("headingRank") + ">");
			setData("slurpAllLineEndings");
			setData("headingRank");
		}
		function onexitdata(token) {
			raw(encode$1(this.sliceSerialize(token)));
		}
		function onexitlineending(token) {
			if (getData("slurpAllLineEndings")) return;
			if (getData("slurpOneLineEnding")) {
				setData("slurpOneLineEnding");
				return;
			}
			if (getData("inCodeText")) {
				raw(" ");
				return;
			}
			raw(encode$1(this.sliceSerialize(token)));
		}
		function onexitcodeflowvalue(token) {
			raw(encode$1(this.sliceSerialize(token)));
			setData("flowCodeSeenData", true);
		}
		function onexithardbreak() {
			tag("<br />");
		}
		function onenterhtmlflow() {
			lineEndingIfNeeded();
			onenterhtml();
		}
		function onexithtml() {
			setData("ignoreEncode");
		}
		function onenterhtml() {
			if (options.allowDangerousHtml) setData("ignoreEncode", true);
		}
		function onenteremphasis() {
			tag("<em>");
		}
		function onenterstrong() {
			tag("<strong>");
		}
		function onentercodetext() {
			setData("inCodeText", true);
			tag("<code>");
		}
		function onexitcodetext() {
			setData("inCodeText");
			tag("</code>");
		}
		function onexitemphasis() {
			tag("</em>");
		}
		function onexitstrong() {
			tag("</strong>");
		}
		function onexitthematicbreak() {
			lineEndingIfNeeded();
			tag("<hr />");
		}
		function onexitcharacterreferencemarker(token) {
			setData("characterReferenceType", token.type);
		}
		function onexitcharacterreferencevalue(token) {
			let value = this.sliceSerialize(token);
			value = getData("characterReferenceType") ? decodeNumericCharacterReference(value, getData("characterReferenceType") === "characterReferenceMarkerNumeric" ? 10 : 16) : decodeNamedCharacterReference(value);
			raw(encode$1(value));
			setData("characterReferenceType");
		}
		function onexitautolinkprotocol(token) {
			const uri = this.sliceSerialize(token);
			tag("<a href=\"" + sanitizeUri(uri, options.allowDangerousProtocol ? void 0 : protocolHref) + "\">");
			raw(encode$1(uri));
			tag("</a>");
		}
		function onexitautolinkemail(token) {
			const uri = this.sliceSerialize(token);
			tag("<a href=\"" + sanitizeUri("mailto:" + uri) + "\">");
			raw(encode$1(uri));
			tag("</a>");
		}
	}
	function factorySpace(effects, ok, type, max) {
		const limit = max ? max - 1 : Number.POSITIVE_INFINITY;
		let size = 0;
		return start;
		function start(code) {
			if (markdownSpace(code)) {
				effects.enter(type);
				return prefix(code);
			}
			return ok(code);
		}
		function prefix(code) {
			if (markdownSpace(code) && size++ < limit) {
				effects.consume(code);
				return prefix;
			}
			effects.exit(type);
			return ok(code);
		}
	}
	var content$1 = { tokenize: initializeContent };
	function initializeContent(effects) {
		const contentStart = effects.attempt(this.parser.constructs.contentInitial, afterContentStartConstruct, paragraphInitial);
		let previous;
		return contentStart;
		function afterContentStartConstruct(code) {
			if (code === null) {
				effects.consume(code);
				return;
			}
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, contentStart, "linePrefix");
		}
		function paragraphInitial(code) {
			effects.enter("paragraph");
			return lineStart(code);
		}
		function lineStart(code) {
			const token = effects.enter("chunkText", {
				contentType: "text",
				previous
			});
			if (previous) previous.next = token;
			previous = token;
			return data(code);
		}
		function data(code) {
			if (code === null) {
				effects.exit("chunkText");
				effects.exit("paragraph");
				effects.consume(code);
				return;
			}
			if (markdownLineEnding(code)) {
				effects.consume(code);
				effects.exit("chunkText");
				return lineStart;
			}
			effects.consume(code);
			return data;
		}
	}
	var document$2 = { tokenize: initializeDocument };
	var containerConstruct = { tokenize: tokenizeContainer };
	function initializeDocument(effects) {
		const self = this;
		const stack = [];
		let continued = 0;
		let childFlow;
		let childToken;
		let lineStartOffset;
		return start;
		function start(code) {
			if (continued < stack.length) {
				const item = stack[continued];
				self.containerState = item[1];
				return effects.attempt(item[0].continuation, documentContinue, checkNewContainers)(code);
			}
			return checkNewContainers(code);
		}
		function documentContinue(code) {
			continued++;
			if (self.containerState._closeFlow) {
				self.containerState._closeFlow = void 0;
				if (childFlow) closeFlow();
				const indexBeforeExits = self.events.length;
				let indexBeforeFlow = indexBeforeExits;
				let point;
				while (indexBeforeFlow--) if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
					point = self.events[indexBeforeFlow][1].end;
					break;
				}
				exitContainers(continued);
				let index = indexBeforeExits;
				while (index < self.events.length) {
					self.events[index][1].end = Object.assign({}, point);
					index++;
				}
				splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
				self.events.length = index;
				return checkNewContainers(code);
			}
			return start(code);
		}
		function checkNewContainers(code) {
			if (continued === stack.length) {
				if (!childFlow) return documentContinued(code);
				if (childFlow.currentConstruct && childFlow.currentConstruct.concrete) return flowStart(code);
				self.interrupt = Boolean(childFlow.currentConstruct && !childFlow._gfmTableDynamicInterruptHack);
			}
			self.containerState = {};
			return effects.check(containerConstruct, thereIsANewContainer, thereIsNoNewContainer)(code);
		}
		function thereIsANewContainer(code) {
			if (childFlow) closeFlow();
			exitContainers(continued);
			return documentContinued(code);
		}
		function thereIsNoNewContainer(code) {
			self.parser.lazy[self.now().line] = continued !== stack.length;
			lineStartOffset = self.now().offset;
			return flowStart(code);
		}
		function documentContinued(code) {
			self.containerState = {};
			return effects.attempt(containerConstruct, containerContinue, flowStart)(code);
		}
		function containerContinue(code) {
			continued++;
			stack.push([self.currentConstruct, self.containerState]);
			return documentContinued(code);
		}
		function flowStart(code) {
			if (code === null) {
				if (childFlow) closeFlow();
				exitContainers(0);
				effects.consume(code);
				return;
			}
			childFlow = childFlow || self.parser.flow(self.now());
			effects.enter("chunkFlow", {
				contentType: "flow",
				previous: childToken,
				_tokenizer: childFlow
			});
			return flowContinue(code);
		}
		function flowContinue(code) {
			if (code === null) {
				writeToChild(effects.exit("chunkFlow"), true);
				exitContainers(0);
				effects.consume(code);
				return;
			}
			if (markdownLineEnding(code)) {
				effects.consume(code);
				writeToChild(effects.exit("chunkFlow"));
				continued = 0;
				self.interrupt = void 0;
				return start;
			}
			effects.consume(code);
			return flowContinue;
		}
		function writeToChild(token, eof) {
			const stream = self.sliceStream(token);
			if (eof) stream.push(null);
			token.previous = childToken;
			if (childToken) childToken.next = token;
			childToken = token;
			childFlow.defineSkip(token.start);
			childFlow.write(stream);
			if (self.parser.lazy[token.start.line]) {
				let index = childFlow.events.length;
				while (index--) if (childFlow.events[index][1].start.offset < lineStartOffset && (!childFlow.events[index][1].end || childFlow.events[index][1].end.offset > lineStartOffset)) return;
				const indexBeforeExits = self.events.length;
				let indexBeforeFlow = indexBeforeExits;
				let seen;
				let point;
				while (indexBeforeFlow--) if (self.events[indexBeforeFlow][0] === "exit" && self.events[indexBeforeFlow][1].type === "chunkFlow") {
					if (seen) {
						point = self.events[indexBeforeFlow][1].end;
						break;
					}
					seen = true;
				}
				exitContainers(continued);
				index = indexBeforeExits;
				while (index < self.events.length) {
					self.events[index][1].end = Object.assign({}, point);
					index++;
				}
				splice(self.events, indexBeforeFlow + 1, 0, self.events.slice(indexBeforeExits));
				self.events.length = index;
			}
		}
		function exitContainers(size) {
			let index = stack.length;
			while (index-- > size) {
				const entry = stack[index];
				self.containerState = entry[1];
				entry[0].exit.call(self, effects);
			}
			stack.length = size;
		}
		function closeFlow() {
			childFlow.write([null]);
			childToken = void 0;
			childFlow = void 0;
			self.containerState._closeFlow = void 0;
		}
	}
	function tokenizeContainer(effects, ok, nok) {
		return factorySpace(effects, effects.attempt(this.parser.constructs.document, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
	}
	function classifyCharacter(code) {
		if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return 1;
		if (unicodePunctuation(code)) return 2;
	}
	function resolveAll(constructs, events, context) {
		const called = [];
		let index = -1;
		while (++index < constructs.length) {
			const resolve = constructs[index].resolveAll;
			if (resolve && !called.includes(resolve)) {
				events = resolve(events, context);
				called.push(resolve);
			}
		}
		return events;
	}
	var attention = {
		name: "attention",
		tokenize: tokenizeAttention,
		resolveAll: resolveAllAttention
	};
	function resolveAllAttention(events, context) {
		let index = -1;
		let open;
		let group;
		let text;
		let openingSequence;
		let closingSequence;
		let use;
		let nextEvents;
		let offset;
		while (++index < events.length) if (events[index][0] === "enter" && events[index][1].type === "attentionSequence" && events[index][1]._close) {
			open = index;
			while (open--) if (events[open][0] === "exit" && events[open][1].type === "attentionSequence" && events[open][1]._open && context.sliceSerialize(events[open][1]).charCodeAt(0) === context.sliceSerialize(events[index][1]).charCodeAt(0)) {
				if ((events[open][1]._close || events[index][1]._open) && (events[index][1].end.offset - events[index][1].start.offset) % 3 && !((events[open][1].end.offset - events[open][1].start.offset + events[index][1].end.offset - events[index][1].start.offset) % 3)) continue;
				use = events[open][1].end.offset - events[open][1].start.offset > 1 && events[index][1].end.offset - events[index][1].start.offset > 1 ? 2 : 1;
				const start = Object.assign({}, events[open][1].end);
				const end = Object.assign({}, events[index][1].start);
				movePoint(start, -use);
				movePoint(end, use);
				openingSequence = {
					type: use > 1 ? "strongSequence" : "emphasisSequence",
					start,
					end: Object.assign({}, events[open][1].end)
				};
				closingSequence = {
					type: use > 1 ? "strongSequence" : "emphasisSequence",
					start: Object.assign({}, events[index][1].start),
					end
				};
				text = {
					type: use > 1 ? "strongText" : "emphasisText",
					start: Object.assign({}, events[open][1].end),
					end: Object.assign({}, events[index][1].start)
				};
				group = {
					type: use > 1 ? "strong" : "emphasis",
					start: Object.assign({}, openingSequence.start),
					end: Object.assign({}, closingSequence.end)
				};
				events[open][1].end = Object.assign({}, openingSequence.start);
				events[index][1].start = Object.assign({}, closingSequence.end);
				nextEvents = [];
				if (events[open][1].end.offset - events[open][1].start.offset) nextEvents = push(nextEvents, [[
					"enter",
					events[open][1],
					context
				], [
					"exit",
					events[open][1],
					context
				]]);
				nextEvents = push(nextEvents, [
					[
						"enter",
						group,
						context
					],
					[
						"enter",
						openingSequence,
						context
					],
					[
						"exit",
						openingSequence,
						context
					],
					[
						"enter",
						text,
						context
					]
				]);
				nextEvents = push(nextEvents, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + 1, index), context));
				nextEvents = push(nextEvents, [
					[
						"exit",
						text,
						context
					],
					[
						"enter",
						closingSequence,
						context
					],
					[
						"exit",
						closingSequence,
						context
					],
					[
						"exit",
						group,
						context
					]
				]);
				if (events[index][1].end.offset - events[index][1].start.offset) {
					offset = 2;
					nextEvents = push(nextEvents, [[
						"enter",
						events[index][1],
						context
					], [
						"exit",
						events[index][1],
						context
					]]);
				} else offset = 0;
				splice(events, open - 1, index - open + 3, nextEvents);
				index = open + nextEvents.length - offset - 2;
				break;
			}
		}
		index = -1;
		while (++index < events.length) if (events[index][1].type === "attentionSequence") events[index][1].type = "data";
		return events;
	}
	function tokenizeAttention(effects, ok) {
		const attentionMarkers = this.parser.constructs.attentionMarkers.null;
		const previous = this.previous;
		const before = classifyCharacter(previous);
		let marker;
		return start;
		function start(code) {
			effects.enter("attentionSequence");
			marker = code;
			return sequence(code);
		}
		function sequence(code) {
			if (code === marker) {
				effects.consume(code);
				return sequence;
			}
			const token = effects.exit("attentionSequence");
			const after = classifyCharacter(code);
			const open = !after || after === 2 && before || attentionMarkers.includes(code);
			const close = !before || before === 2 && after || attentionMarkers.includes(previous);
			token._open = Boolean(marker === 42 ? open : open && (before || !close));
			token._close = Boolean(marker === 42 ? close : close && (after || !open));
			return ok(code);
		}
	}
	function movePoint(point, offset) {
		point.column += offset;
		point.offset += offset;
		point._bufferIndex += offset;
	}
	var autolink = {
		name: "autolink",
		tokenize: tokenizeAutolink
	};
	function tokenizeAutolink(effects, ok, nok) {
		let size = 1;
		return start;
		function start(code) {
			effects.enter("autolink");
			effects.enter("autolinkMarker");
			effects.consume(code);
			effects.exit("autolinkMarker");
			effects.enter("autolinkProtocol");
			return open;
		}
		function open(code) {
			if (asciiAlpha(code)) {
				effects.consume(code);
				return schemeOrEmailAtext;
			}
			return asciiAtext(code) ? emailAtext(code) : nok(code);
		}
		function schemeOrEmailAtext(code) {
			return code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code) ? schemeInsideOrEmailAtext(code) : emailAtext(code);
		}
		function schemeInsideOrEmailAtext(code) {
			if (code === 58) {
				effects.consume(code);
				return urlInside;
			}
			if ((code === 43 || code === 45 || code === 46 || asciiAlphanumeric(code)) && size++ < 32) {
				effects.consume(code);
				return schemeInsideOrEmailAtext;
			}
			return emailAtext(code);
		}
		function urlInside(code) {
			if (code === 62) {
				effects.exit("autolinkProtocol");
				return end(code);
			}
			if (code === null || code === 32 || code === 60 || asciiControl(code)) return nok(code);
			effects.consume(code);
			return urlInside;
		}
		function emailAtext(code) {
			if (code === 64) {
				effects.consume(code);
				size = 0;
				return emailAtSignOrDot;
			}
			if (asciiAtext(code)) {
				effects.consume(code);
				return emailAtext;
			}
			return nok(code);
		}
		function emailAtSignOrDot(code) {
			return asciiAlphanumeric(code) ? emailLabel(code) : nok(code);
		}
		function emailLabel(code) {
			if (code === 46) {
				effects.consume(code);
				size = 0;
				return emailAtSignOrDot;
			}
			if (code === 62) {
				effects.exit("autolinkProtocol").type = "autolinkEmail";
				return end(code);
			}
			return emailValue(code);
		}
		function emailValue(code) {
			if ((code === 45 || asciiAlphanumeric(code)) && size++ < 63) {
				effects.consume(code);
				return code === 45 ? emailValue : emailLabel;
			}
			return nok(code);
		}
		function end(code) {
			effects.enter("autolinkMarker");
			effects.consume(code);
			effects.exit("autolinkMarker");
			effects.exit("autolink");
			return ok;
		}
	}
	var blankLine = {
		tokenize: tokenizeBlankLine,
		partial: true
	};
	function tokenizeBlankLine(effects, ok, nok) {
		return factorySpace(effects, afterWhitespace, "linePrefix");
		function afterWhitespace(code) {
			return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
		}
	}
	var blockQuote = {
		name: "blockQuote",
		tokenize: tokenizeBlockQuoteStart,
		continuation: { tokenize: tokenizeBlockQuoteContinuation },
		exit: exit$1
	};
	function tokenizeBlockQuoteStart(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			if (code === 62) {
				const state = self.containerState;
				if (!state.open) {
					effects.enter("blockQuote", { _container: true });
					state.open = true;
				}
				effects.enter("blockQuotePrefix");
				effects.enter("blockQuoteMarker");
				effects.consume(code);
				effects.exit("blockQuoteMarker");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			if (markdownSpace(code)) {
				effects.enter("blockQuotePrefixWhitespace");
				effects.consume(code);
				effects.exit("blockQuotePrefixWhitespace");
				effects.exit("blockQuotePrefix");
				return ok;
			}
			effects.exit("blockQuotePrefix");
			return ok(code);
		}
	}
	function tokenizeBlockQuoteContinuation(effects, ok, nok) {
		return factorySpace(effects, effects.attempt(blockQuote, ok, nok), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
	}
	function exit$1(effects) {
		effects.exit("blockQuote");
	}
	var characterEscape = {
		name: "characterEscape",
		tokenize: tokenizeCharacterEscape
	};
	function tokenizeCharacterEscape(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("characterEscape");
			effects.enter("escapeMarker");
			effects.consume(code);
			effects.exit("escapeMarker");
			return open;
		}
		function open(code) {
			if (asciiPunctuation(code)) {
				effects.enter("characterEscapeValue");
				effects.consume(code);
				effects.exit("characterEscapeValue");
				effects.exit("characterEscape");
				return ok;
			}
			return nok(code);
		}
	}
	var characterReference = {
		name: "characterReference",
		tokenize: tokenizeCharacterReference
	};
	function tokenizeCharacterReference(effects, ok, nok) {
		const self = this;
		let size = 0;
		let max;
		let test;
		return start;
		function start(code) {
			effects.enter("characterReference");
			effects.enter("characterReferenceMarker");
			effects.consume(code);
			effects.exit("characterReferenceMarker");
			return open;
		}
		function open(code) {
			if (code === 35) {
				effects.enter("characterReferenceMarkerNumeric");
				effects.consume(code);
				effects.exit("characterReferenceMarkerNumeric");
				return numeric;
			}
			effects.enter("characterReferenceValue");
			max = 31;
			test = asciiAlphanumeric;
			return value(code);
		}
		function numeric(code) {
			if (code === 88 || code === 120) {
				effects.enter("characterReferenceMarkerHexadecimal");
				effects.consume(code);
				effects.exit("characterReferenceMarkerHexadecimal");
				effects.enter("characterReferenceValue");
				max = 6;
				test = asciiHexDigit;
				return value;
			}
			effects.enter("characterReferenceValue");
			max = 7;
			test = asciiDigit;
			return value(code);
		}
		function value(code) {
			let token;
			if (code === 59 && size) {
				token = effects.exit("characterReferenceValue");
				if (test === asciiAlphanumeric && !decodeNamedCharacterReference(self.sliceSerialize(token))) return nok(code);
				effects.enter("characterReferenceMarker");
				effects.consume(code);
				effects.exit("characterReferenceMarker");
				effects.exit("characterReference");
				return ok;
			}
			if (test(code) && size++ < max) {
				effects.consume(code);
				return value;
			}
			return nok(code);
		}
	}
	var codeFenced = {
		name: "codeFenced",
		tokenize: tokenizeCodeFenced,
		concrete: true
	};
	function tokenizeCodeFenced(effects, ok, nok) {
		const self = this;
		const closingFenceConstruct = {
			tokenize: tokenizeClosingFence,
			partial: true
		};
		const nonLazyLine = {
			tokenize: tokenizeNonLazyLine,
			partial: true
		};
		const tail = this.events[this.events.length - 1];
		const initialPrefix = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
		let sizeOpen = 0;
		let marker;
		return start;
		function start(code) {
			effects.enter("codeFenced");
			effects.enter("codeFencedFence");
			effects.enter("codeFencedFenceSequence");
			marker = code;
			return sequenceOpen(code);
		}
		function sequenceOpen(code) {
			if (code === marker) {
				effects.consume(code);
				sizeOpen++;
				return sequenceOpen;
			}
			effects.exit("codeFencedFenceSequence");
			return sizeOpen < 3 ? nok(code) : factorySpace(effects, infoOpen, "whitespace")(code);
		}
		function infoOpen(code) {
			if (code === null || markdownLineEnding(code)) return openAfter(code);
			effects.enter("codeFencedFenceInfo");
			effects.enter("chunkString", { contentType: "string" });
			return info(code);
		}
		function info(code) {
			if (code === null || markdownLineEndingOrSpace(code)) {
				effects.exit("chunkString");
				effects.exit("codeFencedFenceInfo");
				return factorySpace(effects, infoAfter, "whitespace")(code);
			}
			if (code === 96 && code === marker) return nok(code);
			effects.consume(code);
			return info;
		}
		function infoAfter(code) {
			if (code === null || markdownLineEnding(code)) return openAfter(code);
			effects.enter("codeFencedFenceMeta");
			effects.enter("chunkString", { contentType: "string" });
			return meta(code);
		}
		function meta(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("chunkString");
				effects.exit("codeFencedFenceMeta");
				return openAfter(code);
			}
			if (code === 96 && code === marker) return nok(code);
			effects.consume(code);
			return meta;
		}
		function openAfter(code) {
			effects.exit("codeFencedFence");
			return self.interrupt ? ok(code) : contentStart(code);
		}
		function contentStart(code) {
			if (code === null) return after(code);
			if (markdownLineEnding(code)) return effects.attempt(nonLazyLine, effects.attempt(closingFenceConstruct, after, initialPrefix ? factorySpace(effects, contentStart, "linePrefix", initialPrefix + 1) : contentStart), after)(code);
			effects.enter("codeFlowValue");
			return contentContinue(code);
		}
		function contentContinue(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("codeFlowValue");
				return contentStart(code);
			}
			effects.consume(code);
			return contentContinue;
		}
		function after(code) {
			effects.exit("codeFenced");
			return ok(code);
		}
		function tokenizeNonLazyLine(effects, ok, nok) {
			const self = this;
			return start;
			function start(code) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return lineStart;
			}
			function lineStart(code) {
				return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
			}
		}
		function tokenizeClosingFence(effects, ok, nok) {
			let size = 0;
			return factorySpace(effects, closingSequenceStart, "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
			function closingSequenceStart(code) {
				effects.enter("codeFencedFence");
				effects.enter("codeFencedFenceSequence");
				return closingSequence(code);
			}
			function closingSequence(code) {
				if (code === marker) {
					effects.consume(code);
					size++;
					return closingSequence;
				}
				if (size < sizeOpen) return nok(code);
				effects.exit("codeFencedFenceSequence");
				return factorySpace(effects, closingSequenceEnd, "whitespace")(code);
			}
			function closingSequenceEnd(code) {
				if (code === null || markdownLineEnding(code)) {
					effects.exit("codeFencedFence");
					return ok(code);
				}
				return nok(code);
			}
		}
	}
	var codeIndented = {
		name: "codeIndented",
		tokenize: tokenizeCodeIndented
	};
	var indentedContent = {
		tokenize: tokenizeIndentedContent,
		partial: true
	};
	function tokenizeCodeIndented(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			effects.enter("codeIndented");
			return factorySpace(effects, afterStartPrefix, "linePrefix", 5)(code);
		}
		function afterStartPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? afterPrefix(code) : nok(code);
		}
		function afterPrefix(code) {
			if (code === null) return after(code);
			if (markdownLineEnding(code)) return effects.attempt(indentedContent, afterPrefix, after)(code);
			effects.enter("codeFlowValue");
			return content(code);
		}
		function content(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("codeFlowValue");
				return afterPrefix(code);
			}
			effects.consume(code);
			return content;
		}
		function after(code) {
			effects.exit("codeIndented");
			return ok(code);
		}
	}
	function tokenizeIndentedContent(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			if (self.parser.lazy[self.now().line]) return nok(code);
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return start;
			}
			return factorySpace(effects, afterPrefix, "linePrefix", 5)(code);
		}
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4 ? ok(code) : markdownLineEnding(code) ? start(code) : nok(code);
		}
	}
	var codeText = {
		name: "codeText",
		tokenize: tokenizeCodeText,
		resolve: resolveCodeText,
		previous: previous$1
	};
	function resolveCodeText(events) {
		let tailExitIndex = events.length - 4;
		let headEnterIndex = 3;
		let index;
		let enter;
		if ((events[headEnterIndex][1].type === "lineEnding" || events[headEnterIndex][1].type === "space") && (events[tailExitIndex][1].type === "lineEnding" || events[tailExitIndex][1].type === "space")) {
			index = headEnterIndex;
			while (++index < tailExitIndex) if (events[index][1].type === "codeTextData") {
				events[headEnterIndex][1].type = "codeTextPadding";
				events[tailExitIndex][1].type = "codeTextPadding";
				headEnterIndex += 2;
				tailExitIndex -= 2;
				break;
			}
		}
		index = headEnterIndex - 1;
		tailExitIndex++;
		while (++index <= tailExitIndex) if (enter === void 0) {
			if (index !== tailExitIndex && events[index][1].type !== "lineEnding") enter = index;
		} else if (index === tailExitIndex || events[index][1].type === "lineEnding") {
			events[enter][1].type = "codeTextData";
			if (index !== enter + 2) {
				events[enter][1].end = events[index - 1][1].end;
				events.splice(enter + 2, index - enter - 2);
				tailExitIndex -= index - enter - 2;
				index = enter + 2;
			}
			enter = void 0;
		}
		return events;
	}
	function previous$1(code) {
		return code !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
	}
	function tokenizeCodeText(effects, ok, nok) {
		let sizeOpen = 0;
		let size;
		let token;
		return start;
		function start(code) {
			effects.enter("codeText");
			effects.enter("codeTextSequence");
			return openingSequence(code);
		}
		function openingSequence(code) {
			if (code === 96) {
				effects.consume(code);
				sizeOpen++;
				return openingSequence;
			}
			effects.exit("codeTextSequence");
			return gap(code);
		}
		function gap(code) {
			if (code === null) return nok(code);
			if (code === 96) {
				token = effects.enter("codeTextSequence");
				size = 0;
				return closingSequence(code);
			}
			if (code === 32) {
				effects.enter("space");
				effects.consume(code);
				effects.exit("space");
				return gap;
			}
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return gap;
			}
			effects.enter("codeTextData");
			return data(code);
		}
		function data(code) {
			if (code === null || code === 32 || code === 96 || markdownLineEnding(code)) {
				effects.exit("codeTextData");
				return gap(code);
			}
			effects.consume(code);
			return data;
		}
		function closingSequence(code) {
			if (code === 96) {
				effects.consume(code);
				size++;
				return closingSequence;
			}
			if (size === sizeOpen) {
				effects.exit("codeTextSequence");
				effects.exit("codeText");
				return ok(code);
			}
			token.type = "codeTextData";
			return data(code);
		}
	}
	function subtokenize(events) {
		const jumps = {};
		let index = -1;
		let event;
		let lineIndex;
		let otherIndex;
		let otherEvent;
		let parameters;
		let subevents;
		let more;
		while (++index < events.length) {
			while (index in jumps) index = jumps[index];
			event = events[index];
			if (index && event[1].type === "chunkFlow" && events[index - 1][1].type === "listItemPrefix") {
				subevents = event[1]._tokenizer.events;
				otherIndex = 0;
				if (otherIndex < subevents.length && subevents[otherIndex][1].type === "lineEndingBlank") otherIndex += 2;
				if (otherIndex < subevents.length && subevents[otherIndex][1].type === "content") while (++otherIndex < subevents.length) {
					if (subevents[otherIndex][1].type === "content") break;
					if (subevents[otherIndex][1].type === "chunkText") {
						subevents[otherIndex][1]._isInFirstContentOfListItem = true;
						otherIndex++;
					}
				}
			}
			if (event[0] === "enter") {
				if (event[1].contentType) {
					Object.assign(jumps, subcontent(events, index));
					index = jumps[index];
					more = true;
				}
			} else if (event[1]._container) {
				otherIndex = index;
				lineIndex = void 0;
				while (otherIndex--) {
					otherEvent = events[otherIndex];
					if (otherEvent[1].type === "lineEnding" || otherEvent[1].type === "lineEndingBlank") {
						if (otherEvent[0] === "enter") {
							if (lineIndex) events[lineIndex][1].type = "lineEndingBlank";
							otherEvent[1].type = "lineEnding";
							lineIndex = otherIndex;
						}
					} else break;
				}
				if (lineIndex) {
					event[1].end = Object.assign({}, events[lineIndex][1].start);
					parameters = events.slice(lineIndex, index);
					parameters.unshift(event);
					splice(events, lineIndex, index - lineIndex + 1, parameters);
				}
			}
		}
		return !more;
	}
	function subcontent(events, eventIndex) {
		const token = events[eventIndex][1];
		const context = events[eventIndex][2];
		let startPosition = eventIndex - 1;
		const startPositions = [];
		const tokenizer = token._tokenizer || context.parser[token.contentType](token.start);
		const childEvents = tokenizer.events;
		const jumps = [];
		const gaps = {};
		let stream;
		let previous;
		let index = -1;
		let current = token;
		let adjust = 0;
		let start = 0;
		const breaks = [start];
		while (current) {
			while (events[++startPosition][1] !== current);
			startPositions.push(startPosition);
			if (!current._tokenizer) {
				stream = context.sliceStream(current);
				if (!current.next) stream.push(null);
				if (previous) tokenizer.defineSkip(current.start);
				if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = true;
				tokenizer.write(stream);
				if (current._isInFirstContentOfListItem) tokenizer._gfmTasklistFirstContentOfListItem = void 0;
			}
			previous = current;
			current = current.next;
		}
		current = token;
		while (++index < childEvents.length) if (childEvents[index][0] === "exit" && childEvents[index - 1][0] === "enter" && childEvents[index][1].type === childEvents[index - 1][1].type && childEvents[index][1].start.line !== childEvents[index][1].end.line) {
			start = index + 1;
			breaks.push(start);
			current._tokenizer = void 0;
			current.previous = void 0;
			current = current.next;
		}
		tokenizer.events = [];
		if (current) {
			current._tokenizer = void 0;
			current.previous = void 0;
		} else breaks.pop();
		index = breaks.length;
		while (index--) {
			const slice = childEvents.slice(breaks[index], breaks[index + 1]);
			const start = startPositions.pop();
			jumps.unshift([start, start + slice.length - 1]);
			splice(events, start, 2, slice);
		}
		index = -1;
		while (++index < jumps.length) {
			gaps[adjust + jumps[index][0]] = adjust + jumps[index][1];
			adjust += jumps[index][1] - jumps[index][0] - 1;
		}
		return gaps;
	}
	var content = {
		tokenize: tokenizeContent,
		resolve: resolveContent
	};
	var continuationConstruct = {
		tokenize: tokenizeContinuation,
		partial: true
	};
	function resolveContent(events) {
		subtokenize(events);
		return events;
	}
	function tokenizeContent(effects, ok) {
		let previous;
		return start;
		function start(code) {
			effects.enter("content");
			previous = effects.enter("chunkContent", { contentType: "content" });
			return data(code);
		}
		function data(code) {
			if (code === null) return contentEnd(code);
			if (markdownLineEnding(code)) return effects.check(continuationConstruct, contentContinue, contentEnd)(code);
			effects.consume(code);
			return data;
		}
		function contentEnd(code) {
			effects.exit("chunkContent");
			effects.exit("content");
			return ok(code);
		}
		function contentContinue(code) {
			effects.consume(code);
			effects.exit("chunkContent");
			previous.next = effects.enter("chunkContent", {
				contentType: "content",
				previous
			});
			previous = previous.next;
			return data;
		}
	}
	function tokenizeContinuation(effects, ok, nok) {
		const self = this;
		return startLookahead;
		function startLookahead(code) {
			effects.exit("chunkContent");
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, prefixed, "linePrefix");
		}
		function prefixed(code) {
			if (code === null || markdownLineEnding(code)) return nok(code);
			const tail = self.events[self.events.length - 1];
			if (!self.parser.constructs.disable.null.includes("codeIndented") && tail && tail[1].type === "linePrefix" && tail[2].sliceSerialize(tail[1], true).length >= 4) return ok(code);
			return effects.interrupt(self.parser.constructs.flow, nok, ok)(code);
		}
	}
	function factoryDestination(effects, ok, nok, type, literalType, literalMarkerType, rawType, stringType, max) {
		const limit = max || Number.POSITIVE_INFINITY;
		let balance = 0;
		return start;
		function start(code) {
			if (code === 60) {
				effects.enter(type);
				effects.enter(literalType);
				effects.enter(literalMarkerType);
				effects.consume(code);
				effects.exit(literalMarkerType);
				return destinationEnclosedBefore;
			}
			if (code === null || code === 41 || asciiControl(code)) return nok(code);
			effects.enter(type);
			effects.enter(rawType);
			effects.enter(stringType);
			effects.enter("chunkString", { contentType: "string" });
			return destinationRaw(code);
		}
		function destinationEnclosedBefore(code) {
			if (code === 62) {
				effects.enter(literalMarkerType);
				effects.consume(code);
				effects.exit(literalMarkerType);
				effects.exit(literalType);
				effects.exit(type);
				return ok;
			}
			effects.enter(stringType);
			effects.enter("chunkString", { contentType: "string" });
			return destinationEnclosed(code);
		}
		function destinationEnclosed(code) {
			if (code === 62) {
				effects.exit("chunkString");
				effects.exit(stringType);
				return destinationEnclosedBefore(code);
			}
			if (code === null || code === 60 || markdownLineEnding(code)) return nok(code);
			effects.consume(code);
			return code === 92 ? destinationEnclosedEscape : destinationEnclosed;
		}
		function destinationEnclosedEscape(code) {
			if (code === 60 || code === 62 || code === 92) {
				effects.consume(code);
				return destinationEnclosed;
			}
			return destinationEnclosed(code);
		}
		function destinationRaw(code) {
			if (code === 40) {
				if (++balance > limit) return nok(code);
				effects.consume(code);
				return destinationRaw;
			}
			if (code === 41) {
				if (!balance--) {
					effects.exit("chunkString");
					effects.exit(stringType);
					effects.exit(rawType);
					effects.exit(type);
					return ok(code);
				}
				effects.consume(code);
				return destinationRaw;
			}
			if (code === null || markdownLineEndingOrSpace(code)) {
				if (balance) return nok(code);
				effects.exit("chunkString");
				effects.exit(stringType);
				effects.exit(rawType);
				effects.exit(type);
				return ok(code);
			}
			if (asciiControl(code)) return nok(code);
			effects.consume(code);
			return code === 92 ? destinationRawEscape : destinationRaw;
		}
		function destinationRawEscape(code) {
			if (code === 40 || code === 41 || code === 92) {
				effects.consume(code);
				return destinationRaw;
			}
			return destinationRaw(code);
		}
	}
	function factoryLabel(effects, ok, nok, type, markerType, stringType) {
		const self = this;
		let size = 0;
		let data;
		return start;
		function start(code) {
			effects.enter(type);
			effects.enter(markerType);
			effects.consume(code);
			effects.exit(markerType);
			effects.enter(stringType);
			return atBreak;
		}
		function atBreak(code) {
			if (code === null || code === 91 || code === 93 && !data || code === 94 && !size && "_hiddenFootnoteSupport" in self.parser.constructs || size > 999) return nok(code);
			if (code === 93) {
				effects.exit(stringType);
				effects.enter(markerType);
				effects.consume(code);
				effects.exit(markerType);
				effects.exit(type);
				return ok;
			}
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return atBreak;
			}
			effects.enter("chunkString", { contentType: "string" });
			return label(code);
		}
		function label(code) {
			if (code === null || code === 91 || code === 93 || markdownLineEnding(code) || size++ > 999) {
				effects.exit("chunkString");
				return atBreak(code);
			}
			effects.consume(code);
			data = data || !markdownSpace(code);
			return code === 92 ? labelEscape : label;
		}
		function labelEscape(code) {
			if (code === 91 || code === 92 || code === 93) {
				effects.consume(code);
				size++;
				return label;
			}
			return label(code);
		}
	}
	function factoryTitle(effects, ok, nok, type, markerType, stringType) {
		let marker;
		return start;
		function start(code) {
			effects.enter(type);
			effects.enter(markerType);
			effects.consume(code);
			effects.exit(markerType);
			marker = code === 40 ? 41 : code;
			return atFirstTitleBreak;
		}
		function atFirstTitleBreak(code) {
			if (code === marker) {
				effects.enter(markerType);
				effects.consume(code);
				effects.exit(markerType);
				effects.exit(type);
				return ok;
			}
			effects.enter(stringType);
			return atTitleBreak(code);
		}
		function atTitleBreak(code) {
			if (code === marker) {
				effects.exit(stringType);
				return atFirstTitleBreak(marker);
			}
			if (code === null) return nok(code);
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return factorySpace(effects, atTitleBreak, "linePrefix");
			}
			effects.enter("chunkString", { contentType: "string" });
			return title(code);
		}
		function title(code) {
			if (code === marker || code === null || markdownLineEnding(code)) {
				effects.exit("chunkString");
				return atTitleBreak(code);
			}
			effects.consume(code);
			return code === 92 ? titleEscape : title;
		}
		function titleEscape(code) {
			if (code === marker || code === 92) {
				effects.consume(code);
				return title;
			}
			return title(code);
		}
	}
	function factoryWhitespace(effects, ok) {
		let seen;
		return start;
		function start(code) {
			if (markdownLineEnding(code)) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				seen = true;
				return start;
			}
			if (markdownSpace(code)) return factorySpace(effects, start, seen ? "linePrefix" : "lineSuffix")(code);
			return ok(code);
		}
	}
	var definition$1 = {
		name: "definition",
		tokenize: tokenizeDefinition
	};
	var titleConstruct = {
		tokenize: tokenizeTitle,
		partial: true
	};
	function tokenizeDefinition(effects, ok, nok) {
		const self = this;
		let identifier;
		return start;
		function start(code) {
			effects.enter("definition");
			return factoryLabel.call(self, effects, labelAfter, nok, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(code);
		}
		function labelAfter(code) {
			identifier = normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1));
			if (code === 58) {
				effects.enter("definitionMarker");
				effects.consume(code);
				effects.exit("definitionMarker");
				return factoryWhitespace(effects, factoryDestination(effects, effects.attempt(titleConstruct, factorySpace(effects, after, "whitespace"), factorySpace(effects, after, "whitespace")), nok, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString"));
			}
			return nok(code);
		}
		function after(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("definition");
				if (!self.parser.defined.includes(identifier)) self.parser.defined.push(identifier);
				return ok(code);
			}
			return nok(code);
		}
	}
	function tokenizeTitle(effects, ok, nok) {
		return start;
		function start(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, before)(code) : nok(code);
		}
		function before(code) {
			if (code === 34 || code === 39 || code === 40) return factoryTitle(effects, factorySpace(effects, after, "whitespace"), nok, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(code);
			return nok(code);
		}
		function after(code) {
			return code === null || markdownLineEnding(code) ? ok(code) : nok(code);
		}
	}
	var hardBreakEscape = {
		name: "hardBreakEscape",
		tokenize: tokenizeHardBreakEscape
	};
	function tokenizeHardBreakEscape(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("hardBreakEscape");
			effects.enter("escapeMarker");
			effects.consume(code);
			return open;
		}
		function open(code) {
			if (markdownLineEnding(code)) {
				effects.exit("escapeMarker");
				effects.exit("hardBreakEscape");
				return ok(code);
			}
			return nok(code);
		}
	}
	var headingAtx = {
		name: "headingAtx",
		tokenize: tokenizeHeadingAtx,
		resolve: resolveHeadingAtx
	};
	function resolveHeadingAtx(events, context) {
		let contentEnd = events.length - 2;
		let contentStart = 3;
		let content;
		let text;
		if (events[contentStart][1].type === "whitespace") contentStart += 2;
		if (contentEnd - 2 > contentStart && events[contentEnd][1].type === "whitespace") contentEnd -= 2;
		if (events[contentEnd][1].type === "atxHeadingSequence" && (contentStart === contentEnd - 1 || contentEnd - 4 > contentStart && events[contentEnd - 2][1].type === "whitespace")) contentEnd -= contentStart + 1 === contentEnd ? 2 : 4;
		if (contentEnd > contentStart) {
			content = {
				type: "atxHeadingText",
				start: events[contentStart][1].start,
				end: events[contentEnd][1].end
			};
			text = {
				type: "chunkText",
				start: events[contentStart][1].start,
				end: events[contentEnd][1].end,
				contentType: "text"
			};
			splice(events, contentStart, contentEnd - contentStart + 1, [
				[
					"enter",
					content,
					context
				],
				[
					"enter",
					text,
					context
				],
				[
					"exit",
					text,
					context
				],
				[
					"exit",
					content,
					context
				]
			]);
		}
		return events;
	}
	function tokenizeHeadingAtx(effects, ok, nok) {
		const self = this;
		let size = 0;
		return start;
		function start(code) {
			effects.enter("atxHeading");
			effects.enter("atxHeadingSequence");
			return fenceOpenInside(code);
		}
		function fenceOpenInside(code) {
			if (code === 35 && size++ < 6) {
				effects.consume(code);
				return fenceOpenInside;
			}
			if (code === null || markdownLineEndingOrSpace(code)) {
				effects.exit("atxHeadingSequence");
				return self.interrupt ? ok(code) : headingBreak(code);
			}
			return nok(code);
		}
		function headingBreak(code) {
			if (code === 35) {
				effects.enter("atxHeadingSequence");
				return sequence(code);
			}
			if (code === null || markdownLineEnding(code)) {
				effects.exit("atxHeading");
				return ok(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, headingBreak, "whitespace")(code);
			effects.enter("atxHeadingText");
			return data(code);
		}
		function sequence(code) {
			if (code === 35) {
				effects.consume(code);
				return sequence;
			}
			effects.exit("atxHeadingSequence");
			return headingBreak(code);
		}
		function data(code) {
			if (code === null || code === 35 || markdownLineEndingOrSpace(code)) {
				effects.exit("atxHeadingText");
				return headingBreak(code);
			}
			effects.consume(code);
			return data;
		}
	}
	var htmlBlockNames = [
		"address",
		"article",
		"aside",
		"base",
		"basefont",
		"blockquote",
		"body",
		"caption",
		"center",
		"col",
		"colgroup",
		"dd",
		"details",
		"dialog",
		"dir",
		"div",
		"dl",
		"dt",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"frame",
		"frameset",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hr",
		"html",
		"iframe",
		"legend",
		"li",
		"link",
		"main",
		"menu",
		"menuitem",
		"nav",
		"noframes",
		"ol",
		"optgroup",
		"option",
		"p",
		"param",
		"section",
		"summary",
		"table",
		"tbody",
		"td",
		"tfoot",
		"th",
		"thead",
		"title",
		"tr",
		"track",
		"ul"
	];
	var htmlRawNames = [
		"pre",
		"script",
		"style",
		"textarea"
	];
	var htmlFlow = {
		name: "htmlFlow",
		tokenize: tokenizeHtmlFlow,
		resolveTo: resolveToHtmlFlow,
		concrete: true
	};
	var nextBlankConstruct = {
		tokenize: tokenizeNextBlank,
		partial: true
	};
	function resolveToHtmlFlow(events) {
		let index = events.length;
		while (index--) if (events[index][0] === "enter" && events[index][1].type === "htmlFlow") break;
		if (index > 1 && events[index - 2][1].type === "linePrefix") {
			events[index][1].start = events[index - 2][1].start;
			events[index + 1][1].start = events[index - 2][1].start;
			events.splice(index - 2, 2);
		}
		return events;
	}
	function tokenizeHtmlFlow(effects, ok, nok) {
		const self = this;
		let kind;
		let startTag;
		let buffer;
		let index;
		let marker;
		return start;
		function start(code) {
			effects.enter("htmlFlow");
			effects.enter("htmlFlowData");
			effects.consume(code);
			return open;
		}
		function open(code) {
			if (code === 33) {
				effects.consume(code);
				return declarationStart;
			}
			if (code === 47) {
				effects.consume(code);
				return tagCloseStart;
			}
			if (code === 63) {
				effects.consume(code);
				kind = 3;
				return self.interrupt ? ok : continuationDeclarationInside;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				buffer = String.fromCharCode(code);
				startTag = true;
				return tagName;
			}
			return nok(code);
		}
		function declarationStart(code) {
			if (code === 45) {
				effects.consume(code);
				kind = 2;
				return commentOpenInside;
			}
			if (code === 91) {
				effects.consume(code);
				kind = 5;
				buffer = "CDATA[";
				index = 0;
				return cdataOpenInside;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				kind = 4;
				return self.interrupt ? ok : continuationDeclarationInside;
			}
			return nok(code);
		}
		function commentOpenInside(code) {
			if (code === 45) {
				effects.consume(code);
				return self.interrupt ? ok : continuationDeclarationInside;
			}
			return nok(code);
		}
		function cdataOpenInside(code) {
			if (code === buffer.charCodeAt(index++)) {
				effects.consume(code);
				return index === buffer.length ? self.interrupt ? ok : continuation : cdataOpenInside;
			}
			return nok(code);
		}
		function tagCloseStart(code) {
			if (asciiAlpha(code)) {
				effects.consume(code);
				buffer = String.fromCharCode(code);
				return tagName;
			}
			return nok(code);
		}
		function tagName(code) {
			if (code === null || code === 47 || code === 62 || markdownLineEndingOrSpace(code)) {
				if (code !== 47 && startTag && htmlRawNames.includes(buffer.toLowerCase())) {
					kind = 1;
					return self.interrupt ? ok(code) : continuation(code);
				}
				if (htmlBlockNames.includes(buffer.toLowerCase())) {
					kind = 6;
					if (code === 47) {
						effects.consume(code);
						return basicSelfClosing;
					}
					return self.interrupt ? ok(code) : continuation(code);
				}
				kind = 7;
				return self.interrupt && !self.parser.lazy[self.now().line] ? nok(code) : startTag ? completeAttributeNameBefore(code) : completeClosingTagAfter(code);
			}
			if (code === 45 || asciiAlphanumeric(code)) {
				effects.consume(code);
				buffer += String.fromCharCode(code);
				return tagName;
			}
			return nok(code);
		}
		function basicSelfClosing(code) {
			if (code === 62) {
				effects.consume(code);
				return self.interrupt ? ok : continuation;
			}
			return nok(code);
		}
		function completeClosingTagAfter(code) {
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeClosingTagAfter;
			}
			return completeEnd(code);
		}
		function completeAttributeNameBefore(code) {
			if (code === 47) {
				effects.consume(code);
				return completeEnd;
			}
			if (code === 58 || code === 95 || asciiAlpha(code)) {
				effects.consume(code);
				return completeAttributeName;
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAttributeNameBefore;
			}
			return completeEnd(code);
		}
		function completeAttributeName(code) {
			if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return completeAttributeName;
			}
			return completeAttributeNameAfter(code);
		}
		function completeAttributeNameAfter(code) {
			if (code === 61) {
				effects.consume(code);
				return completeAttributeValueBefore;
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAttributeNameAfter;
			}
			return completeAttributeNameBefore(code);
		}
		function completeAttributeValueBefore(code) {
			if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
			if (code === 34 || code === 39) {
				effects.consume(code);
				marker = code;
				return completeAttributeValueQuoted;
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAttributeValueBefore;
			}
			marker = null;
			return completeAttributeValueUnquoted(code);
		}
		function completeAttributeValueQuoted(code) {
			if (code === null || markdownLineEnding(code)) return nok(code);
			if (code === marker) {
				effects.consume(code);
				return completeAttributeValueQuotedAfter;
			}
			effects.consume(code);
			return completeAttributeValueQuoted;
		}
		function completeAttributeValueUnquoted(code) {
			if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96 || markdownLineEndingOrSpace(code)) return completeAttributeNameAfter(code);
			effects.consume(code);
			return completeAttributeValueUnquoted;
		}
		function completeAttributeValueQuotedAfter(code) {
			if (code === 47 || code === 62 || markdownSpace(code)) return completeAttributeNameBefore(code);
			return nok(code);
		}
		function completeEnd(code) {
			if (code === 62) {
				effects.consume(code);
				return completeAfter;
			}
			return nok(code);
		}
		function completeAfter(code) {
			if (markdownSpace(code)) {
				effects.consume(code);
				return completeAfter;
			}
			return code === null || markdownLineEnding(code) ? continuation(code) : nok(code);
		}
		function continuation(code) {
			if (code === 45 && kind === 2) {
				effects.consume(code);
				return continuationCommentInside;
			}
			if (code === 60 && kind === 1) {
				effects.consume(code);
				return continuationRawTagOpen;
			}
			if (code === 62 && kind === 4) {
				effects.consume(code);
				return continuationClose;
			}
			if (code === 63 && kind === 3) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			if (code === 93 && kind === 5) {
				effects.consume(code);
				return continuationCharacterDataInside;
			}
			if (markdownLineEnding(code) && (kind === 6 || kind === 7)) return effects.check(nextBlankConstruct, continuationClose, continuationAtLineEnding)(code);
			if (code === null || markdownLineEnding(code)) return continuationAtLineEnding(code);
			effects.consume(code);
			return continuation;
		}
		function continuationAtLineEnding(code) {
			effects.exit("htmlFlowData");
			return htmlContinueStart(code);
		}
		function htmlContinueStart(code) {
			if (code === null) return done(code);
			if (markdownLineEnding(code)) return effects.attempt({
				tokenize: htmlLineEnd,
				partial: true
			}, htmlContinueStart, done)(code);
			effects.enter("htmlFlowData");
			return continuation(code);
		}
		function htmlLineEnd(effects, ok, nok) {
			return start;
			function start(code) {
				effects.enter("lineEnding");
				effects.consume(code);
				effects.exit("lineEnding");
				return lineStart;
			}
			function lineStart(code) {
				return self.parser.lazy[self.now().line] ? nok(code) : ok(code);
			}
		}
		function continuationCommentInside(code) {
			if (code === 45) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			return continuation(code);
		}
		function continuationRawTagOpen(code) {
			if (code === 47) {
				effects.consume(code);
				buffer = "";
				return continuationRawEndTag;
			}
			return continuation(code);
		}
		function continuationRawEndTag(code) {
			if (code === 62 && htmlRawNames.includes(buffer.toLowerCase())) {
				effects.consume(code);
				return continuationClose;
			}
			if (asciiAlpha(code) && buffer.length < 8) {
				effects.consume(code);
				buffer += String.fromCharCode(code);
				return continuationRawEndTag;
			}
			return continuation(code);
		}
		function continuationCharacterDataInside(code) {
			if (code === 93) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			return continuation(code);
		}
		function continuationDeclarationInside(code) {
			if (code === 62) {
				effects.consume(code);
				return continuationClose;
			}
			if (code === 45 && kind === 2) {
				effects.consume(code);
				return continuationDeclarationInside;
			}
			return continuation(code);
		}
		function continuationClose(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("htmlFlowData");
				return done(code);
			}
			effects.consume(code);
			return continuationClose;
		}
		function done(code) {
			effects.exit("htmlFlow");
			return ok(code);
		}
	}
	function tokenizeNextBlank(effects, ok, nok) {
		return start;
		function start(code) {
			effects.exit("htmlFlowData");
			effects.enter("lineEndingBlank");
			effects.consume(code);
			effects.exit("lineEndingBlank");
			return effects.attempt(blankLine, ok, nok);
		}
	}
	var htmlText = {
		name: "htmlText",
		tokenize: tokenizeHtmlText
	};
	function tokenizeHtmlText(effects, ok, nok) {
		const self = this;
		let marker;
		let buffer;
		let index;
		let returnState;
		return start;
		function start(code) {
			effects.enter("htmlText");
			effects.enter("htmlTextData");
			effects.consume(code);
			return open;
		}
		function open(code) {
			if (code === 33) {
				effects.consume(code);
				return declarationOpen;
			}
			if (code === 47) {
				effects.consume(code);
				return tagCloseStart;
			}
			if (code === 63) {
				effects.consume(code);
				return instruction;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				return tagOpen;
			}
			return nok(code);
		}
		function declarationOpen(code) {
			if (code === 45) {
				effects.consume(code);
				return commentOpen;
			}
			if (code === 91) {
				effects.consume(code);
				buffer = "CDATA[";
				index = 0;
				return cdataOpen;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				return declaration;
			}
			return nok(code);
		}
		function commentOpen(code) {
			if (code === 45) {
				effects.consume(code);
				return commentStart;
			}
			return nok(code);
		}
		function commentStart(code) {
			if (code === null || code === 62) return nok(code);
			if (code === 45) {
				effects.consume(code);
				return commentStartDash;
			}
			return comment(code);
		}
		function commentStartDash(code) {
			if (code === null || code === 62) return nok(code);
			return comment(code);
		}
		function comment(code) {
			if (code === null) return nok(code);
			if (code === 45) {
				effects.consume(code);
				return commentClose;
			}
			if (markdownLineEnding(code)) {
				returnState = comment;
				return atLineEnding(code);
			}
			effects.consume(code);
			return comment;
		}
		function commentClose(code) {
			if (code === 45) {
				effects.consume(code);
				return end;
			}
			return comment(code);
		}
		function cdataOpen(code) {
			if (code === buffer.charCodeAt(index++)) {
				effects.consume(code);
				return index === buffer.length ? cdata : cdataOpen;
			}
			return nok(code);
		}
		function cdata(code) {
			if (code === null) return nok(code);
			if (code === 93) {
				effects.consume(code);
				return cdataClose;
			}
			if (markdownLineEnding(code)) {
				returnState = cdata;
				return atLineEnding(code);
			}
			effects.consume(code);
			return cdata;
		}
		function cdataClose(code) {
			if (code === 93) {
				effects.consume(code);
				return cdataEnd;
			}
			return cdata(code);
		}
		function cdataEnd(code) {
			if (code === 62) return end(code);
			if (code === 93) {
				effects.consume(code);
				return cdataEnd;
			}
			return cdata(code);
		}
		function declaration(code) {
			if (code === null || code === 62) return end(code);
			if (markdownLineEnding(code)) {
				returnState = declaration;
				return atLineEnding(code);
			}
			effects.consume(code);
			return declaration;
		}
		function instruction(code) {
			if (code === null) return nok(code);
			if (code === 63) {
				effects.consume(code);
				return instructionClose;
			}
			if (markdownLineEnding(code)) {
				returnState = instruction;
				return atLineEnding(code);
			}
			effects.consume(code);
			return instruction;
		}
		function instructionClose(code) {
			return code === 62 ? end(code) : instruction(code);
		}
		function tagCloseStart(code) {
			if (asciiAlpha(code)) {
				effects.consume(code);
				return tagClose;
			}
			return nok(code);
		}
		function tagClose(code) {
			if (code === 45 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return tagClose;
			}
			return tagCloseBetween(code);
		}
		function tagCloseBetween(code) {
			if (markdownLineEnding(code)) {
				returnState = tagCloseBetween;
				return atLineEnding(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagCloseBetween;
			}
			return end(code);
		}
		function tagOpen(code) {
			if (code === 45 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return tagOpen;
			}
			if (code === 47 || code === 62 || markdownLineEndingOrSpace(code)) return tagOpenBetween(code);
			return nok(code);
		}
		function tagOpenBetween(code) {
			if (code === 47) {
				effects.consume(code);
				return end;
			}
			if (code === 58 || code === 95 || asciiAlpha(code)) {
				effects.consume(code);
				return tagOpenAttributeName;
			}
			if (markdownLineEnding(code)) {
				returnState = tagOpenBetween;
				return atLineEnding(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagOpenBetween;
			}
			return end(code);
		}
		function tagOpenAttributeName(code) {
			if (code === 45 || code === 46 || code === 58 || code === 95 || asciiAlphanumeric(code)) {
				effects.consume(code);
				return tagOpenAttributeName;
			}
			return tagOpenAttributeNameAfter(code);
		}
		function tagOpenAttributeNameAfter(code) {
			if (code === 61) {
				effects.consume(code);
				return tagOpenAttributeValueBefore;
			}
			if (markdownLineEnding(code)) {
				returnState = tagOpenAttributeNameAfter;
				return atLineEnding(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagOpenAttributeNameAfter;
			}
			return tagOpenBetween(code);
		}
		function tagOpenAttributeValueBefore(code) {
			if (code === null || code === 60 || code === 61 || code === 62 || code === 96) return nok(code);
			if (code === 34 || code === 39) {
				effects.consume(code);
				marker = code;
				return tagOpenAttributeValueQuoted;
			}
			if (markdownLineEnding(code)) {
				returnState = tagOpenAttributeValueBefore;
				return atLineEnding(code);
			}
			if (markdownSpace(code)) {
				effects.consume(code);
				return tagOpenAttributeValueBefore;
			}
			effects.consume(code);
			marker = void 0;
			return tagOpenAttributeValueUnquoted;
		}
		function tagOpenAttributeValueQuoted(code) {
			if (code === marker) {
				effects.consume(code);
				return tagOpenAttributeValueQuotedAfter;
			}
			if (code === null) return nok(code);
			if (markdownLineEnding(code)) {
				returnState = tagOpenAttributeValueQuoted;
				return atLineEnding(code);
			}
			effects.consume(code);
			return tagOpenAttributeValueQuoted;
		}
		function tagOpenAttributeValueQuotedAfter(code) {
			if (code === 62 || code === 47 || markdownLineEndingOrSpace(code)) return tagOpenBetween(code);
			return nok(code);
		}
		function tagOpenAttributeValueUnquoted(code) {
			if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 96) return nok(code);
			if (code === 62 || markdownLineEndingOrSpace(code)) return tagOpenBetween(code);
			effects.consume(code);
			return tagOpenAttributeValueUnquoted;
		}
		function atLineEnding(code) {
			effects.exit("htmlTextData");
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, afterPrefix, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
		}
		function afterPrefix(code) {
			effects.enter("htmlTextData");
			return returnState(code);
		}
		function end(code) {
			if (code === 62) {
				effects.consume(code);
				effects.exit("htmlTextData");
				effects.exit("htmlText");
				return ok;
			}
			return nok(code);
		}
	}
	var labelEnd = {
		name: "labelEnd",
		tokenize: tokenizeLabelEnd,
		resolveTo: resolveToLabelEnd,
		resolveAll: resolveAllLabelEnd
	};
	var resourceConstruct = { tokenize: tokenizeResource };
	var fullReferenceConstruct = { tokenize: tokenizeFullReference };
	var collapsedReferenceConstruct = { tokenize: tokenizeCollapsedReference };
	function resolveAllLabelEnd(events) {
		let index = -1;
		let token;
		while (++index < events.length) {
			token = events[index][1];
			if (token.type === "labelImage" || token.type === "labelLink" || token.type === "labelEnd") {
				events.splice(index + 1, token.type === "labelImage" ? 4 : 2);
				token.type = "data";
				index++;
			}
		}
		return events;
	}
	function resolveToLabelEnd(events, context) {
		let index = events.length;
		let offset = 0;
		let token;
		let open;
		let close;
		let media;
		while (index--) {
			token = events[index][1];
			if (open) {
				if (token.type === "link" || token.type === "labelLink" && token._inactive) break;
				if (events[index][0] === "enter" && token.type === "labelLink") token._inactive = true;
			} else if (close) {
				if (events[index][0] === "enter" && (token.type === "labelImage" || token.type === "labelLink") && !token._balanced) {
					open = index;
					if (token.type !== "labelLink") {
						offset = 2;
						break;
					}
				}
			} else if (token.type === "labelEnd") close = index;
		}
		const group = {
			type: events[open][1].type === "labelLink" ? "link" : "image",
			start: Object.assign({}, events[open][1].start),
			end: Object.assign({}, events[events.length - 1][1].end)
		};
		const label = {
			type: "label",
			start: Object.assign({}, events[open][1].start),
			end: Object.assign({}, events[close][1].end)
		};
		const text = {
			type: "labelText",
			start: Object.assign({}, events[open + offset + 2][1].end),
			end: Object.assign({}, events[close - 2][1].start)
		};
		media = [[
			"enter",
			group,
			context
		], [
			"enter",
			label,
			context
		]];
		media = push(media, events.slice(open + 1, open + offset + 3));
		media = push(media, [[
			"enter",
			text,
			context
		]]);
		media = push(media, resolveAll(context.parser.constructs.insideSpan.null, events.slice(open + offset + 4, close - 3), context));
		media = push(media, [
			[
				"exit",
				text,
				context
			],
			events[close - 2],
			events[close - 1],
			[
				"exit",
				label,
				context
			]
		]);
		media = push(media, events.slice(close + 1));
		media = push(media, [[
			"exit",
			group,
			context
		]]);
		splice(events, open, events.length, media);
		return events;
	}
	function tokenizeLabelEnd(effects, ok, nok) {
		const self = this;
		let index = self.events.length;
		let labelStart;
		let defined;
		while (index--) if ((self.events[index][1].type === "labelImage" || self.events[index][1].type === "labelLink") && !self.events[index][1]._balanced) {
			labelStart = self.events[index][1];
			break;
		}
		return start;
		function start(code) {
			if (!labelStart) return nok(code);
			if (labelStart._inactive) return balanced(code);
			defined = self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize({
				start: labelStart.end,
				end: self.now()
			})));
			effects.enter("labelEnd");
			effects.enter("labelMarker");
			effects.consume(code);
			effects.exit("labelMarker");
			effects.exit("labelEnd");
			return afterLabelEnd;
		}
		function afterLabelEnd(code) {
			if (code === 40) return effects.attempt(resourceConstruct, ok, defined ? ok : balanced)(code);
			if (code === 91) return effects.attempt(fullReferenceConstruct, ok, defined ? effects.attempt(collapsedReferenceConstruct, ok, balanced) : balanced)(code);
			return defined ? ok(code) : balanced(code);
		}
		function balanced(code) {
			labelStart._balanced = true;
			return nok(code);
		}
	}
	function tokenizeResource(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("resource");
			effects.enter("resourceMarker");
			effects.consume(code);
			effects.exit("resourceMarker");
			return factoryWhitespace(effects, open);
		}
		function open(code) {
			if (code === 41) return end(code);
			return factoryDestination(effects, destinationAfter, nok, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(code);
		}
		function destinationAfter(code) {
			return markdownLineEndingOrSpace(code) ? factoryWhitespace(effects, between)(code) : end(code);
		}
		function between(code) {
			if (code === 34 || code === 39 || code === 40) return factoryTitle(effects, factoryWhitespace(effects, end), nok, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(code);
			return end(code);
		}
		function end(code) {
			if (code === 41) {
				effects.enter("resourceMarker");
				effects.consume(code);
				effects.exit("resourceMarker");
				effects.exit("resource");
				return ok;
			}
			return nok(code);
		}
	}
	function tokenizeFullReference(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			return factoryLabel.call(self, effects, afterLabel, nok, "reference", "referenceMarker", "referenceString")(code);
		}
		function afterLabel(code) {
			return self.parser.defined.includes(normalizeIdentifier(self.sliceSerialize(self.events[self.events.length - 1][1]).slice(1, -1))) ? ok(code) : nok(code);
		}
	}
	function tokenizeCollapsedReference(effects, ok, nok) {
		return start;
		function start(code) {
			effects.enter("reference");
			effects.enter("referenceMarker");
			effects.consume(code);
			effects.exit("referenceMarker");
			return open;
		}
		function open(code) {
			if (code === 93) {
				effects.enter("referenceMarker");
				effects.consume(code);
				effects.exit("referenceMarker");
				effects.exit("reference");
				return ok;
			}
			return nok(code);
		}
	}
	var labelStartImage = {
		name: "labelStartImage",
		tokenize: tokenizeLabelStartImage,
		resolveAll: labelEnd.resolveAll
	};
	function tokenizeLabelStartImage(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			effects.enter("labelImage");
			effects.enter("labelImageMarker");
			effects.consume(code);
			effects.exit("labelImageMarker");
			return open;
		}
		function open(code) {
			if (code === 91) {
				effects.enter("labelMarker");
				effects.consume(code);
				effects.exit("labelMarker");
				effects.exit("labelImage");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
		}
	}
	var labelStartLink = {
		name: "labelStartLink",
		tokenize: tokenizeLabelStartLink,
		resolveAll: labelEnd.resolveAll
	};
	function tokenizeLabelStartLink(effects, ok, nok) {
		const self = this;
		return start;
		function start(code) {
			effects.enter("labelLink");
			effects.enter("labelMarker");
			effects.consume(code);
			effects.exit("labelMarker");
			effects.exit("labelLink");
			return after;
		}
		function after(code) {
			return code === 94 && "_hiddenFootnoteSupport" in self.parser.constructs ? nok(code) : ok(code);
		}
	}
	var lineEnding = {
		name: "lineEnding",
		tokenize: tokenizeLineEnding
	};
	function tokenizeLineEnding(effects, ok) {
		return start;
		function start(code) {
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			return factorySpace(effects, ok, "linePrefix");
		}
	}
	var thematicBreak$1 = {
		name: "thematicBreak",
		tokenize: tokenizeThematicBreak
	};
	function tokenizeThematicBreak(effects, ok, nok) {
		let size = 0;
		let marker;
		return start;
		function start(code) {
			effects.enter("thematicBreak");
			marker = code;
			return atBreak(code);
		}
		function atBreak(code) {
			if (code === marker) {
				effects.enter("thematicBreakSequence");
				return sequence(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, atBreak, "whitespace")(code);
			if (size < 3 || code !== null && !markdownLineEnding(code)) return nok(code);
			effects.exit("thematicBreak");
			return ok(code);
		}
		function sequence(code) {
			if (code === marker) {
				effects.consume(code);
				size++;
				return sequence;
			}
			effects.exit("thematicBreakSequence");
			return atBreak(code);
		}
	}
	var list$1 = {
		name: "list",
		tokenize: tokenizeListStart,
		continuation: { tokenize: tokenizeListContinuation },
		exit: tokenizeListEnd
	};
	var listItemPrefixWhitespaceConstruct = {
		tokenize: tokenizeListItemPrefixWhitespace,
		partial: true
	};
	var indentConstruct = {
		tokenize: tokenizeIndent$1,
		partial: true
	};
	function tokenizeListStart(effects, ok, nok) {
		const self = this;
		const tail = self.events[self.events.length - 1];
		let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
		let size = 0;
		return start;
		function start(code) {
			const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
			if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
				if (!self.containerState.type) {
					self.containerState.type = kind;
					effects.enter(kind, { _container: true });
				}
				if (kind === "listUnordered") {
					effects.enter("listItemPrefix");
					return code === 42 || code === 45 ? effects.check(thematicBreak$1, nok, atMarker)(code) : atMarker(code);
				}
				if (!self.interrupt || code === 49) {
					effects.enter("listItemPrefix");
					effects.enter("listItemValue");
					return inside(code);
				}
			}
			return nok(code);
		}
		function inside(code) {
			if (asciiDigit(code) && ++size < 10) {
				effects.consume(code);
				return inside;
			}
			if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
				effects.exit("listItemValue");
				return atMarker(code);
			}
			return nok(code);
		}
		function atMarker(code) {
			effects.enter("listItemMarker");
			effects.consume(code);
			effects.exit("listItemMarker");
			self.containerState.marker = self.containerState.marker || code;
			return effects.check(blankLine, self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
		}
		function onBlank(code) {
			self.containerState.initialBlankLine = true;
			initialSize++;
			return endOfPrefix(code);
		}
		function otherPrefix(code) {
			if (markdownSpace(code)) {
				effects.enter("listItemPrefixWhitespace");
				effects.consume(code);
				effects.exit("listItemPrefixWhitespace");
				return endOfPrefix;
			}
			return nok(code);
		}
		function endOfPrefix(code) {
			self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
			return ok(code);
		}
	}
	function tokenizeListContinuation(effects, ok, nok) {
		const self = this;
		self.containerState._closeFlow = void 0;
		return effects.check(blankLine, onBlank, notBlank);
		function onBlank(code) {
			self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;
			return factorySpace(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
		}
		function notBlank(code) {
			if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
				self.containerState.furtherBlankLines = void 0;
				self.containerState.initialBlankLine = void 0;
				return notInCurrentItem(code);
			}
			self.containerState.furtherBlankLines = void 0;
			self.containerState.initialBlankLine = void 0;
			return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
		}
		function notInCurrentItem(code) {
			self.containerState._closeFlow = true;
			self.interrupt = void 0;
			return factorySpace(effects, effects.attempt(list$1, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
		}
	}
	function tokenizeIndent$1(effects, ok, nok) {
		const self = this;
		return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
		}
	}
	function tokenizeListEnd(effects) {
		effects.exit(this.containerState.type);
	}
	function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
		const self = this;
		return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return !markdownSpace(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
		}
	}
	var setextUnderline = {
		name: "setextUnderline",
		tokenize: tokenizeSetextUnderline,
		resolveTo: resolveToSetextUnderline
	};
	function resolveToSetextUnderline(events, context) {
		let index = events.length;
		let content;
		let text;
		let definition;
		while (index--) if (events[index][0] === "enter") {
			if (events[index][1].type === "content") {
				content = index;
				break;
			}
			if (events[index][1].type === "paragraph") text = index;
		} else {
			if (events[index][1].type === "content") events.splice(index, 1);
			if (!definition && events[index][1].type === "definition") definition = index;
		}
		const heading = {
			type: "setextHeading",
			start: Object.assign({}, events[text][1].start),
			end: Object.assign({}, events[events.length - 1][1].end)
		};
		events[text][1].type = "setextHeadingText";
		if (definition) {
			events.splice(text, 0, [
				"enter",
				heading,
				context
			]);
			events.splice(definition + 1, 0, [
				"exit",
				events[content][1],
				context
			]);
			events[content][1].end = Object.assign({}, events[definition][1].end);
		} else events[content][1] = heading;
		events.push([
			"exit",
			heading,
			context
		]);
		return events;
	}
	function tokenizeSetextUnderline(effects, ok, nok) {
		const self = this;
		let index = self.events.length;
		let marker;
		let paragraph;
		while (index--) if (self.events[index][1].type !== "lineEnding" && self.events[index][1].type !== "linePrefix" && self.events[index][1].type !== "content") {
			paragraph = self.events[index][1].type === "paragraph";
			break;
		}
		return start;
		function start(code) {
			if (!self.parser.lazy[self.now().line] && (self.interrupt || paragraph)) {
				effects.enter("setextHeadingLine");
				effects.enter("setextHeadingLineSequence");
				marker = code;
				return closingSequence(code);
			}
			return nok(code);
		}
		function closingSequence(code) {
			if (code === marker) {
				effects.consume(code);
				return closingSequence;
			}
			effects.exit("setextHeadingLineSequence");
			return factorySpace(effects, closingSequenceEnd, "lineSuffix")(code);
		}
		function closingSequenceEnd(code) {
			if (code === null || markdownLineEnding(code)) {
				effects.exit("setextHeadingLine");
				return ok(code);
			}
			return nok(code);
		}
	}
	var flow$1 = { tokenize: initializeFlow };
	function initializeFlow(effects) {
		const self = this;
		const initial = effects.attempt(blankLine, atBlankEnding, effects.attempt(this.parser.constructs.flowInitial, afterConstruct, factorySpace(effects, effects.attempt(this.parser.constructs.flow, afterConstruct, effects.attempt(content, afterConstruct)), "linePrefix")));
		return initial;
		function atBlankEnding(code) {
			if (code === null) {
				effects.consume(code);
				return;
			}
			effects.enter("lineEndingBlank");
			effects.consume(code);
			effects.exit("lineEndingBlank");
			self.currentConstruct = void 0;
			return initial;
		}
		function afterConstruct(code) {
			if (code === null) {
				effects.consume(code);
				return;
			}
			effects.enter("lineEnding");
			effects.consume(code);
			effects.exit("lineEnding");
			self.currentConstruct = void 0;
			return initial;
		}
	}
	var resolver = { resolveAll: createResolver() };
	var string$1 = initializeFactory("string");
	var text$3 = initializeFactory("text");
	function initializeFactory(field) {
		return {
			tokenize: initializeText,
			resolveAll: createResolver(field === "text" ? resolveAllLineSuffixes : void 0)
		};
		function initializeText(effects) {
			const self = this;
			const constructs = this.parser.constructs[field];
			const text = effects.attempt(constructs, start, notText);
			return start;
			function start(code) {
				return atBreak(code) ? text(code) : notText(code);
			}
			function notText(code) {
				if (code === null) {
					effects.consume(code);
					return;
				}
				effects.enter("data");
				effects.consume(code);
				return data;
			}
			function data(code) {
				if (atBreak(code)) {
					effects.exit("data");
					return text(code);
				}
				effects.consume(code);
				return data;
			}
			function atBreak(code) {
				if (code === null) return true;
				const list = constructs[code];
				let index = -1;
				if (list) while (++index < list.length) {
					const item = list[index];
					if (!item.previous || item.previous.call(self, self.previous)) return true;
				}
				return false;
			}
		}
	}
	function createResolver(extraResolver) {
		return resolveAllText;
		function resolveAllText(events, context) {
			let index = -1;
			let enter;
			while (++index <= events.length) if (enter === void 0) {
				if (events[index] && events[index][1].type === "data") {
					enter = index;
					index++;
				}
			} else if (!events[index] || events[index][1].type !== "data") {
				if (index !== enter + 2) {
					events[enter][1].end = events[index - 1][1].end;
					events.splice(enter + 2, index - enter - 2);
					index = enter + 2;
				}
				enter = void 0;
			}
			return extraResolver ? extraResolver(events, context) : events;
		}
	}
	function resolveAllLineSuffixes(events, context) {
		let eventIndex = 0;
		while (++eventIndex <= events.length) if ((eventIndex === events.length || events[eventIndex][1].type === "lineEnding") && events[eventIndex - 1][1].type === "data") {
			const data = events[eventIndex - 1][1];
			const chunks = context.sliceStream(data);
			let index = chunks.length;
			let bufferIndex = -1;
			let size = 0;
			let tabs;
			while (index--) {
				const chunk = chunks[index];
				if (typeof chunk === "string") {
					bufferIndex = chunk.length;
					while (chunk.charCodeAt(bufferIndex - 1) === 32) {
						size++;
						bufferIndex--;
					}
					if (bufferIndex) break;
					bufferIndex = -1;
				} else if (chunk === -2) {
					tabs = true;
					size++;
				} else if (chunk === -1) {} else {
					index++;
					break;
				}
			}
			if (size) {
				const token = {
					type: eventIndex === events.length || tabs || size < 2 ? "lineSuffix" : "hardBreakTrailing",
					start: {
						line: data.end.line,
						column: data.end.column - size,
						offset: data.end.offset - size,
						_index: data.start._index + index,
						_bufferIndex: index ? bufferIndex : data.start._bufferIndex + bufferIndex
					},
					end: Object.assign({}, data.end)
				};
				data.end = Object.assign({}, token.start);
				if (data.start.offset === data.end.offset) Object.assign(data, token);
				else {
					events.splice(eventIndex, 0, [
						"enter",
						token,
						context
					], [
						"exit",
						token,
						context
					]);
					eventIndex += 2;
				}
			}
			eventIndex++;
		}
		return events;
	}
	function createTokenizer(parser, initialize, from) {
		let point = Object.assign(from ? Object.assign({}, from) : {
			line: 1,
			column: 1,
			offset: 0
		}, {
			_index: 0,
			_bufferIndex: -1
		});
		const columnStart = {};
		const resolveAllConstructs = [];
		let chunks = [];
		let stack = [];
		const effects = {
			consume,
			enter,
			exit,
			attempt: constructFactory(onsuccessfulconstruct),
			check: constructFactory(onsuccessfulcheck),
			interrupt: constructFactory(onsuccessfulcheck, { interrupt: true })
		};
		const context = {
			previous: null,
			code: null,
			containerState: {},
			events: [],
			parser,
			sliceStream,
			sliceSerialize,
			now,
			defineSkip,
			write
		};
		let state = initialize.tokenize.call(context, effects);
		if (initialize.resolveAll) resolveAllConstructs.push(initialize);
		return context;
		function write(slice) {
			chunks = push(chunks, slice);
			main();
			if (chunks[chunks.length - 1] !== null) return [];
			addResult(initialize, 0);
			context.events = resolveAll(resolveAllConstructs, context.events, context);
			return context.events;
		}
		function sliceSerialize(token, expandTabs) {
			return serializeChunks(sliceStream(token), expandTabs);
		}
		function sliceStream(token) {
			return sliceChunks(chunks, token);
		}
		function now() {
			return Object.assign({}, point);
		}
		function defineSkip(value) {
			columnStart[value.line] = value.column;
			accountForPotentialSkip();
		}
		function main() {
			let chunkIndex;
			while (point._index < chunks.length) {
				const chunk = chunks[point._index];
				if (typeof chunk === "string") {
					chunkIndex = point._index;
					if (point._bufferIndex < 0) point._bufferIndex = 0;
					while (point._index === chunkIndex && point._bufferIndex < chunk.length) go(chunk.charCodeAt(point._bufferIndex));
				} else go(chunk);
			}
		}
		function go(code) {
			state = state(code);
		}
		function consume(code) {
			if (markdownLineEnding(code)) {
				point.line++;
				point.column = 1;
				point.offset += code === -3 ? 2 : 1;
				accountForPotentialSkip();
			} else if (code !== -1) {
				point.column++;
				point.offset++;
			}
			if (point._bufferIndex < 0) point._index++;
			else {
				point._bufferIndex++;
				if (point._bufferIndex === chunks[point._index].length) {
					point._bufferIndex = -1;
					point._index++;
				}
			}
			context.previous = code;
		}
		function enter(type, fields) {
			const token = fields || {};
			token.type = type;
			token.start = now();
			context.events.push([
				"enter",
				token,
				context
			]);
			stack.push(token);
			return token;
		}
		function exit(type) {
			const token = stack.pop();
			token.end = now();
			context.events.push([
				"exit",
				token,
				context
			]);
			return token;
		}
		function onsuccessfulconstruct(construct, info) {
			addResult(construct, info.from);
		}
		function onsuccessfulcheck(_, info) {
			info.restore();
		}
		function constructFactory(onreturn, fields) {
			return hook;
			function hook(constructs, returnState, bogusState) {
				let listOfConstructs;
				let constructIndex;
				let currentConstruct;
				let info;
				return Array.isArray(constructs) ? handleListOfConstructs(constructs) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
				function handleMapOfConstructs(map) {
					return start;
					function start(code) {
						const def = code !== null && map[code];
						const all = code !== null && map.null;
						return handleListOfConstructs([...Array.isArray(def) ? def : def ? [def] : [], ...Array.isArray(all) ? all : all ? [all] : []])(code);
					}
				}
				function handleListOfConstructs(list) {
					listOfConstructs = list;
					constructIndex = 0;
					if (list.length === 0) return bogusState;
					return handleConstruct(list[constructIndex]);
				}
				function handleConstruct(construct) {
					return start;
					function start(code) {
						info = store();
						currentConstruct = construct;
						if (!construct.partial) context.currentConstruct = construct;
						if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) return nok(code);
						return construct.tokenize.call(fields ? Object.assign(Object.create(context), fields) : context, effects, ok, nok)(code);
					}
				}
				function ok(code) {
					onreturn(currentConstruct, info);
					return returnState;
				}
				function nok(code) {
					info.restore();
					if (++constructIndex < listOfConstructs.length) return handleConstruct(listOfConstructs[constructIndex]);
					return bogusState;
				}
			}
		}
		function addResult(construct, from) {
			if (construct.resolveAll && !resolveAllConstructs.includes(construct)) resolveAllConstructs.push(construct);
			if (construct.resolve) splice(context.events, from, context.events.length - from, construct.resolve(context.events.slice(from), context));
			if (construct.resolveTo) context.events = construct.resolveTo(context.events, context);
		}
		function store() {
			const startPoint = now();
			const startPrevious = context.previous;
			const startCurrentConstruct = context.currentConstruct;
			const startEventsIndex = context.events.length;
			const startStack = Array.from(stack);
			return {
				restore,
				from: startEventsIndex
			};
			function restore() {
				point = startPoint;
				context.previous = startPrevious;
				context.currentConstruct = startCurrentConstruct;
				context.events.length = startEventsIndex;
				stack = startStack;
				accountForPotentialSkip();
			}
		}
		function accountForPotentialSkip() {
			if (point.line in columnStart && point.column < 2) {
				point.column = columnStart[point.line];
				point.offset += columnStart[point.line] - 1;
			}
		}
	}
	function sliceChunks(chunks, token) {
		const startIndex = token.start._index;
		const startBufferIndex = token.start._bufferIndex;
		const endIndex = token.end._index;
		const endBufferIndex = token.end._bufferIndex;
		let view;
		if (startIndex === endIndex) view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
		else {
			view = chunks.slice(startIndex, endIndex);
			if (startBufferIndex > -1) view[0] = view[0].slice(startBufferIndex);
			if (endBufferIndex > 0) view.push(chunks[endIndex].slice(0, endBufferIndex));
		}
		return view;
	}
	function serializeChunks(chunks, expandTabs) {
		let index = -1;
		const result = [];
		let atTab;
		while (++index < chunks.length) {
			const chunk = chunks[index];
			let value;
			if (typeof chunk === "string") value = chunk;
			else switch (chunk) {
				case -5:
					value = "\r";
					break;
				case -4:
					value = "\n";
					break;
				case -3:
					value = "\r\n";
					break;
				case -2:
					value = expandTabs ? " " : "	";
					break;
				case -1:
					if (!expandTabs && atTab) continue;
					value = " ";
					break;
				default: value = String.fromCharCode(chunk);
			}
			atTab = chunk === -2;
			result.push(value);
		}
		return result.join("");
	}
	var constructs_exports = __exportAll({
		attentionMarkers: () => attentionMarkers,
		contentInitial: () => contentInitial,
		disable: () => disable,
		document: () => document$1,
		flow: () => flow,
		flowInitial: () => flowInitial,
		insideSpan: () => insideSpan,
		string: () => string,
		text: () => text$2
	});
	var document$1 = {
		[42]: list$1,
		[43]: list$1,
		[45]: list$1,
		[48]: list$1,
		[49]: list$1,
		[50]: list$1,
		[51]: list$1,
		[52]: list$1,
		[53]: list$1,
		[54]: list$1,
		[55]: list$1,
		[56]: list$1,
		[57]: list$1,
		[62]: blockQuote
	};
	var contentInitial = { [91]: definition$1 };
	var flowInitial = {
		[-2]: codeIndented,
		[-1]: codeIndented,
		[32]: codeIndented
	};
	var flow = {
		[35]: headingAtx,
		[42]: thematicBreak$1,
		[45]: [setextUnderline, thematicBreak$1],
		[60]: htmlFlow,
		[61]: setextUnderline,
		[95]: thematicBreak$1,
		[96]: codeFenced,
		[126]: codeFenced
	};
	var string = {
		[38]: characterReference,
		[92]: characterEscape
	};
	var text$2 = {
		[-5]: lineEnding,
		[-4]: lineEnding,
		[-3]: lineEnding,
		[33]: labelStartImage,
		[38]: characterReference,
		[42]: attention,
		[60]: [autolink, htmlText],
		[91]: labelStartLink,
		[92]: [hardBreakEscape, characterEscape],
		[93]: labelEnd,
		[95]: attention,
		[96]: codeText
	};
	var insideSpan = { null: [attention, resolver] };
	var attentionMarkers = { null: [42, 95] };
	var disable = { null: [] };
	function parse(options = {}) {
		const parser = {
			defined: [],
			lazy: {},
			constructs: combineExtensions([constructs_exports].concat(options.extensions || [])),
			content: create(content$1),
			document: create(document$2),
			flow: create(flow$1),
			string: create(string$1),
			text: create(text$3)
		};
		return parser;
		function create(initial) {
			return creator;
			function creator(from) {
				return createTokenizer(parser, initial, from);
			}
		}
	}
	function postprocess(events) {
		while (!subtokenize(events));
		return events;
	}
	var search = /[\0\t\n\r]/g;
	function preprocess() {
		let column = 1;
		let buffer = "";
		let start = true;
		let atCarriageReturn;
		return preprocessor;
		function preprocessor(value, encoding, end) {
			const chunks = [];
			let match;
			let next;
			let startPosition;
			let endPosition;
			let code;
			value = buffer + value.toString(encoding);
			startPosition = 0;
			buffer = "";
			if (start) {
				if (value.charCodeAt(0) === 65279) startPosition++;
				start = void 0;
			}
			while (startPosition < value.length) {
				search.lastIndex = startPosition;
				match = search.exec(value);
				endPosition = match && match.index !== void 0 ? match.index : value.length;
				code = value.charCodeAt(endPosition);
				if (!match) {
					buffer = value.slice(startPosition);
					break;
				}
				if (code === 10 && startPosition === endPosition && atCarriageReturn) {
					chunks.push(-3);
					atCarriageReturn = void 0;
				} else {
					if (atCarriageReturn) {
						chunks.push(-5);
						atCarriageReturn = void 0;
					}
					if (startPosition < endPosition) {
						chunks.push(value.slice(startPosition, endPosition));
						column += endPosition - startPosition;
					}
					switch (code) {
						case 0:
							chunks.push(65533);
							column++;
							break;
						case 9:
							next = Math.ceil(column / 4) * 4;
							chunks.push(-2);
							while (column++ < next) chunks.push(-1);
							break;
						case 10:
							chunks.push(-4);
							column = 1;
							break;
						default:
							atCarriageReturn = true;
							column = 1;
					}
				}
				startPosition = endPosition + 1;
			}
			if (end) {
				if (atCarriageReturn) chunks.push(-5);
				if (buffer) chunks.push(buffer);
				chunks.push(null);
			}
			return chunks;
		}
	}
	var micromark = function(value, encoding, options) {
		if (typeof encoding !== "string") {
			options = encoding;
			encoding = void 0;
		}
		return compile(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
	};
	var emptyOptions$1 = {};
	function toString(value, options) {
		const settings = options || emptyOptions$1;
		return one(value, typeof settings.includeImageAlt === "boolean" ? settings.includeImageAlt : true, typeof settings.includeHtml === "boolean" ? settings.includeHtml : true);
	}
	function one(value, includeImageAlt, includeHtml) {
		if (node(value)) {
			if ("value" in value) return value.type === "html" && !includeHtml ? "" : value.value;
			if (includeImageAlt && "alt" in value && value.alt) return value.alt;
			if ("children" in value) return all(value.children, includeImageAlt, includeHtml);
		}
		if (Array.isArray(value)) return all(value, includeImageAlt, includeHtml);
		return "";
	}
	function all(values, includeImageAlt, includeHtml) {
		const result = [];
		let index = -1;
		while (++index < values.length) result[index] = one(values[index], includeImageAlt, includeHtml);
		return result.join("");
	}
	function node(value) {
		return Boolean(value && typeof value === "object");
	}
	var characterEscapeOrReference = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
	function decodeString(value) {
		return value.replace(characterEscapeOrReference, decode);
	}
	function decode($0, $1, $2) {
		if ($1) return $1;
		if ($2.charCodeAt(0) === 35) {
			const head = $2.charCodeAt(1);
			const hex = head === 120 || head === 88;
			return decodeNumericCharacterReference($2.slice(hex ? 2 : 1), hex ? 16 : 10);
		}
		return decodeNamedCharacterReference($2) || $0;
	}
	function stringifyPosition(value) {
		if (!value || typeof value !== "object") return "";
		if ("position" in value || "type" in value) return position(value.position);
		if ("start" in value || "end" in value) return position(value);
		if ("line" in value || "column" in value) return point$1(value);
		return "";
	}
	function point$1(point) {
		return index(point && point.line) + ":" + index(point && point.column);
	}
	function position(pos) {
		return point$1(pos && pos.start) + "-" + point$1(pos && pos.end);
	}
	function index(value) {
		return value && typeof value === "number" ? value : 1;
	}
	var own$3 = {}.hasOwnProperty;
	var fromMarkdown$1 = function(value, encoding, options) {
		if (typeof encoding !== "string") {
			options = encoding;
			encoding = void 0;
		}
		return compiler(options)(postprocess(parse(options).document().write(preprocess()(value, encoding, true))));
	};
	function compiler(options) {
		const config = {
			transforms: [],
			canContainEols: [
				"emphasis",
				"fragment",
				"heading",
				"paragraph",
				"strong"
			],
			enter: {
				autolink: opener(link),
				autolinkProtocol: onenterdata,
				autolinkEmail: onenterdata,
				atxHeading: opener(heading),
				blockQuote: opener(blockQuote),
				characterEscape: onenterdata,
				characterReference: onenterdata,
				codeFenced: opener(codeFlow),
				codeFencedFenceInfo: buffer,
				codeFencedFenceMeta: buffer,
				codeIndented: opener(codeFlow, buffer),
				codeText: opener(codeText, buffer),
				codeTextData: onenterdata,
				data: onenterdata,
				codeFlowValue: onenterdata,
				definition: opener(definition),
				definitionDestinationString: buffer,
				definitionLabelString: buffer,
				definitionTitleString: buffer,
				emphasis: opener(emphasis),
				hardBreakEscape: opener(hardBreak),
				hardBreakTrailing: opener(hardBreak),
				htmlFlow: opener(html, buffer),
				htmlFlowData: onenterdata,
				htmlText: opener(html, buffer),
				htmlTextData: onenterdata,
				image: opener(image),
				label: buffer,
				link: opener(link),
				listItem: opener(listItem),
				listItemValue: onenterlistitemvalue,
				listOrdered: opener(list, onenterlistordered),
				listUnordered: opener(list),
				paragraph: opener(paragraph),
				reference: onenterreference,
				referenceString: buffer,
				resourceDestinationString: buffer,
				resourceTitleString: buffer,
				setextHeading: opener(heading),
				strong: opener(strong),
				thematicBreak: opener(thematicBreak)
			},
			exit: {
				atxHeading: closer(),
				atxHeadingSequence: onexitatxheadingsequence,
				autolink: closer(),
				autolinkEmail: onexitautolinkemail,
				autolinkProtocol: onexitautolinkprotocol,
				blockQuote: closer(),
				characterEscapeValue: onexitdata,
				characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
				characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
				characterReferenceValue: onexitcharacterreferencevalue,
				codeFenced: closer(onexitcodefenced),
				codeFencedFence: onexitcodefencedfence,
				codeFencedFenceInfo: onexitcodefencedfenceinfo,
				codeFencedFenceMeta: onexitcodefencedfencemeta,
				codeFlowValue: onexitdata,
				codeIndented: closer(onexitcodeindented),
				codeText: closer(onexitcodetext),
				codeTextData: onexitdata,
				data: onexitdata,
				definition: closer(),
				definitionDestinationString: onexitdefinitiondestinationstring,
				definitionLabelString: onexitdefinitionlabelstring,
				definitionTitleString: onexitdefinitiontitlestring,
				emphasis: closer(),
				hardBreakEscape: closer(onexithardbreak),
				hardBreakTrailing: closer(onexithardbreak),
				htmlFlow: closer(onexithtmlflow),
				htmlFlowData: onexitdata,
				htmlText: closer(onexithtmltext),
				htmlTextData: onexitdata,
				image: closer(onexitimage),
				label: onexitlabel,
				labelText: onexitlabeltext,
				lineEnding: onexitlineending,
				link: closer(onexitlink),
				listItem: closer(),
				listOrdered: closer(),
				listUnordered: closer(),
				paragraph: closer(),
				referenceString: onexitreferencestring,
				resourceDestinationString: onexitresourcedestinationstring,
				resourceTitleString: onexitresourcetitlestring,
				resource: onexitresource,
				setextHeading: closer(onexitsetextheading),
				setextHeadingLineSequence: onexitsetextheadinglinesequence,
				setextHeadingText: onexitsetextheadingtext,
				strong: closer(),
				thematicBreak: closer()
			}
		};
		configure$1(config, (options || {}).mdastExtensions || []);
		const data = {};
		return compile;
		function compile(events) {
			let tree = {
				type: "root",
				children: []
			};
			const context = {
				stack: [tree],
				tokenStack: [],
				config,
				enter,
				exit,
				buffer,
				resume,
				setData,
				getData
			};
			const listStack = [];
			let index = -1;
			while (++index < events.length) if (events[index][1].type === "listOrdered" || events[index][1].type === "listUnordered") {
				if (events[index][0] === "enter") listStack.push(index);
				else index = prepareList(events, listStack.pop(), index);
			}
			index = -1;
			while (++index < events.length) {
				const handler = config[events[index][0]];
				if (own$3.call(handler, events[index][1].type)) handler[events[index][1].type].call(Object.assign({ sliceSerialize: events[index][2].sliceSerialize }, context), events[index][1]);
			}
			if (context.tokenStack.length > 0) {
				const tail = context.tokenStack[context.tokenStack.length - 1];
				(tail[1] || defaultOnError).call(context, void 0, tail[0]);
			}
			tree.position = {
				start: point(events.length > 0 ? events[0][1].start : {
					line: 1,
					column: 1,
					offset: 0
				}),
				end: point(events.length > 0 ? events[events.length - 2][1].end : {
					line: 1,
					column: 1,
					offset: 0
				})
			};
			index = -1;
			while (++index < config.transforms.length) tree = config.transforms[index](tree) || tree;
			return tree;
		}
		function prepareList(events, start, length) {
			let index = start - 1;
			let containerBalance = -1;
			let listSpread = false;
			let listItem;
			let lineIndex;
			let firstBlankLineIndex;
			let atMarker;
			while (++index <= length) {
				const event = events[index];
				if (event[1].type === "listUnordered" || event[1].type === "listOrdered" || event[1].type === "blockQuote") {
					if (event[0] === "enter") containerBalance++;
					else containerBalance--;
					atMarker = void 0;
				} else if (event[1].type === "lineEndingBlank") {
					if (event[0] === "enter") {
						if (listItem && !atMarker && !containerBalance && !firstBlankLineIndex) firstBlankLineIndex = index;
						atMarker = void 0;
					}
				} else if (event[1].type === "linePrefix" || event[1].type === "listItemValue" || event[1].type === "listItemMarker" || event[1].type === "listItemPrefix" || event[1].type === "listItemPrefixWhitespace") {} else atMarker = void 0;
				if (!containerBalance && event[0] === "enter" && event[1].type === "listItemPrefix" || containerBalance === -1 && event[0] === "exit" && (event[1].type === "listUnordered" || event[1].type === "listOrdered")) {
					if (listItem) {
						let tailIndex = index;
						lineIndex = void 0;
						while (tailIndex--) {
							const tailEvent = events[tailIndex];
							if (tailEvent[1].type === "lineEnding" || tailEvent[1].type === "lineEndingBlank") {
								if (tailEvent[0] === "exit") continue;
								if (lineIndex) {
									events[lineIndex][1].type = "lineEndingBlank";
									listSpread = true;
								}
								tailEvent[1].type = "lineEnding";
								lineIndex = tailIndex;
							} else if (tailEvent[1].type === "linePrefix" || tailEvent[1].type === "blockQuotePrefix" || tailEvent[1].type === "blockQuotePrefixWhitespace" || tailEvent[1].type === "blockQuoteMarker" || tailEvent[1].type === "listItemIndent") {} else break;
						}
						if (firstBlankLineIndex && (!lineIndex || firstBlankLineIndex < lineIndex)) listItem._spread = true;
						listItem.end = Object.assign({}, lineIndex ? events[lineIndex][1].start : event[1].end);
						events.splice(lineIndex || index, 0, [
							"exit",
							listItem,
							event[2]
						]);
						index++;
						length++;
					}
					if (event[1].type === "listItemPrefix") {
						listItem = {
							type: "listItem",
							_spread: false,
							start: Object.assign({}, event[1].start),
							end: void 0
						};
						events.splice(index, 0, [
							"enter",
							listItem,
							event[2]
						]);
						index++;
						length++;
						firstBlankLineIndex = void 0;
						atMarker = true;
					}
				}
			}
			events[start][1]._spread = listSpread;
			return length;
		}
		function setData(key, value) {
			data[key] = value;
		}
		function getData(key) {
			return data[key];
		}
		function opener(create, and) {
			return open;
			function open(token) {
				enter.call(this, create(token), token);
				if (and) and.call(this, token);
			}
		}
		function buffer() {
			this.stack.push({
				type: "fragment",
				children: []
			});
		}
		function enter(node, token, errorHandler) {
			this.stack[this.stack.length - 1].children.push(node);
			this.stack.push(node);
			this.tokenStack.push([token, errorHandler]);
			node.position = { start: point(token.start) };
			return node;
		}
		function closer(and) {
			return close;
			function close(token) {
				if (and) and.call(this, token);
				exit.call(this, token);
			}
		}
		function exit(token, onExitError) {
			const node = this.stack.pop();
			const open = this.tokenStack.pop();
			if (!open) throw new Error("Cannot close `" + token.type + "` (" + stringifyPosition({
				start: token.start,
				end: token.end
			}) + "): it’s not open");
			else if (open[0].type !== token.type) {
				if (onExitError) onExitError.call(this, token, open[0]);
				else (open[1] || defaultOnError).call(this, token, open[0]);
			}
			node.position.end = point(token.end);
			return node;
		}
		function resume() {
			return toString(this.stack.pop());
		}
		function onenterlistordered() {
			setData("expectingFirstListItemValue", true);
		}
		function onenterlistitemvalue(token) {
			if (getData("expectingFirstListItemValue")) {
				const ancestor = this.stack[this.stack.length - 2];
				ancestor.start = Number.parseInt(this.sliceSerialize(token), 10);
				setData("expectingFirstListItemValue");
			}
		}
		function onexitcodefencedfenceinfo() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.lang = data;
		}
		function onexitcodefencedfencemeta() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.meta = data;
		}
		function onexitcodefencedfence() {
			if (getData("flowCodeInside")) return;
			this.buffer();
			setData("flowCodeInside", true);
		}
		function onexitcodefenced() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "");
			setData("flowCodeInside");
		}
		function onexitcodeindented() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data.replace(/(\r?\n|\r)$/g, "");
		}
		function onexitdefinitionlabelstring(token) {
			const label = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.label = label;
			node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
		}
		function onexitdefinitiontitlestring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.title = data;
		}
		function onexitdefinitiondestinationstring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.url = data;
		}
		function onexitatxheadingsequence(token) {
			const node = this.stack[this.stack.length - 1];
			if (!node.depth) node.depth = this.sliceSerialize(token).length;
		}
		function onexitsetextheadingtext() {
			setData("setextHeadingSlurpLineEnding", true);
		}
		function onexitsetextheadinglinesequence(token) {
			const node = this.stack[this.stack.length - 1];
			node.depth = this.sliceSerialize(token).charCodeAt(0) === 61 ? 1 : 2;
		}
		function onexitsetextheading() {
			setData("setextHeadingSlurpLineEnding");
		}
		function onenterdata(token) {
			const node = this.stack[this.stack.length - 1];
			let tail = node.children[node.children.length - 1];
			if (!tail || tail.type !== "text") {
				tail = text();
				tail.position = { start: point(token.start) };
				node.children.push(tail);
			}
			this.stack.push(tail);
		}
		function onexitdata(token) {
			const tail = this.stack.pop();
			tail.value += this.sliceSerialize(token);
			tail.position.end = point(token.end);
		}
		function onexitlineending(token) {
			const context = this.stack[this.stack.length - 1];
			if (getData("atHardBreak")) {
				const tail = context.children[context.children.length - 1];
				tail.position.end = point(token.end);
				setData("atHardBreak");
				return;
			}
			if (!getData("setextHeadingSlurpLineEnding") && config.canContainEols.includes(context.type)) {
				onenterdata.call(this, token);
				onexitdata.call(this, token);
			}
		}
		function onexithardbreak() {
			setData("atHardBreak", true);
		}
		function onexithtmlflow() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data;
		}
		function onexithtmltext() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data;
		}
		function onexitcodetext() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.value = data;
		}
		function onexitlink() {
			const node = this.stack[this.stack.length - 1];
			if (getData("inReference")) {
				const referenceType = getData("referenceType") || "shortcut";
				node.type += "Reference";
				node.referenceType = referenceType;
				delete node.url;
				delete node.title;
			} else {
				delete node.identifier;
				delete node.label;
			}
			setData("referenceType");
		}
		function onexitimage() {
			const node = this.stack[this.stack.length - 1];
			if (getData("inReference")) {
				const referenceType = getData("referenceType") || "shortcut";
				node.type += "Reference";
				node.referenceType = referenceType;
				delete node.url;
				delete node.title;
			} else {
				delete node.identifier;
				delete node.label;
			}
			setData("referenceType");
		}
		function onexitlabeltext(token) {
			const string = this.sliceSerialize(token);
			const ancestor = this.stack[this.stack.length - 2];
			ancestor.label = decodeString(string);
			ancestor.identifier = normalizeIdentifier(string).toLowerCase();
		}
		function onexitlabel() {
			const fragment = this.stack[this.stack.length - 1];
			const value = this.resume();
			const node = this.stack[this.stack.length - 1];
			setData("inReference", true);
			if (node.type === "link") node.children = fragment.children;
			else node.alt = value;
		}
		function onexitresourcedestinationstring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.url = data;
		}
		function onexitresourcetitlestring() {
			const data = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.title = data;
		}
		function onexitresource() {
			setData("inReference");
		}
		function onenterreference() {
			setData("referenceType", "collapsed");
		}
		function onexitreferencestring(token) {
			const label = this.resume();
			const node = this.stack[this.stack.length - 1];
			node.label = label;
			node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
			setData("referenceType", "full");
		}
		function onexitcharacterreferencemarker(token) {
			setData("characterReferenceType", token.type);
		}
		function onexitcharacterreferencevalue(token) {
			const data = this.sliceSerialize(token);
			const type = getData("characterReferenceType");
			let value;
			if (type) {
				value = decodeNumericCharacterReference(data, type === "characterReferenceMarkerNumeric" ? 10 : 16);
				setData("characterReferenceType");
			} else value = decodeNamedCharacterReference(data);
			const tail = this.stack.pop();
			tail.value += value;
			tail.position.end = point(token.end);
		}
		function onexitautolinkprotocol(token) {
			onexitdata.call(this, token);
			const node = this.stack[this.stack.length - 1];
			node.url = this.sliceSerialize(token);
		}
		function onexitautolinkemail(token) {
			onexitdata.call(this, token);
			const node = this.stack[this.stack.length - 1];
			node.url = "mailto:" + this.sliceSerialize(token);
		}
		function blockQuote() {
			return {
				type: "blockquote",
				children: []
			};
		}
		function codeFlow() {
			return {
				type: "code",
				lang: null,
				meta: null,
				value: ""
			};
		}
		function codeText() {
			return {
				type: "inlineCode",
				value: ""
			};
		}
		function definition() {
			return {
				type: "definition",
				identifier: "",
				label: null,
				title: null,
				url: ""
			};
		}
		function emphasis() {
			return {
				type: "emphasis",
				children: []
			};
		}
		function heading() {
			return {
				type: "heading",
				depth: void 0,
				children: []
			};
		}
		function hardBreak() {
			return { type: "break" };
		}
		function html() {
			return {
				type: "html",
				value: ""
			};
		}
		function image() {
			return {
				type: "image",
				title: null,
				url: "",
				alt: null
			};
		}
		function link() {
			return {
				type: "link",
				title: null,
				url: "",
				children: []
			};
		}
		function list(token) {
			return {
				type: "list",
				ordered: token.type === "listOrdered",
				start: null,
				spread: token._spread,
				children: []
			};
		}
		function listItem(token) {
			return {
				type: "listItem",
				spread: token._spread,
				checked: null,
				children: []
			};
		}
		function paragraph() {
			return {
				type: "paragraph",
				children: []
			};
		}
		function strong() {
			return {
				type: "strong",
				children: []
			};
		}
		function text() {
			return {
				type: "text",
				value: ""
			};
		}
		function thematicBreak() {
			return { type: "thematicBreak" };
		}
	}
	function point(d) {
		return {
			line: d.line,
			column: d.column,
			offset: d.offset
		};
	}
	function configure$1(combined, extensions) {
		let index = -1;
		while (++index < extensions.length) {
			const value = extensions[index];
			if (Array.isArray(value)) configure$1(combined, value);
			else extension(combined, value);
		}
	}
	function extension(combined, extension) {
		let key;
		for (key in extension) if (own$3.call(extension, key)) {
			if (key === "canContainEols") {
				const right = extension[key];
				if (right) combined[key].push(...right);
			} else if (key === "transforms") {
				const right = extension[key];
				if (right) combined[key].push(...right);
			} else if (key === "enter" || key === "exit") {
				const right = extension[key];
				if (right) Object.assign(combined[key], right);
			}
		}
	}
	function defaultOnError(left, right) {
		if (left) throw new Error("Cannot close `" + left.type + "` (" + stringifyPosition({
			start: left.start,
			end: left.end
		}) + "): a different token (`" + right.type + "`, " + stringifyPosition({
			start: right.start,
			end: right.end
		}) + ") is open");
		else throw new Error("Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
			start: right.start,
			end: right.end
		}) + ") is still open");
	}
	function ccount(value, character) {
		const source = String(value);
		if (typeof character !== "string") throw new TypeError("Expected character");
		let count = 0;
		let index = source.indexOf(character);
		while (index !== -1) {
			count++;
			index = source.indexOf(character, index + character.length);
		}
		return count;
	}
	function escapeStringRegexp(string) {
		if (typeof string !== "string") throw new TypeError("Expected a string");
		return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
	}
	var convert = (function(test) {
		if (test === void 0 || test === null) return ok;
		if (typeof test === "string") return typeFactory(test);
		if (typeof test === "object") return Array.isArray(test) ? anyFactory(test) : propsFactory(test);
		if (typeof test === "function") return castFactory(test);
		throw new Error("Expected function, string, or object as test");
	});
	function anyFactory(tests) {
		const checks = [];
		let index = -1;
		while (++index < tests.length) checks[index] = convert(tests[index]);
		return castFactory(any);
		function any(...parameters) {
			let index = -1;
			while (++index < checks.length) if (checks[index].call(this, ...parameters)) return true;
			return false;
		}
	}
	function propsFactory(check) {
		return castFactory(all);
		function all(node) {
			let key;
			for (key in check) if (node[key] !== check[key]) return false;
			return true;
		}
	}
	function typeFactory(check) {
		return castFactory(type);
		function type(node) {
			return node && node.type === check;
		}
	}
	function castFactory(check) {
		return assertion;
		function assertion(node, ...parameters) {
			return Boolean(node && typeof node === "object" && "type" in node && Boolean(check.call(this, node, ...parameters)));
		}
	}
	function ok() {
		return true;
	}
	function color(d) {
		return d;
	}
	var visitParents = (function(tree, test, visitor, reverse) {
		if (typeof test === "function" && typeof visitor !== "function") {
			reverse = visitor;
			visitor = test;
			test = null;
		}
		const is = convert(test);
		const step = reverse ? -1 : 1;
		factory(tree, void 0, [])();
		function factory(node, index, parents) {
			const value = node && typeof node === "object" ? node : {};
			if (typeof value.type === "string") {
				const name = typeof value.tagName === "string" ? value.tagName : typeof value.name === "string" ? value.name : void 0;
				Object.defineProperty(visit, "name", { value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")" });
			}
			return visit;
			function visit() {
				let result = [];
				let subresult;
				let offset;
				let grandparents;
				if (!test || is(node, index, parents[parents.length - 1] || null)) {
					result = toResult(visitor(node, parents));
					if (result[0] === false) return result;
				}
				if (node.children && result[0] !== "skip") {
					offset = (reverse ? node.children.length : -1) + step;
					grandparents = parents.concat(node);
					while (offset > -1 && offset < node.children.length) {
						subresult = factory(node.children[offset], offset, grandparents)();
						if (subresult[0] === false) return subresult;
						offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
					}
				}
				return result;
			}
		}
	});
	function toResult(value) {
		if (Array.isArray(value)) return value;
		if (typeof value === "number") return [true, value];
		return [value];
	}
	var own$2 = {}.hasOwnProperty;
	var findAndReplace = (function(tree, find, replace, options) {
		let settings;
		let schema;
		if (typeof find === "string" || find instanceof RegExp) {
			schema = [[find, replace]];
			settings = options;
		} else {
			schema = find;
			settings = replace;
		}
		if (!settings) settings = {};
		const ignored = convert(settings.ignore || []);
		const pairs = toPairs(schema);
		let pairIndex = -1;
		while (++pairIndex < pairs.length) visitParents(tree, "text", visitor);
		return tree;
		function visitor(node, parents) {
			let index = -1;
			let grandparent;
			while (++index < parents.length) {
				const parent = parents[index];
				if (ignored(parent, grandparent ? grandparent.children.indexOf(parent) : void 0, grandparent)) return;
				grandparent = parent;
			}
			if (grandparent) return handler(node, parents);
		}
		function handler(node, parents) {
			const parent = parents[parents.length - 1];
			const find = pairs[pairIndex][0];
			const replace = pairs[pairIndex][1];
			let start = 0;
			const index = parent.children.indexOf(node);
			let change = false;
			let nodes = [];
			find.lastIndex = 0;
			let match = find.exec(node.value);
			while (match) {
				const position = match.index;
				const matchObject = {
					index: match.index,
					input: match.input,
					stack: [...parents, node]
				};
				let value = replace(...match, matchObject);
				if (typeof value === "string") value = value.length > 0 ? {
					type: "text",
					value
				} : void 0;
				if (value !== false) {
					if (start !== position) nodes.push({
						type: "text",
						value: node.value.slice(start, position)
					});
					if (Array.isArray(value)) nodes.push(...value);
					else if (value) nodes.push(value);
					start = position + match[0].length;
					change = true;
				}
				if (!find.global) break;
				match = find.exec(node.value);
			}
			if (change) {
				if (start < node.value.length) nodes.push({
					type: "text",
					value: node.value.slice(start)
				});
				parent.children.splice(index, 1, ...nodes);
			} else nodes = [node];
			return index + nodes.length;
		}
	});
	function toPairs(schema) {
		const result = [];
		if (typeof schema !== "object") throw new TypeError("Expected array or object as schema");
		if (Array.isArray(schema)) {
			let index = -1;
			while (++index < schema.length) result.push([toExpression(schema[index][0]), toFunction(schema[index][1])]);
		} else {
			let key;
			for (key in schema) if (own$2.call(schema, key)) result.push([toExpression(key), toFunction(schema[key])]);
		}
		return result;
	}
	function toExpression(find) {
		return typeof find === "string" ? new RegExp(escapeStringRegexp(find), "g") : find;
	}
	function toFunction(replace) {
		return typeof replace === "function" ? replace : () => replace;
	}
	var inConstruct = "phrasing";
	var notInConstruct = [
		"autolink",
		"link",
		"image",
		"label"
	];
	var gfmAutolinkLiteralFromMarkdown = {
		transforms: [transformGfmAutolinkLiterals],
		enter: {
			literalAutolink: enterLiteralAutolink,
			literalAutolinkEmail: enterLiteralAutolinkValue,
			literalAutolinkHttp: enterLiteralAutolinkValue,
			literalAutolinkWww: enterLiteralAutolinkValue
		},
		exit: {
			literalAutolink: exitLiteralAutolink,
			literalAutolinkEmail: exitLiteralAutolinkEmail,
			literalAutolinkHttp: exitLiteralAutolinkHttp,
			literalAutolinkWww: exitLiteralAutolinkWww
		}
	};
	var gfmAutolinkLiteralToMarkdown = { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct,
			notInConstruct
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct,
			notInConstruct
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct,
			notInConstruct
		}
	] };
	function enterLiteralAutolink(token) {
		this.enter({
			type: "link",
			title: null,
			url: "",
			children: []
		}, token);
	}
	function enterLiteralAutolinkValue(token) {
		this.config.enter.autolinkProtocol.call(this, token);
	}
	function exitLiteralAutolinkHttp(token) {
		this.config.exit.autolinkProtocol.call(this, token);
	}
	function exitLiteralAutolinkWww(token) {
		this.config.exit.data.call(this, token);
		const node = this.stack[this.stack.length - 1];
		node.url = "http://" + this.sliceSerialize(token);
	}
	function exitLiteralAutolinkEmail(token) {
		this.config.exit.autolinkEmail.call(this, token);
	}
	function exitLiteralAutolink(token) {
		this.exit(token);
	}
	function transformGfmAutolinkLiterals(tree) {
		findAndReplace(tree, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, findUrl], [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g, findEmail]], { ignore: ["link", "linkReference"] });
	}
	function findUrl(_, protocol, domain, path, match) {
		let prefix = "";
		if (!previous(match)) return false;
		if (/^w/i.test(protocol)) {
			domain = protocol + domain;
			protocol = "";
			prefix = "http://";
		}
		if (!isCorrectDomain(domain)) return false;
		const parts = splitUrl(domain + path);
		if (!parts[0]) return false;
		const result = {
			type: "link",
			title: null,
			url: prefix + protocol + parts[0],
			children: [{
				type: "text",
				value: protocol + parts[0]
			}]
		};
		if (parts[1]) return [result, {
			type: "text",
			value: parts[1]
		}];
		return result;
	}
	function findEmail(_, atext, label, match) {
		if (!previous(match, true) || /[-\d_]$/.test(label)) return false;
		return {
			type: "link",
			title: null,
			url: "mailto:" + atext + "@" + label,
			children: [{
				type: "text",
				value: atext + "@" + label
			}]
		};
	}
	function isCorrectDomain(domain) {
		const parts = domain.split(".");
		if (parts.length < 2 || parts[parts.length - 1] && (/_/.test(parts[parts.length - 1]) || !/[a-zA-Z\d]/.test(parts[parts.length - 1])) || parts[parts.length - 2] && (/_/.test(parts[parts.length - 2]) || !/[a-zA-Z\d]/.test(parts[parts.length - 2]))) return false;
		return true;
	}
	function splitUrl(url) {
		const trailExec = /[!"&'),.:;<>?\]}]+$/.exec(url);
		if (!trailExec) return [url, void 0];
		url = url.slice(0, trailExec.index);
		let trail = trailExec[0];
		let closingParenIndex = trail.indexOf(")");
		const openingParens = ccount(url, "(");
		let closingParens = ccount(url, ")");
		while (closingParenIndex !== -1 && openingParens > closingParens) {
			url += trail.slice(0, closingParenIndex + 1);
			trail = trail.slice(closingParenIndex + 1);
			closingParenIndex = trail.indexOf(")");
			closingParens++;
		}
		return [url, trail];
	}
	function previous(match, email) {
		const code = match.input.charCodeAt(match.index - 1);
		return (match.index === 0 || unicodeWhitespace(code) || unicodePunctuation(code)) && (!email || code !== 47);
	}
	function association(node) {
		if (node.label || !node.identifier) return node.label || "";
		return decodeString(node.identifier);
	}
	function containerFlow(parent, state, info) {
		const indexStack = state.indexStack;
		const children = parent.children || [];
		const tracker = state.createTracker(info);
		const results = [];
		let index = -1;
		indexStack.push(-1);
		while (++index < children.length) {
			const child = children[index];
			indexStack[indexStack.length - 1] = index;
			results.push(tracker.move(state.handle(child, parent, state, {
				before: "\n",
				after: "\n",
				...tracker.current()
			})));
			if (child.type !== "list") state.bulletLastUsed = void 0;
			if (index < children.length - 1) results.push(tracker.move(between(child, children[index + 1], parent, state)));
		}
		indexStack.pop();
		return results.join("");
	}
	function between(left, right, parent, state) {
		let index = state.join.length;
		while (index--) {
			const result = state.join[index](left, right, parent, state);
			if (result === true || result === 1) break;
			if (typeof result === "number") return "\n".repeat(1 + result);
			if (result === false) return "\n\n<!---->\n\n";
		}
		return "\n\n";
	}
	var eol = /\r?\n|\r/g;
	function indentLines(value, map) {
		const result = [];
		let start = 0;
		let line = 0;
		let match;
		while (match = eol.exec(value)) {
			one(value.slice(start, match.index));
			result.push(match[0]);
			start = match.index + match[0].length;
			line++;
		}
		one(value.slice(start));
		return result.join("");
		function one(value) {
			result.push(map(value, line, !value));
		}
	}
	function patternCompile(pattern) {
		if (!pattern._compiled) {
			const before = (pattern.atBreak ? "[\\r\\n][\\t ]*" : "") + (pattern.before ? "(?:" + pattern.before + ")" : "");
			pattern._compiled = new RegExp((before ? "(" + before + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? "\\" : "") + pattern.character + (pattern.after ? "(?:" + pattern.after + ")" : ""), "g");
		}
		return pattern._compiled;
	}
	function patternInScope(stack, pattern) {
		return listInScope(stack, pattern.inConstruct, true) && !listInScope(stack, pattern.notInConstruct, false);
	}
	function listInScope(stack, list, none) {
		if (typeof list === "string") list = [list];
		if (!list || list.length === 0) return none;
		let index = -1;
		while (++index < list.length) if (stack.includes(list[index])) return true;
		return false;
	}
	function safe(state, input, config) {
		const value = (config.before || "") + (input || "") + (config.after || "");
		const positions = [];
		const result = [];
		const infos = {};
		let index = -1;
		while (++index < state.unsafe.length) {
			const pattern = state.unsafe[index];
			if (!patternInScope(state.stack, pattern)) continue;
			const expression = patternCompile(pattern);
			let match;
			while (match = expression.exec(value)) {
				const before = "before" in pattern || Boolean(pattern.atBreak);
				const after = "after" in pattern;
				const position = match.index + (before ? match[1].length : 0);
				if (positions.includes(position)) {
					if (infos[position].before && !before) infos[position].before = false;
					if (infos[position].after && !after) infos[position].after = false;
				} else {
					positions.push(position);
					infos[position] = {
						before,
						after
					};
				}
			}
		}
		positions.sort(numerical);
		let start = config.before ? config.before.length : 0;
		const end = value.length - (config.after ? config.after.length : 0);
		index = -1;
		while (++index < positions.length) {
			const position = positions[index];
			if (position < start || position >= end) continue;
			if (position + 1 < end && positions[index + 1] === position + 1 && infos[position].after && !infos[position + 1].before && !infos[position + 1].after || positions[index - 1] === position - 1 && infos[position].before && !infos[position - 1].before && !infos[position - 1].after) continue;
			if (start !== position) result.push(escapeBackslashes(value.slice(start, position), "\\"));
			start = position;
			if (/[!-/:-@[-`{-~]/.test(value.charAt(position)) && (!config.encode || !config.encode.includes(value.charAt(position)))) result.push("\\");
			else {
				result.push("&#x" + value.charCodeAt(position).toString(16).toUpperCase() + ";");
				start++;
			}
		}
		result.push(escapeBackslashes(value.slice(start, end), config.after));
		return result.join("");
	}
	function numerical(a, b) {
		return a - b;
	}
	function escapeBackslashes(value, after) {
		const expression = /\\(?=[!-/:-@[-`{-~])/g;
		const positions = [];
		const results = [];
		const whole = value + after;
		let index = -1;
		let start = 0;
		let match;
		while (match = expression.exec(whole)) positions.push(match.index);
		while (++index < positions.length) {
			if (start !== positions[index]) results.push(value.slice(start, positions[index]));
			results.push("\\");
			start = positions[index];
		}
		results.push(value.slice(start));
		return results.join("");
	}
	function track(config) {
		const options = config || {};
		const now = options.now || {};
		let lineShift = options.lineShift || 0;
		let line = now.line || 1;
		let column = now.column || 1;
		return {
			move,
			current,
			shift
		};
		function current() {
			return {
				now: {
					line,
					column
				},
				lineShift
			};
		}
		function shift(value) {
			lineShift += value;
		}
		function move(input) {
			const value = input || "";
			const chunks = value.split(/\r?\n|\r/g);
			const tail = chunks[chunks.length - 1];
			line += chunks.length - 1;
			column = chunks.length === 1 ? column + tail.length : 1 + tail.length + lineShift;
			return value;
		}
	}
	footnoteReference.peek = footnoteReferencePeek;
	function gfmFootnoteFromMarkdown() {
		return {
			enter: {
				gfmFootnoteDefinition: enterFootnoteDefinition,
				gfmFootnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
				gfmFootnoteCall: enterFootnoteCall,
				gfmFootnoteCallString: enterFootnoteCallString
			},
			exit: {
				gfmFootnoteDefinition: exitFootnoteDefinition,
				gfmFootnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
				gfmFootnoteCall: exitFootnoteCall,
				gfmFootnoteCallString: exitFootnoteCallString
			}
		};
	}
	function gfmFootnoteToMarkdown() {
		return {
			unsafe: [{
				character: "[",
				inConstruct: [
					"phrasing",
					"label",
					"reference"
				]
			}],
			handlers: {
				footnoteDefinition,
				footnoteReference
			}
		};
	}
	function enterFootnoteDefinition(token) {
		this.enter({
			type: "footnoteDefinition",
			identifier: "",
			label: "",
			children: []
		}, token);
	}
	function enterFootnoteDefinitionLabelString() {
		this.buffer();
	}
	function exitFootnoteDefinitionLabelString(token) {
		const label = this.resume();
		const node = this.stack[this.stack.length - 1];
		node.label = label;
		node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
	}
	function exitFootnoteDefinition(token) {
		this.exit(token);
	}
	function enterFootnoteCall(token) {
		this.enter({
			type: "footnoteReference",
			identifier: "",
			label: ""
		}, token);
	}
	function enterFootnoteCallString() {
		this.buffer();
	}
	function exitFootnoteCallString(token) {
		const label = this.resume();
		const node = this.stack[this.stack.length - 1];
		node.label = label;
		node.identifier = normalizeIdentifier(this.sliceSerialize(token)).toLowerCase();
	}
	function exitFootnoteCall(token) {
		this.exit(token);
	}
	function footnoteReference(node, _, context, safeOptions) {
		const tracker = track(safeOptions);
		let value = tracker.move("[^");
		const exit = context.enter("footnoteReference");
		const subexit = context.enter("reference");
		value += tracker.move(safe(context, association(node), {
			...tracker.current(),
			before: value,
			after: "]"
		}));
		subexit();
		exit();
		value += tracker.move("]");
		return value;
	}
	function footnoteReferencePeek() {
		return "[";
	}
	function footnoteDefinition(node, _, context, safeOptions) {
		const tracker = track(safeOptions);
		let value = tracker.move("[^");
		const exit = context.enter("footnoteDefinition");
		const subexit = context.enter("label");
		value += tracker.move(safe(context, association(node), {
			...tracker.current(),
			before: value,
			after: "]"
		}));
		subexit();
		value += tracker.move("]:" + (node.children && node.children.length > 0 ? " " : ""));
		tracker.shift(4);
		value += tracker.move(indentLines(containerFlow(node, context, tracker.current()), map$2));
		exit();
		return value;
	}
	function map$2(line, index, blank) {
		if (index === 0) return line;
		return (blank ? "" : "    ") + line;
	}
	function containerPhrasing(parent, state, info) {
		const indexStack = state.indexStack;
		const children = parent.children || [];
		const results = [];
		let index = -1;
		let before = info.before;
		indexStack.push(-1);
		let tracker = state.createTracker(info);
		while (++index < children.length) {
			const child = children[index];
			let after;
			indexStack[indexStack.length - 1] = index;
			if (index + 1 < children.length) {
				let handle = state.handle.handlers[children[index + 1].type];
				if (handle && handle.peek) handle = handle.peek;
				after = handle ? handle(children[index + 1], parent, state, {
					before: "",
					after: "",
					...tracker.current()
				}).charAt(0) : "";
			} else after = info.after;
			if (results.length > 0 && (before === "\r" || before === "\n") && child.type === "html") {
				results[results.length - 1] = results[results.length - 1].replace(/(\r?\n|\r)$/, " ");
				before = " ";
				tracker = state.createTracker(info);
				tracker.move(results.join(""));
			}
			results.push(tracker.move(state.handle(child, parent, state, {
				...tracker.current(),
				before,
				after
			})));
			before = results[results.length - 1].slice(-1);
		}
		indexStack.pop();
		return results.join("");
	}
	var constructsWithoutStrikethrough = [
		"autolink",
		"destinationLiteral",
		"destinationRaw",
		"reference",
		"titleQuote",
		"titleApostrophe"
	];
	handleDelete.peek = peekDelete;
	var gfmStrikethroughFromMarkdown = {
		canContainEols: ["delete"],
		enter: { strikethrough: enterStrikethrough },
		exit: { strikethrough: exitStrikethrough }
	};
	var gfmStrikethroughToMarkdown = {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: constructsWithoutStrikethrough
		}],
		handlers: { delete: handleDelete }
	};
	function enterStrikethrough(token) {
		this.enter({
			type: "delete",
			children: []
		}, token);
	}
	function exitStrikethrough(token) {
		this.exit(token);
	}
	function handleDelete(node, _, context, safeOptions) {
		const tracker = track(safeOptions);
		const exit = context.enter("strikethrough");
		let value = tracker.move("~~");
		value += containerPhrasing(node, context, {
			...tracker.current(),
			before: value,
			after: "~"
		});
		value += tracker.move("~~");
		exit();
		return value;
	}
	function peekDelete() {
		return "~";
	}
	inlineCode.peek = inlineCodePeek;
	function inlineCode(node, _, state) {
		let value = node.value || "";
		let sequence = "`";
		let index = -1;
		while (new RegExp("(^|[^`])" + sequence + "([^`]|$)").test(value)) sequence += "`";
		if (/[^ \r\n]/.test(value) && (/^[ \r\n]/.test(value) && /[ \r\n]$/.test(value) || /^`|`$/.test(value))) value = " " + value + " ";
		while (++index < state.unsafe.length) {
			const pattern = state.unsafe[index];
			const expression = patternCompile(pattern);
			let match;
			if (!pattern.atBreak) continue;
			while (match = expression.exec(value)) {
				let position = match.index;
				if (value.charCodeAt(position) === 10 && value.charCodeAt(position - 1) === 13) position--;
				value = value.slice(0, position) + " " + value.slice(match.index + 1);
			}
		}
		return sequence + value + sequence;
	}
	function inlineCodePeek() {
		return "`";
	}
	function markdownTable(table, options = {}) {
		const align = (options.align || []).concat();
		const stringLength = options.stringLength || defaultStringLength;
		const alignments = [];
		const cellMatrix = [];
		const sizeMatrix = [];
		const longestCellByColumn = [];
		let mostCellsPerRow = 0;
		let rowIndex = -1;
		while (++rowIndex < table.length) {
			const row = [];
			const sizes = [];
			let columnIndex = -1;
			if (table[rowIndex].length > mostCellsPerRow) mostCellsPerRow = table[rowIndex].length;
			while (++columnIndex < table[rowIndex].length) {
				const cell = serialize(table[rowIndex][columnIndex]);
				if (options.alignDelimiters !== false) {
					const size = stringLength(cell);
					sizes[columnIndex] = size;
					if (longestCellByColumn[columnIndex] === void 0 || size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
				}
				row.push(cell);
			}
			cellMatrix[rowIndex] = row;
			sizeMatrix[rowIndex] = sizes;
		}
		let columnIndex = -1;
		if (typeof align === "object" && "length" in align) while (++columnIndex < mostCellsPerRow) alignments[columnIndex] = toAlignment(align[columnIndex]);
		else {
			const code = toAlignment(align);
			while (++columnIndex < mostCellsPerRow) alignments[columnIndex] = code;
		}
		columnIndex = -1;
		const row = [];
		const sizes = [];
		while (++columnIndex < mostCellsPerRow) {
			const code = alignments[columnIndex];
			let before = "";
			let after = "";
			if (code === 99) {
				before = ":";
				after = ":";
			} else if (code === 108) before = ":";
			else if (code === 114) after = ":";
			let size = options.alignDelimiters === false ? 1 : Math.max(1, longestCellByColumn[columnIndex] - before.length - after.length);
			const cell = before + "-".repeat(size) + after;
			if (options.alignDelimiters !== false) {
				size = before.length + size + after.length;
				if (size > longestCellByColumn[columnIndex]) longestCellByColumn[columnIndex] = size;
				sizes[columnIndex] = size;
			}
			row[columnIndex] = cell;
		}
		cellMatrix.splice(1, 0, row);
		sizeMatrix.splice(1, 0, sizes);
		rowIndex = -1;
		const lines = [];
		while (++rowIndex < cellMatrix.length) {
			const row = cellMatrix[rowIndex];
			const sizes = sizeMatrix[rowIndex];
			columnIndex = -1;
			const line = [];
			while (++columnIndex < mostCellsPerRow) {
				const cell = row[columnIndex] || "";
				let before = "";
				let after = "";
				if (options.alignDelimiters !== false) {
					const size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0);
					const code = alignments[columnIndex];
					if (code === 114) before = " ".repeat(size);
					else if (code === 99) {
						if (size % 2) {
							before = " ".repeat(size / 2 + .5);
							after = " ".repeat(size / 2 - .5);
						} else {
							before = " ".repeat(size / 2);
							after = before;
						}
					} else after = " ".repeat(size);
				}
				if (options.delimiterStart !== false && !columnIndex) line.push("|");
				if (options.padding !== false && !(options.alignDelimiters === false && cell === "") && (options.delimiterStart !== false || columnIndex)) line.push(" ");
				if (options.alignDelimiters !== false) line.push(before);
				line.push(cell);
				if (options.alignDelimiters !== false) line.push(after);
				if (options.padding !== false) line.push(" ");
				if (options.delimiterEnd !== false || columnIndex !== mostCellsPerRow - 1) line.push("|");
			}
			lines.push(options.delimiterEnd === false ? line.join("").replace(/ +$/, "") : line.join(""));
		}
		return lines.join("\n");
	}
	function serialize(value) {
		return value === null || value === void 0 ? "" : String(value);
	}
	function defaultStringLength(value) {
		return value.length;
	}
	function toAlignment(value) {
		const code = typeof value === "string" ? value.codePointAt(0) : 0;
		return code === 67 || code === 99 ? 99 : code === 76 || code === 108 ? 108 : code === 82 || code === 114 ? 114 : 0;
	}
	var gfmTableFromMarkdown = {
		enter: {
			table: enterTable,
			tableData: enterCell,
			tableHeader: enterCell,
			tableRow: enterRow
		},
		exit: {
			codeText: exitCodeText,
			table: exitTable,
			tableData: exit,
			tableHeader: exit,
			tableRow: exit
		}
	};
	function enterTable(token) {
		const align = token._align;
		this.enter({
			type: "table",
			align: align.map((d) => d === "none" ? null : d),
			children: []
		}, token);
		this.setData("inTable", true);
	}
	function exitTable(token) {
		this.exit(token);
		this.setData("inTable");
	}
	function enterRow(token) {
		this.enter({
			type: "tableRow",
			children: []
		}, token);
	}
	function exit(token) {
		this.exit(token);
	}
	function enterCell(token) {
		this.enter({
			type: "tableCell",
			children: []
		}, token);
	}
	function exitCodeText(token) {
		let value = this.resume();
		if (this.getData("inTable")) value = value.replace(/\\([\\|])/g, replace$1);
		const node = this.stack[this.stack.length - 1];
		node.value = value;
		this.exit(token);
	}
	function replace$1($0, $1) {
		return $1 === "|" ? $1 : $0;
	}
	function gfmTableToMarkdown(options) {
		const settings = options || {};
		const padding = settings.tableCellPadding;
		const alignDelimiters = settings.tablePipeAlign;
		const stringLength = settings.stringLength;
		const around = padding ? " " : "|";
		return {
			unsafe: [
				{
					character: "\r",
					inConstruct: "tableCell"
				},
				{
					character: "\n",
					inConstruct: "tableCell"
				},
				{
					atBreak: true,
					character: "|",
					after: "[	 :-]"
				},
				{
					character: "|",
					inConstruct: "tableCell"
				},
				{
					atBreak: true,
					character: ":",
					after: "-"
				},
				{
					atBreak: true,
					character: "-",
					after: "[:|-]"
				}
			],
			handlers: {
				table: handleTable,
				tableRow: handleTableRow,
				tableCell: handleTableCell,
				inlineCode: inlineCodeWithTable
			}
		};
		function handleTable(node, _, context, safeOptions) {
			return serializeData(handleTableAsData(node, context, safeOptions), node.align);
		}
		function handleTableRow(node, _, context, safeOptions) {
			const value = serializeData([handleTableRowAsData(node, context, safeOptions)]);
			return value.slice(0, value.indexOf("\n"));
		}
		function handleTableCell(node, _, context, safeOptions) {
			const exit = context.enter("tableCell");
			const subexit = context.enter("phrasing");
			const value = containerPhrasing(node, context, {
				...safeOptions,
				before: around,
				after: around
			});
			subexit();
			exit();
			return value;
		}
		function serializeData(matrix, align) {
			return markdownTable(matrix, {
				align,
				alignDelimiters,
				padding,
				stringLength
			});
		}
		function handleTableAsData(node, context, safeOptions) {
			const children = node.children;
			let index = -1;
			const result = [];
			const subexit = context.enter("table");
			while (++index < children.length) result[index] = handleTableRowAsData(children[index], context, safeOptions);
			subexit();
			return result;
		}
		function handleTableRowAsData(node, context, safeOptions) {
			const children = node.children;
			let index = -1;
			const result = [];
			const subexit = context.enter("tableRow");
			while (++index < children.length) result[index] = handleTableCell(children[index], node, context, safeOptions);
			subexit();
			return result;
		}
		function inlineCodeWithTable(node, parent, context) {
			let value = inlineCode(node, parent, context);
			if (context.stack.includes("tableCell")) value = value.replace(/\|/g, "\\$&");
			return value;
		}
	}
	function checkBullet(state) {
		const marker = state.options.bullet || "*";
		if (marker !== "*" && marker !== "+" && marker !== "-") throw new Error("Cannot serialize items with `" + marker + "` for `options.bullet`, expected `*`, `+`, or `-`");
		return marker;
	}
	function checkListItemIndent(state) {
		const style = state.options.listItemIndent || "tab";
		if (style === 1 || style === "1") return "one";
		if (style !== "tab" && style !== "one" && style !== "mixed") throw new Error("Cannot serialize items with `" + style + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
		return style;
	}
	function listItem(node, parent, state, info) {
		const listItemIndent = checkListItemIndent(state);
		let bullet = state.bulletCurrent || checkBullet(state);
		if (parent && parent.type === "list" && parent.ordered) bullet = (typeof parent.start === "number" && parent.start > -1 ? parent.start : 1) + (state.options.incrementListMarker === false ? 0 : parent.children.indexOf(node)) + bullet;
		let size = bullet.length + 1;
		if (listItemIndent === "tab" || listItemIndent === "mixed" && (parent && parent.type === "list" && parent.spread || node.spread)) size = Math.ceil(size / 4) * 4;
		const tracker = state.createTracker(info);
		tracker.move(bullet + " ".repeat(size - bullet.length));
		tracker.shift(size);
		const exit = state.enter("listItem");
		const value = state.indentLines(state.containerFlow(node, tracker.current()), map);
		exit();
		return value;
		function map(line, index, blank) {
			if (index) return (blank ? "" : " ".repeat(size)) + line;
			return (blank ? bullet : bullet + " ".repeat(size - bullet.length)) + line;
		}
	}
	var gfmTaskListItemFromMarkdown = { exit: {
		taskListCheckValueChecked: exitCheck,
		taskListCheckValueUnchecked: exitCheck,
		paragraph: exitParagraphWithTaskListItem
	} };
	var gfmTaskListItemToMarkdown = {
		unsafe: [{
			atBreak: true,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: listItemWithTaskListItem }
	};
	function exitCheck(token) {
		const node = this.stack[this.stack.length - 2];
		node.checked = token.type === "taskListCheckValueChecked";
	}
	function exitParagraphWithTaskListItem(token) {
		const parent = this.stack[this.stack.length - 2];
		if (parent && parent.type === "listItem" && typeof parent.checked === "boolean") {
			const node = this.stack[this.stack.length - 1];
			const head = node.children[0];
			if (head && head.type === "text") {
				const siblings = parent.children;
				let index = -1;
				let firstParaghraph;
				while (++index < siblings.length) {
					const sibling = siblings[index];
					if (sibling.type === "paragraph") {
						firstParaghraph = sibling;
						break;
					}
				}
				if (firstParaghraph === node) {
					head.value = head.value.slice(1);
					if (head.value.length === 0) node.children.shift();
					else if (node.position && head.position && typeof head.position.start.offset === "number") {
						head.position.start.column++;
						head.position.start.offset++;
						node.position.start = Object.assign({}, head.position.start);
					}
				}
			}
		}
		this.exit(token);
	}
	function listItemWithTaskListItem(node, parent, context, safeOptions) {
		const head = node.children[0];
		const checkable = typeof node.checked === "boolean" && head && head.type === "paragraph";
		const checkbox = "[" + (node.checked ? "x" : " ") + "] ";
		const tracker = track(safeOptions);
		if (checkable) tracker.move(checkbox);
		let value = listItem(node, parent, context, {
			...safeOptions,
			...tracker.current()
		});
		if (checkable) value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check);
		return value;
		function check($0) {
			return $0 + checkbox;
		}
	}
	function gfmFromMarkdown() {
		return [
			gfmAutolinkLiteralFromMarkdown,
			gfmFootnoteFromMarkdown(),
			gfmStrikethroughFromMarkdown,
			gfmTableFromMarkdown,
			gfmTaskListItemFromMarkdown
		];
	}
	function gfmToMarkdown(options) {
		return { extensions: [
			gfmAutolinkLiteralToMarkdown,
			gfmFootnoteToMarkdown(),
			gfmStrikethroughToMarkdown,
			gfmTableToMarkdown(options),
			gfmTaskListItemToMarkdown
		] };
	}
	var own$1 = {}.hasOwnProperty;
	function zwitch(key, options) {
		const settings = options || {};
		function one(value, ...parameters) {
			let fn = one.invalid;
			const handlers = one.handlers;
			if (value && own$1.call(value, key)) {
				const id = String(value[key]);
				fn = own$1.call(handlers, id) ? handlers[id] : one.unknown;
			}
			if (fn) return fn.call(this, value, ...parameters);
		}
		one.handlers = settings.handlers || {};
		one.invalid = settings.invalid;
		one.unknown = settings.unknown;
		return one;
	}
	function configure(base, extension) {
		let index = -1;
		let key;
		if (extension.extensions) while (++index < extension.extensions.length) configure(base, extension.extensions[index]);
		for (key in extension) if (key === "extensions") {} else if (key === "unsafe" || key === "join") base[key] = [...base[key] || [], ...extension[key] || []];
		else if (key === "handlers") base[key] = Object.assign(base[key], extension[key] || {});
		else base.options[key] = extension[key];
		return base;
	}
	function blockquote(node, _, state, info) {
		const exit = state.enter("blockquote");
		const tracker = state.createTracker(info);
		tracker.move("> ");
		tracker.shift(2);
		const value = state.indentLines(state.containerFlow(node, tracker.current()), map$1);
		exit();
		return value;
	}
	function map$1(line, _, blank) {
		return ">" + (blank ? "" : " ") + line;
	}
	function hardBreak(_, _1, state, info) {
		let index = -1;
		while (++index < state.unsafe.length) if (state.unsafe[index].character === "\n" && patternInScope(state.stack, state.unsafe[index])) return /[ \t]/.test(info.before) ? "" : " ";
		return "\\\n";
	}
	function longestStreak(value, substring) {
		const source = String(value);
		let index = source.indexOf(substring);
		let expected = index;
		let count = 0;
		let max = 0;
		if (typeof substring !== "string") throw new TypeError("Expected substring");
		while (index !== -1) {
			if (index === expected) {
				if (++count > max) max = count;
			} else count = 1;
			expected = index + substring.length;
			index = source.indexOf(substring, expected);
		}
		return max;
	}
	function formatCodeAsIndented(node, state) {
		return Boolean(!state.options.fences && node.value && !node.lang && /[^ \r\n]/.test(node.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(node.value));
	}
	function checkFence(state) {
		const marker = state.options.fence || "`";
		if (marker !== "`" && marker !== "~") throw new Error("Cannot serialize code with `" + marker + "` for `options.fence`, expected `` ` `` or `~`");
		return marker;
	}
	function code$1(node, _, state, info) {
		const marker = checkFence(state);
		const raw = node.value || "";
		const suffix = marker === "`" ? "GraveAccent" : "Tilde";
		if (formatCodeAsIndented(node, state)) {
			const exit = state.enter("codeIndented");
			const value = state.indentLines(raw, map);
			exit();
			return value;
		}
		const tracker = state.createTracker(info);
		const sequence = marker.repeat(Math.max(longestStreak(raw, marker) + 1, 3));
		const exit = state.enter("codeFenced");
		let value = tracker.move(sequence);
		if (node.lang) {
			const subexit = state.enter(`codeFencedLang${suffix}`);
			value += tracker.move(state.safe(node.lang, {
				before: value,
				after: " ",
				encode: ["`"],
				...tracker.current()
			}));
			subexit();
		}
		if (node.lang && node.meta) {
			const subexit = state.enter(`codeFencedMeta${suffix}`);
			value += tracker.move(" ");
			value += tracker.move(state.safe(node.meta, {
				before: value,
				after: "\n",
				encode: ["`"],
				...tracker.current()
			}));
			subexit();
		}
		value += tracker.move("\n");
		if (raw) value += tracker.move(raw + "\n");
		value += tracker.move(sequence);
		exit();
		return value;
	}
	function map(line, _, blank) {
		return (blank ? "" : "    ") + line;
	}
	function checkQuote(state) {
		const marker = state.options.quote || "\"";
		if (marker !== "\"" && marker !== "'") throw new Error("Cannot serialize title with `" + marker + "` for `options.quote`, expected `\"`, or `'`");
		return marker;
	}
	function definition(node, _, state, info) {
		const quote = checkQuote(state);
		const suffix = quote === "\"" ? "Quote" : "Apostrophe";
		const exit = state.enter("definition");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("[");
		value += tracker.move(state.safe(state.associationId(node), {
			before: value,
			after: "]",
			...tracker.current()
		}));
		value += tracker.move("]: ");
		subexit();
		if (!node.url || /[\0- \u007F]/.test(node.url)) {
			subexit = state.enter("destinationLiteral");
			value += tracker.move("<");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
		} else {
			subexit = state.enter("destinationRaw");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: node.title ? " " : "\n",
				...tracker.current()
			}));
		}
		subexit();
		if (node.title) {
			subexit = state.enter(`title${suffix}`);
			value += tracker.move(" " + quote);
			value += tracker.move(state.safe(node.title, {
				before: value,
				after: quote,
				...tracker.current()
			}));
			value += tracker.move(quote);
			subexit();
		}
		exit();
		return value;
	}
	function checkEmphasis(state) {
		const marker = state.options.emphasis || "*";
		if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize emphasis with `" + marker + "` for `options.emphasis`, expected `*`, or `_`");
		return marker;
	}
	emphasis.peek = emphasisPeek;
	function emphasis(node, _, state, info) {
		const marker = checkEmphasis(state);
		const exit = state.enter("emphasis");
		const tracker = state.createTracker(info);
		let value = tracker.move(marker);
		value += tracker.move(state.containerPhrasing(node, {
			before: value,
			after: marker,
			...tracker.current()
		}));
		value += tracker.move(marker);
		exit();
		return value;
	}
	function emphasisPeek(_, _1, state) {
		return state.options.emphasis || "*";
	}
	var visit = (function(tree, test, visitor, reverse) {
		if (typeof test === "function" && typeof visitor !== "function") {
			reverse = visitor;
			visitor = test;
			test = null;
		}
		visitParents(tree, test, overload, reverse);
		function overload(node, parents) {
			const parent = parents[parents.length - 1];
			return visitor(node, parent ? parent.children.indexOf(node) : null, parent);
		}
	});
	function formatHeadingAsSetext(node, state) {
		let literalWithBreak = false;
		visit(node, (node) => {
			if ("value" in node && /\r?\n|\r/.test(node.value) || node.type === "break") {
				literalWithBreak = true;
				return false;
			}
		});
		return Boolean((!node.depth || node.depth < 3) && toString(node) && (state.options.setext || literalWithBreak));
	}
	function heading(node, _, state, info) {
		const rank = Math.max(Math.min(6, node.depth || 1), 1);
		const tracker = state.createTracker(info);
		if (formatHeadingAsSetext(node, state)) {
			const exit = state.enter("headingSetext");
			const subexit = state.enter("phrasing");
			const value = state.containerPhrasing(node, {
				...tracker.current(),
				before: "\n",
				after: "\n"
			});
			subexit();
			exit();
			return value + "\n" + (rank === 1 ? "=" : "-").repeat(value.length - (Math.max(value.lastIndexOf("\r"), value.lastIndexOf("\n")) + 1));
		}
		const sequence = "#".repeat(rank);
		const exit = state.enter("headingAtx");
		const subexit = state.enter("phrasing");
		tracker.move(sequence + " ");
		let value = state.containerPhrasing(node, {
			before: "# ",
			after: "\n",
			...tracker.current()
		});
		if (/^[\t ]/.test(value)) value = "&#x" + value.charCodeAt(0).toString(16).toUpperCase() + ";" + value.slice(1);
		value = value ? sequence + " " + value : sequence;
		if (state.options.closeAtx) value += " " + sequence;
		subexit();
		exit();
		return value;
	}
	html.peek = htmlPeek;
	function html(node) {
		return node.value || "";
	}
	function htmlPeek() {
		return "<";
	}
	image.peek = imagePeek;
	function image(node, _, state, info) {
		const quote = checkQuote(state);
		const suffix = quote === "\"" ? "Quote" : "Apostrophe";
		const exit = state.enter("image");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("![");
		value += tracker.move(state.safe(node.alt, {
			before: value,
			after: "]",
			...tracker.current()
		}));
		value += tracker.move("](");
		subexit();
		if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
			subexit = state.enter("destinationLiteral");
			value += tracker.move("<");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
		} else {
			subexit = state.enter("destinationRaw");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: node.title ? " " : ")",
				...tracker.current()
			}));
		}
		subexit();
		if (node.title) {
			subexit = state.enter(`title${suffix}`);
			value += tracker.move(" " + quote);
			value += tracker.move(state.safe(node.title, {
				before: value,
				after: quote,
				...tracker.current()
			}));
			value += tracker.move(quote);
			subexit();
		}
		value += tracker.move(")");
		exit();
		return value;
	}
	function imagePeek() {
		return "!";
	}
	imageReference.peek = imageReferencePeek;
	function imageReference(node, _, state, info) {
		const type = node.referenceType;
		const exit = state.enter("imageReference");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("![");
		const alt = state.safe(node.alt, {
			before: value,
			after: "]",
			...tracker.current()
		});
		value += tracker.move(alt + "][");
		subexit();
		const stack = state.stack;
		state.stack = [];
		subexit = state.enter("reference");
		const reference = state.safe(state.associationId(node), {
			before: value,
			after: "]",
			...tracker.current()
		});
		subexit();
		state.stack = stack;
		exit();
		if (type === "full" || !alt || alt !== reference) value += tracker.move(reference + "]");
		else if (type === "shortcut") value = value.slice(0, -1);
		else value += tracker.move("]");
		return value;
	}
	function imageReferencePeek() {
		return "!";
	}
	function formatLinkAsAutolink(node, state) {
		const raw = toString(node);
		return Boolean(!state.options.resourceLink && node.url && !node.title && node.children && node.children.length === 1 && node.children[0].type === "text" && (raw === node.url || "mailto:" + raw === node.url) && /^[a-z][a-z+.-]+:/i.test(node.url) && !/[\0- <>\u007F]/.test(node.url));
	}
	link.peek = linkPeek;
	function link(node, _, state, info) {
		const quote = checkQuote(state);
		const suffix = quote === "\"" ? "Quote" : "Apostrophe";
		const tracker = state.createTracker(info);
		let exit;
		let subexit;
		if (formatLinkAsAutolink(node, state)) {
			const stack = state.stack;
			state.stack = [];
			exit = state.enter("autolink");
			let value = tracker.move("<");
			value += tracker.move(state.containerPhrasing(node, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
			exit();
			state.stack = stack;
			return value;
		}
		exit = state.enter("link");
		subexit = state.enter("label");
		let value = tracker.move("[");
		value += tracker.move(state.containerPhrasing(node, {
			before: value,
			after: "](",
			...tracker.current()
		}));
		value += tracker.move("](");
		subexit();
		if (!node.url && node.title || /[\0- \u007F]/.test(node.url)) {
			subexit = state.enter("destinationLiteral");
			value += tracker.move("<");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: ">",
				...tracker.current()
			}));
			value += tracker.move(">");
		} else {
			subexit = state.enter("destinationRaw");
			value += tracker.move(state.safe(node.url, {
				before: value,
				after: node.title ? " " : ")",
				...tracker.current()
			}));
		}
		subexit();
		if (node.title) {
			subexit = state.enter(`title${suffix}`);
			value += tracker.move(" " + quote);
			value += tracker.move(state.safe(node.title, {
				before: value,
				after: quote,
				...tracker.current()
			}));
			value += tracker.move(quote);
			subexit();
		}
		value += tracker.move(")");
		exit();
		return value;
	}
	function linkPeek(node, _, state) {
		return formatLinkAsAutolink(node, state) ? "<" : "[";
	}
	linkReference.peek = linkReferencePeek;
	function linkReference(node, _, state, info) {
		const type = node.referenceType;
		const exit = state.enter("linkReference");
		let subexit = state.enter("label");
		const tracker = state.createTracker(info);
		let value = tracker.move("[");
		const text = state.containerPhrasing(node, {
			before: value,
			after: "]",
			...tracker.current()
		});
		value += tracker.move(text + "][");
		subexit();
		const stack = state.stack;
		state.stack = [];
		subexit = state.enter("reference");
		const reference = state.safe(state.associationId(node), {
			before: value,
			after: "]",
			...tracker.current()
		});
		subexit();
		state.stack = stack;
		exit();
		if (type === "full" || !text || text !== reference) value += tracker.move(reference + "]");
		else if (type === "shortcut") value = value.slice(0, -1);
		else value += tracker.move("]");
		return value;
	}
	function linkReferencePeek() {
		return "[";
	}
	function checkBulletOther(state) {
		const bullet = checkBullet(state);
		const bulletOther = state.options.bulletOther;
		if (!bulletOther) return bullet === "*" ? "-" : "*";
		if (bulletOther !== "*" && bulletOther !== "+" && bulletOther !== "-") throw new Error("Cannot serialize items with `" + bulletOther + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
		if (bulletOther === bullet) throw new Error("Expected `bullet` (`" + bullet + "`) and `bulletOther` (`" + bulletOther + "`) to be different");
		return bulletOther;
	}
	function checkBulletOrdered(state) {
		const marker = state.options.bulletOrdered || ".";
		if (marker !== "." && marker !== ")") throw new Error("Cannot serialize items with `" + marker + "` for `options.bulletOrdered`, expected `.` or `)`");
		return marker;
	}
	function checkBulletOrderedOther(state) {
		const bulletOrdered = checkBulletOrdered(state);
		const bulletOrderedOther = state.options.bulletOrderedOther;
		if (!bulletOrderedOther) return bulletOrdered === "." ? ")" : ".";
		if (bulletOrderedOther !== "." && bulletOrderedOther !== ")") throw new Error("Cannot serialize items with `" + bulletOrderedOther + "` for `options.bulletOrderedOther`, expected `*`, `+`, or `-`");
		if (bulletOrderedOther === bulletOrdered) throw new Error("Expected `bulletOrdered` (`" + bulletOrdered + "`) and `bulletOrderedOther` (`" + bulletOrderedOther + "`) to be different");
		return bulletOrderedOther;
	}
	function checkRule(state) {
		const marker = state.options.rule || "*";
		if (marker !== "*" && marker !== "-" && marker !== "_") throw new Error("Cannot serialize rules with `" + marker + "` for `options.rule`, expected `*`, `-`, or `_`");
		return marker;
	}
	function list(node, parent, state, info) {
		const exit = state.enter("list");
		const bulletCurrent = state.bulletCurrent;
		let bullet = node.ordered ? checkBulletOrdered(state) : checkBullet(state);
		const bulletOther = node.ordered ? checkBulletOrderedOther(state) : checkBulletOther(state);
		const bulletLastUsed = state.bulletLastUsed;
		let useDifferentMarker = false;
		if (parent && (node.ordered ? state.options.bulletOrderedOther : state.options.bulletOther) && bulletLastUsed && bullet === bulletLastUsed) useDifferentMarker = true;
		if (!node.ordered) {
			const firstListItem = node.children ? node.children[0] : void 0;
			if ((bullet === "*" || bullet === "-") && firstListItem && (!firstListItem.children || !firstListItem.children[0]) && state.stack[state.stack.length - 1] === "list" && state.stack[state.stack.length - 2] === "listItem" && state.stack[state.stack.length - 3] === "list" && state.stack[state.stack.length - 4] === "listItem" && state.indexStack[state.indexStack.length - 1] === 0 && state.indexStack[state.indexStack.length - 2] === 0 && state.indexStack[state.indexStack.length - 3] === 0) useDifferentMarker = true;
			if (checkRule(state) === bullet && firstListItem) {
				let index = -1;
				while (++index < node.children.length) {
					const item = node.children[index];
					if (item && item.type === "listItem" && item.children && item.children[0] && item.children[0].type === "thematicBreak") {
						useDifferentMarker = true;
						break;
					}
				}
			}
		}
		if (useDifferentMarker) bullet = bulletOther;
		state.bulletCurrent = bullet;
		const value = state.containerFlow(node, info);
		state.bulletLastUsed = bullet;
		state.bulletCurrent = bulletCurrent;
		exit();
		return value;
	}
	function paragraph(node, _, state, info) {
		const exit = state.enter("paragraph");
		const subexit = state.enter("phrasing");
		const value = state.containerPhrasing(node, info);
		subexit();
		exit();
		return value;
	}
	var phrasing = convert([
		"break",
		"delete",
		"emphasis",
		"footnote",
		"footnoteReference",
		"image",
		"imageReference",
		"inlineCode",
		"link",
		"linkReference",
		"strong",
		"text"
	]);
	function root(node, _, state, info) {
		return (node.children.some((d) => phrasing(d)) ? state.containerPhrasing : state.containerFlow).call(state, node, info);
	}
	function checkStrong(state) {
		const marker = state.options.strong || "*";
		if (marker !== "*" && marker !== "_") throw new Error("Cannot serialize strong with `" + marker + "` for `options.strong`, expected `*`, or `_`");
		return marker;
	}
	strong.peek = strongPeek;
	function strong(node, _, state, info) {
		const marker = checkStrong(state);
		const exit = state.enter("strong");
		const tracker = state.createTracker(info);
		let value = tracker.move(marker + marker);
		value += tracker.move(state.containerPhrasing(node, {
			before: value,
			after: marker,
			...tracker.current()
		}));
		value += tracker.move(marker + marker);
		exit();
		return value;
	}
	function strongPeek(_, _1, state) {
		return state.options.strong || "*";
	}
	function text$1(node, _, state, info) {
		return state.safe(node.value, info);
	}
	function checkRuleRepetition(state) {
		const repetition = state.options.ruleRepetition || 3;
		if (repetition < 3) throw new Error("Cannot serialize rules with repetition `" + repetition + "` for `options.ruleRepetition`, expected `3` or more");
		return repetition;
	}
	function thematicBreak(_, _1, state) {
		const value = (checkRule(state) + (state.options.ruleSpaces ? " " : "")).repeat(checkRuleRepetition(state));
		return state.options.ruleSpaces ? value.slice(0, -1) : value;
	}
	var handle = {
		blockquote,
		break: hardBreak,
		code: code$1,
		definition,
		emphasis,
		hardBreak,
		heading,
		html,
		image,
		imageReference,
		inlineCode,
		link,
		linkReference,
		list,
		listItem,
		paragraph,
		root,
		strong,
		text: text$1,
		thematicBreak
	};
	var join = [joinDefaults];
	function joinDefaults(left, right, parent, state) {
		if (right.type === "code" && formatCodeAsIndented(right, state) && (left.type === "list" || left.type === right.type && formatCodeAsIndented(left, state))) return false;
		if (left.type === "list" && left.type === right.type && Boolean(left.ordered) === Boolean(right.ordered) && !(left.ordered ? state.options.bulletOrderedOther : state.options.bulletOther)) return false;
		if ("spread" in parent && typeof parent.spread === "boolean") {
			if (left.type === "paragraph" && (left.type === right.type || right.type === "definition" || right.type === "heading" && formatHeadingAsSetext(right, state))) return;
			return parent.spread ? 1 : 0;
		}
	}
	var fullPhrasingSpans = [
		"autolink",
		"destinationLiteral",
		"destinationRaw",
		"reference",
		"titleQuote",
		"titleApostrophe"
	];
	var unsafe = [
		{
			character: "	",
			after: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: "	",
			before: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: "	",
			inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
		},
		{
			character: "\r",
			inConstruct: [
				"codeFencedLangGraveAccent",
				"codeFencedLangTilde",
				"codeFencedMetaGraveAccent",
				"codeFencedMetaTilde",
				"destinationLiteral",
				"headingAtx"
			]
		},
		{
			character: "\n",
			inConstruct: [
				"codeFencedLangGraveAccent",
				"codeFencedLangTilde",
				"codeFencedMetaGraveAccent",
				"codeFencedMetaTilde",
				"destinationLiteral",
				"headingAtx"
			]
		},
		{
			character: " ",
			after: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: " ",
			before: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: " ",
			inConstruct: ["codeFencedLangGraveAccent", "codeFencedLangTilde"]
		},
		{
			character: "!",
			after: "\\[",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			character: "\"",
			inConstruct: "titleQuote"
		},
		{
			atBreak: true,
			character: "#"
		},
		{
			character: "#",
			inConstruct: "headingAtx",
			after: "(?:[\r\n]|$)"
		},
		{
			character: "&",
			after: "[#A-Za-z]",
			inConstruct: "phrasing"
		},
		{
			character: "'",
			inConstruct: "titleApostrophe"
		},
		{
			character: "(",
			inConstruct: "destinationRaw"
		},
		{
			before: "\\]",
			character: "(",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			before: "\\d+",
			character: ")"
		},
		{
			character: ")",
			inConstruct: "destinationRaw"
		},
		{
			atBreak: true,
			character: "*",
			after: "(?:[ 	\r\n*])"
		},
		{
			character: "*",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			character: "+",
			after: "(?:[ 	\r\n])"
		},
		{
			atBreak: true,
			character: "-",
			after: "(?:[ 	\r\n-])"
		},
		{
			atBreak: true,
			before: "\\d+",
			character: ".",
			after: "(?:[ 	\r\n]|$)"
		},
		{
			atBreak: true,
			character: "<",
			after: "[!/?A-Za-z]"
		},
		{
			character: "<",
			after: "[!/?A-Za-z]",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			character: "<",
			inConstruct: "destinationLiteral"
		},
		{
			atBreak: true,
			character: "="
		},
		{
			atBreak: true,
			character: ">"
		},
		{
			character: ">",
			inConstruct: "destinationLiteral"
		},
		{
			atBreak: true,
			character: "["
		},
		{
			character: "[",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			character: "[",
			inConstruct: ["label", "reference"]
		},
		{
			character: "\\",
			after: "[\\r\\n]",
			inConstruct: "phrasing"
		},
		{
			character: "]",
			inConstruct: ["label", "reference"]
		},
		{
			atBreak: true,
			character: "_"
		},
		{
			character: "_",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			character: "`"
		},
		{
			character: "`",
			inConstruct: ["codeFencedLangGraveAccent", "codeFencedMetaGraveAccent"]
		},
		{
			character: "`",
			inConstruct: "phrasing",
			notInConstruct: fullPhrasingSpans
		},
		{
			atBreak: true,
			character: "~"
		}
	];
	function toMarkdown$1(tree, options = {}) {
		const state = {
			enter,
			indentLines,
			associationId: association,
			containerPhrasing: containerPhrasingBound,
			containerFlow: containerFlowBound,
			createTracker: track,
			safe: safeBound,
			stack: [],
			unsafe: [],
			join: [],
			handlers: {},
			options: {},
			indexStack: [],
			handle: void 0
		};
		configure(state, {
			unsafe,
			join,
			handlers: handle
		});
		configure(state, options);
		if (state.options.tightDefinitions) configure(state, { join: [joinDefinition] });
		state.handle = zwitch("type", {
			invalid,
			unknown,
			handlers: state.handlers
		});
		let result = state.handle(tree, void 0, state, {
			before: "\n",
			after: "\n",
			now: {
				line: 1,
				column: 1
			},
			lineShift: 0
		});
		if (result && result.charCodeAt(result.length - 1) !== 10 && result.charCodeAt(result.length - 1) !== 13) result += "\n";
		return result;
		function enter(name) {
			state.stack.push(name);
			return exit;
			function exit() {
				state.stack.pop();
			}
		}
	}
	function invalid(value) {
		throw new Error("Cannot handle value `" + value + "`, expected node");
	}
	function unknown(node) {
		throw new Error("Cannot handle unknown node `" + node.type + "`");
	}
	function joinDefinition(left, right) {
		if (left.type === "definition" && left.type === right.type) return 0;
	}
	function containerPhrasingBound(parent, info) {
		return containerPhrasing(parent, this, info);
	}
	function containerFlowBound(parent, info) {
		return containerFlow(parent, this, info);
	}
	function safeBound(value, config) {
		return safe(this, value, config);
	}
	var wwwPrefix = {
		tokenize: tokenizeWwwPrefix,
		partial: true
	};
	var domain = {
		tokenize: tokenizeDomain,
		partial: true
	};
	var path = {
		tokenize: tokenizePath,
		partial: true
	};
	var trail = {
		tokenize: tokenizeTrail,
		partial: true
	};
	var emailDomainDotTrail = {
		tokenize: tokenizeEmailDomainDotTrail,
		partial: true
	};
	var wwwAutolink = {
		tokenize: tokenizeWwwAutolink,
		previous: previousWww
	};
	var protocolAutolink = {
		tokenize: tokenizeProtocolAutolink,
		previous: previousProtocol
	};
	var emailAutolink = {
		tokenize: tokenizeEmailAutolink,
		previous: previousEmail
	};
	var text = {};
	var gfmAutolinkLiteral = { text };
	var code = 48;
	while (code < 123) {
		text[code] = emailAutolink;
		code++;
		if (code === 58) code = 65;
		else if (code === 91) code = 97;
	}
	text[43] = emailAutolink;
	text[45] = emailAutolink;
	text[46] = emailAutolink;
	text[95] = emailAutolink;
	text[72] = [emailAutolink, protocolAutolink];
	text[104] = [emailAutolink, protocolAutolink];
	text[87] = [emailAutolink, wwwAutolink];
	text[119] = [emailAutolink, wwwAutolink];
	function tokenizeEmailAutolink(effects, ok, nok) {
		const self = this;
		let dot;
		let data;
		return start;
		function start(code) {
			if (!gfmAtext(code) || !previousEmail.call(self, self.previous) || previousUnbalanced(self.events)) return nok(code);
			effects.enter("literalAutolink");
			effects.enter("literalAutolinkEmail");
			return atext(code);
		}
		function atext(code) {
			if (gfmAtext(code)) {
				effects.consume(code);
				return atext;
			}
			if (code === 64) {
				effects.consume(code);
				return emailDomain;
			}
			return nok(code);
		}
		function emailDomain(code) {
			if (code === 46) return effects.check(emailDomainDotTrail, emailDomainAfter, emailDomainDot)(code);
			if (code === 45 || code === 95 || asciiAlphanumeric(code)) {
				data = true;
				effects.consume(code);
				return emailDomain;
			}
			return emailDomainAfter(code);
		}
		function emailDomainDot(code) {
			effects.consume(code);
			dot = true;
			return emailDomain;
		}
		function emailDomainAfter(code) {
			if (data && dot && asciiAlpha(self.previous)) {
				effects.exit("literalAutolinkEmail");
				effects.exit("literalAutolink");
				return ok(code);
			}
			return nok(code);
		}
	}
	function tokenizeWwwAutolink(effects, ok, nok) {
		const self = this;
		return wwwStart;
		function wwwStart(code) {
			if (code !== 87 && code !== 119 || !previousWww.call(self, self.previous) || previousUnbalanced(self.events)) return nok(code);
			effects.enter("literalAutolink");
			effects.enter("literalAutolinkWww");
			return effects.check(wwwPrefix, effects.attempt(domain, effects.attempt(path, wwwAfter), nok), nok)(code);
		}
		function wwwAfter(code) {
			effects.exit("literalAutolinkWww");
			effects.exit("literalAutolink");
			return ok(code);
		}
	}
	function tokenizeProtocolAutolink(effects, ok, nok) {
		const self = this;
		let buffer = "";
		let seen = false;
		return protocolStart;
		function protocolStart(code) {
			if ((code === 72 || code === 104) && previousProtocol.call(self, self.previous) && !previousUnbalanced(self.events)) {
				effects.enter("literalAutolink");
				effects.enter("literalAutolinkHttp");
				buffer += String.fromCodePoint(code);
				effects.consume(code);
				return protocolPrefixInside;
			}
			return nok(code);
		}
		function protocolPrefixInside(code) {
			if (asciiAlpha(code) && buffer.length < 5) {
				buffer += String.fromCodePoint(code);
				effects.consume(code);
				return protocolPrefixInside;
			}
			if (code === 58) {
				const protocol = buffer.toLowerCase();
				if (protocol === "http" || protocol === "https") {
					effects.consume(code);
					return protocolSlashesInside;
				}
			}
			return nok(code);
		}
		function protocolSlashesInside(code) {
			if (code === 47) {
				effects.consume(code);
				if (seen) return afterProtocol;
				seen = true;
				return protocolSlashesInside;
			}
			return nok(code);
		}
		function afterProtocol(code) {
			return code === null || asciiControl(code) || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || unicodePunctuation(code) ? nok(code) : effects.attempt(domain, effects.attempt(path, protocolAfter), nok)(code);
		}
		function protocolAfter(code) {
			effects.exit("literalAutolinkHttp");
			effects.exit("literalAutolink");
			return ok(code);
		}
	}
	function tokenizeWwwPrefix(effects, ok, nok) {
		let size = 0;
		return wwwPrefixInside;
		function wwwPrefixInside(code) {
			if ((code === 87 || code === 119) && size < 3) {
				size++;
				effects.consume(code);
				return wwwPrefixInside;
			}
			if (code === 46 && size === 3) {
				effects.consume(code);
				return wwwPrefixAfter;
			}
			return nok(code);
		}
		function wwwPrefixAfter(code) {
			return code === null ? nok(code) : ok(code);
		}
	}
	function tokenizeDomain(effects, ok, nok) {
		let underscoreInLastSegment;
		let underscoreInLastLastSegment;
		let seen;
		return domainInside;
		function domainInside(code) {
			if (code === 46 || code === 95) return effects.check(trail, domainAfter, domainAtPunctuation)(code);
			if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code) || code !== 45 && unicodePunctuation(code)) return domainAfter(code);
			seen = true;
			effects.consume(code);
			return domainInside;
		}
		function domainAtPunctuation(code) {
			if (code === 95) underscoreInLastSegment = true;
			else {
				underscoreInLastLastSegment = underscoreInLastSegment;
				underscoreInLastSegment = void 0;
			}
			effects.consume(code);
			return domainInside;
		}
		function domainAfter(code) {
			if (underscoreInLastLastSegment || underscoreInLastSegment || !seen) return nok(code);
			return ok(code);
		}
	}
	function tokenizePath(effects, ok) {
		let sizeOpen = 0;
		let sizeClose = 0;
		return pathInside;
		function pathInside(code) {
			if (code === 40) {
				sizeOpen++;
				effects.consume(code);
				return pathInside;
			}
			if (code === 41 && sizeClose < sizeOpen) return pathAtPunctuation(code);
			if (code === 33 || code === 34 || code === 38 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 60 || code === 63 || code === 93 || code === 95 || code === 126) return effects.check(trail, ok, pathAtPunctuation)(code);
			if (code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return ok(code);
			effects.consume(code);
			return pathInside;
		}
		function pathAtPunctuation(code) {
			if (code === 41) sizeClose++;
			effects.consume(code);
			return pathInside;
		}
	}
	function tokenizeTrail(effects, ok, nok) {
		return trail;
		function trail(code) {
			if (code === 33 || code === 34 || code === 39 || code === 41 || code === 42 || code === 44 || code === 46 || code === 58 || code === 59 || code === 63 || code === 95 || code === 126) {
				effects.consume(code);
				return trail;
			}
			if (code === 38) {
				effects.consume(code);
				return trailCharRefStart;
			}
			if (code === 93) {
				effects.consume(code);
				return trailBracketAfter;
			}
			if (code === 60 || code === null || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return ok(code);
			return nok(code);
		}
		function trailBracketAfter(code) {
			if (code === null || code === 40 || code === 91 || markdownLineEndingOrSpace(code) || unicodeWhitespace(code)) return ok(code);
			return trail(code);
		}
		function trailCharRefStart(code) {
			return asciiAlpha(code) ? trailCharRefInside(code) : nok(code);
		}
		function trailCharRefInside(code) {
			if (code === 59) {
				effects.consume(code);
				return trail;
			}
			if (asciiAlpha(code)) {
				effects.consume(code);
				return trailCharRefInside;
			}
			return nok(code);
		}
	}
	function tokenizeEmailDomainDotTrail(effects, ok, nok) {
		return start;
		function start(code) {
			effects.consume(code);
			return after;
		}
		function after(code) {
			return asciiAlphanumeric(code) ? nok(code) : ok(code);
		}
	}
	function previousWww(code) {
		return code === null || code === 40 || code === 42 || code === 95 || code === 91 || code === 93 || code === 126 || markdownLineEndingOrSpace(code);
	}
	function previousProtocol(code) {
		return !asciiAlpha(code);
	}
	function previousEmail(code) {
		return !(code === 47 || gfmAtext(code));
	}
	function gfmAtext(code) {
		return code === 43 || code === 45 || code === 46 || code === 95 || asciiAlphanumeric(code);
	}
	function previousUnbalanced(events) {
		let index = events.length;
		let result = false;
		while (index--) {
			const token = events[index][1];
			if ((token.type === "labelLink" || token.type === "labelImage") && !token._balanced) {
				result = true;
				break;
			}
			if (token._gfmAutolinkLiteralWalkedInto) {
				result = false;
				break;
			}
		}
		if (events.length > 0 && !result) events[events.length - 1][1]._gfmAutolinkLiteralWalkedInto = true;
		return result;
	}
	var gfmAutolinkLiteralHtml = { exit: {
		literalAutolinkEmail,
		literalAutolinkHttp,
		literalAutolinkWww
	} };
	function literalAutolinkWww(token) {
		anchorFromToken.call(this, token, "http://");
	}
	function literalAutolinkEmail(token) {
		anchorFromToken.call(this, token, "mailto:");
	}
	function literalAutolinkHttp(token) {
		anchorFromToken.call(this, token);
	}
	function anchorFromToken(token, protocol) {
		const url = this.sliceSerialize(token);
		this.tag("<a href=\"" + sanitizeUri((protocol || "") + url) + "\">");
		this.raw(this.encode(url));
		this.tag("</a>");
	}
	var indent = {
		tokenize: tokenizeIndent,
		partial: true
	};
	function gfmFootnote() {
		return {
			document: { [91]: {
				tokenize: tokenizeDefinitionStart,
				continuation: { tokenize: tokenizeDefinitionContinuation },
				exit: gfmFootnoteDefinitionEnd
			} },
			text: {
				[91]: { tokenize: tokenizeGfmFootnoteCall },
				[93]: {
					add: "after",
					tokenize: tokenizePotentialGfmFootnoteCall,
					resolveTo: resolveToPotentialGfmFootnoteCall
				}
			}
		};
	}
	function tokenizePotentialGfmFootnoteCall(effects, ok, nok) {
		const self = this;
		let index = self.events.length;
		const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
		let labelStart;
		while (index--) {
			const token = self.events[index][1];
			if (token.type === "labelImage") {
				labelStart = token;
				break;
			}
			if (token.type === "gfmFootnoteCall" || token.type === "labelLink" || token.type === "label" || token.type === "image" || token.type === "link") break;
		}
		return start;
		function start(code) {
			if (!labelStart || !labelStart._balanced) return nok(code);
			const id = normalizeIdentifier(self.sliceSerialize({
				start: labelStart.end,
				end: self.now()
			}));
			if (id.codePointAt(0) !== 94 || !defined.includes(id.slice(1))) return nok(code);
			effects.enter("gfmFootnoteCallLabelMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteCallLabelMarker");
			return ok(code);
		}
	}
	function resolveToPotentialGfmFootnoteCall(events, context) {
		let index = events.length;
		while (index--) if (events[index][1].type === "labelImage" && events[index][0] === "enter") {
			events[index][1];
			break;
		}
		events[index + 1][1].type = "data";
		events[index + 3][1].type = "gfmFootnoteCallLabelMarker";
		const call = {
			type: "gfmFootnoteCall",
			start: Object.assign({}, events[index + 3][1].start),
			end: Object.assign({}, events[events.length - 1][1].end)
		};
		const marker = {
			type: "gfmFootnoteCallMarker",
			start: Object.assign({}, events[index + 3][1].end),
			end: Object.assign({}, events[index + 3][1].end)
		};
		marker.end.column++;
		marker.end.offset++;
		marker.end._bufferIndex++;
		const string = {
			type: "gfmFootnoteCallString",
			start: Object.assign({}, marker.end),
			end: Object.assign({}, events[events.length - 1][1].start)
		};
		const chunk = {
			type: "chunkString",
			contentType: "string",
			start: Object.assign({}, string.start),
			end: Object.assign({}, string.end)
		};
		const replacement = [
			events[index + 1],
			events[index + 2],
			[
				"enter",
				call,
				context
			],
			events[index + 3],
			events[index + 4],
			[
				"enter",
				marker,
				context
			],
			[
				"exit",
				marker,
				context
			],
			[
				"enter",
				string,
				context
			],
			[
				"enter",
				chunk,
				context
			],
			[
				"exit",
				chunk,
				context
			],
			[
				"exit",
				string,
				context
			],
			events[events.length - 2],
			events[events.length - 1],
			[
				"exit",
				call,
				context
			]
		];
		events.splice(index, events.length - index + 1, ...replacement);
		return events;
	}
	function tokenizeGfmFootnoteCall(effects, ok, nok) {
		const self = this;
		const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
		let size = 0;
		let data;
		return start;
		function start(code) {
			effects.enter("gfmFootnoteCall");
			effects.enter("gfmFootnoteCallLabelMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteCallLabelMarker");
			return callStart;
		}
		function callStart(code) {
			if (code !== 94) return nok(code);
			effects.enter("gfmFootnoteCallMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteCallMarker");
			effects.enter("gfmFootnoteCallString");
			effects.enter("chunkString").contentType = "string";
			return callData;
		}
		function callData(code) {
			if (size > 999 || code === 93 && !data || code === null || code === 91 || markdownLineEndingOrSpace(code)) return nok(code);
			if (code === 93) {
				effects.exit("chunkString");
				const token = effects.exit("gfmFootnoteCallString");
				if (!defined.includes(normalizeIdentifier(self.sliceSerialize(token)))) return nok(code);
				effects.enter("gfmFootnoteCallLabelMarker");
				effects.consume(code);
				effects.exit("gfmFootnoteCallLabelMarker");
				effects.exit("gfmFootnoteCall");
				return ok;
			}
			if (!markdownLineEndingOrSpace(code)) data = true;
			size++;
			effects.consume(code);
			return code === 92 ? callEscape : callData;
		}
		function callEscape(code) {
			if (code === 91 || code === 92 || code === 93) {
				effects.consume(code);
				size++;
				return callData;
			}
			return callData(code);
		}
	}
	function tokenizeDefinitionStart(effects, ok, nok) {
		const self = this;
		const defined = self.parser.gfmFootnotes || (self.parser.gfmFootnotes = []);
		let identifier;
		let size = 0;
		let data;
		return start;
		function start(code) {
			effects.enter("gfmFootnoteDefinition")._container = true;
			effects.enter("gfmFootnoteDefinitionLabel");
			effects.enter("gfmFootnoteDefinitionLabelMarker");
			effects.consume(code);
			effects.exit("gfmFootnoteDefinitionLabelMarker");
			return labelAtMarker;
		}
		function labelAtMarker(code) {
			if (code === 94) {
				effects.enter("gfmFootnoteDefinitionMarker");
				effects.consume(code);
				effects.exit("gfmFootnoteDefinitionMarker");
				effects.enter("gfmFootnoteDefinitionLabelString");
				effects.enter("chunkString").contentType = "string";
				return labelInside;
			}
			return nok(code);
		}
		function labelInside(code) {
			if (size > 999 || code === 93 && !data || code === null || code === 91 || markdownLineEndingOrSpace(code)) return nok(code);
			if (code === 93) {
				effects.exit("chunkString");
				const token = effects.exit("gfmFootnoteDefinitionLabelString");
				identifier = normalizeIdentifier(self.sliceSerialize(token));
				effects.enter("gfmFootnoteDefinitionLabelMarker");
				effects.consume(code);
				effects.exit("gfmFootnoteDefinitionLabelMarker");
				effects.exit("gfmFootnoteDefinitionLabel");
				return labelAfter;
			}
			if (!markdownLineEndingOrSpace(code)) data = true;
			size++;
			effects.consume(code);
			return code === 92 ? labelEscape : labelInside;
		}
		function labelEscape(code) {
			if (code === 91 || code === 92 || code === 93) {
				effects.consume(code);
				size++;
				return labelInside;
			}
			return labelInside(code);
		}
		function labelAfter(code) {
			if (code === 58) {
				effects.enter("definitionMarker");
				effects.consume(code);
				effects.exit("definitionMarker");
				if (!defined.includes(identifier)) defined.push(identifier);
				return factorySpace(effects, whitespaceAfter, "gfmFootnoteDefinitionWhitespace");
			}
			return nok(code);
		}
		function whitespaceAfter(code) {
			return ok(code);
		}
	}
	function tokenizeDefinitionContinuation(effects, ok, nok) {
		return effects.check(blankLine, ok, effects.attempt(indent, ok, nok));
	}
	function gfmFootnoteDefinitionEnd(effects) {
		effects.exit("gfmFootnoteDefinition");
	}
	function tokenizeIndent(effects, ok, nok) {
		const self = this;
		return factorySpace(effects, afterPrefix, "gfmFootnoteDefinitionIndent", 5);
		function afterPrefix(code) {
			const tail = self.events[self.events.length - 1];
			return tail && tail[1].type === "gfmFootnoteDefinitionIndent" && tail[2].sliceSerialize(tail[1], true).length === 4 ? ok(code) : nok(code);
		}
	}
	var own = {}.hasOwnProperty;
	var emptyOptions = {};
	function defaultBackLabel(referenceIndex, rereferenceIndex) {
		return "Back to reference " + (referenceIndex + 1) + (rereferenceIndex > 1 ? "-" + rereferenceIndex : "");
	}
	function gfmFootnoteHtml(options) {
		const config = options || emptyOptions;
		const label = config.label || "Footnotes";
		const labelTagName = config.labelTagName || "h2";
		const labelAttributes = config.labelAttributes === null || config.labelAttributes === void 0 ? "class=\"sr-only\"" : config.labelAttributes;
		const backLabel = config.backLabel || defaultBackLabel;
		const clobberPrefix = config.clobberPrefix === null || config.clobberPrefix === void 0 ? "user-content-" : config.clobberPrefix;
		return {
			enter: {
				gfmFootnoteDefinition() {
					this.getData("tightStack").push(false);
				},
				gfmFootnoteDefinitionLabelString() {
					this.buffer();
				},
				gfmFootnoteCallString() {
					this.buffer();
				}
			},
			exit: {
				gfmFootnoteDefinition() {
					let definitions = this.getData("gfmFootnoteDefinitions");
					const footnoteStack = this.getData("gfmFootnoteDefinitionStack");
					const tightStack = this.getData("tightStack");
					const current = footnoteStack.pop();
					const value = this.resume();
					if (!definitions) this.setData("gfmFootnoteDefinitions", definitions = {});
					if (!own.call(definitions, current)) definitions[current] = value;
					tightStack.pop();
					this.setData("slurpOneLineEnding", true);
					this.setData("lastWasTag");
				},
				gfmFootnoteDefinitionLabelString(token) {
					let footnoteStack = this.getData("gfmFootnoteDefinitionStack");
					if (!footnoteStack) this.setData("gfmFootnoteDefinitionStack", footnoteStack = []);
					footnoteStack.push(normalizeIdentifier(this.sliceSerialize(token)));
					this.resume();
					this.buffer();
				},
				gfmFootnoteCallString(token) {
					let calls = this.getData("gfmFootnoteCallOrder");
					let counts = this.getData("gfmFootnoteCallCounts");
					const id = normalizeIdentifier(this.sliceSerialize(token));
					let counter;
					this.resume();
					if (!calls) this.setData("gfmFootnoteCallOrder", calls = []);
					if (!counts) this.setData("gfmFootnoteCallCounts", counts = {});
					const index = calls.indexOf(id);
					const safeId = sanitizeUri(id.toLowerCase());
					if (index === -1) {
						calls.push(id);
						counts[id] = 1;
						counter = calls.length;
					} else {
						counts[id]++;
						counter = index + 1;
					}
					const reuseCounter = counts[id];
					this.tag("<sup><a href=\"#" + clobberPrefix + "fn-" + safeId + "\" id=\"" + clobberPrefix + "fnref-" + safeId + (reuseCounter > 1 ? "-" + reuseCounter : "") + "\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">" + String(counter) + "</a></sup>");
				},
				null() {
					const calls = this.getData("gfmFootnoteCallOrder") || [];
					const counts = this.getData("gfmFootnoteCallCounts") || {};
					const definitions = this.getData("gfmFootnoteDefinitions") || {};
					let index = -1;
					if (calls.length > 0) {
						this.lineEndingIfNeeded();
						this.tag("<section data-footnotes=\"\" class=\"footnotes\"><" + labelTagName + " id=\"footnote-label\"" + (labelAttributes ? " " + labelAttributes : "") + ">");
						this.raw(this.encode(label));
						this.tag("</" + labelTagName + ">");
						this.lineEndingIfNeeded();
						this.tag("<ol>");
					}
					while (++index < calls.length) {
						const id = calls[index];
						const safeId = sanitizeUri(id.toLowerCase());
						let referenceIndex = 0;
						const references = [];
						while (++referenceIndex <= counts[id]) references.push("<a href=\"#" + clobberPrefix + "fnref-" + safeId + (referenceIndex > 1 ? "-" + referenceIndex : "") + "\" data-footnote-backref=\"\" aria-label=\"" + this.encode(typeof backLabel === "string" ? backLabel : backLabel(index, referenceIndex)) + "\" class=\"data-footnote-backref\">↩" + (referenceIndex > 1 ? "<sup>" + referenceIndex + "</sup>" : "") + "</a>");
						const reference = references.join(" ");
						let injected = false;
						this.lineEndingIfNeeded();
						this.tag("<li id=\"" + clobberPrefix + "fn-" + safeId + "\">");
						this.lineEndingIfNeeded();
						this.tag(definitions[id].replace(/<\/p>(?:\r?\n|\r)?$/, ($0) => {
							injected = true;
							return " " + reference + $0;
						}));
						if (!injected) {
							this.lineEndingIfNeeded();
							this.tag(reference);
						}
						this.lineEndingIfNeeded();
						this.tag("</li>");
					}
					if (calls.length > 0) {
						this.lineEndingIfNeeded();
						this.tag("</ol>");
						this.lineEndingIfNeeded();
						this.tag("</section>");
					}
				}
			}
		};
	}
	var gfmStrikethroughHtml = {
		enter: { strikethrough() {
			this.tag("<del>");
		} },
		exit: { strikethrough() {
			this.tag("</del>");
		} }
	};
	function gfmStrikethrough(options) {
		let single = (options || {}).singleTilde;
		const tokenizer = {
			tokenize: tokenizeStrikethrough,
			resolveAll: resolveAllStrikethrough
		};
		if (single === null || single === void 0) single = true;
		return {
			text: { [126]: tokenizer },
			insideSpan: { null: [tokenizer] },
			attentionMarkers: { null: [126] }
		};
		function resolveAllStrikethrough(events, context) {
			let index = -1;
			while (++index < events.length) if (events[index][0] === "enter" && events[index][1].type === "strikethroughSequenceTemporary" && events[index][1]._close) {
				let open = index;
				while (open--) if (events[open][0] === "exit" && events[open][1].type === "strikethroughSequenceTemporary" && events[open][1]._open && events[index][1].end.offset - events[index][1].start.offset === events[open][1].end.offset - events[open][1].start.offset) {
					events[index][1].type = "strikethroughSequence";
					events[open][1].type = "strikethroughSequence";
					const strikethrough = {
						type: "strikethrough",
						start: Object.assign({}, events[open][1].start),
						end: Object.assign({}, events[index][1].end)
					};
					const text = {
						type: "strikethroughText",
						start: Object.assign({}, events[open][1].end),
						end: Object.assign({}, events[index][1].start)
					};
					const nextEvents = [
						[
							"enter",
							strikethrough,
							context
						],
						[
							"enter",
							events[open][1],
							context
						],
						[
							"exit",
							events[open][1],
							context
						],
						[
							"enter",
							text,
							context
						]
					];
					const insideSpan = context.parser.constructs.insideSpan.null;
					if (insideSpan) splice(nextEvents, nextEvents.length, 0, resolveAll(insideSpan, events.slice(open + 1, index), context));
					splice(nextEvents, nextEvents.length, 0, [
						[
							"exit",
							text,
							context
						],
						[
							"enter",
							events[index][1],
							context
						],
						[
							"exit",
							events[index][1],
							context
						],
						[
							"exit",
							strikethrough,
							context
						]
					]);
					splice(events, open - 1, index - open + 3, nextEvents);
					index = open + nextEvents.length - 2;
					break;
				}
			}
			index = -1;
			while (++index < events.length) if (events[index][1].type === "strikethroughSequenceTemporary") events[index][1].type = "data";
			return events;
		}
		function tokenizeStrikethrough(effects, ok, nok) {
			const previous = this.previous;
			const events = this.events;
			let size = 0;
			return start;
			function start(code) {
				if (previous === 126 && events[events.length - 1][1].type !== "characterEscape") return nok(code);
				effects.enter("strikethroughSequenceTemporary");
				return more(code);
			}
			function more(code) {
				const before = classifyCharacter(previous);
				if (code === 126) {
					if (size > 1) return nok(code);
					effects.consume(code);
					size++;
					return more;
				}
				if (size < 2 && !single) return nok(code);
				const token = effects.exit("strikethroughSequenceTemporary");
				const after = classifyCharacter(code);
				token._open = !after || after === 2 && Boolean(before);
				token._close = !before || before === 2 && Boolean(after);
				return ok(code);
			}
		}
	}
	var alignment = {
		none: "",
		left: " align=\"left\"",
		right: " align=\"right\"",
		center: " align=\"center\""
	};
	var gfmTableHtml = {
		enter: {
			table(token) {
				const tableAlign = token._align;
				this.lineEndingIfNeeded();
				this.tag("<table>");
				this.setData("tableAlign", tableAlign);
			},
			tableBody() {
				this.tag("<tbody>");
			},
			tableData() {
				const align = alignment[this.getData("tableAlign")[this.getData("tableColumn")]];
				if (align === void 0) this.buffer();
				else {
					this.lineEndingIfNeeded();
					this.tag("<td" + align + ">");
				}
			},
			tableHead() {
				this.lineEndingIfNeeded();
				this.tag("<thead>");
			},
			tableHeader() {
				const align = alignment[this.getData("tableAlign")[this.getData("tableColumn")]];
				this.lineEndingIfNeeded();
				this.tag("<th" + align + ">");
			},
			tableRow() {
				this.setData("tableColumn", 0);
				this.lineEndingIfNeeded();
				this.tag("<tr>");
			}
		},
		exit: {
			codeTextData(token) {
				let value = this.sliceSerialize(token);
				if (this.getData("tableAlign")) value = value.replace(/\\([\\|])/g, replace);
				this.raw(this.encode(value));
			},
			table() {
				this.setData("tableAlign");
				this.setData("slurpAllLineEndings");
				this.lineEndingIfNeeded();
				this.tag("</table>");
			},
			tableBody() {
				this.lineEndingIfNeeded();
				this.tag("</tbody>");
			},
			tableData() {
				const tableAlign = this.getData("tableAlign");
				const tableColumn = this.getData("tableColumn");
				if (tableColumn in tableAlign) {
					this.tag("</td>");
					this.setData("tableColumn", tableColumn + 1);
				} else this.resume();
			},
			tableHead() {
				this.lineEndingIfNeeded();
				this.tag("</thead>");
			},
			tableHeader() {
				const tableColumn = this.getData("tableColumn");
				this.tag("</th>");
				this.setData("tableColumn", tableColumn + 1);
			},
			tableRow() {
				const tableAlign = this.getData("tableAlign");
				let tableColumn = this.getData("tableColumn");
				while (tableColumn < tableAlign.length) {
					this.lineEndingIfNeeded();
					this.tag("<td" + alignment[tableAlign[tableColumn]] + "></td>");
					tableColumn++;
				}
				this.setData("tableColumn", tableColumn);
				this.lineEndingIfNeeded();
				this.tag("</tr>");
			}
		}
	};
	function replace($0, $1) {
		return $1 === "|" ? $1 : $0;
	}
	var EditMap = class {
		constructor() {
			this.map = [];
		}
		add(index, remove, add) {
			addImpl(this, index, remove, add);
		}
		consume(events) {
			this.map.sort((a, b) => a[0] - b[0]);
			if (this.map.length === 0) return;
			let index = this.map.length;
			const vecs = [];
			while (index > 0) {
				index -= 1;
				vecs.push(events.slice(this.map[index][0] + this.map[index][1]));
				vecs.push(this.map[index][2]);
				events.length = this.map[index][0];
			}
			vecs.push([...events]);
			events.length = 0;
			let slice = vecs.pop();
			while (slice) {
				events.push(...slice);
				slice = vecs.pop();
			}
			this.map.length = 0;
		}
	};
	function addImpl(editMap, at, remove, add) {
		let index = 0;
		if (remove === 0 && add.length === 0) return;
		while (index < editMap.map.length) {
			if (editMap.map[index][0] === at) {
				editMap.map[index][1] += remove;
				editMap.map[index][2].push(...add);
				return;
			}
			index += 1;
		}
		editMap.map.push([
			at,
			remove,
			add
		]);
	}
	function gfmTableAlign(events, index) {
		let inDelimiterRow = false;
		const align = [];
		while (index < events.length) {
			const event = events[index];
			if (inDelimiterRow) {
				if (event[0] === "enter") {
					if (event[1].type === "tableContent") align.push(events[index + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
				} else if (event[1].type === "tableContent") {
					if (events[index - 1][1].type === "tableDelimiterMarker") {
						const alignIndex = align.length - 1;
						align[alignIndex] = align[alignIndex] === "left" ? "center" : "right";
					}
				} else if (event[1].type === "tableDelimiterRow") break;
			} else if (event[0] === "enter" && event[1].type === "tableDelimiterRow") inDelimiterRow = true;
			index += 1;
		}
		return align;
	}
	var gfmTable = { flow: { null: {
		tokenize: tokenizeTable,
		resolveAll: resolveTable
	} } };
	function tokenizeTable(effects, ok, nok) {
		const self = this;
		let size = 0;
		let sizeB = 0;
		let seen;
		return start;
		function start(code) {
			let index = self.events.length - 1;
			while (index > -1) {
				const type = self.events[index][1].type;
				if (type === "lineEnding" || type === "linePrefix") index--;
				else break;
			}
			const tail = index > -1 ? self.events[index][1].type : null;
			const next = tail === "tableHead" || tail === "tableRow" ? bodyRowStart : headRowBefore;
			if (next === bodyRowStart && self.parser.lazy[self.now().line]) return nok(code);
			return next(code);
		}
		function headRowBefore(code) {
			effects.enter("tableHead");
			effects.enter("tableRow");
			return headRowStart(code);
		}
		function headRowStart(code) {
			if (code === 124) return headRowBreak(code);
			seen = true;
			sizeB += 1;
			return headRowBreak(code);
		}
		function headRowBreak(code) {
			if (code === null) return nok(code);
			if (markdownLineEnding(code)) {
				if (sizeB > 1) {
					sizeB = 0;
					self.interrupt = true;
					effects.exit("tableRow");
					effects.enter("lineEnding");
					effects.consume(code);
					effects.exit("lineEnding");
					return headDelimiterStart;
				}
				return nok(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, headRowBreak, "whitespace")(code);
			sizeB += 1;
			if (seen) {
				seen = false;
				size += 1;
			}
			if (code === 124) {
				effects.enter("tableCellDivider");
				effects.consume(code);
				effects.exit("tableCellDivider");
				seen = true;
				return headRowBreak;
			}
			effects.enter("data");
			return headRowData(code);
		}
		function headRowData(code) {
			if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
				effects.exit("data");
				return headRowBreak(code);
			}
			effects.consume(code);
			return code === 92 ? headRowEscape : headRowData;
		}
		function headRowEscape(code) {
			if (code === 92 || code === 124) {
				effects.consume(code);
				return headRowData;
			}
			return headRowData(code);
		}
		function headDelimiterStart(code) {
			self.interrupt = false;
			if (self.parser.lazy[self.now().line]) return nok(code);
			effects.enter("tableDelimiterRow");
			seen = false;
			if (markdownSpace(code)) return factorySpace(effects, headDelimiterBefore, "linePrefix", self.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(code);
			return headDelimiterBefore(code);
		}
		function headDelimiterBefore(code) {
			if (code === 45 || code === 58) return headDelimiterValueBefore(code);
			if (code === 124) {
				seen = true;
				effects.enter("tableCellDivider");
				effects.consume(code);
				effects.exit("tableCellDivider");
				return headDelimiterCellBefore;
			}
			return headDelimiterNok(code);
		}
		function headDelimiterCellBefore(code) {
			if (markdownSpace(code)) return factorySpace(effects, headDelimiterValueBefore, "whitespace")(code);
			return headDelimiterValueBefore(code);
		}
		function headDelimiterValueBefore(code) {
			if (code === 58) {
				sizeB += 1;
				seen = true;
				effects.enter("tableDelimiterMarker");
				effects.consume(code);
				effects.exit("tableDelimiterMarker");
				return headDelimiterLeftAlignmentAfter;
			}
			if (code === 45) {
				sizeB += 1;
				return headDelimiterLeftAlignmentAfter(code);
			}
			if (code === null || markdownLineEnding(code)) return headDelimiterCellAfter(code);
			return headDelimiterNok(code);
		}
		function headDelimiterLeftAlignmentAfter(code) {
			if (code === 45) {
				effects.enter("tableDelimiterFiller");
				return headDelimiterFiller(code);
			}
			return headDelimiterNok(code);
		}
		function headDelimiterFiller(code) {
			if (code === 45) {
				effects.consume(code);
				return headDelimiterFiller;
			}
			if (code === 58) {
				seen = true;
				effects.exit("tableDelimiterFiller");
				effects.enter("tableDelimiterMarker");
				effects.consume(code);
				effects.exit("tableDelimiterMarker");
				return headDelimiterRightAlignmentAfter;
			}
			effects.exit("tableDelimiterFiller");
			return headDelimiterRightAlignmentAfter(code);
		}
		function headDelimiterRightAlignmentAfter(code) {
			if (markdownSpace(code)) return factorySpace(effects, headDelimiterCellAfter, "whitespace")(code);
			return headDelimiterCellAfter(code);
		}
		function headDelimiterCellAfter(code) {
			if (code === 124) return headDelimiterBefore(code);
			if (code === null || markdownLineEnding(code)) {
				if (!seen || size !== sizeB) return headDelimiterNok(code);
				effects.exit("tableDelimiterRow");
				effects.exit("tableHead");
				return ok(code);
			}
			return headDelimiterNok(code);
		}
		function headDelimiterNok(code) {
			return nok(code);
		}
		function bodyRowStart(code) {
			effects.enter("tableRow");
			return bodyRowBreak(code);
		}
		function bodyRowBreak(code) {
			if (code === 124) {
				effects.enter("tableCellDivider");
				effects.consume(code);
				effects.exit("tableCellDivider");
				return bodyRowBreak;
			}
			if (code === null || markdownLineEnding(code)) {
				effects.exit("tableRow");
				return ok(code);
			}
			if (markdownSpace(code)) return factorySpace(effects, bodyRowBreak, "whitespace")(code);
			effects.enter("data");
			return bodyRowData(code);
		}
		function bodyRowData(code) {
			if (code === null || code === 124 || markdownLineEndingOrSpace(code)) {
				effects.exit("data");
				return bodyRowBreak(code);
			}
			effects.consume(code);
			return code === 92 ? bodyRowEscape : bodyRowData;
		}
		function bodyRowEscape(code) {
			if (code === 92 || code === 124) {
				effects.consume(code);
				return bodyRowData;
			}
			return bodyRowData(code);
		}
	}
	function resolveTable(events, context) {
		let index = -1;
		let inFirstCellAwaitingPipe = true;
		let rowKind = 0;
		let lastCell = [
			0,
			0,
			0,
			0
		];
		let cell = [
			0,
			0,
			0,
			0
		];
		let afterHeadAwaitingFirstBodyRow = false;
		let lastTableEnd = 0;
		let currentTable;
		let currentBody;
		let currentCell;
		const map = new EditMap();
		while (++index < events.length) {
			const event = events[index];
			const token = event[1];
			if (event[0] === "enter") {
				if (token.type === "tableHead") {
					afterHeadAwaitingFirstBodyRow = false;
					if (lastTableEnd !== 0) {
						flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
						currentBody = void 0;
						lastTableEnd = 0;
					}
					currentTable = {
						type: "table",
						start: Object.assign({}, token.start),
						end: Object.assign({}, token.end)
					};
					map.add(index, 0, [[
						"enter",
						currentTable,
						context
					]]);
				} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
					inFirstCellAwaitingPipe = true;
					currentCell = void 0;
					lastCell = [
						0,
						0,
						0,
						0
					];
					cell = [
						0,
						index + 1,
						0,
						0
					];
					if (afterHeadAwaitingFirstBodyRow) {
						afterHeadAwaitingFirstBodyRow = false;
						currentBody = {
							type: "tableBody",
							start: Object.assign({}, token.start),
							end: Object.assign({}, token.end)
						};
						map.add(index, 0, [[
							"enter",
							currentBody,
							context
						]]);
					}
					rowKind = token.type === "tableDelimiterRow" ? 2 : currentBody ? 3 : 1;
				} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) {
					inFirstCellAwaitingPipe = false;
					if (cell[2] === 0) {
						if (lastCell[1] !== 0) {
							cell[0] = cell[1];
							currentCell = flushCell(map, context, lastCell, rowKind, void 0, currentCell);
							lastCell = [
								0,
								0,
								0,
								0
							];
						}
						cell[2] = index;
					}
				} else if (token.type === "tableCellDivider") {
					if (inFirstCellAwaitingPipe) inFirstCellAwaitingPipe = false;
					else {
						if (lastCell[1] !== 0) {
							cell[0] = cell[1];
							currentCell = flushCell(map, context, lastCell, rowKind, void 0, currentCell);
						}
						lastCell = cell;
						cell = [
							lastCell[1],
							index,
							0,
							0
						];
					}
				}
			} else if (token.type === "tableHead") {
				afterHeadAwaitingFirstBodyRow = true;
				lastTableEnd = index;
			} else if (token.type === "tableRow" || token.type === "tableDelimiterRow") {
				lastTableEnd = index;
				if (lastCell[1] !== 0) {
					cell[0] = cell[1];
					currentCell = flushCell(map, context, lastCell, rowKind, index, currentCell);
				} else if (cell[1] !== 0) currentCell = flushCell(map, context, cell, rowKind, index, currentCell);
				rowKind = 0;
			} else if (rowKind && (token.type === "data" || token.type === "tableDelimiterMarker" || token.type === "tableDelimiterFiller")) cell[3] = index;
		}
		if (lastTableEnd !== 0) flushTableEnd(map, context, lastTableEnd, currentTable, currentBody);
		map.consume(context.events);
		index = -1;
		while (++index < context.events.length) {
			const event = context.events[index];
			if (event[0] === "enter" && event[1].type === "table") event[1]._align = gfmTableAlign(context.events, index);
		}
		return events;
	}
	function flushCell(map, context, range, rowKind, rowEnd, previousCell) {
		const groupName = rowKind === 1 ? "tableHeader" : rowKind === 2 ? "tableDelimiter" : "tableData";
		const valueName = "tableContent";
		if (range[0] !== 0) {
			previousCell.end = Object.assign({}, getPoint(context.events, range[0]));
			map.add(range[0], 0, [[
				"exit",
				previousCell,
				context
			]]);
		}
		const now = getPoint(context.events, range[1]);
		previousCell = {
			type: groupName,
			start: Object.assign({}, now),
			end: Object.assign({}, now)
		};
		map.add(range[1], 0, [[
			"enter",
			previousCell,
			context
		]]);
		if (range[2] !== 0) {
			const relatedStart = getPoint(context.events, range[2]);
			const relatedEnd = getPoint(context.events, range[3]);
			const valueToken = {
				type: valueName,
				start: Object.assign({}, relatedStart),
				end: Object.assign({}, relatedEnd)
			};
			map.add(range[2], 0, [[
				"enter",
				valueToken,
				context
			]]);
			if (rowKind !== 2) {
				const start = context.events[range[2]];
				const end = context.events[range[3]];
				start[1].end = Object.assign({}, end[1].end);
				start[1].type = "chunkText";
				start[1].contentType = "text";
				if (range[3] > range[2] + 1) {
					const a = range[2] + 1;
					const b = range[3] - range[2] - 1;
					map.add(a, b, []);
				}
			}
			map.add(range[3] + 1, 0, [[
				"exit",
				valueToken,
				context
			]]);
		}
		if (rowEnd !== void 0) {
			previousCell.end = Object.assign({}, getPoint(context.events, rowEnd));
			map.add(rowEnd, 0, [[
				"exit",
				previousCell,
				context
			]]);
			previousCell = void 0;
		}
		return previousCell;
	}
	function flushTableEnd(map, context, index, table, tableBody) {
		const exits = [];
		const related = getPoint(context.events, index);
		if (tableBody) {
			tableBody.end = Object.assign({}, related);
			exits.push([
				"exit",
				tableBody,
				context
			]);
		}
		table.end = Object.assign({}, related);
		exits.push([
			"exit",
			table,
			context
		]);
		map.add(index + 1, 0, exits);
	}
	function getPoint(events, index) {
		const event = events[index];
		const side = event[0] === "enter" ? "start" : "end";
		return event[1][side];
	}
	var reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi;
	var reText = new RegExp("^" + reFlow.source, "i");
	var gfmTagfilterHtml = { exit: {
		htmlFlowData(token) {
			exitHtmlData.call(this, token, reFlow);
		},
		htmlTextData(token) {
			exitHtmlData.call(this, token, reText);
		}
	} };
	function exitHtmlData(token, filter) {
		let value = this.sliceSerialize(token);
		if (this.options.allowDangerousHtml) value = value.replace(filter, "&lt;$1$2");
		this.raw(this.encode(value));
	}
	var gfmTaskListItemHtml = {
		enter: { taskListCheck() {
			this.tag("<input type=\"checkbox\" disabled=\"\" ");
		} },
		exit: {
			taskListCheck() {
				this.tag("/>");
			},
			taskListCheckValueChecked() {
				this.tag("checked=\"\" ");
			}
		}
	};
	var tasklistCheck = { tokenize: tokenizeTasklistCheck };
	var gfmTaskListItem = { text: { [91]: tasklistCheck } };
	function tokenizeTasklistCheck(effects, ok, nok) {
		const self = this;
		return open;
		function open(code) {
			if (self.previous !== null || !self._gfmTasklistFirstContentOfListItem) return nok(code);
			effects.enter("taskListCheck");
			effects.enter("taskListCheckMarker");
			effects.consume(code);
			effects.exit("taskListCheckMarker");
			return inside;
		}
		function inside(code) {
			if (markdownLineEndingOrSpace(code)) {
				effects.enter("taskListCheckValueUnchecked");
				effects.consume(code);
				effects.exit("taskListCheckValueUnchecked");
				return close;
			}
			if (code === 88 || code === 120) {
				effects.enter("taskListCheckValueChecked");
				effects.consume(code);
				effects.exit("taskListCheckValueChecked");
				return close;
			}
			return nok(code);
		}
		function close(code) {
			if (code === 93) {
				effects.enter("taskListCheckMarker");
				effects.consume(code);
				effects.exit("taskListCheckMarker");
				effects.exit("taskListCheck");
				return after;
			}
			return nok(code);
		}
		function after(code) {
			if (markdownLineEnding(code)) return ok(code);
			if (markdownSpace(code)) return effects.check({ tokenize: spaceThenNonSpace }, ok, nok)(code);
			return nok(code);
		}
	}
	function spaceThenNonSpace(effects, ok, nok) {
		return factorySpace(effects, after, "whitespace");
		function after(code) {
			return code === null ? nok(code) : ok(code);
		}
	}
	function gfm(options) {
		return combineExtensions([
			gfmAutolinkLiteral,
			gfmFootnote(),
			gfmStrikethrough(options),
			gfmTable,
			gfmTaskListItem
		]);
	}
	function gfmHtml(options) {
		return combineHtmlExtensions([
			gfmAutolinkLiteralHtml,
			gfmFootnoteHtml(options),
			gfmStrikethroughHtml,
			gfmTableHtml,
			gfmTagfilterHtml,
			gfmTaskListItemHtml
		]);
	}
	function fromMarkdown(content) {
		return fromMarkdown$1(content, {
			extensions: [gfm()],
			mdastExtensions: [gfmFromMarkdown()]
		});
	}
	var graphemes = new Intl.Segmenter(void 0, { granularity: "grapheme" });
	var WIDE = /[\p{Extended_Pictographic}\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\u3000-\u303F\uFF01-\uFF60\uFFE0-\uFFE6]/u;
	function displayWidth(value) {
		let width = 0;
		for (const { segment } of graphemes.segment(value)) width += WIDE.test(segment) ? 2 : 1;
		return width;
	}
	function toMarkdown(ast, source) {
		const slice = (node) => {
			const start = node.position.start.offset;
			let end = node.position.end.offset;
			if (source[end] === ";" && /&(?:#x?[\da-f]+|\w+)$/i.test(source.slice(start, end))) end++;
			return source.slice(start, end);
		};
		return toMarkdown$1(ast, {
			bullet: "-",
			bulletOther: "*",
			bulletOrdered: ".",
			emphasis: "*",
			fence: "`",
			fences: true,
			listItemIndent: "one",
			resourceLink: false,
			rule: "-",
			ruleRepetition: 3,
			ruleSpaces: false,
			strong: "*",
			extensions: [gfmToMarkdown({ stringLength: displayWidth })],
			handlers: {
				text: (node) => node.position ? slice(node).split("\n").map((line, i) => i ? line.replace(/^[ \t>]*/, "") : line).join("\n") : node.value,
				break: (node) => node.position ? slice(node) : "  \n"
			}
		});
	}
	var dropRawHtml = { exit: {
		htmlFlowData() {},
		htmlTextData() {}
	} };
	function toHtml(markdown) {
		return micromark(markdown, {
			extensions: [gfm()],
			htmlExtensions: [gfmHtml(), dropRawHtml]
		});
	}
	function flatMap(tree, fn) {
		function transform(node, i, parent) {
			if ("children" in node) {
				const p = node;
				p.children = p.children.flatMap((item, i) => transform(item, i, p));
			}
			return fn(node, i, parent);
		}
		return transform(tree, 0, void 0)[0];
	}
	function standardizeLineBreaks(text) {
		return text.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	}
	function transformAuthor(author) {
		switch (author.role) {
			case "assistant":
			case "tool": return "ChatGPT";
			case "user": return "You";
			default: return author.role;
		}
	}
	function fillTemplate(template, values) {
		return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
			return Object.hasOwn(values, key) ? values[key] : match;
		});
	}
	function escapeHtml(html) {
		return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
	}
	function metaDetailsHtml(metaList) {
		if (metaList.length === 0) return "";
		return `<details>
    <summary>Metadata</summary>
    <div class="metadata_container">
        ${metaList.map(([name, value]) => `<div class="metadata_item"><div>${escapeHtml(name)}</div><div>${escapeHtml(value)}</div></div>`).join("\n")}
    </div>
</details>`;
	}
	function getMetaVariables({ title, model, modelSlug, createTime, updateTime }, source, date = dateStr()) {
		return {
			title,
			date,
			timestamp: timestamp(),
			source,
			model,
			model_name: modelSlug,
			create_time: unixTimestampToISOString(createTime),
			update_time: unixTimestampToISOString(updateTime)
		};
	}
	function resolveMetaList(metaList, variables) {
		return metaList?.filter((x) => !!x.name).map(({ name, value }) => {
			return [name, value.replace(/\{(\w+)\}/g, (match, key) => {
				return Object.hasOwn(variables, key) ? variables[key] : match;
			})];
		}) ?? [];
	}
	async function exportToHtml(fileNameFormat, metaList) {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		if (!checkIfTemporaryChatIsExportable()) {
			alert(i18n.t("Temporary chat could not be captured"));
			return false;
		}
		const userAvatar = await getUserAvatar();
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await withImageAssets(await fetchConversation(chatId)), { enableThinking: ScriptStorage.get("exporter:enable_thinking") ?? false });
		const html = conversationToHtml(conversation, userAvatar, metaList);
		downloadFile(getFileNameWithFormat(fileNameFormat, "html", {
			title: conversation.title,
			chatId,
			createTime: conversation.createTime,
			updateTime: conversation.updateTime
		}), "text/html", standardizeLineBreaks(html));
		return true;
	}
	async function exportAllToHtml(fileNameFormat, apiConversations, metaList, projectName, partIndex, totalParts) {
		const userAvatar = await getUserAvatar();
		const zip = new import_jszip_min.default();
		const filenameMap = new Map();
		const enableThinking = ScriptStorage.get("exporter:enable_thinking") ?? false;
		apiConversations.map((x) => processConversation(x, { enableThinking })).forEach((conversation) => {
			let fileName = getFileNameWithFormat(fileNameFormat, "html", {
				title: conversation.title,
				chatId: conversation.id,
				createTime: conversation.createTime,
				updateTime: conversation.updateTime
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -5)} (${count}).html`;
			} else filenameMap.set(fileName, 1);
			const content = conversationToHtml(conversation, userAvatar, metaList);
			zip.file(fileName, content);
		});
		const blob = await zip.generateAsync({
			type: "blob",
			platform: "UNIX",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
		downloadFile(buildZipFileName("html", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
		return true;
	}
	function conversationToHtml(conversation, avatar, metaList) {
		const { id, title, conversationNodes } = conversation;
		const enableTimestamp = ScriptStorage.get("exporter:enable_timestamp") ?? false;
		const timeStampHtml = ScriptStorage.get("exporter:timestamp_html") ?? false;
		const timeStamp24H = ScriptStorage.get("exporter:timestamp_24h") ?? false;
		const enableSources = ScriptStorage.get("exporter:enable_sources") ?? true;
		const conversationHtml = conversationNodes.map(({ message, thinking }) => {
			if (!message || !message.content) return null;
			if (shouldSkipMessageInExport(message)) return null;
			const author = transformAuthor(message.author);
			const authorType = message.author.role === "user" ? "user" : "assistant";
			const avatarEl = message.author.role === "user" ? `<img alt="${escapeHtml(author)}" />` : "<svg width=\"41\" height=\"41\"><use xlink:href=\"#chatgpt\" /></svg>";
			let postSteps = [];
			if (message.author.role === "assistant") {
				postSteps.push((input) => transformFootNotes$2(input, message.metadata));
				postSteps.push((input) => transformContentReferences(input, message.metadata, {
					includeSourceList: enableSources,
					sourceListLabel: i18n.t("Sources")
				}));
				postSteps.push((input) => {
					const { text, restore } = protectMath(input);
					return restore(toHtml(text), (formula) => escapeHtml(toBracketDelimiters(formula)));
				});
			} else postSteps = [(input) => `<p class="no-katex">${escapeHtml(input)}</p>`];
			const postProcess = (input) => postSteps.reduce((acc, fn) => fn(acc), input);
			const content = transformContent$2(message.content, message.metadata, postProcess);
			const attachments = getFileAttachmentNames(message);
			const attachmentsHtml = attachments.length ? `<ul class="attachments">${attachments.map((name) => `<li>📎 ${escapeHtml(name)}</li>`).join("")}</ul>` : "";
			const timestamp = message?.create_time ?? "";
			const showTimestamp = enableTimestamp && timeStampHtml && timestamp;
			let timestampHtml = "";
			let conversationTime = "";
			if (showTimestamp) {
				const date = new Date(timestamp * 1e3);
				conversationTime = date.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
					hour12: !timeStamp24H
				});
				timestampHtml = `<time class="time" datetime="${date.toISOString()}" title="${date.toLocaleString()}">${conversationTime}</time>`;
			}
			return `
<div class="conversation-item">
    <div class="author ${authorType}">
        ${avatarEl}
    </div>
    <div class="conversation-content-wrapper">
        ${thinking ? formatThinkingHtml(thinking) : ""}
        <div class="conversation-content">
            ${content}
            ${attachmentsHtml}
        </div>
    </div>
    ${timestampHtml}
</div>`;
		}).filter(Boolean).join("\n\n");
		const date = dateStr();
		const time = new Date().toISOString();
		const source = `${baseUrl}/c/${id}`;
		const lang = document.documentElement.lang ?? "en";
		const theme = getColorScheme();
		const _metaList = resolveMetaList(metaList, getMetaVariables(conversation, source, date));
		return fillTemplate(template_default, {
			title: escapeHtml(title),
			date,
			time,
			source: escapeHtml(source),
			lang: escapeHtml(lang),
			theme: escapeHtml(theme),
			avatar,
			details: metaDetailsHtml(_metaList),
			content: conversationHtml
		});
	}
	function transformFootNotes$2(input, metadata) {
		return input.replace(/【(\d+)†\((.+?)\)】/g, (match, citeIndex, _evidenceText) => {
			if (metadata?.citations?.find((cite) => cite.metadata?.extra?.cited_message_idx === +citeIndex)) return "";
			return match;
		});
	}
	function transformContent$2(content, metadata, postProcess) {
		switch (content.content_type) {
			case "text": return postProcess(content.parts?.join("\n") || "");
			case "code": return postProcess(`Code:\n\`\`\`\n${content.text}\n\`\`\``);
			case "execution_output":
				if (metadata?.aggregate_result?.messages) return metadata.aggregate_result.messages.filter((msg) => msg.message_type === "image").map((msg) => `<img src="${escapeHtml(msg.image_url)}" height="${escapeHtml(String(msg.height))}" width="${escapeHtml(String(msg.width))}" decoding="async" />`).join("\n");
				return postProcess(`Result:\n\`\`\`\n${content.text}\n\`\`\`` || "");
			case "tether_quote": return postProcess(`> ${content.title || content.text || ""}`);
			case "tether_browsing_code": return postProcess("");
			case "tether_browsing_display": {
				const metadataList = metadata?._cite_metadata?.metadata_list;
				if (Array.isArray(metadataList) && metadataList.length > 0) return postProcess(metadataList.map(({ title, url }) => {
					return `> [${title}](${url})`;
				}).join("\n"));
				return postProcess("");
			}
			case "multimodal_text": return content.parts?.map((part) => {
				if (typeof part === "string") return postProcess(part);
				if (part.content_type === "image_asset_pointer") return `<img src="${escapeHtml(part.asset_pointer)}" height="${escapeHtml(String(part.height))}" width="${escapeHtml(String(part.width))}" decoding="async" />`;
				if (part.content_type === "audio_transcription") return `<div style="font-style: italic; opacity: 0.65;">“${escapeHtml(part.text)}”</div>`;
				if (part.content_type === "audio_asset_pointer") return null;
				if (part.content_type === "real_time_user_audio_video_asset_pointer") return null;
				return postProcess("[Unsupported multimodal content]");
			}).join("\n") || "";
			default:
				console.warn("[Exporter] Unsupported Content:", content.content_type, content);
				return postProcess(`[Unsupported Content: ${content.content_type} ]`);
		}
	}
	function formatThinkingHtml(thinking) {
		const durationLabel = thinking.durationSeconds != null ? `Thought for ${thinking.durationSeconds} seconds` : "Thinking";
		const parts = [];
		if (thinking.activities?.length) {
			const items = thinking.activities.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
			parts.push(`<ul>${items}</ul>`);
		}
		const thoughts = thinking.thoughts.map((t) => t.content || t.summary).filter(Boolean).map((text) => `<p>${escapeHtml(text)}</p>`).join("\n");
		if (thoughts) parts.push(thoughts);
		const body = parts.join("\n");
		if (!body) return "";
		return `<details class="thinking"><summary>${escapeHtml(durationLabel)}</summary>${body}</details>`;
	}
	var Yr = Object.defineProperty;
	var st = (t, e, n) => () => {
		if (n) throw n[0];
		try {
			return t && (e = t(t = 0)), e;
		} catch (o) {
			throw n = [o], o;
		}
	};
	var Gt = (t, e) => {
		for (var n in e) Yr(t, n, {
			get: e[n],
			enumerable: !0
		});
	};
	function _n(t) {
		if (t === !0) return "soft";
		if (t === !1) return "disabled";
		if (typeof t == "string") {
			let e = t.toLowerCase().trim();
			if (e === "auto") return "auto";
			if (e === "full") return "full";
			if (e === "soft" || e === "disabled") return e;
		}
		return "soft";
	}
	function he(t = "soft") {
		switch (t) {
			case "auto":
				C.session.styleMap = new Map(), C.session.nodeMap = new Map();
				return;
			case "soft":
				C.session.styleMap = new Map(), C.session.nodeMap = new Map(), C.session.styleCache = new WeakMap();
				return;
			case "full": return;
			case "disabled":
				C.session.styleMap = new Map(), C.session.nodeMap = new Map(), C.session.styleCache = new WeakMap(), C.computedStyle = new WeakMap(), C.measureHints = new WeakMap(), C.baseStyle = new Y(50), C.defaultStyle = new Y(30), C.image = new Y(100), C.background = new Y(100), C.resource = new Y(150), C.compress = new Y(50), C.font = new Set();
				return;
			default:
				C.session.styleMap = new Map(), C.session.nodeMap = new Map(), C.session.styleCache = new WeakMap();
				return;
		}
	}
	var Y;
	var C;
	var rt = st(() => {
		"use strict";
		Y = class extends Map {
			constructor(e = 100, ...n) {
				super(...n), this._maxSize = e;
			}
			set(e, n) {
				if (this.size >= this._maxSize && !this.has(e)) {
					let o = this.keys().next().value;
					o !== void 0 && this.delete(o);
				}
				return super.set(e, n);
			}
		}, C = {
			image: new Y(100),
			background: new Y(100),
			resource: new Y(150),
			defaultStyle: new Y(30),
			baseStyle: new Y(50),
			compress: new Y(50),
			computedStyle: new WeakMap(),
			measureHints: new WeakMap(),
			burstAdvice: new WeakMap(),
			warnedReconcile: !1,
			font: new Set(),
			session: {
				styleMap: new Map(),
				styleCache: new WeakMap(),
				nodeMap: new Map()
			}
		};
	});
	function Et(t) {
		let e = t.match(/url\((['"]?)(.*?)(\1)\)/);
		if (!e) return null;
		let n = e[2].trim();
		return n.startsWith("#") ? null : n;
	}
	function Yt(t, e = 1) {
		let n = t.match(/^\s*-?(?:webkit-)?image-set\(([\s\S]*)\)\s*$/i);
		if (!n) return null;
		let o = [];
		for (let s of n[1].split(",")) {
			let i = s.match(/url\((['"]?)(.*?)(\1)\)/);
			if (!i) continue;
			let a = s.match(/type\(\s*["']([^"']+)["']\s*\)/i);
			if (a && !Kr.test(a[1].trim())) continue;
			let c = s.match(/(\d+(?:\.\d+)?)\s*(x|dpi|dppx)/i), u = 1;
			if (c) {
				let l = parseFloat(c[1]);
				u = /dpi/i.test(c[2]) ? l / 96 : l;
			}
			o.push({
				url: i[2].trim(),
				dppx: u
			});
		}
		return o.length ? (o.sort((s, i) => s.dppx - i.dppx), (o.find((s) => s.dppx >= e) || o[o.length - 1]).url) : null;
	}
	function De(t) {
		if (!t || t === "none") return "";
		let e = t.replace(/translate[XY]?\([^)]*\)/g, "");
		return e = e.replace(/matrix\(([^)]+)\)/g, (n, o) => {
			let r = o.split(",").map((s) => s.trim());
			return r.length !== 6 ? `matrix(${o})` : (r[4] = "0", r[5] = "0", `matrix(${r.join(", ")})`);
		}), e = e.replace(/matrix3d\(([^)]+)\)/g, (n, o) => {
			let r = o.split(",").map((s) => s.trim());
			return r.length !== 16 ? `matrix3d(${o})` : (r[12] = "0", r[13] = "0", `matrix3d(${r.join(", ")})`);
		}), e.trim().replace(/\s{2,}/g, " ");
	}
	function St(t) {
		if (/%[0-9A-Fa-f]{2}/.test(t)) return t;
		try {
			return encodeURI(t);
		} catch {
			return t;
		}
	}
	function He(t, e) {
		if (!t || /^(data|blob|about|#)/i.test(t.trim())) return t;
		try {
			let n = e || typeof document < "u" && (document.baseURI || document.location?.href) || "http://localhost/";
			return new URL(t, n).href;
		} catch {
			return t;
		}
	}
	var Kr;
	var Kt = st(() => {
		"use strict";
		Kr = /^image\/(jpeg|jpg|png|gif|webp|avif|apng|svg\+xml|bmp|x-icon|vnd\.microsoft\.icon)\s*(;|$)/i;
	});
	function Qr(t = "[snapDOM]", { ttlMs: e = 3e5, maxEntries: n = 12 } = {}) {
		let o = new Map(), r = 0;
		function s(i, a, c) {
			if (r >= n) return;
			let u = Date.now();
			(o.get(a) || 0) > u || (o.set(a, u + e), r++, i === "warn" && console && console.warn ? console.warn(`${t} ${c}`) : console && console.error && console.error(`${t} ${c}`));
		}
		return {
			warnOnce(i, a) {
				s("warn", i, a);
			},
			errorOnce(i, a) {
				s("error", i, a);
			},
			reset() {
				o.clear(), r = 0;
			}
		};
	}
	function Zr(t) {
		return /^data:|^blob:|^about:blank$/i.test(t);
	}
	function Jr(t, e) {
		try {
			let n = typeof location < "u" && location.href ? location.href : "http://localhost/", o = e.includes("{url}") ? e.split("{url}")[0] : e, r = new URL(o || ".", n), s = new URL(t, n);
			if (s.origin === r.origin) return !0;
			let i = s.searchParams;
			if (i && (i.has("url") || i.has("target"))) return !0;
		} catch {}
		return !1;
	}
	function ti(t, e) {
		if (!e || Zr(t) || Jr(t, e)) return !1;
		try {
			let n = typeof location < "u" && location.href ? location.href : "http://localhost/", o = new URL(t, n);
			return typeof location < "u" ? o.origin !== location.origin : !0;
		} catch {
			return !!e;
		}
	}
	function ei(t, e) {
		if (!e) return t;
		if (e.includes("{url}")) return e.replace("{urlRaw}", St(t)).replace("{url}", encodeURIComponent(t));
		if (/[?&]url=?$/.test(e)) return `${e}${encodeURIComponent(t)}`;
		if (e.endsWith("?")) return `${e}url=${encodeURIComponent(t)}`;
		if (e.endsWith("/")) return `${e}${St(t)}`;
		return `${e}${e.includes("?") ? "&" : "?"}url=${encodeURIComponent(t)}`;
	}
	function On(t) {
		return new Promise((e, n) => {
			let o = new FileReader();
			o.onload = () => e(String(o.result || "")), o.onerror = () => n(new Error("read_failed")), o.readAsDataURL(t);
		});
	}
	function ni(t, e) {
		return [
			e.as || "blob",
			e.timeout ?? 3e3,
			e.useProxy || "",
			e.errorTTL ?? 8e3,
			t
		].join("|");
	}
	async function G(t, e = {}) {
		let n = e.as ?? "blob", o = e.timeout ?? 3e3, r = e.useProxy || "", s = e.errorTTL ?? 8e3, i = e.headers || {}, a = !!e.silent;
		if (/^data:/i.test(t)) try {
			if (n === "text") return {
				ok: !0,
				data: String(t),
				status: 200,
				url: t,
				fromCache: !1
			};
			if (n === "dataURL") return {
				ok: !0,
				data: String(t),
				status: 200,
				url: t,
				fromCache: !1,
				mime: String(t).slice(5).split(";")[0] || ""
			};
			let [, b = "", y = ""] = String(t).match(/^data:([^,]*),(.*)$/) || [], S = /;base64/i.test(b) ? atob(y) : decodeURIComponent(y), g = new Uint8Array([...S].map((v) => v.charCodeAt(0))), x = new Blob([g], { type: (b || "").split(";")[0] || "" });
			return {
				ok: !0,
				data: x,
				status: 200,
				url: t,
				fromCache: !1,
				mime: x.type || ""
			};
		} catch {
			return {
				ok: !1,
				data: null,
				status: 0,
				url: t,
				fromCache: !1,
				reason: "special_url_error"
			};
		}
		if (/^blob:/i.test(t)) try {
			let b = await fetch(t);
			if (!b.ok) return {
				ok: !1,
				data: null,
				status: b.status,
				url: t,
				fromCache: !1,
				reason: "http_error"
			};
			let y = await b.blob(), w = y.type || b.headers.get("content-type") || "";
			return n === "dataURL" ? {
				ok: !0,
				data: await On(y),
				status: b.status,
				url: t,
				fromCache: !1,
				mime: w
			} : n === "text" ? {
				ok: !0,
				data: await y.text(),
				status: b.status,
				url: t,
				fromCache: !1,
				mime: w
			} : {
				ok: !0,
				data: y,
				status: b.status,
				url: t,
				fromCache: !1,
				mime: w
			};
		} catch {
			return {
				ok: !1,
				data: null,
				status: 0,
				url: t,
				fromCache: !1,
				reason: "network"
			};
		}
		if (/^about:blank$/i.test(t)) return n === "dataURL" ? {
			ok: !0,
			data: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==",
			status: 200,
			url: t,
			fromCache: !1,
			mime: "image/png"
		} : {
			ok: !0,
			data: n === "text" ? "" : new Blob([]),
			status: 200,
			url: t,
			fromCache: !1
		};
		let c = ni(t, {
			as: n,
			timeout: o,
			useProxy: r,
			errorTTL: s
		}), u = pe.get(c);
		if (u && u.until > Date.now()) return {
			...u.result,
			fromCache: !0
		};
		u && pe.delete(c);
		let l = ze.get(c);
		if (l) return l;
		let d = ti(t, r) ? ei(t, r) : t, f = e.credentials;
		if (!f) try {
			let b = typeof location < "u" && location.href ? location.href : "http://localhost/", y = new URL(t, b);
			f = typeof location < "u" && y.origin === location.origin ? "include" : "omit";
		} catch {
			f = "omit";
		}
		let h = new AbortController(), m = setTimeout(() => h.abort("timeout"), o), p = (async () => {
			try {
				let b = await fetch(d, {
					signal: h.signal,
					credentials: f,
					headers: i
				});
				if (!b.ok) {
					let S = {
						ok: !1,
						data: null,
						status: b.status,
						url: d,
						fromCache: !1,
						reason: "http_error"
					};
					if (s > 0 && pe.set(c, {
						until: Date.now() + s,
						result: S
					}), !a) {
						let g = `${b.status} ${b.statusText || ""}`.trim();
						Wn.warnOnce(`http:${b.status}:${n}:${new URL(t, location?.href ?? "http://localhost/").origin}`, `HTTP error ${g} while fetching ${n} ${t}`);
					}
					return e.onError && e.onError(S), S;
				}
				if (n === "text") return {
					ok: !0,
					data: await b.text(),
					status: b.status,
					url: d,
					fromCache: !1
				};
				let y = await b.blob(), w = y.type || b.headers.get("content-type") || "";
				return n === "dataURL" ? {
					ok: !0,
					data: await On(y),
					status: b.status,
					url: d,
					fromCache: !1,
					mime: w
				} : {
					ok: !0,
					data: y,
					status: b.status,
					url: d,
					fromCache: !1,
					mime: w
				};
			} catch (b) {
				let y = b && typeof b == "object" && "name" in b && b.name === "AbortError" ? String(b.message || "").includes("timeout") ? "timeout" : "abort" : "network", w = {
					ok: !1,
					data: null,
					status: 0,
					url: d,
					fromCache: !1,
					reason: y
				};
				if (!/^blob:/i.test(t) && s > 0 && pe.set(c, {
					until: Date.now() + s,
					result: w
				}), !a) {
					let S = `${y}:${n}:${new URL(t, location?.href ?? "http://localhost/").origin}`, g = y === "timeout" ? `Timeout after ${o}ms. Consider increasing timeout or using a proxy for ${t}` : y === "abort" ? `Request aborted while fetching ${n} ${t}` : `Network/CORS issue while fetching ${n} ${t}. A proxy may be required`;
					Wn.errorOnce(S, g);
				}
				return e.onError && e.onError(w), w;
			} finally {
				clearTimeout(m), ze.delete(c);
			}
		})();
		return ze.set(c, p), p;
	}
	var Wn;
	var ze;
	var pe;
	var vt = st(() => {
		"use strict";
		Kt();
		Wn = Qr("[snapDOM]", {
			ttlMs: 18e4,
			maxEntries: 10
		}), ze = new Map(), pe = new Map();
	});
	async function $t(t, e = {}) {
		if (/^((repeating-)?(linear|radial|conic)-gradient)\(/i.test(t) || t.trim() === "none") return t;
		let o = Yt(t, typeof devicePixelRatio < "u" && devicePixelRatio || 1) ?? Et(t);
		if (!o) return t;
		let s = St(He(o)), i = (e.useProxy || "") + "|" + s;
		if (C.background.has(i)) {
			let a = C.background.get(i);
			return a ? `url("${a}")` : "none";
		}
		try {
			let a = await G(s, {
				as: "dataURL",
				useProxy: e.useProxy
			});
			return a.ok ? (C.background.set(i, a.data), `url("${a.data}")`) : (C.background.set(i, null), "none");
		} catch {
			return C.background.set(i, null), "none";
		}
	}
	var Bn = st(() => {
		"use strict";
		rt();
		Kt();
		vt();
	});
	function ye(t) {
		if (t = String(t).toLowerCase(), ge.has(t)) {
			let s = {};
			return C.defaultStyle.set(t, s), s;
		}
		if (C.defaultStyle.has(t)) return C.defaultStyle.get(t);
		let e = document.getElementById("snapdom-sandbox");
		e || (e = document.createElement("div"), e.id = "snapdom-sandbox", e.setAttribute("data-snapdom-sandbox", "true"), e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.left = "-9999px", e.style.top = "-9999px", e.style.width = "0px", e.style.height = "0px", e.style.overflow = "hidden", document.body.appendChild(e));
		let n = document.createElement(t);
		n.style.all = "initial", e.appendChild(n);
		let o = getComputedStyle(n), r = {};
		for (let s of o) {
			if (Qt(s)) continue;
			r[s] = o.getPropertyValue(s);
		}
		return e.removeChild(n), C.defaultStyle.set(t, r), r;
	}
	function Qt(t) {
		let e = Un.get(t);
		if (e === void 0) {
			let n = String(t).toLowerCase();
			e = si.has(n) || ii.test(n) || ri.test(n), Un.set(t, e);
		}
		return e;
	}
	function be(t, e) {
		return !ci.has(t) && (e === "inline" || ai.has(t) || Dn.has(t));
	}
	function je(t, e, n) {
		let o = (e.display || "").toLowerCase();
		if (o === "inline" || Dn.has(t)) return !1;
		if (n) return !0;
		if ((e.float || "none").toLowerCase() !== "none") return !1;
		let s = (e.position || "static").toLowerCase();
		return s === "absolute" || s === "fixed" ? !1 : !ui.has(o);
	}
	function Wt(t, e, n = !0, o = !1) {
		if (e = String(e || "").toLowerCase(), ge.has(e)) return "";
		let r = [], s = ye(e), i = (t.display || "").toLowerCase(), a = i === "inline", c = be(e, i), u = t["text-wrap-mode"] || t["white-space"] || "", l = c && n && !a && (u === "nowrap" || u === "pre"), d = c && n && !l, f = !1;
		for (let h in t) {
			if (Qt(h)) continue;
			let m = t[h];
			if (d) {
				if (li.has(h)) continue;
				if (fi.has(h)) {
					m && m !== s[h] && (r.push(`${h}:${m}`), m !== "auto" && (f = !0));
					continue;
				}
			}
			if (m && m !== s[h]) {
				if (!l && (h === "width" || h === "inline-size") && m.endsWith("px") && m.includes(".")) {
					let p = parseFloat(m);
					if (Number.isFinite(p)) {
						r.push(`${h}:${Math.ceil(p * 16) / 16}px`);
						continue;
					}
				}
				r.push(`${h}:${m}`);
			}
		}
		if (d && !a && !o && !f) {
			let h = t.width;
			h && h !== "auto" && h !== s.width && r.push(`min-width:${h}`);
		}
		return r.sort(), r.join(";");
	}
	function qe(t) {
		let e = new Set();
		return t.nodeType !== Node.ELEMENT_NODE && t.nodeType !== Node.DOCUMENT_FRAGMENT_NODE ? [] : (t.tagName && e.add(t.tagName.toLowerCase()), typeof t.querySelectorAll == "function" && t.querySelectorAll("*").forEach((n) => e.add(n.tagName.toLowerCase())), Array.from(e));
	}
	function Xe(t) {
		let e = new Map();
		for (let o of t) {
			let r = ye(o);
			if (!r) continue;
			let s = Object.entries(r).map(([i, a]) => `${i}:${a};`).sort().join("");
			s && (e.has(s) || e.set(s, []), e.get(s).push(o));
		}
		let n = "";
		for (let [o, r] of e.entries()) n += `${r.join(",")} { ${o} }
`;
		return n;
	}
	function Ge(t) {
		let e = Array.from(new Set(t.values())).filter(Boolean).sort(), n = new Map(), o = 1;
		for (let r of e) n.set(r, `c${o++}`);
		return n;
	}
	function di(t) {
		try {
			let e = t?.ownerDocument;
			if (!e) return typeof window < "u" ? window : null;
			let n = e.defaultView;
			if (n && typeof n.getComputedStyle == "function") return n;
			if (typeof window < "u" && window.frames) for (let o = 0; o < window.frames.length; o++) try {
				if (window.frames[o]?.document === e) return window.frames[o];
			} catch {}
		} catch {}
		return typeof window < "u" ? window : null;
	}
	function N(t, e = null) {
		let n = () => {
			let s = {
				length: 0,
				getPropertyValue: () => "",
				item: () => ""
			};
			return s[Symbol.iterator] = function* () {}, s;
		};
		if (t?.nodeType !== 1) {
			let s = typeof window < "u" ? window : null;
			if (s && typeof s.getComputedStyle == "function") try {
				return s.getComputedStyle(t, e) || n();
			} catch {
				return n();
			}
			return n();
		}
		let o = C.computedStyle.get(t);
		o || (o = new Map(), C.computedStyle.set(t, o));
		let r = o.get(e);
		if (!r) {
			let s = di(t), i = null;
			try {
				i = s && typeof s.getComputedStyle == "function" ? s.getComputedStyle(t, e) : null;
			} catch {}
			if (!i && typeof window < "u" && typeof window.getComputedStyle == "function") try {
				t.ownerDocument === document && (i = window.getComputedStyle(t, e));
			} catch {}
			r = i || n(), o.set(e, r);
		}
		return r;
	}
	function we(t) {
		let e = {};
		for (let n of t) e[n] = t.getPropertyValue(n);
		for (let n of hi) {
			let o = e[`border-${n}-style`], r = e[`border-${n}-width`];
			(o === "none" || o === "hidden" || r === "0px") && (delete e[`border-${n}-style`], delete e[`border-${n}-width`], delete e[`border-${n}-color`]);
		}
		return e;
	}
	function Ot(t) {
		let e = [], n = 0, o = 0;
		for (let r = 0; r < t.length; r++) {
			let s = t[r];
			s === "(" && n++, s === ")" && n--, s === "," && n === 0 && (e.push(t.slice(o, r).trim()), o = r + 1);
		}
		return e.push(t.slice(o).trim()), e;
	}
	var me;
	var ge;
	var ri;
	var ii;
	var si;
	var Un;
	var ai;
	var Dn;
	var ci;
	var li;
	var fi;
	var ui;
	var hi;
	var Zt = st(() => {
		"use strict";
		rt();
		me = new Set([
			"meta",
			"script",
			"noscript",
			"title",
			"link",
			"template"
		]), ge = new Set([
			"meta",
			"link",
			"style",
			"title",
			"noscript",
			"script",
			"template",
			"g",
			"defs",
			"use",
			"marker",
			"mask",
			"clipPath",
			"pattern",
			"symbol",
			"path",
			"polygon",
			"polyline",
			"line",
			"circle",
			"ellipse",
			"rect",
			"filter",
			"lineargradient",
			"radialgradient",
			"stop"
		]);
		ri = /(?:^|-)(animation|transition)(?:-|$)/i, ii = /^(--.+|view-timeline|scroll-timeline|animation-trigger|offset-|position-try|app-region|interactivity|overlay|view-transition|-webkit-locale|-webkit-user-(?:drag|modify)|-webkit-tap-highlight-color|-webkit-text-security)$/i, si = new Set([
			"cursor",
			"pointer-events",
			"touch-action",
			"user-select",
			"print-color-adjust",
			"speak",
			"reading-flow",
			"reading-order",
			"anchor-name",
			"anchor-scope",
			"container-name",
			"container-type",
			"timeline-scope",
			"zoom",
			"stroke-color"
		]), Un = new Map();
		ai = new Set([
			"span",
			"small",
			"em",
			"strong",
			"b",
			"i",
			"u",
			"s",
			"code",
			"cite",
			"mark",
			"sub",
			"sup"
		]), Dn = new Set([
			"table",
			"thead",
			"tbody",
			"tfoot",
			"tr",
			"td",
			"th"
		]), ci = new Set([
			"img",
			"video",
			"canvas",
			"svg",
			"iframe",
			"embed",
			"object",
			"input",
			"textarea",
			"select"
		]), li = new Set([
			"width",
			"max-width",
			"inline-size",
			"max-inline-size"
		]), fi = new Set(["min-width", "min-inline-size"]);
		ui = new Set([
			"inline-block",
			"inline-flex",
			"inline-grid",
			"inline-table",
			"inline-flow-root",
			"table"
		]);
		hi = [
			"top",
			"right",
			"bottom",
			"left"
		];
	});
	function Rt(t, { fast: e = !1 } = {}) {
		if (e) return t();
		"requestIdleCallback" in window ? requestIdleCallback(t, { timeout: 50 }) : setTimeout(t, 1);
	}
	function mt(t = 1e3) {
		return typeof requestAnimationFrame != "function" || typeof document < "u" && document.visibilityState === "hidden" ? Promise.resolve() : new Promise((e) => {
			let n = !1, o = () => {
				n || (n = !0, e());
			};
			try {
				requestAnimationFrame(o);
			} catch {
				o();
				return;
			}
			setTimeout(o, t);
		});
	}
	function Ye() {
		if (typeof navigator > "u") return !1;
		if (navigator.userAgentData) return navigator.userAgentData.platform === "iOS";
		let t = navigator.userAgent || "", e = /iPhone|iPad|iPod/.test(t), n = navigator.maxTouchPoints > 2 && /Macintosh/.test(t);
		return e || n;
	}
	function K() {
		if (typeof navigator > "u") return !1;
		let t = navigator.userAgent || "", e = t.toLowerCase(), n = e.includes("safari") && !e.includes("chrome") && !e.includes("crios") && !e.includes("fxios") && !e.includes("android"), o = /applewebkit/i.test(t), r = /mobile/i.test(t), s = !/safari/i.test(t), i = o && r && s, a = /(micromessenger|wxwork|wecom|windowswechat|macwechat)/i.test(t), c = /(baiduboxapp|baidubrowser|baidusearch|baiduboxlite)/i.test(e), u = /ipad|iphone|ipod/.test(e) && o;
		return n || i || a || c || u;
	}
	function Hn() {
		if (typeof navigator > "u") return !1;
		let t = (navigator.userAgent || "").toLowerCase();
		return t.includes("firefox") || t.includes("fxios");
	}
	var Ct = st(() => {
		"use strict";
	});
	function _$1(t, e, n) {
		let o = t && typeof t == "object" && (t.options || t);
		o && o.debug && (n !== void 0 ? console.warn("[snapdom]", e, n) : console.warn("[snapdom]", e));
	}
	var Ke = st(() => {
		"use strict";
	});
	var at = st(() => {
		"use strict";
		Bn();
		Zt();
		Ct();
		Kt();
		Ke();
	});
	var Nr = {};
	Gt(Nr, {
		decodeSvgFromDataURL: () => We,
		encodeSvgToDataURL: () => Oe,
		fixSafariShadows: () => Be,
		toCanvas: () => Pt
	});
	function va(t) {
		try {
			let e = t.match(/<svg\b[^>]*>/i);
			if (!e) return t;
			let n = e[0], o = parseFloat((n.match(/\bwidth="([\d.]+)/i) || [])[1]), r = parseFloat((n.match(/\bheight="([\d.]+)/i) || [])[1]);
			if (!Number.isFinite(o) || !Number.isFinite(r) || o <= 0 || r <= 0) return t;
			let s = Math.min(1, At / o, At / r, Math.sqrt(Sn / (o * r)));
			if (s >= 1) return t;
			let i = Math.max(1, Math.floor(o * s)), a = Math.max(1, Math.floor(r * s));
			return console.warn(`[snapDOM] Capture ${Math.round(o)}\xD7${Math.round(r)}px exceeds the browser image-decode limit (${At}px/side); downscaling to ${i}\xD7${a}px. Lower \`scale\` or set \`width\`/\`height\` to control output size.`), t.replace(n, n.replace(/(\bwidth=")[\d.]+/i, `$1${i}`).replace(/(\bheight=")[\d.]+/i, `$1${a}`));
		} catch {
			return t;
		}
	}
	function Ca(t, e) {
		let n = [
			"x",
			"y",
			"width",
			"height"
		].map((v) => Number(e?.[v]));
		if (!n.every(Number.isFinite) || n[2] <= 0 || n[3] <= 0) throw new RangeError("[snapdom] canvas crop requires finite x/y and positive width/height");
		let o = t.match(/<svg\b[^>]*>/i);
		if (!o) throw new Error("[snapdom] cannot crop a non-SVG capture");
		let r = o[0], s = (r.match(/\bviewBox="([^"]+)"/i) || [])[1], i = String(s || "").trim().split(/[\s,]+/).map(Number);
		if (i.length !== 4 || !i.every(Number.isFinite) || i[2] <= 0 || i[3] <= 0) throw new Error("[snapdom] cannot crop an SVG without a finite viewBox");
		let [a, c, u, l] = i, d = Math.max(a, n[0]), f = Math.max(c, n[1]), h = Math.min(a + u, n[0] + n[2]), m = Math.min(c + l, n[1] + n[3]);
		if (!(h > d) || !(m > f)) throw new RangeError("[snapdom] canvas crop does not intersect the SVG viewBox");
		let p = parseFloat((r.match(/\bwidth="([\d.]+)/i) || [])[1]), b = parseFloat((r.match(/\bheight="([\d.]+)/i) || [])[1]), y = Number.isFinite(p) && p > 0 ? p / u : 1, w = Number.isFinite(b) && b > 0 ? b / l : 1, S = Math.max(1, (h - d) * y), g = Math.max(1, (m - f) * w), x = r.replace(/(\bwidth=")[^"]*/i, `$1${S}`).replace(/(\bheight=")[^"]*/i, `$1${g}`).replace(/(\bviewBox=")[^"]*/i, `$1${d} ${f} ${h - d} ${m - f}`);
		return t.replace(r, x);
	}
	function Rr(t) {
		return typeof t == "string" && /^data:image\/svg\+xml/i.test(t);
	}
	function We(t) {
		let e = t.indexOf(",");
		return e >= 0 ? decodeURIComponent(t.slice(e + 1)) : "";
	}
	function Aa(t) {
		let e = t.indexOf(",");
		if (e < 0) return "";
		let n = t.slice(e + 1, e + 1201).replace(/%[0-9A-Fa-f]?$/, "");
		try {
			return decodeURIComponent(n);
		} catch {
			return "";
		}
	}
	function Oe(t) {
		return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`;
	}
	function Tr(t) {
		let e = [], n = "", o = 0;
		for (let r = 0; r < t.length; r++) {
			let s = t[r];
			s === "(" && o++, s === ")" && (o = Math.max(0, o - 1)), s === ";" && o === 0 ? (e.push(n), n = "") : n += s;
		}
		return n.trim() && e.push(n), e.map((r) => r.trim()).filter(Boolean);
	}
	function ka(t) {
		let e = [], n = "", o = 0;
		for (let s = 0; s < t.length; s++) {
			let i = t[s];
			i === "(" && o++, i === ")" && (o = Math.max(0, o - 1)), i === "," && o === 0 ? (e.push(n.trim()), n = "") : n += i;
		}
		n.trim() && e.push(n.trim());
		let r = [];
		for (let s of e) {
			if (/\binset\b/i.test(s)) continue;
			let [a = "0px", c = "0px", u = "0px"] = s.match(/-?\d+(?:\.\d+)?px/gi) || [];
			u = `${parseFloat(u) / 2}px`;
			let l = s.replace(/-?\d+(?:\.\d+)?px/gi, "").replace(/\binset\b/gi, "").trim().replace(/\s{2,}/g, " "), d = !!l && l !== ",";
			r.push(`drop-shadow(${a} ${c} ${u}${d ? ` ${l}` : ""})`);
		}
		return r.join(" ");
	}
	function Pr(t) {
		let e = Tr(t), n = null, o = null, r = null, s = [];
		for (let a of e) {
			let c = a.indexOf(":");
			if (c < 0) continue;
			let u = a.slice(0, c).trim().toLowerCase(), l = a.slice(c + 1).trim();
			u === "box-shadow" ? r = l : u === "filter" ? n = l : u === "-webkit-filter" ? o = l : s.push([u, l]);
		}
		if (r) {
			let a = ka(r);
			a && (n = n ? `${n} ${a}` : a, o = o ? `${o} ${a}` : a);
		}
		let i = [...s];
		return n && i.push(["filter", n]), o && i.push(["-webkit-filter", o]), i.map(([a, c]) => `${a}:${c}`).join(";");
	}
	function Ma(t) {
		return t.replace(/([^{}]+)\{([^}]*)\}/g, (e, n, o) => `${n}{${Pr(o)}}`);
	}
	function Fa(t) {
		return t = t.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (e, n) => e.replace(n, Ma(n))), t = t.replace(/style=(['"])([\s\S]*?)\1/gi, (e, n, o) => `style=${n}${Pr(o)}${n}`), t;
	}
	function Ea() {
		return _e || (_e = (async () => {
			try {
				let t = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"8\" height=\"20\"><foreignObject width=\"8\" height=\"20\"><div xmlns=\"http://www.w3.org/1999/xhtml\" style=\"width:4px;height:4px;margin-top:8px;background:#000;box-shadow:0 8px 0 0 #000\"></div></foreignObject></svg>", e = new Image();
				e.decoding = "sync", e.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`, await e.decode();
				let n = document.createElement("canvas");
				n.width = 8, n.height = 20;
				let o = n.getContext("2d", { willReadFrequently: !0 });
				o.drawImage(e, 0, 0);
				let r = o.getImageData(2, 18, 1, 1).data[3] > 128, s = o.getImageData(2, 2, 1, 1).data[3] > 128;
				return {
					native: r || s,
					flippedY: s && !r
				};
			} catch {
				return {
					native: !1,
					flippedY: !1
				};
			}
		})(), _e);
	}
	function $a(t) {
		let e = [], n = 0, o = 0;
		for (let r = 0; r < t.length; r++) {
			let s = t[r];
			s === "(" ? n++ : s === ")" ? n = Math.max(0, n - 1) : s === "," && n === 0 && (e.push(t.slice(o, r)), o = r + 1);
		}
		return e.push(t.slice(o)), e.map((r) => {
			let s = 0, i = 0, a = "", c = 0;
			for (; c < r.length;) {
				let u = r[c];
				if (u === "(" ? s++ : u === ")" && (s = Math.max(0, s - 1)), s === 0 && (c === 0 || r[c - 1] === " ")) {
					let l = /^-?\d*\.?\d+px/.exec(r.slice(c));
					if (l) {
						i++, a += i === 2 ? `${-parseFloat(l[0])}px` : l[0], c += l[0].length;
						continue;
					}
				}
				a += u, c++;
			}
			return a;
		}).join(",");
	}
	function Ra(t, e) {
		let n = (o) => Tr(o).map((r) => {
			let s = r.indexOf(":");
			if (s < 0) return r;
			let i = r.slice(0, s).trim().toLowerCase();
			return i === "text-shadow" || e && i === "box-shadow" ? `${i}:${$a(r.slice(s + 1))}` : r;
		}).join(";");
		return t = t.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (o, r) => o.replace(r, r.replace(/([^{}]+)\{([^}]*)\}/g, (s, i, a) => `${i}{${n(a)}}`))), t = t.replace(/style=(['"])([\s\S]*?)\1/gi, (o, r, s) => `style=${r}${n(s)}${r}`), t;
	}
	async function Be(t) {
		if (!/(?:box-shadow|text-shadow)\s*:[^;"}]*px/i.test(t)) return {
			svg: t,
			naturalOnly: !1
		};
		let { native: n, flippedY: o } = await Ea();
		try {
			let r = t;
			return n || (r = Fa(r)), o && (r = Ra(r, n)), {
				svg: r,
				naturalOnly: !0
			};
		} catch {
			return {
				svg: t,
				naturalOnly: !0
			};
		}
	}
	async function Ta(t, e) {
		t.setAttribute("data-snapdom-internal", ""), t.style.cssText = "position:fixed;left:-99999px;top:-99999px;pointer-events:none", document.body.appendChild(t);
		try {
			let n = document.createElement("canvas");
			n.width = 16, n.height = 16;
			let o = () => new Promise((i) => {
				requestAnimationFrame(i), setTimeout(i, 50);
			}), r = n.getContext("2d", { willReadFrequently: !0 });
			if (!r) {
				await o(), await o();
				return;
			}
			let s = performance.now() + (e ? 600 : 150);
			for (;;) {
				r.clearRect(0, 0, 16, 16);
				try {
					r.drawImage(t, 0, 0, 16, 16);
				} catch {
					return;
				}
				let i = r.getImageData(0, 0, 16, 16).data, a = !1;
				for (let c = 3; c < i.length; c += 4) if (i[c] > 0) {
					a = !0;
					break;
				}
				if (a || performance.now() > s) return;
				await o();
			}
		} finally {
			try {
				t.remove();
			} catch {}
		}
	}
	async function Pt(t, e) {
		let { width: n, height: o, scale: r = 1, dpr: s = 1, meta: i = {}, backgroundColor: a, crop: c = null } = e, u = t, l = !1, d = !1;
		if (c && !Rr(t)) throw new RangeError("[snapdom] canvas crop requires an SVG capture payload");
		if (Rr(t)) {
			let F = (Aa(t).match(/<svg\b[^>]*>/i) || [])[0] || "", E = parseFloat((F.match(/\bwidth="([\d.]+)/i) || [])[1]), R = parseFloat((F.match(/\bheight="([\d.]+)/i) || [])[1]), W = Number.isFinite(E) && Number.isFinite(R) && E > 0 && R > 0 && Math.min(1, At / E, At / R, Math.sqrt(Sn / (E * R))) < 1;
			if (c || W || K()) try {
				let T = We(t);
				if (c && (T = Ca(T, c)), K()) {
					let I = await Be(T);
					T = I.svg, l = I.naturalOnly, d = /@font-face|data:image\//i.test(T);
				}
				(W || c) && (T = va(T)), u = Oe(T);
			} catch (T) {
				if (c) throw T;
				u = t;
			}
		}
		let f = new Image();
		f.loading = "eager", f.decoding = "sync", f.crossOrigin = "anonymous", f.src = u, await f.decode(), K() && await Ta(f, d);
		let h = f.naturalWidth, m = f.naturalHeight, p = c ? h : Number.isFinite(i.vbW) ? i.vbW : Number.isFinite(i.w0) ? i.w0 : h, b = c ? m : Number.isFinite(i.vbH) ? i.vbH : Number.isFinite(i.h0) ? i.h0 : m, y, w, S = Number.isFinite(n), g = Number.isFinite(o);
		if (S && g) y = Math.max(1, n), w = Math.max(1, o);
		else if (S) {
			let F = n / Math.max(1, p);
			y = n, w = b * F;
		} else if (g) {
			let F = o / Math.max(1, b);
			w = o, y = p * F;
		} else y = h, w = m;
		y = y * r, w = w * r;
		let x = y * s, v = w * s, k = Math.max(x / At, v / At, Math.sqrt(x * v / Sn));
		k > 1 && (console.warn(`[snapDOM] Output ${Math.round(x)}\xD7${Math.round(v)}px exceeds the browser canvas limit (${At}px/side); downscaling. Lower \`scale\`/\`dpr\` or set \`width\`/\`height\`.`), y /= k, w /= k);
		let A = document.createElement("canvas");
		A.width = y * s, A.height = w * s, A.style.width = `${y}px`, A.style.height = `${w}px`;
		let M = A.getContext("2d");
		if (s !== 1 && M.scale(s, s), a && (M.save(), M.fillStyle = a, M.fillRect(0, 0, y, w), M.restore()), l && (Math.round(y * s) !== h || Math.round(w * s) !== m)) {
			let F = document.createElement("canvas");
			F.width = h, F.height = m, F.getContext("2d").drawImage(f, 0, 0), M.drawImage(F, 0, 0, y, w);
		} else M.drawImage(f, 0, 0, y, w);
		return A;
	}
	var At;
	var Sn;
	var _e;
	var qt = st(() => {
		"use strict";
		Ct();
		At = 16384, Sn = 268435456;
		_e = null;
	});
	var Ue = {};
	Gt(Ue, { rasterize: () => vn });
	async function vn(t, e) {
		let n = await Pt(t, e), o = await new Promise((s) => {
			let i = () => s(n.toDataURL(`image/${e.format}`, e.quality));
			try {
				n.toBlob((a) => {
					if (!a) return i();
					let c = new FileReader();
					c.onload = () => s(String(c.result || "")), c.onerror = i, c.readAsDataURL(a);
				}, `image/${e.format}`, e.quality);
			} catch {
				i();
			}
		}), r = new Image();
		return r.src = o, await r.decode(), r.style.width = `${n.width / e.dpr}px`, r.style.height = `${n.height / e.dpr}px`, r;
	}
	var ae = st(() => {
		"use strict";
		qt();
	});
	var Cn = {};
	Gt(Cn, {
		toImg: () => Pa,
		toSvg: () => Pa
	});
	async function Pa(t, e) {
		let { scale: n = 1, width: o, height: r, meta: s = {} } = e, i = Number.isFinite(o), a = Number.isFinite(r), c = Number.isFinite(n) && n !== 1 || i || a;
		if (K() && c) try {
			let { svg: l } = await Be(We(t)), d = (l.match(/<svg\b[^>]*>/i) || [])[0] || "", f = parseFloat((d.match(/\bwidth="([\d.]+)/i) || [])[1]), h = parseFloat((d.match(/\bheight="([\d.]+)/i) || [])[1]);
			if (!Number.isFinite(f) || !Number.isFinite(h)) throw new Error("svg without dimensions");
			let m = Number.isFinite(s.vbW) ? s.vbW : Number.isFinite(s.w0) ? s.w0 : f, p = Number.isFinite(s.vbH) ? s.vbH : Number.isFinite(s.h0) ? s.h0 : h, b, y;
			i && a ? (b = o, y = r) : i ? (b = o, y = Math.round(p * (o / Math.max(1, m)))) : a ? (y = r, b = Math.round(m * (r / Math.max(1, p)))) : (b = Math.round(f * n), y = Math.round(h * n));
			let w = l.replace(/width="[^"]*"/, `width="${b}"`).replace(/height="[^"]*"/, `height="${y}"`), S = new Image();
			return S.decoding = "sync", S.loading = "eager", S.src = Oe(w), await S.decode(), S.style.width = `${b}px`, S.style.height = `${y}px`, S;
		} catch (l) {
			return _$1(e, "safari vector toImg failed, falling back to PNG", l), vn(t, {
				...e,
				format: "png",
				quality: 1,
				meta: s
			});
		}
		let u = new Image();
		if (u.decoding = "sync", u.loading = "eager", u.src = t, await u.decode(), i && a) u.style.width = `${o}px`, u.style.height = `${r}px`;
		else if (i) {
			let l = Number.isFinite(s.vbW) ? s.vbW : Number.isFinite(s.w0) ? s.w0 : u.naturalWidth, d = Number.isFinite(s.vbH) ? s.vbH : Number.isFinite(s.h0) ? s.h0 : u.naturalHeight, f = o / Math.max(1, l);
			u.style.width = `${o}px`, u.style.height = `${Math.round(d * f)}px`;
		} else if (a) {
			let l = Number.isFinite(s.vbW) ? s.vbW : Number.isFinite(s.w0) ? s.w0 : u.naturalWidth, d = Number.isFinite(s.vbH) ? s.vbH : Number.isFinite(s.h0) ? s.h0 : u.naturalHeight, f = r / Math.max(1, d);
			u.style.height = `${r}px`, u.style.width = `${Math.round(l * f)}px`;
		} else {
			let l = Math.round(u.naturalWidth * n), d = Math.round(u.naturalHeight * n);
			if (u.style.width = `${l}px`, u.style.height = `${d}px`, typeof t == "string" && t.startsWith("data:image/svg+xml")) try {
				let h = decodeURIComponent(t.split(",")[1]).replace(/width="[^"]*"/, `width="${l}"`).replace(/height="[^"]*"/, `height="${d}"`);
				t = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(h)}`, u.src = t;
			} catch (f) {
				_$1(e, "SVG width/height patch in toImg failed", f);
			}
		}
		return u;
	}
	var An = st(() => {
		"use strict";
		at();
		ae();
		qt();
	});
	var Lr = {};
	Gt(Lr, { toBlob: () => kn });
	async function kn(t, e) {
		let n = e.type;
		if (n === "svg") {
			let r = decodeURIComponent(t.split(",")[1]);
			return new Blob([r], { type: "image/svg+xml" });
		}
		let o = await Pt(t, e);
		return new Promise((r) => o.toBlob((s) => r(s), `image/${n}`, e.quality));
	}
	var Mn = st(() => {
		"use strict";
		qt();
	});
	var _r = {};
	Gt(_r, { download: () => Na });
	async function Ir(t, e) {
		let n = new File([t], e, { type: t.type });
		if (!navigator.canShare?.({ files: [n] })) return !1;
		try {
			await navigator.share({
				files: [n],
				title: e
			});
		} catch (o) {
			if (o.name !== "AbortError") return !1;
		}
		return !0;
	}
	async function Na(t, e) {
		let n = new Set([
			"png",
			"jpeg",
			"jpg",
			"webp",
			"svg"
		]), o = (e?.type || "").toLowerCase(), r = n.has(o) ? o : "", s = (e?.format || r || "").toLowerCase(), i = s === "jpg" ? "jpeg" : s || "png", a = e?.filename || `snapdom.${i}`, c = {
			...e || {},
			format: i,
			type: i
		};
		c.dpr = 1;
		let u = Ye();
		if (i === "svg") {
			let f = await kn(t, {
				...c,
				type: "svg"
			});
			if (u && await Ir(f, a)) return;
			let h = URL.createObjectURL(f), m = document.createElement("a");
			m.href = h, m.download = a, document.body.appendChild(m), m.click(), URL.revokeObjectURL(h), m.remove();
			return;
		}
		let l = await Pt(t, c);
		if (u) {
			let f = `image/${i}`, h = await new Promise((m) => l.toBlob(m, f, e?.quality));
			if (h && await Ir(h, a)) return;
		}
		let d = document.createElement("a");
		d.href = l.toDataURL(`image/${i}`, e?.quality), d.download = a, document.body.appendChild(d), d.click(), d.remove();
	}
	var Wr = st(() => {
		"use strict";
		Mn();
		qt();
		Ct();
	});
	at();
	at();
	rt();
	var Ze = new WeakMap();
	var Jt = new Map();
	var pi = 2e3;
	var Se = 0;
	function xe() {
		Se++, Jt.size > pi && Jt.clear();
	}
	var mi = "[data-snapdom-sandbox],[data-snapdom-internal],[data-snapdom]";
	function Qe(t) {
		let e = t && (t.nodeType === 1 ? t : t.parentElement);
		return !!(e && e.closest && e.closest(mi));
	}
	function Je(t) {
		for (let e of t) if (!Qe(e.target)) {
			if (e.type === "childList") {
				let n = !0;
				for (let o of e.addedNodes) if (!Qe(o)) {
					n = !1;
					break;
				}
				if (n) {
					for (let o of e.removedNodes) if (!Qe(o)) {
						n = !1;
						break;
					}
				}
				if (n) continue;
			}
			return !0;
		}
		return !1;
	}
	var zn = !1;
	function gi(t = document.documentElement) {
		if (zn) return;
		zn = !0;
		let e = (n) => {
			Je(n) && xe();
		};
		try {
			new MutationObserver(e).observe(t, {
				subtree: !0,
				childList: !0,
				characterData: !0,
				attributes: !0
			});
		} catch {}
		try {
			new MutationObserver(e).observe(document.head, {
				subtree: !0,
				childList: !0,
				characterData: !0,
				attributes: !0
			});
		} catch {}
		try {
			let n = document.fonts;
			n && (n.addEventListener?.("loadingdone", xe), n.ready?.then(() => xe()).catch(() => {}));
		} catch {}
	}
	var yi = [
		"mask",
		"mask-image",
		"-webkit-mask",
		"-webkit-mask-image",
		"mask-source",
		"mask-box-image-source",
		"mask-border-source",
		"-webkit-mask-box-image-source",
		"border-image",
		"border-image-source"
	];
	function tn(t) {
		let e = Ze.get(t);
		if (e && e.epoch === Se) {
			let n = e.snapshot && e.snapshot.__needsBgInline;
			if (n !== void 0) return n;
		}
		return !0;
	}
	function bi(t, e = {}) {
		let n = {}, o = e.excludeStyleProps;
		for (let d = 0; d < t.length; d++) {
			let f = t[d];
			if (Qt(f) || o && (o instanceof RegExp && o.test(f) || typeof o == "function" && o(f))) continue;
			let h = t.getPropertyValue(f);
			(f === "background-image" || f === "content") && h.includes("url(") && !h.includes("data:") && (h = "none"), n[f] = h;
		}
		for (let d of [
			"text-decoration-line",
			"text-decoration-color",
			"text-decoration-style",
			"text-decoration-thickness",
			"text-underline-offset",
			"text-decoration-skip-ink"
		]) if (!n[d]) try {
			let f = t.getPropertyValue(d);
			f && (n[d] = f);
		} catch {}
		for (let d of [
			"-webkit-text-stroke",
			"-webkit-text-stroke-width",
			"-webkit-text-stroke-color",
			"paint-order"
		]) if (!n[d]) try {
			let f = t.getPropertyValue(d);
			f && (n[d] = f);
		} catch {}
		if (e.embedFonts) {
			for (let f of [
				"font-feature-settings",
				"font-variation-settings",
				"font-kerning",
				"font-variant",
				"font-variant-ligatures",
				"font-optical-sizing"
			]) if (!n[f]) try {
				let h = t.getPropertyValue(f);
				h && (n[f] = h);
			} catch {}
		}
		try {
			(n["content-visibility"] || t.getPropertyValue("content-visibility")) === "hidden" && (n["content-visibility"] = "hidden");
		} catch {}
		let i = !1;
		{
			let d = t.getPropertyValue("background-image");
			if (d && d !== "none" && (i = !0), !i) {
				let f = t.getPropertyValue("background-color");
				f && f !== "rgba(0, 0, 0, 0)" && f !== "transparent" && (i = !0);
			}
			if (!i) for (let f of yi) {
				let h = t.getPropertyValue(f);
				if (h && h !== "none") {
					i = !0;
					break;
				}
			}
			if (!i) {
				let f = t.getPropertyValue("background");
				f && /url\s*\(/i.test(f) && (i = !0);
			}
		}
		Object.defineProperty(n, "__needsBgInline", {
			value: i,
			enumerable: !1
		});
		let a = parseFloat(t.getPropertyValue("border-top-width") || 0) || 0, c = parseFloat(t.getPropertyValue("border-right-width") || 0) || 0, u = parseFloat(t.getPropertyValue("border-bottom-width") || 0) || 0, l = parseFloat(t.getPropertyValue("border-left-width") || 0) || 0;
		if (a === 0 && c === 0 && u === 0 && l === 0) {
			let d = (t.getPropertyValue("border-image-source") || "").trim(), f = d && d !== "none";
			for (let m of [
				"border",
				"border-top",
				"border-right",
				"border-bottom",
				"border-left",
				"border-width",
				"border-style",
				"border-color",
				"border-top-width",
				"border-top-style",
				"border-top-color",
				"border-right-width",
				"border-right-style",
				"border-right-color",
				"border-bottom-width",
				"border-bottom-style",
				"border-bottom-color",
				"border-left-width",
				"border-left-style",
				"border-left-color",
				"border-block",
				"border-block-width",
				"border-block-style",
				"border-block-color",
				"border-inline",
				"border-inline-width",
				"border-inline-style",
				"border-inline-color"
			]) delete n[m];
			f || (n.border = "none");
		}
		return n;
	}
	function wi(t) {
		for (let e = t.firstChild; e; e = e.nextSibling) {
			if (e.nodeType === 3 && /\S/.test(e.nodeValue || "")) return !0;
			if (e.nodeType === 1) {
				let n = N(e).position;
				if (n !== "absolute" && n !== "fixed") return !0;
			}
		}
		return !1;
	}
	function xi(t, e, n) {
		try {
			if (typeof t.computedStyleMap == "function") {
				let r = t.computedStyleMap().get("width");
				if (r != null) return !Vn(String(r).trim().toLowerCase());
			}
		} catch {}
		let o = t.style && (t.style.width || t.style.inlineSize);
		return o && !Vn(String(o).trim().toLowerCase()) ? !0 : vi(t, e) ? n || Ci(t, e) : !1;
	}
	var Si = new Set([
		"auto",
		"min-content",
		"max-content",
		"stretch",
		"fill-available",
		"-webkit-fill-available"
	]);
	function Vn(t) {
		return Si.has(t) || t.startsWith("fit-content");
	}
	function vi(t, e) {
		let n = t.getBoundingClientRect().width - (parseFloat(e.paddingLeft) || 0) - (parseFloat(e.paddingRight) || 0) - (parseFloat(e.borderLeftWidth) || 0) - (parseFloat(e.borderRightWidth) || 0);
		if (!(n > 0)) return !1;
		let o = 1 / 0, r = -1 / 0, s = null;
		for (let i = t.firstChild; i; i = i.nextSibling) {
			let a;
			if (i.nodeType === 3) {
				if (!/\S/.test(i.nodeValue || "") || (s = s || document.createRange(), s.selectNode(i), a = s.getBoundingClientRect(), !a.width && !a.height)) continue;
			} else if (i.nodeType === 1) {
				let c = N(i);
				if (c.display === "none" || c.position === "absolute" || c.position === "fixed") continue;
				a = i.getBoundingClientRect();
			} else continue;
			a.left < o && (o = a.left), a.right > r && (r = a.right);
		}
		return r === -1 / 0 ? !1 : r - o < n - .5;
	}
	function Ci(t, e) {
		let n = t.parentElement;
		if (!n) return !1;
		let o = N(n), r = n.getBoundingClientRect().width - (parseFloat(o.paddingLeft) || 0) - (parseFloat(o.paddingRight) || 0) - (parseFloat(o.borderLeftWidth) || 0) - (parseFloat(o.borderRightWidth) || 0) - (parseFloat(e.marginLeft) || 0) - (parseFloat(e.marginRight) || 0);
		return r > 0 ? Math.abs(t.getBoundingClientRect().width - r) > .5 : !1;
	}
	var jn = new WeakMap();
	function Ai(t) {
		let e = jn.get(t);
		return e || (e = Object.entries(t).sort((o, r) => o[0] < r[0] ? -1 : o[0] > r[0] ? 1 : 0).map(([o, r]) => `${o}:${r}`).join(";"), jn.set(t, e), e);
	}
	function ki(t, e = null, n = {}) {
		let o = Ze.get(t), r = !!(n && n.embedFonts), s = n && n.excludeStyleProps || null;
		if (o && o.epoch === Se && o.embedFonts === r && o.excludeStyleProps === s) return o.snapshot;
		let i = e || getComputedStyle(t), a = bi(i, n);
		return Ti(t, i, a), Ze.set(t, {
			epoch: Se,
			snapshot: a,
			embedFonts: r,
			excludeStyleProps: s
		}), a;
	}
	function Mi(t, e) {
		return t && t.session && t.persist ? t : t && (t.styleMap || t.styleCache || t.nodeMap) ? {
			session: t,
			persist: {
				snapshotKeyCache: Jt,
				defaultStyle: C.defaultStyle,
				baseStyle: C.baseStyle,
				image: C.image,
				resource: C.resource,
				background: C.background,
				font: C.font
			},
			options: e || {}
		} : {
			session: C.session,
			persist: {
				snapshotKeyCache: Jt,
				defaultStyle: C.defaultStyle,
				baseStyle: C.baseStyle,
				image: C.image,
				resource: C.resource,
				background: C.background,
				font: C.font
			},
			options: t || e || {}
		};
	}
	function Fi(t, e, n) {
		if (!(!t.style || t.style.length === 0)) for (let o = 0; o < t.style.length; o++) {
			let r = t.style[o], s = n.getPropertyValue(r);
			s && e.style.setProperty(r, s);
		}
	}
	async function ct(t, e, n, o) {
		if (t.tagName === "STYLE") return;
		let r = Mi(n, o), s = r.options && r.options.cache || "auto";
		s !== "disabled" && gi(document.documentElement), s === "disabled" && !r.session.__bumpedForDisabled && (xe(), Jt.clear(), r.session.__bumpedForDisabled = !0);
		let { session: i, persist: a } = r;
		if (!i.styleCache.has(t)) {
			let b = null;
			try {
				b = getComputedStyle(t);
			} catch {}
			i.styleCache.set(t, b || getComputedStyle(document.documentElement));
		}
		let c = i.styleCache.get(t);
		t.getAttribute?.("style") && Fi(t, e, c);
		let u = c.getPropertyValue("animation-name");
		e && e.style && u && u !== "none" && e.style.setProperty("animation", "none", "important");
		let l = ki(t, c, r.options), d = qn(t);
		if (d) {
			let b = c.getPropertyValue("min-width");
			(!b || b === "auto" || b === "0px") && (l["min-width"] = "0px");
		}
		let f = t.tagName?.toLowerCase() || "div", h = Ai(l), m = !0;
		if (be(f, (l.display || "").toLowerCase())) {
			m = wi(t), m && je(f, l, d) && xi(t, c, d) && (m = !1), h = `${h}|${f}${m ? "|c" : ""}${d ? "|f" : ""}`;
			let b = l["text-wrap-mode"] || l["white-space"] || "";
			m && b !== "nowrap" && b !== "pre" && (i.reconcileRisk = (i.reconcileRisk || 0) + 1);
		}
		let p = a.snapshotKeyCache.get(h);
		p === void 0 && (p = Wt(l, f, m, d), a.snapshotKeyCache.set(h, p)), i.styleMap.set(e, p);
	}
	function Ei(t) {
		return t.backgroundImage && t.backgroundImage !== "none" || t.backgroundColor && t.backgroundColor !== "rgba(0, 0, 0, 0)" && t.backgroundColor !== "transparent" || (parseFloat(t.borderTopWidth) || 0) > 0 || (parseFloat(t.borderBottomWidth) || 0) > 0 || (parseFloat(t.paddingTop) || 0) > 0 || (parseFloat(t.paddingBottom) || 0) > 0 ? !0 : (t.overflowBlock || t.overflowY || "visible") !== "visible";
	}
	function qn(t) {
		let e = t.parentElement;
		if (!e) return !1;
		let n = N(e).display || "";
		return n.includes("flex") || n.includes("grid");
	}
	function $i(t) {
		for (let o = t.firstChild; o; o = o.nextSibling) if (o.nodeType === 3 && /\S/.test(o.nodeValue)) return !0;
		let e = t.firstElementChild, n = t.lastElementChild;
		if (e && e.tagName === "BR" || n && n.tagName === "BR") return !0;
		for (let o = t.firstElementChild; o; o = o.nextElementSibling) {
			let r = N(o);
			if (r.display === "none") continue;
			let s = r.position;
			if (s !== "absolute" && s !== "fixed") return !0;
		}
		return !1;
	}
	function Ri(t) {
		let e = t.getBoundingClientRect().top, n = -1 / 0, o = null;
		for (let r = t.firstChild; r; r = r.nextSibling) {
			if (r.nodeType === 3) {
				if (!/\S/.test(r.nodeValue || "")) continue;
				o = o || document.createRange(), o.selectNode(r);
				let a = o.getBoundingClientRect();
				(a.width || a.height) && (n = Math.max(n, a.bottom));
				continue;
			}
			if (r.nodeType !== 1) continue;
			let s = N(r);
			if (s.display === "none") continue;
			let i = s.position;
			i === "absolute" || i === "fixed" || s.float && s.float !== "none" || (n = Math.max(n, r.getBoundingClientRect().bottom));
		}
		return n === -1 / 0 ? NaN : n - e;
	}
	function Ti(t, e, n) {
		if (t instanceof HTMLElement && t.style && t.style.height) return;
		let o = t.tagName && t.tagName.toLowerCase();
		if (!o || ![
			"div",
			"section",
			"article",
			"main",
			"aside",
			"header",
			"footer",
			"nav"
		].includes(o) || e.aspectRatio && e.aspectRatio !== "none" && e.aspectRatio !== "auto") return;
		let s = e.display || "";
		if (s.includes("flex") || s.includes("grid")) return;
		let i = e.position;
		if (i === "absolute" || i === "fixed" || i === "sticky" || e.transform !== "none" || Ei(e) || qn(t)) return;
		let a = e.overflowX || e.overflow || "visible", c = e.overflowY || e.overflow || "visible";
		if (a !== "visible" || c !== "visible") return;
		let u = e.clip;
		if (u && u !== "auto" && u !== "rect(auto, auto, auto, auto)" || e.visibility === "hidden" || e.opacity === "0" || !$i(t)) return;
		let l = parseFloat(e.height), d = Ri(t);
		Number.isFinite(l) && Number.isFinite(d) && Math.abs(l - d) > 2 || (delete n.height, delete n["block-size"]);
	}
	Zt();
	var Gn = [
		"fill",
		"stroke",
		"color",
		"background-color",
		"stop-color"
	];
	var Pi = new Set([
		"symbol",
		"defs",
		"pattern",
		"marker",
		"linearGradient",
		"radialGradient",
		"filter"
	]);
	function ve(t) {
		let e = t;
		for (; e && e.nodeType === 1;) {
			if (e.namespaceURI === "http://www.w3.org/2000/svg") {
				if (e.localName === "mask" || e.localName === "clipPath") return !1;
				if (Pi.has(e.localName)) return !0;
			}
			e = e.parentNode;
		}
		return !1;
	}
	var Xn = new Map();
	function Ni(t, e) {
		let n = e + "::" + t.toLowerCase(), o = Xn.get(n);
		if (o) return o;
		let r = document, s = e === "http://www.w3.org/2000/svg" ? r.createElementNS(e, t) : r.createElement(t), i = r.createElement("div");
		i.setAttribute("data-snapdom-internal", ""), i.style.cssText = "position:absolute;left:-99999px;top:-99999px;contain:strict;display:block;", i.appendChild(s), r.documentElement.appendChild(i);
		let a = getComputedStyle(s), c = {};
		for (let u of Gn) c[u] = a.getPropertyValue(u) || "";
		return i.remove(), Xn.set(n, c), c;
	}
	function Yn(t, e) {
		if (t?.nodeType !== 1 || e?.nodeType !== 1 || ve(t)) return;
		let n = t.getAttribute?.("style"), o = !!(n && n.includes("var("));
		if (!o && t.attributes?.length) {
			let s = t.attributes;
			for (let i = 0; i < s.length; i++) {
				let a = s[i];
				if (a && typeof a.value == "string" && a.value.includes("var(")) {
					o = !0;
					break;
				}
			}
		}
		let r = null;
		if (o) try {
			r = getComputedStyle(t);
		} catch {}
		if (o) {
			let s = t.style;
			if (s && s.length) {
				let i = new Set();
				for (let a = 0; a < s.length; a++) {
					let c = s[a];
					if (i.has(c)) continue;
					i.add(c);
					let u = s.getPropertyValue(c);
					if (!u || !u.includes("var(")) continue;
					let l = r && r.getPropertyValue(c);
					if (l) try {
						e.style.setProperty(c, l.trim(), s.getPropertyPriority(c));
					} catch {}
				}
			}
		}
		if (o && t.attributes?.length) {
			let s = t.attributes;
			for (let i = 0; i < s.length; i++) {
				let a = s[i];
				if (!a || typeof a.value != "string" || !a.value.includes("var(")) continue;
				let c = a.name, u = r && r.getPropertyValue(c);
				if (u) try {
					e.style.setProperty(c, u.trim());
				} catch {}
			}
		}
		if (!o) {
			if (!r) try {
				r = getComputedStyle(t);
			} catch {
				r = null;
			}
			if (!r) return;
			let s = t.namespaceURI || "html", i = Ni(t.tagName, s);
			for (let a of Gn) {
				let c = r.getPropertyValue(a) || "", u = i[a] || "";
				if (c && c !== u) try {
					e.style.setProperty(a, c.trim());
				} catch {}
			}
		}
	}
	at();
	at();
	rt();
	vt();
	vt();
	function Tt(t) {
		return !!(!t || t.startsWith("data:") || t.startsWith("blob:") || /^data:image\/(gif|png|svg)/.test(t) && t.length < 200);
	}
	var Kn = "img[data-src], img[data-lazy-src], img[data-original], img[data-hi-res-src], img[data-srcset], img[data-lazy-srcset]";
	function Li(t, e) {
		return !t || t?.nodeType !== 1 ? !1 : t.matches?.("picture") || t.querySelector("picture") ? !0 : e ? !!(t.matches?.(Kn) || t.querySelector(Kn)) : !1;
	}
	var Ii = /^image\/(jpeg|jpg|png|gif|webp|avif|apng|svg\+xml|bmp|x-icon|vnd\.microsoft\.icon)\s*(;|$)/i;
	function Bt(t, e) {
		if (!t) return null;
		let n = 0;
		try {
			n = e ? e.getBoundingClientRect().width || e.width : 0;
		} catch {}
		n || (n = window.innerWidth || 1e3);
		let o = [];
		for (let s of t.split(",")) {
			let i = s.trim().split(/\s+/);
			if (!i[0]) continue;
			let a = i[1] || "", c = 1;
			/^\d*\.?\d+x$/i.test(a) ? c = parseFloat(a) : /^\d+w$/i.test(a) && (c = parseInt(a, 10) / n), o.push({
				url: i[0],
				d: c
			});
		}
		if (!o.length) return null;
		o.sort((s, i) => s.d - i.d);
		let r = window.devicePixelRatio || 1;
		return (o.find((s) => s.d >= r) || o[o.length - 1]).url;
	}
	function en(t, e) {
		let n = t.currentSrc || "";
		if (n && !Tt(n)) return n;
		let o = e.querySelectorAll("source[srcset]"), r = null;
		for (let s of o) {
			let i = s.getAttribute("srcset");
			if (!i || Tt(i)) continue;
			let a = s.getAttribute("type");
			if (a && !Ii.test(a.trim())) continue;
			let c = s.getAttribute("media");
			if (c) try {
				if (window.matchMedia(c).matches) return Bt(i, t);
			} catch {}
			r || (r = Bt(i, t));
		}
		return r;
	}
	function _i(t) {
		let e = [
			t.getAttribute("data-src"),
			t.getAttribute("data-lazy-src"),
			t.getAttribute("data-original"),
			t.getAttribute("data-hi-res-src")
		];
		for (let o of e) if (o && !Tt(o)) return o;
		let n = t.getAttribute("data-srcset") || t.getAttribute("data-lazy-srcset");
		if (n) {
			let o = n.split(",")[0].trim().split(/\s+/)[0];
			if (o && !Tt(o)) return o;
		}
		return null;
	}
	function Wi(t = {}) {
		let e = t.pictureResolver && typeof t.pictureResolver == "object" ? t.pictureResolver : {};
		return {
			timeout: e.timeout ?? 5e3,
			concurrency: e.concurrency ?? 4,
			resolveLazySrc: e.resolveLazySrc !== !1,
			silent: e.silent ?? !1,
			useProxy: typeof t.useProxy == "string" ? t.useProxy : ""
		};
	}
	async function Qn(t, e = {}) {
		if (!t || t?.nodeType !== 1 || e.resolvePicturePlaceholders === !1) return null;
		let { timeout: n, concurrency: o, resolveLazySrc: r, silent: s, useProxy: i } = Wi(e);
		if (!Li(t, r)) return null;
		let a = [], c = [];
		async function u(f) {
			let h = await G(f, {
				as: "dataURL",
				timeout: n,
				useProxy: i,
				silent: !0
			});
			return h.ok ? h.data : null;
		}
		async function l(f) {
			for (let h = 0; h < f.length; h += o) {
				let m = f.slice(h, h + o);
				await Promise.allSettled(m.map((p) => p()));
			}
		}
		let d = Array.from(t.querySelectorAll("picture"));
		t.matches?.("picture") && d.unshift(t);
		for (let f of d) {
			let h = f.querySelector("img");
			if (!h) continue;
			if (!Tt(h.getAttribute("src") || "")) continue;
			let p = en(h, f);
			p && c.push(async () => {
				let b = await u(p);
				if (!b) {
					s || console.warn(`[snapdom:picture-resolver] Failed to fetch: ${p.slice(0, 60)}`);
					return;
				}
				let y = h.getAttribute("src"), w = h.getAttribute("srcset"), S = h.getAttribute("sizes"), g = [];
				h.src = b, h.setAttribute("src", b), h.removeAttribute("srcset"), h.removeAttribute("sizes");
				let x = f.querySelectorAll("source");
				for (let v of x) g.push({
					el: v,
					parent: v.parentElement,
					next: v.nextSibling
				}), v.remove();
				a.push(() => {
					y !== null ? h.setAttribute("src", y) : h.removeAttribute("src"), w !== null && h.setAttribute("srcset", w), S !== null && h.setAttribute("sizes", S);
					for (let { el: v, parent: k, next: A } of g) k && k.insertBefore(v, A);
				});
			});
		}
		if (r) {
			let f = Array.from(t.querySelectorAll("img"));
			t.localName === "img" && f.unshift(t);
			for (let h of f) {
				if (h.closest("picture") && Tt(h.getAttribute("src") || "")) continue;
				let m = h.getAttribute("src") || "", p = _i(h);
				p && Tt(m) && c.push(async () => {
					let b = await u(p);
					if (!b) return;
					let y = h.getAttribute("src");
					h.src = b, h.setAttribute("src", b), h.removeAttribute("srcset"), h.removeAttribute("sizes"), a.push(() => {
						y !== null ? h.setAttribute("src", y) : h.removeAttribute("src");
					});
				});
			}
		}
		return c.length === 0 ? null : (await l(c), async function() {
			for (let h of a) try {
				h();
			} catch {}
		});
	}
	function ke(t, e, n) {
		return n ? Promise.all(t.map((o) => new Promise((r) => e(o, r)))) : Promise.all(t.map((o) => new Promise((r) => {
			function s() {
				Rt((i) => {
					(i && typeof i.timeRemaining == "function" ? i.timeRemaining() > 0 : !0) ? e(o, r) : s();
				}, { fast: n });
			}
			s();
		})));
	}
	function Oi(t, e) {
		if (t = t.trim(), !t) return t;
		let n = e ? `[data-sd-slotted~="${e}"]` : "[data-sd-slotted]";
		return t.endsWith(":not([data-sd-slotted])") || t.endsWith(`:not(${n})`) ? t : `${t}:not(${n})`;
	}
	function Bi(t, e, n = !0, o) {
		return t.split(",").map((r) => r.trim()).filter(Boolean).map((r) => {
			if (r.startsWith(":where(") || r.startsWith("@")) return r;
			return `:where(${e} ${n ? Oi(r, o) : r})`;
		}).join(", ");
	}
	function Jn(t, e, n) {
		return t ? (t = t.replace(/:host\(([^)]+)\)/g, (o, r) => `:where(${e}:is(${r.trim()}))`), t = t.replace(/:host\b/g, `:where(${e})`), t = t.replace(/:host-context\(([^)]+)\)/g, (o, r) => `:where(:where(${r.trim()}) ${e})`), t = t.replace(/::slotted\(([^)]+)\)/g, (o, r) => `:where(${e} ${r.trim()})`), t = t.replace(/(^|})(\s*)([^@}{]+){/g, (o, r, s, i) => {
			return `${r}${s}${Bi(i, e, !0, n)}{`;
		}), t) : "";
	}
	function to(t) {
		return t.shadowScopeSeq = (t.shadowScopeSeq || 0) + 1, `s${t.shadowScopeSeq}`;
	}
	function eo(t) {
		let e = "";
		try {
			t.querySelectorAll("style").forEach((o) => {
				e += (o.textContent || "") + `
`;
			});
			let n = t.adoptedStyleSheets || [];
			for (let o of n) try {
				if (o && o.cssRules) for (let r of o.cssRules) e += r.cssText + `
`;
			} catch {}
		} catch {}
		return e;
	}
	function no(t, e, n) {
		if (!e) return;
		let o = document.createElement("style");
		o.setAttribute("data-sd", n), o.textContent = e, t.insertBefore(o, t.firstChild || null);
	}
	function oo(t, e) {
		try {
			let n = null, o = N(t).content;
			if (o && o.includes("url(")) {
				let i = o.match(/url\(["']?([^"')]+)["']?\)/);
				i && (n = i[1]);
			}
			let r = t.closest?.("picture"), s = n || (r ? en(t, r) : t.currentSrc) || t.src || Bt(t.getAttribute("srcset"), t) || "";
			if (!s) return;
			e.setAttribute("src", s), e.removeAttribute("srcset"), e.removeAttribute("sizes"), e.loading = "eager", e.decoding = "sync";
		} catch {}
	}
	function ro(t) {
		let e = new Set();
		if (!t) return e;
		let n = /var\(\s*(--[A-Za-z0-9_-]+)\b/g, o;
		for (; o = n.exec(t);) e.add(o[1]);
		return e;
	}
	function Ui(t, e) {
		try {
			let o = getComputedStyle(t).getPropertyValue(e).trim();
			if (o) return o;
		} catch {}
		try {
			let o = getComputedStyle(document.documentElement).getPropertyValue(e).trim();
			if (o) return o;
		} catch {}
		return "";
	}
	function io(t, e, n) {
		let o = [];
		for (let r of e) {
			let s = Ui(t, r);
			s && o.push(`${r}: ${s};`);
		}
		return o.length ? `${n}{${o.join("")}}
` : "";
	}
	function so(t, e) {
		if (!t) return;
		let n = (o) => {
			let r = o.getAttribute("data-sd-slotted") || "";
			e ? ` ${r} `.includes(` ${e} `) || o.setAttribute("data-sd-slotted", r ? `${r} ${e}` : e) : o.setAttribute("data-sd-slotted", r);
		};
		t.nodeType === Node.ELEMENT_NODE && n(t), t.querySelectorAll?.("*").forEach(n);
	}
	async function Di(t, e = 3) {
		let n = () => {
			try {
				return t.contentDocument || t.contentWindow?.document || null;
			} catch {
				return null;
			}
		}, o = n(), r = 0;
		for (; r < e && (!o || !o.body && !o.documentElement);) await new Promise((s) => setTimeout(s, 0)), o = n(), r++;
		return o && (o.body || o.documentElement) ? o : null;
	}
	function Hi(t) {
		let e = t.getBoundingClientRect(), n = 0, o = 0, r = 0, s = 0;
		try {
			let c = getComputedStyle(t);
			n = parseFloat(c.borderLeftWidth) || 0, o = parseFloat(c.borderRightWidth) || 0, r = parseFloat(c.borderTopWidth) || 0, s = parseFloat(c.borderBottomWidth) || 0;
		} catch {}
		return {
			contentWidth: Math.max(0, Math.round(e.width - (n + o))),
			contentHeight: Math.max(0, Math.round(e.height - (r + s))),
			rect: e
		};
	}
	function ut(t) {
		let e = 0, n = 0;
		if (t.offsetWidth > 0 && (e = t.offsetWidth), t.offsetHeight > 0 && (n = t.offsetHeight), e === 0 || n === 0) try {
			let o = getComputedStyle(t);
			if (e === 0) {
				let r = parseFloat(o.width);
				!isNaN(r) && r > 0 && (e = r);
			}
			if (n === 0) {
				let r = parseFloat(o.height);
				!isNaN(r) && r > 0 && (n = r);
			}
		} catch {}
		if (e === 0 || n === 0) try {
			if (e === 0) {
				let o = parseFloat(t.getAttribute("width"));
				!isNaN(o) && o > 0 && (e = o);
			}
			if (n === 0) {
				let o = parseFloat(t.getAttribute("height"));
				!isNaN(o) && o > 0 && (n = o);
			}
		} catch {}
		if ((e === 0 || n === 0) && (t.naturalWidth || t.naturalHeight)) try {
			e === 0 && t.naturalWidth > 0 && (e = t.naturalWidth), n === 0 && t.naturalHeight > 0 && (n = t.naturalHeight);
		} catch {}
		return {
			width: e,
			height: n
		};
	}
	function zi(t, e, n) {
		let o = t.defaultView, r = o ? o.scrollX : 0, s = o ? o.scrollY : 0, i = t.body ? t.body.scrollLeft : 0, a = t.body ? t.body.scrollTop : 0, c = t.documentElement ? t.documentElement.scrollLeft : 0, u = t.documentElement ? t.documentElement.scrollTop : 0, l = 0, d = 0, f = 0, h = 0;
		try {
			let p = o && t.body ? o.getComputedStyle(t.body) : null;
			p && (l = (parseFloat(p.marginTop) || 0) + (parseFloat(p.paddingTop) || 0), d = (parseFloat(p.marginRight) || 0) + (parseFloat(p.paddingRight) || 0), f = (parseFloat(p.marginBottom) || 0) + (parseFloat(p.paddingBottom) || 0), h = (parseFloat(p.marginLeft) || 0) + (parseFloat(p.paddingLeft) || 0));
		} catch {}
		try {
			t.documentElement.setAttribute("data-sd-pinned", "");
		} catch {}
		let m = t.createElement("style");
		return m.setAttribute("data-sd-iframe-pin", ""), m.textContent = `html {margin: 0 !important;padding: 0 !important;width: ${e}px !important;height: ${n}px !important;min-width: ${e}px !important;min-height: ${n}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}body {margin: 0 !important;padding: ${l}px ${d}px ${f}px ${h}px !important;width: ${e}px !important;height: ${n}px !important;min-width: ${e}px !important;min-height: ${n}px !important;box-sizing: border-box !important;overflow: hidden !important;background-clip: border-box !important;}`, (t.head || t.documentElement).appendChild(m), () => {
			try {
				m.remove();
			} catch {}
			try {
				t.documentElement.removeAttribute("data-sd-pinned");
			} catch {}
			try {
				o && typeof o.scrollTo == "function" && o.scrollTo(r, s), t.body && (t.body.scrollLeft = i, t.body.scrollTop = a), t.documentElement && (t.documentElement.scrollLeft = c, t.documentElement.scrollTop = u);
			} catch {}
		};
	}
	async function ao(t, e, n) {
		let o = await Di(t, 3);
		if (!o) throw new Error("iframe document not accessible/ready");
		let { contentWidth: r, contentHeight: s, rect: i } = Hi(t), a = n?.snap;
		if (!a && typeof window < "u" && window.snapdom && (a = window.snapdom), !a || typeof a.toPng != "function") throw new Error("[snapdom] iframe capture requires snapdom.toPng. Use snapdom(el) or pass options.snap. With ESM, assign window.snapdom = snapdom after import if using iframes.");
		let c = {
			...n,
			scale: 1,
			clip: null
		}, u = zi(o, r, s), l = C.session.nodeMap, d = C.session.styleMap, f = C.session.styleCache, h;
		try {
			h = await a.toPng(o.documentElement, c);
		} finally {
			u(), C.session.nodeMap = l, C.session.styleMap = d, C.session.styleCache = f;
		}
		h.style.display = "block", h.style.width = `${r}px`, h.style.height = `${s}px`;
		let m = document.createElement("div");
		return e.nodeMap.set(m, t), ct(t, m, e, n), m.style.overflow = "hidden", m.style.display = "block", m.style.width || (m.style.width = `${Math.round(i.width)}px`), m.style.height || (m.style.height = `${Math.round(i.height)}px`), m.appendChild(h), m;
	}
	function co(t) {
		let { width: e, height: n } = ut(t), o = t.getBoundingClientRect(), r;
		try {
			r = window.getComputedStyle(t);
		} catch {}
		let s = r ? parseFloat(r.width) : NaN, i = r ? parseFloat(r.height) : NaN, a = Math.round(e || o.width || 0), c = Math.round(n || o.height || 0), u = Number.isFinite(s) && s > 0 ? Math.round(s) : Math.max(12, a || 16), l = Number.isFinite(i) && i > 0 ? Math.round(i) : Math.max(12, c || 16), d = (t.type || "text").toLowerCase() === "checkbox", f = !!t.checked, h = !!t.indeterminate, p = Math.max(Math.min(u, l), 12), b = "middle";
		try {
			r && r.verticalAlign && (b = r.verticalAlign);
		} catch {}
		let y = document.createElement("div");
		y.setAttribute("data-snapdom-input-replacement", t.type || "checkbox"), y.style.cssText = `display:inline-block;width:${p}px;height:${p}px;vertical-align:${b};flex-shrink:0;line-height:0;`;
		let w = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		w.setAttribute("width", String(p)), w.setAttribute("height", String(p)), w.setAttribute("viewBox", `0 0 ${p} ${p}`), y.appendChild(w);
		function S() {
			let g = "#0a6ed1";
			try {
				r && (g = r.accentColor || r.color || g);
			} catch {}
			let x = 2, v = x / 2, k = p - x;
			if (w.innerHTML = "", d) {
				let A = document.createElementNS("http://www.w3.org/2000/svg", "rect");
				if (A.setAttribute("x", String(v)), A.setAttribute("y", String(v)), A.setAttribute("width", String(k)), A.setAttribute("height", String(k)), A.setAttribute("rx", "2"), A.setAttribute("ry", "2"), A.setAttribute("fill", f ? g : "none"), A.setAttribute("stroke", g), A.setAttribute("stroke-width", String(x)), w.appendChild(A), f) {
					let M = document.createElementNS("http://www.w3.org/2000/svg", "path");
					M.setAttribute("d", `M 3 ${p / 2} L ${p / 2 - 1} ${p - v - 2} L ${p - v - 2} 3`), M.setAttribute("stroke", "white"), M.setAttribute("stroke-width", String(Math.max(1.5, x))), M.setAttribute("fill", "none"), M.setAttribute("stroke-linecap", "round"), M.setAttribute("stroke-linejoin", "round"), w.appendChild(M);
				} else if (h) {
					let M = document.createElementNS("http://www.w3.org/2000/svg", "rect"), F = Math.max(6, k - 4);
					M.setAttribute("x", String((p - F) / 2)), M.setAttribute("y", String((p - x) / 2)), M.setAttribute("width", String(F)), M.setAttribute("height", String(x)), M.setAttribute("fill", g), M.setAttribute("rx", "1"), w.appendChild(M);
				}
			} else {
				let A = document.createElementNS("http://www.w3.org/2000/svg", "circle");
				if (A.setAttribute("cx", String(p / 2)), A.setAttribute("cy", String(p / 2)), A.setAttribute("r", String((p - x) / 2)), A.setAttribute("fill", f ? g : "none"), A.setAttribute("stroke", g), A.setAttribute("stroke-width", String(x)), w.appendChild(A), f) {
					let M = document.createElementNS("http://www.w3.org/2000/svg", "circle"), F = Math.max(2, (p - 4) * .35);
					M.setAttribute("cx", String(p / 2)), M.setAttribute("cy", String(p / 2)), M.setAttribute("r", String(F)), M.setAttribute("fill", "white"), w.appendChild(M);
				}
			}
			y.style.setProperty("width", `${p}px`, "important"), y.style.setProperty("height", `${p}px`, "important"), y.style.setProperty("min-width", `${p}px`, "important"), y.style.setProperty("min-height", `${p}px`, "important");
		}
		return S(), {
			el: y,
			applyVisual: S
		};
	}
	var te = new Y(80);
	async function ee(t) {
		if (C.resource?.has(t)) return C.resource.get(t);
		if (te.has(t)) return te.get(t);
		let e = (async () => {
			let n = await G(t, {
				as: "dataURL",
				silent: !0
			});
			if (!n.ok || typeof n.data != "string") throw new Error(`[snapDOM] Failed to read blob URL: ${t}`);
			return C.resource?.set(t, n.data), n.data;
		})();
		te.set(t, e);
		try {
			let n = await e;
			return te.set(t, n), n;
		} catch (n) {
			throw te.delete(t), n;
		}
	}
	var Vi = /\bblob:[^)"'\s]+/g;
	async function Zn(t) {
		if (!t || t.indexOf("blob:") === -1) return t;
		let e = Array.from(new Set(t.match(Vi) || []));
		if (e.length === 0) return t;
		let n = t;
		for (let o of e) try {
			let r = await ee(o);
			n = n.split(o).join(r);
		} catch {}
		return n;
	}
	function Ce(t) {
		return typeof t == "string" && t.startsWith("blob:");
	}
	function ji(t) {
		return (t || "").split(",").map((e) => e.trim()).filter(Boolean).map((e) => {
			let n = e.match(/^(\S+)(\s+.+)?$/);
			return n ? {
				url: n[1],
				desc: n[2] || ""
			} : null;
		}).filter(Boolean);
	}
	function qi(t) {
		return t.map((e) => e.desc ? `${e.url} ${e.desc.trim()}` : e.url).join(", ");
	}
	function Ae(t, e) {
		let n = t.querySelectorAll ? Array.from(t.querySelectorAll(e)) : [];
		return t.matches?.(e) && n.unshift(t), n;
	}
	async function lo(t, e = null) {
		if (!t) return;
		let n = e, o = Ae(t, "img");
		for (let c of o) try {
			let l = c.getAttribute("src") || c.currentSrc || "";
			if (Ce(l)) {
				let f = await ee(l);
				c.setAttribute("src", f);
			}
			let d = c.getAttribute("srcset");
			if (d && d.includes("blob:")) {
				let f = ji(d), h = !1;
				for (let m of f) if (Ce(m.url)) try {
					m.url = await ee(m.url), h = !0;
				} catch (p) {
					_$1(n, "blobUrlToDataUrl for srcset item failed", p);
				}
				h && c.setAttribute("srcset", qi(f));
			}
		} catch (u) {
			_$1(n, "resolveBlobUrls for img failed", u);
		}
		let r = Ae(t, "image");
		for (let c of r) try {
			let u = "http://www.w3.org/1999/xlink", l = c.getAttribute("href") || c.getAttributeNS?.(u, "href");
			if (Ce(l)) {
				let d = await ee(l);
				c.setAttribute("href", d), c.removeAttributeNS?.(u, "href");
			}
		} catch (u) {
			_$1(n, "resolveBlobUrls for SVG image href failed", u);
		}
		let s = Ae(t, "[style*='blob:']");
		for (let c of s) try {
			let u = c.getAttribute("style");
			if (u && u.includes("blob:")) {
				let l = await Zn(u);
				c.setAttribute("style", l);
			}
		} catch (u) {
			_$1(n, "replaceBlobUrls in inline style failed", u);
		}
		let i = t.querySelectorAll ? t.querySelectorAll("style") : [];
		for (let c of i) try {
			let u = c.textContent || "";
			u.includes("blob:") && (c.textContent = await Zn(u));
		} catch (u) {
			_$1(n, "replaceBlobUrls in style tag failed", u);
		}
		for (let c of ["poster"]) {
			let u = Ae(t, `[${c}^='blob:']`);
			for (let l of u) try {
				let d = l.getAttribute(c);
				Ce(d) && l.setAttribute(c, await ee(d));
			} catch (d) {
				_$1(n, `resolveBlobUrls for ${c} failed`, d);
			}
		}
	}
	Ct();
	var on = new Map();
	var fo = new Set(["IFRAME"]);
	function Fe(t, e) {
		on.set(String(t).toUpperCase(), e);
	}
	function nn(t) {
		let { width: e, height: n } = ut(t), o = e, r = n;
		if (!o || !r) {
			let i = t.getBoundingClientRect();
			o = o || i.width || 0, r = r || i.height || 0;
		}
		let s = document.createElement("div");
		return s.style.cssText = `display:inline-block;width:${o}px;height:${r}px;visibility:hidden;`, s;
	}
	var Me = 200;
	var Xi = new Set([
		"img",
		"canvas",
		"video",
		"iframe",
		"object",
		"embed"
	]);
	function uo(t, e) {
		return t.right >= e.left - Me && t.left <= e.right + Me && t.bottom >= e.top - Me && t.top <= e.bottom + Me;
	}
	function Gi(t, e) {
		if (t === e.root) return !1;
		let n;
		try {
			n = t.getBoundingClientRect();
		} catch {
			return !1;
		}
		if (n.width === 0 && n.height === 0) return !1;
		let o = N(t);
		if (o.display === "inline" && !Xi.has((t.localName || "").toLowerCase())) return !1;
		let r = e.rect, s = t.scrollWidth || 0, i = t.scrollHeight || 0, a = {
			left: o.direction === "rtl" ? Math.min(n.left, n.right - s) : n.left,
			top: n.top,
			right: Math.max(n.right, n.left + s),
			bottom: Math.max(n.bottom, n.top + i)
		}, c = o.writingMode || "";
		if ((c.startsWith("vertical") || c.startsWith("sideways")) && (a.top = Math.min(n.top, n.bottom - i), a.left = Math.min(a.left, n.right - s)), uo(a, r)) return !1;
		let u = (t.ownerDocument || document).createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
		for (; u.nextNode();) {
			let l = u.currentNode.getBoundingClientRect();
			if ((l.width > 0 || l.height > 0) && uo(l, r)) return !1;
		}
		return !0;
	}
	function Yi(t, e, n) {
		let o = t.cloneNode(!1);
		t.tagName === "IMG" && (o.removeAttribute("src"), o.removeAttribute("srcset"), o.removeAttribute("sizes")), ct(t, o, e, n);
		let { width: r, height: s } = ut(t);
		return r > 0 && (o.style.width = `${r}px`, o.style.minWidth = `${r}px`, o.style.maxWidth = `${r}px`), s > 0 && (o.style.height = `${s}px`, o.style.minHeight = `${s}px`, o.style.maxHeight = `${s}px`), o.style.visibility = "hidden", o.style.overflow = "hidden", o.style.boxSizing = "border-box", o;
	}
	async function ne(t, e, n) {
		if (!t) throw new Error("Invalid node");
		let o = new Set(), r = null, s = null;
		if (t.nodeType === Node.ELEMENT_NODE) {
			let l = (t.localName || t.tagName || "").toLowerCase();
			if (t.id === "snapdom-sandbox" || t.hasAttribute("data-snapdom-sandbox") || me.has(l)) return null;
			if (l === "foreignobject" && t.parentElement?.closest?.("foreignObject")) return _$1(e, "Nested <foreignObject> skipped (SVG spec limitation — not rendered by browsers)"), null;
			if (l === "source" && t.parentElement?.localName === "picture") return null;
		}
		if (t.nodeType === Node.TEXT_NODE || t.nodeType !== Node.ELEMENT_NODE) return t.cloneNode(!0);
		if (t.getAttribute("data-capture") === "exclude") {
			if (n.excludeMode === "hide") return nn(t);
			if (n.excludeMode === "remove") return null;
		}
		if (n.exclude && Array.isArray(n.exclude)) for (let l of n.exclude) try {
			if (t.matches?.(l)) {
				if (n.excludeMode === "hide") return nn(t);
				if (n.excludeMode === "remove") return null;
			}
		} catch (d) {
			console.warn(`Invalid selector in exclude option: ${l}`, d);
		}
		if (typeof n.filter == "function") try {
			if (!n.filter(t)) {
				if (n.filterMode === "hide") return nn(t);
				if (n.filterMode === "remove") return null;
			}
		} catch (l) {
			console.warn("Error in filter function:", l);
		}
		if (e.clip && Gi(t, e.clip)) return Yi(t, e, n);
		if (n.__resolveNodeHooks) for (let l of n.__resolveNodeHooks) {
			let d;
			try {
				d = await l(t, n);
			} catch (f) {
				_$1(e, "resolveNode plugin hook failed", f);
			}
			if (d === null) return null;
			if (d instanceof Node) return d.nodeType === Node.ELEMENT_NODE && (e.nodeMap.set(d, t), ct(t, d, e, n)), d;
		}
		{
			let l = fo.has(t.tagName) && on.get(t.tagName);
			if (l) {
				let d = await l(t, e, n);
				if (d !== void 0) return d;
			}
		}
		if (t.getAttribute("data-capture") === "placeholder") {
			let l = t.cloneNode(!1);
			e.nodeMap.set(l, t), ct(t, l, e, n);
			let d = document.createElement("div");
			return d.textContent = t.getAttribute("data-placeholder-text") || "", d.style.cssText = "color:#666;font-size:12px;text-align:center;line-height:1.4;padding:0.5em;box-sizing:border-box;", l.appendChild(d), l;
		}
		{
			let l = !fo.has(t.tagName) && on.get(t.tagName);
			if (l) {
				let d = await l(t, e, n);
				if (d !== void 0) return d;
			}
		}
		let i;
		try {
			if (i = t.cloneNode(!1), i.attributes?.length) try {
				for (let l of i.attributes) /[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/.test(l.value) && i.setAttribute(l.name, l.value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/g, ""));
			} catch {}
			if (Yn(t, i), e.nodeMap.set(i, t), t.tagName === "IMG") {
				oo(t, i);
				try {
					let { width: l, height: d } = ut(t), f = Math.round(l || 0), h = Math.round(d || 0);
					f && (i.dataset.snapdomWidth = String(f)), h && (i.dataset.snapdomHeight = String(h));
				} catch (l) {
					_$1(e, "getUnscaledDimensions for IMG failed", l);
				}
				try {
					let l = t.getAttribute("style") || "", d = window.getComputedStyle(t), f = (S) => {
						let g = l.match(new RegExp(`${S}\\s*:\\s*([^;]+)`, "i")), x = g ? g[1].trim() : d.getPropertyValue(S);
						return /%|auto/i.test(String(x || ""));
					}, h = parseInt(i.dataset.snapdomWidth || "0", 10), m = parseInt(i.dataset.snapdomHeight || "0", 10), p = f("width") || !h, b = f("height") || !m;
					p && h && (i.style.width = `${h}px`), b && m && (i.style.height = `${m}px`);
					let y = d.getPropertyValue("object-fit"), w = d.getPropertyValue("object-position");
					y && y !== "fill" ? (i.style.objectFit = y, w && (i.style.objectPosition = w)) : (h && (i.style.minWidth = `${h}px`), m && (i.style.minHeight = `${m}px`));
				} catch (l) {
					_$1(e, "IMG dimension freeze failed", l);
				}
			}
		} catch (l) {
			throw console.error("[Snapdom] Failed to clone node:", t, l), l;
		}
		let a = null;
		if (t instanceof HTMLTextAreaElement) {
			let { width: l, height: d } = ut(t), f = l || t.getBoundingClientRect().width || 0, h = d || t.getBoundingClientRect().height || 0;
			f && (i.style.width = `${f}px`), h && (i.style.height = `${h}px`);
		}
		if (t instanceof HTMLInputElement) {
			let l = (t.type || "text").toLowerCase();
			if ((l === "checkbox" || l === "radio") && Hn()) {
				let { el: f, applyVisual: h } = co(t);
				e.nodeMap.set(f, t), a = h, i = f;
			} else i.value = t.value, i.setAttribute("value", t.value), t.checked !== void 0 && (i.checked = t.checked, t.checked && i.setAttribute("checked", ""), t.indeterminate && (i.indeterminate = t.indeterminate));
		}
		if ((t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && !t.value && t.placeholder) try {
			let l = window.getComputedStyle(t, "::placeholder"), d = l && l.color;
			if (d && d !== "rgba(0, 0, 0, 0)") {
				let f = "snapdom-ph-" + (Math.random() * 1e6 | 0);
				i.classList.add(f);
				let h = document.createElement("style");
				h.textContent = `.${f}::placeholder{color:${d}!important;opacity:${l.opacity || "1"}!important;-webkit-text-fill-color:${d}!important;}`, i.prepend(h);
			}
		} catch {}
		if (t instanceof HTMLSelectElement && (r = t.value), t instanceof HTMLTextAreaElement && (s = t.value), t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement || t instanceof HTMLSelectElement) {
			t.disabled && i.setAttribute("disabled", ""), t.required && i.setAttribute("required", ""), t.readOnly && i.setAttribute("readonly", "");
			let l = t;
			l.min !== void 0 && l.min !== "" && i.setAttribute("min", l.min), l.max !== void 0 && l.max !== "" && i.setAttribute("max", l.max), l.pattern !== void 0 && l.pattern !== "" && i.setAttribute("pattern", l.pattern);
			let d = t.getAttribute("aria-invalid");
			d !== null && i.setAttribute("aria-invalid", d);
		}
		if (ve(t) || ct(t, i, e, n), a && a(), t instanceof SVGElement && !ve(t)) {
			let l = [
				"fill",
				"stroke",
				"stroke-width",
				"stroke-dasharray",
				"stroke-dashoffset",
				"stroke-linecap",
				"stroke-linejoin",
				"stroke-miterlimit",
				"opacity",
				"fill-opacity",
				"stroke-opacity",
				"fill-rule",
				"clip-rule",
				"marker",
				"marker-start",
				"marker-mid",
				"marker-end",
				"visibility",
				"display"
			];
			try {
				let d = window.getComputedStyle(t);
				for (let f of l) {
					let h = d.getPropertyValue(f);
					h && i.style.setProperty(f, h);
				}
			} catch {}
		}
		if (t.shadowRoot) {
			try {
				let S = t.shadowRoot.querySelectorAll("slot");
				for (let g of S) {
					let x = g.assignedNodes?.() || [];
					for (let v of x) o.add(v);
				}
			} catch {}
			let l = to(e), d = `[data-sd="${l}"]`;
			e.shadowScopes ||= new WeakMap(), e.shadowScopes.set(t.shadowRoot, l);
			try {
				i.setAttribute("data-sd", l);
			} catch {}
			let f = eo(t.shadowRoot), h = Jn(f, d, l), p = io(t, ro(f), d);
			no(i, p + h, l);
			let b = document.createDocumentFragment(), y = (S, g) => {
				if (S.nodeType === Node.ELEMENT_NODE && S.tagName === "STYLE") return g(null);
				ne(S, e, n).then((x) => {
					g(x || null);
				}).catch(() => {
					g(null);
				});
			}, w = await ke(Array.from(t.shadowRoot.childNodes), y, n.fast);
			b.append(...w.filter((S) => !!S)), i.appendChild(b);
		}
		if (t.tagName === "SLOT") {
			let l = e.shadowScopes?.get(t.getRootNode()), d = t.assignedNodes?.() || [], f = d.length ? t.assignedNodes?.({ flatten: !0 }) || d : [], h = f.length ? f : Array.from(t.childNodes), m = document.createDocumentFragment(), p = (y, w) => {
				ne(y, e, n).then((S) => {
					S && d.length && so(S, l), w(S || null);
				}).catch(() => {
					w(null);
				});
			}, b = await ke(Array.from(h), p, n.fast);
			return m.append(...b.filter((y) => !!y)), m;
		}
		function c(l, d) {
			if (o.has(l)) return d(null);
			ne(l, e, n).then((f) => {
				d(f || null);
			}).catch(() => {
				d(null);
			});
		}
		let u = await ke(Array.from(t.childNodes), c, n.fast);
		if (i.append(...u.filter((l) => !!l)), r !== null && i instanceof HTMLSelectElement) {
			i.value = r;
			for (let l of i.options) l.value === r ? l.setAttribute("selected", "") : l.removeAttribute("selected");
		}
		return s !== null && i instanceof HTMLTextAreaElement && (i.textContent = s), i;
	}
	async function Ki(t, e, n) {
		let o = !1;
		try {
			o = !!(t.contentDocument || t.contentWindow?.document);
		} catch (r) {
			_$1(e, "iframe same-origin probe failed", r);
		}
		if (o) try {
			return await ao(t, e, n);
		} catch (r) {
			console.warn("[SnapDOM] iframe rasterization failed, fallback:", r);
		}
		if (o || console.warn("[snapdom] cross-origin <iframe> skipped (its document cannot be read). Captured as a placeholder that keeps the frame's box; pass { placeholders: false } for an invisible spacer.", t), n.placeholders) {
			let { width: r, height: s } = ut(t), i = document.createElement("div");
			return i.style.cssText = `width:${r}px;height:${s}px;background-image:repeating-linear-gradient(45deg,#ddd,#ddd 5px,#f9f9f9 5px,#f9f9f9 10px);display:flex;align-items:center;justify-content:center;font-size:12px;color:#555;border:1px solid #aaa;`, ct(t, i, e, n), i;
		} else {
			let { width: r, height: s } = ut(t), i = document.createElement("div");
			return i.style.cssText = `display:inline-block;width:${r}px;height:${s}px;visibility:hidden;`, ct(t, i, e, n), i;
		}
	}
	function Qi(t) {
		try {
			let e = Math.max(1, Math.min(32, t.width)), n = Math.max(1, Math.min(32, t.height)), o = document.createElement("canvas");
			o.width = e, o.height = n;
			let r = o.getContext("2d", { willReadFrequently: !0 });
			if (!r) return !1;
			r.drawImage(t, 0, 0, e, n);
			let s = r.getImageData(0, 0, e, n).data;
			for (let i = 3; i < s.length; i += 4) if (s[i] !== 0) return !1;
			return !0;
		} catch {
			return !1;
		}
	}
	async function Zi(t, e, n) {
		let o = "";
		try {
			let a = t.getContext("2d", { willReadFrequently: !0 });
			try {
				a && a.getImageData(0, 0, 1, 1);
			} catch {}
			if ((K() || !a) && await mt(), o = t.toDataURL("image/png"), !o || o === "data:,") {
				try {
					a && a.getImageData(0, 0, 1, 1);
				} catch {}
				if (await mt(), o = t.toDataURL("image/png"), !o || o === "data:,") {
					let c = document.createElement("canvas");
					c.width = t.width, c.height = t.height;
					let u = c.getContext("2d");
					u && (u.drawImage(t, 0, 0), o = c.toDataURL("image/png"));
				}
			}
		} catch (a) {
			_$1(e, "Canvas toDataURL failed, using empty/fallback", a);
		}
		n && n.debug && o && Qi(t) && _$1(e, "canvas is empty at capture time — capture it after its first frame is drawn", t);
		let r = document.createElement("img");
		try {
			r.decoding = "sync", r.loading = "eager";
		} catch (a) {
			_$1(e, "img decoding/loading hints failed", a);
		}
		o && (r.src = o), r.width = t.width, r.height = t.height;
		let { width: s, height: i } = ut(t);
		return s > 0 && (r.style.width = `${s}px`), i > 0 && (r.style.height = `${i}px`), e.nodeMap.set(r, t), ct(t, r, e, n), r;
	}
	async function Ji(t, e, n) {
		let o = "";
		try {
			let a = document.createElement("canvas");
			a.width = t.videoWidth || t.offsetWidth || 320, a.height = t.videoHeight || t.offsetHeight || 240;
			let c = a.getContext("2d");
			c && (c.drawImage(t, 0, 0, a.width, a.height), o = a.toDataURL("image/png"), (!o || o === "data:,") && (o = ""));
		} catch (a) {
			_$1(e, "Video frame capture failed, using poster fallback", a);
		}
		let r = document.createElement("img");
		try {
			r.decoding = "sync", r.loading = "eager";
		} catch {}
		o ? r.src = o : t.poster && (r.src = t.poster), r.width = t.videoWidth || t.offsetWidth || 0, r.height = t.videoHeight || t.offsetHeight || 0;
		let { width: s, height: i } = ut(t);
		return s > 0 && (r.style.width = `${s}px`), i > 0 && (r.style.height = `${i}px`), r.style.objectFit = "contain", e.nodeMap.set(r, t), ct(t, r, e, n), r;
	}
	async function ts(t, e, n) {
		if (!t.controls) return;
		let { width: o, height: r } = ut(t), s = Math.round(o || t.offsetWidth || 300), i = Math.round(r || t.offsetHeight || 54), a = i / 2, c = Math.max(4, i * .16), u = i * .34, l = s - i * .34, d = u + c + i * .55, f = Math.max(0, l - i * .7 - d), h = Math.max(9, Math.round(i * .24)), m = `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${i}" viewBox="0 0 ${s} ${i}"><rect width="${s}" height="${i}" rx="${Math.min(i / 2, 10)}" fill="#f1f3f4"/><path d="M ${u} ${a - c} L ${u + c} ${a} L ${u} ${a + c} Z" fill="#5f6368"/><rect x="${d}" y="${a - 1.5}" width="${f}" height="3" rx="1.5" fill="#bdc1c6"/><circle cx="${d}" cy="${a}" r="${Math.max(3, i * .09)}" fill="#5f6368"/><text x="${l}" y="${a}" fill="#5f6368" font-family="sans-serif" font-size="${h}" text-anchor="end" dominant-baseline="central">0:00</text></svg>`, p = document.createElement("img");
		try {
			p.decoding = "sync", p.loading = "eager";
		} catch {}
		return p.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(m)}`, p.width = s, p.height = i, p.style.width = `${s}px`, p.style.height = `${i}px`, e.nodeMap.set(p, t), ct(t, p, e, n), p;
	}
	Fe("IFRAME", Ki);
	Fe("CANVAS", Zi);
	Fe("VIDEO", Ji);
	Fe("AUDIO", ts);
	at();
	Kt();
	Zt();
	rt();
	rt();
	var es = [
		/font\s*awesome/i,
		/material\s*icons/i,
		/ionicons/i,
		/glyphicons/i,
		/feather/i,
		/bootstrap\s*icons/i,
		/remix\s*icons/i,
		/heroicons/i,
		/layui/i,
		/lucide/i
	];
	var Ut = Object.assign({
		materialIconsFilled: "https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
		materialIconsOutlined: "https://fonts.gstatic.com/s/materialiconsoutlined/v110/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.woff2",
		materialIconsRound: "https://fonts.gstatic.com/s/materialiconsround/v109/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmPq_HTTw.woff2",
		materialIconsSharp: "https://fonts.gstatic.com/s/materialiconssharp/v110/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvRImcycg.woff2"
	}, typeof window < "u" && window.__SNAPDOM_ICON_FONTS__ || {});
	var mo = [];
	var ho = new Set();
	function ns(t) {
		return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}
	function go(t) {
		let e = Array.isArray(t) ? t : [t];
		for (let n of e) {
			let o;
			if (n instanceof RegExp) o = n;
			else if (typeof n == "string") o = new RegExp(ns(n), "i");
			else {
				console.warn("[snapdom] Ignored invalid iconFont value:", n);
				continue;
			}
			let r = `${o.source}/${o.flags}`;
			ho.has(r) || (ho.add(r), mo.push(o));
		}
	}
	function dt(t) {
		let e = typeof t == "string" ? t : "", n = [...es, ...mo];
		for (let o of n) if (o instanceof RegExp && o.test(e)) return !0;
		return !!(/icon/i.test(e) || /glyph/i.test(e) || /symbols/i.test(e) || /feather/i.test(e) || /fontawesome/i.test(e));
	}
	function os(t = "") {
		let e = String(t).toLowerCase();
		return /\bmaterial\s*icons\b/.test(e) || /\bmaterial\s*symbols\b/.test(e);
	}
	var po = new Map();
	function rs(t = "") {
		let e = Object.create(null), n = String(t || ""), o = /['"]?\s*([A-Za-z]{3,4})\s*['"]?\s*([+-]?\d+(?:\.\d+)?)\s*/g, r;
		for (; r = o.exec(n);) e[r[1].toUpperCase()] = Number(r[2]);
		return e;
	}
	async function is(t, e, n) {
		let o = String(t || ""), r = o.toLowerCase(), s = String(e || "").toLowerCase();
		if (/\bmaterial\s*icons\b/.test(r) && !/\bsymbols\b/.test(r)) return {
			familyForMeasure: o,
			familyForCanvas: o
		};
		if (!/\bmaterial\s*symbols\b/.test(r)) return {
			familyForMeasure: o,
			familyForCanvas: o
		};
		let a = n && (n.FILL ?? n.fill), c = "outlined";
		/\brounded\b/.test(s) || /\bround\b/.test(s) ? c = "rounded" : /\bsharp\b/.test(s) ? c = "sharp" : /\boutlined\b/.test(s) && (c = "outlined");
		let u = a === 1, l = null;
		if (u && (c === "outlined" && Ut.materialIconsFilled ? l = {
			url: Ut.materialIconsFilled,
			alias: "snapdom-mi-filled"
		} : c === "rounded" && Ut.materialIconsRound ? l = {
			url: Ut.materialIconsRound,
			alias: "snapdom-mi-round"
		} : c === "sharp" && Ut.materialIconsSharp && (l = {
			url: Ut.materialIconsSharp,
			alias: "snapdom-mi-sharp"
		})), !l) return {
			familyForMeasure: o,
			familyForCanvas: o
		};
		if (!po.has(l.alias)) try {
			let f = new FontFace(l.alias, `url(${l.url})`, {
				style: "normal",
				weight: "400"
			});
			document.fonts.add(f), await f.load(), po.set(l.alias, !0);
		} catch {
			return {
				familyForMeasure: o,
				familyForCanvas: o
			};
		}
		let d = `"${l.alias}"`;
		return {
			familyForMeasure: d,
			familyForCanvas: d
		};
	}
	async function ss(t = "Material Icons", e = 24) {
		try {
			await Promise.all([document.fonts.load(`400 ${e}px "${String(t).replace(/["']/g, "")}"`), document.fonts.ready]);
		} catch {}
	}
	function as(t) {
		let e = t.getPropertyValue("-webkit-text-fill-color")?.trim() || "", n = /^transparent$/i.test(e) || /rgba?\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)/i.test(e);
		if (e && !n && e.toLowerCase() !== "currentcolor") return e;
		let o = t.color?.trim();
		return o && o !== "inherit" ? o : "#000";
	}
	async function cs(t, { family: e = "Material Icons", weight: n = "normal", fontSize: o = 32, color: r = "#000", variation: s = "", className: i = "" } = {}) {
		let a = String(e || "").replace(/^['"]+|['"]+$/g, ""), c = window.devicePixelRatio || 1, { familyForMeasure: l, familyForCanvas: d } = await is(a, i, rs(s));
		await ss(d.replace(/^["']+|["']+$/g, ""), o);
		let f = document.createElement("span");
		f.setAttribute("data-snapdom-internal", ""), f.textContent = t, f.style.position = "absolute", f.style.visibility = "hidden", f.style.left = "-99999px", f.style.whiteSpace = "nowrap", f.style.fontFamily = l, f.style.fontWeight = String(n || "normal"), f.style.fontSize = `${o}px`, f.style.lineHeight = "1", f.style.margin = "0", f.style.padding = "0", f.style.fontFeatureSettings = "'liga' 1", f.style.fontVariantLigatures = "normal", f.style.color = r, document.body.appendChild(f);
		let h = f.getBoundingClientRect(), m = Math.max(1, Math.ceil(h.width)), p = Math.max(1, Math.ceil(h.height));
		document.body.removeChild(f);
		let b = document.createElement("canvas");
		b.width = m * c, b.height = p * c;
		let y = b.getContext("2d");
		y.scale(c, c), y.font = `${n ? `${n} ` : ""}${o}px ${d}`, y.textAlign = "left", y.textBaseline = "top", y.fillStyle = r;
		try {
			y.fontKerning = "normal";
		} catch {}
		return y.fillText(t, 0, 0), {
			dataUrl: b.toDataURL(),
			width: m,
			height: p
		};
	}
	async function yo(t, e, n = C.session.nodeMap) {
		if (t?.nodeType !== 1) return 0;
		let o = ".material-icons, [class*=\"material-symbols\"]", r = Array.from(t.querySelectorAll(o)).filter((a) => a && a.textContent && a.textContent.trim());
		if (t.matches?.(o) && t.textContent && t.textContent.trim() && r.unshift(t), r.length === 0) return 0;
		let s = e?.nodeType === 1 ? Array.from(e.querySelectorAll(o)).filter((a) => a && a.textContent && a.textContent.trim()) : [];
		e?.nodeType === 1 && e.matches?.(o) && e.textContent && e.textContent.trim() && s.unshift(e);
		let i = 0;
		for (let a = 0; a < r.length; a++) {
			let c = r[a], u = n && n.get(c) || s[a] || null;
			try {
				let l = getComputedStyle(u || c), d = l.fontFamily || "Material Icons";
				if (!os(d)) continue;
				let f = (u || c).textContent.trim();
				if (!f) continue;
				let h = parseInt(l.fontSize, 10) || 24, { dataUrl: w, width: S, height: g } = await cs(f, {
					family: d,
					weight: l.fontWeight && l.fontWeight !== "normal" ? l.fontWeight : "normal",
					fontSize: h,
					color: as(l),
					variation: l.fontVariationSettings && l.fontVariationSettings !== "normal" ? l.fontVariationSettings : "",
					className: (u || c).className || ""
				});
				c.textContent = "";
				let x = c.ownerDocument.createElement("img");
				x.src = w, x.alt = f, x.style.height = `${h}px`, x.style.width = `${Math.max(1, Math.round(S / g * h))}px`, x.style.objectFit = "contain", x.style.verticalAlign = getComputedStyle(c).verticalAlign || "baseline", c.appendChild(x), i++;
			} catch {}
		}
		return i;
	}
	vt();
	Ct();
	async function So(t, e, n, o = 32, r = "#000") {
		e = e.replace(/^['"]+|['"]+$/g, "");
		let s = window.devicePixelRatio || 1;
		try {
			await document.fonts.ready;
		} catch {}
		let i = document.createElement("span");
		i.setAttribute("data-snapdom-internal", ""), i.textContent = t, i.style.position = "absolute", i.style.visibility = "hidden", i.style.fontFamily = `"${e}"`, i.style.fontWeight = n || "normal", i.style.fontSize = `${o}px`, i.style.lineHeight = "1", i.style.whiteSpace = "nowrap", i.style.padding = "0", i.style.margin = "0", document.body.appendChild(i);
		let a = i.getBoundingClientRect(), c = Math.ceil(a.width), u = Math.ceil(a.height);
		document.body.removeChild(i);
		let l = document.createElement("canvas");
		l.width = Math.max(1, c * s), l.height = Math.max(1, u * s);
		let d = l.getContext("2d");
		return d.scale(s, s), d.font = n ? `${n} ${o}px "${e}"` : `${o}px "${e}"`, d.textAlign = "left", d.textBaseline = "top", d.fillStyle = r, d.fillText(t, 0, 0), {
			dataUrl: l.toDataURL(),
			width: c,
			height: u
		};
	}
	var vo = new Set([
		"serif",
		"sans-serif",
		"monospace",
		"cursive",
		"fantasy",
		"system-ui",
		"emoji",
		"math",
		"fangsong",
		"ui-serif",
		"ui-sans-serif",
		"ui-monospace",
		"ui-rounded"
	]);
	var ls = [
		"katex",
		"mathjax",
		"mathml"
	];
	function an(t) {
		if (!t) return "";
		for (let e of t.split(",")) {
			let n = e.trim().replace(/^['"]+|['"]+$/g, "");
			if (n && !vo.has(n.toLowerCase())) return n;
		}
		return "";
	}
	function fs(t) {
		if (!t) return [];
		let e = [];
		for (let n of t.split(",")) {
			let o = n.trim().replace(/^['"]+|['"]+$/g, "");
			o && (vo.has(o.toLowerCase()) || e.push(o));
		}
		return e;
	}
	function Ee(t) {
		let e = String(t ?? "400").trim().toLowerCase();
		if (e === "normal") return 400;
		if (e === "bold") return 700;
		let n = parseInt(e, 10);
		return Number.isFinite(n) ? Math.min(900, Math.max(100, n)) : 400;
	}
	function $e(t) {
		let e = String(t ?? "normal").trim().toLowerCase();
		return e.startsWith("italic") ? "italic" : e.startsWith("oblique") ? "oblique" : "normal";
	}
	function us(t) {
		let e = String(t ?? "100%").match(/(\d+(?:\.\d+)?)\s*%/);
		return e ? Math.max(50, Math.min(200, parseFloat(e[1]))) : 100;
	}
	function ds(t) {
		let e = String(t || "400").trim(), n = e.match(/^(\d{2,3})\s+(\d{2,3})$/);
		if (n) {
			let r = Ee(n[1]), s = Ee(n[2]);
			return {
				min: Math.min(r, s),
				max: Math.max(r, s)
			};
		}
		let o = Ee(e);
		return {
			min: o,
			max: o
		};
	}
	function hs(t) {
		let e = String(t || "normal").trim().toLowerCase();
		return e === "italic" ? { kind: "italic" } : e.startsWith("oblique") ? { kind: "oblique" } : { kind: "normal" };
	}
	function ps(t) {
		let e = String(t || "100%").trim(), n = e.match(/(\d+(?:\.\d+)?)\s*%\s+(\d+(?:\.\d+)?)\s*%/);
		if (n) {
			let s = parseFloat(n[1]), i = parseFloat(n[2]);
			return {
				min: Math.min(s, i),
				max: Math.max(s, i)
			};
		}
		let o = e.match(/(\d+(?:\.\d+)?)\s*%/), r = o ? parseFloat(o[1]) : 100;
		return {
			min: r,
			max: r
		};
	}
	function ms(t) {
		return !t || typeof t != "string" ? "" : t.replace(/\s+(variable|vf|v[0-9]+)$/i, "").trim().toLowerCase().replace(/\s+/g, "-");
	}
	function gs(t, e, n = []) {
		if (!t) return !1;
		try {
			let o = new URL(t, location.href);
			if (o.origin === location.origin) return !0;
			let s = o.host.toLowerCase();
			if ([
				"fonts.googleapis.com",
				"fonts.gstatic.com",
				"use.typekit.net",
				"p.typekit.net",
				"kit.fontawesome.com",
				"use.fontawesome.com",
				"cdn.jsdelivr.net",
				"unpkg.com",
				"cdnjs.cloudflare.com",
				"esm.sh"
			].some((c) => s.endsWith(c)) || n.some((c) => s === c.toLowerCase() || s.endsWith("." + c.toLowerCase()))) return !0;
			let a = (o.pathname + o.search).toLowerCase();
			if (/\bfont(s)?\b/.test(a) || /\.woff2?(\b|$)/.test(a) || ls.some((c) => a.includes(c))) return !0;
			for (let c of e) {
				let u = c.toLowerCase().replace(/\s+/g, "+"), l = c.toLowerCase().replace(/\s+/g, "-"), d = ms(c);
				if (a.includes(u) || a.includes(l) || d && a.includes(d)) return !0;
			}
			return !1;
		} catch {
			return !1;
		}
	}
	function ys(t) {
		let e = new Set();
		for (let n of t || []) {
			let o = String(n).split("__")[0]?.trim();
			o && e.add(o);
		}
		return e;
	}
	function bo(t, e) {
		return t && t.replace(/url\(\s*(['"]?)([^)'"]+)\1\s*\)/g, (n, o, r) => {
			let s = (r || "").trim();
			if (!s || /^data:|^blob:|^https?:|^file:|^about:/i.test(s)) return n;
			let i = s;
			try {
				i = new URL(s, e || location.href).href;
			} catch {}
			return `url("${i}")`;
		});
	}
	var rn = /@import\s+(?:url\(\s*(['"]?)([^)"']+)\1\s*\)|(['"])([^"']+)\3)([^;]*);/g;
	var Re = 4;
	async function bs(t, e, n) {
		if (!t) return t;
		let o = new Set();
		function r(a, c) {
			try {
				return new URL(a, c || location.href).href;
			} catch {
				return a;
			}
		}
		async function s(a, c, u = 0) {
			if (u > Re) return console.warn(`[snapDOM] @import depth exceeded (${Re}) at ${c}`), a;
			let l = "", d = 0, f;
			for (; f = rn.exec(a);) {
				l += a.slice(d, f.index), d = rn.lastIndex;
				let m = r((f[2] || f[4] || "").trim(), c);
				if (o.has(m)) {
					console.warn(`[snapDOM] Skipping circular @import: ${m}`);
					continue;
				}
				o.add(m);
				let p = "";
				try {
					let b = await G(m, {
						as: "text",
						useProxy: n,
						silent: !0
					});
					b.ok && typeof b.data == "string" && (p = b.data);
				} catch {}
				p ? (p = bo(p, m), p = await s(p, m, u + 1), l += `
/* inlined: ${m} */
${p}
`) : l += f[0];
			}
			return l += a.slice(d), l;
		}
		let i = bo(t, e || location.href);
		return i = await s(i, e || location.href, 0), i;
	}
	var Co = /url\((["']?)([^"')]+)\1\)/g;
	var ws = /@font-face[^{}]*\{[^}]*\}/g;
	function lt(t, e, n = "") {
		return (t.match(new RegExp(`${e}\\s*:\\s*([^;}]+)[;}]`, "i"))?.[1] || n).trim();
	}
	function Ao(t) {
		if (!t) return [];
		let e = [], n = t.split(",").map((o) => o.trim()).filter(Boolean);
		for (let o of n) {
			let r = o.match(/^U\+([0-9A-Fa-f?]+)(?:-([0-9A-Fa-f?]+))?$/);
			if (!r) continue;
			let s = r[1], i = r[2], a = (c) => {
				if (!c.includes("?")) return parseInt(c, 16);
				return [parseInt(c.replace(/\?/g, "0"), 16), parseInt(c.replace(/\?/g, "F"), 16)];
			};
			if (i) {
				let c = a(s), u = a(i), l = Array.isArray(c) ? c[0] : c, d = Array.isArray(u) ? u[1] : u;
				e.push([Math.min(l, d), Math.max(l, d)]);
			} else {
				let c = a(s);
				Array.isArray(c) ? e.push([c[0], c[1]]) : e.push([c, c]);
			}
		}
		return e;
	}
	function ko(t, e) {
		if (!e.length || !t || t.size === 0) return !0;
		for (let n of t) for (let [o, r] of e) if (n >= o && n <= r) return !0;
		return !1;
	}
	function cn(t, e) {
		let n = [];
		if (!t) return n;
		for (let o of t.matchAll(Co)) {
			let r = (o[2] || "").trim();
			if (!(!r || r.startsWith("data:"))) {
				if (!/^https?:/i.test(r)) try {
					r = new URL(r, e || location.href).href;
				} catch {}
				n.push(r);
			}
		}
		return n;
	}
	async function sn(t, e, n = "") {
		let o = t;
		for (let r of t.matchAll(Co)) {
			let s = Et(r[0]);
			if (!s) continue;
			let i = s;
			if (!i.startsWith("http") && !i.startsWith("data:")) try {
				i = new URL(i, e || location.href).href;
			} catch {}
			if (!dt(i)) {
				if (C.resource?.has(i)) {
					C.font?.add(i), o = o.replace(r[0], `url(${C.resource.get(i)})`);
					continue;
				}
				try {
					let a = await G(i, {
						as: "dataURL",
						useProxy: n,
						silent: !0
					});
					if (a.ok && typeof a.data == "string") {
						let c = a.data;
						C.resource?.set(i, c), C.font?.add(i), o = o.replace(r[0], `url(${c})`);
					}
				} catch {
					console.warn("[snapDOM] Failed to fetch font resource:", i);
				}
			}
		}
		return o;
	}
	function xs(t) {
		if (!t.length) return null;
		let e = (a, c) => t.some(([u, l]) => !(l < a || u > c)), n = e(0, 255) || e(305, 305), o = e(256, 591) || e(7680, 7935), r = e(880, 1023), s = e(1024, 1279);
		return e(7840, 7929) || e(258, 259) || e(416, 417) || e(431, 432) ? "vietnamese" : s ? "cyrillic" : r ? "greek" : o ? "latin-ext" : n ? "latin" : null;
	}
	function wo(t = {}) {
		let e = new Set((t.families || []).map((r) => String(r).toLowerCase())), n = new Set((t.domains || []).map((r) => String(r).toLowerCase())), o = new Set((t.subsets || []).map((r) => String(r).toLowerCase()));
		return (r, s) => {
			if (e.size && e.has(r.family.toLowerCase())) return !0;
			if (n.size) for (let i of r.srcUrls) try {
				if (n.has(new URL(i).host.toLowerCase())) return !0;
			} catch {}
			if (o.size) {
				let i = xs(s);
				if (i && o.has(i)) return !0;
			}
			return !1;
		};
	}
	function Ss(t) {
		if (!t) return t;
		let e = /@font-face[^{}]*\{[^}]*\}/gi, n = new Set(), o = [];
		for (let s of t.match(e) || []) {
			let a = an(lt(s, "font-family")), c = lt(s, "font-weight", "400"), u = lt(s, "font-style", "normal"), l = lt(s, "font-stretch", "100%"), d = lt(s, "unicode-range"), f = lt(s, "src"), h = cn(f, location.href), m = h.length ? h.map((b) => String(b).toLowerCase()).sort().join("|") : f.toLowerCase(), p = [
				String(a || "").toLowerCase(),
				c,
				u,
				l,
				d.toLowerCase(),
				m
			].join("|");
			n.has(p) || (n.add(p), o.push(s));
		}
		if (o.length === 0) return t;
		let r = 0;
		return t.replace(e, () => o[r++] || "");
	}
	var xo = new WeakMap();
	var vs = 0;
	function Cs(t) {
		let e = xo.get(t);
		return e === void 0 && (e = vs++, xo.set(t, e)), e;
	}
	function As(t, e, n, o, r, s) {
		return `fonts-embed-css::req=${Array.from(t || []).sort().join("|")}::ex=${e ? JSON.stringify({
			families: (e.families || []).map((f) => String(f).toLowerCase()).sort(),
			domains: (e.domains || []).map((f) => String(f).toLowerCase()).sort(),
			subsets: (e.subsets || []).map((f) => String(f).toLowerCase()).sort()
		}) : ""}::lf=${(n || []).map((f) => `${(f.family || "").toLowerCase()}::${f.weight || "normal"}::${f.style || "normal"}::${f.src || ""}`).sort().join("|")}::px=${o || ""}::fd=${(r || []).map((f) => String(f).toLowerCase()).sort().join("|")}::doc=${Cs(s || document)}`;
	}
	async function Mo(t, e, n, o) {
		let r;
		try {
			r = t.cssRules || [];
		} catch {
			return;
		}
		let s = (i, a) => {
			try {
				return new URL(i, a || location.href).href;
			} catch {
				return i;
			}
		};
		for (let i of r) {
			if (i.type === CSSRule.IMPORT_RULE && i.styleSheet) {
				let a = i.href ? s(i.href, e) : e;
				if (o.depth >= Re) {
					console.warn(`[snapDOM] CSSOM import depth exceeded (${Re}) at ${a}`);
					continue;
				}
				if (a && o.visitedSheets.has(a)) {
					console.warn(`[snapDOM] Skipping circular CSSOM import: ${a}`);
					continue;
				}
				a && o.visitedSheets.add(a);
				let c = {
					...o,
					depth: (o.depth || 0) + 1
				};
				await Mo(i.styleSheet, a, n, c);
				continue;
			}
			if (i.type === CSSRule.FONT_FACE_RULE) {
				let c = an((i.style.getPropertyValue("font-family") || "").trim());
				if (!c || dt(c)) continue;
				let u = (i.style.getPropertyValue("font-weight") || "").trim(), l = (i.style.getPropertyValue("font-style") || "").trim(), d = (i.style.getPropertyValue("font-stretch") || "").trim(), f = (i.style.getPropertyValue("font-variation-settings") || "").trim(), h = (i.style.getPropertyValue("src") || "").trim(), m = (i.style.getPropertyValue("unicode-range") || "").trim(), p = u || "400", b = l || "normal", y = d || "100%", w = (l ? `font-style:${l};` : "") + (u ? `font-weight:${u};` : "") + (d ? `font-stretch:${d};` : "") + (f ? `font-variation-settings:${f};` : "") + (m ? `unicode-range:${m};` : ""), S = o.faceMatchesRequired(c, b, p, y);
				if (!S && !o.requiredIndex.has(c.toLowerCase())) continue;
				let g = Ao(m);
				if (!ko(o.usedCodepoints, g)) continue;
				let x = {
					family: c,
					weightSpec: p,
					styleSpec: b,
					stretchSpec: y,
					unicodeRange: m,
					srcRaw: h,
					srcUrls: cn(h, e || location.href),
					href: e || location.href
				};
				if (o.simpleExcluder && o.simpleExcluder(x, g)) continue;
				if (!S) {
					o.provisionalFaces.push({
						family: c.toLowerCase(),
						block: `@font-face{font-family:${c};src:${h};${w}}`,
						srcRaw: h,
						baseHref: e || location.href
					});
					continue;
				}
				if (o.coveredFamilies.add(c.toLowerCase()), /url\(/i.test(h)) await n(`@font-face{font-family:${c};src:${await sn(h, e || location.href, o.useProxy)};${w}}`);
				else await n(`@font-face{font-family:${c};src:${h};${w}}`);
			}
		}
	}
	async function Te({ required: t, usedCodepoints: e, exclude: n = void 0, localFonts: o = [], useProxy: r = "", fontStylesheetDomains: s = [], doc: i = document } = {}) {
		t instanceof Set || (t = new Set()), e instanceof Set || (e = new Set());
		let a = new Map();
		for (let g of t) {
			let [x, v, k, A] = String(g).split("__");
			if (!x) continue;
			let M = x.toLowerCase(), F = a.get(M) || [];
			F.push({
				w: parseInt(v, 10),
				s: k,
				st: parseInt(A, 10)
			}), a.set(M, F);
		}
		function c(g, x, v, k) {
			let A = String(g).toLowerCase();
			if (!a.has(A)) return !1;
			let M = a.get(A), F = ds(v), E = hs(x), R = ps(k), W = F.min !== F.max, T = F.min, I = (U) => E.kind === "normal" && U === "normal" || E.kind !== "normal" && (U === "italic" || U === "oblique"), O = !1;
			for (let U of M) {
				let P = W ? U.w >= F.min && U.w <= F.max : U.w === T, z = I($e(U.s)), j = U.st >= R.min && U.st <= R.max;
				if (P && z && j) {
					O = !0;
					break;
				}
			}
			if (O) return !0;
			if (!W) for (let U of M) {
				let P = I($e(U.s)), z = U.st >= R.min && U.st <= R.max;
				if (Math.abs(T - U.w) <= 300 && P && z) return !0;
			}
			if (!W && E.kind === "normal" && M.some((P) => $e(P.s) !== "normal")) for (let P of M) {
				let z = Math.abs(T - P.w) <= 300, j = P.st >= R.min && P.st <= R.max;
				if (z && j) return !0;
			}
			return !1;
		}
		let u = wo(n), l = As(t, n, o, r, s, i);
		if (C.resource?.has(l)) return C.resource.get(l);
		let d = ys(t), f = [], h = rn;
		for (let g of i.querySelectorAll("style")) {
			let x = g.textContent || "";
			for (let v of x.matchAll(h)) {
				let k = (v[2] || v[4] || "").trim();
				if (!k || dt(k)) continue;
				i.querySelector(`link[rel="stylesheet"][href="${k}"]`) || f.push(k);
			}
		}
		let m = [];
		f.length && await Promise.all(f.map((g) => new Promise((x) => {
			if (i.querySelector(`link[rel="stylesheet"][href="${g}"]`)) return x(null);
			let v = i.createElement("link");
			v.rel = "stylesheet", v.href = g, v.setAttribute("data-snapdom", "injected-import"), v.onload = () => x(v), v.onerror = () => x(null), i.head.appendChild(v), m.push(v);
		})));
		let p = "", b = new Set(), y = [], w = Array.from(i.querySelectorAll("link[rel=\"stylesheet\"]")).filter((g) => !!g.href);
		for (let g of m) try {
			g.remove();
		} catch {}
		for (let g of w) try {
			if (dt(g.href)) continue;
			let x = "", v = !1;
			try {
				v = new URL(g.href, location.href).origin === location.origin;
			} catch {}
			if (!v) {
				let A = Array.isArray(s) ? s : [];
				if (!gs(g.href, d, A)) continue;
			}
			if (v) {
				let A = Array.from(i.styleSheets).find((M) => M.href === g.href);
				if (A) try {
					let M = A.cssRules || [];
					x = Array.from(M).map((F) => F.cssText).join("");
				} catch {}
			}
			if (!x) {
				let A = await G(g.href, {
					as: "text",
					useProxy: r
				});
				if (A?.ok && typeof A.data == "string" && (x = A.data), dt(g.href)) continue;
			}
			x = await bs(x, g.href, r);
			let k = "";
			for (let A of x.match(ws) || []) {
				let F = an(lt(A, "font-family"));
				if (!F || dt(F)) continue;
				let E = lt(A, "font-weight", "400"), R = lt(A, "font-style", "normal"), W = lt(A, "font-stretch", "100%"), T = lt(A, "unicode-range"), I = lt(A, "src"), O = cn(I, g.href), U = c(F, R, E, W);
				if (!U && !a.has(F.toLowerCase())) continue;
				let P = Ao(T);
				if (!ko(e, P)) continue;
				let z = {
					family: F,
					weightSpec: E,
					styleSpec: R,
					stretchSpec: W,
					unicodeRange: T,
					srcRaw: I,
					srcUrls: O,
					href: g.href
				};
				if (n && u(z, P)) continue;
				if (!U) {
					y.push({
						family: F.toLowerCase(),
						block: A,
						srcRaw: I,
						baseHref: g.href
					});
					continue;
				}
				b.add(F.toLowerCase());
				let j = /url\(/i.test(I) ? await sn(A, g.href, r) : A;
				k += j;
			}
			k.trim() && (p += k);
		} catch {
			console.warn("[snapDOM] Failed to process stylesheet:", g.href);
		}
		let S = {
			requiredIndex: a,
			usedCodepoints: e,
			faceMatchesRequired: c,
			coveredFamilies: b,
			provisionalFaces: y,
			simpleExcluder: n ? wo(n) : null,
			useProxy: r,
			visitedSheets: new Set(),
			depth: 0
		};
		for (let g of i.styleSheets) if (!(g.href && w.some((x) => x.href === g.href))) try {
			let x = g.href || location.origin + "/";
			x && S.visitedSheets.add(x), await Mo(g, x, async (v) => {
				p += v;
			}, S);
		} catch {}
		for (let g of y) b.has(g.family) || (p += /url\(/i.test(g.srcRaw) ? await sn(g.block, g.baseHref, r) : g.block);
		try {
			for (let g of i.fonts || []) {
				if (!g || !g.family || g.status !== "loaded" || !g._snapdomSrc) continue;
				let x = String(g.family).replace(/^['"]+|['"]+$/g, "");
				if (dt(x) || !a.has(x.toLowerCase()) || n?.families && n.families.some((k) => String(k).toLowerCase() === x.toLowerCase())) continue;
				let v = g._snapdomSrc;
				if (!String(v).startsWith("data:")) {
					if (C.resource?.has(g._snapdomSrc)) v = C.resource.get(g._snapdomSrc), C.font?.add(g._snapdomSrc);
					else if (!C.font?.has(g._snapdomSrc)) try {
						let k = await G(g._snapdomSrc, {
							as: "dataURL",
							useProxy: r,
							silent: !0
						});
						if (k.ok && typeof k.data == "string") v = k.data, C.resource?.set(g._snapdomSrc, v), C.font?.add(g._snapdomSrc);
						else continue;
					} catch {
						console.warn("[snapDOM] Failed to fetch dynamic font src:", g._snapdomSrc);
						continue;
					}
				}
				p += `@font-face{font-family:'${x}';src:url(${v});font-style:${g.style || "normal"};font-weight:${g.weight || "normal"};}`;
			}
		} catch {}
		for (let g of o) {
			if (!g || typeof g != "object") continue;
			let x = String(g.family || "").replace(/^['"]+|['"]+$/g, "");
			if (!x || dt(x) || !a.has(x.toLowerCase()) || n?.families && n.families.some((E) => String(E).toLowerCase() === x.toLowerCase())) continue;
			let v = g.weight != null ? String(g.weight) : "normal", k = g.style != null ? String(g.style) : "normal", A = g.stretchPct != null ? `${g.stretchPct}%` : "100%", M = String(g.src || ""), F = M;
			if (!F.startsWith("data:")) {
				if (C.resource?.has(M)) F = C.resource.get(M), C.font?.add(M);
				else if (!C.font?.has(M)) try {
					let E = await G(M, {
						as: "dataURL",
						useProxy: r,
						silent: !0
					});
					if (E.ok && typeof E.data == "string") F = E.data, C.resource?.set(M, F), C.font?.add(M);
					else continue;
				} catch {
					console.warn("[snapDOM] Failed to fetch localFonts src:", M);
					continue;
				}
			}
			p += `@font-face{font-family:'${x}';src:url(${F});font-style:${k};font-weight:${v};font-stretch:${A};}`;
		}
		return p && (p = Ss(p), C.resource?.set(l, p)), p;
	}
	function oe(t, e) {
		let n = new Set(), o = new Set();
		if (!t) return {
			required: n,
			usedCodepoints: o
		};
		let r = (c) => {
			if (c) for (let u of c) o.add(u.codePointAt(0));
		}, s = (c) => {
			let u = fs(c.fontFamily);
			if (u.length) for (let l of u) n.add(`${l}__${Ee(c.fontWeight)}__${$e(c.fontStyle)}__${us(c.fontStretch)}`);
		}, i = (c) => {
			s(N(c));
			for (let u of ["::before", "::after"]) {
				let l = N(c, u), d = l && l.content;
				if (!(!d || d === "none" || d === "normal")) if (s(l), /^["']/.test(d)) r(d.slice(1, -1));
				else {
					let f = d.match(/\\[0-9A-Fa-f]{1,6}/g);
					if (f) for (let h of f) try {
						o.add(parseInt(h.slice(1), 16));
					} catch {}
				}
			}
		};
		i(t);
		let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null);
		for (; a.nextNode();) {
			let c = a.currentNode;
			if (c.nodeType === Node.TEXT_NODE) {
				if (e && c.parentElement && !e(c.parentElement)) continue;
				r(c.nodeValue || "");
			} else {
				if (e && !e(c)) continue;
				i(c);
			}
		}
		return {
			required: n,
			usedCodepoints: o
		};
	}
	function Fo(t, e) {
		return oe(t, e).required;
	}
	async function Dt(t, e = 2, n = document) {
		try {
			await n.fonts.ready;
		} catch {}
		let o = Array.from(t || []).filter(Boolean);
		if (o.length === 0) return;
		let r = () => {
			let s = n.createElement("div");
			s.setAttribute("data-snapdom-internal", ""), s.style.cssText = "position:absolute!important;left:-9999px!important;top:0!important;opacity:0!important;pointer-events:none!important;contain:layout size style;";
			for (let i of o) {
				let a = n.createElement("span");
				a.textContent = "AaBbGg1234ÁÉÍÓÚçñ—∞", a.style.fontFamily = `"${i}"`, a.style.fontWeight = "700", a.style.fontStyle = "italic", a.style.fontSize = "32px", a.style.lineHeight = "1", a.style.whiteSpace = "nowrap", a.style.margin = "0", a.style.padding = "0", s.appendChild(a);
			}
			n.body.appendChild(s), s.offsetWidth, n.body.removeChild(s);
		};
		for (let s = 0; s < Math.max(1, e); s++) r(), await mt(), await mt();
	}
	function To(t) {
		return /\bcounter\s*\(|\bcounters\s*\(/.test(t || "");
	}
	function Eo(t, e = !1) {
		let n = "", o = Math.max(1, t);
		for (; o > 0;) o--, n = String.fromCharCode(97 + o % 26) + n, o = Math.floor(o / 26);
		return e ? n.toUpperCase() : n;
	}
	function $o(t, e = !0) {
		let n = [
			[1e3, "M"],
			[900, "CM"],
			[500, "D"],
			[400, "CD"],
			[100, "C"],
			[90, "XC"],
			[50, "L"],
			[40, "XL"],
			[10, "X"],
			[9, "IX"],
			[5, "V"],
			[4, "IV"],
			[1, "I"]
		], o = Math.max(1, Math.min(3999, t)), r = "";
		for (let [s, i] of n) for (; o >= s;) r += i, o -= s;
		return e ? r : r.toLowerCase();
	}
	function Ro(t, e) {
		switch ((e || "decimal").toLowerCase()) {
			case "decimal": return String(t);
			case "decimal-leading-zero": {
				let n = Math.abs(t);
				return (t < 0 ? "-" : "") + (n < 10 ? "0" : "") + String(n);
			}
			case "lower-alpha": return Eo(t, !1);
			case "upper-alpha": return Eo(t, !0);
			case "lower-roman": return $o(t, !1);
			case "upper-roman": return $o(t, !0);
			default: return String(t);
		}
	}
	function Po(t) {
		let e = new WeakMap(), n = t instanceof Document ? t.documentElement : t, o = (u) => u && u.tagName === "LI", r = (u) => {
			let l = 0, d = u?.parentElement;
			if (!d) return 0;
			for (let f of d.children) {
				if (f === u) break;
				f.tagName === "LI" && l++;
			}
			return l;
		}, s = (u) => {
			let l = new Map();
			for (let [d, f] of u) l.set(d, f.slice());
			return l;
		}, i = (u, l, d) => {
			let f = s(u), h;
			try {
				h = d.style?.counterReset || getComputedStyle(d).counterReset;
			} catch {}
			if (h && h !== "none") for (let b of h.split(",")) {
				let y = b.trim().split(/\s+/), w = y[0], S = Number.isFinite(Number(y[1])) ? Number(y[1]) : 0;
				if (!w) continue;
				let g = l.get(w);
				if (g && g.length) {
					let x = g.slice();
					x.push(S), f.set(w, x);
				} else f.set(w, [S]);
			}
			let m;
			try {
				m = d.style?.counterSet || getComputedStyle(d).counterSet;
			} catch {}
			if (m && m !== "none") for (let b of m.split(",")) {
				let y = b.trim().split(/\s+/), w = y[0], S = Number.isFinite(Number(y[1])) ? Number(y[1]) : 0;
				if (!w) continue;
				let g = f.get(w) || [];
				g.length === 0 && g.push(0), g[g.length - 1] = S, f.set(w, g);
			}
			let p;
			try {
				p = d.style?.counterIncrement || getComputedStyle(d).counterIncrement;
			} catch {}
			if (p && p !== "none") for (let b of p.split(",")) {
				let y = b.trim().split(/\s+/), w = y[0], S = Number.isFinite(Number(y[1])) ? Number(y[1]) : 1;
				if (!w) continue;
				let g = f.get(w) || [];
				g.length === 0 && g.push(0), g[g.length - 1] += S, f.set(w, g);
			}
			try {
				if (getComputedStyle(d).display === "list-item" && o(d)) {
					let y = d.parentElement, w = 1;
					if (y && y.tagName === "OL") {
						let g = y.getAttribute("start"), x = Number.isFinite(Number(g)) ? Number(g) : 1, v = r(d), k = d.getAttribute("value");
						w = Number.isFinite(Number(k)) ? Number(k) : x + v;
					} else w = 1 + r(d);
					let S = f.get("list-item") || [];
					S.length === 0 && S.push(0), S[S.length - 1] = w, f.set("list-item", S);
				}
			} catch {}
			return f;
		}, a = (u, l, d) => {
			let f = i(d, l, u);
			e.set(u, f);
			let h = f;
			for (let p of u.children) h = a(p, f, h);
			let m = new Map();
			for (let [p, b] of d) {
				let y = b.length, w = h.get(p);
				m.set(p, w && w.length ? w.slice(0, y) : b.slice());
			}
			for (let [p, b] of h) !m.has(p) && b.length && !l.has(p) && m.set(p, b.slice(0, 1));
			return m;
		}, c = new Map();
		return a(n, c, c), {
			get(u, l) {
				let d = e.get(u)?.get(l);
				return d && d.length ? d[d.length - 1] : 0;
			},
			getStack(u, l) {
				let d = e.get(u)?.get(l);
				return d ? d.slice() : [];
			}
		};
	}
	function No(t, e, n) {
		if (!t || t === "none") return t;
		try {
			return t.replace(/\b(counter|counters)\s*\(([^)]+)\)/g, (r, s, i) => {
				let a = String(i).split(",").map((c) => c.trim());
				if (s === "counter") {
					let c = a[0]?.replace(/^["']|["']$/g, ""), u = (a[1] || "decimal").toLowerCase();
					return Ro(n.get(e, c), u);
				} else {
					let c = a[0]?.replace(/^["']|["']$/g, ""), u = a[1]?.replace(/^["']|["']$/g, "") ?? "", l = (a[2] || "decimal").toLowerCase(), d = n.getStack(e, c);
					return d.length ? d.map((h) => Ro(h, l)).join(u) : "";
				}
			});
		} catch {
			return "- ";
		}
	}
	vt();
	var Ht = new WeakMap();
	var Lo = 1e3;
	function ks(t, e) {
		let n = Oo(t);
		return e ? (e.__pseudoPreflightFp !== n && (e.__pseudoPreflight = _o(t, n), e.__pseudoPreflightFp = n), !!e.__pseudoPreflight) : _o(t, n);
	}
	function ln(t) {
		try {
			return t && t.cssRules ? t.cssRules : null;
		} catch {
			return null;
		}
	}
	function Oo(t) {
		let e = t.querySelectorAll("style,link[rel~=\"stylesheet\"]"), n = `n:${e.length}|`, o = 0;
		for (let s = 0; s < e.length; s++) {
			let i = e[s];
			if (i.tagName === "STYLE") {
				let a = i.textContent ? i.textContent.length : 0;
				n += `S${a}|`;
				let c = i.sheet, u = c ? ln(c) : null;
				u && (o += u.length);
			} else {
				let a = i.getAttribute("href") || "", c = i.getAttribute("media") || "all";
				n += `L${a}|m:${c}|`;
				let u = i.sheet, l = u ? ln(u) : null;
				l && (o += l.length);
			}
		}
		let r = t.adoptedStyleSheets;
		return n += `ass:${Array.isArray(r) ? r.length : 0}|tr:${o}`, n;
	}
	function Io(t, e, n) {
		let o = ln(t);
		if (!o) return !1;
		for (let r = 0; r < o.length; r++) {
			if (n.budget <= 0) return !1;
			let s = o[r], i = s && s.cssText ? s.cssText : "";
			n.budget--;
			for (let a of e) if (i.includes(a)) return !0;
			if (s && s.cssRules && s.cssRules.length) for (let a = 0; a < s.cssRules.length && n.budget > 0; a++) {
				let c = s.cssRules[a], u = c && c.cssText ? c.cssText : "";
				n.budget--;
				for (let l of e) if (u.includes(l)) return !0;
			}
			if (n.budget <= 0) return !1;
		}
		return !1;
	}
	function _o(t = document, e = Oo(t)) {
		let n = Ht.get(t);
		if (n && n.fingerprint === e) return n.result;
		let o = [
			"::before",
			"::after",
			"::first-letter",
			":before",
			":after",
			":first-letter",
			"counter(",
			"counters(",
			"counter-increment",
			"counter-reset"
		], r = t.querySelectorAll("style");
		for (let i = 0; i < r.length; i++) {
			let a = r[i].textContent || "";
			for (let c of o) if (a.includes(c)) return Ht.set(t, {
				fingerprint: e,
				result: !0
			}), !0;
		}
		let s = t.adoptedStyleSheets;
		if (Array.isArray(s) && s.length) {
			let i = { budget: Lo };
			try {
				for (let a of s) if (Io(a, o, i)) return Ht.set(t, {
					fingerprint: e,
					result: !0
				}), !0;
			} catch {}
		}
		{
			let i = t.querySelectorAll("style,link[rel~=\"stylesheet\"]"), a = { budget: Lo };
			for (let c = 0; c < i.length && a.budget > 0; c++) {
				let u = i[c], l = null;
				if (u.tagName, l = u.sheet || null, l && Io(l, o, a)) return Ht.set(t, {
					fingerprint: e,
					result: !0
				}), !0;
			}
		}
		return t.querySelector("[style*=\"counter(\"], [style*=\"counters(\"]") ? (Ht.set(t, {
			fingerprint: e,
			result: !0
		}), !0) : (Ht.set(t, {
			fingerprint: e,
			result: !1
		}), !1);
	}
	function Wo(t) {
		for (let e of [
			"Top",
			"Right",
			"Bottom",
			"Left"
		]) {
			let n = parseFloat(t[`border${e}Width`]) || 0, o = t[`border${e}Style`];
			if (n > 0 && o && o !== "none" && o !== "hidden") return !0;
		}
		return !1;
	}
	function Ms(t, e) {
		let n = null, o = () => {
			if (!n) try {
				n = Po(t);
			} catch (r) {
				_$1(e, "buildCounterContext failed", r), n = {
					get: () => 0,
					getStack: () => []
				};
			}
			return n;
		};
		return {
			get(r, s) {
				return o().get(r, s);
			},
			getStack(r, s) {
				return o().getStack(r, s);
			}
		};
	}
	function Fs(t) {
		let e = !1;
		for (let n = 0; n < t.length; n++) {
			let o = t[n];
			if (o === "\"") e = !e;
			else if (o === "/" && !e) return t.slice(0, n).trim();
		}
		return t;
	}
	function Es(t) {
		if (!t) return "";
		let e = [], n = /"([^"]*)"/g, o = 0, r;
		for (; r = n.exec(t);) {
			let i = t.slice(o, r.index).trim();
			i && e.push(i), e.push(r[1]), o = n.lastIndex;
		}
		let s = t.slice(o).trim();
		return s && e.push(s), e.join("");
	}
	function fn(t, e, n) {
		let o = t.parentElement, r = o && n ? n.get(o) : null;
		return r ? {
			get(s, i) {
				let a = e.get(s, i), c = r.get(i);
				return typeof c == "number" ? Math.max(a, c) : a;
			},
			getStack(s, i) {
				let a = e.getStack(s, i);
				if (!a.length) return a;
				let c = r.get(i);
				if (typeof c == "number") {
					let u = a.slice();
					return u[u.length - 1] = Math.max(u[u.length - 1], c), u;
				}
				return a;
			}
		} : e;
	}
	function un(t, e, n) {
		let o = new Map();
		function r(u) {
			let l = [];
			if (!u || u === "none") return l;
			for (let d of String(u).split(",")) {
				let f = d.trim().split(/\s+/), h = f[0], m = Number.isFinite(Number(f[1])) ? Number(f[1]) : void 0;
				h && l.push({
					name: h,
					num: m
				});
			}
			return l;
		}
		let s = r(e?.counterReset), i = r(e?.counterSet), a = r(e?.counterIncrement);
		function c(u) {
			if (o.has(u)) return o.get(u).slice();
			let l = n.getStack(t, u);
			l = l.length ? l.slice() : [];
			let d = s.find((m) => m.name === u);
			if (d) {
				let m = Number.isFinite(d.num) ? d.num : 0;
				l = l.length ? [...l, m] : [m];
			}
			let f = i.find((m) => m.name === u);
			if (f) {
				let m = Number.isFinite(f.num) ? f.num : 0;
				l.length === 0 && (l = [0]), l[l.length - 1] = m;
			}
			let h = a.find((m) => m.name === u);
			if (h) {
				let m = Number.isFinite(h.num) ? h.num : 1;
				l.length === 0 && (l = [0]), l[l.length - 1] += m;
			}
			return o.set(u, l.slice()), l;
		}
		return {
			get(u, l) {
				let d = c(l);
				return d.length ? d[d.length - 1] : 0;
			},
			getStack(u, l) {
				return c(l);
			},
			__incs: a
		};
	}
	function $s(t, e, n, o) {
		let r;
		try {
			r = N(t, e);
		} catch {}
		let s = r?.content;
		if (!s || s === "none" || s === "normal") return {
			text: "",
			incs: []
		};
		s = Fs(s);
		let i = fn(t, n, o), a = un(t, r, i);
		return {
			text: Es(To(s) ? No(s, t, a) : s),
			incs: a.__incs || []
		};
	}
	async function Pe(t, e, n, o) {
		if (t?.nodeType !== 1 || e?.nodeType !== 1 || t.tagName === "TEXTAREA") return;
		if (!ks(t.ownerDocument || document, n)) return;
		n.__siblingCounters || (n.__siblingCounters = new WeakMap()), n.__counterCtx || (n.__counterCtx = Ms(t.ownerDocument || document, n));
		let s = n.__counterCtx;
		for (let a of [
			"::before",
			"::after",
			"::first-letter"
		]) try {
			let c = N(t, a);
			if (!c || c.content === "none" && c.backgroundImage === "none" && c.backgroundColor === "transparent" && !Wo(c) && (!c.transform || c.transform === "none") && c.display === "inline") continue;
			if (a === "::first-letter") {
				let L = N(t), B = (L?.display || "").toLowerCase();
				if (B.includes("flex") || B.includes("grid")) continue;
				let D = (bt) => c[bt] !== L[bt] && (parseFloat(c[bt]) || 0) !== 0;
				if (!(c.color !== L.color || c.fontSize !== L.fontSize || c.fontWeight !== L.fontWeight || c.fontFamily !== L.fontFamily || c.fontStyle !== L.fontStyle || c.textTransform !== L.textTransform || c.float !== L.float && c.float !== "none" || D("paddingTop") || D("paddingRight") || D("paddingBottom") || D("paddingLeft") || D("marginTop") || D("marginRight") || D("marginBottom") || D("marginLeft"))) continue;
				let q = Array.from(e.childNodes).find((bt) => bt.nodeType === Node.TEXT_NODE && bt.textContent?.trim().length > 0);
				if (!q) continue;
				let J = q.textContent, yt = J.match(/^([^\p{L}\p{N}\s]*[\p{L}\p{N}](?:['’])?)/u)?.[0], Nt = J.slice(yt?.length || 0);
				if (!yt || /[\uD800-\uDFFF]/.test(yt)) continue;
				let it = document.createElement("span");
				it.textContent = yt, it.dataset.snapdomPseudo = "::first-letter";
				let It = Wt(we(c), "span");
				n.styleMap.set(it, It);
				let kt = document.createTextNode(Nt);
				e.replaceChild(kt, q), e.insertBefore(it, kt);
				continue;
			}
			let l = c.content ?? "", d = l === "" || l === "none" || l === "normal", { text: f, incs: h } = $s(t, a, s, n.__siblingCounters), m = c.backgroundImage, p = c.backgroundColor, b = c.fontFamily, y = parseInt(c.fontSize) || 32, w = parseInt(c.fontWeight) || !1, S = c.color || "#000", g = c.transform, x = dt(b), v = !d && f !== "", k = m && m !== "none", A = p && p !== "transparent" && p !== "rgba(0, 0, 0, 0)", M = Wo(c), F = g && g !== "none", E = l !== "none" && l !== "normal", R = E && ((parseFloat(c.width) || 0) > 0 || (parseFloat(c.height) || 0) > 0), W = E && c.boxShadow && c.boxShadow !== "none", T = E && c.outlineStyle && c.outlineStyle !== "none" && (parseFloat(c.outlineWidth) || 0) > 0;
			if (!(v || k || A || M || F || R || W || T)) {
				if (h && h.length && t.parentElement) {
					let L = n.__siblingCounters.get(t.parentElement) || new Map();
					for (let { name: B } of h) {
						if (!B) continue;
						let D = fn(t, s, n.__siblingCounters), q = un(t, N(t, a), D).get(t, B);
						L.set(B, q);
					}
					n.__siblingCounters.set(t.parentElement, L);
				}
				continue;
			}
			let O = f.startsWith("url(") || /^-?(?:webkit-)?image-set\(/i.test(f), U = !1;
			if (v && !x && f.length > 1 && !O) {
				let L = N(t), B = parseFloat(L.fontSize) || 16, D = parseFloat(L.lineHeight);
				Number.isFinite(D) || (D = B * 1.5), t.getBoundingClientRect().height < D * 1.6 && (e.style.whiteSpace = "nowrap", U = !0);
			}
			let P = document.createElement("span");
			P.dataset.snapdomPseudo = a, P.style.pointerEvents = "none", U && (P.style.whiteSpace = "nowrap");
			let z = we(c), j = (N(t).display || "").toLowerCase(), tt = j.includes("flex") || j.includes("grid");
			if (tt) {
				let L = z["min-width"];
				(!L || L === "auto" || L === "0px") && (z["min-width"] = "0px");
			}
			let et = Wt(z, "span", v, tt);
			if (n.styleMap.set(P, et), x && f && f.length === 1) {
				let { dataUrl: L, width: B, height: D } = await So(f, b, w, y, S), V = document.createElement("img");
				V.src = L, V.style = `height:${y}px;width:${B / D * y}px;object-fit:contain;`, P.appendChild(V), e.dataset.snapdomHasIcon = "true";
			} else if (f && O) {
				let L = Yt(f, typeof devicePixelRatio < "u" && devicePixelRatio || 1) ?? Et(f);
				if (L?.trim()) try {
					let B = await G(St(L), {
						as: "dataURL",
						useProxy: o.useProxy
					});
					if (B?.ok && typeof B.data == "string") {
						let D = document.createElement("img");
						D.src = B.data, D.style = `width:${y}px;height:auto;object-fit:contain;`, P.appendChild(D);
					}
				} catch (B) {
					console.error(`[snapdom] Error in pseudo ${a} for`, t, B);
				}
			} else !x && v && (P.textContent = f);
			P.style.backgroundImage = "none", "maskImage" in P.style && (P.style.maskImage = "none"), "webkitMaskImage" in P.style && (P.style.webkitMaskImage = "none");
			try {
				P.style.backgroundRepeat = c.backgroundRepeat, P.style.backgroundSize = c.backgroundSize, c.backgroundPositionX && c.backgroundPositionY ? (P.style.backgroundPositionX = c.backgroundPositionX, P.style.backgroundPositionY = c.backgroundPositionY) : P.style.backgroundPosition = c.backgroundPosition, P.style.backgroundOrigin = c.backgroundOrigin, P.style.backgroundClip = c.backgroundClip, P.style.backgroundAttachment = c.backgroundAttachment, P.style.backgroundBlendMode = c.backgroundBlendMode;
			} catch {}
			if (k) try {
				let L = Ot(m), B = await Promise.all(L.map($t));
				P.style.backgroundImage = B.join(", ");
			} catch (L) {
				console.warn(`[snapdom] Failed to inline background-image for ${a}`, L);
			}
			A && (P.style.backgroundColor = p);
			let ft = P.childNodes.length > 0 || P.textContent?.trim() !== "" || k || A || M || F || R || W || T;
			if (h && h.length && t.parentElement) {
				let L = n.__siblingCounters.get(t.parentElement) || new Map(), B = fn(t, s, n.__siblingCounters), D = un(t, N(t, a), B);
				for (let { name: V } of h) {
					if (!V) continue;
					let q = D.get(t, V);
					L.set(V, q);
				}
				n.__siblingCounters.set(t.parentElement, L);
			}
			if (!ft) continue;
			a === "::before" ? (e.dataset.snapdomHasBefore = "1", e.insertBefore(P, e.firstChild)) : (e.dataset.snapdomHasAfter = "1", e.appendChild(P));
		} catch (c) {
			console.warn(`[snapdom] Failed to capture ${a} for`, t, c);
		}
		let i = Array.from(e.children).filter((a) => !a.dataset.snapdomPseudo);
		if (n.nodeMap) for (let a of i) {
			let c = n.nodeMap.get(a);
			c?.nodeType === 1 && await Pe(c, a, n, o);
		}
		else {
			let a = Array.from(t.children);
			for (let c = 0; c < Math.min(a.length, i.length); c++) await Pe(a[c], i[c], n, o);
		}
	}
	function Bo(t, e) {
		if (!t || t?.nodeType !== 1) return;
		let n = t.ownerDocument || document, o = e || n, r = t instanceof SVGSVGElement ? [t] : Array.from(t.querySelectorAll("svg"));
		if (r.length === 0) return;
		let s = /url\(\s*#([^)]+)\)/g, i = [
			"fill",
			"stroke",
			"filter",
			"clip-path",
			"mask",
			"marker",
			"marker-start",
			"marker-mid",
			"marker-end"
		], a = (g) => window.CSS && CSS.escape ? CSS.escape(g) : g.replace(/[^a-zA-Z0-9_-]/g, "\\$&"), c = "http://www.w3.org/1999/xlink", u = (g) => {
			if (!g || !g.getAttribute) return null;
			let x = g.getAttribute("href") || g.getAttribute("xlink:href") || (typeof g.getAttributeNS == "function" ? g.getAttributeNS(c, "href") : null);
			if (x) return x;
			let v = g.attributes;
			if (!v) return null;
			for (let k = 0; k < v.length; k++) {
				let A = v[k];
				if (!A || !A.name) continue;
				if (A.name === "href") return A.value;
				let M = A.name.indexOf(":");
				if (M !== -1 && A.name.slice(M + 1) === "href") return A.value;
			}
			return null;
		}, l = new Set(Array.from(t.querySelectorAll("[id]")).map((g) => g.id)), d = new Set(), f = !1, h = (g, x = null) => {
			if (!g) return;
			s.lastIndex = 0;
			let v;
			for (; v = s.exec(g);) {
				f = !0;
				let k = (v[1] || "").trim();
				k && (l.has(k) || (d.add(k), x && !x.has(k) && x.add(k)));
			}
		}, m = (g) => {
			let x = g.querySelectorAll("use");
			for (let A of x) {
				let M = u(A);
				if (!M || !M.startsWith("#")) continue;
				f = !0;
				let F = M.slice(1).trim();
				F && !l.has(F) && d.add(F);
			}
			let v = "*[style*=\"url(\"],*[fill^=\"url(\"], *[stroke^=\"url(\"],*[filter^=\"url(\"],*[clip-path^=\"url(\"],*[mask^=\"url(\"],*[marker^=\"url(\"],*[marker-start^=\"url(\"],*[marker-mid^=\"url(\"],*[marker-end^=\"url(\"]";
			h(g.getAttribute("style") || "");
			for (let A of i) h(g.getAttribute(A));
			let k = g.querySelectorAll(v);
			for (let A of k) {
				h(A.getAttribute("style") || "");
				for (let M of i) h(A.getAttribute(M));
			}
		};
		for (let g of r) m(g);
		if (!f) return;
		let p = t.querySelector("svg.inline-defs-container");
		p || (p = n.createElementNS("http://www.w3.org/2000/svg", "svg"), p.classList.add("inline-defs-container"), p.setAttribute("aria-hidden", "true"), p.setAttribute("style", "position:absolute;width:0;height:0;overflow:hidden"), t.insertBefore(p, t.firstChild || null));
		let b = p.querySelector("defs") || null, y = (g) => {
			if (!g || l.has(g)) return null;
			let x = a(g), v = (k) => {
				let A = o.querySelector(k);
				return A && !t.contains(A) ? A : null;
			};
			return v(`svg defs > *#${x}`) || v(`svg > symbol#${x}`) || v(`*#${x}`);
		};
		if (!d.size) return;
		let w = new Set(d), S = new Set();
		for (; w.size;) {
			let g = w.values().next().value;
			if (w.delete(g), !g || l.has(g) || S.has(g)) continue;
			let x = y(g);
			if (!x) {
				S.add(g);
				continue;
			}
			b || (b = n.createElementNS("http://www.w3.org/2000/svg", "defs"), p.appendChild(b));
			let v = x.cloneNode(!0);
			v.id || v.setAttribute("id", g), b.appendChild(v), S.add(g), l.add(g);
			let k = [v, ...v.querySelectorAll("*")];
			for (let A of k) {
				let M = u(A);
				if (M && M.startsWith("#")) {
					let E = M.slice(1).trim();
					E && !l.has(E) && !S.has(E) && w.add(E);
				}
				let F = A.getAttribute?.("style") || "";
				F && h(F, w);
				for (let E of i) {
					let R = A.getAttribute?.(E);
					R && h(R, w);
				}
			}
		}
	}
	rt();
	function Uo(t) {
		let e = getComputedStyle(t), n = e.outlineStyle, o = e.outlineWidth, r = e.borderStyle, s = e.borderWidth;
		if (n !== "none" && parseFloat(o) > 0 && (r === "none" || parseFloat(s) === 0)) {
			let c = t.style.border;
			return t.style.border = `${o} solid transparent`, () => {
				t.style.border = c;
			};
		}
		return () => {};
	}
	function Do(t) {
		let e = [];
		try {
			let n = t.querySelectorAll("*");
			for (let o of n) {
				if (!(o instanceof HTMLElement)) continue;
				let r = o.style.contentVisibility || "", s = getComputedStyle(o);
				(s.contentVisibility || s.getPropertyValue("content-visibility") || "") === "auto" && (e.push({
					el: o,
					original: r
				}), o.style.contentVisibility = "visible");
			}
			if (t instanceof HTMLElement) {
				let o = getComputedStyle(t);
				(o.contentVisibility || o.getPropertyValue("content-visibility") || "") === "auto" && (e.push({
					el: t,
					original: t.style.contentVisibility || ""
				}), t.style.contentVisibility = "visible");
			}
		} catch {}
		return () => {
			for (let { el: n, original: o } of e) try {
				n.style.contentVisibility = o;
			} catch {}
		};
	}
	at();
	Zt();
	function Ho(t) {
		return Vo(t.boxShadow);
	}
	function zo(t) {
		return Vo(t.textShadow);
	}
	function Vo(t) {
		if (!t || t === "none") return {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		};
		let e = [], n = "", o = 0;
		for (let c = 0; c < t.length; c++) {
			let u = t[c];
			u === "(" ? o++ : u === ")" && (o = Math.max(0, o - 1)), u === "," && o === 0 ? (e.push(n), n = "") : n += u;
		}
		n.trim() && e.push(n);
		let r = 0, s = 0, i = 0, a = 0;
		for (let c of e) {
			if (/\binset\b/i.test(c)) continue;
			let u = c.match(/-?\d+(\.\d+)?px/g)?.map((b) => parseFloat(b)) || [];
			if (u.length < 2) continue;
			let [l, d, f = 0, h = 0] = u, m = Math.abs(l) + f + h, p = Math.abs(d) + f + h;
			s = Math.max(s, m + Math.max(l, 0)), a = Math.max(a, m + Math.max(-l, 0)), i = Math.max(i, p + Math.max(d, 0)), r = Math.max(r, p + Math.max(-d, 0));
		}
		return {
			top: Math.ceil(r),
			right: Math.ceil(s),
			bottom: Math.ceil(i),
			left: Math.ceil(a)
		};
	}
	function jo(t) {
		let e = t.filter && t.filter !== "none" ? t.filter : t.webkitFilter || "", n = /blur\(\s*([0-9.]+)px\s*\)/gi, o = 0, r;
		for (; r = n.exec(e);) o += parseFloat(r[1]) || 0;
		let s = Math.ceil(o);
		return {
			top: s,
			right: s,
			bottom: s,
			left: s
		};
	}
	function qo(t) {
		if ((t.outlineStyle || "none") === "none") return {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		};
		let e = Math.ceil(parseFloat(t.outlineWidth || "0") || 0), n = parseFloat(t.outlineOffset || "0") || 0, o = e + Math.max(0, Math.ceil(n));
		return {
			top: o,
			right: o,
			bottom: o,
			left: o
		};
	}
	function Xo(t) {
		let e = `${t.filter || ""} ${t.webkitFilter || ""}`.trim();
		if (!e || e === "none") return {
			bleed: {
				top: 0,
				right: 0,
				bottom: 0,
				left: 0
			},
			has: !1
		};
		let n = e.match(/drop-shadow\((?:[^()]|\([^()]*\))*\)/gi) || [], o = 0, r = 0, s = 0, i = 0, a = !1;
		for (let c of n) {
			a = !0;
			let [l = 0, d = 0, f = 0] = c.match(/-?\d+(?:\.\d+)?px/gi)?.map((p) => parseFloat(p)) || [], h = Math.abs(l) + f, m = Math.abs(d) + f;
			r = Math.max(r, h + Math.max(l, 0)), i = Math.max(i, h + Math.max(-l, 0)), s = Math.max(s, m + Math.max(d, 0)), o = Math.max(o, m + Math.max(-d, 0));
		}
		return {
			bleed: {
				top: $(o),
				right: $(r),
				bottom: $(s),
				left: $(i)
			},
			has: a
		};
	}
	function Go(t, e) {
		if (!t || !e || !e.style) return null;
		let n = getComputedStyle(t);
		try {
			e.style.transformOrigin = "0 0";
		} catch {}
		try {
			"translate" in e.style && (e.style.translate = "none"), "rotate" in e.style && (e.style.rotate = "none");
		} catch {}
		let o = n.transform || "none";
		if (!o || o === "none") {
			let a = null;
			try {
				a = Vt(t).scale;
			} catch {}
			try {
				e.style.transform = "none";
			} catch {}
			if (!a) return {
				a: 1,
				b: 0,
				c: 0,
				d: 1
			};
			let c = a.trim().split(/\s+/).map(parseFloat), u = Number.isFinite(c[0]) ? c[0] : 1;
			return {
				a: u,
				b: 0,
				c: 0,
				d: Number.isFinite(c[1]) ? c[1] : u
			};
		}
		function r(a, c, u, l) {
			let d = Math.sqrt(a * a + c * c) || 0, f = 0, h = 0;
			if (d > 0) {
				let m = a / d, p = c / d;
				f = m * u + p * l;
				let b = u - m * f, y = l - p * f;
				h = Math.sqrt(b * b + y * y) || 0, h > 0 ? f = f / h : f = 0;
			}
			return {
				a: d,
				b: 0,
				c: f * h,
				d: h
			};
		}
		let s = o.match(/^matrix\(\s*([^)]+)\)$/i);
		if (s) {
			let a = s[1].split(",").map((c) => parseFloat(c.trim()));
			if (a.length === 6 && a.every(Number.isFinite)) {
				let [c, u, l, d] = a, f = r(c, u, l, d);
				try {
					e.style.transform = `matrix(${f.a}, ${f.b}, ${f.c}, ${f.d}, 0, 0)`;
				} catch {}
				return f;
			}
		}
		let i = o.match(/^matrix3d\(\s*([^)]+)\)$/i);
		if (i) {
			let a = i[1].split(",").map((c) => parseFloat(c.trim()));
			if (a.length === 16 && a.every(Number.isFinite)) {
				let c = a[0], u = a[1], l = a[4], d = a[5], f = r(c, u, l, d);
				try {
					e.style.transform = `matrix(${f.a}, ${f.b}, ${f.c}, ${f.d}, 0, 0)`;
				} catch {}
				return f;
			}
		}
		try {
			let a = new DOMMatrix(o), c = r(a.a, a.b, a.c, a.d);
			try {
				e.style.transform = `matrix(${c.a}, ${c.b}, ${c.c}, ${c.d}, 0, 0)`;
			} catch {}
			return c;
		} catch {
			return null;
		}
	}
	function zt(t, e, n, o, r) {
		let s = n.a, i = n.b, a = n.c, c = n.d, u = n.e || 0, l = n.f || 0;
		function d(y, w) {
			let S = y - o, g = w - r, x = s * S + a * g, v = i * S + c * g;
			return x += o + u, v += r + l, [x, v];
		}
		let f = [
			d(0, 0),
			d(t, 0),
			d(0, e),
			d(t, e)
		], h = 1 / 0, m = 1 / 0, p = -1 / 0, b = -1 / 0;
		for (let [y, w] of f) y < h && (h = y), w < m && (m = w), y > p && (p = y), w > b && (b = w);
		return {
			minX: h,
			minY: m,
			maxX: p,
			maxY: b,
			width: p - h,
			height: b - m
		};
	}
	function re(t, e, n) {
		let o = (t.transformOrigin || "0 0").trim().split(/\s+/), [r, s] = [o[0] || "0", o[1] || "0"], i = (a, c) => {
			let u = a.toLowerCase();
			return u === "left" || u === "top" ? 0 : u === "center" ? c / 2 : u === "right" || u === "bottom" ? c : u.endsWith("px") ? parseFloat(u) || 0 : u.endsWith("%") ? (parseFloat(u) || 0) * c / 100 : /^-?\d+(\.\d+)?$/.test(u) && parseFloat(u) || 0;
		};
		return {
			ox: i(r, e),
			oy: i(s, n)
		};
	}
	function Vt(t) {
		let e = {
			rotate: "0deg",
			scale: null,
			translate: null
		}, n = typeof t.computedStyleMap == "function" ? t.computedStyleMap() : null;
		if (n) {
			let r = (c) => {
				try {
					return typeof n.has == "function" && !n.has(c) || typeof n.get != "function" ? null : n.get(c);
				} catch {
					return null;
				}
			}, s = r("rotate");
			if (s) if (s.angle) {
				let c = s.angle;
				e.rotate = c.unit === "rad" ? c.value * 180 / Math.PI + "deg" : c.value + c.unit;
			} else s.unit ? e.rotate = s.unit === "rad" ? s.value * 180 / Math.PI + "deg" : s.value + s.unit : e.rotate = String(s);
			else {
				let c = getComputedStyle(t);
				e.rotate = c.rotate && c.rotate !== "none" ? c.rotate : "0deg";
			}
			let i = r("scale");
			if (i) {
				let c = "x" in i && i.x?.value != null ? i.x.value : Array.isArray(i) ? i[0]?.value : Number(i) || 1;
				e.scale = `${c} ${"y" in i && i.y?.value != null ? i.y.value : Array.isArray(i) ? i[1]?.value : c}`;
			} else {
				let c = getComputedStyle(t);
				e.scale = c.scale && c.scale !== "none" ? c.scale : null;
			}
			let a = r("translate");
			if (a) {
				let c = "x" in a && "value" in a.x ? a.x.value : Array.isArray(a) ? a[0]?.value : 0, u = "y" in a && "value" in a.y ? a.y.value : Array.isArray(a) ? a[1]?.value : 0;
				e.translate = `${c}${"x" in a && a.x?.unit ? a.x.unit : "px"} ${u}${"y" in a && a.y?.unit ? a.y.unit : "px"}`;
			} else {
				let c = getComputedStyle(t);
				e.translate = c.translate && c.translate !== "none" ? c.translate : null;
			}
			return e;
		}
		let o = getComputedStyle(t);
		return e.rotate = o.rotate && o.rotate !== "none" ? o.rotate : "0deg", e.scale = o.scale && o.scale !== "none" ? o.scale : null, e.translate = o.translate && o.translate !== "none" ? o.translate : null, e;
	}
	var dn = null;
	function Rs() {
		if (dn) return dn;
		let t = document.createElement("div");
		return t.id = "snapdom-measure-slot", t.setAttribute("aria-hidden", "true"), Object.assign(t.style, {
			position: "absolute",
			left: "-99999px",
			top: "0px",
			width: "0px",
			height: "0px",
			overflow: "hidden",
			opacity: "0",
			pointerEvents: "none",
			contain: "size layout style"
		}), document.documentElement.appendChild(t), dn = t, t;
	}
	function Yo(t) {
		let e = Rs(), n = document.createElement("div");
		n.style.transformOrigin = "0 0", t.baseTransform && (n.style.transform = t.baseTransform), t.rotate && (n.style.rotate = t.rotate), t.scale && (n.style.scale = t.scale), t.translate && (n.style.translate = t.translate), e.appendChild(n);
		let o = Ts(n);
		return e.removeChild(n), o;
	}
	function Ko(t) {
		let e = N(t), n = e.transform || "none";
		if (n !== "none" && !/^matrix\(\s*1\s*,\s*0\s*,\s*0\s*,\s*1\s*,\s*0\s*,\s*0\s*\)$/i.test(n)) return !0;
		let r = e.rotate && e.rotate !== "none" && e.rotate !== "0deg", s = e.scale && e.scale !== "none" && e.scale !== "1", i = e.translate && e.translate !== "none" && e.translate !== "0px 0px";
		return !!(r || s || i);
	}
	function Ts(t) {
		let e = getComputedStyle(t).transform;
		if (!e || e === "none") return new DOMMatrix();
		try {
			return new DOMMatrix(e);
		} catch {
			return new WebKitCSSMatrix(e);
		}
	}
	var hn = "http://www.w3.org/1999/xhtml";
	var tr = new WeakSet();
	function Ne(t, e) {
		if (!e) return null;
		let n = t.ownerDocument || document, o = n.defaultView || window, r, s, i, a;
		if (e === "viewport") r = 0, s = 0, i = n.documentElement?.clientWidth || o.innerWidth, a = n.documentElement?.clientHeight || o.innerHeight;
		else if (typeof e == "object") r = (Number(e.x) || 0) - (o.scrollX || 0), s = (Number(e.y) || 0) - (o.scrollY || 0), i = Number(e.width), a = Number(e.height);
		else return null;
		return i > 0 && a > 0 ? {
			left: r,
			top: s,
			width: i,
			height: a,
			right: r + i,
			bottom: s + a
		} : null;
	}
	function pn(t) {
		if (t.parentElement) return t.parentElement;
		let e = t.getRootNode && t.getRootNode();
		return e instanceof ShadowRoot ? e.host : null;
	}
	function Ps(t, e) {
		for (let n = e; n; n = pn(n)) if (n === t) return !0;
		return !1;
	}
	function Ns(t, e) {
		for (let n = pn(t); n && n !== e && n?.nodeType === 1; n = pn(n)) {
			let o = N(n);
			if (o.position !== "static" || o.transform && o.transform !== "none" || o.filter && o.filter !== "none" || o.backdropFilter && o.backdropFilter !== "none" || o.perspective && o.perspective !== "none" || /transform|perspective|filter/.test(o.willChange || "") || /layout|paint|strict|content/.test(o.contain || "")) return n;
		}
		return null;
	}
	function gn(t, e) {
		try {
			let n = new DOMMatrix();
			if (e && e.rotate && e.rotate !== "0deg" && (n = n.multiply(new DOMMatrix(`rotate(${e.rotate})`))), e && e.scale) {
				let o = String(e.scale).trim().split(/\s+/).filter(Boolean);
				o.length && o.every((r) => Number.isFinite(Number(r))) && (n = n.multiply(new DOMMatrix(`scale(${o.join(",")})`)));
			}
			return t && (n = n.multiply(new DOMMatrix(t))), n;
		} catch {
			return null;
		}
	}
	function er(t, e, n, o, r) {
		let s = t.getBoundingClientRect();
		e?.nodeType === 1 && e.namespaceURI === hn && N(t).position === "static" && (e.style.position = "relative");
		let i = [];
		for (let [a, c] of n) {
			if (a?.nodeType !== 1 || a.namespaceURI !== hn || c?.nodeType !== 1 || c === t || !Ps(t, c)) continue;
			let u = o.get(c) || N(c), l = u.position;
			if (l !== "fixed" && l !== "sticky" && l !== "-webkit-sticky" || a.style.position === "absolute") continue;
			let d = c.getBoundingClientRect();
			if (!(d.width > 0 && d.height > 0)) continue;
			tr.add(a);
			let f = u.transform && u.transform !== "none" ? u.transform : "", h = Vt(c), m = !!(f || h.rotate !== "0deg" || h.scale || h.translate), p = m ? gn(f, h) : null, b = !p || !p.is2D || p.a === 1 && p.b === 0 && p.c === 0 && p.d === 1, y = d.width, w = d.height;
			b || (y = c.offsetWidth || d.width, w = c.offsetHeight || d.height);
			let S = c.getRootNode && c.getRootNode() instanceof ShadowRoot, g = s, x = t.clientLeft || 0, v = t.clientTop || 0;
			if (S) {
				let E = Ns(c, t);
				E && (g = E.getBoundingClientRect(), x = E.clientLeft || 0, v = E.clientTop || 0);
			}
			let k = d.left - g.left - x, A = d.top - g.top - v;
			if (m) if (a.style.translate = "none", a.style.rotate = "none", a.style.scale = "none", b) a.style.transform = "none";
			else {
				a.style.transform = `matrix(${p.a},${p.b},${p.c},${p.d},0,0)`;
				let { ox: E, oy: R } = re(u, y, w), W = zt(y, w, {
					a: p.a,
					b: p.b,
					c: p.c,
					d: p.d,
					e: 0,
					f: 0
				}, E, R);
				k -= W.minX, A -= W.minY;
			}
			if (l !== "fixed") {
				let E = a.cloneNode(!1);
				E.setAttribute("data-snap-ph", "1"), E.style.position = "static", E.style.visibility = "hidden", E.style.width = `${y}px`, E.style.height = `${w}px`, E.style.boxSizing = "border-box", a.parentElement?.insertBefore(E, a);
			}
			let M = y + 2, F = w;
			r && (Math.abs(A - r.y) < .5 && (A -= 1, F += 1), Math.abs(k - r.x) < .5 && (k -= 1, M += 1)), a.style.position = "absolute", a.style.left = `${k}px`, a.style.top = `${A}px`, a.style.right = "auto", a.style.bottom = "auto", a.style.margin = "0", a.style.width = `${M}px`, a.style.height = `${F}px`, a.style.boxSizing = "border-box", S || i.push(a);
		}
		for (let a of i) e.appendChild(a);
	}
	function nr(t, e, n = {}) {
		if (!t || !e || !e.style) return;
		let o = getComputedStyle(t);
		try {
			e.style.boxShadow = "none";
		} catch (i) {
			_$1(n, "stripRootShadows boxShadow", i);
		}
		try {
			e.style.textShadow = "none";
		} catch (i) {
			_$1(n, "stripRootShadows textShadow", i);
		}
		try {
			e.style.outline = "none";
		} catch (i) {
			_$1(n, "stripRootShadows outline", i);
		}
		let s = (o.filter || "").replace(/\bdrop-shadow\((?:[^()]|\([^()]*\))*\)\s*/gi, "").trim().replace(/\s+/g, " ");
		try {
			e.style.filter = s.length ? s : "none";
		} catch (i) {
			_$1(n, "stripRootShadows filter", i);
		}
	}
	function or(t, e) {
		if (!t || !e || !e.style) return;
		let n = 1;
		try {
			n = parseFloat(getComputedStyle(t).zoom);
		} catch {
			return;
		}
		if (!(!e.style.getPropertyValue("zoom") && (!Number.isFinite(n) || n === 1))) try {
			e.style.setProperty("zoom", "1", "important");
		} catch {}
	}
	function Qo(t) {
		let e = t.display || "";
		if (e.includes("flex") || e.includes("grid") || e.startsWith("table") || e === "inline-block" || e === "flow-root" || t.position === "absolute" || t.position === "fixed" || t.float && t.float !== "none") return !0;
		let n = t.overflowX || t.overflow || "visible", o = t.overflowY || t.overflow || "visible";
		return !!(n !== "visible" || o !== "visible" || t.contain && /\b(layout|content|paint|strict)\b/.test(t.contain));
	}
	function Ls(t, e) {
		let n = Array.from(t.childNodes), o = e === "top" ? n : n.reverse();
		for (let r of o) {
			if (r.nodeType === Node.TEXT_NODE) {
				if (/\S/.test(r.textContent || "")) return null;
				continue;
			}
			if (r.nodeType !== Node.ELEMENT_NODE) continue;
			let s = getComputedStyle(r), i = String(s.display || "");
			if (!(i === "none" || i === "contents") && !(s.position === "absolute" || s.position === "fixed")) return s.float && s.float !== "none" || i.startsWith("inline") ? null : r;
		}
		return null;
	}
	function rr(t, e, n) {
		if (!t || !e || !e.style) return;
		let o = getComputedStyle(t);
		if (!Qo(o)) for (let r of ["top", "bottom"]) {
			let s = r === "top" ? "Top" : "Bottom";
			if ((parseFloat(o[`border${s}Width`]) || 0) > 0 || (parseFloat(o[`padding${s}`]) || 0) > 0) continue;
			let i = t, a = e;
			for (; i && a;) {
				let c = Ls(i, r);
				if (!c) break;
				let u = n ? Array.from(a.children).find((f) => n.get(f) === c) || null : a.children[Array.from(i.children).indexOf(c)] || null, l = getComputedStyle(c), d = parseFloat(l[`margin${s}`]) || 0;
				if (u && u.style && d > 0 && (u.style[`margin${s}`] = "0px"), Qo(l) || (parseFloat(l[`border${s}Width`]) || 0) > 0 || (parseFloat(l[`padding${s}`]) || 0) > 0) break;
				i = c, a = u;
			}
		}
	}
	function Is(t) {
		let e = document.createTreeWalker(t, NodeFilter.SHOW_COMMENT), n = [];
		for (; e.nextNode();) n.push(e.currentNode);
		for (let o of n) o.remove();
	}
	function _s(t, e = {}) {
		let { stripFrameworkDirectives: n = !0 } = e, o = new Set(["xml", "xlink"]), r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT);
		for (; r.nextNode();) {
			let s = r.currentNode;
			for (let i of Array.from(s.attributes)) {
				let a = i.name;
				if (a.startsWith("*")) {
					s.removeAttribute(a);
					continue;
				}
				if (a.includes("@")) {
					s.removeAttribute(a);
					continue;
				}
				if (a.includes(":")) {
					let c = a.split(":", 1)[0];
					if (!o.has(c)) {
						s.removeAttribute(a);
						continue;
					}
				}
				if (n && (a.startsWith("x-") || a.startsWith("v-") || a.startsWith(":") || a.startsWith("on:") || a.startsWith("bind:") || a.startsWith("let:") || a.startsWith("class:"))) {
					s.removeAttribute(a);
					continue;
				}
			}
		}
	}
	var Zo = /[\x00-\x08\x0B\x0C\x0E-\x1F\uFFFE\uFFFF]/g;
	function Ws(t) {
		if (!t) return;
		let e = (r) => {
			if (r.nodeType === Node.ELEMENT_NODE) {
				if (r.attributes) for (let s of Array.from(r.attributes)) {
					let i = s.value.replace(Zo, "");
					if (i !== s.value) try {
						r.setAttribute(s.name, i);
					} catch {}
				}
			} else if (r.nodeType === Node.TEXT_NODE || r.nodeType === Node.CDATA_SECTION_NODE) {
				let s = r.data.replace(Zo, "");
				s !== r.data && (r.data = s);
			}
		};
		e(t);
		let n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT), o;
		for (; o = n.nextNode();) e(o);
	}
	function ir(t, e = {}) {
		t && (_s(t, e), Is(t), Ws(t));
	}
	function Os(t) {
		try {
			let e = t.getAttribute?.("style") || "";
			return /\b(height|width|block-size|inline-size)\s*:/.test(e);
		} catch {
			return !1;
		}
	}
	function Bs(t) {
		return t instanceof HTMLImageElement || t instanceof HTMLCanvasElement || t instanceof HTMLVideoElement || t instanceof HTMLIFrameElement || t instanceof SVGElement || t instanceof HTMLObjectElement || t instanceof HTMLEmbedElement;
	}
	function Us(t, e) {
		if (t?.nodeType !== 1 || Os(t) || Bs(t)) return !1;
		let n = e.position;
		if (n === "absolute" || n === "fixed" || n === "sticky") return !1;
		let o = e.display || "";
		return !(o.includes("flex") || o.includes("grid") || o.startsWith("table") || e.transform && e.transform !== "none");
	}
	function sr(t, e, n = new Map()) {
		function o(r, s) {
			if (r?.nodeType !== 1 || s?.nodeType !== 1) return;
			let i = r.childElementCount > s.childElementCount, a = n.get(r) || getComputedStyle(r);
			if (n.has(r) || n.set(r, a), i && Us(r, a)) {
				s.style.height || (s.style.height = "auto"), s.style.width || (s.style.width = "auto"), s.style.removeProperty("block-size"), s.style.removeProperty("inline-size"), s.style.minHeight || (s.style.minHeight = "0"), s.style.minWidth || (s.style.minWidth = "0"), s.style.maxHeight || (s.style.maxHeight = "none"), s.style.maxWidth || (s.style.maxWidth = "none");
				let l = a.overflowY || a.overflowBlock || "visible", d = a.overflowX || a.overflowInline || "visible";
				(l !== "visible" || d !== "visible") && (s.style.overflow = "visible");
			}
			let c = Array.from(r.children), u = Array.from(s.children);
			for (let l = 0; l < Math.min(c.length, u.length); l++) o(c[l], u[l]);
		}
		o(t, e);
	}
	function Ds(t) {
		let e = getComputedStyle(t);
		return !(e.display === "none" || e.position === "absolute" || e.position === "fixed");
	}
	function Hs(t, e) {
		if (t?.nodeType !== 1) return !1;
		if (t.getAttribute("data-capture") === "exclude" && e?.excludeMode === "remove") return !0;
		if (Array.isArray(e?.exclude)) for (let n of e.exclude) try {
			if (t.matches(n)) return e.excludeMode === "remove";
		} catch (o) {
			_$1(e, "exclude selector match failed", o);
		}
		if (typeof e?.filter == "function" && e.filterMode === "remove") try {
			if (!e.filter(t)) return !0;
		} catch (n) {
			_$1(e, "filter function failed", n);
		}
		return !1;
	}
	function ar(t, e) {
		let n = getComputedStyle(t), o = t.getBoundingClientRect(), r = 1 / 0, s = -1 / 0, i = !1, a = Array.from(t.children);
		for (let h of a) {
			if (Hs(h, e) || !Ds(h)) continue;
			let m = h.getBoundingClientRect(), p = m.top - o.top, b = m.bottom - o.top;
			b <= p || (p < r && (r = p), b > s && (s = b), i = !0);
		}
		let c = i ? Math.max(0, s - r) : 0, u = parseFloat(n.borderTopWidth) || 0, l = parseFloat(n.borderBottomWidth) || 0, d = parseFloat(n.paddingTop) || 0, f = parseFloat(n.paddingBottom) || 0;
		return u + l + d + f + c;
	}
	var $ = (t, e = 3) => Number.isFinite(t) ? Math.round(t * 10 ** e) / 10 ** e : t;
	var jt = .75;
	function cr(t, e, n, o, r, s) {
		let i = t.ownerDocument || document, a = t.getBoundingClientRect(), c = r > 0 && a.width > 0 ? a.width / r : 1, u = s > 0 && a.height > 0 ? a.height / s : 1;
		if (Math.abs(c - u) > .02) return 0;
		let l = i.createElement("div");
		l.setAttribute("data-snapdom-internal", ""), l.style.cssText = "position:absolute!important;left:-9999px!important;top:0!important;width:" + r + "px!important;overflow:visible!important;visibility:hidden!important;";
		let d = l.attachShadow({ mode: "open" }), f = i.createElement("style");
		f.textContent = n, d.appendChild(f);
		let h = e.cloneNode(!0);
		d.appendChild(h), i.body.appendChild(l);
		let m = 0, p = (b, y, w) => {
			let S = N(b), g = S.boxSizing === "border-box", x = (v, k, ...A) => {
				let M = parseFloat(v);
				if (!Number.isFinite(M)) return k;
				let F = M + (g ? 0 : A.reduce((E, R) => E + (parseFloat(R) || 0), 0));
				return Math.abs(F - k) <= .51 ? F : k;
			};
			return {
				width: x(S.width, y, S.paddingLeft, S.paddingRight, S.borderLeftWidth, S.borderRightWidth),
				height: x(S.height, w, S.paddingTop, S.paddingBottom, S.borderTopWidth, S.borderBottomWidth)
			};
		};
		try {
			let b = h.getBoundingClientRect(), y = h.offsetWidth || r, w = h.offsetHeight || s, S = y > 0 && b.width > 0 ? b.width / y : 1, g = w > 0 && b.height > 0 ? b.height / w : 1, x = (v, k, A = !1) => {
				let M = v.children, F = k.children, E = Math.min(M.length, F.length);
				for (let R = 0; R < E; R++) {
					let W = M[R], T = F[R], I = o.get(W), O = A || tr.has(W);
					if (I?.nodeType === 1 && W?.namespaceURI === hn && W.style && I.isConnected) {
						let U = I.getBoundingClientRect();
						if (U.width > 0 && U.height > 0) {
							let P = T.getBoundingClientRect(), z = U.width / c, j = U.height / u, tt = P.width, et = P.height, ht = I.offsetWidth || z, ft = I.offsetHeight || j, L = T.offsetWidth || tt, B = T.offsetHeight || et, D = Math.abs(z - ht) > jt || Math.abs(j - ft) > jt || Math.abs(tt - L) > jt || Math.abs(et - B) > jt;
							if (O) {
								let J = p(T, L, B);
								z = tt > 0 ? z * S * J.width / tt : z, j = et > 0 ? j * g * J.height / et : j, tt = J.width, et = J.height;
							} else if (D) {
								let J = p(I, ht, ft), pt = p(T, L, B);
								z = J.width, j = J.height, tt = pt.width, et = pt.height;
							}
							let V = tt - z, q = et - j;
							(Math.abs(V) > jt || Math.abs(q) > jt) && (W.style.boxSizing = "border-box", W.style.width = `${$(z)}px`, W.style.height = `${$(j)}px`, m++);
						}
					}
					x(W, T, O);
				}
			};
			x(e, h);
		} finally {
			l.remove();
		}
		return m;
	}
	var zs = /::-webkit-scrollbar(-[a-z]+)?\b/i;
	function mn(t, e = new Set()) {
		let n = "";
		if (!t) return n;
		for (let o = 0; o < t.length; o++) {
			let r = t[o];
			try {
				if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
					n += mn(r.styleSheet.cssRules, e);
					continue;
				}
				if (r.type === CSSRule.MEDIA_RULE && r.cssRules) {
					let s = mn(r.cssRules, e);
					s && (n += `@media ${r.conditionText}{${s}}`);
					continue;
				}
				if (r.type === CSSRule.STYLE_RULE) {
					let s = r.selectorText || "";
					if (zs.test(s)) {
						let i = r.cssText;
						i && !e.has(i) && (e.add(i), n += i);
					}
				}
			} catch {}
		}
		return n;
	}
	var Jo = new WeakMap();
	function Vs(t) {
		let e = "";
		for (let n of t.styleSheets) {
			let o = -1;
			try {
				o = n.cssRules ? n.cssRules.length : -1;
			} catch {}
			e += (n.href || "inline") + ":" + o + "|";
		}
		return e;
	}
	function lr(t) {
		if (!t || !t.styleSheets) return "";
		let e = Vs(t), n = Jo.get(t);
		if (n && n.fp === e) return n.css;
		let o = new Set(), r = "";
		for (let s of Array.from(t.styleSheets)) try {
			let i = s.cssRules;
			i && (r += mn(i, o));
		} catch {}
		return Jo.set(t, {
			fp: e,
			css: r
		}), r;
	}
	Ct();
	var Le = new Set();
	async function fr(t, e = {}) {
		let n = e.__session || C.session, o = {
			styleMap: n.styleMap,
			styleCache: n.styleCache,
			nodeMap: n.nodeMap,
			options: e
		}, r = null;
		if (e.clip) {
			let f = Ne(t, e.clip);
			if (f) {
				o.clip = {
					rect: f,
					root: t
				};
				let h = t.getBoundingClientRect();
				r = {
					x: f.left - h.left,
					y: f.top - h.top,
					width: f.width,
					height: f.height
				};
			}
		}
		let s, i = "", a = "";
		if (Le.size) {
			let f = (h, m) => {
				for (let p = m; p; p = p.assignedSlot || p.parentElement || p.getRootNode()?.host) if (p === h) return !0;
				return !1;
			};
			for (;;) {
				let h = [...Le].filter(({ root: m }) => f(m, t) || f(t, m)).map(({ promise: m }) => m.catch(() => {}));
				if (!h.length) break;
				await Promise.all(h);
			}
		}
		if (!o.clip && t.isConnected && t.ownerDocument?.visibilityState !== "hidden") try {
			let f = t.getBoundingClientRect(), h = t.ownerDocument?.defaultView || window, m = f.right <= 0 || f.bottom <= 0 || f.left >= h.innerWidth || f.top >= h.innerHeight, p = [];
			if (m && (() => {
				let y = [];
				t.shadowRoot && y.push(t.shadowRoot);
				for (let w of t.querySelectorAll("*")) w.shadowRoot && y.push(w.shadowRoot);
				for (; y.length;) {
					let w = y.pop(), S = w.host?.localName === "calcite-icon";
					for (let g of w.querySelectorAll("*")) {
						if (g.shadowRoot && y.push(g.shadowRoot), !S || g.localName !== "svg") continue;
						let x = g.querySelectorAll("path");
						if (!x.length || [...x].some((k) => k.getAttribute("d")?.trim())) continue;
						let v = g.getBoundingClientRect();
						v.width && v.height && p.push(g);
					}
				}
			})(), p.length) {
				let y = (async () => {
					let S = t.style, g = t.hasAttribute("style"), x = new Map(), v = (k, A) => {
						x.has(k) || x.set(k, {
							value: S.getPropertyValue(k),
							priority: S.getPropertyPriority(k)
						}), S.setProperty(k, A, "important");
						let M = x.get(k);
						M.forcedValue = S.getPropertyValue(k), M.forcedPriority = S.getPropertyPriority(k);
					};
					try {
						v("left", "0"), v("top", "0"), v("right", "auto"), v("bottom", "auto"), v("margin-top", "0"), v("margin-right", "0"), v("margin-bottom", "0"), v("margin-left", "0"), v("transform", "none"), v("translate", "none"), v("opacity", "0"), v("pointer-events", "none");
						let k = t.getBoundingClientRect();
						if (k.right <= 0 || k.bottom <= 0 || k.left >= h.innerWidth || k.top >= h.innerHeight) {
							let F = t.parentElement?.getBoundingClientRect(), E = F && F.right > 0 && F.left < h.innerWidth ? Math.max(0, F.left) : 0, R = F && F.bottom > 0 && F.top < h.innerHeight ? Math.max(0, F.top) : 0;
							v("position", "fixed"), v("left", `${E}px`), v("top", `${R}px`);
						}
						await mt(100);
						let A = Date.now() + 1500, M = () => p.some((F) => {
							if ([...F.querySelectorAll("path")].some((R) => R.getAttribute("d")?.trim())) return !1;
							let E = F.getBoundingClientRect();
							return E.width && E.height && E.right > 0 && E.bottom > 0 && E.left < h.innerWidth && E.top < h.innerHeight;
						});
						for (; Date.now() < A && M();) await new Promise((F) => setTimeout(F, 25));
						await mt(100);
					} finally {
						for (let [k, A] of x) S.getPropertyValue(k) !== A.forcedValue || S.getPropertyPriority(k) !== A.forcedPriority || (A.value ? S.setProperty(k, A.value, A.priority) : S.removeProperty(k));
						!g && !S.length && t.removeAttribute("style"), await mt(100);
					}
				})(), w = {
					root: t,
					promise: y
				};
				Le.add(w);
				try {
					await y;
				} finally {
					Le.delete(w);
				}
			}
		} catch {}
		let c = Uo(t), u = o.clip ? () => {} : Do(t);
		try {
			s = await ne(t, o, e);
		} catch (f) {
			throw console.warn("deepClone failed:", f), f;
		} finally {
			u(), c();
		}
		try {
			Bo(s);
		} catch (f) {
			console.warn("inlineExternal defs or symbol failed:", f);
		}
		try {
			await Pe(t, s, o, e);
		} catch (f) {
			console.warn("inlinePseudoElements failed:", f);
		}
		await lo(s, o);
		try {
			let f = s.querySelectorAll("style[data-sd]");
			for (let h of f) a += h.textContent || "", h.remove();
		} catch (f) {
			_$1(o, "Failed to extract shadow CSS from style[data-sd]", f);
		}
		let l = Ge(o.styleMap);
		i = Array.from(l.entries()).map(([f, h]) => `.${h}{${f}}`).join(""), i = a + "[data-snapdom-has-after]::after,[data-snapdom-has-before]::before{content:none!important;display:none!important}" + i;
		for (let [f, h] of o.styleMap.entries()) {
			if (f.tagName === "STYLE") continue;
			if (f.getRootNode && f.getRootNode() instanceof ShadowRoot) {
				f.setAttribute("style", h.replace(/;/g, "; "));
				continue;
			}
			let m = l.get(h);
			m && f.classList.add(m);
			let p = f.style?.backgroundImage, b = f.dataset?.snapdomHasIcon;
			p && p !== "none" && (f.style.backgroundImage = p), b && (f.style.verticalAlign = "middle", f.style.display = "inline");
		}
		if ((o.clip || t.scrollTop || t.scrollLeft) && s?.nodeType === 1) try {
			let f = o.clip && r ? {
				x: r.x,
				y: r.y
			} : {
				x: 0,
				y: 0
			};
			er(t, s, o.nodeMap, o.styleCache, f);
		} catch (f) {
			_$1(o, "freezeViewportPositioned failed", f);
		}
		for (let [f, h] of o.nodeMap.entries()) {
			if (o.clip && h === t) continue;
			let m = h.scrollLeft, p = h.scrollTop;
			if ((m || p) && f?.nodeType === 1 && f.namespaceURI === "http://www.w3.org/1999/xhtml") {
				f.style.overflow = "hidden", f.style.scrollbarWidth = "none", f.style.msOverflowStyle = "none";
				try {
					let w = f.querySelectorAll("*");
					for (let S of w) {
						if (S.nodeType !== 1 || S.namespaceURI !== "http://www.w3.org/1999/xhtml") continue;
						let g = S.style.position;
						if (g === "fixed" || g === "absolute") {
							let x = parseFloat(S.style.top) || 0, v = parseFloat(S.style.left) || 0;
							S.style.top = `${x + p}px`, S.style.left = `${v + m}px`, g === "fixed" && (S.style.position = "absolute");
						}
					}
				} catch {}
				let y = document.createElement("div");
				for (y.style.all = "unset", y.style.transform = `translate(${-m}px, ${-p}px)`, y.style.willChange = "transform", y.style.display = "inline-block", y.style.width = "100%"; f.firstChild;) y.appendChild(f.firstChild);
				f.appendChild(y);
			}
		}
		if (t === o.nodeMap.get(s)) {
			let f = o.styleCache.get(t) || N(t);
			o.styleCache.set(t, f);
			let h = De(f.transform);
			s.style.margin = "0", s.style.top = "auto", s.style.left = "auto", s.style.right = "auto", s.style.bottom = "auto", s.style.animation = "none", s.style.transition = "none", s.style.willChange = "auto", s.style.float = "none", s.style.clear = "none", s.style.transform = h || "";
		}
		for (let [f, h] of o.nodeMap.entries()) h.tagName === "PRE" && (f.style.marginTop = "0", f.style.marginBlockStart = "0");
		return {
			clone: s,
			classCSS: i,
			styleCache: o.styleCache,
			nodeMap: o.nodeMap,
			reconcileRisk: o.reconcileRisk || 0,
			clipWindow: r
		};
	}
	vt();
	rt();
	var ur = "http://www.w3.org/1999/xlink";
	function js(t) {
		return t.getAttribute("href") || t.getAttribute("xlink:href") || (typeof t.getAttributeNS == "function" ? t.getAttributeNS(ur, "href") : null);
	}
	function qs(t) {
		let e = parseInt(t.dataset?.snapdomWidth || "", 10) || 0, n = parseInt(t.dataset?.snapdomHeight || "", 10) || 0, o = parseInt(t.getAttribute("width") || "", 10) || 0, r = parseInt(t.getAttribute("height") || "", 10) || 0, s = parseFloat(t.style?.width || "") || 0, i = parseFloat(t.style?.height || "") || 0;
		return {
			width: e || s || o || t.width || t.naturalWidth || 100,
			height: n || i || r || t.height || t.naturalHeight || 100
		};
	}
	async function dr(t, e = {}) {
		let n = Array.from(t.querySelectorAll("img"));
		t.tagName === "IMG" && n.unshift(t);
		let o = async (a) => {
			if (!a.getAttribute("src")) {
				let m = a.currentSrc || a.src || Bt(a.getAttribute("srcset"), a) || "";
				m && a.setAttribute("src", m);
			}
			a.removeAttribute("srcset"), a.removeAttribute("sizes");
			let c = a.src || "";
			if (!c) return;
			let u = C.image?.get(c);
			if (u) {
				a.src = u, a.width || (a.width = a.naturalWidth || 100), a.height || (a.height = a.naturalHeight || 100);
				return;
			}
			let l = await G(c, {
				as: "dataURL",
				useProxy: e.useProxy
			});
			if (l.ok && typeof l.data == "string" && l.data.startsWith("data:")) {
				C.image?.set(c, l.data), a.src = l.data, a.width || (a.width = a.naturalWidth || 100), a.height || (a.height = a.naturalHeight || 100);
				return;
			}
			let { width: d, height: f } = qs(a), { fallbackURL: h } = e || {};
			if (h) try {
				let m = typeof h == "function" ? await h({
					width: d,
					height: f,
					src: c,
					element: a
				}) : h;
				if (m) {
					let p = await G(m, {
						as: "dataURL",
						useProxy: e.useProxy
					});
					if (p?.ok && typeof p.data == "string") {
						a.src = p.data, a.width || (a.width = d), a.height || (a.height = f);
						return;
					}
				}
			} catch {}
			if (e.placeholders !== !1) {
				let m = document.createElement("div");
				m.style.cssText = [
					`width:${d}px`,
					`height:${f}px`,
					"background:#ccc",
					"display:inline-block",
					"text-align:center",
					`line-height:${f}px`,
					"color:#666",
					"font-size:12px",
					"overflow:hidden"
				].join(";"), m.textContent = "img", a.replaceWith(m);
			} else {
				let m = document.createElement("div");
				m.style.cssText = `display:inline-block;width:${d}px;height:${f}px;visibility:hidden;`, a.replaceWith(m);
			}
		}, r = 6;
		for (let a = 0; a < n.length; a += r) {
			let c = n.slice(a, a + r).map(o);
			await Promise.allSettled(c);
		}
		let s = Array.from(t.querySelectorAll("image"));
		t.localName === "image" && s.unshift(t);
		let i = async (a) => {
			let c = js(a);
			if (!c || c.startsWith("data:") || c.startsWith("blob:")) return;
			let u = await G(c, {
				as: "dataURL",
				useProxy: e.useProxy
			});
			u.ok && typeof u.data == "string" && u.data.startsWith("data:") && (a.setAttribute("href", u.data), a.removeAttribute("xlink:href"), typeof a.removeAttributeNS == "function" && a.removeAttributeNS(ur, "href"));
		};
		for (let a = 0; a < s.length; a += r) {
			let c = s.slice(a, a + r).map(i);
			await Promise.allSettled(c);
		}
	}
	at();
	rt();
	var yn = [
		"background-image",
		"mask",
		"mask-image",
		"-webkit-mask",
		"-webkit-mask-image",
		"mask-source",
		"mask-box-image-source",
		"mask-border-source",
		"-webkit-mask-box-image-source",
		"border-image",
		"border-image-source"
	];
	var Xs = [
		"mask-position",
		"mask-size",
		"mask-repeat",
		"mask-mode",
		"mask-composite",
		"-webkit-mask-position",
		"-webkit-mask-size",
		"-webkit-mask-repeat",
		"-webkit-mask-composite",
		"mask-origin",
		"mask-clip",
		"-webkit-mask-origin",
		"-webkit-mask-clip",
		"-webkit-mask-position-x",
		"-webkit-mask-position-y"
	];
	var Gs = [
		"background-position",
		"background-position-x",
		"background-position-y",
		"background-size",
		"background-repeat",
		"background-origin",
		"background-clip",
		"background-attachment",
		"background-blend-mode"
	];
	var Ys = [
		"border-image-slice",
		"border-image-width",
		"border-image-outset",
		"border-image-repeat"
	];
	async function Ks(t, e, n, o) {
		let r = n.get(t) || N(t);
		n.has(t) || n.set(t, r);
		let s = r.getPropertyValue("border-image"), i = r.getPropertyValue("border-image-source"), a = s && s !== "none" || i && i !== "none", c = r.getPropertyValue("background-image"), u = r.getPropertyValue("background-color");
		if (c && c !== "none" || u && u !== "rgba(0, 0, 0, 0)" && u !== "transparent" || /url\s*\(|gradient\s*\(/i.test(r.getPropertyValue("background") || "")) for (let d of Gs) {
			let f = r.getPropertyValue(d);
			f && e.style.setProperty(d, f);
		}
		for (let d of yn) {
			let f = r.getPropertyValue(d);
			if (d === "background-image" && (!f || f === "none")) {
				let p = r.getPropertyValue("background");
				p && /url\s*\(/.test(p) && (f = Ot(p).filter((b) => /url\s*\(/.test(b)).join(", ") || f);
			}
			if (!f || f === "none") continue;
			let h = Ot(f), m = await Promise.all(h.map((p) => $t(p, o)));
			m.some((p) => p && p !== "none" && !/^url\(undefined/.test(p)) && e.style.setProperty(d, m.join(", "));
		}
		for (let d of Xs) {
			let f = r.getPropertyValue(d);
			!f || f === "initial" || e.style.setProperty(d, f);
		}
		if (a) for (let d of Ys) {
			let f = r.getPropertyValue(d);
			!f || f === "initial" || e.style.setProperty(d, f);
		}
	}
	async function hr(t, e, n, o = {}, r = C.session.nodeMap) {
		if (!e) return;
		let s = [];
		t && tn(t) && s.push([t, e]);
		let i = [e];
		for (; i.length;) {
			let c = i.pop();
			if (c.children) for (let u of c.children) {
				if (u.tagName === "STYLE") continue;
				let l = r.get(u);
				l && tn(l) && s.push([l, u]), i.push(u);
			}
		}
		let a = 6;
		for (let c = 0; c < s.length; c += a) await Promise.allSettled(s.slice(c, c + a).map(([u, l]) => Ks(u, l, n, o)));
	}
	rt();
	at();
	function mr(t, e, n = C.session.nodeMap) {
		let o = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
		for (let a = r.currentNode; a; a = r.nextNode()) {
			let c = n.get(a);
			if (c?.nodeType !== 1) continue;
			let u = N(c), l = u.getPropertyValue("backdrop-filter") || u.getPropertyValue("-webkit-backdrop-filter");
			l && l !== "none" && a !== e && o.push({
				cloneEl: a,
				orig: c,
				bf: l,
				path: Js(e, a)
			});
		}
		if (!o.length) return;
		let s = t.getBoundingClientRect(), i = o.map((a, c) => {
			let u = e.cloneNode(!0);
			Zs(u, e, a.orig.getBoundingClientRect(), n), ta(pr(u, a.path));
			for (let l = 0; l < c; l++) {
				let d = pr(u, o[l].path);
				d && (d.style.setProperty("backdrop-filter", "none", "important"), d.style.setProperty("-webkit-backdrop-filter", "none", "important"));
			}
			return {
				...a,
				copy: u
			};
		});
		for (let { cloneEl: a, orig: c, bf: u, copy: l } of i) Qs(a, c, u, l, s);
	}
	function Qs(t, e, n, o, r) {
		let s = e.getBoundingClientRect();
		if (!s.width || !s.height) return;
		let i = N(e), a = e.offsetWidth ? s.width / e.offsetWidth : 1, c = Math.abs(a - 1) > .001 ? 1 / a : 1;
		o.style.position = "absolute", o.style.left = `${(r.left - s.left) * c}px`, o.style.top = `${(r.top - s.top) * c}px`, o.style.width = `${r.width}px`, o.style.height = `${r.height}px`, o.style.margin = "0", o.style.filter = n, c !== 1 && (o.style.transform = `scale(${c})`, o.style.transformOrigin = "top left");
		let u = document.createElement("div");
		u.style.cssText = "position:absolute;inset:0;overflow:hidden;border-radius:inherit;z-index:-2", u.appendChild(o);
		let l = document.createElement("div");
		l.style.cssText = "position:absolute;inset:0;border-radius:inherit;z-index:-1", l.style.backgroundColor = i.backgroundColor, l.style.backgroundImage = t.style.backgroundImage || i.backgroundImage;
		for (let d of [
			"background-size",
			"background-position",
			"background-repeat",
			"background-origin",
			"background-clip"
		]) l.style.setProperty(d, i.getPropertyValue(d));
		t.style.setProperty("background-color", "transparent", "important"), t.style.setProperty("background-image", "none", "important"), t.style.setProperty("backdrop-filter", "none", "important"), t.style.setProperty("-webkit-backdrop-filter", "none", "important"), i.position === "static" && (t.style.position = "relative"), t.style.isolation = "isolate", t.prepend(l), t.prepend(u);
	}
	var Ie = 128;
	function Zs(t, e, n, o) {
		let r = [[t, e]];
		for (; r.length;) {
			let [s, i] = r.pop(), a = o.get(i);
			if (a?.nodeType === 1) {
				let l = a.getBoundingClientRect();
				(l.left > n.right + Ie || l.right < n.left - Ie || l.top > n.bottom + Ie || l.bottom < n.top - Ie) && (s.tagName === "IMG" && s.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA="), s.style && (s.style.backgroundImage = "none"));
			}
			let c = s.children, u = i.children;
			for (let l = 0; l < c.length; l++) r.push([c[l], u[l]]);
		}
	}
	function Js(t, e) {
		let n = [];
		for (let o = e; o !== t; o = o.parentElement) {
			if (!o?.parentElement) return null;
			n.push([...o.parentElement.children].indexOf(o));
		}
		return n.reverse();
	}
	function pr(t, e) {
		if (!e) return null;
		let n = t;
		for (let o of e) if (n = n.children[o], !n) return null;
		return n;
	}
	function ta(t) {
		if (t) for (let e = t; e && e.parentNode;) {
			let n = e.parentNode;
			for (; e.nextSibling;) e.nextSibling.remove();
			e === t && e.remove(), e = n;
		}
	}
	at();
	rt();
	function gr(t, e) {
		if (!t) return () => {};
		let n = [], o = 200;
		function r(s) {
			if (e) {
				let u = s.getBoundingClientRect();
				if (u.width > 0 || u.height > 0) {
					let l = Math.max(u.right, u.left + (s.scrollWidth || 0)), d = Math.max(u.bottom, u.top + (s.scrollHeight || 0));
					if (l < e.left - o || u.left > e.right + o || d < e.top - o || u.top > e.bottom + o) return;
				}
			}
			let i = getComputedStyle(s), a = ea(s, i);
			a && n.push(a);
			let c = na(s, i);
			c && n.push(c);
			for (let u of s.children || []) r(u);
		}
		return r(t), () => n.forEach((s) => s());
	}
	function ea(t, e) {
		if (!t) return () => {};
		e = e || getComputedStyle(t);
		let n = oa(e);
		if (n <= 0) return () => {};
		if (!br(t)) return () => {};
		let o = yr(t), r = o.text, s = ia(e);
		o.write("X");
		let i = t.scrollHeight - s;
		o.restore();
		let a = i > 0 ? i : ra(e), c = Math.round(a * n + s);
		if (t.scrollHeight <= c + .5) return () => {};
		let u = 0, l = r.length, d = -1;
		for (; u <= l;) {
			let f = u + l >> 1;
			o.write(r.slice(0, f) + "…"), t.scrollHeight <= c + .5 ? (d = f, u = f + 1) : l = f - 1;
		}
		return o.write((d >= 0 ? r.slice(0, d) : "") + "…"), () => {
			o.restore();
		};
	}
	function na(t, e) {
		if (!t) return () => {};
		if (e = e || getComputedStyle(t), e.textOverflow !== "ellipsis") return () => {};
		if (e.whiteSpace !== "nowrap" && e.whiteSpace !== "pre") return () => {};
		if (e.overflowX !== "hidden" && e.overflowX !== "clip") return () => {};
		if (!br(t)) return () => {};
		if (t.scrollWidth <= t.clientWidth + .5) return () => {};
		let n = yr(t), o = n.text, r = 0, s = o.length, i = -1;
		for (; r <= s;) {
			let a = r + s >> 1;
			n.write(o.slice(0, a) + "…"), t.scrollWidth <= t.clientWidth + .5 ? (i = a, r = a + 1) : s = a - 1;
		}
		return n.write((i >= 0 ? o.slice(0, i) : "") + "…"), () => {
			n.restore();
		};
	}
	function yr(t) {
		let e = [];
		for (let o = t.firstChild; o; o = o.nextSibling) o.nodeType === Node.TEXT_NODE && e.push(o);
		let n = e.map((o) => o.data);
		return {
			text: n.join(""),
			write(o) {
				e[0].data = o;
				for (let r = 1; r < e.length; r++) e[r].data = "";
			},
			restore() {
				for (let o = 0; o < e.length; o++) e[o].data = n[o];
			}
		};
	}
	function oa(t) {
		let e = t.getPropertyValue("-webkit-line-clamp") || t.getPropertyValue("line-clamp");
		e = (e || "").trim();
		let n = parseInt(e, 10);
		return Number.isFinite(n) && n > 0 ? n : 0;
	}
	function ra(t) {
		let e = (t.lineHeight || "").trim(), n = parseFloat(t.fontSize) || 16;
		return !e || e === "normal" ? Math.round(n * 1.2) : e.endsWith("px") ? parseFloat(e) : /^\d+(\.\d+)?$/.test(e) ? Math.round(parseFloat(e) * n) : e.endsWith("%") ? Math.round(parseFloat(e) / 100 * n) : Math.round(n * 1.2);
	}
	function ia(t) {
		return (parseFloat(t.paddingTop) || 0) + (parseFloat(t.paddingBottom) || 0);
	}
	function br(t) {
		return t.childElementCount > 0 ? !1 : Array.from(t.childNodes).some((e) => e.nodeType === Node.TEXT_NODE);
	}
	var ie = [];
	function se(t) {
		if (!t) return null;
		if (Array.isArray(t)) {
			let [e, n] = t;
			return typeof e == "function" ? e(n) : e;
		}
		if (typeof t == "object" && "plugin" in t) {
			let { plugin: e, options: n } = t;
			return typeof e == "function" ? e(n) : e;
		}
		return typeof t == "function" ? t() : t;
	}
	function wr(...t) {
		let e = t.flat();
		for (let n of e) {
			let o = se(n);
			o && (ie.some((r) => r && r.name && o.name && r.name === o.name) || ie.push(o));
		}
	}
	function xr(t) {
		return t && Array.isArray(t.plugins) ? t.plugins : ie;
	}
	async function gt(t, e, n) {
		let o = n, r = xr(e);
		for (let s of r) {
			let i = s && typeof s[t] == "function" ? s[t] : null;
			if (!i) continue;
			let a = await i(e, o);
			typeof a < "u" && (o = a);
		}
		return o;
	}
	async function Sr(t, e, n) {
		let o = [], r = xr(e);
		for (let s of r) {
			let i = s && typeof s[t] == "function" ? s[t] : null;
			if (!i) continue;
			let a = await i(e, n);
			typeof a < "u" && o.push(a);
		}
		return o;
	}
	function sa(t) {
		let e = [];
		if (Array.isArray(t)) for (let n of t) {
			let o = se(n);
			if (!o || !o.name) continue;
			let r = e.findIndex((s) => s && s.name === o.name);
			r >= 0 && e.splice(r, 1), e.push(o);
		}
		for (let n of ie) n && n.name && !e.some((o) => o.name === n.name) && e.push(n);
		return Object.freeze(e);
	}
	function vr(t, e, n = !1) {
		return !t || t.plugins && !n || (t.plugins = sa(e)), t;
	}
	function bn() {
		return ie.slice();
	}
	rt();
	var aa = .92;
	var ca = .95;
	async function la(t) {
		let e = new Image();
		if (e.decoding = "sync", e.src = t, typeof e.decode == "function") try {
			return await e.decode(), e;
		} catch {}
		return await new Promise((n, o) => {
			e.onload = () => n(), e.onerror = o;
		}), e;
	}
	function fa(t) {
		let e = /^data:([^;,]+)/.exec(t);
		return e ? e[1] : "";
	}
	async function wn(t, e, n) {
		if (typeof t != "string" || !t.startsWith("data:image") || t.startsWith("data:image/svg")) return null;
		let o = t.length + ":" + t.slice(0, 64) + t.slice(-64) + ":" + Math.round(e) + "x" + Math.round(n);
		if (C.compress.has(o)) return C.compress.get(o);
		let r = await (async () => {
			let s;
			try {
				s = await la(t);
			} catch {
				return null;
			}
			let i = s.naturalWidth || s.width, a = s.naturalHeight || s.height;
			if (!i || !a) return null;
			let c = Math.min(1, Math.max(e / i, n / a));
			if (!(c > 0) || c >= .95) return null;
			let u = c * ca, l = Math.max(1, Math.round(i * u)), d = Math.max(1, Math.round(a * u)), f = document.createElement("canvas");
			f.width = l, f.height = d;
			let h = f.getContext("2d");
			if (!h) return null;
			h.imageSmoothingEnabled = !0, h.imageSmoothingQuality = "high", h.drawImage(s, 0, 0, l, d);
			let m = fa(t), p = m === "image/jpeg" ? "image/jpeg" : m === "image/webp" ? "image/webp" : "image/png";
			try {
				let b = f.toDataURL(p, aa);
				if (typeof b == "string" && b.startsWith("data:image") && b.length < t.length) return b;
			} catch {}
			return null;
		})();
		return C.compress.set(o, r), r;
	}
	async function ua(t, e) {
		if (!e.compress) return {
			count: 0,
			before: 0,
			after: 0
		};
		let n = (e.scale || 1) * (e.dpr || 1), o = Array.from(t.querySelectorAll("img"));
		t.tagName === "IMG" && o.unshift(t);
		let r = 0, s = 0, i = 0, a = async (u) => {
			let l = u.getAttribute("src") || "";
			if (!l.startsWith("data:image") || l.startsWith("data:image/svg")) return;
			let d = parseFloat(u.dataset.snapdomWidth) || parseFloat(u.style.width) || u.width || 0, f = parseFloat(u.dataset.snapdomHeight) || parseFloat(u.style.height) || u.height || 0;
			if (!d || !f) return;
			let h = await wn(l, d * n, f * n);
			h && (r++, s += l.length, i += h.length, u.setAttribute("src", h));
		}, c = 6;
		for (let u = 0; u < o.length; u += c) await Promise.allSettled(o.slice(u, u + c).map(a));
		return {
			count: r,
			before: s,
			after: i
		};
	}
	function da(t) {
		return {
			w: t.offsetWidth || t.getBoundingClientRect().width || 0,
			h: t.offsetHeight || t.getBoundingClientRect().height || 0
		};
	}
	async function ha(t, e, n = C.session.nodeMap) {
		if (!e.compress) return { count: 0 };
		let o = (e.scale || 1) * (e.dpr || 1), r = [], s = [t, ...t.querySelectorAll("*")];
		for (let u of s) {
			let l = u.style && u.style.backgroundImage;
			l && l.includes("data:image") && r.push(u);
		}
		let i = 0, a = async (u) => {
			let l = n.get(u);
			if (!l || !l.isConnected) return;
			let d;
			try {
				d = getComputedStyle(l);
			} catch {
				return;
			}
			if ((d.backgroundRepeat || "repeat").toLowerCase().split(",").some((g) => g.trim() !== "no-repeat")) return;
			let { w: h, h: m } = da(l);
			if (!h || !m) return;
			let p = h * o, b = m * o, y = u.style.backgroundImage, w = [...y.matchAll(/url\((['"]?)(data:image\/[^)'"]+)\1\)/gi)], S = y;
			for (let g of w) {
				let x = g[2];
				if (x.startsWith("data:image/svg")) continue;
				let v = await wn(x, p, b);
				v && (S = S.split(x).join(v), i++);
			}
			S !== y && (u.style.backgroundImage = S);
		}, c = 6;
		for (let u = 0; u < r.length; u += c) await Promise.allSettled(r.slice(u, u + c).map(a));
		return { count: i };
	}
	async function pa(t, e) {
		if (!e.compress) return { count: 0 };
		let n = (e.scale || 1) * (e.dpr || 1), o = Array.from(t.querySelectorAll("image"));
		t.localName === "image" && o.unshift(t);
		let r = 0, s = async (a) => {
			let c = a.getAttribute("href") || (typeof a.getAttributeNS == "function" ? a.getAttributeNS("http://www.w3.org/1999/xlink", "href") : null);
			if (!c || !c.startsWith("data:image") || c.startsWith("data:image/svg")) return;
			let u = parseFloat(a.getAttribute("width")) || 0, l = parseFloat(a.getAttribute("height")) || 0;
			if (!u || !l) return;
			let d = await wn(c, u * n, l * n);
			d && (a.setAttribute("href", d), a.hasAttribute("xlink:href") && a.setAttribute("xlink:href", d), r++);
		}, i = 6;
		for (let a = 0; a < o.length; a += i) await Promise.allSettled(o.slice(a, a + i).map(s));
		return { count: r };
	}
	async function Cr(t, e, n) {
		e.compress && (await ua(t, e), await ha(t, e, n), await pa(t, e));
	}
	function ma(t) {
		if (Array.isArray(t.plugins)) {
			for (let e of t.plugins) if (se(e)?.name === "picture-resolver") return !0;
		}
		return bn().some((e) => e?.name === "picture-resolver");
	}
	function ga(t) {
		let e = Array.isArray(t.plugins) ? t.plugins : bn(), n = [];
		for (let o of e) {
			let r = se(o);
			r && typeof r.resolveNode == "function" && n.push(r.resolveNode.bind(r));
		}
		return n.length ? n : null;
	}
	var ya = 2e3;
	var ba = 3;
	function wa(t) {
		let e = Date.now(), n = C.burstAdvice.get(t);
		if (!n || e - n.firstTs > ya) {
			C.burstAdvice.set(t, {
				count: 1,
				firstTs: e,
				warned: !1
			});
			return;
		}
		n.count++, n.count >= ba && !n.warned && (n.warned = !0, console.warn("[snapdom] Captured this element multiple times. Pass { burst: true } to increase the speed."));
	}
	async function Ar(t, e) {
		if (!t) throw new Error("Element cannot be null or undefined");
		he(e.cache), e.__session = {
			styleMap: C.session.styleMap,
			styleCache: C.session.styleCache,
			nodeMap: C.session.nodeMap
		}, e.burst || wa(t), e.__resolveNodeHooks = ga(e);
		let n = e.fast, o = e.outerTransforms !== !1, r = !!e.outerShadows, s = e.clip ? Ne(t, e.clip) : null, i = {
			element: t,
			options: e,
			plugins: e.plugins
		}, a, c, u, l, d, f, h = "", m = "", p, b, y = null;
		await gt("beforeSnap", i);
		let w = null;
		e.resolvePicturePlaceholders !== !1 && !ma(e) && (w = await Qn(i.element, i.options)), await gt("beforeClone", i);
		let S = gr(i.element, s);
		try {
			({clone: a, classCSS: c, styleCache: u, nodeMap: l, reconcileRisk: d, clipWindow: f} = await fr(i.element, i.options)), d > 0 && !e.reconcile && !C.warnedReconcile && (C.warnedReconcile = !0, console.warn("[snapdom] Text in inline/table-cell elements kept its natural width and may re-wrap under font-fallback rasterization. Pass { reconcile: true } for pixel-exact layout (roughly doubles capture time).")), !o && a && (y = Go(i.element, a)), !r && a && nr(i.element, a, i.options), a && (rr(i.element, a, l), or(i.element, a));
		} finally {
			S();
		}
		if (i = {
			clone: a,
			classCSS: c,
			styleCache: u,
			nodeMap: l,
			...i
		}, await gt("afterClone", i), w && await w(), ir(i.clone), i.options?.excludeMode === "remove" || i.options?.filterMode === "remove") try {
			sr(i.element, i.clone, i.styleCache);
		} catch (E) {
			console.warn("[snapdom] shrink pass failed:", E);
		}
		try {
			await yo(i.clone, i.element, i.nodeMap);
		} catch {}
		let g = (E) => new Promise((R, W) => {
			Rt(() => {
				Promise.resolve().then(E).then(R, W);
			}, { fast: n });
		}), x = (async () => {
			await Promise.all([g(() => dr(i.clone, i.options)), g(() => hr(i.element, i.clone, i.styleCache, i.options, i.nodeMap))]);
			try {
				mr(i.element, i.clone, i.nodeMap);
			} catch (E) {
				console.warn("[snapdom] backdrop-filter emulation failed:", E);
			}
			e.compress && await g(() => Cr(i.clone, i.options, i.nodeMap));
		})(), v = Promise.resolve();
		e.embedFonts && (v = g(async () => {
			let E = i.element.ownerDocument || document, R = s ? (I) => {
				try {
					let O = I.getBoundingClientRect();
					return O.right >= s.left - 200 && O.left <= s.right + 200 && O.bottom >= s.top - 200 && O.top <= s.bottom + 200;
				} catch {
					return !0;
				}
			} : null, { required: W, usedCodepoints: T } = oe(i.element, R);
			if (K()) await Dt(new Set(Array.from(W).map((O) => String(O).split("__")[0]).filter(Boolean)), 1, E);
			h = await Te({
				required: W,
				usedCodepoints: T,
				preCached: !1,
				exclude: i.options.excludeFonts,
				localFonts: i.options.localFonts,
				useProxy: i.options.useProxy,
				fontStylesheetDomains: i.options.fontStylesheetDomains,
				doc: E
			});
		})), await Promise.all([x, v]);
		let k = qe(i.clone).sort(), A = k.join(",");
		C.baseStyle.has(A) ? m = C.baseStyle.get(A) : await new Promise((E) => {
			Rt(() => {
				m = Xe(k), C.baseStyle.set(A, m), E();
			}, { fast: n });
		});
		let M = lr(i.element?.ownerDocument || document);
		i = {
			fontsCSS: h,
			baseCSS: m,
			scrollbarCSS: M,
			...i
		}, await gt("beforeRender", i), await new Promise((E) => {
			Rt(() => {
				let R = N(i.element), W = i.element.getBoundingClientRect(), T = Math.max(1, $(i.element.offsetWidth || parseFloat(R.width) || W.width || 1)), I = Math.max(1, $(i.element.offsetHeight || parseFloat(R.height) || W.height || 1)), O = i.element.ownerDocument || document;
				if (!f && (i.element === O.body || i.element === O.documentElement) && !O.documentElement.hasAttribute("data-sd-pinned")) {
					let X = Math.max(i.element.scrollHeight || 0, O.documentElement?.scrollHeight || 0, O.body?.scrollHeight || 0), nt = Math.max(i.element.scrollWidth || 0, O.documentElement?.scrollWidth || 0, O.body?.scrollWidth || 0);
					X > 0 && (I = Math.max(I, $(X))), nt > 0 && (T = Math.max(T, $(nt)));
					try {
						let Q = (i.scrollbarCSS || "").length + (i.baseCSS || "").length + (i.fontsCSS || "").length + (i.classCSS || "").length, ot = C.measureHints.get(i.element);
						if (ot && ot.cssLen === Q && ot.w0 === T) ot.csh > 0 && (I = Math.max(I, $(ot.csh))), ot.csw > 0 && (T = Math.max(T, $(ot.csw)));
						else {
							let Z = O.createElement("div");
							Z.setAttribute("data-snapdom-internal", ""), Z.style.cssText = "position:absolute!important;left:-9999px!important;top:0!important;width:" + T + "px!important;overflow:visible!important;visibility:hidden!important;";
							let Mt = Z.attachShadow({ mode: "open" }), Ft = O.createElement("style");
							Ft.textContent = (i.scrollbarCSS || "") + i.baseCSS + "svg{overflow:visible;} foreignObject{overflow:visible;}" + i.classCSS, Mt.appendChild(Ft), Mt.appendChild(i.clone.cloneNode(!0)), O.body.appendChild(Z);
							let Xt = Z.scrollHeight, xt = Z.scrollWidth;
							O.body.removeChild(Z), C.measureHints.set(i.element, {
								cssLen: Q,
								w0: T,
								csh: Xt,
								csw: xt
							}), Xt > 0 && (I = Math.max(I, $(Xt))), xt > 0 && (T = Math.max(T, $(xt)));
						}
					} catch {}
				}
				if (i.options?.excludeMode === "remove" || i.options?.filterMode === "remove") {
					let X = ar(i.element, i.options);
					Number.isFinite(X) && X > 0 && (I = Math.max(1, Math.min(I, $(X + 1))));
				}
				if (i.options?.reconcile) try {
					let X = (i.scrollbarCSS || "") + i.baseCSS + "svg{overflow:visible;} foreignObject{overflow:visible;}" + i.classCSS;
					cr(i.element, i.clone, X, i.nodeMap, T, I);
				} catch (X) {
					console.warn("[snapdom] reconcile pass failed:", X);
				}
				let P = (X, nt = NaN) => {
					let Q = typeof X == "string" ? parseFloat(X) : X;
					return Number.isFinite(Q) ? Q : nt;
				}, z = P(i.options.width), j = P(i.options.height), tt = f ? $(f.width) : T, et = f ? $(f.height) : I, ht = tt, ft = et, L = Number.isFinite(z), B = Number.isFinite(j), D = et > 0 ? tt / et : 1;
				L && B ? (ht = Math.max(1, $(z)), ft = Math.max(1, $(j))) : L ? (ht = Math.max(1, $(z)), ft = Math.max(1, $(ht / (D || 1)))) : B && (ft = Math.max(1, $(j)), ht = Math.max(1, $(ft * (D || 1))));
				let V = 0, q = 0, J = T, pt = I;
				if (f) {
					let X = 0, nt = 0;
					if (xn(i.element)) {
						let Q = null;
						if (!o && y && Number.isFinite(y.a)) Q = {
							a: y.a,
							b: y.b || 0,
							c: y.c || 0,
							d: y.d || 1,
							e: 0,
							f: 0
						};
						else {
							let ot = Vt(i.element), Z = gn(R.transform && R.transform !== "none" ? R.transform : "", ot);
							Z && Z.is2D && (Q = {
								a: Z.a,
								b: Z.b,
								c: Z.c,
								d: Z.d,
								e: 0,
								f: 0
							});
						}
						if (Q && !(Q.a === 1 && Q.b === 0 && Q.c === 0 && Q.d === 1)) {
							let { ox: ot, oy: Z } = re(R, T, I), Mt = zt(T, I, Q, ot, Z);
							X = Mt.minX, nt = Mt.minY;
						}
					}
					V = $(f.x + X), q = $(f.y + nt), J = $(V + f.width), pt = $(q + f.height);
				} else if (!o && y && Number.isFinite(y.a)) {
					let X = {
						a: y.a,
						b: y.b || 0,
						c: y.c || 0,
						d: y.d || 1,
						e: 0,
						f: 0
					}, nt = zt(T, I, X, 0, 0);
					V = $(nt.minX), q = $(nt.minY), J = $(nt.maxX), pt = $(nt.maxY);
				} else if (o && xn(i.element)) {
					let nt = R.transform && R.transform !== "none" ? R.transform : "", Q = Vt(i.element), ot = Yo({
						baseTransform: nt,
						rotate: Q.rotate || "0deg",
						scale: Q.scale,
						translate: Q.translate
					}), { ox: Z, oy: Mt } = re(R, T, I), Ft = ot.is2D ? ot : new DOMMatrix(ot.toString()), Xt = {
						a: Ft.a,
						b: Ft.b,
						c: Ft.c,
						d: Ft.d,
						e: 0,
						f: 0
					}, xt = zt(T, I, Xt, Z, Mt);
					V = $(xt.minX), q = $(xt.minY), J = $(xt.maxX), pt = $(xt.maxY);
				}
				let yt = Ho(R), Nt = zo(R), it = jo(R), Lt = qo(R), It = Xo(R), kt = f ? {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				} : r ? {
					top: $(Math.max(yt.top, Nt.top) + it.top + Lt.top + It.bleed.top),
					right: $(Math.max(yt.right, Nt.right) + it.right + Lt.right + It.bleed.right),
					bottom: $(Math.max(yt.bottom, Nt.bottom) + it.bottom + Lt.bottom + It.bleed.bottom),
					left: $(Math.max(yt.left, Nt.left) + it.left + Lt.left + It.bleed.left)
				} : {
					top: it.top,
					right: it.right,
					bottom: it.bottom,
					left: it.left
				};
				V = $(V - kt.left), q = $(q - kt.top), J = $(J + kt.right), pt = $(pt + kt.bottom);
				let bt = Math.max(1, $(J - V)), En = Math.max(1, $(pt - q)), Or = L || B ? $(ht / tt) : 1, Br = B || L ? $(ft / et) : 1, Ur = Math.max(1, $(bt * Or)), Dr = Math.max(1, $(En * Br)), $n = "http://www.w3.org/2000/svg", _t = $((xn(i.element) ? 2 : 0) + (o ? 0 : 1)), ce = Math.ceil(bt + _t * 2), le = Math.ceil(En + _t * 2), fe = $(-($(V) - _t)), ue = $(-($(q) - _t)), Rn = Math.max(0, fe), Tn = Math.max(0, ue), Pn = $(ce - Math.min(0, fe)), Nn = $(le - Math.min(0, ue)), wt = document.createElementNS($n, "foreignObject");
				wt.setAttribute("x", String(Math.min(0, fe))), wt.setAttribute("y", String(Math.min(0, ue))), wt.setAttribute("width", String(Pn)), wt.setAttribute("height", String(Nn)), wt.style.overflow = "visible";
				let Ln = document.createElement("style");
				Ln.textContent = (i.scrollbarCSS || "") + i.baseCSS + i.fontsCSS + "svg{overflow:visible;} foreignObject{overflow:visible;} foreignObject>div{-webkit-text-size-adjust:100%!important;text-size-adjust:100%!important;}" + i.classCSS, wt.appendChild(Ln);
				let de = document.createElement("div");
				de.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), de.style.cssText = `all:initial;box-sizing:border-box;display:block;overflow:visible;width:${Pn}px;height:${Nn}px` + (Rn !== 0 || Tn !== 0 ? `;padding:${Tn}px 0 0 ${Rn}px !important` : ""), de.appendChild(i.clone), wt.appendChild(de);
				let Vr = new XMLSerializer().serializeToString(wt), In = L || B, jr = Object.freeze({
					w0: tt,
					h0: et,
					vbW: ce,
					vbH: le,
					targetW: ht,
					targetH: ft,
					contentX: $(fe + (f ? V : 0)),
					contentY: $(ue + (f ? q : 0)),
					clip: f ? Object.freeze({
						x: $(V),
						y: $(q),
						width: tt,
						height: et
					}) : null
				});
				Object.defineProperty(e, "meta", {
					value: jr,
					enumerable: !0,
					writable: !1,
					configurable: !0
				});
				b = `<svg xmlns="${$n}" width="${!In || K() ? ce : $(Ur + _t * 2)}" height="${!In || K() ? le : $(Dr + _t * 2)}" viewBox="0 0 ${ce} ${le}" font-size="${parseFloat(N(O.documentElement)?.fontSize) || 16}px">` + Vr + "</svg>", p = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(b)}`, i = {
					svgString: b,
					dataURL: p,
					...i
				}, E();
			}, { fast: n });
		}), await gt("afterRender", i);
		let F = document.getElementById("snapdom-sandbox");
		return F && F.style.position === "absolute" && F.remove(), i.dataURL;
	}
	function xn(t) {
		return Ko(t);
	}
	rt();
	function kr(t = {}) {
		let e = t.format ?? "png";
		e === "jpg" && (e = "jpeg");
		let n = _n(t.cache);
		return {
			debug: t.debug ?? !1,
			fast: t.fast ?? !0,
			scale: t.scale ?? 1,
			exclude: t.exclude ?? [],
			excludeMode: t.excludeMode ?? "hide",
			filter: t.filter ?? null,
			filterMode: t.filterMode ?? "hide",
			placeholders: t.placeholders !== !1,
			embedFonts: t.embedFonts ?? !1,
			iconFonts: Array.isArray(t.iconFonts) ? t.iconFonts : t.iconFonts ? [t.iconFonts] : [],
			localFonts: Array.isArray(t.localFonts) ? t.localFonts : [],
			excludeFonts: t.excludeFonts ?? void 0,
			fontStylesheetDomains: Array.isArray(t.fontStylesheetDomains) ? t.fontStylesheetDomains : [],
			fallbackURL: t.fallbackURL ?? void 0,
			cache: n,
			useProxy: typeof t.useProxy == "string" ? t.useProxy : "",
			width: t.width ?? null,
			height: t.height ?? null,
			format: e,
			type: t.type ?? "svg",
			quality: t.quality ?? .92,
			dpr: t.dpr ?? (window.devicePixelRatio || 1),
			backgroundColor: t.backgroundColor ?? (["jpeg", "webp"].includes(e) ? "#ffffff" : null),
			filename: t.filename ?? "snapDOM",
			outerTransforms: t.outerTransforms ?? !0,
			outerShadows: t.outerShadows ?? !1,
			reconcile: t.reconcile ?? !1,
			burst: t.burst ?? !1,
			invalidate: t.invalidate ?? !1,
			clip: t.clip ?? null,
			compress: t.compress !== !1,
			excludeStyleProps: t.excludeStyleProps ?? null,
			resolvePicturePlaceholders: t.resolvePicturePlaceholders !== !1,
			pictureResolver: t.pictureResolver && typeof t.pictureResolver == "object" ? t.pictureResolver : {}
		};
	}
	Ct();
	Ke();
	var Mr = new WeakMap();
	function Er(t, e, n) {
		let o = new Set();
		if (t instanceof HTMLVideoElement && o.add(t), t.querySelectorAll) for (let r of t.querySelectorAll("video")) o.add(r);
		for (let r of e.trackedVideos) o.has(r) || (r.removeEventListener("timeupdate", n), r.removeEventListener("seeked", n), e.trackedVideos.delete(r));
		for (let r of o) e.trackedVideos.has(r) || (r.addEventListener("timeupdate", n), r.addEventListener("seeked", n), e.trackedVideos.add(r));
	}
	function xa(t) {
		let e = {
			dirty: !0,
			capturing: !1,
			last: null,
			inflight: Promise.resolve(),
			observers: [],
			trackedVideos: new Set()
		}, n = (s) => {
			e.capturing || Je(s) && (e.dirty = !0);
		}, o = () => {
			e.capturing || (e.dirty = !0);
		}, r = t.ownerDocument || document;
		try {
			let s = new MutationObserver(n);
			s.observe(t, {
				subtree: !0,
				childList: !0,
				attributes: !0,
				characterData: !0
			}), e.observers.push(s);
		} catch {}
		try {
			if (r.head) {
				let s = new MutationObserver(n);
				s.observe(r.head, {
					subtree: !0,
					childList: !0,
					characterData: !0,
					attributes: !0
				}), e.observers.push(s);
			}
		} catch {}
		return e.markDirty = n, e.onMediaDirty = o, Er(t, e, o), e;
	}
	function Fr(t) {
		let { burst: e, invalidate: n, ...o } = t || {};
		try {
			return JSON.stringify(o, Object.keys(o).sort());
		} catch {
			return null;
		}
	}
	function $r(t, e, n, o) {
		let r = Mr.get(t);
		r || (r = xa(t), r.baselineSignature = Fr(e), Mr.set(t, r));
		let s = Fr(e), i = s === null || s !== r.baselineSignature, a = async () => {
			for (let u of r.observers) r.markDirty(u.takeRecords());
			if (n.invalidate && (r.dirty = !0), !i && !r.dirty && r.last) return r.last;
			r.capturing = !0, i || (r.dirty = !1);
			try {
				let u = await o();
				return i || (r.last = u), u;
			} finally {
				for (let u of r.observers) u.takeRecords();
				r.capturing = !1, Er(t, r, r.onMediaDirty);
			}
		}, c = r.inflight.then(a, a);
		return r.inflight = c.catch(() => {}), c;
	}
	at();
	vt();
	rt();
	function La(...t) {
		return wr(...t), H;
	}
	var H = Object.assign(_a, { plugins: La });
	var Fn = Symbol("snapdom.internal");
	var Ia = Symbol("snapdom.internal.silent");
	async function _a(t, e) {
		if (!t) throw new Error("Element cannot be null or undefined");
		let n = kr(e);
		if (vr(n, e && e.plugins), K()) {
			if (n.embedFonts === !0) try {
				let r = Fo(t);
				await Dt(new Set([...r].map((i) => String(i).split("__")[0]).filter(Boolean)), 1);
			} catch {}
			let o = Array.from(t.querySelectorAll("canvas"));
			t.tagName === "CANVAS" && o.unshift(t);
			for (let r of o) try {
				let s = r.getContext("2d", { willReadFrequently: !0 });
				s && s.getImageData(0, 0, 1, 1);
			} catch (s) {
				_$1(e, "safari canvas poke failed", s);
			}
		}
		return n.iconFonts && n.iconFonts.length > 0 && go(n.iconFonts), n.snap || (n.snap = {
			toPng: (o, r) => H.toPng(o, r),
			toSvg: (o, r) => H.toSvg(o, r)
		}), n.burst ? $r(t, e, n, () => H.capture(t, n, Fn)) : H.capture(t, n, Fn);
	}
	H.capture = async (t, e, n) => {
		if (n !== Fn) throw new Error("[snapdom.capture] is internal. Use snapdom(...) instead.");
		e.element = t;
		let o = await Ar(t, e), r = {
			img: async (p, b) => {
				let { toImg: y } = await Promise.resolve().then(() => (An(), Cn));
				return y(o, {
					...p,
					...b || {}
				});
			},
			svg: async (p, b) => {
				let { toSvg: y } = await Promise.resolve().then(() => (An(), Cn));
				return y(o, {
					...p,
					...b || {}
				});
			},
			canvas: async (p, b) => {
				let { toCanvas: y } = await Promise.resolve().then(() => (qt(), Nr));
				return y(o, {
					...p,
					...b || {}
				});
			},
			blob: async (p, b) => {
				let { toBlob: y } = await Promise.resolve().then(() => (Mn(), Lr));
				return y(o, {
					...p,
					...b || {}
				});
			},
			png: async (p, b) => {
				let { rasterize: y } = await Promise.resolve().then(() => (ae(), Ue));
				return y(o, {
					...p,
					...b || {},
					format: "png"
				});
			},
			jpeg: async (p, b) => {
				let { rasterize: y } = await Promise.resolve().then(() => (ae(), Ue));
				return y(o, {
					...p,
					...b || {},
					format: "jpeg"
				});
			},
			webp: async (p, b) => {
				let { rasterize: y } = await Promise.resolve().then(() => (ae(), Ue));
				return y(o, {
					...p,
					...b || {},
					format: "webp"
				});
			},
			download: async (p, b) => {
				let { download: y } = await Promise.resolve().then(() => (Wr(), _r));
				return y(o, {
					...p,
					...b || {}
				});
			}
		}, s = {};
		for (let p of [
			"img",
			"svg",
			"canvas",
			"blob",
			"png",
			"jpeg",
			"webp"
		]) s[p] = async (b) => r[p](e, {
			...b || {},
			[Ia]: !0
		});
		s.jpg = s.jpeg;
		let a = await Sr("defineExports", {
			...e,
			export: { url: o },
			exports: s
		}), c = Object.assign({}, ...a.filter((p) => p && typeof p == "object").reverse()), u = {
			...r,
			...c
		};
		u.jpeg && !u.jpg && (u.jpg = (p, b) => u.jpeg(p, b));
		function l(p, b) {
			let y = {
				...e,
				...b || {}
			}, w = (g) => g === "jpeg" || g === "jpg" || g === "webp";
			return [
				p,
				y.format,
				y.type
			].map((g) => typeof g == "string" ? g.toLowerCase() : "").find(w) && (y.backgroundColor == null || y.backgroundColor === "transparent") && (y.backgroundColor = "#ffffff"), y;
		}
		let d = !1, f = Promise.resolve();
		async function h(p, b) {
			let y = Object.freeze(b && typeof b == "object" ? { ...b } : {}), w = async () => {
				let g = u[p];
				if (!g) throw new Error(`[snapdom] Unknown export type: ${p}`);
				let x = l(p, y), v = {
					...e,
					export: {
						type: p,
						options: x,
						requestedOptions: y,
						url: o
					}
				};
				await gt("beforeExport", v, {
					format: p,
					options: x
				});
				let k = await g(v, x);
				return await gt("afterExport", v, {
					format: p,
					options: x,
					result: k
				}), d || (d = !0, await gt("afterSnap", e)), k;
			}, S = f.then(w);
			return f = S.catch(() => {}), S;
		}
		let m = {
			url: o,
			toRaw: () => o,
			to: (p, b) => h(p, b),
			toImg: (p) => h("img", p),
			toSvg: (p) => h("svg", p),
			toCanvas: (p) => h("canvas", p),
			toBlob: (p) => h("blob", p),
			toPng: (p) => h("png", p),
			toJpg: (p) => h("jpg", p),
			toWebp: (p) => h("webp", p),
			download: (p) => h("download", p)
		};
		Object.defineProperty(m, "meta", {
			value: e.meta,
			enumerable: !0,
			writable: !1,
			configurable: !1
		});
		for (let p of Object.keys(u)) {
			let b = "to" + p.charAt(0).toUpperCase() + p.slice(1);
			m[b] || (m[b] = (y) => h(p, y));
		}
		return m;
	};
	H.toRaw = (t, e) => H(t, e).then((n) => n.toRaw());
	H.toImg = (t, e) => H(t, e).then((n) => n.toImg());
	H.toSvg = (t, e) => H(t, e).then((n) => n.toSvg());
	H.toCanvas = (t, e) => H(t, e).then((n) => n.toCanvas());
	H.toBlob = (t, e) => H(t, e).then((n) => n.toBlob());
	H.toPng = (t, e) => H(t, {
		...e,
		format: "png"
	}).then((n) => n.toPng());
	H.toJpg = (t, e) => H(t, {
		...e,
		format: "jpeg"
	}).then((n) => n.toJpg());
	H.toWebp = (t, e) => H(t, {
		...e,
		format: "webp"
	}).then((n) => n.toWebp());
	H.download = (t, e) => H(t, e).then((n) => n.download());
	var Effect = class {
		_sideEffects = [];
		_cleanupFns = [];
		_isDisposed = false;
		add(sideEffect) {
			if (this._isDisposed) return;
			this._sideEffects.push(sideEffect);
		}
		run() {
			if (this._isDisposed) return;
			this._sideEffects.forEach((fn) => {
				const cleanupFn = fn();
				if (cleanupFn) this._cleanupFns.push(cleanupFn);
			});
			this._sideEffects = [];
		}
		dispose() {
			if (this._isDisposed) return;
			this._cleanupFns.forEach((fn) => fn());
			this._cleanupFns = [];
			this._isDisposed = true;
		}
	};
	var PNG_SIGNATURE = new Uint8Array([
		137,
		80,
		78,
		71,
		13,
		10,
		26,
		10
	]);
	var PNG_TYPE_IHDR = new Uint8Array([
		73,
		72,
		68,
		82
	]);
	var PNG_TYPE_IDAT = new Uint8Array([
		73,
		68,
		65,
		84
	]);
	var PNG_TYPE_IEND = new Uint8Array([
		73,
		69,
		78,
		68
	]);
	var ROW_CHUNK_BYTES = 262144;
	var crcTable = new Uint32Array(256);
	for (let index = 0; index < crcTable.length; index++) {
		let value = index;
		for (let bit = 0; bit < 8; bit++) value = value & 1 ? 3988292384 ^ value >>> 1 : value >>> 1;
		crcTable[index] = value >>> 0;
	}
	function writeUint32(target, offset, value) {
		target[offset] = value >>> 24;
		target[offset + 1] = value >>> 16;
		target[offset + 2] = value >>> 8;
		target[offset + 3] = value;
	}
	function pngChunk(type, data = new Uint8Array()) {
		const chunk = new Uint8Array(12 + data.length);
		writeUint32(chunk, 0, data.length);
		chunk.set(type, 4);
		chunk.set(data, 8);
		let crc = 4294967295;
		for (let index = 4; index < 8 + data.length; index++) crc = crcTable[(crc ^ chunk[index]) & 255] ^ crc >>> 8;
		writeUint32(chunk, 8 + data.length, (crc ^ 4294967295) >>> 0);
		return chunk;
	}
	function pngHeader(width, height) {
		const data = new Uint8Array(13);
		writeUint32(data, 0, width);
		writeUint32(data, 4, height);
		data[8] = 8;
		data[9] = 6;
		return pngChunk(PNG_TYPE_IHDR, data);
	}
	async function encodePng(width, renderRows) {
		if (!Number.isInteger(width) || width <= 0) throw new RangeError("PNG width must be a positive integer");
		if (typeof CompressionStream === "undefined") throw new TypeError("CompressionStream is not supported by this browser");
		const compression = new CompressionStream("deflate");
		const writer = compression.writable.getWriter();
		const idatChunks = [];
		const readCompressedData = (async () => {
			const reader = compression.readable.getReader();
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				idatChunks.push(pngChunk(PNG_TYPE_IDAT, value));
			}
		})();
		let writtenRows = 0;
		try {
			await renderRows(async ({ data, width: rowWidth, height: rowCount }) => {
				if (rowWidth !== width || data.length !== rowWidth * rowCount * 4) throw new RangeError("Invalid RGBA rows supplied to PNG encoder");
				const rgbaStride = width * 4;
				const pngStride = rgbaStride + 1;
				const rowsPerWrite = Math.max(1, Math.floor(ROW_CHUNK_BYTES / pngStride));
				for (let startRow = 0; startRow < rowCount; startRow += rowsPerWrite) {
					const rowsInWrite = Math.min(rowsPerWrite, rowCount - startRow);
					const filteredRows = new Uint8Array(pngStride * rowsInWrite);
					for (let row = 0; row < rowsInWrite; row++) {
						const sourceOffset = (startRow + row) * rgbaStride;
						const targetOffset = row * pngStride;
						filteredRows[targetOffset] = 0;
						filteredRows.set(data.subarray(sourceOffset, sourceOffset + rgbaStride), targetOffset + 1);
					}
					await writer.write(filteredRows);
				}
				writtenRows += rowCount;
			});
			if (writtenRows === 0) throw new RangeError("PNG must contain at least one row");
			await writer.close();
			await readCompressedData;
		} catch (error) {
			await writer.abort(error).catch(() => {});
			await readCompressedData.catch(() => {});
			throw error;
		}
		return new Blob([
			PNG_SIGNATURE,
			pngHeader(width, writtenRows),
			...idatChunks,
			pngChunk(PNG_TYPE_IEND)
		], { type: "image/png" });
	}
	var MAX_SCREENSHOT_DIMENSION = 16e3;
	var MAX_TILE_PIXELS = 16e6;
	function scrollElementWithinRoot(scrollRoot, target, block) {
		const scrollRect = scrollRoot.getBoundingClientRect();
		const targetRect = target.getBoundingClientRect();
		const offset = targetRect.top - scrollRect.top;
		const alignment = block === "center" ? (scrollRoot.clientHeight - targetRect.height) / 2 : 0;
		scrollRoot.scrollTop = Math.max(0, Math.min(scrollRoot.scrollHeight - scrollRoot.clientHeight, scrollRoot.scrollTop + offset - alignment));
		scrollRoot.dispatchEvent(new Event("scroll", { bubbles: true }));
	}
	function findCommonAncestor(elements) {
		let ancestor = elements[0]?.parentElement;
		while (ancestor && !elements.every((element) => ancestor.contains(element))) ancestor = ancestor.parentElement;
		return ancestor;
	}
	var REDESIGNED_THREAD_SELECTOR = "[data-chatgpt-conversation-selection-target]";
	var REDESIGNED_SCROLL_ROOT_SELECTOR = "[data-app-action-timeline-scroll]";
	var REDESIGNED_TURN_SELECTOR = "[data-turn-key]";
	var HISTORY_SPINNER_SELECTOR = ":scope > div > [role=\"status\"]";
	var HISTORY_LOAD_ATTEMPTS = 120;
	function scrollRootTo(scrollRoot, scrollTop) {
		scrollRoot.scrollTop = scrollTop;
		scrollRoot.dispatchEvent(new Event("scroll", { bubbles: true }));
	}
	function createScrollPosition(scrollRoot) {
		const initialScrollTop = scrollRoot.scrollTop;
		scrollRoot.scrollTop = -1;
		const reversed = initialScrollTop < 0 || scrollRoot.scrollTop < 0;
		scrollRoot.scrollTop = initialScrollTop;
		const max = () => Math.max(0, scrollRoot.scrollHeight - scrollRoot.clientHeight);
		return {
			reversed,
			max,
			get: () => reversed ? scrollRoot.scrollTop + max() : scrollRoot.scrollTop,
			set: (top) => scrollRootTo(scrollRoot, reversed ? top - max() : top)
		};
	}
	var IMAGE_LOAD_TIMEOUT = 5e3;
	function waitForImages(root) {
		const pending = Array.from(root.querySelectorAll("img")).filter((img) => !img.complete);
		if (pending.length === 0) return Promise.resolve();
		return Promise.race([Promise.all(pending.map((img) => new Promise((resolve) => {
			img.addEventListener("load", resolve, { once: true });
			img.addEventListener("error", resolve, { once: true });
		}))), sleep(IMAGE_LOAD_TIMEOUT)]);
	}
	function inlineBlobImages(live, snapshot) {
		const snapshotImages = snapshot.querySelectorAll("img");
		live.querySelectorAll("img").forEach((img, index) => {
			const target = snapshotImages[index];
			if (!target || !img.currentSrc.startsWith("blob:") || !img.complete || img.naturalWidth === 0) return;
			try {
				const dataUrl = getBase64FromImg(img);
				if (!dataUrl) return;
				target.removeAttribute("srcset");
				target.src = dataUrl;
			} catch (error) {
				console.warn("[ChatGPT Exporter:screenshot] failed to copy image", error);
			}
		});
	}
	var growUserBubbles = {
		name: "chatgpt-exporter-grow-user-bubbles",
		afterClone({ clone: root, nodeMap }) {
			nodeMap?.forEach((source, clone) => {
				if (!(source instanceof HTMLElement) || !(clone instanceof HTMLElement)) return;
				if (!source.matches(".bg-user-message")) return;
				for (let el = clone; el && el !== root; el = el.parentElement) el.style.height = "auto";
				clone.querySelectorAll("*").forEach((child) => {
					if (!(child instanceof HTMLImageElement)) child.style.height = "auto";
				});
			});
		}
	};
	var CJK_FONT_FAMILY = "chatgpt-exporter-cjk";
	var CJK_UNICODE_RANGE = "U+2E80-2FFF, U+3000-303F, U+3040-30FF, U+3100-31FF, U+3400-4DBF, U+4E00-9FFF, U+F900-FAFF, U+FE30-FE4F, U+FF00-FFEF";
	var CJK_FONT_FACES = [
		{
			weight: "100 400",
			name: "PingFangTC-Regular"
		},
		{
			weight: "500",
			name: "PingFangTC-Medium"
		},
		{
			weight: "600 900",
			name: "PingFangTC-Semibold"
		}
	].map(({ weight, name }) => `
    @font-face {
        font-family: "${CJK_FONT_FAMILY}";
        src: local("${name}");
        font-weight: ${weight};
        unicode-range: ${CJK_UNICODE_RANGE};
    }
`).join("");
	var CJK_PROBE_TEXT = "中文字寬測試一二三四五六七八九十";
	var CJK_PROBE_TOLERANCE = 2;
	async function measureCjkGap(root) {
		const probe = document.createElement("span");
		probe.textContent = CJK_PROBE_TEXT;
		probe.style.cssText = "position: absolute; font-size: 16px; white-space: pre";
		root.appendChild(probe);
		const pageWidth = probe.getBoundingClientRect().width;
		const { fontFamily, fontWeight } = getComputedStyle(probe);
		probe.remove();
		const scale = 2;
		const width = Math.ceil(pageWidth) + 40;
		const height = 32;
		const lang = root.closest("[lang]")?.lang ?? "";
		const style = `font-family: ${fontFamily}; font-weight: ${fontWeight}; font-size: 16px; white-space: pre; background: #f00; color: transparent`;
		const img = await loadCorsImage(toSvgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" lang="${escapeHtml(lang)}"><span style="${escapeHtml(style)}">${CJK_PROBE_TEXT}</span></div></foreignObject></svg>`));
		if (!img) return null;
		try {
			const canvas = document.createElement("canvas");
			canvas.width = width * scale;
			canvas.height = 64;
			const ctx = canvas.getContext("2d");
			if (!ctx) return null;
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			const { data } = ctx.getImageData(0, 16, canvas.width, 1);
			let right = 0;
			for (let x = 0; x < canvas.width; x++) if (data[x * 4] > 200 && data[x * 4 + 1] < 60 && data[x * 4 + 3] > 128) right = x + 1;
			return right / scale - pageWidth;
		} catch {
			return null;
		}
	}
	async function matchCjkMetrics(root) {
		const gap = await measureCjkGap(root);
		if (gap !== null && gap < CJK_PROBE_TOLERANCE) return;
		const elements = [root, ...Array.from(root.querySelectorAll("*"))];
		const families = new Map(elements.map((el) => [el, getComputedStyle(el).fontFamily]));
		elements.forEach((el) => {
			const family = families.get(el);
			if (!family || el !== root && family === families.get(el.parentElement)) return;
			el.style.fontFamily = `"${CJK_FONT_FAMILY}", ${family}`;
		});
		await Promise.all([
			"400",
			"500",
			"600"
		].map((weight) => document.fonts.load(`${weight} 16px "${CJK_FONT_FAMILY}"`, "中").catch(() => [])));
	}
	var EMOJI_PATTERN = /[\u{1F1E6}-\u{1F1FF}]{2}|[0-9#*]️⃣|(?:\p{Emoji_Presentation}|\p{Extended_Pictographic}️)(?:[\u{1F3FB}-\u{1F3FF}]|️|‍(?:\p{Emoji_Presentation}|\p{Extended_Pictographic}️?))*/gu;
	function pinEmojiWidths(root) {
		const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
		const textNodes = [];
		for (let node = walker.nextNode(); node; node = walker.nextNode()) {
			EMOJI_PATTERN.lastIndex = 0;
			if (EMOJI_PATTERN.test(node.nodeValue ?? "") && !node.parentElement?.closest("style, script, svg")) textNodes.push(node);
		}
		const wrappers = [];
		textNodes.forEach((node) => {
			const text = node.nodeValue ?? "";
			const fragment = document.createDocumentFragment();
			let last = 0;
			for (const match of text.matchAll(EMOJI_PATTERN)) {
				fragment.append(text.slice(last, match.index));
				const wrapper = document.createElement("span");
				wrapper.textContent = match[0];
				fragment.append(wrapper);
				wrappers.push(wrapper);
				last = match.index + match[0].length;
			}
			fragment.append(text.slice(last));
			node.replaceWith(fragment);
		});
		const widths = wrappers.map((wrapper) => wrapper.getBoundingClientRect().width);
		wrappers.forEach((wrapper, index) => {
			Object.assign(wrapper.style, {
				display: "inline-block",
				width: `${widths[index]}px`,
				textIndent: "0"
			});
		});
	}
	var TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
	var FAVICON_MAX_SIZE = 40;
	function toSvgDataUrl(svg) {
		return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
	}
	function getFaviconHost(src) {
		try {
			const url = new URL(src);
			const site = url.searchParams.get("url") || url.searchParams.get("domain");
			return new URL(site && /^https?:/.test(site) ? site : `https://${site || url.hostname}`).hostname.replace(/^www\./, "");
		} catch {
			return "";
		}
	}
	function createImagePlaceholder(target, src, isDarkMode) {
		const rect = target.getBoundingClientRect();
		const width = Math.round(rect.width);
		const height = Math.round(rect.height);
		if (width === 0 || height === 0) return TRANSPARENT_PIXEL;
		const fill = isDarkMode ? "#303030" : "#ececec";
		const ink = isDarkMode ? "#8f8f8f" : "#a3a3a3";
		if (Math.max(width, height) <= FAVICON_MAX_SIZE) {
			const initial = getFaviconHost(src).charAt(0).toUpperCase();
			const size = Math.min(width, height);
			return toSvgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><circle cx="${width / 2}" cy="${height / 2}" r="${size / 2}" fill="${fill}"/><text x="50%" y="50%" dy="0.35em" text-anchor="middle" font-family="system-ui, sans-serif" font-size="${size * .55}" font-weight="600" fill="${ink}">${initial}</text></svg>`);
		}
		const iconSize = Math.max(16, Math.min(48, Math.min(width, height) * .3));
		const scale = iconSize / 24;
		return toSvgDataUrl(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${fill}"/><g transform="translate(${(width - iconSize) / 2} ${(height - iconSize) / 2}) scale(${scale})" fill="none" stroke="${ink}" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="9" cy="9.5" r="1.75"/><path d="M3.5 17.5l5-5 3.5 3.5 2.5-2.5 6 6"/></g></svg>`);
	}
	var EXTERNAL_IMAGE_CONCURRENCY = 6;
	var EXTERNAL_IMAGE_SCALE = 2;
	function loadCorsImage(url) {
		return new Promise((resolve) => {
			const img = new Image();
			const timer = setTimeout(() => resolve(null), IMAGE_LOAD_TIMEOUT);
			img.crossOrigin = "anonymous";
			img.onload = () => {
				clearTimeout(timer);
				resolve(img);
			};
			img.onerror = () => {
				clearTimeout(timer);
				resolve(null);
			};
			img.src = url;
		});
	}
	function encodeImage(source, target) {
		const rect = target.getBoundingClientRect();
		const ratio = rect.width > 0 && rect.height > 0 ? Math.min(1, Math.max(rect.width * EXTERNAL_IMAGE_SCALE / source.naturalWidth, rect.height * EXTERNAL_IMAGE_SCALE / source.naturalHeight)) : 1;
		const canvas = document.createElement("canvas");
		canvas.width = Math.max(1, Math.round(source.naturalWidth * ratio));
		canvas.height = Math.max(1, Math.round(source.naturalHeight * ratio));
		const context = canvas.getContext("2d");
		if (!context) return null;
		context.drawImage(source, 0, 0, canvas.width, canvas.height);
		return canvas.toDataURL("image/png");
	}
	async function inlineExternalImages(root, isDarkMode) {
		const imagesBySrc = new Map();
		root.querySelectorAll("img").forEach((img) => {
			const src = img.currentSrc || img.src;
			try {
				const url = new URL(src, location.href);
				if (!url.protocol.startsWith("http") || url.origin === location.origin) return;
			} catch {
				return;
			}
			const targets = imagesBySrc.get(src);
			if (targets) targets.push(img);
			else imagesBySrc.set(src, [img]);
		});
		const queue = Array.from(imagesBySrc.entries());
		let nextIndex = 0;
		const worker = async () => {
			while (nextIndex < queue.length) {
				const [src, targets] = queue[nextIndex++];
				const source = await loadCorsImage(src);
				targets.forEach((target) => {
					let dataUrl = null;
					try {
						dataUrl = source && encodeImage(source, target);
					} catch {}
					target.removeAttribute("srcset");
					target.src = dataUrl || createImagePlaceholder(target, src, isDarkMode);
				});
			}
		};
		await Promise.all(Array.from({ length: EXTERNAL_IMAGE_CONCURRENCY }, worker));
	}
	function getSurfaceColor(element, fallback) {
		for (let el = element; el; el = el.parentElement) {
			const color = getComputedStyle(el).backgroundColor;
			if (color && color !== "transparent" && !/^rgba\(.*,\s*0\)$/.test(color)) return color;
		}
		return fallback;
	}
	async function prepareRedesignedThread(threadEl, effect, isDarkMode) {
		const scrollRoot = threadEl.closest(REDESIGNED_SCROLL_ROOT_SELECTOR);
		if (!scrollRoot || !threadEl.querySelector(REDESIGNED_TURN_SELECTOR)) return null;
		const backgroundColor = getSurfaceColor(threadEl, isDarkMode ? "#212121" : "#fff");
		const position = createScrollPosition(scrollRoot);
		effect.add(() => {
			const distanceFromBottom = position.max() - position.get();
			return () => position.set(position.max() - distanceFromBottom);
		});
		effect.run();
		let previousScrollHeight = -1;
		for (let attempt = 0; attempt < HISTORY_LOAD_ATTEMPTS && threadEl.querySelector(HISTORY_SPINNER_SELECTOR); attempt++) {
			if (scrollRoot.scrollHeight === previousScrollHeight) {
				position.set(scrollRoot.clientHeight * 2);
				await sleep(100);
			}
			previousScrollHeight = scrollRoot.scrollHeight;
			position.set(0);
			await sleep(500);
		}
		if (threadEl.querySelector(HISTORY_SPINNER_SELECTOR)) console.warn("[ChatGPT Exporter:screenshot] history is still loading; exporting the loaded part");
		const snapshots = new Map();
		const getListOffset = (turn) => turn.getBoundingClientRect().top - scrollRoot.getBoundingClientRect().top + position.get();
		const getMountedTurns = () => Array.from(threadEl.querySelectorAll(REDESIGNED_TURN_SELECTOR));
		const captureMountedTurns = async () => {
			const turns = getMountedTurns().filter((turn) => {
				const key = turn.dataset.turnKey;
				return !!key && !snapshots.has(key) && turn.offsetHeight > 0;
			});
			if (turns.length === 0) return;
			turns.forEach((turn) => turn.querySelectorAll("img[loading=\"lazy\"]").forEach((img) => img.setAttribute("loading", "eager")));
			await Promise.all(turns.map(waitForImages));
			await sleep(100);
			turns.forEach((turn) => {
				const key = turn.dataset.turnKey;
				if (snapshots.has(key) || !turn.isConnected) return;
				const snapshot = turn.cloneNode(true);
				snapshot.querySelectorAll("img[loading=\"lazy\"]").forEach((img) => img.setAttribute("loading", "eager"));
				inlineBlobImages(turn, snapshot);
				snapshots.set(key, {
					top: getListOffset(turn),
					snapshot
				});
			});
		};
		position.set(0);
		await sleep(250);
		while (true) {
			await captureMountedTurns();
			const previousTop = position.get();
			if (previousTop >= position.max() - 1) break;
			const lastTurn = getMountedTurns().at(-1);
			const lastTurnOffset = lastTurn ? lastTurn.getBoundingClientRect().top - scrollRoot.getBoundingClientRect().top : 0;
			position.set(lastTurnOffset > 0 ? previousTop + Math.floor(lastTurnOffset) : position.max());
			await sleep(250);
			if (position.get() <= previousTop) break;
		}
		await captureMountedTurns();
		if (snapshots.size === 0) return null;
		const staticThread = threadEl.cloneNode(false);
		staticThread.removeAttribute("data-chatgpt-conversation-selection-target");
		staticThread.removeAttribute("data-thread-find-target");
		staticThread.setAttribute("data-chatgpt-exporter-screenshot-root", "");
		Object.assign(staticThread.style, {
			position: "absolute",
			left: "-100000px",
			top: "0",
			width: `${threadEl.offsetWidth}px`,
			height: "auto",
			minHeight: "0",
			pointerEvents: "none"
		});
		const style = document.createElement("style");
		style.textContent = `${CJK_FONT_FACES}
        [data-chatgpt-exporter-screenshot-root] {
            color: ${isDarkMode ? "#ececec" : "#0d0d0d"};
            background-color: ${backgroundColor};
        }

        [data-chatgpt-exporter-screenshot-root] [data-virtualized-turn-content] {
            content-visibility: visible !important;
        }

        /* date separators such as "Yesterday 10:08 AM" */
        [data-chatgpt-exporter-screenshot-root] [role="separator"] {
            display: none;
        }

        /* the "Is this conversation helpful so far?" card */
        [data-chatgpt-exporter-screenshot-root] :has(> aside) {
            display: none;
        }

        /* image groups ChatGPT hid for lack of images, left as empty skeletons */
        [data-chatgpt-exporter-screenshot-root] :has(> [class~="group/generated-image-preview"]):not(:has(img)) {
            display: none;
        }

        /* Keep the spacing of the action row and code block headers. */
        [data-chatgpt-exporter-screenshot-root] .turn-action-controls,
        [data-chatgpt-exporter-screenshot-root] [data-markdown-copy="code-block"] button {
            visibility: hidden;
        }
    `;
		staticThread.appendChild(style);
		Array.from(snapshots.values()).sort((a, b) => a.top - b.top).forEach(({ snapshot }) => staticThread.appendChild(snapshot));
		if (document.documentElement.lang) staticThread.lang = document.documentElement.lang;
		effect.add(() => {
			threadEl.after(staticThread);
			return () => staticThread.remove();
		});
		effect.run();
		await matchCjkMetrics(staticThread);
		pinEmojiWidths(staticThread);
		await inlineExternalImages(staticThread, isDarkMode);
		await sleep(100);
		return {
			screenshotEls: splitIntoParts(staticThread, effect),
			backgroundColor
		};
	}
	var MAX_PART_HEIGHT = 32e3;
	function splitIntoParts(staticThread, effect) {
		const maxHeight = MAX_PART_HEIGHT / Math.min(2, MAX_SCREENSHOT_DIMENSION / staticThread.offsetWidth) - 100;
		if (staticThread.scrollHeight <= maxHeight) return [staticThread];
		const style = staticThread.querySelector(":scope > style");
		const groups = [[]];
		let groupHeight = 0;
		Array.from(staticThread.children).forEach((turn) => {
			if (!(turn instanceof HTMLElement) || turn === style) return;
			const height = turn.offsetHeight;
			if (groups.at(-1).length > 0 && groupHeight + height > maxHeight) {
				groups.push([]);
				groupHeight = 0;
			}
			groups.at(-1).push(turn);
			groupHeight += height;
		});
		const parts = groups.map((turns) => {
			const part = staticThread.cloneNode(false);
			if (style) part.appendChild(style.cloneNode(true));
			part.append(...turns);
			return part;
		});
		effect.add(() => {
			staticThread.after(...parts);
			return () => parts.forEach((part) => part.remove());
		});
		effect.run();
		return parts;
	}
	async function prepareLegacyThread(effect, isDarkMode) {
		const conversationTurns = Array.from(document.querySelectorAll("#thread [data-testid^=\"conversation-turn-\"]"));
		const thread = findCommonAncestor(conversationTurns);
		if (!thread || thread.children.length === 0 || thread.scrollHeight < 50) return null;
		const threadEl = thread;
		const turnContainerIds = Array.from(threadEl.querySelectorAll("[data-turn-id-container][data-is-intersecting]")).filter((element) => !!element.querySelector("[data-testid^=\"conversation-turn-\"]") || element.offsetHeight > 0 || !!element.style.getPropertyValue("--last-known-height")).map((element) => element.dataset.turnIdContainer).filter((id) => !!id && id !== "client-created-root");
		effect.add(() => {
			threadEl.setAttribute("data-chatgpt-exporter-screenshot-root", "");
			const style = document.createElement("style");
			style.textContent = `
            [data-chatgpt-exporter-screenshot-root],
            #thread [data-testid^="conversation-turn-"] {
                color: ${isDarkMode ? "#ececec" : "#0d0d0d"};
                background-color: ${isDarkMode ? "#212121" : "#fff"};
            }

            /* https://github.com/niklasvh/html2canvas/issues/2775#issuecomment-1204988157 */
            img {
                display: initial !important;
            }

            pre {
                margin-top: 8px !important;
            }

            pre > div > div > span {
                margin-top: -12px;
                padding-bottom: 2px;
            }

            #page-header,
            #thread-bottom-container,
            /* date separators such as "Yesterday 10:08 AM" */
            [data-chatgpt-exporter-screenshot-root] [role="separator"],
            /* any other elements that are not conversation turns */
            [data-chatgpt-exporter-screenshot-root] > :not([data-turn-id-container]):not([data-testid^="conversation-turn-"]):not(:has([data-testid^="conversation-turn-"])),
            /* hide back to top button */
            button.absolute,
            /* question button */
            .group.absolute > button {
                display: none;
            }

            /* Preserve the action row's spacing while hiding its toolbar. */
            [data-testid^="conversation-turn-"] [role="group"]:has([data-testid="copy-turn-action-button"]),
            /* code block buttons */
            #thread pre button {
                visibility: hidden;
            }

            /* Later user turns currently have much larger top padding than the first one. */
            [data-testid^="conversation-turn-"][data-turn="user"] > h4 + div {
                padding-top: 0 !important;
            }
            `;
			threadEl.appendChild(style);
			return () => {
				style.remove();
				threadEl.removeAttribute("data-chatgpt-exporter-screenshot-root");
			};
		});
		const scrollRoot = threadEl.closest("[data-scroll-root]");
		if (scrollRoot) effect.add(() => {
			const scrollTop = scrollRoot.scrollTop;
			const scrollLeft = scrollRoot.scrollLeft;
			const overflowAnchor = scrollRoot.style.overflowAnchor;
			scrollRoot.style.overflowAnchor = "none";
			return () => {
				scrollRoot.style.overflowAnchor = overflowAnchor;
				scrollRoot.scrollTop = scrollTop;
				scrollRoot.scrollLeft = scrollLeft;
			};
		});
		effect.run();
		const turnSnapshots = new Map();
		if (scrollRoot && turnContainerIds.length > 0) for (const turnContainerId of turnContainerIds) {
			for (let pass = 0; pass < 10; pass++) {
				const container = Array.from(threadEl.querySelectorAll("[data-turn-id-container][data-is-intersecting]")).find((element) => element.dataset.turnIdContainer === turnContainerId);
				if (!container) break;
				if (container.querySelector("[data-testid^=\"conversation-turn-\"]")) {
					turnSnapshots.set(turnContainerId, container.cloneNode(true));
					break;
				}
				scrollElementWithinRoot(scrollRoot, container, "center");
				await sleep(250);
			}
			if (!turnSnapshots.has(turnContainerId)) {
				const placeholder = Array.from(threadEl.querySelectorAll("[data-turn-id-container][data-is-intersecting]")).find((element) => element.dataset.turnIdContainer === turnContainerId);
				if (placeholder) turnSnapshots.set(turnContainerId, placeholder.cloneNode(true));
			}
		}
		else if (scrollRoot && conversationTurns[0]) {
			scrollElementWithinRoot(scrollRoot, conversationTurns[0], "start");
			await sleep(250);
		}
		await sleep(500);
		let screenshotEl = threadEl;
		if (turnSnapshots.size > 0) {
			const staticThread = threadEl.cloneNode(false);
			staticThread.setAttribute("data-chatgpt-exporter-screenshot-root", "");
			staticThread.style.position = "absolute";
			staticThread.style.left = "-100000px";
			staticThread.style.top = "0";
			staticThread.style.width = `${threadEl.offsetWidth}px`;
			staticThread.style.height = "auto";
			staticThread.style.minHeight = "0";
			staticThread.style.maxHeight = "none";
			staticThread.style.overflow = "visible";
			staticThread.style.pointerEvents = "none";
			for (const turnContainerId of turnContainerIds) {
				const snapshot = turnSnapshots.get(turnContainerId);
				if (snapshot) staticThread.appendChild(snapshot);
			}
			effect.add(() => {
				document.body.appendChild(staticThread);
				return () => staticThread.remove();
			});
			effect.run();
			screenshotEl = staticThread;
			await sleep(100);
		}
		return {
			screenshotEls: [screenshotEl],
			backgroundColor: isDarkMode ? "#212121" : "#fff"
		};
	}
	async function exportToPng(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		const effect = new Effect();
		const isDarkMode = getColorScheme() === "dark";
		const redesignedThread = Array.from(document.querySelectorAll(REDESIGNED_THREAD_SELECTOR)).find((thread) => thread.offsetHeight > 0);
		const source = redesignedThread ? await prepareRedesignedThread(redesignedThread, effect, isDarkMode) : await prepareLegacyThread(effect, isDarkMode);
		if (!source) {
			effect.dispose();
			alert(i18n.t("Failed to export to PNG. Failed to find the element node."));
			return false;
		}
		const { screenshotEls, backgroundColor } = source;
		const pngs = [];
		for (const screenshotEl of screenshotEls) {
			const png = await renderPng(screenshotEl, effect, backgroundColor);
			if (!png) {
				effect.dispose();
				alert("Failed to export to PNG. This might be caused by the size of the conversation. Please try to export a smaller conversation.");
				return false;
			}
			pngs.push(png);
		}
		effect.dispose();
		const chatId = getChatIdFromUrl() || void 0;
		const fileName = getFileNameWithFormat(fileNameFormat, "png", { chatId });
		if (pngs.length === 1) {
			downloadFile(fileName, "image/png", pngs[0]);
			return true;
		}
		const zip = new import_jszip_min.default();
		const baseName = fileName.replace(/\.png$/, "");
		const digits = String(pngs.length).length;
		pngs.forEach((png, index) => {
			zip.file(`${baseName}-${String(index + 1).padStart(digits, "0")}.png`, png);
		});
		const blob = await zip.generateAsync({
			type: "blob",
			compression: "STORE",
			platform: "UNIX"
		});
		downloadFile(getFileNameWithFormat(fileNameFormat, "zip", { chatId }), "application/zip", blob);
		return true;
	}
	async function renderPng(screenshotEl, effect, backgroundColor) {
		effect.add(() => {
			const minHeight = screenshotEl.style.minHeight;
			screenshotEl.style.minHeight = `${screenshotEl.scrollHeight}px`;
			return () => {
				screenshotEl.style.minHeight = minHeight;
			};
		});
		effect.run();
		await sleep(0);
		const width = Math.max(screenshotEl.offsetWidth, screenshotEl.scrollWidth);
		const height = Math.max(screenshotEl.offsetHeight, screenshotEl.scrollHeight);
		let capture = null;
		try {
			capture = await H(screenshotEl, {
				embedFonts: true,
				reconcile: true,
				plugins: [growUserBubbles],
				backgroundColor
			});
		} catch (error) {
			console.error("Failed to capture screenshot DOM", error);
		}
		const sourceWidth = capture?.meta.vbW || width;
		const sourceHeight = capture?.meta.vbH || height;
		const requestedScale = Math.min(2, MAX_SCREENSHOT_DIMENSION / sourceWidth);
		const desiredWidth = Math.max(1, Math.floor(sourceWidth * requestedScale));
		const desiredScale = desiredWidth / sourceWidth;
		const desiredHeight = Math.max(1, Math.floor(sourceHeight * desiredScale));
		const takeTiledScreenshot = async () => {
			if (!capture) {
				console.warn("[ChatGPT Exporter:screenshot] tiled capture unavailable");
				return null;
			}
			if (typeof CompressionStream === "undefined") {
				console.warn("[ChatGPT Exporter:screenshot] CompressionStream unavailable; using downscaled fallback");
				return null;
			}
			const tileHeight = Math.max(1, Math.min(MAX_SCREENSHOT_DIMENSION, Math.floor(MAX_TILE_PIXELS / desiredWidth)));
			try {
				return await encodePng(desiredWidth, async (appendRows) => {
					for (let targetY = 0; targetY < desiredHeight; targetY += tileHeight) {
						const targetTileHeight = Math.min(tileHeight, desiredHeight - targetY);
						const sourceY = sourceHeight * targetY / desiredHeight;
						const sourceBottom = sourceHeight * (targetY + targetTileHeight) / desiredHeight;
						const canvas = await capture.toCanvas({
							crop: {
								x: 0,
								y: sourceY,
								width: sourceWidth,
								height: sourceBottom - sourceY
							},
							scale: desiredScale,
							dpr: 1,
							backgroundColor
						});
						if (canvas.width !== desiredWidth) throw new Error(`Unexpected screenshot tile width: ${canvas.width}`);
						const context = canvas.getContext("2d", { willReadFrequently: true });
						if (!context) throw new Error("Failed to read screenshot tile");
						await appendRows(context.getImageData(0, 0, canvas.width, canvas.height));
						canvas.width = 1;
						canvas.height = 1;
					}
				});
			} catch (error) {
				console.error("Failed to encode tiled screenshot", error);
				return null;
			}
		};
		const passLimit = 10;
		const takeDownscaledScreenshot = async (additionalScale = 1, currentPass = 1) => {
			if (!capture) return null;
			const scale = Math.min(requestedScale, MAX_SCREENSHOT_DIMENSION / sourceWidth, MAX_SCREENSHOT_DIMENSION / sourceHeight) * additionalScale;
			const targetWidth = Math.max(1, Math.floor(sourceWidth * scale));
			const targetHeight = Math.max(1, Math.floor(sourceHeight * scale));
			let canvas = null;
			try {
				canvas = await capture.toCanvas({
					scale,
					dpr: 1,
					backgroundColor
				});
				const context = canvas.getContext("2d");
				if (context) context.imageSmoothingEnabled = false;
				const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png", 1));
				if (blob) return blob;
			} catch (error) {
				console.error("Failed to take screenshot", error);
			}
			console.log(`ChatGPT Exporter:takeScreenshot with height=${height} width=${width} targetHeight=${targetHeight} targetWidth=${targetWidth}`);
			if (currentPass > passLimit) return null;
			return takeDownscaledScreenshot(additionalScale / 1.4, currentPass + 1);
		};
		const shouldTile = desiredHeight > MAX_SCREENSHOT_DIMENSION || desiredWidth * desiredHeight > MAX_SCREENSHOT_DIMENSION * MAX_SCREENSHOT_DIMENSION;
		let png = shouldTile ? await takeTiledScreenshot() : await takeDownscaledScreenshot();
		if (!png && shouldTile) {
			console.warn("[ChatGPT Exporter:screenshot] tiled export failed; using downscaled fallback");
			png = await takeDownscaledScreenshot();
		}
		return png;
	}
	function convertMessageToTavern(node) {
		if (!node.message || shouldSkipMessageInExport(node.message) || node.message.content.content_type !== "text") return null;
		const authorRole = node.message.author.role;
		const createTime = node.message.create_time || new Date().getTime() / 1e3;
		const text = node.message.content.parts.join("\n");
		return {
			name: authorRole === "assistant" ? "Assistant" : "You",
			is_user: authorRole === "user",
			is_name: authorRole === "assistant",
			send_date: createTime,
			mes: text,
			swipes: [text],
			swipe_id: 0
		};
	}
	function convertToTavern(conversation) {
		return jsonlStringify([{
			user_name: "You",
			character_name: "Assistant"
		}, ...conversation.conversationNodes.map(convertMessageToTavern).filter(nonNullable)]);
	}
	function convertToOoba(conversation) {
		const pairs = [];
		const messages = conversation.conversationNodes.filter((node) => {
			return !!node.message && !shouldSkipMessageInExport(node.message) && node.message.content.content_type === "text";
		});
		let idx = 0;
		while (idx < messages.length - 1) {
			const message = messages[idx];
			const nextMessage = messages[idx + 1];
			if (!message.message || !nextMessage.message || message.message.content.content_type !== "text" || nextMessage.message.content.content_type !== "text") {
				idx += 1;
				continue;
			}
			const role = message.message.author.role;
			const text = message.message.content.parts.join("\n");
			const nextRole = nextMessage.message.author.role;
			const nextText = nextMessage.message.content.parts.join("\n");
			if (role === "system") {
				if (text !== "") pairs.push(["<|BEGIN-VISIBLE-CHAT|>", text]);
				idx += 1;
				continue;
			}
			if (role === "user") {
				if (nextRole === "assistant") {
					pairs.push([text, nextText]);
					idx += 2;
					continue;
				} else if (nextRole === "user") {
					pairs.push([text, ""]);
					idx += 1;
					continue;
				}
			}
			if (role === "assistant") {
				pairs.push(["", text]);
				idx += 1;
			}
		}
		const oobaData = {
			internal: pairs,
			visible: JSON.parse(JSON.stringify(pairs))
		};
		if (oobaData.visible[0] && oobaData.visible[0][0] === "<|BEGIN-VISIBLE-CHAT|>") oobaData.visible[0][0] = "";
		return JSON.stringify(oobaData, null, 2);
	}
	var ASSETS_DIR = "assets";
	var IMAGE_EXTENSIONS = {
		"image/jpeg": "jpg",
		"image/png": "png",
		"image/gif": "gif",
		"image/webp": "webp",
		"image/svg+xml": "svg"
	};
	function getImageMode() {
		return ScriptStorage.get("exporter:image_mode") ?? "embed";
	}
	async function extractImageFiles(conversation, assets) {
		const copy = structuredClone(conversation);
		await replaceImageSources(copy, async (src) => {
			const match = /^data:([^;,]*)[^,]*;base64,(.*)$/s.exec(src);
			if (!match) return null;
			const [, mimeType, base64] = match;
			const ext = IMAGE_EXTENSIONS[mimeType.toLowerCase()] ?? "bin";
			const name = `image-${await hashBase64(base64)}.${ext}`;
			assets.set(name, base64);
			return `${ASSETS_DIR}/${name}`;
		});
		return copy;
	}
	function addImageFilesToZip(zip, assets) {
		assets.forEach((base64, name) => {
			zip.file(`${ASSETS_DIR}/${name}`, base64, {
				base64: true,
				compression: "STORE"
			});
		});
	}
	async function hashBase64(base64) {
		const bytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
		const digest = await crypto.subtle.digest("SHA-256", bytes);
		return Array.from(new Uint8Array(digest).slice(0, 8), (b) => b.toString(16).padStart(2, "0")).join("");
	}
	async function exportToJson(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		if (!checkIfTemporaryChatIsExportable()) {
			alert(i18n.t("Temporary chat could not be captured"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const rawConversation = await fetchConversation(chatId);
		downloadFile(getFileNameWithFormat(fileNameFormat, "json", {
			title: rawConversation.title || "ChatGPT Conversation",
			chatId
		}), "application/json", conversationToJson([rawConversation]));
		return true;
	}
	async function exportToTavern(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		if (!checkIfTemporaryChatIsExportable()) {
			alert(i18n.t("Temporary chat could not be captured"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await fetchConversation(chatId));
		downloadFile(getFileNameWithFormat(`${fileNameFormat}.tavern`, "jsonl", {
			title: conversation.title,
			chatId
		}), "application/json-lines", convertToTavern(conversation));
		return true;
	}
	async function exportAllToTavern(fileNameFormat, apiConversations, _metaList, projectName, partIndex, totalParts) {
		const zip = new import_jszip_min.default();
		const filenameMap = new Map();
		apiConversations.map((x) => processConversation(x)).forEach((conversation) => {
			let fileName = getFileNameWithFormat(`${fileNameFormat}.tavern`, "jsonl", {
				title: conversation.title,
				chatId: conversation.id,
				createTime: conversation.createTime,
				updateTime: conversation.updateTime
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -13)} (${count}).tavern.jsonl`;
			} else filenameMap.set(fileName, 1);
			zip.file(fileName, convertToTavern(conversation));
		});
		const blob = await zip.generateAsync({
			type: "blob",
			platform: "UNIX",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
		downloadFile(buildZipFileName("tavern", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
		return true;
	}
	async function exportToOoba(fileNameFormat) {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		if (!checkIfTemporaryChatIsExportable()) {
			alert(i18n.t("Temporary chat could not be captured"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const conversation = processConversation(await fetchConversation(chatId));
		downloadFile(getFileNameWithFormat(`${fileNameFormat}.ooba`, "json", {
			title: conversation.title,
			chatId
		}), "application/json", convertToOoba(conversation));
		return true;
	}
	async function exportAllToOfficialJson(_fileNameFormat, apiConversations, _metaList, projectName, partIndex, totalParts) {
		const partInfo = partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0;
		const content = conversationToJson(apiConversations);
		downloadFile(buildJsonBatchFileName(projectName, partInfo), "application/json", content);
		return true;
	}
	async function exportAllToJson(fileNameFormat, apiConversations, _metaList, projectName, partIndex, totalParts) {
		const zip = new import_jszip_min.default();
		const filenameMap = new Map();
		const assets = new Map();
		(getImageMode() === "files" ? await Promise.all(apiConversations.map((x) => extractImageFiles(x, assets))) : apiConversations).forEach((rawConversation) => {
			let fileName = getFileNameWithFormat(fileNameFormat, "json", {
				title: rawConversation.title || "ChatGPT Conversation",
				chatId: rawConversation.id,
				createTime: rawConversation.create_time,
				updateTime: rawConversation.update_time
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -5)} (${count}).json`;
			} else filenameMap.set(fileName, 1);
			const content = conversationToJson(rawConversation);
			zip.file(fileName, content);
		});
		addImageFilesToZip(zip, assets);
		const blob = await zip.generateAsync({
			type: "blob",
			platform: "UNIX",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
		downloadFile(buildZipFileName("json", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
		return true;
	}
	function conversationToJson(conversation) {
		return JSON.stringify(conversation);
	}
	function loadImages(conversation, imageMode) {
		return imageMode === "omit" ? Promise.resolve(conversation) : withImageAssets(conversation);
	}
	async function exportToMarkdown(fileNameFormat, metaList) {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		if (!checkIfTemporaryChatIsExportable()) {
			alert(i18n.t("Temporary chat could not be captured"));
			return false;
		}
		const chatId = await getCurrentChatId();
		const imageMode = getImageMode();
		const assets = new Map();
		let rawConversation = await loadImages(await fetchConversation(chatId), imageMode);
		if (imageMode === "files") rawConversation = await extractImageFiles(rawConversation, assets);
		const enableThinking = ScriptStorage.get("exporter:enable_thinking") ?? false;
		const conversation = processConversation(rawConversation, { enableThinking });
		const markdown = standardizeLineBreaks(conversationToMarkdown(conversation, metaList, imageMode));
		const fileName = getFileNameWithFormat(fileNameFormat, "md", {
			title: conversation.title,
			chatId,
			createTime: conversation.createTime,
			updateTime: conversation.updateTime
		});
		if (assets.size === 0) {
			downloadFile(fileName, "text/markdown", markdown);
			return true;
		}
		const zip = new import_jszip_min.default();
		zip.file(fileName, markdown);
		addImageFilesToZip(zip, assets);
		downloadFile(fileName.replace(/\.md$/, ".zip"), "application/zip", await generateZip(zip));
		return true;
	}
	async function exportAllToMarkdown(fileNameFormat, apiConversations, metaList, projectName, partIndex, totalParts) {
		const zip = new import_jszip_min.default();
		const filenameMap = new Map();
		const enableThinking = ScriptStorage.get("exporter:enable_thinking") ?? false;
		const imageMode = getImageMode();
		const assets = new Map();
		(imageMode === "files" ? await Promise.all(apiConversations.map((x) => extractImageFiles(x, assets))) : apiConversations).map((x) => processConversation(x, { enableThinking })).forEach((conversation) => {
			let fileName = getFileNameWithFormat(fileNameFormat, "md", {
				title: conversation.title,
				chatId: conversation.id,
				createTime: conversation.createTime,
				updateTime: conversation.updateTime
			});
			if (filenameMap.has(fileName)) {
				const count = filenameMap.get(fileName) ?? 1;
				filenameMap.set(fileName, count + 1);
				fileName = `${fileName.slice(0, -3)} (${count}).md`;
			} else filenameMap.set(fileName, 1);
			const content = conversationToMarkdown(conversation, metaList, imageMode);
			zip.file(fileName, content);
		});
		addImageFilesToZip(zip, assets);
		const blob = await generateZip(zip);
		downloadFile(buildZipFileName("markdown", projectName, partIndex != null && totalParts != null ? {
			part: partIndex,
			total: totalParts
		} : void 0), "application/zip", blob);
		return true;
	}
	function generateZip(zip) {
		return zip.generateAsync({
			type: "blob",
			platform: "UNIX",
			compression: "DEFLATE",
			compressionOptions: { level: 9 }
		});
	}
	function conversationToMarkdown(conversation, metaList, imageMode) {
		const { id, title, conversationNodes } = conversation;
		const _metaList = resolveMetaList(metaList, getMetaVariables(conversation, `${baseUrl}/c/${id}`)).map(([name, val]) => `${name}: ${val}`);
		const frontMatter = _metaList.length > 0 ? `---\n${_metaList.join("\n")}\n---\n\n` : "";
		const enableTimestamp = ScriptStorage.get("exporter:enable_timestamp") ?? false;
		const timeStampMarkdown = ScriptStorage.get("exporter:timestamp_markdown") ?? false;
		const timeStamp24H = ScriptStorage.get("exporter:timestamp_24h") ?? false;
		const enableSources = ScriptStorage.get("exporter:enable_sources") ?? true;
		const renderImage = imageMode === "omit" ? () => "[image]" : (src) => `![image](${src})`;
		return `${frontMatter}# ${title}\n\n${conversationNodes.map(({ message, thinking }) => {
			if (!message || !message.content) return null;
			if (shouldSkipMessageInExport(message)) return null;
			const timestamp = message?.create_time ?? "";
			const showTimestamp = enableTimestamp && timeStampMarkdown && timestamp;
			let timestampHtml = "";
			if (showTimestamp) {
				const date = new Date(timestamp * 1e3);
				const conversationTime = date.toLocaleTimeString("en-US", {
					hour: "2-digit",
					minute: "2-digit",
					hour12: !timeStamp24H
				});
				timestampHtml = `<time datetime="${date.toISOString()}" title="${date.toLocaleString()}">${conversationTime}</time>\n\n`;
			}
			const author = transformAuthor(message.author);
			const thinkingBlock = thinking ? formatThinkingMarkdown(thinking) : "";
			const postSteps = [];
			if (message.author.role === "assistant") {
				postSteps.push((input) => transformContentReferences(input, message.metadata, {
					includeSourceList: enableSources,
					sourceListLabel: i18n.t("Sources")
				}));
				postSteps.push((input) => transformFootNotes$1(input, message.metadata));
			}
			if (message.author.role === "assistant") postSteps.push((input) => {
				const { text, restore } = protectMath(input);
				return restore(toMarkdown(fromMarkdown(text), text));
			});
			const postProcess = (input) => postSteps.reduce((acc, fn) => fn(acc), input);
			const content = transformContent$1(message.content, message.metadata, postProcess, renderImage);
			const attachments = getFileAttachmentNames(message).map((name) => `- 📎 ${name}`).join("\n");
			const attachmentsBlock = attachments ? `\n\n${attachments}` : "";
			return `#### ${author}:\n${timestampHtml}${thinkingBlock}${content}${attachmentsBlock}`;
		}).filter(Boolean).join("\n\n")}`;
	}
	function transformFootNotes$1(input, metadata) {
		const footNoteMarkRegex = /【(\d+)†\((.+?)\)】/g;
		const citationList = [];
		return `${input.replace(footNoteMarkRegex, (match, citeIndex, _evidenceText) => {
			const citation = metadata?.citations?.find((cite) => cite.metadata?.extra?.cited_message_idx === +citeIndex);
			if (citation) {
				citationList.push(citation);
				return `[^${citeIndex}]`;
			}
			return match;
		})}\n\n${citationList.map((citation) => {
			return `[^${citation.metadata?.extra?.cited_message_idx ?? 1}]: ${citation.metadata?.title ?? "No title"}`;
		}).join("\n")}`;
	}
	function transformContent$1(content, metadata, postProcess, renderImage) {
		switch (content.content_type) {
			case "text": return postProcess(content.parts?.join("\n") || "");
			case "code": return postProcess(`Code:\n\`\`\`\n${content.text}\n\`\`\``);
			case "execution_output":
				if (metadata?.aggregate_result?.messages) return metadata.aggregate_result.messages.filter((msg) => msg.message_type === "image").map((msg) => renderImage(msg.image_url)).join("\n");
				return postProcess(`Result:\n\`\`\`\n${content.text}\n\`\`\`` || "");
			case "tether_quote": return postProcess(`> ${content.title || content.text || ""}`);
			case "tether_browsing_code": return postProcess("");
			case "tether_browsing_display": {
				const metadataList = metadata?._cite_metadata?.metadata_list;
				if (Array.isArray(metadataList) && metadataList.length > 0) return postProcess(metadataList.map(({ title, url }) => `> [${title}](${url})`).join("\n"));
				return postProcess("");
			}
			case "multimodal_text": return content.parts?.map((part) => {
				if (typeof part === "string") return postProcess(part);
				if (part.content_type === "image_asset_pointer") return renderImage(part.asset_pointer);
				if (part.content_type === "audio_transcription") return `[audio] ${part.text}`;
				if (part.content_type === "audio_asset_pointer") return null;
				if (part.content_type === "real_time_user_audio_video_asset_pointer") return null;
				return postProcess("[Unsupported multimodal content]");
			}).join("\n") || "";
			default:
				console.warn("[Exporter] Unsupported Content:", content.content_type, content);
				return postProcess(`[Unsupported Content: ${content.content_type}]`);
		}
	}
	function formatThinkingMarkdown(thinking) {
		const durationLabel = thinking.durationSeconds != null ? `Thought for ${thinking.durationSeconds} seconds` : "Thinking";
		const parts = [];
		if (thinking.activities?.length) parts.push(thinking.activities.map((a) => `- ${a}`).join("\n"));
		const thoughts = thinking.thoughts.map((t) => t.content || t.summary).filter(Boolean).join("\n\n");
		if (thoughts) parts.push(thoughts);
		const body = parts.join("\n\n");
		if (!body) return "";
		return `<details>\n<summary>${durationLabel}</summary>\n\n${body}\n\n</details>\n\n`;
	}
	function copyToClipboard(text) {
		try {
			navigator.clipboard.writeText(text);
		} catch {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			document.execCommand("copy");
			document.body.removeChild(textarea);
		}
	}
	async function exportToText() {
		if (!checkIfConversationStarted()) {
			alert(i18n.t("Please start a conversation first"));
			return false;
		}
		if (!checkIfTemporaryChatIsExportable()) {
			alert(i18n.t("Temporary chat could not be captured"));
			return false;
		}
		const { conversationNodes } = processConversation(await fetchConversation(await getCurrentChatId()));
		copyToClipboard(standardizeLineBreaks(conversationNodes.map(({ message }) => transformMessage(message)).filter(Boolean).join("\n\n")));
		return true;
	}
	function transformMessage(message) {
		if (!message || !message.content) return null;
		if (shouldSkipMessageInExport(message)) return null;
		const author = transformAuthor(message.author);
		let content = transformContent(message.content, message.metadata);
		if (message.author.role === "assistant") {
			content = transformContentReferences(content, message.metadata, {
				output: "text",
				inlineReferenceMode: "alt",
				includeSourceList: false
			});
			content = transformFootNotes(content, message.metadata);
		}
		if (message.author.role === "assistant" && content) {
			const { text, restore } = protectMath(content);
			content = restore(reformatContent(text));
		}
		return `${author}:\n${content}`;
	}
	function transformContent(content, metadata) {
		switch (content.content_type) {
			case "text": return content.parts?.join("\n") || "";
			case "code": return content.text || "";
			case "execution_output":
				if (metadata?.aggregate_result?.messages) return metadata.aggregate_result.messages.filter((msg) => msg.message_type === "image").map(() => "[image]").join("\n");
				return content.text || "";
			case "tether_quote": return `> ${content.title || content.text || ""}`;
			case "tether_browsing_code": return "";
			case "tether_browsing_display": {
				const metadataList = metadata?._cite_metadata?.metadata_list;
				if (Array.isArray(metadataList) && metadataList.length > 0) return metadataList.map(({ title, url }) => `> [${title}](${url})`).join("\n");
				return "";
			}
			case "multimodal_text": return content.parts?.map((part) => {
				if (typeof part === "string") return part;
				if (part.content_type === "image_asset_pointer") return "[image]";
				if (part.content_type === "audio_transcription") return `[audio] ${part.text}`;
				if (part.content_type === "audio_asset_pointer") return null;
				if (part.content_type === "real_time_user_audio_video_asset_pointer") return null;
				return "[Unsupported multimodal content]";
			}).join("\n") || "";
			default:
				console.warn("[Exporter] Unsupported Content:", content.content_type, content);
				return "[Unsupported Content]";
		}
	}
	function reformatContent(input) {
		const root = fromMarkdown(input);
		flatMap(root, (item) => {
			if (item.type === "strong") return item.children;
			if (item.type === "emphasis") return item.children;
			return [item];
		});
		return toMarkdown(root, input);
	}
	function transformFootNotes(input, metadata) {
		return input.replace(/【(\d+)†\((.+?)\)】/g, (match, citeIndex, _evidenceText) => {
			if (metadata?.citations?.find((cite) => cite.metadata?.extra?.cited_message_idx === +citeIndex)) return "";
			return match;
		});
	}
	function useWindowResize(selector) {
		return En(subscribe$1, selector);
	}
	function subscribe$1(callback) {
		window.addEventListener("resize", callback);
		return () => window.removeEventListener("resize", callback);
	}
	var _ = 0;
	function o(o, e, n, t, f, l) {
		var s, u, a = {};
		for (u in e) "ref" == u ? s = e[u] : a[u] = e[u];
		var i = {
			type: o,
			props: a,
			key: n,
			ref: s,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			__h: null,
			constructor: void 0,
			__v: --_,
			__source: f,
			__self: l
		};
		if ("function" == typeof o && (s = o.defaultProps)) for (u in s) void 0 === a[u] && (a[u] = s[u]);
		return l$1.vnode && l$1.vnode(i), i;
	}
	function Dialog({ open, ...props }) {
		if (!open) return null;
		return z(o(OpenDialog, { ...props }), document.body);
	}
	function OpenDialog({ onOpenChange, title, className, style, children }) {
		const ref = _$2(null);
		const titleId = V$1();
		const mounted = _$2(true);
		y(() => {
			const dialog = ref.current;
			mounted.current = true;
			dialog.showModal();
			dialog.focus();
			return () => {
				mounted.current = false;
				dialog.close();
			};
		}, []);
		const onOpenChangeRef = _$2(onOpenChange);
		onOpenChangeRef.current = onOpenChange;
		const close = () => onOpenChangeRef.current(false);
		p(() => {
			const onBackdropClick = (e) => {
				e.stopPropagation();
				close();
			};
			const onPointerDown = (e) => {
				document.removeEventListener("click", onBackdropClick, true);
				const rect = ref.current.getBoundingClientRect();
				if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) return;
				e.stopPropagation();
				if (e.pointerType === "touch") {
					document.addEventListener("click", onBackdropClick, {
						once: true,
						capture: true
					});
					return;
				}
				close();
			};
			document.addEventListener("pointerdown", onPointerDown, true);
			return () => {
				document.removeEventListener("pointerdown", onPointerDown, true);
				document.removeEventListener("click", onBackdropClick, true);
			};
		}, []);
		const onCancel = (e) => {
			e.preventDefault();
			close();
		};
		const onClose = () => {
			if (!mounted.current) return;
			close();
			requestAnimationFrame(() => {
				const dialog = ref.current;
				if (mounted.current && dialog && !dialog.open) dialog.showModal();
			});
		};
		return o("dialog", {
			ref,
			className: `ce-root ce-dialog ${className ?? ""}`,
			style,
			"aria-labelledby": titleId,
			tabIndex: -1,
			onCancel,
			onClose,
			children: [o("h2", {
				id: titleId,
				className: "ce-dialog-title",
				children: title
			}), children]
		});
	}
	var Divider = () => o("div", { className: "ce-divider" });
	async function refreshConversationList(cached, fetchPage, pageSize, maxItems) {
		const known = new Map(cached.map((c) => [c.id, c.update_time]));
		const fresh = [];
		let total = null;
		let offset = 0;
		while (offset < maxItems) {
			const page = await fetchPage(offset, pageSize);
			const items = page.items ?? [];
			total = page.total;
			const firstUnchanged = items.findIndex((c) => known.has(c.id) && known.get(c.id) === c.update_time);
			if (firstUnchanged !== -1) {
				fresh.push(...items.slice(0, firstUnchanged));
				break;
			}
			fresh.push(...items);
			if (items.length < pageSize) break;
			offset += pageSize;
		}
		return {
			head: fresh,
			total
		};
	}
	function applyHead(head, items) {
		if (head.length === 0) return items;
		const headIds = new Set(head.map((c) => c.id));
		return [...head, ...items.filter((c) => !headIds.has(c.id))];
	}
	function mitt_default(n) {
		return {
			all: n = n || new Map(),
			on: function(t, e) {
				var i = n.get(t);
				i ? i.push(e) : n.set(t, [e]);
			},
			off: function(t, e) {
				var i = n.get(t);
				i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
			},
			emit: function(t, e) {
				var i = n.get(t);
				i && i.slice().map(function(n) {
					n(e);
				}), (i = n.get("*")) && i.slice().map(function(n) {
					n(t, e);
				});
			}
		};
	}
	var MAX_RETRIES = 5;
	var DEFAULT_429_PAUSE_MS = 6e4;
	var MAX_429_PAUSE_MS = 3e5;
	var RequestQueue = class {
		minBackoff;
		maxBackoff;
		eventEmitter = mitt_default();
		queue = [];
		results = [];
		skipped = [];
		status = "IDLE";
		backoffMultiplier = 2;
		backoff;
		total = 0;
		completed = 0;
		pauseUntil = 0;
		batchPauses = 0;
		runId = 0;
		constructor(minBackoff, maxBackoff) {
			this.minBackoff = minBackoff;
			this.maxBackoff = maxBackoff;
			this.backoff = minBackoff;
		}
		add(requestObject) {
			this.queue.push({
				...requestObject,
				retries: 0,
				rateRetries: 0
			});
		}
		start() {
			if (this.status === "IDLE") {
				this.total = this.queue.length;
				this.process();
			}
		}
		stop() {
			this.runId++;
			const wasRunning = this.status === "IN_PROGRESS";
			this.status = "STOPPED";
			if (wasRunning) this.eventEmitter.emit("done", this.results);
		}
		clear() {
			this.runId++;
			this.queue = [];
			this.results = [];
			this.skipped = [];
			this.status = "IDLE";
			this.backoff = this.minBackoff;
			this.pauseUntil = 0;
			this.batchPauses = 0;
			this.total = 0;
			this.completed = 0;
		}
		getSkipped() {
			return this.skipped;
		}
		on(event, fn) {
			this.eventEmitter.on(event, fn);
			return () => this.eventEmitter.off(event, fn);
		}
		async process() {
			if (this.status === "STOPPED" || this.status === "COMPLETED") return;
			if (this.queue.length === 0) {
				this.done();
				return;
			}
			const runId = this.runId;
			const remaining = this.pauseUntil - Date.now();
			if (remaining > 0) {
				const waitSecs = Math.ceil(remaining / 1e3);
				this.progress(this.queue[0].name, "rate_limited", waitSecs);
				await sleep(remaining);
				if (runId !== this.runId) return;
				this.pauseUntil = 0;
			}
			this.status = "IN_PROGRESS";
			const requestObject = this.queue.shift();
			const { name, request } = requestObject;
			let waitMs = this.backoff;
			try {
				this.progress(name, "processing");
				const result = await request();
				if (runId !== this.runId) return;
				this.results.push(result);
				this.completed++;
				this.progress(name, "processing");
				this.backoff = this.minBackoff;
				requestObject.retries = 0;
				if (requestObject.cached) waitMs = 0;
			} catch (error) {
				if (runId !== this.runId) return;
				if (error instanceof RateLimitError) {
					this.batchPauses++;
					const backoffMs = DEFAULT_429_PAUSE_MS * 2 ** (this.batchPauses - 1);
					const pauseMs = Math.max(error.retryAfterMs, Math.min(MAX_429_PAUSE_MS, backoffMs));
					this.pauseUntil = Date.now() + pauseMs;
					this.progress(name, "rate_limited", Math.round(pauseMs / 1e3));
					console.warn(`[Exporter] Rate limited (429). Pausing ${Math.round(pauseMs / 1e3)}s (pause #${this.batchPauses} this batch)`);
					this.queue.unshift(requestObject);
					waitMs = 0;
				} else {
					console.error(`[Exporter] "${name}" failed:`, error);
					requestObject.retries++;
					if (requestObject.retries > MAX_RETRIES) {
						console.warn(`[Exporter] "${name}" skipped after ${MAX_RETRIES} retries`);
						this.skipped.push(name);
						waitMs = 0;
					} else {
						this.backoff = Math.min(this.backoff * this.backoffMultiplier, this.maxBackoff);
						waitMs = this.backoff;
						this.progress(name, "retrying");
						this.queue.unshift(requestObject);
					}
				}
			}
			await sleep(waitMs);
			if (runId !== this.runId) return;
			this.process();
		}
		progress(name, status, rateLimitWaitSecs) {
			this.eventEmitter.emit("progress", {
				total: this.total,
				completed: this.completed,
				currentName: name,
				currentStatus: status,
				rateLimitWaitSecs
			});
		}
		done() {
			this.status = "COMPLETED";
			this.eventEmitter.emit("done", this.results);
		}
	};
	_css(".ce-checkbox {\n    position: relative;\n    display: flex;\n    font-size: 16px;\n    vertical-align: middle;\n}\n\n.ce-checkbox * {\n    cursor: pointer;\n}\n\n.ce-checkbox[disabled] {\n    opacity: 0.7;\n}\n\n.ce-checkbox[disabled] * {\n    cursor: not-allowed;\n}\n\n.ce-checkbox input {\n    position: absolute;\n    opacity: 0;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n}\n\n.ce-checkbox-icon {\n    display: inline-flex;\n    align-items: center;\n    position: relative;\n    vertical-align: middle;\n    font-size: 1.5rem;\n}\n\n.ce-checkbox input:checked ~ svg {\n    color: var(--ce-accent);\n}\n\n.ce-checkbox-label {\n    margin-left: 0.5rem;\n    font-size: 1rem;\n    line-height: 1.5;\n}\n");
	function FileCode() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 384 512",
			className: "ce-icon",
			fill: "currentColor",
			children: o("path", { d: "M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" })
		});
	}
	function IconCamera() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 512 512",
			className: "ce-icon",
			fill: "currentColor",
			children: o("path", { d: "M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 384c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z" })
		});
	}
	function IconMarkdown() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 640 512",
			className: "ce-icon",
			fill: "currentColor",
			children: o("path", { d: "M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z" })
		});
	}
	function IconCopy() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 512 512",
			className: "ce-icon",
			fill: "currentColor",
			children: o("path", { d: "M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" })
		});
	}
	function IconArrowRightFromBracket() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 576 512",
			className: "ce-icon",
			fill: "currentColor",
			children: o("path", { d: "M534.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L434.7 224 224 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM192 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-53 0-96 43-96 96l0 256c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" })
		});
	}
	function IconSetting() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 15 15",
			className: "ce-icon",
			stroke: "currentColor",
			"stroke-width": "0.5",
			children: o("path", {
				d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
				fill: "currentColor",
				fillRule: "evenodd",
				clipRule: "evenodd"
			})
		});
	}
	function IconCross() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 15 15",
			width: "15",
			height: "15",
			children: o("path", {
				d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
				fill: "currentColor",
				fillRule: "evenodd",
				clipRule: "evenodd"
			})
		});
	}
	function IconJSON() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "ce-icon-md",
			style: {
				marginInline: "-2px",
				marginTop: "2px"
			},
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				o("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				o("path", { d: "M20 16v-8l3 8v-8" }),
				o("path", { d: "M15 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" }),
				o("path", { d: "M1 8h3v6.5a1.5 1.5 0 0 1 -3 0v-.5" }),
				o("path", { d: "M7 15a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1" })
			]
		});
	}
	function IconZip() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className: "ce-icon",
			"stroke-width": "2",
			stroke: "currentColor",
			fill: "none",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				o("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				o("path", { d: "M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1" }),
				o("path", { d: "M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z" }),
				o("path", { d: "M11 5l-1 0" }),
				o("path", { d: "M13 7l-1 0" }),
				o("path", { d: "M11 9l-1 0" }),
				o("path", { d: "M13 11l-1 0" }),
				o("path", { d: "M11 13l-1 0" }),
				o("path", { d: "M13 15l-1 0" })
			]
		});
	}
	function IconLoading({ className, style }) {
		return o("span", {
			style: {
				display: "inline-flex",
				animation: "1.4s linear 0s infinite normal none running ce-rotate"
			},
			children: o("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "22 22 44 44",
				className,
				style: {
					animation: "1.4s ease-in-out 0s infinite normal none running ce-circular-dash",
					...style
				},
				fill: "none",
				stroke: "currentColor",
				"stroke-width": "2",
				children: o("circle", {
					cx: "44",
					cy: "44",
					r: "20.2",
					fill: "none",
					stroke: "currentColor",
					"stroke-width": "3.6"
				})
			})
		});
	}
	function IconCheckBox() {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			style: {
				width: "1em",
				height: "1em",
				display: "inline-block"
			},
			fill: "currentColor",
			children: o("path", { d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" })
		});
	}
	function IconCheckBoxChecked({ className }) {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className,
			style: {
				width: "1em",
				height: "1em",
				display: "inline-block"
			},
			fill: "currentColor",
			children: o("path", { d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
		});
	}
	function IconTrash({ className, style }) {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className,
			style,
			fill: "none",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			children: [
				o("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				o("path", {
					d: "M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z",
					"stroke-width": "0",
					fill: "currentColor"
				}),
				o("path", {
					d: "M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z",
					"stroke-width": "0",
					fill: "currentColor"
				})
			]
		});
	}
	function IconUpload({ className, style }) {
		return o("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			className,
			style,
			fill: "none",
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			children: [
				o("path", {
					stroke: "none",
					d: "M0 0h24v24H0z",
					fill: "none"
				}),
				o("path", {
					stroke: "currentColor",
					d: "M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"
				}),
				o("path", {
					stroke: "currentColor",
					d: "M7 9l5 -5l5 5"
				}),
				o("path", {
					stroke: "currentColor",
					d: "M12 4l0 12"
				})
			]
		});
	}
	var CheckBox = ({ className, checked = false, disabled, label, onCheckedChange }) => {
		const [isChecked, setChecked] = h(checked);
		const onChange = (e) => {
			const newValue = e.currentTarget.checked;
			setChecked(newValue);
			onCheckedChange?.(newValue);
		};
		p(() => {
			setChecked(checked);
		}, [checked]);
		return o("label", {
			className: `ce-checkbox ${className ?? ""}`,
			disabled,
			children: [o("span", {
				className: "ce-checkbox-icon",
				children: [o("input", {
					type: "checkbox",
					checked: isChecked,
					onChange,
					disabled
				}), isChecked ? o(IconCheckBoxChecked, {}) : o(IconCheckBox, {})]
			}), o("span", {
				className: "ce-checkbox-label",
				children: label
			})]
		});
	};
	function useGMStorage(key, initialValue) {
		const [storedValue, setStoredValue] = h(() => ScriptStorage.get(key) ?? initialValue);
		return [storedValue, T$1((value) => {
			setStoredValue(value);
			ScriptStorage.set(key, value);
		}, [key])];
	}
	var defaultFormat = "ChatGPT-{title}";
	var defaultExportAllLimit = 200;
	var defaultImageMode = "embed";
	var defaultExportMetaList = [{
		name: "title",
		value: "{title}"
	}, {
		name: "source",
		value: "{source}"
	}];
	var SettingContext = G$1({
		format: defaultFormat,
		setFormat: (_) => {},
		enableTimestamp: false,
		setEnableTimestamp: (_) => {},
		timeStamp24H: false,
		setTimeStamp24H: (_) => {},
		enableTimestampHTML: false,
		setEnableTimestampHTML: (_) => {},
		enableTimestampMarkdown: false,
		setEnableTimestampMarkdown: (_) => {},
		enableMeta: false,
		setEnableMeta: (_) => {},
		exportMetaList: defaultExportMetaList,
		setExportMetaList: (_) => {},
		enableThinking: false,
		setEnableThinking: (_) => {},
		enableSources: true,
		setEnableSources: (_) => {},
		imageMode: defaultImageMode,
		setImageMode: (_) => {},
		exportAllLimit: defaultExportAllLimit,
		setExportAllLimit: (_) => {},
		resetDefault: () => {}
	});
	var SettingProvider = ({ children }) => {
		const [format, setFormat] = useGMStorage(KEY_FILENAME_FORMAT, defaultFormat);
		const [enableTimestamp, setEnableTimestamp] = useGMStorage(KEY_TIMESTAMP_ENABLED, false);
		const [timeStamp24H, setTimeStamp24H] = useGMStorage(KEY_TIMESTAMP_24H, false);
		const [enableTimestampHTML, setEnableTimestampHTML] = useGMStorage(KEY_TIMESTAMP_HTML, false);
		const [enableTimestampMarkdown, setEnableTimestampMarkdown] = useGMStorage(KEY_TIMESTAMP_MARKDOWN, false);
		const [enableMeta, setEnableMeta] = useGMStorage(KEY_META_ENABLED, false);
		const [exportMetaList, setExportMetaList] = useGMStorage(KEY_META_LIST, defaultExportMetaList);
		const [enableThinking, setEnableThinking] = useGMStorage(KEY_THINKING_ENABLED, false);
		const [enableSources, setEnableSources] = useGMStorage(KEY_SOURCES_ENABLED, true);
		const [imageMode, setImageMode] = useGMStorage(KEY_IMAGE_MODE, defaultImageMode);
		const [exportAllLimit, setExportAllLimit] = useGMStorage(KEY_EXPORT_ALL_LIMIT, defaultExportAllLimit);
		const resetDefault = T$1(() => {
			setFormat(defaultFormat);
			setEnableTimestamp(false);
			setEnableMeta(false);
			setExportMetaList(defaultExportMetaList);
			setEnableThinking(false);
			setEnableSources(true);
			setImageMode(defaultImageMode);
			setExportAllLimit(defaultExportAllLimit);
		}, [
			setFormat,
			setEnableTimestamp,
			setEnableMeta,
			setExportMetaList,
			setEnableThinking,
			setEnableSources,
			setImageMode,
			setExportAllLimit
		]);
		const value = F$1(() => ({
			format,
			setFormat,
			enableTimestamp,
			setEnableTimestamp,
			timeStamp24H,
			setTimeStamp24H,
			enableTimestampHTML,
			setEnableTimestampHTML,
			enableTimestampMarkdown,
			setEnableTimestampMarkdown,
			enableMeta,
			setEnableMeta,
			exportMetaList,
			setExportMetaList,
			enableThinking,
			setEnableThinking,
			enableSources,
			setEnableSources,
			imageMode,
			setImageMode,
			exportAllLimit,
			setExportAllLimit,
			resetDefault
		}), [
			format,
			setFormat,
			enableTimestamp,
			setEnableTimestamp,
			timeStamp24H,
			setTimeStamp24H,
			enableTimestampHTML,
			setEnableTimestampHTML,
			enableTimestampMarkdown,
			setEnableTimestampMarkdown,
			enableMeta,
			setEnableMeta,
			exportMetaList,
			setExportMetaList,
			enableThinking,
			setEnableThinking,
			enableSources,
			setEnableSources,
			imageMode,
			setImageMode,
			exportAllLimit,
			setExportAllLimit,
			resetDefault
		]);
		return o(SettingContext.Provider, {
			value,
			children
		});
	};
	var useSettingContext = () => q$1(SettingContext);
	var exportingRef = { current: false };
	var conversationCache = new Map();
	var listCache = null;
	var MAX_SKIPPED_SHOWN = 20;
	function toMs(time) {
		if (time == null) return 0;
		if (typeof time === "number") return time * 1e3;
		return new Date(time).getTime();
	}
	function chunkArray(arr, size) {
		const result = [];
		for (let i = 0; i < arr.length; i += size) result.push(arr.slice(i, i + size));
		return result;
	}
	function formatConvDate(time) {
		if (!time) return "—";
		const ms = typeof time === "number" ? time * 1e3 : new Date(time).getTime();
		if (Number.isNaN(ms) || ms === 0) return "—";
		const d = new Date(ms);
		const diffDays = Math.floor((Date.now() - ms) / 864e5);
		if (diffDays === 0) return "Today";
		if (diffDays === 1) return "Yesterday";
		return d.toLocaleDateString(void 0, {
			year: "numeric",
			month: "short",
			day: "numeric"
		});
	}
	function getExportedUpdateTimes() {
		const stored = ScriptStorage.get(KEY_EXPORTED_UPDATE_TIMES);
		if (stored && typeof stored === "object") return stored;
		return {};
	}
	function markExported(conversations) {
		if (conversations.length === 0) return;
		const map = getExportedUpdateTimes();
		for (const c of conversations) {
			const ms = toMs(c.update_time);
			if (ms > (map[c.id] ?? 0)) map[c.id] = ms;
		}
		ScriptStorage.set(KEY_EXPORTED_UPDATE_TIMES, map);
	}
	function textSearch(title, query) {
		const q = query.trim();
		if (!q) return true;
		const lower = q.toLowerCase();
		if (!lower.includes("*") && !lower.includes("?")) return title.toLowerCase().includes(lower);
		const regexStr = lower.replace(/[\\\^$.|+()[\]{}]/g, "\\$&").replace(/\*/g, ".*").replace(/\?/g, ".");
		try {
			return new RegExp(regexStr).test(title.toLowerCase());
		} catch {
			return title.toLowerCase().includes(lower);
		}
	}
	function describeListLoadError(error) {
		if (error instanceof RateLimitError) return error.retryAfterFromServer ? i18n.t("List Rate Limited Wait", { n: Math.ceil(error.retryAfterMs / 1e3) }) : i18n.t("List Rate Limited");
		if (error instanceof Error && error.message) return error.message;
		return i18n.t("List Load Failed");
	}
	var ProjectSelect = ({ projects, selected, setSelected, disabled, loading }) => {
		const { t } = useTranslation();
		return o("div", {
			className: "ce-project-select",
			children: [t("Select Project"), o("div", {
				className: "ce-hstack",
				children: [loading && o(IconLoading, { className: "ce-icon-sm" }), o("select", {
					disabled,
					className: "ce-select",
					value: selected ?? "",
					onChange: (e) => {
						const val = e.currentTarget.value;
						setSelected(val || null);
					},
					children: [o("option", {
						value: "",
						children: t("All conversations")
					}), projects.map((project) => o("option", {
						value: project.id,
						children: project.display.name
					}, project.id))]
				})]
			})]
		});
	};
	var ConversationSelect = ({ conversations, selected, setSelected, disabled, loading, error }) => {
		const { t } = useTranslation();
		const [query, setQuery] = h("");
		const lastClickedIndex = _$2(-1);
		const [sortField, setSortField] = h("create_time");
		const [sortDir, setSortDir] = h("desc");
		const filtered = F$1(() => {
			let result = conversations;
			const q = query.trim();
			if (q) result = result.filter((c) => textSearch(c.title, q));
			const dir = sortDir === "asc" ? 1 : -1;
			return [...result].sort((a, b) => {
				if (sortField === "title") return dir * (a.title ?? "").localeCompare(b.title ?? "");
				const aMs = toMs(sortField === "update_time" ? a.update_time : a.create_time);
				const bMs = toMs(sortField === "update_time" ? b.update_time : b.create_time);
				return dir * (aMs - bMs);
			});
		}, [
			conversations,
			query,
			sortField,
			sortDir
		]);
		const allFilteredSelected = filtered.length > 0 && filtered.every((c) => selected.some((x) => x.id === c.id));
		const selectByExportStatus = T$1((status) => {
			lastClickedIndex.current = -1;
			const exportedMap = getExportedUpdateTimes();
			if (status === "all") setSelected(filtered);
			else if (status === "not_exported") setSelected(filtered.filter((c) => !(c.id in exportedMap)));
			else setSelected(filtered.filter((c) => c.id in exportedMap && exportedMap[c.id] < toMs(c.update_time)));
		}, [filtered, setSelected]);
		return o(k$1, { children: [
			o("input", {
				type: "search",
				className: "ce-select-search",
				placeholder: t("Search"),
				value: query,
				disabled,
				onInput: (e) => {
					const val = e.currentTarget.value;
					lastClickedIndex.current = -1;
					setQuery(val);
				}
			}),
			o("div", {
				className: "ce-select-toolbar",
				children: [o(CheckBox, {
					label: t("Select All"),
					disabled,
					checked: allFilteredSelected,
					onCheckedChange: (checked) => {
						lastClickedIndex.current = -1;
						setSelected(checked ? filtered : []);
					}
				}), o("div", {
					className: "ce-select-toolbar-end",
					children: [
						loading && conversations.length > 0 && o("span", {
							className: "ce-toolbar-loading",
							children: [
								o(IconLoading, { className: "ce-icon-sm" }),
								t("Loading"),
								"... (",
								conversations.length,
								")"
							]
						}),
						o("select", {
							className: "ce-select ce-toolbar-status",
							disabled: disabled || filtered.length === 0,
							value: "",
							title: "Select conversations by export status",
							onChange: (e) => {
								const val = e.currentTarget.value;
								if (val) selectByExportStatus(val);
							},
							children: [
								o("option", {
									value: "",
									disabled: true,
									children: t("Select...")
								}),
								o("option", {
									value: "all",
									children: t("Select All")
								}),
								o("option", {
									value: "not_exported",
									children: t("Select Not Exported")
								}),
								o("option", {
									value: "updated",
									children: t("Select Updated")
								})
							]
						}),
						o("span", {
							className: "ce-toolbar-hint",
							children: t("Shift Select Hint")
						}),
						o("span", {
							className: "ce-toolbar-count",
							children: [
								selected.length,
								" / ",
								filtered.length
							]
						})
					]
				})]
			}),
			o("div", {
				className: "ce-list-header",
				children: [
					o("button", {
						className: `ce-list-header-cell ce-list-header-cell-title${sortField === "title" ? " ce-list-header-cell-active" : ""}`,
						onClick: () => {
							if (sortField === "title") setSortDir((d) => d === "asc" ? "desc" : "asc");
							else {
								setSortField("title");
								setSortDir("asc");
							}
						},
						children: ["Title ", sortField === "title" ? sortDir === "asc" ? "↑" : "↓" : "↕"]
					}),
					o("button", {
						className: `ce-list-header-cell${sortField === "create_time" ? " ce-list-header-cell-active" : ""}`,
						onClick: () => {
							if (sortField === "create_time") setSortDir((d) => d === "asc" ? "desc" : "asc");
							else {
								setSortField("create_time");
								setSortDir("desc");
							}
						},
						children: ["Created ", sortField === "create_time" ? sortDir === "asc" ? "↑" : "↓" : "↕"]
					}),
					o("button", {
						className: `ce-list-header-cell${sortField === "update_time" ? " ce-list-header-cell-active" : ""}`,
						onClick: () => {
							if (sortField === "update_time") setSortDir((d) => d === "asc" ? "desc" : "asc");
							else {
								setSortField("update_time");
								setSortDir("desc");
							}
						},
						children: ["Updated ", sortField === "update_time" ? sortDir === "asc" ? "↑" : "↓" : "↕"]
					})
				]
			}),
			o("ul", {
				className: "ce-select-list",
				children: [
					loading && conversations.length === 0 && o("li", {
						className: "ce-select-item",
						children: [t("Loading"), "..."]
					}),
					error && o("li", {
						className: "ce-select-item",
						children: [
							t("Error"),
							": ",
							error
						]
					}),
					filtered.map((c, index) => {
						const isSelected = selected.some((x) => x.id === c.id);
						return o("li", {
							className: "ce-select-item",
							onClickCapture: (e) => {
								if (disabled) return;
								if (e.shiftKey && lastClickedIndex.current !== -1) {
									e.preventDefault();
									const start = Math.min(lastClickedIndex.current, index);
									const end = Math.max(lastClickedIndex.current, index);
									const rangeItems = filtered.slice(start, end + 1);
									const newSelected = [...selected];
									for (const item of rangeItems) if (!newSelected.some((x) => x.id === item.id)) newSelected.push(item);
									setSelected(newSelected);
									return;
								}
								lastClickedIndex.current = index;
							},
							children: [
								o(CheckBox, {
									label: c.title,
									disabled,
									checked: isSelected,
									onCheckedChange: (checked) => {
										setSelected(checked ? [...selected, c] : selected.filter((x) => x.id !== c.id));
									}
								}),
								c.is_starred && o("span", {
									className: "ce-starred",
									title: "Starred",
									children: "★"
								}),
								o("span", {
									className: `ce-select-item-meta${sortField === "create_time" ? " ce-select-item-meta-active" : ""}`,
									title: `Created: ${c.create_time ?? "—"}`,
									children: formatConvDate(c.create_time)
								}),
								o("span", {
									className: `ce-select-item-meta${sortField === "update_time" ? " ce-select-item-meta-active" : ""}`,
									title: `Updated: ${c.update_time ?? "—"}`,
									children: formatConvDate(c.update_time)
								})
							]
						}, c.id);
					}),
					!loading && !error && filtered.length === 0 && conversations.length > 0 && o("li", {
						className: "ce-select-item ce-select-item-empty",
						children: t("No results")
					})
				]
			})
		] });
	};
	var DialogContent = ({ format, onClose }) => {
		const { t } = useTranslation();
		const { enableMeta, exportMetaList, exportAllLimit, imageMode } = useSettingContext();
		const metaList = F$1(() => enableMeta ? exportMetaList : [], [enableMeta, exportMetaList]);
		const exportAllOptions = F$1(() => [
			{
				label: "Markdown",
				callback: exportAllToMarkdown
			},
			{
				label: "HTML",
				callback: exportAllToHtml
			},
			{
				label: "JSON",
				callback: exportAllToOfficialJson
			},
			{
				label: "JSON (ZIP)",
				callback: exportAllToJson
			},
			{
				label: "TavernAI JSONL (ZIP)",
				callback: exportAllToTavern
			}
		], []);
		const fileInputRef = _$2(null);
		const [exportSource, setExportSource] = h("API");
		const [apiConversations, setApiConversations] = h([]);
		const [localConversations, setLocalConversations] = h([]);
		const conversations = exportSource === "API" ? apiConversations : localConversations;
		const [projects, setProjects] = h([]);
		const [selectedProjectId, setSelectedProjectId] = h(null);
		const [projectsLoading, setProjectsLoading] = h(false);
		const selectedProject = projects.find((p) => p.id === selectedProjectId) ?? null;
		const [loading, setLoading] = h(false);
		const [error, setError] = h("");
		const [processing, setProcessing] = h(false);
		const [selected, setSelected] = h([]);
		const [exportType, setExportType] = h(exportAllOptions[0].label);
		const disabled = processing || selected.length === 0;
		const [hasMore, setHasMore] = h(false);
		const [loadingMore, setLoadingMore] = h(false);
		const [totalAvailable, setTotalAvailable] = h(null);
		const requestQueue = F$1(() => new RequestQueue(200, 1600), []);
		const [progress, setProgress] = h({
			total: 0,
			completed: 0,
			currentName: "",
			currentStatus: "",
			rateLimitWaitSecs: void 0,
			batchIndex: 0,
			totalBatches: 0
		});
		const pendingBatchesRef = _$2([]);
		const batchIndexRef = _$2(0);
		const totalBatchesRef = _$2(0);
		const cancelledRef = _$2(false);
		const skippedRef = _$2([]);
		const fetchGenRef = _$2(0);
		const onUpload = T$1((e) => {
			const file = e.target?.files?.[0];
			if (!file) return;
			const fileReader = new FileReader();
			fileReader.onload = () => {
				const data = JSON.parse(fileReader.result);
				if (!Array.isArray(data)) {
					alert(t("Invalid File Format"));
					return;
				}
				setSelected([]);
				setExportSource("Local");
				setLocalConversations(data);
			};
			fileReader.readAsText(file);
		}, [t]);
		const startApiBatch = T$1((chunk) => {
			requestQueue.clear();
			chunk.forEach(({ id, title, update_time }) => {
				const entry = conversationCache.get(id);
				const cached = entry && entry.updateTime === update_time ? entry.conversation : void 0;
				requestQueue.add({
					name: title,
					cached: !!cached,
					request: async () => {
						let conversation = cached;
						if (!conversation) {
							conversation = await fetchConversation(id);
							conversationCache.set(id, {
								updateTime: update_time,
								conversation
							});
						}
						return exportType === "JSON" || exportType === "TavernAI JSONL (ZIP)" || imageMode === "omit" && (exportType === "Markdown" || exportType === "JSON (ZIP)") ? conversation : withImageAssets(conversation);
					}
				});
			});
			requestQueue.start();
		}, [
			requestQueue,
			exportType,
			imageMode
		]);
		p(() => {
			const off = requestQueue.on("progress", (prog) => {
				setProcessing(true);
				setProgress({
					...prog,
					rateLimitWaitSecs: prog.rateLimitWaitSecs,
					batchIndex: batchIndexRef.current,
					totalBatches: totalBatchesRef.current,
					completed: batchIndexRef.current * 100 + prog.completed,
					total: pendingBatchesRef.current.reduce((n, batch) => n + batch.length, 0)
				});
			});
			return () => off();
		}, [requestQueue]);
		p(() => {
			const off = requestQueue.on("done", async (results) => {
				if (cancelledRef.current) {
					cancelledRef.current = false;
					setProcessing(false);
					exportingRef.current = false;
					return;
				}
				const batchIdx = batchIndexRef.current;
				const totalBatches = totalBatchesRef.current;
				const partIndex = batchIdx + 1;
				const callback = exportAllOptions.find((o) => o.label === exportType)?.callback;
				if (callback && results.length > 0) {
					await callback(format, results, metaList, selectedProject?.display.name, partIndex, totalBatches);
					markExported(results);
				}
				skippedRef.current.push(...requestQueue.getSkipped());
				if (partIndex < totalBatches) {
					await sleep(400);
					batchIndexRef.current++;
					const nextChunk = pendingBatchesRef.current[batchIndexRef.current];
					if (nextChunk) startApiBatch(nextChunk);
				} else {
					setProcessing(false);
					const skipped = skippedRef.current;
					if (skipped.length > 0) {
						const shown = skipped.slice(0, MAX_SKIPPED_SHOWN).map((name) => `- ${name}`);
						if (skipped.length > MAX_SKIPPED_SHOWN) shown.push("- …");
						alert(`${t("Export Skipped Message", { n: skipped.length })}\n\n${shown.join("\n")}`);
					}
				}
			});
			return () => off();
		}, [
			requestQueue,
			exportAllOptions,
			exportType,
			format,
			metaList,
			startApiBatch,
			selectedProject,
			t
		]);
		const cancelExport = T$1(() => {
			cancelledRef.current = true;
			requestQueue.stop();
		}, [requestQueue]);
		const exportAllFromApi = T$1(() => {
			if (disabled) return;
			cancelledRef.current = false;
			skippedRef.current = [];
			const chunks = chunkArray(selected, 100);
			pendingBatchesRef.current = chunks;
			batchIndexRef.current = 0;
			totalBatchesRef.current = chunks.length;
			setProcessing(true);
			setProgress({
				total: selected.length,
				completed: 0,
				currentName: "",
				currentStatus: "processing",
				rateLimitWaitSecs: void 0,
				batchIndex: 0,
				totalBatches: chunks.length
			});
			startApiBatch(chunks[0]);
		}, [
			disabled,
			selected,
			startApiBatch
		]);
		const exportAllFromLocal = T$1(async () => {
			if (disabled) return;
			const results = localConversations.filter((c) => selected.some((s) => s.id === c.id));
			const callback = exportAllOptions.find((o) => o.label === exportType)?.callback;
			if (!callback) return;
			const chunks = chunkArray(results, 100);
			setProcessing(true);
			for (let i = 0; i < chunks.length; i++) {
				await callback(format, chunks[i], metaList, selectedProject?.display.name, i + 1, chunks.length);
				markExported(chunks[i]);
				if (i < chunks.length - 1) await sleep(400);
			}
			setProcessing(false);
		}, [
			disabled,
			selected,
			localConversations,
			exportAllOptions,
			exportType,
			format,
			metaList,
			selectedProject
		]);
		const exportAll = F$1(() => {
			return exportSource === "API" ? exportAllFromApi : exportAllFromLocal;
		}, [
			exportSource,
			exportAllFromApi,
			exportAllFromLocal
		]);
		p(() => {
			const genRef = fetchGenRef;
			return () => {
				exportingRef.current = false;
				genRef.current++;
				requestQueue.clear();
			};
		}, [requestQueue]);
		p(() => {
			exportingRef.current = processing;
		}, [processing]);
		p(() => {
			setProjectsLoading(true);
			fetchProjects().then(setProjects).catch((err) => console.error("Error fetching projects:", err)).finally(() => setProjectsLoading(false));
		}, []);
		p(() => {
			const gen = ++fetchGenRef.current;
			const alive = () => gen === fetchGenRef.current;
			setSelected([]);
			const cache = selectedProjectId === null && listCache?.limit === exportAllLimit ? listCache : null;
			if (cache) {
				setApiConversations(cache.items);
				setHasMore(cache.hasMore);
				setTotalAvailable(cache.total);
				setError("");
				setLoading(false);
				refreshConversationList(cache.items, (offset, limit) => fetchConversationsPage(null, offset, limit), 100, exportAllLimit).then(({ head, total }) => {
					if (listCache) listCache = {
						...listCache,
						items: applyHead(head, listCache.items),
						total: listCache.total !== null ? total : null
					};
					if (!alive() || !listCache) return;
					setApiConversations((prev) => applyHead(head, prev));
					setTotalAvailable(listCache.total);
					const byId = new Map(head.map((c) => [c.id, c]));
					setSelected((prev) => prev.map((c) => byId.get(c.id) ?? c));
				}).catch((err) => console.error("Error refreshing conversations:", err));
				return;
			}
			setApiConversations([]);
			setHasMore(false);
			setTotalAvailable(null);
			setError("");
			setLoading(true);
			let loadedHasMore = false;
			let loadFailed = false;
			fetchAllConversations(selectedProjectId, exportAllLimit, (batch) => {
				if (alive()) setApiConversations((prev) => [...prev, ...batch]);
			}, (hasMore) => {
				loadedHasMore = hasMore;
				if (alive()) setHasMore(hasMore);
			}, (error) => {
				loadFailed = true;
				if (alive()) setError(describeListLoadError(error));
			}).then((items) => {
				if (selectedProjectId === null && items.length > 0 && !loadFailed) listCache = {
					limit: exportAllLimit,
					items,
					hasMore: loadedHasMore,
					total: null
				};
			}).catch((err) => {
				if (!alive()) return;
				console.error("Error fetching conversations:", err);
				setError(describeListLoadError(err));
			}).finally(() => {
				if (alive()) setLoading(false);
			});
		}, [exportAllLimit, selectedProjectId]);
		const loadMore = T$1(async () => {
			if (loadingMore) return;
			setLoadingMore(true);
			try {
				const page = await fetchConversationsPage(selectedProjectId, apiConversations.length, 100);
				setApiConversations((prev) => [...prev, ...page.items]);
				if (page.total !== null) setTotalAvailable(page.total);
				const more = page.items.length >= 100 && (page.total === null || apiConversations.length + page.items.length < page.total);
				setHasMore(more);
				if (selectedProjectId === null && listCache) listCache = {
					...listCache,
					items: [...listCache.items, ...page.items],
					hasMore: more,
					total: page.total ?? listCache.total
				};
			} catch (err) {
				console.error("loadMore error", err);
			} finally {
				setLoadingMore(false);
			}
		}, [
			loadingMore,
			apiConversations.length,
			selectedProjectId
		]);
		const totalBatches = Math.ceil(selected.length / 100) || 1;
		const [probeStatus, setProbeStatus] = h(null);
		const [probeRetryAfterSecs, setProbeRetryAfterSecs] = h();
		const [probeHeaders, setProbeHeaders] = h({});
		const runProbe = T$1(async () => {
			setProbeStatus("testing");
			try {
				const result = await probeApi();
				setProbeHeaders(result.rateLimitHeaders);
				if (result.ok) setProbeStatus("ok");
				else {
					setProbeStatus("rate_limited");
					setProbeRetryAfterSecs(result.retryAfterMs != null ? Math.round(result.retryAfterMs / 1e3) : void 0);
				}
			} catch {
				setProbeStatus("error");
			}
		}, []);
		const probeLabel = probeStatus === "testing" ? "⏳ Testing…" : probeStatus === "ok" ? "✅ API ready" : probeStatus === "rate_limited" ? `🚫 Rate limited${probeRetryAfterSecs != null ? ` · wait ${probeRetryAfterSecs}s` : ""}` : probeStatus === "error" ? "⚠️ Error" : null;
		return o(k$1, { children: [
			o("div", {
				className: "ce-export-source",
				children: [
					t("Export from official export file"),
					" (conversations.json)\xA0",
					o("div", {
						className: "ce-hstack",
						children: [exportSource === "API" && o("button", {
							className: "ce-button ce-button-neutral",
							style: {
								fontSize: "0.72rem",
								padding: "2px 8px",
								whiteSpace: "nowrap"
							},
							disabled: probeStatus === "testing" || processing,
							title: Object.keys(probeHeaders).length > 0 ? `Rate-limit headers: ${JSON.stringify(probeHeaders)}` : "Check if the API is currently rate-limiting requests",
							onClick: runProbe,
							children: probeLabel ?? "Test API"
						}), exportSource === "API" && o("button", {
							className: "ce-icon-button",
							"aria-label": "Upload",
							onClick: () => fileInputRef.current?.click(),
							children: o(IconUpload, { className: "ce-icon" })
						})]
					})
				]
			}),
			o("input", {
				type: "file",
				accept: "application/json",
				hidden: true,
				ref: fileInputRef,
				onChange: onUpload
			}),
			exportSource === "API" && o(ProjectSelect, {
				projects,
				selected: selectedProjectId,
				setSelected: setSelectedProjectId,
				disabled: processing,
				loading: projectsLoading
			}),
			o(ConversationSelect, {
				conversations,
				selected,
				setSelected,
				disabled: processing,
				loading,
				error
			}),
			exportSource === "API" && !loading && !processing && hasMore && o("div", {
				className: "ce-load-more",
				children: [o("button", {
					className: "ce-button ce-button-neutral",
					style: {
						fontSize: "0.8rem",
						padding: "4px 14px"
					},
					disabled: loadingMore,
					onClick: loadMore,
					children: loadingMore ? `${t("Loading")}...` : totalAvailable !== null ? t("Load more conversations remaining", {
						n: 100,
						remaining: totalAvailable - apiConversations.length
					}) : t("Load more conversations", { n: 100 })
				}), totalAvailable !== null && !loadingMore && o("span", {
					className: "ce-muted-count",
					children: [
						apiConversations.length,
						" / ",
						totalAvailable
					]
				})]
			}),
			o("div", {
				className: "ce-action-bar",
				children: [o("select", {
					className: "ce-select",
					disabled: processing,
					value: exportType,
					onChange: (e) => setExportType(e.currentTarget.value),
					children: exportAllOptions.map(({ label }) => o("option", {
						value: label,
						children: label
					}, t(label)))
				}), o("div", {
					className: "ce-action-buttons",
					children: o("button", {
						className: "ce-button ce-button-green",
						disabled,
						onClick: exportAll,
						children: t("Export")
					})
				})]
			}),
			totalBatches > 1 && !processing && o("p", {
				className: "ce-batch-note",
				children: `${totalBatches} downloads \u00B7 100 conversations each`
			}),
			processing && o(k$1, { children: [o("div", {
				className: "ce-progress-header",
				children: [
					o("span", {
						className: "ce-progress-name",
						children: progress.currentStatus === "rate_limited" ? `⏳ Rate limited — waiting ${progress.rateLimitWaitSecs ?? "…"}s` : progress.currentName
					}),
					o("span", {
						className: "ce-progress-count",
						children: progress.totalBatches > 1 ? `${t("Batch progress").replace("{{current}}", String(progress.batchIndex + 1)).replace("{{total}}", String(progress.totalBatches))} \u00B7 ${progress.completed}/${progress.total}` : `${progress.completed}/${progress.total}`
					}),
					o("button", {
						className: "ce-button ce-button-red",
						style: {
							fontSize: "0.75rem",
							padding: "3px 10px",
							height: "auto"
						},
						title: "Stop the export — any batches already downloaded are kept",
						onClick: cancelExport,
						children: t("Cancel")
					})
				]
			}), o("div", {
				className: "ce-progress",
				children: o("div", {
					className: `ce-progress-bar${progress.currentStatus === "rate_limited" ? " ce-progress-bar-waiting" : ""}`,
					style: { width: `${progress.total > 0 ? progress.completed / progress.total * 100 : 0}%` }
				})
			})] }),
			processing ? o("button", {
				className: "ce-icon-button ce-close-button",
				"aria-label": "Export in progress",
				title: "Click Cancel to stop the export",
				style: {
					cursor: "not-allowed",
					opacity: .25
				},
				children: o(IconCross, {})
			}) : o("button", {
				className: "ce-icon-button ce-close-button",
				"aria-label": "Close",
				onClick: onClose,
				children: o(IconCross, {})
			})
		] });
	};
	function ExportDialog({ format, open, onOpenChange }) {
		const { t } = useTranslation();
		const onChange = (value) => {
			if (!value && exportingRef.current) return;
			onOpenChange(value);
		};
		return o(Dialog, {
			open,
			onOpenChange: onChange,
			title: t("Export Dialog Title"),
			className: "ce-dialog-plain",
			children: o(DialogContent, {
				format,
				onClose: () => onChange(false)
			})
		});
	}
	var CLOSE_DELAY = 300;
	var SIDE_OFFSET = 8;
	var ARROW_WIDTH = 8;
	var ARROW_HEIGHT = 16;
	var ALIGN_OFFSET = -64;
	var VIEWPORT_PADDING = 8;
	function HoverCard({ open, onOpenChange, keepMounted, isMobile, width, trigger, children }) {
		const triggerRef = _$2(null);
		const cardRef = _$2(null);
		const arrowRef = _$2(null);
		const closeTimer = _$2(0);
		const cancelClose = () => clearTimeout(closeTimer.current);
		const onPointerEnter = (e) => {
			if (e.pointerType === "touch") return;
			cancelClose();
			onOpenChange(true);
		};
		const onPointerLeave = (e) => {
			if (e.pointerType === "touch") return;
			cancelClose();
			closeTimer.current = window.setTimeout(() => onOpenChange(false), CLOSE_DELAY);
		};
		p(() => cancelClose, []);
		p(() => {
			if (!open || keepMounted) return;
			const close = () => onOpenChange(false);
			const onPointerDown = (e) => {
				document.removeEventListener("click", close, true);
				const target = e.target;
				if (triggerRef.current?.contains(target) || cardRef.current?.contains(target)) return;
				if (e.pointerType === "touch") {
					document.addEventListener("click", close, {
						once: true,
						capture: true
					});
					return;
				}
				close();
			};
			const onKeyDown = (e) => {
				if (e.key === "Escape") onOpenChange(false);
			};
			document.addEventListener("pointerdown", onPointerDown, true);
			document.addEventListener("keydown", onKeyDown);
			return () => {
				document.removeEventListener("pointerdown", onPointerDown, true);
				document.removeEventListener("click", close, true);
				document.removeEventListener("keydown", onKeyDown);
			};
		}, [
			open,
			keepMounted,
			onOpenChange
		]);
		const mounted = open || keepMounted;
		y(() => {
			if (!mounted) return;
			const update = () => {
				const anchor = triggerRef.current;
				const card = cardRef.current;
				if (!anchor || !card) return;
				const rect = anchor.getBoundingClientRect();
				const height = card.offsetHeight;
				const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
				let left;
				let top;
				if (isMobile) {
					left = clamp(rect.left, 0, window.innerWidth - width);
					top = window.innerHeight - rect.bottom >= height ? rect.bottom : rect.top - height;
					top = clamp(top, 0, window.innerHeight - height);
				} else {
					left = rect.right + SIDE_OFFSET + ARROW_WIDTH;
					top = clamp(rect.top + ALIGN_OFFSET, VIEWPORT_PADDING, window.innerHeight - VIEWPORT_PADDING - height);
					const arrow = arrowRef.current;
					if (arrow) {
						const arrowTop = rect.top + rect.height / 2 - top - ARROW_HEIGHT / 2;
						arrow.style.top = `${clamp(arrowTop, 0, height - ARROW_HEIGHT)}px`;
					}
				}
				card.style.left = `${left}px`;
				card.style.top = `${top}px`;
			};
			update();
			window.addEventListener("resize", update);
			window.addEventListener("scroll", update, true);
			return () => {
				window.removeEventListener("resize", update);
				window.removeEventListener("scroll", update, true);
			};
		}, [
			mounted,
			isMobile,
			width
		]);
		const card = mounted && o("div", {
			ref: cardRef,
			className: `ce-root ce-card${isMobile ? " ce-card-mobile" : ""}`,
			style: { width },
			"data-state": open ? "open" : "closed",
			onPointerEnter,
			onPointerLeave,
			children: [children, !isMobile && o("svg", {
				ref: arrowRef,
				className: "ce-card-arrow",
				width: ARROW_WIDTH,
				height: ARROW_HEIGHT,
				viewBox: `0 0 ${ARROW_WIDTH} ${ARROW_HEIGHT}`,
				"aria-hidden": "true",
				children: o("polygon", { points: `${ARROW_WIDTH},0 0,${ARROW_HEIGHT / 2} ${ARROW_WIDTH},${ARROW_HEIGHT}` })
			})]
		});
		return o(k$1, { children: [o("div", {
			ref: triggerRef,
			"data-state": open ? "open" : "closed",
			onPointerEnter,
			onPointerLeave,
			children: trigger
		}), card && (isMobile ? card : z(card, document.body))] });
	}
	var TIMEOUT = 2500;
	var MenuItem = ({ text, successText, disabled = false, title, ariaLabel, icon: Icon, onClick, className }) => {
		const [loading, setLoading] = h(false);
		const [succeed, setSucceed] = h(false);
		const handleClick = typeof onClick === "function" ? async (e) => {
			e.preventDefault();
			if (loading) return;
			try {
				setLoading(true);
				if (await onClick()) {
					setSucceed(true);
					setTimeout(() => setSucceed(false), TIMEOUT);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		} : void 0;
		const handleKeyDown = (e) => {
			if (e.key !== "Enter" && e.key !== " ") return;
			e.preventDefault();
			e.currentTarget.click();
		};
		return o("div", {
			className: `ce-menu-item ${className ?? ""}`,
			role: "button",
			tabIndex: disabled ? -1 : 0,
			onClick: handleClick,
			onTouchStart: handleClick,
			onKeyDown: handleKeyDown,
			disabled,
			"aria-disabled": disabled || void 0,
			"aria-busy": loading || void 0,
			"aria-label": ariaLabel,
			title,
			children: loading ? o("div", {
				className: "ce-menu-item-loading",
				children: o(IconLoading, { className: "ce-icon" })
			}) : o(k$1, { children: [Icon && o(Icon, {}), o("span", {
				className: "ce-menu-item-text",
				children: succeed && successText ? successText : text
			})] })
		});
	};
	function useTitle() {
		return En(subscribe, getSnapshot);
	}
	function subscribe(callback) {
		const target = document.querySelector("title");
		if (!target) return noop;
		const observer = new MutationObserver(callback);
		observer.observe(target, {
			subtree: true,
			characterData: true,
			childList: true
		});
		return () => observer.disconnect();
	}
	function getSnapshot() {
		return document.title;
	}
	_css(".ce-toggle {\n    display: inline-flex;\n    align-items: center;\n}\n\n/* Matches ChatGPT's own switches: no border, a tinted track, a white thumb. */\n.ce-toggle-switch {\n    position: relative;\n    display: inline-flex;\n    flex-shrink: 0;\n    align-items: center;\n    width: 32px;\n    height: 20px;\n    border-radius: 9999px;\n    outline: none;\n    cursor: pointer;\n    background-color: color-mix(in srgb, var(--ce-text-primary) 10%, transparent);\n    transition: background-color 0.15s ease-out;\n}\n\n.ce-toggle-switch[data-state=\"checked\"] {\n    background-color: var(--ce-accent);\n}\n\n.ce-toggle-switch:focus-visible {\n    box-shadow: 0 0 0 2px var(--ce-accent);\n}\n\n.ce-toggle-handle {\n    display: block;\n    width: 16px;\n    height: 16px;\n    border: 1px solid #ffffff;\n    border-radius: 9999px;\n    background-color: #ffffff;\n    box-shadow: 0 1px 2px -1px #00000014;\n    transform: translateX(2px);\n    transition: transform 0.15s ease-out;\n}\n\n.ce-toggle-handle[data-state=\"checked\"] {\n    transform: translateX(14px);\n}\n\n.ce-toggle-label {\n    color: var(--ce-text-secondary);\n    margin-left: 0.75rem;\n    font-size: 0.875rem;\n    font-weight: 500;\n}\n\n.ce-toggle-label:hover {\n    color: var(--ce-text-primary);\n}\n");
	function Toggle({ label, checked = true, onCheckedUpdate }) {
		return o("div", {
			className: "ce-toggle",
			children: [o("button", {
				type: "button",
				role: "switch",
				"aria-checked": checked,
				"aria-label": label || void 0,
				onClick: () => onCheckedUpdate?.(!checked),
				"data-state": checked ? "checked" : "unchecked",
				className: "ce-toggle-switch",
				children: o("span", {
					"data-state": checked ? "checked" : "unchecked",
					className: "ce-toggle-handle"
				})
			}), label && o("span", {
				className: "ce-toggle-label",
				children: label
			})]
		});
	}
	_css(".ce-setting-list {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n}\n\n.ce-setting-card {\n    position: relative;\n    display: flex;\n    padding: 16px;\n    border-radius: 4px;\n    background-color: var(--ce-card-surface);\n}\n\n.ce-setting-title {\n    font-size: 1rem;\n    font-weight: 500;\n    color: var(--ce-text-primary);\n}\n\n.ce-setting-desc {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    color: var(--ce-text-secondary);\n}\n\n.ce-setting-control {\n    position: absolute;\n    right: 16px;\n}\n\n.ce-setting-select {\n    margin-top: 12px;\n}\n\n.ce-setting-filename {\n    margin-top: 16px;\n}\n\n.ce-setting-preview-line {\n    margin-top: 4px;\n}\n\n.ce-variable {\n    cursor: help;\n    user-select: all;\n    white-space: nowrap;\n    font-weight: 600;\n}\n\n.ce-preview {\n    user-select: all;\n    text-decoration: underline;\n    text-underline-offset: 4px;\n}\n\n.ce-range-row {\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-top: 12px;\n}\n\n.ce-range {\n    /* ChatGPT's base styles strip the native look from range inputs. */\n    appearance: auto;\n    flex-grow: 1;\n    cursor: pointer;\n    accent-color: var(--ce-accent);\n}\n\n.ce-range-value {\n    width: 3rem;\n    text-align: right;\n    font-weight: 500;\n    color: var(--ce-text-primary);\n}\n\n.ce-meta-row {\n    display: flex;\n    align-items: center;\n    margin-top: 8px;\n}\n\n.ce-meta-arrow {\n    margin: 0 8px;\n}\n\n.ce-meta-remove {\n    margin-left: 8px;\n    padding: 4px;\n    border-radius: 9999px;\n    color: var(--ce-text-secondary);\n    transition: background-color 150ms ease-in-out;\n}\n\n.ce-meta-add-row {\n    display: flex;\n    margin-top: 8px;\n    padding-right: 32px;\n}\n\n.ce-meta-add {\n    width: 100%;\n    padding: 8px 0;\n    border: 1px solid var(--ce-control-border);\n    border-radius: 6px;\n    font-size: 0.875rem;\n    font-weight: 500;\n    color: var(--ce-text-secondary);\n    transition: background-color 150ms ease-in-out;\n}\n\n.ce-meta-remove:hover,\n.ce-meta-add:hover {\n    background-color: var(--ce-hover);\n}\n");
	function Variable({ name, title }) {
		return o("strong", {
			className: "ce-variable",
			title,
			children: name
		});
	}
	var SettingDialog = ({ open, onOpenChange }) => {
		const { format, setFormat, enableTimestamp, setEnableTimestamp, timeStamp24H, setTimeStamp24H, enableTimestampHTML, setEnableTimestampHTML, enableTimestampMarkdown, setEnableTimestampMarkdown, enableMeta, setEnableMeta, exportMetaList, setExportMetaList, enableThinking, setEnableThinking, enableSources, setEnableSources, imageMode, setImageMode, exportAllLimit, setExportAllLimit } = useSettingContext();
		const { t, i18n } = useTranslation();
		const _title = useTitle();
		const date = dateStr();
		const timestamp$1 = timestamp();
		const title = (0, import_sanitize_filename.default)(_title).replace(/\s+/g, "_");
		const chatId = getChatIdFromUrl() || "this-is-a-mock-chat-id";
		const now = Date.now() / 1e3;
		const createTime = now;
		const updateTime = now;
		const preview = getFileNameWithFormat(format, "{ext}", {
			title,
			chatId,
			createTime,
			updateTime
		});
		const source = `${baseUrl}/${chatId}`;
		return o(Dialog, {
			open,
			onOpenChange,
			title: t("Exporter Settings"),
			children: [
				o("div", {
					className: "ce-dialog-body",
					children: o("dl", {
						className: "ce-setting-list",
						children: [
							o("div", {
								className: "ce-setting-card",
								children: o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: `${t("Language")} 🌐`
								}), o("dd", { children: o("select", {
									className: "ce-select ce-setting-select",
									value: i18n.language,
									onChange: (e) => i18n.changeLanguage(e.currentTarget.value),
									children: LOCALES.map(({ name, code }) => o("option", {
										value: code,
										children: name
									}, code))
								}) })] })
							}),
							o("div", {
								className: "ce-setting-card",
								children: o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: t("File Name")
								}), o("dd", { children: [
									o("p", {
										className: "ce-setting-desc",
										children: [
											t("Available variables"),
											":",
											" ",
											o(Variable, {
												name: "{title}",
												title
											}),
											",",
											" ",
											o(Variable, {
												name: "{date}",
												title: date
											}),
											",",
											" ",
											o(Variable, {
												name: "{timestamp}",
												title: timestamp$1
											}),
											",",
											" ",
											o(Variable, {
												name: "{chat_id}",
												title: chatId
											}),
											",",
											" ",
											o(Variable, {
												name: "{create_time}",
												title: unixTimestampToISOString(createTime)
											}),
											",",
											" ",
											o(Variable, {
												name: "{update_time}",
												title: unixTimestampToISOString(updateTime)
											})
										]
									}),
									o("input", {
										className: "ce-input ce-setting-filename",
										id: "filename",
										value: format,
										onChange: (e) => setFormat(e.currentTarget.value)
									}),
									o("p", {
										className: "ce-setting-desc ce-setting-preview-line",
										children: [
											t("Preview"),
											":",
											" ",
											o("span", {
												className: "ce-preview",
												children: preview
											})
										]
									})
								] })] })
							}),
							o("div", {
								className: "ce-setting-card",
								children: [o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: t("Export Thinking Process")
								}), o("dd", {
									className: "ce-setting-desc",
									children: t("Export Thinking Process Description")
								})] }), o("div", {
									className: "ce-setting-control",
									children: o(Toggle, {
										label: "",
										checked: enableThinking,
										onCheckedUpdate: setEnableThinking
									})
								})]
							}),
							o("div", {
								className: "ce-setting-card",
								children: [o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: t("Export Sources")
								}), o("dd", {
									className: "ce-setting-desc",
									children: t("Export Sources Description")
								})] }), o("div", {
									className: "ce-setting-control",
									children: o(Toggle, {
										label: "",
										checked: enableSources,
										onCheckedUpdate: setEnableSources
									})
								})]
							}),
							o("div", {
								className: "ce-setting-card",
								children: o("div", { children: [
									o("dt", {
										className: "ce-setting-title",
										children: t("Images")
									}),
									o("dd", {
										className: "ce-setting-desc",
										children: t("Images Description")
									}),
									o("dd", { children: o("select", {
										className: "ce-select ce-setting-select",
										value: imageMode,
										onChange: (e) => setImageMode(e.currentTarget.value),
										children: [
											o("option", {
												value: "embed",
												children: t("Images Embed")
											}),
											o("option", {
												value: "omit",
												children: t("Images Omit")
											}),
											o("option", {
												value: "files",
												children: t("Images Files")
											})
										]
									}) })
								] })
							}),
							o("div", {
								className: "ce-setting-card",
								children: o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: [t("Export All Limit"), " "]
								}), o("dd", {
									className: "ce-setting-desc ce-mt-2",
									children: [
										t("Export All Limit Description"),
										" ",
										o("div", {
											className: "ce-range-row",
											children: [o("input", {
												type: "range",
												min: "100",
												max: "20000",
												step: "100",
												value: exportAllLimit,
												onChange: (e) => setExportAllLimit(Number.parseInt(e.currentTarget.value, 10)),
												className: "ce-range",
												id: "exportAllLimitSlider"
											}), o("span", {
												className: "ce-range-value",
												children: exportAllLimit
											})]
										})
									]
								})] })
							}),
							o("div", {
								className: "ce-setting-card",
								children: [o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: t("Conversation Timestamp")
								}), o("dd", {
									className: "ce-setting-desc",
									children: [t("Conversation Timestamp Description"), enableTimestamp && o(k$1, { children: [
										o("div", {
											className: "ce-mt-2",
											children: o(Toggle, {
												label: t("Use 24-hour format"),
												checked: timeStamp24H,
												onCheckedUpdate: setTimeStamp24H
											})
										}),
										o("div", {
											className: "ce-mt-2",
											children: o(Toggle, {
												label: t("Enable on HTML"),
												checked: enableTimestampHTML,
												onCheckedUpdate: setEnableTimestampHTML
											})
										}),
										o("div", {
											className: "ce-mt-2",
											children: o(Toggle, {
												label: t("Enable on Markdown"),
												checked: enableTimestampMarkdown,
												onCheckedUpdate: setEnableTimestampMarkdown
											})
										})
									] })]
								})] }), o("div", {
									className: "ce-setting-control",
									children: o(Toggle, {
										label: "",
										checked: enableTimestamp,
										onCheckedUpdate: setEnableTimestamp
									})
								})]
							}),
							o("div", {
								className: "ce-setting-card",
								children: [o("div", { children: [o("dt", {
									className: "ce-setting-title",
									children: t("Export Metadata")
								}), o("dd", {
									className: "ce-setting-desc",
									children: [t("Export Metadata Description"), enableMeta && o(k$1, { children: [
										o("p", {
											className: "ce-setting-desc ce-mt-2",
											children: [
												t("Available variables"),
												":",
												" ",
												o(Variable, {
													name: "{title}",
													title
												}),
												",",
												" ",
												o(Variable, {
													name: "{date}",
													title: date
												}),
												",",
												" ",
												o(Variable, {
													name: "{timestamp}",
													title: timestamp$1
												}),
												",",
												" ",
												o(Variable, {
													name: "{source}",
													title: source
												}),
												",",
												" ",
												o(Variable, {
													name: "{model}",
													title: "ChatGPT-3.5"
												}),
												",",
												" ",
												o(Variable, {
													name: "{model_name}",
													title: "text-davinci-002-render-sha"
												}),
												",",
												" ",
												o(Variable, {
													name: "{create_time}",
													title: "2023-04-10T21:45:35.027Z"
												}),
												",",
												" ",
												o(Variable, {
													name: "{update_time}",
													title: "2023-04-10T21:45:35.027Z"
												})
											]
										}),
										exportMetaList.map((meta, i) => o("div", {
											className: "ce-meta-row",
											children: [
												o("input", {
													className: "ce-input",
													value: meta.name,
													onChange: (e) => {
														const list = [...exportMetaList];
														list[i] = {
															...list[i],
															name: e.currentTarget.value
														};
														setExportMetaList(list);
													}
												}),
												o("span", {
													className: "ce-meta-arrow",
													children: "→"
												}),
												o("input", {
													className: "ce-input",
													value: meta.value,
													onChange: (e) => {
														const list = [...exportMetaList];
														list[i] = {
															...list[i],
															value: e.currentTarget.value
														};
														setExportMetaList(list);
													}
												}),
												o("button", {
													className: "ce-meta-remove",
													"aria-label": "Remove",
													onClick: () => setExportMetaList(exportMetaList.filter((_, j) => j !== i)),
													children: o(IconTrash, { className: "ce-icon" })
												})
											]
										}, i)),
										o("div", {
											className: "ce-meta-add-row",
											children: o("button", {
												className: "ce-meta-add",
												"aria-label": "Add",
												onClick: () => setExportMetaList([...exportMetaList, {
													name: "",
													value: ""
												}]),
												children: "+"
											})
										})
									] })]
								})] }), o("div", {
									className: "ce-setting-control",
									children: o(Toggle, {
										label: "",
										checked: enableMeta,
										onCheckedUpdate: setEnableMeta
									})
								})]
							})
						]
					})
				}),
				o("div", {
					className: "ce-dialog-footer",
					children: o("button", {
						className: "ce-button ce-button-green ce-button-strong",
						onClick: () => onOpenChange(false),
						children: t("Save")
					})
				}),
				o("button", {
					className: "ce-icon-button ce-close-button",
					"aria-label": "Close",
					onClick: () => onOpenChange(false),
					children: o(IconCross, {})
				})
			]
		});
	};
	_css("/*\n * The exporter owns all of its styles. The only things it takes from\n * ChatGPT are the theme variables below, each with a fallback so the UI\n * still works when ChatGPT renames or drops one, and the light/dark switch.\n */\n\nhtml {\n    --ce-text-primary: var(--color-text-primary, #0d0d0d);\n    --ce-text-secondary: var(--color-text-secondary, #5d5d5d);\n    --ce-text-tertiary: var(--color-text-tertiary, #8f8f8f);\n    --ce-border: var(--color-token-border-default, #0000001a);\n    --ce-border-light: var(--color-token-border-light, #0000000d);\n    --ce-hover: var(--color-token-list-hover-background, #0000000d);\n    /* ChatGPT's switches use this, and it follows the accent in Appearance. */\n    --ce-accent: var(--color-chart-blue, #3a83f7);\n    --ce-menu-arrow: var(--sidebar-surface-secondary, #ececec);\n\n    --ce-control-border: #6f6e77;\n    --ce-menu-surface: #ffffff;\n    --ce-menu-border: #0d0d0d26;\n    --ce-dialog-surface: #f3f3f3;\n    --ce-dialog-surface-plain: #ffffff;\n    --ce-card-surface: #ffffff;\n    --ce-input-surface: #fafafa;\n    --ce-track: rgb(229 231 235);\n    --ce-list-header-surface: #f9fafb;\n}\n\n:is(.dark, [data-theme=\"dark\"]) {\n    --ce-text-primary: var(--color-text-primary, #ededed);\n    --ce-text-secondary: var(--color-text-secondary, #cdcdcd);\n    --ce-text-tertiary: var(--color-text-tertiary, #afafaf);\n    --ce-border: var(--color-token-border-default, #ffffff26);\n    --ce-border-light: var(--color-token-border-light, #ffffff0d);\n    --ce-hover: var(--color-token-list-hover-background, #ffffff1a);\n    --ce-menu-arrow: var(--sidebar-surface-secondary, #212121);\n\n    --ce-menu-surface: #2a2a2a;\n    --ce-menu-border: var(--color-token-border-default, #ffffff26);\n    --ce-dialog-surface: #2a2a2a;\n    --ce-dialog-surface-plain: #2a2a2a;\n    --ce-card-surface: rgb(255 255 255 / 5%);\n    --ce-input-surface: #2f2f2f;\n    --ce-track: rgb(255 255 255 / 10%);\n    --ce-list-header-surface: #1f2937;\n}\n\n/*\n * Reset everything under our roots, so ChatGPT's base styles neither help\n * nor break us. :where() keeps it at zero specificity, so any of our own\n * class rules win over it.\n */\n:where(.ce-root, .ce-root *, .ce-root ::before, .ce-root ::after) {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    border: 0 solid;\n}\n\n:where(.ce-root :is(button, input, select, textarea)) {\n    font: inherit;\n    color: inherit;\n}\n\n/* A background drops the native look of a range input, so leave it alone. */\n:where(.ce-root :is(button, input:not([type=\"range\"]), select, textarea)) {\n    background-color: transparent;\n}\n\n:where(.ce-root :is(button, select, [role=\"button\"])) {\n    cursor: pointer;\n}\n\n:where(.ce-root :is(ul, ol)) {\n    list-style: none;\n}\n\n:where(.ce-root svg) {\n    display: block;\n    flex-shrink: 0;\n}\n\n:where(.ce-root [hidden]) {\n    display: none;\n}\n\n.ce-icon {\n    width: 1rem;\n    height: 1rem;\n}\n\n.ce-icon-sm {\n    width: 0.75rem;\n    height: 0.75rem;\n}\n\n.ce-icon-md {\n    width: 1.25rem;\n    height: 1.25rem;\n}\n\n.ce-icon-lg {\n    width: 1.5rem;\n    height: 1.5rem;\n}\n\n.ce-hstack {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n}\n\n.ce-mt-2 {\n    margin-top: 0.5rem;\n}\n\n.ce-truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n@keyframes ce-fade-in {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes ce-slide-up {\n    from {\n        transform: translateY(100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n@keyframes ce-pointer-fade-in {\n    from {\n        opacity: 0;\n        pointer-events: none;\n    }\n    to {\n        opacity: 1;\n        pointer-events: auto;\n    }\n}\n\n@keyframes ce-rotate {\n    from {\n        transform: rotate(0deg);\n    }\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes ce-circular-dash {\n    0% {\n        stroke-dasharray: 1px, 200px;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 100px, 200px;\n        stroke-dashoffset: -15px;\n    }\n    100% {\n        stroke-dasharray: 100px, 200px;\n        stroke-dashoffset: -125px;\n    }\n}\n");
	_css(".ce-timestamp {\n    display: block;\n    width: 100%;\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n    text-align: right;\n    color: var(--ce-text-tertiary);\n}\n\nspan[data-time-format] {\n    display: none;\n}\n\nbody[data-time-format=\"12\"] span[data-time-format=\"12\"] {\n    display: inline;\n}\n\nbody[data-time-format=\"24\"] span[data-time-format=\"24\"] {\n    display: inline;\n}\n\n.ce-menu-item {\n    display: flex;\n    flex-shrink: 0;\n    align-items: center;\n    gap: 12px;\n    height: 46px;\n    border: 1px solid var(--ce-menu-border);\n    border-radius: 8px;\n    cursor: pointer;\n    transition: background-color 0.2s;\n}\n\n.ce-menu-item[disabled] {\n    filter: brightness(0.5);\n}\n\n.ce-menu-item:not([disabled]):hover {\n    background-color: var(--ce-hover);\n}\n\n.ce-menu-item-loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n\n.ce-nav-trigger {\n    min-width: 0;\n    border: 0;\n    color: var(--ce-text-primary);\n}\n\n/* Mark the trigger while its menu is open, like ChatGPT's selected rail items. */\n[data-state=\"open\"] > .ce-nav-trigger {\n    color: var(--ce-text-primary);\n    background-color: var(--ce-hover);\n}\n\n.ce-nav-trigger .ce-menu-item-text {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n/* Same box as ChatGPT's sidebar rows, so the icon lines up with theirs. */\n.ce-nav-trigger-expanded {\n    margin: 0 0 8px;\n    padding-inline: 10px;\n}\n\n.ce-nav-trigger-collapsed {\n    width: 32px;\n    height: 32px;\n    margin: 0 auto 0.5rem;\n    padding: 0;\n    justify-content: center;\n    gap: 0;\n    border-radius: 8px;\n    color: var(--ce-text-secondary);\n}\n\n.ce-nav-trigger-collapsed .ce-menu-item-text {\n    display: none;\n}\n\n.ce-divider {\n    height: 1px;\n    background-color: var(--ce-border-light);\n}\n\n.ce-card {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 4px;\n    padding: 8px;\n    color: var(--ce-text-primary);\n    background-color: var(--ce-menu-surface);\n    border-radius: 1rem;\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08);\n    transition: opacity 0.2s;\n    animation: ce-fade-in 0.3s;\n}\n\n.ce-card-mobile {\n    animation: ce-slide-up 0.3s;\n}\n\n:is(.dark, [data-theme=\"dark\"]) .ce-card {\n    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);\n}\n\n.ce-card .ce-menu-item {\n    column-gap: 8px;\n    padding-inline: 8px;\n}\n\n.ce-dialog .ce-menu-item {\n    padding-inline-start: 8px;\n}\n\n/* HoverCard sets left/top. ChatGPT's main column carries its own z-index,\n   so raise the card above it. Dialogs sit in the top layer, above this. */\n.ce-card {\n    position: fixed;\n    z-index: 999;\n}\n\n.ce-card-arrow {\n    position: absolute;\n    left: -8px;\n    fill: var(--ce-menu-arrow);\n    stroke: var(--ce-menu-border);\n}\n\n.ce-row-half {\n    grid-column: auto / span 1;\n}\n\n.ce-row-full {\n    grid-column: auto / span 2;\n}\n\n.ce-backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    animation: ce-pointer-fade-in 0.3s;\n}\n");
	_css("/* Native <dialog>: the backdrop replaces a separate overlay element. */\n.ce-dialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.44);\n    animation: ce-fade-in 150ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.ce-dialog {\n    color: var(--ce-text-primary);\n    background-color: var(--ce-dialog-surface);\n    border-radius: 6px;\n    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;\n    position: fixed;\n    /* The UA sheet sets inset: 0 and margin: auto on a modal <dialog>. */\n    inset: 50% auto auto 50%;\n    margin: 0;\n    border: 0;\n    transform: translate(-50%, -50%);\n    width: 90vw;\n    max-width: 560px;\n    max-height: 85vh;\n    overflow: hidden;\n    padding: 16px 24px;\n    outline: none;\n    animation: ce-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);\n    display: flex;\n    flex-direction: column;\n}\n\n/* display: flex above would otherwise show a closed <dialog>. */\n.ce-dialog:not([open]) {\n    display: none;\n}\n\n.ce-dialog-plain {\n    background-color: var(--ce-dialog-surface-plain);\n}\n\n:is(.dark, [data-theme=\"dark\"]) .ce-dialog {\n    border: 1px solid #40414f;\n}\n\n.ce-dialog-title {\n    margin: 0 0 16px 0;\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 1.5;\n    flex-shrink: 0;\n}\n\n.ce-dialog-body {\n    flex: 1;\n    min-height: 0;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.ce-dialog-footer {\n    display: flex;\n    flex-shrink: 0;\n    justify-content: flex-end;\n    padding-top: 16px;\n}\n\n.ce-button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    padding: 0 15px;\n    font-size: 15px;\n    line-height: 1;\n    height: 35px;\n}\n.ce-button-strong {\n    font-weight: 700;\n}\n.ce-button-green {\n    background-color: #ddf3e4;\n    color: #18794e;\n}\n.ce-button-green:hover {\n    background-color: #ccebd7;\n}\n.ce-button-red {\n    background-color: #f9d9d9;\n    color: #a71d2a;\n}\n.ce-button-neutral {\n    color: #6f6e77;\n    border: 1px solid #6f6e77;\n    font-size: 13px;\n    height: 26px;\n    padding: 0 8px;\n}\n.ce-button-neutral:hover {\n    background-color: rgba(111, 110, 119, 0.1);\n}\n:is(.dark, [data-theme=\"dark\"]) .ce-button-neutral {\n    color: #a0a0a8;\n    border-color: #a0a0a8;\n}\n:is(.dark, [data-theme=\"dark\"]) .ce-button-neutral:hover {\n    background-color: rgba(160, 160, 168, 0.1);\n}\n.ce-button:disabled,\n.ce-button:disabled:hover {\n    opacity: 0.5;\n    color: #6f6e77;\n    background-color: #e0e0e0;\n    cursor: not-allowed;\n}\n\n.ce-icon-button {\n    border-radius: 100%;\n    height: 25px;\n    width: 25px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--ce-text-secondary);\n}\n.ce-icon-button:hover {\n    background-color: var(--ce-hover);\n}\n\n.ce-close-button {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n}\n\n.ce-input {\n    width: 100%;\n    flex: 1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    padding: 0 10px;\n    font-size: 15px;\n    line-height: 1;\n    color: var(--ce-text-primary);\n    background-color: var(--ce-input-surface);\n    box-shadow: 0 0 0 1px var(--ce-control-border);\n    height: 35px;\n    outline: none;\n}\n\n.ce-select {\n    appearance: none;\n    height: 2rem;\n    padding: 0 2rem 0 0.5rem;\n    width: auto;\n    min-width: 7.5rem;\n    border-radius: 4px;\n    color: var(--ce-text-primary);\n    background-color: var(--ce-input-surface);\n    /* Our own chevron, since appearance: none drops the native one. */\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%238f8f8f' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 6l4 4 4-4'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right 0.5rem center;\n    background-size: 1rem;\n    box-shadow: 0 0 0 1px var(--ce-control-border);\n}\n\n.ce-select:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n}\n\n/* ── Export dialog ── */\n\n.ce-export-source {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding-bottom: 12px;\n    margin-bottom: 12px;\n    border-bottom: 1px solid var(--ce-border);\n    color: var(--ce-text-secondary);\n}\n\n.ce-project-select {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 12px;\n    color: var(--ce-text-secondary);\n}\n\n.ce-select-search {\n    width: 100%;\n    padding: 8px 16px;\n    border: 1px solid var(--ce-control-border);\n    border-bottom: none;\n    border-radius: 4px 4px 0 0;\n    font-size: 14px;\n    outline: none;\n    flex-shrink: 0;\n}\n.ce-select-search::placeholder {\n    color: var(--ce-text-tertiary);\n}\n\n.ce-select-toolbar {\n    display: flex;\n    align-items: center;\n    /* Minimum breathing room between the select-all label and the right\n       group once the auto margin collapses under pressure */\n    gap: 12px;\n    padding: 12px 16px;\n    border: 1px solid var(--ce-control-border);\n    border-bottom: none;\n    flex-shrink: 0;\n}\n\n/* CJK labels wrap per-character when the row is squeezed — never shrink it */\n.ce-select-toolbar .ce-checkbox {\n    white-space: nowrap;\n    flex-shrink: 0;\n}\n\n.ce-select-toolbar-end {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-left: auto;\n    min-width: 0;\n}\n\n.ce-toolbar-loading {\n    display: flex;\n    align-items: center;\n    gap: 4px;\n    min-width: 0;\n    overflow: hidden;\n    white-space: nowrap;\n    font-size: 0.875rem;\n    color: var(--ce-text-tertiary);\n}\n\n.ce-toolbar-status {\n    flex-shrink: 0;\n    height: auto;\n    font-size: 0.75rem;\n    padding: 2px 2rem 2px 0.5rem;\n    width: 8.5rem;\n    text-overflow: ellipsis;\n}\n\n.ce-toolbar-hint {\n    min-width: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 0.75rem;\n    color: var(--ce-text-tertiary);\n    /* Highest shrink factor: the hint collapses before the loading\n       indicator starts truncating */\n    flex-shrink: 99;\n}\n\n.ce-toolbar-count {\n    flex-shrink: 0;\n    white-space: nowrap;\n    font-size: 0.875rem;\n    font-weight: 500;\n    font-variant-numeric: tabular-nums;\n    color: var(--ce-text-tertiary);\n}\n\n.ce-select-list {\n    position: relative;\n    width: 100%;\n    flex: 1;\n    min-height: 120px;\n    padding: 12px 16px;\n    overflow-x: hidden;\n    overflow-y: auto;\n    border: 1px solid var(--ce-control-border);\n    border-radius: 0 0 4px 4px;\n    white-space: nowrap;\n}\n\n.ce-select-item {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    overflow: hidden;\n}\n\n.ce-select-item-empty {\n    color: var(--ce-text-tertiary);\n}\n\n.ce-select-item .ce-checkbox {\n    flex: 1;\n    min-width: 0;\n}\n\n.ce-select-item .ce-checkbox-label {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.ce-starred {\n    flex-shrink: 0;\n    color: #f59e0b;\n}\n\n.ce-select-item-meta {\n    flex-shrink: 0;\n    font-size: 0.7rem;\n    color: var(--ce-text-tertiary);\n    white-space: nowrap;\n    font-variant-numeric: tabular-nums;\n    min-width: 6.5rem;\n    text-align: right;\n}\n.ce-select-item-meta-active {\n    color: var(--ce-text-secondary);\n    font-weight: 600;\n}\n\n/* ── Sortable column header row ── */\n.ce-list-header {\n    display: flex;\n    align-items: center;\n    padding: 0 16px;\n    border: 1px solid var(--ce-control-border);\n    border-bottom: none;\n    background: var(--ce-list-header-surface);\n    user-select: none;\n    flex-shrink: 0;\n}\n\n.ce-list-header-cell {\n    flex-shrink: 0;\n    font-size: 0.68rem;\n    font-weight: 600;\n    color: var(--ce-text-tertiary);\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n    padding: 5px 4px;\n    white-space: nowrap;\n    min-width: 6.5rem;\n    text-align: right;\n}\n.ce-list-header-cell:hover {\n    color: var(--ce-text-primary);\n}\n.ce-list-header-cell-title {\n    flex: 1;\n    text-align: left;\n    padding-left: 28px; /* align with checkbox label */\n}\n.ce-list-header-cell-active {\n    color: var(--ce-accent);\n}\n\n.ce-load-more {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 8px;\n    margin: 8px 0 4px;\n}\n\n.ce-muted-count {\n    font-size: 0.75rem;\n    font-variant-numeric: tabular-nums;\n    color: var(--ce-text-tertiary);\n}\n\n.ce-action-bar {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 8px;\n    margin-top: 12px;\n}\n\n.ce-action-bar > .ce-select {\n    flex-shrink: 0;\n}\n\n/* The buttons wrap as one group, so Export never sits alone on its own row.\n   They only wrap among themselves when long labels overflow a full row. */\n.ce-action-buttons {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n    flex-shrink: 0;\n    gap: 8px;\n    max-width: 100%;\n    margin-left: auto;\n}\n\n.ce-batch-note {\n    margin-top: 6px;\n    font-size: 0.75rem;\n    text-align: right;\n    color: var(--ce-text-tertiary);\n}\n\n.ce-progress-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    margin: 8px 0 4px;\n}\n\n.ce-progress-name {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 0.875rem;\n    color: var(--ce-text-secondary);\n}\n\n.ce-progress-count {\n    flex-shrink: 0;\n    font-size: 0.875rem;\n    font-variant-numeric: tabular-nums;\n    color: var(--ce-text-tertiary);\n}\n\n.ce-progress {\n    width: 100%;\n    height: 10px;\n    margin-bottom: 16px;\n    border-radius: 9999px;\n    background-color: var(--ce-track);\n}\n\n.ce-progress-bar {\n    height: 100%;\n    border-radius: 9999px;\n    background-color: var(--ce-accent);\n}\n\n.ce-progress-bar-waiting {\n    background-color: #f59e0b;\n}\n\n@media (max-width: 480px) {\n    .ce-dialog { max-height: 90vh; }\n    .ce-list-header-cell:last-child { display: none; }\n    .ce-select-item-meta:last-child { display: none; }\n    .ce-action-bar > .ce-select { width: 100%; }\n}\n\n@keyframes ce-content-show {\n    from {\n        opacity: 0;\n        transform: translate(-50%, -48%) scale(0.96);\n    }\n    to {\n        opacity: 1;\n        transform: translate(-50%, -50%) scale(1);\n    }\n}\n");
	function useCollapsedSidebar(container, isMobile) {
		const [isCollapsed, setIsCollapsed] = h(false);
		p(() => {
			if (isMobile) {
				setIsCollapsed(false);
				return;
			}
			let frame = 0;
			const observed = new Set();
			const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
			function sidebarElement() {
				return container.closest("nav, aside, [aria-label=\"Sidebar\"], [data-testid=\"sidebar\"]") ?? container.parentElement;
			}
			function observe(element) {
				if (!observer || !element || observed.has(element)) return;
				observer.observe(element);
				observed.add(element);
			}
			function update() {
				cancelAnimationFrame(frame);
				frame = requestAnimationFrame(() => {
					const parentWidth = container.parentElement?.getBoundingClientRect().width ?? 0;
					const sidebarWidth = sidebarElement()?.getBoundingClientRect().width ?? parentWidth;
					const nextCollapsed = parentWidth > 0 && parentWidth < 96 || sidebarWidth > 0 && sidebarWidth < 96;
					setIsCollapsed(nextCollapsed);
					container.toggleAttribute("data-ce-sidebar-collapsed", nextCollapsed);
					observe(container.parentElement);
					observe(sidebarElement());
				});
			}
			observe(container.parentElement);
			observe(sidebarElement());
			update();
			window.addEventListener("resize", update);
			return () => {
				cancelAnimationFrame(frame);
				window.removeEventListener("resize", update);
				observer?.disconnect();
				container.removeAttribute("data-ce-sidebar-collapsed");
			};
		}, [container, isMobile]);
		return isCollapsed;
	}
	function MenuInner({ container }) {
		const { t } = useTranslation();
		const [open, setOpen] = h(false);
		const [jsonOpen, setJsonOpen] = h(false);
		const [exportOpen, setExportOpen] = h(false);
		const [settingOpen, setSettingOpen] = h(false);
		const { format, enableTimestamp, timeStamp24H, enableMeta, exportMetaList } = useSettingContext();
		p(() => {
			if (enableTimestamp) document.body.setAttribute("data-time-format", timeStamp24H ? "24" : "12");
			else document.body.removeAttribute("data-time-format");
		}, [enableTimestamp, timeStamp24H]);
		const metaList = F$1(() => enableMeta ? exportMetaList : [], [enableMeta, exportMetaList]);
		const onClickText = T$1(() => exportToText(), []);
		const onClickPng = T$1(() => exportToPng(format), [format]);
		const onClickMarkdown = T$1(() => exportToMarkdown(format, metaList), [format, metaList]);
		const onClickHtml = T$1(() => exportToHtml(format, metaList), [format, metaList]);
		const onClickJSON = T$1(() => {
			setJsonOpen(true);
			return false;
		}, []);
		const onClickSetting = T$1(() => {
			setSettingOpen(true);
			return false;
		}, []);
		const onClickExportAll = T$1(() => {
			setExportOpen(true);
			return false;
		}, []);
		const onClickOfficialJSON = T$1(() => exportToJson(format), [format]);
		const onClickTavern = T$1(() => exportToTavern(format), [format]);
		const onClickOoba = T$1(() => exportToOoba(format), [format]);
		const isMobile = useWindowResize(() => window.innerWidth) < 768;
		const isCollapsedSidebar = useCollapsedSidebar(container, isMobile);
		return o(k$1, { children: [
			isMobile && open && o("div", {
				className: "ce-backdrop",
				onClick: () => setOpen(false)
			}),
			o(HoverCard, {
				open,
				onOpenChange: setOpen,
				keepMounted: jsonOpen || settingOpen || exportOpen,
				isMobile,
				width: isMobile ? 316 : 292,
				trigger: o(MenuItem, {
					className: isCollapsedSidebar ? "ce-nav-trigger ce-nav-trigger-collapsed" : "ce-nav-trigger ce-nav-trigger-expanded",
					text: t("ExportHelper"),
					ariaLabel: t("ExportHelper"),
					icon: IconArrowRightFromBracket,
					onClick: () => {
						setOpen(true);
						return true;
					}
				}),
				children: [
					o(MenuItem, {
						text: t("Setting"),
						icon: IconSetting,
						className: "ce-row-full",
						onClick: onClickSetting
					}),
					o(SettingDialog, {
						open: settingOpen,
						onOpenChange: setSettingOpen
					}),
					o(MenuItem, {
						text: t("Copy Text"),
						successText: t("Copied!"),
						icon: IconCopy,
						className: "ce-row-full",
						onClick: onClickText
					}),
					o(MenuItem, {
						text: t("Screenshot"),
						icon: IconCamera,
						className: "ce-row-half",
						onClick: onClickPng
					}),
					o(MenuItem, {
						text: t("Markdown"),
						icon: IconMarkdown,
						className: "ce-row-half",
						onClick: onClickMarkdown
					}),
					o(MenuItem, {
						text: t("HTML"),
						icon: FileCode,
						className: "ce-row-half",
						onClick: onClickHtml
					}),
					o(MenuItem, {
						text: t("JSON"),
						icon: IconJSON,
						className: "ce-row-half",
						onClick: onClickJSON
					}),
					o(Dialog, {
						open: jsonOpen,
						onOpenChange: setJsonOpen,
						title: t("JSON"),
						style: { width: "320px" },
						children: [
							o(MenuItem, {
								text: t("OpenAI Official Format"),
								icon: IconCopy,
								className: "ce-row-full",
								onClick: onClickOfficialJSON
							}),
							o(MenuItem, {
								text: "JSONL (TavernAI, SillyTavern)",
								icon: IconCopy,
								className: "ce-row-full",
								onClick: onClickTavern
							}),
							o(MenuItem, {
								text: "Ooba (text-generation-webui)",
								icon: IconCopy,
								className: "ce-row-full",
								onClick: onClickOoba
							})
						]
					}),
					o(MenuItem, {
						text: t("Export All"),
						icon: IconZip,
						className: "ce-row-full",
						onClick: onClickExportAll
					}),
					o(ExportDialog, {
						format,
						open: exportOpen,
						onOpenChange: setExportOpen
					})
				]
			}),
			!isCollapsedSidebar && o(Divider, {})
		] });
	}
	function Menu({ container }) {
		return o(SettingProvider, { children: o(MenuInner, { container }) });
	}
	var PROFILE_BUTTON_SELECTOR = "[data-testid=\"accounts-profile-button\"]";
	var SIDEBAR_SCROLL_SELECTOR = "[data-app-action-sidebar-scroll]";
	var AUTOMATIONS_SELECTOR = "[data-sidebar-destination=\"builtin:automations\"]";
	var MESSAGE_UNIT_SELECTOR = "[data-chatgpt-conversation-selection-target] [data-chatgpt-search-message-ids]";
	var RAIL_MENU_BUTTON_SELECTOR = "[data-app-navigation-rail] button[aria-haspopup=\"menu\"]";
	main();
	function main() {
		watchTemporaryChatId();
		onloadSafe(() => {
			console.log("[Exporter] Loaded");
			const styleEl = document.createElement("style");
			styleEl.id = "sentinel-css";
			document.head.append(styleEl);
			const injectionMap = new Map();
			const injectNavMenu = ({ target, insert }) => {
				if (injectionMap.has(target)) return;
				console.log("[Exporter] Injecting nav", target);
				const container = getMenuContainer();
				injectionMap.set(target, container);
				insert(container);
			};
			const syncNavMenu = () => {
				const mounts = getNavMenuMounts();
				const activeTargets = new Set(mounts.map(({ target }) => target));
				injectionMap.forEach((container, target) => {
					if (!target.isConnected || !container.isConnected || !activeTargets.has(target)) {
						container.remove();
						injectionMap.delete(target);
					}
				});
				mounts.forEach(injectNavMenu);
			};
			for (const selector of [
				PROFILE_BUTTON_SELECTOR,
				SIDEBAR_SCROLL_SELECTOR,
				RAIL_MENU_BUTTON_SELECTOR,
				AUTOMATIONS_SELECTOR
			]) import_sentinel_umd.default.on(selector, syncNavMenu);
			syncNavMenu();
			setInterval(syncNavMenu, 1e3);
			if (isSharePage()) import_sentinel_umd.default.on(`div[role="presentation"] > .w-full > div >.flex.w-full`, (target) => {
				target.prepend(getMenuContainer());
			});
			watchMessageTimestamps();
		});
	}
	function watchMessageTimestamps() {
		let chatId = "";
		let createTimes = Promise.resolve(new Map());
		const missingIds = new Set();
		let refetch = null;
		const loadCreateTimes = async (id) => {
			const conversation = await fetchConversation(id);
			const times = new Map();
			Object.values(conversation.mapping).forEach(({ message }) => {
				if (message?.create_time) times.set(message.id, message.create_time);
			});
			return times;
		};
		const findCreateTime = (times, ids) => {
			for (let i = ids.length - 1; i >= 0; i--) {
				const time = times.get(ids[i]);
				if (time) return time;
			}
			return null;
		};
		const stamp = async (unit) => {
			if (!document.body.hasAttribute("data-time-format")) return;
			if (isSharePage()) return;
			if (unit.parentElement?.closest("[data-chatgpt-search-message-ids]")) return;
			const currentChatId = getChatIdFromUrl();
			if (!currentChatId) return;
			if (currentChatId !== chatId) {
				chatId = currentChatId;
				missingIds.clear();
				refetch = null;
				createTimes = loadCreateTimes(chatId).catch(() => new Map());
			}
			const ids = unit.getAttribute("data-chatgpt-search-message-ids")?.split(/\s+/).filter(Boolean) ?? [];
			if (ids.length === 0) return;
			let createTime = findCreateTime(await createTimes, ids);
			if (!createTime && ids.some((id) => !missingIds.has(id)) && currentChatId === chatId) {
				ids.forEach((id) => missingIds.add(id));
				refetch ??= loadCreateTimes(chatId).catch(() => new Map()).finally(() => {
					refetch = null;
				});
				createTimes = refetch;
				createTime = findCreateTime(await createTimes, ids);
			}
			if (!createTime || !unit.isConnected || unit.querySelector(":scope > time[data-ce-timestamp]")) return;
			unit.append(createTimestamp(createTime));
		};
		import_sentinel_umd.default.on(MESSAGE_UNIT_SELECTOR, stamp);
		new MutationObserver(() => {
			document.querySelectorAll(MESSAGE_UNIT_SELECTOR).forEach(stamp);
		}).observe(document.body, {
			attributes: true,
			attributeFilter: ["data-time-format"]
		});
	}
	function createTimestamp(createTime) {
		const date = new Date(createTime * 1e3);
		const timestamp = document.createElement("time");
		timestamp.className = "ce-timestamp";
		timestamp.setAttribute("data-ce-timestamp", "");
		timestamp.dateTime = date.toISOString();
		timestamp.title = date.toLocaleString();
		const hour12 = document.createElement("span");
		hour12.setAttribute("data-time-format", "12");
		hour12.textContent = date.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit"
		});
		const hour24 = document.createElement("span");
		hour24.setAttribute("data-time-format", "24");
		hour24.textContent = date.toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		});
		timestamp.append(hour12, hour24);
		return timestamp;
	}
	function getMenuContainer() {
		const container = document.createElement("div");
		container.className = "ce-root";
		container.style.zIndex = "99";
		D$1(o(Menu, { container }), container);
		return container;
	}
	function getNavMenuInsertionTarget(target) {
		const wrapper = target.parentElement;
		if (!wrapper || wrapper.children.length !== 1) return target;
		return wrapper;
	}
	function getNavMenuMounts() {
		const profileButtons = Array.from(document.querySelectorAll(PROFILE_BUTTON_SELECTOR));
		if (profileButtons.length > 0) return profileButtons.map((target) => ({
			target,
			insert: (container) => getNavMenuInsertionTarget(target).before(container)
		}));
		const mounts = [];
		Array.from(document.querySelectorAll(SIDEBAR_SCROLL_SELECTOR)).forEach((scrollRoot) => {
			const wrapper = scrollRoot.parentElement;
			const footer = [
				scrollRoot.nextElementSibling,
				wrapper?.nextElementSibling,
				wrapper?.parentElement?.nextElementSibling
			].find((el) => el?.querySelector("button[aria-haspopup=\"menu\"]"));
			if (footer) mounts.push({
				target: footer,
				insert: (container) => {
					Object.assign(container.style, {
						paddingInline: "var(--padding-row-x)",
						paddingTop: "8px"
					});
					footer.prepend(container);
				}
			});
		});
		const railMenuButton = Array.from(document.querySelectorAll(RAIL_MENU_BUTTON_SELECTOR)).at(-1) ?? null;
		const rail = railMenuButton?.closest("[data-app-navigation-rail]");
		const railRow = rail && Array.from(rail.children).find((row) => row.contains(railMenuButton));
		if (railMenuButton && railRow) mounts.push({
			target: railMenuButton,
			insert: (container) => {
				container.style.pointerEvents = "auto";
				railRow.before(container);
			}
		});
		if (mounts.length > 0) return mounts;
		return Array.from(document.querySelectorAll(AUTOMATIONS_SELECTOR)).map((target) => ({
			target,
			insert: (container) => getNavMenuInsertionTarget(target).before(container)
		}));
	}
})();
