import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        letter: { refreshModel: true },
        page: { refreshModel: true },
        sort: { refreshModel: true },
    },

    model: function(params) {
        // The backend throws an error if the letter param is
        // empty or null.
        if(!params.letter) {
            delete params.letter;
        }

        return this.store.find('crate', params);
    },
});
