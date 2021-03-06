import React, { Component, ReactComponentElement } from 'react';
import './TextPlay.css';
type TextState = {
    text: object
    textState: number;
    defaultState: number;
}
export class TextPlay extends Component<{}, TextState> {
    tick() {
        this.setState({ 
            defaultState: 0,
            textState: 0,
            text: { "Lorem Ipsum is simply dummy text of the" : 1,
            "printing and typesetting industry. Lorem Ipsum": 2,
            "has been the industry's standard dummy ": 3,
            "text ever since the 1500s, when an unknown ": 4,
            "printer took a galley of type and scrambled ": 5,
            "it to make a type specimen book. It has survived": 1, 
            "not only five centuries, but also the leap into ": 2,
            "electronic typesetting, remaining essentially unchanged. ":3,
            "It was popularised in the 1960s with the release of ": 1,
            "Letraset sheets containing Lorem Ipsum passages, and more ": 2,
            "recently with desktop publishing software like Aldus PageMaker ": 3,
            "including versions of Lorem Ipsum.": 1 
        }
        });
    }

    componentWillMount() {
        this.tick();
    }

    componentDidMount() {
        this.tick();
    }

    createTextDivs(): React.ReactNode  {
        let values = [];
        for(const key in this.state.text) {
            values.push(<div onMouseOver={() => this.setState({ textState: this.state.text[key] })} onMouseOut={() => this.setState({ textState: this.state.defaultState })}>
            {
              this.state.bool ? (
                <span>[OPTION1] show after onMouseEnter</span>
              ) : (
                <div>[OPTION2] show after onMouseLeave</div>
              )
            }
          </div>);
        };
        return values;
    }
    render() {
        return <div className="TextPlay">{this.createTextDivs()}</div>
      }
}