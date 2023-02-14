
if (typeof gdjs.evtsExt__My_GamePixSDK__RewardAd !== "undefined") {
  gdjs.evtsExt__My_GamePixSDK__RewardAd.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__My_GamePixSDK__RewardAd = {};

gdjs.evtsExt__My_GamePixSDK__RewardAd.conditionTrue_0 = {val:false};
gdjs.evtsExt__My_GamePixSDK__RewardAd.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__My_GamePixSDK__RewardAd.userFunc0x8be920 = function(runtimeScene, eventsFunctionContext) {
"use strict";
var result = runtimeScene.getGame().getVariables().get("GamePixSDK_RewardedAdResult"); 
window.GamePix.rewardAd().then(function (res) {
    if (res.success) {
      result = true;
      console.log("rewardAdYes")
    } else {
      result = false;
      console.log("rewardAdNo")
    }
  });
};
gdjs.evtsExt__My_GamePixSDK__RewardAd.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__My_GamePixSDK__RewardAd.userFunc0x8be920(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__My_GamePixSDK__RewardAd.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__My_GamePixSDK__RewardAd.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__My_GamePixSDK__RewardAd.registeredGdjsCallbacks = [];