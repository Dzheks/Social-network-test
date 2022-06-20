
let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you', likesCount: 25 },
      { id: 2, message: 'It\'s my first post', likesCount: 55 },
      { id: 2, message: 'БЛАБЛА', likesCount: 155 },
      { id: 2, message: 'It\'s my first post', likesCount: 55 },
      { id: 2, message: 'Hi, how are you', likesCount: 155 }
    ]
},
  dialogsPage: {
    messages: [
      { id: 1, message: 'Привет' },
      { id: 2, message: 'Yo' },
      { id: 3, message: 'How is your it-kamasutra?' }
    ],
    dialogs: [
      { id: 1, name: 'Evgeniy' },
      { id: 2, name: 'Irina' },
      { id: 3, name: 'Nadeaya' }
    ],
  }

}

export let addPost = (postMessage) => {
  debugger;
  let newPost = {
    id: 5, 
    message: postMessage,
    likesCount: 0
  };

  state.profilePage.posts.push(newPost);
}

export default state;