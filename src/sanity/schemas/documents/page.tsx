import { File } from "lucide-react";
import definePage from "../globals/define-page";

export const page = definePage({
  fields: [
    {
      group: "content",
      name: "sections",
      type: "sectionsBody",
    },
  ],
  name: "pages",
  title: "Pages",
  type: "document",
  icon: () => <File />,
  options: {
    pathnameFolderCanUnlock: true,
  },
  preview: {
    select: {
      title: "internalTitle",
    },
  },
});
