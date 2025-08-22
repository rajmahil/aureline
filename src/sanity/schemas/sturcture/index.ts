import type {
  DefaultDocumentNodeResolver,
  StructureResolver,
} from "sanity/structure";
import { DashboardIcon } from "@sanity/icons";
import { isDev } from "sanity";
import {
  FileBox,
  FileCheck2,
  FileHeart,
  FilePen,
  Files,
  GalleryVerticalEnd,
  Home,
  LetterText,
  Send,
  ShoppingCart,
} from "lucide-react";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S) => {
  return S.document().views([S.view.form()]);
};

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Structure")
    .items([
      S.listItem().title("Pages").icon(Files).child(S.list().title("Pages")),
    ]);

// const disabledSingletons = () => {
//   if (!isDev) {
//     return [
//       ...Object.entries(SINGLETONS).map(
//         ([
//           /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
//           key,
//           value,
//         ]) => value._type,
//       ),
//     ];
//   }

//   return [];
// };

// export const disableCreationDocumentTypes = [...disabledSingletons()];
