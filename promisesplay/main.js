	// console.log('going to fetch data from wes bos blog');
		// //store as a promise so what happens is more logical 
		// const postsPromise=fetch('http://swapi.co/api/');
		// postsPromise
		// 	.then(data=> data.json())
		// 	.then(data => {console.log(data)})
		// 	.catch((err)=>{
		// 		console.error(err);
		// 	})

		// console.log('Done!');
		// console.log(postsPromise);

		// //build your own:
		// const p = new Promise((resolve, reject) => {
		// 	resolve({first: "Katy", last: "Greaty"});
		// });
		// p
		// 	.then(data => {
		// 		setTimeout(()=>{
		// 			console.log(data);
		// 		}, 5000);
		// 	})
		// 	.catch()

		// const posts = [
  //   { title: 'I love JavaScript', author: 'Wes Bos', id: 1 },
  //   { title: 'CSS!', author: 'Chris Coyier', id: 2 },
  //   { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
  // ];
  // const authors = [
  //   { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  //   { name: 'Chris Coyier', twitter: '@chriscoyier', bio: 'CSS Tricks and CodePen' },
  //   { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
  // ];

  // function getPostById(id){
  // 	return new Promise((resolve, reject)=>{
  // 		//settimeout to simulate a slower fetch
  // 		setTimeout(() =>{
		// 		const post = posts.find(post => post.id === id);
	 //  		if (post){
	 //  			resolve(post);
	 //  		} else {
	 //  			reject(Error("Post not found!"));
	 //  		}
  // 		}, 200);

  // 	});
  // }
  // function fluffAuthor(post){
  // 	return new Promise((resolve, reject) =>{
  // 		const authorDetails = authors.find(person => person.name ===post.author);
  // 		if(authorDetails){
  // 			post.author = authorDetails;
  // 			resolve(post);
  // 		} else {
  // 			reject(Error('Cannot find author.'));
  // 		}
  // 	});
  // }

  // getPostById(3)
  // 	.then(post=> {
  // 		console.log(post);
  // 		return fluffAuthor(post);
  // 	})
  // 	.then(post =>{
  // 		console.log(post);
  // 	})
  // 	.catch(err=>{
  // 		console.error(err);
  // 	});

  //   const weather = new Promise ((resolve)=>{
  //     setTimeout(()=>{
  //       resolve({temperature: 29, condition: 'fair'});
  //     }, 2000)
  //   });

  //   const tweets = new Promise((resolve) =>{
  //     setTimeout(()=>{
  //       resolve(['I like spam', 'I do not like toast'])
  //     }, 500);
  //   });

  //   Promise
  //     .all([weather, tweets])
  //     .then(responses =>{
  //       const[weatherInfo, tweetsInfo] = responses;
  //       console.log(weatherInfo, tweetsInfo);
  //     })



  const postsPromise = fetch('http://wesbos.com/wp-json/wp/v2/posts');
  const streetCarsPromise = fetch('http://data.ratp.fr/api/datasets/1.0/search/?q=paris');

Promise
  .all([postsPromise, streetCarsPromise])
  .then(responses => {
    return Promise.all(responses.map(res=>res.json()));
  })
  .then(responses=>{
    console.log(responses);
  })
































































