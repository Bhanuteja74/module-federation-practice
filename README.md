# module-federation-practice

This repository tracks my learning and practice steps for Module Federation using Vite and Webpack. It follows a hands-on approach, with progress and notes updated as I go.

## Overview
Module Federation allows multiple independently built and deployed applications to share code and features. This repo explores how to set up and use Module Federation with Vite and Webpack, including exposing and consuming components between projects.

## Getting Started
### Prerequisites
- Node.js and npm installed

### Installation Steps
1. Clone this repository
2. Install dependencies in each project folder (`vite-remote/`, `vite-host/`, `webpack-host/`)

### Running the Project
- Follow instructions in each folder to start the apps and test Module Federation features

## Project Structure
```
module-federation-practice/
├── vite-remote/      # Vite project exposing components
├── vite-host/        # Vite project consuming remote components
├── webpack-host/     # Webpack project consuming remote components
├── TODO.md           # Learning steps and progress
└── README.md         # Project documentation
```

## Features
This repo will cover:
- Setting up Module Federation in Vite and Webpack
- Exposing components from a remote app
- Consuming remote components in host apps
- Cross-framework sharing (Vite <-> Webpack)

## Learning Notes
See `TODO.md` for a step-by-step breakdown of tasks and progress. Notes and discoveries will be added as I learn.

## Resources
Useful links:
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Vite Module Federation Plugin](https://github.com/originjs/vite-plugin-federation)

## License
MIT
