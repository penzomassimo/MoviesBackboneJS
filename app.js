/**
 * Created by massimo on 2/26/15.
 */
require.config({
    baseUrl: "",
    paths: {
        'backbone': 'bower_components/backbone/backbone',
        'underscore': 'bower_components/underscore/underscore',
        'jquery': 'bower_components/jquery/dist/jquery',
        'text': 'bower_components/text/text'
    }/*,
    shims: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }*/
});

require(["underscore", "backbone", "scripts/routes/app_router.js"], function(_, Backbone, app_router){
    var r = new app_router();
    Backbone.history.start();
});

/*
require(["jquery"], function($) {

    $('#container').html('WWWWWWWWWW');
    var body = $('body');
    console.log(body);

});

require(["backbone", "scripts/models/movie_model.js", "scripts/views/singleBook.js"], function($, movie, singleBook) {
    var t = new movie();
    console.log(JSON.stringify(t));
    var v = new singleBook();
});
*/
