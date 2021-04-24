// https://jsfiddle.net/augburto/ycjezr3L/32/
{/* <div class="a">
    <div class="aa">
        <span class="aaa">
        </span>
        <span class="aab">
        </span>
    </div>
    <div class="ab">
        <span class="aba">
        </span>
        <span class="abb">
        </span>
    </div>
</div> */}

const dfsRecursiveOnHtml = (element) => {
  console.log(element.className);
  Array.from(element.children).forEach((child) => dfsRecursiveOnHtml(child));
}

const DfsStackOnHtml = (element) => {
  const stack = [];
  const result = [];
  stack.push(element);
  while(stack.length) {
    const el = stack.pop();
    result.push(el.className);
    Array.from(el.children).forEach(child => stack.push(child))
  }
  return result;
}

const BfsOnHtml = (element) => {
  const queue = [];
  const result = [];
  queue.push(element);
  while(queue.length) {
    const el = queue.shift();
    result.push(el.className);
    Array.from(el.children).forEach(child => queue.push(child))
  }
  return result;
}

console.log('dfsRecursiveOnHTML')
dfsRecursiveOnHtml(document.getElementsByClassName('a')[0]);

console.log('dfsStackOnHTML');
console.log(DfsStackOnHtml(document.getElementsByClassName('a')[0])); // a,ab,abb,aba,aa,aab,aaa

console.log('bfsOnHTML')
console.log(BfsOnHtml(document.getElementsByClassName('a')[0])); // a,aa,ab,aaa,aab,aba,abb