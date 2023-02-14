
if (typeof gdjs.evtsExt__CrazyGamesAdApi__InviteLink !== "undefined") {
  gdjs.evtsExt__CrazyGamesAdApi__InviteLink.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CrazyGamesAdApi__InviteLink = {};

gdjs.evtsExt__CrazyGamesAdApi__InviteLink.conditionTrue_0 = {val:false};
gdjs.evtsExt__CrazyGamesAdApi__InviteLink.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__CrazyGamesAdApi__InviteLink.userFunc0x8f8d40 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    const crazysdk = window.CrazyGames.CrazySDK.getInstance();
    const roomId = eventsFunctionContext.getArgument("RoomId");
    const linkToShare = crazysdk.inviteLink({ roomId: roomId });

    eventsFunctionContext.returnValue = linkToShare;
} catch(error) {
    console.log("Unable to create an invite link. Full error is:", error);
}
};
gdjs.evtsExt__CrazyGamesAdApi__InviteLink.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CrazyGamesAdApi__InviteLink.userFunc0x8f8d40(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__CrazyGamesAdApi__InviteLink.func = function(runtimeScene, RoomId, parentEventsFunctionContext) {
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
if (argName === "RoomId") return RoomId;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CrazyGamesAdApi__InviteLink.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CrazyGamesAdApi__InviteLink.registeredGdjsCallbacks = [];