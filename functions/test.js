const setNewObjectIntoStructure = () => {
  const notification = {id: 3, name: 'new notification for 10 user'}
  const currentUserID = 10;


  const oldData = {
    9: [{id: 2, name: 'old notification for 9 user'}],
    10: [{id: 1, name: 'old notification for 10 user'}, {id: 4, name: 'old notification for 10 user+'}, {id: 5, name: 'old notification for 10 user++'}, notification]
  }

  // const deleteObjFromStructure = (id) => {
  //   return { ...oldData, [currentUserID]: oldData[currentUserID].filter(item => item.id !== id) };
  // }
  //
  // const updatedData = deleteObjFromStructure(notification.id);

  // const updatedData = Object.assign(oldData, { [currentUserID]: [notification] });

  console.log(oldData);

  console.log(updatedData);
}

export default setNewObjectIntoStructure;