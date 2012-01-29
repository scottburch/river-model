A simple tree based model with children and properties

To create a model object decorated with tree/property behavior:

    /**
    ** my model constructor
    **/
    function MyModelThing(id) {
        var ModelBase = require('modelModule').ModelBase;
        var that = ModelBase(config.id);

        that.someMethod = function() {

        }

        return that;
    }



