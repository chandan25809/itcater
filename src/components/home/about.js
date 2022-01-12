import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i className="fa-globe fa"></i>,
    title: 'Intelligent Enterprise',
    content: 'Run at your best with SAP solutions that can help you grow more resilient, more profitable, and more sustainable.',
  },
  {
    key: '2',
    icon: <i className="fas fa-desktop"></i>,
    title: 'Small and Midsize Business Management',
    content: 'ITCater solutions equip your business to address today’s challenges while building the foundation to seize future opportunities.',
  },
  {
    key: '3',
    icon: <i className="fas fa-database"></i>,
    title: 'Simplified Workflow',
    content: 'We guide you through the decision-making process by analyzing your current challenges and goals, suggesting Digital Transformation solutions and other services.',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>ITCATER is the pure-play digital transformation workshop</p>
        </div>
        <div className="contentHolder">
          <p>ITCATER is a fast-growing, end-to-end consulting,digital transformation and technology workshop.Our new vision “Reimagining a better-shared world” and mission “Bringing human expertise to tech for delivering purposeful solutions that amplify value” is at the heart of our transformation approach, powered by cloud, platform mindset, and engagement. Our motto “Let’s make digital change happen” is our commitment to empower our clients to succeed in this digital world. While our values – integrity, teamwork, the pursuit of excellence, committed, customer-centric, and thought-leadership, defines our character and behavior.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;