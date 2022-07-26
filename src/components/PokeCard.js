import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { StarOutlined } from '@ant-design/icons'

export default function PokeCard({name, url}) {
  return (
    <Card
      title={name}
      cover={<img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"} alt={name} />}
      style={style}
      extra={<StarOutlined />}
    >
      <Meta description='fire, magic' />
    </Card>
  )
};


const style={
 
  height: "300px"
}
