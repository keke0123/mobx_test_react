import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';

@inject('counter')
@observer
class Testapp extends Component{
    render(){
        const {counter} = this.props;
        console.log(counter);
        return (
            <div>
                <h3>test app</h3>
            </div>
        )
    }
}

export default Testapp;