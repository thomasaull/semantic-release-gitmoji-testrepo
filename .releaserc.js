const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);

const TEMPLATE_DIR = path.join(__dirname, "config");
console.log(TEMPLATE_DIR);

module.exports = {
  plugins: [
    "semantic-release-gitmoji",
    {
      releaseNotes: {
        template: readFileAsync(
          path.join(TEMPLATE_DIR, "default-template.hbs")
        ),
        partials: {
          commitTemplate: readFileAsync(
            path.join(TEMPLATE_DIR, "commit-template.hbs")
          )
        }
      }
    },
    "@semantic-release/changelog"
  ]
};
