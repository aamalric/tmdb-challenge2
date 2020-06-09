import {Lightning} from "wpe-lightning-sdk";

import Item from "../item/Item"

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'Magra'}
            },
            Movies: {
              transitions: {
                x: { duration: 0.5, timingFunction: 'linear' },
              },
              y: 75,
            }
        }
    }

    _init() {
        this._index = 0;
    }

    _handleLeft() {
      if (this._index > 0) {
        this.setIndex(this._index-1)
      }
    }

    _handleRight() {
      if (this._index < this.items.length - 1) {
        this.setIndex(this._index+1)
      }
    }

    setIndex(index) {
      this._index = index
      this.tag('Movies').setSmooth('x', this._index * -220)
    }

    set label(v) {
        this.tag('Label').patch({
          text: {
            text: v,
          }
        })
    }

    set movies(v) {
      // we add an array of object with type: Item
      this.tag("Movies").children = v.map((el, idx)=>{
        const movieItem = this.stage.c({
          x: idx * 220,
          w: 200,
          type: Item,
        })
        movieItem.item = el
        return movieItem
      });
    }

    get items() {
      return this.tag("Movies").children;
    }

    get activeItem() {
        return this.items[this._index]
    }

    _getFocused() {
        return this.activeItem
    }
}
