import { STATIC_ROUTES } from "@routes";

type PaginationItem =
  | { type: "page"; value: number; isCurrent: boolean }
  | { type: "ellipsis" }
  | { type: "prev"; disabled: boolean }
  | { type: "next"; disabled: boolean };

export const generatePaginationItems = (
  currentPage: number,
  totalPages: number,
  range = 1,
): PaginationItem[] => {
  if (totalPages <= 1) return [];

  const pages = new Set<number>([1, totalPages]);

  const start = Math.max(2, currentPage - range);
  const end = Math.min(totalPages - 1, currentPage + range);
  const middleRange = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  for (const page of middleRange) pages.add(page);

  const sortedPages = Array.from(pages).sort((a, b) => a - b);

  const result: PaginationItem[] = [];
  let lastPage = 0;

  for (const page of sortedPages) {
    if (lastPage && page - lastPage > 1) {
      if (page - lastPage > 2) result.push({ type: "ellipsis" });
      else
        result.push({
          type: "page",
          value: lastPage + 1,
          isCurrent: lastPage + 1 === currentPage,
        });
    }

    result.push({ type: "page", value: page, isCurrent: page === currentPage });
    lastPage = page;
  }

  return [
    { type: "prev", disabled: currentPage === 1 },
    ...result,
    { type: "next", disabled: currentPage === totalPages },
  ];
};

export const generateBlogPaginationHref = (index: number) => {
  const page = index > 1 ? index : "";
  return `${STATIC_ROUTES.blog}/${page}`;
};
