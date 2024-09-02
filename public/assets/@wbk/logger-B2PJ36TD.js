var n = Object.defineProperty;
var a = (e, r, t) => r in e ? n(e, r, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : e[r] = t;
var o = (e, r, t) => (a(e, typeof r != "symbol" ? r + "" : r, t), t);
var c = class {
        constructor() {
            o(this, "logger", null)
        }
        getLogger() {
            if (!this.logger) throw new Error("Logger instance is not initialized, See instructions in https://github.com/nadude/webook-frontend/blob/main/packages/logger/README.md");
            return this.logger
        }
        get isInitialized() {
            return !!this.logger
        }
        init(e) {
            this.logger = e
        }
        captureException(e, r) {
            return this.getLogger().captureException(e, r)
        }
        captureMessage(e, r) {
            return this.getLogger().captureMessage(e, r)
        }
        setUser(e) {
            return this.getLogger().setUser(e)
        }
        showReportDialog(e) {
            return this.getLogger().showReportDialog(e)
        }
        lastId() {
            return this.getLogger().lastId()
        }
    },
    g = new c,
    l = e => {
        g.setUser(e)
    },
    u = class extends Error {
        constructor({
            error: r,
            context: t,
            name: s = "UnnamedException"
        }) {
            super((r == null ? void 0 : r.message) || "Something went wrong");
            o(this, "status");
            o(this, "error");
            o(this, "eventId");
            this.name = s, this.error = t, this.status = t == null ? void 0 : t.status, this.eventId = "", this.captureError()
        }
        async captureError() {
            this.eventId = g.captureException(this, this.error) || ""
        }
    },
    p = class extends u {
        constructor({
            error: r,
            order: t,
            ticketErrors: s
        }) {
            super({
                error: r,
                context: {
                    tags: {
                        journey: "checkout"
                    },
                    level: "fatal",
                    extra: {
                        order: JSON.stringify(t),
                        ticketErrors: JSON.stringify(s || [])
                    }
                },
                name: "CheckoutException"
            });
            o(this, "ticketErrors");
            s && this.processTicketErrors(s)
        }
        processTicketErrors(r) {
            var t;
            const s = {};
            for (const i of r) s[i._id] = ((t = i.messages) == null ? void 0 : t[0]) || "";
            this.ticketErrors = s
        }
    };
export {
    p as C, u as E, g as L, l as s
};
//# sourceMappingURL=logger-B2PJ36TD.js.map