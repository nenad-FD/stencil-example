import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'account-card',
  styleUrl: 'account-card.css',
  shadow: true,
})
export class AccountCard {
  @Prop({ mutable: true, reflect: true }) account;
  @Prop({ mutable: true }) readMore: boolean;
  @State() toggleEdit: boolean = false;

  //Event - za brisanje usera
  @Event() deleteUser: EventEmitter<string>;
  deleteUserHandler(id: string) {
    this.deleteUser.emit(id);
  }

  // @Listen('click', { capture: true })
  // handleClick(ev) {
  //   console.log('click', ev);
  // }
  // @Listen('scroll', { target: 'window' })
  // handleScroll(ev) {
  //   console.log('the body was scrolled', ev);
  // }

  //Functions
  editAccountHandler() {
    this.toggleEdit = !this.toggleEdit;
  }

  render() {
    return (
      <div>
        <article class="card">
          <div class="card-header">
            <h2 class="card-header-heading">dsaada</h2>
          </div>
          <div class="card-body">
            <span>id: {this.account.id}</span>
            <span>name: {this.account.name}</span>
            <span>phone: {this.account.phone}</span>
            <span>website: {this.account.website}</span>
          </div>
          <div class="btns-container">
            <button onClick={this.deleteUserHandler.bind(this, this.account.id)} class="btn-delete">
              Delete
            </button>
            <button onClick={this.editAccountHandler.bind(this)} class="btn-edit">
              Edit
            </button>
          </div>
        </article>
        {this.readMore && <example-component></example-component>}
        {this.toggleEdit && <edit-account data={this.account}></edit-account>}
      </div>
    );
  }
}
