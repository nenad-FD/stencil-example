import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'edit-account',
  styleUrl: 'edit-account.css',
  shadow: true,
})
export class EditAccount {
  @Prop({ mutable: true, reflect: true }) data;

  //set edited acccount
  setEditedAccount(event: Event) {
    let value = (event.target as HTMLInputElement).value;
    let name = (event.target as HTMLInputElement).name;
    this.data[name] = value;
  }

  render() {
    return (
      <div class="edit-account">
        <h3>Edit account</h3>
        <input class="form-item" name="name" type="text" value={this.data.name} onChange={this.setEditedAccount.bind(this)} />
        <input class="form-item" name="phone" type="text" value={this.data.phone} onChange={this.setEditedAccount.bind(this)} />
        <input class="form-item" name="website" type="text" value={this.data.website} onChange={this.setEditedAccount.bind(this)} />
      </div>
    );
  }
}
