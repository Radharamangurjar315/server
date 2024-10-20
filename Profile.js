import React from "react"

const Profile = () =>{
     
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-evenly",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style ={{width:"160px", height:"160px", borderRadius:"80px"}}
                   src="https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D"alt=""/>
                </div>
                <div>
                    <h4>Raman Gurjar</h4>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>40 Posts</h6>
                        <h6>40 Followers</h6>
                        <h6>40 Following</h6>

                    </div>
                </div>
            </div>
            <div className="gallery">
                <img  className="item" src=" https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D" alt="" />
                <img  className="item" src=" https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D" alt=""/>
                <img  className="item" src=" https://images.unsplash.com/photo-1528892952291-009c663ce843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D" alt=""/>
            </div>
        </div>
    )
}

export default Profile