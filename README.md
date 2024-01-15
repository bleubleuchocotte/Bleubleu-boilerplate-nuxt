[![code style](https://antfu.me/badge-code-style.svg)](https://github.com/antfu/eslint-config)

# Nuxt 3 Boilerplate

This is BleuBleu Chocotte's Nuxt 3 boilerplate, a powerful Vue.js framework for building modern web applications. It comes with some common configurations and best practices to help you kickstart your project.

## Features

- **Vue 3 and Nuxt 3**: Utilize the latest versions of Vue.js and Nuxt.js for building robust applications.
- **ESLint @antfu/eslint-config**: Maintain code consistency and quality with @antfu/eslint-config.
- **Pinia**: A state-management library for Vue 3.
- **Sass**: A CSS preprocessor for styling.
- **Nuxt SEO**: Nuxt module for generating robots.txt and sitemap.xml.

## Getting Started

### Prerequisites

- Node.js (>=18.16.0)
- PNPM (>=8.13.1)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bleubleuchocotte/boilerplate-nuxt-3.git
   ```

2. Navigate to the project directory:

   ```bash
   cd boilerplate-nuxt-3
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

### Development

Run the development server:

```bash
pnpm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production

Build and preview production build:

```bash
pnpm build
pnpm preview
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

See [Nuxt Configuration](https://nuxtjs.org/docs/3.x/configuration) for customization options.

## Folder Structure

```plaintext
boilerplate-nuxt-3/
├── assets/
├── components/
├── layouts/
├── pages/
├── public/
├── stores/
├── app.vue
└── nuxt.config.ts
```
Feel free to modify this folder structure based on your project's specific requirements and preferences.

## Scripts

- **build**: Build the project using Nuxt.
- **dev**: Run the development server.
- **generate**: Generate static files for deployment.
- **preview**: Run the Nuxt 3 preview server.
- **postinstall**: Prepare the project after installation.
- **lint**: Run ESLint to check for code style issues.
- **lint:fix**: Run ESLint and attempt to fix code style issues.
- **typecheck**: Run Nuxi typecheck for TypeScript type checking.

## Dependencies

### Production

- `@pinia/nuxt`: Pinia integration for Nuxt.
- `pinia`: State-management library for Vue 3.
- `sass`: CSS preprocessor.
- `nuxt-simple-robots`: Nuxt module for generating robots.txt.
- `nuxt-simple-sitemap`: Nuxt module for generating sitemap.xml.

### Development

- `@antfu/eslint-config`: Antfu's ESLint configuration.
- `@nuxt/devtools`: Nuxt devtools for debugging.
- `@vueuse/core`: Collection of Vue composition utilities.
- `@vueuse/nuxt`: Nuxt plugin for VueUse.
- `eslint`: ESLint for code linting.
- `eslint-plugin-format`: ESLint plugin for code formatting.
- `nuxt`: Nuxt.js for Vue.js applications.
- `vue`: Vue.js library.
- `vue-router`: Vue Router for navigation.

## Contributing

If you'd like to contribute or have suggestions, please create an issue or submit a pull request.
