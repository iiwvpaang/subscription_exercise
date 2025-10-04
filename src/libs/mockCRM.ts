type CRMEvent = {
  type: "subscription.created" | string;
  data: unknown;
};

export async function sendToCRM(event: CRMEvent) {
  // simulate sending by logging
  console.log("[MOCK CRM] Sent event:", JSON.stringify(event, null, 2));

  // simulate async (like a real HTTP request)
  return Promise.resolve();
}
