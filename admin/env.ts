export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-11-13";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const useCdn = process.env.NEXT_PUBLIC_SANITY_CDN || false;
