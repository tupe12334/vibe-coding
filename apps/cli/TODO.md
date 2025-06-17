# TODOs

1. [ ] Remove the skip from the output segment

2. [ ] Add to the CI running lint, test and build steps for the cli as like the builder

3. [ ] Add publish step to the CI, the same as the builder.

4. [ ] Add option to add ui framework when choosing ui-lib and its depends on the project framework you choose, for example react will have tailwind and MUI.

5. [ ] Make pnpm the default package manager for the cli and lowercase all the options of the package managers.
6. [ ] Add the e2e project to be an option in the cli.
7. [x] Remove the **test** folder and put the tests where they belong.
8. [ ] Add the option to choose e2e project.
9. [ ] Make the option to choose the testing framework depend on the project type that the user chooses, for example if the user chooses lib then the testing framework will be vitest or jest, if the user chooses e2e then the testing framework will be cypress or playwright, if the user chooses app then the testing framework will be vitest or jest.