import { defineType, defineField } from "sanity";

export const ctaLink = defineType({
  name: "ctaLink",
  title: "CTA Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Button Label",
      type: "string",
      validation: (Rule) => Rule.required().min(1).max(40),
    }),
    defineField({
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
        ],
        layout: "radio",
      },
      initialValue: "internal",
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "internal",
    //   title: "Internal Reference",
    //   type: "reference",
    //   to: [{ type: "route" }, { type: "page" }, { type: "collection" }].filter(
    //     Boolean
    //   ), // adjust to your project
    //   hidden: ({ parent }) => parent?.linkType !== "internal",
    //   validation: (Rule) =>
    //     Rule.custom((val, ctx) => {
    //       const linkType = (ctx as any)?.parent?.linkType;
    //       if (linkType === "internal" && !val)
    //         return "Choose an internal target";
    //       return true;
    //     }),
    // }),
    defineField({
      name: "external",
      title: "External URL",
      type: "url",
      hidden: ({ parent }) => parent?.linkType !== "external",
      validation: (Rule) =>
        Rule.custom((val, ctx) => {
          const linkType = (ctx as any)?.parent?.linkType;
          if (linkType === "external" && !val) return "Enter a URL";
          return true;
        }),
    }),
    defineField({
      name: "newTab",
      title: "Open in new tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      label: "label",
      linkType: "linkType",
      internalTitle: "internal.title",
      external: "external",
    },
    prepare({ label, linkType, internalTitle, external }) {
      const subtitle =
        linkType === "internal"
          ? internalTitle || "Internal"
          : external || "External URL";
      return {
        title: label || "CTA",
        subtitle: `${linkType === "internal" ? "→ " : ""}${subtitle}`,
      };
    },
  },
});
