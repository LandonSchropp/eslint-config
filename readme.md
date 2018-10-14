# Landon Schropp's ESLint Configuration

This repository contains my personal ESLint configuration. It's currently a mirror of my
[employer's ESLint configuration](https://github.com/optimumenergyco/eslint-config-optimum-energy)
(which I helped write).

## Usage

First, install the package.

```
$ yarn add -D @landonschropp/eslint-config
```

Next, specify `@landonschropp` in the
[`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of
your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

``` js
{
  "extends": "@landonschropp",
  "rules": {
    // Additional per-project rules...
  }
}
```
