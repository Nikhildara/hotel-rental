import './index.css'
import ContextCity from '../../Context/ContextCity';



const FilterItem=(props)=>(
    <ContextCity.Consumer>
        {
            value=>{
                const {changeCity,setLastIndex}=value
            const {Btnitem,activeStatus,isActive}=props
            // console.log(Btnitem);
            const {item,id}=Btnitem

            const btnButton= ()=>{
                activeStatus(id)
                changeCity(id)
                setLastIndex(6)
            }

            return(
            <li>
                <button className={`filter-btn ${!isActive?"filter-btn":"active-btn"}`}  onClick={btnButton}>
                    {item}
                </button>
            </li>
            )}
        }
    </ContextCity.Consumer>
)

export default FilterItem