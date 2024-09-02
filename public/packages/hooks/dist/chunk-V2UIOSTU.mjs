'use client'
import {
  __async
} from "./chunk-7X42SORZ.mjs";

// src/useEmailProviders.ts
import { useQuery } from "@tanstack/react-query";
var url = "https://wbk-assets.s3.me-south-1.amazonaws.com/assets/all_email_provider_domains.txt";
var useEmailProviders = () => {
  return useQuery({
    queryKey: ["emailProviders"],
    queryFn: () => __async(void 0, null, function* () {
      const emails = yield fetch(url).then((res) => res.text());
      return emails.split("\n");
    }),
    staleTime: Infinity,
    gcTime: Infinity
  });
};

export {
  useEmailProviders
};
//# sourceMappingURL=chunk-V2UIOSTU.mjs.map