
import logo from "../../assets/logo.jpg"

function CustomFooter() {
    const style = {
        display: "flex",
        flexDirection: "column",
        alignContent: "start",
        margin: "20px",
        justifyContent: "start"
    }
    return (
        <div style={{
            height: "200h",
            width: "100vw",
            backgroundColor: "#87ceeb",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "start",
            flexDirection: "row"
        }}>

            <div style={style}>
                <label style={{ fontSize: "40px",}}>Our Office</label>
                <div style={{
                    borderBottom:"1px solid black",
                    padding:"10px"
                }}/>
                <label style={{ fontSize: "20px", padding:"10px"}}>Sitio Kapasar Brgy. budlaan cebu city</label>
            </div>
            <div style={style}>
                <label style={{ fontSize: "40px",}}>Opening Hours</label>
                <div style={{
                    borderBottom:"1px solid black",
                    padding:"10px"
                }}/>
                <label style={{ fontSize: "20px", padding:"10px"}}>Monday - Friday</label>
                <label style={{ fontSize: "20px", padding:"10px"}}>8:00 AM - 5:00 PM</label>
            </div>
            <div style={style}>
                <label style={{ fontSize: "40px", }}>Contact Us</label>
                <div style={{
                    borderBottom:"1px solid black",
                    padding:"10px"
                }}/>
                <label style={{ fontSize: "20px", padding:"10px"}}>Email: roschenterprises@gmail.com</label>
                <label style={{ fontSize: "20px", padding:"10px"}}>Landline: (032) 236-6951</label>
            </div>
        </div>
    )
}

export default CustomFooter;