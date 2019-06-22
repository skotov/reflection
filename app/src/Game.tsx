import React from 'react';
import Map from './Map';
import GameStore from './GameStore';

interface GameProps {

}

export default class Game extends React.Component<GameProps> {
    private store: GameStore = new GameStore();
    render(): JSX.Element {
        return (
            <div>
                <Map height={3} width={3} playerLocation={this.store.getPlayerPosition()} />
                <div><input type="button" onClick={() => this.store.step("N")} value={"N"}/></div>
                <div>
                    <input type="button" onClick={() => this.store.step("W")} value={"W"} />
                    <input type="button" onClick={() => this.store.step("S")} value={"S"} />
                    <input type="button" onClick={() => this.store.step("E")} value={"E"}/>
                </div>
            </div>
        );
    }

};
