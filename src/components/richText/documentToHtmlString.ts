import {
  type Document,
  type Text,
  type Block,
  type Inline,
} from "@contentful/rich-text-types";

type RenderMarkCallback = (text: string) => Promise<string>;

type RenderNodeCallback = (
  node: Block | Inline,
  next: (nodes: (Block | Inline | Text)[]) => Promise<string>,
) => Promise<string>;

type RenderMark = Record<string, RenderMarkCallback>;
type RenderNode = Record<string, RenderNodeCallback>;

export interface Options {
  renderMark: RenderMark;
  renderNode: RenderNode;
}

const documentToHtmlString = async (document: Document, options: Options) => {
  if (!document || !document.content) {
    return "";
  }

  const next = async (nodes: (Block | Inline | Text)[]): Promise<string> => {
    const renderedNodes = await Promise.all(
      nodes.map((node) => renderNode(node)),
    );
    return renderedNodes.join("");
  };

  const renderNode = async (node: Block | Inline | Text) => {
    if (options.renderNode && options.renderNode[node.nodeType]) {
      const result = options.renderNode[node.nodeType](
        node as Block | Inline,
        next,
      );
      return Promise.resolve(result);
    }

    if (node.nodeType === "text") {
      let text = node.value;
      if (node.marks.length > 0 && options.renderMark) {
        for (const mark of node.marks) {
          if (options.renderMark[mark.type]) {
            const markResult = options.renderMark[mark.type](text);
            text = await Promise.resolve(markResult);
          } else {
            const errMessage = getMissingRendererErrorMessage(mark.type);
            console.error(errMessage);
            throw new Error(errMessage);
          }
        }
      }
      return text;
    }
    const errMessage = getMissingRendererErrorMessage(node.nodeType);
    console.error(errMessage);
    throw new Error(errMessage);
  };

  return next(document.content);
};

const getMissingRendererErrorMessage = (type: string) =>
  `Renderer for node type "${type}" not found. You must define a custom renderer for this type.`;

export default documentToHtmlString;
