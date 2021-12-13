import './Body.css';
import axios from 'axios';
import {useState} from 'react';

const AddItem = ({setData, data}) => {
    const [formData, updateFormData] = useState({});

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };

    const newItem = () => {
        const item = [{
                isFeatured: false,
                taskTitle: formData.title,
                taskDescription: formData.desc,
                taskLocation: formData.location,
                maxTime: formData.time,
                taskDuration: formData.duration,
                urgencyLevel: formData.urgencyLevel
            }];

        axios.post('http://localhost:8080/item', item).then(() => {
            setData({
                ...data,
                item
            });
        }).catch((err) => {
            console.error(err);
        });
    }


    return (
        <div>
            <div className="add-item-btn">
                <a href="#addForm" className="add-item-content">
                    +
                </a>
            </div>

            <form className='add-form popup' id="addForm">
                <a href="" class="close">&times;</a>
                <h1>New Task:</h1>
                <label for="title">Task Name:</label>
                <input type="text" name="title" id="title"
                    onChange={handleChange}
                    required></input>
                <br/><br/>
                <label for="desc">Task Description:</label>
                <textarea name="desc"
                    onChange={handleChange}></textarea>
                <br/><br/>
                <label for="img">Task Image:</label>
                <input type="file" name="img"
                    onChange={handleChange}></input>
                <br/>
                <br/>
                <label for="location">Task Location:</label>
                <select name="location"
                    onChange={handleChange}>
                    <option value="Home">Home</option>
                    <option value="Bank">Bank</option>
                    <option value="Work">Work</option>
                    <option value="Gym">Gym</option>
                    <option value="Barber">Barber</option>
                    <option value="College">College</option>
                    <option value="Park">Park</option>
                    <option value="Mall">Mall</option>
                </select>
                <br/><br/>
                <label for="time">Maximum Time:</label>
                <input type="date" name="time"
                    onChange={handleChange}></input>
                <br/><br/>
                <label for="duration">Task Duration:</label>
                <input type="number" name="duration"
                    onChange={handleChange}></input>
                <br/><br/>
                <label for="urgencyLevel">Urgency Level:</label>
                <select name="urgencyLevel"
                    onChange={handleChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
                <br/>
                <button type="submit" className="submit-btn"
                    onClick={newItem}>Submit</button>
            </form>
        </div>
    )
}

export default AddItem;
