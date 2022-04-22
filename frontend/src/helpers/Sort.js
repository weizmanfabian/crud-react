export const sortCustom = (props) => {
  return (a, b) => {
    for (var i = 0; i < props.length; i++) {
      // props.map(v => {

      // let prop = props[i]

      let { key, desc } = props[i];

      if (a[key] < b[key])
        return desc ? 1 : -1;
      if (a[key] > b[key])
        return desc ? -1 : 1;
      // })
    }
    return 0;
  }
};