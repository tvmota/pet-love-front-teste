import Swal from 'sweetalert2/dist/sweetalert2.js'

export const showError = (opt) => {
  Swal.fire(Object.assign(opt, { type: 'error' }))
}

export const showWarn = (opt) => {
  Swal.fire(Object.assign(opt, { type: 'warning' }))
}
