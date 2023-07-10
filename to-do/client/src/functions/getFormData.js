export default function getFormData(id) {
    let form = document.querySelector(id)
    return new FormData(form)
}
