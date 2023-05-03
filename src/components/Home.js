import Navbar from './Navbar';

const HomeContent = () => (
  <div>
    <h2>Welcome to our Page!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam iusto recusandae,
      ratione iste eaque voluptate culpa, dolorum eveniet tempore sunt praesentium!
      Perferendis, cumque dolorum. Ea architecto consequatur recusandae quam
      dolorum eveniet tempore sunt praesentium! Perferendis, cumque dolorum.
      Ea architecto consequatur recusandae quam?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aperiam iusto
      recusandae, ratione iste eaque voluptate culpa, dolorum eveniet tempore
      sunt praesentium! Perferendis, cumque dolorum. Ea architecto consequatur
      recusandae quam dolorum eveniet tempore sunt praesentium!
      Perferendis, cumque dolorum. Ea architecto consequatur recusandae quam?
    </p>
  </div>
);

const Home = () => (
  <>
    <Navbar />
    <HomeContent />

  </>

);

export default Home;
