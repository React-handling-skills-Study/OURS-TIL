

const Confirmation = (user) => {
  if (user.username.length < 3) {
    alert("이름은 3자 이상 입력해주세요");
  } else if (
    /^[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
      user.email
    ) === false
  ) {
    alert("올바른 이메일 형식으로 입력해주세요");
    return false;
  } else if (user.id.length < 3) {
    alert("ID는 3자 이상 입력해주세요");
    return false;
  } else if (user.password.length < 3) {
    alert("비밀번호는 3자 이상 입력해주세요");
    return false;
  } else if (user.password !== user.passwordConfirmation) {
    alert("비밀번호는 일치해야 합니다");
    return false;
  } else {
    return true;
  }
};

export default Confirmation;
