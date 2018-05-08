export class ItemType{

    public static WALL = 'WALL';
    public static MATRIX = 'MATRIX';
    public static ENCODER = 'ENCODER';
    public static CONVERTER = 'CONVERTER';
    public static ANALOG_CAMERA = 'ANALOG_CAMERA';

    public static getList() : Array<string> {
        return [ this.WALL , this.MATRIX , this.ENCODER , this.CONVERTER , this.ANALOG_CAMERA ];
    }

}