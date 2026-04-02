const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');

// Grab all the data files (Data.js files only)
const files = fs.readdirSync(utilsDir).filter(file => file.endsWith('Data.js'));

let updatedCount = 0;

files.forEach(file => {
  const filePath = path.join(utilsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // 1. Fix the "sex vs sexual content" swallowing bug
  content = content.replace(
    /if\s*\(\s*lowerType\.includes\('sex'\)\s*\|\|\s*lowerType\.includes\('explicit'\)\s*\)\s*types\.add\('sexual content'\);/g,
    `if (lowerType.includes('sexual content')) types.add('sexual content');\n        else if (lowerType.match(/\\bsex\\b/)) types.add('sex');\n        else if (lowerType.includes('explicit')) types.add('explicit content');`
  );

  // 2. Inject the intelligent Schema logic (Filtering out suggestive clothing)
  if (!content.includes('const familyFaqSchema')) {
      content = content.replace(
          /const startTimesList = heavyScenes\.map\(s => s\.start\)\.join\(', '\);\s*schemaFaqs\.unshift\(/,
          `const startTimesList = heavyScenes.map(s => s.start).join(', ');\n\n        // Filter out suggestive clothing to determine if it's truly unsafe for family\n        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');\n        const familyUnsafeString = familyUnsafeTypes.join(' and ');\n\n        const familyFaqSchema = familyUnsafeTypes.length > 0 \n            ? {\n                '@type': 'Question',\n                'name': \`Is \${movie.Title} safe to watch with family?\`,\n                'acceptedAnswer': {\n                    '@type': 'Answer',\n                    'text': \`No. \${movie.Title} is not safe to watch with family because it contains \${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all \${sceneCount} scenes in the \${currentRuntime} runtime.\`\n                }\n            }\n            : {\n                '@type': 'Question',\n                'name': \`Is \${movie.Title} safe to watch with family?\`,\n                'acceptedAnswer': {\n                    '@type': 'Answer',\n                    'text': \`Yes, regarding explicit sexual content. Filmiway editors have manually verified that \${movie.Title} does not have any sex, nudity, or sexual content in the full \${currentRuntime} runtime.\`\n                }\n            };\n\n        schemaFaqs.unshift(`
      );
  }

  // 3. Remove the old dumb Schema question and replace it with our new smart variable
  content = content.replace(
      /\{\s*'@type':\s*'Question',\s*'name':\s*`Is \$\{movie\.Title\} safe to watch with family\?`,\s*'acceptedAnswer':\s*\{\s*'@type':\s*'Answer',\s*'text':\s*`No\.\s*\$\{movie\.Title\}\s*contains[\s\S]*?`\s*\}\s*\}/g,
      'familyFaqSchema'
  );

  // 4. Inject the intelligent UI logic (For humans reading the page)
  if (!content.includes('const familyFaqUI')) {
      content = content.replace(
          /const startTimesList = heavyScenes\.map\(s => s\.start\)\.join\(', '\);\s*staticFaqs\.unshift\(/,
          `const startTimesList = heavyScenes.map(s => s.start).join(', ');\n\n        // Filter out suggestive clothing for the UI as well\n        const familyUnsafeTypes = typesArray.filter(t => t !== 'suggestive clothing');\n        const familyUnsafeString = familyUnsafeTypes.join(' and ');\n\n        const familyFaqUI = familyUnsafeTypes.length > 0\n            ? {\n                question: \`Is \${movieTitle} safe to watch with family?\`,\n                answer: \`No. \${movieTitle} is not safe to watch with family because it contains \${familyUnsafeString}. Adults can use Filmiway's timestamps to skip all \${sceneCount} scenes in the \${finalRuntime} runtime.\`\n            }\n            : {\n                question: \`Is \${movieTitle} safe to watch with family?\`,\n                answer: \`Yes, regarding explicit sexual content. Filmiway editors have manually verified that \${movieTitle} does not have any sex, nudity, or sexual content in the full \${finalRuntime} runtime.\`\n            };\n\n        staticFaqs.unshift(`
      );
  }

  // 5. Remove the old dumb UI question and replace it with our new smart variable
  content = content.replace(
      /\{\s*question:\s*`Is \$\{movieTitle\} safe to watch with family\?`,\s*answer:\s*`No\.\s*\$\{movieTitle\}\s*contains[\s\S]*?`\s*\}/g,
      'familyFaqUI'
  );

  // 6. Update the generic "Clean Movie" fallbacks to sound more authoritative (Schema)
  content = content.replace(
      /Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the \$\{currentRuntime\} runtime\./g,
      `Filmiway editors have manually verified that \${movie.Title} does not have any sex, nudity, or sexual content in the full \${currentRuntime} runtime.`
  );

  // 7. Update the generic "Clean Movie" fallbacks to sound more authoritative (UI)
  content = content.replace(
      /Filmiway has confirmed 0 scenes of nudity, sexual content, or explicit scenes in the \$\{finalRuntime\} runtime\./g,
      `Filmiway editors have manually verified that \${movieTitle} does not have any sex, nudity, or sexual content in the full \${finalRuntime} runtime.`
  );

  // Write back to the file if changes were made
  if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated FAQ Logic in: ${file}`);
      updatedCount++;
  }
});

console.log(`\n🎉 Process completed! Successfully upgraded FAQs in ${updatedCount} data files.`);