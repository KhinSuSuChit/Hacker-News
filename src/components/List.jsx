import { useState } from "react";
import Item from "./Item";
import { sortBy } from "lodash";

const SORTS_MAP = {
  NONE : (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENT: (list) => sortBy(list, "num_comments").reverse(),
  POINT: (list) => sortBy(list, "points").reverse(), 
};

export default function List({list, handleRemoveItem}){

  const [sort, setSort] = useState("NONE")

  const sortFunction = SORTS_MAP[sort];
  const sortedList = sortFunction(list);

    return (
      <ul>
        <li style= {{display: "flex"}}>
        <span style={{width: "40%"}}><button onClick = {() => setSort("TITLE")}>Title</button></span>
        <span style={{width: "30%"}}><button onClick = {() => setSort("AUTHOR")}>Author</button></span>
        <span style={{width: "10%"}}><button onClick = {() => setSort("COMMENT")}>Comments</button></span>
        <span style={{width: "10%"}}><button onClick = {() => setSort("POINT")}>Points</button></span>
        <span style={{width: "10%"}}>Actions</span>
      </li>
            {sortedList.map((item)=>{
              return <Item key={item.objectID} item={item} handleRemoveItem={handleRemoveItem}/>;
            })}
      </ul>
    )
  }