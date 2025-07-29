# Makefile for vibe-coding monorepo
# This Makefile provides commands to build, test, lint, and publish packages

.PHONY: help install clean build test lint publish publish-dry publish-builder publish-cli check-deps check-git status release-flow release-flow-dry update-cli-builder-version restore-cli-workspace

# Default target
help: ## Display this help message
	@echo "Available commands:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Installation and setup
install: ## Install dependencies
	pnpm install

# Cleaning
clean: ## Clean build artifacts
	@echo "Cleaning build artifacts..."
	rm -rf packages/*/dist
	rm -rf apps/*/dist
	rm -rf node_modules/.cache

# Building
build: ## Build all packages and apps
	@echo "Building all packages..."
	pnpm build

build-builder: ## Build only the builder package
	@echo "Building builder package..."
	cd packages/builder && pnpm build

build-cli: ## Build only the CLI app
	@echo "Building CLI app..."
	cd apps/cli && pnpm build

# Testing and linting
test: ## Run tests for all packages
	@echo "Running tests..."
	pnpm test

test-builder: ## Run tests for builder package only
	@echo "Running tests for builder package..."
	cd packages/builder && pnpm test

test-cli: ## Run tests for CLI app only
	@echo "Running tests for CLI app..."
	cd apps/cli && pnpm test

lint: ## Run linting for all packages
	@echo "Running linting..."
	pnpm lint

lint-builder: ## Run linting for builder package only
	@echo "Running linting for builder package..."
	cd packages/builder && pnpm lint

lint-cli: ## Run linting for CLI app only
	@echo "Running linting for CLI app..."
	cd apps/cli && pnpm lint

# Quality checks
check-deps: ## Check for dependency issues
	@echo "Checking dependencies..."
	pnpm audit

check-git: ## Check git status and ensure clean working directory
	@echo "Checking git status..."
	@if [ -n "$$(git status --porcelain)" ]; then \
		echo "Error: Working directory is not clean. Please commit your changes first."; \
		git status; \
		exit 1; \
	fi
	@echo "Working directory is clean."

# Pre-publish checks
pre-publish: check-git clean install build test lint ## Run all pre-publish checks
	@echo "All pre-publish checks passed!"

# Publishing (dry run)
publish-dry: pre-publish ## Dry run publish (shows what would be published)
	@echo "Performing dry run publish..."
	@echo "Builder package:"
	cd packages/builder && npm publish --dry-run
	@echo "CLI package:"
	cd apps/cli && npm publish --dry-run --access public

# Publishing individual packages
publish-builder: ## Publish builder package only
	@echo "Publishing builder package..."
	cd packages/builder && npm publish

publish-cli: ## Publish CLI package only
	@echo "Publishing CLI package..."
	cd apps/cli && npm publish --access public

# Publishing all packages
publish: pre-publish ## Build and publish all packages
	@echo "Publishing all packages..."
	@echo "Publishing builder package..."
	cd packages/builder && npm publish
	@echo "Publishing CLI package..."
	cd apps/cli && npm publish
	@echo "All packages published successfully!"

# Release with version bump (using release-it for builder)
release-builder: ## Release builder package with version bump
	@echo "Releasing builder package..."
	cd packages/builder && pnpm release

# Update CLI package to use latest builder version
update-cli-builder-version: ## Update @vibe-builder/builder version in CLI package
	@echo "Getting latest builder version..."
	$(eval BUILDER_VERSION := $(shell cd packages/builder && node -p "require('./package.json').version"))
	@echo "Updating CLI package to use builder version $(BUILDER_VERSION)..."
	@echo "Note: Using caret range for semantic versioning"
	cd apps/cli && sed -i '' 's/"@vibe-builder\/builder": "workspace:\^"/"@vibe-builder\/builder": "^$(BUILDER_VERSION)"/' package.json
	@echo "Updated CLI package.json to reference @vibe-builder/builder@^$(BUILDER_VERSION)"

# Restore CLI package to use workspace dependency (for development)
restore-cli-workspace: ## Restore CLI package to use workspace dependency for development
	@echo "Restoring CLI package to use workspace dependency..."
	cd apps/cli && sed -i '' 's/"@vibe-builder\/builder": "[^"]*"/"@vibe-builder\/builder": "workspace:^"/' package.json
	@echo "Restored CLI package.json to use workspace dependency"

# Dry run of complete release flow (for testing)
release-flow-dry: check-git clean install ## Dry run of complete release flow (shows what would happen)
	@echo "=== Starting DRY RUN of complete release flow ==="
	@echo "Step 1: Building monorepo..."
	pnpm build
	@echo "Step 2: Running tests..."
	pnpm test
	@echo "Step 3: Running linting..."
	pnpm lint
	@echo "Step 4: DRY RUN - Would publish builder package directly..."
	@echo "Would run: npm version patch --no-git-tag-version"
	@echo "Would run: npm publish"
	cd packages/builder && npm publish --dry-run
	@echo "Step 5: Would create git tag for builder..."
	$(eval BUILDER_VERSION := $(shell cd packages/builder && node -p "require('./package.json').version"))
	@echo "Current builder version: $(BUILDER_VERSION)"
	@echo "After release, builder would be bumped to next patch version"
	@echo "Step 6: Would update CLI package.json dependency..."
	@echo "Would change CLI package.json dependency from workspace:^ to ^$(BUILDER_VERSION) (or next version)"
	@echo "Step 7: Would install dependencies with published version..."
	@echo "Step 8: Would build CLI package..."
	cd apps/cli && pnpm build
	@echo "Step 9: DRY RUN - Would publish CLI package..."
	cd apps/cli && npm publish --dry-run
	@echo "Step 10: Would restore workspace dependency for development..."
	@echo "=== DRY RUN completed successfully! ==="
	@echo "No actual releases were made - this was just a test run"

# Complete release flow: build monorepo -> release builder -> update CLI -> build and publish CLI
release-flow: check-git clean install ## Complete release flow: build -> release builder -> update CLI -> publish CLI
	@echo "=== Starting complete release flow ==="
	@echo "Step 1: Building monorepo..."
	pnpm build
	@echo "Step 2: Running tests..."
	pnpm test
	@echo "Step 3: Running linting..."
	pnpm lint
	@echo "Step 4: Publishing builder package using release-it..."
	cd packages/builder && pnpm release
	@echo "Step 5: Getting the new builder version..."
	$(eval BUILDER_VERSION := $(shell cd packages/builder && node -p "require('./package.json').version"))
	@echo "Step 6: Updating CLI package to use published builder version..."
	cd apps/cli && sed -i '' 's/"@vibe-builder\/builder": "workspace:\^"/"@vibe-builder\/builder": "^$(BUILDER_VERSION)"/' package.json
	@echo "Step 7: Installing dependencies with published version..."
	pnpm install
	@echo "Step 8: Building CLI package..."
	cd apps/cli && pnpm build
	@echo "Step 9: Publishing CLI package..."
	cd apps/cli && npm publish --access public
	@echo "Step 10: Restoring workspace dependency for development..."
	cd apps/cli && sed -i '' 's/"@vibe-builder\/builder": "[^"]*"/"@vibe-builder\/builder": "workspace:^"/' package.json
	pnpm install
	@echo "=== Release flow completed successfully! ==="
	@echo "Builder version: $(BUILDER_VERSION)"
	@echo "CLI updated and published with latest builder dependency"
	@echo "Workspace dependencies restored for continued development"

# Development helpers
dev-build: ## Build in watch mode (for development)
	@echo "Starting development build..."
	cd packages/builder && pnpm build:w &
	cd apps/cli && pnpm build

status: ## Show project status
	@echo "=== Project Status ==="
	@echo "Git status:"
	@git status --short
	@echo ""
	@echo "Package versions:"
	@echo "Builder: $$(cd packages/builder && node -p "require('./package.json').version")"
	@echo "CLI: $$(cd apps/cli && node -p "require('./package.json').version")"
	@echo ""
	@echo "Dependencies status:"
	@pnpm list --depth=0 2>/dev/null || echo "Run 'make install' to install dependencies"

# Full workflow
all: clean install build test lint ## Run complete workflow (clean, install, build, test, lint)
	@echo "Complete workflow finished successfully!"

# Emergency commands
force-clean: ## Force clean everything including node_modules
	@echo "Force cleaning everything..."
	rm -rf node_modules
	rm -rf packages/*/node_modules
	rm -rf apps/*/node_modules
	rm -rf packages/*/dist
	rm -rf apps/*/dist
	rm -rf .turbo

reset: force-clean install ## Reset the entire project (force clean + install)
	@echo "Project reset complete!"
