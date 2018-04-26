export default function() {
  let w = window.innerWidth
    || document.documentElement.clientWidth
    || document.getElementsByTagName('body')[0].clientWidth

  return w
}
