import React from 'react'
import svg1 from '../../images/svg-1.svg'
import svg5 from '../../images/svg-5.svg'
import svg3 from '../../images/svg-3.svg'


import {ServicesContainer, ServicesH1,ServiceWrapper, ServicesCard,ServicesIcon,ServicesH2, ServicesP} from './index'

const Service = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServiceWrapper>
            <ServicesCard>
                <ServicesIcon src={svg1} />
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={svg5} />
                <ServicesH2>Virtual Office</ServicesH2>
                <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={svg3} />
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
        </ServiceWrapper>
    </ServicesContainer>
  )
}

export default Service