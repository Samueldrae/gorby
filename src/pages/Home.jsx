import React from 'react'
import Layout from '../components/layout/Layout'
import Social from '../components/Social.jsx'

import Logo from '../components/Social.jsx'

function Home() {
  return (
    <Layout>
      {/* <section className="relative w-full h-[120vh] bg-cover bg-no-repeat bg-center -translate-y-16" style={{ backgroundImage: 'url(/img/hero.png)' }}> */}
      <section className="relative w-full bg-[url('/img/hero.png')] bg-no-repeat md:bg-cover bg-cover bg-center md:h-[130vh] h-96">
        {/* Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}

        <div className="w-[50%] md:w-2/3 md:h-[50%] h-[65%] mt-10 absolute grid place-items-center  left-12 -top-5 md:left-16  px-6">
          {/* <Logo/> */}
          <img src="/img/logo.png" loading='lazy' className='' alt="" />
        </div>

        <div className="fixed w-full bottom-0 md:bottom-[85%] md:right-5 flex justify-center items-end md:h-auto md:justify-end p-3 z-50">
          <button href='#' className='bg-white border-[8px] border-[#292834] text-[#292834] py-3 px-7 text-3xl md:text-5xl font-londrina hover:scale-90 active:scale-90'>BUY NOW</button>
        </div>

        {/* Hero Content */}
        {/* <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-4 md:px-8">
          <a href="#services" className=" text-white text-xl md:text-3xl font-bold text-stroke-1 py-3 px-6">
            BUY NOW
          </a>
        </div> */}
      </section>

      <section className=''>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl justify-start">
          <div className="w-[70%] sm:w-[60%] md:w-[70%] md:h-[100%] h-[65%] border border-red-500">
            <img src="/img/character.png" alt="" />
          </div>
          <div className="flex flex-col justify-center border border-blue-500">
            <div className="space-y-6 text-white">
              <h2 className='text-5xl md:text-6xl text-center'>Blob Blob Blob!?</h2>
              <p className='lead leading-relaxed text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere suscipit lectus, in efficitur leo tempus non. Integer ut sodales sapien. Fusce a consequat massa, ac finibus elit. Mauris erat ligula, pellentesque ut tellus nec, feugiat tempor risus. Ut pellentesque libero a vehicula consequat.</p>
              <div className="flex justify-center">
                <Social />
              </div>
            </div>
          </div>
        </div> */}

        <div class="grid md:grid-rows-2 md:grid-flow-col gap-y-3">
          <div className="row-span-2 col-span-2 w-full lg:w-[80%] md:h-[100%] h-[65%]">
            <img src="/img/character.png" loading='lazy' alt="" />
          </div>

          <div className="row-span-2 col-span-4 flex flex-col justify-center px-6 max-w-4xl">
            <div className="space-y-6 text-white">
              <h2 className='text-5xl md:text-8xl text-center'>Gorb Gorb Gorb!?</h2>
                <p className='mx-auto text-md md:text-2xl leading-loose md:leading-loose text-[#DADADA] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere suscipit lectus, in efficitur leo tempus non. Integer ut sodales sapien. Fusce a consequat massa, ac finibus elit. Mauris erat ligula, pellentesque ut tellus nec, feugiat tempor risus. Ut pellentesque libero a vehicula consequat.</p>
              <div className="flex justify-center">
                <Social size='small' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-auto py-24 md:py-52 flex items-center justify-center">
        {/* Image container */}
        <div className="relative w-full max-w-6xl px-4">
          {/* Image */}
          <img src='/img/tokenomic.png' loading='lazy' alt="Tokenomics" className="w-full h-auto" />

          {/* Text Overlay on the Monitor */}
          <div className="hidden absolute top-[30%] left-[10%] w-[42%] h-[30%] lg:flex flex-col space-y-5 items-center justify-center text-center text-white p-4 font-bold">
            <h2 className="text-7xl font-bold mb-4">100B $GORB</h2>
            <p className="text-2xl">Mint & Freeze: Revoked</p>
            <p className="text-2xl">Liquidity: Burnt</p>
            <p className="text-2xl">Taxes: 0/0</p>
          </div>
          
          <div className="absolute top-[27%] md:top-[30%] left-[8%] w-[50%] h-[30%] flex flex-col lg:hidden items-center space-y-1 sm:space-y-2 justify-center text-center text-white p-4 font-semibold">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold">100B $GORB</h2>
            <p className="text-xs sm:text-lg md:text-xl">Mint & Freeze: Revoked</p>
            <p className="text-xs sm:text-lg md:text-xl">Liquidity: Burnt</p>
            <p className="text-xs sm:text-lg md:text-xl">Taxes: 0/0</p>
          </div>
          <div className="text-center">
            <h2 className='text-lg lg:text-5xl'>CA: 0x87799B413bAb5432AbCF2e1fB1Cdec28E397f77F</h2>
          </div>
        </div>
      </section>

      <section className='py-16 md:pt-36'>
          <div className="max-w-5xl mx-auto px-6 mb-16 text-center">
            <h2 className='text-white text-6xl md:text-9xl'>How to buy?</h2>
          </div>
          
          {/* <div class="grid grid-cols-3 gap-4 max-w-5xl mx-auto px-6 text-center ">
            <div class="col-start-1 col-end-2  ">
              <img src="/img/phantom.png" className='' alt="" />
              <h3 className='text-lg md:text-4xl'>Create a Solana wallet</h3>
            </div>
            <div class="col-start-3 row-start-2 col-end-3 ">
              <img src="/img/solana.png" className='' alt="" />
              <h3 className='text-lg md:text-4xl'>Create a Solana wallet</h3>
            </div>
            <div class="col-start-1 row-start-3">
              <img src="/img/swap-gorb.png" className='' alt="" />
              <h3 className='text-lg md:text-4xl'>Swap $SOL to $GORB</h3>
            </div>
            <div class="col-start-3 row-start-4 col-end-3 ">
              <img src="/img/solana.png" className='' alt="" />
              <h3 className='text-lg md:text-4xl'>Get RICH</h3>
            </div>
          </div> */}
          

        <div className=" max-w-6xl mx-auto px-8">
          <div class="hidden md:grid md:grid-rows-3 md:grid-flow-col gap-y-4">
            <div class="row-end-3 row-span-2 flex flex-col items-center">
              <div className="w-[80%]">
                <img src="/img/phantom.gif" className='' alt="" />
              </div>
              <h3 className='text-lg sm:text-2xl md:text-5xl'>Create a Solana wallet</h3>
            </div>
            <div class="row-start-2 row-span-2 flex flex-col items-center">
              <div className="w-[50%]">
                <img src="/img/solana.gif" className='' alt="" />
              </div>
              <h3 className='text-lg sm:text-2xl md:text-5xl'>Get $SOL</h3>
            </div>
          </div>

          <div class="hidden md:grid grid-rows-3 grid-flow-col gap-y-4 ">
            <div class="row-end-3 row-span-2 flex flex-col items-center">
              <div className="w-[70%]">
                <img src="/img/swap-gorb.gif" className='' alt="" />
              </div>
              <h3 className='text-lg sm:text-2xl md:text-5xl'>Swap $SOL to $GORB</h3>
            </div>
            <div class="row-start-2 row-span-2 flex flex-col items-center">
              <div className="w-[80%]">
                <img src="/img/get-rich.gif" className='' alt="" />
              </div>
              <h3 className='text-lg sm:text-2xl md:text-5xl'>Get RICH</h3>
            </div>
          </div>

          <div class=" md:hidden grid grid-rows-4 gap-y-8 gap-x-8 ">
            <div class="flex flex-col items-center ">
              <div className="w-[50%]">
                <img src="/img/phantom.gif" className='' alt="" />
              </div>
              <h3 className='text-3xl'>Create a Solana wallet</h3>
            </div>
            <div class=" flex flex-col items-center mb-4">
              <div className="w-[50%]">
                <img src="/img/solana.gif" className='' alt="" />
              </div>
              <h3 className='text-3xl'>Get $SOL</h3>
            </div>
            <div class="flex flex-col items-center">
              <div className="w-[50%]">
                <img src="/img/swap-gorb.gif" className='' alt="" />
              </div>
              <h3 className='text-3xl'>Swap $SOL to $GORB</h3>
            </div>
            <div class="flex flex-col items-center  mt-4">
              <div className="w-[50%]">
                <img src="/img/get-rich.gif" className='' alt="" />
              </div>
              <h3 className='text-3xl'>Get RICH</h3>
            </div>
          </div>
        </div>
        
      </section>

      <section className='pt-48'>
          <div className="max-w-5xl mx-auto px-6 mb-8 md:mb-16 text-center">
            <h2 className='text-white text-6xl md:text-9xl'>Join Us</h2>
          </div>
          
          <div className="flex flex-col justify-center items-center px-6">
            <Social size='medium' />
          </div>
          
          
          {/* <div className="row-span-2 col-span-2 w-full lg:w-[100%] md:h-[100%] h-[65%] border">
            <img src="/img/footer.png" alt="" />
          </div> */}
          
          <div className="pt-16">
            <img src='img/footer.png' alt="" className='h-auto md:h-screen w-full' />
          </div>
        
      </section>

    </Layout>
  )
}

export default Home