import React from 'react';

interface MapProps{
    height: number;
    width: number;
    playerLocation: number[];
}
interface MapState {
    xCoord: number;
    yCoord: number;
}

export default class Map extends React.Component<MapProps> {
    constructor(props: MapProps) {
        super(props);
        this.state = {
            xCoord: this.props.playerLocation[0],
            yCoord: this.props.playerLocation[1]
        };
    }
    render(): JSX.Element {
        let rows: JSX.Element[] = [];
        for (let i: number = 0; i < this.props.height; i++) {
            let thisRow: string = "";
            for (let j: number = 0; j < this.props.width; j++) {
                if (i === (this.state as MapState).xCoord && j === (this.state as MapState).yCoord) {
                    thisRow += "P ";
                } else {
                    thisRow += "X ";
                }
            }
            rows = rows.concat(<div>{thisRow}</div>);
        }
        return <div>{rows}</div>;
    }
};
