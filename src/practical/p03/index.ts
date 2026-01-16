import axios from 'axios';

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface PostWithCount {
  postId: number;
  title: string;
  totalComments: number;
}

export const mapPostWithCommentCount = async (): Promise<PostWithCount[]> => {
  try {
    const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

    const [postsRes, commentsRes] = await Promise.all([
      axios.get<ApiPost[]>(postsUrl),
      axios.get<ApiComment[]>(commentsUrl)
    ]);

    const posts = postsRes.data;
    const comments = commentsRes.data;

    if (!posts || posts.length === 0) {
      return [];
    }

    const commentCounts: Record<number, number> = {};

    comments.forEach((comment) => {
      if (commentCounts[comment.postId]) {
        commentCounts[comment.postId]++;
      } else {
        commentCounts[comment.postId] = 1;
      }
    });

    return posts.map((post) => ({
      postId: post.id,
      title: post.title,

      totalComments: commentCounts[post.id] || 0
    }));

  } catch (error) {
    throw error;
  }
};