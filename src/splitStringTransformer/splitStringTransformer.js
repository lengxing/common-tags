const splitStringTransformer = splitBy => ({
  onSubstitution(substitution, resultSoFar) {
    if (splitBy != null && typeof splitBy === 'string') {
      if (typeof substitution === 'string' && substitution.includes(splitBy)) {
        substitution = substitution.split(splitBy);
      }
    } else {
      throw new Error('You need to specify a string character to split by.');
    }
    return substitution;
  },
});

export default splitStringTransformer;
