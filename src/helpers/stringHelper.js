class stringHelper {
  isEmpty = (str) => (!str || str.length === 0)

  isPresent = (str) => (!this.isEmpty(str))
}

export default new stringHelper();
