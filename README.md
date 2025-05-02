# Solutions Explorer

## Solutions Explorer UI

Decision record:

- CSS modules - This keeps our styles collocated with components and makes it easy to theme using CSS variables. Added benefit of no runtime styling overhead.
- Framer Motion - Integrates smoothly with Storybook and allows us to test JS animation cases in Chromatic.
- Themeable design tokens - No need for a theme provider while allowing us to easily swap themes (and avoid runtime complexity). Alternative themes in Storybook can be injected using decorators or SB themes.
