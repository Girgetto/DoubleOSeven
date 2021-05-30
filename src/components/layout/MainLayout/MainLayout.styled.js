import styled from 'styled-components'
import MainLayout from './MainLayout.component'

export default styled(MainLayout).attrs({})`
  position: relative;
  padding-bottom: 60px;

  .content {
    min-height: 100%;
    padding-top: 120px;
  }
`
