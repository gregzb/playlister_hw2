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
    constructor(initApp, editIndex, oldSongData, newSongData) {
        super();
        this.app = initApp;
        this.editIndex = editIndex;
        this.oldSongData = oldSongData;
        this.newSongData = newSongData;
    }

    doTransaction() {
        this.app.editSongData(this.editIndex, this.newSongData);
    }
    
    undoTransaction() {
        this.app.editSongData(this.editIndex, this.oldSongData);
    }
}