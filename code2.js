gdjs.start_32gameCode = {};
gdjs.start_32gameCode.localVariables = [];
gdjs.start_32gameCode.GDNewTiledSpriteObjects1= [];
gdjs.start_32gameCode.GDNewTiledSpriteObjects2= [];
gdjs.start_32gameCode.GDNewTextObjects1= [];
gdjs.start_32gameCode.GDNewTextObjects2= [];
gdjs.start_32gameCode.GDplayObjects1= [];
gdjs.start_32gameCode.GDplayObjects2= [];
gdjs.start_32gameCode.GDplayer1Objects1= [];
gdjs.start_32gameCode.GDplayer1Objects2= [];
gdjs.start_32gameCode.GDplayer2Objects1= [];
gdjs.start_32gameCode.GDplayer2Objects2= [];


gdjs.start_32gameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("play"), gdjs.start_32gameCode.GDplayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) <= (( gdjs.start_32gameCode.GDplayObjects1.length === 0 ) ? 0 :gdjs.start_32gameCode.GDplayObjects1[0].getPointX("max"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorX(runtimeScene, "", 0) >= (( gdjs.start_32gameCode.GDplayObjects1.length === 0 ) ? 0 :gdjs.start_32gameCode.GDplayObjects1[0].getPointX("min"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) <= (( gdjs.start_32gameCode.GDplayObjects1.length === 0 ) ? 0 :gdjs.start_32gameCode.GDplayObjects1[0].getPointY("max"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.getCursorY(runtimeScene, "", 0) >= (( gdjs.start_32gameCode.GDplayObjects1.length === 0 ) ? 0 :gdjs.start_32gameCode.GDplayObjects1[0].getPointY("min"));
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
}

}


};

gdjs.start_32gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_32gameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.start_32gameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.start_32gameCode.GDNewTextObjects1.length = 0;
gdjs.start_32gameCode.GDNewTextObjects2.length = 0;
gdjs.start_32gameCode.GDplayObjects1.length = 0;
gdjs.start_32gameCode.GDplayObjects2.length = 0;
gdjs.start_32gameCode.GDplayer1Objects1.length = 0;
gdjs.start_32gameCode.GDplayer1Objects2.length = 0;
gdjs.start_32gameCode.GDplayer2Objects1.length = 0;
gdjs.start_32gameCode.GDplayer2Objects2.length = 0;

gdjs.start_32gameCode.eventsList0(runtimeScene);
gdjs.start_32gameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.start_32gameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.start_32gameCode.GDNewTextObjects1.length = 0;
gdjs.start_32gameCode.GDNewTextObjects2.length = 0;
gdjs.start_32gameCode.GDplayObjects1.length = 0;
gdjs.start_32gameCode.GDplayObjects2.length = 0;
gdjs.start_32gameCode.GDplayer1Objects1.length = 0;
gdjs.start_32gameCode.GDplayer1Objects2.length = 0;
gdjs.start_32gameCode.GDplayer2Objects1.length = 0;
gdjs.start_32gameCode.GDplayer2Objects2.length = 0;


return;

}

gdjs['start_32gameCode'] = gdjs.start_32gameCode;
