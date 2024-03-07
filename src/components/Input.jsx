import React from "react";

function Input({
    label,/* lables as from or to*/
    amount,/*for amount*/
    onAmountchange,/*if amount is chnaged*/
    onCurrencychange,/*if currency is chnaged */
    currencyOption = [],/*currency will be default and given in array */
    selectCurrency = "USD",/*bydefault selected */
    amountDisabled = false,
    currencyDisabled = false,/*user should able to change */
    classname = ""  /*for user to take input */
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${classname}`}>
            <div className="w-1/2">{/*left part of input box*/}
                <label className="text-black/40 mb-2 inline-block">{label}</label>  {/* lables as from , currency type*/}
                <input className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount"
                    disabled={amountDisabled} value={amount}
                    onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))} />{/*we want number only*/}
            </div>
            {/*right part of curruncytype and option to select */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 courser-pointer outline-none" disabled={currencyDisabled}
                    value={selectCurrency} onChange={(e) => onCurrencychange && onCurrencychange(e.target.value)}>
                 {/*whatever value in map it will be display in option & key is for optiomaztion only*/}
                    {currencyOption.map((currency) =>{
                        return <option key={currency} value={currency}>{currency}</option> 
                    })}

                </select>
            </div>
        </div>
    )
}

export default Input;