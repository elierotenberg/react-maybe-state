React Maybe State
=================

Kind of like the Maybe monad but for state values. No more (this.state.foo ? (this.state.foo.bar ? f(this.state.foo.bar) : null) : null) boilerplate.

##### Example

```js
render() {
  return <div>My name this {this.maybeState('identity', 'firstName')} {this.maybeState('identity', 'lastName')}.</div>;
}
```
