/**
 * Extracts project name in monorepo
 * by examining name of package that matches "@"
 *
 * @param {Array} [pkgJson=[]]
 * @returns {string} name
 */
function getCoreName(pkgJson = []) {
  let pojName;

  for (let i = 0; i < pkgJson.length; i += 1) {
    const packageDeps = pkgJson[i] || {};

    const { name } = packageDeps;

    if (name.includes("@")) {
      // eslint-disable-next-line
      pojName = name.split("/")[0];
      break;
    }
  }

  return pojName;
}

module.exports = getCoreName;
