const mahasiswaNim = '20220040091';
const updateData = {
    nama: 'Riski Abdilah Pratama',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Parungkuda'
};

fetch (`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringfy(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));