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

    localStorageListLength = 0;

    constructor() {
        makeAutoObservable(this);
        this.getDataFromLocalStorage();
    }


    getDataFromLocalStorage() {
        const list = JSON.parse(localStorage.getItem('list') || '[]');
        const rentedList = JSON.parse(localStorage.getItem('rentedList') || '[]');
        this.list = list;
        this.rentedList = rentedList;
        this.localStorageListLength = list.length;
    }

    saveToLocalStogare() {
        localStorage.setItem('list', JSON.stringify(this.list))
        localStorage.setItem('rentedList', JSON.stringify(this.rentedList))
    }

    addToList(item: TAppartment) {
        this.list.push(item)
        this.saveToLocalStogare()
    }

    removeFromList(id: string) {
        this.list = this.list.filter(i => i.id !== id);
        this.saveToLocalStogare()
    }



    rentAppart(id: string) {
        const item = this.list.filter(i => i.id === id);
        this.removeFromList(id);
        this.rentedList.push(item[0]);
        this.saveToLocalStogare()
    }

    cancelRent(id: string) {
        const item = this.rentedList.filter(i => i.id === id);
        this.rentedList = this.rentedList.filter(i => i.id !== id);
        this.addToList(item[0]);
        this.saveToLocalStogare()
    }

    sortListByPrice(value: string) {
        switch(value){
            case 'highestFirst':
                this.list.sort((a,b) => b.price - a.price)
                break;
            case 'lowestFirst':
                this.list.sort((a,b) => a.price - b.price)
                break;
            case 'base':
                this.list = JSON.parse(localStorage.getItem('list') || '[]');
                break;
        }
    }

    sortListByRooms(value: string) {
        if (value === "base") {
            this.list = JSON.parse(localStorage.getItem('list') || '[]');
            return;
        }

        this.list = JSON.parse(localStorage.getItem('list') || '[]').filter((i: TAppartment) => i.rooms === value);
    }

    get totalApparts() {
        return this.list.length;
    }
}