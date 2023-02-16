export default function PostCard({ post }) {
  return (
    <div>
      BlogCategory
      {post.BlogCategory}<br/>
      {post.BlogTopic}
      {post.BlogTitle}
      {post.BlogContent}
      {post.BlogAddedBy}
      {post.BlogAddedDate}
    </div>
  );
}
