import {Lightning, Utils} from 'wpe-lightning-sdk';
import {List} from "../components"

export default class Main extends Lightning.Component{
    static _template() {
        return {
          
            //scale:0.5,
            Lists: {
              rect: true,
              color: 0xffff0000,
                x: 100, y: 560, zIndex: 3
            },
            Logo: {
              src: Utils.asset("images/logo.png"),
              mount: .5, x: 300, y: 140,
            }
        };
    }

    _init() {
        this._index = 0; 
    }

    _focus() {
    }

   
     set movies(data) {
       const { results } = data
       this.tag('Lists').patch({
         List: {
           type: List,
         }
       })
       this.tag('List').movies = results
       
     }

    _unfocus() {
        // @todo 
        // Nothing specified in above todo :/
    }

    _getFocused() {
        return this.tag('List')._getFocused()
    }

}