import React, { Suspense } from 'react'

import * as Comp from './components'
import { SEO } from '../../layout'
import { Gallery } from '../../commons'

const Home = ({ className }) => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <SEO title="Omida - Real Estate Consulting - Italy | Home page" description="Remida - real estate">
        <div className={className}>
          <Comp.Main />
          <Comp.SecondSection />
          <Comp.OurMission />
          <Comp.FirstRow />
          <Comp.SecondRow />
          <Comp.ThirdRow />
          <Gallery />
          <Comp.LastSection />
        </div>
      </SEO>
    </Suspense>
  )
}

export default Home
