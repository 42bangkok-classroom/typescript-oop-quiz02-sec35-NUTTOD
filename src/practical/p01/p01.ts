import axios from "axios";

interface EdgePost {
  id: number;
  title: string;
}

export const getEdgePosts = async (): Promise<EdgePost[]> => {
  try {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const { data } = await axios.get(url);

    if (!data || data.length === 0) {
      return [];
    }

    const firstPost = data[0];
    const lastPost = data[data.length - 1];

    const result: EdgePost[] = [
      { id: firstPost.id, title: firstPost.title },
      { id: lastPost.id, title: lastPost.title },
    ];

    return result; 

  } catch (error) {
    throw error;
  }
};