import FormUpload from "@/components/FormUpload";

function Member() {
    return (
        <div>
            <h1 style={title}>For Family Members</h1>
            <h2 style={desc1}>Provide any information that may help your loved one recall important memories.</h2>
            <h3 style={desc2}>Please include as much context and detail as possible, including names and important timelines.</h3>
            <FormUpload />
        </div>
    )
}

const title: React.CSSProperties = {
    textAlign: 'center',
    color: "#8A77D9"
}

const desc1: React.CSSProperties = {
    justifyContent: "center",
    textAlign: "center",
    marginTop: "3.5%",
    marginBottom: ".5%"
}

const desc2: React.CSSProperties = {
    textAlign: "center",
    marginTop: "1%",
    marginBottom: "0%",
    color: "#8771BC" // slightly different purple

}


export default Member