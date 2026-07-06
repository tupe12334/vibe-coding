import recommendedIncremental from 'eslint-config-agent/recommended-incremental'

export default [
  ...recommendedIncremental,
  {
    // The build tsconfig excludes *.spec.ts (kept out of `tsc`'s emitted
    // dist), so lint needs its own project that includes them, or every
    // spec file fails to parse with "not found by the project service".
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: false,
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]
