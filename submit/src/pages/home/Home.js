import React from 'react';
import { Redirect } from 'react-router'
import { LOGIN } from '../../utils/routes';

const Home = () => (<Redirect to={LOGIN} /> );

export default Home;
