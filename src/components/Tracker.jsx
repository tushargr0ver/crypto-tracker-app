import React, { useState,useEffect } from 'react'
import bitcoin_logo from '../assets/bitcoin.png'
import ethereum_logo from '../assets/ethereum.png'
import solana_logo from '../assets/solana.png'
import tether_logo from '../assets/tether.png'
import github_logo from '../assets/github-logo.png'



function Tracker() {

  const [bitcoin, setBitcoin] = useState([]);
  const [ethereum, setEthereum] = useState([]);
  const [solana, setSolana] = useState([]);
  const [tether, setTether] = useState([]);

  useEffect(()=>{
  const loadData = async()=>{
  try{
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=10&page=1'
  
    const response = await fetch(url);
    const data = await response.json();

    setBitcoin({
      current_price_btc: Math.floor(data[0].current_price),
      price_change_btc: Math.floor(data[0].price_change_percentage_24h)
    })
    setEthereum({
      current_price_ethereum: Math.floor(data[1].current_price),
      price_change_ethereum: Math.floor(data[1].price_change_percentage_24h)
    })
    setTether({
      current_price_tether: Math.floor(data[2].current_price),
      price_change_tether: Math.floor(data[2].price_change_percentage_24h)
    })
    setSolana({
      current_price_solana: Math.floor(data[4].current_price),
      price_change_solana: Math.floor(data[4].price_change_percentage_24h)
    })
  }
  catch{
    
  }
};
loadData();
  }, []);


  return (
    <>
    
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left rtl:text-right'>
          
          <thead className='text-xs uppercase bg-gray-800 text-blue-500'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                #
              </th>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Current Price
              </th>
              <th scope='col' className='px-6 py-3'>
                Change(24h)
              </th>
            </tr>
          </thead>


          <tbody>
            <tr className='odd:bg-gray-900 even:bg-gray-800 border-gray-700'>
              <th scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                <img src={bitcoin_logo} alt="btc" className='w-32 h-32'/>
              </th>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                Bitcoin(BTC)
              </td>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                ₹{bitcoin.current_price_btc}
              </td>
              <td scope='row' className={`px-6 py-4 font-medium text-white-500 whitespace-nowrap ${bitcoin.price_change_btc>0 ? 'text-green-700' : 'text-red-800' }`}>
                {bitcoin.price_change_btc}%
              </td>
            </tr>
          </tbody>


          <tbody>
            <tr className='odd:bg-gray-900 even:bg-gray-800 border-gray-700'>
              <th scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                <img src={ethereum_logo} alt="btc" className='w-32 h-32'/>
              </th>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                Ethereum(ETH)
              </td>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                ₹{ethereum.current_price_ethereum}
              </td>
              <td scope='row' className={`px-6 py-4 font-medium text-white-500 whitespace-nowrap ${ethereum.price_change_ethereum>0 ? 'text-green-700' : 'text-red-800' }`}>
                {ethereum.price_change_ethereum}%
              </td>
            </tr>
          </tbody>


          <tbody>
            <tr className='odd:bg-gray-900 even:bg-gray-800 border-gray-700'>
              <th scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                <img src={tether_logo} alt="btc" className='w-32 h-32'/>
              </th>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                Tether(USDT)
              </td>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                ₹{tether.current_price_tether}
              </td>
              <td scope='row' className={`px-6 py-4 font-medium text-white-500 whitespace-nowrap ${tether.price_change_tether>0 ? 'text-green-700' : 'text-red-800' }`}>
                {tether.price_change_tether}%
              </td>
            </tr>
          </tbody>


          <tbody>
            <tr className='odd:bg-gray-900 even:bg-gray-800 border-gray-700'>
              <th scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                <img src={solana_logo} alt="btc" className='w-32 h-32'/>
              </th>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                Solana(SOL)
              </td>
              <td scope='row' className='px-6 py-4 font-medium text-white-500 whitespace-nowrap'>
                ₹{solana.current_price_solana}
              </td>
              <td scope='row' className={`px-6 py-4 font-medium text-white-500 whitespace-nowrap ${solana.price_change_solana>0 ? 'text-green-700' : 'text-red-800' }`}>
                {solana.price_change_solana}%
              </td>
            </tr>
          </tbody>


          <tfoot className='grid place-items-center'>
             <a href='https://github.com/tushargr0ver/crypto-tracker-app'>
             <img src={github_logo} alt="" className='w-9 h-9 '/></a>
          </tfoot>
        </table>
      </div>
    </>
  )
}

export default Tracker