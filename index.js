'use strict';

/**
 * Generate a random alpha-char
 *
 * @api private
 * @return {String}
 */
function c() {
  return String.fromCharCode(Math.floor(Math.random() * 25) + 97);
}

/**
 * Generate a random alpha-string of `len` characters.
 *
 * @api private
 * @param {Number} len
 * @return {String}
 */
function str(len) {
  var i,
      s = '';

  for (i = 0; i < len; i++)
    s += c();

  return s;
}

/**
 * Generate a random, unused ID
 *
 * @api public
 * @param {Number} [len] Length of the ID to generate
 * @return {String}
 */
var rndid = module.exports = function (len) {
  var id = str(len || 7);

  // lookup to guarantee unique
  if (document.getElementById(id))
    // try again
    return rndid(len);

  return id;
};
