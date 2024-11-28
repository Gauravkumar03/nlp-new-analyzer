// js files
import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// const formdata = new FormData();
// formdata.append("key", "026806fa4e8265f57d204f935e59ea05");
// formdata.append("url", "https://www.billboard.com/lists/marilyn-manson-abuse-allegations-timeline/");
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };

// fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
//     .then(response => response.json())
//     .then(data => console.log(data))



export {
    checkForName,
    handleSubmit
}
