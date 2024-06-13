import { useContext } from 'react'
import { AppartsContext } from '../stores/AppartsProvider';
import AllApartmentsItem from './AllApartmentsItem';
import Button from './Button';
import { observer } from 'mobx-react-lite';

const CustomerRents = observer(() => {
  const context = useContext(AppartsContext);
  return (
    <section>
      <h2 className='sectionHeading mb-4'>🤩 Your current rent</h2>
      <article className='flex flex-col gap-[10px]'>
        {context?.rentedList.map(item => (
          <AllApartmentsItem key={item.id} {...item}>
            <Button text='Cancel rent' styles='bg-red-500 hover:bg-red-300' func={() => context?.cancelRent(item.id)} />
          </AllApartmentsItem>
        ))}
      </article>
    </section>
  )
})

export default CustomerRents