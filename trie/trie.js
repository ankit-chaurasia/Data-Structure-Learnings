class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(256).fill(null);
    }
}

class Trie {
    constructor() {

    }

    insert(root, key) {
        for(let char of key) {
            const index = char.charCodeAt(0);
            if(root.children[index] === null) {
                root.children[index] = new TrieNode();
            }
            root = root.children[index];
        }
        root.isEndOfWord = true;
    }

    search(root, key) { 
        for(let char of key) {
            const index = char.charCodeAt(0);
            if(!root || !root.children) {
                return false;
            }
            root = root.children[index];
        }
        return root && root.isEndOfWord;
    }
}

var trie = new Trie();

(function () {
    // Input keys (use only 'a' through 'z'
    // and lower case)
    var keys = ["the", "a", "there",
        "answer", "any", "by",
        "bye", "their"];
    const root = new TrieNode();
    // Construct trie
    for (let i = 0; i < keys.length; i++)
        trie.insert(root, keys[i]);
    console.log(trie.search(root, "the"));
    console.log(trie.search(root, "their"));
    console.log(trie.search(root, "ankit"));
})();
