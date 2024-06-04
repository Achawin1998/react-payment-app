import DataContext from "../data/DataContext"
import { useContext } from "react"
import "./Desciption.css"

function Description() {
    const {income , expense} = useContext(DataContext)
    const formatNumber=(num)=> {  // ตัวนี้คือ comma ตัวเลขหลักพันขึ้นไป
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    } 

    return ( 
        <div>
        {/* <p p style={{fontSize: 25, color: "blue" , textAlign: "center"}}>   รายรับ :  {income}  รายจ่าย : {expense} </p>  */}
        <h4>ยอดคงเหลือ (บาท)</h4>
        <h1>{formatNumber((income - expense).toFixed(2))}</h1>
        <div className="report-container">
            <div>
                <h4>รายรับ </h4>
                <p className="report plus"> {formatNumber(income)} </p>  
            </div>
            <div>
                <h4>รายจ่าย</h4>
                <p className="report minus">{formatNumber(expense)}</p>
            </div>
        </div>

        </div>
    
    )
 
}

export default Description