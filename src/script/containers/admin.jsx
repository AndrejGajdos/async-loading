import React, {Component} from 'react';
import NavBar from '../components/navigation';

export default class Admin extends React.Component {
    render() {
        return (
            <div><NavBar/>
              <div>Admin container</div>
            </div>
        );
    }
}
