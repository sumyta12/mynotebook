//this is list of people where there name and title are include
const initizer = [
  {
    id: 0,
    name: "morjina",
    title: "banker",
  },
  {
    id: 1,
    name: "lotif",
    title: "teacher",
  },
];
//this is for the remove people from the list
const handleremove = (id, list) => {
  return list.filter((item) => item.id !== id);
};
import { useState } from "react";
const Example = () => {
  //here useState is a hook of react and this hook has two things
  //one is list is state variable and another is setlist 
  //if you pass the usestate anything that case that will be initial state of list
  //when you try to update that list you set it through setlist
  const [list, setlist] = useState(initizer);
  //my target it when list is empty or [] it says empty here is no list
  //if here we like to use list === [] that case we see that [] === [] the result is false
  // beacuse they are checking [] instance not the value (stackoverflow i see that [] === [] you can use shallow equality it will show you ture)
  //in your code if anywhere you need to compare [] === [] its means you are choosing wrong path for comparision
  // list.length === 0 it will check the value of the list rather then use [] === [];
  return list.length === 0 ? (
    <h1>There has no list of people</h1>
  ) : (
    <>
      <h1>List of people's proffesion</h1>
      {/*
         here firstly i use list and this list has the list of people
         and then map that list so that you can see the list of people
         and here you use button remove the list of people so use a funtion
         handleremove for remove the list
         we pass id and the list and here when we pass the list we pass the two person and when it goes
         the handlerfuntion it remove one persone and return also update setlist 
         then the initital list will be updated and remaining the one person
         and it will show the UI 
      */}
      {list.map((name) => (
        <div key={name.name}>
          <a>
            {name.name} : {name.title}
          </a>
          <button
            onClick={() => {
              setlist(handleremove(name.id, list));
            }}
          >
            remove
          </button>
        </div>
      ))}
    </>
  );
};
export default Example;
