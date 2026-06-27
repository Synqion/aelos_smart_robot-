import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *
import time
import math

def leju_function_HMC():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_colorx, leju_variable_remoteCtrl, leju_variable_sensor1, leju_variable_colory, leju_variable_ArtagA, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    while True:
        leju_variable_remoteCtrl = get_key.key()
        if leju_variable_remoteCtrl == 193: # 1
            box_go1(1)
        if leju_variable_remoteCtrl == 196: # 2
            BoxL_move2 (1)
        if leju_variable_remoteCtrl == 195: # 3
            Box_Back(1)
        if leju_variable_remoteCtrl == 194: # 4
            BoxR_move1 (1)
        if leju_variable_remoteCtrl == 245: # LT
            BoxL_turn1(1)
        if leju_variable_remoteCtrl == 246: # RT
            BoxR_turn1 (1)
        if leju_variable_remoteCtrl == 197:
            pass
        if leju_variable_remoteCtrl == 198:
            pass
        if leju_variable_remoteCtrl == 199: # A
            base_action.action("GrabCube")
            base_action.action("LiftCubeUp")
        if leju_variable_remoteCtrl == 200: # B
            break


def main():
    nodes.node_initial()
    try:


        leju_function_HMC()

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()