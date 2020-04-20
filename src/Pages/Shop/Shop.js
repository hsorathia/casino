import React, { Component } from "react";
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg,
  Col,
  Row,
  Button,
  Jumbotron
} from "reactstrap";

import ShopUser from './UserShop';
import Logo from './clipart1116730.png';
import './shop.css'

function Shopbadges() {

  const shopbadges = [
    {
      id: 1,
      badgeName: '10+ Wins in Blackjack',
      badgeDesc: 'Show off that you won over 10+ times in Blackjack!',
      badgeCost: 10,
      badgePurchased: false
    },
    {
      id: 2,
      badgeName: 'Ultimate OG Badge',
      badgeDesc: 'Show the newbies that you have been here since day 1! ',
      badgeCost: 1000,
      badgePurchased: false
    },
    {
      id: 3,
      badgeName: '10 Consecutive Days Online!',
      badgeDesc: 'Been online 10 days in a row is huge dedication! Get this badge to reward yourself.',
      badgeCost: 10,
      badgePurchased: false
    }
  ];

  // would like to add an image attribute in the future and replace chip balance w/ variable

  return (
    <div id="shop-page">
      <Jumbotron>
      <div className='text-center'>
        <h1 className='display-4'>Shop <img src={Logo} class="image"></img> </h1>
      </div>
    </Jumbotron>
      <h2>Badges of the Day!</h2>
      <section className='user_chip'>
        <ShopUser></ShopUser>
      </section>
      <section className='grid'>
        {shopbadges.map((shopbadge, i) => {
          return (
            <div key={i}>
              <Col md={11}>
                <Card>
                  <CardImg top src="https://66.media.tumblr.com/5e6f6e2c27c54517ea7b945919c97a39/tumblr_pfvoq9eW8j1uaogmwo2_250.png" size="100" />
                  <CardBody>
                     <CardTitle>{shopbadge.badgeName}</CardTitle>
                     <Row>
                       <CardSubtitle><b>Cost: </b>{shopbadge.badgeCost}</CardSubtitle>
                     </Row>
                    <CardText>
                      <Row style={{ height: '100px' }}>
                        {shopbadge.badgeDesc}
                      </Row>
                      <Row>
                        {shopbadge.badgePurchased ? "Already Purchased!" : "Not purchased!"}
                      </Row>
                    </CardText>
                    <Row><Button>Purchase Badge!</Button></Row>
                    
                  </CardBody>
                </Card>
              </Col>
            </div>
          )
        })}
      </section>

    </div>
  );
}
// not really sure for shop_no, is it randomized? how is it going to get assigned to the user?


export default Shopbadges;