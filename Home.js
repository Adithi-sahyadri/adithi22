import React from "react";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Food Delight</h1>
      <p>Your one-stop solution for delicious food!</p>
      <section>
        <h2>Featured Items</h2>
        <div className="featured-items">
          <div className="featured-item">Pizza</div>
          <div className="featured-item">Burger</div>
          <div className="featured-item">Desserts</div>
        </div>
      </section>
    </div>
  );
};

export default Home;