const validation = (user) => {

  let errors={}

  if(!user.name) {
    errors.name="Name is required."
  }

  if(!user.email) {
    errors.email="Email is required."
  }
  else if (!/\S+@\S+\.\S+/.test(user.email)) {
    errors.email="Email is invalid."
  }

  if(!user.id) {
    errors.id="Id is required"
  }

  if(!user.password) {
    errors.password="Password is required."
  }
  else if (user.email.length < 3) {
    errors.password="Password must be more than 3 characters."
  }

  if(user.password !== user.passwordConfirmation) {
    errors.passwordConfirmation="Password and Password Confirmation do not match"
  }

  return errors
};

export default validation;