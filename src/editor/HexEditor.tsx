import React from "react";
import { OffsetPanel, HexPanel, TextPanel } from "./panel";
import styled from "styled-components";

const HexEditorContainer = styled.div`
    position: absolute
    white-space: nowrap
    left: 0
    right: 0
    top: 0
    bottom: 0
    overflow: hidden
    outline: none
    background: #252526
`;

export const HexEditor = (): React.ReactElement => (
  <HexEditorContainer>
    <OffsetPanel />
    <HexPanel />
    <TextPanel />
  </HexEditorContainer>
);
