import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "object",
  fields: [
    defineField({
      name: "layout",
      title: "Image Position",
      type: "string",
      description: "Choose which side the image sits on",
      options: {
        list: [
          { title: "Image Left, Text Right", value: "imageLeft" },
          { title: "Image Right, Text Left", value: "imageRight" },
        ],
        layout: "radio",
      },
      initialValue: "imageLeft",
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow (Optional)",
      type: "string",
      description: "Short label above the headline",
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description:
        "Primary heading e.g., “Whispers of Gold, Echoes of Forever”",
      validation: (Rule) => Rule.required().min(4).max(120),
    }),
    defineField({
      name: "subcopy",
      title: "Subcopy",
      type: "simplePortableText",
      description: "One short paragraph of supporting copy",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cta",
      title: "Primary CTA",
      type: "ctaLink",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (Rule) => Rule.required().min(5).max(140),
        }),
        defineField({
          name: "credits",
          title: "Photographer / Credits",
          type: "string",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "background",
      title: "Background",
      type: "string",
      description: "Optional background theme",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Muted (e.g., light gray)", value: "muted" },
          { title: "Dark", value: "dark" },
        ],
      },
      initialValue: "muted",
    }),
    defineField({
      name: "paddingY",
      title: "Vertical Padding",
      type: "string",
      options: {
        list: [
          { title: "Compact", value: "py-8" },
          { title: "Comfortable", value: "py-12" },
          { title: "Spacious", value: "py-20" },
        ],
      },
      initialValue: "py-20",
    }),
  ],
  preview: {
    select: {
      title: "headline",
      media: "image",
      eyebrow: "eyebrow",
      ctaLabel: "cta.label",
      layout: "layout",
    },
    prepare({ title, media, eyebrow, ctaLabel, layout }) {
      const subtitle = [
        eyebrow,
        ctaLabel ? `CTA: ${ctaLabel}` : null,
        layout === "imageLeft" ? "Img ◀︎ Text" : "Text ◀︎ Img",
      ]
        .filter(Boolean)
        .join(" • ");
      return {
        title: title || "Hero Section",
        subtitle,
        media,
      };
    },
  },
});
