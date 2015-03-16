/**
 * Created by massimo on 2/25/15.
 */
define([
    'underscore',
    'backbone'
], function(_, Backbone){

    var movie_model = Backbone.Model.extend({
        initialize: function(){
          console.log('a new movie_model has been initialized');
        },
        defaults: {
            name: 'no name',
            year: 'no year'
        }
    });
    return movie_model;

});
