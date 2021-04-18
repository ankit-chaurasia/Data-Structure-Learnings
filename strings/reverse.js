// Reverse a string
function reverse(s){
  // add whatever parameters you deem necessary - good luck!
  if(!s.length) return '';
  return reverse(s.slice(1)) + s[0];
}

reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'