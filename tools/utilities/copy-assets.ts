import Chalk from 'chalk';
import { copy } from 'fs-extra';

export const copyAssets = async () => {
  try {
    await copy('projects/ng-timer/README.md', 'projects/ng-timer/dist/README.md');
    console.log(Chalk.green('README copied to package')); /* tslint:disable-line */
    await copy('projects/ng-timer/CHANGELOG.md', 'projects/ng-timer/dist/CHANGELOG.md');
    console.log(Chalk.green('README copied to package')); /* tslint:disable-line */
  } catch (e) {
    console.error(e);
  }
};
