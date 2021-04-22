// function hash(key, arrrayLen) {
//   let total = 0;
//   for(let val of key) {
//     // map "a" to 1, "b" to 2, "c" to 3 etc.
//     const value = val.charCodeAt(0) - 96
//     total = (total + value) % arrrayLen;
//   }
//   return total;
// }

class HashTable {
  constructor(size = 4) {
    this.keymap = new Array(size);
  }

  hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      // map "a" to 1, "b" to 2, "c" to 3 etc.
      let char = key[i]
      const value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keymap.length;
    }
    return total;
  }

  set(key, value) {
    const hashIndex = this.hash(key);
    if (!this.keymap[hashIndex]) {
      this.keymap[hashIndex] = [];
    }
    this.keymap[hashIndex].push([key, value]);
  }

  get(key) {
    const hashIndex = this.hash(key);
    const val = this.keymap[hashIndex];
    if (val) {
      for (let item of val) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }
    return undefined;
  }

  keys() {
    return this.keymap.reduce((accu, value) => {
      return value.length > 1 ? accu.concat(value.map((item) => item[0])) : accu.concat(value[0][0])
    }, [])
  }

  values() {
    return this.keymap.reduce((accu, value) => {
      return value.length > 1 ? accu.concat(value.map((item) => item[1])) : accu.concat(value[0][1])
    }, [])
  }
}

var ht = new HashTable();
ht.set("hello world", "good bye!!");
ht.set("dogs", "are cool");
ht.set("cats", "are fine");
ht.set("i love", "pizza");
ht.get("dogs");