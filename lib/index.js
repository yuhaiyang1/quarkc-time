var et = Object.defineProperty;
var tt = (e, t, n) => t in e ? et(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var E = (e, t, n) => (tt(e, typeof t != "symbol" ? t + "" : t, n), n);
function Z(e, t, n, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    i = Reflect.decorate(e, t, n, r);
  else
    for (var p = e.length - 1; p >= 0; p--)
      (a = e[p]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
  return o > 3 && i && Object.defineProperty(t, n, i), i;
}
function D(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pe = { exports: {} }, de = { exports: {} };
(function(e) {
  function t(n) {
    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
      return r.__proto__ || Object.getPrototypeOf(r);
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(de);
var ge = D(de.exports), Q = { exports: {} };
(function(e) {
  function t(n, r) {
    return e.exports = t = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
      return o.__proto__ = i, o;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n, r);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Q);
var G, Oe = { exports: {} };
(G = Oe).exports = function(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}, G.exports.__esModule = !0, G.exports.default = G.exports;
var be = { exports: {} }, ke = { exports: {} };
(function(e) {
  e.exports = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(ke), function(e) {
  var t = Q.exports, n = ke.exports;
  function r(o, i, a) {
    return n() ? (e.exports = r = Reflect.construct.bind(), e.exports.__esModule = !0, e.exports.default = e.exports) : (e.exports = r = function(p, c, f) {
      var s = [null];
      s.push.apply(s, c);
      var l = new (Function.bind.apply(p, s))();
      return f && t(l, f.prototype), l;
    }, e.exports.__esModule = !0, e.exports.default = e.exports), r.apply(null, arguments);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
}(be), function(e) {
  var t = de.exports, n = Q.exports, r = Oe.exports, o = be.exports;
  function i(a) {
    var p = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
    return e.exports = i = function(c) {
      if (c === null || !r(c))
        return c;
      if (typeof c != "function")
        throw new TypeError("Super expression must either be null or a function");
      if (p !== void 0) {
        if (p.has(c))
          return p.get(c);
        p.set(c, f);
      }
      function f() {
        return o(c, arguments, t(this).constructor);
      }
      return f.prototype = Object.create(c.prototype, { constructor: { value: f, enumerable: !1, writable: !0, configurable: !0 } }), n(f, c);
    }, e.exports.__esModule = !0, e.exports.default = e.exports, i(a);
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
}(Pe);
var nt = D(Pe.exports), Ne = { exports: {} }, ue = { exports: {} }, X = { exports: {} };
(function(e) {
  function t(n) {
    return e.exports = t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
      return typeof r;
    } : function(r) {
      return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(n);
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(X);
var we = { exports: {} };
(function(e) {
  var t = X.exports.default;
  e.exports = function(n, r) {
    if (t(n) !== "object" || n === null)
      return n;
    var o = n[Symbol.toPrimitive];
    if (o !== void 0) {
      var i = o.call(n, r || "default");
      if (t(i) !== "object")
        return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(n);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(we), function(e) {
  var t = X.exports.default, n = we.exports;
  e.exports = function(r) {
    var o = n(r, "string");
    return t(o) === "symbol" ? o : String(o);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}(ue), function(e) {
  var t = ue.exports;
  e.exports = function(n, r, o) {
    return (r = t(r)) in n ? Object.defineProperty(n, r, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[r] = o, n;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
}(Ne);
var C = D(Ne.exports), Re = { exports: {} };
(function(e) {
  e.exports = function(t, n) {
    if (!(t instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Re);
var ne = D(Re.exports), je = { exports: {} };
(function(e) {
  var t = ue.exports;
  function n(r, o) {
    for (var i = 0; i < o.length; i++) {
      var a = o[i];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(r, t(a.key), a);
    }
  }
  e.exports = function(r, o, i) {
    return o && n(r.prototype, o), i && n(r, i), Object.defineProperty(r, "prototype", { writable: !1 }), r;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(je);
var re = D(je.exports), he = { exports: {} };
(function(e) {
  e.exports = function(t) {
    if (t === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(he);
var W = D(he.exports), Ue = { exports: {} };
(function(e) {
  var t = Q.exports;
  e.exports = function(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), r && t(n, r);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Ue);
var Le = D(Ue.exports), Be = { exports: {} };
(function(e) {
  var t = X.exports.default, n = he.exports;
  e.exports = function(r, o) {
    if (o && (t(o) === "object" || typeof o == "function"))
      return o;
    if (o !== void 0)
      throw new TypeError("Derived constructors may only return object or undefined");
    return n(r);
  }, e.exports.__esModule = !0, e.exports.default = e.exports;
})(Be);
var rt = D(Be.exports), ee = {}, Ie = [], ot = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function A(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function He(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
var _e = Ie.slice, m = { _catchError: function(e, t, n, r) {
  for (var o, i, a; t = t._parent; )
    if ((o = t._component) && !o._processingException)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(e)), a = o._dirty), o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), a = o._dirty), a)
          return o._pendingError = o;
      } catch (p) {
        e = p;
      }
  throw e;
} }, it = 0;
function We(e, t, n) {
  var r, o, i, a = {};
  for (i in t)
    i == "key" ? r = t[i] : i == "ref" ? o = t[i] : a[i] = t[i];
  if (arguments.length > 2 && (a.children = arguments.length > 3 ? _e.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (i in e.defaultProps)
      a[i] === void 0 && (a[i] = e.defaultProps[i]);
  return J(e, a, r, o, null);
}
function J(e, t, n, r, o) {
  var i = { type: e, props: t, key: n, ref: r, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: o ?? ++it };
  return o == null && m.vnode != null && m.vnode(i), i;
}
function $(e) {
  return e.children;
}
function K(e, t) {
  this.props = e, this.context = t;
}
function F(e, t) {
  if (t == null)
    return e._parent ? F(e._parent, e._parent._children.indexOf(e) + 1) : null;
  for (var n; t < e._children.length; t++)
    if ((n = e._children[t]) != null && n._dom != null)
      return n._dom;
  return typeof e.type == "function" ? F(e) : null;
}
function lt(e) {
  var t = e._vnode, n = t._dom, r = e._parentDom;
  if (r) {
    var o = [], i = A({}, t);
    i._original = t._original + 1, ve(r, t, i, e._globalContext, r.ownerSVGElement !== void 0, t._hydrating != null ? [n] : null, o, n ?? F(t), t._hydrating), Ve(o, t), t._dom != n && Fe(t);
  }
}
function Fe(e) {
  if ((e = e._parent) != null && e._component != null) {
    e._dom = e._component.base = null;
    for (var t = 0; t < e._children.length; t++) {
      var n = e._children[t];
      if (n != null && n._dom != null) {
        e._dom = e._component.base = n._dom;
        break;
      }
    }
    return Fe(e);
  }
}
K.prototype.setState = function(e, t) {
  var n;
  n = this._nextState != null && this._nextState !== this.state ? this._nextState : this._nextState = A({}, this.state), typeof e == "function" && (e = e(A({}, n), this.props)), e && A(n, e), e != null && this._vnode && (t && this._stateCallbacks.push(t), Me(this));
}, K.prototype.forceUpdate = function(e) {
  this._vnode && (this._force = !0, e && this._renderCallbacks.push(e), Me(this));
}, K.prototype.render = $;
var Se, U = [], at = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
function Me(e) {
  (!e._dirty && (e._dirty = !0) && U.push(e) && !te._rerenderCount++ || Se !== m.debounceRendering) && ((Se = m.debounceRendering) || at)(te);
}
var Ce = function(e, t) {
  return e._vnode._depth - t._vnode._depth;
};
function te() {
  var e;
  for (U.sort(Ce); e = U.shift(); )
    if (e._dirty) {
      var t = U.length;
      lt(e), U.length > t && U.sort(Ce);
    }
  te._rerenderCount = 0;
}
function Te(e, t, n, r, o, i, a, p, c, f) {
  var s, l, d, u, b, M, k, v = r && r._children || Ie, P = v.length;
  for (n._children = [], s = 0; s < t.length; s++)
    if ((u = (u = t[s]) == null || typeof u == "boolean" || typeof u == "function" ? n._children[s] = null : typeof u == "string" || typeof u == "number" || typeof u == "bigint" ? n._children[s] = J(null, u, null, null, u) : Array.isArray(u) ? n._children[s] = J($, { children: u }, null, null, null) : u._depth > 0 ? n._children[s] = J(u.type, u.props, u.key, u.ref ? u.ref : null, u._original) : n._children[s] = u) != null) {
      if (u._parent = n, u._depth = n._depth + 1, (d = v[s]) === null || d && u.key == d.key && u.type === d.type)
        v[s] = void 0;
      else
        for (l = 0; l < P; l++) {
          if ((d = v[l]) && u.key == d.key && u.type === d.type) {
            v[l] = void 0;
            break;
          }
          d = null;
        }
      ve(e, u, d = d || ee, o, i, a, p, c, f), b = u._dom, (l = u.ref) && d.ref != l && (k || (k = []), d.ref && k.push(d.ref, null, u), k.push(l, u._component || b, u)), b != null ? (M == null && (M = b), typeof u.type == "function" && u._children === d._children ? u._nextDom = c = Ze(u, c, e) : c = $e(e, u, d, v, b, c), typeof n.type == "function" && (n._nextDom = c)) : c && d._dom == c && c.parentNode != e && (c = F(d));
    }
  for (n._dom = M, s = P; s--; )
    v[s] != null && (typeof n.type == "function" && v[s]._dom != null && v[s]._dom == n._nextDom && (n._nextDom = ze(r).nextSibling), Ge(v[s], v[s]));
  if (k)
    for (s = 0; s < k.length; s++)
      qe(k[s], k[++s], k[++s]);
}
function Ze(e, t, n) {
  for (var r = e._children, o = 0; r && o < r.length; o++) {
    var i = r[o];
    i && (i._parent = e, t = typeof i.type == "function" ? Ze(i, t, n) : $e(n, i, i, r, i._dom, t));
  }
  return t;
}
function $e(e, t, n, r, o, i) {
  var a;
  if (t._nextDom !== void 0)
    a = t._nextDom, t._nextDom = void 0;
  else if (n == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== e)
        e.appendChild(o), a = null;
      else {
        for (var p = i, c = 0; (p = p.nextSibling) && c < r.length; c += 1)
          if (p == o)
            break e;
        e.insertBefore(o, i), a = i;
      }
  return i = a !== void 0 ? a : o.nextSibling;
}
function ze(e) {
  if (e.type == null || typeof e.type == "string")
    return e._dom;
  if (e._children)
    for (var t = e._children.length - 1; t >= 0; t--) {
      var n = e._children[t];
      if (n) {
        var r = ze(n);
        if (r)
          return r;
      }
    }
  return null;
}
function Ee(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : n == null ? e[t] = "" : typeof n != "number" || ot.test(t) ? e[t] = n : e[t] = n + "px";
}
function Y(e, t, n, r, o) {
  var i;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Ee(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Ee(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      if (i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t + i] = n, n) {
        if (!r) {
          var a = i ? De : Ae;
          e.addEventListener(t, a, i);
        }
      } else {
        var p = i ? De : Ae;
        e.removeEventListener(t, p, i);
      }
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t.indexOf("-") == -1 ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ae(e) {
  return this._listeners[e.type + !1](m.event ? m.event(e) : e);
}
function De(e) {
  return this._listeners[e.type + !0](m.event ? m.event(e) : e);
}
function ve(e, t, n, r, o, i, a, p, c) {
  var f, s = t.type;
  if (t.constructor !== void 0)
    return null;
  n._hydrating != null && (c = n._hydrating, p = t._dom = n._dom, t._hydrating = null, i = [p]), (f = m._diff) && f(t);
  try {
    e:
      if (typeof s == "function") {
        var l, d, u, b, M, k, v = t.props, P = (f = s.contextType) && r[f._id], O = f ? P ? P.props.value : f._defaultValue : r;
        if (n._component ? k = (l = t._component = n._component)._processingException = l._pendingError : ("prototype" in s && s.prototype.render ? t._component = l = new s(v, O) : (t._component = l = new K(v, O), l.constructor = s, l.render = st), P && P.sub(l), l.props = v, l.state || (l.state = {}), l.context = O, l._globalContext = r, d = l._dirty = !0, l._renderCallbacks = [], l._stateCallbacks = []), l._nextState == null && (l._nextState = l.state), s.getDerivedStateFromProps != null && (l._nextState == l.state && (l._nextState = A({}, l._nextState)), A(l._nextState, s.getDerivedStateFromProps(v, l._nextState))), u = l.props, b = l.state, l._vnode = t, d)
          s.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l._renderCallbacks.push(l.componentDidMount);
        else {
          if (s.getDerivedStateFromProps == null && v !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, O), !l._force && l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l._nextState, O) === !1 || t._original === n._original) {
            t._original !== n._original && (l.props = v, l.state = l._nextState, l._dirty = !1), l._force = !1, t._dom = n._dom, t._children = n._children, t._children.forEach(function(_) {
              _ && (_._parent = t);
            });
            for (var ie = 0; ie < l._stateCallbacks.length; ie++)
              l._renderCallbacks.push(l._stateCallbacks[ie]);
            l._stateCallbacks = [], l._renderCallbacks.length && a.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(v, l._nextState, O), l.componentDidUpdate != null && l._renderCallbacks.push(function() {
            l.componentDidUpdate(u, b, M);
          });
        }
        l.context = O, l.props = v, l._parentDom = e;
        var z = m._render, Je = 0;
        if ("prototype" in s && s.prototype.render) {
          l.state = l._nextState, l._dirty = !1, z && z(t), f = l.render(l.props, l.state, l.context);
          for (var le = 0; le < l._stateCallbacks.length; le++)
            l._renderCallbacks.push(l._stateCallbacks[le]);
          l._stateCallbacks = [];
        } else
          do
            l._dirty = !1, z && z(t), f = l.render(l.props, l.state, l.context), l.state = l._nextState;
          while (l._dirty && ++Je < 25);
        l.state = l._nextState, l.getChildContext != null && (r = A(A({}, r), l.getChildContext())), d || l.getSnapshotBeforeUpdate == null || (M = l.getSnapshotBeforeUpdate(u, b));
        var ae = f != null && f.type === $ && f.key == null ? f.props.children : f;
        Te(e, Array.isArray(ae) ? ae : [ae], t, n, r, o, i, a, p, c), l.base = t._dom, t._hydrating = null, l._renderCallbacks.length && a.push(l), k && (l._pendingError = l._processingException = null), l._force = !1;
      } else
        i == null && t._original === n._original ? (t._children = n._children, t._dom = n._dom) : t._dom = function(_, L, B, Ke, V, y, Qe, j) {
          var T = B.props, w = L.props, S = L.type, h = 0;
          if (S === "svg" && (V = !0), y != null)
            for (; h < y.length; h++) {
              var I = y[h];
              if (I && "setAttribute" in I == !!S && (S ? I.localName === S : I.nodeType === 3)) {
                _ = I, y[h] = null;
                break;
              }
            }
          if (_ == null) {
            if (S === null)
              return document.createTextNode(w);
            _ = V ? document.createElementNS("http://www.w3.org/2000/svg", S) : document.createElement(S, w.is && w), y = null, j = !1;
          }
          if (S === null)
            T === w || j && _.data === w || (_.data = w);
          else {
            y = y && _e.call(_.childNodes);
            var se = (T = B.props || ee).dangerouslySetInnerHTML, N = w.dangerouslySetInnerHTML;
            if (!j) {
              if (y != null)
                for (T = {}, h = 0; h < _.attributes.length; h++)
                  T[_.attributes[h].name] = _.attributes[h].value;
              (N || se) && (N && (se && N.__html == se.__html || N.__html === _.innerHTML) || (_.innerHTML = N && N.__html || ""));
            }
            if (function(xe, H, q, ye, Xe) {
              var x;
              for (x in q)
                x === "children" || x === "key" || x in H || Y(xe, x, null, q[x], ye);
              for (x in H)
                Xe && typeof H[x] != "function" || x === "children" || x === "key" || x === "value" || x === "checked" || q[x] === H[x] || Y(xe, x, H[x], q[x], ye);
            }(_, w, T, V, j), N)
              L._children = [];
            else if (h = L.props.children, Te(_, Array.isArray(h) ? h : [h], L, B, Ke, V && S !== "foreignObject", y, Qe, y ? y[0] : B._children && F(B, 0), j), y != null)
              for (h = y.length; h--; )
                y[h] != null && He(y[h]);
            j || ("value" in w && (h = w.value) !== void 0 && (h !== _.value || S === "progress" && !h || S === "option" && h !== T.value) && Y(_, "value", h, T.value, !1), "checked" in w && (h = w.checked) !== void 0 && h !== _.checked && Y(_, "checked", h, T.checked, !1));
          }
          return _;
        }(n._dom, t, n, r, o, i, a, c);
    (f = m.diffed) && f(t);
  } catch (_) {
    t._original = null, (c || i != null) && (t._dom = p, t._hydrating = !!c, i[i.indexOf(p)] = null), m._catchError(_, t, n);
  }
}
function Ve(e, t) {
  m._commit && m._commit(t, e), e.some(function(n) {
    try {
      e = n._renderCallbacks, n._renderCallbacks = [], e.some(function(r) {
        r.call(n);
      });
    } catch (r) {
      m._catchError(r, n._vnode);
    }
  });
}
function qe(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    m._catchError(r, n);
  }
}
function Ge(e, t, n) {
  var r;
  if (m.unmount && m.unmount(e), (r = e.ref) && (r.current && r.current !== e._dom || qe(r, null, t)), (r = e._component) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (i) {
        m._catchError(i, t);
      }
    r.base = r._parentDom = null, e._component = void 0;
  }
  if (r = e._children)
    for (var o = 0; o < r.length; o++)
      r[o] && Ge(r[o], t, n || typeof e.type != "function");
  n || e._dom == null || He(e._dom), e._parent = e._dom = e._nextDom = void 0;
}
function st(e, t, n) {
  return this.constructor(e, n);
}
te._rerenderCount = 0;
var me = function() {
  function e() {
    ne(this, e), C(this, "map", /* @__PURE__ */ new Map());
  }
  return re(e, [{ key: "get", value: function(t, n) {
    var r = this.map.get(t);
    if (r)
      return r.get(n);
  } }, { key: "set", value: function(t, n, r) {
    var o, i = this.map.get(t);
    i || (i = /* @__PURE__ */ new Map(), this.map.set(t, i)), (o = i) === null || o === void 0 || o.set(n, r);
  } }, { key: "forEach", value: function(t) {
    this.map.forEach(function(n, r) {
      n.forEach(function(o, i) {
        t(o, r, i);
      });
    });
  } }, { key: "delete", value: function(t) {
    this.map.delete(t);
  } }, { key: "deleteAll", value: function() {
    var t = this;
    this.map.forEach(function(n, r) {
      t.map.delete(r);
    });
  } }]), e;
}(), ut = re(function e() {
  var t = this;
  ne(this, e), C(this, "eventMap", new me()), C(this, "bindListener", function(n, r, o) {
    if (n && r && o) {
      var i = t.eventMap.get(n, r);
      i || (i = /* @__PURE__ */ new Set(), t.eventMap.set(n, r, i)), i.has(o) || (i.add(o), n.addEventListener(r, o, !0));
    }
  }), C(this, "removeAllListener", function() {
    t.eventMap.forEach(function(n, r, o) {
      n.forEach(function(i) {
        r.removeEventListener(o, i, !0);
      });
    }), t.eventMap.deleteAll();
  });
});
function Ye(e) {
  var t = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var n, r = ge(e);
    if (t) {
      var o = ge(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else
      n = r.apply(this, arguments);
    return rt(this, n);
  };
}
~location.href.indexOf("localhost") && console.info("%cquarkc", "color: white;background:#9f57f8;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px", "Running in dev mode.");
var ce = function(e) {
  return !(e || e === !1 || e === 0);
}, ct = { observed: !0, type: String, converter: function(e, t) {
  var n = e;
  switch (t) {
    case Number:
      n = ce(e) ? e : Number(e);
      break;
    case Boolean:
      n = !([null, "false", !1, void 0].indexOf(e) > -1);
  }
  return n;
} }, oe = function() {
  return function(e, t) {
    return e.constructor.createState(t);
  };
}, fe = new me(), pe = new me();
function ft(e) {
  var t = typeof e == "string" ? { tag: e } : e, n = t.tag, r = t.style, o = r === void 0 ? "" : r;
  return function(i) {
    var a = function(p) {
      Le(f, p);
      var c = Ye(f);
      function f() {
        var s;
        ne(this, f);
        var l = (s = c.call(this)).attachShadow({ mode: "open" });
        if (l) {
          var d = document.createElement("style");
          d.innerHTML = o, l.append(d);
        }
        return pe.forEach(function(u, b, M) {
          b === i && Object.defineProperty(W(s), M, u(s[M]));
        }), s;
      }
      return re(f, null, [{ key: "observedAttributes", get: function() {
        var s = [];
        return fe.forEach(function(l, d, u) {
          d === i && l.observed && s.push(u);
        }), s;
      } }, { key: "isBooleanProperty", value: function(s) {
        var l = !1;
        return fe.forEach(function(d, u, b) {
          if (u === i && d.type === Boolean && s === b)
            return l = !0;
        }), l;
      } }]), f;
    }(i);
    customElements.get(n) || customElements.define(n, a);
  };
}
var g = function(e) {
  Le(n, e);
  var t = Ye(n);
  function n() {
    var r;
    ne(this, n);
    for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
      i[a] = arguments[a];
    return r = t.call.apply(t, [this].concat(i)), C(W(r), "eventController", new ut()), C(W(r), "rootPatch", function(p) {
      r.shadowRoot && function(c, f, s) {
        m._root && m._root(c, f);
        var l = typeof s == "function", d = l ? null : s && s._children || f._children, u = [];
        ve(f, c = (!l && s || f)._children = We($, null, [c]), d || ee, ee, f.ownerSVGElement !== void 0, !l && s ? [s] : d ? null : f.firstChild ? _e.call(f.childNodes) : null, u, !l && s ? s : d ? d._dom : f.firstChild, l), Ve(u, c);
      }(p, r.shadowRoot);
    }), C(W(r), "$on", function(p, c, f) {
      return r.eventController.bindListener(f || W(r), p, c);
    }), r;
  }
  return re(n, [{ key: "_render", value: function() {
    var r = this.render();
    r && this.rootPatch(r);
  } }, { key: "_updateProperty", value: function() {
    var r = this;
    this.constructor.observedAttributes.forEach(function(o) {
      r[o] = r[o];
    });
  } }, { key: "_updateBooleanProperty", value: function(r) {
    this.constructor.isBooleanProperty(r) && (this[r] || (this[r] = this[r]));
  } }, { key: "$emit", value: function(r, o) {
    return this.dispatchEvent(new CustomEvent(r, Object.assign({ bubbles: !0 }, o)));
  } }, { key: "componentDidMount", value: function() {
  } }, { key: "componentWillUnmount", value: function() {
  } }, { key: "shouldComponentUpdate", value: function(r, o, i) {
    return o !== i;
  } }, { key: "componentDidUpdate", value: function(r, o, i) {
  } }, { key: "render", value: function() {
    return "";
  } }, { key: "connectedCallback", value: function() {
    this._updateProperty(), this._render(), typeof this.componentDidMount == "function" && this.componentDidMount();
  } }, { key: "attributeChangedCallback", value: function(r, o, i) {
    var a = this[r] || i;
    (typeof this.shouldComponentUpdate != "function" || this.shouldComponentUpdate(r, o, a)) && (this._render(), typeof this.componentDidUpdate == "function" && this.componentDidUpdate(r, o, a), i !== o && this._updateBooleanProperty(r));
  } }, { key: "disconnectedCallback", value: function() {
    typeof this.componentWillUnmount == "function" && this.componentWillUnmount(), this.eventController.removeAllListener(), this.rootPatch(null);
  } }], [{ key: "getPropertyDescriptor", value: function(r, o) {
    return function(i) {
      return { get: function() {
        var a = this.getAttribute(r);
        return ce(i) || !ce(a) || o.type === Boolean && a === "" ? (typeof o.converter == "function" && (a = o.converter(a, o.type)), a) : i;
      }, set: function(a) {
        var p = a;
        typeof o.converter == "function" && (p = o.converter(a, o.type)), p ? typeof p == "boolean" ? this.setAttribute(r, "") : this.setAttribute(r, p) : this.removeAttribute(r);
      }, configurable: !0, enumerable: !0 };
    };
  } }, { key: "getStateDescriptor", value: function() {
    return function(r) {
      var o = r;
      return { get: function() {
        return o;
      }, set: function(i) {
        o = i, this._render();
      }, configurable: !0, enumerable: !0 };
    };
  } }, { key: "createProperty", value: function(r, o) {
    var i = Object.assign({}, ct, o);
    fe.set(this, r, i), pe.set(this, r, this.getPropertyDescriptor(r, i));
  } }, { key: "createState", value: function(r) {
    pe.set(this, r, this.getStateDescriptor());
  } }]), n;
}(nt(HTMLElement));
C(g, "h", We), C(g, "Fragment", $);
const pt = `:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424}:host{margin:0 auto;padding:2rem;text-align:center;width:300px}.deTime{position:relative;height:50px;width:300px;padding:5px;background:var(--wrap-bg, linear-gradient(130deg, #914887 20%, #8B257E 77.5%));display:flex;font-family:TrebuchetMS,Rotobo,Microsoft YaHei,sans-serif;border-radius:6px;transform:scale(var(--wrap-scale, 1.5))}.deTime .container{position:relative;height:50px;width:50px;border-radius:50%;box-shadow:#353535 0 0 1px;background:var(--clock-bg, #F6D0D0)}.deTime .second{height:20px;width:1px;top:5px;left:24px;background:var(--second-bg, #ff6363)}.deTime .minute{height:16px;width:2px;top:9px;left:24px;background:var(--minute-bg, #75306C)}.deTime .hour{height:12px;width:2px;top:13px;left:24px;background:var(--hour-bg, #fff)}.deTime .second,.deTime .minute,.deTime .hour{position:absolute;transform-origin:center bottom;box-shadow:0 0 2px #000}.deTime .center{width:2px;height:2px;border-radius:1px;background-color:#fff;box-shadow:0 0 3px 1px #8c8c8c;position:absolute;top:24px;left:24px}.deTime .time{line-height:50px;font-size:36px;color:var(--time-color, #fff);margin-left:15px}.deTime .time span{font-size:22px}.deTime .date{font-size:13px;color:var(--date-color, #fff);display:flex;flex-flow:column;margin-left:15px;padding:6px 0}.deTime .date>div{flex-basis:50%}.grad{height:2px;width:1px;background:var(--grad-bg, #fff);position:absolute;left:25px;top:1px;transform-origin:center 24px}
`;
let R = class extends g {
  constructor() {
    super(...arguments);
    E(this, "TRANSITION", "100ms linear");
    E(this, "NUMBER_TRANSLATION", ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
    E(this, "timer");
    E(this, "hourAngle", 0);
    E(this, "minAngle", 0);
    E(this, "secAngle", 0);
    E(this, "transition", this.TRANSITION);
  }
  updateTime() {
    let n = /* @__PURE__ */ new Date(), r = (n.getSeconds() + n.getMilliseconds() / 1e3) * 6, o = n.getMinutes() * 6 + r / 60, i = n.getHours() % 12 * 30 + o / 12, a = this.TRANSITION;
    this.secAngle > r && (a = null), Object.assign(this, {
      hourAngle: i,
      minAngle: o,
      secAngle: r,
      transition: a
    });
  }
  componentDidMount() {
    this.updateTime(), this.timer = setInterval(() => {
      this.updateTime();
    }, 100);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  leadingZero(n) {
    return n < 10 ? "0" + n : n;
  }
  render() {
    let r = [...new Array(12).keys()].map((a) => g.h("div", { key: a, className: "grad", style: { transform: `rotateZ(${a * 30}deg)` } })), o = this, i = /* @__PURE__ */ new Date();
    return g.h(
      "div",
      { className: "deTime" },
      g.h(
        "div",
        { className: "container" },
        r,
        g.h("div", { className: "minute", style: { transform: "rotateZ(" + o.minAngle + "deg)" } }),
        g.h("div", { className: "hour", style: { transform: "rotateZ(" + o.hourAngle + "deg)" } }),
        g.h("div", { className: "second", style: { transition: o.transition, transform: "rotateZ(" + o.secAngle + "deg)" } }),
        g.h("div", { className: "center" })
      ),
      g.h(
        "div",
        { className: "time" },
        this.leadingZero(i.getHours()),
        ":",
        this.leadingZero(i.getHours()),
        g.h(
          "span",
          null,
          " ",
          this.leadingZero(i.getSeconds())
        )
      ),
      g.h(
        "div",
        { className: "date" },
        g.h("div", null, this.NUMBER_TRANSLATION[i.getDay()]),
        g.h(
          "div",
          null,
          i.getFullYear(),
          "-",
          i.getMonth() + 1,
          "-",
          i.getDate()
        )
      )
    );
  }
};
Z([
  oe()
], R.prototype, "hourAngle", void 0);
Z([
  oe()
], R.prototype, "minAngle", void 0);
Z([
  oe()
], R.prototype, "secAngle", void 0);
Z([
  oe()
], R.prototype, "transition", void 0);
R = Z([
  ft({ tag: "quark-timer", style: pt })
], R);
const _t = R;
export {
  _t as default
};
