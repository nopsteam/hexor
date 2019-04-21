import React from 'react'
import { HexEditor } from './HexEditor'
import styled from 'styled-components';

const EditorContainer = styled.div`
    position: absolute
    white-space: nowrap
    left: 0
    right: 0
    top: 0
    bottom: 0
    overflow: hidden
    outline: none
    background: #fff
`

export const Editor = () => (
    <EditorContainer>
        <HexEditor></HexEditor>
    </EditorContainer>
)