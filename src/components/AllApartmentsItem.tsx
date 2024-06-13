
import { TAppartment } from '../stores'


type TItemProps = TAppartment & {
    children: React.ReactNode;
}

const AllApartmentsItem = ({ rooms, name, price, days, children }: TItemProps) => {


    const roomsStr = `${rooms} room${rooms === '1' ? '' : 's'}`;
    const daysStr = `${days} day${days === 1 || (days > 20 && String(days)[`${days}`.length - 1] == '1') ? '' : 's'}`;


    return (
        <div className='articleStyles items-center justify-between'>
            <p className='text-gray-400 font-medium'>
                {name + ' / ' + roomsStr + ' / ' + daysStr + ' / ' + '$' + price}
            </p>
            {children}
        </div>
    )
}

export default AllApartmentsItem