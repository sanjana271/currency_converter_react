import { useState } from 'react'
import Input from './components/Input'
import useCurrencyinfo from './hooks/useCurrencyinfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setConvertAmount] = useState() //actual covertion

  const currencyInfo = useCurrencyinfo(from);//whatever data we got from usecurreinfo hook and default value from i.e usd value
  const options = Object.keys(currencyInfo);//like if currency is usd then all data related to usd to which we can convert usd

  const swap = () => {//just swapping values
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = () => {
    setConvertAmount(amount * currencyInfo[to])//in actual result we will multifly given amount * whatever data in currencyinfo and to what we want to convert
  }//eg. inr to usd , amount=1 usd-data= 82, 1*82

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat object-contain" style={{ backgroundImage: "url(al.jpg)" }}>

        <div className='w-full'>
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form onSubmit={(e) => {
              e.preventDefault();//preventing from direct submission
              convert()
            }} >
              <div className="w-full mb-1">
                <Input label="From" amount={amount} currencyOption={options} onCurrencychange={(currecy) => setFrom(currecy)} selectCurrency={from} onAmountchange={(amount) => setAmount(amount)} />
              </div>
              <div className="relative w-full h-0.5">
                <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 flex flex-wrap align-center justify-center top-50% left-50%"
                  onClick={swap}>
                  swap
                </button>
              </div>

              <div className="w-full mt-1 mb-4">
                <Input label="To" amount={convertAmount} currencyOption={options} onCurrencychange={(currecy) => setTo(currecy)} selectCurrency={to} amountDisabled />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} To {to.toUpperCase()}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
