# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for Sleepwalking Dev LLC (sleepwalking.dev) - a personal portfolio and blog site. The site uses pure HTML, CSS, and vanilla JavaScript without any build tools or frameworks.

## Development Environment

**No Build System**: This project doesn't use npm, webpack, or any build tools. All files are hand-coded and served directly.

**No Package Manager**: No package.json exists. Dependencies are loaded via CDN (Google Fonts, Material Symbols).

**No Testing Framework**: No automated tests are configured.

**No Linting/Formatting**: No ESLint, Prettier, or similar tools are set up.

## Architecture

**Static Site Structure**: Traditional HTML site with manual navigation and file organization.

**Styling**: Custom CSS with CSS variables for theming, responsive design, and a light color scheme with purple/blue accents.

**JavaScript**: Minimal vanilla JS for interactive features, primarily in the Elden Ring progress tracker.

**Data Storage**:
- [homefeatures.json](homefeatures.json) - Structured data for home maintenance tasks with frequency tracking
- localStorage - Used for Elden Ring progress tracking client-side

## Key Directories

- [files/css/](files/css/) - All stylesheets (style.css, elden-ring.css, etc.)
- [files/images/](files/images/) - Avatar images and graphics
- [projects-things/elden-ring-cheat-sheet/](projects-things/elden-ring-cheat-sheet/) - Extensive gaming guide with 25+ location pages
- [blog/](blog/) - Blog posts and index
- [about/](about/) - About page
- [work-history/](work-history/) - Work history page

## Special Features

**Elden Ring Progress Tracker**: Interactive cheat sheet with JavaScript-based completion tracking stored in localStorage. The system uses two JavaScript files:
- [index.js](projects-things/elden-ring-cheat-sheet/index.js) - Displays completion percentages on the main index
- [pages.js](projects-things/elden-ring-cheat-sheet/pages/pages.js) - Handles checkbox state management and updates completion percentages

Both files share a common localStorage structure using the key `elden_ring_profiles` with profile support (currently defaults to "Default Profile"). The system tracks individual checkbox states and calculates completion percentages per section.

**Home Maintenance System**: JSON-based task management system in [homefeatures.json](homefeatures.json) with frequency types (daily, weekly, monthly, yearly).

**iOS Universal Links**: Configured via [apple-app-site-association](apple-app-site-association) for VibeReader app integration.

## Deployment

**GitHub Pages**: Site is deployed via GitHub Pages with custom domain configured in [CNAME](CNAME) file.

**RSS Feed**: Available at [feed.xml](feed.xml) for blog content.

## Frequency Types Reference

In [homefeatures.json](homefeatures.json):
- `frequencyType: 0` = As needed/After each use
- `frequencyType: 1` = Daily (Weekly)
- `frequencyType: 2` = Monthly
- `frequencyType: 3` = Yearly
- `frequency` = Number of periods (e.g., frequency: 3 with type 2 = every 3 months)

## Common Development Tasks

Since this is a static site, development involves:
- Direct HTML/CSS/JS editing
- Manual testing by opening files in browser
- Git commits for deployment to GitHub Pages
- Image optimization should be done manually
- Content updates in JSON files for structured data