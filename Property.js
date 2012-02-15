define(function () {
    var Property = function (config) {
        var that = {};
        var module = require('modelModule');
        var owner, value, defaultValue;
        var newValue = '';
        var name = config.name;

        publicMethods();
        that.update(config);
        return that;

        function publicMethods() {
            that.setValue = function (v) {
                if (value !== v) {
                    value = v;
                    module.propertyValueUpdated(that);
                }
            };

            that.getPath = function () {
                return owner.getPath() + ':' + name;
            };

            that.getValue = function () {
                return (value !== undefined ? value : defaultValue) || '';
            };


            that.update = function (config) {
                config.value !== undefined && that.setValue(config.value);
                config.defaultValue !== undefined && (defaultValue = config.defaultValue);
            };

            that.instanceOf = function (ctor) {
                return ctor === Property;
            };

            that.getName = function () {
                return name;
            };

            that.setOwner = function (v) {
                owner = v;
            };

            that.getOwner = function () {
                return owner;
            };

            that.setNewValue = function (v) {
                newValue = v;
                module.propertyNewValueUpdated(that);
            };

            that.getNewValue = function () {
                return newValue;
            };

            that.setDefaultValue = function (v) {
                defaultValue = v;
                if (value === undefined) {
                    module.propertyValueUpdated(that);
                }
            };

            that.getDefaultValue = function () {
                return defaultValue || '';
            };

            that.isDirty = function () {
                return newValue !== value;
            };
        }
    }
    return Property;
});