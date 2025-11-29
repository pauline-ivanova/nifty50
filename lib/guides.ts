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
  try {
    const langDirectory = path.join(postsDirectory, DEFAULT_LANG);
    if (!fs.existsSync(langDirectory) || !fs.lstatSync(langDirectory).isDirectory()) {
      console.warn(`Guides directory not found: ${langDirectory}`);
      return [];
    }
    const fileNames = fs.readdirSync(langDirectory).filter(name => name.endsWith('.mdx'));

    const allGuidesData = fileNames.map((fileName) => {
      try {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(langDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          ...(matterResult.data as { title: string; excerpt: string; category: string; }),
        };
      } catch (error) {
        console.error(`Error reading guide file ${fileName}:`, error);
        return null;
      }
    }).filter((guide): guide is NonNullable<typeof guide> => guide !== null);

    return allGuidesData;
  } catch (error) {
    console.error('Error in getAllGuides:', error);
    return [];
  }
}

export function getGuideData(slug: string) {
  try {
    const langDirectory = path.join(postsDirectory, DEFAULT_LANG);
    const fullPath = path.join(langDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      console.warn(`Guide file not found: ${fullPath}`);
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as { title: string; excerpt: string; category: string; [key: string]: any },
      content,
    };
  } catch (error) {
    console.error(`Error reading guide data for slug ${slug}:`, error);
    return null;
  }
}
