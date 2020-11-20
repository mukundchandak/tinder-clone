import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
               name="Mark"
               message="YO whats up!"
               timestamp="40 seconds ago"
               profilePic="https://selloutyoursoul.com/wp-content/uploads/2015/09/sarah.jpg"
            />
            <Chat 
               name="Sarah"
               message="YO whats up!"
               timestamp="4 minutes ago"
               profilePic="https://bloximages.newyork1.vip.townnews.com/kmov.com/content/tncms/assets/v3/editorial/b/53/b5341f65-c5fa-5ed0-ae66-a53de50be024/5e86131ece905.image.jpg?crop=720%2C720%2C280%2C0&resize=1200%2C1200&order=crop%2Cresize"
            />
            <Chat 
               name="Sandra"
               message="YO whats up!"
               timestamp="5 days ago"
               profilePic="https://www.refinery29.com/images/9640209.jpg"
            />
            <Chat 
               name="Natasha"
               message="YO whats up!"
               timestamp="1 week ago"
               profilePic="https://m.media-amazon.com/images/M/MV5BMDg2YTRhZjItYWZhYi00Mzk1LWE0NmQtNjdmNTg0MzcxMzExXkEyXkFqcGdeQXVyMTEwNjgxODYz._V1_.jpg"
            />
        </div>
    )
}

export default Chats
