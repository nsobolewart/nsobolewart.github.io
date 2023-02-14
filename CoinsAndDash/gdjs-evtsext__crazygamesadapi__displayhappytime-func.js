
if (typeof gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime = {};

gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.conditionTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.userFunc0x8f8d40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    // Player beats a boss, reaches a high score, etc.
    crazysdk.happytime();
} catch(error) {
    console.log("Unable to display happytime. Full error is:", error);
}
};
gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.userFunc0x8f8d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CrazyGamesAdApi__DisplayHappyTime.registeredGdjsCallbacks = [];