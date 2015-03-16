/**
 * Created by massimo on 2/25/15.
 */
define([
    'underscore',
    'backbone',
    '../collections/movies_collection',
    '../views/movie_list_view',
    '../models/movie_model'
], function(_, Backbone, movies_collection, movie_list_view, movie_model){



    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "handleRoute"
        },
        handleRoute: function(){
            console.log('router initialized');

            /*creating a collection of movies*/
            var movies = new movies_collection();

            /*creating some movies so we can fill the previous collection*/
            var movie1 = new movie_model();
            var movie2 = new movie_model();
            var movie3 = new movie_model();
            var movie4 = new movie_model();

            /*adding the movies to the collection*/
            movies.add(movie1);
            movies.add(movie2);
            movies.add(movie3);
            movies.add(movie4);

            console.log(movies[2].name);



        }
    });








    return AppRouter;
});
