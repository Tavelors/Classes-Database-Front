import React, {useEffect, useState}from 'react'
import {useParams} from 'react-router-dom'
import {getClassPayment} from '../../utils/api'
import PayUpFront from '../paymentButtons/PayUpFront'
const ClassPayment = () => {
const {class_id} = useParams()
const [payMent, setPayMent] = useState([])

    useEffect(() => {
        const fetchData = async () => {
        const data = await getClassPayment(class_id)
        setPayMent(data)
        console.log(data);
        }
        fetchData()

    }, [class_id])
    
    

console.log(payMent[0]);
if(payMent === undefined) {
  return;
} else {

  
  return (
    <>
      <table>
          <thead>
            <tr>
                <th>Payment Type:</th>
                <th>Up Front</th>
                <th>after Month</th>
            </tr>
          </thead>
          <tbody>
        <tr>
            <td></td>
            <td><PayUpFront pay_id={payMent} /></td>
            <td><button>{payMent.afterMonth}After Month</button></td>
        </tr>
          </tbody>
      </table>
      <table>
          <thead>
            <tr>
                <th>Month</th>
                <th>Paid</th>
                <th>Concluded</th>
            </tr>
          </thead>
          <tbody>
        <tr>
            <td>Date</td>
            <td><button>{payMent.paid}Paid</button></td>
            <td><button>{payMent.concluded}Concluded </button></td>
        </tr>
          </tbody>
      </table>
      </>
  )
}
}

export default ClassPayment