Blockly.Blocks['1761534066416'] = {
  init: function() {
    this.jsonInit({
      "type": "1761534066416",
      "message0": "正面上高台4",
      "previousStatement": "motion_block",
      "nextStatement": "motion_block",
      "colour": '#C643F1',
      "toolip": "",
      "helpUrl": ""
    });
  }
};

Blockly.Lua['1761534066416'] = function(block) {
  let code = "MOTOsetspeed(30)\nMOTOrigid16(40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,0,0,0)\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 190, 100, 93, 55, 124, 100, 120, 170, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(80, 30, 190, 100, 153, 55, 124, 100, 120, 170, 10, 100, 46, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 190, 100, 93, 55, 124, 100, 120, 170, 10, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 129, 55, 166, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 101, 84, 150, 41, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 135, 120, 41, 99, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 152, 132, 48, 100, 120, 170, 30, 100, 71, 145, 37, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 100, 152, 132, 48, 100, 120, 170, 30, 99, 122, 50, 127, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 141, 101, 59, 100, 120, 170, 30, 100, 40, 50, 165, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 141, 101, 59, 100, 120, 170, 30, 99, 40, 75, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 170, 99, 155, 132, 40, 100, 120, 170, 30, 99, 40, 75, 142, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 160, 99, 160, 92, 77, 100, 120, 170, 40, 99, 71, 148, 114, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 160, 99, 160, 91, 79, 100, 120, 170, 40, 99, 40, 104, 122, 99, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(10)\nMOTOmove19(85, 12, 172, 62, 160, 146, 47, 75, 119, 189, 31, 139, 43, 54, 154, 123, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 66, 149, 146, 55, 63, 150, 147, 19, 158, 48, 60, 146, 140, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 70, 126, 145, 53, 68, 150, 147, 19, 138, 74, 60, 147, 135, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(54, 47, 190, 79, 113, 140, 50, 78, 150, 147, 19, 126, 72, 60, 135, 125, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 100, 125, 140, 62, 100, 120, 170, 87, 100, 75, 60, 138, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 104, 127, 133, 71, 100, 120, 170, 87, 103, 70, 67, 128, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 30, 113, 102, 128, 104, 97, 100, 120, 170, 87, 102, 74, 91, 104, 100, 0, 0, 100)\nMOTOwait()\nMOTOsetspeed(30)\nMOTOmove19(80, 37, 100, 100, 93, 55, 124, 100, 120, 170, 100, 100, 107, 145, 76, 100, 0, 0, 100)\nMOTOwait()\n";
  return code;
}

Blockly.Python['1761534066416'] = function(block) {
  let code = "base_action.action('正面上高台4')\n";
  return code;
}

