//Adding push notification support
MFPPush.initialize(
     function(successResponse) {
           console.log(">> in MFPPush.initialize - successResponse ...");
      WL.Logger.debug("Successfully intialized");
      MFPPush.registerNotificationsCallback(notificationReceived);
  }, function(failureResponse) {
        console.log(">> in MFPPush.initialize - failureResponse ...:" + failureResponse);
      alert("Failed to initialize");
  });


// Adding push notification callback method
var notificationReceived = function(message) {
  alert (JSON.stringify(message));
};


//MFPPush.isPushSupported method
  MFPPush.isPushSupported(
  function(successResponse) {
    alert("Push Supported: " + successResponse);
  }, function(failureResponse) {
    alert("Failed to get push support status");
  });

//MFPPush.registerDevice method
var options = {"phoneNumber":""};
MFPPush.registerDevice(options,
   function(successResponse) {
    console.log(">>> registerDevice - successResponse :" + successResponse);
    alert("Successfully registered");
}, function(failureResponse) {
    console.log(">>> registerDevice - failureResponse :" + failureResponse);
    alert("Failed to register");
});
