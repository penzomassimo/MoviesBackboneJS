/**
 * Created by massimo on 2/25/15.
 */
/**
 * Created by massimo on 2/25/15.
 */
describe("Movie Model", function(){
    var mod = new movie();

    it("has default values set correctly", function() {
        expect(mod.get('name')).toBe('no name');
        expect(mod.get('year')).toBe('no year');
    });

/*
    it("has default year set to 'no year'", function() {
        var mod = new movie();
        expect(mod.get('year')).toBe('no year');
    });
*/


});
