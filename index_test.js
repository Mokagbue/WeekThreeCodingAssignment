var expect = chai.expect;

describe('MyFunctions', function() {
  describe('#war', function () {
    it("should take two player hands, arrays, and compare their values. Number one is Ace and beats all", function () {
      var x = war([52], [1]);
      expect(x).to.equal("Player Two has won the war... but at what cost.");
    });
    it("Should throw an error if player hands, arrays, are not provided", function () {
      expect(function () {
        war(undefined, [52]);
      }).to.throw(Error);
    });
  });
});
