import React, { CSSProperties } from 'react'
import styled from 'styled-components';

const OffsetContainer = styled.div`
    padding: 0 10px
    background: #444444
    color: #AAA
    text-align: right
    display: inline-block
    vertical-align: top
`

export const OffsetPanel = () => (
    <OffsetContainer>
        <div>00000000</div>
        <div>00000010</div>
    </OffsetContainer>
)