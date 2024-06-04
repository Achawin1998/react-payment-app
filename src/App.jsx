import React, { useState, useEffect } from "react"
import Header from "./components/Header";
import List from "./components/List";
import Description from "./components/Description";
import "./App.css"
import Form from "./components/Form";
import DataContext from "./data/DataContext";
import {BrowserRouter as Router, Route, Routes, NavLink} from "react-router-dom" // Router  ตัวนี้ใช้ควบคุมเส้นทางในการควบคุมแสดงผล component Route ตั้งชื่อเส้นทาง Link กำหนดลิ้งค์


function App() {


    const initialData = JSON.parse(localStorage.getItem('items')) || [];

    const [item , updateItems ] = useState(initialData)

    const [reportIncome , setReportIncome] = useState(0); // เก็บค่ารายรับ
    const [reportExpense, setReportExpense] = useState(0) // เก็บค่ารายได้


    const addItems = (newItem) => {
        updateItems((prev) => {
            const updatedItems = [...prev, newItem];
            // Save updated items to localStorage
            localStorage.setItem('items', JSON.stringify(updatedItems));
            return updatedItems;
        });
    }

    const deleteItem = (id) => {
        const confirmDel = window.confirm(`Are you sure to delete this list? `)

        if (confirmDel) {
            updateItems((preV) => {
                return preV.filter((_ , index) => index !== id)
            })
            window.location.reload()
        }
    }

    useEffect(() => {
        // Save the items to localStorage whenever they change
        localStorage.setItem('items', JSON.stringify(item));
    }, [item]);

    useEffect(()=>{
       const amounts =  item.map((items=> items.amount))
       const income = amounts.filter((element => element > 0)).reduce((total,element) => total += element, 0).toFixed(2) 
       const expense = (amounts.filter((element => element < 0)).reduce((total, element) => total += element, 0)* -1 ).toFixed(2)
       console.log("รายได้" , income);
       console.log("รายจ่าย", expense);
       setReportIncome(income);
       setReportExpense(expense);
    },[item, reportIncome, reportExpense])


    return (  
        <DataContext.Provider value={{ income: reportIncome, expense: reportExpense }}>
        <div className="container">
            <Header />
            <Router>
                <div>
                    <ul className="horizontal-menu">
                        <li>
                            <NavLink
                                to="/"
                                exact
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                ข้อมูลบัญชี
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/insert"
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                บันทึกข้อมูล
                            </NavLink>
                        </li>
                    </ul>
                    <Routes>
                        <Route path='/' element={<Description />} />
                        <Route path='/insert' element={<><Form onAdd={addItems} /> <List items={item} onDelete={deleteItem}/></>} />
                    </Routes>
                </div>
            </Router>
        </div>
    </DataContext.Provider>
    )
    
}


export default App;

