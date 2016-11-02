/**
 * Support for additional Bluetooth services.
 */
//% color=#0082FB weight=20
namespace bluetooth {
    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% help=bluetooth/uart-write-string weight=80
    //% blockId=bluetooth_uart_write block="bluetooth uart|write string %data" blockGap=8
    //% parts="bluetooth" shim=bluetooth::uartWriteString advanced=true
    export function uartWriteString(data: string): void {
        // dummy implementation for simulator
        console.log("UART Write: " + data)
    }

    /**
     * Prints a numeric value to the serial
     */
    //% help=bluetooth/uart-write-number weight=79
    //% weight=89 blockGap=8 advanced=true
    //% blockId=bluetooth_uart_writenumber block="bluetooth uart|write number %value"
    export function uartWriteNumber(value: number): void {
        uartWriteString(value.toString());
    }

    /**
     * Writes a ``name: value`` pair line to the serial.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% weight=88 weight=78
    //% help=bluetooth/uart-write-value advanced=true
    //% blockId=bluetooth_uart_writevalue block="bluetooth uart|write value %name|= %value"
    export function uartWriteValue(name: string, value: number): void {
        uartWriteString(name + ":" + value + "\r\n");
    }

    /**
     *  Reads from the Bluetooth UART service buffer, returning its contents when the specified delimiter character is encountered.
     */
    //% help=bluetooth/uart-read-until weight=75
    //% blockId=bluetooth_uart_read block="bluetooth uart|read until %del=serial_delimiter_conv"
    //% parts="bluetooth" shim=bluetooth::uartReadUntil advanced=true
    export function uartReadUntil(del: string): string {
        // dummy implementation for simulator
        return "???"
    }
}