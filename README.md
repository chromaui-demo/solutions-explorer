# Solutions Explorer

A monorepo to help explore solutions to Chromatic's most common questions and edge cases.

## Solutions Explorer UI

This is a simple component library providing styling based on [Tetra](https://github.com/chromaui/tetra).

### Decision Record

- `npm` instead of `pnpm` - Sticking with `npm` since this is the primary package manager customers utilize.
- `libs/ui` instead of `@chromatic-com/tetra` - This decision was made in order to help showcase a component library/style guide managed within a monorepo setup, as well as provide a library geared towards Solutions Explorer's specific needs.
- CSS modules - This keeps our styles collocated with components and makes it easy to theme using CSS variables. Added benefit of _no runtime styling overhead_.
- Framer Motion - Integrates smoothly with Storybook and allows us to test JS animation cases in Chromatic.
- Themeable design tokens - No need for a theme provider while allowing us to easily swap themes (and avoid runtime complexity). Alternative themes in Storybook can be injected using decorators or SB themes.
