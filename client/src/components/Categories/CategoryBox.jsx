import PropTypes from 'prop-types'

import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {
// usenavigate call form into URL set query
const navigate = useNavigate()

const handelquery=()=>{
  
   let querystring={category:label}
  // console.log(querystring)
  const url= queryString.stringifyUrl({

url:'/',
query:querystring
  });
  //  console.log(url); 
  navigate(url)
}


  return (
    <div onClick={handelquery}
      className={`flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer`}
    >
      <Icon size={26} />
      <div className='text-sm font-medium'>{label}</div>
    </div>
  )
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
