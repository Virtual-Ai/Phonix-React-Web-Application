import React, {Component} from 'react';

class Dragee extends Component {

    render() {
        return (
            <div className='panel' id={this.props.index}>
                <div className="listitem">
                    {this.props.capital.name}
                </div>
            </div>
        )
    }
}

export default Dragee;