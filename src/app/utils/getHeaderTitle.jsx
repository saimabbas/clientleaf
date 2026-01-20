import { navItems } from "../config/navigation";


export function getHeaderTitle(pathname) {
  for (const category of navItems) {
    for (const item of category.items) {
      if (
        pathname === item.path ||
        pathname.startsWith(`${item.path}/`)
      ) {
        return item.name;
      }
    }
  }
  return "";
}