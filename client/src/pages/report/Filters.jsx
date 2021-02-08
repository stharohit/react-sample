import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Col, DatePicker, Row, Select } from "antd";
import axios from 'axios';
import SelectWithCount from "../../components/SelectWithCount";

const Wrap = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
    display: block;
`;

const Filters = (props) => {

    const { setview, view, setdate, setEntries, entries, setstatusActive, setLanguageFilter } = props;
    const [status, setstatus] = useState();
    const [langauages, setlangauages] = useState();

    const getInitialFilters = () => {
        axios.get('filters/status').then(response => {
            setstatus(response.data);
        }).catch(err => {
            console.log(err);
        });
        axios.get('filters/languages').then(response => {
            setlangauages(response.data);
        }).catch(err => {
            console.log(err);
        });
    }

    useEffect(() => {
        getInitialFilters();
    }, [])

    return (
        <Wrap>
            <Row gutter={[30, 30]}>
                <Col xs={24} md={12} xl={8}>
                    <InputLabel>Date between</InputLabel>
                    <DatePicker.RangePicker onChange={value => setdate(value)} style={{ width: '100%' }} />
                </Col>
                <Col xs={24} md={12} xl={8}>
                    <InputLabel>Select View</InputLabel>
                    <Select onSelect={value => setview(value)} defaultValue={view} style={{ width: '100%' }}>
                        <Select.Option value='detailed'>Detailed</Select.Option>
                        <Select.Option value='summary'>Summary</Select.Option>
                    </Select>
                </Col>
                <Col xs={24} md={12} xl={8}>
                    <InputLabel>Select Language</InputLabel>
                    <SelectWithCount allowClear onClear={() => setLanguageFilter()} count={langauages && langauages.length} placeholder="Select Language" onSelect={value => setLanguageFilter(value)}>
                        {
                            langauages && langauages.map(lang => (
                                <Select.Option key={lang.id} value={lang.id}>{lang.languageName}</Select.Option>
                            ))
                        }
                    </SelectWithCount>
                </Col>
                {
                    view === 'detailed' &&
                    <Col xs={24} md={12} xl={8}>
                        <InputLabel>Status</InputLabel>
                        <SelectWithCount allowClear onClear={() => setstatusActive()} count={status && status.length} placeholder="Select Status" onSelect={value => setstatusActive(value)}>
                            {
                                status && status.map(stat => (
                                    <Select.Option key={stat.statusId} value={stat.statusId}>{stat.status}</Select.Option>
                                ))
                            }
                        </SelectWithCount>
                    </Col>
                }
            </Row>
            <Row justify="space-between" align="middle" style={{ margin: '25px 0' }}>
                <Col>
                    <label>Show </label>
                    <Select onSelect={value => setEntries(value)} defaultValue={entries}>
                        <Select.Option value={5}>5</Select.Option>
                        <Select.Option value={10}>10</Select.Option>
                        <Select.Option value={20}>20</Select.Option>
                        <Select.Option value={50}>50</Select.Option>
                    </Select>
                    <label> entries</label>
                </Col>
            </Row>
        </Wrap>
    );
};

export default Filters;
