({
    searchKeyChange: function(component, event, helper) {
        var myEvent = $A.get("c:SearchKeyChange");
        myEvent.setParams({"searchKey": event.target.value});
        myEvent.fire();
    }
})
