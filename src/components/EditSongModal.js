import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        // const { listKeyPair, deleteListCallback, hideDeleteListModalCallback } = this.props;
        // let name = "";
        // if (listKeyPair) {
        //     name = listKeyPair.name;
        // }
        const {editSongDataCallback, hideEditSongModalCallback, editingSongData} = this.props;
        const {currentSongProps: song, index} = editingSongData ?? {};
        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center" id="edit-modal-inputs">
                            <div id="edit-song-title-text-div">Title: </div>
                            <input type="text" id="edit-song-title-text" className="modal-textfield" defaultValue={song?.title ?? ""} />
                            <div id="edit-song-artist-text-div">Artist: </div>
                            <input type="text" id="edit-song-artist-text" className="modal-textfield" defaultValue={song?.artist ?? ""} />
                            <div id="edit-song-youTubeId-text-div">You Tube Id: </div>
                            <input type="text" id="edit-song-youTubeId-text" className="modal-textfield" defaultValue={song?.youTubeId ?? ""} />
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={editSongDataCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                onClick={hideEditSongModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}