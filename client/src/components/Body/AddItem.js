import './Body.css';
import axios from 'axios';
import {useEffect, useState} from 'react';

const AddItem = ({setData, data}) => {
    const arr=[
    {
        HOME: "Home",
        BANK: "Bank",
        WORK: "Work",
        GYM: "Gym",
        BARBER: "Barber",
        COLLEGE: "College",
        PARK: "Park",
        MALL: "Mall",
      },      
      {
        LOW: "Low",
        MEDIUM: "Medium",
        HIGH: "High",
      },
      {
        YARDEN: "Yarden",
        RAHAV: "Rahav",
        MOM: "Mom",
        SHOVAL: "Shoval",
        RAZ: "Raz",
        NAAMA: "Naama",
      }
    ];
    const newItem= () => {
        const item= {
            id: data.length,
            isFeatured: true,
            isCompleted: false,
            taskTitle: "Cook",
            taskDescription: "Cook a breakfast with my friends",
            taskLocation: arr[0].HOME,
            maxTime: "02/10/2021",
            taskDuration: "1",
            urgencyLevel: arr[1].LOW,
            taskAssigned: [arr[2].YARDEN, arr[2].RAZ, arr[2].NAAMA],
        }
        // data.push(newItem);
        try{
            axios.post('http://localhost:8080/item');
        }
        catch(err){
            console.error(err);
        }
        setData((prev)=>{return [...prev,item]});
    }

    function FileUploadPage(){
        const [selectedFile, setSelectedFile] = useState();
        const [isFilePicked, setIsFilePicked] = useState(false);
        const changeHandler = (event) => {
            setSelectedFile(event.target.files[0]);
            setIsFilePicked(true);
        };
    
        const handleSubmission = () => {
        };
    }
    return (
        <div>
           <div className="add-item-btn"><a href="#addForm" className="add-item-content"> + </a></div> 
            <form className='add-form popup' id="addForm">
            <a href="#" class="close">&times;</a>
                <h1>New Task:</h1>
                <label for="title">Task Name:</label>
                <input type="text" name="title" required></input> <br /><br />
                <label for="desc">Task Description:</label>
                <textarea name="desc"></textarea> <br /><br />
                <label for="img">Task Image:</label>
                <input type="file" name="file" onChange={changeHandler}></input> 
                <button onClick={handleSubmission}>Upload</button><br /><br />
                <label for="location">Task Location:</label>
                <select name="location"> 
                    <option value="Home">Home</option>
                    <option value="Bank">Bank</option>
                    <option value="Work">Work</option>
                    <option value="Gym">Gym</option>
                    <option value="Barber">Barber</option>
                    <option value="College">College</option>
                    <option value="Park">Park</option>
                    <option value="Mall">Mall</option>
                </select> <br /><br />
                <label for="time">Maximum Time:</label>
                <input type="date" name="time"></input> <br /><br />
                <label for="duration">Task Duration:</label>
                <input type="number" name="time"></input> <br /><br />
                <label for="urgencyLevel">Urgency Level:</label>
                <select name="urgencyLevel">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select> <br />
                <button type="submit" className="submit-btn" onClick={newItem}>Submit</button>
            </form>

        </div>
    )
}

export default AddItem;
