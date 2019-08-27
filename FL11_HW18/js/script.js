function makingRequest(method, url, json) {
    showSpinner()
    return new Promise(function (resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        if (method === 'GET') {
            xhr.send();
        } else if (method === 'PUT') {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            xhr.send(json);
        } else if (method === 'DELETE') {
            xhr.send(null);
        }

        xhr.onload = function () {
            if (xhr.status === 200) {
                let result = JSON.parse(xhr.responseText)
                resolve(result)
            } else {
                console.error(xhr.statusText);
            }
        };
        xhr.onerror = function (e) {
            console.error(xhr.statusText);
            reject(e)
        };
    })
}

function documentWrite(data) {
    Array.prototype.forEach.call(data, function (x) {
        let userfield = document.createElement('tr');
        userfield.setAttribute('class', 'userField');
        userfield.setAttribute('id', x.id);

        let avatar = document.createElement('td');
        avatar.setAttribute('class', 'avatar');
        let avatarImg = document.createElement('div');
        avatarImg.setAttribute('class', 'avatarImg');
        avatar.appendChild(avatarImg)
        makingRequest('GET', 'https://api.thecatapi.com/v1/images/search?limit=1&size=small&mime_types=jpg')
            .then(data => {
                avatarImg.style.backgroundImage = `url(${data[0].url})`
            })
            .catch(err => console.error(err));
        userfield.appendChild(avatar);

        let name = document.createElement('td');
        name.setAttribute('class', 'name');
        let nameText = x.name;
        name.innerHTML = nameText;
        userfield.appendChild(name);

        let username = document.createElement('td');
        username.setAttribute('class', 'userName');
        let userNameText = x.username;
        username.innerHTML = userNameText;
        userfield.appendChild(username);

        let email = document.createElement('td');
        email.setAttribute('class', 'email');
        let emailText = x.email;
        email.innerHTML = emailText;
        userfield.appendChild(email);

        let phone = document.createElement('td');
        phone.setAttribute('class', 'phone');
        let phoneText = x.phone;
        phone.innerHTML = phoneText;
        userfield.appendChild(phone);

        let website = document.createElement('td');
        username.setAttribute('class', 'website');
        let websiteText = x.website;
        website.innerHTML = websiteText;
        userfield.appendChild(website);

        let company = document.createElement('td');
        company.setAttribute('class', 'company');
        let companyText = `name: <span>${x.company.name}</span>;<br> bs: <span>${x.company.bs}</span>;<br> catchPhrase: <span>${x.company.catchPhrase}</span>;`;
        company.innerHTML = companyText;
        userfield.appendChild(company);

        let address = document.createElement('td');
        address.setAttribute('class', 'address');
        let addressText = `city: <span>${x.address.city}</span>;<br> street: <span>${x.address.street}</span>;<br> suite: <span>${x.address.suite}</span>;<br> zipcode: <span>${x.address.zipcode}</span>; <br> geo: <br> lat: <span>${x.address.geo.lat}</span>; <br> lng: <span>${x.address.geo.lng}</span>;`;
        address.innerHTML = addressText;
        userfield.appendChild(address);

        let buttons = document.createElement('td');
        let editIcon = document.createElement('i');
        editIcon.setAttribute('class', 'material-icons');
        editIcon.innerHTML = 'edit';
        buttons.appendChild(editIcon);
        let deleteIcon = document.createElement('i');
        deleteIcon.className = 'material-icons';
        deleteIcon.innerHTML = 'delete';
        buttons.appendChild(deleteIcon);
        userfield.appendChild(buttons);
        let wrapper = document.getElementById('user-list');
        wrapper.appendChild(userfield);

        deleteIcon.onclick = function deleteUser() {
            let item = document.getElementById(x.id)
            makingRequest('DELETE', `https://jsonplaceholder.typicode.com/users/${x.id}`)
                .then(() => {
                    item.parentNode.removeChild(item);
                    hideSpinner();
                })
                .catch(err => {
                    console.error(err);
                    hideSpinner()
                })
        }

        editIcon.onclick = function editUser() {
            changeInf(this.parentNode.parentNode)
            this.parentNode.parentNode.style.display = 'none';
        }

        name.onclick = function showPostsAndComents() {
            showInfo(x.id)
        }
    });
}

makingRequest('GET', 'https://jsonplaceholder.typicode.com/users')
    .then(data => {
        documentWrite(data);
        hideSpinner()
    })
    .catch(err => {
        console.error(err);
        hideSpinner()
    })

function changeInf(inf) {
    let userfieldChange = document.createElement('tr');
    userfieldChange.setAttribute('class', 'userFieldChange');

    let avatar = document.createElement('td');
    userfieldChange.appendChild(avatar);

    let name = document.createElement('td');
    name.setAttribute('class', 'name');
    let nameChanger = document.createElement('input');
    nameChanger.type = 'text';
    nameChanger.value = inf.childNodes[1].innerHTML;
    name.appendChild(nameChanger);
    userfieldChange.appendChild(name);

    let username = document.createElement('td');
    username.setAttribute('class', 'userName');
    let usernameChanger = document.createElement('input');
    usernameChanger.type = 'text';
    usernameChanger.value = inf.childNodes[2].innerHTML;
    username.appendChild(usernameChanger);
    userfieldChange.appendChild(username);

    let email = document.createElement('td');
    email.setAttribute('class', 'email');
    let emailChanger = document.createElement('input');
    emailChanger.type = 'text';
    emailChanger.value = inf.childNodes[3].innerHTML;
    email.appendChild(emailChanger);
    userfieldChange.appendChild(email);

    let phone = document.createElement('td');
    phone.setAttribute('class', 'phone');
    let phoneChanger = document.createElement('input');
    phoneChanger.type = 'text';
    phoneChanger.value = inf.childNodes[4].innerHTML;
    phone.appendChild(phoneChanger);
    userfieldChange.appendChild(phone);

    let website = document.createElement('td');
    username.setAttribute('class', 'website');
    let websiteChanger = document.createElement('input');
    websiteChanger.type = 'text';
    websiteChanger.value = inf.childNodes[5].innerHTML;
    website.appendChild(websiteChanger);
    userfieldChange.appendChild(website);

    let company = document.createElement('td');
    let companyName = document.createElement('p');
    companyName.innerHTML = 'name:';
    company.appendChild(companyName);
    let companyNameChanger = document.createElement('input');
    companyNameChanger.type = 'text';
    companyNameChanger.value = inf.childNodes[6].childNodes[1].innerHTML;
    company.appendChild(companyNameChanger);
    let companyBs = document.createElement('p');
    companyBs.innerHTML = 'bs:';
    company.appendChild(companyBs);
    let companyBsChanger = document.createElement('input');
    companyBsChanger.type = 'text';
    companyBsChanger.value = inf.childNodes[6].childNodes[5].innerHTML;
    company.appendChild(companyBsChanger);
    let companyCatchPhrase = document.createElement('p');
    companyCatchPhrase.innerHTML = 'catchPhrase:';
    company.appendChild(companyCatchPhrase);
    let companyCatchPhraseChanger = document.createElement('input');
    companyCatchPhraseChanger.type = 'text';
    companyCatchPhraseChanger.value = inf.childNodes[6].childNodes[9].innerHTML;
    company.appendChild(companyCatchPhraseChanger);
    userfieldChange.appendChild(company);

    let address = document.createElement('td');
    let addressCity = document.createElement('p');
    addressCity.innerHTML = 'city:';
    address.appendChild(addressCity);
    let addressCityChanger = document.createElement('input');
    addressCityChanger.type = 'text';
    addressCityChanger.value = inf.childNodes[7].childNodes[1].innerHTML;
    address.appendChild(addressCityChanger);
    let addressStreet = document.createElement('p');
    addressStreet.innerHTML = 'street:';
    address.appendChild(addressStreet);
    let addressStreetChanger = document.createElement('input');
    addressStreetChanger.type = 'text';
    addressStreetChanger.value = inf.childNodes[7].childNodes[5].innerHTML;
    address.appendChild(addressStreetChanger);
    let addressSuite = document.createElement('p');
    addressSuite.innerHTML = 'suite:';
    address.appendChild(addressSuite);
    let addressSuiteChanger = document.createElement('input');
    addressSuiteChanger.type = 'text';
    addressSuiteChanger.value = inf.childNodes[7].childNodes[9].innerHTML;
    address.appendChild(addressSuiteChanger);
    let addressZipcode = document.createElement('p');
    addressZipcode.innerHTML = 'zipcode:';
    address.appendChild(addressZipcode);
    let addressZipcodeChanger = document.createElement('input');
    addressZipcodeChanger.type = 'text';
    addressZipcodeChanger.value = inf.childNodes[7].childNodes[13].innerHTML;
    address.appendChild(addressZipcodeChanger);
    let addressGeo = document.createElement('p');
    addressGeo.innerHTML = 'geo:';
    address.appendChild(addressGeo);
    let addressGeoLat = document.createElement('p');
    addressGeoLat.innerHTML = 'lat:';
    address.appendChild(addressGeoLat);
    let addressGeoLatChanger = document.createElement('input');
    addressGeoLatChanger.type = 'text';
    addressGeoLatChanger.value = inf.childNodes[7].childNodes[19].innerHTML;
    address.appendChild(addressGeoLatChanger);
    let addressGeoLng = document.createElement('p');
    addressGeoLng.innerHTML = 'lng:';
    address.appendChild(addressGeoLng);
    let addressGeoLngChanger = document.createElement('input');
    addressGeoLngChanger.type = 'text';
    addressGeoLngChanger.value = inf.childNodes[7].childNodes[23].innerHTML;
    address.appendChild(addressGeoLngChanger);
    userfieldChange.appendChild(address);

    let buttons = document.createElement('td');
    let saveIcon = document.createElement('i');
    saveIcon.setAttribute('class', 'material-icons');
    saveIcon.innerHTML = 'save';
    buttons.appendChild(saveIcon);
    userfieldChange.appendChild(buttons);

    inf.parentNode.insertBefore(userfieldChange, inf.nextSibling);

    saveIcon.onclick = function saveChanges() {
        const changedInfo = {};
        changedInfo.name = nameChanger.value;
        changedInfo.username = usernameChanger.value;
        changedInfo.email = emailChanger.value;
        changedInfo.phone = phoneChanger.value;
        changedInfo.website = websiteChanger.value;
        changedInfo.company = {};
        changedInfo.company.name = companyNameChanger.value;
        changedInfo.company.bs = companyBsChanger.value;
        changedInfo.company.catchPhrase = companyCatchPhraseChanger.value;
        changedInfo.address = {};
        changedInfo.address.city = addressCityChanger.value;
        changedInfo.address.street = addressStreetChanger.value;
        changedInfo.address.suite = addressSuiteChanger.value;
        changedInfo.address.zipcode = addressZipcodeChanger.value;
        changedInfo.address.geo = {};
        changedInfo.address.geo.lat = addressGeoLatChanger.value;
        changedInfo.address.geo.lng = addressGeoLngChanger.value;

        let json = JSON.stringify(changedInfo)

        makingRequest('PUT', `https://jsonplaceholder.typicode.com/users/${inf.id}`, json)
            .then(() => {
                inf.childNodes[1].innerHTML = nameChanger.value;
                inf.childNodes[2].innerHTML = usernameChanger.value;
                inf.childNodes[3].innerHTML = emailChanger.value;
                inf.childNodes[4].innerHTML = phoneChanger.value;
                inf.childNodes[5].innerHTML = websiteChanger.value;
                inf.childNodes[6].childNodes[1].innerHTML = companyNameChanger.value;
                inf.childNodes[6].childNodes[5].innerHTML = companyBsChanger.value;
                inf.childNodes[6].childNodes[9].innerHTML = companyCatchPhraseChanger.value;
                inf.childNodes[7].childNodes[1].innerHTML = addressCityChanger.value;
                inf.childNodes[7].childNodes[5].innerHTML = addressStreetChanger.value;
                inf.childNodes[7].childNodes[9].innerHTML = addressSuiteChanger.value;
                inf.childNodes[7].childNodes[13].innerHTML = addressZipcodeChanger.value;
                inf.childNodes[7].childNodes[19].innerHTML = addressGeoLatChanger.value;
                inf.childNodes[7].childNodes[23].innerHTML = addressGeoLngChanger.value;
                userfieldChange.style.display = 'none';
                inf.style.display = '';
                hideSpinner()
            })
            .catch(err => {
                console.error(err)
                hideSpinner()
            })
    }

}

let postsArr = [];

function showInfo(id) {
    makingRequest('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(posts => {
            postsArr = posts
            const postsId = posts.map(post => post.id);
            const commentsPromis = postsId.map(id => {
                return makingRequest('GET', `https://jsonplaceholder.typicode.com/comments?postId=${id}`);
            });

            return Promise.all(commentsPromis);
        })
        .then(comments => {
            postsArr.forEach(x => {
                let post = document.createElement('tr');
                post.setAttribute('class', 'post');

                let title = document.createElement('td');
                title.setAttribute('class', 'title');
                let titleText = x.title;
                title.innerHTML = titleText;
                post.appendChild(title);

                let body = document.createElement('td');
                body.setAttribute('class', 'body');
                let bodyText = x.body;
                body.innerHTML = bodyText;
                post.appendChild(body);

                document.getElementById('posts-table').appendChild(post)
            })

            comments.forEach(x => {
                x.forEach(y => {
                    let comment = document.createElement('tr');
                    comment.setAttribute('class', 'comment');

                    let name = document.createElement('td');
                    name.setAttribute('class', 'name');
                    let nameText = y.name;
                    name.innerHTML = nameText;
                    comment.appendChild(name);

                    let email = document.createElement('td');
                    email.setAttribute('class', 'email');
                    let emailText = y.email;
                    email.innerHTML = emailText;
                    comment.appendChild(email);

                    let body = document.createElement('td');
                    body.setAttribute('class', 'body');
                    let bodyText = y.body;
                    body.innerHTML = bodyText;
                    comment.appendChild(body);

                    document.getElementById('comments-table').appendChild(comment);
                })
            })
            hideSpinner()
            showModal()
        })
        .catch(error => {
            console.error(error);
            hideSpinner()
        });
}

document.getElementById('exit-modal').addEventListener('click', x => {
    document.getElementById('modal').style.display = 'none';
    document.querySelectorAll('.post').forEach(x => {
        document.getElementById('posts-table').removeChild(x)
    })
    document.querySelectorAll('.comment').forEach(x => {
        document.getElementById('comments-table').removeChild(x)
    })
})

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';

}

function showModal() {
    document.getElementById('modal').style.display = 'block';
}