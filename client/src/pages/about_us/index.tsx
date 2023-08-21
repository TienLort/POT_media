import React from 'react'
import Banner from './banner'
import OfficialPartner from './official_partners'
import Story from './story'
import Reason from './reason'
import Trust from './trust'
import Integrity from './integrity'
import Talk from './talk'
import MyMap from './map'
import FooterBanner from 'src/components/footer_banner'

const AboutUs = () => {
    return (
        <div>
            <Banner />
            <OfficialPartner />
            <Story />
            <Reason />
            <Trust />
            <Integrity />
            <Talk />
            <MyMap />
            <FooterBanner />
        </div>
    )
}

export default AboutUs