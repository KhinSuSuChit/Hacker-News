import './Item.css'

export default function Item({item, handleRemoveItem}){
    return (
      <li className="item">
        <span style={{width: "40%"}}><a href={item.url}>{item.title}</a></span>
        <span style={{width: "30%"}}>{item.author}</span>
        <span style={{width: "10%"}}>{item.num_comments}</span>
        <span style={{width: "10%"}}>{item.points}</span>
        <span style={{width: "10%"}}>
          <button type="button" onClick={()=>handleRemoveItem(item)}>Remove</button>
        </span>
      </li>
    )
  }