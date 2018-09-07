# Optimum Energy ESLint Configuration

This is my personal collection of
[sharable](http://eslint.org/docs/developer-guide/shareable-configs.html) ESLint configurations.
They started as configurations I was building while working at
[@optimumenergyco](https://github.com/optimumenergyco), but I've since forked them.

## Usage

First, install the package.

```
$ yarn add -D eslint-config-optimum-energy
```

Next, specify `optimum-energy` in the
[`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of
your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

``` js
{
  "extends": "optimum-energy",
  "rules": {
    // Additional per-project rules...
  }
}
```

## Deployment

If you'd like to deploy an updated version of this package to NPM, run the following before deploying
branch.

``` shell
yarn version --new-version <VERSION>
git push origin HEAD
git push --tags origin HEAD
```

This will update the `package.json` file and create a tagged commit. Codeship will automatically
pick up the tagged commit and publish the package.
