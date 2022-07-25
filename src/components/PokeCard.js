import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

export default function PokeCard({name}) {
  return (
    <Card
      title={name}
      cover={<img src='' alt='dito' />}
      style={style}
    >
      <Meta description='fire, magic' />
    </Card>
  )
};


const style={
 
  height: "300px"
}
