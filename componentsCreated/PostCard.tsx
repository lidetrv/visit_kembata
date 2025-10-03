import { Link, useLocation } from 'react-router'
import { ChipDirective, ChipListComponent, ChipsDirective } from '@syncfusion/ej2-react-buttons'
import { cn, getFirstWord } from '~/lib/utils';

const PostCard = ({id,name,tags,location,price,imageUrl}:TripCardProps) => {
    const path = useLocation();
  return (
    <Link to={path.pathname === '/' || path.pathname.startsWith('/home') ? `/home/${id}`:`/posts/${id}`} className='trip-card'>
        <img src={imageUrl} alt={name}/>
        <article>
            <h2>{name}</h2>
            <figure>
                <img src='/assets/icons/location-mark.svg' className='size-4'/>
                <figcaption>{location}</figcaption>
            </figure>
        </article>
        <div className='mt-5 pl-[18px] pr-3.5 pb-5'>
            <ChipListComponent id='travel-chip'>
                <ChipsDirective>
                    {tags.map((tag,index) => (
                        <ChipDirective key={index}
                        text={getFirstWord(tag)}
                        cssClass={cn(`!text-base !font-medium !px-4 ${index === 0 ? '!bg-pink-50 !text-pink-500': index === 1 ? '!bg-primary-50 !text-primary-500': index === 2 ? '!bg-success-50 !text-success-500': '!bg-amber-50 !text-amber-500'}` )}/>
                    ))}
                </ChipsDirective>
            </ChipListComponent>
        </div> 
        <article className='tripCard-pill'>
            {price}
        </article>
    </Link>
  )
}

export default PostCard