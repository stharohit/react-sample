import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { notification, Pagination, Typography } from "antd";
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
    const [entries, setEntries] = useState(5);
    const [date, setdate] = useState();
    const [data, setdata] = useState();
    const [statusActive, setstatusActive] = useState();
    const [languageFilter, setLanguageFilter] = useState();
    const [currentPage, setcurrentPage] = useState(1);
    const [total, settotal] = useState();

    useEffect(() => {
        let params = {};
        if (date) {
            params['startDate'] = date[0].format('YYYY-MM-DD');
            params['endDate'] = date[1].format('YYYY-MM-DD');
        }
        if (statusActive) params['statusId'] = statusActive;
        if (languageFilter) params['languageId'] = languageFilter;
        params['page'] = currentPage;
        params['entries'] = entries;
        axios.get(`api/${view}`, {
            params: params
        }).then((response) => {
            setdata(response.data.results);
            settotal(response.data.total);
        }).catch(err => {
            notification.error({
                message: 'Error',
                description: 'Unable to get data.'
            })
        });
    }, [view, date, statusActive, languageFilter, currentPage, entries]);

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
                    <Filters setLanguageFilter={setLanguageFilter} setstatusActive={setstatusActive} entries={entries} setEntries={setEntries} setdate={setdate} setview={setview} view={view} />
                    <ReportTabe data={data} view={view} />
                    <Pagination style={{marginTop: '25px'}} showTotal={(total, range) => <TotalEntries range={range} total={total} />} pageSize={entries} current={currentPage} onChange={value => setcurrentPage(value)} total={total} />
                </ReportWrap>
            </Container>
        </Wrap>
    );
};

const TotalEntries = (props) => {

    const { total, range } = props;

    return (
        <React.Fragment>
            Showing {range[0]} to {range[1]} of {total} entries
        </React.Fragment>
    )
}

export default Report;
