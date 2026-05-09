# SOGo Dark Theme Selector

A custom theme loader and theme selector for SOGo Webmail, designed for Mailcow/SOGo installations.

This project adds a native-looking theme button to the SOGo top toolbar and allows users to switch between the built-in SOGo theme and custom dark themes.

## Features

- Theme selector button in the SOGo toolbar
- System theme mode
- Automatic dark mode when the browser prefers dark mode
- Automatic original theme when the browser prefers light mode
- Manual theme override per user
- Persistent user preference via `localStorage`
- No SOGo source-code modification required
- Separate theme files for easier maintenance
- Works with Mailcow SOGo container mounts

## Available Themes

| Theme | Description |
|---|---|
| System | Uses browser preference. Light mode loads original SOGo, dark mode loads Full Dark |
| Original | Removes custom styling and uses the built-in SOGo theme |
| Dark Classic | Dark SOGo interface with white mail preview/editor |
| Dark Full | Fully dark SOGo interface, including mail preview and editor |

## File Structure

```txt
data/conf/sogo/
├── custom-theme.js
└── themes/
    ├── dark-classic-theme.js
    └── dark-full-theme.js
```
## Installation

Mount the custom theme loader and theme directory into the SOGo container.

Example Mailcow compose volume entries:
```txt
volumes:
  - ./data/conf/sogo/custom-theme.js:/usr/local/lib/GNUstep/SOGo/WebServerResources/js/theme.js
  - ./data/conf/sogo/themes:/usr/local/lib/GNUstep/SOGo/WebServerResources/js/themes
```
After placing the files, restart the SOGo container:
```bash
docker compose restart sogo-mailcow
```
