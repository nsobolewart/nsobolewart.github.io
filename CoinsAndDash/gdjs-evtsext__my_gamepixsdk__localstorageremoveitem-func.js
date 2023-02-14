
if (typeof gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem !== "undefined") {
  gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem = {};

gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.conditionTrue_0 = {val:false};
gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.userFunc0x8f8d40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
window.GamePix.localStorage.removeItem(eventsFunctionContext.getArgument("key"));
};
gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.userFunc0x8f8d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.func = function(runtimeScene, key, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__My_GamePixSDK__localStorageRemoveItem.registeredGdjsCallbacks = [];