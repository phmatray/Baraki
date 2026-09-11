// Injecte le mode baraki (SKILL.md sans son frontmatter) comme contexte de session.
const fs = require('fs');
const path = require('path');

const skill = fs.readFileSync(path.join(__dirname, '..', 'skills', 'baraki', 'SKILL.md'), 'utf8');
process.stdout.write(skill.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, ''));
