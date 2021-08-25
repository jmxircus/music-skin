import * as React from 'react';
import { globalStore } from 'use-xircus';

const nftItem = {
  name: 'CryptoCyberPunk #777',
  description: 'Avatar for CyberPunk Data',
  creator: '0x2aA971AB5d5113CA885B5495d22b0987311cD614',
  collection: '0xe0d4c72f2a362ba9b71f7167590db4ac8d5ad6dc',
  nftId: 777,
  listing: 1,
  price: '0.1',
  acceptToken: 'BNB',
  contentType: 'image',
  contentExt: '.png',
  url: 'Qmegm1rswYkTTsSaJ5gy3KAwAevY8EGQodRjZXWKGVjSLi',
  publicUrl: 'Qmegm1rswYkTTsSaJ5gy3KAwAevY8EGQodRjZXWKGVjSLi'
}

const nftItems = Array.from({ length: 12 }, (value, key) => nftItem)

const actions = {
  addItems: (store) => {
    console.log("STORE", store.state, store.actions)
    store.setState({ items: [...store.state.items, ...nftItems] })
  }
}

const initialState = {
  items: nftItems
}

const useGlobal = globalStore(React, initialState, actions)

export default useGlobal;
