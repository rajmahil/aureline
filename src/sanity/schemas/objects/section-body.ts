import { defineType } from "sanity";
import sections from "../sections";

export const sectionsBody = defineType({
  name: "sectionsBody",
  of: sections.map((section) => ({
    type: section.name,
  })),
  title: "Sections content",
  type: "array",
});
