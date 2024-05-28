import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
const CopyPlugin = require("copy-webpack-plugin");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new CopyPlugin({
    patterns: [
      {
        from: "./node_modules/sharp/",
        to: "./output/node_modules/sharp/", // still under node_modules directory so it could find this module
      },
    ],
  }),
];
