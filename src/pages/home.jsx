
import { useNavigate } from "react-router-dom";
import "../css/home.css"
function Home() {
    const navigate = useNavigate();
    return (
        <div className="hom">
            <div className="hom-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officia nostrum incidunt dolor consectetur ratione quia aperiam tempora et tenetur ipsa facere, tempore cum adipisci blanditiis. Facere dolorum officiis sunt explicabo quidem nesciunt laboriosam recusandae, minima quos fugit ad amet sint suscipit temporibus nobis incidunt sed numquam, non omnis et quaerat aspernatur ducimus! Minima repellendus impedit fugiat magni eum ea blanditiis consequatur asperiores esse adipisci id aspernatur necessitatibus fugit aliquam voluptates delectus, tenetur eligendi incidunt est! Pariatur commodi eos temporibus voluptate, quo placeat maxime deleniti est dolore eveniet iste provident officiis praesentium vitae rem nihil similique, odio molestiae mollitia ipsum quas quasi magnam hic expedita! Repudiandae suscipit, dicta distinctio dolorem eos sapiente adipisci. Facere quo hic cum totam eligendi quisquam quidem obcaecati corrupti, quod ullam animi, cumque natus minima necessitatibus? Blanditiis, officiis ratione modi natus autem aliquid corrupti quaerat minus voluptatibus magnam veritatis, voluptatum quisquam eaque rerum accusamus. Iste aliquam blanditiis ipsa sint rerum accusamus ex iure recusandae, facere cum magnam delectus architecto unde atque. Nobis nulla provident explicabo facere veritatis nam enim minus voluptate nesciunt, perspiciatis aliquam totam hic repudiandae, commodi sed molestias. Quae magni id similique quidem esse porro assumenda consequatur quod! Vero ipsum nam commodi quas quis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat quas illum ea esse commodi in neque, aperiam consequatur atque incidunt error accusamus ducimus magni sunt! Repellendus voluptates commodi quo pariatur at.
            </div>
            <div className="home-register">
                <button onClick={() => navigate("/regis")}>Register</button>
                <button onClick={() => navigate("/login")}>Login </button>
            </div>
        </div>

    );

}

export default Home