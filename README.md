# Optimum Energy ESLint Configuration

This is my personal collection of
[sharable](http://eslint.org/docs/developer-guide/shareable-configs.html) ESLint configurations.
I started building them with others at [@optimumenergyco](https://github.com/optimumenergyco), but
I've since forked them.

## Usage

First, install the packages you'd like to use.

```
$ yarn add -D eslint @landonschropp/eslint-config @landon-schropp/react-eslint-config
```

Next, specify the packages you'd like to use in the
[`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of
your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).


``` js
{
  "extends": [ "@landonschropp", "@landonschropp/react" ],
  "rules": {
    // Additional per-project rules...
  }
}
```

## Deployment

You can use [Lerna](https://lerna.js.org/) to publish updated version of these packages to NPM.
Before running this, you'll need to set the `NPM_TOKEN` environment variable.

``` shell
lerna publish
```
