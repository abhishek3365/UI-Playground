export class ItemStatus {

    public static MAINTENANCE = 'MAINTENANCE';
    public static WARNING = 'WARNING';
    public static MALFUNCTION = 'MALFUNCTION';
    public static FROZEN = 'FROZEN';
    public static OK = 'OK';
    
    static getList() : Array<string> {
        return [ this.OK , this.FROZEN , this.WARNING , this.MALFUNCTION , this.MAINTENANCE ];
    }

}