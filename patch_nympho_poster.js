const fs = require('fs');
const dataFile = 'utils/eroticRomanceMovieData.js';
let dataCode = fs.readFileSync(dataFile, 'utf8');

const posterRegex = /4478: "https:\/\/m\.media-amazon\.com\/images\/M\/MV5BNTI2MWZlNDAtNjVkMC00MDRmLTk2MGYtYjBhMTA4YjlkYmMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@\._V1_SX500\.jpg"/;
const posterReplace = `4478: "https://m.media-amazon.com/images/M/MV5BNTI2MWZlNDAtNjVkMC00MDRmLTk2MGYtYjBhMTA4YjlkYmMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX500.jpg",
        258216: "https://m.media-amazon.com/images/M/MV5BMTQ4Mzg4NjUwM15BMl5BanBnXkFtZTgwNTkzMjEwMDE@._V1_SX500.jpg"`;

if (dataCode.match(posterRegex)) {
    dataCode = dataCode.replace(posterRegex, posterReplace);
    fs.writeFileSync(dataFile, dataCode);
    console.log("Updated POSTERS successfully");
} else {
    console.log("Failed to match poster regex");
}
