
if (typeof gdjs.evtsExt__My_GamePixSDK__localStorageSetItem !== "undefined") {
  gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__My_GamePixSDK__localStorageSetItem = {};

gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.conditionTrue_0 = {val:false};
gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.userFunc0xb6f4c0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
window.GamePix.localStorage.setItem(eventsFunctionContext.getArgument("key"), eventsFunctionContext.getArgument("value"));
};
gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.userFunc0xb6f4c0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.func = function(runtimeScene, key, value, parentEventsFunctionContext) {
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
if (argName === "key") return key;
if (argName === "value") return value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__My_GamePixSDK__localStorageSetItem.registeredGdjsCallbacks = [];