import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  readTime: string;
  content: string;
}

const contentDirectory = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Simple frontmatter parser
      const match = fileContents.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
      let title = slug;
      let date = '';
      let excerpt = '';
      let author = 'Andrés E. Parilli';
      let tags: string[] = [];
      let readTime = '5 min';
      let content = fileContents;

      if (match) {
        const frontmatter = match[1];
        content = match[2];

        frontmatter.split('\n').forEach((line) => {
          const colonIndex = line.indexOf(':');
          if (colonIndex > -1) {
            const key = line.slice(0, colonIndex).trim();
            let value = line.slice(colonIndex + 1).trim();
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.slice(1, -1);
            }
            if (key === 'title') title = value;
            if (key === 'date') date = value;
            if (key === 'excerpt') excerpt = value;
            if (key === 'author') author = value;
            if (key === 'readTime') readTime = value;
            if (key === 'tags') {
              try {
                tags = JSON.parse(value);
              } catch {
                tags = value.split(',').map((t) => t.trim());
              }
            }
          }
        });
      }

      return {
        slug,
        title,
        date,
        excerpt,
        author,
        tags,
        readTime,
        content,
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}
