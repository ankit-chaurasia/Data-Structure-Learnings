// https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/
// Given a text txt[0..n-1] and a pattern pat[0..m-1], write a function search(char pat[], char txt[]) that prints all occurrences of pat[] in txt[]. You may assume that n > m.

// Examples:

// Input:  txt[] = "THIS IS A TEST TEXT"
//         pat[] = "TEST"
// Output: Pattern found at index 10

// Input:  txt[] =  "AABAACAADAABAABA"
//         pat[] =  "AABA"
// Output: Pattern found at index 0
//         Pattern found at index 9
//         Pattern found at index 12


const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

const computeLPSArray = (pattern, M, lps) => {
    let len = 0;
    let i = 1;
    while (i < M) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len -1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

const KMPSearch = (pattern, text) => {
    const M = pattern.length;
    const N = text.length;
    // Longest prefix and suffix array
    let lps = new Array(M).fill(0);
    lps = computeLPSArray(pattern, M, lps);
    let i = 0;
    let j = 0;
    while (i < N) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === M) {
            console.log(`Pattern found at index: ${j}`);
        } else if (i < N && pattern[j] !== text[i]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }

    }
}


KMPSearch(pattern, text);