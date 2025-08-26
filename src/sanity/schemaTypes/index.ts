import { SchemaPluginOptions } from "sanity";
import schemas from "@/sanity/schemas";
import { SchemaTypeDefinition } from "sanity";

// Ensure schemas is explicitly typed and only contains valid SchemaTypeDefinition objects
const validSchemas: SchemaTypeDefinition[] = schemas as SchemaTypeDefinition[];

export const schema: SchemaPluginOptions = {
  types: validSchemas,
  templates: (templates) =>
    templates.filter((template) => template.schemaType !== "product"),
};
