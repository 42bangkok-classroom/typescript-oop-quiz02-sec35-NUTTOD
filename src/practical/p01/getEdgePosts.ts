import axios from 'axios';

async function getEdgePosts(): Promise<{ id: number; title: string }[]> {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;
    if (posts.length === 0) {
      return [];
    } else if (posts.length === 1) {
      return [
        { id: posts[0].id, title: posts[0].title },
        { id: posts[0].id, title: posts[0].title }
      ];
    } else {
      return [
        { id: posts[0].id, title: posts[0].title },
        { id: posts.at(-1).id, title: posts.at(-1).title }
      ];
    }
  } catch (error) {
    throw error;
  }
}

(async () => {
  console.log(JSON.stringify(await getEdgePosts(), null, 2));
})();