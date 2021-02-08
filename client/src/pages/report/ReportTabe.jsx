import { Table } from 'antd';
import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const StyledTable = styled(Table)`
    .ant-pagination-total-text {
        margin-right: auto;
    }
`;

const ReportTabe = (props) => {

    const { data, view, page } = props;
    let columns;

    if (view === 'detailed') {
        columns = [
            {
                title: 'Date',
                key: 'Date',
                render: (record) => moment(record.date).format('YYYY/MM/DD'),
                sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Name',
                key: 'Name',
                dataIndex: 'name',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Email',
                key: 'Email',
                dataIndex: 'email',
                sorter: (a, b) => a.email.localeCompare(b.email),
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Phone',
                key: 'phone',
                render: (record) => (record.phone) ? record.phone : 'n/a',
                sorter: (a, b) => a.phone - b.phone,
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Status',
                key: 'Status',
                dataIndex: 'status',
                sorter: (a, b) => a.statusId - b.statusId,
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Training Audio No.',
                key: 'TrainingAudioNo',
                dataIndex: 'trainingAudioNumber',
                sorter: (a, b) => a.trainingAudioNumber - b.trainingAudioNumber,
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Training Days',
                key: 'TrainingDays',
                render: (record) => (record.trainingDays) ? record.trainingDays : 'n/a',
                sorter: (a, b) => a.trainingDays - b.trainingDays,
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Training Average Score',
                key: 'TrainingAvgScore',
                dataIndex: 'trainingAverageScore',
                sorter: (a, b) => a.trainingAverageScore - b.trainingAverageScore,
                defaultSortOrder: 'none',
                sortDirections: ['ascend', 'descend', 'ascend']
            }
        ];
    }

    if (view === 'summary') {
        columns = [
            {
                title: 'Date',
                key: 'Date',
                render: (record) => moment(record.date).format('YYYY/MM/DD'),
                sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Total Users',
                key: 'totalUsers',
                dataIndex: 'totalUsers',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Registration Incomplete',
                key: 'registrationIncomplete',
                dataIndex: 'registrationIncomplete',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'registered',
                key: 'registered',
                dataIndex: 'registered',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Test In Progress',
                key: 'testInProgress',
                dataIndex: 'testInProgress',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Test Completed / Review Remaining',
                key: 'testCompleted',
                dataIndex: 'testCompleted',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'ReDo',
                key: 'reDo',
                dataIndex: 'reDo',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Rejected',
                key: 'rejected',
                dataIndex: 'rejected',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'In Training Phase',
                key: 'inTrainingPhase',
                dataIndex: 'inTrainingPhase',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Training Completed',
                key: 'trainingCompleted',
                dataIndex: 'trainingCompleted',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Approved',
                key: 'approved',
                dataIndex: 'approved',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'NDA Signed',
                key: 'ndaSigned',
                dataIndex: 'ndaSigned',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'NDA Rejected',
                key: 'NDA Rejected',
                dataIndex: 'ndaRejected',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Working',
                key: 'working',
                dataIndex: 'working',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            },
            {
                title: 'Account Deleted',
                key: 'accountDeleted',
                dataIndex: 'accountDeleted',
                sorter: (a, b) => a - b,
                defaultSortOrder: 'ascend',
                sortDirections: ['ascend', 'descend', 'ascend']
            }
        ];
    }

    return <StyledTable rowKey='id' pagination={{ pageSize: page, showTotal: (total, range) => <Result total={total} range={range}/>, position: ['bottomRight'] }} columns={columns} dataSource={data && data} />
}

const Result = (props) => {

    const { total, range } = props;

    return (
        <React.Fragment>Showing {range[0]} to {range[1]} of {total} entries</React.Fragment>
    )
}

export default ReportTabe
