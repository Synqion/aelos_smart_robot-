Blockly.Blocks['1781253479229'] = {
  init: function() {
    this.jsonInit({
      "type": "1781253479229",
      "message0": "holdBoxMoveFront（2）",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1781253479229'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(60,10,190,65,75,80,75,65,140,190,10,65,75,80,75,65,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 140, 190, 10, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 125, 95, 110, 90, 140, 190, 10, 94, 107, 146, 76, 87, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 113, 37, 156, 88, 140, 190, 10, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 107, 100, 56, 124, 111, 140, 190, 10, 112, 129, 155, 93, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 95, 54, 123, 113, 140, 190, 10, 114, 75, 105, 90, 110, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 106, 93, 54, 123, 111, 140, 190, 10, 114, 87, 163, 44, 112, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 88, 71, 45, 107, 90, 140, 190, 10, 93, 100, 144, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(60, 10, 190, 86, 110, 95, 100, 90, 140, 190, 10, 94, 107, 146, 77, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(20)\nMOTOmove19(60, 10, 190, 90, 91, 48, 129, 88, 140, 190, 10, 94, 107, 146, 76, 89, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(60, 10, 190, 100, 93, 55, 124, 100, 140, 190, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1781253479229'] = function(block) {
  let code = "base_action.action('holdBoxMoveFront（2）')\n";
  return code;
}

