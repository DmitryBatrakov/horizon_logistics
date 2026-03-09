import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

type RouterWithPush = { push: (href: string) => void };

export const handleNavigateToSection = (sectionId: string, pathname: string, router: RouterWithPush) => {
  if (pathname === "/") {
      const element = document.getElementById(sectionId);

      if (element) {
          element.scrollIntoView({
              behavior: "smooth",
              block: "start",
          });
      }

      return;
  }

  sessionStorage.setItem("scrollToSection", sectionId);
  router.push("/");
};