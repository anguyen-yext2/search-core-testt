import { args, getPackageInfo, packageName } from './releaseUtils.js';

(async () => {
  const tag = args._[0];

  if (!tag) {
    console.error('No tag specified');
    process.exit(1);
  }

  const [pkgName, version] = tag.split('@');

  const { currentVersion } = await getPackageInfo();
  if (pkgName !== packageName) {
    console.error(
      `Package name from tag '${pkgName}' mismatches with package '${packageName}'`
    );
    process.exit(1);
  }
  if (currentVersion !== version) {
    console.error(
      `Package version from tag '${version}' mismatches with current version '${currentVersion}'`
    );
    process.exit(1);
  }

  const releaseTag = version.includes('rc')
    ? 'rc'
    : version.includes('beta')
      ? 'beta'
      : version.includes('alpha')
        ? 'alpha'
        : 'latest';

  // Log the release tag to be picked up by the next GitHub Actions step
  console.log(releaseTag);
})();