import React from 'react'
import x from "../../public/img/social/x-icon.svg"
import telegram from "../../public/img/social/telegram-icon.svg"
import coinMarketCap from "../../public/img/social/coinmarketcap-icon.svg"
import coinGecko from "../../public/img/social/coingecko-icon.svg"
import dexscreener from "../../public/img/social/dexcscreener-icon.svg"

const Social = ({size = 'medium'}) => {

   // Define size classes based on the prop
  let sizeClass = '';
  switch (size) {
    case 'small':
      sizeClass = 'w-7 md:w-9'; // Small size for icons
      break;
    case 'medium':
      sizeClass = 'w-9 md:w-20'; // Default medium size
      break;
    case 'large':
      sizeClass = 'w-14 h-14 md:w-16 md:h-16'; // Large size for icons
      break;
    default:
      sizeClass = 'w-10 h-10 md:w-12 md:h-12'; // Fallback to medium size
  }

  return (
   <ol className="grid grid-cols-3 gap-10 md:gap-16 justify-center">
      <li>
         <a href="https://x.com/gorbysolana" target="_blank">
            <img
            className={`hover:scale-90 ${sizeClass}`}
            priority
            src={x}
            alt="Follow us on X"
            />
         </a>
      </li>
      <li>
         <a href="https://t.me/+itp3T2tqciVhODFk" target="_blank">
            <img
            className={`hover:scale-90 ${sizeClass}`}
            priority
            src={telegram}
            alt="Join our telegram"
            />
         </a>
      </li>
      <li>
         <a href="https://pump.fun/coin/ETaaHTVrZHSxfQyP7ioDQntbm4CgF8N96UKundtGpump" target="_blank">
            <img
            className={`hover:scale-90 ${sizeClass}`}
            priority
            src={dexscreener}
            alt="Find us on Dexscreener"
            />
         </a>
      </li>
   </ol>
  )
}

export default Social
