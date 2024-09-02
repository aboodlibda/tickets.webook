import {
    r as u,
    a as er,
    R as k,
    b as Ua,
    $ as vc
} from "../vendor-DR5RWKqR.js";
import {
    j as x,
    t as fe,
    C as vr,
    m as hc
} from "../@hy/experiences-909RjQqY.js";
import {
    a as Ae,
    s as hr,
    b as Le,
    e as it,
    g as Fe,
    h as io,
    j as Go,
    k as nt,
    l as on,
    m as so,
    c as Ga,
    n as Wr,
    o as gc,
    p as bc,
    q as Br,
    r as yc,
    t as gr,
    u as Yo,
    v as xc,
    w as wc,
    x as $c,
    y as Ya,
    z as Ka,
    A as co,
    B as lo,
    C as Cc,
    D as Ec,
    f as Mt,
    E as qa,
    F as Sc
} from "../date-fns-DGsxi8Uo.js";

function G() {
    return G = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, G.apply(this, arguments)
}

function Hr(e) {
    "@babel/helpers - typeof";
    return Hr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, Hr(e)
}
var Pc = Object.defineProperty,
    Rc = Object.defineProperties,
    Dc = Object.getOwnPropertyDescriptors,
    Bn = Object.getOwnPropertySymbols,
    Xa = Object.prototype.hasOwnProperty,
    Za = Object.prototype.propertyIsEnumerable,
    Ko = (e, t, n) => t in e ? Pc(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    $e = (e, t) => {
        for (var n in t || (t = {})) Xa.call(t, n) && Ko(e, n, t[n]);
        if (Bn)
            for (var n of Bn(t)) Za.call(t, n) && Ko(e, n, t[n]);
        return e
    },
    ct = (e, t) => Rc(e, Dc(t)),
    Et = (e, t) => {
        var n = {};
        for (var r in e) Xa.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Bn)
            for (var r of Bn(e)) t.indexOf(r) < 0 && Za.call(e, r) && (n[r] = e[r]);
        return n
    },
    _c = (e, t, n) => new Promise((r, o) => {
        var a = c => {
                try {
                    s(n.next(c))
                } catch (l) {
                    o(l)
                }
            },
            i = c => {
                try {
                    s(n.throw(c))
                } catch (l) {
                    o(l)
                }
            },
            s = c => c.done ? r(c.value) : Promise.resolve(c.value).then(a, i);
        s((n = n.apply(e, t)).next())
    });

function ce(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function Oc(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Qa(...e) {
    return t => e.forEach(n => Oc(n, t))
}

function De(...e) {
    return u.useCallback(Qa(...e), e)
}

function rt(e, t = []) {
    let n = [];

    function r(a, i) {
        const s = u.createContext(i),
            c = n.length;
        n = [...n, i];

        function l(d) {
            const {
                scope: m,
                children: p,
                ...v
            } = d, h = (m == null ? void 0 : m[e][c]) || s, b = u.useMemo(() => v, Object.values(v));
            return u.createElement(h.Provider, {
                value: b
            }, p)
        }

        function f(d, m) {
            const p = (m == null ? void 0 : m[e][c]) || s,
                v = u.useContext(p);
            if (v) return v;
            if (i !== void 0) return i;
            throw new Error(`\`${d}\` must be used within \`${a}\``)
        }
        return l.displayName = a + "Provider", [l, f]
    }
    const o = () => {
        const a = n.map(i => u.createContext(i));
        return function(s) {
            const c = (s == null ? void 0 : s[e]) || a;
            return u.useMemo(() => ({
                [`__scope${e}`]: { ...s,
                    [e]: c
                }
            }), [s, c])
        }
    };
    return o.scopeName = e, [r, Tc(o, ...t)]
}

function Tc(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(a) {
            const i = r.reduce((s, {
                useScope: c,
                scopeName: l
            }) => {
                const d = c(a)[`__scope${l}`];
                return { ...s,
                    ...d
                }
            }, {});
            return u.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function lt(e) {
    const t = u.useRef(e);
    return u.useEffect(() => {
        t.current = e
    }), u.useMemo(() => (...n) => {
        var r;
        return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
    }, [])
}

function pt({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = Nc({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, i = a ? e : r, s = lt(n), c = u.useCallback(l => {
        if (a) {
            const d = typeof l == "function" ? l(e) : l;
            d !== e && s(d)
        } else o(l)
    }, [a, e, o, s]);
    return [i, c]
}

function Nc({
    defaultProp: e,
    onChange: t
}) {
    const n = u.useState(e),
        [r] = n,
        o = u.useRef(r),
        a = lt(t);
    return u.useEffect(() => {
        o.current !== r && (a(r), o.current = r)
    }, [r, o, a]), n
}

function Ja(e) {
    const t = u.useRef({
        value: e,
        previous: e
    });
    return u.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
const Ut = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {};

function uo(e) {
    const [t, n] = u.useState(void 0);
    return Ut(() => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length) return;
                const a = o[0];
                let i, s;
                if ("borderBoxSize" in a) {
                    const c = a.borderBoxSize,
                        l = Array.isArray(c) ? c[0] : c;
                    i = l.inlineSize, s = l.blockSize
                } else i = e.offsetWidth, s = e.offsetHeight;
                n({
                    width: i,
                    height: s
                })
            });
            return r.observe(e, {
                box: "border-box"
            }), () => r.unobserve(e)
        } else n(void 0)
    }, [e]), t
}
const Gt = u.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = u.Children.toArray(n), a = o.find(Mc);
    if (a) {
        const i = a.props.children,
            s = o.map(c => c === a ? u.Children.count(i) > 1 ? u.Children.only(null) : u.isValidElement(i) ? i.props.children : null : c);
        return u.createElement(Vr, G({}, r, {
            ref: t
        }), u.isValidElement(i) ? u.cloneElement(i, void 0, s) : null)
    }
    return u.createElement(Vr, G({}, r, {
        ref: t
    }), n)
});
Gt.displayName = "Slot";
const Vr = u.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    return u.isValidElement(n) ? u.cloneElement(n, { ...kc(r, n.props),
        ref: t ? Qa(t, n.ref) : n.ref
    }) : u.Children.count(n) > 1 ? u.Children.only(null) : null
});
Vr.displayName = "SlotClone";
const ei = ({
    children: e
}) => u.createElement(u.Fragment, null, e);

function Mc(e) {
    return u.isValidElement(e) && e.type === ei
}

function kc(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
            a(...s), o(...s)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...a
        } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}
const Ic = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    ye = Ic.reduce((e, t) => {
        const n = u.forwardRef((r, o) => {
            const {
                asChild: a,
                ...i
            } = r, s = a ? Gt : t;
            return u.useEffect(() => {
                window[Symbol.for("radix-ui")] = !0
            }, []), u.createElement(s, G({}, i, {
                ref: o
            }))
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function Ac(e, t) {
    e && er.flushSync(() => e.dispatchEvent(t))
}
const ti = "Switch",
    [Lc, Sb] = rt(ti),
    [jc, Fc] = Lc(ti),
    Wc = u.forwardRef((e, t) => {
        const {
            __scopeSwitch: n,
            name: r,
            checked: o,
            defaultChecked: a,
            required: i,
            disabled: s,
            value: c = "on",
            onCheckedChange: l,
            ...f
        } = e, [d, m] = u.useState(null), p = De(t, y => m(y)), v = u.useRef(!1), h = d ? !!d.closest("form") : !0, [b = !1, g] = pt({
            prop: o,
            defaultProp: a,
            onChange: l
        });
        return u.createElement(jc, {
            scope: n,
            checked: b,
            disabled: s
        }, u.createElement(ye.button, G({
            type: "button",
            role: "switch",
            "aria-checked": b,
            "aria-required": i,
            "data-state": ni(b),
            "data-disabled": s ? "" : void 0,
            disabled: s,
            value: c
        }, f, {
            ref: p,
            onClick: ce(e.onClick, y => {
                g($ => !$), h && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation())
            })
        })), h && u.createElement(Vc, {
            control: d,
            bubbles: !v.current,
            name: r,
            value: c,
            checked: b,
            required: i,
            disabled: s,
            style: {
                transform: "translateX(-100%)"
            }
        }))
    }),
    Bc = "SwitchThumb",
    Hc = u.forwardRef((e, t) => {
        const {
            __scopeSwitch: n,
            ...r
        } = e, o = Fc(Bc, n);
        return u.createElement(ye.span, G({
            "data-state": ni(o.checked),
            "data-disabled": o.disabled ? "" : void 0
        }, r, {
            ref: t
        }))
    }),
    Vc = e => {
        const {
            control: t,
            checked: n,
            bubbles: r = !0,
            ...o
        } = e, a = u.useRef(null), i = Ja(n), s = uo(t);
        return u.useEffect(() => {
            const c = a.current,
                l = window.HTMLInputElement.prototype,
                d = Object.getOwnPropertyDescriptor(l, "checked").set;
            if (i !== n && d) {
                const m = new Event("click", {
                    bubbles: r
                });
                d.call(c, n), c.dispatchEvent(m)
            }
        }, [i, n, r]), u.createElement("input", G({
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: n
        }, o, {
            tabIndex: -1,
            ref: a,
            style: { ...e.style,
                ...s,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0
            }
        }))
    };

function ni(e) {
    return e ? "checked" : "unchecked"
}
const zc = Wc,
    Uc = Hc;
var Gc = u.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                error: a,
                hideErrorSpace: i = !1,
                className: s,
                disabled: c,
                groupClassName: l,
                id: f,
                onChange: d
            } = r,
            m = Et(r, ["label", "error", "hideErrorSpace", "className", "disabled", "groupClassName", "id", "onChange"]);
        const p = u.useId();
        return x.jsxs("div", {
            className: l,
            children: [x.jsxs("div", {
                className: "flex items-center gap-3",
                children: [x.jsx(zc, ct($e({
                    className: fe("bg-input/20 data-[state=checked]:bg-primary relative inline-flex h-5 w-[33px] shrink-0 items-center rounded-full disabled:cursor-not-allowed", s),
                    ref: n,
                    id: f || p,
                    disabled: c,
                    onCheckedChange: d
                }, m), {
                    children: x.jsx(Uc, {
                        className: "inline-block h-[18px] w-[18px] transform rounded-full bg-white transition ltr:translate-x-px data-[state=checked]:ltr:translate-x-[14px] rtl:-translate-x-px data-[state=checked]:rtl:-translate-x-[14px]"
                    })
                })), o && x.jsx("label", {
                    htmlFor: f || p,
                    "aria-disabled": c,
                    className: "cursor-pointer aria-disabled:cursor-not-allowed",
                    children: o
                })]
            }), typeof a == "string" && a || !i ? x.jsx("p", {
                className: "text-error my-1 min-h-[16px] text-xs",
                children: a
            }) : null]
        })
    }),
    Pb = Gc;

function Yc(e) {
    const t = e + "CollectionProvider",
        [n, r] = rt(t),
        [o, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = p => {
            const {
                scope: v,
                children: h
            } = p, b = k.useRef(null), g = k.useRef(new Map).current;
            return k.createElement(o, {
                scope: v,
                itemMap: g,
                collectionRef: b
            }, h)
        },
        s = e + "CollectionSlot",
        c = k.forwardRef((p, v) => {
            const {
                scope: h,
                children: b
            } = p, g = a(s, h), y = De(v, g.collectionRef);
            return k.createElement(Gt, {
                ref: y
            }, b)
        }),
        l = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        d = k.forwardRef((p, v) => {
            const {
                scope: h,
                children: b,
                ...g
            } = p, y = k.useRef(null), $ = De(v, y), w = a(l, h);
            return k.useEffect(() => (w.itemMap.set(y, {
                ref: y,
                ...g
            }), () => void w.itemMap.delete(y))), k.createElement(Gt, {
                [f]: "",
                ref: $
            }, b)
        });

    function m(p) {
        const v = a(e + "CollectionConsumer", p);
        return k.useCallback(() => {
            const b = v.collectionRef.current;
            if (!b) return [];
            const g = Array.from(b.querySelectorAll(`[${f}]`));
            return Array.from(v.itemMap.values()).sort((w, C) => g.indexOf(w.ref.current) - g.indexOf(C.ref.current))
        }, [v.collectionRef, v.itemMap])
    }
    return [{
        Provider: i,
        Slot: c,
        ItemSlot: d
    }, m, r]
}
const Kc = Ua.useId || (() => {});
let qc = 0;

function Bt(e) {
    const [t, n] = u.useState(Kc());
    return Ut(() => {
        e || n(r => r ? ? String(qc++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
const Xc = u.createContext(void 0);

function Zc(e) {
    const t = u.useContext(Xc);
    return e || t || "ltr"
}
const br = "rovingFocusGroup.onEntryFocus",
    Qc = {
        bubbles: !1,
        cancelable: !0
    },
    fo = "RovingFocusGroup",
    [zr, ri, Jc] = Yc(fo),
    [el, tr] = rt(fo, [Jc]),
    [tl, nl] = el(fo),
    rl = u.forwardRef((e, t) => u.createElement(zr.Provider, {
        scope: e.__scopeRovingFocusGroup
    }, u.createElement(zr.Slot, {
        scope: e.__scopeRovingFocusGroup
    }, u.createElement(ol, G({}, e, {
        ref: t
    }))))),
    ol = u.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: a,
            currentTabStopId: i,
            defaultCurrentTabStopId: s,
            onCurrentTabStopIdChange: c,
            onEntryFocus: l,
            ...f
        } = e, d = u.useRef(null), m = De(t, d), p = Zc(a), [v = null, h] = pt({
            prop: i,
            defaultProp: s,
            onChange: c
        }), [b, g] = u.useState(!1), y = lt(l), $ = ri(n), w = u.useRef(!1), [C, S] = u.useState(0);
        return u.useEffect(() => {
            const _ = d.current;
            if (_) return _.addEventListener(br, y), () => _.removeEventListener(br, y)
        }, [y]), u.createElement(tl, {
            scope: n,
            orientation: r,
            dir: p,
            loop: o,
            currentTabStopId: v,
            onItemFocus: u.useCallback(_ => h(_), [h]),
            onItemShiftTab: u.useCallback(() => g(!0), []),
            onFocusableItemAdd: u.useCallback(() => S(_ => _ + 1), []),
            onFocusableItemRemove: u.useCallback(() => S(_ => _ - 1), [])
        }, u.createElement(ye.div, G({
            tabIndex: b || C === 0 ? -1 : 0,
            "data-orientation": r
        }, f, {
            ref: m,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: ce(e.onMouseDown, () => {
                w.current = !0
            }),
            onFocus: ce(e.onFocus, _ => {
                const P = !w.current;
                if (_.target === _.currentTarget && P && !b) {
                    const D = new CustomEvent(br, Qc);
                    if (_.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                        const R = $().filter(T => T.focusable),
                            A = R.find(T => T.active),
                            I = R.find(T => T.id === v),
                            O = [A, I, ...R].filter(Boolean).map(T => T.ref.current);
                        oi(O)
                    }
                }
                w.current = !1
            }),
            onBlur: ce(e.onBlur, () => g(!1))
        })))
    }),
    al = "RovingFocusGroupItem",
    il = u.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: a,
            ...i
        } = e, s = Bt(), c = a || s, l = nl(al, n), f = l.currentTabStopId === c, d = ri(n), {
            onFocusableItemAdd: m,
            onFocusableItemRemove: p
        } = l;
        return u.useEffect(() => {
            if (r) return m(), () => p()
        }, [r, m, p]), u.createElement(zr.ItemSlot, {
            scope: n,
            id: c,
            focusable: r,
            active: o
        }, u.createElement(ye.span, G({
            tabIndex: f ? 0 : -1,
            "data-orientation": l.orientation
        }, i, {
            ref: t,
            onMouseDown: ce(e.onMouseDown, v => {
                r ? l.onItemFocus(c) : v.preventDefault()
            }),
            onFocus: ce(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: ce(e.onKeyDown, v => {
                if (v.key === "Tab" && v.shiftKey) {
                    l.onItemShiftTab();
                    return
                }
                if (v.target !== v.currentTarget) return;
                const h = ll(v, l.orientation, l.dir);
                if (h !== void 0) {
                    v.preventDefault();
                    let g = d().filter(y => y.focusable).map(y => y.ref.current);
                    if (h === "last") g.reverse();
                    else if (h === "prev" || h === "next") {
                        h === "prev" && g.reverse();
                        const y = g.indexOf(v.currentTarget);
                        g = l.loop ? ul(g, y + 1) : g.slice(y + 1)
                    }
                    setTimeout(() => oi(g))
                }
            })
        })))
    }),
    sl = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };

function cl(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function ll(e, t, n) {
    const r = cl(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return sl[r]
}

function oi(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function ul(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
const ai = rl,
    ii = il,
    dl = u.forwardRef((e, t) => {
        const {
            pressed: n,
            defaultPressed: r = !1,
            onPressedChange: o,
            ...a
        } = e, [i = !1, s] = pt({
            prop: n,
            onChange: o,
            defaultProp: r
        });
        return u.createElement(ye.button, G({
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0
        }, a, {
            ref: t,
            onClick: ce(e.onClick, () => {
                e.disabled || s(!i)
            })
        }))
    }),
    fl = u.createContext(void 0);

function pl(e) {
    const t = u.useContext(fl);
    return e || t || "ltr"
}
const nr = "ToggleGroup",
    [si, Rb] = rt(nr, [tr]),
    ci = tr(),
    ml = k.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e;
        if (n === "single") {
            const o = r;
            return k.createElement(vl, G({}, o, {
                ref: t
            }))
        }
        if (n === "multiple") {
            const o = r;
            return k.createElement(hl, G({}, o, {
                ref: t
            }))
        }
        throw new Error(`Missing prop \`type\` expected on \`${nr}\``)
    }),
    [li, ui] = si(nr),
    vl = k.forwardRef((e, t) => {
        const {
            value: n,
            defaultValue: r,
            onValueChange: o = () => {},
            ...a
        } = e, [i, s] = pt({
            prop: n,
            defaultProp: r,
            onChange: o
        });
        return k.createElement(li, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: i ? [i] : [],
            onItemActivate: s,
            onItemDeactivate: k.useCallback(() => s(""), [s])
        }, k.createElement(di, G({}, a, {
            ref: t
        })))
    }),
    hl = k.forwardRef((e, t) => {
        const {
            value: n,
            defaultValue: r,
            onValueChange: o = () => {},
            ...a
        } = e, [i = [], s] = pt({
            prop: n,
            defaultProp: r,
            onChange: o
        }), c = k.useCallback(f => s((d = []) => [...d, f]), [s]), l = k.useCallback(f => s((d = []) => d.filter(m => m !== f)), [s]);
        return k.createElement(li, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: c,
            onItemDeactivate: l
        }, k.createElement(di, G({}, a, {
            ref: t
        })))
    }),
    [gl, bl] = si(nr),
    di = k.forwardRef((e, t) => {
        const {
            __scopeToggleGroup: n,
            disabled: r = !1,
            rovingFocus: o = !0,
            orientation: a,
            dir: i,
            loop: s = !0,
            ...c
        } = e, l = ci(n), f = pl(i), d = {
            role: "group",
            dir: f,
            ...c
        };
        return k.createElement(gl, {
            scope: n,
            rovingFocus: o,
            disabled: r
        }, o ? k.createElement(ai, G({
            asChild: !0
        }, l, {
            orientation: a,
            dir: f,
            loop: s
        }), k.createElement(ye.div, G({}, d, {
            ref: t
        }))) : k.createElement(ye.div, G({}, d, {
            ref: t
        })))
    }),
    Ur = "ToggleGroupItem",
    yl = k.forwardRef((e, t) => {
        const n = ui(Ur, e.__scopeToggleGroup),
            r = bl(Ur, e.__scopeToggleGroup),
            o = ci(e.__scopeToggleGroup),
            a = n.value.includes(e.value),
            i = r.disabled || e.disabled,
            s = { ...e,
                pressed: a,
                disabled: i
            },
            c = k.useRef(null);
        return r.rovingFocus ? k.createElement(ii, G({
            asChild: !0
        }, o, {
            focusable: !i,
            active: a,
            ref: c
        }), k.createElement(qo, G({}, s, {
            ref: t
        }))) : k.createElement(qo, G({}, s, {
            ref: t
        }))
    }),
    qo = k.forwardRef((e, t) => {
        const {
            __scopeToggleGroup: n,
            value: r,
            ...o
        } = e, a = ui(Ur, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = a.type === "single" ? i : void 0;
        return k.createElement(dl, G({}, s, o, {
            ref: t,
            onPressedChange: c => {
                c ? a.onItemActivate(r) : a.onItemDeactivate(r)
            }
        }))
    }),
    xl = ml,
    wl = yl;
var $l = u.forwardRef(function({
        type: t,
        name: n,
        label: r,
        options: o,
        value: a,
        onChange: i,
        rounded: s = !0,
        error: c,
        disabled: l,
        groupClassName: f,
        className: d,
        dir: m,
        phill: p = !1,
        dark: v,
        hideErrorSpace: h = !0,
        separator: b
    }, g) {
        const y = t === "multiple" || Array.isArray(a);
        return x.jsxs(xl, ct($e({}, y ? {
            type: "multiple",
            value: a,
            onValueChange: i
        } : {
            type: "single",
            value: a,
            onValueChange: i
        }), {
            dir: m,
            disabled: l,
            ref: g,
            children: [x.jsx("label", {
                className: `block pb-1 ${l?"text-gray-400":v?"text-text":""}`,
                children: r
            }), x.jsx("div", {
                className: fe("flex flex-wrap gap-2", f),
                ref: g,
                children: o.map(($, w) => x.jsxs(u.Fragment, {
                    children: [w > 0 && b, x.jsxs(wl, {
                        name: n,
                        disabled: l,
                        value: $.value,
                        className: fe("border-input/20 relative flex grow cursor-pointer justify-center border px-5 py-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-80", "data-[state=on]:bg-primary data-[state=on]:text-primary-contrast data-[state=on]:shadow-md", "disabled:data-[state=on]:bg-input/20 disabled:bg-input/5 disabled:text-text/60", v && "data-[state=on]:text-text-dark data-[state=on]:bg-white", s && "rounded-md", p && "rounded-full", d),
                        children: [$.icon && x.jsx("img", {
                            src: $.icon,
                            width: 22,
                            height: 22,
                            alt: typeof $.text == "string" ? $.text : $.value,
                            className: "shrink-0 pr-4"
                        }), x.jsx("div", {
                            children: $.text
                        }), $.description && x.jsx("div", {
                            className: "text-text inline group-data-[state=on]:text-sky-100",
                            children: $.description
                        })]
                    }, $.value)]
                }, w))
            }), (typeof c == "string" && !!c || !h) && x.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${c?"visible":"text-transparent"}`,
                children: c
            })]
        }))
    }),
    Db = $l;

function Cl(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = lt(e);
    u.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r)
    }, [n, t])
}
const Gr = "dismissableLayer.update",
    El = "dismissableLayer.pointerDownOutside",
    Sl = "dismissableLayer.focusOutside";
let Xo;
const Pl = u.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    po = u.forwardRef((e, t) => {
        var n;
        const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: c,
            ...l
        } = e, f = u.useContext(Pl), [d, m] = u.useState(null), p = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = u.useState({}), h = De(t, P => m(P)), b = Array.from(f.layers), [g] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), y = b.indexOf(g), $ = d ? b.indexOf(d) : -1, w = f.layersWithOutsidePointerEventsDisabled.size > 0, C = $ >= y, S = Rl(P => {
            const D = P.target,
                R = [...f.branches].some(A => A.contains(D));
            !C || R || (a == null || a(P), s == null || s(P), P.defaultPrevented || c == null || c())
        }, p), _ = Dl(P => {
            const D = P.target;
            [...f.branches].some(A => A.contains(D)) || (i == null || i(P), s == null || s(P), P.defaultPrevented || c == null || c())
        }, p);
        return Cl(P => {
            $ === f.layers.size - 1 && (o == null || o(P), !P.defaultPrevented && c && (P.preventDefault(), c()))
        }, p), u.useEffect(() => {
            if (d) return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (Xo = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), Zo(), () => {
                r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Xo)
            }
        }, [d, p, r, f]), u.useEffect(() => () => {
            d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), Zo())
        }, [d, f]), u.useEffect(() => {
            const P = () => v({});
            return document.addEventListener(Gr, P), () => document.removeEventListener(Gr, P)
        }, []), u.createElement(ye.div, G({}, l, {
            ref: h,
            style: {
                pointerEvents: w ? C ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: ce(e.onFocusCapture, _.onFocusCapture),
            onBlurCapture: ce(e.onBlurCapture, _.onBlurCapture),
            onPointerDownCapture: ce(e.onPointerDownCapture, S.onPointerDownCapture)
        }))
    });

function Rl(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = lt(e),
        r = u.useRef(!1),
        o = u.useRef(() => {});
    return u.useEffect(() => {
        const a = s => {
                if (s.target && !r.current) {
                    let l = function() {
                        fi(El, n, c, {
                            discrete: !0
                        })
                    };
                    const c = {
                        originalEvent: s
                    };
                    s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = l, t.addEventListener("click", o.current, {
                        once: !0
                    })) : l()
                } else t.removeEventListener("click", o.current);
                r.current = !1
            },
            i = window.setTimeout(() => {
                t.addEventListener("pointerdown", a)
            }, 0);
        return () => {
            window.clearTimeout(i), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current)
        }
    }, [t, n]), {
        onPointerDownCapture: () => r.current = !0
    }
}

function Dl(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = lt(e),
        r = u.useRef(!1);
    return u.useEffect(() => {
        const o = a => {
            a.target && !r.current && fi(Sl, n, {
                originalEvent: a
            }, {
                discrete: !1
            })
        };
        return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o)
    }, [t, n]), {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}

function Zo() {
    const e = new CustomEvent(Gr);
    document.dispatchEvent(e)
}

function fi(e, t, n, {
    discrete: r
}) {
    const o = n.originalEvent.target,
        a = new CustomEvent(e, {
            bubbles: !1,
            cancelable: !0,
            detail: n
        });
    t && o.addEventListener(e, t, {
        once: !0
    }), r ? Ac(o, a) : o.dispatchEvent(a)
}
const _l = ["top", "right", "bottom", "left"],
    tt = Math.min,
    je = Math.max,
    Hn = Math.round,
    Wt = Math.floor,
    $t = e => ({
        x: e,
        y: e
    }),
    Ol = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Tl = {
        start: "end",
        end: "start"
    };

function Yr(e, t, n) {
    return je(e, tt(t, n))
}

function ut(e, t) {
    return typeof e == "function" ? e(t) : e
}

function dt(e) {
    return e.split("-")[0]
}

function qt(e) {
    return e.split("-")[1]
}

function mo(e) {
    return e === "x" ? "y" : "x"
}

function vo(e) {
    return e === "y" ? "height" : "width"
}

function Xt(e) {
    return ["top", "bottom"].includes(dt(e)) ? "y" : "x"
}

function ho(e) {
    return mo(Xt(e))
}

function Nl(e, t, n) {
    n === void 0 && (n = !1);
    const r = qt(e),
        o = ho(e),
        a = vo(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (i = Vn(i)), [i, Vn(i)]
}

function Ml(e) {
    const t = Vn(e);
    return [Kr(e), t, Kr(t)]
}

function Kr(e) {
    return e.replace(/start|end/g, t => Tl[t])
}

function kl(e, t, n) {
    const r = ["left", "right"],
        o = ["right", "left"],
        a = ["top", "bottom"],
        i = ["bottom", "top"];
    switch (e) {
        case "top":
        case "bottom":
            return n ? t ? o : r : t ? r : o;
        case "left":
        case "right":
            return t ? a : i;
        default:
            return []
    }
}

function Il(e, t, n, r) {
    const o = qt(e);
    let a = kl(dt(e), n === "start", r);
    return o && (a = a.map(i => i + "-" + o), t && (a = a.concat(a.map(Kr)))), a
}

function Vn(e) {
    return e.replace(/left|right|bottom|top/g, t => Ol[t])
}

function Al(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function pi(e) {
    return typeof e != "number" ? Al(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function zn(e) {
    const {
        x: t,
        y: n,
        width: r,
        height: o
    } = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}

function Qo(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const a = Xt(t),
        i = ho(t),
        s = vo(i),
        c = dt(t),
        l = a === "y",
        f = r.x + r.width / 2 - o.width / 2,
        d = r.y + r.height / 2 - o.height / 2,
        m = r[s] / 2 - o[s] / 2;
    let p;
    switch (c) {
        case "top":
            p = {
                x: f,
                y: r.y - o.height
            };
            break;
        case "bottom":
            p = {
                x: f,
                y: r.y + r.height
            };
            break;
        case "right":
            p = {
                x: r.x + r.width,
                y: d
            };
            break;
        case "left":
            p = {
                x: r.x - o.width,
                y: d
            };
            break;
        default:
            p = {
                x: r.x,
                y: r.y
            }
    }
    switch (qt(t)) {
        case "start":
            p[i] -= m * (n && l ? -1 : 1);
            break;
        case "end":
            p[i] += m * (n && l ? -1 : 1);
            break
    }
    return p
}
const Ll = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: a = [],
        platform: i
    } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let l = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: f,
            y: d
        } = Qo(l, r, c),
        m = r,
        p = {},
        v = 0;
    for (let h = 0; h < s.length; h++) {
        const {
            name: b,
            fn: g
        } = s[h], {
            x: y,
            y: $,
            data: w,
            reset: C
        } = await g({
            x: f,
            y: d,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: p,
            rects: l,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = y ? ? f, d = $ ? ? d, p = { ...p,
            [b]: { ...p[b],
                ...w
            }
        }, C && v <= 50 && (v++, typeof C == "object" && (C.placement && (m = C.placement), C.rects && (l = C.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects), {
            x: f,
            y: d
        } = Qo(l, m, c)), h = -1)
    }
    return {
        x: f,
        y: d,
        placement: m,
        strategy: o,
        middlewareData: p
    }
};
async function an(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        x: r,
        y: o,
        platform: a,
        rects: i,
        elements: s,
        strategy: c
    } = e, {
        boundary: l = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: d = "floating",
        altBoundary: m = !1,
        padding: p = 0
    } = ut(t, e), v = pi(p), b = s[m ? d === "floating" ? "reference" : "floating" : d], g = zn(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(b))) == null || n ? b : b.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
        boundary: l,
        rootBoundary: f,
        strategy: c
    })), y = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), w = await (a.isElement == null ? void 0 : a.isElement($)) ? await (a.getScale == null ? void 0 : a.getScale($)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, C = zn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: y,
        offsetParent: $,
        strategy: c
    }) : y);
    return {
        top: (g.top - C.top + v.top) / w.y,
        bottom: (C.bottom - g.bottom + v.bottom) / w.y,
        left: (g.left - C.left + v.left) / w.x,
        right: (C.right - g.right + v.right) / w.x
    }
}
const jl = e => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const {
                x: n,
                y: r,
                placement: o,
                rects: a,
                platform: i,
                elements: s,
                middlewareData: c
            } = t, {
                element: l,
                padding: f = 0
            } = ut(e, t) || {};
            if (l == null) return {};
            const d = pi(f),
                m = {
                    x: n,
                    y: r
                },
                p = ho(o),
                v = vo(p),
                h = await i.getDimensions(l),
                b = p === "y",
                g = b ? "top" : "left",
                y = b ? "bottom" : "right",
                $ = b ? "clientHeight" : "clientWidth",
                w = a.reference[v] + a.reference[p] - m[p] - a.floating[v],
                C = m[p] - a.reference[p],
                S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l));
            let _ = S ? S[$] : 0;
            (!_ || !await (i.isElement == null ? void 0 : i.isElement(S))) && (_ = s.floating[$] || a.floating[v]);
            const P = w / 2 - C / 2,
                D = _ / 2 - h[v] / 2 - 1,
                R = tt(d[g], D),
                A = tt(d[y], D),
                I = R,
                L = _ - h[v] - A,
                O = _ / 2 - h[v] / 2 + P,
                T = Yr(I, O, L),
                M = !c.arrow && qt(o) != null && O !== T && a.reference[v] / 2 - (O < I ? R : A) - h[v] / 2 < 0,
                E = M ? O < I ? O - I : O - L : 0;
            return {
                [p]: m[p] + E,
                data: {
                    [p]: T,
                    centerOffset: O - T - E,
                    ...M && {
                        alignmentOffset: E
                    }
                },
                reset: M
            }
        }
    }),
    Fl = function(e) {
        return e === void 0 && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    placement: o,
                    middlewareData: a,
                    rects: i,
                    initialPlacement: s,
                    platform: c,
                    elements: l
                } = t, {
                    mainAxis: f = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: m,
                    fallbackStrategy: p = "bestFit",
                    fallbackAxisSideDirection: v = "none",
                    flipAlignment: h = !0,
                    ...b
                } = ut(e, t);
                if ((n = a.arrow) != null && n.alignmentOffset) return {};
                const g = dt(o),
                    y = dt(s) === s,
                    $ = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)),
                    w = m || (y || !h ? [Vn(s)] : Ml(s));
                !m && v !== "none" && w.push(...Il(s, h, v, $));
                const C = [s, ...w],
                    S = await an(t, b),
                    _ = [];
                let P = ((r = a.flip) == null ? void 0 : r.overflows) || [];
                if (f && _.push(S[g]), d) {
                    const I = Nl(o, i, $);
                    _.push(S[I[0]], S[I[1]])
                }
                if (P = [...P, {
                        placement: o,
                        overflows: _
                    }], !_.every(I => I <= 0)) {
                    var D, R;
                    const I = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1,
                        L = C[I];
                    if (L) return {
                        data: {
                            index: I,
                            overflows: P
                        },
                        reset: {
                            placement: L
                        }
                    };
                    let O = (R = P.filter(T => T.overflows[0] <= 0).sort((T, M) => T.overflows[1] - M.overflows[1])[0]) == null ? void 0 : R.placement;
                    if (!O) switch (p) {
                        case "bestFit":
                            {
                                var A;
                                const T = (A = P.map(M => [M.placement, M.overflows.filter(E => E > 0).reduce((E, N) => E + N, 0)]).sort((M, E) => M[1] - E[1])[0]) == null ? void 0 : A[0];T && (O = T);
                                break
                            }
                        case "initialPlacement":
                            O = s;
                            break
                    }
                    if (o !== O) return {
                        reset: {
                            placement: O
                        }
                    }
                }
                return {}
            }
        }
    };

function Jo(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function ea(e) {
    return _l.some(t => e[t] >= 0)
}
const Wl = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = ut(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const a = await an(t, { ...o,
                                elementContext: "reference"
                            }),
                            i = Jo(a, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: i,
                                referenceHidden: ea(i)
                            }
                        }
                    }
                case "escaped":
                    {
                        const a = await an(t, { ...o,
                                altBoundary: !0
                            }),
                            i = Jo(a, n.floating);
                        return {
                            data: {
                                escapedOffsets: i,
                                escaped: ea(i)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function Bl(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = dt(n), s = qt(n), c = Xt(n) === "y", l = ["left", "top"].includes(i) ? -1 : 1, f = a && c ? -1 : 1, d = ut(t, e);
    let {
        mainAxis: m,
        crossAxis: p,
        alignmentAxis: v
    } = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...d
    };
    return s && typeof v == "number" && (p = s === "end" ? v * -1 : v), c ? {
        x: p * f,
        y: m * l
    } : {
        x: m * l,
        y: p * f
    }
}
const Hl = function(e) {
        return e === void 0 && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
                var n, r;
                const {
                    x: o,
                    y: a,
                    placement: i,
                    middlewareData: s
                } = t, c = await Bl(t, e);
                return i === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
                    x: o + c.x,
                    y: a + c.y,
                    data: { ...c,
                        placement: i
                    }
                }
            }
        }
    },
    Vl = function(e) {
        return e === void 0 && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o
                } = t, {
                    mainAxis: a = !0,
                    crossAxis: i = !1,
                    limiter: s = {
                        fn: b => {
                            let {
                                x: g,
                                y
                            } = b;
                            return {
                                x: g,
                                y
                            }
                        }
                    },
                    ...c
                } = ut(e, t), l = {
                    x: n,
                    y: r
                }, f = await an(t, c), d = Xt(dt(o)), m = mo(d);
                let p = l[m],
                    v = l[d];
                if (a) {
                    const b = m === "y" ? "top" : "left",
                        g = m === "y" ? "bottom" : "right",
                        y = p + f[b],
                        $ = p - f[g];
                    p = Yr(y, p, $)
                }
                if (i) {
                    const b = d === "y" ? "top" : "left",
                        g = d === "y" ? "bottom" : "right",
                        y = v + f[b],
                        $ = v - f[g];
                    v = Yr(y, v, $)
                }
                const h = s.fn({ ...t,
                    [m]: p,
                    [d]: v
                });
                return { ...h,
                    data: {
                        x: h.x - n,
                        y: h.y - r
                    }
                }
            }
        }
    },
    zl = function(e) {
        return e === void 0 && (e = {}), {
            options: e,
            fn(t) {
                const {
                    x: n,
                    y: r,
                    placement: o,
                    rects: a,
                    middlewareData: i
                } = t, {
                    offset: s = 0,
                    mainAxis: c = !0,
                    crossAxis: l = !0
                } = ut(e, t), f = {
                    x: n,
                    y: r
                }, d = Xt(o), m = mo(d);
                let p = f[m],
                    v = f[d];
                const h = ut(s, t),
                    b = typeof h == "number" ? {
                        mainAxis: h,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...h
                    };
                if (c) {
                    const $ = m === "y" ? "height" : "width",
                        w = a.reference[m] - a.floating[$] + b.mainAxis,
                        C = a.reference[m] + a.reference[$] - b.mainAxis;
                    p < w ? p = w : p > C && (p = C)
                }
                if (l) {
                    var g, y;
                    const $ = m === "y" ? "width" : "height",
                        w = ["top", "left"].includes(dt(o)),
                        C = a.reference[d] - a.floating[$] + (w && ((g = i.offset) == null ? void 0 : g[d]) || 0) + (w ? 0 : b.crossAxis),
                        S = a.reference[d] + a.reference[$] + (w ? 0 : ((y = i.offset) == null ? void 0 : y[d]) || 0) - (w ? b.crossAxis : 0);
                    v < C ? v = C : v > S && (v = S)
                }
                return {
                    [m]: p,
                    [d]: v
                }
            }
        }
    },
    Ul = function(e) {
        return e === void 0 && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
                const {
                    placement: n,
                    rects: r,
                    platform: o,
                    elements: a
                } = t, {
                    apply: i = () => {},
                    ...s
                } = ut(e, t), c = await an(t, s), l = dt(n), f = qt(n), d = Xt(n) === "y", {
                    width: m,
                    height: p
                } = r.floating;
                let v, h;
                l === "top" || l === "bottom" ? (v = l, h = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = l, v = f === "end" ? "top" : "bottom");
                const b = p - c.top - c.bottom,
                    g = m - c.left - c.right,
                    y = tt(p - c[v], b),
                    $ = tt(m - c[h], g),
                    w = !t.middlewareData.shift;
                let C = y,
                    S = $;
                if (d ? S = f || w ? tt($, g) : g : C = f || w ? tt(y, b) : b, w && !f) {
                    const P = je(c.left, 0),
                        D = je(c.right, 0),
                        R = je(c.top, 0),
                        A = je(c.bottom, 0);
                    d ? S = m - 2 * (P !== 0 || D !== 0 ? P + D : je(c.left, c.right)) : C = p - 2 * (R !== 0 || A !== 0 ? R + A : je(c.top, c.bottom))
                }
                await i({ ...t,
                    availableWidth: S,
                    availableHeight: C
                });
                const _ = await o.getDimensions(a.floating);
                return m !== _.width || p !== _.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function St(e) {
    return mi(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function We(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function mt(e) {
    var t;
    return (t = (mi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function mi(e) {
    return e instanceof Node || e instanceof We(e).Node
}

function Ee(e) {
    return e instanceof Element || e instanceof We(e).Element
}

function Me(e) {
    return e instanceof HTMLElement || e instanceof We(e).HTMLElement
}

function qr(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof We(e).ShadowRoot
}

function hn(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = Ve(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function Gl(e) {
    return ["table", "td", "th"].includes(St(e))
}

function go(e) {
    const t = bo(),
        n = Ve(e);
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function Yl(e) {
    let t = ft(e);
    for (; Me(t) && !Ct(t);) {
        if (go(t)) return t;
        t = ft(t)
    }
    return null
}

function bo() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function Ct(e) {
    return ["html", "body", "#document"].includes(St(e))
}

function Ve(e) {
    return We(e).getComputedStyle(e)
}

function rr(e) {
    return Ee(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}

function ft(e) {
    if (St(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || qr(e) && e.host || mt(e);
    return qr(t) ? t.host : t
}

function vi(e) {
    const t = ft(e);
    return Ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Me(t) && hn(t) ? t : vi(t)
}

function wt(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = vi(e),
        a = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = We(o);
    return a ? t.concat(i, i.visualViewport || [], hn(o) ? o : [], i.frameElement && n ? wt(i.frameElement) : []) : t.concat(o, wt(o, [], n))
}

function hi(e) {
    const t = Ve(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Me(e),
        a = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        s = Hn(n) !== a || Hn(r) !== i;
    return s && (n = a, r = i), {
        width: n,
        height: r,
        $: s
    }
}

function yo(e) {
    return Ee(e) ? e : e.contextElement
}

function Ht(e) {
    const t = yo(e);
    if (!Me(t)) return $t(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: a
        } = hi(t);
    let i = (a ? Hn(n.width) : n.width) / r,
        s = (a ? Hn(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: i,
        y: s
    }
}
const Kl = $t(0);

function gi(e) {
    const t = We(e);
    return !bo() || !t.visualViewport ? Kl : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function ql(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== We(e) ? !1 : t
}

function Tt(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        a = yo(e);
    let i = $t(1);
    t && (r ? Ee(r) && (i = Ht(r)) : i = Ht(e));
    const s = ql(a, n, r) ? gi(a) : $t(0);
    let c = (o.left + s.x) / i.x,
        l = (o.top + s.y) / i.y,
        f = o.width / i.x,
        d = o.height / i.y;
    if (a) {
        const m = We(a),
            p = r && Ee(r) ? We(r) : r;
        let v = m,
            h = v.frameElement;
        for (; h && r && p !== v;) {
            const b = Ht(h),
                g = h.getBoundingClientRect(),
                y = Ve(h),
                $ = g.left + (h.clientLeft + parseFloat(y.paddingLeft)) * b.x,
                w = g.top + (h.clientTop + parseFloat(y.paddingTop)) * b.y;
            c *= b.x, l *= b.y, f *= b.x, d *= b.y, c += $, l += w, v = We(h), h = v.frameElement
        }
    }
    return zn({
        width: f,
        height: d,
        x: c,
        y: l
    })
}
const Xl = [":popover-open", ":modal"];

function xo(e) {
    return Xl.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function Zl(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const a = o === "fixed",
        i = mt(r),
        s = t ? xo(t.floating) : !1;
    if (r === i || s && a) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        l = $t(1);
    const f = $t(0),
        d = Me(r);
    if ((d || !d && !a) && ((St(r) !== "body" || hn(i)) && (c = rr(r)), Me(r))) {
        const m = Tt(r);
        l = Ht(r), f.x = m.x + r.clientLeft, f.y = m.y + r.clientTop
    }
    return {
        width: n.width * l.x,
        height: n.height * l.y,
        x: n.x * l.x - c.scrollLeft * l.x + f.x,
        y: n.y * l.y - c.scrollTop * l.y + f.y
    }
}

function Ql(e) {
    return Array.from(e.getClientRects())
}

function bi(e) {
    return Tt(mt(e)).left + rr(e).scrollLeft
}

function Jl(e) {
    const t = mt(e),
        n = rr(e),
        r = e.ownerDocument.body,
        o = je(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = je(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + bi(e);
    const s = -n.scrollTop;
    return Ve(r).direction === "rtl" && (i += je(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: a,
        x: i,
        y: s
    }
}

function eu(e, t) {
    const n = We(e),
        r = mt(e),
        o = n.visualViewport;
    let a = r.clientWidth,
        i = r.clientHeight,
        s = 0,
        c = 0;
    if (o) {
        a = o.width, i = o.height;
        const l = bo();
        (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop)
    }
    return {
        width: a,
        height: i,
        x: s,
        y: c
    }
}

function tu(e, t) {
    const n = Tt(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        a = Me(e) ? Ht(e) : $t(1),
        i = e.clientWidth * a.x,
        s = e.clientHeight * a.y,
        c = o * a.x,
        l = r * a.y;
    return {
        width: i,
        height: s,
        x: c,
        y: l
    }
}

function ta(e, t, n) {
    let r;
    if (t === "viewport") r = eu(e, n);
    else if (t === "document") r = Jl(mt(e));
    else if (Ee(t)) r = tu(t, n);
    else {
        const o = gi(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return zn(r)
}

function yi(e, t) {
    const n = ft(e);
    return n === t || !Ee(n) || Ct(n) ? !1 : Ve(n).position === "fixed" || yi(n, t)
}

function nu(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = wt(e, [], !1).filter(s => Ee(s) && St(s) !== "body"),
        o = null;
    const a = Ve(e).position === "fixed";
    let i = a ? ft(e) : e;
    for (; Ee(i) && !Ct(i);) {
        const s = Ve(i),
            c = go(i);
        !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || hn(i) && !c && yi(e, i)) ? r = r.filter(f => f !== i) : o = s, i = ft(i)
    }
    return t.set(e, r), r
}

function ru(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const i = [...n === "clippingAncestors" ? xo(t) ? [] : nu(t, this._c) : [].concat(n), r],
        s = i[0],
        c = i.reduce((l, f) => {
            const d = ta(t, f, o);
            return l.top = je(d.top, l.top), l.right = tt(d.right, l.right), l.bottom = tt(d.bottom, l.bottom), l.left = je(d.left, l.left), l
        }, ta(t, s, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function ou(e) {
    const {
        width: t,
        height: n
    } = hi(e);
    return {
        width: t,
        height: n
    }
}

function au(e, t, n) {
    const r = Me(t),
        o = mt(t),
        a = n === "fixed",
        i = Tt(e, !0, a, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = $t(0);
    if (r || !r && !a)
        if ((St(t) !== "body" || hn(o)) && (s = rr(t)), r) {
            const d = Tt(t, !0, a, t);
            c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop
        } else o && (c.x = bi(o));
    const l = i.left + s.scrollLeft - c.x,
        f = i.top + s.scrollTop - c.y;
    return {
        x: l,
        y: f,
        width: i.width,
        height: i.height
    }
}

function yr(e) {
    return Ve(e).position === "static"
}

function na(e, t) {
    return !Me(e) || Ve(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function xi(e, t) {
    const n = We(e);
    if (xo(e)) return n;
    if (!Me(e)) {
        let o = ft(e);
        for (; o && !Ct(o);) {
            if (Ee(o) && !yr(o)) return o;
            o = ft(o)
        }
        return n
    }
    let r = na(e, t);
    for (; r && Gl(r) && yr(r);) r = na(r, t);
    return r && Ct(r) && yr(r) && !go(r) ? n : r || Yl(e) || n
}
const iu = async function(e) {
    const t = this.getOffsetParent || xi,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: au(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function su(e) {
    return Ve(e).direction === "rtl"
}
const cu = {
    convertOffsetParentRelativeRectToViewportRelativeRect: Zl,
    getDocumentElement: mt,
    getClippingRect: ru,
    getOffsetParent: xi,
    getElementRects: iu,
    getClientRects: Ql,
    getDimensions: ou,
    getScale: Ht,
    isElement: Ee,
    isRTL: su
};

function lu(e, t) {
    let n = null,
        r;
    const o = mt(e);

    function a() {
        var s;
        clearTimeout(r), (s = n) == null || s.disconnect(), n = null
    }

    function i(s, c) {
        s === void 0 && (s = !1), c === void 0 && (c = 1), a();
        const {
            left: l,
            top: f,
            width: d,
            height: m
        } = e.getBoundingClientRect();
        if (s || t(), !d || !m) return;
        const p = Wt(f),
            v = Wt(o.clientWidth - (l + d)),
            h = Wt(o.clientHeight - (f + m)),
            b = Wt(l),
            y = {
                rootMargin: -p + "px " + -v + "px " + -h + "px " + -b + "px",
                threshold: je(0, tt(1, c)) || 1
            };
        let $ = !0;

        function w(C) {
            const S = C[0].intersectionRatio;
            if (S !== c) {
                if (!$) return i();
                S ? i(!1, S) : r = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            $ = !1
        }
        try {
            n = new IntersectionObserver(w, { ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(w, y)
        }
        n.observe(e)
    }
    return i(!0), a
}

function wi(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: a = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = r, l = yo(e), f = o || a ? [...l ? wt(l) : [], ...wt(t)] : [];
    f.forEach(g => {
        o && g.addEventListener("scroll", n, {
            passive: !0
        }), a && g.addEventListener("resize", n)
    });
    const d = l && s ? lu(l, n) : null;
    let m = -1,
        p = null;
    i && (p = new ResizeObserver(g => {
        let [y] = g;
        y && y.target === l && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
            var $;
            ($ = p) == null || $.observe(t)
        })), n()
    }), l && !c && p.observe(l), p.observe(t));
    let v, h = c ? Tt(e) : null;
    c && b();

    function b() {
        const g = Tt(e);
        h && (g.x !== h.x || g.y !== h.y || g.width !== h.width || g.height !== h.height) && n(), h = g, v = requestAnimationFrame(b)
    }
    return n(), () => {
        var g;
        f.forEach(y => {
            o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n)
        }), d == null || d(), (g = p) == null || g.disconnect(), p = null, c && cancelAnimationFrame(v)
    }
}
const uu = Hl,
    du = Vl,
    fu = Fl,
    pu = Ul,
    mu = Wl,
    ra = jl,
    vu = zl,
    hu = (e, t, n) => {
        const r = new Map,
            o = {
                platform: cu,
                ...n
            },
            a = { ...o.platform,
                _c: r
            };
        return Ll(e, t, { ...o,
            platform: a
        })
    };
var In = typeof document < "u" ? u.useLayoutEffect : u.useEffect;

function Un(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!Un(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const a = o[r];
            if (!(a === "_owner" && e.$$typeof) && !Un(e[a], t[a])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function $i(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function oa(e, t) {
    const n = $i(e);
    return Math.round(t * n) / n
}

function aa(e) {
    const t = u.useRef(e);
    return In(() => {
        t.current = e
    }), t
}

function Ci(e) {
    e === void 0 && (e = {});
    const {
        placement: t = "bottom",
        strategy: n = "absolute",
        middleware: r = [],
        platform: o,
        elements: {
            reference: a,
            floating: i
        } = {},
        transform: s = !0,
        whileElementsMounted: c,
        open: l
    } = e, [f, d] = u.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [m, p] = u.useState(r);
    Un(m, r) || p(r);
    const [v, h] = u.useState(null), [b, g] = u.useState(null), y = u.useCallback(E => {
        E !== S.current && (S.current = E, h(E))
    }, []), $ = u.useCallback(E => {
        E !== _.current && (_.current = E, g(E))
    }, []), w = a || v, C = i || b, S = u.useRef(null), _ = u.useRef(null), P = u.useRef(f), D = c != null, R = aa(c), A = aa(o), I = u.useCallback(() => {
        if (!S.current || !_.current) return;
        const E = {
            placement: t,
            strategy: n,
            middleware: m
        };
        A.current && (E.platform = A.current), hu(S.current, _.current, E).then(N => {
            const U = { ...N,
                isPositioned: !0
            };
            L.current && !Un(P.current, U) && (P.current = U, er.flushSync(() => {
                d(U)
            }))
        })
    }, [m, t, n, A]);
    In(() => {
        l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, d(E => ({ ...E,
            isPositioned: !1
        })))
    }, [l]);
    const L = u.useRef(!1);
    In(() => (L.current = !0, () => {
        L.current = !1
    }), []), In(() => {
        if (w && (S.current = w), C && (_.current = C), w && C) {
            if (R.current) return R.current(w, C, I);
            I()
        }
    }, [w, C, I, R, D]);
    const O = u.useMemo(() => ({
            reference: S,
            floating: _,
            setReference: y,
            setFloating: $
        }), [y, $]),
        T = u.useMemo(() => ({
            reference: w,
            floating: C
        }), [w, C]),
        M = u.useMemo(() => {
            const E = {
                position: n,
                left: 0,
                top: 0
            };
            if (!T.floating) return E;
            const N = oa(T.floating, f.x),
                U = oa(T.floating, f.y);
            return s ? { ...E,
                transform: "translate(" + N + "px, " + U + "px)",
                ...$i(T.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: N,
                top: U
            }
        }, [n, s, T.floating, f.x, f.y]);
    return u.useMemo(() => ({ ...f,
        update: I,
        refs: O,
        elements: T,
        floatingStyles: M
    }), [f, I, O, T, M])
}
const gu = e => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current")
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const {
                    element: r,
                    padding: o
                } = typeof e == "function" ? e(n) : e;
                return r && t(r) ? r.current != null ? ra({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? ra({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Ei = (e, t) => ({ ...uu(e),
        options: [e, t]
    }),
    bu = (e, t) => ({ ...du(e),
        options: [e, t]
    }),
    yu = (e, t) => ({ ...vu(e),
        options: [e, t]
    }),
    Si = (e, t) => ({ ...fu(e),
        options: [e, t]
    }),
    Pi = (e, t) => ({ ...pu(e),
        options: [e, t]
    }),
    xu = (e, t) => ({ ...mu(e),
        options: [e, t]
    }),
    wu = (e, t) => ({ ...gu(e),
        options: [e, t]
    });
const Ri = "Popper",
    [Di, or] = rt(Ri),
    [$u, _i] = Di(Ri),
    Cu = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = u.useState(null);
        return u.createElement($u, {
            scope: t,
            anchor: r,
            onAnchorChange: o
        }, n)
    },
    Eu = "PopperAnchor",
    Su = u.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, a = _i(Eu, n), i = u.useRef(null), s = De(t, i);
        return u.useEffect(() => {
            a.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }), r ? null : u.createElement(ye.div, G({}, o, {
            ref: s
        }))
    }),
    Oi = "PopperContent",
    [Pu, _b] = Di(Oi),
    Ru = u.forwardRef((e, t) => {
        var n, r, o, a, i, s, c, l;
        const {
            __scopePopper: f,
            side: d = "bottom",
            sideOffset: m = 0,
            align: p = "center",
            alignOffset: v = 0,
            arrowPadding: h = 0,
            avoidCollisions: b = !0,
            collisionBoundary: g = [],
            collisionPadding: y = 0,
            sticky: $ = "partial",
            hideWhenDetached: w = !1,
            updatePositionStrategy: C = "optimized",
            onPlaced: S,
            ..._
        } = e, P = _i(Oi, f), [D, R] = u.useState(null), A = De(t, X => R(X)), [I, L] = u.useState(null), O = uo(I), T = (n = O == null ? void 0 : O.width) !== null && n !== void 0 ? n : 0, M = (r = O == null ? void 0 : O.height) !== null && r !== void 0 ? r : 0, E = d + (p !== "center" ? "-" + p : ""), N = typeof y == "number" ? y : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...y
        }, U = Array.isArray(g) ? g : [g], F = U.length > 0, W = {
            padding: N,
            boundary: U.filter(Du),
            altBoundary: F
        }, {
            refs: B,
            floatingStyles: K,
            placement: re,
            isPositioned: ee,
            middlewareData: q
        } = Ci({
            strategy: "fixed",
            placement: E,
            whileElementsMounted: (...X) => wi(...X, {
                animationFrame: C === "always"
            }),
            elements: {
                reference: P.anchor
            },
            middleware: [Ei({
                mainAxis: m + M,
                alignmentAxis: v
            }), b && bu({
                mainAxis: !0,
                crossAxis: !1,
                limiter: $ === "partial" ? yu() : void 0,
                ...W
            }), b && Si({ ...W
            }), Pi({ ...W,
                apply: ({
                    elements: X,
                    rects: se,
                    availableWidth: me,
                    availableHeight: ae
                }) => {
                    const {
                        width: Y,
                        height: Ce
                    } = se.reference, xe = X.floating.style;
                    xe.setProperty("--radix-popper-available-width", `${me}px`), xe.setProperty("--radix-popper-available-height", `${ae}px`), xe.setProperty("--radix-popper-anchor-width", `${Y}px`), xe.setProperty("--radix-popper-anchor-height", `${Ce}px`)
                }
            }), I && wu({
                element: I,
                padding: h
            }), _u({
                arrowWidth: T,
                arrowHeight: M
            }), w && xu({
                strategy: "referenceHidden",
                ...W
            })]
        }), [oe, ie] = Ti(re), le = lt(S);
        Ut(() => {
            ee && (le == null || le())
        }, [ee, le]);
        const V = (o = q.arrow) === null || o === void 0 ? void 0 : o.x,
            H = (a = q.arrow) === null || a === void 0 ? void 0 : a.y,
            j = ((i = q.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0,
            [z, Q] = u.useState();
        return Ut(() => {
            D && Q(window.getComputedStyle(D).zIndex)
        }, [D]), u.createElement("div", {
            ref: B.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...K,
                transform: ee ? K.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: z,
                "--radix-popper-transform-origin": [(s = q.transformOrigin) === null || s === void 0 ? void 0 : s.x, (c = q.transformOrigin) === null || c === void 0 ? void 0 : c.y].join(" ")
            },
            dir: e.dir
        }, u.createElement(Pu, {
            scope: f,
            placedSide: oe,
            onArrowChange: L,
            arrowX: V,
            arrowY: H,
            shouldHideArrow: j
        }, u.createElement(ye.div, G({
            "data-side": oe,
            "data-align": ie
        }, _, {
            ref: A,
            style: { ..._.style,
                animation: ee ? void 0 : "none",
                opacity: (l = q.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
            }
        }))))
    });

function Du(e) {
    return e !== null
}
const _u = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var n, r, o, a, i;
        const {
            placement: s,
            rects: c,
            middlewareData: l
        } = t, d = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, m = d ? 0 : e.arrowWidth, p = d ? 0 : e.arrowHeight, [v, h] = Ti(s), b = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[h], g = ((r = (o = l.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + m / 2, y = ((a = (i = l.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + p / 2;
        let $ = "",
            w = "";
        return v === "bottom" ? ($ = d ? b : `${g}px`, w = `${-p}px`) : v === "top" ? ($ = d ? b : `${g}px`, w = `${c.floating.height+p}px`) : v === "right" ? ($ = `${-p}px`, w = d ? b : `${y}px`) : v === "left" && ($ = `${c.floating.width+p}px`, w = d ? b : `${y}px`), {
            data: {
                x: $,
                y: w
            }
        }
    }
});

function Ti(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
const Ni = Cu,
    Mi = Su,
    ki = Ru,
    Ii = u.forwardRef((e, t) => {
        var n;
        const {
            container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body,
            ...o
        } = e;
        return r ? vc.createPortal(u.createElement(ye.div, G({}, o, {
            ref: t
        })), r) : null
    });

function Ou(e, t) {
    return u.useReducer((n, r) => {
        const o = t[n][r];
        return o ? ? n
    }, e)
}
const Pt = e => {
    const {
        present: t,
        children: n
    } = e, r = Tu(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : u.Children.only(n), a = De(r.ref, o.ref);
    return typeof n == "function" || r.isPresent ? u.cloneElement(o, {
        ref: a
    }) : null
};
Pt.displayName = "Presence";

function Tu(e) {
    const [t, n] = u.useState(), r = u.useRef({}), o = u.useRef(e), a = u.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = Ou(i, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return u.useEffect(() => {
        const l = En(r.current);
        a.current = s === "mounted" ? l : "none"
    }, [s]), Ut(() => {
        const l = r.current,
            f = o.current;
        if (f !== e) {
            const m = a.current,
                p = En(l);
            e ? c("MOUNT") : p === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(f && m !== p ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, c]), Ut(() => {
        if (t) {
            const l = d => {
                    const p = En(r.current).includes(d.animationName);
                    d.target === t && p && er.flushSync(() => c("ANIMATION_END"))
                },
                f = d => {
                    d.target === t && (a.current = En(r.current))
                };
            return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
                t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l)
            }
        } else c("ANIMATION_END")
    }, [t, c]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: u.useCallback(l => {
            l && (r.current = getComputedStyle(l)), n(l)
        }, [])
    }
}

function En(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
const Nu = u.forwardRef((e, t) => u.createElement(ye.span, G({}, e, {
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }))),
    Mu = Nu,
    [ar, Ob] = rt("Tooltip", [or]),
    wo = or(),
    ku = "TooltipProvider",
    Iu = 700,
    Xr = "tooltip.open",
    [Au, $o] = ar(ku),
    Lu = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = Iu,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
        } = e, [i, s] = u.useState(!0), c = u.useRef(!1), l = u.useRef(0);
        return u.useEffect(() => {
            const f = l.current;
            return () => window.clearTimeout(f)
        }, []), u.createElement(Au, {
            scope: t,
            isOpenDelayed: i,
            delayDuration: n,
            onOpen: u.useCallback(() => {
                window.clearTimeout(l.current), s(!1)
            }, []),
            onClose: u.useCallback(() => {
                window.clearTimeout(l.current), l.current = window.setTimeout(() => s(!0), r)
            }, [r]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: u.useCallback(f => {
                c.current = f
            }, []),
            disableHoverableContent: o
        }, a)
    },
    Co = "Tooltip",
    [ju, ir] = ar(Co),
    Fu = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: i,
            delayDuration: s
        } = e, c = $o(Co, e.__scopeTooltip), l = wo(t), [f, d] = u.useState(null), m = Bt(), p = u.useRef(0), v = i ? ? c.disableHoverableContent, h = s ? ? c.delayDuration, b = u.useRef(!1), [g = !1, y] = pt({
            prop: r,
            defaultProp: o,
            onChange: _ => {
                _ ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Xr))) : c.onClose(), a == null || a(_)
            }
        }), $ = u.useMemo(() => g ? b.current ? "delayed-open" : "instant-open" : "closed", [g]), w = u.useCallback(() => {
            window.clearTimeout(p.current), b.current = !1, y(!0)
        }, [y]), C = u.useCallback(() => {
            window.clearTimeout(p.current), y(!1)
        }, [y]), S = u.useCallback(() => {
            window.clearTimeout(p.current), p.current = window.setTimeout(() => {
                b.current = !0, y(!0)
            }, h)
        }, [h, y]);
        return u.useEffect(() => () => window.clearTimeout(p.current), []), u.createElement(Ni, l, u.createElement(ju, {
            scope: t,
            contentId: m,
            open: g,
            stateAttribute: $,
            trigger: f,
            onTriggerChange: d,
            onTriggerEnter: u.useCallback(() => {
                c.isOpenDelayed ? S() : w()
            }, [c.isOpenDelayed, S, w]),
            onTriggerLeave: u.useCallback(() => {
                v ? C() : window.clearTimeout(p.current)
            }, [C, v]),
            onOpen: w,
            onClose: C,
            disableHoverableContent: v
        }, n))
    },
    ia = "TooltipTrigger",
    Wu = u.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = ir(ia, n), a = $o(ia, n), i = wo(n), s = u.useRef(null), c = De(t, s, o.onTriggerChange), l = u.useRef(!1), f = u.useRef(!1), d = u.useCallback(() => l.current = !1, []);
        return u.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), u.createElement(Mi, G({
            asChild: !0
        }, i), u.createElement(ye.button, G({
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute
        }, r, {
            ref: c,
            onPointerMove: ce(e.onPointerMove, m => {
                m.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0)
            }),
            onPointerLeave: ce(e.onPointerLeave, () => {
                o.onTriggerLeave(), f.current = !1
            }),
            onPointerDown: ce(e.onPointerDown, () => {
                l.current = !0, document.addEventListener("pointerup", d, {
                    once: !0
                })
            }),
            onFocus: ce(e.onFocus, () => {
                l.current || o.onOpen()
            }),
            onBlur: ce(e.onBlur, o.onClose),
            onClick: ce(e.onClick, o.onClose)
        })))
    }),
    Bu = "TooltipPortal",
    [Tb, Hu] = ar(Bu, {
        forceMount: void 0
    }),
    sn = "TooltipContent",
    Vu = u.forwardRef((e, t) => {
        const n = Hu(sn, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...a
            } = e,
            i = ir(sn, e.__scopeTooltip);
        return u.createElement(Pt, {
            present: r || i.open
        }, i.disableHoverableContent ? u.createElement(Ai, G({
            side: o
        }, a, {
            ref: t
        })) : u.createElement(zu, G({
            side: o
        }, a, {
            ref: t
        })))
    }),
    zu = u.forwardRef((e, t) => {
        const n = ir(sn, e.__scopeTooltip),
            r = $o(sn, e.__scopeTooltip),
            o = u.useRef(null),
            a = De(t, o),
            [i, s] = u.useState(null),
            {
                trigger: c,
                onClose: l
            } = n,
            f = o.current,
            {
                onPointerInTransitChange: d
            } = r,
            m = u.useCallback(() => {
                s(null), d(!1)
            }, [d]),
            p = u.useCallback((v, h) => {
                const b = v.currentTarget,
                    g = {
                        x: v.clientX,
                        y: v.clientY
                    },
                    y = Gu(g, b.getBoundingClientRect()),
                    $ = Yu(g, y),
                    w = Ku(h.getBoundingClientRect()),
                    C = Xu([...$, ...w]);
                s(C), d(!0)
            }, [d]);
        return u.useEffect(() => () => m(), [m]), u.useEffect(() => {
            if (c && f) {
                const v = b => p(b, f),
                    h = b => p(b, c);
                return c.addEventListener("pointerleave", v), f.addEventListener("pointerleave", h), () => {
                    c.removeEventListener("pointerleave", v), f.removeEventListener("pointerleave", h)
                }
            }
        }, [c, f, p, m]), u.useEffect(() => {
            if (i) {
                const v = h => {
                    const b = h.target,
                        g = {
                            x: h.clientX,
                            y: h.clientY
                        },
                        y = (c == null ? void 0 : c.contains(b)) || (f == null ? void 0 : f.contains(b)),
                        $ = !qu(g, i);
                    y ? m() : $ && (m(), l())
                };
                return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v)
            }
        }, [c, f, i, l, m]), u.createElement(Ai, G({}, e, {
            ref: a
        }))
    }),
    [Uu, Nb] = ar(Co, {
        isInside: !1
    }),
    Ai = u.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
        } = e, c = ir(sn, n), l = wo(n), {
            onClose: f
        } = c;
        return u.useEffect(() => (document.addEventListener(Xr, f), () => document.removeEventListener(Xr, f)), [f]), u.useEffect(() => {
            if (c.trigger) {
                const d = m => {
                    const p = m.target;
                    p != null && p.contains(c.trigger) && f()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [c.trigger, f]), u.createElement(po, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: f
        }, u.createElement(ki, G({
            "data-state": c.stateAttribute
        }, l, s, {
            ref: t,
            style: { ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }), u.createElement(ei, null, r), u.createElement(Uu, {
            scope: n,
            isInside: !0
        }, u.createElement(Mu, {
            id: c.contentId,
            role: "tooltip"
        }, o || r))))
    });

function Gu(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, a)) {
        case a:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable")
    }
}

function Yu(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({
                x: e.x - n,
                y: e.y + n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "bottom":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y - n
            });
            break;
        case "left":
            r.push({
                x: e.x + n,
                y: e.y - n
            }, {
                x: e.x + n,
                y: e.y + n
            });
            break;
        case "right":
            r.push({
                x: e.x - n,
                y: e.y - n
            }, {
                x: e.x - n,
                y: e.y + n
            });
            break
    }
    return r
}

function Ku(e) {
    const {
        top: t,
        right: n,
        bottom: r,
        left: o
    } = e;
    return [{
        x: o,
        y: t
    }, {
        x: n,
        y: t
    }, {
        x: n,
        y: r
    }, {
        x: o,
        y: r
    }]
}

function qu(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
        const s = t[a].x,
            c = t[a].y,
            l = t[i].x,
            f = t[i].y;
        c > r != f > r && n < (l - s) * (r - c) / (f - c) + s && (o = !o)
    }
    return o
}

function Xu(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), Zu(t)
}

function Zu(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2;) {
            const a = t[t.length - 1],
                i = t[t.length - 2];
            if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) t.pop();
            else break
        }
        t.push(o)
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2;) {
            const a = n[n.length - 1],
                i = n[n.length - 2];
            if ((a.x - i.x) * (o.y - i.y) >= (a.y - i.y) * (o.x - i.x)) n.pop();
            else break
        }
        n.push(o)
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
}
const Qu = Lu,
    Ju = Fu,
    ed = Wu,
    td = Vu;
var nd = u.forwardRef((e, t) => {
        var n = e,
            {
                content: r,
                className: o,
                defaultOpen: a,
                open: i,
                onOpenChange: s,
                delayDuration: c = 300,
                disableHoverableContent: l,
                children: f
            } = n,
            d = Et(n, ["content", "className", "defaultOpen", "open", "onOpenChange", "delayDuration", "disableHoverableContent", "children"]);
        return x.jsx(Qu, {
            children: x.jsxs(Ju, {
                defaultOpen: a,
                open: i,
                onOpenChange: s,
                delayDuration: c,
                disableHoverableContent: l,
                children: [x.jsx(ed, {
                    asChild: !0,
                    children: f
                }), x.jsx(td, ct($e({
                    ref: t,
                    className: fe("bg-body-lighter animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-auto max-w-xs rounded-md p-2", o),
                    sideOffset: 4
                }, d), {
                    children: r
                }))]
            })
        })
    }),
    Mb = nd,
    rd = u.createContext(void 0),
    od = e => {
        const {
            dir: t,
            children: n
        } = e;
        return x.jsx(rd.Provider, {
            value: t,
            children: n
        })
    },
    ad = ({
        dir: e = "ltr",
        children: t
    }) => x.jsx(od, {
        dir: e,
        children: t
    }),
    kb = ad,
    id = ({
        width: e = 16,
        className: t = ""
    }) => x.jsxs("svg", {
        role: "status",
        "data-testid": "circle-spinner",
        className: fe("aspect-1 inline-block animate-spin align-middle", t),
        width: e,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [x.jsx("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            className: "fill-black/20 dark:fill-white/20"
        }), x.jsx("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentColor"
        })]
    }),
    sd = id,
    cd = {
        primary: "bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast disabled:bg-zinc-800",
        secondary: "bg-secondary hover:bg-secondary-light active:bg-secondary-dark ring-secondary text-secondary-contrast disabled:bg-zinc-800",
        tertiary: "bg-tertiary hover:bg-tertiary-light active:bg-tertiary-dark ring-tertiary text-tertiary-contrast disabled:bg-zinc-800",
        error: "bg-error hover:bg-error-light active:bg-error-dark ring-error text-error-contrast disabled:bg-zinc-800",
        success: "bg-success hover:bg-success-light active:bg-success-dark ring-success text-success-contrast disabled:bg-zinc-800",
        white: "bg-white hover:bg-gray-50 active:bg-white ring-white text-black disabled:bg-zinc-800",
        black: "bg-black hover:bg-[#0e0e0e] active:bg-black ring-black text-white disabled:bg-zinc-800",
        transparent: "bg-transparent ring-transparent text-text"
    },
    ld = {
        primary: "border-primary hover:bg-primary-light/20 active:bg-primary/30 text-primary disabled:border-gray-300 disabled:bg-gray-200",
        secondary: "border-secondary hover:bg-secondary-light/20 active:bg-secondary/30 text-secondary disabled:border-gray-300 disabled:bg-gray-200",
        tertiary: "border-tertiary hover:bg-tertiary-light/20 active:bg-tertiary/30 text-tertiary disabled:border-gray-300 disabled:bg-gray-200",
        error: "border-error hover:bg-error-light/20 active:bg-error/30 text-error disabled:border-gray-300 disabled:bg-gray-200",
        success: "border-success hover:bg-success-light/5 active:bg-success-light/10 ring-success text-success-dark disabled:border-gray-300",
        white: "border-text hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-gray-300 disabled:bg-zinc-800/50 disabled:border-zinc-600 disabled:text-red-600",
        black: "border-text hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-gray-300",
        transparent: "border-transparent ring-transparent text-black"
    },
    ud = {
        primary: "hover:bg-primary-light/5 active:bg-primary-light/10 ring-primary text-primary",
        secondary: "hover:bg-secondary-light/5 active:bg-secondary-light/10 ring-secondary text-secondary",
        tertiary: "hover:bg-tertiary-light/5 active:bg-tertiary-light/10 ring-tertiary text-tertiary",
        error: "hover:bg-error-light/5 active:bg-error-light/10 ring-error text-error",
        success: "hover:bg-success-light/5 active:bg-success-light/10 ring-success text-success",
        white: "hover:bg-text/5 active:bg-text/10 ring-text text-white disabled:bg-transparent",
        black: "hover:bg-text/5 active:bg-text/10 ring-text text-text-dark disabled:bg-transparent",
        transparent: "ring-text text-text disabled:bg-transparent"
    };

function dd(e, t) {
    var n = e,
        {
            children: r,
            as: o,
            theme: a = "primary",
            shape: i = "solid",
            loading: s,
            disabled: c,
            className: l = "",
            arrow: f,
            arrowColor: d,
            rounded: m = !0,
            phill: p = !1,
            shiny: v,
            queueProtected: h,
            overloads: b = {}
        } = n,
        g = Et(n, ["children", "as", "theme", "shape", "loading", "disabled", "className", "arrow", "arrowColor", "rounded", "phill", "shiny", "queueProtected", "overloads"]);
    const y = h,
        $ = c ? "button" : y ? "a" : o || "button",
        w = u.useMemo(() => {
            switch (i) {
                case "outlined":
                    return $e($e({}, ld), b.OUTLINED)[a] + " border focus:ring-1";
                case "text":
                    return $e($e({}, ud), b.TEXT)[a] + " focus:ring-1";
                default:
                    return $e($e({}, cd), b.SOLID)[a] + " focus:ring-1 ring-offset-2"
            }
        }, [a, i, b]);
    return x.jsxs($, ct($e($e({
        className: fe(w, "ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition", "disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed", p ? "rounded-full" : m ? "rounded-md" : "", l),
        disabled: s || c
    }, g), y ? {
        href: g.to
    } : {}), {
        ref: t,
        children: [v && x.jsx("div", {
            className: "animate-shiny-rippon rtl:animate-shiny-rippon-rtl absolute inset-0 h-20",
            children: x.jsx("div", {
                className: "absolute inset-0 h-14 -rotate-45 bg-gradient-to-b from-white/10 via-white/50 to-white/10"
            })
        }), s && x.jsx(sd, {}), " ", r, f && x.jsx("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 32 32",
            fill: "none",
            className: "shrink-0 ltr:rotate-180",
            children: x.jsx("path", {
                d: "M20.9426 8.94263C21.4633 8.42194 21.4633 7.57772 20.9426 7.05703C20.4219 6.53633 19.5777 6.53633 19.057 7.05703L11.057 15.057C10.5523 15.5618 10.5346 16.3745 11.017 16.9007L18.3503 24.9007C18.8478 25.4435 19.6913 25.4802 20.2341 24.9826C20.7769 24.485 20.8136 23.6416 20.316 23.0988L13.8453 16.0399L20.9426 8.94263Z",
                fill: d || "currentColor"
            })
        })]
    }))
}
var fd = u.forwardRef(dd),
    Li = fd;
let xr = 0;

function ji() {
    u.useEffect(() => {
        var e, t;
        const n = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : sa()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : sa()), xr++, () => {
            xr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), xr--
        }
    }, [])
}

function sa() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
const wr = "focusScope.autoFocusOnMount",
    $r = "focusScope.autoFocusOnUnmount",
    ca = {
        bubbles: !1,
        cancelable: !0
    },
    Fi = u.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...i
        } = e, [s, c] = u.useState(null), l = lt(o), f = lt(a), d = u.useRef(null), m = De(t, h => c(h)), p = u.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        u.useEffect(() => {
            if (r) {
                let h = function($) {
                        if (p.paused || !s) return;
                        const w = $.target;
                        s.contains(w) ? d.current = w : gt(d.current, {
                            select: !0
                        })
                    },
                    b = function($) {
                        if (p.paused || !s) return;
                        const w = $.relatedTarget;
                        w !== null && (s.contains(w) || gt(d.current, {
                            select: !0
                        }))
                    },
                    g = function($) {
                        if (document.activeElement === document.body)
                            for (const C of $) C.removedNodes.length > 0 && gt(s)
                    };
                document.addEventListener("focusin", h), document.addEventListener("focusout", b);
                const y = new MutationObserver(g);
                return s && y.observe(s, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", h), document.removeEventListener("focusout", b), y.disconnect()
                }
            }
        }, [r, s, p.paused]), u.useEffect(() => {
            if (s) {
                ua.add(p);
                const h = document.activeElement;
                if (!s.contains(h)) {
                    const g = new CustomEvent(wr, ca);
                    s.addEventListener(wr, l), s.dispatchEvent(g), g.defaultPrevented || (pd(bd(Wi(s)), {
                        select: !0
                    }), document.activeElement === h && gt(s))
                }
                return () => {
                    s.removeEventListener(wr, l), setTimeout(() => {
                        const g = new CustomEvent($r, ca);
                        s.addEventListener($r, f), s.dispatchEvent(g), g.defaultPrevented || gt(h ? ? document.body, {
                            select: !0
                        }), s.removeEventListener($r, f), ua.remove(p)
                    }, 0)
                }
            }
        }, [s, l, f, p]);
        const v = u.useCallback(h => {
            if (!n && !r || p.paused) return;
            const b = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
                g = document.activeElement;
            if (b && g) {
                const y = h.currentTarget,
                    [$, w] = md(y);
                $ && w ? !h.shiftKey && g === w ? (h.preventDefault(), n && gt($, {
                    select: !0
                })) : h.shiftKey && g === $ && (h.preventDefault(), n && gt(w, {
                    select: !0
                })) : g === y && h.preventDefault()
            }
        }, [n, r, p.paused]);
        return u.createElement(ye.div, G({
            tabIndex: -1
        }, i, {
            ref: m,
            onKeyDown: v
        }))
    });

function pd(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (gt(r, {
                select: t
            }), document.activeElement !== n) return
}

function md(e) {
    const t = Wi(e),
        n = la(t, e),
        r = la(t.reverse(), e);
    return [n, r]
}

function Wi(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: r => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
        });
    for (; n.nextNode();) t.push(n.currentNode);
    return t
}

function la(e, t) {
    for (const n of e)
        if (!vd(n, {
                upTo: t
            })) return n
}

function vd(e, {
    upTo: t
}) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e;) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement
    }
    return !1
}

function hd(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function gt(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && hd(e) && t && e.select()
    }
}
const ua = gd();

function gd() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = da(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = da(e, t), (n = e[0]) === null || n === void 0 || n.resume()
        }
    }
}

function da(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function bd(e) {
    return e.filter(t => t.tagName !== "A")
}
var yd = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    It = new WeakMap,
    Sn = new WeakMap,
    Pn = {},
    Cr = 0,
    Bi = function(e) {
        return e && (e.host || Bi(e.parentNode))
    },
    xd = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = Bi(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    wd = function(e, t, n, r) {
        var o = xd(t, Array.isArray(e) ? e : [e]);
        Pn[n] || (Pn[n] = new WeakMap);
        var a = Pn[n],
            i = [],
            s = new Set,
            c = new Set(o),
            l = function(d) {
                !d || s.has(d) || (s.add(d), l(d.parentNode))
            };
        o.forEach(l);
        var f = function(d) {
            !d || c.has(d) || Array.prototype.forEach.call(d.children, function(m) {
                if (s.has(m)) f(m);
                else try {
                    var p = m.getAttribute(r),
                        v = p !== null && p !== "false",
                        h = (It.get(m) || 0) + 1,
                        b = (a.get(m) || 0) + 1;
                    It.set(m, h), a.set(m, b), i.push(m), h === 1 && v && Sn.set(m, !0), b === 1 && m.setAttribute(n, "true"), v || m.setAttribute(r, "true")
                } catch (g) {
                    console.error("aria-hidden: cannot operate on ", m, g)
                }
            })
        };
        return f(t), s.clear(), Cr++,
            function() {
                i.forEach(function(d) {
                    var m = It.get(d) - 1,
                        p = a.get(d) - 1;
                    It.set(d, m), a.set(d, p), m || (Sn.has(d) || d.removeAttribute(r), Sn.delete(d)), p || d.removeAttribute(n)
                }), Cr--, Cr || (It = new WeakMap, It = new WeakMap, Sn = new WeakMap, Pn = {})
            }
    },
    Hi = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = yd(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), wd(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    Ze = function() {
        return Ze = Object.assign || function(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
                n = arguments[r];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
            }
            return t
        }, Ze.apply(this, arguments)
    };

function Vi(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function $d(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, a; r < o; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var An = "right-scroll-bar-position",
    Ln = "width-before-scroll-bar",
    Cd = "with-scroll-bars-hidden",
    Ed = "--removed-body-scroll-bar-size";

function Er(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function Sd(e, t) {
    var n = u.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r, n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t, n.facade
}
var Pd = typeof window < "u" ? u.useLayoutEffect : u.useEffect,
    fa = new WeakMap;

function Rd(e, t) {
    var n = Sd(null, function(r) {
        return e.forEach(function(o) {
            return Er(o, r)
        })
    });
    return Pd(function() {
        var r = fa.get(n);
        if (r) {
            var o = new Set(r),
                a = new Set(e),
                i = n.current;
            o.forEach(function(s) {
                a.has(s) || Er(s, null)
            }), a.forEach(function(s) {
                o.has(s) || Er(s, i)
            })
        }
        fa.set(n, e)
    }, [e]), n
}

function Dd(e) {
    return e
}

function _d(e, t) {
    t === void 0 && (t = Dd);
    var n = [],
        r = !1,
        o = {
            read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
            },
            useMedium: function(a) {
                var i = t(a, r);
                return n.push(i),
                    function() {
                        n = n.filter(function(s) {
                            return s !== i
                        })
                    }
            },
            assignSyncMedium: function(a) {
                for (r = !0; n.length;) {
                    var i = n;
                    n = [], i.forEach(a)
                }
                n = {
                    push: function(s) {
                        return a(s)
                    },
                    filter: function() {
                        return n
                    }
                }
            },
            assignMedium: function(a) {
                r = !0;
                var i = [];
                if (n.length) {
                    var s = n;
                    n = [], s.forEach(a), i = n
                }
                var c = function() {
                        var f = i;
                        i = [], f.forEach(a)
                    },
                    l = function() {
                        return Promise.resolve().then(c)
                    };
                l(), n = {
                    push: function(f) {
                        i.push(f), l()
                    },
                    filter: function(f) {
                        return i = i.filter(f), n
                    }
                }
            }
        };
    return o
}

function Od(e) {
    e === void 0 && (e = {});
    var t = _d(null);
    return t.options = Ze({
        async: !0,
        ssr: !1
    }, e), t
}
var zi = function(e) {
    var t = e.sideCar,
        n = Vi(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return u.createElement(r, Ze({}, n))
};
zi.isSideCarExport = !0;

function Td(e, t) {
    return e.useMedium(t), zi
}
var Ui = Od(),
    Sr = function() {},
    sr = u.forwardRef(function(e, t) {
        var n = u.useRef(null),
            r = u.useState({
                onScrollCapture: Sr,
                onWheelCapture: Sr,
                onTouchMoveCapture: Sr
            }),
            o = r[0],
            a = r[1],
            i = e.forwardProps,
            s = e.children,
            c = e.className,
            l = e.removeScrollBar,
            f = e.enabled,
            d = e.shards,
            m = e.sideCar,
            p = e.noIsolation,
            v = e.inert,
            h = e.allowPinchZoom,
            b = e.as,
            g = b === void 0 ? "div" : b,
            y = Vi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
            $ = m,
            w = Rd([n, t]),
            C = Ze(Ze({}, y), o);
        return u.createElement(u.Fragment, null, f && u.createElement($, {
            sideCar: Ui,
            removeScrollBar: l,
            shards: d,
            noIsolation: p,
            inert: v,
            setCallbacks: a,
            allowPinchZoom: !!h,
            lockRef: n
        }), i ? u.cloneElement(u.Children.only(s), Ze(Ze({}, C), {
            ref: w
        })) : u.createElement(g, Ze({}, C, {
            className: c,
            ref: w
        }), s))
    });
sr.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
sr.classNames = {
    fullWidth: Ln,
    zeroRight: An
};
var Nd = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Md() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Nd();
    return t && e.setAttribute("nonce", t), e
}

function kd(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function Id(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var Ad = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Md()) && (kd(t, n), Id(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    Ld = function() {
        var e = Ad();
        return function(t, n) {
            u.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    Gi = function() {
        var e = Ld(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    jd = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    Pr = function(e) {
        return parseInt(e || "", 10) || 0
    },
    Fd = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Pr(n), Pr(r), Pr(o)]
    },
    Wd = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return jd;
        var t = Fd(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    Bd = Gi(),
    Vt = "data-scroll-locked",
    Hd = function(e, t, n, r) {
        var o = e.left,
            a = e.top,
            i = e.right,
            s = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(Cd, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Vt, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(An, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ln, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(An, " .").concat(An, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Ln, " .").concat(Ln, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Vt, `] {
    `).concat(Ed, ": ").concat(s, `px;
  }
`)
    },
    pa = function() {
        var e = parseInt(document.body.getAttribute(Vt) || "0", 10);
        return isFinite(e) ? e : 0
    },
    Vd = function() {
        u.useEffect(function() {
            return document.body.setAttribute(Vt, (pa() + 1).toString()),
                function() {
                    var e = pa() - 1;
                    e <= 0 ? document.body.removeAttribute(Vt) : document.body.setAttribute(Vt, e.toString())
                }
        }, [])
    },
    zd = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        Vd();
        var a = u.useMemo(function() {
            return Wd(o)
        }, [o]);
        return u.createElement(Bd, {
            styles: Hd(a, !t, o, n ? "" : "!important")
        })
    },
    Zr = !1;
if (typeof window < "u") try {
    var Rn = Object.defineProperty({}, "passive", {
        get: function() {
            return Zr = !0, !0
        }
    });
    window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn)
} catch {
    Zr = !1
}
var At = Zr ? {
        passive: !1
    } : !1,
    Ud = function(e) {
        return e.tagName === "TEXTAREA"
    },
    Yi = function(e, t) {
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Ud(e) && n[t] === "visible")
    },
    Gd = function(e) {
        return Yi(e, "overflowY")
    },
    Yd = function(e) {
        return Yi(e, "overflowX")
    },
    ma = function(e, t) {
        var n = t;
        do {
            typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
            var r = Ki(e, n);
            if (r) {
                var o = qi(e, n),
                    a = o[1],
                    i = o[2];
                if (a > i) return !0
            }
            n = n.parentNode
        } while (n && n !== document.body);
        return !1
    },
    Kd = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    qd = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    Ki = function(e, t) {
        return e === "v" ? Gd(t) : Yd(t)
    },
    qi = function(e, t) {
        return e === "v" ? Kd(t) : qd(t)
    },
    Xd = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    Zd = function(e, t, n, r, o) {
        var a = Xd(e, window.getComputedStyle(t).direction),
            i = a * r,
            s = n.target,
            c = t.contains(s),
            l = !1,
            f = i > 0,
            d = 0,
            m = 0;
        do {
            var p = qi(e, s),
                v = p[0],
                h = p[1],
                b = p[2],
                g = h - b - a * v;
            (v || g) && Ki(e, s) && (d += g, m += v), s = s.parentNode
        } while (!c && s !== document.body || c && (t.contains(s) || t === s));
        return (f && (d === 0 || !o) || !f && (m === 0 || !o)) && (l = !0), l
    },
    Dn = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    va = function(e) {
        return [e.deltaX, e.deltaY]
    },
    ha = function(e) {
        return e && "current" in e ? e.current : e
    },
    Qd = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    Jd = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    ef = 0,
    Lt = [];

function tf(e) {
    var t = u.useRef([]),
        n = u.useRef([0, 0]),
        r = u.useRef(),
        o = u.useState(ef++)[0],
        a = u.useState(function() {
            return Gi()
        })[0],
        i = u.useRef(e);
    u.useEffect(function() {
        i.current = e
    }, [e]), u.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var h = $d([e.lockRef.current], (e.shards || []).map(ha), !0).filter(Boolean);
            return h.forEach(function(b) {
                    return b.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(b) {
                        return b.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = u.useCallback(function(h, b) {
            if ("touches" in h && h.touches.length === 2) return !i.current.allowPinchZoom;
            var g = Dn(h),
                y = n.current,
                $ = "deltaX" in h ? h.deltaX : y[0] - g[0],
                w = "deltaY" in h ? h.deltaY : y[1] - g[1],
                C, S = h.target,
                _ = Math.abs($) > Math.abs(w) ? "h" : "v";
            if ("touches" in h && _ === "h" && S.type === "range") return !1;
            var P = ma(_, S);
            if (!P) return !0;
            if (P ? C = _ : (C = _ === "v" ? "h" : "v", P = ma(_, S)), !P) return !1;
            if (!r.current && "changedTouches" in h && ($ || w) && (r.current = C), !C) return !0;
            var D = r.current || C;
            return Zd(D, b, h, D === "h" ? $ : w, !0)
        }, []),
        c = u.useCallback(function(h) {
            var b = h;
            if (!(!Lt.length || Lt[Lt.length - 1] !== a)) {
                var g = "deltaY" in b ? va(b) : Dn(b),
                    y = t.current.filter(function(C) {
                        return C.name === b.type && C.target === b.target && Qd(C.delta, g)
                    })[0];
                if (y && y.should) {
                    b.cancelable && b.preventDefault();
                    return
                }
                if (!y) {
                    var $ = (i.current.shards || []).map(ha).filter(Boolean).filter(function(C) {
                            return C.contains(b.target)
                        }),
                        w = $.length > 0 ? s(b, $[0]) : !i.current.noIsolation;
                    w && b.cancelable && b.preventDefault()
                }
            }
        }, []),
        l = u.useCallback(function(h, b, g, y) {
            var $ = {
                name: h,
                delta: b,
                target: g,
                should: y
            };
            t.current.push($), setTimeout(function() {
                t.current = t.current.filter(function(w) {
                    return w !== $
                })
            }, 1)
        }, []),
        f = u.useCallback(function(h) {
            n.current = Dn(h), r.current = void 0
        }, []),
        d = u.useCallback(function(h) {
            l(h.type, va(h), h.target, s(h, e.lockRef.current))
        }, []),
        m = u.useCallback(function(h) {
            l(h.type, Dn(h), h.target, s(h, e.lockRef.current))
        }, []);
    u.useEffect(function() {
        return Lt.push(a), e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: m
            }), document.addEventListener("wheel", c, At), document.addEventListener("touchmove", c, At), document.addEventListener("touchstart", f, At),
            function() {
                Lt = Lt.filter(function(h) {
                    return h !== a
                }), document.removeEventListener("wheel", c, At), document.removeEventListener("touchmove", c, At), document.removeEventListener("touchstart", f, At)
            }
    }, []);
    var p = e.removeScrollBar,
        v = e.inert;
    return u.createElement(u.Fragment, null, v ? u.createElement(a, {
        styles: Jd(o)
    }) : null, p ? u.createElement(zd, {
        gapMode: "margin"
    }) : null)
}
const nf = Td(Ui, tf);
var Eo = u.forwardRef(function(e, t) {
    return u.createElement(sr, Ze({}, e, {
        ref: t,
        sideCar: nf
    }))
});
Eo.classNames = sr.classNames;
var rf = u.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                error: a,
                onChange: i,
                onFileChange: s,
                rounded: c = !0,
                className: l,
                groupClassName: f,
                startIcon: d,
                type: m,
                hideErrorSpace: p = !0,
                hideErrorMark: v = !1
            } = r,
            h = Et(r, ["label", "error", "onChange", "onFileChange", "rounded", "className", "groupClassName", "startIcon", "type", "hideErrorSpace", "hideErrorMark"]);
        const [b, g] = u.useState(!1);
        return x.jsxs("div", {
            className: f,
            children: [o && x.jsx("label", {
                className: `block pb-1 font-semibold ${h.disabled?"text-gray-400":""}`,
                htmlFor: h.id,
                children: o
            }), x.jsxs("div", {
                className: "relative",
                children: [d && x.jsx("div", {
                    className: "absolute inset-y-0 h-full w-full max-w-[50px]",
                    children: d
                }), x.jsx("input", $e({
                    className: fe("bg-input/20 hover:bg-input/30 focus:bg-input/30 w-full border p-2 placeholder:text-gray-400 focus:outline-none focus:ring-0", "disabled:bg-input/10 disabled:text-text/60 disabled:cursor-not-allowed", a ? "border-error" : "border-input/20 focus:border-input/30", c ? "rounded-md" : "rounded-none", h.dir === "ltr" ? "pr-6" : "ltr:pr-6 rtl:pl-6 rtl:text-right", d ? "ltr:pl-8 rtl:pr-8" : "", l),
                    ref: n,
                    onChange: y => {
                        if (m === "file") return s == null ? void 0 : s(y.target.files);
                        i == null || i(y.target.value)
                    },
                    type: m === "password" ? b ? "text" : "password" : m
                }, h)), !!a && !v && x.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 20 19",
                    className: `fill-error absolute inset-y-0 right-0 mx-1 h-full ${h.dir==="ltr"?"":"rtl:left-0 rtl:right-auto"}`,
                    children: x.jsx("path", {
                        d: "M9.99121 18.7422C14.9746 18.7422 19.0879 14.6289 19.0879 9.6543C19.0879 4.67969 14.9658 0.566406 9.98242 0.566406C5.00781 0.566406 0.90332 4.67969 0.90332 9.6543C0.90332 14.6289 5.0166 18.7422 9.99121 18.7422ZM9.99121 16.9316C5.95703 16.9316 2.73145 13.6885 2.73145 9.6543C2.73145 5.62012 5.95703 2.38574 9.98242 2.38574C14.0166 2.38574 17.2598 5.62012 17.2686 9.6543C17.2773 13.6885 14.0254 16.9316 9.99121 16.9316ZM9.98242 11.1133C10.4658 11.1133 10.7471 10.8408 10.7559 10.3311L10.8877 6.10352C10.9053 5.58496 10.5186 5.20703 9.97363 5.20703C9.42871 5.20703 9.05078 5.57617 9.06836 6.09473L9.19141 10.3311C9.20898 10.832 9.49023 11.1133 9.98242 11.1133ZM9.98242 14.0312C10.5537 14.0312 11.0195 13.6182 11.0195 13.0557C11.0195 12.502 10.5625 12.0889 9.98242 12.0889C9.41113 12.0889 8.94531 12.502 8.94531 13.0557C8.94531 13.6094 9.41992 14.0312 9.98242 14.0312Z"
                    })
                }), m === "password" && x.jsx("button", {
                    type: "button",
                    className: `absolute inset-y-0 mx-1 h-full text-xs text-gray-500 hover:opacity-70 focus:opacity-70 ${a?"ltr:right-6 rtl:left-6":"ltr:right-0 rtl:left-0"}`,
                    onClick: y => {
                        y.preventDefault(), g($ => !$)
                    },
                    tabIndex: -1,
                    children: x.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        className: b ? "fill-input/80" : "fill-input/40",
                        children: x.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 5C4.54545 5 2.5 10 2.5 10C2.5 10 4.54545 15 10 15C14.0909 15 17.5 10 17.5 10C17.5 10 14.0909 5 10 5ZM7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10Z"
                        })
                    })
                })]
            }), (typeof a == "string" && !!a || !p) && x.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${a?"visible":"text-transparent"}`,
                children: a
            })]
        })
    }),
    Xi = rf;

function bt(e) {
    let t = e.activeElement;
    for (;
        ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null;) {
        var n;
        t = t.shadowRoot.activeElement
    }
    return t
}

function Ie(e, t) {
    if (!e || !t) return !1;
    const n = t.getRootNode == null ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && qr(n)) {
        let r = t;
        for (; r;) {
            if (e === r) return !0;
            r = r.parentNode || r.host
        }
    }
    return !1
}

function Zi() {
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform
}

function Qi() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {
            brand: n,
            version: r
        } = t;
        return n + "/" + r
    }).join(" ") : navigator.userAgent
}

function Ji(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : Qr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function es(e) {
    return af() ? !1 : !Qr() && e.width === 0 && e.height === 0 || Qr() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch"
}

function ts() {
    return /apple/i.test(navigator.vendor)
}

function Qr() {
    const e = /android/i;
    return e.test(Zi()) || e.test(Qi())
}

function of () {
    return Zi().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
}

function af() {
    return Qi().includes("jsdom/")
}

function sf(e) {
    return "nativeEvent" in e
}

function cf(e) {
    return e.matches("html,body")
}

function Qe(e) {
    return (e == null ? void 0 : e.ownerDocument) || document
}

function Rr(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target)
}

function Ft(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
const lf = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

function uf(e) {
    return Me(e) && e.matches(lf)
}

function Ne(e) {
    e.preventDefault(), e.stopPropagation()
}

function ns(e) {
    return e ? e.getAttribute("role") === "combobox" && uf(e) : !1
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var df = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    Gn = df.join(","),
    rs = typeof Element > "u",
    Yt = rs ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Yn = !rs && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e == null ? void 0 : e.ownerDocument
    },
    Kn = function e(t, n) {
        var r;
        n === void 0 && (n = !0);
        var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"),
            a = o === "" || o === "true",
            i = a || n && t && e(t.parentNode);
        return i
    },
    ff = function(t) {
        var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
        return r === "" || r === "true"
    },
    pf = function(t, n, r) {
        if (Kn(t)) return [];
        var o = Array.prototype.slice.apply(t.querySelectorAll(Gn));
        return n && Yt.call(t, Gn) && o.unshift(t), o = o.filter(r), o
    },
    mf = function e(t, n, r) {
        for (var o = [], a = Array.from(t); a.length;) {
            var i = a.shift();
            if (!Kn(i, !1))
                if (i.tagName === "SLOT") {
                    var s = i.assignedElements(),
                        c = s.length ? s : i.children,
                        l = e(c, !0, r);
                    r.flatten ? o.push.apply(o, l) : o.push({
                        scopeParent: i,
                        candidates: l
                    })
                } else {
                    var f = Yt.call(i, Gn);
                    f && r.filter(i) && (n || !t.includes(i)) && o.push(i);
                    var d = i.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(i),
                        m = !Kn(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                    if (d && m) {
                        var p = e(d === !0 ? i.children : d.children, !0, r);
                        r.flatten ? o.push.apply(o, p) : o.push({
                            scopeParent: i,
                            candidates: p
                        })
                    } else a.unshift.apply(a, i.children)
                }
        }
        return o
    },
    os = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    as = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || ff(t)) && !os(t) ? 0 : t.tabIndex
    },
    vf = function(t, n) {
        var r = as(t);
        return r < 0 && n && !os(t) ? 0 : r
    },
    hf = function(t, n) {
        return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
    },
    is = function(t) {
        return t.tagName === "INPUT"
    },
    gf = function(t) {
        return is(t) && t.type === "hidden"
    },
    bf = function(t) {
        var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
            return r.tagName === "SUMMARY"
        });
        return n
    },
    yf = function(t, n) {
        for (var r = 0; r < t.length; r++)
            if (t[r].checked && t[r].form === n) return t[r]
    },
    xf = function(t) {
        if (!t.name) return !0;
        var n = t.form || Yn(t),
            r = function(s) {
                return n.querySelectorAll('input[type="radio"][name="' + s + '"]')
            },
            o;
        if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function") o = r(window.CSS.escape(t.name));
        else try {
            o = r(t.name)
        } catch (i) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1
        }
        var a = yf(o, t.form);
        return !a || a === t
    },
    wf = function(t) {
        return is(t) && t.type === "radio"
    },
    $f = function(t) {
        return wf(t) && !xf(t)
    },
    Cf = function(t) {
        var n, r = t && Yn(t),
            o = (n = r) === null || n === void 0 ? void 0 : n.host,
            a = !1;
        if (r && r !== t) {
            var i, s, c;
            for (a = !!((i = o) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(o) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !a && o;) {
                var l, f, d;
                r = Yn(o), o = (l = r) === null || l === void 0 ? void 0 : l.host, a = !!((f = o) !== null && f !== void 0 && (d = f.ownerDocument) !== null && d !== void 0 && d.contains(o))
            }
        }
        return a
    },
    ga = function(t) {
        var n = t.getBoundingClientRect(),
            r = n.width,
            o = n.height;
        return r === 0 && o === 0
    },
    Ef = function(t, n) {
        var r = n.displayCheck,
            o = n.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var a = Yt.call(t, "details>summary:first-of-type"),
            i = a ? t.parentElement : t;
        if (Yt.call(i, "details:not([open]) *")) return !0;
        if (!r || r === "full" || r === "legacy-full") {
            if (typeof o == "function") {
                for (var s = t; t;) {
                    var c = t.parentElement,
                        l = Yn(t);
                    if (c && !c.shadowRoot && o(c) === !0) return ga(t);
                    t.assignedSlot ? t = t.assignedSlot : !c && l !== t.ownerDocument ? t = l.host : t = c
                }
                t = s
            }
            if (Cf(t)) return !t.getClientRects().length;
            if (r !== "legacy-full") return !0
        } else if (r === "non-zero-area") return ga(t);
        return !1
    },
    Sf = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var n = t.parentElement; n;) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                    for (var r = 0; r < n.children.length; r++) {
                        var o = n.children.item(r);
                        if (o.tagName === "LEGEND") return Yt.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t)
                    }
                    return !0
                }
                n = n.parentElement
            }
        return !1
    },
    Pf = function(t, n) {
        return !(n.disabled || Kn(n) || gf(n) || Ef(n, t) || bf(n) || Sf(n))
    },
    Jr = function(t, n) {
        return !($f(n) || as(n) < 0 || !Pf(t, n))
    },
    Rf = function(t) {
        var n = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(n) || n >= 0)
    },
    Df = function e(t) {
        var n = [],
            r = [];
        return t.forEach(function(o, a) {
            var i = !!o.scopeParent,
                s = i ? o.scopeParent : o,
                c = vf(s, i),
                l = i ? e(o.candidates) : s;
            c === 0 ? i ? n.push.apply(n, l) : n.push(s) : r.push({
                documentOrder: a,
                tabIndex: c,
                item: o,
                isScope: i,
                content: l
            })
        }), r.sort(hf).reduce(function(o, a) {
            return a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o
        }, []).concat(n)
    },
    cr = function(t, n) {
        n = n || {};
        var r;
        return n.getShadowRoot ? r = mf([t], n.includeContainer, {
            filter: Jr.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: Rf
        }) : r = pf(t, n.includeContainer, Jr.bind(null, n)), Df(r)
    },
    _f = function(t, n) {
        if (n = n || {}, !t) throw new Error("No node provided");
        return Yt.call(t, Gn) === !1 ? !1 : Jr(n, t)
    };
const ss = { ...Ua
    },
    Of = ss.useInsertionEffect,
    Tf = Of || (e => e());

function yt(e) {
    const t = u.useRef(() => {});
    return Tf(() => {
        t.current = e
    }), u.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
const So = "ArrowUp",
    gn = "ArrowDown",
    Kt = "ArrowLeft",
    Zt = "ArrowRight";

function _n(e, t, n) {
    return Math.floor(e / t) !== n
}

function tn(e, t) {
    return t < 0 || t >= e.current.length
}

function Dr(e, t) {
    return Te(e, {
        disabledIndices: t
    })
}

function ba(e, t) {
    return Te(e, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    })
}

function Te(e, t) {
    let {
        startingIndex: n = -1,
        decrement: r = !1,
        disabledIndices: o,
        amount: a = 1
    } = t === void 0 ? {} : t;
    const i = e.current;
    let s = n;
    do s += r ? -a : a; while (s >= 0 && s <= i.length - 1 && jn(i, s, o));
    return s
}

function Nf(e, t) {
    let {
        event: n,
        orientation: r,
        loop: o,
        cols: a,
        disabledIndices: i,
        minIndex: s,
        maxIndex: c,
        prevIndex: l,
        stopEvent: f = !1
    } = t, d = l;
    if (n.key === So) {
        if (f && Ne(n), l === -1) d = c;
        else if (d = Te(e, {
                startingIndex: d,
                amount: a,
                decrement: !0,
                disabledIndices: i
            }), o && (l - a < s || d < 0)) {
            const m = l % a,
                p = c % a,
                v = c - (p - m);
            p === m ? d = c : d = p > m ? v : v - a
        }
        tn(e, d) && (d = l)
    }
    if (n.key === gn && (f && Ne(n), l === -1 ? d = s : (d = Te(e, {
            startingIndex: l,
            amount: a,
            disabledIndices: i
        }), o && l + a > c && (d = Te(e, {
            startingIndex: l % a - a,
            amount: a,
            disabledIndices: i
        }))), tn(e, d) && (d = l)), r === "both") {
        const m = Wt(l / a);
        n.key === Zt && (f && Ne(n), l % a !== a - 1 ? (d = Te(e, {
            startingIndex: l,
            disabledIndices: i
        }), o && _n(d, a, m) && (d = Te(e, {
            startingIndex: l - l % a - 1,
            disabledIndices: i
        }))) : o && (d = Te(e, {
            startingIndex: l - l % a - 1,
            disabledIndices: i
        })), _n(d, a, m) && (d = l)), n.key === Kt && (f && Ne(n), l % a !== 0 ? (d = Te(e, {
            startingIndex: l,
            decrement: !0,
            disabledIndices: i
        }), o && _n(d, a, m) && (d = Te(e, {
            startingIndex: l + (a - l % a),
            decrement: !0,
            disabledIndices: i
        }))) : o && (d = Te(e, {
            startingIndex: l + (a - l % a),
            decrement: !0,
            disabledIndices: i
        })), _n(d, a, m) && (d = l));
        const p = Wt(c / a) === m;
        tn(e, d) && (o && p ? d = n.key === Kt ? c : Te(e, {
            startingIndex: l - l % a - 1,
            disabledIndices: i
        }) : d = l)
    }
    return d
}

function Mf(e, t, n) {
    const r = [];
    let o = 0;
    return e.forEach((a, i) => {
        let {
            width: s,
            height: c
        } = a, l = !1;
        for (n && (o = 0); !l;) {
            const f = [];
            for (let d = 0; d < s; d++)
                for (let m = 0; m < c; m++) f.push(o + d + m * t);
            o % t + s <= t && f.every(d => r[d] == null) ? (f.forEach(d => {
                r[d] = i
            }), l = !0) : o++
        }
    }), [...r]
}

function kf(e, t, n, r, o) {
    if (e === -1) return -1;
    const a = n.indexOf(e),
        i = t[e];
    switch (o) {
        case "tl":
            return a;
        case "tr":
            return i ? a + i.width - 1 : a;
        case "bl":
            return i ? a + (i.height - 1) * r : a;
        case "br":
            return n.lastIndexOf(e)
    }
}

function If(e, t) {
    return t.flatMap((n, r) => e.includes(n) ? [r] : [])
}

function jn(e, t, n) {
    if (n) return n.includes(t);
    const r = e[t];
    return r == null || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true"
}
let ya = 0;

function at(e, t) {
    t === void 0 && (t = {});
    const {
        preventScroll: n = !1,
        cancelPrevious: r = !0,
        sync: o = !1
    } = t;
    r && cancelAnimationFrame(ya);
    const a = () => e == null ? void 0 : e.focus({
        preventScroll: n
    });
    o ? a() : ya = requestAnimationFrame(a)
}
var Re = typeof document < "u" ? u.useLayoutEffect : u.useEffect;

function qn() {
    return qn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, qn.apply(this, arguments)
}
let xa = !1,
    Af = 0;
const wa = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + Af++;

function Lf() {
    const [e, t] = u.useState(() => xa ? wa() : void 0);
    return Re(() => {
        e == null && t(wa())
    }, []), u.useEffect(() => {
        xa = !0
    }, []), e
}
const jf = ss.useId,
    Po = jf || Lf;

function Ff() {
    const e = new Map;
    return {
        emit(t, n) {
            var r;
            (r = e.get(t)) == null || r.forEach(o => o(n))
        },
        on(t, n) {
            e.set(t, [...e.get(t) || [], n])
        },
        off(t, n) {
            var r;
            e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter(o => o !== n)) || [])
        }
    }
}
const Wf = u.createContext(null),
    Bf = u.createContext(null),
    Ro = () => {
        var e;
        return ((e = u.useContext(Wf)) == null ? void 0 : e.id) || null
    },
    lr = () => u.useContext(Bf);

function cn(e) {
    return "data-floating-ui-" + e
}

function xt(e) {
    const t = u.useRef(e);
    return Re(() => {
        t.current = e
    }), t
}

function Hf(e, t) {
    var n;
    let r = [],
        o = (n = e.find(a => a.id === t)) == null ? void 0 : n.parentId;
    for (; o;) {
        const a = e.find(i => i.id === o);
        o = a == null ? void 0 : a.parentId, a && (r = r.concat(a))
    }
    return r
}

function zt(e, t) {
    let n = e.filter(o => {
            var a;
            return o.parentId === t && ((a = o.context) == null ? void 0 : a.open)
        }),
        r = n;
    for (; r.length;) r = e.filter(o => {
        var a;
        return (a = r) == null ? void 0 : a.some(i => {
            var s;
            return o.parentId === i.id && ((s = o.context) == null ? void 0 : s.open)
        })
    }), n = n.concat(r);
    return n
}

function Vf(e, t) {
    let n, r = -1;

    function o(a, i) {
        i > r && (n = a, r = i), zt(e, a).forEach(c => {
            o(c.id, i + 1)
        })
    }
    return o(t, 0), e.find(a => a.id === n)
}
let jt = new WeakMap,
    On = new WeakSet,
    Tn = {},
    _r = 0;
const zf = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
    cs = e => e && (e.host || cs(e.parentNode)),
    Uf = (e, t) => t.map(n => {
        if (e.contains(n)) return n;
        const r = cs(n);
        return e.contains(r) ? r : null
    }).filter(n => n != null);

function Gf(e, t, n, r) {
    const o = "data-floating-ui-inert",
        a = r ? "inert" : n ? "aria-hidden" : null,
        i = Uf(t, e),
        s = new Set,
        c = new Set(i),
        l = [];
    Tn[o] || (Tn[o] = new WeakMap);
    const f = Tn[o];
    i.forEach(d), m(t), s.clear();

    function d(p) {
        !p || s.has(p) || (s.add(p), p.parentNode && d(p.parentNode))
    }

    function m(p) {
        !p || c.has(p) || [].forEach.call(p.children, v => {
            if (St(v) !== "script")
                if (s.has(v)) m(v);
                else {
                    const h = a ? v.getAttribute(a) : null,
                        b = h !== null && h !== "false",
                        g = (jt.get(v) || 0) + 1,
                        y = (f.get(v) || 0) + 1;
                    jt.set(v, g), f.set(v, y), l.push(v), g === 1 && b && On.add(v), y === 1 && v.setAttribute(o, ""), !b && a && v.setAttribute(a, "true")
                }
        })
    }
    return _r++, () => {
        l.forEach(p => {
            const v = (jt.get(p) || 0) - 1,
                h = (f.get(p) || 0) - 1;
            jt.set(p, v), f.set(p, h), v || (!On.has(p) && a && p.removeAttribute(a), On.delete(p)), h || p.removeAttribute(o)
        }), _r--, _r || (jt = new WeakMap, jt = new WeakMap, On = new WeakSet, Tn = {})
    }
}

function $a(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = Qe(e[0]).body;
    return Gf(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n)
}
const ln = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function ls(e, t) {
    const n = cr(e, ln());
    t === "prev" && n.reverse();
    const r = n.indexOf(bt(Qe(e)));
    return n.slice(r + 1)[0]
}

function us() {
    return ls(document.body, "next")
}

function ds() {
    return ls(document.body, "prev")
}

function nn(e, t) {
    const n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !Ie(n, r)
}

function Yf(e) {
    cr(e, ln()).forEach(n => {
        n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1")
    })
}

function Kf(e) {
    e.querySelectorAll("[data-tabindex]").forEach(n => {
        const r = n.dataset.tabindex;
        delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex")
    })
}
const Do = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
};
let qf;

function Ca(e) {
    e.key === "Tab" && (e.target, clearTimeout(qf))
}
const Xn = u.forwardRef(function(t, n) {
        const [r, o] = u.useState();
        Re(() => (ts() && o("button"), document.addEventListener("keydown", Ca), () => {
            document.removeEventListener("keydown", Ca)
        }), []);
        const a = {
            ref: n,
            tabIndex: 0,
            role: r,
            "aria-hidden": r ? void 0 : !0,
            [cn("focus-guard")]: "",
            style: Do
        };
        return u.createElement("span", qn({}, t, a))
    }),
    fs = u.createContext(null),
    Ea = cn("portal");

function Xf(e) {
    e === void 0 && (e = {});
    const {
        id: t,
        root: n
    } = e, r = Po(), o = ps(), [a, i] = u.useState(null), s = u.useRef(null);
    return Re(() => () => {
        a == null || a.remove(), queueMicrotask(() => {
            s.current = null
        })
    }, [a]), Re(() => {
        if (!r || s.current) return;
        const c = t ? document.getElementById(t) : null;
        if (!c) return;
        const l = document.createElement("div");
        l.id = r, l.setAttribute(Ea, ""), c.appendChild(l), s.current = l, i(l)
    }, [t, r]), Re(() => {
        if (!r || s.current) return;
        let c = n || (o == null ? void 0 : o.portalNode);
        c && !Ee(c) && (c = c.current), c = c || document.body;
        let l = null;
        t && (l = document.createElement("div"), l.id = t, c.appendChild(l));
        const f = document.createElement("div");
        f.id = r, f.setAttribute(Ea, ""), c = l || c, c.appendChild(f), s.current = f, i(f)
    }, [t, n, r, o]), a
}

function Zf(e) {
    const {
        children: t,
        id: n,
        root: r = null,
        preserveTabOrder: o = !0
    } = e, a = Xf({
        id: n,
        root: r
    }), [i, s] = u.useState(null), c = u.useRef(null), l = u.useRef(null), f = u.useRef(null), d = u.useRef(null), m = !!i && !i.modal && i.open && o && !!(r || a);
    return u.useEffect(() => {
        if (!a || !o || i != null && i.modal) return;

        function p(v) {
            a && nn(v) && (v.type === "focusin" ? Kf : Yf)(a)
        }
        return a.addEventListener("focusin", p, !0), a.addEventListener("focusout", p, !0), () => {
            a.removeEventListener("focusin", p, !0), a.removeEventListener("focusout", p, !0)
        }
    }, [a, o, i == null ? void 0 : i.modal]), u.createElement(fs.Provider, {
        value: u.useMemo(() => ({
            preserveTabOrder: o,
            beforeOutsideRef: c,
            afterOutsideRef: l,
            beforeInsideRef: f,
            afterInsideRef: d,
            portalNode: a,
            setFocusManagerState: s
        }), [o, a])
    }, m && a && u.createElement(Xn, {
        "data-type": "outside",
        ref: c,
        onFocus: p => {
            if (nn(p, a)) {
                var v;
                (v = f.current) == null || v.focus()
            } else {
                const h = ds() || (i == null ? void 0 : i.refs.domReference.current);
                h == null || h.focus()
            }
        }
    }), m && a && u.createElement("span", {
        "aria-owns": a.id,
        style: Do
    }), a && er.createPortal(t, a), m && a && u.createElement(Xn, {
        "data-type": "outside",
        ref: l,
        onFocus: p => {
            if (nn(p, a)) {
                var v;
                (v = d.current) == null || v.focus()
            } else {
                const h = us() || (i == null ? void 0 : i.refs.domReference.current);
                h == null || h.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, p.nativeEvent))
            }
        }
    }))
}
const ps = () => u.useContext(fs),
    Sa = 20;
let Ot = [];

function Or(e) {
    Ot = Ot.filter(n => n.isConnected);
    let t = e;
    if (!(!t || St(t) === "body")) {
        if (!_f(t, ln())) {
            const n = cr(t, ln())[0];
            n && (t = n)
        }
        Ot.push(t), Ot.length > Sa && (Ot = Ot.slice(-Sa))
    }
}

function Pa() {
    return Ot.slice().reverse().find(e => e.isConnected)
}
const Qf = u.forwardRef(function(t, n) {
    return u.createElement("button", qn({}, t, {
        type: "button",
        ref: n,
        tabIndex: -1,
        style: Do
    }))
});

function Jf(e) {
    const {
        context: t,
        children: n,
        disabled: r = !1,
        order: o = ["content"],
        guards: a = !0,
        initialFocus: i = 0,
        returnFocus: s = !0,
        modal: c = !0,
        visuallyHiddenDismiss: l = !1,
        closeOnFocusOut: f = !0
    } = e, {
        open: d,
        refs: m,
        nodeId: p,
        onOpenChange: v,
        events: h,
        dataRef: b,
        elements: {
            domReference: g,
            floating: y
        }
    } = t, $ = typeof i == "number" && i < 0, w = ns(g) && $, C = zf() ? a : !0, S = xt(o), _ = xt(i), P = xt(s), D = lr(), R = ps(), A = u.useRef(null), I = u.useRef(null), L = u.useRef(!1), O = u.useRef(!1), T = R != null, M = u.useCallback(function(F) {
        return F === void 0 && (F = y), F ? cr(F, ln()) : []
    }, [y]), E = u.useCallback(F => {
        const W = M(F);
        return S.current.map(B => g && B === "reference" ? g : y && B === "floating" ? y : W).filter(Boolean).flat()
    }, [g, y, S, M]);
    u.useEffect(() => {
        if (r || !c) return;

        function F(B) {
            if (B.key === "Tab") {
                Ie(y, bt(Qe(y))) && M().length === 0 && !w && Ne(B);
                const K = E(),
                    re = Ft(B);
                S.current[0] === "reference" && re === g && (Ne(B), B.shiftKey ? at(K[K.length - 1]) : at(K[1])), S.current[1] === "floating" && re === y && B.shiftKey && (Ne(B), at(K[0]))
            }
        }
        const W = Qe(y);
        return W.addEventListener("keydown", F), () => {
            W.removeEventListener("keydown", F)
        }
    }, [r, g, y, c, S, w, M, E]), u.useEffect(() => {
        if (r || !f) return;

        function F() {
            O.current = !0, setTimeout(() => {
                O.current = !1
            })
        }

        function W(B) {
            const K = B.relatedTarget;
            queueMicrotask(() => {
                const re = !(Ie(g, K) || Ie(y, K) || Ie(K, y) || Ie(R == null ? void 0 : R.portalNode, K) || K != null && K.hasAttribute(cn("focus-guard")) || D && (zt(D.nodesRef.current, p).find(ee => {
                    var q, oe;
                    return Ie((q = ee.context) == null ? void 0 : q.elements.floating, K) || Ie((oe = ee.context) == null ? void 0 : oe.elements.domReference, K)
                }) || Hf(D.nodesRef.current, p).find(ee => {
                    var q, oe;
                    return ((q = ee.context) == null ? void 0 : q.elements.floating) === K || ((oe = ee.context) == null ? void 0 : oe.elements.domReference) === K
                })));
                K && re && !O.current && K !== Pa() && (L.current = !0, v(!1, B))
            })
        }
        if (y && Me(g)) return g.addEventListener("focusout", W), g.addEventListener("pointerdown", F), !c && y.addEventListener("focusout", W), () => {
            g.removeEventListener("focusout", W), g.removeEventListener("pointerdown", F), !c && y.removeEventListener("focusout", W)
        }
    }, [r, g, y, c, p, D, R, v, f]), u.useEffect(() => {
        var F;
        if (r) return;
        const W = Array.from((R == null || (F = R.portalNode) == null ? void 0 : F.querySelectorAll("[" + cn("portal") + "]")) || []);
        if (y) {
            const B = [y, ...W, A.current, I.current, S.current.includes("reference") || w ? g : null].filter(re => re != null),
                K = c || w ? $a(B, C, !C) : $a(B);
            return () => {
                K()
            }
        }
    }, [r, g, y, c, S, R, w, C]), Re(() => {
        if (r || !y) return;
        const F = Qe(y),
            W = bt(F);
        queueMicrotask(() => {
            const B = E(y),
                K = _.current,
                re = (typeof K == "number" ? B[K] : K.current) || y,
                ee = Ie(y, W);
            !$ && !ee && d && at(re, {
                preventScroll: re === y
            })
        })
    }, [r, d, y, $, E, _]), Re(() => {
        if (r || !y) return;
        let F = !1;
        const W = Qe(y),
            B = bt(W);
        let re = b.current.openEvent;
        Or(B);

        function ee(q) {
            let {
                open: oe,
                reason: ie,
                event: le,
                nested: V
            } = q;
            oe && (re = le), ie === "escape-key" && m.domReference.current && Or(m.domReference.current), ie === "hover" && le.type === "mouseleave" && (L.current = !0), ie === "outside-press" && (V ? (L.current = !1, F = !0) : L.current = !(Ji(le) || es(le)))
        }
        return h.on("openchange", ee), () => {
            h.off("openchange", ee);
            const q = bt(W),
                oe = Ie(y, q) || D && zt(D.nodesRef.current, p).some(V => {
                    var H;
                    return Ie((H = V.context) == null ? void 0 : H.elements.floating, q)
                });
            (oe || re && ["click", "mousedown"].includes(re.type)) && m.domReference.current && Or(m.domReference.current);
            const le = Pa();
            P.current && !L.current && Me(le) && (!(le !== q && q !== W.body) || oe) && at(le, {
                cancelPrevious: !1,
                preventScroll: F
            })
        }
    }, [r, y, P, b, m, h, D, p]), Re(() => {
        if (!(r || !R)) return R.setFocusManagerState({
            modal: c,
            closeOnFocusOut: f,
            open: d,
            onOpenChange: v,
            refs: m
        }), () => {
            R.setFocusManagerState(null)
        }
    }, [r, R, c, d, v, m, f]), Re(() => {
        if (r || !y || typeof MutationObserver != "function" || $) return;
        const F = () => {
            const B = y.getAttribute("tabindex");
            S.current.includes("floating") || bt(Qe(y)) !== m.domReference.current && M().length === 0 ? B !== "0" && y.setAttribute("tabindex", "0") : B !== "-1" && y.setAttribute("tabindex", "-1")
        };
        F();
        const W = new MutationObserver(F);
        return W.observe(y, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }), () => {
            W.disconnect()
        }
    }, [r, y, m, S, M, $]);

    function N(F) {
        return r || !l || !c ? null : u.createElement(Qf, {
            ref: F === "start" ? A : I,
            onClick: W => v(!1, W.nativeEvent)
        }, typeof l == "string" ? l : "Dismiss")
    }
    const U = !r && C && (T || c);
    return u.createElement(u.Fragment, null, U && u.createElement(Xn, {
        "data-type": "inside",
        ref: R == null ? void 0 : R.beforeInsideRef,
        onFocus: F => {
            if (c) {
                const B = E();
                at(o[0] === "reference" ? B[0] : B[B.length - 1])
            } else if (R != null && R.preserveTabOrder && R.portalNode)
                if (L.current = !1, nn(F, R.portalNode)) {
                    const B = us() || g;
                    B == null || B.focus()
                } else {
                    var W;
                    (W = R.beforeOutsideRef.current) == null || W.focus()
                }
        }
    }), !w && N("start"), n, N("end"), U && u.createElement(Xn, {
        "data-type": "inside",
        ref: R == null ? void 0 : R.afterInsideRef,
        onFocus: F => {
            if (c) at(E()[0]);
            else if (R != null && R.preserveTabOrder && R.portalNode)
                if (f && (L.current = !0), nn(F, R.portalNode)) {
                    const B = ds() || g;
                    B == null || B.focus()
                } else {
                    var W;
                    (W = R.afterOutsideRef.current) == null || W.focus()
                }
        }
    }))
}
const ep = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
    },
    tp = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
    },
    Ra = e => {
        var t, n;
        return {
            escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
            outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
        }
    };

function np(e, t) {
    t === void 0 && (t = {});
    const {
        open: n,
        onOpenChange: r,
        elements: {
            reference: o,
            domReference: a,
            floating: i
        },
        dataRef: s
    } = e, {
        enabled: c = !0,
        escapeKey: l = !0,
        outsidePress: f = !0,
        outsidePressEvent: d = "pointerdown",
        referencePress: m = !1,
        referencePressEvent: p = "pointerdown",
        ancestorScroll: v = !1,
        bubbles: h,
        capture: b
    } = t, g = lr(), y = yt(typeof f == "function" ? f : () => !1), $ = typeof f == "function" ? y : f, w = u.useRef(!1), C = u.useRef(!1), {
        escapeKey: S,
        outsidePress: _
    } = Ra(h), {
        escapeKey: P,
        outsidePress: D
    } = Ra(b), R = yt(O => {
        var T;
        if (!n || !c || !l || O.key !== "Escape") return;
        const M = (T = s.current.floatingContext) == null ? void 0 : T.nodeId,
            E = g ? zt(g.nodesRef.current, M) : [];
        if (!S && (O.stopPropagation(), E.length > 0)) {
            let N = !0;
            if (E.forEach(U => {
                    var F;
                    if ((F = U.context) != null && F.open && !U.context.dataRef.current.__escapeKeyBubbles) {
                        N = !1;
                        return
                    }
                }), !N) return
        }
        r(!1, sf(O) ? O.nativeEvent : O, "escape-key")
    }), A = yt(O => {
        var T;
        const M = () => {
            var E;
            R(O), (E = Ft(O)) == null || E.removeEventListener("keydown", M)
        };
        (T = Ft(O)) == null || T.addEventListener("keydown", M)
    }), I = yt(O => {
        var T;
        const M = w.current;
        w.current = !1;
        const E = C.current;
        if (C.current = !1, d === "click" && E || M || typeof $ == "function" && !$(O)) return;
        const N = Ft(O),
            U = "[" + cn("inert") + "]",
            F = Qe(i).querySelectorAll(U);
        let W = Ee(N) ? N : null;
        for (; W && !Ct(W);) {
            const ee = ft(W);
            if (Ct(ee) || !Ee(ee)) break;
            W = ee
        }
        if (F.length && Ee(N) && !cf(N) && !Ie(N, i) && Array.from(F).every(ee => !Ie(W, ee))) return;
        if (Me(N) && i) {
            const ee = N.clientWidth > 0 && N.scrollWidth > N.clientWidth,
                q = N.clientHeight > 0 && N.scrollHeight > N.clientHeight;
            let oe = q && O.offsetX > N.clientWidth;
            if (q && Ve(N).direction === "rtl" && (oe = O.offsetX <= N.offsetWidth - N.clientWidth), oe || ee && O.offsetY > N.clientHeight) return
        }
        const B = (T = s.current.floatingContext) == null ? void 0 : T.nodeId,
            K = g && zt(g.nodesRef.current, B).some(ee => {
                var q;
                return Rr(O, (q = ee.context) == null ? void 0 : q.elements.floating)
            });
        if (Rr(O, i) || Rr(O, a) || K) return;
        const re = g ? zt(g.nodesRef.current, B) : [];
        if (re.length > 0) {
            let ee = !0;
            if (re.forEach(q => {
                    var oe;
                    if ((oe = q.context) != null && oe.open && !q.context.dataRef.current.__outsidePressBubbles) {
                        ee = !1;
                        return
                    }
                }), !ee) return
        }
        r(!1, O, "outside-press")
    }), L = yt(O => {
        var T;
        const M = () => {
            var E;
            I(O), (E = Ft(O)) == null || E.removeEventListener(d, M)
        };
        (T = Ft(O)) == null || T.addEventListener(d, M)
    });
    return u.useEffect(() => {
        if (!n || !c) return;
        s.current.__escapeKeyBubbles = S, s.current.__outsidePressBubbles = _;

        function O(E) {
            r(!1, E, "ancestor-scroll")
        }
        const T = Qe(i);
        l && T.addEventListener("keydown", P ? A : R, P), $ && T.addEventListener(d, D ? L : I, D);
        let M = [];
        return v && (Ee(a) && (M = wt(a)), Ee(i) && (M = M.concat(wt(i))), !Ee(o) && o && o.contextElement && (M = M.concat(wt(o.contextElement)))), M = M.filter(E => {
            var N;
            return E !== ((N = T.defaultView) == null ? void 0 : N.visualViewport)
        }), M.forEach(E => {
            E.addEventListener("scroll", O, {
                passive: !0
            })
        }), () => {
            l && T.removeEventListener("keydown", P ? A : R, P), $ && T.removeEventListener(d, D ? L : I, D), M.forEach(E => {
                E.removeEventListener("scroll", O)
            })
        }
    }, [s, i, a, o, l, $, d, n, r, v, c, S, _, R, P, A, I, D, L]), u.useEffect(() => {
        w.current = !1
    }, [$, d]), u.useMemo(() => c ? {
        reference: {
            onKeyDown: R,
            [ep[p]]: O => {
                m && r(!1, O.nativeEvent, "reference-press")
            }
        },
        floating: {
            onKeyDown: R,
            onMouseDown() {
                C.current = !0
            },
            onMouseUp() {
                C.current = !0
            },
            [tp[d]]: () => {
                w.current = !0
            }
        }
    } : {}, [c, m, d, p, r, R])
}

function rp(e) {
    const {
        open: t = !1,
        onOpenChange: n,
        elements: r
    } = e, o = Po(), a = u.useRef({}), [i] = u.useState(() => Ff()), s = Ro() != null, [c, l] = u.useState(r.reference), f = yt((p, v, h) => {
        a.current.openEvent = p ? v : void 0, i.emit("openchange", {
            open: p,
            event: v,
            reason: h,
            nested: s
        }), n == null || n(p, v, h)
    }), d = u.useMemo(() => ({
        setPositionReference: l
    }), []), m = u.useMemo(() => ({
        reference: c || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference
    }), [c, r.reference, r.floating]);
    return u.useMemo(() => ({
        dataRef: a,
        open: t,
        onOpenChange: f,
        elements: m,
        events: i,
        floatingId: o,
        refs: d
    }), [t, f, m, i, o, d])
}

function op(e) {
    e === void 0 && (e = {});
    const {
        nodeId: t
    } = e, n = rp({ ...e,
        elements: {
            reference: null,
            floating: null,
            ...e.elements
        }
    }), r = e.rootContext || n, o = r.elements, [a, i] = u.useState(null), [s, c] = u.useState(null), f = (o == null ? void 0 : o.reference) || a, d = u.useRef(null), m = lr();
    Re(() => {
        f && (d.current = f)
    }, [f]);
    const p = Ci({ ...e,
            elements: { ...o,
                ...s && {
                    reference: s
                }
            }
        }),
        v = u.useCallback($ => {
            const w = Ee($) ? {
                getBoundingClientRect: () => $.getBoundingClientRect(),
                contextElement: $
            } : $;
            c(w), p.refs.setReference(w)
        }, [p.refs]),
        h = u.useCallback($ => {
            (Ee($) || $ === null) && (d.current = $, i($)), (Ee(p.refs.reference.current) || p.refs.reference.current === null || $ !== null && !Ee($)) && p.refs.setReference($)
        }, [p.refs]),
        b = u.useMemo(() => ({ ...p.refs,
            setReference: h,
            setPositionReference: v,
            domReference: d
        }), [p.refs, h, v]),
        g = u.useMemo(() => ({ ...p.elements,
            domReference: f
        }), [p.elements, f]),
        y = u.useMemo(() => ({ ...p,
            ...r,
            refs: b,
            elements: g,
            nodeId: t
        }), [p, b, g, t, r]);
    return Re(() => {
        r.dataRef.current.floatingContext = y;
        const $ = m == null ? void 0 : m.nodesRef.current.find(w => w.id === t);
        $ && ($.context = y)
    }), u.useMemo(() => ({ ...p,
        context: y,
        refs: b,
        elements: g
    }), [p, b, g, y])
}
const Da = "active",
    _a = "selected";

function Tr(e, t, n) {
    const r = new Map,
        o = n === "item";
    let a = e;
    if (o && e) {
        const {
            [Da]: i, [_a]: s, ...c
        } = e;
        a = c
    }
    return { ...n === "floating" && {
            tabIndex: -1
        },
        ...a,
        ...t.map(i => {
            const s = i ? i[n] : null;
            return typeof s == "function" ? e ? s(e) : null : s
        }).concat(e).reduce((i, s) => (s && Object.entries(s).forEach(c => {
            let [l, f] = c;
            if (!(o && [Da, _a].includes(l)))
                if (l.indexOf("on") === 0) {
                    if (r.has(l) || r.set(l, []), typeof f == "function") {
                        var d;
                        (d = r.get(l)) == null || d.push(f), i[l] = function() {
                            for (var m, p = arguments.length, v = new Array(p), h = 0; h < p; h++) v[h] = arguments[h];
                            return (m = r.get(l)) == null ? void 0 : m.map(b => b(...v)).find(b => b !== void 0)
                        }
                    }
                } else i[l] = f
        }), i), {})
    }
}

function ap(e) {
    e === void 0 && (e = []);
    const t = e,
        n = u.useCallback(a => Tr(a, e, "reference"), t),
        r = u.useCallback(a => Tr(a, e, "floating"), t),
        o = u.useCallback(a => Tr(a, e, "item"), e.map(a => a == null ? void 0 : a.item));
    return u.useMemo(() => ({
        getReferenceProps: n,
        getFloatingProps: r,
        getItemProps: o
    }), [n, r, o])
}
let Oa = !1;

function ur(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n
    }
}

function Ta(e, t) {
    return ur(t, e === So || e === gn, e === Kt || e === Zt)
}

function Nr(e, t, n) {
    return ur(t, e === gn, n ? e === Kt : e === Zt) || e === "Enter" || e === " " || e === ""
}

function ip(e, t, n) {
    return ur(t, n ? e === Kt : e === Zt, e === gn)
}

function Na(e, t, n) {
    return ur(t, n ? e === Zt : e === Kt, e === So)
}

function sp(e, t) {
    const {
        open: n,
        onOpenChange: r,
        elements: {
            domReference: o,
            floating: a
        }
    } = e, {
        listRef: i,
        activeIndex: s,
        onNavigate: c = () => {},
        enabled: l = !0,
        selectedIndex: f = null,
        allowEscape: d = !1,
        loop: m = !1,
        nested: p = !1,
        rtl: v = !1,
        virtual: h = !1,
        focusItemOnOpen: b = "auto",
        focusItemOnHover: g = !0,
        openOnArrowKeyDown: y = !0,
        disabledIndices: $ = void 0,
        orientation: w = "vertical",
        cols: C = 1,
        scrollItemIntoView: S = !0,
        virtualItemRef: _,
        itemSizes: P,
        dense: D = !1
    } = t, R = Ro(), A = lr(), I = yt(c), L = u.useRef(b), O = u.useRef(f ? ? -1), T = u.useRef(null), M = u.useRef(!0), E = u.useRef(I), N = u.useRef(!!a), U = u.useRef(!1), F = u.useRef(!1), W = xt($), B = xt(n), K = xt(S), re = xt(a), ee = xt(f), [q, oe] = u.useState(), [ie, le] = u.useState(), V = yt(function(z, Q, X) {
        X === void 0 && (X = !1);

        function se(ae) {
            h ? (oe(ae.id), A == null || A.events.emit("virtualfocus", ae), _ && (_.current = ae)) : at(ae, {
                preventScroll: !0,
                sync: of () && ts() ? Oa || U.current : !1
            })
        }
        const me = z.current[Q.current];
        me && se(me), requestAnimationFrame(() => {
            const ae = z.current[Q.current] || me;
            if (!ae) return;
            me || se(ae);
            const Y = K.current;
            Y && j && (X || !M.current) && (ae.scrollIntoView == null || ae.scrollIntoView(typeof Y == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : Y))
        })
    });
    Re(() => {
        document.createElement("div").focus({
            get preventScroll() {
                return Oa = !0, !1
            }
        })
    }, []), Re(() => {
        l && (n && a ? L.current && f != null && (F.current = !0, O.current = f, I(f)) : N.current && (O.current = -1, E.current(null)))
    }, [l, n, a, f, I]), Re(() => {
        if (l && n && a)
            if (s == null) {
                if (U.current = !1, ee.current != null) return;
                if (N.current && (O.current = -1, V(i, O)), !N.current && L.current && (T.current != null || L.current === !0 && T.current == null)) {
                    let z = 0;
                    const Q = () => {
                        i.current[0] == null ? (z < 2 && (z ? requestAnimationFrame : queueMicrotask)(Q), z++) : (O.current = T.current == null || Nr(T.current, w, v) || p ? Dr(i, W.current) : ba(i, W.current), T.current = null, I(O.current))
                    };
                    Q()
                }
            } else tn(i, s) || (O.current = s, V(i, O, F.current), F.current = !1)
    }, [l, n, a, s, ee, p, i, w, v, I, V, W]), Re(() => {
        var z;
        if (!l || a || !A || h || !N.current) return;
        const Q = A.nodesRef.current,
            X = (z = Q.find(ae => ae.id === R)) == null || (z = z.context) == null ? void 0 : z.elements.floating,
            se = bt(Qe(a)),
            me = Q.some(ae => ae.context && Ie(ae.context.elements.floating, se));
        X && !me && M.current && X.focus({
            preventScroll: !0
        })
    }, [l, a, A, R, h]), Re(() => {
        if (!l || !A || !h || R) return;

        function z(Q) {
            le(Q.id), _ && (_.current = Q)
        }
        return A.events.on("virtualfocus", z), () => {
            A.events.off("virtualfocus", z)
        }
    }, [l, A, h, R, _]), Re(() => {
        E.current = I, N.current = !!a
    }), Re(() => {
        n || (T.current = null)
    }, [n]);
    const H = s != null,
        j = u.useMemo(() => {
            function z(X) {
                if (!n) return;
                const se = i.current.indexOf(X);
                se !== -1 && I(se)
            }
            return {
                onFocus(X) {
                    let {
                        currentTarget: se
                    } = X;
                    z(se)
                },
                onClick: X => {
                    let {
                        currentTarget: se
                    } = X;
                    return se.focus({
                        preventScroll: !0
                    })
                },
                ...g && {
                    onMouseMove(X) {
                        let {
                            currentTarget: se
                        } = X;
                        z(se)
                    },
                    onPointerLeave(X) {
                        let {
                            pointerType: se
                        } = X;
                        !M.current || se === "touch" || (O.current = -1, V(i, O), I(null), h || at(re.current, {
                            preventScroll: !0
                        }))
                    }
                }
            }
        }, [n, re, V, g, i, I, h]);
    return u.useMemo(() => {
        if (!l) return {};
        const z = W.current;

        function Q(Y) {
            if (M.current = !1, U.current = !0, !B.current && Y.currentTarget === re.current) return;
            if (p && Na(Y.key, w, v)) {
                Ne(Y), r(!1, Y.nativeEvent, "list-navigation"), Me(o) && !h && o.focus();
                return
            }
            const Ce = O.current,
                xe = Dr(i, z),
                ke = ba(i, z);
            if (Y.key === "Home" && (Ne(Y), O.current = xe, I(O.current)), Y.key === "End" && (Ne(Y), O.current = ke, I(O.current)), C > 1) {
                const _e = P || Array.from({
                        length: i.current.length
                    }, () => ({
                        width: 1,
                        height: 1
                    })),
                    Be = Mf(_e, C, D),
                    Ke = Be.findIndex(we => we != null && !jn(i.current, we, z)),
                    vt = Be.reduce((we, Pe, Oe) => Pe != null && !jn(i.current, Pe, z) ? Oe : we, -1);
                if (O.current = Be[Nf({
                        current: Be.map(we => we != null ? i.current[we] : null)
                    }, {
                        event: Y,
                        orientation: w,
                        loop: m,
                        cols: C,
                        disabledIndices: If([...z || i.current.map((we, Pe) => jn(i.current, Pe) ? Pe : void 0), void 0], Be),
                        minIndex: Ke,
                        maxIndex: vt,
                        prevIndex: kf(O.current > ke ? xe : O.current, _e, Be, C, Y.key === gn ? "bl" : Y.key === Zt ? "tr" : "tl"),
                        stopEvent: !0
                    })], I(O.current), w === "both") return
            }
            if (Ta(Y.key, w)) {
                if (Ne(Y), n && !h && bt(Y.currentTarget.ownerDocument) === Y.currentTarget) {
                    O.current = Nr(Y.key, w, v) ? xe : ke, I(O.current);
                    return
                }
                Nr(Y.key, w, v) ? m ? O.current = Ce >= ke ? d && Ce !== i.current.length ? -1 : xe : Te(i, {
                    startingIndex: Ce,
                    disabledIndices: z
                }) : O.current = Math.min(ke, Te(i, {
                    startingIndex: Ce,
                    disabledIndices: z
                })) : m ? O.current = Ce <= xe ? d && Ce !== -1 ? i.current.length : ke : Te(i, {
                    startingIndex: Ce,
                    decrement: !0,
                    disabledIndices: z
                }) : O.current = Math.max(xe, Te(i, {
                    startingIndex: Ce,
                    decrement: !0,
                    disabledIndices: z
                })), tn(i, O.current) ? I(null) : I(O.current)
            }
        }

        function X(Y) {
            b === "auto" && Ji(Y.nativeEvent) && (L.current = !0)
        }

        function se(Y) {
            L.current = b, b === "auto" && es(Y.nativeEvent) && (L.current = !0)
        }
        const me = h && n && H && {
                "aria-activedescendant": ie || q
            },
            ae = i.current.find(Y => (Y == null ? void 0 : Y.id) === q);
        return {
            reference: { ...me,
                onKeyDown(Y) {
                    M.current = !1;
                    const Ce = Y.key.indexOf("Arrow") === 0,
                        xe = ip(Y.key, w, v),
                        ke = Na(Y.key, w, v),
                        _e = Ta(Y.key, w),
                        Be = (p ? xe : _e) || Y.key === "Enter" || Y.key.trim() === "";
                    if (h && n) {
                        const Pe = A == null ? void 0 : A.nodesRef.current.find(qe => qe.parentId == null),
                            Oe = A && Pe ? Vf(A.nodesRef.current, Pe.id) : null;
                        if (Ce && Oe && _) {
                            const qe = new KeyboardEvent("keydown", {
                                key: Y.key,
                                bubbles: !0
                            });
                            if (xe || ke) {
                                var Ke, vt;
                                const ze = ((Ke = Oe.context) == null ? void 0 : Ke.elements.domReference) === Y.currentTarget,
                                    kt = ke && !ze ? (vt = Oe.context) == null ? void 0 : vt.elements.domReference : xe ? ae : null;
                                kt && (Ne(Y), kt.dispatchEvent(qe), le(void 0))
                            }
                            if (_e && Oe.context && Oe.context.open && Oe.parentId && Y.currentTarget !== Oe.context.elements.domReference) {
                                var we;
                                Ne(Y), (we = Oe.context.elements.domReference) == null || we.dispatchEvent(qe);
                                return
                            }
                        }
                        return Q(Y)
                    }
                    if (!(!n && !y && Ce)) {
                        if (Be && (T.current = p && _e ? null : Y.key), p) {
                            xe && (Ne(Y), n ? (O.current = Dr(i, z), I(O.current)) : r(!0, Y.nativeEvent, "list-navigation"));
                            return
                        }
                        _e && (f != null && (O.current = f), Ne(Y), !n && y ? r(!0, Y.nativeEvent, "list-navigation") : Q(Y), n && I(O.current))
                    }
                },
                onFocus() {
                    n && !h && I(null)
                },
                onPointerDown: se,
                onMouseDown: X,
                onClick: X
            },
            floating: {
                "aria-orientation": w === "both" ? void 0 : w,
                ...!ns(o) && me,
                onKeyDown: Q,
                onPointerMove() {
                    M.current = !0
                }
            },
            item: j
        }
    }, [o, re, q, ie, W, B, i, l, w, v, h, n, H, p, f, y, d, C, m, b, I, r, j, A, _, P, D])
}
const cp = new Map([
    ["select", "listbox"],
    ["combobox", "listbox"],
    ["label", !1]
]);

function lp(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        open: r,
        floatingId: o
    } = e, {
        enabled: a = !0,
        role: i = "dialog"
    } = t, s = (n = cp.get(i)) != null ? n : i, c = Po(), f = Ro() != null;
    return u.useMemo(() => {
        if (!a) return {};
        const d = {
            id: o,
            ...s && {
                role: s
            }
        };
        return s === "tooltip" || i === "label" ? {
            reference: {
                ["aria-" + (i === "label" ? "labelledby" : "describedby")]: r ? o : void 0
            },
            floating: d
        } : {
            reference: {
                "aria-expanded": r ? "true" : "false",
                "aria-haspopup": s === "alertdialog" ? "dialog" : s,
                "aria-controls": r ? o : void 0,
                ...s === "listbox" && {
                    role: "combobox"
                },
                ...s === "menu" && {
                    id: c
                },
                ...s === "menu" && f && {
                    role: "menuitem"
                },
                ...i === "select" && {
                    "aria-autocomplete": "none"
                },
                ...i === "combobox" && {
                    "aria-autocomplete": "list"
                }
            },
            floating: { ...d,
                ...s === "menu" && {
                    "aria-labelledby": c
                }
            },
            item(m) {
                let {
                    active: p,
                    selected: v
                } = m;
                const h = {
                    role: "option",
                    ...p && {
                        id: o + "-option"
                    }
                };
                switch (i) {
                    case "select":
                        return { ...h,
                            "aria-selected": p && v
                        };
                    case "combobox":
                        return { ...h,
                            ...p && {
                                "aria-selected": !0
                            }
                        }
                }
                return {}
            }
        }
    }, [a, i, s, r, o, c, f])
}
var up = u.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                onChange: a,
                error: i,
                rounded: s = !0,
                options: c,
                className: l,
                optionsClassName: f,
                autoSelect: d,
                value: m,
                hideErrorSpace: p = !0,
                emptyText: v = "No options found",
                groupClassName: h,
                renderOption: b,
                renderLabel: g,
                positionRef: y,
                portal: $ = !0
            } = r,
            w = Et(r, ["label", "onChange", "error", "rounded", "options", "className", "optionsClassName", "autoSelect", "value", "hideErrorSpace", "emptyText", "groupClassName", "renderOption", "renderLabel", "positionRef", "portal"]),
            C, S, _, P;
        const D = $ ? Zf : u.Fragment,
            R = u.useMemo(() => {
                const H = m;
                if (H != null && H.value) {
                    const z = c.findIndex(Q => Q.value === H.value);
                    return {
                        option: H,
                        index: z
                    }
                }
                const j = c.findIndex(z => z.value === H);
                return {
                    option: c[j],
                    index: j
                }
            }, [m, c]),
            A = R.option ? (g == null ? void 0 : g(R.option)) || ((C = R == null ? void 0 : R.option) == null ? void 0 : C.text) || ((S = R == null ? void 0 : R.option) == null ? void 0 : S.value) : "",
            [I, L] = u.useState(A),
            [O, T] = u.useState(!1),
            [M, E] = u.useState(R.index),
            N = u.useMemo(() => I === A ? c : c.filter(H => ((H == null ? void 0 : H.text) || "").toLowerCase().includes(I.toLowerCase()) || H.value.toLowerCase().includes(I.toLowerCase())), [I, c, A]),
            {
                refs: U,
                floatingStyles: F,
                context: W
            } = op({
                placement: "bottom-start",
                open: O,
                onOpenChange: T,
                whileElementsMounted: wi,
                middleware: [Ei(5), Si({
                    padding: 10
                }), Pi({
                    apply({
                        rects: H,
                        elements: j
                    }) {
                        Object.assign(j.floating.style, {
                            minWidth: `${H.reference.width}px`,
                            maxWidth: `${H.reference.width}px`
                        })
                    },
                    padding: 10
                })]
            }),
            B = H => {
                a == null || a(H), L((g == null ? void 0 : g(H)) || H.text || H.value), T(!1)
            },
            K = H => {
                L(H), H ? (T(!0), E(0)) : T(!1)
            };
        u.useImperativeHandle(n, () => U.domReference.current), u.useEffect(() => {
            y != null && y.current && U.setPositionReference(y.current)
        }, [y, U]);
        const re = u.useRef([]),
            ee = np(W, {
                outsidePress: () => (L(A), !0)
            }),
            q = lp(W, {
                role: "listbox"
            }),
            oe = sp(W, {
                listRef: re,
                activeIndex: M,
                selectedIndex: c.findIndex(H => {
                    var j;
                    return H.value === ((j = R == null ? void 0 : R.option) == null ? void 0 : j.value)
                }),
                onNavigate: E,
                loop: !0,
                virtual: !0
            }),
            {
                getReferenceProps: ie,
                getFloatingProps: le,
                getItemProps: V
            } = ap([ee, q, oe]);
        return x.jsxs("div", {
            className: h,
            children: [o && x.jsx("label", {
                className: `block pb-1 font-semibold ${w.disabled?"text-gray-400":""}`,
                htmlFor: w.id,
                role: "presentation",
                onClick: H => {
                    H.preventDefault(), H.stopPropagation()
                },
                children: o
            }), x.jsxs("div", {
                className: "relative",
                children: [x.jsx(Xi, $e($e({
                    ref: U.setReference,
                    "aria-labelledby": "select-label",
                    "aria-autocomplete": "none",
                    className: fe(((_ = R == null ? void 0 : R.option) == null ? void 0 : _.icon) && "ltr:pl-8 rtl:pr-8", l),
                    value: I,
                    onChange: K,
                    error: i,
                    rounded: s,
                    hideErrorSpace: p
                }, w), ie({
                    onKeyDown: H => {
                        if (H.key === "Enter" && !O) return T(!0);
                        const j = typeof M == "number" && N[M];
                        H.key === "Enter" && j && (H.preventDefault(), B(j))
                    },
                    onClick() {
                        T(!0)
                    },
                    onFocus(H) {
                        d && H.target.select()
                    }
                }))), ((P = R == null ? void 0 : R.option) == null ? void 0 : P.icon) && x.jsx("span", {
                    className: "absolute top-0 flex h-[42px] items-center px-2 disabled:cursor-not-allowed ltr:left-0 rtl:right-0",
                    children: R == null ? void 0 : R.option.icon
                }), x.jsx("button", {
                    className: `absolute top-0 h-[42px] px-2 disabled:cursor-not-allowed ${i?"ltr:right-3 rtl:left-3":"ltr:right-0 rtl:left-0"}`,
                    "aria-label": `Open ${w.name}`,
                    onClick: () => {
                        T(!0)
                    },
                    tabIndex: -1,
                    disabled: w.disabled,
                    type: "button",
                    children: x.jsx("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        className: "fill-input/50 rotate-180",
                        children: x.jsx("path", {
                            d: "M6.70710678,15.7071081 C6.31658249,16.0976324 5.68341751,16.0976324 5.29289322,15.7071081 C4.90236893,15.3165838 4.90236893,14.6834188 5.29289322,14.2928945 L11.2928932,8.29289454 C11.6714722,7.9143156 12.2810586,7.90106998 12.6757246,8.26284718 L19.4313874,14.2942293 C19.8385064,14.6674217 19.8660094,15.2999891 19.4928169,15.7071081 C19.1196245,16.1142271 18.4870572,16.14173 18.0799382,15.7685376 L12.0300757,10.3841391 L6.70710678,15.7071081 Z"
                        })
                    })
                })]
            }), x.jsx(D, {
                children: O && x.jsx(Jf, {
                    context: W,
                    initialFocus: -1,
                    visuallyHiddenDismiss: !0,
                    children: x.jsxs("div", ct($e({
                        ref: U.setFloating,
                        className: fe("mini-scrollbar bg-input-popover text-text relative z-[99] max-h-40 overflow-y-auto rounded-md py-1 shadow-lg focus:outline-none sm:text-sm md:max-h-52", f),
                        style: F
                    }, le()), {
                        children: [N.length === 0 && x.jsx("p", {
                            className: "p-4 text-center text-gray-200",
                            children: v
                        }), N.map((H, j) => {
                            var z;
                            return x.jsx("div", ct($e({
                                ref: Q => {
                                    re.current[j] = Q
                                },
                                role: "option",
                                tabIndex: j === M ? 0 : -1,
                                "aria-selected": j === M,
                                className: `flex cursor-pointer select-none items-center space-x-2 px-4 py-2 outline-none rtl:space-x-reverse ${j===M?"bg-primary-light text-primary-contrast":""}`
                            }, V({
                                onClick() {
                                    var Q;
                                    B(H), (Q = U.domReference.current) == null || Q.focus()
                                }
                            })), {
                                children: b ? b(H) : x.jsxs(x.Fragment, {
                                    children: [H.icon && H.icon, x.jsx("span", {
                                        className: `block truncate ${((z=R==null?void 0:R.option)==null?void 0:z.value)===H.value?"font-medium":"font-normal"}`,
                                        children: H.text || H.value
                                    })]
                                })
                            }), H.value)
                        })]
                    }))
                })
            })]
        })
    }),
    dp = up,
    fp = u.forwardRef(function({
        label: t,
        country: n,
        mobile: r,
        onChange: o,
        error: a,
        disabled: i,
        required: s,
        className: c,
        autoFocus: l,
        placeholder: f,
        lang: d,
        hideErrorSpace: m = !0,
        portal: p
    }, v) {
        var h, b, g, y;
        const $ = u.createRef(),
            w = u.createRef(),
            C = vr.map(P => {
                const D = P[`name_${d}`] || P.name;
                return {
                    value: P.code,
                    text: `${D}-+${P.dial_code}`,
                    id: P.code,
                    icon: x.jsx("img", {
                        className: "shrink-0",
                        src: `https://wbk-assets.s3.me-south-1.amazonaws.com/flags/w80/${P.code.toLowerCase()}.png`,
                        width: 20,
                        height: 14,
                        alt: D
                    })
                }
            });
        u.useEffect(() => {
            l && w.current && w.current.focus()
        }, []);
        const S = u.useMemo(() => vr.find(P => P.code === (n == null ? void 0 : n.code)), [n == null ? void 0 : n.code]),
            _ = P => {
                var D;
                const R = vr.find(A => A.code === P);
                R && (o("country", R), (D = w.current) == null || D.focus())
            };
        return x.jsxs("fieldset", {
            disabled: i,
            className: c,
            children: [t && x.jsx("legend", {
                className: `pb-1 font-semibold ${i?"text-gray-400":""}`,
                children: t
            }), x.jsxs("div", {
                className: "flex w-full items-baseline rtl:flex-row-reverse",
                ref: $,
                children: [x.jsxs("div", {
                    className: "relative w-full max-w-[105px] shrink-0",
                    children: [x.jsx("label", {
                        htmlFor: "country_code",
                        className: "sr-only",
                        children: "Country Code"
                    }), x.jsx(dp, {
                        value: S == null ? void 0 : S.code,
                        options: C,
                        onChange: ({
                            value: P
                        }) => _(P),
                        className: "rounded-r-none border-r-0 rtl:rounded-r-none",
                        dir: "ltr",
                        portal: p,
                        positionRef: $,
                        renderLabel: P => {
                            var D;
                            return (D = P.text) == null ? void 0 : D.split("-")[1]
                        },
                        autoSelect: !0,
                        renderOption: P => {
                            var D;
                            const [R, A] = ((D = P.text) == null ? void 0 : D.split("-")) || [];
                            return x.jsxs("div", {
                                className: "flex w-full items-center justify-between overflow-hidden",
                                children: [x.jsxs("div", {
                                    className: "flex w-full grow items-center gap-2",
                                    children: [x.jsx("img", {
                                        className: "shrink-0",
                                        src: `https://wbk-assets.s3.me-south-1.amazonaws.com/flags/w80/${P.value.toLowerCase()}.png`,
                                        height: 14,
                                        width: 20,
                                        alt: R
                                    }), x.jsx("span", {
                                        className: "block flex-1 truncate px-2",
                                        children: R
                                    })]
                                }), x.jsx("div", {
                                    dir: "ltr",
                                    children: A
                                })]
                            })
                        }
                    })]
                }), x.jsx("div", {
                    className: "z-10 flex-grow",
                    children: x.jsx(Xi, {
                        className: "rounded-r-md",
                        dir: "ltr",
                        placeholder: S ? `${((b=(h=S==null?void 0:S.mobile_starts_with)==null?void 0:h[0])==null?void 0:b.slice(0,1))||""}${"x".repeat((((g=S.phone_number_lengths)==null?void 0:g[0])||7)-1)}` : f,
                        value: r,
                        type: "tel",
                        name: "mobile",
                        onChange: P => {
                            const R = (P.startsWith("0") ? P.substring(1) : P).replace(/\D/g, "");
                            o("mobile", R)
                        },
                        error: !!a,
                        ref: v || w,
                        required: s,
                        minLength: (y = S == null ? void 0 : S.phone_number_lengths) == null ? void 0 : y[0],
                        maxLength: S != null && S.phone_number_lengths ? S.phone_number_lengths.slice(-1)[0] : void 0,
                        rounded: !1,
                        hideErrorSpace: !0
                    })
                })]
            }), (a || !m) && x.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${a?"visible":"text-transparent"}`,
                children: a
            })]
        })
    }),
    Ib = fp;
const ms = "Dialog",
    [vs, Ab] = rt(ms),
    [pp, Ye] = vs(ms),
    mp = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: i = !0
        } = e, s = u.useRef(null), c = u.useRef(null), [l = !1, f] = pt({
            prop: r,
            defaultProp: o,
            onChange: a
        });
        return u.createElement(pp, {
            scope: t,
            triggerRef: s,
            contentRef: c,
            contentId: Bt(),
            titleId: Bt(),
            descriptionId: Bt(),
            open: l,
            onOpenChange: f,
            onOpenToggle: u.useCallback(() => f(d => !d), [f]),
            modal: i
        }, n)
    },
    vp = "DialogTrigger",
    hp = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ye(vp, n), a = De(t, o.triggerRef);
        return u.createElement(ye.button, G({
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": _o(o.open)
        }, r, {
            ref: a,
            onClick: ce(e.onClick, o.onOpenToggle)
        }))
    }),
    hs = "DialogPortal",
    [gp, gs] = vs(hs, {
        forceMount: void 0
    }),
    bp = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
        } = e, a = Ye(hs, t);
        return u.createElement(gp, {
            scope: t,
            forceMount: n
        }, u.Children.map(r, i => u.createElement(Pt, {
            present: n || a.open
        }, u.createElement(Ii, {
            asChild: !0,
            container: o
        }, i))))
    },
    eo = "DialogOverlay",
    yp = u.forwardRef((e, t) => {
        const n = gs(eo, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            a = Ye(eo, e.__scopeDialog);
        return a.modal ? u.createElement(Pt, {
            present: r || a.open
        }, u.createElement(xp, G({}, o, {
            ref: t
        }))) : null
    }),
    xp = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ye(eo, n);
        return u.createElement(Eo, {
            as: Gt,
            allowPinchZoom: !0,
            shards: [o.contentRef]
        }, u.createElement(ye.div, G({
            "data-state": _o(o.open)
        }, r, {
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })))
    }),
    un = "DialogContent",
    wp = u.forwardRef((e, t) => {
        const n = gs(un, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            a = Ye(un, e.__scopeDialog);
        return u.createElement(Pt, {
            present: r || a.open
        }, a.modal ? u.createElement($p, G({}, o, {
            ref: t
        })) : u.createElement(Cp, G({}, o, {
            ref: t
        })))
    }),
    $p = u.forwardRef((e, t) => {
        const n = Ye(un, e.__scopeDialog),
            r = u.useRef(null),
            o = De(t, n.contentRef, r);
        return u.useEffect(() => {
            const a = r.current;
            if (a) return Hi(a)
        }, []), u.createElement(bs, G({}, e, {
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ce(e.onCloseAutoFocus, a => {
                var i;
                a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus()
            }),
            onPointerDownOutside: ce(e.onPointerDownOutside, a => {
                const i = a.detail.originalEvent,
                    s = i.button === 0 && i.ctrlKey === !0;
                (i.button === 2 || s) && a.preventDefault()
            }),
            onFocusOutside: ce(e.onFocusOutside, a => a.preventDefault())
        }))
    }),
    Cp = u.forwardRef((e, t) => {
        const n = Ye(un, e.__scopeDialog),
            r = u.useRef(!1),
            o = u.useRef(!1);
        return u.createElement(bs, G({}, e, {
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: a => {
                var i;
                if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
                    var s;
                    r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault()
                }
                r.current = !1, o.current = !1
            },
            onInteractOutside: a => {
                var i, s;
                (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const c = a.target;
                ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault()
            }
        }))
    }),
    bs = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...i
        } = e, s = Ye(un, n), c = u.useRef(null), l = De(t, c);
        return ji(), u.createElement(u.Fragment, null, u.createElement(Fi, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a
        }, u.createElement(po, G({
            role: "dialog",
            id: s.contentId,
            "aria-describedby": s.descriptionId,
            "aria-labelledby": s.titleId,
            "data-state": _o(s.open)
        }, i, {
            ref: l,
            onDismiss: () => s.onOpenChange(!1)
        }))), !1)
    }),
    Ep = "DialogTitle",
    Sp = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ye(Ep, n);
        return u.createElement(ye.h2, G({
            id: o.titleId
        }, r, {
            ref: t
        }))
    }),
    Pp = "DialogDescription",
    Rp = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ye(Pp, n);
        return u.createElement(ye.p, G({
            id: o.descriptionId
        }, r, {
            ref: t
        }))
    }),
    Dp = "DialogClose",
    _p = u.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ye(Dp, n);
        return u.createElement(ye.button, G({
            type: "button"
        }, r, {
            ref: t,
            onClick: ce(e.onClick, () => o.onOpenChange(!1))
        }))
    });

function _o(e) {
    return e ? "open" : "closed"
}
const ys = mp,
    Op = hp,
    xs = bp,
    ws = yp,
    $s = wp,
    Cs = Sp,
    Es = Rp,
    Ss = _p;

function Tp(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Np(...e) {
    return t => e.forEach(n => Tp(n, t))
}
var Ps = u.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = u.Children.toArray(n), a = o.find(kp);
    if (a) {
        const i = a.props.children,
            s = o.map(c => c === a ? u.Children.count(i) > 1 ? u.Children.only(null) : u.isValidElement(i) ? i.props.children : null : c);
        return x.jsx(to, { ...r,
            ref: t,
            children: u.isValidElement(i) ? u.cloneElement(i, void 0, s) : null
        })
    }
    return x.jsx(to, { ...r,
        ref: t,
        children: n
    })
});
Ps.displayName = "Slot";
var to = u.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    if (u.isValidElement(n)) {
        const o = Ap(n);
        return u.cloneElement(n, { ...Ip(r, n.props),
            ref: t ? Np(t, o) : o
        })
    }
    return u.Children.count(n) > 1 ? u.Children.only(null) : null
});
to.displayName = "SlotClone";
var Mp = ({
    children: e
}) => x.jsx(x.Fragment, {
    children: e
});

function kp(e) {
    return u.isValidElement(e) && e.type === Mp
}

function Ip(e, t) {
    const n = { ...t
    };
    for (const r in t) {
        const o = e[r],
            a = t[r];
        /^on[A-Z]/.test(r) ? o && a ? n[r] = (...s) => {
            a(...s), o(...s)
        } : o && (n[r] = o) : r === "style" ? n[r] = { ...o,
            ...a
        } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "))
    }
    return { ...e,
        ...n
    }
}

function Ap(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
}
var Lp = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    jp = Lp.reduce((e, t) => {
        const n = u.forwardRef((r, o) => {
            const {
                asChild: a,
                ...i
            } = r, s = a ? Ps : t;
            return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), x.jsx(s, { ...i,
                ref: o
            })
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {}),
    Fp = "VisuallyHidden",
    dn = u.forwardRef((e, t) => x.jsx(jp.span, { ...e,
        ref: t,
        style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
        }
    }));
dn.displayName = Fp;
var Wp = ({
        body: e,
        render: t,
        stickyHeader: n,
        stickyFooter: r,
        show: o,
        closeButton: a,
        onClose: i,
        size: s = "md",
        fullscreen: c,
        className: l,
        contentClassName: f,
        ignoreHistory: d,
        zIndex: m,
        title: p = "",
        description: v = ""
    }) => {
        const [h, b] = u.useState(!1), g = typeof o < "u", y = () => {
            i ? i() : b(!1)
        }, $ = () => {
            b(!0)
        }, w = u.useMemo(() => {
            switch (s) {
                case "xs":
                    return "max-w-xs";
                case "sm":
                    return "max-w-sm";
                case "lg":
                    return "max-w-lg";
                case "xl":
                    return "max-w-xl";
                case "2xl":
                    return "max-w-2xl";
                case "7xl":
                    return "max-w-7xl";
                default:
                    return "max-w-md"
            }
        }, [s]), C = () => {
            if (d) return y();
            history.back()
        };
        return u.useEffect(() => {
            (g ? o : h) && !d && (history.pushState("", ""), window.onpopstate = () => {
                y()
            })
        }, [o, h, d]), x.jsxs(u.Fragment, {
            children: [t && t({
                close: C,
                open: $,
                isOpen: h
            }), x.jsx(ys, {
                open: g ? o : h,
                children: x.jsxs(xs, {
                    children: [x.jsx(ws, {
                        onClick: S => {
                            S.preventDefault(), S.stopPropagation(), C()
                        },
                        style: {
                            zIndex: m
                        },
                        className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/70"
                    }), x.jsx($s, {
                        onEscapeKeyDown: () => {
                            C()
                        },
                        className: fe("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=closed]:slide-out-to-top-[45%] data-[state=open]:slide-in-from-top-[45%] fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none", c ? "" : w, f),
                        style: {
                            zIndex: m
                        },
                        children: x.jsxs("div", {
                            className: fe("bg-body-light mini-scrollbar w-full rounded-md shadow-xl", c ? "h-screen" : "max-h-[95vh]", l),
                            children: [x.jsx(dn, {
                                asChild: !0,
                                children: x.jsx(Cs, {
                                    children: p
                                })
                            }), x.jsx(dn, {
                                asChild: !0,
                                children: x.jsx(Es, {
                                    children: v
                                })
                            }), a && x.jsx("div", {
                                className: "flex w-full justify-end p-2",
                                children: x.jsx(Ss, {
                                    asChild: !0,
                                    children: x.jsx(Li, {
                                        className: "h-6 w-6 shrink-0 rounded-full p-1",
                                        theme: "white",
                                        shape: "outlined",
                                        "aria-label": "Close",
                                        onClick: C,
                                        children: x.jsx("svg", {
                                            className: "shrink-0",
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 14 13",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: x.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M12.4679 0.291551C12.0774 -0.0989738 11.4442 -0.0989739 11.0537 0.29155L7.04678 4.29849L3.03984 0.291551C2.64932 -0.0989729 2.01615 -0.0989726 1.62563 0.291552L1.15422 0.762956C0.763697 1.15348 0.763697 1.78664 1.15422 2.17717L5.16116 6.18411L1.15422 10.191C0.763698 10.5816 0.763698 11.2147 1.15422 11.6053L1.62563 12.0767C2.01615 12.4672 2.64932 12.4672 3.03984 12.0767L7.04678 8.06973L11.0537 12.0767C11.4442 12.4672 12.0774 12.4672 12.4679 12.0767L12.9393 11.6053C13.3299 11.2147 13.3299 10.5816 12.9393 10.191L8.9324 6.18411L12.9393 2.17717C13.3299 1.78664 13.3299 1.15348 12.9393 0.762955L12.4679 0.291551Z",
                                                fill: "currentColor"
                                            })
                                        })
                                    })
                                })
                            }), n && x.jsx("header", {
                                className: "sticky top-0 z-10 shadow-sm",
                                children: n({
                                    close: C
                                })
                            }), e({
                                close: C
                            }), r && x.jsx("footer", {
                                className: "fixed bottom-0 left-0 w-full shadow-sm",
                                children: r({
                                    close: C
                                })
                            })]
                        })
                    })]
                })
            })]
        })
    },
    Lb = Wp,
    Bp = ({
        numOfInput: e = 4,
        autoFocus: t = !0,
        legend: n,
        onlyNumbers: r,
        onChange: o,
        onSubmit: a,
        autoSubmit: i = !0,
        disabled: s,
        pulseActive: c = !0,
        renderButton: l,
        error: f,
        formId: d,
        hideErrorSpace: m = !0,
        shape: p = "default",
        className: v
    }) => {
        const h = "0".repeat(e).split(""),
            b = u.useRef([]),
            [g, y] = u.useState(h.map(() => ""));
        u.useEffect(() => {
            o && o(g.join(""))
        }, [g]), u.useEffect(() => {
            t && b.current.length > 0 && S(0)
        }, [t]);
        const $ = (T, M) => {
                y(E => E.map((N, U) => U === T ? M : N))
            },
            w = () => {
                y(h.map(() => ""))
            },
            C = T => (r ? /^[0-9]$/ : /^[a-z0-9]$/i).test(T) || T === "",
            S = T => {
                const M = b.current[T];
                M && setTimeout(() => {
                    M.focus()
                }, 0)
            },
            _ = T => {
                e > T && S(T + 1)
            },
            P = T => {
                $(T, ""), T < e && S(T - 1)
            },
            D = T => Number(T.getAttribute("data-index")),
            R = T => {
                const M = T.target.value,
                    E = ["Backspace", "Delete"].includes(T.key),
                    N = T.key === "Unidentified";
                if ((E || N) && !M) {
                    const F = D(T.currentTarget);
                    P(F)
                }
            },
            A = T => {
                var M, E, N;
                const U = D(T.currentTarget);
                let F = ((M = T.nativeEvent) == null ? void 0 : M.data) || "";
                if (F || (F = ((N = (E = T.target) == null ? void 0 : E.value) == null ? void 0 : N[0]) || ""), C(F)) {
                    $(U, F);
                    const B = U === e - 1;
                    if (i && B && a && F) {
                        const K = [...g];
                        K[U] = F, O(K.join("")), L(T.target);
                        return
                    }
                    F ? _(U) : P(U)
                }
            },
            I = T => {
                const E = T.clipboardData.getData("text/plain").trim();
                if (!E.length) return;
                let N = D(T.currentTarget);
                const U = e - 1;
                let F = "";
                for (const K of E.split("")) {
                    if (N > U) break;
                    C(K) && ($(N, K), F += K, N++)
                }
                const B = Math.min(N, U) === U;
                setTimeout(() => {
                    S(Math.min(N, U))
                }, 0), B && F.length === e && (O(F), L(T.target))
            },
            L = (T, M = !1) => {
                c && (M ? T.classList.add("animate-heart-beat") : T.classList.remove("animate-heart-beat"))
            },
            O = T => _c(void 0, null, function*() {
                try {
                    a && (yield a(T))
                } catch {
                    S(e - 1)
                }
            });
        return x.jsxs("form", {
            onSubmit: T => {
                T.preventDefault(), O(g.join(""))
            },
            id: d,
            name: d,
            children: [x.jsxs("fieldset", {
                className: "flex items-center justify-center gap-4 rtl:flex-row-reverse",
                children: [n && x.jsx("legend", {
                    className: "w-full",
                    children: n
                }), x.jsx("div", {
                    className: fe("flex items-center justify-center gap-4 rtl:flex-row-reverse", p === "contained" && `bg-input/20 hover:bg-input/30 has-[:focus]:bg-input/30 has-[:disabled]:bg-input/10 has-[:disabled]:text-text/60 h-11 w-full gap-2 rounded-md border p-2 placeholder:text-gray-400 has-[:disabled]:cursor-not-allowed has-[:focus]:outline-none has-[:focus]:ring-0 ${f?"border-error":"border-input/20 has-[:focus]:border-input/30"}`, v),
                    children: h.map((T, M) => x.jsx("input", {
                        "data-index": M.toString(),
                        ref: E => {
                            E && (b.current[M] = E)
                        },
                        type: r ? "tel" : "text",
                        value: g[M] || "",
                        onChange: A,
                        onKeyUp: R,
                        onKeyDown: E => {
                            E.target.select(), E.repeat && E.preventDefault()
                        },
                        onFocus: E => {
                            E.target.select(), L(E.target, !0)
                        },
                        onBlur: E => {
                            L(E.target)
                        },
                        onPaste: I,
                        disabled: s,
                        className: fe(p === "default" && "border-input/30 bg-input/20 hover:bg-input/30 focus:border-input/40 focus:bg-input/30 disabled:bg-input/10 disabled:text-text/60 disabled:border-input/10 h-12 w-full max-w-[60px] border-2 text-center outline-none focus:ring-0 disabled:cursor-not-allowed", p === "contained" && `border-input/30 h-full w-full max-w-[20px] border-0 bg-transparent p-0 text-center outline-none focus:ring-0 ${g[M]?"border-b-0 text-lg":"border-b-2"}`)
                    }, M))
                })]
            }), typeof f == "string" && f || !m ? x.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-center text-xs ${f?"visible":"text-transparent"}`,
                children: f
            }) : null, !!l && l({
                resetState: w
            })]
        })
    },
    jb = Bp;
const Rs = "Popover",
    [Ds, Fb] = rt(Rs, [or]),
    Oo = or(),
    [Hp, Qt] = Ds(Rs),
    Vp = e => {
        const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: i = !1
        } = e, s = Oo(t), c = u.useRef(null), [l, f] = u.useState(!1), [d = !1, m] = pt({
            prop: r,
            defaultProp: o,
            onChange: a
        });
        return u.createElement(Ni, s, u.createElement(Hp, {
            scope: t,
            contentId: Bt(),
            triggerRef: c,
            open: d,
            onOpenChange: m,
            onOpenToggle: u.useCallback(() => m(p => !p), [m]),
            hasCustomAnchor: l,
            onCustomAnchorAdd: u.useCallback(() => f(!0), []),
            onCustomAnchorRemove: u.useCallback(() => f(!1), []),
            modal: i
        }, n))
    },
    zp = "PopoverTrigger",
    Up = u.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = Qt(zp, n), a = Oo(n), i = De(t, o.triggerRef), s = u.createElement(ye.button, G({
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": Ts(o.open)
        }, r, {
            ref: i,
            onClick: ce(e.onClick, o.onOpenToggle)
        }));
        return o.hasCustomAnchor ? s : u.createElement(Mi, G({
            asChild: !0
        }, a), s)
    }),
    _s = "PopoverPortal",
    [Gp, Yp] = Ds(_s, {
        forceMount: void 0
    }),
    Kp = e => {
        const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
        } = e, a = Qt(_s, t);
        return u.createElement(Gp, {
            scope: t,
            forceMount: n
        }, u.createElement(Pt, {
            present: n || a.open
        }, u.createElement(Ii, {
            asChild: !0,
            container: o
        }, r)))
    },
    fn = "PopoverContent",
    qp = u.forwardRef((e, t) => {
        const n = Yp(fn, e.__scopePopover),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            a = Qt(fn, e.__scopePopover);
        return u.createElement(Pt, {
            present: r || a.open
        }, a.modal ? u.createElement(Xp, G({}, o, {
            ref: t
        })) : u.createElement(Zp, G({}, o, {
            ref: t
        })))
    }),
    Xp = u.forwardRef((e, t) => {
        const n = Qt(fn, e.__scopePopover),
            r = u.useRef(null),
            o = De(t, r),
            a = u.useRef(!1);
        return u.useEffect(() => {
            const i = r.current;
            if (i) return Hi(i)
        }, []), u.createElement(Eo, {
            as: Gt,
            allowPinchZoom: !0
        }, u.createElement(Os, G({}, e, {
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ce(e.onCloseAutoFocus, i => {
                var s;
                i.preventDefault(), a.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus()
            }),
            onPointerDownOutside: ce(e.onPointerDownOutside, i => {
                const s = i.detail.originalEvent,
                    c = s.button === 0 && s.ctrlKey === !0,
                    l = s.button === 2 || c;
                a.current = l
            }, {
                checkForDefaultPrevented: !1
            }),
            onFocusOutside: ce(e.onFocusOutside, i => i.preventDefault(), {
                checkForDefaultPrevented: !1
            })
        })))
    }),
    Zp = u.forwardRef((e, t) => {
        const n = Qt(fn, e.__scopePopover),
            r = u.useRef(!1),
            o = u.useRef(!1);
        return u.createElement(Os, G({}, e, {
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: a => {
                var i;
                if ((i = e.onCloseAutoFocus) === null || i === void 0 || i.call(e, a), !a.defaultPrevented) {
                    var s;
                    r.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), a.preventDefault()
                }
                r.current = !1, o.current = !1
            },
            onInteractOutside: a => {
                var i, s;
                (i = e.onInteractOutside) === null || i === void 0 || i.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
                const c = a.target;
                ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(c)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault()
            }
        }))
    }),
    Os = u.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onInteractOutside: f,
            ...d
        } = e, m = Qt(fn, n), p = Oo(n);
        return ji(), u.createElement(Fi, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a
        }, u.createElement(po, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: l,
            onDismiss: () => m.onOpenChange(!1)
        }, u.createElement(ki, G({
            "data-state": Ts(m.open),
            role: "dialog",
            id: m.contentId
        }, p, d, {
            ref: t,
            style: { ...d.style,
                "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }))))
    });

function Ts(e) {
    return e ? "open" : "closed"
}
const Qp = Vp,
    Jp = Up,
    em = Kp,
    tm = qp;
var nm = u.forwardRef((e, t) => {
        var n = e,
            {
                content: r,
                defaultOpen: o,
                open: a,
                onOpenChange: i,
                modal: s,
                className: c,
                children: l
            } = n,
            f = Et(n, ["content", "defaultOpen", "open", "onOpenChange", "modal", "className", "children"]);
        return x.jsxs(Qp, {
            defaultOpen: o,
            open: a,
            onOpenChange: i,
            modal: s,
            children: [x.jsx(Jp, {
                asChild: !0,
                children: l
            }), x.jsx(em, {
                children: x.jsx(tm, ct($e({
                    ref: t,
                    onOpenAutoFocus: d => d.preventDefault(),
                    className: fe("bg-body-light data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[var(--radix-popover-trigger-width)] rounded-md p-4", c)
                }, f), {
                    children: r
                }))
            })]
        })
    }),
    Wb = nm;
const rm = u.createContext(void 0);

function om(e) {
    const t = u.useContext(rm);
    return e || t || "ltr"
}
const Ns = "Radio",
    [am, Ms] = rt(Ns),
    [im, sm] = am(Ns),
    cm = u.forwardRef((e, t) => {
        const {
            __scopeRadio: n,
            name: r,
            checked: o = !1,
            required: a,
            disabled: i,
            value: s = "on",
            onCheck: c,
            ...l
        } = e, [f, d] = u.useState(null), m = De(t, h => d(h)), p = u.useRef(!1), v = f ? !!f.closest("form") : !0;
        return u.createElement(im, {
            scope: n,
            checked: o,
            disabled: i
        }, u.createElement(ye.button, G({
            type: "button",
            role: "radio",
            "aria-checked": o,
            "data-state": ks(o),
            "data-disabled": i ? "" : void 0,
            disabled: i,
            value: s
        }, l, {
            ref: m,
            onClick: ce(e.onClick, h => {
                o || c == null || c(), v && (p.current = h.isPropagationStopped(), p.current || h.stopPropagation())
            })
        })), v && u.createElement(dm, {
            control: f,
            bubbles: !p.current,
            name: r,
            value: s,
            checked: o,
            required: a,
            disabled: i,
            style: {
                transform: "translateX(-100%)"
            }
        }))
    }),
    lm = "RadioIndicator",
    um = u.forwardRef((e, t) => {
        const {
            __scopeRadio: n,
            forceMount: r,
            ...o
        } = e, a = sm(lm, n);
        return u.createElement(Pt, {
            present: r || a.checked
        }, u.createElement(ye.span, G({
            "data-state": ks(a.checked),
            "data-disabled": a.disabled ? "" : void 0
        }, o, {
            ref: t
        })))
    }),
    dm = e => {
        const {
            control: t,
            checked: n,
            bubbles: r = !0,
            ...o
        } = e, a = u.useRef(null), i = Ja(n), s = uo(t);
        return u.useEffect(() => {
            const c = a.current,
                l = window.HTMLInputElement.prototype,
                d = Object.getOwnPropertyDescriptor(l, "checked").set;
            if (i !== n && d) {
                const m = new Event("click", {
                    bubbles: r
                });
                d.call(c, n), c.dispatchEvent(m)
            }
        }, [i, n, r]), u.createElement("input", G({
            type: "radio",
            "aria-hidden": !0,
            defaultChecked: n
        }, o, {
            tabIndex: -1,
            ref: a,
            style: { ...e.style,
                ...s,
                position: "absolute",
                pointerEvents: "none",
                opacity: 0,
                margin: 0
            }
        }))
    };

function ks(e) {
    return e ? "checked" : "unchecked"
}
const fm = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    Is = "RadioGroup",
    [pm, Bb] = rt(Is, [tr, Ms]),
    As = tr(),
    Ls = Ms(),
    [mm, vm] = pm(Is),
    hm = u.forwardRef((e, t) => {
        const {
            __scopeRadioGroup: n,
            name: r,
            defaultValue: o,
            value: a,
            required: i = !1,
            disabled: s = !1,
            orientation: c,
            dir: l,
            loop: f = !0,
            onValueChange: d,
            ...m
        } = e, p = As(n), v = om(l), [h, b] = pt({
            prop: a,
            defaultProp: o,
            onChange: d
        });
        return u.createElement(mm, {
            scope: n,
            name: r,
            required: i,
            disabled: s,
            value: h,
            onValueChange: b
        }, u.createElement(ai, G({
            asChild: !0
        }, p, {
            orientation: c,
            dir: v,
            loop: f
        }), u.createElement(ye.div, G({
            role: "radiogroup",
            "aria-required": i,
            "aria-orientation": c,
            "data-disabled": s ? "" : void 0,
            dir: v
        }, m, {
            ref: t
        }))))
    }),
    gm = "RadioGroupItem",
    bm = u.forwardRef((e, t) => {
        const {
            __scopeRadioGroup: n,
            disabled: r,
            ...o
        } = e, a = vm(gm, n), i = a.disabled || r, s = As(n), c = Ls(n), l = u.useRef(null), f = De(t, l), d = a.value === o.value, m = u.useRef(!1);
        return u.useEffect(() => {
            const p = h => {
                    fm.includes(h.key) && (m.current = !0)
                },
                v = () => m.current = !1;
            return document.addEventListener("keydown", p), document.addEventListener("keyup", v), () => {
                document.removeEventListener("keydown", p), document.removeEventListener("keyup", v)
            }
        }, []), u.createElement(ii, G({
            asChild: !0
        }, s, {
            focusable: !i,
            active: d
        }), u.createElement(cm, G({
            disabled: i,
            required: a.required,
            checked: d
        }, c, o, {
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: ce(p => {
                p.key === "Enter" && p.preventDefault()
            }),
            onFocus: ce(o.onFocus, () => {
                var p;
                m.current && ((p = l.current) === null || p === void 0 || p.click())
            })
        })))
    }),
    ym = u.forwardRef((e, t) => {
        const {
            __scopeRadioGroup: n,
            ...r
        } = e, o = Ls(n);
        return u.createElement(um, G({}, o, r, {
            ref: t
        }))
    }),
    xm = hm,
    wm = bm,
    $m = ym;
var Cm = u.forwardRef(function({
        name: t,
        label: n,
        options: r,
        value: o,
        onChange: a,
        error: i,
        disabled: s,
        className: c,
        groupClassName: l,
        required: f,
        dir: d,
        hideErrorSpace: m = !0
    }, p) {
        return x.jsxs(xm, {
            name: t,
            value: o,
            onValueChange: a,
            required: f,
            disabled: s,
            dir: d,
            ref: p,
            children: [x.jsx("div", {
                className: "text-text block pb-1 data-[disabled=true]:text-gray-400",
                "data-disabled": s,
                children: n
            }), x.jsx("div", {
                className: fe("space-y-2", l),
                children: r.map(v => x.jsxs("div", {
                    onPointerUp: () => {
                        s || a(v.value)
                    },
                    className: fe("bg-input/5 group flex cursor-pointer items-center gap-2 rounded-md border-2 border-transparent p-2 has-[:disabled]:cursor-not-allowed", "has-[[data-state=checked]]:border-primary hover:border-primary-light focus:border-primary-light has-[:disabled]:border-gray-400", c),
                    children: [x.jsx(wm, {
                        className: "bg-input border-input/20 hover:border-primary outline-primary data-[state=checked]:border-primary peer h-[24px] w-[24px] shrink-0 rounded-full border-2 disabled:border-transparent disabled:bg-gray-400",
                        value: v.value,
                        checked: o === v.value,
                        id: `${t}_${v.value}`,
                        children: x.jsx($m, {
                            className: "after:bg-primary flex items-center justify-center after:block after:h-[14px] after:w-[14px] after:rounded-[50%] after:content-['']"
                        })
                    }), x.jsx("label", {
                        className: "w-full cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-gray-400",
                        htmlFor: `${t}_${v.value}`,
                        children: v.text || v.value
                    })]
                }, v.value))
            }), (typeof i == "string" && !!i || !m) && x.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${i?"visible":"text-transparent"}`,
                children: i
            })]
        })
    }),
    Hb = Cm;

function Em(e) {
    if (typeof document > "u") return;
    let t = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
const js = k.createContext({
        drawerRef: {
            current: null
        },
        overlayRef: {
            current: null
        },
        scaleBackground: () => {},
        onPress: () => {},
        onRelease: () => {},
        onDrag: () => {},
        onNestedDrag: () => {},
        onNestedOpenChange: () => {},
        onNestedRelease: () => {},
        openProp: void 0,
        dismissible: !1,
        handleOnly: !1,
        isOpen: !1,
        isDragging: !1,
        keyboardIsOpen: {
            current: !1
        },
        snapPointsOffset: null,
        snapPoints: null,
        modal: !1,
        shouldFade: !1,
        activeSnapPoint: null,
        onOpenChange: () => {},
        setActiveSnapPoint: () => {},
        visible: !1,
        closeDrawer: () => {},
        setVisible: () => {},
        direction: "bottom"
    }),
    dr = () => {
        const e = k.useContext(js);
        if (!e) throw new Error("useDrawerContext must be used within a Drawer.Root");
        return e
    };
Em("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const Sm = typeof window < "u" ? u.useLayoutEffect : u.useEffect;

function no(...e) {
    return (...t) => {
        for (let n of e) typeof n == "function" && n(...t)
    }
}

function Pm() {
    return To(/^Mac/)
}

function Rm() {
    return To(/^iPhone/)
}

function Dm() {
    return To(/^iPad/) || Pm() && navigator.maxTouchPoints > 1
}

function Fs() {
    return Rm() || Dm()
}

function To(e) {
    return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0
}
const Mr = typeof document < "u" && window.visualViewport;

function Ma(e) {
    let t = window.getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
}

function Ws(e) {
    for (Ma(e) && (e = e.parentElement); e && !Ma(e);) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement
}
const _m = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
let Nn = 0,
    kr;

function Om(e = {}) {
    let {
        isDisabled: t
    } = e;
    Sm(() => {
        if (!t) return Nn++, Nn === 1 && (Fs() ? kr = Nm() : kr = Tm()), () => {
            Nn--, Nn === 0 && kr()
        }
    }, [t])
}

function Tm() {
    return no(Bs(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`))
}

function Nm() {
    let e, t = 0,
        n = d => {
            e = Ws(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY)
        },
        r = d => {
            if (!e || e === document.documentElement || e === document.body) {
                d.preventDefault();
                return
            }
            let m = d.changedTouches[0].pageY,
                p = e.scrollTop,
                v = e.scrollHeight - e.clientHeight;
            v !== 0 && ((p <= 0 && m > t || p >= v && m < t) && d.preventDefault(), t = m)
        },
        o = d => {
            let m = d.target;
            ro(m) && m !== document.activeElement && (d.preventDefault(), m.style.transform = "translateY(-2000px)", m.focus(), requestAnimationFrame(() => {
                m.style.transform = ""
            }))
        },
        a = d => {
            let m = d.target;
            ro(m) && (m.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                m.style.transform = "", Mr && (Mr.height < window.innerHeight ? requestAnimationFrame(() => {
                    ka(m)
                }) : Mr.addEventListener("resize", () => ka(m), {
                    once: !0
                }))
            }))
        },
        i = () => {
            window.scrollTo(0, 0)
        },
        s = window.pageXOffset,
        c = window.pageYOffset,
        l = no(Bs(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`));
    window.scrollTo(0, 0);
    let f = no(Jt(document, "touchstart", n, {
        passive: !1,
        capture: !0
    }), Jt(document, "touchmove", r, {
        passive: !1,
        capture: !0
    }), Jt(document, "touchend", o, {
        passive: !1,
        capture: !0
    }), Jt(document, "focus", a, !0), Jt(window, "scroll", i));
    return () => {
        l(), f(), window.scrollTo(s, c)
    }
}

function Bs(e, t, n) {
    let r = e.style[t];
    return e.style[t] = n, () => {
        e.style[t] = r
    }
}

function Jt(e, t, n, r) {
    return e.addEventListener(t, n, r), () => {
        e.removeEventListener(t, n, r)
    }
}

function ka(e) {
    let t = document.scrollingElement || document.documentElement;
    for (; e && e !== t;) {
        let n = Ws(e);
        if (n !== document.documentElement && n !== document.body && n !== e) {
            let r = n.getBoundingClientRect().top,
                o = e.getBoundingClientRect().top,
                a = e.getBoundingClientRect().bottom;
            const i = n.getBoundingClientRect().bottom;
            a > i && (n.scrollTop += o - r)
        }
        e = n.parentElement
    }
}

function ro(e) {
    return e instanceof HTMLInputElement && !_m.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}

function Mm(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function km(...e) {
    return t => e.forEach(n => Mm(n, t))
}

function Hs(...e) {
    return u.useCallback(km(...e), e)
}
let en = null;

function Im({
    isOpen: e,
    modal: t,
    nested: n,
    hasBeenOpened: r,
    preventScrollRestoration: o,
    noBodyStyles: a
}) {
    const [i, s] = k.useState(() => typeof window < "u" ? window.location.href : ""), c = k.useRef(0), l = k.useCallback(() => {
        if (en === null && e && !a) {
            en = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset"
            };
            const {
                scrollX: d,
                innerHeight: m
            } = window;
            document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
                top: `${-c.current}px`,
                left: `${-d}px`,
                right: "0px",
                height: "auto"
            }), window.setTimeout(() => window.requestAnimationFrame(() => {
                const p = m - window.innerHeight;
                p && c.current >= m && (document.body.style.top = `${-(c.current+p)}px`)
            }), 300)
        }
    }, [e]), f = k.useCallback(() => {
        if (en !== null && !a) {
            const d = -parseInt(document.body.style.top, 10),
                m = -parseInt(document.body.style.left, 10);
            Object.assign(document.body.style, en), window.requestAnimationFrame(() => {
                if (o && i !== window.location.href) {
                    s(window.location.href);
                    return
                }
                window.scrollTo(m, d)
            }), en = null
        }
    }, [i]);
    return k.useEffect(() => {
        function d() {
            c.current = window.scrollY
        }
        return d(), window.addEventListener("scroll", d), () => {
            window.removeEventListener("scroll", d)
        }
    }, []), k.useEffect(() => {
        n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && l(), t || window.setTimeout(() => {
            f()
        }, 500)) : f())
    }, [e, r, i, t, n, l, f]), {
        restorePositionSetting: f
    }
}
const Vs = new WeakMap;

function ve(e, t, n = !1) {
    if (!e || !(e instanceof HTMLElement)) return;
    let r = {};
    Object.entries(t).forEach(([o, a]) => {
        if (o.startsWith("--")) {
            e.style.setProperty(o, a);
            return
        }
        r[o] = e.style[o], e.style[o] = a
    }), !n && Vs.set(e, r)
}

function Mn(e, t) {
    if (!e || !(e instanceof HTMLElement)) return;
    let n = Vs.get(e);
    n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
        e.style[r] = o
    }))
}
const Se = e => {
    switch (e) {
        case "top":
        case "bottom":
            return !0;
        case "left":
        case "right":
            return !1;
        default:
            return e
    }
};

function kn(e, t) {
    if (!e) return null;
    const n = window.getComputedStyle(e),
        r = n.transform || n.webkitTransform || n.mozTransform;
    let o = r.match(/^matrix3d\((.+)\)$/);
    return o ? parseFloat(o[1].split(", ")[Se(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[Se(t) ? 5 : 4]) : null)
}

function Am(e) {
    return 8 * (Math.log(e + 1) - 2)
}
const ue = {
        DURATION: .5,
        EASE: [.32, .72, 0, 1]
    },
    zs = .4;

function Us(e) {
    const t = k.useRef(e);
    return k.useEffect(() => {
        t.current = e
    }), k.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), [])
}

function Lm({
    defaultProp: e,
    onChange: t
}) {
    const n = k.useState(e),
        [r] = n,
        o = k.useRef(r),
        a = Us(t);
    return k.useEffect(() => {
        o.current !== r && (a(r), o.current = r)
    }, [r, o, a]), n
}

function jm({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = Lm({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, i = a ? e : r, s = Us(n), c = k.useCallback(l => {
        if (a) {
            const d = typeof l == "function" ? l(e) : l;
            d !== e && s(d)
        } else o(l)
    }, [a, e, o, s]);
    return [i, c]
}

function Fm({
    activeSnapPointProp: e,
    setActiveSnapPointProp: t,
    snapPoints: n,
    drawerRef: r,
    overlayRef: o,
    fadeFromIndex: a,
    onSnapPointChange: i,
    direction: s = "bottom"
}) {
    const [c, l] = jm({
        prop: e,
        defaultProp: n == null ? void 0 : n[0],
        onChange: t
    }), f = k.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), d = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, m = k.useMemo(() => n == null ? void 0 : n.findIndex($ => $ === c), [n, c]), p = k.useMemo(() => {
        var $;
        return ($ = n == null ? void 0 : n.map(w => {
            const C = typeof window < "u",
                S = typeof w == "string";
            let _ = 0;
            if (S && (_ = parseInt(w, 10)), Se(s)) {
                const D = S ? _ : C ? w * window.innerHeight : 0;
                return C ? s === "bottom" ? window.innerHeight - D : -window.innerHeight + D : D
            }
            const P = S ? _ : C ? w * window.innerWidth : 0;
            return C ? s === "right" ? window.innerWidth - P : -window.innerWidth + P : P
        })) != null ? $ : []
    }, [n]), v = k.useMemo(() => m !== null ? p == null ? void 0 : p[m] : null, [p, m]), h = k.useCallback($ => {
        var w;
        const C = (w = p == null ? void 0 : p.findIndex(S => S === $)) != null ? w : null;
        i(C), ve(r.current, {
            transition: `transform ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`,
            transform: Se(s) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
        }), p && C !== p.length - 1 && C !== a ? ve(o.current, {
            transition: `opacity ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`,
            opacity: "0"
        }) : ve(o.current, {
            transition: `opacity ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`,
            opacity: "1"
        }), l(C !== null ? n == null ? void 0 : n[C] : null)
    }, [r.current, n, p, a, o, l]);
    k.useEffect(() => {
        if (c || e) {
            var $;
            const w = ($ = n == null ? void 0 : n.findIndex(C => C === e || C === c)) != null ? $ : -1;
            p && w !== -1 && typeof p[w] == "number" && h(p[w])
        }
    }, [c, e, n, p, h]);

    function b({
        draggedDistance: $,
        closeDrawer: w,
        velocity: C,
        dismissible: S
    }) {
        if (a === void 0) return;
        const _ = s === "bottom" || s === "right" ? (v ? ? 0) - $ : (v ? ? 0) + $,
            P = m === a - 1,
            D = m === 0,
            R = $ > 0;
        if (P && ve(o.current, {
                transition: `opacity ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`
            }), C > 2 && !R) {
            S ? w() : h(p[0]);
            return
        }
        if (C > 2 && R && p && n) {
            h(p[n.length - 1]);
            return
        }
        const A = p == null ? void 0 : p.reduce((L, O) => typeof L != "number" || typeof O != "number" ? L : Math.abs(O - _) < Math.abs(L - _) ? O : L),
            I = Se(s) ? window.innerHeight : window.innerWidth;
        if (C > zs && Math.abs($) < I * .4) {
            const L = R ? 1 : -1;
            if (L > 0 && f) {
                h(p[n.length - 1]);
                return
            }
            if (D && L < 0 && S && w(), m === null) return;
            h(p[m + L]);
            return
        }
        h(A)
    }

    function g({
        draggedDistance: $
    }) {
        if (v === null) return;
        const w = s === "bottom" || s === "right" ? v - $ : v + $;
        (s === "bottom" || s === "right") && w < p[p.length - 1] || (s === "top" || s === "left") && w > p[p.length - 1] || ve(r.current, {
            transform: Se(s) ? `translate3d(0, ${w}px, 0)` : `translate3d(${w}px, 0, 0)`
        })
    }

    function y($, w) {
        if (!n || typeof m != "number" || !p || a === void 0) return null;
        const C = m === a - 1;
        if (m >= a && w) return 0;
        if (C && !w) return 1;
        if (!d && !C) return null;
        const _ = C ? m + 1 : m - 1,
            P = C ? p[_] - p[_ - 1] : p[_ + 1] - p[_],
            D = $ / Math.abs(P);
        return C ? 1 - D : D
    }
    return {
        isLastSnapPoint: f,
        activeSnapPoint: c,
        shouldFade: d,
        getPercentageDragged: y,
        setActiveSnapPoint: l,
        activeSnapPointIndex: m,
        onRelease: b,
        onDrag: g,
        snapPointsOffset: p
    }
}
const Wm = .25,
    Bm = 100,
    Ia = 8,
    Dt = 16,
    Aa = 26,
    Ir = "vaul-dragging";

function Gs({
    open: e,
    onOpenChange: t,
    children: n,
    shouldScaleBackground: r,
    onDrag: o,
    onRelease: a,
    snapPoints: i,
    nested: s = !1,
    setBackgroundColorOnScale: c = !0,
    closeThreshold: l = Wm,
    scrollLockTimeout: f = Bm,
    dismissible: d = !0,
    handleOnly: m = !1,
    fadeFromIndex: p = i && i.length - 1,
    activeSnapPoint: v,
    setActiveSnapPoint: h,
    fixed: b,
    modal: g = !0,
    onClose: y,
    noBodyStyles: $,
    direction: w = "bottom",
    preventScrollRestoration: C = !0,
    disablePreventScroll: S = !1
}) {
    var _;
    const [P = !1, D] = k.useState(!1), [R, A] = k.useState(!1), [I, L] = k.useState(!1), [O, T] = k.useState(!1), [M, E] = k.useState(!1), [N, U] = k.useState(!1), F = k.useRef(null), W = k.useRef(null), B = k.useRef(null), K = k.useRef(null), re = k.useRef(null), ee = k.useRef(!1), q = k.useRef(null), oe = k.useRef(0), ie = k.useRef(!1), le = k.useRef(0), V = k.useRef(null), H = k.useRef(((_ = V.current) == null ? void 0 : _.getBoundingClientRect().height) || 0), j = k.useRef(0), z = k.useCallback(J => {
        i && J === ae.length - 1 && (W.current = new Date)
    }, []), {
        activeSnapPoint: Q,
        activeSnapPointIndex: X,
        setActiveSnapPoint: se,
        onRelease: me,
        snapPointsOffset: ae,
        onDrag: Y,
        shouldFade: Ce,
        getPercentageDragged: xe
    } = Fm({
        snapPoints: i,
        activeSnapPointProp: v,
        setActiveSnapPointProp: h,
        drawerRef: V,
        fadeFromIndex: p,
        overlayRef: F,
        onSnapPointChange: z,
        direction: w
    });
    Om({
        isDisabled: !P || M || !g || N || !R || S
    });
    const {
        restorePositionSetting: ke
    } = Im({
        isOpen: P,
        modal: g,
        nested: s,
        hasBeenOpened: R,
        preventScrollRestoration: C,
        noBodyStyles: $
    });

    function _e() {
        return (window.innerWidth - Aa) / window.innerWidth
    }

    function Be(J) {
        var te;
        !d && !i || V.current && !V.current.contains(J.target) || (H.current = ((te = V.current) == null ? void 0 : te.getBoundingClientRect().height) || 0, E(!0), B.current = new Date, Fs() && window.addEventListener("touchend", () => ee.current = !1, {
            once: !0
        }), J.target.setPointerCapture(J.pointerId), oe.current = Se(w) ? J.clientY : J.clientX)
    }

    function Ke(J, te) {
        var de;
        let ne = J;
        const he = (de = window.getSelection()) == null ? void 0 : de.toString(),
            be = V.current ? kn(V.current, w) : null,
            He = new Date;
        if (ne.hasAttribute("data-vaul-no-drag") || ne.closest("[data-vaul-no-drag]")) return !1;
        if (w === "right" || w === "left") return !0;
        if (W.current && He.getTime() - W.current.getTime() < 500) return !1;
        if (be !== null && (w === "bottom" ? be > 0 : be < 0)) return !0;
        if (he && he.length > 0) return !1;
        if (re.current && He.getTime() - re.current.getTime() < f && be === 0 || te) return re.current = He, !1;
        for (; ne;) {
            if (ne.scrollHeight > ne.clientHeight) {
                if (ne.scrollTop !== 0) return re.current = new Date, !1;
                if (ne.getAttribute("role") === "dialog") return !0
            }
            ne = ne.parentNode
        }
        return !0
    }

    function vt(J) {
        if (V.current && M) {
            const te = w === "bottom" || w === "right" ? 1 : -1,
                de = (oe.current - (Se(w) ? J.clientY : J.clientX)) * te,
                ne = de > 0,
                he = i && !d && !ne;
            if (he && X === 0) return;
            const be = Math.abs(de),
                He = document.querySelector("[vaul-drawer-wrapper]");
            let Xe = be / H.current;
            const ht = xe(be, ne);
            if (ht !== null && (Xe = ht), he && Xe >= 1 || !ee.current && !Ke(J.target, ne)) return;
            if (V.current.classList.add(Ir), ee.current = !0, ve(V.current, {
                    transition: "none"
                }), ve(F.current, {
                    transition: "none"
                }), i && Y({
                    draggedDistance: de
                }), ne && !i) {
                const Rt = Am(de),
                    Cn = Math.min(Rt * -1, 0) * te;
                ve(V.current, {
                    transform: Se(w) ? `translate3d(0, ${Cn}px, 0)` : `translate3d(${Cn}px, 0, 0)`
                });
                return
            }
            const $n = 1 - Xe;
            if ((Ce || p && X === p - 1) && (o == null || o(J, Xe), ve(F.current, {
                    opacity: `${$n}`,
                    transition: "none"
                }, !0)), He && F.current && r) {
                const Rt = Math.min(_e() + Xe * (1 - _e()), 1),
                    Cn = 8 - Xe * 8,
                    Uo = Math.max(0, 14 - Xe * 14);
                ve(He, {
                    borderRadius: `${Cn}px`,
                    transform: Se(w) ? `scale(${Rt}) translate3d(0, ${Uo}px, 0)` : `scale(${Rt}) translate3d(${Uo}px, 0, 0)`,
                    transition: "none"
                }, !0)
            }
            if (!i) {
                const Rt = be * te;
                ve(V.current, {
                    transform: Se(w) ? `translate3d(0, ${Rt}px, 0)` : `translate3d(${Rt}px, 0, 0)`
                })
            }
        }
    }
    k.useEffect(() => () => {
        ze(!1), ke()
    }, []), k.useEffect(() => {
        var J;

        function te() {
            if (!V.current) return;
            const de = document.activeElement;
            if (ro(de) || ie.current) {
                var ne;
                const he = ((ne = window.visualViewport) == null ? void 0 : ne.height) || 0;
                let be = window.innerHeight - he;
                const He = V.current.getBoundingClientRect().height || 0;
                j.current || (j.current = He);
                const Xe = V.current.getBoundingClientRect().top;
                if (Math.abs(le.current - be) > 60 && (ie.current = !ie.current), i && i.length > 0 && ae && X) {
                    const ht = ae[X] || 0;
                    be += ht
                }
                if (le.current = be, He > he || ie.current) {
                    const ht = V.current.getBoundingClientRect().height;
                    let $n = ht;
                    ht > he && ($n = he - Aa), b ? V.current.style.height = `${ht-Math.max(be,0)}px` : V.current.style.height = `${Math.max($n,he-Xe)}px`
                } else V.current.style.height = `${j.current}px`;
                i && i.length > 0 && !ie.current ? V.current.style.bottom = "0px" : V.current.style.bottom = `${Math.max(be,0)}px`
            }
        }
        return (J = window.visualViewport) == null || J.addEventListener("resize", te), () => {
            var de;
            return (de = window.visualViewport) == null ? void 0 : de.removeEventListener("resize", te)
        }
    }, [X, i, ae]);

    function we() {
        V.current && (Oe(), y == null || y(), ve(V.current, {
            transform: Se(w) ? `translate3d(0, ${w==="bottom"?"100%":"-100%"}, 0)` : `translate3d(${w==="right"?"100%":"-100%"}, 0, 0)`,
            transition: `transform ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`
        }), ve(F.current, {
            opacity: "0",
            transition: `opacity ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`
        }), ze(!1), setTimeout(() => {
            L(!1), D(!1)
        }, 300), setTimeout(() => {
            i && se(i[0])
        }, ue.DURATION * 1e3))
    }
    k.useEffect(() => {
        if (!P && r) {
            const J = setTimeout(() => {
                Mn(document.body)
            }, 200);
            return () => clearTimeout(J)
        }
    }, [P, r]), k.useLayoutEffect(() => {
        e ? (D(!0), A(!0)) : we()
    }, [e]), k.useEffect(() => {
        O && (t == null || t(P))
    }, [P]), k.useEffect(() => {
        T(!0)
    }, []);

    function Pe() {
        if (!V.current) return;
        const J = document.querySelector("[vaul-drawer-wrapper]"),
            te = kn(V.current, w);
        ve(V.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`
        }), ve(F.current, {
            transition: `opacity ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`,
            opacity: "1"
        }), r && te && te > 0 && P && ve(J, {
            borderRadius: `${Ia}px`,
            overflow: "hidden",
            ...Se(w) ? {
                transform: `scale(${_e()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                transformOrigin: "top"
            } : {
                transform: `scale(${_e()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: `${ue.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${ue.EASE.join(",")})`
        }, !0)
    }

    function Oe() {
        !M || !V.current || (V.current.classList.remove(Ir), ee.current = !1, E(!1), K.current = new Date)
    }

    function qe(J) {
        if (!M || !V.current) return;
        V.current.classList.remove(Ir), ee.current = !1, E(!1), K.current = new Date;
        const te = kn(V.current, w);
        if (!Ke(J.target, !1) || !te || Number.isNaN(te) || B.current === null) return;
        const de = K.current.getTime() - B.current.getTime(),
            ne = oe.current - (Se(w) ? J.clientY : J.clientX),
            he = Math.abs(ne) / de;
        if (he > .05 && (U(!0), setTimeout(() => {
                U(!1)
            }, 200)), i) {
            me({
                draggedDistance: ne * (w === "bottom" || w === "right" ? 1 : -1),
                closeDrawer: we,
                velocity: he,
                dismissible: d
            }), a == null || a(J, !0);
            return
        }
        if (w === "bottom" || w === "right" ? ne > 0 : ne < 0) {
            Pe(), a == null || a(J, !0);
            return
        }
        if (he > zs) {
            we(), a == null || a(J, !1);
            return
        }
        var be;
        const He = Math.min((be = V.current.getBoundingClientRect().height) != null ? be : 0, window.innerHeight);
        if (te >= He * l) {
            we(), a == null || a(J, !1);
            return
        }
        a == null || a(J, !0), Pe()
    }
    k.useEffect(() => {
        P && (ve(document.documentElement, {
            scrollBehavior: "auto"
        }), W.current = new Date, ze(!0))
    }, [P]), k.useEffect(() => {
        if (V.current && I) {
            var J;
            const te = V == null || (J = V.current) == null ? void 0 : J.querySelectorAll("*");
            te == null || te.forEach(de => {
                const ne = de;
                (ne.scrollHeight > ne.clientHeight || ne.scrollWidth > ne.clientWidth) && ne.classList.add("vaul-scrollable")
            })
        }
    }, [I]);

    function ze(J) {
        const te = document.querySelector("[vaul-drawer-wrapper]");
        !te || !r || (J ? (c && ($ || (ve(document.body, {
            background: document.body.style.backgroundColor || document.body.style.background
        }), ve(document.body, {
            background: "black"
        }, !0))), ve(te, {
            borderRadius: `${Ia}px`,
            overflow: "hidden",
            ...Se(w) ? {
                transform: `scale(${_e()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                transformOrigin: "top"
            } : {
                transform: `scale(${_e()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: `${ue.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${ue.EASE.join(",")})`
        })) : (Mn(te, "overflow"), Mn(te, "transform"), Mn(te, "borderRadius"), ve(te, {
            transitionProperty: "transform, border-radius",
            transitionDuration: `${ue.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${ue.EASE.join(",")})`
        })))
    }

    function kt(J) {
        const te = J ? (window.innerWidth - Dt) / window.innerWidth : 1,
            de = J ? -Dt : 0;
        q.current && window.clearTimeout(q.current), ve(V.current, {
            transition: `transform ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`,
            transform: `scale(${te}) translate3d(0, ${de}px, 0)`
        }), !J && V.current && (q.current = setTimeout(() => {
            const ne = kn(V.current, w);
            ve(V.current, {
                transition: "none",
                transform: Se(w) ? `translate3d(0, ${ne}px, 0)` : `translate3d(${ne}px, 0, 0)`
            })
        }, 500))
    }

    function pr(J, te) {
        if (te < 0) return;
        const de = Se(w) ? window.innerHeight : window.innerWidth,
            ne = (de - Dt) / de,
            he = ne + te * (1 - ne),
            be = -Dt + te * Dt;
        ve(V.current, {
            transform: Se(w) ? `scale(${he}) translate3d(0, ${be}px, 0)` : `scale(${he}) translate3d(${be}px, 0, 0)`,
            transition: "none"
        })
    }

    function mr(J, te) {
        const de = Se(w) ? window.innerHeight : window.innerWidth,
            ne = te ? (de - Dt) / de : 1,
            he = te ? -Dt : 0;
        te && ve(V.current, {
            transition: `transform ${ue.DURATION}s cubic-bezier(${ue.EASE.join(",")})`,
            transform: Se(w) ? `scale(${ne}) translate3d(0, ${he}px, 0)` : `scale(${ne}) translate3d(${he}px, 0, 0)`
        })
    }
    return k.createElement(ys, {
        modal: g,
        onOpenChange: J => {
            if (e !== void 0) {
                t == null || t(J);
                return
            }
            J ? (A(!0), D(J)) : we()
        },
        open: P
    }, k.createElement(js.Provider, {
        value: {
            visible: I,
            activeSnapPoint: Q,
            snapPoints: i,
            setActiveSnapPoint: se,
            drawerRef: V,
            overlayRef: F,
            scaleBackground: ze,
            onOpenChange: t,
            onPress: Be,
            setVisible: L,
            onRelease: qe,
            onDrag: vt,
            dismissible: d,
            handleOnly: m,
            isOpen: P,
            isDragging: M,
            shouldFade: Ce,
            closeDrawer: we,
            onNestedDrag: pr,
            onNestedOpenChange: kt,
            onNestedRelease: mr,
            keyboardIsOpen: ie,
            openProp: e,
            modal: g,
            snapPointsOffset: ae,
            direction: w
        }
    }, n))
}
const Hm = 250,
    Vm = 120,
    Ys = k.forwardRef(function({
        preventCycle: e = !1,
        children: t,
        ...n
    }, r) {
        const {
            visible: o,
            closeDrawer: a,
            isDragging: i,
            snapPoints: s,
            activeSnapPoint: c,
            setActiveSnapPoint: l,
            dismissible: f,
            handleOnly: d,
            onPress: m,
            onDrag: p
        } = dr(), v = k.useRef(null), h = k.useRef(!1);

        function b() {
            if (h.current) {
                $();
                return
            }
            window.setTimeout(() => {
                g()
            }, Vm)
        }

        function g() {
            if (i || e || h.current) {
                $();
                return
            }
            if ($(), (!s || s.length === 0) && f) {
                a();
                return
            }
            if (c === s[s.length - 1] && f) {
                a();
                return
            }
            const C = s.findIndex(_ => _ === c);
            if (C === -1) return;
            const S = s[C + 1];
            l(S)
        }

        function y() {
            v.current = window.setTimeout(() => {
                h.current = !0
            }, Hm)
        }

        function $() {
            window.clearTimeout(v.current), h.current = !1
        }
        return k.createElement("div", {
            onClick: b,
            onDoubleClick: () => {
                h.current = !0, a()
            },
            onPointerCancel: $,
            onPointerDown: w => {
                d && m(w), y()
            },
            onPointerMove: w => {
                d && p(w)
            },
            ref: r,
            "vaul-drawer-visible": o ? "true" : "false",
            "vaul-handle": "",
            "aria-hidden": "true",
            ...n
        }, k.createElement("span", {
            "vaul-handle-hitarea": "",
            "aria-hidden": "true"
        }, t))
    });
Ys.displayName = "Drawer.Handle";
const Ks = k.forwardRef(function({
    children: e,
    ...t
}, n) {
    const {
        overlayRef: r,
        snapPoints: o,
        onRelease: a,
        shouldFade: i,
        isOpen: s,
        visible: c
    } = dr(), l = Hs(n, r), f = o && o.length > 0;
    return k.createElement(ws, {
        onMouseUp: a,
        ref: l,
        "vaul-drawer-visible": c ? "true" : "false",
        "vaul-overlay": "",
        "vaul-snap-points": s && f ? "true" : "false",
        "vaul-snap-points-overlay": s && i ? "true" : "false",
        ...t
    })
});
Ks.displayName = "Drawer.Overlay";
const qs = k.forwardRef(function({
    onOpenAutoFocus: e,
    onPointerDownOutside: t,
    onAnimationEnd: n,
    style: r,
    ...o
}, a) {
    const {
        drawerRef: i,
        onPress: s,
        onRelease: c,
        onDrag: l,
        dismissible: f,
        keyboardIsOpen: d,
        snapPointsOffset: m,
        visible: p,
        closeDrawer: v,
        modal: h,
        openProp: b,
        onOpenChange: g,
        setVisible: y,
        handleOnly: $,
        direction: w
    } = dr(), C = Hs(a, i), S = k.useRef(null), _ = k.useRef(!1), P = (D, R, A = 0) => {
        if (_.current) return !0;
        const I = Math.abs(D.y),
            L = Math.abs(D.x),
            O = L > I,
            T = ["bottom", "right"].includes(R) ? 1 : -1;
        if (R === "left" || R === "right") {
            if (!(D.x * T < 0) && L >= 0 && L <= A) return O
        } else if (!(D.y * T < 0) && I >= 0 && I <= A) return !O;
        return _.current = !0, !0
    };
    return k.useEffect(() => {
        y(!0)
    }, []), k.createElement($s, {
        "vaul-drawer": "",
        "vaul-drawer-direction": w,
        "vaul-drawer-visible": p ? "true" : "false",
        ...o,
        ref: C,
        style: m && m.length > 0 ? {
            "--snap-point-height": `${m[0]}px`,
            ...r
        } : r,
        onOpenAutoFocus: D => {
            if (e) e(D);
            else {
                var R;
                D.preventDefault(), (R = i.current) == null || R.focus()
            }
        },
        onPointerDown: D => {
            $ || (o.onPointerDown == null || o.onPointerDown.call(o, D), S.current = {
                x: D.clientX,
                y: D.clientY
            }, s(D))
        },
        onPointerDownOutside: D => {
            if (t == null || t(D), !h || D.defaultPrevented) {
                D.preventDefault();
                return
            }
            d.current && (d.current = !1), D.preventDefault(), g == null || g(!1), !(!f || b !== void 0) && v()
        },
        onFocusOutside: D => {
            if (!h) {
                D.preventDefault();
                return
            }
        },
        onEscapeKeyDown: D => {
            if (!h) {
                D.preventDefault();
                return
            }
        },
        onPointerMove: D => {
            if ($ || (o.onPointerMove == null || o.onPointerMove.call(o, D), !S.current)) return;
            const R = D.clientY - S.current.y,
                A = D.clientX - S.current.x,
                I = D.pointerType === "touch" ? 10 : 2;
            P({
                x: A,
                y: R
            }, w, I) ? l(D) : (Math.abs(A) > I || Math.abs(R) > I) && (S.current = null)
        },
        onPointerUp: D => {
            o.onPointerUp == null || o.onPointerUp.call(o, D), S.current = null, _.current = !1, c(D)
        }
    })
});
qs.displayName = "Drawer.Content";

function zm({
    onDrag: e,
    onOpenChange: t,
    ...n
}) {
    const {
        onNestedDrag: r,
        onNestedOpenChange: o,
        onNestedRelease: a
    } = dr();
    if (!r) throw new Error("Drawer.NestedRoot must be placed in another drawer");
    return k.createElement(Gs, {
        nested: !0,
        onClose: () => {
            o(!1)
        },
        onDrag: (i, s) => {
            r(i, s), e == null || e(i, s)
        },
        onOpenChange: i => {
            i && o(i), t == null || t(i)
        },
        onRelease: a,
        ...n
    })
}
const _t = {
    Root: Gs,
    NestedRoot: zm,
    Content: qs,
    Handle: Ys,
    Overlay: Ks,
    Trigger: Op,
    Portal: xs,
    Close: Ss,
    Title: Cs,
    Description: Es
};
var Um = ({
        render: e,
        body: t,
        show: n,
        onClose: r,
        closeButton: o,
        stickyHeader: a,
        stickyFooter: i,
        rounded: s,
        fullscreen: c,
        className: l,
        sectionClassName: f,
        ignoreHistory: d,
        title: m = "",
        description: p = ""
    }) => {
        const [v, h] = u.useState(!1), b = typeof n < "u", g = b ? n : v, y = () => {
            h(!0)
        }, $ = () => {
            r ? r() : h(!1)
        }, w = () => {
            if (d) return $();
            history.back()
        };
        return u.useEffect(() => {
            (b ? n : v) && !d && (history.pushState("", ""), window.onpopstate = () => {
                $()
            })
        }, [n, v, d]), x.jsxs(u.Fragment, {
            children: [e && e({
                close: w,
                open: y,
                isOpen: g
            }), x.jsx(_t.Root, {
                onRelease: (C, S) => {
                    S || w()
                },
                open: g,
                children: x.jsxs(_t.Portal, {
                    children: [x.jsx(_t.Overlay, {
                        onClick: C => {
                            C.preventDefault(), C.stopPropagation(), w()
                        },
                        className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/70"
                    }), x.jsxs(_t.Content, {
                        className: fe("bg-body-light fixed inset-x-0 bottom-0 z-50 flex h-auto max-h-full w-full flex-col overflow-hidden outline-none", s ? "rounded-t-3xl" : "", c ? "h-full" : "", l),
                        children: [x.jsx(dn, {
                            children: x.jsx(_t.Title, {
                                children: m
                            })
                        }), x.jsx(dn, {
                            children: x.jsx(_t.Description, {
                                children: p
                            })
                        }), x.jsxs("header", {
                            className: "relative z-10 bg-inherit",
                            children: [x.jsx("div", {
                                className: "relative flex h-8 shrink-0 items-center justify-center after:h-[5px] after:w-12 after:rounded-full after:bg-gray-600",
                                children: o && x.jsx(_t.Close, {
                                    children: o
                                })
                            }), a && a({
                                close: w
                            })]
                        }), x.jsx("section", {
                            className: fe("max-h-screen overflow-y-auto", f),
                            children: t({
                                close: w
                            })
                        }), i && x.jsx("footer", {
                            className: "fixed bottom-0 w-full bg-inherit drop-shadow-[-1px_0_2px_rgba(0,0,0,0.1)]",
                            children: i({
                                close: w
                            })
                        })]
                    })]
                })
            })]
        })
    },
    Vb = Um;

function Gm(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function La(e) {
    return Gm(e) || Array.isArray(e)
}

function Ym() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}

function No(e, t) {
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    const o = JSON.stringify(Object.keys(e.breakpoints || {})),
        a = JSON.stringify(Object.keys(t.breakpoints || {}));
    return o !== a ? !1 : n.every(i => {
        const s = e[i],
            c = t[i];
        return typeof s == "function" ? `${s}` == `${c}` : !La(s) || !La(c) ? s === c : No(s, c)
    })
}

function ja(e) {
    return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map(t => t.options)
}

function Km(e, t) {
    if (e.length !== t.length) return !1;
    const n = ja(e),
        r = ja(t);
    return n.every((o, a) => {
        const i = r[a];
        return No(o, i)
    })
}

function Mo(e) {
    return typeof e == "number"
}

function oo(e) {
    return typeof e == "string"
}

function ko(e) {
    return typeof e == "boolean"
}

function Fa(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function ge(e) {
    return Math.abs(e)
}

function Io(e) {
    return Math.sign(e)
}

function rn(e, t) {
    return ge(e - t)
}

function qm(e, t) {
    if (e === 0 || t === 0 || ge(e) <= ge(t)) return 0;
    const n = rn(ge(e), ge(t));
    return ge(n / e)
}

function pn(e) {
    return mn(e).map(Number)
}

function Ue(e) {
    return e[bn(e)]
}

function bn(e) {
    return Math.max(0, e.length - 1)
}

function Ao(e, t) {
    return t === bn(e)
}

function Wa(e, t = 0) {
    return Array.from(Array(e), (n, r) => t + r)
}

function mn(e) {
    return Object.keys(e)
}

function Xs(e, t) {
    return [e, t].reduce((n, r) => (mn(r).forEach(o => {
        const a = n[o],
            i = r[o],
            s = Fa(a) && Fa(i);
        n[o] = s ? Xs(a, i) : i
    }), n), {})
}

function ao(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent
}

function Xm(e, t) {
    const n = {
        start: r,
        center: o,
        end: a
    };

    function r() {
        return 0
    }

    function o(c) {
        return a(c) / 2
    }

    function a(c) {
        return t - c
    }

    function i(c, l) {
        return oo(e) ? n[e](c) : e(t, c, l)
    }
    return {
        measure: i
    }
}

function vn() {
    let e = [];

    function t(o, a, i, s = {
        passive: !0
    }) {
        let c;
        if ("addEventListener" in o) o.addEventListener(a, i, s), c = () => o.removeEventListener(a, i, s);
        else {
            const l = o;
            l.addListener(i), c = () => l.removeListener(i)
        }
        return e.push(c), r
    }

    function n() {
        e = e.filter(o => o())
    }
    const r = {
        add: t,
        clear: n
    };
    return r
}

function Zm(e, t, n, r) {
    const o = vn(),
        a = 1e3 / 60;
    let i = null,
        s = 0,
        c = 0;

    function l() {
        o.add(e, "visibilitychange", () => {
            e.hidden && v()
        })
    }

    function f() {
        p(), o.clear()
    }

    function d(b) {
        if (!c) return;
        i || (i = b);
        const g = b - i;
        for (i = b, s += g; s >= a;) n(), s -= a;
        const y = ge(s / a);
        r(y), c && t.requestAnimationFrame(d)
    }

    function m() {
        c || (c = t.requestAnimationFrame(d))
    }

    function p() {
        t.cancelAnimationFrame(c), i = null, s = 0, c = 0
    }

    function v() {
        i = null, s = 0
    }
    return {
        init: l,
        destroy: f,
        start: m,
        stop: p,
        update: n,
        render: r
    }
}

function Qm(e, t) {
    const n = t === "rtl",
        r = e === "y",
        o = r ? "y" : "x",
        a = r ? "x" : "y",
        i = !r && n ? -1 : 1,
        s = f(),
        c = d();

    function l(v) {
        const {
            height: h,
            width: b
        } = v;
        return r ? h : b
    }

    function f() {
        return r ? "top" : n ? "right" : "left"
    }

    function d() {
        return r ? "bottom" : n ? "left" : "right"
    }

    function m(v) {
        return v * i
    }
    return {
        scroll: o,
        cross: a,
        startEdge: s,
        endEdge: c,
        measureSize: l,
        direction: m
    }
}

function Nt(e = 0, t = 0) {
    const n = ge(e - t);

    function r(l) {
        return l < e
    }

    function o(l) {
        return l > t
    }

    function a(l) {
        return r(l) || o(l)
    }

    function i(l) {
        return a(l) ? r(l) ? e : t : l
    }

    function s(l) {
        return n ? l - n * Math.ceil((l - t) / n) : l
    }
    return {
        length: n,
        max: t,
        min: e,
        constrain: i,
        reachedAny: a,
        reachedMax: o,
        reachedMin: r,
        removeOffset: s
    }
}

function Zs(e, t, n) {
    const {
        constrain: r
    } = Nt(0, e), o = e + 1;
    let a = i(t);

    function i(m) {
        return n ? ge((o + m) % o) : r(m)
    }

    function s() {
        return a
    }

    function c(m) {
        return a = i(m), d
    }

    function l(m) {
        return f().set(s() + m)
    }

    function f() {
        return Zs(e, s(), n)
    }
    const d = {
        get: s,
        set: c,
        add: l,
        clone: f
    };
    return d
}

function Jm(e, t, n, r, o, a, i, s, c, l, f, d, m, p, v, h, b, g, y) {
    const {
        cross: $,
        direction: w
    } = e, C = ["INPUT", "SELECT", "TEXTAREA"], S = {
        passive: !1
    }, _ = vn(), P = vn(), D = Nt(50, 225).constrain(p.measure(20)), R = {
        mouse: 300,
        touch: 400
    }, A = {
        mouse: 500,
        touch: 600
    }, I = v ? 43 : 25;
    let L = !1,
        O = 0,
        T = 0,
        M = !1,
        E = !1,
        N = !1,
        U = !1;

    function F(j) {
        if (!y) return;

        function z(X) {
            (ko(y) || y(j, X)) && q(X)
        }
        const Q = t;
        _.add(Q, "dragstart", X => X.preventDefault(), S).add(Q, "touchmove", () => {}, S).add(Q, "touchend", () => {}).add(Q, "touchstart", z).add(Q, "mousedown", z).add(Q, "touchcancel", ie).add(Q, "contextmenu", ie).add(Q, "click", le, !0)
    }

    function W() {
        _.clear(), P.clear()
    }

    function B() {
        const j = U ? n : t;
        P.add(j, "touchmove", oe, S).add(j, "touchend", ie).add(j, "mousemove", oe, S).add(j, "mouseup", ie)
    }

    function K(j) {
        const z = j.nodeName || "";
        return C.includes(z)
    }

    function re() {
        return (v ? A : R)[U ? "mouse" : "touch"]
    }

    function ee(j, z) {
        const Q = d.add(Io(j) * -1),
            X = f.byDistance(j, !v).distance;
        return v || ge(j) < D ? X : b && z ? X * .5 : f.byIndex(Q.get(), 0).distance
    }

    function q(j) {
        const z = ao(j, r);
        U = z, N = v && z && !j.buttons && L, L = rn(o.get(), i.get()) >= 2, !(z && j.button !== 0) && (K(j.target) || (M = !0, a.pointerDown(j), l.useFriction(0).useDuration(0), o.set(i), B(), O = a.readPoint(j), T = a.readPoint(j, $), m.emit("pointerDown")))
    }

    function oe(j) {
        if (!ao(j, r) && j.touches.length >= 2) return ie(j);
        const Q = a.readPoint(j),
            X = a.readPoint(j, $),
            se = rn(Q, O),
            me = rn(X, T);
        if (!E && !U && (!j.cancelable || (E = se > me, !E))) return ie(j);
        const ae = a.pointerMove(j);
        se > h && (N = !0), l.useFriction(.3).useDuration(.75), s.start(), o.add(w(ae)), j.preventDefault()
    }

    function ie(j) {
        const Q = f.byDistance(0, !1).index !== d.get(),
            X = a.pointerUp(j) * re(),
            se = ee(w(X), Q),
            me = qm(X, se),
            ae = I - 10 * me,
            Y = g + me / 50;
        E = !1, M = !1, P.clear(), l.useDuration(ae).useFriction(Y), c.distance(se, !v), U = !1, m.emit("pointerUp")
    }

    function le(j) {
        N && (j.stopPropagation(), j.preventDefault(), N = !1)
    }

    function V() {
        return M
    }
    return {
        init: F,
        destroy: W,
        pointerDown: V
    }
}

function ev(e, t) {
    let r, o;

    function a(d) {
        return d.timeStamp
    }

    function i(d, m) {
        const v = `client${(m||e.scroll)==="x"?"X":"Y"}`;
        return (ao(d, t) ? d : d.touches[0])[v]
    }

    function s(d) {
        return r = d, o = d, i(d)
    }

    function c(d) {
        const m = i(d) - i(o),
            p = a(d) - a(r) > 170;
        return o = d, p && (r = d), m
    }

    function l(d) {
        if (!r || !o) return 0;
        const m = i(o) - i(r),
            p = a(d) - a(r),
            v = a(d) - a(o) > 170,
            h = m / p;
        return p && !v && ge(h) > .1 ? h : 0
    }
    return {
        pointerDown: s,
        pointerMove: c,
        pointerUp: l,
        readPoint: i
    }
}

function tv() {
    function e(n) {
        const {
            offsetTop: r,
            offsetLeft: o,
            offsetWidth: a,
            offsetHeight: i
        } = n;
        return {
            top: r,
            right: o + a,
            bottom: r + i,
            left: o,
            width: a,
            height: i
        }
    }
    return {
        measure: e
    }
}

function nv(e) {
    function t(r) {
        return e * (r / 100)
    }
    return {
        measure: t
    }
}

function rv(e, t, n, r, o, a, i) {
    let s, c, l = [],
        f = !1;

    function d(h) {
        return o.measureSize(i.measure(h))
    }

    function m(h) {
        if (!a) return;
        c = d(e), l = r.map(d);

        function b(y) {
            for (const $ of y) {
                const w = $.target === e,
                    C = r.indexOf($.target),
                    S = w ? c : l[C],
                    _ = d(w ? e : r[C]);
                if (ge(_ - S) >= .5) {
                    n.requestAnimationFrame(() => {
                        h.reInit(), t.emit("resize")
                    });
                    break
                }
            }
        }
        s = new ResizeObserver(y => {
            f || (ko(a) || a(h, y)) && b(y)
        }), [e].concat(r).forEach(y => s.observe(y))
    }

    function p() {
        s && s.disconnect(), f = !0
    }
    return {
        init: m,
        destroy: p
    }
}

function ov(e, t, n, r, o) {
    let a = 0,
        i = 0,
        s = r,
        c = o,
        l = e.get(),
        f = 0;

    function d() {
        const C = n.get() - e.get(),
            S = !s;
        let _ = 0;
        return S ? (a = 0, e.set(n), _ = C) : (a += C / s, a *= c, l += a, e.add(a), _ = l - f), i = Io(_), f = l, w
    }

    function m() {
        const C = n.get() - t.get();
        return ge(C) < .001
    }

    function p() {
        return s
    }

    function v() {
        return i
    }

    function h() {
        return a
    }

    function b() {
        return y(r)
    }

    function g() {
        return $(o)
    }

    function y(C) {
        return s = C, w
    }

    function $(C) {
        return c = C, w
    }
    const w = {
        direction: v,
        duration: p,
        velocity: h,
        seek: d,
        settled: m,
        useBaseFriction: g,
        useBaseDuration: b,
        useFriction: $,
        useDuration: y
    };
    return w
}

function av(e, t, n, r, o) {
    const a = o.measure(10),
        i = o.measure(50),
        s = Nt(.1, .99);
    let c = !1;

    function l() {
        return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()))
    }

    function f(p) {
        if (!l()) return;
        const v = e.reachedMin(t.get()) ? "min" : "max",
            h = ge(e[v] - t.get()),
            b = n.get() - t.get(),
            g = s.constrain(h / i);
        n.subtract(b * g), !p && ge(b) < a && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
    }

    function d(p) {
        c = !p
    }
    return {
        constrain: f,
        toggleActive: d
    }
}

function iv(e, t, n, r, o) {
    const a = Nt(-t + e, 0),
        i = d(),
        s = f(),
        c = m();

    function l(v, h) {
        return rn(v, h) < 1
    }

    function f() {
        const v = i[0],
            h = Ue(i),
            b = i.lastIndexOf(v),
            g = i.indexOf(h) + 1;
        return Nt(b, g)
    }

    function d() {
        return n.map((v, h) => {
            const {
                min: b,
                max: g
            } = a, y = a.constrain(v), $ = !h, w = Ao(n, h);
            return $ ? g : w || l(b, y) ? b : l(g, y) ? g : y
        }).map(v => parseFloat(v.toFixed(3)))
    }

    function m() {
        if (t <= e + o) return [a.max];
        if (r === "keepSnaps") return i;
        const {
            min: v,
            max: h
        } = s;
        return i.slice(v, h)
    }
    return {
        snapsContained: c,
        scrollContainLimit: s
    }
}

function sv(e, t, n) {
    const r = t[0],
        o = n ? r - e : Ue(t);
    return {
        limit: Nt(o, r)
    }
}

function cv(e, t, n, r) {
    const a = t.min + .1,
        i = t.max + .1,
        {
            reachedMin: s,
            reachedMax: c
        } = Nt(a, i);

    function l(m) {
        return m === 1 ? c(n.get()) : m === -1 ? s(n.get()) : !1
    }

    function f(m) {
        if (!l(m)) return;
        const p = e * (m * -1);
        r.forEach(v => v.add(p))
    }
    return {
        loop: f
    }
}

function lv(e) {
    const {
        max: t,
        length: n
    } = e;

    function r(a) {
        const i = a - t;
        return n ? i / -n : 0
    }
    return {
        get: r
    }
}

function uv(e, t, n, r, o) {
    const {
        startEdge: a,
        endEdge: i
    } = e, {
        groupSlides: s
    } = o, c = d().map(t.measure), l = m(), f = p();

    function d() {
        return s(r).map(h => Ue(h)[i] - h[0][a]).map(ge)
    }

    function m() {
        return r.map(h => n[a] - h[a]).map(h => -ge(h))
    }

    function p() {
        return s(l).map(h => h[0]).map((h, b) => h + c[b])
    }
    return {
        snaps: l,
        snapsAligned: f
    }
}

function dv(e, t, n, r, o, a) {
    const {
        groupSlides: i
    } = o, {
        min: s,
        max: c
    } = r, l = f();

    function f() {
        const m = i(a),
            p = !e || t === "keepSnaps";
        return n.length === 1 ? [a] : p ? m : m.slice(s, c).map((v, h, b) => {
            const g = !h,
                y = Ao(b, h);
            if (g) {
                const $ = Ue(b[0]) + 1;
                return Wa($)
            }
            if (y) {
                const $ = bn(a) - Ue(b)[0] + 1;
                return Wa($, Ue(b)[0])
            }
            return v
        })
    }
    return {
        slideRegistry: l
    }
}

function fv(e, t, n, r, o) {
    const {
        reachedAny: a,
        removeOffset: i,
        constrain: s
    } = r;

    function c(v) {
        return v.concat().sort((h, b) => ge(h) - ge(b))[0]
    }

    function l(v) {
        const h = e ? i(v) : s(v),
            b = t.map((y, $) => ({
                diff: f(y - h, 0),
                index: $
            })).sort((y, $) => ge(y.diff) - ge($.diff)),
            {
                index: g
            } = b[0];
        return {
            index: g,
            distance: h
        }
    }

    function f(v, h) {
        const b = [v, v + n, v - n];
        if (!e) return v;
        if (!h) return c(b);
        const g = b.filter(y => Io(y) === h);
        return g.length ? c(g) : Ue(b) - n
    }

    function d(v, h) {
        const b = t[v] - o.get(),
            g = f(b, h);
        return {
            index: v,
            distance: g
        }
    }

    function m(v, h) {
        const b = o.get() + v,
            {
                index: g,
                distance: y
            } = l(b),
            $ = !e && a(b);
        if (!h || $) return {
            index: g,
            distance: v
        };
        const w = t[g] - y,
            C = v + f(w, 0);
        return {
            index: g,
            distance: C
        }
    }
    return {
        byDistance: m,
        byIndex: d,
        shortcut: f
    }
}

function pv(e, t, n, r, o, a, i) {
    function s(d) {
        const m = d.distance,
            p = d.index !== t.get();
        a.add(m), m && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), p && (n.set(t.get()), t.set(d.index), i.emit("select"))
    }

    function c(d, m) {
        const p = o.byDistance(d, m);
        s(p)
    }

    function l(d, m) {
        const p = t.clone().set(d),
            v = o.byIndex(p.get(), m);
        s(v)
    }
    return {
        distance: c,
        index: l
    }
}

function mv(e, t, n, r, o, a, i) {
    let s = 0;

    function c() {
        a.add(document, "keydown", l, !1), t.forEach(f)
    }

    function l(m) {
        m.code === "Tab" && (s = new Date().getTime())
    }

    function f(m) {
        const p = () => {
            if (new Date().getTime() - s > 10) return;
            e.scrollLeft = 0;
            const b = t.indexOf(m),
                g = n.findIndex(y => y.includes(b));
            Mo(g) && (o.useDuration(0), r.index(g, 0), i.emit("slideFocus"))
        };
        a.add(m, "focus", p, {
            passive: !0,
            capture: !0
        })
    }
    return {
        init: c
    }
}

function Fn(e) {
    let t = e;

    function n() {
        return t
    }

    function r(c) {
        t = i(c)
    }

    function o(c) {
        t += i(c)
    }

    function a(c) {
        t -= i(c)
    }

    function i(c) {
        return Mo(c) ? c : c.get()
    }
    return {
        get: n,
        set: r,
        add: o,
        subtract: a
    }
}

function Qs(e, t) {
    const n = e.scroll === "x" ? a : i,
        r = t.style;
    let o = !1;

    function a(d) {
        return `translate3d(${d}px,0px,0px)`
    }

    function i(d) {
        return `translate3d(0px,${d}px,0px)`
    }

    function s(d) {
        o || (r.transform = n(e.direction(d)))
    }

    function c(d) {
        o = !d
    }

    function l() {
        o || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
    }
    return {
        clear: l,
        to: s,
        toggleActive: c
    }
}

function vv(e, t, n, r, o, a, i, s, c) {
    const f = pn(o),
        d = pn(o).reverse(),
        m = g().concat(y());

    function p(_, P) {
        return _.reduce((D, R) => D - o[R], P)
    }

    function v(_, P) {
        return _.reduce((D, R) => p(D, P) > 0 ? D.concat([R]) : D, [])
    }

    function h(_) {
        return a.map((P, D) => ({
            start: P - r[D] + .5 + _,
            end: P + t - .5 + _
        }))
    }

    function b(_, P, D) {
        const R = h(P);
        return _.map(A => {
            const I = D ? 0 : -n,
                L = D ? n : 0,
                O = D ? "end" : "start",
                T = R[A][O];
            return {
                index: A,
                loopPoint: T,
                slideLocation: Fn(-1),
                translate: Qs(e, c[A]),
                target: () => s.get() > T ? I : L
            }
        })
    }

    function g() {
        const _ = i[0],
            P = v(d, _);
        return b(P, n, !1)
    }

    function y() {
        const _ = t - i[0] - 1,
            P = v(f, _);
        return b(P, -n, !0)
    }

    function $() {
        return m.every(({
            index: _
        }) => {
            const P = f.filter(D => D !== _);
            return p(P, t) <= .1
        })
    }

    function w() {
        m.forEach(_ => {
            const {
                target: P,
                translate: D,
                slideLocation: R
            } = _, A = P();
            A !== R.get() && (D.to(A), R.set(A))
        })
    }

    function C() {
        m.forEach(_ => _.translate.clear())
    }
    return {
        canLoop: $,
        clear: C,
        loop: w,
        loopPoints: m
    }
}

function hv(e, t, n) {
    let r, o = !1;

    function a(c) {
        if (!n) return;

        function l(f) {
            for (const d of f)
                if (d.type === "childList") {
                    c.reInit(), t.emit("slidesChanged");
                    break
                }
        }
        r = new MutationObserver(f => {
            o || (ko(n) || n(c, f)) && l(f)
        }), r.observe(e, {
            childList: !0
        })
    }

    function i() {
        r && r.disconnect(), o = !0
    }
    return {
        init: a,
        destroy: i
    }
}

function gv(e, t, n, r) {
    const o = {};
    let a = null,
        i = null,
        s, c = !1;

    function l() {
        s = new IntersectionObserver(v => {
            c || (v.forEach(h => {
                const b = t.indexOf(h.target);
                o[b] = h
            }), a = null, i = null, n.emit("slidesInView"))
        }, {
            root: e.parentElement,
            threshold: r
        }), t.forEach(v => s.observe(v))
    }

    function f() {
        s && s.disconnect(), c = !0
    }

    function d(v) {
        return mn(o).reduce((h, b) => {
            const g = parseInt(b),
                {
                    isIntersecting: y
                } = o[g];
            return (v && y || !v && !y) && h.push(g), h
        }, [])
    }

    function m(v = !0) {
        if (v && a) return a;
        if (!v && i) return i;
        const h = d(v);
        return v && (a = h), v || (i = h), h
    }
    return {
        init: l,
        destroy: f,
        get: m
    }
}

function bv(e, t, n, r, o, a) {
    const {
        measureSize: i,
        startEdge: s,
        endEdge: c
    } = e, l = n[0] && o, f = v(), d = h(), m = n.map(i), p = b();

    function v() {
        if (!l) return 0;
        const y = n[0];
        return ge(t[s] - y[s])
    }

    function h() {
        if (!l) return 0;
        const y = a.getComputedStyle(Ue(r));
        return parseFloat(y.getPropertyValue(`margin-${c}`))
    }

    function b() {
        return n.map((y, $, w) => {
            const C = !$,
                S = Ao(w, $);
            return C ? m[$] + f : S ? m[$] + d : w[$ + 1][s] - y[s]
        }).map(ge)
    }
    return {
        slideSizes: m,
        slideSizesWithGaps: p,
        startGap: f,
        endGap: d
    }
}

function yv(e, t, n, r, o, a, i, s, c) {
    const {
        startEdge: l,
        endEdge: f,
        direction: d
    } = e, m = Mo(n);

    function p(g, y) {
        return pn(g).filter($ => $ % y === 0).map($ => g.slice($, $ + y))
    }

    function v(g) {
        return g.length ? pn(g).reduce((y, $, w) => {
            const C = Ue(y) || 0,
                S = C === 0,
                _ = $ === bn(g),
                P = o[l] - a[C][l],
                D = o[l] - a[$][f],
                R = !r && S ? d(i) : 0,
                A = !r && _ ? d(s) : 0,
                I = ge(D - A - (P + R));
            return w && I > t + c && y.push($), _ && y.push(g.length), y
        }, []).map((y, $, w) => {
            const C = Math.max(w[$ - 1] || 0);
            return g.slice(C, y)
        }) : []
    }

    function h(g) {
        return m ? p(g, n) : v(g)
    }
    return {
        groupSlides: h
    }
}

function xv(e, t, n, r, o, a, i) {
    const {
        align: s,
        axis: c,
        direction: l,
        startIndex: f,
        loop: d,
        duration: m,
        dragFree: p,
        dragThreshold: v,
        inViewThreshold: h,
        slidesToScroll: b,
        skipSnaps: g,
        containScroll: y,
        watchResize: $,
        watchSlides: w,
        watchDrag: C
    } = a, S = 2, _ = tv(), P = _.measure(t), D = n.map(_.measure), R = Qm(c, l), A = R.measureSize(P), I = nv(A), L = Xm(s, A), O = !d && !!y, T = d || !!y, {
        slideSizes: M,
        slideSizesWithGaps: E,
        startGap: N,
        endGap: U
    } = bv(R, P, D, n, T, o), F = yv(R, A, b, d, P, D, N, U, S), {
        snaps: W,
        snapsAligned: B
    } = uv(R, L, P, D, F), K = -Ue(W) + Ue(E), {
        snapsContained: re,
        scrollContainLimit: ee
    } = iv(A, K, B, y, S), q = O ? re : B, {
        limit: oe
    } = sv(K, q, d), ie = Zs(bn(q), f, d), le = ie.clone(), V = pn(n), H = ({
        dragHandler: Pe,
        scrollBody: Oe,
        scrollBounds: qe,
        options: {
            loop: ze
        }
    }) => {
        ze || qe.constrain(Pe.pointerDown()), Oe.seek()
    }, j = ({
        scrollBody: Pe,
        translate: Oe,
        location: qe,
        offsetLocation: ze,
        scrollLooper: kt,
        slideLooper: pr,
        dragHandler: mr,
        animation: J,
        eventHandler: te,
        options: {
            loop: de
        }
    }, ne) => {
        const he = Pe.velocity(),
            be = Pe.settled();
        be && !mr.pointerDown() && (J.stop(), te.emit("settle")), be || te.emit("scroll"), ze.set(qe.get() - he + he * ne), de && (kt.loop(Pe.direction()), pr.loop()), Oe.to(ze.get())
    }, z = Zm(r, o, () => H(we), Pe => j(we, Pe)), Q = .68, X = q[ie.get()], se = Fn(X), me = Fn(X), ae = Fn(X), Y = ov(se, me, ae, m, Q), Ce = fv(d, q, K, oe, ae), xe = pv(z, ie, le, Y, Ce, ae, i), ke = lv(oe), _e = vn(), Be = gv(t, n, i, h), {
        slideRegistry: Ke
    } = dv(O, y, q, ee, F, V), vt = mv(e, n, Ke, xe, Y, _e, i), we = {
        ownerDocument: r,
        ownerWindow: o,
        eventHandler: i,
        containerRect: P,
        slideRects: D,
        animation: z,
        axis: R,
        dragHandler: Jm(R, e, r, o, ae, ev(R, o), se, z, xe, Y, Ce, ie, i, I, p, v, g, Q, C),
        eventStore: _e,
        percentOfView: I,
        index: ie,
        indexPrevious: le,
        limit: oe,
        location: se,
        offsetLocation: me,
        options: a,
        resizeHandler: rv(t, i, o, n, R, $, _),
        scrollBody: Y,
        scrollBounds: av(oe, me, ae, Y, I),
        scrollLooper: cv(K, oe, me, [se, me, ae]),
        scrollProgress: ke,
        scrollSnapList: q.map(ke.get),
        scrollSnaps: q,
        scrollTarget: Ce,
        scrollTo: xe,
        slideLooper: vv(R, A, K, M, E, W, q, me, n),
        slideFocus: vt,
        slidesHandler: hv(t, i, w),
        slidesInView: Be,
        slideIndexes: V,
        slideRegistry: Ke,
        slidesToScroll: F,
        target: ae,
        translate: Qs(R, t)
    };
    return we
}

function wv() {
    let e = {},
        t;

    function n(l) {
        t = l
    }

    function r(l) {
        return e[l] || []
    }

    function o(l) {
        return r(l).forEach(f => f(t, l)), c
    }

    function a(l, f) {
        return e[l] = r(l).concat([f]), c
    }

    function i(l, f) {
        return e[l] = r(l).filter(d => d !== f), c
    }

    function s() {
        e = {}
    }
    const c = {
        init: n,
        emit: o,
        off: i,
        on: a,
        clear: s
    };
    return c
}
const $v = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0
};

function Cv(e) {
    function t(a, i) {
        return Xs(a, i || {})
    }

    function n(a) {
        const i = a.breakpoints || {},
            s = mn(i).filter(c => e.matchMedia(c).matches).map(c => i[c]).reduce((c, l) => t(c, l), {});
        return t(a, s)
    }

    function r(a) {
        return a.map(i => mn(i.breakpoints || {})).reduce((i, s) => i.concat(s), []).map(e.matchMedia)
    }
    return {
        mergeOptions: t,
        optionsAtMedia: n,
        optionsMediaQueries: r
    }
}

function Ev(e) {
    let t = [];

    function n(a, i) {
        return t = i.filter(({
            options: s
        }) => e.optionsAtMedia(s).active !== !1), t.forEach(s => s.init(a, e)), i.reduce((s, c) => Object.assign(s, {
            [c.name]: c
        }), {})
    }

    function r() {
        t = t.filter(a => a.destroy())
    }
    return {
        init: n,
        destroy: r
    }
}

function Zn(e, t, n) {
    const r = e.ownerDocument,
        o = r.defaultView,
        a = Cv(o),
        i = Ev(a),
        s = vn(),
        c = wv(),
        {
            mergeOptions: l,
            optionsAtMedia: f,
            optionsMediaQueries: d
        } = a,
        {
            on: m,
            off: p,
            emit: v
        } = c,
        h = A;
    let b = !1,
        g, y = l($v, Zn.globalOptions),
        $ = l(y),
        w = [],
        C, S, _;

    function P() {
        const {
            container: H,
            slides: j
        } = $;
        S = (oo(H) ? e.querySelector(H) : H) || e.children[0];
        const Q = oo(j) ? S.querySelectorAll(j) : j;
        _ = [].slice.call(Q || S.children)
    }

    function D(H) {
        const j = xv(e, S, _, r, o, H, c);
        if (H.loop && !j.slideLooper.canLoop()) {
            const z = Object.assign({}, H, {
                loop: !1
            });
            return D(z)
        }
        return j
    }

    function R(H, j) {
        b || (y = l(y, H), $ = f(y), w = j || w, P(), g = D($), d([y, ...w.map(({
            options: z
        }) => z)]).forEach(z => s.add(z, "change", A)), $.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(), g.eventHandler.init(V), g.resizeHandler.init(V), g.slidesHandler.init(V), g.options.loop && g.slideLooper.loop(), S.offsetParent && _.length && g.dragHandler.init(V), C = i.init(V, w)))
    }

    function A(H, j) {
        const z = W();
        I(), R(l({
            startIndex: z
        }, H), j), c.emit("reInit")
    }

    function I() {
        g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), i.destroy(), s.clear()
    }

    function L() {
        b || (b = !0, s.clear(), I(), c.emit("destroy"), c.clear())
    }

    function O(H, j, z) {
        !$.active || b || (g.scrollBody.useBaseFriction().useDuration(j === !0 ? 0 : $.duration), g.scrollTo.index(H, z || 0))
    }

    function T(H) {
        const j = g.index.add(1).get();
        O(j, H, -1)
    }

    function M(H) {
        const j = g.index.add(-1).get();
        O(j, H, 1)
    }

    function E() {
        return g.index.add(1).get() !== W()
    }

    function N() {
        return g.index.add(-1).get() !== W()
    }

    function U() {
        return g.scrollSnapList
    }

    function F() {
        return g.scrollProgress.get(g.location.get())
    }

    function W() {
        return g.index.get()
    }

    function B() {
        return g.indexPrevious.get()
    }

    function K() {
        return g.slidesInView.get()
    }

    function re() {
        return g.slidesInView.get(!1)
    }

    function ee() {
        return C
    }

    function q() {
        return g
    }

    function oe() {
        return e
    }

    function ie() {
        return S
    }

    function le() {
        return _
    }
    const V = {
        canScrollNext: E,
        canScrollPrev: N,
        containerNode: ie,
        internalEngine: q,
        destroy: L,
        off: p,
        on: m,
        emit: v,
        plugins: ee,
        previousScrollSnap: B,
        reInit: h,
        rootNode: oe,
        scrollNext: T,
        scrollPrev: M,
        scrollProgress: F,
        scrollSnapList: U,
        scrollTo: O,
        selectedScrollSnap: W,
        slideNodes: le,
        slidesInView: K,
        slidesNotInView: re
    };
    return R(t, n), setTimeout(() => c.emit("init"), 0), V
}
Zn.globalOptions = void 0;

function Qn(e = {}, t = []) {
    const n = u.useRef(e),
        r = u.useRef(t),
        [o, a] = u.useState(),
        [i, s] = u.useState(),
        c = u.useCallback(() => {
            o && o.reInit(n.current, r.current)
        }, [o]);
    return u.useEffect(() => {
        if (Ym() && i) {
            Zn.globalOptions = Qn.globalOptions;
            const l = Zn(i, n.current, r.current);
            return a(l), () => l.destroy()
        } else a(void 0)
    }, [i, a]), u.useEffect(() => {
        No(n.current, e) || (n.current = e, c())
    }, [e, c]), u.useEffect(() => {
        Km(r.current, t) || (r.current = t, c())
    }, [t, c]), [s, o]
}
Qn.globalOptions = void 0;
const Sv = {
    active: !0,
    breakpoints: {},
    delay: 4e3,
    jump: !1,
    playOnInit: !0,
    stopOnFocusIn: !0,
    stopOnInteraction: !0,
    stopOnMouseEnter: !1,
    stopOnLastSnap: !1,
    rootNode: null
};

function Lo(e = {}) {
    let t, n, r, o = !1,
        a = !0,
        i = !1,
        s = 0;

    function c(w, C) {
        n = w;
        const {
            mergeOptions: S,
            optionsAtMedia: _
        } = C, P = S(Sv, Lo.globalOptions), D = S(P, e);
        if (t = _(D), n.scrollSnapList().length <= 1) return;
        i = t.jump, r = !1;
        const {
            eventStore: R,
            ownerDocument: A
        } = n.internalEngine(), I = n.rootNode(), L = t.rootNode && t.rootNode(I) || I, O = n.containerNode();
        n.on("pointerDown", d), t.stopOnInteraction || n.on("pointerUp", f), t.stopOnMouseEnter && (R.add(L, "mouseenter", () => {
            a = !1, d()
        }), t.stopOnInteraction || R.add(L, "mouseleave", () => {
            a = !0, f()
        })), t.stopOnFocusIn && (R.add(O, "focusin", d), t.stopOnInteraction || R.add(O, "focusout", f)), R.add(A, "visibilitychange", m), t.playOnInit && !p() && f()
    }

    function l() {
        n.off("pointerDown", d).off("pointerUp", f), d(), r = !0, o = !1
    }

    function f() {
        if (r || !a) return;
        o || n.emit("autoplay:play");
        const {
            ownerWindow: w
        } = n.internalEngine();
        w.clearInterval(s), s = w.setInterval(y, t.delay), o = !0
    }

    function d() {
        if (r) return;
        o && n.emit("autoplay:stop");
        const {
            ownerWindow: w
        } = n.internalEngine();
        w.clearInterval(s), s = 0, o = !1
    }

    function m() {
        if (p()) return a = o, d();
        a && f()
    }

    function p() {
        const {
            ownerDocument: w
        } = n.internalEngine();
        return w.visibilityState === "hidden"
    }

    function v(w) {
        typeof w < "u" && (i = w), a = !0, f()
    }

    function h() {
        o && d()
    }

    function b() {
        o && v()
    }

    function g() {
        return o
    }

    function y() {
        const {
            index: w
        } = n.internalEngine(), C = w.clone().add(1).get(), S = n.scrollSnapList().length - 1;
        t.stopOnLastSnap && C === S && d(), n.canScrollNext() ? n.scrollNext(i) : n.scrollTo(0, i)
    }
    return {
        name: "autoplay",
        options: e,
        init: c,
        destroy: l,
        play: v,
        stop: h,
        reset: b,
        isPlaying: g
    }
}
Lo.globalOptions = void 0;
var zb = ({
        locale: e,
        children: t,
        rootClassName: n,
        containerClassName: r,
        className: o,
        thumbClassName: a,
        options: i,
        autoplay: s = !1,
        autoplayOptions: c,
        arrows: l,
        arrowsClassName: f,
        dots: d,
        renderDot: m,
        renderHeader: p,
        renderFooter: v,
        thumbs: h,
        onInit: b,
        onIndexChanged: g,
        as: y
    }) => {
        var $;
        const w = y || "div",
            C = e != null && e.startsWith("ar") ? "rtl" : "ltr",
            [S, _] = u.useState(0),
            [P, D] = u.useState(!0),
            [R, A] = u.useState(!0),
            [I, L] = Qn($e({
                align: "start",
                direction: C
            }, i), [Lo($e({
                active: s,
                playOnInit: !0,
                stopOnInteraction: !1,
                stopOnMouseEnter: !0
            }, c))]),
            [O] = Qn({
                containScroll: "keepSnaps",
                dragFree: !0,
                direction: C
            }),
            T = u.useCallback(B => {
                B && (D(!B.canScrollPrev()), A(!B.canScrollNext()), _(B.selectedScrollSnap()), g && g(B.selectedScrollSnap()))
            }, []);
        u.useEffect(() => {
            L && (T(L), L.on("reInit", T), L.on("select", T))
        }, [L, T]), u.useEffect(() => {
            L && b && b(L)
        }, [L]);
        const M = () => {
                L && L.scrollPrev()
            },
            E = () => {
                L && L.scrollNext()
            },
            N = B => {
                L && L.scrollTo(B)
            },
            U = {
                selectedIndex: S,
                scrollPrev: M,
                scrollNext: E,
                scrollTo: N
            },
            F = typeof t == "function" ? t(U) : t,
            W = Array.from({
                length: (($ = L == null ? void 0 : L.slideNodes()) == null ? void 0 : $.length) || 0
            }, (B, K) => K);
        return x.jsxs(x.Fragment, {
            children: [p && p(U), x.jsxs("div", {
                className: fe("embla", n),
                children: [x.jsx("div", {
                    className: fe("embla__viewport", o),
                    ref: I,
                    children: x.jsx(w, {
                        className: fe("embla__container", r),
                        children: k.Children.map(F, B => k.cloneElement(B, {
                            className: fe("embla__slide", B.props.className)
                        }))
                    })
                }), h && x.jsx("div", {
                    className: a,
                    children: x.jsx("div", {
                        className: "overflow-hidden",
                        ref: O,
                        children: h({
                            selectedIndex: S,
                            scrollTo: N
                        })
                    })
                }), l && x.jsxs("div", {
                    className: fe("absolute left-1/2 top-1/2 w-full max-w-screen-2xl -translate-x-1/2 ltr:[&>button:first-of-type]:left-0 rtl:[&>button:first-of-type]:right-0 ltr:[&>button:last-of-type]:right-0 rtl:[&>button:last-of-type]:left-0", f),
                    children: [x.jsx("button", {
                        className: "embla__button embla__button--prev border-body bg-body-light ring-primary ring-offset-body hover:bg-body-lighter rounded-full border-2 focus:outline-none focus:ring-2",
                        type: "button",
                        onClick: M,
                        disabled: P,
                        "aria-label": "Previous",
                        children: x.jsx("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            className: "embla__button__svg fill-text rtl:rotate-180",
                            children: x.jsx("path", {
                                d: "M20.9426 8.94263C21.4633 8.42194 21.4633 7.57772 20.9426 7.05703C20.4219 6.53633 19.5777 6.53633 19.057 7.05703L11.057 15.057C10.5523 15.5618 10.5346 16.3745 11.017 16.9007L18.3503 24.9007C18.8478 25.4435 19.6913 25.4802 20.2341 24.9826C20.7769 24.485 20.8136 23.6416 20.316 23.0988L13.8453 16.0399L20.9426 8.94263Z"
                            })
                        })
                    }), x.jsx("button", {
                        className: "embla__button embla__button--next border-body bg-body-light ring-primary ring-offset-body hover:bg-body-lighter rounded-full border-2 focus:outline-none focus:ring-2",
                        type: "button",
                        onClick: E,
                        disabled: R,
                        "aria-label": "Next",
                        children: x.jsx("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            fill: "none",
                            className: "embla__button__svg fill-text rotate-180 rtl:rotate-0",
                            children: x.jsx("path", {
                                d: "M20.9426 8.94263C21.4633 8.42194 21.4633 7.57772 20.9426 7.05703C20.4219 6.53633 19.5777 6.53633 19.057 7.05703L11.057 15.057C10.5523 15.5618 10.5346 16.3745 11.017 16.9007L18.3503 24.9007C18.8478 25.4435 19.6913 25.4802 20.2341 24.9826C20.7769 24.485 20.8136 23.6416 20.316 23.0988L13.8453 16.0399L20.9426 8.94263Z"
                            })
                        })
                    })]
                }), d && W.length > 1 && x.jsx("div", {
                    className: "embla__dots bg-text/10 absolute mx-auto w-fit rounded-full p-1.5",
                    children: W.map(B => x.jsx(u.Fragment, {
                        children: m ? m({
                            selectedIndex: S
                        }) : x.jsx("div", {
                            className: `embla__dot transition ${B===S?"after:bg-text":"after:bg-text/40"}`
                        })
                    }, B))
                })]
            }), v && v(U)]
        })
    },
    Pv = {
        primary: "focus:ring-primary text-primary group-hover:ring-primary",
        secondary: "focus:ring-secondary text-secondary group-hover:ring-secondary",
        tertiary: "focus:ring-tertiary text-tertiary group-hover:ring-tertiary",
        error: "focus:ring-error text-error group-hover:ring-error",
        success: "focus:ring-success text-success group-hover:ring-success",
        black: "focus:ring-black text-black group-hover:ring-black",
        white: "focus:ring-white text-white group-hover:ring-white",
        transparent: "focus:ring-transparent text-transparent group-hover:ring-transparent"
    },
    Rv = u.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                error: a,
                onChange: i,
                groupClassName: s,
                theme: c = "primary",
                hideErrorSpace: l = !0,
                rounded: f = !0
            } = r,
            d = Et(r, ["label", "error", "onChange", "groupClassName", "theme", "hideErrorSpace", "rounded"]);
        const m = typeof a == "string" && !!a || !l;
        return x.jsxs("div", {
            className: s,
            children: [x.jsxs("label", {
                className: fe("group flex cursor-pointer items-start gap-2 has-[input:disabled]:cursor-not-allowed", a && "text-error"),
                children: [x.jsx("input", ct($e({
                    type: "checkbox",
                    ref: n
                }, d), {
                    onChange: p => {
                        i == null || i(p.target.checked, (d == null ? void 0 : d.name) || "")
                    },
                    className: fe("bg-body !ring-offset-body mt-[3px] h-[18px] w-[18px] focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50", "focus:ring-offset-1 group-hover:ring-1 group-hover:ring-offset-1", Pv[c] || "", f ? "rounded-sm" : "", d.className || "")
                })), o]
            }), m && x.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${a?"visible":"text-transparent"}`,
                children: a
            })]
        })
    }),
    Ub = Rv;

function Dv(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}

function Js(e, t) {
    if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}

function _v(e) {
    Js(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || Hr(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN))
}
var Ov = {};

function Tv() {
    return Ov
}

function Gb(e, t) {
    var n, r, o, a, i, s, c, l;
    Js(1, arguments);
    var f = Tv(),
        d = Dv((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (l = c.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var m = _v(e),
        p = m.getUTCDay(),
        v = (p < d ? 7 : 0) + p - d;
    return m.setUTCDate(m.getUTCDate() - v), m.setUTCHours(0, 0, 0, 0), m
}
var Nv = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    ec = function(t, n, r) {
        var o, a = Nv[t];
        return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o
    };

function st(e) {
    return function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = t.width ? String(t.width) : e.defaultWidth,
            r = e.formats[n] || e.formats[e.defaultWidth];
        return r
    }
}
var Mv = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    kv = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    Iv = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    Av = {
        date: st({
            formats: Mv,
            defaultWidth: "full"
        }),
        time: st({
            formats: kv,
            defaultWidth: "full"
        }),
        dateTime: st({
            formats: Iv,
            defaultWidth: "full"
        })
    },
    Lv = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    tc = function(t, n, r, o) {
        return Lv[t]
    };

function Je(e) {
    return function(t, n) {
        var r = n != null && n.context ? String(n.context) : "standalone",
            o;
        if (r === "formatting" && e.formattingValues) {
            var a = e.defaultFormattingWidth || e.defaultWidth,
                i = n != null && n.width ? String(n.width) : a;
            o = e.formattingValues[i] || e.formattingValues[a]
        } else {
            var s = e.defaultWidth,
                c = n != null && n.width ? String(n.width) : e.defaultWidth;
            o = e.values[c] || e.values[s]
        }
        var l = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[l]
    }
}
var jv = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    Fv = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    Wv = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    Bv = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    Hv = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    Vv = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    zv = function(t, n) {
        var r = Number(t),
            o = r % 100;
        if (o > 20 || o < 10) switch (o % 10) {
            case 1:
                return r + "st";
            case 2:
                return r + "nd";
            case 3:
                return r + "rd"
        }
        return r + "th"
    },
    nc = {
        ordinalNumber: zv,
        era: Je({
            values: jv,
            defaultWidth: "wide"
        }),
        quarter: Je({
            values: Fv,
            defaultWidth: "wide",
            argumentCallback: function(t) {
                return t - 1
            }
        }),
        month: Je({
            values: Wv,
            defaultWidth: "wide"
        }),
        day: Je({
            values: Bv,
            defaultWidth: "wide"
        }),
        dayPeriod: Je({
            values: Hv,
            defaultWidth: "wide",
            formattingValues: Vv,
            defaultFormattingWidth: "wide"
        })
    };

function et(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = n.width,
            o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(o);
        if (!a) return null;
        var i = a[0],
            s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
            c = Array.isArray(s) ? Gv(s, function(d) {
                return d.test(i)
            }) : Uv(s, function(d) {
                return d.test(i)
            }),
            l;
        l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
        var f = t.slice(i.length);
        return {
            value: l,
            rest: f
        }
    }
}

function Uv(e, t) {
    for (var n in e)
        if (e.hasOwnProperty(n) && t(e[n])) return n
}

function Gv(e, t) {
    for (var n = 0; n < e.length; n++)
        if (t(e[n])) return n
}

function rc(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = t.match(e.matchPattern);
        if (!r) return null;
        var o = r[0],
            a = t.match(e.parsePattern);
        if (!a) return null;
        var i = e.valueCallback ? e.valueCallback(a[0]) : a[0];
        i = n.valueCallback ? n.valueCallback(i) : i;
        var s = t.slice(o.length);
        return {
            value: i,
            rest: s
        }
    }
}
var Yv = /^(\d+)(th|st|nd|rd)?/i,
    Kv = /\d+/i,
    qv = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    Xv = {
        any: [/^b/i, /^(a|c)/i]
    },
    Zv = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    Qv = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    Jv = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    eh = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    th = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    nh = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    rh = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    oh = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    oc = {
        ordinalNumber: rc({
            matchPattern: Yv,
            parsePattern: Kv,
            valueCallback: function(t) {
                return parseInt(t, 10)
            }
        }),
        era: et({
            matchPatterns: qv,
            defaultMatchWidth: "wide",
            parsePatterns: Xv,
            defaultParseWidth: "any"
        }),
        quarter: et({
            matchPatterns: Zv,
            defaultMatchWidth: "wide",
            parsePatterns: Qv,
            defaultParseWidth: "any",
            valueCallback: function(t) {
                return t + 1
            }
        }),
        month: et({
            matchPatterns: Jv,
            defaultMatchWidth: "wide",
            parsePatterns: eh,
            defaultParseWidth: "any"
        }),
        day: et({
            matchPatterns: th,
            defaultMatchWidth: "wide",
            parsePatterns: nh,
            defaultParseWidth: "any"
        }),
        dayPeriod: et({
            matchPatterns: rh,
            defaultMatchWidth: "any",
            parsePatterns: oh,
            defaultParseWidth: "any"
        })
    },
    ah = {
        code: "en-US",
        formatDistance: ec,
        formatLong: Av,
        formatRelative: tc,
        localize: nc,
        match: oc,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    },
    ih = {
        lessThanXSeconds: {
            one: "أقل من ثانية واحدة",
            two: "أقل من ثانتين",
            threeToTen: "أقل من {{count}} ثواني",
            other: "أقل من {{count}} ثانية"
        },
        xSeconds: {
            one: "ثانية واحدة",
            two: "ثانتين",
            threeToTen: "{{count}} ثواني",
            other: "{{count}} ثانية"
        },
        halfAMinute: "نصف دقيقة",
        lessThanXMinutes: {
            one: "أقل من دقيقة",
            two: "أقل من دقيقتين",
            threeToTen: "أقل من {{count}} دقائق",
            other: "أقل من {{count}} دقيقة"
        },
        xMinutes: {
            one: "دقيقة واحدة",
            two: "دقيقتين",
            threeToTen: "{{count}} دقائق",
            other: "{{count}} دقيقة"
        },
        aboutXHours: {
            one: "ساعة واحدة تقريباً",
            two: "ساعتين تقريباً",
            threeToTen: "{{count}} ساعات تقريباً",
            other: "{{count}} ساعة تقريباً"
        },
        xHours: {
            one: "ساعة واحدة",
            two: "ساعتين",
            threeToTen: "{{count}} ساعات",
            other: "{{count}} ساعة"
        },
        xDays: {
            one: "يوم واحد",
            two: "يومين",
            threeToTen: "{{count}} أيام",
            other: "{{count}} يوم"
        },
        aboutXWeeks: {
            one: "أسبوع واحد تقريباً",
            two: "أسبوعين تقريباً",
            threeToTen: "{{count}} أسابيع تقريباً",
            other: "{{count}} أسبوع تقريباً"
        },
        xWeeks: {
            one: "أسبوع واحد",
            two: "أسبوعين",
            threeToTen: "{{count}} أسابيع",
            other: "{{count}} أسبوع"
        },
        aboutXMonths: {
            one: "شهر واحد تقريباً",
            two: "شهرين تقريباً",
            threeToTen: "{{count}} أشهر تقريباً",
            other: "{{count}} شهر تقريباً"
        },
        xMonths: {
            one: "شهر واحد",
            two: "شهرين",
            threeToTen: "{{count}} أشهر",
            other: "{{count}} شهر"
        },
        aboutXYears: {
            one: "عام واحد تقريباً",
            two: "عامين تقريباً",
            threeToTen: "{{count}} أعوام تقريباً",
            other: "{{count}} عام تقريباً"
        },
        xYears: {
            one: "عام واحد",
            two: "عامين",
            threeToTen: "{{count}} أعوام",
            other: "{{count}} عام"
        },
        overXYears: {
            one: "أكثر من عام",
            two: "أكثر من عامين",
            threeToTen: "أكثر من {{count}} أعوام",
            other: "أكثر من {{count}} عام"
        },
        almostXYears: {
            one: "عام واحد تقريباً",
            two: "عامين تقريباً",
            threeToTen: "{{count}} أعوام تقريباً",
            other: "{{count}} عام تقريباً"
        }
    },
    sh = function(t, n, r) {
        var o, a = ih[t];
        return typeof a == "string" ? o = a : n === 1 ? o = a.one : n === 2 ? o = a.two : n <= 10 ? o = a.threeToTen.replace("{{count}}", String(n)) : o = a.other.replace("{{count}}", String(n)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "في خلال " + o : "منذ " + o : o
    },
    ch = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    lh = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    uh = {
        full: "{{date}} 'عند' {{time}}",
        long: "{{date}} 'عند' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    dh = {
        date: st({
            formats: ch,
            defaultWidth: "full"
        }),
        time: st({
            formats: lh,
            defaultWidth: "full"
        }),
        dateTime: st({
            formats: uh,
            defaultWidth: "full"
        })
    },
    fh = {
        lastWeek: "'أخر' eeee 'عند' p",
        yesterday: "'أمس عند' p",
        today: "'اليوم عند' p",
        tomorrow: "'غداً عند' p",
        nextWeek: "eeee 'عند' p",
        other: "P"
    },
    ph = function(t, n, r, o) {
        return fh[t]
    },
    mh = {
        narrow: ["ق", "ب"],
        abbreviated: ["ق.م.", "ب.م."],
        wide: ["قبل الميلاد", "بعد الميلاد"]
    },
    vh = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["ر1", "ر2", "ر3", "ر4"],
        wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
    },
    hh = {
        narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
        abbreviated: ["ينا", "فبر", "مارس", "أبريل", "مايو", "يونـ", "يولـ", "أغسـ", "سبتـ", "أكتـ", "نوفـ", "ديسـ"],
        wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
    },
    gh = {
        narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"],
        wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
    },
    bh = {
        narrow: {
            am: "ص",
            pm: "م",
            midnight: "ن",
            noon: "ظ",
            morning: "صباحاً",
            afternoon: "بعد الظهر",
            evening: "مساءاً",
            night: "ليلاً"
        },
        abbreviated: {
            am: "ص",
            pm: "م",
            midnight: "نصف الليل",
            noon: "ظهر",
            morning: "صباحاً",
            afternoon: "بعد الظهر",
            evening: "مساءاً",
            night: "ليلاً"
        },
        wide: {
            am: "ص",
            pm: "م",
            midnight: "نصف الليل",
            noon: "ظهر",
            morning: "صباحاً",
            afternoon: "بعد الظهر",
            evening: "مساءاً",
            night: "ليلاً"
        }
    },
    yh = {
        narrow: {
            am: "ص",
            pm: "م",
            midnight: "ن",
            noon: "ظ",
            morning: "في الصباح",
            afternoon: "بعد الظـهر",
            evening: "في المساء",
            night: "في الليل"
        },
        abbreviated: {
            am: "ص",
            pm: "م",
            midnight: "نصف الليل",
            noon: "ظهر",
            morning: "في الصباح",
            afternoon: "بعد الظهر",
            evening: "في المساء",
            night: "في الليل"
        },
        wide: {
            am: "ص",
            pm: "م",
            midnight: "نصف الليل",
            noon: "ظهر",
            morning: "صباحاً",
            afternoon: "بعد الظـهر",
            evening: "في المساء",
            night: "في الليل"
        }
    },
    xh = function(t) {
        return String(t)
    },
    wh = {
        ordinalNumber: xh,
        era: Je({
            values: mh,
            defaultWidth: "wide"
        }),
        quarter: Je({
            values: vh,
            defaultWidth: "wide",
            argumentCallback: function(t) {
                return t - 1
            }
        }),
        month: Je({
            values: hh,
            defaultWidth: "wide"
        }),
        day: Je({
            values: gh,
            defaultWidth: "wide"
        }),
        dayPeriod: Je({
            values: bh,
            defaultWidth: "wide",
            formattingValues: yh,
            defaultFormattingWidth: "wide"
        })
    },
    $h = /^(\d+)(th|st|nd|rd)?/i,
    Ch = /\d+/i,
    Eh = {
        narrow: /^(ق|ب)/i,
        abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
        wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
    },
    Sh = {
        any: [/^قبل/i, /^بعد/i]
    },
    Ph = {
        narrow: /^[1234]/i,
        abbreviated: /^ر[1234]/i,
        wide: /^الربع [1234]/i
    },
    Rh = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    Dh = {
        narrow: /^[يفمأمسند]/i,
        abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,
        wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i
    },
    _h = {
        narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
        any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i]
    },
    Oh = {
        narrow: /^[حنثرخجس]/i,
        short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
        abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
        wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
    },
    Th = {
        narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
        wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
        any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
    },
    Nh = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    Mh = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    kh = {
        ordinalNumber: rc({
            matchPattern: $h,
            parsePattern: Ch,
            valueCallback: function(t) {
                return parseInt(t, 10)
            }
        }),
        era: et({
            matchPatterns: Eh,
            defaultMatchWidth: "wide",
            parsePatterns: Sh,
            defaultParseWidth: "any"
        }),
        quarter: et({
            matchPatterns: Ph,
            defaultMatchWidth: "wide",
            parsePatterns: Rh,
            defaultParseWidth: "any",
            valueCallback: function(t) {
                return t + 1
            }
        }),
        month: et({
            matchPatterns: Dh,
            defaultMatchWidth: "wide",
            parsePatterns: _h,
            defaultParseWidth: "any"
        }),
        day: et({
            matchPatterns: Oh,
            defaultMatchWidth: "wide",
            parsePatterns: Th,
            defaultParseWidth: "any"
        }),
        dayPeriod: et({
            matchPatterns: Nh,
            defaultMatchWidth: "any",
            parsePatterns: Mh,
            defaultParseWidth: "any"
        })
    },
    Ih = {
        code: "ar-SA",
        formatDistance: sh,
        formatLong: dh,
        formatRelative: ph,
        localize: wh,
        match: kh,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    },
    Ah = {
        full: "EEEE, d MMMM yyyy",
        long: "d MMMM yyyy",
        medium: "d MMM yyyy",
        short: "dd/MM/yyyy"
    },
    Lh = {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
    },
    jh = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    Fh = {
        date: st({
            formats: Ah,
            defaultWidth: "full"
        }),
        time: st({
            formats: Lh,
            defaultWidth: "full"
        }),
        dateTime: st({
            formats: jh,
            defaultWidth: "full"
        })
    },
    Wh = {
        code: "en-GB",
        formatDistance: ec,
        formatLong: Fh,
        formatRelative: tc,
        localize: nc,
        match: oc,
        options: {
            weekStartsOn: 1,
            firstWeekContainsDate: 4
        }
    },
    Z = function() {
        return Z = Object.assign || function(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
                n = arguments[r];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
            }
            return t
        }, Z.apply(this, arguments)
    };

function Bh(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function ac(e, t, n) {
    for (var r = 0, o = t.length, a; r < o; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}

function yn(e) {
    return e.mode === "multiple"
}

function xn(e) {
    return e.mode === "range"
}

function fr(e) {
    return e.mode === "single"
}
var Hh = {
    root: "rdp",
    multiple_months: "rdp-multiple_months",
    with_weeknumber: "rdp-with_weeknumber",
    vhidden: "rdp-vhidden",
    button_reset: "rdp-button_reset",
    button: "rdp-button",
    caption: "rdp-caption",
    caption_start: "rdp-caption_start",
    caption_end: "rdp-caption_end",
    caption_between: "rdp-caption_between",
    caption_label: "rdp-caption_label",
    caption_dropdowns: "rdp-caption_dropdowns",
    dropdown: "rdp-dropdown",
    dropdown_month: "rdp-dropdown_month",
    dropdown_year: "rdp-dropdown_year",
    dropdown_icon: "rdp-dropdown_icon",
    months: "rdp-months",
    month: "rdp-month",
    table: "rdp-table",
    tbody: "rdp-tbody",
    tfoot: "rdp-tfoot",
    head: "rdp-head",
    head_row: "rdp-head_row",
    head_cell: "rdp-head_cell",
    nav: "rdp-nav",
    nav_button: "rdp-nav_button",
    nav_button_previous: "rdp-nav_button_previous",
    nav_button_next: "rdp-nav_button_next",
    nav_icon: "rdp-nav_icon",
    row: "rdp-row",
    weeknumber: "rdp-weeknumber",
    cell: "rdp-cell",
    day: "rdp-day",
    day_today: "rdp-day_today",
    day_outside: "rdp-day_outside",
    day_selected: "rdp-day_selected",
    day_disabled: "rdp-day_disabled",
    day_hidden: "rdp-day_hidden",
    day_range_start: "rdp-day_range_start",
    day_range_end: "rdp-day_range_end",
    day_range_middle: "rdp-day_range_middle"
};

function Vh(e, t) {
    return Mt(e, "LLLL y", t)
}

function zh(e, t) {
    return Mt(e, "d", t)
}

function Uh(e, t) {
    return Mt(e, "LLLL", t)
}

function Gh(e) {
    return "".concat(e)
}

function Yh(e, t) {
    return Mt(e, "cccccc", t)
}

function Kh(e, t) {
    return Mt(e, "yyyy", t)
}
var qh = Object.freeze({
        __proto__: null,
        formatCaption: Vh,
        formatDay: zh,
        formatMonthCaption: Uh,
        formatWeekNumber: Gh,
        formatWeekdayName: Yh,
        formatYearCaption: Kh
    }),
    Xh = function(e, t, n) {
        return Mt(e, "do MMMM (EEEE)", n)
    },
    Zh = function() {
        return "Month: "
    },
    Qh = function() {
        return "Go to next month"
    },
    Jh = function() {
        return "Go to previous month"
    },
    eg = function(e, t) {
        return Mt(e, "cccc", t)
    },
    tg = function(e) {
        return "Week n. ".concat(e)
    },
    ng = function() {
        return "Year: "
    },
    rg = Object.freeze({
        __proto__: null,
        labelDay: Xh,
        labelMonthDropdown: Zh,
        labelNext: Qh,
        labelPrevious: Jh,
        labelWeekNumber: tg,
        labelWeekday: eg,
        labelYearDropdown: ng
    });

function og() {
    var e = "buttons",
        t = Hh,
        n = ah,
        r = {},
        o = {},
        a = 1,
        i = {},
        s = new Date;
    return {
        captionLayout: e,
        classNames: t,
        formatters: qh,
        labels: rg,
        locale: n,
        modifiersClassNames: r,
        modifiers: o,
        numberOfMonths: a,
        styles: i,
        today: s,
        mode: "default"
    }
}

function ag(e) {
    var t = e.fromYear,
        n = e.toYear,
        r = e.fromMonth,
        o = e.toMonth,
        a = e.fromDate,
        i = e.toDate;
    return r ? a = Fe(r) : t && (a = new Date(t, 0, 1)), o ? i = io(o) : n && (i = new Date(n, 11, 31)), {
        fromDate: a ? Go(a) : void 0,
        toDate: i ? Go(i) : void 0
    }
}
var ic = u.createContext(void 0);

function ig(e) {
    var t, n = e.initialProps,
        r = og(),
        o = ag(n),
        a = o.fromDate,
        i = o.toDate,
        s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
    s !== "buttons" && (!a || !i) && (s = "buttons");
    var c;
    (fr(n) || yn(n) || xn(n)) && (c = n.onSelect);
    var l = Z(Z(Z({}, r), n), {
        captionLayout: s,
        classNames: Z(Z({}, r.classNames), n.classNames),
        components: Z({}, n.components),
        formatters: Z(Z({}, r.formatters), n.formatters),
        fromDate: a,
        labels: Z(Z({}, r.labels), n.labels),
        mode: n.mode || r.mode,
        modifiers: Z(Z({}, r.modifiers), n.modifiers),
        modifiersClassNames: Z(Z({}, r.modifiersClassNames), n.modifiersClassNames),
        onSelect: c,
        styles: Z(Z({}, r.styles), n.styles),
        toDate: i
    });
    return x.jsx(ic.Provider, {
        value: l,
        children: e.children
    })
}

function pe() {
    var e = u.useContext(ic);
    if (!e) throw new Error("useDayPicker must be used within a DayPickerProvider.");
    return e
}

function sc(e) {
    var t = pe(),
        n = t.locale,
        r = t.classNames,
        o = t.styles,
        a = t.formatters.formatCaption;
    return x.jsx("div", {
        className: r.caption_label,
        style: o.caption_label,
        "aria-live": "polite",
        role: "presentation",
        id: e.id,
        children: a(e.displayMonth, {
            locale: n
        })
    })
}

function sg(e) {
    return x.jsx("svg", Z({
        width: "8px",
        height: "8px",
        viewBox: "0 0 120 120",
        "data-testid": "iconDropdown"
    }, e, {
        children: x.jsx("path", {
            d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        })
    }))
}

function cc(e) {
    var t, n, r = e.onChange,
        o = e.value,
        a = e.children,
        i = e.caption,
        s = e.className,
        c = e.style,
        l = pe(),
        f = (n = (t = l.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : sg;
    return x.jsxs("div", {
        className: s,
        style: c,
        children: [x.jsx("span", {
            className: l.classNames.vhidden,
            children: e["aria-label"]
        }), x.jsx("select", {
            name: e.name,
            "aria-label": e["aria-label"],
            className: l.classNames.dropdown,
            style: l.styles.dropdown,
            value: o,
            onChange: r,
            children: a
        }), x.jsxs("div", {
            className: l.classNames.caption_label,
            style: l.styles.caption_label,
            "aria-hidden": "true",
            children: [i, x.jsx(f, {
                className: l.classNames.dropdown_icon,
                style: l.styles.dropdown_icon
            })]
        })]
    })
}

function cg(e) {
    var t, n = pe(),
        r = n.fromDate,
        o = n.toDate,
        a = n.styles,
        i = n.locale,
        s = n.formatters.formatMonthCaption,
        c = n.classNames,
        l = n.components,
        f = n.labels.labelMonthDropdown;
    if (!r) return x.jsx(x.Fragment, {});
    if (!o) return x.jsx(x.Fragment, {});
    var d = [];
    if (yc(r, o))
        for (var m = Fe(r), p = r.getMonth(); p <= o.getMonth(); p++) d.push(gr(m, p));
    else
        for (var m = Fe(new Date), p = 0; p <= 11; p++) d.push(gr(m, p));
    var v = function(b) {
            var g = Number(b.target.value),
                y = gr(Fe(e.displayMonth), g);
            e.onChange(y)
        },
        h = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : cc;
    return x.jsx(h, {
        name: "months",
        "aria-label": f(),
        className: c.dropdown_month,
        style: a.dropdown_month,
        onChange: v,
        value: e.displayMonth.getMonth(),
        caption: s(e.displayMonth, {
            locale: i
        }),
        children: d.map(function(b) {
            return x.jsx("option", {
                value: b.getMonth(),
                children: s(b, {
                    locale: i
                })
            }, b.getMonth())
        })
    })
}

function lg(e) {
    var t, n = e.displayMonth,
        r = pe(),
        o = r.fromDate,
        a = r.toDate,
        i = r.locale,
        s = r.styles,
        c = r.classNames,
        l = r.components,
        f = r.formatters.formatYearCaption,
        d = r.labels.labelYearDropdown,
        m = [];
    if (!o) return x.jsx(x.Fragment, {});
    if (!a) return x.jsx(x.Fragment, {});
    for (var p = o.getFullYear(), v = a.getFullYear(), h = p; h <= v; h++) m.push(Yo(xc(new Date), h));
    var b = function(y) {
            var $ = Yo(Fe(n), Number(y.target.value));
            e.onChange($)
        },
        g = (t = l == null ? void 0 : l.Dropdown) !== null && t !== void 0 ? t : cc;
    return x.jsx(g, {
        name: "years",
        "aria-label": d(),
        className: c.dropdown_year,
        style: s.dropdown_year,
        onChange: b,
        value: n.getFullYear(),
        caption: f(n, {
            locale: i
        }),
        children: m.map(function(y) {
            return x.jsx("option", {
                value: y.getFullYear(),
                children: f(y, {
                    locale: i
                })
            }, y.getFullYear())
        })
    })
}

function ug(e, t) {
    var n = u.useState(e),
        r = n[0],
        o = n[1],
        a = t === void 0 ? r : t;
    return [a, o]
}

function dg(e) {
    var t = e.month,
        n = e.defaultMonth,
        r = e.today,
        o = t || n || r || new Date,
        a = e.toDate,
        i = e.fromDate,
        s = e.numberOfMonths,
        c = s === void 0 ? 1 : s;
    if (a && on(a, o) < 0) {
        var l = -1 * (c - 1);
        o = nt(a, l)
    }
    return i && on(o, i) < 0 && (o = i), Fe(o)
}

function fg() {
    var e = pe(),
        t = dg(e),
        n = ug(t, e.month),
        r = n[0],
        o = n[1],
        a = function(i) {
            var s;
            if (!e.disableNavigation) {
                var c = Fe(i);
                o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c)
            }
        };
    return [r, a]
}

function pg(e, t) {
    for (var n = t.reverseMonths, r = t.numberOfMonths, o = Fe(e), a = Fe(nt(o, r)), i = on(a, o), s = [], c = 0; c < i; c++) {
        var l = nt(o, c);
        s.push(l)
    }
    return n && (s = s.reverse()), s
}

function mg(e, t) {
    if (!t.disableNavigation) {
        var n = t.toDate,
            r = t.pagedNavigation,
            o = t.numberOfMonths,
            a = o === void 0 ? 1 : o,
            i = r ? a : 1,
            s = Fe(e);
        if (!n) return nt(s, i);
        var c = on(n, e);
        if (!(c < a)) return nt(s, i)
    }
}

function vg(e, t) {
    if (!t.disableNavigation) {
        var n = t.fromDate,
            r = t.pagedNavigation,
            o = t.numberOfMonths,
            a = o === void 0 ? 1 : o,
            i = r ? a : 1,
            s = Fe(e);
        if (!n) return nt(s, -i);
        var c = on(s, n);
        if (!(c <= 0)) return nt(s, -i)
    }
}
var lc = u.createContext(void 0);

function hg(e) {
    var t = pe(),
        n = fg(),
        r = n[0],
        o = n[1],
        a = pg(r, t),
        i = mg(r, t),
        s = vg(r, t),
        c = function(d) {
            return a.some(function(m) {
                return so(d, m)
            })
        },
        l = function(d, m) {
            c(d) || (m && Ga(d, m) ? o(nt(d, 1 + t.numberOfMonths * -1)) : o(d))
        },
        f = {
            currentMonth: r,
            displayMonths: a,
            goToMonth: o,
            goToDate: l,
            previousMonth: s,
            nextMonth: i,
            isDateDisplayed: c
        };
    return x.jsx(lc.Provider, {
        value: f,
        children: e.children
    })
}

function wn() {
    var e = u.useContext(lc);
    if (!e) throw new Error("useNavigation must be used within a NavigationProvider");
    return e
}

function Ba(e) {
    var t, n = pe(),
        r = n.classNames,
        o = n.styles,
        a = n.components,
        i = wn().goToMonth,
        s = function(f) {
            i(nt(f, e.displayIndex ? -e.displayIndex : 0))
        },
        c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : sc,
        l = x.jsx(c, {
            id: e.id,
            displayMonth: e.displayMonth
        });
    return x.jsxs("div", {
        className: r.caption_dropdowns,
        style: o.caption_dropdowns,
        children: [x.jsx("div", {
            className: r.vhidden,
            children: l
        }), x.jsx(cg, {
            onChange: s,
            displayMonth: e.displayMonth
        }), x.jsx(lg, {
            onChange: s,
            displayMonth: e.displayMonth
        })]
    })
}

function gg(e) {
    return x.jsx("svg", Z({
        width: "16px",
        height: "16px",
        viewBox: "0 0 120 120"
    }, e, {
        children: x.jsx("path", {
            d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        })
    }))
}

function bg(e) {
    return x.jsx("svg", Z({
        width: "16px",
        height: "16px",
        viewBox: "0 0 120 120"
    }, e, {
        children: x.jsx("path", {
            d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
            fill: "currentColor"
        })
    }))
}
var Jn = u.forwardRef(function(e, t) {
    var n = pe(),
        r = n.classNames,
        o = n.styles,
        a = [r.button_reset, r.button];
    e.className && a.push(e.className);
    var i = a.join(" "),
        s = Z(Z({}, o.button_reset), o.button);
    return e.style && Object.assign(s, e.style), x.jsx("button", Z({}, e, {
        ref: t,
        type: "button",
        className: i,
        style: s
    }))
});

function yg(e) {
    var t, n, r = pe(),
        o = r.dir,
        a = r.locale,
        i = r.classNames,
        s = r.styles,
        c = r.labels,
        l = c.labelPrevious,
        f = c.labelNext,
        d = r.components;
    if (!e.nextMonth && !e.previousMonth) return x.jsx(x.Fragment, {});
    var m = l(e.previousMonth, {
            locale: a
        }),
        p = [i.nav_button, i.nav_button_previous].join(" "),
        v = f(e.nextMonth, {
            locale: a
        }),
        h = [i.nav_button, i.nav_button_next].join(" "),
        b = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : bg,
        g = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : gg;
    return x.jsxs("div", {
        className: i.nav,
        style: s.nav,
        children: [!e.hidePrevious && x.jsx(Jn, {
            name: "previous-month",
            "aria-label": m,
            className: p,
            style: s.nav_button_previous,
            disabled: !e.previousMonth,
            onClick: e.onPreviousClick,
            children: o === "rtl" ? x.jsx(b, {
                className: i.nav_icon,
                style: s.nav_icon
            }) : x.jsx(g, {
                className: i.nav_icon,
                style: s.nav_icon
            })
        }), !e.hideNext && x.jsx(Jn, {
            name: "next-month",
            "aria-label": v,
            className: h,
            style: s.nav_button_next,
            disabled: !e.nextMonth,
            onClick: e.onNextClick,
            children: o === "rtl" ? x.jsx(g, {
                className: i.nav_icon,
                style: s.nav_icon
            }) : x.jsx(b, {
                className: i.nav_icon,
                style: s.nav_icon
            })
        })]
    })
}

function Ha(e) {
    var t = pe().numberOfMonths,
        n = wn(),
        r = n.previousMonth,
        o = n.nextMonth,
        a = n.goToMonth,
        i = n.displayMonths,
        s = i.findIndex(function(v) {
            return so(e.displayMonth, v)
        }),
        c = s === 0,
        l = s === i.length - 1,
        f = t > 1 && (c || !l),
        d = t > 1 && (l || !c),
        m = function() {
            r && a(r)
        },
        p = function() {
            o && a(o)
        };
    return x.jsx(yg, {
        displayMonth: e.displayMonth,
        hideNext: f,
        hidePrevious: d,
        nextMonth: o,
        previousMonth: r,
        onPreviousClick: m,
        onNextClick: p
    })
}

function xg(e) {
    var t, n = pe(),
        r = n.classNames,
        o = n.disableNavigation,
        a = n.styles,
        i = n.captionLayout,
        s = n.components,
        c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : sc,
        l;
    return o ? l = x.jsx(c, {
        id: e.id,
        displayMonth: e.displayMonth
    }) : i === "dropdown" ? l = x.jsx(Ba, {
        displayMonth: e.displayMonth,
        id: e.id
    }) : i === "dropdown-buttons" ? l = x.jsxs(x.Fragment, {
        children: [x.jsx(Ba, {
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex,
            id: e.id
        }), x.jsx(Ha, {
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex,
            id: e.id
        })]
    }) : l = x.jsxs(x.Fragment, {
        children: [x.jsx(c, {
            id: e.id,
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex
        }), x.jsx(Ha, {
            displayMonth: e.displayMonth,
            id: e.id
        })]
    }), x.jsx("div", {
        className: r.caption,
        style: a.caption,
        children: l
    })
}

function wg(e) {
    var t = pe(),
        n = t.footer,
        r = t.styles,
        o = t.classNames.tfoot;
    return n ? x.jsx("tfoot", {
        className: o,
        style: r.tfoot,
        children: x.jsx("tr", {
            children: x.jsx("td", {
                colSpan: 8,
                children: n
            })
        })
    }) : x.jsx(x.Fragment, {})
}

function $g(e, t, n) {
    for (var r = n ? co(new Date) : lo(new Date, {
            locale: e,
            weekStartsOn: t
        }), o = [], a = 0; a < 7; a++) {
        var i = Le(r, a);
        o.push(i)
    }
    return o
}

function Cg() {
    var e = pe(),
        t = e.classNames,
        n = e.styles,
        r = e.showWeekNumber,
        o = e.locale,
        a = e.weekStartsOn,
        i = e.ISOWeek,
        s = e.formatters.formatWeekdayName,
        c = e.labels.labelWeekday,
        l = $g(o, a, i);
    return x.jsxs("tr", {
        style: n.head_row,
        className: t.head_row,
        children: [r && x.jsx("td", {
            style: n.head_cell,
            className: t.head_cell
        }), l.map(function(f, d) {
            return x.jsx("th", {
                scope: "col",
                className: t.head_cell,
                style: n.head_cell,
                "aria-label": c(f, {
                    locale: o
                }),
                children: s(f, {
                    locale: o
                })
            }, d)
        })]
    })
}

function Eg() {
    var e, t = pe(),
        n = t.classNames,
        r = t.styles,
        o = t.components,
        a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Cg;
    return x.jsx("thead", {
        style: r.head,
        className: n.head,
        children: x.jsx(a, {})
    })
}

function Sg(e) {
    var t = pe(),
        n = t.locale,
        r = t.formatters.formatDay;
    return x.jsx(x.Fragment, {
        children: r(e.date, {
            locale: n
        })
    })
}
var jo = u.createContext(void 0);

function Pg(e) {
    if (!yn(e.initialProps)) {
        var t = {
            selected: void 0,
            modifiers: {
                disabled: []
            }
        };
        return x.jsx(jo.Provider, {
            value: t,
            children: e.children
        })
    }
    return x.jsx(Rg, {
        initialProps: e.initialProps,
        children: e.children
    })
}

function Rg(e) {
    var t = e.initialProps,
        n = e.children,
        r = t.selected,
        o = t.min,
        a = t.max,
        i = function(l, f, d) {
            var m, p;
            (m = t.onDayClick) === null || m === void 0 || m.call(t, l, f, d);
            var v = !!(f.selected && o && (r == null ? void 0 : r.length) === o);
            if (!v) {
                var h = !!(!f.selected && a && (r == null ? void 0 : r.length) === a);
                if (!h) {
                    var b = r ? ac([], r) : [];
                    if (f.selected) {
                        var g = b.findIndex(function(y) {
                            return Ae(l, y)
                        });
                        b.splice(g, 1)
                    } else b.push(l);
                    (p = t.onSelect) === null || p === void 0 || p.call(t, b, l, f, d)
                }
            }
        },
        s = {
            disabled: []
        };
    r && s.disabled.push(function(l) {
        var f = a && r.length > a - 1,
            d = r.some(function(m) {
                return Ae(m, l)
            });
        return !!(f && !d)
    });
    var c = {
        selected: r,
        onDayClick: i,
        modifiers: s
    };
    return x.jsx(jo.Provider, {
        value: c,
        children: n
    })
}

function Fo() {
    var e = u.useContext(jo);
    if (!e) throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
    return e
}

function Dg(e, t) {
    var n = t || {},
        r = n.from,
        o = n.to;
    return r && o ? Ae(o, e) && Ae(r, e) ? void 0 : Ae(o, e) ? {
        from: o,
        to: void 0
    } : Ae(r, e) ? void 0 : Wr(r, e) ? {
        from: e,
        to: o
    } : {
        from: r,
        to: e
    } : o ? Wr(e, o) ? {
        from: o,
        to: e
    } : {
        from: e,
        to: o
    } : r ? Ga(e, r) ? {
        from: e,
        to: r
    } : {
        from: r,
        to: e
    } : {
        from: e,
        to: void 0
    }
}
var Wo = u.createContext(void 0);

function _g(e) {
    if (!xn(e.initialProps)) {
        var t = {
            selected: void 0,
            modifiers: {
                range_start: [],
                range_end: [],
                range_middle: [],
                disabled: []
            }
        };
        return x.jsx(Wo.Provider, {
            value: t,
            children: e.children
        })
    }
    return x.jsx(Og, {
        initialProps: e.initialProps,
        children: e.children
    })
}

function Og(e) {
    var t = e.initialProps,
        n = e.children,
        r = t.selected,
        o = r || {},
        a = o.from,
        i = o.to,
        s = t.min,
        c = t.max,
        l = function(p, v, h) {
            var b, g;
            (b = t.onDayClick) === null || b === void 0 || b.call(t, p, v, h);
            var y = Dg(p, r);
            (g = t.onSelect) === null || g === void 0 || g.call(t, y, p, v, h)
        },
        f = {
            range_start: [],
            range_end: [],
            range_middle: [],
            disabled: []
        };
    if (a ? (f.range_start = [a], i ? (f.range_end = [i], Ae(a, i) || (f.range_middle = [{
            after: a,
            before: i
        }])) : f.range_end = [a]) : i && (f.range_start = [i], f.range_end = [i]), s && (a && !i && f.disabled.push({
            after: hr(a, s - 1),
            before: Le(a, s - 1)
        }), a && i && f.disabled.push({
            after: a,
            before: Le(a, s - 1)
        }), !a && i && f.disabled.push({
            after: hr(i, s - 1),
            before: Le(i, s - 1)
        })), c) {
        if (a && !i && (f.disabled.push({
                before: Le(a, -c + 1)
            }), f.disabled.push({
                after: Le(a, c - 1)
            })), a && i) {
            var d = it(i, a) + 1,
                m = c - d;
            f.disabled.push({
                before: hr(a, m)
            }), f.disabled.push({
                after: Le(i, m)
            })
        }!a && i && (f.disabled.push({
            before: Le(i, -c + 1)
        }), f.disabled.push({
            after: Le(i, c - 1)
        }))
    }
    return x.jsx(Wo.Provider, {
        value: {
            selected: r,
            onDayClick: l,
            modifiers: f
        },
        children: n
    })
}

function Bo() {
    var e = u.useContext(Wo);
    if (!e) throw new Error("useSelectRange must be used within a SelectRangeProvider");
    return e
}

function Wn(e) {
    return Array.isArray(e) ? ac([], e) : e !== void 0 ? [e] : []
}

function Tg(e) {
    var t = {};
    return Object.entries(e).forEach(function(n) {
        var r = n[0],
            o = n[1];
        t[r] = Wn(o)
    }), t
}
var Ge;
(function(e) {
    e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle"
})(Ge || (Ge = {}));
var Ng = Ge.Selected,
    ot = Ge.Disabled,
    Mg = Ge.Hidden,
    kg = Ge.Today,
    Ar = Ge.RangeEnd,
    Lr = Ge.RangeMiddle,
    jr = Ge.RangeStart,
    Ig = Ge.Outside;

function Ag(e, t, n) {
    var r, o = (r = {}, r[Ng] = Wn(e.selected), r[ot] = Wn(e.disabled), r[Mg] = Wn(e.hidden), r[kg] = [e.today], r[Ar] = [], r[Lr] = [], r[jr] = [], r[Ig] = [], r);
    return e.fromDate && o[ot].push({
        before: e.fromDate
    }), e.toDate && o[ot].push({
        after: e.toDate
    }), yn(e) ? o[ot] = o[ot].concat(t.modifiers[ot]) : xn(e) && (o[ot] = o[ot].concat(n.modifiers[ot]), o[jr] = n.modifiers[jr], o[Lr] = n.modifiers[Lr], o[Ar] = n.modifiers[Ar]), o
}
var uc = u.createContext(void 0);

function Lg(e) {
    var t = pe(),
        n = Fo(),
        r = Bo(),
        o = Ag(t, n, r),
        a = Tg(t.modifiers),
        i = Z(Z({}, o), a);
    return x.jsx(uc.Provider, {
        value: i,
        children: e.children
    })
}

function dc() {
    var e = u.useContext(uc);
    if (!e) throw new Error("useModifiers must be used within a ModifiersProvider");
    return e
}

function jg(e) {
    return !!(e && typeof e == "object" && "before" in e && "after" in e)
}

function Fg(e) {
    return !!(e && typeof e == "object" && "from" in e)
}

function Wg(e) {
    return !!(e && typeof e == "object" && "after" in e)
}

function Bg(e) {
    return !!(e && typeof e == "object" && "before" in e)
}

function Hg(e) {
    return !!(e && typeof e == "object" && "dayOfWeek" in e)
}

function Vg(e, t) {
    var n, r = t.from,
        o = t.to;
    if (r && o) {
        var a = it(o, r) < 0;
        a && (n = [o, r], r = n[0], o = n[1]);
        var i = it(e, r) >= 0 && it(o, e) >= 0;
        return i
    }
    return o ? Ae(o, e) : r ? Ae(r, e) : !1
}

function zg(e) {
    return qa(e)
}

function Ug(e) {
    return Array.isArray(e) && e.every(qa)
}

function Gg(e, t) {
    return t.some(function(n) {
        if (typeof n == "boolean") return n;
        if (zg(n)) return Ae(e, n);
        if (Ug(n)) return n.includes(e);
        if (Fg(n)) return Vg(e, n);
        if (Hg(n)) return n.dayOfWeek.includes(e.getDay());
        if (jg(n)) {
            var r = it(n.before, e),
                o = it(n.after, e),
                a = r > 0,
                i = o < 0,
                s = Wr(n.before, n.after);
            return s ? i && a : a || i
        }
        return Wg(n) ? it(e, n.after) > 0 : Bg(n) ? it(n.before, e) > 0 : typeof n == "function" ? n(e) : !1
    })
}

function Ho(e, t, n) {
    var r = Object.keys(t).reduce(function(a, i) {
            var s = t[i];
            return Gg(e, s) && a.push(i), a
        }, []),
        o = {};
    return r.forEach(function(a) {
        return o[a] = !0
    }), n && !so(e, n) && (o.outside = !0), o
}

function Yg(e, t) {
    for (var n = Fe(e[0]), r = io(e[e.length - 1]), o, a, i = n; i <= r;) {
        var s = Ho(i, t),
            c = !s.disabled && !s.hidden;
        if (!c) {
            i = Le(i, 1);
            continue
        }
        if (s.selected) return i;
        s.today && !a && (a = i), o || (o = i), i = Le(i, 1)
    }
    return a || o
}
var Kg = 365;

function fc(e, t) {
    var n = t.moveBy,
        r = t.direction,
        o = t.context,
        a = t.modifiers,
        i = t.retry,
        s = i === void 0 ? {
            count: 0,
            lastFocused: e
        } : i,
        c = o.weekStartsOn,
        l = o.fromDate,
        f = o.toDate,
        d = o.locale,
        m = {
            day: Le,
            week: Br,
            month: nt,
            year: Sc,
            startOfWeek: function(b) {
                return o.ISOWeek ? co(b) : lo(b, {
                    locale: d,
                    weekStartsOn: c
                })
            },
            endOfWeek: function(b) {
                return o.ISOWeek ? Ya(b) : Ka(b, {
                    locale: d,
                    weekStartsOn: c
                })
            }
        },
        p = m[n](e, r === "after" ? 1 : -1);
    r === "before" && l ? p = wc([l, p]) : r === "after" && f && (p = $c([f, p]));
    var v = !0;
    if (a) {
        var h = Ho(p, a);
        v = !h.disabled && !h.hidden
    }
    return v ? p : s.count > Kg ? s.lastFocused : fc(p, {
        moveBy: n,
        direction: r,
        context: o,
        modifiers: a,
        retry: Z(Z({}, s), {
            count: s.count + 1
        })
    })
}
var pc = u.createContext(void 0);

function qg(e) {
    var t = wn(),
        n = dc(),
        r = u.useState(),
        o = r[0],
        a = r[1],
        i = u.useState(),
        s = i[0],
        c = i[1],
        l = Yg(t.displayMonths, n),
        f = o ? ? (s && t.isDateDisplayed(s)) ? s : l,
        d = function() {
            c(o), a(void 0)
        },
        m = function(b) {
            a(b)
        },
        p = pe(),
        v = function(b, g) {
            if (o) {
                var y = fc(o, {
                    moveBy: b,
                    direction: g,
                    context: p,
                    modifiers: n
                });
                Ae(o, y) || (t.goToDate(y, o), m(y))
            }
        },
        h = {
            focusedDay: o,
            focusTarget: f,
            blur: d,
            focus: m,
            focusDayAfter: function() {
                return v("day", "after")
            },
            focusDayBefore: function() {
                return v("day", "before")
            },
            focusWeekAfter: function() {
                return v("week", "after")
            },
            focusWeekBefore: function() {
                return v("week", "before")
            },
            focusMonthBefore: function() {
                return v("month", "before")
            },
            focusMonthAfter: function() {
                return v("month", "after")
            },
            focusYearBefore: function() {
                return v("year", "before")
            },
            focusYearAfter: function() {
                return v("year", "after")
            },
            focusStartOfWeek: function() {
                return v("startOfWeek", "before")
            },
            focusEndOfWeek: function() {
                return v("endOfWeek", "after")
            }
        };
    return x.jsx(pc.Provider, {
        value: h,
        children: e.children
    })
}

function Vo() {
    var e = u.useContext(pc);
    if (!e) throw new Error("useFocusContext must be used within a FocusProvider");
    return e
}

function Xg(e, t) {
    var n = dc(),
        r = Ho(e, n, t);
    return r
}
var zo = u.createContext(void 0);

function Zg(e) {
    if (!fr(e.initialProps)) {
        var t = {
            selected: void 0
        };
        return x.jsx(zo.Provider, {
            value: t,
            children: e.children
        })
    }
    return x.jsx(Qg, {
        initialProps: e.initialProps,
        children: e.children
    })
}

function Qg(e) {
    var t = e.initialProps,
        n = e.children,
        r = function(a, i, s) {
            var c, l, f;
            if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
                (l = t.onSelect) === null || l === void 0 || l.call(t, void 0, a, i, s);
                return
            }(f = t.onSelect) === null || f === void 0 || f.call(t, a, a, i, s)
        },
        o = {
            selected: t.selected,
            onDayClick: r
        };
    return x.jsx(zo.Provider, {
        value: o,
        children: n
    })
}

function mc() {
    var e = u.useContext(zo);
    if (!e) throw new Error("useSelectSingle must be used within a SelectSingleProvider");
    return e
}

function Jg(e, t) {
    var n = pe(),
        r = mc(),
        o = Fo(),
        a = Bo(),
        i = Vo(),
        s = i.focusDayAfter,
        c = i.focusDayBefore,
        l = i.focusWeekAfter,
        f = i.focusWeekBefore,
        d = i.blur,
        m = i.focus,
        p = i.focusMonthBefore,
        v = i.focusMonthAfter,
        h = i.focusYearBefore,
        b = i.focusYearAfter,
        g = i.focusStartOfWeek,
        y = i.focusEndOfWeek,
        $ = function(E) {
            var N, U, F, W;
            fr(n) ? (N = r.onDayClick) === null || N === void 0 || N.call(r, e, t, E) : yn(n) ? (U = o.onDayClick) === null || U === void 0 || U.call(o, e, t, E) : xn(n) ? (F = a.onDayClick) === null || F === void 0 || F.call(a, e, t, E) : (W = n.onDayClick) === null || W === void 0 || W.call(n, e, t, E)
        },
        w = function(E) {
            var N;
            m(e), (N = n.onDayFocus) === null || N === void 0 || N.call(n, e, t, E)
        },
        C = function(E) {
            var N;
            d(), (N = n.onDayBlur) === null || N === void 0 || N.call(n, e, t, E)
        },
        S = function(E) {
            var N;
            (N = n.onDayMouseEnter) === null || N === void 0 || N.call(n, e, t, E)
        },
        _ = function(E) {
            var N;
            (N = n.onDayMouseLeave) === null || N === void 0 || N.call(n, e, t, E)
        },
        P = function(E) {
            var N;
            (N = n.onDayPointerEnter) === null || N === void 0 || N.call(n, e, t, E)
        },
        D = function(E) {
            var N;
            (N = n.onDayPointerLeave) === null || N === void 0 || N.call(n, e, t, E)
        },
        R = function(E) {
            var N;
            (N = n.onDayTouchCancel) === null || N === void 0 || N.call(n, e, t, E)
        },
        A = function(E) {
            var N;
            (N = n.onDayTouchEnd) === null || N === void 0 || N.call(n, e, t, E)
        },
        I = function(E) {
            var N;
            (N = n.onDayTouchMove) === null || N === void 0 || N.call(n, e, t, E)
        },
        L = function(E) {
            var N;
            (N = n.onDayTouchStart) === null || N === void 0 || N.call(n, e, t, E)
        },
        O = function(E) {
            var N;
            (N = n.onDayKeyUp) === null || N === void 0 || N.call(n, e, t, E)
        },
        T = function(E) {
            var N;
            switch (E.key) {
                case "ArrowLeft":
                    E.preventDefault(), E.stopPropagation(), n.dir === "rtl" ? s() : c();
                    break;
                case "ArrowRight":
                    E.preventDefault(), E.stopPropagation(), n.dir === "rtl" ? c() : s();
                    break;
                case "ArrowDown":
                    E.preventDefault(), E.stopPropagation(), l();
                    break;
                case "ArrowUp":
                    E.preventDefault(), E.stopPropagation(), f();
                    break;
                case "PageUp":
                    E.preventDefault(), E.stopPropagation(), E.shiftKey ? h() : p();
                    break;
                case "PageDown":
                    E.preventDefault(), E.stopPropagation(), E.shiftKey ? b() : v();
                    break;
                case "Home":
                    E.preventDefault(), E.stopPropagation(), g();
                    break;
                case "End":
                    E.preventDefault(), E.stopPropagation(), y();
                    break
            }(N = n.onDayKeyDown) === null || N === void 0 || N.call(n, e, t, E)
        },
        M = {
            onClick: $,
            onFocus: w,
            onBlur: C,
            onKeyDown: T,
            onKeyUp: O,
            onMouseEnter: S,
            onMouseLeave: _,
            onPointerEnter: P,
            onPointerLeave: D,
            onTouchCancel: R,
            onTouchEnd: A,
            onTouchMove: I,
            onTouchStart: L
        };
    return M
}

function eb() {
    var e = pe(),
        t = mc(),
        n = Fo(),
        r = Bo(),
        o = fr(e) ? t.selected : yn(e) ? n.selected : xn(e) ? r.selected : void 0;
    return o
}

function tb(e) {
    return Object.values(Ge).includes(e)
}

function nb(e, t) {
    var n = [e.classNames.day];
    return Object.keys(t).forEach(function(r) {
        var o = e.modifiersClassNames[r];
        if (o) n.push(o);
        else if (tb(r)) {
            var a = e.classNames["day_".concat(r)];
            a && n.push(a)
        }
    }), n
}

function rb(e, t) {
    var n = Z({}, e.styles.day);
    return Object.keys(t).forEach(function(r) {
        var o;
        n = Z(Z({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r])
    }), n
}

function ob(e, t, n) {
    var r, o, a, i = pe(),
        s = Vo(),
        c = Xg(e, t),
        l = Jg(e, c),
        f = eb(),
        d = !!(i.onDayClick || i.mode !== "default");
    u.useEffect(function() {
        var S;
        c.outside || s.focusedDay && d && Ae(s.focusedDay, e) && ((S = n.current) === null || S === void 0 || S.focus())
    }, [s.focusedDay, e, n, d, c.outside]);
    var m = nb(i, c).join(" "),
        p = rb(i, c),
        v = !!(c.outside && !i.showOutsideDays || c.hidden),
        h = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Sg,
        b = x.jsx(h, {
            date: e,
            displayMonth: t,
            activeModifiers: c
        }),
        g = {
            style: p,
            className: m,
            children: b,
            role: "gridcell"
        },
        y = s.focusTarget && Ae(s.focusTarget, e) && !c.outside,
        $ = s.focusedDay && Ae(s.focusedDay, e),
        w = Z(Z(Z({}, g), (r = {
            disabled: c.disabled,
            role: "gridcell"
        }, r["aria-selected"] = c.selected, r.tabIndex = $ || y ? 0 : -1, r)), l),
        C = {
            isButton: d,
            isHidden: v,
            activeModifiers: c,
            selectedDays: f,
            buttonProps: w,
            divProps: g
        };
    return C
}

function ab(e) {
    var t = u.useRef(null),
        n = ob(e.date, e.displayMonth, t);
    return n.isHidden ? x.jsx("div", {
        role: "gridcell"
    }) : n.isButton ? x.jsx(Jn, Z({
        name: "day",
        ref: t
    }, n.buttonProps)) : x.jsx("div", Z({}, n.divProps))
}

function ib(e) {
    var t = e.number,
        n = e.dates,
        r = pe(),
        o = r.onWeekNumberClick,
        a = r.styles,
        i = r.classNames,
        s = r.locale,
        c = r.labels.labelWeekNumber,
        l = r.formatters.formatWeekNumber,
        f = l(Number(t), {
            locale: s
        });
    if (!o) return x.jsx("span", {
        className: i.weeknumber,
        style: a.weeknumber,
        children: f
    });
    var d = c(Number(t), {
            locale: s
        }),
        m = function(p) {
            o(t, n, p)
        };
    return x.jsx(Jn, {
        name: "week-number",
        "aria-label": d,
        className: i.weeknumber,
        style: a.weeknumber,
        onClick: m,
        children: f
    })
}

function sb(e) {
    var t, n, r = pe(),
        o = r.styles,
        a = r.classNames,
        i = r.showWeekNumber,
        s = r.components,
        c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : ab,
        l = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : ib,
        f;
    return i && (f = x.jsx("td", {
        className: a.cell,
        style: o.cell,
        children: x.jsx(l, {
            number: e.weekNumber,
            dates: e.dates
        })
    })), x.jsxs("tr", {
        className: a.row,
        style: o.row,
        children: [f, e.dates.map(function(d) {
            return x.jsx("td", {
                className: a.cell,
                style: o.cell,
                role: "presentation",
                children: x.jsx(c, {
                    displayMonth: e.displayMonth,
                    date: d
                })
            }, gc(d))
        })]
    })
}

function Va(e, t, n) {
    for (var r = n != null && n.ISOWeek ? Ya(t) : Ka(t, n), o = n != null && n.ISOWeek ? co(e) : lo(e, n), a = it(r, o), i = [], s = 0; s <= a; s++) i.push(Le(o, s));
    var c = i.reduce(function(l, f) {
        var d = n != null && n.ISOWeek ? Cc(f) : Ec(f, n),
            m = l.find(function(p) {
                return p.weekNumber === d
            });
        return m ? (m.dates.push(f), l) : (l.push({
            weekNumber: d,
            dates: [f]
        }), l)
    }, []);
    return c
}

function cb(e, t) {
    var n = Va(Fe(e), io(e), t);
    if (t != null && t.useFixedWeeks) {
        var r = bc(e, t);
        if (r < 6) {
            var o = n[n.length - 1],
                a = o.dates[o.dates.length - 1],
                i = Br(a, 6 - r),
                s = Va(Br(a, 1), i, t);
            n.push.apply(n, s)
        }
    }
    return n
}

function lb(e) {
    var t, n, r, o = pe(),
        a = o.locale,
        i = o.classNames,
        s = o.styles,
        c = o.hideHead,
        l = o.fixedWeeks,
        f = o.components,
        d = o.weekStartsOn,
        m = o.firstWeekContainsDate,
        p = o.ISOWeek,
        v = cb(e.displayMonth, {
            useFixedWeeks: !!l,
            ISOWeek: p,
            locale: a,
            weekStartsOn: d,
            firstWeekContainsDate: m
        }),
        h = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : Eg,
        b = (n = f == null ? void 0 : f.Row) !== null && n !== void 0 ? n : sb,
        g = (r = f == null ? void 0 : f.Footer) !== null && r !== void 0 ? r : wg;
    return x.jsxs("table", {
        id: e.id,
        className: i.table,
        style: s.table,
        role: "grid",
        "aria-labelledby": e["aria-labelledby"],
        children: [!c && x.jsx(h, {}), x.jsx("tbody", {
            className: i.tbody,
            style: s.tbody,
            children: v.map(function(y) {
                return x.jsx(b, {
                    displayMonth: e.displayMonth,
                    dates: y.dates,
                    weekNumber: y.weekNumber
                }, y.weekNumber)
            })
        }), x.jsx(g, {
            displayMonth: e.displayMonth
        })]
    })
}

function ub() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
var db = ub() ? u.useLayoutEffect : u.useEffect,
    Fr = !1,
    fb = 0;

function za() {
    return "react-day-picker-".concat(++fb)
}

function pb(e) {
    var t, n = e ? ? (Fr ? za() : null),
        r = u.useState(n),
        o = r[0],
        a = r[1];
    return db(function() {
        o === null && a(za())
    }, []), u.useEffect(function() {
        Fr === !1 && (Fr = !0)
    }, []), (t = e ? ? o) !== null && t !== void 0 ? t : void 0
}

function mb(e) {
    var t, n, r = pe(),
        o = r.dir,
        a = r.classNames,
        i = r.styles,
        s = r.components,
        c = wn().displayMonths,
        l = pb(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0),
        f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0,
        d = [a.month],
        m = i.month,
        p = e.displayIndex === 0,
        v = e.displayIndex === c.length - 1,
        h = !p && !v;
    o === "rtl" && (t = [p, v], v = t[0], p = t[1]), p && (d.push(a.caption_start), m = Z(Z({}, m), i.caption_start)), v && (d.push(a.caption_end), m = Z(Z({}, m), i.caption_end)), h && (d.push(a.caption_between), m = Z(Z({}, m), i.caption_between));
    var b = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : xg;
    return x.jsxs("div", {
        className: d.join(" "),
        style: m,
        children: [x.jsx(b, {
            id: l,
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex
        }), x.jsx(lb, {
            id: f,
            "aria-labelledby": l,
            displayMonth: e.displayMonth
        })]
    }, e.displayIndex)
}

function vb(e) {
    var t = pe(),
        n = t.classNames,
        r = t.styles;
    return x.jsx("div", {
        className: n.months,
        style: r.months,
        children: e.children
    })
}

function hb(e) {
    var t, n, r = e.initialProps,
        o = pe(),
        a = Vo(),
        i = wn(),
        s = u.useState(!1),
        c = s[0],
        l = s[1];
    u.useEffect(function() {
        o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), l(!0)))
    }, [o.initialFocus, c, a.focus, a.focusTarget, a]);
    var f = [o.classNames.root, o.className];
    o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
    var d = Z(Z({}, o.styles.root), o.style),
        m = Object.keys(r).filter(function(v) {
            return v.startsWith("data-")
        }).reduce(function(v, h) {
            var b;
            return Z(Z({}, v), (b = {}, b[h] = r[h], b))
        }, {}),
        p = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : vb;
    return x.jsx("div", Z({
        className: f.join(" "),
        style: d,
        dir: o.dir,
        id: o.id,
        nonce: r.nonce,
        title: r.title,
        lang: r.lang
    }, m, {
        children: x.jsx(p, {
            children: i.displayMonths.map(function(v, h) {
                return x.jsx(mb, {
                    displayIndex: h,
                    displayMonth: v
                }, h)
            })
        })
    }))
}

function gb(e) {
    var t = e.children,
        n = Bh(e, ["children"]);
    return x.jsx(ig, {
        initialProps: n,
        children: x.jsx(hg, {
            children: x.jsx(Zg, {
                initialProps: n,
                children: x.jsx(Pg, {
                    initialProps: n,
                    children: x.jsx(_g, {
                        initialProps: n,
                        children: x.jsx(Lg, {
                            children: x.jsx(qg, {
                                children: t
                            })
                        })
                    })
                })
            })
        })
    })
}

function bb(e) {
    return x.jsx(gb, Z({}, e, {
        children: x.jsx(hb, {
            initialProps: e
        })
    }))
}
var yb = e => {
        var t = e,
            {
                lang: n
            } = t,
            r = Et(t, ["lang"]);
        return x.jsx(bb, $e({
            locale: n != null && n.startsWith("ar") ? Ih : Wh
        }, r))
    },
    Yb = yb,
    xb = {
        1: "line-clamp-1",
        2: "line-clamp-2",
        3: "line-clamp-3",
        4: "line-clamp-4",
        5: "line-clamp-5",
        6: "line-clamp-6",
        12: "line-clamp-[12]",
        none: "line-clamp-none"
    },
    wb = ({
        text: e,
        minimum: t = 3,
        className: n,
        btnProps: r,
        readMoreLabel: o = "Read More",
        readLessLabel: a = "Read Less",
        children: i
    }) => {
        const [s, c] = u.useState(!1), [l, f] = u.useState(!1), [d, m] = u.useState("auto"), p = u.useRef("auto"), v = u.useRef(null);
        u.useLayoutEffect(() => {
            if (!v.current) return;
            const {
                clientHeight: b,
                scrollHeight: g
            } = v.current;
            c(g > b), m(b), p.current = b
        }, []);
        const h = () => {
            f(!l), requestAnimationFrame(() => {
                v.current && m(l ? p.current : v.current.scrollHeight)
            })
        };
        return !e && !i ? null : x.jsxs("div", {
            className: "relative inline-block w-full",
            children: [x.jsx(hc.div, {
                transition: {
                    duration: .25,
                    ease: "easeInOut"
                },
                className: "overflow-hidden",
                animate: {
                    height: d
                },
                style: {
                    height: d
                },
                children: x.jsx("div", {
                    ref: v,
                    "data-testid": "collapsable-text",
                    className: fe("text-text max-w-full overflow-hidden whitespace-pre-wrap", !l && xb[t], !i && "prose", n),
                    children: i || x.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: e || ""
                        }
                    })
                })
            }), s && x.jsx(Li, ct($e({
                onClick: h,
                shape: "text",
                theme: "transparent",
                className: "relative m-px p-0 text-sm ring-0 hover:underline focus:ring-0",
                rounded: !0,
                "aria-label": l ? a : o
            }, r), {
                children: l ? a : o
            }))]
        })
    },
    Kb = wb;
export {
    Li as B, Ub as C, Yb as D, Xi as I, Lb as M, jb as O, Wb as P, Hb as R, dp as S, Db as T, kb as U, Hr as _, Vb as a, Ib as b, zb as c, Mb as d, Kb as e, Pb as f, Dv as g, Tv as h, G as i, Ih as j, Wh as k, ah as l, Js as r, Gb as s, _v as t
};
//# sourceMappingURL=ui-CXvSo9mp.js.map