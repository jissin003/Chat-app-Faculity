import React from 'react'
import "./Main.css"

function Main() {
  return (
    <div className="app">
        <div className=" screen joinscreen">
            <div className="form">
                <h1>JOIN ROOM</h1>
                <div className="forminput">
                    <label>Username</label>
                    <input type="text" id="username" />
                </div>
                
                <div className="forminput">
                    <button id="joinuser">Join</button>
                </div>
            </div>

        </div>

        <div className="screen chatscreen active">
            <div className="header">
                <div className="logo">Chatroom</div>
                <button id="exitchat">Exit</button>
            </div>
            <div className="messages">
                <div className="message mymessage">
                    <div>
                        <div className="name">You</div>
                        <div className="text">Hi</div>
                    </div>
                </div>
                <div className="update">
                    Abc joined the conversation
                </div>
                <div className="message othermessage">
                    <div>
                        <div className="name">Abc</div>
                        <div className="text">Hi</div>
                    </div>
                </div>
            </div>
            <div className="typebox">
            <input type="text " id="messageinput" />
            <button id="sendmessage">Send</button>
        </div>
        </div>

    </div>
  )
}

export default Main