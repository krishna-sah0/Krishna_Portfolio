const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

function parseFrontmatter(fileContent) {
  const file = matter(fileContent);
  return {
    metadata: file.data,
    content: file.content,
  };
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function generatePostsJson() {
  const dir = path.join(__dirname, '../src/features/blog/content');
  if (!fs.existsSync(dir)) {
    console.warn("Blog content directory not found at", dir);
    return;
  }
  
  const mdxFiles = getMDXFiles(dir);

  const posts = mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });

  const outputPath = path.join(__dirname, '../src/features/blog/data/posts.json');
  fs.writeFileSync(outputPath, JSON.stringify(posts, null, 2));
  console.log(`Generated posts.json with ${posts.length} posts.`);
}

generatePostsJson();
