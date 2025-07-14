gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDOverObjects1= [];
gdjs.Game_32OverCode.GDOverObjects2= [];
gdjs.Game_32OverCode.GDrestartObjects1= [];
gdjs.Game_32OverCode.GDrestartObjects2= [];
gdjs.Game_32OverCode.GDscorefinalObjects1= [];
gdjs.Game_32OverCode.GDscorefinalObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("restart"), gdjs.Game_32OverCode.GDrestartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) <= (( gdjs.Game_32OverCode.GDrestartObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDrestartObjects1[0].getPointX("max"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= (( gdjs.Game_32OverCode.GDrestartObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDrestartObjects1[0].getPointX("min"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) <= (( gdjs.Game_32OverCode.GDrestartObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDrestartObjects1[0].getPointY("max"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) >= (( gdjs.Game_32OverCode.GDrestartObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDrestartObjects1[0].getPointY("min"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.ogg", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("scorefinal"), gdjs.Game_32OverCode.GDscorefinalObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDscorefinalObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDscorefinalObjects1[i].getBehavior("Text").setText("Score final: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "game_over.ogg", false, 100, 1);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDOverObjects1.length = 0;
gdjs.Game_32OverCode.GDOverObjects2.length = 0;
gdjs.Game_32OverCode.GDrestartObjects1.length = 0;
gdjs.Game_32OverCode.GDrestartObjects2.length = 0;
gdjs.Game_32OverCode.GDscorefinalObjects1.length = 0;
gdjs.Game_32OverCode.GDscorefinalObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDOverObjects1.length = 0;
gdjs.Game_32OverCode.GDOverObjects2.length = 0;
gdjs.Game_32OverCode.GDrestartObjects1.length = 0;
gdjs.Game_32OverCode.GDrestartObjects2.length = 0;
gdjs.Game_32OverCode.GDscorefinalObjects1.length = 0;
gdjs.Game_32OverCode.GDscorefinalObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
