! function(e) {
    var c = {},
        d = null,
        l = null,
        s = null,
        u = "",
        t = null,
        m = null,
        p = null,
        y = null,
        n = null,
        i = null,
        a = null,
        o = null,
        g = null,
        f = null,
        h = null,
        v = null,
        b = null,
        E = null,
        r = null;
    c.form = {}, c.applepay = {}, c.util = {}, c.cardInfoView = {}, c.sysInvTermsCheck = {}, c.invTermsCheck = {}, c.payBtn = {}, c.billinginfo = {}, c.shippinginfo = {}, c.shippingInputsSync = {}, c.paymentMethods = {}, c.donationMode = !1, c.minInfoMode = !1, c.noInfoMode = !1, c.configPreview = !1, c.agreementBillingType = 0, c.checkEmail = function(e) {
        return e.value = e.value.trim(), !(e.value.length < 5 || e.value.indexOf("@") < 0) && (e.value = e.value.toLowerCase(), e.checkValidity())
    }, c.newPaymentForm = function(e, t, n, i, r, a, o) {
        return (d = document.getElementById(e)) ? (s = document.getElementById("payBtn"), m = document.getElementById("payConfBtn"), l = document.getElementById("pay-form-alert-message"), p = document.getElementById("apple-pay-btn"), y = document.getElementById("apple-pay-support-warning"), applePayToken = document.getElementById("apple-pay-token"), v = document.getElementById("sysinv-terms-check"), b = document.getElementById("inv-terms-check"), E = document.getElementById("inv-terms-save-card-check"), document.getElementById("saveCard"), s ? (!0 === i && (c.setMinInfoMode(!0), !0 === r) && c.setNoInfoMode(!0), !0 === a && (c.configPreview = !0), c.setAgreementBillingType(o), c.form.init(d, t, n), c.paymentMethods.init(), !1 === c.getMinInfoMode() && c.billinginfo.init(), u = s.innerHTML, !0) : (c.util.sendJsLog("hpp.newPaymentForm", "No pay button"), !1)) : (c.util.sendJsLog("hpp.newPaymentForm", "No pay form"), !1)
    }, c.setDonationMode = function(e) {
        c.donationMode = e
    }, c.getDonationMode = function() {
        return c.donationMode
    }, c.setAgreementBillingType = function(e) {
        c.agreementBillingType = e
    }, c.getAgreementBillingType = function() {
        return c.agreementBillingType
    }, c.setMinInfoMode = function(e) {
        c.minInfoMode = e
    }, c.getMinInfoMode = function() {
        return c.minInfoMode
    }, c.setNoInfoMode = function(e) {
        c.noInfoMode = e
    }, c.getNoInfoMode = function() {
        return c.noInfoMode
    }, c.billinginfo.init = function() {
        var e = document.getElementById("customer-country"),
            t = document.getElementById("customer-state"),
            n = document.getElementById("customer-zip"),
            i = document.getElementById("shipping-country"),
            r = document.getElementById("shipping-state"),
            a = document.getElementById("shipping-zip"),
            o = document.getElementsByName("csrf");
        o.length <= 0 || (o = o[0].value, e.addEventListener("change", function() {
            c.util.onCountryChange(e, t, n, o)
        }), i && i.addEventListener("change", function() {
            c.util.onCountryChange(i, r, a, o)
        }), "" != e.options[e.selectedIndex].value && c.util.onCountryChange(e, t, n, o), n.value = n.getAttribute("data-selected"), i && ("" != i.options[i.selectedIndex].value && c.util.onCountryChange(i, r, a, o), a.value = a.getAttribute("data-selected")), c.shippingInputsSync.init())
    }, c.shippingInputsSync.init = function() {
        var e = document.getElementById("chkShippingSync");
        e && e.addEventListener("change", c.shippingInputsSync.onchange)
    }, c.shippingInputsSync.hasChanges = function() {
        let n = !1;
        return ["name", "email", "address", "city", "country", "state", "zip"].forEach(e => {
            var t = document.getElementById("customer-" + e),
                e = document.getElementById("shipping-" + e);
            e.value && t.value != e.value && (n = !0)
        }), n
    }, c.shippingInputsSync.onchange = function(e) {
        let a = e.target.checked;
        if (a && c.shippingInputsSync.hasChanges() && !confirm(dictionary.get("hpp_shipping_sync_confirm_override"))) e.target.checked = !1;
        else {
            let r = ["country", "state"];
            ["name", "email", "address", "city", "country", "state", "zip"].forEach(e => {
                var t = document.getElementById("customer-" + e),
                    n = document.getElementById("shipping-" + e),
                    e = r.includes(e),
                    i = e ? "change" : "keyup";
                e ? $(n).find("option").attr("disabled", a) : n.readOnly = a, a ? (t.addEventListener(i, c.shippingInputsSync.sync), c.shippingInputsSync.sync(null, t)) : t.removeEventListener(i, c.shippingInputsSync.sync)
            })
        }
    }, c.shippingInputsSync.sync = function(e, t) {
        let n = null;
        if (e) n = e.currentTarget;
        else {
            if (!t) return;
            n = t
        }
        var i, e = n.id,
            t = e.replace("customer-", "shipping-"),
            r = n,
            t = document.getElementById(t);
        "customer-state" == e && (t.innerHTML = r.innerHTML, t.dataset.selected = r.value), t.value = r.value, "customer-country" == e && (r = document.getElementById("shipping-state"), i = document.getElementById("shipping-zip"), r.options.length = 1, c.util.onCountryChange.zip(t, i)), ["customer-country", "customer-state"].includes(e) && ($(t).find(":not(:selected)").attr("disabled", !0), $(t).find(":selected").attr("disabled", !1))
    }, c.paymentMethods.init = function() {
        if (null != document.getElementById("pt_payment_method_tabs")) {
            for (var t = document.getElementById("pt_payment_method_tabs").getElementsByClassName("nav-item"), e = 0; e < t.length; e++) ! function(e) {
                t[e].addEventListener("click", function() {
                    c.paymentMethods.enable(e), c.cardInfoView.display(e), c.sysInvTermsCheck.display(e), c.invTermsCheck.display(e), c.payBtn.update(e), c.util.hideErrorMessage()
                })
            }(e);
            t[0].click()
        } else paylib.card.enable(), c.sysInvTermsCheck.display(-1), c.invTermsCheck.display(-1)
    }, c.paymentMethods.enable = function(e) {
        e = document.getElementsByClassName("nav-item")[e].getAttribute("id");
        "nav-card-tab" == e || "nav-touchpoints-tab" == e || "nav-exnb-tab" == e || "nav-exmi-tab" == e ? paylib.card.enable() : paylib.card.disable()
    }, c.cardInfoView.display = function(e) {
        e = document.getElementsByClassName("nav-item")[e].getAttribute("id");
        document.getElementById("nav-card").style.display = "nav-card-tab" == e || "nav-touchpoints-tab" == e || "nav-exnb-tab" == e || "nav-exmi-tab" == e ? "block" : "none"
    }, c.sysInvTermsCheck.display = function(e) {
        var t;
        v && (t = "", 0 <= e && (t = document.getElementsByClassName("nav-item")[e].getAttribute("id")), document.getElementById("sysInvTermsCheck").style.display = "" === t || "nav-card-tab" === t || "nav-touchpoints-tab" === t || "nav-exnb-tab" === t || "nav-exmi-tab" === t ? "block" : "none")
    }, c.invTermsCheck.display = function(e) {
        var t, n;
        r = b ? (t = "", 0 <= e && (t = (n = document.getElementsByClassName("nav-item"))[e].getAttribute("id"), n[e].getAttribute("data-method")), n = !0, "" !== t && "nav-card-tab" !== t && "nav-touchpoints-tab" !== t && "nav-exnb-tab" !== t && "nav-exmi-tab" !== t || 2 == c.getAgreementBillingType() && (n = !1), r = null, n ? (document.getElementById("invTermsCheck").style.display = "block", document.getElementById("invTermsSaveCardCheck").style.display = "none", b) : (document.getElementById("invTermsSaveCardCheck").style.display = "block", document.getElementById("invTermsCheck").style.display = "none", E)) : null
    }, c.payBtn.update = function(e) {
        var t = document.getElementsByClassName("nav-item"),
            n = document.getElementById("pt_customer_details");
        if (n && (n.style.display = "block"), "nav-wallet-tab-applepay" == t[e].getAttribute("id")) {
            if (n && (n.style.display = "none"), s.style.display = "none", window.ApplePaySession && ApplePaySession.canMakePayments && ApplePaySession.supportsVersion(6)) return p.style.display = "inline-block", void(y.style.display = "none");
            p.style.display = "none", y.style.display = "block"
        } else "EXMH" == t[e].getAttribute("data-method") ? s.textContent = s.getAttribute("data-txt-proceed") : "EXTP" == t[e].getAttribute("data-method") ? s.textContent = s.getAttribute("data-txt-checkbalance") : "EXBT" == t[e].getAttribute("data-method") ? s.textContent = s.getAttribute("data-txt-xferinfo") : s.textContent = s.getAttribute("data-txt-paynow"), c.payBtn.showBtn();
        u = s.innerHTML
    }, c.payBtn.showBtn = function() {
        s.style.display = "block", p && (p.style.display = "none"), y && (y.style.display = "none")
    }, c.form.getPayMethod = function() {
        var e = document.getElementById("selected-payment-method");
        return e ? e.value : ""
    }, c.form.extraData = function() {
        var e = c.form.getPayMethod();
        return "" != e ? {
            method: e
        } : null
    }, c.form.beforeSubmit = function() {
        if (!1 === c.getMinInfoMode()) {
            if (0 == c.billinginfo.validate()) return !1;
            if (c.shippinginfo.available() && 0 == c.shippinginfo.validate()) return !1
        }
        if ((o = document.getElementsByClassName("mobile_name")) && 0 < o.length) {
            let t = "*unset*";
            var r = document.getElementById("selected-payment-method");
            r && (t = r.value);
            let n;
            for (let e = 0; e < o.length; e++)
                if (t === o.item(e).getAttribute("data-method")) {
                    n = o.item(e);
                    break
                }
            if (n) {
                r = n.value.trim();
                if (r.length < 5 || r.indexOf(" ") < 0) return c.form.elementError(n, dictionary.get("hpp_enter_valid_name")), !1
            }
        }
        if ((g = document.getElementsByClassName("cust_email")) && 0 < g.length) {
            let t = "*unset*";
            r = document.getElementById("selected-payment-method");
            r && (t = r.value);
            let n;
            for (let e = 0; e < g.length; e++)
                if (t === g.item(e).getAttribute("data-method")) {
                    n = g.item(e);
                    break
                }
            if (n) {
                r = n.value.trim();
                if (r.length < 5 || r.indexOf("@") < 0) return c.form.elementError(n, dictionary.get("hpp_enter_valid_email")), !1
            }
        }
        if ((h = document.getElementsByClassName("cust_merch_id")) && 0 < h.length) {
            let t = "*unset*";
            r = document.getElementById("selected-payment-method");
            r && (t = r.value);
            let n;
            for (let e = 0; e < h.length; e++)
                if (t === h.item(e).getAttribute("data-method")) {
                    n = h.item(e);
                    break
                }
            if (n) {
                r = parseInt(n.value.trim(), 10);
                if (isNaN(r) || r <= 0) return c.form.elementError(n, dictionary.get("hpp_enter_valid_id")), !1
            }
        }
        if ((f = document.getElementsByClassName("national_id")) && 0 < f.length) {
            let t = "*unset*";
            r = document.getElementById("selected-payment-method");
            r && (t = r.value);
            let n;
            for (let e = 0; e < f.length; e++)
                if (t === f.item(e).getAttribute("data-method")) {
                    n = f.item(e);
                    break
                }
            if (n) {
                if (n.value.trim().length < 9) return c.form.elementError(n, dictionary.get("hpp_enter_valid_national_id")), !1; {
                    let e;
                    document.getElementById("selected-payment-method-id") && (e = document.getElementById("selected-payment-method-id").value), document.getElementById("customer-country") && document.getElementById("customer-country").value;
                    r = {
                        nationalId: n.value.trim(),
                        clientKey: paylib._payform.key,
                        payMethod: t,
                        payMethodID: e
                    }, r = paylib.JSON.stringify(r);
                    return paylib.util.ajax("/payment/nationalidvalidation", r, paylib.form.response), !1
                }
            }
        }
        if ((a = document.getElementsByClassName("mobile_number")) && 0 < a.length) {
            let n = "*unset*";
            r = document.getElementById("selected-payment-method");
            r && (n = r.value);
            let i;
            for (let e = 0; e < a.length; e++)
                if (n === a.item(e).getAttribute("data-method")) {
                    i = a.item(e);
                    break
                }
            if (i) {
                if (i.value.trim().length < 4) return c.form.elementError(i, dictionary.get("hpp_enter_valid_mobile")), !1; {
                    let e;
                    document.getElementById("selected-payment-method-id") && (e = document.getElementById("selected-payment-method-id").value);
                    let t;
                    document.getElementById("customer-country") && (t = document.getElementById("customer-country").value);
                    r = {
                        phoneNumber: i.value.trim(),
                        country: t,
                        clientKey: paylib._payform.key,
                        payMethod: n,
                        payMethodID: e
                    }, r = paylib.JSON.stringify(r);
                    return paylib.util.ajax("/payment/phoneValidation", r, paylib.form.response), !1
                }
            }
        }
        return 0 != c.form.validateAfter() && (s.innerHTML = dictionary.get("hpp_button_wait"), clearTimeout(t), t = setTimeout(c.form.showWaitTrans, 2e3), !0)
    }, c.form.showWaitTrans = function() {
        clearTimeout(t), t = null, $("#waitTransModal").modal("show")
    }, c.form.hideWaitTrans = function() {
        clearTimeout(t), t = null, $("#waitTransModal").modal("hide")
    }, c.form.init = function(e, t, n) {
        paylib.inlineForm({
            key: t,
            form: e,
            currency: n,
            autoSubmit: !0,
            hppMode: !0,
            clearErrors: function() {
                c.form.resetError(d)
            },
            beforeValidate: function() {
                return c.form.validateBefore()
            },
            beforeSubmit: function() {
                return c.form.beforeSubmit()
            },
            extraData: function() {
                return c.form.extraData()
            },
            validCard: function() {
                0 == c.util.checkInViewport(s) && s.scrollIntoView(!1)
            },
            notifyCardType: function(e, t) {
                c.form.identify(e, t)
            },
            notifyCardChanged: function() {
                c.form.updateDiscount()
            },
            callback: function(e) {
                c.form.callback(e)
            }
        }), p && p.addEventListener("click", function(e) {
            if ("nav-wallet-tab-applepay" == document.getElementsByClassName("nav-item active")[0].getAttribute("id")) try {
                if (c.util.hideErrorMessage(), !0 === c.configPreview) return alert("Config Preview Mode"), !1;
                c.applepay.startSession()
            } catch (e) {}
        }), s.addEventListener("click", function(e) {
            try {
                return (c.util.hideErrorMessage(), s.hasAttribute("data-confirm")) ? (c.form.validateBefore() && $("#paymentModalConfirmation").modal("show"), !1) : !0 === c.configPreview ? (alert("Config Preview Mode"), !1) : (paylib.form.setvalues(), void paylib.form.process())
            } catch (e) {}
        }), m && m.addEventListener("click", function(e) {
            try {
                if (c.util.hideErrorMessage(), !0 === c.configPreview) return alert("Config Preview Mode"), !1;
                paylib.form.setvalues(), paylib.form.process()
            } catch (e) {}
        })
    }, c.form.updateDiscount = function() {
        var e = document.getElementById("pt_label_amount"),
            t = document.getElementById("pt_label_discount"),
            n = document.getElementById("pt_label_discount_amount"),
            i = document.getElementById("number");
        if (null != e && null != t && null != n && null != i) {
            switch (e.style.textDecoration = "none", t.style.textDecoration = "none", t.style.display = "none", c.form.getPayMethod()) {
                case "EXTP":
                case "EXNB":
                case "EXMI":
                    return
            }
            if (discounts) {
                var r = c.toStr(i.value).replace(/\D/g, "");
                if (3 < r.length) e: for (var a = 0; a < discounts.length; a++)
                    for (var o = 0; o < discounts[a].discount_cards.split(",").length; o++)
                        if (null != r.match(new RegExp("^" + discounts[a].discount_cards.split(",")[o]))) {
                            e.style.textDecoration = "line-through", t.style.display = "block";
                            var l, d, s = Number(discounts[a].total_after_discount);
                            isNaN(s) || s <= 0 ? (s = Number(discounts[a].discount_amount), l = Number(discounts[a].discount_percent), d = Number(cartAmount), 0 == isNaN(l) && 0 < l && (d -= d * l / 100), 0 == isNaN(s) && 0 < s && (d -= s), n.textContent = d.toFixed(2)) : n.textContent = discounts[a].total_after_discount;
                            break e
                        }
            }
        }
    }, c.form.identify = function(e, t) {
        switch (e) {
            case "visa":
                document.querySelector(".card-type").innerHTML = '<i class="pt-visa-brand"></i>';
                break;
            case "electron":
                document.querySelector(".card-type").innerHTML = '<i class="pt-electron-brand"></i>';
                break;
            case "mastercard":
                document.querySelector(".card-type").innerHTML = '<i class="pt-mastercard-brand"></i>';
                break;
            case "maestro":
                document.querySelector(".card-type").innerHTML = '<i class="pt-maestro-brand"></i>';
                break;
            case "amex":
                document.querySelector(".card-type").innerHTML = '<i class="pt-amex-brand"></i>';
                break;
            case "discover":
                document.querySelector(".card-type").innerHTML = '<i class="pt-discover-brand"></i>';
                break;
            case "jcb":
                document.querySelector(".card-type").innerHTML = '<i class="pt-jcb-brand"></i>';
                break;
            case "diners":
                document.querySelector(".card-type").innerHTML = '<i class="pt-diners-brand"></i>';
                break;
            case "mada":
                document.querySelector(".card-type").innerHTML = '<i class="pt-mada-brand"></i>';
                break;
            case "omannet":
                document.querySelector(".card-type").innerHTML = '<i class="pt-omannet-brand"></i>';
                break;
            case "cup":
                document.querySelector(".card-type").innerHTML = '<i class="pt-cup-brand"></i>';
                break;
            case "meeza":
                document.querySelector(".card-type").innerHTML = '<i class="pt-meeza-brand"></i>';
                break;
            default:
                document.querySelector(".card-type").innerHTML = '<i class="pt-credit-card-brand"></i>'
        }
    }, c.util.getStr = function(e) {
        return paylib.util.tidyString(paylib.util.getStr(e))
    }, c.util.newEvent = function(e) {
        var t;
        return "function" == typeof Event ? t = new Event(e) : (t = document.createEvent("Event")).initEvent(e, !0, !0), t
    }, c.util.checkName = function(e) {
        var t = document.getElementById(e),
            t = paylib.util.getStr(t).trim();
        return !(t.length < 5 || t.indexOf(" ") < 0) || (c.form.showError(e, dictionary.get("hpp_enter_valid_name")), !1)
    }, c.util.checkInViewport = function(e) {
        e = e.getBoundingClientRect();
        return 0 <= e.top && 0 <= e.left && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
    }, c.util.checkAmount = function(e) {
        var t, e = document.getElementById(e),
            n = Number(e.value),
            i = Number(e.getAttribute("min").replace(/[^0-9\.-]+/g, "")),
            r = Number(e.getAttribute("max").replace(/[^0-9\.-]+/g, ""));
        return n <= 0 ? (c.form.showError("amount", dictionary.get("hpp_enter_valid_amount")), !1) : n < i ? (t = dictionary.get("hpp_enter_valid_amount_min") + e.getAttribute("min"), c.form.showError("amount", t), !1) : !(r < n && (t = dictionary.get("hpp_enter_valid_amount_max") + e.getAttribute("max"), c.form.showError("amount", t), 1))
    }, c.util.onCountryChange = function(e, i, t, n) {
        var r = e.options[e.selectedIndex],
            a = new XMLHttpRequest,
            o = window.location.pathname.replace(/\/start$/, "") + "/regions",
            r = "country-code=" + r.value;
        r += "&csrf=" + n, a.open("POST", o, !0), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.options.length = 1, i.style.display = "none", a.onreadystatechange = function() {
            if (4 == a.readyState && 200 == a.status) try {
                var n;
                "" != a.responseText && (n = JSON.parse(a.responseText), Object.keys(n).length <= 0 ? i.style.display = "none" : (i.style.display = "block", Object.keys(n).forEach(function(e) {
                    var t = document.createElement("option");
                    t.text = n[e].name, t.value = n[e].code, i.getAttribute("data-selected") === n[e].code && t.setAttribute("selected", "true"), i.add(t)
                })))
            } catch (e) {}
        }, a.send(r), c.form.resetError(d), c.util.onCountryChange.zip(e, t)
    }, c.util.onCountryChange.zip = function(e, t) {
        var n;
        null != e.options[e.selectedIndex].getAttribute("data-zp") ? (t.style.display = "block", t.value = "", n = e.options[e.selectedIndex].getAttribute("data-zp-regex"), t.setAttribute("pattern", n)) : (t.style.display = "none", t.removeAttribute("pattern"), null != e.options[e.selectedIndex].getAttribute("data-zf") ? t.value = e.options[e.selectedIndex].getAttribute("data-zf") : t.value = " ")
    }, c.toStr = function(e) {
        try {
            return null === e ? "null" : "number" == typeof e ? isNaN(e) ? "NaN" : e.toString() : "string" == typeof e ? ("" + e).replace(/^\s\s*/, "").replace(/\s\s*$/, "") : JSON.stringify(e)
        } catch (e) {
            return e.toString()
        }
    }, c.util.sendJsLog = function(e, t) {
        try {
            var n = c.toStr(e),
                i = c.toStr(t),
                r = new XMLHttpRequest,
                a = currentPPURL + "/jslog",
                o = "log=" + encodeURIComponent(n + ": " + i);
            r.open("POST", a), r.onreadystatechange = function() {}, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.send(o)
        } catch (e) {}
    }, c.util.showErrorMessage = function(e) {
        l && (l.innerHTML = "<small>" + e + "</small>", l.style.display = "block")
    }, c.util.hideErrorMessage = function() {
        l && (l.style.display = "none")
    }, c.form.validateBefore = function() {
        if ($("#paymentModalConfirmation").modal("hide"), c.getDonationMode() && 0 == c.util.checkAmount("amount")) return !1;
        if (paylib.card.enabled) {
            if (!1 === c.getNoInfoMode()) {
                if (0 == c.util.checkName("holderName")) return !1;
                if (!0 === c.getMinInfoMode()) {
                    var e = document.getElementById("customer-email");
                    if (!1 === c.checkEmail(e)) return c.form.showError("customer-email", dictionary.get("hpp_enter_valid_email")), !1
                }
            }
            if ("CC" === c.form.getPayMethod()) {
                var e = !0,
                    t = document.getElementById("saved-card-select");
                if (e = t && 4 < t.value.length ? !1 : e) {
                    t = document.getElementById("number");
                    if (c.toStr(t.value).replace(/\D/g, "").length < 13) return c.form.showError("number", dictionary.get("hpp_cardnum_invalid")), !1
                }
            }
        }
        return !0
    }, c.form.validateAfter = function() {
        if (paylib.card.enabled && !1 === c.getNoInfoMode()) {
            if (0 == c.util.checkName("holderName")) return !1;
            if (!0 === c.getMinInfoMode()) {
                var e = document.getElementById("customer-email");
                if (!1 === c.checkEmail(e)) return c.form.showError("customer-email", dictionary.get("hpp_enter_valid_email")), !1
            }
        }
        return r && 0 == r.checked ? (c.form.showError(r.id, dictionary.get("hpp_accept_tnc")), !1) : !paylib.card.enabled || !v || 0 != v.checked || (c.form.showError("sysinv-terms-check", dictionary.get("hpp_accept_tnc")), !1)
    }, c.form.callback = function(e) {
        if (e.error && (c.form.hideWaitTrans(), s.innerHTML = u, e.errorField)) {
            if (e.errorCode) switch (e.errorCode) {
                case 1001:
                    e.errorText = dictionary.get("hpp_cardnum_invalid");
                    break;
                case 1002:
                    e.errorText = dictionary.get("hpp_cardtype_invalid");
                    break;
                case 1003:
                    e.errorText = dictionary.get("hpp_cardexpiry_invalid");
                    break;
                case 1004:
                    e.errorText = dictionary.get("hpp_cardcvv_invalid")
            }
            c.form.showError(e.errorField, e.errorText)
        }
    }, c.form.resetError = function(e) {
        for (var t, n = e.querySelectorAll(".invalid-feedback, .is-invalid, input[type=text]"), i = 0; t = n[i++];) t.classList.contains("invalid-feedback") ? t.innerHTML = "" : t.classList.remove("is-invalid")
    }, c.form.showError = function(e, t) {
        document.getElementById(e).classList.add("is-invalid"), document.getElementById(e + "-feedback").innerHTML = t, document.getElementById(e + "-feedback").classList.add("d-block"), document.getElementById(e).scrollIntoView()
    }, c.form.elementError = function(e, t) {
        e.classList.add("is-invalid"), e.parentElement.lastElementChild.innerHTML = t, e.parentElement.lastElementChild.classList.add("d-block"), e.scrollIntoView()
    }, c.billinginfo.validate = function() {
        c.form.resetError(d);
        var e = document.getElementById("customer-email"),
            t = document.getElementById("customer-address"),
            n = document.getElementById("customer-city"),
            i = document.getElementById("customer-country"),
            r = document.getElementById("customer-state"),
            a = document.getElementById("customer-zip"),
            o = !0,
            l = !0;
        if (1 < r.options.length && r.value.length < 1 && (o = !1), a.hasAttribute("pattern") && (r = a.getAttribute("pattern"), 0 != (a = a.value.trim()).length && 0 != new RegExp(r).test(a) || "*" != i.options[i.selectedIndex].getAttribute("data-zp") && (l = !1)), 0 == c.util.checkName("customer-name") || !1 === c.checkEmail(e) || t.value.trim().length < 4 || 100 < t.value.trim().length || n.value.trim().length < 2 || 50 < n.value.trim().length || i.value.trim().length < 2 || 0 == o || 0 == l) {
            r = document.getElementById("customer-info");
            if (r && "none" === window.getComputedStyle(r).display && document.getElementsByClassName("pt_personal-tab")[0].click(), 0 == c.util.checkName("customer-name")) return !1;
            if (!1 === c.checkEmail(e)) return c.form.showError("customer-email", dictionary.get("hpp_enter_valid_email")), !1;
            if (t.value.trim().length < 4) return c.form.showError("customer-address", dictionary.get("hpp_enter_valid_full_address")), !1;
            if (100 < t.value.trim().length) return c.form.showError("customer-address", dictionary.get("hpp_enter_valid_address_too_long")), !1;
            if (n.value.trim().length < 2 || 50 < n.value.trim().length) return c.form.showError("customer-city", dictionary.get("hpp_enter_valid_city")), !1;
            if (i.value.length < 2) return c.form.showError("customer-country", dictionary.get("hpp_enter_valid_country")), !1;
            if (0 == o) return c.form.showError("customer-state", dictionary.get("hpp_enter_valid_state")), !1;
            if (0 == l) return c.form.showError("customer-zip", dictionary.get("hpp_enter_valid_zip") + " (" + i.options[i.selectedIndex].getAttribute("data-zp").replace(",", " " + dictionary.get("hpp_or") + " ") + ")"), !1
        }
        return !0
    }, c.shippinginfo.available = function() {
        return "false" == hideShipping
    }, c.shippinginfo.validate = function() {
        c.form.resetError(d);
        var e = document.getElementById("shipping-email"),
            t = document.getElementById("shipping-address"),
            n = document.getElementById("shipping-city"),
            i = document.getElementById("shipping-country"),
            r = document.getElementById("shipping-state"),
            a = document.getElementById("shipping-zip"),
            o = !0,
            l = !0;
        if (1 < r.options.length && r.value.length < 1 && (o = !1), a.hasAttribute("pattern") && (r = a.getAttribute("pattern"), 0 != (a = a.value.trim()).length && 0 != new RegExp(r).test(a) || "*" != i.options[i.selectedIndex].getAttribute("data-zp") && (l = !1)), 0 == c.util.checkName("shipping-name") || !1 === c.checkEmail(e) || t.value.trim().length < 4 || 100 < t.value.trim().length || n.value.trim().length < 2 || 50 < n.value.trim().length || i.value.trim().length < 2 || 0 == o || 0 == l) {
            r = document.getElementById("billing-info");
            if (r && "none" === window.getComputedStyle(r).display && document.getElementsByClassName("pt_billing-tab")[0].click(), 0 == c.util.checkName("shipping-name")) return !1;
            if (!1 === c.checkEmail(e)) return c.form.showError("shipping-email", dictionary.get("hpp_enter_valid_email")), !1;
            if (t.value.trim().length < 4) return c.form.showError("shipping-address", dictionary.get("hpp_enter_valid_full_address")), !1;
            if (100 < t.value.trim().length) return c.form.showError("shipping-address", dictionary.get("hpp_enter_valid_address_too_long")), !1;
            if (n.value.trim().length < 2 || 50 < n.value.trim().length) return c.form.showError("shipping-city", dictionary.get("hpp_enter_valid_city")), !1;
            if (i.value.length < 2) return c.form.showError("shipping-country", dictionary.get("hpp_enter_valid_country")), !1;
            if (0 == o) return c.form.showError("shipping-state", dictionary.get("hpp_enter_valid_state")), !1;
            if (0 == l) return c.form.showError("shipping-zip", dictionary.get("hpp_enter_valid_zip") + " (" + i.options[i.selectedIndex].getAttribute("data-zp").replace(",", " " + dictionary.get("hpp_or") + " ") + ")"), !1
        }
        return !0
    }, c.applepay.getSession = function(i) {
        return new Promise(function(e, t) {
            var n = new XMLHttpRequest;
            n.open("POST", currentPPURL + "/ap/session"), n.onload = function() {
                200 <= this.status && this.status < 300 ? e(JSON.parse(n.response)) : t({
                    status: this.status,
                    statusText: n.statusText
                })
            }, n.onerror = function() {
                t({
                    status: this.status,
                    statusText: n.statusText
                })
            }, n.setRequestHeader("Content-Type", "application/json"), n.send(JSON.stringify({
                url: i
            }))
        })
    }, c.applepay.startSession = function() {
        if (n) c.applepay.process();
        else if (c.form.validateBefore()) {
            c.getDonationMode() && (applePaymentRequest.total.amount = document.getElementById("amount").value);
            try {
                i = new ApplePaySession(6, applePaymentRequest)
            } catch (e) {
                return void c.util.showErrorMessage("Unable to start ApplePay")
            }
            $("#loader").removeClass("d-none"), paylib.form.disableButtons(d), i.onvalidatemerchant = function(e) {
                c.applepay.getSession(e.validationURL).then(function(e) {
                    i.completeMerchantValidation(e)
                }).catch(function() {
                    window.location.href = currentPPURL + "/error"
                })
            }, i.onpaymentauthorized = function(e) {
                n = e.payment, c.applepay.process()
            }, i.oncancel = function(e) {
                $("#loader").addClass("d-none"), paylib.form.enableButtons(d)
            }, i.begin()
        }
    }, c.applepay.process = function() {
        paylib.form.disableButtons(d);
        var e = new XMLHttpRequest;
        e.open("POST", currentPPURL + "/ap/process"), e.onreadystatechange = function() {
            4 == e.readyState && (200 != e.status ? (i.completePayment(ApplePaySession.STATUS_FAILURE), setTimeout(function() {
                location.href = currentPPURL + "/error"
            }, 1500)) : (i.completePayment(ApplePaySession.STATUS_SUCCESS), setTimeout(function() {
                location.href = currentPPURL + "/return"
            }, 1500)))
        }, c.getDonationMode() && (n.amount = applePaymentRequest.total.amount), e.setRequestHeader("Content-Type", "application/json"), e.send(JSON.stringify(n))
    }, e.hpp = c
}(window);
