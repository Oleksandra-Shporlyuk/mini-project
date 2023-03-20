let url = new URL(location.href);
let json = url.searchParams.get('data');
let user = JSON.parse(json);

let divAllInfo = document.createElement('div');
divAllInfo.classList.add('divAllInfo')
//NAME
let divName = document.createElement('h2');
divName.innerText = `Name: ${user.name}`
//USERNAME
let divUserName = document.createElement('h2');
divUserName.innerText = `UserName: ${user.username}`
//PHONE
let divPhone = document.createElement('h3');
divPhone.innerText = `Phone: ${user.phone}`;
//WEBSITE
let divWebSite = document.createElement('h3');
divWebSite.innerText = `Website: ${user.website}`
//ID
let divID = document.createElement('h3');
divID.innerText = `ID: ${user.id}`
//EMAIL
let divEmail = document.createElement('h3');
divEmail.innerText = `Email: ${user.email}`
//ADDRESS
let divAddress = document.createElement('h3');
divAddress.innerText = 'Address:';
let divAddressStreet = document.createElement('p');
divAddressStreet.innerText = `street - ${user.address.street}`
let divAddressCity = document.createElement('p');
divAddressCity.innerText = `city - ${user.address.city}`
let divAddressZipcode = document.createElement('p');
divAddressZipcode.innerText = `zipcode - ${user.address.zipcode}`
let divAddressSuite = document.createElement('p');
divAddressSuite.innerText = `suite - ${user.address.suite}`
//GEO
let divGeo = document.createElement('h3');
divGeo.innerText = 'GEO:';
let divGeoLat = document.createElement('p');
divGeoLat.innerText = `lat - ${user.address.geo.lat}`
let divGeoLng = document.createElement('p');
divGeoLng.innerText = `lng - ${user.address.geo.lng}`
//COMPANY
let divCompany = document.createElement('h3');
divCompany.innerText = 'Company:'
let divCompanyName = document.createElement('p');
divCompanyName.innerText = `name - ${user.company.name}`
let divCompanyCatchPhrase = document.createElement('p');
divCompanyCatchPhrase.innerText = `CatchPhrase - ${user.company.catchPhrase}`;
let divCompanyBs = document.createElement('p');
divCompanyBs.innerText = `bs - ${user.company.bs}`;

//BUTTON
let divBtn = document.createElement('div');
divBtn.classList.add('divBtnStyle');
let btn = document.createElement('button');
btn.classList.add('btnStyle');
btn.innerText = 'posts of current user';

    btn.onclick = function (){
    let url1 = new URL('https://jsonplaceholder.typicode.com/posts');
         fetch(url1)
             .then(value => value.json())
             .then(posts => {
                 let idUser = JSON.parse(user.id);
                 let divPosts = document.createElement('div');
                 divPosts.classList.add('divPostsStyle');
                 for (const post of posts) {
                     if (idUser === post.userId){
                         let divTitlePost = document.createElement('div');
                         divTitlePost.classList.add('titlePost');
                         let titleA = document.createElement('a');
                         titleA.classList.add('ashka')
                         titleA.innerText = `${post.title}`;
                         titleA.href = 'post-details.html?info=' + JSON.stringify(post);
                         divTitlePost.appendChild(titleA);
                         divPosts.appendChild(divTitlePost);
                         document.body.appendChild(divPosts);
                     }
                 }
             })
}
//APPEND
divBtn.append(btn);
divGeo.append(divGeoLat,divGeoLng);
divCompany.append(divCompanyName,divCompanyCatchPhrase,divCompanyBs)
divAddress.append(divAddressStreet,divAddressCity,divAddressZipcode,divAddressSuite,divGeo)
divAllInfo.append(divName,divUserName,divID,divEmail,divPhone,divWebSite,divAddress,divCompany);
document.body.append(divAllInfo,divBtn);
