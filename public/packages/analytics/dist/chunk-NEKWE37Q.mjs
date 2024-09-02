'use client'
import {
  setUserInLocalStorage
} from "./chunk-REY2IGVX.mjs";
import {
  CHECKOUT_DATA_COOKIE_NAME,
  USER_DATA_STORAGE_KEY
} from "./chunk-T2NN7R53.mjs";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-BTG5EALA.mjs";

// src/utils/data.ts
import { COUNTRIES, generateSHA256Hash, getItem, safeParseJson, setItem } from "@wbk/utils";
var userData = (user) => __async(void 0, null, function* () {
  const cellCode = COUNTRIES.find((country) => country.code === user.cell_country_code);
  const mobile = `+${cellCode == null ? void 0 : cellCode.dial_code}${user.cell_number}`;
  const [phone_hash, email_hash] = yield Promise.all([
    generateSHA256Hash(mobile),
    generateSHA256Hash(user.email)
  ]);
  const data = __spreadProps(__spreadValues({}, user), {
    mobile,
    phone_hash,
    email_hash,
    access_token: "",
    event_order_details: ""
  });
  setUserInLocalStorage(data);
  return data;
});
var productData = ({ event, title, price, quantity, zone, product_id }) => {
  return {
    currency: (event == null ? void 0 : event.currencyCode) || "SAR",
    value: price || (event == null ? void 0 : event.startingPrice) || 0,
    items: [
      {
        item_id: (event == null ? void 0 : event.id) || product_id,
        item_name: (event == null ? void 0 : event.title) || title,
        item_category: (event == null ? void 0 : event.category) || "N/A",
        price: price || (event == null ? void 0 : event.startingPrice) || 0,
        quantity: quantity || 1,
        zone: (event == null ? void 0 : event.zone) || zone || "",
        google_business_vertical: "retail",
        id: (event == null ? void 0 : event.id) || product_id
      }
    ]
  };
};
var cartData = ({
  item,
  quantity,
  event,
  itemValue,
  currency,
  id,
  title,
  zone,
  vat
}) => {
  const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
  const userData2 = safeParseJson(userDataString);
  const value = item ? +item.price + (+item.vat || 0) : (itemValue || 0) + (vat || 0) || itemValue || 0;
  const discount = item && item.original_price ? +item.original_price - value : 0;
  const order = {
    currency: (item == null ? void 0 : item.currency) || currency,
    value: value * (quantity || 1),
    items: [
      {
        item_id: (item == null ? void 0 : item._id) || id,
        item_name: (event == null ? void 0 : event.title) || title,
        item_category: (event == null ? void 0 : event.category) || "N/A",
        organization_slug: (event == null ? void 0 : event.organization_slug) || "",
        quantity,
        price: value,
        discount,
        ticket_class: item == null ? void 0 : item.title,
        zone: (event == null ? void 0 : event.zone) || zone,
        google_business_vertical: "retail",
        id: (item == null ? void 0 : item._id) || id
      }
    ],
    /** Meta/Snapchat helpers */
    number_items: quantity,
    item_ids: [(item == null ? void 0 : item._id) || id]
  };
  return { order, userData: userData2 };
};
var checkoutData = ({ items, coupon, event, zone }) => {
  const totalValue = items.reduce(
    (acc, item) => acc + (+item.price + (item.vat ? +item.vat : 0)) * item.qty,
    0
  );
  const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
  const userData2 = safeParseJson(userDataString);
  const checkoutData2 = {
    item_name: event == null ? void 0 : event.title,
    item_category: (event == null ? void 0 : event.category) || "N/A",
    zone: (event == null ? void 0 : event.zone) || zone
  };
  setItem(CHECKOUT_DATA_COOKIE_NAME, JSON.stringify(checkoutData2));
  const order = {
    currency: items[0].currency,
    value: totalValue,
    coupon: coupon.promo_code || "",
    items: items == null ? void 0 : items.map((item) => {
      const ticketId = item.ticket_id || item._id;
      const value = +(+item.price + (item.vat ? +item.vat : 0));
      const discount = +item.original_price - value;
      const hasCoupon = ticketId && coupon.ticket_ids.includes(ticketId);
      const eventZone = (item == null ? void 0 : item.zone) || (event == null ? void 0 : event.zone) || zone;
      const ticketClass = item.ticket_class || item.title;
      return {
        item_id: ticketId,
        item_name: (event == null ? void 0 : event.title) || item.title,
        item_category: (event == null ? void 0 : event.category) || "N/A",
        organization_slug: (event == null ? void 0 : event.organization_slug) || "",
        quantity: item.qty,
        price: value,
        discount: hasCoupon ? +item.price * coupon.discount / 100 : discount,
        zone: eventZone,
        google_business_vertical: "retail",
        ticket_class: ticketClass,
        id: ticketId
      };
    }),
    /** Meta/Snapchat helpers */
    number_items: items == null ? void 0 : items.reduce((acc, item) => acc + item.qty, 0),
    item_ids: items == null ? void 0 : items.map((item) => item.ticket_id || item._id)
  };
  return { order, userData: userData2 };
};
var purchaseData = (payment) => {
  const summaries = payment.summary || payment.summaries || [];
  const userDataString = getItem(USER_DATA_STORAGE_KEY) || "";
  const userData2 = safeParseJson(userDataString);
  const checkoutDataString = getItem(CHECKOUT_DATA_COOKIE_NAME) || "";
  const checkoutData2 = safeParseJson(checkoutDataString);
  const items = summaries.flatMap(
    (summary) => summary.tickets_details.map((item) => {
      var _a, _b;
      return {
        item_id: item.event_ticket_id,
        item_name: ((_a = summary.event) == null ? void 0 : _a.title) || "",
        item_category: checkoutData2 == null ? void 0 : checkoutData2.item_category,
        quantity: 1,
        price: +item.ticket_price,
        ticket_class: item.event_ticket_title,
        item_category2: ((_b = summary.event) == null ? void 0 : _b.city) || "",
        zone: checkoutData2 == null ? void 0 : checkoutData2.zone,
        google_business_vertical: "retail",
        id: item.event_ticket_id
      };
    })
  );
  const event = summaries == null ? void 0 : summaries[0].event;
  const order = {
    transaction_id: payment.order_id,
    event_id: event == null ? void 0 : event._id,
    event_slug: event == null ? void 0 : event.slug,
    currency: payment.total.currency,
    shipping: 0,
    tax: payment.total.vat_total,
    value: payment.total.grand_total,
    discount: payment.total.discount_amount,
    payment_type: payment.booked_type,
    coupon: payment.promo_code || "",
    items,
    /** Meta/Snapchat helpers */
    number_items: items.length,
    item_ids: items.map((item) => item.item_id)
  };
  return { order, userData: userData2 };
};

export {
  userData,
  productData,
  cartData,
  checkoutData,
  purchaseData
};
//# sourceMappingURL=chunk-NEKWE37Q.mjs.map