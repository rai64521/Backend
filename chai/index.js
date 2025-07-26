import express from 'express'
import 'dotenv/config'


const app = express()
const port = 4000

const gitHubData = {
  "login": "rai64521",
  "id": 175352032,
  "node_id": "U_kgDOCnOo4A",
  "avatar_url": "https://avatars.githubusercontent.com/u/175352032?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rai64521",
  "html_url": "https://github.com/rai64521",
  "followers_url": "https://api.github.com/users/rai64521/followers",
  "following_url": "https://api.github.com/users/rai64521/following{/other_user}",
  "gists_url": "https://api.github.com/users/rai64521/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rai64521/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rai64521/subscriptions",
  "organizations_url": "https://api.github.com/users/rai64521/orgs",
  "repos_url": "https://api.github.com/users/rai64521/repos",
  "events_url": "https://api.github.com/users/rai64521/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rai64521/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Sumant Rai",
  "company": null,
  "blog": "",
  "location": "Mumbai",
  "email": null,
  "hireable": null,
  "bio": "indian\r\n",
  "twitter_username": null,
  "public_repos": 20,
  "public_gists": 0,
  "followers": 5,
  "following": 0,
  "created_at": "2024-07-11T18:58:18Z",
  "updated_at": "2025-07-07T05:18:23Z"
}

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter page")
})

app.get("/login",(req,res)=>{
    res.send('<h1>Please Login at Chai aur Code</h1>')
})

app.get("/youtube",(req,res)=>{
    res.send("<h2>Youtube: Sumant Rai</h2>")
})

app.get("/github",(req,res)=>{
    res.json(gitHubData)
})

app.listen(process.env.PORT ,()=>{
    console.log(`Example app Listening on port ${port}`);
    
})