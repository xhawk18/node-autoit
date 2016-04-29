/*
This code is from ref-wchar by nathan

License
(The MIT License)

Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Module dependencies.
 */

var ref = require('ref');
//var Iconv = require('iconv').Iconv;
var iconv = require('iconv-lite');

/**
 * On Windows they're UTF-16 (2-bytes),
 * but on Unix platform they're UTF-32 (4-bytes).
 *
 * TODO: add a way to optionally enable `-fshort-wchar` for Unix (gcc option).
 */

var size;
if ('win32' == process.platform) {
  size = 2;
} else {
  size = 4;
}

var wchar_encoding = ('utf-' + (8*size) + ref.endianness).toLowerCase();
//var getter = new Iconv('UTF-' + (8 * size) + ref.endianness, 'UTF-8');
//var setter = new Iconv('UTF-8', 'UTF-' + (8 * size) + ref.endianness);


/**
 * The `wchar_t` type.
 */

exports = module.exports = Object.create(ref.types['int' + (8 * size)]);
exports.name = 'wchar_t';
exports.size = size;
exports.indirection = 1;
exports.get = function get (buf, offset) {
  if (offset > 0 || buf.length !== exports.size) {
    offset = offset | 0;
    buf = buf.slice(offset, offset + size);
  }
  return exports.toString(buf);
};
exports.set = function set (buf, offset, val) {
  var _buf = val; // assume val is a Buffer by default
  if (typeof val === 'string') {
    //_buf = setter.convert(val[0]);
    _buf = iconv.encode(val[0], wchar_encoding);
  } else if (typeof val === 'number') {
    //_buf = setter.convert(String.fromCharCode(val));
    _buf = iconv.encode(String.fromCharCode(val), wchar_encoding);
  } else if (!_buf) {
    throw new TypeError('muss pass a String, Number, or Buffer for `wchar_t`');
  }
  return _buf.copy(buf, offset, 0, size);
};


/**
 * The "wchar_t *" type.
 *
 * We use the "CString" type as a base since it's pretty close to what we
 * actually want. We just have to define custom "get" and "set" functions.
 */

exports.string = Object.create(ref.types.CString);
exports.string.name = 'WCString';
exports.string.get = function get (buf, offset) {
  var _buf = buf.readPointer(offset);
  if (_buf.isNull()) {
    return null;
  }
  var stringBuf = _buf.reinterpretUntilZeros(exports.size);
  return exports.toString(stringBuf);
};
exports.string.set = function set (buf, offset, val) {
  var _buf = val; // val is a Buffer? it better be \0 terminated...
  if ('string' == typeof val) {
    //_buf = setter.convert(val + '\0');
    _buf = iconv.encode(val + '\0', wchar_encoding);
  }
  return buf.writePointer(_buf, offset);
};

/**
 * Turns a `wchar_t *` Buffer instance into a JavaScript String instance.
 *
 * @param {Buffer} buffer - buffer instance to serialize
 * @public
 */

exports.toString = function toString (buffer) {
  //return getter.convert(buffer).toString('utf8');
  return iconv.decode(buffer, wchar_encoding);
};
