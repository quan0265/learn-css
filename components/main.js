

function getBoundingClientRect(element, // eslint-disable-next-line unused-imports/no-unused-vars
    includeScale) {

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1; // FIXME:
    // `offsetWidth` returns an integer while `getBoundingClientRect`
    // returns a float. This results in `scaleX` or `scaleY` being
    // non-1 when it should be for elements that aren't a full pixel in
    // width or height.
    // if (isHTMLElement(element) && includeScale) {
    //   const offsetHeight = element.offsetHeight;
    //   const offsetWidth = element.offsetWidth;
    //   // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    //   // Fallback to 1 in case both values are `0`
    //   if (offsetWidth > 0) {
    //     scaleX = rect.width / offsetWidth || 1;
    //   }
    //   if (offsetHeight > 0) {
    //     scaleY = rect.height / offsetHeight || 1;
    //   }
    // }

    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}

document.querySelector('body').addEventListener('click', (e) => {

	// dropdown
	if (e.target.closest('.dropdown')) {
		e.preventDefault()
		var dropdown = e.target.closest('.dropdown')
		var toggle = dropdown.querySelector('.dropdown-toggle')
		var dropdown_menu = dropdown.querySelector('.dropdown-menu')

		if (toggle && dropdown_menu) {
			dropdown_menu.classList.toggle('show')
		}

	}

	// Collapse
	if (e.target.closest('[data-bs-toggle=collapse]')) {
		e.preventDefault()
		var toggle = e.target.closest('[data-bs-toggle=collapse]')
		var selector = toggle.getAttribute('data-bs-target') || toggle.getAttribute('href')
		var collapse = document.querySelector(selector)
		if (collapse) {
			// collapse.classList.toggle('show')
			// console.log(getBoundingClientRect(collapse))
			// console.log(collapse.scrollHeight)
			if (collapse.style.maxHeight) {
				collapse.style.maxHeight = null
			}
			else {
				collapse.style.maxHeight = collapse.scrollHeight + 'px'
			}
		}
	}
})

