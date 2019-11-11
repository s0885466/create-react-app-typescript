import React, {Component, ReactNode, createRef} from 'react';
import cc from 'classnames';

import './Popover.css';

type Props = {
  buttonPopover: ReactNode,
  content: ReactNode
}

type State = {
  hide: boolean,
  heightContent?: number,
  style: any
}

class Popover extends Component<Props, State> {
  state = {
    hide: true,
    heightContent: 0,
    style: undefined
  };

  popoverAllRef = createRef<HTMLDivElement>();
  popoverButtonRef = createRef<HTMLDivElement>();
  popoverContentRef = createRef<HTMLDivElement>();

  windowClick = (e: any) => {
    if (this.popoverAllRef.current) {
      if (!this.popoverAllRef.current.contains(e.target)) {
        this.setState({hide: true})
      }
    }
  };

  componentDidMount(): void {
    window.addEventListener('scroll', this.getStyle);
    window.addEventListener('click', this.windowClick);

    if (this.popoverContentRef.current) {
      const heightContent = this.popoverContentRef.current.getBoundingClientRect().height;
      this.setState({heightContent: Math.ceil(heightContent)});
    }
  };

  componentWillUnmount(): void {
    window.removeEventListener('scroll', this.getStyle);
    window.removeEventListener('click', this.windowClick);
  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    if ((!this.state.style) && (nextState.style)) return true;
    else if ((this.state.style) && (!nextState.style)) return true;
    else if ((this.state.hide) && (!nextState.hide)) return true;
    else if ((!this.state.hide) && (nextState.hide)) return true;
    return false;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    console.log('componentDidUpdate');
  }

  getStyle = () => {
    const {clientHeight} = document.documentElement;
    if ((this.popoverButtonRef.current)) {
      const {bottom} = this.popoverButtonRef.current.getBoundingClientRect();
      const heightBottomContent = bottom + this.state.heightContent;
      const style = (clientHeight > heightBottomContent) ? undefined : {top: -this.state.heightContent + 'px'};
      this.setState({style});
    }
  };

  handleClick = () => {
    this.setState(({hide}) => ({hide: !hide}));
  };

  render() {
    const {hide} = this.state;
    return (
      <div
        ref={this.popoverAllRef}
        className="popover">
        <div className="inline-block"
             onClick={this.handleClick}
             ref={this.popoverButtonRef}
        >
          {this.props.buttonPopover}
        </div>
        <div
          ref={this.popoverContentRef}
          style={this.state.style}
          className={cc('popover-content', hide && 'hide')}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Popover;