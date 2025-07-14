function getRequiredElement<T extends HTMLElement>(
  selector: string,
  node: ParentNode = document,
): T {
  const el = node.querySelector<T>(selector);
  if (!el) throw new Error(`Missing required element: ${selector}`);
  return el;
}

export default getRequiredElement;
