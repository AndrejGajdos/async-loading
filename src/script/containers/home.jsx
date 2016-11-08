import React, {Component} from 'react';
import NavBar from '../components/navigation';

export default class Home extends React.Component {
    render() {

        return (
            <div><NavBar/>
              <div>Home container</div>
            </div>
        );

    }
}
