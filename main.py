import sys
sys.path.append("/home/lemon/catkin_ws/src/aelos_smart_ros")

from leju import *
import math

leju_variable_isOnPos = None
leju_variable_lableNum = None
leju_variable_remoteCtrl = None
leju_variable_colorx = None
leju_variable_sensor1 = None
leju_variable_ArtagA = None
leju_variable_colory = None
leju_variable_ArtagX = None
leju_variable_ArtagY = None
leju_variable_dt = None
leju_variable_ut = None

"""移动到目标地点
"""
def leju_function_moveToTarget():
    global leju_variable_isOnPos, leju_variable_lableNum, leju_variable_remoteCtrl, leju_variable_colorx, leju_variable_sensor1, leju_variable_ArtagA, leju_variable_colory, leju_variable_ArtagX, leju_variable_ArtagY, leju_variable_dt, leju_variable_ut
    leju_variable_isOnPos = 0



def main():
    nodes.node_initial()
    try:


        while True:
            leju_variable_sensor1 = sensor_port.get_gpio(1)
            leju_variable_remoteCtrl = get_key.key()
            if leju_variable_remoteCtrl == 193:
                music.music_play('当前温度为')
                leju_variable_dt = math.floor(leju_variable_sensor1 % 10)
                leju_variable_ut = math.floor(leju_variable_sensor1 / 10)
                if leju_variable_dt != 0:
                    pass
                else:
                    if leju_variable_dt == 1:
                        music.music_play('10')
                    else:
                        if leju_variable_dt == 2:
                            music.music_play('20')
                        else:
                            if leju_variable_dt == 3:
                                music.music_play('30')
                            else:
                                if leju_variable_dt == 4:
                                    music.music_play('40')
                                else:
                                    if leju_variable_dt == 5:
                                        music.music_play('50')
                                    else:
                                        if leju_variable_dt == 6:
                                            music.music_play('60')
                                        else:
                                            if leju_variable_dt == 7:
                                                music.music_play('70')
                                            else:
                                                if leju_variable_dt == 8:
                                                    music.music_play('80')
                                                else:
                                                    while leju_variable_dt == 9:
                                                        music.music_play('90')
                if leju_variable_ut == 0:
                    music.music_play('0度')
                else:
                    if leju_variable_ut == 1:
                        music.music_play('1度')
                    else:
                        if leju_variable_ut == 2:
                            music.music_play('2度')
                        else:
                            if leju_variable_ut == 3:
                                music.music_play('3度')
                            else:
                                if leju_variable_ut == 4:
                                    music.music_play('4度')
                                else:
                                    if leju_variable_ut == 5:
                                        music.music_play('5度')
                                    else:
                                        if leju_variable_ut == 6:
                                            music.music_play('6度')
                                        else:
                                            if leju_variable_ut == 7:
                                                music.music_play('7度')
                                            else:
                                                if leju_variable_ut == 8:
                                                    music.music_play('8度')
                                                else:
                                                    if leju_variable_ut == 9:
                                                        music.music_play('9度')

    except Exception as e:
        nodes.serror(e)
        exit(2)
    finally:
        nodes.finishsend()
if __name__ == "__main__":
    print ("Run custom project")
    main()
