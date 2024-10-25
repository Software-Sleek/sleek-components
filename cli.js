// #!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Component templates directory (you can change this to your setup)
const templatesDir = path.join(__dirname, 'src');
const sleekUiDir = path.join(process.cwd(), 'sleek-ui');

// Component installation function
function installComponent(componentName) {
  const componentFile = path.join(templatesDir, `${componentName}.js`);
  const destinationDir = path.join(sleekUiDir, componentName);
  const destinationFile = path.join(destinationDir, `${componentName}.js`);

  if (!fs.existsSync(componentFile)) {
    console.error(`Component "${componentName}" not found.`);
    process.exit(1);
  }

  if (!fs.existsSync(sleekUiDir)) {
    fs.mkdirSync(sleekUiDir);
  }

  if (!fs.existsSync(destinationDir)) {
    fs.mkdirSync(destinationDir);
  }

  // Copy the component file
  fs.copyFileSync(componentFile, destinationFile);
  console.log(`${componentName} component installed.`);

  // Add export to sleek-ui/index.js
  const indexFile = path.join(sleekUiDir, 'index.js');
  const exportStatement = `export { default as ${componentName} } from './${componentName}/${componentName}';\n`;

  fs.appendFileSync(indexFile, exportStatement, 'utf8');
  console.log(`Export added to sleek-ui/index.js for ${componentName}`);
}

// CLI logic
const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

if (command === 'add' && componentName) {
  installComponent(componentName);
} else {
  console.error('Usage: npx sleek-components add <ComponentName>');
  process.exit(1);
}
