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

export const getEdgePosts = async (id: number): Promise<EdgePost[]> => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get<ApiPost[]>(url);

    return data
      .filter((post) => post.id === id)
      .map(({id, title}) => ({
        id,
        title
      }));

  } catch (error) {
    throw error;
  }
};