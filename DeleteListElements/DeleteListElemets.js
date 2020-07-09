const removeTask = (e) => {
 const list = e.target.dataset.key;
 document.querySelector(`li[data-key="${list}"]`).remove()

}

document.querySelectorAll('button[data-key]').forEach(item => item.addEventListener('click', removeTask))