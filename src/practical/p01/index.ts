import axios from 'axios';

interface ApiPost {
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
    const { data } = await axios.get<ApiPost[]>(url);

    if (!data || data.length === 0) {
      return [];
    }

    const firstPost = data[0];
    const lastPost = data[data.length - 1];
    const edges = [firstPost, lastPost];

    return edges.map(({ id, title }) => ({
      id,
      title
    }));

  } catch (error) {
    throw error;
  }
};