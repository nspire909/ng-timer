// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// code coverage only covers files that are loaded.  so when
//  running code coverage, load all modules.
// Ideally we'd do something more like this:
//  https://github.com/gotwarlost/istanbul/issues/112#issuecomment-221851973
//  but that's a lot more setup
declare const __karma__: any;
if (__karma__.config.codeCoverage) {
  // For Angular 5.x, we had to add "**/*.module.ts" to the include array in tsconfig.spec.json
  const reqContext = require.context('./', true, /\.module\.ts$/);
  reqContext.keys().map(reqContext);
}

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
