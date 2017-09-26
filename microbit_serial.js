//Use this code to create a hex file. 
//And copy hex file to microbit.

input.onButtonPressed(Button.A, () => {
    basic.showString("A")
    serial.writeLine("PUSH A")
})
input.onButtonPressed(Button.B, () => {
    basic.showString("B")
    serial.writeLine("PUSH B")
})
basic.forever(() => {
    basic.showString(serial.readString())
})
