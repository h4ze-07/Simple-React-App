import { makeAutoObservable } from "mobx";

export type TAppartment = {
    id: string,
    rooms: string,
    name: string,
    price: number,
    days: number,
}

export class Apartments {

    list = <TAppartment[]>[];
    rentedList = <TAppartment[]>[];

    constructor() {
        makeAutoObservable(this);
    }

    addToList(item: TAppartment) {
        this.list.push(item)
    }

    removeFromList(id: string) {
        this.list = this.list.filter(i => i.id !== id);
    }

    rentAppart(id: string) {
        const item = this.list.filter(i => i.id === id);
        this.removeFromList(id);
        this.rentedList.push(item[0]);
    }

    cancelRent(id: string) {
        const item = this.rentedList.filter(i => i.id === id);
        this.rentedList = this.rentedList.filter(i => i.id !== id);
        this.addToList(item[0]);
    }

    get totalApparts() {
        return this.list.length;
    }
}