// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-3-11
description: >
    Array.prototype.filter - 'length' is a string containing a
    positive number
---*/

        function callbackfn(val, idx, obj) {
            return true;
        }

        var obj = { 1: 11, 2: 9, length: "2" };

        var newArr = Array.prototype.filter.call(obj, callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');
