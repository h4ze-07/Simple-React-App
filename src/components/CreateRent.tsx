import { observer } from "mobx-react-lite"
import Button from "./Button"
import { useContext, useEffect, useRef, useState } from "react";
import { getRandomId } from "../utils";
import { AppartsContext } from "../stores/AppartsProvider";


type TNewAppart = {
    name: string,
    rooms: string,
    days: number,
    price: number,
}

type Field = 'title' | 'days' | 'rooms' | 'price';

type Event = React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>;

const CreateRent = observer(() => {

    const context = useContext(AppartsContext);

    const selectRef = useRef<HTMLSelectElement | null>(null);
    const titleRef = useRef<HTMLInputElement | null>(null);
    const daysRef = useRef<HTMLInputElement | null>(null);
    const priceRef = useRef<HTMLInputElement | null>(null);


    const [newAppart, setNewAppart] = useState<TNewAppart>({
        name: '', rooms: '', days: 0, price: 0,
    })

    const handleInputChange = (e: Event, field: Field) => {

        const inputValue = e.target.value;

        switch (field) {
            case 'title':
                setNewAppart((prev) => ({ ...prev, name: inputValue }))
                break;
            case 'days':
                setNewAppart((prev) => ({ ...prev, days: parseInt(inputValue) }))
                break;
            case 'rooms':
                setNewAppart((prev) => ({ ...prev, rooms: inputValue }))
                break;
            case 'price':
                setNewAppart((prev) => ({ ...prev, price: parseInt(e.target.value) }))
                break;
        }
    }

    const clearInputs = () => {
        console.log('INPUTS CLEARED');
    }

    const handleButtonClick = () => {
        if (titleRef.current!.value && daysRef.current!.value && selectRef.current!.value && priceRef.current!.value) {
            const id = getRandomId(6);
            context?.addToList({...newAppart, id: id});
            clearInputs();
        } else {
            return false;
        }

        
    }

    useEffect(() => {
        if (selectRef.current) {
            setNewAppart(prev => ({
                ...prev,
                rooms: selectRef.current!.value
            }));
        }
    }, [])

    useEffect(() => {
        console.log(newAppart);
    }, [newAppart])

    return (
        <section>
            <h2 className='sectionHeading mb-4'>🤑 Create a new rent</h2>

            <article className="articleStyles justify-between items-end">
                <div className="createRentInputDiv">
                    <label htmlFor="title" className="font-medium">Title</label>
                    <input type="text" id='title' className="createRentInput w-[320px]" placeholder="Ex. Flat in the city center"
                    ref={titleRef}
                        onChange={(e) => handleInputChange(e, 'title')}
                    />
                </div>
                <div className="createRentInputDiv">
                    <label htmlFor="days" className="font-medium">Days</label>
                    <input type="text" id='days' className="createRentInput w-[80px]" placeholder="4"
                        ref={daysRef}
                        onChange={(e) => handleInputChange(e, 'days')}
                    />
                </div>
                <div className="createRentInputDiv">
                    <label htmlFor="rooms" className="font-medium">Rooms</label>
                    <select defaultValue={'3+'} id="rooms" className="createRentInput w-[80px] text-[12px]"
                        ref={selectRef}
                        onChange={(e) => handleInputChange(e, 'rooms')}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3+">3+</option>
                    </select>
                </div>
                <div className="createRentInputDiv">
                    <label htmlFor="price" className="font-medium">Rent Price</label>
                    <input type="text" id='price' className="createRentInput w-[150px]" placeholder="99.00"
                        ref={priceRef}
                        onChange={(e) => handleInputChange(e, 'price')}
                    />
                </div>
                <Button 
                    text="Submit rent" 
                    styles="bg-green-400  hover:bg-green-300"
                    func={handleButtonClick} 
                />
            </article>
        </section>
    )
})

export default CreateRent