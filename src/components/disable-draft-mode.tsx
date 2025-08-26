"use client";

import { useDraftModeEnvironment } from "next-sanity/hooks";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  const pathname = usePathname();

  if (
    (environment !== "live" && environment !== "unknown") ||
    pathname.includes("/studio")
  ) {
    return null;
  }

  return (
    <div className="fixed bottom-2 right-2 flex flex-row gap-0 z-[100]">
      <Link
        href={"/studio"}
        target="_blank"
        className=" bg-white border border-primary hover:bg-brandGrey animations rounded-sm px-2 py-1 text-sm rounded-r-none border-r-0"
      >
        <p>Go to Studio</p>
      </Link>
      <a
        href={`/api/disable-draft?currentSlug=${pathname}`}
        className=" bg-white border border-primary hover:bg-brandGrey animations rounded-sm px-2 py-1 text-sm rounded-l-none"
      >
        Exit Preview
      </a>
    </div>
  );
}
