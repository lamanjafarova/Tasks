import React from 'react'
import {
    Tr,
    Td,
  } from '@chakra-ui/react'

const CustomerBody = ({element}) => {
  return (
      <Tr>
        <Td>{element.id}</Td>
        <Td>{element.companyName}</Td>
        <Td>{element.address.city}</Td>
      </Tr>
  )
}

export default CustomerBody
