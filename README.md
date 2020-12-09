# Minimal reproduction of reanimated 1520 issue

Issue link: https://github.com/software-mansion/react-native-reanimated/issues/1520


To test proposed fix, replace `react-native-reanimated` version in package.json with:
```
"react-native-reanimated": "DrRefactor/react-native-reanimated#web-node-updates
```

...and perform few workarounds for alias-files problems:

```
cp node_modules/react-native-reanimated/src/Animated.js node_modules/react-native-reanimated/src/index.js
```

and build:

```
cd node_modules/react-native-reanimated
npx @react-native-community/bob build
```
