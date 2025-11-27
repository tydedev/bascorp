export function getBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { name: decodeURIComponent(segment), href };
  });

  return breadcrumbs;
}
