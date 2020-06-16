/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: routing/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

export type RoutingParams = {
    url: string;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
};

export type EventChannelCallback = ( ...args: any[] ) => any;

class EventChannel {
    public emit( eventName: string, ...args: any[] ): void {
    }

    public on( eventName: string, fn: EventChannelCallback ): void {
    }

    public once( eventName: string, fn: EventChannelCallback ): void {
    }

    public off( eventName: string, fn: EventChannelCallback ): void {
    }
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html
 */
const switchTab = ( object: RoutingParams ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html
 */
const reLaunch = ( object: RoutingParams ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html
 */
const redirectTo = ( object: RoutingParams ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
 */
const navigateTo = ( object: Omit<RoutingParams, 'success'> & {
    events: { [ key: string ]: any };
    success: ( eventChannel: EventChannel ) => void;
} ): void => {}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html
 */
const navigateBack = ( object: RoutingParams & { delta?: number } ): void => {};

export default {
    switchTab, reLaunch, 
    redirectTo, navigateTo, navigateBack
};
