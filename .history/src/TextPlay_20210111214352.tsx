import React, { Component } from 'react';

type TextState = {
    text: string
}
export class TextPlay extends Component<{}, TextState> {
    tick() {
        this.setState({ text: "abc adada"});
    }

    componentWillUnmount() {
        this.tick();
    }

    componentDidMount() {
        this.tick();
    }
    render() {
        return <p>The current time is {this.state.text}</p>
      }
}