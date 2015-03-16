/**
 * Created by massimo on 3/15/15.
 */
define([
    'underscore',
    'backbone',
    'scripts/views/movie_view'
], function(_, Backbone, movie_view){

    var movie_list_view = Backbone.View.extend({
        el: '#movies',
        initialize: function(){
            console.log('the movie list view has been initialized');
        },
        render: function(){
            _.each(this.collection.models, function(movie){
                console.log(movie.toJSON());
                var MovieView = new movie_view({model: movie});
                this.$el.append(MovieView.render().el);
            }, this);
        }
    });
    return movie_list_view;

});