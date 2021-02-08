import { Select } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    position: relative;

    .ant-select {
        width: 100%;

        .ant-select-selector {
            padding-left: 45px;
        }
    }
`;

const Count = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 6px;
    left: 10px;
    z-index: 10;
`;

const SelectWithCount = (props) => {
    return (
        <Wrap>
            <Count>{props.count? props.count : 0}</Count>
            <Select {...props}/>
        </Wrap>
    )
}

export default SelectWithCount
