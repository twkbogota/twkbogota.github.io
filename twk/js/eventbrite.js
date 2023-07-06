var exampleCallback = function() {
    console.log('Order complete!');
};

window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '95158518691',
    modal: true,
    modalTriggerElementId: 'eventbrite-widget-modal-trigger-95158518691',
    onOrderComplete: exampleCallback
});
