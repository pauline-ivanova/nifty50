import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'guides');
const DEFAULT_LANG = 'en';

export function getGuidesByCategory(category: string) {
  const langDirectory = path.join(postsDirectory, DEFAULT_LANG);
  if (!fs.existsSync(langDirectory) || !fs.lstatSync(langDirectory).isDirectory()) {
    return [];
  }
  const fileNames = fs.readdirSync(langDirectory);

  const allGuidesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(langDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; excerpt: string; category: string; }),
    };
  });

  const filteredGuides = allGuidesData.filter(
    (guide) => guide.category.toLowerCase() === category.toLowerCase()
  );

  return filteredGuides;
}

export function getAllGuides() {
  const langDirectory = path.join(postsDirectory, DEFAULT_LANG);
  if (!fs.existsSync(langDirectory) || !fs.lstatSync(langDirectory).isDirectory()) {
    return [];
  }
  const fileNames = fs.readdirSync(langDirectory);

  const allGuidesData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const fullPath = path.join(langDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { title: string; excerpt: string; category: string; }),
    };
  });

  return allGuidesData;
}

export function getGuideData(slug: string) {
  const langDirectory = path.join(postsDirectory, DEFAULT_LANG);
  const fullPath = path.join(langDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    frontmatter: data as { title: string; excerpt: string; category: string; [key: string]: any },
    content,
  };
}
