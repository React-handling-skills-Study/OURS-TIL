


const Validation = (text) => {
  if ((text.length < 3) && (text.length >= 1)) {
    alert("3자 이상 입력해주세요")
    return false
    }
  else if ((text === '')) {
    alert("제목을 입력하세요")
  }
  
  else {
    return true;
  }
}

export default Validation;

  

