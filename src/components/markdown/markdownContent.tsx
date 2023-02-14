import { NextPage } from "next";
import ReactMarkdown from "react-markdown";

export type MarkdownContentMetadataType = {
  title: string;
};

export type MarkdownContentPropsType = {
  content: string;
  metadata?: Partial<MarkdownContentMetadataType>;
};

const MarkdownContent: NextPage<MarkdownContentPropsType> = ({
  content,
  metadata,
}) => {
  return (
    <div>
      {metadata && metadata.title && <h1>{metadata.title}</h1>}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownContent;
