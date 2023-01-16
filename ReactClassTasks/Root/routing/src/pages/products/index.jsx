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

const Products = () => {
  const [dataProducts, setDataProducts] = useState([]);
  useEffect(() => {
    fetch("https://northwind.vercel.app/api/products")
    .then((response) => response.json())
    .then((data) => setDataProducts(data))
  }, []);
  return (
    <div>
       <TableContainer>
  <Table variant='striped' colorScheme='black'>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>Quantity PerUnit</Th>
      </Tr>
    </Thead>
    <Tbody>
      {dataProducts.map((el, i) => {
       return <Tr key={i}>
        <Td>{el.id}</Td>
        <Td>{el.name}</Td>
        <Td>{el.quantityPerUnit}</Td>
      </Tr>
      })}
    </Tbody>
  </Table>
</TableContainer>
    </div>
  )
}

export default Products
