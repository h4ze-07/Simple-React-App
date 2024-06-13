import { makeAutoObservable } from "mobx";

type TAppartment = {
    id: string,
    rooms: string,
    name: string,
    price: number,
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


    cancelRent(id: string) {
        this.list = this.rentedList.filter(i => i.id !== id);
    }

    get totalApparts() {
        return this.list.length;
    }
}