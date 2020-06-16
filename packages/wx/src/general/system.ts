/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: general/system.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

export type SafeAra = {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}

export type SystemInfo = {
    brand: string;
    model: string;
    pixelRatio: number;
    screenWidth: number;
    screenHeight: number;
    windowWidth: number;
    windowHeight: number;
    statusBarHeight: number;
    language: string;
    version: string;
    system: string;
    platform: string;
    fontSizeSetting: number;
    SDKVersion: string;
    benchmarkLevel: number;
    albumAuthorized: boolean;
    cameraAuthorized: boolean;
    locationAuthorized: boolean;
    microphoneAuthorized: boolean;
    notificationAuthorized: boolean;
    notificationAlertAuthorized: boolean;
    notificationBadgeAuthorized: boolean;
    notificationSoundAuthorized: boolean;
    bluetoothEnabled: boolean;
    locationEnabled: boolean;
    wifiEnabled: boolean;
    safeArea: SafeArea;
    theme?: 'light' | 'dark';
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfoSync.html
 */
const getSystemInfoSync: () => SystemInfo = () => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html
 */
const getSystemInfo: ( object?: {
    success?: ( res: SystemInfo ) => void;
    fail?: () => void;
    complete?: () => void;
} ) => void = () => {
}

export default { getSystemInfo, getSystemInfoSync }
