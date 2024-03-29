import ecommerce_app from "../../assets/portfolio/ecommerce_app.png";
import todolist_app from "../../assets/portfolio/todolist_app.png";
import weather_app from "../../assets/portfolio/weather_app.png";
import tictactoe_app from "../../assets/portfolio/tictactoe_app.png";
import currency_app from "../../assets/portfolio/currency_app.png";
import password_app from "../../assets/portfolio/password_app.png";
import drumkit_app from "../../assets/portfolio/drumkit_app.png";
import jsquiz_app from "../../assets/portfolio/jsquiz_app.png";
import guessmynumber_app from "../../assets/portfolio/guessmynumber_app.png";
import jscalculator_app from "../../assets/portfolio/jscalculator_app.png";
import texttospeech_app from "../../assets/portfolio/texttospeech_app.png";
import mernestate_app from "../../assets/portfolio/mernestate_app.png";
import infusion_app from "../../assets/portfolio/infusion_app.png";

const PortfolioData = [
  {
    id: 12,
    category: "MERN",
    title: "Real Estate Website",
    image: mernestate_app,
    link: "https://mern-estate-1f43.onrender.com/",
    features:
      "Real Estate website made using MERN stack. Implemented CRUD features, Google OAuth, Firebase storage, responsive design, etc.",
  },
  {
    id: 1,
    category: "React JS",
    title: "Ecommerce App",
    image: ecommerce_app,
    link: "https://react-ecommerce-site-xi.vercel.app/",
    features:
      "React router, Context API, Routing parameters for different categories, Add to cart option, Breadcrumbs menu for products",
  },
  {
    id: 13,
    category: "React JS",
    title: "React Agency Site",
    image: infusion_app,
    link: "https://react-agency-infusion.vercel.app/",
    features:
      "A fully responsive agency website made using React JS, Tailwind CSS and Flowbite Library. It can be used as a landing page for various agencies.",
  },
  {
    id: 2,
    category: "React JS",
    title: "To Do List App",
    image: todolist_app,
    link: "https://react-to-do-context-api.vercel.app/",
    features:
      "React, Context API, Data maintained even on reload(Local storage), Add tasks, Edit tasks, Complete task, Delete task",
  },
  {
    id: 3,
    category: "React JS",
    title: "Weather App",
    image: weather_app,
    link: "https://react-weather-app-eight-nu.vercel.app/",
    features:
      "React weather app that shows live weather updates using OpenWeather API",
  },
  // {
  //   id: 4,
  //   category: "React JS",
  //   title: "TicTacToe App",
  //   image: tictactoe_app,
  //   link: "https://tictactoe-in-react.vercel.app/",
  //   features:
  //     "React router, Context API, Routing parameters for different categories, Add to cart option, Breadcrumbs menu for products",
  // },
  // {
  //   id: 5,
  //   category: "React JS",
  //   title: "Currency Converter",
  //   image: currency_app,
  //   link: "https://react-currency-converter-two.vercel.app/",
  //   features:
  //     "React router, Context API, Routing parameters for different categories, Add to cart option, Breadcrumbs menu for products",
  // },
  // {
  //   id: 6,
  //   category: "React JS",
  //   title: "Password Generator",
  //   image: password_app,
  //   link: "https://react-password-generator-jet.vercel.app/",
  //   features:
  //     "React router, Context API, Routing parameters for different categories, Add to cart option, Breadcrumbs menu for products",
  // },
  {
    id: 7,
    category: "Vanilla JS",
    title: "Drum Kit App",
    image: drumkit_app,
    link: "https://gauravkumar2601.github.io/Drum-Kit/",
    features:
      "Music app using Javascript that plays different sounds based on the events triggered by the clicks, also handles respective keypress events",
  },
  {
    id: 8,
    category: "Vanilla JS",
    title: "Quiz App",
    image: jsquiz_app,
    link: "https://gauravkumar2601.github.io/Javascript-Quiz-App/",
    features:
      "Javascript quiz app that shows questions and lets users select one option, Shows correct or incorrect answer on the spot, Final score is shown at the end ",
  },
  {
    id: 9,
    category: "Vanilla JS",
    title: "GuessMyNumber Game",
    image: guessmynumber_app,
    link: "https://gauravkumar2601.github.io/GuessMyNumber/",
    features:
      "A Number guessing game made in Javascript, User can guess a number b/w 1 to 20, If the no. doesn't match the generated no. then score is deducted",
  },
  {
    id: 10,
    category: "Vanilla JS",
    title: "JS Calculator",
    image: jscalculator_app,
    link: "https://gauravkumar2601.github.io/Javascript-Calculator/",
    features:
      "A calculator made using Vanilla Javascript that can be used for different computations",
  },
  // {
  //   id: 11,
  //   category: "Vanilla JS",
  //   title: "TextToSpeech Convertor",
  //   image: texttospeech_app,
  //   link: "https://gauravkumar2601.github.io/Text-To-Speech-Converter/",
  //   features:
  //     "Music app using Javascript that plays different sounds based on the events triggered by the clicks, also handles respective keypress events",
  // },
];

export default PortfolioData;
