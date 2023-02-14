
if (typeof gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK = {};

gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.conditionTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.userFunc0x8f8d40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.init();
    runtimeScene.getVariables().get("__CrazyGamesExtension").getChild('sdkInitialized').setBoolean(true);
} catch(error) {
    console.log("Unable to initialize SDK. Full error is:", error);
}
};
gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.userFunc0x8f8d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("__CrazyGamesExtension").getChild("sdkInitialized"), false);
}if (gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CrazyGamesAdApi__InitializeSDK.registeredGdjsCallbacks = [];