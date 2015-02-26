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