import './style.scss';

import { store } from './store/index';
import { Search } from './components/search';
import { User } from './components/users';
import { Button } from './components/loadButton';
import {
    ACTION_REMOVE,
    ACTION_ADD
} from './actions/actions';


class App {
    constructor(state, loadInto) {
        this.state = state;
        this.root = loadInto;
        this.users = this.state.data.slice(0, this.state.limit);
        this.loadMore = new Button();
        this.user = new User();
        this.notFound = `
                    <tr class='no-found'>
                      <td colspan="7">
                        <h3 class="no-found-message">
                          No user has been found
                        </h3>
                      </td>
                    </tr>`;
        this.head = () => {
            return `
              <thead class="user-table">
                <tr class="user-table-head">
                  <th class="user-table-column">Photo</th>
                  <th class="user-table-column">Name</th>
                  <th class="user-table-column">Address</th>
                  <th class="user-table-column">Email</th>
                  <th class="user-table-column">Phone Number</th>
                  <th class="user-table-column">Timezone</th>
                  <th class="user-table-column">Actions</th>
                </tr>
              </thead>`;
        };
    }

    createApp() {
        this.root.innerHTML = `
          <table class='table'>  
            ${this.head()}
            <tbody class='table-body'>
              ${this.state.limit > 0 ? this.user.createUser(this.users) : this.notFound}
            </tbody>
          </table>
      ${this.loadMore.addUsers(this.state.limit)}
    `;
    }

    filterUsers() {
        const table = document.querySelector('.table-body');
        const search = document.querySelector('.search-field');
        const filteredUsers = this.users.filter((user) =>
            user.name.toLowerCase().includes(search.value.toLowerCase())
        );
        document.querySelector('.search-field').innerHTML =
            filteredUsers.length;
        if (filteredUsers.length <= 0) {
            table.innerHTML = this.notFound;
        } else {
            let output = '';
            filteredUsers.forEach(x => {
                output += this.user.createUser([x]);
            });
            table.innerHTML = output;
        }
    }
}

const search = new Search();
search.createSearch();


document.getElementById('root').addEventListener('click', function(x) {
    if (x.target.className === 'user-cell-remove') {
        store.dispatch({
            type: ACTION_REMOVE,
            id: x.target.dataset.id
        });
    }
    if (x.target.className === 'load-more-button') {
        store.dispatch({
            type: ACTION_ADD
        });
    }
});

function main() {
    const app = new App(store.getState(), document.querySelector('.root'));
    document
        .querySelector('body')
        .addEventListener('keyup', () => app.filterUsers());
    return app.createApp();
}

store.subscribe(main);

document.addEventListener('DOMContentLoaded', main);
