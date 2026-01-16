import { getEdgePosts } from './p01';

(async () => {
  try {
    console.log("Fetching data...");
    
    const result = await getEdgePosts();

    console.log("Result:", JSON.stringify(result, null, 2));
    
  } catch (error) {
    console.error("Error:", error);
  }
})();