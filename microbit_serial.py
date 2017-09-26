# -*- coding: utf-8 -*-
"""
Python Serial communication for microbit
"""

import serial

portno = 115200     #microbit port no


for i in range(10): #COM number search
    try:
        ser = serial.Serial(i,portno)
        print('COM',i)
        ser.write(b"hello serial!");
        ser.close()
        
    except:
        print('Error',i)
    