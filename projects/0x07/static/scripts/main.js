const btnDelete = document.querySelectorAll('.btn-delete');
if (btnDelete) {
    const btnArr = Array.from(btnDelete);
    btnArr.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (!confirm('Are you sure you want to delete it?')) {
                e.preventDefault();
            }
        });
    });
}