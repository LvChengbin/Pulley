/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: general/debug.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

export class LogManager {
    public debug( ...args: any[] ): void {
    }
    public info( ...args: any[] ): void {
    }
    public log( ...args: any[] ): void {
    }
    public warn( ...args: any[] ): void {
    }
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/RealtimeLogManager.html
 */
export class RealtimeLogManager {
    public info( ...args: any[] ): void {};
    public warn( ...args: any[] ): void {};
    public error( ...args: any[] ): void {};
    public setFilterMsg( msg: string ): void {};
    public addFilterMsg( msg: string ): void {};
    public in( pageInstance: any ): void {};
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.setEnableDebug.html
 */
const setEnableDebug = ( object: {
    enableDebug: boolean;
    success?: () => void;
    fail?: () => void;
    complete?: () => void;
} ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getRealtimeLogManager.html
 */
const getRealtimeLogManager = (): RealtimeLogManager => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/debug/wx.getLogManager.html
 */
const getLogManager = ( object: { level?: number = 0 } ): LogManager => {};

export default {
    setEnableDebug,
    getRealtimeLogManager,
    getLogManager
};
