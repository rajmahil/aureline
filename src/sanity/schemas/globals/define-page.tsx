import type { DocumentDefinition } from "sanity";
import type { SchemaDefinition } from "./define-schema";
import { uniqBy } from "lodash";
import { defineField } from "sanity";
import { ComposeIcon } from "@sanity/icons";

import { definePathname } from "@tinloof/sanity-studio";
import defineSchema from "./define-schema";
import { seoField } from "./seo-field";

type PageDefinition = {
  options?: {
    disableIndexableStatus?: boolean;
    hidePathnameField?: boolean;
    hideSeo?: boolean;
    pathnameRoot?: string;
    pathnameFolderCanUnlock?: boolean;
    hideHeaderPadding?: boolean;
  } & SchemaDefinition["options"];
} & Omit<DocumentDefinition, "options">;

export default function definePage(schema: PageDefinition) {
  const groups = uniqBy(
    [
      {
        default: true,
        icon: () => <ComposeIcon />,
        name: "content",
        title: "Content",
      },
      ...(schema.groups || []),
    ],
    "name"
  );

  return defineSchema({
    ...schema,
    fields: [
      defineField({
        ...definePathname({
          options: {
            prefix: schema.options?.pathnameRoot,
            folder: {
              canUnlock: schema.options?.pathnameFolderCanUnlock || false,
            },
          },
        }),
        group: "settings",
        hidden: schema.options?.hidePathnameField,
        readOnly: schema.options?.disableCreation,
      }),
      defineField({
        description:
          "This title is only used internally in Sanity, it won't be displayed on the website.",
        group: "settings",
        hidden: schema.options?.hideInternalTitle,
        name: "internalTitle",
        title: "Internal title",
        type: "string",
      }),
      defineField({
        description:
          "Won't show up in Google if set to false, but accessible through URL. ",
        group: "settings",
        hidden: schema.options?.disableIndexableStatus,
        initialValue: true,
        name: "indexable",
        type: "boolean",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        description:
          "Adds padding to the top of the page, useful for pages with a transparent header.",
        group: "settings",
        initialValue: false,
        hidden: schema.options?.hideHeaderPadding,
        name: "headerPadding",
        title: "Header Padding",
        type: "boolean",
      }),
      ...schema.fields,
      defineField({
        ...seoField,
        group: "settings",
        hidden: schema.options?.hideSeo,
      }),
    ].filter(Boolean),
    groups,
    options: {
      ...(schema.options ?? {}),
    },
    preview: {
      select: {
        subtitle: "pathname.current",
        title: "internalTitle",
      },
      ...schema.preview,
    },
  });
}
