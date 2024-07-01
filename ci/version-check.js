const { execSync } = require('child_process');
const { readFileSync, existsSync, mkdirSync, rmSync } = require('fs');
const { resolve } = require('path');
const semver = require("semver");

const rootPath = resolve(__dirname, "..");
const tempPath = resolve(rootPath, "temp");

if (!existsSync(tempPath)) {
  mkdirSync(tempPath);
}

const masterTempPackagePath = resolve(tempPath, "package.json");

if (existsSync(masterTempPackagePath)) {
  rmSync(masterTempPackagePath);
}

execSync(`git show origin/main:package.json > ${masterTempPackagePath}`);

const packageJSON = JSON.parse(readFileSync(resolve(rootPath, "package.json")));
const masterPackageJSON = JSON.parse(readFileSync(masterTempPackagePath));

if (semver.lte(masterPackageJSON.version, packageJSON.version)) {
  console.error(`Необходимо обновить версию типов в package.json минимум до ${semver.inc(packageJSON.version, "patch")}`);
  process.exit(1);
}
