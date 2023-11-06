import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFoodStore from '../../store/useFoodStore'

const DisplayBill = () => {

  const navigate = useNavigate()
  
  // call the cart item to view all item purchase
  const {cartItems, totalCost, countReceiptNumbers, incrementReceiptNumber, clearCartItems} = useFoodStore((state) => state)

  const handlePrint = () => {
    incrementReceiptNumber()
    window.print()
    clearCartItems()
    navigate('/main')
  }

  return (
    <div className='container bg-slate-100 flex flex-col justify-center items-center'>
      <header className='w-[400px] text-center py-2'>
        <p className='font-bold'>Happy Restaurant</p>
        <p><small>Greenlites Bldg. City of Malolos, Bulacan</small></p>
        <p><small>TIN: 0000-0000-0000-0000</small></p>
        <p><small>Receipt No. {countReceiptNumbers}</small></p>
      </header>
      <table className='border-2'>
        <thead className='border-2'>
          <tr>
            <td className='px-6 font-semibold'>
                Name
            </td>
            <td className='px-6 font-semibold'>
                Qty
            </td>
            <td className='px-6 font-semibold'>
                Price
            </td>
            <td className='px-6 font-semibold'>
                Total Price
            </td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className='px-6 py-1'>{item.name}</td>
              <td className='px-6 py-1'>{item.quantity}</td>
              <td className='px-6 py-1'>{Number(item.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
              <td className='px-6 py-1'>{item.totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='p-4 font-bold '>
          Total Cost: {totalCost}
      </div>
      <footer>
        <small>---------- Thank you for Comming!
        Please come again! ----------- </small>
      </footer>
      <div>
        <button className='py-3' onClick={handlePrint}>Receipt Print</button>
      </div>
    </div>
  )
}

export default DisplayBill