
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    if (!e.target.closest('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(item => {
            item.classList.remove('show')
        })
    }

	// Collapse
	if (e.target.closest('[data-bs-toggle=collapse]')) {
		e.preventDefault()
		var toggle = e.target.closest('[data-bs-toggle=collapse]')
		var selector = toggle.getAttribute('data-bs-target') || toggle.getAttribute('href')
		var collapse = document.querySelector(selector)
		if (collapse) {
			if (collapse.style.maxHeight) {
				collapse.style.maxHeight = null
			}
			else {
				collapse.style.maxHeight = collapse.scrollHeight + 'px'
			}
		}
	}

    // Tab
    if (e.target.closest('.nav-tabs')) {
        var tabs = e.target.closest('.nav-tabs')
        var tab_content = tabs.nextElementSibling
        tabs.querySelectorAll('[data-bs-toggle=tab]').forEach((item, index) => {
            item.onclick = (e) => {
                e.preventDefault()
                tabs.querySelectorAll('[data-bs-toggle=tab]').forEach(item => {
                    item.classList.remove('active')
                })
                item.classList.add('active')

                tab_content.querySelectorAll('.tab-pane').forEach((item, index) => {
                    item.classList.remove('active', 'show')
                })
                tab_content.querySelectorAll('.tab-pane')[index].classList.add('active', 'show')
            }
        })
    }

    // Modal
    if (e.target.closest('[data-bs-toggle=modal]')) {
        var button = e.target.closest('[data-bs-toggle=modal]')
        var modal = document.querySelector(button.getAttribute('data-bs-target'))
        if (modal) {
            var modal_background = document.createElement('div')
            modal_background.classList.add('modal-backdrop', 'fade', 'show')
            document.body.appendChild(modal_background)

            document.body.classList.add('modal-open')
            document.body.style.overflow = 'hidden'

            modal.style.display = 'block'
            // modal.classList.add('show')
            setTimeout(function() {
                modal.classList.add('show')
            }, 1)
        }
    }
    if (e.target.closest('[data-bs-dismiss=modal]') || e.target.closest('.modal-backdrop') || e.target.classList.contains('modal')) {
        document.body.classList.remove('modal-open')
        document.body.style.overflow = ''
        document.querySelectorAll('.modal').forEach(item => {
            item.classList.remove('show')
            item.style.display = ''
        })
        document.querySelector('.modal-backdrop').remove()
    }






})

