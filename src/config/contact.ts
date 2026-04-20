export const businessName = import.meta.env.VITE_BUSINESS_NAME || "Binder Hausberatung";
export const businessEmail = import.meta.env.VITE_BUSINESS_EMAIL || "info@fachberatung-binder.de";
export const businessPhone = import.meta.env.VITE_BUSINESS_PHONE || "+4915111073043";
export const businessPhoneLabel = "0151 11073043";
export const calendlyUrl = import.meta.env.VITE_CALENDLY_URL || "";
export const hubspotPortalId = import.meta.env.VITE_HUBSPOT_PORTAL_ID || "";
export const hubspotFormId = import.meta.env.VITE_HUBSPOT_FORM_ID || "";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${businessPhone.replace("+", "")}?text=${encodeURIComponent(message)}`;
