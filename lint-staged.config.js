const formatFiles = "prettier --ignore-unknown --write";
const sortPackageJson = "better-sort-package-json";

export default {
  "socials.json|*.{js,md,ts,yml}": [formatFiles],
  "package.json": [sortPackageJson, formatFiles],
};
