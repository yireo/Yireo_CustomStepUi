define(
    [
        'ko',
        'uiComponent',
        'underscore',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function (
        ko,
        Component,
        _,
        stepNavigator
    ) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Yireo_CustomStepUi/custom-step'
            },
            initialize: function () {
                this._super();
                stepNavigator.registerStep(
                    'custom_step',
                    null,
                    'My Custom Step',
                    this.isVisible,
                    _.bind(this.navigate, this),
                    15
                );
                return this;
            },
            isVisible: ko.observable(true),
            navigate: function () {},
            navigateToNextStep: function () {
                stepNavigator.next();
            }
        });
    }
);