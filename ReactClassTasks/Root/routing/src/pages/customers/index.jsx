import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import CustomerBody from '../customersbody';

const Customers = () => {
  const [dataCustomers, setDataCustomers] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/customers")
    .then((response) => response.json())
    .then((data) => setDataCustomers(data))
  }, []);
  
  return (
  <div>
  <TableContainer>
  <Table variant='striped' colorScheme='blue'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Company Name</Th>
        <Th>Address</Th>
      </Tr>
    </Thead> 
    <Tbody>
      {dataCustomers.map((el, i) => {
       return <CustomerBody element={el}/>
      })}
    </Tbody>
  </Table>
</TableContainer>
    </div>
  )
}

export default Customers
