# corename

> Gets name of monorepo project :information_desk_person:

```bash
npm install corename
```

## getCoreName

```js
/**
 * Extracts project name in monorepo
 * by examining name of package that matches "@"
 *
 * @param {Array} [pkgJson=[]]
 * @returns {string} name
 */
const projectName = getCoreName(pkgJson);
```

### Example

```js
import getCoreName from "corename";

const pkg0 = {
  name: "@folo/withcontext",
  dependencies: {}
};

const pkg1 = {
  name: "@folo/values",
  dependencies: {
    "@folo/withcontext": "^0.1.5"
  }
};

const projectName = getCoreName([pkg0, pkg1]);

expect(projectName).to.be.equal("@folo");
```

### Related projects

- [packageSorter](https://github.com/jalal246/packageSorter) - Sorting packages
  for monorepos production.

- [builderz](https://github.com/jalal246/builderz) - Building your project with
  zero config.

- [get-info](https://github.com/jalal246/get-info) - Utility functions for projects production

## Tests

```sh
npm test
```

## License

This project is licensed under the [GPL-3.0 License](https://github.com/jalal246/corename/blob/master/LICENSE)
