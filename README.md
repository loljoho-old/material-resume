# Paper Résumé

Front-End Web Developer résumé application by Jonathan Ho

## Overview

> In an effort to showcase the skills of a Front-End Developer, I decided to create a simple AngularJS single-page application in lieu of/in addition to your typical curriculum vitae or résumé.  
> 
> While the application itself is simple in nature, the development process displays proficiency in a number of tools, concepts, and technologies such as: 
> 
> * AngularJS and third-party modules
> * Git and GitHub 
> * Gulp task automation
> * E2E and Unit Testing
> * Semantic Versioning
> * Overall understanding of the software release life cycle
> 
> Additionally, the rapid production of this application, from its inception to its release, aims to showcase my current prowess as well as my potential when it comes to delivering viable real-world code.
>
> I hope this repository succeeds in what I set out to accomplish, i.e. further establishing my qualifications in the candidacy of a (Front-End) Web Developer position.
> 
> Yours Truly,
>
> Jonathan Ho


## Development

This project is an AngularJS single-page web application featuring featuring `ngAnimate`, `ngAria`, `ngMaterial`, `ngResource`, and the third-party `ui-router`.  

The [Yeoman](http://yeoman.io) generator [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) was used to quickly scaffold a full feature [Gulp](gulpjs.com)-based application development environment due to time constraints.


## Design

While taking into consideration the extremely short period of time in which this application was developed, a number of key design elements and concepts were prioritised above all else:

 * Implement a **Mobile-Friendly**, **Cross-Platform/Browser** user interface accomplished through **Responsive Web Design** and **Progressive Enhancement** over Graceful Degradation, ensuring a consistent user experience that supports all modern platforms and browsers--support of the latter being *N* And *N-1*.


*Section Work In Progress*


## Features

* [AngularJS](https://angularjs.org)
* [Material design for AngularJS](https://material.angularjs.org)

* [Google Fonts](https://www.google.com/fonts)
* [Material design icons](http://google.github.io/material-design-icons/)
* [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icons

* [GulpJS](http://gulpjs.com)
* [Browser-Sync](http://browsersync.io/)
* [Yeoman](http://yeoman.io)
* Yeoman [Gulp-Angular](https://github.com/Swiip/generator-gulp-angular) generator


## Miscellaneous

*Section Work In Progress*


## Tasklist

**Content**

 - [ ] **Home**
   - [ ] **Summary**
   - [ ] **Profile**
   - [ ] **Ongoing**
 - [ ] **Skills**
   - [ ] **Solution Stack**
   - [ ] **Areas of Expertise**
   - [ ] **Technical Skills** 
   - [ ] **Proficiencies**
 - [ ] **Experience**
   - [ ] **Projects** - Portfolio
   - [ ] **Employment** - Work History
   - [ ] **Education** - Professional Development; Education
 - [ ] **Résumé**


**Responsive**

 - [ ] Toggle button for left `md-sidenav`
 - [ ] Toggle button for right `md-sidenav`

**Controllers**

 - [ ] Function `navigateTo()` for external links

**Stylesheet**

 - [ ] Tidy `index.scss` and prune

**Markup**

 - [ ] Add `aria-label` to buttons
 - [ ] Fix all `z-index` values
 - [x] Create `md-sidenav.sidenav-right` element
 - [x] Configure router for page content to load within main element in `resume.html`


## Version History

**Note:** this section will only include MAJOR or MINOR version changes as per [Semantic Versioning](http://semver.org) i.e. given a version number X.Y.Z, increments in the numbers X or Y

### 0.6.0 (24-June 2015)

* Navbar Directive
* Sidenav Directives
* Scss stylesheets
* Routing

### 0.5.0 (23-June 2015)

* Application restructuring in progress
* Page layout

### 0.4.0 (23-June 2015)

* Application structure and layout
  * Site toolbar
  * Right sidenav

### 0.3.0 (23-June 2015)

* Create Menu element for PDF download
* Implement toolbar and list elements

### 0.2.0 (23-June 2015)

* Implement data fetched from `assets/data/resume.json`
* Added `resume.json` to `.gitignore` for privacy reasons, i.e. personal information
* Create `md-sidenav.sidenav-left` element and use `resumeService` to fetch information
* Basic page content layout
* Update `README.md`

### 0.1.0 (22-June 2015)

* Application scaffold with Yeoman
* Git branch `develop`
* Replace `.gitignore` with custom file
* Create `resume` controller and data service
* Application configuration via `$mdThemingProvider`, `$mdIconProvider`, and `$stateProvider` routes
* Comment out boilerplate code