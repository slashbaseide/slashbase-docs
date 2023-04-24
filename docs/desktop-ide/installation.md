---
sidebar_position: 1
---

# Install Slashbase Desktop IDE

## Direct Download

Follow the steps below to download & start the app:

1. Download the [latest release](https://github.com/slashbaseide/slashbase/releases) and extract / open the downloaded file.
2. Follow the platform specific step below
    - For Windows, double click the Slashbase file to open the app
    - For MacOS, drag the Slashbase file into the Applications folder and start the app from Launchpad.
    - For Linux, run `./Slashbase` in the terminal to start the app.
      - Requires GLIBC 2.31 minimum to be installed. Check your system version with `ldd --version`
      - Requires libwebkit2gtk-4.0 to be installed. 
        - On Arch-based distributions, you can install it with `pacman -S webkit2gtk`

## Build from source

Follow the steps below to build & start the app:

1. Clone the repository or download the zip.
2. Make sure Go and Wails is installed. Follow the steps [here](https://wails.io/docs/gettingstarted/installation), if not installed.
3. Go to the project root directory and copy the file at development.env.sample and paste as development.env in the root directory of the project.
4. Open the terminal at root directory and run `make build`.
5. The app is created in `build/bin`. 
6. Double click the Slashbase file to open the app on Windows and MacOS. For linux, run `./Slashbase` on terminal to start the app.

## Using Homebrew on macOS.
Make sure [Homebrew](https://brew.sh/) is installed and run the following commands:
```shell
brew install slashbaseide/tap/slashbase
```

## Using Scoop on Windows
Make sure [Scoop](https://scoop.sh) is installed and run the following commands:
```shell
scoop bucket add kulfi-scoop https://github.com/Animesh-Ghosh/kulfi-scoop
scoop install slashbase
```

## Using Arch Linux Repository
Install from the Arch User Repository:
```shell
yay -S slashbase
```

# Troubleshooting 

If you face any issues installing or using slashbase, send us a mail at slashbaseide@gmail.com or contact support chat on our website slashbase.com.



