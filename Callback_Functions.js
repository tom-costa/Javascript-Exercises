function anotherAddEventListener(typeOfEvent, callback){

    var eventThatHappened = {
        eventType: "keypress",
        key: "a",
        durationOfKeypress: 1
    }

if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
}

}
