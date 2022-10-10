import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

type DocContent = {
  [key: string]: string;
  content: string;
};

const privacyPolicyFile = join(process.cwd(), "docs/privacy_poricy.md");
const termOfUseFile = join(process.cwd(), "docs/privacy_poricy.md");

export const getPrivacyPolicy = (): DocContent => {
  const contents = fs.readFileSync(privacyPolicyFile, "utf8");
  const { data, content } = matter(contents);

  const doc: DocContent = { content: content };
  for (const k in data) {
    doc[k] = data[k];
  }

  return doc;
};

export const getTermOfUse = (): DocContent => {
  const contents = fs.readFileSync(termOfUseFile, "utf8");
  const { data, content } = matter(contents);

  const doc: DocContent = { content: content };
  for (const k in data) {
    doc[k] = data[k];
  }

  return doc;
};
