# vibe-coding

## Purpose

This repository is a collection of Agents coding prompts for better vibe coding experience.

## Usage

To use the prompts you have two options:

1. **Copy and paste** the prompts from the files in this repository into your coding agent.
2. **Generate the AGENTS.md file** by cloning this repository and running the `sh merge.sh` script. This will create a single `AGENTS.md` file that contains all the prompts from the individual files.

## Development

This repository uses [Turborepo](https://turbo.build) for managing tasks across packages.

- `pnpm build` - run build in all packages
- `pnpm lint` - run type checking
- `pnpm test` - run unit tests
