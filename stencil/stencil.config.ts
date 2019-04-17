import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  srcDir: process.env.SRC_DIR ? `./src/${process.env.SRC_DIR}` : undefined,
  excludeSrc: ['/test/', '**/*.spec.*', '**/*.solution.*'],
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  testing: {
    testMatch: [ `**/*/${process.env.SRC_DIR}/**/*(*.)+(e2e|spec).+(ts)?(x)`]
  },
  outputTargets: [
    {
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ]
};
