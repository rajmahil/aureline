import { defineType, defineField } from "sanity";
import definePage from "../globals/define-page";
import { Box } from "lucide-react";

export const vendureProductSchema = definePage({
  name: "product-vendure",
  title: "Vendure Product",
  type: "document",
  options: {
    hideHeaderPadding: true,
    hideInternalTitle: true,
    hidePathnameField: true,
  },
  icon: () => <Box />,
  fields: [
    defineField({
      name: "vendureId",
      title: "Vendure ID",
      type: "number",
      readOnly: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    // defineField({
    //   name: "featuredImage",
    //   title: "Featured Image",
    //   type: "image",
    //   options: { hotspot: true },
    // }),
    defineField({
      name: "updatedAt",
      title: "Updated At",
      type: "datetime",
      readOnly: true,
    }),
    // system metadata
    defineField({
      name: "originalId",
      title: "Original ID",
      type: "string",
      readOnly: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      // media: "featuredImage",
      subtitle: "vendureId",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        ...selection,
        subtitle: subtitle ? `Vendure ID: ${subtitle}` : "",
        title: title || "Untitled product",
      };
    },
  },
});

export default vendureProductSchema;
