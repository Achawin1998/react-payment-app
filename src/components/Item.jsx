import PropTypes from 'prop-types'; 
import "./list.css"
import "./item.css"
import {FaTrash} from 'react-icons/fa'
 //<input type='checkbox' onClick={() => {onDelete(id)}} />

const Item = (props) => {
  const {title, amount, onDelete , id} = props
  const status = amount < 0 ? "expense" : "income" //ใช้ ternary 
  const symbol = amount < 0 ? "-" : "+"

  const formatNumber=(num)=> {  // ตัวนี้คือ comma ตัวเลขหลักพันขึ้นไป
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
} 

    return (
            <div>
                <li className={status}>{title} <span className='delete-btn'> {symbol}{formatNumber(Math.abs(amount))} <FaTrash className='symbol-fa' onClick={() => {onDelete(id)}}/> </span> </li>
            </div>
    )
}

Item.prototype= {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default Item;