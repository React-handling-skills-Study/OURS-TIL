


const Validation = (text) => {
  if ((text.length < 3) && (text.length >= 0)) {
    alert("3자 이상 입력해주세요")
    return false
    }
  
  else {
    return true;
  }
}

export default Validation;


  

