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
  if (!references[reference]) continue

  const inlineReference = document.createElement('span')
  inlineReference.classList.add('in-text-reference')
  inlineReference.innerHTML = references[reference]
  citation.prepend(inlineReference)
}


// SIMULATED

// Add list item counts
const lists = document.querySelectorAll('ul, ol')

for (let list of lists) {
  const items = list.querySelectorAll('li')
  const itemCount = items.length
  list.dataset.label = `List with ${itemCount} items`

  for (let index = 0; index < itemCount; index += 1) {
    const item = items[index]
    item.dataset.label = `Item ${index + 1} of ${itemCount}`
  }
}


const screenreaderButton = document.querySelector('#screenreader-mode')

screenreaderButton.addEventListener('click', () => {
  document.body.classList.add('simulated')
  const images = document.querySelectorAll('img:not([alt=""])')

  for (let img of images) {
    img.src=""
  }

  // Smooth scroll to top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
})


const resetButton = document.querySelector('#reset-mode')

resetButton.addEventListener('click', () => {
  document.body.classList.remove('simulated')
  const images = document.querySelectorAll('img:not([alt=""])')

  for (let img of images) {
    img.src = img.dataset.src
  }
})
