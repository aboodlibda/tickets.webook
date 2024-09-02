import {
    c as t
} from "../vendor-DR5RWKqR.js";
var v = {},
    i = {};
Object.defineProperty(i, "__esModule", {
    value: !0
});
i.BLOCKS = void 0;
var d;
(function(E) {
    E.DOCUMENT = "document", E.PARAGRAPH = "paragraph", E.HEADING_1 = "heading-1", E.HEADING_2 = "heading-2", E.HEADING_3 = "heading-3", E.HEADING_4 = "heading-4", E.HEADING_5 = "heading-5", E.HEADING_6 = "heading-6", E.OL_LIST = "ordered-list", E.UL_LIST = "unordered-list", E.LIST_ITEM = "list-item", E.HR = "hr", E.QUOTE = "blockquote", E.EMBEDDED_ENTRY = "embedded-entry-block", E.EMBEDDED_ASSET = "embedded-asset-block", E.EMBEDDED_RESOURCE = "embedded-resource-block", E.TABLE = "table", E.TABLE_ROW = "table-row", E.TABLE_CELL = "table-cell", E.TABLE_HEADER_CELL = "table-header-cell"
})(d || (i.BLOCKS = d = {}));
var T = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
T.INLINES = void 0;
var N;
(function(E) {
    E.HYPERLINK = "hyperlink", E.ENTRY_HYPERLINK = "entry-hyperlink", E.ASSET_HYPERLINK = "asset-hyperlink", E.RESOURCE_HYPERLINK = "resource-hyperlink", E.EMBEDDED_ENTRY = "embedded-entry-inline", E.EMBEDDED_RESOURCE = "embedded-resource-inline"
})(N || (T.INLINES = N = {}));
var l = {};
Object.defineProperty(l, "__esModule", {
    value: !0
});
l.MARKS = void 0;
var R;
(function(E) {
    E.BOLD = "bold", E.ITALIC = "italic", E.UNDERLINE = "underline", E.CODE = "code", E.SUPERSCRIPT = "superscript", E.SUBSCRIPT = "subscript"
})(R || (l.MARKS = R = {}));
var f = {};
(function(E) {
    var C = t && t.__spreadArray || function(K, a, c) {
            if (c || arguments.length === 2)
                for (var O = 0, L = a.length, _; O < L; O++)(_ || !(O in a)) && (_ || (_ = Array.prototype.slice.call(a, 0, O)), _[O] = a[O]);
            return K.concat(_ || Array.prototype.slice.call(a))
        },
        r;
    Object.defineProperty(E, "__esModule", {
        value: !0
    }), E.V1_MARKS = E.V1_NODE_TYPES = E.TEXT_CONTAINERS = E.HEADINGS = E.CONTAINERS = E.VOID_BLOCKS = E.TABLE_BLOCKS = E.LIST_ITEM_BLOCKS = E.TOP_LEVEL_BLOCKS = void 0;
    var e = i,
        S = T,
        A = l;
    E.TOP_LEVEL_BLOCKS = [e.BLOCKS.PARAGRAPH, e.BLOCKS.HEADING_1, e.BLOCKS.HEADING_2, e.BLOCKS.HEADING_3, e.BLOCKS.HEADING_4, e.BLOCKS.HEADING_5, e.BLOCKS.HEADING_6, e.BLOCKS.OL_LIST, e.BLOCKS.UL_LIST, e.BLOCKS.HR, e.BLOCKS.QUOTE, e.BLOCKS.EMBEDDED_ENTRY, e.BLOCKS.EMBEDDED_ASSET, e.BLOCKS.EMBEDDED_RESOURCE, e.BLOCKS.TABLE], E.LIST_ITEM_BLOCKS = [e.BLOCKS.PARAGRAPH, e.BLOCKS.HEADING_1, e.BLOCKS.HEADING_2, e.BLOCKS.HEADING_3, e.BLOCKS.HEADING_4, e.BLOCKS.HEADING_5, e.BLOCKS.HEADING_6, e.BLOCKS.OL_LIST, e.BLOCKS.UL_LIST, e.BLOCKS.HR, e.BLOCKS.QUOTE, e.BLOCKS.EMBEDDED_ENTRY, e.BLOCKS.EMBEDDED_ASSET, e.BLOCKS.EMBEDDED_RESOURCE], E.TABLE_BLOCKS = [e.BLOCKS.TABLE, e.BLOCKS.TABLE_ROW, e.BLOCKS.TABLE_CELL, e.BLOCKS.TABLE_HEADER_CELL], E.VOID_BLOCKS = [e.BLOCKS.HR, e.BLOCKS.EMBEDDED_ENTRY, e.BLOCKS.EMBEDDED_ASSET, e.BLOCKS.EMBEDDED_RESOURCE], E.CONTAINERS = (r = {}, r[e.BLOCKS.OL_LIST] = [e.BLOCKS.LIST_ITEM], r[e.BLOCKS.UL_LIST] = [e.BLOCKS.LIST_ITEM], r[e.BLOCKS.LIST_ITEM] = E.LIST_ITEM_BLOCKS, r[e.BLOCKS.QUOTE] = [e.BLOCKS.PARAGRAPH], r[e.BLOCKS.TABLE] = [e.BLOCKS.TABLE_ROW], r[e.BLOCKS.TABLE_ROW] = [e.BLOCKS.TABLE_CELL, e.BLOCKS.TABLE_HEADER_CELL], r[e.BLOCKS.TABLE_CELL] = [e.BLOCKS.PARAGRAPH], r[e.BLOCKS.TABLE_HEADER_CELL] = [e.BLOCKS.PARAGRAPH], r), E.HEADINGS = [e.BLOCKS.HEADING_1, e.BLOCKS.HEADING_2, e.BLOCKS.HEADING_3, e.BLOCKS.HEADING_4, e.BLOCKS.HEADING_5, e.BLOCKS.HEADING_6], E.TEXT_CONTAINERS = C([e.BLOCKS.PARAGRAPH], E.HEADINGS, !0), E.V1_NODE_TYPES = [e.BLOCKS.DOCUMENT, e.BLOCKS.PARAGRAPH, e.BLOCKS.HEADING_1, e.BLOCKS.HEADING_2, e.BLOCKS.HEADING_3, e.BLOCKS.HEADING_4, e.BLOCKS.HEADING_5, e.BLOCKS.HEADING_6, e.BLOCKS.OL_LIST, e.BLOCKS.UL_LIST, e.BLOCKS.LIST_ITEM, e.BLOCKS.HR, e.BLOCKS.QUOTE, e.BLOCKS.EMBEDDED_ENTRY, e.BLOCKS.EMBEDDED_ASSET, S.INLINES.HYPERLINK, S.INLINES.ENTRY_HYPERLINK, S.INLINES.ASSET_HYPERLINK, S.INLINES.EMBEDDED_ENTRY, "text"], E.V1_MARKS = [A.MARKS.BOLD, A.MARKS.CODE, A.MARKS.ITALIC, A.MARKS.UNDERLINE]
})(f);
var H = {};
Object.defineProperty(H, "__esModule", {
    value: !0
});
var M = {};
Object.defineProperty(M, "__esModule", {
    value: !0
});
var I = {};
Object.defineProperty(I, "__esModule", {
    value: !0
});
I.EMPTY_DOCUMENT = void 0;
var o = i;
I.EMPTY_DOCUMENT = {
    nodeType: o.BLOCKS.DOCUMENT,
    data: {},
    content: [{
        nodeType: o.BLOCKS.PARAGRAPH,
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
});
B.isText = B.isBlock = B.isInline = void 0;
var b = i,
    y = T;

function P(E, C) {
    for (var r = 0, e = Object.keys(E); r < e.length; r++) {
        var S = e[r];
        if (C === E[S]) return !0
    }
    return !1
}

function G(E) {
    return P(y.INLINES, E.nodeType)
}
B.isInline = G;

function s(E) {
    return P(b.BLOCKS, E.nodeType)
}
B.isBlock = s;

function U(E) {
    return E.nodeType === "text"
}
B.isText = U;
(function(E) {
    var C = t && t.__createBinding || (Object.create ? function(L, _, n, D) {
            D === void 0 && (D = n);
            var u = Object.getOwnPropertyDescriptor(_, n);
            (!u || ("get" in u ? !_.__esModule : u.writable || u.configurable)) && (u = {
                enumerable: !0,
                get: function() {
                    return _[n]
                }
            }), Object.defineProperty(L, D, u)
        } : function(L, _, n, D) {
            D === void 0 && (D = n), L[D] = _[n]
        }),
        r = t && t.__setModuleDefault || (Object.create ? function(L, _) {
            Object.defineProperty(L, "default", {
                enumerable: !0,
                value: _
            })
        } : function(L, _) {
            L.default = _
        }),
        e = t && t.__exportStar || function(L, _) {
            for (var n in L) n !== "default" && !Object.prototype.hasOwnProperty.call(_, n) && C(_, L, n)
        },
        S = t && t.__importStar || function(L) {
            if (L && L.__esModule) return L;
            var _ = {};
            if (L != null)
                for (var n in L) n !== "default" && Object.prototype.hasOwnProperty.call(L, n) && C(_, L, n);
            return r(_, L), _
        };
    Object.defineProperty(E, "__esModule", {
        value: !0
    }), E.helpers = E.EMPTY_DOCUMENT = E.MARKS = E.INLINES = E.BLOCKS = void 0;
    var A = i;
    Object.defineProperty(E, "BLOCKS", {
        enumerable: !0,
        get: function() {
            return A.BLOCKS
        }
    });
    var K = T;
    Object.defineProperty(E, "INLINES", {
        enumerable: !0,
        get: function() {
            return K.INLINES
        }
    });
    var a = l;
    Object.defineProperty(E, "MARKS", {
        enumerable: !0,
        get: function() {
            return a.MARKS
        }
    }), e(f, E), e(H, E), e(M, E);
    var c = I;
    Object.defineProperty(E, "EMPTY_DOCUMENT", {
        enumerable: !0,
        get: function() {
            return c.EMPTY_DOCUMENT
        }
    });
    var O = S(B);
    E.helpers = O
})(v);
export {
    v as d
};
//# sourceMappingURL=rich-text-types-Ck9EBoAh.js.map