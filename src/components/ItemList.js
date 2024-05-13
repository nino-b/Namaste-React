import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants"

export default function ItemList({items, dummy}) {

  const dispatch = useDispatch();
  function handleAddItem(item) {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map(item => {
        return (
        <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between" >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-2 ">
            <div className="absolute">
              <button className=" p-2 mx-auto rounded-md bg-black text-white shadow-lg" onClick={() => handleAddItem(item)}>
                add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} className="w-full"/>
          </div>
         
        </div>
        )
      })}
    
    </div>
  )
}