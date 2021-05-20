import logo from "./pics/logo2.svg";
import mockup from "./pics/illustration-mockups.svg";
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src ={logo}alt ="logo"/>
      </header>
      <main>
        <img src ={mockup}alt = "mockup"/>
     
        <div className = "content">
          <h1>Build The Community 
          Your Fans Will Love</h1>
          <p>Huddle re-imagines the way we build communities. You have a voice, but so
                does your audience. Create connections with your users as you engage in genuine discussion.
          </p>
            <button>Register</button>

        </div>
      </main>

      <footer class="links">
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class ="fab fa-facebook-f"></i>
      </footer>
      
    </>
  );
}

export default App;
