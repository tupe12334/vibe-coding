# TODOs

1. [ ] Add lint segment that let you select lint system, The linting system will show you the options according to the language that you choose.

2. [x] Make the ui-lib be a superset of the lib project so when ever the ui-lib is been selected it will also include the lib rules.

3. [ ] Make the publish step for the builder to run in dry run, wait for a dev ik and only then publish the package.

4. [ ] Covert the CI/CD to work with the release system release-it

5. [ ] Add option to add ui framework when choosing ui-lib and its depends on the project framework you choose, for example react will have tailwind and MUI.

6. [x] Add segment for CI/CD framework, like github actions, gitlab ci, circleci, etc. and then add the option to select the CI/CD system in the builder, it will be like the monorepo management system only, without rules.
7. [ ] Add a project type of e2e testing, it will have the frameworks: playwright and cypress, two rules for now to the e2e testing project will be using of Page object model (POM) and a rule that says to use screenshots testing when possible.
