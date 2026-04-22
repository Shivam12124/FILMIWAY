const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '../data/tmdbCache.json');
let cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));

const manualTaglines = {
  // Failed fetches (ECONNRESET)
  "tt0109830": "Life is like a box of chocolates... you never know what you're gonna get.", // Forrest Gump
  "tt0169547": "Look closer.", // American Beauty
  "tt0078788": "The horror... the horror...", // Apocalypse Now
  "tt0105695": "It's a hell of a thing, killing a man.", // Unforgiven
  "tt0338013": "You can erase someone from your mind. Getting them out of your heart is another story.", // Eternal Sunshine

  // No tagline on TMDB
  "tt0071141": "Love is an act of rebellion.", // Ali: Fear Eats the Soul
  "tt0180093": "Reason is no match for addiction.", // Requiem for a Dream
  "tt0112818": "Every person is worth more than their worst act.", // Dead Man Walking
  "tt0254686": "A symphony of repression and desire.", // The Piano Teacher
  "tt0125659": "Open your eyes and question reality.", // Open Your Eyes
  "tt0383028": "The end is built into the beginning.", // Synecdoche, New York
  "tt1646971": "The training is over.", // How to Train Your Dragon 2
  "tt1441395": "Unknown. Unsuspecting. Under the skin.", // Under the Skin
  "tt0070644": "The devastating anatomy of love and loss.", // Scenes from a Marriage
  "tt1825157": "There's no room for two.", // The Double
  "tt1020072": "One dream can change the world.", // Selma
  "tt5715874": "An eye for an eye.", // The Killing of a Sacred Deer
  "tt5083738": "Absolute power. Absolute chaos.", // The Favourite
  "tt7160372": "The banality of evil.", // The Zone of Interest
  "tt7339248": "Fear is in the mind. Pain is in the body.", // The Art of Self-Defense
  "tt7798646": "Some love stories are meant to be remembered.", // The Photograph
  "tt8963708": "Dance to your own rhythm.", // And Then We Danced
  "tt10272386": "A mind losing its grip, a heart refusing to let go.", // The Father
  "tt10886166": "Desire takes over.", // 365 Days
  "tt13238346": "In another life, we could have been everything.", // Past Lives
  "tt13650540": "Love at the end of the universe.", // If You Were the Last
  "tt13833688": "A search for redemption.", // The Whale
  "tt14369780": "Love breaks all boundaries.", // Lady Chatterley's Lover
  "tt9660502": "The fragility of friendship.", // Close
  "tt18550182": "Fear is the oldest border.", // R.M.N.
  "tt13097932": "He saved 669 children. This is his story.", // One Life
  "tt15893750": "A vibrant South London romance.", // Rye Lane
  "tt30144839": "The fight never truly ends.", // One Battle After Another
  "tt30321095": "Healing takes center stage.", // Ghostlight
  "tt0120265": "A journey to the edge of life.", // Taste of Cherry
  "tt0115940": "Three women, one summer, endless choices.", // A Summer's Tale
  "tt0947798": "I just want to be perfect." // Black Swan
};

let updatedCount = 0;
for (const [imdbID, tagline] of Object.entries(manualTaglines)) {
    if (!cache[imdbID]) cache[imdbID] = {};
    cache[imdbID].tagline = tagline;
    updatedCount++;
    console.log(`✅ Patched tagline: "${tagline}"`);
}

fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2), 'utf8');
console.log(`\n🎉 Successfully injected ${updatedCount} manual taglines into tmdbCache.json!`);