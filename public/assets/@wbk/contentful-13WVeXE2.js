import {
    c as je,
    g as Ve
} from "../vendor-DR5RWKqR.js";

function qe(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const s = Object.getOwnPropertyDescriptor(r, i);
                    s && Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var $e = Object.defineProperty,
    Ge = Object.defineProperties,
    He = Object.getOwnPropertyDescriptors,
    K = Object.getOwnPropertySymbols,
    Oe = Object.prototype.hasOwnProperty,
    _e = Object.prototype.propertyIsEnumerable,
    Ee = (e, t, n) => t in e ? $e(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    me = (e, t) => {
        for (var n in t || (t = {})) Oe.call(t, n) && Ee(e, n, t[n]);
        if (K)
            for (var n of K(t)) _e.call(t, n) && Ee(e, n, t[n]);
        return e
    },
    Jt = (e, t) => Ge(e, He(t)),
    Qt = (e, t) => {
        var n = {};
        for (var r in e) Oe.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && K)
            for (var r of K(e)) t.indexOf(r) < 0 && _e.call(e, r) && (n[r] = e[r]);
        return n
    },
    Xt = (e, t, n) => new Promise((r, i) => {
        var s = h => {
                try {
                    u(n.next(h))
                } catch (f) {
                    i(f)
                }
            },
            c = h => {
                try {
                    u(n.throw(h))
                } catch (f) {
                    i(f)
                }
            },
            u = h => h.done ? r(h.value) : Promise.resolve(h.value).then(s, c);
        u((n = n.apply(e, t)).next())
    });
const fe = JSON,
    Ye = e => e.toUpperCase(),
    ze = e => {
        const t = {};
        return e.forEach((n, r) => {
            t[r] = n
        }), t
    },
    Je = (e, t, n) => e.document ? e : {
        document: e,
        variables: t,
        requestHeaders: n,
        signal: void 0
    },
    Qe = (e, t, n) => e.query ? e : {
        query: e,
        variables: t,
        requestHeaders: n,
        signal: void 0
    },
    Xe = (e, t) => e.documents ? e : {
        documents: e,
        requestHeaders: t,
        signal: void 0
    };

function Q(e, t) {
    if (!!!e) throw new Error(t)
}

function We(e) {
    return typeof e == "object" && e !== null
}

function Ze(e, t) {
    if (!!!e) throw new Error("Unexpected invariant triggered.")
}
const Ke = /\r\n|[\n\r]/g;

function ue(e, t) {
    let n = 0,
        r = 1;
    for (const i of e.body.matchAll(Ke)) {
        if (typeof i.index == "number" || Ze(!1), i.index >= t) break;
        n = i.index + i[0].length, r += 1
    }
    return {
        line: r,
        column: t + 1 - n
    }
}

function et(e) {
    return be(e.source, ue(e.source, e.start))
}

function be(e, t) {
    const n = e.locationOffset.column - 1,
        r = "".padStart(n) + e.body,
        i = t.line - 1,
        s = e.locationOffset.line - 1,
        c = t.line + s,
        u = t.line === 1 ? n : 0,
        h = t.column + u,
        f = `${e.name}:${c}:${h}
`,
        y = r.split(/\r\n|[\n\r]/g),
        m = y[i];
    if (m.length > 120) {
        const T = Math.floor(h / 80),
            g = h % 80,
            E = [];
        for (let A = 0; A < m.length; A += 80) E.push(m.slice(A, A + 80));
        return f + Te([
            [`${c} |`, E[0]], ...E.slice(1, T + 1).map(A => ["|", A]), ["|", "^".padStart(g)],
            ["|", E[T + 1]]
        ])
    }
    return f + Te([
        [`${c-1} |`, y[i - 1]],
        [`${c} |`, m],
        ["|", "^".padStart(h)],
        [`${c+1} |`, y[i + 1]]
    ])
}

function Te(e) {
    const t = e.filter(([r, i]) => i !== void 0),
        n = Math.max(...t.map(([r]) => r.length));
    return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`)
}

function tt(e) {
    const t = e[0];
    return t == null || "kind" in t || "length" in t ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5]
    } : t
}
class de extends Error {
    constructor(t, ...n) {
        var r, i, s;
        const {
            nodes: c,
            source: u,
            positions: h,
            path: f,
            originalError: y,
            extensions: m
        } = tt(n);
        super(t), this.name = "GraphQLError", this.path = f ? ? void 0, this.originalError = y ? ? void 0, this.nodes = Ne(Array.isArray(c) ? c : c ? [c] : void 0);
        const T = Ne((r = this.nodes) === null || r === void 0 ? void 0 : r.map(E => E.loc).filter(E => E != null));
        this.source = u ? ? (T == null || (i = T[0]) === null || i === void 0 ? void 0 : i.source), this.positions = h ? ? (T == null ? void 0 : T.map(E => E.start)), this.locations = h && u ? h.map(E => ue(u, E)) : T == null ? void 0 : T.map(E => ue(E.source, E.start));
        const g = We(y == null ? void 0 : y.extensions) ? y == null ? void 0 : y.extensions : void 0;
        this.extensions = (s = m ? ? g) !== null && s !== void 0 ? s : Object.create(null), Object.defineProperties(this, {
            message: {
                writable: !0,
                enumerable: !0
            },
            name: {
                enumerable: !1
            },
            nodes: {
                enumerable: !1
            },
            source: {
                enumerable: !1
            },
            positions: {
                enumerable: !1
            },
            originalError: {
                enumerable: !1
            }
        }), y != null && y.stack ? Object.defineProperty(this, "stack", {
            value: y.stack,
            writable: !0,
            configurable: !0
        }) : Error.captureStackTrace ? Error.captureStackTrace(this, de) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
        })
    }
    get[Symbol.toStringTag]() {
        return "GraphQLError"
    }
    toString() {
        let t = this.message;
        if (this.nodes)
            for (const n of this.nodes) n.loc && (t += `

` + et(n.loc));
        else if (this.source && this.locations)
            for (const n of this.locations) t += `

` + be(this.source, n);
        return t
    }
    toJSON() {
        const t = {
            message: this.message
        };
        return this.locations != null && (t.locations = this.locations), this.path != null && (t.path = this.path), this.extensions != null && Object.keys(this.extensions).length > 0 && (t.extensions = this.extensions), t
    }
}

function Ne(e) {
    return e === void 0 || e.length === 0 ? void 0 : e
}

function O(e, t, n) {
    return new de(`Syntax Error: ${n}`, {
        source: e,
        positions: [t]
    })
}
class nt {
    constructor(t, n, r) {
        this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = r
    }
    get[Symbol.toStringTag]() {
        return "Location"
    }
    toJSON() {
        return {
            start: this.start,
            end: this.end
        }
    }
}
class De {
    constructor(t, n, r, i, s, c) {
        this.kind = t, this.start = n, this.end = r, this.line = i, this.column = s, this.value = c, this.prev = null, this.next = null
    }
    get[Symbol.toStringTag]() {
        return "Token"
    }
    toJSON() {
        return {
            kind: this.kind,
            value: this.value,
            line: this.line,
            column: this.column
        }
    }
}
const Se = {
        Name: [],
        Document: ["definitions"],
        OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
        VariableDefinition: ["variable", "type", "defaultValue", "directives"],
        Variable: ["name"],
        SelectionSet: ["selections"],
        Field: ["alias", "name", "arguments", "directives", "selectionSet"],
        Argument: ["name", "value"],
        FragmentSpread: ["name", "directives"],
        InlineFragment: ["typeCondition", "directives", "selectionSet"],
        FragmentDefinition: ["name", "variableDefinitions", "typeCondition", "directives", "selectionSet"],
        IntValue: [],
        FloatValue: [],
        StringValue: [],
        BooleanValue: [],
        NullValue: [],
        EnumValue: [],
        ListValue: ["values"],
        ObjectValue: ["fields"],
        ObjectField: ["name", "value"],
        Directive: ["name", "arguments"],
        NamedType: ["name"],
        ListType: ["type"],
        NonNullType: ["type"],
        SchemaDefinition: ["description", "directives", "operationTypes"],
        OperationTypeDefinition: ["type"],
        ScalarTypeDefinition: ["description", "name", "directives"],
        ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        FieldDefinition: ["description", "name", "arguments", "type", "directives"],
        InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
        InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
        UnionTypeDefinition: ["description", "name", "directives", "types"],
        EnumTypeDefinition: ["description", "name", "directives", "values"],
        EnumValueDefinition: ["description", "name", "directives"],
        InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
        DirectiveDefinition: ["description", "name", "arguments", "locations"],
        SchemaExtension: ["directives", "operationTypes"],
        ScalarTypeExtension: ["name", "directives"],
        ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
        InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
        UnionTypeExtension: ["name", "directives", "types"],
        EnumTypeExtension: ["name", "directives", "values"],
        InputObjectTypeExtension: ["name", "directives", "fields"]
    },
    it = new Set(Object.keys(Se));

function ve(e) {
    const t = e == null ? void 0 : e.kind;
    return typeof t == "string" && it.has(t)
}
var U;
(function(e) {
    e.QUERY = "query", e.MUTATION = "mutation", e.SUBSCRIPTION = "subscription"
})(U || (U = {}));
var le;
(function(e) {
    e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
})(le || (le = {}));
var d;
(function(e) {
    e.NAME = "Name", e.DOCUMENT = "Document", e.OPERATION_DEFINITION = "OperationDefinition", e.VARIABLE_DEFINITION = "VariableDefinition", e.SELECTION_SET = "SelectionSet", e.FIELD = "Field", e.ARGUMENT = "Argument", e.FRAGMENT_SPREAD = "FragmentSpread", e.INLINE_FRAGMENT = "InlineFragment", e.FRAGMENT_DEFINITION = "FragmentDefinition", e.VARIABLE = "Variable", e.INT = "IntValue", e.FLOAT = "FloatValue", e.STRING = "StringValue", e.BOOLEAN = "BooleanValue", e.NULL = "NullValue", e.ENUM = "EnumValue", e.LIST = "ListValue", e.OBJECT = "ObjectValue", e.OBJECT_FIELD = "ObjectField", e.DIRECTIVE = "Directive", e.NAMED_TYPE = "NamedType", e.LIST_TYPE = "ListType", e.NON_NULL_TYPE = "NonNullType", e.SCHEMA_DEFINITION = "SchemaDefinition", e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition", e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition", e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition", e.FIELD_DEFINITION = "FieldDefinition", e.INPUT_VALUE_DEFINITION = "InputValueDefinition", e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition", e.UNION_TYPE_DEFINITION = "UnionTypeDefinition", e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition", e.ENUM_VALUE_DEFINITION = "EnumValueDefinition", e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition", e.DIRECTIVE_DEFINITION = "DirectiveDefinition", e.SCHEMA_EXTENSION = "SchemaExtension", e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension", e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension", e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension", e.UNION_TYPE_EXTENSION = "UnionTypeExtension", e.ENUM_TYPE_EXTENSION = "EnumTypeExtension", e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension"
})(d || (d = {}));

function he(e) {
    return e === 9 || e === 32
}

function $(e) {
    return e >= 48 && e <= 57
}

function Ce(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90
}

function we(e) {
    return Ce(e) || e === 95
}

function rt(e) {
    return Ce(e) || $(e) || e === 95
}

function st(e) {
    var t;
    let n = Number.MAX_SAFE_INTEGER,
        r = null,
        i = -1;
    for (let c = 0; c < e.length; ++c) {
        var s;
        const u = e[c],
            h = ot(u);
        h !== u.length && (r = (s = r) !== null && s !== void 0 ? s : c, i = c, c !== 0 && h < n && (n = h))
    }
    return e.map((c, u) => u === 0 ? c : c.slice(n)).slice((t = r) !== null && t !== void 0 ? t : 0, i + 1)
}

function ot(e) {
    let t = 0;
    for (; t < e.length && he(e.charCodeAt(t));) ++t;
    return t
}

function at(e, t) {
    const n = e.replace(/"""/g, '\\"""'),
        r = n.split(/\r\n|[\n\r]/g),
        i = r.length === 1,
        s = r.length > 1 && r.slice(1).every(g => g.length === 0 || he(g.charCodeAt(0))),
        c = n.endsWith('\\"""'),
        u = e.endsWith('"') && !c,
        h = e.endsWith("\\"),
        f = u || h,
        y = !i || e.length > 70 || f || s || c;
    let m = "";
    const T = i && he(e.charCodeAt(0));
    return (y && !T || s) && (m += `
`), m += n, (y || f) && (m += `
`), '"""' + m + '"""'
}
var a;
(function(e) {
    e.SOF = "<SOF>", e.EOF = "<EOF>", e.BANG = "!", e.DOLLAR = "$", e.AMP = "&", e.PAREN_L = "(", e.PAREN_R = ")", e.SPREAD = "...", e.COLON = ":", e.EQUALS = "=", e.AT = "@", e.BRACKET_L = "[", e.BRACKET_R = "]", e.BRACE_L = "{", e.PIPE = "|", e.BRACE_R = "}", e.NAME = "Name", e.INT = "Int", e.FLOAT = "Float", e.STRING = "String", e.BLOCK_STRING = "BlockString", e.COMMENT = "Comment"
})(a || (a = {}));
class ct {
    constructor(t) {
        const n = new De(a.SOF, 0, 0, 0, 0);
        this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0
    }
    get[Symbol.toStringTag]() {
        return "Lexer"
    }
    advance() {
        return this.lastToken = this.token, this.token = this.lookahead()
    }
    lookahead() {
        let t = this.token;
        if (t.kind !== a.EOF)
            do
                if (t.next) t = t.next;
                else {
                    const n = lt(this, t.end);
                    t.next = n, n.prev = t, t = n
                }
        while (t.kind === a.COMMENT);
        return t
    }
}

function ut(e) {
    return e === a.BANG || e === a.DOLLAR || e === a.AMP || e === a.PAREN_L || e === a.PAREN_R || e === a.SPREAD || e === a.COLON || e === a.EQUALS || e === a.AT || e === a.BRACKET_L || e === a.BRACKET_R || e === a.BRACE_L || e === a.PIPE || e === a.BRACE_R
}

function M(e) {
    return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
}

function te(e, t) {
    return ke(e.charCodeAt(t)) && Re(e.charCodeAt(t + 1))
}

function ke(e) {
    return e >= 55296 && e <= 56319
}

function Re(e) {
    return e >= 56320 && e <= 57343
}

function F(e, t) {
    const n = e.source.body.codePointAt(t);
    if (n === void 0) return a.EOF;
    if (n >= 32 && n <= 126) {
        const r = String.fromCodePoint(n);
        return r === '"' ? `'"'` : `"${r}"`
    }
    return "U+" + n.toString(16).toUpperCase().padStart(4, "0")
}

function I(e, t, n, r, i) {
    const s = e.line,
        c = 1 + n - e.lineStart;
    return new De(t, n, r, s, c, i)
}

function lt(e, t) {
    const n = e.source.body,
        r = n.length;
    let i = t;
    for (; i < r;) {
        const s = n.charCodeAt(i);
        switch (s) {
            case 65279:
            case 9:
            case 32:
            case 44:
                ++i;
                continue;
            case 10:
                ++i, ++e.line, e.lineStart = i;
                continue;
            case 13:
                n.charCodeAt(i + 1) === 10 ? i += 2 : ++i, ++e.line, e.lineStart = i;
                continue;
            case 35:
                return ht(e, i);
            case 33:
                return I(e, a.BANG, i, i + 1);
            case 36:
                return I(e, a.DOLLAR, i, i + 1);
            case 38:
                return I(e, a.AMP, i, i + 1);
            case 40:
                return I(e, a.PAREN_L, i, i + 1);
            case 41:
                return I(e, a.PAREN_R, i, i + 1);
            case 46:
                if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46) return I(e, a.SPREAD, i, i + 3);
                break;
            case 58:
                return I(e, a.COLON, i, i + 1);
            case 61:
                return I(e, a.EQUALS, i, i + 1);
            case 64:
                return I(e, a.AT, i, i + 1);
            case 91:
                return I(e, a.BRACKET_L, i, i + 1);
            case 93:
                return I(e, a.BRACKET_R, i, i + 1);
            case 123:
                return I(e, a.BRACE_L, i, i + 1);
            case 124:
                return I(e, a.PIPE, i, i + 1);
            case 125:
                return I(e, a.BRACE_R, i, i + 1);
            case 34:
                return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34 ? mt(e, i) : ft(e, i)
        }
        if ($(s) || s === 45) return pt(e, i, s);
        if (we(s)) return Tt(e, i);
        throw O(e.source, i, s === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : M(s) || te(n, i) ? `Unexpected character: ${F(e,i)}.` : `Invalid character: ${F(e,i)}.`)
    }
    return I(e, a.EOF, r, r)
}

function ht(e, t) {
    const n = e.source.body,
        r = n.length;
    let i = t + 1;
    for (; i < r;) {
        const s = n.charCodeAt(i);
        if (s === 10 || s === 13) break;
        if (M(s)) ++i;
        else if (te(n, i)) i += 2;
        else break
    }
    return I(e, a.COMMENT, t, i, n.slice(t + 1, i))
}

function pt(e, t, n) {
    const r = e.source.body;
    let i = t,
        s = n,
        c = !1;
    if (s === 45 && (s = r.charCodeAt(++i)), s === 48) {
        if (s = r.charCodeAt(++i), $(s)) throw O(e.source, i, `Invalid number, unexpected digit after 0: ${F(e,i)}.`)
    } else i = se(e, i, s), s = r.charCodeAt(i);
    if (s === 46 && (c = !0, s = r.charCodeAt(++i), i = se(e, i, s), s = r.charCodeAt(i)), (s === 69 || s === 101) && (c = !0, s = r.charCodeAt(++i), (s === 43 || s === 45) && (s = r.charCodeAt(++i)), i = se(e, i, s), s = r.charCodeAt(i)), s === 46 || we(s)) throw O(e.source, i, `Invalid number, expected digit but got: ${F(e,i)}.`);
    return I(e, c ? a.FLOAT : a.INT, t, i, r.slice(t, i))
}

function se(e, t, n) {
    if (!$(n)) throw O(e.source, t, `Invalid number, expected digit but got: ${F(e,t)}.`);
    const r = e.source.body;
    let i = t + 1;
    for (; $(r.charCodeAt(i));) ++i;
    return i
}

function ft(e, t) {
    const n = e.source.body,
        r = n.length;
    let i = t + 1,
        s = i,
        c = "";
    for (; i < r;) {
        const u = n.charCodeAt(i);
        if (u === 34) return c += n.slice(s, i), I(e, a.STRING, t, i + 1, c);
        if (u === 92) {
            c += n.slice(s, i);
            const h = n.charCodeAt(i + 1) === 117 ? n.charCodeAt(i + 2) === 123 ? dt(e, i) : yt(e, i) : Et(e, i);
            c += h.value, i += h.size, s = i;
            continue
        }
        if (u === 10 || u === 13) break;
        if (M(u)) ++i;
        else if (te(n, i)) i += 2;
        else throw O(e.source, i, `Invalid character within String: ${F(e,i)}.`)
    }
    throw O(e.source, i, "Unterminated string.")
}

function dt(e, t) {
    const n = e.source.body;
    let r = 0,
        i = 3;
    for (; i < 12;) {
        const s = n.charCodeAt(t + i++);
        if (s === 125) {
            if (i < 5 || !M(r)) break;
            return {
                value: String.fromCodePoint(r),
                size: i
            }
        }
        if (r = r << 4 | V(s), r < 0) break
    }
    throw O(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+i)}".`)
}

function yt(e, t) {
    const n = e.source.body,
        r = xe(n, t + 2);
    if (M(r)) return {
        value: String.fromCodePoint(r),
        size: 6
    };
    if (ke(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
        const i = xe(n, t + 8);
        if (Re(i)) return {
            value: String.fromCodePoint(r, i),
            size: 12
        }
    }
    throw O(e.source, t, `Invalid Unicode escape sequence: "${n.slice(t,t+6)}".`)
}

function xe(e, t) {
    return V(e.charCodeAt(t)) << 12 | V(e.charCodeAt(t + 1)) << 8 | V(e.charCodeAt(t + 2)) << 4 | V(e.charCodeAt(t + 3))
}

function V(e) {
    return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
}

function Et(e, t) {
    const n = e.source.body;
    switch (n.charCodeAt(t + 1)) {
        case 34:
            return {
                value: '"',
                size: 2
            };
        case 92:
            return {
                value: "\\",
                size: 2
            };
        case 47:
            return {
                value: "/",
                size: 2
            };
        case 98:
            return {
                value: "\b",
                size: 2
            };
        case 102:
            return {
                value: "\f",
                size: 2
            };
        case 110:
            return {
                value: `
`,
                size: 2
            };
        case 114:
            return {
                value: "\r",
                size: 2
            };
        case 116:
            return {
                value: "	",
                size: 2
            }
    }
    throw O(e.source, t, `Invalid character escape sequence: "${n.slice(t,t+2)}".`)
}

function mt(e, t) {
    const n = e.source.body,
        r = n.length;
    let i = e.lineStart,
        s = t + 3,
        c = s,
        u = "";
    const h = [];
    for (; s < r;) {
        const f = n.charCodeAt(s);
        if (f === 34 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34) {
            u += n.slice(c, s), h.push(u);
            const y = I(e, a.BLOCK_STRING, t, s + 3, st(h).join(`
`));
            return e.line += h.length - 1, e.lineStart = i, y
        }
        if (f === 92 && n.charCodeAt(s + 1) === 34 && n.charCodeAt(s + 2) === 34 && n.charCodeAt(s + 3) === 34) {
            u += n.slice(c, s), c = s + 1, s += 4;
            continue
        }
        if (f === 10 || f === 13) {
            u += n.slice(c, s), h.push(u), f === 13 && n.charCodeAt(s + 1) === 10 ? s += 2 : ++s, u = "", c = s, i = s;
            continue
        }
        if (M(f)) ++s;
        else if (te(n, s)) s += 2;
        else throw O(e.source, s, `Invalid character within String: ${F(e,s)}.`)
    }
    throw O(e.source, s, "Unterminated string.")
}

function Tt(e, t) {
    const n = e.source.body,
        r = n.length;
    let i = t + 1;
    for (; i < r;) {
        const s = n.charCodeAt(i);
        if (rt(s)) ++i;
        else break
    }
    return I(e, a.NAME, t, i, n.slice(t, i))
}
const Nt = 10,
    Le = 2;

function ye(e) {
    return ne(e, [])
}

function ne(e, t) {
    switch (typeof e) {
        case "string":
            return JSON.stringify(e);
        case "function":
            return e.name ? `[function ${e.name}]` : "[function]";
        case "object":
            return vt(e, t);
        default:
            return String(e)
    }
}

function vt(e, t) {
    if (e === null) return "null";
    if (t.includes(e)) return "[Circular]";
    const n = [...t, e];
    if (xt(e)) {
        const r = e.toJSON();
        if (r !== e) return typeof r == "string" ? r : ne(r, n)
    } else if (Array.isArray(e)) return At(e, n);
    return gt(e, n)
}

function xt(e) {
    return typeof e.toJSON == "function"
}

function gt(e, t) {
    const n = Object.entries(e);
    return n.length === 0 ? "{}" : t.length > Le ? "[" + It(e) + "]" : "{ " + n.map(([i, s]) => i + ": " + ne(s, t)).join(", ") + " }"
}

function At(e, t) {
    if (e.length === 0) return "[]";
    if (t.length > Le) return "[Array]";
    const n = Math.min(Nt, e.length),
        r = e.length - n,
        i = [];
    for (let s = 0; s < n; ++s) i.push(ne(e[s], t));
    return r === 1 ? i.push("... 1 more item") : r > 1 && i.push(`... ${r} more items`), "[" + i.join(", ") + "]"
}

function It(e) {
    const t = Object.prototype.toString.call(e).replace(/^\[object /, "").replace(/]$/, "");
    if (t === "Object" && typeof e.constructor == "function") {
        const n = e.constructor.name;
        if (typeof n == "string" && n !== "") return n
    }
    return t
}
const Ot = globalThis.process ? function(t, n) {
    return t instanceof n
} : function(t, n) {
    if (t instanceof n) return !0;
    if (typeof t == "object" && t !== null) {
        var r;
        const i = n.prototype[Symbol.toStringTag],
            s = Symbol.toStringTag in t ? t[Symbol.toStringTag] : (r = t.constructor) === null || r === void 0 ? void 0 : r.name;
        if (i === s) {
            const c = ye(t);
            throw new Error(`Cannot use ${i} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)
        }
    }
    return !1
};
class Fe {
    constructor(t, n = "GraphQL request", r = {
        line: 1,
        column: 1
    }) {
        typeof t == "string" || Q(!1, `Body must be a string. Received: ${ye(t)}.`), this.body = t, this.name = n, this.locationOffset = r, this.locationOffset.line > 0 || Q(!1, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Q(!1, "column in locationOffset is 1-indexed and must be positive.")
    }
    get[Symbol.toStringTag]() {
        return "Source"
    }
}

function _t(e) {
    return Ot(e, Fe)
}

function bt(e, t) {
    return new Dt(e, t).parseDocument()
}
class Dt {
    constructor(t, n = {}) {
        const r = _t(t) ? t : new Fe(t);
        this._lexer = new ct(r), this._options = n, this._tokenCounter = 0
    }
    parseName() {
        const t = this.expectToken(a.NAME);
        return this.node(t, {
            kind: d.NAME,
            value: t.value
        })
    }
    parseDocument() {
        return this.node(this._lexer.token, {
            kind: d.DOCUMENT,
            definitions: this.many(a.SOF, this.parseDefinition, a.EOF)
        })
    }
    parseDefinition() {
        if (this.peek(a.BRACE_L)) return this.parseOperationDefinition();
        const t = this.peekDescription(),
            n = t ? this._lexer.lookahead() : this._lexer.token;
        if (n.kind === a.NAME) {
            switch (n.value) {
                case "schema":
                    return this.parseSchemaDefinition();
                case "scalar":
                    return this.parseScalarTypeDefinition();
                case "type":
                    return this.parseObjectTypeDefinition();
                case "interface":
                    return this.parseInterfaceTypeDefinition();
                case "union":
                    return this.parseUnionTypeDefinition();
                case "enum":
                    return this.parseEnumTypeDefinition();
                case "input":
                    return this.parseInputObjectTypeDefinition();
                case "directive":
                    return this.parseDirectiveDefinition()
            }
            if (t) throw O(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch (n.value) {
                case "query":
                case "mutation":
                case "subscription":
                    return this.parseOperationDefinition();
                case "fragment":
                    return this.parseFragmentDefinition();
                case "extend":
                    return this.parseTypeSystemExtension()
            }
        }
        throw this.unexpected(n)
    }
    parseOperationDefinition() {
        const t = this._lexer.token;
        if (this.peek(a.BRACE_L)) return this.node(t, {
            kind: d.OPERATION_DEFINITION,
            operation: U.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
        });
        const n = this.parseOperationType();
        let r;
        return this.peek(a.NAME) && (r = this.parseName()), this.node(t, {
            kind: d.OPERATION_DEFINITION,
            operation: n,
            name: r,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        })
    }
    parseOperationType() {
        const t = this.expectToken(a.NAME);
        switch (t.value) {
            case "query":
                return U.QUERY;
            case "mutation":
                return U.MUTATION;
            case "subscription":
                return U.SUBSCRIPTION
        }
        throw this.unexpected(t)
    }
    parseVariableDefinitions() {
        return this.optionalMany(a.PAREN_L, this.parseVariableDefinition, a.PAREN_R)
    }
    parseVariableDefinition() {
        return this.node(this._lexer.token, {
            kind: d.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(a.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(a.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
        })
    }
    parseVariable() {
        const t = this._lexer.token;
        return this.expectToken(a.DOLLAR), this.node(t, {
            kind: d.VARIABLE,
            name: this.parseName()
        })
    }
    parseSelectionSet() {
        return this.node(this._lexer.token, {
            kind: d.SELECTION_SET,
            selections: this.many(a.BRACE_L, this.parseSelection, a.BRACE_R)
        })
    }
    parseSelection() {
        return this.peek(a.SPREAD) ? this.parseFragment() : this.parseField()
    }
    parseField() {
        const t = this._lexer.token,
            n = this.parseName();
        let r, i;
        return this.expectOptionalToken(a.COLON) ? (r = n, i = this.parseName()) : i = n, this.node(t, {
            kind: d.FIELD,
            alias: r,
            name: i,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(a.BRACE_L) ? this.parseSelectionSet() : void 0
        })
    }
    parseArguments(t) {
        const n = t ? this.parseConstArgument : this.parseArgument;
        return this.optionalMany(a.PAREN_L, n, a.PAREN_R)
    }
    parseArgument(t = !1) {
        const n = this._lexer.token,
            r = this.parseName();
        return this.expectToken(a.COLON), this.node(n, {
            kind: d.ARGUMENT,
            name: r,
            value: this.parseValueLiteral(t)
        })
    }
    parseConstArgument() {
        return this.parseArgument(!0)
    }
    parseFragment() {
        const t = this._lexer.token;
        this.expectToken(a.SPREAD);
        const n = this.expectOptionalKeyword("on");
        return !n && this.peek(a.NAME) ? this.node(t, {
            kind: d.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
        }) : this.node(t, {
            kind: d.INLINE_FRAGMENT,
            typeCondition: n ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        })
    }
    parseFragmentDefinition() {
        const t = this._lexer.token;
        return this.expectKeyword("fragment"), this._options.allowLegacyFragmentVariables === !0 ? this.node(t, {
            kind: d.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        }) : this.node(t, {
            kind: d.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
        })
    }
    parseFragmentName() {
        if (this._lexer.token.value === "on") throw this.unexpected();
        return this.parseName()
    }
    parseValueLiteral(t) {
        const n = this._lexer.token;
        switch (n.kind) {
            case a.BRACKET_L:
                return this.parseList(t);
            case a.BRACE_L:
                return this.parseObject(t);
            case a.INT:
                return this.advanceLexer(), this.node(n, {
                    kind: d.INT,
                    value: n.value
                });
            case a.FLOAT:
                return this.advanceLexer(), this.node(n, {
                    kind: d.FLOAT,
                    value: n.value
                });
            case a.STRING:
            case a.BLOCK_STRING:
                return this.parseStringLiteral();
            case a.NAME:
                switch (this.advanceLexer(), n.value) {
                    case "true":
                        return this.node(n, {
                            kind: d.BOOLEAN,
                            value: !0
                        });
                    case "false":
                        return this.node(n, {
                            kind: d.BOOLEAN,
                            value: !1
                        });
                    case "null":
                        return this.node(n, {
                            kind: d.NULL
                        });
                    default:
                        return this.node(n, {
                            kind: d.ENUM,
                            value: n.value
                        })
                }
            case a.DOLLAR:
                if (t)
                    if (this.expectToken(a.DOLLAR), this._lexer.token.kind === a.NAME) {
                        const r = this._lexer.token.value;
                        throw O(this._lexer.source, n.start, `Unexpected variable "$${r}" in constant value.`)
                    } else throw this.unexpected(n);
                return this.parseVariable();
            default:
                throw this.unexpected()
        }
    }
    parseConstValueLiteral() {
        return this.parseValueLiteral(!0)
    }
    parseStringLiteral() {
        const t = this._lexer.token;
        return this.advanceLexer(), this.node(t, {
            kind: d.STRING,
            value: t.value,
            block: t.kind === a.BLOCK_STRING
        })
    }
    parseList(t) {
        const n = () => this.parseValueLiteral(t);
        return this.node(this._lexer.token, {
            kind: d.LIST,
            values: this.any(a.BRACKET_L, n, a.BRACKET_R)
        })
    }
    parseObject(t) {
        const n = () => this.parseObjectField(t);
        return this.node(this._lexer.token, {
            kind: d.OBJECT,
            fields: this.any(a.BRACE_L, n, a.BRACE_R)
        })
    }
    parseObjectField(t) {
        const n = this._lexer.token,
            r = this.parseName();
        return this.expectToken(a.COLON), this.node(n, {
            kind: d.OBJECT_FIELD,
            name: r,
            value: this.parseValueLiteral(t)
        })
    }
    parseDirectives(t) {
        const n = [];
        for (; this.peek(a.AT);) n.push(this.parseDirective(t));
        return n
    }
    parseConstDirectives() {
        return this.parseDirectives(!0)
    }
    parseDirective(t) {
        const n = this._lexer.token;
        return this.expectToken(a.AT), this.node(n, {
            kind: d.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(t)
        })
    }
    parseTypeReference() {
        const t = this._lexer.token;
        let n;
        if (this.expectOptionalToken(a.BRACKET_L)) {
            const r = this.parseTypeReference();
            this.expectToken(a.BRACKET_R), n = this.node(t, {
                kind: d.LIST_TYPE,
                type: r
            })
        } else n = this.parseNamedType();
        return this.expectOptionalToken(a.BANG) ? this.node(t, {
            kind: d.NON_NULL_TYPE,
            type: n
        }) : n
    }
    parseNamedType() {
        return this.node(this._lexer.token, {
            kind: d.NAMED_TYPE,
            name: this.parseName()
        })
    }
    peekDescription() {
        return this.peek(a.STRING) || this.peek(a.BLOCK_STRING)
    }
    parseDescription() {
        if (this.peekDescription()) return this.parseStringLiteral()
    }
    parseSchemaDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("schema");
        const r = this.parseConstDirectives(),
            i = this.many(a.BRACE_L, this.parseOperationTypeDefinition, a.BRACE_R);
        return this.node(t, {
            kind: d.SCHEMA_DEFINITION,
            description: n,
            directives: r,
            operationTypes: i
        })
    }
    parseOperationTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseOperationType();
        this.expectToken(a.COLON);
        const r = this.parseNamedType();
        return this.node(t, {
            kind: d.OPERATION_TYPE_DEFINITION,
            operation: n,
            type: r
        })
    }
    parseScalarTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("scalar");
        const r = this.parseName(),
            i = this.parseConstDirectives();
        return this.node(t, {
            kind: d.SCALAR_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i
        })
    }
    parseObjectTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("type");
        const r = this.parseName(),
            i = this.parseImplementsInterfaces(),
            s = this.parseConstDirectives(),
            c = this.parseFieldsDefinition();
        return this.node(t, {
            kind: d.OBJECT_TYPE_DEFINITION,
            description: n,
            name: r,
            interfaces: i,
            directives: s,
            fields: c
        })
    }
    parseImplementsInterfaces() {
        return this.expectOptionalKeyword("implements") ? this.delimitedMany(a.AMP, this.parseNamedType) : []
    }
    parseFieldsDefinition() {
        return this.optionalMany(a.BRACE_L, this.parseFieldDefinition, a.BRACE_R)
    }
    parseFieldDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription(),
            r = this.parseName(),
            i = this.parseArgumentDefs();
        this.expectToken(a.COLON);
        const s = this.parseTypeReference(),
            c = this.parseConstDirectives();
        return this.node(t, {
            kind: d.FIELD_DEFINITION,
            description: n,
            name: r,
            arguments: i,
            type: s,
            directives: c
        })
    }
    parseArgumentDefs() {
        return this.optionalMany(a.PAREN_L, this.parseInputValueDef, a.PAREN_R)
    }
    parseInputValueDef() {
        const t = this._lexer.token,
            n = this.parseDescription(),
            r = this.parseName();
        this.expectToken(a.COLON);
        const i = this.parseTypeReference();
        let s;
        this.expectOptionalToken(a.EQUALS) && (s = this.parseConstValueLiteral());
        const c = this.parseConstDirectives();
        return this.node(t, {
            kind: d.INPUT_VALUE_DEFINITION,
            description: n,
            name: r,
            type: i,
            defaultValue: s,
            directives: c
        })
    }
    parseInterfaceTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("interface");
        const r = this.parseName(),
            i = this.parseImplementsInterfaces(),
            s = this.parseConstDirectives(),
            c = this.parseFieldsDefinition();
        return this.node(t, {
            kind: d.INTERFACE_TYPE_DEFINITION,
            description: n,
            name: r,
            interfaces: i,
            directives: s,
            fields: c
        })
    }
    parseUnionTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("union");
        const r = this.parseName(),
            i = this.parseConstDirectives(),
            s = this.parseUnionMemberTypes();
        return this.node(t, {
            kind: d.UNION_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i,
            types: s
        })
    }
    parseUnionMemberTypes() {
        return this.expectOptionalToken(a.EQUALS) ? this.delimitedMany(a.PIPE, this.parseNamedType) : []
    }
    parseEnumTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("enum");
        const r = this.parseName(),
            i = this.parseConstDirectives(),
            s = this.parseEnumValuesDefinition();
        return this.node(t, {
            kind: d.ENUM_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i,
            values: s
        })
    }
    parseEnumValuesDefinition() {
        return this.optionalMany(a.BRACE_L, this.parseEnumValueDefinition, a.BRACE_R)
    }
    parseEnumValueDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription(),
            r = this.parseEnumValueName(),
            i = this.parseConstDirectives();
        return this.node(t, {
            kind: d.ENUM_VALUE_DEFINITION,
            description: n,
            name: r,
            directives: i
        })
    }
    parseEnumValueName() {
        if (this._lexer.token.value === "true" || this._lexer.token.value === "false" || this._lexer.token.value === "null") throw O(this._lexer.source, this._lexer.token.start, `${J(this._lexer.token)} is reserved and cannot be used for an enum value.`);
        return this.parseName()
    }
    parseInputObjectTypeDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("input");
        const r = this.parseName(),
            i = this.parseConstDirectives(),
            s = this.parseInputFieldsDefinition();
        return this.node(t, {
            kind: d.INPUT_OBJECT_TYPE_DEFINITION,
            description: n,
            name: r,
            directives: i,
            fields: s
        })
    }
    parseInputFieldsDefinition() {
        return this.optionalMany(a.BRACE_L, this.parseInputValueDef, a.BRACE_R)
    }
    parseTypeSystemExtension() {
        const t = this._lexer.lookahead();
        if (t.kind === a.NAME) switch (t.value) {
            case "schema":
                return this.parseSchemaExtension();
            case "scalar":
                return this.parseScalarTypeExtension();
            case "type":
                return this.parseObjectTypeExtension();
            case "interface":
                return this.parseInterfaceTypeExtension();
            case "union":
                return this.parseUnionTypeExtension();
            case "enum":
                return this.parseEnumTypeExtension();
            case "input":
                return this.parseInputObjectTypeExtension()
        }
        throw this.unexpected(t)
    }
    parseSchemaExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("schema");
        const n = this.parseConstDirectives(),
            r = this.optionalMany(a.BRACE_L, this.parseOperationTypeDefinition, a.BRACE_R);
        if (n.length === 0 && r.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.SCHEMA_EXTENSION,
            directives: n,
            operationTypes: r
        })
    }
    parseScalarTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("scalar");
        const n = this.parseName(),
            r = this.parseConstDirectives();
        if (r.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.SCALAR_TYPE_EXTENSION,
            name: n,
            directives: r
        })
    }
    parseObjectTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("type");
        const n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.OBJECT_TYPE_EXTENSION,
            name: n,
            interfaces: r,
            directives: i,
            fields: s
        })
    }
    parseInterfaceTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("interface");
        const n = this.parseName(),
            r = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            s = this.parseFieldsDefinition();
        if (r.length === 0 && i.length === 0 && s.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.INTERFACE_TYPE_EXTENSION,
            name: n,
            interfaces: r,
            directives: i,
            fields: s
        })
    }
    parseUnionTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("union");
        const n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseUnionMemberTypes();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.UNION_TYPE_EXTENSION,
            name: n,
            directives: r,
            types: i
        })
    }
    parseEnumTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("enum");
        const n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseEnumValuesDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.ENUM_TYPE_EXTENSION,
            name: n,
            directives: r,
            values: i
        })
    }
    parseInputObjectTypeExtension() {
        const t = this._lexer.token;
        this.expectKeyword("extend"), this.expectKeyword("input");
        const n = this.parseName(),
            r = this.parseConstDirectives(),
            i = this.parseInputFieldsDefinition();
        if (r.length === 0 && i.length === 0) throw this.unexpected();
        return this.node(t, {
            kind: d.INPUT_OBJECT_TYPE_EXTENSION,
            name: n,
            directives: r,
            fields: i
        })
    }
    parseDirectiveDefinition() {
        const t = this._lexer.token,
            n = this.parseDescription();
        this.expectKeyword("directive"), this.expectToken(a.AT);
        const r = this.parseName(),
            i = this.parseArgumentDefs(),
            s = this.expectOptionalKeyword("repeatable");
        this.expectKeyword("on");
        const c = this.parseDirectiveLocations();
        return this.node(t, {
            kind: d.DIRECTIVE_DEFINITION,
            description: n,
            name: r,
            arguments: i,
            repeatable: s,
            locations: c
        })
    }
    parseDirectiveLocations() {
        return this.delimitedMany(a.PIPE, this.parseDirectiveLocation)
    }
    parseDirectiveLocation() {
        const t = this._lexer.token,
            n = this.parseName();
        if (Object.prototype.hasOwnProperty.call(le, n.value)) return n;
        throw this.unexpected(t)
    }
    node(t, n) {
        return this._options.noLocation !== !0 && (n.loc = new nt(t, this._lexer.lastToken, this._lexer.source)), n
    }
    peek(t) {
        return this._lexer.token.kind === t
    }
    expectToken(t) {
        const n = this._lexer.token;
        if (n.kind === t) return this.advanceLexer(), n;
        throw O(this._lexer.source, n.start, `Expected ${Pe(t)}, found ${J(n)}.`)
    }
    expectOptionalToken(t) {
        return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1
    }
    expectKeyword(t) {
        const n = this._lexer.token;
        if (n.kind === a.NAME && n.value === t) this.advanceLexer();
        else throw O(this._lexer.source, n.start, `Expected "${t}", found ${J(n)}.`)
    }
    expectOptionalKeyword(t) {
        const n = this._lexer.token;
        return n.kind === a.NAME && n.value === t ? (this.advanceLexer(), !0) : !1
    }
    unexpected(t) {
        const n = t ? ? this._lexer.token;
        return O(this._lexer.source, n.start, `Unexpected ${J(n)}.`)
    }
    any(t, n, r) {
        this.expectToken(t);
        const i = [];
        for (; !this.expectOptionalToken(r);) i.push(n.call(this));
        return i
    }
    optionalMany(t, n, r) {
        if (this.expectOptionalToken(t)) {
            const i = [];
            do i.push(n.call(this)); while (!this.expectOptionalToken(r));
            return i
        }
        return []
    }
    many(t, n, r) {
        this.expectToken(t);
        const i = [];
        do i.push(n.call(this)); while (!this.expectOptionalToken(r));
        return i
    }
    delimitedMany(t, n) {
        this.expectOptionalToken(t);
        const r = [];
        do r.push(n.call(this)); while (this.expectOptionalToken(t));
        return r
    }
    advanceLexer() {
        const {
            maxTokens: t
        } = this._options, n = this._lexer.advance();
        if (t !== void 0 && n.kind !== a.EOF && (++this._tokenCounter, this._tokenCounter > t)) throw O(this._lexer.source, n.start, `Document contains more that ${t} tokens. Parsing aborted.`)
    }
}

function J(e) {
    const t = e.value;
    return Pe(e.kind) + (t != null ? ` "${t}"` : "")
}

function Pe(e) {
    return ut(e) ? `"${e}"` : e
}

function St(e) {
    return `"${e.replace(Ct,wt)}"`
}
const Ct = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

function wt(e) {
    return kt[e.charCodeAt(0)]
}
const kt = ["\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005", "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B", "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011", "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017", "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D", "\\u001E", "\\u001F", "", "", '\\"', "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\\\", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "\\u007F", "\\u0080", "\\u0081", "\\u0082", "\\u0083", "\\u0084", "\\u0085", "\\u0086", "\\u0087", "\\u0088", "\\u0089", "\\u008A", "\\u008B", "\\u008C", "\\u008D", "\\u008E", "\\u008F", "\\u0090", "\\u0091", "\\u0092", "\\u0093", "\\u0094", "\\u0095", "\\u0096", "\\u0097", "\\u0098", "\\u0099", "\\u009A", "\\u009B", "\\u009C", "\\u009D", "\\u009E", "\\u009F"],
    Rt = Object.freeze({});

function Lt(e, t, n = Se) {
    const r = new Map;
    for (const S of Object.values(d)) r.set(S, Ft(t, S));
    let i, s = Array.isArray(e),
        c = [e],
        u = -1,
        h = [],
        f = e,
        y, m;
    const T = [],
        g = [];
    do {
        u++;
        const S = u === c.length,
            G = S && h.length !== 0;
        if (S) {
            if (y = g.length === 0 ? void 0 : T[T.length - 1], f = m, m = g.pop(), G)
                if (s) {
                    f = f.slice();
                    let C = 0;
                    for (const [P, H] of h) {
                        const Y = P - C;
                        H === null ? (f.splice(Y, 1), C++) : f[Y] = H
                    }
                } else {
                    f = Object.defineProperties({}, Object.getOwnPropertyDescriptors(f));
                    for (const [C, P] of h) f[C] = P
                }
            u = i.index, c = i.keys, h = i.edits, s = i.inArray, i = i.prev
        } else if (m) {
            if (y = s ? u : c[u], f = m[y], f == null) continue;
            T.push(y)
        }
        let k;
        if (!Array.isArray(f)) {
            var E, A;
            ve(f) || Q(!1, `Invalid AST Node: ${ye(f)}.`);
            const C = S ? (E = r.get(f.kind)) === null || E === void 0 ? void 0 : E.leave : (A = r.get(f.kind)) === null || A === void 0 ? void 0 : A.enter;
            if (k = C == null ? void 0 : C.call(t, f, y, m, T, g), k === Rt) break;
            if (k === !1) {
                if (!S) {
                    T.pop();
                    continue
                }
            } else if (k !== void 0 && (h.push([y, k]), !S))
                if (ve(k)) f = k;
                else {
                    T.pop();
                    continue
                }
        }
        if (k === void 0 && G && h.push([y, f]), S) T.pop();
        else {
            var D;
            i = {
                inArray: s,
                index: u,
                keys: c,
                edits: h,
                prev: i
            }, s = Array.isArray(f), c = s ? f : (D = n[f.kind]) !== null && D !== void 0 ? D : [], u = -1, h = [], m && g.push(m), m = f
        }
    } while (i !== void 0);
    return h.length !== 0 ? h[h.length - 1][1] : e
}

function Ft(e, t) {
    const n = e[t];
    return typeof n == "object" ? n : typeof n == "function" ? {
        enter: n,
        leave: void 0
    } : {
        enter: e.enter,
        leave: e.leave
    }
}

function Pt(e) {
    return Lt(e, Ut)
}
const Bt = 80,
    Ut = {
        Name: {
            leave: e => e.value
        },
        Variable: {
            leave: e => "$" + e.name
        },
        Document: {
            leave: e => p(e.definitions, `

`)
        },
        OperationDefinition: {
            leave(e) {
                const t = v("(", p(e.variableDefinitions, ", "), ")"),
                    n = p([e.operation, p([e.name, t]), p(e.directives, " ")], " ");
                return (n === "query" ? "" : n + " ") + e.selectionSet
            }
        },
        VariableDefinition: {
            leave: ({
                variable: e,
                type: t,
                defaultValue: n,
                directives: r
            }) => e + ": " + t + v(" = ", n) + v(" ", p(r, " "))
        },
        SelectionSet: {
            leave: ({
                selections: e
            }) => w(e)
        },
        Field: {
            leave({
                alias: e,
                name: t,
                arguments: n,
                directives: r,
                selectionSet: i
            }) {
                const s = v("", e, ": ") + t;
                let c = s + v("(", p(n, ", "), ")");
                return c.length > Bt && (c = s + v(`(
`, X(p(n, `
`)), `
)`)), p([c, p(r, " "), i], " ")
            }
        },
        Argument: {
            leave: ({
                name: e,
                value: t
            }) => e + ": " + t
        },
        FragmentSpread: {
            leave: ({
                name: e,
                directives: t
            }) => "..." + e + v(" ", p(t, " "))
        },
        InlineFragment: {
            leave: ({
                typeCondition: e,
                directives: t,
                selectionSet: n
            }) => p(["...", v("on ", e), p(t, " "), n], " ")
        },
        FragmentDefinition: {
            leave: ({
                name: e,
                typeCondition: t,
                variableDefinitions: n,
                directives: r,
                selectionSet: i
            }) => `fragment ${e}${v("(",p(n,", "),")")} on ${t} ${v("",p(r," ")," ")}` + i
        },
        IntValue: {
            leave: ({
                value: e
            }) => e
        },
        FloatValue: {
            leave: ({
                value: e
            }) => e
        },
        StringValue: {
            leave: ({
                value: e,
                block: t
            }) => t ? at(e) : St(e)
        },
        BooleanValue: {
            leave: ({
                value: e
            }) => e ? "true" : "false"
        },
        NullValue: {
            leave: () => "null"
        },
        EnumValue: {
            leave: ({
                value: e
            }) => e
        },
        ListValue: {
            leave: ({
                values: e
            }) => "[" + p(e, ", ") + "]"
        },
        ObjectValue: {
            leave: ({
                fields: e
            }) => "{" + p(e, ", ") + "}"
        },
        ObjectField: {
            leave: ({
                name: e,
                value: t
            }) => e + ": " + t
        },
        Directive: {
            leave: ({
                name: e,
                arguments: t
            }) => "@" + e + v("(", p(t, ", "), ")")
        },
        NamedType: {
            leave: ({
                name: e
            }) => e
        },
        ListType: {
            leave: ({
                type: e
            }) => "[" + e + "]"
        },
        NonNullType: {
            leave: ({
                type: e
            }) => e + "!"
        },
        SchemaDefinition: {
            leave: ({
                description: e,
                directives: t,
                operationTypes: n
            }) => v("", e, `
`) + p(["schema", p(t, " "), w(n)], " ")
        },
        OperationTypeDefinition: {
            leave: ({
                operation: e,
                type: t
            }) => e + ": " + t
        },
        ScalarTypeDefinition: {
            leave: ({
                description: e,
                name: t,
                directives: n
            }) => v("", e, `
`) + p(["scalar", t, p(n, " ")], " ")
        },
        ObjectTypeDefinition: {
            leave: ({
                description: e,
                name: t,
                interfaces: n,
                directives: r,
                fields: i
            }) => v("", e, `
`) + p(["type", t, v("implements ", p(n, " & ")), p(r, " "), w(i)], " ")
        },
        FieldDefinition: {
            leave: ({
                description: e,
                name: t,
                arguments: n,
                type: r,
                directives: i
            }) => v("", e, `
`) + t + (ge(n) ? v(`(
`, X(p(n, `
`)), `
)`) : v("(", p(n, ", "), ")")) + ": " + r + v(" ", p(i, " "))
        },
        InputValueDefinition: {
            leave: ({
                description: e,
                name: t,
                type: n,
                defaultValue: r,
                directives: i
            }) => v("", e, `
`) + p([t + ": " + n, v("= ", r), p(i, " ")], " ")
        },
        InterfaceTypeDefinition: {
            leave: ({
                description: e,
                name: t,
                interfaces: n,
                directives: r,
                fields: i
            }) => v("", e, `
`) + p(["interface", t, v("implements ", p(n, " & ")), p(r, " "), w(i)], " ")
        },
        UnionTypeDefinition: {
            leave: ({
                description: e,
                name: t,
                directives: n,
                types: r
            }) => v("", e, `
`) + p(["union", t, p(n, " "), v("= ", p(r, " | "))], " ")
        },
        EnumTypeDefinition: {
            leave: ({
                description: e,
                name: t,
                directives: n,
                values: r
            }) => v("", e, `
`) + p(["enum", t, p(n, " "), w(r)], " ")
        },
        EnumValueDefinition: {
            leave: ({
                description: e,
                name: t,
                directives: n
            }) => v("", e, `
`) + p([t, p(n, " ")], " ")
        },
        InputObjectTypeDefinition: {
            leave: ({
                description: e,
                name: t,
                directives: n,
                fields: r
            }) => v("", e, `
`) + p(["input", t, p(n, " "), w(r)], " ")
        },
        DirectiveDefinition: {
            leave: ({
                description: e,
                name: t,
                arguments: n,
                repeatable: r,
                locations: i
            }) => v("", e, `
`) + "directive @" + t + (ge(n) ? v(`(
`, X(p(n, `
`)), `
)`) : v("(", p(n, ", "), ")")) + (r ? " repeatable" : "") + " on " + p(i, " | ")
        },
        SchemaExtension: {
            leave: ({
                directives: e,
                operationTypes: t
            }) => p(["extend schema", p(e, " "), w(t)], " ")
        },
        ScalarTypeExtension: {
            leave: ({
                name: e,
                directives: t
            }) => p(["extend scalar", e, p(t, " ")], " ")
        },
        ObjectTypeExtension: {
            leave: ({
                name: e,
                interfaces: t,
                directives: n,
                fields: r
            }) => p(["extend type", e, v("implements ", p(t, " & ")), p(n, " "), w(r)], " ")
        },
        InterfaceTypeExtension: {
            leave: ({
                name: e,
                interfaces: t,
                directives: n,
                fields: r
            }) => p(["extend interface", e, v("implements ", p(t, " & ")), p(n, " "), w(r)], " ")
        },
        UnionTypeExtension: {
            leave: ({
                name: e,
                directives: t,
                types: n
            }) => p(["extend union", e, p(t, " "), v("= ", p(n, " | "))], " ")
        },
        EnumTypeExtension: {
            leave: ({
                name: e,
                directives: t,
                values: n
            }) => p(["extend enum", e, p(t, " "), w(n)], " ")
        },
        InputObjectTypeExtension: {
            leave: ({
                name: e,
                directives: t,
                fields: n
            }) => p(["extend input", e, p(t, " "), w(n)], " ")
        }
    };

function p(e, t = "") {
    var n;
    return (n = e == null ? void 0 : e.filter(r => r).join(t)) !== null && n !== void 0 ? n : ""
}

function w(e) {
    return v(`{
`, X(p(e, `
`)), `
}`)
}

function v(e, t, n = "") {
    return t != null && t !== "" ? e + t + n : ""
}

function X(e) {
    return v("  ", e.replace(/\n/g, `
  `))
}

function ge(e) {
    var t;
    return (t = e == null ? void 0 : e.some(n => n.includes(`
`))) !== null && t !== void 0 ? t : !1
}
const Ae = e => {
        var r, i;
        let t;
        const n = e.definitions.filter(s => s.kind === "OperationDefinition");
        return n.length === 1 && (t = (i = (r = n[0]) == null ? void 0 : r.name) == null ? void 0 : i.value), t
    },
    oe = e => {
        if (typeof e == "string") {
            let n;
            try {
                const r = bt(e);
                n = Ae(r)
            } catch {}
            return {
                query: e,
                operationName: n
            }
        }
        const t = Ae(e);
        return {
            query: Pt(e),
            operationName: t
        }
    };
class q extends Error {
    constructor(t, n) {
        const r = `${q.extractMessage(t)}: ${JSON.stringify({response:t,request:n})}`;
        super(r), Object.setPrototypeOf(this, q.prototype), this.response = t, this.request = n, typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, q)
    }
    static extractMessage(t) {
        var n, r;
        return ((r = (n = t.errors) == null ? void 0 : n[0]) == null ? void 0 : r.message) ? ? `GraphQL Error (Code: ${t.status})`
    }
}
var pe = {
    exports: {}
};
(function(e, t) {
    var n = typeof self < "u" ? self : je,
        r = function() {
            function s() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return s.prototype = n, new s
        }();
    (function(s) {
        (function(c) {
            var u = {
                searchParams: "URLSearchParams" in s,
                iterable: "Symbol" in s && "iterator" in Symbol,
                blob: "FileReader" in s && "Blob" in s && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in s,
                arrayBuffer: "ArrayBuffer" in s
            };

            function h(o) {
                return o && DataView.prototype.isPrototypeOf(o)
            }
            if (u.arrayBuffer) var f = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                y = ArrayBuffer.isView || function(o) {
                    return o && f.indexOf(Object.prototype.toString.call(o)) > -1
                };

            function m(o) {
                if (typeof o != "string" && (o = String(o)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(o)) throw new TypeError("Invalid character in header field name");
                return o.toLowerCase()
            }

            function T(o) {
                return typeof o != "string" && (o = String(o)), o
            }

            function g(o) {
                var l = {
                    next: function() {
                        var N = o.shift();
                        return {
                            done: N === void 0,
                            value: N
                        }
                    }
                };
                return u.iterable && (l[Symbol.iterator] = function() {
                    return l
                }), l
            }

            function E(o) {
                this.map = {}, o instanceof E ? o.forEach(function(l, N) {
                    this.append(N, l)
                }, this) : Array.isArray(o) ? o.forEach(function(l) {
                    this.append(l[0], l[1])
                }, this) : o && Object.getOwnPropertyNames(o).forEach(function(l) {
                    this.append(l, o[l])
                }, this)
            }
            E.prototype.append = function(o, l) {
                o = m(o), l = T(l);
                var N = this.map[o];
                this.map[o] = N ? N + ", " + l : l
            }, E.prototype.delete = function(o) {
                delete this.map[m(o)]
            }, E.prototype.get = function(o) {
                return o = m(o), this.has(o) ? this.map[o] : null
            }, E.prototype.has = function(o) {
                return this.map.hasOwnProperty(m(o))
            }, E.prototype.set = function(o, l) {
                this.map[m(o)] = T(l)
            }, E.prototype.forEach = function(o, l) {
                for (var N in this.map) this.map.hasOwnProperty(N) && o.call(l, this.map[N], N, this)
            }, E.prototype.keys = function() {
                var o = [];
                return this.forEach(function(l, N) {
                    o.push(N)
                }), g(o)
            }, E.prototype.values = function() {
                var o = [];
                return this.forEach(function(l) {
                    o.push(l)
                }), g(o)
            }, E.prototype.entries = function() {
                var o = [];
                return this.forEach(function(l, N) {
                    o.push([N, l])
                }), g(o)
            }, u.iterable && (E.prototype[Symbol.iterator] = E.prototype.entries);

            function A(o) {
                if (o.bodyUsed) return Promise.reject(new TypeError("Already read"));
                o.bodyUsed = !0
            }

            function D(o) {
                return new Promise(function(l, N) {
                    o.onload = function() {
                        l(o.result)
                    }, o.onerror = function() {
                        N(o.error)
                    }
                })
            }

            function S(o) {
                var l = new FileReader,
                    N = D(l);
                return l.readAsArrayBuffer(o), N
            }

            function G(o) {
                var l = new FileReader,
                    N = D(l);
                return l.readAsText(o), N
            }

            function k(o) {
                for (var l = new Uint8Array(o), N = new Array(l.length), b = 0; b < l.length; b++) N[b] = String.fromCharCode(l[b]);
                return N.join("")
            }

            function C(o) {
                if (o.slice) return o.slice(0);
                var l = new Uint8Array(o.byteLength);
                return l.set(new Uint8Array(o)), l.buffer
            }

            function P() {
                return this.bodyUsed = !1, this._initBody = function(o) {
                    this._bodyInit = o, o ? typeof o == "string" ? this._bodyText = o : u.blob && Blob.prototype.isPrototypeOf(o) ? this._bodyBlob = o : u.formData && FormData.prototype.isPrototypeOf(o) ? this._bodyFormData = o : u.searchParams && URLSearchParams.prototype.isPrototypeOf(o) ? this._bodyText = o.toString() : u.arrayBuffer && u.blob && h(o) ? (this._bodyArrayBuffer = C(o.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(o) || y(o)) ? this._bodyArrayBuffer = C(o) : this._bodyText = o = Object.prototype.toString.call(o) : this._bodyText = "", this.headers.get("content-type") || (typeof o == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : u.searchParams && URLSearchParams.prototype.isPrototypeOf(o) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, u.blob && (this.blob = function() {
                    var o = A(this);
                    if (o) return o;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? A(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(S)
                }), this.text = function() {
                    var o = A(this);
                    if (o) return o;
                    if (this._bodyBlob) return G(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(k(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, u.formData && (this.formData = function() {
                    return this.text().then(Be)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var H = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Y(o) {
                var l = o.toUpperCase();
                return H.indexOf(l) > -1 ? l : o
            }

            function L(o, l) {
                l = l || {};
                var N = l.body;
                if (o instanceof L) {
                    if (o.bodyUsed) throw new TypeError("Already read");
                    this.url = o.url, this.credentials = o.credentials, l.headers || (this.headers = new E(o.headers)), this.method = o.method, this.mode = o.mode, this.signal = o.signal, !N && o._bodyInit != null && (N = o._bodyInit, o.bodyUsed = !0)
                } else this.url = String(o);
                if (this.credentials = l.credentials || this.credentials || "same-origin", (l.headers || !this.headers) && (this.headers = new E(l.headers)), this.method = Y(l.method || this.method || "GET"), this.mode = l.mode || this.mode || null, this.signal = l.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && N) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(N)
            }
            L.prototype.clone = function() {
                return new L(this, {
                    body: this._bodyInit
                })
            };

            function Be(o) {
                var l = new FormData;
                return o.trim().split("&").forEach(function(N) {
                    if (N) {
                        var b = N.split("="),
                            _ = b.shift().replace(/\+/g, " "),
                            x = b.join("=").replace(/\+/g, " ");
                        l.append(decodeURIComponent(_), decodeURIComponent(x))
                    }
                }), l
            }

            function Ue(o) {
                var l = new E,
                    N = o.replace(/\r?\n[\t ]+/g, " ");
                return N.split(/\r?\n/).forEach(function(b) {
                    var _ = b.split(":"),
                        x = _.shift().trim();
                    if (x) {
                        var z = _.join(":").trim();
                        l.append(x, z)
                    }
                }), l
            }
            P.call(L.prototype);

            function R(o, l) {
                l || (l = {}), this.type = "default", this.status = l.status === void 0 ? 200 : l.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in l ? l.statusText : "OK", this.headers = new E(l.headers), this.url = l.url || "", this._initBody(o)
            }
            P.call(R.prototype), R.prototype.clone = function() {
                return new R(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new E(this.headers),
                    url: this.url
                })
            }, R.error = function() {
                var o = new R(null, {
                    status: 0,
                    statusText: ""
                });
                return o.type = "error", o
            };
            var Me = [301, 302, 303, 307, 308];
            R.redirect = function(o, l) {
                if (Me.indexOf(l) === -1) throw new RangeError("Invalid status code");
                return new R(null, {
                    status: l,
                    headers: {
                        location: o
                    }
                })
            }, c.DOMException = s.DOMException;
            try {
                new c.DOMException
            } catch {
                c.DOMException = function(l, N) {
                    this.message = l, this.name = N;
                    var b = Error(l);
                    this.stack = b.stack
                }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
            }

            function ie(o, l) {
                return new Promise(function(N, b) {
                    var _ = new L(o, l);
                    if (_.signal && _.signal.aborted) return b(new c.DOMException("Aborted", "AbortError"));
                    var x = new XMLHttpRequest;

                    function z() {
                        x.abort()
                    }
                    x.onload = function() {
                        var j = {
                            status: x.status,
                            statusText: x.statusText,
                            headers: Ue(x.getAllResponseHeaders() || "")
                        };
                        j.url = "responseURL" in x ? x.responseURL : j.headers.get("X-Request-URL");
                        var re = "response" in x ? x.response : x.responseText;
                        N(new R(re, j))
                    }, x.onerror = function() {
                        b(new TypeError("Network request failed"))
                    }, x.ontimeout = function() {
                        b(new TypeError("Network request failed"))
                    }, x.onabort = function() {
                        b(new c.DOMException("Aborted", "AbortError"))
                    }, x.open(_.method, _.url, !0), _.credentials === "include" ? x.withCredentials = !0 : _.credentials === "omit" && (x.withCredentials = !1), "responseType" in x && u.blob && (x.responseType = "blob"), _.headers.forEach(function(j, re) {
                        x.setRequestHeader(re, j)
                    }), _.signal && (_.signal.addEventListener("abort", z), x.onreadystatechange = function() {
                        x.readyState === 4 && _.signal.removeEventListener("abort", z)
                    }), x.send(typeof _._bodyInit > "u" ? null : _._bodyInit)
                })
            }
            return ie.polyfill = !0, s.fetch || (s.fetch = ie, s.Headers = E, s.Request = L, s.Response = R), c.Headers = E, c.Request = L, c.Response = R, c.fetch = ie, Object.defineProperty(c, "__esModule", {
                value: !0
            }), c
        })({})
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var i = r;
    t = i.fetch, t.default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
})(pe, pe.exports);
var ee = pe.exports;
const W = Ve(ee),
    Mt = qe({
        __proto__: null,
        default: W
    }, [ee]),
    B = e => {
        let t = {};
        return e && (typeof Headers < "u" && e instanceof Headers || Mt && ee.Headers && e instanceof ee.Headers ? t = ze(e) : Array.isArray(e) ? e.forEach(([n, r]) => {
            n && r !== void 0 && (t[n] = r)
        }) : t = e), t
    },
    Ie = e => e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim(),
    jt = e => {
        if (!Array.isArray(e.query)) {
            const r = e,
                i = [`query=${encodeURIComponent(Ie(r.query))}`];
            return e.variables && i.push(`variables=${encodeURIComponent(r.jsonSerializer.stringify(r.variables))}`), r.operationName && i.push(`operationName=${encodeURIComponent(r.operationName)}`), i.join("&")
        }
        if (typeof e.variables < "u" && !Array.isArray(e.variables)) throw new Error("Cannot create query with given variable type, array expected");
        const t = e,
            n = e.query.reduce((r, i, s) => (r.push({
                query: Ie(i),
                variables: t.variables ? t.jsonSerializer.stringify(t.variables[s]) : void 0
            }), r), []);
        return `query=${encodeURIComponent(t.jsonSerializer.stringify(n))}`
    },
    Vt = e => async t => {
        const {
            url: n,
            query: r,
            variables: i,
            operationName: s,
            fetch: c,
            fetchOptions: u,
            middleware: h
        } = t, f = { ...t.headers
        };
        let y = "",
            m;
        e === "POST" ? (m = $t(r, i, s, u.jsonSerializer), typeof m == "string" && (f["Content-Type"] = "application/json")) : y = jt({
            query: r,
            variables: i,
            operationName: s,
            jsonSerializer: u.jsonSerializer ? ? fe
        });
        const T = {
            method: e,
            headers: f,
            body: m,
            ...u
        };
        let g = n,
            E = T;
        if (h) {
            const A = await Promise.resolve(h({ ...T,
                    url: n,
                    operationName: s,
                    variables: i
                })),
                {
                    url: D,
                    ...S
                } = A;
            g = D, E = S
        }
        return y && (g = `${g}?${y}`), await c(g, E)
    };
class qt {
    constructor(t, n = {}) {
        this.url = t, this.requestConfig = n, this.rawRequest = async (...r) => {
            const [i, s, c] = r, u = Qe(i, s, c), {
                headers: h,
                fetch: f = W,
                method: y = "POST",
                requestMiddleware: m,
                responseMiddleware: T,
                ...g
            } = this.requestConfig, {
                url: E
            } = this;
            u.signal !== void 0 && (g.signal = u.signal);
            const {
                operationName: A
            } = oe(u.query);
            return ae({
                url: E,
                query: u.query,
                variables: u.variables,
                headers: { ...B(ce(h)),
                    ...B(u.requestHeaders)
                },
                operationName: A,
                fetch: f,
                method: y,
                fetchOptions: g,
                middleware: m
            }).then(D => (T && T(D), D)).catch(D => {
                throw T && T(D), D
            })
        }
    }
    async request(t, ...n) {
        const [r, i] = n, s = Je(t, r, i), {
            headers: c,
            fetch: u = W,
            method: h = "POST",
            requestMiddleware: f,
            responseMiddleware: y,
            ...m
        } = this.requestConfig, {
            url: T
        } = this;
        s.signal !== void 0 && (m.signal = s.signal);
        const {
            query: g,
            operationName: E
        } = oe(s.document);
        return ae({
            url: T,
            query: g,
            variables: s.variables,
            headers: { ...B(ce(c)),
                ...B(s.requestHeaders)
            },
            operationName: E,
            fetch: u,
            method: h,
            fetchOptions: m,
            middleware: f
        }).then(A => (y && y(A), A.data)).catch(A => {
            throw y && y(A), A
        })
    }
    batchRequests(t, n) {
        const r = Xe(t, n),
            {
                headers: i,
                ...s
            } = this.requestConfig;
        r.signal !== void 0 && (s.signal = r.signal);
        const c = r.documents.map(({
                document: h
            }) => oe(h).query),
            u = r.documents.map(({
                variables: h
            }) => h);
        return ae({
            url: this.url,
            query: c,
            variables: u,
            headers: { ...B(ce(i)),
                ...B(r.requestHeaders)
            },
            operationName: void 0,
            fetch: this.requestConfig.fetch ? ? W,
            method: this.requestConfig.method || "POST",
            fetchOptions: s,
            middleware: this.requestConfig.requestMiddleware
        }).then(h => (this.requestConfig.responseMiddleware && this.requestConfig.responseMiddleware(h), h.data)).catch(h => {
            throw this.requestConfig.responseMiddleware && this.requestConfig.responseMiddleware(h), h
        })
    }
    setHeaders(t) {
        return this.requestConfig.headers = t, this
    }
    setHeader(t, n) {
        const {
            headers: r
        } = this.requestConfig;
        return r ? r[t] = n : this.requestConfig.headers = {
            [t]: n
        }, this
    }
    setEndpoint(t) {
        return this.url = t, this
    }
}
const ae = async e => {
        const {
            query: t,
            variables: n,
            fetchOptions: r
        } = e, i = Vt(Ye(e.method ? ? "post")), s = Array.isArray(e.query), c = await i(e), u = await Gt(c, r.jsonSerializer ? ? fe), h = Array.isArray(u) ? !u.some(({
            data: y
        }) => !y) : !!u.data, f = Array.isArray(u) || !u.errors || Array.isArray(u.errors) && !u.errors.length || r.errorPolicy === "all" || r.errorPolicy === "ignore";
        if (c.ok && f && h) {
            const {
                errors: y,
                ...m
            } = (Array.isArray(u), u), T = r.errorPolicy === "ignore" ? m : u;
            return { ...s ? {
                    data: T
                } : T,
                headers: c.headers,
                status: c.status
            }
        } else {
            const y = typeof u == "string" ? {
                error: u
            } : u;
            throw new q({ ...y,
                status: c.status,
                headers: c.headers
            }, {
                query: t,
                variables: n
            })
        }
    },
    $t = (e, t, n, r) => {
        const i = r ? ? fe;
        if (!Array.isArray(e)) return i.stringify({
            query: e,
            variables: t,
            operationName: n
        });
        if (typeof t < "u" && !Array.isArray(t)) throw new Error("Cannot create request body with given variable type, array expected");
        const s = e.reduce((c, u, h) => (c.push({
            query: u,
            variables: t ? t[h] : void 0
        }), c), []);
        return i.stringify(s)
    },
    Gt = async (e, t) => {
        let n;
        return e.headers.forEach((r, i) => {
            i.toLowerCase() === "content-type" && (n = r)
        }), n && (n.toLowerCase().startsWith("application/json") || n.toLowerCase().startsWith("application/graphql+json") || n.toLowerCase().startsWith("application/graphql-response+json")) ? t.parse(await e.text()) : e.text()
    },
    ce = e => typeof e == "function" ? e() : e,
    Wt = (e, ...t) => e.reduce((n, r, i) => `${n}${r}${i in t?String(t[i]):""}`, "");
var Ht = class {
        constructor() {
            this._config = null
        }
        get config() {
            return this._config
        }
        init(e) {
            this._config = e, this.configClient(this._config)
        }
        update(e) {
            this._config = me(me({}, this._config), e), this.configClient(this._config)
        }
        configClient(e) {
            Z.setEndpoint(`https://graphql.contentful.com/content/v1/spaces/${e.spaceId}/environments/${e.environment}`), Z.requestConfig.headers = {
                Authorization: `Bearer ${e.accessToken}`
            }, Z.requestConfig.method = "POST"
        }
    },
    Yt = new Ht,
    Z = new qt("");
Z.requestConfig.requestMiddleware = e => {
    if (!Yt.config) {
        const t = "WBK `ContentfulConfig` was not initialized. See instructions in https://github.com/nadude/webook-frontend/blob/main/packages/contentful/README.md";
        throw new Error(t)
    }
    return e
};
export {
    Yt as C, me as _, Xt as a, Wt as b, Jt as c, Qt as d, Z as g
};
//# sourceMappingURL=contentful-13WVeXE2.js.map