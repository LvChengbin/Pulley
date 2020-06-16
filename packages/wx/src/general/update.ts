/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: general/update.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.html
 */
class UpdateManager {
    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.applyUpdate.html
     */
    public applyUpdate() {
    }

    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onCheckForUpdate.html
     */
    public onCheckForUpdate( callback: ( hasUpdate: boolean ) => void ) {
    }

    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateReady.html
     */
    public onUpdateReady( callback: () => void ) {
    }

    /**
     * https://developers.weixin.qq.com/miniprogram/dev/api/base/update/UpdateManager.onUpdateFailed.html
     */
    public onUpdateFailed( callback: () => void ) {
    }
}

/**
 * https://developers.weixin.qq.com/miniprogram/dev/api/base/update/wx.getUpdateManager.html
 */
const getUpdateManager: () => UpdateManager = () => {};

export default { getUpdateManager }
