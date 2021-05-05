import './sass/main.scss';
import menuMarkup from './templates/menuList.hbs';
import menuData from './data/menu.json'

const refs = {
    themBody: document.body,
    menuList: document.querySelector('.js-menu'),
    themCheckBox: document.querySelector('#theme-switch-toggle'),
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// function ulListMenu(menuData) {
//     return menuData.map(menuMarkup).join('');
// }
// refs.menuList.insertAdjacentHTML('beforeend', ulListMenu(menuData));

refs.menuList.insertAdjacentHTML('beforeend', menuMarkup(menuData));

refs.themCheckBox.addEventListener('click', changeThemaBody);

function changeThemaBody(e) {
    // console.dir(e.target);
    if (e.target.checked) {
        refs.themBody.classList.add(Theme.DARK);
        refs.themBody.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', Theme.DARK);
        return
    }
        refs.themBody.classList.add(Theme.LIGHT);
        refs.themBody.classList.remove(Theme.DARK);
        localStorage.setItem('theme', Theme.LIGHT);
};

function saveThemaBody() {
    // console.dir(localStorage.theme === 'dark-theme');
    console.dir(refs.themCheckBox.checked);
     if (localStorage.theme === 'dark-theme') {
         refs.themBody.classList.add(Theme.DARK);
         refs.themCheckBox.checked = true;
    }
    else {
         refs.themBody.classList.add(Theme.LIGHT);
         refs.themCheckBox.checked = false;
    }
}

saveThemaBody()



