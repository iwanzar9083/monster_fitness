import { existsSync, statSync } from 'fs';
import { join } from 'path';

const serverBuildPath = join(process.cwd(), 'dist/server/production.mjs');
const sourcemapPath = join(process.cwd(), 'dist/server/production.mjs.map');

console.log('🔍 Checking server build...');

if (existsSync(serverBuildPath)) {
  const stats = statSync(serverBuildPath);
  console.log('✅ Server build ready!');
  console.log(`📁 File: ${serverBuildPath}`);
  console.log(`📊 Size: ${(stats.size / 1024).toFixed(2)} KB`);
  console.log(`🕒 Modified: ${stats.mtime.toLocaleString()}`);
  
  if (existsSync(sourcemapPath)) {
    console.log('✅ Source map available');
  }
} else {
  console.log('❌ Server build not found. Run: npm run build:server');
}