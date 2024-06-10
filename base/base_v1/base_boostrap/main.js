
// Lightbox
var lightbox = {
    current_index: 1,
    lightbox_data: null,
    img_length: 0,
    handleEvents: function() {
        var _this = this
        document.querySelectorAll('.modal--lightbox [data-bs-lightbox=next]').forEach(item => {
            item.onclick = function () {
                _this.next()
            }
        })
        document.querySelectorAll('.modal--lightbox [data-bs-lightbox=prev]').forEach(item => {
            item.onclick = function () {
                _this.prev()
            }
        })

        document.querySelector('.modal--lightbox').onclick = function(e) {
            if (e.target.classList.contains('modal--lightbox') ) {
                _this.close()
            }
        }
        document.querySelectorAll('.modal--lightbox [data-bs-dismiss=lightbox]').forEach(item => item.onclick = _this.close)
    },
    show: function(num) {
        var _this = this
        _this.current_index += num
        if (_this.current_index > _this.img_length) {
            _this.current_index = 1
        }
        if (_this.current_index < 1) {
            _this.current_index = _this.img_length
        }
        document.querySelectorAll('.modal--lightbox .lightbox-item').forEach(function(item, index) {
            item.style.display = 'none';
        })
        document.querySelectorAll('.modal--lightbox .lightbox-item')[_this.current_index - 1].style.display = 'block'
    },
    next: function() {
        this.show(1)
    },
    prev: function() {
        this.show(-1)
    },
    close: function() {
        document.querySelector(".modal--lightbox").style.display = "none";
    },
    init : function() {
        var _this = this
        document.querySelectorAll('.lightbox-data img').forEach(function(item, index) {
            item.addEventListener('click', function(e) {
                _this.lightbox_data = e.target.closest('.lightbox-data')
                _this.img_length = _this.lightbox_data.querySelectorAll('img').length

                document.querySelectorAll('.modal--lightbox .lightbox-content .lightbox-item').forEach(item => item.remove())
                var html = ''
                _this.lightbox_data.querySelectorAll('img').forEach((item, index) => {
                    var display = 'none'
                    if (_this.current_index == index + 1) {
                        display = 'block'
                    }
                    html += `<div class="lightbox-item" style="display: ${display}">
                        <div class="numbertext">${index + 1} / ${_this.img_length}</div>
                        <img src="${item.getAttribute('src')}">
                    </div>`
                })
                document.querySelector('.modal--lightbox .lightbox-content').insertAdjacentHTML('afterbegin', html)
                document.querySelector(".modal--lightbox").style.display = "flex";

                _this.handleEvents()
            })
        })
    }
}
lightbox.init()

//  bs validate
var forms = document.querySelectorAll('form.needs-validation')
    forms.forEach(function(form) {
        form.addEventListener('submit', function() {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            
            form.classList.add('was-validated')
        })
    })