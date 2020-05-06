/* eslint-disable no-nested-ternary */
function unpackName(packageDeps, isNameDefault) {
  const { name } = packageDeps;

  return name.includes("/") ? name.split("/")[0] : isNameDefault ? name : null;
}

function loopInPkg(pkgJson) {
  let pojName = null;

  for (let i = 0; i < pkgJson.length; i += 1) {
    const packageDeps = pkgJson[i] || {};

    pojName = unpackName(packageDeps, false);
    if (pojName) break;
  }

  return pojName;
}

/**
 * Extracts project name in monorepo
 * by examining name of package that matches "@"
 *
 * @param {Array} [pkgJson=[]]
 * @returns {string} name
 */
function getCoreName(pkgJson = [], returnNameIfMonoNotFound = false) {
  return Array.isArray(pkgJson)
    ? loopInPkg(pkgJson)
    : Object.keys(pkgJson).length > 0
    ? unpackName(pkgJson, returnNameIfMonoNotFound)
    : null;
}

module.exports = getCoreName;
