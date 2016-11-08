import React, {Component} from 'react';
import NavBar from '../components/navigation';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div><NavBar/>
              <div>Dashboard container</div>
            </div>
        );
    }
}
