import jsTPS_Transaction from "../common/jsTPS.js"
/**
 * MoveSong_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, index, songData) {
        super();
        this.app = initApp;
        this.index = index;
        this.songData = songData;
    }

    doTransaction() {
        this.app.deleteSongAtIndex(this.index);
    }
    
    undoTransaction() {
        this.app.addSongAtIndex(this.index, this.songData);
    }
}