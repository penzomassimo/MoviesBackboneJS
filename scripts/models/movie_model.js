/**
 * Created by massimo on 2/25/15.
 */
define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var movie_model = Backbone.Model.extend({
        defaults: {
            name: 'no name',
            year: 'no year'
        }
    });
    return movie_model;

});