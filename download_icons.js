const fs = require('fs');
const https = require('https');
const path = require('path');

const icons = [
  { name: 'java', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png' },
  { name: 'python', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png' },
  { name: 'html5', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png' },
  { name: 'css3', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png' },
  { name: 'git', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png' },
  { name: 'react', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png' },
  { name: 'nodejs', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png' },
  { name: 'mongodb', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png' },
  { name: 'mysql', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png' },
  { name: 'javascript', url: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' }
];

const destDir = path.join(__dirname, 'public', 'images');

icons.forEach(icon => {
  const file = fs.createWriteStream(path.join(destDir, `${icon.name}.png`));
  https.get(icon.url, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
    } else {
      console.error(`Failed to download ${icon.name}, status: ${response.statusCode}`);
    }
  });
});
