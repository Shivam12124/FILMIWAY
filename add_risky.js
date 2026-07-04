const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, 'data', 'tmdbCache.json');
const data = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

data['tt0086200'] = {
    "tmdbId": 9346,
    "poster_path": "/10zAvExQz3aZ3w96jZtXn9YgS8u.jpg",
    "backdrop_path": "/6AIfX3dJzX3NlS7R4lQhA2g3V6X.jpg",
    "runtime": 99,
    "release_date": "1983-08-05",
    "overview": "A Chicago teenager turns his parents' house into a brothel to recover the money he lost after crashing his father's Porsche.",
    "ageRating": "R",
    "director": "Paul Brickman",
    "cast": [
        "Tom Cruise",
        "Rebecca De Mornay",
        "Joe Pantoliano"
    ],
    "budget": "$6,200,000",
    "revenue": "$63,500,000",
    "tagline": "Time of his life."
};

fs.writeFileSync(cachePath, JSON.stringify(data, null, 4));
console.log('Successfully updated tmdbCache.json');
