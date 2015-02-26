/**
 * Created by massimo on 2/25/15.
 */
var singleBook = Backbone.View.extend({
    el: '#container',
    initialize: function(){
        console.log('A singleView has been initialized');
        this.render();
    },
    render: function(){
        this.$el.html("Hello Massimo");
    }
});