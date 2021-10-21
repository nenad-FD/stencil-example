import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'accounts-list',
  styleUrl: 'accounts-list.css',
  shadow: true,
})
export class AccountsList {
  @Prop({ mutable: true, reflect: true }) data;
  @Prop() readMore: boolean;

  render() {
    console.log('ACC LIST', this.data);
    return (
      <main class="accounts-list">
        <div class="accounts-list-container">
          <h3 class="accounts-list-heading">Accounts list</h3>
          <div class="accounts">
            {this.data.map(account => {
              return <account-card key={account.id} account={account} read-more={this.readMore}></account-card>;
            })}
          </div>
        </div>
      </main>
    );
  }
}
