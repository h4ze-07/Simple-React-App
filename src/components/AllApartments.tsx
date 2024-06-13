import { useContext, useRef } from 'react'
import { AppartsContext } from '../stores/AppartsProvider'
import { observer } from 'mobx-react-lite';
import AllApartmentsItem from './AllApartmentsItem';
import Button from './Button';

const AllApartments = observer(() => {

  const context = useContext(AppartsContext);

  const priceFilterRef = useRef<HTMLSelectElement | null>(null);
  const roomsFilterRef = useRef<HTMLSelectElement | null>(null);

  return (
    <section>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='sectionHeading'>🏡 Available Apartments ({context?.totalApparts})</h2>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <label htmlFor="sortByPrice" className='text-gray-400 font-medium'>Sort by price:</label>
            <select defaultValue='base' name="sortByPrice" id="sortByPrice" className='createRentInput' disabled={!context?.list.length && !context?.localStorageListLength}
            ref={priceFilterRef}
            onChange={(e) => {
              context?.sortListByPrice(e.target.value);
              if (e.target.value == 'base') {
                roomsFilterRef.current!.value = 'base';
              }
            }}
            >
              <option value="base">Choose value</option>
              <option value="highestFirst">Highest to lowest</option>
              <option value="lowestFirst">Lowest to highest</option>
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <label htmlFor="sortByRooms" className='text-gray-400 font-medium'>Sort by rooms:</label>
            <select defaultValue='base' name="sortByRooms" id="sortByRooms" className='createRentInput' disabled={!context?.list.length && !context?.localStorageListLength}
            ref={roomsFilterRef}
            onChange={(e) => {
              context?.sortListByRooms(e.target.value)
              if (e.target.value == 'base') {
                priceFilterRef.current!.value = 'base';
              }
            }}
            >
              <option value="base">Choose value</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3+">3+</option>
            </select>
          </div>
        </div>
      </div>
      <article className='flex flex-col gap-[10px] mb-[30px]'>
        {context?.list.map(item => (
          <AllApartmentsItem key={item.id} {...item}>
            <div className='flex gap-[20px]'>
              <Button text='Rent' styles='bg-blue-500 hover:bg-blue-300' func={() => context?.rentAppart(item.id)} />
              <Button text='Delete' styles='bg-red-500 hover:bg-red-300' func={() => context?.removeFromList(item.id)} />
            </div>
          </AllApartmentsItem>
        ))}
      </article>
    </section>
  )
})

export default AllApartments