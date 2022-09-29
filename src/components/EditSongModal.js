import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        const {editSongDataCallback, hideEditSongModalCallback, editingSongData, handleFieldChange} = this.props;
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
                        <div className="modal-center" id="edit-modal-inputs" key={index}>
                            <div id="edit-song-title-text-div">Title: </div>
                            <input type="text" className="modal-textfield" value={song?.title ?? ""} onChange={handleFieldChange("title")} />
                            <div id="edit-song-artist-text-div">Artist: </div>
                            <input type="text" className="modal-textfield" value={song?.artist ?? ""} onChange={handleFieldChange("artist")} />
                            <div id="edit-song-youTubeId-text-div">You Tube Id: </div>
                            <input type="text" className="modal-textfield" value={song?.youTubeId ?? ""} onChange={handleFieldChange("youTubeId")} />
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                onClick={() => {editSongDataCallback(index, {...song}); hideEditSongModalCallback();}}
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