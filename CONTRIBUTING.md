# Contributing to Postify

Thank you for your interest in contributing to Postify! This document outlines the standards and workflows we follow.

## Branching Strategy

We follow a structured branching strategy to maintain code quality and organization.

### Branch Naming Convention

All development branches must follow one of these conventions:

1.  **Feature Branches**: `development/[feature-name]`
    *   Example: `development/user-authentication`
    *   Example: `development/admin-dashboard`

2.  **Issue-Based Branches**: `dev/[issue-number]-brief-description`
    *   Example: `dev/12-fix-login-bug`
    *   Example: `dev/45-update-dependencies`

### Workflow

1.  **Start from Master**: Always create your branch from the latest `master` branch.
    ```bash
    git checkout master
    git pull origin master
    git checkout -b development/your-feature-name
    ```

2.  **Commit Messages**: Write clear, descriptive commit messages.
    *   Reference the issue number if applicable (e.g., "Add login form (Fixes #12)").

3.  **Pull Requests**:
    *   Push your branch to the repository.
    *   Create a Pull Request (PR) targeting the `master` branch.
    *   **Link Issues**: In the PR description, use GitHub keywords to link issues (e.g., "Closes #12", "Fixes #45").
    *   **Review**: At least one code review is required before merging.

## Branch Protection Rules

The `master` branch is protected. Direct commits are not allowed.
- **Require pull request reviews before merging**: Enabled (1 approval required).
- **Require status checks to pass before merging**: Enabled (CI/CD pipeline must pass).

## Code Style

- **Frontend**: Follow Next.js and Tailwind CSS best practices. Ensure linting passes.
- **Backend**: Follow Laravel coding standards (PSR-12). Run `pint` for formatting.

## Reporting Issues

Please use the issue tracker to report bugs or request features. Provide as much detail as possible.

Thank you for contributing!
