export default {
  maybeState(...keys) {
    let curr = this.state;
    const len = keys.length;
    for(let k = 0; k < len; k = k + 1) {
      if(!_.isObject(curr) || curr[keys[k]] === void 0) {
        return null;
      }
      curr = curr[keys[k]];
    }
    return curr;
  },
};
