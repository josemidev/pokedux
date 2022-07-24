import React from 'react'
import { Input, Space } from 'antd';

const { SearchInput } = Input;

export function Search() {
  return (
    <SearchInput placeholder="input search text" style={{ width: 200 }}  />
  )
}

