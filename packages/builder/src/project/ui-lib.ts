export const uiLibRules = [
  "Prefer working with flex",
  "Prioritize the use of components that exist in the library already.",
  "Folder structure:\n\n- `src/`: Contains the source code for the components.\n- `src/<component>/`: Contains the individual components.\n  - Each component has its own folder with the following structure:\n    - `index.ts`: Exports all the relevant data.\n    - `<ComponentName>.tsx`: Contains the main component code.\n    - `styles.ts`: Contains styles for the component.\n    - `types.ts`: Contains TypeScript types for the component.\n    - `<ComponentName>.test.tsx`: Contains tests for the component.\n    - `<ComponentName>.stories.tsx`: Contains Storybook stories for the component.\n- `src/index.ts`: Exports all components for easy import.",
];
