/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
import ejs from 'ejs';
import { readFile, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const root = path.dirname(new URL(import.meta.url).pathname);
const manifest = path.join(root, '..', 'plugin', 'manifest.json');
if (existsSync(manifest) || !process.stdout.isTTY) {
  console.log(
    `[UXP-STARTER-REACT] Skipping manifest generation${!process.stdout.isTTY ? ', no TTY' : ''}${
      existsSync(manifest) ? ', manifest exists' : ''
    }.`
  );
  process.exit(0);
}

console.log('[UXP-STARTER-REACT] First time manifest generation...');
const template = await readFile(path.join(root, '..', 'plugin', 'manifest.json.ejs'), 'utf-8');

const name = await new Promise(resolve => {
  rl.question('\tPlugin name (UXP React Starter): ', resolve);
});

const id = await new Promise(resolve => {
  rl.question('\tPlugin id (com.thejustinwalsh.plugin): ', resolve);
});

const label = await new Promise(resolve => {
  rl.question('\tPlugin menu label (React Starter): ', resolve);
});

const output = await ejs.render(template, {
  name: name || 'UXP Starter React',
  id: id || 'com.thejustinwalsh.plugin',
  label: label || 'React Starter',
});

await writeFile(manifest, output);
process.exit(0);
