import sectionSchemas from "../schemas/sections";
import { portableText } from "../schemas/globals/portable-text";
import { ctaLink } from "../schemas/globals/cta-link";
import { seo } from "../schemas/objects/seo";
import { ogImage } from "../schemas/objects/og-image";
import { page } from "../schemas/documents/page";
import { sectionsBody } from "./objects/section-body";

const schemas = [
  ...sectionSchemas,
  portableText,
  ctaLink,
  seo,
  ogImage,
  page,
  sectionsBody,
];

export default schemas;
