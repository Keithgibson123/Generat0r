// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//should run two different types of license
function renderLicenseLink(license) {
  if (license === 'CC--0') {
    return `https://creativecommons.org/licenses/by-nd/4.0` 
  }
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This is under the ${license} license.`
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
by $(data.name)
$(renderLicenseBadge(data.license))


## Table of contents
[Description](#description)
${renderLicenseLink(data.license)}


## Description
${data.description}


## Contact-Me
Name - ${data.name}
email - ${data.email}

`;
}

module.exports = generateMarkdown;
