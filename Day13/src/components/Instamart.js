import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {

//   const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="section">
      <h3>{title}</h3>
      {!isVisible ? (
        <button
          className="show-button"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          Show
        </button>
      ) : (
        <button
          onClick={() => {
            setIsVisible(false);
          }}
        >
          Hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {

    // const [configSection, setConfigSection] = useState({
    //     showAbout : false,
    //     showTeam : false,
    //     showCareer : false
    // })

    const [visibleSection, setIsVisibleSection] = useState("About");

  return (
    <div className="instamart">
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Instamart Page
      </h2>
      <Section
        title="About"
        description="With the rise of internet orders, particularly in the food and grocery industries, in recent years Swiggy has started its latest initiative, Instamart, with the goal of delivering groceries and other necessities.
            Instamart is a chain of online convenience stores. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience stores.
            Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs."
        // isVisible={configSection.showAbout}
        // setIsVisible={() => setConfigSection({
        //     showAbout : true,
        //     showTeam : false,
        //     showCareer : false
        // })}
        isVisible={visibleSection === 'About'}
        setIsVisible={() => setIsVisibleSection('About')}
      ></Section>

      <Section
        title="Team"
        description="You can access Instamart in the Swiggy app by clicking on the Instamart tile on the home page of the Swiggy app.
            Instamart aims to fulfill the unmet grocery needs of its urban customer, at even the odd times of the day.
            These deliveries are made within less than an hour so that there is no waiting with Instamart.
            Now you can Download the Swiggy app and try Instamart now."
        // isVisible={configSection.showTeam}
        // setIsVisible={() => setConfigSection({
        //     showAbout : false,
        //     showTeam : true,
        //     showCareer : false
        // })}
        isVisible={visibleSection === 'Team'}
        setIsVisible={() => setIsVisibleSection('Team')}
      ></Section>

<Section
        title="Careers"
        description="These deliveries are made within less than an hour so that there is no waiting with Instamart.
            Now you can Download the Swiggy app and try Instamart now. Instant meals, snacks, fruits and vegetables, ice creams, and other things are available through these virtual convenience stores.
            Swiggy provides these things through its partner “dark stores,” which are exclusively available online and its hubs."
        // isVisible={configSection.showCareer}
        // setIsVisible={() => setConfigSection({
        //     showAbout : false,
        //     showTeam : false,
        //     showCareer : true
        // })}
        isVisible={visibleSection === 'Careers'}
        setIsVisible={() => setIsVisibleSection('Careers')}
      ></Section>
    </div>
  );
};

export default Instamart;
