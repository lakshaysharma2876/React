import React from "React";
import ReactDOM from "react-dom/client";

const HeaderComponent = () => {
    return (
        <div className="header">
            <a href="/">
            <img id="food_icon_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoZjD7O31QdLKhNwoD57fdVsxRxgDL2rG3g&s" alt ="Food Villa icon"/>
            </a>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}

const BurgerKing = {
    "name" : "Burger King",
    "image" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPTSkdia6WUjUWT5QGqc4ZnH-YE3Oj_Y1-PA&s",
    "cuisines" : ["Burger", "American"],
    "Reviews" : "4.2"
}

const RestaurantCards = () => {
    return (
        <div className="cards">
            <img src={BurgerKing.image}/>
            <h3>{BurgerKing.name}</h3>
            <h3>{BurgerKing.cuisines.join(", ")}</h3>
            <h3>{BurgerKing.Reviews} stars</h3>
        </div>
    );
}

const BodyComponent = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCards/>
            <RestaurantCards/>
            <RestaurantCards/>
        </div>
    );
}

const FooterComponent = () => {
    return (
        <div className="footer">
            Footer
        </div>
    );
}

const FinalLayout = () => {
    return (
        <>
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FinalLayout/>);