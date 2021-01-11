import React, { Component } from 'react';

type TextState = {
    text: string
}
export class TextPlay extends Component<{}, TextState> {
    tick() {
        this.setState({ text: "abc adada"});
    }
}