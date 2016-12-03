var atleast = require('../index');
var expect = require('expect');

describe('#Atleast', function(){
  it('should callback, >_*', function(done){
    this.timeout(500);
    var cb = atleast(function(){
      done()
    });
    cb();
  });

  it('should callback when detach', function(done){
    this.timeout(500);
    var cb = atleast(function(){
      done()
    });
    setTimeout(cb, 1);
  })

  it('should have default args', function(done){
    this.timeout(500);
    var cb = atleast(function(one, two, three){
      expect(one).toBe(1);
      expect(two).toBe(2);
      expect(three).toBe(3);
      done();
    }, 1, 2, 3);
    setTimeout(cb, 1);
  });

  it('should not overwrite callback value', function(done){
    this.timeout(500);
    var cb = atleast(function(one, two, three){
      expect(one).toBe(1);
      expect(two).toBe(2);
      expect(three).toBe(3);
      done();
    }, 100, 200, 3);
    setTimeout(function(){
      cb(1, 2);
    }, 1);
  });

  it('should callback value undefine', function(done){
    this.timeout(500);
    var cb = atleast(function(){
      var args = Array.from(arguments);
      expect(args.length).toBe(2);
      expect(args[0]).toBe(null);
      expect(args[1]).toBe(undefined);
      done();
    }, null, undefined);
    setTimeout(function(){
      cb(null);
    }, 1);
  })
});
