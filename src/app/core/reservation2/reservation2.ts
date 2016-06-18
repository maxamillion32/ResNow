/**
 * Created by brianofrim on 2016-04-09.
 */
export interface IReservation2{
    $key?: string;
    //createdAt: number;
    title:string;
    name: string;
    note: string;
    start: string;
}

export class Reservation2 implements IReservation2{
    //createdAt: Firebase.ServerValue.TIMESTAMP;
    title: string;
    name: string;
    note: string;
    start: string; 
    constructor(title?:string,name?:string, note?: string, start?: string){
        this.title = title || "";
        this.name = name || "";
        this.note = note || "";
        this.start = start || "";
    }
}