# TODOs

- [ ] Add lint segment that let you select lint system, The linting system will show you the options according to the language that you choose.

- [ ] Convert the builder files that hold the rules from jsno to typescript, Type-safe files.

- [ ] Make the ui-lib be a superset of the lib project so when ever the ui-lib is been selected it will also include the lib rules.

- [x] Convert the repository to pnpm monorepo, don't move the folders.

- [x] Move the builder package to a packages folder, don't forget to update the CI/CD pipeline to use the new path.

- [x] Move the cli to an apps folder.
- [x] When building a lib or any of its subsets, let the user choose also the publishing manager, for example: release-it and semantic-release

- [ ] Add option to skip any step of the cli.

- [ ] Make the publish step for the builder to run in dry run, wait for a dev ik and only then publish the package.

- [ ] Implement turbo repo to the project.
