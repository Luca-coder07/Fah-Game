gdjs.Game_32mainCode = {};
gdjs.Game_32mainCode.localVariables = [];
gdjs.Game_32mainCode.GDasteroidObjects1_1final = [];

gdjs.Game_32mainCode.GDvaisseau1Objects1_1final = [];

gdjs.Game_32mainCode.GDvaisseau2Objects1_1final = [];

gdjs.Game_32mainCode.GDvaisseau1Objects1= [];
gdjs.Game_32mainCode.GDvaisseau1Objects2= [];
gdjs.Game_32mainCode.GDasteroidObjects1= [];
gdjs.Game_32mainCode.GDasteroidObjects2= [];
gdjs.Game_32mainCode.GDscoreObjects1= [];
gdjs.Game_32mainCode.GDscoreObjects2= [];
gdjs.Game_32mainCode.GDbullet1Objects1= [];
gdjs.Game_32mainCode.GDbullet1Objects2= [];
gdjs.Game_32mainCode.GDetoileObjects1= [];
gdjs.Game_32mainCode.GDetoileObjects2= [];
gdjs.Game_32mainCode.GDvaisseau2Objects1= [];
gdjs.Game_32mainCode.GDvaisseau2Objects2= [];
gdjs.Game_32mainCode.GDbullet2Objects1= [];
gdjs.Game_32mainCode.GDbullet2Objects2= [];


gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet1Objects1Objects = Hashtable.newFrom({"bullet1": gdjs.Game_32mainCode.GDbullet1Objects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet2Objects1Objects = Hashtable.newFrom({"bullet2": gdjs.Game_32mainCode.GDbullet2Objects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet1Objects1Objects = Hashtable.newFrom({"bullet1": gdjs.Game_32mainCode.GDbullet1Objects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet2Objects1Objects = Hashtable.newFrom({"bullet2": gdjs.Game_32mainCode.GDbullet2Objects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects1});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDvaisseau1Objects2Objects = Hashtable.newFrom({"vaisseau1": gdjs.Game_32mainCode.GDvaisseau1Objects2});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects2Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects2});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDvaisseau2Objects2Objects = Hashtable.newFrom({"vaisseau2": gdjs.Game_32mainCode.GDvaisseau2Objects2});
gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects2Objects = Hashtable.newFrom({"asteroid": gdjs.Game_32mainCode.GDasteroidObjects2});
gdjs.Game_32mainCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("asteroid"), gdjs.Game_32mainCode.GDasteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("bullet1"), gdjs.Game_32mainCode.GDbullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.Game_32mainCode.GDbullet2Objects1);
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Game_32mainCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Game_32mainCode.GDbullet1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDbullet1Objects1[i].setX(gdjs.Game_32mainCode.GDbullet1Objects1[i].getX() + (5));
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDbullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDbullet2Objects1[i].setX(gdjs.Game_32mainCode.GDbullet2Objects1[i].getX() + (5));
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDasteroidObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDasteroidObjects1[i].setX(gdjs.Game_32mainCode.GDasteroidObjects1[i].getX() - (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDscoreObjects1[i].getBehavior("Text").setText("Score : " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDasteroidObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDasteroidObjects1[i].getBehavior("Resizable").setSize(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9289212);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "create");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9290492);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "increase");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "increase") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(0.5);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "increase");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "create") >= 5;
if (isConditionTrue_0) {
gdjs.Game_32mainCode.GDasteroidObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects, gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100), gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects, gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100), gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects, gdjs.randomInRange(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 100), gdjs.randomInRange(0, gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber()), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "create");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau1"), gdjs.Game_32mainCode.GDvaisseau1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau1Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getY() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau1Objects1[k] = gdjs.Game_32mainCode.GDvaisseau1Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau1Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau1Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau1Objects1[i].setY(gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getY() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau1"), gdjs.Game_32mainCode.GDvaisseau1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau1Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getY() < gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 32 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau1Objects1[k] = gdjs.Game_32mainCode.GDvaisseau1Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau1Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau1Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau1Objects1[i].setY(gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getY() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau1"), gdjs.Game_32mainCode.GDvaisseau1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau1Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getX() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 32 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau1Objects1[k] = gdjs.Game_32mainCode.GDvaisseau1Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau1Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau1Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau1Objects1[i].setX(gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau1"), gdjs.Game_32mainCode.GDvaisseau1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau1Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getX() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau1Objects1[k] = gdjs.Game_32mainCode.GDvaisseau1Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau1Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau1Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau1Objects1[i].setX(gdjs.Game_32mainCode.GDvaisseau1Objects1[i].getX() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("asteroid"), gdjs.Game_32mainCode.GDasteroidObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDasteroidObjects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDasteroidObjects1[i].getX() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Game_32mainCode.GDasteroidObjects1[k] = gdjs.Game_32mainCode.GDasteroidObjects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDasteroidObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDasteroidObjects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDasteroidObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDasteroidObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9298908);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vaisseau1"), gdjs.Game_32mainCode.GDvaisseau1Objects1);
gdjs.Game_32mainCode.GDbullet1Objects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "tir.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet1Objects1Objects, (( gdjs.Game_32mainCode.GDvaisseau1Objects1.length === 0 ) ? 0 :gdjs.Game_32mainCode.GDvaisseau1Objects1[0].getPointX("bulletout")), (( gdjs.Game_32mainCode.GDvaisseau1Objects1.length === 0 ) ? 0 :gdjs.Game_32mainCode.GDvaisseau1Objects1[0].getPointY("bulletout")), "");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9299892);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("vaisseau2"), gdjs.Game_32mainCode.GDvaisseau2Objects1);
gdjs.Game_32mainCode.GDbullet2Objects1.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "tir.ogg", false, 100, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet2Objects1Objects, (( gdjs.Game_32mainCode.GDvaisseau2Objects1.length === 0 ) ? 0 :gdjs.Game_32mainCode.GDvaisseau2Objects1[0].getPointX("bulletout")), (( gdjs.Game_32mainCode.GDvaisseau2Objects1.length === 0 ) ? 0 :gdjs.Game_32mainCode.GDvaisseau2Objects1[0].getPointY("bulletout")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet1"), gdjs.Game_32mainCode.GDbullet1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDbullet1Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDbullet1Objects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32mainCode.GDbullet1Objects1[k] = gdjs.Game_32mainCode.GDbullet1Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDbullet1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDbullet1Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDbullet1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDbullet1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.Game_32mainCode.GDbullet2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDbullet2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDbullet2Objects1[i].getX() > gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32mainCode.GDbullet2Objects1[k] = gdjs.Game_32mainCode.GDbullet2Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDbullet2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDbullet2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDbullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDbullet2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("asteroid"), gdjs.Game_32mainCode.GDasteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("bullet1"), gdjs.Game_32mainCode.GDbullet1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet1Objects1Objects, gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDasteroidObjects1 */
/* Reuse gdjs.Game_32mainCode.GDbullet1Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDasteroidObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDasteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDbullet1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDbullet1Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "meteorite.ogg", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("asteroid"), gdjs.Game_32mainCode.GDasteroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("bullet2"), gdjs.Game_32mainCode.GDbullet2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDbullet2Objects1Objects, gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDasteroidObjects1 */
/* Reuse gdjs.Game_32mainCode.GDbullet2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDasteroidObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDasteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDbullet2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDbullet2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "meteorite.ogg", false, 100, 1);
}}

}


{

gdjs.Game_32mainCode.GDasteroidObjects1.length = 0;

gdjs.Game_32mainCode.GDvaisseau1Objects1.length = 0;

gdjs.Game_32mainCode.GDvaisseau2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32mainCode.GDasteroidObjects1_1final.length = 0;
gdjs.Game_32mainCode.GDvaisseau1Objects1_1final.length = 0;
gdjs.Game_32mainCode.GDvaisseau2Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("asteroid"), gdjs.Game_32mainCode.GDasteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("vaisseau1"), gdjs.Game_32mainCode.GDvaisseau1Objects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDvaisseau1Objects2Objects, gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32mainCode.GDasteroidObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32mainCode.GDasteroidObjects1_1final.indexOf(gdjs.Game_32mainCode.GDasteroidObjects2[j]) === -1 )
            gdjs.Game_32mainCode.GDasteroidObjects1_1final.push(gdjs.Game_32mainCode.GDasteroidObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32mainCode.GDvaisseau1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32mainCode.GDvaisseau1Objects1_1final.indexOf(gdjs.Game_32mainCode.GDvaisseau1Objects2[j]) === -1 )
            gdjs.Game_32mainCode.GDvaisseau1Objects1_1final.push(gdjs.Game_32mainCode.GDvaisseau1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("asteroid"), gdjs.Game_32mainCode.GDasteroidObjects2);
gdjs.copyArray(runtimeScene.getObjects("vaisseau2"), gdjs.Game_32mainCode.GDvaisseau2Objects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDvaisseau2Objects2Objects, gdjs.Game_32mainCode.mapOfGDgdjs_9546Game_959532mainCode_9546GDasteroidObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32mainCode.GDasteroidObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32mainCode.GDasteroidObjects1_1final.indexOf(gdjs.Game_32mainCode.GDasteroidObjects2[j]) === -1 )
            gdjs.Game_32mainCode.GDasteroidObjects1_1final.push(gdjs.Game_32mainCode.GDasteroidObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Game_32mainCode.GDvaisseau2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32mainCode.GDvaisseau2Objects1_1final.indexOf(gdjs.Game_32mainCode.GDvaisseau2Objects2[j]) === -1 )
            gdjs.Game_32mainCode.GDvaisseau2Objects1_1final.push(gdjs.Game_32mainCode.GDvaisseau2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Game_32mainCode.GDasteroidObjects1_1final, gdjs.Game_32mainCode.GDasteroidObjects1);
gdjs.copyArray(gdjs.Game_32mainCode.GDvaisseau1Objects1_1final, gdjs.Game_32mainCode.GDvaisseau1Objects1);
gdjs.copyArray(gdjs.Game_32mainCode.GDvaisseau2Objects1_1final, gdjs.Game_32mainCode.GDvaisseau2Objects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDasteroidObjects1 */
/* Reuse gdjs.Game_32mainCode.GDvaisseau1Objects1 */
/* Reuse gdjs.Game_32mainCode.GDvaisseau2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDasteroidObjects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDasteroidObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau1Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau1Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau2"), gdjs.Game_32mainCode.GDvaisseau2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getY() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau2Objects1[k] = gdjs.Game_32mainCode.GDvaisseau2Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau2Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau2Objects1[i].setY(gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getY() - (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau2"), gdjs.Game_32mainCode.GDvaisseau2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getY() < gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 32 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau2Objects1[k] = gdjs.Game_32mainCode.GDvaisseau2Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau2Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau2Objects1[i].setY(gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getY() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau2"), gdjs.Game_32mainCode.GDvaisseau2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getX() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - 32 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau2Objects1[k] = gdjs.Game_32mainCode.GDvaisseau2Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau2Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau2Objects1[i].setX(gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("vaisseau2"), gdjs.Game_32mainCode.GDvaisseau2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Game_32mainCode.GDvaisseau2Objects1.length;i<l;++i) {
    if ( gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getX() > 0 ) {
        isConditionTrue_1 = true;
        gdjs.Game_32mainCode.GDvaisseau2Objects1[k] = gdjs.Game_32mainCode.GDvaisseau2Objects1[i];
        ++k;
    }
}
gdjs.Game_32mainCode.GDvaisseau2Objects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32mainCode.GDvaisseau2Objects1 */
{for(var i = 0, len = gdjs.Game_32mainCode.GDvaisseau2Objects1.length ;i < len;++i) {
    gdjs.Game_32mainCode.GDvaisseau2Objects1[i].setX(gdjs.Game_32mainCode.GDvaisseau2Objects1[i].getX() - (5));
}
}}

}


};

gdjs.Game_32mainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32mainCode.GDvaisseau1Objects1.length = 0;
gdjs.Game_32mainCode.GDvaisseau1Objects2.length = 0;
gdjs.Game_32mainCode.GDasteroidObjects1.length = 0;
gdjs.Game_32mainCode.GDasteroidObjects2.length = 0;
gdjs.Game_32mainCode.GDscoreObjects1.length = 0;
gdjs.Game_32mainCode.GDscoreObjects2.length = 0;
gdjs.Game_32mainCode.GDbullet1Objects1.length = 0;
gdjs.Game_32mainCode.GDbullet1Objects2.length = 0;
gdjs.Game_32mainCode.GDetoileObjects1.length = 0;
gdjs.Game_32mainCode.GDetoileObjects2.length = 0;
gdjs.Game_32mainCode.GDvaisseau2Objects1.length = 0;
gdjs.Game_32mainCode.GDvaisseau2Objects2.length = 0;
gdjs.Game_32mainCode.GDbullet2Objects1.length = 0;
gdjs.Game_32mainCode.GDbullet2Objects2.length = 0;

gdjs.Game_32mainCode.eventsList0(runtimeScene);
gdjs.Game_32mainCode.GDvaisseau1Objects1.length = 0;
gdjs.Game_32mainCode.GDvaisseau1Objects2.length = 0;
gdjs.Game_32mainCode.GDasteroidObjects1.length = 0;
gdjs.Game_32mainCode.GDasteroidObjects2.length = 0;
gdjs.Game_32mainCode.GDscoreObjects1.length = 0;
gdjs.Game_32mainCode.GDscoreObjects2.length = 0;
gdjs.Game_32mainCode.GDbullet1Objects1.length = 0;
gdjs.Game_32mainCode.GDbullet1Objects2.length = 0;
gdjs.Game_32mainCode.GDetoileObjects1.length = 0;
gdjs.Game_32mainCode.GDetoileObjects2.length = 0;
gdjs.Game_32mainCode.GDvaisseau2Objects1.length = 0;
gdjs.Game_32mainCode.GDvaisseau2Objects2.length = 0;
gdjs.Game_32mainCode.GDbullet2Objects1.length = 0;
gdjs.Game_32mainCode.GDbullet2Objects2.length = 0;


return;

}

gdjs['Game_32mainCode'] = gdjs.Game_32mainCode;
