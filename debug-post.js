import { getCollection } from 'astro:content';

async function debug() {
  try {
    const posts = await getCollection('blog');
    console.log('Number of posts:', posts.length);
    
    if (posts.length > 0) {
      const firstPost = posts[0];
      console.log('Post properties:', Object.keys(firstPost));
      
      console.log('\n=== Post data ===');
      console.log(firstPost.data);
      
      if (firstPost.body) {
        console.log('\n=== Post body (first 200 chars) ===');
        console.log(firstPost.body.substring(0, 200));
      }
      
      if (firstPost.rendered) {
        console.log('\n=== Post rendered ===');
        console.log(firstPost.rendered);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

debug();
