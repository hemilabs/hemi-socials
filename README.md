# hemi-socials

![NPM Version](https://img.shields.io/npm/v/hemi-socials)![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/hemilabs/hemi-socials/js-checks.yml?branch=main)

A repository containing the official list of social links for Hemilabs

## Usage

```tsx
import hemiSocials from "hemi-socials";
// the following properties are available
const {
  discordUrl,
  linkedinUrl,
  githubUrl,
  telegramCommunityUrl,
  telegramNewsUrl,
  tiktokUrl,
  twitterUrl,
  youtubeUrl,
} = hemiSocials;
```

## Release process

With the changes merged into `main`, tag the merge commit, push and [create a new release](https://github.com/hemilabs/hemi-socials/releases/new). The package will be published automatically to NPM.

```sh
git tag -s -m "" v$(jq -r '.version' <package.json) --force
git push --tags --force
```
