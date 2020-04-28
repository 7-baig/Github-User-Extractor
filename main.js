
// 
const container = document.querySelector('#info');
const profileContainer = document.querySelector('#profile');
const userInput = document.querySelector('#searchInput');
const getSearchButton = document.querySelector('#searchButton');
//
const url = 'https://api.github.com/users';
const queryParam = '/'


// this function renders the response
const renderFunction = (res) => {
  const profileData = `<img src=${res.avatar_url}>
  
  ${(!res.name)? `<h3>no name</h3>` : `<p>${res.name}</p>`}
  ${(!res.bio)? `<p>no bio</p>` : `<p>${res.bio}</p>`}
  
  <button>
      <a href=${res.html_url}>Visit Profile</a>
  </button>`;
  profileContainer.innerHTML = profileData;

  const data = `<h3>username: ${res.login}</h3>
  <a href=${res.email}><i class="far fa-envelope"></i></a>
  <a href=${res.followers_url}><p><i class="fas fa-user-friends"></i>&nbsp;Followers: ${res.followers}</p></a>
  <a href=${res.following_url}><p><i class="fas fa-user-friends"></i>&nbsp;Following: ${res.following}</p></a>
  <a href=${res.repos_url}><p><i class="far fa-folder-open"></i></i>&nbsp;Repositories: ${res.public_repos}</p>
  <a href=${res.location}><i class="fas fa-map-marker-alt"></i></a>`;
  container.innerHTML = data;
// 
};


const call = () => {
const wordQuery = userInput.value;
const endpoint = `${url}${queryParam}${wordQuery}`;

fetch(endpoint)
.then((response) => {
  if(response.ok) {
    return response.json()
  }
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message)
})
.then(jsonResponse => {
  console.log(jsonResponse)
  console.log(endpoint)
  renderFunction(jsonResponse);
},)
}
getSearchButton.onclick = (event) => {
event.preventDefault()
  call();
}



