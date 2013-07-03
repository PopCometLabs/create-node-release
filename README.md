Facilitate releases in node projects.

Extends `git flow` model. Requires that git flow is initialized with `master` and `develop` branches.

Creating a release does the following:

1. Updates the version of the project.
2. Creates a `release/${version}` branch, where `${version}` is the updated version number.
3. Commits the version upgrade to the release.
4. Merges the branch into `master` and `develop`.
5. Tags `master` with `${version}`
6. Pushes updated `master` and `develop`, and pushes new `tag`.

# Installation

    sudo make install

# Usage

## Minor update

This updates the package version minor release (i.e. 0.X++.0):

    git release

## Major update

This updates the package version major release (i.e. X++.0.0):

    git major-release

Note that the minor version values are reset to 0.
