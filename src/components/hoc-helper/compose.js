const compose = (...func) => (comp) => {
  return func.reduceRight((prev, fn) => fn(prev), comp)
}

export default compose;