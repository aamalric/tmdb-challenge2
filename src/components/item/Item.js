import {Lightning, Utils} from "wpe-lightning-sdk";

export default class Level extends Lightning.Component{
    static _template(){
        return {
          alpha: 0.5,
          scale: 1,
          transitions: {
            alpha: { duration: 0.5, timingFunction: 'linear' },
            scale: { duration: 0.5, timingFunction: 'linear' },
          },
          Image: {

          },
          Title: {
              y: 310, x: 20,
              text: {fontFace: "Magra", fontSize: 24, wordWrapWidth: 200}
          }
        }
    }
    
    _focus() {
      this.patch({smooth: { alpha: 1, scale: 1.1 } })
    }

    _unfocus() {
      this.patch({smooth: { alpha: 0.5, scale: 1 } })
    }

    set item(v){
      this.patch({
        Image: {
          src: `https://image.tmdb.org/t/p/w200/${v.poster_path}`,
        },
        Title: {
          text: {
            text: v.title
          }
        }
      })
    }
}