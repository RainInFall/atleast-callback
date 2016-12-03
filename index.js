module.exports = function(cb) {
  var defaultArgs = Array.from(arguments).slice(1);
  /*  create a closure */
  return function() {
    var args = Array.from(arguments);
    for (var i = args.length; i < defaultArgs.length; i++) {
      args[i] = defaultArgs[i];
    }
    cb.apply(cb, args);
  }
}
