import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faFolderClosed, faFile, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faFolderClosed, faChevronDown, faFile, faFolderOpen, faUser);

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')
