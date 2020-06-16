/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: general/miniprogram.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

export type ReferrerInfo = {
    appId: string;
    extraData: Record<string | number, any>;
};

export type LaunchOptions = {
    path: string;
    scene: number;
    query: Record<string, string>;
    shareTicket: string;
    referrerInfo?: ReferrerInfo;
};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getLaunchOptionsSync.html
 */
const getLaunchOptionsSync = (): LaunchOptions => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/life-cycle/wx.getEnterOptionsSync.html
 */
const getEnterOptionsSymc = (): LaunchOptions => {};

export type UnhandleRejectionHandler = ( reason: string | Error, promise: Promise<any> ) => void;
/*
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onUnhandledRejection.html
 */
const onUnhandledRejection = ( callback: UnhandleRejectionHandler ): void => {}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offUnhandledRejection.html
 */
const offUnhandledRejection = ( callback: UnhandleRejectionHandler ): void => {};


export type ThemeChangeHandler = ( theme: 'light' | 'dark' ) => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onThemeChange.html
 */
const onThemeChange = ( callback: ThemeChangeHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offThemeChange.html
 */
const offThemeChange = ( callback: ThemeChangeHandler ): void => {};

export type PageNotFoundHandler = ( res: { path: string; query: Record<string, string>; isEntryPage: boolean; } ) => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onPageNotFound.html
 */
const onPageNotFound = ( callback: PageNotFoundHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offPageNotFound.html
 */
const offPageNotFound = ( callback: PageNotFoundHandler ): void => {};

export type ErrorHandler = ( error: string ) => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onError.html
 */
const onError = ( callback: ErrorHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offError.html
 */
const offError = ( callback: ErrorHandler ): void => {};

export type AudioInterruptionEndHandler = () => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionEnd.html
 */
const onAudioInterruptionEnd = ( callback: AudioInterruptionEndHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionEnd.html
 */
const offAudioInterruptionEnd = ( callback: AudioInterruptionEndHandler ): void => {};

export type AudioInterruptionBeginHandler = () => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAudioInterruptionBegin.html
 */
const onAudioInterruptionBegin = ( callback: AudioInterruptionBeginHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAudioInterruptionBegin.html
 */
const offAudioInterruptionBegin = ( callback: AudioInterruptionBeginHandler ): void => {};

export type AppShowHandler = ( res: LaunchOptions ) => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppShow.html
 */
const onAppShow = ( callback: AppShowHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppShow.html
 */
const offAppShow = ( callback: AppShowHandler ): void => {};

export type AppHideHandler = () => void;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html
 */
const onAppHide = ( callback: AppHideHandler ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.offAppHide.html
 */
const offAppHide = ( callback: AppHideHandler ): void => {};

export default {
    getLaunchOptionsSync,
    getEnterOptionsSymc,
    onUnhandledRejection, offUnhandledRejection,
    onThemeChange, offThemeChange,
    onPageNotFound, offPageNotFound,
    onError, offError,
    onAudioInterruptionEnd, offAudioInterruptionEnd,
    onAudioInterruptionBegin, offAudioInterruptionBegin,
    onAppShow, offAppShow,
    onAppHide, offAppHide
}
