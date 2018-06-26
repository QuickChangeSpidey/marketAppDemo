# marketAppDemo

# Android Build:

1. Requirements:
Java JDK
Android Studio

2. To Run
To run your app, all you have to do is enable USB debugging and Developer Mode on your Android device, then run 
ionic cordova run android --device 
from the command line.

3. To sign App:
keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias

# iOS Build:

1. Requirements:
Xcode 7 or higher
iOS 9
A free Apple ID or paid Apple Developer account (Not needed but better to have)

2. Creating a Provisioning Profile
To start, you’ll need to set up a provisioning profile to code sign your apps.
Using an Apple ID
Open Xcode preferences (Xcode > Preferences…)
Click the ‘Accounts’ tab
Login with your Apple ID (+ > Add Apple ID…)
Once you’ve successfully logged in, a new ‘Personal Team’ with the role ‘Free’ will appear beneath your Apple ID.

3. Running Your App
Run a production build of your app with ionic cordova build ios --prod
Open the .xcodeproj file in platforms/ios/ in Xcode
Connect your phone via USB and select it as the run target
Click the play button in Xcode to try to run your app

Troubleshooting for certs in iOS checkout: https://ionicframework.com/docs/intro/deploying/

## If the click events don't work for iOS or Basic troubleshooting: 
follow this post:
https://ionicframework.com/docs/wkwebview/#downgrading-to-uiwebview

4. Built using:
cli packages: (/usr/local/lib/node_modules)

    @ionic/cli-utils  : 1.19.2
    ionic (Ionic CLI) : 3.20.0

global packages:

    cordova (Cordova CLI) : 8.0.0 

local packages:

    @ionic/app-scripts : 3.1.10
    Cordova Platforms  : android 7.0.0 ios 4.5.4
    Ionic Framework    : ionic-angular 3.9.2

System:

    Node : v8.11.3
    npm  : 5.6.0 
    OS   : macOS Sierra


