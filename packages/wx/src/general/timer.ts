/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: general/timer.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/


type TimerHandler = ( ...args: any[] ) => any;
/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/setInterval.html
 */
const setInterval = ( callback: TimerHandler, delay: number, ...rest: any[] ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/clearInterval.html
 */
const clearInterval = ( intervalID: number ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/setTimeout.html
 */
const setTimeout = ( callback: TimerHandler, delay: number, ...rest: any[] ): void => {};

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/timer/clearTimeout.html
 */
const clearTimeout = ( timeoutID: number ): void => {};


