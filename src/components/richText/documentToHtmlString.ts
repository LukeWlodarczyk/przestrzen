import {
  type Document,
  type Text,
  type Block,
  type Inline,
  BLOCKS,
  INLINES,
} from "@contentful/rich-text-types";

export type NodeType = BLOCKS | INLINES | "text";

type RenderMarkCallback = (text: string) => Promise<string>;

interface RenderNodeContext {
  prevNode: Block | Inline | Text;
  nextNode: Block | Inline | Text;
}

type RenderNodeCallback = (
  node: Block | Inline,
  next: (nodes: (Block | Inline | Text)[]) => Promise<string>,
  context: RenderNodeContext,
) => Promise<string>;

type RenderMark = Record<string, RenderMarkCallback>;
type RenderNode = Record<string, RenderNodeCallback>;

export interface Options {
  renderMark: RenderMark;
  renderNode: RenderNode;
}

const createNodeContext = (
  nodes: (Block | Inline | Text)[],
  index: number,
): RenderNodeContext => ({
  prevNode: nodes[index - 1] || null,
  nextNode: nodes[index + 1] || null,
});

const documentToHtmlString = async (document: Document, options: Options) => {
  if (!document || !document.content) {
    return "";
  }

  const next = async (nodes: (Block | Inline | Text)[]): Promise<string> => {
    const renderedNodes = await Promise.all(
      nodes.map((node, index) => {
        const context = createNodeContext(nodes, index);

        return renderNode(node, context);
      }),
    );

    return renderedNodes.join("");
  };

  const renderNode = async (
    node: Block | Inline | Text,
    context: RenderNodeContext,
  ) => {
    if (options.renderNode && options.renderNode[node.nodeType]) {
      const result = options.renderNode[node.nodeType](
        node as Block | Inline,
        next,
        context,
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

export const includesNodeType = (nodeType: NodeType, nodeTypes: NodeType[]) =>
  nodeTypes.includes(nodeType);

export default documentToHtmlString;
