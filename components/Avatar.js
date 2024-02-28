import Image from 'next/image';


const Avatar = () => {
  return( 
  <div className='hidden xl:flex xl:max-w-none'>
    <Image 
    src= {'/avartar_new.png'}
    width={408}
    height={612}
    alt=''
    className='translate-z-0 w-full h-full'
    />
  </div>
  );
};

export default Avatar;
