
if (typeof gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers = {};

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.conditionTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.userFunc0xb727e8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    function adblockDetection(event) {
        runtimeScene.getVariables().get("__CrazyGamesExtension").getChild("adBlocker").setBoolean(!!event.hasAdblock);
    }

    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    crazysdk.addEventListener("adblockDetectionExecuted", adblockDetection);
} catch(error) {
    console.log("Unable to scan adblockers. Full error is:", error);
}
};
gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.userFunc0xb727e8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CrazyGamesAdApi__ScanForAdBlockers.registeredGdjsCallbacks = [];