const API_URL = 'https://wecart-ca053-default-rtdb.firebaseio.com';

export async function getAllMembers() {
  const response = await fetch(`${API_URL}/myungseong.json`,{
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json()

  if(!response.ok){
    throw new Error(data.message || 'Could Not found members.');
  }
  return data;
}

export async function getSinglemember(memberId) {
  const response = await fetch(`${API_URL}/myungseong.json/${memberId}`);
  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || 'Could Not found members.');
  }
  const loadedMember = {
    id: memberId,
    ...data
  };
  return loadedMember;
}

export async function addMember(memberData) {
  const response = await fetch(`${API_URL}/newmember.json`,{
    method: 'POST',
    body: JSON.stringify(memberData),
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const data = await response.json();
  if(!response.ok){
    throw new Error(data.message || 'Could Not create member.');
  }
  return null;
}

export async function getAllNewMembers() {
  const response = await fetch(`${API_URL}/newmember.json`,{
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await response.json()

  if(!response.ok){
    throw new Error(data.message || 'Could Not found members.');
  }

  const newMembersArray = [];
  for(const key in data){
    const newMemberObj = {
      id:key,
      ...data[key],
    }
    newMembersArray.push(newMemberObj);
  }

    

  return newMembersArray;
}
export async function getWelcomeMessage(messageId){
  const response = await fetch(`${API_URL}/welcomemessage/${messageId}.json`,{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  if(!response.ok){
    throw new Error(data.message || 'The message does not exist.')
  }
  
  const messageArray = [];

  for(const key in data){

  const welcomeMessageObj = {
    id:key,
    ...data[key]
  }  
  messageArray.push(welcomeMessageObj)
}
  return messageArray;
}

export async function addWelcomeMessage(messageData){
  const response = await fetch(`${API_URL}/welcomemessage/${messageData.newmemberId}.json`,{
    method: 'POST',
    body:JSON.stringify(messageData.welcomeMessage),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();
  if(!response.ok){
    throw new Error(data.message || 'Could Not create member.');
  }
  return null;
}

export async function deleteWelcomeMessage(messageData){
  
  const response = await fetch(`${API_URL}/welcomemessage/${messageData.newmemberId}/${messageData.messageId}.json`,{
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || 'Could Not create member.');
  }
  ;
  return null;
}