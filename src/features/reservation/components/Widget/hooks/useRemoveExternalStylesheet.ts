import { useEffect } from "react";

const useRemoveExternalStylesheet = (href: string) => {
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (
            node.nodeType === Node.ELEMENT_NODE &&
            (node as HTMLElement).tagName === "LINK"
          ) {
            const link = node as HTMLLinkElement;
            if (link.rel === "stylesheet" && link.href.includes(href)) {
              link.remove();
            }
          }
        });
      });
    });

    observer.observe(document.body, { childList: true });

    return () => observer.disconnect();
  }, [href]);
};

export default useRemoveExternalStylesheet;
