/**
 * Created by massimo on 2/25/15.
 */

define([
    'underscore',
    'backbone',
    'scripts/models/movie_model'
], function(_, Backbone, movie_model){

    var movies_collection = Backbone.Collection.extend({
        model: movie_model
    });
    return movies_collection;

});
