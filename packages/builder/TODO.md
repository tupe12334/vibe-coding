# TODOs

1. [ ] Add test that validate that only libs projects can have release system, validate that the types are type-safe as well.

2. [x] Fix the CI/CD to publish this package to npm.

3. [x] Add the option to add "create at" timestamp to the generated files, it will be in the end of the file and will be optional, add snapshot tests for this feature.
4. [x] Add default rules so for example no matter which cicd system im choosing i will always get the rules that a ci process should have lint, test, build and the rule that says that the cd process should use the release system that define for the project.
