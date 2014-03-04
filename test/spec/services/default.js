'use strict';

describe('Service: Default', function () {

  // load the service's module
  beforeEach(module('tidalNetworkViewerApp'));

  // instantiate service
  var Default;
  beforeEach(inject(function (_Default_) {
    Default = _Default_;
  }));

  it('should do something', function () {
    expect(!!Default).toBe(true);
  });

});
