import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { notification, Typography } from "antd";
import axios from "axios";
import Filters from "./Filters";
import ReportTabe from "./ReportTabe";
import moment from 'moment';

const Wrap = styled.div`
  background-color: #ececec;
  padding: 40px;
  min-height: 100vh;
`;

const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Header = styled.div`
  padding: 5px 15px;
  background-color: #f5f5f5;
`;

const StyledTitle = styled(Typography.Title)`
  &.ant-typography {
    color: #1388d6;
    font-weight: 400;
  }
`;

const ReportWrap = styled.div`
  padding: 20px 15px;
`;

const Report = () => {
    const [view, setview] = useState("detailed");
    const [page, setpage] = useState(5);
    const [date, setdate] = useState();
    const [data, setdata] = useState();
    const [statusActive, setstatusActive] = useState();
    const [languageFilter, setLanguageFilter] = useState();

    useEffect(() => {
        let params = {};
        if (date) {
            params['startDate'] = date[0].format('YYYY-MM-DD');
            params['endDate'] = date[1].format('YYYY-MM-DD');
        }
        if (statusActive) params['statusId'] = statusActive;
        if (languageFilter) params['languageId'] = languageFilter;
        axios.get(`api/${view}`, {
            params: params
        }).then((response) => setdata(response.data)).catch(err => {
            notification.error({
                message: 'Error',
                description: 'Unable to get data.'
            })
        });
    }, [view, date, statusActive, languageFilter]);

    return (
        <Wrap>
            <Container>
                <Header>
                    <StyledTitle level={5}>
                        <strong>Segmentation</strong> - H.R. Report
                    </StyledTitle>
                </Header>
                <ReportWrap>
                    {data && (
                        <Typography.Text>
                            <strong>{data.length}</strong> results {date && `from ${moment(date[0]).format('YYYY/MM/DD')} to ${moment(date[1]).format('YYYY/MM/DD')}`} as <strong>{view}</strong> view
                        </Typography.Text>
                    )}
                    <Filters setLanguageFilter={setLanguageFilter} setstatusActive={setstatusActive} page={page} setpage={setpage} setdate={setdate} setview={setview} view={view}/>
                    <ReportTabe data={data} view={view} page={page}/>
                </ReportWrap>
            </Container>
        </Wrap>
    );
};

export default Report;
