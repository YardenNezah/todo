import './Body.css';
import Item from './Item';

const Container = ({data}) => {
    console.log(data);
    return(
        <div>
             {data && data.map((task)=>{
            return <Item task={task}/>
        })}
        </div>
    )
}
export default Container;