
import logo from "../../assets/logo.jpg"
// import banner from "../../assets/banner.jpg"
import "../landingPage/landingPageStyle.css";
import NavigationBar from "../navigationBar/navigationBar";
import SnapImage from "./snapImages";
function LandingPage() {

    return (
        <>

            <div style={{
                backgroundColor: "#e3f2fd",
                height: "100%",
                width: "100vw",
                justifyContent: 'start',
                alignItems: 'start',
                maxWidth: "100%",
            }}>                    <SnapImage />

                <div style={{
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    width: "100vw",
                }}>
                    <h1 style={{ fontSize: "70px" }}>Welcome</h1>

                </div>
                <div style={{
                    display: "flex",
                    marginLeft: "20vh",
                    marginRight: "20vh",
                    maxWidth:"100%",
                    flexDirection: "column"
                }}>
                    <h2>
                        Through the years, ROSCH ENTERPRISES has been contracted to work with small scale projects such as Creation of Warehouses and Small Back up Genset and Fuel Storage Houses and Large Scale projects such as Multiple Units of Two Story Residential Buildings, and One Story Buildings with Three Classrooms. We have also been contracted to perform Rectification works on multiple housing units that were started out by other competitors and we were able to perform everything with no problems and within the specified time frame. We beat deadlines and always create the reports needed for the completion of the projects.
                    </h2>
                    <h2>
                        Over the years, ROSCH has grown from its humble origins to a well-respected contracto rwith over 90 vehicles, new electrical and construction equipment and 138 active and highly- skilled personnel under its management to perform both electrical and construction works. We have completed Construction works for more than 30 schools, more than 150 houses, over 2 gas stations, etc.

                    </h2>
                    <h2>

                        Our ROSCH employees, many of whom have been part of the ROSCH family for over 24 years, are the reason we have been so successful, and have been able to keep our clients happy all these years. We are truly blessed with the most talented and loyal group of employees; and are grateful for them each and every day.
                    </h2>
                    <h2>
                        Today, ROSCH ENTERPRISES holds a track record of quality, cost effective service and can proudly and effectively compete with its contemporaries in the service contracting business.
                    </h2>

                </div>
            </div>
        </>
    );
}

export default LandingPage;