/* eslint-disable */
'use strict';

console.log('Loading rn-cli config');

const blacklist = require('metro-config/src/defaults/blacklist');
const getWorkspaces = require('get-yarn-workspaces');
const path = require('path');

const getConfig = (from, options = {}) => {
  const workspaces = getWorkspaces(from);
  const blacklistRE = blacklist([
    /node_modules\/.+\/node_modules\/react-native\/.*/,
    /packages\/shared\/node_modules\/react-native\/.*/,
  ]);
  console.log('blacklisting', blacklistRE);
  return {
    watchFolders: [
      options.nodeModules || path.resolve(from, '..', '..', 'node_modules'),
    ].concat(workspaces),
    resolver: {
      blacklistRE,
      extraNodeModules: {
        'react-native': path.resolve(from, 'node_modules/react-native'),
      },
    },
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: true,
          inlineRequires: false,
        },
      }),
    },
  };
};

module.exports = getConfig(__dirname);
