/**
 * Created by massimo on 2/25/15.
 */
describe("Massimo", function(){

    it("and has a positive case", function() {
        var mod = new movie();
        expect(mod.get('name')).toBe('no name');
    });

    it("and has a positive case", function() {
        var col = new movies();
        expect(col.length).toBe(0);
    });

    it("and has a positive case", function() {
        expect(true).toBe(true);
    });

    it("and has a positive case", function() {
        expect(true).toBe(true);
    });

});
