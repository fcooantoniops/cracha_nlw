const linksSocialMedia = {
  github: 'fcooantoniops',
  youtube: 'UCOYx3qZmKsjlzuunQuUBXOg',
  facebook: 'fcooantonio',
  instagram: 'fcooantonio',
  twitter: 'contonnho'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      //userBio.textContent = data.bio
      userBio.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
