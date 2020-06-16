/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: general/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.canIUse.html
 */
const canIUse: ( schema: string ) => booleann = () => {}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html
 */
const base64ToArrayBuffer: ( base64: string ) => ArrayBuffer = () => {}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html
 */
const arrayBufferToBase64: ( arrayBuffer: ArrayBuffer ) => string = () => {}

export default {
    canIUse,
    base64ToArrayBuffer,
    arrayBufferToBase64
};
