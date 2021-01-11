import React, { Component, ReactComponentElement } from 'react';
import './TextPlay.css';
type TextState = {
    text: Map<string, number>
    textState: number;
    defaultState: number;
}
export class TextPlay extends Component<{}, TextState> {
    tick() {
        const textMap = new Map();
        textMap.set("Lorem Ipsum is simply dummy text of the", 1);
        textMap.set("printing and typesetting industry. Lorem Ipsum", 2);
        textMap.set("has been the industry's standard dummy ", 3);
        textMap.set("text ever since the 1500s, when an unknown ", 4);
        textMap.set("printer took a galley of type and scrambled ", 1);
        textMap.set("it to make a type specimen book. It has survived", 1);
        textMap.set("not only five centuries, but also the leap into ", 3);
        textMap.set("electronic typesetting, remaining essentially unchanged. ", 1);
        textMap.set("It was popularised in the 1960s with the release of ", 3);
        textMap.set("Letraset sheets containing Lorem Ipsum passages, and more ", 2);
        textMap.set("recently with desktop publishing software like Aldus PageMaker ", 1);
        textMap.set("including versions of Lorem Ipsum.", 1);
        this.setState({ 
            defaultState: 0,
            textState: 0,
            text: textMap
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
        for(const [key, value] of Object.entries(this.state.text)) {
            values.push(<div onMouseOver={() => this.setState({ textState: this.state.text[key] })} onMouseOut={() => this.setState({ textState: this.state.defaultState })}>
            {
              this.state.textState === this.state.text[key] ? (
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