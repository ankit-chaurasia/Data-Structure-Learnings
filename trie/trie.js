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
        for (let char of key) {
            const index = char.charCodeAt(0);
            if (root.children[index] === null) {
                root.children[index] = new TrieNode();
            }
            root = root.children[index];
        }
        root.isEndOfWord = true;
    }

    search(root, key) {
        for (let char of key) {
            const index = char.charCodeAt(0);
            if (!root || !root.children) {
                return false;
            }
            root = root.children[index];
        }
        return root && root.isEndOfWord;
    }

    isLastNode(root) {
        if (!root) return true;
        for (let i = 0; i < root.children.length; i++) {
            if (root.children[i]) {
                return false;
            }
        }
        return true;
    }

    suggestionRecursion(root, key) {
        if (root.isEndOfWord) {
            console.log("Suggestion s:", key);
        }
        if (this.isLastNode(root)) {
            return;
        }
        for (let i = 0; i < root.children.length - 1; i++) {
            if (root.children[i]) {
                key = key.concat(String.fromCharCode(i));
                this.suggestionRecursion(root.children[i], key);
                key = key.slice(0, key.length - 1);
            }
        }
    }

    printAutoSuggestions(root, key) {
        for (let char of key) {
            const index = char.charCodeAt(0);
            if (!root || !root.children[index]) {
                console.log("prefix is not present in the trie");
                return false;
            }
            root = root.children[index];
        }
        const isWord = root.isEndOfWord;
        const isLastNode = this.isLastNode(root);
        if (isWord && isLastNode) {
            console.log("Suggestion P:", key);
            return true;
        }
        if (!isLastNode) {
            this.suggestionRecursion(root, key);
        }
    }
}

var trie = new Trie();

// (function () {
//     // Input keys (use only 'a' through 'z'
//     // and lower case)
//     var keys = ["the", "a", "there",
//         "answer", "any", "by",
//         "bye", "their"];
//     const root = new TrieNode();
//     // Construct trie
//     for (let i = 0; i < keys.length; i++)
//         trie.insert(root, keys[i]);
//     console.log(trie.search(root, "the"));
//     console.log(trie.search(root, "their"));
//     console.log(trie.search(root, "ankit"));
// })();

(function () {
    // Input keys (use only 'a' through 'z'
    // and lower case)
    var keys = ["hello", "dog", "hell", "cat", "a", "hel", "help", "helps", "helping"];
    const root = new TrieNode();
    // Construct trie
    for (let i = 0; i < keys.length; i++)
        trie.insert(root, keys[i]);
    // console.log(trie.search(root, "hello"));
    // console.log(trie.search(root, "hel"));

    trie.printAutoSuggestions(root, "hel");
})();