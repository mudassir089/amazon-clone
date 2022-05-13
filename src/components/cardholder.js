import React from 'react'
import {Row,Col,Card,Avatar} from 'antd'


function Cardholder({title}) {

    const {Meta} = Card


    return (
        <div>
            <Card
    style={{ width: 300 }}
    title={title}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    // actions={[
    //   <SettingOutlined key="setting" />,
    //   <EditOutlined key="edit" />,
    //   <EllipsisOutlined key="ellipsis" />,
    // ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
  
  
        </div>
    )
}

export default Cardholder
