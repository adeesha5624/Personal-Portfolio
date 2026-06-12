import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync(path.resolve('./dist/index.html'), 'utf8');

const dom = new JSDOM(html, {
  url: 'http://localhost/',
  runScripts: 'dangerously',
  resources: 'usable',
});

dom.window.addEventListener('error', (event) => {
  console.error('JSDOM Error:', event.error);
});

setTimeout(() => {
  const rootContent = dom.window.document.getElementById('root').innerHTML;
  console.log('Root innerHTML length:', rootContent.length);
  if (rootContent.length < 50) {
    console.log('Root content:', rootContent);
    console.log('Body:', dom.window.document.body.innerHTML);
  } else {
    console.log('App successfully rendered with length:', rootContent.length);
  }
  // eslint-disable-next-line no-undef
  process.exit(0);
}, 2000);
