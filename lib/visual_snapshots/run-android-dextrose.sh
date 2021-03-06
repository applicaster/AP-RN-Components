#!/bin/bash
LOCAL=true npx fructose-tunnel
emulator @Nexus_5X_API_25 -no-boot-anim &
EMU_PID=$!
adb wait-for-device
adb reverse tcp:8081 tcp:8081
adb reverse tcp:7811 tcp:7811
adb reverse tcp:4723 tcp:4723
npm run fetch-fonts
npx lerna run dextrose-clean
npx lerna run dextrose-stories --since
npx compile-tests -d fructose
npx rnstl --searchDir ./packages --pattern '**/*/*.stories!(.web).dextrose.tmp.js' --outputFile ./fructose/components.js
npx react-native start --root fructose --projectRoots $(pwd)/fructose,$(pwd) &
npx react-native run-android --variant=release --no-packager
npx dextrose run --config ./dextrose/dextrose.android.js --timeout 600000  --snapshotWait 2000
npx lerna run dextrose-clean
kill -9 $EMU_PID
