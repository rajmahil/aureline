import { defineType, defineField } from "sanity";

/**
 * Reusable: simple rich text for short marketing copy
 */
export const portableText = defineType({
  name: "simplePortableText",
  title: "Simple Portable Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
      ],
      lists: [],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              defineField({
                name: "href",
                type: "url",
                title: "URL",
                validation: (Rule) =>
                  Rule.uri({ allowRelative: false }).required(),
              }),
              defineField({
                name: "blank",
                type: "boolean",
                title: "Open in new tab",
                initialValue: true,
              }),
            ],
          },
        ],
      },
    },
  ],
});
