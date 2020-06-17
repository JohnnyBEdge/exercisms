//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (nucleotide) => {
  // throw new Error("Remove this statement and implement this function");
  let rna = '';
  let nucleotideArray = nucleotide.split('');
  for(let i = 0; i < nucleotideArray.length; i++){
    switch(nucleotideArray[i]){
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A': 
        rna += 'U';
        break;
      case '':
        rna += '';
        break;
    }
  } 
  return rna;
};
