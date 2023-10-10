function loadData(){
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data =>displayData(data.data))
}

const displayData = (phones) => {
    console.log(phones);
    const phone1 = document.getElementById('phones')
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div')
        div.innerHTML=`
        <h2>${phone.brand}</h2>
        <img src="${phone.image}">
        <h2>${phone.phone_name}</h2>
        `
        phone1.appendChild(div)
        console.log(div);
        
    });
}
loadData()