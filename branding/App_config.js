const APP_PATH = 'carter';

const AppConfig = {
    config: require(`./${APP_PATH}/configuration/Config.js`),
    styling: require(`./${APP_PATH}/styles/Style.js`),
    colors: require(`./${APP_PATH}/styles/Colors.js`),
    typography: require(`./${APP_PATH}/styles/Typography.js`),
    assets: require(`./${APP_PATH}/assets/Assets.js`),
};

export default AppConfig;
