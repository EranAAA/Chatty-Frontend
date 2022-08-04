import React, { useState, useEffect } from 'react';

export const MessageBox = () => {

    return (
        <>
            <h1>Hello message box</h1>

            <button class="common-button">
                <span class="icon">😃</span>
            </button>
            <div class="text-input" id="message-box" placeholder="Type a message" contenteditable>
            </div>
            <button id="voice-button" class="common-button"><span class="icon">🎤</span>
            </button>
            <button id="submit-button" class="common-button"><span class="icon">➤</span>
            </button>
        </>
    )
}