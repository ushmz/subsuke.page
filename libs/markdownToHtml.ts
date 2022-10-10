import { marked } from "marked";

function createLinkRenderer() {
  const renderer = new marked.Renderer();

  // To generate ToC by `tocbot`, we need to set heading text as id
  renderer.heading = (text, level, raw, slugger) => {
    switch (level) {
      case 1:
        return `<h1 id="${text}">${text}</h1>`;
      case 2:
        return `<h2 id="${text}">${text}</h2>`;
      case 3:
        return `<h3 id="${text}">${text}</h3>`;
      case 4:
        return `<h4 id="${text}">${text}</h4>`;
      case 5:
        return `<h5 id="${text}">${text}</h5>`;
      case 6:
        return `<h6 id="${text}">${text}</h6>`;
    }
  };

  return { renderer };
}

export default async function markdownToHtml(markdown: string) {
  marked.use(createLinkRenderer());
  const content = marked(markdown).toString();
  return { content };
}
