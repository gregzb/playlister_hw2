import React, { Component } from 'react';

export default class EditSongModal extends Component {
    render() {
        // const { listKeyPair, deleteListCallback, hideDeleteListModalCallback } = this.props;
        // let name = "";
        // if (listKeyPair) {
        //     name = listKeyPair.name;
        // }
        const {editSongDataCallback} = this.props;
        return (
            <div 
                className="modal" 
                id="edit-song-modal" 
                data-animation="slideInOutLeft">
                    <div className="modal-root" id='verify-edit-song-root'>
                        <div className="modal-north">
                            Edit Song
                        </div>
                        <div className="modal-center">
                            <div className="modal-center-content">
                                {/* Are you sure you wish to permanently delete the {name} playlist? */}
                            </div>
                        </div>
                        <div className="modal-south">
                            <input type="button" 
                                id="edit-song-confirm-button" 
                                className="modal-button" 
                                // onClick={deleteListCallback}
                                value='Confirm' />
                            <input type="button" 
                                id="edit-song-cancel-button" 
                                className="modal-button" 
                                // onClick={hideDeleteListModalCallback}
                                value='Cancel' />
                        </div>
                    </div>
            </div>
        );
    }
}