import React, { Fragment, useState } from 'react'

function FractionRupiah() {
  const [ rupiahInput, setRupiahInput ] = useState('')
  const [ rupiahStatus, setRupiahStatus ] = useState('')

  const createFractionRupiah = (n) => {
    let FractionNumber = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50]
    let div = 0, mod = 0, result = ''
    FractionNumber.forEach((item, index, arr) => {
      div = parseInt(n/item)
      if (div !== 0) {
        mod = n % item
        n = mod
        result += `, ${div} x Rp${item}` 
      }
      if(index === arr.length-1) {
        result += (n) ? `, left Rp${n} (no available fraction)`: ''
      }
    })
    result = result.replace(/^,\s/, '')
    setRupiahStatus(result)
  }
  
  const validateInput = (input) => {
    const regexPattern = new RegExp(/^(Rp\s?)?[0-9]*(\.[0-9]{3})*(,[0-9]{1,2})?$/g)
    if (regexPattern.test(input)) {
      let normalizeInput = input.replace(/^(Rp\s?)?/g, '').replace(/\./g, '').replace(/(,[0-9]{1,2})$/g, '')
      if (normalizeInput.length) {
        createFractionRupiah(normalizeInput)
        errorColor(false)
      } else {
        errorColor(true)
        setRupiahStatus('invalid input')
      }
    } else {
      errorColor(true)
      setRupiahStatus('invalid input')
    }
  }

  const errorColor = (bool) => {
    let elTarget = document.querySelector('.c-content__result');
    if (bool) {
      elTarget.classList.add('error')
    }
    else if (elTarget.classList.contains('error')) {
      elTarget.classList.remove('error')
    }
  }

  const handleChange = (e) => {
    setRupiahInput(e.target.value)
  }
  const handleEnter = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      validateInput(rupiahInput)
    }
  }
  
  return (
    <Fragment>
      <section className="c-content">
        <input placeholder="masukkan jumlah uang" className="c-content__input" data-testid="rupiah-input" value={rupiahInput} onChange={handleChange} onKeyDown={handleEnter} type="text" />
        <div className="c-content__help"><small>contoh: <em>120000, 18.215, 180.231, Rp17500, Rp 500, Rp17.500,00, Rp 120.325, 005.000, 001000</em> kemudian tekan <strong>Enter</strong></small></div>
      </section>
      <section className="c-content">
        <div className="c-content__result" data-testid="rupiah-status">{ rupiahStatus }</div>
      </section>
    </Fragment>
  )
}

export default FractionRupiah