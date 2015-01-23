import Mixin from '../';

const component = {
  state: {
    foo: 'bar',
    a: {
      b: {
        c: {
          d: {
            e: 'zoo',
          },
          f: {
            g: {
              h: 'animal',
            },
          },
        },
      },
    },
  },
  maybeState: Mixin.maybeState,
};

component.maybeState('foo').should.be.exactly('bar');
(component.maybeState('bar') === null).should.be.true;
(component.maybeState('a', 'b') !== null).should.be.true;
component.maybeState('a', 'b', 'c', 'd', 'e').should.be.exactly('zoo');
(component.maybeState('a', 'c', 'b', 'd', 'e') === null).should.be.true;
