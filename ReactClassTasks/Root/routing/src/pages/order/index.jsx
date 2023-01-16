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

const Order = () => {
  const [dataOrders, setDataOrders] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/orders")
    .then((response) => response.json())
    .then((data) => setDataOrders(data))
  }, []);
  return (
    <div>
      <TableContainer>
  <Table variant='striped' colorScheme='green'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Ship Name</Th>
        <Th>Address</Th>
      </Tr>
    </Thead>
    <Tbody>
      {dataOrders.map((el, i) => {
       return <Tr key={i}>
        <Td>{el.id}</Td>
        <Td>{el.shipName}</Td>
        <Td>{el.shipAddress.city}</Td>
      </Tr>
      })}
    </Tbody>
  </Table>
</TableContainer>
    </div>
  )
}

export default Order
