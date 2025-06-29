import { useState } from "react";

const Section = (props) => {
  return (
    <div className="flex flex-wrap justify-between border-1 p-2 m-2 shadow-xs rounded-xl">
      <h1 className="text-3xl font-bold">{props.name}</h1>

      {props.isVisible == true ? (
        <button
          className="p-1 cursor-pointer"
          onClick={() => props.setIsVisible(false)}
        >
          ⬆️
        </button>
      ) : (
        <button className="p-1 cursor-pointer" onClick={() => props.setIsVisible(true)}>
          🔽
        </button>
      )}

      {props.isVisible && <p className="py-1 my-2 font-semibold">{props.description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <Section
        name={"About Instamart"}
        description={
          "Instamart is an online grocery delivery service offered by Swiggy, designed to provide customers with instant access to everyday essentials. It delivers a wide range of products including fruits, vegetables, snacks, beverages, personal care items, and household supplies, usually within 10 to 30 minutes. Available through the Swiggy app, Instamart combines convenience with speed, making it a popular choice for urban users looking for quick and hassle-free shopping from the comfort of their homes."
        }
        setIsVisible = {() => {
          setVisibleSection(visibleSection == "About Instamart" ? "" : "About Instamart");
        }}
        isVisible = {visibleSection === "About Instamart"}
      />
      <Section
        name={"Offers"}
        description={
          "Instamart offers exciting deals and discounts on a wide range of grocery and daily essentials, making shopping more affordable and convenient. From buy-one-get-one-free offers to flat discounts on top brands, users can enjoy great savings every day. Limited-time flash sales and exclusive coupon codes also help customers get more value for their money, all delivered to their doorstep in minutes"
        }
        setIsVisible = {() => setVisibleSection(visibleSection == "Offers" ? "" : "Offers")}
        isVisible = {visibleSection === "Offers"}
      />
      <Section
        name={"Team Members"}
        description={
          "The team members at Instamart work collaboratively to ensure fast, efficient, and reliable grocery delivery services. From operations and warehouse staff to delivery partners and tech engineers, each member plays a crucial role. The operations team ensures smooth inventory and logistics, while the delivery personnel guarantee timely deliveries. Behind the scenes, product managers, developers, and customer support specialists work to enhance the user experience and resolve issues promptly. Together, the Instamart team is dedicated to making grocery shopping seamless and convenient for customers"
        }
        setIsVisible = {() => setVisibleSection(visibleSection == "Team Members" ? "" : "Team Members")}
        isVisible = {visibleSection === "Team Members"}
      />
    </div>
  );
};

export default Instamart;
