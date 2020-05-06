function unpackName(packageDeps) {
  const { name } = packageDeps;

  return name.includes("@") ? name.split("/")[0] : null;
}

function loopInPkg(pkgJson) {
  let pojName = null;

  for (let i = 0; i < pkgJson.length; i += 1) {
    const packageDeps = pkgJson[i] || {};

    pojName = unpackName(packageDeps);
    if (pojName) break;
  }
}

/**
 * Extracts project name in monorepo
 * by examining name of package that matches "@"
 *
 * @param {Array} [pkgJson=[]]
 * @returns {string} name
 */
function getCoreName(pkgJson = []) {
  if (Array.isArray(pkgJson)) {
    return loopInPkg(pkgJson);
  }

  if (Object.keys(pkgJson).length > 0) {
    return unpackName(pkgJson);
  }

  return null;
}

module.exports = getCoreName;
