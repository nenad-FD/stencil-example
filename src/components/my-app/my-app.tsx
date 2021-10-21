import { Component, h, State, Listen } from '@stencil/core';
import { Build } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.css',
  shadow: true,
})
export class MyApp {
  @State() accounts = [];
  @State() newAccount = {
    id: '',
    name: '',
    phone: '',
    website: '',
  };

  @State() readMore: boolean = false;

  //-----------------Functions----------------------

  showMoreHandler(e) {
    e.preventDefault();
    this.readMore = !this.readMore;
  }

  //setNewAccounts -> this function set new account based on the input fields
  setNewAccount(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let name = (event.target as HTMLInputElement).name;
    this.newAccount[name] = value;
  }
  // Add new account to the accounts
  addAccount(event: Event) {
    event.preventDefault();
    //push newAccount to the accounts array
    this.accounts = [...this.accounts, this.newAccount];
  }
  //Delete account
  @Listen('deleteUser')
  deleteAccountHandler(event: CustomEvent<string>) {
    // console.log('Received the custom todoCompleted event: ', event.detail);
    let newAccounts = [...this.accounts];
    let newState = newAccounts.filter(acc => acc.id !== event.detail);
    this.accounts = [...newState];
  }

  //----------------Lifecycle Components-----------------------
  componentWillLoad() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        this.accounts = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log('Build', Build);
    return (
      <div class="app">
        <div class="container">
          <h3 class="app-title">Add new account</h3>
          {/*------------Main section----------- */}
          <section class="main-section">
            <form class="form-option" onSubmit={this.addAccount.bind(this)}>
              <input type="text" placeholder="id" name="id" class="form-item" onInput={this.setNewAccount.bind(this)} />
              <br />

              <input type="text" placeholder="name" name="name" class="form-item" onInput={this.setNewAccount.bind(this)} />
              <br />
              <input type="text" placeholder="phone" name="phone" class="form-item" onInput={this.setNewAccount.bind(this)} />
              <br />
              <input type="text" placeholder="website" name="website" class="form-item" onInput={this.setNewAccount.bind(this)} />
              <br />
              <button class="add-btn" type="submit">
                Add account
              </button>
              <button class="read-btn" onClick={this.showMoreHandler.bind(this)}>
                Read more
              </button>
            </form>
          </section>
        </div>

        {/*------------Accounts list----------- */}
        <accounts-list read-more={this.readMore} data={this.accounts}></accounts-list>
      </div>
    );
  }
}
