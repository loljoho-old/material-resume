# Changelog

**Note:** this section will only include MAJOR or MINOR version changes as per [Semantic Versioning](http://semver.org) i.e. given a version number X.Y.Z, increments in the numbers X or Y


## 0.8.0 (24-June 2015)

* Remove all remaining extraneous files and scripts from Yeoman scaffolding
* Create `TASKLIST.md`
* Create `CHANGELOG.md

## 0.7.0 (24-June 2015)

* Content Sections
* Moved to `md-sidenav.md-sidenav-left`:
  * Contact
  * Drives
  * Profiles
* Use `md-sidenav.md-sidenav-right` as actual navigation
* `git merge` into master

## 0.6.0 (24-June 2015)

* Navbar Directive
* Sidenav Directives
* Scss stylesheets
* Routing

## 0.5.0 (23-June 2015)

* Application restructuring in progress
* Page layout

## 0.4.0 (23-June 2015)

* Application structure and layout
  * Site toolbar
  * Right sidenav

## 0.3.0 (23-June 2015)

* Create Menu element for PDF download
* Implement toolbar and list elements

## 0.2.0 (23-June 2015)

* Implement data fetched from `assets/data/resume.json`
* Added `resume.json` to `.gitignore` for privacy reasons, i.e. personal information
* Create `md-sidenav.sidenav-left` element and use `resumeService` to fetch information
* Basic page content layout
* Update `README.md`

## 0.1.0 (22-June 2015)

* Application scaffold with Yeoman
* Git branch `develop`
* Replace `.gitignore` with custom file
* Create `resume` controller and data service
* Application configuration via `$mdThemingProvider`, `$mdIconProvider`, and `$stateProvider` routes
* Comment out boilerplate code