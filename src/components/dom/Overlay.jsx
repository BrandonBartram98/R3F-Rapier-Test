export default function Overlay(props) {
  return (
    <div className='absolute w-full h-full top-0 left-0 p-10 inline-flex flex-col'>
      <div className='w-full inline-flex align-center justify-between gap-10'>
        <p className='h-10 text-3xl font-bold tracking-tighter font-antonio'>BARTY</p>
        <p className='h-10 text-sm text-right font-bold pt-1 pointer-events-none'></p>
      </div>
      <div className='w-full inline-flex font-inter align-center justify-between mt-12'>
        <div className='tracking text-xs'>
          <p className='font-bold'>Home</p>
          <p className=''>Main Portfolio</p>
          <b>—</b>
        </div>
        {/* <p className='text-xs font-inter font-bold rotate-90 origin-bottom hidden sm:block'>
          CLICK + DRAG&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;●
        </p> */}
      </div>

      <div className='flex-1'></div>

      <div className='w-full inline-flex items-center'>
        <div className='tracking text-xs basis-1/3'>
          <button
            onClick={props.handlePerfClick}
            className={
              props.isPerfActive
                ? 'border-2 hover:text-zinc-900 text-white bg-zinc-900 border-zinc-900 px-10 py-4 transition-all duration-300 ease-in-out buttonSideFill relative overflow-hidden'
                : 'border-2 hover:text-white border-zinc-900 px-10 py-4 transition-all duration-300 ease-in-out buttonSideFill relative overflow-hidden'
            }>
            <span
              className={
                props.isPerfActive
                  ? 'absolute transition-all duration-300 ease-in-out inset-0 bg-white'
                  : 'absolute transition-all duration-300 ease-in-out inset-0 bg-black'
              }></span>
            <span className='absolute inset-0 flex justify-center items-center font-bold'>Toggle Perf</span>
          </button>
        </div>
        <p className='text-xl font-bold tracking-tighter font-antonio basis-1/3 hidden sm:block text-center'></p>
        <div className='basis-1/3'></div>
      </div>
    </div>
  )
}
