import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import { type Document } from "@contentful/rich-text-types";

const WORDS_PER_MINUTE = 225;

const timeToRead = (docuemnt: Document) => {
  const text = documentToPlainTextString(docuemnt);

  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / WORDS_PER_MINUTE);

  return time;
};

export default timeToRead;
