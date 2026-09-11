import Navbar from "./Navbar";

function Profile(){
    return(
        <div className = "profile">
            <Navbar />
            <main>
                <h1>Profile</h1>
                {/*Profile Picture*/}
                <section className = "profile_picture">
                   <label htmlFor = "profilePic">Upload Profile Picture: </label> /*used ai here */
                   < input type = "file" id = "profilePic" name = "profilePic" accept = "image/*"/>/*i didnt know there was a "file" input type */
                </section>
                {/*Bio*/}
                <section className = "bio">
                    <label htmlFor = "bio">Bio: </label>
                    <textarea id = "bio" name = "bio" rows = "5" placeholder = "About yourself: "></textarea>/*lightwork no reaction */\
                </section>
                {/*Skills */}
                <section className = "skills">
                    <label htmlFor = "skills">Skills: </label>
                    <input type = "text" id = "skills" name = "skills" placeholder = "e.g. Python, JS, Java"></input>
                </section>
                {/*Interests */}
                <section className = "interests">
                    <label htmlFor = "interests">Skills: </label>
                    <input type = "text" id = "interests" name = "interests" placeholder = "e.g. Full-Stack Dev, Data Analysis"></input>
                </section>
                {/*Pportfolio */}/*This is the nice part */
                <section className = "portfolio">
                    <lablel htmlFor = "portfolio">Portfolio</lablel>
                    <input type = "file" id = "portfolio" name = "portforlio" multiple accept = ".pdf, image/*"></input>/*The multiple accept was genuinely AI */
                </section>
                {/*Contact Details */}/*Almost there! */
                <section className = "cokntact">
                    <label htmlFor = "email">Email: </label>
                    <input type = "email" id = "email" name  = "email" placeholder = "johndoe23@gmail.com"></input>

                    <label htmlFor = "number"></label>
                    <input type = "tel" id = "number" name = "number" placeholde = "+27 12 345 6789"></input>
                </section>

                {/*Save */}
                <button type = "submit">Save Profile</button>
            </main>
        </div>
    )
}
export default Profile;