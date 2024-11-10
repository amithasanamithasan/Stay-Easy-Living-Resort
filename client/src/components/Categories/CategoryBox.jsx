import PropTypes from 'prop-types'

import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {
  // eslint-disable-next-line no-unused-vars
  const [params ,setParams]=useSearchParams();
  const category=params.get('category');
// usenavigate call form into URL set query
const navigate = useNavigate()

const handelquery=()=>{
  
   let querystring={category:label}
  // console.log(querystring)
  const url= queryString.stringifyUrl({

url:'/',
query:querystring,
  });
  //  console.log(url); 
  navigate(url)
}


  return (
    <div
    onClick={handelquery}
    className={`flex 
      flex-col 
      items-center 
      justify-center 
      gap-2
      p-3
      border-b-2
      hover:text-neutral-800
      transition
      cursor-pointer
      ${category === label ? 'border-b-pink-800 text-natural-400' : ''}`}
  >
    <Icon size={26} />
    <div className="text-sm font-medium">{label}</div>
  </div>
);
}

CategoryBox.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.elementType,
}

export default CategoryBox
