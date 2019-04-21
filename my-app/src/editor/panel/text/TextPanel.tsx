import React, { CSSProperties } from 'react'
import { TextCell } from './TextCell'
import styled from 'styled-components';

const TextContainer = styled.div`
    padding: 0 20px 0 5px
    color: #222
    display: inline-block
    vertical-align: top
`

export const TextPanel = () => (
    <TextContainer>
        <div>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
        </div>
        <div>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
            <TextCell>.</TextCell>
        </div>
    </TextContainer>
)