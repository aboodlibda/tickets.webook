import {
    r as F,
    c as U
} from "../vendor-DR5RWKqR.js";
var z = {};
(function(g) {
    var E = F,
        f = function() {
            return f = Object.assign || function(r) {
                for (var u, n = 1, _ = arguments.length; n < _; n++) {
                    u = arguments[n];
                    for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (r[c] = u[c])
                }
                return r
            }, f.apply(this, arguments)
        };
    typeof SuppressedError == "function" && SuppressedError;
    var O = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof U < "u" ? U : typeof self < "u" ? self : {},
        t = {},
        I = {};
    Object.defineProperty(I, "__esModule", {
        value: !0
    }), I.BLOCKS = void 0;
    var v;
    (function(e) {
        e.DOCUMENT = "document", e.PARAGRAPH = "paragraph", e.HEADING_1 = "heading-1", e.HEADING_2 = "heading-2", e.HEADING_3 = "heading-3", e.HEADING_4 = "heading-4", e.HEADING_5 = "heading-5", e.HEADING_6 = "heading-6", e.OL_LIST = "ordered-list", e.UL_LIST = "unordered-list", e.LIST_ITEM = "list-item", e.HR = "hr", e.QUOTE = "blockquote", e.EMBEDDED_ENTRY = "embedded-entry-block", e.EMBEDDED_ASSET = "embedded-asset-block", e.EMBEDDED_RESOURCE = "embedded-resource-block", e.TABLE = "table", e.TABLE_ROW = "table-row", e.TABLE_CELL = "table-cell", e.TABLE_HEADER_CELL = "table-header-cell"
    })(v || (I.BLOCKS = v = {}));
    var N = {};
    Object.defineProperty(N, "__esModule", {
        value: !0
    }), N.INLINES = void 0;
    var M;
    (function(e) {
        e.HYPERLINK = "hyperlink", e.ENTRY_HYPERLINK = "entry-hyperlink", e.ASSET_HYPERLINK = "asset-hyperlink", e.RESOURCE_HYPERLINK = "resource-hyperlink", e.EMBEDDED_ENTRY = "embedded-entry-inline", e.EMBEDDED_RESOURCE = "embedded-resource-inline"
    })(M || (N.INLINES = M = {}));
    var R = {};
    Object.defineProperty(R, "__esModule", {
        value: !0
    }), R.MARKS = void 0;
    var H;
    (function(e) {
        e.BOLD = "bold", e.ITALIC = "italic", e.UNDERLINE = "underline", e.CODE = "code", e.SUPERSCRIPT = "superscript", e.SUBSCRIPT = "subscript"
    })(H || (R.MARKS = H = {}));
    var y = {};
    (function(e) {
        var r = O && O.__spreadArray || function(d, o, T) {
                if (T || arguments.length === 2)
                    for (var i = 0, a = o.length, L; i < a; i++)(L || !(i in o)) && (L || (L = Array.prototype.slice.call(o, 0, i)), L[i] = o[i]);
                return d.concat(L || Array.prototype.slice.call(o))
            },
            u;
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.V1_MARKS = e.V1_NODE_TYPES = e.TEXT_CONTAINERS = e.HEADINGS = e.CONTAINERS = e.VOID_BLOCKS = e.TABLE_BLOCKS = e.LIST_ITEM_BLOCKS = e.TOP_LEVEL_BLOCKS = void 0;
        var n = I,
            _ = N,
            c = R;
        e.TOP_LEVEL_BLOCKS = [n.BLOCKS.PARAGRAPH, n.BLOCKS.HEADING_1, n.BLOCKS.HEADING_2, n.BLOCKS.HEADING_3, n.BLOCKS.HEADING_4, n.BLOCKS.HEADING_5, n.BLOCKS.HEADING_6, n.BLOCKS.OL_LIST, n.BLOCKS.UL_LIST, n.BLOCKS.HR, n.BLOCKS.QUOTE, n.BLOCKS.EMBEDDED_ENTRY, n.BLOCKS.EMBEDDED_ASSET, n.BLOCKS.EMBEDDED_RESOURCE, n.BLOCKS.TABLE], e.LIST_ITEM_BLOCKS = [n.BLOCKS.PARAGRAPH, n.BLOCKS.HEADING_1, n.BLOCKS.HEADING_2, n.BLOCKS.HEADING_3, n.BLOCKS.HEADING_4, n.BLOCKS.HEADING_5, n.BLOCKS.HEADING_6, n.BLOCKS.OL_LIST, n.BLOCKS.UL_LIST, n.BLOCKS.HR, n.BLOCKS.QUOTE, n.BLOCKS.EMBEDDED_ENTRY, n.BLOCKS.EMBEDDED_ASSET, n.BLOCKS.EMBEDDED_RESOURCE], e.TABLE_BLOCKS = [n.BLOCKS.TABLE, n.BLOCKS.TABLE_ROW, n.BLOCKS.TABLE_CELL, n.BLOCKS.TABLE_HEADER_CELL], e.VOID_BLOCKS = [n.BLOCKS.HR, n.BLOCKS.EMBEDDED_ENTRY, n.BLOCKS.EMBEDDED_ASSET, n.BLOCKS.EMBEDDED_RESOURCE], e.CONTAINERS = (u = {}, u[n.BLOCKS.OL_LIST] = [n.BLOCKS.LIST_ITEM], u[n.BLOCKS.UL_LIST] = [n.BLOCKS.LIST_ITEM], u[n.BLOCKS.LIST_ITEM] = e.LIST_ITEM_BLOCKS, u[n.BLOCKS.QUOTE] = [n.BLOCKS.PARAGRAPH], u[n.BLOCKS.TABLE] = [n.BLOCKS.TABLE_ROW], u[n.BLOCKS.TABLE_ROW] = [n.BLOCKS.TABLE_CELL, n.BLOCKS.TABLE_HEADER_CELL], u[n.BLOCKS.TABLE_CELL] = [n.BLOCKS.PARAGRAPH], u[n.BLOCKS.TABLE_HEADER_CELL] = [n.BLOCKS.PARAGRAPH], u), e.HEADINGS = [n.BLOCKS.HEADING_1, n.BLOCKS.HEADING_2, n.BLOCKS.HEADING_3, n.BLOCKS.HEADING_4, n.BLOCKS.HEADING_5, n.BLOCKS.HEADING_6], e.TEXT_CONTAINERS = r([n.BLOCKS.PARAGRAPH], e.HEADINGS, !0), e.V1_NODE_TYPES = [n.BLOCKS.DOCUMENT, n.BLOCKS.PARAGRAPH, n.BLOCKS.HEADING_1, n.BLOCKS.HEADING_2, n.BLOCKS.HEADING_3, n.BLOCKS.HEADING_4, n.BLOCKS.HEADING_5, n.BLOCKS.HEADING_6, n.BLOCKS.OL_LIST, n.BLOCKS.UL_LIST, n.BLOCKS.LIST_ITEM, n.BLOCKS.HR, n.BLOCKS.QUOTE, n.BLOCKS.EMBEDDED_ENTRY, n.BLOCKS.EMBEDDED_ASSET, _.INLINES.HYPERLINK, _.INLINES.ENTRY_HYPERLINK, _.INLINES.ASSET_HYPERLINK, _.INLINES.EMBEDDED_ENTRY, "text"], e.V1_MARKS = [c.MARKS.BOLD, c.MARKS.CODE, c.MARKS.ITALIC, c.MARKS.UNDERLINE]
    })(y);
    var P = {};
    Object.defineProperty(P, "__esModule", {
        value: !0
    });
    var p = {};
    Object.defineProperty(p, "__esModule", {
        value: !0
    });
    var K = {};
    Object.defineProperty(K, "__esModule", {
        value: !0
    }), K.EMPTY_DOCUMENT = void 0;
    var b = I;
    K.EMPTY_DOCUMENT = {
        nodeType: b.BLOCKS.DOCUMENT,
        data: {},
        content: [{
            nodeType: b.BLOCKS.PARAGRAPH,
            data: {},
            content: [{
                nodeType: "text",
                value: "",
                marks: [],
                data: {}
            }]
        }]
    };
    var B = {};
    Object.defineProperty(B, "__esModule", {
        value: !0
    }), B.isText = B.isBlock = B.isInline = void 0;
    var Y = I,
        j = N;

    function m(e, r) {
        for (var u = 0, n = Object.keys(e); u < n.length; u++) {
            var _ = n[u];
            if (r === e[_]) return !0
        }
        return !1
    }

    function k(e) {
        return m(j.INLINES, e.nodeType)
    }
    B.isInline = k;

    function w(e) {
        return m(Y.BLOCKS, e.nodeType)
    }
    B.isBlock = w;

    function W(e) {
        return e.nodeType === "text"
    }
    B.isText = W,
        function(e) {
            var r = O && O.__createBinding || (Object.create ? function(a, L, S, D) {
                    D === void 0 && (D = S);
                    var A = Object.getOwnPropertyDescriptor(L, S);
                    (!A || ("get" in A ? !L.__esModule : A.writable || A.configurable)) && (A = {
                        enumerable: !0,
                        get: function() {
                            return L[S]
                        }
                    }), Object.defineProperty(a, D, A)
                } : function(a, L, S, D) {
                    D === void 0 && (D = S), a[D] = L[S]
                }),
                u = O && O.__setModuleDefault || (Object.create ? function(a, L) {
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: L
                    })
                } : function(a, L) {
                    a.default = L
                }),
                n = O && O.__exportStar || function(a, L) {
                    for (var S in a) S !== "default" && !Object.prototype.hasOwnProperty.call(L, S) && r(L, a, S)
                },
                _ = O && O.__importStar || function(a) {
                    if (a && a.__esModule) return a;
                    var L = {};
                    if (a != null)
                        for (var S in a) S !== "default" && Object.prototype.hasOwnProperty.call(a, S) && r(L, a, S);
                    return u(L, a), L
                };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.helpers = e.EMPTY_DOCUMENT = e.MARKS = e.INLINES = e.BLOCKS = void 0;
            var c = I;
            Object.defineProperty(e, "BLOCKS", {
                enumerable: !0,
                get: function() {
                    return c.BLOCKS
                }
            });
            var d = N;
            Object.defineProperty(e, "INLINES", {
                enumerable: !0,
                get: function() {
                    return d.INLINES
                }
            });
            var o = R;
            Object.defineProperty(e, "MARKS", {
                enumerable: !0,
                get: function() {
                    return o.MARKS
                }
            }), n(y, e), n(P, e), n(p, e);
            var T = K;
            Object.defineProperty(e, "EMPTY_DOCUMENT", {
                enumerable: !0,
                get: function() {
                    return T.EMPTY_DOCUMENT
                }
            });
            var i = _(B);
            e.helpers = i
        }(t);

    function V(e, r) {
        return E.isValidElement(e) && e.key === null ? E.cloneElement(e, {
            key: r
        }) : e
    }

    function Q(e, r) {
        return e.map(function(u, n) {
            return V(G(u, r), n)
        })
    }

    function G(e, r) {
        var u = r.renderNode,
            n = r.renderMark,
            _ = r.renderText,
            c = r.preserveWhitespace;
        if (t.helpers.isText(e)) {
            var d = _ ? _(e.value) : e.value;
            if (c) {
                d = d.replace(/ {2,}/g, function(a) {
                    return " ".repeat(a.length)
                });
                var o = d.split(`
`),
                    T = [];
                o.forEach(function(a, L) {
                    T.push(a), L !== o.length - 1 && T.push(E.createElement("br", null))
                }), d = T
            }
            return e.marks.reduce(function(a, L) {
                return n[L.type] ? n[L.type](a) : a
            }, d)
        } else {
            var i = Q(e.content, r);
            return !e.nodeType || !u[e.nodeType] ? E.createElement(E.Fragment, null, i) : u[e.nodeType](e, i)
        }
    }
    var l, C, $ = (l = {}, l[t.BLOCKS.DOCUMENT] = function(e, r) {
            return r
        }, l[t.BLOCKS.PARAGRAPH] = function(e, r) {
            return E.createElement("p", null, r)
        }, l[t.BLOCKS.HEADING_1] = function(e, r) {
            return E.createElement("h1", null, r)
        }, l[t.BLOCKS.HEADING_2] = function(e, r) {
            return E.createElement("h2", null, r)
        }, l[t.BLOCKS.HEADING_3] = function(e, r) {
            return E.createElement("h3", null, r)
        }, l[t.BLOCKS.HEADING_4] = function(e, r) {
            return E.createElement("h4", null, r)
        }, l[t.BLOCKS.HEADING_5] = function(e, r) {
            return E.createElement("h5", null, r)
        }, l[t.BLOCKS.HEADING_6] = function(e, r) {
            return E.createElement("h6", null, r)
        }, l[t.BLOCKS.EMBEDDED_ENTRY] = function(e, r) {
            return E.createElement("div", null, r)
        }, l[t.BLOCKS.EMBEDDED_RESOURCE] = function(e, r) {
            return E.createElement("div", null, r)
        }, l[t.BLOCKS.UL_LIST] = function(e, r) {
            return E.createElement("ul", null, r)
        }, l[t.BLOCKS.OL_LIST] = function(e, r) {
            return E.createElement("ol", null, r)
        }, l[t.BLOCKS.LIST_ITEM] = function(e, r) {
            return E.createElement("li", null, r)
        }, l[t.BLOCKS.QUOTE] = function(e, r) {
            return E.createElement("blockquote", null, r)
        }, l[t.BLOCKS.HR] = function() {
            return E.createElement("hr", null)
        }, l[t.BLOCKS.TABLE] = function(e, r) {
            return E.createElement("table", null, E.createElement("tbody", null, r))
        }, l[t.BLOCKS.TABLE_ROW] = function(e, r) {
            return E.createElement("tr", null, r)
        }, l[t.BLOCKS.TABLE_HEADER_CELL] = function(e, r) {
            return E.createElement("th", null, r)
        }, l[t.BLOCKS.TABLE_CELL] = function(e, r) {
            return E.createElement("td", null, r)
        }, l[t.INLINES.ASSET_HYPERLINK] = function(e) {
            return s(t.INLINES.ASSET_HYPERLINK, e)
        }, l[t.INLINES.ENTRY_HYPERLINK] = function(e) {
            return s(t.INLINES.ENTRY_HYPERLINK, e)
        }, l[t.INLINES.RESOURCE_HYPERLINK] = function(e) {
            return h(t.INLINES.RESOURCE_HYPERLINK, e)
        }, l[t.INLINES.EMBEDDED_ENTRY] = function(e) {
            return s(t.INLINES.EMBEDDED_ENTRY, e)
        }, l[t.INLINES.EMBEDDED_RESOURCE] = function(e, r) {
            return h(t.INLINES.EMBEDDED_RESOURCE, e)
        }, l[t.INLINES.HYPERLINK] = function(e, r) {
            return E.createElement("a", {
                href: e.data.uri
            }, r)
        }, l),
        q = (C = {}, C[t.MARKS.BOLD] = function(e) {
            return E.createElement("b", null, e)
        }, C[t.MARKS.ITALIC] = function(e) {
            return E.createElement("i", null, e)
        }, C[t.MARKS.UNDERLINE] = function(e) {
            return E.createElement("u", null, e)
        }, C[t.MARKS.CODE] = function(e) {
            return E.createElement("code", null, e)
        }, C[t.MARKS.SUPERSCRIPT] = function(e) {
            return E.createElement("sup", null, e)
        }, C[t.MARKS.SUBSCRIPT] = function(e) {
            return E.createElement("sub", null, e)
        }, C);

    function s(e, r) {
        return E.createElement("span", {
            key: r.data.target.sys.id
        }, "type: ", r.nodeType, " id: ", r.data.target.sys.id)
    }

    function h(e, r) {
        return E.createElement("span", {
            key: r.data.target.sys.urn
        }, "type: ", r.nodeType, " urn: ", r.data.target.sys.urn)
    }

    function X(e, r) {
        return r === void 0 && (r = {}), e ? G(e, {
            renderNode: f(f({}, $), r.renderNode),
            renderMark: f(f({}, q), r.renderMark),
            renderText: r.renderText,
            preserveWhitespace: r.preserveWhitespace
        }) : null
    }
    g.documentToReactComponents = X
})(z);
export {
    z as r
};
//# sourceMappingURL=rich-text-react-renderer-DDXKQ87Q.js.map