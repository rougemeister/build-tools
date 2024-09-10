import tools from './tools';
import '../styles/main.scss';

document.getElementById('content').innerHTML = `
  <ul >
    ${tools.map(tool => `<li class="item">${tool.name} - ${tool.description}
        <img src="./images/${tool.image}"/></li>`).join('')}
  </ul>
`;



console.log(tools[0].image)