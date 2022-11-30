export default function SocialBar(props) {
  return (
    <div className='absolute right-0 bottom-0 p-11 inline-flex items-center'>
      <ul className='font-light text-xs inline-flex gap-2 text-right justify-end basis-1/3'>
        <li>
          <a
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            href='https://github.com/BrandonBartram98'
            target='_blank'
            rel='noreferrer'>
            github
          </a>
        </li>
        <li>
          <a
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            href='https://twitter.com/barty_dev'
            target='_blank'
            rel='noreferrer'>
            twitter
          </a>
        </li>
        <li>
          <a
            className="relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-black
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
            href='https://www.linkedin.com/in/brandonbartram/'
            target='_blank'
            rel='noreferrer'>
            linkedin
          </a>
        </li>
      </ul>
    </div>
  )
}
