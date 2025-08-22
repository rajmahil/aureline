// import type { PageProps } from "@/types";
// import type { TEXT_PAGE_QUERYResult } from "@/types/sanity.generated";
// import type { ResolvingMetadata } from "next";
// import SectionsRenderer from "@/components/sections/section-renderer";
// import { loadPageByPathname } from "@/data/sanity";
// import { resolveSanityRouteMetadata } from "@/data/sanity/resolve-sanity-route-metadata";
// import { notFound } from "next/navigation";
// import TextPage from "./text-page.template";
// import { cn } from "@/lib/utils";

// export type DynamicRouteProps = PageProps<"...path">;

// export async function generateMetadata(
//   props: DynamicRouteProps,
//   parent: ResolvingMetadata,
// ) {
//   const params = await props.params;
//   const initialData = await loadPageByPathname({ params });

//   if (!initialData) {
//     return notFound();
//   }

//   if (
//     initialData._type === "modular.page" ||
//     initialData._type === "home" ||
//     initialData._type === "text.page"
//   ) {
//     return resolveSanityRouteMetadata(initialData, parent);
//   }
//   return {};
// }

// export default async function DynamicRoute(props: DynamicRouteProps) {
//   const params = await props.params;
//   const initialData = await loadPageByPathname({ params });
//   if (!initialData) return notFound();

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": initialData._type === "modular.page" ? "WebPage" : "TextPage", // Choose the type based on _type
//     headline: initialData.title,
//     description: initialData.seo?.description,
//     url: `${process.env.NEXT_PUBLIC_URL}${initialData?.pathname?.current}`,
//     mainEntityOfPage: {
//       "@type": initialData._type === "modular.page" ? "WebPage" : "TextPage",
//       "@id": `${process.env.NEXT_PUBLIC_URL}${initialData?.pathname?.current}`,
//     },
//     datePublished: initialData._createdAt,
//     dateModified: initialData._updatedAt,
//     author: {
//       "@type": "Person",
//       name: "Lake Country Coop Outdoors",
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "Lake Country Coop Outdoors",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://cdn.sanity.io/images/yjv1dlqm/production/145fff1d72f87d5106a1f232350e48c3d327f199-320x244.png",
//       },
//     },
//     image: {
//       "@type": "ImageObject",
//       url: initialData?.seo?.image?.asset?._ref
//         ? initialData?.seo?.image?.asset?._ref
//         : undefined,
//     },
//     articleBody: initialData?.seo?.description,
//     breadcrumb: {
//       "@type": "BreadcrumbList",
//       itemListElement: [
//         {
//           "@type": "ListItem",
//           position: 1,
//           name: "Home",
//           item: process.env.NEXT_PUBLIC_URL,
//         },
//         {
//           "@type": "ListItem",
//           position: 2,
//           name: initialData.title,
//           item: `${process.env.NEXT_PUBLIC_URL}${initialData?.pathname?.current}`,
//         },
//       ],
//     },
//     isAccessibleForFree: initialData.indexable,
//   };

//   switch (initialData._type) {
//     case "modular.page":
//     case "home":
//       return (
//         <>
//           <section
//             className={cn(initialData?.headerPadding && "pt-24")}
//           ></section>
//           <SectionsRenderer
//             {...{ fieldName: "body", sections: initialData.sections || [] }}
//           />
//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//           />
//         </>
//       );
//     case "text.page":
//       return (
//         <>
//           <TextPage data={initialData as NonNullable<TEXT_PAGE_QUERYResult>} />
//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//           />
//         </>
//       );
//     default:
//       return <div>Template not found</div>;
//   }
// }
