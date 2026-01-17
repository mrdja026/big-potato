#!/usr/bin/env node

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Supabase configuration
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Destination directory
const BLOG_CONTENT_DIR = path.resolve(__dirname, 'src/content/blog');

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceRoleKey) {
  console.error('Error: Missing Supabase configuration in .env file');
  console.error('Please add SUPABASE_URL, SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY to your .env file');
  process.exit(1);
}

// Create Supabase client (using service role key for full access)
const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

async function fetchBlogPosts() {
  try {
    console.log('Connecting to Supabase...');
    
    // Fetch all blog posts from storage (assuming posts are in a "blog" bucket)
    const { data: files, error: listError } = await supabase.storage
      .from('blog-media')
      .list('', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' }
      });

    if (listError) {
      throw new Error(`Failed to list files: ${listError.message}`);
    }

    if (!files || files.length === 0) {
      console.log('No blog posts found in storage');
      return;
    }

    console.log(`Found ${files.length} files in blog-media storage`);

    // Ensure destination directory exists
    if (!fs.existsSync(BLOG_CONTENT_DIR)) {
      fs.mkdirSync(BLOG_CONTENT_DIR, { recursive: true });
    }

    // Download each file
    for (const file of files) {
      console.log(`Downloading: ${file.name}`);

      const { data: fileData, error: downloadError } = await supabase.storage
        .from('blog-media')
        .download(file.name);

      if (downloadError) {
        console.error(`Failed to download ${file.name}: ${downloadError.message}`);
        continue;
      }

      // Convert ArrayBuffer to Buffer
      const buffer = Buffer.from(await fileData.arrayBuffer());

      // Determine file destination path
      let destPath;
      
      if (file.name.endsWith('.md') || file.name.endsWith('.mdx')) {
        // Markdown files go directly into blog directory
        destPath = path.join(BLOG_CONTENT_DIR, file.name);
      } else {
        // Media files (images, etc.) go into a single prod directory
        const mediaDir = path.join(BLOG_CONTENT_DIR, 'prod');
        if (!fs.existsSync(mediaDir)) {
          fs.mkdirSync(mediaDir, { recursive: true });
        }
        destPath = path.join(mediaDir, file.name);
      }

      // Write file to disk
      fs.writeFileSync(destPath, buffer);
      console.log(`Saved to: ${destPath}`);
    }

    console.log('\n✅ Blog posts downloaded successfully!');
    
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    process.exit(1);
  }
}

// Run the script
fetchBlogPosts();
