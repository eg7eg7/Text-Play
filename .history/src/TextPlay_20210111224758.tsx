import React, { Component } from 'react';
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
        let keys = Array.from(this.state.text.keys());
        let value: number;
        for(var string of keys) {
            value = this.state.text.get(string);
            console.log(string);
            values.push(<div onMouseOver={() => this.setState({ textState: value })} onMouseOut={
                () => console.log('out')
                }>
            {
              this.state.textState === value ? (
                <p className="bold">{string}</p>
              ) : (
                <p className="hide">{string}</p>
              )
            }
          </div>);
        };
        console.log(values);
        return values;
    }
    render() {
        console.log(`render`);
        // return this.createTextDivs();
        return <div className="TextPlay">{this.createTextDivs()}</div>
      }
}