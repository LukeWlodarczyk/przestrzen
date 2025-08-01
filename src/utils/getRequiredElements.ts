function getRequiredElements<T extends Element = HTMLElement>(
  selector: string,
  node: ParentNode = document,
): T[] {
  const elements = node.querySelectorAll<T>(selector);
  if (elements.length === 0) {
    throw new Error(`Missing required elements: ${selector}`);
  }
  return Array.from(elements);
}

export default getRequiredElements;
