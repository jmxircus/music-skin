import React from 'react'
import { globalStore, appState, appActions } from 'use-xircus'
const useGlobal = globalStore(React, appState, appActions)
export default useGlobal;
