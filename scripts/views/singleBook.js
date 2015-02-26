/**
 * Created by massimo on 2/25/15.
 */
var singleBook = Backbone.View.extend({
    el: '#container',
    initialize: function(){
        console.log('A singleView has been initialized');
        this.render();
    },
    template: 'template1',
    render: function(){
        var that = this;
        $.get("templates/" + this.template + ".html", function(template){
            var html = $(template).html();
            that.$el.html(html);
        });
        return this;
    }
});