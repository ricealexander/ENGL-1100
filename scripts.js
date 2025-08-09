// Pull data out of the references section
const references = {}
const referenceSection = document.querySelector('#References ul')

for (let reference of referenceSection.children) {
  references[reference.id] = reference.innerHTML
}


// Add reference data to the citations
const citations = document.querySelectorAll('article cite')

for (let citation of citations) {
  const reference = citation.dataset.reference
  console.log(reference, references[reference])
  if (!references[reference]) continue

  const inlineReference = document.createElement('span')
  inlineReference.classList.add('in-text-reference')
  inlineReference.innerHTML = references[reference]
  citation.prepend(inlineReference)
}