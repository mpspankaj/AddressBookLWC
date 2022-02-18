({
  handelValueChange: function (component, event, helper) {
    let name = event.getParam("value");
    var cmpEvent = component.getEvent("cmpEvent");
    cmpEvent.setParams({
      message: name
    });
    cmpEvent.fire();
  }
});
