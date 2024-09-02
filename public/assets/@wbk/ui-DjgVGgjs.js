import {
    r as l,
    a as Hn,
    R as M,
    b as ya,
    $ as js
} from "../vendor-DR5RWKqR.js";
import {
    j as b,
    t as ve,
    C as tr,
    m as Ws
} from "../@hy/experiences-DjqdbvJK.js";
import {
    u as Bs
} from "../embla-carousel-react-BzYB0_h2.js";
import {
    a as Oe,
    s as nr,
    b as Ne,
    e as tt,
    g as Ie,
    h as Vr,
    j as Eo,
    k as Ze,
    l as Jt,
    m as zr,
    c as wa,
    n as Sr,
    o as Hs,
    p as Vs,
    q as Pr,
    r as zs,
    t as rr,
    u as Ro,
    v as Us,
    w as Gs,
    x as Ys,
    y as xa,
    z as $a,
    A as Ur,
    B as Gr,
    C as Ks,
    D as qs,
    f as St,
    E as Ca,
    F as Xs
} from "../date-fns-C6zgY02b.js";

function j() {
    return j = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, j.apply(this, arguments)
}

function _r(e) {
    "@babel/helpers - typeof";
    return _r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, _r(e)
}
var Zs = Object.defineProperty,
    Qs = Object.defineProperties,
    Js = Object.getOwnPropertyDescriptors,
    On = Object.getOwnPropertySymbols,
    Ea = Object.prototype.hasOwnProperty,
    Ra = Object.prototype.propertyIsEnumerable,
    So = (e, t, n) => t in e ? Zs(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    he = (e, t) => {
        for (var n in t || (t = {})) Ea.call(t, n) && So(e, n, t[n]);
        if (On)
            for (var n of On(t)) Ra.call(t, n) && So(e, n, t[n]);
        return e
    },
    rt = (e, t) => Qs(e, Js(t)),
    gt = (e, t) => {
        var n = {};
        for (var r in e) Ea.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && On)
            for (var r of On(e)) t.indexOf(r) < 0 && Ra.call(e, r) && (n[r] = e[r]);
        return n
    },
    ec = (e, t, n) => new Promise((r, o) => {
        var a = c => {
                try {
                    s(n.next(c))
                } catch (u) {
                    o(u)
                }
            },
            i = c => {
                try {
                    s(n.throw(c))
                } catch (u) {
                    o(u)
                }
            },
            s = c => c.done ? r(c.value) : Promise.resolve(c.value).then(a, i);
        s((n = n.apply(e, t)).next())
    });

function ne(e, t, {
    checkForDefaultPrevented: n = !0
} = {}) {
    return function(o) {
        if (e == null || e(o), n === !1 || !o.defaultPrevented) return t == null ? void 0 : t(o)
    }
}

function tc(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function Sa(...e) {
    return t => e.forEach(n => tc(n, t))
}

function Ee(...e) {
    return l.useCallback(Sa(...e), e)
}

function Qe(e, t = []) {
    let n = [];

    function r(a, i) {
        const s = l.createContext(i),
            c = n.length;
        n = [...n, i];

        function u(d) {
            const {
                scope: p,
                children: v,
                ...m
            } = d, h = (p == null ? void 0 : p[e][c]) || s, g = l.useMemo(() => m, Object.values(m));
            return l.createElement(h.Provider, {
                value: g
            }, v)
        }

        function f(d, p) {
            const v = (p == null ? void 0 : p[e][c]) || s,
                m = l.useContext(v);
            if (m) return m;
            if (i !== void 0) return i;
            throw new Error(`\`${d}\` must be used within \`${a}\``)
        }
        return u.displayName = a + "Provider", [u, f]
    }
    const o = () => {
        const a = n.map(i => l.createContext(i));
        return function(s) {
            const c = (s == null ? void 0 : s[e]) || a;
            return l.useMemo(() => ({
                [`__scope${e}`]: { ...s,
                    [e]: c
                }
            }), [s, c])
        }
    };
    return o.scopeName = e, [r, nc(o, ...t)]
}

function nc(...e) {
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
                scopeName: u
            }) => {
                const d = c(a)[`__scope${u}`];
                return { ...s,
                    ...d
                }
            }, {});
            return l.useMemo(() => ({
                [`__scope${t.scopeName}`]: i
            }), [i])
        }
    };
    return n.scopeName = t.scopeName, n
}

function ot(e) {
    const t = l.useRef(e);
    return l.useEffect(() => {
        t.current = e
    }), l.useMemo(() => (...n) => {
        var r;
        return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n)
    }, [])
}

function ct({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = rc({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, i = a ? e : r, s = ot(n), c = l.useCallback(u => {
        if (a) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && s(d)
        } else o(u)
    }, [a, e, o, s]);
    return [i, c]
}

function rc({
    defaultProp: e,
    onChange: t
}) {
    const n = l.useState(e),
        [r] = n,
        o = l.useRef(r),
        a = ot(t);
    return l.useEffect(() => {
        o.current !== r && (a(r), o.current = r)
    }, [r, o, a]), n
}

function Pa(e) {
    const t = l.useRef({
        value: e,
        previous: e
    });
    return l.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
}
const Wt = globalThis != null && globalThis.document ? l.useLayoutEffect : () => {};

function Yr(e) {
    const [t, n] = l.useState(void 0);
    return Wt(() => {
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
                        u = Array.isArray(c) ? c[0] : c;
                    i = u.inlineSize, s = u.blockSize
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
const Bt = l.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e, o = l.Children.toArray(n), a = o.find(oc);
    if (a) {
        const i = a.props.children,
            s = o.map(c => c === a ? l.Children.count(i) > 1 ? l.Children.only(null) : l.isValidElement(i) ? i.props.children : null : c);
        return l.createElement(Dr, j({}, r, {
            ref: t
        }), l.isValidElement(i) ? l.cloneElement(i, void 0, s) : null)
    }
    return l.createElement(Dr, j({}, r, {
        ref: t
    }), n)
});
Bt.displayName = "Slot";
const Dr = l.forwardRef((e, t) => {
    const {
        children: n,
        ...r
    } = e;
    return l.isValidElement(n) ? l.cloneElement(n, { ...ac(r, n.props),
        ref: t ? Sa(t, n.ref) : n.ref
    }) : l.Children.count(n) > 1 ? l.Children.only(null) : null
});
Dr.displayName = "SlotClone";
const _a = ({
    children: e
}) => l.createElement(l.Fragment, null, e);

function oc(e) {
    return l.isValidElement(e) && e.type === _a
}

function ac(e, t) {
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
const ic = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"],
    fe = ic.reduce((e, t) => {
        const n = l.forwardRef((r, o) => {
            const {
                asChild: a,
                ...i
            } = r, s = a ? Bt : t;
            return l.useEffect(() => {
                window[Symbol.for("radix-ui")] = !0
            }, []), l.createElement(s, j({}, i, {
                ref: o
            }))
        });
        return n.displayName = `Primitive.${t}`, { ...e,
            [t]: n
        }
    }, {});

function sc(e, t) {
    e && Hn.flushSync(() => e.dispatchEvent(t))
}
const Da = "Switch",
    [cc, nb] = Qe(Da),
    [lc, uc] = cc(Da),
    dc = l.forwardRef((e, t) => {
        const {
            __scopeSwitch: n,
            name: r,
            checked: o,
            defaultChecked: a,
            required: i,
            disabled: s,
            value: c = "on",
            onCheckedChange: u,
            ...f
        } = e, [d, p] = l.useState(null), v = Ee(t, y => p(y)), m = l.useRef(!1), h = d ? !!d.closest("form") : !0, [g = !1, w] = ct({
            prop: o,
            defaultProp: a,
            onChange: u
        });
        return l.createElement(lc, {
            scope: n,
            checked: g,
            disabled: s
        }, l.createElement(fe.button, j({
            type: "button",
            role: "switch",
            "aria-checked": g,
            "aria-required": i,
            "data-state": Ta(g),
            "data-disabled": s ? "" : void 0,
            disabled: s,
            value: c
        }, f, {
            ref: v,
            onClick: ne(e.onClick, y => {
                w($ => !$), h && (m.current = y.isPropagationStopped(), m.current || y.stopPropagation())
            })
        })), h && l.createElement(pc, {
            control: d,
            bubbles: !m.current,
            name: r,
            value: c,
            checked: g,
            required: i,
            disabled: s,
            style: {
                transform: "translateX(-100%)"
            }
        }))
    }),
    fc = "SwitchThumb",
    vc = l.forwardRef((e, t) => {
        const {
            __scopeSwitch: n,
            ...r
        } = e, o = uc(fc, n);
        return l.createElement(fe.span, j({
            "data-state": Ta(o.checked),
            "data-disabled": o.disabled ? "" : void 0
        }, r, {
            ref: t
        }))
    }),
    pc = e => {
        const {
            control: t,
            checked: n,
            bubbles: r = !0,
            ...o
        } = e, a = l.useRef(null), i = Pa(n), s = Yr(t);
        return l.useEffect(() => {
            const c = a.current,
                u = window.HTMLInputElement.prototype,
                d = Object.getOwnPropertyDescriptor(u, "checked").set;
            if (i !== n && d) {
                const p = new Event("click", {
                    bubbles: r
                });
                d.call(c, n), c.dispatchEvent(p)
            }
        }, [i, n, r]), l.createElement("input", j({
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

function Ta(e) {
    return e ? "checked" : "unchecked"
}
const mc = dc,
    hc = vc;
var bc = l.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                error: a,
                hideErrorSpace: i = !1,
                className: s,
                disabled: c,
                groupClassName: u,
                id: f,
                onChange: d
            } = r,
            p = gt(r, ["label", "error", "hideErrorSpace", "className", "disabled", "groupClassName", "id", "onChange"]);
        const v = l.useId();
        return b.jsxs("div", {
            className: u,
            children: [b.jsxs("div", {
                className: "flex items-center gap-3",
                children: [b.jsx(mc, rt(he({
                    className: ve("bg-input/20 data-[state=checked]:bg-primary relative inline-flex h-5 w-[33px] shrink-0 items-center rounded-full disabled:cursor-not-allowed", s),
                    ref: n,
                    id: f || v,
                    disabled: c,
                    onCheckedChange: d
                }, p), {
                    children: b.jsx(hc, {
                        className: "inline-block h-[18px] w-[18px] transform rounded-full bg-white transition ltr:translate-x-px data-[state=checked]:ltr:translate-x-[14px] rtl:-translate-x-px data-[state=checked]:rtl:-translate-x-[14px]"
                    })
                })), o && b.jsx("label", {
                    htmlFor: f || v,
                    "aria-disabled": c,
                    className: "cursor-pointer aria-disabled:cursor-not-allowed",
                    children: o
                })]
            }), typeof a == "string" && a || !i ? b.jsx("p", {
                className: "text-error my-1 min-h-[16px] text-xs",
                children: a
            }) : null]
        })
    }),
    rb = bc;

function gc(e) {
    const t = e + "CollectionProvider",
        [n, r] = Qe(t),
        [o, a] = n(t, {
            collectionRef: {
                current: null
            },
            itemMap: new Map
        }),
        i = v => {
            const {
                scope: m,
                children: h
            } = v, g = M.useRef(null), w = M.useRef(new Map).current;
            return M.createElement(o, {
                scope: m,
                itemMap: w,
                collectionRef: g
            }, h)
        },
        s = e + "CollectionSlot",
        c = M.forwardRef((v, m) => {
            const {
                scope: h,
                children: g
            } = v, w = a(s, h), y = Ee(m, w.collectionRef);
            return M.createElement(Bt, {
                ref: y
            }, g)
        }),
        u = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        d = M.forwardRef((v, m) => {
            const {
                scope: h,
                children: g,
                ...w
            } = v, y = M.useRef(null), $ = Ee(m, y), x = a(u, h);
            return M.useEffect(() => (x.itemMap.set(y, {
                ref: y,
                ...w
            }), () => void x.itemMap.delete(y))), M.createElement(Bt, {
                [f]: "",
                ref: $
            }, g)
        });

    function p(v) {
        const m = a(e + "CollectionConsumer", v);
        return M.useCallback(() => {
            const g = m.collectionRef.current;
            if (!g) return [];
            const w = Array.from(g.querySelectorAll(`[${f}]`));
            return Array.from(m.itemMap.values()).sort((x, E) => w.indexOf(x.ref.current) - w.indexOf(E.ref.current))
        }, [m.collectionRef, m.itemMap])
    }
    return [{
        Provider: i,
        Slot: c,
        ItemSlot: d
    }, p, r]
}
const yc = ya.useId || (() => {});
let wc = 0;

function At(e) {
    const [t, n] = l.useState(yc());
    return Wt(() => {
        e || n(r => r ? ? String(wc++))
    }, [e]), e || (t ? `radix-${t}` : "")
}
const xc = l.createContext(void 0);

function Kr(e) {
    const t = l.useContext(xc);
    return e || t || "ltr"
}
const or = "rovingFocusGroup.onEntryFocus",
    $c = {
        bubbles: !1,
        cancelable: !0
    },
    qr = "RovingFocusGroup",
    [Tr, Oa, Cc] = gc(qr),
    [Ec, Vn] = Qe(qr, [Cc]),
    [Rc, Sc] = Ec(qr),
    Pc = l.forwardRef((e, t) => l.createElement(Tr.Provider, {
        scope: e.__scopeRovingFocusGroup
    }, l.createElement(Tr.Slot, {
        scope: e.__scopeRovingFocusGroup
    }, l.createElement(_c, j({}, e, {
        ref: t
    }))))),
    _c = l.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            orientation: r,
            loop: o = !1,
            dir: a,
            currentTabStopId: i,
            defaultCurrentTabStopId: s,
            onCurrentTabStopIdChange: c,
            onEntryFocus: u,
            ...f
        } = e, d = l.useRef(null), p = Ee(t, d), v = Kr(a), [m = null, h] = ct({
            prop: i,
            defaultProp: s,
            onChange: c
        }), [g, w] = l.useState(!1), y = ot(u), $ = Oa(n), x = l.useRef(!1), [E, O] = l.useState(0);
        return l.useEffect(() => {
            const N = d.current;
            if (N) return N.addEventListener(or, y), () => N.removeEventListener(or, y)
        }, [y]), l.createElement(Rc, {
            scope: n,
            orientation: r,
            dir: v,
            loop: o,
            currentTabStopId: m,
            onItemFocus: l.useCallback(N => h(N), [h]),
            onItemShiftTab: l.useCallback(() => w(!0), []),
            onFocusableItemAdd: l.useCallback(() => O(N => N + 1), []),
            onFocusableItemRemove: l.useCallback(() => O(N => N - 1), [])
        }, l.createElement(fe.div, j({
            tabIndex: g || E === 0 ? -1 : 0,
            "data-orientation": r
        }, f, {
            ref: p,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: ne(e.onMouseDown, () => {
                x.current = !0
            }),
            onFocus: ne(e.onFocus, N => {
                const _ = !x.current;
                if (N.target === N.currentTarget && _ && !g) {
                    const D = new CustomEvent(or, $c);
                    if (N.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                        const T = $().filter(P => P.focusable),
                            F = T.find(P => P.active),
                            I = T.find(P => P.id === m),
                            S = [F, I, ...T].filter(Boolean).map(P => P.ref.current);
                        Ma(S)
                    }
                }
                x.current = !1
            }),
            onBlur: ne(e.onBlur, () => w(!1))
        })))
    }),
    Dc = "RovingFocusGroupItem",
    Tc = l.forwardRef((e, t) => {
        const {
            __scopeRovingFocusGroup: n,
            focusable: r = !0,
            active: o = !1,
            tabStopId: a,
            ...i
        } = e, s = At(), c = a || s, u = Sc(Dc, n), f = u.currentTabStopId === c, d = Oa(n), {
            onFocusableItemAdd: p,
            onFocusableItemRemove: v
        } = u;
        return l.useEffect(() => {
            if (r) return p(), () => v()
        }, [r, p, v]), l.createElement(Tr.ItemSlot, {
            scope: n,
            id: c,
            focusable: r,
            active: o
        }, l.createElement(fe.span, j({
            tabIndex: f ? 0 : -1,
            "data-orientation": u.orientation
        }, i, {
            ref: t,
            onMouseDown: ne(e.onMouseDown, m => {
                r ? u.onItemFocus(c) : m.preventDefault()
            }),
            onFocus: ne(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: ne(e.onKeyDown, m => {
                if (m.key === "Tab" && m.shiftKey) {
                    u.onItemShiftTab();
                    return
                }
                if (m.target !== m.currentTarget) return;
                const h = Nc(m, u.orientation, u.dir);
                if (h !== void 0) {
                    m.preventDefault();
                    let w = d().filter(y => y.focusable).map(y => y.ref.current);
                    if (h === "last") w.reverse();
                    else if (h === "prev" || h === "next") {
                        h === "prev" && w.reverse();
                        const y = w.indexOf(m.currentTarget);
                        w = u.loop ? kc(w, y + 1) : w.slice(y + 1)
                    }
                    setTimeout(() => Ma(w))
                }
            })
        })))
    }),
    Oc = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last"
    };

function Mc(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}

function Nc(e, t, n) {
    const r = Mc(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Oc[r]
}

function Ma(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(), document.activeElement !== t)) return
}

function kc(e, t) {
    return e.map((n, r) => e[(t + r) % e.length])
}
const Na = Pc,
    ka = Tc,
    Ic = l.forwardRef((e, t) => {
        const {
            pressed: n,
            defaultPressed: r = !1,
            onPressedChange: o,
            ...a
        } = e, [i = !1, s] = ct({
            prop: n,
            onChange: o,
            defaultProp: r
        });
        return l.createElement(fe.button, j({
            type: "button",
            "aria-pressed": i,
            "data-state": i ? "on" : "off",
            "data-disabled": e.disabled ? "" : void 0
        }, a, {
            ref: t,
            onClick: ne(e.onClick, () => {
                e.disabled || s(!i)
            })
        }))
    }),
    zn = "ToggleGroup",
    [Ia, ob] = Qe(zn, [Vn]),
    Aa = Vn(),
    Ac = M.forwardRef((e, t) => {
        const {
            type: n,
            ...r
        } = e;
        if (n === "single") {
            const o = r;
            return M.createElement(Fc, j({}, o, {
                ref: t
            }))
        }
        if (n === "multiple") {
            const o = r;
            return M.createElement(Lc, j({}, o, {
                ref: t
            }))
        }
        throw new Error(`Missing prop \`type\` expected on \`${zn}\``)
    }),
    [Fa, La] = Ia(zn),
    Fc = M.forwardRef((e, t) => {
        const {
            value: n,
            defaultValue: r,
            onValueChange: o = () => {},
            ...a
        } = e, [i, s] = ct({
            prop: n,
            defaultProp: r,
            onChange: o
        });
        return M.createElement(Fa, {
            scope: e.__scopeToggleGroup,
            type: "single",
            value: i ? [i] : [],
            onItemActivate: s,
            onItemDeactivate: M.useCallback(() => s(""), [s])
        }, M.createElement(ja, j({}, a, {
            ref: t
        })))
    }),
    Lc = M.forwardRef((e, t) => {
        const {
            value: n,
            defaultValue: r,
            onValueChange: o = () => {},
            ...a
        } = e, [i = [], s] = ct({
            prop: n,
            defaultProp: r,
            onChange: o
        }), c = M.useCallback(f => s((d = []) => [...d, f]), [s]), u = M.useCallback(f => s((d = []) => d.filter(p => p !== f)), [s]);
        return M.createElement(Fa, {
            scope: e.__scopeToggleGroup,
            type: "multiple",
            value: i,
            onItemActivate: c,
            onItemDeactivate: u
        }, M.createElement(ja, j({}, a, {
            ref: t
        })))
    }),
    [jc, Wc] = Ia(zn),
    ja = M.forwardRef((e, t) => {
        const {
            __scopeToggleGroup: n,
            disabled: r = !1,
            rovingFocus: o = !0,
            orientation: a,
            dir: i,
            loop: s = !0,
            ...c
        } = e, u = Aa(n), f = Kr(i), d = {
            role: "group",
            dir: f,
            ...c
        };
        return M.createElement(jc, {
            scope: n,
            rovingFocus: o,
            disabled: r
        }, o ? M.createElement(Na, j({
            asChild: !0
        }, u, {
            orientation: a,
            dir: f,
            loop: s
        }), M.createElement(fe.div, j({}, d, {
            ref: t
        }))) : M.createElement(fe.div, j({}, d, {
            ref: t
        })))
    }),
    Or = "ToggleGroupItem",
    Bc = M.forwardRef((e, t) => {
        const n = La(Or, e.__scopeToggleGroup),
            r = Wc(Or, e.__scopeToggleGroup),
            o = Aa(e.__scopeToggleGroup),
            a = n.value.includes(e.value),
            i = r.disabled || e.disabled,
            s = { ...e,
                pressed: a,
                disabled: i
            },
            c = M.useRef(null);
        return r.rovingFocus ? M.createElement(ka, j({
            asChild: !0
        }, o, {
            focusable: !i,
            active: a,
            ref: c
        }), M.createElement(Po, j({}, s, {
            ref: t
        }))) : M.createElement(Po, j({}, s, {
            ref: t
        }))
    }),
    Po = M.forwardRef((e, t) => {
        const {
            __scopeToggleGroup: n,
            value: r,
            ...o
        } = e, a = La(Or, n), i = {
            role: "radio",
            "aria-checked": e.pressed,
            "aria-pressed": void 0
        }, s = a.type === "single" ? i : void 0;
        return M.createElement(Ic, j({}, s, o, {
            ref: t,
            onPressedChange: c => {
                c ? a.onItemActivate(r) : a.onItemDeactivate(r)
            }
        }))
    }),
    Hc = Ac,
    Vc = Bc;
var zc = l.forwardRef(function({
        type: t,
        name: n,
        label: r,
        options: o,
        value: a,
        onChange: i,
        rounded: s = !0,
        error: c,
        disabled: u,
        groupClassName: f,
        className: d,
        dir: p,
        phill: v = !1,
        dark: m,
        hideErrorSpace: h = !0,
        separator: g
    }, w) {
        const y = t === "multiple" || Array.isArray(a);
        return b.jsxs(Hc, rt(he({}, y ? {
            type: "multiple",
            value: a,
            onValueChange: i
        } : {
            type: "single",
            value: a,
            onValueChange: i
        }), {
            dir: p,
            disabled: u,
            ref: w,
            children: [b.jsx("label", {
                className: `block pb-1 ${u?"text-gray-400":m?"text-text":""}`,
                children: r
            }), b.jsx("div", {
                className: ve("flex flex-wrap gap-2", f),
                ref: w,
                children: o.map(($, x) => b.jsxs(b.Fragment, {
                    children: [x > 0 && g, b.jsxs(Vc, {
                        name: n,
                        disabled: u,
                        value: $.value,
                        className: ve("border-input/20 relative flex grow cursor-pointer justify-center border px-5 py-2 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-80", "data-[state=on]:bg-primary data-[state=on]:text-primary-contrast data-[state=on]:shadow-md", "disabled:data-[state=on]:bg-input/20 disabled:bg-input/5 disabled:text-text/60", m && "data-[state=on]:text-text-dark data-[state=on]:bg-white", s && "rounded-md", v && "rounded-full", d),
                        children: [$.icon && b.jsx("img", {
                            src: $.icon,
                            width: 22,
                            height: 22,
                            alt: typeof $.text == "string" ? $.text : $.value,
                            className: "shrink-0 pr-4"
                        }), b.jsx("div", {
                            children: $.text
                        }), $.description && b.jsx("div", {
                            className: "text-text inline group-data-[state=on]:text-sky-100",
                            children: $.description
                        })]
                    }, $.value)]
                }))
            }), (typeof c == "string" && !!c || !h) && b.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${c?"visible":"text-transparent"}`,
                children: c
            })]
        }))
    }),
    ab = zc;

function Uc(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ot(e);
    l.useEffect(() => {
        const r = o => {
            o.key === "Escape" && n(o)
        };
        return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r)
    }, [n, t])
}
const Mr = "dismissableLayer.update",
    Gc = "dismissableLayer.pointerDownOutside",
    Yc = "dismissableLayer.focusOutside";
let _o;
const Kc = l.createContext({
        layers: new Set,
        layersWithOutsidePointerEventsDisabled: new Set,
        branches: new Set
    }),
    Xr = l.forwardRef((e, t) => {
        var n;
        const {
            disableOutsidePointerEvents: r = !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: a,
            onFocusOutside: i,
            onInteractOutside: s,
            onDismiss: c,
            ...u
        } = e, f = l.useContext(Kc), [d, p] = l.useState(null), v = (n = d == null ? void 0 : d.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = l.useState({}), h = Ee(t, _ => p(_)), g = Array.from(f.layers), [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), y = g.indexOf(w), $ = d ? g.indexOf(d) : -1, x = f.layersWithOutsidePointerEventsDisabled.size > 0, E = $ >= y, O = qc(_ => {
            const D = _.target,
                T = [...f.branches].some(F => F.contains(D));
            !E || T || (a == null || a(_), s == null || s(_), _.defaultPrevented || c == null || c())
        }, v), N = Xc(_ => {
            const D = _.target;
            [...f.branches].some(F => F.contains(D)) || (i == null || i(_), s == null || s(_), _.defaultPrevented || c == null || c())
        }, v);
        return Uc(_ => {
            $ === f.layers.size - 1 && (o == null || o(_), !_.defaultPrevented && c && (_.preventDefault(), c()))
        }, v), l.useEffect(() => {
            if (d) return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (_o = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), Do(), () => {
                r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = _o)
            }
        }, [d, v, r, f]), l.useEffect(() => () => {
            d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), Do())
        }, [d, f]), l.useEffect(() => {
            const _ = () => m({});
            return document.addEventListener(Mr, _), () => document.removeEventListener(Mr, _)
        }, []), l.createElement(fe.div, j({}, u, {
            ref: h,
            style: {
                pointerEvents: x ? E ? "auto" : "none" : void 0,
                ...e.style
            },
            onFocusCapture: ne(e.onFocusCapture, N.onFocusCapture),
            onBlurCapture: ne(e.onBlurCapture, N.onBlurCapture),
            onPointerDownCapture: ne(e.onPointerDownCapture, O.onPointerDownCapture)
        }))
    });

function qc(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ot(e),
        r = l.useRef(!1),
        o = l.useRef(() => {});
    return l.useEffect(() => {
        const a = s => {
                if (s.target && !r.current) {
                    let u = function() {
                        Wa(Gc, n, c, {
                            discrete: !0
                        })
                    };
                    const c = {
                        originalEvent: s
                    };
                    s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, {
                        once: !0
                    })) : u()
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

function Xc(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = ot(e),
        r = l.useRef(!1);
    return l.useEffect(() => {
        const o = a => {
            a.target && !r.current && Wa(Yc, n, {
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

function Do() {
    const e = new CustomEvent(Mr);
    document.dispatchEvent(e)
}

function Wa(e, t, n, {
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
    }), r ? sc(o, a) : o.dispatchEvent(a)
}
const Zc = ["top", "right", "bottom", "left"],
    Xe = Math.min,
    ke = Math.max,
    Mn = Math.round,
    It = Math.floor,
    ht = e => ({
        x: e,
        y: e
    }),
    Qc = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    },
    Jc = {
        start: "end",
        end: "start"
    };

function Nr(e, t, n) {
    return ke(e, Xe(t, n))
}

function at(e, t) {
    return typeof e == "function" ? e(t) : e
}

function it(e) {
    return e.split("-")[0]
}

function zt(e) {
    return e.split("-")[1]
}

function Zr(e) {
    return e === "x" ? "y" : "x"
}

function Qr(e) {
    return e === "y" ? "height" : "width"
}

function Ut(e) {
    return ["top", "bottom"].includes(it(e)) ? "y" : "x"
}

function Jr(e) {
    return Zr(Ut(e))
}

function el(e, t, n) {
    n === void 0 && (n = !1);
    const r = zt(e),
        o = Jr(e),
        a = Qr(o);
    let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (i = Nn(i)), [i, Nn(i)]
}

function tl(e) {
    const t = Nn(e);
    return [kr(e), t, kr(t)]
}

function kr(e) {
    return e.replace(/start|end/g, t => Jc[t])
}

function nl(e, t, n) {
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

function rl(e, t, n, r) {
    const o = zt(e);
    let a = nl(it(e), n === "start", r);
    return o && (a = a.map(i => i + "-" + o), t && (a = a.concat(a.map(kr)))), a
}

function Nn(e) {
    return e.replace(/left|right|bottom|top/g, t => Qc[t])
}

function ol(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}

function Ba(e) {
    return typeof e != "number" ? ol(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}

function kn(e) {
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

function To(e, t, n) {
    let {
        reference: r,
        floating: o
    } = e;
    const a = Ut(t),
        i = Jr(t),
        s = Qr(i),
        c = it(t),
        u = a === "y",
        f = r.x + r.width / 2 - o.width / 2,
        d = r.y + r.height / 2 - o.height / 2,
        p = r[s] / 2 - o[s] / 2;
    let v;
    switch (c) {
        case "top":
            v = {
                x: f,
                y: r.y - o.height
            };
            break;
        case "bottom":
            v = {
                x: f,
                y: r.y + r.height
            };
            break;
        case "right":
            v = {
                x: r.x + r.width,
                y: d
            };
            break;
        case "left":
            v = {
                x: r.x - o.width,
                y: d
            };
            break;
        default:
            v = {
                x: r.x,
                y: r.y
            }
    }
    switch (zt(t)) {
        case "start":
            v[i] -= p * (n && u ? -1 : 1);
            break;
        case "end":
            v[i] += p * (n && u ? -1 : 1);
            break
    }
    return v
}
const al = async (e, t, n) => {
    const {
        placement: r = "bottom",
        strategy: o = "absolute",
        middleware: a = [],
        platform: i
    } = n, s = a.filter(Boolean), c = await (i.isRTL == null ? void 0 : i.isRTL(t));
    let u = await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }),
        {
            x: f,
            y: d
        } = To(u, r, c),
        p = r,
        v = {},
        m = 0;
    for (let h = 0; h < s.length; h++) {
        const {
            name: g,
            fn: w
        } = s[h], {
            x: y,
            y: $,
            data: x,
            reset: E
        } = await w({
            x: f,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: o,
            middlewareData: v,
            rects: u,
            platform: i,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = y ? ? f, d = $ ? ? d, v = { ...v,
            [g]: { ...v[g],
                ...x
            }
        }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (u = E.rects === !0 ? await i.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : E.rects), {
            x: f,
            y: d
        } = To(u, p, c)), h = -1)
    }
    return {
        x: f,
        y: d,
        placement: p,
        strategy: o,
        middlewareData: v
    }
};
async function en(e, t) {
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
        boundary: u = "clippingAncestors",
        rootBoundary: f = "viewport",
        elementContext: d = "floating",
        altBoundary: p = !1,
        padding: v = 0
    } = at(t, e), m = Ba(v), g = s[p ? d === "floating" ? "reference" : "floating" : d], w = kn(await a.getClippingRect({
        element: (n = await (a.isElement == null ? void 0 : a.isElement(g))) == null || n ? g : g.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
        boundary: u,
        rootBoundary: f,
        strategy: c
    })), y = d === "floating" ? {
        x: r,
        y: o,
        width: i.floating.width,
        height: i.floating.height
    } : i.reference, $ = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating)), x = await (a.isElement == null ? void 0 : a.isElement($)) ? await (a.getScale == null ? void 0 : a.getScale($)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }, E = kn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: y,
        offsetParent: $,
        strategy: c
    }) : y);
    return {
        top: (w.top - E.top + m.top) / x.y,
        bottom: (E.bottom - w.bottom + m.bottom) / x.y,
        left: (w.left - E.left + m.left) / x.x,
        right: (E.right - w.right + m.right) / x.x
    }
}
const il = e => ({
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
                element: u,
                padding: f = 0
            } = at(e, t) || {};
            if (u == null) return {};
            const d = Ba(f),
                p = {
                    x: n,
                    y: r
                },
                v = Jr(o),
                m = Qr(v),
                h = await i.getDimensions(u),
                g = v === "y",
                w = g ? "top" : "left",
                y = g ? "bottom" : "right",
                $ = g ? "clientHeight" : "clientWidth",
                x = a.reference[m] + a.reference[v] - p[v] - a.floating[m],
                E = p[v] - a.reference[v],
                O = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u));
            let N = O ? O[$] : 0;
            (!N || !await (i.isElement == null ? void 0 : i.isElement(O))) && (N = s.floating[$] || a.floating[m]);
            const _ = x / 2 - E / 2,
                D = N / 2 - h[m] / 2 - 1,
                T = Xe(d[w], D),
                F = Xe(d[y], D),
                I = T,
                W = N - h[m] - F,
                S = N / 2 - h[m] / 2 + _,
                P = Nr(I, S, W),
                k = !c.arrow && zt(o) != null && S !== P && a.reference[m] / 2 - (S < I ? T : F) - h[m] / 2 < 0,
                C = k ? S < I ? S - I : S - W : 0;
            return {
                [v]: p[v] + C,
                data: {
                    [v]: P,
                    centerOffset: S - P - C,
                    ...k && {
                        alignmentOffset: C
                    }
                },
                reset: k
            }
        }
    }),
    sl = function(e) {
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
                    elements: u
                } = t, {
                    mainAxis: f = !0,
                    crossAxis: d = !0,
                    fallbackPlacements: p,
                    fallbackStrategy: v = "bestFit",
                    fallbackAxisSideDirection: m = "none",
                    flipAlignment: h = !0,
                    ...g
                } = at(e, t);
                if ((n = a.arrow) != null && n.alignmentOffset) return {};
                const w = it(o),
                    y = it(s) === s,
                    $ = await (c.isRTL == null ? void 0 : c.isRTL(u.floating)),
                    x = p || (y || !h ? [Nn(s)] : tl(s));
                !p && m !== "none" && x.push(...rl(s, h, m, $));
                const E = [s, ...x],
                    O = await en(t, g),
                    N = [];
                let _ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
                if (f && N.push(O[w]), d) {
                    const I = el(o, i, $);
                    N.push(O[I[0]], O[I[1]])
                }
                if (_ = [..._, {
                        placement: o,
                        overflows: N
                    }], !N.every(I => I <= 0)) {
                    var D, T;
                    const I = (((D = a.flip) == null ? void 0 : D.index) || 0) + 1,
                        W = E[I];
                    if (W) return {
                        data: {
                            index: I,
                            overflows: _
                        },
                        reset: {
                            placement: W
                        }
                    };
                    let S = (T = _.filter(P => P.overflows[0] <= 0).sort((P, k) => P.overflows[1] - k.overflows[1])[0]) == null ? void 0 : T.placement;
                    if (!S) switch (v) {
                        case "bestFit":
                            {
                                var F;
                                const P = (F = _.map(k => [k.placement, k.overflows.filter(C => C > 0).reduce((C, R) => C + R, 0)]).sort((k, C) => k[1] - C[1])[0]) == null ? void 0 : F[0];P && (S = P);
                                break
                            }
                        case "initialPlacement":
                            S = s;
                            break
                    }
                    if (o !== S) return {
                        reset: {
                            placement: S
                        }
                    }
                }
                return {}
            }
        }
    };

function Oo(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}

function Mo(e) {
    return Zc.some(t => e[t] >= 0)
}
const cl = function(e) {
    return e === void 0 && (e = {}), {
        name: "hide",
        options: e,
        async fn(t) {
            const {
                rects: n
            } = t, {
                strategy: r = "referenceHidden",
                ...o
            } = at(e, t);
            switch (r) {
                case "referenceHidden":
                    {
                        const a = await en(t, { ...o,
                                elementContext: "reference"
                            }),
                            i = Oo(a, n.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: i,
                                referenceHidden: Mo(i)
                            }
                        }
                    }
                case "escaped":
                    {
                        const a = await en(t, { ...o,
                                altBoundary: !0
                            }),
                            i = Oo(a, n.floating);
                        return {
                            data: {
                                escapedOffsets: i,
                                escaped: Mo(i)
                            }
                        }
                    }
                default:
                    return {}
            }
        }
    }
};
async function ll(e, t) {
    const {
        placement: n,
        platform: r,
        elements: o
    } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = it(n), s = zt(n), c = Ut(n) === "y", u = ["left", "top"].includes(i) ? -1 : 1, f = a && c ? -1 : 1, d = at(t, e);
    let {
        mainAxis: p,
        crossAxis: v,
        alignmentAxis: m
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
    return s && typeof m == "number" && (v = s === "end" ? m * -1 : m), c ? {
        x: v * f,
        y: p * u
    } : {
        x: p * u,
        y: v * f
    }
}
const ul = function(e) {
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
                } = t, c = await ll(t, e);
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
    dl = function(e) {
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
                        fn: g => {
                            let {
                                x: w,
                                y
                            } = g;
                            return {
                                x: w,
                                y
                            }
                        }
                    },
                    ...c
                } = at(e, t), u = {
                    x: n,
                    y: r
                }, f = await en(t, c), d = Ut(it(o)), p = Zr(d);
                let v = u[p],
                    m = u[d];
                if (a) {
                    const g = p === "y" ? "top" : "left",
                        w = p === "y" ? "bottom" : "right",
                        y = v + f[g],
                        $ = v - f[w];
                    v = Nr(y, v, $)
                }
                if (i) {
                    const g = d === "y" ? "top" : "left",
                        w = d === "y" ? "bottom" : "right",
                        y = m + f[g],
                        $ = m - f[w];
                    m = Nr(y, m, $)
                }
                const h = s.fn({ ...t,
                    [p]: v,
                    [d]: m
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
    fl = function(e) {
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
                    crossAxis: u = !0
                } = at(e, t), f = {
                    x: n,
                    y: r
                }, d = Ut(o), p = Zr(d);
                let v = f[p],
                    m = f[d];
                const h = at(s, t),
                    g = typeof h == "number" ? {
                        mainAxis: h,
                        crossAxis: 0
                    } : {
                        mainAxis: 0,
                        crossAxis: 0,
                        ...h
                    };
                if (c) {
                    const $ = p === "y" ? "height" : "width",
                        x = a.reference[p] - a.floating[$] + g.mainAxis,
                        E = a.reference[p] + a.reference[$] - g.mainAxis;
                    v < x ? v = x : v > E && (v = E)
                }
                if (u) {
                    var w, y;
                    const $ = p === "y" ? "width" : "height",
                        x = ["top", "left"].includes(it(o)),
                        E = a.reference[d] - a.floating[$] + (x && ((w = i.offset) == null ? void 0 : w[d]) || 0) + (x ? 0 : g.crossAxis),
                        O = a.reference[d] + a.reference[$] + (x ? 0 : ((y = i.offset) == null ? void 0 : y[d]) || 0) - (x ? g.crossAxis : 0);
                    m < E ? m = E : m > O && (m = O)
                }
                return {
                    [p]: v,
                    [d]: m
                }
            }
        }
    },
    vl = function(e) {
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
                } = at(e, t), c = await en(t, s), u = it(n), f = zt(n), d = Ut(n) === "y", {
                    width: p,
                    height: v
                } = r.floating;
                let m, h;
                u === "top" || u === "bottom" ? (m = u, h = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = u, m = f === "end" ? "top" : "bottom");
                const g = v - c.top - c.bottom,
                    w = p - c.left - c.right,
                    y = Xe(v - c[m], g),
                    $ = Xe(p - c[h], w),
                    x = !t.middlewareData.shift;
                let E = y,
                    O = $;
                if (d ? O = f || x ? Xe($, w) : w : E = f || x ? Xe(y, g) : g, x && !f) {
                    const _ = ke(c.left, 0),
                        D = ke(c.right, 0),
                        T = ke(c.top, 0),
                        F = ke(c.bottom, 0);
                    d ? O = p - 2 * (_ !== 0 || D !== 0 ? _ + D : ke(c.left, c.right)) : E = v - 2 * (T !== 0 || F !== 0 ? T + F : ke(c.top, c.bottom))
                }
                await i({ ...t,
                    availableWidth: O,
                    availableHeight: E
                });
                const N = await o.getDimensions(a.floating);
                return p !== N.width || v !== N.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };

function yt(e) {
    return Ha(e) ? (e.nodeName || "").toLowerCase() : "#document"
}

function Ae(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}

function lt(e) {
    var t;
    return (t = (Ha(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}

function Ha(e) {
    return e instanceof Node || e instanceof Ae(e).Node
}

function be(e) {
    return e instanceof Element || e instanceof Ae(e).Element
}

function _e(e) {
    return e instanceof HTMLElement || e instanceof Ae(e).HTMLElement
}

function Ir(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ae(e).ShadowRoot
}

function sn(e) {
    const {
        overflow: t,
        overflowX: n,
        overflowY: r,
        display: o
    } = je(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}

function pl(e) {
    return ["table", "td", "th"].includes(yt(e))
}

function eo(e) {
    const t = to(),
        n = je(e);
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}

function ml(e) {
    let t = st(e);
    for (; _e(t) && !bt(t);) {
        if (eo(t)) return t;
        t = st(t)
    }
    return null
}

function to() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}

function bt(e) {
    return ["html", "body", "#document"].includes(yt(e))
}

function je(e) {
    return Ae(e).getComputedStyle(e)
}

function Un(e) {
    return be(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.pageXOffset,
        scrollTop: e.pageYOffset
    }
}

function st(e) {
    if (yt(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || Ir(e) && e.host || lt(e);
    return Ir(t) ? t.host : t
}

function Va(e) {
    const t = st(e);
    return bt(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : _e(t) && sn(t) ? t : Va(t)
}

function mt(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = Va(e),
        a = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        i = Ae(o);
    return a ? t.concat(i, i.visualViewport || [], sn(o) ? o : [], i.frameElement && n ? mt(i.frameElement) : []) : t.concat(o, mt(o, [], n))
}

function za(e) {
    const t = je(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = _e(e),
        a = o ? e.offsetWidth : n,
        i = o ? e.offsetHeight : r,
        s = Mn(n) !== a || Mn(r) !== i;
    return s && (n = a, r = i), {
        width: n,
        height: r,
        $: s
    }
}

function no(e) {
    return be(e) ? e : e.contextElement
}

function Ft(e) {
    const t = no(e);
    if (!_e(t)) return ht(1);
    const n = t.getBoundingClientRect(),
        {
            width: r,
            height: o,
            $: a
        } = za(t);
    let i = (a ? Mn(n.width) : n.width) / r,
        s = (a ? Mn(n.height) : n.height) / o;
    return (!i || !Number.isFinite(i)) && (i = 1), (!s || !Number.isFinite(s)) && (s = 1), {
        x: i,
        y: s
    }
}
const hl = ht(0);

function Ua(e) {
    const t = Ae(e);
    return !to() || !t.visualViewport ? hl : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}

function bl(e, t, n) {
    return t === void 0 && (t = !1), !n || t && n !== Ae(e) ? !1 : t
}

function Rt(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        a = no(e);
    let i = ht(1);
    t && (r ? be(r) && (i = Ft(r)) : i = Ft(e));
    const s = bl(a, n, r) ? Ua(a) : ht(0);
    let c = (o.left + s.x) / i.x,
        u = (o.top + s.y) / i.y,
        f = o.width / i.x,
        d = o.height / i.y;
    if (a) {
        const p = Ae(a),
            v = r && be(r) ? Ae(r) : r;
        let m = p,
            h = m.frameElement;
        for (; h && r && v !== m;) {
            const g = Ft(h),
                w = h.getBoundingClientRect(),
                y = je(h),
                $ = w.left + (h.clientLeft + parseFloat(y.paddingLeft)) * g.x,
                x = w.top + (h.clientTop + parseFloat(y.paddingTop)) * g.y;
            c *= g.x, u *= g.y, f *= g.x, d *= g.y, c += $, u += x, m = Ae(h), h = m.frameElement
        }
    }
    return kn({
        width: f,
        height: d,
        x: c,
        y: u
    })
}
const gl = [":popover-open", ":modal"];

function ro(e) {
    return gl.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    })
}

function yl(e) {
    let {
        elements: t,
        rect: n,
        offsetParent: r,
        strategy: o
    } = e;
    const a = o === "fixed",
        i = lt(r),
        s = t ? ro(t.floating) : !1;
    if (r === i || s && a) return n;
    let c = {
            scrollLeft: 0,
            scrollTop: 0
        },
        u = ht(1);
    const f = ht(0),
        d = _e(r);
    if ((d || !d && !a) && ((yt(r) !== "body" || sn(i)) && (c = Un(r)), _e(r))) {
        const p = Rt(r);
        u = Ft(r), f.x = p.x + r.clientLeft, f.y = p.y + r.clientTop
    }
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - c.scrollLeft * u.x + f.x,
        y: n.y * u.y - c.scrollTop * u.y + f.y
    }
}

function wl(e) {
    return Array.from(e.getClientRects())
}

function Ga(e) {
    return Rt(lt(e)).left + Un(e).scrollLeft
}

function xl(e) {
    const t = lt(e),
        n = Un(e),
        r = e.ownerDocument.body,
        o = ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let i = -n.scrollLeft + Ga(e);
    const s = -n.scrollTop;
    return je(r).direction === "rtl" && (i += ke(t.clientWidth, r.clientWidth) - o), {
        width: o,
        height: a,
        x: i,
        y: s
    }
}

function $l(e, t) {
    const n = Ae(e),
        r = lt(e),
        o = n.visualViewport;
    let a = r.clientWidth,
        i = r.clientHeight,
        s = 0,
        c = 0;
    if (o) {
        a = o.width, i = o.height;
        const u = to();
        (!u || u && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop)
    }
    return {
        width: a,
        height: i,
        x: s,
        y: c
    }
}

function Cl(e, t) {
    const n = Rt(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        a = _e(e) ? Ft(e) : ht(1),
        i = e.clientWidth * a.x,
        s = e.clientHeight * a.y,
        c = o * a.x,
        u = r * a.y;
    return {
        width: i,
        height: s,
        x: c,
        y: u
    }
}

function No(e, t, n) {
    let r;
    if (t === "viewport") r = $l(e, n);
    else if (t === "document") r = xl(lt(e));
    else if (be(t)) r = Cl(t, n);
    else {
        const o = Ua(e);
        r = { ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return kn(r)
}

function Ya(e, t) {
    const n = st(e);
    return n === t || !be(n) || bt(n) ? !1 : je(n).position === "fixed" || Ya(n, t)
}

function El(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = mt(e, [], !1).filter(s => be(s) && yt(s) !== "body"),
        o = null;
    const a = je(e).position === "fixed";
    let i = a ? st(e) : e;
    for (; be(i) && !bt(i);) {
        const s = je(i),
            c = eo(i);
        !c && s.position === "fixed" && (o = null), (a ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || sn(i) && !c && Ya(e, i)) ? r = r.filter(f => f !== i) : o = s, i = st(i)
    }
    return t.set(e, r), r
}

function Rl(e) {
    let {
        element: t,
        boundary: n,
        rootBoundary: r,
        strategy: o
    } = e;
    const i = [...n === "clippingAncestors" ? ro(t) ? [] : El(t, this._c) : [].concat(n), r],
        s = i[0],
        c = i.reduce((u, f) => {
            const d = No(t, f, o);
            return u.top = ke(d.top, u.top), u.right = Xe(d.right, u.right), u.bottom = Xe(d.bottom, u.bottom), u.left = ke(d.left, u.left), u
        }, No(t, s, o));
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top
    }
}

function Sl(e) {
    const {
        width: t,
        height: n
    } = za(e);
    return {
        width: t,
        height: n
    }
}

function Pl(e, t, n) {
    const r = _e(t),
        o = lt(t),
        a = n === "fixed",
        i = Rt(e, !0, a, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const c = ht(0);
    if (r || !r && !a)
        if ((yt(t) !== "body" || sn(o)) && (s = Un(t)), r) {
            const d = Rt(t, !0, a, t);
            c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop
        } else o && (c.x = Ga(o));
    const u = i.left + s.scrollLeft - c.x,
        f = i.top + s.scrollTop - c.y;
    return {
        x: u,
        y: f,
        width: i.width,
        height: i.height
    }
}

function ar(e) {
    return je(e).position === "static"
}

function ko(e, t) {
    return !_e(e) || je(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}

function Ka(e, t) {
    const n = Ae(e);
    if (ro(e)) return n;
    if (!_e(e)) {
        let o = st(e);
        for (; o && !bt(o);) {
            if (be(o) && !ar(o)) return o;
            o = st(o)
        }
        return n
    }
    let r = ko(e, t);
    for (; r && pl(r) && ar(r);) r = ko(r, t);
    return r && bt(r) && ar(r) && !eo(r) ? n : r || ml(e) || n
}
const _l = async function(e) {
    const t = this.getOffsetParent || Ka,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: Pl(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};

function Dl(e) {
    return je(e).direction === "rtl"
}
const Tl = {
    convertOffsetParentRelativeRectToViewportRelativeRect: yl,
    getDocumentElement: lt,
    getClippingRect: Rl,
    getOffsetParent: Ka,
    getElementRects: _l,
    getClientRects: wl,
    getDimensions: Sl,
    getScale: Ft,
    isElement: be,
    isRTL: Dl
};

function Ol(e, t) {
    let n = null,
        r;
    const o = lt(e);

    function a() {
        var s;
        clearTimeout(r), (s = n) == null || s.disconnect(), n = null
    }

    function i(s, c) {
        s === void 0 && (s = !1), c === void 0 && (c = 1), a();
        const {
            left: u,
            top: f,
            width: d,
            height: p
        } = e.getBoundingClientRect();
        if (s || t(), !d || !p) return;
        const v = It(f),
            m = It(o.clientWidth - (u + d)),
            h = It(o.clientHeight - (f + p)),
            g = It(u),
            y = {
                rootMargin: -v + "px " + -m + "px " + -h + "px " + -g + "px",
                threshold: ke(0, Xe(1, c)) || 1
            };
        let $ = !0;

        function x(E) {
            const O = E[0].intersectionRatio;
            if (O !== c) {
                if (!$) return i();
                O ? i(!1, O) : r = setTimeout(() => {
                    i(!1, 1e-7)
                }, 1e3)
            }
            $ = !1
        }
        try {
            n = new IntersectionObserver(x, { ...y,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(x, y)
        }
        n.observe(e)
    }
    return i(!0), a
}

function qa(e, t, n, r) {
    r === void 0 && (r = {});
    const {
        ancestorScroll: o = !0,
        ancestorResize: a = !0,
        elementResize: i = typeof ResizeObserver == "function",
        layoutShift: s = typeof IntersectionObserver == "function",
        animationFrame: c = !1
    } = r, u = no(e), f = o || a ? [...u ? mt(u) : [], ...mt(t)] : [];
    f.forEach(w => {
        o && w.addEventListener("scroll", n, {
            passive: !0
        }), a && w.addEventListener("resize", n)
    });
    const d = u && s ? Ol(u, n) : null;
    let p = -1,
        v = null;
    i && (v = new ResizeObserver(w => {
        let [y] = w;
        y && y.target === u && v && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
            var $;
            ($ = v) == null || $.observe(t)
        })), n()
    }), u && !c && v.observe(u), v.observe(t));
    let m, h = c ? Rt(e) : null;
    c && g();

    function g() {
        const w = Rt(e);
        h && (w.x !== h.x || w.y !== h.y || w.width !== h.width || w.height !== h.height) && n(), h = w, m = requestAnimationFrame(g)
    }
    return n(), () => {
        var w;
        f.forEach(y => {
            o && y.removeEventListener("scroll", n), a && y.removeEventListener("resize", n)
        }), d == null || d(), (w = v) == null || w.disconnect(), v = null, c && cancelAnimationFrame(m)
    }
}
const Ml = ul,
    Nl = dl,
    kl = sl,
    Il = vl,
    Al = cl,
    Io = il,
    Fl = fl,
    Ll = (e, t, n) => {
        const r = new Map,
            o = {
                platform: Tl,
                ...n
            },
            a = { ...o.platform,
                _c: r
            };
        return al(e, t, { ...o,
            platform: a
        })
    };
var Sn = typeof document < "u" ? l.useLayoutEffect : l.useEffect;

function In(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!In(e[r], t[r])) return !1;
            return !0
        }
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0;) {
            const a = o[r];
            if (!(a === "_owner" && e.$$typeof) && !In(e[a], t[a])) return !1
        }
        return !0
    }
    return e !== e && t !== t
}

function Xa(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}

function Ao(e, t) {
    const n = Xa(e);
    return Math.round(t * n) / n
}

function Fo(e) {
    const t = l.useRef(e);
    return Sn(() => {
        t.current = e
    }), t
}

function Za(e) {
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
        open: u
    } = e, [f, d] = l.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    }), [p, v] = l.useState(r);
    In(p, r) || v(r);
    const [m, h] = l.useState(null), [g, w] = l.useState(null), y = l.useCallback(C => {
        C !== O.current && (O.current = C, h(C))
    }, []), $ = l.useCallback(C => {
        C !== N.current && (N.current = C, w(C))
    }, []), x = a || m, E = i || g, O = l.useRef(null), N = l.useRef(null), _ = l.useRef(f), D = c != null, T = Fo(c), F = Fo(o), I = l.useCallback(() => {
        if (!O.current || !N.current) return;
        const C = {
            placement: t,
            strategy: n,
            middleware: p
        };
        F.current && (C.platform = F.current), Ll(O.current, N.current, C).then(R => {
            const U = { ...R,
                isPositioned: !0
            };
            W.current && !In(_.current, U) && (_.current = U, Hn.flushSync(() => {
                d(U)
            }))
        })
    }, [p, t, n, F]);
    Sn(() => {
        u === !1 && _.current.isPositioned && (_.current.isPositioned = !1, d(C => ({ ...C,
            isPositioned: !1
        })))
    }, [u]);
    const W = l.useRef(!1);
    Sn(() => (W.current = !0, () => {
        W.current = !1
    }), []), Sn(() => {
        if (x && (O.current = x), E && (N.current = E), x && E) {
            if (T.current) return T.current(x, E, I);
            I()
        }
    }, [x, E, I, T, D]);
    const S = l.useMemo(() => ({
            reference: O,
            floating: N,
            setReference: y,
            setFloating: $
        }), [y, $]),
        P = l.useMemo(() => ({
            reference: x,
            floating: E
        }), [x, E]),
        k = l.useMemo(() => {
            const C = {
                position: n,
                left: 0,
                top: 0
            };
            if (!P.floating) return C;
            const R = Ao(P.floating, f.x),
                U = Ao(P.floating, f.y);
            return s ? { ...C,
                transform: "translate(" + R + "px, " + U + "px)",
                ...Xa(P.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: n,
                left: R,
                top: U
            }
        }, [n, s, P.floating, f.x, f.y]);
    return l.useMemo(() => ({ ...f,
        update: I,
        refs: S,
        elements: P,
        floatingStyles: k
    }), [f, I, S, P, k])
}
const jl = e => {
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
                return r && t(r) ? r.current != null ? Io({
                    element: r.current,
                    padding: o
                }).fn(n) : {} : r ? Io({
                    element: r,
                    padding: o
                }).fn(n) : {}
            }
        }
    },
    Qa = (e, t) => ({ ...Ml(e),
        options: [e, t]
    }),
    Wl = (e, t) => ({ ...Nl(e),
        options: [e, t]
    }),
    Bl = (e, t) => ({ ...Fl(e),
        options: [e, t]
    }),
    Ja = (e, t) => ({ ...kl(e),
        options: [e, t]
    }),
    ei = (e, t) => ({ ...Il(e),
        options: [e, t]
    }),
    Hl = (e, t) => ({ ...Al(e),
        options: [e, t]
    }),
    Vl = (e, t) => ({ ...jl(e),
        options: [e, t]
    });
const ti = "Popper",
    [ni, Gn] = Qe(ti),
    [zl, ri] = ni(ti),
    Ul = e => {
        const {
            __scopePopper: t,
            children: n
        } = e, [r, o] = l.useState(null);
        return l.createElement(zl, {
            scope: t,
            anchor: r,
            onAnchorChange: o
        }, n)
    },
    Gl = "PopperAnchor",
    Yl = l.forwardRef((e, t) => {
        const {
            __scopePopper: n,
            virtualRef: r,
            ...o
        } = e, a = ri(Gl, n), i = l.useRef(null), s = Ee(t, i);
        return l.useEffect(() => {
            a.onAnchorChange((r == null ? void 0 : r.current) || i.current)
        }), r ? null : l.createElement(fe.div, j({}, o, {
            ref: s
        }))
    }),
    oi = "PopperContent",
    [Kl, ib] = ni(oi),
    ql = l.forwardRef((e, t) => {
        var n, r, o, a, i, s, c, u;
        const {
            __scopePopper: f,
            side: d = "bottom",
            sideOffset: p = 0,
            align: v = "center",
            alignOffset: m = 0,
            arrowPadding: h = 0,
            avoidCollisions: g = !0,
            collisionBoundary: w = [],
            collisionPadding: y = 0,
            sticky: $ = "partial",
            hideWhenDetached: x = !1,
            updatePositionStrategy: E = "optimized",
            onPlaced: O,
            ...N
        } = e, _ = ri(oi, f), [D, T] = l.useState(null), F = Ee(t, te => T(te)), [I, W] = l.useState(null), S = Yr(I), P = (n = S == null ? void 0 : S.width) !== null && n !== void 0 ? n : 0, k = (r = S == null ? void 0 : S.height) !== null && r !== void 0 ? r : 0, C = d + (v !== "center" ? "-" + v : ""), R = typeof y == "number" ? y : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...y
        }, U = Array.isArray(w) ? w : [w], A = U.length > 0, L = {
            padding: R,
            boundary: U.filter(Xl),
            altBoundary: A
        }, {
            refs: H,
            floatingStyles: K,
            placement: ee,
            isPositioned: q,
            middlewareData: Z
        } = Za({
            strategy: "fixed",
            placement: C,
            whileElementsMounted: (...te) => qa(...te, {
                animationFrame: E === "always"
            }),
            elements: {
                reference: _.anchor
            },
            middleware: [Qa({
                mainAxis: p + k,
                alignmentAxis: m
            }), g && Wl({
                mainAxis: !0,
                crossAxis: !1,
                limiter: $ === "partial" ? Bl() : void 0,
                ...L
            }), g && Ja({ ...L
            }), ei({ ...L,
                apply: ({
                    elements: te,
                    rects: de,
                    availableWidth: Me,
                    availableHeight: le
                }) => {
                    const {
                        width: z,
                        height: Re
                    } = de.reference, $e = te.floating.style;
                    $e.setProperty("--radix-popper-available-width", `${Me}px`), $e.setProperty("--radix-popper-available-height", `${le}px`), $e.setProperty("--radix-popper-anchor-width", `${z}px`), $e.setProperty("--radix-popper-anchor-height", `${Re}px`)
                }
            }), I && Vl({
                element: I,
                padding: h
            }), Zl({
                arrowWidth: P,
                arrowHeight: k
            }), x && Hl({
                strategy: "referenceHidden",
                ...L
            })]
        }), [re, we] = ai(ee), pe = ot(O);
        Wt(() => {
            q && (pe == null || pe())
        }, [q, pe]);
        const B = (o = Z.arrow) === null || o === void 0 ? void 0 : o.x,
            V = (a = Z.arrow) === null || a === void 0 ? void 0 : a.y,
            se = ((i = Z.arrow) === null || i === void 0 ? void 0 : i.centerOffset) !== 0,
            [X, oe] = l.useState();
        return Wt(() => {
            D && oe(window.getComputedStyle(D).zIndex)
        }, [D]), l.createElement("div", {
            ref: H.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: { ...K,
                transform: q ? K.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: X,
                "--radix-popper-transform-origin": [(s = Z.transformOrigin) === null || s === void 0 ? void 0 : s.x, (c = Z.transformOrigin) === null || c === void 0 ? void 0 : c.y].join(" ")
            },
            dir: e.dir
        }, l.createElement(Kl, {
            scope: f,
            placedSide: re,
            onArrowChange: W,
            arrowX: B,
            arrowY: V,
            shouldHideArrow: se
        }, l.createElement(fe.div, j({
            "data-side": re,
            "data-align": we
        }, N, {
            ref: F,
            style: { ...N.style,
                animation: q ? void 0 : "none",
                opacity: (u = Z.hide) !== null && u !== void 0 && u.referenceHidden ? 0 : void 0
            }
        }))))
    });

function Xl(e) {
    return e !== null
}
const Zl = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var n, r, o, a, i;
        const {
            placement: s,
            rects: c,
            middlewareData: u
        } = t, d = ((n = u.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, p = d ? 0 : e.arrowWidth, v = d ? 0 : e.arrowHeight, [m, h] = ai(s), g = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[h], w = ((r = (o = u.arrow) === null || o === void 0 ? void 0 : o.x) !== null && r !== void 0 ? r : 0) + p / 2, y = ((a = (i = u.arrow) === null || i === void 0 ? void 0 : i.y) !== null && a !== void 0 ? a : 0) + v / 2;
        let $ = "",
            x = "";
        return m === "bottom" ? ($ = d ? g : `${w}px`, x = `${-v}px`) : m === "top" ? ($ = d ? g : `${w}px`, x = `${c.floating.height+v}px`) : m === "right" ? ($ = `${-v}px`, x = d ? g : `${y}px`) : m === "left" && ($ = `${c.floating.width+v}px`, x = d ? g : `${y}px`), {
            data: {
                x: $,
                y: x
            }
        }
    }
});

function ai(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n]
}
const ii = Ul,
    si = Yl,
    ci = ql,
    li = l.forwardRef((e, t) => {
        var n;
        const {
            container: r = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body,
            ...o
        } = e;
        return r ? js.createPortal(l.createElement(fe.div, j({}, o, {
            ref: t
        })), r) : null
    });

function Ql(e, t) {
    return l.useReducer((n, r) => {
        const o = t[n][r];
        return o ? ? n
    }, e)
}
const wt = e => {
    const {
        present: t,
        children: n
    } = e, r = Jl(t), o = typeof n == "function" ? n({
        present: r.isPresent
    }) : l.Children.only(n), a = Ee(r.ref, o.ref);
    return typeof n == "function" || r.isPresent ? l.cloneElement(o, {
        ref: a
    }) : null
};
wt.displayName = "Presence";

function Jl(e) {
    const [t, n] = l.useState(), r = l.useRef({}), o = l.useRef(e), a = l.useRef("none"), i = e ? "mounted" : "unmounted", [s, c] = Ql(i, {
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
    return l.useEffect(() => {
        const u = mn(r.current);
        a.current = s === "mounted" ? u : "none"
    }, [s]), Wt(() => {
        const u = r.current,
            f = o.current;
        if (f !== e) {
            const p = a.current,
                v = mn(u);
            e ? c("MOUNT") : v === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(f && p !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e
        }
    }, [e, c]), Wt(() => {
        if (t) {
            const u = d => {
                    const v = mn(r.current).includes(d.animationName);
                    d.target === t && v && Hn.flushSync(() => c("ANIMATION_END"))
                },
                f = d => {
                    d.target === t && (a.current = mn(r.current))
                };
            return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", u), t.addEventListener("animationend", u), () => {
                t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", u), t.removeEventListener("animationend", u)
            }
        } else c("ANIMATION_END")
    }, [t, c]), {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: l.useCallback(u => {
            u && (r.current = getComputedStyle(u)), n(u)
        }, [])
    }
}

function mn(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
const eu = l.forwardRef((e, t) => l.createElement(fe.span, j({}, e, {
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
    tu = eu,
    [Yn, sb] = Qe("Tooltip", [Gn]),
    oo = Gn(),
    nu = "TooltipProvider",
    ru = 700,
    Ar = "tooltip.open",
    [ou, ao] = Yn(nu),
    au = e => {
        const {
            __scopeTooltip: t,
            delayDuration: n = ru,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
        } = e, [i, s] = l.useState(!0), c = l.useRef(!1), u = l.useRef(0);
        return l.useEffect(() => {
            const f = u.current;
            return () => window.clearTimeout(f)
        }, []), l.createElement(ou, {
            scope: t,
            isOpenDelayed: i,
            delayDuration: n,
            onOpen: l.useCallback(() => {
                window.clearTimeout(u.current), s(!1)
            }, []),
            onClose: l.useCallback(() => {
                window.clearTimeout(u.current), u.current = window.setTimeout(() => s(!0), r)
            }, [r]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: l.useCallback(f => {
                c.current = f
            }, []),
            disableHoverableContent: o
        }, a)
    },
    io = "Tooltip",
    [iu, Kn] = Yn(io),
    su = e => {
        const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o = !1,
            onOpenChange: a,
            disableHoverableContent: i,
            delayDuration: s
        } = e, c = ao(io, e.__scopeTooltip), u = oo(t), [f, d] = l.useState(null), p = At(), v = l.useRef(0), m = i ? ? c.disableHoverableContent, h = s ? ? c.delayDuration, g = l.useRef(!1), [w = !1, y] = ct({
            prop: r,
            defaultProp: o,
            onChange: N => {
                N ? (c.onOpen(), document.dispatchEvent(new CustomEvent(Ar))) : c.onClose(), a == null || a(N)
            }
        }), $ = l.useMemo(() => w ? g.current ? "delayed-open" : "instant-open" : "closed", [w]), x = l.useCallback(() => {
            window.clearTimeout(v.current), g.current = !1, y(!0)
        }, [y]), E = l.useCallback(() => {
            window.clearTimeout(v.current), y(!1)
        }, [y]), O = l.useCallback(() => {
            window.clearTimeout(v.current), v.current = window.setTimeout(() => {
                g.current = !0, y(!0)
            }, h)
        }, [h, y]);
        return l.useEffect(() => () => window.clearTimeout(v.current), []), l.createElement(ii, u, l.createElement(iu, {
            scope: t,
            contentId: p,
            open: w,
            stateAttribute: $,
            trigger: f,
            onTriggerChange: d,
            onTriggerEnter: l.useCallback(() => {
                c.isOpenDelayed ? O() : x()
            }, [c.isOpenDelayed, O, x]),
            onTriggerLeave: l.useCallback(() => {
                m ? E() : window.clearTimeout(v.current)
            }, [E, m]),
            onOpen: x,
            onClose: E,
            disableHoverableContent: m
        }, n))
    },
    Lo = "TooltipTrigger",
    cu = l.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            ...r
        } = e, o = Kn(Lo, n), a = ao(Lo, n), i = oo(n), s = l.useRef(null), c = Ee(t, s, o.onTriggerChange), u = l.useRef(!1), f = l.useRef(!1), d = l.useCallback(() => u.current = !1, []);
        return l.useEffect(() => () => document.removeEventListener("pointerup", d), [d]), l.createElement(si, j({
            asChild: !0
        }, i), l.createElement(fe.button, j({
            "aria-describedby": o.open ? o.contentId : void 0,
            "data-state": o.stateAttribute
        }, r, {
            ref: c,
            onPointerMove: ne(e.onPointerMove, p => {
                p.pointerType !== "touch" && !f.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), f.current = !0)
            }),
            onPointerLeave: ne(e.onPointerLeave, () => {
                o.onTriggerLeave(), f.current = !1
            }),
            onPointerDown: ne(e.onPointerDown, () => {
                u.current = !0, document.addEventListener("pointerup", d, {
                    once: !0
                })
            }),
            onFocus: ne(e.onFocus, () => {
                u.current || o.onOpen()
            }),
            onBlur: ne(e.onBlur, o.onClose),
            onClick: ne(e.onClick, o.onClose)
        })))
    }),
    lu = "TooltipPortal",
    [cb, uu] = Yn(lu, {
        forceMount: void 0
    }),
    tn = "TooltipContent",
    du = l.forwardRef((e, t) => {
        const n = uu(tn, e.__scopeTooltip),
            {
                forceMount: r = n.forceMount,
                side: o = "top",
                ...a
            } = e,
            i = Kn(tn, e.__scopeTooltip);
        return l.createElement(wt, {
            present: r || i.open
        }, i.disableHoverableContent ? l.createElement(ui, j({
            side: o
        }, a, {
            ref: t
        })) : l.createElement(fu, j({
            side: o
        }, a, {
            ref: t
        })))
    }),
    fu = l.forwardRef((e, t) => {
        const n = Kn(tn, e.__scopeTooltip),
            r = ao(tn, e.__scopeTooltip),
            o = l.useRef(null),
            a = Ee(t, o),
            [i, s] = l.useState(null),
            {
                trigger: c,
                onClose: u
            } = n,
            f = o.current,
            {
                onPointerInTransitChange: d
            } = r,
            p = l.useCallback(() => {
                s(null), d(!1)
            }, [d]),
            v = l.useCallback((m, h) => {
                const g = m.currentTarget,
                    w = {
                        x: m.clientX,
                        y: m.clientY
                    },
                    y = pu(w, g.getBoundingClientRect()),
                    $ = mu(w, y),
                    x = hu(h.getBoundingClientRect()),
                    E = gu([...$, ...x]);
                s(E), d(!0)
            }, [d]);
        return l.useEffect(() => () => p(), [p]), l.useEffect(() => {
            if (c && f) {
                const m = g => v(g, f),
                    h = g => v(g, c);
                return c.addEventListener("pointerleave", m), f.addEventListener("pointerleave", h), () => {
                    c.removeEventListener("pointerleave", m), f.removeEventListener("pointerleave", h)
                }
            }
        }, [c, f, v, p]), l.useEffect(() => {
            if (i) {
                const m = h => {
                    const g = h.target,
                        w = {
                            x: h.clientX,
                            y: h.clientY
                        },
                        y = (c == null ? void 0 : c.contains(g)) || (f == null ? void 0 : f.contains(g)),
                        $ = !bu(w, i);
                    y ? p() : $ && (p(), u())
                };
                return document.addEventListener("pointermove", m), () => document.removeEventListener("pointermove", m)
            }
        }, [c, f, i, u, p]), l.createElement(ui, j({}, e, {
            ref: a
        }))
    }),
    [vu, lb] = Yn(io, {
        isInside: !1
    }),
    ui = l.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            ...s
        } = e, c = Kn(tn, n), u = oo(n), {
            onClose: f
        } = c;
        return l.useEffect(() => (document.addEventListener(Ar, f), () => document.removeEventListener(Ar, f)), [f]), l.useEffect(() => {
            if (c.trigger) {
                const d = p => {
                    const v = p.target;
                    v != null && v.contains(c.trigger) && f()
                };
                return window.addEventListener("scroll", d, {
                    capture: !0
                }), () => window.removeEventListener("scroll", d, {
                    capture: !0
                })
            }
        }, [c.trigger, f]), l.createElement(Xr, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: i,
            onFocusOutside: d => d.preventDefault(),
            onDismiss: f
        }, l.createElement(ci, j({
            "data-state": c.stateAttribute
        }, u, s, {
            ref: t,
            style: { ...s.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            }
        }), l.createElement(_a, null, r), l.createElement(vu, {
            scope: n,
            isInside: !0
        }, l.createElement(tu, {
            id: c.contentId,
            role: "tooltip"
        }, o || r))))
    });

function pu(e, t) {
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

function mu(e, t, n = 5) {
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

function hu(e) {
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

function bu(e, t) {
    const {
        x: n,
        y: r
    } = e;
    let o = !1;
    for (let a = 0, i = t.length - 1; a < t.length; i = a++) {
        const s = t[a].x,
            c = t[a].y,
            u = t[i].x,
            f = t[i].y;
        c > r != f > r && n < (u - s) * (r - c) / (f - c) + s && (o = !o)
    }
    return o
}

function gu(e) {
    const t = e.slice();
    return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), yu(t)
}

function yu(e) {
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
const wu = au,
    xu = su,
    $u = cu,
    Cu = du;
var Eu = l.forwardRef((e, t) => {
        var n = e,
            {
                content: r,
                className: o,
                defaultOpen: a,
                open: i,
                onOpenChange: s,
                delayDuration: c = 300,
                disableHoverableContent: u,
                children: f
            } = n,
            d = gt(n, ["content", "className", "defaultOpen", "open", "onOpenChange", "delayDuration", "disableHoverableContent", "children"]);
        return b.jsx(wu, {
            children: b.jsxs(xu, {
                defaultOpen: a,
                open: i,
                onOpenChange: s,
                delayDuration: c,
                disableHoverableContent: u,
                children: [b.jsx($u, {
                    asChild: !0,
                    children: f
                }), b.jsx(Cu, rt(he({
                    ref: t,
                    className: ve("bg-body-lighter animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-auto max-w-xs rounded-md p-2", o),
                    sideOffset: 4
                }, d), {
                    children: r
                }))]
            })
        })
    }),
    ub = Eu,
    Ru = ({
        width: e = 16,
        className: t = ""
    }) => b.jsxs("svg", {
        role: "status",
        "data-testid": "circle-spinner",
        className: ve("aspect-1 inline-block animate-spin align-middle", t),
        width: e,
        viewBox: "0 0 100 101",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [b.jsx("path", {
            d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
            className: "fill-black/20 dark:fill-white/20"
        }), b.jsx("path", {
            d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
            fill: "currentColor"
        })]
    }),
    Su = Ru,
    Pu = {
        primary: "bg-primary hover:bg-primary-light active:bg-primary-dark ring-primary text-primary-contrast disabled:bg-zinc-800",
        secondary: "bg-secondary hover:bg-secondary-light active:bg-secondary-dark ring-secondary text-secondary-contrast disabled:bg-zinc-800",
        tertiary: "bg-tertiary hover:bg-tertiary-light active:bg-tertiary-dark ring-tertiary text-tertiary-contrast disabled:bg-zinc-800",
        error: "bg-error hover:bg-error-light active:bg-error-dark ring-error text-error-contrast disabled:bg-zinc-800",
        success: "bg-success hover:bg-success-light active:bg-success-dark ring-success text-success-contrast disabled:bg-zinc-800",
        white: "bg-white hover:bg-gray-50 active:bg-white ring-white text-black disabled:bg-zinc-800",
        black: "bg-black hover:bg-[#0e0e0e] active:bg-black ring-black text-white disabled:bg-zinc-800",
        transparent: "bg-transparent ring-transparent text-text"
    },
    _u = {
        primary: "border-primary hover:bg-primary-light/20 active:bg-primary/30 text-primary disabled:border-gray-300 disabled:bg-gray-200",
        secondary: "border-secondary hover:bg-secondary-light/20 active:bg-secondary/30 text-secondary disabled:border-gray-300 disabled:bg-gray-200",
        tertiary: "border-tertiary hover:bg-tertiary-light/20 active:bg-tertiary/30 text-tertiary disabled:border-gray-300 disabled:bg-gray-200",
        error: "border-error hover:bg-error-light/20 active:bg-error/30 text-error disabled:border-gray-300 disabled:bg-gray-200",
        success: "border-success hover:bg-success-light/5 active:bg-success-light/10 ring-success text-success-dark disabled:border-gray-300",
        white: "border-text hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-gray-300 disabled:bg-zinc-800/50 disabled:border-zinc-600 disabled:text-red-600",
        black: "border-text hover:bg-text/5 active:bg-text/10 ring-text text-text disabled:border-gray-300",
        transparent: "border-transparent ring-transparent text-black"
    },
    Du = {
        primary: "hover:bg-primary-light/5 active:bg-primary-light/10 ring-primary text-primary",
        secondary: "hover:bg-secondary-light/5 active:bg-secondary-light/10 ring-secondary text-secondary",
        tertiary: "hover:bg-tertiary-light/5 active:bg-tertiary-light/10 ring-tertiary text-tertiary",
        error: "hover:bg-error-light/5 active:bg-error-light/10 ring-error text-error",
        success: "hover:bg-success-light/5 active:bg-success-light/10 ring-success text-success",
        white: "hover:bg-text/5 active:bg-text/10 ring-text text-white disabled:bg-transparent",
        black: "hover:bg-text/5 active:bg-text/10 ring-text text-text-dark disabled:bg-transparent",
        transparent: "ring-text text-text disabled:bg-transparent"
    };

function Tu(e, t) {
    var n = e,
        {
            children: r,
            as: o,
            theme: a = "primary",
            shape: i = "solid",
            loading: s,
            disabled: c,
            className: u = "",
            arrow: f,
            arrowColor: d,
            rounded: p = !0,
            phill: v = !1,
            shiny: m,
            queueProtected: h,
            overloads: g = {}
        } = n,
        w = gt(n, ["children", "as", "theme", "shape", "loading", "disabled", "className", "arrow", "arrowColor", "rounded", "phill", "shiny", "queueProtected", "overloads"]);
    const y = h,
        $ = c ? "button" : y ? "a" : o || "button",
        x = l.useMemo(() => {
            switch (i) {
                case "outlined":
                    return he(he({}, _u), g.OUTLINED)[a] + " border focus:ring-1";
                case "text":
                    return he(he({}, Du), g.TEXT)[a] + " focus:ring-1";
                default:
                    return he(he({}, Pu), g.SOLID)[a] + " focus:ring-1 ring-offset-2"
            }
        }, [a, i, g]);
    return b.jsxs($, rt(he(he({
        className: ve(x, "ring-offset-body relative inline-flex items-center justify-center gap-1 overflow-hidden px-4 py-2 text-center transition", "disabled:bg-input/10 disabled:text-text/40 focus:outline-none disabled:cursor-not-allowed", v ? "rounded-full" : p ? "rounded-md" : "", u),
        disabled: s || c
    }, w), y ? {
        href: w.to
    } : {}), {
        ref: t,
        children: [m && b.jsx("div", {
            className: "animate-shiny-rippon rtl:animate-shiny-rippon-rtl absolute inset-0 h-20",
            children: b.jsx("div", {
                className: "absolute inset-0 h-14 -rotate-45 bg-gradient-to-b from-white/10 via-white/50 to-white/10"
            })
        }), s && b.jsx(Su, {}), " ", r, f && b.jsx("svg", {
            width: "18",
            height: "18",
            viewBox: "0 0 32 32",
            fill: "none",
            className: "shrink-0 ltr:rotate-180",
            children: b.jsx("path", {
                d: "M20.9426 8.94263C21.4633 8.42194 21.4633 7.57772 20.9426 7.05703C20.4219 6.53633 19.5777 6.53633 19.057 7.05703L11.057 15.057C10.5523 15.5618 10.5346 16.3745 11.017 16.9007L18.3503 24.9007C18.8478 25.4435 19.6913 25.4802 20.2341 24.9826C20.7769 24.485 20.8136 23.6416 20.316 23.0988L13.8453 16.0399L20.9426 8.94263Z",
                fill: d || "currentColor"
            })
        })]
    }))
}
var Ou = l.forwardRef(Tu),
    di = Ou;
let ir = 0;

function fi() {
    l.useEffect(() => {
        var e, t;
        const n = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : jo()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : jo()), ir++, () => {
            ir === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(r => r.remove()), ir--
        }
    }, [])
}

function jo() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
}
const sr = "focusScope.autoFocusOnMount",
    cr = "focusScope.autoFocusOnUnmount",
    Wo = {
        bubbles: !1,
        cancelable: !0
    },
    vi = l.forwardRef((e, t) => {
        const {
            loop: n = !1,
            trapped: r = !1,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a,
            ...i
        } = e, [s, c] = l.useState(null), u = ot(o), f = ot(a), d = l.useRef(null), p = Ee(t, h => c(h)), v = l.useRef({
            paused: !1,
            pause() {
                this.paused = !0
            },
            resume() {
                this.paused = !1
            }
        }).current;
        l.useEffect(() => {
            if (r) {
                let h = function($) {
                        if (v.paused || !s) return;
                        const x = $.target;
                        s.contains(x) ? d.current = x : dt(d.current, {
                            select: !0
                        })
                    },
                    g = function($) {
                        if (v.paused || !s) return;
                        const x = $.relatedTarget;
                        x !== null && (s.contains(x) || dt(d.current, {
                            select: !0
                        }))
                    },
                    w = function($) {
                        if (document.activeElement === document.body)
                            for (const E of $) E.removedNodes.length > 0 && dt(s)
                    };
                document.addEventListener("focusin", h), document.addEventListener("focusout", g);
                const y = new MutationObserver(w);
                return s && y.observe(s, {
                    childList: !0,
                    subtree: !0
                }), () => {
                    document.removeEventListener("focusin", h), document.removeEventListener("focusout", g), y.disconnect()
                }
            }
        }, [r, s, v.paused]), l.useEffect(() => {
            if (s) {
                Ho.add(v);
                const h = document.activeElement;
                if (!s.contains(h)) {
                    const w = new CustomEvent(sr, Wo);
                    s.addEventListener(sr, u), s.dispatchEvent(w), w.defaultPrevented || (Mu(Fu(pi(s)), {
                        select: !0
                    }), document.activeElement === h && dt(s))
                }
                return () => {
                    s.removeEventListener(sr, u), setTimeout(() => {
                        const w = new CustomEvent(cr, Wo);
                        s.addEventListener(cr, f), s.dispatchEvent(w), w.defaultPrevented || dt(h ? ? document.body, {
                            select: !0
                        }), s.removeEventListener(cr, f), Ho.remove(v)
                    }, 0)
                }
            }
        }, [s, u, f, v]);
        const m = l.useCallback(h => {
            if (!n && !r || v.paused) return;
            const g = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
                w = document.activeElement;
            if (g && w) {
                const y = h.currentTarget,
                    [$, x] = Nu(y);
                $ && x ? !h.shiftKey && w === x ? (h.preventDefault(), n && dt($, {
                    select: !0
                })) : h.shiftKey && w === $ && (h.preventDefault(), n && dt(x, {
                    select: !0
                })) : w === y && h.preventDefault()
            }
        }, [n, r, v.paused]);
        return l.createElement(fe.div, j({
            tabIndex: -1
        }, i, {
            ref: p,
            onKeyDown: m
        }))
    });

function Mu(e, {
    select: t = !1
} = {}) {
    const n = document.activeElement;
    for (const r of e)
        if (dt(r, {
                select: t
            }), document.activeElement !== n) return
}

function Nu(e) {
    const t = pi(e),
        n = Bo(t, e),
        r = Bo(t.reverse(), e);
    return [n, r]
}

function pi(e) {
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

function Bo(e, t) {
    for (const n of e)
        if (!ku(n, {
                upTo: t
            })) return n
}

function ku(e, {
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

function Iu(e) {
    return e instanceof HTMLInputElement && "select" in e
}

function dt(e, {
    select: t = !1
} = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }), e !== n && Iu(e) && t && e.select()
    }
}
const Ho = Au();

function Au() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), e = Vo(e, t), e.unshift(t)
        },
        remove(t) {
            var n;
            e = Vo(e, t), (n = e[0]) === null || n === void 0 || n.resume()
        }
    }
}

function Vo(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n
}

function Fu(e) {
    return e.filter(t => t.tagName !== "A")
}
var Lu = function(e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body
    },
    Tt = new WeakMap,
    hn = new WeakMap,
    bn = {},
    lr = 0,
    mi = function(e) {
        return e && (e.host || mi(e.parentNode))
    },
    ju = function(e, t) {
        return t.map(function(n) {
            if (e.contains(n)) return n;
            var r = mi(n);
            return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
        }).filter(function(n) {
            return !!n
        })
    },
    Wu = function(e, t, n, r) {
        var o = ju(t, Array.isArray(e) ? e : [e]);
        bn[n] || (bn[n] = new WeakMap);
        var a = bn[n],
            i = [],
            s = new Set,
            c = new Set(o),
            u = function(d) {
                !d || s.has(d) || (s.add(d), u(d.parentNode))
            };
        o.forEach(u);
        var f = function(d) {
            !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
                if (s.has(p)) f(p);
                else try {
                    var v = p.getAttribute(r),
                        m = v !== null && v !== "false",
                        h = (Tt.get(p) || 0) + 1,
                        g = (a.get(p) || 0) + 1;
                    Tt.set(p, h), a.set(p, g), i.push(p), h === 1 && m && hn.set(p, !0), g === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true")
                } catch (w) {
                    console.error("aria-hidden: cannot operate on ", p, w)
                }
            })
        };
        return f(t), s.clear(), lr++,
            function() {
                i.forEach(function(d) {
                    var p = Tt.get(d) - 1,
                        v = a.get(d) - 1;
                    Tt.set(d, p), a.set(d, v), p || (hn.has(d) || d.removeAttribute(r), hn.delete(d)), v || d.removeAttribute(n)
                }), lr--, lr || (Tt = new WeakMap, Tt = new WeakMap, hn = new WeakMap, bn = {})
            }
    },
    hi = function(e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = Lu(e);
        return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), Wu(r, o, n, "aria-hidden")) : function() {
            return null
        }
    },
    Ge = function() {
        return Ge = Object.assign || function(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
                n = arguments[r];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
            }
            return t
        }, Ge.apply(this, arguments)
    };

function bi(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function Bu(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, a; r < o; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}
var Pn = "right-scroll-bar-position",
    _n = "width-before-scroll-bar",
    Hu = "with-scroll-bars-hidden",
    Vu = "--removed-body-scroll-bar-size";

function ur(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e
}

function zu(e, t) {
    var n = l.useState(function() {
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
var Uu = typeof window < "u" ? l.useLayoutEffect : l.useEffect,
    zo = new WeakMap;

function Gu(e, t) {
    var n = zu(null, function(r) {
        return e.forEach(function(o) {
            return ur(o, r)
        })
    });
    return Uu(function() {
        var r = zo.get(n);
        if (r) {
            var o = new Set(r),
                a = new Set(e),
                i = n.current;
            o.forEach(function(s) {
                a.has(s) || ur(s, null)
            }), a.forEach(function(s) {
                o.has(s) || ur(s, i)
            })
        }
        zo.set(n, e)
    }, [e]), n
}

function Yu(e) {
    return e
}

function Ku(e, t) {
    t === void 0 && (t = Yu);
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
                    u = function() {
                        return Promise.resolve().then(c)
                    };
                u(), n = {
                    push: function(f) {
                        i.push(f), u()
                    },
                    filter: function(f) {
                        return i = i.filter(f), n
                    }
                }
            }
        };
    return o
}

function qu(e) {
    e === void 0 && (e = {});
    var t = Ku(null);
    return t.options = Ge({
        async: !0,
        ssr: !1
    }, e), t
}
var gi = function(e) {
    var t = e.sideCar,
        n = bi(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return l.createElement(r, Ge({}, n))
};
gi.isSideCarExport = !0;

function Xu(e, t) {
    return e.useMedium(t), gi
}
var yi = qu(),
    dr = function() {},
    qn = l.forwardRef(function(e, t) {
        var n = l.useRef(null),
            r = l.useState({
                onScrollCapture: dr,
                onWheelCapture: dr,
                onTouchMoveCapture: dr
            }),
            o = r[0],
            a = r[1],
            i = e.forwardProps,
            s = e.children,
            c = e.className,
            u = e.removeScrollBar,
            f = e.enabled,
            d = e.shards,
            p = e.sideCar,
            v = e.noIsolation,
            m = e.inert,
            h = e.allowPinchZoom,
            g = e.as,
            w = g === void 0 ? "div" : g,
            y = bi(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
            $ = p,
            x = Gu([n, t]),
            E = Ge(Ge({}, y), o);
        return l.createElement(l.Fragment, null, f && l.createElement($, {
            sideCar: yi,
            removeScrollBar: u,
            shards: d,
            noIsolation: v,
            inert: m,
            setCallbacks: a,
            allowPinchZoom: !!h,
            lockRef: n
        }), i ? l.cloneElement(l.Children.only(s), Ge(Ge({}, E), {
            ref: x
        })) : l.createElement(w, Ge({}, E, {
            className: c,
            ref: x
        }), s))
    });
qn.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
qn.classNames = {
    fullWidth: _n,
    zeroRight: Pn
};
var Zu = function() {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__
};

function Qu() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = Zu();
    return t && e.setAttribute("nonce", t), e
}

function Ju(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}

function ed(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var td = function() {
        var e = 0,
            t = null;
        return {
            add: function(n) {
                e == 0 && (t = Qu()) && (Ju(t, n), ed(t)), e++
            },
            remove: function() {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
        }
    },
    nd = function() {
        var e = td();
        return function(t, n) {
            l.useEffect(function() {
                return e.add(t),
                    function() {
                        e.remove()
                    }
            }, [t && n])
        }
    },
    wi = function() {
        var e = nd(),
            t = function(n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null
            };
        return t
    },
    rd = {
        left: 0,
        top: 0,
        right: 0,
        gap: 0
    },
    fr = function(e) {
        return parseInt(e || "", 10) || 0
    },
    od = function(e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [fr(n), fr(r), fr(o)]
    },
    ad = function(e) {
        if (e === void 0 && (e = "margin"), typeof window > "u") return rd;
        var t = od(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0])
        }
    },
    id = wi(),
    Lt = "data-scroll-locked",
    sd = function(e, t, n, r) {
        var o = e.left,
            a = e.top,
            i = e.right,
            s = e.gap;
        return n === void 0 && (n = "margin"), `
  .`.concat(Hu, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Lt, `] {
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
  
  .`).concat(Pn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(_n, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(_n, " .").concat(_n, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Lt, `] {
    `).concat(Vu, ": ").concat(s, `px;
  }
`)
    },
    Uo = function() {
        var e = parseInt(document.body.getAttribute(Lt) || "0", 10);
        return isFinite(e) ? e : 0
    },
    cd = function() {
        l.useEffect(function() {
            return document.body.setAttribute(Lt, (Uo() + 1).toString()),
                function() {
                    var e = Uo() - 1;
                    e <= 0 ? document.body.removeAttribute(Lt) : document.body.setAttribute(Lt, e.toString())
                }
        }, [])
    },
    ld = function(e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        cd();
        var a = l.useMemo(function() {
            return ad(o)
        }, [o]);
        return l.createElement(id, {
            styles: sd(a, !t, o, n ? "" : "!important")
        })
    },
    Fr = !1;
if (typeof window < "u") try {
    var gn = Object.defineProperty({}, "passive", {
        get: function() {
            return Fr = !0, !0
        }
    });
    window.addEventListener("test", gn, gn), window.removeEventListener("test", gn, gn)
} catch {
    Fr = !1
}
var Ot = Fr ? {
        passive: !1
    } : !1,
    ud = function(e) {
        return e.tagName === "TEXTAREA"
    },
    xi = function(e, t) {
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !ud(e) && n[t] === "visible")
    },
    dd = function(e) {
        return xi(e, "overflowY")
    },
    fd = function(e) {
        return xi(e, "overflowX")
    },
    Go = function(e, t) {
        var n = t;
        do {
            typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
            var r = $i(e, n);
            if (r) {
                var o = Ci(e, n),
                    a = o[1],
                    i = o[2];
                if (a > i) return !0
            }
            n = n.parentNode
        } while (n && n !== document.body);
        return !1
    },
    vd = function(e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r]
    },
    pd = function(e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r]
    },
    $i = function(e, t) {
        return e === "v" ? dd(t) : fd(t)
    },
    Ci = function(e, t) {
        return e === "v" ? vd(t) : pd(t)
    },
    md = function(e, t) {
        return e === "h" && t === "rtl" ? -1 : 1
    },
    hd = function(e, t, n, r, o) {
        var a = md(e, window.getComputedStyle(t).direction),
            i = a * r,
            s = n.target,
            c = t.contains(s),
            u = !1,
            f = i > 0,
            d = 0,
            p = 0;
        do {
            var v = Ci(e, s),
                m = v[0],
                h = v[1],
                g = v[2],
                w = h - g - a * m;
            (m || w) && $i(e, s) && (d += w, p += m), s = s.parentNode
        } while (!c && s !== document.body || c && (t.contains(s) || t === s));
        return (f && (d === 0 || !o) || !f && (p === 0 || !o)) && (u = !0), u
    },
    yn = function(e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
    },
    Yo = function(e) {
        return [e.deltaX, e.deltaY]
    },
    Ko = function(e) {
        return e && "current" in e ? e.current : e
    },
    bd = function(e, t) {
        return e[0] === t[0] && e[1] === t[1]
    },
    gd = function(e) {
        return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
    },
    yd = 0,
    Mt = [];

function wd(e) {
    var t = l.useRef([]),
        n = l.useRef([0, 0]),
        r = l.useRef(),
        o = l.useState(yd++)[0],
        a = l.useState(function() {
            return wi()
        })[0],
        i = l.useRef(e);
    l.useEffect(function() {
        i.current = e
    }, [e]), l.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var h = Bu([e.lockRef.current], (e.shards || []).map(Ko), !0).filter(Boolean);
            return h.forEach(function(g) {
                    return g.classList.add("allow-interactivity-".concat(o))
                }),
                function() {
                    document.body.classList.remove("block-interactivity-".concat(o)), h.forEach(function(g) {
                        return g.classList.remove("allow-interactivity-".concat(o))
                    })
                }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = l.useCallback(function(h, g) {
            if ("touches" in h && h.touches.length === 2) return !i.current.allowPinchZoom;
            var w = yn(h),
                y = n.current,
                $ = "deltaX" in h ? h.deltaX : y[0] - w[0],
                x = "deltaY" in h ? h.deltaY : y[1] - w[1],
                E, O = h.target,
                N = Math.abs($) > Math.abs(x) ? "h" : "v";
            if ("touches" in h && N === "h" && O.type === "range") return !1;
            var _ = Go(N, O);
            if (!_) return !0;
            if (_ ? E = N : (E = N === "v" ? "h" : "v", _ = Go(N, O)), !_) return !1;
            if (!r.current && "changedTouches" in h && ($ || x) && (r.current = E), !E) return !0;
            var D = r.current || E;
            return hd(D, g, h, D === "h" ? $ : x, !0)
        }, []),
        c = l.useCallback(function(h) {
            var g = h;
            if (!(!Mt.length || Mt[Mt.length - 1] !== a)) {
                var w = "deltaY" in g ? Yo(g) : yn(g),
                    y = t.current.filter(function(E) {
                        return E.name === g.type && E.target === g.target && bd(E.delta, w)
                    })[0];
                if (y && y.should) {
                    g.cancelable && g.preventDefault();
                    return
                }
                if (!y) {
                    var $ = (i.current.shards || []).map(Ko).filter(Boolean).filter(function(E) {
                            return E.contains(g.target)
                        }),
                        x = $.length > 0 ? s(g, $[0]) : !i.current.noIsolation;
                    x && g.cancelable && g.preventDefault()
                }
            }
        }, []),
        u = l.useCallback(function(h, g, w, y) {
            var $ = {
                name: h,
                delta: g,
                target: w,
                should: y
            };
            t.current.push($), setTimeout(function() {
                t.current = t.current.filter(function(x) {
                    return x !== $
                })
            }, 1)
        }, []),
        f = l.useCallback(function(h) {
            n.current = yn(h), r.current = void 0
        }, []),
        d = l.useCallback(function(h) {
            u(h.type, Yo(h), h.target, s(h, e.lockRef.current))
        }, []),
        p = l.useCallback(function(h) {
            u(h.type, yn(h), h.target, s(h, e.lockRef.current))
        }, []);
    l.useEffect(function() {
        return Mt.push(a), e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: p
            }), document.addEventListener("wheel", c, Ot), document.addEventListener("touchmove", c, Ot), document.addEventListener("touchstart", f, Ot),
            function() {
                Mt = Mt.filter(function(h) {
                    return h !== a
                }), document.removeEventListener("wheel", c, Ot), document.removeEventListener("touchmove", c, Ot), document.removeEventListener("touchstart", f, Ot)
            }
    }, []);
    var v = e.removeScrollBar,
        m = e.inert;
    return l.createElement(l.Fragment, null, m ? l.createElement(a, {
        styles: gd(o)
    }) : null, v ? l.createElement(ld, {
        gapMode: "margin"
    }) : null)
}
const xd = Xu(yi, wd);
var so = l.forwardRef(function(e, t) {
    return l.createElement(qn, Ge({}, e, {
        ref: t,
        sideCar: xd
    }))
});
so.classNames = qn.classNames;
var $d = l.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                error: a,
                onChange: i,
                onFileChange: s,
                rounded: c = !0,
                className: u,
                groupClassName: f,
                startIcon: d,
                type: p,
                hideErrorSpace: v = !0,
                hideErrorMark: m = !1
            } = r,
            h = gt(r, ["label", "error", "onChange", "onFileChange", "rounded", "className", "groupClassName", "startIcon", "type", "hideErrorSpace", "hideErrorMark"]);
        const [g, w] = l.useState(!1);
        return b.jsxs("div", {
            className: f,
            children: [o && b.jsx("label", {
                className: `block pb-1 font-semibold ${h.disabled?"text-gray-400":""}`,
                htmlFor: h.id,
                children: o
            }), b.jsxs("div", {
                className: "relative",
                children: [d && b.jsx("div", {
                    className: "absolute inset-y-0 h-full w-full max-w-[50px]",
                    children: d
                }), b.jsx("input", he({
                    className: ve("bg-input/20 hover:bg-input/30 focus:bg-input/30 w-full border p-2 placeholder:text-gray-400 focus:outline-none focus:ring-0", "disabled:bg-input/10 disabled:text-text/60 disabled:cursor-not-allowed", a ? "border-error" : "border-input/20 focus:border-input/30", c ? "rounded-md" : "rounded-none", h.dir === "ltr" ? "pr-6" : "ltr:pr-6 rtl:pl-6 rtl:text-right", d ? "ltr:pl-8 rtl:pr-8" : "", u),
                    ref: n,
                    onChange: y => {
                        if (p === "file") return s == null ? void 0 : s(y.target.files);
                        i == null || i(y.target.value)
                    },
                    type: p === "password" ? g ? "text" : "password" : p
                }, h)), !!a && !m && b.jsx("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 20 19",
                    className: `fill-error absolute inset-y-0 right-0 mx-1 h-full ${h.dir==="ltr"?"":"rtl:left-0 rtl:right-auto"}`,
                    children: b.jsx("path", {
                        d: "M9.99121 18.7422C14.9746 18.7422 19.0879 14.6289 19.0879 9.6543C19.0879 4.67969 14.9658 0.566406 9.98242 0.566406C5.00781 0.566406 0.90332 4.67969 0.90332 9.6543C0.90332 14.6289 5.0166 18.7422 9.99121 18.7422ZM9.99121 16.9316C5.95703 16.9316 2.73145 13.6885 2.73145 9.6543C2.73145 5.62012 5.95703 2.38574 9.98242 2.38574C14.0166 2.38574 17.2598 5.62012 17.2686 9.6543C17.2773 13.6885 14.0254 16.9316 9.99121 16.9316ZM9.98242 11.1133C10.4658 11.1133 10.7471 10.8408 10.7559 10.3311L10.8877 6.10352C10.9053 5.58496 10.5186 5.20703 9.97363 5.20703C9.42871 5.20703 9.05078 5.57617 9.06836 6.09473L9.19141 10.3311C9.20898 10.832 9.49023 11.1133 9.98242 11.1133ZM9.98242 14.0312C10.5537 14.0312 11.0195 13.6182 11.0195 13.0557C11.0195 12.502 10.5625 12.0889 9.98242 12.0889C9.41113 12.0889 8.94531 12.502 8.94531 13.0557C8.94531 13.6094 9.41992 14.0312 9.98242 14.0312Z"
                    })
                }), p === "password" && b.jsx("button", {
                    type: "button",
                    className: `absolute inset-y-0 mx-1 h-full text-xs text-gray-500 hover:opacity-70 focus:opacity-70 ${a?"ltr:right-6 rtl:left-6":"ltr:right-0 rtl:left-0"}`,
                    onClick: y => {
                        y.preventDefault(), w($ => !$)
                    },
                    tabIndex: -1,
                    children: b.jsx("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        className: g ? "fill-input/80" : "fill-input/40",
                        children: b.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10 5C4.54545 5 2.5 10 2.5 10C2.5 10 4.54545 15 10 15C14.0909 15 17.5 10 17.5 10C17.5 10 14.0909 5 10 5ZM7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10Z"
                        })
                    })
                })]
            }), (typeof a == "string" && !!a || !v) && b.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${a?"visible":"text-transparent"}`,
                children: a
            })]
        })
    }),
    Ei = $d;

function ft(e) {
    let t = e.activeElement;
    for (;
        ((n = t) == null || (n = n.shadowRoot) == null ? void 0 : n.activeElement) != null;) {
        var n;
        t = t.shadowRoot.activeElement
    }
    return t
}

function Te(e, t) {
    if (!e || !t) return !1;
    const n = t.getRootNode == null ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && Ir(n)) {
        let r = t;
        for (; r;) {
            if (e === r) return !0;
            r = r.parentNode || r.host
        }
    }
    return !1
}

function Ri() {
    const e = navigator.userAgentData;
    return e != null && e.platform ? e.platform : navigator.platform
}

function Si() {
    const e = navigator.userAgentData;
    return e && Array.isArray(e.brands) ? e.brands.map(t => {
        let {
            brand: n,
            version: r
        } = t;
        return n + "/" + r
    }).join(" ") : navigator.userAgent
}

function Pi(e) {
    return e.mozInputSource === 0 && e.isTrusted ? !0 : Lr() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
}

function _i(e) {
    return Ed() ? !1 : !Lr() && e.width === 0 && e.height === 0 || Lr() && e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "touch"
}

function Di() {
    return /apple/i.test(navigator.vendor)
}

function Lr() {
    const e = /android/i;
    return e.test(Ri()) || e.test(Si())
}

function Cd() {
    return Ri().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints
}

function Ed() {
    return Si().includes("jsdom/")
}

function Rd(e) {
    return "nativeEvent" in e
}

function Sd(e) {
    return e.matches("html,body")
}

function Ye(e) {
    return (e == null ? void 0 : e.ownerDocument) || document
}

function vr(e, t) {
    if (t == null) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    const n = e;
    return n.target != null && t.contains(n.target)
}

function kt(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target
}
const Pd = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

function _d(e) {
    return _e(e) && e.matches(Pd)
}

function Pe(e) {
    e.preventDefault(), e.stopPropagation()
}

function Ti(e) {
    return e ? e.getAttribute("role") === "combobox" && _d(e) : !1
}
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
var Dd = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"],
    An = Dd.join(","),
    Oi = typeof Element > "u",
    Ht = Oi ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
    Fn = !Oi && Element.prototype.getRootNode ? function(e) {
        var t;
        return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
    } : function(e) {
        return e == null ? void 0 : e.ownerDocument
    },
    Ln = function e(t, n) {
        var r;
        n === void 0 && (n = !0);
        var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"),
            a = o === "" || o === "true",
            i = a || n && t && e(t.parentNode);
        return i
    },
    Td = function(t) {
        var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
        return r === "" || r === "true"
    },
    Od = function(t, n, r) {
        if (Ln(t)) return [];
        var o = Array.prototype.slice.apply(t.querySelectorAll(An));
        return n && Ht.call(t, An) && o.unshift(t), o = o.filter(r), o
    },
    Md = function e(t, n, r) {
        for (var o = [], a = Array.from(t); a.length;) {
            var i = a.shift();
            if (!Ln(i, !1))
                if (i.tagName === "SLOT") {
                    var s = i.assignedElements(),
                        c = s.length ? s : i.children,
                        u = e(c, !0, r);
                    r.flatten ? o.push.apply(o, u) : o.push({
                        scopeParent: i,
                        candidates: u
                    })
                } else {
                    var f = Ht.call(i, An);
                    f && r.filter(i) && (n || !t.includes(i)) && o.push(i);
                    var d = i.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(i),
                        p = !Ln(d, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                    if (d && p) {
                        var v = e(d === !0 ? i.children : d.children, !0, r);
                        r.flatten ? o.push.apply(o, v) : o.push({
                            scopeParent: i,
                            candidates: v
                        })
                    } else a.unshift.apply(a, i.children)
                }
        }
        return o
    },
    Mi = function(t) {
        return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
    },
    Ni = function(t) {
        if (!t) throw new Error("No node provided");
        return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Td(t)) && !Mi(t) ? 0 : t.tabIndex
    },
    Nd = function(t, n) {
        var r = Ni(t);
        return r < 0 && n && !Mi(t) ? 0 : r
    },
    kd = function(t, n) {
        return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex
    },
    ki = function(t) {
        return t.tagName === "INPUT"
    },
    Id = function(t) {
        return ki(t) && t.type === "hidden"
    },
    Ad = function(t) {
        var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
            return r.tagName === "SUMMARY"
        });
        return n
    },
    Fd = function(t, n) {
        for (var r = 0; r < t.length; r++)
            if (t[r].checked && t[r].form === n) return t[r]
    },
    Ld = function(t) {
        if (!t.name) return !0;
        var n = t.form || Fn(t),
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
        var a = Fd(o, t.form);
        return !a || a === t
    },
    jd = function(t) {
        return ki(t) && t.type === "radio"
    },
    Wd = function(t) {
        return jd(t) && !Ld(t)
    },
    Bd = function(t) {
        var n, r = t && Fn(t),
            o = (n = r) === null || n === void 0 ? void 0 : n.host,
            a = !1;
        if (r && r !== t) {
            var i, s, c;
            for (a = !!((i = o) !== null && i !== void 0 && (s = i.ownerDocument) !== null && s !== void 0 && s.contains(o) || t != null && (c = t.ownerDocument) !== null && c !== void 0 && c.contains(t)); !a && o;) {
                var u, f, d;
                r = Fn(o), o = (u = r) === null || u === void 0 ? void 0 : u.host, a = !!((f = o) !== null && f !== void 0 && (d = f.ownerDocument) !== null && d !== void 0 && d.contains(o))
            }
        }
        return a
    },
    qo = function(t) {
        var n = t.getBoundingClientRect(),
            r = n.width,
            o = n.height;
        return r === 0 && o === 0
    },
    Hd = function(t, n) {
        var r = n.displayCheck,
            o = n.getShadowRoot;
        if (getComputedStyle(t).visibility === "hidden") return !0;
        var a = Ht.call(t, "details>summary:first-of-type"),
            i = a ? t.parentElement : t;
        if (Ht.call(i, "details:not([open]) *")) return !0;
        if (!r || r === "full" || r === "legacy-full") {
            if (typeof o == "function") {
                for (var s = t; t;) {
                    var c = t.parentElement,
                        u = Fn(t);
                    if (c && !c.shadowRoot && o(c) === !0) return qo(t);
                    t.assignedSlot ? t = t.assignedSlot : !c && u !== t.ownerDocument ? t = u.host : t = c
                }
                t = s
            }
            if (Bd(t)) return !t.getClientRects().length;
            if (r !== "legacy-full") return !0
        } else if (r === "non-zero-area") return qo(t);
        return !1
    },
    Vd = function(t) {
        if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
            for (var n = t.parentElement; n;) {
                if (n.tagName === "FIELDSET" && n.disabled) {
                    for (var r = 0; r < n.children.length; r++) {
                        var o = n.children.item(r);
                        if (o.tagName === "LEGEND") return Ht.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t)
                    }
                    return !0
                }
                n = n.parentElement
            }
        return !1
    },
    zd = function(t, n) {
        return !(n.disabled || Ln(n) || Id(n) || Hd(n, t) || Ad(n) || Vd(n))
    },
    jr = function(t, n) {
        return !(Wd(n) || Ni(n) < 0 || !zd(t, n))
    },
    Ud = function(t) {
        var n = parseInt(t.getAttribute("tabindex"), 10);
        return !!(isNaN(n) || n >= 0)
    },
    Gd = function e(t) {
        var n = [],
            r = [];
        return t.forEach(function(o, a) {
            var i = !!o.scopeParent,
                s = i ? o.scopeParent : o,
                c = Nd(s, i),
                u = i ? e(o.candidates) : s;
            c === 0 ? i ? n.push.apply(n, u) : n.push(s) : r.push({
                documentOrder: a,
                tabIndex: c,
                item: o,
                isScope: i,
                content: u
            })
        }), r.sort(kd).reduce(function(o, a) {
            return a.isScope ? o.push.apply(o, a.content) : o.push(a.content), o
        }, []).concat(n)
    },
    Xn = function(t, n) {
        n = n || {};
        var r;
        return n.getShadowRoot ? r = Md([t], n.includeContainer, {
            filter: jr.bind(null, n),
            flatten: !1,
            getShadowRoot: n.getShadowRoot,
            shadowRootFilter: Ud
        }) : r = Od(t, n.includeContainer, jr.bind(null, n)), Gd(r)
    },
    Yd = function(t, n) {
        if (n = n || {}, !t) throw new Error("No node provided");
        return Ht.call(t, An) === !1 ? !1 : jr(n, t)
    };
const Ii = { ...ya
    },
    Kd = Ii.useInsertionEffect,
    qd = Kd || (e => e());

function vt(e) {
    const t = l.useRef(() => {});
    return qd(() => {
        t.current = e
    }), l.useCallback(function() {
        for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
        return t.current == null ? void 0 : t.current(...r)
    }, [])
}
const co = "ArrowUp",
    cn = "ArrowDown",
    Vt = "ArrowLeft",
    Gt = "ArrowRight";

function wn(e, t, n) {
    return Math.floor(e / t) !== n
}

function Zt(e, t) {
    return t < 0 || t >= e.current.length
}

function pr(e, t) {
    return Se(e, {
        disabledIndices: t
    })
}

function Xo(e, t) {
    return Se(e, {
        decrement: !0,
        startingIndex: e.current.length,
        disabledIndices: t
    })
}

function Se(e, t) {
    let {
        startingIndex: n = -1,
        decrement: r = !1,
        disabledIndices: o,
        amount: a = 1
    } = t === void 0 ? {} : t;
    const i = e.current;
    let s = n;
    do s += r ? -a : a; while (s >= 0 && s <= i.length - 1 && Dn(i, s, o));
    return s
}

function Xd(e, t) {
    let {
        event: n,
        orientation: r,
        loop: o,
        cols: a,
        disabledIndices: i,
        minIndex: s,
        maxIndex: c,
        prevIndex: u,
        stopEvent: f = !1
    } = t, d = u;
    if (n.key === co) {
        if (f && Pe(n), u === -1) d = c;
        else if (d = Se(e, {
                startingIndex: d,
                amount: a,
                decrement: !0,
                disabledIndices: i
            }), o && (u - a < s || d < 0)) {
            const p = u % a,
                v = c % a,
                m = c - (v - p);
            v === p ? d = c : d = v > p ? m : m - a
        }
        Zt(e, d) && (d = u)
    }
    if (n.key === cn && (f && Pe(n), u === -1 ? d = s : (d = Se(e, {
            startingIndex: u,
            amount: a,
            disabledIndices: i
        }), o && u + a > c && (d = Se(e, {
            startingIndex: u % a - a,
            amount: a,
            disabledIndices: i
        }))), Zt(e, d) && (d = u)), r === "both") {
        const p = It(u / a);
        n.key === Gt && (f && Pe(n), u % a !== a - 1 ? (d = Se(e, {
            startingIndex: u,
            disabledIndices: i
        }), o && wn(d, a, p) && (d = Se(e, {
            startingIndex: u - u % a - 1,
            disabledIndices: i
        }))) : o && (d = Se(e, {
            startingIndex: u - u % a - 1,
            disabledIndices: i
        })), wn(d, a, p) && (d = u)), n.key === Vt && (f && Pe(n), u % a !== 0 ? (d = Se(e, {
            startingIndex: u,
            decrement: !0,
            disabledIndices: i
        }), o && wn(d, a, p) && (d = Se(e, {
            startingIndex: u + (a - u % a),
            decrement: !0,
            disabledIndices: i
        }))) : o && (d = Se(e, {
            startingIndex: u + (a - u % a),
            decrement: !0,
            disabledIndices: i
        })), wn(d, a, p) && (d = u));
        const v = It(c / a) === p;
        Zt(e, d) && (o && v ? d = n.key === Vt ? c : Se(e, {
            startingIndex: u - u % a - 1,
            disabledIndices: i
        }) : d = u)
    }
    return d
}

function Zd(e, t, n) {
    const r = [];
    let o = 0;
    return e.forEach((a, i) => {
        let {
            width: s,
            height: c
        } = a, u = !1;
        for (n && (o = 0); !u;) {
            const f = [];
            for (let d = 0; d < s; d++)
                for (let p = 0; p < c; p++) f.push(o + d + p * t);
            o % t + s <= t && f.every(d => r[d] == null) ? (f.forEach(d => {
                r[d] = i
            }), u = !0) : o++
        }
    }), [...r]
}

function Qd(e, t, n, r, o) {
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

function Jd(e, t) {
    return t.flatMap((n, r) => e.includes(n) ? [r] : [])
}

function Dn(e, t, n) {
    if (n) return n.includes(t);
    const r = e[t];
    return r == null || r.hasAttribute("disabled") || r.getAttribute("aria-disabled") === "true"
}
let Zo = 0;

function et(e, t) {
    t === void 0 && (t = {});
    const {
        preventScroll: n = !1,
        cancelPrevious: r = !0,
        sync: o = !1
    } = t;
    r && cancelAnimationFrame(Zo);
    const a = () => e == null ? void 0 : e.focus({
        preventScroll: n
    });
    o ? a() : Zo = requestAnimationFrame(a)
}
var xe = typeof document < "u" ? l.useLayoutEffect : l.useEffect;

function jn() {
    return jn = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, jn.apply(this, arguments)
}
let Qo = !1,
    ef = 0;
const Jo = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + ef++;

function tf() {
    const [e, t] = l.useState(() => Qo ? Jo() : void 0);
    return xe(() => {
        e == null && t(Jo())
    }, []), l.useEffect(() => {
        Qo = !0
    }, []), e
}
const nf = Ii.useId,
    lo = nf || tf;

function rf() {
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
const of = l.createContext(null), af = l.createContext(null), uo = () => {
    var e;
    return ((e = l.useContext( of )) == null ? void 0 : e.id) || null
}, Zn = () => l.useContext(af);

function nn(e) {
    return "data-floating-ui-" + e
}

function pt(e) {
    const t = l.useRef(e);
    return xe(() => {
        t.current = e
    }), t
}

function sf(e, t) {
    var n;
    let r = [],
        o = (n = e.find(a => a.id === t)) == null ? void 0 : n.parentId;
    for (; o;) {
        const a = e.find(i => i.id === o);
        o = a == null ? void 0 : a.parentId, a && (r = r.concat(a))
    }
    return r
}

function jt(e, t) {
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

function cf(e, t) {
    let n, r = -1;

    function o(a, i) {
        i > r && (n = a, r = i), jt(e, a).forEach(c => {
            o(c.id, i + 1)
        })
    }
    return o(t, 0), e.find(a => a.id === n)
}
let Nt = new WeakMap,
    xn = new WeakSet,
    $n = {},
    mr = 0;
const lf = () => typeof HTMLElement < "u" && "inert" in HTMLElement.prototype,
    Ai = e => e && (e.host || Ai(e.parentNode)),
    uf = (e, t) => t.map(n => {
        if (e.contains(n)) return n;
        const r = Ai(n);
        return e.contains(r) ? r : null
    }).filter(n => n != null);

function df(e, t, n, r) {
    const o = "data-floating-ui-inert",
        a = r ? "inert" : n ? "aria-hidden" : null,
        i = uf(t, e),
        s = new Set,
        c = new Set(i),
        u = [];
    $n[o] || ($n[o] = new WeakMap);
    const f = $n[o];
    i.forEach(d), p(t), s.clear();

    function d(v) {
        !v || s.has(v) || (s.add(v), v.parentNode && d(v.parentNode))
    }

    function p(v) {
        !v || c.has(v) || [].forEach.call(v.children, m => {
            if (yt(m) !== "script")
                if (s.has(m)) p(m);
                else {
                    const h = a ? m.getAttribute(a) : null,
                        g = h !== null && h !== "false",
                        w = (Nt.get(m) || 0) + 1,
                        y = (f.get(m) || 0) + 1;
                    Nt.set(m, w), f.set(m, y), u.push(m), w === 1 && g && xn.add(m), y === 1 && m.setAttribute(o, ""), !g && a && m.setAttribute(a, "true")
                }
        })
    }
    return mr++, () => {
        u.forEach(v => {
            const m = (Nt.get(v) || 0) - 1,
                h = (f.get(v) || 0) - 1;
            Nt.set(v, m), f.set(v, h), m || (!xn.has(v) && a && v.removeAttribute(a), xn.delete(v)), h || v.removeAttribute(o)
        }), mr--, mr || (Nt = new WeakMap, Nt = new WeakMap, xn = new WeakSet, $n = {})
    }
}

function ea(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const r = Ye(e[0]).body;
    return df(e.concat(Array.from(r.querySelectorAll("[aria-live]"))), r, t, n)
}
const rn = () => ({
    getShadowRoot: !0,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
});

function Fi(e, t) {
    const n = Xn(e, rn());
    t === "prev" && n.reverse();
    const r = n.indexOf(ft(Ye(e)));
    return n.slice(r + 1)[0]
}

function Li() {
    return Fi(document.body, "next")
}

function ji() {
    return Fi(document.body, "prev")
}

function Qt(e, t) {
    const n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !Te(n, r)
}

function ff(e) {
    Xn(e, rn()).forEach(n => {
        n.dataset.tabindex = n.getAttribute("tabindex") || "", n.setAttribute("tabindex", "-1")
    })
}

function vf(e) {
    e.querySelectorAll("[data-tabindex]").forEach(n => {
        const r = n.dataset.tabindex;
        delete n.dataset.tabindex, r ? n.setAttribute("tabindex", r) : n.removeAttribute("tabindex")
    })
}
const fo = {
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
let pf;

function ta(e) {
    e.key === "Tab" && (e.target, clearTimeout(pf))
}
const Wn = l.forwardRef(function(t, n) {
        const [r, o] = l.useState();
        xe(() => (Di() && o("button"), document.addEventListener("keydown", ta), () => {
            document.removeEventListener("keydown", ta)
        }), []);
        const a = {
            ref: n,
            tabIndex: 0,
            role: r,
            "aria-hidden": r ? void 0 : !0,
            [nn("focus-guard")]: "",
            style: fo
        };
        return l.createElement("span", jn({}, t, a))
    }),
    Wi = l.createContext(null),
    na = nn("portal");

function mf(e) {
    e === void 0 && (e = {});
    const {
        id: t,
        root: n
    } = e, r = lo(), o = Bi(), [a, i] = l.useState(null), s = l.useRef(null);
    return xe(() => () => {
        a == null || a.remove(), queueMicrotask(() => {
            s.current = null
        })
    }, [a]), xe(() => {
        if (!r || s.current) return;
        const c = t ? document.getElementById(t) : null;
        if (!c) return;
        const u = document.createElement("div");
        u.id = r, u.setAttribute(na, ""), c.appendChild(u), s.current = u, i(u)
    }, [t, r]), xe(() => {
        if (!r || s.current) return;
        let c = n || (o == null ? void 0 : o.portalNode);
        c && !be(c) && (c = c.current), c = c || document.body;
        let u = null;
        t && (u = document.createElement("div"), u.id = t, c.appendChild(u));
        const f = document.createElement("div");
        f.id = r, f.setAttribute(na, ""), c = u || c, c.appendChild(f), s.current = f, i(f)
    }, [t, n, r, o]), a
}

function hf(e) {
    const {
        children: t,
        id: n,
        root: r = null,
        preserveTabOrder: o = !0
    } = e, a = mf({
        id: n,
        root: r
    }), [i, s] = l.useState(null), c = l.useRef(null), u = l.useRef(null), f = l.useRef(null), d = l.useRef(null), p = !!i && !i.modal && i.open && o && !!(r || a);
    return l.useEffect(() => {
        if (!a || !o || i != null && i.modal) return;

        function v(m) {
            a && Qt(m) && (m.type === "focusin" ? vf : ff)(a)
        }
        return a.addEventListener("focusin", v, !0), a.addEventListener("focusout", v, !0), () => {
            a.removeEventListener("focusin", v, !0), a.removeEventListener("focusout", v, !0)
        }
    }, [a, o, i == null ? void 0 : i.modal]), l.createElement(Wi.Provider, {
        value: l.useMemo(() => ({
            preserveTabOrder: o,
            beforeOutsideRef: c,
            afterOutsideRef: u,
            beforeInsideRef: f,
            afterInsideRef: d,
            portalNode: a,
            setFocusManagerState: s
        }), [o, a])
    }, p && a && l.createElement(Wn, {
        "data-type": "outside",
        ref: c,
        onFocus: v => {
            if (Qt(v, a)) {
                var m;
                (m = f.current) == null || m.focus()
            } else {
                const h = ji() || (i == null ? void 0 : i.refs.domReference.current);
                h == null || h.focus()
            }
        }
    }), p && a && l.createElement("span", {
        "aria-owns": a.id,
        style: fo
    }), a && Hn.createPortal(t, a), p && a && l.createElement(Wn, {
        "data-type": "outside",
        ref: u,
        onFocus: v => {
            if (Qt(v, a)) {
                var m;
                (m = d.current) == null || m.focus()
            } else {
                const h = Li() || (i == null ? void 0 : i.refs.domReference.current);
                h == null || h.focus(), i != null && i.closeOnFocusOut && (i == null || i.onOpenChange(!1, v.nativeEvent))
            }
        }
    }))
}
const Bi = () => l.useContext(Wi),
    ra = 20;
let Et = [];

function hr(e) {
    Et = Et.filter(n => n.isConnected);
    let t = e;
    if (!(!t || yt(t) === "body")) {
        if (!Yd(t, rn())) {
            const n = Xn(t, rn())[0];
            n && (t = n)
        }
        Et.push(t), Et.length > ra && (Et = Et.slice(-ra))
    }
}

function oa() {
    return Et.slice().reverse().find(e => e.isConnected)
}
const bf = l.forwardRef(function(t, n) {
    return l.createElement("button", jn({}, t, {
        type: "button",
        ref: n,
        tabIndex: -1,
        style: fo
    }))
});

function gf(e) {
    const {
        context: t,
        children: n,
        disabled: r = !1,
        order: o = ["content"],
        guards: a = !0,
        initialFocus: i = 0,
        returnFocus: s = !0,
        modal: c = !0,
        visuallyHiddenDismiss: u = !1,
        closeOnFocusOut: f = !0
    } = e, {
        open: d,
        refs: p,
        nodeId: v,
        onOpenChange: m,
        events: h,
        dataRef: g,
        elements: {
            domReference: w,
            floating: y
        }
    } = t, $ = typeof i == "number" && i < 0, x = Ti(w) && $, E = lf() ? a : !0, O = pt(o), N = pt(i), _ = pt(s), D = Zn(), T = Bi(), F = l.useRef(null), I = l.useRef(null), W = l.useRef(!1), S = l.useRef(!1), P = T != null, k = l.useCallback(function(A) {
        return A === void 0 && (A = y), A ? Xn(A, rn()) : []
    }, [y]), C = l.useCallback(A => {
        const L = k(A);
        return O.current.map(H => w && H === "reference" ? w : y && H === "floating" ? y : L).filter(Boolean).flat()
    }, [w, y, O, k]);
    l.useEffect(() => {
        if (r || !c) return;

        function A(H) {
            if (H.key === "Tab") {
                Te(y, ft(Ye(y))) && k().length === 0 && !x && Pe(H);
                const K = C(),
                    ee = kt(H);
                O.current[0] === "reference" && ee === w && (Pe(H), H.shiftKey ? et(K[K.length - 1]) : et(K[1])), O.current[1] === "floating" && ee === y && H.shiftKey && (Pe(H), et(K[0]))
            }
        }
        const L = Ye(y);
        return L.addEventListener("keydown", A), () => {
            L.removeEventListener("keydown", A)
        }
    }, [r, w, y, c, O, x, k, C]), l.useEffect(() => {
        if (r || !f) return;

        function A() {
            S.current = !0, setTimeout(() => {
                S.current = !1
            })
        }

        function L(H) {
            const K = H.relatedTarget;
            queueMicrotask(() => {
                const ee = !(Te(w, K) || Te(y, K) || Te(K, y) || Te(T == null ? void 0 : T.portalNode, K) || K != null && K.hasAttribute(nn("focus-guard")) || D && (jt(D.nodesRef.current, v).find(q => {
                    var Z, re;
                    return Te((Z = q.context) == null ? void 0 : Z.elements.floating, K) || Te((re = q.context) == null ? void 0 : re.elements.domReference, K)
                }) || sf(D.nodesRef.current, v).find(q => {
                    var Z, re;
                    return ((Z = q.context) == null ? void 0 : Z.elements.floating) === K || ((re = q.context) == null ? void 0 : re.elements.domReference) === K
                })));
                K && ee && !S.current && K !== oa() && (W.current = !0, m(!1, H))
            })
        }
        if (y && _e(w)) return w.addEventListener("focusout", L), w.addEventListener("pointerdown", A), !c && y.addEventListener("focusout", L), () => {
            w.removeEventListener("focusout", L), w.removeEventListener("pointerdown", A), !c && y.removeEventListener("focusout", L)
        }
    }, [r, w, y, c, v, D, T, m, f]), l.useEffect(() => {
        var A;
        if (r) return;
        const L = Array.from((T == null || (A = T.portalNode) == null ? void 0 : A.querySelectorAll("[" + nn("portal") + "]")) || []);
        if (y) {
            const H = [y, ...L, F.current, I.current, O.current.includes("reference") || x ? w : null].filter(ee => ee != null),
                K = c || x ? ea(H, E, !E) : ea(H);
            return () => {
                K()
            }
        }
    }, [r, w, y, c, O, T, x, E]), xe(() => {
        if (r || !y) return;
        const A = Ye(y),
            L = ft(A);
        queueMicrotask(() => {
            const H = C(y),
                K = N.current,
                ee = (typeof K == "number" ? H[K] : K.current) || y,
                q = Te(y, L);
            !$ && !q && d && et(ee, {
                preventScroll: ee === y
            })
        })
    }, [r, d, y, $, C, N]), xe(() => {
        if (r || !y) return;
        let A = !1;
        const L = Ye(y),
            H = ft(L);
        let ee = g.current.openEvent;
        hr(H);

        function q(Z) {
            let {
                open: re,
                reason: we,
                event: pe,
                nested: B
            } = Z;
            re && (ee = pe), we === "escape-key" && p.domReference.current && hr(p.domReference.current), we === "hover" && pe.type === "mouseleave" && (W.current = !0), we === "outside-press" && (B ? (W.current = !1, A = !0) : W.current = !(Pi(pe) || _i(pe)))
        }
        return h.on("openchange", q), () => {
            h.off("openchange", q);
            const Z = ft(L),
                re = Te(y, Z) || D && jt(D.nodesRef.current, v).some(B => {
                    var V;
                    return Te((V = B.context) == null ? void 0 : V.elements.floating, Z)
                });
            (re || ee && ["click", "mousedown"].includes(ee.type)) && p.domReference.current && hr(p.domReference.current);
            const pe = oa();
            _.current && !W.current && _e(pe) && (!(pe !== Z && Z !== L.body) || re) && et(pe, {
                cancelPrevious: !1,
                preventScroll: A
            })
        }
    }, [r, y, _, g, p, h, D, v]), xe(() => {
        if (!(r || !T)) return T.setFocusManagerState({
            modal: c,
            closeOnFocusOut: f,
            open: d,
            onOpenChange: m,
            refs: p
        }), () => {
            T.setFocusManagerState(null)
        }
    }, [r, T, c, d, m, p, f]), xe(() => {
        if (r || !y || typeof MutationObserver != "function" || $) return;
        const A = () => {
            const H = y.getAttribute("tabindex");
            O.current.includes("floating") || ft(Ye(y)) !== p.domReference.current && k().length === 0 ? H !== "0" && y.setAttribute("tabindex", "0") : H !== "-1" && y.setAttribute("tabindex", "-1")
        };
        A();
        const L = new MutationObserver(A);
        return L.observe(y, {
            childList: !0,
            subtree: !0,
            attributes: !0
        }), () => {
            L.disconnect()
        }
    }, [r, y, p, O, k, $]);

    function R(A) {
        return r || !u || !c ? null : l.createElement(bf, {
            ref: A === "start" ? F : I,
            onClick: L => m(!1, L.nativeEvent)
        }, typeof u == "string" ? u : "Dismiss")
    }
    const U = !r && E && (P || c);
    return l.createElement(l.Fragment, null, U && l.createElement(Wn, {
        "data-type": "inside",
        ref: T == null ? void 0 : T.beforeInsideRef,
        onFocus: A => {
            if (c) {
                const H = C();
                et(o[0] === "reference" ? H[0] : H[H.length - 1])
            } else if (T != null && T.preserveTabOrder && T.portalNode)
                if (W.current = !1, Qt(A, T.portalNode)) {
                    const H = Li() || w;
                    H == null || H.focus()
                } else {
                    var L;
                    (L = T.beforeOutsideRef.current) == null || L.focus()
                }
        }
    }), !x && R("start"), n, R("end"), U && l.createElement(Wn, {
        "data-type": "inside",
        ref: T == null ? void 0 : T.afterInsideRef,
        onFocus: A => {
            if (c) et(C()[0]);
            else if (T != null && T.preserveTabOrder && T.portalNode)
                if (f && (W.current = !0), Qt(A, T.portalNode)) {
                    const H = ji() || w;
                    H == null || H.focus()
                } else {
                    var L;
                    (L = T.afterOutsideRef.current) == null || L.focus()
                }
        }
    }))
}
const yf = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick"
    },
    wf = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture"
    },
    aa = e => {
        var t, n;
        return {
            escapeKey: typeof e == "boolean" ? e : (t = e == null ? void 0 : e.escapeKey) != null ? t : !1,
            outsidePress: typeof e == "boolean" ? e : (n = e == null ? void 0 : e.outsidePress) != null ? n : !0
        }
    };

function xf(e, t) {
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
        escapeKey: u = !0,
        outsidePress: f = !0,
        outsidePressEvent: d = "pointerdown",
        referencePress: p = !1,
        referencePressEvent: v = "pointerdown",
        ancestorScroll: m = !1,
        bubbles: h,
        capture: g
    } = t, w = Zn(), y = vt(typeof f == "function" ? f : () => !1), $ = typeof f == "function" ? y : f, x = l.useRef(!1), E = l.useRef(!1), {
        escapeKey: O,
        outsidePress: N
    } = aa(h), {
        escapeKey: _,
        outsidePress: D
    } = aa(g), T = vt(S => {
        var P;
        if (!n || !c || !u || S.key !== "Escape") return;
        const k = (P = s.current.floatingContext) == null ? void 0 : P.nodeId,
            C = w ? jt(w.nodesRef.current, k) : [];
        if (!O && (S.stopPropagation(), C.length > 0)) {
            let R = !0;
            if (C.forEach(U => {
                    var A;
                    if ((A = U.context) != null && A.open && !U.context.dataRef.current.__escapeKeyBubbles) {
                        R = !1;
                        return
                    }
                }), !R) return
        }
        r(!1, Rd(S) ? S.nativeEvent : S, "escape-key")
    }), F = vt(S => {
        var P;
        const k = () => {
            var C;
            T(S), (C = kt(S)) == null || C.removeEventListener("keydown", k)
        };
        (P = kt(S)) == null || P.addEventListener("keydown", k)
    }), I = vt(S => {
        var P;
        const k = x.current;
        x.current = !1;
        const C = E.current;
        if (E.current = !1, d === "click" && C || k || typeof $ == "function" && !$(S)) return;
        const R = kt(S),
            U = "[" + nn("inert") + "]",
            A = Ye(i).querySelectorAll(U);
        let L = be(R) ? R : null;
        for (; L && !bt(L);) {
            const q = st(L);
            if (bt(q) || !be(q)) break;
            L = q
        }
        if (A.length && be(R) && !Sd(R) && !Te(R, i) && Array.from(A).every(q => !Te(L, q))) return;
        if (_e(R) && i) {
            const q = R.clientWidth > 0 && R.scrollWidth > R.clientWidth,
                Z = R.clientHeight > 0 && R.scrollHeight > R.clientHeight;
            let re = Z && S.offsetX > R.clientWidth;
            if (Z && je(R).direction === "rtl" && (re = S.offsetX <= R.offsetWidth - R.clientWidth), re || q && S.offsetY > R.clientHeight) return
        }
        const H = (P = s.current.floatingContext) == null ? void 0 : P.nodeId,
            K = w && jt(w.nodesRef.current, H).some(q => {
                var Z;
                return vr(S, (Z = q.context) == null ? void 0 : Z.elements.floating)
            });
        if (vr(S, i) || vr(S, a) || K) return;
        const ee = w ? jt(w.nodesRef.current, H) : [];
        if (ee.length > 0) {
            let q = !0;
            if (ee.forEach(Z => {
                    var re;
                    if ((re = Z.context) != null && re.open && !Z.context.dataRef.current.__outsidePressBubbles) {
                        q = !1;
                        return
                    }
                }), !q) return
        }
        r(!1, S, "outside-press")
    }), W = vt(S => {
        var P;
        const k = () => {
            var C;
            I(S), (C = kt(S)) == null || C.removeEventListener(d, k)
        };
        (P = kt(S)) == null || P.addEventListener(d, k)
    });
    return l.useEffect(() => {
        if (!n || !c) return;
        s.current.__escapeKeyBubbles = O, s.current.__outsidePressBubbles = N;

        function S(C) {
            r(!1, C, "ancestor-scroll")
        }
        const P = Ye(i);
        u && P.addEventListener("keydown", _ ? F : T, _), $ && P.addEventListener(d, D ? W : I, D);
        let k = [];
        return m && (be(a) && (k = mt(a)), be(i) && (k = k.concat(mt(i))), !be(o) && o && o.contextElement && (k = k.concat(mt(o.contextElement)))), k = k.filter(C => {
            var R;
            return C !== ((R = P.defaultView) == null ? void 0 : R.visualViewport)
        }), k.forEach(C => {
            C.addEventListener("scroll", S, {
                passive: !0
            })
        }), () => {
            u && P.removeEventListener("keydown", _ ? F : T, _), $ && P.removeEventListener(d, D ? W : I, D), k.forEach(C => {
                C.removeEventListener("scroll", S)
            })
        }
    }, [s, i, a, o, u, $, d, n, r, m, c, O, N, T, _, F, I, D, W]), l.useEffect(() => {
        x.current = !1
    }, [$, d]), l.useMemo(() => c ? {
        reference: {
            onKeyDown: T,
            [yf[v]]: S => {
                p && r(!1, S.nativeEvent, "reference-press")
            }
        },
        floating: {
            onKeyDown: T,
            onMouseDown() {
                E.current = !0
            },
            onMouseUp() {
                E.current = !0
            },
            [wf[d]]: () => {
                x.current = !0
            }
        }
    } : {}, [c, p, d, v, r, T])
}

function $f(e) {
    const {
        open: t = !1,
        onOpenChange: n,
        elements: r
    } = e, o = lo(), a = l.useRef({}), [i] = l.useState(() => rf()), s = uo() != null, [c, u] = l.useState(r.reference), f = vt((v, m, h) => {
        a.current.openEvent = v ? m : void 0, i.emit("openchange", {
            open: v,
            event: m,
            reason: h,
            nested: s
        }), n == null || n(v, m, h)
    }), d = l.useMemo(() => ({
        setPositionReference: u
    }), []), p = l.useMemo(() => ({
        reference: c || r.reference || null,
        floating: r.floating || null,
        domReference: r.reference
    }), [c, r.reference, r.floating]);
    return l.useMemo(() => ({
        dataRef: a,
        open: t,
        onOpenChange: f,
        elements: p,
        events: i,
        floatingId: o,
        refs: d
    }), [t, f, p, i, o, d])
}

function Cf(e) {
    e === void 0 && (e = {});
    const {
        nodeId: t
    } = e, n = $f({ ...e,
        elements: {
            reference: null,
            floating: null,
            ...e.elements
        }
    }), r = e.rootContext || n, o = r.elements, [a, i] = l.useState(null), [s, c] = l.useState(null), f = (o == null ? void 0 : o.reference) || a, d = l.useRef(null), p = Zn();
    xe(() => {
        f && (d.current = f)
    }, [f]);
    const v = Za({ ...e,
            elements: { ...o,
                ...s && {
                    reference: s
                }
            }
        }),
        m = l.useCallback($ => {
            const x = be($) ? {
                getBoundingClientRect: () => $.getBoundingClientRect(),
                contextElement: $
            } : $;
            c(x), v.refs.setReference(x)
        }, [v.refs]),
        h = l.useCallback($ => {
            (be($) || $ === null) && (d.current = $, i($)), (be(v.refs.reference.current) || v.refs.reference.current === null || $ !== null && !be($)) && v.refs.setReference($)
        }, [v.refs]),
        g = l.useMemo(() => ({ ...v.refs,
            setReference: h,
            setPositionReference: m,
            domReference: d
        }), [v.refs, h, m]),
        w = l.useMemo(() => ({ ...v.elements,
            domReference: f
        }), [v.elements, f]),
        y = l.useMemo(() => ({ ...v,
            ...r,
            refs: g,
            elements: w,
            nodeId: t
        }), [v, g, w, t, r]);
    return xe(() => {
        r.dataRef.current.floatingContext = y;
        const $ = p == null ? void 0 : p.nodesRef.current.find(x => x.id === t);
        $ && ($.context = y)
    }), l.useMemo(() => ({ ...v,
        context: y,
        refs: g,
        elements: w
    }), [v, g, w, y])
}
const ia = "active",
    sa = "selected";

function br(e, t, n) {
    const r = new Map,
        o = n === "item";
    let a = e;
    if (o && e) {
        const {
            [ia]: i, [sa]: s, ...c
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
            let [u, f] = c;
            if (!(o && [ia, sa].includes(u)))
                if (u.indexOf("on") === 0) {
                    if (r.has(u) || r.set(u, []), typeof f == "function") {
                        var d;
                        (d = r.get(u)) == null || d.push(f), i[u] = function() {
                            for (var p, v = arguments.length, m = new Array(v), h = 0; h < v; h++) m[h] = arguments[h];
                            return (p = r.get(u)) == null ? void 0 : p.map(g => g(...m)).find(g => g !== void 0)
                        }
                    }
                } else i[u] = f
        }), i), {})
    }
}

function Ef(e) {
    e === void 0 && (e = []);
    const t = e,
        n = l.useCallback(a => br(a, e, "reference"), t),
        r = l.useCallback(a => br(a, e, "floating"), t),
        o = l.useCallback(a => br(a, e, "item"), e.map(a => a == null ? void 0 : a.item));
    return l.useMemo(() => ({
        getReferenceProps: n,
        getFloatingProps: r,
        getItemProps: o
    }), [n, r, o])
}
let ca = !1;

function Qn(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n
    }
}

function la(e, t) {
    return Qn(t, e === co || e === cn, e === Vt || e === Gt)
}

function gr(e, t, n) {
    return Qn(t, e === cn, n ? e === Vt : e === Gt) || e === "Enter" || e === " " || e === ""
}

function Rf(e, t, n) {
    return Qn(t, n ? e === Vt : e === Gt, e === cn)
}

function ua(e, t, n) {
    return Qn(t, n ? e === Gt : e === Vt, e === co)
}

function Sf(e, t) {
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
        enabled: u = !0,
        selectedIndex: f = null,
        allowEscape: d = !1,
        loop: p = !1,
        nested: v = !1,
        rtl: m = !1,
        virtual: h = !1,
        focusItemOnOpen: g = "auto",
        focusItemOnHover: w = !0,
        openOnArrowKeyDown: y = !0,
        disabledIndices: $ = void 0,
        orientation: x = "vertical",
        cols: E = 1,
        scrollItemIntoView: O = !0,
        virtualItemRef: N,
        itemSizes: _,
        dense: D = !1
    } = t, T = uo(), F = Zn(), I = vt(c), W = l.useRef(g), S = l.useRef(f ? ? -1), P = l.useRef(null), k = l.useRef(!0), C = l.useRef(I), R = l.useRef(!!a), U = l.useRef(!1), A = l.useRef(!1), L = pt($), H = pt(n), K = pt(O), ee = pt(a), q = pt(f), [Z, re] = l.useState(), [we, pe] = l.useState(), B = vt(function(X, oe, te) {
        te === void 0 && (te = !1);

        function de(le) {
            h ? (re(le.id), F == null || F.events.emit("virtualfocus", le), N && (N.current = le)) : et(le, {
                preventScroll: !0,
                sync: Cd() && Di() ? ca || U.current : !1
            })
        }
        const Me = X.current[oe.current];
        Me && de(Me), requestAnimationFrame(() => {
            const le = X.current[oe.current] || Me;
            if (!le) return;
            Me || de(le);
            const z = K.current;
            z && se && (te || !k.current) && (le.scrollIntoView == null || le.scrollIntoView(typeof z == "boolean" ? {
                block: "nearest",
                inline: "nearest"
            } : z))
        })
    });
    xe(() => {
        document.createElement("div").focus({
            get preventScroll() {
                return ca = !0, !1
            }
        })
    }, []), xe(() => {
        u && (n && a ? W.current && f != null && (A.current = !0, S.current = f, I(f)) : R.current && (S.current = -1, C.current(null)))
    }, [u, n, a, f, I]), xe(() => {
        if (u && n && a)
            if (s == null) {
                if (U.current = !1, q.current != null) return;
                if (R.current && (S.current = -1, B(i, S)), !R.current && W.current && (P.current != null || W.current === !0 && P.current == null)) {
                    let X = 0;
                    const oe = () => {
                        i.current[0] == null ? (X < 2 && (X ? requestAnimationFrame : queueMicrotask)(oe), X++) : (S.current = P.current == null || gr(P.current, x, m) || v ? pr(i, L.current) : Xo(i, L.current), P.current = null, I(S.current))
                    };
                    oe()
                }
            } else Zt(i, s) || (S.current = s, B(i, S, A.current), A.current = !1)
    }, [u, n, a, s, q, v, i, x, m, I, B, L]), xe(() => {
        var X;
        if (!u || a || !F || h || !R.current) return;
        const oe = F.nodesRef.current,
            te = (X = oe.find(le => le.id === T)) == null || (X = X.context) == null ? void 0 : X.elements.floating,
            de = ft(Ye(a)),
            Me = oe.some(le => le.context && Te(le.context.elements.floating, de));
        te && !Me && k.current && te.focus({
            preventScroll: !0
        })
    }, [u, a, F, T, h]), xe(() => {
        if (!u || !F || !h || T) return;

        function X(oe) {
            pe(oe.id), N && (N.current = oe)
        }
        return F.events.on("virtualfocus", X), () => {
            F.events.off("virtualfocus", X)
        }
    }, [u, F, h, T, N]), xe(() => {
        C.current = I, R.current = !!a
    }), xe(() => {
        n || (P.current = null)
    }, [n]);
    const V = s != null,
        se = l.useMemo(() => {
            function X(te) {
                if (!n) return;
                const de = i.current.indexOf(te);
                de !== -1 && I(de)
            }
            return {
                onFocus(te) {
                    let {
                        currentTarget: de
                    } = te;
                    X(de)
                },
                onClick: te => {
                    let {
                        currentTarget: de
                    } = te;
                    return de.focus({
                        preventScroll: !0
                    })
                },
                ...w && {
                    onMouseMove(te) {
                        let {
                            currentTarget: de
                        } = te;
                        X(de)
                    },
                    onPointerLeave(te) {
                        let {
                            pointerType: de
                        } = te;
                        !k.current || de === "touch" || (S.current = -1, B(i, S), I(null), h || et(ee.current, {
                            preventScroll: !0
                        }))
                    }
                }
            }
        }, [n, ee, B, w, i, I, h]);
    return l.useMemo(() => {
        if (!u) return {};
        const X = L.current;

        function oe(z) {
            if (k.current = !1, U.current = !0, !H.current && z.currentTarget === ee.current) return;
            if (v && ua(z.key, x, m)) {
                Pe(z), r(!1, z.nativeEvent, "list-navigation"), _e(o) && !h && o.focus();
                return
            }
            const Re = S.current,
                $e = pr(i, X),
                We = Xo(i, X);
            if (z.key === "Home" && (Pe(z), S.current = $e, I(S.current)), z.key === "End" && (Pe(z), S.current = We, I(S.current)), E > 1) {
                const De = _ || Array.from({
                        length: i.current.length
                    }, () => ({
                        width: 1,
                        height: 1
                    })),
                    ze = Zd(De, E, D),
                    xt = ze.findIndex(Ce => Ce != null && !Dn(i.current, Ce, X)),
                    Pt = ze.reduce((Ce, Be, Fe) => Be != null && !Dn(i.current, Be, X) ? Fe : Ce, -1);
                if (S.current = ze[Xd({
                        current: ze.map(Ce => Ce != null ? i.current[Ce] : null)
                    }, {
                        event: z,
                        orientation: x,
                        loop: p,
                        cols: E,
                        disabledIndices: Jd([...X || i.current.map((Ce, Be) => Dn(i.current, Be) ? Be : void 0), void 0], ze),
                        minIndex: xt,
                        maxIndex: Pt,
                        prevIndex: Qd(S.current > We ? $e : S.current, De, ze, E, z.key === cn ? "bl" : z.key === Gt ? "tr" : "tl"),
                        stopEvent: !0
                    })], I(S.current), x === "both") return
            }
            if (la(z.key, x)) {
                if (Pe(z), n && !h && ft(z.currentTarget.ownerDocument) === z.currentTarget) {
                    S.current = gr(z.key, x, m) ? $e : We, I(S.current);
                    return
                }
                gr(z.key, x, m) ? p ? S.current = Re >= We ? d && Re !== i.current.length ? -1 : $e : Se(i, {
                    startingIndex: Re,
                    disabledIndices: X
                }) : S.current = Math.min(We, Se(i, {
                    startingIndex: Re,
                    disabledIndices: X
                })) : p ? S.current = Re <= $e ? d && Re !== -1 ? i.current.length : We : Se(i, {
                    startingIndex: Re,
                    decrement: !0,
                    disabledIndices: X
                }) : S.current = Math.max($e, Se(i, {
                    startingIndex: Re,
                    decrement: !0,
                    disabledIndices: X
                })), Zt(i, S.current) ? I(null) : I(S.current)
            }
        }

        function te(z) {
            g === "auto" && Pi(z.nativeEvent) && (W.current = !0)
        }

        function de(z) {
            W.current = g, g === "auto" && _i(z.nativeEvent) && (W.current = !0)
        }
        const Me = h && n && V && {
                "aria-activedescendant": we || Z
            },
            le = i.current.find(z => (z == null ? void 0 : z.id) === Z);
        return {
            reference: { ...Me,
                onKeyDown(z) {
                    k.current = !1;
                    const Re = z.key.indexOf("Arrow") === 0,
                        $e = Rf(z.key, x, m),
                        We = ua(z.key, x, m),
                        De = la(z.key, x),
                        ze = (v ? $e : De) || z.key === "Enter" || z.key.trim() === "";
                    if (h && n) {
                        const Be = F == null ? void 0 : F.nodesRef.current.find(_t => _t.parentId == null),
                            Fe = F && Be ? cf(F.nodesRef.current, Be.id) : null;
                        if (Re && Fe && N) {
                            const _t = new KeyboardEvent("keydown", {
                                key: z.key,
                                bubbles: !0
                            });
                            if ($e || We) {
                                var xt, Pt;
                                const Dt = ((xt = Fe.context) == null ? void 0 : xt.elements.domReference) === z.currentTarget,
                                    fn = We && !Dt ? (Pt = Fe.context) == null ? void 0 : Pt.elements.domReference : $e ? le : null;
                                fn && (Pe(z), fn.dispatchEvent(_t), pe(void 0))
                            }
                            if (De && Fe.context && Fe.context.open && Fe.parentId && z.currentTarget !== Fe.context.elements.domReference) {
                                var Ce;
                                Pe(z), (Ce = Fe.context.elements.domReference) == null || Ce.dispatchEvent(_t);
                                return
                            }
                        }
                        return oe(z)
                    }
                    if (!(!n && !y && Re)) {
                        if (ze && (P.current = v && De ? null : z.key), v) {
                            $e && (Pe(z), n ? (S.current = pr(i, X), I(S.current)) : r(!0, z.nativeEvent, "list-navigation"));
                            return
                        }
                        De && (f != null && (S.current = f), Pe(z), !n && y ? r(!0, z.nativeEvent, "list-navigation") : oe(z), n && I(S.current))
                    }
                },
                onFocus() {
                    n && !h && I(null)
                },
                onPointerDown: de,
                onMouseDown: te,
                onClick: te
            },
            floating: {
                "aria-orientation": x === "both" ? void 0 : x,
                ...!Ti(o) && Me,
                onKeyDown: oe,
                onPointerMove() {
                    k.current = !0
                }
            },
            item: se
        }
    }, [o, ee, Z, we, L, H, i, u, x, m, h, n, V, v, f, y, d, E, p, g, I, r, se, F, N, _, D])
}
const Pf = new Map([
    ["select", "listbox"],
    ["combobox", "listbox"],
    ["label", !1]
]);

function _f(e, t) {
    var n;
    t === void 0 && (t = {});
    const {
        open: r,
        floatingId: o
    } = e, {
        enabled: a = !0,
        role: i = "dialog"
    } = t, s = (n = Pf.get(i)) != null ? n : i, c = lo(), f = uo() != null;
    return l.useMemo(() => {
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
            item(p) {
                let {
                    active: v,
                    selected: m
                } = p;
                const h = {
                    role: "option",
                    ...v && {
                        id: o + "-option"
                    }
                };
                switch (i) {
                    case "select":
                        return { ...h,
                            "aria-selected": v && m
                        };
                    case "combobox":
                        return { ...h,
                            ...v && {
                                "aria-selected": !0
                            }
                        }
                }
                return {}
            }
        }
    }, [a, i, s, r, o, c, f])
}
var Df = l.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                onChange: a,
                error: i,
                rounded: s = !0,
                options: c,
                className: u,
                optionsClassName: f,
                autoSelect: d,
                value: p,
                hideErrorSpace: v = !0,
                emptyText: m = "No options found",
                groupClassName: h,
                renderOption: g,
                renderLabel: w,
                positionRef: y,
                portal: $ = !0
            } = r,
            x = gt(r, ["label", "onChange", "error", "rounded", "options", "className", "optionsClassName", "autoSelect", "value", "hideErrorSpace", "emptyText", "groupClassName", "renderOption", "renderLabel", "positionRef", "portal"]),
            E, O, N, _;
        const D = $ ? hf : l.Fragment,
            T = l.useMemo(() => {
                const V = p;
                if (V != null && V.value) {
                    const X = c.findIndex(oe => oe.value === V.value);
                    return {
                        option: V,
                        index: X
                    }
                }
                const se = c.findIndex(X => X.value === V);
                return {
                    option: c[se],
                    index: se
                }
            }, [p, c]),
            F = T.option ? (w == null ? void 0 : w(T.option)) || ((E = T == null ? void 0 : T.option) == null ? void 0 : E.text) || ((O = T == null ? void 0 : T.option) == null ? void 0 : O.value) : "",
            [I, W] = l.useState(F),
            [S, P] = l.useState(!1),
            [k, C] = l.useState(T.index),
            R = l.useMemo(() => I === F ? c : c.filter(V => ((V == null ? void 0 : V.text) || "").toLowerCase().includes(I.toLowerCase()) || V.value.toLowerCase().includes(I.toLowerCase())), [I, c, F]),
            {
                refs: U,
                floatingStyles: A,
                context: L
            } = Cf({
                placement: "bottom-start",
                open: S,
                onOpenChange: P,
                whileElementsMounted: qa,
                middleware: [Qa(5), Ja({
                    padding: 10
                }), ei({
                    apply({
                        rects: V,
                        elements: se
                    }) {
                        Object.assign(se.floating.style, {
                            minWidth: `${V.reference.width}px`,
                            maxWidth: `${V.reference.width}px`
                        })
                    },
                    padding: 10
                })]
            }),
            H = V => {
                a == null || a(V), W((w == null ? void 0 : w(V)) || V.text || V.value), P(!1)
            },
            K = V => {
                W(V), V ? (P(!0), C(0)) : P(!1)
            };
        l.useImperativeHandle(n, () => U.domReference.current), l.useEffect(() => {
            y != null && y.current && U.setPositionReference(y.current)
        }, [y, U]);
        const ee = l.useRef([]),
            q = xf(L, {
                outsidePress: () => (W(F), !0)
            }),
            Z = _f(L, {
                role: "listbox"
            }),
            re = Sf(L, {
                listRef: ee,
                activeIndex: k,
                selectedIndex: c.findIndex(V => {
                    var se;
                    return V.value === ((se = T == null ? void 0 : T.option) == null ? void 0 : se.value)
                }),
                onNavigate: C,
                loop: !0,
                virtual: !0
            }),
            {
                getReferenceProps: we,
                getFloatingProps: pe,
                getItemProps: B
            } = Ef([q, Z, re]);
        return b.jsxs("div", {
            className: h,
            children: [o && b.jsx("label", {
                className: `block pb-1 font-semibold ${x.disabled?"text-gray-400":""}`,
                htmlFor: x.id,
                role: "presentation",
                onClick: V => {
                    V.preventDefault(), V.stopPropagation()
                },
                children: o
            }), b.jsxs("div", {
                className: "relative",
                children: [b.jsx(Ei, he(he({
                    ref: U.setReference,
                    "aria-labelledby": "select-label",
                    "aria-autocomplete": "none",
                    className: ve(((N = T == null ? void 0 : T.option) == null ? void 0 : N.icon) && "ltr:pl-8 rtl:pr-8", u),
                    value: I,
                    onChange: K,
                    error: i,
                    rounded: s,
                    hideErrorSpace: v
                }, x), we({
                    onKeyDown: V => {
                        if (V.key === "Enter" && !S) return P(!0);
                        const se = typeof k == "number" && R[k];
                        V.key === "Enter" && se && (V.preventDefault(), H(se))
                    },
                    onClick() {
                        P(!0)
                    },
                    onFocus(V) {
                        d && V.target.select()
                    }
                }))), ((_ = T == null ? void 0 : T.option) == null ? void 0 : _.icon) && b.jsx("span", {
                    className: "absolute top-0 flex h-[42px] items-center px-2 disabled:cursor-not-allowed ltr:left-0 rtl:right-0",
                    children: T == null ? void 0 : T.option.icon
                }), b.jsx("button", {
                    className: `absolute top-0 h-[42px] px-2 disabled:cursor-not-allowed ${i?"ltr:right-3 rtl:left-3":"ltr:right-0 rtl:left-0"}`,
                    "aria-label": `Open ${x.name}`,
                    onClick: () => {
                        P(!0)
                    },
                    tabIndex: -1,
                    disabled: x.disabled,
                    type: "button",
                    children: b.jsx("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 24 24",
                        className: "fill-input/50 rotate-180",
                        children: b.jsx("path", {
                            d: "M6.70710678,15.7071081 C6.31658249,16.0976324 5.68341751,16.0976324 5.29289322,15.7071081 C4.90236893,15.3165838 4.90236893,14.6834188 5.29289322,14.2928945 L11.2928932,8.29289454 C11.6714722,7.9143156 12.2810586,7.90106998 12.6757246,8.26284718 L19.4313874,14.2942293 C19.8385064,14.6674217 19.8660094,15.2999891 19.4928169,15.7071081 C19.1196245,16.1142271 18.4870572,16.14173 18.0799382,15.7685376 L12.0300757,10.3841391 L6.70710678,15.7071081 Z"
                        })
                    })
                })]
            }), b.jsx(D, {
                children: S && b.jsx(gf, {
                    context: L,
                    initialFocus: -1,
                    visuallyHiddenDismiss: !0,
                    children: b.jsxs("div", rt(he({
                        ref: U.setFloating,
                        className: ve("mini-scrollbar bg-input-popover text-text relative z-[99] max-h-40 overflow-y-auto rounded-md py-1 shadow-lg focus:outline-none sm:text-sm md:max-h-52", f),
                        style: A
                    }, pe()), {
                        children: [R.length === 0 && b.jsx("p", {
                            className: "p-4 text-center text-gray-200",
                            children: m
                        }), R.map((V, se) => {
                            var X;
                            return b.jsx("div", rt(he({
                                ref: oe => {
                                    ee.current[se] = oe
                                },
                                role: "option",
                                tabIndex: se === k ? 0 : -1,
                                "aria-selected": se === k,
                                className: `flex cursor-pointer select-none items-center space-x-2 px-4 py-2 outline-none rtl:space-x-reverse ${se===k?"bg-primary-light text-primary-contrast":""}`
                            }, B({
                                onClick() {
                                    var oe;
                                    H(V), (oe = U.domReference.current) == null || oe.focus()
                                }
                            })), {
                                children: g ? g(V) : b.jsxs(b.Fragment, {
                                    children: [V.icon && V.icon, b.jsx("span", {
                                        className: `block truncate ${((X=T==null?void 0:T.option)==null?void 0:X.value)===V.value?"font-medium":"font-normal"}`,
                                        children: V.text || V.value
                                    })]
                                })
                            }), V.value)
                        })]
                    }))
                })
            })]
        })
    }),
    Tf = Df,
    Of = l.forwardRef(function({
        label: t,
        country: n,
        mobile: r,
        onChange: o,
        error: a,
        disabled: i,
        required: s,
        className: c,
        autoFocus: u,
        placeholder: f,
        lang: d,
        hideErrorSpace: p = !0,
        portal: v
    }, m) {
        var h, g, w, y;
        const $ = l.createRef(),
            x = l.createRef(),
            E = tr.map(_ => {
                const D = _[`name_${d}`] || _.name;
                return {
                    value: _.code,
                    text: `${D}-+${_.dial_code}`,
                    id: _.code,
                    icon: b.jsx("img", {
                        className: "shrink-0",
                        src: `https://wbk-assets.s3.me-south-1.amazonaws.com/flags/w80/${_.code.toLowerCase()}.png`,
                        width: 20,
                        height: 14,
                        alt: D
                    })
                }
            });
        l.useEffect(() => {
            u && x.current && x.current.focus()
        }, []);
        const O = l.useMemo(() => tr.find(_ => _.code === (n == null ? void 0 : n.code)), [n == null ? void 0 : n.code]),
            N = _ => {
                var D;
                const T = tr.find(F => F.code === _);
                T && (o("country", T), (D = x.current) == null || D.focus())
            };
        return b.jsxs("fieldset", {
            disabled: i,
            className: c,
            children: [t && b.jsx("legend", {
                className: "pb-1 font-semibold",
                children: t
            }), b.jsxs("div", {
                className: "flex w-full items-baseline rtl:flex-row-reverse",
                ref: $,
                children: [b.jsxs("div", {
                    className: "relative w-full max-w-[105px] shrink-0",
                    children: [b.jsx("label", {
                        htmlFor: "country_code",
                        className: "sr-only",
                        children: "Country Code"
                    }), b.jsx(Tf, {
                        value: O == null ? void 0 : O.code,
                        options: E,
                        onChange: ({
                            value: _
                        }) => N(_),
                        className: "rounded-r-none border-r-0 rtl:rounded-r-none",
                        dir: "ltr",
                        portal: v,
                        positionRef: $,
                        renderLabel: _ => {
                            var D;
                            return (D = _.text) == null ? void 0 : D.split("-")[1]
                        },
                        renderOption: _ => {
                            var D;
                            const [T, F] = ((D = _.text) == null ? void 0 : D.split("-")) || [];
                            return b.jsxs("div", {
                                className: "flex w-full items-center justify-between overflow-hidden",
                                children: [b.jsxs("div", {
                                    className: "flex w-full grow items-center gap-2",
                                    children: [b.jsx("img", {
                                        className: "shrink-0",
                                        src: `https://wbk-assets.s3.me-south-1.amazonaws.com/flags/w80/${_.value.toLowerCase()}.png`,
                                        height: 14,
                                        width: 20,
                                        alt: T
                                    }), b.jsx("span", {
                                        className: "block flex-1 truncate px-2",
                                        children: T
                                    })]
                                }), b.jsx("div", {
                                    dir: "ltr",
                                    children: F
                                })]
                            })
                        }
                    })]
                }), b.jsx("div", {
                    className: "z-10 flex-grow",
                    children: b.jsx(Ei, {
                        className: "rounded-r-md",
                        dir: "ltr",
                        placeholder: O ? `${((g=(h=O==null?void 0:O.mobile_starts_with)==null?void 0:h[0])==null?void 0:g.slice(0,1))||""}${"x".repeat((((w=O.phone_number_lengths)==null?void 0:w[0])||7)-1)}` : f,
                        value: r,
                        type: "tel",
                        name: "mobile",
                        onChange: _ => {
                            const T = (_.startsWith("0") ? _.substring(1) : _).replace(/\D/g, "");
                            o("mobile", T)
                        },
                        error: !!a,
                        ref: m || x,
                        required: s,
                        minLength: (y = O == null ? void 0 : O.phone_number_lengths) == null ? void 0 : y[0],
                        maxLength: O != null && O.phone_number_lengths ? O.phone_number_lengths.slice(-1)[0] : void 0,
                        rounded: !1,
                        hideErrorSpace: !0
                    })
                })]
            }), (a || !p) && b.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${a?"visible":"text-transparent"}`,
                children: a
            })]
        })
    }),
    db = Of;
const Hi = "Dialog",
    [Vi, fb] = Qe(Hi),
    [Mf, Ve] = Vi(Hi),
    Nf = e => {
        const {
            __scopeDialog: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: i = !0
        } = e, s = l.useRef(null), c = l.useRef(null), [u = !1, f] = ct({
            prop: r,
            defaultProp: o,
            onChange: a
        });
        return l.createElement(Mf, {
            scope: t,
            triggerRef: s,
            contentRef: c,
            contentId: At(),
            titleId: At(),
            descriptionId: At(),
            open: u,
            onOpenChange: f,
            onOpenToggle: l.useCallback(() => f(d => !d), [f]),
            modal: i
        }, n)
    },
    kf = "DialogTrigger",
    If = l.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ve(kf, n), a = Ee(t, o.triggerRef);
        return l.createElement(fe.button, j({
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": vo(o.open)
        }, r, {
            ref: a,
            onClick: ne(e.onClick, o.onOpenToggle)
        }))
    }),
    zi = "DialogPortal",
    [Af, Ui] = Vi(zi, {
        forceMount: void 0
    }),
    Ff = e => {
        const {
            __scopeDialog: t,
            forceMount: n,
            children: r,
            container: o
        } = e, a = Ve(zi, t);
        return l.createElement(Af, {
            scope: t,
            forceMount: n
        }, l.Children.map(r, i => l.createElement(wt, {
            present: n || a.open
        }, l.createElement(li, {
            asChild: !0,
            container: o
        }, i))))
    },
    Wr = "DialogOverlay",
    Lf = l.forwardRef((e, t) => {
        const n = Ui(Wr, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            a = Ve(Wr, e.__scopeDialog);
        return a.modal ? l.createElement(wt, {
            present: r || a.open
        }, l.createElement(jf, j({}, o, {
            ref: t
        }))) : null
    }),
    jf = l.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ve(Wr, n);
        return l.createElement(so, {
            as: Bt,
            allowPinchZoom: !0,
            shards: [o.contentRef]
        }, l.createElement(fe.div, j({
            "data-state": vo(o.open)
        }, r, {
            ref: t,
            style: {
                pointerEvents: "auto",
                ...r.style
            }
        })))
    }),
    on = "DialogContent",
    Wf = l.forwardRef((e, t) => {
        const n = Ui(on, e.__scopeDialog),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            a = Ve(on, e.__scopeDialog);
        return l.createElement(wt, {
            present: r || a.open
        }, a.modal ? l.createElement(Bf, j({}, o, {
            ref: t
        })) : l.createElement(Hf, j({}, o, {
            ref: t
        })))
    }),
    Bf = l.forwardRef((e, t) => {
        const n = Ve(on, e.__scopeDialog),
            r = l.useRef(null),
            o = Ee(t, n.contentRef, r);
        return l.useEffect(() => {
            const a = r.current;
            if (a) return hi(a)
        }, []), l.createElement(Gi, j({}, e, {
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ne(e.onCloseAutoFocus, a => {
                var i;
                a.preventDefault(), (i = n.triggerRef.current) === null || i === void 0 || i.focus()
            }),
            onPointerDownOutside: ne(e.onPointerDownOutside, a => {
                const i = a.detail.originalEvent,
                    s = i.button === 0 && i.ctrlKey === !0;
                (i.button === 2 || s) && a.preventDefault()
            }),
            onFocusOutside: ne(e.onFocusOutside, a => a.preventDefault())
        }))
    }),
    Hf = l.forwardRef((e, t) => {
        const n = Ve(on, e.__scopeDialog),
            r = l.useRef(!1),
            o = l.useRef(!1);
        return l.createElement(Gi, j({}, e, {
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
    Gi = l.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            ...i
        } = e, s = Ve(on, n), c = l.useRef(null), u = Ee(t, c);
        return fi(), l.createElement(l.Fragment, null, l.createElement(vi, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a
        }, l.createElement(Xr, j({
            role: "dialog",
            id: s.contentId,
            "aria-describedby": s.descriptionId,
            "aria-labelledby": s.titleId,
            "data-state": vo(s.open)
        }, i, {
            ref: u,
            onDismiss: () => s.onOpenChange(!1)
        }))), !1)
    }),
    Vf = "DialogTitle",
    zf = l.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ve(Vf, n);
        return l.createElement(fe.h2, j({
            id: o.titleId
        }, r, {
            ref: t
        }))
    }),
    Uf = "DialogDescription",
    Gf = l.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ve(Uf, n);
        return l.createElement(fe.p, j({
            id: o.descriptionId
        }, r, {
            ref: t
        }))
    }),
    Yf = "DialogClose",
    Kf = l.forwardRef((e, t) => {
        const {
            __scopeDialog: n,
            ...r
        } = e, o = Ve(Yf, n);
        return l.createElement(fe.button, j({
            type: "button"
        }, r, {
            ref: t,
            onClick: ne(e.onClick, () => o.onOpenChange(!1))
        }))
    });

function vo(e) {
    return e ? "open" : "closed"
}
const Yi = Nf,
    qf = If,
    Ki = Ff,
    qi = Lf,
    Xi = Wf,
    Xf = zf,
    Zf = Gf,
    Zi = Kf;
var Qf = ({
        body: e,
        render: t,
        stickyHeader: n,
        stickyFooter: r,
        show: o,
        closeButton: a,
        onClose: i,
        size: s = "md",
        fullscreen: c,
        className: u,
        ignoreHistory: f,
        zIndex: d
    }) => {
        const [p, v] = l.useState(!1), m = typeof o < "u", h = () => {
            i ? i() : v(!1)
        }, g = () => {
            v(!0)
        }, w = l.useMemo(() => {
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
        }, [s]), y = () => {
            if (f) return h();
            history.back()
        };
        return l.useEffect(() => {
            (m ? o : p) && !f && (history.pushState("", ""), window.onpopstate = () => {
                h()
            })
        }, [o, p, f]), b.jsxs(l.Fragment, {
            children: [t && t({
                close: y,
                open: g,
                isOpen: p
            }), b.jsx(Yi, {
                open: m ? o : p,
                children: b.jsxs(Ki, {
                    children: [b.jsx(qi, {
                        onClick: $ => {
                            $.preventDefault(), $.stopPropagation(), y()
                        },
                        style: {
                            zIndex: d
                        },
                        className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/70"
                    }), b.jsx(Xi, {
                        onEscapeKeyDown: () => {
                            y()
                        },
                        className: `data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-left-1/2 data-[state=closed]:slide-out-to-top-[45%] data-[state=open]:slide-in-from-top-[45%] fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 outline-none ${c?"":w} `,
                        style: {
                            zIndex: d
                        },
                        children: b.jsxs("div", {
                            className: ve("bg-body-light mini-scrollbar w-full rounded-md shadow-xl", c ? "h-screen" : "max-h-[95vh]", u),
                            children: [a && b.jsx("div", {
                                className: "flex w-full justify-end p-2",
                                children: b.jsx(Zi, {
                                    asChild: !0,
                                    children: b.jsx(di, {
                                        className: "h-6 w-6 shrink-0 rounded-full p-1",
                                        theme: "white",
                                        shape: "outlined",
                                        "aria-label": "Close",
                                        onClick: y,
                                        children: b.jsx("svg", {
                                            className: "shrink-0",
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 14 13",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: b.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M12.4679 0.291551C12.0774 -0.0989738 11.4442 -0.0989739 11.0537 0.29155L7.04678 4.29849L3.03984 0.291551C2.64932 -0.0989729 2.01615 -0.0989726 1.62563 0.291552L1.15422 0.762956C0.763697 1.15348 0.763697 1.78664 1.15422 2.17717L5.16116 6.18411L1.15422 10.191C0.763698 10.5816 0.763698 11.2147 1.15422 11.6053L1.62563 12.0767C2.01615 12.4672 2.64932 12.4672 3.03984 12.0767L7.04678 8.06973L11.0537 12.0767C11.4442 12.4672 12.0774 12.4672 12.4679 12.0767L12.9393 11.6053C13.3299 11.2147 13.3299 10.5816 12.9393 10.191L8.9324 6.18411L12.9393 2.17717C13.3299 1.78664 13.3299 1.15348 12.9393 0.762955L12.4679 0.291551Z",
                                                fill: "currentColor"
                                            })
                                        })
                                    })
                                })
                            }), n && b.jsx("header", {
                                className: "sticky top-0 z-10 shadow-sm",
                                children: n({
                                    close: y
                                })
                            }), e({
                                close: y
                            }), r && b.jsx("footer", {
                                className: "fixed bottom-0 left-0 w-full shadow-sm",
                                children: r({
                                    close: y
                                })
                            })]
                        })
                    })]
                })
            })]
        })
    },
    vb = Qf,
    Jf = ({
        numOfInput: e = 4,
        autoFocus: t = !0,
        legend: n,
        onlyNumbers: r,
        onChange: o,
        onSubmit: a,
        autoSubmit: i = !0,
        disabled: s,
        pulseActive: c = !0,
        renderButton: u,
        error: f,
        formId: d,
        hideErrorSpace: p = !0,
        shape: v = "default",
        className: m
    }) => {
        const h = "0".repeat(e).split(""),
            g = l.useRef([]),
            [w, y] = l.useState(h.map(() => ""));
        l.useEffect(() => {
            o && o(w.join(""))
        }, [w]), l.useEffect(() => {
            t && g.current.length > 0 && O(0)
        }, [t]);
        const $ = (P, k) => {
                y(C => C.map((R, U) => U === P ? k : R))
            },
            x = () => {
                y(h.map(() => ""))
            },
            E = P => (r ? /^[0-9]$/ : /^[a-z0-9]$/i).test(P) || P === "",
            O = P => {
                const k = g.current[P];
                k && setTimeout(() => {
                    k.focus()
                }, 0)
            },
            N = P => {
                e > P && O(P + 1)
            },
            _ = P => {
                $(P, ""), P < e && O(P - 1)
            },
            D = P => Number(P.getAttribute("data-index")),
            T = P => {
                const k = P.target.value,
                    C = ["Backspace", "Delete"].includes(P.key),
                    R = P.key === "Unidentified";
                if ((C || R) && !k) {
                    const A = D(P.currentTarget);
                    _(A)
                }
            },
            F = P => {
                var k, C, R;
                const U = D(P.currentTarget);
                let A = ((k = P.nativeEvent) == null ? void 0 : k.data) || "";
                if (A || (A = ((R = (C = P.target) == null ? void 0 : C.value) == null ? void 0 : R[0]) || ""), E(A)) {
                    $(U, A);
                    const H = U === e - 1;
                    if (i && H && a && A) {
                        const K = [...w];
                        K[U] = A, S(K.join("")), W(P.target);
                        return
                    }
                    A ? N(U) : _(U)
                }
            },
            I = P => {
                const C = P.clipboardData.getData("text/plain").trim();
                if (!C.length) return;
                let R = D(P.currentTarget);
                const U = e - 1;
                let A = "";
                for (const K of C.split("")) {
                    if (R > U) break;
                    E(K) && ($(R, K), A += K, R++)
                }
                const H = Math.min(R, U) === U;
                setTimeout(() => {
                    O(Math.min(R, U))
                }, 0), H && A.length === e && (S(A), W(P.target))
            },
            W = (P, k = !1) => {
                c && (k ? P.classList.add("animate-heart-beat") : P.classList.remove("animate-heart-beat"))
            },
            S = P => ec(void 0, null, function*() {
                try {
                    a && (yield a(P))
                } catch {
                    O(e - 1)
                }
            });
        return b.jsxs("form", {
            onSubmit: P => {
                P.preventDefault(), S(w.join(""))
            },
            id: d,
            name: d,
            children: [b.jsxs("fieldset", {
                className: "flex items-center justify-center gap-4 rtl:flex-row-reverse",
                children: [n && b.jsx("legend", {
                    className: "w-full",
                    children: n
                }), b.jsx("div", {
                    className: ve("flex items-center justify-center gap-4 rtl:flex-row-reverse", v === "contained" && `bg-input/20 hover:bg-input/30 has-[:focus]:bg-input/30 has-[:disabled]:bg-input/10 has-[:disabled]:text-text/60 h-11 w-full gap-2 rounded-md border p-2 placeholder:text-gray-400 has-[:disabled]:cursor-not-allowed has-[:focus]:outline-none has-[:focus]:ring-0 ${f?"border-error":"border-input/20 has-[:focus]:border-input/30"}`, m),
                    children: h.map((P, k) => b.jsx("input", {
                        "data-index": k.toString(),
                        ref: C => {
                            C && (g.current[k] = C)
                        },
                        type: r ? "tel" : "text",
                        value: w[k] || "",
                        onChange: F,
                        onKeyUp: T,
                        onKeyDown: C => {
                            C.target.select(), C.repeat && C.preventDefault()
                        },
                        onFocus: C => {
                            C.target.select(), W(C.target, !0)
                        },
                        onBlur: C => {
                            W(C.target)
                        },
                        onPaste: I,
                        disabled: s,
                        className: ve(v === "default" && "border-input/30 bg-input/20 hover:bg-input/30 focus:border-input/40 focus:bg-input/30 disabled:bg-input/10 disabled:text-text/60 disabled:border-input/10 h-12 w-full max-w-[60px] border-2 text-center outline-none focus:ring-0 disabled:cursor-not-allowed", v === "contained" && `border-input/30 h-full w-full max-w-[20px] border-0 bg-transparent p-0 text-center outline-none focus:ring-0 ${w[k]?"border-b-0 text-lg":"border-b-2"}`)
                    }, k))
                })]
            }), typeof f == "string" && f || !p ? b.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-center text-xs ${f?"visible":"text-transparent"}`,
                children: f
            }) : null, !!u && u({
                resetState: x
            })]
        })
    },
    pb = Jf;
const Qi = "Popover",
    [Ji, mb] = Qe(Qi, [Gn]),
    po = Gn(),
    [ev, Yt] = Ji(Qi),
    tv = e => {
        const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            modal: i = !1
        } = e, s = po(t), c = l.useRef(null), [u, f] = l.useState(!1), [d = !1, p] = ct({
            prop: r,
            defaultProp: o,
            onChange: a
        });
        return l.createElement(ii, s, l.createElement(ev, {
            scope: t,
            contentId: At(),
            triggerRef: c,
            open: d,
            onOpenChange: p,
            onOpenToggle: l.useCallback(() => p(v => !v), [p]),
            hasCustomAnchor: u,
            onCustomAnchorAdd: l.useCallback(() => f(!0), []),
            onCustomAnchorRemove: l.useCallback(() => f(!1), []),
            modal: i
        }, n))
    },
    nv = "PopoverTrigger",
    rv = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            ...r
        } = e, o = Yt(nv, n), a = po(n), i = Ee(t, o.triggerRef), s = l.createElement(fe.button, j({
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": o.open,
            "aria-controls": o.contentId,
            "data-state": ns(o.open)
        }, r, {
            ref: i,
            onClick: ne(e.onClick, o.onOpenToggle)
        }));
        return o.hasCustomAnchor ? s : l.createElement(si, j({
            asChild: !0
        }, a), s)
    }),
    es = "PopoverPortal",
    [ov, av] = Ji(es, {
        forceMount: void 0
    }),
    iv = e => {
        const {
            __scopePopover: t,
            forceMount: n,
            children: r,
            container: o
        } = e, a = Yt(es, t);
        return l.createElement(ov, {
            scope: t,
            forceMount: n
        }, l.createElement(wt, {
            present: n || a.open
        }, l.createElement(li, {
            asChild: !0,
            container: o
        }, r)))
    },
    an = "PopoverContent",
    sv = l.forwardRef((e, t) => {
        const n = av(an, e.__scopePopover),
            {
                forceMount: r = n.forceMount,
                ...o
            } = e,
            a = Yt(an, e.__scopePopover);
        return l.createElement(wt, {
            present: r || a.open
        }, a.modal ? l.createElement(cv, j({}, o, {
            ref: t
        })) : l.createElement(lv, j({}, o, {
            ref: t
        })))
    }),
    cv = l.forwardRef((e, t) => {
        const n = Yt(an, e.__scopePopover),
            r = l.useRef(null),
            o = Ee(t, r),
            a = l.useRef(!1);
        return l.useEffect(() => {
            const i = r.current;
            if (i) return hi(i)
        }, []), l.createElement(so, {
            as: Bt,
            allowPinchZoom: !0
        }, l.createElement(ts, j({}, e, {
            ref: o,
            trapFocus: n.open,
            disableOutsidePointerEvents: !0,
            onCloseAutoFocus: ne(e.onCloseAutoFocus, i => {
                var s;
                i.preventDefault(), a.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus()
            }),
            onPointerDownOutside: ne(e.onPointerDownOutside, i => {
                const s = i.detail.originalEvent,
                    c = s.button === 0 && s.ctrlKey === !0,
                    u = s.button === 2 || c;
                a.current = u
            }, {
                checkForDefaultPrevented: !1
            }),
            onFocusOutside: ne(e.onFocusOutside, i => i.preventDefault(), {
                checkForDefaultPrevented: !1
            })
        })))
    }),
    lv = l.forwardRef((e, t) => {
        const n = Yt(an, e.__scopePopover),
            r = l.useRef(!1),
            o = l.useRef(!1);
        return l.createElement(ts, j({}, e, {
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
    ts = l.forwardRef((e, t) => {
        const {
            __scopePopover: n,
            trapFocus: r,
            onOpenAutoFocus: o,
            onCloseAutoFocus: a,
            disableOutsidePointerEvents: i,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onInteractOutside: f,
            ...d
        } = e, p = Yt(an, n), v = po(n);
        return fi(), l.createElement(vi, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: a
        }, l.createElement(Xr, {
            asChild: !0,
            disableOutsidePointerEvents: i,
            onInteractOutside: f,
            onEscapeKeyDown: s,
            onPointerDownOutside: c,
            onFocusOutside: u,
            onDismiss: () => p.onOpenChange(!1)
        }, l.createElement(ci, j({
            "data-state": ns(p.open),
            role: "dialog",
            id: p.contentId
        }, v, d, {
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

function ns(e) {
    return e ? "open" : "closed"
}
const uv = tv,
    dv = rv,
    fv = iv,
    vv = sv;
var pv = l.forwardRef((e, t) => {
        var n = e,
            {
                content: r,
                defaultOpen: o,
                open: a,
                onOpenChange: i,
                modal: s,
                className: c,
                children: u
            } = n,
            f = gt(n, ["content", "defaultOpen", "open", "onOpenChange", "modal", "className", "children"]);
        return b.jsxs(uv, {
            defaultOpen: o,
            open: a,
            onOpenChange: i,
            modal: s,
            children: [b.jsx(dv, {
                asChild: !0,
                children: u
            }), b.jsx(fv, {
                children: b.jsx(vv, rt(he({
                    ref: t,
                    onOpenAutoFocus: d => d.preventDefault(),
                    className: ve("bg-body-light data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-[var(--radix-popover-trigger-width)] rounded-md p-4", c)
                }, f), {
                    children: r
                }))
            })]
        })
    }),
    hb = pv;
const rs = "Radio",
    [mv, os] = Qe(rs),
    [hv, bv] = mv(rs),
    gv = l.forwardRef((e, t) => {
        const {
            __scopeRadio: n,
            name: r,
            checked: o = !1,
            required: a,
            disabled: i,
            value: s = "on",
            onCheck: c,
            ...u
        } = e, [f, d] = l.useState(null), p = Ee(t, h => d(h)), v = l.useRef(!1), m = f ? !!f.closest("form") : !0;
        return l.createElement(hv, {
            scope: n,
            checked: o,
            disabled: i
        }, l.createElement(fe.button, j({
            type: "button",
            role: "radio",
            "aria-checked": o,
            "data-state": as(o),
            "data-disabled": i ? "" : void 0,
            disabled: i,
            value: s
        }, u, {
            ref: p,
            onClick: ne(e.onClick, h => {
                o || c == null || c(), m && (v.current = h.isPropagationStopped(), v.current || h.stopPropagation())
            })
        })), m && l.createElement(xv, {
            control: f,
            bubbles: !v.current,
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
    yv = "RadioIndicator",
    wv = l.forwardRef((e, t) => {
        const {
            __scopeRadio: n,
            forceMount: r,
            ...o
        } = e, a = bv(yv, n);
        return l.createElement(wt, {
            present: r || a.checked
        }, l.createElement(fe.span, j({
            "data-state": as(a.checked),
            "data-disabled": a.disabled ? "" : void 0
        }, o, {
            ref: t
        })))
    }),
    xv = e => {
        const {
            control: t,
            checked: n,
            bubbles: r = !0,
            ...o
        } = e, a = l.useRef(null), i = Pa(n), s = Yr(t);
        return l.useEffect(() => {
            const c = a.current,
                u = window.HTMLInputElement.prototype,
                d = Object.getOwnPropertyDescriptor(u, "checked").set;
            if (i !== n && d) {
                const p = new Event("click", {
                    bubbles: r
                });
                d.call(c, n), c.dispatchEvent(p)
            }
        }, [i, n, r]), l.createElement("input", j({
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

function as(e) {
    return e ? "checked" : "unchecked"
}
const $v = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    is = "RadioGroup",
    [Cv, bb] = Qe(is, [Vn, os]),
    ss = Vn(),
    cs = os(),
    [Ev, Rv] = Cv(is),
    Sv = l.forwardRef((e, t) => {
        const {
            __scopeRadioGroup: n,
            name: r,
            defaultValue: o,
            value: a,
            required: i = !1,
            disabled: s = !1,
            orientation: c,
            dir: u,
            loop: f = !0,
            onValueChange: d,
            ...p
        } = e, v = ss(n), m = Kr(u), [h, g] = ct({
            prop: a,
            defaultProp: o,
            onChange: d
        });
        return l.createElement(Ev, {
            scope: n,
            name: r,
            required: i,
            disabled: s,
            value: h,
            onValueChange: g
        }, l.createElement(Na, j({
            asChild: !0
        }, v, {
            orientation: c,
            dir: m,
            loop: f
        }), l.createElement(fe.div, j({
            role: "radiogroup",
            "aria-required": i,
            "aria-orientation": c,
            "data-disabled": s ? "" : void 0,
            dir: m
        }, p, {
            ref: t
        }))))
    }),
    Pv = "RadioGroupItem",
    _v = l.forwardRef((e, t) => {
        const {
            __scopeRadioGroup: n,
            disabled: r,
            ...o
        } = e, a = Rv(Pv, n), i = a.disabled || r, s = ss(n), c = cs(n), u = l.useRef(null), f = Ee(t, u), d = a.value === o.value, p = l.useRef(!1);
        return l.useEffect(() => {
            const v = h => {
                    $v.includes(h.key) && (p.current = !0)
                },
                m = () => p.current = !1;
            return document.addEventListener("keydown", v), document.addEventListener("keyup", m), () => {
                document.removeEventListener("keydown", v), document.removeEventListener("keyup", m)
            }
        }, []), l.createElement(ka, j({
            asChild: !0
        }, s, {
            focusable: !i,
            active: d
        }), l.createElement(gv, j({
            disabled: i,
            required: a.required,
            checked: d
        }, c, o, {
            name: a.name,
            ref: f,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: ne(v => {
                v.key === "Enter" && v.preventDefault()
            }),
            onFocus: ne(o.onFocus, () => {
                var v;
                p.current && ((v = u.current) === null || v === void 0 || v.click())
            })
        })))
    }),
    Dv = l.forwardRef((e, t) => {
        const {
            __scopeRadioGroup: n,
            ...r
        } = e, o = cs(n);
        return l.createElement(wv, j({}, o, r, {
            ref: t
        }))
    }),
    Tv = Sv,
    Ov = _v,
    Mv = Dv;
var Nv = l.forwardRef(function({
        name: t,
        label: n,
        options: r,
        value: o,
        onChange: a,
        error: i,
        disabled: s,
        className: c,
        groupClassName: u,
        required: f,
        dir: d,
        hideErrorSpace: p = !0
    }, v) {
        return b.jsxs(Tv, {
            name: t,
            value: o,
            onValueChange: a,
            required: f,
            disabled: s,
            dir: d,
            ref: v,
            children: [b.jsx("div", {
                className: "text-text block pb-1 data-[disabled=true]:text-gray-400",
                "data-disabled": s,
                children: n
            }), b.jsx("div", {
                className: ve("space-y-2", u),
                children: r.map(m => b.jsxs("div", {
                    onPointerUp: () => {
                        s || a(m.value)
                    },
                    className: ve("bg-input/5 group flex cursor-pointer items-center gap-2 rounded-md border-2 border-transparent p-2 has-[:disabled]:cursor-not-allowed", "has-[[data-state=checked]]:border-primary hover:border-primary-light focus:border-primary-light has-[:disabled]:border-gray-400", c),
                    children: [b.jsx(Ov, {
                        className: "bg-input border-input/20 hover:border-primary outline-primary data-[state=checked]:border-primary peer h-[24px] w-[24px] shrink-0 rounded-full border-2 disabled:border-transparent disabled:bg-gray-400",
                        value: m.value,
                        checked: o === m.value,
                        id: `${t}_${m.value}`,
                        children: b.jsx(Mv, {
                            className: "after:bg-primary flex items-center justify-center after:block after:h-[14px] after:w-[14px] after:rounded-[50%] after:content-['']"
                        })
                    }), b.jsx("label", {
                        className: "w-full cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:text-gray-400",
                        htmlFor: `${t}_${m.value}`,
                        children: m.text || m.value
                    })]
                }, m.value))
            }), (typeof i == "string" && !!i || !p) && b.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${i?"visible":"text-transparent"}`,
                children: i
            })]
        })
    }),
    gb = Nv;

function kv(e) {
    if (typeof document > "u") return;
    let t = document.head || document.getElementsByTagName("head")[0],
        n = document.createElement("style");
    n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
}
const ls = M.createContext({
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
    Jn = () => {
        const e = M.useContext(ls);
        if (!e) throw new Error("useDrawerContext must be used within a Drawer.Root");
        return e
    };
kv("[vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1)}[vaul-drawer][vaul-drawer-direction=bottom]{transform:translate3d(0,100%,0)}[vaul-drawer][vaul-drawer-direction=top]{transform:translate3d(0,-100%,0)}[vaul-drawer][vaul-drawer-direction=left]{transform:translate3d(-100%,0,0)}[vaul-drawer][vaul-drawer-direction=right]{transform:translate3d(100%,0,0)}.vaul-dragging .vaul-scrollable [vault-drawer-direction=top]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=bottom]{overflow-y:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=left]{overflow-x:hidden!important}.vaul-dragging .vaul-scrollable [vault-drawer-direction=right]{overflow-x:hidden!important}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-drawer][vaul-drawer-visible=true][vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[vaul-overlay]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[vaul-overlay][vaul-drawer-visible=true]{opacity:1}[vaul-drawer]::after{content:'';position:absolute;background:inherit;background-color:inherit}[vaul-drawer][vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[vaul-drawer][vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[vaul-drawer][vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[vaul-handle]{display:block;position:relative;opacity:.8;margin-left:auto;margin-right:auto;height:5px;width:56px;border-radius:1rem;touch-action:pan-y;cursor:grab}[vaul-handle]:active,[vaul-handle]:hover{opacity:1}[vaul-handle]:active{cursor:grabbing}[vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}[vaul-overlay][vaul-snap-points=true]:not([vaul-snap-points-overlay=true]):not([data-state=closed]){opacity:0}[vaul-overlay][vaul-snap-points-overlay=true]:not([vaul-drawer-visible=false]){opacity:1}@media (hover:hover) and (pointer:fine){[vaul-drawer]{user-select:none}}@media (pointer:fine){[vaul-handle-hitarea]:{width:100%;height:100%}}");
const Iv = typeof window < "u" ? l.useLayoutEffect : l.useEffect;

function Br(...e) {
    return (...t) => {
        for (let n of e) typeof n == "function" && n(...t)
    }
}

function Av() {
    return mo(/^Mac/)
}

function Fv() {
    return mo(/^iPhone/)
}

function Lv() {
    return mo(/^iPad/) || Av() && navigator.maxTouchPoints > 1
}

function us() {
    return Fv() || Lv()
}

function mo(e) {
    return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0
}
const yr = typeof document < "u" && window.visualViewport;

function da(e) {
    let t = window.getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY)
}

function ds(e) {
    for (da(e) && (e = e.parentElement); e && !da(e);) e = e.parentElement;
    return e || document.scrollingElement || document.documentElement
}
const jv = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
let Cn = 0,
    wr;

function Wv(e = {}) {
    let {
        isDisabled: t
    } = e;
    Iv(() => {
        if (!t) return Cn++, Cn === 1 && (us() ? wr = Hv() : wr = Bv()), () => {
            Cn--, Cn === 0 && wr()
        }
    }, [t])
}

function Bv() {
    return Br(fs(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`))
}

function Hv() {
    let e, t = 0,
        n = d => {
            e = ds(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY)
        },
        r = d => {
            if (!e || e === document.documentElement || e === document.body) {
                d.preventDefault();
                return
            }
            let p = d.changedTouches[0].pageY,
                v = e.scrollTop,
                m = e.scrollHeight - e.clientHeight;
            m !== 0 && ((v <= 0 && p > t || v >= m && p < t) && d.preventDefault(), t = p)
        },
        o = d => {
            let p = d.target;
            Hr(p) && p !== document.activeElement && (d.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(() => {
                p.style.transform = ""
            }))
        },
        a = d => {
            let p = d.target;
            Hr(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
                p.style.transform = "", yr && (yr.height < window.innerHeight ? requestAnimationFrame(() => {
                    fa(p)
                }) : yr.addEventListener("resize", () => fa(p), {
                    once: !0
                }))
            }))
        },
        i = () => {
            window.scrollTo(0, 0)
        },
        s = window.pageXOffset,
        c = window.pageYOffset,
        u = Br(fs(document.documentElement, "paddingRight", `${window.innerWidth-document.documentElement.clientWidth}px`));
    window.scrollTo(0, 0);
    let f = Br(Kt(document, "touchstart", n, {
        passive: !1,
        capture: !0
    }), Kt(document, "touchmove", r, {
        passive: !1,
        capture: !0
    }), Kt(document, "touchend", o, {
        passive: !1,
        capture: !0
    }), Kt(document, "focus", a, !0), Kt(window, "scroll", i));
    return () => {
        u(), f(), window.scrollTo(s, c)
    }
}

function fs(e, t, n) {
    let r = e.style[t];
    return e.style[t] = n, () => {
        e.style[t] = r
    }
}

function Kt(e, t, n, r) {
    return e.addEventListener(t, n, r), () => {
        e.removeEventListener(t, n, r)
    }
}

function fa(e) {
    let t = document.scrollingElement || document.documentElement;
    for (; e && e !== t;) {
        let n = ds(e);
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

function Hr(e) {
    return e instanceof HTMLInputElement && !jv.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable
}

function Vv(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}

function zv(...e) {
    return t => e.forEach(n => Vv(n, t))
}

function vs(...e) {
    return l.useCallback(zv(...e), e)
}
let qt = null;

function Uv({
    isOpen: e,
    modal: t,
    nested: n,
    hasBeenOpened: r,
    preventScrollRestoration: o,
    noBodyStyles: a
}) {
    const [i, s] = M.useState(() => typeof window < "u" ? window.location.href : ""), c = M.useRef(0), u = M.useCallback(() => {
        if (qt === null && e && !a) {
            qt = {
                position: document.body.style.position,
                top: document.body.style.top,
                left: document.body.style.left,
                height: document.body.style.height,
                right: "unset"
            };
            const {
                scrollX: d,
                innerHeight: p
            } = window;
            document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
                top: `${-c.current}px`,
                left: `${-d}px`,
                right: "0px",
                height: "auto"
            }), window.setTimeout(() => window.requestAnimationFrame(() => {
                const v = p - window.innerHeight;
                v && c.current >= p && (document.body.style.top = `${-(c.current+v)}px`)
            }), 300)
        }
    }, [e]), f = M.useCallback(() => {
        if (qt !== null && !a) {
            const d = -parseInt(document.body.style.top, 10),
                p = -parseInt(document.body.style.left, 10);
            Object.assign(document.body.style, qt), window.requestAnimationFrame(() => {
                if (o && i !== window.location.href) {
                    s(window.location.href);
                    return
                }
                window.scrollTo(p, d)
            }), qt = null
        }
    }, [i]);
    return M.useEffect(() => {
        function d() {
            c.current = window.scrollY
        }
        return d(), window.addEventListener("scroll", d), () => {
            window.removeEventListener("scroll", d)
        }
    }, []), M.useEffect(() => {
        n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
            f()
        }, 500)) : f())
    }, [e, r, i, t, n, u, f]), {
        restorePositionSetting: f
    }
}
const ps = new WeakMap;

function ce(e, t, n = !1) {
    if (!e || !(e instanceof HTMLElement)) return;
    let r = {};
    Object.entries(t).forEach(([o, a]) => {
        if (o.startsWith("--")) {
            e.style.setProperty(o, a);
            return
        }
        r[o] = e.style[o], e.style[o] = a
    }), !n && ps.set(e, r)
}

function En(e, t) {
    if (!e || !(e instanceof HTMLElement)) return;
    let n = ps.get(e);
    n && (t ? e.style[t] = n[t] : Object.entries(n).forEach(([r, o]) => {
        e.style[r] = o
    }))
}
const ye = e => {
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

function Rn(e, t) {
    if (!e) return null;
    const n = window.getComputedStyle(e),
        r = n.transform || n.webkitTransform || n.mozTransform;
    let o = r.match(/^matrix3d\((.+)\)$/);
    return o ? parseFloat(o[1].split(", ")[ye(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[ye(t) ? 5 : 4]) : null)
}

function Gv(e) {
    return 8 * (Math.log(e + 1) - 2)
}
const ae = {
        DURATION: .5,
        EASE: [.32, .72, 0, 1]
    },
    ms = .4;

function hs(e) {
    const t = M.useRef(e);
    return M.useEffect(() => {
        t.current = e
    }), M.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), [])
}

function Yv({
    defaultProp: e,
    onChange: t
}) {
    const n = M.useState(e),
        [r] = n,
        o = M.useRef(r),
        a = hs(t);
    return M.useEffect(() => {
        o.current !== r && (a(r), o.current = r)
    }, [r, o, a]), n
}

function Kv({
    prop: e,
    defaultProp: t,
    onChange: n = () => {}
}) {
    const [r, o] = Yv({
        defaultProp: t,
        onChange: n
    }), a = e !== void 0, i = a ? e : r, s = hs(n), c = M.useCallback(u => {
        if (a) {
            const d = typeof u == "function" ? u(e) : u;
            d !== e && s(d)
        } else o(u)
    }, [a, e, o, s]);
    return [i, c]
}

function qv({
    activeSnapPointProp: e,
    setActiveSnapPointProp: t,
    snapPoints: n,
    drawerRef: r,
    overlayRef: o,
    fadeFromIndex: a,
    onSnapPointChange: i,
    direction: s = "bottom"
}) {
    const [c, u] = Kv({
        prop: e,
        defaultProp: n == null ? void 0 : n[0],
        onChange: t
    }), f = M.useMemo(() => c === (n == null ? void 0 : n[n.length - 1]) || null, [n, c]), d = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === c || !n, p = M.useMemo(() => n == null ? void 0 : n.findIndex($ => $ === c), [n, c]), v = M.useMemo(() => {
        var $;
        return ($ = n == null ? void 0 : n.map(x => {
            const E = typeof window < "u",
                O = typeof x == "string";
            let N = 0;
            if (O && (N = parseInt(x, 10)), ye(s)) {
                const D = O ? N : E ? x * window.innerHeight : 0;
                return E ? s === "bottom" ? window.innerHeight - D : -window.innerHeight + D : D
            }
            const _ = O ? N : E ? x * window.innerWidth : 0;
            return E ? s === "right" ? window.innerWidth - _ : -window.innerWidth + _ : _
        })) != null ? $ : []
    }, [n]), m = M.useMemo(() => p !== null ? v == null ? void 0 : v[p] : null, [v, p]), h = M.useCallback($ => {
        var x;
        const E = (x = v == null ? void 0 : v.findIndex(O => O === $)) != null ? x : null;
        i(E), ce(r.current, {
            transition: `transform ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`,
            transform: ye(s) ? `translate3d(0, ${$}px, 0)` : `translate3d(${$}px, 0, 0)`
        }), v && E !== v.length - 1 && E !== a ? ce(o.current, {
            transition: `opacity ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`,
            opacity: "0"
        }) : ce(o.current, {
            transition: `opacity ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`,
            opacity: "1"
        }), u(E !== null ? n == null ? void 0 : n[E] : null)
    }, [r.current, n, v, a, o, u]);
    M.useEffect(() => {
        if (c || e) {
            var $;
            const x = ($ = n == null ? void 0 : n.findIndex(E => E === e || E === c)) != null ? $ : -1;
            v && x !== -1 && typeof v[x] == "number" && h(v[x])
        }
    }, [c, e, n, v, h]);

    function g({
        draggedDistance: $,
        closeDrawer: x,
        velocity: E,
        dismissible: O
    }) {
        if (a === void 0) return;
        const N = s === "bottom" || s === "right" ? (m ? ? 0) - $ : (m ? ? 0) + $,
            _ = p === a - 1,
            D = p === 0,
            T = $ > 0;
        if (_ && ce(o.current, {
                transition: `opacity ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`
            }), E > 2 && !T) {
            O ? x() : h(v[0]);
            return
        }
        if (E > 2 && T && v && n) {
            h(v[n.length - 1]);
            return
        }
        const F = v == null ? void 0 : v.reduce((W, S) => typeof W != "number" || typeof S != "number" ? W : Math.abs(S - N) < Math.abs(W - N) ? S : W),
            I = ye(s) ? window.innerHeight : window.innerWidth;
        if (E > ms && Math.abs($) < I * .4) {
            const W = T ? 1 : -1;
            if (W > 0 && f) {
                h(v[n.length - 1]);
                return
            }
            if (D && W < 0 && O && x(), p === null) return;
            h(v[p + W]);
            return
        }
        h(F)
    }

    function w({
        draggedDistance: $
    }) {
        if (m === null) return;
        const x = s === "bottom" || s === "right" ? m - $ : m + $;
        (s === "bottom" || s === "right") && x < v[v.length - 1] || (s === "top" || s === "left") && x > v[v.length - 1] || ce(r.current, {
            transform: ye(s) ? `translate3d(0, ${x}px, 0)` : `translate3d(${x}px, 0, 0)`
        })
    }

    function y($, x) {
        if (!n || typeof p != "number" || !v || a === void 0) return null;
        const E = p === a - 1;
        if (p >= a && x) return 0;
        if (E && !x) return 1;
        if (!d && !E) return null;
        const N = E ? p + 1 : p - 1,
            _ = E ? v[N] - v[N - 1] : v[N + 1] - v[N],
            D = $ / Math.abs(_);
        return E ? 1 - D : D
    }
    return {
        isLastSnapPoint: f,
        activeSnapPoint: c,
        shouldFade: d,
        getPercentageDragged: y,
        setActiveSnapPoint: u,
        activeSnapPointIndex: p,
        onRelease: g,
        onDrag: w,
        snapPointsOffset: v
    }
}
const Xv = .25,
    Zv = 100,
    va = 8,
    Ct = 16,
    pa = 26,
    xr = "vaul-dragging";

function bs({
    open: e,
    onOpenChange: t,
    children: n,
    shouldScaleBackground: r,
    onDrag: o,
    onRelease: a,
    snapPoints: i,
    nested: s = !1,
    setBackgroundColorOnScale: c = !0,
    closeThreshold: u = Xv,
    scrollLockTimeout: f = Zv,
    dismissible: d = !0,
    handleOnly: p = !1,
    fadeFromIndex: v = i && i.length - 1,
    activeSnapPoint: m,
    setActiveSnapPoint: h,
    fixed: g,
    modal: w = !0,
    onClose: y,
    noBodyStyles: $,
    direction: x = "bottom",
    preventScrollRestoration: E = !0,
    disablePreventScroll: O = !1
}) {
    var N;
    const [_ = !1, D] = M.useState(!1), [T, F] = M.useState(!1), [I, W] = M.useState(!1), [S, P] = M.useState(!1), [k, C] = M.useState(!1), [R, U] = M.useState(!1), A = M.useRef(null), L = M.useRef(null), H = M.useRef(null), K = M.useRef(null), ee = M.useRef(null), q = M.useRef(!1), Z = M.useRef(null), re = M.useRef(0), we = M.useRef(!1), pe = M.useRef(0), B = M.useRef(null), V = M.useRef(((N = B.current) == null ? void 0 : N.getBoundingClientRect().height) || 0), se = M.useRef(0), X = M.useCallback(Y => {
        i && Y === le.length - 1 && (L.current = new Date)
    }, []), {
        activeSnapPoint: oe,
        activeSnapPointIndex: te,
        setActiveSnapPoint: de,
        onRelease: Me,
        snapPointsOffset: le,
        onDrag: z,
        shouldFade: Re,
        getPercentageDragged: $e
    } = qv({
        snapPoints: i,
        activeSnapPointProp: m,
        setActiveSnapPointProp: h,
        drawerRef: B,
        fadeFromIndex: v,
        overlayRef: A,
        onSnapPointChange: X,
        direction: x
    });
    Wv({
        isDisabled: !_ || k || !w || R || !T || O
    });
    const {
        restorePositionSetting: We
    } = Uv({
        isOpen: _,
        modal: w,
        nested: s,
        hasBeenOpened: T,
        preventScrollRestoration: E,
        noBodyStyles: $
    });

    function De() {
        return (window.innerWidth - pa) / window.innerWidth
    }

    function ze(Y) {
        var Q;
        !d && !i || B.current && !B.current.contains(Y.target) || (V.current = ((Q = B.current) == null ? void 0 : Q.getBoundingClientRect().height) || 0, C(!0), H.current = new Date, us() && window.addEventListener("touchend", () => q.current = !1, {
            once: !0
        }), Y.target.setPointerCapture(Y.pointerId), re.current = ye(x) ? Y.clientY : Y.clientX)
    }

    function xt(Y, Q) {
        var ue;
        let J = Y;
        const me = (ue = window.getSelection()) == null ? void 0 : ue.toString(),
            ge = B.current ? Rn(B.current, x) : null,
            Le = new Date;
        if (J.hasAttribute("data-vaul-no-drag") || J.closest("[data-vaul-no-drag]")) return !1;
        if (x === "right" || x === "left") return !0;
        if (L.current && Le.getTime() - L.current.getTime() < 500) return !1;
        if (ge !== null && (x === "bottom" ? ge > 0 : ge < 0)) return !0;
        if (me && me.length > 0) return !1;
        if (ee.current && Le.getTime() - ee.current.getTime() < f && ge === 0 || Q) return ee.current = Le, !1;
        for (; J;) {
            if (J.scrollHeight > J.clientHeight) {
                if (J.scrollTop !== 0) return ee.current = new Date, !1;
                if (J.getAttribute("role") === "dialog") return !0
            }
            J = J.parentNode
        }
        return !0
    }

    function Pt(Y) {
        if (B.current && k) {
            const Q = x === "bottom" || x === "right" ? 1 : -1,
                ue = (re.current - (ye(x) ? Y.clientY : Y.clientX)) * Q,
                J = ue > 0,
                me = i && !d && !J;
            if (me && te === 0) return;
            const ge = Math.abs(ue),
                Le = document.querySelector("[vaul-drawer-wrapper]");
            let Ue = ge / V.current;
            const ut = $e(ge, J);
            if (ut !== null && (Ue = ut), me && Ue >= 1 || !q.current && !xt(Y.target, J)) return;
            if (B.current.classList.add(xr), q.current = !0, ce(B.current, {
                    transition: "none"
                }), ce(A.current, {
                    transition: "none"
                }), i && z({
                    draggedDistance: ue
                }), J && !i) {
                const $t = Gv(ue),
                    pn = Math.min($t * -1, 0) * Q;
                ce(B.current, {
                    transform: ye(x) ? `translate3d(0, ${pn}px, 0)` : `translate3d(${pn}px, 0, 0)`
                });
                return
            }
            const vn = 1 - Ue;
            if ((Re || v && te === v - 1) && (o == null || o(Y, Ue), ce(A.current, {
                    opacity: `${vn}`,
                    transition: "none"
                }, !0)), Le && A.current && r) {
                const $t = Math.min(De() + Ue * (1 - De()), 1),
                    pn = 8 - Ue * 8,
                    Co = Math.max(0, 14 - Ue * 14);
                ce(Le, {
                    borderRadius: `${pn}px`,
                    transform: ye(x) ? `scale(${$t}) translate3d(0, ${Co}px, 0)` : `scale(${$t}) translate3d(${Co}px, 0, 0)`,
                    transition: "none"
                }, !0)
            }
            if (!i) {
                const $t = ge * Q;
                ce(B.current, {
                    transform: ye(x) ? `translate3d(0, ${$t}px, 0)` : `translate3d(${$t}px, 0, 0)`
                })
            }
        }
    }
    M.useEffect(() => () => {
        Dt(!1), We()
    }, []), M.useEffect(() => {
        var Y;

        function Q() {
            if (!B.current) return;
            const ue = document.activeElement;
            if (Hr(ue) || we.current) {
                var J;
                const me = ((J = window.visualViewport) == null ? void 0 : J.height) || 0;
                let ge = window.innerHeight - me;
                const Le = B.current.getBoundingClientRect().height || 0;
                se.current || (se.current = Le);
                const Ue = B.current.getBoundingClientRect().top;
                if (Math.abs(pe.current - ge) > 60 && (we.current = !we.current), i && i.length > 0 && le && te) {
                    const ut = le[te] || 0;
                    ge += ut
                }
                if (pe.current = ge, Le > me || we.current) {
                    const ut = B.current.getBoundingClientRect().height;
                    let vn = ut;
                    ut > me && (vn = me - pa), g ? B.current.style.height = `${ut-Math.max(ge,0)}px` : B.current.style.height = `${Math.max(vn,me-Ue)}px`
                } else B.current.style.height = `${se.current}px`;
                i && i.length > 0 && !we.current ? B.current.style.bottom = "0px" : B.current.style.bottom = `${Math.max(ge,0)}px`
            }
        }
        return (Y = window.visualViewport) == null || Y.addEventListener("resize", Q), () => {
            var ue;
            return (ue = window.visualViewport) == null ? void 0 : ue.removeEventListener("resize", Q)
        }
    }, [te, i, le]);

    function Ce() {
        B.current && (Fe(), y == null || y(), ce(B.current, {
            transform: ye(x) ? `translate3d(0, ${x==="bottom"?"100%":"-100%"}, 0)` : `translate3d(${x==="right"?"100%":"-100%"}, 0, 0)`,
            transition: `transform ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`
        }), ce(A.current, {
            opacity: "0",
            transition: `opacity ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`
        }), Dt(!1), setTimeout(() => {
            W(!1), D(!1)
        }, 300), setTimeout(() => {
            i && de(i[0])
        }, ae.DURATION * 1e3))
    }
    M.useEffect(() => {
        if (!_ && r) {
            const Y = setTimeout(() => {
                En(document.body)
            }, 200);
            return () => clearTimeout(Y)
        }
    }, [_, r]), M.useLayoutEffect(() => {
        e ? (D(!0), F(!0)) : Ce()
    }, [e]), M.useEffect(() => {
        S && (t == null || t(_))
    }, [_]), M.useEffect(() => {
        P(!0)
    }, []);

    function Be() {
        if (!B.current) return;
        const Y = document.querySelector("[vaul-drawer-wrapper]"),
            Q = Rn(B.current, x);
        ce(B.current, {
            transform: "translate3d(0, 0, 0)",
            transition: `transform ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`
        }), ce(A.current, {
            transition: `opacity ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`,
            opacity: "1"
        }), r && Q && Q > 0 && _ && ce(Y, {
            borderRadius: `${va}px`,
            overflow: "hidden",
            ...ye(x) ? {
                transform: `scale(${De()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                transformOrigin: "top"
            } : {
                transform: `scale(${De()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: `${ae.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${ae.EASE.join(",")})`
        }, !0)
    }

    function Fe() {
        !k || !B.current || (B.current.classList.remove(xr), q.current = !1, C(!1), K.current = new Date)
    }

    function _t(Y) {
        if (!k || !B.current) return;
        B.current.classList.remove(xr), q.current = !1, C(!1), K.current = new Date;
        const Q = Rn(B.current, x);
        if (!xt(Y.target, !1) || !Q || Number.isNaN(Q) || H.current === null) return;
        const ue = K.current.getTime() - H.current.getTime(),
            J = re.current - (ye(x) ? Y.clientY : Y.clientX),
            me = Math.abs(J) / ue;
        if (me > .05 && (U(!0), setTimeout(() => {
                U(!1)
            }, 200)), i) {
            Me({
                draggedDistance: J * (x === "bottom" || x === "right" ? 1 : -1),
                closeDrawer: Ce,
                velocity: me,
                dismissible: d
            }), a == null || a(Y, !0);
            return
        }
        if (x === "bottom" || x === "right" ? J > 0 : J < 0) {
            Be(), a == null || a(Y, !0);
            return
        }
        if (me > ms) {
            Ce(), a == null || a(Y, !1);
            return
        }
        var ge;
        const Le = Math.min((ge = B.current.getBoundingClientRect().height) != null ? ge : 0, window.innerHeight);
        if (Q >= Le * u) {
            Ce(), a == null || a(Y, !1);
            return
        }
        a == null || a(Y, !0), Be()
    }
    M.useEffect(() => {
        _ && (ce(document.documentElement, {
            scrollBehavior: "auto"
        }), L.current = new Date, Dt(!0))
    }, [_]), M.useEffect(() => {
        if (B.current && I) {
            var Y;
            const Q = B == null || (Y = B.current) == null ? void 0 : Y.querySelectorAll("*");
            Q == null || Q.forEach(ue => {
                const J = ue;
                (J.scrollHeight > J.clientHeight || J.scrollWidth > J.clientWidth) && J.classList.add("vaul-scrollable")
            })
        }
    }, [I]);

    function Dt(Y) {
        const Q = document.querySelector("[vaul-drawer-wrapper]");
        !Q || !r || (Y ? (c && ($ || (ce(document.body, {
            background: document.body.style.backgroundColor || document.body.style.background
        }), ce(document.body, {
            background: "black"
        }, !0))), ce(Q, {
            borderRadius: `${va}px`,
            overflow: "hidden",
            ...ye(x) ? {
                transform: `scale(${De()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
                transformOrigin: "top"
            } : {
                transform: `scale(${De()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
                transformOrigin: "left"
            },
            transitionProperty: "transform, border-radius",
            transitionDuration: `${ae.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${ae.EASE.join(",")})`
        })) : (En(Q, "overflow"), En(Q, "transform"), En(Q, "borderRadius"), ce(Q, {
            transitionProperty: "transform, border-radius",
            transitionDuration: `${ae.DURATION}s`,
            transitionTimingFunction: `cubic-bezier(${ae.EASE.join(",")})`
        })))
    }

    function fn(Y) {
        const Q = Y ? (window.innerWidth - Ct) / window.innerWidth : 1,
            ue = Y ? -Ct : 0;
        Z.current && window.clearTimeout(Z.current), ce(B.current, {
            transition: `transform ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`,
            transform: `scale(${Q}) translate3d(0, ${ue}px, 0)`
        }), !Y && B.current && (Z.current = setTimeout(() => {
            const J = Rn(B.current, x);
            ce(B.current, {
                transition: "none",
                transform: ye(x) ? `translate3d(0, ${J}px, 0)` : `translate3d(${J}px, 0, 0)`
            })
        }, 500))
    }

    function Fs(Y, Q) {
        if (Q < 0) return;
        const ue = ye(x) ? window.innerHeight : window.innerWidth,
            J = (ue - Ct) / ue,
            me = J + Q * (1 - J),
            ge = -Ct + Q * Ct;
        ce(B.current, {
            transform: ye(x) ? `scale(${me}) translate3d(0, ${ge}px, 0)` : `scale(${me}) translate3d(${ge}px, 0, 0)`,
            transition: "none"
        })
    }

    function Ls(Y, Q) {
        const ue = ye(x) ? window.innerHeight : window.innerWidth,
            J = Q ? (ue - Ct) / ue : 1,
            me = Q ? -Ct : 0;
        Q && ce(B.current, {
            transition: `transform ${ae.DURATION}s cubic-bezier(${ae.EASE.join(",")})`,
            transform: ye(x) ? `scale(${J}) translate3d(0, ${me}px, 0)` : `scale(${J}) translate3d(${me}px, 0, 0)`
        })
    }
    return M.createElement(Yi, {
        modal: w,
        onOpenChange: Y => {
            if (e !== void 0) {
                t == null || t(Y);
                return
            }
            Y ? (F(!0), D(Y)) : Ce()
        },
        open: _
    }, M.createElement(ls.Provider, {
        value: {
            visible: I,
            activeSnapPoint: oe,
            snapPoints: i,
            setActiveSnapPoint: de,
            drawerRef: B,
            overlayRef: A,
            scaleBackground: Dt,
            onOpenChange: t,
            onPress: ze,
            setVisible: W,
            onRelease: _t,
            onDrag: Pt,
            dismissible: d,
            handleOnly: p,
            isOpen: _,
            isDragging: k,
            shouldFade: Re,
            closeDrawer: Ce,
            onNestedDrag: Fs,
            onNestedOpenChange: fn,
            onNestedRelease: Ls,
            keyboardIsOpen: we,
            openProp: e,
            modal: w,
            snapPointsOffset: le,
            direction: x
        }
    }, n))
}
const Qv = 250,
    Jv = 120,
    gs = M.forwardRef(function({
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
            setActiveSnapPoint: u,
            dismissible: f,
            handleOnly: d,
            onPress: p,
            onDrag: v
        } = Jn(), m = M.useRef(null), h = M.useRef(!1);

        function g() {
            if (h.current) {
                $();
                return
            }
            window.setTimeout(() => {
                w()
            }, Jv)
        }

        function w() {
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
            const E = s.findIndex(N => N === c);
            if (E === -1) return;
            const O = s[E + 1];
            u(O)
        }

        function y() {
            m.current = window.setTimeout(() => {
                h.current = !0
            }, Qv)
        }

        function $() {
            window.clearTimeout(m.current), h.current = !1
        }
        return M.createElement("div", {
            onClick: g,
            onDoubleClick: () => {
                h.current = !0, a()
            },
            onPointerCancel: $,
            onPointerDown: x => {
                d && p(x), y()
            },
            onPointerMove: x => {
                d && v(x)
            },
            ref: r,
            "vaul-drawer-visible": o ? "true" : "false",
            "vaul-handle": "",
            "aria-hidden": "true",
            ...n
        }, M.createElement("span", {
            "vaul-handle-hitarea": "",
            "aria-hidden": "true"
        }, t))
    });
gs.displayName = "Drawer.Handle";
const ys = M.forwardRef(function({
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
    } = Jn(), u = vs(n, r), f = o && o.length > 0;
    return M.createElement(qi, {
        onMouseUp: a,
        ref: u,
        "vaul-drawer-visible": c ? "true" : "false",
        "vaul-overlay": "",
        "vaul-snap-points": s && f ? "true" : "false",
        "vaul-snap-points-overlay": s && i ? "true" : "false",
        ...t
    })
});
ys.displayName = "Drawer.Overlay";
const ws = M.forwardRef(function({
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
        onDrag: u,
        dismissible: f,
        keyboardIsOpen: d,
        snapPointsOffset: p,
        visible: v,
        closeDrawer: m,
        modal: h,
        openProp: g,
        onOpenChange: w,
        setVisible: y,
        handleOnly: $,
        direction: x
    } = Jn(), E = vs(a, i), O = M.useRef(null), N = M.useRef(!1), _ = (D, T, F = 0) => {
        if (N.current) return !0;
        const I = Math.abs(D.y),
            W = Math.abs(D.x),
            S = W > I,
            P = ["bottom", "right"].includes(T) ? 1 : -1;
        if (T === "left" || T === "right") {
            if (!(D.x * P < 0) && W >= 0 && W <= F) return S
        } else if (!(D.y * P < 0) && I >= 0 && I <= F) return !S;
        return N.current = !0, !0
    };
    return M.useEffect(() => {
        y(!0)
    }, []), M.createElement(Xi, {
        "vaul-drawer": "",
        "vaul-drawer-direction": x,
        "vaul-drawer-visible": v ? "true" : "false",
        ...o,
        ref: E,
        style: p && p.length > 0 ? {
            "--snap-point-height": `${p[0]}px`,
            ...r
        } : r,
        onOpenAutoFocus: D => {
            if (e) e(D);
            else {
                var T;
                D.preventDefault(), (T = i.current) == null || T.focus()
            }
        },
        onPointerDown: D => {
            $ || (o.onPointerDown == null || o.onPointerDown.call(o, D), O.current = {
                x: D.clientX,
                y: D.clientY
            }, s(D))
        },
        onPointerDownOutside: D => {
            if (t == null || t(D), !h || D.defaultPrevented) {
                D.preventDefault();
                return
            }
            d.current && (d.current = !1), D.preventDefault(), w == null || w(!1), !(!f || g !== void 0) && m()
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
            if ($ || (o.onPointerMove == null || o.onPointerMove.call(o, D), !O.current)) return;
            const T = D.clientY - O.current.y,
                F = D.clientX - O.current.x,
                I = D.pointerType === "touch" ? 10 : 2;
            _({
                x: F,
                y: T
            }, x, I) ? u(D) : (Math.abs(F) > I || Math.abs(T) > I) && (O.current = null)
        },
        onPointerUp: D => {
            o.onPointerUp == null || o.onPointerUp.call(o, D), O.current = null, N.current = !1, c(D)
        }
    })
});
ws.displayName = "Drawer.Content";

function ep({
    onDrag: e,
    onOpenChange: t,
    ...n
}) {
    const {
        onNestedDrag: r,
        onNestedOpenChange: o,
        onNestedRelease: a
    } = Jn();
    if (!r) throw new Error("Drawer.NestedRoot must be placed in another drawer");
    return M.createElement(bs, {
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
const Xt = {
    Root: bs,
    NestedRoot: ep,
    Content: ws,
    Handle: gs,
    Overlay: ys,
    Trigger: qf,
    Portal: Ki,
    Close: Zi,
    Title: Xf,
    Description: Zf
};
var tp = ({
        render: e,
        body: t,
        show: n,
        onClose: r,
        closeButton: o,
        stickyHeader: a,
        stickyFooter: i,
        rounded: s,
        fullscreen: c,
        className: u,
        sectionClassName: f,
        ignoreHistory: d
    }) => {
        const [p, v] = l.useState(!1), m = typeof n < "u", h = m ? n : p, g = () => {
            v(!0)
        }, w = () => {
            r ? r() : v(!1)
        }, y = () => {
            if (d) return w();
            history.back()
        };
        return l.useEffect(() => {
            (m ? n : p) && !d && (history.pushState("", ""), window.onpopstate = () => {
                w()
            })
        }, [n, p, d]), b.jsxs(l.Fragment, {
            children: [e && e({
                close: y,
                open: g,
                isOpen: h
            }), b.jsx(Xt.Root, {
                onRelease: ($, x) => {
                    x || y()
                },
                open: h,
                children: b.jsxs(Xt.Portal, {
                    children: [b.jsx(Xt.Overlay, {
                        onClick: $ => {
                            $.preventDefault(), $.stopPropagation(), y()
                        },
                        className: "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/70"
                    }), b.jsxs(Xt.Content, {
                        className: ve("bg-body-light fixed inset-x-0 bottom-0 z-50 flex h-auto max-h-full w-full flex-col overflow-hidden outline-none", s ? "rounded-t-3xl" : "", c ? "h-full" : "", u),
                        children: [b.jsxs("header", {
                            className: "relative z-10 bg-inherit",
                            children: [b.jsx("div", {
                                className: "relative flex h-8 shrink-0 items-center justify-center after:h-[5px] after:w-12 after:rounded-full after:bg-gray-600",
                                children: o && b.jsx(Xt.Close, {
                                    children: o
                                })
                            }), a && a({
                                close: y
                            })]
                        }), b.jsx("section", {
                            className: ve("max-h-screen overflow-y-auto", f),
                            children: t({
                                close: y
                            })
                        }), i && b.jsx("footer", {
                            className: "fixed bottom-0 w-full bg-inherit drop-shadow-[-1px_0_2px_rgba(0,0,0,0.1)]",
                            children: i({
                                close: y
                            })
                        })]
                    })]
                })
            })]
        })
    },
    yb = tp,
    wb = ({
        locale: e,
        children: t,
        className: n,
        options: r,
        as: o
    }) => {
        const a = o || "div",
            [i] = Bs(he({
                align: "start",
                direction: e != null && e.startsWith("ar") ? "rtl" : "ltr"
            }, r));
        return b.jsx("div", {
            className: "embla",
            children: b.jsx("div", {
                className: "embla__viewport",
                ref: i,
                children: b.jsx(a, {
                    className: ve("embla__container", n),
                    children: M.Children.map(t, s => M.cloneElement(s, {
                        className: ve("embla__slide", s.props.className)
                    }))
                })
            })
        })
    };

function np(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var t = Number(e);
    return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
}

function xs(e, t) {
    if (t.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
}

function rp(e) {
    xs(1, arguments);
    var t = Object.prototype.toString.call(e);
    return e instanceof Date || _r(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN))
}
var op = {};

function ap() {
    return op
}

function xb(e, t) {
    var n, r, o, a, i, s, c, u;
    xs(1, arguments);
    var f = ap(),
        d = np((n = (r = (o = (a = t == null ? void 0 : t.weekStartsOn) !== null && a !== void 0 ? a : t == null || (i = t.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && o !== void 0 ? o : f.weekStartsOn) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
    if (!(d >= 0 && d <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = rp(e),
        v = p.getUTCDay(),
        m = (v < d ? 7 : 0) + v - d;
    return p.setUTCDate(p.getUTCDate() - m), p.setUTCHours(0, 0, 0, 0), p
}
var ip = {
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
    $s = function(t, n, r) {
        var o, a = ip[t];
        return typeof a == "string" ? o = a : n === 1 ? o = a.one : o = a.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o
    };

function nt(e) {
    return function() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            n = t.width ? String(t.width) : e.defaultWidth,
            r = e.formats[n] || e.formats[e.defaultWidth];
        return r
    }
}
var sp = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    cp = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    lp = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    up = {
        date: nt({
            formats: sp,
            defaultWidth: "full"
        }),
        time: nt({
            formats: cp,
            defaultWidth: "full"
        }),
        dateTime: nt({
            formats: lp,
            defaultWidth: "full"
        })
    },
    dp = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    Cs = function(t, n, r, o) {
        return dp[t]
    };

function Ke(e) {
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
        var u = e.argumentCallback ? e.argumentCallback(t) : t;
        return o[u]
    }
}
var fp = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    vp = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    pp = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    mp = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    hp = {
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
    bp = {
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
    gp = function(t, n) {
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
    Es = {
        ordinalNumber: gp,
        era: Ke({
            values: fp,
            defaultWidth: "wide"
        }),
        quarter: Ke({
            values: vp,
            defaultWidth: "wide",
            argumentCallback: function(t) {
                return t - 1
            }
        }),
        month: Ke({
            values: pp,
            defaultWidth: "wide"
        }),
        day: Ke({
            values: mp,
            defaultWidth: "wide"
        }),
        dayPeriod: Ke({
            values: hp,
            defaultWidth: "wide",
            formattingValues: bp,
            defaultFormattingWidth: "wide"
        })
    };

function qe(e) {
    return function(t) {
        var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            r = n.width,
            o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(o);
        if (!a) return null;
        var i = a[0],
            s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth],
            c = Array.isArray(s) ? wp(s, function(d) {
                return d.test(i)
            }) : yp(s, function(d) {
                return d.test(i)
            }),
            u;
        u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? n.valueCallback(u) : u;
        var f = t.slice(i.length);
        return {
            value: u,
            rest: f
        }
    }
}

function yp(e, t) {
    for (var n in e)
        if (e.hasOwnProperty(n) && t(e[n])) return n
}

function wp(e, t) {
    for (var n = 0; n < e.length; n++)
        if (t(e[n])) return n
}

function Rs(e) {
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
var xp = /^(\d+)(th|st|nd|rd)?/i,
    $p = /\d+/i,
    Cp = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    Ep = {
        any: [/^b/i, /^(a|c)/i]
    },
    Rp = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    Sp = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    Pp = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    _p = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    Dp = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    Tp = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    Op = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    Mp = {
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
    Ss = {
        ordinalNumber: Rs({
            matchPattern: xp,
            parsePattern: $p,
            valueCallback: function(t) {
                return parseInt(t, 10)
            }
        }),
        era: qe({
            matchPatterns: Cp,
            defaultMatchWidth: "wide",
            parsePatterns: Ep,
            defaultParseWidth: "any"
        }),
        quarter: qe({
            matchPatterns: Rp,
            defaultMatchWidth: "wide",
            parsePatterns: Sp,
            defaultParseWidth: "any",
            valueCallback: function(t) {
                return t + 1
            }
        }),
        month: qe({
            matchPatterns: Pp,
            defaultMatchWidth: "wide",
            parsePatterns: _p,
            defaultParseWidth: "any"
        }),
        day: qe({
            matchPatterns: Dp,
            defaultMatchWidth: "wide",
            parsePatterns: Tp,
            defaultParseWidth: "any"
        }),
        dayPeriod: qe({
            matchPatterns: Op,
            defaultMatchWidth: "any",
            parsePatterns: Mp,
            defaultParseWidth: "any"
        })
    },
    Np = {
        code: "en-US",
        formatDistance: $s,
        formatLong: up,
        formatRelative: Cs,
        localize: Es,
        match: Ss,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    },
    kp = {
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
    Ip = function(t, n, r) {
        var o, a = kp[t];
        return typeof a == "string" ? o = a : n === 1 ? o = a.one : n === 2 ? o = a.two : n <= 10 ? o = a.threeToTen.replace("{{count}}", String(n)) : o = a.other.replace("{{count}}", String(n)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "في خلال " + o : "منذ " + o : o
    },
    Ap = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    Fp = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    Lp = {
        full: "{{date}} 'عند' {{time}}",
        long: "{{date}} 'عند' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    jp = {
        date: nt({
            formats: Ap,
            defaultWidth: "full"
        }),
        time: nt({
            formats: Fp,
            defaultWidth: "full"
        }),
        dateTime: nt({
            formats: Lp,
            defaultWidth: "full"
        })
    },
    Wp = {
        lastWeek: "'أخر' eeee 'عند' p",
        yesterday: "'أمس عند' p",
        today: "'اليوم عند' p",
        tomorrow: "'غداً عند' p",
        nextWeek: "eeee 'عند' p",
        other: "P"
    },
    Bp = function(t, n, r, o) {
        return Wp[t]
    },
    Hp = {
        narrow: ["ق", "ب"],
        abbreviated: ["ق.م.", "ب.م."],
        wide: ["قبل الميلاد", "بعد الميلاد"]
    },
    Vp = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["ر1", "ر2", "ر3", "ر4"],
        wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
    },
    zp = {
        narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
        abbreviated: ["ينا", "فبر", "مارس", "أبريل", "مايو", "يونـ", "يولـ", "أغسـ", "سبتـ", "أكتـ", "نوفـ", "ديسـ"],
        wide: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
    },
    Up = {
        narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
        short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
        abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"],
        wide: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
    },
    Gp = {
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
    Yp = {
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
    Kp = function(t) {
        return String(t)
    },
    qp = {
        ordinalNumber: Kp,
        era: Ke({
            values: Hp,
            defaultWidth: "wide"
        }),
        quarter: Ke({
            values: Vp,
            defaultWidth: "wide",
            argumentCallback: function(t) {
                return t - 1
            }
        }),
        month: Ke({
            values: zp,
            defaultWidth: "wide"
        }),
        day: Ke({
            values: Up,
            defaultWidth: "wide"
        }),
        dayPeriod: Ke({
            values: Gp,
            defaultWidth: "wide",
            formattingValues: Yp,
            defaultFormattingWidth: "wide"
        })
    },
    Xp = /^(\d+)(th|st|nd|rd)?/i,
    Zp = /\d+/i,
    Qp = {
        narrow: /^(ق|ب)/i,
        abbreviated: /^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,
        wide: /^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i
    },
    Jp = {
        any: [/^قبل/i, /^بعد/i]
    },
    em = {
        narrow: /^[1234]/i,
        abbreviated: /^ر[1234]/i,
        wide: /^الربع [1234]/i
    },
    tm = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    nm = {
        narrow: /^[يفمأمسند]/i,
        abbreviated: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i,
        wide: /^(ين|ف|مار|أب|ماي|يون|يول|أغ|س|أك|ن|د)/i
    },
    rm = {
        narrow: [/^ي/i, /^ف/i, /^م/i, /^أ/i, /^م/i, /^ي/i, /^ي/i, /^أ/i, /^س/i, /^أ/i, /^ن/i, /^د/i],
        any: [/^ين/i, /^ف/i, /^مار/i, /^أب/i, /^ماي/i, /^يون/i, /^يول/i, /^أغ/i, /^س/i, /^أك/i, /^ن/i, /^د/i]
    },
    om = {
        narrow: /^[حنثرخجس]/i,
        short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
        abbreviated: /^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,
        wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
    },
    am = {
        narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
        wide: [/^الأحد/i, /^الاثنين/i, /^الثلاثاء/i, /^الأربعاء/i, /^الخميس/i, /^الجمعة/i, /^السبت/i],
        any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
    },
    im = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    sm = {
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
    cm = {
        ordinalNumber: Rs({
            matchPattern: Xp,
            parsePattern: Zp,
            valueCallback: function(t) {
                return parseInt(t, 10)
            }
        }),
        era: qe({
            matchPatterns: Qp,
            defaultMatchWidth: "wide",
            parsePatterns: Jp,
            defaultParseWidth: "any"
        }),
        quarter: qe({
            matchPatterns: em,
            defaultMatchWidth: "wide",
            parsePatterns: tm,
            defaultParseWidth: "any",
            valueCallback: function(t) {
                return t + 1
            }
        }),
        month: qe({
            matchPatterns: nm,
            defaultMatchWidth: "wide",
            parsePatterns: rm,
            defaultParseWidth: "any"
        }),
        day: qe({
            matchPatterns: om,
            defaultMatchWidth: "wide",
            parsePatterns: am,
            defaultParseWidth: "any"
        }),
        dayPeriod: qe({
            matchPatterns: im,
            defaultMatchWidth: "any",
            parsePatterns: sm,
            defaultParseWidth: "any"
        })
    },
    lm = {
        code: "ar-SA",
        formatDistance: Ip,
        formatLong: jp,
        formatRelative: Bp,
        localize: qp,
        match: cm,
        options: {
            weekStartsOn: 0,
            firstWeekContainsDate: 1
        }
    },
    um = {
        full: "EEEE, d MMMM yyyy",
        long: "d MMMM yyyy",
        medium: "d MMM yyyy",
        short: "dd/MM/yyyy"
    },
    dm = {
        full: "HH:mm:ss zzzz",
        long: "HH:mm:ss z",
        medium: "HH:mm:ss",
        short: "HH:mm"
    },
    fm = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    vm = {
        date: nt({
            formats: um,
            defaultWidth: "full"
        }),
        time: nt({
            formats: dm,
            defaultWidth: "full"
        }),
        dateTime: nt({
            formats: fm,
            defaultWidth: "full"
        })
    },
    pm = {
        code: "en-GB",
        formatDistance: $s,
        formatLong: vm,
        formatRelative: Cs,
        localize: Es,
        match: Ss,
        options: {
            weekStartsOn: 1,
            firstWeekContainsDate: 4
        }
    },
    G = function() {
        return G = Object.assign || function(t) {
            for (var n, r = 1, o = arguments.length; r < o; r++) {
                n = arguments[r];
                for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
            }
            return t
        }, G.apply(this, arguments)
    };

function mm(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}

function Ps(e, t, n) {
    for (var r = 0, o = t.length, a; r < o; r++)(a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
    return e.concat(a || Array.prototype.slice.call(t))
}

function ln(e) {
    return e.mode === "multiple"
}

function un(e) {
    return e.mode === "range"
}

function er(e) {
    return e.mode === "single"
}
var hm = {
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

function bm(e, t) {
    return St(e, "LLLL y", t)
}

function gm(e, t) {
    return St(e, "d", t)
}

function ym(e, t) {
    return St(e, "LLLL", t)
}

function wm(e) {
    return "".concat(e)
}

function xm(e, t) {
    return St(e, "cccccc", t)
}

function $m(e, t) {
    return St(e, "yyyy", t)
}
var Cm = Object.freeze({
        __proto__: null,
        formatCaption: bm,
        formatDay: gm,
        formatMonthCaption: ym,
        formatWeekNumber: wm,
        formatWeekdayName: xm,
        formatYearCaption: $m
    }),
    Em = function(e, t, n) {
        return St(e, "do MMMM (EEEE)", n)
    },
    Rm = function() {
        return "Month: "
    },
    Sm = function() {
        return "Go to next month"
    },
    Pm = function() {
        return "Go to previous month"
    },
    _m = function(e, t) {
        return St(e, "cccc", t)
    },
    Dm = function(e) {
        return "Week n. ".concat(e)
    },
    Tm = function() {
        return "Year: "
    },
    Om = Object.freeze({
        __proto__: null,
        labelDay: Em,
        labelMonthDropdown: Rm,
        labelNext: Sm,
        labelPrevious: Pm,
        labelWeekNumber: Dm,
        labelWeekday: _m,
        labelYearDropdown: Tm
    });

function Mm() {
    var e = "buttons",
        t = hm,
        n = Np,
        r = {},
        o = {},
        a = 1,
        i = {},
        s = new Date;
    return {
        captionLayout: e,
        classNames: t,
        formatters: Cm,
        labels: Om,
        locale: n,
        modifiersClassNames: r,
        modifiers: o,
        numberOfMonths: a,
        styles: i,
        today: s,
        mode: "default"
    }
}

function Nm(e) {
    var t = e.fromYear,
        n = e.toYear,
        r = e.fromMonth,
        o = e.toMonth,
        a = e.fromDate,
        i = e.toDate;
    return r ? a = Ie(r) : t && (a = new Date(t, 0, 1)), o ? i = Vr(o) : n && (i = new Date(n, 11, 31)), {
        fromDate: a ? Eo(a) : void 0,
        toDate: i ? Eo(i) : void 0
    }
}
var _s = l.createContext(void 0);

function km(e) {
    var t, n = e.initialProps,
        r = Mm(),
        o = Nm(n),
        a = o.fromDate,
        i = o.toDate,
        s = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
    s !== "buttons" && (!a || !i) && (s = "buttons");
    var c;
    (er(n) || ln(n) || un(n)) && (c = n.onSelect);
    var u = G(G(G({}, r), n), {
        captionLayout: s,
        classNames: G(G({}, r.classNames), n.classNames),
        components: G({}, n.components),
        formatters: G(G({}, r.formatters), n.formatters),
        fromDate: a,
        labels: G(G({}, r.labels), n.labels),
        mode: n.mode || r.mode,
        modifiers: G(G({}, r.modifiers), n.modifiers),
        modifiersClassNames: G(G({}, r.modifiersClassNames), n.modifiersClassNames),
        onSelect: c,
        styles: G(G({}, r.styles), n.styles),
        toDate: i
    });
    return b.jsx(_s.Provider, {
        value: u,
        children: e.children
    })
}

function ie() {
    var e = l.useContext(_s);
    if (!e) throw new Error("useDayPicker must be used within a DayPickerProvider.");
    return e
}

function Ds(e) {
    var t = ie(),
        n = t.locale,
        r = t.classNames,
        o = t.styles,
        a = t.formatters.formatCaption;
    return b.jsx("div", {
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

function Im(e) {
    return b.jsx("svg", G({
        width: "8px",
        height: "8px",
        viewBox: "0 0 120 120",
        "data-testid": "iconDropdown"
    }, e, {
        children: b.jsx("path", {
            d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        })
    }))
}

function Ts(e) {
    var t, n, r = e.onChange,
        o = e.value,
        a = e.children,
        i = e.caption,
        s = e.className,
        c = e.style,
        u = ie(),
        f = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : Im;
    return b.jsxs("div", {
        className: s,
        style: c,
        children: [b.jsx("span", {
            className: u.classNames.vhidden,
            children: e["aria-label"]
        }), b.jsx("select", {
            name: e.name,
            "aria-label": e["aria-label"],
            className: u.classNames.dropdown,
            style: u.styles.dropdown,
            value: o,
            onChange: r,
            children: a
        }), b.jsxs("div", {
            className: u.classNames.caption_label,
            style: u.styles.caption_label,
            "aria-hidden": "true",
            children: [i, b.jsx(f, {
                className: u.classNames.dropdown_icon,
                style: u.styles.dropdown_icon
            })]
        })]
    })
}

function Am(e) {
    var t, n = ie(),
        r = n.fromDate,
        o = n.toDate,
        a = n.styles,
        i = n.locale,
        s = n.formatters.formatMonthCaption,
        c = n.classNames,
        u = n.components,
        f = n.labels.labelMonthDropdown;
    if (!r) return b.jsx(b.Fragment, {});
    if (!o) return b.jsx(b.Fragment, {});
    var d = [];
    if (zs(r, o))
        for (var p = Ie(r), v = r.getMonth(); v <= o.getMonth(); v++) d.push(rr(p, v));
    else
        for (var p = Ie(new Date), v = 0; v <= 11; v++) d.push(rr(p, v));
    var m = function(g) {
            var w = Number(g.target.value),
                y = rr(Ie(e.displayMonth), w);
            e.onChange(y)
        },
        h = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Ts;
    return b.jsx(h, {
        name: "months",
        "aria-label": f(),
        className: c.dropdown_month,
        style: a.dropdown_month,
        onChange: m,
        value: e.displayMonth.getMonth(),
        caption: s(e.displayMonth, {
            locale: i
        }),
        children: d.map(function(g) {
            return b.jsx("option", {
                value: g.getMonth(),
                children: s(g, {
                    locale: i
                })
            }, g.getMonth())
        })
    })
}

function Fm(e) {
    var t, n = e.displayMonth,
        r = ie(),
        o = r.fromDate,
        a = r.toDate,
        i = r.locale,
        s = r.styles,
        c = r.classNames,
        u = r.components,
        f = r.formatters.formatYearCaption,
        d = r.labels.labelYearDropdown,
        p = [];
    if (!o) return b.jsx(b.Fragment, {});
    if (!a) return b.jsx(b.Fragment, {});
    for (var v = o.getFullYear(), m = a.getFullYear(), h = v; h <= m; h++) p.push(Ro(Us(new Date), h));
    var g = function(y) {
            var $ = Ro(Ie(n), Number(y.target.value));
            e.onChange($)
        },
        w = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Ts;
    return b.jsx(w, {
        name: "years",
        "aria-label": d(),
        className: c.dropdown_year,
        style: s.dropdown_year,
        onChange: g,
        value: n.getFullYear(),
        caption: f(n, {
            locale: i
        }),
        children: p.map(function(y) {
            return b.jsx("option", {
                value: y.getFullYear(),
                children: f(y, {
                    locale: i
                })
            }, y.getFullYear())
        })
    })
}

function Lm(e, t) {
    var n = l.useState(e),
        r = n[0],
        o = n[1],
        a = t === void 0 ? r : t;
    return [a, o]
}

function jm(e) {
    var t = e.month,
        n = e.defaultMonth,
        r = e.today,
        o = t || n || r || new Date,
        a = e.toDate,
        i = e.fromDate,
        s = e.numberOfMonths,
        c = s === void 0 ? 1 : s;
    if (a && Jt(a, o) < 0) {
        var u = -1 * (c - 1);
        o = Ze(a, u)
    }
    return i && Jt(o, i) < 0 && (o = i), Ie(o)
}

function Wm() {
    var e = ie(),
        t = jm(e),
        n = Lm(t, e.month),
        r = n[0],
        o = n[1],
        a = function(i) {
            var s;
            if (!e.disableNavigation) {
                var c = Ie(i);
                o(c), (s = e.onMonthChange) === null || s === void 0 || s.call(e, c)
            }
        };
    return [r, a]
}

function Bm(e, t) {
    for (var n = t.reverseMonths, r = t.numberOfMonths, o = Ie(e), a = Ie(Ze(o, r)), i = Jt(a, o), s = [], c = 0; c < i; c++) {
        var u = Ze(o, c);
        s.push(u)
    }
    return n && (s = s.reverse()), s
}

function Hm(e, t) {
    if (!t.disableNavigation) {
        var n = t.toDate,
            r = t.pagedNavigation,
            o = t.numberOfMonths,
            a = o === void 0 ? 1 : o,
            i = r ? a : 1,
            s = Ie(e);
        if (!n) return Ze(s, i);
        var c = Jt(n, e);
        if (!(c < a)) return Ze(s, i)
    }
}

function Vm(e, t) {
    if (!t.disableNavigation) {
        var n = t.fromDate,
            r = t.pagedNavigation,
            o = t.numberOfMonths,
            a = o === void 0 ? 1 : o,
            i = r ? a : 1,
            s = Ie(e);
        if (!n) return Ze(s, -i);
        var c = Jt(s, n);
        if (!(c <= 0)) return Ze(s, -i)
    }
}
var Os = l.createContext(void 0);

function zm(e) {
    var t = ie(),
        n = Wm(),
        r = n[0],
        o = n[1],
        a = Bm(r, t),
        i = Hm(r, t),
        s = Vm(r, t),
        c = function(d) {
            return a.some(function(p) {
                return zr(d, p)
            })
        },
        u = function(d, p) {
            c(d) || (p && wa(d, p) ? o(Ze(d, 1 + t.numberOfMonths * -1)) : o(d))
        },
        f = {
            currentMonth: r,
            displayMonths: a,
            goToMonth: o,
            goToDate: u,
            previousMonth: s,
            nextMonth: i,
            isDateDisplayed: c
        };
    return b.jsx(Os.Provider, {
        value: f,
        children: e.children
    })
}

function dn() {
    var e = l.useContext(Os);
    if (!e) throw new Error("useNavigation must be used within a NavigationProvider");
    return e
}

function ma(e) {
    var t, n = ie(),
        r = n.classNames,
        o = n.styles,
        a = n.components,
        i = dn().goToMonth,
        s = function(f) {
            i(Ze(f, e.displayIndex ? -e.displayIndex : 0))
        },
        c = (t = a == null ? void 0 : a.CaptionLabel) !== null && t !== void 0 ? t : Ds,
        u = b.jsx(c, {
            id: e.id,
            displayMonth: e.displayMonth
        });
    return b.jsxs("div", {
        className: r.caption_dropdowns,
        style: o.caption_dropdowns,
        children: [b.jsx("div", {
            className: r.vhidden,
            children: u
        }), b.jsx(Am, {
            onChange: s,
            displayMonth: e.displayMonth
        }), b.jsx(Fm, {
            onChange: s,
            displayMonth: e.displayMonth
        })]
    })
}

function Um(e) {
    return b.jsx("svg", G({
        width: "16px",
        height: "16px",
        viewBox: "0 0 120 120"
    }, e, {
        children: b.jsx("path", {
            d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z",
            fill: "currentColor",
            fillRule: "nonzero"
        })
    }))
}

function Gm(e) {
    return b.jsx("svg", G({
        width: "16px",
        height: "16px",
        viewBox: "0 0 120 120"
    }, e, {
        children: b.jsx("path", {
            d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z",
            fill: "currentColor"
        })
    }))
}
var Bn = l.forwardRef(function(e, t) {
    var n = ie(),
        r = n.classNames,
        o = n.styles,
        a = [r.button_reset, r.button];
    e.className && a.push(e.className);
    var i = a.join(" "),
        s = G(G({}, o.button_reset), o.button);
    return e.style && Object.assign(s, e.style), b.jsx("button", G({}, e, {
        ref: t,
        type: "button",
        className: i,
        style: s
    }))
});

function Ym(e) {
    var t, n, r = ie(),
        o = r.dir,
        a = r.locale,
        i = r.classNames,
        s = r.styles,
        c = r.labels,
        u = c.labelPrevious,
        f = c.labelNext,
        d = r.components;
    if (!e.nextMonth && !e.previousMonth) return b.jsx(b.Fragment, {});
    var p = u(e.previousMonth, {
            locale: a
        }),
        v = [i.nav_button, i.nav_button_previous].join(" "),
        m = f(e.nextMonth, {
            locale: a
        }),
        h = [i.nav_button, i.nav_button_next].join(" "),
        g = (t = d == null ? void 0 : d.IconRight) !== null && t !== void 0 ? t : Gm,
        w = (n = d == null ? void 0 : d.IconLeft) !== null && n !== void 0 ? n : Um;
    return b.jsxs("div", {
        className: i.nav,
        style: s.nav,
        children: [!e.hidePrevious && b.jsx(Bn, {
            name: "previous-month",
            "aria-label": p,
            className: v,
            style: s.nav_button_previous,
            disabled: !e.previousMonth,
            onClick: e.onPreviousClick,
            children: o === "rtl" ? b.jsx(g, {
                className: i.nav_icon,
                style: s.nav_icon
            }) : b.jsx(w, {
                className: i.nav_icon,
                style: s.nav_icon
            })
        }), !e.hideNext && b.jsx(Bn, {
            name: "next-month",
            "aria-label": m,
            className: h,
            style: s.nav_button_next,
            disabled: !e.nextMonth,
            onClick: e.onNextClick,
            children: o === "rtl" ? b.jsx(w, {
                className: i.nav_icon,
                style: s.nav_icon
            }) : b.jsx(g, {
                className: i.nav_icon,
                style: s.nav_icon
            })
        })]
    })
}

function ha(e) {
    var t = ie().numberOfMonths,
        n = dn(),
        r = n.previousMonth,
        o = n.nextMonth,
        a = n.goToMonth,
        i = n.displayMonths,
        s = i.findIndex(function(m) {
            return zr(e.displayMonth, m)
        }),
        c = s === 0,
        u = s === i.length - 1,
        f = t > 1 && (c || !u),
        d = t > 1 && (u || !c),
        p = function() {
            r && a(r)
        },
        v = function() {
            o && a(o)
        };
    return b.jsx(Ym, {
        displayMonth: e.displayMonth,
        hideNext: f,
        hidePrevious: d,
        nextMonth: o,
        previousMonth: r,
        onPreviousClick: p,
        onNextClick: v
    })
}

function Km(e) {
    var t, n = ie(),
        r = n.classNames,
        o = n.disableNavigation,
        a = n.styles,
        i = n.captionLayout,
        s = n.components,
        c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Ds,
        u;
    return o ? u = b.jsx(c, {
        id: e.id,
        displayMonth: e.displayMonth
    }) : i === "dropdown" ? u = b.jsx(ma, {
        displayMonth: e.displayMonth,
        id: e.id
    }) : i === "dropdown-buttons" ? u = b.jsxs(b.Fragment, {
        children: [b.jsx(ma, {
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex,
            id: e.id
        }), b.jsx(ha, {
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex,
            id: e.id
        })]
    }) : u = b.jsxs(b.Fragment, {
        children: [b.jsx(c, {
            id: e.id,
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex
        }), b.jsx(ha, {
            displayMonth: e.displayMonth,
            id: e.id
        })]
    }), b.jsx("div", {
        className: r.caption,
        style: a.caption,
        children: u
    })
}

function qm(e) {
    var t = ie(),
        n = t.footer,
        r = t.styles,
        o = t.classNames.tfoot;
    return n ? b.jsx("tfoot", {
        className: o,
        style: r.tfoot,
        children: b.jsx("tr", {
            children: b.jsx("td", {
                colSpan: 8,
                children: n
            })
        })
    }) : b.jsx(b.Fragment, {})
}

function Xm(e, t, n) {
    for (var r = n ? Ur(new Date) : Gr(new Date, {
            locale: e,
            weekStartsOn: t
        }), o = [], a = 0; a < 7; a++) {
        var i = Ne(r, a);
        o.push(i)
    }
    return o
}

function Zm() {
    var e = ie(),
        t = e.classNames,
        n = e.styles,
        r = e.showWeekNumber,
        o = e.locale,
        a = e.weekStartsOn,
        i = e.ISOWeek,
        s = e.formatters.formatWeekdayName,
        c = e.labels.labelWeekday,
        u = Xm(o, a, i);
    return b.jsxs("tr", {
        style: n.head_row,
        className: t.head_row,
        children: [r && b.jsx("td", {
            style: n.head_cell,
            className: t.head_cell
        }), u.map(function(f, d) {
            return b.jsx("th", {
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

function Qm() {
    var e, t = ie(),
        n = t.classNames,
        r = t.styles,
        o = t.components,
        a = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : Zm;
    return b.jsx("thead", {
        style: r.head,
        className: n.head,
        children: b.jsx(a, {})
    })
}

function Jm(e) {
    var t = ie(),
        n = t.locale,
        r = t.formatters.formatDay;
    return b.jsx(b.Fragment, {
        children: r(e.date, {
            locale: n
        })
    })
}
var ho = l.createContext(void 0);

function eh(e) {
    if (!ln(e.initialProps)) {
        var t = {
            selected: void 0,
            modifiers: {
                disabled: []
            }
        };
        return b.jsx(ho.Provider, {
            value: t,
            children: e.children
        })
    }
    return b.jsx(th, {
        initialProps: e.initialProps,
        children: e.children
    })
}

function th(e) {
    var t = e.initialProps,
        n = e.children,
        r = t.selected,
        o = t.min,
        a = t.max,
        i = function(u, f, d) {
            var p, v;
            (p = t.onDayClick) === null || p === void 0 || p.call(t, u, f, d);
            var m = !!(f.selected && o && (r == null ? void 0 : r.length) === o);
            if (!m) {
                var h = !!(!f.selected && a && (r == null ? void 0 : r.length) === a);
                if (!h) {
                    var g = r ? Ps([], r) : [];
                    if (f.selected) {
                        var w = g.findIndex(function(y) {
                            return Oe(u, y)
                        });
                        g.splice(w, 1)
                    } else g.push(u);
                    (v = t.onSelect) === null || v === void 0 || v.call(t, g, u, f, d)
                }
            }
        },
        s = {
            disabled: []
        };
    r && s.disabled.push(function(u) {
        var f = a && r.length > a - 1,
            d = r.some(function(p) {
                return Oe(p, u)
            });
        return !!(f && !d)
    });
    var c = {
        selected: r,
        onDayClick: i,
        modifiers: s
    };
    return b.jsx(ho.Provider, {
        value: c,
        children: n
    })
}

function bo() {
    var e = l.useContext(ho);
    if (!e) throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
    return e
}

function nh(e, t) {
    var n = t || {},
        r = n.from,
        o = n.to;
    return r && o ? Oe(o, e) && Oe(r, e) ? void 0 : Oe(o, e) ? {
        from: o,
        to: void 0
    } : Oe(r, e) ? void 0 : Sr(r, e) ? {
        from: e,
        to: o
    } : {
        from: r,
        to: e
    } : o ? Sr(e, o) ? {
        from: o,
        to: e
    } : {
        from: e,
        to: o
    } : r ? wa(e, r) ? {
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
var go = l.createContext(void 0);

function rh(e) {
    if (!un(e.initialProps)) {
        var t = {
            selected: void 0,
            modifiers: {
                range_start: [],
                range_end: [],
                range_middle: [],
                disabled: []
            }
        };
        return b.jsx(go.Provider, {
            value: t,
            children: e.children
        })
    }
    return b.jsx(oh, {
        initialProps: e.initialProps,
        children: e.children
    })
}

function oh(e) {
    var t = e.initialProps,
        n = e.children,
        r = t.selected,
        o = r || {},
        a = o.from,
        i = o.to,
        s = t.min,
        c = t.max,
        u = function(v, m, h) {
            var g, w;
            (g = t.onDayClick) === null || g === void 0 || g.call(t, v, m, h);
            var y = nh(v, r);
            (w = t.onSelect) === null || w === void 0 || w.call(t, y, v, m, h)
        },
        f = {
            range_start: [],
            range_end: [],
            range_middle: [],
            disabled: []
        };
    if (a ? (f.range_start = [a], i ? (f.range_end = [i], Oe(a, i) || (f.range_middle = [{
            after: a,
            before: i
        }])) : f.range_end = [a]) : i && (f.range_start = [i], f.range_end = [i]), s && (a && !i && f.disabled.push({
            after: nr(a, s - 1),
            before: Ne(a, s - 1)
        }), a && i && f.disabled.push({
            after: a,
            before: Ne(a, s - 1)
        }), !a && i && f.disabled.push({
            after: nr(i, s - 1),
            before: Ne(i, s - 1)
        })), c) {
        if (a && !i && (f.disabled.push({
                before: Ne(a, -c + 1)
            }), f.disabled.push({
                after: Ne(a, c - 1)
            })), a && i) {
            var d = tt(i, a) + 1,
                p = c - d;
            f.disabled.push({
                before: nr(a, p)
            }), f.disabled.push({
                after: Ne(i, p)
            })
        }!a && i && (f.disabled.push({
            before: Ne(i, -c + 1)
        }), f.disabled.push({
            after: Ne(i, c - 1)
        }))
    }
    return b.jsx(go.Provider, {
        value: {
            selected: r,
            onDayClick: u,
            modifiers: f
        },
        children: n
    })
}

function yo() {
    var e = l.useContext(go);
    if (!e) throw new Error("useSelectRange must be used within a SelectRangeProvider");
    return e
}

function Tn(e) {
    return Array.isArray(e) ? Ps([], e) : e !== void 0 ? [e] : []
}

function ah(e) {
    var t = {};
    return Object.entries(e).forEach(function(n) {
        var r = n[0],
            o = n[1];
        t[r] = Tn(o)
    }), t
}
var He;
(function(e) {
    e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle"
})(He || (He = {}));
var ih = He.Selected,
    Je = He.Disabled,
    sh = He.Hidden,
    ch = He.Today,
    $r = He.RangeEnd,
    Cr = He.RangeMiddle,
    Er = He.RangeStart,
    lh = He.Outside;

function uh(e, t, n) {
    var r, o = (r = {}, r[ih] = Tn(e.selected), r[Je] = Tn(e.disabled), r[sh] = Tn(e.hidden), r[ch] = [e.today], r[$r] = [], r[Cr] = [], r[Er] = [], r[lh] = [], r);
    return e.fromDate && o[Je].push({
        before: e.fromDate
    }), e.toDate && o[Je].push({
        after: e.toDate
    }), ln(e) ? o[Je] = o[Je].concat(t.modifiers[Je]) : un(e) && (o[Je] = o[Je].concat(n.modifiers[Je]), o[Er] = n.modifiers[Er], o[Cr] = n.modifiers[Cr], o[$r] = n.modifiers[$r]), o
}
var Ms = l.createContext(void 0);

function dh(e) {
    var t = ie(),
        n = bo(),
        r = yo(),
        o = uh(t, n, r),
        a = ah(t.modifiers),
        i = G(G({}, o), a);
    return b.jsx(Ms.Provider, {
        value: i,
        children: e.children
    })
}

function Ns() {
    var e = l.useContext(Ms);
    if (!e) throw new Error("useModifiers must be used within a ModifiersProvider");
    return e
}

function fh(e) {
    return !!(e && typeof e == "object" && "before" in e && "after" in e)
}

function vh(e) {
    return !!(e && typeof e == "object" && "from" in e)
}

function ph(e) {
    return !!(e && typeof e == "object" && "after" in e)
}

function mh(e) {
    return !!(e && typeof e == "object" && "before" in e)
}

function hh(e) {
    return !!(e && typeof e == "object" && "dayOfWeek" in e)
}

function bh(e, t) {
    var n, r = t.from,
        o = t.to;
    if (r && o) {
        var a = tt(o, r) < 0;
        a && (n = [o, r], r = n[0], o = n[1]);
        var i = tt(e, r) >= 0 && tt(o, e) >= 0;
        return i
    }
    return o ? Oe(o, e) : r ? Oe(r, e) : !1
}

function gh(e) {
    return Ca(e)
}

function yh(e) {
    return Array.isArray(e) && e.every(Ca)
}

function wh(e, t) {
    return t.some(function(n) {
        if (typeof n == "boolean") return n;
        if (gh(n)) return Oe(e, n);
        if (yh(n)) return n.includes(e);
        if (vh(n)) return bh(e, n);
        if (hh(n)) return n.dayOfWeek.includes(e.getDay());
        if (fh(n)) {
            var r = tt(n.before, e),
                o = tt(n.after, e),
                a = r > 0,
                i = o < 0,
                s = Sr(n.before, n.after);
            return s ? i && a : a || i
        }
        return ph(n) ? tt(e, n.after) > 0 : mh(n) ? tt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1
    })
}

function wo(e, t, n) {
    var r = Object.keys(t).reduce(function(a, i) {
            var s = t[i];
            return wh(e, s) && a.push(i), a
        }, []),
        o = {};
    return r.forEach(function(a) {
        return o[a] = !0
    }), n && !zr(e, n) && (o.outside = !0), o
}

function xh(e, t) {
    for (var n = Ie(e[0]), r = Vr(e[e.length - 1]), o, a, i = n; i <= r;) {
        var s = wo(i, t),
            c = !s.disabled && !s.hidden;
        if (!c) {
            i = Ne(i, 1);
            continue
        }
        if (s.selected) return i;
        s.today && !a && (a = i), o || (o = i), i = Ne(i, 1)
    }
    return a || o
}
var $h = 365;

function ks(e, t) {
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
        u = o.fromDate,
        f = o.toDate,
        d = o.locale,
        p = {
            day: Ne,
            week: Pr,
            month: Ze,
            year: Xs,
            startOfWeek: function(g) {
                return o.ISOWeek ? Ur(g) : Gr(g, {
                    locale: d,
                    weekStartsOn: c
                })
            },
            endOfWeek: function(g) {
                return o.ISOWeek ? xa(g) : $a(g, {
                    locale: d,
                    weekStartsOn: c
                })
            }
        },
        v = p[n](e, r === "after" ? 1 : -1);
    r === "before" && u ? v = Gs([u, v]) : r === "after" && f && (v = Ys([f, v]));
    var m = !0;
    if (a) {
        var h = wo(v, a);
        m = !h.disabled && !h.hidden
    }
    return m ? v : s.count > $h ? s.lastFocused : ks(v, {
        moveBy: n,
        direction: r,
        context: o,
        modifiers: a,
        retry: G(G({}, s), {
            count: s.count + 1
        })
    })
}
var Is = l.createContext(void 0);

function Ch(e) {
    var t = dn(),
        n = Ns(),
        r = l.useState(),
        o = r[0],
        a = r[1],
        i = l.useState(),
        s = i[0],
        c = i[1],
        u = xh(t.displayMonths, n),
        f = o ? ? (s && t.isDateDisplayed(s)) ? s : u,
        d = function() {
            c(o), a(void 0)
        },
        p = function(g) {
            a(g)
        },
        v = ie(),
        m = function(g, w) {
            if (o) {
                var y = ks(o, {
                    moveBy: g,
                    direction: w,
                    context: v,
                    modifiers: n
                });
                Oe(o, y) || (t.goToDate(y, o), p(y))
            }
        },
        h = {
            focusedDay: o,
            focusTarget: f,
            blur: d,
            focus: p,
            focusDayAfter: function() {
                return m("day", "after")
            },
            focusDayBefore: function() {
                return m("day", "before")
            },
            focusWeekAfter: function() {
                return m("week", "after")
            },
            focusWeekBefore: function() {
                return m("week", "before")
            },
            focusMonthBefore: function() {
                return m("month", "before")
            },
            focusMonthAfter: function() {
                return m("month", "after")
            },
            focusYearBefore: function() {
                return m("year", "before")
            },
            focusYearAfter: function() {
                return m("year", "after")
            },
            focusStartOfWeek: function() {
                return m("startOfWeek", "before")
            },
            focusEndOfWeek: function() {
                return m("endOfWeek", "after")
            }
        };
    return b.jsx(Is.Provider, {
        value: h,
        children: e.children
    })
}

function xo() {
    var e = l.useContext(Is);
    if (!e) throw new Error("useFocusContext must be used within a FocusProvider");
    return e
}

function Eh(e, t) {
    var n = Ns(),
        r = wo(e, n, t);
    return r
}
var $o = l.createContext(void 0);

function Rh(e) {
    if (!er(e.initialProps)) {
        var t = {
            selected: void 0
        };
        return b.jsx($o.Provider, {
            value: t,
            children: e.children
        })
    }
    return b.jsx(Sh, {
        initialProps: e.initialProps,
        children: e.children
    })
}

function Sh(e) {
    var t = e.initialProps,
        n = e.children,
        r = function(a, i, s) {
            var c, u, f;
            if ((c = t.onDayClick) === null || c === void 0 || c.call(t, a, i, s), i.selected && !t.required) {
                (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, a, i, s);
                return
            }(f = t.onSelect) === null || f === void 0 || f.call(t, a, a, i, s)
        },
        o = {
            selected: t.selected,
            onDayClick: r
        };
    return b.jsx($o.Provider, {
        value: o,
        children: n
    })
}

function As() {
    var e = l.useContext($o);
    if (!e) throw new Error("useSelectSingle must be used within a SelectSingleProvider");
    return e
}

function Ph(e, t) {
    var n = ie(),
        r = As(),
        o = bo(),
        a = yo(),
        i = xo(),
        s = i.focusDayAfter,
        c = i.focusDayBefore,
        u = i.focusWeekAfter,
        f = i.focusWeekBefore,
        d = i.blur,
        p = i.focus,
        v = i.focusMonthBefore,
        m = i.focusMonthAfter,
        h = i.focusYearBefore,
        g = i.focusYearAfter,
        w = i.focusStartOfWeek,
        y = i.focusEndOfWeek,
        $ = function(C) {
            var R, U, A, L;
            er(n) ? (R = r.onDayClick) === null || R === void 0 || R.call(r, e, t, C) : ln(n) ? (U = o.onDayClick) === null || U === void 0 || U.call(o, e, t, C) : un(n) ? (A = a.onDayClick) === null || A === void 0 || A.call(a, e, t, C) : (L = n.onDayClick) === null || L === void 0 || L.call(n, e, t, C)
        },
        x = function(C) {
            var R;
            p(e), (R = n.onDayFocus) === null || R === void 0 || R.call(n, e, t, C)
        },
        E = function(C) {
            var R;
            d(), (R = n.onDayBlur) === null || R === void 0 || R.call(n, e, t, C)
        },
        O = function(C) {
            var R;
            (R = n.onDayMouseEnter) === null || R === void 0 || R.call(n, e, t, C)
        },
        N = function(C) {
            var R;
            (R = n.onDayMouseLeave) === null || R === void 0 || R.call(n, e, t, C)
        },
        _ = function(C) {
            var R;
            (R = n.onDayPointerEnter) === null || R === void 0 || R.call(n, e, t, C)
        },
        D = function(C) {
            var R;
            (R = n.onDayPointerLeave) === null || R === void 0 || R.call(n, e, t, C)
        },
        T = function(C) {
            var R;
            (R = n.onDayTouchCancel) === null || R === void 0 || R.call(n, e, t, C)
        },
        F = function(C) {
            var R;
            (R = n.onDayTouchEnd) === null || R === void 0 || R.call(n, e, t, C)
        },
        I = function(C) {
            var R;
            (R = n.onDayTouchMove) === null || R === void 0 || R.call(n, e, t, C)
        },
        W = function(C) {
            var R;
            (R = n.onDayTouchStart) === null || R === void 0 || R.call(n, e, t, C)
        },
        S = function(C) {
            var R;
            (R = n.onDayKeyUp) === null || R === void 0 || R.call(n, e, t, C)
        },
        P = function(C) {
            var R;
            switch (C.key) {
                case "ArrowLeft":
                    C.preventDefault(), C.stopPropagation(), n.dir === "rtl" ? s() : c();
                    break;
                case "ArrowRight":
                    C.preventDefault(), C.stopPropagation(), n.dir === "rtl" ? c() : s();
                    break;
                case "ArrowDown":
                    C.preventDefault(), C.stopPropagation(), u();
                    break;
                case "ArrowUp":
                    C.preventDefault(), C.stopPropagation(), f();
                    break;
                case "PageUp":
                    C.preventDefault(), C.stopPropagation(), C.shiftKey ? h() : v();
                    break;
                case "PageDown":
                    C.preventDefault(), C.stopPropagation(), C.shiftKey ? g() : m();
                    break;
                case "Home":
                    C.preventDefault(), C.stopPropagation(), w();
                    break;
                case "End":
                    C.preventDefault(), C.stopPropagation(), y();
                    break
            }(R = n.onDayKeyDown) === null || R === void 0 || R.call(n, e, t, C)
        },
        k = {
            onClick: $,
            onFocus: x,
            onBlur: E,
            onKeyDown: P,
            onKeyUp: S,
            onMouseEnter: O,
            onMouseLeave: N,
            onPointerEnter: _,
            onPointerLeave: D,
            onTouchCancel: T,
            onTouchEnd: F,
            onTouchMove: I,
            onTouchStart: W
        };
    return k
}

function _h() {
    var e = ie(),
        t = As(),
        n = bo(),
        r = yo(),
        o = er(e) ? t.selected : ln(e) ? n.selected : un(e) ? r.selected : void 0;
    return o
}

function Dh(e) {
    return Object.values(He).includes(e)
}

function Th(e, t) {
    var n = [e.classNames.day];
    return Object.keys(t).forEach(function(r) {
        var o = e.modifiersClassNames[r];
        if (o) n.push(o);
        else if (Dh(r)) {
            var a = e.classNames["day_".concat(r)];
            a && n.push(a)
        }
    }), n
}

function Oh(e, t) {
    var n = G({}, e.styles.day);
    return Object.keys(t).forEach(function(r) {
        var o;
        n = G(G({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r])
    }), n
}

function Mh(e, t, n) {
    var r, o, a, i = ie(),
        s = xo(),
        c = Eh(e, t),
        u = Ph(e, c),
        f = _h(),
        d = !!(i.onDayClick || i.mode !== "default");
    l.useEffect(function() {
        var O;
        c.outside || s.focusedDay && d && Oe(s.focusedDay, e) && ((O = n.current) === null || O === void 0 || O.focus())
    }, [s.focusedDay, e, n, d, c.outside]);
    var p = Th(i, c).join(" "),
        v = Oh(i, c),
        m = !!(c.outside && !i.showOutsideDays || c.hidden),
        h = (a = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && a !== void 0 ? a : Jm,
        g = b.jsx(h, {
            date: e,
            displayMonth: t,
            activeModifiers: c
        }),
        w = {
            style: v,
            className: p,
            children: g,
            role: "gridcell"
        },
        y = s.focusTarget && Oe(s.focusTarget, e) && !c.outside,
        $ = s.focusedDay && Oe(s.focusedDay, e),
        x = G(G(G({}, w), (r = {
            disabled: c.disabled,
            role: "gridcell"
        }, r["aria-selected"] = c.selected, r.tabIndex = $ || y ? 0 : -1, r)), u),
        E = {
            isButton: d,
            isHidden: m,
            activeModifiers: c,
            selectedDays: f,
            buttonProps: x,
            divProps: w
        };
    return E
}

function Nh(e) {
    var t = l.useRef(null),
        n = Mh(e.date, e.displayMonth, t);
    return n.isHidden ? b.jsx("div", {
        role: "gridcell"
    }) : n.isButton ? b.jsx(Bn, G({
        name: "day",
        ref: t
    }, n.buttonProps)) : b.jsx("div", G({}, n.divProps))
}

function kh(e) {
    var t = e.number,
        n = e.dates,
        r = ie(),
        o = r.onWeekNumberClick,
        a = r.styles,
        i = r.classNames,
        s = r.locale,
        c = r.labels.labelWeekNumber,
        u = r.formatters.formatWeekNumber,
        f = u(Number(t), {
            locale: s
        });
    if (!o) return b.jsx("span", {
        className: i.weeknumber,
        style: a.weeknumber,
        children: f
    });
    var d = c(Number(t), {
            locale: s
        }),
        p = function(v) {
            o(t, n, v)
        };
    return b.jsx(Bn, {
        name: "week-number",
        "aria-label": d,
        className: i.weeknumber,
        style: a.weeknumber,
        onClick: p,
        children: f
    })
}

function Ih(e) {
    var t, n, r = ie(),
        o = r.styles,
        a = r.classNames,
        i = r.showWeekNumber,
        s = r.components,
        c = (t = s == null ? void 0 : s.Day) !== null && t !== void 0 ? t : Nh,
        u = (n = s == null ? void 0 : s.WeekNumber) !== null && n !== void 0 ? n : kh,
        f;
    return i && (f = b.jsx("td", {
        className: a.cell,
        style: o.cell,
        children: b.jsx(u, {
            number: e.weekNumber,
            dates: e.dates
        })
    })), b.jsxs("tr", {
        className: a.row,
        style: o.row,
        children: [f, e.dates.map(function(d) {
            return b.jsx("td", {
                className: a.cell,
                style: o.cell,
                role: "presentation",
                children: b.jsx(c, {
                    displayMonth: e.displayMonth,
                    date: d
                })
            }, Hs(d))
        })]
    })
}

function ba(e, t, n) {
    for (var r = n != null && n.ISOWeek ? xa(t) : $a(t, n), o = n != null && n.ISOWeek ? Ur(e) : Gr(e, n), a = tt(r, o), i = [], s = 0; s <= a; s++) i.push(Ne(o, s));
    var c = i.reduce(function(u, f) {
        var d = n != null && n.ISOWeek ? Ks(f) : qs(f, n),
            p = u.find(function(v) {
                return v.weekNumber === d
            });
        return p ? (p.dates.push(f), u) : (u.push({
            weekNumber: d,
            dates: [f]
        }), u)
    }, []);
    return c
}

function Ah(e, t) {
    var n = ba(Ie(e), Vr(e), t);
    if (t != null && t.useFixedWeeks) {
        var r = Vs(e, t);
        if (r < 6) {
            var o = n[n.length - 1],
                a = o.dates[o.dates.length - 1],
                i = Pr(a, 6 - r),
                s = ba(Pr(a, 1), i, t);
            n.push.apply(n, s)
        }
    }
    return n
}

function Fh(e) {
    var t, n, r, o = ie(),
        a = o.locale,
        i = o.classNames,
        s = o.styles,
        c = o.hideHead,
        u = o.fixedWeeks,
        f = o.components,
        d = o.weekStartsOn,
        p = o.firstWeekContainsDate,
        v = o.ISOWeek,
        m = Ah(e.displayMonth, {
            useFixedWeeks: !!u,
            ISOWeek: v,
            locale: a,
            weekStartsOn: d,
            firstWeekContainsDate: p
        }),
        h = (t = f == null ? void 0 : f.Head) !== null && t !== void 0 ? t : Qm,
        g = (n = f == null ? void 0 : f.Row) !== null && n !== void 0 ? n : Ih,
        w = (r = f == null ? void 0 : f.Footer) !== null && r !== void 0 ? r : qm;
    return b.jsxs("table", {
        id: e.id,
        className: i.table,
        style: s.table,
        role: "grid",
        "aria-labelledby": e["aria-labelledby"],
        children: [!c && b.jsx(h, {}), b.jsx("tbody", {
            className: i.tbody,
            style: s.tbody,
            children: m.map(function(y) {
                return b.jsx(g, {
                    displayMonth: e.displayMonth,
                    dates: y.dates,
                    weekNumber: y.weekNumber
                }, y.weekNumber)
            })
        }), b.jsx(w, {
            displayMonth: e.displayMonth
        })]
    })
}

function Lh() {
    return !!(typeof window < "u" && window.document && window.document.createElement)
}
var jh = Lh() ? l.useLayoutEffect : l.useEffect,
    Rr = !1,
    Wh = 0;

function ga() {
    return "react-day-picker-".concat(++Wh)
}

function Bh(e) {
    var t, n = e ? ? (Rr ? ga() : null),
        r = l.useState(n),
        o = r[0],
        a = r[1];
    return jh(function() {
        o === null && a(ga())
    }, []), l.useEffect(function() {
        Rr === !1 && (Rr = !0)
    }, []), (t = e ? ? o) !== null && t !== void 0 ? t : void 0
}

function Hh(e) {
    var t, n, r = ie(),
        o = r.dir,
        a = r.classNames,
        i = r.styles,
        s = r.components,
        c = dn().displayMonths,
        u = Bh(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0),
        f = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0,
        d = [a.month],
        p = i.month,
        v = e.displayIndex === 0,
        m = e.displayIndex === c.length - 1,
        h = !v && !m;
    o === "rtl" && (t = [v, m], m = t[0], v = t[1]), v && (d.push(a.caption_start), p = G(G({}, p), i.caption_start)), m && (d.push(a.caption_end), p = G(G({}, p), i.caption_end)), h && (d.push(a.caption_between), p = G(G({}, p), i.caption_between));
    var g = (n = s == null ? void 0 : s.Caption) !== null && n !== void 0 ? n : Km;
    return b.jsxs("div", {
        className: d.join(" "),
        style: p,
        children: [b.jsx(g, {
            id: u,
            displayMonth: e.displayMonth,
            displayIndex: e.displayIndex
        }), b.jsx(Fh, {
            id: f,
            "aria-labelledby": u,
            displayMonth: e.displayMonth
        })]
    }, e.displayIndex)
}

function Vh(e) {
    var t = ie(),
        n = t.classNames,
        r = t.styles;
    return b.jsx("div", {
        className: n.months,
        style: r.months,
        children: e.children
    })
}

function zh(e) {
    var t, n, r = e.initialProps,
        o = ie(),
        a = xo(),
        i = dn(),
        s = l.useState(!1),
        c = s[0],
        u = s[1];
    l.useEffect(function() {
        o.initialFocus && a.focusTarget && (c || (a.focus(a.focusTarget), u(!0)))
    }, [o.initialFocus, c, a.focus, a.focusTarget, a]);
    var f = [o.classNames.root, o.className];
    o.numberOfMonths > 1 && f.push(o.classNames.multiple_months), o.showWeekNumber && f.push(o.classNames.with_weeknumber);
    var d = G(G({}, o.styles.root), o.style),
        p = Object.keys(r).filter(function(m) {
            return m.startsWith("data-")
        }).reduce(function(m, h) {
            var g;
            return G(G({}, m), (g = {}, g[h] = r[h], g))
        }, {}),
        v = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : Vh;
    return b.jsx("div", G({
        className: f.join(" "),
        style: d,
        dir: o.dir,
        id: o.id,
        nonce: r.nonce,
        title: r.title,
        lang: r.lang
    }, p, {
        children: b.jsx(v, {
            children: i.displayMonths.map(function(m, h) {
                return b.jsx(Hh, {
                    displayIndex: h,
                    displayMonth: m
                }, h)
            })
        })
    }))
}

function Uh(e) {
    var t = e.children,
        n = mm(e, ["children"]);
    return b.jsx(km, {
        initialProps: n,
        children: b.jsx(zm, {
            children: b.jsx(Rh, {
                initialProps: n,
                children: b.jsx(eh, {
                    initialProps: n,
                    children: b.jsx(rh, {
                        initialProps: n,
                        children: b.jsx(dh, {
                            children: b.jsx(Ch, {
                                children: t
                            })
                        })
                    })
                })
            })
        })
    })
}

function Gh(e) {
    return b.jsx(Uh, G({}, e, {
        children: b.jsx(zh, {
            initialProps: e
        })
    }))
}
var Yh = e => {
        var t = e,
            {
                lang: n
            } = t,
            r = gt(t, ["lang"]);
        return b.jsx(Gh, he({
            locale: n != null && n.startsWith("ar") ? lm : pm
        }, r))
    },
    $b = Yh,
    Kh = {
        primary: "focus:ring-primary text-primary group-hover:ring-primary",
        secondary: "focus:ring-secondary text-secondary group-hover:ring-secondary",
        tertiary: "focus:ring-tertiary text-tertiary group-hover:ring-tertiary",
        error: "focus:ring-error text-error group-hover:ring-error",
        success: "focus:ring-success text-success group-hover:ring-success",
        black: "focus:ring-black text-black group-hover:ring-black",
        white: "focus:ring-white text-white group-hover:ring-white",
        transparent: "focus:ring-transparent text-transparent group-hover:ring-transparent"
    },
    qh = l.forwardRef(function(t, n) {
        var r = t,
            {
                label: o,
                error: a,
                onChange: i,
                groupClassName: s,
                theme: c = "primary",
                hideErrorSpace: u = !0,
                rounded: f = !0
            } = r,
            d = gt(r, ["label", "error", "onChange", "groupClassName", "theme", "hideErrorSpace", "rounded"]);
        const p = typeof a == "string" && !!a || !u;
        return b.jsxs("div", {
            className: s,
            children: [b.jsxs("label", {
                className: ve("group flex cursor-pointer items-start gap-2", a && "text-error"),
                children: [b.jsx("input", rt(he({
                    type: "checkbox",
                    ref: n
                }, d), {
                    onChange: v => {
                        i == null || i(v.target.checked, (d == null ? void 0 : d.name) || "")
                    },
                    className: ve("bg-body !ring-offset-body mt-[3px] h-[18px] w-[18px] focus:ring-1", "focus:ring-offset-1 group-hover:ring-1 group-hover:ring-offset-1", Kh[c] || "", f ? "rounded-sm" : "", d.className || "")
                })), o]
            }), p && b.jsx("p", {
                className: `text-error my-1 min-h-[16px] text-xs ${a?"visible":"text-transparent"}`,
                children: a
            })]
        })
    }),
    Cb = qh,
    Xh = {
        1: "line-clamp-1",
        2: "line-clamp-2",
        3: "line-clamp-3",
        4: "line-clamp-4",
        5: "line-clamp-5",
        6: "line-clamp-6",
        12: "line-clamp-[12]",
        none: "line-clamp-none"
    },
    Zh = ({
        text: e,
        minimum: t = 3,
        className: n,
        btnProps: r,
        readMoreLabel: o = "Read More",
        readLessLabel: a = "Read Less",
        children: i
    }) => {
        const [s, c] = l.useState(!1), [u, f] = l.useState(!1), [d, p] = l.useState("auto"), v = l.useRef("auto"), m = l.useRef(null);
        l.useLayoutEffect(() => {
            if (!m.current) return;
            const {
                clientHeight: g,
                scrollHeight: w
            } = m.current;
            c(w > g), p(g), v.current = g
        }, []);
        const h = () => {
            f(!u), requestAnimationFrame(() => {
                m.current && p(u ? v.current : m.current.scrollHeight)
            })
        };
        return !e && !i ? null : b.jsxs("div", {
            className: "relative inline-block w-full",
            children: [b.jsx(Ws.div, {
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
                children: b.jsx("div", {
                    ref: m,
                    "data-testid": "collapsable-text",
                    className: ve("text-text max-w-full overflow-hidden whitespace-pre-wrap", !u && Xh[t], !i && "prose", n),
                    children: i || b.jsx("div", {
                        dangerouslySetInnerHTML: {
                            __html: e || ""
                        }
                    })
                })
            }), s && b.jsx(di, rt(he({
                onClick: h,
                shape: "text",
                theme: "transparent",
                className: "relative m-px p-0 text-sm ring-0 hover:underline focus:ring-0",
                rounded: !0,
                "aria-label": u ? a : o
            }, r), {
                children: u ? a : o
            }))]
        })
    },
    Eb = Zh;
export {
    Yi as $, di as B, Cb as C, $b as D, Ei as I, vb as M, pb as O, hb as P, gb as R, Tf as S, ab as T, _r as _, Ki as a, qi as b, Xi as c, yb as d, db as e, wb as f, ub as g, Eb as h, rb as i, np as j, ap as k, Np as l, j as m, lm as n, pm as o, xs as r, xb as s, rp as t
};
//# sourceMappingURL=ui-DjgVGgjs.js.map