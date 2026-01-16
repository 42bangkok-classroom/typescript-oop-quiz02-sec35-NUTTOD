import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface EdgePost {
  id: number;
  title: string;
}

export const getEdgePosts = async (): Promise<EdgePost[]> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get<Post[]>(url);

    if (data.length === 0) {
      return [];
    }

    const rawEdgePosts = [data[0], data[data.length - 1]];

    const result: EdgePost[] = rawEdgePosts.map((post) => ({
      id: post.id,
      title: post.title,
    }));

    return result;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.message}`);
    } else {
      throw error;
    }
  }
};