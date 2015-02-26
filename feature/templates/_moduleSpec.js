describe('<%= camelModuleName %> section', function () {
    beforeEach(module('<%= appname %>.<%= camelModuleName %>'));

    it('should have a dummy test', inject(function() {
        expect(true).toBeTruthy();
    }));
});
