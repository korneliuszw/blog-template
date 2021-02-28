
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../root.reducer';
import { PanesState } from './panes.type';
import paneMatch from './paneMatcher'
const Panes = () : JSX.Element => {
    const panes : PanesState = useSelector((state: RootState) => state.pane)
    console.log(panes)
    return (
        <div id="panes">
            {panes.map(pane => {
                const element = paneMatch(pane.id);
                return (
                    <div id={pane.id}>
                        {element}
                    </div>
                )
            })}
        </div>
    )
}
export default Panes;
