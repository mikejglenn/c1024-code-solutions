# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  `NPM stands for Node Package Manager, and it's a free, open-source registry and tool for JavaScript software packages.`

- What is a package?
  `Package format is a type of archive containing computer programs and additional metadata needed by package managers; an instance of this type of archive is called a package.`

- What are some other popular package managers?
  `apt, yum, pacman`

- How can you create a `package.json` with `npm`?
  `npm init`

- What is a dependency and how do you add one to a package?
  `A dependency is a package used by the application. You can add dependencies to a package.json file from the command line (npm install) or by manually editing the package.json file.`

- What happens when you add a dependency to a package with `npm`?
  `When someone installs an npm package, the dependencies of that package will also be installed.`

- What is a devDependency and how do you add one to a package?
  `A "devDependency" is a package that is only needed during the development phase of a project, like testing frameworks or code linters, and is not required for the application to run in production. Use npm install <package_name> --save-dev`

- How do you define and run `npm` scripts? Why are these useful?
  `Scripts are defined in the scripts object of the package.json. They can be run with npm run script. Scripts are often used to make command development commands available without the need to remember or type long arguments, and to share them across the team.`

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
