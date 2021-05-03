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

    maxDepthDFS(root) {
        //if root is undefined, depth is 0
        if (!root) return 0
        // variable to store the maximum levels
        let max = 0
        //helper function to traverse the tree
        //recursively increment the levels by one
        const dfs = (node, levels) => {
            if (!node) return 0;
            //compare levels and max to pass the maximum levels
            if (levels > max) max = levels
            //traverse all children of the current node
            for (let child of node.children) {
                //increment the levels by one
                dfs(child, levels + 1);
            }
        }
        //when root is not null, the tree has at least one level,
        //so we pass down 1
        dfs(root, 1)
        //return the maximum levels
        console.log("Max Depth DFS:", max);
        return max
    }

    maxDepthBFS(root) {
        //check if root is null
        if (!root) return 0
        //implement queue to complete traversing
        let queue = []
        //variable to increment while counting levels
        let depth = 0
        //push the root to the queue
        queue.push(root)

        //start traverse
        while (queue.length > 0) {
            //n-ary with children, 
            //queue sometimes has multiple nodes of the same level
            //we need to iterate all nodes
            let size = queue.length
            //set current variable to store current node
            let current
            //loop through the queue
            for (let i = 0; i < size; i++) {
                //set current as first node in the queue
                current = queue.shift();
                if (current) {
                    //iterate the children of the current node
                    for (let child of current.children) {
                        //push child of the same level in the queue
                        queue.push(child)
                    }
                }
            }
            //after iterate same level node and move to the next level
            //increment the depth by one
            depth++
        }

        //return the number of levels in the tree
        console.log("Max Depth BFS:", depth);
        return depth
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
    // trie.maxDepthDFS(root);
    trie.maxDepthBFS(root);
})();