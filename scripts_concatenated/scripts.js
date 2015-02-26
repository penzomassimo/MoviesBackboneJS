/**
 * Created by massimo on 2/25/15.
 */
var STORE = {
    my_constructors: {
        models: {},
        collections: {},
        views: {},
        router: {}
    },
    my_objects: {
        models: {},
        collections: {},
        views: {},
        router: {}
    }
};
/**
 * Created by massimo on 2/25/15.
 */
var movies = Backbone.Collection.extend({
    model: movie
});
/**
 * Created by massimo on 2/25/15.
 */
var rest = Backbone.Collection.extend({
    model: user
});


/**
 * Created by massimo on 2/25/15.
 */
var movie = Backbone.Model.extend({
    defaults: {
        name: 'no name',
        year: 'no year'
    }
});
/**
 * Created by massimo on 2/25/15.
 */
var user = Backbone.Model.extend({
    initialize: function(){
        console.log('A new user model has been initialized');
    },
    defaults: {
        firstname: 'no name',
        lastname: 'no lastname'
    }
});
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