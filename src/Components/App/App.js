import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom';
import { SearchBar } from '../Components/SearchBar/SearchBar.js'
import { SearchResults } from '../Components/SearchResults/SearchResults.js'
import { SearchBar } from '../Components/SearchBar/SearchBar.js'
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchResults: [name, artist, album, id] };
  }

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <!-- Add a SearchBar component -->
          <div class="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <!-- Add a Playlist component -->
          </div>
        </div>
      </div>
    );
  };
};

export default App;

