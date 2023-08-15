import './App.css'
import React, {useState, useEffect} from 'react'
import CustomerServices from './services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'
import CustomerEdit from './CustomerEdit'

// Propsi otettu vastaan suoran nimellä

const CustomerList = ({setIsPositive, setShowMessage, setMessage}) => {

//Komponentin tilan määritys
  
const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)
const [lisäystila, setLisäystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [muokattavaCustomer, setMuokattavaCustomer] = useState(false)

useEffect( () => {
    CustomerServices.getAll()
    .then(data => {
        setCustomers(data)
})

},[lisäystila, reload, muokkaustila]
)
const editCustomer = (customer) => {
  setMuokattavaCustomer(customer)
  setMuokkaustila(true)

}
    return (
      <>
        
        <h1><nobr style={{ cursor: 'pointer' }}
                onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>
                
                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>

                {lisäystila && <CustomerAdd setLisäystila={setLisäystila} 

                setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                
                />}
                 {muokkaustila && <CustomerEdit setMuokkaustila={setMuokkaustila} 

                  setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                  muokattavaCustomer={muokattavaCustomer}

/>}


             
        {
            showCustomers && customers && customers.map(c => (
              <Customer key={c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
              setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
              editCustomer={editCustomer}
              />
              )
            )            

            
        }
      
       
      </>
    )
}

export default CustomerList
