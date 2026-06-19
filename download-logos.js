const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const logos = {
  'hulu.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/hulu.svg',
  'hbo-max.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/hbomax.svg',
  'paramount-plus.svg': 'https://raw.githubusercontent.com/simple-icons/simple-icons/master/icons/paramountplus.svg',
  'peacock.svg': 'https://upload.wikimedia.org/wikipedia/commons/5/5f/NBCUniversal_Peacock_Logo_%282020%E2%80%932026%29.svg'
};

const options = (url) => ({
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  }
});

Object.entries(logos).forEach(([filename, url]) => {
  const filePath = path.join(dir, filename);
  
  const download = (targetUrl) => {
    https.get(targetUrl, options(targetUrl), (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        download(response.headers.location);
        return;
      }
      
      if (response.statusCode !== 200) {
        console.error(`Failed to download ${filename}: Status code ${response.statusCode}`);
        return;
      }

      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Successfully downloaded ${filename}`);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${filename}:`, err.message);
    });
  };

  download(url);
});
