  const catagories = [
    {
      name: "Frontend Templates",
      desc: "HTML, React, Landing Page UI",
      image:
        "https://img.magnific.com/premium-vector/frontend-development-web-banner-concept-website-interface-improvement-developer-looking-graph-illustration_277904-2906.jpg",
    },
    {
      name: "Dashboard & Admin Templates",
      desc: "Admin panel, SaaS dashboard UI",
      image:
        "https://img.magnific.com/premium-vector/neumorphic-dashboard-ui-kit-admin-panel-template-with-infographic-elements-hud-diagram-info-graphics-website-dashboard-ui-ux-design-web-page-neumorphism-style_9209-3318.jpg",
    },
    {
      name: "Web Development eBooks",
      desc: "React, JavaScript, Full Stack",
      image:
        "https://img.magnific.com/free-photo/open-pages-book-e-book-online-learning-graphic-concept_53876-127665.jpg",
    },
    {
      name: "Freelancing & Earning Guides",
      desc: "Upwork, Fiverr, online income",
      image:
        "https://img.magnific.com/premium-photo/online-donation-platform-offer-modish-money-sending-system_31965-519030.jpg",
    },
  ];

const Categories = () => {
  return (
    <>
      <div className="catagories">
        <h4>Categories</h4>
        <div className="row my-5">
          {catagories.map((catagory, index) => (
            <div className="col-md-3" key={index}>
              <div className="catagoryCard">
                <img
                  src={catagory.image}
                  alt={catagory.name}
                  className="img-fluid"
                />
                <h3>{catagory.name}</h3>
                <p>{ catagory.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories