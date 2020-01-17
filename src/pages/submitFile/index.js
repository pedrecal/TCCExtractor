import React from 'react';
import { withRouter } from 'react-router';
import Demo from '../../components/submitFileForm';
import './styles.css';

const submitFile = () => <Demo />;

export default withRouter(submitFile);
