import ChatBox from "@/components/ChatBox";

function Chat() {
    return (
        <div>
            <h1 style={title}>Chat With Link!</h1>
            <img src=""></img>
            <ChatBox></ChatBox>
        </div>
    )
}

const title: React.CSSProperties = {
    color: "#8A77D9",
    textAlign: "center"    

}

export default Chat