const ue = {
    type: "logger",
    log(i) {
        this.output("log", i)
    },
    warn(i) {
        this.output("warn", i)
    },
    error(i) {
        this.output("error", i)
    },
    output(i, e) {
        console && console[i] && console[i].apply(console, e)
    }
};
class U {
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.init(e, t)
    }
    init(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.prefix = t.prefix || "i18next:", this.logger = e || ue, this.options = t, this.debug = t.debug
    }
    log() {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return this.forward(t, "log", "", !0)
    }
    warn() {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return this.forward(t, "warn", "", !0)
    }
    error() {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return this.forward(t, "error", "")
    }
    deprecate() {
        for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
    }
    forward(e, t, s, n) {
        return n && !this.debug ? null : (typeof e[0] == "string" && (e[0] = `${s}${this.prefix} ${e[0]}`), this.logger[t](e))
    }
    create(e) {
        return new U(this.logger, {
            prefix: `${this.prefix}:${e}:`,
            ...this.options
        })
    }
    clone(e) {
        return e = e || this.options, e.prefix = e.prefix || this.prefix, new U(this.logger, e)
    }
}
var N = new U;
class J {
    constructor() {
        this.observers = {}
    }
    on(e, t) {
        return e.split(" ").forEach(s => {
            this.observers[s] || (this.observers[s] = new Map);
            const n = this.observers[s].get(t) || 0;
            this.observers[s].set(t, n + 1)
        }), this
    }
    off(e, t) {
        if (this.observers[e]) {
            if (!t) {
                delete this.observers[e];
                return
            }
            this.observers[e].delete(t)
        }
    }
    emit(e) {
        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
        this.observers[e] && Array.from(this.observers[e].entries()).forEach(a => {
            let [o, l] = a;
            for (let f = 0; f < l; f++) o(...s)
        }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(a => {
            let [o, l] = a;
            for (let f = 0; f < l; f++) o.apply(o, [e, ...s])
        })
    }
}

function j() {
    let i, e;
    const t = new Promise((s, n) => {
        i = s, e = n
    });
    return t.resolve = i, t.reject = e, t
}

function Z(i) {
    return i == null ? "" : "" + i
}

function fe(i, e, t) {
    i.forEach(s => {
        e[s] && (t[s] = e[s])
    })
}
const ge = /###/g;

function I(i, e, t) {
    function s(o) {
        return o && o.indexOf("###") > -1 ? o.replace(ge, ".") : o
    }

    function n() {
        return !i || typeof i == "string"
    }
    const r = typeof e != "string" ? e : e.split(".");
    let a = 0;
    for (; a < r.length - 1;) {
        if (n()) return {};
        const o = s(r[a]);
        !i[o] && t && (i[o] = new t), Object.prototype.hasOwnProperty.call(i, o) ? i = i[o] : i = {}, ++a
    }
    return n() ? {} : {
        obj: i,
        k: s(r[a])
    }
}

function X(i, e, t) {
    const {
        obj: s,
        k: n
    } = I(i, e, Object);
    if (s !== void 0 || e.length === 1) {
        s[n] = t;
        return
    }
    let r = e[e.length - 1],
        a = e.slice(0, e.length - 1),
        o = I(i, a, Object);
    for (; o.obj === void 0 && a.length;) r = `${a[a.length-1]}.${r}`, a = a.slice(0, a.length - 1), o = I(i, a, Object), o && o.obj && typeof o.obj[`${o.k}.${r}`] < "u" && (o.obj = void 0);
    o.obj[`${o.k}.${r}`] = t
}

function he(i, e, t, s) {
    const {
        obj: n,
        k: r
    } = I(i, e, Object);
    n[r] = n[r] || [], n[r].push(t)
}

function M(i, e) {
    const {
        obj: t,
        k: s
    } = I(i, e);
    if (t) return t[s]
}

function ce(i, e, t) {
    const s = M(i, t);
    return s !== void 0 ? s : M(e, t)
}

function re(i, e, t) {
    for (const s in e) s !== "__proto__" && s !== "constructor" && (s in i ? typeof i[s] == "string" || i[s] instanceof String || typeof e[s] == "string" || e[s] instanceof String ? t && (i[s] = e[s]) : re(i[s], e[s], t) : i[s] = e[s]);
    return i
}

function C(i) {
    return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
}
var de = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;"
};

function pe(i) {
    return typeof i == "string" ? i.replace(/[&<>"'\/]/g, e => de[e]) : i
}
class me {
    constructor(e) {
        this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
    }
    getRegExp(e) {
        const t = this.regExpMap.get(e);
        if (t !== void 0) return t;
        const s = new RegExp(e);
        return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, s), this.regExpQueue.push(e), s
    }
}
const ye = [" ", ",", "?", "!", ";"],
    be = new me(20);

function xe(i, e, t) {
    e = e || "", t = t || "";
    const s = ye.filter(a => e.indexOf(a) < 0 && t.indexOf(a) < 0);
    if (s.length === 0) return !0;
    const n = be.getRegExp(`(${s.map(a=>a==="?"?"\\?":a).join("|")})`);
    let r = !n.test(i);
    if (!r) {
        const a = i.indexOf(t);
        a > 0 && !n.test(i.substring(0, a)) && (r = !0)
    }
    return r
}

function W(i, e) {
    let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
    if (!i) return;
    if (i[e]) return i[e];
    const s = e.split(t);
    let n = i;
    for (let r = 0; r < s.length;) {
        if (!n || typeof n != "object") return;
        let a, o = "";
        for (let l = r; l < s.length; ++l)
            if (l !== r && (o += t), o += s[l], a = n[o], a !== void 0) {
                if (["string", "number", "boolean"].indexOf(typeof a) > -1 && l < s.length - 1) continue;
                r += l - r + 1;
                break
            }
        n = a
    }
    return n
}

function H(i) {
    return i && i.indexOf("_") > 0 ? i.replace("_", "-") : i
}
class q extends J {
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            ns: ["translation"],
            defaultNS: "translation"
        };
        super(), this.data = e || {}, this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0)
    }
    addNamespaces(e) {
        this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
    }
    removeNamespaces(e) {
        const t = this.options.ns.indexOf(e);
        t > -1 && this.options.ns.splice(t, 1)
    }
    getResource(e, t, s) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        const r = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
            a = n.ignoreJSONStructure !== void 0 ? n.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let o;
        e.indexOf(".") > -1 ? o = e.split(".") : (o = [e, t], s && (Array.isArray(s) ? o.push(...s) : typeof s == "string" && r ? o.push(...s.split(r)) : o.push(s)));
        const l = M(this.data, o);
        return !l && !t && !s && e.indexOf(".") > -1 && (e = o[0], t = o[1], s = o.slice(2).join(".")), l || !a || typeof s != "string" ? l : W(this.data && this.data[e] && this.data[e][t], s, r)
    }
    addResource(e, t, s, n) {
        let r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
            silent: !1
        };
        const a = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
        let o = [e, t];
        s && (o = o.concat(a ? s.split(a) : s)), e.indexOf(".") > -1 && (o = e.split("."), n = t, t = o[1]), this.addNamespaces(t), X(this.data, o, n), r.silent || this.emit("added", e, t, s, n)
    }
    addResources(e, t, s) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
            silent: !1
        };
        for (const r in s)(typeof s[r] == "string" || Array.isArray(s[r])) && this.addResource(e, t, r, s[r], {
            silent: !0
        });
        n.silent || this.emit("added", e, t, s)
    }
    addResourceBundle(e, t, s, n, r) {
        let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
                silent: !1,
                skipCopy: !1
            },
            o = [e, t];
        e.indexOf(".") > -1 && (o = e.split("."), n = s, s = t, t = o[1]), this.addNamespaces(t);
        let l = M(this.data, o) || {};
        a.skipCopy || (s = JSON.parse(JSON.stringify(s))), n ? re(l, s, r) : l = { ...l,
            ...s
        }, X(this.data, o, l), a.silent || this.emit("added", e, t, s)
    }
    removeResourceBundle(e, t) {
        this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
    }
    hasResourceBundle(e, t) {
        return this.getResource(e, t) !== void 0
    }
    getResourceBundle(e, t) {
        return t || (t = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? { ...this.getResource(e, t)
        } : this.getResource(e, t)
    }
    getDataByLanguage(e) {
        return this.data[e]
    }
    hasLanguageSomeTranslations(e) {
        const t = this.getDataByLanguage(e);
        return !!(t && Object.keys(t) || []).find(n => t[n] && Object.keys(t[n]).length > 0)
    }
    toJSON() {
        return this.data
    }
}
var ae = {
    processors: {},
    addPostProcessor(i) {
        this.processors[i.name] = i
    },
    handle(i, e, t, s, n) {
        return i.forEach(r => {
            this.processors[r] && (e = this.processors[r].process(e, t, s, n))
        }), e
    }
};
const _ = {};
class z extends J {
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        super(), fe(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = N.create("translator")
    }
    changeLanguage(e) {
        e && (this.language = e)
    }
    exists(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        };
        if (e == null) return !1;
        const s = this.resolve(e, t);
        return s && s.res !== void 0
    }
    extractFromKey(e, t) {
        let s = t.nsSeparator !== void 0 ? t.nsSeparator : this.options.nsSeparator;
        s === void 0 && (s = ":");
        const n = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator;
        let r = t.ns || this.options.defaultNS || [];
        const a = s && e.indexOf(s) > -1,
            o = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !xe(e, s, n);
        if (a && !o) {
            const l = e.match(this.interpolator.nestingRegexp);
            if (l && l.length > 0) return {
                key: e,
                namespaces: r
            };
            const f = e.split(s);
            (s !== n || s === n && this.options.ns.indexOf(f[0]) > -1) && (r = f.shift()), e = f.join(n)
        }
        return typeof r == "string" && (r = [r]), {
            key: e,
            namespaces: r
        }
    }
    translate(e, t, s) {
        if (typeof t != "object" && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), typeof t == "object" && (t = { ...t
            }), t || (t = {}), e == null) return "";
        Array.isArray(e) || (e = [String(e)]);
        const n = t.returnDetails !== void 0 ? t.returnDetails : this.options.returnDetails,
            r = t.keySeparator !== void 0 ? t.keySeparator : this.options.keySeparator,
            {
                key: a,
                namespaces: o
            } = this.extractFromKey(e[e.length - 1], t),
            l = o[o.length - 1],
            f = t.lng || this.language,
            g = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (f && f.toLowerCase() === "cimode") {
            if (g) {
                const y = t.nsSeparator || this.options.nsSeparator;
                return n ? {
                    res: `${l}${y}${a}`,
                    usedKey: a,
                    exactUsedKey: a,
                    usedLng: f,
                    usedNS: l,
                    usedParams: this.getUsedParamsDetails(t)
                } : `${l}${y}${a}`
            }
            return n ? {
                res: a,
                usedKey: a,
                exactUsedKey: a,
                usedLng: f,
                usedNS: l,
                usedParams: this.getUsedParamsDetails(t)
            } : a
        }
        const h = this.resolve(e, t);
        let u = h && h.res;
        const d = h && h.usedKey || a,
            c = h && h.exactUsedKey || a,
            m = Object.prototype.toString.apply(u),
            p = ["[object Number]", "[object Function]", "[object RegExp]"],
            x = t.joinArrays !== void 0 ? t.joinArrays : this.options.joinArrays,
            b = !this.i18nFormat || this.i18nFormat.handleAsObject;
        if (b && u && (typeof u != "string" && typeof u != "boolean" && typeof u != "number") && p.indexOf(m) < 0 && !(typeof x == "string" && Array.isArray(u))) {
            if (!t.returnObjects && !this.options.returnObjects) {
                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                const y = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(d, u, { ...t,
                    ns: o
                }) : `key '${a} (${this.language})' returned an object instead of string.`;
                return n ? (h.res = y, h.usedParams = this.getUsedParamsDetails(t), h) : y
            }
            if (r) {
                const y = Array.isArray(u),
                    O = y ? [] : {},
                    w = y ? c : d;
                for (const S in u)
                    if (Object.prototype.hasOwnProperty.call(u, S)) {
                        const V = `${w}${r}${S}`;
                        O[S] = this.translate(V, { ...t,
                            joinArrays: !1,
                            ns: o
                        }), O[S] === V && (O[S] = u[S])
                    }
                u = O
            }
        } else if (b && typeof x == "string" && Array.isArray(u)) u = u.join(x), u && (u = this.extendTranslation(u, e, t, s));
        else {
            let y = !1,
                O = !1;
            const w = t.count !== void 0 && typeof t.count != "string",
                S = z.hasDefaultValue(t),
                V = w ? this.pluralResolver.getSuffix(f, t.count, t) : "",
                oe = t.ordinal && w ? this.pluralResolver.getSuffix(f, t.count, {
                    ordinal: !1
                }) : "",
                Q = w && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                $ = Q && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${V}`] || t[`defaultValue${oe}`] || t.defaultValue;
            !this.isValidLookup(u) && S && (y = !0, u = $), this.isValidLookup(u) || (O = !0, u = a);
            const le = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && O ? void 0 : u,
                k = S && $ !== u && this.options.updateMissing;
            if (O || y || k) {
                if (this.logger.log(k ? "updateKey" : "missingKey", f, l, a, k ? $ : u), r) {
                    const L = this.resolve(a, { ...t,
                        keySeparator: !1
                    });
                    L && L.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                }
                let E = [];
                const T = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                if (this.options.saveMissingTo === "fallback" && T && T[0])
                    for (let L = 0; L < T.length; L++) E.push(T[L]);
                else this.options.saveMissingTo === "all" ? E = this.languageUtils.toResolveHierarchy(t.lng || this.language) : E.push(t.lng || this.language);
                const Y = (L, R, F) => {
                    const G = S && F !== u ? F : le;
                    this.options.missingKeyHandler ? this.options.missingKeyHandler(L, l, R, G, k, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(L, l, R, G, k, t), this.emit("missingKey", L, l, R, u)
                };
                this.options.saveMissing && (this.options.saveMissingPlurals && w ? E.forEach(L => {
                    const R = this.pluralResolver.getSuffixes(L, t);
                    Q && t[`defaultValue${this.options.pluralSeparator}zero`] && R.indexOf(`${this.options.pluralSeparator}zero`) < 0 && R.push(`${this.options.pluralSeparator}zero`), R.forEach(F => {
                        Y([L], a + F, t[`defaultValue${F}`] || $)
                    })
                }) : Y(E, a, $))
            }
            u = this.extendTranslation(u, e, t, h, s), O && u === a && this.options.appendNamespaceToMissingKey && (u = `${l}:${a}`), (O || y) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? u = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a, y ? u : void 0) : u = this.options.parseMissingKeyHandler(u))
        }
        return n ? (h.res = u, h.usedParams = this.getUsedParamsDetails(t), h) : u
    }
    extendTranslation(e, t, s, n, r) {
        var a = this;
        if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, { ...this.options.interpolation.defaultVariables,
            ...s
        }, s.lng || this.language || n.usedLng, n.usedNS, n.usedKey, {
            resolved: n
        });
        else if (!s.skipInterpolation) {
            s.interpolation && this.interpolator.init({ ...s,
                interpolation: { ...this.options.interpolation,
                    ...s.interpolation
                }
            });
            const f = typeof e == "string" && (s && s.interpolation && s.interpolation.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let g;
            if (f) {
                const u = e.match(this.interpolator.nestingRegexp);
                g = u && u.length
            }
            let h = s.replace && typeof s.replace != "string" ? s.replace : s;
            if (this.options.interpolation.defaultVariables && (h = { ...this.options.interpolation.defaultVariables,
                    ...h
                }), e = this.interpolator.interpolate(e, h, s.lng || this.language, s), f) {
                const u = e.match(this.interpolator.nestingRegexp),
                    d = u && u.length;
                g < d && (s.nest = !1)
            }!s.lng && this.options.compatibilityAPI !== "v1" && n && n.res && (s.lng = n.usedLng), s.nest !== !1 && (e = this.interpolator.nest(e, function() {
                for (var u = arguments.length, d = new Array(u), c = 0; c < u; c++) d[c] = arguments[c];
                return r && r[0] === d[0] && !s.context ? (a.logger.warn(`It seems you are nesting recursively key: ${d[0]} in key: ${t[0]}`), null) : a.translate(...d, t)
            }, s)), s.interpolation && this.interpolator.reset()
        }
        const o = s.postProcess || this.options.postProcess,
            l = typeof o == "string" ? [o] : o;
        return e != null && l && l.length && s.applyPostProcessor !== !1 && (e = ae.handle(l, e, t, this.options && this.options.postProcessPassResolved ? {
            i18nResolved: { ...n,
                usedParams: this.getUsedParamsDetails(s)
            },
            ...s
        } : s, this)), e
    }
    resolve(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            s, n, r, a, o;
        return typeof e == "string" && (e = [e]), e.forEach(l => {
            if (this.isValidLookup(s)) return;
            const f = this.extractFromKey(l, t),
                g = f.key;
            n = g;
            let h = f.namespaces;
            this.options.fallbackNS && (h = h.concat(this.options.fallbackNS));
            const u = t.count !== void 0 && typeof t.count != "string",
                d = u && !t.ordinal && t.count === 0 && this.pluralResolver.shouldUseIntlApi(),
                c = t.context !== void 0 && (typeof t.context == "string" || typeof t.context == "number") && t.context !== "",
                m = t.lngs ? t.lngs : this.languageUtils.toResolveHierarchy(t.lng || this.language, t.fallbackLng);
            h.forEach(p => {
                this.isValidLookup(s) || (o = p, !_[`${m[0]}-${p}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (_[`${m[0]}-${p}`] = !0, this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach(x => {
                    if (this.isValidLookup(s)) return;
                    a = x;
                    const b = [g];
                    if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(b, g, x, p, t);
                    else {
                        let y;
                        u && (y = this.pluralResolver.getSuffix(x, t.count, t));
                        const O = `${this.options.pluralSeparator}zero`,
                            w = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (u && (b.push(g + y), t.ordinal && y.indexOf(w) === 0 && b.push(g + y.replace(w, this.options.pluralSeparator)), d && b.push(g + O)), c) {
                            const S = `${g}${this.options.contextSeparator}${t.context}`;
                            b.push(S), u && (b.push(S + y), t.ordinal && y.indexOf(w) === 0 && b.push(S + y.replace(w, this.options.pluralSeparator)), d && b.push(S + O))
                        }
                    }
                    let D;
                    for (; D = b.pop();) this.isValidLookup(s) || (r = D, s = this.getResource(x, p, D, t))
                }))
            })
        }), {
            res: s,
            usedKey: n,
            exactUsedKey: r,
            usedLng: a,
            usedNS: o
        }
    }
    isValidLookup(e) {
        return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "")
    }
    getResource(e, t, s) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, s, n) : this.resourceStore.getResource(e, t, s, n)
    }
    getUsedParamsDetails() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        const t = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"],
            s = e.replace && typeof e.replace != "string";
        let n = s ? e.replace : e;
        if (s && typeof e.count < "u" && (n.count = e.count), this.options.interpolation.defaultVariables && (n = { ...this.options.interpolation.defaultVariables,
                ...n
            }), !s) {
            n = { ...n
            };
            for (const r of t) delete n[r]
        }
        return n
    }
    static hasDefaultValue(e) {
        const t = "defaultValue";
        for (const s in e)
            if (Object.prototype.hasOwnProperty.call(e, s) && t === s.substring(0, t.length) && e[s] !== void 0) return !0;
        return !1
    }
}

function B(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}
class ee {
    constructor(e) {
        this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = N.create("languageUtils")
    }
    getScriptPartFromCode(e) {
        if (e = H(e), !e || e.indexOf("-") < 0) return null;
        const t = e.split("-");
        return t.length === 2 || (t.pop(), t[t.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(t.join("-"))
    }
    getLanguagePartFromCode(e) {
        if (e = H(e), !e || e.indexOf("-") < 0) return e;
        const t = e.split("-");
        return this.formatLanguageCode(t[0])
    }
    formatLanguageCode(e) {
        if (typeof e == "string" && e.indexOf("-") > -1) {
            const t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
            let s = e.split("-");
            return this.options.lowerCaseLng ? s = s.map(n => n.toLowerCase()) : s.length === 2 ? (s[0] = s[0].toLowerCase(), s[1] = s[1].toUpperCase(), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = B(s[1].toLowerCase()))) : s.length === 3 && (s[0] = s[0].toLowerCase(), s[1].length === 2 && (s[1] = s[1].toUpperCase()), s[0] !== "sgn" && s[2].length === 2 && (s[2] = s[2].toUpperCase()), t.indexOf(s[1].toLowerCase()) > -1 && (s[1] = B(s[1].toLowerCase())), t.indexOf(s[2].toLowerCase()) > -1 && (s[2] = B(s[2].toLowerCase()))), s.join("-")
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
    }
    isSupportedCode(e) {
        return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
    }
    getBestMatchFromCodes(e) {
        if (!e) return null;
        let t;
        return e.forEach(s => {
            if (t) return;
            const n = this.formatLanguageCode(s);
            (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n)
        }), !t && this.options.supportedLngs && e.forEach(s => {
            if (t) return;
            const n = this.getLanguagePartFromCode(s);
            if (this.isSupportedCode(n)) return t = n;
            t = this.options.supportedLngs.find(r => {
                if (r === n) return r;
                if (!(r.indexOf("-") < 0 && n.indexOf("-") < 0) && (r.indexOf("-") > 0 && n.indexOf("-") < 0 && r.substring(0, r.indexOf("-")) === n || r.indexOf(n) === 0 && n.length > 1)) return r
            })
        }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t
    }
    getFallbackCodes(e, t) {
        if (!e) return [];
        if (typeof e == "function" && (e = e(t)), typeof e == "string" && (e = [e]), Array.isArray(e)) return e;
        if (!t) return e.default || [];
        let s = e[t];
        return s || (s = e[this.getScriptPartFromCode(t)]), s || (s = e[this.formatLanguageCode(t)]), s || (s = e[this.getLanguagePartFromCode(t)]), s || (s = e.default), s || []
    }
    toResolveHierarchy(e, t) {
        const s = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
            n = [],
            r = a => {
                a && (this.isSupportedCode(a) ? n.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))
            };
        return typeof e == "string" && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && r(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && r(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && r(this.getLanguagePartFromCode(e))) : typeof e == "string" && r(this.formatLanguageCode(e)), s.forEach(a => {
            n.indexOf(a) < 0 && r(this.formatLanguageCode(a))
        }), n
    }
}
let Se = [{
        lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
        nr: [1, 2],
        fc: 1
    }, {
        lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
        nr: [1, 2],
        fc: 2
    }, {
        lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
        nr: [1],
        fc: 3
    }, {
        lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
        nr: [1, 2, 5],
        fc: 4
    }, {
        lngs: ["ar"],
        nr: [0, 1, 2, 3, 11, 100],
        fc: 5
    }, {
        lngs: ["cs", "sk"],
        nr: [1, 2, 5],
        fc: 6
    }, {
        lngs: ["csb", "pl"],
        nr: [1, 2, 5],
        fc: 7
    }, {
        lngs: ["cy"],
        nr: [1, 2, 3, 8],
        fc: 8
    }, {
        lngs: ["fr"],
        nr: [1, 2],
        fc: 9
    }, {
        lngs: ["ga"],
        nr: [1, 2, 3, 7, 11],
        fc: 10
    }, {
        lngs: ["gd"],
        nr: [1, 2, 3, 20],
        fc: 11
    }, {
        lngs: ["is"],
        nr: [1, 2],
        fc: 12
    }, {
        lngs: ["jv"],
        nr: [0, 1],
        fc: 13
    }, {
        lngs: ["kw"],
        nr: [1, 2, 3, 4],
        fc: 14
    }, {
        lngs: ["lt"],
        nr: [1, 2, 10],
        fc: 15
    }, {
        lngs: ["lv"],
        nr: [1, 2, 0],
        fc: 16
    }, {
        lngs: ["mk"],
        nr: [1, 2],
        fc: 17
    }, {
        lngs: ["mnk"],
        nr: [0, 1, 2],
        fc: 18
    }, {
        lngs: ["mt"],
        nr: [1, 2, 11, 20],
        fc: 19
    }, {
        lngs: ["or"],
        nr: [2, 1],
        fc: 2
    }, {
        lngs: ["ro"],
        nr: [1, 2, 20],
        fc: 20
    }, {
        lngs: ["sl"],
        nr: [5, 1, 2, 3],
        fc: 21
    }, {
        lngs: ["he", "iw"],
        nr: [1, 2, 20, 21],
        fc: 22
    }],
    ve = {
        1: function(i) {
            return +(i > 1)
        },
        2: function(i) {
            return +(i != 1)
        },
        3: function(i) {
            return 0
        },
        4: function(i) {
            return i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2
        },
        5: function(i) {
            return i == 0 ? 0 : i == 1 ? 1 : i == 2 ? 2 : i % 100 >= 3 && i % 100 <= 10 ? 3 : i % 100 >= 11 ? 4 : 5
        },
        6: function(i) {
            return i == 1 ? 0 : i >= 2 && i <= 4 ? 1 : 2
        },
        7: function(i) {
            return i == 1 ? 0 : i % 10 >= 2 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2
        },
        8: function(i) {
            return i == 1 ? 0 : i == 2 ? 1 : i != 8 && i != 11 ? 2 : 3
        },
        9: function(i) {
            return +(i >= 2)
        },
        10: function(i) {
            return i == 1 ? 0 : i == 2 ? 1 : i < 7 ? 2 : i < 11 ? 3 : 4
        },
        11: function(i) {
            return i == 1 || i == 11 ? 0 : i == 2 || i == 12 ? 1 : i > 2 && i < 20 ? 2 : 3
        },
        12: function(i) {
            return +(i % 10 != 1 || i % 100 == 11)
        },
        13: function(i) {
            return +(i !== 0)
        },
        14: function(i) {
            return i == 1 ? 0 : i == 2 ? 1 : i == 3 ? 2 : 3
        },
        15: function(i) {
            return i % 10 == 1 && i % 100 != 11 ? 0 : i % 10 >= 2 && (i % 100 < 10 || i % 100 >= 20) ? 1 : 2
        },
        16: function(i) {
            return i % 10 == 1 && i % 100 != 11 ? 0 : i !== 0 ? 1 : 2
        },
        17: function(i) {
            return i == 1 || i % 10 == 1 && i % 100 != 11 ? 0 : 1
        },
        18: function(i) {
            return i == 0 ? 0 : i == 1 ? 1 : 2
        },
        19: function(i) {
            return i == 1 ? 0 : i == 0 || i % 100 > 1 && i % 100 < 11 ? 1 : i % 100 > 10 && i % 100 < 20 ? 2 : 3
        },
        20: function(i) {
            return i == 1 ? 0 : i == 0 || i % 100 > 0 && i % 100 < 20 ? 1 : 2
        },
        21: function(i) {
            return i % 100 == 1 ? 1 : i % 100 == 2 ? 2 : i % 100 == 3 || i % 100 == 4 ? 3 : 0
        },
        22: function(i) {
            return i == 1 ? 0 : i == 2 ? 1 : (i < 0 || i > 10) && i % 10 == 0 ? 2 : 3
        }
    };
const Oe = ["v1", "v2", "v3"],
    Le = ["v4"],
    te = {
        zero: 0,
        one: 1,
        two: 2,
        few: 3,
        many: 4,
        other: 5
    };

function we() {
    const i = {};
    return Se.forEach(e => {
        e.lngs.forEach(t => {
            i[t] = {
                numbers: e.nr,
                plurals: ve[e.fc]
            }
        })
    }), i
}
class Ne {
    constructor(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        this.languageUtils = e, this.options = t, this.logger = N.create("pluralResolver"), (!this.options.compatibilityJSON || Le.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = we()
    }
    addRule(e, t) {
        this.rules[e] = t
    }
    getRule(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.shouldUseIntlApi()) try {
            return new Intl.PluralRules(H(e === "dev" ? "en" : e), {
                type: t.ordinal ? "ordinal" : "cardinal"
            })
        } catch {
            return
        }
        return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
    }
    needsPlural(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const s = this.getRule(e, t);
        return this.shouldUseIntlApi() ? s && s.resolvedOptions().pluralCategories.length > 1 : s && s.numbers.length > 1
    }
    getPluralFormsOfKey(e, t) {
        let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return this.getSuffixes(e, s).map(n => `${t}${n}`)
    }
    getSuffixes(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const s = this.getRule(e, t);
        return s ? this.shouldUseIntlApi() ? s.resolvedOptions().pluralCategories.sort((n, r) => te[n] - te[r]).map(n => `${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${n}`) : s.numbers.map(n => this.getSuffix(e, n, t)) : []
    }
    getSuffix(e, t) {
        let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        const n = this.getRule(e, s);
        return n ? this.shouldUseIntlApi() ? `${this.options.prepend}${s.ordinal?`ordinal${this.options.prepend}`:""}${n.select(t)}` : this.getSuffixRetroCompatible(n, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
    }
    getSuffixRetroCompatible(e, t) {
        const s = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t));
        let n = e.numbers[s];
        this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 && (n === 2 ? n = "plural" : n === 1 && (n = ""));
        const r = () => this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString();
        return this.options.compatibilityJSON === "v1" ? n === 1 ? "" : typeof n == "number" ? `_plural_${n.toString()}` : r() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && e.numbers.length === 2 && e.numbers[0] === 1 ? r() : this.options.prepend && s.toString() ? this.options.prepend + s.toString() : s.toString()
    }
    shouldUseIntlApi() {
        return !Oe.includes(this.options.compatibilityJSON)
    }
}

function se(i, e, t) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
        n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
        r = ce(i, e, t);
    return !r && n && typeof t == "string" && (r = W(i, t, s), r === void 0 && (r = W(e, t, s))), r
}
class Re {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = N.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (t => t), this.init(e)
    }
    init() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        e.interpolation || (e.interpolation = {
            escapeValue: !0
        });
        const {
            escape: t,
            escapeValue: s,
            useRawValueToEscape: n,
            prefix: r,
            prefixEscaped: a,
            suffix: o,
            suffixEscaped: l,
            formatSeparator: f,
            unescapeSuffix: g,
            unescapePrefix: h,
            nestingPrefix: u,
            nestingPrefixEscaped: d,
            nestingSuffix: c,
            nestingSuffixEscaped: m,
            nestingOptionsSeparator: p,
            maxReplaces: x,
            alwaysFormat: b
        } = e.interpolation;
        this.escape = t !== void 0 ? t : pe, this.escapeValue = s !== void 0 ? s : !0, this.useRawValueToEscape = n !== void 0 ? n : !1, this.prefix = r ? C(r) : a || "{{", this.suffix = o ? C(o) : l || "}}", this.formatSeparator = f || ",", this.unescapePrefix = g ? "" : h || "-", this.unescapeSuffix = this.unescapePrefix ? "" : g || "", this.nestingPrefix = u ? C(u) : d || C("$t("), this.nestingSuffix = c ? C(c) : m || C(")"), this.nestingOptionsSeparator = p || ",", this.maxReplaces = x || 1e3, this.alwaysFormat = b !== void 0 ? b : !1, this.resetRegExp()
    }
    reset() {
        this.options && this.init(this.options)
    }
    resetRegExp() {
        const e = (t, s) => t && t.source === s ? (t.lastIndex = 0, t) : new RegExp(s, "g");
        this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
    }
    interpolate(e, t, s, n) {
        let r, a, o;
        const l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

        function f(c) {
            return c.replace(/\$/g, "$$$$")
        }
        const g = c => {
            if (c.indexOf(this.formatSeparator) < 0) {
                const b = se(t, l, c, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(b, void 0, s, { ...n,
                    ...t,
                    interpolationkey: c
                }) : b
            }
            const m = c.split(this.formatSeparator),
                p = m.shift().trim(),
                x = m.join(this.formatSeparator).trim();
            return this.format(se(t, l, p, this.options.keySeparator, this.options.ignoreJSONStructure), x, s, { ...n,
                ...t,
                interpolationkey: p
            })
        };
        this.resetRegExp();
        const h = n && n.missingInterpolationHandler || this.options.missingInterpolationHandler,
            u = n && n.interpolation && n.interpolation.skipOnVariables !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        return [{
            regex: this.regexpUnescape,
            safeValue: c => f(c)
        }, {
            regex: this.regexp,
            safeValue: c => this.escapeValue ? f(this.escape(c)) : f(c)
        }].forEach(c => {
            for (o = 0; r = c.regex.exec(e);) {
                const m = r[1].trim();
                if (a = g(m), a === void 0)
                    if (typeof h == "function") {
                        const x = h(e, r, n);
                        a = typeof x == "string" ? x : ""
                    } else if (n && Object.prototype.hasOwnProperty.call(n, m)) a = "";
                else if (u) {
                    a = r[0];
                    continue
                } else this.logger.warn(`missed to pass in variable ${m} for interpolating ${e}`), a = "";
                else typeof a != "string" && !this.useRawValueToEscape && (a = Z(a));
                const p = c.safeValue(a);
                if (e = e.replace(r[0], p), u ? (c.regex.lastIndex += a.length, c.regex.lastIndex -= r[0].length) : c.regex.lastIndex = 0, o++, o >= this.maxReplaces) break
            }
        }), e
    }
    nest(e, t) {
        let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n, r, a;

        function o(l, f) {
            const g = this.nestingOptionsSeparator;
            if (l.indexOf(g) < 0) return l;
            const h = l.split(new RegExp(`${g}[ ]*{`));
            let u = `{${h[1]}`;
            l = h[0], u = this.interpolate(u, a);
            const d = u.match(/'/g),
                c = u.match(/"/g);
            (d && d.length % 2 === 0 && !c || c.length % 2 !== 0) && (u = u.replace(/'/g, '"'));
            try {
                a = JSON.parse(u), f && (a = { ...f,
                    ...a
                })
            } catch (m) {
                return this.logger.warn(`failed parsing options string in nesting for key ${l}`, m), `${l}${g}${u}`
            }
            return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, l
        }
        for (; n = this.nestingRegexp.exec(e);) {
            let l = [];
            a = { ...s
            }, a = a.replace && typeof a.replace != "string" ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
            let f = !1;
            if (n[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(n[1])) {
                const g = n[1].split(this.formatSeparator).map(h => h.trim());
                n[1] = g.shift(), l = g, f = !0
            }
            if (r = t(o.call(this, n[1].trim(), a), a), r && n[0] === e && typeof r != "string") return r;
            typeof r != "string" && (r = Z(r)), r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), r = ""), f && (r = l.reduce((g, h) => this.format(g, h, s.lng, { ...s,
                interpolationkey: n[1].trim()
            }), r.trim())), e = e.replace(n[0], r), this.regexp.lastIndex = 0
        }
        return e
    }
}

function Ce(i) {
    let e = i.toLowerCase().trim();
    const t = {};
    if (i.indexOf("(") > -1) {
        const s = i.split("(");
        e = s[0].toLowerCase().trim();
        const n = s[1].substring(0, s[1].length - 1);
        e === "currency" && n.indexOf(":") < 0 ? t.currency || (t.currency = n.trim()) : e === "relativetime" && n.indexOf(":") < 0 ? t.range || (t.range = n.trim()) : n.split(";").forEach(a => {
            if (a) {
                const [o, ...l] = a.split(":"), f = l.join(":").trim().replace(/^'+|'+$/g, ""), g = o.trim();
                t[g] || (t[g] = f), f === "false" && (t[g] = !1), f === "true" && (t[g] = !0), isNaN(f) || (t[g] = parseInt(f, 10))
            }
        })
    }
    return {
        formatName: e,
        formatOptions: t
    }
}

function P(i) {
    const e = {};
    return function(s, n, r) {
        const a = n + JSON.stringify(r);
        let o = e[a];
        return o || (o = i(H(n), r), e[a] = o), o(s)
    }
}
class Pe {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        this.logger = N.create("formatter"), this.options = e, this.formats = {
            number: P((t, s) => {
                const n = new Intl.NumberFormat(t, { ...s
                });
                return r => n.format(r)
            }),
            currency: P((t, s) => {
                const n = new Intl.NumberFormat(t, { ...s,
                    style: "currency"
                });
                return r => n.format(r)
            }),
            datetime: P((t, s) => {
                const n = new Intl.DateTimeFormat(t, { ...s
                });
                return r => n.format(r)
            }),
            relativetime: P((t, s) => {
                const n = new Intl.RelativeTimeFormat(t, { ...s
                });
                return r => n.format(r, s.range || "day")
            }),
            list: P((t, s) => {
                const n = new Intl.ListFormat(t, { ...s
                });
                return r => n.format(r)
            })
        }, this.init(e)
    }
    init(e) {
        const s = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
            interpolation: {}
        }).interpolation;
        this.formatSeparator = s.formatSeparator ? s.formatSeparator : s.formatSeparator || ","
    }
    add(e, t) {
        this.formats[e.toLowerCase().trim()] = t
    }
    addCached(e, t) {
        this.formats[e.toLowerCase().trim()] = P(t)
    }
    format(e, t, s) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        return t.split(this.formatSeparator).reduce((o, l) => {
            const {
                formatName: f,
                formatOptions: g
            } = Ce(l);
            if (this.formats[f]) {
                let h = o;
                try {
                    const u = n && n.formatParams && n.formatParams[n.interpolationkey] || {},
                        d = u.locale || u.lng || n.locale || n.lng || s;
                    h = this.formats[f](o, d, { ...g,
                        ...n,
                        ...u
                    })
                } catch (u) {
                    this.logger.warn(u)
                }
                return h
            } else this.logger.warn(`there was no format function for ${f}`);
            return o
        }, e)
    }
}

function $e(i, e) {
    i.pending[e] !== void 0 && (delete i.pending[e], i.pendingCount--)
}
class ke extends J {
    constructor(e, t, s) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
        super(), this.backend = e, this.store = t, this.services = s, this.languageUtils = s.languageUtils, this.options = n, this.logger = N.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = n.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = n.maxRetries >= 0 ? n.maxRetries : 5, this.retryTimeout = n.retryTimeout >= 1 ? n.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(s, n.backend, n)
    }
    queueLoad(e, t, s, n) {
        const r = {},
            a = {},
            o = {},
            l = {};
        return e.forEach(f => {
            let g = !0;
            t.forEach(h => {
                const u = `${f}|${h}`;
                !s.reload && this.store.hasResourceBundle(f, h) ? this.state[u] = 2 : this.state[u] < 0 || (this.state[u] === 1 ? a[u] === void 0 && (a[u] = !0) : (this.state[u] = 1, g = !1, a[u] === void 0 && (a[u] = !0), r[u] === void 0 && (r[u] = !0), l[h] === void 0 && (l[h] = !0)))
            }), g || (o[f] = !0)
        }), (Object.keys(r).length || Object.keys(a).length) && this.queue.push({
            pending: a,
            pendingCount: Object.keys(a).length,
            loaded: {},
            errors: [],
            callback: n
        }), {
            toLoad: Object.keys(r),
            pending: Object.keys(a),
            toLoadLanguages: Object.keys(o),
            toLoadNamespaces: Object.keys(l)
        }
    }
    loaded(e, t, s) {
        const n = e.split("|"),
            r = n[0],
            a = n[1];
        t && this.emit("failedLoading", r, a, t), s && this.store.addResourceBundle(r, a, s, void 0, void 0, {
            skipCopy: !0
        }), this.state[e] = t ? -1 : 2;
        const o = {};
        this.queue.forEach(l => {
            he(l.loaded, [r], a), $e(l, e), t && l.errors.push(t), l.pendingCount === 0 && !l.done && (Object.keys(l.loaded).forEach(f => {
                o[f] || (o[f] = {});
                const g = l.loaded[f];
                g.length && g.forEach(h => {
                    o[f][h] === void 0 && (o[f][h] = !0)
                })
            }), l.done = !0, l.errors.length ? l.callback(l.errors) : l.callback())
        }), this.emit("loaded", o), this.queue = this.queue.filter(l => !l.done)
    }
    read(e, t, s) {
        let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
            r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
            a = arguments.length > 5 ? arguments[5] : void 0;
        if (!e.length) return a(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng: e,
                ns: t,
                fcName: s,
                tried: n,
                wait: r,
                callback: a
            });
            return
        }
        this.readingCalls++;
        const o = (f, g) => {
                if (this.readingCalls--, this.waitingReads.length > 0) {
                    const h = this.waitingReads.shift();
                    this.read(h.lng, h.ns, h.fcName, h.tried, h.wait, h.callback)
                }
                if (f && g && n < this.maxRetries) {
                    setTimeout(() => {
                        this.read.call(this, e, t, s, n + 1, r * 2, a)
                    }, r);
                    return
                }
                a(f, g)
            },
            l = this.backend[s].bind(this.backend);
        if (l.length === 2) {
            try {
                const f = l(e, t);
                f && typeof f.then == "function" ? f.then(g => o(null, g)).catch(o) : o(null, f)
            } catch (f) {
                o(f)
            }
            return
        }
        return l(e, t, o)
    }
    prepareLoading(e, t) {
        let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            n = arguments.length > 3 ? arguments[3] : void 0;
        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), n && n();
        typeof e == "string" && (e = this.languageUtils.toResolveHierarchy(e)), typeof t == "string" && (t = [t]);
        const r = this.queueLoad(e, t, s, n);
        if (!r.toLoad.length) return r.pending.length || n(), null;
        r.toLoad.forEach(a => {
            this.loadOne(a)
        })
    }
    load(e, t, s) {
        this.prepareLoading(e, t, {}, s)
    }
    reload(e, t, s) {
        this.prepareLoading(e, t, {
            reload: !0
        }, s)
    }
    loadOne(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
        const s = e.split("|"),
            n = s[0],
            r = s[1];
        this.read(n, r, "read", void 0, void 0, (a, o) => {
            a && this.logger.warn(`${t}loading namespace ${r} for language ${n} failed`, a), !a && o && this.logger.log(`${t}loaded namespace ${r} for language ${n}`, o), this.loaded(e, a, o)
        })
    }
    saveMissing(e, t, s, n, r) {
        let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
            o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
        if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
            this.logger.warn(`did not save key "${s}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
            return
        }
        if (!(s == null || s === "")) {
            if (this.backend && this.backend.create) {
                const l = { ...a,
                        isUpdate: r
                    },
                    f = this.backend.create.bind(this.backend);
                if (f.length < 6) try {
                    let g;
                    f.length === 5 ? g = f(e, t, s, n, l) : g = f(e, t, s, n), g && typeof g.then == "function" ? g.then(h => o(null, h)).catch(o) : o(null, g)
                } catch (g) {
                    o(g)
                } else f(e, t, s, n, o, l)
            }!e || !e[0] || this.store.addResource(e[0], t, s, n)
        }
    }
}

function ne() {
    return {
        debug: !1,
        initImmediate: !0,
        ns: ["translation"],
        defaultNS: ["translation"],
        fallbackLng: ["dev"],
        fallbackNS: !1,
        supportedLngs: !1,
        nonExplicitSupportedLngs: !1,
        load: "all",
        preload: !1,
        simplifyPluralSuffix: !0,
        keySeparator: ".",
        nsSeparator: ":",
        pluralSeparator: "_",
        contextSeparator: "_",
        partialBundledLanguages: !1,
        saveMissing: !1,
        updateMissing: !1,
        saveMissingTo: "fallback",
        saveMissingPlurals: !0,
        missingKeyHandler: !1,
        missingInterpolationHandler: !1,
        postProcess: !1,
        postProcessPassResolved: !1,
        returnNull: !1,
        returnEmptyString: !0,
        returnObjects: !1,
        joinArrays: !1,
        returnedObjectHandler: !1,
        parseMissingKeyHandler: !1,
        appendNamespaceToMissingKey: !1,
        appendNamespaceToCIMode: !1,
        overloadTranslationOptionHandler: function(e) {
            let t = {};
            if (typeof e[1] == "object" && (t = e[1]), typeof e[1] == "string" && (t.defaultValue = e[1]), typeof e[2] == "string" && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
                const s = e[3] || e[2];
                Object.keys(s).forEach(n => {
                    t[n] = s[n]
                })
            }
            return t
        },
        interpolation: {
            escapeValue: !0,
            format: i => i,
            prefix: "{{",
            suffix: "}}",
            formatSeparator: ",",
            unescapePrefix: "-",
            nestingPrefix: "$t(",
            nestingSuffix: ")",
            nestingOptionsSeparator: ",",
            maxReplaces: 1e3,
            skipOnVariables: !0
        }
    }
}

function ie(i) {
    return typeof i.ns == "string" && (i.ns = [i.ns]), typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]), typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]), i.supportedLngs && i.supportedLngs.indexOf("cimode") < 0 && (i.supportedLngs = i.supportedLngs.concat(["cimode"])), i
}

function K() {}

function Ee(i) {
    Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(t => {
        typeof i[t] == "function" && (i[t] = i[t].bind(i))
    })
}
class A extends J {
    constructor() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        if (super(), this.options = ie(e), this.services = {}, this.logger = N, this.modules = {
                external: []
            }, Ee(this), t && !this.isInitialized && !e.isClone) {
            if (!this.options.initImmediate) return this.init(e, t), this;
            setTimeout(() => {
                this.init(e, t)
            }, 0)
        }
    }
    init() {
        var e = this;
        let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            s = arguments.length > 1 ? arguments[1] : void 0;
        this.isInitializing = !0, typeof t == "function" && (s = t, t = {}), !t.defaultNS && t.defaultNS !== !1 && t.ns && (typeof t.ns == "string" ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
        const n = ne();
        this.options = { ...n,
            ...this.options,
            ...ie(t)
        }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = { ...n.interpolation,
            ...this.options.interpolation
        }), t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);

        function r(g) {
            return g ? typeof g == "function" ? new g : g : null
        }
        if (!this.options.isClone) {
            this.modules.logger ? N.init(r(this.modules.logger), this.options) : N.init(null, this.options);
            let g;
            this.modules.formatter ? g = this.modules.formatter : typeof Intl < "u" && (g = Pe);
            const h = new ee(this.options);
            this.store = new q(this.options.resources, this.options);
            const u = this.services;
            u.logger = N, u.resourceStore = this.store, u.languageUtils = h, u.pluralResolver = new Ne(h, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            }), g && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (u.formatter = r(g), u.formatter.init(u, this.options), this.options.interpolation.format = u.formatter.format.bind(u.formatter)), u.interpolator = new Re(this.options), u.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            }, u.backendConnector = new ke(r(this.modules.backend), u.resourceStore, u, this.options), u.backendConnector.on("*", function(d) {
                for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++) m[p - 1] = arguments[p];
                e.emit(d, ...m)
            }), this.modules.languageDetector && (u.languageDetector = r(this.modules.languageDetector), u.languageDetector.init && u.languageDetector.init(u, this.options.detection, this.options)), this.modules.i18nFormat && (u.i18nFormat = r(this.modules.i18nFormat), u.i18nFormat.init && u.i18nFormat.init(this)), this.translator = new z(this.services, this.options), this.translator.on("*", function(d) {
                for (var c = arguments.length, m = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++) m[p - 1] = arguments[p];
                e.emit(d, ...m)
            }), this.modules.external.forEach(d => {
                d.init && d.init(this)
            })
        }
        if (this.format = this.options.interpolation.format, s || (s = K), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0])
        }!this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(g => {
            this[g] = function() {
                return e.store[g](...arguments)
            }
        }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(g => {
            this[g] = function() {
                return e.store[g](...arguments), e
            }
        });
        const l = j(),
            f = () => {
                const g = (h, u) => {
                    this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(u), s(h, u)
                };
                if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return g(null, this.t.bind(this));
                this.changeLanguage(this.options.lng, g)
            };
        return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0), l
    }
    loadResources(e) {
        let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K;
        const n = typeof e == "string" ? e : this.language;
        if (typeof e == "function" && (s = e), !this.options.resources || this.options.partialBundledLanguages) {
            if (n && n.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return s();
            const r = [],
                a = o => {
                    if (!o || o === "cimode") return;
                    this.services.languageUtils.toResolveHierarchy(o).forEach(f => {
                        f !== "cimode" && r.indexOf(f) < 0 && r.push(f)
                    })
                };
            n ? a(n) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => a(l)), this.options.preload && this.options.preload.forEach(o => a(o)), this.services.backendConnector.load(r, this.options.ns, o => {
                !o && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), s(o)
            })
        } else s(null)
    }
    reloadResources(e, t, s) {
        const n = j();
        return e || (e = this.languages), t || (t = this.options.ns), s || (s = K), this.services.backendConnector.reload(e, t, r => {
            n.resolve(), s(r)
        }), n
    }
    use(e) {
        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
        return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && ae.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this
    }
    setResolvedLanguage(e) {
        if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
            for (let t = 0; t < this.languages.length; t++) {
                const s = this.languages[t];
                if (!(["cimode", "dev"].indexOf(s) > -1) && this.store.hasLanguageSomeTranslations(s)) {
                    this.resolvedLanguage = s;
                    break
                }
            }
    }
    changeLanguage(e, t) {
        var s = this;
        this.isLanguageChangingTo = e;
        const n = j();
        this.emit("languageChanging", e);
        const r = l => {
                this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l)
            },
            a = (l, f) => {
                f ? (r(f), this.translator.changeLanguage(f), this.isLanguageChangingTo = void 0, this.emit("languageChanged", f), this.logger.log("languageChanged", f)) : this.isLanguageChangingTo = void 0, n.resolve(function() {
                    return s.t(...arguments)
                }), t && t(l, function() {
                    return s.t(...arguments)
                })
            },
            o = l => {
                !e && !l && this.services.languageDetector && (l = []);
                const f = typeof l == "string" ? l : this.services.languageUtils.getBestMatchFromCodes(l);
                f && (this.language || r(f), this.translator.language || this.translator.changeLanguage(f), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(f)), this.loadResources(f, g => {
                    a(g, f)
                })
            };
        return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), n
    }
    getFixedT(e, t, s) {
        var n = this;
        const r = function(a, o) {
            let l;
            if (typeof o != "object") {
                for (var f = arguments.length, g = new Array(f > 2 ? f - 2 : 0), h = 2; h < f; h++) g[h - 2] = arguments[h];
                l = n.options.overloadTranslationOptionHandler([a, o].concat(g))
            } else l = { ...o
            };
            l.lng = l.lng || r.lng, l.lngs = l.lngs || r.lngs, l.ns = l.ns || r.ns, l.keyPrefix = l.keyPrefix || s || r.keyPrefix;
            const u = n.options.keySeparator || ".";
            let d;
            return l.keyPrefix && Array.isArray(a) ? d = a.map(c => `${l.keyPrefix}${u}${c}`) : d = l.keyPrefix ? `${l.keyPrefix}${u}${a}` : a, n.t(d, l)
        };
        return typeof e == "string" ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = s, r
    }
    t() {
        return this.translator && this.translator.translate(...arguments)
    }
    exists() {
        return this.translator && this.translator.exists(...arguments)
    }
    setDefaultNamespace(e) {
        this.options.defaultNS = e
    }
    hasLoadedNamespace(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
        const s = t.lng || this.resolvedLanguage || this.languages[0],
            n = this.options ? this.options.fallbackLng : !1,
            r = this.languages[this.languages.length - 1];
        if (s.toLowerCase() === "cimode") return !0;
        const a = (o, l) => {
            const f = this.services.backendConnector.state[`${o}|${l}`];
            return f === -1 || f === 2
        };
        if (t.precheck) {
            const o = t.precheck(this, a);
            if (o !== void 0) return o
        }
        return !!(this.hasResourceBundle(s, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(s, e) && (!n || a(r, e)))
    }
    loadNamespaces(e, t) {
        const s = j();
        return this.options.ns ? (typeof e == "string" && (e = [e]), e.forEach(n => {
            this.options.ns.indexOf(n) < 0 && this.options.ns.push(n)
        }), this.loadResources(n => {
            s.resolve(), t && t(n)
        }), s) : (t && t(), Promise.resolve())
    }
    loadLanguages(e, t) {
        const s = j();
        typeof e == "string" && (e = [e]);
        const n = this.options.preload || [],
            r = e.filter(a => n.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
        return r.length ? (this.options.preload = n.concat(r), this.loadResources(a => {
            s.resolve(), t && t(a)
        }), s) : (t && t(), Promise.resolve())
    }
    dir(e) {
        if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !e) return "rtl";
        const t = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"],
            s = this.services && this.services.languageUtils || new ee(ne());
        return t.indexOf(s.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
    }
    static createInstance() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 ? arguments[1] : void 0;
        return new A(e, t)
    }
    cloneInstance() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : K;
        const s = e.forkResourceStore;
        s && delete e.forkResourceStore;
        const n = { ...this.options,
                ...e,
                isClone: !0
            },
            r = new A(n);
        return (e.debug !== void 0 || e.prefix !== void 0) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach(o => {
            r[o] = this[o]
        }), r.services = { ...this.services
        }, r.services.utils = {
            hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
        }, s && (r.store = new q(this.store.data, n), r.services.resourceStore = r.store), r.translator = new z(r.services, n), r.translator.on("*", function(o) {
            for (var l = arguments.length, f = new Array(l > 1 ? l - 1 : 0), g = 1; g < l; g++) f[g - 1] = arguments[g];
            r.emit(o, ...f)
        }), r.init(n, t), r.translator.options = n, r.translator.backendConnector.services.utils = {
            hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
        }, r
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        }
    }
}
const v = A.createInstance();
v.createInstance = A.createInstance;
v.createInstance;
v.dir;
v.init;
v.loadResources;
v.reloadResources;
v.use;
v.changeLanguage;
v.getFixedT;
v.t;
v.exists;
v.setDefaultNamespace;
v.hasLoadedNamespace;
v.loadNamespaces;
v.loadLanguages;
export {
    v as i
};
//# sourceMappingURL=i18next-CIEwNdMy.js.map