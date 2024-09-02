import {
    c as q,
    g as ce
} from "./vendor-DR5RWKqR.js";

function le(o, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in o)) {
                    const a = Object.getOwnPropertyDescriptor(r, s);
                    a && Object.defineProperty(o, s, a.get ? a : {
                        enumerable: !0,
                        get: () => r[s]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, {
        value: "Module"
    }))
}

function L(o) {
    "@babel/helpers - typeof";
    return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, L(o)
}

function J() {
    return typeof XMLHttpRequest == "function" || (typeof XMLHttpRequest > "u" ? "undefined" : L(XMLHttpRequest)) === "object"
}

function de(o) {
    return !!o && typeof o.then == "function"
}

function he(o) {
    return de(o) ? o : Promise.resolve(o)
}

function ye(o) {
    throw new Error('Could not dynamically require "' + o + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var F = {
        exports: {}
    },
    H = {
        exports: {}
    },
    $;

function pe() {
    return $ || ($ = 1, function(o, t) {
        var n = typeof globalThis < "u" && globalThis || typeof self < "u" && self || typeof q < "u" && q,
            r = function() {
                function a() {
                    this.fetch = !1, this.DOMException = n.DOMException
                }
                return a.prototype = n, new a
            }();
        (function(a) {
            (function(f) {
                var u = typeof a < "u" && a || typeof self < "u" && self || typeof u < "u" && u,
                    c = {
                        searchParams: "URLSearchParams" in u,
                        iterable: "Symbol" in u && "iterator" in Symbol,
                        blob: "FileReader" in u && "Blob" in u && function() {
                            try {
                                return new Blob, !0
                            } catch {
                                return !1
                            }
                        }(),
                        formData: "FormData" in u,
                        arrayBuffer: "ArrayBuffer" in u
                    };

                function g(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                }
                if (c.arrayBuffer) var h = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    y = ArrayBuffer.isView || function(e) {
                        return e && h.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function v(e) {
                    if (typeof e != "string" && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || e === "") throw new TypeError('Invalid character in header field name: "' + e + '"');
                    return e.toLowerCase()
                }

                function w(e) {
                    return typeof e != "string" && (e = String(e)), e
                }

                function E(e) {
                    var i = {
                        next: function() {
                            var l = e.shift();
                            return {
                                done: l === void 0,
                                value: l
                            }
                        }
                    };
                    return c.iterable && (i[Symbol.iterator] = function() {
                        return i
                    }), i
                }

                function b(e) {
                    this.map = {}, e instanceof b ? e.forEach(function(i, l) {
                        this.append(l, i)
                    }, this) : Array.isArray(e) ? e.forEach(function(i) {
                        this.append(i[0], i[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(i) {
                        this.append(i, e[i])
                    }, this)
                }
                b.prototype.append = function(e, i) {
                    e = v(e), i = w(i);
                    var l = this.map[e];
                    this.map[e] = l ? l + ", " + i : i
                }, b.prototype.delete = function(e) {
                    delete this.map[v(e)]
                }, b.prototype.get = function(e) {
                    return e = v(e), this.has(e) ? this.map[e] : null
                }, b.prototype.has = function(e) {
                    return this.map.hasOwnProperty(v(e))
                }, b.prototype.set = function(e, i) {
                    this.map[v(e)] = w(i)
                }, b.prototype.forEach = function(e, i) {
                    for (var l in this.map) this.map.hasOwnProperty(l) && e.call(i, this.map[l], l, this)
                }, b.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(i, l) {
                        e.push(l)
                    }), E(e)
                }, b.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(i) {
                        e.push(i)
                    }), E(e)
                }, b.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(i, l) {
                        e.push([l, i])
                    }), E(e)
                }, c.iterable && (b.prototype[Symbol.iterator] = b.prototype.entries);

                function S(e) {
                    if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function X(e) {
                    return new Promise(function(i, l) {
                        e.onload = function() {
                            i(e.result)
                        }, e.onerror = function() {
                            l(e.error)
                        }
                    })
                }

                function te(e) {
                    var i = new FileReader,
                        l = X(i);
                    return i.readAsArrayBuffer(e), l
                }

                function re(e) {
                    var i = new FileReader,
                        l = X(i);
                    return i.readAsText(e), l
                }

                function ne(e) {
                    for (var i = new Uint8Array(e), l = new Array(i.length), p = 0; p < i.length; p++) l[p] = String.fromCharCode(i[p]);
                    return l.join("")
                }

                function I(e) {
                    if (e.slice) return e.slice(0);
                    var i = new Uint8Array(e.byteLength);
                    return i.set(new Uint8Array(e)), i.buffer
                }

                function N() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        this.bodyUsed = this.bodyUsed, this._bodyInit = e, e ? typeof e == "string" ? this._bodyText = e : c.blob && Blob.prototype.isPrototypeOf(e) ? this._bodyBlob = e : c.formData && FormData.prototype.isPrototypeOf(e) ? this._bodyFormData = e : c.searchParams && URLSearchParams.prototype.isPrototypeOf(e) ? this._bodyText = e.toString() : c.arrayBuffer && c.blob && g(e) ? (this._bodyArrayBuffer = I(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : c.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || y(e)) ? this._bodyArrayBuffer = I(e) : this._bodyText = e = Object.prototype.toString.call(e) : this._bodyText = "", this.headers.get("content-type") || (typeof e == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : c.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, c.blob && (this.blob = function() {
                        var e = S(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return Promise.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        if (this._bodyArrayBuffer) {
                            var e = S(this);
                            return e || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                        } else return this.blob().then(te)
                    }), this.text = function() {
                        var e = S(this);
                        if (e) return e;
                        if (this._bodyBlob) return re(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(ne(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText)
                    }, c.formData && (this.formData = function() {
                        return this.text().then(se)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                var oe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function ie(e) {
                    var i = e.toUpperCase();
                    return oe.indexOf(i) > -1 ? i : e
                }

                function j(e, i) {
                    if (!(this instanceof j)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    i = i || {};
                    var l = i.body;
                    if (e instanceof j) {
                        if (e.bodyUsed) throw new TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, i.headers || (this.headers = new b(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, !l && e._bodyInit != null && (l = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = i.credentials || this.credentials || "same-origin", (i.headers || !this.headers) && (this.headers = new b(i.headers)), this.method = ie(i.method || this.method || "GET"), this.mode = i.mode || this.mode || null, this.signal = i.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && l) throw new TypeError("Body not allowed for GET or HEAD requests");
                    if (this._initBody(l), (this.method === "GET" || this.method === "HEAD") && (i.cache === "no-store" || i.cache === "no-cache")) {
                        var p = /([?&])_=[^&]*/;
                        if (p.test(this.url)) this.url = this.url.replace(p, "$1_=" + new Date().getTime());
                        else {
                            var m = /\?/;
                            this.url += (m.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                        }
                    }
                }
                j.prototype.clone = function() {
                    return new j(this, {
                        body: this._bodyInit
                    })
                };

                function se(e) {
                    var i = new FormData;
                    return e.trim().split("&").forEach(function(l) {
                        if (l) {
                            var p = l.split("="),
                                m = p.shift().replace(/\+/g, " "),
                                d = p.join("=").replace(/\+/g, " ");
                            i.append(decodeURIComponent(m), decodeURIComponent(d))
                        }
                    }), i
                }

                function ae(e) {
                    var i = new b,
                        l = e.replace(/\r?\n[\t ]+/g, " ");
                    return l.split("\r").map(function(p) {
                        return p.indexOf(`
`) === 0 ? p.substr(1, p.length) : p
                    }).forEach(function(p) {
                        var m = p.split(":"),
                            d = m.shift().trim();
                        if (d) {
                            var R = m.join(":").trim();
                            i.append(d, R)
                        }
                    }), i
                }
                N.call(j.prototype);

                function P(e, i) {
                    if (!(this instanceof P)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                    i || (i = {}), this.type = "default", this.status = i.status === void 0 ? 200 : i.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = i.statusText === void 0 ? "" : "" + i.statusText, this.headers = new b(i.headers), this.url = i.url || "", this._initBody(e)
                }
                N.call(P.prototype), P.prototype.clone = function() {
                    return new P(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new b(this.headers),
                        url: this.url
                    })
                }, P.error = function() {
                    var e = new P(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var fe = [301, 302, 303, 307, 308];
                P.redirect = function(e, i) {
                    if (fe.indexOf(i) === -1) throw new RangeError("Invalid status code");
                    return new P(null, {
                        status: i,
                        headers: {
                            location: e
                        }
                    })
                }, f.DOMException = u.DOMException;
                try {
                    new f.DOMException
                } catch {
                    f.DOMException = function(i, l) {
                        this.message = i, this.name = l;
                        var p = Error(i);
                        this.stack = p.stack
                    }, f.DOMException.prototype = Object.create(Error.prototype), f.DOMException.prototype.constructor = f.DOMException
                }

                function x(e, i) {
                    return new Promise(function(l, p) {
                        var m = new j(e, i);
                        if (m.signal && m.signal.aborted) return p(new f.DOMException("Aborted", "AbortError"));
                        var d = new XMLHttpRequest;

                        function R() {
                            d.abort()
                        }
                        d.onload = function() {
                            var O = {
                                status: d.status,
                                statusText: d.statusText,
                                headers: ae(d.getAllResponseHeaders() || "")
                            };
                            O.url = "responseURL" in d ? d.responseURL : O.headers.get("X-Request-URL");
                            var D = "response" in d ? d.response : d.responseText;
                            setTimeout(function() {
                                l(new P(D, O))
                            }, 0)
                        }, d.onerror = function() {
                            setTimeout(function() {
                                p(new TypeError("Network request failed"))
                            }, 0)
                        }, d.ontimeout = function() {
                            setTimeout(function() {
                                p(new TypeError("Network request failed"))
                            }, 0)
                        }, d.onabort = function() {
                            setTimeout(function() {
                                p(new f.DOMException("Aborted", "AbortError"))
                            }, 0)
                        };

                        function ue(O) {
                            try {
                                return O === "" && u.location.href ? u.location.href : O
                            } catch {
                                return O
                            }
                        }
                        d.open(m.method, ue(m.url), !0), m.credentials === "include" ? d.withCredentials = !0 : m.credentials === "omit" && (d.withCredentials = !1), "responseType" in d && (c.blob ? d.responseType = "blob" : c.arrayBuffer && m.headers.get("Content-Type") && m.headers.get("Content-Type").indexOf("application/octet-stream") !== -1 && (d.responseType = "arraybuffer")), i && typeof i.headers == "object" && !(i.headers instanceof b) ? Object.getOwnPropertyNames(i.headers).forEach(function(O) {
                            d.setRequestHeader(O, w(i.headers[O]))
                        }) : m.headers.forEach(function(O, D) {
                            d.setRequestHeader(D, O)
                        }), m.signal && (m.signal.addEventListener("abort", R), d.onreadystatechange = function() {
                            d.readyState === 4 && m.signal.removeEventListener("abort", R)
                        }), d.send(typeof m._bodyInit > "u" ? null : m._bodyInit)
                    })
                }
                return x.polyfill = !0, u.fetch || (u.fetch = x, u.Headers = b, u.Request = j, u.Response = P), f.Headers = b, f.Request = j, f.Response = P, f.fetch = x, f
            })({})
        })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
        var s = n.fetch ? n : r;
        t = s.fetch, t.default = s.fetch, t.fetch = s.fetch, t.Headers = s.Headers, t.Request = s.Request, t.Response = s.Response, o.exports = t
    }(H, H.exports)), H.exports
}(function(o, t) {
    var n;
    if (typeof fetch == "function" && (typeof q < "u" && q.fetch ? n = q.fetch : typeof window < "u" && window.fetch ? n = window.fetch : n = fetch), typeof ye < "u" && typeof window > "u") {
        var r = n || pe();
        r.default && (r = r.default), t.default = r, o.exports = t.default
    }
})(F, F.exports);
var Q = F.exports;
const Y = ce(Q),
    G = le({
        __proto__: null,
        default: Y
    }, [Q]);

function V(o, t) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(o);
        t && (r = r.filter(function(s) {
            return Object.getOwnPropertyDescriptor(o, s).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function z(o) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? V(Object(n), !0).forEach(function(r) {
            be(o, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach(function(r) {
            Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return o
}

function be(o, t, n) {
    return t = me(t), t in o ? Object.defineProperty(o, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[t] = n, o
}

function me(o) {
    var t = ve(o, "string");
    return A(t) == "symbol" ? t : t + ""
}

function ve(o, t) {
    if (A(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(o, t || "default");
        if (A(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(o)
}

function A(o) {
    "@babel/helpers - typeof";
    return A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, A(o)
}
var _;
typeof fetch == "function" && (typeof global < "u" && global.fetch ? _ = global.fetch : typeof window < "u" && window.fetch ? _ = window.fetch : _ = fetch);
var B;
J() && (typeof global < "u" && global.XMLHttpRequest ? B = global.XMLHttpRequest : typeof window < "u" && window.XMLHttpRequest && (B = window.XMLHttpRequest));
var U;
typeof ActiveXObject == "function" && (typeof global < "u" && global.ActiveXObject ? U = global.ActiveXObject : typeof window < "u" && window.ActiveXObject && (U = window.ActiveXObject));
!_ && G && !B && !U && (_ = Y || G);
typeof _ != "function" && (_ = void 0);
var C = function(t, n) {
        if (n && A(n) === "object") {
            var r = "";
            for (var s in n) r += "&" + encodeURIComponent(s) + "=" + encodeURIComponent(n[s]);
            if (!r) return t;
            t = t + (t.indexOf("?") !== -1 ? "&" : "?") + r.slice(1)
        }
        return t
    },
    W = function(t, n, r, s) {
        var a = function(c) {
            if (!c.ok) return r(c.statusText || "Error", {
                status: c.status
            });
            c.text().then(function(g) {
                r(null, {
                    status: c.status,
                    data: g
                })
            }).catch(r)
        };
        if (s) {
            var f = s(t, n);
            if (f instanceof Promise) {
                f.then(a).catch(r);
                return
            }
        }
        typeof fetch == "function" ? fetch(t, n).then(a).catch(r) : _(t, n).then(a).catch(r)
    },
    K = !1,
    ge = function(t, n, r, s) {
        t.queryStringParams && (n = C(n, t.queryStringParams));
        var a = z({}, typeof t.customHeaders == "function" ? t.customHeaders() : t.customHeaders);
        typeof window > "u" && typeof global < "u" && typeof global.process < "u" && global.process.versions && global.process.versions.node && (a["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")), r && (a["Content-Type"] = "application/json");
        var f = typeof t.requestOptions == "function" ? t.requestOptions(r) : t.requestOptions,
            u = z({
                method: r ? "POST" : "GET",
                body: r ? t.stringify(r) : void 0,
                headers: a
            }, K ? {} : f),
            c = typeof t.alternateFetch == "function" && t.alternateFetch.length >= 1 ? t.alternateFetch : void 0;
        try {
            W(n, u, s, c)
        } catch (g) {
            if (!f || Object.keys(f).length === 0 || !g.message || g.message.indexOf("not implemented") < 0) return s(g);
            try {
                Object.keys(f).forEach(function(h) {
                    delete u[h]
                }), W(n, u, s, c), K = !0
            } catch (h) {
                s(h)
            }
        }
    },
    we = function(t, n, r, s) {
        r && A(r) === "object" && (r = C("", r).slice(1)), t.queryStringParams && (n = C(n, t.queryStringParams));
        try {
            var a;
            B ? a = new B : a = new U("MSXML2.XMLHTTP.3.0"), a.open(r ? "POST" : "GET", n, 1), t.crossDomain || a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.withCredentials = !!t.withCredentials, r && a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.overrideMimeType && a.overrideMimeType("application/json");
            var f = t.customHeaders;
            if (f = typeof f == "function" ? f() : f, f)
                for (var u in f) a.setRequestHeader(u, f[u]);
            a.onreadystatechange = function() {
                a.readyState > 3 && s(a.status >= 400 ? a.statusText : null, {
                    status: a.status,
                    data: a.responseText
                })
            }, a.send(r)
        } catch (c) {
            console && console.log(c)
        }
    },
    Oe = function(t, n, r, s) {
        if (typeof r == "function" && (s = r, r = void 0), s = s || function() {}, _ && n.indexOf("file:") !== 0) return ge(t, n, r, s);
        if (J() || typeof ActiveXObject == "function") return we(t, n, r, s);
        s(new Error("No fetch and no xhr implementation found!"))
    };

function T(o) {
    "@babel/helpers - typeof";
    return T = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, T(o)
}

function k(o, t) {
    var n = Object.keys(o);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(o);
        t && (r = r.filter(function(s) {
            return Object.getOwnPropertyDescriptor(o, s).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function M(o) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? k(Object(n), !0).forEach(function(r) {
            Z(o, r, n[r])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach(function(r) {
            Object.defineProperty(o, r, Object.getOwnPropertyDescriptor(n, r))
        })
    }
    return o
}

function Pe(o, t) {
    if (!(o instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _e(o, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(o, ee(r.key), r)
    }
}

function je(o, t, n) {
    return t && _e(o.prototype, t), Object.defineProperty(o, "prototype", {
        writable: !1
    }), o
}

function Z(o, t, n) {
    return t = ee(t), t in o ? Object.defineProperty(o, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[t] = n, o
}

function ee(o) {
    var t = Ae(o, "string");
    return T(t) == "symbol" ? t : t + ""
}

function Ae(o, t) {
    if (T(o) != "object" || !o) return o;
    var n = o[Symbol.toPrimitive];
    if (n !== void 0) {
        var r = n.call(o, t || "default");
        if (T(r) != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(o)
}
var Ee = function() {
        return {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
            addPath: "/locales/add/{{lng}}/{{ns}}",
            parse: function(n) {
                return JSON.parse(n)
            },
            stringify: JSON.stringify,
            parsePayload: function(n, r, s) {
                return Z({}, r, s || "")
            },
            parseLoadPayload: function(n, r) {},
            request: Oe,
            reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
            customHeaders: {},
            queryStringParams: {},
            crossDomain: !1,
            withCredentials: !1,
            overrideMimeType: !1,
            requestOptions: {
                mode: "cors",
                credentials: "same-origin",
                cache: "default"
            }
        }
    },
    Te = function() {
        function o(t) {
            var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            Pe(this, o), this.services = t, this.options = n, this.allOptions = r, this.type = "backend", this.init(t, n, r)
        }
        return je(o, [{
            key: "init",
            value: function(n) {
                var r = this,
                    s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                    a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                if (this.services = n, this.options = M(M(M({}, Ee()), this.options || {}), s), this.allOptions = a, this.services && this.options.reloadInterval) {
                    var f = setInterval(function() {
                        return r.reload()
                    }, this.options.reloadInterval);
                    T(f) === "object" && typeof f.unref == "function" && f.unref()
                }
            }
        }, {
            key: "readMulti",
            value: function(n, r, s) {
                this._readAny(n, n, r, r, s)
            }
        }, {
            key: "read",
            value: function(n, r, s) {
                this._readAny([n], n, [r], r, s)
            }
        }, {
            key: "_readAny",
            value: function(n, r, s, a, f) {
                var u = this,
                    c = this.options.loadPath;
                typeof this.options.loadPath == "function" && (c = this.options.loadPath(n, s)), c = he(c), c.then(function(g) {
                    if (!g) return f(null, {});
                    var h = u.services.interpolator.interpolate(g, {
                        lng: n.join("+"),
                        ns: s.join("+")
                    });
                    u.loadUrl(h, f, r, a)
                })
            }
        }, {
            key: "loadUrl",
            value: function(n, r, s, a) {
                var f = this,
                    u = typeof s == "string" ? [s] : s,
                    c = typeof a == "string" ? [a] : a,
                    g = this.options.parseLoadPayload(u, c);
                this.options.request(this.options, n, g, function(h, y) {
                    if (y && (y.status >= 500 && y.status < 600 || !y.status)) return r("failed loading " + n + "; status code: " + y.status, !0);
                    if (y && y.status >= 400 && y.status < 500) return r("failed loading " + n + "; status code: " + y.status, !1);
                    if (!y && h && h.message && h.message.indexOf("Failed to fetch") > -1) return r("failed loading " + n + ": " + h.message, !0);
                    if (h) return r(h, !1);
                    var v, w;
                    try {
                        typeof y.data == "string" ? v = f.options.parse(y.data, s, a) : v = y.data
                    } catch {
                        w = "failed parsing " + n + " to json"
                    }
                    if (w) return r(w, !1);
                    r(null, v)
                })
            }
        }, {
            key: "create",
            value: function(n, r, s, a, f) {
                var u = this;
                if (this.options.addPath) {
                    typeof n == "string" && (n = [n]);
                    var c = this.options.parsePayload(r, s, a),
                        g = 0,
                        h = [],
                        y = [];
                    n.forEach(function(v) {
                        var w = u.options.addPath;
                        typeof u.options.addPath == "function" && (w = u.options.addPath(v, r));
                        var E = u.services.interpolator.interpolate(w, {
                            lng: v,
                            ns: r
                        });
                        u.options.request(u.options, E, c, function(b, S) {
                            g += 1, h.push(b), y.push(S), g === n.length && typeof f == "function" && f(h, y)
                        })
                    })
                }
            }
        }, {
            key: "reload",
            value: function() {
                var n = this,
                    r = this.services,
                    s = r.backendConnector,
                    a = r.languageUtils,
                    f = r.logger,
                    u = s.language;
                if (!(u && u.toLowerCase() === "cimode")) {
                    var c = [],
                        g = function(y) {
                            var v = a.toResolveHierarchy(y);
                            v.forEach(function(w) {
                                c.indexOf(w) < 0 && c.push(w)
                            })
                        };
                    g(u), this.allOptions.preload && this.allOptions.preload.forEach(function(h) {
                        return g(h)
                    }), c.forEach(function(h) {
                        n.allOptions.ns.forEach(function(y) {
                            s.read(h, y, "read", null, null, function(v, w) {
                                v && f.warn("loading namespace ".concat(y, " for language ").concat(h, " failed"), v), !v && w && f.log("loaded namespace ".concat(y, " for language ").concat(h), w), s.loaded("".concat(h, "|").concat(y), v, w)
                            })
                        })
                    })
                }
            }
        }])
    }();
Te.type = "backend";
export {
    Te as B
};
//# sourceMappingURL=i18next-http-backend-Dv63VUCH.js.map