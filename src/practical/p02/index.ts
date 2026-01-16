import axios from 'axios';

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostResult {
  id: number;
  title: string;
}

export const getPostsByUser = async (userId: number): Promise<PostResult[]> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get<ApiPost[]>(url);

    return data
      .filter((post) => post.userId === userId)
      .map(({ id, title }) => ({
        id,
        title
      }));

  } catch (error) {
    throw error;
  }
};