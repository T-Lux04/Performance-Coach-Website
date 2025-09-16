import fs from 'fs';
import path from 'path';
import url from 'url';
import { query } from '../db/index.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const files = fs.readdirSync(__dirname)
    .filter((f) => /^\d+_.*\.sql$/.test(f))
    .sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(__dirname, file), 'utf8');
    console.log(`Running migration: ${file}`);
    await query(sql);
  }
  console.log('Migrations complete');
}

run().catch((err) => {
  console.error('Migration failed', err);
  process.exit(1);
});
