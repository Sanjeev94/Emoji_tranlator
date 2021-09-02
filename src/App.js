import "./styles.css";
import React, { useState } from "react";

var emojiDictionaryAnimal = {
  "🙈": "see no evil",
  "🙉": "Hear no evil",
  "🙊": "Speak no evil",
  "🐒": "Normal Monkey"
};
// console.log(Object.keys(emojiDictionaryAnimal));
var emojisWeKnow = Object.keys(emojiDictionaryAnimal);

// var headingText = "Inside out";
// var color = "green";
// var username = prompt("Enters ur name");
// var username = "Sanjeev";

// document.querySelector("#username").innerText = username;
// var likeCounter = 0;
// counter part
// export default function App() {
//   const [likeCounter, setLikeCounter] = useState(0);
//   function likeClickHandler() {
//     //var newlikeCounter = likeCounter + 1; //processing
//     // console.log("clicked!", likeCounter);
//     setLikeCounter(likeCounter + 1); // processing/output
//   }
//   console.log("likeCounter", likeCounter);
//   return (
//     <div className="App">
//       {/* <h1 style={{ backgroundColor: color }}>{headingText}</h1> */}
//       {/* <h1 style={{backgroundColor: "blue"}}>Welcome {username}</h1> */}
//       {/* <h1>Welcome <span id="username" style={{color: "blue"}}>{username}</span></h1> */}
//       <h1>Inside out</h1>
//       <button onClick={likeClickHandler}> Like me! </button> {likeCounter}
//     </div>
//   );
// }

// second part
// export default function App() {
//   var [userInput, setUserInput] = useState("");

//   function inputChangeHandler(event) {
//     // console.log(event.target);
//     console.log(event.target.value);
//     setUserInput(event.target.value);
//   }

//   return (
//     <div className="App">
//       <h1>Inside out</h1>
//       <input onChange={inputChangeHandler}></input>
//       <div> welcome {userInput} </div>
//     </div>
//   );
// }

// emoji meaning
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHander(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionaryAnimal[userInput];

    //console.log(meaning);
    if (meaning === undefined) {
      meaning = "We don't have this dictionary";
    }
    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    console.log(emoji);
    var meaning = emojiDictionaryAnimal[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Inside out</h1>
      <input onChange={emojiInputHander}></input>
      <h2> {meaning} </h2>
      <h3>Emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

//lists in react
// var username = "sanjeev";
// var userLoggedIn = true;
// var shoppingList = ["milk", "eggs", "bread", "jam"];

// export default function App() {
//   // function getUserMessage() {
//   //   if (userLoggedIn) {
//   //     return <em> {username} </em>;
//   //   }
//   //   return "user";
//   // }

//   function getBg(index) {
//     if (index % 2 === 0) {
//       return "white";
//     }
//     return "grey";
//   }

//   function listItemClickHandler(item) {
//     console.log("clicked", item);
//   }

//   return (
//     <div className="App">
//       {/* <h1>Welcome {getUserMessage()} </h1> */}
//       <h1>Print my Shopping List</h1>
//       <ul>
//         {shoppingList.map(function (item, index) {
//           return (
//             <li key={item}
//             onClick = {() => listItemClickHandler(item)}
//             style={{ backgroundColor: getBg(index),
//             padding: "1rem" }}>
//               {item}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }
