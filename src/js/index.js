import tools from './tools';
import '../styles/main.scss';

document.getElementById('content').innerHTML = `
  <ul >
    ${tools.map(tool => `
        <div class='card'>
            <li class="item">
                <div class='img-container'>
                    <img src="images/${tool.image}"/>
                </div>
                <div class='text'>
                <h2>${tool.name}</h2>
                <p>${tool.description}</p>
                <div class='btn-container'>
                    <button>Learn more</button>
                </div>
                </div>
            </li>
        </div>`).join('')}
  </ul>
`;



console.log(tools[0].image)