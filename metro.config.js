const { getDefaultConfig } = require('expo/metro-config');

getDefaultConfig(__dirname).resolver.assetExts.push('cjs');

module.exports = getDefaultConfig(__dirname);
