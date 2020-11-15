# STATS


https://medium.com/javascript-in-plain-english/using-reacts-useeffect-hook-to-fetch-data-and-periodically-refresh-that-data-2a69b6d44081

https://www.valentinog.com/blog/socket-react/

https://css-tricks.com/build-a-chat-app-using-react-hooks-in-100-lines-of-code/

* socket-io client
https://www.npmjs.com/package/socket.io-client

* socket example
https://gist.github.com/luciopaiva/e6f60bd6e156714f0c5505c2be8e06d8

* hooks websocket
https://www.npmjs.com/package/react-use-websocket

useEffect(()=>{
    socket.on('message que',(nick,message) => {
      setMessages(draft => {
        draft.push([nick,message])
      })
    });

    socket.on('update',message => setMessages(draft => {
      draft.push(['',message]);
    }));

    socket.on('people-list',people => {
      let newState = [];
      for(let person in people){
        newState.push([people[person].id,people[person].nick]);
      }
      setOnline(draft=>{draft.push(...newState)});
      console.log(online)
    });

    socket.on('add-person',(nick,id)=>{
      setOnline(draft => {
        draft.push([id,nick])
      })
    });

    socket.on('remove-person',id=>{
      setOnline(draft => draft.filter(m => m[0] !== id))
    });

    socket.on('chat message',(nick,message)=>{
      setMessages(draft => {draft.push([nick,message])})
    });
  },0);

  * basic issue
  https://stackoverflow.com/questions/54824036/useeffect-hook-with-socket-io-state-is-not-persistent-in-socket-handlers