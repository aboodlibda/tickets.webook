'use client'
import {
  USER_DATA_STORAGE_KEY
} from "./chunk-T2NN7R53.mjs";

// src/utils/user.ts
import { setItem } from "@wbk/utils";
var setUserInLocalStorage = (user) => {
  const userData = {
    _id: user._id || "",
    user_id: user._id || "",
    email: user.email || "",
    phone: user.mobile || "",
    cell_country_code: user.cell_country_code || "",
    cell_number: user.cell_number || "",
    mobile: user.mobile || "",
    email_hash: user.email_hash || "",
    phone_hash: user.phone_hash || "",
    first_name: user.first_name || "",
    last_name: user.last_name || "",
    city: user.city || "",
    country: user.country || "",
    address: user.address || ""
  };
  setItem(USER_DATA_STORAGE_KEY, JSON.stringify(userData));
};

export {
  setUserInLocalStorage
};
//# sourceMappingURL=chunk-REY2IGVX.mjs.map