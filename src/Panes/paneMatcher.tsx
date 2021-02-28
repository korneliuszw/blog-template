import Terminal, {TERMINAL_PANE_ID} from '../Terminal/Terminal'
import React from 'react';
const paneMatch = (id: string) : JSX.Element | undefined => {
  const idParts = id.split('-');
  const component = idParts[0];
  switch (component) {
    case TERMINAL_PANE_ID: {
      return <Terminal/>
    }
  }
  console.error('Could not match component for id: ' + id);
}
export default paneMatch;
