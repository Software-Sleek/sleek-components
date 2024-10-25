# Sleek Components

**Sleek Components** is a customizable component-based library, designed to make it easy to add high-quality, reusable UI components to your React projects. Inspired by **shadcn**, Sleek Components lets you install individual components via CLI commands, which automatically adds them to your project in an organized directory structure.

## Installation

### Step 1: Install Sleek Components CLI
Install Sleek Components globally to enable the `npx sleek-components` command:
```bash
npm install -g sleek-components
```
### Step 2: Adding Components
To add a specific component to your project, use the following command:
```bash
npx sleek-components add <ComponentName>
```
#### Example
To add a Button component:
```bash
npx sleek-components add Button
```
This command will:

Create a sleek-ui directory in your project.
Generate the specified component inside the sleek-ui directory.

### Usage
After adding a component, import it into your project files as follows:
```bash
import { Button } from './sleek-ui/Button';

function App() {
  return <Button label="Click Me" onClick={() => alert('Button clicked!')} />;
}
```
Each component comes with its own styling and basic configuration, making it easy to customize according to your project’s needs.

### Folder Structure
Adding a component will automatically create the following structure in your project:
```bash
your-project/
├── sleek-ui/ >>This folder contains all the Sleek Components you add to your project.
│   ├── Button.js
│   ├── index.js >>This file is important because it makes it easier to import all your components into your project.
│   └── ...other components
```

### Development
To test or make modifications to the package locally, you can link it:

1. In the sleek-components package root, run:
```bash
npm link
```
3. In your test project directory, link the package:
```bash
npm link sleek-components
```

### Contributing
We welcome contributions to improve the Sleek Components library! Feel free to submit issues or feature requests.

### License
This package is licensed under the MIT License. See LICENSE for more information.

### Happy coding with Sleek Components! If you encounter issues, feel free to reach out or submit an issue.
