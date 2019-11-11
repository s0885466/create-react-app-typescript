import React, {Component} from 'react';
import Popover from "../components/Popover/Popover";

class Module3 extends Component {
    render() {
        const buttonPopover = (<button>Click to toggle popover</button>);
        const content = (
            <ul>
                <li>first element</li>
                <li>second element</li>
                <li>third element</li>
            </ul>);
        return (
            <div>
                <Popover
                    buttonPopover={buttonPopover}
                    content={content}
                />
            </div>
        );
    }
}

export default Module3;