var exampleCallback = function() {
    console.log('Order complete!');
};

window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '70228375963',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-70228375963',
    onOrderComplete: exampleCallback
});