/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: src/performance.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/16/2020
 * Description: 
 ******************************************************************/

const onMemoryWarning: ( callback?: ( level?: number ) => void ) => void = () => {};
const offMemoryWarning: ( callback?: () => void ) => void = () => {};

export default { onMemoryWarning, offMemoryWarning }
