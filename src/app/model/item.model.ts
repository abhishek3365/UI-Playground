export class Item{

    public ID : number;
    public NAME : string;
    public TYPE : string;
    public PARENT_ID : number;
    public STATUS : string;
    public IP_address : string;
    public COMMENT : string;
    public children : Item[];

    constructor() {}

}