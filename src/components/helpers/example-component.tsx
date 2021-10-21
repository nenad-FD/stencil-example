import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-component',
  styleUrl: 'example-component.css',
  shadow: true,
})
export class ExampleComponent {
  render() {
    return (
      <div class="example-component">
        <h2>Example component</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum quibusdam dolor fuga placeat maxime necessitatibus accusantium enim tenetur deserunt vitae amet a
          facilis provident id repudiandae, molestiae iure exercitationem at!
        </p>
      </div>
    );
  }
}
