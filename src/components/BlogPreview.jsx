import { Link } from 'react-router-dom';

const posts = [
{
id: 1,
title: "Building My Portfolio",
excerpt: "Lessons learned while designing and coding my personal website.",
category: "Web Development"
},
{
id: 2,
title: "Learning React",
excerpt: "My experience moving from vanilla JavaScript to React.",
category: "Frontend"
},
{
id: 3,
title: "Career Growth in Tech",
excerpt: "Balancing technical growth, leadership, and lifelong learning.",
category: "Career"
},
{
id: 4,
title: "My AI Experiments",
excerpt: "Exploring AI tools in software development workflows.",
category: "AI"
},
];

export default function BlogPreview() {
return (
<div>
  <h2>Latest Articles</h2>

  <p>Thoughts on software developemnt, AT, design, and personal growth.</p>

  <div className="blog-grid">
    {posts.map(post => (
      <Link key={post.id} to="/blog" className="blog-card">
        <div className="blog-image-placeholder">Coming Soon</div>

        <div className="category">
          {post.category}
        </div>

        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>

        <span>Read More →</span>
    </Link>
  ))}
</div>

<div className="blog-preview-footer">
  <Link to="/blog" className="view-all-btn"> View All Posts → </Link>
</div>
</div>
);
}
