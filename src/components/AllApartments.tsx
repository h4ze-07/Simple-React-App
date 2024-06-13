import { useContext } from 'react'
import { AppartsContext } from '../stores/AppartsProvider'
import { observer } from 'mobx-react-lite';
import AllApartmentsItem from './AllApartmentsItem';
import Button from './Button';

const AllApartments = observer(() => {

  const context = useContext(AppartsContext);

  return (
    <section>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='sectionHeading'>🏡 Available Apartments ({context?.totalApparts})</h2>
        <div className='flex items-center'>
          <div className=''>
            <label htmlFor="sortByPrice">Sort by price:</label>
            <select value='highestFirst' name="sortByPrice" id="sortByPrice">
              <option value="highestFirst">Highest to lowest</option>
              <option value="lowestFirst">Lowest to highest</option>
            </select>
          </div>
          <div className=''>
            <label htmlFor="sortByRooms">Sort by rooms:</label>
            <select value='highestFirst' name="sortByRooms" id="sortByRooms">
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