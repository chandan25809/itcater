import React from 'react';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Main frame Automation expert',
    content: [
      {
        // price: '$100/hr',
        // space: '',
        // user: '1 user',
        support: 'Required-5',
        backup: 'Experience-10 years',
        access: 'Location-USA'
      }
    ]
  },
  {
    title: 'SAP Consultant',
    content: [
      {
        // price: '$59.99/hr',
        // space: '5 GB of space',
        // user: '5 users',
        support: 'Required-15',
        backup: 'Experience-10 years',
        access: 'Location-USA'
      }
    ]
  },
  {
    title: 'Core Java programmers',
    content: [
      {
        // price: '$99.99/hr',
        // space: 'Unlimited space',
        // user: '15 users',
        support: 'Required-2',
        backup: 'Experience-15 years',
        access: 'Location-USA'
      }
    ]
  }
];

function AppPricing() {
  return (
    <div id="pricing" className="block pricingBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>CAREERS</h2>
          <p>WORK WITH US</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <a href="#contact"><Button type="primary"   size="large"><i className="fab fa-telegram-plane"></i>Contact US</Button></a>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPricing;