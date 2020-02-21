# corename

> Gets name of monorepo project :information_desk_person:

```bash
npm install corename
```

`

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

### Example(1)

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
