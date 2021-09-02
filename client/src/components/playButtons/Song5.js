import IconButton from '@material-ui/core/IconButton';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import song from '../../music/ImStillAlive(originalVersion).mp3'
// import song2 from '../../music/What_Can_I_Become.mp3'

import React, { Component } from "react";


class Song5 extends Component {
    // Create state
    state = {

        // Get audio file in a variable
        audio: new Audio(song),

        // Set initial state of song
        isPlaying: false,
    };

    // Main function to handle both play and pause operations
    playPause = () => {

        // Get state of song
        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            // Pause the song if it is playing
            this.state.audio.pause();
        } else {

            // Play the song if it is paused
            this.state.audio.play();
        }

        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    };



    render() {
        
        return (
            <div   style={{textAlign: "center", justifyContent: "center"}}>
                {/* Show state of song on website */}
                <p>
                    {this.state.isPlaying ?
                        "Playing" :
                        "Paused"}
                </p>
                <IconButton aria-label="previous">
                    <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrowIcon onClick={this.playPause} />
                </IconButton>
                <IconButton  aria-label="next">
                    <SkipNextIcon />
                </IconButton>
            </div>
        );
    }
}

export default Song5;