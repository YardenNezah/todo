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

const Item = ({task}) => {
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
            <div>
                <img src={
                        getImg()
                    }
                    alt="task-img"
                    className="task-img"></img>
            </div>
            <div className="right-item">

                <div className="task-title">
                    <p className="title">
                        {
                        task.taskTitle
                    }</p>
                </div>

                <div class="task-details">
                    <div>
                        <div className="task-duration">
                            {
                            task.taskDuration
                        }
                            <span>Hours</span></div>
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
            <div className='crud-btns'>
                <button className="btn btn-outline-warning">Edit</button>
                <br/>
                <button className="btn btn-outline-danger" >Delete</button>
            </div>
            <img src={completedicon}
                alt="completed"
                className='completed'></img>
        </div>

    )
}
export default Item;
