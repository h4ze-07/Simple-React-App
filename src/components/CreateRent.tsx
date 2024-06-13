import { observer } from "mobx-react-lite"
import Button from "./Button"


const CreateRent = observer(() => {
    
    

    return (
        <section>
            <h2 className='sectionHeading'>🤑 Create a new rent</h2>

            <article className="articleStyles justify-between items-end">
                <div className="createRentInputDiv">
                    <label htmlFor="title" className="font-medium">Title</label>
                    <input type="text" id='title' className="createRentInput w-[320px]" placeholder="Ex. Flat in the city center" />
                </div>
                <div className="createRentInputDiv">
                    <label htmlFor="days" className="font-medium">Days</label>
                    <input type="text" id='days' className="createRentInput w-[80px]" placeholder="4" />
                </div>
                <div className="createRentInputDiv">
                    <label htmlFor="rooms" className="font-medium">Rooms</label>
                    <select defaultValue={'3+'} id="rooms" className="createRentInput w-[80px] text-[12px]">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3+">3+</option>
                    </select>
                </div>
                <div className="createRentInputDiv">
                    <label htmlFor="price" className="font-medium">Rent Price</label>
                    <input type="text" id='price' className="createRentInput w-[150px]" placeholder="99.00" />
                </div>
                <Button text="Submit rent" styles="bg-green-400  hover:bg-green-300" />
            </article>
        </section>
    )
})

export default CreateRent