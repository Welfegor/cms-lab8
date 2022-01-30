import Search from './Icons/Search';
import './SearchForm.css';

const defaultPosts = [
  {
    avatar: "https://pbs.twimg.com/profile_images/1246467745975156738/hicJQmq0_400x400.jpg",
    comments: "2",
    reposts: "3",
    likes: "4",
    username: "Marat",
    usertag: "welfegor",
    posttime: "23 окт.",
    content: "Climate Scientist Peter Kalmus speaking at GAI 2021, explains what everyday people like you and me can do to decrease our carbon footprint.",
    contentPhoto: "https://pbs.twimg.com/media/FFqGGh_X0AQ9nIL?format=jpg&name=small"
  },
]

function SearchForm(setPosts) {
  const postsRequest = (event) => {
    const API_URL = 'http://localhost:3000/search/?search=' + event.target.value
    setPosts(defaultPosts)
    fetch(API_URL, {
      method: "GET",
      headers: {'Content-Type': 'application/json'},
    }).then((request) => request.json()).then((request) => setPosts(request))
  }

  return (
    <div className="Search-form-wrapper">
        <div className="Search-form-button">
            <Search class="Search-form-button-img" />
        </div>
        <div className="Search-form-field">
            <input className="Search-form-field-input" onChange={postsRequest} aria-autocomplete="list" aria-label="Поисковый запрос" autocapitalize="sentences" autocomplete="off" autocorrect="off" placeholder="Поиск в Твиттере" role="combobox" spellcheck="false" enterkeyhint="search" type="text" dir="auto" value=""></input>
        </div>
    </div>
  );
}

export default SearchForm