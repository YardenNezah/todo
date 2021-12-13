import './Body.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import cleanWindow from "../../assets/cleanWindow.jpg";
import gym from "../../assets/gym.jpg";
import haircut from "../../assets/haircut.jpg";
import organizeClothes from "../../assets/organizeClothes.jpg";
import shopSupermarket from "../../assets/shopSupermarket.jpg";
import study from "../../assets/study.jpg";
import washDishes from "../../assets/washDishes.jpg";
import withdrawCash from "../../assets/withdrawCash.jpg";
import readAbook from "../../assets/readAbook.jpg";
import run from '../../assets/run.webp';
import cook from '../../assets/cook.webp';
import completedicon from '../../assets/completed-icon.jpg';
import ItemHistory from './ItemsHistory';

const Item = ({task}) => {
    const removeTask = (e) => {
        let child = e.parentElement;
        let parent = child.parentElement;
        parent.removeChild(child);
    };

    function getImg() {
        const taskTitle = task.taskTitle;
        let taskImg;
        switch (taskTitle) {
            case "Clean Windows": taskImg = cleanWindow;
                break;
            case "Gym": taskImg = gym;
                break;
            case "Haircut": taskImg = haircut;
                break;
            case "Organize Clothes": taskImg = organizeClothes;
                break;
            case "Shop in Supermarket": taskImg = shopSupermarket;
                break;
            case "Study": taskImg = study;
                break;
            case "Wash Dishes": taskImg = washDishes;
                break;
            case "Withdraw Cash": taskImg = withdrawCash;
                break;
            case "Read A Book": taskImg = readAbook;
                break;
            case "Run": taskImg = run;
                break;
            case "Cook": taskImg = cook;
                break;
            default: taskImg = "";
        }
        return taskImg;
    }

    return (
        <div className="task-item">
            <button className="delete-btn"
                id={
                    task.id
                }
                onClick={
                    (e) => removeTask(e.target)
            }>X</button>

            <div>
                <img src={
                        getImg()
                    }
                    alt="task-img"
                    className="task-img"></img>
            </div>
            <div className="right-item">

                <div className="task-title">
                    <a href="#addDetails" className="title">
                        {
                        task.taskTitle
                    }</a>
                </div>

                <div class="task-details">
                    <div>
                        <div className="task-duration">
                            {
                            task.taskDuration
                        }
                            <span>Hours</span>
                        </div>
                        <div className="task-location">
                            <i class="bi bi-geo-alt-fill"></i>

                            {
                            task.taskLocation
                        }</div>
                    </div>
                    <div>
                        <div className="max-time">
                            {
                            task.maxTime
                        }</div>
                        <div className="task-urgency">
                            {
                            task.urgencyLevel
                        }</div>
                    </div>
                </div>
            </div>
            <br/>
            <img src={completedicon}
                alt="completed"
                className='completed'></img>

            <div className="add-details popup" id="addDetails">
                <h1>Task Details</h1>
                <a href="" class="close">&times;</a>
                <div>
                    <h2>Title:</h2>
                    {
                    task.taskTitle
                } </div>
                <div>
                    <h2>Description:</h2>
                    {
                    task.taskDescription
                } </div>
                <div>
                    <h2>Location:</h2>
                    {
                    task.taskLocation
                } </div>
                <div>
                    <h2>Maximum Time:</h2>
                    {
                    task.maxTime
                } </div>
                <div className="title">
                    <h2>Duration:</h2>
                    {
                    task.taskDuration
                }
                    <span>Hours</span>
                </div>
                <div className="title">
                    <h2>Urgency Level:</h2>
                    {
                    task.urgencyLevel
                } </div>
                <div className="title">
                    <h2>Assigned People:</h2>
                    {
                    task.taskAssigned.map((assigned) => {
                        return <ul>
                            <li>{assigned}</li>
                        </ul>
                })
                } </div>
                <div className="title">
                    <h2>Is Completed?</h2>
                    false
                </div>
            </div>
        </div>

    )
}
export default Item;
