# corename

> Extracts the name of monorepo project

```bash
npm install corename
```

## API

### getCoreName

```ts
getCoreName(pkgJson: Array<pkgJsonObj>|Object)
```

### Usage

```js
import getCoreName from "corename";

const pkg0 = {
  name: "pkg-first",
  dependencies: {},
};

const pkg1 = {
  name: "@pkg-second",
  dependencies: {
    "@pkg/first": "^0.1.5",
  },
};

const pkg2 = {
  name: "@pkg/third",
  dependencies: {},
};

const name = getCoreName([pkg0, pkg1, pkg2]);

// name = "@pkg";
```

Or just pass a single package

```js
const name = getCoreName(pkg2);

// name = "@pkg";
```

In case there's no matching pattern, it returns null:

```js
const name = getCoreName(pkg1);

// name = null;
```

Or tell it to return the exact name found in package.json

```js
const returnNameIfMonoNotFound = true;

const name = getCoreName(pkg1, returnNameIfMonoNotFound);

// name = "@pkg-second";
```

### Tests

```sh
npm test
```

### License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/corename/blob/master/LICENSE)

### Related projects

- [builderz](https://github.com/jalal246/builderz) - JavaScript Bundler with zero configuration.

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for projects production

- [move-position](https://github.com/jalal246/move-position) - Moves element
  index in an array.

- [textics](https://github.com/jalal246/textics) & [textics-stream](https://github.com/jalal246/textics-stream) - Counts lines, words, chars and spaces for a given string.

- [folo](https://github.com/jalal246/folo) - Form & Layout Components Built with
  React.
