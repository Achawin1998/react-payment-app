import { useState , useEffect } from "react";
import "./Form.css"

const Form = (props) =>{

    console.log("Render Form components");
    const [title, updateTitle] = useState("");
    const [amount, updateAmount] = useState(0)
    const [formValid, setformValid] = useState(false)


    const handleChange= (e)=>{ 
        updateTitle(e.target.value)
    }
    const handleChangeAmount = (e)=>{
        updateAmount(e.target.value)
    }

    const saveItem = (e) =>{
        e.preventDefault();
    
        const dataItem = {
            title: title,
            amount: Number(amount)
        }
            props.onAdd(dataItem)
            updateTitle("")
            updateAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length > 0 && amount !== 0
       if (checkData) {
            setformValid(true)
       }
       // setfromValid(checkdata) พิมพ์แบบนี้ก็ได้
    },[title,amount])


    return (
        <div>
            <form>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุรายการ..." onChange={handleChange} value={   title} name="title" ></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน..." onChange={handleChangeAmount} value={amount} name="amount" ></input>
                </div>
                <div>
                    <button onClick={saveItem} type="submit" disabled={!formValid}>เพิ่มรายการ</button>
                </div>
            </form>
        </div>
    )


  
    
}

export default Form;




    //   const [title, updateTitle] = useState({
    //     title: "",
    //     amount: ""
    // })

    // const handleChange = (e) =>{
    //     const {name, value} = e.target
    //   updateTitle((preV)=>{
    //     return {...preV, [name] : value}
    //   })
    // }

    // const saveItem = (e) => {
    //     e.preventDefault();
    //     const itemData = {
    //         title: title.title,
    //         amount: title.amount
    //     }
    //     props.onAdd(itemData)
    // }



// return (
//     <div>
//         <form>
//             <div className="form-control">
//                 <label>ชื่อรายการ</label>
//                 <input type="text" placeholder="ระบุรายการ..." onChange={handleChange} value={title.title} name="title" ></input>
//             </div>
//             <div className="form-control">
//                 <label>จำนวนเงิน</label>
//                 <input type="number" placeholder="ระบุจำนวนเงิน..." onChange={handleChange} value={title.amount} name="amount" ></input>
//             </div>
//             <div>
//                 <button onClick={saveItem} type="submit">เพิ่มรายการ</button>
//             </div>
//         </form>
//     </div>
// )

// อันนี้เป็น todolist ใช้ useEffect
// import React from "react";
// import { useState, useEffect } from "react";

// function CreateArea(props) {
//   const [text, updateText] = useState({
//     title: "",
//     content: "",
//   });

//   const [valid, updateValid] = React.useState(false);

//   useEffect(() => {
//     const checkData =
//       text.title.trim().length > 0 && text.content.trim().length > 0;
//     if (checkData) {
//       updateValid(true);
//     }
//   }, [text]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     updateText((preV) => {
//       return { ...preV, [name]: value };
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();
//     props.onAdd(text);
//     updateText({
//       title: "",
//       content: "",
//     });
//   };

//   return (
//     <div>
//       <form>
//         <input
//           name="title"
//           placeholder="Title"
//           value={text.title}
//           onChange={handleChange}
//         />
//         <textarea
//           name="content"
//           placeholder="Take a note..."
//           rows="3"
//           value={text.content}
//           onChange={handleChange}
//         />
//         <button onClick={handleClick} disabled={!valid}>
//           Add
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreateArea;