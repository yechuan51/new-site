import { getAboutPageMarkdown } from "@/lib/fs/fs";
import MarkdownContent from "@/components/markdown/markdownContent";

const ABOUT_PAGE_PATH = ["public", "content", "about", "about.md"];

const AboutPage = async () => {
  const data = await getAboutPageMarkdown(ABOUT_PAGE_PATH);
  if ("error" in data) {
    throw Error(data.error);
  }
  const content = data.content;

  return (
    <main>
      <MarkdownContent content={content} />
    </main>
  );
};

export default AboutPage;
