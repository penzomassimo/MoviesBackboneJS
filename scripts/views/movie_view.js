/**
 * Created by massimo on 3/15/15.
 */
define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var movie_view = Backbone.View.extend({
        el: '#movies',
        initialize: function(){
            console.log('A Movie view has been initialized');
            this.render();
        },
        template: 'movie_template',
        render: function(){
            var that = this;
            $.get("templates/" + this.template + ".html", function(template){
                var html = $(template).html();
                that.$el.html(html);
            });
            return this;
        },
        events: {
            /*'mouseover': 'handler'*/
        },
        handler: function(){
            /*console.log('view clicked');*/
        }
    });
    return movie_view;

});
