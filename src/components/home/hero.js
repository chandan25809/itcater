import React from 'react';
import { Button } from 'antd';

import { Carousel } from 'antd';

const items = [
  {
    key: '1',
    title: 'Digital Transformation Simplified ',
    content: 'Our team at ITCater guide you through the decision-making process by analyzing your current challenges and goals, suggesting Digital Transformation solutions and other services to supercharge your business processes, and working with you post-deployment to ensure your business has the tools it needs to succeed. Whether you’re looking to improve efficiencies or reduce operational costs, we’re with you every step of the way to provide consultative services and value-driven solutions.',
  },
  {
    key: '2',
    title: 'We’re Business People that Know SAP',
    content: 'Unlike other SAP partners, we put your business first. That’s because we’re business people that are also experts in all things SAP. We provide SAP enterprise consulting services to determine which services best resolve your tech-related problems. From integrating ERP for streamlining your workflow to leveraging analytics for real-time data, we customize your SAP solutions to ensure you get the results you need on a budget that will satisfy your financial department.',
  },
  {
    key: '3',
    title: 'Your trusted partner in business strategy',
    content: 'When you are busy with day-to-day tasks, it’s tough to prioritize strategic thinking and innovation. Our team provides valuable market insights and helps you take control of your data, empowering you to make strategic decisions that will help you innovate and scale.Our team of experts use proven strategies and cutting-edge technologies to identify critical opportunities, design innovative strategies for growth, and optimize performance to stay ahead of the competition. ',
  },
  {
    key: '4',
    title: 'Make the Match!',
    content: 'Connecting human potential to meaningful work and creating value for our clients. We match people to the work that inspires them.  We love it when the customer chooses our candidate.We enjoy competing and we like to win.We crave a fair playing field.  No shortcuts.  Best efforts.  We are relentless in our pursuit of talented people to join our company. We aspire to bring the right person to the right job every time. Our people click!',
  },
]

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel autoplay>
        {items.map(item => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="btnHolder">
                  <a href="https://www.sap.com/india/about/company/what-is-sap.html" target="_blank"><Button type="primary" size="large">Learn More</Button></a>
                  <a href="https://m.youtube.com/watch?v=ystdF6jN7hc" target="_blank"><Button size="large"><i className="fas fa-desktop"></i> Watch a Demo</Button></a>
                </div>
              </div>
            </div>  
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;