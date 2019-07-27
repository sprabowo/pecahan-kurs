import React from 'react'
import { render, fireEvent, cleanup, queryByRole } from '@testing-library/react'
import FractionRupiah from '../FractionRupiah'

afterEach(cleanup)

describe('FractionRupiah', () => {
  it('test case 001000', () => {
    const result = {
      input: '001000',
      text: '1 x Rp1000'
    }
    const { getByTestId } = render(<FractionRupiah />)
    let rupiahInput = getByTestId('rupiah-input')
    fireEvent.change(rupiahInput, { target: { value: result.input } })
    fireEvent.keyDown(rupiahInput, { key: 'Enter', keyCode: 13 })
    let status = getByTestId('rupiah-status')
    expect(status.innerHTML).toBe(result.text)
  })
  
  it('test case Rp3900', () => {
    const result = {
      input: 'Rp3900',
      text: '1 x Rp2000, 1 x Rp1000, 1 x Rp500, 4 x Rp100'
    }
    const { getByTestId } = render(<FractionRupiah />)
    let rupiahInput = getByTestId('rupiah-input')
    fireEvent.change(rupiahInput, { target: { value: result.input } })
    fireEvent.keyDown(rupiahInput, { key: 'Enter', keyCode: 13 })
    let status = getByTestId('rupiah-status')
    expect(status.innerHTML).toBe(result.text)
  })

  it('test case 15000', () => {
    const result = {
      input: '15000',
      text: '1 x Rp10000, 1 x Rp5000'
    }
    const { getByTestId } = render(<FractionRupiah />)
    let rupiahInput = getByTestId('rupiah-input')
    fireEvent.change(rupiahInput, { target: { value: result.input } })
    fireEvent.keyDown(rupiahInput, { key: 'Enter', keyCode: 13 })
    let status = getByTestId('rupiah-status')
    expect(status.innerHTML).toBe(result.text)
  })

  it('test case 12510', () => {
    const result = {
      input: '12510',
      text: '1 x Rp10000, 1 x Rp2000, 1 x Rp500, left Rp10 (no available fraction)'
    }
    const { getByTestId } = render(<FractionRupiah />)
    let rupiahInput = getByTestId('rupiah-input')
    fireEvent.change(rupiahInput, { target: { value: result.input } })
    fireEvent.keyDown(rupiahInput, { key: 'Enter', keyCode: 13 })
    let status = getByTestId('rupiah-status')
    expect(status.innerHTML).toBe(result.text)
  })
  
  it('test case Rp ', () => {
    const result = {
      input: 'Rp ',
      text: 'invalid input'
    }
    const { getByTestId } = render(<FractionRupiah />)
    let rupiahInput = getByTestId('rupiah-input')
    fireEvent.change(rupiahInput, { target: { value: result.input } })
    fireEvent.keyDown(rupiahInput, { key: 'Enter', keyCode: 13 })
    let status = getByTestId('rupiah-status')
    expect(status.innerHTML).toBe(result.text)
  })
  
  it('test case 3000 Rp', () => {
    const result = {
      input: '3000 Rp',
      text: 'invalid input'
    }
    const { getByTestId } = render(<FractionRupiah />)
    let rupiahInput = getByTestId('rupiah-input')
    fireEvent.change(rupiahInput, { target: { value: result.input } })
    fireEvent.keyDown(rupiahInput, { key: 'Enter', keyCode: 13 })
    let status = getByTestId('rupiah-status')
    expect(status.innerHTML).toBe(result.text)
  })
})